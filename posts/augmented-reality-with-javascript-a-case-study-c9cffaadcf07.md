---
card: "https://cdn-media-1.freecodecamp.org/images/1*evN61t_cenPxPZgDZOB2Mw.png"
tags: [Augmented Reality]
description: by Apurav Chauhan
author: "Milad E. Fahmy"
title: "How to use Augmented Reality with JavaScript — a case study"
created: "2021-08-15T19:39:10+02:00"
modified: "2021-08-15T19:39:10+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-augmented-reality tag-javascript tag-virtual-reality tag-ar tag-tech ">
<header class="post-full-header">
<h1 class="post-full-title">How to use Augmented Reality with JavaScript — a case study</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*evN61t_cenPxPZgDZOB2Mw.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*evN61t_cenPxPZgDZOB2Mw.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*evN61t_cenPxPZgDZOB2Mw.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*evN61t_cenPxPZgDZOB2Mw.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*evN61t_cenPxPZgDZOB2Mw.png" alt="How to use Augmented Reality with JavaScript — a case study">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Apurav Chauhan</p>
<h1 id="how-to-use-augmented-reality-with-javascript-a-case-study">How to use Augmented Reality with JavaScript — a case study</h1>
<p>In this experiment, I talk about how Augmented Reality with JS can be used to make learning more fun and interactive. The case study will discuss the design process, implementation and feedback from children in the age group 2 to 10 years.</p>
<figcaption>Education and Interactive Alphabets learning using Augmented Reality and Javascript</figcaption>
</figure>
<p>Augmented Reality (AR) has always attracted me, and in this experiment, I try to create a practical AR application. The use-case we will cover is primary education and we will see how we can make the learning fun and interactive. We will make an app to learn alphabets in three languages primarily: Punjabi, Hindi, and English.</p>
<p><em>The Javascript Augmented Reality app currently doesn’t have plane detection. For simplicity’s sake we are only superimposing our objects over the viewport with 3d motion tracking.</em></p>
<h4 id="end-goal">END GOAL</h4>
<p>Below is a demo of our Javascript AR experiment. You can download and play with the app <a href="https://play.google.com/store/apps/details?id=com.webilm.games.arlearning&amp;hl=en" rel="noopener">here</a>.</p>
<p>The full code has been open-sourced for learning purposes and is available <a href="https://github.com/apuravchauhan/augmented-reality-javascript" rel="noopener">here</a>.</p>
<figcaption>Alphabets in augmented reality and javascript to make education more fun and engaging</figcaption>
</figure>
<h3 id="the-design-process">The Design Process</h3>
<p>To make the learning fun and effortless, I am relying on the following points:</p>
<ol>
<li>Active participation of the child</li>
<li>Child’s physical activity instead of sitting in one place</li>
<li>A bit of effort in finding the alphabets.</li>
<li>Intuitive UX/UI.</li>
</ol>
<p>The core theme of the app will be quite similar to the famous Pokemon Go Augmented reality app. Only two main components will be involved: the <strong>Camera Viewport</strong> and <strong>Alphabets</strong>.</p>
<h4 id="alphabet-ux-for-ar-game">Alphabet UX for AR Game</h4>
<p><em>Iteration 1</em></p>
<figcaption>2d Alphabets in English, Hindi and Punjabi for our JS Augmented Reality Game</figcaption>
</figure>
<p>In our first iteration we have 2d alphabets which we will try to merge in our camera viewport. The idea of the Augmented Reality(AR) app is to have children find these alphabet letters in a room or space around them. The prototype after merging the space with 2d alphabets will look something like this:</p>
<figcaption>AR Motion sensor with 2d object</figcaption>
</figure>
<p>As you can see above, the immersive experience is missing with a 2d model because the human eye sees things in 3d.</p>
<p><em>Iteration 2</em></p>
<p>Lets try to create a 3d model and see if we can improve the experience of our Javascript-based Augmented Reality game:</p>
<figcaption>3D Alphabets in English, Hindi and Punjabi for our AR project</figcaption>
</figure>
<p>And below is the comparison of the experience of a motion sensor with 2d vs 3d alphabet models. As you can see, 3D naturally gives you a much more immersive experience when it comes to Augmented reality.</p>
<figcaption>2d vs 3d AR motion experience</figcaption>
</figure>
<h3 id="the-ar-implementation-process">The AR Implementation process</h3>
<p>To implement the above AR concept, I’ll be using the following tools and technologies:</p>
<ol>
<li><a href="https://ionicframework.com" rel="noopener">Ionic Framework</a>: For building the hybrid app</li>
<li><a href="https://aframe.io/" rel="noopener">Aframe</a>: For bringing the Virtual reality (VR) and Augmented Reality (AR) experience to our app</li>
<li><a href="https://ephtracy.github.io/" rel="noopener">MagicaVoxel</a>: For creating our 3D models</li>
</ol>
<p>The basic app building process is very simple. You can follow my earlier post to learn how to go about building and deploying an app using the Ionic framework <a href="https://codeburst.io/part-1-simple-ionic-tutorial-from-scratch-from-0-to-live-app-9a79db510a90" rel="noopener">here</a>.</p>
<p>Once you have followed the above tutorial to create a simple app, it’s time to integrate Aframe to bring our 3D alphabets with motion sensors into our app.</p>
<p>Just load the below Aframe core and Aframe loader libraries in ionic’s project index.html file:</p><pre><code>&lt;script src="https://aframe.io/releases/0.8.2/aframe.min.js"&gt;&lt;/script&gt;</code></pre><pre><code>&lt;script src="https://rawgit.com/donmccurdy/aframe-extras/v2.1.1/dist/aframe-extras.loaders.min.js"&gt;&lt;/script&gt;</code></pre>
<p>With this we are ready to do some AR/VR magic in our Javascript code base.</p>
<p>Now in your home component’s home.html, let’s include our 3D models exported from magicavoxel:</p>
<p>And this should make a 3D scene ready for interaction with all motion sensors ready:</p>
<figcaption>Final 3D Virtual Reality scene ready with 3D alphabets</figcaption>
</figure>
<h4 id="adding-augmented-reality-effect">Adding Augmented Reality Effect</h4>
<p>The final part of this experiment is to add the Augmented Reality (AR) feeling in our Javascript-based hybrid app. As already explained, Augmented Reality is when you superimpose 3D models or other objects on top of your camera viewport. So the only thing missing is the camera viewport behind our scene.</p>
<p>To do this, we use the camera preview plugin as explained <a href="https://ionicframework.com/docs/native/camera-preview/" rel="noopener">here</a>. And here is the full gist after integration with the camera preview plugin:</p>
<p>We also need to ensure that our backgrounds are transparent so that the camera preview is visible in mobile. This is very <strong>IMPORTANT</strong> otherwise you might feel that the plugin is not working. Here is the home.scss file with transparency css enabled:</p>
<p><strong>And this is what it would finally look like:</strong></p>
<h4 id="user-reaction-to-our-augmented-reality-js-game">User reaction to our Augmented reality JS game</h4>
<p>The final step to measure the success of your concept is real user validation — in our case, kids :) And below is their live feedback recorded.</p>
<p>It was pretty clear that each one of them enjoyed the game and we got full points on fun part. However, initially I had to tell them to move the phone in space to find the letters. Points lost in terms of intuitiveness :(</p>
<figcaption>Points scored out of 10</figcaption>
</figure>
<h4 id="user-feedback-for-augmented-reality-js-game">User feedback for Augmented Reality JS game</h4>
<h3 id="final-thoughts">Final Thoughts</h3>
<p>Well it was an exciting project and I could see a lot of potential for Augmented Reality in learning and education. Children really like it and it surely adds the missing fun factor to education, especially in our monotonous Education system.</p>
<p>Feel free to comment and share your feedback.</p>
<h3 id="downloads">Downloads</h3>
<p>The code for this app is available in <a href="https://github.com/apuravchauhan/augmented-reality-javascript" rel="noopener">github</a>. Feel free to play and push new features in it. I’ll be happy to push updates over production.</p>
<p>You can download the app for android <a href="https://play.google.com/store/apps/details?id=com.webilm.games.arlearning&amp;hl=en" rel="noopener">here</a>.</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
