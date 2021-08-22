---
card: "/images/default.jpg"
tags: [Web Development]
description: "Have you ever wondered how websites are built and designed? D"
author: "Milad E. Fahmy"
title: "Web Development for Beginners – Learn Basic HTML and CSS to Build Your First Web Page"
created: "2021-08-16T10:03:48+02:00"
modified: "2021-08-16T10:03:48+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-web-development tag-web-design tag-html tag-css tag-beginners-guide ">
<header class="post-full-header">
<h1 class="post-full-title">Web Development for Beginners – Learn Basic HTML and CSS to Build Your First Web Page</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2021/05/halgatewood-com-tZc3vjPCk-Q-unsplash--1-.jpg 300w,
/news/content/images/size/w600/2021/05/halgatewood-com-tZc3vjPCk-Q-unsplash--1-.jpg 600w,
/news/content/images/size/w1000/2021/05/halgatewood-com-tZc3vjPCk-Q-unsplash--1-.jpg 1000w,
/news/content/images/size/w2000/2021/05/halgatewood-com-tZc3vjPCk-Q-unsplash--1-.jpg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2021/05/halgatewood-com-tZc3vjPCk-Q-unsplash--1-.jpg" alt="Web Development for Beginners – Learn Basic HTML and CSS to Build Your First Web Page">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Have you ever wondered how websites are built and designed? Do you want to learn the art of web development but you're not that tech savvy – yet?</p><p>Well, then this tutorial is for you. It's an introduction to Web Development for beginners so you can learn the basics even if you're totally new to the topic.</p><h1 id="html-basics-the-structure-of-a-web-page"><strong>HTML Basics – the Structure of a Web Page</strong></h1><p>HTML stands for Hyper-Text Markup Language. Now, before we can get deep into how HTML works, let's get a basic understanding of what <code>Hyper-Text Markup Language</code> actually means. </p><p><code>Hyper-Text</code> refers to the hyperlinks you see on text, an image, or a bookmark that redirects to another page, file, document, or another part of a web page.</p><p>A markup language is simply a computer language that contains tags that define elements within a document. An example of a tag could be the headline of a blog, which is normally written as an <code>h</code> tag. </p><p>There are many more tags, some of which we will discover later on.</p><p>You can simply think of HTML as the structure of a webpage. Like, let's suppose you have to build a house. The first step of building should be to construct its frame and overall structure, right? </p><p>You'll layout the basement, the walls, the lawn, the garage, and so on. This is how you can imagine HTML – it's the building blocks of a web page. </p><p>On a website, that might be the navbar, main-body/content, footer, sidebar, and all the structural divisions of the page. Those are all based on HTML.</p><h2 id="how-to-get-started-with-html">How to Get Started with HTML</h2><p>There are lots of code editors out there, like VS Code, Sublime Text 3, Atom, and Brackets. These all might sound strange to you. So, we'll just get started by using <code>Notepad</code>, which you might use one way or the other for writing notes and stuff like that.</p><p>Let's look at how you'd make the structure of a simple webpage in HTML with some basic code. </p><p>We'll design a web page that has a few different sections: a navbar, the main body with a heading, a paragraph, and an image, and a footer.</p><pre><code class="language-HTML">&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;title&gt;Page Title&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;nav&gt;This is the Navbar of my web page&lt;/nav&gt;
&lt;h1&gt;My First Heading&lt;/h1&gt;
&lt;p&gt;My first paragraph.&lt;/p&gt;
&lt;img src = "https://miro.medium.com/max/1584/1*lJ32Bl-lHWmNMUSiSq17gQ.png"/&gt;
&lt;footer&gt;
&lt;p&gt;Footer&lt;/p&gt;
&lt;/footer&gt;
&lt;/body&gt;
&lt;title&gt;Page Title&lt;/title&gt;
&lt;style&gt;
body {
background-color: lightblue;
margin: 0;
text-align: center;
}
nav {
background-color: black;
width: 100%;
color: white;
height: 50px;
padding-top: 25px;
}
h1 {
color: black;
}
footer {
background-color: gray;
color: white;
padding: 5px;
}
&lt;/style&gt;
&lt;/head&gt;</code></pre><h2 id="explanation-of-the-css"><strong>Explanation of the CSS</strong></h2><p>You can see that we added the CSS via the style tag inside the head tag of the document in the code above. That's one basic way of adding CSS.</p><p>Let's break it down and explore the CSS properties we used in the four individual elements above.</p><h3 id="the-body-element">The body element</h3><pre><code class="language-css">body {
background-color: lightblue;
margin: 0;
text-align: center;
}</code></pre><p>The body CSS selector refers to the whole user interface structure we see. We added some CSS styling properties: </p><ul><li><code>background-color</code> that adds the background color – light blue here </li><li><code>margin</code> which manages the spaces on either side of the web page's structure</li><li><code>text-aligned center</code> which means that all the content will be center-aligned in this case.</li></ul><p>Since all this CSS applies to the overall web page, all the inner elements will automatically observe these CSS properties until their own properties are specified that differ from this global one.</p><h3 id="the-nav-element">The nav element</h3><pre><code class="language-css">nav {
background-color: black;
width: 100%;
color: white;
height: 50px;
padding-top: 25px;
}</code></pre><p>The nav selector refers to the navbar of the web page and applies design properties to it. </p><p>We have set its background color to black, its width to <code>100%</code> so that it occupies the whole width, its color which represents the color of the text or links within the navbar, its <code>height</code> to <code>50px</code>, and we've given it a <code>padding-top</code> of <code>25px</code>.</p><p><code>Padding</code> refers to the space between the content and the border. Now, since we wanted the text to be <code>center-aligned</code>, we had to add padding of <code>half</code> the pixels of the actual height of the navbar, so that is <code>50px (height of the navbar) / 2 = 25px</code>. This will make sure that the text inside the navbar is center-aligned.</p><h3 id="the-h1-element">The h1 element</h3><pre><code class="language-css">h1 {
color: black;
}</code></pre><p>The <code>h1</code> selector applies CSS to the <code>h1</code> tag. Here, we applied the <code>color</code> property to be <code>black</code>.</p><h3 id="the-footer-element">The footer element</h3><pre><code class="language-css">footer {
background-color: gray;
color: white;
padding: 5px;
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
