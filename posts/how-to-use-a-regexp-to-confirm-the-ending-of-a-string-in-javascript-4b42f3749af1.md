---
card: "https://cdn-media-1.freecodecamp.org/images/0*YLruZvgbUfHmlITM"
tags: [Algorithms]
description: by Catherine Vassant (aka Codingk8)
author: "Milad E. Fahmy"
title: "How to use a RegExp to confirm the ending of a String in JavaScript"
created: "2021-08-15T19:36:33+02:00"
modified: "2021-08-15T19:36:33+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-algorithms tag-javascript tag-regex tag-programming tag-tech ">
<header class="post-full-header">
<h1 class="post-full-title">How to use a RegExp to confirm the ending of a String in JavaScript</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/0*YLruZvgbUfHmlITM 300w,
https://cdn-media-1.freecodecamp.org/images/0*YLruZvgbUfHmlITM 600w,
https://cdn-media-1.freecodecamp.org/images/0*YLruZvgbUfHmlITM 1000w,
https://cdn-media-1.freecodecamp.org/images/0*YLruZvgbUfHmlITM 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/0*YLruZvgbUfHmlITM" alt="How to use a RegExp to confirm the ending of a String in JavaScript">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Catherine Vassant (aka Codingk8)</p>
<h1 id="how-to-use-a-regexp-to-confirm-the-ending-of-a-string-in-javascript">How to use a RegExp to confirm the ending of a String in JavaScript</h1>
<p>Using the Regexp ?️ constructor</p>
<figcaption>Photo by <a href="https://unsplash.com/@jluebke?utm_source=medium&amp;utm_medium=referral" rel="noopener" target="_blank" title="">Justin Luebke</a> on <a href="https://unsplash.com?utm_source=medium&amp;utm_medium=referral" rel="noopener" target="_blank" title="">Unsplash</a></figcaption>
</figure>
<p><em>This article is based on <a href="https://www.freecodecamp.org/" rel="noopener">freeCodeCamp</a>’s Basic Algorithm Scripting “<a href="https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/confirm-the-ending" rel="noopener">Confirm the ending</a>”.</em></p>
<p>This challenge involves checking whether a String ends with a specific sequence of letters or not.</p>
<p>In this article, I’ll explain how to solve this<em> </em>challenge using a RegExp.</p>
<p>The interesting aspect of this solution is using the RegExp constructor to create the specific RegExp you need to check Strings passed as arguments.</p>
<h4 id="algorithm-challenge">Algorithm Challenge</h4>
<blockquote>Check if a string (first argument, <code>str</code>) ends with the given target string (second argument, <code>target</code>).</blockquote>
<blockquote>This challenge can be solved with the <code>.endsWith()</code>method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.</blockquote>
<h4 id="provided-test-cases">Provided test cases</h4>
<blockquote><code>confirmEnding("Bastian", "n")</code>should return true.</blockquote>
<blockquote><code>confirmEnding("Congratulation", "on")</code>should return true.</blockquote>
<blockquote><code>confirmEnding("Connor", "n")</code>should return false.</blockquote>
<blockquote><code>confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification")</code>should return false.</blockquote>
<blockquote><code>confirmEnding("He has to give me a new name", "name")</code>should return true.</blockquote>
<blockquote><code>confirmEnding("Open sesame", "same")</code>should return true.</blockquote>
<blockquote><code>confirmEnding("Open sesame", "pen")</code>should return false.</blockquote>
<blockquote><code>confirmEnding("Open sesame", "game")</code>should return false.</blockquote>
<blockquote><code>confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain")</code>should return false.</blockquote>
<blockquote><code>confirmEnding("Abstraction", "action")</code>should return true.</blockquote>
<blockquote>Do not use the built-in method <code>.endsWith()</code>to solve the challenge.</blockquote>
<h3 id="1-the-first-idea-that-does-not-work-at-all">1. The first idea that does not work at all</h3>
<p>If, like me, you’re a RexExp lover, your first attempt might be to try solve the challenge with the <strong>code below</strong>, and it <strong>won’t work</strong>.</p>
<p>The reason is, with this syntax, the test() function will look for the specific “target” String and not “target” as a variable passed as an argument.</p>
<p>If we go back to our test cases, the ones that should return “false”, do pass, but none of the ones that should return “true” pass, which is quite predictable.</p>
<figcaption>Photo by <a href="https://unsplash.com/@fotolancaster?utm_source=medium&amp;utm_medium=referral" rel="noopener" target="_blank" title="">Pablo Lancaster Jones</a> on <a href="https://unsplash.com?utm_source=medium&amp;utm_medium=referral" rel="noopener" target="_blank" title="">Unsplash</a></figcaption>
</figure>
<h3 id="2-solve-the-challenge-by-creating-the-specific-regexp-you-need-with-the-regexp-constructor">2. Solve the challenge by creating the specific RegExp you need with the RegExp constructor</h3>
<p>In order to use a RegExp that is going to “understand” that the “target” argument is a variable and not the String “target”, you have to <strong>create a taylor-made RegExp using the RegExp constructor</strong>.</p>
<p>And, before we move forward, let’s go back for a minute and look at what we want to test: the “target” argument should be the ending of the “str” argument. This means <strong>our RegExp should end with the “$” character</strong>.</p>
<h4 id="now-we-can-solve-this-challenge-in-three-steps"><strong>Now, we can solve this challenge in three steps</strong></h4>
<p><strong>Step 1</strong> - Create a variable adding the “$” at the end of the “target” argument, using the concat() method in this case.</p>
<p><strong>Step 2</strong> - Use the RegExp constructor and the “new” operator to create the right RexExp with the above variable.</p>
<p><strong>Step 3</strong> - Return the result of the test() function.</p>
<p>And this passes all the case tests beautifully ?</p>
<h4 id="this-can-be-refactored-in-two-lines-like-this"><strong>This can be refactored in two lines like this</strong></h4>
<p><strong>Note</strong>: since none of the test cases imply to test the capitalization of the letters, there’s no need to use the “i” flag.</p>
<h4 id="useful-links">Useful links</h4>
<p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/concat" rel="noopener">String.prototype.concat()</a> in MDN</p>
<p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test" rel="noopener">RegExp.prototype.test()</a> in MDN</p>
<p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp" rel="noopener">RegExp constructor</a> in MDN</p>
<p><a href="https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/regular-expressions" rel="noopener">Regular Expressions</a> in <a href="https://www.freecodecamp.org/" rel="noopener">freeCodeCamp</a></p>
<h4 id="other-solutions-to-this-challenge">Other solutions to this challenge</h4>
<p>The <strong>challenge “<a href="https://guide.freecodecamp.org/certifications/javascript-algorithms-and-data-structures/basic-algorithm-scripting/confirm-the-ending/" rel="noopener">Get a Hint</a>”</strong> suggests a solution using the <strong>slice() method</strong>.</p>
<p>You can find two other ways of solving this challenge, one with the <strong>substr() method</strong> and the other with the <strong>endsWith() method, explained by <a href="undefined" rel="noopener">Sonya Moisset</a> in <a href="https://medium.freecodecamp.org/two-ways-to-confirm-the-ending-of-a-string-in-javascript-62b4677034ac" rel="noopener">this article</a></strong>.</p>
<p>This ad-hoc RegExp solution can <strong>also help you solve the freeCodeCamp Intermediate Algorithm Scripting “<a href="https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/search-and-replace" rel="noopener">Search and Replace</a>” challenge</strong>.</p>
<p><strong>Thank you for reading!</strong> ✨</p>
<p>If you enjoyed this article, <strong>please “hands-clap” as many times as you like </strong>and share it <strong>to help other people find it. </strong>That may make their day.</p>
<p>If you have a <strong>reaction/question/suggestion</strong>, be sure to leave a <strong>comment below</strong>. I’ll be glad to read from you!</p>
<p>You can also get in touch and/or follow <a href="https://twitter.com/codingk8" rel="noopener"><strong>me on Twitter</strong></a><strong>.</strong></p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
