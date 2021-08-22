---
card: "https://cdn-media-1.freecodecamp.org/images/0*YgE7CTX63DNOO6P6.png"
tags: [JavaScript]
description: "The theme for week #5 of the Weekly Coding Challenge is:"
author: "Milad E. Fahmy"
title: "How to build a drawing app with p5js"
created: "2021-08-15T23:44:27+02:00"
modified: "2021-08-15T23:44:27+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-programming tag-tech tag-creativity tag-coding ">
<header class="post-full-header">
<h1 class="post-full-title">How to build a drawing app with p5js</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/0*YgE7CTX63DNOO6P6.png 300w,
https://cdn-media-1.freecodecamp.org/images/0*YgE7CTX63DNOO6P6.png 600w,
https://cdn-media-1.freecodecamp.org/images/0*YgE7CTX63DNOO6P6.png 1000w,
https://cdn-media-1.freecodecamp.org/images/0*YgE7CTX63DNOO6P6.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/0*YgE7CTX63DNOO6P6.png" alt="How to build a drawing app with p5js">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
&lt;ul&gt;
&lt;li&gt;
&lt;label for="color"&gt;Color:&lt;/label&gt;
&lt;input type="color" id="color" /&gt;
&lt;/li&gt;
&lt;li&gt;
&lt;label for="weight"&gt;Stroke:&lt;/label&gt;
&lt;input type="number" id="weight" min="2" max="200" value="3" /&gt;
&lt;/li&gt;
&lt;li&gt;
&lt;button id="clear"&gt;&lt;i class="fa fa-trash"&gt;&lt;/i&gt;&lt;/button&gt;
&lt;/li&gt;
&lt;/ul&gt;
&lt;/div&gt;</code></pre><h3 id="the-css">The CSS</h3><p>Using CSS we’ll move the <code>.sidebar</code> and everything that’s inside it in the left side. We will style it a little bit to make it look nicer (nothing fancy, basic CSS):</p><pre><code class="language-css">.sidebar {
background-color: #333;
box-shadow: 0px 0px 10px rgba(30, 30, 30, 0.7);
color: #fff;
position: absolute;
left: 0;
top: 0;
height: 100vh;
padding: 5px;
z-index: 1000;
}
.sidebar ul {
display: flex;
justify-content: center;
align-items: flex-start;
flex-direction: column;
list-style-type: none;
padding: 0;
margin: 0;
height: 100%;
}
.sidebar ul li {
padding: 5px 0;
}
.sidebar input,
.sidebar button {
text-align: center;
width: 45px;
}
.sidebar li:last-of-type {
margin-top: auto;
}
.sidebar button {
background-color: transparent;
border: none;
color: #fff;
font-size: 20px;
}
.sidebar label {
display: block;
font-size: 12px;
margin-bottom: 3px;
}</code></pre><p>Now for the <strong>important</strong> part…</p><h3 id="the-js-p5js">The JS / P5JS</h3><p>As you might have noticed, we haven’t added a <code>canvas</code> element into our HTML since p5js will create it for us.</p><p>There are two important functions which we’ll use from the <a href="http://p5js.org/" rel="noopener">p5js</a> library:</p><ul><li><a href="http://p5js.org/reference/#/p5/setup" rel="noopener">setup</a> — is called once when the program starts. It’s used to define initial environment properties such as screen size and background color.</li><li><a href="http://p5js.org/reference/#/p5/draw" rel="noopener">draw</a> —is called directly after <code>setup()</code>. The <code>draw()</code> function continuously executes the lines of code contained inside its block.</li></ul><pre><code class="language-js">function setup() {
// create a canvas which is full width and height
createCanvas(window.innerWidth, window.innerHeight);
// Add a white background to the canvas
background(255);
}
function draw() {}</code></pre><p>Before moving forward, let’s stop for a moment and see what we want to achieve.</p><p>So, basically, we want to add a <code>mousepressed</code> eventListener to the <code>canvas</code> that will start 'drawing' a shape inside it as long as the <code>mouseIsPressed</code>.</p><p>We’ll create an array of points which we’re going to use to create a <code>path</code> (or a shape) using the <a href="http://p5js.org/reference/#/p5/beginShape" rel="noopener">beginShape</a> and <a href="http://p5js.org/reference/#/p5/endShape" rel="noopener">endShape</a> methods to draw this shape inside the canvas. The shape is going to be constructed by connecting a series of vertices (see <a href="http://p5js.org/reference/#/p5/vertex" rel="noopener">vertex</a> for more information).</p><p>As we want this shape to be <em>re-drawn</em> every time, we’ll put this code inside the <code>draw</code> method:</p><pre><code class="language-js">const path = [];
function draw() {
// disabled filling geometry - p5js function
noFill();
if (mouseIsPressed) {
// Store the location of the mouse
const point = {
x: mouseX,
y: mouseY
};
path.push(point);
}
beginShape();
path.forEach(point =&gt; {
// create a vertex at the specified location
vertex(point.x, point.y);
});
endShape();
}</code></pre><p>As you can see, p5js has a <a href="http://p5js.org/reference/#/p5/mouseIsPressed" rel="noopener">mouseIsPressed</a> flag that we can use to detect when the mouse buttons are pressed.</p><p>Everything might look good so far, but there is a <strong>big</strong> issue. Once the mouse button is released and we try to draw another shape, the last point from the previous shape will be connected to the first point of the new shape. This is definitely not what we want, so we need to change our approach a little bit.</p><p>Instead of having one array of points (the path array), we’ll create a <code>pathsarray</code> and we are going to store all the <code>paths</code> inside it. Basically, we’ll have a double array with points. Also, for this, we will need to keep track of the <code>currentPath</code> while the mouse is still pressed. We’ll reset this array once the mouse button is pressed again. Confusing? ? Let’s see the code and I bet that it will become clearer:</p><pre><code class="language-js">const paths = [];
let currentPath = [];
function draw() {
noFill();
if (mouseIsPressed) {
const point = {
x: mouseX,
y: mouseY
};
// Adding the point to the `currentPath` array
currentPath.push(point);
}
// Looping over all the paths and drawing all the points inside them
paths.forEach(path =&gt; {
beginShape();
path.forEach(point =&gt; {
stroke(point.color);
strokeWeight(point.weight);
vertex(point.x, point.y);
});
endShape();
});
}
// When the mouse is pressed, this even will fire
function mousePressed() {
// Clean up the currentPath
currentPath = [];
// Push the path inside the `paths` array
paths.push(currentPath);
}</code></pre><p>I also added some comments in the code above, make sure you check them out.</p><p>The <a href="http://p5js.org/reference/#/p5/mousePressed" rel="noopener">mousePressed</a> <em>function is called once after every time a mouse button is pressed</em> — p5js stuff! ?</p><p>Great! Now we can draw individual shapes in our canvas! ?</p><p>The last thing to do is to <em>hook</em> up those buttons that we created in the HTML and use the values that are inside them to style the shape:</p><pre><code class="language-js">const colorInput = document.getElementById('color');
const weight = document.getElementById('weight');
const clear = document.getElementById('clear');
function draw() {
noFill();
if (mouseIsPressed) {
const point = {
x: mouseX,
y: mouseY,
// storing the color and weights provided by the inputs for each point
color: colorInput.value,
weight: weight.value
};
currentPath.push(point);
}
paths.forEach(path =&gt; {
beginShape();
path.forEach(point =&gt; {
// using the color and the weight to style the stroke
stroke(point.color);
strokeWeight(point.weight);
vertex(point.x, point.y);
});
endShape();
});
}
clear.addEventListener('click', () =&gt; {
// Remove all the paths
paths.splice(0);
// Clear the background
background(255);
});</code></pre><p>And with this, we have finished our little application! Yay! ?</p><h3 id="the-entire-js-code">The entire JS code</h3><pre><code class="language-js">const colorInput = document.getElementById('color');
const weight = document.getElementById('weight');
const clear = document.getElementById('clear');
const paths = [];
let currentPath = [];
function setup() {
createCanvas(window.innerWidth, window.innerHeight);
background(255);
}
function draw() {
noFill();
if (mouseIsPressed) {
const point = {
x: mouseX,
y: mouseY,
color: colorInput.value,
weight: weight.value
};
currentPath.push(point);
}
paths.forEach(path =&gt; {
beginShape();
path.forEach(point =&gt; {
stroke(point.color);
strokeWeight(point.weight);
vertex(point.x, point.y);
});
endShape();
});
}
function mousePressed() {
currentPath = [];
paths.push(currentPath);
}
clear.addEventListener('click', () =&gt; {
paths.splice(0);
background(255);
});</code></pre><p>Also, make sure that you import the <code>p5js</code> file in your html too before importing this <code>js</code> file.</p><h3 id="conclusion">Conclusion</h3><p>I hope that you liked this drawing app that we’ve built. There are a bunch of functionalities that could be added to this app and I challenge you to let your creative mind to come up with new ideas! ?</p><p>What if you could save the drawing as an image (<code>.png</code> or <code>.jpg</code>)? ? (you can do this with the p5js library).</p><p>As of now, we are only checking the <code>mouse</code> events. Maybe you could make it work on mobile, too, by figuring out the <code>touch</code> events? The sky is the limit with the amount of functionalities that could be added to this app!</p><p>I’d love to see what you are going to build! Tweet me <a href="https://twitter.com/florinpop1705" rel="noopener">@florinpop1705</a> with your creation!</p><p>You might also like one of the other challenges from the Weekly Coding Challenge program. Check them out <a href="https://www.florin-pop.com/blog/2019/03/weekly-coding-challenge/" rel="noopener">here</a>.</p><p>See ya next time! Happy Coding! ?</p><p><em>Originally published at <a href="https://www.florin-pop.com/blog/2019/04/drawing-app-built-with-p5js/" rel="noopener">www.florin-pop.com</a>.</em></p>
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
