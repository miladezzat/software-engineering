---
card: "/images/default.jpg"
tags: [Nextjs]
description:" We can all likely agree on one thing: React is one of the mos"
author: "Milad E. Fahmy"
title: "Why You Should Learn Next.js as a React Developer"
created: "2021-08-15T19:28:46+02:00"
modified: "2021-08-15T19:28:46+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-nextjs tag-react tag-javascript ">
<header class="post-full-header">
<h1 class="post-full-title">Why You Should Learn Next.js as a React Developer</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/08/fccposter.jpg 300w,
/news/content/images/size/w600/2020/08/fccposter.jpg 600w,
/news/content/images/size/w1000/2020/08/fccposter.jpg 1000w,
/news/content/images/size/w2000/2020/08/fccposter.jpg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/08/fccposter.jpg" alt="Why You Should Learn Next.js as a React Developer">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>We can all likely agree on one thing: React is one of the most popular solutions out there for building interactive web applications, both small and large. </p>
<p>And it is used by so many startups and companies that it is a very valuable skill to have these days.</p>
<p>I discovered Next.js a couple of years back, and was intrigued with what it was trying to accomplish. </p>
<p>In this post, I'll describe my personal journey with Next.js. I'll also discuss why I believe that it is the right time to add it to your React stack.</p>
<h2 id="the-early-web">The Early Web</h2>
<p>Back in the mid-2000s, when the web was young and growing, developers moved from static only HTML pages to more robust and dynamic solutions. </p>
<p>This gave us the ability to create pages with dynamic content using tech like PHP (mind you, JavaScript was very young and non-performant at this time). </p>
<p>You could have a single <strong>profile.php</strong> page and it would take care of Alice, Bob, John, Mehul, and all 15,000 registered people on your website – very convenient.</p>
<p>Then came the JavaScript age. People started realizing that there was this language supported for the web which could be used for so much. </p>
<p>You could set up dynamic form submission, background HTTP requests, nice scrolling effects, and even create webpages on the fly. </p>
<p>The rise of JavaScript and libraries like jQuery allowed web developers to create nice interfaces fully customizable with JavaScript.</p>
<p>Soon, every web developer started pushing more and more JavaScript down the network to the client. Sure, technology evolved, mobile phones and PCs became better with more RAM and cores, but JavaScript started evolving faster. </p>
<p>More functionalities, more features, and more frameworks meant a better user experience and the ability to create an app-like feeling on the web. </p>
<p>But this also meant pushing more and more JavaScript down the network on devices that could not keep up with evolving JavaScript limits.</p>
<h2 id="the-web-was-made-for-html">The Web was made for HTML</h2>
<p>Old, slow mobile devices started giving up - load times became high, there was more lag, JS engines were less powerful, and there was just so much JavaScript to parse!</p>
<p>With frameworks like React and Angular, you're basically pushing huge JavaScript bundles to clients which first have to download the small HTML pages.</p>
<p>Web developers who moved from the PHP age (server-rendered HTML) to the JavaScript age (client rendered HTML) soon started realizing that they screwed up big time. </p>
<p>React was great for interactivity and high-performance components, but the fact that people starting using these tools to build <strong>everything</strong> started to create problems for clients. </p>
<p>A simple <strong>About Us</strong> page, which could be a very simple static HTML/CSS page, was now a page with a whopping JS bundle. The browser first had to download, then parse, then execute, and then change the DOM to display the content.</p>
<p>This was bad for everyone. Clients had higher load times. Browsers had to work hard to run JS (browsers parse and run HTML/CSS very efficiently). And search engines like Google and Bing had a hard time understanding what your page was about, because your source code never contained the real content. It was always embedded somewhere in your JS bundle.</p>
<p>People loved React and similar tools. But they also understood the implications of running too much JS client-side. </p>
<p>On the other hand, they loved how PHP worked, but they didn't like its architecture. So what was the solution?</p>
<h2 id="server-side-rendering-ssr-the-best-of-both-worlds">Server-Side Rendering (SSR) – the best of both worlds</h2>
<p>When developers realized that pushing too much React code on the client was a problem, they thought: Hey, is it possible to code in React, but ship HTML documents to clients? </p>
<p>After all, when the React code is done executing, all you really have is an HTML document anyway. </p>
<p>So they did it. Server-Side Rendering (SSR) for React was born.</p>
<p>Now, with SSR, you can write React code, somehow run it on the server (which was more powerful than your typical client device – like a mobile phone), and then send the HTML document to the client.</p>
<p>Win-win for everybody. You, as a developer, get to code in React - the technology you love. And the visitor on your site gets a plain HTML document (with visible content, and a little rehydrated JS), which gets a massive performance boost. Plus, Google loves you now. </p>
<p>Who wouldn't want that?</p>
<h2 id="but-it-was-too-difficult">But it was too difficult</h2>
<p>Server-side rendering definitely seemed like the solution to this problem. But the problem? It was too difficult to set up correctly. </p>
<p>Proper caching and cache-busting? Could you possibly create static HTML files for pages that didn't change? How should you build a seamless navigation experience on your website even if you have server-side rendered HTML? How should you ease down the load on your servers, or generate on-demand content? </p>
<p>And on top of all this, how do you set up this whole architecture? Sure, React and the web provides all the APIs for these, but they are quite verbose and usually a one-time setup. </p>
<p>If you're someone who's actually building something valuable, after some time you would want the majority of your time to be spent on the <strong>business logic</strong> of your application, and not on the underlying logic.</p>
<h2 id="introducing-next-js">Introducing Next.js</h2>
<p>Next.js is a framework born in heaven. It ships with:</p>
<ol>
<li>Best SEO practices</li>
<li>Caching and Automatic Static Optimization built-in</li>
<li>Fully server-rendered pages</li>
<li>100% React support</li>
<li>Lambda function support (API routes)</li>
<li>Fine tweak your webpack/babel config if needed</li>
<li>And much more!</li>
</ol>
<p>It abstracts away all those performance and development setups you need with a typical React app and allows you to focus only on what matters – your business logic code. </p>
<p>I had my first experience with Next.js 2 years ago when it was very young.</p>
<p>But Next.js 9.5 was released this year with so many features. And I think it's safe to say that it is one of the most powerful tools available in the web development ecosystem, especially if you're a React developer. </p>
<p>I run codedamn (a platform for developers to learn to code) myself on Next.js. There's a massive performance boost to the site compared to your regular React app.</p>
<p>If you're a React developer in 2020, one of the best skills you can learn is Next.js. Here are some benefits it offers you as a developer:</p>
<ol>
<li>Definitely an emerging technology – more job opportunities and possibilities</li>
<li>Server rendered pages means better performance – more clients for you</li>
<li>SEO for your websites baked in – search engines love you</li>
<li>All the benefits of having a server in place – API routes, dynamic content fetching, and stale-while-revalidate feature (oh I love this one)</li>
<li>A great technical skill on your résumé</li>
</ol>
<h2 id="some-next-js-features-i-m-excited-about">Some Next.js features I'm excited about</h2>
<p>Next.js is evolving really fast. They deprecate old functionalities and introduce shiny new things all the time. </p>
<p>As of today, I'm super interested in the framework as a whole, but here are some of my top picks:</p>
<h3 id="-1-stable-incremental-static-regeneration">#1 Stable Incremental Static Regeneration</h3>
<p>Simply speaking, this feature allows you to generate static content <em><em>dynamically.</em></em> Wait, what? Let's see a quick example:</p>
<p>Say you have a blog website (like this one) with a lot of articles. When somebody visits <code>/news/[link]</code> (where <code>[link]</code> is anything), you want to serve them the static page as fast as you can. </p>
<p>But it is possible that you don't want to create <em><em>all </em></em>static pages at build time because it would take you a lot of time. In a few cases, this isn't possible at all at build time.</p>
<p>Also, sometimes your content <em><em>might</em></em> change, like a quick blog edit - so you don't really want a completely static page forever either. So what's the solution?</p>
<p>Using Next.js 9.5+, now you can generate static pages dynamically to the dynamic path and refresh them. </p>
<p>This means that once Next fetches that particular URL, it'll save it as a static page and serve it statically whenever somebody visits the path. At the same time, it'll be open to accepting new paths dynamically. </p>
<p>Not only can you do this, with a revalidate parameter, you can also actually specify that Next.js should update your static pages once every X seconds in the background if there's any change!</p>
<h3 id="-2-webpack-5-support">#2 Webpack 5 Support</h3>
<p>Next.js is heading towards Webpack 5 support too. This is exciting as Webpack 5 brings in some sweet performance and bundle optimizations and drops support for deprecated things in webpack 4, making the core <em><em>lighter</em></em>. </p>
<p>That means your Next.js apps will be faster than ever and more robust.</p>
<h3 id="-3-dropping-of-getinitialprops">#3 Dropping of getInitialProps</h3>
<p>I personally didn't like the concept of having a single function execute on both environments - getInitialProps. </p>
<p>Thankfully, Next.js figured out that there's a much better solution available and they brought in getServerSideProps and getStaticProps as two great methods with good names.</p>
<p><code>getServerSideProps</code>, as the name suggests, allows you to inject props in your Next.js page from the server itself. And <code>getStaticProps</code> allows Next.js to still create static outputs at build time. </p>
<p><code>getStaticProps</code> combined with incremental static regeneration is a killer feature in my opinion. You get the many benefits of a dynamic backend without having a dynamic backend.</p>
<h3 id="-4-persistent-caching-for-page-bundles">#4 Persistent Caching for Page Bundles</h3>
<p>Next.js now also supports persistent caches for pages that are not changed. Before, when you shipped a new Next.js app, Next.js would throw out the whole app and the user had to download all the CSS/JS again, even if those bundles were unchanged. </p>
<p>In the latest version of Next.js released last week, our friends at Vercel introduced persistent caching which is again an absolutely great thing to have performance-wise.</p>
<h3 id="-5-out-of-the-box-support-for-sass-modules-and-typescript">#5 Out of the box support for Sass Modules and TypeScript</h3>
<p>If there's one thing I love more than JavaScript, it is TypeScript. And Sass is sweet too. Most people I know use Sass to power their CSS, and it provides a great developer experience. </p>
<p>Next.js has long offered great support for TypeScript out of the box. But recently they added <strong>module based support</strong> for Sass as well. </p>
<p>This means that your styles can now be written in Sass, local to your modules, with caching and revalidation - all managed by Next.js internally.</p>
<p>Seems like they really want you to develop the best products focusing only on the business logic.</p>
<h2 id="learning-next-js-a-course-">Learning Next.js [a Course]</h2>
<p>I'm creating an exclusive video course on Next.js with best practices, latest framework updates, and super cool things you can do with it. I'm including a bunch of full projects with the framework so you'll get a deep understanding of how to work with this tool.</p>
<p>If you're interested, sign up for early access using this <a href="https://forms.gle/5eZAR3rZvexzBcno7" rel="noopener nofollow">Google form link</a> and I'll make sure to reach out to you when it's out.</p>
<h2 id="conclusion">Conclusion</h2>
<p>I'm going all in on Next.js. The speed with which they're iterating and developing the SSR concept and making it available to so many is just astonishing. </p>
<p>If you signed up using the form link above, expect to hear from me soon with some awesome content for you.</p>
<p>Feel free to hit me up on social media to share what you think: <a href="https://twitter.com/mehulmpt">Twitter</a> and <a href="https://instagram.com/mehulmpt">Instagram</a>.</p>
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
