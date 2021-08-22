---
card: "https://cdn-media-1.freecodecamp.org/images/0*P698jwSEpcmSgYYS"
tags: [JavaScript]
description: by Bill Girten
author: "Milad E. Fahmy"
title: "Clever React context tricks using Typescript — not Redux"
created: "2021-08-15T19:40:29+02:00"
modified: "2021-08-15T19:40:29+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-react tag-typescript tag-redux tag-tech ">
<header class="post-full-header">
<h1 class="post-full-title">Clever React context tricks using Typescript — not Redux</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/0*P698jwSEpcmSgYYS 300w,
https://cdn-media-1.freecodecamp.org/images/0*P698jwSEpcmSgYYS 600w,
https://cdn-media-1.freecodecamp.org/images/0*P698jwSEpcmSgYYS 1000w,
https://cdn-media-1.freecodecamp.org/images/0*P698jwSEpcmSgYYS 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/0*P698jwSEpcmSgYYS" alt="Clever React context tricks using Typescript — not Redux">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Bill Girten</p>
<h1 id="clever-react-context-tricks-using-typescript-not-redux"><strong>Clever React context tricks using Typescript — <em>not</em> Redux</strong></h1>
<p>by <a href="undefined" rel="noopener">Bill Girten</a>, Martin Maza, and <a href="undefined" rel="noopener">Alison Stuart</a></p>
<p><strong>TLDR; </strong>Leverage <a href="https://reactjs.org/docs/context.html" rel="noopener">React’s Context API</a> as a light and powerful alternative to Redux.</p>
<p>Let’s face it: when we first started to play with React, it was like a sugar rush. Just create a .jsx file, add a couple of dependencies, and Wham-O! — lightning-quick pages.</p>
<p>That’s when the excitement begins.</p>
<p>Next thing you know, you feel limitless as you engineer the presentation layer of your application at jet-speed. Then you get this crazy idea to make an AJAX call to some microservice and manage the state of the app.</p>
<p>That’s when the pain begins…</p>
<p>So you search Al Gore’s amazing Internet and find out the go-to solution to manage the app’s state is <a href="undefined" rel="noopener">Dan Abramov</a>’s <a href="http://www.redux.js.org" rel="noopener">Redux</a>. Now you’re learning about Actions, Reducers and Stores and diving into <a href="https://facebook.github.io/immutable-js/" rel="noopener">ImmutableJS</a> just so you can manage state. After you mapStateToProps, your React component is typically engaged in what is popularly termed “<a href="https://blog.kentcdodds.com/prop-drilling-bb62e02cb691" rel="noopener">prop drilling</a>”.</p>
<p>Initially, you’re okay with passing down properties from parent to child and, at times, to grandchild. However, as the application becomes more complex you notice that sometimes you are passing some properties through the component tree that are <em>not used</em> by a given descendant component.</p>
<p>Now what?!? You want to be able to manage the app’s state, <em>but</em> you want to do so without passing properties through the hierarchy. It’s time for some clever tricks.</p>
<h3 id="how-the-react-context-api-helps"><strong>How the React Context API helps</strong></h3>
<p>Facebook released the Context API in React v16.3 as a mechanism to pass the app’s assets through a Provider to <em>any</em> child component listening as a Consumer. This eliminates the “prop drilling” paradigm. Imagine: at <em>any</em> level, a parent component could define its own state (including methods) and provide them directly to any participating consumer. Additionally, you can set state by using the methods passed in by the Context’s Provider.</p>
<figcaption>Fig. 2 — React Context API can reduce or eliminate the need for “Prop Drilling” image source: <a href="https://javascriptplayground.com/context-in-reactjs-applications/" rel="noopener" target="_blank" title="">The JavaScript Playground</a></figcaption>
</figure>
<p>We’ll show you how to do this in the example below.</p>
<p><strong>Let’s Roll!</strong></p>
<p><a href="https://github.com/bgirten/clever-React-Context-tricks.git" rel="noopener"><strong>bgirten/clever-React-Context-tricks</strong></a><br><a href="https://github.com/bgirten/clever-React-Context-tricks.git" rel="noopener"><em>new React Context experimments. Contribute to bgirten/clever-React-Context-tricks development by creating an account on…</em>github.com</a></p>
<p>We begin by creating an “initial” State object which will be passed from the App component to the child components. Notice that this initialState also includes methods. This approach provides the capability of defining methods only once, so you can reuse them more easily.</p>
<p>Pass the initial State into the App component and provide a Context. Every component enclosed in the MyContext.Provider tag will have the capability of consuming the context (which in this case includes the initial state of the App component).</p>
<p>Bypass the “prop drilling” from the child component to grandchild component.</p>
<p>The local method handleFetchEvent provides the capability to execute the method passed by the context (in this case, updateStats). The component’s render method fires off due to this.setState.</p>
<p>On line 21, we consume the incoming Context.Provider, allowing us to access all those members and methods defined in the App component’s initial state.</p>
<p>Even though methods can be passed from higher levels of the DOM tree, we can also invoke re-rendering of the DOM by simply calling the <strong>setState </strong>method directly for a given React component.</p>
<p>And here we have the loaded application. Thanks for following along — you can find more awesome content from these authors at:</p>
<p><a href="https://www.github.com/sedulous-mortal" rel="noopener">Alison’s Github,</a> <a href="https://www.github.com/87maza" rel="noopener">Martin’s Github</a>, and <a href="https://www.github.com/bgirten" rel="noopener">Bill’s Github</a></p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
