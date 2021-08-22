---
card: "https://cdn-media-1.freecodecamp.org/images/1*U-jFxHWyzxtZTGtS6Q2CQQ.jpeg"
tags: [JavaScript]
description: by Artem Sapegin
author: "Milad E. Fahmy"
title: "Why robots should format our code for us"
created: "2021-08-15T19:50:22+02:00"
modified: "2021-08-15T19:50:22+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-programming tag-productivity tag-self-improvement tag-tech ">
<header class="post-full-header">
<h1 class="post-full-title">Why robots should format our code for us</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*U-jFxHWyzxtZTGtS6Q2CQQ.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*U-jFxHWyzxtZTGtS6Q2CQQ.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*U-jFxHWyzxtZTGtS6Q2CQQ.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*U-jFxHWyzxtZTGtS6Q2CQQ.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*U-jFxHWyzxtZTGtS6Q2CQQ.jpeg" alt="Why robots should format our code for us">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Artem Sapegin</p>
<h1 id="why-robots-should-format-our-code-for-us">Why robots should format our code for us</h1>
<figcaption>Photo by <a href="http://unsplash.com/photos/b18TRXc8UPQ?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText" rel="noopener" target="_blank" title="">yours truly</a> on <a href="https://unsplash.com/?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText" rel="noopener" target="_blank" title="">Unsplash</a></figcaption>
</figure>
<p>I used to think that a personal code style is a good thing for a programmer. It shows you are a mature developer who knows what good code should look like.</p>
<p>My college professors told me that they knew when some of my classmates used my code in their work because of the different code style. Now I think it was because my code was at least somehow formatted and everyone else’s was a mess.</p>
<p>Since then I’ve spent a lot of time arguing code style and configuring tools to enforce it. It’s time for a change.</p>
<h4 id="a-few-examples">A few examples</h4>
<p>After reading the <a href="https://www.datapacrat.com/Opinion/Reciprocality/r0/index.html" rel="noopener">The Programmers’ Stone</a> I put braces like this for a long time:</p><pre><code>if (food === 'pizza'){    alert('Pizza ;-)');  }else{      alert('Not pizza ;-(');}</code></pre>
<p>But then I realized that I may be the only one who did it that way in the front-end community. Everybody else uses this style:</p><pre><code>if (food === 'pizza') {    alert('Pizza ;-)');  } else {    alert('Not pizza ;-(');}</code></pre>
<p>Or this:</p><pre><code>if (food === 'pizza') {    alert('Pizza ;-)');  }else {      alert('Not pizza ;-(');}</code></pre>
<p>So I’ve changed my style to the last one.</p>
<p>I like this style for chaining very much:</p><pre><code>function foo(items) {  return items    .filter(item =&gt; item.checked)    .map(item =&gt; item.value)  ;}</code></pre>
<p>I see the same refactoring benefits as for <a href="https://medium.com/@nikgraf/why-you-should-enforce-dangling-commas-for-multiline-statements-d034c98e36f8" rel="noopener">trailing commas</a>:</p><pre><code>const food = [  'pizza',  'burger',  'pasta',]</code></pre>
<p>But I’m probably even more lonely with this style than I was with braces. Nobody would ever send me code for review with this style, no linter can enforce it. So I have to stop using it too to be closer to the real world.</p>
<p>There’s another thing that nobody else does except me . I always put two spaces before end-of-the-line comment:</p><pre><code>const volume = 200;  // ml</code></pre>
<p>I thought it improves readability. But it actually makes the codebase inconsistent because other developers only put one space.</p>
<h4 id="what-javascript-developers-do">What JavaScript developers do</h4>
<p>Unfortunately JavaScript has no official code style. There are a few <a href="http://blog.sapegin.me/all/javascript-code-styles" rel="noopener">popular code styles</a> like <a href="http://airbnb.io/javascript/" rel="noopener">Airbnb</a> or <a href="https://standardjs.com/" rel="noopener">Standard</a>. You could use them to make your code look familiar to other developers.</p>
<p>You could use <a href="https://eslint.org/" rel="noopener">ESLint </a>to enforce code style and even autoformat code in some cases. But it won’t make your code base 100% consistent. ESLint with Airbnb config would normalize only my first example and allow inconsistency in the other two examples.</p>
<h4 id="what-javascript-developers-should-do">What JavaScript developers should do</h4>
<p>Some languages have strict code styles and tools to format code. So developers don’t waste time arguing code style. Look at <a href="https://reasonml.github.io/guide/what-and-why" rel="noopener">Refmt</a> for Reason and <a href="https://github.com/rust-lang-nursery/rustfmt" rel="noopener">Rustfmt</a> for Rust.</p>
<p>It looks like JavaScript finally <a href="http://jlongster.com/A-Prettier-Formatter" rel="noopener">has a solution</a> to this problem. A new tool called <a href="https://github.com/prettier/prettier" rel="noopener">Prettier</a> will reformat your code using its own rules. It completely ignores how the code was written in the first place.</p>
<p>Let’s <a href="https://prettier.github.io/prettier/" rel="noopener">try Prettier</a> on my examples:</p><pre><code>if (food === 'pizza') {  alert('Pizza ;-)');} else {  alert('Not pizza ;-(');}function foo(items) {  return items.filter(item =&gt; item.checked).map(item =&gt; item.value);}const volume = 200; // ml</code></pre>
<p>You can disagree with this style. For example I don’t like the <code>else</code> placement and writing function chains in one line is questionable. But I see huge benefits in adopting Prettier:</p>
<ul>
<li>Almost no decisions to make — Prettier has few options.</li>
<li>No arguing about particular rules if you’re working in a team.</li>
<li>No need to learn your project’s code style for contributors.</li>
<li>No need to fix style issues reported by ESLint.</li>
<li>Possible to set up autoformat on file save.</li>
</ul>
<h4 id="conclusion">Conclusion</h4>
<p>Prettier has been already adopted by <a href="https://github.com/prettier/prettier/issues/1351" rel="noopener">some popular projects</a> like React and Babel. And I’m starting to <a href="https://github.com/tamiadev/eslint-config-tamia" rel="noopener">convert all my projects</a> from my custom code style to Prettier. I will recommend it instead of the Airbnb code style.</p>
<p>At first I had a lot of “Ugh, that’s ugly” moments with Prettier. But when I think that I’d have to, for example, manually reformat JSX code from a single-line to multi-line when I add another prop and it doesn’t fit on one line — I realize that it’s totally worth it.</p>
<figcaption>Prettier is formatting your code when you save a file</figcaption>
</figure>
<p>Read how to <a href="https://survivejs.com/maintenance/code-quality/code-formatting/" rel="noopener">set up Prettier</a> in your project.</p>
<p>P. S. <a href="https://github.com/sapegin/mrm" rel="noopener">Have a look at my new tool</a> that will simplify adding ESLint, Prettier, and other tools to your project, as well as keeping their configs in sync.</p>
<p><strong>Subscribe to my newsletter: <a href="https://tinyletter.com/sapegin" rel="noopener">https://tinyletter.com/sapegin</a></strong></p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
