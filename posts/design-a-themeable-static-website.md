---
card: "/images/default.jpg"
tags: [Web Design]
description: A while ago I wanted to create a dark theme for my personal s
author: "Milad E. Fahmy"
title: "How to Create a Theme-able Static Website"
created: "2021-08-15T19:27:15+02:00"
modified: "2021-08-15T19:27:15+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-web-design tag-ux-design tag-static-site-generators tag-javascript ">
<header class="post-full-header">
<h1 class="post-full-title">How to Create a Theme-able Static Website</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2021/02/20210207_172754_0000-1.png 300w,
/news/content/images/size/w600/2021/02/20210207_172754_0000-1.png 600w,
/news/content/images/size/w1000/2021/02/20210207_172754_0000-1.png 1000w,
/news/content/images/size/w2000/2021/02/20210207_172754_0000-1.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2021/02/20210207_172754_0000-1.png" alt="How to Create a Theme-able Static Website">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>A while ago I wanted to create a dark theme for my <a href="https://spruce.com.ng">personal site</a>. So I did some clicking around to find out the most suitable and <strong>clean</strong> way to do this.</p>
<p>I read <a href="https://mxb.dev/blog/color-theme-switcher">Max Bock's article on creating a custom theme</a>, where he explained the process quite clearly. He also really went super pro (with TEN different color schemes).</p>
<p>But for my case I wanted more. I wanted users to be able to change the color scheme to the different options provided. </p>
<p>I also wanted them to be able to change the font size. This is because I had a fixed header on my site which was kind of great, but on small mobile devices it took up quiet a lot of space – not great for UX design, right? So I also gave users the ability to turn off that fixed header. </p>
<figcaption>Spruce.com.ng Theme-able static site</figcaption>
</figure>
<p>You can find a live preview of this on my personal site <a href="https://spruce.com.ng">spruce.com.ng</a>. You can also copy the source code <a href="#copy-code">here</a> to save you some read time. </p>
<h2 id="what-i-wanted-to-do">What I Wanted to Do &nbsp; </h2>
<ol>
<li>Ask users their preferred color scheme, font size, and header type (fixed or static)</li>
<li> Collect user choices </li>
<li>Save them in localStorage</li>
<li>Get them from localStorage and show them to the user immediately on page reload, if they switch tabs and come back, and if they close their browser and come back after a week or month, until they clear their browser storage</li>
</ol>
<h2 id="how-i-created-the-theme">How I Created the Theme &nbsp; </h2>
<p>In 11ty (the static site generator I'm using) you can create a JSON file in the <code>_data</code> folder. You can access the data globally in your template (Jekyll does this too). It's likely that your preferred static site generator (SSG) can do the same. </p>
[
{
"id": "default",
"colors": {
"text": "#222126",
"text-dark": "#777;",
"border": "rgba(0,0,0,.1)",
"primary": "#665df5",
"secondary": "#6ad1e0",
"primary-dark": "#382cf1",
"bg": "#ffffff",
"bg-alt": "#f8f8f8",
"overlay": "rgba(255, 255, 255, .4)"
}
},
... other color schemes
]
</code></pre>
<h2 id="how-to-generate-the-css">How to Generate the CSS</h2>
<p>To use the data file, create a file called <strong><code>theme.css.liquid</code></strong> and give it a permalink where you want the CSS file to output to.</p>
---
permalink: /css/theme.css
---
// when no theme is selected
// use default theme
:root {
--text: {{ themes[0].colors.text }};
--text-dark: {{ themes[0].colors.text-dark }};
--border: {{ themes[0].colors.border }};
--primary: {{ themes[0].colors.primary }};
--secondary: {{ themes[0].colors.secondary }};
--primary-dark: {{ themes[0].colors.primary-dark }};
--bg: {{ themes[0].colors.bg }};
--bg-alt: {{ themes[0].colors.bg-alt }};
}
// if user preferred color scheme is dark
// use the dark theme
@media(prefers-color-scheme: dark) {
:root {
--text: {{ themes[1].colors.text }};
--text-dark: {{ themes[1].colors.text-dark }};
--border: {{ themes[1].colors.border }};
--primary: {{ themes[1].colors.primary }};
--secondary: {{ themes[1].colors.secondary }};
--primary-dark: {{ themes[1].colors.primary-dark }};
--bg: {{ themes[1].colors.bg }};
--bg-alt: {{ themes[1].colors.bg-alt }};
}
}
// generate the theme css from the data file
// here we use a for loop
// to iterate over all the themes in our _data/themes.json
// and output them as plain css
{% for theme in themes %}
[data-theme="{{ theme.id }}"] {
--text: {{ theme.colors.text }};
--text-dark: {{ theme.colors.text-dark }};
--border: {{ theme.colors.border }};
--primary: {{ theme.colors.primary }};
--secondary: {{ theme.colors.secondary }};
--primary-dark: {{ theme.colors.primary-dark }};
--bg: {{ theme.colors.bg }};
--bg-alt: {{ theme.colors.bg-alt }};
}
{% endfor %}
</code></pre>
<p>Notice that I'm using <strong>themes[0].colors.text</strong> because my default theme is the first one on the list. It has an index of 0, so also my dark theme has an index of 1.</p>
<p>In <strong>Jekyll</strong> you can output liquid in CSS by just adding empty front matter at the top of the file.</p>
---
---
// your liquid in css goes here
</code></pre>
<p>I'm sure your favourite static site generator provides a similar way to output liquid in a CSS file. You can also handcode all this if you are just writing plain HTML and CSS without a SSG.</p>
<h2 id="how-to-use-the-css-in-your-site">How to Use the CSS in Your Site</h2>
<p>If you are reading this, then I assume that you already know how to work with CSS custom properties. So I won't go in depth into that here.</p>
// color: var(--text);
body {
background: var(--bg);
color: var(--text);
}
h1,h2 {
color: var(--text-dark)
}
// i also had default font-size and margin-top properties set
// i added this to the :root in css
:root {
--font-size: 18px;
--position: fixed;
--top-margin: 96px;
}
</code></pre>
<p>You just have to change every bit of color on your site to the custom properties you have generated.</p>
<h2 id="how-to-generate-the-html">How to Generate the HTML</h2>
<p>Now let's provide a UI to allow users to change the font size, header type, and color scheme of our site. Mine is a bit simple, but you can take yours further. I'm just explaining the concept here.</p>
// create the font buttons
// I gave each button a value
// I want to get the value and save it in local storage
&lt;section class="theme-section"&gt;
&lt;div class="theme-btn-wrapper"&gt;
&lt;button class="btn btn--small btn--border js-font-btn" value="16"&gt;16px&lt;/button&gt;
&lt;button class="btn btn--small btn--border js-font-btn" value="18"&gt;18px&lt;/button&gt;
&lt;button class="btn btn--small btn--border js-font-btn" value="20"&gt;20px&lt;/button&gt;
&lt;button class="btn btn--small btn--border js-font-btn" value="22"&gt;22px&lt;/button&gt;
&lt;/div&gt;
&lt;/section&gt;
// Create the toggle button
// To turn On &amp; Off
// The fixed header
// The **sr-only** is used to hide the text visually
// while keeping accessibilty in mind
// note the **role="switch"** nd aria-checked
// they are what turns the button to a On and Off switch
&lt;div class="check-wrapper"&gt;
&lt;span id="btn-label" class="sr-only"&gt;Fixed or static header&lt;/span&gt;
&lt;button role="switch" type="button" aria-checked="true" aria-labelledby="btn-label" class="js-theme-toggle btn btn--border btn--rounded btn--toggle"&gt;
&lt;span&gt;On&lt;/span&gt;
&lt;span&gt;Off&lt;/span&gt;
&lt;/button&gt;
&lt;/div&gt;
</code></pre>
<p>That's pretty much the HTML for my use case. Again you can do more if you want, and there is some CSS styling involved (which would be left out in our case).</p>
<h2 id="the-fun-part-how-to-create-the-javascript">The Fun Part: How to Create the JavaScript</h2>
class CustomTheme {
constructor() {
// part A: check if localStorage works
this.islocalStorage = function() {
try {
localStorage.setItem("test", "testing");
localStorage.removeItem("test");
return true;
} catch (error) {
return false
}
};
// part B: Get the value from the buttons
this.schemeBtns = document.querySelectorAll('.js-theme-color');
this.schemeBtns.forEach((btn) =&gt; {
const btnVal = btn.value;
btn.addEventListener('click', () =&gt; this.themeScheme(btnVal))
});
this.fontBtns = document.querySelectorAll('.js-font-btn');
this.fontBtns.forEach((btn) =&gt; {
const btnVal = btn.value;
const btnTag = btn;
btn.addEventListener('click', () =&gt; this.themeFont(btnVal, btnTag))
});
// part C: get the html button element
this.switchBtn = document.querySelector('.js-theme-toggle');
const clicked = this.switchBtn;
this.switchBtn.addEventListener('click', () =&gt; this.themePosition(clicked))
}
// part D: Save the data in localStorage
themeScheme(btnVal) {
document.documentElement.setAttribute('data-theme', btnVal);
if (this.islocalStorage) {
localStorage.setItem('theme-name', btnVal);
}
};
themeFont(btnVal,btnTag) {
document.documentElement.style.setProperty('--font-size', `${btnVal}px`);
if (this.islocalStorage) {
localStorage.setItem('font-size', btnVal);
}
;
if (btnVal == localStorage.getItem('font-size')) {
removeActive();
btnTag.classList.add('active');
}
};
themePosition(clicked) {
if (clicked.getAttribute('aria-checked') == 'true') {
clicked.setAttribute('aria-checked', 'false');
document.documentElement.style.setProperty('--position', 'static');
document.documentElement.style.setProperty('--top-margin', '0px');
if (this.islocalStorage) {
localStorage.setItem('position', 'static');
}
} else {
clicked.setAttribute('aria-checked', 'true');
document.documentElement.style.setProperty('--position', 'fixed');
document.documentElement.style.setProperty('--top-margin', '96px');
if (this.islocalStorage) {
localStorage.setItem('position', 'fixed');
}
}
}
}
function removeActive() {
const btns = document.querySelectorAll('.js-font-btn');
btns.forEach((btn) =&gt; {
btn.classList.remove('active');
})
}
// part E: Only use our class if css custom properties are supported
if (window.CSS &amp;&amp; CSS.supports('color', 'var(--i-support')) {
new CustomTheme()
};
// part E: Add an active class to selected font size button
window.addEventListener('load', () =&gt; {
const fontBtns = document.querySelectorAll('.js-font-btn');
fontBtns.forEach((btn) =&gt; {
const btnVal = btn.value;
const btnTag = btn;
if (btnVal == localStorage.getItem('font-size')) {
btnTag.classList.add('active');
}
});
})
</code></pre>
<p>I know that's a big chunk of JavaScript code, but it basically only does a few things:</p>
<ul>
<li>it collects and checks if localStorage is supported </li>
<li>then it saves the data in localStorage</li>
</ul>
<p>Also notice that I used <strong>Javascript Classes</strong>, but you could use functions as well.</p>
<h3 id="checking-for-local-storage">Checking for local storage</h3>
<p>A lot of browsers support localStorage these days, but why do we still need to check? </p>
<p>Some users may be browsing your site in <strong>incognito mode (private browsing mode)</strong>. And sometimes localStorage is turned off by default so it doesn't save anything on the users device. </p>
<p>So instead of saving it directly and sometimes getting an error on browsers that don't support it, we can check if the browser does support it. If it does, great – and if it doesn't then we're also cool.</p>
<p>Now if you notice, everything seems to work just fine. But if you change the theme or font size and you reload your browser, everything is going to revert to default. This is because we haven't used the data we stored in <strong>localStorage</strong></p>
<p>So go ahead and add this piece of code to the top of your head file before any CSS files. We're doing this to eliminate the flash you get when you reload your browser.</p>
const scheme = localStorage.getItem('theme-name');
document.documentElement.setAttribute('data-theme', scheme);
const fontSize = localStorage.getItem('font-size');
document.documentElement.style.setProperty('--font-size',  `${fontSize}px`);
const position = localStorage.getItem('position');
if (position == 'fixed') {
document.documentElement.style.setProperty('--position', 'fixed');
document.documentElement.style.setProperty('--top-margin', '96px');
} else {
document.documentElement.style.setProperty('--position', 'static');
document.documentElement.style.setProperty('--top-margin', '0px');
}
&lt;/script&gt;
</code></pre>
<h2 id="wrapping-up">Wrapping up</h2>
<p>And that's it! You now have a simple and customizable static site. </p>
<p>The main purpose of this guide was to show you the endless possibilities of creating a user-customizable website. So go ahead and play around with it – there are a lot of things you can do, like:</p>
<ol>
<li>Show users specific content based on their choices &nbsp; &nbsp; &nbsp;</li>
<li>Display notification messages based on user's visits</li>
<li>Display ads in the least annoying way by showing users ads based on user choices</li>
</ol>
<p>You can do these things and a lot more with our SSG's. Just imagine the endless possibilities.</p>
<p id="copy-code">
Not much of a tutorial person? You can copy the complete source code <a target="_blank" href="https://spruce.com.ng/blog/on-designing-a-themeable-static-website">here</a>.
</p>
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
