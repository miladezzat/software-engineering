---
card: "/images/default.jpg"
tags: [Jamstack]
description: The Jamstack architecture is a modern approach to an old idea
author: "Milad E. Fahmy"
title: "How to Build a Jamstack Site with Next.js and Vercel - Jamstack Handbook"
created: "2021-08-15T19:28:29+02:00"
modified: "2021-08-15T19:28:29+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-jamstack tag-nextjs tag-javascript ">
<header class="post-full-header">
<h1 class="post-full-title">How to Build a Jamstack Site with Next.js and Vercel - Jamstack Handbook</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/09/jamstack-handbook.jpg 300w,
/news/content/images/size/w600/2020/09/jamstack-handbook.jpg 600w,
/news/content/images/size/w1000/2020/09/jamstack-handbook.jpg 1000w,
/news/content/images/size/w2000/2020/09/jamstack-handbook.jpg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/09/jamstack-handbook.jpg" alt="How to Build a Jamstack Site with Next.js and Vercel - Jamstack Handbook">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>The Jamstack architecture is a modern approach to an old idea: making fast, static websites, but making them dynamic with tools like JavaScript. </p>
<p>How can we leverage the web framework Next.js and hosting platform Vercel to build and deploy performant and reliable web apps?</p>
<p><em>Note: This is a preview of my <a href="https://jamstackhandbook.com/">Jamstack Handbook</a>, a guide to everything you need to know about the Jamstack. It has 3 tutorials, including this one. <a href="https://jamstackhandbook.com/">Get your copy</a> and learn how to build fast, dynamic apps with JavaScript and the static web.</em></p>
<ul>
<li><a href="#what-will-we-build">What will we build?</a></li>
<li><a href="#step-1-getting-started-with-a-next-js-react-app">Step 1: Getting started with a Next.JS React app</a></li>
<li><a href="#step-2-setting-up-the-project-with-git">Step 2: Setting up the project with Git</a></li>
<li><a href="#step-3-deploying-next-js-with-vercel">Step 3: Deploying Next.js with Vercel</a></li>
<li><a href="#what-did-we-just-deploy">What did we just deploy?</a></li>
<li><a href="#understanding-modern-ci-cd-with-git">Understanding modern CI / CD with Git</a></li>
<li><a href="#make-a-change-and-watch-it-automatically-deploy">Make a change and watch it automatically deploy</a></li>
<li><a href="#what-did-we-learn">What did we learn?</a></li>
</ul>
<p><a href="https://nextjs.org/">Next.js</a> is a web framework that’s built and maintained by <a href="https://vercel.com/">Vercel</a>. Next.js makes it easy to spin up a new React application and provides a ton of features out of the box like server side rendering (SSR) and static site generation (SSG).</p>
<h2 id="what-will-we-build">What will we build?</h2>
<p>Our project itself will be relatively simple. We’re going to use the default Next.js Starter as a way to easily bootstrap the project, learn how to configure Next.js to statically compile, and then deploy that project with our customizations to Vercel.</p>
<blockquote>A Starter is a template that allows developers to recreate that template from the command line. When installing the starter, the framework will set up the project and install all dependencies.</blockquote>
<h2 id="step-1-getting-started-with-a-next-js-react-app">Step 1: Getting started with a Next.JS React app</h2>
<p>To get started, we first want to navigate to the directory we want to create our project in.</p>
<p>We’ll use a Starter to create our project. To do this, we have two options for a package manager to use: yarn or npm. You can choose whichever you feel more comfortable with for the remainder of the walkthrough.</p><pre><code>yarn create next-app
# or
npx create-next-app</code></pre>
<figcaption>Creating a new Next.js app</figcaption>
</figure>
<p>When running this command, Next.js will first ask you for a project name. Here we can use any name we want to identify the project. I’m going to use my-nextjs-app.</p>
<figcaption>Naming a Next.js project</figcaption>
</figure>
<p>Once installation is finished, we’re now ready to get started with Next.js.</p>
<p>Navigate in your terminal to the new directory where your project is located and run:</p><pre><code>yarn dev
# or
npm run dev</code></pre>
<p>This will start your development server, which will make your new site available at <a href="http://localhost:3000">http://localhost:3000</a>.</p>
<figcaption>Starting Next.js development server</figcaption>
</figure>
<p>If you open up your <a href="http://localhost:3000">http://localhost:3000</a> address, you should now see the Next.js default project!</p>
<figcaption>New Next.js app</figcaption>
</figure>
<h2 id="step-2-setting-up-the-project-with-git">Step 2: Setting up the project with Git</h2>
<p>You'll want to set this next step up on your own. Create a new repository with your favorite Git provider that’s supported by Vercel.</p>
<p>At the time of writing this, <a href="https://vercel.com/docs/git-integrations">Vercel supports GitHub, Gitlab, and Bitbucket</a>.</p>
<p>If you’re choosing a provider for the first time, GitHub is a solid option and is easy to get started.</p>
<p>You’ll then want to add your project to that new repository and push the project up to Git.</p>
<blockquote>Need help? Check out “Adding an existing project to GitHub using the command line” <a href="https://docs.github.com/en/github/importing-your-projects-to-github/adding-an-existing-project-to-github-using-the-command-line">https://docs.github.com/en/github/importing-your-projects-to-github/adding-an-existing-project-to-github-using-the-command-line</a></blockquote>
<p>For the rest of this walkthrough, I’ll be referencing GitHub, but the instructions should be the same for any supported provider.</p>
<figcaption>Next.js app on GitHub</figcaption>
</figure>
<h2 id="step-3-deploying-next-js-with-vercel">Step 3: Deploying Next.js with Vercel</h2>
<p>Once your project is set up with GitHub, navigate to vercel.com and log in.</p>
<p>If you don’t already have a Vercel account, you should create one now. I would recommend creating an account with your GitHub account as it will help you import your project.</p>
<p>Inside the Vercel dashboard, click <strong>Import Project</strong>.</p>
<figcaption>Import project to Vercel</figcaption>
</figure>
<p>Next, under Import Git Repository, click <strong>Continue</strong>.</p>
<figcaption>Import Git repository to Vercel</figcaption>
</figure>
<p>Vercel will now ask for the repository URL. This will be the homepage for the repository you just created for your project.</p>
<figcaption>Add Git repo URL to Vercel</figcaption>
</figure>
<p>After you click Continue, Vercel has already detected that your project uses Next.js. This means that we don’t need to set up and custom configurations, and we can hit Deploy!</p>
<figcaption>Deploy Next.js project to Vercel</figcaption>
</figure>
<p>At this point, Vercel will get to work and start to build the new project and deploy it to their infrastructure.</p>
<p>Once it’s finished, it will congratulate you and give you a link to visit your site.</p>
<figcaption>Vercel project successfully deployed</figcaption>
</figure>
<p>Click Visit and you’ll be directed to your project live on the internet:</p>
<figcaption>Next.js app live</figcaption>
</figure>
<h2 id="what-did-we-just-deploy">What did we just deploy?</h2>
<p>We just created a new React app with Next.js and deployed it to Vercel.</p>
<p>We’ll walk through each specific step:</p>
<ul>
<li><strong>Create Next App:</strong> We first created a new Next.js project on our computer. This provided us with a new React application complete with dependencies and code to get started with a basic website.</li>
<li><strong>Add Project to Git:</strong> We added our new Next.js project to a Git repository online that’s supported by Vercel. This allows us to easily interface with the project with other services like Vercel.</li>
<li><strong>Connect Git to Vercel:</strong> We imported our project from Git into Vercel. This allowed Vercel to interact with our code.</li>
<li><strong>Build &amp; Deploy with Vercel:</strong> Vercel downloaded our code, was able to recognize it was a Next.js project, built our project, and deployed the compiled output to its infrastructure and made it available on the web.</li>
</ul>
<p>If you were waiting for more steps to get your project out to the world, there are none! The entry point for publishing a new React project is now lower than it’s ever been and Next.js and Vercel are helping you get there.</p>
<h2 id="understanding-modern-ci-cd-with-git">Understanding modern CI / CD with Git</h2>
<p>Another benefit of modern infrastructure providers like Vercel, is that when utilizing GitHub as a service connection, Vercel can watch for changes on our main branch.</p>
<p>Once Vercel recognizes that a change was made, it will download the latest code and re-run the same process as we did the first time (aside from any caching and optimization).</p>
<p>This means that any time we have new changes to our production branch, they’ll automatically be deployed. </p>
<h2 id="make-a-change-and-watch-it-automatically-deploy">Make a change and watch it automatically deploy</h2>
<p>To test out the automatic deployments, let’s make a change to our project.</p>
<p>Inside our project, let’s make a change to some of the page content inside of <code>pages/index.js</code>. I’m going to change the title to “Colby’s Next.js Project”.</p><pre><code class="language-jsx">&lt;h1 className={styles.title}&gt;
Colby's Next.js App
&lt;/h1&gt;</code></pre>
<figcaption>Next.js app with change</figcaption>
</figure>
<p>Next, commit this change to your main Git branch and push it up to GitHub.</p>
<p>If you wait a few seconds and navigate back to <a href="https://vercel.com">vercel.com</a>, find your project and click on the Deployments tab.</p>
<figcaption>Vercel deployment when change detected</figcaption>
</figure>
<p>You’ll see that your project is now running or might have already finished if you weren’t quick enough. Now if you open your website link again, you’ll see the changes deployed!</p>
<figcaption>Deployed changed Next.js app to Vercel</figcaption>
</figure>
<h2 id="what-did-we-learn">What did we learn?</h2>
<p>Next.js is a web framework that allows us to quickly and easily spin up a new React application. </p>
<p>This, along with other similar frameworks, can be useful to get immediately productive instead of spending time building the project framework ourselves.</p>
<p>Vercel is a hosting and deployment platform that allows us to integrate with our favorite supported Git provider. Once connected, Vercel will download our project, build our project, and deploy the output to the internet.</p>
<p>Modern infrastructure tools like Vercel will watch for changes on our Git repository and will build and deploy our project so that we’re always seeing the latest version.</p>
<h2 id="learn-more-about-the-jamstack-">Learn more about the Jamstack!</h2>
<p>You can learn more about the Jamstack, including 2 more in depth tutorials, with my Jamstack Handbook.</p>
<p style="text-align: center;">
<a href="https://jamstackhandbook.com/">
<img src="https://www.freecodecamp.org/news/content/images/2020/09/jamstack-handbook-social.jpg" alt="Jamstack Handbook: Building fast, dynamic apps with Javascript and the static web" style="
max-width: 840px;
border: solid 5px #0A64EC;
">
<button style="
background-color: #9162BB;
color: white;
font-weight: bold;
padding: .5em 1em;
border-radius: .2em;
box-shadow: 0 2px 4px rgba(0,0,0,.25);
">Order at jamstackhandbook.com</button>
</a>
</p>
<p style="margin: 0;">
<a href="https://twitter.com/colbyfayock" style="display: block;">
</a>
</p>
<ul style="display:flex;justify-content:center;list-style:none;padding:0;margin: .5em 0 0;font-size: .8em;">
<li style="margin: 0 .6em;padding: 0;">
<a href="https://twitter.com/colbyfayock" style="text-decoration: none;">? Follow Me On Twitter</a>
</li>
<li style="margin: 0 .6em;padding: 0;">
<a href="https://youtube.com/colbyfayock" style="text-decoration: none;">? Subscribe To My Youtube</a>
</li>
<li style="margin: 0 .6em;padding: 0;">
<a href="https://www.colbyfayock.com/newsletter/" style="text-decoration: none;">✉️ Sign Up For My Newsletter</a>
</li>
<li style="margin: 0 .6em;padding: 0;">
<a href="https://github.com/sponsors/colbyfayock" style="text-decoration: none;">? Sponsor Me</a>
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
