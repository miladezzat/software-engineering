---
card: "https://cdn-media-1.freecodecamp.org/images/1*Vv0HNvRhU0ihKVaBIpDUww.jpeg"
tags: [React]
description: by Marcelo Lotif
author: "Milad E. Fahmy"
title: "Real integration tests with React, Redux and Router"
created: "2021-08-15T19:51:36+02:00"
modified: "2021-08-15T19:51:36+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-react tag-redux tag-front-end-development tag-testing tag-javascript ">
<header class="post-full-header">
<h1 class="post-full-title">Real integration tests with React, Redux and Router</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*Vv0HNvRhU0ihKVaBIpDUww.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*Vv0HNvRhU0ihKVaBIpDUww.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*Vv0HNvRhU0ihKVaBIpDUww.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*Vv0HNvRhU0ihKVaBIpDUww.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*Vv0HNvRhU0ihKVaBIpDUww.jpeg" alt="Real integration tests with React, Redux and Router">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Marcelo Lotif</p>
<h1 id="real-integration-tests-with-react-redux-and-router">Real integration tests with React, Redux and Router</h1>
<p>After being bitten a couple of times by bad refactoring and a broken app — even with all my tests green — I started to research about integration tests in React. Possibly also with Redux and React Router.</p>
<p>To my absolute shock, I couldn’t find any good material out there. The ones I found either were doing incomplete integration tests or simply doing it the wrong way.</p>
<p>So here we’re going to build an integration test that initializes a React component, fires a simulated user interaction and assert that our component changes the way we expect it to change.</p>
<p>What this is <strong>not</strong> about: unit testing. I’m not going to dive into this right now, but there is a very good reason we at <a href="http://waveapps.com" rel="noopener">Wave</a> (<a href="https://www.waveapps.com/about-us/jobs/" rel="noopener">we’re hiring</a>, by the way!) are slowing down on our unit tests and switching to integration tests. Scroll to the bottom if you’re interested in that.</p>
<p>Disclosure: I wouldn’t have had those tests working as smoothly as they are now if it wasn’t for the great front end folks at Wave, especially the amazing <a href="https://github.com/tommyzli" rel="noopener">Tommy Li</a> who figured out how to connect the router, so thank you!</p>
<h3 id="setting-up">Setting up</h3>
<p>For this project, we are going to use <a href="https://facebook.github.io/react/" rel="noopener">React</a>, <a href="https://github.com/reactjs/react-redux" rel="noopener">Redux</a>, <a href="https://github.com/ReactTraining/react-router" rel="noopener">React</a>/<a href="https://github.com/acdlite/redux-router" rel="noopener">Redux Router</a> (optional) and <a href="https://github.com/gaearon/redux-thunk" rel="noopener">Thunk</a> (optional) to run the app, <a href="https://facebook.github.io/jest/" rel="noopener">Jest</a> and <a href="https://github.com/airbnb/enzyme" rel="noopener">Enzyme</a> for testing.</p>
<p>I’ll skip the setup of all those since there are many great tutorials out there about that.</p>
<p>To set up the basics of my integration test, I’m gonna cheat a little bit and create an util function with some boilerplate code:</p>
<h3 id="testing">Testing</h3>
<p>In your test file, you will first need to import some dependencies, your reducer and your component:</p>
<p>Then, on the <em>beforeEach</em> function, set up your integration test variables using that util function:</p>
<p>(If you don’t use React Router or Thunk, you can just remove their references here and on the util function and it’s going to work the same way.)</p>
<p>Now you’re all set to mount your component and test it. Let’s imagine this component renders a <em>div</em>, which displays a text coming from the reducer. When clicking on it, the text should change to another string, let’s say ‘new text’. To test that interaction, you can simply do:</p>
<p>That’s it ☺ With this very simple code you’re testing the <em>div</em> calling an action producer on click, that dispatches an action to the reducer, that changes the data, triggering a re-render on the component, that is expected to change the way you want it to change. If any of those steps fail, your test goes red and you know that functionality of your app is not working.</p>
<p>You can try to go deeper in this chain and assert some other things:</p>
<h3 id="testing-api-calls">Testing API calls</h3>
<p>In the real world you’ll probably need to call some APIs to fetch data for your app, and that is the part you need to mock in order to test things effectively. We’ll use Jest here, which is not the best way to mock http requests, but I’ll do it for the convenience.</p>
<p>Assuming you use a hypothetical http client to call an endpoint through its <em>get</em> function when you click on the <em>div</em>, then set the return of this call into the reducer that gets displayed back in the <em>div</em>:</p>
<p>In an even more real world application, that <em>get</em> function will return you a Promise object. Things become a little complicated from here because the simulated click function is unaware of that promise and there is no way of executing its <em>then</em> function. The reference to the object has been lost.</p>
<p>We will need to somehow wait for that promise to resolve before executing the assertions. We work around this by doing a little hack in an util function:</p>
<p>And our test is now going to look like this:</p>
<p>With the <em>async … await</em> statement , available since ES7, our test is going to wait until all promises have been resolved so it can make its assertions. Jest currently has no solution for this, but this hack works pretty well in real life.</p>
<p>If you have more complicated action producers with other promises being called in the <em>resolve</em> or <em>reject</em> of that first promise, I suggest you unit test those calls and also test the final results of all cases in integration tests.</p>
<h3 id="more-testing">More Testing</h3>
<p>In case you need to set an initial state to your component , you can dispatch actions manually until you reach the desired state:</p><pre><code>store.dispatch({ payload: 'data', type: 'SOME_ACTION' });</code></pre>
<p>You can also go crazy on those assertions and test every little thing, or keep it simple knowing the test coverage is going to be the same as if you have added unit tests on each of the layers of this app, but with a lot less code. In addition, you are also testing how those layers connect with each other and how your app responds to user input and data store changes.</p>
<p>Please leave your opinion in the comments section, there is a lot of improvements to be made here and I’m happy to modify this according to your suggestions. Thanks!</p>
<h3 id="y-u-no-unit-test-">Y U NO UNIT TEST?!?</h3>
<p>We at <a href="http://waveapps.com" rel="noopener">Wave</a> (did I mention <a href="https://www.waveapps.com/about-us/jobs/" rel="noopener">we’re hiring</a>?) have done a ton of front end unit tests before and, to be honest, the majority of them have been somewhat useless. Sure, they are at the core of TDD, but some reducers and action producers unit tests are just boilerplate code and don’t add much value to the code or the TDD process.</p>
<p>You can actually do really good TDD with integration tests only, and they are going to be useful in the future to spot broken links between your app layers and ultimately to check if your app is behaving as expected, which is what automated tests are for.</p>
<p>Don’t get me wrong, we still unit test edge cases that are too complicated or annoying to reproduce on integration tests, but the majority of our unit tests became useless as soon as we added integration tests like the above. In the end, it means the time we now spend thinking about, developing and fixing tests is a lot lower than it was before and they are much more effective in spotting problems in the app. So, win win ☺</p>
<p>One problem you might find is with deep mounting, instead of shallow rendering. You might think some component trees are too complicated to mount, but I’ll say another advantage of mounting the root component is to test if the child components are being instantiated correctly. If you have connected child components, you can test them separately if you prefer. I haven’t tried shallow rendering a connected component to see if this integration test setup still works, but you can try. If you don’t like to mount and don’t have connected child components, another possibility I haven’t explored is shallow render and then manually connecting them. The important thing here is to feel comfortable with the amount and the quality of the tests you’re writing, making sure they actually help in automatically doing some regression testing and discovering hidden issues for you.</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
