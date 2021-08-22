---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9ca62e740569d1a4ca6e7b.jpg"
tags: [JavaScript]
description: "Update (23/07/2019): I have corrected a few grammatical error"
author: "Milad E. Fahmy"
title: "Diving into JavaScript: How to Create a Hex2RGB Color Converter"
created: "2021-08-16T10:08:32+02:00"
modified: "2021-08-16T10:08:32+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-web-development tag-css tag-tech tag-design tag-freecodecamp ">
<header class="post-full-header">
<h1 class="post-full-title">Diving into JavaScript: How to Create a Hex2RGB Color Converter</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9ca62e740569d1a4ca6e7b.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9ca62e740569d1a4ca6e7b.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9ca62e740569d1a4ca6e7b.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9ca62e740569d1a4ca6e7b.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9ca62e740569d1a4ca6e7b.jpg" alt="Diving into JavaScript: How to Create a Hex2RGB Color Converter">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
&lt;html lang="en"&gt;
&lt;head&gt;
&lt;meta charset="UTF-8"&gt;
&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
&lt;meta http-equiv="X-UA-Compatible" content="ie=edge"&gt;
&lt;title&gt;Hex to RGB Converter&lt;/title&gt;
&lt;link rel="stylesheet" href="style.css"&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;div class="head"&gt;
HEX &amp;lt;--&amp;gt; RGB
&lt;/div&gt;
&lt;div id="content"&gt;
&lt;input type="text" id="hex" placeholder="hex"&gt;
&lt;img id="hexError" class="hidden" src="data:image/svg+xml;utf8;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48cGF0aCBkPSJNNTY5LjUxNyA0NDAuMDEzQzU4Ny45NzUgNDcyLjAwNyA1NjQuODA2IDUxMiA1MjcuOTQgNTEySDQ4LjA1NGMtMzYuOTM3IDAtNTkuOTk5LTQwLjA1NS00MS41NzctNzEuOTg3TDI0Ni40MjMgMjMuOTg1YzE4LjQ2Ny0zMi4wMDkgNjQuNzItMzEuOTUxIDgzLjE1NCAwbDIzOS45NCA0MTYuMDI4ek0yODggMzU0Yy0yNS40MDUgMC00NiAyMC41OTUtNDYgNDZzMjAuNTk1IDQ2IDQ2IDQ2IDQ2LTIwLjU5NSA0Ni00Ni0yMC41OTUtNDYtNDYtNDZ6bS00My42NzMtMTY1LjM0Nmw3LjQxOCAxMzZjLjM0NyA2LjM2NCA1LjYwOSAxMS4zNDYgMTEuOTgyIDExLjM0Nmg0OC41NDZjNi4zNzMgMCAxMS42MzUtNC45ODIgMTEuOTgyLTExLjM0Nmw3LjQxOC0xMzZjLjM3NS02Ljg3NC01LjA5OC0xMi42NTQtMTEuOTgyLTEyLjY1NGgtNjMuMzgzYy02Ljg4NCAwLTEyLjM1NiA1Ljc4LTExLjk4MSAxMi42NTR6Ii8+PC9zdmc+" /&gt;
&lt;/br&gt;
&lt;input type="text" id="rgb" placeholder="rgb"&gt;
&lt;img id="rgbError" class="hidden" src="data:image/svg+xml;utf8;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48cGF0aCBkPSJNNTY5LjUxNyA0NDAuMDEzQzU4Ny45NzUgNDcyLjAwNyA1NjQuODA2IDUxMiA1MjcuOTQgNTEySDQ4LjA1NGMtMzYuOTM3IDAtNTkuOTk5LTQwLjA1NS00MS41NzctNzEuOTg3TDI0Ni40MjMgMjMuOTg1YzE4LjQ2Ny0zMi4wMDkgNjQuNzItMzEuOTUxIDgzLjE1NCAwbDIzOS45NCA0MTYuMDI4ek0yODggMzU0Yy0yNS40MDUgMC00NiAyMC41OTUtNDYgNDZzMjAuNTk1IDQ2IDQ2IDQ2IDQ2LTIwLjU5NSA0Ni00Ni0yMC41OTUtNDYtNDYtNDZ6bS00My42NzMtMTY1LjM0Nmw3LjQxOCAxMzZjLjM0NyA2LjM2NCA1LjYwOSAxMS4zNDYgMTEuOTgyIDExLjM0Nmg0OC41NDZjNi4zNzMgMCAxMS42MzUtNC45ODIgMTEuOTgyLTExLjM0Nmw3LjQxOC0xMzZjLjM3NS02Ljg3NC01LjA5OC0xMi42NTQtMTEuOTgyLTEyLjY1NGgtNjMuMzgzYy02Ljg4NCAwLTEyLjM1NiA1Ljc4LTExLjk4MSAxMi42NTR6Ii8+PC9zdmc+" /&gt;
&lt;/div&gt;
&lt;script src="app.js"&gt;&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre><p>We created two text fields with id of ‘hex’ and ‘rgb’ respectively. Next to each input is an SVG icon for error, which has a class of hidden, by default.</p><h2 id="style-css">style.css</h2><pre><code class="language-css">:root {
--color: rgba(255,255,255,0.9);
--tweet: white;
}
* {
margin: 0;
padding: 0;
box-sizing: border-box;
}
::placeholder {
color: var(--color)!important;
}
body {
padding: 50px;
width: 100vw;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
background-color: #28a745;
font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;
}
.head {
position: absolute;
top: 30px;
text-align: center;
color: var(--tweet);
font-size: 3rem;
border-bottom: 2px solid var(--tweet);
}
#content {
display: block;
}
input {
color: var(--color)!important;
margin: 1rem 0;
width: 400px;
border: none;
border-bottom: 1px solid var(--color);
font-size: 2.5rem;
background-color: transparent;
}
input:focus {
outline: none;
}
img {
width: 24px;
}
.hidden {
visibility: hidden;
opacity: 0.8;
}
.dark {
--color: rgba(0,0,0,0.75);
--tweet: rgba(0,0,0,0.95);
}
@media only screen and (max-width: 560px){
#content input {
margin: 0.75rem 0;
width: 90%;
font-size: 1.875rem;
}
#content img {
width: 16px;
}
.head {
font-size: 2rem;
}
}
const rgb = document.getElementById("rgb");
// Check Functions
function checkHex(hex) {
const hexRegex = /^[#]*([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/i
if (hexRegex.test(hex)) {
return true;
}
}
function checkRgb(rgb) {
const rgbRegex = /([R][G][B][A]?[(]\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])\s*,\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])\s*,\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])(\s*,\s*((0\.[0-9]{1})|(1\.0)|(1)))?[)])/i
if (rgbRegex.test(rgb)) {
return true
}
}
// Parse Function
function modifyHex(hex) {
if (hex.length == 4) {
hex = hex.replace('#', '');
}
if (hex.length == 3) {
hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
}
return hex;
}
// Converting Functions
function hexToRgb(hex) {
let x = [];
hex = hex.replace('#', '')
if (hex.length != 6) {
hex = modifyHex(hex)
}
x.push(parseInt(hex.slice(0, 2), 16))
x.push(parseInt(hex.slice(2, 4), 16))
x.push(parseInt(hex.slice(4, 6), 16))
return "rgb(" + x.toString() + ")"
}
function rgbToHex(rgb) {
let y = rgb.match(/\d+/g).map(function(x) {
return parseInt(x).toString(16).padStart(2, '0')
});
return y.join('').toUpperCase()
}
// Helper Functions
function addPound(x) {
return '#' + x;
}
// Function to add cross mark on error values
function errorMark() {
if (checkHex(hex.value)) {
document.getElementById('hexError').classList.add('hidden');
} else {
document.getElementById('hexError').classList.remove('hidden');
}
if (checkRgb(rgb.value)) {
document.getElementById('rgbError').classList.add('hidden');
} else {
document.getElementById('rgbError').classList.remove('hidden');
}
}
// Finding Contrast Ratio to change text color. Thanks https://stackoverflow.com/a/11868398/10796932
function getContrastYIQ(hexcolor) {
if (checkHex(hexcolor)) {
hexcolor = hexcolor.replace("#", '')
} else {
hexcolor = rgbToHex(hexcolor)
}
var r = parseInt(hexcolor.substr(0, 2), 16);
var g = parseInt(hexcolor.substr(2, 2), 16);
var b = parseInt(hexcolor.substr(4, 2), 16);
var yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
return (yiq &gt;= 128) ? document.body.classList.add('dark') : document.body.classList.remove('dark')
}
// Adding Event Listeners
hex.addEventListener('keyup', function() {
let color = hex.value
if (checkHex(color)) {
color = modifyHex(color);
document.body.style.backgroundColor = addPound(color);
getContrastYIQ(color)
rgb.value = hexToRgb(color);
}
})
hex.addEventListener('blur', function() {
if (checkHex(hex.value)) {
hex.value = modifyHex(hex.value)
if (hex.value[1] != '#') {
if (hex.value[0] != '#') {
hex.value = addPound(hex.value);
}
}
}
})
rgb.addEventListener('keyup', function() {
let color = rgb.value
if (checkRgb(color)) {
hex.value = color = addPound(rgbToHex(color))
document.body.style.backgroundColor = color;
getContrastYIQ(color)
}
})
document.addEventListener('keyup', function() {
errorMark();
})</code></pre><h1 id="conclusion">Conclusion</h1><p>There you have it! I know the code is not perfect and can be refactored, but hey, this is just the beginning. If you want to improve this code, you can go ahead and open a PR on my <a href="https://github.com/boxdox/hex2rgb?source=post_page---------------------------">github repo</a>.</p><p>Happy Coding!</p>
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
