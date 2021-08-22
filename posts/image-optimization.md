---
card: "/images/default.jpg"
tags: [Image Optimization]
description: "Images are an essential ingredient of most websites. The visu"
author: "Milad E. Fahmy"
title: "A Basic Intro to Image Optimization for the Web"
created: "2021-08-16T10:05:10+02:00"
modified: "2021-08-16T10:05:10+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-image-optimization tag-web-development tag-web-performance ">
<header class="post-full-header">
<h1 class="post-full-title">A Basic Intro to Image Optimization for the Web</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/04/image-breakpoints-2.png 300w,
/news/content/images/size/w600/2020/04/image-breakpoints-2.png 600w,
/news/content/images/size/w1000/2020/04/image-breakpoints-2.png 1000w,
/news/content/images/size/w2000/2020/04/image-breakpoints-2.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/04/image-breakpoints-2.png" alt="A Basic Intro to Image Optimization for the Web">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Images are an essential ingredient of most websites. The visual quality of pictures has a direct impact on the brand image and the message those images convey. And the weight of images usually accounts for a 40-60% of the data transferred on the web. </p><p>This usually has the largest impact on loading time over other resources like JavaScript. So, whether we're creating or running a website, we should put in place an image transformation and optimization pipeline.</p><p>There are many options to do this, from in-house developments based on open source libraries and suites – like ImageMagick – to cloud-based tools and APIs. </p><p>Whatever tool we use in our deployment, there are four main tasks that, at the very least, any pipeline should accomplish.</p><h3 id="resize-images-">Resize images. </h3><p>Image resizing is the first and most important step. It brings a big impact on weight with no visual quality penalty, as long as we don't make it smaller than the displaying resolution. </p><p>We should always set and enforce a maximum image resolution in our website, for instance 2000 px width. Ideally, we'd make our website responsive by setting different breakpoints and delivering images that fit in our users' displays. </p><p>If you need help on choosing your breakpoints, check out this article on the <a href="https://abraia.me/docs/best-image-sizes-for-web/">best image sizes for web</a>.</p><h3 id="convert-to-the-right-format-">Convert to the right format. </h3><p>JPEG is the default format in the web. PNG may work better with graphic designs featuring solid colors, but in these cases it may yield lower weight with better quality. </p><p>You may consider offering WEBP for Chrome, Edge, Firefox and Android users, keeping JPEG as fallback for Safari and iOS. It may save 10-30% of image weight with very similar quality, perhaps some more blur and less ringing. </p><p>For an up to date revision you may check out this article on <a href="https://abraia.me/docs/best-image-formats-for-web/">image formats for web</a>.</p><h3 id="compress-images-properly-">Compress images properly. </h3><p>We can do this with a powerful open source suite like <a href="https://imagemagick.org/index.php">ImageMagick</a> and simply set a quality factor (typically 75 to 85) for JPEG (and WEBP) images. You can still use a perceptual metric to better protect quality and further squeeze weight – this is an option available in some cloud <a href="https://abraia.me/docs/image-optimization/#automatic-image-optimization-for-web">image optimization tools</a>.</p><h3 id="get-rid-of-metadata-">Get rid of metadata. </h3><p>From shooting to editing, images accumulate metadata, like <a href="https://abraia.me/docs/exif-data-orientation/">exif data</a>. While they may be useful for editing and management purposes, they have no impact on how images show in our web. Their weight can easily get 20 KB or more per image. </p><p>We should get rid of metadata before publishing on the web. We only have to make sure that images are coded with the proper orientation and with a sRGB profile, adhering to good <a href="https://abraia.me/docs/color-management-for-web/">color management</a> practices.</p>
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
