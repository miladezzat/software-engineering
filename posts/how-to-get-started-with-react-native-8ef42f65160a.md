---
card: "https://cdn-media-1.freecodecamp.org/images/1*4FUZ_X3XD3MgqsrpncPhTA.jpeg"
tags: [React Native]
description: by Spencer Carli
author: "Milad E. Fahmy"
title: "How to Get Started with React Native"
created: "2021-08-15T19:51:13+02:00"
modified: "2021-08-15T19:51:13+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-react-native tag-react tag-javascript tag-mobile-app-development tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">How to Get Started with React Native</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*4FUZ_X3XD3MgqsrpncPhTA.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*4FUZ_X3XD3MgqsrpncPhTA.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*4FUZ_X3XD3MgqsrpncPhTA.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*4FUZ_X3XD3MgqsrpncPhTA.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*4FUZ_X3XD3MgqsrpncPhTA.jpeg" alt="How to Get Started with React Native">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Spencer Carli</p>
<h1 id="how-to-get-started-with-react-native">How to Get Started with React Native</h1>
<p>Before diving in I want to tell you a little story — I’ve been wanting to put together a simple website. Not a web app, just a simple website. I haven’t done that in a quite a while so I started looking around for how to do it…</p>
<p>… and then I found myself falling down a rabbit hole of increasing complexity, using different tools, and forgetting about what I actually wanted to build.</p>
<p>I ended up throwing everything I did away (it was useless anyway), signing up for a course, and just following along so I could get a sense of things before working on my project.</p>
<p>Most of my time is spent in the realm of React Native, and on the web I see many people in the same situation I was in. I email and chat with a few dozen people a week who are also interested in learning React Native. They’ve heard about it from a friend or a co-worker, seen it mentioned on Twitter, a client <strong>insists</strong> on using it for a project, or one of a dozen other reasons. Tech people are very diverse in how and why they learn about new things.</p>
<p>Some people are coming from a web development background, others have used tools like Cordova, and others are making the leap into the JavaScript world for the first time. Regardless of someone’s background many of the same things come up.</p>
<h3 id="javascript-syntax-woes"><strong>JavaScript Syntax Woes</strong></h3><pre><code>class App extends React.Component { ... }</code></pre>
<p>Okay, I’ve seen classes before. No big deal — but in JavaScript?</p><pre><code>const { amount, purchaseDate } = this.props;</code></pre>
<p>Huh, <code>const</code> and what’s with the curly braces on the left of the equals?</p><pre><code>export default App;export App;</code></pre>
<p>What’s the difference, though?</p>
<p>Regardless of whether you’re familiar with JavaScript or not the use of ES2015/ES6 trips people up, a lot. And it’s <strong>very </strong>common in React Native. People who have used JavaScript often haven’t used this (relatively) new syntax. And people who are just learning JavaScript are often referencing tutorials that don’t use it . This leads towards more confusion.</p>
<p>Just know that what you see in Javascript tutorials still applies, as does what you’ve previously learned. ES2015/ES6 is simply an extension that makes it easier to do things (once you’re familiar with it).</p>
<p>To learn ES2015/ES6 check out this <a href="https://babeljs.io/learn-es2015/" rel="noopener">no-fluff intro by Babel</a>. There’s also a <a href="https://medium.freecodecamp.com/learn-es6-the-dope-way-i-const-let-var-ae828580472b" rel="noopener">nice series</a> that will introduce and explain things to you.</p>
<h4 id="have-a-basic-grasp-on-react">Have a Basic Grasp on React</h4>
<p>I know you want to dive right into React Native — it’s <strong>awesome</strong>. But if you want to minimize confusion, then I would suggest spending a bit of time understanding the basics of a React application.</p>
<p>There’s some terminology you’ll want to know and you’ll want to understand how you compose an application. React Native is an extension of React. It’s just a different client target that’s using React and its principles to create the application.</p>
<p>Getting a grasp on React is a good use of time. Looking through the <a href="https://facebook.github.io/react/" rel="noopener">homepage</a> alone will help you quite a bit. I also suggest you look through the <a href="https://facebook.github.io/react/tutorial/tutorial.html" rel="noopener">official tutorial</a> to get an even better grasp.</p>
<p>You don’t have to spend a ton of time here building a complex web application with React, just use this time getting familiar with the idea of React.</p>
<h3 id="setting-up-the-development-environment">Setting Up the Development Environment</h3>
<p>You don’t need a special text editor. Whatever you’ve been using will likely work fine. Don’t stress about the editor right now.</p>
<p>Now if you want to build a React Native app, which works on iOS and Android, you’ve got to install all the development tools for those platforms, right?</p>
<p>Well, no. Not right now at least.</p>
<p>There’s a tool called <a href="https://expo.io/" rel="noopener">Expo</a> which takes care of all the native development environment stuff so you can focus on learning React Native and building apps with it.</p>
<p>But wait — it gets better! There’s a command line tool called <a href="https://github.com/react-community/create-react-native-app" rel="noopener">Create React Native App</a> which makes it even <strong>easier</strong> to get started with React Native. It’s backed by Expo which means all we have to do is install the command line interface and then we’re off to the React Native races!</p>
<p>Scan the QR code output from the Expo app and start hacking! The code will update on every file save.</p>
<h3 id="how-do-i-">How do I…</h3>
<p>Here’s a rapid fire, opinionated, list of tools to handle common needs:</p>
<ul>
<li>Manage state: <a href="http://redux.js.org/" rel="noopener">Redux</a></li>
<li>Work with a remote API: <a href="https://redux-saga.js.org/" rel="noopener">Redux Saga</a></li>
<li>Navigation: <a href="https://reactnavigation.org/" rel="noopener">React Navigation</a></li>
<li>Share the app: <a href="https://docs.expo.io/versions/v17.0.0/guides/exp-cli.html" rel="noopener">Publish to Expo</a></li>
<li>Style the app: <a href="https://github.com/vitalets/react-native-extended-stylesheet" rel="noopener">React Native Extended StyleSheet</a></li>
<li>A code editor: <a href="https://code.visualstudio.com/" rel="noopener">Visual Studio Code</a></li>
</ul>
<p>I hope that helps you get up and running with React Native a bit faster and with less confusion!</p>
<p>I put together a free video course that walks you through building a React Native app from setting up your development environment to publishing to Expo. Spend some time understanding ES2015, get a general sense of React, and dive into this course. It’s helped hundreds already and I hope it can help you too!</p>
<p><a href="http://learn.handlebarlabs.com/p/react-native-basics-build-a-currency-converter" rel="noopener"><strong>React Native Basics: Build a Currency Converter</strong></a><br><a href="http://learn.handlebarlabs.com/p/react-native-basics-build-a-currency-converter" rel="noopener"><em>Learn to Use Navigation, Setup Redux, Design Components, Work with a Remote API, and More</em>learn.handlebarlabs.com</a></p>
<p>If you enjoyed this be sure to recommend it and send it to someone who wants to learn React Native!</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
