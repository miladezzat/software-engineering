---
card: "https://cdn-media-1.freecodecamp.org/images/1*XyeRix8Z-yOcpRlpubtyuA.png"
tags: [JavaScript]
description: "by Mohammed Salman"
author: "Milad E. Fahmy"
title: "How to build native desktop apps with JavaScript (Proton Native)"
created: "2021-08-15T23:48:14+02:00"
modified: "2021-08-15T23:48:14+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-react tag-programming tag-coding tag-tech ">
<header class="post-full-header">
<h1 class="post-full-title">How to build native desktop apps with JavaScript (Proton Native)</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*XyeRix8Z-yOcpRlpubtyuA.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*XyeRix8Z-yOcpRlpubtyuA.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*XyeRix8Z-yOcpRlpubtyuA.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*XyeRix8Z-yOcpRlpubtyuA.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*XyeRix8Z-yOcpRlpubtyuA.png" alt="How to build native desktop apps with JavaScript (Proton Native)">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
├───.babelrc
├───index.js
├───package.json
import { render, Window, App, Box, Text, TextInput } from "proton-native";
import crypto from "crypto";
class Example extends Component {
state = { text: "", md5: "" };
hash = text =&gt; {
this.setState({ text });
let md5 = crypto
.createHash("md5")
.update(text, "utf8")
.digest("hex");
this.setState({ md5 });
};
render() {
return (
&lt;App&gt;
&lt;Window
title="Proton Native Rocks!"
size={{ w: 300, h: 300 }}
menuBar={false}
&gt;
&lt;Box&gt;
&lt;TextInput onChange={text =&gt; this.hash(text)} /&gt;
&lt;Text&gt;{this.state.md5}&lt;/Text&gt;
&lt;/Box&gt;
&lt;/Window&gt;
&lt;/App&gt;
);
}
}
render(&lt;Example /&gt;);</code></pre><p>I first imported <code>Text</code> and <code>TextInput</code> so I could use them later. Then in the <code>class</code> after setting the <code>text</code> and <code>md5</code> to empty strings in the <code>state </code>object, I created a function <code>hash</code> that takes a <code>text</code> argument.</p><p>In the <code>hash</code> function, we set the state to <code>text</code> and declare <code>md5</code> to store the encrypted text (as below)</p><pre><code class="language-js">this.setState({ text });
let md5 = crypto.createHash("md5")
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
