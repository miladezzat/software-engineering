---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9ca766740569d1a4ca76f2.jpg"
tags: [JavaScript]
description: Jasmine is the most popular JS library for unit testing web a
author: "Milad E. Fahmy"
title: "An Introduction to Jasmine Unit Testing"
created: "2021-08-15T19:39:19+02:00"
modified: "2021-08-15T19:39:19+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-testing tag-programming tag-productivity tag-tech ">
<header class="post-full-header">
<h1 class="post-full-title">An Introduction to Jasmine Unit Testing</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9ca766740569d1a4ca76f2.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9ca766740569d1a4ca76f2.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9ca766740569d1a4ca76f2.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9ca766740569d1a4ca76f2.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9ca766740569d1a4ca76f2.jpg" alt="An Introduction to Jasmine Unit Testing">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Jasmine is the most popular JS library for unit testing web apps. In this tutorial, designed for beginners, we’ll present you with a quick and complete guide to testing with Jasmine.</p>
<p>You’ll get introduced to Jasmine, a popular behavior-driven testing framework for JavaScript. We’ll also see a simple practical example on how to write unit tests with Jasmine which can help you easily check for bugs in your code.</p>
<p>In nutshell, we’ll see how to write test suites, specifications and expectations and how to apply built-in Jasmine matchers or build your own custom matchers</p>
<p>We’ll also see how you can group suites for the sake of organizing your tests for more complex code bases.</p>
<h3 id="introducing-jasmine">Introducing Jasmine</h3>
<p><a href="http://jasmine.github.io/" rel="noopener">Jasmine</a> is a very popular JavaScript behavior-driven development (In BDD, you write tests before writing actual code) framework for unit testing JavaScript applications. It provides utilities that can be used to run automated tests for both synchronous and asynchronous code.</p>
<p>Jasmine has many features such as:</p>
<ul>
<li>It’s fast and has low overhead and no external dependencies.</li>
<li>It’s a batteries included library and offers everything you need for testing your code.</li>
<li>It’s available both for Node and the browser.</li>
<li>It can be used with other languages like Python and Ruby.</li>
<li>It does not require the DOM.</li>
<li>It provides a clean and easy to understand syntax and also a rich and straightforward API.</li>
<li>We can use natural language to describe the tests and the expected results.</li>
</ul>
<p>Jasmine is an open source tool that’s available under the permissive MIT license. As of this writing the latest major version is <em>Jasmine 3.0</em> which provides new features and some breaking changes. The <em>2.99</em> release of Jasmine will provide different deprecation warnings for suites that have different behavior in version <em>3.0</em> which will make it easy for developers to migrate to the new version.</p>
<p>You can read about the new features and breaking changes from this <a href="https://github.com/jasmine/jasmine/blob/v3.0.0/release_notes/3.0.md" rel="noopener">document</a>.</p>
<h3 id="using-jasmine">Using Jasmine</h3>
<p>You can use Jasmine in many different ways:</p>
<ul>
<li>in the old way by including both the Jasmine core and your test files using a <code>&lt;scri</code>pt&gt; tag,</li>
<li>as a CLI tool using Node.js,</li>
<li>as a library in Node.js,</li>
<li>as a part of a build system like Gulp.js or Grunt.js via <a href="https://github.com/gruntjs/grunt-contrib-jasmine" rel="noopener">grunt-contrib-jasmine</a> and <a href="https://github.com/jasmine/gulp-jasmine-browser" rel="noopener">gulp-jasmine-browser</a></li>
</ul>
<p>You can also use Jasmine for testing your Python code with <a href="https://github.com/jasmine/jasmine-py" rel="noopener">jasmine-py</a> which can be installed from PyPI using the <code>pip install jasmine</code> command. This package contains both a web server that serves and executes a Jasmine suite for your project and a CLI script for running tests and continuous integrations.</p>
<p>Jasmine is also available for Ruby projects via <a href="https://github.com/jasmine/jasmine-gem" rel="noopener">jasmine-gem</a> which can be installed by adding <code>gem 'jasmine'</code> to your Gemfile and running <code>bundle install</code>. It includes a server for serving and running tests, a CLI script and also generators for Ruby on Rails projects.</p>
<p>Now let’s focus on how to use Jasmine with JavaScript:</p>
<h3 id="using-standalone-jasmine">Using Standalone Jasmine</h3>
<p>Start by downloading the latest version of Jasmine from the <a href="https://github.com/jasmine/jasmine/releases" rel="noopener">releases</a> page.</p>
<p>Then simply extract the zip file, preferably inside a folder in the project you want to test.</p>
<p>The folder will contain a bunch of default files and folders:</p>
<p><code>/src</code>: contains the source files that you want to test. This may be either deleted if your already have your project's folder setup or can also be used when appropriate for hosting your source code.</p>
<p><code>/lib</code>: contains the core Jasmine files.</p>
<p><code>/spec</code>: contains the tests that you are going to write.</p>
<p><code>SpecRunner.html</code>: this file is used as a test runner. You run your specs by simply launching this file.</p>
<p>This is the content of a default <code>SpecRunner.html</code> file:</p><pre><code class="language-html">&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;meta charset="utf-8"&gt;
&lt;title&gt;Jasmine Spec Runner v3.2.1&lt;/title&gt;
&lt;link rel="shortcut icon" type="image/png" href="lib/jasmine-3.2.1/jasmine_favicon.png"&gt;
&lt;link rel="stylesheet" href="lib/jasmine-3.2.1/jasmine.css"&gt;
&lt;script src="lib/jasmine-3.2.1/jasmine.js"&gt;&lt;/script&gt;
&lt;script src="lib/jasmine-3.2.1/jasmine-html.js"&gt;&lt;/script&gt;
&lt;script src="lib/jasmine-3.2.1/boot.js"&gt;&lt;/script&gt;
&lt;!-- include source files here... --&gt;
&lt;script src="src/Player.js"&gt;&lt;/script&gt;
&lt;script src="src/Song.js"&gt;&lt;/script&gt;
&lt;!-- include spec files here... --&gt;
&lt;script src="spec/SpecHelper.js"&gt;&lt;/script&gt;
&lt;script src="spec/PlayerSpec.js"&gt;&lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
<p>Remember that you need to change the files included from the <code>/src</code> and <code>/spec</code> folders to contain your actual source and test files.</p>
<h3 id="using-jasmine-as-a-library">Using Jasmine as a Library</h3>
<p>You can also use Jasmine as a library in your project. For example the following code imports and executes Jasmine:</p><pre><code class="language-javascript">var Jasmine = require('jasmine');
var jasmine = new Jasmine();
jasmine.loadConfigFile('spec/support/jasmine.json');
jasmine.execute();</code></pre>
<p>First we require/import Jasmine and we use the <code>loadConfigFile()</code> method to load the config file available from <code>spec/support/jasmine.json</code> path then finally we execute Jasmine.</p>
<h3 id="using-jasmine-via-the-cli">Using Jasmine via The CLI</h3>
<p>You can also use Jasmine from the CLI which allows you to easily run Jasmine tests and by default output the results in the terminal.</p>
<p>We’ll follow this approach to run our example tests in this guide, so first go ahead and run the following command to install Jasmine globally:</p><pre><code class="language-bash">npm install -g jasmine</code></pre>
<blockquote><em>You may need to run <strong>sudo</strong> for installing npm packages globally depending on your <a href="https://docs.npmjs.com/getting-started/fixing-npm-permissions" rel="noopener">npm configuration</a>.</em></blockquote>
<p>Now, create a folder for your project and navigate inside it:</p><pre><code class="language-bash">$ mkdir jasmine-project $ cd jasmine-project</code></pre>
<p>Next, run the following command to initialize your project for Jasmine:</p>
<p>This command simply creates a spec folder and a JSON configuration file. This is the output of the <code>dir</code> command:</p><pre><code class="language-bash">.
└── spec
└── support
└── jasmine.json
2 directories, 1 file</code></pre>
<p>This is the content of a default <code>jasmine.json</code> file:</p><pre><code class="language-js">{
"spec_dir": "spec",
"spec_files": [
"**/*[sS]pec.js"
],
"helpers": [
"helpers/**/*.js"
],
"stopSpecOnExpectationFailure": false,
"random": true
}</code></pre>
<ul>
<li><code>spec_dir</code>: specifies where Jasmine looks for test files.</li>
<li><code>spec_files</code>: specifies the patterns of test files, by default all JS files that end with <strong>Spec</strong> or <strong>spec</strong> strings.</li>
<li><code>helpers</code>: specifies where Jasmine looks for helper files. Helper files are executed before specs and can be used to define custom matchers.</li>
<li><code>stopSpecOnExpectationFailure</code>: when set to true will immediately stop a spec on the first failure of an expectation (can be used as a CLI option via <code>--stop-on-failure</code>).</li>
<li><code>random</code>: when set to true Jasmine will pseudo-randomly run the test cases (can be used as a CLI option via <code>--random</code>).</li>
</ul>
<p>The <code>spec_files</code> and <code>helpers</code> arrays can also contain <a href="https://en.wikipedia.org/wiki/Glob_(programming)" rel="noopener">Glob</a> patterns (thanks to the <a href="https://github.com/isaacs/node-glob" rel="noopener">node-glob</a> package) for specifying file paths which are patterns you usually use to specify a set of files when working in Bash (e.g. <code>ls *.js</code>).</p>
<p>If you don’t use the default location for the <code>jasmine.json</code> configuration file, you simply need to specify the custom location via the <code>jasmine --config</code> option.</p>
<p>You can find more CLI options from the official <a href="https://jasmine.github.io/setup/nodejs.html" rel="noopener">docs</a>.</p>
<h3 id="understanding-jasmine">Understanding Jasmine</h3>
<p>In this section we’ll learn about the basic elements of Jasmine testing such as suites, specs, expectations, matchers and spies, etc.</p>
<p>In your project’s folder, run the following command to initialize a new Node module:</p>
<p>This will create a <code>package.json</code> file with default information:</p><pre><code class="language-js">{
"name": "jasmine-project",
"version": "1.0.0",
"description": "",
"main": "index.js",
"scripts": {
"test": "echo \"Error: no test specified\" &amp;&amp; exit 1"
},
"keywords": [],
"author": "",
"license": "ISC"
}</code></pre>
<p>Next, create an <code>index.js</code> file and add the following code:</p><pre><code class="language-js">function fibonacci(n){
if (n === 1) {
return [0, 1];
}
else {
var s = fibonacci(n - 1);
s.push(s[s.length - 1] + s[s.length - 2]);
return s;
}
}
function isPrime(num){
for (let i = 2; i &lt; num; i++)
if (num % i === 0) return false;
return num !== 1 &amp;&amp; num !== 0;
}
function isEven(n) {
return n % 2 == 0;
}
function isOdd(n) {
return Math.abs(n % 2) == 1;
}
function toLowerCase(str){
return str.toLowerCase();
}
function toUpperCase(str){
return str.toUpperCase();
}
function contains(str, substring, fromIndex){
return str.indexOf(substring, fromIndex) !== -1;
}
function repeat(str, n){
return (new Array(n + 1)).join(str);
}
module.exports = {
fibonacci: fibonacci,
isPrime: isPrime,
isEven: isEven,
isOdd: isOdd,
toLowerCase: toLowerCase,
toUpperCase: toUpperCase,
contains: contains,
repeat: repeat
};</code></pre>
<h3 id="suites">Suites</h3>
<p>A suite groups a set of specs or test cases. It’s used to test a specific behavior of the JavaScript code that’s usually encapsulated by an object/class or a function. It’s created using the Jasmine global function <code>describe()</code> that takes two parameters, the title of the test suite and a function that implements the actual code of the test suite.</p>
<p>Let’s start by creating our first test suite. Inside the <code>spec</code> folder create a <code>MyJSUtilitiesSpec.js</code> file and add:</p><pre><code class="language-js">describe("MyJSUtilities", function() { /* ... */ });</code></pre>
<p><em>MyJSUtilities</em> is the name of this top-level test suite.</p>
<h4 id="how-to-group-and-nest-suites">How to Group and Nest Suites</h4>
<p>For better organizing and accurately describing our set of tests we can nest suites inside the top-level suite. For example, let’s add two suites to the <em>MyJSUtilities</em> suite:</p><pre><code class="language-js">describe("String Utils", function() { /*...*/});describe("Math Utils", function() { /*...*/});</code></pre>
<p>Inside the the <em>Math Utils</em> suite, let’s also add two nested suites:</p><pre><code class="language-js">describe("Basic Math Utils", function() {   /* ... */ }); describe("Advanced Math Utils", function() {   /* ... */ });</code></pre>
<p>We are grouping related tests into tests for <em>String Utils</em>, <em>Basic Math Utils</em> and <em>Advanced Math Utils</em> and nesting them inside the top-level test suite <em>MyJSUtilities</em>. This will compose your specs as trees similar to a structure of folders.</p>
<p>The nesting structure will be shown on the report which makes it easy for you to find failing tests.</p>
<h4 id="how-to-exclude-suites">How to Exclude Suites</h4>
<p>You can temporarily disable a suite using the <code>xdescribe()</code> function. It has the same signature (parameters) as a <code>describe()</code> function which means you can quickly disable your existing suites by simply adding an <code>x</code> to the function.</p>
<p>Specs within an <code>xdescribe()</code> function will be marked pending and not executed in the report.</p>
<h3 id="specs">Specs</h3>
<p>A spec declares a test case that belongs to a test suite. This is done by calling the Jasmine global function <code>it()</code> which takes two parameters, the title of the spec (which describes the logic we want to test) and a function that implements the actual test case.</p>
<p>A spec may contain one or more expectations. Each expectation is simply an assertion that can return either <code>true</code> or <code>false</code>. For the spec to be passed, all expectations belonging to the spec have to be <code>true</code> otherwise the spec fails.</p>
<p>Inside our <em>String Utils</em> suite, add these specs:</p><pre><code class="language-js">describe("String Utils", function() {  it("should be able to lower case a string",function() {    /*...*/  });  it("should be able to upper case a string",function() {    /*...*/  });  it("should be able to confirm if a string contains a substring",function() {    /*...*/  });  it("should be able repeat a string multiple times",function() {    /*...*/  });});</code></pre>
<p>Inside our <em>Basic Math Utils</em> suite let’s add some specs:</p><pre><code class="language-js">describe("Basic Math Utils", function() {  it("should be able to tell if a number is even",function() {    /*...*/  });     it("should be able to tell if a number is odd",function() {    /*...*/  });     });</code></pre>
<p>For the <em>Advanced Math Utils</em>, let’s add the specs:</p><pre><code class="language-js">describe("Advanced Math Utils", function() {  it("should be able to tell if a number is prime",function() {    /*...*/  });   it("should be able to calculate the fibonacci of a number",function() {    /*...*/  }); });</code></pre>
<h4 id="how-to-exclude-specs">How to Exclude Specs</h4>
<p>Just like suites, you can also exclude individual specs using the <code>xit()</code> function which temporary disables the <code>it()</code> spec and marks the spec as pending.</p>
<h3 id="expectations">Expectations</h3>
<p>Expectations are created using the <code>expect()</code> function that takes a value called the <strong>actual</strong> (this can be values, expressions, variables, functions or objects etc.). Expectations compose the spec and are used along with matcher functions (via chaining) to define what the developer expect from a specific unit of code to perform.</p>
<p>A matcher function compares between an <strong>actual</strong> value (passed to the <code>expect()</code> function it's chained with) and an <strong>expected</strong> value (directly passed as a parameter to the matcher) and returns either <strong>true</strong> or <strong>false</strong> which either <strong>passes</strong> or <strong>fails</strong> the spec.</p>
<p>You can chain the <code>expect()</code> function with multiple matchers. To negate/invert the boolean result of any matcher, you can use the <code>not</code> keyword before calling the matcher.</p>
<p>Let’s implement the specs of our example. For now we’ll use we’ll use <code>expect()</code> with the <code>nothing()</code> matcher which is part of the built-in matchers which we'll see a bit later. This will pass all specs since we are expecting nothing at this point.</p><pre><code class="language-js">describe("MyJSUtilities", function() {describe("&gt;String Utils", function() {  it("should be able to lower case a string",function() {    expect().nothing();  });  it("should be able to upper case a string",function() {    expect().nothing();  });  it("should be able to confirm if a string contains a substring",function() {    expect().nothing();  });  it("should be able repeat a string multiple times",function() {    expect().nothing();  });     });describe("Math Utils", function() { describe("Basic Math Utils", function() {  it("should be able to tell if a number is even",function() {    expect().nothing();  });     it("should be able to tell if a number is odd",function() {    expect().nothing();  });    }); describe("Advanced Math Utils", function() {  it("should be able to tell if a number is prime",function() {    expect().nothing();  });   it("should be able to calculate the fibonacci of a number",function() {    expect().nothing();  });     }); });});</code></pre>
<p>This is a screenshot of the results at this point:</p>
<p>We have eight passed specs and zero failures.</p>
<p>You can either use built-in matchers or also create your own custom matchers for your specific needs.</p>
<h3 id="built-in-matchers">Built-In Matchers</h3>
<p>Jasmine provides a rich set of built-in matchers. Let’s see some of the important ones:</p>
<ul>
<li><code>toBe()</code> for testing for identity,</li>
<li><code>toBeNull()</code> for testing for <code>null</code>,</li>
<li><code>toBeUndefined()/toBeDefined()</code> for testing for <code>undefined</code>/not <code>undefined</code>,</li>
<li><code>toBeNaN()</code> for testing for NaN (Not A Number)</li>
<li><code>toEqual()</code> for testing for equality,</li>
<li><code>toBeFalsy()/toBeTruthy()</code> for testing for falseness/truthfulness etc.</li>
</ul>
<p>You can find the full list of matchers from the <a href="https://jasmine.github.io/api/edge/matchers.html" rel="noopener">docs</a>.</p>
<p>Let’s now implement our specs with some of these matchers when appropriate. First import the functions we are testing in our <code>MyJSUtilitiesSpec.js</code> file:</p><pre><code>const utils = require("../index.js");</code></pre>
<p>Next, start with the <em>String Utils</em> suite and change <code>expect().nothing()</code> with the appropriate expectations.</p>
<p>For example for the first spec, we expect the <code>toLowerCase()</code> method to be first defined and secondly to return a lower case string i.e:</p><pre><code class="language-js">it("should be able to lower case a string",function() {        expect(utils.toLowerCase).toBeDefined();        expect(utils.toLowerCase("HELLO WORLD")).toEqual("hello world");  });</code></pre>
<p>This is the full code for the suite:</p><pre><code class="language-js">describe("&gt;String Utils", function() {  it("should be able to lower case a string",function() {    expect(utils.toLowerCase).toBeDefined();    expect(utils.toLowerCase("HELLO WORLD")).toEqual("hello world");  });  it("should be able to upper case a string",function() {    expect(utils.toUpperCase).toBeDefined();    expect(utils.toUpperCase("hello world")).toEqual("HELLO WORLD");  });  it("should be able to confirm if a string contains a substring",function() {    expect(utils.contains).toBeDefined();    expect(utils.contains("hello world","hello",0)).toBeTruthy();  });  it("should be able repeat a string multiple times",function() {    expect(utils.repeat).toBeDefined();    expect(utils.repeat("hello", 3)).toEqual("hellohellohello");  });     });</code></pre>
<h3 id="custom-matchers">Custom Matchers</h3>
<p>Jasmine provides the ability to write <a href="https://jasmine.github.io/tutorials/custom_matcher.html" rel="noopener">custom matchers</a> for implementing assertions not covered by the built-in matchers or just for the sake of making tests more descriptive and readable.</p>
<p>For example, let’s take the following spec:</p><pre><code class="language-js">it("should be able to tell if a number is even",function() {    expect(utils.isEven).toBeDefined();    expect(utils.isEven(2)).toBeTruthy();    expect(utils.isEven(1)).toBeFalsy();  });</code></pre>
<p>Let’s suppose that the <code>isEven()</code> method is not implemented. If we run the tests we'll get messages like the following screenshot:</p>
<p>The failure message we get says <em>Expected undefined to be defined</em> which gives us no clue of what’s happening. So let’s make this message more meaningful in the context of our code domain (this will be more useful for complex code bases). For this matter, let’s create a custom matcher.</p>
<p>We create custom matchers using the <code>addMatchers()</code> method which takes an object comprised of one or many properties that will be added as matchers. Each property should provide a factory function that takes two parameters: <code>util</code>, which has a set of utility functions for matchers to use (see: <code><a href="https://github.com/pivotal/jasmine/blob/master/src/core/matchers/matchersUtil.js" rel="noopener">matchersUtil.js</a></code>) and <code>customEqualityTesters</code> which needs to be passed in if <code>util.equals</code> is called, and should return an object with a <code>compare</code> function that will be called to check the expectation.</p>
<p>We need to register the custom matcher before executing each spec using the <code>beforeEach()</code> method:</p><pre><code class="language-js">describe("/Basic Math Utils", function () {beforeEach(function () {jasmine.addMatchers({hasEvenMethod:  function (util, customEqualityTesters) {return {compare:  function (actual, expected) {var  result  = { pass:  utils.isEven  !==  undefined };if (result.pass) {result.message  =  "Expected isEven() to be not defined."}else {result.message  =  "Expected isEven() to be defined."}return  result;}}}});});/*...*/});</code></pre>
<p>We can then use the custom matcher instead of <code>expect(utils.isEven).toBeDefined()</code>:</p><pre><code class="language-js">expect().hasEvenMethod();</code></pre>
<p>This will give us a better failure message:</p>
<h3 id="using-beforeeach-and-aftereach-">Using beforeEach() and afterEach()</h3>
<p>For initializing and cleaning your specs, Jasmine provides two global functions, <code>beforeEach()</code> and <code>afterEach()</code>:</p>
<ul>
<li>The <code>beforeEach</code> function is called once before each spec in the suite where it is called.</li>
<li>The <code>afterEach</code> function is called once after each spec in the suite where it's called.</li>
</ul>
<p>For example, if you need to use any variables in your test suite, you can simply declare them in the start of the <code>describe()</code> function and put any initialization or instantiation code inside a <code>beforeEach()</code> function. Finally, you can use the <code>afterEach()</code> function to reset the variables after each spec so you can have pure unit testing without the need to repeat initialization and cleanup code for each spec.</p>
<p>The <code>beforeEach()</code> function is also perfectly combined with many Jasmine APIs such as the <code>addMatchers()</code> method to create custom matchers or also with the <code>done()</code> function to wait for asynchronous operations before continue testing.</p>
<h3 id="failing-a-test">Failing a Test</h3>
<p>You can force a test to fail using the global <code>fail()</code> method available in Jasmine. For example:</p><pre><code class="language-js">it("should explicitly fail", function () { fail('Forced to fail'); });</code></pre>
<p>You should get the following error:</p>
<h3 id="testing-for-exceptions">Testing for Exceptions</h3>
<p>When you are unit-testing your code, errors and exceptions maybe thrown, so you might need to test for these scenarios. Jasmine provides the <code>toThrow()</code> and <code>toThrowError()</code> matchers to test for when an exception is thrown or to test for a specific exception, respectively.</p>
<p>For example if we have a function that throws an <code>TypeError</code> exception:</p><pre><code class="language-js">function throwsError() { throw new TypeError("A type error"); }</code></pre>
<p>You could write a spec that to test for if an exception is thrown:</p><pre><code>it('it should throw an exception', function () { expect(throwsError).toThrow(); });</code></pre>
<p>Or you could also use test for the specific <code>TypeError</code> exception:</p><pre><code class="language-js">it('it should throw a TypeError', function () { expect(throwsError).toThrowError(TypeError); });</code></pre>
<h3 id="understanding-spies">Understanding Spies</h3>
<p>More often than not, methods depend on other methods. This means that when you are testing a method, you may also end up testing its dependencies. This is not recommended in testing i.e you need to make sure you test the pure function by isolating the method and seeing how it behaves given a set of inputs.</p>
<p>Jasmine provides <a href="http://jasmine.github.io/2.0/introduction.html#section-Spies" rel="noopener">spies</a> which can be used to spy on/listen to method calls on objects and report if a method is called and with which context and arguments.</p>
<p>Jasmine provides two ways for spying on method calls: using the <code>spyOn()</code> or the <code>createSpy()</code> methods.</p>
<p>You can use <code>spyOn()</code> when the method already exists on the object, otherwise you need to use <code>jasmine.createSpy()</code> which returns a new function.</p>
<p>By default a spy will only report if a call was done without calling through the spied function (i.e the function will stop executing), but you can change the default behavior using these methods:</p>
<ul>
<li><code>and.callThrough()</code>: call through the original function,</li>
<li><code>and.returnValue(value)</code>: return the specified value,</li>
<li><code>and.callFake(fn)</code>: call the fake function instead of the original one,</li>
<li><code>and.throwError(err)</code>: throw an error,</li>
<li><code>and.stub()</code>: resets the default stubbing behavior.</li>
</ul>
<p>You can use a spy to gather run-time statistics on the spied function, for example if you want to know how many times your function was called.</p>
<p>Say we want to make sure our <code>toUpperCase()</code> method is making use of the built-in <code>String.toUpperCase()</code> method, we need to simply spy on <code>String.toUpperCase()</code> using:</p><pre><code class="language-js">it("should be able to upper case a string", function () { </code></pre><pre><code>var spytoUpperCase = spyOn(String.prototype, 'toUpperCase') </code></pre><pre><code>expect(utils.toUpperCase).toBeDefined(); expect(utils.toUpperCase("hello world")).toEqual("HELLO WORLD"); expect(String.prototype.toUpperCase).toHaveBeenCalled(); expect(spytoUpperCase.calls.count()).toEqual(1); });</code></pre>
<p>The test has failed due to the second expectation because <code>utils.toUpperCase("hello world")</code> returned undefined instead of the expected <em>HELLO WORLD.</em> That's because, as we mentioned, earlier after creating the spy on <code>toUpperCase()</code>, the method is not executed. We need to change this default behavior by calling <code>callThrough()</code>:</p>
<blockquote><em>Please note that a <code>spy</code> function replaces the spied function with a stub by default. If you need to call the original function instead, you can add <code>.and.callThrough()</code> to your <code>spy</code> object.</em></blockquote><pre><code>var spytoUpperCase = spyOn(String.prototype, 'toUpperCase').and.callThrough();</code></pre>
<p>Now all expectations pass.</p>
<p>You can also use <code>and.callFake()</code> or <code>and.returnValue()</code> to fake either the spied on function or just the return value if you don't to call through the actual function:</p><pre><code>var spytoUpperCase = spyOn(String.prototype, 'toUpperCase').and.returnValue("HELLO WORLD"); </code></pre><pre><code class="language-js">var spytoUpperCase = spyOn(String.prototype, 'toUpperCase').and.callFake(function(){ return "HELLO WORLD"; });</code></pre>
<p>Now, if we end up not using the built in <code>String.toUpperCase()</code> in our own <code>utils.toUpperCase()</code> implementation, we'll get these failures:</p>
<p>The two expectations <code>expect(String.prototype.toUpperCase).toHaveBeenCalled()</code> <code>expect(spytoUpperCase.calls.count()).toEqual(1)</code> have failed.</p>
<h3 id="how-to-deal-with-asynchronicity-in-jasmine">How to Deal with Asynchronicity in Jasmine</h3>
<p>If the code you are testing contains asynchronous operations, you need a way to let Jasmine know when the asynchronous operations have completed.</p>
<p>By default, Jasmine waits for any asynchronous operation, defined by a callback, promise or the <code>async</code> keyword, to be finished. If Jasmine finds a callback, promise or async keyword in one of these functions: <code>beforeEach</code>, <code>afterEach</code>, <code>beforeAll</code>, <code>afterAll</code>, and <code>it</code> it will wait for the asynchronous to be done before proceeding to the next operation.</p>
<h3 id="using-done-with-beforeeach-it-">Using <code>done()</code> with <code>beforeEach()</code>/<code>it()</code> ..</h3>
<p></p>
<p>Let’s take our example <code>simulateAsyncOp()</code> which simulates an asynchronous operation using <code>setTimeout()</code>. In a real world scenario this can be an Ajax request or any thing similar that happens asynchronously:</p><pre><code class="language-js">function simulateAsyncOp(callback){ </code></pre><pre><code>setTimeout(function () { callback(); }, 2000); }</code></pre>
<p>To test this function we can use the <code>beforeEach()</code> function with the special <code>done()</code> callback. Our code needs to invoke <code>done()</code> to tell Jasmine that the asynchronous operation has completed:</p><pre><code class="language-js">describe("/Async Op", function () {var  asyncOpCompleted  =  false;beforeEach(function (done) {utils.simulateAsyncOp(function(){  asyncOpCompleted  =  true;  done();});});it("should be able to tell if the async call has completed", function () {  expect(asyncOpCompleted).toEqual(true);});});</code></pre>
<p>We can quickly notice a drawback of this method, so we need to write our code to accept the <code>done()</code> callback. In our case, we didn't hardcode the <code>done()</code> method in our <code>simulateAsyncOp(fn)</code> but we have provided a callback parameter just to be able to call <code>done()</code>.</p>
<h3 id="using-promises">Using Promises</h3>
<p>If you don’t want to create code that depends on how you write your test, you can use a promise instead and call the <code>done()</code> callback when the promise has resolved. Or better yet, in Jasmine 2.7+, if your code returns a <code>Promise</code>, Jasmine will wait until it is resolved or rejected before executing the next code.</p>
<h3 id="using-async-await">Using async/await</h3>
<p>Jasmine 2.7+ supports <code>async</code> and <code>await</code> calls in specs. This relieves you from putting asserts in a <code>.then()</code> or <code>.catch()</code> block.</p><pre><code class="language-js">it("should work with async/await", async () =&gt; { let completed = false; completed = await utils.simulateAsyncOp(); expect(completed).toEqual(true); });</code></pre>
<p>This is the implementation of <code>simulateAsyncOp</code>:</p><pre><code class="language-js">function simulateAsyncOp() { </code></pre><pre><code class="language-js">return new Promise(resolve =&gt; { setTimeout(() =&gt; { resolve(true); }, 1000); }); }</code></pre>
<h3 id="using-jasmine-clock">Using Jasmine Clock</h3>
<p>The Jasmine clock is used to test asynchronous code that depends on time functions such as <code>setTimeout()</code> in the same way we test synchronous code by mocking time-based APIs with custom methods. In this way, you can execute the tested functions synchronously by controlling or manually advancing the clock.</p>
<p>You can install the Jasmine clock by calling the <code>jasmine.clock().install</code> function in your spec or suite.</p>
<p>After using the clock, you need to uninstall it to restore the original functions.</p>
<p>With Jasmine clock, you can control the JavaScript <code>setTimeout</code> or <code>setInterval</code> functions by ticking the clock in order to advance in time using the <code>jasmine.clock().tick</code> function, which takes the number of milliseconds you can move with.</p>
<p>You can also use the Jasmine Clock to mock the current date.</p><pre><code class="language-js">beforeEach(function () {jasmine.clock().install();});afterEach(function() {jasmine.clock().uninstall();});it("should call the asynchronous operation synchronously", function() {var  completed  =  false;utils.simulateAsyncOp(function(){completed  =  true;});expect(completed).toEqual(false);jasmine.clock().tick(1001);expect(completed).toEqual(true);});</code></pre>
<p>This is the <code>simulateAsyncOp</code> function:</p><pre><code>function simulateAsyncOp(callback){ </code></pre><pre><code class="language-js">setTimeout(function () { callback(); }, 1000); }</code></pre>
<blockquote><em>In case you didn’t specify a time for the <code>mockDate</code> function, it will use the current date.</em></blockquote>
<h3 id="handling-errors">Handling Errors</h3>
<p>If your asynchronous code fails due to some error, you want your specs to fail correctly. Starting with Jasmine 2.6+ any unhandled errors are sent to the currently executed spec.</p>
<p>Jasmine also provides a way you can use if you need to explicitly fail your specs:</p>
<ul>
<li>using the <code>done()</code> callback with <code>beforeEach()</code> by calling the <code>done.fail(err)</code> method,</li>
<li>simply passing an error to the <code>done(err)</code> callback (Jasmine 3+),</li>
<li>calling the <code>reject()</code> method of a <code>Promise</code>.</li>
</ul>
<h3 id="conclusion">Conclusion</h3>
<p>In this guide we’ve introduced Jasmine and seen how to get started using Jasmine to unit test your JavaScript code. Thanks for reading!</p>
<p>This <a href="https://www.techiediaries.com/jasmine-testing-tutorial/">article</a> was originally posted in <a href="https://www.techiediaries.com/">techiediaries</a>.</p>
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
