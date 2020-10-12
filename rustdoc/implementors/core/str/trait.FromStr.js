(function() {var implementors = {};
implementors["ascii"] = [{"text":"impl FromStr for AsciiString","synthetic":false,"types":[]}];
implementors["cargo"] = [{"text":"impl FromStr for Edition","synthetic":false,"types":[]},{"text":"impl FromStr for EncodablePackageId","synthetic":false,"types":[]},{"text":"impl FromStr for VersionControl","synthetic":false,"types":[]},{"text":"impl FromStr for Charset","synthetic":false,"types":[]},{"text":"impl FromStr for Prefix","synthetic":false,"types":[]}];
implementors["cargo_guppy"] = [{"text":"impl FromStr for Kind","synthetic":false,"types":[]},{"text":"impl FromStr for BuildKind","synthetic":false,"types":[]}];
implementors["cargo_platform"] = [{"text":"impl FromStr for Cfg","synthetic":false,"types":[]},{"text":"impl FromStr for CfgExpr","synthetic":false,"types":[]},{"text":"impl FromStr for Platform","synthetic":false,"types":[]}];
implementors["cfg_expr"] = [{"text":"impl FromStr for Endian","synthetic":false,"types":[]},{"text":"impl FromStr for Family","synthetic":false,"types":[]}];
implementors["chrono"] = [{"text":"impl FromStr for NaiveDate","synthetic":false,"types":[]},{"text":"impl FromStr for NaiveDateTime","synthetic":false,"types":[]},{"text":"impl FromStr for NaiveTime","synthetic":false,"types":[]},{"text":"impl FromStr for DateTime&lt;Utc&gt;","synthetic":false,"types":[]},{"text":"impl FromStr for DateTime&lt;Local&gt;","synthetic":false,"types":[]},{"text":"impl FromStr for DateTime&lt;FixedOffset&gt;","synthetic":false,"types":[]},{"text":"impl FromStr for Weekday","synthetic":false,"types":[]},{"text":"impl FromStr for Month","synthetic":false,"types":[]}];
implementors["clap"] = [{"text":"impl FromStr for AppSettings","synthetic":false,"types":[]},{"text":"impl FromStr for ArgSettings","synthetic":false,"types":[]},{"text":"impl FromStr for Shell","synthetic":false,"types":[]}];
implementors["fixture_manager"] = [{"text":"impl FromStr for GenerateSummariesMode","synthetic":false,"types":[]}];
implementors["git2"] = [{"text":"impl FromStr for Oid","synthetic":false,"types":[]}];
implementors["glob"] = [{"text":"impl FromStr for Pattern","synthetic":false,"types":[]}];
implementors["globset"] = [{"text":"impl FromStr for Glob","synthetic":false,"types":[]}];
implementors["humantime"] = [{"text":"impl FromStr for Duration","synthetic":false,"types":[]},{"text":"impl FromStr for Timestamp","synthetic":false,"types":[]}];
implementors["log"] = [{"text":"impl FromStr for Level","synthetic":false,"types":[]},{"text":"impl FromStr for LevelFilter","synthetic":false,"types":[]}];
implementors["proc_macro2"] = [{"text":"impl FromStr for TokenStream","synthetic":false,"types":[]}];
implementors["proptest"] = [{"text":"impl FromStr for PersistedSeed","synthetic":false,"types":[]},{"text":"impl FromStr for RngAlgorithm","synthetic":false,"types":[]}];
implementors["regex"] = [{"text":"impl FromStr for Regex","synthetic":false,"types":[]},{"text":"impl FromStr for Regex","synthetic":false,"types":[]}];
implementors["semver"] = [{"text":"impl FromStr for Version","synthetic":false,"types":[]},{"text":"impl FromStr for VersionReq","synthetic":false,"types":[]}];
implementors["semver_parser"] = [{"text":"impl FromStr for Op","synthetic":false,"types":[]}];
implementors["serde_json"] = [{"text":"impl FromStr for Number","synthetic":false,"types":[]},{"text":"impl FromStr for Value","synthetic":false,"types":[]}];
implementors["target_spec"] = [{"text":"impl FromStr for TargetSpec&lt;'static&gt;","synthetic":false,"types":[]}];
implementors["termcolor"] = [{"text":"impl FromStr for Color","synthetic":false,"types":[]}];
implementors["toml"] = [{"text":"impl FromStr for Value","synthetic":false,"types":[]}];
implementors["toml_edit"] = [{"text":"impl FromStr for Document","synthetic":false,"types":[]},{"text":"impl FromStr for Key","synthetic":false,"types":[]},{"text":"impl FromStr for Value","synthetic":false,"types":[]}];
implementors["url"] = [{"text":"impl FromStr for Url","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()