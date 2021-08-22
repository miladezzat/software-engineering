---
card: "https://cdn-media-1.freecodecamp.org/images/1*0P3r47A-UCKu5JgYjANzcA.png"
tags: [JavaScript]
description: "Now that React Hooks have been officially released, even more"
author: "Milad E. Fahmy"
title: "How to easily cancel useEffect HTTP calls with RxJS"
created: "2021-08-16T11:32:08+02:00"
modified: "2021-08-16T11:32:08+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-react tag-technology tag-programming tag-tech ">
<header class="post-full-header">
<h1 class="post-full-title">How to easily cancel useEffect HTTP calls with RxJS</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*0P3r47A-UCKu5JgYjANzcA.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*0P3r47A-UCKu5JgYjANzcA.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*0P3r47A-UCKu5JgYjANzcA.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*0P3r47A-UCKu5JgYjANzcA.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*0P3r47A-UCKu5JgYjANzcA.png" alt="How to easily cancel useEffect HTTP calls with RxJS">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<h3 id="useeffect">useEffect</h3>
<p>The <code>useEffect</code> hook’s among the most popular, as it can replace <code>componentDidMount</code>, <code>componentDidUpdate</code>, and <code>componentWillUnmount</code>.</p>
<p>Most of the initialization, updates, and cleanup logic a component may need can be put inside of <code>useEffect</code>.</p>
<h3 id="anuglyuserexperience">An Ugly User Experience</h3>
<p>On a recent project, I encountered a scenario where <code>useEffect</code> acted on HTTP requests I was no longer interested in.</p>
<p>Conceptually, the UI was like this:</p>
<p><img src="https://cdn-media-1.freecodecamp.org/images/1*0P3r47A-UCKu5JgYjANzcA.png" alt=""></p>
<ul>
<li>On first load, fetch the list of fruits and render a <code>&lt;button&gt;</code> for each one.</li>
<li>Click a <code>&lt;button&gt;</code> to fetch that fruit’s details.</li>
</ul>
<p>But watch what happens when I click multiple fruits in a row</p>
<p><img src="https://cdn-media-1.freecodecamp.org/images/1*GFxf5hJp35gNFE_D_EuRAA.gif" alt=""></p>
<p>Way after I stopped clicking, the fruit detail section kept changing!</p>
<h3 id="thecode">The Code</h3>
<p>Let’s see my custom hook that leverages <code>useEffect</code>.</p>
<p>Here’s the <a href="https://codesandbox.io/s/l5l746yll7">Codesandbox</a> and <a href="https://github.com/yazeedb/useEffect-rxjs-cancel-fetch/">GitHub</a> links if you wish to follow along. The file is <code>useFruitDetail.js</code>.</p>
<pre><code class="language-js">import { useEffect, useState } from 'react';
import { getFruit } from './api';
export const useFruitDetail = (fruitName) =&gt; {
const [fruitDetail, setFruitDetail] = useState(null);
useEffect(() =&gt; {
if (!fruitName) {
return;
}
getFruit(fruitName).then(setFruitDetail);
}, [fruitName]);
return fruitDetail;
};
</code></pre>
<p>Whenever <code>fruitName</code> changes, we’ll request its details. And we have no way of cancelling a request! So quickly re-running this results in many state changes that we’re no longer interested in.</p>
<p>If you render this to the UI, you get a messy user experience where the detail section keeps flickering until the final request is resolved.</p>
<h3 id="enterrxjs">Enter RxJS</h3>
<p>Ignoring old requests is trivial with RxJS.</p>
<p>It can do so much more than what I’ll demo here, so I highly recommend you <a href="https://www.learnrxjs.io/">dive into it</a>!</p>
<p>This portion of our code, the <em>effect</em> code, needs to change.</p>
<pre><code class="language-js">() =&gt; {
if (!fruitName) {
return;
}
getFruit(fruitName).then(setFruitDetail);
};
</code></pre>
<p>Instead of a Promise, let’s convert <code>getFruit</code> into an Observable using the RxJS <code>defer</code> function. And instead of <code>.then</code>, we’ll call <code>.subscribe</code>.</p>
<pre><code class="language-js">import { defer } from 'rxjs';
// ...
() =&gt; {
if (!fruitName) {
return;
}
defer(() =&gt; getFruit(fruitName)).subscribe(setFruitDetail);
};
</code></pre>
<p>This doesn’t fix the issue yet. We still need to <em>unsubscribe</em> if <code>fruitName</code> changes.</p>
<p>According to <a href="https://reactjs.org/docs/hooks-reference.html#cleaning-up-an-effect">React’s docs</a>, we can return a function that’ll be executed at the end of our effect. This acts as the cleanup logic.</p>
<p>So something like this:</p>
<pre><code class="language-js">() =&gt; {
if (!fruitName) {
return;
}
const subscription = defer(() =&gt; getFruit(fruitName)).subscribe(
setFruitDetail
);
return () =&gt; {
subscription.unsubscribe();
};
};
</code></pre>
<h3 id="itworks">It Works!</h3>
<p><img src="https://cdn-media-1.freecodecamp.org/images/1*DUS5ubg4kUxCbPk5nHRxvQ.gif" alt=""></p>
<p>This experience is much cleaner!</p>
<p>By clicking another fruit, <code>useEffect</code> sees <code>fruitName</code> change and runs the previous effect’s cleanup logic. As a result, we unsubscribe from the previous fetch call and focus on the current one.</p>
<p>Now our UI patiently waits until the user’s done clicking and the latest fruit’s details return.</p>
<p>Thanks for following this tutorial to the end!</p>
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
