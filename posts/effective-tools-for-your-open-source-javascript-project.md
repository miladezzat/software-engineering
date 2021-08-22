---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c9c35740569d1a4ca30ac.jpg"
tags: [JavaScript]
description: "I recently published a package on npm: a data structures and"
author: "Milad E. Fahmy"
title: "The Best Tools to Help You Build Your Open-Source JavaScript Project"
created: "2021-08-15T19:30:27+02:00"
modified: "2021-08-15T19:30:27+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-open-source tag-developer-tools tag-npm tag-continuous-integration ">
<header class="post-full-header">
<h1 class="post-full-title">The Best Tools to Help You Build Your Open-Source JavaScript Project</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c9c35740569d1a4ca30ac.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9c35740569d1a4ca30ac.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9c35740569d1a4ca30ac.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9c35740569d1a4ca30ac.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c9c35740569d1a4ca30ac.jpg" alt="The Best Tools to Help You Build Your Open-Source JavaScript Project">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>I recently published a package on npm: a data structures and algorithms library implemented in JavaScript.</p>
<p>The purpose of the project is to help others learn and understand data structures and algorithms from a JavaScript perspective. </p>
<p>Rather than containing only snippets of code with accompanying explanations, the project is meant to provide an eager learner with fully working code, good test cases, and a playground full of examples.</p>
<p>If you’re interested, the project can be found on npm <a href="https://www.npmjs.com/package/js-data-structures-and-algorithms" rel="noopener nofollow">here</a>.</p>
<p>But, rather than talking about the project itself, what I want to write about today are all the neat tools I learned about and used while creating the project. </p>
<p>I’ve worked on tons of side projects and demos over the last six years, but each of them are very visibly just "pet projects". They in no way have the qualities that’d make them look professional or production-ready.</p>
<p>What I set out to create was something that could be considered a respectable open-source package. To do that, I decided my project would need proper documentation, tooling, linting, continuous integration, and unit tests.</p>
<p>Below are some of the tools I used. Each one serves a unique purpose. I’ve linked to the documentation for each package so you, too, can start utilizing these tools in projects of you own.</p>
<p><strong>Note</strong>: This article assumes that you are already familiar with the process of creating a simple JavaScript package and publishing it on npm. </p>
<p>If not, the npm team has some <a href="https://docs.npmjs.com/creating-and-publishing-unscoped-public-packages">great documentation on getting started</a> that will walk you through the initialization of a project and the steps for publishing.</p>
<p>So let's get started.</p>
<h1 id="prettier">Prettier</h1>
<p>Prettier is an opinionated code formatter that automatically formats your code for you. Rather than simply using ESLint to enforce whatever formatting standards your team has agreed on, Prettier can take care of the formatting for you. </p>
<p>No more worrying about fixing your indentation and line widths! I’m using this specifically for my JavaScript, but it can handle many different languages.</p>
<figcaption>Sample JavaScript before and after running Prettier</figcaption>
</figure>
<p>You can check out the Prettier docs here: <a href="https://github.com/prettier/prettier" rel="noopener nofollow">https://github.com/prettier/prettier</a></p>
<h1 id="stylelint">stylelint</h1>
<p>stylelint autoformats your CSS for you. Similar to Prettier, this tool helps you keep your CSS clean while taking care of the heavy lifting for you.</p>
<figcaption>Sample output from running stylelint</figcaption>
</figure>
<p>You can check out the stylelint docs here: <a href="https://github.com/stylelint/stylelint" rel="noopener nofollow">https://github.com/stylelint/stylelint</a></p>
<h1 id="eslint">ESLint</h1>
<p>ESLint handles all my other JavaScript linting for catching syntax errors and enforcing best practices.</p>
<figcaption>Sample output from linting with ESLint in their playground environment</figcaption>
</figure>
<p>You can check out the ESLint docs here: <a href="https://eslint.org/" rel="noopener nofollow">https://eslint.org/</a></p>
<h1 id="commitizen">Commitizen</h1>
<p>Commitizen is a CLI tool that walks you through writing your commit messages. It generates the commit message for you based on your input and ensures that the resulting commit message follows the Conventional Commits standard.</p>
<figcaption>Commitizen command line interface when creating a new commit</figcaption>
</figure>
<p>You can check out the Commitizen docs here: <a href="https://github.com/commitizen/cz-cli" rel="noopener nofollow">https://github.com/commitizen/cz-cli</a></p>
<h1 id="commitlint">commitlint</h1>
<p>commitlint verifies that your commit messages follow the Conventional Commits standard. As long as you use Commitizen to create your commit messages, you won’t run into any problems. </p>
<p>The real benefit of using commitlint is to catch commits that developers wrote on their own that don’t follow your formatting standards.</p>
<figcaption>commitlint demo to show possible error messages</figcaption>
</figure>
<p>You can check out the commitlint docs here: <a href="https://github.com/conventional-changelog/commitlint" rel="noopener nofollow">https://github.com/conventional-changelog/commitlint</a></p>
<h1 id="lint-staged">lint-staged</h1>
<p>lint-staged runs linters against code that you’re trying to commit. This is where you can validate that your code is passing the standards being enforced by Prettier, stylelint, and ESLint.</p>
<figcaption>lint-staged example that runs ESLint on checked-in code</figcaption>
</figure>
<p>You can check out the lint-staged docs here: <a href="https://github.com/okonet/lint-staged" rel="noopener nofollow">https://github.com/okonet/lint-staged</a></p>
<h1 id="husky">Husky</h1>
<p>Husky makes it easy to run Git hooks.</p>
<p>All the previously mentioned tools can be run through Husky on Git hooks like <code>pre-commit</code> or <code>commit-msg</code>, so this is where the magic happens.</p>
<p>For instance, I’m running lint-staged and my unit tests during the <code>pre-commit</code> hook, and I’m running commitlint during the <code>commit-msg</code> hook. That means when I’m trying to check in my code, Husky does all the validation to make sure I’m abiding by all the rules I’m enforcing in my project.</p>
<figcaption>Sample Husky configuration that runs on the pre-commit and commit-msg Git hooks</figcaption>
</figure>
<p>You can check out the Husky docs here: <a href="https://github.com/typicode/husky" rel="noopener nofollow">https://github.com/typicode/husky</a></p>
<h1 id="rollup">Rollup</h1>
<p>Rollup is a module bundler for JavaScript. It takes all of your source code and bundles it into the files you actually want to distribute as part of your package.</p>
<p>The conventional wisdom seems to be if you’re building a web application, you should use webpack. And if you’re building a library, you should use Rollup. </p>
<p>In my case, I was building a data structures and algorithms library, so I chose to use Rollup. One benefit seems to be the output that Rollup generates is significantly smaller than what webpack outputs.</p>
<figcaption>A very minimal Rollup config that creates an output bundle in the CommonJS format</figcaption>
</figure>
<p>You can check out the Rollup docs here: <a href="https://rollupjs.org/guide/en/" rel="noopener nofollow">https://rollupjs.org/guide/en/</a></p>
<h1 id="standard-version">Standard Version</h1>
<p>Standard Version helps automate your versioning and changelog generation.</p>
<p>Previously, I mentioned tools like Commitizen and commitlint for formatting your commits according to the Conventional Commits standard. Why, you may ask, is that helpful?</p>
<p>The answer, at least in part, is that by using a consistent commit message format, you can use tools that are able to understand what kind of changes your commits are making.</p>
<p>For example, are you fixing bugs? Adding new features? Making breaking changes people consuming your library should be aware of? Standard Version is able to understand your commit messages and then generate a changelog for you. </p>
<p>It’s also able to intelligently bump the version of your package according to the semantic versioning standard (major, minor, patch).</p>
<figcaption>Sample Standard Version pre-release script that runs before version bumps</figcaption>
</figure>
<p>You can check out the Standard Version docs here: <a href="https://github.com/conventional-changelog/standard-version" rel="noopener nofollow">https://github.com/conventional-changelog/standard-version</a></p>
<h1 id="travis-ci">Travis CI</h1>
<p>Travis CI is a continuous-integration (CI) tool that can be integrated with GitHub, where my code happens to be hosted.</p>
<p>CI tools are important because they allow your commits to be tested yet again before you merge them into your master branch. You could argue using Travis CI and a tool like Husky duplicates functionality, but it’s important to keep in mind that even Husky can be bypassed by passing a <code>--no-verify</code> flag to your commit command.</p>
<p>Through GitHub, you can specify that your Travis CI jobs must be passing before code can be merged, so this adds one more layer of protection and verifies that only passing code makes it into your repo.</p>
<figcaption>Travis CI output from a passing build</figcaption>
</figure>
<p>You can check out the Travis CI docs here: <a href="https://docs.travis-ci.com/" rel="noopener nofollow">https://docs.travis-ci.com/</a></p>
<h1 id="codecov">Codecov</h1>
<p>Codecov is another CI tool that looks at your project’s code coverage.</p>
<p>I’m writing JavaScript unit tests using Jest. Part of my Travis CI job runs my test suite and ensures they all pass. It also pipes the code coverage output to Codecov, which then can verify if my code coverage is slipping or staying high. It also can be used in conjunction with GitHub badges, which we’ll talk about next.</p>
<figcaption>Codecov dashboard (look at that beautiful 100% code coverage!)</figcaption>
</figure>
<p>You can check out the Codecov docs here: <a href="https://docs.codecov.io/docs" rel="noopener nofollow">https://docs.codecov.io/docs</a></p>
<h1 id="badges">Badges</h1>
<p>Have you ever looked at a project in GitHub and seen little badges near the top of the README? Things like whether the build is passing, what the code coverage is, and what the latest version of the npm package is can all be shown using badges.</p>
<p>They’re relatively simple to add, but I think they add a really nice touch to any project. <a href="http://shields.io/" rel="noopener nofollow">Shields.io</a> is a great resource for finding lots of different badges that can be added to your project, and it helps you generate the markdown to include in your README.</p>
<figcaption>GitHub badges for my js-data-structures-and-algorithms npm package</figcaption>
</figure>
<p>You can check out the Shields.io docs here: <a href="https://shields.io/" rel="noopener nofollow">https://shields.io/</a></p>
<h1 id="documentation">Documentation</h1>
<p>A little documentation goes a long way. In my project, I’ve added a README, CHANGELOG, contributing guidelines, code of conduct, and a license.</p>
<p>These docs serve to help people know what your project is, how to use it, what changes have been made with each release, how to contribute if they want to get involved, how they’re expected to interact with other members of the community, and what the legal terms are.</p>
<figcaption>The CHANGELOG for my js-data-structures-and-algorithms npm package</figcaption>
</figure>
<p>You can check out the documentation for my project here: <a href="https://github.com/thawkin3/js-data-structures-and-algorithms" rel="noopener nofollow">https://github.com/thawkin3/js-data-structures-and-algorithms</a></p>
<h1 id="github-templates">GitHub Templates</h1>
<p>Did you know you can create templates in GitHub for things like bug reports, feature requests, and pull requests? Creating these templates makes it crystal clear, for example, what information someone should be expected to provide when filing a bug.</p>
<figcaption>GitHub templates for bug reports and feature requests</figcaption>
</figure>
<p>You can check out the GitHub templates docs here: <a href="https://help.github.com/en/github/building-a-strong-community/about-issue-and-pull-request-templates" rel="noopener nofollow">https://help.github.com/en/github/building-a-strong-community/about-issue-and-pull-request-templates</a></p>
<h1 id="closing">Closing</h1>
<p>That’s it. When I first showed this project to some friends, one of them commented, “Oh my build tool soup!” And he may be right. This is a lot. But I strongly believe that adding all the tooling above is worth it. It helps automate many things and helps keep your codebase clean and in working order.</p>
<p>My biggest takeaway from building this project is that setting up all of the tooling above isn’t as daunting as it may seem. Each of these tools has good documentation and helpful guides for getting started. It really wasn’t that bad, and you should feel confident adopting some (if not all) of these tools in your project, too.</p>
<p>Happy coding!</p>
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
