---
card: "https://cdn-media-1.freecodecamp.org/images/0*mwIqsFZSbnweFQuv"
tags: [JavaScript]
description: "Can HTML, CSS and Javascript really be used to build Desktop "
author: "Milad E. Fahmy"
title: "How to Easily Build Desktop Apps with HTML, CSS and Javascript"
created: "2021-08-16T11:34:05+02:00"
modified: "2021-08-16T11:34:05+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-programming tag-technology tag-web-development tag-coding ">
<header class="post-full-header">
<h1 class="post-full-title">How to Easily Build Desktop Apps with HTML, CSS and Javascript</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/0*mwIqsFZSbnweFQuv 300w,
https://cdn-media-1.freecodecamp.org/images/0*mwIqsFZSbnweFQuv 600w,
https://cdn-media-1.freecodecamp.org/images/0*mwIqsFZSbnweFQuv 1000w,
https://cdn-media-1.freecodecamp.org/images/0*mwIqsFZSbnweFQuv 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/0*mwIqsFZSbnweFQuv" alt="How to Easily Build Desktop Apps with HTML, CSS and Javascript">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
width: 800,
height: 600,
});
// and load the index.html of the app.
mainWindow.loadURL(`file://${__dirname}/index.html`);</code></pre><p>The above code snippet basically creates a <strong>BrowserWindow</strong> Instance and loads <strong>index.html</strong> into the BrowserWindow.</p><p>You will see <strong>app</strong> used often in the code. For example take the below code snippet:</p><pre><code class="language-js">app.on('ready', createWindow);</code></pre><p><strong>app</strong> is used to control the application’s event life cycle.</p><p>The above code snippet says that when the application is ready, load the first window.</p><p>Similarly, <strong>app</strong> can be used to perform other actions on various events. For example it can be used to perform some action right before the application closes and so on.</p><h3 id="let-s-create-a-temperature-converter-desktop-application">Let’s create a Temperature Converter Desktop Application</h3><p>Let us use the same application we used before and modify it slightly to create a temperature converter application.</p><p>First let us install Bootstrap with the following command:</p><pre><code class="language-bash">npm install bootstrap --save</code></pre><p>Copy the following code into src/index.html:</p><pre><code class="language-html">&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;meta charset="utf-8"&gt;
&lt;title&gt;Temperature Converter&lt;/title&gt;
&lt;link rel="stylesheet" type="text/css" href="../node_modules/bootstrap/dist/css/bootstrap.min.css"&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;h1&gt;Temperature Converter&lt;/h1&gt;
&lt;div class="form-group col-md-3"&gt;
&lt;label for="usr"&gt;Celcius:&lt;/label&gt;
&lt;input type="text" class="form-control" id="celcius" onkeyup="celciusToFahrenheit()"&gt;
&lt;/div&gt;
&lt;div class="form-group col-md-3"&gt;
&lt;label for="pwd"&gt;Fahrenheit:&lt;/label&gt;
&lt;input type="text" class="form-control" id="fahrenheit" onkeyup="fahrenheitToCelcius()"&gt;
&lt;/div&gt;
&lt;script src='./renderer.js'&gt;&lt;/script&gt;
&lt;/body&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre><p>The above code does the following:</p><ol><li>Creates a text box with id <strong>Celcius</strong>. Whenever anything is typed in this textbox, the <strong>celciusToFahrenheit()</strong> function is called.</li><li>Creates a text box with id <strong>Fahrenheit</strong>. Whenever anything is typed in this textbox, the <strong>fahrenheitToCelcius()</strong> function is called.</li><li>Whenever a new value is typed in the Celcius text box, the value in the Fahrenheit text box displays the same temperature in Fahrenheit</li><li>Whenever a new value is typed in the Fahrenheit text box, the value in the Celcius text box displays the same temperature in Celcius</li></ol><p>The 2 functions which do the temperature conversion are present in <strong>renderer.js.</strong></p><p>Create a file called <strong>renderer.js</strong> inside <strong>src</strong>. Copy the following code into it:</p><pre><code class="language-js">function celciusToFahrenheit(){
let celcius = document.getElementById('celcius').value;
let fahrenheit = (celcius* 9/5) + 32;
document.getElementById('fahrenheit').value = fahrenheit;
}
function fahrenheitToCelcius(){
let fahrenheit = document.getElementById('fahrenheit').value;
let celcius = (fahrenheit - 32) * 5/9
document.getElementById('celcius').value = celcius;
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
