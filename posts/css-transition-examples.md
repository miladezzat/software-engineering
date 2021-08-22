---
card: "/images/default.jpg"
tags: [CSS]
description: "If you are working with web technologies like CSS, HTML, and "
author: "Milad E. Fahmy"
title: "CSS Transition Examples – How to Use Hover Animation, Change Opacity, and More"
created: "2021-08-16T10:04:31+02:00"
modified: "2021-08-16T10:04:31+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-css tag-animation tag-javascript tag-web-development ">
<header class="post-full-header">
<h1 class="post-full-title">CSS Transition Examples – How to Use Hover Animation, Change Opacity, and More</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/10/Untitled--2--1.png 300w,
/news/content/images/size/w600/2020/10/Untitled--2--1.png 600w,
/news/content/images/size/w1000/2020/10/Untitled--2--1.png 1000w,
/news/content/images/size/w2000/2020/10/Untitled--2--1.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/10/Untitled--2--1.png" alt="CSS Transition Examples – How to Use Hover Animation, Change Opacity, and More">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
&lt;html lang="en"&gt;
&lt;head&gt;
&lt;meta charset="UTF-8" /&gt;
&lt;meta name="viewport" content="width=device-width, initial-scale=1.0" /&gt;
&lt;meta http-equiv="X-UA-Compatible" content="ie=edge" /&gt;
&lt;title&gt;Static Template&lt;/title&gt;
&lt;/head&gt;
&lt;style&gt;
.elem {
background: blueviolet;
width: 300px;
height: 150px;
}
.elem:hover {
opacity: 0.5;
}
&lt;/style&gt;
&lt;body&gt;
&lt;div class="elem"&gt;&lt;/div&gt;
&lt;/body&gt;
transform: scale(1.1);
background: blueviolet;
width: 300px;
height: 150px;
margin: 20px auto;
transition: 500ms linear;
transition: &lt;property&gt; &lt;duration&gt; &lt;timing-function&gt; &lt;delay&gt;;
}</code></pre><p>We can add more options like below (examples from the <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions">MDN</a>):</p><pre><code class="language-css">#delay {
transition-property: font-size;
transition-duration: 4s;
transition-delay: 2s;
}</code></pre><p>So what's this code doing?</p><ul><li>transition-property: the property you want to animate. It can be any CSS element like <code>background</code>, <code>height</code>, <code>translateY</code>, <code>translateX</code>, and so on. </li><li>transition-duration: the duration of the transition</li><li>transition-delay: the delay before the transition starts</li></ul><p>You can learn more about the different uses of <code>transition</code> in CSS <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions">here</a>.</p><h2 id="how-to-make-transitions-more-interactive-using-the-animation-property-and-keyframes">How to make transitions more interactive using the animation property and keyframes</h2><p>We can do more with CSS transitions to make this animation more creative and interactive.</p><h3 id="how-to-move-an-element-with-keyframes">How to move an element with Keyframes</h3><p>Let's look at an example where the element moves from point A to point B. We will be using translateX and translateY.</p><pre><code class="language-html">&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
&lt;meta charset="UTF-8" /&gt;
&lt;meta name="viewport" content="width=device-width, initial-scale=1.0" /&gt;
&lt;meta http-equiv="X-UA-Compatible" content="ie=edge" /&gt;
&lt;title&gt;Static Template&lt;/title&gt;
&lt;/head&gt;
&lt;style&gt;
.elem {
background: orange;
width: 300px;
height: 150px;
animation: moveToRight 2s ease-in-out;
animation-delay: 1000ms;
}
@keyframes moveToRight {
0% {
transform: translateX(0px);
}
100% {
transform: translateX(300px);
}
}
&lt;/style&gt;
&lt;body&gt;
&lt;div class="elem"&gt;&lt;/div&gt;
&lt;/body&gt;
0% {
transform: translateX(0px);
}
100% {
transform: translateX(300px);
}
}</code></pre><p><code>keyframes</code> will execute the animation in multiples steps. The example above uses a percentage to represent the range or the order of the transitions. We could also use the <code>from</code> and <code>to</code> methods. like below"</p><pre><code class="language-css"> @keyframes moveToRight {
from {
transform: translateX(0px);
}
to {
transform: translateX(300px);
}
}</code></pre><p><code>from</code> represents the starting point or the first step of the animation.</p><p><code>to</code> is the end point or the last step of the animation to be executed.</p><p>You may want to use a percentage in some cases. For example, say you want to add more than two transitions that will be executed in a sequence, like the following:</p><pre><code class="language-css"> @keyframes moveToRight {
0% {
transform: translateX(0px);
}
50% {
transform: translateX(150px);
}
100% {
transform: translateX(300px);
}
&lt;html lang="en"&gt;
&lt;head&gt;
&lt;meta charset="UTF-8" /&gt;
&lt;meta name="viewport" content="width=device-width, initial-scale=1.0" /&gt;
&lt;meta http-equiv="X-UA-Compatible" content="ie=edge" /&gt;
&lt;title&gt;Static Template&lt;/title&gt;
&lt;/head&gt;
&lt;style&gt;
.elem {
background: orange;
width: 250px;
height: 250px;
border-radius: 10px;
animation: moveToLeft 5s linear infinite;
animation-delay: 1000ms;
}
@keyframes moveToLeft {
0% {
transform: translateX(0px);
background: linear-gradient(
to right,
#ff8177 0%,
#ff867a 0%,
#ff8c7f 21%,
#f99185 52%,
#cf556c 78%,
#b12a5b 100%
);
}
25% {
transform: translateX(400px);
background: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
}
50% {
transform: translateY(200px) translateX(400px);
background: linear-gradient(to top, #30cfd0 0%, #330867 100%);
}
75% {
transform: translateX(0px) translateY(200px);
background: linear-gradient(120deg, #f6d365 0%, #fda085 100%);
}
100% {
transform: translateY(0px);
}
}
&lt;/style&gt;
&lt;body&gt;
&lt;div class="elem"&gt;&lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><p>Let's break it down. First we add <code>infinite</code> to make the animation run forever.</p><pre><code class="language-css">animation: moveToLeft 5s linear infinite;</code></pre><p>And then we split the animation into four steps. At each step, we'll run a different transition and all the animation will run in a sequence.</p><ul><li>First step: set the element horizontally to <code>translateX(0px)</code>, and change the background to the gradient. </li></ul><pre><code class="language-css"> 0% {
transform: translateX(0px);
background: linear-gradient(
to right,
#ff8177 0%,
#ff867a 0%,
#ff8c7f 21%,
#f99185 52%,
#cf556c 78%,
#b12a5b 100%
);
}</code></pre><ul><li>The second animation will move the element from the left to the right and change the background color.</li></ul><pre><code class="language-css"> 25% {
transform: translateX(400px);
background: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
}</code></pre><ul><li>The third animation will move the element down using <code>translateY</code> and change the background color again.</li><li>In the fourth step, the element will move back to the left and change the background color.</li><li>In the fifth animation the element should go back to its original place.</li></ul><h2 id="wrapping-up">Wrapping up</h2><p>In this article, we covered various things you can do with CSS transitions. You can use CSS transitions in many ways in your applications to create a better user experience.</p><p>After learning the basic of CSS animations you may want to go beyond and make more complex things that require user interaction. For this you can use JavaScript or any third party animation libraries out there.</p><blockquote>Hi, my name is Said Hayani I created <a href="https://subscribi.io/">subscribi.io</a> to help creators, bloggers and influencers to grow their audience through newsletter.</blockquote>
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
