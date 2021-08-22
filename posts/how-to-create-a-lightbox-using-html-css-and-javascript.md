---
card: "/images/default.jpg"
tags: [JavaScript]
description: "A lightbox is a combination of two components, a modal and a "
author: "Milad E. Fahmy"
title: "How to Create a Lightbox Using HTML, CSS, and JavaScript"
created: "2021-08-15T22:50:06+02:00"
modified: "2021-08-15T22:50:06+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-html tag-css ">
<header class="post-full-header">
<h1 class="post-full-title">How to Create a Lightbox Using HTML, CSS, and JavaScript</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/01/nikita-kachanovsky-bLY5JqP_Ldw-unsplash.jpg 300w,
/news/content/images/size/w600/2020/01/nikita-kachanovsky-bLY5JqP_Ldw-unsplash.jpg 600w,
/news/content/images/size/w1000/2020/01/nikita-kachanovsky-bLY5JqP_Ldw-unsplash.jpg 1000w,
/news/content/images/size/w2000/2020/01/nikita-kachanovsky-bLY5JqP_Ldw-unsplash.jpg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/01/nikita-kachanovsky-bLY5JqP_Ldw-unsplash.jpg" alt="How to Create a Lightbox Using HTML, CSS, and JavaScript">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<h3 id="introduction"><strong>Introduction</strong></h3><p>A lightbox is a combination of two components, a <a href="https://en.wikipedia.org/wiki/Modal_window" rel="nofollow">modal</a> and a slide show. Here you will construct a simple lightbox using <code>HTML</code>, <code>CSS</code> and <code>JavaScript</code>.</p><p>The lightbox will be contained in the modal, which will be triggered by some <code>JavaScript</code>, from <a href="https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Event_handlers" rel="nofollow">event handlers</a> in the <code>HTML</code> markup. You will build styles which will provide state with <code>CSS</code> and behavior with <code>JavaScript</code>. You will also find a reference list of the methods you use and other useful tid-bits that are related to this tutorial, at the bottom.</p><h4 id="our-images"><strong>Our Images</strong></h4><p>The images we will be using are being supplied by <a href="https://www.pexels.com/" rel="nofollow">Pexels</a>, a free stock photo gallery that allows you to provide high quality images to their projects fast, free and usually with no attributions needed.</p><h4 id="just-show-me-the-code-"><strong>Just Show Me The Code!</strong></h4><p>A live example can be found <a href="https://codepen.io/rdev-rocks/pen/KXNzvo" rel="nofollow">here - CodePen/Lightbox</a> and a full draft of the code is near the bottom.</p><h3 id="step-1-the-markup"><strong>Step 1. The Markup</strong></h3><p>The markup, or <code>HTML</code>, provides the structure for the lightbox.</p><pre><code class="language-html">&lt;!-- Here is your access point for your user, a preview of the images you wish to display.
You use the onclick="" event handler to execute the methods you will define in the
JavaScript near the bottom --&gt;
&lt;div class="row"&gt;
&lt;div class="col"&gt;
&lt;img src="https://static.pexels.com/photos/385997/pexels-photo-385997.jpeg" onclick="openLightbox();toSlide(1)" class="hover-shadow preview" alt="Toy car on the road." /&gt;
&lt;/div&gt;
&lt;div class="col"&gt;
&lt;img src="https://static.pexels.com/photos/574521/pexels-photo-574521.jpeg" onclick="openLightbox();toSlide(2)" class="hover-shadow preview" alt="Toy car exploring offroad." /&gt;
&lt;/div&gt;
&lt;div class="col"&gt;
&lt;img src="https://static.pexels.com/photos/386009/pexels-photo-386009.jpeg" onclick="openLightbox();toSlide(3)" class="hover-shadow preview" alt="Toy car in the city." /&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;!-- This is your lightbox, it is contained in a modal. Here you provide all the images,
controls, and another set of preview images as the dots. Dots show your user which
image is currently active. Note that you use entities (e.g. &amp;times;), more info on
them at the bottom. --&gt;
&lt;div id="Lightbox" class="modal"&gt;
&lt;span class="close pointer" onclick="closeLightbox()"&gt;&amp;times;&lt;/span&gt;
&lt;div class="modal-content"&gt;
&lt;div class="slide"&gt;
&lt;img src="https://static.pexels.com/photos/385997/pexels-photo-385997.jpeg" class="image-slide" alt="Toy car on the road." /&gt;
&lt;/div&gt;
&lt;div class="slide"&gt;
&lt;img src="https://static.pexels.com/photos/574521/pexels-photo-574521.jpeg" class="image-slide" alt="Toy car exploring offroad." /&gt;
&lt;/div&gt;
&lt;div class="slide"&gt;
&lt;img src="https://static.pexels.com/photos/386009/pexels-photo-386009.jpeg" class="image-slide" alt="Toy car in the city." /&gt;
&lt;/div&gt;
&lt;a class="previous" onclick="changeSlide(-1)"&gt;&amp;#10094;&lt;/a&gt;
&lt;a class="next" onclick="changeSlide(1)"&gt;&amp;#10095;&lt;/a&gt;
&lt;div class="dots"&gt;
&lt;div class="col"&gt;
&lt;img src="https://static.pexels.com/photos/385997/pexels-photo-385997.jpeg" class="modal-preview hover-shadow" onclick="toSlide(1)" alt="Toy car on the road" /&gt;
&lt;/div&gt;
&lt;div class="col"&gt;
&lt;img src="https://static.pexels.com/photos/574521/pexels-photo-574521.jpeg" class="modal-preview hover-shadow" onclick="toSlide(2)" alt="Toy car exploring offroad." /&gt;
&lt;/div&gt;
&lt;div class="col"&gt;
&lt;img src="https://static.pexels.com/photos/386009/pexels-photo-386009.jpeg" class="modal-preview hover-shadow" onclick="toSlide(3)" alt="Toy car in the city." /&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;</code></pre><h3 id="step-2-style-with-css"><strong>Step 2. Style with CSS</strong></h3><p>The <code>CSS</code> provides you with different states for your lightbox. Things like visibility, positioning, and hover effects.</p><p>Your style sheet should look like this:</p><pre><code class="language-css">/* Here you provide a best practice's "reset", read more about it at the bottom! :) */
html {
box-sizing: border-box;
}
*, *:before, *:after {
box-sizing: inherit;
}
body {
margin: 0;
}
/* You define the style of our previews here, you are using flex to display the images
"responsively". */
.preview {
width: 100%;
}
.row {
display: flex;
flex-direction: row;
justify-content: space-between;
}
.row &gt; .col {
padding: 0 8px;
}
.col {
float: left;
width: 25%;
}
/* Now you want to define what the lightbox will look like. Note that you have the display
as none. You don't want it to show until the user clicks on one of the previews.
You will change this display property with JavaScript below. */
.modal {
display: none;
position: fixed;
z-index: 1;
padding: 10px 62px 0px 62px;
left: 0;
top: 0;
width: 100%;
height: 100%;
overflow: auto;
background-color: black;
}
.modal-content {
position: relative;
display: flex;
flex-direction: column;
justify-content: center;
margin: auto;
padding: 0 0 0 0;
width: 80%;
max-width: 1200px;
}
/* Same with your slides, you set the display to none, because you want to choose which
one is shown at a time. */
.slide {
display: none;
}
.image-slide {
width: 100%;
}
.modal-preview {
width: 100%;
}
.dots {
display: flex;
flex-direction: row;
justify-content: space-between;
}
/* You want the previews a little transparent to show that they are "inactive".
You then add an .active or :hover class to animate the selections for your user when
they interact with your controls and clickable content.
*/
img.preview, img.modal-preview {
opacity: 0.6;
}
img.active,
.preview:hover,
.modal-preview:hover {
opacity: 1;
}
img.hover-shadow {
transition: 0.3s;
}
.hover-shadow:hover {
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.close {
color: white;
position: absolute;
top: 10px;
right: 25px;
font-size: 35px;
font-weight: bold;
}
.close:hover,
.close:focus {
color: #999;
text-decoration: none;
cursor: pointer;
}
.previous,
.next {
cursor: pointer;
position: absolute;
top: 50%;
width: auto;
padding: 16px;
margin-top: -50px;
color: white;
font-weight: bold;
font-size: 20px;
transition: 0.6s ease;
border-radius: 0 3px 3px 0;
user-select: none;
-webkit-user-select: none;
}
.next {
right: 0;
border-radius: 3px 0 0 3px;
}
.previous:hover,
.next:hover {
background-color: rgba(0, 0, 0, 0.8);
}</code></pre><h3 id="step-3-javascript"><strong>Step 3. JavaScript</strong></h3><p>Now to business! Your JavaScript should look like this:</p><pre><code class="language-javascript">// Initialize here and run showSlide() to give your lightbox a default state.
let slideIndex = 1;
showSlide(slideIndex);
// You are providing the functionality for your clickable content, which is
// your previews, dots, controls and the close button.
function openLightbox() {
document.getElementById('Lightbox').style.display = 'block';
}
function closeLightbox() {
document.getElementById('Lightbox').style.display = 'none';
};
// Note that you are assigning new values here to our slidIndex.
function changeSlide(n) {
showSlide(slideIndex += n);
};
function toSlide(n) {
showSlide(slideIndex = n);
};
// This is your logic for the light box. It will decide which slide to show
// and which dot is active.
function showSlide(n) {
const slides = document.getElementsByClassName('slide');
let modalPreviews = document.getElementsByClassName('modal-preview');
if (n &gt; slides.length) {
slideIndex = 1;
};
if (n &lt; 1) {
slideIndex = slides.length;
};
for (let i = 0; i &lt; slides.length; i++) {
slides[i].style.display = "none";
};
for (let i = 0; i &lt; modalPreviews.length; i++) {
modalPreviews[i].className = modalPreviews[i].className.replace(' active', '');
};
slides[slideIndex - 1].style.display = 'block';
modalPreviews[slideIndex - 1].className += ' active';
};</code></pre><p>And thats it! Now put all the code together. You should now have a functional lightbox.</p><h3 id="all-the-code"><strong>All The Code</strong></h3><pre><code class="language-html">&lt;body&gt;
&lt;style&gt;
html {
box-sizing: border-box;
}
*, *:before, *:after {
box-sizing: inherit;
}
body {
margin: 0;
}
.preview {
width: 100%;
}
.row {
display: flex;
flex-direction: row;
justify-content: space-between;
}
.row &gt; .col {
padding: 0 8px;
}
.col {
float: left;
width: 25%;
}
.modal {
display: none;
position: fixed;
z-index: 1;
padding: 10px 62px 0px 62px;
left: 0;
top: 0;
width: 100%;
height: 100%;
overflow: auto;
background-color: black;
}
.modal-content {
position: relative;
display: flex;
flex-direction: column;
justify-content: center;
margin: auto;
padding: 0 0 0 0;
width: 80%;
max-width: 1200px;
}
.slide {
display: none;
}
.image-slide {
width: 100%;
}
.modal-preview {
width: 100%;
}
.dots {
display: flex;
flex-direction: row;
justify-content: space-between;
}
img.preview, img.modal-preview {
opacity: 0.6;
}
img.active,
.preview:hover,
.modal-preview:hover {
opacity: 1;
}
img.hover-shadow {
transition: 0.3s;
}
.hover-shadow:hover {
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.close {
color: white;
position: absolute;
top: 10px;
right: 25px;
font-size: 35px;
font-weight: bold;
}
.close:hover,
.close:focus {
color: #999;
text-decoration: none;
cursor: pointer;
}
.previous,
.next {
cursor: pointer;
position: absolute;
top: 50%;
width: auto;
padding: 16px;
margin-top: -50px;
color: white;
font-weight: bold;
font-size: 20px;
transition: 0.6s ease;
border-radius: 0 3px 3px 0;
user-select: none;
-webkit-user-select: none;
}
.next {
right: 0;
border-radius: 3px 0 0 3px;
}
.previous:hover,
.next:hover {
background-color: rgba(0, 0, 0, 0.8);
}
&lt;/style&gt;
&lt;div class="row"&gt;
&lt;div class="col"&gt;
&lt;img src="https://static.pexels.com/photos/385997/pexels-photo-385997.jpeg" onclick="openLightbox();toSlide(1)" class="hover-shadow preview" alt="Toy car on the road." /&gt;
&lt;/div&gt;
&lt;div class="col"&gt;
&lt;img src="https://static.pexels.com/photos/574521/pexels-photo-574521.jpeg" onclick="openLightbox();toSlide(2)" class="hover-shadow preview" alt="Toy car exploring offroad." /&gt;
&lt;/div&gt;
&lt;div class="col"&gt;
&lt;img src="https://static.pexels.com/photos/386009/pexels-photo-386009.jpeg" onclick="openLightbox();toSlide(3)" class="hover-shadow preview" alt="Toy car in the city" /&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;div id="Lightbox" class="modal"&gt;
&lt;span class="close pointer" onclick="closeLightbox()"&gt;&amp;times;&lt;/span&gt;
&lt;div class="modal-content"&gt;
&lt;div class="slide"&gt;
&lt;img src="https://static.pexels.com/photos/385997/pexels-photo-385997.jpeg" class="image-slide" alt="Toy car on the road." /&gt;
&lt;/div&gt;
&lt;div class="slide"&gt;
&lt;img src="https://static.pexels.com/photos/574521/pexels-photo-574521.jpeg" class="image-slide" alt="Toy car exploring offroad." /&gt;
&lt;/div&gt;
&lt;div class="slide"&gt;
&lt;img src="https://static.pexels.com/photos/386009/pexels-photo-386009.jpeg" class="image-slide" alt="Toy car in the city." /&gt;
&lt;/div&gt;
&lt;a class="previous" onclick="changeSlide(-1)"&gt;&amp;#10094;&lt;/a&gt;
&lt;a class="next" onclick="changeSlide(1)"&gt;&amp;#10095;&lt;/a&gt;
&lt;div class="dots"&gt;
&lt;div class="col"&gt;
&lt;img src="https://static.pexels.com/photos/385997/pexels-photo-385997.jpeg" class="modal-preview hover-shadow" onclick="toSlide(1)" alt="Toy car on the road." /&gt;
&lt;/div&gt;
&lt;div class="col"&gt;
&lt;img src="https://static.pexels.com/photos/574521/pexels-photo-574521.jpeg" class="modal-preview hover-shadow" onclick="toSlide(2)" alt="Toy car exploring offroad." /&gt;
&lt;/div&gt;
&lt;div class="col"&gt;
&lt;img src="https://static.pexels.com/photos/386009/pexels-photo-386009.jpeg" class="modal-preview hover-shadow" onclick="toSlide(3)" alt="Toy car in the city" /&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;script&gt;
let slideIndex = 1;
showSlide(slideIndex);
function openLightbox() {
document.getElementById('Lightbox').style.display = 'block';
};
function closeLightbox() {
document.getElementById('Lightbox').style.display = 'none';
};
function changeSlide(n) {
showSlide(slideIndex += n);
};
function toSlide(n) {
showSlide(slideIndex = n);
};
function showSlide(n) {
const slides = document.getElementsByClassName('slide');
let modalPreviews = document.getElementsByClassName('modal-preview');
if (n &gt; slides.length) {
slideIndex = 1;
};
if (n &lt; 1) {
slideIndex = slides.length;
};
for (let i = 0; i &lt; slides.length; i++) {
slides[i].style.display = "none";
};
for (let i = 0; i &lt; modalPreviews.length; i++) {
modalPreviews[i].className = modalPreviews[i].className.replace(' active', '');
};
slides[slideIndex - 1].style.display = 'block';
modalPreviews[slideIndex - 1].className += ' active';
};
&lt;/script&gt;
&lt;/body&gt;</code></pre><h3 id="more-information-"><strong>More Information:</strong></h3><h4 id="html"><strong>HTML</strong></h4><p><a href="https://en.wikipedia.org/wiki/Modal_window" rel="nofollow">Modal</a> - A popup window</p><p><a href="https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Event_handlers" rel="nofollow">Event Handlers</a> - HTML properties that listen for user events.</p><p><a href="https://developer.mozilla.org/en-US/docs/Glossary/Entity" rel="nofollow">Entity</a> - A string that represents a reserved charactor in HTML.</p><h4 id="css"><strong>CSS</strong></h4><p><a href="https://css-tricks.com/box-sizing/" rel="nofollow">box-sizing:</a> - A CSS3 property that controls the way the browser renders content based on height and width.</p><p><a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox" rel="nofollow">Flex-box</a> - A new technology that helps with positioning HTML content in a responsive mannor.</p><p><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/:hover" rel="nofollow">:hover</a> - A pseudo-selector that gets triggered when a user hovers over an element when this class is assigned to it.</p><h4 id="javascript"><strong>JavaScript</strong></h4><p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let" rel="nofollow">let</a> A block-scope variable.</p><p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const" rel="nofollow">const</a> A block-scope constant.</p><p><a href="https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById" rel="nofollow">getElementById()</a> - A document method that returns a reference to an HTML element.</p><p><a href="https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName" rel="nofollow">getElementsByClassName()</a> - A document method that returns an array of references to the html that have matching classes.</p><p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Assignment_Operators" rel="nofollow">+=</a> - an assignment operator which will add numbers or concatenate strings.</p><h4 id="resources-"><strong>Resources:</strong></h4><p><a href="https://codepen.io/rdev-rocks/pen/KXNzvo?editors=1111" rel="nofollow">Live Example</a> - A CodePen that demos the above code.</p><p><a href="https://codepen.io/enxaneta/full/adLPwv" rel="nofollow">Interactive Flex-Box</a> - An interactive CodePen that shows flex-box behavior.</p><p><a href="https://www.pexels.com/" rel="nofollow">Pexels</a> - A free stock photo gallery.</p><p><a href="https://developer.mozilla.org/en-US/" rel="nofollow">MDN</a> - A great place for information about web stuff.</p><p><a href="https://www.w3schools.com/howto/howto_js_lightbox.asp" rel="nofollow">W3School - Lightbox</a> - This code was inspired from here. Thanks W3Schools!</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
