---
card: "/images/default.jpg"
tags: [React]
description: Developers have spent a great deal of time talking about what
author: "Milad E. Fahmy"
title: "Is React a Library or a Framework? Here's Why it Matters"
created: "2021-08-15T19:26:40+02:00"
modified: "2021-08-15T19:26:40+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-react tag-libraries tag-framework tag-javascript ">
<header class="post-full-header">
<h1 class="post-full-title">Is React a Library or a Framework? Here's Why it Matters</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2021/04/is-react-a-library-or-framework.png 300w,
/news/content/images/size/w600/2021/04/is-react-a-library-or-framework.png 600w,
/news/content/images/size/w1000/2021/04/is-react-a-library-or-framework.png 1000w,
/news/content/images/size/w2000/2021/04/is-react-a-library-or-framework.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2021/04/is-react-a-library-or-framework.png" alt="Is React a Library or a Framework? Here's Why it Matters">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Developers have spent a great deal of time talking about what React is. But they have left out why this topic matters so greatly for anyone who builds React applications.</p>
<p>The answer to this question is essential for any React developer, regardless of their skill level. This is because it indicates what they must know and how they must work in developing any React application.</p>
<p>Whether you are a new or an advanced React developer, I hope this thoughtful analysis will improve your own development process as you build your next React project.</p>
<blockquote>Looking for the complete guide to become an in-demand React developer? Check out the <a href="https://reactbootcamp.com">React Bootcamp</a>.</blockquote>
<h2 id="why-is-react-a-library-and-not-a-framework">Why is React a library and not a framework?</h2>
<p>React was made to build full-fledged web applications. As a result, it's often compared with other tools that developers use to build apps, like Angular, Vue, and Svelte. </p>
<p>React is written in JavaScript and is used to make better JavaScript applications. We refer to React specifically as a <strong>library</strong>. </p>
<p><em>But what makes React a library and not a framework? </em></p>
<p>The reason becomes clear when we look at other similar tools that are used to create complete web applications.</p>
<p>Let's look at a project like Angular, which shares the same purpose as React (to create single-page web apps). What sets it apart is the fact that when you set up an Angular project, it is bootstrapped with nearly every single thing that you'll need to make a complete, large-scale app. </p>
<blockquote>Many developers like to refer to frameworks or similar solutions as having "batteries included." </blockquote>
<p>Frameworks are a common choice for companies and anyone looking to make enterprise JavaScript applications, because they include resources that a large-scale application would likely need. This includes built-in tools for common tasks like creating forms, running automated tests, making network requests, and much more.</p>
<p>In short, everything that you need to make a complete application is included in your Angular project when it's generated. But that is not the case with React.</p>
<h2 id="react-is-fundamentally-unopinionated">React is fundamentally "unopinionated"</h2>
<p>While popular tools have emerged like Create React App, which allow you to create a complete React project in a single command, React is often referred to as "unopinionated." </p>
<p><em>What does it mean for React to be unopinionated?</em></p>
<p>The React and React DOM libraries give us the means of building a user interface with the JSX syntax, plus powerful state management tools via hooks, among other things.</p>
<p>However, React itself does not include many of the React-specific libraries you're going to need for most projects. Angular and Vue, by comparison, include many more tools all bundled within the core package itself.</p>
<p>Many developers consider this discussion of what is and isn't a library to be trivial. But it has real consequences for our development process. In other words, because React is a library and not a framework, <strong>becoming a skilled React developer entails having a good knowledge of third-party React libraries</strong>.</p>
<h2 id="since-react-is-a-library-you-must-choose-the-tools-on-your-own">Since React is a library, you must choose the tools on your own</h2>
<p>That means, in order to build complete React applications, you will need to choose these packages and tools on your own. </p>
<p>Here are a few examples of decisions that I often need to make when I'm building a React application myself: </p>
<p>For a form library, I have to decide whether I want to use the package React Hook Form or Formik. These are both React-specific form libraries to add important features to our forms like validation. </p>
<div class="kg-gallery-container">
<div class="kg-gallery-row">
<div class="kg-gallery-image"><img src="https://www.freecodecamp.org/news/content/images/2021/04/formik.png" width="1274" height="697" alt="" srcset="https://www.freecodecamp.org/news/content/images/size/w600/2021/04/formik.png 600w, https://www.freecodecamp.org/news/content/images/size/w1000/2021/04/formik.png 1000w, https://www.freecodecamp.org/news/content/images/2021/04/formik.png 1274w" sizes="(min-width: 720px) 720px"></div>
<div class="kg-gallery-image"><img src="https://www.freecodecamp.org/news/content/images/2021/04/react-hook-form.png" width="1263" height="696" alt="" srcset="https://www.freecodecamp.org/news/content/images/size/w600/2021/04/react-hook-form.png 600w, https://www.freecodecamp.org/news/content/images/size/w1000/2021/04/react-hook-form.png 1000w, https://www.freecodecamp.org/news/content/images/2021/04/react-hook-form.png 1263w" sizes="(min-width: 720px) 720px"></div>
</div>
</div>
</figure>
<p>For testing my React application, I might use either React Testing Library, Jest, or some combination of the two. </p>
<p>For making network requests, I might need to choose between the Fetch API and Axios. I might also need to decide if I want to add an additional library to make managing my server state easier, such as React Query or SWR.</p>
<h2 id="the-tools-you-choose-depend-on-your-app-and-knowledge-of-them">The tools you choose depend on your app and knowledge of them</h2>
<p>This question of whether React is a library or framework is important because any React developer must know what their choices are and which choice to make given the type of React application they're building.</p>
<p>If you're building an app without many forms, you might not need a form library at all. If you're more confident with the Fetch API, you might use that over something like Axios. </p>
<p>It really depends not only on what the demands of the app are, but also on what your preferences are as a developer. This is arguably an advantage that React has as a library and why I believe it's very popular among newer developers. It doesn't lock you into one choice or hold you to any specific libraries other than React itself. </p>
<p>You're able to make your own decisions, and you're able to have more freedom overall, as a developer. </p>
<p>That being said, even though React is not a framework this does not diminish its presence in the corporate realm. It's still used to build complex and impressive applications of all kinds. There are many lists of the large-scale React applications that businesses have made and which you likely use on a daily basis.</p>
<h2 id="you-need-to-keep-up-with-emerging-libraries">You need to keep up with emerging libraries</h2>
<p>If we were talking about which form library to choose two years ago, I would likely have included Redux Form. As for a data fetching library, I couldn't have mentioned React Query or SWR, because they weren't created (or hadn't gained much traction), until the last year or so.</p>
<p>Because React apps are often reliant upon third-party libraries, newer libraries come about that improve upon the old ones. Individual developers and teams transition to different tools to get the job done and the ecosystem changes as a whole.</p>
<p>Like it or not, React being a library and not a framework entails a large, shifting network of other libraries we must be aware of to build our projects. Some of which may fall out of favor and be replaced by others or may become deprecated and no longer supported as open-source projects. </p>
<p>In short, React being a library may require us to pay more attention to what is going on <em>around</em> React, as compared to if it was a framework.</p>
<h2 id="wish-react-was-a-framework-there-are-many-">Wish React was a framework? There are many!</h2>
<p>It's worth noting that there are frameworks out there that are based upon React. </p>
<p>While React itself is just a library, many React-based frameworks have cropped up in recent years to provide developers with a more powerful set of built-in tools. These allow you to build projects faster without needing as many third-party libraries. </p>
<p>Some of the most popular of these frameworks include Next.js, Gatsby, and Redwood.js, all of which are used to create full-scale dynamic and static React applications.</p>
<p>This is, in my opinion, the great advantage of frameworks – you do not have to make as many choices throughout the development process.</p>
<h2 id="use-react-s-flexibility-to-your-advantage">Use React's flexibility to your advantage</h2>
<p>Be aware that going forward, there is a robust ecosystem of React-focused libraries that you can add to your React project to achieve whatever you're looking for, from the most general tasks to the most specific. </p>
<p>This is thanks to React's popularity and widespread usage. But also note, especially if you're coming from an opinionated framework like Angular or Vue, that there are many React-based frameworks that you can rely upon and learn about to build equally functional and featureful applications as well.</p>
<h2 id="wanttomasterreactjointhereactbootcamp">Want to master React? Join The React Bootcamp</h2>
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
