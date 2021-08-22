---
card: "https://cdn-media-1.freecodecamp.org/images/1*0ugZlIdc2z-kl8O7Pjmq_Q.png"
tags: [Web Development]
description: "by Petr Gazarov"
author: "Milad E. Fahmy"
title: "Text input highlight, TripAdvisor style"
created: "2021-08-16T10:20:45+02:00"
modified: "2021-08-16T10:20:45+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-web-development tag-react tag-javascript tag-software-development tag-css ">
<header class="post-full-header">
<h1 class="post-full-title">Text input highlight, TripAdvisor style</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*0ugZlIdc2z-kl8O7Pjmq_Q.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*0ugZlIdc2z-kl8O7Pjmq_Q.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*0ugZlIdc2z-kl8O7Pjmq_Q.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*0ugZlIdc2z-kl8O7Pjmq_Q.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*0ugZlIdc2z-kl8O7Pjmq_Q.png" alt="Text input highlight, TripAdvisor style">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
See the Pen <a href='https://codepen.io/petrgazarov/pen/JyXvzB/'>Tripadvisor input highlight</a> by Petr Gazarov
(<a href='https://codepen.io/petrgazarov'>@petrgazarov</a>) on <a href='https://codepen.io'>CodePen</a>.
render() {
return (
&lt;div className='input-wrapper'&gt;
&lt;input
placeholder='Search...'
spellCheck={false}
/&gt;
&lt;/div&gt;
);
}
}
ReactDOM.render(
&lt;App /&gt;,
document.getElementById('root')
);</code></pre><p>Add some CSS to it:</p><pre><code class="language-scss">$input-font-size: 30px;
$input-line-height: 70px;
$font-family: Roboto Slab, sans-serif;
body {
background-color: #222222;
}
.input-wrapper {
width: 500px;
margin: 50px auto;
}
input {
height: 60px;
width: 100%;
min-width: 100%;
padding: 0;
border-radius: 0;
line-height: $input-line-height;
background-color: transparent;
color: white;
font-size: $input-font-size;
border: none;
outline: none;
border-bottom: 3px solid #333333;
font-family: $font-family;
render() {
return (
&lt;div className='input-wrapper'&gt;
&lt;input
placeholder='Search...'
spellCheck={false}
value='basic input, bottom border'
/&gt;
&lt;span className='input-highlight'&gt;
basic input, bottom border
&lt;/span&gt;
&lt;/div&gt;
);
}
}</code></pre><p>Add the following CSS rules for <code>input-highlight</code></p><p><strong>Note:</strong> we use SCSS variables here to make sure the <code>font</code> properties are the same between <code>input</code> and <code>span</code>:</p><pre><code class="language-scss">.input-highlight {
font-size: $input-font-size;
line-height: $input-line-height;
font-family: $font-family;
max-width: 100%;
font-size: $input-font-size;
line-height: $input-line-height;
font-family: $font-family;
max-width: 100%;
border-top: 3px solid white;
position: absolute;
left: 0;
bottom: 0;
height: 0;
}
.input-wrapper {
width: 500px;
margin: 50px auto;
position: relative;
constructor() {
super();
this.state = {
inputValue: ''
};
this.onInputChange = this.onInputChange.bind(this);
}
onInputChange(e) {
const { value } = e.target;
this.setState({
inputValue: value
});
}
render() {
const { inputValue } = this.state;
return (
&lt;div className='input-wrapper'&gt;
&lt;input
onChange={this.onInputChange}
placeholder='Search...'
value={inputValue}
spellCheck={false}
/&gt;
&lt;span className='input-highlight'&gt;
{ inputValue.replace(/ /g, "\u00a0") }
&lt;/span&gt;
&lt;/div&gt;
);
}
}</code></pre><p>The <code>.replace(/ /g, "\u00a0")</code> part is necessary for React to deal with spaces properly.</p><p>Then, hide the span by adding the following lines to the<code>input-highlight</code> CSS selector:</p><pre><code class="language-scss">color: transparent;
user-select: none;
height: 60px;
width: 100%;
min-width: 100%;
padding: 0;
border-radius: 0;
line-height: $input-line-height;
background-color: transparent;
color: white;
font-size: $input-font-size;
border: none;
outline: none;
border-bottom: 3px solid #333333;
font-family: $font-family;
&amp;:focus {
+ .input-highlight {
border-top: 3px solid #fbc91b;
}
}
}</code></pre><p>Thanks for sticking around! If you like this post, share it with more people by recommending it.</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
