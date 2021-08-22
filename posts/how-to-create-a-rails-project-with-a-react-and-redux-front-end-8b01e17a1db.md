---
card: "https://cdn-media-1.freecodecamp.org/images/1*EtGyA7lw9v-oJqZjJs2AZQ.png"
tags: [React]
description: by Mark Hopson
author: "Milad E. Fahmy"
title: "How to create a Rails project with a React and Redux front-end"
created: "2021-08-15T19:36:06+02:00"
modified: "2021-08-15T19:36:06+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-react tag-redux tag-javascript tag-rails tag-typescript ">
<header class="post-full-header">
<h1 class="post-full-title">How to create a Rails project with a React and Redux front-end</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*EtGyA7lw9v-oJqZjJs2AZQ.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*EtGyA7lw9v-oJqZjJs2AZQ.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*EtGyA7lw9v-oJqZjJs2AZQ.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*EtGyA7lw9v-oJqZjJs2AZQ.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*EtGyA7lw9v-oJqZjJs2AZQ.png" alt="How to create a Rails project with a React and Redux front-end">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Mark Hopson</p>
<h1 id="how-to-create-a-rails-project-with-a-react-and-redux-front-end-plus-typescript-">How to create a Rails project with a React and Redux front-end (plus Typescript!)</h1>
<h4 id="a-complete-guide-to-setting-up-a-single-page-javascript-app-with-react-and-redux-inside-a-rails-project-">A complete guide to setting up a single-page Javascript App with React and Redux inside a Rails project.</h4>
<p><em>Update (Mar 17, 2019): Added <a href="https://github.com/Microsoft/TypeScript" rel="noopener">Typescript</a> to the last step of this project.</em></p>
<p>This tutorial will show you how to create a <a href="https://www.bloomreach.com/en/blog/2018/07/what-is-a-single-page-application.html" rel="noopener">single-page app</a> with React (and <a href="https://redux.js.org/" rel="noopener">Redux</a> and <a href="https://react.semantic-ui.com/" rel="noopener">Semantic UI</a>) inside a Rails project.</p>
<p>This tutorial will also include:</p>
<ul>
<li><a href="https://redux.js.org/" rel="noopener">Redux</a></li>
<li><a href="https://github.com/ReactTraining/react-router" rel="noopener">React Router</a></li>
<li><a href="https://github.com/reduxjs/reselect" rel="noopener">Reselect</a></li>
<li><a href="https://github.com/reduxjs/redux-thunk" rel="noopener">Redux Think</a></li>
<li><a href="https://react.semantic-ui.com/" rel="noopener">Semantic UI</a></li>
</ul>
<p><em>Side note #1. I saw this <a href="https://medium.freecodecamp.org/how-to-make-create-react-app-work-with-a-node-backend-api-7c5c48acb1b0" rel="noopener">wonderful guide</a> recently and it inspired me to write one for Rails.</em></p>
<p><em>Side note #2. Here is the <a href="https://github.com/markhopson/rails-react-tutorial" rel="noopener">finished tutorial</a>. The <a href="https://github.com/markhopson/rails-react-tutorial/commits/master" rel="noopener">commit history</a> corresponds (kind of) with the steps in this guide.</em></p>
<h3 id="overview">Overview</h3>
<p>To give you a sense of what we’re going to build and how things will work, see the 2 diagrams below.</p>
<h4 id="diagram-1-handling-the-first-http-request-i-e-requests-from-the-browser-to-our-rails-app-">Diagram 1: Handling the first HTTP request (i.e. requests from the browser to our Rails App)</h4>
<p>The diagram below illustrates your React App inside your Rails project, and the path (solid black line) that the first request takes to return the <strong>React App</strong> back to the client (browser).</p>
<figcaption>Diagram 1: How our project handles the first request from the client (i.e. browser)</figcaption>
</figure>
<h4 id="diagram-2-handling-subsequent-http-requests-i-e-requests-from-our-react-app-to-our-rails-app-">Diagram 2: Handling subsequent HTTP requests (i.e. requests from our React App to our Rails App)</h4>
<p>After the React App is loaded in the user’s browser, the React App will be responsible for sending requests to your Rails App (solid black line). In other words, once React is loaded, requests to Rails will come from Javascript code, and not the browser.</p>
<figcaption>Diagram 2: How React interacts with Rails (HTTP requests will come from in the React App and not the browser itself)</figcaption>
</figure>
<h4 id="other-important-notes-before-we-start-coding">Other Important notes before we start coding</h4>
<ul>
<li>Think of your React App as being separate from your Rails App. The React App is strictly for the front-end and runs in the user’s browser. The Rails part is strictly for the back-end and runs on the server. The Rails App does not know anything about the React App except for when to return its static assets (Webpack compiled HTML, JS, and CSS).</li>
<li>Once your React App is loaded by your browser, all the logic to make HTTP requests (retrieve data, and turn that data into a view) is done in the front-end (i.e. browser).</li>
<li>Your Rails App effectively does not serve any views except for the one that serves your React App. In this tutorial, the only Rails view is <code>/app/views/static/index.html.erb</code></li>
<li>All <code>/api/*</code> paths gets handled by the Rails App, while all other paths gets handled by React inside the browser (after your browser has loaded the first request). For example, <code><a href="http://your-app.com/something" rel="noopener">http://your-app.com/something</a></code> will be sent to the Rails App, and then returned back to your React App (the HTML/JS/CSS that has already loaded in the browser), which will decide what to show on the screen.</li>
<li><a href="https://medium.freecodecamp.org/why-i-hate-your-single-page-app-f08bb4ff9134" rel="noopener">Considerations for building a single-page app</a>. Not necessary for this tutorial but useful.</li>
<li><a href="https://medium.com/teamsubchannel/react-component-patterns-e7fb75be7bb0" rel="noopener">React Component design patterns</a>. Again, not necessary but useful.</li>
</ul>
<h3 id="system-requirements">System Requirements</h3>
<p>FYI here’s my system config. Not saying you need this, but something similar will make this tutorial experience smoother.</p>
<ul>
<li>macOS 10.13.6 (High Sierra)</li>
<li>Ruby 2.5.1</li>
<li>Rails 5.2.1 (and Bundler 1.16.6)</li>
<li>- gem install bundler -v 1.16.6</li>
<li>Node 9.8.0</li>
</ul>
<p>Finally, on to the code!</p>
<h3 id="step-1-create-a-new-rails-project-with-webpack-and-react">Step 1: Create a new Rails project with Webpack and React</h3>
<p>Create a new Rails app. I’ve named mine <code>rails-react-tutorial</code>.</p><pre><code>rails new rails-react-tutorial --webpack=react</code></pre>
<p>See <a href="https://guides.rubyonrails.org/5_1_release_notes.html#optional-webpack-support" rel="noopener">here</a> for more info on the <code>--webpack=react</code> flag introduced in Rails 5.1.</p>
<h3 id="step-2-make-sure-the-webpacker-and-react-rails-gems-are-installed">Step 2: Make sure the Webpacker and React-Rails gems are installed</h3>
<p>Check if the <a href="https://github.com/rails/webpacker" rel="noopener"><strong>Webpacker</strong></a> and <a href="https://github.com/reactjs/react-rails" rel="noopener"><strong>React-Rails</strong></a> gems are in your <code>Gemfile</code>. If the gems are not there, then add it:</p>
<figcaption><em>Sometimes only Webpacker is added, and not React-Rails; not sure why …</em></figcaption>
</figure>
<p>Now run these commands to install everything.</p><pre><code>bundle install</code></pre><pre><code># This command might not be necessary.# If already installed, then it will# ask you to override some files.rails webpacker:install</code></pre><pre><code>rails webpacker:install:react  rails generate react:installyarn install                   </code></pre>
<p>Now run <code>rails server -p 3000 </code>and visit <code><a href="http://localhost:3000" rel="noopener">http://localhost:3000</a></code> to make sure our project is working.</p>
<p><strong>Pro Tip #1</strong>: run <code>./bin/webpack-dev-server</code> in a separate window while coding to have any changes automatically build and reload the browser.</p>
<p><strong>Pro Tip #2</strong>: If you get this error <code>can’t activate sqlite3 (~&gt; 1.3.6), already activated sqlite3–1.</code>4.0 then a<code>dd gem ‘sqlite3’, ‘~&gt; </code>1.3.6’ to Gemfile. See<a href="https://stackoverflow.com/a/54529016/1176788" rel="noopener"> thi</a>s link for more info.</p>
<h3 id="step-3-add-a-controller-class-and-route-to-our-rails-app">Step 3: Add a Controller class, and Route, to our Rails app</h3>
<p>Add a new route to our Rails app. For this example, we will add <code>GET /v1/things</code> endpoint to <code>config/routes.rb</code>`.</p>
<figcaption>Our <code>config/routes.rb</code> file</figcaption>
</figure>
<p>This new route will require a ThingsController. Create a new <code>app/controllers/v1/things_controller.rb</code> file. Remember, it should be in the <code>v1</code> folder because it belongs to our Rails API.</p>
<figcaption>Our /app/controllers/v1/things_controller.rb file</figcaption>
</figure>
<p>Our Things controller will return a hard-coded response for <code>GET /v1/things</code>.</p>
<p>At this point, you should be able to re-run <code>rails server -p 3000</code> and visit <code><a href="http://localhost:3000/v1/things" rel="noopener">http://localhost:3000/v1/things</a></code>.</p>
<figcaption>Success!</figcaption>
</figure>
<p>Next, we will create a new React component.</p>
<h3 id="step-4-generate-a-new-react-component">Step 4: Generate a new React component</h3>
<p>Create a HelloWorld React component that accepts a String parameter named <code>greeting</code> by running the following command:</p><pre><code>rails generate react:component HelloWorld greeting:string</code></pre>
<p>A file should be created: <code>app/javascript/components/HelloWorld.js</code>.</p>
<figcaption>Our <code>app/javascript/components/HelloWorld.js file</code></figcaption>
</figure>
<h3 id="step-5-use-our-helloworld-component">Step 5: Use our HelloWorld component</h3>
<p>To use and see our new HelloWorld component we need to 2 things: create a view embeds this component, and add a route to point to this view.</p>
<p>To create a view, create the file <code>app/views/static/index.html.erb</code> and add the following:</p>
<figcaption>“Hello” is being passed in as the “greeting” param for HelloWorld</figcaption>
</figure>
<p>For our new route, add the following line to our <code>routes.rb</code> file, and an empty StaticController to support it.</p>
<figcaption>Adding a route to serve our new view that contains the HelloWorld component</figcaption>
</figure>
<p>Add this to <code>app/controllers/static_controller.rb</code>:</p>
<figcaption>An empty controller</figcaption>
</figure>
<p>You should now be able to re-run <code>rails server -p 3000</code> and visit <code><a href="http://localhost:3000/v1/things" rel="noopener">http://localhost:3000/</a></code> to see your new React component (remember to run <code>./bin/webpack-dev-server</code> in a separate window to have an Javascript changes automatically get packaged by webpack).</p>
<figcaption>Success! Our first rendered component.</figcaption>
</figure>
<p>Now that we have a React component that renders in our view, let’s expand our app to support multiple views with <code>react-router</code>.</p>
<h3 id="step-6-add-react-router">Step 6: Add React-Router</h3>
<p>First, run this command to add <code>react-router-dom</code>, which includes and exports all of <code>react-router</code> and some additional helper components for web browsing. More info <a href="https://github.com/ReactTraining/react-router/issues/4648" rel="noopener">here</a>.</p><pre><code>npm install --save react-router-domyarn install</code></pre>
<p>This command should add the following line to your <code>package.json</code> file. Note, 4.2.2 was used here, but your version could be different.</p>
<p>Now let’s use React Router to make some routes for our React Front-End.</p>
<h3 id="step-6-using-react-router">Step 6: Using React-Router</h3>
<p><code><a href="https://github.com/ReactTraining/react-router" rel="noopener">react-router</a></code> allows us to manage all our UI routes strictly with Javascript. This means that we will need a single “App” component that encapsulates our entire application. “App” will also use React-Router to present the correct “Page” component for the URL being requested.</p>
<p>To start, run this command to add an App component that will represent our entire front-end application.</p><pre><code>rails generate react:component App</code></pre>
<p>Next, open the file for the newly created React component, <code>app/javascript/components/App.js</code>, and add the following …</p>
<figcaption>Our React App with 2 routes</figcaption>
</figure>
<p>Now change <code>index.html.erb</code> to point to our new App component.</p>
<figcaption>The App component will encapsulate our entire front-end.</figcaption>
</figure>
<p>Lastly, edit your <code>routes.rb</code> to have Rails send all requests that are not for the API to our App component (via <code>StaticController#index</code>).</p>
<figcaption>Our routes.rb now forwards all non-API and non-Ajax requests to our React App</figcaption>
</figure>
<p>We can now run <code>rails server -p 3000</code> and visit <code><a href="http://localhost/" rel="noopener">http://localhost/</a></code> and <code><a href="http://localhost/" rel="noopener">http://localhost/</a>hello</code> to see React-Router working (remember <code>./bin/webpack-dev-server</code> enables auto-webpacking).</p>
<p>Next, we’ll need to install some additional dependencies before we can connect our React front-end to our Rails API.</p>
<h3 id="step-7-adding-redux-sagas-babel-polyfill-and-axios">Step 7: Adding Redux, Sagas, Babel Polyfill, and Axios</h3>
<p>Now let’s add the following Javascript libraries for our front-end.</p>
<ul>
<li><a href="https://redux.js.org/" rel="noopener">Redux</a> to manage the global state of our application.</li>
<li>Babel-Polyfill to enable fancy Javascript features that might not otherwise be available on older web browsers.</li>
<li><a href="https://github.com/reduxjs/reselect" rel="noopener">Reselect</a> and <a href="https://github.com/reduxjs/react-redux" rel="noopener">React-Redux</a> to make working with Redux easier.</li>
</ul>
<p>To install everything, run the following:</p><pre><code>npm install --save redux babel-polyfill reselect react-reduxyarn install</code></pre>
<p>Now we will use these tools to set up a Redux State Store, then add some Actions and Reducers to use it.</p>
<h3 id="step-8-set-up-redux-state-store">Step 8: Set up Redux State Store</h3>
<p>In this step, we will set up the Redux State Store for our app with the following template (we will add and remove “things” in the next steps).</p><pre><code>{  "things": [    {      "name": "...",      "guid": "..."    }  ]}</code></pre>
<p>First, create a <code>configureStore.js</code> file. This will initialize our Redux Store.</p>
<figcaption>Code to initialize our Redux State, and our first Reducer!</figcaption>
</figure>
<p>Now import and use <code>configureStore()</code> in the App Component to create a Redux State and hook it up to our App.</p>
<figcaption>Initializing the Redux State for our App</figcaption>
</figure>
<p>Now you have Redux installed in your app! Next, we will create an Action and a Reducer, and begin to write and read from our Redux State.</p>
<h3 id="step-9-add-an-action-and-a-reducer">Step 9: Add an Action and a Reducer</h3>
<p>Now that the App has a Redux State, we will add a <code>&lt;butt</code>on&gt; to HelloWorld that dispatches an Action (that we will define here) that will be received b<code>y the rootRed</code>ucer().</p>
<p>First, add <code>getThings()</code> Action definition and import <code>createStructuredSelector()</code> and <code>connect()</code> into theHelloWorld Component. This maps parts of the Redux State, and Actions (i.e. dispatching <code>getThings()</code>) , to HelloWorld’s prop.</p>
<p>Next, add a <code>&lt;butt</code>on&gt; to HelloWorld that dispatc<code>hes a getTh</code>ings() Action (from ./actions/index.js) on every click.</p>
<figcaption>HelloWorld component with all some new Redux helper code</figcaption>
</figure>
<p>After everything is added to HelloWorld, go to <code><a href="http://localhost:3000/hello" rel="noopener">http://localhost:3000/hello</a></code>, open the Console, and click the “getThings” button to see your Action and Reducer functions being called.</p>
<figcaption>Look at the console.log() output to see our Action being dispatched</figcaption>
</figure>
<p>Now that you can send an Action that can be received by a Reducer, let’s have the Reducer alter the Redux State.</p>
<h3 id="step-10-have-helloworld-read-react-state-and-display-things-">Step 10: Have HelloWorld read React State and display “things”</h3>
<p>Insert a List <code>&lt;</code>ul&gt; in HelloWorld and fill it with “things” from your Redux State.</p>
<figcaption>HelloWorld with &lt;ul&gt; that reads “things” from our Redux State</figcaption>
</figure>
<p>To test if this is actually working, we can initialize with some “things” data. Once this is done, we can refresh the page and see it in our list.</p>
<figcaption>Initialize our Redux State with some “things” to see if the front-end &lt;ul&gt; is reading it properly</figcaption>
</figure>
<p>Now that we have a simple Action and Reducer working, we will extend this so that the Action queries our Rails API and the Reducer sets the content of “things” with the API response.</p>
<h3 id="step-11-install-redux-thunk">Step 11: Install Redux-Thunk</h3>
<p>We will need <a href="https://github.com/reduxjs/redux-thunk" rel="noopener">Redux-Thunk</a> to allow async workflows (like an HTTP request) to dispatch Actions.</p>
<p>Install <code>redux-thunk</code> by running this command:</p><pre><code>npm install --save redux-thunkyarn install</code></pre>
<p>Now, let’s use Thunk in our Action!</p>
<h3 id="step-12-use-redux-thunk-and-fetch-to-query-api-and-set-react-state-with-results">Step 12: Use redux-thunk and fetch() to query API and set React State with results</h3>
<p>First, let’s import <code>redux-thunk</code> in <code>configureStore.js</code> and install it our Redux Store so our App can handle “Thunk” Actions.</p>
<figcaption>Need to install Redux Thunk as a Redux middleware in our App.</figcaption>
</figure>
<p>Now test that everything is working by starting the App and loading a page.</p>
<p>Next, let’s change the <code>getThings()</code> Action to return a function that performs the following (instead of returning the Action object):</p>
<ol>
<li>Dispatch the original Action object</li>
<li>Make a call to our Rails API.</li>
<li>Dispatch a new Action <code>getThingsSuccess(json)</code> when the call succeeds.</li>
</ol>
<p>For this step, we will also need to add the <code>getThingsSuccess(json)</code> Action.</p>
<figcaption>Our new getThings() Action function that does a lot more than returning a simple object — thanks to Redux Thunk!</figcaption>
</figure>
<p>Of course, this does nothing to the Redux State since our Reducer is not making any changes. To fix this, change the Reducer to handle the <code>GET_THINGS_SUCCESS</code> Action and return the new State (with the response from the Rails API).</p>
<figcaption>Have our Reducer change the Redux State when GET_THINGS_SUCCESS is dispatched</figcaption>
</figure>
<p>Now if you start your App, navigate to <code>localhost:3000/hello</code> and click the button, your list should change!</p>
<p>There you have it. A Rails API hooked up to a React+Redux App.</p>
<h3 id="-bonus-step-13-installing-redux-dev-tools">(Bonus) Step 13: Installing Redux Dev Tools</h3>
<p>Maybe I should’ve put this step earlier, but <a href="https://github.com/zalmoxisus/redux-devtools-extension" rel="noopener">Redux Dev Tools</a> is essential for debugging the Actions your App is sending, and how those Actions are changing your State.</p>
<p>This is how you install it. First, install the proper extension for your browser (<a href="https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd" rel="noopener">Chrome</a>, Firefox).</p>
<p>Next, run the following to install the library.</p><pre><code>npm install --save-dev redux-devtools-extensionyarn install</code></pre>
<p>Now, use it to initialize your Redux State Store.</p>
<figcaption>Install Redux Dev Tools in your App. You will need to do some extra modifications to turn this off in production mode.</figcaption>
</figure>
<p>After all this is done, you should be able to see a new tab, Redux, in your Chrome (or Firefox) dev tools, that lets you see which Actions were dispatched, and how each one changed the App’s State. The React tab will also show you all your components and their props and states.</p>
<figcaption>Debugging React Components and Redux State/Actions gets 100x easier with this</figcaption>
</figure>
<p>Happy debugging!</p>
<h3 id="-bonus-step-14-semantic-ui">(Bonus) Step 14: Semantic UI</h3>
<p>Semantic is a great library for UI components that makes it really easy to build nice looking websites quickly.</p>
<p>To install this library, run the following.</p><pre><code>npm install --save semantic-ui-css semantic-ui-reactyarn install</code></pre>
<p>Add this to <code>app/javascript/packs/application.js</code>:</p><pre><code>import 'semantic-ui-css/semantic.min.css';</code></pre>
<p>And add this to <code>app/views/static/index.html.erb</code>:</p><pre><code>&lt;%= stylesheet_pack_tag "application", :media =&gt; 'all' %</code></pre>
<figcaption>Nice UI made easy!</figcaption>
</figure>
<h3 id="-bonus-step-15-using-a-reasonable-directory-structure">(Bonus) Step 15: Using a Reasonable Directory Structure</h3>
<p>This step is totally optional, and it has nothing to do with the function of the App. Just my opinion on how you should organize your files.</p>
<p>So as you can probably guess, stuffing your Actions into the same file as your Components, and having a single reducer for your entire App, does not scale very nicely when your App grows. Here is my suggested file structure:</p><pre><code>app|-- javascript   |-- actions      |-- index.js      |-- things.js   |-- components   |-- packs   |-- reducers      |-- index.js      |-- things.js</code></pre>
<h3 id="-bonus-mar-17-2019-update-step-16-install-typescript-">(Bonus — Mar 17 2019 Update) Step 16: Install Typescript!</h3>
<p><a href="https://github.com/Microsoft/TypeScript" rel="noopener">Typescript</a> is just like Javascript but with types! It is described as a “<a href="https://en.wikipedia.org/wiki/TypeScript" rel="noopener">strict syntactical superset of Javascript</a>”, meaning that Javascript is considered valid Typescript, and the “type features” are all optional.</p>
<p>IMO Typescript is fantastic for large Javscript projects, such as a big React front-end. Below are instructions on how to install it, and a small demo of it inside our project.</p>
<p>First, run the following commands (taken from the <a href="https://github.com/rails/webpacker/blob/master/docs/typescript.md" rel="noopener">Webpacker Readme</a>):</p><pre><code>bundle exec rails webpacker:install:typescriptyarn add @types/react @types/react-dom</code></pre>
<p>Now, to see it in action, let’s rename <code>app/javascript/reducers/things.js</code> to <code>things.tsx</code> and add the following lines to the top of the file:</p>
<figcaption>Lets add an interface to tell Typescript what “Thing” should be</figcaption>
</figure>
<p>After you add <code>interface Thing</code> , let’s use it by having <code>const initialState</code> use that type (seen in the screenshot above), and specify that <code>thingsReducer</code> return an array of type <code>Thing</code> (also seen in the screenshot).</p>
<p>Everything should still work, but to see Typescript in action, lets add a <code>default</code> case to <code>thingsReducer</code> and add <code>return 1</code> . Since <code>1</code> is not a <code>Thing</code> type we will see the output of <code>./bin/webpack-dev-server</code> fail with the following:</p>
<figcaption>Type Thing being enforced in our code</figcaption>
</figure>
<p>And that’s it! You can now add Typescript <code>.tsx</code> files to your project and start using Types with your project.</p>
<p><a href="https://stackoverflow.com/a/35048303/1176788" rel="noopener">Here’s a great overview of Typescript and why you should use it</a>.</p>
<h3 id="the-end">The End</h3>
<p>You made it! You’ve made a Rails App that uses React and Redux. That’s pretty much it for the tutorial. I hope you had fun and learned something along the way.</p>
<p>If you build something with React and Rails, please do share it in the comments below — along with any questions or comments you may have for me.</p>
<p>Thanks for reading!</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
