---
card: "/images/default.jpg"
tags: [Angular]
description: Do you remember when you were learning AngularJS (version 1),
author: "Milad E. Fahmy"
title: "How to use JavaScript libraries in Angular 2+ apps"
created: "2021-08-15T19:33:40+02:00"
modified: "2021-08-15T19:33:40+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-angular tag-angular2 tag-angular6 tag-javascript ">
<header class="post-full-header">
<h1 class="post-full-title">How to use JavaScript libraries in Angular 2+ apps</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2019/06/1_FDIQCYA3BNp9Ek-tqGeQjA-1--1.png 300w,
/news/content/images/size/w600/2019/06/1_FDIQCYA3BNp9Ek-tqGeQjA-1--1.png 600w,
/news/content/images/size/w1000/2019/06/1_FDIQCYA3BNp9Ek-tqGeQjA-1--1.png 1000w,
/news/content/images/size/w2000/2019/06/1_FDIQCYA3BNp9Ek-tqGeQjA-1--1.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2019/06/1_FDIQCYA3BNp9Ek-tqGeQjA-1--1.png" alt="How to use JavaScript libraries in Angular 2+ apps">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p><em>Do you remember when you were learning AngularJS (version 1), and tutorials kept telling you that you don’t need to add JQuery into your project?</em> </p>
<p>That hasn't changed - you don’t need to add JQuery to your Angular 2+ project. But if, for any reason, you might need to use some JavaScript libraries, you need to know how to use them in Angular. So, let’s get started from zero.</p>
<p><em>I’m going to add </em><a href="http://underscorejs.org/" rel="noopener"><em>underscore.js</em></a><em> to a project and show you how it works.</em></p>
<h3 id="1-create-a-new-project-using-angular-cli">1. Create a new project using Angular CLI</h3>
<p>If you don’t already have CLI installed on your machine, <a href="https://cli.angular.io/" rel="noopener">install it</a>. After installation, create a new project (if you don’t already have one).</p>
<p>ng new learning</p>
<p>Now you will have a new Angular project named “<strong><strong>learning</strong></strong>”.</p>
<h3 id="2-install-the-package-into-your-project">2. Install the package into your project</h3>
<p>Go to the project we just made:</p>
<p>cd learning</p>
<p>Use your preferred package manager to install the library you’re going to use; I use <code>npm</code> to install <code>underscore.js</code>.</p>
<p>npm install --save underscore</p>
<h3 id="3-import-the-library-into-angular-typescript-">3. Import the library into Angular (TypeScript)</h3>
<p>We are writing code in TypeScript, and we should follow its rules. TypeScript needs to understand <code>underscore.js</code>.</p>
<p>As you might know, TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. TypeScript has its own syntax, function and variables can have defined types. But when we are going to use an external library such as underscore, we need to declare type definitions for TypeScript.</p>
<p>In JavaScript, the type of arguments are not important and you will not get an error while you’re writing code. But TypeScript won’t let you to give an array to a function that accepts a string as input. Then here is the question: should we rewrite the <code>underscore.js</code> in TypeScript and define types there?</p>
<p>Of course not - TypeScript provides declaration files <em>(*.d.ts) </em>which define types and standardize a JavaScript file/libraries for TypeScript.</p>
<p>Some libraries include a typing file and you don’t need to install TypeScript’s type destination for them. But in case a library does not have a &nbsp;<code>.d.ts</code> file, you need to install it.</p>
<p>We just need to find and import <code>underscore.js</code> type definition file. I suggest that you use <a href="https://microsoft.github.io/TypeSearch/" rel="noopener">Type Search</a> to find the declaration file for the libraries you need.</p>
<p>Search for <code>underscore</code> in <a href="https://microsoft.github.io/TypeSearch/" rel="noopener">Type Sceach</a> and it redirects you to<a href="https://www.npmjs.com/package/@types/underscore" rel="noopener">types/underscore</a>. Install the declaration file using the following command:</p>
<p><code>npm install --save @types/underscore</code></p>
<h3 id="4-import-type-declaration-into-angular-app">4. Import type declaration into Angular app</h3>
<p>Let’s say you’re going to use underscore in your <code>app.component.ts</code> file. Open the <code>app.component.ts</code> by your IDE and add the following code in the top of the file:</p>
</code></pre>
<p>The TypeScript in that component now understands <code>_</code> and it easily works as expected.</p>
<h3 id="question-how-to-use-a-library-which-does-not-have-type-definition-d-ts-in-typescript-and-angular">Question: How to use a library which does not have type definition (*.d.ts) in TypeScript and Angular?</h3>
<p>Create it if the <code>src/typings.d.ts</code> does not exist. Otherwise open it, and add your package to it:</p><pre><code>declare var </code></pre>
<p>In your TypeScript, now you need to import it by the given name:</p>
</code></pre>
<h3 id="conclusion">Conclusion</h3>
<p>To wrap up, let’s make a simple example to see a working example of <code>_</code>. Open <code>app.component.ts</code> and inside the <code>appComponent</code> class write a <code>constructor</code> which returns the last item of an array using underscore's <code>_.last()</code> function:</p>
import * as _ from 'underscore';
...
export class AppComponent {
constructor() {
const myArray: number[] = [9, 1, 5];
const lastItem: number = _.last(myArray); //Using underscore
console.log(lastItem); //5
}
}
</code></pre>
<p>If you open your Angular app now, you will get <code>5</code> in the console, which means we could correctly add <code>underscore</code> into our project and it’s working as expected.</p>
<p>You can add any JavaScript libraries to your project just by following the same steps.</p>
<hr>
<p>You can follow <a href="https://medium.com/@kermani">me</a> for more articles on technology and programming.</p>
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
