---
card: "/images/default.jpg"
tags: [JavaScript]
description: On average I work with JSON data 18 times a week. And I still
author: "Milad E. Fahmy"
title: "JavaScript Array of Objects Tutorial – How to Create, Update, and Loop Through Objects Using JS Array Methods"
created: "2021-08-15T19:29:52+02:00"
modified: "2021-08-15T19:29:52+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-arrays tag-object tag-loop ">
<header class="post-full-header">
<h1 class="post-full-title">JavaScript Array of Objects Tutorial – How to Create, Update, and Loop Through Objects Using JS Array Methods</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/05/js-tutorial-cover.jpg 300w,
/news/content/images/size/w600/2020/05/js-tutorial-cover.jpg 600w,
/news/content/images/size/w1000/2020/05/js-tutorial-cover.jpg 1000w,
/news/content/images/size/w2000/2020/05/js-tutorial-cover.jpg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/05/js-tutorial-cover.jpg" alt="JavaScript Array of Objects Tutorial – How to Create, Update, and Loop Through Objects Using JS Array Methods">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>On average I work with JSON data 18 times a week. And I still need to google for specific ways to manipulate them almost every time. What if there was an ultimate guide that could always give you the answer?</p>
<p>In this article, I'll show you the basics of working with object arrays in JavaScript.</p>
<p>If you ever worked with a JSON structure, you've worked with JavaScript objects. Quite literally. JSON stands for JavaScript Object Notation. </p>
<p>Creating an object is as simple as this:</p>
"color": "purple",
"type": "minivan",
"registration": new Date('2012-02-03'),
"capacity": 7
}
</code></pre>
<p>This object represents a car. There can be many types and colors of cars, each object then represents a specific car.</p>
<p>Now, most of the time you get data like this from an external service. But sometimes you need to create objects and their arrays manually. Like I did when I was creating this e-shop:</p>
<p>Considering each category list item looks like this in HTML:</p>
<p>I didn't want to have this code repeated 12 times, which would make it unmaintainable.</p>
<h2 id="creating-an-array-of-objects">Creating an array of objects</h2>
<p>But let's get back to cars. Let's take a look at this set of cars:</p>
<p>We can represent it as an array this way:</p>
{
"color": "purple",
"type": "minivan",
"registration": new Date('2017-01-03'),
"capacity": 7
},
{
"color": "red",
"type": "station wagon",
"registration": new Date('2018-03-03'),
"capacity": 5
},
{
...
},
...
]
</code></pre>
<p>Arrays of objects don't stay the same all the time. We almost always need to manipulate them. So let's take a look at how we can add objects to an already existing array.</p>
<h3 id="add-a-new-object-at-the-start-array-unshift">Add a new object at the start - Array.unshift</h3>
<p>To add an object at the first position, use <code>Array.unshift</code>.</p>
"color": "red",
"type": "cabrio",
"registration": new Date('2016-05-02'),
"capacity": 2
}
cars.unshift(car);
</code></pre>
<h3 id="add-a-new-object-at-the-end-array-push">Add a new object at the end - Array.push</h3>
<p>To add an object at the last position, use <code>Array.push</code>.</p>
&nbsp;"color": "red",
&nbsp;"type": "cabrio",
&nbsp;"registration": new Date('2016-05-02'),
&nbsp;"capacity": 2
}
cars.push(car);
</code></pre>
<h3 id="add-a-new-object-in-the-middle-array-splice">Add a new object in the middle - Array.splice</h3>
<p>To add an object in the middle, use <code>Array.splice</code>. This function is very handy as it can also remove items. Watch out for its parameters:</p>
{index where to start},
{how many items to remove},
{items to add}
);
</code></pre>
<p>So if we want to add the red Volkswagen Cabrio on the fifth position, we'd use:</p>
&nbsp;"color": "red",
&nbsp;"type": "cabrio",
&nbsp;"registration": new Date('2016-05-02'),
&nbsp;"capacity": 2
}
cars.splice(4, 0, car);
</code></pre>
<h2 id="looping-through-an-array-of-objects">Looping through an array of objects</h2>
<p>Let me ask you a question here: Why do you want to loop through an array of objects? The reason I'm asking is that the looping is almost never the primary cause of what we want to achieve. </p>
<p>JavaScript provides many functions that can solve your problem without actually implementing the logic in a general cycle. Let's take a look.</p>
<h3 id="find-an-object-in-an-array-by-its-values-array-find">Find an object in an array by its values - Array.find</h3>
<p>Let's say we want to find a car that is red. We can use the function <code>Array.find</code>.</p>
</code></pre>
<p>This function returns the first matching element:</p>
// output:
// {
//&nbsp;&nbsp;&nbsp;color: 'red',
//&nbsp;&nbsp;&nbsp;type: 'station wagon',
//&nbsp;&nbsp;&nbsp;registration: 'Sat Mar 03 2018 01:00:00 GMT+0100 (GMT+01:00)',
//&nbsp;&nbsp;&nbsp;capacity: 5
//&nbsp;}
</code></pre>
<p>It's also possible to search for multiple values:</p>
<p><code>let car = cars.find(car =&gt; car.color === "red" &amp;&amp; car.type === "cabrio");</code></p>
<p>In that case we'll get the last car in the list.</p>
<h3 id="get-multiple-items-from-an-array-that-match-a-condition-array-filter">Get multiple items from an array that match a condition - Array.filter</h3>
<p>The <code>Array.find</code> function returns only one object. If we want to get all red cars, we need to use <code>Array.filter</code>.</p>
console.log(redCars);
// output:
// [
//   {
//&nbsp;&nbsp;  &nbsp;color: 'red',
//&nbsp;&nbsp;&nbsp;  type: 'station wagon',
//&nbsp;&nbsp;&nbsp;  registration: 'Sat Mar 03 2018 01:00:00 GMT+0100 (GMT+01:00)',
//&nbsp;&nbsp;&nbsp;  capacity: 5
//&nbsp;  },
//   {
//&nbsp;&nbsp;&nbsp;  color: 'red',
//&nbsp;&nbsp;&nbsp;  type: 'cabrio',
//&nbsp;&nbsp;&nbsp;  registration: 'Sat Mar 03 2012 01:00:00 GMT+0100 (GMT+01:00)',
//&nbsp;&nbsp;&nbsp;  capacity: 2
//&nbsp;  }
// ]
</code></pre>
<h3 id="transform-objects-of-an-array-array-map">Transform objects of an array - Array.map</h3>
<p>This is something we need very often. Transform an array of objects into an array of different objects. That's a job for <code>Array.map</code>. Let's say we want to classify our cars into three groups based on their size.</p>
if (car.capacity &lt;= 3){
return "small";
}
if (car.capacity &lt;= 5){
return "medium";
}
return "large";
});
console.log(sizes);
// output:
// ['large','medium','medium', ..., 'small']
</code></pre>
<p>It's also possible to create a new object if we need more values:</p>
let properties = {
"capacity": car.capacity,
"size": "large"
};
&nbsp;if (car.capacity &lt;= 5){
&nbsp;&nbsp;&nbsp;properties['size'] = "medium";
&nbsp;}
&nbsp;if (car.capacity &lt;= 3){
&nbsp;&nbsp;&nbsp;properties['size'] = "small";
&nbsp;}
return properties;
});
console.log(carsProperties);
// output:
// [
// &nbsp;&nbsp;{ capacity: 7, size: 'large' },
// &nbsp;&nbsp;{ capacity: 5, size: 'medium' },
// &nbsp;&nbsp;{ capacity: 5, size: 'medium' },
// &nbsp;&nbsp;{ capacity: 2, size: 'small' },
//   ...
// ]
</code></pre>
<h3 id="add-a-property-to-every-object-of-an-array-array-foreach">Add a property to every object of an array - Array.forEach</h3>
<p>But what if we want the car object too? In that case we can enhance the object for a new property <code>size</code>. This is a good use-case for the <code>Array.forEach</code> function.</p>
car['size'] = "large";
&nbsp;if (car.capacity &lt;= 5){
&nbsp;&nbsp;&nbsp;car['size'] = "medium";
&nbsp;}
&nbsp;if (car.capacity &lt;= 3){
&nbsp;&nbsp;&nbsp;car['size'] = "small";
&nbsp;}
});
</code></pre>
<h3 id="sort-an-array-by-a-property-array-sort">Sort an array by a property - Array.sort</h3>
<p>When we're done with transforming the objects, we usually need to sort them one way or another. </p>
<p>Typically, the sorting is based on a value of a property every object has. We can use the <code>Array.sort</code> function, but we need to provide a function that defines the sorting mechanism. </p>
<p>Let's say we want to sort the cars based on their capacity in descending order.</p>
console.log(sortedCars);
// output:
// [
//   {
//     color: 'purple',
//     type: 'minivan',
//     registration: 'Wed Feb 01 2017 00:00:00 GMT+0100 (GMT+01:00)',
//     capacity: 7
//   },
//   {
//     color: 'red',
//     type: 'station wagon',
//     registration: 'Sat Mar 03 2018 01:00:00 GMT+0100 (GMT+01:00)',
//     capacity: 5
//   },
//   ...
// ]
</code></pre>
<p>The <code>Array.sort</code> compares two objects and puts the first object in the second place if the result of the sorting function is positive. So you can look at the sorting function as if it was a question: Should the first object be placed in second place?</p>
<p>Make sure to always add the case for zero when the compared value of both objects is the same to avoid unnecessary swaps.</p>
<h3 id="checking-if-objects-in-array-fulfill-a-condition-array-every-array-includes">Checking if objects in array fulfill a condition - Array.every, Array.includes</h3>
<p><code>Array.every</code> and <code>Array.some</code> come handy when we just need to check each object for a specific condition. </p>
<p>Do we have a red cabrio in the list of cars? Are all cars capable of transporting at least 4 people? Or more web-centric: Is there a specific product in the shopping cart?</p>
// output: true
cars.every(car =&gt; car.capacity &gt;= 4);
// output: false
</code></pre>
<p>You may remember the function <code>Array.includes</code> which is similar to <code>Array.some</code>, but works only for primitive types.</p>
<h2 id="summary">Summary</h2>
<p>In this article, we went through the basic functions that help you create, manipulate, transform, and loop through arrays of objects. They should cover most cases you will stumble upon.</p>
<p>If you have a use-case that requires more advanced functionality, take a look at <a href="/news/data-structures-101-arrays-a-visual-introduction-for-beginners-7f013bcc355a/">this detailed guide to arrays</a> or visit the <a href="https://www.w3schools.com/Jsref/jsref_obj_array.asp">W3 schools reference</a>.</p>
<p>Or <a href="https://twitter.com/ondrabus">get in touch with me</a> and I will prepare another article :-)</p>
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
