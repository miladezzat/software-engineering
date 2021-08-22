---
card: "/images/default.jpg"
tags: [JavaScript]
description: Frameworks come and go, and while Gatsby may eventually drift
author: "Milad E. Fahmy"
title: "What is Gatsby and why it's time to get on the hype train"
created: "2021-08-15T19:32:42+02:00"
modified: "2021-08-15T19:32:42+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-gatsbyjs tag-reactjs tag-react tag-gatsby tag-frontend tag-front-end-development tag-front-end ">
<header class="post-full-header">
<h1 class="post-full-title">What is Gatsby and why it's time to get on the hype train</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2019/09/gatsby-train.jpg 300w,
/news/content/images/size/w600/2019/09/gatsby-train.jpg 600w,
/news/content/images/size/w1000/2019/09/gatsby-train.jpg 1000w,
/news/content/images/size/w2000/2019/09/gatsby-train.jpg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2019/09/gatsby-train.jpg" alt="What is Gatsby and why it's time to get on the hype train">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Frameworks come and go, and while Gatsby may eventually drift as tech does, the performance and productivity boosts are strong arguments for diving in right away.</p>
<h2 id="wait-up-what-is-gatsby"><strong>Wait up, what is Gatsby?</strong></h2>
<blockquote><a href="https://www.gatsbyjs.org/">Gatsby</a> is a free and open source framework based on React that helps developers build blazing fast <strong>websites</strong> and <strong>apps</strong></blockquote>
<p>Their emphasis (I’ll explain later). I like to describe it as <a href="https://facebook.github.io/create-react-app/">Create React App</a> on steroids, where it’s an easy way to bootstrap a React application and focus on getting productive with the truly different parts of your application. At it’s core, it’s a glorified <a href="https://webpack.js.org/">Webpack</a> app, where everything gets built upon that same Webpack pipeline that you’ve struggled to write and fully understand til this day (or maybe that’s just me).</p>
<p>The beauty though is that what it outputs is a static website (simple HTML file) with your application prerendered for optimal delivery. This means it can essentially run anywhere like simply dumping it in <a href="https://aws.amazon.com/s3/">S3</a> and <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/website-hosting-custom-domain-walkthrough.html">serving it as a static webpage</a> or even easier, have <a href="https://www.netlify.com/">Netlify</a> <a href="https://www.netlify.com/blog/2016/02/24/a-step-by-step-guide-gatsby-on-netlify/">build and serve it for you</a>.</p>
<h3 id="it-s-all-in-the-scripts"><strong>It’s all in the scripts</strong></h3>
<figcaption>Chubbs with Happy Gilmore</figcaption>
</figure>
<p>Gatsby is one of the many tools available that supports the <a href="https://jamstack.org/">JAMstack</a> architecture. For the unfamiliar, JAM stands for Javascript APIs and Markup, or pretty much a static HTML website that utilizes javascript to make the magic happen.</p>
<p>JAMstack apps have a lot of benefits right out of the box including:</p>
<ul>
<li>Easy to host</li>
<li>Cheap to host</li>
<li>It loads super quick (most of the time)</li>
</ul>
<p>This means generally more often than not, you’re going to have a fast site that doesn’t cost you a lot of money to both host and maintain.</p>
<h3 id="sound-a-bit-familiar"><strong>Sound a bit familiar?</strong></h3>
<p>It’s easy to compare this to <a href="https://rubyonrails.org/">Rails</a>, as I hear often from others on my team, and rightfully so. There’s a lot of magic behind the scenes in Gatsby!</p>
<p>But unless you’re purely leaning on plugins and themes (which is fine), at the end of the day you’re still building a React application as you would anywhere else. Your app can <em>pretty much</em> be ported to any other framework (aside from the data sourcing and page generation part). Components are components, styles are styles.</p><pre><code class="language-jsx">const Nav = () =&gt; {
return (
&lt;nav&gt;A normal nav component in a normal Gatsby app.&lt;/nav&gt;
)
}</code></pre>
<p>Gatsby is opinionated on many aspects, but those opinions mostly fall outside of the idea that you’re still building a webpack app and those conventions are of webpack and the config behind it, not necessarily Gatsby.</p>
<h2 id="so-what-actually-makes-it-so-great"><strong>So, what actually makes it so great?</strong></h2>
<h3 id="literally-bootstrap-in-under-a-minute"><strong>Literally bootstrap in under a minute</strong></h3>
<figcaption>Parks and Recreation "Literally"</figcaption>
</figure>
<p>Seriously. Spinning up a new Gatsby site is the literal definition of all those click bait articles saying you can do something in 5 minutes. <a href="https://www.gatsbyjs.org/tutorial/part-zero/#using-the-gatsby-cli">Install the CLI</a> and you’re 3 commands away from your app spun up locally or statically built.</p>
<p>For example, if you wanted to spin up a new barebones project with <a href="https://sass-lang.com/">Sass</a>:</p><pre><code class="language-shell">$ gatsby new my-cool-gatsby-project https://github.com/colbyfayock/gatsby-starter-sass
$ cd my-cool-gatsby-project
$ yarn develop</code></pre>
<figcaption>Bootstrapping a Gatsby app</figcaption>
</figure>
<p>A community of Starters provides an easy entry point to your new app (or the whole thing you want).</p>
<p><em>Note: the whole “under a minute” depends on what kind of connection you’re on, as you’ll need to wait for the dependencies to download and install.</em></p>
<h3 id="bringing-it-all-together-in-the-content-mesh"><strong>Bringing it all together in the content mesh</strong></h3>
<p>One of the concepts behind Gatsby is the idea of the “<a href="https://www.gatsbyjs.org/blog/2018-10-04-journey-to-the-content-mesh/">content mesh</a>” and Gatsby being the solution to pull it all together. Many apps, and growing, are being built with the JAMstack architecture, which helps with the idea that we can source as much of our content from as many places as we want and bring it into one application in a performant way.</p>
<figcaption><a href="https://www.gatsbyjs.org/blog/2018-10-04-journey-to-the-content-mesh/">https://www.gatsbyjs.org/blog/2018-10-04-journey-to-the-content-mesh/</a></figcaption>
</figure>
<p>When all is said and finished, you can pull in data from many sources into one statically compiled application. That is indeed blazing fast. ?</p>
<h3 id="free-performance-boost-"><strong>Free performance boost!</strong></h3>
<p>Out of the box you get your supercharged webpack config including <a href="https://developers.google.com/web/fundamentals/performance/optimizing-javascript/code-splitting/">code splitting</a>, <a href="https://developers.google.com/web/fundamentals/performance/resource-prioritization">prefetching</a>, inline styles, minification of assets, and a <a href="https://www.gatsbyjs.org/docs/gatsby-internals/">ton of other greatness</a>. Upgrade that easily with a wealth of plugins that are easy to configure like setting up your app as a <a href="https://www.gatsbyjs.org/docs/progressive-web-app/">PWA</a> (<a href="https://developers.google.com/web/progressive-web-apps/">progressive web app</a>) and providing the ability for <a href="https://www.gatsbyjs.org/packages/gatsby-plugin-offline/%3E">offline mode</a></p>
<p>Lots of buzzwords in there, but at the end of the day, that means your website should be snappy based on mostly best practices that are optimizing all of your site’s assets for speed and delivery, all while making it as accessible as possible by <a href="https://www.gatsbyjs.org/docs/babel/">transpiling for older browsers</a> and making sure slow connections aren’t wasting valuable resources. It’s difficult to confirm as a hard stat, but <a href="https://twitter.com/kylemathews">Kyle Mathews</a> (Gatsby Founder) claims <a href="https://www.gatsbyjs.org/blog/2017-09-13-why-is-gatsby-so-fast/">Gatsby sites are 2-3x faster than similar types of sites</a>.</p>
<h3 id="increased-productivity-"><strong>Increased productivity!</strong></h3>
<p>No longer do you have to concern yourself with the complexities of making sure your application is performant by rewriting and tweaking your webpack config to the new best practices for each new app you bootstrap. Gatsby does this all for you. It lets you focus on the import bits that makes your app special, not the scaffolding.</p>
<p>This is taken a step further with Gatsby’s <a href="https://www.gatsbyjs.org/plugins/">plugins</a> and the addition of <a href="https://www.gatsbyjs.org/docs/themes/">Themes</a>. Themes are not what you would expect in the traditional sense, or what you would expect from <a href="https://wordpress.org/">Wordpress</a>, but they provide a way to abstract any part of your Gatsby application so you can reuse it app to app.</p>
<p>Have a core component library you use every time? Make it a theme. Have <a href="https://www.gatsbyjs.org/packages/gatsby-source-wordpress/">a particular configuration for data sourcing</a> that you don’t want to rewrite every time? Make it a plugin. Being able to abstract these key pieces to your app saves you time and stress on each new project you spin up, not to mention the ability to maintain those pieces in one place, fixing bugs and improvements with a simple package update.</p>
<h3 id="large-community"><strong>Large community</strong></h3>
<p>Gatsby itself has a decently large community already, but on top of that you have Webpack and React, which have been around for a while. React is the <a href="https://2018.stateofjs.com/front-end-frameworks/overview/">most popular UI framework</a> at the moment, which makes debugging via a simple Google search much easier. It’s hard to find a problem that you’re the first and only to stumble upon.</p>
<p>If you have a Gatsby question in particular, their Github Issues is swarming with people willing to help you debug or tackle the next bug. All they ask is that you politely provide them a way to reproduce, which just makes it easier for them to help you in the first place!</p>
<h3 id="friend-of-hackerman"><strong>Friend of Hackerman</strong></h3>
<p>Like to roll up your sleeve and tweak the pipeline yourself? Gatsby provides easy ways to patch into the processing whether it’s <a href="https://www.gatsbyjs.org/docs/node-apis/">hooking into the lifecycle of the build</a> or tweaking the <a href="https://www.gatsbyjs.org/docs/add-custom-webpack-config/">webpack config</a>. This allows the core of your app to be as easy or advanced as you want, though if you’re that advanced, maybe <a href="https://www.gatsbyjs.org/docs/creating-plugins/">help write a plugin</a> or two!</p>
<figcaption>Hackerman</figcaption>
</figure>
<h2 id="the-maybe-not-so-great-"><strong>The maybe not so great…</strong></h2>
<h3 id="building-fast-yields-more-bugs"><strong>Building fast yields more bugs</strong></h3>
<p>You should expect that you’ll hit some snags here and there staying on the latest and greatest, after all it is open source software developing for more than just your individual site.</p>
<p>The Gatsby team has been <a href="https://github.com/gatsbyjs/gatsby/pulse/monthly">building very rapidly</a>, which is awesome, but moving fast is prone to overlooking things as they build. Luckily, they’re starting to push automated testing all over to help harden the code and they’re intentionally trying to avoid rushing work to address this type of concern.</p>
<p>Just make sure to be thorough on testing your package upgrades and don’t be afraid to downgrade and lock your package version if you’re running into issues.</p>
<h3 id="static-sites-are-first-class-not-web-apps"><strong>Static sites are first class, not web apps</strong></h3>
<p>Gatsby pens itself as an all inclusive solution for static and non-static apps alike, but is it? Support for client only routes requires a <a href="https://www.gatsbyjs.org/packages/gatsby-plugin-create-client-paths/">plugin</a> or <a href="https://www.gatsbyjs.org/docs/client-only-routes-and-user-authentication/">page creation tweak</a> which is fine, but their <a href="https://github.com/gatsbyjs/gatsby/issues/15398">tone</a> on <a href="https://github.com/gatsbyjs/gatsby/issues/16097">issues</a> tends to suggest they’re not always equally focused on the two.</p>
<p>Really the only argument here is why would you use Gatsby over Create React App for that use case? Although it may not be first class, it’s still quite functional with a bonus of the standard underlying Gatsby benefits, but clearly bugs and features aren’t going to be prioritized towards that goal.</p>
<h2 id="just-give-it-a-shot-already-"><strong>Just give it a shot already!</strong></h2>
<p>My opinion or any other’s doesn’t matter until you try it. Worst case you literally wasted 5 minutes between installing the dependencies and deleting the folder with the project in it, which on a positive note is a learning experience. Best case you just discovered an awesome tool that’s going to help you do great things.</p>
<figcaption>Lego - we could build a spaceship!</figcaption>
</figure>
<p>Go build, go experiment, and share what great things you make!</p>
<p><em>Edit: Changed “slowing down” to “avoid rushing” to clarify statement intent, as they’re not slowing down the amount of actual work getting put in, but trying to be more careful with it.</em></p>
<p style="margin: 0;">
<a href="https://twitter.com/colbyfayock" style="display: block;">
</a>
</p>
<ul style="display:flex;justify-content:center;list-style:none;padding:0;margin: .5em 0 0;font-size: .8em;">
<li style="margin: 0 .6em;padding: 0;">
<a href="https://twitter.com/colbyfayock" style="text-decoration: none;">? Follow Me On Twitter</a>
</li>
<li style="margin: 0 .6em;padding: 0;">
<a href="https://youtube.com/colbyfayock" style="text-decoration: none;">?️ Subscribe To My Youtube</a>
</li>
<li style="margin: 0 .6em;padding: 0;">
<a href="https://www.colbyfayock.com/newsletter/" style="text-decoration: none;">✉️ Sign Up For My Newsletter</a>
</li>
</ul>
</div>
<p><em><em>Originally published </em>at <a href="https://www.colbyfayock.com/2019/09/what-is-gatsby-and-why-its-time-to-get-on-the-hype-train">https://www.colbyfayock.com/2019/09/what-is-gatsby-and-why-its-time-to-get-on-the-hype-train</a></em></p>
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
