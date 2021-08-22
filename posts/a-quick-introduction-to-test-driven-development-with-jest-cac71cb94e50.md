---
card: "https://cdn-media-1.freecodecamp.org/images/1*0jCUKud4CkbbmNrFDzIQZw.png"
tags: [JavaScript]
description: by Nicolas Mitchell
author: "Milad E. Fahmy"
title: "A quick introduction to test driven development with Jest"
created: "2021-08-15T19:44:21+02:00"
modified: "2021-08-15T19:44:21+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-jest tag-test-driven-development tag-tech tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">A quick introduction to test driven development with Jest</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*0jCUKud4CkbbmNrFDzIQZw.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*0jCUKud4CkbbmNrFDzIQZw.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*0jCUKud4CkbbmNrFDzIQZw.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*0jCUKud4CkbbmNrFDzIQZw.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*0jCUKud4CkbbmNrFDzIQZw.png" alt="A quick introduction to test driven development with Jest">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Nicolas Mitchell</p>
<p>This article is a simple walkthrough of how to apply Test Driven Development (TDD) principles to a JavaScript exercise using Jest.</p>
<h3 id="intro">Intro</h3>
<p>After a few years of experience developing on my own personal projects, I recently decided to become a Full-Stack developer.</p>
<p>This new situation encouraged me to start thinking about practices that I’ve neglected until now, such as testing my code.</p>
<p>That is why I wanted to start my journey through Test Driven Development. I’ve decided to share my first steps here with you.</p>
<h3 id="the-exercise">The exercise</h3>
<p>I decided to start with the first Osherove TDD kata. You can access the full exercise <a href="http://osherove.com/tdd-kata-1/" rel="noopener">here</a>.</p>
<p>The goal is to deliver a function that takes a string entry (<code>"1, 2, 3"</code> for instance) and returns the sum of all numbers.</p>
<p>Our project will have the following structure:</p><pre><code>js-kata-jest/</code></pre><pre><code>├─ src/</code></pre><pre><code>  └─ kata.js</code></pre><pre><code>├─ test/</code></pre><pre><code>  └─ kata.test.js</code></pre><pre><code>└─ package.json</code></pre>
<h3 id="setting-up-the-test-environment">Setting up the test environment</h3>
<p>First we have to set up the test environment. As a React developer, I decided to go with <a href="https://facebook.github.io/jest/" rel="noopener">Jest</a>. You may use any other testing library of your choice.</p>
<h4 id="installing-jest-dev-dependency">Installing Jest dev dependency</h4><pre><code>yarn add --dev jest</code></pre>
<p>or with <a href="https://www.npmjs.com/" rel="noopener">npm</a>:</p><pre><code>npm install --save-dev jest</code></pre>
<h4 id="activating-jest-on-your-code-editor">Activating Jest on your code editor</h4>
<p>I am using Atom as a code editor, and installed the <a href="https://atom.io/packages/tester-jest" rel="noopener">tester-jest</a> package. This allowed me to run my tests on save for any <code>*.test.js</code> file.</p>
<h3 id="test-driven-development">Test Driven Development</h3>
<p>The theory behind TDD is quite simple, and revolves around 3 steps:</p>
<ol>
<li>Writing a test for a small part of a functionality and checking that this new test is failing (Red step)</li>
<li>Writing the code that makes the test pass, then checking that your previous test and the new one are successful (Green step)</li>
<li>Refactoring the code to make sure it is clear, understandable, and behaves well with the previous functionalities</li>
</ol>
<p>In the next part, we are going to go into detail for each of these steps.</p>
<h3 id="solving-the-exercise">Solving the exercise</h3>
<h4 id="first-loop">First loop</h4>
<p>First, we want to handle the case where our <code>add</code> function is given an empty string or one with a single element.</p>
<ol>
<li><strong>Writing the tests</strong></li>
</ol>
<ul>
<li>The first test checks that an empty string returns 0</li>
<li>The second checks that a single element string returns the provided element</li>
</ul>
<p><strong>2. Writing the code</strong></p>
<ul>
<li>First we return 0 by default</li>
<li>Then we provide an <code>if</code> statement that handles the parsing of a single provided element</li>
</ul>
<p>Here is the final code:</p>
<p><strong>3. Refactoring the code</strong></p>
<p>As it is our first functionality, we can skip this step for now — but we will soon return to it. ;)</p>
<h4 id="second-loop">Second loop</h4>
<p>We will now handle the case where the string contains multiple elements:</p>
<ol>
<li><strong>Writing the tests</strong></li>
</ol>
<p>The new test makes sure that calculation of a multiple element string was done correctly:</p>
<p><strong>2. Writing the code</strong></p>
<ul>
<li>First we create a new <code>if</code> statement on purpose to be sure that our first two tests affect the new solution</li>
<li>Second we create a new array from the entry string, using the <code>,</code> as a separator</li>
<li>Finally, we parse each element of the newly created array to calculate the sum</li>
</ul>
<p>Here is the final code:</p>
<p><strong>3. Refactoring the code</strong></p>
<p>As we can see above, there are several problems within our code:</p>
<ul>
<li>the two if statement shouldn’t be decorrelated, as adding one or more to zero should behave the same.</li>
<li>the separator value is drowned in the code. This adds complexity if we want to change to a <code>;</code> separator, for instance.</li>
<li>a large part of our code is located in an <code>if</code> statement. We could reverse the logic to extract our main code from it.</li>
</ul>
<p>So we can add a new <code>separator</code> variable, which will decide on the separator type. We can also merge the two <code>if</code> statement into one, and then reverse the logic.</p>
<p>We can now run our test again before moving on to the next loop.</p>
<h4 id="third-loop">Third loop</h4>
<p>We can now handle the declaration of new separators and avoid the entry of negative numbers.</p>
<ol>
<li><strong>Writing the tests</strong></li>
</ol>
<ul>
<li>The first new test focuses on a single separator within the default values.</li>
<li>The second will make sure that we can configure a new separator directly within the input.</li>
<li>The third one will check that an error is thrown when a negative value is passed as an entry.</li>
</ul>
<p><strong>2. Writing the code</strong></p>
<ul>
<li>First, we replace the <code>separator</code> string by a <code>separators</code> array, where we add the <code>\n</code> value.</li>
<li>Second, we introduce a new separator search through a regular expression. That will be added to the previous array.</li>
<li>We can now join the previous array elements to split the string with them.</li>
<li>We filter the resulting array to remove all non-number elements.</li>
<li>We add a new array, <code>negatives</code>, that will spot negative values within the entry.</li>
<li>If the <code>negatives</code> array isn’t empty, throw an error.</li>
</ul>
<p>Here is the final code:</p>
<p><strong>3. Refactoring the code</strong></p>
<p>We now have two new possible optimizations:</p>
<ul>
<li>We are using the regular expression twice, and are willing to change it easily. We can extract it within a new <code>const regexp</code>.</li>
<li>We calculate <code>parseInt(list[i])</code>several times, so we should store the value only once to speed up the <code>for</code> loop.</li>
</ul>
<h3 id="conclusion">Conclusion</h3>
<p>We can now run our tests again to make sure that all our expected functionalities are still working.</p>
<p>You may now continue on your own as well. Check out the definitive version of the kata with all tests passing <a href="https://github.com/nclsmitchell/js-kata-jest" rel="noopener">here</a>.</p>
<p>Feel free to reach me on Twitter if you have any questions or comments <a href="https://twitter.com/nclsmitchell" rel="noopener">@nclsmitchell</a> or through Medium :)</p>
<p>Thanks for your reading, and please clap for me if you like this post.</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
