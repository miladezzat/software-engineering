---
card: "https://cdn-media-1.freecodecamp.org/images/1*nRIbaovXFpRyPpFeHBTFLA.png"
tags: [Functional Programming]
description: "A function takes some input, does something to it and creates"
author: "Milad E. Fahmy"
title: "A behind the scenes look at Map, Filter, and Reduce in Swift"
created: "2021-08-16T11:34:54+02:00"
modified: "2021-08-16T11:34:54+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-functional-programming tag-swift tag-technology tag-ios tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">A behind the scenes look at Map, Filter, and Reduce in Swift</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*nRIbaovXFpRyPpFeHBTFLA.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*nRIbaovXFpRyPpFeHBTFLA.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*nRIbaovXFpRyPpFeHBTFLA.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*nRIbaovXFpRyPpFeHBTFLA.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*nRIbaovXFpRyPpFeHBTFLA.png" alt="A behind the scenes look at Map, Filter, and Reduce in Swift">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>A function takes some input, does something to it and creates an output. A function has a signature and a body. If you give the same input to a function then you always get the same output. That is in short a definition for the <strong><em>function</em></strong>.</p><p>Now we will talk more about functions by getting a closer look into them. We will explore higher order functions in Swift. A function that takes another function as input or returns a function is called<strong><em> </em>a higher order function</strong>.</p><p>In Swift, we play with <strong>map, filter, reduce</strong> everyday. When we use these functions, it seems like magic. At this point, you might not have an idea of what is going on behind the scenes. Map, Filter, and Reduce work through the ideas and approaches of functional programming. Even though Swift is not a pure functional language, it allows you to do functional things.</p><p>Now let’s look one by one what is happening in background for them. First we will implement the basic versions of these functions for some particular data types, then we will try to implement a generic version.</p><h4 id="map-function">Map Function</h4><p>Let’s say we have an array of integers and we need to write a function which returns a new array after adding some delta value to each element of the original array. We can easily write a function for this using a simple for loop like below:</p><p>Now we need another function which returns a new array by doubling each element of the original array. For this, we can implement it like below:</p><p>If we look at the above two functions, we can find that they are basically doing the same thing. Only the functionality inside the for loop is different. They both take an <em>Integer</em> array as input, transform each element by using a for loop, and return a new array. So basically the main thing is to transform each element to something new.</p><p>Since Swift supports higher-order functions, we can write a function which will take an array of integers, transform the function as input, and return a new array by applying the transform function to each element of the original array.</p><p>But still, there is a problem with the above: it only returns an integer array. If we have a requirement to convert the input integer array to a string array, for example, then we can not do that with this function. To do that, we need to write a generic function that works for any type.</p><p>We can implement a generic function in an Array extension like this:</p><ol><li>Declare a map function in the Array Extension which works with a generic type <strong>T</strong>.</li><li>The function takes a function of type <strong>(Element) -&gt;<em>;</em></strong> T as input</li><li>Declare an empty result array which holds <strong>T</strong> type’s data inside the function.</li><li>Implement a for loop iterating itself and call the transform function to convert the element to type <strong>T</strong></li><li>Append the converted value in the resulting array</li></ol><p>This is how the <strong>map</strong> function works in Swift. If we need to implement the <strong>map<em> </em>function<em>, </em></strong>then we would implement it like above. So basically, it does not make any magic happen in an array — we could have easily defined the function by ourselves.</p><h4 id="filter-function">Filter Function</h4><p>Suppose we have an array of integers and we want to keep only the even numbers in the array. We can implement this by using a simple for loop:</p><p>Now again, say we have an array of strings representing class file names of a project and we want to keep only the <strong><em>.</em>swift</strong> files. This can be also done with a single loop like below:</p><p>If we closely look into the implementation of the above two functions, then we can understand that they basically do the same thing — only the data type is different for the two arrays. We can generalise this by implementing a generic filter function, which takes an array and a function as input, and depending upon the output of the <strong>includeElement</strong> function, it decides whether to add the element in the resulting array.</p><h4 id="reduce-function">Reduce Function</h4><p>Suppose we have an array of integers and we want to implement two functions which return the sum and the product of the elements. We can implement this by using a simple for loop:</p><p>Now instead of having an array of integers, say we have an array of strings and we want to concatenate all the elements in the array:</p><p>All three functions basically do the same thing. They take an array as input, initialise a resulting variable, iterate over the array, and update the resulting variable.</p><p>From here we can implement a generic function that should work for all. To do this we need the initial value of the resulting variable and the function to update that variable in every iteration.</p><p>So we can implement the generic function with the following definition:</p><p>The above implementation is generic for any input array of type <strong>[Element]. </strong>It will compute a result of type <strong>T</strong>. To work, it needs an initial value of type <strong>T</strong> to assign to a resulting variable. Then, it needs a function of type <strong>(T, Element) -&gt;</strong> T which will be used inside the for loop in each iteration to update the resulting variable.</p><h4 id="thank-you-for-reading-">Thank you for reading!</h4>
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
