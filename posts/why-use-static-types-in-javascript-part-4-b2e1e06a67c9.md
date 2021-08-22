---
card: "https://cdn-media-1.freecodecamp.org/images/1*PKmiFZ47uY9CwfIHrPny-A.jpeg"
tags: [JavaScript]
description: by Preethi Kasireddy
author: "Milad E. Fahmy"
title: "Why use static types in JavaScript? Should we use them or not?"
created: "2021-08-15T19:53:51+02:00"
modified: "2021-08-15T19:53:51+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-programming tag-computer-science tag-software-development tag-learning-to-code ">
<header class="post-full-header">
<h1 class="post-full-title">Why use static types in JavaScript? Should we use them or not?</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*PKmiFZ47uY9CwfIHrPny-A.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*PKmiFZ47uY9CwfIHrPny-A.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*PKmiFZ47uY9CwfIHrPny-A.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*PKmiFZ47uY9CwfIHrPny-A.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*PKmiFZ47uY9CwfIHrPny-A.jpeg" alt="Why use static types in JavaScript? Should we use them or not?">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Preethi Kasireddy</p>
<h1 id="why-use-static-types-in-javascript-should-we-use-them-or-not">Why use static types in JavaScript? Should we use them or not?</h1>
<p><em>Note: This is Part 3 of a 3-part series. You can check out <a href="https://medium.freecodecamp.com/why-use-static-types-in-javascript-part-1-8382da1e0adb#.91629ow6y" rel="noopener">Part 1</a> and <a href="https://medium.com/@preethikasireddy/why-use-static-types-in-javascript-part-2-part-3-be699ee7be60#.j4viwr6km" rel="noopener">Part 2</a> if you haven’t already!</em></p>
<h3 id="so-should-we-use-static-types-in-javascript-or-not">So should we use static types in JavaScript or not?</h3>
<p>The first programming languages I learned were JavaScript and Python, both of which are dynamically-typed languages.</p>
<p>But my foray into static types have added a whole new dimension to how I think about programming. For example, even though I found the Elm compiler errors overwhelming at first, defining types and “pleasing the compiler” became second nature, and actually improved my code thinking. Plus, there’s nothing more liberating than an intelligent robot telling me when I’m doing something wrong and how to fix it.</p>
<p>Despite the tradeoffs that come with types like verbosity and the upfront investment to master them, the safety and correctness that types add to our programs make these “disadvantages” less of an issue for me personally.</p>
<p>Dynamic typing feels faster and easier, but it sometimes loses ground once you actually try to make a program run in the wild. At the same time, you can talk to any Java developer who’s had to work with more complicated generic type definitions and they’ll tell you all about how much they hate types.</p>
<p>Ultimately, there’s no silver bullet. My personal approach is to favor using types under these circumstances:</p>
<ol>
<li>The program is critical to your business</li>
<li>The program is likely to be refactored as your needs evolve</li>
<li>The program is complex and has many moving parts</li>
<li>The program is maintained by a large team of developers who need to be able to grasp and understand the code quickly and accurately</li>
</ol>
<p>On the flip side, I’d consider opting out of types in these types of situations:</p>
<ol>
<li>The code is short-lived and non-critical</li>
<li>You’re prototyping and trying to move as quickly as possible</li>
<li>The program is small and/or simple</li>
<li>You’re the only developer</li>
</ol>
<p>The beauty of being a JavaScript developer today is that because of tools like Flow and TypeScript, we finally have a choice of whether to use static types or good ol’ vanilla JavaScript.</p>
<h3 id="conclusion">Conclusion</h3>
<p>I hope this post helped you get a feel for why types matter, how to use them, and most importantly <em>*when*</em> to use them.</p>
<p>Being able to toggle between dynamic and static types is a powerful tool for the JavaScript community — and exciting :)</p>
<p>More questions? As always, ping me in the comments to keep the conversation going.</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
