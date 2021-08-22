---
card: "https://cdn-media-1.freecodecamp.org/images/0*q_H371QLdCFefNpe.png"
tags: [CSS]
description: "In this article, we are going to create a small 3D scene, whe"
author: "Milad E. Fahmy"
title: "Let’s play around with CSS 3D: how to scroll on the z-axis"
created: "2021-08-16T10:07:25+02:00"
modified: "2021-08-16T10:07:25+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-css tag-javascript tag-web-development tag-tech tag-design ">
<header class="post-full-header">
<h1 class="post-full-title">Let’s play around with CSS 3D: how to scroll on the z-axis</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/0*q_H371QLdCFefNpe.png 300w,
https://cdn-media-1.freecodecamp.org/images/0*q_H371QLdCFefNpe.png 600w,
https://cdn-media-1.freecodecamp.org/images/0*q_H371QLdCFefNpe.png 1000w,
https://cdn-media-1.freecodecamp.org/images/0*q_H371QLdCFefNpe.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/0*q_H371QLdCFefNpe.png" alt="Let’s play around with CSS 3D: how to scroll on the z-axis">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
perspective: 400px;
}
.container-scene .cube {
transform-style: preserve-3d;
}</code></pre><h3 id="perspective-origin">Perspective origin</h3><blockquote><em>The <code>perspective-origin</code> CSS property determines the position at which the viewer is looking. It is used as the vanishing point by the perspective property. <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/perspective-origin" rel="noopener">MDN</a></em></blockquote><p>This property basically allows us to move the vanishing point of our 3D scene.</p><pre><code class="language-css">.container-scene {
perspective: 400px;
perspective-origin: 50% 100%; /*X position value, Y position value*/
}
.container-scene .cube {
transform-style: preserve-3d;
&lt;div class="scene3D-container"&gt;
&lt;div class="scene3D"&gt;
&lt;div&gt;Card1&lt;/div&gt;
&lt;div&gt;Card2&lt;/div&gt;
&lt;!--Etc.--&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;</code></pre><h4 id="styling">Styling</h4><p>First, we are going to set our <a href="https://vinceumo.github.io/devNotes/css/2019/02/20/css-customs-properties.html" rel="noopener">CSS custom properties</a> (CSS variables). Some of these variables are going to be transformed using JS. They are going to help us to interact with the scene.</p><pre><code class="language-css">:root {
--scenePerspective: 1;
--scenePerspectiveOriginX: 50;
--scenePerspectiveOriginY: 30;
--cameraSpeed: 150; // Where 1 is the fastest, this var is a multiplying factor of --scenePerspective and --filmZ
--cameraZ: 0; // Initial camera position
--viewportHeight: 0; // Viewport height will allow us to set the depth of our scene
}</code></pre><p><code>.viewport</code> will allow us to set the height of the window. We will later use it to set the depth of the scene and use the scrollbar to navigate in the z-axis.</p><pre><code class="language-css">.viewport {
height: calc(var(--viewportHeight) * 1px);
}</code></pre><p><code>.scene3D-container</code> sets the scene perspective and the perspective origin. It is position fixed so it stays always on screen. We are as well going to set the perspective origin.</p><pre><code class="language-css">.viewport .scene3D-container {
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
perspective: calc(var(--scenePerspective) * var(--cameraSpeed) * 1px);
perspective-origin: calc(var(--scenePerspectiveOriginX) * 1%) calc( var(--scenePerspectiveOriginY) * 1% );
will-change: perspective-origin;
transform: translate3d( 0, 0, 0 ); //Allows Hardware-Accelerated CSS, so transitions are smoother
}</code></pre><p><code>.scene3D</code> sets the position of our scene on the z-axis, This will behave a bit like moving a camera on the z-axis. But really we are moving the scene and the camera (viewport) is fixed. In the rest of this article, we are going to use the camera comparison. <code>.scene3D</code> takes the full height and width of the viewport.</p><pre><code class="language-css">.viewport .scene3D-container .scene3D {
position: absolute; top: 0;
height: 100vh;
width: 100%;
transform-style: preserve-3d;
transform: translateZ(calc(var(--cameraZ) * 1px));
will-change: transform;
&gt; div {
position: absolute;
display: block;
width: 100%;
top: 40%;
@media only screen and (min-width: 600px) {
width: 45%;
}
&amp;:nth-child(2n) { left: 0; }
&amp;:nth-child(2n + 1) { right: 0; }
@for $i from 0 through 25 {
&amp;:nth-child(#{$i}) {
transform: translate3D( random(50) - 25 * 1%, random(100) - 50 * 1%, calc(var(--itemZ) * var(--cameraSpeed) * #{$i} * -1px) );
}
}
}
setSceneHeight();
});
function setSceneHeight() {
const numberOfItems = films.length; // Or number of items you have in `.scene3D`
const itemZ = parseFloat(
getComputedStyle(document.documentElement).getPropertyValue("--itemZ")
);
const scenePerspective = parseFloat(
getComputedStyle(document.documentElement).getPropertyValue(
"--scenePerspective"
)
);
const cameraSpeed = parseFloat(
getComputedStyle(document.documentElement).getPropertyValue("--cameraSpeed")
);
const height =
window.innerHeight +
scenePerspective * cameraSpeed +
itemZ * cameraSpeed * numberOfItems;
// Update --viewportHeight value
document.documentElement.style.setProperty("--viewportHeight", height);
}</code></pre><p>Our page has now a scrollbar, but we are still unable to scroll. We need to add an event listener that will listen to the user scrolling. The scroll event will call a <code>moveCamera()</code> function. It will update the value of <code>--cameraZ</code> with the value of <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/pageYOffset" rel="noopener">window.pageYOffset</a>.</p><pre><code class="language-js">document.addEventListener("DOMContentLoaded", function() {
window.addEventListener("scroll", moveCamera);
setSceneHeight();
});
function moveCamera() {
document.documentElement.style.setProperty("--cameraZ", window.pageYOffset);
}
function setSceneHeight() {
// ...
x: parseFloat(
getComputedStyle(document.documentElement).getPropertyValue(
"--scenePerspectiveOriginX"
)
),
y: parseFloat(
getComputedStyle(document.documentElement).getPropertyValue(
"--scenePerspectiveOriginY"
)
),
maxGap: 10
};</code></pre><p>If the user’s cursor is at the center of the screen, we will set the values of <code>--scenePerspectiveOriginX</code> and <code>--scenePerspectiveOriginX</code> as the initial ones. The further the cursor moves away from the center, the more these values will increase/decrease. If the user moves to the top left corner the values will increase, and at the bottom right corner they will decrease.</p><p>The <code>moveCameraAngle()</code> function is going to update the values:</p><ul><li><code>xGap</code> and <code>yGap</code> return the mouse position of the user in a percentage on the X and Y axis, compared to the center of the window.</li><li><code>newPerspectiveOriginX</code> and <code>newPerspectiveOriginY</code> return the new perspective origin.</li></ul><pre><code class="language-js">document.addEventListener("DOMContentLoaded", function() {
window.addEventListener("scroll", moveCamera);
window.addEventListener("mousemove", moveCameraAngle);
setSceneHeight();
});
function moveCameraAngle(event) {
const xGap =
(((event.clientX - window.innerWidth / 2) * 100) /
(window.innerWidth / 2)) *
-1;
const yGap =
(((event.clientY - window.innerHeight / 2) * 100) /
(window.innerHeight / 2)) *
-1;
const newPerspectiveOriginX =
perspectiveOrigin.x + (xGap * perspectiveOrigin.maxGap) / 100;
const newPerspectiveOriginY =
perspectiveOrigin.y + (yGap * perspectiveOrigin.maxGap) / 100;
document.documentElement.style.setProperty(
"--scenePerspectiveOriginX",
newPerspectiveOriginX
);
document.documentElement.style.setProperty(
"--scenePerspectiveOriginY",
newPerspectiveOriginY
);
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
