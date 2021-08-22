---
card: "/images/default.jpg"
tags: [JavaScript]
description: Objects are one of the most valuable things you can learn in
author: "Milad E. Fahmy"
title: "What is a JavaScript Object? Key Value Pairs and Dot Notation Explained"
created: "2021-08-15T19:23:36+02:00"
modified: "2021-08-15T19:23:36+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-object ">
<header class="post-full-header">
<h1 class="post-full-title">What is a JavaScript Object? Key Value Pairs and Dot Notation Explained</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2021/07/Blue--Violet-and-Orange-Shapes-Fitness-Influencer-YouTube-Thumbnail-Set--2--1.png 300w,
/news/content/images/size/w600/2021/07/Blue--Violet-and-Orange-Shapes-Fitness-Influencer-YouTube-Thumbnail-Set--2--1.png 600w,
/news/content/images/size/w1000/2021/07/Blue--Violet-and-Orange-Shapes-Fitness-Influencer-YouTube-Thumbnail-Set--2--1.png 1000w,
/news/content/images/size/w2000/2021/07/Blue--Violet-and-Orange-Shapes-Fitness-Influencer-YouTube-Thumbnail-Set--2--1.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2021/07/Blue--Violet-and-Orange-Shapes-Fitness-Influencer-YouTube-Thumbnail-Set--2--1.png" alt="What is a JavaScript Object? Key Value Pairs and Dot Notation Explained">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Objects are one of the most valuable things you can learn in JavaScript. You can use them to take your programs to the next level. </p>
<p>An <strong>object</strong> is a collection of data – or key value pairs – which consist of variables and functions that you can access using dot notation.</p>
<p>Now that's a bunch of words that might not mean anything to you at the moment, so let's break it down. </p>
<h2 id="what-is-a-key-value-pair-in-javascript">What is a Key Value Pair in JavaScript? </h2>
<p>The easiest way to explain a key value pair is that you have 2 items that are linked together. One being the "key" and one being the "value". An object can have several Key Value Pairs inside of it. </p>
<p>Now that we understand what key value pairs are, we can dive deeper into objects.</p>
<h2 id="what-is-an-object-in-javascript">What is an Object in JavaScript? </h2>
<p>This is an object in JavaScript: </p><pre><code class="language-js">const phone = {
brand: ['Samsung', 'Apple', 'Google'],
quantity: [1,2,3],
howManyGooglePhones: function(){
alert("There are " + this.quantity[1] + ' ' + this.brand[2] + " phones available.");
}
}
phone.howManyGooglePhones();</code></pre>
<p>We create and name our object – in this case we have named it <code>phone</code>. We also have everything wrapped in our curly braces { }. Each key is separated from the value using a colon <code>:</code>.</p>
<p>In the code above, we have 2 arrays and one function. Notice how each key value pair ends with a comma <code>,</code> – this is very important and is required.</p>
<h2 id="what-is-dot-notation-in-javascript">What is Dot Notation in JavaScript?</h2>
<p>Dot notation is where we can call that key value pair (which is known as a property) and pulls that information. </p>
<p>If I wanted the brand Samsung I could do <strong><code>phone.brand[0]</code> </strong>and it would give me Samsung. We use the object name (in this example it is <code>phone</code>), use a Dot, and then proceed by writing the name of the property.</p>
<p>Our function is set up to display how many phones we have of each brand. In the above function we are using it to show how many Google Phones we have in stock.</p>
<p><strong><code>this.quantity[1]</code></strong> is accessing the "quantity" property and is looking in the [1] position for the value. <strong><code>this.brand[2]</code></strong> is accessing the Brand property that we want to show, which in this case is Google. </p>
<p>Can you quickly figure out how we would access Apple with the quantity being 3? What would that look like in this situation?</p>
<p><code>this</code> is being used because we want to access these values from within this object. The alert is creating a pop up to display this info when the program loads for this example.</p>
<p>Now that our object is complete, we want to call the function that is in the object and have it displayed. Since we are no longer in the object, <strong>we will not be using <code>this</code></strong> like we did inside of the object.<strong> </strong></p>
<p><strong>Instead</strong> we will be calling the object by name and using Dot notation. Our object name is <strong><code>phone</code></strong> so let's use it then the name of the function:</p>
<p><strong><code>phone.howManyGooglePhones();</code></strong></p>
<p>Calling the function will now create this pop up:</p>
<p>You successfully went through making an object, called a function, that was in the object that accessed 2 different values from the properties. Nice work!</p>
<p>If you like my blog articles you will love my social media posts. <br>Follow me on Twitter @DThompsonDev</p>
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
