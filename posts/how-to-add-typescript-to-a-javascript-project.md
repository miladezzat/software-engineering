---
card: "/images/default.jpg"
tags: [Typescript]
description: I love writing code. And I want to be really good at it. But
author: "Milad E. Fahmy"
title: "How to Add TypeScript to a JavaScript Project"
created: "2021-08-15T19:28:37+02:00"
modified: "2021-08-15T19:28:37+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-typescript tag-javascript ">
<header class="post-full-header">
<h1 class="post-full-title">How to Add TypeScript to a JavaScript Project</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/08/1_9XMpTyccrky0eW5Wz6DoWQ.png 300w,
/news/content/images/size/w600/2020/08/1_9XMpTyccrky0eW5Wz6DoWQ.png 600w,
/news/content/images/size/w1000/2020/08/1_9XMpTyccrky0eW5Wz6DoWQ.png 1000w,
/news/content/images/size/w2000/2020/08/1_9XMpTyccrky0eW5Wz6DoWQ.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/08/1_9XMpTyccrky0eW5Wz6DoWQ.png" alt="How to Add TypeScript to a JavaScript Project">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>I love writing code. And I want to be really good at it. But somehow, writing JavaScript has never been my strong suit. </p>
<p>No matter how much I practiced, the same mistakes kept appearing in production: <code>cannot read property &lt;&gt; of undefined</code> exceptions, the famous <code>[Object object]</code> string, and even function calls with an invalid number of parameters.<br></p>
<p>What's more, most of the codebases I was working on were really large JavaScript ones. So here is a nice diagram of how it felt to be me:</p>
<figcaption>We can do much better!</figcaption>
</figure>
<p>In this post, I’ll avoid explaining why TypeScript is awesome (and it is), and focus on the tasks you need to complete if you want to migrate your vanilla JavaScript project to a mixed TypeScript project.</p>
<p>By the end of the post, you will be a happier person and will be able to answer the following questions:</p>
<ul>
<li>How can I add types to my JavaScript project?</li>
<li>What is TypeScript?</li>
<li>How can I use TypeScript in a JavaScript project?</li>
<li>What are the steps to convert a JavaScript application to support TypeScript?</li>
<li>How can I take care of build &amp; packaging?</li>
<li>How can I take care of linting?</li>
<li>How can I “sell” TypeScript to my organization and developers?</li>
</ul>
<h2 id="how-can-i-add-types-to-my-javascript-project">How can I add types to my JavaScript project?</h2>
<p>Vanilla JavaScript does not support types at the moment, so we need some sort of abstraction on top of JavaScript in order to do so. </p>
<p>Some common abstractions are using Facebook’s static type-checker called <code><a href="https://github.com/facebook/flow" rel="noopener">flow</a></code> and Microsoft's language called :<code><a href="https://github.com/microsoft/TypeScript" rel="noopener">typescript</a></code> .</p>
<p>This blog post will examine the usage and addition of TypeScript to your JavaScript project.</p>
<h2 id="what-is-typescript">What is Typescript?</h2>
<p>TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.</p>
<figcaption>If you know javascript, you are more than half way there.</figcaption>
</figure>
<p>TypeScript consists of a few parts. The first is the TypeScript language — this is a new language which contains all JavaScript features . Check out the <a href="https://github.com/Microsoft/TypeScript/blob/master/doc/spec.md" rel="noopener">specs</a> for more information.</p>
<p>The second is the TypeScript compiler, <code>tsc</code> (the type system engine) which is a compilation engine that builds ts files and yields js files.</p>
<h2 id="hello-world-in-typescript">Hello world in TypeScript</h2>
<p>As an example, these are the steps you need to take to write your first TypeScript application:</p>
<ol>
<li>install TypeScript with <code>npm i typescript</code></li>
<li>create a folder called <code>example</code> and cd into it (in your terminal)</li>
<li>create a file called <code>hello.world.ts</code></li>
<li>write the following code in it:</li>
</ol>
console.info(firstWords);
</code></pre>
<figcaption>Hello world In TypeScript – My first TypeScript program!</figcaption>
</figure>
<p>and then save it.</p>
<p>5. &nbsp;run the <code>tsc</code> command to run the TypeScript compiler on the current folder</p>
<p>6. &nbsp;notice that you got a <code>hello.js</code> file that you can now run :) </p>
<p>7. &nbsp;run <code>node ./hello.js</code></p>
<h2 id="how-can-i-use-typescript-in-a-javascript-project">How can I use TypeScript in a JavaScript project?</h2>
<p>There are couple of strategies for doing this "migration" (company-wise and code-wise). I've listed them below by their "cost" and by how much value they provide. </p>
<p>I would suggest starting with "application TS support" and moving forward after you have proved the value to your development team.</p>
<figcaption>The typescript migration process, iterate through the process only if you prove value.</figcaption>
</figure>
<h3 id="the-small-step-for-man-approach-adding-ts-support-for-existing-applications">The "small step for man" approach - Adding TS support for existing applications</h3>
<figcaption>One small step for a developer. types are wonderful :)&nbsp;</figcaption>
</figure>
<p>My first suggestion is to create a mixture of the two languages in a single project, and then write all “future” code in TypeScript.</p>
<p>The combination of two languages in a single project sounds pretty awful at first, but it works quite well since TS was built for gradual usage. At first it can be used just as JS with .ts files and weird import lines.</p>
<p>In this strategy, we will be compiling the migrated TypeScript files and just copying the JavaScript files to an output folder.</p>
<p>The huge benefit of this approach is that it allows a gradual learning curve for the development team (and for you) with language and it’s features. It also gives you hands-on experience and insight into its pros and cons.</p>
<p>I highly recommend starting from this step and then iterating on it with your team before moving forward. For a quick “how to do this”, scroll down to <code>The steps to convert a javascript application to support typescript</code> part.</p>
<h3 id="the-open-for-business-approach-adding-ts-support-for-existing-libraries-">The open for business approach - Adding TS support for existing libraries.</h3>
<p>After you have some hands on experience with TS and your development team agrees it's worth moving forward, I suggest converting your in-house libraries and modules to support TS. </p>
<p>This can be done in two ways:</p>
<p><strong>The first way</strong> involves using <a href="https://www.typescriptlang.org/docs/handbook/declaration-files/templates/module-d-ts.html">declaration files</a>. A simple addition of <code>d.ts</code> files helps the TS compiler type-check existing JavaScript code and gives you auto-completion support in your IDE. </p>
<p>This is the "cheapest" option, as it doesn't require any code changes to the library at all. It also gives you maximum power and types support in your future code.</p>
<p><strong>The second way</strong> is to perform a full re-write of TypeScript, which might be time-consuming and error-prone. I would advise against it, unless it proves ROI worthy to your team.</p>
<h3 id="the-skeleton-a-step-towards-the-future">The skeleton - a step towards the future</h3>
<figcaption>Typescript skeleton is the way to ensure a bright future!</figcaption>
</figure>
<p>I assume most developers are "lazy" and usually start their application by copying from a skeleton (which usually contains logging, metrics, configuration, and so on).</p>
<p>This step helps you navigate your way into a bright future, by creating an "official" skeleton for your company. It will be 100% TS, and deprecates the old JS skeleton if one exists.</p>
<p>This <a href="https://github.com/microsoft/TypeScript-Node-Starter#getting-started">typescript-node-starter</a> is a really good first project to start with.</p>
<h3 id="the-all-in-approach-converting-a-full-codebase-from-js-into-ts"><strong>The all in approach - Converting a full codebase from JS into TS</strong></h3>
<figcaption>I'm all in! Let's make all things typed!</figcaption>
</figure>
<p>This option requires a total rewrite from JavaScript code to TypeScript. <br><br>I would recommend doing this as a final step in the TS migration process since it requires a total application re-write and deep knowledge of TypeScript and it's features.</p>
<p>You can do such a rewrite (it's a long process) in the following manner:</p>
<ol>
<li>Define clear types for your application business logic, API, &amp; HTTP's</li>
<li>Use <code>@types</code> packages for all the libraries in your <code>package.json</code>. Most of the libraries out there support TS, and in this process I suggest migrating them one by one (by just adding <code>@types/&lt;package_name&gt;</code> in your <code>package.json</code> file).</li>
<li>Convert your application logical components in order of their importance. The more unique the business logic, the better.</li>
<li>Convert the IO parts of your application, database layers, queues and so on.</li>
<li>Convert your tests.</li>
</ol>
<figcaption>Types are a cause for a celebration :)&nbsp;</figcaption>
</figure>
<p>Keep in mind that there are automated tools designed to ease this process, for example <a href="https://github.com/airbnb/ts-migrate">ts-migrate</a> from the Airbnb team. </p>
<p>It tackles this problem from a different perspective, and converts all files to TypeScript. It also allows gradual improvements (like mentioned in the steps above) while the entire codebase is TypeScript from day one.</p>
<h2 id="how-to-convert-a-javascript-application-to-support-typescript-">How to convert a JavaScript application to support TypeScript.</h2>
<h3 id="install-typescript">Install typescript </h3>
<p>by running : <code>npm install typescript</code>.</p>
<h3 id="typescript-config-file">Typescript config file</h3>
<p>Add a typescript config file, which can be created using the <code>tsc --init</code> command in you CLI.</p>
<p>Here is an example of how our initial config looked:</p><pre><code class="language-json">{
"compilerOptions": {
"target": "esnext",
"module": "commonjs",
"allowJs": true,
"checkJs": false,
"outDir": "dist",
"rootDir": ".",
"strict": false,
"esModuleInterop": true /* Enables emit interoperability between CommonJS and ES Modules via creation of namespace objects for all imports. Implies 'allowSyntheticDefaultImports'. */,
"forceConsistentCasingInFileNames": true, /* Disallow inconsistently-cased references to the same file. */
"declaration": true, /* Generates corresponding '.d.ts' file. */
"strictNullChecks": true,
"resolveJsonModule": true,
"sourceMap": true,
"baseUrl": ".",
"paths": {
"*": [
"*",
"src/*",
"src/setup/*",
"src/logic/*",
"src/models/*",
"config/*"
]
},
},
"exclude": ["node_modules", "dist"],
"include": [
"./src",
"./test",
"./*",
"./config"
]
}</code></pre>
<p>A few things to notice above:</p>
<ul>
<li>We read all the files in the <code>src</code> or <code>test</code> or <code>config</code> directory (using the <code>include</code> flag).</li>
<li>We accept JavaScript files as inputs (using the <code>allowJs</code> flag).</li>
<li>We emit all of the output files in <code>build</code> (using the <code>outDirflag</code>).</li>
</ul>
<h3 id="create-your-first-ts-file-in-your-project">Create your first .TS file in your project </h3>
<p>I recommend starting by adding a simple TypeScript file (or changing a really simple JS file to a TS one) and deploying. Take this migration one step at a time.</p>
<h3 id="take-care-of-your-package-json-file">Take care of your package.json file</h3>
<p>Here is how our <code>package.json</code> looks before and after:</p>
"scripts": {
"start": "node ./application.js",
"mocha": "mocha --recursive --reporter spec -r test/bootstrap.js",
"test": "npm run mocha -- test/ -r test/integration/bootstrap.js",
}
}</code></pre>
<figcaption>Before</figcaption>
</figure>
"scripts": {
"start": "node ./dist/application.js",
"build-dist": "./node_modules/typescript/bin/tsc",
"mocha": "mocha --recursive --reporter spec -r ./dist/test/bootstrap.js",
"test": "npm run mocha -- ./dist/test/ -r ./dist/test/integration/bootstrap.js"
}
}</code></pre>
<figcaption>After</figcaption>
</figure>
<p>As you can see, most of the changes were about adding the prefix <code>dist</code> to most of our build commands. We also added a <code>build-dist</code> script that compiles our codebase and moves all files to a dedicated folder called <code>dist</code>.</p>
<h3 id="add-source-map-support">Add source-map-support</h3>
<p>One of the big issues when adding TypeScript to your project is that you are adding a layer of indirection between the code you write and the code that actually runs in production (since <code>.ts</code> is transpiled &nbsp;to <code>.js</code> &nbsp;in run time).</p>
<p>For example, imagine the following TypeScript program:</p><pre><code class="language-typescript">const errorMessage: string = "this is bad"
throw new Error(a)</code></pre>
<p>When we run it, it will throw the following stack-trace:</p>
at Object.&lt;anonymous&gt; (/Users/dorsev/work/git/example/hello.js:3:7)</code></pre>
<figcaption>Wait! but we only have 2 lines in our typescript code!</figcaption>
</figure>
<p>This is problematic since our code-base contains only <code>.ts</code> files. And since most production code contains hundreds of lines, it will be really time-consuming translating these numbers and files properly. </p>
<p>Luckily for us, there is a solution for this called <a href="https://www.npmjs.com/package/source-map-support">source-map-support</a>!</p>
<p>This allows us to ensure that stack-traces will have proper <code>.ts</code> file names and line numbers like we are used to :) </p>
<p>This can be done by running <code>npm install source-map-support</code> and then adding the following line in the first lines of your application:</p>
<p><code>require('source-map-support').install();</code></p>
<p>The code now looks like this:</p>
const a:string = "this is bad"
throw new Error(a)</code></pre>
<figcaption>hello.world.ts</figcaption>
</figure>
<p>And when we compile it we run <code>tsc --sourcemap hello.ts</code>. Now we get the following stack-trace which is awesome :) </p><pre><code class="language-victory">Error: this is bad
at Object.&lt;anonymous&gt; (/Users/dorsev/work/git/example/hello.ts:3:7)</code></pre>
<p>In recent versions of <code>nodejs</code>, this is supported natively by using the <code>--enable-source-maps</code> <a href="https://github.com/nodejs/node/pull/29564">flag</a>.</p>
<h2 id="how-to-take-care-of-your-build-travis-packaging">How to take care of your build (Travis) &amp; packaging</h2>
<p>Let's just examine the before and after changes on our build configuration file.</p>
<p>This is how our <code>.travis</code> file looked before (simplified edition):</p>
include:
- &amp;build-and-publish
before_script:
- npm install --no-optional --production
- npm prune --production
before_deploy:
- XZ_OPT=-0 tar --exclude=.git --exclude=reports.xml --exclude=${ARTIFACTS_MAIN_DIR}
--exclude=.travis.yml --exclude=test -cJf "${ARTIFACTS_PATH}/${REPO_NAME}".tar.xz * .??*
- &amp;test
before_script:
- npm install --no-optional
script:
- echo "Running tests"
- npm run lint &amp;&amp; npm test</code></pre>
<figcaption>Simplified .travis before typescript</figcaption>
</figure>
<p>And this is how it looked after:</p>
include:
- &amp;build-and-publish
before_script:
- npm install --no-optional --production
- npm run build-dist  # Build dist folder
- npm prune --production
before_deploy:
- cp -rf config/env-templates ./dist/config/
- cp -rf node_modules ./dist/
- cd dist
- XZ_OPT=-0 tar --exclude=.git --exclude=reports.xml --exclude=${ARTIFACTS_MAIN_DIR} --exclude=.travis.yml --exclude=test -cJf "${REPO_NAME}.tar.xz" *
- mv ${REPO_NAME}.tar.xz "../${ARTIFACTS_PATH}"
- cd ..
- &amp;test
before_script:
- npm install --no-optional
- npm run build-dist
script:
- echo "Running tests"
- npm run lint &amp;&amp; npm test</code></pre>
<figcaption>Simplified .travis after typescript</figcaption>
</figure>
<p>Notice most changes concern "packaging" to the <code>tar.xz</code> file and running the <code>build-dist</code> command before accessing the <code>dist</code> folder.</p>
<h2 id="how-can-i-take-care-of-linting">How can I take care of&nbsp;linting?</h2>
<p>There are a couple of linting solutions available.</p>
<p>The first solution we used was <a href="https://github.com/vvakame/typescript-formatter">tsfmt</a>  –  but then we decided against it later on because it requires you to maintain two separate configurations for your project (one for TypeScript using <code>tsfmt</code> and a separate one for JavaScript using <code>eslint</code>). The project also looks deprecated.</p>
<p>We then found <a href="https://palantir.github.io/tslint/">TSLint</a>  which redirected us to the <a href="https://github.com/typescript-eslint/typescript-eslint">eslint plugin for TypeScript</a>. We then configured it as follows:</p>
<p>This was our <code>eslintrc.js</code>:</p><pre><code class="language-javascript">module.exports = {
rules: {
indent: [2, 2, {
SwitchCase: 1
}],
'no-multi-spaces': 2,
'no-trailing-spaces': 2,
'space-before-blocks': 2,
},
overrides: [{
files: ['**/*.ts'],
parser: '@typescript-eslint/parser',
plugins: ['@typescript-eslint'],
extends: ['plugin:@typescript-eslint/eslint-recommended', 'plugin:@typescript-eslint/recommended']
}]
}</code></pre>
<p>Which we configured to run using a <code>lint-fix</code> command in our <code>package.json</code> which looks as follows:</p><pre><code class="language-json">{
"scripts": {
"lint-fix": "node_modules/.bin/eslint . --fix"
},
"pre-commit": ["lint-fix"]
}</code></pre>
<h2 id="how-to-sell-typescript-to-your-development-team">How to "sell" typescript to your development team </h2>
<p>I believe one of the most critical aspects of introducing TypeScript to your organization is the "pitch" and how you present it to your development team.</p>
<p>Here is the <a href="https://github.com/dorsev/typescript-talk/blob/master/typescript_meetup.md  ">presentation</a> we presented internally which revolved around the following topics:</p>
<ol>
<li>Explain why we think TypeScript is awesome</li>
<li>What is TypeScript</li>
<li>Some basic code examples. The main point in this part is not to "teach" 100% TypeScript, since people will do that on their own. Instead, give people the feeling &nbsp;that they can read and write TypeScript, and that the learning curve is not so hard.</li>
<li>Advanced code examples, like Union types and Algebraic data-types which provide enormous values to a JS developer. This are a real treats, on top of typed-language and the compiler that will attract your developers to it. </li>
<li>How to start using it. Encourage people to download the <code>vs-code</code> IDE and to add an annotation (<a href="https://code.visualstudio.com/docs/nodejs/working-with-javascript#_type-checking-javascript">//@ts-check</a>) so they can start seeing the magic! &nbsp;In our company, we prepared in advances some really cool mistakes that <code>ts-check</code> catches, and we did a live demo (2-3 minutes) to show how fast the TypeScript compiler can help them &nbsp;using JS docs with type annotations or <code>ts-check</code>).</li>
<li>Deep dive into some features. Explain <code>ts.d</code> files and <code>@types packages</code> which are some of the things you will encounter really early in your TypeScript codebases.</li>
<li>Live PR's from your work. We showed the PR we created early on, and encouraged people to review it and try it out for themselves. </li>
<li>Share some cool resources. There is a lot of content online, and it's hard to figure out good from bad. Do your teammates a solid and dig deeper and try to find quality content about the tools you use and need. Scroll down to the conclusion for my resources.</li>
<li>Create a public pull request .  I recommend trying to get as much support as possible for its approval.</li>
</ol>
<figcaption>Adding typescript to a project! hurray!&nbsp;</figcaption>
</figure>
<p>10. &nbsp;Create a positive buzz in your organization about the change!</p>
<p>I highly recommend tweaking this list according to your team, standards, and time-constraints.</p>
<h2 id="conclusion">Conclusion</h2>
<p><strong>Typescript is super awesome</strong>! If you are writing production grade software and the business requirements and availability are high, I strongly encourage you to give typescript a try. </p>
<p><strong>Just remember to take it one step at a time.</strong> New languages and frameworks are hard, so take the time to learn and to educate yourself and your team before pushing this process forward. </p>
<p><strong>Create a short feedback loop and value proposition</strong>. It's hard to "sell" a new language to your team and management as it takes time and resources. </p>
<p>So design your migration process with short feedback loops, and try to define clear KPI's (fewer bugs in production, easier refactoring times, and so on) and make sure the value proposition for your use-case is constantly justified until it becomes the de-facto standard. &nbsp; </p>
<p><strong>Make learning resources readily available</strong>. I really enjoyed <a href="https://youtu.be/vxvQPHFJDRo">this</a> talk about TypeScript first steps and this <a href="https://dylanvann.com/incrementally-migrating-to-typescript/">blog post</a> about incremental migration to TypeScript. </p>
<p>Also, don't miss out on the <code><a href="https://github.com/denoland/deno">deno</a></code> project and the <code><a href="https://github.com/TypeStrong/ts-node">ts-node</a></code> project. I'm super excited and looking forward to using them soon.</p>
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
