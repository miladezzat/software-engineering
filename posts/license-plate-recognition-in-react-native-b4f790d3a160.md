---
card: "https://cdn-media-1.freecodecamp.org/images/1*XU79Bvq2T-jmpoux2giVJQ.jpeg"
tags: [React Native]
description: by Sam Corcos
author: "Milad E. Fahmy"
title: "License Plate Recognition in React Native"
created: "2021-08-15T19:52:58+02:00"
modified: "2021-08-15T19:52:58+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-react-native tag-react tag-programming tag-javascript tag-mobile-app-development ">
<header class="post-full-header">
<h1 class="post-full-title">License Plate Recognition in React Native</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*XU79Bvq2T-jmpoux2giVJQ.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*XU79Bvq2T-jmpoux2giVJQ.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*XU79Bvq2T-jmpoux2giVJQ.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*XU79Bvq2T-jmpoux2giVJQ.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*XU79Bvq2T-jmpoux2giVJQ.jpeg" alt="License Plate Recognition in React Native">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Sam Corcos</p>
<h1 id="license-plate-recognition-in-react-native">License Plate Recognition in React Native</h1>
<figcaption>Image courtesy of Unsplash</figcaption>
</figure>
<h3 id="how-to-use-this-in-your-react-native-app">How to use this in your React Native app</h3>
<p>In the example above, when the <code>confidence</code> is above 90%, <code>this.state.plate</code> is set to the incoming plate, which is then displayed to the user. This is where you might close the camera and dispatch a Redux action if you’re satisfied with result.</p>
<h3 id="how-we-built-this-package">How we built this package</h3>
<p>This package is built using <a href="https://github.com/openalpr/openalpr" rel="noopener">OpenALPR</a> and the associated <a href="https://github.com/twelve17/openalpr-ios" rel="noopener">iOS compilation</a>. The scaffolding for the camera functionality is based on the popular <code><a href="https://github.com/lwansbrough/react-native-camera" rel="noopener">react-native-camera</a></code> package.</p>
<p>OpenALPR accepts either a static image or an image stream, and since recognizing images from a stream is way cooler we decided to go with that approach. Unfortunately, none of the existing React Native camera libraries give easy access to an image stream, so we had to build it ourselves.</p>
<p>Since we’re running an image stream through an algorithm (OpenALPR), we need to understand how the algorithm works at a basic level so we can optimize the images that we feed into it.</p>
<p>The algorithm can take any image, but when it receives an image it’s going to run some pre-processing. So if you want to be performant, you need to minimize the number of operations that the algorithm needs to run.</p>
<h4 id="image-quality">Image quality</h4>
<p>One thing that the algorithms in OpenCV and OpenALPR do is down-sample (reduce the quality) of your image. Basic edge detection doesn’t require high-resolution. In fact, high-resolution is often an enemy of edge detection, because it introduces noise. Down-sampling acts as a blur and removes unnecessary details.</p>
<p>Knowing that the algorithm is already going down-sample your image, you can optimize your input data by passing in images that are already low-resolution. When you ask for video frames (frame buffers) you can define the resolution that you want to receive. In iOS, you would do this by accessing a preset. <code>AVSessionPreset</code> is a parameter that you give the <code>AVFoundation</code> framework, which gives you low-level access to the camera.</p>
<p>Most people default to high-resolution images, but since you know that the algorithm is down-sampling anyway, you can let the iPhone camera do all the work with no computation expense rather than processing a memory-intensive image conversion after the fact.</p>
<h4 id="pixels">Pixels</h4>
<p>Another thing the algorithm does is convert the image to grayscale, since edge detection algorithms work on best in a grayscale color plane.</p>
<p>If you want to be clever, you can choose a non-standard pixel format. Ordinarily your images come back as <code>RGBA</code>, where R is red, G is green, B is blue, and A is alpha (opacity). You may have also seen <code>CMYK</code> (cyan, magenta, yellow and key) if you work with Illustrator or printed materials.</p>
<p>Using <code>RGBA</code> as the example, each pixel is represented by 0–4 bytes. In order to get a grayscale image from <code>RGBA</code>, you’d need to take the average of the <code>RGB</code> components, which corresponds to 3 reads, 3 multiplications, and 2 adds to get grayscale.</p>
<p>Enter <code>Y'CbCr</code>, where <code>Y'</code> is the brightness and <code>Cb</code> and <code>Cr</code> are colors.</p>
<blockquote>Y′ is the <a href="https://en.wikipedia.org/wiki/Luma_(video)" rel="noopener">luma</a> component and CB and CR are the blue-difference and red-difference <a href="https://en.wikipedia.org/wiki/Chrominance" rel="noopener">chroma</a> components. -Wikipedia</blockquote>
<p>In <code>Y'CbCr</code>, data is encoded differently. Y prime (<code>Y'</code>) is effectively the same as the grayscale information you would get from the <code>RGB</code> computation above but doesn’t require a computation step. So if you specify this pixel type, you save some processor time.</p>
<p>This is, as far as we know, the most efficient way to get your data input so that it doesn’t need to be pre-processed.</p>
<h4 id="orientation">Orientation</h4>
<p>Although you can take in optimized images at this point, you still have to handle orientation. Any OCR (optical character recognition) algorithm needs to know which direction is up, since letters lose their meaning when they’re upside down or sideways.</p>
<p>The native way that the iPhone takes in images is in landscape mode with the home button on the right, so in order to get our algorithm to work in portrait mode, you have to recognize the orientation and rotate the image. Fortunately, there’s an efficient way to do this and OpenCV provides an efficient method for rotating images.</p>
<h4 id="coordinate-mapping">Coordinate mapping</h4>
<p>The last piece is to draw the rectangle around a recognized license plate. When you use the native camera in portrait mode, it puts a letterbox around the camera output. If you try to make the camera full-screen, it’s going to stretch the image to fill the available space. This is called “video gravity.”</p>
<p>In the image below, you can see that the phone on the left is full-screen, which causes the can of WD-40 to appear slightly larger than it does in the camera to the right, which is letterboxed.</p>
<figcaption>Left camera is experiencing video gravity</figcaption>
</figure>
<p>So how do you map the coordinates of the plate from the image space (coordinate system) onto the screen coordinate system, taking into account the aperture ratio, the video aspect ratio, and the video gravity?</p>
<p>The way you do that is to first map the coordinates with <code>0,0</code> as the top left and <code>1,1</code> as the bottom right. If the orientation is something other than landscape mode with the home button on the right, you need to calculate it slightly differently. Then you map those coordinates onto the screen coordinate system using the magic method given to us by iOS: <code>pointForCaptureDevicePointOfInterest</code></p>
<p>This method takes the normalized coordinate in the image coordinate space and maps it to a coordinate in the screen space. It automatically takes gravity and everything else into consideration for you.</p>
<p>And that’s a wrap.</p>
<h3 id="contributors">Contributors</h3>
<ul>
<li>Evan Rosenfeld - Evan is the founder of Avocado Hills and technical advisor to CarDash.</li>
<li>[Your name here] - If you’d like to contribute, send us a pull request— especially if you’re a Java developer interested in building out our Android functionality ?.</li>
</ul>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
