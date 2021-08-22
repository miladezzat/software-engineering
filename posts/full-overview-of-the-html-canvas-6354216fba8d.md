---
card: "https://cdn-media-1.freecodecamp.org/images/0*YrdvMQb-_K_uyRck"
tags: [JavaScript]
description: "by Shukant Pal"
author: "Milad E. Fahmy"
title: "A full overview of HTML Canvas"
created: "2021-08-16T10:07:21+02:00"
modified: "2021-08-16T10:07:21+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-programming tag-web-development tag-coding tag-tech ">
<header class="post-full-header">
<h1 class="post-full-title">A full overview of HTML Canvas</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/0*YrdvMQb-_K_uyRck 300w,
https://cdn-media-1.freecodecamp.org/images/0*YrdvMQb-_K_uyRck 600w,
https://cdn-media-1.freecodecamp.org/images/0*YrdvMQb-_K_uyRck 1000w,
https://cdn-media-1.freecodecamp.org/images/0*YrdvMQb-_K_uyRck 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/0*YrdvMQb-_K_uyRck" alt="A full overview of HTML Canvas">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
&lt;html&gt;
&lt;head&gt;&lt;title&gt;Canvas Demo&lt;/title&gt;&lt;/head&gt;
&lt;body&gt;
&lt;canvas id="canvas-demo" width="400" height="400"&gt;
This will be displayed if your browser doesn't
support the canvas element. The closing tag is
necessary.
&lt;/canvas&gt;
&lt;script src="canvas-demo.js"&gt;&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre><p>In your <code>canvas-demo.js</code> file,</p><pre><code class="language-js">// canvas-demo.js
const demoCanvas = document.getElementById(’canvas-demo’).getContext(’2d’);
window.onload = function() {// make sure to use onload
/* Add code here as we go!!! @nodocs
*/
}</code></pre><h1 id="paths">Paths</h1><p>Paths are a collection of points in the 2D pixel grid in the canvas. They are drawn with the help of this API. Each shape in a path that you draw is called a “subpath” by the W3C documentation.</p><ul><li><code>beginPath()</code> and <code>closePath()</code> : All the shapes that you draw are added into the current path. If you call <code>stroke</code> or <code>fill</code> later on, it will apply that to all of the shapes you’ve drawn in the current path. To prevent that, you divide your drawing by calling <code>beginPath</code> and <code>closePath</code> .</li></ul><pre><code class="language-js">// Calling this isn't necessary, but a good practice.
demoCanvas.beginPath();
/*
* Drawing code, copy and paste each example (separately) here
*/
demoCanvas.closePath();// this is required if you want to draw
// Draw a pattern of vertically stack horizontal
// lines.
demoCanvas.moveTo(10, 10);// start at (10,10)
demoCanvas.lineTo(110, 10);
demoCanvas.moveTo(10, 20);// 10 pts below
demoCanvas.lineTo(180, 20);
demoCanvas.moveTo(10, 30);
demoCanvas.lineTo(150, 30);
demoCanvas.moveTo(10, 40);
demoCanvas.lineTo(160, 40);
demoCanvas.moveTo(10, 50);
demoCanvas.lineTo(130, 50);
// try removing this moveTo, the quad-curve will then
// start from from (130, 50), due to the lineTo.
demoCanvas.moveTo(10, 100);// quad-curve starts from here
demoCanvas.quadraticCurveTo(110, 55, 210, 100);// curve upward
demoCanvas.moveTo(10, 100);// back here, let's draw one below
demoCanvas.quadraticCurveTo(110, 145, 210, 100);// curve below
// that forms the eye outline
demoCanvas.moveTo(132.5, 100);// remove this, a horizontal line will be
// drawn from (210, 100) to (132.5, 100) because arc() connects the last
// point to the start of the arc.
demoCanvas.arc(110, 100, 22.5, 0, 2*Math.PI, false);// pupil (circle)
/* We'll talk about this shortly */
demoCanvas.moveTo(100, 100);
demoCanvas.lineTo(150, 10);
demoCanvas.moveTo(250, 100);
demoCanvas.lineTo(200, 190);
demoCanvas.moveTo(150, 10);
demoCanvas.lineTo(200, 190)
demoCanvas.moveTo(100, 100);
demoCanvas.bezierCurveTo(150, 10, 200, 190, 250, 100);
// arcTo() is too complicated to use
// demoCanvas.stroke(); demoCanvas.closePath(); demoCanvas.beginPath();
demoCanvas.moveTo(200, 200);// comment out above line (and comment this line),
// then the arc's tangent will come from (0,0)!! Try it.
demoCanvas.arcTo(100, 300, 300, 300, 100);
demoCanvas.moveTo(200, 200);
demoCanvas.arcTo(100, 300, 300, 300, 50);
demoCanvas.moveTo(100, 300);
demoCanvas.lineTo(300, 300);
demoCanvas.moveTo(100, 300);
demoCanvas.lineTo(200, 200);
demoCanvas.moveTo(50, 300);
// packman
demoCanvas.arc(50, 300, 35, Math.PI/6, 11*Math.PI/6, false);
demoCanvas.lineTo(50, 300);
demoCanvas.lineTo(50, 50);
demoCanvas.lineTo(10, 50);
linearGrad.addColorStop(0, "blue");
linearGrad.addColorStop(.5, "green");
linearGrad.addColorStop(1, "red");
demoCanvas.strokeStyle=linearGrad;
demoCanvas.lineWidth=50;
demoCanvas.moveTo(5,5);
demoCanvas.lineTo(100,5);
demoCanvas.stroke();// change strokeStyle(l10) to fillStyle(l10)
// and stroke() to fill(). Then, change lineTo(100,5) to rect(5,5,95,50).
// Results should be almost same.
demoCanvas.closePath();
demoCanvas.beginPath();
var radialGrad = demoCanvas.createRadialGradient(50,50,10,50,50,40);
radialGrad.addColorStop(0, "blue");
radialGrad.addColorStop(.5, "green");
radialGrad.addColorStop(1, "red");
demoCanvas.fillStyle=radialGrad;
demoCanvas.arc(50,50,30,0,2*Math.PI,false);
linearGrad.addColorStop(0, "blue");
linearGrad.addColorStop(.5, "green");
linearGrad.addColorStop(1, "red");
demoCanvas.strokeStyle=linearGrad;
demoCanvas.lineWidth=50;
demoCanvas.moveTo(50,5);
demoCanvas.lineTo(155,5);
demoCanvas.stroke();// change strokeStyle(l10) to fillStyle(l10)
// and stroke() to fill(). Then, change lineTo(100,5) to rect(5,5,95,50).
// Results should be almost same.
demoCanvas.closePath();
demoCanvas.beginPath();
var radialGrad = demoCanvas.createRadialGradient(50,50,10,50,50,40);
radialGrad.addColorStop(0, "blue");
radialGrad.addColorStop(.5, "green");
radialGrad.addColorStop(1, "red");
demoCanvas.fillStyle=radialGrad;
demoCanvas.arc(60,60,30,0,2*Math.PI,false);
var rectData = demoCanvas.getImageData(10, 10, 390, 390);
for (var y=0; y&lt;390; y++) {
for (var x=0; x&lt;390; x++) {
const offset = 4*(y*390+x);// 4* because each pixel is 4 bytes
rectData.data[offset] = Math.floor(Math.random() * 256);// red
rectData.data[offset+1] = Math.floor(Math.random() * 256);// green
rectData.data[offset+2] = Math.floor(Math.random() * 256);// blue
rectData.data[offset+3] = 255;// alpha, fully opaque
}
}
demoCanvas.putImageData(rectData, 10, 10);
demoCanvas.drawImage(image, 50, 50, 200, 200, 100, 100, 200, 200);
demoCanvas.drawImage(image, 0, 0, 400, 400);
demoCanvas.rotate(Math.PI / 6);
demoCanvas.scale(2, 2);
demoCanvas.translate(10, 10);
demoCanvas.drawImage(image, 0, 0, 400, 400);</code></pre><blockquote><em>In Example 2.0, notice how the original image is intact. Only the second image (overlay) is transformed by three methods — rotate, scale, transform.</em></blockquote><p>To revert all transformations:</p><pre><code class="language-js">demoCanvas.setTransform(1, 0, 0, 0, 0, 1);
// sets the transform to the identity matrix</code></pre><p>NOTE:</p><ul><li>Changing the order of transformation can affect the final result.</li><li>For advanced users, you may want to look at the <code>transform</code> and <code>setTransform</code> methods. This will let you set the 3D transformation matrix directly.</li><li><code>getImageData</code> and <code>putImageData</code> are not affected by the transform. That means if you draw a black rectangle using <code>putImageData</code> , it won’t be transformed (rotated/scaled/translated).</li><li>As changing the transform only works for drawings done after applying it, you can’t scale/rotate/translate the existing canvas directly (nor does <code>getImageData</code> and then <code>putImageData</code> work). You may have to create another hidden canvas of the same size — and then copy the image-data into the 2nd canvas, then use <code>drawImage</code> on the 2nd canvas.</li><li>Check this example: <a href="https://canvasdemo2d.github.io/?source=post_page---------------------------">https://canvasdemo2d.github.io/</a> (source: <a href="https://github.com/canvasdemo2d/canvasdemo2d.github.io?source=post_page---------------------------">https://github.com/canvasdemo2d/canvasdemo2d.github.io</a>). Move your cursor over the canvas and see what it does. It won’t work on mobile phones, unfortunately. The cascading effect is due to the fact that I am translating the canvas w.r.t mouse using <code>drawImage</code> . <code>drawImage</code>then writes to the same canvas it’s reading from, which causes the repeating pattern!</li></ul><hr><h1 id="hit-regions">Hit Regions</h1><p>As of the time of writing (March 2019), <em><em>support for hit regions is experimental</em></em> in Chrome and on Firefox. Mobile browser don’t even support it at all. Hence, I will explain to you “what” could hit regions be used for.</p><p>Hit regions are used to catch pointer events on the canvas and know “where” the user clicked. For example, you could have two rectangles A &amp; B — when the user clicks A, you want to perform action $A and when the user clicks B, you want to perform action $B. Let’s walk through the whole process!</p><p>A hit region is related to these three things:</p><ul><li><strong><strong>Path:</strong></strong> The current path when the hit region was created (for example, a rectangle). All pointer events inside the path are routed to that hit region.</li><li><strong><strong>Id:</strong></strong> An unique id string to identify the hit region by the event handler.</li><li><strong><strong>Control: </strong></strong>An alternative DOM element ( <code>HTMLButtonElement</code> , for example) that gets the pointer events instead.</li></ul><p>NOTE: The path is automatically provided by the canvas when adding a new hit region. Only one — id or control — is needed to form a hit region.</p><p>Methods for manipulating the hit-region list of a canvas are:</p><ul><li><code>addHitRegion(options)</code> : Takes a <code>HitRegionOptions</code> object and forms a hit-region enclosed by the current path. The <code>options</code> argument should be a string <code>id</code> property or a <code>HTMLElement</code> <code>control</code> property.</li><li><code>removeHitRegion(id)</code> : Removes the hit region with the id <code>id</code> so that it no longer receives any pointer events.</li><li><code>clearHitRegions()</code> : Removes all hit regions.</li></ul><pre><code class="language-js">demoCanvas.fillStyle = 'red';
demoCanvas.rect(10,10,60,60);
demoCanvas.fill();// first rectangle
demoCanvas.addHitRegion({ id: 'btn1' });
demoCanvas.fillStyle = 'blue';
demoCanvas.rect(10,110,60,60);
demoCanvas.fill();
demoCanvas.addHitRegion({ id: 'btn2' });
document.getElementById('demo-canvas').onpointerdown = function(evt) {
// demoCanvas is the 2d context, not the HTMLCanvasElement
console.log('Hello id: ' + evt.region);// region is hitregion id
}
// This code might not work due to this being an
// unsupported (new) feature of HTML5.</code></pre><p>NOTE: Hit regions aren’t supported — but that doesn’t mean you have to use them to capture pointer events. You could create your “own hit-region list” and representations of boundaries of regions (cause you can’t get the current path from the canvas, too bad). In the <code>document.getElementById('demo-canvas').onpointerdown</code> method, get the current <code>clientX,clientY</code> properties and search through the hit region list. Based on the hit region that contains the point, you can perform the intended action.</p><hr><h1 id="states-and-the-clip-method">States and the clip() method</h1><p>State saving is a convenience provided by the W3C specification. You can save the current state of a canvas and restore it later.</p><p>You could also build such a system (partially) by writing your own JavaScript model. But you would have to save a quite of stuff: transformation matrix, hit-region list, style properties, and so on. Furthermore, you cannot revert the clipping area (we’ll get to the <code>clip</code>method in some time) directly.</p><p>NOTE: The <code>save</code> / <code>restore</code> methods do not save &amp; restore the actual drawing/pixels. They only save other properties.</p><p>Hence, I would recommend heavily using the <code>save</code> &amp; <code>restore</code> methods to go back and forth instead of erasing stuff on your own or making your own state-saving mechanism.</p><p>The <code>CanvasRendering2DContext</code> object has an associated state stack. The <code>save</code> method will push the current canvas state onto that stack, while the <code>restore</code> method will pop the latest state from the stack.</p><p><strong><strong>The Clipping Region</strong></strong></p><p>The clipping region is a specific region in which all drawings are to be done. Obviously, by default, the clipping region is the rectangle is the whole canvas. But you may want to draw in a specific region instead of the whole thing. For example, you may want to draw the lower half of a star formed by multiple <code>lineTo</code> methods.</p><p>So, for example, let’s say you know how to draw a star in the canvas. It touches all sides of the canvas. But now you want to only display the lower half of the star. In this scenario, you would:</p><ol><li>Save the state of the canvas</li><li>Clip the lower half region</li><li>Draw your star (as if on the whole canvas)</li><li>Restore the canvas state</li></ol><p>To clip a region, you have to call the <code>clip()</code> method which does the following:</p><blockquote><em>The <code>clip()</code> method must create a new clipping region by calculating the intersection of the current clipping region and the area described by the path, using the non-zero winding number rule. Open subpaths must be implicitly closed when computing the clipping region, without affecting the actual subpaths. The new clipping region replaces the current clipping region.</em><br><br><em>When the context is initialized, the clipping region must be set to the rectangle with the top left corner at (0,0) and the width and height of the coordinate space.</em><br><br><em>— W3C Documentation for Canvas 2D Context</em></blockquote><pre><code class="language-js">demoCanvas.save();
demoCanvas.rect(0, 200, 400, 200);// lower-half rectangle subpath
demoCanvas.clip();
/* star drawing method */
demoCanvas.restore();</code></pre><p>That’s all for now. I will write an article on animations with the canvas and how to write a custom interface completely on the canvas.</p><p>Further reading:</p><ul><li><a href="/news/match-making-with-firebase-hashnode-de9161e2b6a7">How to use Firebase for building Android multiplayer games</a></li><li><a href="/news/how-to-synchronize-your-game-app-across-multiple-devices-88794d4c95a9">How to synchronize your game app across multiple Android devices</a></li><li><a href="https://medium.com/@sukantk3.4/circular-dependencies-in-javascript-34183fc2720?source=post_page---------------------------">Circular Dependencies in JavaScript</a></li></ul><p><em><em>Shukant Pal is the creator of the Silcos kernel. He is an avid learner and is now practicing advanced web application development. He has hands-on experience with React and its ecosystem.</em></em></p><hr><p><em><em>All quotations are taken from the W3C docs for Canvas 2D Context.</em></em></p><p>Hey, I’m Shukant Pal. I am developing a lot of web applications in my free time. Follow me on <a href="https://twitter.com/ShukantP">social media</a>.<br></p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
