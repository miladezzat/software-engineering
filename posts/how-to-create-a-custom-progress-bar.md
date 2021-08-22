---
card: "/images/default.jpg"
tags: [CSS]
description: "Originally published on www.florin-pop.com"
author: "Milad E. Fahmy"
title: "How to create a Custom Progress Bar"
created: "2021-08-15T22:50:23+02:00"
modified: "2021-08-15T22:50:23+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-css tag-javascript tag-weeklycodingchallenge tag-progress-bar tag-coding-challenge tag-html ">
<header class="post-full-header">
<h1 class="post-full-title">How to create a Custom Progress Bar</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2019/06/how-to-create-a-custom-progress-bar.png 300w,
/news/content/images/size/w600/2019/06/how-to-create-a-custom-progress-bar.png 600w,
/news/content/images/size/w1000/2019/06/how-to-create-a-custom-progress-bar.png 1000w,
/news/content/images/size/w2000/2019/06/how-to-create-a-custom-progress-bar.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2019/06/how-to-create-a-custom-progress-bar.png" alt="How to create a Custom Progress Bar">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<h2 id="progressbar">Progress Bar</h2>
<p>A progress bar is used to show how far a user action is still in process until it's completed. A good example is a download progress bar which shows you how much of the file is downloaded already (or it could also be an upload progress bar if you upload files ?).</p>
<p>In this article we're going to build this kind of a <a href="https://codepen.io/FlorinPop17/full/jjPWbv/">Progress Bar</a>:</p>
<p>For the HTML structure we need two things:</p>
<ol>
<li>a <em>container</em> which will display the total length (100%) of the progress bar - <code>.progress-bar</code></li>
<li>the actual progress element which will basically track the current progress (e.g. 20%) - <code>.progress</code></li>
</ol>
<pre><code class="language-html">&lt;div class="progress-bar"&gt;
&lt;div data-size="20" class="progress"&gt;&lt;/div&gt;
&lt;/div&gt;
</code></pre>
<p>As you can see the <code>.progress</code> div has a <code>data-size</code> attribute. This will be used in <strong>JavaScript</strong> to actually set the <code>width</code> of the progress. You'll see in a moment what I mean, but first let's style these two elements. ?</p>
<h2 id="thecss">The CSS</h2>
<pre><code class="language-css">.progress-bar {
background-color: #fefefe;
border-radius: 3px;
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
margin: 15px;
height: 30px;
width: 500px;
max-width: 100%;
}
.progress {
background: #ad5389;
background: -webkit-linear-gradient(to bottom, #3c1053, #ad5389);
background: linear-gradient(to bottom, #3c1053, #ad5389);
border-radius: 3px;
height: 30px;
width: 0;
transition: width 0.5s ease-in;
}
</code></pre>
<p>Few things to note regarding the above CSS:</p>
<ol>
<li>both elements are rectangles that have the same height (<code>30px</code>) and the same <code>border-radius</code></li>
<li>initially the <code>.progress</code> width it set to <code>0</code> and we'll update this in the <strong>JavaScript</strong> code below</li>
<li>also the <code>.progress</code> has a nice <code>linear-gradient</code> from <a href="https://uigradients.com/">uiGradients</a></li>
<li>the <code>transition</code> added to the <code>.progress</code> is used to create a nice animation when the value of it's <code>data-size</code> attribute is dynamically changed</li>
</ol>
<h2 id="thejavascript">The JavaScript</h2>
<p>For this we'll need to loop over all the <code>.progress</code> elements (in our example is only one, but you can add multiple ones in an app) to get their <code>data-set</code> value and to set it as their width. We'll use percentage (<code>%</code>) in this case.</p>
<pre><code class="language-js">const progress_bars = document.querySelectorAll('.progress');
progress_bars.forEach(bar =&gt; {
const { size } = bar.dataset;
bar.style.width = `${size}%`;
});
</code></pre>
<p>We're using a little bit of <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment">Object Destructuring</a>.</p>
<p><code>const { size } = bar.dataset</code></p>
<p>is the same as:</p>
<p><code>const size = bar.dataset.size</code></p>
<p>but you might know that already ?.</p>
<h2 id="conclusion">Conclusion</h2>
<p>There are multiple things you could do to improve this component. Some of which are:</p>
<ol>
<li>Add multiple color variants via different <em>classes</em></li>
<li>Add the percentage value</li>
<li>Make it animate dynamically by changing the size value.</li>
</ol>
<p>I hope you enjoyed it and make sure you share with me what you're creating!</p>
<p>Happy Coding! ?</p>
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
