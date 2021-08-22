---
card: "https://cdn-media-1.freecodecamp.org/images/1*34Fn007F_nnaX4oTvB7S8A.jpeg"
tags: [Web Development]
description: "by Maciej Nowakowski"
author: "Milad E. Fahmy"
title: "A Guide to Responsive Images with Ready-to-Use Templates"
created: "2021-08-16T10:18:14+02:00"
modified: "2021-08-16T10:18:14+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-web-development tag-image tag-responsive-design tag-software tag-tech ">
<header class="post-full-header">
<h1 class="post-full-title">A Guide to Responsive Images with Ready-to-Use Templates</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*34Fn007F_nnaX4oTvB7S8A.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*34Fn007F_nnaX4oTvB7S8A.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*34Fn007F_nnaX4oTvB7S8A.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*34Fn007F_nnaX4oTvB7S8A.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*34Fn007F_nnaX4oTvB7S8A.jpeg" alt="A Guide to Responsive Images with Ready-to-Use Templates">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
srcset="image-sm.jpg 600w,
image-md.jpg 900w,
image-lg.jpg 1440w"
src="image_1x.jpg"
/&gt;
</code></pre><p>There is a caveat here. When the browser decides which image to fetch, it has no knowledge of our CSS! The CSS file hasn’t been fetched at this point. And it assumes that the image will be displayed at the full width of the window.</p><p>If a full-width image is what you want, then fine. But what if you want to place an image in a container that is only <code>50vw</code> wide? Here comes the <code>sizes </code>attribute into play. Let’s take a look:</p><pre><code class="language-html">&lt;img
srcset="image-sm.jpg 600w,
image-md.jpg 900w,
image-lg.jpg 1440w"
sizes="50vw"
src="image_1x.jpg"
/&gt;
</code></pre><p>By adding the <code>sizes="50vw"</code> attribute, you are telling the browser that the image will be displayed at <code>50vw</code>, and based on this information, the browser will decide which image to display.</p><p>But what if you want to display your image at <code>50vw</code> on a big screen and at the full width of <code>100vw</code> on a mobile device? The <code>sizes</code> attribute accepts also media queries!</p><p>You can specify that below the mobile breakpoint of <code>600px</code> you want the browser to display your image at a full-screen width. And for the width higher than the mobile breakpoint you want the browser to display your image at <code>50vw</code>.</p><p>You can do this by adding the media query:</p><pre><code class="language-html">&lt;img
srcset="image-sm.jpg 600w,
image-md.jpg 900w,
image-lg.jpg 1440w"
sizes="(max-width: 600px) 100vw, 50vw"
src="image_1x.jpg"
/&gt;
</code></pre><p>Remember that in the above line of code you are instructing the browser which image to choose because the browser doesn’t know the corresponding CSS. You still have to add the breakpoints in CSS explicitly.</p><p>This solution works really well but we are missing pixel densities here! If we stopped here, we would be sending the same image both to the displays with <code>1x</code> pixel density and to the retina screens. Luckily, there is an easy fix to it.</p><h3 id="picture-element">Picture element</h3><p>Meet the HTML5 <code>picture</code> element. It accepts the <code>source</code> and <code>img</code> elements as its children. We can use the <code>source</code> element to list additional image formats that we want to serve to the browser.</p><p>But before we fix pixel densities, let’s introduce smaller and sharper images in WebP format.</p><p>Let’s add the <code>source</code> element as the first option inside the <code>picture</code> element with your image in the WebP format followed by the <code>img</code> pointing at the regular JPG image. Now, when the browser is not WebP-ready, it will gracefully fall back on to the <code>img</code> element (e.g. Safari).</p><pre><code class="language-html">&lt;picture&gt;
&lt;source
srcset="image.webp"
type="image/webp"
/&gt;
&lt;img
src="image.jpg"
type="image/jpeg"
alt="image description"
/&gt;
&lt;/picture&gt;
</code></pre><p>The <code>source</code> element opens up a whole new world of possibilities. It accepts media queries!</p><p>First, in the <code>media</code> attribute, we use the media query and then, in the <code>srcset</code>attribute, we place the appropriate image. And we can use as many <code>source</code>elements as we wish:</p><pre><code class="language-html">&lt;picture&gt;
&lt;source
media="(min-width: 900px)"
srcset="image-lg.webp"
type="image/webp"
/&gt;
&lt;source
media="(min-width: 600px)"
srcset="image-md.webp"
type="image/webp"
/&gt;
&lt;source
srcset="image-sm.webp"
type="image/webp"
/&gt;
&lt;img
src="image-lg.jpg"
type="image/jpeg"
alt="image description"
/&gt;
&lt;/picture&gt;
</code></pre><p>Above, we have prepared three images in the WebP format, depending on the size of the display, and one JPG image as a fallback option.</p><p>The last secret of the <code>srcset</code> attribute is that it also accepts pixel densities. We can decide which image we want to serve on which screen and at which pixel density. The trick is to list image files in the <code>scrset</code> followed by a space and the pixel density factor, for example: <code>1x</code>, <code>2x</code>, <code>3x</code>, or even <code>4x</code>.</p><pre><code class="language-html">&lt;picture&gt;
&lt;source
media="(min-width: 900px)"
srcset="image-lg_1x.webp 1x, image-lg_2x.webp 2x"
type="image/webp" /&gt;
&lt;source
media="(min-width: 601px)"
srcset="image-md_1x.webp 1x, image-md_2x.webp 2x"
type="image/webp" /&gt;
&lt;source srcset="image-sm_1x.webp 1x, image-sm_2x.webp 2x" type="image/webp" /&gt;
&lt;img
srcset="image-sm_1x.jpg 600w, image-md_1x.jpg 900w, image-lg_1x.jpg 1440w"
src="image_lg_1x.jpg"
type="image/jpeg"
alt="image description"
/&gt;
&lt;/picture&gt;
...</code></pre><p>Since we sorted out the screen sizes and pixel densities for the WebP format, let’s have a closer look at the fallback option. In the end, some browsers don’t support the WebP format.</p><p>Here, we have to decide if we want to use the 1 or 2-pixel-dense images. Below, I went for the first option:</p><pre><code class="language-html">&lt;picture&gt;
&lt;source
media="(min-width: 900px)"
srcset="image-lg_1x.webp 1x, image-lg_2x.webp 2x"
type="image/webp"
/&gt;
&lt;source
media="(min-width: 601px)"
srcset="image-md_1x.webp 1x, image-md_2x.webp 2x"
type="image/webp"
/&gt;
&lt;source srcset="image-sm_1x.webp 1x, image-sm_2x.webp 2x" type="image/webp" /&gt;
&lt;img
srcset="image-sm_1x.jpg 600w, image-md_1x.jpg 900w, image-lg_1x.jpg 1440w"
src="image_lg_1x.jpg"
type="image/jpeg"
alt="image description"
/&gt;
&lt;/picture&gt;
</code></pre><p>We have replaced the <code>img</code> element with the <code>picture</code> element. Where possible, we want to deliver images in the WebP format in three different sizes, depending on the display size, and 2 different pixel densities. If the browser doesn’t support the <code>picture</code> element or the WebP format, it will fall back on to the standard <code>img</code> element with three different sizes of JPGs.</p><p><strong>Important:</strong> Notice that in the <code>img</code> element the <code>srcset</code> attribute should be placed before the <code>src</code> attribute. Otherwise, the browser will download the <code>src</code> image first and then, if it finds a better image in the <code>srcset</code>, it will download this one as well. This way we would end up with two images.</p><p>We could go one step further and create another 3 <code>source</code> elements for browsers that don’t support the WebP format and deliver JPG files instead.</p><p>Although it works great for Firefox, I’ve noticed that Safari will download both files: the JPG listed in the <code>source</code> <strong>and</strong> the JPG from the <code>img</code> element. Again, we would end up with two images instead of one.</p><h3 id="responsive-images-in-css">Responsive images in CSS</h3><p>If we don’t know the exact height and width of the container we want to cover with an image, we can use generic elements like <code>div</code> with the <code>background-image</code>property pointing to the image URL:</p><pre><code class="language-html">background-image: url("/images/image.jpg");</code></pre><p>CSS, similarly to HTML, enables image size optimization.</p><p>The <code>image-set</code> in CSS is the equivalent of the <code>srcset</code> in HTML . At the moment, it is implemented in Chrome, Chrome for Android, Safari, iOS Safari, and a few other browsers. You can add <a href="https://github.com/wtfil/image-set-polyfill" rel="noopener">polyfills</a> to make the <code>image-set</code>work on other browsers, but given that Chrome and Safari combined are the browsers of choice for 70% of users today, there is a good chance that most browsers will implement the attribute in the near future.</p><p>But worry not, the regular <code>background-image</code> as a fallback option will do the trick.</p><p>The structure is very similar to what we’ve just used in a <code>srcset</code> attribute.</p><p>To create a full-width image element with a height of 500px, we have to start with the fallback option — the first <code>background-image</code> in the code example below. Then, using the <code>-webkit-image-set</code>, we need to list the WebP images for different pixel densities. And we have to repeat the process for different breakpoints using media queries.</p><p>One important thing to remember is that both Chrome and Safari use the WebKit layout engine but Safari doesn’t support the WebP format. That’s why we have to add the last set of <code>image-set</code> attributes with JPG images (it will be used by Safari even though it doesn’t start with <code>-webkit</code>).</p><pre><code class="language-css">.bg-image {
width: 100vw;
height: 500px;
background-size: cover;
background-position: center;
background-image: url(/images/image-lg_1x.jpg);
background-image: -webkit-image-set(
url(/images/image-lg_1x.webp) 1x,
url(/images/image-lg_2x.webp) 2x
);
background-image: image-set(
url(/images/image-lg_1x.jpg) 1x,
url(/images/image-lg_2x.jpg) 2x
);
@media (max-width: 900px) {
background-image: url(/images/image-md_2x.jpg);
background-image: -webkit-image-set(
url(/images/image-md_1x.webp) 1x,
url(/images/image-md_2x.webp) 2x
);
background-image: image-set(
url(/images/image-md_1x.jpg) 1x,
url(/images/image-md_2x.jpg) 2x
);
}
@media (max-width: 600px) {
background-image: url(/images/image-sm_2x.jpg);
background-image: -webkit-image-set(
url(/images/image-sm_1x.webp) 1x,
url(/images/image-sm_2x.webp) 2x
);
background-image: image-set(
url(/images/image-sm_1x.jpg) 1x,
url(/images/image-sm_2x.jpg) 2x
);
}
}
</code></pre><p>Here, the background image is centered in the <code>div</code> element and covers its whole area. Using the <code>image-set</code> attribute, we are assigning two different images to two different pixel densities.</p><p>The fallback option with a standard <code>url</code> takes care of the browsers that don’t support the <code>image-set</code> attribute.</p><p>It’s very important to place the fallback option <strong>before</strong> the <code>background-images</code>with the <code>image-set</code> attribute. If you place it after the <code>image-set</code>attribute, for example, Safari would download both, the image from <code>image-set</code> and the image from the fallback option if it found an image with a different file name.</p><p>The rest of the code follows the same pattern. Above, I have added media queries for 600px and 900px breakpoints and a set of corresponding images in smaller sizes.</p><p>The fallback option always has to use the JPG format to avoid the situation where an image cannot be shown at all, that is when the browser doesn’t support the <code>image-set</code> attribute or the WebP format.</p><h3 id="how-to-inline-small-images">How to inline small images</h3><p>To improve user experience, we should not only compress and serve the smallest possible images, but we should also decrease the number of requests we send to the server.</p><p>The browser has to send a separate request for every single image. When sent to the server, the request has to first wait in a queue, which takes time. The more calls the browser makes, the longer the user has to wait.</p><p>That’s especially true when you have to download many small images. If possible, logos and icons should be saved as vector graphics (SVG). Small images can be embedded either in HTML or in CSS directly as base64 encoded strings.</p><p>Instead of passing a regular URL to the <code>src</code> attribute in the <code>img</code> element, we can pass the image as a string:</p><pre><code class="language-html">&lt;img
src="data:image/png;base64,encoded string"
alt="img description"
/&gt;</code></pre><p>and in CSS:</p><pre><code class="language-css">.small-image {
background-image: url(data:image/png;base64,encoded string);
}
</code></pre><p>In most cases, the generated string will be around 30% bigger than the original image, but you will save time on another round trip to the server.</p><p>The most common argument against using base64 encoded images in CSS files is that images are non-blocking resources whereas CSS files are. It means that if you embed too many small images into your CSS, it will increase the size of the CSS file and lengthen the time to the first paint of the website. That, in turn, will make the user wait longer before he or she can see any content.</p><p><a href="https://csswizardry.com/2017/02/base64-encoding-and-performance/" rel="noopener">Here</a> is a great article on why you may consider dropping the idea of using encoded strings for images entirely.</p><p>The truth lays probably somewhere in the middle, and injecting one or two small files as base64 strings into CSS or HTML shouldn’t do any harm.</p><p>At the end of this article, you will learn how to generate them. It can feel strange at first because these strings are thousands of characters long. Your <code>.logo</code> class may look like this, but longer:</p><pre><code class="language-css">.logo {
background-image: url(data:image/png;base64,iVBORw0KGgoAAAA NSUhEUgAABqIAAAFvCAMAAAAWmCq0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZS BJbWFnZVJlYWR5ccllPAAAA3hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAA Dw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5U Y3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0…);
}
</code></pre><h3 id="how-to-generate-responsive-images">How to generate responsive images</h3><p>Let’s assume that you’ve just saved a perfect image and you’d like to create all the variations so you can use it on your website.</p><p>There are many tools that can help. Simple tools include <a href="http://compressjpeg.com/" rel="noopener">compressjpeg.com</a>, <a href="http://compresspng.com/" rel="noopener">compresspng.com</a>, and <a href="https://tinyjpg.com/" rel="noopener">tinyjpg.com</a>. More advanced tools include <a href="https://imageoptim.com" rel="noopener">ImageOptim</a> for JPEG, PNGs, and GIFs and <a href="https://pngmini.com/" rel="noopener">ImageAlpha</a> for PNGs.</p><p>On my quest to take full control of compression levels, formats, and scaling, I needed a tool that would help me automate the whole process. And I didn’t fancy drag-and-dropping dozens of images.</p><p>Both <a href="http://www.imagemagick.org/script/index.php" rel="noopener">ImageMagic</a> and <a href="http://www.graphicsmagick.org/" rel="noopener">GraphicsMagick</a> are free and powerful pieces of software that painlessly pair with <a href="https://gruntjs.com/" rel="noopener">Grunt</a>, the JavaScript task runner.</p><p>Even better, there are Grunt plugins that simplify the task further. Several quick tests showed that GraphicsMagick generates 20% smaller JPG images than ImageMagic at the same compression level. So the choice was clear.</p><p>Before we start to cut our way through the jungle of pixels, we have to prepare our tools and sharpen our axe. Download GraphicsMagick from <a href="http://www.graphicsmagick.org/download.html" rel="noopener">here</a> or use <a href="http://www.graphicsmagick.org/download.html" rel="noopener">Homebrew</a> to install it.</p><pre><code>brew install graphicsmagick</code></pre><p>Next, install Grunt’s CLI globally:</p><pre><code>npm install -g grunt-cli</code></pre><p>Create a separate folder <code>responsive-images</code> and init the project:</p><pre><code>mkdir responsive-images
cd responsive-images
npm init</code></pre><p>And finally, install the local version of Grunt:</p><pre><code>npm install grunt --save-dev</code></pre><p>Create two folders: <code>src/</code> for original images and <code>dest/</code> for the responsive images that Grunt and GraphicsMagick will generate:</p><pre><code>mkdir srcmk
dir dest</code></pre><p>The original image should be saved at the resolution equal to or greater than the largest image you want to generate in the <code>src/</code> folder. I saved mine as JPG at 100% quality and 2880 pixels wide. It was around 2.5MB.</p><p>First, let’s generate responsive images using the <a href="http://www.andismith.com/grunt-responsive-images/" rel="noopener">grunt-responsive-images</a>plugin. Install it:</p><pre><code>npm install grunt-responsive-images --save-dev</code></pre><p>Now, in the root directory of the project, create an additional file <code>Gruntfile.js</code>:</p><pre><code>touch Gruntfile.js</code></pre><p>This is where we have to configure the plugin.</p><p>Copy and paste the code to the <code>Gruntfile.js</code> and let me walk you through the code:</p><pre><code class="language-js">module.exports = function (grunt) {
grunt.initConfig({
responsive_images: {
dev: {
options: {
engine: "gm",
sizes: [
{ name: "sm", suffix: "_1x", quality: 60, width: 600 },
{ name: "sm", suffix: "_2x", quality: 60, width: 1200 },
{ name: "md", suffix: "_1x", quality: 60, width: 900 },
{ name: "md", suffix: "_2x", quality: 60, width: 1800 },
{ name: "lg", suffix: "_1x", quality: 60, width: 1440 },
{ name: "lg", suffix: "_2x", quality: 60, width: 2880 },
],
},
files: [
{
expand: true,
src: ["**/*.{jpg,png}"],
cwd: "src/",
dest: "dest/",
},
],
},
},
});
grunt.loadNpmTasks("grunt-responsive-images");
grunt.registerTask("default", ["responsive_images"]);
};
</code></pre><p>In <code>options</code>, we set GraphicsMagick as our engine of choice: <code>engine: "gm"</code>. You can also test ImageMagick by changing it to <code>engine: "im"</code>.</p><p>Next, in the <code>sizes</code> array, we have to specify the parameters of the images we want to produce, such as a <code>name</code> that will be appended to the original name, a <code>suffix</code> that will be added to the name as well, a <code>quality</code> and a <code>width</code>.</p><p>The resulting images will have the following naming structure:</p><pre><code class="language-js">original-[name]_[suffix}.jpg</code></pre><p>For example, using the first <code>sizes</code> object, Grunt will generate from the original <code>my-image.jpg</code> the <code>my-image-sm_1x.jpg</code> image at 60% compression level and 600 pixels wide.</p><p>Below the options, we need to list source and destination folders as well as patterns of file names that we want to process.</p><p>To enable the dynamic build of file objects, let’s set the <code>expand</code> attribute to <code>true</code> and define:</p><ul><li><code>cwd</code> — source folder</li><li><code>src</code> — an array of patterns to match. In our case, we want to match any folder (<code>**</code>) inside the source folder and all files with extensions <code>jpg</code> or <code>png</code></li><li><code>dest</code> — destination folder</li></ul><p>The above Grunt task will generate a set of JPG and/or PNG files, depending on the source image file extensions.</p><p>We also want to produce a corresponding set of WebP images.</p><p>We need another plugin to do the job: <code>grunt-cwebp</code>. Let’s install it:</p><pre><code>npm install grunt-cwebp --save-dev</code></pre><p>Append the Gruntfile.js with the following configuration:</p><pre><code class="language-js">module.exports = function (grunt) {
grunt.initConfig({
responsive_images: {
...
},
cwebp: {
dynamic: {
options: {
q: 60,
},
files: [
{
expand: true,
cwd: "dest/",
src: ["**/*.{jpg,png}"],
dest: "dest/",
},
],
},
},
});
grunt.loadNpmTasks("grunt-responsive-images");
grunt.loadNpmTasks("grunt-cwebp");
grunt.registerTask("default", ["responsive_images", "cwebp"]);
};
</code></pre><p>The <code>grunt-cwebp</code> plugin uses the <code>dest/</code> folder as the source of images. We want all the newly produced JPGs to have their WebP siblings and we should place them in the same folder.</p><p>Now, we can process the images:</p><pre><code>grunt</code></pre><p>For every image in the <code>src/</code> folder, Grunt will generate 12 images in all the necessary sizes, pixel densities and in both JPG and WebP format!</p><h3 id="how-to-generate-base64-strings">How to generate base64 strings</h3><p>If you want to generate base64 strings for inlining your images, here is how to do.</p><p>This time, let’s use the Grunt plugin: <code>grunt-base64</code>.</p><p>Create a new project in a separate folder <code>base64-images</code>. Init it with <code>npm</code> and install the local version of Grunt:</p><pre><code>mkdir base64-images
cd base64-images
npm init
npm install grunt --save-dev</code></pre><p>Install the <code>grunt-base64</code> plugin:</p><pre><code>npm install grunt-base64 --save-dev</code></pre><p>In the root directory, create a new <code>images/</code> folder and the <code>Gruntfile.js</code>:</p><pre><code>mkdir images
touch Gruntfile.js</code></pre><p>and copy and paste the code into the <code>Gruntfile.js</code>:</p><pre><code class="language-js">module.exports = function (grunt) {
grunt.initConfig({
base64: {
dev: {
files: {
"images/output.b64": ["images/*.{jpg,png}"],
},
},
},
});
grunt.loadNpmTasks("grunt-base64");
grunt.registerTask("default", ["base64"]);
};
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
