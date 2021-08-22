---
card: "https://cdn-media-1.freecodecamp.org/images/1*nnLl46hdkKTPVF8pI0Ifhg.png"
tags: [JavaScript]
description: How unambitious I was, a few months ago, when I published “Vu
author: "Milad E. Fahmy"
title: "How I built an app with Vulcan.js in four days"
created: "2021-08-15T19:39:25+02:00"
modified: "2021-08-15T19:39:25+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-react tag-graphql tag-vulcanjs tag-tech ">
<header class="post-full-header">
<h1 class="post-full-title">How I built an app with Vulcan.js in four days</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*nnLl46hdkKTPVF8pI0Ifhg.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*nnLl46hdkKTPVF8pI0Ifhg.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*nnLl46hdkKTPVF8pI0Ifhg.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*nnLl46hdkKTPVF8pI0Ifhg.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*nnLl46hdkKTPVF8pI0Ifhg.png" alt="How I built an app with Vulcan.js in four days">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>How unambitious I was, a few months ago, when I published “<a href="https://hackernoon.com/the-vulcan-js-challenge-15-days-for-an-app-e3735d1e3d4c" rel="noopener">Vulcan: 15 days for an app</a>”! 15 days is 3 weeks of work. If you include conception time, that’s a month of delay. What if we could reduce it to a <em>week</em>? What if we could develop production-ready applications in a matter of <em>days</em>? Here is how we are achieving this goal.</p>
<h3 id="day-0-some-context">Day 0: Some context</h3>
<h4 id="stop-calling-yourself-a-startup-just-because-you-produce-sloppy-code-faster-than-others">Stop calling yourself a Startup just because you produce sloppy code faster than others</h4>
<p>I run a development and consulting company named LBKE. We take a deep interest in technologies that help produce high quality applications in a very limited amount of time. Think React Native+Expo for mobile, or Meteor for web applications.</p>
<p>Through the years, the expected quality of Minimum Valuable Products (MVPs) has surged. People are fed up with low quality prototypes sold as “products”.</p>
<p>Now, they want their software without bugs (no way!), they want a good UX (how picky they are!), they want tools that truly answer their needs (ugh!). And of course, they don’t want to pay more for that.</p>
<h4 id="toward-the-4-days-app">Toward the 4 days app</h4>
<p>For the entrepreneur, designing and building such a Minimum <em>Loveable </em>Product is a lot of work. But money is tight, and time is money, so you have to be smart about how you spend it.</p>
<p><strong>Our goal: being able to produce a SaaS application in 4 days.</strong> We do not mean a throwaway app that won’t bear further development. We believe that well-designed technologies should allow both long-run development and very fast development: scaling up, and scaling <em>down</em>. For most projects, there is no need for prototyping technologies. Except if you build spaceships, but you don’t, do you?</p>
<p>Also, we do not like relying on 3rd party services/softwares that pop websites in a few clicks. If your product is truly innovative you likely feel <em>awfully </em>limited by such services.</p>
<p>So, how do we achieve this miracle without using a magic wand? Let’s discover it through a real life example, GestiResto, a web application that helps restaurant owners to manage their recipes. <em>Side note: I live in France, we don’t joke about food here, so I really took this project to heart.</em></p>
<h3 id="day-1-picking-our-spaceship">Day 1: Picking our spaceship</h3>
<h4 id="meet-vulcan-js-aka-meteor-on-steroids">Meet Vulcan.js, aka Meteor-on-steroids</h4>
<p>Meteor is a famous full-stack JavaScript framework. From its very beginning, it has always emphasized productivity and developer experience. It pioneered many awesome features and patterns, like isomorphic development (reuse the same code server side and client side).</p>
<p><a href="http://vulcanjs.org/" rel="noopener">Vulcan.js</a> is basically the good elements of Meteor, plus the good elements of the JavaScript ecosystem, in a single framework. It relies on the latest technologies: React for the frontend, and Apollo (GraphQL) for client/server communication.</p>
<figcaption>Join us on Slack!</figcaption>
</figure>
<p>As a bonus, it includes a lot of packages and examples for the most common features (sending newsletters, adding a forum, etc.). Vulcan is the direct grandchild of the famous Meteor app/framework Telescope, it has been created by <a href="undefined" rel="noopener">Sacha Greif</a>. It thus benefits from years of experience despite its modernity.</p>
<p>If you want to know more about Vulcan and how it helps cut development time, you can checkout <a href="https://medium.com/dailyjs/write-less-code-ship-more-apps-how-vulcan-js-makes-me-an-efficient-developer-71c829c76417" rel="noopener">my previous article</a> in DailyJS.</p>
<p>So, Vulcan.js is definitely a solid candidate to meet our self-imposed 4 day deadline!</p>
<h4 id="a-user-management-system-out-of-the-box">A user management system out-of-the-box</h4>
<p>One of the most beloved features of Vulcan is its account system, which it inherits from Meteor. It includes signup/signin/logout, permission management, enrollment/forgotten password workflows (+ programmatic email sending), and a nice user interface. Oh, and also it’s quite easy to add 3rd party auth with services such as <a href="https://medium.com/@teaganatwater/setting-up-google-oauth-in-vulcanjs-aa53c6010d21" rel="noopener">Google Oauth</a>.</p>
<figcaption>The day 1 application. The authentication system is fully functional at this point. Material design can be obtained with the <a href="https://github.com/ErikDakoda/vulcan-material-ui" rel="noopener" target="_blank" title="">vulcan:material-ui</a> and <a href="https://github.com/lbke/vulcan-more-material-ui" rel="noopener" target="_blank" title="">vulcan:more-material-ui</a> packages.</figcaption>
</figure>
<p>Accounts management is really something you DON’T want to think about in the early stages of your app life-cycle. How many hours have been lost setting up Passport.js! The amount of paid authentication services such as Auth0 shows that this problem is not yet solved, so it’s really a very nice feature.</p>
<p>So, our first day has been well spent. We now have a complete user management system including database, server , UI, and back-office, and we set up a nice Material UI layout with the remaining time.</p>
<h3 id="day-2-hosting">Day 2: Hosting</h3>
<h4 id="hosting-on-aws-with-meteor-up">Hosting on AWS with Meteor Up</h4>
<p>Why hosting on day 2 already? Because life taught us that it is a very bad idea to test your app in production the last day. In an agile fashion, a feature is only done when validated in a real life context. So, we can’t consider the application to be set up if we did not run it in a production environment.</p>
<p>Meteor Up is a wonderful tool to automatically deploy Meteor apps (so Vulcan apps too) on a distant server. It handles everything, from containerization of the app with Docker to SSL certificate generation with Let’s Encrypt. Setup is easy, deployment is a one line command. There are barely any drawbacks to it.</p>
<p>I picked AWS for the hosting. It has the big advantage of proposing free services for 12 months. I must admit that I had hard times setting up my first EC2 instance. However there are many tutorials on the web and it’s worth the initial trouble. Also, I am currently writing <a href="https://github.com/lbke/vulcan-mongo-backup" rel="noopener">a package to enable daily backup of the MongoDB database on AWS S3</a> to make your data safe.</p>
<h4 id="a-staging-application-on-zeit-s-now-mongolab">A staging application on Zeit’s Now + Mongolab</h4>
<p>Sooner or later, you will need to test that your app works in production, without actually sending it to production. That’s what we call a staging environment. You can use AWS too, but let’s try a free solution instead to cut costs.</p>
<figcaption>Cheers to all companies that provide free services and contribute to open source.</figcaption>
</figure>
<p>Zeit’s Now service is well suited for this usage. It offers free hosting. You can use mLab for the database, as it provides a free sandbox environment too. To be honest I have nothing much to say here, because the set up is as easy as ABC, and fully <a href="http://docs.vulcanjs.org/deployment.html#Meteor-Now" rel="noopener">documented here</a>. Not even a bug. <em>What’s my purpose as a developer if there are no bugs???</em></p>
<p>Okay, so, at the end of day 2, our app is in production and we have an intermediate demonstration environment. Nice! That’s cool, because <strong>less time for generic features is more time for valuable features.</strong></p>
<h3 id="day-3-business-logic">Day 3: Business logic</h3>
<h4 id="an-app-is-a-bunch-of-forms-and-lists">An app is a bunch of forms and lists</h4>
<p>Now, let’s get down to business. Most components of an application can be separated in 3 large categories: List, Form, and Details. This model apply to a LOT of websites.</p>
<p>See Medium: the home page contains a List of articles. This page is a “Details” page of the article you are reading. At the bottom, you’ll find a List of comments with a comment Form. Even the “applause” button on the left (which I invite you to click thoroughly), is a simplistic Form like component.</p>
<p>Good news: Vulcan includes a whole lot of helpers to facilitate the creation of List, Form and Details components. It includes nice GraphQL resolvers and React HOCs. You barely need to write your own. There are even a few React components that work out-of-the-box. The most advanced of them is the SmartForm, which automatically generates a customizable creation/edition form for any collection.</p>
<p>I won’t list all the features Vulcan.js has to offer, but basically you can safely trust it to make your development process <em>really</em> fast.</p>
<h4 id="creating-a-recipe-or-proposing-an-application-or-publishing-an-article-or-">Creating a recipe (or proposing an application or publishing an article or…)</h4>
<p>In GestiResto, the 2 mains features are creating and listing recipes. The recipe creation form must display statistics. The details are confidential, so here is a screenshot of an equivalent form developed for <a href="https://www.awesome-vulcan.com" rel="noopener">Awesome Vulcan</a>.</p>
<p>But that makes no difference, because here is the point: Vulcan can auto-generate forms out-of-the-box for whatever type of data you can imagine, whether it’s a recipe or a helicopter. I mean, the JSON representation of a helicopter.</p>
<figcaption>This form has been auto-generated using Vulcan core SmartForm component. The “Links” input is a custom React component tailored for our specific needs.</figcaption>
</figure>
<p>The recipe list is even simpler. We focused on building a nice <code>RecipeItem</code> that allows users to quickly preview the recipe information, as well as triggering some common actions (exporting, deleting…). Of course, it includes a text based search input, for free.</p>
<figcaption><em>No, I am never ever going to give you access to the “Secret Recipe”. Except, maybe, if you clap for this article.</em></figcaption>
</figure>
<h3 id="day-4-deliver-">Day 4: Deliver!</h3>
<p>Since we did most of the valuable parts of the job on Day 3, we are left one last day to cleanup and improve the application. Now we can implement the love-to-have features: a component that automatically computes the final price of your recipe, a button that generates a nice PDF export, and a homepage that makes the difference.</p>
<figcaption><em>Look how happy is our chef! That’s because his app is built on 100% organic-open-source technologies.</em></figcaption>
</figure>
<p>Eventually, we’re on Day 5. The client has just tested the app delivered yesterday evening, and says to you: “I’ve tested the app, it’s nice! I think of adding feature X to page Y, how long does it takes to add component Z in your opinion?…”. <strong>And then you know you did a good job!</strong></p>
<h3 id="want-to-build-your-own-app-in-4-days">Want to build your own app in 4 days?</h3>
<p>Take a look at our open source application <a href="https://www.awesome-vulcan.com" rel="noopener">Awesome Vulcan</a>. It provides a reusable basis for professional apps with a Material UI look. It also demonstrates the use of a few packages we implemented.</p>
<p><strong>I hope it will help you in your journey toward the 4 days application!</strong></p>
<p>I am the co-founder of the French company Lebrun Burel Knowledge Engineering (LBKE) — <a href="https://www.lebrun-burel.com" rel="noopener">https://www.lebrun-burel.com</a></p>
<p><em>Always happy to talk about code, machine learning, innovation and entrepreneurship!</em></p>
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
