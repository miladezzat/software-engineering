---
card: "https://cdn-media-1.freecodecamp.org/images/1*Nj1K70EQq51Vjec3Y4sXdQ.jpeg"
tags: [React]
description: by Gregory Beaver
author: "Milad E. Fahmy"
title: "How to test React and Redux with Redux-saga and ReactDnD (whew!)"
created: "2021-08-15T19:52:46+02:00"
modified: "2021-08-15T19:52:46+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-react tag-javascript tag-redux tag-testing ">
<header class="post-full-header">
<h1 class="post-full-title">How to test React and Redux with Redux-saga and ReactDnD (whew!)</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*Nj1K70EQq51Vjec3Y4sXdQ.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*Nj1K70EQq51Vjec3Y4sXdQ.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*Nj1K70EQq51Vjec3Y4sXdQ.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*Nj1K70EQq51Vjec3Y4sXdQ.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*Nj1K70EQq51Vjec3Y4sXdQ.jpeg" alt="How to test React and Redux with Redux-saga and ReactDnD (whew!)">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Gregory Beaver</p>
<h1 id="how-to-test-react-and-redux-with-redux-saga-and-reactdnd-whew-">How to test React and Redux with Redux-saga and ReactDnD (whew!)</h1>
<h4 id="helpers-and-systems-to-make-testing-easier">Helpers and systems to make testing easier</h4>
<p>This article is the one I wish I had found before I started coding using all the fanciness of React.</p>
<p>I’m currently working on a complex offline-first eventually-consistent scheduling application for a summer music program to replace a Mac app written in Objective C many years ago.</p>
<p>The application uses:</p>
<ul>
<li>a Node.js backend in <a href="http://expressjs.com/" rel="noopener">Express</a>, with data stored in <a href="http://couchdb.apache.org/" rel="noopener">CouchDB</a> with <a href="https://pouchdb.com/" rel="noopener">PouchDB</a> in the browser to persist state between sessions and to manage replication and conflicts, and <a href="https://facebook.github.io/react/" rel="noopener">React</a> with <a href="http://redux.js.org/" rel="noopener">Redux</a> on the frontend, <a href="https://redux-saga.github.io/redux-saga/" rel="noopener">Redux-saga</a> to manage asynchronous events, and to spice it up, a dash of drag and drop fun with <a href="https://react-dnd.github.io/react-dnd/" rel="noopener">React-DnD</a>. It’s also a test-driven application, with 100% test coverage and currently a ratio of 591 lines of source code to 7040 lines of test code.</li>
</ul>
<p>The lessons I’ve learned about avoiding brittle tests, overly dependent tests and making it easy to test just one thing in one test are encapsulated in this article.</p>
<p>First things first: this article assumes you will be transpiling es6 using <a href="https://babeljs.io/" rel="noopener">babel</a>, or using it directly in bleeding edge browsers. If you need to learn about this, there are many, many great resources on how to set up babel with <a href="https://webpack.github.io/" rel="noopener">webpack</a> or other bundlers to serve your app. This article <strong>only</strong> focuses on how to test things once your environment is up and running.</p>
<h3 id="tl-dr">TL;DR</h3>
<p>Check the source at <a href="https://github.com/cellog/testHelper" rel="noopener">https://github.com/cellog/testHelper</a></p>
<p>But you’re going to want to read this!</p>
<h3 id="why-does-this-stuff-even-matter">Why does this stuff even matter?</h3>
<p>Story time! I began coding many years ago, and have seen many trends come and go. The Object-oriented craze of the 80s and 90s revolutionized code separation, but led to unmaintainable code. When I studied computer science (briefly) in the early 90s, it was a bit like the wild west. They gave us problems, and we hacked until it worked. Mostly. There was no way to verify the system except by running your program and comparing the output to expected output as one monolithic clusterf… clusterfantasy. Clusterfriend. You get the idea.</p>
<p>In the late 90s, extreme programming became a thing, and suddenly there were test frameworks to use. Fast forward nearly 20 years, and we have mature, extensible and fast frameworks with true code isolation so we can test without side effects and languages that make this easy as well such as our friend Javascript.</p>
<p>I spent a considerable amount of effort over the years experimenting with different development strategies. Most of the time, I designed code and then wrote tests once I was sure the design was sound enough to begin that work. This was OK, except when it wasn’t, and when it wasn’t, it was catastrophe. I would find that code was actually untestable.</p>
<p>A great example is a website I coded using <a href="https://www.meteor.com/" rel="noopener">Meteor</a>. Meteor was amazing, and allowed me to go from 0 to 60 with a working, complex website in about a month and a half. It was so simple, tests didn’t even seem necessary. However, I ran into a subtle bug with the way the MongoDB was structured, and now have found 2 or 3 others that I literally cannot fix without a rewrite from scratch. When Meteor introduced testing, it was specific to Meteor, and didn’t make it easy to run tests in multiple browsers, and doesn’t support wallaby at all without a gigantic monolith of a wallaby.js which would need its own unit tests to be sure it works. I literally woke up with nightmares while I was trying to solve this problem.</p>
<p>So for this project, I decided to write tests from the beginning, experimenting with Test-driven design. What I found is that writing tests first causes the design to change from the beginning, and my code became simpler. I started to develop an intuitive suspicion when code became too complex, and began erasing entire swaths of code when the testing became difficult, or complex in any way, then finding much more elegant solutions in half the time after starting from scratch. Here’s the catch: the development pace is about 4 times slower than what I was used to from before. However, I’m not worried about subtle bugs creeping in. I’m not worried about the overall design being brittle. The feeling of confidence is exhilarating and frees me up to dream about solutions instead of putting out fires.</p>
<p>In addition, I refactor often, as I learn more about the system I’m designing and discover subtle incorrect assumptions about how the libraries and database I’m using actually work or my design choices actually work. I find myself erasing and re-purposing code very often. Because I’m erasing and moving things so often, and the lines of code of my tests are 14 times longer than the lines of actual code, in order to develop at anything resembling a reasonable pace, the tests need to be surgically designed to avoid blowing up on any little change. I learned this the hard way.</p>
<p>Most of my early tests had subtle dependencies on design choices that frankly didn’t matter to that test. I would find myself going through and copy/pasting changes to 20 or more tests when I would refactor. So I sat down and looked at ways of removing any dependencies from the tests, and wound up with the system this article describes.</p>
<p>Each test only tests 1 thing, usually just a single line of code, and no change to any other area of the component being tested will cause a test to fail, except for compile errors or other easily fixable mistakes. My hope is that my mistakes early on will help you to avoid them. With that in mind, let’s dive in!</p>
<h3 id="starting-off">Starting off</h3>
<p>Let’s begin with a list of the tools we’ll be using, and where to find them.</p>
<p>Here is the list of imports we’ll need:</p>
<p>We’ll be using standard imports from React, Redux, the bindings between React and Redux, as well as the context for React-DnD and its testing backend. Let’s talk about teaspoon.</p>
<p><a href="https://github.com/jquense/teaspoon" rel="noopener">Teaspoon</a> is a brilliant creation of Jason Quense that allows testing React components as if they were HTML using a jQuery-like interface. It allows testing whether specific properties were passed, easily triggering events with mock data, and also easily setting properties or state of React components. It’s beautiful. Go read the docs. See you in 15 minutes.</p>
<figcaption>Isn’t google image search for free images fun?</figcaption>
</figure>
<h3 id="building-the-test-helper-from-scratch">Building the test helper from scratch</h3>
<p>Welcome back!</p>
<p>The next step is constructing the basic component testing interface. What we need to do first is set up the component rendering code. I have experimented with both teaspoon’s shallow and deep rendering, and concluded that there is never a good reason to use shallow rendering.</p>
<p>The primary issue with shallow rendering is that in a week, you will have forgotten that you used shallow rendering when you refactor something, and your test will break for no good reason, forcing you to waste 15 minutes trying to figure out why until you realize all you have to do is turn on deep rendering and the test will pass.</p>
<p>So, we begin with a simple renderComponent function which we will use to render any React component, and wrap it in teaspoon so that we can test things about it:</p>
<p>This code accepts a React Component class or function, and passes in any properties specified in the props. Simple.</p>
<p>Next, we need to wire up Redux so we can handle state:</p>
<p>Now we can write tests to ensure properties are being used in our components:</p>
<p>More about how to write effective tests later. For now, let’s continue with the next problem.</p>
<p>Soon, you will need to test changing a property. Unfortunately, this is difficult to do because rendering is asynchronous, and tests are synchronous by nature. Fortunately, there is a way to force rendering to be synchronous. Without going into too much detail on why, using a higher order component to wrap your component class and setting props using local React state will force a re-render so that we can test for the effect of a property change. Here is the new renderComponent:</p>
<p>Next, we need to think about how to test container components. In my experience, it is tempting to try to test the internal React class HTML output in much the same manner, but it is far more maintainable to test what the container actually does. Container classes have 1 job: transforming redux state into react component properties.</p>
<p>Using teaspoon, you can actually verify that containers take a slice of state and reliably create the component names and values that the internal React component is expecting, without needing to know anything about the internals of the React component inside the container test.</p>
<p>The most notable exception to this fact is that we also need to test actions. In order to do this, it is best to test for either the change of state that is expected upon a dispatched action, or to check to see if the action was sent.</p>
<p>To test state, we need to access the state after an action is triggered, and we can do that by using the redux store’s getState() method. So, we will need to return the store if needed.</p>
<p>The most decoupled method is to check to see if the correct action was sent. To do this, we will need to create a redux middleware that simply logs all actions into an array that can then be used to check actions sent. Let’s modify renderComponent to make these two scenarios possible:</p>
<p>The question of how to use this more advanced functionality will be addressed in the second half of this article, where I will describe how to use this helper to write effective and limited tests.</p>
<p>The last portion of the test helper is quite simple, and just adds support for React-DnD. All we need is to wrap everything inside a DragDropContext with the test backend:</p>
<p>Now, we can access the Draggable manager and backend with <code>Draggable.getManager()</code> and <code>Draggable.getManager().getBackend()</code> as documented in the React-DnD docs. Note that the <code>.prototype</code> is required in order to access getManager().</p>
<p>At this stage, we are ready to explore how to use this test helper effectively.</p>
<h3 id="writing-great-tests-using-the-helper">Writing great tests using the helper</h3>
<p>There are a few key principles that inform how I write tests:</p>
<ol>
<li>don’t repeat anything</li>
<li>use clever boilerplate</li>
<li>test properties and actions separately</li>
</ol>
<p>Here is an example of a component being tested that has both properties and actions. The example uses <a href="http://sinonjs.org/" rel="noopener">sinon</a> to do testing of callbacks:</p>
<p>Note that if you want to test changing a property in order to test a life cycle method such as shouldComponentUpdate, you should use teaspoon’s <a href="https://github.com/jquense/teaspoon#fnprops" rel="noopener">props()</a> method. The same is true of <a href="https://github.com/jquense/teaspoon#fnstate" rel="noopener">state()</a> for testing local state changes.</p>
<p>The test above uses a few unifying ideas:</p>
<ol>
<li>even renderComponent() is abstracted into a 2 new methods, one for testing properties (render), and one for testing actions (make).</li>
<li>A generic set of default properties is specified so that there will be no React warnings for any tests, allowing each test to focus on a single property (aptly named “generic.”)</li>
<li>There is no testing of visual properties/css/html directly beyond ensuring that basic scaffolding is present</li>
<li>The test focuses on ensuring external input to the component is correct. Each property is tested, and each action is tested.</li>
<li>CSS/HTML is only used to locate the place where properties are situated within the virtual DOM of the component</li>
</ol>
<p>We will extend these ideas to test connected react-redux containers next.</p>
<h3 id="testing-redux-connected-container-components">Testing Redux-connected Container Components</h3>
<p>The most important thing a redux component does is transform state into properties and callbacks into redux actions. Using the renderComponent we created, we can easily test this:</p>
<p>Here, we can test exclusively that our connecting container is transforming state into the properties we expect, and is dispatching the actions we expect. In most of my earlier tests, I would check to make sure actions modified the state (the second method in the doSomething test), but this actually duplicates the work of ensuring that your reducers are reducing. Thus, if you refactor a reducer, you have to update every test for a connected container. This can make refactoring slower.</p>
<p>Instead, checking for which actions were dispatched is completely decoupled from the reducer, and simply verifies the contract for the connected component.</p>
<p>There are drawbacks to decoupling, in that a change to a reducer could have multiple side effects in containers. If you are aware of this, then you are fine. In a multi-developer shop, or when you develop amnesia a few months later, you may want to have everything that is connected to the reducer fail when a change is made.</p>
<h3 id="testing-a-redux-saga-action-handler">Testing a redux-saga action handler</h3>
<p>If you wish to test a redux-saga generator, that is very thoroughly documented on the redux-saga site. If you find that too confusing, and want an article about how I do it (or why I chose redux-saga), please reply in the comments.</p>
<p>One of the patterns I have run into in this application that requires redux-saga is turning a single action into multiple actions. The use case for this in my scheduling application is the listener I wrote for updating the CouchDB instance when records are changed by the client. In order to implement proper conflict detection while records are independently updated online, each record needs to have the same id. Thus, unique ids are generated based on the names of the composers of pieces the kids could play. When a composer’s name is updated, every instance of the use of that composer must also be updated. Thus, a single action spawns many new actions. Because of the potential for missed actions and inconsistent state in the database, I wrote a saga to listen for the modification action, and then send out many new actions to make the changes needed.</p>
<p>Thus, when clicking a save button, an action is sent out that is not handled by any reducer. Instead, it is intercepted by the saga, and transformed into the many individual actions that are needed. It also updates the database.</p>
<p>This could have been implemented with middleware, but redux-saga makes handling all of the asynchronous portions of the work so easy, it doesn’t make sense to re-invent the wheel when a few lines of code can do the same work and be more easily tested. How do we test this? We could set up a mock redux-saga listener for the action in our test helper, but how long do we wait for the saga to complete before we test our state to ensure it was modified? How do we prevent the saga from actually trying to modify a database? A nightmare ensues!</p>
<p>Long story short: in this case, all we need to verify is that the connected component is dispatching the action that will be intercepted by the redux-saga. A separate test can be used to verify the correctness of the saga itself. Once that is confirmed, then we can be sure that the action will work.</p>
<p>Thus, we can use the log middleware we created in our test helper to see if the action we intended to send is in fact sent. Easy!</p>
<h3 id="testing-react-dnd">Testing React-DnD</h3>
<p>React-DnD needs a drag and drop context to work without errors, even if you’re not doing anything with drag and drop in the test. If you have wrapped any of your components, you will still want to be able to test the basic functionality of that component, and our test helper makes this possible. You can test the basic functionality using our test helper, and ignore the drag and drop, then test the drag and drop in a separate test using the methods laid out in the documentation for React-DnD if needed. Very easy!</p>
<p>The only gotcha I found is that it is not intuitive how to mock dragging and dropping, and the documentation is spotty at best. Here is a sample test from my real project showing how to test the drag and drop interaction. Note that the components in question are dumb components, and the property <code>book</code> and <code>clear</code> are callbacks supplied by the redux-connected container component. I’ll include the container even though it isn’t actually tested by these tests to make that clearer. Also note the creation of helper functions to extract the sourceId and targetId from the component directly, defined as the <code>source</code> and <code>target</code> functions in Slot.test.js.</p>
<h3 id="tools-i-use-that-have-saved-my-programming-life">Tools I use that have saved my programming life</h3>
<p>If you haven’t invested in wallaby.js or WebStorm, you’re missing out. Having instantaneous test results, instantaneous test coverage visible line by line as well as your continuous integration with karma is a godsend. I use karma on BrowserStack to verify the code doesn’t break in mobile and desktop browsers, and wallaby to quickly verify that my code works and is covered prior to commit.</p>
<p>Here is a sample wallaby.js I use for my project, with support for CSS modules in tests:</p>
<p>In addition, if you aren’t using <a href="https://getstorybook.io/" rel="noopener">React-Storybook</a>, you’re missing out. It’s the best way to develop your visual look of the app with some assurance it will work. It systemizes manual testing, the last element of any successful app, and recent versions can even automate that testing, although I have not used that personally.</p>
<h3 id="conclusion">Conclusion</h3>
<p>There are many different ways of testing. If you’re developing a complex application in react-redux, you’ll want to take a hard look at how to decouple your components so that they can be easily tested. Fortunately, with this simple test helper and principles for test design, testing is easy, and you can refactor with limited side effects on unrelated tests, making development fast, and change easy.</p>
<p>Happy coding! Please leave a comment if you have other systems I haven’t mentioned, I’m always looking for new ideas. Also, if something I’ve said is unclear or incomplete, please ask and I’m happy to try to clarify.</p>
<p>Click that pretty heart button too, if you enjoy the article!</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
