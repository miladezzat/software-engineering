---
card: "/images/default.jpg"
tags: [JavaScript]
description: "JavaScript has some handy methods which help us iterate throu"
author: "Milad E. Fahmy"
title: "The Differences Between forEach() and map() that Every Developer Should Know"
created: "2021-08-15T19:31:14+02:00"
modified: "2021-08-15T19:31:14+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript ">
<header class="post-full-header">
<h1 class="post-full-title">The Differences Between forEach() and map() that Every Developer Should Know</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/01/cover4.png 300w,
/news/content/images/size/w600/2020/01/cover4.png 600w,
/news/content/images/size/w1000/2020/01/cover4.png 1000w,
/news/content/images/size/w2000/2020/01/cover4.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/01/cover4.png" alt="The Differences Between forEach() and map() that Every Developer Should Know">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>JavaScript has some handy methods which help us iterate through our arrays. The two most commonly used for iteration are <code>Array.prototype.map()</code> and <code>Array.prototype.forEach()</code>. </p>
<p>But I think that they remain a little bit unclear, especially for a beginner. Because they both do an iteration and output something. So, what is the difference?</p>
<p>In this article, we'll look at the following:</p>
<ul>
<li><a>Definition</a>s</li>
<li><a>The returning value</a></li>
<li><a>Ability to chain other methods</a></li>
<li><a>Mutability</a></li>
<li><a>Performance Speed</a></li>
<li><a>Final Thoughts</a></li>
</ul>
<h2 id="definitions">Definitions</h2>
<p>The <code>map</code> method receives a function as a parameter. Then it applies it on each element and returns an entirely new array populated with the results of calling the provided function. </p>
<p>This means that it returns a new array that contains an image of each element of the array. It will always return the same number of items.</p><pre><code class="language-javascript">
const myAwesomeArray = [5, 4, 3, 2, 1]
myAwesomeArray.map(x =&gt; x * x)
// &gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt; Output: [25, 16, 9, 4, 1]</code></pre>
<p>Like <code>map</code> , the <code>forEach()</code> method receives a function as an argument and executes it once for each array element. However, instead of returning a new array like <code>map</code>, it returns <code>undefined</code>.</p><pre><code class="language-javascript">const myAwesomeArray = [
{ id: 1, name: "john" },
{ id: 2, name: "Ali" },
{ id: 3, name: "Mass" },
]
myAwesomeArray.forEach(element =&gt; console.log(element.name))
// &gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt; Output : john
//                    Ali
//                    Mass</code></pre>
<h2 id="1-the-returning-value">1. The returning value</h2>
<p>The first difference between <code>map()</code> and <code>forEach()</code> is the returning value. The <code>forEach()</code> method returns <code>undefined</code> and <code>map()</code> returns a new array with the transformed elements. Even if they do the same job, the returning value remains different.</p><pre><code class="language-javascript">const myAwesomeArray = [1, 2, 3, 4, 5]
myAwesomeArray.forEach(x =&gt; x * x)
//&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;return value: undefined
myAwesomeArray.map(x =&gt; x * x)
//&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;return value: [1, 4, 9, 16, 25]
</code></pre>
<h2 id="2-ability-to-chain-other-methods">2. Ability to chain other methods</h2>
<p>The second difference between these array methods is the fact that <code>map()</code> is chainable. This means that you can attach <code>reduce()</code>, <code>sort()</code>, <code>filter()</code> and so on after performing a <code>map()</code> method on an array. </p>
<p>That's something you can't do with <code>forEach()</code> because, as you might guess, it returns <code>undefined</code>.</p><pre><code class="language-javascript">const myAwesomeArray = [1, 2, 3, 4, 5]
myAwesomeArray.forEach(x =&gt; x * x).reduce((total, value) =&gt; total + value)
//&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt; Uncaught TypeError: Cannot read property 'reduce' of undefined
myAwesomeArray.map(x =&gt; x * x).reduce((total, value) =&gt; total + value)
//&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;return value: 55
</code></pre>
<h2 id="3-mutability">3. Mutability</h2>
<p>In general, the word "mutate" means change, alternate, modify or transform. And in the JavaScript world it has the same meaning. </p>
<p>A mutable object is an object whose state can be modified after it is created. So, what about <code>forEach</code> and <code>map</code> regarding mutability?</p>
<p>Well, according to the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">MDN documentation</a>:</p>
<p><code>forEach()</code> does not mutate the array on which it is called. (However, <code>callback</code> may do so).</p>
<p><code>map()</code> does not mutate the array on which it is called (although <code>callback</code>, if invoked, may do so).</p>
<p><em>JavaScript is weird</em>.</p>
<p>Here, we see a very similar definition, and we all know that they both receive a <code>callback</code> as an argument. So, which one relies on immutability?</p>
<p>Well, in my opinion, this definition is not clear though. And to know which does not mutate the original array, we first have to check how these two methods work.</p>
<p>The <code>map()</code> method returns an entirely new array with transformed elements and the same amount of data. In the case of <code>forEach()</code>, even if it returns <code>undefined</code>, it will mutate the original array with the <code>callback</code>.</p>
<p>Therefore, we see clearly that <code>map()</code> relies on immutability and <code>forEach()</code> is a mutator method.</p>
<h2 id="4-performance-speed">4. Performance Speed</h2>
<p>Regarding performance speed, they are a little bit different. But, does it matter? Well, it depends on various things like your computer, the amount of data you're dealing with, and so on. </p>
<p>You can check it out on your own with this example below or with <a href="https://jsperf.com/">jsPerf</a> to see which is faster.</p><pre><code class="language-javascript">const myAwesomeArray = [1, 2, 3, 4, 5]
const startForEach = performance.now()
myAwesomeArray.forEach(x =&gt; (x + x) * 10000000000)
const endForEach = performance.now()
console.log(`Speed [forEach]: ${endForEach - startForEach} miliseconds`)
const startMap = performance.now()
myAwesomeArray.map(x =&gt; (x + x) * 10000000000)
const endMap = performance.now()
console.log(`Speed [map]: ${endMap - startMap} miliseconds`)
</code></pre>
<h1 id="final-thoughts">Final Thoughts</h1>
<p>As always, the choice between <code>map()</code> and <code>forEach()</code> will depend on your use case. If you plan to change, alternate, or use the data, you should pick <code>map()</code>, because it returns a new array with the transformed data. </p>
<p>But, if you won't need the returned array, don't use <code>map()</code> - instead use <code>forEach()</code> or even a <code>for</code> loop.</p>
<p>Hopefully, this post clears up the differences between these two methods. If there are more differences, please share them in the comment section, otherwise thanks for reading it.</p>
<p>Read more of my articles on <a href="https://www.ibrahima-ndaw.com">my blog</a></p>
<p>Photo by <a href="https://unsplash.com/@franckinjapan?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Franck V.</a> on <a href="https://unsplash.com/s/photos/different?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></p>
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
