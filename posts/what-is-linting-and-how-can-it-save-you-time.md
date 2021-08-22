---
card: "/images/default.jpg"
tags: [JavaScript]
description: One of the biggest challenges in software development is time
author: "Milad E. Fahmy"
title: "What is linting and how can it save you time?"
created: "2021-08-15T19:32:32+02:00"
modified: "2021-08-15T19:32:32+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-eslint tag-code-quality tag-code-review tag-clean-code tag-frontend tag-front-end tag-front-end-development tag-reactjs tag-js tag-gatsbyjs ">
<header class="post-full-header">
<h1 class="post-full-title">What is linting and how can it save you time?</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2019/10/linting.jpg 300w,
/news/content/images/size/w600/2019/10/linting.jpg 600w,
/news/content/images/size/w1000/2019/10/linting.jpg 1000w,
/news/content/images/size/w2000/2019/10/linting.jpg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2019/10/linting.jpg" alt="What is linting and how can it save you time?">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>One of the biggest challenges in software development is time. It’s something we can’t easily get more of, but linting can help us make the most out of the time we have.</p>
<h2 id="so-what-is-linting">So what is linting?</h2>
<p><strong>lint</strong>, or a <strong>linter</strong>, is a tool that analyzes source code to flag programming errors, bugs, stylistic errors, and suspicious constructs. <a href="https://en.wikipedia.org/wiki/Lint(software)">https://en.wikipedia.org/wiki/Lint(software)</a></p>
<p>Simply put, a linter is a tool that programmatically scans your code with the goal of finding issues that can lead to bugs or inconsistencies with code health and style. Some can even help fix them for you!</p>
<figcaption>Michael Scott - Tell me more</figcaption>
</figure>
<p>Take for instance, the following example:</p><pre><code class="language-js">const test = 'I am a test';
console.log(`Test: ${test}`);
const test = 'Another one.';</code></pre>
<p>We’re declaring the constant <code>test</code> twice, which our javascript engine won’t be happy about. With the proper linter settings and watch configuration, instead of getting caught later as an error when the code runs, you’ll immediately get an error through your linter running in the background:</p><pre><code>  10:9  error  Parsing error: Identifier 'test' has already been declared
8 |   const test = 'I am a test';
9 |   console.log(`Test: ${2}`);
&gt; 10 |   const test = 'Another one.';
|         ^</code></pre>
<p>It might be pretty obvious that you have 2 of the same <code>const</code> declarations given this is only 3 lines, but in a more complex application, this can save tons of time having to hunt down a pesky bug that’s not always obvious.</p>
<h2 id="what-all-can-linting-help-with"><strong>What all can linting help with?</strong></h2>
<p><a href="https://eslint.org/docs/rules/">Lots of things</a>, including but not limited to:</p>
<ul>
<li>Flagging bugs in your code from syntax errors</li>
<li>Giving you warnings when code may not be intuitive</li>
<li>Providing suggestions for common best practices</li>
<li>Keeping track of TODO’s and FIXME’s</li>
<li>Keeping a consistent code style</li>
</ul>
<p>Most things you can think of probably already <a href="https://github.com/dustinspecker/awesome-eslint">exist in one form or another</a>, and if not, you can even <a href="https://gist.github.com/sindresorhus/1656c46f23545deff8cc713649dcff26">create custom rules</a> that fit your needs!</p>
<h2 id="how-is-this-actually-helping-or-why-should-i-care"><strong>How is this actually helping or why should I care?</strong></h2>
<p>Probably the biggest overlying theme of the list above is the fact that these issues will be called out immediately. No longer will these issues creep up on you in the middle of running your app or give someone anxiety during a code review. No longer will you and your reviewer endlessly fight passive aggressively through the comments about whether or not to include a semicolon at the end of JS statements (<a href="https://stackoverflow.com/a/444082">you should</a> ?).</p>
<figcaption>Grandma looking for a semicolon</figcaption>
</figure>
<p>All of those moments that stop you from being productive because of a silly syntax error or the micro-interactions you and your teammates have during a review take time. They add up and end up taking away the time you can spend fixing another bug or developing the next great feature of your product.</p>
<h2 id="so-how-do-i-actually-get-started"><strong>So how do I actually get started?</strong></h2>
<p>Even though there are linters for most, if not all, other mainstream languages, for the purpose of this post, I’m going to focus on Javascript. The same principles apply, but the tooling may be a bit different.</p>
<p>I’m going to run through how you can get set up for basic linting in a React app. You can easily follow along by spinning up your own React app or using my <a href="https://www.gatsbyjs.org/">Gatsby</a> starter: <a href="https://github.com/colbyfayock/gatsby-starter-sass#starting-from-scratch">https://github.com/colbyfayock/gatsby-starter-sass#starting-from-scratch</a></p>
<h3 id="your-linter"><strong>Your Linter</strong></h3>
<p>To get started, we first need a linter. <a href="https://trends.google.com/trends/explore?geo=US&amp;q=eslint,jshint,jslint">Probably the most popular</a> in the Javascript world is <a href="https://eslint.org/">ESLint</a>. Your linter will actually be the engine for defining rules and parsing your files to test against. ESLint is available as an <a href="https://www.npmjs.com/package/eslint">npm package</a> by itself and <a href="https://eslint.org/docs/user-guide/getting-started">once installed</a>, out of the box it allows you to set up a basic configuration file and hit the ground running with some command line tools.</p>
<p>Let’s first add our ESLint dependency:</p><pre><code>yarn add eslint -D</code></pre>
<p>We’re installing this as a <code>devDependency</code> (hence the <code>-D</code> flag), because this isn’t something our application needs to run. After it’s successfully installed, let’s add it to our <code>package.json</code> as a script:</p><pre><code class="language-json">...
"scripts": {
...
"lint": "eslint .  --ext .js"
...
},
...</code></pre>
<p>In the above, we’re running our linter on the entire project directory on any file that has an extension of <code>.js</code>. If you're working with a large project with many file types, maybe even some you don't want linted, you can <a href="https://eslint.org/docs/user-guide/command-line-interface">change that flag or be more specific</a> with other options.</p>
<p>To support ESLint, we’ll need to do one more thing. Let’s add a file at the root of our project (probably where your <code>package.json</code> is) called <code>.eslintrc.js</code> and make the contents of the file simply:</p><pre><code class="language-js">module.exports = {};</code></pre>
<p>Once you’re ready, you can run <code>yarn lint</code> and… get an error.</p>
<figcaption>Lint results - Import errors</figcaption>
</figure>
<p>This is okay, and expected in our project, so let’s move on.</p>
<h3 id="your-parser"><strong>Your Parser</strong></h3>
<p>A common tool in the chain for Javascript developers is <a href="https://babeljs.io/">Babel</a>, which allows you to write code with features that may not be supported in all browsers, such as using <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions">arrow functions</a>, that are available in <a href="http://es6-features.org/#Constants">ES6</a>, and other conventions like importing files via <code>import</code>.</p>
<p>The code you write may already run through Babel to work in a browser, but that doesn’t apply to ESLint by default, so ESLint allows you to specify a parser that allows the linting processing to look at the same code as your browser sees. In this case we’ll want to use <a href="https://github.com/babel/babel-eslint">Babel’s ESLint</a> parser that’s made available to us.</p>
<p>To set that up, we’ll want to first install our dependency:</p><pre><code>yarn add babel-eslint -D</code></pre>
<p>Typically if you're using <code>babel-eslint</code> you'll want to make sure <code>babel</code> is installed next to it, but in our case, Gatsby already uses <code>babel</code>, so we don’t necessarily need to add it. After that’s set up, we’ll want to update our <code>.eslintrc.js</code> config file with some new options:</p><pre><code class="language-js">module.exports = {
"env": {
"browser": true,
"node": true,
"es6": true
},
"parser": "babel-eslint"
};</code></pre>
<p>Here, we’re letting ESLint know that our environment will be run in node (Gatsby’s precompiling), inside the browser (the app), and it will use ES6. This helps ESLint know how to run your code. Additionally, we want to set up our parser to be <code>babel-eslint</code>.</p>
<p>Once we’re ready to go, run <code>yarn lint</code> again and… well nothing really happened.</p>
<figcaption>Lint results - Nothing happened</figcaption>
</figure>
<p>This is still expected, as we don’t have any rules set up!</p>
<h3 id="plugins-for-your-code"><strong>Plugins for your code</strong></h3>
<p>Writing a <a href="https://reactjs.org/">React</a> app? The Babel parser may help you transform your code, but you might have a hard time being productive, as ESLint needs to understand how it should work to lint your React files.</p>
<p>Part of the beauty of ESLint is that it allows you to <a href="https://eslint.org/docs/developer-guide/working-with-plugins">configure plugins</a> that have the opportunity to create and set rules for you. Luckily, along with our Babel parser above that does some of the heavy lifting, we have a <a href="https://github.com/yannickcr/eslint-plugin-react">React plugin</a> available that does just that and takes care of linting the JSX for us.</p>
<p>Let’s first install our dependency:</p><pre><code>yarn add eslint-plugin-react -D</code></pre>
<p>Further, let’s update our <code>.eslintrc.js</code> file again:</p><pre><code class="language-js">module.exports = {
"settings": {
"react": {
"version": "detect"
}
},
"env": {
"browser": true,
"node": true,
"es6": true
},
"plugins": [
"react"
],
"parser": "babel-eslint"
};</code></pre>
<p>What we’re adding here is a setting that automatically detects what React version you’re using, which is helpful to let your linting get parsed properly, and then set up our react plugin that we installed above.</p>
<p>For one last final time, we will run our <code>lint</code> script and get nothing:</p>
<figcaption>Lint results - Nothing happened</figcaption>
</figure>
<h3 id="rules-defined-by-others-s-opinions"><strong>Rules defined by others’s opinions</strong></h3>
<p>If you’re not really sure where to get started or just want to quickly get up and running, it’s recommend that you enable <a href="https://eslint.org/docs/rules/">ESLint’s own recommended rules</a>. Let’s add this to our <code>.eslintrc.js</code> config file:</p><pre><code class="language-js">module.exports = {
"settings": {
"react": {
"version": "detect"
}
},
"env": {
"browser": true,
"node": true,
"es6": true
},
"plugins": [
"react"
],
"extends": [
"eslint:recommended"
],
"parser": "babel-eslint"
};</code></pre>
<p>And let’s run our <code>yarn lint</code>.</p>
<p>Woah! This will immediately give you a lot errors, it seems like something’s wrong.</p>
<figcaption>Lint results - React errors</figcaption>
</figure>
<p>Since we’re running a React app, we also want to make sure our linter understands the rules it should follow, so let’s also add our React plugin to the <code>.eslintrc.js</code> config setup:</p><pre><code class="language-json">    "extends": [
"eslint:recommended",
"plugin:react/recommended"
],</code></pre>
<p>Now if you run <code>yarn lint</code>, you get something a little more logical.</p>
<figcaption>Lint results - Normal errors</figcaption>
</figure>
<p>If you’re following along, it looks like our starter app had a misplaced semicolon and a missing prop in our <code>propTypes</code> validation for <code>Layout.js</code>. Writing this helped me fix my own repo! ?</p>
<p>Going further, if those don’t seem to fit your needs, lots of developers and teams have published their own configurations that ESLint allows you to easily tap into.</p>
<p>Some popular ones include:</p>
<ul>
<li><a href="https://www.npmjs.com/package/eslint-config-airbnb">Airbnb’s config</a></li>
<li><a href="https://github.com/standard/eslint-config-semistandard">Semistandard</a></li>
<li><a href="https://github.com/google/eslint-config-google">Google’s JS Style Guide</a></li>
</ul>
<p>Not happy with the options available? You can even <a href="https://eslint.org/docs/6.0.0/developer-guide/shareable-configs">create and publish your own</a> to either layer on top of others as a starting point or give it a go from scratch.</p>
<h3 id="let-it-do-the-work-most-of-it-"><strong>Let it do the work (most of it)</strong></h3>
<p>You don’t think I’m going to make you fix all of those thing yourself do you? Well, you may have to fix some, but let’s try to get ESLint to fix some of it for us.</p>
<p>If you noticed after we ran the command above, ESLint gave us an extra message:</p>
<figcaption>Lint results - Option to fix</figcaption>
</figure>
<p>So let’s give it a try! Let’s run:</p><pre><code>yarn lint --fix</code></pre>
<p>And what do you know, it now only gives us 1 linting error.</p>
<figcaption>Lint results - 1 error</figcaption>
</figure>
<p>Turns out ESLint was able to fix our semicolon issue automatically, but we’ll still have to add <code>pageName</code> to our <code>Layout</code>’s <code>propTypes</code> manually, not too much of a lift.</p>
<p>Running one more time and finally nothing again! But this time because everything's looking good.</p>
<figcaption>Lint results - No errors</figcaption>
</figure>
<h2 id="go-forth-and-write-messy-code-"><strong>Go forth and write messy code!</strong></h2>
<figcaption>Bruce Almighty - Typing</figcaption>
</figure>
<p>Kidding ? The good news here, is now you can easily take a look at the general health of your codebase as well as hopefully fix most of it automatically. This is going to save a lot of headaches as you work with others on your team, and generally, it’s nice to have all of your code neat and tidy.</p>
<p>This post is just getting started. ESLint is a wide open book with tons of plugins and rules, and it’s not the only linting tool in the game. Play around and find what fits best for you and your team. The little time spent configuring it to your app will save you lots more time in the long run.</p>
<h2 id="other-linting-tools-to-check-out"><strong>Other linting tools to check out</strong></h2>
<ul>
<li><a href="https://jshint.com/">JSHint</a>: an alternative to ESLint</li>
<li><a href="https://github.com/stylelint/stylelint">Stylelint</a>: a linting tool for CSS and CSS-like syntaxes like <a href="https://sass-lang.com/">Sass</a></li>
<li><a href="https://github.com/dustinspecker/awesome-eslint">Awesome ESLint</a>: a simple list of awesome configs, parsers, plugins, and other tools to boost your ESLint game</li>
<li><a href="https://webhint.io/">Webhint</a>: linting tool for accessibility, speed, and more website best practices</li>
<li><a href="https://github.com/evcohen/eslint-plugin-jsx-a11y">A11y JSX Plugin</a>: ESLint plugin for checking accessibility rules on JSX elements</li>
</ul>
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
<p><em><em>Originally published </em>at <a href="https://www.colbyfayock.com/2019/10/what-is-linting-and-how-can-it-save-you-time">https://www.colbyfayock.com/2019/10/what-is-linting-and-how-can-it-save-you-time</a></em></p>
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
