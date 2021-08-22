---
card: "/images/default.jpg"
tags: [JavaScript]
description: Recently, I've been getting more involved in front-end develo
author: "Milad E. Fahmy"
title: "ESLint: The Essential Facts About Essential Front End Tools"
created: "2021-08-15T19:33:04+02:00"
modified: "2021-08-15T19:33:04+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-front-end-development tag-eslint ">
<header class="post-full-header">
<h1 class="post-full-title">ESLint: The Essential Facts About Essential Front End Tools</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2019/08/The-Essentials--ESLint-01.png 300w,
/news/content/images/size/w600/2019/08/The-Essentials--ESLint-01.png 600w,
/news/content/images/size/w1000/2019/08/The-Essentials--ESLint-01.png 1000w,
/news/content/images/size/w2000/2019/08/The-Essentials--ESLint-01.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2019/08/The-Essentials--ESLint-01.png" alt="ESLint: The Essential Facts About Essential Front End Tools">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Recently, I've been getting more involved in front-end development. The more I do, the more my mind and my soul get lost in its chaotic world. Even a simple To–Do–List app can easily require a bunch of tools—<a href="https://eslint.org">ESLint</a>, <a href="https://babeljs.io/">Babel</a>, <a href="https://webpack.js.org/">Webpack</a>, to name a few—and packages just to get started. </p>
<p>Fortunately, there’re many starter kits out there so we don’t have to do everything from the ground up. With them, everything is already set up so we can start writing the first line of code right away. It saves time on repetitive, boring tasks, which can be great for experienced developers. </p>
<p>However, this benefit comes with a price for beginners. Since everything works out of the box, it seems like magic, and they might not know what's really happening under the hood, which is important to understand at some level. Although the learning curve is not as steep as others—try to compare with some tools you've been learning and using, you'll get what I mean—in this chaotic world, we need a survival guide for the journey.</p>
<p>This series will cover fundamental tools of front-end development and what essentials we need to know about them. This will allow us to rule the tools instead of being controlled by them. </p>
<p>In it, we’ll focus on the developer experience of each one of these tools. So the goal of this series is to act as a survival guide and to give a high-level overview of each tool, not to serve as documentation.</p>
<p>What will be included:</p>
<ul>
<li>ESLint &lt;- We are here</li>
<li>Babel</li>
<li>Webpack</li>
<li>Flow</li>
<li>TypesScript</li>
<li>Jest.</li>
</ul>
<p>Enough of a preface, let's get started with the first tool: ESLint.</p>
<h1 id="what-is-eslint-and-why-should-we-use-it">What is ESLint and Why should we use it?</h1>
<p>ESLint is, as the name implies, a linter for <a href="http://www.ecma-international.org/publications/standards/Ecma-262.htm">ECMAScript</a>. And, the definition of a linter is:</p>
<blockquote>a machine for removing the short fibers from cotton seeds after ginning.</blockquote>
<p>Although code and cotton seeds don't have any relationship, regardless of code or cotton seeds, a linter will help make things cleaner and more consistent. We don't want to see the code like this:</p><pre><code class="language-javascript">const count = 1;
const message  =  "Hello, ESLint"
count += 1
</code></pre>
<p>It both looks ugly and has a mistake. Here's when ESLint steps in to help with that. Instead of letting the error be dumped out to the browser console when we run the code, ESLint will catch it as we're typing (well not really: we’ll need editor or IDE extensions for this, which will be covered later). </p>
<p>Of course, this error isn't difficult to figure out, but wouldn't it be nicer to have an assistant reminding us every time we're about to make a mistake and perhaps auto-correcting it for us? Although ESLint can’t catch all kinds of errors, it at least spares us some effort so we can spend time on other things that matter and need human attention.</p>
<h1 id="how-does-eslint-work">How does ESLint work?</h1>
<p>Now that we know what ESLint is and why we need it, let's go a bit deeper and check out how it works. In essence, we can break it down to three big steps.</p>
<h2 id="parser">Parser</h2>
<p>The code that we write is nothing more than a sequence of characters. However, this sequence isn't just random characters: they need to follow a set of rules or conventions that is the grammar forming a language. </p>
<p>For a human, going from reading text or code to understanding it conceptually takes us little effort. For a computer, this is much more difficult to accomplish. For example:</p><pre><code class="language-javascript">const tool = 'ESLint' // 1
const  tool  =  "ESLint" // 2
</code></pre>
<p>As we read the two lines above, we immediately know that they are identical, and can be read as "there's a constant named <code>tool</code> with the value of ESLint". For a computer, which doesn't understand the meaning, these two lines look quite different. As a result, if we feed in raw code to ESLint, it's nearly impossible to do anything. </p>
<p>When things get complicated and hard to communicate—think of how we can have a computer to understand what we do—abstraction can be an escape. By abstracting a thing, we hide all unnecessary details, reduce noise, and keep everyone on the same page, which eases the communication. In the above example, one space or two spaces don’t matter, neither do single quotes or double quotes.</p>
<p>In other words, that's what a parser does. It converts raw code to an Abstract Syntax Tree (AST), and this AST is used as the medium for lint rules to base on. There are still many steps a parser need to do in order to create an AST—if you're interested in learning more about how an AST is generated, <a href="https://the-super-tiny-compiler.glitch.me/">this tutorial</a> has a good overview.</p>
<h2 id="rules">Rules</h2>
<p>The next step in the process is to run the AST through a list of rules. A rule is a logic of how to figure out potential existing issues in the code from the AST. Issues here aren't necessarily syntactic or semantic errors, but might be stylistic ones as well. The output given out from a rule will include some useful information for later use like lines of code, positions, and informative messages about the issue.</p>
<p>In addition to catching issues, a rule can even auto-correct code if possible. For example, when <a href="https://eslint.org/docs/rules/no-multi-spaces">no-multi-spaces</a> is applied to the code above, it will trim all redundant spaces, which makes the code look clean and consistent.</p><pre><code class="language-javascript">  const  tool  =  "ESLint" // 2
// becomes
const tool = "ESLint" // 2
</code></pre>
<p>In different scenarios, a rule can be used at different levels—opted-out, warning only, or strict error—and have various options, which gives us control on how to use the rule.</p>
<h2 id="result">Result</h2>
<p>Here comes the end of the process. With the output from a rule, it's just the matter of how we display it in a human friendly manner, thanks to all the useful information we mentioned earlier. Then from the result, we can quickly point out the issue, where it is, and make a fix, or maybe not.</p>
<h1 id="integration">Integration</h1>
<p>ESLint can be used as a standalone tool with its robust CLI, but that’s a bare-bones way to use ESLint. We don't want to type in a command every time we want to lint code, especially in a development environment. The solution for this is to integrate ESLint into our development environment so we can write code and see issues caught by ESLint all in one place.</p>
<p>This kind of integration comes from extensions specific to IDEs or editors. These extensions require ESLint to work since they run ESLint behind the scene—no wonder that we still need to install ESLint along with them, they are nothing without ESLint. This principle applies to other IDE or editor extensions we are using daily.</p>
<p>Remember the output from a rule we talked above? An extension will use it to display in the IDE or editor. How exactly the output is displayed depends on how the extension is implemented and how the IDE or editor is open to its extensions. Some extensions also take advantage of the abilities of issue correction from rules to change code on save if we enable it.</p>
<h1 id="configuration">Configuration</h1>
<p>Configuration is the main power that gives versatility to a tool. ESLint is not different from that, except it has the most comprehensive configuration among other tools. In general, we need a file or a place to put the configuration, and there's a couple of options of us. </p>
<p>All of them boil down to two main ways: either we have a separate configuration file for each tool, or we bundle them all in <code>package.json</code>. &nbsp;<code>.eslintrc.js</code> is one of the files that ESLint will be looking for its configuration, and also the one with the highest priority.</p>
<p>The next thing we need to know about configuration is its hierarchy and cascading behavior. Thanks to these features, we don't need to have a configuration file in every single folder in the project. </p>
<p>If a configuration file doesn't exist in a folder, ESLint simply looks up the folder's parent for one until it can't find one. Then it'll fall back to the user–wide default configuration in <code>~/.eslintrc</code>. Otherwise, the configuration file will add up or override the ones at upper levels.</p>
<p>There is, however, a special tweak on this. If we specify <code>root: true</code> in a configuration file, the lookup will stop at that file instead of going up like before. Besides, ESLint will use that configuration file as the root configuration, and all child configurations will be based on this one.</p>
<p>This is not only limited to ESLint - these things are common for other tools. Let's talk about ESLint specific configuration.</p>
<h2 id="parser-1">Parser</h2>
<p>The role of the parser in ESLint has been discussed above. By default, ESLint uses <a href="https://github.com/eslint/espree">Espree</a> as its parser. We can change this parser to another compatible one like <a href="https://www.npmjs.com/package/babel-eslint">babel-eslint</a> or <a href="https://www.npmjs.com/package/@typescript-eslint/parser">@typescript-eslint/parser</a> if we use Babel or Typescript, respectively.</p>
<p>To configure the parser, we use <code>parserOptions</code>. Among options supported by Espree, here are some we often use and need to pay attention to:</p>
<ul>
<li><code>ecmaVersion</code></li>
</ul>
<p>We need to specify the appropriate ECMA version to features we want to use. For example, if <code>emcaVersion: 5</code>, the code below will give some errors.</p><pre><code>```javascript
let a = [1, 2, 3, 4] // error due to `let` keyword
var b = [...a, 5] // error due to spread syntax
```
</code></pre>
<p>The parser can't parse the code because both the <code>let</code> keyword and spread syntax were just introduced in ES6. Changing <code>emcaVersion</code> to 6 or above will simply resolve the errors.</p>
<ul>
<li><code>sourceType</code></li>
</ul>
<p>Nowadays, we mostly write everything in modules, then bundle them together. So this option, most of the time, should be <code>module</code>. </p>
<p>Another value we can use—as well as the default—is <code>script</code>. The difference is whether we can use <a href="https://v8.dev/features/modules">JS modules</a> or not, i.e., use <code>import</code> and <code>export</code> keyword. The next time we get this error message <code>Parsing error: 'import' and 'export' may appear only with 'sourceType: module'</code>, we know where to look.</p>
<ul>
<li><code>ecmaFeatures.jsx</code></li>
</ul>
<p>There might be additional ES features we want to use, for example <a href="https://facebook.github.io/jsx/">JSX</a> syntax. We use <code>ecmaFeatures.jsx: true</code> to enable this feature. Note that, JSX support from Espree isn't the same as JSX in React. If we want React specific JSX, we should use <a href="https://github.com/yannickcr/eslint-plugin-react">eslint-plugin-react</a> for better results.</p>
<p>If we use another parser, these options are more or less the same. Some might have fewer options, and others might have more, but they're all defined under <code>parserOptions</code>.</p>
<h2 id="environment">Environment</h2>
<p>It depends on where the code is running: there are different predefined global variables. We have <code>window</code>, <code>document</code> in the browser, for example. It would be irritating if the <a href="https://eslint.org/docs/rules/no-undef">no-undef</a> rule is enabled, and ESLint keeps telling us <code>window</code> or <code>document</code> is not defined.</p>
<p>The <code>env</code> option is here to help. By specifying a list of environments, ESLint will know about global variables in these environments, and let us use them without a word.</p>
<p>There's a special environment we need to note, <code>es6</code>. It'll implicitly set <code>parserOptions.ecmaVersion</code> to 6, and enable all ES6 features except for modules which we still need to use <code>parserOptions.sourceType: "module"</code> separately.</p>
<h1 id="plugins-and-shareable-configs">Plugins and Shareable Configs</h1>
<p>Having the same configuration for rules over and over again across different projects might be tiresome. Luckily, we can reuse a configuration, and only override rules as needed with <code>extends</code>. We call this type of config shareable configs, and ESLint already has two for us: <code>eslint:recommended</code> and <code>eslint:all</code>. </p>
<p>Conventionally, ESLint's shareable configs have <code>eslint-config</code> prefix so we can easily find them via NPM with <a href="https://www.npmjs.com/search?q=keywords:eslint-config"><code>eslint-config</code></a> keyword. Among hundreds of results, there're some popular ones, like <a href="https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb">eslint-config-airbnb</a> or <a href="https://github.com/google/eslint-config-google">eslint-config-google</a>, you name it.</p>
<p>Out of the box, ESLint has a bunch of rules to serve different purposes from possible errors, best practices, ES6 to stylistic issues. Moreover, to supercharge its ability, ESLint has a great number of 3rd-party rules provided by almost a thousand plugins. Similar to shareable configs, ESLint's plugins are prefixed with <code>eslint-plugin</code>, and are available on NPM with the <a href="https://www.npmjs.com/search?q=keywords:eslint-plugin"><code>eslint-plugin</code></a> keyword.</p>
<p>A plugin defines a set of new rules, and in most cases it exposes its own handy configs. For example, the <a href="https://github.com/yannickcr/eslint-plugin-react">eslint-plugin-react</a> gives us two shareable configs, <code>eslint-plugin-react:recommended</code> and <code>eslint-plugin-react:all</code> just like <code>eslint:recommended</code> and <code>eslint:all</code>. To use one of them, we need to, firstly, define the plugin name, and secondly extend the config.</p><pre><code class="language-javascript">{
plugins: ["react"],
extends: "plugin:react/recommended"
}
// Note that we need to prefix the config by `plugin:react`
</code></pre>
<p>One common question to ask is what plugins or configs to use. While it largely depends on our needs, we can use <a href="https://github.com/dustinspecker/awesome-eslint">Awesome ESLint</a> as a reference to find useful plugins as well as configs.</p>
<h1 id="prettier">Prettier</h1>
<p>We're almost there - we've almost gotten to the end. Last but not least, we'll discuss a popular pair of ESLint, <a href="https://github.com/prettier/prettier">Prettier</a>. In short, Prettier is an opinionated code formatter. Though Prettier can be used alone, integrating it to ESLint enhances the experience a lot, and <a href="https://github.com/prettier/eslint-plugin-prettier">eslint-plugin-prettier</a> does this job.</p>
<p>The difference between using Prettier alone and using Prettier with ESLint can be summarized to code formatting as an issue. Instead of giving format issues separately, running Prettier with ESLint will treat format issues just like other issues. However, these issues are always fixable, which is equivalent to formatting the code. </p>
<p>That's how <code>eslint-plugin-prettier</code> works. It runs Prettier, as a rule, behind the scene and compares the code before and after being run through Prettier. Finally, it reports differences as individual ESLint issues. To fix these issues, the plugin simply uses the formatted code from Prettier.</p>
<p>To have this integration, we need to install both <code>prettier</code> and <code>eslint-plugin-prettier</code>. <code>eslint-plugin-prettier</code> also comes with <code>eslint-plugin-prettier:recommended</code> config—which extends <a href="https://github.com/prettier/eslint-config-prettier">eslint-config-prettier</a>. Therefore we also need to install <code>eslint-config-prettier</code> to use it.</p><pre><code class="language-javascript">{
"plugins": ["prettier"],
"extends": "plugin:prettier/recommended"
}
</code></pre>
<h1 id="conclusion">Conclusion</h1>
<p>Code linters or formatters have become the de facto standard in software development in general, and ESLint, specifically, in front-end development. </p>
<p>Its benefits go far beyond what it does technically, as it helps developers focus on more important matters. Thanks to delegating code styling to a machine, we can avoid opinionated styles on code review, and use that time instead for more meaningful code review. Code quality also benefits, and we get more consistent and less error-prone code.</p>
<p><em>This article was originally posted at <a href="https://blog.vinhis.me/2019/08/03/the-essentials-of-essential-frontend-tools-eslint.html">my blog</a></em>.</p>
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
