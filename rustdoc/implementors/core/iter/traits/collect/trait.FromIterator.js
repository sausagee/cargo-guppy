(function() {var implementors = {};
implementors["ascii"] = [{"text":"impl FromIterator&lt;AsciiChar&gt; for AsciiString","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; FromIterator&lt;&amp;'a AsciiStr&gt; for AsciiString","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; FromIterator&lt;Cow&lt;'a, AsciiStr&gt;&gt; for AsciiString","synthetic":false,"types":[]}];
implementors["bit_set"] = [{"text":"impl&lt;B:&nbsp;BitBlock&gt; FromIterator&lt;usize&gt; for BitSet&lt;B&gt;","synthetic":false,"types":[]}];
implementors["bit_vec"] = [{"text":"impl&lt;B:&nbsp;BitBlock&gt; FromIterator&lt;bool&gt; for BitVec&lt;B&gt;","synthetic":false,"types":[]}];
implementors["bstr"] = [{"text":"impl FromIterator&lt;char&gt; for BString","synthetic":false,"types":[]},{"text":"impl FromIterator&lt;u8&gt; for BString","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; FromIterator&lt;&amp;'a str&gt; for BString","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; FromIterator&lt;&amp;'a [u8]&gt; for BString","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; FromIterator&lt;&amp;'a BStr&gt; for BString","synthetic":false,"types":[]},{"text":"impl FromIterator&lt;BString&gt; for BString","synthetic":false,"types":[]}];
implementors["fixedbitset"] = [{"text":"impl FromIterator&lt;usize&gt; for FixedBitSet","synthetic":false,"types":[]}];
implementors["git2"] = [{"text":"impl FromIterator&lt;Sort&gt; for Sort","synthetic":false,"types":[]},{"text":"impl FromIterator&lt;CredentialType&gt; for CredentialType","synthetic":false,"types":[]},{"text":"impl FromIterator&lt;IndexEntryFlag&gt; for IndexEntryFlag","synthetic":false,"types":[]},{"text":"impl FromIterator&lt;IndexEntryExtendedFlag&gt; for IndexEntryExtendedFlag","synthetic":false,"types":[]},{"text":"impl FromIterator&lt;IndexAddOption&gt; for IndexAddOption","synthetic":false,"types":[]},{"text":"impl FromIterator&lt;RepositoryOpenFlags&gt; for RepositoryOpenFlags","synthetic":false,"types":[]},{"text":"impl FromIterator&lt;RevparseMode&gt; for RevparseMode","synthetic":false,"types":[]},{"text":"impl FromIterator&lt;MergeAnalysis&gt; for MergeAnalysis","synthetic":false,"types":[]},{"text":"impl FromIterator&lt;MergePreference&gt; for MergePreference","synthetic":false,"types":[]},{"text":"impl FromIterator&lt;Status&gt; for Status","synthetic":false,"types":[]},{"text":"impl FromIterator&lt;RepositoryInitMode&gt; for RepositoryInitMode","synthetic":false,"types":[]},{"text":"impl FromIterator&lt;SubmoduleStatus&gt; for SubmoduleStatus","synthetic":false,"types":[]},{"text":"impl FromIterator&lt;PathspecFlags&gt; for PathspecFlags","synthetic":false,"types":[]},{"text":"impl FromIterator&lt;CheckoutNotificationType&gt; for CheckoutNotificationType","synthetic":false,"types":[]},{"text":"impl FromIterator&lt;DiffStatsFormat&gt; for DiffStatsFormat","synthetic":false,"types":[]},{"text":"impl FromIterator&lt;StashApplyFlags&gt; for StashApplyFlags","synthetic":false,"types":[]},{"text":"impl FromIterator&lt;StashFlags&gt; for StashFlags","synthetic":false,"types":[]},{"text":"impl FromIterator&lt;AttrCheckFlags&gt; for AttrCheckFlags","synthetic":false,"types":[]},{"text":"impl FromIterator&lt;DiffFlags&gt; for DiffFlags","synthetic":false,"types":[]}];
implementors["hashbrown"] = [{"text":"impl&lt;K, V, S&gt; FromIterator&lt;(K, V)&gt; for HashMap&lt;K, V, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: Eq + Hash,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: BuildHasher + Default,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;T, S&gt; FromIterator&lt;T&gt; for HashSet&lt;T, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Eq + Hash,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: BuildHasher + Default,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["im_rc"] = [{"text":"impl&lt;K, V, RK, RV&gt; FromIterator&lt;(RK, RV)&gt; for OrdMap&lt;K, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: Ord + Clone + From&lt;RK&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: Clone + From&lt;RV&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;A, R&gt; FromIterator&lt;R&gt; for OrdSet&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: Ord + Clone + From&lt;R&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;K, V, S&gt; FromIterator&lt;(K, V)&gt; for HashMap&lt;K, V, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: Hash + Eq + Clone,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: Clone,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: BuildHasher + Default,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;A, RA, S&gt; FromIterator&lt;RA&gt; for HashSet&lt;A, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: Hash + Eq + Clone + From&lt;RA&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: BuildHasher + Default,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;A:&nbsp;Clone&gt; FromIterator&lt;A&gt; for Vector&lt;A&gt;","synthetic":false,"types":[]}];
implementors["indexmap"] = [{"text":"impl&lt;K, V, S&gt; FromIterator&lt;(K, V)&gt; for IndexMap&lt;K, V, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: Hash + Eq,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: BuildHasher + Default,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;T, S&gt; FromIterator&lt;T&gt; for IndexSet&lt;T, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Hash + Eq,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: BuildHasher + Default,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["linked_hash_map"] = [{"text":"impl&lt;K:&nbsp;Hash + Eq, V, S:&nbsp;BuildHasher + Default&gt; FromIterator&lt;(K, V)&gt; for LinkedHashMap&lt;K, V, S&gt;","synthetic":false,"types":[]}];
implementors["nested"] = [{"text":"impl&lt;T:&nbsp;Collection, A:&nbsp;AsRef&lt;Item&lt;T&gt;&gt;&gt; FromIterator&lt;A&gt; for Nested&lt;T&gt;","synthetic":false,"types":[]}];
implementors["openssl"] = [{"text":"impl FromIterator&lt;CMSOptions&gt; for CMSOptions","synthetic":false,"types":[]},{"text":"impl FromIterator&lt;OcspFlag&gt; for OcspFlag","synthetic":false,"types":[]},{"text":"impl FromIterator&lt;Pkcs7Flags&gt; for Pkcs7Flags","synthetic":false,"types":[]},{"text":"impl FromIterator&lt;SslOptions&gt; for SslOptions","synthetic":false,"types":[]},{"text":"impl FromIterator&lt;SslMode&gt; for SslMode","synthetic":false,"types":[]},{"text":"impl FromIterator&lt;SslVerifyMode&gt; for SslVerifyMode","synthetic":false,"types":[]},{"text":"impl FromIterator&lt;SslSessionCacheMode&gt; for SslSessionCacheMode","synthetic":false,"types":[]},{"text":"impl FromIterator&lt;ExtensionContext&gt; for ExtensionContext","synthetic":false,"types":[]},{"text":"impl FromIterator&lt;ShutdownState&gt; for ShutdownState","synthetic":false,"types":[]},{"text":"impl FromIterator&lt;X509CheckFlags&gt; for X509CheckFlags","synthetic":false,"types":[]}];
implementors["proc_macro2"] = [{"text":"impl FromIterator&lt;TokenTree&gt; for TokenStream","synthetic":false,"types":[]},{"text":"impl FromIterator&lt;TokenStream&gt; for TokenStream","synthetic":false,"types":[]}];
implementors["serde_json"] = [{"text":"impl FromIterator&lt;(String, Value)&gt; for Map&lt;String, Value&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Into&lt;Value&gt;&gt; FromIterator&lt;T&gt; for Value","synthetic":false,"types":[]}];
implementors["sized_chunks"] = [{"text":"impl&lt;A, T&gt; FromIterator&lt;A&gt; for InlineArray&lt;A, T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;A, N&gt; FromIterator&lt;A&gt; for Chunk&lt;A, N&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;N: ChunkLength&lt;A&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;A, N:&nbsp;Bits + ChunkLength&lt;A&gt;&gt; FromIterator&lt;Option&lt;A&gt;&gt; for SparseChunk&lt;A, N&gt;","synthetic":false,"types":[]}];
implementors["smallvec"] = [{"text":"impl&lt;A:&nbsp;Array&gt; FromIterator&lt;&lt;A as Array&gt;::Item&gt; for SmallVec&lt;A&gt;","synthetic":false,"types":[]}];
implementors["syn"] = [{"text":"impl&lt;T, P&gt; FromIterator&lt;T&gt; for Punctuated&lt;T, P&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;P: Default,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;T, P&gt; FromIterator&lt;Pair&lt;T, P&gt;&gt; for Punctuated&lt;T, P&gt;","synthetic":false,"types":[]}];
implementors["tinyvec"] = [{"text":"impl&lt;A:&nbsp;Array + Default&gt; FromIterator&lt;&lt;A as Array&gt;::Item&gt; for ArrayVec&lt;A&gt;","synthetic":false,"types":[]},{"text":"impl&lt;A:&nbsp;Array + Default&gt; FromIterator&lt;&lt;A as Array&gt;::Item&gt; for TinyVec&lt;A&gt;","synthetic":false,"types":[]}];
implementors["toml"] = [{"text":"impl FromIterator&lt;(String, Value)&gt; for Map&lt;String, Value&gt;","synthetic":false,"types":[]}];
implementors["toml_edit"] = [{"text":"impl&lt;V:&nbsp;Into&lt;Value&gt;&gt; FromIterator&lt;V&gt; for Value","synthetic":false,"types":[]},{"text":"impl&lt;'k, K:&nbsp;Into&lt;&amp;'k Key&gt;, V:&nbsp;Into&lt;Value&gt;&gt; FromIterator&lt;(K, V)&gt; for Value","synthetic":false,"types":[]}];
implementors["vec_map"] = [{"text":"impl&lt;V&gt; FromIterator&lt;(usize, V)&gt; for VecMap&lt;V&gt;","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()