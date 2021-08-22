---
card: "https://cdn-media-1.freecodecamp.org/images/1*D9PDIbwiUfWLB8zd7xPawQ.jpeg"
tags: [React]
description: by Kevin Bridges
author: "Milad E. Fahmy"
title: "feature-u (Feature Based Project Organization for React)"
created: "2021-08-15T19:47:49+02:00"
modified: "2021-08-15T19:47:49+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-react tag-redux tag-javascript tag-features tag-tech ">
<header class="post-full-header">
<h1 class="post-full-title">feature-u (Feature Based Project Organization for React)</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*D9PDIbwiUfWLB8zd7xPawQ.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*D9PDIbwiUfWLB8zd7xPawQ.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*D9PDIbwiUfWLB8zd7xPawQ.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*D9PDIbwiUfWLB8zd7xPawQ.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*D9PDIbwiUfWLB8zd7xPawQ.jpeg" alt="feature-u (Feature Based Project Organization for React)">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Kevin Bridges</p>
<h1 id="feature-u-feature-based-project-organization-for-react-">feature-u: (Feature Based Project Organization for React)</h1>
<p>This article is an introduction to <a href="https://feature-u.js.org/" rel="noopener">feature-u</a> — a library that<strong> </strong>facilitates<strong> feature-based project organization</strong> in your <a href="https://reactjs.org/" rel="noopener">react</a> project. This utility assists in organizing your project by individual features.</p>
<p>Most developers would agree that organizing your project by features is much preferred over type-based patterns. Because <strong>application domains grow</strong> in the real world, project <strong>organization by type</strong> simply doesn’t scale, it just becomes unmanageable!</p>
<p>There are many good articles on this topic with insights on feature-based design and structure (see: <a href="#15dd" rel="noopener">References</a> below).</p>
<p>This article outlines my excursion into feature-based composition. In working through the details, I realized there was an opportunity for a library to help manage and streamline some of the hurdles incurred in this process. The result: <strong>feature-u </strong>(check out the <a href="https://feature-u.js.org/" rel="noopener">full docs</a>, <a href="https://github.com/KevinAst/feature-u" rel="noopener">GitHub source</a>, and <a href="https://www.npmjs.com/package/feature-u" rel="noopener">NPM package</a>).</p>
<blockquote><strong><em>Update</em></strong>: On 8/14/2018 <a href="https://feature-u.js.org/1.0.0/history.html#v1_0_0" rel="noopener">feature-u V1</a> was released, that re-designed Cross <a href="https://feature-u.js.org/1.0.0/crossCommunication.html" rel="noopener">Feature Communication <code>new</code></a> to include <a href="https://feature-u.js.org/1.0.0/crossCommunication.html#ui-composition" rel="noopener">UI Composition <code>new</code></a> as a core offering. <strong>A new article can be found <a href="http://bit.ly/feature-u-V1" rel="noopener">here</a></strong> that takes a comprehensive approach in introducing you to all of <strong>feature-u</strong> (including <strong>V1</strong>). We are very excited about this update, because it <strong><em>promotes one solution for all feature collaboration</em></strong>! While upgrading to V1 requires some client code mods (see <a href="https://feature-u.js.org/1.0.0/migration.1.0.0.html" rel="noopener">V1 Migration Notes</a>), it is well worth it. This article is based on <a href="https://feature-u.js.org/0.1.3/history.html#v0_1_3" rel="noopener">feature-u V0</a>, and is using some antiquated APIs (mostly <code>Feature.publicFace</code>, and the <code>app</code> object). Still, this is a good resource to get your feet wet with feature-u.</blockquote>
<h4 id="at-a-glance"><strong><em>At a Glance</em></strong></h4>
<p><a href="#e4bb" rel="noopener">Backdrop</a> — why feature-u was created</p>
<p><a href="#b996" rel="noopener">feature-u Basics</a> — introduce high-level feature-u concepts</p>
<p><a href="#077e" rel="noopener">eatery-nod App</a> — the sample app used to demonstrate feature-u</p>
<p><a href="#688e" rel="noopener">Before &amp; After</a> — <strong>eatery-nod</strong> project structure before and after features</p>
<p><a href="#ecd3" rel="noopener">feature-u In Action</a> — explore feature-u aspects through concrete examples</p>
<p><a href="#3ef6" rel="noopener">feature-u Benefits</a> — in summary</p>
<p><a href="#15dd" rel="noopener">References </a>— feature-based articles</p>
<h3 id="backdrop"><a href="#e80d" rel="noopener">Backdrop</a></h3>
<p>Let’s start by chronicling my journey in this process</p>
<h4 id="out-of-the-starting-gate-"><strong>out of the Starting Gate …</strong></h4>
<p><em>Sooo … I had decided to restructure my project by features</em>. From a design perspective, there were a number of considerations in determining the feature boundaries. I had read all the articles, and applied my design to a <strong>new feature-based directory structure.</strong></p>
<p>In general, I was feeling good about my progress. I was starting to see concrete benefits … <strong>feature segregation was going to result in code that is much more manageable!</strong></p>
<h4 id="the-hurdles-"><strong>the Hurdles …</strong></h4>
<p>However, there were a number of hurdles yet to be resolved …</p>
<p>How can I encapsulate and isolate my features, while still allowing them to collaborate with one another?</p>
<p>How can selected features introduce start-up initialization (even injecting utility at the root DOM), without relying on some external startup process?</p>
<p>How can I promote feature-based UI components in an isolated and autonomous way?</p>
<p>How can I configure my chosen frameworks now that my code is so spread out?</p>
<p>How can I enable/disable selected features which are either optional, or require a license upgrade?</p>
<p>In short, how can I pull it all together so that my individual features operate as one application?</p>
<h4 id="the-goal-what-now-"><strong>the Goal <em>(what now?)</em></strong></h4>
<p>The <strong>overriding goal</strong> of feature-u is two-fold:</p>
<ol>
<li>Allow features to <strong>Plug-and-Play!</strong> This encompasses many things, such as: encapsulation, cross communication, enablement, initialization, and so on. We will build on these concepts throughout this article.</li>
<li><strong>Automate the startup of your application!!</strong> You have the features. Allow them to promote their characteristics, so a central utility can <strong>automatically </strong>configure the frameworks used in your app, thereby launching your application.<strong> </strong>This task must be accomplished in an extendable way, because not everyone uses the same set of frameworks.</li>
</ol>
<h3 id="feature-u-basics"><a href="#e80d" rel="noopener">feature-u Basics</a></h3>
<p>The basic process of <strong>feature-u</strong> is that each feature promotes a <a href="https://feature-u.js.org/0.1.3/api.html#Feature" rel="noopener">Feature </a>object that contains various aspects of that feature — things like the feature's name, its Public API, whether it is enabled, initialization constructs, and resources used to configure its slice of the frameworks in use.</p>
<p>In turn, these Feature objects are supplied to <a href="https://feature-u.js.org/0.1.3/api.html#launchApp" rel="noopener">launchApp()</a>, which configures and starts your application running. In addition, the returned <a href="https://feature-u.js.org/0.1.3/api.html#App" rel="noopener">App </a>object is exported, in order to promote the public API of each feature.</p>
<h4 id="aspects">aspects</h4>
<p>In feature-u, “aspect” is a generalized term used to refer to the various ingredients that (when combined) constitute your application.</p>
<p>Aspects can take on many different forms:</p>
<ul>
<li>UI Components and Routes</li>
<li>State Management (actions, reducers, selectors)</li>
<li>Business Logic</li>
<li>Startup Initialization Code</li>
<li>And so on…</li>
</ul>
<p>Not all aspects are of interest to feature-u — only those that are needed to setup and launch the app — all others are considered an internal implementation detail of the feature.</p>
<p>As an example, consider the redux state manager. While it uses actions, reducers, and selectors … only reducers are needed to setup and configure redux.</p>
<h4 id="framework-integration">framework integration</h4>
<p>A fundamental goal of feature-u is to <strong>automatically configure the framework</strong>(s) used in your run-time-stack (by accumulating the necessary resources across all your features). Because not everyone uses the same frameworks, feature-u accomplishes this through <strong>Extendable Aspects</strong> (you can find them in external NPM packages, or you can create your own).</p>
<p>It is important to understand that the interface to your chosen frameworks is not altered in any way. You use them the same way you always have (just within your feature boundary).</p>
<p>feature-u merely provides a well defined organizational layer, where the frameworks are automatically setup and configured by accumulating the necessary resources across all your features.</p>
<h3 id="eatery-nod-app"><a href="#e80d" rel="noopener">eatery-nod App</a></h3>
<p><a href="https://github.com/KevinAst/eatery-nod/tree/after-features" rel="noopener"><strong>eatery-nod</strong></a> is the application where feature-u was conceived. It is a <a href="https://facebook.github.io/react-native/" rel="noopener">react-native</a> <a href="https://expo.io/" rel="noopener">expo</a> mobile app, and is one of my sandbox applications that I use to test frameworks. I like to develop apps that I can use, but have enough real-world requirements to make it interesting.</p>
<p>eatery-nod randomly selects a “date night” restaurant from a pool of favorites. My wife and I have a steady “date night”, and we are always indecisive on which of our favorite restaurants to frequent :-) So eatery-nod provides the spinning wheel!</p>
<p>Take a look at the eatery-nod <a href="https://github.com/KevinAst/eatery-nod/blob/after-features/README.md" rel="noopener">README</a> to get a feel for the application. Screen flows are available, so it really helps in your orientation to the project.</p>
<figcaption><strong>eatery-nod’s</strong> primary screen flow</figcaption>
</figure>
<p>In addition, <a href="https://github.com/KevinAst/eatery-nod/blob/after-features/src/feature/README.md" rel="noopener">README files</a> are found in each feature, describing what each feature accomplishes. Take some time now and skim through these resources:</p>
<ul>
<li><a href="https://github.com/KevinAst/eatery-nod/blob/after-features/src/feature/device/README.md" rel="noopener"><strong>device</strong></a><strong> </strong>— initializes the device for use by the app, and promotes a device API abstraction</li>
<li><a href="https://github.com/KevinAst/eatery-nod/blob/after-features/src/feature/auth/README.md" rel="noopener"><strong>auth</strong></a><strong> </strong>— promotes complete user authentication</li>
<li><a href="https://github.com/KevinAst/eatery-nod/blob/after-features/src/feature/leftNav/README.md" rel="noopener"><strong>leftNav</strong></a> — promotes the app-specific Drawer/SideBar on the app’s left side</li>
<li><a href="https://github.com/KevinAst/eatery-nod/blob/after-features/src/feature/currentView/README.md" rel="noopener"><strong>currentView</strong></a><strong> </strong>— maintains the currentView with get/set cross-feature communication bindings</li>
<li><a href="https://github.com/KevinAst/eatery-nod/blob/after-features/src/feature/eateries/README.md" rel="noopener"><strong>eateries</strong></a><strong> </strong>— manages and promotes the eateries view</li>
<li><a href="https://github.com/KevinAst/eatery-nod/blob/after-features/src/feature/discovery/README.md" rel="noopener"><strong>discovery</strong></a><strong> </strong>— manages and promotes the discovery view</li>
<li><a href="https://github.com/KevinAst/eatery-nod/blob/after-features/src/feature/firebase/README.md" rel="noopener"><strong>firebase</strong></a><strong> </strong>— initializes the Google Firebase service</li>
<li><a href="https://github.com/KevinAst/eatery-nod/blob/after-features/src/feature/logActions/README.md" rel="noopener"><strong>logActions</strong></a><strong> </strong>— logs all dispatched actions and resulting state</li>
<li><a href="https://github.com/KevinAst/eatery-nod/blob/after-features/src/feature/sandbox/README.md" rel="noopener"><strong>sandbox</strong></a><strong> </strong>— promotes a variety of interactive tests, used in development, that can easily be disabled</li>
</ul>
<h3 id="before-after"><a href="#e80d" rel="noopener">Before &amp; After</a></h3>
<p>Anyone who knows me will tell you that I have an appreciation for a good before/after analysis. Whether it is a home remodel or a software refactor, it helps to chronicle where you have been, so as to quantify concrete achievements, and gives you a sense of accomplishment.</p>
<p>Let’s take a look at eatery-nod’s directory structure (before/after).</p>
<p>For illustration purposes, I have only expanded a few directories, but I think you get the idea.</p>
<p><strong>Before</strong>: here is my project's <a href="https://github.com/KevinAst/eatery-nod/tree/before-features/src" rel="noopener">before features</a> …</p><pre><code>eatery-nod src BEFORE featuressrc/├──actions/        ... redux actions│     auth.js│     discovery.js│     eateries.js│     ... snip snip├──api/            ... various abstract APIs│     device.js│     discovery.js│     ... snip snip├──app/            ... mainline startup **1**│  │  ScreenRouter.js│  │  SideBar.js│  │  index.js│  └──startup/│     │  createAppStore.js│     │  platformSetup.android.js│     │  platformSetup.ios.js│     └──firebase/│           firebaseAppConfig.js│           initFireBase.js├──appState/       ... redux reducers│     auth.js│     discovery.js│     eateries.js│     ... snip snip├──comp/           ... UI Component Screens│     DiscoveryListScreen.js│     EateriesListScreen.js│     ... snip snip├──logic/          ... redux-logic modules│     auth.js│     discovery.js│     eateries.js│     ... snip snip└──util/           ... common utilities</code></pre>
<p><strong>After</strong>: and here is the same project's <a href="https://github.com/KevinAst/eatery-nod/tree/after-features/src" rel="noopener">after features</a> …</p><pre><code>eatery-nod src AFTER featuressrc/│  app.js          ... launches app via launchApp() **2**├──feature/│  │  index.js     ... accumulate/promote all app Feature objects│  ├──auth/        ... the app's authorization feature│  │  │  actions.js│  │  │  featureName.js│  │  │  index.js│  │  │  logic.js│  │  │  publicFace.js│  │  │  route.js│  │  │  signInFormMeta.js│  │  │  state.js│  │  └──comp/│  │        SignInScreen.js│  │        SignInVerifyScreen.js│  ├──currentView/ ... other features│  ├──device/      ... feature to initialize the device│  │  │  actions.js│  │  │  api.js│  │  │  appDidStart.js│  │  │  appWillStart.js│  │  │  featureName.js│  │  │  index.js│  │  │  logic.js│  │  │  publicFace.js│  │  │  route.js│  │  │  state.js│  │  └──init/│  │        platformSetup.android.js│  │        platformSetup.ios.js│  ├──discovery/   ... more features│  ├──eateries/│  ├──firebase/│  ├──leftNav/│  ├──logActions/│  └──sandbox/└──util/           ... common utilities used across all features</code></pre>
<p>As expected, the difference in project organization is dramatic!</p>
<ul>
<li><strong>Before features — </strong>you find constructs for a given feature spread over numerous typed directories.</li>
<li><strong>After features</strong>: all aspects of a given feature are contained in its own isolated directory.</li>
<li>A notable difference is the <strong>dramatic reduction in complexity of the application startup process! </strong>The “before features” contained an entire <code>app\</code> directory of startup code (see <code><a href="#226c" rel="noopener">**1**</a></code> above), while the "after features" simply contains a single <code>app.js</code> startup file (see <code><a href="#f98f" rel="noopener">**2**</a></code> above). <strong>Where did all the complexity go?</strong> ... stay tuned!</li>
</ul>
<h3 id="feature-u-in-action"><a href="#e80d" rel="noopener">feature-u In Action</a></h3>
<p>To better understand feature-u, let’s take a closer look at some eatery-nod examples in action.</p>
<p>Each of the following sections briefly introduce a new feature-u topic, correlating sample code from eatery-nod. Additional information is provided through links, both to the feature-u docs, and eatery-nod source code. In some cases the in-lined sample code has been streamlined (to emphasize a focal point), however the caption link will take you to the actual code (hosted on GitHub).</p>
<p>Here are our topics …</p>
<ol>
<li><a href="#5974" rel="noopener">Simplified App Startup</a></li>
<li><a href="#af00" rel="noopener">React Platforms</a></li>
<li><a href="#6db0" rel="noopener">Feature Object</a></li>
<li><a href="#c1a5" rel="noopener">Feature Initialization</a></li>
<li><a href="#1895" rel="noopener">Feature Collaboration</a></li>
<li><a href="#cfeb" rel="noopener">Framework Integration</a></li>
<li><a href="#e557" rel="noopener">Feature Enablement</a></li>
<li><a href="#5fab" rel="noopener">Managed Code Expansion</a></li>
<li><a href="#2666" rel="noopener">UI Component Promotion</a></li>
<li><a href="#c174" rel="noopener">Single Source of Truth</a></li>
</ol>
<h3 id="1-simplified-app-startup"><a href="#6561" rel="noopener">1. Simplified App Startup</a></h3>
<p>After breaking your application up into pieces (as with features), how do you pull them all back together, and actually start your app running? At first glance, this may seem like a daunting task. As it turns out, however, because of the structure promoted by feature-u, it actually is a very simple process.</p>
<p>To solve this, feature-u provides the <code><a href="https://feature-u.js.org/0.1.3/api.html#launchApp" rel="noopener">launchApp()</a></code> function (see: <a href="https://feature-u.js.org/0.1.3/detail.html#launching-your-application" rel="noopener">Launching Your Application</a>).</p>
<p>Here is eatery-nod’s mainline …</p>
<p>The first thing to note is just how simple and generic the mainline startup process is. There is no real app-specific code in it … not even any global initialization!</p>
<p>That is because feature-u provides various hooks that allow your features to inject their own app-specific constructs.</p>
<p>The mainline merely accumulates the Aspects and Features, and starts the app by invoking <code>launchApp()</code>.</p>
<p>Here are some important points of interest (match the numbers to <code>*n*</code> in the code above):</p>
<ol>
<li><code>(<a href="#a002" rel="noopener">*1*</a>)</code> the supplied Aspects (pulled from separate NPM packages) reflect the frameworks of our run-time stack (in our example <code><a href="http://redux.js.org/" rel="noopener">redux</a></code>, <code><a href="https://github.com/jeffbski/redux-logic" rel="noopener">redux-logic</a></code>, and <code><a href="https://github.com/KevinAst/feature-router" rel="noopener">feature-router</a></code>) and extend the acceptable Feature properties — <code>Feature.reducer</code>, <code>Feature.logic</code>, and <code>Feature.route</code> respectively. (See <a href="https://feature-u.js.org/0.1.3/detail.html#extendable-aspects" rel="noopener">Extendable aspects</a>).</li>
<li><code>(<a href="#a002" rel="noopener">*2*</a>)</code>all app features are accumulated from our <code>feature/</code> directory</li>
<li><code>(<a href="#a002" rel="noopener">*3*</a>)</code>as a preview to <a href="#1895" rel="noopener">Feature Collaboration</a>, the exported return value of <code>launchApp()</code> is an <code>App</code> object, which promotes the accumulated Public API of all features.</li>
</ol>
<h3 id="2-react-platforms"><a href="#6561" rel="noopener">2. React Platforms</a></h3>
<p>In the example above (see <code><a href="#a002" rel="noopener">*4*</a></code>), you see that <code>launchApp()</code> uses a <code><a href="https://feature-u.js.org/0.1.3/api.html#registerRootAppElmCB" rel="noopener">registerRootAppElm()</a></code> callback hook to register the supplied <code>rootAppElm</code> to the specific React platform in use. Because this registration is accomplished by app-specific code, feature-u can operate in any of the React platforms (see <a href="https://feature-u.js.org/0.1.3/detail.html#react-registration" rel="noopener">React Registration</a>).</p>
<p>Here are some <code><a href="https://feature-u.js.org/0.1.3/api.html#registerRootAppElmCB" rel="noopener">registerRootAppElm()</a></code> variations:</p>
<p><a href="https://reactjs.org/" rel="noopener">react web</a>:</p>
<p><a href="https://facebook.github.io/react-native/" rel="noopener">react-native</a>:</p>
<p><a href="https://expo.io/" rel="noopener">expo</a>:</p>
<h3 id="3-feature-object"><a href="#6561" rel="noopener">3. Feature Object</a></h3>
<p>Each feature is located in its own directory, and promotes aspect content through a <code>Feature</code> object (using <code><a href="https://feature-u.js.org/0.1.3/api.html#createFeature" rel="noopener">createFeature()</a></code>).</p>
<p>Here is an example from eatery-nod’s <a href="https://github.com/KevinAst/eatery-nod/blob/after-features/src/feature/device/README.md" rel="noopener">device</a> feature.</p>
<p>As you can see, the <code>Feature</code> object is merely a container that holds aspect content of interest to feature-u. The sole purpose of the <code>Feature</code> object is to communicate this aspect information to <code>launchApp()</code>.</p>
<p>We will fill in more detail a bit later, but for now notice that the feature is conveying reducers, logic modules, routes, and does some type of initialization (<code>appWillStart</code>/<code>appDidStart</code>). It also promotes a <code>publicFace</code> that can be used by other features (such as the feature’s Public API).</p>
<p>For more information, please refer to <a href="https://feature-u.js.org/0.1.3/detail.html#feature-object-relaying-aspect-content" rel="noopener">Feature &amp; aspect content</a>.</p>
<h3 id="4-feature-initialization"><a href="#6561" rel="noopener">4. Feature Initialization</a></h3>
<p>Any given feature should not have to rely on an external startup process to perform the initialization that it needs. Rather, the feature should be able to spawn initialization that it depends on.</p>
<p>This could be any number of things, such as:</p>
<ul>
<li>initialize some service API</li>
<li>inject a utility react component at the App root</li>
<li>dispatch an action that kicks off a startup process</li>
<li>And more...</li>
</ul>
<p>To solve this, feature-u introduces two <a href="https://feature-u.js.org/0.1.3/appLifeCycle.html" rel="noopener">Application Life Cycle Hooks</a>, injected through the following Feature aspects:</p>
<ol>
<li><code><a href="https://feature-u.js.org/0.1.3/appLifeCycle.html#appwillstart" rel="noopener">Feature.appWillStart({app, curRootAppElm}): rootAppElm || falsy</a></code> Invoked one time, just before the app starts up. This can do any type of initialization, including supplementing the app's top-level root element (such as the React <code>component</code> instance).</li>
<li><code><a href="https://feature-u.js.org/0.1.3/appLifeCycle.html#appDidStart" rel="noopener">Feature.appDidStart({app, appState, dispatch}): void</a></code> <br>Invoked one time immediately after the app has started. A typical usage for this hook is to dispatch some type of <code>bootstrap action</code>.</li>
</ol>
<p>Here are some examples from eatery-nod:</p>
<p>FireBase Initialization:</p>
<p>Bootstrap Action:</p>
<p>Inject DOM Root Elm:</p>
<h3 id="5-feature-collaboration"><a href="#6561" rel="noopener">5. Feature Collaboration</a></h3>
<p>Even though a feature’s implementation is encapsulated, it still needs to interact with its surroundings. To complicate matters, one feature should never import resources from another feature, because it should strive to be plug-and-play. As a result, we need a well-defined feature-based Public API.</p>
<p>To solve this, feature-u promotes a <a href="https://feature-u.js.org/0.1.3/crossCommunication.html" rel="noopener">Cross Feature Communication</a>. This is accomplished through the <code>Feature.publicFace</code><a href="https://feature-u.js.org/0.1.3/detail.html#built-in-aspects" rel="noopener">Built-In aspect</a> property. A feature can expose whatever it deems necessary through its <code>publicFace</code>. There are no real constraints on this resource. It is truly open.</p>
<p>Typically this involves promoting selected:</p>
<ul>
<li>actions</li>
<li>selectors</li>
<li>APIs</li>
<li>And so on</li>
</ul>
<p>The <code>publicFace</code> of all features are accumulated and exposed through the <code>App</code> object (emitted from <code>launchApp()</code>).</p>
<p>It contains named feature nodes, as follows:</p><pre><code>App.{featureName}.{publicFace}</code></pre>
<p>Here is an example from eatery-nod’s <a href="https://github.com/KevinAst/eatery-nod/blob/after-features/src/feature/auth/README.md" rel="noopener">auth</a> feature.</p>
<p>Out of all the items found in the <code>auth</code> feature, only two actions and one selector are public.</p>
<p>Here is what the <code>App</code> object would look like for this example:</p><pre><code>app: {  auth: {    actions: {      userProfileChanged(userProfile),      signOut(),    },    sel: {      getUserPool(appState),    },  },  currentView: {   // other features    ... snip snip  },}</code></pre>
<p>As a result, the <code>auth</code> feature's public API can be accessed as follows:</p><pre><code>app.auth.actions.userProfileChanged(userProfile)app.auth.actions.signOut()app.auth.sel.getUserPool(appState)</code></pre>
<h3 id="6-framework-integration"><a href="#6561" rel="noopener">6. Framework Integration</a></h3>
<p>Most likely your application employs one or more frameworks (such as <code>redux </code>or <code><a href="https://github.com/jeffbski/redux-logic" rel="noopener">redux-logic</a></code>). How are the resources needed by these frameworks accumulated and configured across the many features of your app?</p>
<p>To solve this, feature-u introduces <a href="https://feature-u.js.org/0.1.3/detail.html#extendable-aspects" rel="noopener">Extendable aspects</a>. <strong>feature-u</strong> is <a href="https://feature-u.js.org/0.1.3/extending.html" rel="noopener">extendable</a>. It provides integration points between your features and your chosen frameworks.</p>
<p>Extendable Aspects are packaged separately from feature-u, so as to not introduce unwanted dependencies (because not everyone uses the same frameworks). You pick and choose them based on the framework(s) used in your project (matching your project’s run-time stack). They are created with feature-u’s extendable API, using <a href="https://feature-u.js.org/0.1.3/api.html#createAspect" rel="noopener">createAspect()</a>. You can define your own Aspect, if the one you need doesn't already exist.</p>
<p>Let’s take a look at a redux example from eatery-nod.</p>
<p>The <code>device</code> feature maintains its own slice of the state tree.</p>
<p>It promotes its reducer through the <code>Feature.reducer</code> aspect:</p>
<p>Because <code>Feature.reducer</code> is an extended aspect (verses a built-in aspect), it is only available because we registered the <a href="https://github.com/KevinAst/feature-redux" rel="noopener">feature-redux</a> <code>reducerAspect</code> to <code>launchApp()</code> (please refer to <a href="#5974" rel="noopener">Simplified App Startup</a> above).</p>
<p>The key thing to understand is that feature-u (through the feature-redux extension) will automatically configure redux by accumulating all feature reducers into one overall appState.</p>
<p>Here is the reducer code …</p>
<p>A feature-based reducer is simply a normal reducer that manages the feature’s slice of the the overall appState. The only difference is it must be embellished with <code><a href="https://github.com/KevinAst/feature-redux#slicedreducer" rel="noopener">slicedReducer()</a></code>, which provides instructions on where to insert it in the overall top-level appState.</p>
<p>As a result, the <code>device</code> reducer only maintains the state relevant to the <code>device</code> feature (like its little slice of the world) — a status, a fontsLoaded indicator, and the device location.</p>
<p><strong>SideBar</strong>: We are using the <a href="https://astx-redux-util.js.org/" rel="noopener">astx-redux-util</a> utility’s <code><a href="https://astx-redux-util.js.org/1.0.0/api.html#reducerHash" rel="noopener">reducerHash()</a></code> function to concisely implement the feature's reducer (providing an alternative to the common switch statement). I have found that in using a utility like this, for most cases it is feasible to implement all the reducers of a feature in one file (due in part to the smaller boundary of a feature). astx-redux-util also promotes other <a href="https://medium.com/@mange_vibration/reducer-composition-with-higher-order-reducers-35c3977ed08f" rel="noopener">Higher-Order Reducer</a>s. You may want to check this out.</p>
<h3 id="7-feature-enablement"><a href="#6561" rel="noopener">7. Feature Enablement</a></h3>
<p>Some of your features may need to be dynamically enabled or disabled. As an example, certain features may only be enabled with a license upgrade, or other features may only be used for diagnostic purposes.</p>
<p>To solve this, feature-u introduces <a href="https://feature-u.js.org/0.1.3/enablement.html" rel="noopener">Feature Enablement</a>. Using the <code>Feature.enabled</code> Built-In aspect (a boolean property), you can enable or disable your feature.</p>
<p>Here is an example from eatery-nod’s <a href="https://github.com/KevinAst/eatery-nod/blob/after-features/src/feature/sandbox/README.md" rel="noopener">sandbox</a> feature:</p>
<p>The sandbox feature promotes a variety of interactive tests, used in development, that can easily be disabled.</p>
<p>Typically this indicator is based on a dynamic expression, but in this case it is simply hard-coded (to be set by a developer).</p>
<p><strong>SideBar</strong>: When other features interact with a feature that can be disabled, you can use the <code>App</code> object to determine if a feature is present or not (see: <a href="https://feature-u.js.org/cur/enablement.html" rel="noopener">Feature Enablement</a> for more information).</p>
<h3 id="8-managed-code-expansion"><a href="#6561" rel="noopener">8. Managed Code Expansion</a></h3>
<p>In general, accessing <strong>imported resources</strong> during in-line code expansion can be problematic, due to the order in which these resources are expanded. The feature-u <code>App</code> object is such a critical resource (because it promotes the Public API of all features), <strong>it must be available even during code expansion</strong>. In other words, we cannot rely on an "imported app" being resolved during code expansion time.</p>
<p>To solve this, feature-u introduces <a href="https://feature-u.js.org/0.1.3/crossCommunication.html#managed-code-expansion" rel="noopener">Managed Code Expansion</a>.</p>
<p>When aspect content definitions require the <code>App</code> object at code expansion time, you simply wrap the definition in a <code><a href="https://feature-u.js.org/0.1.3/api.html#managedExpansion" rel="noopener">managedExpansion()</a></code> function. In other words, your aspect content can either be the actual content itself (such as a reducer), or a function that returns the content.</p>
<p>When this is done, feature-u will expand it by invoking it in a controlled way, passing the fully resolved <code>App</code> object as a parameter.</p>
<p>Here is a logic module from eatery-nod’s <a href="https://github.com/KevinAst/eatery-nod/blob/after-features/src/feature/auth/README.md" rel="noopener">auth</a> feature:</p>
<p>You can see that the auth feature is using an action from the <a href="https://github.com/KevinAst/eatery-nod/blob/after-features/src/feature/device/README.md" rel="noopener">device</a> feature, requiring access to the <code>app</code> object (see <code><a href="#8030" rel="noopener">*2*</a></code>). Because the <code>app</code> object is needed during code expansion, we use the <code>managedExpansion()</code> function (see <code><a href="#8030" rel="noopener">*1*</a></code>), allowing feature-u to expand it in a controlled way, passing the fully resolved <code>app</code> object as a parameter.</p>
<h3 id="9-ui-component-promotion"><a href="#6561" rel="noopener">9. UI Component Promotion</a></h3>
<p>Features that maintain their own UI Components need a way to promote them in the overall app’s GUI. Because features are encapsulated, how is this accomplished in an autonomous way?</p>
<p>To address this, feature-u recommends considering <a href="https://feature-u.js.org/0.1.3/featureRouter.html" rel="noopener">Feature Based Routes</a> via the <a href="https://github.com/KevinAst/feature-router" rel="noopener">feature-router</a> extendable Aspect (packaged separately). This approach can even be used in conjunction with other navigational solutions.</p>
<p>Feature Routes are based on a very simple concept: allow the application state to drive the routes!<strong> </strong>It operates through a series of feature-based routing functions that reason about the appState, and either return a rendered component, or null to allow downstream routes the same opportunity.</p>
<p>Here is a simple example from the <a href="https://github.com/KevinAst/eatery-nod/blob/after-features/src/feature/device/README.md" rel="noopener">device</a> feature.</p>
<p>This route analyzes the current appState, and displays a SplashScreen until the system is ready:</p>
<p>In feature based routing, you will not find the typical “route path to component” mapping catalog, where (for example) some pseudo <code>route('device')</code> directive causes the Device screen to display, which in turn causes the system to accommodate the request by adjusting its state appropriately.</p>
<p>Rather, the appState is analyzed, and if the device is NOT ready, no other screens are given the option to even render ... Easy Peasy!</p>
<p>Depending on your perspective, this approach can be more natural, but more importantly, it allows features to promote their own screens in an encapsulated and autonomous way.</p>
<h3 id="10-single-source-of-truth"><a href="#6561" rel="noopener">10. Single Source of Truth</a></h3>
<p>Feature implementations (like all coding constructs) should strive to follow the <strong>single-source-of-truth</strong> principle. In doing this, a single line modification can propagate to many areas of your implementation.</p>
<p>What are some <strong>Best Practices</strong> for single-source-of-truth as it relates to features, and how can feature-u help?</p>
<p>The <a href="https://feature-u.js.org/0.1.3/bestPractices.html" rel="noopener">Best Practices</a> section highlights a number of feature-based single-source-of-truth items of interest. These are guidelines, because you must implement them in your application code (feature-u is not in control of this).</p>
<p>Here is an example from the <a href="https://github.com/KevinAst/eatery-nod/blob/after-features/src/feature/eateries/README.md" rel="noopener">eateries</a> feature:</p>
<p>The <code>featureName</code> is used to specify the top-level state location of this feature (see <code><a href="#d59b" rel="noopener">*1*</a></code>). feature-u guarantees the feature name is unique. As a result, it can be used to qualify the identity of several feature aspects.</p>
<p>For example:</p>
<ul>
<li>prefix action types with featureName, guaranteeing their uniqueness app-wide (see: <a href="https://github.com/KevinAst/feature-redux#action-uniqueness-single-source-of-truth" rel="noopener">feature-redux</a> docs)</li>
<li>prefix logic module names with featureName, identifying where that module lives (see: <a href="https://github.com/KevinAst/feature-redux-logic#single-source-of-truth" rel="noopener">feature-redux-logic</a> docs)</li>
<li>depending on the context, the featureName can be used as the root of your feature state’s shape (see: <a href="https://github.com/KevinAst/feature-redux#state-root-single-source-of-truth" rel="noopener">feature-redux</a> docs)</li>
</ul>
<p>Because feature-u relies on <code><a href="https://github.com/KevinAst/feature-redux#slicedreducer" rel="noopener">slicedReducer()</a></code> (in the feature-redux package), a best practice is to use the reducer's embellished selector to qualify your feature state root in all your selector definitions. As a result the slice definition is maintained in one spot (see <code><a href="#d59b" rel="noopener">*2*</a></code>).</p>
<h3 id="feature-u-benefits"><a href="#e80d" rel="noopener">feature-u Benefits</a></h3>
<p>In summary, the benefits of using feature-u include:</p>
<ul>
<li><strong>Feature Encapsulation</strong> — isolating feature implementations improves code manageability</li>
<li><strong>Cross Feature Communication</strong> — a feature’s public API is promoted through a well-defined standard</li>
<li><strong>Feature Enablement</strong> — enable/disable features through a run-time switch</li>
<li><strong>Application Life Cycle Hooks</strong> — features can initialize themselves without relying on an external process</li>
<li><strong>Single Source of Truth</strong> — is facilitated in a number of ways within a feature’s implementation</li>
<li><strong>Framework Integration</strong> — configure the framework(s) of your choice (matching your run-time-stack) using feature-u’s extendable API</li>
<li><strong>UI Component Promotion</strong> — through Feature Routes</li>
<li><strong>Minimize Feature Order Dependency Issues</strong> — even in code that is expanded in-line</li>
<li><strong>Plug-and-Play</strong> — features can be added/removed easily</li>
<li><strong>Simplified Mainline</strong> —<code> launcApp()</code> starts the app running by configuring the frameworks in use, all driven by a simple set of features.</li>
<li><strong>Operates in any React Platform</strong> (including React Web, React Native and Expo)</li>
</ul>
<p>Hopefully this article gives you a feel for how feature-u can improve your project. Please refer to the <a href="https://feature-u.js.org/" rel="noopener">full documentation</a> for more details.</p>
<p>feature-u allows you to focus your attention on the “business end” of your features! Go forth and compute!!</p>
<h3 id="references"><a href="#e80d" rel="noopener">References</a></h3>
<ul>
<li><a href="http://ryanlanciaux.com/blog/2017/08/20/a-feature-based-approach-to-react-development/" rel="noopener">A feature based approach to React development</a> … Ryan Lanciaux</li>
<li><a href="https://medium.com/@alexmngn/how-to-better-organize-your-react-applications-2fd3ea1920f1" rel="noopener">How to better organize your React applications?</a> … Alexis Mangin</li>
<li><a href="https://medium.com/@alexmngn/how-to-use-redux-on-highly-scalable-javascript-applications-4e4b8cb5ef38" rel="noopener">How to use Redux on highly scalable javascript applications?</a> … Alexis Mangin</li>
<li><a href="https://hackernoon.com/the-100-correct-way-to-structure-a-react-app-or-why-theres-no-such-thing-3ede534ef1ed" rel="noopener">The 100% correct way to structure a React app (or why there’s no such thing)</a> … David Gilbertson</li>
<li><a href="https://blog.mapbox.com/redux-for-state-management-in-large-web-apps-c7f3fab3ce9b" rel="noopener">Redux for state management in large web apps</a> … David Clark</li>
</ul>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
