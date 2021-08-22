---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c9eac740569d1a4ca3e7c.jpg"
tags: [JavaScript]
description: In this tutorial you will learn how to create a simple dropdo
author: "Milad E. Fahmy"
title: "How to Create a Dropdown Menu with CSS and JavaScript"
created: "2021-08-15T19:31:48+02:00"
modified: "2021-08-15T19:31:48+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-css ">
<header class="post-full-header">
<h1 class="post-full-title">How to Create a Dropdown Menu with CSS and JavaScript</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c9eac740569d1a4ca3e7c.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9eac740569d1a4ca3e7c.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9eac740569d1a4ca3e7c.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9eac740569d1a4ca3e7c.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c9eac740569d1a4ca3e7c.jpg" alt="How to Create a Dropdown Menu with CSS and JavaScript">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>In this tutorial you will learn how to create a simple dropdown menu with vanilla Javascript, HTML and CSS. We will walk through the HTML, CSS and Javascript code, but paying more attention to the programming, since this is a JS tutorial. We’ll use just plain JS and CSS, with no frameworks or preprocessors. The only (kind-of) exception will be importing the <a href="https://fontawesome.com/">Font Awesome</a> CSS file because we’ll use one of its icons.</p>
<p>This is targeted to developers that have an average understanding of HTML, CSS and JS. I tried to make it as clean as possible, but I won’t focus too much on details here. I hope you all enjoy.</p>
<h2 id="screenshots"><strong>Screenshots</strong></h2>
<p>This is how the code result looks like:</p>
<p>Initial screen:</p>
<p>Dropdown opened:</p>
<p>Dropdown with option selected:</p>
<h4 id="html-"><strong>HTML:</strong></h4>
<p>In this section, we will discuss the implementation of the HTML code for the demo page. To start off, let’s see the <code>&lt;head&gt;</code> code</p><pre><code class="language-html">&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
&lt;meta charset="UTF-8"&gt;
&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
&lt;meta http-equiv="X-UA-Compatible" content="ie=edge"&gt;
&lt;title&gt;Dropdown Example&lt;/title&gt;
&lt;link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/'-awesome/4.7.0/css/font-awesome.min.css"&gt;
&lt;link rel="stylesheet" href="styles.css"&gt;
&lt;/head&gt;</code></pre>
<p>This is basically HTML head boilerplate, with the exception of the <code>link</code> tags loading the two CSS stylesheets we will use in this tutorial: the Font Awesome styles, and the <code>styles.css</code> file, where we will define this page’s styles.</p>
<p>Then, there’s the rest of the HTML file, the body:</p><pre><code class="language-html">&lt;body&gt;
&lt;div class='dropdown'&gt;
&lt;div class='title pointerCursor'&gt;Select an option &lt;i class="fa fa-angle-right"&gt;&lt;/i&gt;&lt;/div&gt;
&lt;div class='menu pointerCursor hide'&gt;
&lt;div class='option' id='option1'&gt;Option 1&lt;/div&gt;
&lt;div class='option' id='option2'&gt;Option 2&lt;/div&gt;
&lt;div class='option' id='option3'&gt;Option 3&lt;/div&gt;
&lt;div class='option' id='option4'&gt;Option 4&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;span id='result'&gt;The result is: &lt;/span&gt;
&lt;script&gt;
...
&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
<p>This section can be divided into 3 main parts:</p>
<ul>
<li>The <code>.dropdown</code> div, where the dropdown element’s structure will be defined.</li>
<li>The <code>#result</code> element, that will contain the selected option by the user, from the dropdown element.</li>
<li>The script written into the <code>&lt;script&gt;</code> tag. Its implementation is hidden here, because its details will be explained in the last section of this tutorial.</li>
</ul>
<p>The dropdown element is a <code>div</code> containing a <code>title</code> and <code>menu</code> elements. The former just defines what text will be presented on the element before any option is selected and the latter will define the options that will be selectable by the element.</p>
<p>The <code>result</code> element is there just to show you what option is currently selected.</p>
<h4 id="styles-"><strong>Styles:</strong></h4>
<p>Below you can check the full css code out. As you can see it makes use of CSS3 <code>transition</code> and <code>transform</code> constructs.</p>
<p>Please pay attention to the <code>.dropdown</code> classes definitions. These are used to define the layout for the dropdown container component as well as its inner elements, such as the <code>.title</code> and its <code>.option</code>‘s.</p><pre><code class="language-css">body{
font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
.hide {
max-height: 0 !important;
}
.dropdown{
border: 0.1em solid black;
width: 10em;
margin-bottom: 1em;
}
.dropdown .title{
margin: .3em .3em .3em .3em;
width: 100%;
}
.dropdown .title .fa-angle-right{
float: right;
margin-right: .7em;
transition: transform .3s;
}
.dropdown .menu{
transition: max-height .5s ease-out;
max-height: 20em;
overflow: hidden;
}
.dropdown .menu .option{
margin: .3em .3em .3em .3em;
margin-top: 0.3em;
}
.dropdown .menu .option:hover{
background: rgba(0,0,0,0.2);
}
.pointerCursor:hover{
cursor: pointer;
}
.rotate-90{
transform: rotate(90deg);
}</code></pre>
<h4 id="javascript-"><strong>JavaScript:</strong></h4>
<p>Now we’ll see how the Javascript part is implemented. We’ll first go through the function definitions and then the code that calls these functions to make the dropdown actions happen.</p>
<p>Basically, there are 3 actions that take place depending on what the user interaction is, as their listeners are added to the DOM elements:</p>
<ol>
<li>Clicking on the dropdown element</li>
<li>Selecting one of the dropdown options</li>
<li>Changing the currently selected option</li>
</ol>
<p>I’d like to make it clear that we are using arrow functions( <code>() =&gt; {}</code> ) and the <code>const</code> keyword, which are ES6 features. You’re probably good if you’re using a recent version of your browser, but keep that in mind.</p>
<h4 id="1-clicking-on-the-dropdown-element"><strong>1. Clicking on the dropdown element</strong></h4><pre><code class="language-javascript">function toggleClass(elem,className){
if (elem.className.indexOf(className) !== -1){
elem.className = elem.className.replace(className,'');
}
else{
elem.className = elem.className.replace(/\s+/g,' ') + 	' ' + className;
}
return elem;
}
function toggleDisplay(elem){
const curDisplayStyle = elem.style.display;
if (curDisplayStyle === 'none' || curDisplayStyle === ''){
elem.style.display = 'block';
}
else{
elem.style.display = 'none';
}
}
function toggleMenuDisplay(e){
const dropdown = e.currentTarget.parentNode;
const menu = dropdown.querySelector('.menu');
const icon = dropdown.querySelector('.fa-angle-right');
toggleClass(menu,'hide');
toggleClass(icon,'rotate-90');
}</code></pre>
<p>When the dropdown element is clicked, it opens(if it is closed) or closes(if it is opened). This happens by binding <code>toggleMenuDisplay</code> to the click event listener on the dropdown element. This function toggles the display of its <code>menu</code> element by the use of the <code>toggleDisplay</code> and <code>toggleClass</code> functions.</p>
<h4 id="2-selecting-one-of-the-dropdown-options"><strong>2. Selecting one of the dropdown options</strong></h4><pre><code class="language-javascript">function handleOptionSelected(e){
toggleClass(e.target.parentNode, 'hide');
const id = e.target.id;
const newValue = e.target.textContent + ' ';
const titleElem = document.querySelector('.dropdown .title');
const icon = document.querySelector('.dropdown .title .fa');
titleElem.textContent = newValue;
titleElem.appendChild(icon);
//trigger custom event
document.querySelector('.dropdown .title').dispatchEvent(new Event('change'));
//setTimeout is used so transition is properly shown
setTimeout(() =&gt; toggleClass(icon,'rotate-90',0));
}</code></pre>
<h4 id="3-changing-the-currently-selected-option"><strong>3. Changing the currently selected option</strong></h4><pre><code class="language-javascript">function handleTitleChange(e){
const result = document.getElementById('result');
result.innerHTML = 'The result is: ' + e.target.textContent;
}</code></pre>
<p>The function <code>handleTitleChange</code> is bound to the custom <code>change</code> event on the <code>.title</code> element, to change the <code>#result</code> element content whenever the title element changes. This event’s triggering is done on the previous section.</p>
<h4 id="main-code"><strong>Main code</strong></h4><pre><code class="language-javascript">//get elements
const dropdownTitle = document.querySelector('.dropdown .title');
const dropdownOptions = document.querySelectorAll('.dropdown .option');
//bind listeners to these elements
dropdownTitle.addEventListener('click', toggleMenuDisplay);
dropdownOptions.forEach(option =&gt; option.addEventListener('click',handleOptionSelected));
document.querySelector('.dropdown .title').addEventListener('change',handleTitleChange);</code></pre>
<p>In the main section there’s just some simple code to get the dropdown’s title and options elements to bind to them the events discussed on the last section.</p>
<h2 id="demo"><strong>Demo</strong></h2>
<p>This application’s full code and demo can be found <a href="https://codepen.io/GCrispino/pen/EEXmYd">here</a>.</p>
<h2 id="more-information"><strong>More Information</strong></h2>
<ul>
<li><a href="https://guide.freecodecamp.org/javascript/es6">ES6 introduction</a></li>
<li><a href="https://guide.freecodecamp.org/javascript/es6/arrow_functions/">Arrow functions</a></li>
<li><a href="https://guide.freecodecamp.org/javascript/es6/let_and_const/">Let and Const</a></li>
</ul>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
