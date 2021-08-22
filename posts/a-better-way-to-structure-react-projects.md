---
card: "/images/default.jpg"
tags: [React]
description: Hello, everyone! A lot of e-ink has already been spilt on the
author: "Milad E. Fahmy"
title: "A Better Way to Structure React Projects"
created: "2021-08-15T19:27:22+02:00"
modified: "2021-08-15T19:27:22+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-react tag-code-quality tag-front-end-development tag-javascript ">
<header class="post-full-header">
<h1 class="post-full-title">A Better Way to Structure React Projects</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2021/02/z02wxvp94dwg84c4ifhj.jpeg 300w,
/news/content/images/size/w600/2021/02/z02wxvp94dwg84c4ifhj.jpeg 600w,
/news/content/images/size/w1000/2021/02/z02wxvp94dwg84c4ifhj.jpeg 1000w,
/news/content/images/size/w2000/2021/02/z02wxvp94dwg84c4ifhj.jpeg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2021/02/z02wxvp94dwg84c4ifhj.jpeg" alt="A Better Way to Structure React Projects">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Hello, everyone! A lot of e-ink has already been spilt on the relatively easier pickings of “Doing X in React” or “Using React with technology X”. </p>
<p>So instead, I want to talk about the experiences I've had building frontends from scratch at <a href="https://delightchat.io/">DelightChat</a> and at my previous companies.</p>
<p>These projects require a deeper understanding of React and extended usage in a production setting.</p>
<p>If you want to watch a video version of this tutorial to supplement your reading, <a href="https://www.youtube.com/watch?v=lViIdphWTwY">you can do so here</a>.</p>
<h2 id="introduction">Introduction</h2>
<p>In a nutshell, a complex React project should be structured like this. Although I use NextJS in production, this file structure should be quite useful in any React setting.</p><pre><code>src
|---adapters
|---contexts
|---components
|---styles
|---pages
</code></pre>
<p><em>Note: In the above file structure, the assets or static files should be placed in whatever the variant of</em> <code>public *</code> folder for your framework is.*</p>
<p>For each of the above folders, let’s discuss them in order of precedence.</p>
<h2 id="1-adapters">1. Adapters</h2>
<p><strong><code>Adapters</code></strong> are the connectors of your application with the outside world. Any form of API call or websocket interaction which needs to happen, to share data with an external service or client, should happen within the adapter itself.</p>
<p>There are cases where some data is always shared between all the adapters – for example, sharing of cookies, base URL and headers across your AJAX (XHR) adapters. These can be initialized in the xhr folder, and then imported inside of your other adapters to be used further.</p>
<p>This structure will look like this:</p><pre><code>adapters
|---xhr
|---page1Adapter
|---page2Adapter
</code></pre>
<p>In the case of axios, you can use <code>axios.create</code> to create a base adapter, and either export this initialized instance, or create different functions for get, post, patch and delete to abstract it further. This would look like this:</p><pre><code>// adapters/xhr/index.tsx
import Axios from "axios";
function returnAxiosInstance() {
return Axios.create(initializers);
}
export function get(url){
const axios = returnAxiosInstance();
return axios.get(url);
}
export function post(url, requestData){
const axios = returnAxiosInstance();
return axios.post(url, requestData);
}
... and so on ...
</code></pre>
<p>After you have your base file (or files) ready, create a separate adapter file for each page, or each set of functionalities, depending on how complex your app is. A well-named function makes it very easy to understand what each API call does and what it should accomplish.</p><pre><code>// adapters/page1Adapter/index.tsx
import { get, post } from "adapters/xhr";
import socket from "socketio";
// well-named functions
export function getData(){
return get(someUrl);
}
export function setData(requestData){
return post(someUrl, requestData);
}
... and so on ...
</code></pre>
<p>But how will these adapters be of any use? Let’s find out in the next section.</p>
<h2 id="2-components">2. Components</h2>
<p>Although in this section we should talk about contexts, I want to talk about components first. This is to understand why context is required (and needed) in complex applications.</p>
<p><strong><code>Components</code></strong> are the life-blood of your application. They will hold the UI for your application, and can sometimes hold the Business Logic and also any State which has to be maintained.</p>
<p>In case a component becomes too complex to express Business Logic with your UI, it is good to be able to split it into a separate bl.tsx file, with your root index.tsx importing all of the functions and handlers from it.</p>
<p>This structure would look like this:</p><pre><code>components
|---page1Components
|--Component1
|--Component2
|---page2Component
|--Component1
|---index.tsx
|---bl.tsx
</code></pre>
<p>In this structure, each page gets its own folder inside of components, so that it’s easy to figure out which component affects what.</p>
<p>It’s also important to limit the scope of a component. Hence, a component should only use <strong><code>adapters</code></strong> for data-fetching, have a separate file for complex Business Logic, and only focus on the UI part.</p><pre><code>// components/page1Components/Component1/index.tsx
import businessLogic from "./bl.tsx";
export default function Component2() {
const { state and functions } = businessLogic();
return {
// JSX
}
}
</code></pre>
<p>While the BL file only imports data and returns it:</p><pre><code>// components/page1Components/Component1/bl.tsx
import React, {useState, useEffect} from "react";
import { adapters } from "adapters/path_to_adapter";
export default function Component1Bl(){
const [state, setState] = useState(initialState);
useEffect(() =&gt; {
fetchDataFromAdapter().then(updateState);
}, [])
}
</code></pre>
<p>However, there’s a problem which is common across all complex apps. State Management, and how to share state across distant components. For example, consider the following file structure:</p><pre><code>components
|---page1Components
|--Component1
|---ComponentA
|---page2Component
|--ComponentB
</code></pre>
<p>If some state has to be shared across ComponentA and B in the above example, it will have to be passed through all the intermediate components, and also to any other components who want to interact with the state.</p>
<p>To solve this, their are several solutions which can be used like Redux, Easy-Peasy, and React Context, each of them having their own pros and cons. Generally, React Context should be “good enough” to solve this problem. We store all of the files related to context in <strong><code>contexts</code></strong>.</p>
<h2 id="3-contexts">3. Contexts</h2>
<p>The <strong><code>contexts</code></strong> folder is a bare minimum folder only containing the state which has to be shared across these components. Each page can have several nested contexts, with each context only passing the data forward in a downward direction. But to avoid complexity, it is best to only have a single context file. This structure will look like this:</p><pre><code>contexts
|---page1Context
|---index.tsx (Exports consumers, providers, ...)
|---Context1.tsx (Contains part of the state)
|---Context2.tsx (Contains part of the state)
|---page2Context
|---index.tsx (Simple enough to also have state)
</code></pre>
<p>In the above case, since <code>page1</code> may be a bit more complex, we allow some nested context by passing the child context as a child to the parent. However, generally a single <code>index.tsx</code> file containing state and exporting relevant files should be enough.</p>
<p>I won’t go into the implementation part of React state management libraries since each of them are their own beasts and have their own upsides and downsides. So, I recommend going through the tutorial of whatever you decide to use to learn their best practises.</p>
<p>The context is allowed to import from <strong><code>adapters</code></strong> to fetch and react to external effects. In case of React Context, the providers are imported inside pages to share state across all components, and something like <code>useContext</code> is used inside these <strong><code>components</code></strong> to be able to utilize this data.</p>
<p>Moving on to the final major puzzle-piece, <strong><code>pages</code></strong>.</p>
<h2 id="4-pages">4. Pages</h2>
<p>I want to avoid being biased to a framework for this piece, but in general, having a specific folder for route-level components to be placed is a good practise. </p>
<p>Gatsby &amp; NextJS enforce having all routes in a folder named <strong><code>pages</code></strong>. This is quite a readable way of defining route-level components, and mimicking this in your CRA-generated application would also result in better code readability.</p>
<p>A centralized location for routes also helps you utilize the “Go To File” functionality of most IDEs by jumping to a file by using (Cmd or Ctrl) + Click on an import. </p>
<p>This helps you move through the code quickly and with clarity of what belongs where. It also sets a clear hierarchy of differentiation between <strong><code>pages</code></strong> and <strong><code>components</code></strong>, where a page can import a component to display it and do nothing else, not even Business Logic.</p>
<p>However, it’s possible to import Context Providers inside of your page so the child components can consume it. Or, in the case of NextJS, write some server-side code which can pass data to your components using getServerSideProps or getStaticProps.</p>
<h2 id="5-styles">5. Styles</h2>
<p>Finally, we come to styles. Although my go-to way is to just embed styles inside of the UI by using a CSS-in-JS solution like Styled-Components, it’s sometimes helpful to have a global set of styles in a CSS file. </p>
<p>A plain old CSS file is more shareable across projects, and can also affect the CSS of components which styled-components can’t reach (for example, third-party components).</p>
<p>So, you can store all of these CSS files inside of the <strong><code>styles</code></strong> folder, and import or link to them freely from wherever you wish.</p>
<p>Those were my thoughts. Feel free to email me in case you want to discuss something or have any more inputs on how this can be improved!</p>
<p>For further updates or discussions, you can follow me on Twitter <a href="https://twitter.com/thewritingdev">here</a>.</p>
<p>My last article on freeCodeCamp was written on how you can get started with Deno by building a URL shortener, which <a href="/news/build-a-url-shortener-in-deno/">you can read here</a>.</p>
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
