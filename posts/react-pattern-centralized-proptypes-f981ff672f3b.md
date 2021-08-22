---
card: "https://cdn-media-1.freecodecamp.org/images/1*fjBw8m5BiLqjW9BHfmySfg.jpeg"
tags: [JavaScript]
description: "There are three popular ways to handle types in React: PropTy"
author: "Milad E. Fahmy"
title: "React Pattern: Centralized PropTypes"
created: "2021-08-16T10:20:33+02:00"
modified: "2021-08-16T10:20:33+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-web-development tag-react tag-programming tag-web-design ">
<header class="post-full-header">
<h1 class="post-full-title">React Pattern: Centralized PropTypes</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*fjBw8m5BiLqjW9BHfmySfg.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*fjBw8m5BiLqjW9BHfmySfg.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*fjBw8m5BiLqjW9BHfmySfg.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*fjBw8m5BiLqjW9BHfmySfg.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*fjBw8m5BiLqjW9BHfmySfg.jpeg" alt="React Pattern: Centralized PropTypes">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
</figure><p>Since PropTypes provide type warnings at runtime, it’s helpful to be as specific as possible.</p><ul><li>Component accepts an object? Declare the object’s shape.</li><li>Prop only accepts a specific list of values? Use oneOf.</li><li>Array should contain numbers? Use arrayOf.</li><li>You can even declare your own types. <a href="https://github.com/airbnb/prop-types" rel="noopener">AirBnB offers many additional PropTypes</a>.</li></ul><p>Here’s a PropType example:</p><pre><code class="language-js">UserDetails.propTypes = {
user: PropTypes.shape({
id: PropTypes.number.isRequired,
firstName: PropTypes.string.isRequired,
lastName: PropTypes.string.isRequired,
role: PropTypes.oneOf(['user','admin'])
};</code></pre><p>In real apps with large objects, this quickly leads to a lot of code. That’s a problem, because <strong>in React, you’ll often pass the same object to multiple components</strong>. Repeating these details in multiple component files breaks the <a href="https://en.wikipedia.org/wiki/Don%27t_repeat_yourself" rel="noopener">DRY principle</a> (don’t repeat yourself). Repeating yourself creates a maintenance problem.</p><p>The solution? <strong>Centralize your PropTypes</strong>.</p><h4 id="here-s-how-to-centralize-proptypes">Here’s How to Centralize PropTypes</h4><p>I prefer centralizing PropTypes in /types/index.js.</p><p>I’m using named imports on line 2 to shorten the declarations. ?</p><p>And here’s how I use the PropType I declared above:</p><pre><code class="language-js">// types/index.js
import { shape, number, string, oneOf } from 'prop-types';
export const userType = shape({
id: number,
firstName: string.isRequired,
lastName: string.isRequired,
company: string,
role: oneOf(['user', 'author']),
address: shape({
id: number.isRequired,
street: string.isRequired,
street2: string,
city: string.isRequired,
state: string.isRequired,
postal: number.isRequired
});
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
