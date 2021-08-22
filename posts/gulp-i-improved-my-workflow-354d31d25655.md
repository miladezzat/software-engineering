---
card: "https://cdn-media-1.freecodecamp.org/images/1*3vp5N6O1BBr79sdNtU6cQg.jpeg"
tags: [JavaScript]
description: by Stefano Grassi
author: "Milad E. Fahmy"
title: "Gulp! I Improved my Workflow!"
created: "2021-08-15T19:56:15+02:00"
modified: "2021-08-15T19:56:15+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-gulp tag-front-end-development ">
<header class="post-full-header">
<h1 class="post-full-title">Gulp! I Improved my Workflow!</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*3vp5N6O1BBr79sdNtU6cQg.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*3vp5N6O1BBr79sdNtU6cQg.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*3vp5N6O1BBr79sdNtU6cQg.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*3vp5N6O1BBr79sdNtU6cQg.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*3vp5N6O1BBr79sdNtU6cQg.jpeg" alt="Gulp! I Improved my Workflow!">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Stefano Grassi</p>
<h1 id="gulp-i-improved-my-workflow-">Gulp! I Improved my Workflow!</h1>
<h4 id="yet-another-hands-on-experience-with-gulp-js">yet another hands-on experience with Gulp.js</h4>
<figcaption>Jökulsárlón, Iceland by <a href="https://unsplash.com/jeremy" rel="noopener" target="_blank" title="">Jeremy Goldberg</a></figcaption>
</figure>
<p>Unless you’ve been living under a rock for the past few years, the number of tools at the disposal of front-end developers have grown rapidly. What we have now is a wide range of projects dedicated to speed-up, automate and increase the quality of our workflow.</p>
<p>For example, just imagine:</p>
<ul>
<li>compiling <a href="https://www.npmjs.com/package/gulp-sass" rel="noopener">SASS</a>/<a href="https://www.npmjs.com/package/gulp-less" rel="noopener">LESS</a>/<a href="https://www.npmjs.com/package/postcss" rel="noopener">PostCSS</a>/<a href="https://www.npmjs.com/package/gulp-stylus" rel="noopener">Stylus</a> to a minified CSS, <a href="https://www.npmjs.com/package/gulp-uncss" rel="noopener">tailored</a> to your needs, <a href="https://www.npmjs.com/package/gulp-autoprefixer" rel="noopener">auto-prefixed</a> and in real-time</li>
<li><a href="https://www.npmjs.com/package/gulp-concat" rel="noopener">concatenating</a> and <a href="https://www.npmjs.com/package/gulp-uglify" rel="noopener">minifying</a> your scripts</li>
<li>compressing html files created from <a href="https://www.npmjs.com/package/gulp-file-include" rel="noopener">templates</a> and atomic modules</li>
<li><a href="http://www.browsersync.io/" rel="noopener">preview</a> your webapp from a virtual server during the compilation, auto-refreshed and synced to all your devices</li>
<li>test your web <a href="https://www.npmjs.com/package/gulp-sitespeedio" rel="noopener">performance</a></li>
<li>self-updating style-<a href="https://trulia.github.io/hologram/" rel="noopener">guide</a> of the project</li>
<li><a href="https://www.npmjs.com/package/gulp-imagemin" rel="noopener">compressing</a> images and creating <a href="https://www.npmjs.com/package/gulp.spritesmith" rel="noopener">sprites</a></li>
</ul>
<p>Some years ago this sounded more like a Disneyan dream but we’re living in the future, so fear not! <a href="http://gruntjs.com/" rel="noopener">Grunt</a>, <a href="http://mimosa.io/" rel="noopener">Mimosa</a>, <a href="http://broccolijs.com/" rel="noopener">Broccoli</a> and <a href="http://gulpjs.com/" rel="noopener">Gulp</a> to the rescue!</p>
<p>Each system has its own strong points. I’ve chosen Gulp for my needs but make sure to check them all out before deciding which best suits you.</p>
<h4 id="so-gulp-what-s-that">So… gulp? What’s that?</h4>
<p><a href="https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md" rel="noopener"><strong>gulpjs/gulp</strong></a><br><a href="https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md" rel="noopener"><em>gulp — The streaming build system</em>github.com</a></p>
<p>As its site states, Gulp is a “<a href="http://gulpjs.com/" rel="noopener">streaming build system</a>” which means that you can set your own tasks to be run on a pipeline, monitor a folder for a change and re-run.</p>
<p>And it’s <strong>super simple</strong>.</p>
<figcaption>That’s ingenious, if I understand it correctly.<br>It’s a Swiss watch.<br>Yeah, the beauty of this is its simplicity.</figcaption>
</figure>
<h4 id="gulp-basic-concepts">Gulp Basic Concepts</h4>
<p>Let’s sip through the main elements</p>
<p><strong>gulp.task</strong><br>aka the action you want to achieve. Managing CSS? Generating the docs?<br>Gulp define them with <a href="https://github.com/robrich/orchestrator" rel="noopener">orchestrator</a>, a module that allows us to define dependencies and maximum concurrency</p><pre><code>gulp.task(‘somename’, function() { // Do stuff});</code></pre>
<p><strong>gulp.watch</strong><br>aka the folders you want to keep checked for changes</p><pre><code>gulp.watch(‘folder/*.ext’, [‘firstTask’, ‘secondTask’]);</code></pre>
<p>Every <strong>stream</strong> originates from a source(s) matching a specific <strong>glob</strong> (a pattern that a file needs to match)</p><pre><code>gulp.src(globs[, options])</code></pre>
<p>a series of<strong> pipes </strong>(actions)</p><pre><code>.pipe(concat()),.pipe(minify())</code></pre>
<p>and a <strong>destination</strong> defined with</p><pre><code>gulp.dest(path[, options])</code></pre>
<p>To operate, gulp needs two core files, <strong>package.json</strong> and <strong>gulpfile.js.</strong><br><em>(For the installation of gulp, follow the official docs)</em></p>
<h4 id="gulpfile-js">Gulpfile.js</h4>
<p>In the <strong>gulpfile</strong> we’ll declare which plugins are we going to use, the tasks we want to run, which folders we’re going to watch, etc…</p>
<h4 id="package-json">Package.json</h4>
<p>The <strong>package.json</strong> file is used to store all the information regarding the dependencies of the project (gulp included!).</p>
<ul>
<li>To <strong>create</strong> it</li>
</ul><pre><code>$ npm init</code></pre>
<p>You’ll be prompted to enter some basic info for the heading of the file, like the author name, the project name and so on.</p>
<ul>
<li>To <strong>install</strong> a plugin and save the dependency on the json file</li>
</ul><pre><code>$ npm install --save-dev yourPluginName</code></pre>
<ul>
<li>To <strong>uninstall</strong> a plugin and remove the dependency on the json file</li>
</ul><pre><code>$ npm uninstall --save-dev yourPluginName</code></pre>
<ul>
<li>If you need to <strong>install all the dependencies</strong> from a compiled package.json</li>
</ul><pre><code>$ npm install</code></pre>
<h4 id="project-organization">Project Organization</h4>
<p>This is my approach to organize the folder of a project managed with Gulp</p>
<h4 id="plugins-ftw-">Plugins FTW!</h4>
<p>Gulp has an impressing list of plugins (<strong>1895</strong> at the time I’m writing this article)</p>
<p><a href="http://gulpjs.com/plugins/" rel="noopener"><strong>gulp.js plugin registry</strong></a><br><a href="http://gulpjs.com/plugins/" rel="noopener"><em>Discover gulp.js plugins</em>gulpjs.com</a></p>
<p><strong>Must Have</strong></p>
<ul>
<li><a href="https://github.com/jackfranklin/gulp-load-plugins" rel="noopener">gulp-load-plugins</a><br>This lazy-loads the plugins installed in your project. You assign a variable to it, and use it to reference other plugins instead of repeating the requirement declaration for every other plugin.</li>
</ul><pre><code>var $ = require('gulp-load-plugins')();</code></pre><pre><code>// Example for gulp-concat.pipe($.concat('main.js'))</code></pre>
<ul>
<li><a href="http://www.browsersync.io/docs/gulp/" rel="noopener">browsersync</a><br>page refresh at any change on every device connected to the same URL (localhost or LAN)</li>
<li><a href="https://www.sitespeed.io" rel="noopener">sitespeed</a><br>my favourite tool for performance testing</li>
<li><a href="https://github.com/giakki/uncss" rel="noopener">uncss</a><br>are you using a CSS framework like Bootstrap for a landing page?<br>You NEED this.</li>
</ul>
<h4 id="what-how-do-i-update-gulp-plugins-you-ask">What? How do I update Gulp plugins, you ask?</h4><pre><code>$ npm install -g npm-check-updates</code></pre><pre><code>$ npm-check-updates -u</code></pre><pre><code>$ rm -fr node_modules</code></pre><pre><code>$ npm install</code></pre>
<blockquote>Basically this installs <strong>npm-check-updates</strong> globally, runs it against your package.json and updates the dependency versions.<br>Then you just delete the node modules folder and re-install.</blockquote>
<blockquote>from: <a href="https://stackoverflow.com/questions/27024431/updating-gulp-plugins" rel="noopener">https://stackoverflow.com/questions/27024431/updating-gulp-plugins</a></blockquote>
<p>Note: As a general rule, and as a last resort, we better <strong>clean</strong> the npm cache with</p><pre><code>$ npm cache clean</code></pre>
<h4 id="that-s-all-folks-thank-you-for-reaching-this-point-"><em>That’s all, folks! Thank you for reaching this point!</em></h4>
<h4 id="i-hope-that-i-kept-you-interested-enough-to-check-some-of-the-links-that-stuffed-this-article-they-re-there-because-i-wanted-to-show-my-support-for-all-the-great-work-that-fellow-developers-are-doing-for-the-community-"><em>I hope that I kept you interested enough to check some of the links that stuffed this article. They’re there because I wanted to show my support for all the great work that fellow developers are doing for the community.</em></h4>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
