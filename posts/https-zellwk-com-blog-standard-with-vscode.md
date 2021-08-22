---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9ca207740569d1a4ca5214.jpg"
tags: [Vscode]
description: I use Visual Studio Code as my text editor. When I write Java
author: "Milad E. Fahmy"
title: "How to Use Standard with VSCode"
created: "2021-08-15T19:33:34+02:00"
modified: "2021-08-15T19:33:34+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-vscode tag-javascript ">
<header class="post-full-header">
<h1 class="post-full-title">How to Use Standard with VSCode</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9ca207740569d1a4ca5214.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9ca207740569d1a4ca5214.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9ca207740569d1a4ca5214.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9ca207740569d1a4ca5214.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9ca207740569d1a4ca5214.jpg" alt="How to Use Standard with VSCode">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>I use <a href="https://code.visualstudio.com/">Visual Studio Code</a> as my text editor. When I write JavaScript, I follow <a href="https://standardjs.com">JavaScript Standard Style</a>.<br><br>There's an easy way to integrate Standard in VS Code—with the<a href="https://marketplace.visualstudio.com/items?itemName=chenxsan.vscode-standardjs"> vscode-standardjs </a>plugin. I made a <a href="https://youtu.be/Hv8FgxJyI9Y">video</a> for this some time ago if you're interested in setting it up.<br><br>But, if you follow the instructions in the video (or on vscode-standardjs's readme file), you'll come to notice there's one small detail that needs to be ironed out.<br><br>Try writing a <code>function</code> the old way, and save it repeatedly. VS code will toggle between having and not having a space before the left-parenthesis of the function.</p>
<figure><img src="https://zellwk.com/images/2019/vscode-standard/functions.gif" alt="VS code toggles between having and not having a space before '('."></figure>
<p>You get the same problem when you write methods with the ES6 method shorthands:</p>
<figure><img src="https://zellwk.com/images/2019/vscode-standard/methods.gif" alt="Same problem happens when you create methods with ES6 method shorthands."></figure>
<p>There's a quick way to fix this issue. What you need to do is set <code>javascript.format.enable</code> to <code>false</code>. This disables VS Code's default Javascript formatter (and lets vscode-standandjs does the formatting work).</p>
<p>So the minimum configuration you need to get Standard and VS Code to work together is:</p><pre><code>{
// Prevents VS Code from formatting JavaScript with the default linter
"javascript.format.enable": false,
// Prevents VS Code linting JavaScript with the default linter
"javascript.validate.enable": false,
// Lints with Standard JS
"standard.enable": true,
// Format files with Standard whenever you save the file
"standard.autoFixOnSave": true,
// Files to validate with Standard JS
"standard.validate": [
"javascript",
"javascriptreact"
]
}
</code></pre>
<p></p>
<hr>
<p><br><em>This article was originally posted on <a href="https://zellwk.com/blog/standard-with-vscode">my blog</a>.</em><br><em>Sign up for my<a href="https://zellwk.com/"> newsletter</a> if you want more articles to help you become a better frontend developer.</em></p>
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
