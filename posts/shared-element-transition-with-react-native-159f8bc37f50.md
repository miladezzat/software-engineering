---
card: "https://cdn-media-1.freecodecamp.org/images/1*XjqvwLtPW_Gwu8dtlubs7Q.png"
tags: [React Native]
description: by Narendra N Shetty
author: "Milad E. Fahmy"
title: "Shared Element Transition with React Native"
created: "2021-08-15T19:51:10+02:00"
modified: "2021-08-15T19:51:10+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-react-native tag-javascript tag-design tag-mobile-app-development tag-ux ">
<header class="post-full-header">
<h1 class="post-full-title">Shared Element Transition with React Native</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*XjqvwLtPW_Gwu8dtlubs7Q.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*XjqvwLtPW_Gwu8dtlubs7Q.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*XjqvwLtPW_Gwu8dtlubs7Q.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*XjqvwLtPW_Gwu8dtlubs7Q.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*XjqvwLtPW_Gwu8dtlubs7Q.png" alt="Shared Element Transition with React Native">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Narendra N Shetty</p>
<h1 id="shared-element-transition-with-react-native">Shared Element Transition with React Native</h1>
<p>In this post I will be talking about how to achieve Shared Element Transition with React Native for both iOS and Android.</p>
<p>I have posted the code on <a href="https://github.com/narendrashetty/photo-gallery-RN" rel="noopener">GitHub</a> and you can take a look if you want to jump right into it.</p>
<h3 id="intent">Intent</h3>
<p>Lets take a look at what we’re going to build. Below is a photo grid example where we’ll add a shared element transition. This way, we can transition smoothly between a grid and the details page for a photo we select.</p>
<p>This is a much smoother and a continuous experience.</p>
<h3 id="approach">Approach</h3>
<p>Before we build this, let me tell you how the system works under the hood. Since React Native doesn’t support true shared elements, when we say we are doing a shared element transition between two screens, we aren’t technically sharing any elements. Instead, each screen has its own individual element.</p>
<p>What I am doing is passing the information about the shared element — such as its position and size — between these two elements.</p>
<p>When the details screen launches, its background is set to transparent, and it hides all of its elements. It then alters the attributes of the shared element to the one passed, then makes it visible. It then animates itself to its natural position. As the transition progresses, the window background and the rest of non-shared elements slowly fade in until they’re totally opaque.</p>
<p>So while the element is not technically shared, this clever trick of smoke and mirror makes it appear that they are.</p>
<p>So now that we understand how this process works, lets go step-by-step to understand how the mock element has been shared, and how we can control animations.</p>
<h4 id="step-1-entry-and-exit-animation">Step 1: Entry and Exit Animation</h4>
<p>I have two screens here: Grid and Details. From the Grid screen, we can launch the Detail screen by clicking on one of the images in the grid. Then we can return to the grid screen by hitting the back button.</p>
<p>When we go from Grid screen to Detail screen we have an opportunity to run two sets of transition animations — the Exit transition for the Grid screen, and the and Entry transition for Detail screen.</p>
<p>Lets see how we implement this.</p>
<p>Without any transition, this is how the app looks. Clicking on the individual image takes you to a detail screen.</p>
<p>Let’s add an exit transition to the first grid screen. Here we use a simple fade out transition using the <code>Animated</code> api, which interpolates the opacity attribute of the grid screen container from 1 to 0.</p>
<p>Now that we have done that, here’s how it looks:</p>
<p>Not too bad. We see that the grid is faded out as we move onto the details screen.</p>
<p>Let’s now add another transition to the content of the detail screen as it comes in. Let’s slide the text into the place from the bottom.</p>
<p>This is done by assigning an interpolated <code>Animated</code> value to the <code>translateY</code> property of the text container.</p>
<p>And here’s how it looks:</p>
<p>Well the title and the description slides in very nicely, but the image appears abruptly. This is because our transition doesn’t target image specifically. We’ll fix this shortly.</p>
<h4 id="step-2-transition-layer-for-the-shared-element">Step 2: Transition layer for the shared element</h4>
<p>We now add a transition layer which appears during the transition, and contains only the shared element.</p>
<p>This layer is triggered when the image in the grid is clicked. It receives information about the shared element, such as its position and size from both the Grid screen and Details screen.</p>
<h4 id="step-3-animation-in-the-transition-layer">Step 3: Animation in the transition layer</h4>
<p>We have the information in the transition layer about the source and destination position of the shared element. We just need to animate them.</p>
<p>Let’s first set the element based on the source position and size, then animate it to the destination location. This can be done in two ways. Let’s take a look at both of them.</p>
<h4 id="by-interpolating-on-the-width-height-top-and-left">By interpolating on the width, height, top and left</h4>
<p>This is a straightforward approach. If we want an element to change from one size to another, and from one position to another, we modify the width, height, top, and left style properties of the element.</p>
<p>And here’s how it looks:</p>
<h3 id="performance-analysis"><strong>Performance Analysis</strong></h3>
<p>When using Animated, we declare a graph of nodes that represent the animations that we want to perform, and then use a driver to update an Animated value using a predefined curve.</p>
<p>Here’s a breakdown of the steps for an animation and where it happens:</p>
<figcaption><a href="https://facebook.github.io/react-native/blog/2017/02/14/using-native-driver-for-animated.html" rel="noopener" target="_blank" title="">https://facebook.github.io/react-native/blog/2017/02/14/using-native-driver-for-animated.html</a></figcaption>
</figure>
<ul>
<li>JavaScript: The animation driver uses <code>requestAnimationFrame</code> to execute on every frame and update the value it drives using the new value it calculates based on the animation curve.</li>
<li>JavaScript: Intermediate values are calculated and passed to a props node that is attached to a <code>View</code>.</li>
<li>JavaScript: The <code>View</code> is updated using <code>setNativeProps</code>.</li>
<li>JavaScript to Native bridge.</li>
<li>Native: The <code>UIView</code> or <code>android.View</code> is updated.</li>
</ul>
<p>As you can see, most of the work happens on the JavaScript thread. If it is blocked, the animation will skip frames. It also needs to go through the JavaScript to Native bridge on every frame to update native views.</p>
<p>This problem can be solved by using <code>useNativeDriver</code>. This moves all of these steps to native.</p>
<p>Since Animated produces a graph of animated nodes, it can be serialized and sent to native only once when the animation starts. This eliminates the need to callback into the JavaScript thread. The native code can take care of updating the views directly on the UI thread on every frame.</p>
<p>The main limitation is that we can only animate non-layout properties. Things like <code>transform</code> and <code>opacity</code> will work, but flexbox and position properties like the one used above won’t.</p>
<h4 id="interpolating-on-transform-and-using-usenativedriver">Interpolating on transform and using useNativeDriver</h4>
<p>Let us now animate using transform. This will require a some math to calculate the scale, x and y position.</p>
<p>With this implementation, if we’re scaling from a smaller image to a larger one, the image will pixelate. So we will render the larger image, then scale it down to its start size, then animate it up to the natural size.</p>
<p>We can get the start scale value with a line of JavaScript like this:</p><pre><code>openingScale = sourceDimension.width / destinationDimension.width;</code></pre>
<p>You see that the scaled image and original image don’t look the same that is because the aspect ratio of source image and destination image are different, so to solve it we will render the image with source aspect ratio based on destination dimension.</p><pre><code>const sourceAspectRatio = source.width / source.height;const destAspectRatio = destination.width / destination.height;</code></pre><pre><code>if (aspectRatio - destAspectRatio &gt; 0) {  // Landscape image  const newWidth = aspectRatio * destination.height;  openingScale = source.width / newWidth;} else {  // Portrait image  const newHeight = destination.width / aspectRatio;  openingScale = source.height / newHeight;}</code></pre>
<p>Now that the scale is correct, we need to get the new position based on the destination image. This can be calculated by the destination position minus half of the difference between the old dimension and new dimension. Which would equate to:</p><pre><code>if (aspectRatio - destAspectRatio &gt; 0) {  // Landscape image  destination.pageX -= (newWidth - destinationWidth) / 2;} else {  // Portrait image  destination.pageY -= (newHeight - destinationHeight) / 2;}</code></pre>
<p>That’s perfect! We now have the right dimension, and position for the transitioning image.</p>
<p>Now we need to calculate the translation position from which to animate the image. We’ll scale the image from the center, so we need to apply our translate considering that we are just moving the center of the photo. So we’ll just do some relatively easy math, by taking the source position plus half of the source dimension. This would equate to this:</p><pre><code>const translateInitX = source.pageX + source.width / 2;const translateInitY = source.pageY + source.height / 2;</code></pre><pre><code>const translateDestX = destination.pageX + destination.width / 2;const translateDestY = destination.pageY + destination.height / 2;</code></pre>
<p>We can now calculate the translate position by the difference between the center of source image and destination image</p><pre><code>const openingInitTranslateX = translateInitX - translateDestX;const openingInitTranslateY = translateInitY - translateDestY;</code></pre>
<p>With this found start scale and translate values we can animate using the <code>Animated</code> api.</p>
<p>That’s it. We now have transition working. We can now use <code>useNativeDriver</code> since we are now animating only non-layout properties.</p>
<h4 id="step-4-hiding-the-source-and-destination-image-during-transition">Step 4: Hiding the source and destination image during transition</h4>
<p>In the previous gif, we saw that during transition, the clicked image was still in the same position, and the destination image appeared before the transition was complete.</p>
<p>Lets hide the source and destination image during the transition, so that it looks like the clicked image is the one animating to the detail screen.</p>
<p>Let now see the output.</p>
<h4 id="step-5-handle-the-back-button">Step 5: Handle the back button</h4>
<p>During transitioning into the detail screen using <code>Animated.timing()</code> we change the <code>AnimatedValue</code> from 0 to 1. So when back button is clicked, we just have to change the <code>AnimatedValue</code> from 1 to o.</p>
<p>That’s it. You can check the code on <a href="https://github.com/narendrashetty/photo-gallery-RN" rel="noopener">Github</a> and try out the demo on <a href="https://expo.io/@narendrashetty/photo-gallery" rel="noopener">Expo</a>.</p>
<p><a href="https://github.com/narendrashetty/photo-gallery-RN" rel="noopener"><strong>narendrashetty/photo-gallery-RN</strong></a><br><a href="https://github.com/narendrashetty/photo-gallery-RN" rel="noopener"><em>Contribute to photo-gallery-RN development by creating an account on GitHub.</em>github.com</a><a href="https://expo.io/@narendrashetty/photo-gallery" rel="noopener"><strong>photo-gallery on Expo</strong></a><br><a href="https://expo.io/@narendrashetty/photo-gallery" rel="noopener"><em>An empty new project</em>expo.io</a></p>
<p>Also checkout <a href="undefined" rel="noopener">Eric Vicenti</a>’s <a href="https://www.twitch.tv/ericvicenti" rel="noopener">broadcast on shared element transition</a>.</p>
<p>Thank you for taking time and reading this post. If you found this useful please clap and share it. You can connect with me on Twitter <a href="https://twitter.com/narendra_shetty" rel="noopener">@narendra_shetty</a>.</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
