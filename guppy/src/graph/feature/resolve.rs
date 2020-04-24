// Copyright (c) The cargo-guppy Contributors
// SPDX-License-Identifier: MIT OR Apache-2.0

use crate::debug_ignore::DebugIgnore;
use crate::graph::feature::{
    FeatureEdge, FeatureFilter, FeatureGraph, FeatureId, FeatureMetadata, FeatureQuery,
};
use crate::graph::resolve_core::{ResolveCore, Topo};
use crate::graph::{DependencyDirection, PackageMetadata, PackageSet};
use crate::petgraph_support::IxBitSet;
use crate::PackageId;
use fixedbitset::FixedBitSet;
use petgraph::graph::NodeIndex;
use std::iter::FromIterator;

impl<'g> FeatureGraph<'g> {
    /// Creates a new `FeatureSet` consisting of all members of this feature graph.
    ///
    /// This will include features that aren't depended on by any workspace packages.
    ///
    /// In most situations, `query_workspace().resolve()` is preferred. Use `resolve_all` if you
    /// know you need parts of the graph that aren't accessible from the workspace.
    pub fn resolve_all(&self) -> FeatureSet<'g> {
        FeatureSet {
            graph: DebugIgnore(*self),
            core: ResolveCore::all_nodes(self.dep_graph()),
        }
    }

    /// Creates a new `FeatureSet` consisting of all packages in this `PackageSet`, subject to the
    /// provided filter.
    pub fn resolve_packages(
        &self,
        packages: &PackageSet<'_>,
        filter: impl FeatureFilter<'g>,
    ) -> FeatureSet<'g> {
        let included: IxBitSet = self.feature_ixs_for_package_ixs_filtered(
            // The direction of iteration doesn't matter.
            packages.clone().into_ixs(DependencyDirection::Forward),
            filter,
        );
        FeatureSet {
            graph: DebugIgnore(*self),
            core: ResolveCore::from_included(included.0),
        }
    }
}

/// A set of resolved feature IDs in a feature graph.
///
/// Created by `FeatureQuery::resolve` or the `FeatureGraph::resolve_` methods.
#[derive(Clone, Debug)]
pub struct FeatureSet<'g> {
    graph: DebugIgnore<FeatureGraph<'g>>,
    core: ResolveCore<FeatureGraph<'g>>,
}

impl<'g> FeatureSet<'g> {
    pub(super) fn new(query: FeatureQuery<'g>) -> Self {
        let graph = query.graph;
        Self {
            graph: DebugIgnore(graph),
            core: ResolveCore::new(graph.dep_graph(), query.params),
        }
    }

    #[allow(dead_code)]
    pub(super) fn from_included(graph: FeatureGraph<'g>, included: FixedBitSet) -> Self {
        Self {
            graph: DebugIgnore(graph),
            core: ResolveCore::from_included(included),
        }
    }

    /// Returns the number of feature IDs in this set.
    pub fn len(&self) -> usize {
        self.core.len()
    }

    /// Returns true if no feature IDs were resolved in this set.
    pub fn is_empty(&self) -> bool {
        self.core.is_empty()
    }

    /// Returns true if this set contains the given feature ID, false if it doesn't, or None if it
    /// wasn't found.
    pub fn contains<'a>(&self, feature_id: impl Into<FeatureId<'a>>) -> Option<bool> {
        Some(
            self.core
                .contains(self.graph.feature_ix(feature_id.into())?),
        )
    }

    // ---
    // Set operations
    // ---

    /// Returns a `FeatureSet` that contains all packages present in at least one of `self`
    /// and `other`.
    ///
    /// ## Panics
    ///
    /// Panics if the package graphs associated with `self` and `other` don't match.
    pub fn union(&self, other: &Self) -> Self {
        assert!(
            ::std::ptr::eq(self.graph.package_graph, self.graph.package_graph),
            "package graphs passed into union() match"
        );
        let mut res = self.clone();
        res.core.union_with(&other.core);
        res
    }

    /// Returns a `FeatureSet` that contains all packages present in both `self` and `other`.
    ///
    /// ## Panics
    ///
    /// Panics if the package graphs associated with `self` and `other` don't match.
    pub fn intersection(&self, other: &Self) -> Self {
        assert!(
            ::std::ptr::eq(self.graph.package_graph, self.graph.package_graph),
            "package graphs passed into intersection() match"
        );
        let mut res = self.clone();
        res.core.intersect_with(&other.core);
        res
    }

    /// Returns a `FeatureSet` that contains all packages present in `self` but not `other`.
    ///
    /// ## Panics
    ///
    /// Panics if the package graphs associated with `self` and `other` don't match.
    pub fn difference(&self, other: &Self) -> Self {
        assert!(
            ::std::ptr::eq(self.graph.package_graph, self.graph.package_graph),
            "package graphs passed into difference() match"
        );
        Self {
            graph: self.graph,
            core: self.core.difference(&other.core),
        }
    }

    /// Returns a `FeatureSet` that contains all packages present in exactly one of `self` and
    /// `other`.
    ///
    /// ## Panics
    ///
    /// Panics if the package graphs associated with `self` and `other` don't match.
    pub fn symmetric_difference(&self, other: &Self) -> Self {
        assert!(
            ::std::ptr::eq(self.graph.package_graph, self.graph.package_graph),
            "package graphs passed into symmetric_difference() match"
        );
        let mut res = self.clone();
        res.core.symmetric_difference_with(&other.core);
        res
    }

    // ---
    // Queries around packages
    // ---

    /// Returns an iterator over the features present for this package, including the element `None`
    /// for the "base" feature.
    ///
    /// Returns `None` overall if this is an unknown package.
    pub fn features_for<'a>(
        &'a self,
        package_id: &PackageId,
    ) -> Option<impl Iterator<Item = Option<&'g str>> + 'a> {
        let metadata = self.graph.package_graph.metadata(package_id)?;
        Some(self.features_for_package_impl(metadata))
    }

    /// Converts this `FeatureSet` into a `PackageSet` containing all packages with any selected
    /// features (including the "base" feature).
    pub fn to_package_set(&self) -> PackageSet<'g> {
        let included: IxBitSet = self
            .core
            .included
            .ones()
            .map(|feature_ix| {
                let feature_ix = NodeIndex::new(feature_ix);
                let feature_node = &self.graph.dep_graph()[feature_ix];
                feature_node.package_ix()
            })
            .collect();
        PackageSet::from_included(self.graph.package_graph, included.0)
    }

    // ---
    // Iterators
    // ---

    /// Iterates over feature IDs, in topological order in the direction specified.
    ///
    /// ## Cycles
    ///
    /// The packages within a dependency cycle will be returned in arbitrary order, but overall
    /// topological order will be maintained.
    pub fn into_ids(self, direction: DependencyDirection) -> IntoIds<'g> {
        IntoIds {
            graph: self.graph,
            inner: self.core.topo(self.graph.sccs(), direction),
        }
    }

    /// Iterates over feature metadatas, in topological order in the direction specified.
    ///
    /// ## Cycles
    ///
    /// The packages within a dependency cycle will be returned in arbitrary order, but overall
    /// topological order will be maintained.
    pub fn into_metadatas(self, direction: DependencyDirection) -> IntoMetadatas<'g> {
        IntoMetadatas {
            graph: self.graph,
            inner: self.core.topo(self.graph.sccs(), direction),
        }
    }

    /// Iterates over package metadatas and their corresponding features, in topological order in
    /// the direction specified.
    ///
    /// The "base" feature for each package is represented by `None`.
    ///
    /// ## Cycles
    ///
    /// The packages within a dependency cycle will be returned in arbitrary order, but overall
    /// topological order will be maintained.
    pub fn into_packages_with_features<B>(
        self,
        direction: DependencyDirection,
    ) -> impl Iterator<Item = (&'g PackageMetadata, B)> + 'g
    where
        B: FromIterator<Option<&'g str>>,
    {
        let package_graph = self.graph.package_graph;

        // Use the package graph's SCCs for the topo order guarantee.
        package_graph
            .sccs()
            .node_iter(direction.into())
            .filter_map(move |package_ix| {
                let package_id = &package_graph.dep_graph()[package_ix];
                let metadata = package_graph
                    .metadata(package_id)
                    .expect("valid package ID");

                let mut features = self.features_for_package_impl(metadata).peekable();
                if features.peek().is_some() {
                    // At least one feature was returned.
                    Some((metadata, features.collect()))
                } else {
                    None
                }
            })
    }

    /// Returns the set of "root feature" IDs in the specified direction.
    ///
    /// * If direction is Forward, return the set of feature IDs that do not have any dependencies
    ///   within the selected graph.
    /// * If direction is Reverse, return the set of feature IDs that do not have any dependents
    ///   within the selected graph.
    ///
    /// ## Cycles
    ///
    /// If a root consists of a dependency cycle, all the packages in it will be returned in
    /// arbitrary order.
    pub fn into_root_ids(
        self,
        direction: DependencyDirection,
    ) -> impl Iterator<Item = FeatureId<'g>> + 'g {
        let dep_graph = self.graph.dep_graph();
        let package_graph = self.graph.package_graph;
        self.core
            .roots(dep_graph, self.graph.sccs(), direction)
            .into_iter()
            .map(move |feature_ix| FeatureId::from_node(package_graph, &dep_graph[feature_ix]))
    }

    /// Returns the set of "root feature" metadatas in the specified direction.
    ///
    /// * If direction is Forward, return the set of metadatas that do not have any dependencies
    ///   within the selected graph.
    /// * If direction is Reverse, return the set of metadatas that do not have any dependents
    ///   within the selected graph.
    ///
    /// ## Cycles
    ///
    /// If a root consists of a dependency cycle, all the packages in it will be returned in
    /// arbitrary order.}
    pub fn into_root_metadatas(
        self,
        direction: DependencyDirection,
    ) -> impl Iterator<Item = FeatureMetadata<'g>> + 'g {
        let feature_graph = self.graph;
        self.core
            .roots(feature_graph.dep_graph(), feature_graph.sccs(), direction)
            .into_iter()
            .map(move |feature_ix| {
                let feature_node = &feature_graph.dep_graph()[feature_ix];
                feature_graph
                    .metadata_for_node(feature_node)
                    .expect("feature node should be known")
            })
    }

    // ---
    // Helper methods
    // ---

    fn features_for_package_impl<'a>(
        &'a self,
        metadata: &'g PackageMetadata,
    ) -> impl Iterator<Item = Option<&'g str>> + 'a {
        let dep_graph = self.graph.dep_graph();
        let package_ix = metadata.package_ix;
        let core = &self.core;

        self.graph
            .feature_ixs_for_package_ix(package_ix)
            .filter_map(move |feature_ix| {
                if core.contains(feature_ix) {
                    Some(FeatureId::node_to_feature(metadata, &dep_graph[feature_ix]))
                } else {
                    None
                }
            })
    }

    // Currently a helper for debugging -- will be made public in the future.
    #[allow(dead_code)]
    pub(crate) fn into_links(
        self,
        direction: DependencyDirection,
    ) -> impl Iterator<Item = (FeatureId<'g>, FeatureId<'g>, &'g FeatureEdge)> {
        let feature_graph = self.graph;

        self.core
            .links(feature_graph.dep_graph(), feature_graph.sccs(), direction)
            .map(move |(source_ix, target_ix, edge_ix)| {
                (
                    FeatureId::from_node(
                        feature_graph.package_graph(),
                        &feature_graph.dep_graph()[source_ix],
                    ),
                    FeatureId::from_node(
                        feature_graph.package_graph(),
                        &feature_graph.dep_graph()[target_ix],
                    ),
                    &feature_graph.dep_graph()[edge_ix],
                )
            })
    }
}

/// An iterator over feature IDs in topological order.
///
/// The items returned are of type `FeatureId<'g>`. Returned by `PackageResolveSet::into_ids`.
pub struct IntoIds<'g> {
    graph: DebugIgnore<FeatureGraph<'g>>,
    inner: Topo<'g, FeatureGraph<'g>>,
}

impl<'g> IntoIds<'g> {
    /// Returns the direction the iteration is happening in.
    pub fn direction(&self) -> DependencyDirection {
        self.inner.direction()
    }
}

impl<'g> Iterator for IntoIds<'g> {
    type Item = FeatureId<'g>;

    fn next(&mut self) -> Option<Self::Item> {
        self.inner.next().map(|feature_ix| {
            FeatureId::from_node(
                self.graph.package_graph(),
                &self.graph.dep_graph()[feature_ix],
            )
        })
    }

    fn size_hint(&self) -> (usize, Option<usize>) {
        self.inner.size_hint()
    }
}

impl<'g> ExactSizeIterator for IntoIds<'g> {
    fn len(&self) -> usize {
        self.inner.len()
    }
}

/// An iterator over feature metadatas in topological order.
///
/// The items returned are of type `FeatureId<'g>`. Returned by `PackageResolveSet::into_ids`.
pub struct IntoMetadatas<'g> {
    graph: DebugIgnore<FeatureGraph<'g>>,
    inner: Topo<'g, FeatureGraph<'g>>,
}

impl<'g> IntoMetadatas<'g> {
    /// Returns the direction the iteration is happening in.
    pub fn direction(&self) -> DependencyDirection {
        self.inner.direction()
    }
}

impl<'g> Iterator for IntoMetadatas<'g> {
    type Item = FeatureMetadata<'g>;

    fn next(&mut self) -> Option<Self::Item> {
        self.inner.next().map(|feature_ix| {
            self.graph
                .metadata_for_node(&self.graph.dep_graph()[feature_ix])
                .expect("feature node should be known")
        })
    }

    fn size_hint(&self) -> (usize, Option<usize>) {
        self.inner.size_hint()
    }
}

impl<'g> ExactSizeIterator for IntoMetadatas<'g> {
    fn len(&self) -> usize {
        self.inner.len()
    }
}