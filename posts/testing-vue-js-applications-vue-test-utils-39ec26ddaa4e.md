---
card: "https://cdn-media-1.freecodecamp.org/images/1*PkFvOQVwXsa-Rsd004WyDQ.png"
tags: [JavaScript]
description: by Mukul Khanna
author: "Milad E. Fahmy"
title: "How you can test your Vue.js apps in less than seven minutes"
created: "2021-08-15T19:48:19+02:00"
modified: "2021-08-15T19:48:19+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-vuejs tag-tech tag-testing tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">How you can test your Vue.js apps in less than seven minutes</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*PkFvOQVwXsa-Rsd004WyDQ.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*PkFvOQVwXsa-Rsd004WyDQ.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*PkFvOQVwXsa-Rsd004WyDQ.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*PkFvOQVwXsa-Rsd004WyDQ.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*PkFvOQVwXsa-Rsd004WyDQ.png" alt="How you can test your Vue.js apps in less than seven minutes">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Mukul Khanna</p>
<h1 id="how-you-can-test-your-vue-js-apps-in-less-than-seven-minutes">How you can test your Vue.js apps in less than seven minutes</h1>
<figcaption>Source</figcaption>
</figure>
<p>Before we dive into the implementation, let’s get a few concepts cleared.</p>
<h3 id="what-is-testing">What is testing?</h3>
<p>Manually trying all possible inputs to a basic form validator can be cumbersome.</p>
<p>It might not seem like a big deal for a small website. But for bigger and more complex web applications consisting of dozens of components along with their functions, routes, states, mutations and so on, it is not feasible or advisable to test the functioning of all these constituents.</p>
<p>Automating this part of the trial and error based assessments of the code we have written is known as <strong>testing</strong> or <strong>automated testing</strong>.</p>
<p>Edd Yerburgh, a core Vue team member and the maintainer of vue-test-utils (formerly <strong>Avoriaz</strong>), defines automated testing in his <a href="https://livebook.manning.com#!/book/testing-vuejs-applications/chapter-1/v-3/point-1371-28-28-0" rel="noopener">book</a> as:</p>
<blockquote>Automated testing is the practice of writing programs to run tests against your application code. Once the programs are written, they can be executed automatically.</blockquote>
<p>There are essentially three types of tests:</p>
<ol>
<li>Unit tests</li>
<li>End to end tests</li>
<li>Snapshot tests</li>
</ol>
<h4 id="unit-tests"><strong>Unit tests</strong></h4>
<p>These are basic tests that check if the atomic elements of the website (Vue components and functions) work properly. Edd calls them <strong>component contracts</strong>. Each component is expected to work as it has promised to do, and these tests make sure that they are fulfilled.</p>
<h4 id="end-to-end-e2e-tests"><strong>End to end (E2E) tests</strong></h4>
<p>E2E tests test the whole workflow of the website. It can be said that one E2E test is made up of multiple granular unit tests. They are slow, but they check the whole functionality of the website.</p>
<p>But they are also difficult to debug because it’s tough to locate which parts didn’t work as they were supposed to. There could be more than one reason that the tests failed.</p>
<h4 id="snapshot-tests">Snapshot tests</h4>
<p>Bugs in the code don’t only affect the functionality of the website, but also the positioning of the components in the UI. Snapshot tests check for such changes in the appearance of the application. It involves rendering the UI, capturing a screenshot, and comparing it to a reference image stored along with the test. The test fails if the two images don’t match.</p>
<figcaption><a href="https://livebook.manning.com/#!/book/testing-vuejs-applications/chapter-1/v-3/156" rel="noopener" target="_blank" title="">The testing pyramid</a></figcaption>
</figure>
<p>These tests also help developers write proper documentation of the code, which is quite useful in large scale applications with multiple contributors.</p>
<p>So now that we’ve established that testing can help us save a lot of time and optimize our code, let’s see how tests are configured, created, and run.</p>
<p>We will be using <strong>vue-test-utils</strong> as the testing utility library for Vue.js<em>. </em>Now we also need to choose a test runner. There are many to choose from, but Jest and Mocha-Webpack are both equally good. They just have some tradeoffs between the configuration upfront and the support for SFCs (single file components).</p>
<p>We will be using the <strong>mocha-webpack</strong> configuration for this demo.</p>
<h3 id="creating-the-project"><strong>Creating the project</strong></h3><pre><code>npm install vue</code></pre><pre><code>npm install --global vue-cli</code></pre><pre><code>vue init webpack vue-testing</code></pre><pre><code>cd vue-testing</code></pre><pre><code>npm install</code></pre><pre><code>npm run dev </code></pre>
<p>Using the above commands, create a Vue webpack project in which we will be setting up the testing environment.</p>
<h4 id="installing-dependencies"><strong>Installing dependencies</strong></h4>
<p>To install <a href="https://github.com/vuejs/vue-test-utils" rel="noopener">vue-test-utils</a><em>, </em>mocha,<em> </em>and mocha-webpack:</p><pre><code>npm install --save-dev @vue/test-utils</code></pre><pre><code>npm install --save-dev mocha mocha-webpack</code></pre>
<p>To emulate a subset of a browser environment to run our tests, we’ll install <a href="https://github.com/jsdom/jsdom" rel="noopener">jsdom</a><em> </em>and <a href="https://github.com/rstacruz/jsdom-global" rel="noopener">jsdom-globa</a>l:</p><pre><code>npm install --save-dev jsdom jsdom-global</code></pre>
<p>Some of the dependencies that we will be importing in our tests are difficult for the webpack to bundle. So, to be able to remove them from the bundling process and to increase test bootup speed, we install <strong>node-externals:</strong></p><pre><code>npm install --save-dev webpack-node-externals</code></pre>
<p>Vue recommends <a href="https://github.com/Automattic/expect.js" rel="noopener">expect</a> as an assertion library that essentially decides whether the test fails or passes depending on the argument it receives.</p><pre><code>npm install --save-dev expect</code></pre>
<p>We need to make it globally accessible to avoid importing it in every single test. We create a directory named <strong>test</strong><em> </em>in the root directory and create a file named <strong>test/setup.js</strong><em> . </em>Import the modules with <strong>require</strong><em>:</em></p><pre><code>//setup.js</code></pre><pre><code>require('jsdom-global')()</code></pre><pre><code>global.expect = require('expect')</code></pre>
<p>We can also include code coverage in the test results using the <strong>istanbul</strong><em> </em>plugin<em> </em>to get a report like this:</p>
<p>It is used to describe the degree to which the source code of an application is executed when a particular test suite runs.</p><pre><code>npm install --save-dev nyc babel-plugin-istanbul</code></pre>
<p>Also in the <strong>.babelrc</strong><em> </em>in the <strong>plugins</strong><em> </em>array, add <strong>istanbul:</strong></p><pre><code>//.babelrc</code></pre><pre><code>plugins": ["transform-vue-jsx", "transform-runtime", "istanbul"]</code></pre>
<p>So we have installed all the dependencies, and it’s time to make the final configurations before we can start writing the tests.</p>
<p>In <strong>package.json</strong>, we need to add a <strong>test</strong><em> </em>script that runs the test:</p><pre><code>//package.json</code></pre><pre><code>"scripts":{</code></pre><pre><code>"test": "cross-env NODE_ENV=test nyc mocha-webpack --webpack-config build/webpack.base.conf.js --require test/setup.js test/**/*.spec.js"</code></pre><pre><code>}</code></pre>
<p>We also need to specify the files that needed to be included for the code coverage in the <strong>package.json:</strong></p><pre><code>//package.json</code></pre><pre><code>"nyc":{    "include":[      "src/**/*.(js|vue)" ],    "instrument":false,    "sourceMap":false}</code></pre>
<p>The last configuration before writing the test would be adding the following in <strong>webpack.base.conf.js:</strong></p><pre><code>//webpack.base.conf.js</code></pre><pre><code>if (process.env.NODE_ENV === 'test'){  module.exports.externals = [require('webpack-node-externals')()]  module.exports.devtool = 'inline-cheap-module-source-map'}</code></pre>
<p>We can perform our test on the inbuilt Vue component that comes with the webpack boilerplate.</p>
<p>Every test file would have a <strong>‘.spec.js’</strong><em> </em>extension.</p>
<p>In the test directory, we add a test file <strong>testOne.spec.js</strong></p><pre><code>//testOne.spec.js</code></pre><pre><code>import {shallow} from '@vue/test-utils'</code></pre><pre><code>import HelloWorld from '../src/components/HelloWorld.vue'</code></pre>
<p>We start by importing <strong>shallow</strong><em> </em>from the <strong>vue-test-utils</strong><em>. </em><strong>Shallow</strong><em> </em>creates a <a href="https://vue-test-utils.vuejs.org/en/api/wrapper/" rel="noopener">wrapper</a> for the Vue component on which we want to run the test. This wrapper is an object that contains the mounted component and methods to test parts of the code. Then we import the Vue component on which we run the test.</p><pre><code>//testOne.spec.js</code></pre><pre><code>describe('HelloWorld.vue',function(){        it('Checking &lt;h2&gt; tag text',function(){                const wrapper = shallow(HelloWorld)        const h2= wrapper.find('h2')        expect(h2.text()).toBe('Essential Links')        })})</code></pre>
<p>Then we create what we can call a <strong>test suite</strong>, using the <strong>describe()</strong><em> </em>method of Mocha’s testing framework. This test suite basically groups multiple test cases into one along with providing some information about the tests and the component.</p>
<p>In this describe function, we callback a function that specifies the test cases using the <strong>it() </strong>function. Each it() method describes a test case with the purpose of the test as the first parameter followed by a callback function defining the test.</p>
<p>Then:</p>
<ul>
<li>We create a wrapper of the Vue component</li>
<li>Use its <strong>find()</strong><em> </em>method to get all &lt;h2&gt; tag elements</li>
<li>Compare its text with what it is supposed to be.</li>
</ul>
<p>Yay! Our test is ready to run.</p><pre><code>npm run test</code></pre>
<p>So, our test was successful — the code was able to find an &lt;h2&gt; tag in the HelloWorld.vue component with ‘Essential Links’ as its text.</p>
<p>Now if we change the expected test to anything else, the test would fail. <br>I changed it to:</p><pre><code>expect(h2.text()).toBe('Essential Linx')</code></pre>
<p>and the test fails. The failed test error is quite descriptive, though, and you can see what the code was expecting and what it receives:</p>
<p>We can add multiple test cases in one test file by using multiple <strong>it()</strong> methods and expecting different conditions.</p><pre><code>describe('HelloWorld.vue',function(){    </code></pre><pre><code>it('Checking &lt;h2&gt; tag text',function(){        const wrapper = shallow(HelloWorld)                const h2 = wrapper.find('h2')        expect(h2.text()).toBe('Essential Links')        }),    </code></pre><pre><code>it('Checking &lt;h1&gt; tag text',function(){        const wrapper = shallow(HelloWorld)        const h1 = wrapper.find('h1')        expect(h1.text()).toBe('Welcome to Your Vue.js App')        })</code></pre><pre><code>})</code></pre>
<p>Here we are also testing if the &lt;h1&gt; tag renders what it is supposed to.</p>
<p>So this was a pretty basic test that just gives you an understanding of how tests are configured, coded, and run without even opening the browser or starting the server.</p>
<p>The link to the GitHub repository is <a href="https://github.com/mukulkhanna/vue-testing" rel="noopener">here</a>.</p>
<h3 id="wrapping-up">Wrapping up</h3>
<p>Edd Yerburgh’s book ‘<a href="https://www.manning.com/books/testing-vuejs-applications" rel="noopener">Testing Vue.js Applications</a>’ helped me a lot in getting a wider picture of the importance of testing and how to implement it. I would recommend it to anyone who wants to learn testing beyond the scope of beginner-level content and really dive into it.</p>
<p>Other than that, I have been spending some time on TDD (Test Driven Development) concepts and am looking forward to writing a beginner’s tutorial about the world of TDD with Vue.js.</p>
<p>Please leave a clap or two if you liked the post. Thanks :)</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
