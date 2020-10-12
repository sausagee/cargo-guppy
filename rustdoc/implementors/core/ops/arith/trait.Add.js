(function() {var implementors = {};
implementors["ascii"] = [{"text":"impl&lt;'a&gt; Add&lt;&amp;'a AsciiStr&gt; for AsciiString","synthetic":false,"types":[]}];
implementors["bytesize"] = [{"text":"impl Add&lt;u64&gt; for ByteSize","synthetic":false,"types":[]},{"text":"impl Add&lt;ByteSize&gt; for u64","synthetic":false,"types":[]},{"text":"impl Add&lt;u32&gt; for ByteSize","synthetic":false,"types":[]},{"text":"impl Add&lt;ByteSize&gt; for u32","synthetic":false,"types":[]},{"text":"impl Add&lt;u16&gt; for ByteSize","synthetic":false,"types":[]},{"text":"impl Add&lt;ByteSize&gt; for u16","synthetic":false,"types":[]},{"text":"impl Add&lt;u8&gt; for ByteSize","synthetic":false,"types":[]},{"text":"impl Add&lt;ByteSize&gt; for u8","synthetic":false,"types":[]},{"text":"impl Add&lt;ByteSize&gt; for ByteSize","synthetic":false,"types":[]}];
implementors["chrono"] = [{"text":"impl Add&lt;FixedOffset&gt; for NaiveTime","synthetic":false,"types":[]},{"text":"impl Add&lt;FixedOffset&gt; for NaiveDateTime","synthetic":false,"types":[]},{"text":"impl&lt;Tz:&nbsp;TimeZone&gt; Add&lt;FixedOffset&gt; for DateTime&lt;Tz&gt;","synthetic":false,"types":[]},{"text":"impl Add&lt;Duration&gt; for NaiveDate","synthetic":false,"types":[]},{"text":"impl Add&lt;Duration&gt; for NaiveDateTime","synthetic":false,"types":[]},{"text":"impl Add&lt;Duration&gt; for NaiveTime","synthetic":false,"types":[]},{"text":"impl&lt;Tz:&nbsp;TimeZone&gt; Add&lt;Duration&gt; for Date&lt;Tz&gt;","synthetic":false,"types":[]},{"text":"impl&lt;Tz:&nbsp;TimeZone&gt; Add&lt;Duration&gt; for DateTime&lt;Tz&gt;","synthetic":false,"types":[]}];
implementors["im_rc"] = [{"text":"impl&lt;'a, K, V&gt; Add&lt;&amp;'a OrdMap&lt;K, V&gt;&gt; for &amp;'a OrdMap&lt;K, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: Ord + Clone,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: Clone,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;K, V&gt; Add&lt;OrdMap&lt;K, V&gt;&gt; for OrdMap&lt;K, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: Ord + Clone,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: Clone,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;A:&nbsp;Ord + Clone&gt; Add&lt;OrdSet&lt;A&gt;&gt; for OrdSet&lt;A&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a, A:&nbsp;Ord + Clone&gt; Add&lt;&amp;'a OrdSet&lt;A&gt;&gt; for &amp;'a OrdSet&lt;A&gt;","synthetic":false,"types":[]},{"text":"impl&lt;K, V, S&gt; Add&lt;HashMap&lt;K, V, S&gt;&gt; for HashMap&lt;K, V, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: Hash + Eq + Clone,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: Clone,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: BuildHasher,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a, K, V, S&gt; Add&lt;&amp;'a HashMap&lt;K, V, S&gt;&gt; for &amp;'a HashMap&lt;K, V, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: Hash + Eq + Clone,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: Clone,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: BuildHasher,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;A, S&gt; Add&lt;HashSet&lt;A, S&gt;&gt; for HashSet&lt;A, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: Hash + Eq + Clone,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: BuildHasher,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a, A, S&gt; Add&lt;&amp;'a HashSet&lt;A, S&gt;&gt; for &amp;'a HashSet&lt;A, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: Hash + Eq + Clone,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: BuildHasher,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;A:&nbsp;Clone&gt; Add&lt;Vector&lt;A&gt;&gt; for Vector&lt;A&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a, A:&nbsp;Clone&gt; Add&lt;&amp;'a Vector&lt;A&gt;&gt; for &amp;'a Vector&lt;A&gt;","synthetic":false,"types":[]}];
implementors["openssl"] = [{"text":"impl&lt;'a, 'b&gt; Add&lt;&amp;'b BigNumRef&gt; for &amp;'a BigNumRef","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Add&lt;&amp;'b BigNum&gt; for &amp;'a BigNumRef","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Add&lt;&amp;'b BigNumRef&gt; for &amp;'a BigNum","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Add&lt;&amp;'b BigNum&gt; for &amp;'a BigNum","synthetic":false,"types":[]}];
implementors["proptest"] = [{"text":"impl Add&lt;usize&gt; for SizeRange","synthetic":false,"types":[]}];
implementors["time"] = [{"text":"impl Add&lt;Duration&gt; for Duration","synthetic":false,"types":[]},{"text":"impl Add&lt;Duration&gt; for Timespec","synthetic":false,"types":[]},{"text":"impl Add&lt;Duration&gt; for SteadyTime","synthetic":false,"types":[]},{"text":"impl Add&lt;Duration&gt; for Tm","synthetic":false,"types":[]}];
implementors["typenum"] = [{"text":"impl&lt;I:&nbsp;Integer&gt; Add&lt;I&gt; for Z0","synthetic":false,"types":[]},{"text":"impl&lt;U:&nbsp;Unsigned + NonZero&gt; Add&lt;Z0&gt; for PInt&lt;U&gt;","synthetic":false,"types":[]},{"text":"impl&lt;U:&nbsp;Unsigned + NonZero&gt; Add&lt;Z0&gt; for NInt&lt;U&gt;","synthetic":false,"types":[]},{"text":"impl&lt;Ul:&nbsp;Unsigned + NonZero, Ur:&nbsp;Unsigned + NonZero&gt; Add&lt;PInt&lt;Ur&gt;&gt; for PInt&lt;Ul&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Ul: Add&lt;Ur&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;Ul as Add&lt;Ur&gt;&gt;::Output: Unsigned + NonZero,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;Ul:&nbsp;Unsigned + NonZero, Ur:&nbsp;Unsigned + NonZero&gt; Add&lt;NInt&lt;Ur&gt;&gt; for NInt&lt;Ul&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Ul: Add&lt;Ur&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;Ul as Add&lt;Ur&gt;&gt;::Output: Unsigned + NonZero,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;Ul:&nbsp;Unsigned + NonZero, Ur:&nbsp;Unsigned + NonZero&gt; Add&lt;NInt&lt;Ur&gt;&gt; for PInt&lt;Ul&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Ul: Cmp&lt;Ur&gt; + PrivateIntegerAdd&lt;&lt;Ul as Cmp&lt;Ur&gt;&gt;::Output, Ur&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;Ul:&nbsp;Unsigned + NonZero, Ur:&nbsp;Unsigned + NonZero&gt; Add&lt;PInt&lt;Ur&gt;&gt; for NInt&lt;Ul&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Ur: Cmp&lt;Ul&gt; + PrivateIntegerAdd&lt;&lt;Ur as Cmp&lt;Ul&gt;&gt;::Output, Ul&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl Add&lt;B0&gt; for UTerm","synthetic":false,"types":[]},{"text":"impl&lt;U:&nbsp;Unsigned, B:&nbsp;Bit&gt; Add&lt;B0&gt; for UInt&lt;U, B&gt;","synthetic":false,"types":[]},{"text":"impl Add&lt;B1&gt; for UTerm","synthetic":false,"types":[]},{"text":"impl&lt;U:&nbsp;Unsigned&gt; Add&lt;B1&gt; for UInt&lt;U, B0&gt;","synthetic":false,"types":[]},{"text":"impl&lt;U:&nbsp;Unsigned&gt; Add&lt;B1&gt; for UInt&lt;U, B1&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;U: Add&lt;B1&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;Add1&lt;U&gt;: Unsigned,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;U:&nbsp;Unsigned&gt; Add&lt;U&gt; for UTerm","synthetic":false,"types":[]},{"text":"impl&lt;U:&nbsp;Unsigned, B:&nbsp;Bit&gt; Add&lt;UTerm&gt; for UInt&lt;U, B&gt;","synthetic":false,"types":[]},{"text":"impl&lt;Ul:&nbsp;Unsigned, Ur:&nbsp;Unsigned&gt; Add&lt;UInt&lt;Ur, B0&gt;&gt; for UInt&lt;Ul, B0&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Ul: Add&lt;Ur&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;Ul:&nbsp;Unsigned, Ur:&nbsp;Unsigned&gt; Add&lt;UInt&lt;Ur, B1&gt;&gt; for UInt&lt;Ul, B0&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Ul: Add&lt;Ur&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;Ul:&nbsp;Unsigned, Ur:&nbsp;Unsigned&gt; Add&lt;UInt&lt;Ur, B0&gt;&gt; for UInt&lt;Ul, B1&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Ul: Add&lt;Ur&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;Ul:&nbsp;Unsigned, Ur:&nbsp;Unsigned&gt; Add&lt;UInt&lt;Ur, B1&gt;&gt; for UInt&lt;Ul, B1&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Ul: Add&lt;Ur&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;Sum&lt;Ul, Ur&gt;: Add&lt;B1&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl Add&lt;ATerm&gt; for ATerm","synthetic":false,"types":[]},{"text":"impl&lt;Al, Vl, Ar, Vr&gt; Add&lt;TArr&lt;Vr, Ar&gt;&gt; for TArr&lt;Vl, Al&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Al: Add&lt;Ar&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;Vl: Add&lt;Vr&gt;,&nbsp;</span>","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()