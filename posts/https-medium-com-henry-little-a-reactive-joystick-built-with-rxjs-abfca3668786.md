---
card: "https://cdn-media-1.freecodecamp.org/images/1*X3xtviyY779db4yRZugTmg.gif"
tags: [JavaScript]
description: by Henri Little - Beyle
author: "Milad E. Fahmy"
title: "How to build a reactive Joystick as a single RxJS Observable stream"
created: "2021-08-15T19:41:13+02:00"
modified: "2021-08-15T19:41:13+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-rxjs tag-functional-programming tag-angular tag-tech ">
<header class="post-full-header">
<h1 class="post-full-title">How to build a reactive Joystick as a single RxJS Observable stream</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*X3xtviyY779db4yRZugTmg.gif 300w,
https://cdn-media-1.freecodecamp.org/images/1*X3xtviyY779db4yRZugTmg.gif 600w,
https://cdn-media-1.freecodecamp.org/images/1*X3xtviyY779db4yRZugTmg.gif 1000w,
https://cdn-media-1.freecodecamp.org/images/1*X3xtviyY779db4yRZugTmg.gif 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*X3xtviyY779db4yRZugTmg.gif" alt="How to build a reactive Joystick as a single RxJS Observable stream">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Henri Little - Beyle</p>
<h1 id="how-to-build-a-reactive-joystick-as-a-single-rxjs-observable-stream">How to build a reactive Joystick as a single RxJS Observable stream</h1>
<p>We are all likely familiar with the concept of a Joystick.</p>
<p>We start holding the handle of the Joystick, we move the handle around, and when we release it, the handle gently goes back to its initial position.</p>
<p>Now, what if we want to build some sort of software component that simulates the behaviour of a Joystick in the browser?</p>
<p>Well, with RxJS this turns out to be pretty simple. And it is also an interesting exercise to prove your Reactive thinking. You can jump directly to the code <a href="https://github.com/EnricoPicci/reactive-joystick" rel="noopener">here</a> if you want, otherwise keep reading and see what we can do.</p>
<h3 id="which-are-the-events-we-are-interested-in">Which are the events we are interested in?</h3>
<p>The behaviour of the Joystick can be seen a series of events combined together in some way.</p>
<p>The first event we are interested in is when the user presses a mouse on the handle (<code>mousedown</code>) - the handle is just the central part of the Joystick image.</p>
<p>If you hold the mouse pressed, then you can move around and you see the handle move accordingly — the <code>mousemove</code> events of the mouse are therefore the second series of events we want to capture.</p>
<p>Last, we need to consider when the user releases the mouse (<code>mouseup</code>) since this is the event that causes the Joystick handle to go back to its initial position.</p>
<figcaption>Relevant events for the Joystick case</figcaption>
</figure>
<p>The whole sequence can be repeated after the handle is released. The mouse is pressed on the handle, then it is moved, then it is released. Again and again.</p>
<p>This repetition can be seen as a stream of events. We can say that the behaviour of a joystick is governed by this stream of events.</p>
<figcaption>The stream of events of a Joystick</figcaption>
</figure>
<p>If we are able to build such stream of events, we are in a good position to reach our objective — that is, to implement a Joystick software component for the browser using RxJS.</p>
<h3 id="the-building-blocks-with-rxjs">The building blocks with RxJS</h3>
<p>The browser actually provides us with the notification of the events we are interested in: the <code>mousedown</code> event on the DOM element representing the handle of the Joystick, and the <code>mousemove</code> and <code>mouseup</code> events at DOM document level.</p>
<p>RxJS, on its side, comes with the function <code>fromEvent</code> that allows us to create an Observable from a browser event.</p>
<figcaption>Create an Observable with `fromEvent` RxJS function</figcaption>
</figure>
<p>Using this mechanism we can create the three streams of events which are going to be the building blocks of our solution: <strong>mouse_DOWN_Obs</strong>, <strong>mouse_MOVE_Obs</strong>, <strong>mouse_UP_Obs</strong>.</p>
<figcaption>The streams of events which are our building blocks</figcaption>
</figure>
<p>But these are just our building blocks. We need to do something with them in order to get what we want: we need to ignore all <code>mousemove</code> events which occur before the first <code>mousedown</code> and then ignore all the <code>mousemove</code> events which occur after the next <code>mouseup</code>. Then we repeat all this again when a new <code>mousedown</code> event occurs. These compose the <strong>“stream of events for the Joystick”</strong><em>.</em></p>
<figcaption>Joystick event stream built from building blocks</figcaption>
</figure>
<h3 id="the-transformation-of-observables-via-composition-of-operators">The transformation of Observables via composition of operators</h3>
<p>Everything starts when the user presses the mouse on the handle of the Joystick, i.e. <strong>mouse_DOWN_Obs</strong>. We can call it the source Observable.</p>
<p>Once we are notified of an event from <strong>mouse_DOWN_Obs</strong> we have to <em>switch</em> and start listening to <strong>mouse_MOVE_Obs.</strong></p>
<figcaption>The first transformation with switchMap</figcaption>
</figure>
<p>It may seem like we have not achieved much, but in fact we are now in a position where we can <em>take</em> the <strong>mouse_MOVE_Obs</strong> notifications <em>until</em> we hear from <strong>mouse_UP_Obs</strong>. At this point we stop just to restart at the next notification from <strong>mouse_DOWN_Obs</strong>.</p>
<figcaption>The second transformation with takeUntil</figcaption>
</figure>
<p>Notice that we apply <code>takeUntil</code> to <strong>mouse_MOVE_Obs</strong>, because this is the Observable we want to complete. If we had applied one level higher, to <strong>mouse_DOWN_Obs</strong>, this is what would have happened:</p>
<p>Just the first sequence of move events would have been notified, and then the stream of events would have been closed down. No more events for the Joystick.</p>
<h3 id="now-is-the-time-of-side-effects">Now is the time of side effects</h3>
<p>We have learned how to build a stream of all the events relevant for a Joystick. To do something useful with this stream, we need to link the events to some sort of action we want to do. More specifically:</p>
<ul>
<li>when we sense a <code>mousemove</code> event we have to change the position of the handle on the browser</li>
<li>when we sense a <code>mouseup</code> event we have to gently move the handle back to its original position, setting some transition style</li>
<li>when we sense a <code>mousedown</code> event we have to reset the transition style</li>
</ul>
<p>But careful. Not all are <code>mousemove</code><strong> </strong>events, not all are <code>mouseup</code><strong> </strong>events, and not all are <code>mousedown</code><strong> </strong>events. Only those which belong to the set of <strong>“relevant events for the Joystick”</strong><em>. </em>For instance, we are not interested in all <code>mousemove</code> events which happen before the Joystick has been activated (pressing the mouse on the handle) or after the Joystick handle has been released.</p>
<figcaption>Where we need side effects</figcaption>
</figure>
<p>Let’s get back to our main track of reasoning. We need to do something at the occurrence of some events. Something that changes the state of the system. In our case, this is the position of the handle on the browser. In <strong>functional<em> </em>programming<em> </em></strong>terms these are called <strong>side effects</strong>, i.e. functions which change the state of the system.</p>
<figcaption>Side effects as functions — Functions as side effects</figcaption>
</figure>
<p>RxJS gives us two ways to implement <strong>side effects</strong>.</p>
<p>The first one is the <code>subscribe</code> method of Observable. The second one is the <code>tap</code> operator, formerly know as <code>do</code>, which <em>“performs a </em><strong>side effect</strong><em> for every emission on the source Observable, but returns an Observable that is identical to the source”</em> — the <strong><em>side effect</em></strong> is determined by the function passed to <code>tap</code> as a parameter. <code>tap</code> is the method we are going to use.</p>
<p>Eventually this is the core of the code that implements our Reactive Joystick</p><pre><code>const handle = document.getElementById("handle");const mouse_DOWN_Obs = rxjs.fromEvent(handle, 'mousedown');const mouse_MOVE_Obs = rxjs.fromEvent(document, 'mousemove');const mouse_UP_Obs = rxjs.fromEvent(document, 'mouseup');</code></pre><pre><code>function activateJoytick() {  mouse_DOWN_Obs.pipe(    rxjs.operators.tap(() =&gt; joystickActivated()),    rxjs.operators.switchMap(() =&gt; mouse_MOVE_Obs.pipe(      rxjs.operators.takeUntil(mouse_UP_Obs.pipe(        rxjs.operators.tap(() =&gt; joystickReleased())      )),    )),    rxjs.operators.tap(event =&gt; showHandleInNewPosition(event))  )  .subscribe();}</code></pre>
<h3 id="example-code">Example code</h3>
<p>You can find the example code <a href="https://github.com/EnricoPicci/reactive-joystick" rel="noopener">here</a>, where you can compare the RxJS implementation with one built using pure JavaScript.</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
