---
card: "https://cdn-media-1.freecodecamp.org/images/1*wgbmuDgBQ6N-kOrbD-qMFA.jpeg"
tags: [Web Development]
description: "Want to break some code? Change it real quick before you even"
author: "Milad E. Fahmy"
title: "Don’t copy-paste code. Type it out. ?"
created: "2021-08-16T11:54:06+02:00"
modified: "2021-08-16T11:54:06+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-web-development tag-programming tag-software-development tag-software-engineering tag-technology ">
<header class="post-full-header">
<h1 class="post-full-title">Don’t copy-paste code. Type it out. ?</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*wgbmuDgBQ6N-kOrbD-qMFA.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*wgbmuDgBQ6N-kOrbD-qMFA.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*wgbmuDgBQ6N-kOrbD-qMFA.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*wgbmuDgBQ6N-kOrbD-qMFA.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*wgbmuDgBQ6N-kOrbD-qMFA.jpeg" alt="Don’t copy-paste code. Type it out. ?">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
&lt;div class="input-wrapper"&gt;
&lt;input type="text" id="name"&gt;
&lt;div class="input-wrapper"&gt;
&lt;input type="text" id="name"&gt;
&lt;/div&gt;
&lt;label for="name"&gt;&lt;/label&gt;
&lt;div class="input-wrapper"&gt;
&lt;input type="password" id="password"&gt;
&lt;/div&gt;</code></pre><figcaption><a href="https://gist.github.com/FagnerMartinsBrack/89d0ad963563d64868970ae2d8aa8492">The code</a> showing the previous label and input elements being duplicated to create a new field. The label has been copied over, however, the attribute "for" remained unchanged.</figcaption></figure><p>This example is interesting because it’s the kind of functionality that is hard to test, even with visual regression. It heavily depends on static testing — like a code review — to make sure that the code was written for the intended purpose. (In this case, to propagate mouse events to the input for the same <em>id</em> of the label <em>for </em>attribute.)</p><p>The same thing happens with tests. When we copy an already passing test instead of creating a new one from the scratch, we run the risk of not changing necessary tokens that would otherwise cause that test to fail.</p><p>In this case, though, we can prevent this mistake by using <a href="https://medium.com/@fagnerbrack/why-test-driven-development-4fb92d56487c" rel="noopener">Test Driven Development</a> — a mindset based on creating a failing test first, then change the application code to make it pass. This mindset allows us to be confident that we’re less likely to miss something or <a href="https://medium.com/@fagnerbrack/mocking-can-lean-to-nondeterministic-tests-4ba8aef977a0" rel="noopener">create false-positives</a>.</p><p>Instead of copying code without understanding it, learn from other people's code and practice on top of it. This will maximize your learning ROI.</p><p>After all, the most valuable resource of a developer is the brain — not the fingers.</p><p>Thanks for reading. If you have some feedback, reach out to me on <a href="https://twitter.com/FagnerBrack" rel="noopener">Twitter</a>, <a href="https://www.facebook.com/fagner.brack" rel="noopener">Facebook</a> or <a href="http://github.com/FagnerMartinsBrack" rel="noopener">Github</a>.</p>
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
