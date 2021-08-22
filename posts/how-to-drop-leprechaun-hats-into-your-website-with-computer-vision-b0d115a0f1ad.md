---
card: "https://cdn-media-1.freecodecamp.org/images/1*kfqTx__agnemI2s0kRd3rw.gif"
tags: [CSS]
description: In this tutorial, we will go over how to drop a leprechaun ha
author: "Milad E. Fahmy"
title: "how to drop LEPRECHAUN-HATS into your website with COMPUTER VISION"
created: "2021-08-15T19:36:25+02:00"
modified: "2021-08-15T19:36:25+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-css tag-javascript tag-ux tag-tech tag-computer-vision ">
<header class="post-full-header">
<h1 class="post-full-title">how to drop LEPRECHAUN-HATS into your website with COMPUTER VISION</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*kfqTx__agnemI2s0kRd3rw.gif 300w,
https://cdn-media-1.freecodecamp.org/images/1*kfqTx__agnemI2s0kRd3rw.gif 600w,
https://cdn-media-1.freecodecamp.org/images/1*kfqTx__agnemI2s0kRd3rw.gif 1000w,
https://cdn-media-1.freecodecamp.org/images/1*kfqTx__agnemI2s0kRd3rw.gif 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*kfqTx__agnemI2s0kRd3rw.gif" alt="how to drop LEPRECHAUN-HATS into your website with COMPUTER VISION">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<h4 id="automatically-leprechaun-hat-people-on-your-website-for-st-patrick-s-day-">Automatically leprechaun-hat people on your website for St. Patrick’s Day.</h4>
<blockquote><strong>!!! — WARNING — !!!</strong></blockquote>
<blockquote>Giving a person a green hat can be considered <a href="https://mspoweruser.com/microsoft-removes-green-hat-from-vs-2019-installer-after-offending-users-in-china/" rel="noopener"><strong>OFFENSIVE</strong></a> to some Chinese people, as it has the same meaning as cheating in a relationship. So use this <strong>CAREFULLY</strong> when you are serving a Chinese user base.</blockquote>
<blockquote><strong>!!! — WARNING — !!!</strong></blockquote>
<p>In this tutorial, we will go over how to drop a leprechaun hat onto your website images that contain people. The process will be done through the aid of some <strong>Computer Vision</strong> frameworks, so it will be the same amount of work even if you have millions of portraits to go through. A demo can be found <a href="https://shenhuang.github.io/demo_projects/tracking.js-master/TEAM%20MEMBERS%20_%20Teamwebsite.html" rel="noopener nofollow"><strong><strong>here</strong></strong></a> thanks to the permission from my teammates.</p>
<p>This tutorial is for more advanced audiences. I am assuming you can figure out a lot of the fundamentals on your own. I have also made some tutorials for total beginners, which I have attached in the end as links.</p>
<figcaption>Leprechaun Hats Fall on top of Heads in Portraits</figcaption>
</figure>
<h3 id="1-initial-setup">1. Initial Setup</h3>
<p>Before we start this tutorial, we need to first perform some setup.</p>
<p>First of all, we are using <strong>tracking.js</strong> to help us in this project, and therefore, we need to download and extract the necessary files for <strong>tracking.js</strong> from <a href="https://github.com/eduardolundgren/tracking.js/archive/master.zip" rel="noopener nofollow"><strong><strong>here</strong></strong></a>.</p>
<p>For this tutorial, we start with a template website I snatched from our team <strong>WiX</strong> which is a <strong>Content Management System (CMS)</strong> allowing you to build websites with much less effort. The template can be downloaded from <a href="https://github.com/shenhuang/shenhuang.github.io/raw/master/tracking.js-master/site_template.zip" rel="noopener"><strong>here</strong></a>. Extract the files into the “tracking.js-master” folder from previous step.</p>
<p>In order to make everything work, we also need a server. We will be using a simple Python server for this tutorial. In case you do not have Python or Homebrew (which helps to install Python), you can use the following bash commands to install them.</p>
<p>Installing Homebrew:</p><pre><code>/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"</code></pre>
<p>Installing Python:</p><pre><code>brew install python</code></pre>
<p>Now that everything is ready, we will run the command below under our “tracking.js-master” to start the Python server.</p><pre><code>python -m SimpleHTTPServer</code></pre>
<p>To test, go to this <a href="http://localhost:8000/examples/face_hello_world.html" rel="noopener"><strong>link</strong></a> of your local host to see an example page. You should also be able to view the extracted example page from <a href="http://localhost:8000/TEAM%20MEMBERS%20_%20Teamwebsite.html" rel="noopener"><strong>here</strong></a>. And that is all you have to do for the setup.</p>
<figcaption>Setting up a simple Python server.</figcaption>
</figure>
<h3 id="2-creating-the-hat">2. Creating the hat</h3>
<p>Different from my other tutorials, we will be using an online image for this tutorial rather than trying to recreate everything with <strong>CSS</strong>.</p>
<p>I found a leprechaun hat from <strong>kisspng</strong> and it can be found <a href="https://github.com/shenhuang/shenhuang.github.io/raw/master/tracking.js-master/leprechaunhat_kisspng.png" rel="noopener"><strong>here</strong></a>. Save the image to the root folder of our website. By appending the following code to the end above the <code>&lt;/ht</code>ml&gt;, we should be able to view the image in our example website after save and reload.</p><pre><code>&lt;body&gt;
&lt;img id = "hat" class = "leprechaunhat" src = "./leprechaunhat_kisspng.png" &gt;
&lt;/body&gt;</code></pre>
<figcaption>Hat Image Appended to the Bottom of the Website</figcaption>
</figure>
<p>Now we have to design a drop animation with CSS, and put the code above the hat declaration. The code basically allows the hat to drop down and then shake a little bit.</p><pre><code class="language-html">&lt;style&gt;
@keyframes shake {
0% {
transform : translateY(-30px);
}
40% {
transform : rotate(10deg);
}
60% {
transform : rotate(-10deg);
}
80% {
transform : rotate(10deg);
}
100% {
transform : rotate(0deg);
}
}
.leprechaunhat {
animation : shake 1s ease-in;
}
&lt;/style&gt;</code></pre>
<figcaption>Hat drop animation.</figcaption>
</figure>
<h3 id="3-drop-hats-onto-portraits">3. Drop hats onto portraits</h3>
<p>Now we will go over dropping hats precisely onto portraits. First we have to reference the JavaScript files from “tracking.js” with the following code.</p><pre><code class="language-html">&lt;script src = "build/tracking-min.js" type = "text/javascript" &gt;&lt;/script&gt;
&lt;script src = "build/data/face-min.js" type = "text/javascript" &gt;&lt;/script&gt;</code></pre>
<p>The code provides us a <code>Tracker</code> class which we can feed images into. Then we can listen for a response indicating a rectangle outlining the faces inside the image.</p>
<figcaption>Tracker Explained</figcaption>
</figure>
<p>We start by defining a function that executes when the page is loaded. This function can be attached to anywhere else if necessary. The <code>yOffsetValue</code> is an offset aligning the hat into a more appropriate position.</p><pre><code class="language-js">const yOffsetValue = 10;
window.onload = function() {
};</code></pre>
<p>Inside, we define our hat creation function, allowing it to create hats with arbitrary sizes and positions.</p><pre><code class="language-js">function placeHat(x, y, w, h, image, count) {
hats[count] = hat.cloneNode(true);
hats[count].style.display = "inline";
hats[count].style.position = "absolute";
hats[count].style.left = x + "px";
hats[count].style.top = y + "px";
hats[count].style.width = w + "px";
hats[count].style.height = h + "px";
image.parentNode.parentNode.appendChild(hats[count]);
}</code></pre>
<p>We should also twist our image declaration script a little bit to make it hide the image, as we are now showing it with JavaScript.</p><pre><code class="language-html">&lt;img id = "hat" class = "leprechaunhat" src = "./leprechaunhat_kisspng.png" style = "display : none" &gt;</code></pre>
<p>Then we add the following code to create the hats on top of faces, with the size matching the face.</p><pre><code class="language-js">var hat = document.getElementById("hat");
var images = document.getElementsByTagName('img');
var trackers = [];
var hats = [];
for(i = 0; i &lt; images.length; i++)
{
(function(img)
{
trackers[i] = new tracking.ObjectTracker('face');
tracking.track(img, trackers[i]);
trackers[i].on('track', function(event) {
event.data.forEach(function(rect) {
var bcr = img.getBoundingClientRect();
placeHat(rect.x, rect.y + yOffsetValue - rect.height, rect.width, rect.height, img, i);
});
});
})(images[i]);
}</code></pre>
<p>Now, while our Python server is still running, calling the following address should show us leprechaun hats dropping onto portraits.</p><pre><code>http://localhost:8000/TEAM%20MEMBERS%20_%20Teamwebsite.html</code></pre>
<figcaption>Leprechaun hat drop demo</figcaption>
</figure>
<p>Congratulations! You just learned how to drop leprechaun hats onto all the portraits on a website with computer vision. Wish you, your friends, and your audiences a great St. Patricks Day!!!</p>
<h3 id="in-the-end">In the end</h3>
<p>I have linked some of previous guides below on similar projects. I believe there are certain trends in front end design. Despite the newly emerging .js frameworks and ES updates, Computer Animations and Artificial Intelligence can do wonders in the future for front end, improving user experience with elegancy and efficiency.</p>
<p><strong>Beginner:</strong></p>
<ul>
<li><a href="https://medium.com/front-end-weekly/how-to-fill-your-website-with-lovely-valentines-hearts-d30fe66d58eb" rel="noopener">how to fill your website with lovely VALENTINES HEARTS</a></li>
<li><a href="https://medium.com/front-end-weekly/how-to-add-some-fireworks-to-your-website-18b594b06cca" rel="noopener">how to add some FIREWORKS to your website</a></li>
<li><a href="https://medium.com/front-end-weekly/how-to-add-some-bubbles-to-your-website-8c51b8b72944" rel="noopener">how to add some BUBBLES to your website</a></li>
</ul>
<p><strong>Advanced:</strong></p>
<ul>
<li><a href="https://medium.freecodecamp.org/how-to-create-beautiful-lanterns-that-arrange-themselves-into-words-da01ae98238" rel="noopener">how to create beautiful LANTERNS that ARRANGE THEMSELVES into words</a></li>
</ul>
<p>I am passionate about coding and would love to learn new stuff. I believe knowledge can make the world a better place and therefore am self-motivated to share. Let me know if you are interested in reading anything in particular.</p>
<p>If you are looking for the source code of this project, they can be found <a href="https://github.com/shenhuang/shenhuang.github.io/tree/master/tracking.js-master" rel="noopener"><strong>here</strong></a>. Thanks again for my teammates who allowed me to use their portraits for this project and <strong>be wary before using this on a website with a Chinese user base</strong>.</p>
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
