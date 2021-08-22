---
card: "/images/default.jpg"
tags: [JavaScript]
description: "A growing trend in front end development is the idea that you"
author: "Milad E. Fahmy"
title: "Put Down the Javascript: Learn HTML & CSS first"
created: "2021-08-15T22:50:15+02:00"
modified: "2021-08-15T22:50:15+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-html tag-css tag-front-end-development ">
<header class="post-full-header">
<h1 class="post-full-title">Put Down the Javascript: Learn HTML &amp;&nbsp;CSS first</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2019/08/put-down-the-javascript.png 300w,
/news/content/images/size/w600/2019/08/put-down-the-javascript.png 600w,
/news/content/images/size/w1000/2019/08/put-down-the-javascript.png 1000w,
/news/content/images/size/w2000/2019/08/put-down-the-javascript.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2019/08/put-down-the-javascript.png" alt="Put Down the Javascript: Learn HTML &amp;&nbsp;CSS first">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>A growing trend in front end development is the idea that you can dive right in to Javascript and succeed. Honestly, for better or worse you probably can. But you’re just building on top of a fragile foundation that will come back to bite you.</p><h3 id="why-do-i-need-html-or-css">Why do I need HTML or CSS?</h3><p>The UI frameworks that we know today like <a href="https://reactjs.org/" rel="noopener">React</a> and <a href="https://vuejs.org" rel="noopener">Vue</a> build on top of the basic building blocks of a webpage: HTML and CSS. Though these UI frameworks supercharge these basics through some cool tools and Javascript, what you’re building is fundamentally the same thing as the <a href="https://www.spacejam.com/archive/spacejam/movie/jam.htm" rel="noopener">Space Jam website</a> from 1996.</p><p>But I get it, writing HTML and CSS manually is dated right?</p><h3 id="understand-what-your-tools-are-doing">Understand what your tools are doing</h3><p>Having at least a basic understanding of what’s going on under the hood will help you immensely as you develop and debug your applications.</p><p>You might have run into a few odd things in the browser, such as why does HTML transform code there? Using the following as an example:</p><pre><code class="language-html">&lt;style&gt;
p {
color: purple;
}
&lt;/style&gt;
&lt;h1&gt;My Cool Page&lt;/h1&gt;
&lt;p&gt;
Some cool stuff
&lt;div&gt;Is this still cool?&lt;/div&gt;
background: linear-gradient(90deg, #eff1f1 30%, #f7f8f8 50%, #eff1f1 70%);
background-size: 400%;
animation: loading 1.2s ease-in-out infinite;
}
@keyframes loading {
0% {
background-position: 100% 50%;
}
100% {
background-position: 0 50%;
}
&lt;h1&gt;My&lt;/h1&gt;
&lt;h1&gt;Content&lt;/h1&gt;
&lt;h1&gt;Is&lt;/h1&gt;
&lt;h1&gt;Important&lt;/h1&gt;</code></pre><p>Consider the outline of this blog post:</p><pre><code class="language-markdown">- Put Down the Javascript - Learn HTML &amp; CSS
- Why do I need HTML or CSS?
- Understand what Your tools are doing
- Learn the magic of CSS
...</code></pre><p>“Learn the magic of CSS” is not the key takeaway from the page, so I wouldn’t want to feature that as the most important. The title of the post however, “Put Down the Javascript — Learn HTML &amp; CSS”, reflects the overall story, making it the most important, so I would want to make it #1.</p><p>So with my HTML, I would want to make it look something more like:</p><pre><code class="language-html">&lt;h1&gt;Put Down the Javascript - Learn HTML &amp; CSS&lt;/h1&gt;
&lt;h2&gt;Why do I need HTML or CSS?&lt;/h2&gt;
&lt;h2&gt;Understand what Your tools are doing&lt;/h2&gt;
&lt;h2&gt;Put Down the JS - Learn HTML &amp; CSS/h2&gt;</code></pre><p>This lets Google, Bing, and all the other search engines know exactly what should be the most important part of the page and help identify the general hierarchy.</p><h3 id="drive-accessibility-by-inclusive-development">Drive accessibility by inclusive development</h3><p>By not coding responsibly, we automatically exclude people from accessing the site we work so hard to build. Often these people care about what’s getting built just as much if not more than you and I do. </p><p>By doing a little homework the first time and spending an extra second thinking about what we’re writing, we can be inclusive to all friends visiting our sites.</p><p>Take a simple navigation list commonly seen in most websites today. You might be tempted to write out a few <code>div</code> s because they work right?</p><pre><code class="language-html">&lt;div className="nav"&gt;
&lt;div&gt;&lt;a href="#"&gt;Link 1&lt;/a&gt;&lt;/div&gt;
&lt;div&gt;&lt;a href="#"&gt;Link 2&lt;/a&gt;&lt;/div&gt;
&lt;div&gt;&lt;a href="#"&gt;Link 3&lt;/a&gt;&lt;/div&gt;
&lt;/div&gt;</code></pre><p>The issue is, they’re not as easy for screen readers to pick up on. To fix this, you /technically/ can write even less HTML ( <code>div</code> is 3 characters, <code>ul</code> and <code>li</code> are 2 ?).</p><pre><code class="language-html">&lt;ul className="nav"&gt;
&lt;li&gt;&lt;a href="#"&gt;Link 1&lt;/a&gt;&lt;/li&gt;
&lt;li&gt;&lt;a href="#"&gt;Link 2&lt;/a&gt;&lt;/li&gt;
&lt;li&gt;&lt;a href="#"&gt;Link 3&lt;/a&gt;&lt;/li&gt;
&lt;/ul&gt;</code></pre><p>Taking it a step further, if this is your navigation menu, wrap it in an <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav" rel="noopener">HTML 5 navigation element</a> (<code>&lt;nav&gt;</code>) and <a href="https://www.w3.org/WAI/tutorials/menus/structure/#identify-menus" rel="noopener">users will now be able to directly access the menu</a>.</p><p>Check out <a href="https://a11yproject.com" rel="noopener">The A11y Project</a> for more good tips on accessibility.</p><h3 id="simplify-your-code-embrace-native-functionality">Simplify your code, embrace native functionality</h3><p>You would be surprised how much functionality <a href="https://dev.to/ananyaneogi/html-can-do-that-c0n" rel="noopener">exists natively in modern browsers</a>, with more browser support than you probably need (sorry to those of you who still support IE9).</p><p>With some basic HTML, you can build a text input that has searchable, autocomplete-like text in a dropdown:</p><pre><code>&lt;label&gt;My Favorite Color&lt;/label&gt;
&lt;input type="text" name="color" list="colors"&gt;
&lt;datalist id="colors"&gt;
&lt;option value="Magenta"&gt;
&lt;option value="Purple"&gt;
&lt;option value="Ultraviolet"&gt;
.is-checked {
display: none;
}
#my-checkbox:checked + span .is-checked {
display: inline;
}
#my-checkbox:checked + span .not-checked {
display: none;
}
&lt;/style&gt;
&lt;label for="my-checkbox"&gt;
&lt;input id="my-checkbox" type="checkbox" /&gt;
&lt;span&gt;
&lt;span class="not-checked"&gt;Not Checked&lt;/span&gt;
&lt;span class="is-checked"&gt;Checked&lt;/span&gt;
&lt;/span&gt;
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
