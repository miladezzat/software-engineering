---
card: "https://cdn-media-1.freecodecamp.org/images/0*JPekOSiNoJpvFeDP.png"
tags: [Art]
description: by Ali Spittel
author: "Milad E. Fahmy"
title: "An introduction to Generative Art: what it is, and how you make it"
created: "2021-08-15T19:41:24+02:00"
modified: "2021-08-15T19:41:24+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-art tag-javascript tag-creativity tag-programming tag-tech ">
<header class="post-full-header">
<h1 class="post-full-title">An introduction to Generative Art: what it is, and how you make it</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/0*JPekOSiNoJpvFeDP.png 300w,
https://cdn-media-1.freecodecamp.org/images/0*JPekOSiNoJpvFeDP.png 600w,
https://cdn-media-1.freecodecamp.org/images/0*JPekOSiNoJpvFeDP.png 1000w,
https://cdn-media-1.freecodecamp.org/images/0*JPekOSiNoJpvFeDP.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/0*JPekOSiNoJpvFeDP.png" alt="An introduction to Generative Art: what it is, and how you make it">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Ali Spittel</p>
<h1 id="an-introduction-to-generative-art-what-it-is-and-how-you-make-it">An introduction to Generative Art: what it is, and how you make it</h1>
<figcaption>Mandelbrot’s Fractal is derived from a deceptively simple equation</figcaption>
</figure>
<p>Generative art can be an intimidating topic — it seems like there is a lot of math involved, and art is tricky in itself!</p>
<p>But, it doesn’t have to be difficult — you can build some really cool things without a math or art degree. This post will break down what generative art even is and how you can get started building your own generative art.</p>
<h3 id="first-what-is-code-art">First, what is code art?</h3>
<p>Code art is any art that is built using code. There are endless examples on CodePen — for example <a href="https://dev.to/aspittel/learning-css-through-creating-art-54c0" rel="noopener">CSS art</a>.</p>
<h3 id="what-is-generative-art">What is generative art?</h3>
<p>Often, generative art draws inspiration from modern art, especially pop art that makes heavy use of orderly geometric patterns.</p>
<p>However, it is a very broad and rich category of art created with code with a central characteristic. Generative art incorporates a self-governed or autonomous system in some way.</p>
<p>Randomness is one type of autonomous system. By incorporating chance into a piece of code art, you get a different, completely unique piece of art each time you run your script, load your page, or respond to some user interaction.</p>
<p>There are also more orderly autonomous systems. One example is Mandelbrot’s Fractal, derived from a deceptively simple equation.</p>
<p>We can also integrate both approaches, blending order and chaos!</p>
<p>The artwork becomes a collaboration between the computer and the artist. Some aspects of the artwork are controlled by the coder, but not all of them. The artist controls both the randomness and the order in the art.</p>
<p>In a way, with an autonomous system, the artist gives up control over their art, and the computer is doing it for them. A more nuanced perspective emerges when a new creative process is considered.</p>
<p>The coder-artist engages in a feedback loop where they are constantly tweaking a system to produce more desirable and often more surprising results.</p>
<p>This process embraces experimentation and happy accidents in a way that reshapes the role of the artist. As generative artists, we use the code basics like loops, control flow and specialized functions. We then blend them with often unpredictable forces, to produce completely unique results unlike anything else that exists.</p>
<h3 id="examples-of-generative-art">Examples of Generative Art</h3>
<p><a href="http://www.galaxykate.com/apps/Prototypes/LTrees/" rel="noopener">Kate Compton’s Flowers</a></p>
<p><a href="http://math.hws.edu/eck/js/edge-of-chaos/CA.html" rel="noopener">Cellular Automata and the Edge of Chaos</a></p>
<h4 id="animated-generative-art-in-multi-colour-by-phil-nash">Animated generative art in multi-colour by Phil Nash</h4>
<h4 id="impressionists-blobs-by-murasaki-uma">Impressionists Blobs by Murasaki Uma</h4>
<h4 id="generated-tree-by-miriam-nadler">Generated Tree by Miriam Nadler</h4>
<h3 id="what-goes-into-a-piece-of-generative-art">What goes into a piece of generative art?</h3>
<ul>
<li><strong>Randomness</strong> is crucial for creating generative art. The art should be different each time you run the generation script, so randomness is usually a large part of that.</li>
<li><strong>Algorithms</strong> — Implementing an algorithm visually can often generate awesome art, for example, the binary tree above.</li>
<li><strong>Geometry</strong> — Most generative art incorporates shapes, and the math from high school geometry class can aid in some really cool effects.</li>
</ul>
<h3 id="how-can-you-approach-a-generative-art-piece">How can you approach a generative art piece?</h3>
<p>There are two main strategies for creating generative art, though most will fall between the two strategies.</p>
<p>The first is to have no results in mind and see what the computer generates as you play around.</p>
<p>The second is that you have a very finalized idea of what you want the art to look like, and the randomness only slightly changes the end result.</p>
<h3 id="where-should-you-start">Where should you start?</h3>
<p>If you know JavaScript, <a href="https://p5js.org/" rel="noopener">p5.js</a> is an awesome place to start. Its goal is to “make coding accessible for artists, designers, educators, and beginners.” It is a wrapper on the <a href="https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API" rel="noopener">Canvas API</a>, and it simplifies a lot of the math. It focuses on drawing, but you can also do sound, video, or webcam interaction with it if you are interested in those forms of art!</p>
<h4 id="a-quick-introduction-to-p5">A Quick Introduction to P5</h4>
<p>First, load in the <a href="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.2/p5.js" rel="noopener">p5 CDN</a>. Then, in your JavaScript file, you will add two functions that will be used in pretty much ever p5 script: <code>setup</code> and <code>draw</code>. These names are necessary for p5 to call them.</p>
<p><code>setup</code> is called when the program starts. You will probably create a canvas to draw on within it using the <code>createCanvas</code> function, and you may set some defaults there. It is only called once!</p>
<p><code>draw</code> is called after setup, and is executed constantly until you call <code>noLoop</code>, which will stop it from running again. You can control how many times <code>draw</code> runs each second with the <code>frameRate</code> function.</p>
<p>With generative art, I usually put <code>noLoop</code> in the <code>setup</code> function, which makes <code>draw</code> only run once instead of continuously.</p>
<p><a href="https://codepen.io/aspittel/pen/EeJJBm" rel="noopener">Here’s a p5 starter template on CodePen</a>.</p>
<p>Since we’ve talked so much about the importance of randomness for generative art, another important function in p5 is <code>random</code>. It works similarly to JavaScript's <code>Math.random</code> but you can set a range for the numbers so that you don't have to do as much math to get the number to a useful format.</p>
<h4 id="p5-lines">p5 Lines</h4>
<p>You can create a line in p5.js like this:</p><pre><code>line(startX, startY, endX, endY)</code></pre>
<p>Then, you can randomly generate a bunch of lines and create a simple piece of generative art like this:</p>
<p>Even really simple scripts can generate cool pieces of art!</p>
<h4 id="p5-shapes">p5 Shapes</h4>
<p>You can also create shapes with p5 — like circles, triangles, and squares.</p>
<p>Here’s an example of creating some shapes with p5:</p><pre><code>// circle ellipse(xCoordinate, yCoordinate, width, height) </code></pre><pre><code>// square rect(xCoordinate, yCoordinate, width, height) </code></pre><pre><code>// triangle triangle(xCoordinate1, yCoordinate1, x2, y2, x3, y3)</code></pre>
<p>Then, we can create some more shapes to build something more fun!</p>
<h4 id="p5-movement">p5 Movement</h4>
<p>We can add movement to our drawings by removing the <code>noLoop</code> function call in the <code>setup</code> function — check this out!</p>
<h4 id="color">Color</h4>
<p>You can also play with color with generative art by randomly choosing colors. You can do this mathematically through RGB values, or you can generate a color palette with your favorite color picker (we’ve been using <a href="https://www.colorbox.io/" rel="noopener">this</a> one).</p>
<p>You can set the fill color with the <code>color</code> function. It takes a bunch of different formats, like named colors, RGBAs, and hex codes.</p>
<p>You can also change the color of the outline using <code>stroke</code>. You can also remove that outline using <code>noStroke</code> or make it a different width with <code>strokeWeight</code>.</p>
<h4 id="putting-it-all-together">Putting it all together</h4>
<p>Once we have all of those pieces in place, we can combine the techniques to build some really cool stuff.</p>
<h3 id="another-strategy-tweaking-tutorials">Another Strategy: Tweaking Tutorials</h3>
<p>You can also generate really cool generative art by taking someone else’s work and building off of it. For example, here’s the result of a tutorial by <a href="https://www.youtube.com/channel/UCvjgXvBlbQiydffZU7m1_aw" rel="noopener">Dan Shiffman</a>:</p>
<p>Here are two tweaks of it to create different effects:</p>
<p><a href="https://codepen.io/collection/nMmoem/" rel="noopener">Here’s</a> a Codepen Collection with even more!</p>
<p>You can follow tutorials, fork CodePens, or Glitch projects and create something new and unique. Just make sure to give the original artist some credit too.</p>
<h3 id="cheatsheet">Cheatsheet</h3>
<p>Here’s a cheat sheet with all of the P5 functionality we used for this tutorial.</p>
<h3 id="read-more">Read More</h3>
<ul>
<li><a href="https://generativeartistry.com/" rel="noopener">Generative Artistry</a></li>
<li><a href="https://www.youtube.com/channel/UCvjgXvBlbQiydffZU7m1_aw" rel="noopener">Coding Train</a></li>
<li><a href="https://www.youtube.com/watch?v=4Se0_w0ISYk" rel="noopener">Talk by Tim Holman</a></li>
</ul>
<h3 id="keep-in-touch">Keep in Touch</h3>
<p>This post was co-written with <a href="https://twitter.com/1800thehive" rel="noopener">James Reichard</a>. If you create your own art, make sure to Tweet it at us! (<a href="https://twitter.com/ASpittel" rel="noopener">Ali</a> and <a href="https://twitter.com/1800THEHIVE" rel="noopener">James</a>).</p>
<p><em>Originally published at <a href="https://dev.to/aspittel/intro-to-generative-art-2hi7" rel="noopener">dev.to</a>.</em></p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
