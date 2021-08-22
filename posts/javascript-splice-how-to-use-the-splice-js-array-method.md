---
card: "/images/default.jpg"
tags: [JavaScript]
description: "The splice() method is a built-in method for JavaScript Array"
author: "Milad E. Fahmy"
title: "JavaScript Splice – How to Use the .splice() JS Array Method"
created: "2021-08-16T10:03:50+02:00"
modified: "2021-08-16T10:03:50+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-arrays tag-web-development ">
<header class="post-full-header">
<h1 class="post-full-title">JavaScript Splice – How to Use the .splice() JS Array Method</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2021/04/JavaScript-splice-method.png 300w,
/news/content/images/size/w600/2021/04/JavaScript-splice-method.png 600w,
/news/content/images/size/w1000/2021/04/JavaScript-splice-method.png 1000w,
/news/content/images/size/w2000/2021/04/JavaScript-splice-method.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2021/04/JavaScript-splice-method.png" alt="JavaScript Splice – How to Use the .splice() JS Array Method">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
let days = months.splice(2);
let days = months.splice(2, 1);
console.log(days); // ["Monday"]
let days = months.splice(2, 2, "March", "April");
console.log(days); // ["Monday", "Tuesday"]
console.log(months); // ["January", "February", "March", "April"]
months.splice(2, 0, "March");
console.log(months);
// ["January", "February", "March", "Monday", "Tuesday"]</code></pre><figcaption>The splice() method called without returning any elements</figcaption></figure><h2 id="conclusion">Conclusion</h2><p>You've just learned how the <code>splice()</code> method works. Great job! </p><p>The <code>splice()</code> method is mostly used when you need to delete or add new elements to an array. In some situations, you can also use it to separate an array which has mixed content as in the case above.</p><p>When you remove <code>0</code> elements from the array, then the method will simply return an empty array. You're always free to either assign the returned array to a variable or ignore it.</p><h2 id="thanks-for-reading-this-tutorial"><strong>Thanks for reading this tutorial</strong></h2><p>If you want to learn more about JavaScript, you may want to check out my site at sebhastian.com, where I have published <a href="https://sebhastian.com/javascript-tutorials/">over 100 tutorials about programming with JavaScript</a>.</p><p>The tutorials include String manipulation, Date manipulation, Array and Object methods, JavaScript algorithm solutions, and many more. </p><p>Be sure to <a href="https://sebhastian.com/">check it out</a> 😉</p>
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
