---
card: "/images/default.jpg"
tags: [JavaScript]
description: Linting makes our lives easier because it tells us what’s wro
author: "Milad E. Fahmy"
title: "Don’t just lint your code - fix it with Prettier"
created: "2021-08-15T19:32:18+02:00"
modified: "2021-08-15T19:32:18+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-prettier tag-eslint tag-code-quality tag-code-review tag-clean-code tag-frontend tag-front-end tag-front-end-development tag-reactjs tag-js ">
<header class="post-full-header">
<h1 class="post-full-title">Don’t just lint your code - fix it with Prettier</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2019/11/formatting-1.jpg 300w,
/news/content/images/size/w600/2019/11/formatting-1.jpg 600w,
/news/content/images/size/w1000/2019/11/formatting-1.jpg 1000w,
/news/content/images/size/w2000/2019/11/formatting-1.jpg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2019/11/formatting-1.jpg" alt="Don’t just lint your code - fix it with Prettier">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Linting makes our lives easier because it tells us what’s wrong with our code. But how can we avoid doing the actual work that goes into fixing it?</p>
<p><a href="/news/what-is-linting-and-how-can-it-save-you-time/">Previously I wrote about linting</a>, what it is, and how it makes your life easier. At the end, I actually included a way that you could automatically fix your code. So why am I writing this?</p>
<h2 id="what-do-you-mean-fix-it"><strong>What do you mean fix it?</strong></h2>
<p>Before we roll into it, let’s hit this quick. Linters are powerful and provide an easy way to scan your code for syntax errors that could lead to bugs. Or they can simply help keep a codebase clean, healthy, and consistent. When run, it will show all the issues and let you go through each one individually to fix them.</p>
<p>Taking that to the next level, some linters will actually allow you to pass in an argument to the command running the linter that allows it to fix it for you automagically. This means you don’t have to manually go through and make all of those little whitespace and semicolon (add them! ?) tweaks yourself!</p>
<figcaption>Ron Swanson happy</figcaption>
</figure>
<h2 id="so-what-more-can-i-do-to-fix-things"><strong>So what more can I do to fix things?</strong></h2>
<p>If you already use the fix option, thats a good start. But there are tools out there that have been developed specifically to tackle this problem beyond just a flag into your command. The one I’m going to cover is Prettier.</p>
<h2 id="what-is-prettier"><strong>What is Prettier?</strong></h2>
<p><a href="https://prettier.io/">Prettier</a> pegs itself as “an opinionated code formatter." It takes an input of your code and outputs it in a consistent format stripping any of the original code style. It actually converts your code to a <a href="https://github.com/benjamn/recast">syntax tree</a>, then rewrites it using the styles and rules you and Prettier provide together via your ESLint config and Prettier’s default rules.</p>
<p>You can easily use Prettier alone just to format your code, which works just fine. But if you combine this with an underlying ESLint process, you get both a powerful linter and a powerful fixer. I’m going to show you how to make those work together.</p>
<figcaption>Voltron</figcaption>
</figure>
<h2 id="getting-started-with-prettier"><strong>Getting started with Prettier</strong></h2>
<p>For this walkthrough, I’m going to assume that you have ESLint set up and configured in an application. Particularly, I’m going to pick up where I left off in my previous walkthrough where <a href="/news/what-is-linting-and-how-can-it-save-you-time/">we installed ESLint to a React application</a>.</p>
<p>Additionally of note, Prettier tells us right from the start that it's an opinionated code formatter. You should expect that it will format your code in a consistent way, but maybe a different way than you currently have it configured. But don’t fret! You can tweak this configuration.</p>
<p>So what are we starting off with? We already:</p>
<ul>
<li>Have installed <a href="https://github.com/eslint/eslint">ESLint</a></li>
<li>Have added <a href="https://github.com/babel/babel-eslint">Babel</a> as our parser</li>
<li>Have added a <a href="https://github.com/yannickcr/eslint-plugin-react">plugin</a> that includes React configurations</li>
</ul>
<p>Next, let’s get started by installing a few packages:</p><pre><code class="language-shell">yarn add prettier prettier-eslint prettier-eslint-cli -D</code></pre>
<p><em>Note: the command above is similar to using <code>npm</code>. If your project doesn't use <code>yarn</code>, swap out to <code>npm</code> as appropriate.</em></p>
<p>Above, we’re installing:</p>
<ul>
<li><a href="https://github.com/prettier/prettier">prettier</a>: core Prettier package and engine</li>
<li><a href="https://github.com/prettier/prettier-eslint">prettier-lint</a>: passes the Prettier result to ESLint to fix using your ESLint config</li>
<li><a href="https://github.com/prettier/prettier-eslint-cli">prettier-eslint-cli</a>: helps Prettier and ESLint work together on various files across your project</li>
</ul>
<p>And we’re installing them as a dev dependency, as we don’t need it outside development.</p>
<h2 id="configuring-your-new-formatter"><strong>Configuring your new formatter</strong></h2>
<p>Now that our packages are installed, we can set up <code>yarn</code> to run this command for us.</p>
<p>Previously, we set up a <code>lint</code> script to look like this in our <code>package.json</code>:</p><pre><code class="language-json">"scripts": {
...
"lint": "eslint . --ext .js"
...
}</code></pre>
<p>We’re going to leave that as it is, but we’ll do something similar and create a new script right next to it called <code>format</code> for our formatter Prettier:</p><pre><code class="language-json">"scripts": {
...
"format": "prettier-eslint --eslint-config-path ./.eslintrc.js --write '**/*.js'",
"lint": "eslint . --ext .js"
...
}</code></pre>
<p>So what’s going on there? We’re:</p>
<ul>
<li>Adding a new script called <code>format</code>, that we can run as <code>yarn format</code></li>
<li>We’re utilizing our <code>prettier-eslint-cli</code> package to run the formatting for us</li>
<li>We’re passing in our ESLint config located next to our <code>package.json</code> in the root of the project (change this if it’s in a different location)</li>
<li>And finally, we’re telling prettier to write all files matching <code>**/*.js</code>, or any JS files it finds recursively through our project</li>
</ul>
<p>The beauty here is that we're passing in our ESLint config to Prettier. This means we only have to maintain 1 config for both tools, but we still leverage the linting power of ESLint along with the formatting power of Prettier.</p>
<h2 id="run-your-formatter-"><strong>Run your formatter!</strong></h2>
<p>Now that we’re all set up, let’s run it! Run this following:</p><pre><code>yarn format
</code></pre>
<p>and immediately, we see that it works:</p>
<figcaption>Successfully running Prettier</figcaption>
</figure>
<h2 id="hey-my-code-looks-different-"><strong>Hey, my code looks different!</strong></h2>
<figcaption>Angry mob with pitchforks</figcaption>
</figure>
<p>As I mentioned earlier, Prettier tells us straight up, it’s an opinionated formatter. It ships with its own rules, sort of like its own ESLint config, so it will go through and make those changes as well.</p>
<p>Don’t abandon your code! Instead, you can review the changes, see if maybe it makes sense to keep it that way (it will be very consistent) or you can update your ESLint config (<code>.eslintrc.js</code>) to overwrite the rules you don’t like. This is also a good way to maybe learn some new things that you might not have expected to get caught before.</p>
<h2 id="so-where-does-this-leave-us"><strong>So where does this leave us?</strong></h2>
<p>If you’ve followed along so far, we now have two commands:</p>
<ul>
<li><code>lint</code>: which will check your code for you and tell you what's wrong</li>
<li><code>format</code>: will automatically try to fix the problems for you</li>
</ul>
<p>When using these in practice, your best bet is to always run <code>format</code> first to let it try to automatically fix anything it can. Then immediately run <code>lint</code> to catch anything Prettier wasn’t able to fix automatically.</p>
<h2 id="what-s-next"><strong>What’s next?</strong></h2>
<p>Now that we can format our code automatically, we should be able to fix our code automatically!</p>
<figcaption>Eddie from Fresh Off the Boat's mind blown</figcaption>
</figure>
<p>Next time we’ll take this a step further and set up a <code>git</code> hook that will allow this to run before you commit. This means you won't ever have to worry about forgetting to run this again!</p>
<p style="margin: 0;">
<a href="https://twitter.com/colbyfayock" style="display: block;">
</a>
</p>
<ul style="display:flex;justify-content:center;list-style:none;padding:0;margin: .5em 0 0;font-size: .8em;">
<li style="margin: 0 .6em;padding: 0;">
<a href="https://twitter.com/colbyfayock" style="text-decoration: none;">? Follow Me On Twitter</a>
</li>
<li style="margin: 0 .6em;padding: 0;">
<a href="https://youtube.com/colbyfayock" style="text-decoration: none;">?️ Subscribe To My Youtube</a>
</li>
<li style="margin: 0 .6em;padding: 0;">
<a href="https://www.colbyfayock.com/newsletter/" style="text-decoration: none;">✉️ Sign Up For My Newsletter</a>
</li>
</ul>
</div>
<p><em>Originally published at <a href="https://www.colbyfayock.com/2019/11/dont-just-lint-your-code-fix-it-with-prettier/">https://www.colbyfayock.com/2019/11/dont-just-lint-your-code-fix-it-with-prettier/</a></em></p>
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
