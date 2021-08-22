---
card: "https://cdn-media-1.freecodecamp.org/images/1*DnSo0yGbkLsYscYR4sWOnA.png"
tags: [JavaScript]
description: I know what you’re thinking. WAT?! Didn’t Gulp just kill Grun
author: "Milad E. Fahmy"
title: "Why I Left Gulp and Grunt for npm Scripts"
created: "2021-08-15T19:55:56+02:00"
modified: "2021-08-15T19:55:56+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-nodejs tag-npm tag-programming tag-tech ">
<header class="post-full-header">
<h1 class="post-full-title">Why I Left Gulp and Grunt for npm Scripts</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*DnSo0yGbkLsYscYR4sWOnA.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*DnSo0yGbkLsYscYR4sWOnA.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*DnSo0yGbkLsYscYR4sWOnA.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*DnSo0yGbkLsYscYR4sWOnA.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*DnSo0yGbkLsYscYR4sWOnA.png" alt="Why I Left Gulp and Grunt for npm Scripts">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>I know what you’re thinking. WAT?! Didn’t Gulp just kill Grunt? Why can’t we just be content for a few minutes here in JavaScript land? I hear ya, but…</p>
<blockquote>I’ve found Gulp and Grunt to be unnecessary abstractions. npm scripts are plenty powerful and often easier to live with.</blockquote>
<h4 id="let-s-begin-with-an-example-">Let’s Begin With An Example…</h4>
<p>I was a big fan of Gulp. But on my last project, I ended up with 100’s of lines in my gulpfile and around a dozen Gulp plugins. I was struggling to integrate Webpack, Browsersync, hot reloading, Mocha and much more using Gulp. Why? Well, some plugins had insufficient documentation for my use case. Some plugins only exposed part of the API I needed. One had an odd bug where it would only watch a small number of files. Another stripped colors when outputting to the command line.</p>
<p>These are solvable problems, but <strong>none of these issues occurred when I called the tools directly.</strong></p>
<p>Lately I’ve noticed many open-source projects are simply using npm scripts. I decided to step back and re-examine. Did I really need Gulp? It turns out I didn’t.</p>
<p>I decided to try using just npm scripts on my new open source project. I created a rich dev environment and build process for React applications using just npm scripts. Curious what this looks like? Check out <a href="https://github.com/coryhouse/react-slingshot" rel="noopener">React Slingshot</a>. I walk through how to create this build process using npm scripts in “<a href="https://app.pluralsight.com/library/courses/javascript-development-environment/table-of-contents" rel="noopener">Building a JavaScript Development Environment</a>” on Pluralsight.</p>
<p>The surprising thing is, I now prefer working with npm scripts over Gulp. Here’s why.</p>
<h3 id="what-s-wrong-with-gulp-and-grunt">What’s Wrong with Gulp and Grunt?</h3>
<p>Over time, I’ve noticed three core issues with task runners like Gulp and Grunt:</p>
<ol>
<li>Dependence on plugin authors</li>
<li>Frustrating debugging</li>
<li>Disjointed documentation</li>
</ol>
<p>Let’s consider each of these issues.</p>
<h4 id="issue-1-dependence-on-plugin-authors">Issue #1: Dependence on Plugin Authors</h4>
<p>When you’re working with new or unpopular technologies, no plugin may exist at all. And when a plugin exists, it may be outdated. For example, Babel 6 was recently released. The API changed significantly, so many Gulp plugins were incompatible with the latest version. When using Gulp, I was stuck because the Gulp plugin I needed wasn’t updated yet.</p>
<p>With Gulp or Grunt, you must wait for plugin maintainers to provide updates, or fix it yourself. This delays your ability to utilize new versions of modern tools. In contrast, <strong>when I use npm scripts, I consume tools directly without an extra layer of abstraction</strong>. This means when new versions of Mocha, Istanbul, Babel, Webpack, Browserify and so on are released, I’m able to utilize the new versions immediately.</p>
<p>In terms of selection, nothing beats npm:</p>
<figcaption>Gulp has ~2,100 plugins. Grunt has ~5,400. npm offers over 227,000 packages, growing at a rate of 400+ daily.</figcaption>
</figure>
<blockquote>When you use <strong>npm scripts, you don’t search for a Grunt or Gulp plugin. You choose from over 227,000 npm packages.</strong></blockquote>
<p>To be fair, if the Grunt or Gulp plugin you need isn’t available, you can certainly utilize npm packages directly. But then you’re no longer leveraging Gulp or Grunt for that specific task.</p>
<h4 id="issue-2-frustrating-debugging">Issue #2: Frustrating Debugging</h4>
<p>As integrations fail, debugging in Grunt and Gulp can be frustrating. Since you’re working with an extra layer of abstraction, there are more potential causes for any bug:</p>
<ol>
<li>Is the base tool broken?</li>
<li>Is the Grunt/Gulp plugin broken?</li>
<li>Is my configuration broken?</li>
<li>Am I using incompatible versions?</li>
</ol>
<p>Using npm scripts eliminates #2. And I find #3 is far less common since I typically call the tool’s command line interface directly. Finally, #4 is less common since I’ve reduced the number of packages in my project by utilizing npm directly instead of using a task runner’s abstraction.</p>
<h4 id="issue-3-disjointed-documentation">Issue #3: Disjointed Documentation</h4>
<p>The documentation for the core tools I need is nearly always better than the associated Grunt and Gulp plugins. For example, if I use gulp-eslint, I end up splitting my time between the <a href="https://github.com/adametry/gulp-eslint" rel="noopener">gulp-eslint</a> docs and the ESLint website. I have to switch context between the plugin and the tool it is abstracting. The core piece of friction in Gulp and Grunt is this:</p>
<blockquote><strong>Understanding the tool isn’t enough. Gulp and Grunt require you to understand the plugin’s abstraction.</strong></blockquote>
<p>Most build-related tools offer clear, powerful, and well-documented command line interfaces. See the <a href="http://eslint.org/docs/user-guide/command-line-interface" rel="noopener">docs on ESLint’s CLI</a> as a good example. I find reading and implementing a short command line call in npm scripts clearer, lower friction, and easier to debug (since there’s a layer of abstraction removed).</p>
<p>Now that I’ve established the pain points, the question is, why do we think we need task runners like Gulp and Grunt?</p>
<h3 id="why-have-we-ignored-npm-for-builds">Why Have We Ignored npm for builds?</h3>
<p>I believe there are <strong>four core misconceptions</strong> that led to Gulp and Grunt becoming so popular:</p>
<ol>
<li>People think npm scripts require strong command line skills</li>
<li>People think npm scripts aren’t powerful enough</li>
<li>People think Gulp’s streams are necessary for fast builds</li>
<li>People think npm scripts don’t run cross platform</li>
</ol>
<p>Let’s address these misconceptions in order.</p>
<h4 id="misconception-1-npm-scripts-require-strong-command-line-skills">Misconception #1<strong>: </strong>npm Scripts Require Strong Command-Line Skills</h4>
<p>You don’t have to know much about your operating system’s command line to enjoy the power of npm scripts. Sure, <a href="http://www.tutorialspoint.com/unix/unix-useful-commands.htm" rel="noopener">grep, sed, awk, and pipes</a> are lifelong skills worth learning, but <strong>you don’t have to be a Unix or Windows command line wizard to use npm scripts</strong>. You can leverage the 1000’s of packages in npm to get the job done instead.</p>
<p>For instance, you might not know that in Unix this forcefully deletes a directory: rm -rf. That’s okay. You can use <a href="https://www.npmjs.com/package/rimraf" rel="noopener">rimraf</a> which does the same thing (and it works cross-platform to boot). Most npm packages offer interfaces that assume very little knowledge of your OS’s command line. Just search npm for packages that do what you need, read the docs, learn as you go. I used to search for Gulp plugins. Now I search for npm packages instead. A great resource: <a href="https://libraries.io" rel="noopener">libraries.io</a>.</p>
<h4 id="misconception-2-npm-scripts-aren-t-powerful-enough"><strong>Misconception #2: npm Scripts Aren’t Powerful Enough</strong></h4>
<p>npm scripts are surprisingly powerful on their own. There are convention-based <a href="https://docs.npmjs.com/misc/scripts#description" rel="noopener">pre and post hooks</a>:</p><pre><code class="language-js">
{
"name": "npm-scripts-example",
"version": "1.0.0",
"description": "npm scripts example",
"scripts": {
"prebuild": "echo I run before the build script",
"build": "cross-env NODE_ENV=production webpack",
"postbuild": "echo I run after the build script"
}
}</code></pre>
<p>All you do is follow convention. The scripts above will run in order based on their prefix. The prebuild script will run before the build script because it has the same name, but is prefixed with “pre”. The postbuild script will run after the build script because it has the prefix of “post”. So if I create scripts named prebuild, build, and postbuild, they’ll run automatically in that order when I type `npm run build`.</p>
<p>You can also decompose big problems by calling one script from another:</p><pre><code class="language-js">{
"name": "npm-scripts-example",
"version": "1.0.0",
"description": "npm scripts example",
"scripts": {
"clean": "rimraf ./dist &amp;&amp; mkdir dist",
"prebuild": "npm run clean",
"build": "cross-env NODE_ENV=production webpack"
}
}</code></pre>
<p>In this example the prebuild task calls the clean task. This allows you to decompose your scripts into small, well-named, single responsibility, one-liners.</p>
<p>You can call multiple scripts serially on a single line using &amp;&amp;. The scripts in the clean step above will run one after the other. This simplicity will really make you smile if you’re someone who has struggled with getting a list of tasks to run in order in Gulp.</p>
<p>And if a command gets too complicated, you can always call a separate file:</p><pre><code class="language-js">{
"name": "npm-scripts-example",
"version": "1.0.0",
"description": "npm scripts example",
"scripts": {
"build": "node build.js"
}
}</code></pre>
<p>I’m calling a separate script in the build task above. That script will be run by Node and thus can utilize any npm packages I need, and utilize all the power of JavaScript inside.</p>
<p>I could go on, but <a href="https://docs.npmjs.com/misc/scripts" rel="noopener">the core features are documented here</a>. Also, there’s also a short <a href="https://www.pluralsight.com/courses/npm-build-tool-introduction" rel="noopener">Pluralsight course on using npm as a build tool</a>. Or, check out <a href="https://github.com/coryhouse/react-slingshot" rel="noopener">React Slingshot</a> for an example of all this in action.</p>
<h4 id="misconception-3-gulp-s-streams-are-necessary-for-fast-builds">Misconception #3: Gulp’s Streams Are Necessary for Fast Builds</h4>
<p>Gulp quickly gained traction over Grunt because Gulp’s in-memory streams are faster than Grunt’s file-based approach. But you don’t need Gulp to enjoy the power of streaming. In fact, <strong>streaming has always been built into both Unix and Windows command lines</strong>. The pipe (|) operator streams the output of one command to the input of another command. And the redirection (&gt;) operator redirects output to a file.</p>
<p>So, for example, in Unix I can use `grep` the contents of a file and redirect the output to a new file:</p><pre><code>grep ‘Cory House’ bigFile.txt &gt; linesThatHaveMyName.txt</code></pre>
<p><strong>The work above is streamed. No intermediate files are written. </strong>(Wondering how to do the command above in a cross-platform way? Read on…)</p>
<p>You can also use the `&amp;` operator to run two commands at the same time on Unix:</p><pre><code>npm run script1.js &amp; npm run script2.js</code></pre>
<p>The two scripts above will run in at the same time. To run scripts concurrently cross platform, use <a href="https://www.npmjs.com/package/npm-run-all" rel="noopener">npm-run-all</a>. This leads to the next misconception…</p>
<h4 id="misconception-4-npm-scripts-don-t-run-cross-platform">Misconception #4: npm Scripts Don’t Run Cross-platform</h4>
<p>Many projects are tied to a specific operating system, so cross-platform concerns don’t matter. But if you need to run cross-platform, npm scripts can still work great. Countless open source projects are proof. Here’s how.</p>
<p>Your operating system’s command line runs your npm scripts. So on Linux and OSX, your npm scripts run on a Unix command line. On Windows, npm scripts run on the Windows command line. Thus, if you want your build scripts to run on all platforms, you need to make both Unix and Windows happy. Here are three approaches:</p>
<p><strong>Approach 1:</strong> Use <a href="http://www.yolinux.com/TUTORIALS/unix_for_dos_users.html" rel="noopener">commands that run cross-platform</a>. There’s a surprising number of cross-platform commands. Here’s a few:</p><pre><code>&amp;&amp; chain tasks (Run one task after another)
&lt; input file contents to a command
&gt; redirect command output to a file
| redirect command output to another command</code></pre>
<p><strong>Approach 2:</strong> Use node packages. You can use node packages instead of shell commands. For instance, use <a href="https://www.npmjs.com/package/rimraf" rel="noopener">rimraf</a> instead of `rm -rf`. Use <a href="https://www.npmjs.com/package/cross-env" rel="noopener">cross-env</a> to set environment variables in a cross-platform way. Search Google, npm or <a href="https://libraries.io" rel="noopener">libraries.io</a> for what you want to do and there is almost certainly a node package that will get it done cross-platform. And if your command line calls get too long, you can call Node packages in separate scripts as well like this:</p><pre><code>node scriptName.js</code></pre>
<p>The script above is plain old JavaScript, run by Node. And since you’re just calling a script on the command line, you’re not limited to .js files. You can run any script that your OS can execute such as Bash, Python, Ruby, or Powershell as well.</p>
<p><strong>Approach 3</strong>: Use <a href="https://www.npmjs.com/package/shelljs" rel="noopener">ShellJS</a>. ShellJS is an npm package that runs Unix commands via Node. So this gives you the power to run Unix commands on all platforms, including Windows.</p>
<p>I used a combination of approach #1 and #2 on <a href="https://github.com/coryhouse/react-slingshot" rel="noopener">React Slingshot</a>.</p>
<h3 id="pain-point">Pain Point</h3>
<p>There are admittedly some downsides: The JSON spec doesn’t support comments, so you can’t add comments in package.json. There are a few ways to work around this limitation:</p>
<ol>
<li>Write small, well-named, single purpose scripts</li>
<li>Document scripts separately (in a README.md for instance)</li>
<li>Call a separate .js file</li>
</ol>
<p>I prefer option #1. If you break each script down to have a single responsibility, comments are rarely necessary. <strong>The script’s name should fully describe the intent, just like any small well-named function.</strong> As I discuss in “<a href="https://www.pluralsight.com/courses/writing-clean-code-humans" rel="noopener">Clean Code: Writing Code for Humans</a>”, small single responsibility functions rarely require comments. When I feel a comment is necessary, I use option #3 and move the script to a separate file. This gives me all the compositional power of JavaScript when I need it.</p>
<p>Package.json also doesn’t support variables. This sounds like a big deal, but it’s not for two reasons. First, the most common need for variables revolves around environment, which you can set on the command line. Second, if you need variables for other reasons, you can call a separate .js file. Check out <a href="https://github.com/kriasoft/react-starter-kit/blob/master/package.json#L74" rel="noopener">React-starter-kit</a> for an elegant example of this pattern.</p>
<p>Finally, there’s also a risk of creating long, complex command line arguments that are difficult to understand. Code reviews and diligent refactoring are a great way to assure npm scripts are decomposed into small, well-named, single purpose functions that everyone understands. If it’s complex enough to need a comment, you should likely refactor the single script into multiple well named scripts or extract it to a separate file.</p>
<h4 id="abstractions-must-be-justified">Abstractions Must Be Justified</h4>
<p>Gulp and Grunt are abstractions over the tools I use. Abstractions are useful, but abstractions have a cost. They leak. They make us dependent upon the plugin maintainers and their documentation. And they add complexity by increasing the number of dependencies. I’ve decided task runners like Gulp and Grunt are abstractions I no longer need.</p>
<p>Looking for details? I walk through how to create a build process using npm scripts from scratch in “<a href="https://app.pluralsight.com/library/courses/javascript-development-environment/table-of-contents" rel="noopener">Building a JavaScript Development Environment</a>” on Pluralsight.</p>
<p>Comments? Chime in below or on <a href="https://www.reddit.com/r/javascript/comments/41e1ys/why_i_left_gulp_and_grunt_for_npm_scripts/" rel="noopener">Reddit</a> or <a href="https://news.ycombinator.com/item?id=10929476" rel="noopener">Hacker News</a>.</p>
<p>Finally, I’m far from the first person to suggest this. Here are some excellent links:</p>
<ul>
<li><a href="http://substack.net/task_automation_with_npm_run" rel="noopener">Task automation with npm run</a> — James Holliday</li>
<li><a href="https://www.youtube.com/watch?v=0RYETb9YVrk" rel="noopener">Advanced front-end automation with npm scripts</a> — Kate Hudson</li>
<li><a href="http://blog.keithcirkel.co.uk/how-to-use-npm-as-a-build-tool/" rel="noopener">How to use npm as a build tool</a> — Kieth Cirkel</li>
<li><a href="http://app.pluralsight.com/courses/npm-build-tool-introduction" rel="noopener">Introduction to npm as a Build Tool</a> — Marcus Hammarberg</li>
<li><a href="http://gon.to/2015/02/26/gulp-is-awesome-but-do-we-really-need-it/" rel="noopener">Gulp is awesome, but do we really need it?</a> — Gonto</li>
<li><a href="http://code.tutsplus.com/courses/npm-scripts-for-build-tooling" rel="noopener">NPM Scripts for Build Tooling</a> — Andrew Burgess</li>
</ul>
<p><strong><em>Cory House</em></strong> is the author of “<a href="https://pluralsight.com/courses/react-redux-react-router-es6" rel="noopener">React and Redux in ES6</a>”, “<a href="https://www.google.com/url?sa=t&amp;rct=j&amp;q=&amp;esrc=s&amp;source=web&amp;cd=1&amp;cad=rja&amp;uact=8&amp;ved=0ahUKEwiK1pXx89nJAhUujoMKHeuWAEUQFggcMAA&amp;url=https%3A%2F%2Fwww.pluralsight.com%2Fcourses%2Fwriting-clean-code-humans&amp;usg=AFQjCNEBfkBoN-IgCn_1jFUqWDAUIxcmAw&amp;sig2=Ub9Wup4k4mrw_ffPgYu3tA" rel="noopener">Clean Code: Writing Code for Humans</a>” and <a href="https://app.pluralsight.com/profile/author/cory-house" rel="noopener">multiple other courses on Pluralsight</a>. He is a Software Architect at VinSolutions and <a href="http://www.bitnative.com/training/" rel="noopener">trains software developers internationally</a> on software practices like front-end development and clean coding. Cory is a Microsoft MVP, Telerik Developer Expert, and founder of <a href="http://www.outlierdeveloper.com" rel="noopener">outlierdeveloper.com</a>.</p>
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
