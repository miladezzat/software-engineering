---
card: "/images/default.jpg"
tags: [React]
description: Animations can make for a more engaging user experience in ou
author: "Milad E. Fahmy"
title: "How to Animate Your React Apps with Lottie"
created: "2021-08-15T19:27:02+02:00"
modified: "2021-08-15T19:27:02+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-react tag-javascript tag-animation ">
<header class="post-full-header">
<h1 class="post-full-title">How to Animate Your React Apps with Lottie</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2021/03/how-to-animate-react-apps.png 300w,
/news/content/images/size/w600/2021/03/how-to-animate-react-apps.png 600w,
/news/content/images/size/w1000/2021/03/how-to-animate-react-apps.png 1000w,
/news/content/images/size/w2000/2021/03/how-to-animate-react-apps.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2021/03/how-to-animate-react-apps.png" alt="How to Animate Your React Apps with Lottie">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Animations can make for a more engaging user experience in our React apps. </p>
<p>To make good looking animations, however, can be a great deal of work and can require a lot of code.</p>
<p>I am going to show you how to use a very powerful library with React to make stunning, pixel-perfect animations that enhance your apps, without a lot of work.</p>
<blockquote>Want the complete guide to create stunning, real-world apps with React? Check out <a href="https://reactbootcamp.com">The React Bootcamp</a>.</blockquote>
<h2 id="introducing-the-lottie-library-for-react">Introducing the Lottie Library for React</h2>
<p>The library I’m talking about is called Lottie. Lottie provides a totally different way of creating impressive animations by using animations that are produced in the popular program Adobe After Effects, which are imported and exported as JSON files.</p>
<p>And best of all, to find and use these animations, you don’t need to have the program Adobe After Effects.</p>
<h2 id="how-to-use-lottiefiles">How to Use LottieFiles</h2>
<p>All you need to do is to use a completely free resource called <a href="https://lottiefiles.com">LottieFiles</a>. It's a site that hosts tons of free and paid Lottie animations.</p>
<p>Let’s say we want an animated React logo in our application (note that you can use any animation that they make available).</p>
<p>I’ll personally choose the following React animation from LottieFiles in which <a href="https://lottiefiles.com/6610-react-logo-spinning">the React logo is spinning</a>. From there, we can preview it and change things like the background color. </p>
<p>When we’re ready to use it, we can download the animation’s JSON file by selecting Lottie JSON:</p>
<p>Regardless of how you’ve created your React project, you can put it in whatever folder you like. You can put it in the static folder in the root of your project or you can put it in an animations folder in the src folder. </p>
<p>It is up to you, as we will be importing the JSON data from whatever the file path may be. </p>
<p>I chose to put my JSON file (called react-logo.json) in my static folder:</p>
<h2 id="how-to-install-lottie-web">How to Install Lottie-Web</h2>
<p>Once that’s done, we’ll install Lottie by bringing in the package <code>lottie-web</code>.</p><pre><code class="language-bash">npm i lottie-web</code></pre>
<p>Note that there is an alternative Lottie package available called <code>react-lottie</code>, but it uses <code>lottie-web</code> under the hood which can be easily used directly as you’ll see in just a moment.</p>
<p>Once <code>lottie-web</code> is installed, we can place our animation within any JSX element by giving an indication that we want it to live in a certain selector. </p>
<p>The best way to do this is by using the id attribute, since it should only be used once across our app's elements.</p>
<p>In our case, we could give it the id value of <code>react-logo</code>:</p><pre><code class="language-jsx">// src/App.js
import React from "react";
export default function App() {
return (
&lt;div&gt;
&lt;h1&gt;Hello World&lt;/h1&gt;
&lt;div id="react-logo" /&gt;
&lt;/div&gt;
);
}</code></pre>
<p>To use Lottie, we can import it from <code>lottie-web</code> and we’ll import the JSON from wherever we placed it:</p><pre><code class="language-jsx">// src/App.js
import React from "react";
import lottie from "lottie-web";
import reactLogo from "../static/react-logo.json";
export default function App() {
return (
&lt;div&gt;
&lt;h1&gt;Hello World&lt;/h1&gt;
&lt;div id="react-logo" /&gt;
&lt;/div&gt;
);
}</code></pre>
<h2 id="how-to-use-lottie-with-the-useeffect-hook">How to Use Lottie with the useEffect Hook</h2>
<p>Using Lottie itself is simple. We need to get a reference to the JSX/DOM element that we want to put the animation in and give it the JSON data.</p>
<p>To interact with the DOM itself, we’ll need to make sure the component has mounted, so we’ll use <code>useEffect</code> to perform a side effect and pass in an empty dependencies array.</p>
<p>In <code>useEffect</code>, we can now call <code>lottie.loadAnimation</code> to run our animation, by passing it an object. On this object, the first thing we’ll need to provide is the container, the DOM node that we want this animation to be run in.</p>
<p>We’ll can use any method we want to reference the DOM node; I’ll personally use <code>document.getElementById('react-logo')</code>.</p><pre><code class="language-jsx">// src/App.js
import React from "react";
import lottie from "lottie-web";
import reactLogo from "../static/react-logo.json";
export default function App() {
React.useEffect(() =&gt; {
lottie.loadAnimation({
container: document.querySelector("#react-logo"),
});
}, []);
return (
&lt;div&gt;
&lt;h1&gt;Hello World&lt;/h1&gt;
&lt;div id="react-logo" /&gt;
&lt;/div&gt;
);
}
</code></pre>
<p>And with that container, we just need to supply the JSON data itself on a property called <code>animationData</code>.</p><pre><code class="language-jsx">// src/App.js
import React from "react";
import lottie from "lottie-web";
import reactLogo from "../static/react-logo.json";
export default function App() {
React.useEffect(() =&gt; {
lottie.loadAnimation({
container: document.querySelector("#react-logo"),
});
}, []);
return (
&lt;div&gt;
&lt;h1&gt;Hello World&lt;/h1&gt;
&lt;div id="react-logo" /&gt;
&lt;/div&gt;
);
}
</code></pre>
<p>After that you should see the animation run automatically:</p>
<p>If you have the same code I have, and have your animation running in an empty div, it will look huge. </p>
<p>You can fix that by providing some styles and adding a fixed width and height for the container div:</p><pre><code class="language-jsx">&lt;div id="react-logo" style={{ width: 200, height: 200 }} /&gt;</code></pre>
<h2 id="lottie-loadanimation-properties">Lottie.loadAnimation properties</h2>
<p>Along with container and animationData, there are some other important properties that we can pass to <code>loadAnimation</code> to change the animation’s appearance and function.</p><pre><code class="language-jsx">lottie.loadAnimation({
container: document.querySelector("#react-logo"),
animationData: reactLogo,
renderer: "svg", // "canvas", "html"
loop: true, // boolean
autoplay: true, // boolean
});
</code></pre>
<p>Above, I’ve included all of the default settings for <code>loadAnimation</code>. The default way the animation is rendered is as SVG, with the <code>renderer</code> property. This has the most features, but the HTML option can be more performant and supports 3D layers.</p>
<p>The animation loops or repeats infinitely by default because <code>loop</code> is set to true. You can turn this behavior off by setting it to false.</p>
<p>The animation’s <code>autoplay</code> setting is by default true, meaning the animation will play automatically when it is loaded. If you wanted to conditionally run the animation, you could set it to true or false by using a state variable (say if you wanted to play the animation only when it was visible).</p>
<h2 id="how-to-add-lottie-light">How to Add Lottie Light</h2>
<p>Finally, the last thing I’ll mention about Lottie is that <code>lottie-web</code> is a rather large dependency. </p>
<p>If you would like to use all of its features but are concerned about bringing too much code into your final bundle, you can import the light version of Lottie as follows:</p><pre><code class="language-jsx">import lottie from "lottie-web/build/player/lottie_light";</code></pre>
<h2 id="final-code">Final Code</h2>
<p>Hopefully this post helped you get up and running with Lottie as a neat feature to add to your React projects when you’re looking for something special in your web apps.</p>
<p>Check out the <a href="https://codesandbox.io/s/damp-dust-i7k1u?file=/src/App.js:174-292">CodeSandbox link</a> if you’d like to play around with the final code yourself.</p>
<h2 id="enjoythispostjointhereactbootcamp">Enjoy this post? Join The React Bootcamp</h2>
<p><strong><a href="http://bit.ly/join-react-bootcamp">The React Bootcamp</a></strong> takes everything you should know about learning React and bundles it into one comprehensive package, including videos, cheatsheets, plus special bonuses.</p>
<p>Gain the insider information hundreds of developers have already used to master React, find their dream jobs, and take control of their future:</p>
<p><a href="http://bit.ly/join-react-bootcamp"><img src="https://reedbarger.nyc3.digitaloceanspaces.com/react-bootcamp-banner.png" alt="The React Bootcamp"></a><br>
<em>Click here to be notified when it opens</em>
</p>
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
