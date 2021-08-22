---
card: "https://cdn-media-1.freecodecamp.org/images/1*NIQACxrWjnCUOLogiOrW5Q.png"
tags: [JavaScript]
description: by Karan Thakkar
author: "Milad E. Fahmy"
title: "How to use Babel macros with React Native"
created: "2021-08-15T19:44:54+02:00"
modified: "2021-08-15T19:44:54+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-babel tag-tech tag-react tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">How to use Babel macros with React Native</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*NIQACxrWjnCUOLogiOrW5Q.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*NIQACxrWjnCUOLogiOrW5Q.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*NIQACxrWjnCUOLogiOrW5Q.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*NIQACxrWjnCUOLogiOrW5Q.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*NIQACxrWjnCUOLogiOrW5Q.png" alt="How to use Babel macros with React Native">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Karan Thakkar</p>
<h1 id="how-to-use-babel-macros-with-react-native">How to use Babel macros with React Native</h1>
<h4 id="a-practical-use-case-for-solving-an-i18n-problem-using-codegen-macro">A practical use case for solving an i18n problem using codegen.macro</h4>
<figcaption>Background Photo by <a href="https://unsplash.com/photos/6PF6DaiWz48" rel="noopener" target="_blank" title="">Rayi Christian Wicaksono</a> on <a href="https://unsplash.com" rel="noopener" target="_blank" title="">Unsplash</a></figcaption>
</figure>
<p>If you follow <a href="undefined" rel="noopener">Kent C. Dodds</a> or <a href="undefined" rel="noopener">Sunil Pai</a> on Twitter, you may have read tweets every once in a while about babel macros. So did I. But it was only yesterday that I finally understood what the hype is all about. <strong>And it is glorious!</strong></p>
<p>So, coming to the problem: I wanted to add some utility to do locale-based number formatting in React Native. Since there is no consistent support for the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl" rel="noopener">Internationalization API</a> in React Native, I used a polyfill for it: <a href="https://github.com/andyearnshaw/Intl.js" rel="noopener">https://github.com/andyearnshaw/Intl.js</a>. Now, along with the polyfill, I also needed to import all the supporting locale files. There are two options here:</p>
<ol>
<li><strong>Load all the locales</strong>: This is straightforward, as I can just import one file. This should usually be avoided, since it can unnecessarily bloat your bundle size if you just need to support some locales.</li>
</ol>
<figcaption>Load all locales provided by Intl.js</figcaption>
</figure>
<p>2. <strong>Load only necessary locales</strong>: With this, I only load the locales that my app supports.</p>
<figcaption>Load only the necessary locales from Intl.js</figcaption>
</figure>
<p>For example, if the app supports 40 locales, I have to manually end up writing 40 imports for each locale. It becomes much harder and more tedious to do this as the list of locales you support increases.</p>
<p>I wanted to automate this in a way that required no manual changes. This is especially useful for us as we have background jobs running on the CI that automatically update our locales file whenever we add support for a new language.</p>
<p>How can I dynamically import multiple files but also allow the React Native packager to have all the file paths at compile time? <a href="https://github.com/kentcdodds/babel-plugin-macros" rel="noopener"><strong>babel-plugin-macros</strong></a><strong> </strong>and <a href="https://github.com/kentcdodds/codegen.macro" rel="noopener"><strong>codegen.macro</strong></a> ?</p>
<h3 id="what-are-these-babel-things">What are these…babel things?</h3>
<p><a href="https://babeljs.io/blog/2017/09/11/zero-config-with-babel-macros" rel="noopener">This</a> blog post by <a href="undefined" rel="noopener">Kent C. Dodds</a> perfectly describes what <a href="https://github.com/kentcdodds/babel-plugin-macros" rel="noopener"><strong>babel-plugin-macros</strong></a><strong> </strong>is:</p>
<blockquote>It’s a “new” approach to code transformation. It enables you to have zero-config, importable code transformations.</blockquote>
<p><a href="https://github.com/kentcdodds/codegen.macro" rel="noopener"><strong>codegen.macro</strong></a> is one such transformation that you can use to “generate code” at build time.</p>
<h3 id="how-do-you-set-it-up">How do you set it up?</h3>
<p>React Native allows you to configure your own babel settings. You can create our own “.babelrc” file at the root of your project. To make sure that you use the default babel configuration that comes with React Native, install <a href="https://github.com/facebook/react-native/tree/master/babel-preset" rel="noopener"><strong>babel-preset-react-native</strong></a>.</p>
<p>On top of this you have to install another module: <a href="https://github.com/kentcdodds/codegen.macro" rel="noopener"><strong>codegen.macro</strong></a>. The codegen plugin uses <a href="https://github.com/kentcdodds/babel-plugin-macros" rel="noopener"><strong>babel-plugin-macros</strong></a><strong> </strong>under the hood to do its job. We’ll see in a bit what that is.</p>
<figcaption>⬆️️This is how your <strong>.babelrc</strong> file should look</figcaption>
</figure>
<h3 id="what-does-codegen-macro-do">What does codegen.macro do?</h3>
<p>It takes a piece of code, executes it, and replaces itself with the <code>export-ed</code> string. It will make a lot of sense once you see the example below. Given a list of locales and a codegen macro, it generates a list of imports at build time!</p>
<figcaption>LEFT: codegen macro to build imports for all locales · RIGHT: Supported locales list</figcaption>
</figure>
<figcaption>Output from babel after transpilation</figcaption>
</figure>
<h3 id="but-what-if-i-need-syntax-highlighting">But, what if I need syntax highlighting?</h3>
<p>Since we’re writing all our code in a template string, it is really hard to get proper syntax highlighting. You might end up spending a lot of time trying to figure out why your macro gives an error while transpiling.</p>
<p>Thankfully, babel macros support a <a href="https://github.com/kentcdodds/babel-plugin-codegen#usage" rel="noopener">few different ways</a> to use them. My favorite is using a <strong>codegen.require</strong>. With this, you can move the body of your macro into a separate file and require it wherever you want, as shown below:</p>
<figcaption>Import the codegen using a special <strong>codegen.require</strong> call</figcaption>
</figure>
<h4 id="advantages-of-using-this-syntax-">Advantages of using this syntax:</h4>
<ul>
<li>well, syntax highlighting ??‍</li>
<li>no need to escape any escape sequences you need to use like <strong>\n ?</strong></li>
</ul>
<ul>
<li>use template literals inside your codegen ?</li>
</ul>
<h3 id="note-upgrading-react-native">NOTE: upgrading React Native</h3>
<p>If you choose to override the babel config, whenever you upgrade react-native, you must also bump the version of babel-preset-react-native to match the one being used inside that react-native version.</p>
<p>That’s it folks! You’ve setup babel macros with React Native ?? Check out th<a href="https://github.com/kentcdodds/babel-plugin-macros/blob/master/other/docs/macros.md" rel="noopener">ese other available macros i</a>f you wanna try out something different.</p>
<p>PS: Thanks to <a href="undefined" rel="noopener">Narendra N Shetty</a>, <a href="undefined" rel="noopener">Siddharth Kshetrapal</a> and <a href="undefined" rel="noopener">Kent C. Dodds</a> for reviewing the draft and helping shape it better ?</p>
<p>Hi! ?‍ I’m K<a href="https://twitter.com/geekykaran" rel="noopener">aran Thakkar.</a> I work on React Native infrastructure at S<a href="undefined" rel="noopener">kyscanner Engineering.</a> Previously, I lead the web team at C<a href="undefined" rel="noopener">rowdfire.</a> I like trying out new technologies in my spare time and I’ve built T<a href="https://karanjthakkar.com/projects/tweetify" rel="noopener">weetify </a>(using React Native) and S<a href="https://showmyprs.com" rel="noopener">how My PR’s </a>(using Golang).</p>
<p>Other articles written by me are:</p>
<ul>
<li><a href="https://medium.freecodecamp.org/an-illustrated-guide-for-setting-up-your-website-using-github-cloudflare-5a7a11ca9465" rel="noopener">An illustrated guide for setting up your website using GitHub and Cloudflare</a></li>
<li><a href="https://medium.freecodecamp.org/going-https-on-amazon-ec2-ubuntu-14-04-with-lets-encrypt-certbot-on-nginx-696770649e76" rel="noopener">Using the Let’s Encrypt Certbot to get HTTPS on your Amazon EC2 NGINX box</a></li>
</ul>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
