---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c9d01740569d1a4ca355f.jpg"
tags: [JavaScript]
description: Let’s take a look at what a namespace is when it comes to bui
author: "Milad E. Fahmy"
title: "How to Use Anonymous Functions for Private Namespacing in Your JavaScript Apps"
created: "2021-08-15T19:30:58+02:00"
modified: "2021-08-15T19:30:58+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-privacy tag-cybersecurity tag-toothbrush ">
<header class="post-full-header">
<h1 class="post-full-title">How to Use Anonymous Functions for Private Namespacing in Your JavaScript Apps</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c9d01740569d1a4ca355f.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9d01740569d1a4ca355f.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9d01740569d1a4ca355f.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9d01740569d1a4ca355f.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c9d01740569d1a4ca355f.jpg" alt="How to Use Anonymous Functions for Private Namespacing in Your JavaScript Apps">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>Let’s take a look at what a namespace is when it comes to building JavaScript applications and some of the benefits from using a private namespace when building your apps.</p>
<p><strong><strong>Please note that this article references anonymous self-executing functions. If you’re unaware of what this is, please read this excellent article by Noah Stokes: <a href="http://esbueno.noahstokes.com/post/77292606977/self-executing-anonymous-functions-or-how-to-write" rel="nofollow">Self-Executing Anonymous Functions or How to Write Clean Javascript</a>. This article will go into detail about anonymous self-executing functions.</strong></strong></p>
<h2 id="what-is-a-namespace"><strong>What is a Namespace?</strong></h2>
<p>To put it simply, a namespace is just a section of code that has its own space. When you first begin writing JS apps, you generally just type the code out and run it. This puts all of the code into what’s known as the <strong><strong>global namespace</strong></strong>, which contains all of the code for the window you’re working in.</p>
<p>If you keep all of your code in the <strong><strong>global namespace</strong></strong>, though, you can run into problems with collisions, naming conventions, etc. especially in large JS applications/games.</p>
<p>Let’s take a look at an example of how using only the <strong><strong>global namespace</strong></strong> to develop a game is a bad idea.</p>
<p>So, let’s say we have a game that is keep tracking of the points that the player has:</p><pre><code class="language-text">var points = 0;</code></pre>
<p>A lot of games track points to add a competitive edge to the game. By simply typing that line into a script, we’ve created a variable named <em>points</em> that can track the points gained by the user.</p>
<p>And that’s all fine and well, but let’s say that we have a more advanced user playing the game. This user knows how to look at the source of a web page, and so this person takes a peek at the source behind the JS game and realizes that the <em>points</em> variable is just sitting there in the <strong><strong>global namespace</strong></strong>. An evil smirk descends across their face as they contemplate the points they can achieve! They decide that they don’t want to wait to beat some baddies up, or smash some mushrooms, or what have you, to rack up a bunch of points. They want their points now! Well, how does <em>a quadrillion billion million</em> points sound?! So, they load up the console on their favorite browser, and simply type into the console:</p><pre><code class="language-text">points = 34750925489459203859095480917458059034;</code></pre>
<p>Once the user hits enter, the <em>points</em> variable is updated in the game. Now, the user has a truly humongous, and likely unrealistic, amount of points in the game, and he can brag to his friends that no one can possibly beat his awesome score.</p>
<p>So, how do we prevent this from occurring? This is where <strong><strong>private namespaces</strong></strong> come into play.</p>
<h2 id="private-namespaces"><strong>Private Namespaces</strong></h2>
<p><strong><strong>Private namespaces</strong></strong> allow developers to put their code into sections (or <strong><strong>namespaces</strong></strong>). These sections operate independently of each other but can still read and write from the <strong><strong>global namespace</strong></strong>.</p>
<p>To break this down into simpler terms from a real life scenario, let’s say you are working in an office building. You have your own office, and you see others with their own offices. Each office is locked, and only the person who owns the office has a key to this office. Let’s also say that you have some type of new super lock that makes your office impenetrable by any other person in the building. Let’s consider the office building itself as the <strong><strong>global namespace</strong></strong> and each office as a <strong><strong>private namespace</strong></strong>. You don’t have access to anyone else’s office nor do they have access to yours. But, each one of you have access to the rest of the office building, whether that’s getting coffee, grabbing a snack, etc. Each one of you can grab something from the <strong><strong>global namespace</strong></strong> (or create/modify something there), but you can’t create/modify/grab anything from each other’s offices; you can only create/modify/grab from your own <strong><strong>private namespace</strong></strong>/office.</p>
<h2 id="achieving-a-private-namespace"><strong>Achieving a Private Namespace</strong></h2>
<p>So, how do we achieve this <strong><strong>private namespace</strong></strong> in JavaScript? Use an anonymous self-executing function! If you didn’t read the article by Noah Stokes, <a href="http://esbueno.noahstokes.com/post/77292606977/self-executing-anonymous-functions-or-how-to-write" rel="nofollow">Self-Executing Anonymous Functions or How to Write Clean Javascript</a>, please do so now. This article will go into detail about anonymous self-executing functions.</p>
<p>Let’s take a look at using that <em>points</em> variable from earlier, but let’s separate it into a <strong><strong>private namespace</strong></strong>:</p><pre><code class="language-text">//The most common way you'll see an anonymous self-executing function
(function () {
var points = 0;
})();
//This is just one of many more alternative ways to use an anonymous self-executing function
/*
!function () {
var points = 0;
}();
*/</code></pre>
<p>Now, when the user gets to the page, they will be unable to open up the console in their browser and change the value of the points variable as they wish! Awesome!</p>
<h2 id="namespace-and-document-interaction"><strong>Namespace and Document Interaction</strong></h2>
<p>The above code was but one use for using an anonymous self-executing function to give code its own <strong><strong>private namespace</strong></strong>. Keep in mind that namespaces only affect JS code (variables/arrays/objects/etc.), not code that pertains to the document itself.</p>
<p>Any code within a namespace still has the same access to the HTML document, and CSS, as you would normally in the <strong><strong>global namespace</strong></strong>. Take a look at the next two code samples. They both perform the same functionality, and neither is more beneficial, or more efficient, than the other.</p><pre><code class="language-text">&lt;script type="text/javascript"&gt;
(function () {
document.querySelector('body').style.background = 'blue';
})();
&lt;/script&gt;</code></pre>
<p>is the same as:</p><pre><code class="language-text">&lt;script type="text/javascript"&gt;
document.querySelector('body').style.background = 'blue';
&lt;/script&gt;</code></pre>
<p>Keep in mind that this is just one way to use namespaces in JavaScript applications. Adapt your code to what best fits the situation at hand.</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
