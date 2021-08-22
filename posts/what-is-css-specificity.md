---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c98bd740569d1a4ca1bc5.jpg"
tags: [CSS]
description: "CSS specificity is an important topic to understand if you wa"
author: "Milad E. Fahmy"
title: "CSS Specificity and When to Use the CSS Important Tag"
created: "2021-08-16T10:04:38+02:00"
modified: "2021-08-16T10:04:38+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-css tag-design tag-web-development ">
<header class="post-full-header">
<h1 class="post-full-title">CSS Specificity and When to Use the CSS Important Tag</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c98bd740569d1a4ca1bc5.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c98bd740569d1a4ca1bc5.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c98bd740569d1a4ca1bc5.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c98bd740569d1a4ca1bc5.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c98bd740569d1a4ca1bc5.jpg" alt="CSS Specificity and When to Use the CSS Important Tag">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>CSS specificity is an important topic to understand if you want to get better at CSS. It is the set of rules applied to CSS selectors that determines which style is applied to an element. </p><p>To understand this better, it's important that we understand a related topic – cascading in CSS .</p><h2 id="the-cascading-nature-of-css">The Cascading Nature of CSS</h2><p>CSS means Cascading Style Sheets. "Cascading" means that the <strong>order</strong> in which CSS rules are applied to an element <strong>actually matters</strong>. </p><p>Ideally, if two rules are applied to the same element, the one that comes last is the one that will be used. Let's use an example to understand this.</p><p>We'll apply two classes to an element and give each class a different <code>background-color</code>.</p><pre><code class="language-text">&lt;p class="style1 style2"&gt; This is a test paragraph&lt;/p&gt;</code></pre><p>Here's the CSS:</p><pre><code class="language-text">.style2 {
background-color: red;
}
.style1 {
background-color: yellow;
background-color: red;
}
.style1 {
background-color: yellow;
p {
color: red;
}
&lt;!-- This is an pseudo-element selector--&gt;
p::before {
color: red;
}</code></pre><p>Element and pseudo-element selectors have the lowest specificity. In the specificity weight system, they have a value of 1.</p><h3 id="classes-attributes-and-pseudo-classes">Classes, Attributes and Pseudo-classes</h3><p>Here are examples of classes, attributes, and pseudo-classes:</p><pre><code class="language-text">&lt;!-- This is a class selector--&gt;
.person {
color: red;
}
&lt;!-- This is an attribute selector--&gt;
[type="radio"] {
color: red;
}
&lt;!-- This is a pseudo-class selector--&gt;
:focus {
color: red;
}</code></pre><p>They have a higher specificity than element and pseudo-element selectors. In our specificity weight system, they have a value of 10.</p><h3 id="id-selectors">ID Selectors</h3><p>ID selectors are used to target an element using the element's ID.</p><pre><code class="language-text">&lt;!-- This is an ID selector--&gt;
#header {
color: red;
}</code></pre><p>ID selectors have higher specificity than classes and elements. In our specificity weight system, they have a value of 100.</p><h3 id="inline-styles">Inline Styles</h3><p>Inline styles are applied directly on the element in the HTML document. This is an example:</p><pre><code class="language-text">&lt;p style="color: red"&gt;This is a paragraph&lt;/p&gt;</code></pre><p>Inline styles have the highest specificity. In our specificity weight system, they have a value of 1000.</p><p>Here's a summary of the weights:</p><pre><code class="language-text">Inline Styles                         - 1000
ID selectors                          -  100
Classes, Attributes and Pseudo-classes-   10
Elements and Pseudo-elements          -    1 </code></pre><p>Let's try to make sense of it.</p><p>The property values of selectors with a higher weight will always be applied over a selector with a lower weight. </p><p>Inline styles have the highest weight and their property value overrides every other selector's value applied to an element. </p><p>For example, if we have an element and for the same property <code>color</code>, there's an inline style. If the class and id selectors also have values for the same property, the inline style wins.</p><pre><code class="language-text">&lt;p style="color: red" class="yellow" id="paragraph"&gt;This is a paragraph&lt;/p&gt;</code></pre><p>The stylesheet:</p><pre><code class="language-text">#paragraph {
color: green;
}
.yellow {
color: yellow;
&lt;li&gt;First item&lt;/li&gt;
&lt;li&gt;Second item&lt;/li&gt;
&lt;li&gt;Third item&lt;/li&gt;
&lt;/ul&gt;</code></pre><p>You may target the list items like this:</p><pre><code class="language-text">.list &gt; li {
color: green;
}</code></pre><p>or like this:</p><pre><code class="language-text">ul &gt; li {
color: red;
&lt;div class="second-block" id="div-2"&gt;
&lt;p class="text" id="paragraph"&gt;This is a paragraph&lt;/p&gt;
&lt;/div&gt;
&lt;/div&gt;</code></pre><p>and these styles</p><pre><code class="language-text">#div-1 &gt; .second-block &gt; .text {
color: blue
}
.first-block &gt; #div-2 &gt; #paragraph {
color: red
&lt;ul class="first-list" id="list1"&gt;
&lt;li class="first-list-item" id="listItem1"&gt;First
&lt;span class="first-span" id="span1"&gt;item&lt;/span&gt;
&lt;/li&gt;
&lt;/ul&gt;
&lt;/div&gt;</code></pre><p>Which color will be applied to the <code>span</code> if the following styles are in the stylesheet?</p><pre><code class="language-text">div#div1 &gt; .first-list &gt; #list-item &gt; span {
color: red;
}
#list &gt; #list-item &gt; #span {
color: purple;
}
#div1 &gt; #list &gt; .first-list-item &gt; .first-span {
color: light-blue;
}</code></pre><p>Try to calculate the specificity and compare it with the result you get when you run the code.</p><p>Before we conclude this article, there are some important points to note.</p><h2 id="important-points-about-css-specificity">Important Points about CSS Specificity</h2><p>The weight assigned to a selector just gives us an idea of which rules get applied to an element. However, this does not always suffice. </p><p>For instance, you may assume that if you use more than 10 classes (weight &gt;= 100) to target an element, the property values will override that of one ID selector. But this is not true. As long as the selector with more than 10 classes have no ID selector, the one ID selector will always take precedence over it.</p><p>Applying <code>!important</code> to the property value of any selector makes it the value that will be applied to the element. This happens regardless of the rank of the selector on the Specificity hierarchy. </p><p>Let's use an example to understand this.</p><pre><code class="language-text">&lt;p class="blue" id="paragraph" style="color: green"&gt; This is a paragraph &lt;/p&gt;</code></pre><p>If the following styles are applied</p><pre><code class="language-text">p {
color: red !important;
}
.blue {
color: blue;
}
#paragraph {
color: purple;
ID selectors                          -  100
Classes, Attributes and Pseudo-classes-   10
Elements and Pseudo-elements          -    1
</code></pre>
</div>
<hr>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
