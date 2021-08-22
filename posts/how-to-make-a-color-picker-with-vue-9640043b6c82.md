---
card: "https://cdn-media-1.freecodecamp.org/images/1*_mu96vH6fakViESA8XOmQg.png"
tags: [JavaScript]
description: by ZAYDEK
author: "Milad E. Fahmy"
title: "How to make a ? color picker with Vue!"
created: "2021-08-15T19:43:51+02:00"
modified: "2021-08-15T19:43:51+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-tech tag-programming tag-vuejs tag-design ">
<header class="post-full-header">
<h1 class="post-full-title">How to make a ? color picker with Vue!</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*_mu96vH6fakViESA8XOmQg.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*_mu96vH6fakViESA8XOmQg.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*_mu96vH6fakViESA8XOmQg.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*_mu96vH6fakViESA8XOmQg.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*_mu96vH6fakViESA8XOmQg.png" alt="How to make a ? color picker with Vue!">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by ZAYDEK</p>
<h1 id="how-to-make-a-color-picker-with-vue-">How to make a ? color picker with Vue!</h1>
<h4 id="caution-colors-may-appear-cuter-than-they-are-">Caution: colors may appear cuter than they are!</h4>
<p>Before I get to the article, I just want to share that I’m building a product, and I would love to collect some data about how to better serve web developers. I created a <a href="https://twitter.com/username_ZAYDEK/status/1103914471267790854" rel="noopener">short questionnaire</a> to check out before or after reading this article. Please check it out — thanks! And now, back to our regular scheduled programming.</p>
<h3 id="hello-internet-">Hello Internet!</h3>
<p>I’m <a href="https://twitter.com/username_ZAYDEK" rel="noopener">Zaydek</a> and I’m newish to web development. I come from a background in graphic design and programming, so picking up the frontend has been fascinating for me.</p>
<p>The web is like the offspring of a graphic designer and programmer — it’s both visual and programmatic. So today, I’m going to introduce you to <a href="https://vuejs.org/" rel="noopener">Vue.js</a> and component-based web design — that is, modern web development. I’ll take you from a newbie web developer to an all-powerful, all-knowing web developer seer!</p>
<blockquote><em>How can you make such claims, sir?</em></blockquote>
<blockquote>— Fancy you</blockquote>
<p>Well, the thing is, most people learned how to Internet before we (as a whole) understood how to Internet! Including me! ? Which, to be honest, is probably why I refused to learn web development for the longest time. It just felt so broken!</p>
<p>But times they are a-changin’ and web development has never been more accessible or streamlined. So it is my great honor, and privilege, to introduce you to how to Internet in 2018, and perhaps even beyond!</p>
<h4 id="i-also-teach-how-this-works-and-a-whole-lot-more-in-the-vue-course-i-just-released-learn-vue-from-the-basics-and-how-to-build-a-few-things-too-click-here-to-enroll-for-free-">I also teach how this ? works and a whole lot more in the Vue course I just released. Learn Vue from the basics and how to build a few things, too! C<a href="https://scrimba.com/g/glearnvue" rel="noopener">lick here to enroll for free!</a></h4>
<figcaption><a href="https://scrimba.com/g/glearnvue" rel="noopener" target="_blank" title="">Click to enroll in my free Vue course!</a></figcaption>
</figure>
<h4 id="scrimba-com-is-a-new-and-interactive-website-for-learning-and-sharing-how-to-code-screencasts-can-be-interrupted-and-edited-making-learning-active-and-fun-to-experiment-with-"><a href="https://scrimba.com/g/glearnvue" rel="noopener">Scrimba.com</a> is a new and interactive website for learning and sharing how to code. Screencasts can be interrupted and edited, making learning active and fun to experiment with!</h4>
<h3 id="so-what-s-the-deal-with-vue">So, what’s the deal with Vue?</h3>
<p>So why <a href="https://vuejs.org/" rel="noopener">Vue</a>? It’s a great and fair question you should be asking. Some people protest and scorn the idea of using any framework, and I think this is a dangerous idea. I do, however, suggest that for whatever tool it is that you use, to be very deliberate and thoughtful in why you’re using it.</p>
<p>I picked up Vue because I want to use newer tools that are not too mainstream. I wanted them to have learned from tools that have come before them (or in other words, are not too trailblazing). They should have <a href="https://vuejs.org/v2/guide/" rel="noopener">best-in-class documentation</a>, and have a critical mass of users.</p>
<p>Since Vue, in the last weeks, <a href="https://hasvuepassedreactyet.surge.sh/" rel="noopener">surpassed React is stars in GitHub</a>, that is evidence to me that Vue has a critical mass. ?</p>
<figcaption>By the way, <a href="https://hasvuepassedreactyet.surge.sh" rel="noopener" target="_blank" title="">this website</a> was made using Vue.js! ? </figcaption>
</figure>
<p>Furthermore, <a href="https://github.com/vuejs/vue" rel="noopener">Vue is an extraordinary open-source project</a>, <a href="https://www.patreon.com/evanyou" rel="noopener">is publicly-funded</a>, and has a great developer-experience! Like user-experience but for developers. This has the wonderful consequence that the common developer can now create interactive websites intuitively. And Vue builds on one of the most successful ideas from the Angular-React wars which is the Virtual DOM. So let’s talk about that now.</p>
<blockquote><em>Virtual WUT?</em></blockquote>
<blockquote>— Internet You</blockquote>
<p>Virtual DOM, yo. LOL sorry. So let’s back up — DOM is short for document-object-model. I think of the DOM as a paradigm for how we think about text as data structures to compose what we call web pages. And a virtual DOM is a clever abstraction for dealing with the text that goes between the elements, like <code>&lt;p&gt;hello, worl</code>d!&lt;/p&gt;. In an idiomatic Vue-based website it’s som<code>ething like &lt;p&gt;</code>;{{ message }}&lt;/p&gt;, where the data is stored inside of the JavaScript instead!</p>
<blockquote><em>Why rely on JavaScript for a simple website?</em></blockquote>
<blockquote>— Innocent You</blockquote>
<p>That’s a great (and fair) point. But there’s a significant benefit to relying on some JavaScript to compose websites, static or dynamic. We can write and build websites programmatically instead of copypasta’ing data around. Once the data is separate from the HTML, just like having CSS separate from the HTML, that’s when magical things can start to happen. ?</p>
<p>The good news is that because we’ve come to expect so much from websites, it’s fair to assume that the majority of people will have JavaScript enabled by default. So we’d have no reason to disable it. I might have disagreed with this a few years ago, but I can now appreciate just how much the benefits of using JavaScript far outweigh whatever possible concerns may arise.</p>
<h3 id="so-what-about-that-color-picker-eh">So… what about that color picker, eh?</h3>
<figcaption>Click to pick a color, any color!</figcaption>
</figure>
<p>Sorry for blabbering! It’s hard for me not to talk about this at length, partly because it’s so exciting. And also partly because of the gamut of possibilities that present themselves when a sole developer can be responsible for building beautiful and interactive web apps/businesses. Businesses you say? Yes —<a href="https://twitter.com/username_ZAYDEK" rel="noopener"> Follow me on Twitter</a> and I’ll be be sure to follow up! ?</p>
<p>Without further ado, here’s the HTML for the website:</p>
<p>Psst… the full code is available in the <a href="https://scrimba.com/p/pZ45Hz/crVeyTd" rel="noopener">ninth screencast</a>.</p>
<p>Feeling shocked? The thing is, let’s think about the inherent complexity of the website I’ve shown you. It’s really just a box with two cells, one with an emoji and one with text, repeating 12 times. Yes, there’s some padding, there are some gradients, but the fundamental design is unchanged. So what if the code’s complexity was proportional to the design’s complexity?</p>
<figcaption>This is what I call a CSS debugger. You can learn more about it (and how to use it) by <a href="https://gist.github.com/zaydek/6b2e55258734deabbd2b4a284321d6f6" rel="noopener" target="_blank" title="">clicking here</a>.</figcaption>
</figure>
<p>Here I’ve applied a <a href="https://gist.github.com/zaydek/6b2e55258734deabbd2b4a284321d6f6" rel="noopener">CSS debugger</a> to disambiguate the design, but this only goes as far as the CSS is concerned. What’s more important here, the real significance of Vue, is how we can think about our website in terms of data and not in terms of HTML elements.</p>
<p>So look again at those images. If we think about our website purely in terms of data, how much data is there?</p>
<p>Allow me to now share the underlying data structure used:</p>
<figcaption>emojify() is a helper function</figcaption>
</figure>
<p>The following sentence is possibly the most important: <strong>Vue frees us to think about our website in terms of data, separate from the HTML; this is a revolution for how we can build for the web!</strong></p>
<p>To be explicit, what I’m showing you is an array of anonymous objects each with two keys: <code>emoji</code>, and <code>color</code>. Now that we can represent the website in terms of data, we just iterate over the data using Vue’s <code>v-for</code> and a custom component.</p>
<h3 id="yeah-right-so-what-about-components">Yeah, right. So what about components?</h3>
<p>Components — yes! Second to separating the data from the HTML, one of the coolest things Vue offers is component-based design. Components can help us abstract blocks of HTML/CSS/JS into a reusable unit: a component.</p>
<p><strong>A quick note</strong>: I decided it would be best to first learn how to use Vue without a build-process, meaning I’m not making use of single-file-components. But I am making use of components via <code>Vue.component()</code>.</p>
<p>Remember the <code>&lt;swat</code>ch&gt; element I demo’d earlier in the source code? That’s a custom component I engineered using Vue to abstract the element from the implementation. This is a significant concept, because it means we can start to think more functionally than imperatively.</p>
<p>What’s the difference? Functional design cares about the result, whereas imperative design cares about the result <strong>and</strong> the implementation. Designing a component is an imperative process, whereas using one is a functional. ?</p>
<p>This is the implementation for the <code>swatch</code> element shown earlier. How it works is that Vue scans the DOM for instances of <code>swatch</code> and replaces it with the quotes HTML inside of the component’s <code>template</code> value. This means we can do major refactoring to better understand our website in terms of concepts, rather than being worried about how something ought to be engineered all the time.</p>
<h4 id="there-s-a-lot-more-to-learning-vue-so-i-wrote-two-more-articles-on-the-subject-matter-please-after-this-article-have-a-look-">There’s a lot more to learning Vue, so I wrote two more articles on the subject matter. Please, after this article, have a look!</h4>
<figcaption>Left: “<a href="https://medium.freecodecamp.org/learn-vue-js-in-our-free-course-85d5df41e47f" rel="noopener" target="_blank" title="">Learn Vue.js in this free course! ?✨”</a> Right: “B<a href="https://medium.freecodecamp.org/building-schr%C3%B6dingers-div-with-vue-4068f6423830" rel="noopener" target="_blank" title="">uilding Schrödinger’s div ? with Vue!” </a> </figcaption>
</figure>
<h3 id="well-you-ve-changed-my-mind-">Well, you’ve changed my mind..</h3>
<p>I know this might be a lot to take in, especially for something appearing so harmless as a ? color picker. But what I’ve shown you is (besides the CSS) 90% of the codebase. There are at least a few helper functions I’m omitting, but the point is that the techniques and ideologies discussed add up to a lot more than a cute web app. It means that a sole individual can create beautiful and functional web-based products and services for others.</p>
<p>I’m also suggesting that Vue is a lot more than a framework. If paired with the right backend language (let’s hear it for <a href="https://golang.org/" rel="noopener">Go</a>!), learning and using Vue adds up to a lot more. Idiomatic Vue can also teach what modern software development means, and how to access the billions(!) of us that are now connected, without the same technical barriers that come with app development.</p>
<h4 id="so-please-go-out-into-the-beautiful-world-and-learn-you-some-vue-you-can-make-amazing-things-and-even-change-people-s-lives-even-your-own-and-if-it-helps-try-the-free-course-">So please, go out into the beautiful world and learn you some Vue! You can(!) make amazing things and even change people’s lives, even your own. And if it helps, <a href="https://scrimba.com/g/glearnvue" rel="noopener">try the free course</a>!</h4>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
