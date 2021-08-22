---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c9999740569d1a4ca20a6.jpg"
tags: [JavaScript]
description: JavaScript is one of the most popular languages on the web. E
author: "Milad E. Fahmy"
title: "10 Awesome JavaScript Libraries You Should Try Out in 2021"
created: "2021-08-15T19:27:43+02:00"
modified: "2021-08-15T19:27:43+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-libraries tag-productivity ">
<header class="post-full-header">
<h1 class="post-full-title">10 Awesome JavaScript Libraries You Should Try Out in 2021</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c9999740569d1a4ca20a6.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9999740569d1a4ca20a6.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9999740569d1a4ca20a6.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9999740569d1a4ca20a6.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c9999740569d1a4ca20a6.jpg" alt="10 Awesome JavaScript Libraries You Should Try Out in 2021">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>JavaScript is one of the most popular languages on the web. Even though it was initially developed just for web pages, it has seen exponential growth in the past two decades. </p>
<p>Now, JavaScript is capable of doing almost anything and works on several platforms and devices including IoT. And with the recent SpaceX Dragon launch, JavaScript is even in space.</p>
<p>One of the reasons for its popularity is the availability of a large number of frameworks and libraries. They make development much easier compared to traditional Vanilla JS development. </p>
<p>There are libraries for almost anything and more are coming out almost every day. But with so many libraries to choose from it becomes difficult to keep a track of each one and how it might be tailored specifically to your needs. </p>
<p>In this article, we will discuss 10 of the most popular JS libraries which you can use to build your next project.</p>
<h1 id="leaflet"><a href="https://leafletjs.com/">Leaflet</a></h1>
<figcaption>Leaflet</figcaption>
</figure>
<p>I think Leaflet is the best open source library for adding mobile-friendly interactive maps to your application. </p>
<p>Its small size (39kB) makes it a great alternative to consider over other map libraries. With cross-platform efficiency and a well-documented API, it has everything you need to make you fall in love.</p>
<p>Here is some sample code that creates a Leaflet map:</p><pre><code>var map = new L.Map("map", {
center: new L.LatLng(40.7401, -73.9891),
zoom: 12,
layers: new L.TileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png")
});</code></pre>
<p>In Leaflet, we need to provide a tile layer since there isn't one by default. But that also means that can choose from a wide range of layers both free and premium. You can explore various free tile layers <a href="https://leaflet-extras.github.io/leaflet-providers/preview/">here</a>.</p>
<p>Read the <a href="https://leafletjs.com/reference-1.6.0.html">Docs</a> or follow the <a href="https://leafletjs.com/examples.html">Tutorials</a> to learn more.</p>
<h1 id="fullpage-js"><a href="https://alvarotrigo.com/fullPage/">fullPage.js</a></h1>
<p>This open-source library helps you create full-screen scrolling websites as you can see in the above GIF. It's easy to use and has many options to customize, so it's no surprise it is used by thousands of developers and has over 30k stars on GitHub.</p>
<p>Here is a Codepen demo that you can play with:</p>
<p>You can even use it with popular frameworks such as:</p>
<ul>
<li><a href="https://alvarotrigo.com/react-fullpage/">react-fullpage</a></li>
<li><a href="https://alvarotrigo.com/vue-fullpage/">vue-fullpage</a></li>
<li><a href="https://alvarotrigo.com/angular-fullpage/">angular-fullpage</a></li>
</ul>
<p>I came across this library about a year ago and since then it has become one of my favorites. This is one of the few libraries that you can use in almost every project. If you haven't already started using it then just try it, you will not be disappointed.</p>
<h1 id="anime-js"><a href="https://animejs.com/" rel="noreferrer nofollow noopener">anime.js</a></h1>
<figcaption>anime.js</figcaption>
</figure>
<p><br>One of the best animation libraries out there, Anime.js is flexible and simple to use. It is the perfect tool to help you add some really cool animation to your project.</p>
<p>Anime.js works well with CSS properties, SVG, DOM attributes, and JavaScript Objects and can be easily integrated into your applications. </p>
<p>As a developer it's important to have a good portfolio. The first impression people have of your portfolio helps decide whether they will hire you or not. And what better tool than this library to bring life to your portfolio. It will not only enhance your website but will help showcase actual skills.</p>
<p>Check out this Codepen to learn more:</p>
<p>You can also take a look at all the other cool projects on <a href="https://codepen.io/collection/XLebem">Codepen</a> or<a href="https://codepen.io/collection/XLebem"> </a><a href="https://animejs.com/documentation/">Read the Docs here</a>.</p>
<h1 id="screenfull-js"><a href="https://github.com/sindresorhus/screenfull.js">Screenfull.js</a></h1>
<figcaption>screenfull.js</figcaption>
</figure>
<p>I came across this library while searching for a way to implement a full-screen feature in my project. </p>
<p>If you also want to have a full-screen feature, I would recommend using this library instead of <a href="https://developer.mozilla.org/en/DOM/Using_full-screen_mode">Fullscreen API</a> because of its cross-browser efficiency (although it is built on top of that). </p>
<p>It is so small that you won't even notice it – just about 0.7kB gzipped.</p>
<p>Try the <a href="https://sindresorhus.com/screenfull.js">Demo </a>or read the <a href="https://github.com/sindresorhus/screenfull.js">Docs</a> to learn more.</p>
<h1 id="moment-js"><a href="https://momentjs.com/">Moment.js</a></h1>
<figcaption>Moment.js</figcaption>
</figure>
<p>Working with date and time can be a huge pain, especially with API calls, different Time Zones, local languages, and so on. Moment.js can help you solve all those issues whether it is manipulating, validating, parsing, or formatting dates or time. </p>
<p>There are so many cool methods that are really useful for your projects. For example, I used the <code>.fromNow()</code> method in one of my blog projects to show the time the article was published. </p><pre><code class="language-JavaScript">const moment = require('moment');
relativeTimeOfPost = moment([2019, 07, 13]).fromNow();
// a year ago
</code></pre>
<p>Although I don't use it very often, I am a fan of its support for internationalization. For example, we can customize the above result using the <code>.locale()</code> method.</p><pre><code class="language-JavaScript">// French
moment.locale('fr');
relativeTimeOfPostInFrench = moment([2019, 07, 13]).fromNow();
//il y a un an
// Spanish
moment.locale('es');
relativeTimeOfPostInSpanish = moment([2019, 07, 13]).fromNow();
//hace un año</code></pre>
<p></p>
<figcaption>Moment.js Homepage</figcaption>
</figure>
<p>Read the <a href="https://momentjs.com/">Docs here</a>.</p>
<p><strong>Update September 2020:</strong> Moment.js has entered maintenance mode. Read more about it <a href="https://momentjs.com/docs/#/-project-status/">here</a>. You may want to explore alternatives such as <a href="https://day.js.org/">Day.js</a> or <a href="https://date-fns.org/">date-fns</a>.</p>
<h1 id="hammer-js"><a href="http://hammerjs.github.io/">Hammer.js</a></h1>
<p>Hammer.js is a lightweight JavaScript library that lets you add multi-touch gestures to your Web Apps. </p>
<p>I would recommend this library to add some fun to your components. Here is an example to play with. Just run the pen and tap or click on the grey div.</p>
<p>It can recognize gestures made by touch, mouse and pointerEvents. For jQuery users I would recommend using the <a href="http://hammerjs.github.io/jquery-plugin/">jQuery plugin</a>.</p><pre><code>$(element).hammer(options).bind("pan", myPanHandler);</code></pre>
<p>Read the <a href="http://hammerjs.github.io/getting-started/">Docs here</a>.</p>
<h1 id="masonry"><a href="https://masonry.desandro.com/">Masonry</a></h1>
<figcaption>Masonry</figcaption>
</figure>
<p>Masonry is a JavaScript grid layout library. It is super awesome and I use it for many of my projects. It can take your simple grid elements and place them based on the available vertical space, sort of like how contractors fit stones or blocks into a wall.</p>
<p>Here is a simple example to show you the magic in action. Well, not magic exactly, but how the layout changes when you <strong>zoom in </strong>on<strong> </strong>the web page.</p>
<p>And here is the code for the above:</p><pre><code>var elem = document.querySelector('.grid');
var msnry = new Masonry( elem, {
itemSelector: '.grid-item',
columnWidth: 400
});
var msnry = new Masonry( '.grid');
</code></pre>
<p>Here is a cool demo on Codepen:</p>
<p>Check out these Projects </p>
<ul>
<li><a href="https://halcyon-theme.tumblr.com/">https://halcyon-theme.tumblr.com/</a></li>
<li><a href="https://tympanus.net/Development/GridLoadingEffects/index.html">https://tympanus.net/Development/GridLoadingEffects/index.html</a></li>
<li><a href="https://www.erikjo.com/work">https://www.erikjo.com/work</a></li>
</ul>
<h1 id="d3-js"><a href="https://d3js.org/">D3.js</a></h1>
<p>If you are a data-obsessed developer then this library is for you. I have yet to find a library that manipulates data as efficiently and beautifully as D3. With over 92k stars on GitHub, D3 is the favorite data visualization library of many developers.</p>
<p>I recently used D3 to visualize COVID-19 data with React and the <a href="https://github.com/CSSEGISandData/COVID-19">Johns Hopkins CSSE Data Repository on GitHub</a>. It I was a really interesting project, and if you are thinking of doing something similar, I would suggest giving D3.js a try. </p>
<p>Read more about it <a href="https://github.com/d3/d3/wiki">here</a>.</p>
<h1 id="slick"><a href="https://kenwheeler.github.io/slick/">slick</a></h1>
<figcaption>slick</figcaption>
</figure>
<p>Slick is fully responsive, swipe-enabled, infinite looping, and more. As mentioned on the homepage it truly is the last carousel you'll ever need. </p>
<p>I have been using this library for quite a while, and it has saved me so much time. With just a few lines of code, you can add so many features to your carousel.</p><pre><code class="language-JS">$('.autoplay').slick({
slidesToShow: 3,
slidesToScroll: 1,
autoplay: true,
autoplaySpeed: 2000,
});</code></pre>
<figcaption>Autoplay</figcaption>
</figure>
<p>Check out the demos <a href="https://kenwheeler.github.io/slick/">here</a>.</p>
<h1 id="popper-js"><a href="https://popper.js.org/">Popper.js</a></h1>
<figcaption>Popper.js</figcaption>
</figure>
<p>Popper.js is a lightweight ~3 kB JavaScript library with zero dependencies that provides a reliable and extensible positioning engine you can use to ensure all your popper elements are positioned in the right place. </p>
<p>It may not seem important to spend time configuring popper elements, but these little things are what make you stand out as a developer. And with such small size it doesn't take up much space.</p>
<p>Read the <a href="https://popper.js.org/docs/v2/">Docs here</a>.</p>
<h1 id="conclusion">Conclusion</h1>
<p>As a developer, having and using the right JavaScript libraries is important. It will make you more productive and will make development much easier and faster. In the end, it is up to you which library to prefer based on your needs.</p>
<p>These are 10 JavaScript libraries that you can try and start using in your projects today. What other cool JavaScript libraries you use? Would you like another article like this? <a href="https://twitter.com/noharashutosh">Tweet </a>and let me know.</p>
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
