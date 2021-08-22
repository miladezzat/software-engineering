---
card: "/images/default.jpg"
tags: [Animation]
description: "The web is vast and it s full of static websites and apps. Bu"
author: "Milad E. Fahmy"
title: "How to Add Interactive Animations and Page Transitions to a Next.js Web App with Framer Motion"
created: "2021-08-16T10:04:53+02:00"
modified: "2021-08-16T10:04:53+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-animation tag-nextjs tag-web-development ">
<header class="post-full-header">
<h1 class="post-full-title">How to Add Interactive Animations and Page Transitions to a Next.js Web App with Framer Motion</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/07/framer-motion.jpg 300w,
/news/content/images/size/w600/2020/07/framer-motion.jpg 600w,
/news/content/images/size/w1000/2020/07/framer-motion.jpg 1000w,
/news/content/images/size/w2000/2020/07/framer-motion.jpg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/07/framer-motion.jpg" alt="How to Add Interactive Animations and Page Transitions to a Next.js Web App with Framer Motion">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
# or
npm install framer-motion
</code></pre><p>And now that we’re ready to use <code>motion</code>, we can get started by wrapping out <code>&lt;h1&gt;</code> title with a motion component:</p><pre><code class="language-react">&lt;motion.div&gt;
&lt;h1 className="title"&gt;
Wubba Lubba Dub Dub!
&lt;/h1&gt;
&lt;/motion.div&gt;
</code></pre><p>Wrapping our element is what’s going to allow us to hook into the <a href="https://www.framer.com/api/motion/">Motion API</a>.</p><p>If we reload our page though, it won’t be doing anything yet. That’s because we haven’t yet configured our animation, so let’s do that!</p><p>When using the Motion API with our <code>&lt;motion.x&gt;</code> component, we have two basic concepts we need to use:</p><ul><li>Animation lifecycle</li><li>Variants</li></ul><p>Each of the animation lifecycle props such as <code>initial</code> and <code>animate</code> allow us to define our animation’s name as a variant.</p><p>Our <code>variants</code> prop is where we configure those animations by defining variant names along with the animation we’d like them to perform.</p><p>So to start, let’s add two lifecycle definitions to our title component by adding two lifecycle props:</p><pre><code class="language-react">&lt;motion.div initial="hidden" animate="visible"&gt;
&lt;h1 className="title"&gt;
Wubba Lubba Dub Dub!
&lt;/h1&gt;
&lt;/motion.div&gt;
</code></pre><p>Now, we want to define those:</p><pre><code class="language-react">&lt;motion.div initial="hidden" animate="visible" variants={{
hidden: {},
visible: {},
}}&gt;
&lt;h1 className="title"&gt;
Wubba Lubba Dub Dub!
&lt;/h1&gt;
&lt;/motion.div&gt;
</code></pre><p>We’re defining two variants — hidden and visible — which we then reference in the <code>initial</code> and <code>animate</code> lifecycle props.</p><p>Now again, reloading the page, it still won’t do anything since we still haven’t defined the animations themselves, so let’s do that:</p><pre><code class="language-react">&lt;motion.div initial="hidden" animate="visible" variants={{
hidden: {
scale: .8,
opacity: 0
},
visible: {
scale: 1,
opacity: 1,
transition: {
delay: .4
}
},
}}&gt;
&lt;h1 className="title"&gt;
Wubba Lubba Dub Dub!
&lt;/h1&gt;
&lt;/motion.div&gt;
...
&lt;/motion.li&gt;
</code></pre><p>To:</p><pre><code class="language-react">&lt;style&gt;{`
scale: 1.2,
transition: {
duration: .2
}
}}&gt;
position: 'relative',
zIndex: 1,
background: 'white',
scale: 1.2,
transition: {
duration: .2
}
}}&gt;
function App({ Component, pageProps }) {
return (
&lt;Component {...pageProps} /&gt;
)
}
export default App;
</code></pre><p>While we don’t necessarily have to understand the specifics of what’s happening, we’re basically creating a wrapper where we can patch in additional functionality.</p><p>With this new file, if you reload the page, you shouldn’t see any changes yet.</p><p>Next, we’re going to add our foundation that allows us to set up our page transitions.</p><p>First, let’s import motion at the top of our page:</p><pre><code class="language-react">import { motion } from 'framer-motion';
</code></pre><p>Then, similar to our other animations, let’s create a new <code>&lt;motion.div&gt;</code> component that wraps around our page.</p><pre><code class="language-react">&lt;motion.div initial="pageInitial" animate="pageAnimate" variants={{
pageInitial: {
opacity: 0
},
pageAnimate: {
opacity: 1
},
}}&gt;
&lt;Component {...pageProps} /&gt;
&lt;/motion.div&gt;
</code></pre><p>And on our motion component, we’re going to use it as a key:</p><pre><code class="language-react">&lt;motion.div key={router.route} initial="pageInitial" animate="pageAnimate" variants={{
position: 'relative',
zIndex: 1,
background: 'white',
scale: [1, 1.4, 1.2],
rotate: [0, 10, -10, 0],
transition: {
duration: .2
}
}}&gt;
'hue-rotate(0)',
'hue-rotate(360deg)',
'hue-rotate(45deg)',
'hue-rotate(0)'
],
'hue-rotate(0) contrast(100%)',
'hue-rotate(360deg) contrast(200%)',
'hue-rotate(45deg) contrast(300%)',
'hue-rotate(0) contrast(100%)'
],
</code></pre><p>Next, we want to wrap our <code>&lt;motion.div&gt;</code> component with our new <code>AnimatePresence</code> component:</p><pre><code class="language-react">&lt;AnimatePresence&gt;
&lt;motion.div key={router.route} initial="pageInitial" animate="pageAnimate" variants={{
</code></pre><p>With our component wrapped, we can now set our new lifecycle prop <code>exit</code> &nbsp;along with its variant:</p><pre><code class="language-react">&lt;motion.div key={router.route} initial="pageInitial" animate="pageAnimate" exit="pageExit" variants={{
pageInitial: {
opacity: 0
},
pageAnimate: {
opacity: 1
},
pageExit: {
backgroundColor: 'white',
filter: `invert()`,
opacity: 0
}
}}&gt;
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
<hr>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
