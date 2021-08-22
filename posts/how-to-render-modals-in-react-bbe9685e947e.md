---
card: "https://cdn-media-1.freecodecamp.org/images/1*u_CfjHWpbDQH9ayWj8pwKg.png"
tags: [JavaScript]
description: Modals can be a tricky topic in React because of the way Reac
author: "Milad E. Fahmy"
title: "How to render modals in React"
created: "2021-08-15T19:39:12+02:00"
modified: "2021-08-15T19:39:12+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-react tag-software-development tag-tech tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">How to render modals in React</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*u_CfjHWpbDQH9ayWj8pwKg.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*u_CfjHWpbDQH9ayWj8pwKg.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*u_CfjHWpbDQH9ayWj8pwKg.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*u_CfjHWpbDQH9ayWj8pwKg.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*u_CfjHWpbDQH9ayWj8pwKg.png" alt="How to render modals in React">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Modals can be a tricky topic in React because of the way React structures the DOM. If you’re familiar with the basics of React, you will know that the entire App is a component, usually called <code>&lt;App/&gt;</code> that gets gets appended as a child <code>&lt;div&gt;</code> called #root. The index.html file looks like this:</p>
<figcaption>create-react-app’s public/index.html file</figcaption>
</figure>
<p>Once the <code>&lt;App/&gt;</code> Component gets rendered to the DOM, the actual <code>&lt;div&gt;</code> element with id “#root” gets the entire React App rendered inside it.</p>
<p>Consequently, it’s quite common that React App Components get very deeply nested. We are talking dozens of levels deep, and often more. So if one of those deeply nested Components needs to show a modal, it’s going to face some serious CSS issues.</p>
<p>Modals put an overlay on the screen, and therefore take a higher visual precedence over <em>all </em>other elements. If you had to put it in z-index terms, it would need to be the highest number of all the elements on screen. But since it is so deeply nested, the parent elements way up the tree take CSS precedence.</p>
<p>Rather than touching the CSS which may be finely tuned, and so fiddling there could break the App, we need to find a way to render to the DOM — but <em>outside of the deep nesting</em>.</p>
<h3 id="solution-react-portals"><strong>Solution — React Portals</strong></h3>
<p>One strategy is to use ReactDOM portals, and put the modal in a div that is a sibling component to the div with id “#root”. By doing so, the CSS styles applied to the modal’s div wrapper will apply only in relation to its sibling (the “#root” div), and that will not break the CSS styling of “#root”.</p>
<p>To do so we need to use the <code>createPortal()</code> method of ReactDOM. A portal is effectively such a sibling div, that bends the rule that <em>all</em> React components must be descendants of <code>&lt;div id=”root"&gt;</code>. To do so we need to do the following:</p>
<ol>
<li><strong>In index.html, inside the </strong><code>&lt;bod<strong>y&gt;</strong></code> tag:</li>
</ol><pre><code class="language-html">&lt;body&gt;
&lt;noscript&gt;
You need to enable JavaScript to run this app.
&lt;/noscript&gt;
&lt;div id="root"&gt;&lt;/div&gt;
&lt;div id="modal"&gt;&lt;/div&gt; .   //ADD THIS
&lt;/body&gt;
&lt;/html&gt;</code></pre>
<p><strong>2. Create a Modal.js Component (</strong>classNames are from semantic-UI<strong>):</strong></p><pre><code class="language-js">import React from "react";
import ReactDOM from "react-dom";
const JSX_MODAL = (
&lt;div className="ui dimmer modals visible active"&gt;
&lt;div className="ui standard modal visible active"&gt;
THIS IS SOME TEXT IN THE MODAL // add some UI features here
&lt;/div&gt;
&lt;/div&gt;
);
function Modal(props) {
return ReactDOM.createPortal(JSX_MODAL, document.querySelector("#modal"));
}
export default Modal;</code></pre>
<p>You will see that <code>createPortal</code> takes two arguments: some JSX that gets rendered, and similar to <code>ReactDOM.render</code>, the target element under which the JSX gets rendered.</p>
<p>If you render the Component and navigate to it, you should find it shows up quite well. You now need to add the appropriate <code>onClick() </code>handler to handle click events inside the inner modal UI as well as to navigate away from the modal if the user clicks outside the inner modal UI.</p>
<p>You’d want to do this by listening for clicks in the right area and then stopping propagation so that the right behaviors arise depending on the region where the user clicks.</p>
<h3 id="reusability"><strong>Reusability</strong></h3>
<p>The above example is extremely basic, and is not intended to be a ready to use code snippet. Rather, this is a solution to tackling modals. You should absolutely customise the component according to your needs. Use the React principles of reusability to ensure that you’re not hard coding data in the Modal, and pass down the content and even smaller widgets as needed.</p>
<p>For example, in one of my projects, I present a modal when the user is going to delete something from the database. So my component is, say, called <code>&lt;DeleteThis /&gt;</code>. It renders <code>&lt;Modal /&gt;</code>, which is the overlay that dims the underlying <code>&lt;DeleteThis /&gt;</code> screen.</p><pre><code class="language-js">render() {
return (
&lt;div&gt;
&lt;Modal
content={this.renderContentProp()}
header="Delete this?"
actions={this.renderActionButtons()}
onDismiss={this.onDismiss}
/&gt;
&lt;/div&gt;
);
}
renderActionButtons = () =&gt; {
//return JSX that renders action buttons...
return (
&lt;div&gt;
&lt;div className="ui button primary"&gt;Delete&lt;/div&gt;
&lt;div className="ui button"&gt;Cancel&lt;/div&gt;
&lt;/div&gt;
);
};</code></pre>
<p>Within <code>&lt;Modal</code> /&gt; is an inner component c<code>alled &lt;Inne</code>rModal /&gt; and this has the actual interactive component, with headers, content and text.</p>
<p>So my <code>&lt;DeleteThis</code> /&gt; component creates props to pass down<code> into &lt;</code>;Modal /&gt; which in turn gets drille<code>d down into &lt;</code>;InnerModal /&gt;, and so the<code> render method</code> in &lt;DeleteThis /&gt; looks like:</p>
<p>…with the actual Modal Component looking like:</p><pre><code class="language-js">import React from "react";
import ReactDOM from "react-dom";
import ModalInner from './modal-inner'
function Modal(props) {
return ReactDOM
.createPortal(
&lt;ModalInner {...props} /&gt;,
document.querySelector("#modal")                      //target DOM element
);
}
export default Modal;</code></pre>
<p>and now, you’re finally able to render:</p>
<p>Voilà, there you have it! Modals, with React Portal! Hope you enjoyed this!</p>
<p>And hope it saved you some time…</p>
<p>If you would like to learn more about my journey into code, check out <a href="http://podcast.freecodecamp.org/53-zubin-pratap-from-lawyer-to-developer">episode 53</a> of the <a href="http://podcast.freecodecamp.org/">freeCodeCamp podcast</a>, where Quincy (founder of freeCodeCamp) and I share our experiences as career changers that may help you on your journey. You can also access the podcast on <a href="https://itunes.apple.com/au/podcast/ep-53-zubin-pratap-from-lawyer-to-developer/id1313660749?i=1000431046274&amp;mt=2">iTunes</a>, <a href="https://www.stitcher.com/podcast/freecodecamp-podcast/e/59201373?autoplay=true">Stitcher</a>, and <a href="https://open.spotify.com/episode/4lG0RGpzriG5vXRMgza05C">Spotify</a>.</p>
<p>I will also hold a few AMAs and webinars in the coming months. If this is of interest to you please let me know by going <a href="http://www.matchfitmastery.com/">here</a>. And of course, you can also Tweet me at <a href="https://twitter.com/zubinpratap">@ZubinPratap</a>.</p>
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
