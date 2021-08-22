---
card: "https://cdn-media-1.freecodecamp.org/images/0*273pYX1ym8bIxTou"
tags: [React]
description: by Pritish Vaidya
author: "Milad E. Fahmy"
title: "How to build a flip timer in React Native"
created: "2021-08-15T19:36:39+02:00"
modified: "2021-08-15T19:36:39+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-react tag-javascript tag-tech tag-apps-tag tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">How to build a flip timer in React Native</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/0*273pYX1ym8bIxTou 300w,
https://cdn-media-1.freecodecamp.org/images/0*273pYX1ym8bIxTou 600w,
https://cdn-media-1.freecodecamp.org/images/0*273pYX1ym8bIxTou 1000w,
https://cdn-media-1.freecodecamp.org/images/0*273pYX1ym8bIxTou 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/0*273pYX1ym8bIxTou" alt="How to build a flip timer in React Native">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Pritish Vaidya</p>
<h1 id="how-to-build-a-flip-timer-in-react-native">How to build a flip timer in React Native</h1>
<figcaption>Photo by <a href="https://unsplash.com/@vicolunna?utm_source=medium&amp;utm_medium=referral" rel="noopener" target="_blank" title="">Vico Luna</a> on <a href="https://unsplash.com?utm_source=medium&amp;utm_medium=referral" rel="noopener" target="_blank" title="">Unsplash</a></figcaption>
</figure>
<h3 id="introduction">Introduction</h3>
<p>A <em>Flip Timer</em> is a digital time keeping device with the time indicated by numbers that are sequentially revealed by a split-flap display.</p>
<p>This article will demonstrate the building of a <em>Flip Timer</em> in React Native using its exposed APIs and no additional dependencies.</p>
<h3 id="challenges-to-overcome">Challenges to overcome</h3>
<ul>
<li>Implement <code>transform-origin</code> property using your <strong><em>College Math Course</em></strong> matrices techniques since it is not supported in React Native. Rotation around the centered origin (by default) is easy, but we need to translate origin and rotate around the edges.</li>
<li>Implementation of Flip Number component.</li>
<li>Overcome <code>overflow: hidden</code> issue in android since it doesn’t work with absolute positioned elements.</li>
</ul>
<h3 id="contents">Contents</h3>
<ol>
<li><strong>Implement Flip Number Component</strong></li>
<li><strong>Implement FoldView</strong></li>
</ol>
<ul>
<li>Basic Layout</li>
<li>Overcoming the Challenge</li>
<li>Adding the Transformations</li>
<li>Adding the Animations</li>
</ul>
<p>3. <strong>Update Timer Component</strong></p>
<p>4. <strong>Final Result</strong></p>
<p>5. <strong>Links</strong></p>
<h3 id="implement-flip-number-component">Implement Flip Number Component</h3>
<h4 id="basic-layout">Basic Layout</h4>
<p><strong>Number Card</strong></p>
<p><strong>Note</strong>: Lower Card has the previous number added to it. Its use will be revealed once we reach the <em>FoldView</em> implementation.</p>
</figure>
<p><strong>Card</strong></p>
</figure>
<h3 id="implement-foldview">Implement FoldView</h3>
<h4 id="basic-layout-1">Basic Layout</h4>
<p>To build FoldView we need two <em>FlipCards</em> similar to <em>NumberCards</em> but with <em>absolute positioning</em> so that they are above the <em>NumberCards</em> when flip animations are applied.</p>
<p><strong>Number Card</strong></p>
<p>Adding <em>FlipCard</em> component to the <em>NumberCard</em> component.</p>
</figure>
<p><strong>Flip Card</strong></p>
<p>The FlipCard component is an animated wrapper with absolute positioning used while applying flip animation.</p>
<p><strong>Challenge (Part 2 and Part 3)</strong>: <code>overflow: hidden</code> with absolute positioning has major issues in <em>android. </em>Using<em> </em>this <a href="https://stackoverflow.com/a/21684490/6606831" rel="noopener">StackOverflow</a> post, it can be solved by using an <em>overflow container</em> inside the absolute positioned element.</p>
</figure>
<h4 id="final-result">Final Result</h4>
<h4 id="overcoming-the-challenge">Overcoming the Challenge</h4>
<p>Now comes the hard part. We need to add fold the FlipCard component along the edges.</p>
<p>Since React Native doesn’t support <code>transform-origin</code> property, we need to find some other way to shift the rotation origin on the bottom edge.</p>
<p>Fortunately, there is one way to overcome this issue. According to this awesome <a href="https://commitocracy.com/implementing-foldview-in-react-native-e970011f98b8" rel="noopener">article</a> and reading the <a href="https://developer.mozilla.org/en-US/" rel="noopener">MDN</a> docs for the <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin" rel="noopener">transform-origin</a> property, it can be implemented using <strong>matrices.</strong></p>
<p><strong>Utils</strong></p>
<p>React Native exposes several matrix operations in the <a href="https://github.com/facebook/react-native/blob/master/Libraries/Utilities/MatrixMath.js" rel="noopener">MatrixMath.js</a>. The important ones that we require are</p>
<ul>
<li><strong>Identity Matrix: </strong>It returns a 4 * 4 identity matrix <code>[1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]</code></li>
</ul>
<figcaption>Image Credit: <a href="https://github.com/dawnlabs/carbon" rel="noopener" target="_blank" title="">Carbon</a>. | Code: <a href="https://github.com/pritishvaidya/react-native-flip-timer/blob/master/src/utils/index.js" rel="noopener" target="_blank" title="">GitHub</a></figcaption>
</figure>
<ul>
<li><strong>Multiply Matrix: </strong>This utility method generates output based on the multiplication of 4*4 matrices <code>a</code> and <code>b</code> supplied as input.</li>
</ul>
<figcaption>Image Credit: <a href="https://github.com/dawnlabs/carbon" rel="noopener" target="_blank" title="">Carbon</a>. | Code: <a href="https://github.com/pritishvaidya/react-native-flip-timer/blob/master/src/utils/index.js" rel="noopener" target="_blank" title="">GitHub</a></figcaption>
</figure>
<ul>
<li><strong>Rotate Matrix: </strong>It is a custom utility method that will take a 4*4 matrix and degree to which it will be rotated to then multiply it to the original matrix to return the generated result.</li>
</ul>
<figcaption>Image Credit: <a href="https://github.com/dawnlabs/carbon" rel="noopener" target="_blank" title="">Carbon</a>. | Code: <a href="https://github.com/pritishvaidya/react-native-flip-timer/blob/master/src/utils/index.js" rel="noopener" target="_blank" title="">GitHub</a></figcaption>
</figure>
<ul>
<li><strong>Perspective Matrix: </strong>This utility method will allow us to use the perspective style to React Native and then multiply to the original 4*4 matrix.</li>
</ul>
<figcaption>Image Credit: <a href="https://github.com/dawnlabs/carbon" rel="noopener" target="_blank" title="">Carbon</a>. | Code: <a href="https://github.com/pritishvaidya/react-native-flip-timer/blob/master/src/utils/index.js" rel="noopener" target="_blank" title="">GitHub</a></figcaption>
</figure>
<ul>
<li><strong>Translate Matrix: </strong>This utility method will translate the origin and modify the original 4*4 matrix</li>
</ul>
<figcaption>Image Credit: <a href="https://github.com/dawnlabs/carbon" rel="noopener" target="_blank" title="">Carbon</a>. | Code: <a href="https://github.com/pritishvaidya/react-native-flip-timer/blob/master/src/utils/index.js" rel="noopener" target="_blank" title="">GitHub</a></figcaption>
</figure>
<ul>
<li><strong>Un-Translate Matrix: </strong>This utility method will un-translate the origin and modify the original 4*4 matrix</li>
</ul>
<figcaption>Image Credit: <a href="https://github.com/dawnlabs/carbon" rel="noopener" target="_blank" title="">Carbon</a>. | Code: <a href="https://github.com/pritishvaidya/react-native-flip-timer/blob/master/src/utils/index.js" rel="noopener" target="_blank" title="">GitHub</a></figcaption>
</figure>
<h4 id="adding-the-transformations">Adding the Transformations</h4>
<p><code>deg</code> is the degree to be rotated and <code>y</code> is the height of the component to which it will be translated.</p>
<p><strong>Challenge (Part 1)</strong>: Combining the utils from the above, <code>transform-origin</code> is implemented successfully.</p>
<figcaption>Image Credit: <a href="https://github.com/dawnlabs/carbon" rel="noopener" target="_blank" title="">Carbon</a>. | Code: <a href="https://github.com/pritishvaidya/react-native-flip-timer/blob/master/src/components/timer.js" rel="noopener" target="_blank" title="">GitHub</a></figcaption>
</figure>
<h4 id="adding-the-animations">Adding the Animations</h4>
<figcaption>Image Credit: <a href="https://github.com/dawnlabs/carbon" rel="noopener" target="_blank" title="">Carbon</a>. | Code: <a href="https://github.com/pritishvaidya/react-native-flip-timer/blob/master/src/components/timer.js" rel="noopener" target="_blank" title="">GitHub</a></figcaption>
</figure>
<h3 id="update-timer-component">Update Timer Component</h3>
<h4 id="add-time-util">Add Time Util</h4>
<p>This util will increment the timer by one sec and adjust hours, minutes, seconds.</p>
<figcaption>Image Credit: <a href="https://github.com/dawnlabs/carbon" rel="noopener" target="_blank" title="">Carbon</a>. | Code: <a href="https://github.com/pritishvaidya/react-native-flip-timer/blob/master/src/utils/index.js" rel="noopener" target="_blank" title="">GitHub</a></figcaption>
</figure>
<h4 id="timer-component">Timer Component</h4>
<p>The timer component will call <strong>Time Util </strong>and update the component based on hours, minutes, seconds</p>
<figcaption>Image Credit: <a href="https://github.com/dawnlabs/carbon" rel="noopener" target="_blank" title="">Carbon</a>. | Code: <a href="https://github.com/pritishvaidya/react-native-flip-timer/blob/master/src/components/timer.js" rel="noopener" target="_blank" title="">GitHub</a></figcaption>
</figure>
<h4 id="flip-number-component">Flip Number Component</h4>
<p>This component just splits the number into two parts based on their digit placement and calls <strong>NumberCard </strong>component .</p>
<figcaption>Image Credit: <a href="https://github.com/dawnlabs/carbon" rel="noopener" target="_blank" title="">Carbon</a>. | Code: <a href="https://github.com/pritishvaidya/react-native-flip-timer/blob/master/src/components/flip-number/index.js" rel="noopener" target="_blank" title="">GitHub</a></figcaption>
</figure>
<h3 id="final-result-1">Final Result</h3>
<h3 id="links">Links</h3>
<p>I’ve published a package for it that contains more customizable properties.</p>
<ul>
<li>npm : <a href="https://www.npmjs.com/package/react-native-flip-timer" rel="noopener">react-native-flip-timer</a></li>
<li>GitHub: <a href="https://github.com/pritishvaidya/react-native-flip-timer" rel="noopener">react-native-flip-timer</a></li>
</ul>
<p>More of the cool stuff can be found on my <a href="https://stackoverflow.com/users/6606831/pritish-vaidya" rel="noopener"><strong><em>StackOverflow</em></strong></a> and <a href="https://github.com/pritishvaidya" rel="noopener"><strong><em>GitHub</em></strong></a><strong><em> </em></strong>profiles.</p>
<p>Follow me on <a href="https://www.linkedin.com/in/pritish-vaidya-506686128/" rel="noopener"><strong><em>LinkedIn</em></strong></a>, <a href="https://medium.com/@pritishvaidya94" rel="noopener"><strong><em>Medium</em></strong></a>, <a href="https://twitter.com/PritishVaidya" rel="noopener"><strong><em>Twitter</em></strong></a> for further update new articles.</p>
<p><strong>One clap, two claps, three claps, forty?</strong></p>
<p><em>Originally published at <a href="https://blog.pritishvaidya.com/posts/2019-03-02-building-a-flip-timer-in-react-native/" rel="noopener">blog.pritishvaidya.com</a> on March 2, 2019.</em></p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
