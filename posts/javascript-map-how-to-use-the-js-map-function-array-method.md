---
card: "/images/default.jpg"
tags: [JavaScript]
description: "Sometimes you may need to take an array and apply some proced"
author: "Milad E. Fahmy"
title: "JavaScript Map – How to Use the JS .map() Function (Array Method)"
created: "2021-08-16T10:03:54+02:00"
modified: "2021-08-16T10:03:54+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-arrays tag-web-development ">
<header class="post-full-header">
<h1 class="post-full-title">JavaScript Map – How to Use the JS .map() Function (Array Method)</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2021/03/javascript-map-function.png 300w,
/news/content/images/size/w600/2021/03/javascript-map-function.png 600w,
/news/content/images/size/w1000/2021/03/javascript-map-function.png 1000w,
/news/content/images/size/w2000/2021/03/javascript-map-function.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2021/03/javascript-map-function.png" alt="JavaScript Map – How to Use the JS .map() Function (Array Method)">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
for (let i = 0; i &lt; arr.length; i++){
arr[i] = arr[i] * 3;
}
let modifiedArr = arr.map(function(element){
return element *3;
});
{firstName : "Susan", lastName: "Steward"},
{firstName : "Daniel", lastName: "Longbottom"},
{firstName : "Jacob", lastName: "Black"}
];
{firstName : "Susan", lastName: "Steward"},
{firstName : "Daniel", lastName: "Longbottom"},
{firstName : "Jacob", lastName: "Black"}
];
let userFullnames = users.map(function(element){
return `${element.firstName} ${element.lastName}`;
})
console.log(userFullnames);
arr.map(function(element, index, array){
console.log(this) // 80
arr.map(function(element, index, array){
console.log(element);
console.log(index);
console.log(array);
return element;
}, 80);</code></pre><figcaption>Logging the arguments to see the values</figcaption></figure><p>And that's all you need to know about the <code>Array.map()</code> method. Most often, you will only use the <code>element</code> argument inside the callback function while ignoring the rest. That's what I usually do in my daily projects :)</p><h2 id="thanks-for-reading-this-tutorial"><strong><strong><strong>Thanks for reading this tutorial</strong></strong></strong></h2><p>You may also be interested in other JavaScript tutorials that I've written, including <a href="https://sebhastian.com/javascript-sum-array-objects/">how to sum an array of objects</a> and <a href="https://sebhastian.com/palindrome-javascript/">methods to find a palindrome string</a>. They are some of the most commonly asked JavaScript problems to solve.</p><p>I also have a <a href="https://sebhastian.com/newsletter/">free newsletter</a> about web development tutorials (mostly JavaScript-related).</p>
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
