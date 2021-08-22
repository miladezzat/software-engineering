---
card: "https://cdn-media-1.freecodecamp.org/images/0*BKMwiv00w7wdMbnQ"
tags: [CSS]
description: "I remember as a child, every time I’d walk up to a bakery, I’"
author: "Milad E. Fahmy"
title: "Sass — a preprocessor for your web garnishes"
created: "2021-08-16T10:12:48+02:00"
modified: "2021-08-16T10:12:48+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-css tag-sass tag-design tag-web-development tag-ux-design ">
<header class="post-full-header">
<h1 class="post-full-title">Sass — a preprocessor for your web garnishes</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/0*BKMwiv00w7wdMbnQ 300w,
https://cdn-media-1.freecodecamp.org/images/0*BKMwiv00w7wdMbnQ 600w,
https://cdn-media-1.freecodecamp.org/images/0*BKMwiv00w7wdMbnQ 1000w,
https://cdn-media-1.freecodecamp.org/images/0*BKMwiv00w7wdMbnQ 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/0*BKMwiv00w7wdMbnQ" alt="Sass — a preprocessor for your web garnishes">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
$h1-height    : 50px;
h1{
color  : $h1-color;
height : $h1-height;
$h1-font    : 50px;
$div-width  : 500px;
div{
width: $div-width;
}
h1{
color :  $h1-color;
height:  $h1-font;
padding     :  $div-width / 10;
}</code></pre><h3 id="mixins">Mixins</h3><p>Mixins are like abstract base classes. Mixins are handy to group related properties. Once created, these mixins can be reused in the rest of the style blocks. Moreover, you can even pass variables. Confusing? Let’s take an example.</p><p>You must have noticed that creating a style for border-radius is always quite messy. For cross-browser support, we must use vendor-specific properties. However, with mixins, it can be super easy. Let’s see it happen.</p><pre><code>@mixin border-radius($radius){
-webkit-border-radius   : $radius;
-moz-border-radius: $radius;
-ms-border-radius : $radius;
border-radius     : $radius;
}
div{
width    : $div-width;
border   : 2px solid grey;
@include border-radius(20px);
}</code></pre><p>Here we used the <code>@mixin</code> directive to define a mixin named <code>border-radius</code>. This mixin contains all the possible properties to set the radius of a border. We also passed a parameter to this mixin. Whenever you need to set the radius of an element, include this mixin with the <code>@include</code> keyword.</p><p>Compile the script once again to generate the CSS. How does it look now?</p><pre><code>//Processed CSS output
div {
width: 500px;
border: 2px solid grey;
-webkit-border-radius: 20px;
-moz-border-radius: 20px;
-ms-border-radius: 20px;
border-radius: 20px;
}</code></pre><h3 id="nesting">Nesting</h3><p>HTML elements have a logical tree-like structure with nested elements. To write structured CSS selectors, CSS should also follow some logical nesting. Yet, CSS does not support nesting.</p><p>Since you have Sass on your machine, writing nested CSS selectors is a piece of cake.</p><pre><code>div{
&gt;h1{
color: blue;
&amp;:hover{
color: greenyellow;
}
}
}</code></pre><p>Here we used two combinators, <code>&amp;</code>gt; a<code>n</code>d &amp;. The purpose of a combinator is to explain the relationship between the elements. Our example will apply blue color to a<code>ll</code> h1 children of<code> a </code>div element. Another selector is the parent select<code>o</code>r &amp;. Use this selector for pseudo-classes like hover, focus, and active.</p><p>Compile once again to see the generated CSS blocks.</p><pre><code>//Processed CSS output
div h1 {
color: blue;
}
div h1:hover {
color: greenyellow;
padding: 16px 8px;
border: none;
font-size: 18px;
}
.save{
@extend %common-button;
background-color: blue;
color: white;
}
.cancel{
@extend %common-button;
background-color: goldenrod;
color: white;
h1{
color:blue;
}</code></pre><p>Use the <code>@import</code> directive to include a partial file in the root Sass script.</p><h3 id="loop">Loop</h3><p>Iteration is one of the most frequently used programming mechanisms. Sass script allows you to iterate over variables. You can use various directives like <code>@for</code>, <code>@each</code> and <code>@while.</code></p><pre><code class="language-css">$totalButton: 2;
@for $i from 1 through $totalButton{
.button-#{$i} {
width: 50px * $i;
height: 120px / $i;
}
}</code></pre><p>The generated CSS block will have two classes with different styles.</p><pre><code class="language-css">//Processed CSS output
.button-1 {
width: 50px;
height: 120px; }
.button-2 {
width: 100px;
height: 60px; }</code></pre><h3 id="avoid-repeating-use-a-food-processor">Avoid repeating — use a food processor</h3><p>A food processor is a kitchen appliance used to facilitate repetitive tasks in the preparation of food.</p><p>We have used a Node.js package for compiling Sass files. It can be very annoying if you have to compile every time you make a change in the Sass script.</p><p>There is a fancy way to avoid repetitive compiling: a task<strong> </strong>runner.<strong> </strong>Visual Studio Code has a built-in task runner, but you can use any task runner of your choice. <a href="https://gulpjs.com/" rel="noopener">Gulp </a>is another popular task runner. For compiling Sass script with Gulp, you would need <a href="https://www.npmjs.com/package/gulp-sass" rel="noopener">gulp sass compiler</a> instead.</p><p><strong>Warning! </strong>Sass is only a development tool. Avoid shipping any library or file associated with Sass. You would never need them on a production server.</p><h3 id="what-s-next">What’s next</h3><p>We’ve learned how to use preprocessors to create efficient and maintainable CSS blocks. We have seen various Sass features with examples. For more in-depth knowledge, jump to the official <a href="https://sass-lang.com/guide" rel="noopener">website</a>.</p><p>I have also created a <a href="https://github.com/SinghChandrabhan/SassSample" rel="noopener">sample</a> project. Go ahead, clone the project and start playing.</p>
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
