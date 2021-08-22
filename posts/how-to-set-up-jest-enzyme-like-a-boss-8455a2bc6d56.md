---
card: "https://cdn-media-1.freecodecamp.org/images/1*tozYeK-3Cjp7xjBAJE0FeQ.jpeg"
tags: [JavaScript]
description: When I started out writing tests for my React application, it
author: "Milad E. Fahmy"
title: "How to set up Jest & Enzyme like a boss"
created: "2021-08-15T19:40:25+02:00"
modified: "2021-08-15T19:40:25+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-unit-testing tag-react tag-tech tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">How to set up Jest &amp; Enzyme like a boss</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*tozYeK-3Cjp7xjBAJE0FeQ.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*tozYeK-3Cjp7xjBAJE0FeQ.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*tozYeK-3Cjp7xjBAJE0FeQ.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*tozYeK-3Cjp7xjBAJE0FeQ.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*tozYeK-3Cjp7xjBAJE0FeQ.jpeg" alt="How to set up Jest &amp; Enzyme like a boss">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<figcaption>Photo by <a href="https://unsplash.com/@quinoal?utm_source=ghost&amp;utm_medium=referral&amp;utm_campaign=api-credit">Quino Al</a> / <a href="https://unsplash.com/?utm_source=ghost&amp;utm_medium=referral&amp;utm_campaign=api-credit">Unsplash</a></figcaption>
</figure>
<p>When I started out writing tests for my React application, it took me some tries before I figured out how to set up my testing environment using <code>Jest</code> &amp; <code>Enzyme</code>. This tutorial assumes that you already have a React application set up with <code>webpack</code> &amp; <code>babel</code>. We’ll continue from there.</p>
<p>This is part of a series of articles I have written. I talk about how to set up a React application for production the right and easy way.</p>
<ul>
<li><strong>Part 1</strong> <a href="https://medium.freecodecamp.org/how-to-combine-webpack-4-and-babel-7-to-create-a-fantastic-react-app-845797e036ff" rel="noopener">How to combine Webpack 4 and Babel 7 to create a fantastic React app</a> (Talks about setting up webpack with babel, along with .scss support)</li>
<li><strong>Part 2</strong> <a href="https://medium.freecodecamp.org/these-tools-will-help-you-write-clean-code-da4b5401f68e" rel="noopener">These tools will help you write clean code</a> (Talks about automating your code, so all code you write is good code)</li>
<li>This is <strong>Part 3 </strong>in which I will talk about setting up Jest with Enzyme.</li>
</ul>
<p>Before we begin, if at any time you feel stuck please feel free to check the <a href="https://github.com/adeelibr/react-starter-kit" rel="noopener"><strong>code repository</strong></a>. PR’s are most welcome if you feel things can be improved.</p>
<h3 id="prerequisite">Prerequisite</h3>
<p>You need to have Node installed in order to use npm (node package manager).</p>
<p>First things first, create a folder called <code>app</code> then open up your terminal and go into that <code>app</code> folder and type:</p><pre><code>npm init -y</code></pre>
<p>This will create a <code>package.json</code> file for you. In your <code>package.json</code> file add the following:</p>
"name": "react-boiler-plate",
"version": "1.0.0",
"description": "A react boiler plate",
"main": "src/index.js",
"author": "Adeel Imran",
"license": "MIT",
"scripts": {
"test": "jest",
"test:watch": "jest --watch",
"test:coverage": "jest --coverage --colors",
},
"devDependencies": {
"@babel/core": "^7.0.0",
"@babel/polyfill": "^7.0.0-beta.51",
"@babel/preset-env": "^7.0.0-beta.51",
"@babel/preset-react": "^7.0.0-beta.51",
"babel-core": "^7.0.0-bridge.0",
"babel-jest": "^23.4.2",
"enzyme": "^3.3.0",
"enzyme-adapter-react-16": "^1.1.1",
"jest": "^23.4.2"
}
}</code></pre>
<figcaption>This is all your need, for setting up your testing environment. Promise :D</figcaption>
</figure>
<p>Second create a folder called <code>src</code> in your <code>app</code> folder. <code>src/app/</code> folder is where all of your React code along with its test will reside. But before that let’s understand why we did what we did in our <code>package.json</code> file.</p>
<p>I’ll talk about the <code>scripts</code> in a bit (promise). But before that let’s learn why we need the following dependencies. I want you to know what goes inside your <code>package.json</code> So let’s start.</p>
<p><code>@babel/core</code> Since generally we use webpack to compile our react code. Babel is a major dependency that helps tell webpack how to compile the code. This is a peer dependency for using Jest as well.</p>
<p><code>@babel/polyfil</code> Jest requires a thing called <code>regenerator-runtime</code>, @babel/polyfill comes built-in with it and some other cool features.</p>
<p><code>@babel/preset-env</code> &amp; <code>@babel/preset-react</code> Is for features like ES6 and React, so while writing unit tests <code>Jest</code> knows about <strong>ES6</strong> syntax and <strong>JSX.</strong></p>
<p><code>babel-core</code> This is mostly a dependency for <code>Jest</code>, as we need <code>babel-core</code> for Jest to work.</p>
<p><code>babel-jest</code> Will help Babel understand the code we write in <code>Jest</code></p>
<p><code>enzyme</code> This is an assertion library that makes it easier to assert, manipulate, and traverse your React Components’ output.</p>
<p><code>enzyme-adapter-react-16</code> An adapter/middle-ware to help Jest connect with <code>enzyme</code></p>
<p><code>jest</code> Jest is the test library on which we will run our tests.</p>
<p>You can have a look at a very simple bare bone example by the cool folks at <strong>jest. </strong>It uses babel to run a simple test <a href="https://github.com/facebook/jest/tree/master/examples/babel-7" rel="noopener"><strong>here</strong></a><strong>.</strong></p>
<p>Also if you want to <a href="https://medium.freecodecamp.org/how-to-combine-webpack-4-and-babel-7-to-create-a-fantastic-react-app-845797e036ff" rel="noopener">setup webpack for React</a>, this is a detailed walkthrough on how I did it. Or you can simply go through the entire code base which uses the basic bare bones structure of what you will need when setting up your React application along with jest/enzyme (<a href="https://github.com/adeelibr/react-starter-kit" rel="noopener"><strong>starter-kit here</strong></a>).</p>
<p>Next let’s create a file called <code>jest.config.js</code> in our main <code>app</code> folder and add the following code to it. I’ll talk about what this does in a bit.</p>
// https://jestjs.io/docs/en/configuration.html
module.exports = {
// Automatically clear mock calls and instances between every test
clearMocks: true,
// An array of glob patterns indicating a set of files for which coverage information should be collected
collectCoverageFrom: ['src/**/*.{js,jsx,mjs}'],
// The directory where Jest should output its coverage files
coverageDirectory: 'coverage',
// An array of file extensions your modules use
moduleFileExtensions: ['js', 'json', 'jsx'],
// The paths to modules that run some code to configure or set up the testing environment before each test
setupFiles: ['&lt;rootDir&gt;/enzyme.config.js'],
// The test environment that will be used for testing
testEnvironment: 'jsdom',
// The glob patterns Jest uses to detect test files
testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'],
// An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
testPathIgnorePatterns: ['\\\\node_modules\\\\'],
// This option sets the URL for the jsdom environment. It is reflected in properties such as location.href
testURL: 'http://localhost',
// An array of regexp pattern strings that are matched against all source file paths, matched files will skip transformation
transformIgnorePatterns: ['&lt;rootDir&gt;/node_modules/'],
// Indicates whether each individual test should be reported during the run
verbose: false,
};</code></pre>
<figcaption>Jest config file <strong><em>app/jest.config.js</em></strong></figcaption>
</figure>
<p>Second create a file called <code>enzyme.config.js</code> in your main <code>app</code> folder and add the following code to it.</p>
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });</code></pre>
<figcaption>Enzyme config file <strong><em>app/enzyme.config.js</em></strong></figcaption>
</figure>
<p>Let’s first talk about <code>jest.config.js</code></p>
<p><code>clearMocks</code> will clear all mocks, so that the mock in <code>nth </code>test doesn’t mutate or affect the test at <code>n+1</code> position.</p>
<p><code>collectCoverageFrom</code> tells jest to collect the code coverage from all the .js files in the <code>src/</code> folder. Coverage tells you what percentage of the code is being covered by your test cases.</p>
<p><code>coverageDirectory</code> tells the Jest that the coverage directory should be named <code>coverage</code> in the main <code>app/</code> folder.</p>
<p><code>moduleFileExtensions</code> takes in an array of extensions that tells Jest which files it can test. We tell it to test all .js|.jsx|.json files.</p>
<p><code>setupFiles</code> this is really important, as it tells Jest the path from where it can get configurations for enzyme (more on this later)</p>
<p><code>testEnvironment</code> specifies what environment Jest will run its test on, since we are testing a web application. I have set the environment to <code>jsdom</code></p>
<p><code>testMatch</code> tells Jest which files it will test. I pass in 2 configurations here, one being test all files in any folder named <code>__tests__</code> or test all files that end with <code>spec.js|.jsx</code> or <code>test.js|.jsx</code></p>
<p><code>testPathIgnorePatterns</code> I don’t want Jest to run tests inside my <code>node_modules</code> folder. So I have ignored those files here.</p>
<p><code>testURL</code> This option sets the URL for the jsdom environment. It is reflected in properties such as location.href</p>
<p><code>transformIgnorePatterns</code> An array of regexp pattern strings that are matched against all source file paths, matched files will skip transformation. Here I give it only one for <code>node_modules</code></p>
<p><code>verbose</code> If true gives you a very detail log when you run tests. I don’t want to see that, and only focus on the gist of my tests. So I have set its value to <code>false</code></p>
<p>Let’s talk about <code>enzyme.config.js</code></p>
<p>I pass the path of <code>enzyme.config.js</code> in my <code>setupFiles</code> in Jest configurations. When it goes to this file, Jest takes in enzyme configurations. So that means all the tests will be run on Jest. But the assertions and everything else will be done by enzyme.</p>
<p>With this in place, our configurations are done. Let’s talk about scripts:</p><pre><code>"scripts": {
"test": "jest",
"test:watch": "jest --watch",
"test:coverage": "jest --coverage --colors",
},</code></pre>
<p><code>npm run test</code> this will run Jest and execute all the tests</p>
<p><code>npm run test:watch</code> will run all the tests and keep on watch mode, so that when we make any changes to our test cases, it will execute those test cases again.</p>
<p><code>npm run test:coverage</code> will generate a coverage report based on all the tests it executes, and give you a detailed coverage report in the <code>app/coverage</code> folder.</p>
<p>Before we run a test, we need to create one. So let’s start. In your <code>app/src/</code> folder create a file called <strong>WelcomeMessage.js</strong>.</p>
const styles = {
heading: {
color: '#fff',
textAlign: 'center',
marginBottom: 15,
},
logo: {
width: 250,
heading: 250,
objectFit: 'cover',
},
};
const WelcomeMessage = ({ imgPath }) =&gt; {
return (
&lt;Fragment&gt;
&lt;h1 style={styles.heading}&gt;
Welcome To
&lt;/h1&gt;
&lt;img src={imgPath} alt="app logo" style={styles.logo} /&gt;
&lt;/Fragment&gt;
);
};
export default WelcomeMessage;</code></pre>
<figcaption><strong><em>app/src/WelcomeMessage.js</em></strong></figcaption>
</figure>
<p>In the same folder create a file called <a href="https://gist.github.com/adeelibr/ac60da132758c7ebbcb30e28672975fe" rel="noopener"><strong>WelcomeMessage.test.js</strong></a></p>
import { shallow } from ‘enzyme’;
// Components
import WelcomeMessage from './WelcomeMessage';
function setup() {
const props = {
imgPath: 'some/image/path/to/a/mock/image',
};
const wrapper = shallow(&lt;WelcomeMessage /&gt;);
return { wrapper, props };
}
describe('WelcomeMessage Test Suite', () =&gt; {
it('Should have an image', () =&gt; {
const { wrapper } = setup();
expect(wrapper.find('img').exists()).toBe(true);
});
});</code></pre>
<figcaption><strong><em>app/src/WelcomeMessage.</em></strong><a href="https://gist.github.com/adeelibr/ac60da132758c7ebbcb30e28672975fe" rel="noopener nofollow"><strong><em>test</em></strong></a><strong><em>.js</em></strong></figcaption>
</figure>
<p>One thing to note here is you won’t be able to actually run the <code>WelcomMessage.js</code> file since you don’t have <code>webpack</code> set up with <code>babel</code>. If you are looking for a way to set that up, check out my tutorial on <a href="https://medium.freecodecamp.org/how-to-combine-webpack-4-and-babel-7-to-create-a-fantastic-react-app-845797e036ff" rel="noopener">How to combine Webpack 4 and Babel 7 to create a fantastic React app</a>. Also if you just want the source code to this tutorial, here is the <a href="https://github.com/adeelibr/react-starter-kit" rel="noopener"><strong>code repository</strong></a>. It already has Jest &amp; Enzyme set up. Feel free to make a fork and start playing with the code base.</p>
<p>Coming back to the code we just wrote, in your terminal type <code>npm run test</code>. It will execute a script and find all files that end with <code>*.test.js</code> and execute them. After it has executed you will see a message like this:</p><pre><code>Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total</code></pre>
<p>Now I know this isn’t much of a practical unit test, but I wanted this tutorial to focus on purely setting up Jest &amp; Enzyme.</p>
<p>Again here is the source code to this <a href="https://github.com/adeelibr/react-starter-kit" rel="noopener"><strong>tutorial</strong></a>.</p>
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
