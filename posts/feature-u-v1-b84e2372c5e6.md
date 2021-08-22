---
card: "https://cdn-media-1.freecodecamp.org/images/1*79altp9cNA9V31OonG_pSA.jpeg"
tags: [React]
description: This article is an introduction to a new JS library called fe
author: "Milad E. Fahmy"
title: "Unleash the Power of Feature Based JS Development — with feature-u V1"
created: "2021-08-15T19:41:39+02:00"
modified: "2021-08-15T19:41:39+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-react tag-features tag-javascript tag-libraries tag-utilities ">
<header class="post-full-header">
<h1 class="post-full-title">Unleash the Power of Feature Based JS Development — with feature-u V1</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*79altp9cNA9V31OonG_pSA.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*79altp9cNA9V31OonG_pSA.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*79altp9cNA9V31OonG_pSA.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*79altp9cNA9V31OonG_pSA.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*79altp9cNA9V31OonG_pSA.jpeg" alt="Unleash the Power of Feature Based JS Development — with feature-u V1">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>This article is an introduction to a new JS library called <a href="https://feature-u.js.org/" rel="noopener">feature-u</a>, that <em>facilitates feature-based development in your <a href="https://reactjs.org/" rel="noopener">React</a> project</em>.</p>
<blockquote><strong><em>Note</em></strong><em>: On 8/14/2018 <a href="https://feature-u.js.org/1.0.0/history.html#v1_0_0" rel="noopener"><strong>feature-u V1</strong></a> was released, that re-designed <a href="https://feature-u.js.org/1.0.1/crossCommunication.html" rel="noopener">Cross Feature Communication</a> to include <a href="https://feature-u.js.org/1.0.1/crossCommunication.html#ui-composition" rel="noopener">UI Composition</a> as a core offering. This article covers the V1 release. The first article, based on <a href="https://feature-u.js.org/0.1.3/history.html#v0_1_3" rel="noopener">feature-u V0</a>, can be found <a href="http://bit.ly/feature-u" rel="noopener">here</a>. We are very excited about this update because it <strong>promotes one solution for all feature collaboration</strong>!</em></blockquote>
<p>Most developers would agree that organizing your project by feature is much preferred over type-based patterns. Because <strong>application domains grow</strong> in the real world, project <strong>organization by type simply doesn’t scale</strong>, <em>it just becomes unmanageable</em>!</p>
<p>There are a number of good articles that discuss this topic with insight on feature-based design and structure (see: <a href="#8e25" rel="noopener">References</a> below). However when it comes to the implementation, you are pretty much left to fend for yourself.</p>
<p><a href="https://feature-u.js.org/" rel="noopener"><strong>feature-u</strong></a> is a utility library that manages and streamlines this process. It automates the mundane details of managing features and helps to promote features that are truly <strong>plug-and-play</strong>.</p>
<p>This article provides a foundation of <a href="https://feature-u.js.org/" rel="noopener"><strong>feature-u</strong></a> concepts and terminology, building insight into how you can promote individual <strong>plug-and-play</strong> features within your project. It makes the case for why <strong>feature-u</strong> was developed and gives you a better understanding of it’s benefits.</p>
<p>Check out the <a href="https://feature-u.js.org/" rel="noopener">full docs</a>, <a href="https://github.com/KevinAst/feature-u" rel="noopener">source</a>, and <a href="https://www.npmjs.com/package/feature-u" rel="noopener">npm package</a>.</p>
<p><a href="https://feature-u.js.org/" rel="noopener"><strong>feature-u</strong></a> opens new doors into the exciting world of feature-based development. It frees you up to <strong>focus your attention on the “business end” of your features</strong>!</p>
<h3 id="at-a-glance">At a Glance</h3>
<p>For your convenience, this <strong>Table of Contents</strong> (TOC) links directly to <strong>each section. Also note that each section title links back to the TOC</strong>.</p><pre><code>Feature Based Development  Segregating Features  Feature Goals    Feature Runtime Consolidation    Feature CollaborationThe feature-u Solution  launchApp()  Feature Object  aspects  Running the App    App Initialization    Framework Configuration    Launching Your Application  Cross Feature Communication  Feature Based UI Composition    Resource Contracts  Feature EnablementIn SummaryBenefitsReferences</code></pre>
<blockquote><em>Please <strong>help me get the word</strong> <strong>out </strong>on <strong>feature-u</strong>. Your claps determine the distribution/promotion of this article. If you think <strong>feature-u</strong> has potential, please give this article multiple claps :-)</em></blockquote>
<h3 id="feature-based-development"><a href="#e98c" rel="noopener">Feature Based Development</a></h3>
<p>At a 30,000 ft view, feature-based development (as in most software) is all about dissecting hard problems into smaller pieces. Even when I started my career <em>(back in the 70's)</em>, this was a prominent quote:</p>
<blockquote>“All problems in computer science can be solved by another level of indirection.” <strong>David Wheeler</strong></blockquote>
<p>By breaking up your application into features, each feature can focus on a more specific and isolated set of tasks. <strong>In some ways you can think of a feature as a “mini application”</strong>!</p>
<p>There are many design considerations in defining your feature boundaries. You can find several articles on this topic that provide insight on feature-based design.</p>
<p>For the most part, these considerations are part of the design of each individual project. While <strong>feature-u</strong> does not dictate overall design considerations, it does facilitate good feature-based principles (such as encapsulation). <em>This will be the focus of this article</em>.</p>
<h3 id="segregating-features"><a href="#e98c" rel="noopener">Segregating Features</a></h3>
<p>If you are like me, when you think about feature-based development, the first thing that comes to mind is to isolate your code into feature directories.</p>
<p>In doing this your code is organized by what it accomplishes (i.e. features), rather than what it is (i.e. components, routes, logic, actions, reducers, selectors, etc.).</p>
<p>By segregating your features into individual directories, there is a semblance of isolation.</p>
<h3 id="feature-goals"><a href="#e98c" rel="noopener">Feature Goals</a></h3>
<p>Our goal is to <strong>encapsulate each feature</strong> in such a way as to make them truly <strong>plug-and-play</strong>. <em>But how is this accomplished</em>?</p>
<p>The directory structure is just a start. There are <strong>several hurdles</strong> that must be overcome to realize our goal …</p>
<ul>
<li>How do we encapsulate and isolate our features, while still allowing them to collaborate with one another?</li>
<li>How can selected features introduce start-up initialization (even injecting utility at the root DOM), without relying on some external startup process?</li>
<li>How can feature-based UI Composition be accomplished in an isolated and autonomous way?</li>
<li>How do we configure our chosen frameworks now that our code is so spread out?</li>
<li>How do we enable/disable selected features which are either optional, or require a license upgrade?</li>
</ul>
<p><strong>In short</strong>, how do we achieve a running application from these isolated features?</p>
<p>When you boil it all down, there are <strong>two overriding characteristics</strong> that must be accomplished to achieve our goals:</p>
<ol>
<li><code><a href="#c8d1" rel="noopener"><strong>Feature Runtime Consolidation</strong></a></code>: <em>pulling our features back together into one running application</em></li>
<li><code><a href="#abbc" rel="noopener"><strong>Feature Collaboration</strong></a></code>: <em>provide a mechanism by which our features can interact with one another</em></li>
</ol>
<p>As it turns out, <em>everything else is a byproduct of these two artifacts</em>. Let’s take a closer look at each of these items.</p>
<h3 id="feature-runtime-consolidation"><a href="#e98c" rel="noopener">Feature Runtime Consolidation</a></h3>
<p>Now that we have isolated our features into separate entities, how do we bring them back together so they run as <strong>one application</strong>? We must be able to pull and configure various aspects of our individual features, and “launch” them as a single homogeneous running application.</p>
<p>This concern can be further divided into two sub-concerns:</p>
<ul>
<li><code><a href="#d44a" rel="noopener">App Initialization</a></code><br>Some features may require certain startup initialization. As an example, a feature that encapsulates some DB abstraction will rely on a run-time setup of a DB service.<br>Certainly we don’t want to rely on some global app logic to accomplish this <em>(once again, we want our features to be encapsulated and self-sufficient)</em>.</li>
<li><code><a href="#c339" rel="noopener">Framework Configuration</a></code><br>If your application relies on other frameworks, chances are there are resources contained within each feature that must be accumulated and fed into the framework configuration process.<br>How is this accomplished?</li>
</ul>
<h3 id="feature-collaboration"><a href="#e98c" rel="noopener">Feature Collaboration</a></h3>
<p>The second characteristic (mentioned above) is <strong>Feature Collaboration</strong> — <em>providing a mechanism by which our features can interact with one another</em>.</p>
<p>A <strong>best practice</strong> of feature-based development <em>(to the extent possible)</em> is to <strong>treat each feature as an isolated implementation</strong>. Most aspects of a feature are internal to that feature’s implementation <em>(for example, actions are typically created and consumed exclusively by logic/reducers/components that are internal to that feature)</em>.</p>
<p>From this perspective, you can think of each feature as its <strong>own isolated mini application</strong>.</p>
<p>With that said, however, we know that <em>“</em><strong>no man is an island</strong><em>”</em>! Any given feature ultimately exists as part of a larger application. There are cases where a feature needs to promote a limited subset of its aspects to other features. For example, a feature may need to:</p>
<ul>
<li>be knowledgeable of some external state (via a selector)</li>
<li>emit or monitor actions of other features</li>
<li>consolidate component resources from other features — as in <strong>UI Composition</strong></li>
<li>invoke the API of other features</li>
<li>etc. etc. etc.</li>
</ul>
<p>These items form the basis of why <code><a href="#5369" rel="noopener"><strong>Cross Feature Communication</strong></a></code> and <code><a href="#a480" rel="noopener"><strong>Feature Based UI Composition</strong></a></code> are needed.</p>
<p>To complicate matters, as a general rule, <strong>JS imports should NOT cross feature boundaries</strong>. The reason being that this cross-communication should be <strong>limited to public access points</strong> — helping to <strong>facilitate true plug-and-play</strong>.</p>
<p>Given all this then, <strong>how is Cross Feature Communication achieved</strong> <em>in a way that doesn’t break encapsulation</em>?</p>
<p>Features need a way to promote their <strong>Public Interface</strong> to other features, and consume other feature’s <strong>Public Assets</strong>.</p>
<h3 id="the-feature-u-solution"><a href="#e98c" rel="noopener">The feature-u Solution</a></h3>
<p>Let’s take a look at the solution <strong>feature-u</strong> provides for all of these goals. The following sections will build <strong>feature-u </strong>concepts incrementally.</p>
<h3 id="launchapp-"><a href="#e98c" rel="noopener">launchApp()</a></h3>
<p><code><a href="https://feature-u.js.org/1.0.1/api.html#launchApp" rel="noopener">launchApp()</a></code> is an essential utility in <strong>feature-u</strong>. It is an agent, working on your behalf, which provides the foundation that <strong>accomplishes all the goals</strong> of <strong>feature-u</strong>! It facilitates both <code><a href="#c8d1" rel="noopener"><strong>Feature Runtime Consolidation</strong></a></code> and <code><a href="#abbc" rel="noopener"><strong>Feature Collaboration</strong></a></code>.</p>
<p>With this utility, <strong>your mainline startup process is extremely simple</strong> … it merely invokes <code><a href="https://feature-u.js.org/1.0.1/api.html#launchApp" rel="noopener">launchApp()</a></code>, and you are done!</p>
<p>The <code><a href="https://feature-u.js.org/1.0.1/api.html#launchApp" rel="noopener">launchApp()</a></code> function actually starts your application running, employing various hooks that drive BOTH <strong>App Initialization</strong> and <strong>Framework Configuration</strong>!</p>
<p>You can find <code><a href="https://feature-u.js.org/1.0.1/api.html#launchApp" rel="noopener">launchApp()</a></code> examples in the <code><a href="https://feature-u.js.org/1.0.1/usage.html#launchapp" rel="noopener">Usage</a></code> section, and <code><a href="https://feature-u.js.org/1.0.1/detail.html#launching-your-application" rel="noopener">Launching Your Application</a></code>.</p>
<p><strong>How does this work? What are the bindings to <code><a href="https://feature-u.js.org/1.0.1/api.html#launchApp" rel="noopener">launchApp()</a></code></strong>? ... <em>let's delve a bit deeper…</em></p>
<h3 id="feature-object"><a href="#e98c" rel="noopener">Feature Object</a></h3>
<p>To accomplish this, each feature promotes a <code><a href="https://feature-u.js.org/1.0.1/api.html#Feature" rel="noopener">Feature</a></code> object <em>(using <code><a href="https://feature-u.js.org/1.0.1/api.html#createFeature" rel="noopener">createFeature()</a></code>)</em>, that catalogs aspects of interest to <strong>feature-u</strong>.</p>
<p>This is the primary input to <code><a href="https://feature-u.js.org/1.0.1/api.html#launchApp" rel="noopener">launchApp()</a></code>.</p>
<h3 id="aspects"><a href="#e98c" rel="noopener">aspects</a></h3>
<p>In <strong>feature-u</strong>, “aspect” <em>(little “a”)</em> is a generalized term used to refer to the various ingredients that (when combined) constitute your application. Aspects can take on many different forms: <strong>UI Components</strong> • <strong>Routes</strong> • <strong>State Management</strong><em>(actions, reducers, selectors)</em> • <strong>Business Logic</strong> • <strong>Startup Initialization Code</strong> • <em>etc. etc. etc.</em></p>
<p><strong>Not all aspects are of interest to feature-u</strong> … <em>only those that are needed to setup and launch the application</em> … all others are considered an internal implementation detail of the feature. As an example, consider the Redux state manager: while it uses actions, reducers, and selectors … only reducers are needed to setup and configure Redux.</p>
<p>The <code><a href="https://feature-u.js.org/1.0.1/api.html#Feature" rel="noopener">Feature</a></code> object is merely a lightweight container that holds aspects of interest to <strong>feature-u</strong>. These aspects can either be <code><a href="https://feature-u.js.org/1.0.1/detail.html#built-in-aspects" rel="noopener">Built-In aspects</a></code> <em>(from core <strong>feature-u</strong>)</em>, or <code><a href="https://feature-u.js.org/1.0.1/detail.html#extendable-aspects" rel="noopener">Extendable aspects</a></code> <em>(from plugin extensions)</em>.</p>
<h3 id="running-the-app"><a href="#e98c" rel="noopener">Running the App</a></h3>
<p>Let’s see how <code><a href="https://feature-u.js.org/1.0.1/api.html#launchApp" rel="noopener">launchApp()</a></code> accommodates the two sub-goals of running the app:</p>
<ul>
<li><code><a href="#d44a" rel="noopener">App Initialization</a></code></li>
<li><code><a href="#c339" rel="noopener">Framework Configuration</a></code></li>
</ul>
<h3 id="app-initialization"><a href="#e98c" rel="noopener">App Initialization</a></h3>
<p>Because <code><a href="https://feature-u.js.org/1.0.1/api.html#launchApp" rel="noopener">launchApp()</a></code> is in control of starting the app, it can introduce <code><a href="https://feature-u.js.org/1.0.1/appLifeCycle.html" rel="noopener">Application Life Cycle Hooks</a></code>.</p>
<p>This allows each feature to perform app-specific initialization, and even inject components into the root of the app.</p>
<p>There are two hooks:</p>
<ol>
<li><code><a href="https://feature-u.js.org/1.0.1/appLifeCycle.html#appwillstart" rel="noopener">Feature.appWillStart()</a></code> - invoked one time at app startup time</li>
<li><code><a href="https://feature-u.js.org/1.0.1/appLifeCycle.html#appdidstart" rel="noopener">Feature.appDidStart()</a></code> - invoked one time immediately after app has started</li>
</ol>
<p><code><a href="https://feature-u.js.org/1.0.1/appLifeCycle.html" rel="noopener">Application Life Cycle Hooks</a></code> <strong>greatly simplify your app's mainline startup process</strong>, because <em>initialization specific to a given feature can be encapsulated in that feature</em>.</p>
<h3 id="framework-configuration"><a href="#e98c" rel="noopener">Framework Configuration</a></h3>
<p>A fundamental goal of <strong>feature-u</strong> is to <strong>automatically configure the framework(s)</strong> used in your run-time-stack <em>(by accumulating the necessary resources across all your features)</em>. This greatly reduces the boilerplate code within your app.</p>
<p>How can this be accomplished when there are so many frameworks out there … and every project uses a different mix?</p>
<p><strong>feature-u</strong> is extendable! It operates in an open plugable architecture where <strong>Extendable Aspects</strong> integrate <strong>feature-u</strong> to other frameworks, matching your specific run-time stack. <strong>This is good,</strong> <em>because not everyone uses the same frameworks</em>!</p>
<p><strong>Extendable Aspects</strong> can be found in external NPM packages <em>(the normal case)</em>, or you can create your own using <code><a href="https://feature-u.js.org/1.0.1/api.html#createAspect" rel="noopener">createAspect()</a></code> <em>(a more advanced topic)</em>.</p>
<p>The <code><a href="https://feature-u.js.org/1.0.1/api.html#Aspect" rel="noopener">Aspect</a></code> object contains a series of <code><a href="https://feature-u.js.org/1.0.1/extending.html#aspect-life-cycle-methods" rel="noopener">Aspect Life Cycle Hooks</a></code> that are invoked under the control of <strong>feature-u</strong>(<code><a href="https://feature-u.js.org/1.0.1/api.html#launchApp" rel="noopener">launchApp()</a></code>). In general, an Aspect's responsibility is to:</p>
<ul>
<li>accumulate <code><a href="https://feature-u.js.org/1.0.1/api.html#AspectContent" rel="noopener">AspectContent</a></code> across all features</li>
<li>perform some desired setup and configuration</li>
<li>expose it’s functionality in some way (typically a framework integration)</li>
</ul>
<p>An <code><a href="https://feature-u.js.org/1.0.1/api.html#Aspect" rel="noopener">Aspect</a></code> automatically extends the <code><a href="https://feature-u.js.org/1.0.1/api.html#Feature" rel="noopener">Feature</a></code> object by allowing it's <code><a href="https://feature-u.js.org/1.0.1/api.html#AspectContent" rel="noopener">AspectContent</a></code> to be <strong>"cataloged"</strong> in the <code>Feature</code> using <code>Aspect.name</code> as it's key. In the diagram above, you can see that</p>
<ul>
<li>the <code>reducerAspect</code> (<code>Aspect.name: 'reducer'</code>) permits a <code>Feature.reducer: reducerContent</code> construct</li>
<li>and the <code>logicAspect</code> (<code>Aspect.name: 'logic'</code>) permits a <code>Feature.logic: logicContent</code> construct</li>
</ul>
<p>It is important to understand that the interface to your chosen frameworks is not altered in any way. You use them the same way you always have <em>(just within your feature boundary)</em>. <strong>feature-u</strong> merely provides a well-defined organizational layer, where the frameworks are automatically setup and configured by accumulating the necessary resources across all your features.</p>
<h3 id="launching-your-application"><a href="#e98c" rel="noopener">Launching Your Application</a></h3>
<p>In <strong>feature-u,</strong> the application mainline is very simple and generic. There is no real app-specific code in it … <strong>not even any global initialization</strong>! That is because <strong>each feature can inject their own app-specific constructs</strong>!! The mainline merely accumulates the <code><a href="https://feature-u.js.org/1.0.1/api.html#Aspect" rel="noopener">Aspects</a></code> and <code><a href="https://feature-u.js.org/1.0.1/api.html#Feature" rel="noopener">Features</a></code>, and starts the app by invoking <code><a href="https://feature-u.js.org/1.0.1/api.html#launchApp" rel="noopener">launchApp()</a></code>:</p>
<p>Here are some <strong>important points of interest</strong> <em>(match the numbers to <code>*n*</code> in the code above)</em>:</p>
<ol>
<li>the supplied <code><a href="https://feature-u.js.org/1.0.1/api.html#Aspect" rel="noopener">Aspects</a></code> <em>(pulled from separate npm packages)</em> reflect the frameworks of our run-time stack <em>(in our example <code><a href="http://redux.js.org/" rel="noopener">redux</a></code>, <code><a href="https://github.com/jeffbski/redux-logic" rel="noopener">redux-logic</a></code>, and <code><a href="https://github.com/KevinAst/feature-router" rel="noopener">feature-router</a></code>)</em> and extend the acceptable Feature properties <em>(<code>Feature.reducer</code>, <code>Feature.logic</code>, and <code>Feature.route</code> respectively)</em> ... <strong><em>see:</em></strong><em> <code><a href="https://feature-u.js.org/1.0.1/detail.html#extendable-aspects" rel="noopener">Extendable aspects</a></code></em></li>
<li>all of our app features are supplied (accumulated from the <code>features/</code> directory)</li>
<li>a <code><a href="https://feature-u.js.org/1.0.1/api.html#registerRootAppElmCB" rel="noopener">registerRootAppElm()</a></code> callback is used to catalog the supplied <code>rootAppElm</code> to the specific React platform in use. Because this registration is accomplished by your app-specific code, <strong>feature-u</strong> can operate in any of the React platforms, such as: <code><a href="https://reactjs.org/" rel="noopener">react-web</a></code>, <code><a href="https://facebook.github.io/react-native/" rel="noopener">react-native</a></code>, and <code><a href="https://expo.io/" rel="noopener">expo</a></code> ... <strong><em>see:</em></strong><em> <code><a href="https://feature-u.js.org/1.0.1/detail.html#react-registration" rel="noopener">React Registration</a></code></em></li>
<li><em>as a bit of a preview</em>, the return value of <code><a href="https://feature-u.js.org/1.0.1/api.html#launchApp" rel="noopener">launchApp()</a></code> is a <code><a href="https://feature-u.js.org/1.0.1/api.html#Fassets" rel="noopener">Fassets object</a></code>, which promotes the accumulated Public Face of all features, and is exported to provide <code><a href="https://feature-u.js.org/1.0.1/crossCommunication.html" rel="noopener">Cross Feature Communication</a></code>.</li>
</ol>
<h3 id="cross-feature-communication"><a href="#e98c" rel="noopener">Cross Feature Communication</a></h3>
<p>In support of <strong>Feature Collaboration</strong> <em>that doesn’t break encapsulation</em>, <strong>feature-u</strong> promotes feature-based resources through something called <code>fassets</code> (feature assets). This is how all <strong>Cross Feature Communication</strong> is accomplished. You can think of this as the <strong>Public Face</strong> of a feature.</p>
<p><strong>SideBar</strong>: The term <code>fassets</code> is a play on words. While it is pronounced "facet" <em>and is loosely related to this term</em>, it is spelled fassets (i.e. feature assets).</p>
<p>A feature can expose whatever it deems necessary through the built-in <code><a href="https://feature-u.js.org/1.0.1/api.html#fassets" rel="noopener">Feature.fassets aspect</a></code>). There is no real constraint on this resource. It is truly open.</p>
<p>The <code><a href="https://feature-u.js.org/1.0.1/api.html#fassets" rel="noopener">fassets aspect</a></code> has a <code>define</code> directive where resources are cataloged.</p>
<p>Here is a simple example of how <code>fassets</code> are defined:</p>
<p><strong>feature-u</strong> accumulates <code>fassets</code> from all active features, and promotes them through the <code><a href="https://feature-u.js.org/1.0.1/api.html#Fassets" rel="noopener">Fassets object</a></code> <em>(emitted from <code><a href="https://feature-u.js.org/1.0.1/api.html#launchApp" rel="noopener">launchApp()</a></code>)</em>.</p>
<p><strong>SideBar</strong>: There are several ways to obtain access the <code>Fassets object</code> <em>(see <code><a href="https://feature-u.js.org/1.0.1/crossCommunication.html#obtaining-fassets-object" rel="noopener">Obtaining fassets object</a></code>)</em>.</p>
<p>This is an example of a <strong>push</strong> philosophy. Here the supplier is is simply publicly promoting a resource for other features to use <strong>(take it or leave it)</strong>. The supplier is merely saying: <em>“this is my Public Face”</em>.</p>
<p>You can find more information about this topic in <code><a href="https://feature-u.js.org/1.0.1/crossCommunication.html" rel="noopener">Cross Feature Communication</a></code>.</p>
<h3 id="feature-based-ui-composition"><a href="#e98c" rel="noopener">Feature Based UI Composition</a></h3>
<p>It is common for a UI component to be an accumulation of sub-components that span several features. As a result, <strong>UI Composition is a very important part of Cross Feature Communication</strong>.</p>
<p>In support of this, <strong>feature-u</strong> introduces the <code><a href="https://feature-u.js.org/1.0.1/api.html#withFassets" rel="noopener">withFassets()</a></code> Higher-order Component (HoC) that auto-wires fasset properties into a component. This is a common pattern popularized by Redux <code>connect()</code> <em>(simplifying component access to application state)</em>.</p>
<p>Here is how a component would access a <code>company.logo</code> <em>(defined by another feature)</em>:</p>
<p>The <code><a href="https://feature-u.js.org/1.0.1/api.html#withFassets" rel="noopener">withFassets()</a></code> HoC auto-wires named feature assets as component properties through the <code><a href="https://feature-u.js.org/1.0.1/api.html#mapFassetsToPropsStruct" rel="noopener">mapFassetsToPropsStruct</a></code> hook. In this example, because the <code>Logo</code> property is a component, <code>MyComponent</code> can simply reference it using JSX.</p>
<p>You can find more information about this topic in <code><a href="https://feature-u.js.org/1.0.1/crossCommunication.html#ui-composition" rel="noopener">UI Composition</a></code>.</p>
<h3 id="resource-contracts"><a href="#e98c" rel="noopener">Resource Contracts</a></h3>
<p>It is common for UI Composition to be represented as a contract, where a component in one feature has a series of injection needs that are to be supplied by other features.</p>
<p>The <code><a href="https://feature-u.js.org/1.0.1/api.html#fassets" rel="noopener">fassets aspect</a></code> has additional constructs to facilitate this contractual arrangement, allowing <strong>feature-u</strong> to provide more validation in the process.</p>
<p>Rather than just defining resources in one feature and using them in another:</p>
<ul>
<li>A given feature can specify a series of injection needs using the <code>fassets.use</code> directive. This identifies a set of <strong>injection keys</strong> that uniquely identify these resources.</li>
<li>Other features will supply this content using the <code>fassets.defineUse</code> directive, by referencing these same <strong>injection keys</strong>.</li>
</ul>
<p>This represents more of a <strong>pull</strong> philosophy. It gives <strong>feature-u</strong> more knowledge of the process, allowing it to verify that supplied resources are correct.</p>
<p>Here is a <code>main</code> feature that is pulling in a series of sub-components <em>(links and bodies)</em> from other features:</p>
<p><strong>main feature:</strong></p>
<p>Here is the <code>MainPage</code> component that fulfills the usage contract:</p>
<p>Through this implementation, <strong>any feature may dynamically inject itself in the process autonomously</strong>! In addition, this dynamic implicitly handles the case where a feature is dynamically disabled <strong>(very kool indeed)</strong>!!</p>
<p>The following snippets are taken from other features that supply the definitions for the content to inject:</p>
<p><strong>cart feature</strong></p>
<p><strong>search feature</strong></p>
<p>Two external features (<strong>cart</strong> and <strong>search</strong>) define the content that is requested by the <strong>main</strong> feature.</p>
<p>The <code>fassets.defineUse</code> directive requires that the resource keys match a <code>fassets.use</code> feature request. This is the contract that provides <strong>feature-u</strong> insight when enforcing it's validation.</p>
<p><strong>SideBar</strong>: Because we are also dealing with navigation, we introduce <code><a href="https://reacttraining.com/react-router/" rel="noopener">react-router</a></code> into the mix (with the <code>Link</code> and <code>Route</code> components). Because of RR's V4 design, our routes are also handled through component composition <em>(see <code><a href="https://feature-u.js.org/1.0.1/featureRouter.html" rel="noopener">Feature Based Routes</a></code> for more information)</em>.</p>
<p>You can find more information about this topic in <code><a href="https://feature-u.js.org/1.0.1/crossCommunication.html#ui-composition" rel="noopener">UI Composition</a></code>.</p>
<h3 id="feature-enablement"><a href="#e98c" rel="noopener">Feature Enablement</a></h3>
<p>Features can be dynamically disabled by setting the <code>Feature.enabled</code> boolean property <em>(part of the <code><a href="https://feature-u.js.org/1.0.1/detail.html#built-in-aspects" rel="noopener">Built-In aspects</a></code>)</em>:</p>
<p>In this example, it is just as though the <code>sandbox</code> feature doesn't exist. In other words <strong>it has been logically removed</strong>.</p>
<p>Typically, this indicator is based on some run-time expression, allowing packaged code to be dynamically enabled/disabled during the application’s start-up process:</p>
<p>This dynamic is useful in a number of different situations. For example:</p>
<ul>
<li>some features may require a license upgrade</li>
<li>other features may only be used for diagnostic purposes, and are disabled by default</li>
</ul>
<p>You can find more information about this topic in <code><a href="https://feature-u.js.org/1.0.1/enablement.html" rel="noopener">Feature Enablement</a></code>.</p>
<h3 id="in-summary"><a href="#e98c" rel="noopener">In Summary</a></h3>
<p>The following diagram summarizes <strong>feature-u</strong>’s Basic Concepts <em>(as discussed above)</em>:</p>
<h3 id="benefits"><a href="#e98c" rel="noopener">Benefits</a></h3>
<p>There are many benefits in using <strong>feature-u</strong>!</p>
<p>The two fundamental artifacts from which most benefits are derived are:</p>
<ul>
<li>A formal means by which features can collaborate with one another <em>(<code><a href="http://localhost:4000/crossCommunication.html" rel="noopener">Cross Feature Communication</a></code>)</em>, making them truly <strong>plug-and-play</strong><br>This includes the ability for <code><a href="http://localhost:4000/crossCommunication.html#ui-composition" rel="noopener">UI Composition</a></code> to cross feature boundaries. It even allows UI Content to be injected autonomously. This is something that has to be seen ... it shows off <strong>feature-u</strong> very well.</li>
<li>A significant reduction in boilerplate code through:<br>Auto configuration of the frameworks in-use <em>(via plugin extensions — <code><a href="http://localhost:4000/detail.html#extendable-aspects" rel="noopener">Extendable aspects</a></code>)</em><br>Startup initialization that is encapsulated within features <em>(via <code><a href="http://localhost:4000/appLifeCycle.html" rel="noopener">Application Life Cycle Hooks</a></code>)</em></li>
</ul>
<p>The following list of benefits can be directly correlated to the considerations that formed the basis of why <strong>feature-u</strong> was developed <em>(see: <code><a href="http://localhost:4000/why.html" rel="noopener">Why feature-u?</a></code>)</em>.</p>
<ol>
<li><strong>Feature Encapsulation:</strong> <em>isolating feature boundaries improves code manageability</em></li>
<li><strong>Feature Collaboration:</strong> <em>promote <strong>Cross Feature Communication</strong> through a well-defined feature-based Public Interface</em></li>
<li><strong>Feature Based UI Composition:</strong> <em>facilitate seamless <strong>cross-feature component composition</strong></em></li>
<li><strong>Application Life Cycle Hooks:</strong> <em>features can initialize themselves without relying on an external process</em></li>
<li><strong>Feature Enablement:</strong> <em>enable/disable features through a run-time switch</em></li>
<li><strong>Minimize Feature Order Dependency Issues</strong> <em>during in-line code expansion</em></li>
<li><strong>Framework Integration:</strong> <em>automatically configure used framework(s) (matching the app’s run-time-stack) by accumulating all feature aspects (employing an extendable API)</em></li>
<li><strong>UI Component Promotion:</strong> <em>features can autonomously promote their UI components through Feature Based Route Management</em></li>
<li><strong>Single Source of Truth:</strong> <em>is facilitated in a number of ways within a feature’s implementation</em></li>
<li><strong>Simplified App Startup:</strong> <em>launching an app can be accomplished through a single line of executable code!</em></li>
<li><strong>Operates in any React Platform</strong> <em>React Web, React Native, Expo, etc.</em></li>
<li><strong>Plug-and-Play:</strong> <em>features can be more easily added or removed</em></li>
</ol>
<p><strong>feature-u</strong> allows you to <strong>focus your attention on the “business end” of your features!</strong></p>
<p><em>Go forth and compute!!</em></p>
<h3 id="references"><a href="#e98c" rel="noopener">References</a></h3>
<ul>
<li><a href="http://ryanlanciaux.com/blog/2017/08/20/a-feature-based-approach-to-react-development/" rel="noopener">A feature based approach to React development</a> <em>… Ryan Lanciaux</em></li>
<li><a href="https://medium.com/@alexmngn/how-to-better-organize-your-react-applications-2fd3ea1920f1" rel="noopener">How to better organize your React applications?</a> <em>… Alexis Mangin</em></li>
<li><a href="https://medium.com/@alexmngn/how-to-use-redux-on-highly-scalable-javascript-applications-4e4b8cb5ef38" rel="noopener">How to use Redux on highly scalable javascript applications?</a> <em>… Alexis Mangin</em></li>
<li><a href="https://hackernoon.com/the-100-correct-way-to-structure-a-react-app-or-why-theres-no-such-thing-3ede534ef1ed" rel="noopener">The 100% correct way to structure a React app (or why there’s no such thing)</a> <em>… David Gilbertson</em></li>
<li><a href="https://blog.mapbox.com/redux-for-state-management-in-large-web-apps-c7f3fab3ce9b" rel="noopener">Redux for state management in large web apps</a> <em>… David Clark</em></li>
</ul>
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
