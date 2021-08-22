---
card: "https://cdn-media-1.freecodecamp.org/images/1*cedi3xCR8cINoPAje7Nrjw.jpeg"
tags: [DIY]
description: by Alcides Queiroz
author: "Milad E. Fahmy"
title: "#LearnByDIY - How to create a JavaScript unit testing framework from scratch"
created: "2021-08-15T19:46:46+02:00"
modified: "2021-08-15T19:46:46+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-diy tag-testing tag-tech tag-programming tag-javascript ">
<header class="post-full-header">
<h1 class="post-full-title">#LearnByDIY - How to create a JavaScript unit testing framework from scratch</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*cedi3xCR8cINoPAje7Nrjw.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*cedi3xCR8cINoPAje7Nrjw.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*cedi3xCR8cINoPAje7Nrjw.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*cedi3xCR8cINoPAje7Nrjw.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*cedi3xCR8cINoPAje7Nrjw.jpeg" alt="#LearnByDIY - How to create a JavaScript unit testing framework from scratch">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Alcides Queiroz</p>
<h1 id="-learnbydiy-how-to-create-a-javascript-unit-testing-framework-from-scratch">#LearnByDIY - How to create a JavaScript unit testing framework from scratch</h1>
<figcaption>This is how the output of our testing framework will look like</figcaption>
</figure>
<p>I promise, this is gonna be fun. =)</p>
<p>Probably, automated tests are part of your daily routine (if not, please stop reading this article and <a href="https://www.amazon.com/Test-Driven-Development-By-Example/dp/0321146530" rel="noopener">start from the beginning</a>, by learning from the father of TDD himself). You’ve been using testing frameworks such as <a href="https://www.node-tap.org/" rel="noopener">Node-tap</a> (or <a href="https://github.com/substack/tape" rel="noopener">Tape</a>), <a href="https://jasmine.github.io/" rel="noopener">Jasmine</a>, <a href="https://mochajs.org/" rel="noopener">Mocha</a> or <a href="https://qunitjs.com/" rel="noopener">QUnit</a> for quite a while, just accepting that they do some magic stuff and not asking too many questions about them. Or, if you’re like me, maybe you’re always curious about how things work, including testing frameworks, of course.</p>
<p>This article will guide you through the process of creating a JavaScript testing framework from scratch, with a pretty decent DSL and a nicely detailed output. This is the first article in my <strong>#LearnByDIY </strong>series. The idea is to demystify certain kinds of software that we’re used to, by creating simpler versions of them.</p>
<h4 id="disclaimers">Disclaimers</h4>
<p>Before starting, some important notes:</p>
<ul>
<li>The goal of this article is <strong>not</strong> to create a production-ready tool. Please, <strong>don’t use the framework that we’ll be creating to test production code. </strong>Its purpose is purely educational. =)</li>
<li>Naturally, our little framework won’t be full-featured. Things such as async tests, parallel executions, a richer set of matchers, a CLI (with options like <code>--watch</code>), pluggable reporters and DSLs, etc., won’t be present in our final version. However, I <strong>strongly recommend </strong>that you keep toying with this project and maybe try to <strong>implement some of these missing parts</strong>. Perhaps you can transform it into a serious open source project. I’d love to know that this toy project became an “actual” testing framework.</li>
</ul>
<h3 id="-tyrion-a-tiny-testing-framework">⚔️ Tyrion - A tiny testing framework</h3>
<p>Our framework will be tiny, but “brave” for its size. So, there’s no better name than Tyrion (yeap, he’s my favorite GoT character, too).</p>
<figcaption>Tyrion is small, but brave.</figcaption>
</figure>
<p>We’ll be using Node.js in this project, with good and old CommonJS modules. The minimum Node version you’ll need is v8.6.0. If you have an older version, please update it.</p>
<p>Oh, I almost forgot… I’m using <a href="https://yarnpkg.com/lang/en/docs/install/" rel="noopener">Yarn</a> throughout this article, for things like <code>yarn init</code>, <code>yarn link</code> and so on, but you can use “vanilla” NPM in a similar manner (<code>npm init</code>, <code>npm link</code>, …).</p>
<h4 id="creating-the-project-folder-structure">Creating the project folder structure</h4>
<p>First, let’s create the following folder structure:</p><pre><code>tyrion/||______ proj/|      ||      |______ src/||______ playground/       |       |______ src/       |______ tests/</code></pre>
<p>In other “words”:</p><pre><code>$ mkdir -p tyrion/proj/src tyrion/playground/src tyrion/playground/tests</code></pre>
<p>We need two folders, each one to a separate project.</p>
<ul>
<li>The <code>proj</code> folder will contain the Tyrion framework package.</li>
<li>The <code>playground</code> folder will contain a disposable Node project for playing with our framework. It will serve as a lab during our development process.</li>
</ul>
<h4 id="initializing-the-node-projects">Initializing the Node projects</h4>
<p>Go to the <code>playground</code> folder and run <code>yarn init -y</code>. This command generates a basic package.json file. Open it, remove the <code>"main": "index.js",</code> line, and add a “scripts” entry like the one in the example below:</p><pre><code>{  "name": "playground",  "version": "1.0.0",  "scripts": {    "test": "node tests"  },  "license": "MIT"}</code></pre>
<p>After creating this file, let’s do the same for the other project, the Tyrion package itself. In the <code>proj</code> folder, run <code>yarn init</code>. It will prompt you for some information to properly create the package.json file. Enter the following values (in bold):</p><pre><code>question name (proj): tyrion &lt;enter&gt;question version (1.0.0): &lt;enter&gt;question description: &lt;enter&gt;question entry point (index.js): src/index.js &lt;enter&gt;question repository url: &lt;enter&gt;question author: &lt;enter&gt;question license (MIT): &lt;enter&gt;question private: &lt;enter&gt;</code></pre>
<p>Now, we need to install Tyrion as a development dependency in our playground project. If it was a published package, we’d just need to install it directly, through <code>npm i --dev</code> or <code>yarn add --dev</code>. As we only have Tyrion locally, this is not possible. Luckily, both Yarn and NPM have a feature to help developers during this package “inception” phase, allowing us to simulate a link between two packages (one as a dependency of the other).</p>
<p>To create this dependency link, go to the <code>proj</code> folder and run:</p><pre><code>$ yarn link</code></pre>
<p>Then, in the <code>playground folder</code>, run:</p><pre><code>$ yarn link tyrion </code></pre>
<p>That’s all. Now Tyrion is a dependency of the playground project.</p>
<h4 id="creating-some-modules-to-be-our-guinea-pigs-">Creating some modules to be our “guinea pigs”</h4>
<p>In the <code>playground/src</code> folder, let’s create two modules to be tested by Tyrion:</p>
<h4 id="writing-some-tests">Writing some tests</h4>
<p>Now is the time to use our imagination. How should Tyrion’s DSL look? Are you sick of <code>expect</code>, <code>assert</code> , and so on? Let’s make it different, just for the fun of it. I suggest <code>guarantee</code> as our assertion function. Do you like it?</p>
<p>Let’s write a few tests to see it more clearly. Of course, nothing will work, since we didn’t implement anything in our framework.</p>
<p>And a <code>tests/index.js</code> file, to import our tests in only one place.</p>
<p>Tyrion will borrow one of Node-tap’s principles:</p>
<blockquote><strong>Test files should be “normal” programs that can be run directly.</strong></blockquote>
<blockquote>That means that it can’t require a special runner that puts magic functions into a global space. <code>node test.js</code> is a perfectly ok way to run a test, and it ought to function exactly the same as when it’s run by the fancy runner with reporting and such. JavaScript tests should be JavaScript programs; not english-language poems with weird punctuation.</blockquote>
<blockquote><a href="https://www.node-tap.org/#tutti-i-gusti-sono-gusti" rel="noopener">https://www.node-tap.org/#tutti-i-gusti-sono-gusti</a>.</blockquote>
<p>As you might remember, in our playground’s package.json file, we have a <code>test</code> script which simply runs <code>node tests</code>. So, to execute it, just type <code>npm test</code> and hit enter. Yeap, do it. Let’s see it crashing:</p>
<p>This error is clear. We don’t have anything in our framework. No module is being exported at all. To fix it, in the <code>proj</code> folder, create a <code>src/index.js</code> file exporting an empty object, as you can see below:</p><pre><code>module.exports = {};</code></pre>
<p>Now, we’ll run <code>npm test</code> again:</p>
<p>Node is complaining because our <code>guarantee</code> function doesn’t exist. This is simple to fix, too:</p><pre><code>const guarantee = () =&gt; {};</code></pre><pre><code>module.exports = { guarantee };</code></pre>
<p>Run the test script again:</p>
<p>Voilà! No errors, but nothing happens, either. =(</p>
<h4 id="the-guarantee-function">The guarantee function</h4>
<p>Our assertion function should execute flawlessly if the supplied value is <a href="https://developer.mozilla.org/en-US/docs/Glossary/Truthy" rel="noopener"><em>truthy</em></a>, but should throw an error if it’s <a href="https://developer.mozilla.org/en-US/docs/Glossary/Falsy" rel="noopener"><em>falsy</em></a>.</p>
<p>Let’s implement it:</p>
<p>And to test if it works, let’s append another assertion to the end of our <code>number-utils.test.js</code> file:</p><pre><code>guarantee(123 === 321); // This should fail </code></pre>
<p>Now run it once more:</p>
<p>A-ha! It works! It’s ugly, but it’s functional.</p>
<h4 id="the-check-function">The check function</h4>
<p>We need a way to wrap assertions into test units. Basically, all testing frameworks have this feature, like the <code>it</code> function in Jasmine or the <code>test</code> function in Node-tap.</p>
<p>In Tyrion, our test unit function will be called <code>check</code>. Its signature should be <code>check(testDescription, callback)</code>. We also want it to give us a friendlier output, describing the passing and failing tests.</p>
<p>This is what it will look like:</p>
<p>Now, we can rewrite our tests to use the new <code>check</code> function:</p>
<p>And re-run our test suite:</p>
<p>Cool. But… what about some colors?? Wouldn’t it be a lot easier to distinguish between passing and failing tests?</p>
<p>Add the <a href="https://www.npmjs.com/package/colors" rel="noopener">colors</a> module as a dependency:</p><pre><code>yarn add colors</code></pre>
<p>So, import it at the top of the <code>proj/src/index.js</code> file:</p><pre><code>const colors = require('colors');</code></pre>
<p>And let’s put some colors in our output:</p><pre><code>const check = (title, cb) =&gt; {  try{    cb();    console.log(`${' OK '.bgGreen.black} ${title.green}`);  } catch(e) {    console.log(`${' FAIL '.bgRed.black} ${title.red}`);    console.log(e.stack.red);  }};</code></pre>
<p>That’s better. =)</p>
<h4 id="the-xcheck-function">The xcheck function</h4>
<p>It would be nice to have an easy way to disable a specific test, like the <code>xit</code> function in Jasmine. This can be easily implemented by creating a no-op function which just outputs that a test is disabled (well, it’s not completely no-op, but almost):</p><pre><code>const xcheck = (title, cb) =&gt; {  console.log(`${' DISABLED '.bgWhite.black} ${title.gray}`);};</code></pre><pre><code>module.exports = { guarantee, check, xcheck };</code></pre>
<p>So, import the <code>xcheck</code> function in the <code>number-utils.test.js</code> file and disable one of our tests:</p><pre><code>const { guarantee, check, xcheck } = require('tyrion');const numberUtils = require('../src/number-utils');</code></pre><pre><code>// method: isPrimexcheck('returns true for prime numbers', () =&gt; {  guarantee(numberUtils.isPrime(2));  guarantee(numberUtils.isPrime(3));  guarantee(numberUtils.isPrime(5));  guarantee(numberUtils.isPrime(7));  guarantee(numberUtils.isPrime(23));});</code></pre>
<p>And here’s how it behaves:</p>
<h4 id="test-summary-and-exit-code">Test summary and exit code</h4>
<p>If we wanted to use Tyrion in a CI server, it would need to finish its process with different exit codes for error and success conditions.</p>
<p>Another desirable feature is a test summary. It would be nice to know how many tests passed, failed, or skipped (the disabled ones). For this, we could increment some counters in both <code>check</code> and <code>xcheck</code> functions.</p>
<p>We will create the <code>end</code> function, which prints the test summary and finishes with the appropriate exit code:</p>
<p>And don’t forget to call it in the <code>playground/tests/index.js</code> file:</p><pre><code>const { end } = require('tyrion');</code></pre><pre><code>require('./string-utils.test');require('./number-utils.test');</code></pre><pre><code>end();</code></pre>
<p>Or maybe:</p><pre><code>const tyrion = require('tyrion');</code></pre><pre><code>require('./string-utils.test');require('./number-utils.test');</code></pre><pre><code>tyrion.end();</code></pre>
<p>Now, let’s re-run <code>npm test</code>:</p>
<p>Great, it works.</p>
<h4 id="the-group-function">The group function</h4>
<p>Many test frameworks have some way of grouping related tests. In Jasmine, for example, there is the <code>describe</code> function. We will implement a <code>group</code> function for this purpose:</p>
<p>And update our tests to use this new function:</p>
<p>Here’s the new output:</p>
<p>Well, the good news is that it works. The bad news is that it’s getting hard to understand. We need a way to indent this output in order to make it more readable:</p>
<p>Run it again:</p>
<p>That’s way better!</p>
<p>So, how does it work?</p>
<ul>
<li>The <code>repeat</code> function repeats a string <code>n</code> times.</li>
<li>The <code>indent</code> function repeats an indent (of four spaces) <code>n</code> times by using the <code>repeat</code> function.</li>
<li>The <code>indentLines</code> function indents a string with multiple lines by adding <code>n</code> indents to the beginning of each line. We’re using it to indent error stacks.</li>
<li>The <code>indentLevel</code> variable is incremented at the beginning of each group execution and decremented at its end. This way, nested groups can be correctly indented.</li>
</ul>
<h4 id="more-matchers">More matchers</h4>
<p>The <code>guarantee</code> function is not flexible enough for a lot of scenarios. We need a richer set of matchers in order to make our tests more meaningful.</p>
<p>First, create the <code>matchers</code> folder:</p><pre><code>$ mkdir proj/src/matchers</code></pre>
<p>Now, we’ll create each matcher in a separate file:</p>
<p>The <code>same</code> matcher uses the strict equality operator (===) to test if two arguments are exactly the same object (for reference types) or equal (for primitive types). It behaves similarly to the <code>toBe</code> matcher in Jasmine and <code>t.equal</code> in node-tap.</p>
<p><strong>Note:</strong> Node-tap also has a matcher called <code>t.same</code>, but it works differently (it won’t verify if two objects are exactly the same, but if both are deeply equivalent).</p>
<p>The <code>identical</code> matcher verifies that two arguments are equivalent. It uses the <code>==</code> operator for comparing values.</p>
<p>The <code>deeplyIdentical</code> matcher does a deep comparison of two objects. This kind of comparison can be considerably complex, or at least too complex for this article’s purpose. So, let’s install an existing module to handle deep equality and use it in our matcher:</p><pre><code>$ yarn add deep-equal</code></pre>
<p>Then:</p>
<p>This is how an error will look:</p>
<p>The <code>falsy</code> matcher will fail if the supplied value is truthy.</p>
<p>The <code>truthy</code> matcher works in a similar manner to our <code>guarantee</code> function. It passes when the supplied value is truthy and breaks if it’s falsy.</p>
<p>The <code>throws</code> matcher will pass if a function throws an error. It’s possible to specify the wanted error message, but this is not mandatory.</p>
<p>An <code>index.js</code> file to re-export all matchers:</p>
<p>And finally let’s glue them all together:</p>
<p>You can use our new matchers this way:</p><pre><code>const { guarantee, check } = require('tyrion');</code></pre><pre><code>check('playing with our new matchers', () =&gt; {  // The original guarantee function still works  guarantee(123 === 123);</code></pre><pre><code>  guarantee.truthy('abc');  guarantee.falsy(null);</code></pre><pre><code>  const a = { whatever: 777 };  const b = a;  guarantee.same(a, b);  guarantee.identical(undefined, null);</code></pre><pre><code>  const c = { whatever: { foo: { bar: 'baz' } } };  const d = Object.assign({}, c);  guarantee.deeplyIdentical(c, d);</code></pre><pre><code>  function boom() { throw new Error('Some error...'); }  guarantee.throws(boom);  guarantee.throws(boom, 'Some error...');});</code></pre>
<h4 id="the-beforeeach-function">The beforeEach function</h4>
<p>To implement a <code>beforeEach</code> function, we need to use a stack to accumulate all <code>beforEach</code> callbacks. This is done for each new scoped level created every time a group is declared:</p>
<p>How does it work?</p>
<ul>
<li>Every time a group is declared, we’re pushing a new array to the <code>beforeEachStack</code> variable. This array will accumulate all <code>beforeEach</code> callbacks declared in that scope.</li>
<li>After a group execution is completed, we remove the array at the top of our callbacks stack.</li>
<li>The <code>beforeEach</code> function receives a callback and appends it to the array at the top of our callbacks stack.</li>
<li>At the beginning of each <code>check</code> function, we’re calling every <code>beforeEach</code> callback in all levels of our stack.</li>
</ul>
<h4 id="the-beforeall-function">The beforeAll function</h4>
<p>Our last addition will be the <code>beforeAll</code> function. <strong>For simplicity’s sake</strong>, we’re assuming that calls to the <code>beforeAll</code> function will always be put before all groups and tests (<strong>or</strong>, when scoped within a group, at its very top).</p>
<p>Otherwise, if we wanted to ensure that the <code>beforeAll</code> function works correctly even in the middle or at the end of a group, we should dramatically change our existing logic. Well, we’re not going to do that, since it isn’t a rational usage of this function.</p>
<p>Our version of <code>beforeAll</code> will just receive a callback and immediately execute it.</p><pre><code>const beforeAll = cb =&gt; cb();</code></pre><pre><code>module.exports = {   group, check, xcheck, guarantee, beforeAll, end };</code></pre>
<p>An example of usage:</p><pre><code>const { guarantee, check, group, beforeAll } = require('tyrion');</code></pre><pre><code>let a;beforeAll(() =&gt; {  a = { something: 'example' };});</code></pre><pre><code>group('playing with the beforeAll function', () =&gt; {  let b;  beforeAll(() =&gt; {    b = { something: 'example' };  });</code></pre><pre><code>  check('some test', () =&gt; {    guarantee.deeplyIdentical(a, b);  });</code></pre><pre><code>  check('another test', () =&gt; {    guarantee.identical(11, 11);  });});</code></pre>
<h4 id="the-final-version-of-tyrion">The final version of Tyrion</h4>
<p>It has been a long journey, but Tyrion is finally complete. =)</p>
<p>I added a SILENT option which disables logging. It’s being used to make it easier to test Tyrion (yep, testing frameworks need to be tested too).</p>
<p>The complete project is available <a href="https://www.github.com/alcidesqueiroz/tyrion" rel="noopener">here</a>.</p>
<h4 id="possible-improvements">Possible improvements</h4>
<p>Tyrion lacks many features, like:</p>
<ul>
<li>Support for async tests</li>
<li>Parallel execution of tests</li>
<li><code>afterEach</code> and <code>afterAll</code> functions</li>
<li>A <code>xgroup</code> function, which disables an entire group</li>
<li>A function similar to <a href="https://jasmine.github.io/api/edge/global.html#fit" rel="noopener">Jasmine’s fit</a></li>
<li>Spies</li>
<li>Decoupling DSL from reporting logic.</li>
<li>Pluggable reporters</li>
<li>A terminal CLI (with a <code>--watch</code> option)</li>
<li>Yet more matchers</li>
<li>Friendlier error stacks</li>
</ul>
<p>I encourage you to keep playing with this project. Feel free to use and expand it. Please let me know your thoughts, suggestions, and experiments by leaving a comment below. =)</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
