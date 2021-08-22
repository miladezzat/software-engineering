---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c9df5740569d1a4ca3a9c.jpg"
tags: [JavaScript]
description: Logical operators compare Boolean values and return a Boolean
author: "Milad E. Fahmy"
title: "JavaScript Logical Operators"
created: "2021-08-15T19:31:26+02:00"
modified: "2021-08-15T19:31:26+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-toothbrush ">
<header class="post-full-header">
<h1 class="post-full-title">JavaScript Logical Operators</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c9df5740569d1a4ca3a9c.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9df5740569d1a4ca3a9c.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9df5740569d1a4ca3a9c.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9df5740569d1a4ca3a9c.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c9df5740569d1a4ca3a9c.jpg" alt="JavaScript Logical Operators">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>Logical operators compare Boolean values and return a Boolean response. There are two types of logical operators - Logical AND, and Logical OR. These operators are often written as &amp;&amp; for AND, and || for OR.</p>
<h2 id="logical-and-">Logical AND ( &amp;&amp; )</h2>
<p>The AND operator compares two expressions. If the first evaluates as <a href="https://developer.mozilla.org/en-US/docs/Glossary/Truthy">“truthy”</a>, the statement will return the value of the second expression. If the first evaluates as <a href="https://developer.mozilla.org/en-US/docs/Glossary/Falsy">“falsy”</a>, the statement will return the value of the first expression.</p>
<p>When only involving boolean values (either <code>true</code> or <code>false</code>), it returns true if only if both expressions are true. If one or both expressions are false, the entire statement will return false.</p><pre><code class="language-js">true &amp;&amp; true //returns  the second value, true
true &amp;&amp; false //returns the second value, false
false &amp;&amp; false //returns the first value, false
123 &amp;&amp; 'abc' // returns the second value, 'abc'
'abc' &amp;&amp; null //returns the second value, null
undefined &amp;&amp; 'abc' //returns the first value, undefined
0 &amp;&amp; false //returns the first value, 0</code></pre>
<h2 id="logical-or-">Logical OR ( || )</h2>
<p>The OR operator compares two expressions. If the first evaluates as “falsy”, the statement will return the value of the second second expression. If the first evaluates as “truthy”, the statement will return the value of the first expression.</p>
<p>When only involving boolean values (either <code>true</code> or <code>false</code>), it returns true if either expression is true. Both expressions can be true, but only one is needed to get true as a result.</p><pre><code class="language-js">true || true //returns the first value, true
true || false //returns the first value, true
false || false //returns the second value, false
123 || 'abc' // returns the first value, 123
'abc' || null //returns the first value, 'abc'
undefined || 'abc' //returns the second value, 'abc'
0 || false //returns the second value, false</code></pre>
<h2 id="short-circuit-evaluation">Short-circuit evaluation</h2>
<p>&amp;&amp; and || behave as a short-circuit operators.</p>
<p>In case of the logical AND, if the first operand returns false, the second operand is never evaluated and first operand is returned.</p>
<p>In case of the logical OR, if the first value returns true, the second value is never evaluated and the first operand is returned.</p>
<h2 id="logical-not-">Logical NOT (!)</h2>
<p>The NOT operator does not do any comparison like the AND and OR operators.Moreover it is operated only on 1 operand.</p>
<p>An ’!’ (exclamation) mark is used for representing the NOT operator.</p>
<h2 id="use-of-not-operators">Use of NOT operators</h2>
<ol>
<li>conversion of the expression into boolean.</li>
<li>returns the inverse of the boolean value obtained in last step.</li>
</ol><pre><code class="language-js">var spam = 'rinki'; //spam may be equal to any non empty string
var booSpam = !spam;
/*returns false
since when a non-empty string when converted to boolean returns true
inverse of which is evaluated to false.
*/
var spam2 = ''; //spam2 here is equal to empty string
var booSpam2 = !spam2;
/*returns true
since when a empty string when converted to boolean returns false
inverse of which is evaluated to true.
*/</code></pre>
<h3 id="tips-">Tips:</h3>
<p>Both logical operators will return the value of the last evaluated expression. For example:</p><pre><code class="language-js">"cat" &amp;&amp; "dog" //returns "dog"
"cat" &amp;&amp; false //returns false
0 &amp;&amp; "cat"  //returns 0 (which is a falsy value)
"cat" || "dog" //returns "cat"
"cat" || false //returns "cat"
0 || "cat" //returns "cat"</code></pre>
<p>Note that where <code>&amp;&amp;</code> returns the first value, <code>||</code> returns the second value and vice versa.</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
