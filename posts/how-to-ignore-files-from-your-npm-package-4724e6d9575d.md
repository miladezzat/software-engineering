---
card: "https://cdn-media-1.freecodecamp.org/images/1*F6R34rqTupBQxrVe7GS4fw.jpeg"
tags: [NPM]
description: "You can decide what files people get when they download your "
author: "Milad E. Fahmy"
title: "How to ignore files from your npm package"
created: "2021-08-16T10:06:36+02:00"
modified: "2021-08-16T10:06:36+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-npm tag-tech tag-productivity tag-programming tag-web-development ">
<header class="post-full-header">
<h1 class="post-full-title">How to ignore files from your npm package</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*F6R34rqTupBQxrVe7GS4fw.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*F6R34rqTupBQxrVe7GS4fw.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*F6R34rqTupBQxrVe7GS4fw.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*F6R34rqTupBQxrVe7GS4fw.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*F6R34rqTupBQxrVe7GS4fw.jpeg" alt="How to ignore files from your npm package">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>You can decide what files people get when they download your npm package in three ways:</p><ol><li>With the <code>.gitignore</code> file</li><li>With the <code>.npmignore</code> file</li><li>With the <code>files</code> property</li></ol><p>We’ll look at each method and discuss which methods you should (or shouldn’t) be using.</p><h3 id="excluding-files-with-gitignore">Excluding files with gitignore</h3><p>First, npm will check your repository for a <code>.gitignore</code> file. If there is a <code>.gitignore</code> file, npm will ignore files according to what’s listed in the <code>.gitignore</code> file.</p><p>This is the most common way package authors prevent people from downloading extra files.</p><p>Let’s go through a simple example. Say you have the following directory structure.</p><pre><code>- project-name/   |- index.js   |- package.json   |- node_modules/</code></pre><p>Let’s say you don’t want people to download the <code>node_modules</code> folder. You also don’t want to save the <code>node_modules</code> in the Git repository.</p><p>What you’ll do is create a <code>.gitignore</code> file.</p><pre><code># .gitignore node_modules</code></pre><p>In this case, both Git and npm ignore the <code>node_modules</code> folder.</p><h3 id="blacklisting-files-with-npmignore">Blacklisting files with npmignore</h3><p>A second way is to blacklist files with a <code>.npmignore</code> file. The <code>.npmignore</code> file works the same way as a <code>.gitignore</code> file. If a file is listed in the <code>.npmignore</code> file, the file will be excluded from the package.</p><p><strong>Important note:</strong> If you have a <code>.npmignore</code> file, npm will use the <code>.npmignore</code> file. <strong>npm will ignore the <code>.gitignore</code> file</strong> altogether. (Many developers mistakenly believe npm will use both <code>.npmignore</code> and <code>.gitignore</code> files. Don’t make the same mistake!)</p><p>You can use this method if you want to exclude files from the package but still keep them in the Git repository.</p><p>Let’s walk through another example. Let’s say you’ve written tests for your package and you put them all in a <code>tests</code> folder. This is your directory structure:</p><pre><code>- project-name/  |- index.js |- package.json |- node_modules/ |- tests/</code></pre><p>You want to exclude <code>node_modules</code> from both your Git repository and your package.</p><p>You want to include <code>tests</code> in your Git repository, but exclude it from the package.</p><p>If you opt for the <code>npmignore</code> file method, you can write these in your <code>.gitignore</code> and <code>.npmignore</code> files:</p><pre><code># .gitignore node_modules</code></pre><pre><code># .npmignore node_modules tests</code></pre><h3 id="whitelisting-files-with-the-files-property">Whitelisting files with the files property</h3><p>A third method is to <strong>whitelist</strong> files you want to be <strong>included</strong> in the <code>package.json</code> file, under the <code>files</code> property.</p><p>Note: npm will prioritize this method over other methods mentioned above. This is the easiest method to limit what files others download.</p><p>This approach is pretty simple. What you need is to create a <code>files</code> property in the <code>package.json</code> file. Then, provide a list of files you’d like to include.</p><p>Here’s an example:</p><pre><code>{   "files": [      "index.js"   ] }</code></pre><p>Note: Some files, like <code>package.json</code>, are <a href="https://docs.npmjs.com/files/package.json" rel="noopener">always included</a> in a package. You don’t have to write these files in the <code>files</code> property.</p><h3 id="which-method-to-use">Which method to use?</h3><p>All three methods work. Pick the one you’re most comfortable with. For simple projects, the <code>.gitignore</code> file method should suffice.</p><p>If your project is more advanced, you might want to blacklist files with <code>.npmignore</code> or whitelist files with the <code>files</code> property. Pick one. There’s no need for both.</p><h3 id="a-quick-tip">A quick tip</h3><p>You can use <code>npm pack</code> to generate a package. This package includes files other people will get.</p><pre><code>npm pack</code></pre><p>Try it!</p><p>Thanks for reading. Did this article help you out? If it did, I hope you consider <a href="https://twitter.com/share?text=How%20to%20ignore%20files%20from%20your%20npm%20package%20by%20@zellwk%20?%20&amp;url=https://zellwk.com/blog/ignoring-files-from-npm-package/" rel="noopener">sharing it</a>. You might help someone else out. Thanks so much!</p><p>This article was originally posted on <a href="https://zellwk.com/blog/ignoring-files-from-npm-package/" rel="noopener"><em>my blog</em></a><em>.</em><br>Sign up for my<a href="https://zellwk.com/" rel="noopener"> newsletter</a> if you want more articles to help you become a better front-end developer.</p>
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
