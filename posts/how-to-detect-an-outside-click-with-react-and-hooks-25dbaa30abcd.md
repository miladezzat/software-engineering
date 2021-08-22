---
card: "https://cdn-media-1.freecodecamp.org/images/1*xJYzPKhZBDlYsR2nwkbvPQ.jpeg"
tags: [JavaScript]
description: by Andrei Cacio
author: "Milad E. Fahmy"
title: "How to detect an outside click with React and Hooks"
created: "2021-08-15T19:36:00+02:00"
modified: "2021-08-15T19:36:00+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-react tag-tech tag-programming tag-ux ">
<header class="post-full-header">
<h1 class="post-full-title">How to detect an outside click with React and Hooks</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*xJYzPKhZBDlYsR2nwkbvPQ.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*xJYzPKhZBDlYsR2nwkbvPQ.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*xJYzPKhZBDlYsR2nwkbvPQ.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*xJYzPKhZBDlYsR2nwkbvPQ.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*xJYzPKhZBDlYsR2nwkbvPQ.jpeg" alt="How to detect an outside click with React and Hooks">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Andrei Cacio</p>
<h1 id="how-to-detect-an-outside-click-with-react-and-hooks">How to detect an outside click with React and Hooks</h1>
<figcaption>Photo by <a href="https://unsplash.com/photos/hp74PknYyXE?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText" rel="noopener" target="_blank" title="">Alex Block</a> on <a href="https://unsplash.com/search/photos/window?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText" rel="noopener" target="_blank" title="">Unsplash</a></figcaption>
</figure>
<h3 id="what-does-outside-click-mean">What does “Outside Click” mean?</h3>
<p>You can think of it as the “anti-button”. An outside click is a way to know if the user clicks everything BUT a specific component. You may have seen this behavior when opening a dropdown menu or a dropdown list and clicking outside of it to close it.</p>
<p>There are all sorts of other use cases for such a feature:</p>
<ul>
<li>when closing dropdown lists</li>
<li>when closing modal windows</li>
<li>when transitioning in and out of edit mode for editable elements</li>
<li>closing</li>
<li>and many more…</li>
</ul>
<p>Now let’s see how we can a write a generic and reusable React component which will incorporate this behavior.</p>
<h3 id="how-it-will-look-like">How it will look like</h3>
<p>A happy flow should look like this:</p>
<h3 id="component-structure">Component structure</h3>
<p>For this component to work we will need to attach a click event handler on the document itself. This will help us detect when we are clicking anywhere on the page. Then we will need to check if our clicked target differs from our wrapped element. So a basic structure will look like this:</p>
<p><em>For the first example, we will start coding using the React Class style and then refactor it with the new Hooks API.</em></p>
<p>We implemented two lifecycle functions:</p>
<ul>
<li><strong>componentDidMount()</strong>: will attach the event listener</li>
<li><strong>componentWillUnmount()</strong>: will clean up the click handler before the component will get destroyed</li>
</ul>
<p>and then we render whatever that components wrap over. For our first example above it will render the &lt;span&gt;.</p>
<h3 id="the-clickoutside-condition">The “ClickOutside” condition</h3>
<p>Now we need to check if the user clicks outside of the wrapped child. One <em>naive</em> solution is to compare the target element (the element that we click) with our child’s node. But, this will work only if we have a simple (single level) node as a child. If our wrapped child has more sub-nodes, then this solution will fail.</p>
<p>Luckily there is a method called <a href="https://developer.mozilla.org/en/docs/Web/API/Node/contains" rel="noopener"><strong>.contains()</strong></a> which tells us if a node is a child of a given node. The next step will be to gain access to our child’s node. To achieve this we will use <a href="https://reactjs.org/docs/refs-and-the-dom.html" rel="noopener">React Refs</a>.</p>
<p>Refs are React’s way of giving us access to the raw node object. We will also use Reacts API for handling the <strong>this.props.children </strong>components. We need this API because we will inject our created ref to our wrapped child. Having this in mind our component will look like so:</p>
<p>Perfect, this should work as expected. At least for our happy flow (one wrapped child). If we intend to wrap more than one node, we need to make some adjustments:</p>
<ul>
<li>we need to have an array of refs (as many as our wrapped children)</li>
<li>we need to use <strong>React.Children.map </strong>to clone each child and inject the associated ref from our private array of refs</li>
</ul>
<p>This should do just fine. Now let’s refactor this using Hooks!</p>
<h3 id="hooks">Hooks</h3>
<p>React 16.8 introduced a new API called <a href="https://reactjs.org/docs/hooks-intro.html" rel="noopener">Hooks</a>. With Hooks we can write less code and get a smaller footprint on our codebase. Also, Hooks take advantage of functions which are first class citizens in JavaScript. If you are familiar with <a href="https://hackernoon.com/react-stateless-functional-components-nine-wins-you-might-have-overlooked-997b0d933dbc" rel="noopener">stateless functional components</a> in React you are halfway there. Our initial refactor will look like so:</p>
<p>Up until now, we are still using the “old” React API to declare a simple stateless functional component. However, we still need those lifecycle functions to attach our handler on the <strong>document </strong>node.</p>
<p>Here is where <a href="https://reactjs.org/docs/hooks-effect.html" rel="noopener"><strong>Effect hook</strong></a><strong> </strong>comes in. The Effect hook will replace our “<strong>componentDidMount</strong>” and “<strong>componentWillUnmount</strong>” methods. The Effect Hook will be called right after the components renders so it will help us attach our desired handler on time. Also for the cleanup part, if the Effect hook returns a function that function will be called right before the component will be unmounted. So it is just the right time to do some cleanup. In the next refactor, things will become a bit clearer.</p>
<p>This is the final form of our functional component using the Effect Hook. If you want to see both examples in action you can run them below. (<em>You can default export either the Class component or the functional component and the app will behave the same.</em>)</p>
<h3 id="conclusion">Conclusion</h3>
<p>Even though the click outside behavior is a widely used feature, it may not be so straightforward to implement in React. With this example, I took the liberty to experiment a bit with React Hooks and build the solution in two ways to compare the two approaches. I am a big fan of functional components, and now with the help of Hooks, we can take them to the next level.</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
