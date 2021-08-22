---
card: "https://cdn-media-1.freecodecamp.org/images/1*krH5Jncq4a9wjIikKiHP2A.png"
tags: [React Native]
description: by Jignesh Kakadiya
author: "Milad E. Fahmy"
title: "Finding memory leaks react-native app (iOS)"
created: "2021-08-15T19:48:22+02:00"
modified: "2021-08-15T19:48:22+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-react-native tag-react tag-ios tag-javascript tag-mobile-app-development ">
<header class="post-full-header">
<h1 class="post-full-title">Finding memory leaks react-native app (iOS)</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*krH5Jncq4a9wjIikKiHP2A.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*krH5Jncq4a9wjIikKiHP2A.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*krH5Jncq4a9wjIikKiHP2A.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*krH5Jncq4a9wjIikKiHP2A.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*krH5Jncq4a9wjIikKiHP2A.png" alt="Finding memory leaks react-native app (iOS)">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Jignesh Kakadiya</p>
<h1 id="finding-memory-leaks-react-native-app-ios-">Finding memory leaks react-native app (iOS)</h1>
<p><strong>Problem:</strong><br>Our react-native app was working well on all devices and except iPhone 6 it was resulting in a crash. After high level profiling we found out that its a memory issue. While using some heavy features in the app memory was shooting up to 600+ MB. And since iPhone 6 has 1GB of ram, iPhone automatically kills the app.</p>
<p><strong>Solution:</strong><br>This is what I did to reduce app total memory usage from 600MB to 60MB.</p>
<ol>
<li>While profiling for memory leaks we need to make sure app is built with the release Scheme. Since dev build includes logging/warning, hot reloading features we don’t need them when checking for leaks. <a href="https://facebook.github.io/react-native/docs/running-on-device.html#2-configure-release-scheme" rel="noopener">This is how you can change the release build with xcode</a>.</li>
<li><strong>Start tracking for leaks</strong><br>Go to XCode → Product → Profile (⌘ + i)<br>It will popup profiling templates. Please select whichever is required.<br>Select <code>Leaks</code>and click on <code>choose</code>.</li>
</ol>
<figcaption>Profilers list</figcaption>
</figure>
<p>3. This should open the leaks profiler on your screen. Then you can click on the `red dot` on top left corner which will <strong>restart the app in simulator </strong>and you can start playing with the app.</p>
<p>4. This is how it looks after performing some swipes in the screen and carousel operations. I realised when I jump into the carousel screen and select an image from carousel of 12 images, memory shoots up for every single image. Result below shows us the memory taken by “in memory” image objects.</p>
<p>5. <strong>Finding the cause.</strong><br>We were using the <a href="https://github.com/DylanVann/react-native-fast-image" rel="noopener">react-native-fast-image</a> package for caching the images on that screen and since react-native doesn’t have a “better” way to cache fetched images we ended up using <code>react-native-fast-image</code>. So I decided to remove this wonderful package from my app, and result was shocking. This is what the result looks like after removing it.</p>
<p>PS: Just so you know we ended up using <a href="https://github.com/kfiroo/react-native-cached-image" rel="noopener">react-native-cached-image</a>, which doesn’t store image in memory.</p>
<p>If you are building something with react-native and need help. Please let me know.</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
