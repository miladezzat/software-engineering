---
card: "https://cdn-media-1.freecodecamp.org/images/0*-eB8L7-mDpQKLYPE"
tags: [JavaScript]
description: by Colby Miller
author: "Milad E. Fahmy"
title: "How to publish a React Native component to NPM — it’s easier than you think"
created: "2021-08-15T19:36:40+02:00"
modified: "2021-08-15T19:36:40+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-npm tag-react-native tag-mobile-app-development tag-react ">
<header class="post-full-header">
<h1 class="post-full-title">How to publish a React Native component to NPM — it’s easier than you think</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/0*-eB8L7-mDpQKLYPE 300w,
https://cdn-media-1.freecodecamp.org/images/0*-eB8L7-mDpQKLYPE 600w,
https://cdn-media-1.freecodecamp.org/images/0*-eB8L7-mDpQKLYPE 1000w,
https://cdn-media-1.freecodecamp.org/images/0*-eB8L7-mDpQKLYPE 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/0*-eB8L7-mDpQKLYPE" alt="How to publish a React Native component to NPM — it’s easier than you think">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Colby Miller</p>
<h1 id="how-to-publish-a-react-native-component-to-npm-it-s-easier-than-you-think">How to publish a React Native component to NPM — it’s easier than you think</h1>
<figcaption>Photo by <a href="https://unsplash.com/@markusspiske?utm_source=medium&amp;utm_medium=referral" rel="noopener" target="_blank" title="">Markus Spiske</a> on <a href="https://unsplash.com?utm_source=medium&amp;utm_medium=referral" rel="noopener" target="_blank" title="">Unsplash</a></figcaption>
</figure>
<p>So you want to contribute to the open source community? That’s awesome! Helping to grow React Native’s fairly young ecosystem is great.</p>
<p>When I decided to take on this task not long ago, I noticed there wasn’t much material around publishing React Native components to NPM. So I’m hoping this post will help make the process much easier for others.</p>
<blockquote><strong>Note:</strong> All sample code below is from <a href="https://www.npmjs.com/package/react-native-progress-steps" rel="noopener">react-native-progress-steps</a>, my very own first NPM package.</blockquote>
<p>Before we get started, make sure to register for an account on NPM. You can do that <a href="https://www.npmjs.com/signup" rel="noopener">here</a>.</p>
<h3 id="initial-setup">Initial Setup</h3>
<p>First, let’s create a folder where our React Native component will live.</p><pre><code class="language-bash">mkdir &lt;folder_name&gt; &amp;&amp; cd &lt;folder_name&gt;
# For example
mkdir my-component &amp;&amp; cd my-component</code></pre>
<blockquote><strong>Note:</strong> To keep this article brief, I’m assuming you already have Node and NPM installed on your computer. If that’s not the case, take a look at this <a href="https://www.npmjs.com/get-npm" rel="noopener">documentation</a> for help.</blockquote>
<p>Once inside the folder, we need to initialize a new NPM package by typing <code>npm init</code>. This will create a <code>package.json</code> file that will hold some important metadata about the React Native component.</p>
<p>A series of questions will be displayed such as package name, version, description, keywords, etc.</p>
<p><strong>Important:</strong> When asked for the <em>entry point</em>, make sure to enter <code>index.js</code> and press enter. This will be the file that exports your main component.</p><pre><code class="language-jsson">{
"name": "react-native-progress-steps",
"version": "1.0.0",
"description": "A simple and fully customizable React Native component that implements a progress stepper UI.",
"main": "index.js",
"scripts": {
"test": "echo \"Error: no test specified\" &amp;&amp; exit 1"
},
"repository": {
"type": "git",
"url": "git+https://github.com/colbymillerdev/react-native-progress-steps.git"
},
"keywords": [
"react-native",
"react-component",
"react-native-component",
"react",
"react native",
"mobile",
"ios",
"android",
"ui",
"stepper",
"progress",
"progress-steps"
],
"author": "Colby Miller",
"license": "MIT",
"bugs": {
"url": "https://github.com/colbymillerdev/react-native-progress-steps/issues"
},
"homepage": "https://github.com/colbymillerdev/react-native-progress-steps#readme"
}</code></pre>
<h3 id="project-structure">Project Structure</h3>
<p>The next step is setting up a folder structure for your React Native component. This is really up to you, but I’ll share a simple example of mine below:</p>
<p>You’ll notice some files that we haven’t created yet. We will be addressing those shortly.</p>
<p>Let’s create the <code>index.js</code><em> </em>file. This will be the most important file for properly exporting/importing your component. Navigate to the root project folder and type <code>touch index.js</code>.</p>
<p>There are a few different ways of going about the content inside this file.</p>
<ul>
<li>Directly writing the component class inside of the <code>index.js</code> file and exporting it there.</li>
<li>Creating a separate component JavaScript file and exporting it in <code>index.js</code>.</li>
<li>Lastly, creating many component and container JavaScript files and exporting all the necessary ones in the <code>index.js</code> file. This is the approach I followed and can be seen in the example below.</li>
</ul><pre><code class="language-js">import ProgressSteps from './src/ProgressSteps/ProgressSteps';
import ProgressStep from './src/ProgressSteps/ProgressStep';
export { ProgressSteps, ProgressStep };</code></pre>
<p>No matter which approach is taken, what’s exported in this file is what the consuming app will ultimately import and render. That’s the important part to remember.</p><pre><code class="language-js">import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';</code></pre>
<h3 id="dependencies">Dependencies</h3>
<p>We have to determine what dependencies need to be installed for our React Native component to work properly.</p>
<p>There are three different types of dependencies:</p>
<ul>
<li><strong>peerDependencies:</strong> These dependencies are required for the component to run; however, they are expected to already be installed on the app. An example of this is <code>react-native</code> itself. However, in React Native’s case it is not necessary to add <code>react-native</code> as a peer dependency.</li>
<li><strong>dependencies: </strong>These are also required for the component to run, but you can’t assume the consuming app has these installed. Some examples would be <code>lodash</code> and <code>prop-types</code> .</li>
<li><strong>devDependencies: </strong>These are more straightforward. They are all the packages required to develop the React Native component. Examples of these would be your linter, test framework, and babel.</li>
</ul>
<h3 id="installing-babel-dependency">Installing Babel Dependency</h3>
<p>Our next step is to hook our component up to Babel. We can simply do this by installing the following dev dependency:</p><pre><code class="language-js">npm install metro-react-native-babel-preset --save-dev</code></pre>
<p>After the installation is complete, we need to create a <code>.babelrc</code> file and add the following to it:</p><pre><code class="language-json">{
"presets": ["module:metro-react-native-babel-preset"]
}</code></pre>
<h3 id="creating-gitignore-and-npmignore">Creating .gitignore and .npmignore</h3>
<p>One of the final steps is to create the standard <code>.gitignore</code> and <code>.npmignore</code> files as a best practice. This will also avoid any issues when publishing to NPM.</p>
*.log
npm-debug.log
# Runtime data
tmp
build
dist
# Dependency directory
node_modules</code></pre>
<figcaption>.gitignore</figcaption>
</figure>
*.log
npm-debug.log
# Dependency directory
node_modules
# Runtime data
tmp
# Examples (If applicable to your project)
examples</code></pre>
<figcaption>.npmignore</figcaption>
</figure>
<h3 id="testing">Testing</h3>
<p>Normally, it’s relatively straightforward to link and install our package locally to apps, without having to publish to NPM first.</p>
<p>This would be done by using the <code>npm link</code> command inside of our packages root directory. Then, navigating to an app and typing <code>npm link &lt;package-na</code>me&gt;<code> then npm i</code>nstall .</p>
<p>However, at the time of writing this article, React Native and the <code>npm link</code> command don’t work nicely together.</p>
<p>There are two solutions I’ve found so far that solve this issue:</p>
<h4 id="1-installing-the-package-in-an-application-using-local-path">1. Installing the package in an application using local path</h4>
<p>To do this, navigate to an app and directly install your package there using its directory path.</p><pre><code class="language-bash">npm i &lt;path_to_project&gt;
# For example
npm i ../my-component</code></pre>
<p>After making any changes to your package, you’ll have to revisit the app and re-install. This is not an ideal solution, but it is one that works.</p>
<h4 id="2-creating-an-examples-folder-and-using-npm-pack">2. Creating an Examples folder and using npm pack</h4>
<p>The <code>npm pack</code> command is a great way to quickly package up your React Native component and have it ready for testing. It creates a <code>.tgz</code> file that can then be installed into an already existing application.</p>
<p>Let’s create a <code>/examples</code> folder inside of our NPM package’s root directory. This folder will essentially be its own React Native application that runs and displays your examples.</p>
<p>This can be done by creating a React Native project using <code>react-native init examples</code>.</p>
<blockquote><strong>Note:</strong> This requires having React Native already installed on your computer. You can follow the Facebook guide <a href="https://facebook.github.io/react-native/docs/getting-started.html" rel="noopener">here</a>.</blockquote>
<p>After that is finished, run the <code>npm pack</code> command to generate a file that will have a naming convention similar to <code>package-name-0.0.0.tgz</code>.</p>
<p>Then, go into the <code>/examples</code> folder and install your component by running <code>npm i ../package-name-0.0.0.tgz</code> or <code>yarn add ../package-name-0.0.0.tgz</code> in the terminal. Remember to replace <code>package-name</code> and <code>0.0.0</code> respectively.</p>
<p>Create a JavaScript file or files that will display your component. For this example, we will call this <code>ExampleOne.js</code>. It’s important to point out that you should be importing the component that you just installed using yarn or npm in this file.</p>
<p>Once the file is created, open <code>App.js</code> and import/export the example file. Whatever is exported in this file is what will be displayed when running the project on a simulator or device.</p><pre><code class="language-js">import ExampleOne from './ExampleOne'
export default ExampleOne;</code></pre>
<p>Finally, we can run the application using <code>react-native run-ios</code> or <code>react-native run-android</code>. We should now be able to see our component and properly test it.</p>
<p>After making any changes to your NPM packages code, remember to run the <code>npm pack</code> command, then go into the <code>/examples</code> folder to <code>npm install</code> or <code>yarn add</code> the <code>.tgz</code> file.</p>
<blockquote>A cool benefit of this option is the ability for other users to run your examples on a simulator or device. This allows them to try out your component without having to import it into their own application first. Also, the <code>.tgz</code> file can be easily shared among coworkers, friends, etc.</blockquote>
<h3 id="publishing-to-npm">Publishing To NPM</h3>
<p>Finally, we are ready to share our React Native component with the awesome open source community!</p>
<p>Publishing is very quick and easy. Just log into your NPM account from the terminal using <code>npm login</code> then publish using <code>npm publish</code> .</p>
<p>One thing to remember is NPM requires us to increment the version in <code>package.json</code> each time before publishing.</p>
<h3 id="conclusion">Conclusion</h3>
<p>We have covered a ton of material in this post. If you run into any issues feel free to drop me a question in the comments below. Thanks for following along, I can’t wait to see what you build!</p>
<p><em>Contributions, pull requests, and recommendations are always welcome for <a href="https://www.npmjs.com/package/react-native-progress-steps" rel="noopener">react-native-progress-steps</a>. Give it a try in your next project and let me know what you think!</em></p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
