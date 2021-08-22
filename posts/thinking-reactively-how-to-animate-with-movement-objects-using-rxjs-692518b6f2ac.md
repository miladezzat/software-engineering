---
card: "https://cdn-media-1.freecodecamp.org/images/1*a3UqVMQj_k0k0gBUMRkbng.png"
tags: [JavaScript]
description: "These days, many software systems have to deal with asynchron"
author: "Milad E. Fahmy"
title: "How to think reactively and animate moving objects using RxJs"
created: "2021-08-16T11:44:33+02:00"
modified: "2021-08-16T11:44:33+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-tech tag-functional-programming tag-programming tag-technology ">
<header class="post-full-header">
<h1 class="post-full-title">How to think reactively and animate moving objects using RxJs</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*a3UqVMQj_k0k0gBUMRkbng.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*a3UqVMQj_k0k0gBUMRkbng.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*a3UqVMQj_k0k0gBUMRkbng.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*a3UqVMQj_k0k0gBUMRkbng.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*a3UqVMQj_k0k0gBUMRkbng.png" alt="How to think reactively and animate moving objects using RxJs">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
let t0 = Date.now();
let t1: number;
return Observable.timer(0, frameApproximateLenght)
.do(() =&gt; t1 = Date.now())
.map(() =&gt; t1 - t0)
.tap(() =&gt; t0 = t1)
.share();
}
.take(1)
.map(dynamics =&gt; dynamics.vel &gt; 0 ? 1 : -1)</code></pre><p><strong><em>directionX</em></strong> is an observable which emits only one event. The value emitted is 1 if the velocity is positive, -1 otherwise.</p><p>So, when MobileObject receives the command to brake, all it has to do is to get the direction and apply an opposite acceleration, like this:</p><pre><code class="language-typescript">directionX
.switchMap(
// BRAKE is a constant of acceleration when mobileObject brakes
dir =&gt; mobileObject.accelerationX.next(-1 * dir * BRAKE)
)</code></pre><p>We are almost there. We just need to make sure that once the velocity reaches 0, or close to 0, we remove any acceleration. And this is how we can get what we want.</p><pre><code class="language-typescript">directionX
.switchMap(
// BRAKE is a constant of acceleration when mobileObject brakes
dir =&gt; {
mobileObject.accelerationX.next(-1 * dir * BRAKE);
return mobileObject.dynamicsX
// VEL_0 is a small value below which we consider vel as 0
.filter(dynamics =&gt; Math.abs(dynamics.vel) &lt; VEL_0)
.do(() =&gt; mobileObject.accelerationX.next(0)
.take(1)
}
(mousedown)="pAccX()" (mouseup)="releaseAccX()"/&gt;
// mobileObject contains the instance we want to control
const accelerationValue = 100;
pAccX() {
mobileObject.accelerationX.next(accelerationValue);
}
releaseAccX() {
mobileObject.accelerationX.next(0);
}</code></pre><p>An acceleration of 100 is applied when the mouse button is down and acceleration is set to 0 when the mouse button is released, simulating the accelerator pedal.</p><h4 id="show-animated-movement"><strong>Show animated movement</strong></h4><p>MobileObject exposes <strong><em>dynamicsX</em></strong> and <strong><em>dynamicsY</em></strong>, 2 Observables that continuously emit data about the movement along the respective axis (for example, deltaSpace, current velocity, acceleration along X and Y). So the browser app has to subscribe to them to receive this streams of events and change the position of MobileObject at every event emitted, as shown in this sample snippet:</p><pre><code class="language-typescript">interface Dynamics {deltaVel: number; vel: number; deltaSpace: number; space: number}
const mobileObjectElement = document.querySelector('.mobileobj');
mobileObject.dynamicsX.subscribe(
(dyn: Dynamics) =&gt; {
const currentPositionX = mobileObjectElement.style.left;
const deltaSpaceX = dyn.deltaSpace;
mobileObjectElement.style.left = currentPositionX + deltaSpace;
}
const dV = A * dT;
vel = vel + dV;
const dS = vel * dT + A / 2 * dT * dT;
space = space + dS;
return {dV, vel, dS, space};
const dynamics = dynFunction(clock, A);</code></pre><p>The key point is that now <strong>dynFunction</strong> contains in its internals the variables <code>vel</code> and <code>space</code>. It stores them internally in its own state, a state which is not visible to anything outside the function.</p><p>Assuming that <strong>dynamicsF</strong> is a method of MobileObject class, the final version of the code that creates the <strong><em>dynamics</em></strong> observable in MobileObject constructor can be written as</p><pre><code>const dfX = this.dynamicsF();
this.dynamicsX = this.accelerationX
.swithMap(a =&gt; dfX(this.clock, a));</code></pre><p>In doing so, we have confined the state information about current velocity and space into the function <code>dfX</code>. We’ve also removed the need to define properties for current velocity and space in MobileObject. And we have improved reuse, since <strong>dynamicsF()</strong> does not have any reference to any axis and can be used to calculate both <strong><em>dynamicsX</em></strong> and <strong><em>dynamicsY </em></strong>via function composition.</p><p>By applying a functional programming style (in this case higher isolation), we have gained higher security for our code and higher reuse.</p><h3 id="conclusion">Conclusion</h3><p>It has been a pretty long journey. We have seen the use of some of the most important RxJs operators and how Subjects can be handy. We have seen also how to use a functional programming style to increase the security of our code as well as its reusability.</p><p>I hope I’ve been able to show how, using a reactive thinking approach to this problem, it is possible to build a software solution which very naturally mirrors a real life model for objects that are remotely controlled.</p><p>Any time you have to face a problem where time and asynchronicity play a role, then reactive thinking supported by reactive libraries such as RxJs can lead you to a simpler and more solid design. In this world of constant connectivity, the cloud, non-blocking platforms, and microservices, time and asynchronicity are going to play an ever-increasing role.</p><p>If you liked what you have just read, you may be interested in <a href="https://medium.com/@enrico.piccinin/reactive-thinking-how-to-design-a-distributed-system-with-rxjs-websockets-and-node-57d772f89260" rel="noopener">reading also this article</a>, where I describe how to build a distributed system to control and display in action multiple MobileObjects in a distributed environment.</p><p>The entire code base <a href="https://github.com/EnricoPicci/mobile-object-observables" rel="noopener">can be found here</a>.</p><p>I want to thank Ben Lesh who inspired this piece with <a href="https://www.youtube.com/watch?v=X_RnO7KSR-4" rel="noopener">one of his talks</a>.</p>
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
