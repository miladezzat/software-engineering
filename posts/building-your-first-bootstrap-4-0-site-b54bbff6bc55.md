---
card: "https://cdn-media-1.freecodecamp.org/images/1*kEPuAx-hfMY6IYJRryX_Hg.png"
tags: [Web Development]
description: "In my opinion, the best way to learn a new technology is ofte"
author: "Milad E. Fahmy"
title: "Bootstrap Tutorial: Learn to build first Bootstrap 4 site"
created: "2021-08-16T11:45:24+02:00"
modified: "2021-08-16T11:45:24+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-web-development tag-tech tag-programming tag-tutorial tag-technology ">
<header class="post-full-header">
<h1 class="post-full-title">Bootstrap Tutorial: Learn to build first Bootstrap 4 site</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*kEPuAx-hfMY6IYJRryX_Hg.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*kEPuAx-hfMY6IYJRryX_Hg.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*kEPuAx-hfMY6IYJRryX_Hg.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*kEPuAx-hfMY6IYJRryX_Hg.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*kEPuAx-hfMY6IYJRryX_Hg.png" alt="Bootstrap Tutorial: Learn to build first Bootstrap 4 site">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
&lt;li class="navbar-item"&gt;
&lt;a href="#" class="nav-link"&gt;Homepage&lt;/a&gt;
&lt;/li&gt;
&lt;li class="navbar-item"&gt;
&lt;a href="#" class="nav-link"&gt;Blog&lt;/a&gt;
&lt;/li&gt;
&lt;li class="navbar-item"&gt;
&lt;a href="#" class="nav-link"&gt;About&lt;/a&gt;
&lt;/li&gt;
&lt;li class="navbar-item"&gt;
&lt;a href="#" class="nav-link"&gt;Contact Us&lt;/a&gt;
&lt;/li&gt;
&lt;/ul&gt;
...
&lt;/nav
</code></pre><p>This tells Bootstrap that we want the navbar options to toggle between expanded and collapsed states at the <code>md</code> breakpoint, which is at<code>768px</code>.</p><p>We also need to wrap our navigation options in a div (with the two classes <code>collapse</code> and <code>navbar-collapse</code>) which tells Bootstrap that this is the part we want to collapse.</p><pre><code class="language-html">&lt;div class="collapse navbar-collapse" id="navbarNav"&gt;
&lt;ul class="navbar-nav"&gt;
...
&lt;/ul&gt;
&lt;/div&gt;
</code></pre><p>The id of <code>navbarNav</code> is to connect this item with the <code>data-target</code> attribute in the hamburger icon, which we’ll create like this:</p><pre><code class="language-htnl">&lt;button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"&gt;
&lt;span class="navbar-toggler-icon"&gt;&lt;/span&gt;
&lt;/button&gt;
```html
We now have a great looking navbar, which collapses and expands at our chosen breakpoint:
![](https://cdn-media-1.freecodecamp.org/images/1*1dn65y8seTpzTi1EV6EaVw.gif)
### Jumbotron
The next step is to create something that welcomes our users to the website below the navbar. To do that, we’ll use the [jumbotron](https://getbootstrap.com/docs/4.0/components/jumbotron/) component. It’s super simple:
```html
&lt;div class="jumbotron jumbotron-fluid"&gt;
&lt;div class="container"&gt;
&lt;h1 class="display-3"&gt;Welcome to my website&lt;/h1&gt;
&lt;p class="lead"&gt;I'm a developer and designer. Check my portfolio below&lt;/p&gt;
&lt;/div&gt;
&lt;div class="row"&gt;
&lt;div class="col-sm-6 col-lg-3"&gt;column&lt;/div&gt;
&lt;div class="col-sm-6 col-lg-3"&gt;column&lt;/div&gt;
&lt;div class="col-sm-6 col-lg-3"&gt;column&lt;/div&gt;
&lt;div class="col-sm-6 col-lg-3"&gt;column&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;a href="#" class="btn btn-info"&gt;See project&lt;/a&gt;
&lt;/div&gt;
&lt;/div&gt;
...
&lt;/div&gt;
&lt;div class="col-sm-12 **col-md-6 offset-md-3**"&gt;
&lt;h3&gt;Reach out!&lt;/h3&gt;
_...form goes here..._
&lt;/div&gt;
&lt;/div&gt;
</code></pre><p>Now let’s look at the code for the form itself:</p><pre><code class="language-html">&lt;form&gt;
&lt;div class="form-group"&gt;
&lt;input type="text" class="form-control" id="email" placeholder="Your email.."&gt;
&lt;/div&gt;
&lt;div class="form-group"&gt;
&lt;textarea class="form-control" placeholder="Your message.."&gt;
&lt;/textarea&gt;
&lt;/div&gt;
&lt;button type="submit" class="btn btn-primary"&gt;Submit&lt;/button&gt;&lt;/form&gt;
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
