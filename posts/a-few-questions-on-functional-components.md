---
card: "/images/default.jpg"
tags: [React]
description: Have you wondered how to create a component in React?
author: "Milad E. Fahmy"
title: "How to Use Functional Components in React"
created: "2021-08-15T19:29:55+02:00"
modified: "2021-08-15T19:29:55+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-react tag-react-hooks tag-functional-programming tag-javascript ">
<header class="post-full-header">
<h1 class="post-full-title">How to Use Functional Components in React</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/05/kelvyn-ornettte-sol-marte-86DcFWVMp0g-unsplash.jpg 300w,
/news/content/images/size/w600/2020/05/kelvyn-ornettte-sol-marte-86DcFWVMp0g-unsplash.jpg 600w,
/news/content/images/size/w1000/2020/05/kelvyn-ornettte-sol-marte-86DcFWVMp0g-unsplash.jpg 1000w,
/news/content/images/size/w2000/2020/05/kelvyn-ornettte-sol-marte-86DcFWVMp0g-unsplash.jpg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/05/kelvyn-ornettte-sol-marte-86DcFWVMp0g-unsplash.jpg" alt="How to Use Functional Components in React">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Have you wondered how to create a component in React? </p>
<p>To answer, it is as simple as creating a function returning an HTML-like syntax.</p><pre><code class="language-js">import React from 'react';
function Counter({n}) {
return (
&lt;div&gt;{n}&lt;/div&gt;
);
}
export default Counter;</code></pre>
<p>Now let’s see what happened in the code above. &nbsp;<code>Counter</code> is a function that transforms a number into HTML. And if you look more carefully, <code>Counter</code> is a pure function. That’s right, the kind of function that returns the result based on its inputs and has no side-effects. </p>
<p>This explanation comes with a new question. What is a side-effect?</p>
<p>In short, a side-effect is any modification on the environment outside the function or any read information from the outside environment that can change.</p>
<p>You may have noticed that I used the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment" rel="noopener nofollow">destructuring assignment syntax</a> in the parameter list to extract out the <code>n</code> input number. That’s because components take as input a single object called “props” that has all the properties sent to them. </p>
<p>Here is how the <code>n</code> parameter can be set from any other component:</p><pre><code class="language-js">&lt;Counter n={1} /&gt;</code></pre>
<p>In a sense, this syntax can be imagined like a function call <code>Counter({n: 1})</code>. Isn’t that right?</p>
<p>Let’s continue our journey.</p>
<p>Can functional components have state? As the component name suggested I want to store and change a counter. What if we just declare a variable holding a number inside the component? Will it work?</p>
<p>Let’s find out.</p>
<p>I will start by declaring the variable inside the functional component.</p><pre><code class="language-js">import React from 'react';
function Counter() {
let n = 0;
return (
&lt;div&gt;{n}&lt;/div&gt;
);
}
export default Counter;</code></pre>
<p>Now let’s add the function that increments the number and logs it to the console. I will use the function as the event handler for the click event.</p><pre><code class="language-js">import React from 'react';
function Counter() {
let n = 0;
function increment(){
n = n + 1;
console.log(n)
}
return (
&lt;div&gt;
&lt;span&gt;{n}&lt;/span&gt;
&lt;button onClick={increment}&gt;Increment &lt;/button&gt;
&lt;/div&gt;
);
}
export default Counter;</code></pre>
<p>If we look at the console we see that the number is actually incremented, but that is not reflected on the screen. Any ideas?</p>
<p>You got it right … we need to change the number, but we need also to re-render it on the screen.</p>
<p>Here is where the utility function from <a href="https://reactjs.org/docs/hooks-intro.html" rel="noopener nofollow">React Hooks</a> comes into play. By the way, these utility functions are called hooks and they start with the word “use”. We are going to use one of them, <a href="https://reactjs.org/docs/hooks-state.html" rel="noopener nofollow">useState</a>. I will log also the “re-render” text to console to see how many times the <code>Counter</code> function is actually called.</p><pre><code class="language-js">import React, { useState } from 'react';
function Counter() {
const [n, setN] = useState(0);
console.log('re-render');
function increment(){
setN(n + 1);
console.log(n)
}
return (
&lt;div&gt;
&lt;span&gt;{n}&lt;/span&gt;
&lt;button onClick={increment}&gt;Increment &lt;/button&gt;
&lt;/div&gt;
);
}
export default Counter;</code></pre>
<p>Let’s read what <code>useState()</code> does.</p>
<p><strong><strong>What does </strong></strong><code><strong><strong>useState</strong></strong></code><strong><strong> return?</strong></strong> It returns a pair of values: the current state and a function that updates it.</p>
<p>In our case <code>n</code> is the current state and <code>setN()</code> is the function that updates it. Have you checked the console to see how many times the “re-render” text is displayed? I will leave that for you to find out.</p>
<p>We can update the state not only by setting the new value but also by providing a function that returns the new value.</p>
<p>In our case, the function that provides the new value will be called <code>increment()</code>. As you see, <code>increment()</code> is a pure function.</p><pre><code class="language-js">import React, { useState } from 'react';
function increment(n){
return n + 1;
}
function Counter() {
const [n, setN] = useState(0);
return (
&lt;div&gt;
&lt;span&gt;{n}&lt;/span&gt;
&lt;button
onClick={() =&gt; setN(increment)}&gt;
Increment
&lt;/button&gt;
&lt;/div&gt;
);
}
export default Counter;</code></pre>
<p>To understand what <code>setN(increment)</code> does, let’s read the documentation.</p>
<p><em><em>Passing an update function allows you to access the current state value inside the updater.</em></em></p>
<p>OK so <code>increment()</code> gets called with the current <code>n</code> state and it is used to compute the new state value.</p>
<h1 id="final-thoughts">Final Thoughts</h1>
<p>Let’s summarize what we found out.</p>
<p>In React we can simply define a component using a function that returns an HTML-like syntax.</p>
<p>React Hooks enables us to define state into such functional components.</p>
<p>And last but not least, we finally got rid of <code>this</code> pseudo-parameter in components. Maybe you have noticed that <code>this</code> becomes annoying by changing context when you don't expect it. No worries about that. We are not going to use <code>this</code> in functional components.</p>
<p>If you've made it this far you can also take a look at my books.</p>
<p><a href="https://read.amazon.com/kp/embed?asin=B07PBQJYYG&amp;preview=newtab&amp;linkCode=kpe&amp;ref_=cm_sw_r_kb_dp_cm5KCbE5BDJGE" rel="noopener nofollow"><strong><strong>Discover Functional JavaScript</strong></strong></a> was named one of the<strong><strong> </strong></strong><a href="https://bookauthority.org/books/best-functional-programming-books" rel="noopener nofollow"><strong><strong>best Functional Programming books by BookAuthority</strong></strong></a><strong><strong>!</strong></strong></p>
<p>For more on applying functional programming techniques to React take a look at <strong><strong><a href="https://www.amazon.com/dp/B088FZQ1XN">Functional React</a>.</strong></strong></p>
<p>Learn <strong><strong>functional React</strong></strong>, in a project-based way, with <a href="https://read.amazon.com/kp/embed?asin=B0846NRJYR&amp;preview=newtab&amp;linkCode=kpe&amp;ref_=cm_sw_r_kb_dp_o.hlEbDD02JB2" rel="noopener nofollow"><strong><strong>Functional Architecture with React and Redux</strong></strong></a><strong><strong>.</strong></strong></p>
<p><a href="https://twitter.com/cristi_salcescu">Tweet me your feedback</a>.</p>
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
