---
card: "/images/default.jpg"
tags: [JavaScript]
description: Have you ever wondered how you can create a realistic air blo
author: "Milad E. Fahmy"
title: "How to Create an Air Blowing Effect with JavaScript"
created: "2021-08-15T19:29:06+02:00"
modified: "2021-08-15T19:29:06+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-animations ">
<header class="post-full-header">
<h1 class="post-full-title">How to Create an Air Blowing Effect with JavaScript</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/07/ball-blower-image.png 300w,
/news/content/images/size/w600/2020/07/ball-blower-image.png 600w,
/news/content/images/size/w1000/2020/07/ball-blower-image.png 1000w,
/news/content/images/size/w2000/2020/07/ball-blower-image.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/07/ball-blower-image.png" alt="How to Create an Air Blowing Effect with JavaScript">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Have you ever wondered how you can create a realistic air blowing effect with JavaScript? Like the one shown on the evening TV shows, where multiple balls are being mixed up in a sphere-like object by leveraging air pressure? If you want to find out how it's done, read on.</p>
<p>✨ If you want to skip the reading and jump straight to the code, you will find it <a href="https://github.com/mihailgaberov/bingo-blower">here</a>. Also, I have deployed a <a href="https://tender-hoover-fdc559.netlify.app/">live demo here</a>.✨</p>
<h2 id="research">Research</h2>
<p>Recently I have decided to refurbish something old that I did 4 years ago for a <a href="https://github.com/mihailgaberov/bingo/">project of mine</a>. Here is how it looked:</p>
<figcaption>Bingo Blower</figcaption>
</figure>
<p>At that time I chose to use a library called <a href="http://paperjs.org/">Paperjs</a>. Back then this library let me build the closest thing to what I wanted to achieve. </p>
<p>As it turns out, there are many more JavaScript libraries today that let you do animations with or without physics. </p>
<p>Before making my final choice, which you will see below, I played around with <a href="https://animejs.com/">Anime.js</a>, <a href="http://velocityjs.org/">Velocity.js</a>, <a href="https://popmotion.io/pure/">Popmotion</a>, <a href="https://threejs.org/">Three.js</a>, <a href="https://greensock.com/gsap/">GreenSock JS</a>, <a href="https://mojs.github.io/">Mo.js</a> and <a href="https://brm.io/matter-js/">Matter.js</a>. All of them have pluses and minuses, and as with everything else, your choice between them depends on the specific needs you might have. I chose Matter.js.</p>
<h2 id="meet-matter-js">Meet Matter.js</h2>
<p>Matter.js is a 2d rigid body JavaScript physics engine. Sounds complex, but it's not. What this actually means is that this library contains all the stuff we need to create realistic 2d physics animations with JavaScript. </p>
<p>For detailed information on what Matter.js has to offer, you might check their <a href="https://brm.io/matter-js/docs/">documentation</a>. In our case, we will take advantage mainly of the <a href="https://brm.io/matter-js/docs/classes/Body.html">Body module</a> and the features it has. Let's see how in the next section.</p>
<h2 id="balls-and-tube">Balls and Tube</h2>
<p>The "tube" component is easy. It's just a background <a href="https://github.com/mihailgaberov/bingo-blower/blob/master/static/images/blower.png">image</a> I am using to create an illusion that the balls are flying around inside a sphere-like glass object. </p>
<p>The interesting part is the code to create the animations and detect the collisions between the balls and the walls. But let's go step by step. </p>
<p>As I said, the "tube" is a background image I've added via the simple CSS <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/background">background property</a>. Let's see the balls themselves. For them I had two choices - try to draw circles in canvas and make them look like balls or use simple images. I chose the latter option, as I wanted to have a more realistic view of the balls. </p>
<p>So, with the help of a graphic processing program, a friend of mine created <a href="https://github.com/mihailgaberov/bingo-blower/tree/master/static/images">75 images</a> for me, one for each ball. </p>
<p>Having all the assets we need, we are now ready to go deeper and implement some physics with Matter.js.</p>
<h2 id="implement-test-implement-test">Implement, test, implement, test</h2>
<p>Before going into the animation itself, we need to mention few Matter.js specific things. When creating animations with this library, we need to define, at a minimum:<br></p>
<ul>
<li><a href="https://brm.io/matter-js/docs/classes/Engine.html">Matter.Engine</a> - this is the controller that manages updates to the simulation of the world.</li>
<li> <a href="https://brm.io/matter-js/docs/classes/World.html">Matter.World</a> - contains methods for creating and manipulating the world composite.</li>
<li> <a href="https://brm.io/matter-js/docs/classes/Render.html">Matter.Render</a> - this module is a simple HTML5 canvas-based renderer for visualizing instances of <code>Matter.Engine</code>.<br><br>In our example we are also going to use: </li>
<li><a href="https://brm.io/matter-js/docs/classes/Bodies.html">Matter.Bodies</a> for creating the different parts of the scene (the balls, the invisible boundary circle).</li>
<li><a href="https://brm.io/matter-js/docs/classes/Body.html">Matter.Body</a> for applying forces to the bodies and thus creating a nice physics-based simulation of a blower.</li>
<li><a href="https://brm.io/matter-js/docs/classes/Runner.html">Matter.Runner</a> to run the whole thing.</li>
<li><a href="https://brm.io/matter-js/docs/classes/Events.html">Matter.Events</a> gives us ability to have listeners for different events that could happen during the animation. In this specific case we use it for listening for the 'tick' event, which occurs on every render tick. <br>In the event handler function we do our checking for when the balls collide with the walls and we apply the relevant forces to create a bounce effect. <br>We postpone the listening for this event with a 3 second timeout, so we can have a more lotto-like effect. Imagine a sphere where the balls are starting to move when, let's say, a button is pressed.</li>
</ul>
<h2 id="try-and-play">Try and Play</h2>
<p>In the beginning of this article I posted the link to the <a href="https://github.com/mihailgaberov/bingo-blower">GitHub repository</a> with the code and the assets in it. If you want to play more, you can easily check it out and try different modifications. You might want to play with the forces being applied, or the size of the balls, and so on. </p>
<p>There is plenty of room for experimenting when we talk about Physics. And it's always fun, especially when we add animations to the picture.</p>
<h2 id="conclusion">Conclusion</h2>
<p>As it turns out, <a href="https://brm.io/matter-js/index.html">Matter.js</a> is a great library for doing 2d realistic animations backed up by the laws of Physics. Of course, there are other options you might choose from, but as I said, this is a matter of choice and project needs. </p>
<p>I personally would recommend at least giving it a try and see for yourself. For someone with Flash experience or similar, Matter.js is definitely easy to start with. And if you are stubborn enough to keep trying different settings, you might achieve incredible results.</p>
<h2 id="resources">Resources</h2>
<p>https://brm.io/matter-js/ - The website of the library<br><a href="https://burakkanber.com/blog/modeling-physics-in-javascript-introduction/">https://burakkanber.com/blog/modeling-physics-in-javascript-introduction/</a> - interesting and well explained articles related to physics in JavaScript<br><a href="https://spicyyoghurt.com/tutorials/html5-javascript-game-development/collision-detection-physics/">https://spicyyoghurt.com/tutorials/html5-javascript-game-development/collision-detection-physics/</a> - collisions detection tutorial<br><a href="https://codepen.io/AlexRA96/full/egaxVV">https://codepen.io/AlexRA96/full/egaxVV</a> - bouncing ball example<br><a href="https://codepen.io/Shokeen/pen/WjKmMG?editors=1010">https://codepen.io/Shokeen/pen/WjKmMG?editors=1010</a> - codepen example with applying forces<br><a href="https://code.tutsplus.com/tutorials/getting-started-with-matterjs-body-module--cms-28835">https://code.tutsplus.com/tutorials/getting-started-with-matterjs-body-module--cms-28835</a> - beginner tutorial to get you started with Matter.js<br><a href="https://codepen.io/jh3y/pen/gOPmMyO?editors=0110">https://codepen.io/jh3y/pen/gOPmMyO?editors=0110</a> - another cool example with falling bears<br><a href="https://codepen.io/danielgivens/pen/geKrRx">https://codepen.io/danielgivens/pen/geKrRx</a> - even cooler example with a circle clock and particles inside<br><a href="https://codepen.io/dotcli/pen/NEXrQe">https://codepen.io/dotcli/pen/NEXrQe</a> - another example of circle bounds and particles (socks!) inside</p>
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
