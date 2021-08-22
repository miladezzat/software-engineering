---
card: "https://cdn-media-1.freecodecamp.org/images/1*pwD6vakbORJiYCsD0NppHw.png"
tags: [JavaScript]
description: by Sindre Osen Aarsaether
author: "Milad E. Fahmy"
title: "The Virtual DOM is slow. Meet the Memoized DOM"
created: "2021-08-15T19:40:09+02:00"
modified: "2021-08-15T19:40:09+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-react tag-vue tag-software-development tag-front-end-development ">
<header class="post-full-header">
<h1 class="post-full-title">The Virtual DOM is slow. Meet the Memoized DOM</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*pwD6vakbORJiYCsD0NppHw.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*pwD6vakbORJiYCsD0NppHw.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*pwD6vakbORJiYCsD0NppHw.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*pwD6vakbORJiYCsD0NppHw.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*pwD6vakbORJiYCsD0NppHw.png" alt="The Virtual DOM is slow. Meet the Memoized DOM">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Sindre Osen Aarsaether</p>
<h1 id="the-virtual-dom-is-slow-meet-the-memoized-dom-">The Virtual DOM is slow. Meet the Memoized DOM.</h1>
<h4 id="moving-beyond-the-virtual-dom-and-state-management">Moving beyond the Virtual DOM and State Management</h4>
<p>The virtual DOM was a fantastic innovation. It brought about a much more productive way of writing web applications by allowing us to write our views in a declarative manner.</p>
<p>This big benefit has little to do with performance of the initial render. Instead, it is the process of updating the DOM to reflect changes in your state has become much faster.</p>
<p>This process of bringing the DOM in sync with the state is often referred to as <a href="https://reactjs.org/docs/reconciliation.html" rel="noopener">DOM reconciliation</a>.</p>
<p>If we had an infinitely fast reconciler, we could vastly simplify our applications by <strong>rendering everything on every single frame</strong>. The state layer would never need to know about views at all — much less send out events and track which views need to react when certain parts of the state change. The view would always be in sync with the data, no matter what you threw at it.</p>
<p>Sadly, virtual DOM implementations are <em>not</em> infinitely fast. They are, in fact, surprisingly slow. Thankfully, many have jumped on the Immutability™ bandwagon, in which case the virtual DOM thanks you! Others wrap all state in observables (e.g. mobx), and keep track of which view depends on what state. This allows you to reconcile only parts of your view, but comes with its own set of drawbacks.</p>
<p>The biggest issue is that we tend to decide how to manage our application state based on our view layer. What if we could get <strong>better</strong> performance in a world where the data layer and view layer don’t really know or care about each other?</p>
<h3 id="meet-the-memoized-dom">Meet the Memoized DOM</h3>
<p><a href="https://github.com/somebee/imba" rel="noopener">Imba</a> is a programming language for the web. It powers the interactive screencasting platform <a href="https://scrimba.com" rel="noopener">scrimba.com</a>, of which I am the lead developer. Imba was born to make developing web applications fun again. It features a clean and readable syntax inspired by Ruby. It compiles to readable and performant JavaScript, and works inside the existing ecosystem.</p>
<figcaption>The whole stack of scrimba.com is written in <a href="http://imba.io/guides" rel="noopener" target="_blank" title="">Imba</a>, but the language can easily be used just for the view layer.</figcaption>
</figure>
<p>Besides a clean and readable syntax, the biggest benefit of Imba is that it truly treats DOM elements as first-class citizens, on a much deeper level than JSX. It allows you to write views declaratively, yet it <strong>does not use a virtual DOM. </strong>Instead, Imba compiles views to a <strong>memoized DOM, </strong>which turns out to be <strong>an order of magnitude faster</strong>.</p>
<h4 id="how-it-works">How it works</h4>
<p>The general idea is that we create lightweight wrappers around DOM elements, and compile declarative views to chains of setters, each modifying the underlying DOM directly.</p><pre><code class="language-jsx">tag AppView
def render
&lt;self&gt;
&lt;h1.title&gt; "Welcome"
&lt;p.desc .red=(Math.random &gt; 0.5)&gt; "Roulette"</code></pre>
<p>The Imba view above will roughly compile into the following javascript:</p><pre><code class="language-jsx">class AppView extends Imba.Tag {
render() {
var $ = this.$; // inline cache for tag
return this.setChildren($.$ = $.$ || [
Imba.tag('h1',$).flag('title').setText("Welcome"),
Imba.tag('p',$).flag('desc').setText("Roulette")
]).synced(
$[1].flagIf('red',Math.random() &gt; 0.5)
);
}
}</code></pre>
<p>This is a <em>very</em> simple example to illustrate the basic concept. During compilation we split creation and updates into separate branches. The first time render is called for an <code>&lt;AppVi</code>ew&gt; the children will be created and static attributes will be set. On all subsequent calls the only real work we do is flip the className o<code>f o</code>ur &lt;p&gt;. Albeit much more complex, the same concept is used for conditionals, loops, and everything else inside tag trees.</p>
<p>If you’re interested in how it really works I recommend reading <a href="http://imba.io/guides/advanced/performance#performance" rel="noopener">this intro</a>.</p>
<h3 id="benchmark">Benchmark</h3>
<blockquote>React is fast, they said. React is fast enough, they said. React Fiber will be fast enough, they said.</blockquote>
<p>Most benchmarks test things like “insert/shuffle/remove 1000 rows”. This gives little indication about real-world performance. When there are hundres of changes, most of the difference is eaten up by actual DOM mutations, repainting, etc. It fails to measure the most important metric.</p>
<p>If you truly want to test the performance of DOM reconciliation, you need to look at how quickly the implementation brings the DOM in sync with the state, <strong><em>especially</em> when there are few/no changes</strong>.</p>
<p>So, to capture a realistic view of the reconciler performance, we could change a small part of the application state in each iteration, and then measure the time it takes to forcefully bring the view in sync with this changed state. The view should not be listening to any part of the state, and the state should not need to notify anyone whether it has changed.</p>
<figcaption>Screenshot from <a href="https://somebee.github.io/dom-reconciler-bench/index.html" rel="noopener" target="_blank" title="">dom-reconciler-bench</a></figcaption>
</figure>
<p><a href="https://somebee.github.io/dom-reconciler-bench/index.html" rel="noopener">This benchmark</a> steps through a deterministic sequence of state alterations, doing at most <strong>one change per iteration</strong>. We are measuring the time it takes to reconcile <em>the whole application view </em>after:</p>
<ol>
<li>Toggling the completion of a task</li>
<li>Removing a task</li>
<li>Inserting a task</li>
<li>Renaming a task</li>
<li>Doing nothing</li>
</ol>
<h3 id="results">Results</h3>
<p>Running the benchmark on an iMac (4GHz i7) yields the following results:</p>
<h4 id="safari-11">Safari 11</h4>
<ul>
<li>Imba 1.3: <strong>360458</strong> ops / sec</li>
<li>React 16.2: <strong>9752</strong> ops / sec — <strong>36.96x slower</strong></li>
<li>Vue 2.5: <strong>8719</strong> ops / sec —<strong> 41.34x slower</strong></li>
</ul>
<h4 id="chrome-65">Chrome 65</h4>
<ul>
<li>Imba 1.3: <strong>282484</strong> ops / sec</li>
<li>React 16.2: <strong>8882</strong> ops / sec —<strong> 31.81x slower</strong></li>
<li>Vue 2.5: <strong>8103</strong> ops / sec — <strong>34.86x slower</strong></li>
</ul>
<h4 id="firefox-58">Firefox 58</h4>
<ul>
<li>Imba 1.3: <strong>234334</strong> ops / sec</li>
<li>React 16.2: <strong>5075</strong> ops / sec — <strong>46.17x slower</strong></li>
<li>Vue 2.5: <strong>3119</strong> ops / sec — <strong>75.13x slower</strong></li>
</ul>
<p>This seems outrageous right? Surely, it cannot be right.</p>
<ul>
<li>All implementations are <em>really</em> reconciling on every step.</li>
<li>All implementations are blocking, synchronous, and deterministic.</li>
<li>All implementations are performing the same amount of DOM mutations.</li>
<li>Yes, we are using the minified production build of React. The development version is <strong>200x slower</strong> than Imba on the same test.</li>
<li>The memoized DOM creates practically no garbage during an iteration, uses less memory overall, and is conceptually very simple.</li>
</ul>
<p>All the implementations can probably be optimized more. I’m very happy to accept pull-requests at <a href="https://github.com/somebee/dom-reconciler-bench" rel="noopener">GitHub</a>. To be clear, I have tremendous respect for what React has achieved, and I truly love Vue. Imba has taken a lot of inspiration from it. I suspect it should be possible to compile Vue templates using a similar approach, and would love for someone to give it a go!</p>
<h3 id="profiling">Profiling</h3>
<p>Let’s test the raw reconciler performance when there aren’t even any changes. This removes the time spent doing actual DOM mutations from the equation, and gives us a good picture about how much work is going on during reconciliation. The charted CPU profile from Chrome gives a visual indication of how much less work is done with the memoized DOM technique.</p>
<h4 id="imba-1-3">Imba 1.3</h4>
<figcaption>Imba completes 100000 iterations in 99.7ms — 5.1ms spent in GC</figcaption>
</figure>
<h4 id="react-16-2">React 16.2</h4>
<figcaption>React completes 100000 iterations in 8312.7ms (83.4x slower) — 100.4ms spent in GC</figcaption>
</figure>
<h4 id="vue-2-5">Vue 2.5</h4>
<figcaption>Vue completes 100000 iterations in 8514.7ms (85.4x slower) — 308.4ms spent in GC</figcaption>
</figure>
<h3 id="does-it-scale">Does it scale?</h3>
<blockquote>“There are A LOT, and I mean, A LOT of small little projects that claim more speed, easier development, but on closer inspection usually lack very important features (such as module life cycle hooks) and, of course without them the performance is higher, but the flexibility to use those libraries beyond a todo list application is limited.”</blockquote>
<p>This is a quote from someone who read through an early draft of this article, and I would like to tackle it head on. The performance difference is not limited to a simple test, quite the contrary. <a href="http://imba.io" rel="noopener">Imba</a> has been used in production for several years at <a href="https://scrimba.com" rel="noopener">scrimba.com</a>, but it is still not for the faint of heart. For most developers the massive ecosystems for Vue and React will be hard (and probably unwise) to leave behind. The <a href="http://imba.io/guides/essentials/introduction" rel="noopener">Imba documentation</a> still leaves a lot to be desired, but we are improving it every day.</p>
<h3 id="does-it-matter">Does it matter?</h3>
<p>I’m sure you’ve heard that React is fast enough. But fast enough for what? It doesn’t really matter if React was 15% faster, but with an order of magnitude improvement we can start to explore simpler ways to build applications.</p>
<p>It’s not about the <em>perceived</em> speed, but about what it lets you do. At <a href="https://scrimba.com" rel="noopener">scrimba.com</a> we don’t worry about keeping the view in sync with the state. We don’t worry about tracking when state has changed. Our data models are not observable. We just render. Whenever. <strong>And it’s liberating.</strong></p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
