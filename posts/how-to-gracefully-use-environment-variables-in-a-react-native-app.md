---
card: "/images/default.jpg"
tags: [React Native]
description: API Keys and secrets always contain some amount of sensitive
author: "Milad E. Fahmy"
title: "How to gracefully use Environment Variables in a React Native app"
created: "2021-08-15T19:33:22+02:00"
modified: "2021-08-15T19:33:22+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-react-native tag-javascript ">
<header class="post-full-header">
<h1 class="post-full-title">How to gracefully use Environment Variables in a React Native app</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2019/07/Copy-of-Expo-and-React-Native-series.png 300w,
/news/content/images/size/w600/2019/07/Copy-of-Expo-and-React-Native-series.png 600w,
/news/content/images/size/w1000/2019/07/Copy-of-Expo-and-React-Native-series.png 1000w,
/news/content/images/size/w2000/2019/07/Copy-of-Expo-and-React-Native-series.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2019/07/Copy-of-Expo-and-React-Native-series.png" alt="How to gracefully use Environment Variables in a React Native app">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>API Keys and secrets always contain some amount of sensitive data or a token that needs to be saved gracefully. Managing different keys for different environments, such as development or production, is a common practice among JavaScript developers. Hence, the mechanism of <code>.env</code> file exists.</p>
<p>There is a way in React Native apps to save o save API Keys and other sensitive information without integrating any native code. In this short post, you are going to learn how to install and integrate a small library that helps you use environment variables without exposing sensitive information.</p>
<p>Note that the steps mentioned in this post for installing and integrating <code><a href="https://www.npmjs.com/package/react-native-dotenv" rel="noopener">react-native-dotenv</a></code> can be used with an Expo project in a similar manner as described below.</p>
<hr>
<h3 id="requirements">Requirements</h3>
<p>To follow this tutorial, please make sure you have the following installed on your local development environment and have access to the services mentioned below.</p>
<ul>
<li><a href="https://nodejs.org/en/" rel="noopener">Nodejs</a> (&gt;= 8.x.x) with npm/yarn installed</li>
<li><a href="https://www.npmjs.com/package/react-native-cli" rel="noopener">react-native-cli</a> to create and run a new React Native app</li>
<li><code>watchman</code>: The file change watcher for React Native projects</li>
</ul>
<h3 id="getting-started">Getting Started</h3>
<p>To get started, create a new project using the <code>react-native-cli</code> in a terminal window.</p><pre><code class="language-bash">react-native init RNEnvVariables
# navigate inside the project directory
cd RNEnvVariables</code></pre>
<p>Once the project directory is created, navigate it. Create a new file called <code>.env</code>. This file is going to hold all API keys or any sensitive information. Make sure you add this file to <code>.gitignore</code> such that you don't end up exposing any secret key on a version control website like Github.</p>
<p>To get started, let us add a mock key called <code>SOME_KEY</code> to the file <code>.env</code>.</p><pre><code class="language-env">SOME_KEY=something</code></pre>
<p>Do take a note that <code>.env</code> files do consider strings valid inside any quotes. Also, writing <code>SOME_KEY</code> in uppercase is just a naming convention quite commonly followed.</p>
<h3 id="install-react-native-dotenv">Install react-native-dotenv</h3>
<p>Next, install the dependency <code><a href="https://www.npmjs.com/package/react-native-dotenv" rel="noopener">react-native-dotenv</a></code> that will help you manage your environment variables gracefully throughout this app. Go to the terminal window, and execute the following command.</p><pre><code>yarn add react-native-dotenv</code></pre>
<p>The module <code>react-native-dotenv</code> lets you import environment variables from a <code>.env</code> file. To make it work, open the <code>babel.config.js</code> file and modify <code>presets</code> like below.</p><pre><code class="language-js">module.exports = {
presets: ['module:metro-react-native-babel-preset', 'module:react-native-dotenv']
}</code></pre>
<h3 id="running-the-app">Running the app</h3>
<p>To verify that it is working, open <code>App.js</code> and import the <code>SOME_KEY</code> from the package itself. <code>react-native-dotenv</code> parses the <code>.env</code> file that lets you import the environment variable mentioned inside the file.</p><pre><code class="language-js">// after other imports
import { SOME_KEY } from 'react-native-dotenv'</code></pre>
<p>If you open this demo React Native application in its current state using an iOS simulator or an Android emulator, you will be welcomed by the following screen.</p>
<p>Edit the line in <code>App.js</code> file where it says <strong>Step One</strong> with the environment variable as shown below.</p><pre><code class="language-js">&lt;Text style={styles.sectionTitle}&gt;{SOME_KEY}&lt;/Text&gt;</code></pre>
<p>Now go back to the simulator and you will notice the change.</p>
<h2 id="conclusion">Conclusion</h2>
<p>It is that simple to use <code>react-native-dotenv</code>. You do not have to add any native code to integrate for each mobile OS platform separately. For a more pragmatic example, you can check out my recent post on <a href="https://heartbeat.fritz.ai/how-to-build-an-email-authentication-app-with-firebase-firestore-and-react-native-a18a8ba78574" rel="noopener"><strong>Firebase authentication in a React Native and Expo app</strong></a>. You will notice that using the same module we have discussed above in an Expo app.</p>
<hr>
<p>I am on available on <strong>? </strong><a href="https://twitter.com/amanhimself" rel="noopener"><strong>Twitter</strong></a> and run a free weekly newsletter (600+ devs have joined) in which I share tips and new posts on Nodejs, Reactjs, GraphQL and React Native.</p>
<p> <strong>✉️ </strong><a href="https://tinyletter.com/amanhimself" rel="noopener"><strong>Join my weekly newsletter here.</strong></a></p>
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
