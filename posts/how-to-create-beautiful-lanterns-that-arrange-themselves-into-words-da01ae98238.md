---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9ca518740569d1a4ca670f.jpg"
tags: [Algorithms]
description: In this tutorial, we will go through how to create a group of
author: "Milad E. Fahmy"
title: "how to create beautiful LANTERNS that ARRANGE THEMSELVES into words"
created: "2021-08-15T19:36:55+02:00"
modified: "2021-08-15T19:36:55+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-algorithms tag-css tag-javascript tag-ux tag-tech ">
<header class="post-full-header">
<h1 class="post-full-title">how to create beautiful LANTERNS that ARRANGE THEMSELVES into words</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9ca518740569d1a4ca670f.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9ca518740569d1a4ca670f.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9ca518740569d1a4ca670f.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9ca518740569d1a4ca670f.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9ca518740569d1a4ca670f.jpg" alt="how to create beautiful LANTERNS that ARRANGE THEMSELVES into words">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>In this tutorial, we will go through how to create a group of festival lanterns that arrange themselves into the words you choose. An online demo can be found <a href="https://shenhuang.github.io/demo_projects/lanterndemo.html" rel="noopener nofollow">here</a>.</p>
<p>This tutorial is a little bit more advanced than my previous tutorials. I am going to assume you can figure out a lot of the rudimentary things on your own. I have also made some tutorials for total beginners, which I have attached in the end as links.</p>
<figcaption>Festival Lanterns Arrange into the Words You Like</figcaption>
</figure>
<h3 id="introduction">Introduction</h3>
<p>Since this tutorial is a bit longer, we will go over what you are about to read. First, we will go through how to design a breathing lantern with CSS. After that, we will learn how to dynamically create lanterns through JavaScript. Then we will learn how to create the input box and how to decipher the input text. After that, we will go over some algorithms that arrange the lanterns appropriately. Finally, we will learn about how to animate the lanterns.</p>
<p>Enough said, let’s get started! Before you start you will need a website. If you do not wish to use one of your own, you can copy the code below and save it as an .<strong>html</strong> file.</p><pre><code class="language-html">&lt;!--Copyright to Shen Huang, you can reach me out at shenhuang@live.ca--&gt;
&lt;!DOCTYPE html&gt;
&lt;meta name = "viewport" content = "width = device-width, initial-scale = 1.0"&gt;
&lt;html&gt;
&lt;head&gt;
&lt;title&gt;LANTERN DEMO&lt;/title&gt;
&lt;style&gt;
body {
background-color : #190f00;
}
&lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;/body&gt;
&lt;script&gt;
&lt;/script&gt;
&lt;/html&gt;</code></pre>
<h3 id="1-designing-the-lanterns">1. Designing the Lanterns</h3>
<p>We will be using CSS to define the shapes and animations for the lanterns, and then construct them inside the HTML body to test our results.</p>
<p>The lantern consists of 3 parts:</p>
<ul>
<li>The <strong>Outer Light</strong></li>
<li>The <strong>Lantern Body</strong></li>
<li>The <strong>Inner Light</strong></li>
</ul>
<p>The <strong>Outer Light</strong> is placed behind the <strong>Lantern Body</strong>, and the <strong>Inner Light</strong> is placed in front of the <strong>Lantern Body</strong>. These 3 elements are placed within an invisible <strong>Lantern</strong> object, which is responsible for the shaking left and right animations.</p>
<figcaption>Outer Light, Lantern Body &amp; Inner Light</figcaption>
</figure>
<h4 id="1-1-lantern"><strong>1.1 Lantern</strong></h4>
<p>The <strong>Lantern</strong> object is essentially an invisible object with the same size as the <strong>Lantern Body</strong>. It has a pivot at the top center, defining the center of rotation of the pendulum movement. The following CSS code defines the <strong>Lantern</strong>.</p><pre><code class="language-css">@keyframes shake {
0% {
transform : rotate(10deg) scale(1);
}
50% {
transform : rotate(-10deg) scale(1);
}
100% {
transform : rotate(10deg) scale(1);
}
}
.lantern {
z-index : 999;
position : absolute;
height : 70px;
width : 50px;
transform-origin : top center;
animation : shake 4s ease-in-out infinite;
}</code></pre>
<figcaption>Lantern &amp; Rotational Pivot</figcaption>
</figure>
<h4 id="1-2-outer-light"><strong>1.2 Outer Light</strong></h4>
<p>The <strong>Outer Light</strong> is actually a radial gradient from a bright color to transparency. The animations scale its size to make it breathe. The <strong>Outer Light</strong> can be defined by the following code:</p><pre><code class="language-css">@keyframes outerlightbreathe {
0% {
height : 100px;
width : 100px;
top : -10px;
left : -20px;
}
50% {
height : 200px;
width : 200px;
top : -60px;
left : -70px;
}
100% {
height : 100px;
width : 100px;
top : -10px;
left : -20px;
}
}
.outerLight {
z-index : -1;
position : absolute;
background-image:
radial-gradient(rgba(117, 107, 60, 1.0), rgba(117, 107, 60, 0.0), rgba(117, 107, 60, 0.0));
opacity : 0.5;
border-radius : 50%;
animation : outerlightbreathe 3s ease-in-out infinite;
}</code></pre>
<h4 id="1-3-lantern-body"><strong>1.3 Lantern Body</strong></h4>
<p>The <strong>Lantern Body</strong> is a rectangle with a rounded border, with heavier rounding on the bottom. The <strong>Lantern Body</strong> can be defined by the following code:</p><pre><code class="language-css">.lanternBody {
position : absolute;
background-color : #756b3c;
height : 70px;
width : 50px;
border-radius : 15px 15px 25px 25px;
}</code></pre>
<h4 id="1-4-inner-light"><strong>1.4 Inner Light</strong></h4>
<p>The <strong>Inner Light</strong>, similar to the <strong>Outer Light</strong>, is also a radial gradient from a bright color to transparency, but with a larger bright portion. The animation also chops off the light when it reaches a certain size to make it look like the light is contained by the <strong>Lantern Body</strong>. The code defining the <strong>Inner Light</strong> can be found below:</p><pre><code class="language-css">@keyframes innerlightbreathe {
0% {
height : 30px;
width : 30px;
opacity : 0.1;
top : 35px;
left : 10px;
}
20% {
clip-path : inset(0px 0px 0px 0px);
}
50% {
height : 60px;
width : 60px;
opacity : 0.5;
top : 5px;
left : -5px;
clip-path : inset(0px 5px 0px 5px);
}
80% {
clip-path : inset(0px 0px 0px 0px);
}
100% {
height : 30px;
width : 30px;
opacity : 0.1;
top : 35px;
left : 10px;
}
}
.innerLight {
position : absolute;
background-image:
radial-gradient(rgba(255, 241, 181, 1.0), rgba(255, 241, 181, 1.0), rgba(255, 241, 181, 0.0));
border-radius : 50%;
animation : innerlightbreathe 3s ease-in-out infinite;
}</code></pre>
<h4 id="1-5-lantern-construction"><strong>1.5 Lantern Construction</strong></h4>
<p>To test our result, we can use the following CSS and HTML code to build a lantern at the center of our HTML page.</p>
<p>CSS:</p><pre><code class="language-css">center {
position : absolute;
top : 50%;
left : 50%;
}</code></pre>
<p>HTML:</p><pre><code class="language-html">&lt;center&gt;
&lt;div class = "lantern"&gt;
&lt;div class = "outerLight"&gt;&lt;/div&gt;
&lt;div class = "lanternBody"&gt;
&lt;div class = "innerLight"&gt;&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/center&gt;</code></pre>
<p>A complete demonstration can be found in the CODEPEN below.</p>
<h3 id="2-creating-the-lanterns">2. Creating the Lanterns</h3>
<p>Since we’ve learned how to draw and animate a lantern, we can now move onto the JavaScript that creates the lanterns dynamically. In the end of this section, we will also go over how to arrange the lanterns into words.</p>
<h4 id="2-1-lantern-creation-with-java-script">2.1 Lantern Creation with Java Script</h4>
<p>Before we start, we should also change the scale in our lantern animation to make it half as large. The size was okay when trying to show you how a single lantern is constructed, but too large when we want to show batches of them.</p><pre><code class="language-css">@keyframes shake {
0% {
transform : rotate(10deg) scale(0.5);
}
50% {
transform : rotate(-10deg) scale(0.5);
}
100% {
transform : rotate(10deg) scale(0.5);
}
}</code></pre>
<p>Then we can use the following code to dynamically generate lanterns. The <strong>brd</strong> is just a place holder in case we want to integrate it to other websites. The code creates the lantern in the same sequence of the HTML script we used. There are many other variables inside this code, which will make sense in the upcoming sections.</p><pre><code class="language-js">var brd = document.createElement("DIV");
document.body.insertBefore(brd, document.getElementById("board"));
const speed = 0.5;
const fadeInTime = 3000;
const fadeOutTime = 3000;
var lanterns = [];
function generateLantern(x, y)
{
var lantern = document.createElement("DIV");
var ltrBdy = document.createElement("DIV");
var otrLit = document.createElement("DIV");
var inrLit = document.createElement("DIV");
lantern.setAttribute('class', 'lantern');
ltrBdy.setAttribute('class', 'lanternBody');
otrLit.setAttribute('class', 'outerLight');
inrLit.setAttribute('class', 'innerLight');
ltrBdy.appendChild(inrLit);
lantern.appendChild(ltrBdy);
lantern.appendChild(otrLit);
brd.appendChild(lantern);
lantern.FIT = fadeInTime;
lantern.FOT = fadeOutTime;
lantern.style.opacity = 1.0;
// 0: ALIVE, 1: DEAD.
lantern.state = 0;
lantern.x = x;
lantern.y = y;
lantern.bounce = 0;
lantern.destination = [];
lantern.destination.x = x;
lantern.destination.y = y;
lantern.arrived = true;
lantern.style.left = lantern.x + "px";
lantern.style.top = lantern.y + "px";
if(lanterns == null)
lanterns = [];
lanterns.push(lantern);
return lantern;
}</code></pre>
<p>We can test this code with the following code, which should generate a lantern at <strong>x:100</strong>, <strong>y:100</strong>.</p><pre><code>generateLantern(100, 100);</code></pre>
<h4 id="2-2-word-map-for-lanterns">2.2 Word Map for Lanterns</h4>
<p>Now in order for the lanterns to display a particular word, we will need a map for each alphabet. A lantern word map can be found in this <a href="https://gist.github.com/shenhuang/f88d33c2dc85c7e09ee02bc17b3e86c4" rel="noopener">GitHub Gist</a>, which will not be shown here because of the size.</p>
<p>Once done, you can test to see if the word map worked with the code below, which draws the word “LOVE”.</p><pre><code class="language-js">var xstart = 50;
var ystart = 100;
var xspace = 50;
var yspace = 50;
var letter = "L";
for(i = 0; i &lt; ltrMap[letter][0].length; i++)
{
for(j = 0; j &lt; ltrMap[letter].length; j++)
{
if(ltrMap[letter][j][i] == 1)
{
generateLantern(xstart + i * xspace, ystart + j * yspace);
}
}
}
var xstart = 350;
var letter = "O";
for(i = 0; i &lt; ltrMap[letter][0].length; i++)
{
for(j = 0; j &lt; ltrMap[letter].length; j++)
{
if(ltrMap[letter][j][i] == 1)
{
generateLantern(xstart + i * xspace, ystart + j * yspace);
}
}
}
var xstart = 650;
var letter = "V";
for(i = 0; i &lt; ltrMap[letter][0].length; i++)
{
for(j = 0; j &lt; ltrMap[letter].length; j++)
{
if(ltrMap[letter][j][i] == 1)
{
generateLantern(xstart + i * xspace, ystart + j * yspace);
}
}
}
var xstart = 950;
var letter = "E";
for(i = 0; i &lt; ltrMap[letter][0].length; i++)
{
for(j = 0; j &lt; ltrMap[letter].length; j++)
{
if(ltrMap[letter][j][i] == 1)
{
generateLantern(xstart + i * xspace, ystart + j * yspace);
}
}
}</code></pre>
<p>Check out the CODEPEN demo below:</p>
<h3 id="3-deciphering-word-inputs">3. Deciphering Word Inputs</h3>
<h4 id="3-1-creating-the-input-box-">3.1 Creating the Input Box.</h4>
<p>The <strong>Input Box</strong> fades in and takes inputs. Once the inputs have been taken, the lanterns should start to arrange. The <strong>Input Box</strong> will fade out until the lanterns are fully arranged. In order to accomplish such an effect, we remove the <strong>Input Box</strong> once it has taken its input and create a <strong>Fake Input Box</strong> at the same location. We then fade out the <strong>Fake Input Box</strong> instead.</p>
<figcaption>Input Box Mechanisms</figcaption>
</figure>
<p>To start, first we define the <strong>Input Box</strong> in HTML, then the style and animations in CSS. For this project our <strong>Input Box</strong> only accepts 5 upper case letters, and the default contents inside is “<strong>LOVE</strong>”.</p>
<p>HTML:</p><pre><code class="language-html">&lt;input  id   = "wordBox"
class  = "wordInput"
type  = "text"
maxlength = "5"
value  = "LOVE"
onkeypress = "return (event.charCode &gt; 64 &amp;&amp; event.charCode &lt; 91)"
&gt;</code></pre>
<p>CSS:</p><pre><code class="language-css">@keyframes fadein {
0% {
opacity : 0.0;
}
100% {
opacity : 1.0;
}
}
@keyframes fadeout {
0% {
opacity : 1.0;
}
50% {
opacity : 0.0;
}
100% {
opacity : 0.0;
}
}
.wordInput, .fakeInput{
position : absolute;
bottom : 25px;
left : 25px;
}
.wordInput {
height : 30px;
width : 100px;
color : #a88600;
font-size : 25px;
font-family : Arial;
text-align : center;
border : 3px;
border-radius : 15px;
border-style : solid;
background-color : #fff9e5;
border-color : #fff9e5;
animation : fadein 1s ease-in;
}
.wordInput:hover,  .wordInput:focus{
border-color : #a88600;
}
.fakeInput {
height : 30px;
width : 100px;
color : #a88600;
font-size : 25px;
font-family : Arial;
text-align : center;
border : 3px;
border-radius : 15px;
border-style : solid;
background-color : #fff9e5;
border-color : #fff9e5;
animation : fadeout 2s ease-out;
}</code></pre>
<p>Now we should be able to see an <strong>Input Box</strong> at the bottom right corner of the webpage. We then use the following JavaScript code to make it take inputs. Once the user changes focus, it creates a <strong>Fake Input Box</strong> with the same input to fade out.</p><pre><code class="language-js">var wordBox = document.getElementById("wordBox");
var word = "";
wordBox.addEventListener("focusout", wordBoxFocusOut);
function wordBoxFocusOut()
{
word = wordBox.value;
var fakeBox = document.createElement("DIV");
fakeBox.setAttribute('class', 'fakeInput');
fakeBox.textContent = word;
wordBox.style.display = "none";
brd.appendChild(fakeBox);
setTimeout(function(){
fakeBox.parentNode.removeChild(fakeBox);
}, 2000);
arrangeLanterns(word);
wordBox.addEventListener("focusout", wordBoxFocusOut);
}</code></pre>
<p>We also need to add the following JavaScript to make it fade out after the <strong>Enter Key</strong> is pressed. The <strong>enterPressed</strong> is there to prevent the script from executing twice.</p><pre><code class="language-js">window.onkeydown = function(e)
{
key = e.keyCode;
if(key == 13)
{
wordBox.blur();
}
};</code></pre>
<p>Once done, we should be able to see an <strong>Input Box</strong> that fades in, and fades out once the <strong>Enter Key</strong> is pressed or the box is out of focus.</p>
<h4 id="3-2-processing-the-input">3.2 Processing the Input</h4>
<p>Now that we have the <strong>Input Box</strong> ready, we should test and see if it can correctly process the input. In order to do so first we append the following code to the end of our <strong>wordBoxFocusOut()</strong> function.</p><pre><code>arrangeLanterns(word);</code></pre>
<p>The we can define our <strong>arrangeLanterns()</strong> function.</p><pre><code class="language-js">function arrangeLanternsChar(char, charCount)
{
for(i = 0; i &lt; ltrMap[char][0].length; i++)
{
for(j = 0; j &lt; ltrMap[char].length; j++)
{
if(ltrMap[char][j][i] == 1)
{
generateLantern(xstart + i * xspace + xsplit * charCount, ystart + j * yspace);
}
}
}
}</code></pre>
<p>Once done, we should be able to see something as shown by the following demo, where a batch of lanterns will be printed to match the input.</p>
<h3 id="4-arranging-the-lanterns">4. Arranging the Lanterns</h3>
<p>Now this part may be a little bit dry. We will not be able to see the effects until we animate the lanterns, and the contents lean towards the theoretical side. But these theories are essential in efficiently creating the cool effects in the end.</p>
<p>We will first go over our problem, and then introduce 2 algorithms that solve the problem in an efficient way. For those who already know, we will be trying to minimize the total distance traveled by the lanterns. In order to do so, we will use a <strong>k-d Tree</strong> and some <strong>Dynamic Programming</strong>.</p>
<h4 id="4-2-shortest-total-distance-calculation">4.2 Shortest Total Distance Calculation</h4>
<p>First of all, we have to define our problem. We have some <strong>destinations</strong> defined by our word inputs, where the lanterns have to end up in those positions to display the word. We would want as many lanterns as <strong>destinations</strong>, and we will be generating them at random locations on the screen. These lanterns will then fly off to the destinations, but we want the total distances traveled by all the lanterns to be minimal. We also want one lantern per <strong>destination</strong>.</p>
<figcaption>Bad Routing, Good Routing &amp; Messed Up Routing Demonstrated</figcaption>
</figure>
<p>In order to accomplish this, we have to alter our code with the following. The code preforms 4 major operations in sequence:</p>
<ol>
<li>Calculate the total number of required lanterns.</li>
<li>Generate additional lanterns at random locations if there are more required lanterns than we have on the field.</li>
<li>Set the destination for each lantern to their closest destination with the help of <strong>k-d Tree</strong>.</li>
<li>Further optimize the destination of each lantern with <strong>Dynamic Programming</strong>.</li>
</ol>
<figcaption>Steps of Setting the Destination for Lanterns Illustrated</figcaption>
</figure>
<p>In order to test our code properly, we will have to comment out the parts that we are not there yet. We will go into the details of the code very soon.</p><pre><code class="language-js">var distance = function(a, b){
return Math.pow(a.x - b.x, 2) +  Math.pow(a.y - b.y, 2);
}
var lanternDesinationTree;
var arrivedCount = 0;
var requiredLanterns = 0;
function arrangeLanterns(word)
{
requiredLanterns = 0;
for(c = 0; c &lt; word.length; c++)
{
requiredLanterns += ltrMap[word[c]].lanternCount;
}
while(lanterns.length &lt; requiredLanterns)
{
generateLantern(window.innerWidth * Math.random(), window.innerHeight * Math.random());
}
lanternDestinationTree = new kdTree([], distance, ["x", "y"]);
for(c = 0; c &lt; word.length; c++)
{
appendLanternDestinations(word[c], c);
}
for(i = 0; i &lt; lanterns.length; i++)
{
if(i &lt; requiredLanterns)
{
var nearest = lanternDestinationTree.nearest(lanterns[i].destination, 1);
lanternDestinationTree.remove(nearest[0][0]);
lanterns[i].destination = nearest[0][0];
lanterns[i].arrived = false;
}
else
{
lanterns[i].state = 1;
}
}
optimizeTotalDistance();
}</code></pre>
<h4 id="4-2-1-k-d-tree">4.2.1 k-d Tree</h4>
<p>In order to find the shortest total distance, we will need something called the <strong>k-d Tree</strong>. <strong>k-d Tree</strong> is a data structure which allows us to map multi-dimensional coordinates and perform actions on them more efficiently. If you are interested in learning about <strong>k-d Trees</strong> and runtime complexity you can find more about them <a href="https://en.wikipedia.org/wiki/K-d_tree" rel="noopener">here</a>.</p>
<figcaption>Visualization of a k-d Tree</figcaption>
</figure>
<p>In order to implement the <strong>k-d Tree</strong>, we will first have to download the <strong>k-d Tree</strong> from <strong>Ubilabs</strong>. The .<strong>js</strong> file can be found <a href="https://github.com/ubilabs/kd-tree-javascript/blob/master/kdTree.js" rel="noopener">here</a> on GitHub and the implementation guides can be found on the main GitHub page <a href="https://github.com/ubilabs/kd-tree-javascript" rel="noopener">here</a>. Once you have it in the same folder with your <strong><em>.</em>html</strong> file, you can reference it with the following HTML scripts:</p><pre><code class="language-html">&lt;script src = "./kdTree.js"  type= "text/javascript" &gt;&lt;/script&gt;</code></pre>
<p>You can then test to see if your <strong>k-d Tree</strong> worked with the following code (the 2 returned nearest points should be printed in the console).</p><pre><code class="language-js">var points = [
{x: 1, y: 2},
{x: 3, y: 4},
{x: 5, y: 6},
{x: 7, y: 8}
];
var distance = function(a, b){
return Math.pow(a.x - b.x, 2) +  Math.pow(a.y - b.y, 2);
}
var tree = new kdTree(points, distance, ["x", "y"]);
var nearest = tree.nearest({ x: 5, y: 5 }, 2);
console.log(nearest);</code></pre>
<figcaption>Testing the k-d Tree</figcaption>
</figure>
<p>And now we can construct our <strong>appendLanternDestinations()</strong> function with the <strong>k-d Tree</strong>.</p><pre><code class="language-js">function appendLanternDestinations(char, charCount)
{
for(i = 0; i &lt; ltrMap[char][0].length; i++)
{
for(j = 0; j &lt; ltrMap[char].length; j++)
{
if(ltrMap[char][j][i] == 1)
{
var destination = {};
destination.x = xstart + i * xspace + xsplit * charCount;
destination.y = ystart + j * yspace;
lanternDestinationTree.insert(destination);
}
}
}
}</code></pre>
<p>To test, we can alter our <strong>arrangeLanterns()</strong> function to add the following code. We should then see the console printing the nearest distance with the <strong>k-d Tree</strong> constructed by our word input.</p><pre><code class="language-js">lanternDestinationTree = new kdTree([], distance, ["x", "y"]);
for(c = 0; c &lt; word.length; c++)
{
appendLanternDestinations(word[c], c);
}
// Test kdTree with Lantern Destinations.
var nearest = lanternDestinationTree.nearest({ x: 200, y: 200 }, 1);
console.log(nearest[0][0]);</code></pre>
<figcaption>Testing appendLanternDestinations()</figcaption>
</figure>
<p>Now the code below the append function sets the destination of each lantern to their nearest available destination. For any extra lanterns, their states are set to 1, meaning that they should fade away by the animation controller which we will get to in the next section.</p>
<h4 id="4-2-2-dynamic-programming">4.2.2 Dynamic Programming</h4>
<p>The <strong>k-d Tree</strong> optimization is good, but not perfect. We will need some <strong>Dynamic Programming</strong> to ensure the algorithm returns the minimal total distance. <strong>Dynamic Programming</strong> is the concept where you try to find the optimized solution by incrementally approaching a better state from a previously stored state.</p>
<p>The algorithm we are using is actually similar to <strong>Bubble Sort</strong>, which can be described by the following:</p>
<ol>
<li>We iterate through every pair of lanterns.</li>
<li>We check to see if swapping the destinations of a pair of lanterns yields a shorter total distance.</li>
<li>We swap their destinations if the total distance is shorter.</li>
<li>For lanterns that are <strong><em>“</em>DEAD<em>”</em></strong>, their distance to destination is considered as 0, swapping makes the other lantern have a 0 distance to destination.</li>
<li>Ends when no more swaps can be done to shorten the distance.</li>
</ol>
<figcaption>Algorithm Illustrated, Incrementally Swap for Shorter Total Distance</figcaption>
</figure>
<p>The code implementation to this algorithm can be found below. We also have to deal with their states and arrival status which will be further explained in the next section. Notice that the distance formula is not square rooted, meaning the algorithm will heavily punish longer distances.</p><pre><code class="language-js">function optimizeTotalDistance()
{
var undone = true;
while(undone)
{
undone = false;
for(i = 0; i &lt; lanterns.length; i++)
{
var lanternA = lanterns[i];
for(j = 0; j &lt; lanterns.length; j++)
{
var lanternB = lanterns[j];
if(lanternA.state == 0 &amp;&amp; lanternB.state == 0)
{
var oldDistance = distance(lanternA, lanternA.destination) + distance(lanternB, lanternB.destination);
var newDistance = distance(lanternA, lanternB.destination) + distance(lanternB, lanternA.destination);
if(newDistance &lt; oldDistance)
{
[lanternA.destination, lanternB.destination] = [lanternB.destination, lanternA.destination];
undone = true;
}
}
else if(lanternA.state == 0 &amp;&amp; lanternB.state == 1)
{
var oldDistance = distance(lanternA, lanternA.destination);
var newDistance = distance(lanternB, lanternA.destination);
if(newDistance &lt; oldDistance)
{
lanternB.destination = {x: lanternA.destination.x, y: lanternA.destination.y};
lanternA.destination = {x: lanternA.x, y: lanternA.y};
lanternA.state = 1;
lanternB.state = 0;
lanternA.arrived = true;
lanternB.arrived = false;
undone = true;
}
}
else if(lanternA.state == 1 &amp;&amp; lanternB.state == 0)
{
var oldDistance = distance(lanternB, lanternB.destination);
var newDistance = distance(lanternA, lanternB.destination);
if(newDistance &lt; oldDistance)
{
lanternA.destination = {x: lanternB.destination.x, y: lanternB.destination.y};
lanternB.destination = {x: lanternB.x, y: lanternB.y};
lanternA.state = 0;
lanternB.state = 1;
lanternA.arrived = false;
lanternB.arrived = true;
undone = true;
}
}
}
}
}
}</code></pre>
<h3 id="5-animating-the-lanterns">5. Animating the Lanterns</h3>
<p>It is finally the last section! We will now complete this project. A lot of the mysteries mentioned in the previous sections will be explained here. Sit tight, the magic show is about to begin.</p>
<h4 id="5-1-fade-in-fade-out-with-javascript">5.1 Fade In &amp; Fade Out with JavaScript</h4>
<p>Now in case you were wondering what the <strong>lantern.FIT</strong> and <strong>lantern.FOT</strong> does in <strong>generateLantern()</strong>, here you go: it actually allows the animation controller to fade in the lanterns after creation, and fades it out after it is <strong><em>“</em>DEAD<em>”</em></strong>.</p>
<p>Now in order to make this happen, we have to first do some script changes, so that the lanterns will be initially transparent.</p>
<p>We need to change:</p><pre><code>lantern.style.opacity = 1.0;</code></pre>
<p>into:</p><pre><code>lantern.style.opacity = 0.0;</code></pre>
<p>After that we can construct our animation controller with the code below. The <strong>spedFctr</strong> defines how fast the lanterns should move. The <strong>arivThsh</strong> defines how tolerant it is for the program to consider the lantern arrived at its destination. The <strong>bonsFctr</strong> defines how fast the lantern should bounce up and down, and <strong>bonsMrgn</strong> defines how wide the bounce is. These parameters will make more sense later.</p>
<p>The animation controller refreshes every 10 milliseconds, resulting in a frame rate of 100fps. Right now, it will slowly decrement the <strong>lantern.FIT</strong> counter and set the opacity accordingly for newly created lanterns. It’ll do the opposite for lanterns that are dead. Once the <strong>lantern.FOT</strong> reaches zero for the dead lanterns, it will be removed permanently.</p>
<figcaption>Fade In &amp; Fade Out Animation Explained</figcaption>
</figure><pre><code class="language-js">const spedFctr = 0.025;
const arivThsh = 5 * spedFctr;
const bonsFctr = 0.001;
const bonsMrgn = 5;
var before = Date.now();
var id = setInterval(frame, 10);
function frame()
{
var current = Date.now();
var deltaTime = current - before;
before = current;
for(i in lanterns)
{
var lantern = lanterns[i];
switch(lantern.state)
{
case 0:
if(lantern.FIT &gt; 0)
{
lantern.FIT -= deltaTime;
lantern.style.opacity = 1 - lantern.FIT / fadeOutTime;
}
break;
case 1:
if(lantern.FOT &gt; 0)
{
lantern.FOT -= deltaTime;
lantern.style.opacity = lantern.FOT / fadeOutTime;
}
else
{
lantern.parentNode.removeChild(lantern);
lanterns.splice(i, 1);
}
break;
}
}
}</code></pre>
<h4 id="5-2-move-animations">5.2 Move Animations</h4>
<p>Now in order to animate the lanterns we append the following code under case 1 inside the for loop of the animation controller. The code basically just slowly increments the position of the lanterns towards their destinations. Once the lanterns reach their destination, it will be marked as arrived and the arrive count will be incremented.</p><pre><code class="language-js">var xDiff = lantern.destination.x - lantern.x;
var yDiff = lantern.destination.y - lantern.y;
var dDiff = Math.sqrt(xDiff * xDiff + yDiff * yDiff);
if(!lantern.arrived)
{
if(Math.abs(dDiff) &lt; arivThsh)
{
lantern.arrived = true;
arrivedCount++;
}
else
{
lantern.x += xDiff / dDiff * spedFctr * deltaTime;
lantern.y += yDiff / dDiff * spedFctr * deltaTime;
}
lantern.style.left = lantern.x + "px";
}
else
{
lantern.bounce += bonsFctr * deltaTime;
}
lantern.style.top = lantern.y + Math.sin(lantern.bounce) * bonsMrgn + "px";</code></pre>
<p>We use the following code to check if all the lanterns have arrived every 0.1 seconds. Once all the lanterns have arrived, we bring back the input field again.</p><pre><code class="language-js">var gr = setInterval(check, 100);
function check()
{
if(arrivedCount == requiredLanterns)
{
wordBox.style.display = "inline";
arrivedCount = 0;
}
}
function check()
{
if(arrivedCount == requiredLanterns)
{
wordBox.style.display = "inline";
arrivedCount = 0;
}
}</code></pre>
<p>Congratulations!!! You have now learned how to create a batch of lanterns that arranges themselves to display the words you like. A demo of the full project can be found <a href="https://shenhuang.github.io/demo_projects/lanterndemo.html" rel="noopener nofollow">here</a>. Hope you have a great Lantern Festival!!!</p>
<figcaption>Hello World for Lantern Demo</figcaption>
</figure>
<h3 id="words-in-the-end">Words In the End</h3>
<p>The Chinese Lantern Festival this year is on February 19th. If you live in a small Chinese town, you would see the festival spirit growing throughout the streets. Back in time, this illuminating festival is actually a Chinese equivalent of Valentine’s Day. Boys and girls go out onto the streets hoping to meet their significant other and send hand-crafted lanterns which are believed to grant wishes in the following time of the year.</p>
<p>I have some previous guides on similar projects.</p>
<p><strong>Beginner:</strong></p>
<ul>
<li><a href="https://medium.com/front-end-weekly/how-to-fill-your-website-with-lovely-valentines-hearts-d30fe66d58eb" rel="noopener">how to fill your website with lovely VALENTINES HEARTS</a></li>
<li><a href="https://medium.com/front-end-weekly/how-to-add-some-fireworks-to-your-website-18b594b06cca" rel="noopener">how to add some FIREWORKS to your website</a></li>
<li><a href="https://medium.com/front-end-weekly/how-to-add-some-bubbles-to-your-website-8c51b8b72944" rel="noopener">how to add some BUBBLES to your website</a></li>
</ul>
<p><strong>Advanced:</strong></p>
<ul>
<li><a href="https://medium.freecodecamp.org/how-to-drop-leprechaun-hats-into-your-website-with-computer-vision-b0d115a0f1ad" rel="noopener">how to drop LEPRECHAUN-HATS into your website with COMPUTER VISION</a></li>
</ul>
<p>I am passionate about coding and would love to learn new stuff. I believe knowledge can make the world a better place and therefore am self-motivated to share. Let me know if you are interested in reading anything in particular.</p>
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
