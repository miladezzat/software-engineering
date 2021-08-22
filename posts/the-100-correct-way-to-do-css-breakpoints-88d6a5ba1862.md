---
card: "https://cdn-media-1.freecodecamp.org/images/1*7YeOvzoYgUEDJdfQy2ERXg.png"
tags: [CSS]
description: "by David Gilbertson"
author: "Milad E. Fahmy"
title: "The 100% correct way to do CSS breakpoints"
created: "2021-08-16T10:26:54+02:00"
modified: "2021-08-16T10:26:54+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-css tag-web-development tag-tech tag-web-design tag-responsive-design ">
<header class="post-full-header">
<h1 class="post-full-title">The 100% correct way to do CSS breakpoints</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*7YeOvzoYgUEDJdfQy2ERXg.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*7YeOvzoYgUEDJdfQy2ERXg.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*7YeOvzoYgUEDJdfQy2ERXg.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*7YeOvzoYgUEDJdfQy2ERXg.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*7YeOvzoYgUEDJdfQy2ERXg.png" alt="The 100% correct way to do CSS breakpoints">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
@media (max-width: 599px) { @content; }
}
@mixin for-tablet-portrait-up {
@media (min-width: 600px) { @content; }
}
@mixin for-tablet-landscape-up {
@media (min-width: 900px) { @content; }
}
@mixin for-desktop-up {
@media (min-width: 1200px) { @content; }
}
@mixin for-big-desktop-up {
@media (min-width: 1800px) { @content; }
}
// usage
.my-box {
padding: 10px;
@include for-desktop-up {
padding: 20px;
}
}</code></pre><p>Note that I’m forcing the developer to specify the <code>-up</code> or <code>-only</code> suffix.</p><blockquote>Ambiguity breeds confusion.</blockquote><p>An obvious criticism might be that this doesn’t handle custom media queries. Well good news, everybody. If you want a custom media query, write a custom media query. (In practice, if I needed more complexity than the above I’d cut my losses and run into the loving embrace of <a href="http://susydocs.oddbird.net/en/latest/toolkit/#breakpoint" rel="noopener">Susy</a>’s toolkit.)</p><p>Another criticism might be that I’ve got eight mixins here. Surely a single mixin would be the sane thing to do, then just pass in the required size, like so:</p><pre><code class="language-scss">@mixin for-size($size) {
@if $size == phone-only {
@media (max-width: 599px) { @content; }
} @else if $size == tablet-portrait-up {
@media (min-width: 600px) { @content; }
} @else if $size == tablet-landscape-up {
@media (min-width: 900px) { @content; }
} @else if $size == desktop-up {
@media (min-width: 1200px) { @content; }
} @else if $size == big-desktop-up {
@media (min-width: 1800px) { @content; }
}
}
// usage
.my-box {
padding: 10px;
@include for-size(desktop-up) {
padding: 20px;
}
}</code></pre><p>Sure, that works. But you won’t get compile-time errors if you pass in an unsupported name. And to pass in a sass variable means exposing 8 variables just to pass to a switch in a mixin.</p><p>Not to mention the syntax <code>@include for-desktop-up {...}</code> is totes more pretty than <code>@include for-size(desktop-up) {...}</code>.</p><p>A criticism of both these code snippets might be that I’m typing out 900px twice, and also 899px. Surely I should just use variables and subtract 1 when needed.</p><p>If you want to do that, go bananas, but there are two reasons I wouldn’t:</p><ol><li>These are not things that change frequently. These are also not numbers that are used anywhere else in the code base. No problems are caused by the fact that they <em>aren’t </em>variables — unless you want to expose your Sass breakpoints to a script that injects a JS object with those variables into your page.</li><li>The syntax is <em>nasty</em> when you want to turn numbers into strings with Sass. Below is the price you pay for believing that repeating a number twice is the worst of all evils:</li></ol><pre><code class="language-scss">@mixin for-size($range) {
$phone-upper-boundary: 600px;
$tablet-portrait-upper-boundary: 900px;
$tablet-landscape-upper-boundary: 1200px;
$desktop-upper-boundary: 1800px;
@if $range == phone-only {
@media (max-width: #{$phone-upper-boundary - 1}) { @content; }
} @else if $range == tablet-portrait-up {
@media (min-width: $phone-upper-boundary) { @content; }
} @else if $range == tablet-landscape-up {
@media (min-width: $tablet-portrait-upper-boundary) { @content; }
} @else if $range == desktop-up {
@media (min-width: $tablet-landscape-upper-boundary) { @content; }
} @else if $range == big-desktop-up {
@media (min-width: $desktop-upper-boundary) { @content; }
}
}
// usage
.my-box {
padding: 10px;
@include for-size(desktop-up) {
padding: 20px;
}
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
