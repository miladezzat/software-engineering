---
card: "/images/default.jpg"
tags: [Rails]
description: As a junior Full-Stack developer, my main focus was the backe
author: "Milad E. Fahmy"
title: "How to Add JavaScript to Your Rails 6 App"
created: "2021-08-15T19:30:09+02:00"
modified: "2021-08-15T19:30:09+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-rails tag-javascript ">
<header class="post-full-header">
<h1 class="post-full-title">How to Add JavaScript to Your Rails 6 App</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/04/carl-heyerdahl-KE0nC8-58MQ-unsplash--1-.jpg 300w,
/news/content/images/size/w600/2020/04/carl-heyerdahl-KE0nC8-58MQ-unsplash--1-.jpg 600w,
/news/content/images/size/w1000/2020/04/carl-heyerdahl-KE0nC8-58MQ-unsplash--1-.jpg 1000w,
/news/content/images/size/w2000/2020/04/carl-heyerdahl-KE0nC8-58MQ-unsplash--1-.jpg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/04/carl-heyerdahl-KE0nC8-58MQ-unsplash--1-.jpg" alt="How to Add JavaScript to Your Rails 6 App">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>As a junior Full-Stack developer, my main focus was the backend. I wanted to learn how to program my backend server to serve my web application. </p>
<p>But after learning the basics of the the backend, I learned that the frontend was just as important as the backend. And one way to increase the liveliness of your web application is by adding JavaScript.</p>
<p>JavaScript is essential to add interactivity to your web application. Of course, it has become far more than that now. It is a programming language that web browsers run. Many websites you have visited use some JavaScript code in their frontend. </p>
<p>You may have started using Ruby on Rails to build your web application and wondered how to add JavaScript to your code. In this article, I'll show you how to add JavaScript code to your Rails app.</p>
<h2 id="why-javascript">Why JavaScript?</h2>
<p>You may wonder why you even need JavaScript in your web application in the first place. In short, if you don't include any JS, then your web application's user experience will not be good.</p>
<p>Let's say you have a form that a user fills out and you want to do form validation. If the user submits the form without filling in the proper values, the page for the form has to reload again, hitting the server and coming up again for the user. That takes a lot of time and will probably annoy the user.</p>
<p>Of course you can sometimes get away with HTML form validation, but that's not always possible. Adding a simple script that checks the user inputs and notifies them that they should input the correct information is much better.</p>
<p>Of course this doesn't mean you can ignore server side validation, but that's for another article.</p>
<p>Another use case is loading files asynchronously, which you can do in JavaScript without reloading the whole page. You may have used some web apps that load more pictures and articles as you scroll down without having to refresh or change the page over and over again.</p>
<p>These and other use cases are great reasons to use JavaScript in your application. In fact, the demand for JavaScript has been increasing. You can even use it to write your backend. </p>
<p>But we love Rails, so we are going to stick with it for a while. </p>
<h2 id="what-we-ll-cover-here">What we'll cover here</h2>
<p>At the time of writing, the latest version of the framework is Rails 6, and it has brought some changes to the way you interact with JavaScript. </p>
<p>Prior to Rails 6, we had the asset pipeline to manage CSS and JavaScript files. But starting from Rails 6, Webpacker is the default compiler for JavaScript. CSS is still managed by the asset pipeline, but you can also use Webpack to compile CSS. </p>
<p>You won't find your JavaScript folder in the same place as you did in Rails 5. The directory structure for JavaScript has changed to the <strong>app/javascript/packs/</strong> folder.</p>
<p>In that folder you will find the <strong>application.js</strong> file, which is just like the <strong>application.css</strong> file. It will be imported by default in the <strong>application.html.erb</strong> file when you create your new Rails app. </p>
<p>The <strong>application.html.erb</strong> file will be used by all views. </p>
<h2 id="adding-a-script-that-will-be-used-by-all-views">Adding a script that will be used by all views</h2>
<p>If you want your JavaScript to be available in all views or pages, you can just put it in the <strong>application.js</strong> file:</p>
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")
console.log('Hello from application.js')</code></pre>
<figcaption>app/javascript/packs/application.js</figcaption>
</figure>
<p>The first four lines are there by default. I have added a <code>console.log</code> statement to show you that the JavaScript will be available everywhere. </p>
<p>You can test this by viewing any page in your application and opening the developer console. </p>
<p>But you may not always want your JavaScript code to be loaded on every page. Instead, you can make the script available only when visiting a specific page.</p>
<h2 id="adding-a-script-that-will-be-used-by-a-specific-file">Adding a script that will be used by a specific file</h2>
<p>If you want your JavaScript to be available for only a specific view, then you can use the <strong>javascript_pack_tag</strong> to import that specific file:</p>
&lt;%= javascript_pack_tag 'my_js' %&gt;
</code></pre>
<figcaption>app/views/posts/index.html.erb</figcaption>
</figure>
<figcaption>app/javascript/packs/my_js.js</figcaption>
</figure>
<p>Remember that you need to add the file in the <strong>packs</strong> directory. The <strong>javascript_pack_tag</strong> should also refer to the name of the JavaScript file you created. </p>
<p>Now the script will only run when the specific view that includes the <strong>javascript_pack_tag</strong> is loaded in the browser.</p>
<h2 id="wrapping-up">Wrapping up</h2>
<p>I hope this article helps clear up any confusion you might have when updating your app to Rails 6, or if you just got started with Rails. </p>
<p>You can follow me on <a href="https://github.com/DanielMitiku">Github</a> if you want to learn more.</p>
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
