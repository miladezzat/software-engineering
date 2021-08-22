---
card: "https://cdn-media-1.freecodecamp.org/images/1*o7WmwGkLVR0dVQUYqfSBeg.jpeg"
tags: [Tech]
description: by Ryan Harris
author: "Milad E. Fahmy"
title: "What the heck is JSX and why you should use it to build your React apps"
created: "2021-08-15T19:38:49+02:00"
modified: "2021-08-15T19:38:49+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-tech tag-programming tag-startup tag-javascript tag-react ">
<header class="post-full-header">
<h1 class="post-full-title">What the heck is JSX and why you should use it to build your React apps</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*o7WmwGkLVR0dVQUYqfSBeg.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*o7WmwGkLVR0dVQUYqfSBeg.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*o7WmwGkLVR0dVQUYqfSBeg.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*o7WmwGkLVR0dVQUYqfSBeg.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*o7WmwGkLVR0dVQUYqfSBeg.jpeg" alt="What the heck is JSX and why you should use it to build your React apps">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Ryan Harris</p>
<h1 id="what-the-heck-is-jsx-and-why-you-should-use-it-to-build-your-react-apps">What the heck is JSX and why you should use it to build your React apps</h1>
<figcaption>Image source <a href="https://unsplash.com/@nesabymakers" rel="noopener" target="_blank" title="">NESA by Makers</a></figcaption>
</figure>
<p>As developers, we use a variety of tools and open source packages to make our jobs easier. Some of them are so widely used throughout the community that they seem native to JavaScript. But, they’re not, and they can <strong>fundamentally change how you write code</strong> on a daily basis.</p>
<p>One of these technologies that you are probably using already is JSX - <strong>a XML like syntax extension for JavaScript</strong>. Created by the team at Facebook, it is intended to simplify the developer experience. As the spec says, the rationale for creating JSX was:</p>
<blockquote>“…to define a concise and familiar syntax for defining tree structures with attributes.” ~ <a href="https://facebook.github.io/jsx/" rel="noopener">JSX Spec</a></blockquote>
<p>Now, you’re probably saying to yourself, “Hey, Ryan, this sounds great, but <strong>get to the code already</strong>”, so here’s our first example.</p><pre><code>const helloWorld = &lt;h1&gt;Hello, World!&lt;/h1&gt;;</code></pre>
<p>And that’s it!</p>
<p>The code snippet above looks familiar, but have you ever stopped to think about its power? JSX makes it so we can <strong>pass around tree structures composed of HTML or React elements</strong> as if they were standard JavaScript values.</p>
<p>While you don’t have to use JSX when writing React (<a href="https://github.com/babel/babel/tree/master/packages/babel-plugin-syntax-jsx" rel="noopener">or use React in order to try JSX</a>), there’s no denying it is an important part of the React ecosystem, so let’s dive in and see what’s going on under the hood.</p>
<h4 id="getting-started-with-jsx">Getting started with JSX</h4>
<p>The first thing to note when using JSX syntax is that React must be in scope. This is due to how it gets compiled. Take this component for example:</p><pre><code>function Hello() {  return &lt;h1&gt;Hello, World!&lt;/h1&gt;}</code></pre>
<p>Behind the scenes, each element rendered by the <code>Hello</code> component is transpiled into to a <code>React.createElement</code> call.</p>
<p>In this case:</p><pre><code>function Hello() {  return React.createElement("h1", {}, "Hello, World!")}</code></pre>
<figcaption>Image source <a href="https://unsplash.com/@rawpixel" rel="noopener" target="_blank" title="">rawpixel</a></figcaption>
</figure>
<p>The same is true for nested elements. The two examples below would ultimately render the same markup.</p><pre><code>// Example 1: Using JSX syntaxfunction Nav() {  return (    &lt;ul&gt;      &lt;li&gt;Home&lt;/li&gt;      &lt;li&gt;About&lt;/li&gt;      &lt;li&gt;Portfolio&lt;/li&gt;      &lt;li&gt;Contact&lt;/li&gt;    &lt;/ul&gt;  );}</code></pre><pre><code>// Example 2: Not using JSX syntaxfunction Nav() {  return (    React.createElement(      "ul",      {},      React.createElement("li", null, "Home"),      React.createElement("li", null, "About"),      React.createElement("li", null, "Portfolio"),      React.createElement("li", null, "Contact")    )  );}</code></pre>
<h4 id="react-createelement">React.createElement</h4>
<p>When React creates elements, it calls this method, which takes three arguments.</p>
<ol>
<li>The element name</li>
<li>An object representing the element’s props</li>
<li>An array of the element’s children</li>
</ol>
<p>One thing to note here is that React interprets lowercase elements as HTML and Pascal case (ex. ThisIsPascalCase) elements as custom components. Because of this, the following examples would be interpreted differently.</p><pre><code>// 1. HTML elementReact.createElement("div", null, "Some content text here")</code></pre><pre><code>// 2. React elementReact.createElement(Div, null, "Some content text here")</code></pre>
<p>The first example would generate a <code>&lt;d</code>iv&gt; with the s<code>tring "Some content text</code> here" as its child. However, the second version would throw an error (unless, of course, a custom comp<code>onent &amp;</code>lt;Div /&gt; was in sco<code>pe) bec</code>ause &lt;Div /&gt; is undefined.</p>
<h4 id="props-in-jsx">Props in JSX</h4>
<p>When working in React, your components often render children and need to pass them data in order for the children to render properly. These are called props.</p>
<p>I like to think of React components as a group of friends. And what do friends do? They <a href="https://www.urbandictionary.com/define.php?term=props" rel="noopener">give each other props</a>. Thankfully, JSX offers us a number of ways to do that.</p><pre><code>// 1. Props defaulted to true&lt;User loggedIn /&gt;</code></pre><pre><code>// 2. String literals&lt;User name="Jon Johnson" /&gt;</code></pre><pre><code>// 3. JavaScript expressions&lt;User balance={5 + 5 + 10} /&gt;</code></pre><pre><code>// 4. Spread attributes&lt;User preferences={...this.state} /&gt;</code></pre>
<p>But beware! You cannot pass if statements or for loops as props because they are <a href="https://dev.to/promhize/javascript-in-depth-all-you-need-to-know-about-expressions-statements-and-expression-statements-5k2" rel="noopener">statements, not expressions</a>.</p>
<figcaption>Image source <a href="https://unsplash.com/@ikukevk" rel="noopener" target="_blank" title="">Kevin Ku</a></figcaption>
</figure>
<h4 id="children-in-jsx">Children in JSX</h4>
<p>As you are building your app, you eventually start having components render children. And then those components sometimes have to render children. And so on and so forth.</p>
<p>Since JSX is meant to make it easy for us to reason about tree-like structures of elements, it makes all of this very easy. Basically, whatever elements a component returns become its children.</p>
<p>There are four ways to render child elements using JSX:</p>
<h4 id="strings">Strings</h4>
<p>This is the simplest example of JSX children. In the case below, React creates a <code>&lt;</code>h1&gt; HTML element with one child. The child, however, is not another HTML element, just a simple string.</p><pre><code>function AlertBanner() {  return (    &lt;h1&gt;Your bill is due in 2 days&lt;/h1&gt;  )}</code></pre>
<h4 id="jsx-elements"><strong>JSX Elements</strong></h4>
<p>This is probably the use case that new React developers would be most familiar with. In the component below, we’re returning an HTML child (the <code>&lt;head</code>er&gt;), which has two children of it<code>s own &amp;</code>lt;Na<code>v /&gt; and &amp;l</code>t;ProfilePic /&gt; both of which are custom defined JSX elements.</p><pre><code>function Header(props) {  return (    &lt;header&gt;      &lt;Nav /&gt;      &lt;ProfilePic /&gt;    &lt;/header&gt;  )}</code></pre>
<h4 id="expressions"><strong>Expressions</strong></h4>
<p>Expressions allow us to easily render elements in our UI that are the result of a JavaScript computation. A simple example of this would be basic addition.</p>
<p>Say we have a component called <code>&lt;BillFooter</code> /&gt; that renders information about a bill or receipt. Let’s assume it takes one prop c<code>alled</code> total that represents the pre-tax cost and another<code> prop t</code>axRate, which represents the applicable tax rate.</p>
<p>Using expressions, we can easily render out some useful information for our users!</p><pre><code>function BillFooter(props) {  return (    &lt;div&gt;      &lt;h5&gt;Tax: {props.total * props.taxRate}&lt;/h5&gt;      &lt;h5&gt;Total: {props.total + props.total * props.taxRate}&lt;/h5&gt;    &lt;/div&gt;  );}</code></pre>
<h4 id="functions"><strong>Functions</strong></h4>
<p>With functions, we can programmatically create elements and structures, which React will then render for us. This makes it easy to create multiple instances of a component or render repeated UI elements.</p>
<p>As an example, let’s use JavaScript’s <code>.map()</code> function to create a navigation bar.</p><pre><code>// Array of page informationconst pages = [  {    id: 1,    text: "Home",    link: "/"  },  {    id: 2,    text: "Portfolio",    link: "/portfolio"  },  {    id: 3,    text: "Contact",    link: "/contact"  }];// Renders a &lt;ul&gt; with programmatically created &lt;li&gt; childrenfunction Nav() {  return (    &lt;ul&gt;      {pages.map(page =&gt; {        return (          &lt;li key={page.id}&gt;            &lt;a href={page.link}&gt;{page.text}&lt;/a&gt;          &lt;/li&gt;        );      })}    &lt;/ul&gt;  );}</code></pre>
<p>Now, if we want to add a new page to our site, all we need to do is add a new object to the <code>pages</code> array and React will take care of the rest!</p>
<p><strong>Take note of the </strong><code>key</code><strong> prop</strong>. Our function returns an array of sibling elements, in this case <code>&lt;</code>li&gt;s, and React needs a way to keep track of which mounts, unmounts or updates. To do that, it relies on this unique identifier for each element.</p>
<h4 id="use-the-tools-">Use the tools!</h4>
<figcaption>Image source <a href="https://unsplash.com/@barnimages" rel="noopener" target="_blank" title="">Barn Images</a></figcaption>
</figure>
<p>Sure, you can write React applications without JSX, but I’m not really sure why you’d want to.</p>
<p>The ability JSX gives us to pass around elements in JavaScript like they were first-class citizen lends itself well to working with the rest of the React ecosystem. So well, in fact, you may have been writing it every day and not even known it.</p>
<p>Bottom line: just use JSX. You’ll be happy you did.</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
