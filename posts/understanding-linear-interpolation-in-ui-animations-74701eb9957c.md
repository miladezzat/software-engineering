---
card: "https://cdn-media-1.freecodecamp.org/images/1*DFXftmJxkHo5P_E94ElwMQ.png"
tags: [JavaScript]
description: by Nash Vail
author: "Milad E. Fahmy"
title: "Understanding Linear Interpolation in UI Animation"
created: "2021-08-15T19:52:15+02:00"
modified: "2021-08-15T19:52:15+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-animation tag-html5 tag-tech tag-ui ">
<header class="post-full-header">
<h1 class="post-full-title">Understanding Linear Interpolation in UI Animation</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*DFXftmJxkHo5P_E94ElwMQ.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*DFXftmJxkHo5P_E94ElwMQ.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*DFXftmJxkHo5P_E94ElwMQ.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*DFXftmJxkHo5P_E94ElwMQ.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*DFXftmJxkHo5P_E94ElwMQ.png" alt="Understanding Linear Interpolation in UI Animation">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Nash Vail</p>
<h1 id="understanding-linear-interpolation-in-ui-animation">Understanding Linear Interpolation in UI Animation</h1>
<p>In traditional (hand-drawn) animation, a senior or key artist draws keyframes that define the motion.</p>
<p>An assistant, generally an intern or a junior artist, then draws the necessary inbetweens for the scene. The job of the assistant, also called an inbetweener, is to make transitions between key poses look smooth and natural.</p>
<p>Inbetweens are necessary since animations without them appear choppy. Unfortunately, drawing in-betweens is more or less grunt work. But it’s the twenty-first century, and we have computers that can handle this type of task.</p>
<figcaption>Choppy Animation</figcaption>
</figure>
<p>Remember what teachers told you in grade school about computers being dumb? Computers need to be told the exact sequence of steps to perform an action. Today we’ll look at one such sequence of steps, or algorithm, that helps the computer draw necessary inbetweens to create a smooth animation.</p>
<p>I’ll be using HTML5 canvas and JavaScript to illustrate the algorithm. However, you’ll be able to read and understand the article even if you aren’t familiar with them.</p>
<h3 id="intent">Intent</h3>
<p>Our goal is simple, to animate a ball from point A<code>(startX, startY)</code> to B <code>(endX, endY)</code>.</p>
<p>If this scene were passed to a studio that does traditional animation, the senior artist would draw the following key poses…</p>
<p>…and then pass the drawing board to a junior artist to draw inbetweens like so.</p>
<p>For our situation, there is no animation studio nor do we have junior artists. All we have is a goal, a computer, and the ability to write some code.</p>
<h3 id="approach">Approach</h3>
<p>The HTML code is simple, we only need one line.</p><pre><code>&lt;canvas id=”canvas”&gt;&lt;/canvas&gt;</code></pre>
<p>This part of the JavaScript code (shown below) simply grabs <code>&lt;canva</code>s/&gt; from the Document Object Model (DOM),<code><a href="https://developer.mozilla.org/en/docs/Web/API/CanvasRenderingContext2D" rel="noopener"> gets c</a></code>ontext, and sets the width and height property of the canvas to match the viewport.</p><pre><code>const canvas = document.getElementById(‘canvas’),  context = canvas.getContext(‘2d’),  width = canvas.width = window.innerWidth,  height = canvas.height = window.innerHeight;</code></pre>
<p>The function below draws a green solid circle of radius <code>radius</code> at <code>x</code> and <code>y</code> coordinates.</p><pre><code>function drawBall(x, y, radius) {  context.beginPath();   context.fillStyle = ‘#66DA79’;  context.arc(x, y, radius, 0, 2 * Math.PI, false);  context.fill();}</code></pre>
<p>All of the above code is boilerplate to set up our animation, here’s the juicy part.</p><pre><code>// Point Alet startX = 50, startY = 50;</code></pre><pre><code>// Point Blet endX = 420, endY = 380;</code></pre><pre><code>let x = startX, y = startY;</code></pre><pre><code>update();function update() {  context.clearRect(0, 0, width, height);  drawBall(x, y, 30);  requestAnimationFrame(update);}</code></pre>
<p>First of all, notice the <code>update</code> function being called right above its declaration. Second of all, notice <code>requestAnimationFrame(update)</code> which calls <code>update</code> <em>repeatedly</em>.</p>
<figcaption>A Flipbook animation</figcaption>
</figure>
<p>Flipbook animation is a good analogy for the kind of program we’re writing. Just like repeatedly flipping through a flipbook creates the illusion of motion, repeatedly calling the <code>update</code> function creates the illusion of motion for our green ball.</p>
<p>One thing to note about the code above is that “update” is just a name. The function could have been named anything else. Some programmers like the names <code>nextFrame</code>, <code>loop</code>, <code>draw</code>, or <code>flip</code> because the function is repeatedly called. The important part is what the function does.</p>
<p>On each subsequent call of <code>update</code>, we expect the function to draw a slightly different image on the canvas than the previous one.</p>
<p>Our current implementation of <code>update</code> draws the ball at the same exact position on each call <code>drawBall(x, y, 30)</code>. There is no animation, but let’s change that. Below is a <a href="http://codepen.io/nashvail/pen/XRNprQ" rel="noopener">pen</a> that contains the code we have written so far, you can open it and follow along.</p>
<p>On each iteration of <code>update</code> let’s go ahead and increment the value of <code>x</code> and <code>y</code> and see the kind of animation it creates.</p><pre><code>function update() {  context.clearRect(0, 0, width, height);  drawBall(x, y, 30);  x++; y++;  requestAnimationFrame(update);}</code></pre>
<p>Each iteration moves the ball forward in both the x and y directions, and repeated calls of <code>update</code> results in the animation as shown.</p>
<p>Heres’ the deal though, our intent was to move the ball from a start position to an <em>end position</em>. But we’re doing absolutely nothing about stopping the ball at an end position. Let’s fix that.</p>
<p>One obvious solution is to only increment the coordinates when they are smaller than <code>endX</code> and <code>endY</code> values. This way, once the ball crosses <code>endX, endY</code> its coordinates will stop updating and the ball will stop.</p><pre><code>function update() {  context.clearRect(0, 0, width, height);  drawBall(x, y, 30);   if(x &lt;= endX &amp;&amp; y &lt;= endY) {    x++;    y++;  }   requestAnimationFrame(update);}</code></pre>
<p>There’s an error in this approach though. Do you see it?</p>
<p>The problem here is that you cannot make the ball reach <em>any</em> end coordinate you want just by incrementing <code>x</code> and <code>y</code> values by <code>1</code>. For example, consider end coordinates <code>(500, 500)</code>, of course if you start at <code>(0, 0)</code> and add <code>1</code> to <code>x</code> and <code>y</code>, they will eventually get to<code>(500, 500)</code>. But what if I chose <code>(432, 373)</code> as end coordinates?</p>
<p>Using the above approach, you can only reach points lying in a straight line 45 degrees from the horizontal axis.</p>
<p>Now you can use trigonometry and fancy math to calculate precise amounts that <code>x</code> and <code>y</code> should be incremented by to reach any coordinate you want. But you don’t need to do that when you have linear interpolation.</p>
<h3 id="approach-with-linear-interpolation">Approach with linear interpolation</h3>
<p>Here’s what linear interpolation function a.k.a <code>lerp</code> looks like.</p><pre><code>function lerp(min, max, fraction) {  return (max — min) * fraction + min;}</code></pre>
<p>To understand what linear interpolation does, consider a slider with a <code>min</code> value on the left end and a <code>max</code> value on the right end.</p>
<figcaption>min = 0, max = 100</figcaption>
</figure>
<p>The next thing we need to choose is <code>fraction</code>. <code>lerp</code> takes <code>fraction</code> and converts that to a value between <code>min</code> and <code>max</code>.</p>
<figcaption>min = 0, max = 100, fraction = 0.5</figcaption>
</figure>
<p>When I put <code>0.5</code> in the <code>lerp</code> formula — no surprises — it translates to 50. This is exactly the halfway point between <code>0</code> (min) and <code>100</code> (max).</p>
<p>Similarly, if we choose another value for <code>fraction</code> say <code>0.85</code>…</p>
<figcaption>min = 0, max = 100, fraction = 85</figcaption>
</figure>
<p>And if we let <code>fraction = 0</code>, <code>lerp</code> will output <code>0</code> (min) and on <code>fraction = 1</code>, <code>lerp</code> will produce <code>100</code> (max).</p>
<p>I chose 0 and 100 as <code>min</code> and <code>max</code> to keep this example simple, but <code>lerp</code> will work for any arbitrary choice of <code>min</code> and <code>max</code>.</p>
<figcaption>min = 18, max = 37, fraction = 0.73</figcaption>
</figure>
<p>For values of <code>fraction</code> between <code>0</code> and <code>1</code>, <code>lerp</code> allows you to <em>interpolate</em> between <code>min</code> and <code>max</code>. Or in other words, traverse between <code>min</code> and <code>max</code> values, where choosing <code>0</code> for <code>fraction</code> puts you at <code>min</code>, choosing <code>1</code> puts you at <code>max</code> and for any other value between <code>0</code> and <code>1</code>, puts you anywhere between <code>min</code> and <code>max</code>. You can also see <code>min</code> and <code>max</code> as key poses, like in traditional animation, and <code>lerp</code> outputs as inbetweens ;-).</p>
<p>Alright, but what if someone gives a value outside the bounds of <code>0</code> and <code>1</code> as <code>fraction</code> to <code>lerp</code>? You see the formula for <code>lerp</code> is extremely straightforward with most basic of mathematical operations. There’s no trick or bad values here, just imagine extending the slider in both directions. Whatever value for <code>fraction</code> is supplied, <code>lerp</code> <em>will</em> produce a logical result. We shouldn’t pay much thought to bad values here though, what we should think about is how all of this maps to animating the ball.</p>
<p>If you’re following along go ahead and change the <code>update</code> function to match the following code. Also don’t forget to add in the <code>lerp</code> function we defined at the beginning of this section.</p><pre><code>function update() {  context.clearRect(0, 0, width, height);  drawBall(x, y, 30);  x = lerp(x, endX, 0.1);  y = lerp(y, endY, 0.1);  requestAnimationFrame(update);}</code></pre>
<p>Here’s a <a href="http://codepen.io/nashvail/pen/wdjpVZ" rel="noopener">pen</a> of what our program looks like now. Try clicking around :)</p>
<p>Smooth right? Here’s how <code>lerp</code> helps to improve the animation.</p>
<p>In the code, notice the variables <code>x</code> and <code>y</code> — which are initially set to <code>startX</code> and <code>startY</code>— mark the current position of the ball in any frame. Also my choice of <code>0.1</code> as <code>fraction</code> is arbitrary, you can choose any fractional value you want. Keep in mind that your choice of <code>fraction</code> affects the speed of the animation.</p>
<p>In every frame <code>x</code> and <code>endX</code> are taken as <code>min</code> and <code>max</code> and interpolated with <code>0.1</code> as <code>fraction</code> to obtain a new value for<code>x</code>. Similarly <code>y</code> and <code>endY</code> are used as <code>min</code> and <code>max</code> to obtain a new value for <code>y</code> using <code>0.1</code> as fraction.</p>
<p>The ball is then drawn at the newly calculated<code>(x, y)</code> coordinate.</p>
<p>These steps are repeated until <code>x</code> becomes <code>endX</code> and <code>y</code> becomes <code>endY</code> in which case <code>min = max</code>. When <code>min</code> and <code>max</code> become equal <code>lerp</code> throws the exact same value(min/max) for any further frames thus stopping the animation.</p>
<p>And that is how you use linear interpolation to smoothly animate a ball.</p>
<p>This short article covers a lot. We started by defining terms like key poses and inbetweens. Then we tried a trivial approach for drawing inbetweens and noticed its limitations. Finally, with linear interpolation, we were able to achieve our intent.</p>
<p>I hope all the math made sense to you. Feel free to play with linear interpolation even more. This article was inspired by <a href="undefined" rel="noopener">Rachel Smith</a>’s <a href="https://codepen.io/rachsmith/post/animation-tip-lerp" rel="noopener">post on CodePen</a>. Rachel’s post has many more examples, be sure to check it out.</p>
<p>Looking for more? I publish regularly on my <a href="https://nashvail.me" rel="noopener">blog at nashvail.me.</a> See you there, have a good one!</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
