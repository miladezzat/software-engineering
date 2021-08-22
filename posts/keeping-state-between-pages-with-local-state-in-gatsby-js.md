---
card: "/images/default.jpg"
tags: [JavaScript]
description: "When using the static site generator Gatsby you don’t have a "
author: "Milad E. Fahmy"
title: "How to keep state between pages with local state in Gatsby.js"
created: "2021-08-16T10:06:01+02:00"
modified: "2021-08-16T10:06:01+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-web-development tag-gatsby ">
<header class="post-full-header">
<h1 class="post-full-title">How to keep state between pages with local state in Gatsby.js</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2019/08/gatsby1.jpeg 300w,
/news/content/images/size/w600/2019/08/gatsby1.jpeg 600w,
/news/content/images/size/w1000/2019/08/gatsby1.jpeg 1000w,
/news/content/images/size/w2000/2019/08/gatsby1.jpeg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2019/08/gatsby1.jpeg" alt="How to keep state between pages with local state in Gatsby.js">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
// Import the component at the top of the file
import MailWidgetWrapper from './src/components/MailWidgetWrapper';
export const wrapPageElement = ({ element, props }) =&gt; (
&lt;MailWidgetWrapper {...props}&gt;{element}&lt;/MailWidgetWrapper&gt;
);</code></pre><p>Here, I’ve created a wrapper component that will be available on all the routes and pages in Gatsby. That’s Awesome! And just what we need. The <strong><strong>wrapper component</strong></strong> looks like this:</p><pre><code class="language-js">// MailWidgetWrapper.js
import React from 'react';
import MailWidget from './MailWidget';
const MailWidgetWrapper = ({ children }) =&gt; (
&lt;&gt;
{children}
&lt;MailWidget /&gt;
&lt;/&gt;
);
export default MailWidgetWrapper;</code></pre><p>This is a really simple React Component who’s only function is to wrap our app and provide it with the MailWidget component. But how does <strong><strong>wrapPageElement</strong></strong> work?</p><h2 id="wrappageelement">wrapPageElement</h2><p>First, I also highly recommend using gatsbyjs.org as much as you can for finding answers to anything regarding Gatsby. The site is excellent and full of really good and thorough explanations of most problems you will encounter.</p><p>In our case, if you look at the code above, we have two parameters that get created for us in the <code>wrapPageElement</code> callback function: <strong><strong>element and props. </strong></strong></p><p>You should be familiar with props if you use React so they need no further introduction. In this case, the props are used by the page we’re currently on. We don’t need to use any of these props, as we only need to use the children (automatically created by React) prop. </p><p>The <code>MailWidgetWrapper</code> just renders the children and the <code>MailWidget</code>. The children are the page we’re sending into the <code>MailWidgetWrapper</code> component from the <strong><strong>gatsby-browser.js</strong></strong> file, as shown below. The actual page lives in the <strong><strong>element </strong></strong>parameter and that’s the one we’re sending in with the expression <code>{element}</code>.</p><pre><code class="language-js">&lt;MailWidgetWrapper {…props}&gt;{element}&lt;/MailWidgetWrapper&gt;</code></pre><p>So in short, the parameters we get from <code>wrapPageElement</code> can be summarized:</p><p><strong><strong>The props parameter are the props from the actual page we’re on. And the element parameter is the actual page we’re on</strong></strong></p><h2 id="the-mailwidget-component">The MailWidget Component</h2><p>My actual <code>MailWidget</code> component is quite large and has a lot of code that’s not relevant here. That’s why I'm just showing you a simple scaffolded example version of a <code>MailWidget</code> component below. This component is not actually relevant for the task of explaining the <code>wrapPageElement</code> function.</p><p>The component can virtually be anything you like and has nothing to do with the implementation above. In my case it’s a <code>MailWidget</code>. It’s all up to you and what stateful component/s you need to be available on all your page routes.</p><pre><code class="language-js">// MailWidget.js
import React, { useState } from 'react';
const MailWidget = () =&gt; {
const [isVisible, setIsVisible] = useState(false);
const toggleVisible = () =&gt; {
setIsVisible(!isVisible);
};
return (
&lt;div className={isVisible ? 'visible' : ''}&gt;
&lt;button type="button" onClick={toggleVisible}&gt;
Hide/Show MailWidget
&lt;/button&gt;
&lt;h1&gt;Hello, I'm your mailwidget&lt;/h1&gt;
&lt;/div&gt;
);
};
export default MailWidget;</code></pre><p>By the way, I’m all in on Hooks. I love Hooks and will use them in everything I do in React! That’s why I created my state with the <code>useState</code> hook in this one. The component above just uses a local state to decide if it should show itself or not.</p><h2 id="conclusion">Conclusion</h2><p>There you have it! Hopefully, you’ve learned that it’s not difficult to have a component keeping its state between pages in Gatsby. And we all love Gatsby.js don’t we? ?</p><p>Also, thank you for reading this post. I’m a Developer from Sweden that loves to teach and code. I also create courses on React and Gatsby online. You can find me on Udemy. Just search for Thomas Weibenfalk or hook me up on Twitter <strong><strong>@weibenfalk</strong></strong><br>I also have a Youtube channel were I teach free stuff, check it out <a href="https://www.youtube.com/channel/UCnnnWy4UTYN258FfVGeXBbg"><strong><strong>here</strong></strong></a><strong>.</strong></p>
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
