---
card: "https://cdn-media-1.freecodecamp.org/images/1*iuk6ay4N9W42ACJg7BCjiQ.png"
tags: [JavaScript]
description: "by Michael Ozoemena"
author: "Milad E. Fahmy"
title: "A quick introduction to Tagged Template Literals"
created: "2021-08-16T10:07:30+02:00"
modified: "2021-08-16T10:07:30+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-react tag-css tag-web-development tag-graphql ">
<header class="post-full-header">
<h1 class="post-full-title">A quick introduction to Tagged Template Literals</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*iuk6ay4N9W42ACJg7BCjiQ.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*iuk6ay4N9W42ACJg7BCjiQ.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*iuk6ay4N9W42ACJg7BCjiQ.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*iuk6ay4N9W42ACJg7BCjiQ.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*iuk6ay4N9W42ACJg7BCjiQ.png" alt="A quick introduction to Tagged Template Literals">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Michael Ozoemena</p><p>In this article, I’m going to be talking about what “tagged template literals” are and some places where I’ve seen them being used.</p><h4 id="what-are-tagged-template-literals-">What are “tagged template literals”?</h4><p>Tagged template literals were enabled by a new technology introduced in ES6, called “template literals”. This is simply a syntax that makes string interpolation possible in JavaScript. Before <code>template literals</code> was born, JavaScript developers would need to do ugly string concatenation.</p><p><code>Tagged template literals</code> offers you the opportunity to parse template literals in whatever way you want. It works by combining functions with <code>template literals</code>. There are two parts of a <code>tagged template literal</code>, the first one being the <code>tag function</code> and the second, the <code>template literal</code>.</p><pre><code>const coolVariable = "Cool Value";</code></pre><pre><code>const anotherCoolVariable = "Another Cool Value";</code></pre><pre><code>randomTagFunctionName`${coolVariable} in a tagged template literal with ${anotherCoolVariable} just sitting there`</code></pre><p>Now, the first parameter in the <code>tag function</code> is a variable containing an array of strings in the template literal:</p><pre><code>function randomTagFunctionName(firstParameter) {</code></pre><pre><code>console.log(firstParameter);     // ["", " in a tagged template literal with ", " just sitting there"]</code></pre><pre><code>}</code></pre><p>And all other subsequent parameters will contain the values passed to the template literal:</p><pre><code>function randomTagFunctionName(firstParameter, secondParameter, thirdParameter) {</code></pre><pre><code>console.log(secondParameter);   // "Cool Value"</code></pre><pre><code>console.log(thirdParameter);   // "Another Cool Value"</code></pre><pre><code>}</code></pre><p>Taking advantage of the ES6 Rest operator, we can redefine our function like this:</p><pre><code>function randomTagFunctionName(firstParameter, ...otherParameters) {</code></pre><pre><code>console.log(otherParameters);   // ["Cool Value", "Another Cool Value"]</code></pre><pre><code>}</code></pre><h4 id="tagged-template-literals-in-styled-components-">Tagged Template Literals in Styled-Components.</h4><p>Now that you understand what tagged template literals are, let us discuss an application of it in the real world.</p><p>Styled-Components is a JavaScript library that lets you create and attach CSS styles to your React and React Native components. Here’s what that looks like:</p><pre><code>const Button = styled.button`  color: red;`</code></pre><p>In the example above, Button isn’t just a variable, it’s a component. That means you can mix it with other components and its output is an HTML button element.</p><p>This is a very exciting use case for tagged template literals because it lets you have scoped CSS in a way that still keeps your component file clean and makes you feel like you are writing CSS in a regular stylesheet. Without tagged template literals, we would have to represent that style as a JavaScript object like this:</p><pre><code>const Button = styled.button({  color: 'red'})</code></pre><p>Another use case is with the <a href="https://github.com/apollographql/graphql-tag" rel="noopener">graphql-tag</a> library used in <strong>Apollo GraphQL</strong>. I don’t think there is a possible way to not use the <code>graphql-tag</code> library when dealing with Apollo GraphQL (if there is, please let me know!).</p><h4 id="in-conclusion-">In conclusion.</h4><p>I think it’s great to learn new technologies and even better to look at ways in which others have used it to solve problems. If you have other real-world use cases for Tagged Template Literals, please let me know.</p><p>PS: “Real-World” also means your side-projects or <code>codesandbox</code> code samples.</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
