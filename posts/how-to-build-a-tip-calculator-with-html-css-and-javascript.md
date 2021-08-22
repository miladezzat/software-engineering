---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c9dfa740569d1a4ca3aaf.jpg"
tags: [Projects]
description: "A Tip Calculator is a calculator that calculates a tip based "
author: "Milad E. Fahmy"
title: "How to Build a Tip Calculator with HTML, CSS, and JavaScript"
created: "2021-08-15T22:49:57+02:00"
modified: "2021-08-15T22:49:57+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-projects tag-html tag-css tag-javascript ">
<header class="post-full-header">
<h1 class="post-full-title">How to Build a Tip Calculator with HTML, CSS, and JavaScript</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c9dfa740569d1a4ca3aaf.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9dfa740569d1a4ca3aaf.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9dfa740569d1a4ca3aaf.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9dfa740569d1a4ca3aaf.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c9dfa740569d1a4ca3aaf.jpg" alt="How to Build a Tip Calculator with HTML, CSS, and JavaScript">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>A Tip Calculator is a calculator that calculates a tip based on the percentage of the total bill.</p><p>Let's build one now.</p><h2 id="step-1-html-"><strong>Step 1 - HTML:</strong></h2><p>We create a form in order to enter the preferred amount:</p><pre><code class="language-html">&lt;!doctype html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
&lt;title&gt;Tip Calculator&lt;/title&gt;
&lt;!-- Required meta tags --&gt;
&lt;meta charset="utf-8"&gt;
&lt;meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"&gt;
&lt;!-- Bootstrap CSS --&gt;
&lt;link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossorigin="anonymous"&gt;
&lt;/head&gt;
&lt;body class="bg-dark"&gt;
&lt;div class="container"&gt;
&lt;div class="row"&gt;
&lt;div class="col-md-6 mx-auto"&gt;
&lt;h1 class="heading display-5 pb-3"&gt;Tip Calculator&lt;/h1&gt;
&lt;form id="tip-form"&gt;
&lt;div class="form-group"&gt;
&lt;div class="input-group"&gt;
&lt;span class="input-group-addon"&gt;$&lt;/span&gt;
&lt;input type="number" class="form-control" id="billTotal" placeholder="Total Bill"&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;div class="form-group tipPersent"&gt;
&lt;div class="input-group"&gt;
&lt;label for=""&gt;Tip:&lt;/label&gt;
&lt;input type="range" class="form-control" id="tipInput" value="0"&gt;
&lt;span class="input-group-addon" id="tipOutput"&gt;&lt;/span&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/form&gt;
&lt;hr&gt;
&lt;!-- RESULTS --&gt;
&lt;div id="results" class="pt-4"&gt;
&lt;h5&gt;Results&lt;/h5&gt;
&lt;div class="form-group"&gt;
&lt;div class="input-group"&gt;
&lt;span class="input-group-addon"&gt;Tip amount&lt;/span&gt;
&lt;input type="number" class="form-control" id="tipAmount" disabled&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;div class="form-group"&gt;
&lt;div class="input-group"&gt;
&lt;span class="input-group-addon"&gt;Total Bill with Tip&lt;/span&gt;
&lt;input type="number" class="form-control" id="totalBillWithTip" disabled&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;!-- Optional JavaScript --&gt;
&lt;!-- jQuery first, then Popper.js, then Bootstrap JS --&gt;
&lt;script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"&gt;&lt;/script&gt;
&lt;script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js" integrity="sha384-vFJXuSJphROIrBnz7yo7oB41mKfc8JzQZiCq4NCceLEaO4IHwicKwpJf9c9IpFgh" crossorigin="anonymous"&gt;&lt;/script&gt;
&lt;script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js" integrity="sha384-alpBpkh1PFOepccYVYDB4do5UnbKysX5WZXm3XxPqe5iKTfUKjNkCk9SaVuEZflJ" crossorigin="anonymous"&gt;&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre><h2 id="step-2-css-"><strong>Step 2 - CSS:</strong></h2><p>You design the style however you want. You can also use CSS to hide the results and show them through JavaScript after the user fills in the form:</p><pre><code class="language-css">  #results {
display:none;
}</code></pre><h2 id="step-3-javascript-"><strong>Step 3: JavaScript:</strong></h2><p>We add an onchange event. The onchange event occurs when the user interacts with the form.</p><p>This action will execute a function that computes the final bill amount based on the percentage tip, then returns the results.</p><pre><code class="language-javascript">document.querySelector('#tip-form').onchange = function(){
var bill = Number(document.getElementById('billTotal').value);
var tip = document.getElementById('tipInput').value;
document.getElementById('tipOutput').innerHTML = `${tip}%`;
var tipValue = bill * (tip/100)
var finalBill = bill + tipValue
console.log(finalBill)
var tipAmount = document.querySelector('#tipAmount')
var totalBillWithTip = document.querySelector('#totalBillWithTip')
tipAmount.value = tipValue.toFixed(2);
totalBillWithTip.value =finalBill.toFixed(2);
//Show Results
document.getElementById('results').style.display='block'
}</code></pre><p>You can see a working example and its code on <a href="https://codepen.io/voula12/pen/djrZGw">Codepen.io</a>.</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
