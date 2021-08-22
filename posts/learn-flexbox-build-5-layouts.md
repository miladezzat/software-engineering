---
card: "/images/default.jpg"
tags: [Flexbox]
description: "Here s a practical guide to help you learn CSS Flexbox in 202"
author: "Milad E. Fahmy"
title: "Learn CSS Flexbox by Building 5 Responsive Layouts"
created: "2021-08-15T22:48:48+02:00"
modified: "2021-08-15T22:48:48+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-flexbox tag-css-flex tag-css tag-responsive-design tag-web-design tag-html ">
<header class="post-full-header">
<h1 class="post-full-title">Learn CSS Flexbox by Building 5 Responsive Layouts</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2021/03/FCC--4-.png 300w,
/news/content/images/size/w600/2021/03/FCC--4-.png 600w,
/news/content/images/size/w1000/2021/03/FCC--4-.png 1000w,
/news/content/images/size/w2000/2021/03/FCC--4-.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2021/03/FCC--4-.png" alt="Learn CSS Flexbox by Building 5 Responsive Layouts">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<ul>
<li><a href="#youtube">Flex-Box Architecture</a></li>
<li><a href="#setup">Setup</a></li>
<li><a href="#level-1">Level-1</a></li>
<li><a href="#level-2">Level-2</a></li>
<li><a href="#level-3">Level-3</a></li>
<li><a href="#level-4">Level-4</a></li>
<li><a href="#level-5">Level-5</a></li>
<li><a href="#conclusion">Conclusion</a></li>
</ul>
$padding : 4vh;
$color : #48CAE4;</code></pre><p>Next, define various screen breakpoints in the SCSS map. <strong>Remember,</strong> on our SCSS map, [mobile, tablet, and desktop] are <strong>keys</strong> and the pixels are <strong>values</strong>.</p><pre><code class="language-SCSS">$bp : (
mobile : 480px,
tablet : 768px,
desktop : 1440px,
);</code></pre><p>To save time and code, when defining media queries we'll use <strong>mixins and loop</strong> the breakpoints we defined above. 👆</p><pre><code class="language-scss">@mixin query($display){
@each $key, $value in $bp{
//  defining max-width
@if ($display == $key){
@media (max-width: $value){@content;}
}
}
}</code></pre><p>Now we have to <strong>change the default styles of our browser</strong>. We remove the margin and padding and set the box-sizing to border-box.</p><pre><code class="language-scss">//Changing The Default Settings..
*{
margin:0px;
padding: 0px;
box-sizing: border-box;
// Changing the body here
body{
width: 100%;
min-height: 100vh;
font-family: sans-serif;
font-size: 45px;
}
}
&lt;!--block-1 has 3 children, box-1,box-2,box-3 --&gt;
&lt;div class="block-1"&gt;
&lt;div class="box-1"&gt; A &lt;/div&gt;
&lt;div class="box-2"&gt; B &lt;/div&gt;
&lt;div class="box-3"&gt; C &lt;/div&gt;
&lt;/div&gt;
&lt;!--similar to block-1, values are changed --&gt;
&lt;div class="block-2"&gt;
&lt;div class="box-4"&gt; D &lt;/div&gt;
&lt;div class="box-5"&gt; E &lt;/div&gt;
&lt;div class="box-6"&gt; F &lt;/div&gt;
&lt;/div&gt;
&lt;!--similar to block-1, values are changed --&gt;
&lt;div class="block-3"&gt;
&lt;div class="box-7"&gt; G &lt;/div&gt;
&lt;div class="box-8"&gt; H &lt;/div&gt;
&lt;div class="box-9"&gt; I &lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
</code></pre><h3 id="scss-1">SCSS</h3><p>Now, we're going to style our container class. Remember, to trigger Flexbox and access all its powers, you need to write <strong><code>display: flex;</code> </strong>like this:<strong> </strong></p><pre><code class="language-SCSS">// Style rules for container class
.container{
display: flex;
//to lay .block-* classes in a column
flex-direction: column;
//Setting gap between the .block-* classes
gap: $gap;
// to set some padding &amp; border inside
padding: $padding;
border: 1vh solid $color;
}</code></pre><p>Select all the <strong><code>.block-*</code> </strong>classes and style them together. At the same time, at the bottom, we will define our media query using the <strong>mixin</strong> we created during the setup phase.</p><pre><code class="language-SCSS">[class ^="block-"]{
//To lay the boxes in a row.
display: flex;
flex-direction: row;
//Removing border(1vh+1vh), gap, &amp; padding from the height
// And then equally distributing spaces between the
// .block-* classes by dividing it by 3
height: (100vh-2vh -$gap*2-$padding*2) / 3;
// putting gap between .box-* classes
gap: $gap;
// Style rules for mobile display
@include query (mobile){
flex-direction: column;
// you can pick any value you wish.
height: 500px;
}
}</code></pre><p>Alright then, next select all the <strong><code>.box-*</code> classes</strong> and style them together like this:</p><pre><code class="language-scss">[class ^="box-"]{
// To set the text at center of every box
display: flex;
justify-content: center;
align-items: center;
// To divide spaces among the boxes
// try flex-gap:1; you can see the difference.
// flex-grow: 1; // 1+1+1 =3 =&gt; 1/3 X 100% =&gt; 33.33% each
flex-basis: (100%)/3; // 33.33% each
border : 2px solid black;
border-radius: 10px;
background-color: #c1c1c1;
}
&lt;div class="item-1"&gt; Home &lt;/div&gt;
&lt;div class="item-2"&gt; About &lt;/div&gt;
&lt;div class="item-3"&gt; Services &lt;/div&gt;
&lt;div class="item-4"&gt; Contact &lt;/div&gt;
&lt;/div&gt;
</code></pre><h3 id="scss-2">SCSS</h3><p>Here are the style rules for the <strong>container class </strong>for level-2. At the bottom, we will set up a media query using the mixin. &nbsp;</p><pre><code class="language-scss">.container{
font-size: 35px;
display: flex;
//To set orientation of the items
flex-direction: row;
// To distribute available space
justify-content: space-evenly;
padding: $padding;
border : 1vh solid $color;
// style rules starts from Tablet Screens
@include query(tablet){
height : 100vh;
//Changing orientation of the items
flex-direction: column;
align-items: center;
//Setting gap for items Vertically
gap: $gap
}
}
&lt;div class="block-1"&gt; Left &lt;/div&gt;
&lt;div class="block-2"&gt; Right &lt;/div&gt;
&lt;/div&gt;
</code></pre><h3 id="scss-3">SCSS</h3><p>The Style rules of the <strong>container class</strong> with the media query mixin are included at the bottom for level-3:</p><pre><code class="language-SCSS">.container{
display: flex;
flex-direction: row;
gap: $gap;
padding: $padding;
// Style Rules for Mobile Display
@include query(mobile){
flex-direction: column;
}
}</code></pre><p>Here, we select and style all <strong><code>.block-*</code> classes</strong> along with the media query for mobile display:</p><pre><code class="language-scss">[class ^="block-"]{
//To put the left, right text at center
display: flex;
justify-content: center;
align-items: center;
border : 4px solid $color;
//Setting height of each block
height: 100vh -$padding*2;
// Style Rules for Mobile Display
@include query(mobile){
height: 50vh -$padding*2;
}
}</code></pre><p>Now we individually target the block-1 and block-2 classes. We also change the flex-grow value in order to distribute screen space.</p><pre><code class="language-scss">// Style Rules Left Block
.block-1{
//will occupy 20% of the Available width
flex-grow: 2;
}
// Style Rules Right Block
.block-2{
//will occupy 80% of the Available width
flex-grow: 8;
}
&lt;div class="block-1"&gt;
&lt;div class="box-1"&gt; A &lt;/div&gt;
&lt;/div&gt;
&lt;div class="block-2"&gt;
&lt;div class="box-2"&gt; B &lt;/div&gt;
&lt;div class="box-3"&gt; E &lt;/div&gt;
&lt;/div&gt;
&lt;div class="block-3"&gt;
&lt;div class="box-4"&gt; C &lt;/div&gt;
&lt;div class="box-5"&gt; D &lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
</code></pre><h3 id="scss-4">SCSS</h3><p>Style the container class like this:</p><pre><code class="language-SCSS">.container {
display: flex;
flex-direction: column;
padding: $padding;
gap: $gap;
}</code></pre><p>Next, select and style all the <strong><code>block-*</code> classes</strong> together along with the media query mixin at the bottom for mobile devices:</p><pre><code class="language-SCSS">[class ^="block-"]{
display: flex;
flex-direction: row;
gap: $gap;
// Removing Padding, Gap &amp; divide by 3
height: (100vh -$gap*2 -$padding*2)/3;
// Style Rules for Mobile Version
@include query(mobile){
flex-direction: column;
}
}</code></pre><p>Now select and style all the <strong><code>box-*</code> classes</strong> together:</p><pre><code class="language-SCSS">[class ^="box-"]{
// To place the letter at center
display: flex;
justify-content: center;
align-items: center;
// Border, Border-radius &amp; background-color
border : 1vh solid $color;
border-radius: 10px;
background-color: #c1c1c1;
}</code></pre><p>Now, we'll individually target the boxes and <strong>use flex-basis to distribute screen space.</strong></p><pre><code class="language-SCSS">//A
.box-1{
flex-basis: 100%;
}
//B &amp; D
.box-2, .box-5{
flex-basis: 70%;
}
//E  &amp; C
.box-3,.box-4{
flex-basis: 30%
}</code></pre><p>Finally, we will include the media query mixin for the mobile version. </p><pre><code class="language-scss">// Style Rules for Mobile Version
@include query(mobile){
.block-2{
height: (100vh*2)/3; // 66.66vh
}
.block-3{
flex-direction: row;
}
//   Selecting B, E, C, D
.box-2,.box-3,.box-4,.box-5{
flex-basis: 50%;
}
}
&lt;div class="block-1"&gt;
&lt;div class="box-1"&gt; A &lt;/div&gt;
&lt;/div&gt;
&lt;div class="block-2"&gt;
&lt;div class="box-2"&gt; B &lt;/div&gt;
&lt;div class="box-3"&gt; C &lt;/div&gt;
&lt;div class="box-4"&gt; D &lt;/div&gt;
&lt;/div&gt;
&lt;div class="block-3"&gt;
&lt;div class="box-5"&gt; E &lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
</code></pre><h3 id="scss-5">SCSS</h3><p>First, change the <strong>container class styles</strong> like this:</p><pre><code class="language-SCSS">.container{
display: flex;
flex-direction: column;
gap: $gap;
padding: $padding;
}</code></pre><p>Then, target and style all <strong><code>block-*</code> classes</strong> together.</p><pre><code class="language-SCSS">// Style rules of all .block-*
[class ^="block-"]{
display: flex;
flex-direction: row;
gap: $gap;
}</code></pre><p>Next, target and style all <strong><code>box-*</code> classes</strong> together.</p><pre><code class="language-SCSS">// Style rules of all .box-*
[class ^="box-"]{
display: flex;
justify-content: center;
align-items: center;
border : 1vh solid $color;
border-radius: 10px;
}</code></pre><p>Then individually target the boxes and <strong>use flex-basis to distribute screen space.</strong></p><pre><code class="language-SCSS">// Defining A &amp; E Together
.box-1,.box-5{
flex-basis: 100%;
height: 20vh;
}
// Defining C here
.box-3{
flex-basis: 60%;
//   Removing Gap &amp; padding
height: 60vh -$gap*2-$padding*2;
}
// Defining B &amp; D Together
.box-2,.box-4{
flex-basis: 20%;
}</code></pre><p>Lastly, include the media query mixin for the mobile version. Notice that we are <strong>hiding box-2</strong> for the mobile version.</p><pre><code class="language-scss">// Media query for mobile Screen
@include query(mobile){
.block-2{
flex-direction: column;
height: 60vh;
}
// Hiding our B block
.box-2{
display: none;
}
// Increasing Height of C
.box-3{
flex-basis: 80%;
}
<a href="https://www.freepik.com/free-vector/cute-cats-set-funny-character-cartoon-illustration_12566246.htm#page=3&amp;position=2">Kitty with duck</a><br>
<a href="https://www.freepik.com/free-vector/set-cute-rabbit-with-duck-cartoon-illustration_12573651.htm#page=3&amp;position=41">Cute Rabbit</a><br>
<a href="https://www.freepik.com/free-vector/cute-bear-character-cartoon-illustration_12341164.htm#page=1&amp;position=40#&amp;position=40">Cute Bear</a></p>
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
