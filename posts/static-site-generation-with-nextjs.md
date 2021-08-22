---
card: "/images/default.jpg"
tags: [Nextjs]
description: Static websites are as old as the web itself. But the rise of
author: "Milad E. Fahmy"
title: "What is Static Site Generation? How Next.js Uses SSG for Dynamic Web Apps"
created: "2021-08-15T19:27:58+02:00"
modified: "2021-08-15T19:27:58+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-nextjs tag-static-site-generators tag-javascript ">
<header class="post-full-header">
<h1 class="post-full-title">What is Static Site Generation? How Next.js Uses SSG for Dynamic Web Apps</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/11/static-generation.jpg 300w,
/news/content/images/size/w600/2020/11/static-generation.jpg 600w,
/news/content/images/size/w1000/2020/11/static-generation.jpg 1000w,
/news/content/images/size/w2000/2020/11/static-generation.jpg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/11/static-generation.jpg" alt="What is Static Site Generation? How Next.js Uses SSG for Dynamic Web Apps">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Static websites are as old as the web itself. But the rise of JavaScript has opened the door to make those static sites more dynamic. </p>
<p>While that can include building an HTML file by hand, how can we leverage static generation to build apps with modern tools?</p>
<ul>
<li><a href="#what-is-static-generation">What is Static Generation?</a></li>
<li><a href="#what-happens-during-static-generation">What happens during Static Generation?</a></li>
<li><a href="#how-does-next-js-use-static-generation">How does Next.js use Static Generation?</a></li>
<li><a href="#statically-generating-an-app-with-next-js">Statically generating an app with Next.js</a></li>
</ul>
<h2 id="what-is-static-generation">What is Static Generation?</h2>
<p>Static Generation describes the process of compiling and rendering a website or app at build time. The output is a bunch of static files, including the HTML file itself and assets like JavaScript and CSS.</p>
<p>If you haven’t heard of Static Generation but that concept sounds familiar, you might have heard of it by its longer name Static Site Generation or its acronym SSG.</p>
<h2 id="what-happens-during-static-generation">What happens during Static Generation?</h2>
<p>JavaScript-based web apps as we traditionally know them work by running libraries like React or scripts at run time in the browser. </p>
<p>When the browser receives the page, it’s usually simple HTML without a lot of content. This then loads the scripts to pull the content into the page, a process also known as hydration.</p>
<p>With Static Generation, tools like Next.js try to render that page mostly like it would in the browser but at compile time. This gives us the ability to serve the entire content on first load. The scripts still hydrate the page during this process, but ideally with fewer changes or no changes at all.</p>
<h2 id="how-does-next-js-use-static-generation">How does Next.js use Static Generation?</h2>
<p>Out of the box, Next.js will attempt to statically generate any pages that it can. It does this by detecting how an app is fetching its data.</p>
<p>Next.js provides a <a href="https://nextjs.org/docs/basic-features/data-fetching">few different APIs to fetch data</a> including <code>getStaticProps</code> and <code>getServerSideProps</code>, which, depending on how they’re used, determines how Next.js will build your app.</p>
<p>If you only use <code>getStaticProps</code> to fetch data, Next.js will fetch that data at build time, leaving you with a completely static page. </p>
<p>If you use <code>getServerSideProps</code>, Next.js will know that the app requires a server to render those pages. </p>
<p>Alongside a deployment solution like Vercel that <a href="https://vercel.com/solutions/nextjs">will automatically handle configuring a server</a>, Next.js will load any of the data when someone requests the page from the server.</p>
<p>While it doesn’t do it by default, Next.js also provides the ability to export the app into static files into a separate directory after the app has been built.</p>
<p>First, you would run the <code>next build</code> command to build the app, then you would run <code>next export</code> which, by default, makes the app available as static files in the <code>out</code> directory.</p>
<h2 id="how-to-statically-generate-an-app-with-next-js">How to statically generate an app with Next.js</h2>
<p>To get an idea of how this works, we can quickly create a new Next.js app.</p>
<p>The only requirements for this is that you have <a href="https://nodejs.org/en/">Node</a> installed with npm and the ability to use a terminal to run commands.</p>
<h3 id="how-to-create-a-next-js-app">How to create a Next.js app</h3>
<p>Getting started is as simple as running a single line in the terminal.</p>
<p>Open up the directory you’d like to create your project in and run:</p><pre><code>npx create-next-app my-static-nextjs-app
</code></pre>
<p>After the installation is complete, you can navigate to your new project directory:</p><pre><code>cd my-static-nextjs-app
</code></pre>
<p>Once there, start your development server:</p><pre><code>npm run dev
</code></pre>
<p>And once the server is ready, you can open up <a href="http://localhost:3000">http://localhost:3000</a> in your browser where you can now see your new Next.js app!</p>
<figcaption>New Next.js app</figcaption>
</figure>
<h3 id="how-to-build-a-next-js-app">How to build a Next.js app</h3>
<p>Now that we have our application available, let’s try to build it.</p>
<p>In the same directory, run the command:</p><pre><code>npm run build
</code></pre>
<p>If you look at the output inside of the terminal, we see a few important things happen.</p>
<p>First, Next.js lets us know that it’s running through its build process, including optimizing the app for performance, compiling the app, and collecting data.</p>
<figcaption>Building with Next.js</figcaption>
</figure>
<p>Next, we see that Next.js shows us a breakdown of how it’s built each page.</p>
<p>The default Next.js starting template includes a few static pages and an example API route. </p>
<p>Using the legend at the bottom, we can see that all of the pages and assets were statically generated with one route tagged as requiring a server, which would be our API route.</p>
<figcaption>Next.js generating pages</figcaption>
</figure>
<p><em>Note: For the purposes of this walkthrough, we can ignore the API route, but Next.js along with Vercel provides the ability to build lambda functions as part of the Next.js API.</em></p>
<h3 id="how-to-build-a-static-next-js-app">How to build a static Next.js app</h3>
<p>With our Next.js build output, we know that we just built some static pages, but we might have trouble finding them. If we look at the folders and files in our project, it’s not immediately clear where those files are.</p>
<p>When Next.js builds an app, by default, it only outputs that app inside the <code>.next</code> directory. This includes configuration files that tools like Vercel can use and understand to deploy the app.</p>
<p>Technically, that directory includes our entire app, but this isn’t something we can easily deploy to static hosting.</p>
<p>Next.js also provides the ability to export an app. This will take the app that we built and produce a set of static files which we can then use to deploy our app.</p>
<p>Inside of the <code>package.json</code> file, update the <code>build</code> script to include <code>next export</code>:</p><pre><code>"build": "next build &amp;&amp; next export",
</code></pre>
<p>Once updated, run the build command again in the project directory:</p><pre><code>npm run build
</code></pre>
<p>And now we can see that not only did we build the app like we did in our last step, Next.js lets us know that we’re also exporting the app that we built into static files.</p>
<figcaption>Exporting static Next.js app</figcaption>
</figure>
<p>If we look inside of our project folder, we should now see a new directory called <code>out</code>.</p>
<p>If we look inside of that folder, we can now see our entire app statically compiled including the <code>index.html</code> file as well as all of the CSS and JS needed to use the app!</p>
<h2 id="where-can-we-go-from-here">Where can we go from here?</h2>
<p>We learned that we can use Next.js and the concept of Static Generation to statically compile an app. </p>
<p>Tools like Next.js can do this by compiling our code, similar to what we might see in a browser, so that by the time our app hits the browser, it’s all ready to go.</p>
<p>With a simple command, we can also build and compile our app, as well as export it into static files. We can deploy those static files to any static storage service like Vercel or AWS S3. This provides us with an easy way to craft dynamic web apps that are fast and cheap.</p>
<p>Learn more about how Next.js leverages its different APIs to provide both static and dynamic experiences by <a href="https://nextjs.org/docs/basic-features/data-fetching">visiting the Next.js docs</a>.</p>
<p style="margin: 1em 0;">
<a href="https://jamstackhandbook.com/" style="display: block;">
<img src="https://www.freecodecamp.org/news/content/images/size/w1600/2020/11/jamstack-handbook-banner.jpg" alt="Jamstack Handbook" style="width:100%;display: block;margin: 0;border: solid 1px #d2dee9;">
</a>
</p>
</div>
<p style="margin: 0;">
<a href="https://twitter.com/colbyfayock" style="display: block;">
</a>
</p>
<ul style="display:flex;justify-content:center;list-style:none;padding:0;margin: .5em 0 0;font-size: .8em;">
<li style="margin: 0 .6em;padding: 0;">
<a href="https://twitter.com/colbyfayock" style="text-decoration: none;">🐦 Follow Me On Twitter</a>
</li>
<li style="margin: 0 .6em;padding: 0;">
<a href="https://youtube.com/colbyfayock" style="text-decoration: none;">📺 Subscribe To My Youtube</a>
</li>
<li style="margin: 0 .6em;padding: 0;">
<a href="https://www.colbyfayock.com/newsletter/" style="text-decoration: none;">📫 Sign Up For My Newsletter</a>
</li>
<li style="margin: 0 .6em;padding: 0;">
<a href="https://github.com/sponsors/colbyfayock" style="text-decoration: none;">💝 Sponsor Me</a>
</li>
</ul>
</div>
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
