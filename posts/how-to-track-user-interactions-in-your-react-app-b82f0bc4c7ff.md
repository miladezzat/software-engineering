---
card: "https://cdn-media-1.freecodecamp.org/images/1*ZP7MCxvL4o34z5ku4zY_vw.jpeg"
tags: [JavaScript]
description: by Faouzi Oudouh
author: "Milad E. Fahmy"
title: "How to track user interactions in your React app"
created: "2021-08-15T19:47:44+02:00"
modified: "2021-08-15T19:47:44+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-react tag-analytics tag-tech tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">How to track user interactions in your React app</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*ZP7MCxvL4o34z5ku4zY_vw.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*ZP7MCxvL4o34z5ku4zY_vw.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*ZP7MCxvL4o34z5ku4zY_vw.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*ZP7MCxvL4o34z5ku4zY_vw.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*ZP7MCxvL4o34z5ku4zY_vw.jpeg" alt="How to track user interactions in your React app">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Faouzi Oudouh</p>
<h1 id="how-to-track-user-interactions-in-your-react-app">How to track user interactions in your React app</h1>
<figcaption>Credit: <a href="https://www.pexels.com/photo/analytics-text-185576/" rel="noopener" target="_blank" title="">Marketingtuig Digital Creatives</a></figcaption>
</figure>
<p>Worry not about which Analytics provider you need to gather user interaction within your app.</p>
<p>Instead, worry more about how to gather these interactions.</p>
<p>A few months ago, I was involved in an Analytics project within a large E-commerce organization. This organization has a data-driven business where the analytics are more important than anything else.</p>
<p>We were building a Datalayer solution to hold all the user interactions and actions before pushing them to the Analytics provider (for example, Google Tag Manager). We built our DataLayer solution without having React in mind, as the migration to React started later.</p>
<h3 id="react-time-">React Time!</h3>
<p>We started the migration to React progressively, which means React was responsible only for rendering some parts of the platform. And I was responsible for integrating the DataLayer solution we had already built with React Land.</p>
<p>Suddenly, the difficulties started coming up:</p>
<ul>
<li>The solution was jQuery based</li>
<li>It was unpredictable</li>
<li>It was hard to test and maintain</li>
<li>Sharing knowledge with other developers who didn’t have analytics experience was scary!</li>
</ul>
<p>I started looking in the community for ready-to-use solutions that fit our needs. There was just no chance.</p>
<p>And here’s where the idea of <a href="https://github.com/faouzioudouh/react-tracker" rel="noopener">React-Tracker</a> came in.</p>
<p>Why <a href="https://github.com/faouzioudouh/react-tracker" rel="noopener">React-tracker</a>?</p>
<ul>
<li>It’s easy to use, test, and maintain (Redux-like)</li>
<li>It can be used with any Analytics provider</li>
<li>It’s scalable and predictible</li>
<li>It has a minimal API</li>
</ul>
<p>With React-tracker, we were easily able to integrate two Analytics providers (Google Tag manager and Adobe Analytics).</p>
<h3 id="how">How?</h3>
<p>To keep it simple, <em>think of it as Redux</em>.</p>
<ul>
<li>Instantiate your Tracker ~ <em>Store of your events</em></li>
<li>Create your event-listener(s) ~ <em>Reducer</em></li>
<li>Event ~ <em>Action</em></li>
<li>Provide your tracker instance to your Root Component.</li>
<li>React-tracker will <a href="https://reactjs.org/docs/context.html" rel="noopener">magically</a> take care of providing your tracker instance to all your Components.</li>
</ul>
<p>Before instantiating anything, let’s go through each term on the list above and explain it.</p>
<h4 id="what-is-tracker">What is Tracker?</h4>
<p>A Tracker is a bag that holds the tracking-history along with some functions to listen to/dispatch events.</p>
<ul>
<li><code>tracker.on(eventType, callback)</code> the given callback will be called whenever an event with <code>event.type</code> equal to the given <code>eventType</code> is dispatched.</li>
<li><code>tracker.trackEvent(event)</code> is a function that accepts an <code>event</code> and calls all the event-listeners that listen on this <code>event</code>.</li>
<li><code>tracker.getHistory()</code> returns an Array and contains all the tracked events that were saved</li>
</ul>
<h4 id="what-is-an-event">What is an Event?</h4>
<p>An event is a plain object that represents the user interaction, like user click, page view, and purchase.</p>
<p>It should be an object with <code>type</code> and associated <code>data</code> if any. Here’s an example of a <code>PageView</code> event:</p><pre><code>const PageViewEvent = {  type: 'PAGE_VIEW', // Required  data: { // Optional    pageId: '123',    userId: 'UID-123'  }}</code></pre>
<h4 id="what-is-the-event-listener">What is the Event-listener?</h4>
<p>The event-listener is a function that will be called if its <code>eventType</code> matched the type of the dispatched event.</p>
<p><code>eventListener.eventType === event.type</code></p>
<p>Example of an Event-listener:</p><pre><code>const pageViewListener = (event, ) =&gt; {  // For example let's push the received event to our DataLayer.  window.dataLayer.push(event);</code></pre><pre><code>  return event;};</code></pre>
<p>Let’s allow our <code>pageViewListener</code> to listen only on <code>PAGE_VIEW</code> event:</p><pre><code>pageViewListener.eventType = 'PAGE_VIEW';</code></pre>
<p>There are four things to notice here:</p>
<ul>
<li>Returning the event will save it in the trackingHistory. Otherwise it will be ignored :)</li>
<li>If no <code>eventType</code> was specified to the event-listener, it will be called on every event dispatch.</li>
<li><code>eventHistory</code> was provided as a second parameter to help you apply restrictions on your events easily, like tracking a Product-click once. In order to achieve this, you need to have the history of events in your hands.</li>
<li>Pushing our event to <code>window.dataLayer</code> was just an example. You can mainly do anything in this function like calling <code>GTM</code> directly or <code>Facebook Pixel</code></li>
</ul>
<h3 id="time-to-combine-everything">Time to combine everything</h3>
<p>First things first:</p>
<h4 id="1-instantiate-our-hero-tracker-">1. Instantiate our hero <code>Tracker:</code></h4><pre><code>import { Tracker } from 'react-tracker';</code></pre><pre><code>const tracker = new Tracker();</code></pre>
<p>That’s it!</p>
<p>Now we have our <code>Tracker</code> but with no event-listener :-(</p>
<p>There are two ways to add event-listeners to your <code>Tracker</code> :</p>
<ul>
<li>On instantiating:</li>
</ul><pre><code>const anOtherTracker = new Tracker([  pageViewListener,  productClickListener,  ...]);</code></pre>
<ul>
<li>Or you can add the event-listener after instantiating your <code>Tracker</code> using <code>on</code>:</li>
</ul><pre><code>const anOtherTracker = new Tracker();</code></pre><pre><code>tracker.on('PAGE_VIEW', pageViewListener);</code></pre>
<h4 id="2-create-a-page-view-event-listener-">2. Create a page view event-listener :</h4>
<p>I want my event-listener to push the received <code>PAGE_VIEW</code> event directly to my <code>dataLayer.</code></p><pre><code>const pageViewListener = (event, trackingHistory) {</code></pre><pre><code>  window.dataLayer.push(event);</code></pre><pre><code>};</code></pre>
<p>Let our <code>tracker</code> know about the <code>pageViewListener</code> :</p><pre><code>tracker.on('PAGE_VIEW', pageViewListener);</code></pre>
<h4 id="3-create-event-creator-">3. Create Event-creator :</h4>
<p>Event-creator is just a function that returns an event object:</p><pre><code>const pageViewEvent = (pageId, userId) =&gt; ({  type: 'PAGE_VIEW',  data: {    pageId,    userId  }});</code></pre>
<p><strong>Our Tracker is well configured now.</strong></p>
<h3 id="introducing-our-tracker-to-react">Introducing our <code>tracker</code> to React</h3>
<figcaption>Credit: <a href="https://unsplash.com/photos/sHzMcXkJNrw" rel="noopener" target="_blank" title="">rawpixel.com</a></figcaption>
</figure>
<h4 id="4-provide-our-tracker-to-the-root-component-">4. Provide our <code>tracker</code> to the Root Component:</h4><pre><code>import React from 'react;import ReactDOM from 'react-dom';import { TrackerProvider } from 'react-tracker'</code></pre><pre><code>import RootComponent from '../RootComponent';</code></pre><pre><code>const RootComponentWithTracking = (  &lt;TrackerProvider tracker={tracker}&gt;    &lt;RootComponent /&gt;  &lt;/TrackerProvider&gt;);</code></pre><pre><code>const domElement = document.getElementById('root');</code></pre><pre><code>ReactDOM.render(&lt;RootComponentWithTracking /&gt;, domElement);</code></pre>
<p>By providing our <code>tracker</code> to the root component, it will be <a href="https://reactjs.org/docs/context.html" rel="noopener">magically</a> available for all the sub-components.</p>
<p>So now, since we have our <code>tracker</code> available, let’s use it to track the <code>PAGE_VIEW</code> event on the <code>RootComponent</code> mount.</p>
<h4 id="4-track-page-view-event-">4. Track <code>Page View Event.</code></h4><pre><code>import React from 'react';import { withTracking } from 'react-tracker';// We created this function earlier at (3.)import { pageViewEvent} from '../tracking/events';</code></pre><pre><code>class RootComponent extends React.Component {  componentDidMount() {    this.props.trackPageView(this.props.pageId, this.props.userId)  }</code></pre><pre><code>  render() {    return (&lt;h1&gt; My App is awesome &lt;/h1&gt;)  }};</code></pre><pre><code>const mapTrackingToProps = trackEvent =&gt; ({  trackPageView: (pageId, userId) =&gt;     trackEvent(pageViewEvent(pageId, userId))});</code></pre><pre><code>export default withTracking(mapTrackingToProps)(RootComponent);</code></pre>
<p><code>withTracking</code> HOC will take care of providing us <code>trackEvent</code> from our <code>tracker</code> so we can use it to track the <code>pageView</code> event.</p>
<p><code>mapTrackingToProps</code> will merge the returned object with the <code>RootComponent</code> ’s props, which means the <code>trackPageView</code> will be available as a prop within <code>RootComponent.</code></p>
<p><strong>That’s it — you’re done ;)</strong></p>
<h4 id="5-demo">5. Demo</h4>
<p>Please refer to this <a href="https://faouzioudouh.github.io/react-tracker/" rel="noopener">demo </a>and to <a href="https://github.com/faouzioudouh/react-tracker" rel="noopener">GitHub</a> for in-depth documentation and a better way to organize your tracking files.</p>
<h3 id="give-it-a-try-">Give it a try!</h3>
<p><a href="https://github.com/faouzioudouh/react-tracker" rel="noopener">React-tracker</a> was built to facilitate the integration of Analytics tools as much as possible, by proving a minimal API and easy integration with your react app.</p>
<h3 id="thanks">Thanks</h3>
<p>Thank you <a href="undefined" rel="noopener">doha faridi</a>, <a href="undefined" rel="noopener">AbdelAli Eramli</a> and <a href="undefined" rel="noopener">khalid benrafik</a> for your helpful feedback.</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
