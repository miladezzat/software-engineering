---
card: "/images/default.jpg"
tags: [CSS]
description: "If you want to make your website look attractive, you need to"
author: "Milad E. Fahmy"
title: "Learn CSS Basics by Building a Card Component"
created: "2021-08-15T22:48:58+02:00"
modified: "2021-08-15T22:48:58+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-css tag-html ">
<header class="post-full-header">
<h1 class="post-full-title">Learn CSS Basics by Building a Card Component</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2021/02/ep13-cssbasic.jpg 300w,
/news/content/images/size/w600/2021/02/ep13-cssbasic.jpg 600w,
/news/content/images/size/w1000/2021/02/ep13-cssbasic.jpg 1000w,
/news/content/images/size/w2000/2021/02/ep13-cssbasic.jpg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2021/02/ep13-cssbasic.jpg" alt="Learn CSS Basics by Building a Card Component">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
&lt;html lang="en"&gt;
&lt;head&gt;
&lt;meta charset="UTF-8"&gt;
&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
&lt;title&gt;Document&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;/body&gt;
&lt;/html&gt;
&lt;body&gt;
&lt;div id="container"&gt;
&lt;img src="https://images.unsplash.com/photo-1536323760109-ca8c07450053" alt="Lago di Braies"&gt;
&lt;!-- Span with tag class for the tag --&gt;
&lt;span class="tag"&gt;Nature&lt;/span&gt;
&lt;span class="tag"&gt;Lake&lt;/span&gt;
&lt;div class="name"&gt;Lago di Braies&lt;/div&gt;
&lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur sodales morbi dignissim sed diam
pharetra
vitae ipsum odio.&lt;/p&gt;
&lt;button&gt;Read more&lt;/button&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/body&gt;
...
</code></pre><p>With this method, the same stylesheet can be used to apply CSS to multiple pages.</p><p><strong>2. Internal stylesheets</strong></p><p>You can add an internal stylesheet by having CSS inside <code>&lt;style&gt;</code> element that is placed inside the <code>&lt;head&gt;</code> &nbsp;element. For example:</p><pre><code class="language-html">&lt;head&gt;
&lt;style&gt;
/* your style */
&lt;/style&gt;
&lt;/head&gt;
</code></pre><p>This method is useful when you have to work with a system that blocks you from editing external stylesheets.</p><p>One downside to this method is that the styles cannot be applied to multiple pages.</p><p><strong>3. Inline styles (avoid using)</strong></p><p>You can also add style directly to an element by using the <code>style</code> attribute. For example, if you want to change color of the paragraph's text to red:</p><pre><code class="language-html">&lt;p style="color:red;"&gt;paragraph&lt;/p&gt;
width: 50%;
}
background-color: #eaeff1;
font-family: "Raleway", sans-serif;
}
</code></pre><p>But, in order to have the Raleway font work, we need to import the font. We can do so by putting this in the first line of the stylesheet.</p><pre><code class="language-css">@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@500;600&amp;display=swap");
</code></pre><p>To learn more about Google fonts, you can visit <a href="https://fonts.google.com/">fonts.google.com</a>.</p><p>Alright, if the body background color and the font have changed, congratulations, you just added your first CSS 🎉</p><p><strong>2. <code>img</code> element</strong></p><p>At the moment the image is at its original width, but we want it to fit the screen. We can do so by giving it a width of 100%:</p><pre><code class="language-css">img {
width: 100%;
}
</code></pre><p>We also want to give it a rounded border and give it a smaller height than the original:</p><pre><code class="language-css">img {
...
border-radius: 12px;
height: 214px;
}
</code></pre><p>Now you might see the image is distorted. We can fix it by adding <code>object-fit: cover;</code>:</p><pre><code class="language-css">img {
...
object-fit: cover;
}
max-width: 300px;
/* Center the container in middle on horizontal axis */
margin: 0 auto;
/* Add empty space above the container (20% of the view height) */
margin-top: 20vh;
}
/* Change background color */
background-color: white;
/* Add border */
border: 1px solid #bacdd8;
/* Add space between the border and the content */
padding: 8px;
border-radius: 12px;
}
</code></pre><p>Alright, now we are halfway through styling the complete component. Let's quickly style the rest of the elements:</p><pre><code class="language-css">
/* Style div elements that have class equal to tag */
.tag {
padding: 4px 8px;
border: 1px solid #e5eaed;
border-radius: 50px;
font-size: 12px;
font-weight: 600;
color: #788697;
}
/* Style div elements that have class equal to name */
.name {
font-size: 24px;
font-weight: 600;
margin-top: 16px;
}
/* Style p element */
p {
font-size: 14px;
color: #7f8c9b;
line-height: 150%;
}
/* Style button element */
button {
border: none;
padding: 12px 24px;
border-radius: 50px;
font-weight: 600;
color: #0077ff;
background-color: #e0efff;
/* Button is inline-block element by default, it need to have block display for margin: 0 auto; to work */
margin: 0 auto;
display: block;
/* Button is a clickable element, therefore it should have a pointer cursor */
cursor: pointer;
}
/* Add space around the details */
padding: 16px 8px 8px 8px;
}
</code></pre><p><strong>5. Styling the button when focused or hovered</strong></p><p>When the button is focused or hovered, it's good have some indication for usability. You can do so by switching the text and background colors of the button:</p><pre><code class="language-css">/* Add style when button is focused or hovered */
button:focus,
button:hover {
background-color: #0077ff;
color: #e0efff;
}
margin: verticalValue horizontalValue;
padding: verticalValue horizontalValue;
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
