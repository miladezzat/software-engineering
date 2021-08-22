---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c9cae740569d1a4ca3395.jpg"
tags: [Jquery]
description: "This tutorial will walk you through building an image slider "
author: "Milad E. Fahmy"
title: "How to Build an Image Slider with jQuery"
created: "2021-08-15T22:49:40+02:00"
modified: "2021-08-15T22:49:40+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-jquery tag-image tag-html tag-javascript tag-toothbrush ">
<header class="post-full-header">
<h1 class="post-full-title">How to Build an Image Slider with jQuery</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c9cae740569d1a4ca3395.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9cae740569d1a4ca3395.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9cae740569d1a4ca3395.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9cae740569d1a4ca3395.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c9cae740569d1a4ca3395.jpg" alt="How to Build an Image Slider with jQuery">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
&lt;!-- The wrapper for our slider --&gt;
&lt;div class="slider"&gt;
&lt;ul class="slides"&gt;&lt;!-- Each image will be inside this unordered list --&gt;&lt;/ul&gt;
&lt;/div&gt;
&lt;div class="buttons"&gt;&lt;!-- Pause and play buttons will go in here --&gt;&lt;/div&gt;
&lt;/div&gt;</code></pre><p>Inside our <code>ul</code> with the class of <code>slides</code> we will have the following:</p><pre><code class="language-text">&lt;li class="slide"&gt;&lt;img src="#" /&gt;&lt;/li&gt;
&lt;li class="slide"&gt;&lt;img src="#" /&gt;&lt;/li&gt;
&lt;li class="slide"&gt;&lt;img src="#" /&gt;&lt;/li&gt;
&lt;li class="slide"&gt;&lt;img src="#" /&gt;&lt;/li&gt;
&lt;li class="slide"&gt;&lt;img src="#" /&gt;&lt;/li&gt;</code></pre><p>Inside our <code>.buttons</code> class you should have the following:</p><pre><code class="language-text">&lt;button type="button" class="btn btn-default pause"&gt;
&lt;span class="glyphicon glyphicon-pause"&gt;&lt;/span&gt;
&lt;/button&gt;
&lt;button type="button" class="btn btn-default play"&gt;
&lt;span class="glyphicon glyphicon-play"&gt;&lt;/span&gt;
&lt;/button&gt;</code></pre><p>Here is an example of what your <code>html</code> should look like:</p><p>Note: You should replace the image <code>src</code> attribute with your own content.</p><pre><code class="language-text">&lt;div class="container"&gt;
&lt;div class="slider"&gt;
&lt;ul class="slides"&gt;
&lt;li class="slide"&gt;&lt;img src="https://unsplash.it/1280/720/?image=120" /&gt;&lt;/li&gt;
&lt;li class="slide"&gt;&lt;img src="https://unsplash.it/1280/720/?image=70" /&gt;&lt;/li&gt;
&lt;li class="slide"&gt;&lt;img src="https://unsplash.it/1280/720/?image=50" /&gt;&lt;/li&gt;
&lt;li class="slide"&gt;&lt;img src="https://unsplash.it/1280/720/?image=170" /&gt;&lt;/li&gt;
&lt;li class="slide"&gt;&lt;img src="https://unsplash.it/1280/720/?image=190" /&gt;&lt;/li&gt;
&lt;/ul&gt;
&lt;/div&gt;
&lt;div class="buttons"&gt;
&lt;button type="button" class="btn btn-default pause"&gt;
&lt;span class="glyphicon glyphicon-pause"&gt;&lt;/span&gt;
&lt;/button&gt;
&lt;button type="button" class="btn btn-default play"&gt;
&lt;span class="glyphicon glyphicon-play"&gt;&lt;/span&gt;
&lt;/button&gt;
&lt;/div&gt;
$width: 720px;
.slider {
width: $width;
height: 400px;
overflow: hidden;
margin: 0 auto;
text-align: center;
.slides {
display: block;
width: 6000px;
height: 400px;
margin: 0;
padding: 0;
}
.slide {
float: left;
list-style-type: none;
width: $width;
height: 400px;
img {
width: 100%;
height: 100%;
}
}
}
.buttons {
margin: 0;
width: $width;
position: relative;
top: -40px;
margin: 0 auto;
.play {
display: none;
}
.btn {
display: flex;
margin: 0 auto;
text-align: center;
}
}</code></pre><h2 id="js"><strong>JS</strong></h2><h4 id="variables"><strong>Variables</strong></h4><p><em>In the following code snippet, we define variables used later in our code.</em></p><pre><code class="language-text">var animationSpeed = 1000; // How quickly the next slide animates.
var pause = 3000; // The pause between each slide.</code></pre><p>We will use a blank variable where we will call the <code>setInterval</code> method:</p><pre><code class="language-text">var interval;</code></pre><h4 id="animation-we-will-wrap-our-slider-animations-inside-a-function-"><strong>Animation We will wrap our slider animations inside a function:</strong></h4><pre><code class="language-text">function startSlider() {}</code></pre><p>We are using the <code>setInterval()</code> native JavaScript method to automate the contents of the function on a time based trigger.</p><pre><code class="language-text">interval = setInterval(function() {}, pause);</code></pre><p>We use the <code>pause</code> variable to see how many milliseconds to wait before calling the function again. Read more on the native <code>setInterval</code> method here: <a href="https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/setInterval">https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/setInterval</a>. Inside our function we will use jQuery to fade between slides at the speed of the animationSpeed variable:</p><pre><code class="language-text">$('.slides &gt; li:first')
.fadeOut(animationSpeed)
.next()
.fadeIn(animationSpeed)
.end()
.appendTo('.slides');</code></pre><p>We are targeting the first slide using <code>$('.slides &gt; li:first')</code>. - <code>.fadeOut(animationSpeed)</code> will fade the first slide out and then using <code>.next()</code>, we move to the next slide. - Once we have moved to the next slide, we will fade it in: <code>.fadeIn(animationSpeed)</code>. - This sequence will continue until the last slide (<code>.end()</code>), then we stop the animation. We will now call the <code>startSlider</code> function to start the animation:</p><p>startSlider();</p><h4 id="play-and-pause-this-feature-is-optional-but-quite-easy-to-implement-we-will-hide-the-play-button-so-we-don-t-see-both-the-play-and-pause-buttons-"><strong>Play and Pause <em>This feature is optional, but quite easy to implement.</em> We will hide the play button, so we don’t see both the play and pause buttons:</strong></h4><pre><code class="language-text">$('.play').hide(); // Hiding the play button.</code></pre><p>We will now create our pause button (automatically shown on page load):</p><pre><code class="language-text">$('.pause').click(function() {
clearInterval(interval);
$(this).hide();
$('.play').show();
});</code></pre><p>We will call our function every time the pause button is clicked using jQuery. - We will remove the interval using the <code>clearInterval</code> method and using our <code>interval</code> variable as the parameter, indicating which interval to stop. - Because our slider is paused, we will hide the pause button using <code>$(this).hide();</code>. Note: we are using <code>this</code>, which will refer to what our parent is calling i.e. <code>.pause</code>. - We will then show our play button so the user can resume the animation: <code>$('.play').show();</code>. The following code sets up our play button (automatically hidden on page load):</p><p>$(‘.play’).click(function() { startSlider(); $(this).hide(); $(‘.pause’).show(); });</p><p>We will call our function every time the play button is clicked using jQuery.</p><ul><li>We will start or restart the interval using the <code>startSlider</code> function.</li><li>Because our slider is currently playing, we will hide the play button using <code>$(this).hide();</code>. Note: we are using <code>this</code>, which will refer to what our parent is calling i.e. <code>.play</code>.</li><li>We will then show our pause button so the user can stop the animation at will: <code>$('.pause').show();</code>.</li></ul><h2 id="references"><strong>References</strong></h2><ul><li>Checkout the source code and example on <a href="https://codepen.io/atjonathan/pen/BKMxxq" rel="nofollow">CodePen</a> for this tutorial.</li></ul>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
