---
card: "/images/default.jpg"
tags: [Framework]
description: "Buy a house, or cautiously build your own."
author: "Milad E. Fahmy"
title: "What s the Difference Between a Framework and Library?"
created: "2021-08-16T11:28:18+02:00"
modified: "2021-08-16T11:28:18+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-framework tag-javascript tag-technology tag-programming tag-angular tag-vue tag-react tag-libraries ">
<header class="post-full-header">
<h1 class="post-full-title">What's the Difference Between a Framework and Library?</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2019/10/cover-image-3.png 300w,
/news/content/images/size/w600/2019/10/cover-image-3.png 600w,
/news/content/images/size/w1000/2019/10/cover-image-3.png 1000w,
/news/content/images/size/w2000/2019/10/cover-image-3.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2019/10/cover-image-3.png" alt="What's the Difference Between a Framework and Library?">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>What's the difference between a framework and library? I've had this discussion with developers at work and meetups, and the core idea boils down to this.</p>
<blockquote>
<p>You tell libraries what to do, frameworks tell you what to do.</p>
</blockquote>
<h2 id="frameworkupsides">Framework Upsides</h2>
<p>Generally speaking a framework tells you what to do. It has a "right way" of doing things and provides tooling to support you.</p>
<p>Two perfect examples are <a href="https://angular.io">Angular</a> and <a href="https://vuejs.org">Vue</a>.</p>
<p><img src="https://www.freecodecamp.org/news/content/images/2019/10/angular-and-vue.png" alt="angular-and-vue"></p>
<h3 id="allthetoolsarehere">All the tools are here</h3>
<p>These are frameworks created by dedicated teams, and ship with everything you need to build large-scale applications.</p>
<ul>
<li>Components</li>
<li>Basic state management</li>
<li>Directives</li>
<li>Handling forms</li>
<li>Routing</li>
<li>HTTP</li>
<li>Testing</li>
<li>More (UI libraries, animations, etc.)</li>
</ul>
<h3 id="officialstyleguides">Official style guides</h3>
<p>The respective teams then provide official style guides, depicting their framework's best practices. Once you learn that you're immediately productive.</p>
<p><img src="https://www.freecodecamp.org/news/content/images/2019/10/one-tool-to-conquer.jpeg" alt="one-tool-to-conquer"></p>
<h3 id="streamlinedonboarding">Streamlined onboarding</h3>
<p>If you believe in the structure and wish to invest, a framework is perfect for your project. Training new teammates becomes easier too, as they only need to learn one core tool.</p>
<h3 id="clearupgradepath">Clear upgrade path</h3>
<p>On top of that your upgrade path is super clear. Just follow the team's release schedule, read up on their breaking changes, and upgrade when you're ready.</p>
<h2 id="frameworkdownsides">Framework Downsides</h2>
<p>This is just in my experience. I'm sure I've missed something.</p>
<h3 id="decreasedperformancesortof">Decreased Performance (sort of)</h3>
<p>By necessity a framework is comprised of <em>a lot</em> of code. More code means longer download times and decreased performance.</p>
<p>As <a href="https://tomdale.net/2017/09/compilers-are-the-new-frameworks/">frameworks become compilers</a>, however, I suspect this will be less of an issue.</p>
<h3 id="smallapplicationsdontneedit">Small applications don't need it</h3>
<p>A scalable architecture must address many concerns like we discussed above. Some applications are so simple that using an entire framework makes things more complicated. You end up with tons of boilerplate without a ton of payoff.</p>
<h3 id="goingagainsttheframeworkcanbedifficult">Going against the framework can be difficult</h3>
<p>This reared its head at my first job out of college, where we tried to compile some content outside of Angular's awareness. The result wasn't pretty, but we got the job done after some trial and error, and lots of bruises.</p>
<p><img src="https://www.freecodecamp.org/news/content/images/2019/10/going-against-frameworks.jpeg" alt="going-against-frameworks"></p>
<p>Although I hear Vue lets you incrementally adopt it to your existing application. This sounds promising!</p>
<h3 id="itsalottolearn">It's a lot to learn</h3>
<p>This point applies to any architecture, though. Whatever tool(s) you use, learning all of it takes time. It's either one big tool or many small ones.</p>
<p><img src="https://www.freecodecamp.org/news/content/images/2019/10/almost-understood.jpeg" alt="almost-understood"></p>
<h3 id="yougettoocomfy">You get too comfy</h3>
<p>This applies to anything in life–sometimes we get too comfortable doing things in a particular way. This totally depends on your career goals though. Maybe this tool helps you keep a steady job or run an efficient business building applications. If that's what you want, keep doing it!</p>
<p>But if you're like many of us, the same tech every day gets a bit stale. Experimenting with other frameworks and libraries is key to keeping your skills sharp.</p>
<h2 id="librariesupsides">Libraries Upsides</h2>
<p>In direction opposition to frameworks, libraries are utilities built for a singular purpose.</p>
<ul>
<li><a href="https://reactjs.org">React</a> creates UIs</li>
<li><a href="http://redux.js.org">Redux</a> provides state management</li>
<li><a href="https://jquery.com">JQuery</a> provides cross-browser DOM manipulation</li>
</ul>
<p>The list goes on. Let's zoom in on React. What does it do?</p>
<p><img src="https://www.freecodecamp.org/news/content/images/2019/10/react-logo-small.png" alt="react-logo-small"></p>
<blockquote>
<p>A JavaScript library for building user interfaces - <a href="https://reactjs.org">Official React website</a></p>
</blockquote>
<h3 id="singlefocus">Single focus</h3>
<p>That's <em>all it does</em>. Their guides show you how to use React and that's mainly it. The team doesn't officially appoint libraries for global state management, routing, HTTP, services, or forms.</p>
<p>And that's their design choice! It's a great position depending on what you're looking for.</p>
<h3 id="youreincontrol">You're in control</h3>
<p>A library is 100% in your control. You determine how it's used, and you're sailing smooth after investing some time to learn it.</p>
<p><img src="https://www.freecodecamp.org/news/content/images/2019/10/learned-a-lib-quickly.jpeg" alt="learned-a-lib-quickly"></p>
<h3 id="addonlywhatyouneed">Add only what you need</h3>
<p>If your application is small, a single library may be enough! No need to complicate things. As the app grows, you can mix and match libraries to build your own architecture. It's a great learning experience!</p>
<h3 id="learnmanydifferenttools">Learn many different tools</h3>
<p>And speaking of which, using many different libraries will keep your JavaScript skills nice and sharp. You'll always be reading documentation, trying out new things, and expanding your technical horizons.</p>
<p>It's not all perfect though...</p>
<h2 id="librariesdownsides">Libraries Downsides</h2>
<h3 id="customarchitecturecanruinyourapp">Custom architecture can ruin your app</h3>
<p>Custom architectures are fun at first, but can be very costly down the road. I advise extreme caution if it's your first time building one.</p>
<p>A good architecture increases developer productivity and minimizes the pain of adding, modifying, and deleting code.</p>
<p><img src="https://www.freecodecamp.org/news/content/images/2019/10/when-architecture-scales.jpeg" alt="when-architecture-scales"></p>
<p>A bad architecture causes fear and suffering whenever someone touches it.</p>
<p><img src="https://www.freecodecamp.org/news/content/images/2019/10/refactor-or-redo.jpeg" alt="refactor-or-redo"></p>
<p>People choose Angular and Vue because they don't want to risk time and money building their own rules. They simply learn the framework's rules and focus on playing the game.</p>
<p>While in the React world, any two large-scale applications will vary in their structure. It all depends on what the team thought best.</p>
<h3 id="paralysisanalysis">Paralysis analysis</h3>
<p>Sometimes too many options is a bad thing, and we're struck by the dreaded <a href="https://en.wikipedia.org/wiki/Analysis_paralysis">analysis paralysis</a>. Instead of picking a library and moving forward, we spend countless hours comparing different libraries that pretty much do the same thing.</p>
<p><img src="https://www.freecodecamp.org/news/content/images/2019/10/analyze-all-the-libs.jpeg" alt="analyze-all-the-libs"></p>
<h3 id="itsstillalottolearn">It's still a lot to learn</h3>
<p>Framework or not, a big application still takes time to understand. This is another reason why strong architecture's important, because it'll ease the learning curve.</p>
<h3 id="potentiallyhecticupgradepath">Potentially hectic upgrade path</h3>
<p>If I got paid every time two libraries in my <code>package.json</code> weren't compatible after an upgrade, I'd be retired. Enough said.</p>
<p><img src="https://www.freecodecamp.org/news/content/images/2019/10/one-does-not-simply-upgrade.jpeg" alt="one-does-not-simply-upgrade"></p>
<h2 id="wantfreecoaching">Want Free Coaching?</h2>
<p>If you'd like to schedule a free call to discuss Front-End development code, interviews, career, or anything else <a href="https://twitter.com/yazeedBee">follow me on Twitter and DM me</a>.</p>
<p>After that if you enjoy our first meeting, we can discuss ongoing coaching to help you reach your Front-End development goals!</p>
<h2 id="thanksforreading">Thanks for reading</h2>
<p>For more content like this, check out <a href="https://yazeedb.com">https://yazeedb.com!</a></p>
<p>Until next time!</p>
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
