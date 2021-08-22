---
card: "/images/default.jpg"
tags: [Meteor]
description: MeteorJS is a do-it-all framework for making JavaScript appli
author: "Milad E. Fahmy"
title: "A Quick Guide to MeteorJS – What it Is, and Who Should Use it"
created: "2021-08-15T19:28:26+02:00"
modified: "2021-08-15T19:28:26+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-meteor tag-javascript ">
<header class="post-full-header">
<h1 class="post-full-title">A Quick Guide to MeteorJS – What it Is, and Who Should Use it</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/09/meteor-2.jpeg 300w,
/news/content/images/size/w600/2020/09/meteor-2.jpeg 600w,
/news/content/images/size/w1000/2020/09/meteor-2.jpeg 1000w,
/news/content/images/size/w2000/2020/09/meteor-2.jpeg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/09/meteor-2.jpeg" alt="A Quick Guide to MeteorJS – What it Is, and Who Should Use it">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>MeteorJS is a do-it-all framework for making JavaScript applications. If you enjoy making websites in HTML, CSS, and JavaScript, then you can use those skills to make apps for your PC or phone.</p>
<p>By default when you do “meteor create myapp &amp; cd myapp &amp; meteor run”, it serves an HTML/JavaScript web page along with a Node/MongoDB backend (which is unused at this moment).</p>
<p>Nodejs is simply the name for the JavaScript that sits on the server end. Mongodb is the NoSQL (not-only-structured-query-language) database that Meteor uses.</p>
<h2 id="let-s-start-a-mobile-app-demo">Let's start a mobile app demo</h2>
<p>To get started, you type “meteor add-platform android” and then “meteor run android”. This will run this app on your <a href="https://www.xda-developers.com/install-adb-windows-macos-linux/">plugged in</a> phone (or <a href="https://medium.com/androiddevelopers/developing-for-android-11-with-the-android-emulator-a9486af2d7ef">virtual device</a>) using your computer as the server (if you made something in the backend). You can do the same thing with an iPhone using a Mac.</p>
<p>The JS, HTML, and CSS files are intuitively organized within the 'server' and 'client' directories. This is the MVC (model view controller) design pattern.</p>
<p>The Android and iOS mobile interfaces are handled by Apache Cordova. You won't see it in a basic webapp. However you should definitely be aware if you are using any phone hardware functions.</p>
<p>The basic platform allows you to add on whatever other framework you wish to the back end or front end. Everything from Angular, Express, React and Vue can be installed on top of Meteor. </p>
<p>Popular CSS frameworks like Material-UI are usually used to ease the design work. However you don’t need to add any other framework at all. Meteor comes with a great <a href="https://docs.meteor.com/api/pubsub.html">Publish/Subscribe</a> method, <a href="http://blazejs.org/">Blaze handlebars</a> and user-accounts, and much more.</p>
<h2 id="beyond-the-demo">Beyond the Demo</h2>
<p>Besides the plugins available with "<a href="https://atmospherejs.com/">meteor add</a>", you also have access to all npm and cordova plugins. You can use "meteor npm install" to access them.</p>
<p>You can even add a desktop platform using <a href="https://github.com/sharekey/meteor-desktop/">Meteor-desktop</a>. This uses the Electron framework. You can then make Windows, Mac, and Linux applications. Hopefully this functionality will be natively supported in Meteor version 2.0.</p>
<p>There has been a healthy community of Meteor developers in different forums since 2012. The documentation at guide.meteor.com is more extensive and clear compared to most frameworks.</p>
<p>Although this may seem to be the perfect shortcut for a new developer, I will warn you: Don't include a package or framework in your project until you are confident you know how it works. </p>
<p>Meteor is good at integration but it can take extra work to combine different packages. Don't just shop around for a list of packages expecting it will work all together perfectly. </p>
<p>Meteor is a great tool for a beginner looking to be introduced to the broad scope of app development and the process of building a simple app.</p>
<h2 id="production"><strong>Production</strong></h2>
<p>Meteor can, of course, create full production web and mobile apps. It's used by several mid-size and large companies such as Ikea and Workpop. </p>
<p>For easy development and optimization, you can use <a href="https://www.meteor.com/hosting">Galaxy</a> hosting. Galaxy will help get you to production without any system administration knowledge required.</p>
<p>If you do have knowledge and time, then you can host it on your own server/VPC. For example, a $5 a month AWS Lightsail instance can host an app with a hundred users.</p>
<p>Self-hosting and building works much the same way as you began the Meteor demo. However, instead of "meteor run" you will be building (meteor build) – your backend into a standard nodeJS app, and your mobile into a <a href="https://medium.com/@yehudaclinton/how-to-make-an-android-app-with-meteorjs-62ae5b22623a">signed APK</a> or IOS app.</p>
<p>There have been rumors over the years that Meteor doesn't scale well. This has been largely disproved and can be overcome with various techniques.</p>
<p>Meteor security has the typical high standards of a well maintained open-source project. Follow the <a href="https://guide.meteor.com/security.html">security guide</a> closely and watch out for <a href="https://medium.com/rangeforce/meteor-blind-nosql-injection-29211775cd01">noSQL injection</a>.</p>
<h2 id="advantages-of-meteor">Advantages of Meteor</h2>
<ul>
<li>A diverse community of contributors gives the framework special resilience and longevity. Most other frameworks are created by a single mega tech company. This could mean that the project will get shelved if they see no return on investment. With Meteor, the direction of its development closely follows its users.</li>
<li>It's cross-platform. Googles Flutter isn't going to work on Apple's iPhone. Meteor allows you to make all the implementations of your app in one place.</li>
<li>It's built in MongoDB handlers and there's support for GraphQL.</li>
</ul>
<h2 id="disadvantages-of-meteor">Disadvantages of Meteor</h2>
<ul>
<li>If developers place too much reliance on different pre-built packages they can conflict with one another.</li>
<li>If you are just making a webapp it might be simpler to use Express.</li>
<li>You can't make a mobile web-app run as efficiently as with native.</li>
</ul>
<p>In conclusion, Meteor is an effective framework that can help you cut development time and ease app maintenance.</p>
<p>If you are looking to learn more on how to make Apps in JavaScript, read this new <a href="https://www.manning.com/books/the-joy-of-javascript?utm_source=affiliate&amp;utm_medium=affiliate&amp;a_aid=bootstrap-it&amp;a_bid=e5f7023c&amp;chan=VPN">book from Manning</a> Publications.</p>
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
