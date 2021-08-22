---
card: "/images/default.jpg"
tags: [Accessibility]
description: "On Twitter, in Slack, on Discord, in IRC, or wherever you  ha"
author: "Milad E. Fahmy"
title: "The Myth of Inaccessible React"
created: "2021-08-16T10:06:14+02:00"
modified: "2021-08-16T10:06:14+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-accessibility tag-react tag-javascript tag-web-development tag-gatsby tag-gatsbyjs ">
<header class="post-full-header">
<h1 class="post-full-title">The Myth of Inaccessible React</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2019/06/storybook-preview.png 300w,
/news/content/images/size/w600/2019/06/storybook-preview.png 600w,
/news/content/images/size/w1000/2019/06/storybook-preview.png 1000w,
/news/content/images/size/w2000/2019/06/storybook-preview.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2019/06/storybook-preview.png" alt="The Myth of Inaccessible React">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>On Twitter, in Slack, on Discord, in IRC, or wherever you &nbsp;hang out with other developers on the internet, you may have heard some &nbsp;formulation of the following statements:</p><ul><li>React doesn't support accessibility</li><li>React makes websites inaccessible</li><li>People should write accessible HTML instead of React</li><li>React is ruining the internet</li></ul><p>There's a somewhat common misperception that JavaScript frameworks and <a href="https://www.mediacurrent.com/videos/common-accessibility-mistakes-and-how-avoid-them/">web accessibility</a> don't mix. React, being one of the largest JavaScript libraries, is often the target.</p><p>In &nbsp;my career, however, I have had the interesting experience of being &nbsp;introduced to accessibility and ReactJS at around the same time. I found &nbsp;tooling in React that helped me learn a lot about accessibility that I never would have encountered otherwise.</p><p>And while I don't disagree &nbsp;that there are plenty of libraries, websites, apps, etc. written in &nbsp;React that are inaccessible, I do disagree there is something inherent &nbsp;in ReactJS that makes developers build inaccessible sites. In fact, I <strong>love</strong> the accessibility tooling available in the React ecosystem, so this post is really about how React can help you make <em>more accessible</em> websites than you've ever made before.</p><p>I'll &nbsp;outline how you can combine React linting tools, DOM auditing, and &nbsp;Storybook (a component library tool) to provide a really supportive &nbsp;accessibility environment for developers -- whether they are &nbsp;accessibility pros or just getting started. By the end of this post, &nbsp;you'll have the following configured for your <a href="https://www.mediacurrent.com/videos/webinar-recording-rain-gatsbyjs-fast-tracking-drupal-8/">Gatsby project</a> (or other React project):</p><ul><li>in-editor reporting of accessibility errors</li><li>a pre-commit hook for preventing accessibility errors from getting into the repository</li><li>browser console reporting of accessibility errors during development, with links to info on how to resolve the errors</li><li>a component library with built-in accessibility testing so all &nbsp;project stakeholders can hold the team accountable for accessibility &nbsp;issues</li></ul><p><em>Want to get started right away? I created a Gatsby starter with all these accessibility tools built in. Checkout the <strong><a href="https://github.com/benjamingrobertson/gatsby-starter-accessibility">gatsby-starter-accessibility repo</a></strong> that has all these features available out of the box.</em></p><h2 id="tools-and-setup">Tools and Setup</h2><h3 id="eslint-plugin-jsx-a11y"><strong><a href="https://github.com/evcohen/eslint-plugin-jsx-a11y">eslint-plugin-jsx-a11y</a></strong></h3><p>If you've written JavaScript over the past few years, you've probably used or at least heard of <a href="https://eslint.org/">ESLint</a>. If not, now is a great time to get started with it!</p><p>ESLint &nbsp;is a linting utility for JavaScript that helps you catch formatting and &nbsp;syntax errors while you are writing code. Most editors have some sort &nbsp;of linting configuration built in, which lets you see errors in your &nbsp;editor while you code.</p><p>This is really helpful for keeping code consistent, especially when there's a lot of people working on a project.</p><p>ESLint &nbsp;also has a really healthy plugin ecosystem. You can include rules &nbsp;specific to the JavaScript framework you are working with (i.e., React, &nbsp;Angular, Vue, etc), among others. For React, I typically use the <code>eslint-plugin-react </code>and the really helpful <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y">eslint-plugin-jsx-a11y</a>. This plugin lints your code for known accessibility violations, using <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y#supported-rules">these rules</a>.</p><p>Having these automated tests run while you are writing code can prevent <em>so many errors</em>. Even though automated accessibility testing catches only about <a href="https://www.mediacurrent.com/blog/manual-accessibility-testing-why-how/">20-30% of all accessibility errors</a>, &nbsp;catching these errors before they make it into a codebase can save &nbsp;time, budget, and energy for doing more manual testing once the code is &nbsp;in the browser.</p><h4 id="usage">Usage</h4><p>Here's how you can get started with accessibility linting in your React project.</p><p>First, we'll need to install the necessary eslint packages:</p><p><code>npm install eslint eslint-plugin-react eslint-plugin-jsx-a11y --save-dev</code></p><p>In your package.json, add the following configuration:</p><pre><code class="language-json">"eslintConfig": {
"parserOptions": {
"sourceType": "module"
},
"env": {
"node": true,
"browser": true,
"es6": true
},
"plugins": [
"react",
"jsx-a11y"
],
"extends": [
"eslint:recommended",
"plugin:react/recommended",
"plugin:jsx-a11y/recommended"
]
"hooks": {
"pre-commit": "lint-staged"
}
},
"lint-staged": {
"*.js": [
"eslint"
]
}</code></pre><p>You can adjust this as you see fit. For example, &nbsp;sometimes you want to limit linting to certain directories. To run the &nbsp;pre-commit hook only on JS files in the src directory, you would update &nbsp;the lint-staged configuration like this:</p><pre><code class="language-json">"lint-staged": {
"src/*.js": [
"eslint"
]
}</code></pre><p>The great thing about <code>lint-staged</code> is that it &nbsp;only lints the files that are part of the current commit. If for some &nbsp;reason there is some pre-existing errors in another part of the &nbsp;codebase, the commit won't be prevented--it only prevents new errors &nbsp;from being introduced.</p><h3 id="react-axe">react-axe</h3><p>The great thing about the &nbsp;linting setup we have now is that it will prevent a lot of errors from &nbsp;being introduced into the codebase. It won't prevent all errors, however. Some errors only exist when several components are used &nbsp;together, or from certain content, and can only be caught in the &nbsp;browser.</p><p>Luckily, we have a solution for this, too. Axe is an open source engine for automated accessibility testing, supported by <a href="https://www.deque.com/">Deque</a>. I first became familiar with axe by using their really useful browser extension for <a href="https://www.mediacurrent.com/blog/5-website-accessibility-checkers/">testing individual pages in the browser</a>.</p><p>The problem with browser-extension accessibility testing is that they are typically only run <em>after</em> development is complete. Using the <code>react-axe library</code>, &nbsp;you can have automated accessibility testing run on every page during &nbsp;development, so developers can get real-time feedback on accessibility &nbsp;issues. This helps make sure that accessibility issues never make it to &nbsp;production, and it also educates developers who may not be accessibility &nbsp;experts on potential pitfalls.</p><p>The <a href="https://github.com/dequelabs/react-axe">react-axe</a> library is an easy to use implementation of the axe engine, specifically for React.</p><h4 id="usage-2">Usage</h4><p>Here's how to get started using react-axe with Gatsby (<a href="https://github.com/angeloashmore/gatsby-plugin-react-axe">someone made a Gatsby plugin for it!</a>):</p><p><code>npm install --save gatsby-plugin-react-axe</code></p><p>Add gatsby-plugin-react-axe to your plugins array in gatsby-config.js</p><pre><code class="language-javascript">module.exports = {
siteMetadata: {
title: 'Gatsby Default Starter',
description:
'Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.',
author: '@gatsbyjs',
},
plugins: [
'gatsby-plugin-react-axe',
// other plugins go here
],
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
