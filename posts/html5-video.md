---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c9d71740569d1a4ca37cc.jpg"
tags: [HTML]
description: "Before HTML5, in order to have a video play on a webpage, you"
author: "Milad E. Fahmy"
title: "HTML5 Video: How to Embed Video in Your HTML"
created: "2021-08-15T22:49:50+02:00"
modified: "2021-08-15T22:49:50+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-html tag-html5 tag-video ">
<header class="post-full-header">
<h1 class="post-full-title">HTML5 Video: How to Embed Video in Your HTML</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c9d71740569d1a4ca37cc.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9d71740569d1a4ca37cc.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9d71740569d1a4ca37cc.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9d71740569d1a4ca37cc.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c9d71740569d1a4ca37cc.jpg" alt="HTML5 Video: How to Embed Video in Your HTML">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>Before HTML5, in order to have a video play on a webpage, you would need to use a plugin like Adobe Flash Player. With the introduction of HTML5, you can now place videos directly into the page itself.</p><p>This makes it possible to have videos play on pages that are designed for mobile devices, as plugins like Adobe Flash Player don't work on Android or iOS.</p><p>The HTML <code>&lt;video&gt;</code> element is used to embed video in web documents. It may contain one or more video sources, represented using the <code>src</code> attribute or the <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/source">source</a> element.</p><p>To embed a video file, just add this code snippet and change the <code>src</code> to the path of your video file:</p><pre><code class="language-html">&lt;video controls&gt;
&lt;source src="tutorial.ogg" type="video /ogg"&gt;
&lt;source src="tutorial.mp4" type="video /mpeg"&gt;
Your browser does not support the video element. Kindly update it to latest version.
&lt;/video &gt;</code></pre><p>The <code>&lt;video&gt;</code> element is supported by all modern browsers. However, not all browsers support the same video file format. &nbsp;MP4 files are the most widely accepted format, and other formats like WebM and Ogg are supported in Chrome, Firefox, and Opera.</p><p>To ensure your video plays in most browsers, it's best practice to encode them into both Ogg and MP4 formats, and include both in the <code>&lt;video&gt;</code> element like in the example above. Browsers will use the first recognized format.</p><p>If for some reason the browser doesn't recognize any of the formats, the text "Your browser does not support the video element. Kindly update it to latest version" will be displayed instead.</p><p>You also might have noticed <code>controls</code> in the <code>&lt;video&gt;</code> tag. This element includes a lot of useful attributes to customize the playback experience.</p><h2 id="video-attributes"><code>&lt;video&gt;</code> attributes</h2><h3 id="controls"><code>controls</code></h3><p>The <code>controls</code> attribute handles whether controls such as the play/pause button or volume slider appear. </p><p>This is a boolean attribute, meaning it can be set to either true or false. To set it to true, simply add it to the <code>&lt;video&gt;</code> tag. If it's not present in the tag then it will be set to false and the controls won't appear.</p><h4 id="autoplay"><code>autoplay</code></h4><p>"autoplay" can be set to either true or false. You set it to true by adding it into the tag, if it is not present in the tag it is set to false. If set to true, the video will begin playing as soon as enough of the video has buffered for it to be able to play. Many people find autoplaying videos as disruptive or annoying. So use this feature sparingly. Also note, that some mobile browsers, such as Safari for iOS, ignore this attribute.</p><p>This is another boolean attribute. By including <code>autoplay</code> in the <code>&lt;video&gt;</code> tag, the embedded video will begin playing as soon as enough of it has buffered.</p><pre><code class="language-html">&lt;video autoplay&gt;
&lt;source src="video.mp4" type="video/mp4"&gt;
&lt;/video&gt;
</code></pre><p>Keep in mind that many people find autoplaying videos disruptive or annoying, so use this feature sparingly. Also note that some mobile browsers like Safari for iOS ignore this attribute entirely.</p><h4 id="poster"><code>poster</code></h4><p>The <code>poster</code> attribute is the image that shows on the video until the user clicks to play it.</p><pre><code class="language-html">&lt;video poster="poster.png"&gt;
&lt;source src="video.mp4" type="video/mp4"&gt;
&lt;/video&gt;</code></pre><h3 id="videos-can-be-expensive">Videos can be expensive</h3><p>While it's easier than ever to include videos on your page, it's often better to upload your videos to a service like YouTube, Vimeo, or Wistia and embed their code instead. This is because serving videos can be expensive, both for you in terms of server costs and for your viewers if they have limited data plans.</p><p>Hosting your own video files can also lead to problems with bandwith, which could mean stuttering of slow loading videos. On top of that, browsers tend to vary in quality when it comes to video playback, so it's hard to control exactly what your viewers will see. It's also very easy to download videos embedded with the <code>&lt;video&gt;</code> tag, so if you're concerned with piracy you might want to look into other options.</p><p>And with that, go forth and embed videos to your heart's content. Or not – it's your call.</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
