---
card: "https://cdn-media-1.freecodecamp.org/images/1*9lDu6F6XfDmzTsF3tCRDVA.png"
tags: [React]
description: by Sam Ollason
author: "Milad E. Fahmy"
title: "An Introduction to Redux-Logic"
created: "2021-08-15T19:39:31+02:00"
modified: "2021-08-15T19:39:31+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-react tag-redux tag-javascript tag-tech tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">An Introduction to Redux-Logic</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*9lDu6F6XfDmzTsF3tCRDVA.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*9lDu6F6XfDmzTsF3tCRDVA.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*9lDu6F6XfDmzTsF3tCRDVA.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*9lDu6F6XfDmzTsF3tCRDVA.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*9lDu6F6XfDmzTsF3tCRDVA.png" alt="An Introduction to Redux-Logic">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Sam Ollason</p>
<h1 id="an-introduction-to-redux-logic">An Introduction to Redux-Logic</h1>
<figcaption>Photo by <a href="https://unsplash.com/photos/5fNmWej4tAA?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText" rel="noopener" target="_blank" title="">Helloquence</a> on <a href="https://unsplash.com/search/photos/work?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText" rel="noopener" target="_blank" title="">Unsplash</a></figcaption>
</figure>
<p>This article will go through a high-level overview of <a href="https://github.com/jeffbski/redux-logic" rel="noopener">Redux-Logic</a>. We will look at what is it, why it is needed, how it differs from other Redux middleware and why I think it’s the best choice. We will then see an example of a simple <a href="https://github.com/SamOllason/weather-app-redux-logic-example" rel="noopener">Weather app</a> to demonstrate how the core concepts are put into practice.</p>
<p>This article assumes you have a good understanding of React and Redux.</p>
<h3 id="a-quick-refresher-on-redux"><strong>A quick refresher on Redux</strong></h3>
<p>Redux is a state container for JavaScript applications and is commonly used with React. It provides a central place for storing data that is used across your application. Redux also provides a framework for making <strong>predictable</strong> state mutations. Using Redux makes it easier to write, understand, debug and scale data-driven and dynamic applications.</p>
<p>In Redux, components call <strong>action creators</strong> which dispatch <strong>actions</strong>. Actions are (usually!) small plain objects that express an intent or an instruction. The actions can also contain ‘payloads’ (i.e. data).</p>
<p>Application state is managed by <strong>reducers</strong>. They sound more complicated than they are! Actions are handled by a root reducer which then passes the action and the payload to a particular reducer. This reducer will <strong>take a copy</strong> of the application state, <strong>mutate</strong> <strong>the</strong> <strong>copy</strong> (according to the action and its payload) and then update the state in the application <strong>Store</strong>.</p>
<h3 id="why-the-need-for-redux-logic"><strong>Why the need for Redux Logic?</strong></h3>
<p>By default, all actions in Redux are dispatched synchronously. This presents a challenge for any application that needs to support asynchronous behaviour such as fetching data from an API … so pretty much any application!</p>
<p>To handle async behaviour using Redux, we need some kind of <a href="https://en.wikipedia.org/wiki/Middleware" rel="noopener">middleware</a> that does some processing between when the action is dispatched and when the action reaches the reducers. There are several popular libraries for providing this functionality.</p>
<p>After exploring the various options, I have been using Redux-Logic in a variety of projects for a while now and have found it to be great!</p>
<h3 id="redux-logic-lifecycle"><strong>Redux-Logic lifecycle</strong></h3>
<p>Redux-Logic provides middleware that performs some processing between when an action is dispatched from a component and when the action reaches a reducer.</p>
<p>We use the <a href="https://github.com/jeffbski/redux-logic" rel="noopener">redux-logic</a> library to create ‘Logic’. These are essentially functions that intercept particular <strong>plain object</strong> actions, perform asynchronous processing and then dispatch another <strong>plain objec</strong>t action. Logic functions are really declarative and flexible, as we shall see!</p>
<p>An important thing to take away here is that all actions that Redux-Logic works with are <strong>plain objects</strong>. The action that is dispatched by the UI component and the action that is then dispatched by the Logic will <strong>always</strong> be a plain object (as opposed to, for example, a function). We will revisit this below when we compare different middleware options.</p>
<p>Under the hood, Redux-Logic uses ‘observables’ and reactive programming. <a href="https://github.com/jeffbski/redux-logic" rel="noopener">Read more about that here</a>.</p>
<h3 id="data-flow"><strong>Data flow</strong></h3>
<p>Below, for comparison, is a diagram I created showing the important points in the lifecycle of a synchronous redux process. There is no middleware included (because none is needed!).</p>
<p>Now here is a diagram showing the important parts of a project that use the redux-logic library to handle asynchronous actions. This will be useful to refer to later alongside the example below.</p>
<p>You can see how the middleware operates in between when an action is dispatched and when it is handled by a reducer.</p>
<h3 id="main-differences-from-other-solutions">Main differences from other solutions</h3>
<p><a href="https://github.com/reduxjs/redux-thunk" rel="noopener"><strong>Redux-Thunk</strong></a> is a popular choice for Redux middleware that also allows you to support asynchronous behaviour. To handle asynchronous behaviour using Redux-Thunk your actions creators have to <strong>return functions </strong>as opposed to returning plain objects with Redux-Logic. I believe that dispatching plain objects with Redux-Logic makes your code much easier to write and much easier to understand.</p>
<p>Furthermore, I believe the ‘plain object’ approach for handling asynchronous behaviour fits more naturally alongside the rest of the (synchronous) Redux architecture, which makes this middleware fit in more organically with Redux.</p>
<p>Another popular Redux middleware is <a href="https://redux-saga.js.org/docs/introduction/BeginnerTutorial.html" rel="noopener"><strong>Redux-Saga</strong></a>. I found the learning curve of getting my head around sagas (a relatively new ES6 feature) quite steep when I looked at this option. This would be compounded if you wanted to introduce this library into an application managed by a team with several people. Additionally, I think that if they are not well managed, then sagas can create complicated-looking code compared to the Logic you create with redux-logic. This can impact development speed and code maintainability.</p>
<h3 id="overview-of-example"><strong>Overview of example</strong></h3>
<p>Below are simple snippets from a simple React application that can fetch the current weather conditions in a city and present it to the user. The example uses Redux-Logic to support asynchronous behaviour to fetch data using a free <a href="https://openweathermap.org/api" rel="noopener">OpenWeatherMap</a> API.</p>
<p>For comparison, I have included a synchronous Redux process that displays the number of requests a user has made.</p>
<p><a href="https://github.com/SamOllason/weather-app-redux-logic-example" rel="noopener">Here</a> is the source code.</p>
<h3 id="setting-up-development-environment">Setting up development environment</h3>
<p>These are the commands I ran to start creating my application:</p><pre><code>npx create-react-app appnpm install --save reduxnpm install --save react-reduxnpm install --save redux-logicnpm install --save axios</code></pre>
<p>And to see the app:</p><pre><code>npm start</code></pre>
<p>Happy that I could see the default Create React App homepage at <em>localhost:3000</em>, I then started writing some code!</p>
<p>Below are code snippets that show the important points about integrating Redux-Logic into the project.</p>
<h3 id="adding-middleware-to-our-redux-store">Adding middleware to our Redux store</h3>
<p>In <em>appStore.js</em>, if we were not using any middleware, we would normally only provide our root reducer to the createStore method. This is where we link our Redux-Logic middleware to the rest of our application.</p>
<p>We specify that we want to use <em>axios</em> as our client for making HTTP requests.</p>
<p>We then use a method from redux-logic to create our middleware and finally we add it as a parameter to the createStore method. This means our Redux code will be able to access our middleware. Great!</p>
<figcaption>appStore.js — used to create our Store and integrate our Logic</figcaption>
</figure>
<h3 id="dispatching-asynchronous-actions">Dispatching asynchronous actions</h3>
<p>With Redux-Logic, actions that trigger asynchronous behaviour are dispatched in the same way as actions that trigger synchronous state updates. There is nothing different!</p>
<p>For completeness, you can see below that when a user clicks on a button we call an action creator that has been passed to our component as props.</p>
<h3 id="intercepting-asynchronous-actions">Intercepting Asynchronous actions</h3>
<p>This is where we first see the emergence of the redux-logic middleware coming into play. We are using the redux-logic library to create some ‘Logic’ that will intercept specified actions.</p>
<p>In our Logic properties we tell redux-logic which action we want it to intercept. We specify that we want redux-logic to only provide data from the last action of this type that the component dispatched. In our example this declarative behaviour is useful if people keep clicking a button as they will get the value from the latest action they dispatched, not necessarily the last promise to return!</p>
<p>Next we specify that when the asynchronous process returns we <strong>immediately</strong> <strong>dispatch</strong> one of two actions. If the promise returned successfully, we return a <em>GET_WEATHER_FOR_CITY_SUCCESSFUL</em> action. This is what we want!</p>
<p>Alternatively, if the promise returned was rejected then we dispatch <em>GET_WEATHER_FOR_CITY_FAILURE</em>.</p>
<p><strong>This is where redux-logic really shines</strong>. It is clear what the intent of the Logic code is, and what is emitted are simple objects which are easy to read and interpret! I find this really easy to read, understand and debug.</p>
<p>At the bottom we make it clear what we want our asynchronous process to do. We want to return the value of a promise. Notice how we pass in the payload that came with our action into the URL.</p>
<h3 id="processing-asynchronous-actions">Processing Asynchronous actions</h3>
<p>You can see from the <em>weatherDataHandling.js</em> reducer that the actions dispatched from our Logic are then treated as plain object actions. Reducers mutate state in the<strong> same way as with synchronous actions</strong>. So the screenshot below is what you would expect from working with Redux before. Super!</p>
<h3 id="summary">Summary</h3>
<p>Redux is a popular predictable state container for JavaScript applications. By default all Redux actions support synchronous behaviour only, and you will need some kind of middleware solution for asynchronous behaviour.</p>
<p>Redux-Logic provides a <strong>clear</strong> and <strong>powerful</strong> middleware that allows you to use asynchronous actions in your Redux application. You add your middleware to your Redux <strong>Store</strong> to allow your application to use Redux-Logic. You use the <a href="https://github.com/jeffbski/redux-logic" rel="noopener">redux-logic</a> library to create <strong>Logic </strong>which intercepts particular actions and dispatches further actions after some asynchronous processing (like fetching data from an API) completes.</p>
<p>All of the actions that are involved are <strong>plain object</strong> actions. I believe this makes it <strong>easier to write </strong>and<strong> easier understand </strong>compared with other solutions. Furthermore, redux-logic feels like a more organic fit with the other parts of the Redux architecture.</p>
<p>Thanks for reading, I welcome any comments or questions below!</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
