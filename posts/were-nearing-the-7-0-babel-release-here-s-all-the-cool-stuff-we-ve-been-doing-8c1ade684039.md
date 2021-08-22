---
card: "https://cdn-media-1.freecodecamp.org/images/1*vLtFVPTHJGDfw3XOl4C1Sw.jpeg"
tags: [JavaScript]
description: by Henry Zhu
author: "Milad E. Fahmy"
title: "We’re nearing the 7.0 Babel release. Here’s all the cool stuff we’ve been doing."
created: "2021-08-15T19:48:21+02:00"
modified: "2021-08-15T19:48:21+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-babel tag-open-source tag-tech tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">We’re nearing the 7.0 Babel release. Here’s all the cool stuff we’ve been doing.</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*vLtFVPTHJGDfw3XOl4C1Sw.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*vLtFVPTHJGDfw3XOl4C1Sw.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*vLtFVPTHJGDfw3XOl4C1Sw.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*vLtFVPTHJGDfw3XOl4C1Sw.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*vLtFVPTHJGDfw3XOl4C1Sw.jpeg" alt="We’re nearing the 7.0 Babel release. Here’s all the cool stuff we’ve been doing.">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Henry Zhu</p>
<h1 id="we-re-nearing-the-7-0-babel-release-here-s-all-the-cool-stuff-we-ve-been-doing-">We’re nearing the 7.0 Babel release. Here’s all the cool stuff we’ve been doing.</h1>
<figcaption>Photo by <a href="https://unsplash.com/photos/bq31L0jQAjU?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText" rel="noopener" target="_blank" title="">“My Life Through A Lens”</a> on <a href="https://unsplash.com/search/photos/change?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText" rel="noopener" target="_blank" title="">Unsplash</a></figcaption>
</figure>
<p>&gt; 6 months later, the actual release <a href="https://twitter.com/left_pad/status/1034204330352500736" rel="noopener nofollow">https://twitter.com/left_pad/status/1034204330352500736</a>!</p>
<p>Hey there ?! I’m <a href="http://twitter.com/left_pad" rel="noopener nofollow">Henry</a>, one of the maintainers on <a href="http://babeljs.io/" rel="noopener nofollow">Babel</a>.</p>
<p>&gt; EDIT: I’ve <a href="https://www.henryzoo.com/blog/2018/02/15/leaving-behance.html" rel="noopener nofollow">left Behance</a> and have made a <a href="https://www.patreon.com/henryzhu" rel="noopener nofollow">Patreon</a> to try to pursue <a href="https://www.henryzoo.com/blog/2018/03/02/in-pursuit-of-open-source-part-1.html" rel="noopener nofollow">working on open source full time</a>, please consider donating (ask your company).</p>
<h4 id="a-quick-intro-to-babel">A quick intro to Babel</h4>
<p>Some people like to think of Babel as a tool that lets you write ES6 code. More specifically, a JavaScript compiler than will convert ES6 into ES5 code. That was pretty fitting back when its name was 6to5, but I think Babel has become a lot more than that.</p>
<p>Now let’s back up a bit. The reason why this is even necessary in the first place is because, unlike most languages on the server (even Node.js), the version of JavaScript that you can run depends on your specific browser version. So it doesn’t matter if you are using the latest browsers if your users (that you want to keep) are still on IE. If you want to write the <code>class A {}</code> , for example, then you’re out of luck — some number of your users will get a <code>SyntaxError</code> and a white page.</p>
<p>So that’s why Babel was created. It allows you to write the version of JavaScript you desire, knowing that it will run correctly on all the (older) browsers you support.</p>
<p>But it doesn’t just stop at “ES6” (some people like to say ES2015). Babel has certainly expanded upon its initial goal of only compiling ES6 code, and now compiles whatever ES20xx version you want (the latest version of JavaScript) to ES5.</p>
<h4 id="the-ongoing-process">The ongoing process</h4>
<p>One of the interesting things about the project is that, as long as new JavaScript syntax is added, Babel will need to implement a transform to convert it.</p>
<p>But you might be thinking, why should we even send a compiled version (larger code size) to browsers that do support that syntax? How do we even know what syntax each browser supports?</p>
<p>Well, we made <code><a href="https://babeljs.io/docs/en/babel-preset-env">babel-preset-env</a></code> to help with that issue by creating a tool that lets you specify which browsers you support. It will automatically only transform the things that those browsers don’t support natively.</p>
<p>Beyond that, Babel (because of its usage in the community) has a place in influencing the future of the JavaScript language itself! Given that it is a tool for transforming JS code, it can also be used to implement any of the proposals submitted to <a href="http://2ality.com/2015/11/tc39-process.html" rel="noopener">TC39</a> (Ecma Technical Committee 39, the group that moves JavaScript forward as a standard).</p>
<p>There is a whole process a “proposal” goes through, from Stage 0 to Stage 4 when it lands into the language. Babel, as a tool, is in the right place to test out new ideas and to get developers to use it in their applications so they can give feedback to the committee.</p>
<p>This is really important for a few reasons: the committee wants to be confident that the changes they make are what the community wants (consistent, intuitive, effective). Implementing an unspecified idea in the browser is slow (C++ in the browser vs. JavaScript in Babel), costly, and requires users to use a flag in the browser versus changing their Babel config file.</p>
<p>Since Babel is so ubiquitous, there is a good chance that real usage will occur. This will make the proposal much better off than if it was just implemented without any vetting from the developer community at large.</p>
<p>And it is not just useful in production. Our online <a href="https://babeljs.io/repl" rel="noopener">REPL</a> is useful for people learning JavaScript itself, and allows them to test things out.</p>
<p>I think Babel is in a great position to be an educational tool for programmers so they can continue to learn how JavaScript works. Through contributing to the project itself, they’ll learn many other concepts such as ASTs, compilers, language specification, and more.</p>
<p>I’m really excited about the future of the project and can’t wait to see where the team can go. Please join and help us!</p>
<h4 id="my-story">My story</h4>
<p>Those are some of the reasons I get excited to work on this project each day, especially as a maintainer. Most of the current maintainers, including myself, didn’t create the project but joined a year after — and it’s still <a href="https://medium.com/@left_pad/ossthanks-some-thoughts-d0267706c2c6" rel="noopener">mindblowing</a> to think where I started.</p>
<p>As for me, I recognized a need and an interesting project. I slowly and consistently got more involved, and now I’ve been able to get my employer, <a href="https://www.behance.net/" rel="noopener">Behance</a>, to sponsor half my time on Babel.</p>
<p>Sometimes “maintaining” just means fixing bugs, answering questions on our Slack or <a href="https://twitter.com/babeljs/" rel="noopener">Twitter</a>, or writing a changelog (it’s really up to each of us). But recently, I’ve decreased my focus on making bug fixes and features. Instead, I’ve been putting some time into thinking about more high level issues like: what’s the future of this project? How do we grow our community in terms of the number of maintainers versus of the number of users? How can we sustain the project in terms of funding? Where do we fit in the JavaScript ecosystem as a whole (education, <a href="https://github.com/tc39/proposals" rel="noopener">TC39</a>, tooling)? And is there a role for us to play in helping new people join in open source (<a href="https://twitter.com/left_pad/status/959439119960215552" rel="noopener">RGSoC</a> and <a href="https://summerofcode.withgoogle.com/" rel="noopener">GSoC</a>)?</p>
<p>Because of these questions, what I’m most excited about with this release isn’t necessarily the particulars in the feature set (which are many: initial implementations of new proposals like the <a href="https://github.com/babel/babel/tree/master/packages/babel-plugin-proposal-pipeline-operator" rel="nofollow noopener">Pipeline Operator (a |&gt; b)</a>, a <a href="https://github.com/babel/babel/tree/master/packages/babel-preset-typescript" rel="nofollow noopener">new TypeScript preset</a> with help from the TS team, and .babelrc.js files).</p>
<p>Rather, I’m excited about what all those features represent: a year’s worth of hard work trying not to break everything, balancing users’ expectations (why is the build so slow/code output so large, why is the code not spec-compliant enough, why doesn’t this work without configuration, why isn’t there an option for x), and sustaining a solid team of mostly volunteers.</p>
<p>And I know our industry has a huge focus on “major releases,” hyped features, and stars, but that’s just one day that fades. I’d like to suggest we continue thinking about what it takes to be consistent in pushing the ecosystem forward in a healthy fashion.</p>
<p>This could simply mean thinking about the mental and emotional burden of maintainer-ship. It could mean thinking about how to provide mentorship, expectation management, work/life balance advice, and other resources to people wanting to get involved, instead of just encouraging developers to expect immediate, free help.</p>
<h4 id="diving-into-the-changelog">Diving into the changelog</h4>
<p>Well, I hope you enjoy the long changelog ?. If you’re interested in helping us out, please let us know and we’d be glad to talk more.</p>
<p>We started a new <a href="https://babeljs.io/docs/community/videos/" rel="noopener">videos page</a>, since people wanted to learn more about how Babel works and contribute back. This page contains videos of conference talks on Babel and related concepts from team members and people in the community.</p>
<p>We also created a new <a href="https://babeljs.io/team" rel="noopener">team page</a>! We will be updating this page in the future with more information about what people work on and why they are involved. For such a large project, there are many ways to get involved and help out.</p>
<p>Here are some highlights and quick facts:</p>
<ul>
<li>Babel turned 3 years old on <a href="https://babeljs.io/blog/2017/10/05/babel-turns-three" rel="noopener">September 28, 2017</a>!</li>
<li>Daniel <a href="https://twitter.com/left_pad/status/926096965565370369" rel="noopener">moved</a> <code>babel/babylon</code> and <code>babel/babel-preset-env</code> into the main Babel monorepo, <a href="https://github.com/babel/babel" rel="noopener">babel/babel</a>. This includes all Git history, labels, and issues.</li>
<li>We received a <a href="https://twitter.com/left_pad/status/923696620935421953" rel="noopener">$1k/month donation</a> from Facebook Open Source!</li>
<li>This the highest monthly donation we have gotten since the start (next highest is $100/month).</li>
<li>In the meantime, we will use our funds to meet in person and to send people to TC39 meetings. These meetings are every 2 months around the world.</li>
<li>If a company wants to specifically sponsor something, we can create separate issues to track. This was difficult before, because we had to pay out of pocket or find a conference to speak at during the same week to help cover expenses.</li>
</ul>
<h4 id="how-you-can-help">How you can help</h4>
<p>If your company would like to <strong>give back</strong> by supporting a fundamental part of JavaScript development and its future, consider donating to our <a href="https://opencollective.com/babel" rel="noopener">Open Collective</a>. You can also donate developer time to help maintain the project.</p>
<h4 id="-1-help-maintain-the-project-developer-time-at-work-">#1: Help maintain the project (developer time at work)</h4>
<blockquote class="twitter-tweet" data-lang="en">
<p lang="en" dir="ltr">Engineer: There's a thing in SQL Server Enterprise blocking us<br>Company: Let's set up a call next week with them an ongoing discussion to resolve it next quarter<br><br>Engineer: There's a thing we need in babel, can I spent 2 days with a PR for it<br>Company: lol no it's their job <a href="https://t.co/icgaoJ0dTe">https://t.co/icgaoJ0dTe</a></p>— Shiya (@ShiyaLuo) <a href="https://twitter.com/ShiyaLuo/status/931230821976907776?ref_src=twsrc%5Etfw">November 16, 2017</a>
</blockquote>
<p>The best thing for Babel is finding people who are committed to helping out with the project, given the massive amount of work and responsibility it requires. Again, <a href="https://dev.to/hzoo/im-the-maintainer-of-babel-ask-me-anything-282/comments/1k6d" rel="noopener">I never felt ready</a> to be a maintainer, but somehow stumbled upon it. But I’m just one person, and our team is just a few people.</p>
<h4 id="-2-help-fund-development">#2: Help fund development</h4>
<blockquote class="twitter-tweet" data-lang="en">
<p lang="en" dir="ltr">Company: "We'd like to use SQL Server Enterprise"<br>MS: "That'll be a quarter million dollars + $20K/month"<br>Company: "Ok!"<br>...<br>Company: "We'd like to use Babel"<br>Babel: "Ok! npm i babel --save"<br>Company: "Cool"<br>Babel: "Would you like to help contribute financially?"<br>Company: "lol no"</p>— Adam Rackis (@AdamRackis) <a href="https://twitter.com/AdamRackis/status/931195056479965185?ref_src=twsrc%5Etfw">November 16, 2017</a>
</blockquote>
<p>We definitely want to be able to fund people on the team so they can work full-time. Logan, in particular, left his job a while ago and is using our current funds to work on Babel part time.</p>
<h4 id="-3-contribute-in-other-ways">#3 Contribute in other ways ?</h4>
<p>For example, <a href="https://twitter.com/angustweets" rel="noopener">Angus</a> made us an <a href="https://medium.com/@angustweets/hallelujah-in-praise-of-babel-977020010fad" rel="noopener">official song</a>!</p>
<h4 id="upgrading">Upgrading</h4>
<p>We will also be working on an upgrade tool that will help <a href="https://github.com/babel/notes/issues/44" rel="noopener">rewrite your package.json/.babelrc files</a> and more. Ideally, this means it would modify any necessary version number changes, package renames, and config changes.</p>
<p>Please reach out to help and to post issues when trying to update. This is a great opportunity to get involved and help the ecosystem update!</p>
<h4 id="summary-of-the-previous-post">Summary of the <a href="https://babeljs.io/blog/2017/09/12/planning-for-7.0" rel="noopener">previous post</a></h4>
<ul>
<li>Dropped Node 0.10/0.12/5 support.</li>
<li>Updated <a href="https://github.com/babel/proposals/issues" rel="noopener">TC39 proposals</a></li>
<li>Numeric Separator: <code>1_000</code></li>
<li>Optional Chaining Operator: <code>a?.b</code></li>
<li><code>import.meta</code> (parseble)</li>
<li>Optional Catch Binding: <code>try { a } catch {}</code></li>
<li>BigInt (parseble): <code>2n</code></li>
<li>Split export extensions into <code>export-default-from</code> and <code>export-ns-form</code></li>
<li><code>.babelrc.js</code> support (a config using JavaScript instead of JSON)</li>
<li>Added a new Typescript Preset and separated the React/Flow presets</li>
<li>Added <a href="https://reactjs.org/blog/2017/11/28/react-v16.2.0-fragment-support.html" rel="noopener">JSX Fragment Support</a> and various Flow updates</li>
<li>Removed the internal <code>babel-runtime</code> dependency for smaller size</li>
</ul>
<h4 id="newly-updated-tc39-proposals">Newly updated TC39 proposals</h4>
<ul>
<li>Pipeline Operator: <code>a |&gt; b</code></li>
<li>Throw Expressions: <code>() =&gt; throw 'hi'</code></li>
<li>Nullish Coalescing Operator: <code>a ?? b</code></li>
</ul>
<h4 id="deprecated-yearly-presets-e-g-babel-preset-es20xx-">Deprecated yearly presets (e.g. babel-preset-es20xx)</h4>
<p>TL;DR: use <code>babel-preset-env</code>.</p>
<p>What’s better than you having to decide which Babel preset to use? Having it done for you, automatically!</p>
<p>Even though the amount of work that goes into maintaining the lists of data is humongous — again, why we need help — it solves multiple issues. It makes sure users are up to date with the spec. It means less configuration/package confusion. It means an easier upgrade path. And it means fewer issues about what is what.</p>
<p><code>babel-preset-env</code> is actually a pretty <em>old</em> preset that replaces every other syntax preset that you will need (es2015, es2016, es2017, es20xx, latest, and so on).</p>
<p>It compiles the latest yearly release of JavaScript (whatever is in Stage 4) which replaces all the old presets. But it also has the ability to compile according to target environments you specify: it can handle development mode, like the latest version of a browser, or multiple builds, like a version for IE. It even has another version for evergreen browsers.</p>
<h4 id="not-removing-the-stage-presets-babel-preset-stage-x-">Not removing the Stage presets (babel-preset-stage-x)</h4>
<blockquote class="twitter-tweet" data-lang="en">
<p lang="en" dir="ltr">Frustration level if we remove the Stage presets in Babel? (in favor explicitly requiring proposal plugins since they aren't JavaScript yet)</p>— Henry Zhu (@left_pad) <a href="https://twitter.com/left_pad/status/873242704364306433?ref_src=twsrc%5Etfw">June 9, 2017</a>
</blockquote>
<p>We can always keep it up to date, and maybe we just need to determine a better system than what the current presets are.</p>
<p>Right now, stage presets are just a list of plugins that we manually update after each TC39 meeting. To make this manageable, we need to allow major version bumps for these “unstable” packages. This is partly because the community will re-create these packages anyway. So we might as well do it from an official package, and then have the ability to provide better messaging and so on.</p>
<h4 id="renames-scoped-packages-babel-x-">Renames: Scoped Packages (<code>@babel/x</code>)</h4>
<p>Here is a poll I put out almost a year ago:</p>
<blockquote class="twitter-tweet" data-lang="en">
<p lang="en" dir="ltr">Thoughts on <a href="https://twitter.com/babeljs?ref_src=twsrc%5Etfw">@babeljs</a> using npm scoped packages for 7.0?</p>— Henry Zhu (@left_pad) <a href="https://twitter.com/left_pad/status/821551189166878722?ref_src=twsrc%5Etfw">January 18, 2017</a>
</blockquote>
<p>Back then, not a lot of projects used scoped packages, so most people didn’t even know they existed. You might have had to pay for an npm org account back then, whereas now it is free (and supports non-scoped packages, too).</p>
<p>The issues with searching for scoped packages are solved, and download counts work. The only stumbling block left is that some 3rd party registries still don’t support scoped packages. But I think we are at a point where it seems pretty unreasonable to wait on that.</p>
<p>Here’s why we prefer scoped packages:</p>
<ul>
<li>Naming is difficult: we won’t have to check if someone else decided to use our naming convention for their own plugin</li>
<li>We have similar issues with package squatting</li>
<li>Sometimes people create <code>babel-preset-20xx</code> or some other package because it’s funny. We have to make an issue and email to ask for it back.</li>
<li>People have a legit package, but it happens to be the same name as what we wanted to call it.</li>
<li>People see that a new proposal is merging (like optional chaining or pipeline operator) and decide to fork and publish a version of it under the same name. Then, when we publish, it tell us the package was already published ?. So I have to find their email and email both them and npm support to get the package back and republish.</li>
<li>What is an “official” package and what is a user/community package with the same name? We get issue reports of people using misnamed or unofficial packages because they assumed it was part of Babel. One example of this was a report that <code>babel-env</code> was rewriting their <code>.babelrc</code> file. It took them a while to realize it wasn't <code>babel-preset-env</code>.</li>
</ul>
<p>So, it seems pretty clear that we should use scoped packages, and, if anything, we should have done it much earlier ?!</p>
<p>Examples of the scoped name change:</p>
<ul>
<li><code>babel-cli</code> -&gt; <code>@babel/cli</code></li>
<li><code>babel-core</code> -&gt; <code>@babel/core</code></li>
<li><code>babel-preset-env</code> -&gt; <code>@babel/preset-env</code></li>
</ul>
<h4 id="renames-proposal-">Renames: <code>-proposal-</code></h4>
<p>Any proposals will be named with <code>-proposal-</code> now to signify that they aren't officially in JavaScript yet.</p>
<p>So <code>@babel/plugin-transform-class-properties</code> becomes <code>@babel/plugin-proposal-class-properties</code>, and we would name it back once it gets into Stage 4.</p>
<h4 id="renames-drop-the-year-from-the-plugin-name">Renames: Drop the year from the plugin name</h4>
<p>Previous plugins had the year in the name, but it doesn’t seem to be necessary now.</p>
<p>So <code>@babel/plugin-transform-es2015-classes</code> becomes <code>@babel/plugin-transform-classes</code>.</p>
<p>Since years were only used for es3/es2015, we didn’t change anything from es2016 or es2017. However, we are deprecating those presets in favor of preset-env, and, for the template literal revision, we just added it to the template literal transform for simplicity.</p>
<h4 id="peer-dependencies-and-integrations">Peer dependencies and integrations</h4>
<p>We are introducing a peer dependencies on <code>@babel/core</code> for all the plugins (<code>@babel/plugin-class-properties</code>), presets (<code>@babel/preset-env</code>), and top level packages (<code>@babel/cli</code>, <code>babel-loader</code>).</p>
<blockquote>peerDependencies are dependencies expected to be used by your code, as opposed to dependencies only used as an implementation detail. — <a href="https://stackoverflow.com/a/34645112" rel="noopener">Stijn de Witt via StackOverflow</a>.</blockquote>
<p><code>babel-loader</code> already had a <code>peerDependency</code> on <code>babel-core</code>, so this just changes it to <code>@babel/core</code>. This change prevents people from trying to install these packages on the wrong version of Babel.</p>
<p>For tools that already have a <code>peerDependency</code> on <code>babel-core</code> and aren't ready for a major bump (since changing the peer dependency is a breaking change), we have published a new version of <code>babel-core</code> to bridge the changes over with the new version <a href="https://github.com/babel/babel-bridge" rel="noopener">babel-core@7.0.0-bridge.0</a>. For more information, check out <a href="https://github.com/facebook/jest/pull/4557#issuecomment-344048628" rel="noopener">this issue</a>.</p>
<p>Similarly, packages like <code>gulp-babel</code>, <code>rollup-plugin-babel</code>, and so on all used to have <code>babel-core</code> as a dependency. Now these will just have a <code>peerDependency</code> on <code>@babel/core</code>. Because of this, these packages don’t have to bump major versions when the <code>@babel/core</code> API hasn't changed.</p>
<h4 id="-5224-independent-publishing-of-experimental-packages"><a href="https://github.com/babel/babel/pull/5224" rel="noopener">#5224</a>: independent publishing of experimental packages</h4>
<p>I mention this in <a href="http://babeljs.io/blog/2016/12/07/the-state-of-babel" rel="noopener">The State of Babel</a> in the <code>Versioning</code> section. Here’s the <a href="https://github.com/babel/babylon/issues/275" rel="noopener">Github Issue</a>.</p>
<p>You might remember that after Babel 6, Babel became a set of npm packages with its own ecosystem of custom presets and plugins.</p>
<p>Since then, however, we have always used a “fixed/synchronized” versioning system (so that no package is on v7.0 or above). When we do a new release, such as <code>v6.23.0</code> , only packages that have updated code in the source are published with the new version. The rest of the packages are left as is. This mostly works in practice because we use <code>^</code> in our packages.</p>
<p>Unfortunately, this kind of system requires a major version to be released for all packages once a single package needs it. This either means that we make a lot small breaking changes (unnecessary), or we batch lots of breaking changes into a single release. Instead, we want to differentiate between the experimental packages (Stage 0, and so on) and everything else (es2015).</p>
<p>Because of this, we intend to make major version bumps to any experimental proposal plugins when the spec changes, rather than waiting to update all of Babel. So anything that is &lt; Stage 4 would be open to breaking changes in the form of major version bumps. The same applies to the Stage presets themselves (if we don’t drop them entirely).</p>
<p>This goes along with our decision to require TC39 proposal plugins to use the <code>-proposal-</code> name. If the spec changes, we will do a major version bump to the plugin and the preset it belongs to (as opposed to just making a patch version which may break for people). Then, we will need to deprecate the old versions and setup an infrastructure which will automatically update people so that they’re up to date on what the spec will become (and so they don't get stuck on something. We haven’t been so lucky with decorators.).</p>
<h4 id="the-env-option-in-babelrc-is-not-being-deprecated-">The <code>env</code> option in <code>.babelrc</code> is not being deprecated!</h4>
<p>Unlike in the <a href="https://babeljs.io/blog/2017/09/12/planning-for-7.0#deprecate-the-env-option-in-babelrc" rel="noopener">last post</a>, we just fixed the merging behavior to be <a href="https://twitter.com/left_pad/status/936687774098444288" rel="noopener">more consistent</a>.</p>
<p>The configuration in <code>env</code> is given higher priority than root config items. And instead of the weird approach of just using both, plugins and presets now merge based on their identity, so you can do this:</p><pre><code>{
presets: [
['env', { modules: false}],
],
env: {
test: {
presets: [
'env'
],
}
},
}</code></pre>
<p>with <code>BABEL_ENV=test</code> . It would replace the root env config with the one from test, which has no options.</p>
<h4 id="support-class-a-extends-array-oldest-caveat-">Support <code><a href="https://twitter.com/left_pad/status/940723982638157829" rel="noopener">class A extends Array</a></code> (oldest caveat)</h4>
<p>Babel will automatically wrap any native built-ins like <code>Array</code>, <code>Error</code>, and <code>HTMLElement</code> so that doing this just works when compiling classes.</p>
<h4 id="speed">Speed</h4>
<ul>
<li>Many <a href="https://twitter.com/rauchg/status/924349334346276864" rel="noopener">fixes</a> from <a href="https://twitter.com/bmeurer" rel="noopener">bmeurer</a> on the v8 team!</li>
<li>60% faster via the <a href="https://github.com/v8/web-tooling-benchmark" rel="noopener">web-tooling-benchmark</a> <a href="https://twitter.com/left_pad/status/927554660508028929" rel="noopener">https://twitter.com/left_pad/status/927554660508028929</a></li>
</ul>
<h4 id="preset-env-usebuiltins-usage">preset-env: <code>"useBuiltins": "usage"</code></h4>
<p><code>babel-preset-env</code> introduced the idea of compiling syntax to different targets. It also introduced, via the <code>useBuiltIns</code> option, the ability to only add polyfills that the targets don't support.</p>
<p>So with this option, something like:</p><pre><code class="language-js">import "babel-polyfill";</code></pre>
<p>can turn into</p><pre><code class="language-js">import "core-js/modules/es7.string.pad-start";
import "core-js/modules/es7.string.pad-end";
// ...</code></pre>
<p>if the target environment happens to support polyfills other than <code>padStart</code> or <code>padEnd</code>.</p>
<p>But in order to make that even better, we should only import polyfills that are “used” in the codebase itself. Why import <code>padStart</code> if it is not even used in the code?</p>
<p><code>"useBuiltins": "usage"</code> is our first attempt to tackle that idea. It performs an import at the top of each file, but only adds the import if it finds it used in the code. This approach means that we can import the minimum amount of polyfills necessary for the app (and only if the target environment doesn't support it).</p>
<p>So if you use <code>Promise</code> in your code, it will import it at the top of the file (if your target doesn't support it). Bundlers will dedupe the file if it is the same, so this approach won't cause multiple polyfills to be imported.</p><pre><code class="language-js">import "core-js/modules/es6.promise";
var a = new Promise();
import "core-js/modules/es7.array.includes";
[].includes
a.includes</code></pre>
<p>With type inference we can know if an instance method like <code>.includes</code> is for an array or not. Having a false positive is ok until that logic is better, since it is still better than importing the whole polyfill like before.</p>
<h4 id="misc-updates">Misc updates</h4>
<ul>
<li><code><a href="https://github.com/babel/babel/blob/master/packages/babel-template" rel="noopener">babel-template</a></code> is faster and easier to use</li>
<li><a href="https://github.com/facebook/regenerator" rel="noopener">regenerator</a> was released under the <a href="https://twitter.com/left_pad/status/938825429955125248" rel="noopener">MIT License</a> — it’s the dependency used to compile generators/async</li>
<li>“lazy” option to the <code>modules-commonjs</code> plugin via <a href="https://github.com/babel/babel/pull/6952" rel="noopener">#6952</a></li>
<li>You can now use <code>envName: "something"</code> in .babelrc or pass via cli <code>babel --envName=something</code> instead of having to use <code>process.env.BABEL_ENV</code> or <code>process.env.NODE_ENV</code></li>
<li><code>["transform-for-of", { "assumeArray": true }]</code> to make all for-of loops output as regular arrays</li>
<li>Exclude <code>transform-typeof-symbol</code> in loose mode for preset-env <a href="https://github.com/babel/babel/pull/6831" rel="noopener">#6831</a></li>
<li><a href="https://twitter.com/left_pad/status/942859244759666691" rel="noopener">Landed PR for better error messages with syntax errors</a></li>
</ul>
<h4 id="to-dos-before-release">To-dos Before Release</h4>
<ul>
<li><a href="https://github.com/babel/babel/issues/6766" rel="nofollow noopener">Handle </a><code><a href="https://github.com/babel/babel/issues/6766" rel="nofollow noopener">.babelrc</a></code><a href="https://github.com/babel/babel/issues/6766" rel="nofollow noopener"> lookup</a> (want this done before first RC release)</li>
<li><a href="https://github.com/babel/babel/pull/7091" rel="nofollow noopener">“overrides” support</a>: different config based on glob pattern</li>
<li>Caching and invalidation logic in babel-core.</li>
<li>Better story around external helpers.</li>
<li>Either implement or have a plan in place for versioning and handling polyfills independently from helpers, so we aren’t explicitly tied to core-js 2 or 3. People may have things that depend on one or the other, and won’t want to load both a lot of the time.</li>
<li>Either a <a href="https://github.com/babel/babel/pull/6107" rel="nofollow noopener">working decorator implementation</a>, or functional legacy implementation, with clear path to land current spec behavior during 7.x’s lifetime.</li>
</ul>
<h4 id="thanks">Thanks</h4>
<p>Shoutout to our team of volunteers:</p>
<p><a href="https://twitter.com/loganfsmyth" rel="noopener">Logan</a> has been really pushing hard to fix a lot of our core issues regarding configs and more. He’s the one doing all of that hard work.</p>
<p><a href="https://twitter.com/existentialism" rel="noopener">Brian</a> has been taking over maintenance of a lot of preset-env work and whatever else I was doing before ?</p>
<p><a href="https://twitter.com/TschinderDaniel" rel="noopener">Daniel</a> has always stepped in when we need the help, whether it be maintaining babel-loader or helping move the babylon/babel-preset-env repo’s over. And same with <a href="https://twitter.com/NicoloRibaudo" rel="noopener">Nicolo</a>, <a href="https://twitter.com/svensauleau" rel="noopener">Sven</a>, <a href="https://twitter.com/yavorsky_" rel="noopener">Artem</a>, and <a href="https://twitter.com/kovnsk" rel="noopener">Diogo</a> who have stepped up in the last year to help out.</p>
<p>I’m really looking forward to a release (I’m tired too — it’s almost been a year ?). But I also don’t want to rush anything just because. There’s been a lot of ups and downs throughout this release, but I’ve certainly learned a lot and I’m sure the rest of the team has as well.</p>
<p>And if I’ve learned anything at all this year, I should really heed this advice rather than just write about it.</p>
<blockquote class="twitter-tweet" data-lang="en">
<p lang="en" dir="ltr">"Before you go maintaining anything else, maintain your own body first" - Mom ?</p>— Henry Zhu (@left_pad) <a href="https://twitter.com/left_pad/status/944313617243099136?ref_src=twsrc%5Etfw">December 22, 2017</a>
</blockquote>
<blockquote>Also thanks to <a href="https://twitter.com/kosamari" rel="noopener">Mariko</a> for the <a href="https://twitter.com/kosamari/status/944272286055530496" rel="noopener">light push</a> to actually finish this post (2 months in the making)</blockquote>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
