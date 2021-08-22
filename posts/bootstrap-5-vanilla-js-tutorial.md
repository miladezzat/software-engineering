---
card: "/images/default.jpg"
tags: [Bootstrap]
description: Bootstrap 5 is a free and open-source CSS framework directed
author: "Milad E. Fahmy"
title: "How to Switch from jQuery to Vanilla JavaScript with Bootstrap 5"
created: "2021-08-15T19:28:51+02:00"
modified: "2021-08-15T19:28:51+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-bootstrap tag-jquery tag-javascript tag-tutorial tag-bootstrap-5 ">
<header class="post-full-header">
<h1 class="post-full-title">How to Switch from jQuery to Vanilla JavaScript with Bootstrap 5</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/07/bootstrap-5-vanilla-js.jpg 300w,
/news/content/images/size/w600/2020/07/bootstrap-5-vanilla-js.jpg 600w,
/news/content/images/size/w1000/2020/07/bootstrap-5-vanilla-js.jpg 1000w,
/news/content/images/size/w2000/2020/07/bootstrap-5-vanilla-js.jpg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/07/bootstrap-5-vanilla-js.jpg" alt="How to Switch from jQuery to Vanilla JavaScript with Bootstrap 5">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p><a href="http://v5.getbootstrap.com/">Bootstrap 5</a> is a free and open-source CSS framework directed at responsive, mobile-first front-end web development.</p>
<p>In case you didn't know, <a href="https://themesberg.com/blog/bootstrap/bootstrap-version-5-alpha-whats-new">Bootstrap 5 alpha has been officially launched</a>. It has removed jQuery as a dependency, has dropped support for Internet Explorer 9 and 10, and brings some awesome updates for the Sass files, markup, and a new Utility API.</p>
<p>This tutorial will show you how to start using VanillaJS instead of jQuery when building websites using the newest version of Bootstrap 5.</p>
<h2 id="getting-started">Getting started</h2>
<p>You will need to include Bootstrap 5 in your project. There are several ways to do this, but to keep it simple we will include the framework via CDN.</p>
<p>First of all, let's create a blank <code>index.html</code> page inside a project folder:</p><pre><code class="language-html">&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
&lt;meta charset="UTF-8"&gt;
&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
&lt;title&gt;Bootstrap 5 Vanilla JS tutorial by Themesberg&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
<p>Include the <code>bootstrap.min.css</code> stylesheet before the end of your <code>&lt;head&gt;</code> tag:</p><pre><code class="language-html">&lt;link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/css/bootstrap.min.css" integrity="sha384-r4NyP46KrjDleawBgD5tp8Y7UzmLA05oM1iAEQ17CSuDqnUK2+k9luXQOfXJCJ4I" crossorigin="anonymous"&gt;</code></pre>
<p>Afterwards include the Popper.js library and the main Bootstrap JavaScript file before the end of your <code>&lt;body&gt;</code> tag:</p><pre><code class="language-html">&lt;script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"&gt;&lt;/script&gt;
&lt;script src="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/js/bootstrap.min.js" integrity="sha384-oesi62hOLfzrys4LxRF63OJCXdXDipiYWBnvTl9Y9/TRlw5xlKIEHpNyvvDShgf/" crossorigin="anonymous"&gt;&lt;/script&gt;</code></pre>
<p>Curious what the <code>integrity</code> and <code>crossorigin</code> attributes mean? Here's the explanation:</p>
<p><strong><strong>Integrity attribute</strong>:</strong> allows the browser to check the file source to ensure that the code is never loaded if the source has been manipulated.</p>
<p><strong><strong>Crossorigin attribute</strong>:</strong> is present when a request is loaded using 'CORS' which is now a requirement of SRI checking when not loaded from the 'same-origin'.</p>
<p>Great! Now we have successfully included the newest version of Bootstrap in our project. One of the obvious differences is that we no longer had to require jQuery as a dependency, <strong>saving about 82.54 KB</strong> in bandwidth if in a minified state.</p>
<h2 id="switching-from-jquery-to-vanilla-js">Switching from jQuery to Vanilla JS</h2>
<p>Before we get started with this section, you should know that using Bootstrap 5 with jQuery is still possible according to the <a href="https://v5.getbootstrap.com/docs/5.0/getting-started/javascript/#still-want-to-use-jquery-its-possible">official documentation</a>.</p>
<p>We recommend using Vanilla JavaScript if the only reason you've been using jQuery was for the query selector, because you can do the same thing with the <code>document.querySelector('#element')</code> as if it was <code>$('#element')</code>.</p>
<p>The first step is to create a JavaScript file and include it before the end of the body tag but after the other two includes:</p><pre><code class="language-html">&lt;script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"&gt;&lt;/script&gt;
&lt;script src="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/js/bootstrap.min.js" integrity="sha384-oesi62hOLfzrys4LxRF63OJCXdXDipiYWBnvTl9Y9/TRlw5xlKIEHpNyvvDShgf/" crossorigin="anonymous"&gt;&lt;/script&gt;
&lt;script src="js/app.js"&gt;&lt;/script&gt;</code></pre>
<p>So when do you need to actually use Javascript with Bootstrap 5? There are certain components in the framework that work only if they are initialized via Javascript, such as tooltips, popovers and toasts.</p>
<p>Furthermore, with components such as modals, dropdowns, and carousels you may want to be able to programmatically change them based on a user action or application logic.</p>
<h3 id="initializing-tooltips-via-vanilla-javascript">Initializing tooltips via Vanilla JavaScript</h3>
<p>We all love tooltips, but they don't work unless they are initialized via JavaScript. Let's first start by creating a tooltip element inside our <code>index.html</code> file:</p><pre><code class="language-html">&lt;button id="tooltip" type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="top" title="Tooltip on top"&gt;
Tooltip on top
&lt;/button&gt;</code></pre>
<p>Hovering over the button will not show the tooltip, because by default it is an opt-in feature of Bootstrap and it needs to be initialized manually using JavaScript. If you want to do it with jQuery, here's how it would look:</p><pre><code class="language-js">$('#tooltip').tooltip();</code></pre>
<p>Using Vanilla JS you would need to use the following code to enable the tooltip:</p><pre><code class="language-js">var tooltipElement = document.getElementById('tooltip');
var tooltip = new bootstrap.Tooltip(tooltipElement);</code></pre>
<p>What the code above does it that it selects the element with the unique id of "tooltip" and then creates a Bootstrap tooltip object. You can then use that to manipulate the state of the tooltip, such as showing or hiding the tooltip programmatically.</p>
<p>Here's an example on how you could show/hide it via methods:</p><pre><code class="language-js">var showTooltip = true;
if (showTooltip) {
tooltip.show();
} else {
tooltip.hide();
}</code></pre>
<p>If you would like to enable all of the tooltips you could also use the following code:</p><pre><code class="language-js">var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-toggle="tooltip"]'));
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
return new bootstrap.Tooltip(tooltipTriggerEl)
});</code></pre>
<p>What happens here is that we select all of the elements that have the <code>data-toggle="tooltip"</code> attribute and value and initialize a tooltip object for each one. It also saves them to a tooltipList variable.</p>
<h3 id="toggle-the-visibility-of-your-elements-using-the-collapse-javascript-methods">Toggle the visibility of your elements using the Collapse JavaScript methods</h3>
<p>The collapse feature on Bootstrap is another very handy way to show and hide elements via data attributes or JavaScript.</p>
&lt;a href="#" class="btn btn-primary"&gt;Learn coding for free&lt;/a&gt;
&lt;/div&gt;
&lt;/div&gt;</code></pre>
<p>Now we need to add an event listener for the button for the click action:</p><pre><code class="language-js">toggleButton.addEventListener('click', function () {
// do something when the button is being clicked
});</code></pre>
collapsableCard.toggle();
});</code></pre>
<h2 id="conclusion">Conclusion</h2>
<p>If you have followed along this tutorial you should now be able to use the most popular CSS framework without the need of requiring jQuery in your project. This lets you <strong>save up to 85 KB of data</strong> and makes your website faster! Congratulations ?</p>
<p>If you appreciate this tutorial and like using Bootstrap as a CSS framework for your projects, I invite you to check out some of the free and premium <a href="https://themesberg.com/templates/bootstrap">Bootstrap themes, templates, and UI Kits</a> that we build at Themesberg ❤️</p>
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
