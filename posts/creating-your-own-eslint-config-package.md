---
card: "/images/default.jpg"
tags: [Eslint]
description: ESLint is a powerful tool that helps you enforce consistent c
author: "Milad E. Fahmy"
title: "How to Create Your Own ESLint Config Package"
created: "2021-08-15T19:29:17+02:00"
modified: "2021-08-15T19:29:17+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-eslint tag-javascript tag-npm ">
<header class="post-full-header">
<h1 class="post-full-title">How to Create Your Own ESLint Config Package</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/06/susan-holt-simpson-2nSdQEd-Exc-unsplash.jpg 300w,
/news/content/images/size/w600/2020/06/susan-holt-simpson-2nSdQEd-Exc-unsplash.jpg 600w,
/news/content/images/size/w1000/2020/06/susan-holt-simpson-2nSdQEd-Exc-unsplash.jpg 1000w,
/news/content/images/size/w2000/2020/06/susan-holt-simpson-2nSdQEd-Exc-unsplash.jpg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/06/susan-holt-simpson-2nSdQEd-Exc-unsplash.jpg" alt="How to Create Your Own ESLint Config Package">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>ESLint is a powerful tool that helps you enforce consistent coding conventions and ensure quality in your JavaScript codebase. </p>
<p>Coding conventions are sometimes difficult to decide on, and having a tool that automates their enforcement helps avoid unnecessary discussions. Ensuring quality is also a welcome feature: linters are excellent tools for catching bugs, such as those related to variable scope.</p>
<p>ESLint is designed to be completely configurable, giving you the option of enabling/disabling each rule, or mixing the rules to match your needs. &nbsp;</p>
<p>With this in mind, the JavaScript community and companies who use JavaScript can extend the original ESLint config. There are <a href="https://www.npmjs.com/search?q=eslint-config">several examples</a> in the npm registry: <a href="https://www.npmjs.com/package/eslint-config-airbnb">eslint-config-airbnb</a> is one of the most well-known.</p>
<p>In your daily routine, you will probably combine more than one config, since there is no one-config-fits-all. This post will show how to create your own repository of configurations, giving you the option to centralize all your rule definitions.</p>
<h2 id="create-the-project">Create the project</h2>
<p>First you'll need to create a new folder and npm project. <a href="https://eslint.org/docs/developer-guide/shareable-configs">By convention</a>, the module name begins with <code>eslint-config-</code>, such as <code>eslint-config-test</code>.</p><pre><code class="language-bash">mkdir eslint-config-test
cd eslint-config-test
npm init
</code></pre>
<p>You will have a package.json file that will look like the following snippet:</p><pre><code class="language-json">{
"name": "eslint-config-test",
"version": "1.0.0",
"description": "",
"main": "index.js",
"scripts": {
"test": "echo \"Error: no test specified\" &amp;&amp; exit 1"
},
"author": "",
"license": "ISC"
}
</code></pre>
<p>Next, it's time to add your ESLint dependencies:</p><pre><code class="language-bash">npm install -D eslint eslint-config-airbnb eslint-config-prettier eslint-plugin-import eslint-plugin-jsx eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks prettier
</code></pre>
<p>The packages will change according to your needs. In this case, I work with React codebases and I use <a href="https://prettier.io/">Prettier</a> to format my code. The <a href="https://eslint.org/docs/developer-guide/shareable-configs#publishing-a-shareable-config">documentation</a> mentions that if your shareable config depends on a plugin, you should also specify it as a <code>peerDependency</code>.</p>
<p>Next, I will create a <code>.eslintrc.js</code> with my configuration - this is similar to what you already do in your apps:</p><pre><code class="language-js">module.exports = {
extends: [
'airbnb',
'eslint:recommended',
'plugin:import/errors',
'plugin:react/recommended',
'plugin:jsx-a11y/recommended',
'plugin:prettier/recommended',
'prettier/react',
],
plugins: [
'react-hooks',
],
rules: {
},
};
</code></pre>
<p>The <code>rules</code> object stores any rule that you want to override. In the snippet above <code>rules</code> is empty but feel free to check <a href="https://github.com/leonardofaria/eslint-config-leozera/blob/master/.eslintrc.js#L14:L58">my overrides</a>. In the Airbnb/JavaScript repository you can <a href="https://github.com/airbnb/javascript/issues/1089">find a list of overridden rules</a> by the community.</p>
<h3 id="create-custom-rules">Create custom rules</h3>
<p>Time to create a <code>.prettierrc</code> with your custom rules - this is a tricky part since Prettier and ESLint can conflict on a few rules:</p><pre><code class="language-json">{
"tabWidth": 2
}
</code></pre>
<p>It is important to mention that the <code>.prettierrc</code> file should live in the root of the project that is using your package. Right now, I am manually copying it. </p>
<p>The next step is to export your config in the <code>index.js</code> file:</p><pre><code class="language-js">const eslintrc = require('./.eslintrc.js');
module.exports = eslintrc;
</code></pre>
<p>It is technically possible to create all configurations in the <code>index.js</code> file. But if you do this, you won't get the config object linted (insert your <a href="https://www.imdb.com/title/tt1375666/">Inception</a> joke here).</p>
<h3 id="you-re-done-">You're done!</h3>
<p><em>Voilà!</em> That’s all you need to start your own package of configurations. You can test locally your config package by running the following in a JavaScript project:</p><pre><code class="language-bash">npm install /Users/leonardo/path/to/eslint-config-test
</code></pre>
<p>Keep in mind that the dependencies of your configuration package may also be installed.</p>
<p>If everything looks fine, you can publish to the npm registry:</p><pre><code class="language-bash">npm publish
</code></pre>
<h2 id="full-example">Full example</h2>
<p>I have a functional GitHub project showing the setup of this post: <a href="https://github.com/leonardofaria/eslint-config-leozera">eslint-config-leozera</a>. You can also see it below:</p>
<h2 id="more-about-the-project">More about the project</h2>
<ul>
<li><a href="https://eslint.org/docs/user-guide/configuring">Configuring ESLint</a>: official ESLint docs. You know, <em>read the docs</em></li>
<li><a href="https://medium.com/@bretcameron/how-to-publish-your-first-npm-package-b224296fc57b">How to publish your first NPM package</a>: quoting the post subtitle – "everything you need to know to create a NPM package."</li>
<li><a href="https://github.com/wesbos/eslint-config-wesbos">eslint-config-wesbos</a>: a project by <a href="https://www.wesbos.com/">Wes Bos</a> that helped me while doing this work</li>
</ul>
<p>Also posted on <a href="https://bit.ly/2AKW42t">my blog</a>. If you like this content, follow me on <a href="https://twitter.com/leozera">Twitter</a> and <a href="https://github.com/leonardofaria">GitHub</a>. Cover photo by <a href="https://unsplash.com/photos/2nSdQEd-Exc">Susan Holt Simpson/Unsplash</a>.</p>
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
