---
card: "/images/default.jpg"
tags: [svelte]
description: This article gives you a lightning-speed overview of Svelte -
author: "Milad E. Fahmy"
title: "Learn Svelte in 5 Minutes"
created: "2021-08-15T19:29:24+02:00"
modified: "2021-08-15T19:29:24+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-svelte tag-javascript tag-framework ">
<header class="post-full-header">
<h1 class="post-full-title">Learn Svelte in 5 Minutes</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/06/Screenshot-2020-06-06-at-16.10.39.png 300w,
/news/content/images/size/w600/2020/06/Screenshot-2020-06-06-at-16.10.39.png 600w,
/news/content/images/size/w1000/2020/06/Screenshot-2020-06-06-at-16.10.39.png 1000w,
/news/content/images/size/w2000/2020/06/Screenshot-2020-06-06-at-16.10.39.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/06/Screenshot-2020-06-06-at-16.10.39.png" alt="Learn Svelte in 5 Minutes">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>This article gives you a lightning-speed overview of Svelte - a Javascript framework which lets you write less code, use no virtual DOM, and create truly reactive apps.</p>
<p>As if that's not enough, Svelte is super-intuitive too! Built with developers in mind, it is designed to make coding easier, bug-squashing quicker, and a developer's work life generally happier.</p>
<p>If that sounds right up your street, then read on!</p>
<p>While 5 minutes won't be enough to teach you Svelte in depth, it does allow for a solid overview of the basics, including:</p>
<ul>
<li>Components</li>
<li>Importing and Exporting</li>
<li>Templating</li>
<li>Event handling</li>
<li>Event dispatching</li>
<li>Reactivity</li>
</ul>
<p>If you want to find out more about Svelte after reading this article, check out <a href="https://scrimba.com/course/glearnsvelte?utm_source=dev.to&amp;utm_medium=referral&amp;utm_campaign=glearnsvelte_5_minute_article">the full course</a> over on Scrimba. There, you'll learn about even more Svelte features and have the chance to road test your new skills with a bunch of interactive challenges.</p>
<p>For now, let's get started on the basics!</p>
<h2 id="components">Components</h2>
<p><a href="https://scrimba.com/p/pG6X6UG/cNDg9yHB?utm_source=dev.to&amp;utm_medium=referral&amp;utm_campaign=glearnsvelte_5_minute_article"><img src="https://dev-to-uploads.s3.amazonaws.com/i/e8ej7929dpa3u9tzsm0u.png" alt="DOM displaying Svelte component"></a><br>
<em>(Click the image to access the course.)</em>
</p>
<p>First, we'll take a look at how to build a Svelte component, which can contain three parts; <code>&lt;script&gt;</code>, which contains Javascript, <code>&lt;style&gt;</code>, which contains CSS and the HTML, which uses the JS from the <code>&lt;script&gt;</code> tag.</p>
<pre><code class="language-js">&lt;script&gt;
let say = 'hi';
&lt;/script&gt;
&lt;style&gt;
div {
color: red;
}
&lt;/style&gt;
&lt;div&gt;
Say: {say}
&lt;/div&gt;
</code></pre>
<p><strong>Note:</strong> The bare minimum needed for a Svelte component is the HTML, so the app will still work without the <code>&lt;script&gt;</code> and <code>&lt;style&gt;</code> tags.</p>
<h2 id="importingandexporting">Importing and Exporting</h2>
<p>One big benefit of using frameworks is the ability to modularise code by splitting it into separate components. Components are then imported into the main app using <code>import</code> keyword:</p>
<pre><code class="language-js">  import Face from './Face.svelte';
</code></pre>
<p>Unlike with other frameworks, the <code>export</code> keyword is not required to use a component elsewhere in an app. Instead, it is used to pass parameters, or props, from parent elements to their children.</p>
<p>For example, we can set a size prop with a default size in our component:</p>
<pre><code class="language-js">&lt;script&gt;
export let size = 1;
&lt;/script&gt;
&lt;div style="font-size: {size}em"&gt;=)&lt;/div&gt;
</code></pre>
<p>This allows us to easily adjust the size of the imported component over in our <code>App.svelte</code> file:</p>
<pre><code class="language-js">&lt;script&gt;
import Face from './Face.svelte';
&lt;/script&gt;
&lt;Face size="4" /&gt;
&lt;Face size="10" /&gt;
&lt;Face /&gt;
</code></pre>
<p>The various sizes appear on the DOM as follows:</p>
<p><a href="https://scrimba.com/p/pG6X6UG/cbDNVncg?utm_source=dev.to&amp;utm_medium=referral&amp;utm_campaign=glearnsvelte_5_minute_article"><img src="https://dev-to-uploads.s3.amazonaws.com/i/3aecnw1qq3xpcck19agr.png" alt="component imported with various sizes using props"></a><br>
<em>(Click the image to access the course.)</em>
</p>
<p>Head over to <a href="https://scrimba.com/p/pG6X6UG/cbDNVncg?utm_source=dev.to&amp;utm_medium=referral&amp;utm_campaign=glearnsvelte_5_minute_article">the course on Scrimba</a> to view and play around with the full code.</p>
<h2 id="templating">Templating</h2>
<p>The Svelte <a href="https://scrimba.com/p/pG6X6UG/cMZrQds2?utm_source=dev.to&amp;utm_medium=referral&amp;utm_campaign=glearnsvelte_5_minute_article">templating syntax</a> is a great feature which lets us add if statements and for loops to our HTML.</p>
<p>The syntax for an if statement looks like this:</p>
<pre><code class="language-js">&lt;Container&gt;
{#if say}
&lt;div&gt;
Hi!
&lt;/div&gt;
{/if}
&lt;/Container&gt;
</code></pre>
<p>While a for loop is as follows:</p>
<pre><code class="language-js">{#each [2,1,0] as faceIndex}
&lt;Face index={faceIndex} /&gt;
{/each}
</code></pre>
<h2 id="eventhandling">Event handling</h2>
<p>To allow the user to interact with our app, we need event handlers. In <a href="https://scrimba.com/p/pG6X6UG/caZ3J6U3?utm_source=dev.to&amp;utm_medium=referral&amp;utm_campaign=glearnsvelte_5_minute_article">this scrim</a>, we see how to add a simple <code>on:click</code> to a <code>&lt;button&gt;</code> to show our app's header:</p>
<pre><code class="language-js">&lt;button on:click={() =&gt; {showHeader = true}}&gt;show&lt;/button&gt;
</code></pre>
<p>And what a header it is..!<br>
<a href="https://scrimba.com/p/pG6X6UG/caZ3J6U3?utm_source=dev.to&amp;utm_medium=referral&amp;utm_campaign=glearnsvelte_5_minute_article"><img src="https://dev-to-uploads.s3.amazonaws.com/i/czgdba1dpkzu552kq2hq.png" alt="header made visible on the DOM with an event handler"></a><br>
<em>(Click the image to access the course.)</em>
</p>
<p>There is a gotcha with this, though - it only works with the native HTML <code>&lt;button&gt;</code> tag and not imported components called <code>&lt;Button&gt;</code>.</p>
<p>Luckily, we can work around this by using <strong>event forwarding</strong>, i.e. adding an <code>on:click</code> to the native <code>&lt;button&gt;</code> tag in its component file:</p>
<pre><code class="language-js">&lt;button on:click&gt;
&lt;slot&gt;&lt;/slot&gt;
&lt;/button&gt;
</code></pre>
<h2 id="eventdispatching">Event dispatching</h2>
<p><a href="https://scrimba.com/p/pG6X6UG/cD4bKDuD?utm_source=dev.to&amp;utm_medium=referral&amp;utm_campaign=glearnsvelte_5_minute_article"><img src="https://dev-to-uploads.s3.amazonaws.com/i/w203a2wxgn1brk5ss6i4.png" alt="Hide and show buttons created with event dispatcher"></a><br>
<em>(Click the image to access the course.)</em><br>
Event dispatching is a great feature of Svelte which increases code usability by allowing us to use the same element for more than one action.
</p>
<p>In <a href="https://scrimba.com/p/pG6X6UG/cD4bKDuD?utm_source=dev.to&amp;utm_medium=referral&amp;utm_campaign=glearnsvelte_5_minute_article">this scrim</a>, we learn how to use one <code>&lt;Button&gt;</code> component to both show and hide an element.</p>
<p>We create an event dispatcher in the <code>&lt;Button&gt;</code> component file like this:</p>
<pre><code class="language-js">&lt;script&gt;
import {createEventDispatcher} from 'svelte';
const dispatch = createEventDispatcher();
&lt;/script&gt;
</code></pre>
<p>We then add the dispatcher to our native HTML <code>&lt;button&gt;</code> like this:</p>
<pre><code class="language-js">&lt;button on:click={() =&gt; dispatch('show')}&gt;
Show
&lt;/button&gt;
&lt;button on:click={() =&gt; dispatch('hide')}&gt;
Hide
&lt;/button&gt;
</code></pre>
<p>Lastly, we declare the button's functionality options in the <code>App.svelte</code> file as follows:</p>
<pre><code class="language-js">&lt;Buttons on:show={() =&gt; {showHeader = true}} on:hide={() =&gt; {showHeader = false}} /&gt;
</code></pre>
<p>We can refactor this by passing values up through the dispatch using the event variable (<code>e</code>). In this case, the <code>&lt;Button&gt;</code> in our <code>App.svelte</code> file looks like this:</p>
<pre><code class="language-js">&lt;Buttons on:click={(e) =&gt; {showHeader = e.detail}} /&gt;
</code></pre>
<p>While the native HTML <code>&lt;button&gt;</code>s in our component file look like this:</p>
<pre><code class="language-js">&lt;button on:click={() =&gt; dispatch('click', true)}&gt;
Show
&lt;/button&gt;
&lt;button on:click={() =&gt; dispatch('click', false)}&gt;
Hide
&lt;/button&gt;
</code></pre>
<h2 id="reactivity">Reactivity</h2>
<p>If you want a piece of code to rerun every time its associated variable is updated, then Svelte's unique feature, <a href="https://scrimba.com/p/pG6X6UG/caZ3yBAB?utm_source=dev.to&amp;utm_medium=referral&amp;utm_campaign=glearnsvelte_5_minute_article">the reactive statement</a>, is for you. We declare a reactive statement with <code>$:</code> as follows:</p>
<pre><code class="language-js">let score = 0;
$: smileySays = 'Hi there, your score is: ' + score;
</code></pre>
<p>It's also possible to run if statements inside reactive statements. The code to do so looks like this:</p>
<pre><code class="language-js">let score = 0;
$: smileySays = 'Hi there, your score is: ' + score;
$: if (score &lt; -4) smileySays = 'Wow your score is low!'
</code></pre>
<p>That's about all the features we can cram into our 5-minute tour of Svelte. I hope you found it useful and are inspired to try out the framework for yourself and test your new-found skills.</p>
<p>Don't forget to check out the full course <a href="https://scrimba.com/course/glearnsvelte?utm_source=dev.to&amp;utm_medium=referral&amp;utm_campaign=glearnsvelte_5_minute_article">over at Scrimba</a> to find out about even more Svelte features and give the coding challenges a try.</p>
<p>Wherever your coding journey takes you next, happy learning :)</p>
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
