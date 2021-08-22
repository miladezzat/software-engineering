---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c9f02740569d1a4ca4055.jpg"
tags: [JavaScript]
description: We just opened the 2019 State of JavaScript survey. Go take i
author: "Milad E. Fahmy"
title: "What's New In The 2019 State of JavaScript Survey"
created: "2021-08-15T19:32:03+02:00"
modified: "2021-08-15T19:32:03+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript ">
<header class="post-full-header">
<h1 class="post-full-title">What's New In The 2019 State of JavaScript Survey</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c9f02740569d1a4ca4055.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9f02740569d1a4ca4055.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9f02740569d1a4ca4055.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9f02740569d1a4ca4055.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c9f02740569d1a4ca4055.jpg" alt="What's New In The 2019 State of JavaScript Survey">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>We just opened the <a href="http://survey.stateofjs.com/?source=fcc">2019 State of JavaScript survey</a>. <a href="http://survey.stateofjs.com/?source=fcc">Go take it</a> if you haven't done so already!</p>
<p>It's now the fourth time we're doing this survey, and each time we take a deep look at our big YAML file containing all our questions to see what stays and what goes. So in case you're curious, here's a quick overview of everything new in this year's survey.</p>
<h2 id="language-patterns">Language &amp; Patterns</h2>
<p>The biggest structural change is that we now have a new "Language" section that asks about JavaScript as a language itself. Do you use destructuring? What about arrow functions? Have you looked at Maps and Sets yet? And are you more of a functional programmer or an object-oriented coder?</p>
<p>We also have a whole section all about browser APIs so we can see how popular each of them is. </p>
<p>The goal is to get an idea not just of what libraries people are using, but also what their actual code looks like. </p>
<h2 id="new-libraries-svelte-cypress-and-more">New Libraries: Svelte, Cypress, and more</h2>
<p>Speaking of libraries, we also have a couple new entrants. </p>
<p>First off is <a href="https://svelte.dev/">Svelte</a>, which has been making big waves in the community all throughout 2019. It was also our #1 "other" answer in the front-end section last year, so it only made sense to include it. </p>
<p>In the back-end section, we added <a href="https://nuxtjs.org/">Nuxt</a> and <a href="https://www.gatsbyjs.org/">Gatsby</a>. They're not "traditional" back-end frameworks like Express or Koa, but they've gained so much popularity recently that not adding them felt like an oversight. </p>
<p>In the testing section, we've added <a href="https://www.cypress.io/">Cypress</a> and <a href="https://github.com/puppeteer/puppeteer">Puppeteer</a>, and in the mobile &amp; desktop section <a href="https://nwjs.io/">NW.js</a> and <a href="https://expo.io/">Expo</a>. </p>
<h2 id="resources-section">Resources Section</h2>
<p>Just like we did for this year's <a href="https://2019.stateofcss.com/">State of CSS</a> survey, we also added a Resources section to find out more about which blogs, resources, and podcasts are the most popular. </p>
<h2 id="a-custom-survey-front-end">A Custom Survey Front-End</h2>
<p>Finally, on the technical side of things the huge change this year is that we're using our own homegrown survey platform for the first time instead of relying on <a href="https://typeform.com/">Typeform</a>. </p>
<p>This is something we had talked about for a while, but we didn't consider it seriously until we realized Typeform had changed their pricing, and that their largest plan was now capped at 10,000 responses per month! Typeform wasn't interested in accommodating us, so with the end of the year looming ever closer, I got to work to hack a survey app together. </p>
<p>Thankfully I had a secret weapon in my pocket: <a href="http://vulcanjs.org/">Vulcan.js</a>, a full-stack JavaScript framework that's perfect for quickly putting web apps together; and I was able to build the entire app (you can <a href="https://github.com/StateOfJS/StateOfJS-Vulcan">find its code here</a>) in about five days by leveraging Vulcan's form-generation module. </p>
<p>Moving this fast did have a few drawbacks. We've had our share of little bugs, but nothing major so far. Also, we now require you to create an account before filling out a survey. As much as we'd like to support anonymous users, we didn't have time to implement proper safeguards against data tampering, so requiring accounts seemed like the safest choice. </p>
<p>I do think this was the right choice though. As we import data from previous years into our new survey app, we'll be able to give you access to that data so you can see how your responses have evolved over time (provided you've used the same email); and also make it easier for others to access our data to make their own data visualizations. </p>
<p>All that being said, the best way to experience all this new stuff is to go and see for yourself! So <a href="http://survey.stateofjs.com/?source=fcc">take the survey</a>, and help us figure out this year's latest JavaScript trends. </p>
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
