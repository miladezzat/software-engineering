---
card: "https://cdn-media-1.freecodecamp.org/images/1*yu7AYHjvkRAdyXDuCvIugA.jpeg"
tags: [JavaScript]
description: "A single misplaced comma in a single JSON file can wreck your"
author: "Milad E. Fahmy"
title: "How to stop errors before they ever hit your codebase with Travis CI and ESLint"
created: "2021-08-16T11:51:16+02:00"
modified: "2021-08-16T11:51:16+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-web-development tag-technology tag-startup tag-productivity ">
<header class="post-full-header">
<h1 class="post-full-title">How to stop errors before they ever hit your codebase with Travis CI and ESLint</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*yu7AYHjvkRAdyXDuCvIugA.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*yu7AYHjvkRAdyXDuCvIugA.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*yu7AYHjvkRAdyXDuCvIugA.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*yu7AYHjvkRAdyXDuCvIugA.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*yu7AYHjvkRAdyXDuCvIugA.jpeg" alt="How to stop errors before they ever hit your codebase with Travis CI and ESLint">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
It only covers the most common items, and tries to guess sensible defaults.
See `npm help json` for definitive documentation on these fields
and exactly what they do.
Use `npm install &lt;pkg&gt;` afterwards to install a package and
save it as a dependency in the package.json file.
Press ^C at any time to quit.
package name: (how-to-contribute-to-open-source)
version: (1.0.0)
description:
entry point: (index.js)
test command:
git repository: (https://github.com/FreeCodeCamp/how-to-contribute-to-open-source.git)
keywords:
author:
license: (ISC)
About to write to /Users/michaelq/web/how-to-contribute-to-open-source/package.json:
{
"name": "how-to-contribute-to-open-source",
"version": "1.0.0",
"description": "This is a list of resources for people who are new to contributing to open source.",
"main": "index.js",
"scripts": {
"test": "echo \"Error: no test specified\" &amp;&amp; exit 1"
},
"repository": {
"type": "git",
"url": "git+https://github.com/FreeCodeCamp/how-to-contribute-to-open-source.git"
},
"author": "",
"license": "BSD-3-Clause",
"bugs": {
"url": "https://github.com/FreeCodeCamp/how-to-contribute-to-open-source/issues"
},
"homepage": "https://github.com/FreeCodeCamp/how-to-contribute-to-open-source#readme"
}
Is this ok? (yes) </code></pre><p>You now have a package.json file in your repository.</p><h3 id="step-5-install-eslint-and-your-linting-packages">Step #5: Install ESLint and your linting packages</h3><p>Depending on what types of files are in your repository, you can install a variety of different linting packages. The repository I am working on is <a href="https://github.com/freeCodeCamp/how-to-contribute-to-open-source" rel="noopener">How to Contribute to Open Source</a> (give it a ⭐️, ?).</p><p>The only files it currently uses are Markdown files, but we’ll inevitably add JSON at some point. So I included both the Markdown and JSON ESLint packages.</p><p>Here’s the command I ran in my terminal to install all of these using npm:</p><pre><code>npm install --save-dev eslint eslint-plugin-json eslint-plugin-markdown</code></pre><p>Note that the <code>--save-dev</code> part will add these packages to your repository’s package.json file.</p><h3 id="step-6-create-and-configure-your-eslintrc-file">Step #6: Create and configure your .eslintrc file</h3><p>In your terminal, type:</p><pre><code>touch .eslintrc</code></pre><p>Then open it with your favorite code editor. Here’s what mine looks like for JSON and Markdown:</p><pre><code class="language-json">{
"plugins": [
"json",
"markdown"
]
}</code></pre><h3 id="step-7-create-and-configure-your-travis-yml-file">Step #7: Create and configure your .travis.yml file</h3><p>In your terminal, type:</p><pre><code>touch .travis.yml</code></pre><p>Then open it with your favorite code editor. Here’s what mine looks like:</p><pre><code class="language-yml">language: node_js
node_js:
- '6'
before_install: if [[ `npm -v` != 3* ]]; then npm i -g npm@3; fi
cache:
directories:
- node_modules
sudo: false</code></pre><h3 id="step-8-update-your-package-json-file">Step #8: Update your package.json file</h3><p>In Step #4, your <code>npm initialize</code> command created a package.json file. When you did so, npm added the following line to the <code>“scripts”</code> object by default:</p><pre><code>"echo \"Error: no test specified\" &amp;&amp; exit 1"</code></pre><p>This line will cause Travis CI’s build to fail. So let’s replace it with something more meaningful.</p><p>Here’s what my package.json file looks like after I’ve replaced that line with three new scripts:</p><pre><code class="language-json">{
"name": "how-to-contribute-to-open-source",
"version": "1.0.0",
"description": "This is a list of resources for people who are new to contributing to open source.",
"main": "index.js",
"dependencies": {},
"devDependencies": {
"eslint": "^3.19.0",
"eslint-plugin-json": "^1.2.0",
"eslint-plugin-markdown": "^1.0.0-beta.6"
},
"scripts": {
"lint": "eslint . --ext .json --ext .md",
"pretest": "npm run lint",
"test": "echo \"No tests\""
},
"repository": {
"type": "git",
"url": "git+https://github.com/FreeCodeCamp/how-to-contribute-to-open-source.git"
},
"author": "",
"license": "BSD-3-Clause",
"bugs": {
"url": "https://github.com/FreeCodeCamp/how-to-contribute-to-open-source/issues"
},
"homepage": "https://github.com/FreeCodeCamp/how-to-contribute-to-open-source#readme"
}</code></pre><p>Note that there are two ways that Travis CI can runs tests. The default is using <code>npm test</code>. But the other way is to use it within the <code>package.json</code> file. You can read more about this <a href="https://docs.travis-ci.com/user/languages/javascript-with-nodejs/#Default-Test-Script" rel="noopener">here</a>.</p><p>Also note that in your <code>package.json</code> file, you can define scripts that you want npm to run first before it runs other scripts by adding a new script with the <code>pre</code> prefix, like we did here with <code>pretest</code>, which runs before <code>test</code>.</p><h3 id="step-9-stage-commit-then-push">Step #9: Stage, commit, then push</h3><p>In your terminal, stage your new files:</p><pre><code>git add .gitignore
git add .travis.yml
git add .eslintrc
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
