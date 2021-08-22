---
card: "https://cdn-media-2.freecodecamp.org/w1280/6049c377a7946308b76862f0.jpg"
tags: [HTML]
description: "In this article, we are going to explore three different ways"
author: "Milad E. Fahmy"
title: "HTML Button Link Code Examples – How to Make HTML Hyperlinks Using the HREF Attribute on Tags"
created: "2021-08-15T22:48:54+02:00"
modified: "2021-08-15T22:48:54+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-html tag-javascript tag-css tag-best-practices ">
<header class="post-full-header">
<h1 class="post-full-title">HTML Button Link Code Examples – How to Make HTML Hyperlinks Using the HREF Attribute on Tags</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/6049c377a7946308b76862f0.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/6049c377a7946308b76862f0.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/6049c377a7946308b76862f0.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/6049c377a7946308b76862f0.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/6049c377a7946308b76862f0.jpg" alt="HTML Button Link Code Examples – How to Make HTML Hyperlinks Using the HREF Attribute on Tags">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>In this article, we are going to explore three different ways you can make an HTML button act like a link.</p><p>These are the methods we'll go over:</p><ol><li>Styling a link to look like a button</li><li>Using the action and formaction attributes in a form</li><li>Using the JavaScript onclick event</li></ol><p>But first, let's take a look at the wrong approach.</p><h2 id="why-doesn-t-this-approach-with-the-a-element-work">Why doesn't this approach with the <code>a</code> element work?</h2><p>The code snippet below leads to the freeCodeCamp website when it is clicked.</p><pre><code class="language-HTML">  &lt;a href="https://www.freecodecamp.org/"&gt;
&lt;button&gt;freeCodeCamp&lt;/button&gt;
</code></pre><p>If you wanted the link to open up a new page, you can add the <code>target="_blank"</code> attribute like this: </p><pre><code class="language-html">  &lt;a target="_blank" class="fcc-btn" href="https://www.freecodecamp.org/"&gt;freeCodeCamp&lt;/a&gt;
</code></pre><p>Then, we can add a background color and change the font color like this:</p><pre><code class="language-css">.fcc-btn {
background-color: #199319;
color: white;
background-color: #199319;
color: white;
padding: 15px 25px;
background-color: #199319;
color: white;
padding: 15px 25px;
text-decoration: none;
background-color: #223094;
&lt;input type="submit" value="freeCodeCamp"&gt;
&lt;/form&gt;</code></pre><p>Button example:</p><pre><code class="language-html">  &lt;form action="https://www.freecodecamp.org/"&gt;
&lt;button type="submit"&gt;freeCodeCamp&lt;/button&gt;
background-color: #199319;
color: white;
padding: 15px 25px;
text-decoration: none;
cursor: pointer;
border: none;
}
&lt;input type="submit" formaction="https://www.freecodecamp.org/" value="freeCodeCamp"&gt;
&lt;/form&gt;</code></pre><p>Button example:</p><pre><code class="language-html">  &lt;form&gt;
&lt;button type="submit" formaction="https://www.freecodecamp.org/"&gt;freeCodeCamp&lt;/button&gt;
&lt;button type="submit"&gt;freeCodeCamp&lt;/button&gt;
&lt;/form&gt;</code></pre><p>While this approach is valid HTML, it does come with this unintended side effect. </p><h2 id="how-to-use-the-javascript-onclick-event-to-make-a-button">How to use the JavaScript onclick event to make a button</h2><p>In the previous approaches, we have looked at HTML and CSS solutions. But we can also use JavaScript to achieve the same result. </p><p>Input example:</p><pre><code class="language-html"> &lt;form&gt;
&lt;input type="button" onclick="window.location.href='https://www.freecodecamp.org/';" value="freeCodeCamp" /&gt;
&lt;/form&gt;</code></pre><p> Button example:</p><pre><code class="language-html">&lt;button onclick="window.location.href='https://www.freecodecamp.org/';"&gt;freeCodeCamp&lt;/button&gt;
</code></pre><p>The <code>location.href</code> represents the location of a specific URL. In this case, <code>Window.location.href</code> will return <a href="https://www.freecodecamp.org/">https://www.freecodecamp.org/</a>. </p><h3 id="drawbacks-to-this-approach">Drawbacks to this approach</h3><p>While this solution does work, there are some potential issues to consider. </p><p>If the user has decided to disable JavaScript in their browser, then clearly this solution would not work. Unfortunately, that could lead to a poor user experience. </p><h2 id="conclusion">Conclusion</h2><p>The goal of this article was to show you three different ways you can make buttons act like links.</p><p>The first approach was to design a link to look like a button. We also looked into the debate whether it is a good idea to change the appearance of links to look like another element.</p><p>The second approach used the form and formaction attributes. But we also learned that this approach has some side effects with the URL and is not semantically correct. </p><p>The third approach used the JavaScript onclick event and the Window.location.href. But we also learned that this approach might not work if the user decides to disable JavaScript in their browser. </p><p>As a developer, it is really important to look at the pros and cons of a particular approach before incorporating it into your project. &nbsp; </p><p>I hope you enjoyed this article and learned a few things along the way. </p><p>Happy coding! </p>
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
