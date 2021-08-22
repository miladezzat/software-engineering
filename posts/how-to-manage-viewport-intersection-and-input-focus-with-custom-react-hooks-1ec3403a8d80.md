---
card: "https://cdn-media-1.freecodecamp.org/images/1*itzX4RFL7kMtNv5UkvC_bA.png"
tags: [JavaScript]
description: by Dane David
author: "Milad E. Fahmy"
title: "How to manage viewport intersection and input focus with custom React Hooks"
created: "2021-08-15T19:34:49+02:00"
modified: "2021-08-15T19:34:49+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-react tag-ux tag-tech tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">How to manage viewport intersection and input focus with custom React Hooks</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*itzX4RFL7kMtNv5UkvC_bA.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*itzX4RFL7kMtNv5UkvC_bA.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*itzX4RFL7kMtNv5UkvC_bA.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*itzX4RFL7kMtNv5UkvC_bA.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*itzX4RFL7kMtNv5UkvC_bA.png" alt="How to manage viewport intersection and input focus with custom React Hooks">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Dane David</p>
<h1 id="how-to-manage-viewport-intersection-and-input-focus-with-custom-react-hooks">How to manage viewport intersection and input focus with custom React Hooks</h1>
<figcaption>package.json of the project… closely resembles that of a project created using create-react-app</figcaption>
</figure>
<p><a href="https://reactjs.org/docs/hooks-intro.html" rel="noopener">React Hooks</a> have been here for a while, and there are many packages, recipes and discussions going on about the same. This article goes through a similar path. It explains through two custom hook implementations to show how well code can be reused. There may be libraries or gists that perform the exact (or maybe improved) functionality that this article explains. It always helps to write code tailored for your needs, code that you can reason about.</p>
<p>This article assumes basic understanding and knowledge of React and React hooks. If not, you can read the docs and find out more about the React Hooks API.</p>
<h4 id="the-setup">The Setup</h4>
<p>Instead of being revealed at the end, we can first take a look at what functionality we’re trying to build. The live version of what we’re about to build is hosted here: <a href="https://danedavid.github.io/use-focus/" rel="noopener">https://danedavid.github.io/use-focus</a>.</p>
<p>The app consists of a horizontal list of React components that can be scrolled through. Each component may be different or the same ( here, two different types of components are used, <em>only</em> to show that code can be reused across components ). The one thing they all have in common: an input field.</p>
<figcaption>The element in the viewport is always the active element ( highlighted in green ) and has focus.</figcaption>
</figure>
<p><strong>Our Goal</strong>: Always make the element inside the viewport the “active” element. Give focus to the input field inside that component, throughout scrolling.</p>
<p>We can manage an <code>activeElement</code> state inside our root component, which stores an ID corresponding to the element active at any given time. The code for the root component is then:</p>
<p>Components <code>NumberInputFormElement</code> and <code>TextInputFormElement</code> are very similar components. The first one renders an <code>input[type="number"]</code>. While the latter renders a text input field. That’s the only difference.</p>
<h4 id="useactiveonintersect">useActiveOnIntersect</h4>
<p>The first hook to be added is the one that will set the active element once the element reaches the viewport. That is, the hook <code>useActiveOnIntersect</code> must call <code>setActiveElement</code> passed from the parent, once the element is on the viewport. There is a well-known browser API for the same: <code>window.IntersectionObserver</code>. If you’re not familiar, I suggest you read more about it <a href="https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API" rel="noopener">here</a>.</p>
<p>The hook must basically create an instance of <code>IntersectionObserver</code> and listen for when it comes into view. We have given an <code>id=intersector</code> attribute for the outermost <code>div</code>. This <code>div</code> will act as the root element for IntersectionObserver. The element must listen to when it is totally (or at least 95%) inside this root element. We use the <code>useEffect</code> hook for registering the IntersectionObserver instance. And pass a callback function that invokes <code>setActiveElement</code> on the intersection ( in our case, when the intersection ratio is greater than 95% ). The code for <code>useActiveOnIntersect</code> is given below:</p>
<p>The hook does what it’s supposed to do: register an <code>observer</code> instance that listens for intersection with the root element, given in the options as <code>document.querySelector('#intersector')</code>, and invoke <code>setActiveElement</code> if the element is intersecting. <code>elementRef</code> is the React ref pointing to the DOM container element.</p>
<p>How does <code>setActiveElement</code> know <strong>which</strong> element is the active one? We’ll pass it from inside the component when we call this hook:</p><pre><code>useActiveOnIntersect(() =&gt; setActiveElement(id), containerEl);</code></pre>
<p>Here, <code>id</code> is the value to be set as the <code>activeElement</code> in <code>App</code> component. <code>containerEl</code> is the React ref referencing the input field’s container.</p>
<h4 id="usefocusonactive">useFocusOnActive</h4>
<p>Now that we are sure that <code>activeElement</code> always points to the element that is inside the viewport ( root element ) at any given time, we need to make sure that the input field inside the component gets focus. Again, we use the <code>useEffect</code> hook for focusing the input field once it is active, and the cleanup function blurs the input field once it is not the active element anymore. The code is concise and straightforward:</p>
<p><code>inputRef</code> is the React ref pointing to the input field, and <code>active</code> is the active state of the containing element.</p>
<h4 id="conclusion">Conclusion</h4>
<p>The code for a component that uses both these hooks is given below:</p>
<p>We have used <code>useRef</code> hook to create refs for container and input elements and pass it on to their respective hooks. The functionality can even be written inside a single hook. The reason behind writing two separate hooks is because each represents a different effect.</p>
<p>The complete code can be found here: <a href="https://github.com/danedavid/use-focus" rel="noopener">https://github.com/danedavid/use-focus</a>.</p>
<p>Hope this article was helpful &amp; short! Go ahead and write your own custom React hook now!</p>
<p>If you liked the article, hit the clap button below. You can also follow me on medium or <a href="https://twitter.com/this_dane" rel="noopener">twitter</a> for more!!</p>
<p>Happy coding…!</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
