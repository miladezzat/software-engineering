---
card: "/images/default.jpg"
tags: [React]
description: React is a JavaScript library that is ideal for creating impr
author: "Milad E. Fahmy"
title: "7 React Projects You Should Build in 2021"
created: "2021-08-15T19:27:29+02:00"
modified: "2021-08-15T19:27:29+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-react tag-side-project tag-portfolio tag-javascript ">
<header class="post-full-header">
<h1 class="post-full-title">7 React Projects You Should Build in 2021</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2021/01/7-react-projects-for-2021-2.png 300w,
/news/content/images/size/w600/2021/01/7-react-projects-for-2021-2.png 600w,
/news/content/images/size/w1000/2021/01/7-react-projects-for-2021-2.png 1000w,
/news/content/images/size/w2000/2021/01/7-react-projects-for-2021-2.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2021/01/7-react-projects-for-2021-2.png" alt="7 React Projects You Should Build in 2021">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>React is a JavaScript library that is ideal for creating impressive apps. There are countless projects that you can make with React, but here are seven that are on my list to build in 2021.</p>
<p><em>Why have I selected these seven projects in particular?</em> I picked them because they build off of one another. They require you to know similar, essential concepts like authentication, working with an API and database, using a React router for adding pages to your app, and playing media like audio or video. </p>
<p>Plus, many applications can be (and often are) integrated into one another. Social media apps can include chat apps, music or video apps can include e-commerce apps, and so on.</p>
<p>In other words, <strong>building any of these projects</strong> will give you the skills and knowledge required to build the rest of the apps on the list, including your own personal projects.</p>
<p>Along with each project, I have provided several real-world examples which you can use to find inspiration, plus some ideas about what tools I would possibly use to build each app.</p>
<blockquote>If you want to see how to build each of these apps for yourself, <a href="http://bit.ly/react-projects">check out my course series</a>, where you'll learn how to create an impressive React project at the end of every month.</blockquote>
<h2 id="1-realtime-chat-app">1. Realtime Chat App</h2>
<p><strong>Real-world examples</strong>: Slack, Messenger, Discord, Crisp Chat</p>
<p>Virtually all of use some kind of realtime chat app, whether it's a mobile application like WhatsApp or Viber or a productivity tool like Slack or Discord. It could also be part of a chat widget within a website where customers can directly talk with the site owners. </p>
<p>All chat apps allow users to send messages to others in realtime, to react to messages, and they show when users are online or offline. </p>
<h3 id="how-to-build-a-realtime-chat-app-">How to build a realtime chat app: </h3>
<ul>
<li>Build your project with create-react-app or Next.js. </li>
<li>Use a service like Firebase or GraphQL subscriptions to create and get messages in realtime to users.</li>
<li>Add reactions to message with emoji using the npm package emoji-mart</li>
<li>Deploy to the web using Firebase Tools</li>
</ul>
<h2 id="2-social-media-app">2. Social Media App</h2>
<p><strong>Real-world examples</strong>: Facebook, Twitter, Instagram</p>
<p>The app you're likely most familiar with is a social media application. In many ways it's similar to a chat app, but expanded to a larger community of users. </p>
<p>These users can interact with each other in different ways: they can follow one another to receive their posts, add media like images and video to share with others, and enable users to interact with posts such as liking or commenting on them.</p>
<h3 id="how-to-build-a-social-media-app-">How to build a social media app: </h3>
<ul>
<li>Build your frontend with create-react-app, and backend using a Node API</li>
<li>Use a database like Postgres or MongoDB, along with an ORM like Prisma (Postgres) or Mongoose (MongoDB)</li>
<li>Use social authentication with Google, Facebook or Twitter, using Passport or a simpler service like Auth0</li>
<li>Deploy the backend to Heroku, frontend to Netlify</li>
</ul>
<h2 id="3-e-commerce-app">3. E-Commerce App</h2>
<p><strong>Real-world examples:</strong> Shopify, Etsy, Dev.to Storefront</p>
<p>If you're looking for inspiration, checkout out some simpler storefronts like a Shopify storefront, rather than looking at a massive retailer like Amazon or Walmart.</p>
<h3 id="how-to-build-an-e-commerce-app-">How to build an e-commerce app: </h3>
<ul>
<li>Create the app with create-react-app or Next.js</li>
<li>Add the <code>stripe</code> NPM package, plus <code>use-shopping-cart</code> to easily handle payments directly with Stripe Checkout</li>
<li>Build a Node API to handle creating sessions with Stripe</li>
<li>Deploy the backend to Heroku, frontend to Netlify (or deploy both on Heroku)</li>
</ul>
<h2 id="4-video-sharing-app">4. Video Sharing App</h2>
<p><strong>Real-world examples:</strong> YouTube, TikTok, Snapchat</p>
<p>A video sharing app is probably the most broad category, as video is used across so many different apps and in many different ways. </p>
<p>You have video sharing apps like YouTube, which allow you to search any browser and look for any video that you could imagine that users have created. Also, tik tok and Snapchat give us the ability to watch videos from other users that are recorded in a much shorter, more accessible format, and are more oriented around interactions like likes and views.</p>
<h3 id="how-to-build-a-video-sharing-app-">How to build a video sharing app: </h3>
<ul>
<li>Create the app with create-react-app, and create the backend with Node/Express</li>
<li>Use Cloudinary for image and video uploads to the Cloudinary API</li>
<li>Use a database like Postgres or MongoDB, along with an ORM like Prisma (Postgres) or Mongoose (MongoDB)</li>
<li>Deploy the backend to Heroku, frontend to Netlify (or deploy both on Heroku)</li>
</ul>
<h2 id="5-blogging-portfolio-app">5. Blogging / Portfolio App</h2>
<p><strong>Real-world examples:</strong> Medium, Dev.to, HashNode</p>
<p>This app example is perhaps the most practical. The most immediately practical choice for you to build a blogging or portfolio app is something that showcases your skills. It allows you to show off what you can do as a developer, while also allowing you to include posts and content that reflect what you know. </p>
<p>Making these applications with tools like Gatsby or Nextjs (which are both React frameworks) is now easier than ever.</p>
<h3 id="how-to-build-a-blogging-or-portfolio-app-">How to build a blogging or portfolio app: </h3>
<ul>
<li>Create the app with Gatsby or Next.js</li>
<li>Use markdown for blog posts with a special markdown transformer plugin such as <code>remark</code></li>
<li>Deploy the site to Netlify or Vercel</li>
</ul>
<h2 id="6-forum-app">6. Forum App</h2>
<p><strong>Real-world examples:</strong> Reddit, StackOverflow, freeCodeCamp Forum</p>
<p>A forum application is where we go when we want to get help, and as programmers we visit forums like Reddit and Stack Overflow to get our coding questions answered. </p>
<p>Forums also combine many elements of chat and social media apps through posts, comments, and reactions. A forum is more of a more organized version of a social media app where users can more easily find answers to questions they're looking for. </p>
<h3 id="how-to-build-a-forum-app-">How to build a forum app: </h3>
<ul>
<li>Build your frontend with create-react-app, and backend using a Node API</li>
<li>Use a database like Postgres or MongoDB, along with an ORM like Prisma (Postgres) or Mongoose (MongoDB)</li>
<li>Use social authentication with Google, Facebook or Twitter, using Passport or a simpler service like Auth0</li>
<li>Deploy the backend to Heroku, frontend to Netlify</li>
</ul>
<h2 id="7-music-streaming-app">7. Music Streaming App</h2>
<p><strong>Real-world examples:</strong> Spotify, Soundcloud, Pandora</p>
<p>Just as React applications are perfect for serving video content, they're also great for streaming media like music. </p>
<p>Music apps have a similar structure to video sharing apps and may or may not allow users to upload their own music. They do allow users to listen to music, like songs, comment on them, and perhaps even purchase music. </p>
<p>In this way, a streaming music app can combine elements of a video sharing app as well as an e-commerce app.</p>
<h3 id="how-to-build-a-music-streaming-app-">How to build a music streaming app: </h3>
<ul>
<li>Create the app with create-react-app, and create the backend with Node/Express</li>
<li>Use Cloudinary for image and video uploads to the Cloudinary API</li>
<li>Use a database like Postgres or MongoDB, along with an ORM like Prisma (Postgres) or Mongoose (MongoDB)</li>
<li>Deploy the backend to Heroku, frontend to Netlify (or deploy both on Heroku)</li>
</ul>
<h2 id="want-to-build-real-world-apps-like-youtube-instagram-and-twitter-with-react-here-s-how-">Want to build real-world apps like YouTube, Instagram, and Twitter with React? Here's how.</h2>
<p>At the end of every month, I will be releasing an exclusive course, showing you exactly how to build a complete app clone with React from start to finish. </p>
<p>Want to be notified when the next course drops? <strong><a href="http://bit.ly/react-projects">Join the waitlist here</a>.</strong></p>
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
