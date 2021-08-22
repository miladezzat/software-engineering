---
card: "/images/default.jpg"
tags: [CSS]
description: "One of the biggest issues in programming is dealing with main"
author: "Milad E. Fahmy"
title: "7 Important Tips for Writing Better CSS"
created: "2021-08-16T10:05:51+02:00"
modified: "2021-08-16T10:05:51+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-css tag-design tag-frontend tag-web-development ">
<header class="post-full-header">
<h1 class="post-full-title">7 Important Tips for Writing Better&nbsp;CSS</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2019/09/resim-2.png 300w,
/news/content/images/size/w600/2019/09/resim-2.png 600w,
/news/content/images/size/w1000/2019/09/resim-2.png 1000w,
/news/content/images/size/w2000/2019/09/resim-2.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2019/09/resim-2.png" alt="7 Important Tips for Writing Better&nbsp;CSS">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>One of the biggest issues in programming is dealing with maintenance. In a real-world scenario, we don't always start developing projects from scratch. Mostly, we are assigned (or take) a project that has already been written maybe a couple of years before or even longer.</p><p>To work efficiently on that project, first we need to understand the source code. This is the point when we immediately realize the importance of <strong>clean code. </strong>As developers, we must try to write our code as cleanly as possible.</p><p>This is also the case for CSS. There are some points we need to pay attention to while writing CSS. In this post, I would like to share some of the most important ones with you. I believe these 7 tips will help you to improve the quality of your CSS code.</p><p>So let's begin...‌ &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ‌</p><h2 id="1-dry">1. DRY</h2><p><strong>DRY stands for "Don't Repeat Yourself"</strong>. This is a general software development principle and can be applied in any programming language, as well as in CSS. As we can understand from its name, DRY aims to avoid or reduce repetition as much as possible.</p><p>For example, we can create 3 CSS classes for 3 buttons like this:</p><pre><code class="language-css">.primary-button {
background: blue;
color: white;
border-radius: 5px;
padding: 10px 20px;
text-align: center;
font-size: 16px;
}
.form-button {
background: green;
color: white;
border-radius: 5px;
padding: 10px 20px;
text-align: center;
font-size: 16px;
}
.cancel-button {
background: red;
color: white;
border-radius: 5px;
padding: 10px 20px;
text-align: center;
font-size: 16px;
}</code></pre><p>Or we can use the DRY principle by writing the common rules <strong>once</strong> in an additional class and the different rules each in other classes:</p><pre><code class="language-css">.button {
color: white;
border-radius: 5px;
padding: 10px 20px;
text-align: center;
font-size: 16px;
}
.primary-button {
background: blue;
}
.form-button {
background: green;
}
.cancel-button {
background: red;
}</code></pre><p>As we can see, applying the DRY principle avoids repetition, decreases the number of lines, and improves readability and even performance.</p><h2 id="2-naming">2. Naming</h2><p>Naming CSS selectors is another important point for writing better CSS. The name of a selector should be <strong>self-descriptive and readable</strong>...</p><pre><code class="language-CSS">// BAD NAMING
.p {
// Rules
}
.myFirstForm {
// Rules
}</code></pre><p>Normally, <strong>&lt;p&gt;</strong> is an HTML tag and stands for paragraph. Above, we can't really understand what <strong>class p</strong> is. Also, you should avoid names like <strong>myFirstForm</strong>, and I don't advise using <strong>camel case</strong>.</p><p>Instead, use declarative names (separated by a dash for multiple names):</p><pre><code class="language-CSS">// GOOD NAMING
.article-paragraph {
// Rules
}
.contact-form {
// Rules
}</code></pre><p>I think the names make more sense now :) </p><p>Naming things in programming is not that easy, but there are various naming conventions that you can use in your project. <strong>BEM (block element modifier)</strong> is one of them. I've worked with BEM before and I can recommend it.</p><h2 id="3-don-t-use-inline-styles">3. Don't Use Inline-Styles</h2><p>Well, there are arguments on the web about this: some are telling you never to use inline styles, while others are arguing that it can be useful in some cases. </p><p>In my opinion, the best practice is actually not using inline styles. I will focus here on why we shouldn't.</p><h3 id="separation-of-concerns">Separation of Concerns</h3><p>According to the separation of concerns principle, design (CSS), content (HTML) and logic (JavaScript) should be separated for reasons like better readability and maintenance.</p><p>Including CSS rules inside HTML tags breaks this rule:</p><pre><code class="language-HTML">&lt;div style="font-size: 16px; color: red;"&gt;Some Text&lt;/div&gt;</code></pre><blockquote>We should rather keep our styling rules in external CSS files.</blockquote><h3 id="difficulties-in-search">Difficulties in Search</h3><p>Another problem with using inline-styles is that we can't search for them. So when we need to make a change on styling, we normally look for CSS selectors of the HTML element. </p><p>For example, let's change the <strong>font-size</strong> of text on our webpage. To do that, first we find that specific part on the browser where the change is needed by looking at the HTML structure: </p><pre><code class="language-HTML">&lt;div class="text-bold"&gt;Some Text&lt;/div&gt;</code></pre><p>Then we need to find the selector, which is the <strong>text-bold</strong> class here. Finally, we go to that class and make the changes:</p><pre><code class="language-CSS">.text-bold {
font-size: 16px;    // change the font-size to 14px
font-weight: bold;
}</code></pre><p>But if the rules are written <strong>inline-style</strong> instead of using classes:</p><pre><code class="language-HTML">&lt;div style="font-size: 16px; font-weight: bold"&gt;Some Text&lt;/div&gt;</code></pre><p>Even if we find the HTML tag, we can't know whether there are other <strong>font-size</strong> rules inside the HTML or not. Since there is no selector used, we have to go through all the HTML pages one by one, try to find the other <strong>font-size</strong> rules and change them too. </p><p>Wouldn't it be easier with a CSS selector? But there's something even worse…</p><h3 id="specificity-overwrite-issues">Specificity / Overwrite Issues</h3><p>Inline-Styles have the highest specificity among CSS selectors (when we don't count <strong>!important tags</strong>).</p><p>Considering we are using both a class and an inline-style for an element:</p><pre><code class="language-CSS">.text-bold {
font-size: 16px;
font-weight: bold;
}</code></pre><pre><code class="language-HTML">&lt;div class="text-bold" style="font-size: 14px"&gt;Some Text&lt;/div&gt;</code></pre><p>Here, the <strong>font-size</strong> of the text will be <strong>14px</strong>, because inline-styles have higher specificity than CSS classes. When you make a change in the class:</p><pre><code class="language-CSS">.text-bold {
font-size: 20px;
font-weight: bold;
}</code></pre><p>The font-size will still be 14px. So your change in the CSS class won't work, which will cause you to end up saying:</p><blockquote> "Hey, why is my CSS code not working? I hate CSS!" </blockquote><p>and lead you to use an <strong>!important tag </strong>which does the magic:</p><pre><code class="language-CSS">.text-bold {
font-size: 20px !important;
font-weight: bold;
padding-top: 10px;
padding-bottom: 20px;
padding-left: 15px;
padding-right: 15px;
margin-top: 10px;
margin-bottom: 10px;
margin-left: 15px;
margin-right: 15px;
border-width: 1px;
border-style: solid:
border-color: black;
}</code></pre><p>and with shorthands it looks like this:</p><pre><code class="language-css">.article-container {
padding: 10px 15px 20px 15px;
margin: 10px 15px;
border: 1px solid black;
}</code></pre><p><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties">You can find here</a> more info about how to use shorthands properties and for which CSS properties they can be applied.</p><h2 id="7-add-comments-when-necessary">7. Add Comments When Necessary</h2><p>Normally, quality code doesn't need comments because it should already be clear and self-descriptive. But still, in some cases, we may need to write additional explanations.</p><pre><code class="language-CSS">// Your Comments
.example-class {
// your rules
}</code></pre><p>So when you feel that some parts of the code are unclear, then don't be afraid to add comments (but on the other hand, make sure not to overdo it :)).</p><p>As a Frontend Developer with a couple of years of experience, these are the most important tips that I can suggest for improving your CSS skills. If you have any questions, or you think there are also other tips for writing better CSS, don't hesitate to comment down below.</p><p><strong>If you want to learn more about web development, feel free to </strong><a href="https://www.youtube.com/channel/UC1EgYPCvKCXFn8HlpoJwY3Q" rel="noopener"><strong>follow me on Youtube</strong></a><strong>!</strong></p><p>Thank you for reading!</p>
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
