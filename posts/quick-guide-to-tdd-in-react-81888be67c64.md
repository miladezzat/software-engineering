---
card: "https://cdn-media-1.freecodecamp.org/images/0*be_rcBa_vhJE6cVD."
tags: [React]
description: by Michał Baranowski
author: "Milad E. Fahmy"
title: "A quick guide to test-driven development in React"
created: "2021-08-15T19:46:48+02:00"
modified: "2021-08-15T19:46:48+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-react tag-testing tag-programming tag-javascript tag-tech ">
<header class="post-full-header">
<h1 class="post-full-title">A quick guide to test-driven development in React</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/0*be_rcBa_vhJE6cVD. 300w,
https://cdn-media-1.freecodecamp.org/images/0*be_rcBa_vhJE6cVD. 600w,
https://cdn-media-1.freecodecamp.org/images/0*be_rcBa_vhJE6cVD. 1000w,
https://cdn-media-1.freecodecamp.org/images/0*be_rcBa_vhJE6cVD. 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/0*be_rcBa_vhJE6cVD." alt="A quick guide to test-driven development in React">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Michał Baranowski</p>
<h1 id="a-quick-guide-to-test-driven-development-in-react">A quick guide to test-driven development in React</h1>
<figcaption>Random picture by <a href="https://unsplash.com/@deannaritchie?utm_source=medium&amp;utm_medium=referral" rel="noopener" target="_blank" title="">Deanna Ritchie</a> on <a href="https://unsplash.com?utm_source=medium&amp;utm_medium=referral" rel="noopener" target="_blank" title="">Unsplash</a></figcaption>
</figure>
<p>Following the principles of <strong>Test-Driven Development</strong> (TDD) when writing a front-end<strong> </strong>React app might seem more difficult than doing the same on the back-end.</p>
<p>First, we need to somehow <strong>render</strong> our component. Then we need to <strong>simulate</strong> user interaction with a browser. Next we respond to changes in <strong>props</strong> and <strong>state,</strong> and finally come up with a way to test <strong>asynchronous</strong> methods triggered by the click of a button.</p>
<p>Trying to cover all these cases in our tests often results in tests that are difficult to read. They also often depend on one another. We mock a lot, and in return we have tests full of anti-patterns.</p>
<h3 id="don-t-waste-your-time">Don’t waste your time</h3>
<p>From what I’ve seen, many programmers create working React components first.Then they try to cover them with tests, just to realize that the components cannot be tested in their current implementation. Then they need to refactor. Because of that they lose patience, time, and their employer’s money.</p>
<h3 id="available-solutions">Available solutions</h3>
<p>Fortunately for us, there are many testing libraries that can help us address these problems. We can try rendering React components with <a href="https://github.com/airbnb/enzyme" rel="noopener"><strong>Enzyme</strong></a> and mock API responses using <a href="https://github.com/ctimmerm/axios-mock-adapter" rel="noopener"><strong>MockAxios</strong></a>. However, these libraries usually have so many methods and options that it might get confusing, especially for people who have just started writing tests.</p>
<p>Let’s take <strong>Enzyme</strong> for example — what’s the difference between the <strong>Shallow</strong>, <strong>Mount</strong> and <strong>Render</strong> methods? And which should you use? This is not what you should be worried about when you write your tests, in my opinion. It should be as straight forward as possible.</p>
<h3 id="our-project">Our project</h3>
<p>For our Quick Guide purposes, we’re going to create a small React app. After clicking on a button, a random joke about <a href="https://pl.wikipedia.org/wiki/Chuck_Norris" rel="noopener">Chuck Norris</a> will be fetched and displayed.</p>
<blockquote>No one has ever pair-programmed with Chuck Norris and lived to tell about it.</blockquote>
<p>So let’s begin.</p>
<p>Kick-off by creating a React project in <a href="https://codesandbox.io/s/new" rel="noopener"><strong>CodeSandbox</strong></a><strong>,</strong> and then install the following dependencies (J<strong>est</strong><em> </em>is already pre-installed if you started from the link above):</p>
<ul>
<li><a href="https://github.com/axios/axios" rel="noopener"><strong>axios</strong></a> — used for fetching data from the external API</li>
<li><a href="https://github.com/ctimmerm/axios-mock-adapter" rel="noopener"><strong>axios-mock-adapter</strong></a> — used for mocking server responses</li>
<li><a href="https://github.com/kentcdodds/react-testing-library" rel="noopener"><strong>react-testing-library</strong></a><strong> </strong>— light, easy to use testing library for rendering, simulating actions, and handling async methods — created by <a href="undefined" rel="noopener">Kent C. Dodds</a></li>
<li><a href="https://facebook.github.io/jest/" rel="noopener"><strong>jest</strong></a><strong> </strong>— for running the tests and creating assertions</li>
</ul>
<h4 id="folder-files-structure">Folder/files structure</h4>
<ul>
<li><strong>src/index.js</strong> — entry point for our React app</li>
<li><strong>src/jokeGenerator.js</strong> —<em> </em>our <a href="https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0" rel="noopener">container</a> component which fetches, controls, and provides data</li>
<li><strong>src/joke.js</strong> — simple presentation component</li>
<li><strong>src/__tests__/jokeGenerator.test.js</strong> —<em> </em>contains our tests</li>
</ul>
<h4 id="your-first-test">Your first test</h4>
<p>Each time before we create a component<strong> we will write a failing test first and then try to make it pass</strong>. Let’s start by writing a test for our dummy component <strong>&lt;Joke</strong> /&gt; which will render a text from props.</p>
<figcaption>jokeGenerator.test.js</figcaption>
</figure>
<p>Reading from the top: we use a <a href="https://github.com/kentcdodds/react-testing-library#render" rel="noopener">render</a> method from the <strong>react-testing-library </strong>and pass the &amp;<strong>lt;Jok</strong>e/&gt; component (which does not exist at this point) into it. It returns an object containing a few very useful methods (find the full list of available me<a href="https://github.com/kentcdodds/react-testing-library#render" rel="noopener">thod</a>s here) — for ex<strong>ample getBy</strong>TestId. It then returns an HTML element bas<strong>ed on data-t</strong>estid as an argument.</p>
<p>Next, we write an <strong>expect</strong> using above method and <strong>data-testid,</strong> and check if the element contains the text from props. After running the tests, we get:</p>
<blockquote>Joke is not defined</blockquote>
<p>Yep, we want it to fail! <strong>&lt;Joke</strong> /&gt; does not exist yet, remember? We have only created an <em>empty jo</em>ke.j<em>s</em> file so far. We wrote a test in which we can clearly see what we expect the component to do. Now our job is to make the<strong> test pass without modifying the tes</strong>t code. Let’s do that then:</p>
<figcaption>joke.js</figcaption>
</figure>
<p>Now, if you did everything just like I did, the test should pass :)</p>
<h4 id="second-component">Second component</h4>
<p>Our second component will be responsible for fetching a random joke after a user clicks a button. We’ll save it in the component’s state and pass it down to our <strong>&lt;Joke </strong>/&gt; component. We would also like to display a default message when no joke has been loaded yet.</p>
<p>Of course, we start with test first. It is a bigger component, so we’ll be writing the test step-by-step. We’ll also make sure it is passing as often as possible.</p>
<figcaption>jokeGenerator.test.js</figcaption>
</figure>
<p>We are already familiar with the <strong>render</strong> method, but this time we are taking <strong>getByText</strong> from the return object. As you might have guessed, the method returns an HTML Element if one exists in the DOM.</p>
<p>Run the tests and….</p>
<blockquote>JokeGenerator is not defined</blockquote>
<p>You know what to do with it:</p>
<figcaption>jokeGenerator.js</figcaption>
</figure>
<p>The test is still failing, but this time it outputs a different error:</p>
<blockquote>Unable to find an element with the text.</blockquote>
<p><strong>You haven’t loaded any jokes yet</strong>. This could be because the text is broken up by multiple elements. In this case, you can provide a function for your text matcher to make your matcher more flexible.</p>
<p>Let’s quickly fix that by introducing a <strong>state</strong> to our component and displaying a default message when there is no <strong>joke</strong> in the <strong>state</strong>.</p>
<figcaption>jokeGenerator.js</figcaption>
</figure>
<p>Tests are passing now, so we can move on to add new functionality. Imagine that when we click on a button, the default text in the component disappears to make room for a “<em>Loading…</em>” message. Sounds pretty straightforward, right? We can test this scenario with only <strong>three</strong> lines of code!</p>
<p>Let’s import the <strong>Simulate</strong> method first, as we’re going to need that:</p>
<blockquote>import { render, Simulate } from “react-testing-library”</blockquote>
<figcaption>Append it to our second test — jokeGenerator.test.js</figcaption>
</figure>
<p>The difference between <strong>queryByText </strong>and<strong> getByText </strong>is in what each one returns when the element is not found. The first one returns <strong>null </strong>and the second one throws an <strong>error message</strong>. Re-running the tests:</p>
<blockquote>Unable to find an element with the text: <strong>Load a random joke</strong>…</blockquote>
<p>We need to create a button and set the <strong>onClick </strong>method which will set the <strong>loading</strong> state to <strong>true</strong>.</p>
<figcaption>jokeGenerator.js</figcaption>
</figure>
<p>Just like that the test is passing again. Now it’s time to fetch our random joke! Well… it won’t be random in our tests. We’ll mock it using <strong>MockAxios</strong>.</p>
<blockquote>import * as axios from "axios"<br>import MockAxios from “axios-mock-adapter”</blockquote>
<p>Above our tests in <strong>jokeGenerator.test.js,</strong> insert these two lines of code:</p>
<figcaption>Insert above all tests — jokeGenerator.test.js</figcaption>
</figure>
<p>The first line creates a new instance of <strong>MockAxios</strong> with a random delay. The second line takes and executes a callback function after running all the tests in this file, and removes the mocked state from <strong>axios</strong>.</p>
<p>At the top of our second test where we test the <strong>&lt;JokeGenerator</strong> /&gt; component, add:</p>
<figcaption>Top of the second test — jokeGenerator.test.js</figcaption>
</figure>
<p>It mocks the response of any <strong>GET</strong> call done via <strong>axios</strong>. At the end of the same test:</p>
<figcaption>jokeGenerator.test.js</figcaption>
</figure>
<p>Don’t forget to import <strong>wait</strong>:</p>
<blockquote>import { render, Simulate, wait } from “react-testing-library”</blockquote>
<p>The<strong> wait</strong> method waits (4500ms by default) until a callback function stops throwing an error. It is checked at 50ms intervals. Basically we’re just waiting until the loading message disappears from the DOM.</p>
<p><a href="https://github.com/TheBrainFamily/wait-for-expect" rel="noopener"><strong>wait</strong></a> is also available as a separate <a href="https://github.com/TheBrainFamily/wait-for-expect" rel="noopener">npm package</a> (<strong>react-testing-library</strong> uses it as a dependency). It was created by <a href="undefined" rel="noopener">Łukasz Gozda Gandecki</a>.</p>
<p>After making all of the code modifications and running the tests, we should get the following fail message:</p>
<blockquote>Expected the element <strong>not</strong> to be present<br>Received : &lt;div&gt;Loading…&lt;/div&gt;</blockquote>
<p>What do you think it might be? According to our test, we expect the loading message to be gone. Additionally, we want to fetch our joke from the API and save it to the <strong>state</strong> so that next <strong>expect</strong> passes.</p>
<figcaption>jokeGenerator.js</figcaption>
</figure>
<figcaption>Insert into render() method — jokeGenerator.js</figcaption>
</figure>
<p>Tests should pass again now. We are sure that everything works as expected…aren’t we? Notice that we have <strong>never opened our browser and verified manually if our app even works</strong>…However, thanks to how we were writing our tests (<a href="https://twitter.com/kentcdodds/status/977018512689455106" rel="noopener">so that our tests resemble the way the user would use the application</a>), we can be almost 100% sure that our small app is simply working.</p>
<p>As the last piece of code, let’s add this to the index.js and open the browser :)</p>
<figcaption>index.js</figcaption>
</figure>
<h3 id="bonus">Bonus</h3>
<p>Because of the way we wrote our tests, we can utilize them as <strong>e2e</strong> tests <strong>without adding a single line of code! </strong>All we need to do is to remove all the lines related to <strong>MockAxios </strong>and run the tests again! They will now use a real external API. Cool, isn’t it? :)</p>
<h3 id="summary">Summary</h3>
<p>All the code is available on the project’s <a href="https://codesandbox.io/s/6yq6v1xk3" rel="noopener"><strong>CodeSandbox</strong></a><strong>. </strong>I really encourage you to get familiar with a full <a href="https://github.com/kentcdodds/react-testing-library" rel="noopener"><strong>react-testing-library</strong></a> documentation. You’ll find there many more examples and use cases.</p>
<p>I hope you enjoyed my <strong>Quick Guide to TDD in React, </strong>and that you’ve learned something new today.</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
