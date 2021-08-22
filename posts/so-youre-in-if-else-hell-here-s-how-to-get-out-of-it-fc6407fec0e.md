---
card: "https://cdn-media-1.freecodecamp.org/images/1*hEbJvltnslRrdEzjWQ7Img.jpeg"
tags: [JavaScript]
description: "If you are from a javascript background you might have heard "
author: "Milad E. Fahmy"
title: "So you’re in if/else hell — here’s how to get out of it"
created: "2021-08-16T11:29:44+02:00"
modified: "2021-08-16T11:29:44+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-design-patterns tag-tech tag-programming tag-technology ">
<header class="post-full-header">
<h1 class="post-full-title">So you’re in if/else hell — here’s how to get out of it</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*hEbJvltnslRrdEzjWQ7Img.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*hEbJvltnslRrdEzjWQ7Img.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*hEbJvltnslRrdEzjWQ7Img.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*hEbJvltnslRrdEzjWQ7Img.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*hEbJvltnslRrdEzjWQ7Img.jpeg" alt="So you’re in if/else hell — here’s how to get out of it">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
let className = '';
if (theme === 'default') {
className = 'default-btn';
} else if (theme === 'primary') {
className = 'primary-btn';
}
return (
&lt;button className={className}&gt;{content}&lt;/button&gt;
);
let className = '';
if (theme === 'default') {
className = rounded ? 'default-btn rounded' : 'default-btn';
} else if (theme === 'primary') {
className = rounded ? 'primary-btn rounded' : 'primary-btn';
}
return (
&lt;button className={className}&gt;{content}&lt;/button&gt;
);
let className = '';
if (theme === 'default') {
className = rounded ? 'default-btn rounded' : 'default-btn';
} else if (theme === 'primary') {
className = rounded ? 'primary-btn rounded' : 'primary-btn';
}
if (hover) {
className = className + ' hover';
}
return (
&lt;button className={className}&gt;{content}&lt;/button&gt;
);
let className = '';
if (theme === 'default') {
className = rounded ? 'default-btn rounded' : 'default-btn';
if (hover) {
className = className + ' hover';
}
} else if (theme === 'primary') {
if (rounded) {
if (hover) {
if (animation) {
className = 'primary-btn rounded hover my-custom-animation';
} else {
className = 'primary-btn rounded hover';
}
} else {
className = 'primary-btn rounded';
}
} else {
if (hover) {
className = 'primary-btn hover';
} else {
className = 'primary-btn';
}
}
}
return (
&lt;button className={className}&gt;{content}&lt;/button&gt;
);
const isThemeDefault = theme === 'default'
const isThemePrimary = theme === 'primary';
const isRounded = rounded === true;
const isHover = hover === true;
const isAnimated = animation === true;
const isPrimaryAnimated = isThemePrimary &amp;&amp; isAnimated;
let className = isThemePrimary ? 'primary-btn' : 'default-btn';
if (isRounded) {
className = `${className} rounded`;
}
if (isHover) {
className = `${className} hover`;
}
if (isPrimaryAnimated) {
className = `${className} animated`;
}
return (
&lt;button className={className}&gt;{content}&lt;/button&gt;
);
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
