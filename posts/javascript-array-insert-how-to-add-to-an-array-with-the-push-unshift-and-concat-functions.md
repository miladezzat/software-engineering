---
card: "/images/default.jpg"
tags: [JavaScript]
description: "JavaScript arrays are easily one of my favorite data types. T"
author: "Milad E. Fahmy"
title: "JavaScript Array Insert - How to Add to an Array with the Push, Unshift, and Concat Functions"
created: "2021-08-16T10:04:42+02:00"
modified: "2021-08-16T10:04:42+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-web-development tag-coding tag-productivity ">
<header class="post-full-header">
<h1 class="post-full-title">JavaScript Array Insert - How to Add to an Array with the Push, Unshift, and Concat Functions</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/08/Hello--my-name-is-Matthew.-Nice-to-meet-you..png 300w,
/news/content/images/size/w600/2020/08/Hello--my-name-is-Matthew.-Nice-to-meet-you..png 600w,
/news/content/images/size/w1000/2020/08/Hello--my-name-is-Matthew.-Nice-to-meet-you..png 1000w,
/news/content/images/size/w2000/2020/08/Hello--my-name-is-Matthew.-Nice-to-meet-you..png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/08/Hello--my-name-is-Matthew.-Nice-to-meet-you..png" alt="JavaScript Array Insert - How to Add to an Array with the Push, Unshift, and Concat Functions">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>JavaScript arrays are easily one of my favorite data types. They are dynamic, easy to use, and offer a whole bunch of built-in methods we can take advantage of. </p><p>However, the more options you have the more confusing it can be to decide which one you should use. </p><p>In this article, I would like to discuss some common ways of adding an element to a JavaScript array.</p><h2 id="the-push-method">The Push Method</h2><p>The first and probably the most common JavaScript array method you will encounter is <em>push()</em>. The push() method is used for adding an element to the end of an array. </p><p>Let's say you have an array of elements, each element being a string representing a task you need to accomplish. It would make sense to add newer items to the end of the array so that we could finish our earlier tasks first. </p><p>Let's look at the example in code form:</p><pre><code class="language-JavaScript">const arr = ['First item', 'Second item', 'Third item'];
arr.push('Fourth item');
console.log(arr); // ['First item', 'Second item', 'Third item', 'Fourth item']</code></pre><p>Alright, so push has given us a nice and simple syntax for adding an item to the end of our array. </p><p>Let's say we wanted to add two or three items at a time to our list, what would we do then? As it turns out, <em>push() </em>can accept multiple elements to be added at once. </p><pre><code class="language-JavaScript">const arr = ['First item', 'Second item', 'Third item'];
arr.push('Fourth item', 'Fifth item');
console.log(arr); // ['First item', 'Second item', 'Third item', 'Fourth item', 'Fifth item']</code></pre><p>Now that we've added some more tasks to our array we might want to know how many items are currently in our array to determine if we have too much on our plate. </p><p>Luckily, <em>push() </em>has a return value with the length of the array after our element(s) have been added.</p><pre><code class="language-JavaScript">const arr = ['First item', 'Second item', 'Third item'];
const arrLength = arr.push('Fourth item', 'Fifth item');
console.log(arrLength); // 5
console.log(arr); // ['First item', 'Second item', 'Third item', 'Fourth item', 'Fifth item']</code></pre><h2 id="the-unshift-method">The Unshift Method</h2><p>Not all tasks are created equal. You might run into a scenario in which you are adding tasks to your array and suddenly you encounter one which is more urgent than the others. </p><p>It's time to introduce our friend <em>unshift() </em>that allows us to add items to the beginning of our array. </p><pre><code class="language-JavaScript">const arr = ['First item', 'Second item', 'Third item'];
const arrLength = arr.unshift('Urgent item 1', 'Urgent item 2');
console.log(arrLength); // 5
console.log(arr); // ['Urgent item 1', 'Urgent item 2', 'First item', 'Second item', 'Third item']</code></pre><p>You may notice in the example above that, just like the<em> push() </em>method, <em>unshift() </em>returns the new array length for us to use. It also gives us the ability to add more than one element at a time. </p><h2 id="the-concat-method">The Concat Method</h2><p>Short for concatenate (to link together), the <em>concat() </em>method is used for joining together two (or more) arrays. </p><p>If you remember from above, the <em>unshift()</em> and <em>push() </em>methods return the length of the new array. <em>concat()</em>, on the other hand,<em> </em>will return a completely new array. </p><p>This is a very important distinction and makes <em>concat() </em>extremely useful when you're dealing with arrays you do not want to mutate (like arrays stored in React state).</p><p>Here is what a fairly basic and straightforward case might look like:</p><pre><code class="language-JavaScript">const arr1 = ['?', '?'];
const arr2 = ['?', '?'];
const arr3 = arr1.concat(arr2);
console.log(arr3); // ["?", "?", "?", "?"]
</code></pre><p>Let's say you have multiple arrays you would like to join together. No worries, <em>concat()</em> is there to save the day!</p><pre><code class="language-JavaScript">const arr1 = ['?', '?'];
const arr2 = ['?', '?'];
const arr3 = ['?', '?'];
const arr4 = arr1.concat(arr2,arr3);
console.log(arr4); // ["?", "?", "?", "?", "?", "?"]
</code></pre><h3 id="cloning-with-concat">Cloning with Concat</h3><p>Remember how I said that <em>concat() </em>can be useful when you don't want to mutate your existing array? Let's take a look at how we can leverage this concept to copy over the contents of one array into a new array.</p><pre><code class="language-JavaScript">const arr1 = ["?", "?", "?", "?", "?", "?"];
const arr2 = [].concat(arr1);
arr2.push("?");
console.log(arr1) //["?", "?", "?", "?", "?", "?"]
console.log(arr2) //["?", "?", "?", "?", "?", "?", "?"]</code></pre><p>Awesome! We can essentially "clone" an array using <em>concat()</em>. </p><p>But there is a small 'gotcha' in this cloning process. The new array is a "shallow copy" of the copied array. This means that any object is <strong>copied by reference </strong>and not the actual object. </p><p>Let's take a look at an example to explain this idea more clearly.</p><pre><code class="language-JavaScript">const arr1 = [{food:"?"}, {food:"?"}, {food:"?"}]
const arr2 = [].concat(arr1);
//change only arr2
arr2[1].food = "?";
arr2.push({food:"?"})
console.log(arr1) //[ { food: '?' }, { food: '?' }, { food: '?' } ]
console.log(arr2) //[ { food: '?' }, { food: '?' }, { food: '?' },
{ food: '?' } ]</code></pre><p>Even though we didn't <strong>directly </strong>make any changes to our original array, the array was ultimately affected by the changes we made on our cloned array! </p><p>There are multiple different ways to properly do a "deep clone" of an array, but I will leave that for you as homework. </p><h2 id="tl-dr">TL;DR</h2><p>When you want to add an element to the end of your array, use <em>push(). </em>If you need to add an element to the beginning of your array, try <em>unshift(). </em>And you can<em> </em>add arrays together using <em>concat(). </em></p><p>There are certainly many other options for adding elements to an array, and I invite you to go out and find some more great array methods! </p><p>Feel free to reach out to me on <a href="https://twitter.com/nehemiahkiv">Twitter </a>and let me know your favorite array method for adding elements to an array. </p>
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
