---
card: "/images/default.jpg"
tags: [CSS]
description: "In the HTML and CSS world, it s all about the layout structur"
author: "Milad E. Fahmy"
title: "HTML Center Text – How to CSS Vertical Align a Div"
created: "2021-08-15T22:49:15+02:00"
modified: "2021-08-15T22:49:15+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-css tag-html tag-flexbox ">
<header class="post-full-header">
<h1 class="post-full-title">HTML Center Text – How to CSS Vertical Align a Div</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/08/align-div-vertically-in-css-1.png 300w,
/news/content/images/size/w600/2020/08/align-div-vertically-in-css-1.png 600w,
/news/content/images/size/w1000/2020/08/align-div-vertically-in-css-1.png 1000w,
/news/content/images/size/w2000/2020/08/align-div-vertically-in-css-1.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/08/align-div-vertically-in-css-1.png" alt="HTML Center Text – How to CSS Vertical Align a Div">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>In the HTML and CSS world, it's all about the layout structure and the distribution of elements. We usually use HTML to define the markup and structure, while CSS helps us handle the styling and alignment of elements.</p><p>In this post we are going to learn a little bit about the different ways we can center HTML elements and handle vertical alignment with CSS.</p><p>First we going to learn how to align text with CSS.</p><p>Next, we will cover how to align a div and any other elements.</p><p>And finally we will learn how we can put text and a <code>div</code> together within a container.</p><h2 id="how-to-center-text">How to center text </h2><p>There are many way to center text using CSS.</p><h3 id="using-the-float-property">Using the Float property</h3><p>Float is an easy way to align text.</p><p>To place the text on the right side of the layout, we can simply use <code>right</code> &nbsp;as a value for <code>float</code>.</p><p>To place the text on the left side, we use <code>left</code>, like <code>float:left</code>. Look at the example below:</p><pre><code class="language-html">  .right {
float: right;
}
.left {
float: left;
}
// HTML
&lt;span class="right"&gt;Right&lt;/span&gt;
float: left;
margin-left: 50%;
}
/* HTML*/
&lt;span class="center"&gt;Center&lt;/span&gt;</code></pre><p>You can learn more about the uses of <code>Float</code> <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/float">here</a>.</p><h3 id="using-text-align">Using Text-align</h3><p><code>text-align</code> is a more convenient and more specific way to align text. It allows us to place the text at the <code>center</code> or to the <code>left</code> or <code>right</code> side, as the following example shows:</p><pre><code class="language-css">.right {
text-align: right;
}
.left {
text-align: left;
}
.center {
text-align: center;
}
/* HTML */
&lt;p class="right"&gt;Right&lt;/p&gt;
&lt;p class="center"&gt;Center&lt;/p&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
&lt;meta charset="UTF-8" /&gt;
&lt;meta name="viewport" content="width=device-width, initial-scale=1.0" /&gt;
&lt;meta http-equiv="X-UA-Compatible" content="ie=edge" /&gt;
&lt;title&gt;Flexbox&lt;/title&gt;
&lt;style&gt;
.container {
display: flex;
}
.container div {
width: 33%;
height: 60px;
}
.left {
background: yellow;
}
.right {
background: red;
}
.center {
background: lightblue;
}
&lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;div class="container"&gt;
&lt;div class="left"&gt;Left div&lt;/div&gt;
&lt;div class="center"&gt;centered div&lt;/div&gt;
&lt;div class="right"&gt;right div&lt;/div&gt;
&lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><p>let's break it down</p><ul><li>We always define a <code>div</code> &nbsp;parent using <code>display:flex</code> to apply <code>Flexbox</code>. So we make all the div's children inside the parent <code>div</code> able to be handled using <code>Flexbox</code> properties .</li><li>The &nbsp;<code>flex-direction</code> uses the <code>row</code> direction by default, which means the elements will be placed vertically within the container.</li><li> With the <code>justify-content</code> property we can align a <code>div</code>'s children(s) in different directions like the following example:</li></ul><pre><code class="language-css">.container{
display: flex:
justify-content:center /* flex-start, flex-end, space-between, space-evenly, space-around etc */
}</code></pre><ul><li><code>justify-content:center</code> &nbsp;places the elements in the center of the container.</li><li><code>justify-content:flex-start</code> puts the elements at the beginning of the container on the left.</li><li><code>justify-content:flex-end</code> places elements at the end of the container on the right side.</li><li><code>justify-content:space-around</code> makes the elements fit in the container and puts an equal gap between all the elements.</li><li><code>justify-content:space-evenly</code> distributes the elements within the parent container equally with the same space, and same width.</li></ul><p>The example above applies to all elements' children as a group.</p><p>Imagine if &nbsp;we wanted to align a single <code>div</code> inside the container. We can always use <code><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/align-self">align-self</a></code> to align a single element.</p><pre><code class="language-css">.container div{
align-self:center /* can have: flex-start, or flex-end*/
}</code></pre><p>We can apply the same thing to a text with <code>Flexbox</code> as in the following example:</p><pre><code class="language-css">
&lt;style&gt;
.right{
display: flex;
align-items: flex-end;
flex-direction: column;
}
&lt;/style&gt;
&lt;div class="right"&gt;
&lt;span&gt;right div&lt;/span&gt;
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
