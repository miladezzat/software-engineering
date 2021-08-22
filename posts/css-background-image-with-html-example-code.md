---
card: "/images/default.jpg"
tags: [CSS]
description: "What a user sees on a website will impact how good their user"
author: "Milad E. Fahmy"
title: "CSS Background Image – With HTML Example Code"
created: "2021-08-16T10:03:24+02:00"
modified: "2021-08-16T10:03:24+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-css tag-html tag-web-design tag-web-development ">
<header class="post-full-header">
<h1 class="post-full-title">CSS Background Image – With HTML Example Code</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2021/07/kobu-agency-ipARHaxETRk-unsplash.jpg 300w,
/news/content/images/size/w600/2021/07/kobu-agency-ipARHaxETRk-unsplash.jpg 600w,
/news/content/images/size/w1000/2021/07/kobu-agency-ipARHaxETRk-unsplash.jpg 1000w,
/news/content/images/size/w2000/2021/07/kobu-agency-ipARHaxETRk-unsplash.jpg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2021/07/kobu-agency-ipARHaxETRk-unsplash.jpg" alt="CSS Background Image – With HTML Example Code">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Adding images to the background of certain parts of a website is often more visually appealing and interesting than just changing the background-color.</p>
<p>Modern browsers support a variety of image file types like <code>.jpg</code>, <code>.png</code>, <code>.gif</code>, and <code>.svg</code>.</p>
<p>This article explains how to add images to your HTML code and how to then fine-tune them to look better.</p>
<h2 id="backgroundimagesyntax">Background Image Syntax</h2>
<p>The first step is to make sure you create an assets directory (folder) to hold the images you want to use in your project.</p>
<p>For example we can create an <code>images</code> folder in the project we are working on and add an image called <code>sunset.png</code> that we want to use.</p>
<p>The <code>background-image</code> CSS property allows you to then place the image behind any HTML element you wish.</p>
<p>This could either be the whole page (by using the <code>body</code> selector in CSS which targets the <code>&lt;body&gt;</code> element in our HTML), or just a standalone specific part of the page such as a <code>section</code> element like in the example below.</p>
<p>To add a <code>background-image</code> to a section tag in your <code>.css</code> file, write the following code:</p>
<pre><code class="language-css">section {
background-image: url("images/sunset.png");
}
</code></pre>
<p>Let's discuss what's going on here in detail:</p>
<ul>
<li><code>section</code> specifies the tag you want to add the image to.</li>
<li><code>url()</code> is used to tell CSS where our image is located.</li>
<li>Inside the parentheses, <code>"images/sunset.png"</code> is the path to the image. This lets the browser know what URL to pull.</li>
<li>The path in this example is called a <code>relative</code> path which means it is a local file, relative to our project and to our current working directory and is not a web address. To add images we can also use an <code>absolute</code> path, which is a full web address and starts with a domain URL (<code>http://www.</code>).</li>
<li>Using quotes is a good habit but we can omit them, so <code>background-image: url(images/sunset.png)</code> works the same.</li>
<li>Don't forget the semicolon!</li>
</ul>
<h2 id="howtostopbackgroundrepeat">How to Stop Background Repeat</h2>
<p>When you apply a background image to an element, by default it will repeat itself.</p>
<p>If the image is smaller than the tag of which it's the background, it will repeat in order to fill in the tag.</p>
<p>How do we stop this from happening?</p>
<p>The <code>background-repeat</code> property takes in 4 values and we are able to change the direction in which the image repeats, or stop the image from repeating itself  all together.</p>
<pre><code class="language-css">section {
background-repeat: repeat;
}
</code></pre>
<p>This is the default value if we don't give the <code>background-repeat</code> property a value. In this case the image is repeated <strong>both horizontally and vertically</strong> so in <strong>both x-direction and y-direction</strong> respectively until it fills the space.</p>
<p><img src="https://www.freecodecamp.org/news/content/images/2021/07/Screenshot-2021-07-20-at-9.10.06-PM.png" alt="Screenshot-2021-07-20-at-9.10.06-PM"></p>
<pre><code class="language-css">section {
background-repeat: no-repeat;
}
</code></pre>
<p><img src="https://www.freecodecamp.org/news/content/images/2021/07/Screenshot-2021-07-20-at-9.11.39-PM.png" alt="Screenshot-2021-07-20-at-9.11.39-PM"></p>
<p>The <code>no-repeat</code> value stops the image from repeating itself from all directions. The image is only shown once.</p>
<pre><code class="language-css">section {
background-repeat: repeat-y;
}
</code></pre>
<p>This value repeats the image <em>only</em> horizontally on the page. The image is repeated across the page, in the <code>x-direction</code>. The <code>x-direction</code> in math  is from the left to the right.</p>
<pre><code class="language-css">section {
background-repeat: repeat-y;
}
</code></pre>
<p>This value repeats the image <em>only</em> vertically on the page. The image is repeated down the page ,in the <code>y-direction</code>. The <code>y-direction</code> in math is from top to bottom.</p>
<h2 id="howtosetbackgroundposition">How to Set Background Position</h2>
<p>After adding a background image and stopping it from repeating, we are able to further control how it looks within the background of the tag by improving its position.</p>
<p>We'll use the <code>background-position</code> property to do this.</p>
<p>The selector takes in two values. The first one is for the horizontal position, or x-direction (how far across the tag). The second one is for the vertical position, or y-direction (how far down the tag).</p>
<p>The values can be units, like a <strong>pair of pixels</strong>:</p>
<pre><code class="language-css">section {
background-position: 20px 30px;
}
</code></pre>
<p>This will move the image 20px across and 30px down the containing tag.</p>
<p>Instead of pixels we can use a set of keywords like <strong>right, left, top, down, or center</strong> to place the image at the right, left, top, down, or center of the tag.</p>
<pre><code class="language-css">section {
background-position: right center;
}
</code></pre>
<p>This places the image at the right hand side of the center of the tag.</p>
<p><img src="https://www.freecodecamp.org/news/content/images/2021/07/Screenshot-2021-07-21-at-9.02.55-AM.png" alt="Screenshot-2021-07-21-at-9.02.55-AM"></p>
<p>If we wanted to center it both horizontally and vertically, we would do the following:</p>
<pre><code class="language-css">section {
background-position: center center;
}
</code></pre>
<p><img src="https://www.freecodecamp.org/news/content/images/2021/07/Screenshot-2021-07-21-at-9.07.41-AM.png" alt="Screenshot-2021-07-21-at-9.07.41-AM"></p>
<p>To position an image with finer detail, it is worth mentioning that we can use percentages.</p>
<pre><code class="language-css">section {
background-position: 20% 40%;
}
</code></pre>
<p>This positions the image 20% across the tag and 40% down the tag.</p>
<p>So far we have seen values used in combination, but we can also just specify one value like <code>background-position: 20px;</code> or <code>background-position: center; </code> or <code>background-position: 20%;</code>, which applies it to both directions.</p>
<h2 id="howtoresizeabackgroundimage">How to Resize a Background Image</h2>
<p>To control the size of the background image we can use the background-size property.</p>
<p>Again, like the previous properties mentioned, it takes in two values. One for the horizontal (x) size and one for the vertical (y) size.</p>
<p>We can use pixels, like so:</p>
<pre><code class="language-css">section {
background-size: 20px 40px;
/* sizes the image 20px across and 40px down the page */
}
</code></pre>
<p>If we do not know the exact width of the container we are storing the image in, there is a set of specific values we can give the property.</p>
<ul>
<li><code>background-size: cover;</code> resizes the background image so it covers up the whole tag's background space no matter the width of the tag. If the image is too big and has a larger ratio to the tag it is in, this means the image will get stretched and therefore cropped at its edges.</li>
<li><code>background-size: contain;</code> <em>contains</em> the image, as the name suggests. It will make sure the whole image is shown in the background without cropping out any of it. If the image is much smaller than the tag there will be space left empty which will make it repeat to fill it up, so we can use the <code>background-repeat: no-repeat;</code> rule we mentioned earlier.</li>
</ul>
<p>The rule <code>background-size:cover;</code> in this case will crop of parts of the image<br>
<img src="https://www.freecodecamp.org/news/content/images/2021/07/Screenshot-2021-07-21-at-9.18.15-AM.png" alt="Screenshot-2021-07-21-at-9.18.15-AM"></p>
<p>When we change it to <code>background-size:contain;</code> we see that the image shrinks to fit the section tag.</p>
<p><img src="https://www.freecodecamp.org/news/content/images/2021/07/Screenshot-2021-07-21-at-9.18.49-AM.png" alt="Screenshot-2021-07-21-at-9.18.49-AM"></p>
<h2 id="howtousethebackgroundattachmentproperty">How to Use the Background Attachment Property</h2>
<p>With the <code>background-attachment</code> property we can control where the background image is attached, meaning if the image is fixed or not to the browser.</p>
<p>The default value is <code>background-attachment: scroll;</code>, where the background image stays with its tag and follows the natural flow of the page by scrolling up and down as we scroll up and down.</p>
<p>The second value the property can have is <code>background-attachement: fixed;</code>.<br>
This makes the background image stay in the same postion, fixed to the page and fixed on the browser's viewport. This creates a parallax effect which you can see an example of here:</p>
<span>See the Pen <a href="https://codepen.io/deniselemonaki/pen/ZEKyRpp">
</a> by Dionysia Lemonaki (<a href="https://codepen.io/deniselemonaki">@deniselemonaki</a>)
on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<p>A different use case for the <code>background-image</code> property is for telling the browser to create a gradient.</p>
<p>The <code>background-image</code> in this case does not have a URL, but a linear-gradient instead.</p>
<p>The simplest way to do this is to specify the angle. This controls the  direction of the gradient and how to colors will blend. Lastly add two colors that you want blended together in a gradient for the tag's background.</p>
<p>A gradient that goes from top to bottom and from black to white is:</p>
<pre><code class="language-css">section {
background-image: linear-gradient(black,white);
}
</code></pre>
<p>The most common degrees used for gradients are:</p>
<ul>
<li><code>0deg</code> from top to bottom</li>
<li><code>90deg</code> from left to right</li>
<li><code>180deg</code> from bottom to top</li>
<li><code>270deg</code> from right to left</li>
</ul>
<p>The above degrees each correspond with <code>to top</code>, <code>to right</code>, <code>to bottom</code>  and <code>to left</code>, respectively.</p>
<pre><code class="language-css">section{
background-image: linear-gradient(to left,pink,orange);
}
</code></pre>
<span>See the Pen <a href="https://codepen.io/deniselemonaki/pen/poPrPjo">
</a> by Dionysia Lemonaki (<a href="https://codepen.io/deniselemonaki">@deniselemonaki</a>)
on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<pre><code class="language-css">section{
background-image: linear-gradient(to left,#42275a, #734b6d)
}
</code></pre>
<span>See the Pen <a href="https://codepen.io/deniselemonaki/pen/LYyjWwL">
</a> by Dionysia Lemonaki (<a href="https://codepen.io/deniselemonaki">@deniselemonaki</a>)
on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<h2 id="conclusion">Conclusion</h2>
<p>This marks the end of our introduction to the basic syntax of the <code>background-image</code> property.</p>
<p>From here the possibilities are endless and leave room for a lot of creative expression. These effects help the user have a pleasant experience when visiting your website.</p>
<p>I hope this was helpful, and thank you for reading.</p>
<p>Have fun with your designs and happy coding!</p>
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
