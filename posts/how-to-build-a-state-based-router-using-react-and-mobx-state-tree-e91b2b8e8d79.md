---
card: "https://cdn-media-1.freecodecamp.org/images/1*IIwgT670HJ7Ni-_UDA3-Ow.jpeg"
tags: [React]
description: by Miles Till
author: "Milad E. Fahmy"
title: "How to build a state-based router using React and MobX State Tree"
created: "2021-08-15T19:34:14+02:00"
modified: "2021-08-15T19:34:14+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-react tag-routing tag-javascript tag-tech tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">How to build a state-based router using React and MobX State Tree</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*IIwgT670HJ7Ni-_UDA3-Ow.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*IIwgT670HJ7Ni-_UDA3-Ow.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*IIwgT670HJ7Ni-_UDA3-Ow.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*IIwgT670HJ7Ni-_UDA3-Ow.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*IIwgT670HJ7Ni-_UDA3-Ow.jpeg" alt="How to build a state-based router using React and MobX State Tree">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Miles Till</p>
<h1 id="how-to-build-a-state-based-router-using-react-and-mobx-state-tree"><strong>How to build a state-based router using React and MobX State Tree</strong></h1>
<p><strong>Introducing <a href="https://github.com/miles-till/mobx-state-tree-router" rel="noopener">mobx-state-tree-router</a></strong></p>
<figcaption>Image by <a href="https://www.flickr.com/photos/medithit/" rel="noopener" target="_blank" title="">medithIT</a> on <a href="https://www.flickr.com/photos/medithit/10363854753/" rel="noopener" target="_blank" title="">Flickr</a></figcaption>
</figure>
<p><em>If you want to skip ahead to the finished example you can check it out at <a href="https://github.com/miles-till/mobx-state-tree-router-demo" rel="noopener">mobx-state-tree-router-demo</a>.</em></p>
<p>I wrote a library that makes it easy to configure state-based routing in MobX State Tree powered React apps, and I want to share it with you. To do this I will demonstrate how to build a very simple Todo app.</p>
<p><a href="undefined" rel="noopener">Michel Weststrate</a>, the creator of MobX, wrote a great article titled <a href="https://hackernoon.com/how-to-decouple-state-and-ui-a-k-a-you-dont-need-componentwillmount-cc90b787aa37" rel="noopener">How to decouple state and UI (a.k.a. you don’t need componentWillMount)</a>. I recommend reading it to understand the philosophy that inspired me to write mobx-state-tree-router. The key idea is that the application UI should be a function of the state.</p>
<blockquote>“This approach has better decoupling of state and UI. This has a few advantages:</blockquote>
<blockquote>1. The complete application flow can be tested without ever needing to instantiate a component.</blockquote>
<blockquote>2. More components can be dumb; they don’t have to fetch data or process routing.</blockquote>
<blockquote>3. Our stores become more like a state machine, making it easy to follow the transitions of our application.”</blockquote>
<blockquote>- Michel Weststrate</blockquote>
<h3 id="prerequisites">Prerequisites</h3>
<p>These will need to be installed to follow this tutorial:</p>
<ul>
<li><a href="https://nodejs.org/en/" rel="noopener">Node.js</a> — used for running the dev server</li>
<li><a href="https://yarnpkg.com/en/" rel="noopener">Yarn</a> — used for package management</li>
</ul>
<p><em>Note: NPM can be used instead of Yarn but some commands may be different.</em></p>
<h3 id="create-a-basic-react-app">Create a basic React app</h3>
<h4 id="use-create-react-app-to-get-started-quickly">Use create-react-app to get started quickly</h4>
<p>If you haven’t used it before, the easiest way to get started with a React app is to use a scaffolding tool by the developers of React called <a href="https://github.com/facebook/create-react-app" rel="noopener">Create React App</a>. This tool configures <a href="https://webpack.js.org/" rel="noopener">Webpack</a> and <a href="https://babeljs.io/" rel="noopener">Babel</a> for you with the most common requirements met.</p>
<p>In your terminal run the following commands:</p><pre><code>npx create-react-app state-router-democd state-router-demoyarn start</code></pre>
<p>You will now have a fully functioning basic React app to play with.</p>
<h4 id="remove-create-react-app-stuff-not-needed-for-this-example">Remove create-react-app stuff not needed for this example</h4>
<p>For the purposes of this tutorial we don’t need a lot of the stuff that create-react-app generates so go ahead and delete:</p><pre><code>src/App.csssrc/App.test.jssrc/index.csssrc/logo.svgsrc/serviceWorker.js</code></pre>
<p><em>Note: Feel free to keep the css files and add your own styling.</em></p>
<p>To keep things organised, create a <code>components</code> directory in our <code>src</code> and move <code>src/App.js</code> to <code>src/components/App.js</code>.</p>
<p>Now update the following files to remove references to the files we deleted:</p>
<p><strong>src/components/App.js</strong></p>
<p><strong>src/index.js</strong></p>
<p>If you still have the app running you will notice your browser has updated to show you the following:</p>
<h4 id="create-a-home-page-component">Create a Home page component</h4>
<p>In the <code>components</code> directory, create a file for our Home page component:</p>
<p><strong>src/components/Home.js</strong></p>
<p>Update the App component to render our new Home page component:</p>
<p><strong>src/components/App.js</strong></p>
<h3 id="add-mobx-state-tree-models">Add MobX State Tree models</h3>
<h4 id="install-mobx-and-mobx-state-tree">Install MobX and MobX State Tree</h4>
<p><a href="https://github.com/mobxjs/mobx" rel="noopener">MobX</a> is a library for state management, and it works great with React as our renderer. <a href="https://github.com/mobxjs/mobx-state-tree" rel="noopener">MobX State Tree</a> is a tree shaped state container built on top of MobX.</p>
<p>In your terminal run:</p><pre><code>yarn add mobx mobx-react mobx-state-tree</code></pre>
<p>Like our we did for our components, create a <code>models</code> directory to keep our MobX State Tree models organised.</p>
<h4 id="create-a-rootstore-model">Create a RootStore model</h4>
<p>In our state tree we’ll have a <code>RootStore</code> which holds our data stores (in this case a <code>TodoStore</code>) and our <code>RouterStore</code>, but we’ll get to that later.</p>
<p><strong>src/models/RootStore.js</strong></p>
<h4 id="create-todostore-and-todo-models">Create TodoStore and Todo models</h4>
<p>Our <code>TodoStore</code> contains <code>Todo</code> objects which are able to be created, removed, and updated. We also need to be able to find a <code>Todo</code> object by its <code>id</code>.</p>
<p><strong>src/models/TodoStore.js</strong></p>
<h4 id="initialize-the-rootstore">Initialize the RootStore</h4>
<p>When our app loads, we want to initialize the <code>RootStore</code> with a known state. For this trivial example we won’t be concerned about persisting our data to storage in any way. We then want to make sure the <code>RootStore</code> is available to be injected into our components, so we use the MobX React component <code>Provider</code> to do this.</p>
<p><strong>src/index.js</strong></p>
<h4 id="create-a-todolist-page-component">Create a TodoList page component</h4>
<p>Now that we have a <code>RootStore</code> for our state tree, we need some components to view and change the data.</p>
<p><strong>src/components/TodoList.js</strong></p>
<p>Update the <code>App</code> component to display our new <code>TodoList</code> component.</p>
<p><strong>src/components/App.js</strong></p>
<p>At this point the app should have a list of <code>Todo</code> objects which you can add to and remove from.</p>
<h4 id="create-a-todo-page-component">Create a Todo page component</h4>
<p>Now we want to create a new component to display and edit a <code>Todo</code> object. Note that we are using <code>inject</code> to make the <code>RootStore</code> available in the component’s props.</p>
<p><strong>src/components/Todo.js</strong></p>
<p>Update the <code>App</code> component to display our new <code>Todo</code> component.</p>
<p>Now our updated app allows us to edit the data of the <code>Todo</code> whose id we pass to the Todo page component in <code>&lt;Todo todoId={0}</code> /&gt;.</p>
<h3 id="add-state-based-routing">Add state-based routing</h3>
<p>At this point we should have a React app with our data stored in a MobX State Tree container. The data container is then being injected into the components that need access to the data. Now we want to connect together our page components in our app. A common approach would be to use a component based router such as <a href="https://github.com/ReactTraining/react-router" rel="noopener">React Router</a>. Often the components become cluttered with route definitions and mount event handlers. This doesn’t suit our state-first philosophy.</p>
<p>I will now show you how to add mobx-state-tree-router to your app.</p>
<h4 id="install-mobx-state-tree-router">Install mobx-state-tree-router</h4>
<p>In your terminal run:</p><pre><code>yarn add mobx-state-tree-router</code></pre>
<h4 id="add-the-router-to-the-rootstore">Add the router to the RootStore</h4>
<p><strong>src/models/RootStore.js</strong></p>
<h4 id="create-views">Create views</h4>
<p>The router needs to be configured with a map of view models which define the route paths to match against and the page components to display. Hooks into the page change cycle can be defined on a view to perform data fetching, route change cancelling, redirection, and other tasks. These hooks can be synchronous or asynchronous.</p>
<p>These hooks are:</p>
<ul>
<li><code>beforeExit(self, params)</code></li>
<li><code>beforeEnter(self, params)</code></li>
<li><code>onExit(self, params)</code></li>
<li><code>onEnter(self, params)</code></li>
</ul>
<p>If either of the before hooks return <code>false</code> the route change will be cancelled.</p>
<p>Create a <code>views</code> file:</p>
<p><strong>src/views.js</strong></p>
<h4 id="initialize-the-router-when-our-app-starts">Initialize the router when our app starts</h4>
<p>The router can be started by calling <code>startRouter(router)</code>. This function connects the router to the browser’s history and configures the routing based on router’s views.</p>
<p><strong>src/index.js</strong></p>
<h4 id="render-the-staterouter">Render the StateRouter</h4>
<p>Update the <code>App</code> component to include the <code>StateRouter</code> component, which renders the appropriate component for the router’s current view.</p>
<p><strong>src/components/App.js</strong></p>
<p>Now our app will respond to changes in the url path, for example <code>/todos</code> will show our <code>TodoList</code> component and <code>/todos/0</code> will show our <code>Todo</code> component as configured in <code>views.js</code>.</p>
<h4 id="add-navigation-links">Add navigation links</h4>
<p>Currently our app doesn’t have any way to navigate around other than changing the url directly. This doesn’t work particularly well in this simple example as the data in our <code>RootStore</code> will get reset to the initial state as defined in <code>index.js</code> every time the page loads.</p>
<p>There are 2 other ways to change the route using mobx-state-tree-router:</p>
<ul>
<li><code>Link</code> components</li>
<li>Calling <code>router.setView(view, params)</code> directly</li>
</ul>
<p>I recommend using <code>Link</code> components where possible, but in some cases (like redirects) setting the view directly may be unavoidable. Let’s update our <code>App</code> and <code>TodoList</code> components to add some navigation links using both methods:</p>
<p><strong>src/components/App.js</strong></p>
<p><strong>src/components/TodoList.js</strong></p>
<p>You will now be able to add a <code>Todo</code> item on the <code>todos</code> view, then click the open button to go the <code>todo</code> view for the new item:</p>
<h3 id="conclusion">Conclusion</h3>
<p>I created mobx-state-tree-router because I found that there was a gap in the landscape for a state-based routing library to use with MobX State Tree. I have found it to be useful for me, so I hope it can also be useful to the wider community.</p>
<p>If you haven’t already please read <a href="https://hackernoon.com/how-to-decouple-state-and-ui-a-k-a-you-dont-need-componentwillmount-cc90b787aa37" rel="noopener">Michel Weststrate’s article</a> for some background on state-based routing.</p>
<p>If you have any issues to raise or contributions to make, please head over to <a href="https://github.com/miles-till/mobx-state-tree-router" rel="noopener">mobx-state-tree-router on Github</a>.</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
