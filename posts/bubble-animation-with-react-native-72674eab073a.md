---
card: "https://cdn-media-1.freecodecamp.org/images/0*TRtgLab0Tjd7bLg6."
tags: [React Native]
description: by Narendra N Shetty
author: "Milad E. Fahmy"
title: "Bubble animation with React Native"
created: "2021-08-15T19:51:15+02:00"
modified: "2021-08-15T19:51:15+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-react-native tag-javascript tag-mobile-app-development tag-programming tag-design ">
<header class="post-full-header">
<h1 class="post-full-title">Bubble animation with React Native</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/0*TRtgLab0Tjd7bLg6. 300w,
https://cdn-media-1.freecodecamp.org/images/0*TRtgLab0Tjd7bLg6. 600w,
https://cdn-media-1.freecodecamp.org/images/0*TRtgLab0Tjd7bLg6. 1000w,
https://cdn-media-1.freecodecamp.org/images/0*TRtgLab0Tjd7bLg6. 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/0*TRtgLab0Tjd7bLg6." alt="Bubble animation with React Native">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Narendra N Shetty</p>
<h1 id="bubble-animation-with-react-native">Bubble animation with React Native</h1>
<h4 id="lessons-learned-while-building-a-react-native-app-using-animated-and-panresponder">Lessons learned while building a React Native App using <code>Animated</code> and <code>PanResponder</code></h4>
<p>In this article, I’ll talk about how I implemented an app transition which I found on Dribbble by <a href="https://dribbble.com/Ramotion" rel="noopener">Ramotion</a>.</p>
<figcaption><a href="https://dribbble.com/shots/2694049-Pagination-Controller-App-Interface" rel="noopener" target="_blank" title="">https://dribbble.com/shots/2694049-Pagination-Controller-App-Interface</a></figcaption>
</figure>
<p>This pagination controller can be used for onboarding flow or for a tutorial.</p>
<p>The complete version is published in Expo, and you can get it by opening the Expo app and scanning this QR code:</p>
<figcaption><a href="https://expo.io/@narendrashetty/onboarding-blog" rel="noopener" target="_blank" title="">https://expo.io/@narendrashetty/onboarding-blog</a></figcaption>
</figure>
<h3 id="let-s-begin-shall-we">Let’s begin, shall we?</h3>
<p>Here’s how I built the background:</p>
<p>I had <code>View </code>holding the background color. This includes <code>Animated.View</code> for the bubble animation. Its position was absolute so that it stayed on top of the screen. I also added some basic styles.</p>
<p>Then, I animated the bubble by expanding from 0 to max using the CSS transform scale with <code>Animated.timing</code>.</p>
<p>The above animation needed to trigger based on user interaction. First I used <code>TouchableWithoutFeedback</code>. Then I changed it with gestures.</p>
<p>I positioned the bubble according to the gif, which animated from the bottom. I did this using <code>top</code> and <code>left</code> property.</p>
<p>Neat! Results are as expected except the color. We’ll get back to that later.</p>
<p>Now I restructured the code by moving the bubble logic into a separate component called <code>CircleTransition. </code>Then I triggered the animation from the parent component.</p>
<p>Then it was time when to tackle the color. To make the bubble animate with the new color, I passed the new color into the component. And after the transition, I hid the bubble.</p>
<p>Can you see something weird in the above transition?</p>
<p>During the second bubble transition, the background color is fell back to the first color. I needed to update the background color to the new color with the bubble transitioned.</p>
<p>I passed a callback to the <code>start</code> method which executed when the transition completed.</p>
<p>Voila! It’s all set. Now I had the basic animation working.</p>
<p>Next I got into the gesture. The bubble transitions when the user swipes left or right according to the gif.</p>
<p>I created a new component called <code>Swipe</code>. It contains all the logic for the gesture and replaces<code>TouchableWithoutFeedback</code>.</p>
<p>I used <code>PanResponder</code>which reconciles several touches into a single gesture. It makes single-touch gestures resilient to extra touches. It can also recognize simple multi-touch gestures. For more on this you can go <a href="https://facebook.github.io/react-native/docs/panresponder.html" rel="noopener">here</a> and <a href="https://facebook.github.io/react-native/docs/gesture-responder-system.html" rel="noopener">here</a>.</p>
<p>Now for the logic of the gestures.</p>
<p>First I needed to figure out which direction the user is swiping. I only need to animate when the user swipes left or right. I also needed to setup some threshold to determine if it’s actually a swipe or not.</p>
<p>If it was a valid swipe, I triggered the appropriate action.</p>
<p>Yes! You guessed it right. I have gotten what I wanted to achieve with the gesture. Then I added an action for <code>swipeRight</code>. The gesture was completed with a bit of refactoring.</p>
<p>That’s it! This was the most complex part in the app.</p>
<p>I won’t show my complete work on this app. The information in this post should be enough help you build your own. Fork <a href="https://github.com/narendrashetty/onboarding-RN" rel="noopener">this</a> and try to complete your app to match the above gif.</p>
<p>If you are stuck and need any help, final version is in <code>result</code> branch, have a peek. Also you can ping me on Twitter <a href="https://twitter.com/narendra_shetty" rel="noopener">@narendra_shetty</a> or comment below.</p>
<p>And when you complete, please share your Expo/GitHub link.</p>
<p>If this article was of any help to you, please clap for me. It will motivate me to write more :)</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
