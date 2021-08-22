---
card: "https://cdn-media-1.freecodecamp.org/images/1*h4bO2japPTG77hSqSBf12g.jpeg"
tags: [Nodejs]
description: by Ted Gross
author: "Milad E. Fahmy"
title: "How to keep your sanity while managing NPM & functions in Node"
created: "2021-08-15T19:36:16+02:00"
modified: "2021-08-15T19:36:16+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-nodejs tag-npm tag-programming tag-javascript tag-functional-programming ">
<header class="post-full-header">
<h1 class="post-full-title">How to keep your sanity while managing NPM &amp; functions in Node</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*h4bO2japPTG77hSqSBf12g.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*h4bO2japPTG77hSqSBf12g.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*h4bO2japPTG77hSqSBf12g.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*h4bO2japPTG77hSqSBf12g.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*h4bO2japPTG77hSqSBf12g.jpeg" alt="How to keep your sanity while managing NPM &amp; functions in Node">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Ted Gross</p>
<h1 id="how-to-keep-your-sanity-while-managing-npm-functions-in-node">How to keep your sanity while managing NPM &amp; functions in Node</h1>
<h3 id="introduction">Introduction</h3>
<p>In my career, I have trolled through hundreds of articles dealing with NodeJS and many full examples of NodeJS, either in the typical MEAN stack, or specific examples using various NPM modules. An integral part of writing in NodeJS is using NPM or Yarn to install libraries which do certain things. To give an example which all Node programmers will know of, there is the Express-Passport-JWT-Mongo NPM libraries.</p>
<p>We all know the stack as well will not stop there. Express will probably also require installation of “body-parser” and “cors”, and possibly sub Express NPM modules. Don’t forget Lodash, Underscore, Moment…and the list goes on and on as there are thousands upon thousands of NPM modules to make use of.</p>
<h3 id="maintaining-npm-module-structure-in-a-sane-way">Maintaining NPM Module Structure In A Sane Way</h3>
<p>Normally, when you review code snippets or systems in a search, or write your own, each file will contain the modules required for that specific file. The following code snippets are taken from real code snippets available on the net:</p>
<ul>
<li><em>Please note for these examples the ‘var’ should be replaced with ‘let’ or ‘const’ depending upon what is being done.</em></li>
</ul><pre><code>var express = require('express');var path = require('path');var favicon = require('serve-favicon');var logger = require('morgan');var bodyParser = require('body-parser');</code></pre>
<p>Then another file will may start with:</p><pre><code>var morgan = require('morgan');var mongoose = require('mongoose');var passport = require('passport');</code></pre>
<p>And a third file will start with:</p><pre><code>var mongoose = require('mongoose');var Schema = mongoose.Schema;var bcrypt = require('bcrypt-nodejs');</code></pre>
<p>You can imagine the rest of the files and there are usually many, even in micro-services, of how they look.</p>
<p>What makes this practice even worse, is that you can find <em>‘require’</em> in the middle of a file as well. In other words, code can go along for many lines and suddenly the coder will introduce yet another NPM module. This usually happens with inexperienced or non-organized coders, yet it is an incredibly common practice and wreaks havoc with understanding and debugging code.</p>
<p>The problem as you can well see, is this plethora of NPM modules, sooner rather than later will cause a huge headache in maintaining a system, especially within a team of programmers, who need to know what has already been installed and is available and what has not.</p>
<p>Fortunately, Node allows for a fairly simple method of dealing with these problems. The following is a method I use for back-end teams dealing with the stack. It keeps things orderly, easy to find, and everyone knowing what is installed and not installed in the system. It also allows for clean uninstalls when an NPM module is no longer needed.</p>
<p>If you are a “functional” programmer, in other words not everything must be OOP with classes and “this-&gt;”, the following may actually allow you to reconsider a whole new method of using functions and stored procedures.</p>
<p>My suggestion would be to create a directory under your root project directory. I usually call this directory <em>“env”</em>, but you can call it whatever you like. <em>“env”</em> is where I keep all my function libraries and stored procedures including, if used, the environment file needed by the <em>“dotenv”</em> NPM library. (The environment variables can be held anywhere, they do not need to be held in the root project directory. Yet a discussion about environment variables and “dotenv” is for another article.) In other words, your <em>“env”</em> directory should only contain files which should be required or accessed by parts of the systems.</p>
<p>In the <em>“env”</em> directory off the root, create a file called <em>“helperMods.js”</em>. (Again, you can call this file whatever you like.) Additionally, if your system is going to use many NPM modules, or those just used for development purposes (such as “chalk”), you my want to divide this into two or three files. However, for our simple example we will use one file.</p><pre><code>module.exports = {    request: require("request"), //used for request http    fs: require('fs'),    path: require('path'),    chalk: require('chalk'),    moment: require('moment'),    express: require('express'),    session: require('express-session'),    eJWT: require('express-jwt'),    bodyParser: require('body-parser'),    cors: require('cors'),    passport: require('passport'),    passportLocal: require('passport-local'),    crypto: require('crypto'),    dotenv: require('dotenv'),    jwt: require('jsonwebtoken'),    jwtclaims: require('jwt-claims'),    redis: require('redis'),    mongodb: require('mongodb'),    mongoose: require('mongoose'),    assert: require('assert'),    shortid: require('shortid'),    badWords: require('bad-words'),    enum: require('enum'),    errorHandler: require('errorhandler'),    morgan: require('morgan')};</code></pre>
<p>First, install an NPM module you want to use, for example:</p><pre><code>npm i jsonwebtoken --s</code></pre>
<p>Now decide upon a caller for that module. For instance, in the above file, jsonwebtoken is defined first as “jwt”. Then require the actual module you installed. So, the line will read:</p><pre><code>jwt: require('jsonwebtoken'),</code></pre>
<p>(The comma at the end is due to the JSON format of the file.)</p>
<p>The things to be aware of in this file are as follows:</p>
<p>1. Keep your calling names distinct.</p>
<p>2. Despite what you see above, I would alphabetize according to calling names or NPM module alphabet order.</p>
<p>3. Remember, as well, even if it is a built-in NodeJS module such as “crypto” (yes “crypto” is now finally part of the internal NodeJS) or “request” you need to require it.</p>
<p>4. Indeed, if you do require many “native” modules you can separate these into files which can all be called from the first few lines in each file you run.</p>
<p>5. Remember, “namepaces” will protect you from loading a module twice into memory. Once you call that module in your require, even if you call it again from another file, it will not take up more or “duplicate” memory.</p>
<p>Once you have your file setup, the method of calling from any file is fairly easy.</p>
<p>Each file you set up or use, should start with two (or more) lines depending upon the modules you need to require. For example:</p><pre><code>"use strict";const helpMods = require("./env/helperMods");</code></pre>
<p>Those above lines above will require all the modules in your file. It then becomes a simple method to call them using dot notation.</p>
<p>For instance, if you need to call the badWords module, your dot notation will look like this:</p><pre><code>helpMods.badWords.(do whatever needs to be done normally here)</code></pre>
<p>If you forget the helpMods, an IDE such as WebStorm will throw you out an error warning that the module has not been required which will immediately tell you that you forgot the correct dot notation or that you have forgotten to include that module in your main exports file.</p>
<h3 id="maintaining-user-functions-in-a-sane-way">Maintaining User Functions In A Sane Way</h3>
<p>Again, when looking at many examples you will find functions within the file. Many times, these functions are a “one-off”, in other words specifically used for a very specific situation which will not repeat itself. Or will it?</p>
<p>In years of experience I have learned that once you have a function running correctly, there is a good chance you will use it again from another file. Perhaps the parameters may be different, or you may need to add to the parameters it receives (easily done with a good IDE), <em>but chances are you will use it again</em>.</p>
<p>For this reason, I maintain a set of function libraries in the <em>“env” </em>directory. I usually try to divide these functions into logical structures. For instance, all CRUD and other DB activities will go into one function library file. All security functions will go into another. This is just a suggestion.</p>
<p>What this type of programming does:</p>
<ul>
<li>Gives you and your team control over the environment.</li>
<li>Reduces the requires of specific modules over and over again in each file.</li>
<li>Grants immediate access to NPM modules which you may have not thought you needed in a file.</li>
<li>Uses standard dot notation, without any workarounds.</li>
<li>Allows you to divide up your structure in any way you deem fit, including calling functions in function files etc. in this manner. However, a function file is not written in the same type of structure. You will require:</li>
</ul><pre><code>"use strict";const helpMods = require("./env/helperMods");</code></pre>
<p><strong>And any other module files you decided upon.</strong></p>
<p>For this example we will use a few functions, separated into order for our system Then write and define all functions, with callbacks, promises or async/await. Let us call the file <em>“generalFuncs.js”</em> Each function though does have a name.</p><pre><code>Function(getExactTime(passed params go in here){/do stuff in here}</code></pre><pre><code>Function(logFile(passed params go in here){//do stuff in here}</code></pre>
<p>Add as many functions as you need to this file. <strong>So, at the end of the function file you should write:</strong></p><pre><code>module.exports = {getExactTime, logfile, HTMLResponse, getRemoteConnect, doesKeyExist, generateUniqueKey, restartAll, createDateFromString};</code></pre>
<p>The above will allow these functions to be available in dot.notation to any file you add the following:</p><pre><code>"use strict";const helpMods = require("./env/helperMods");const generalFuncs = require (../env/generalFuncs");</code></pre>
<p>Now when you use the function “getExactTime” you access it as follows:</p><pre><code>generalFuncs.getExactTime(whatever is needed goes here);</code></pre>
<p>As an added plus in any good IDE, you will be able to see which functions are not ever exported as they will never be required in any system.</p>
<h3 id="conclusion">Conclusion</h3>
<p>The above methods will allow you to maintain control and understanding of what is being used in the system. The function files will allow refactoring of functions along the route whenever it needs to be done. Dot notation will allow you to call the modules or functions in a simple orderly fashion.</p>
<p>It does add a further level into your directory structure which may drive you crazy accessing them from other sub-directories, unless you know exactly how Node handles directory structures (which you should know anyway). <strong><em>If you would rather not do this you can leave them in your root app directory.</em></strong></p>
<p>None of this, by the way, will interfere with GitHub Versions or version controls. Indeed, checking, refactoring and testing will become that much easier. Single lines can be marked only for development systems others for production systems.</p>
<p>If you can wrap your ahead around this coding style, at least in terms of modules and possibly functions, you will find your code cleaner, easier to read, available to the entire team &amp; easier to refactor.</p>
<p>________________________________________________________</p>
<p>About the Author: Ted Gross served as a CTO for many years with an expertise in database technology, NodeJS, MongoDB, Encryption, PHP and OOP. He has expertise in Virtual World Technologies &amp; Augmented Reality. He has also published many articles on technological topics especially on Big Data &amp; Chaos Theory (in professional journals and online @ Medium &amp; LinkedIn). <a href="http://amazon.com/author/tedgross" rel="noopener"><strong>He is also an author of literary fiction, children’s books and various non-fiction articles</strong></a>. His short story collection, <a href="http://www.amazon.com/Ancient-Tales-Modern-Legends-Collection/dp/1469901714" rel="noopener"><em>“Ancient Tales, Modern Legends”</em></a> has received excellent reviews.</p>
<p>Ted can be reached via email: tedwgross@gmail.com; <a href="https://twitter.com/tedwgross" rel="noopener">Twitter</a> (@tedwgross); <a href="http://il.linkedin.com/in/tedwgross" rel="noopener">LinkedIn</a>; <a href="https://medium.com/@tedwgross" rel="noopener">Medium</a></p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
