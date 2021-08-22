---
card: "https://cdn-media-2.freecodecamp.org/w1280/6054e9bf687d62084bf682b9.jpg"
tags: [JavaScript]
description: I was asked a great question recently about filtering and sor
author: "Milad E. Fahmy"
title: "How to Use Supercharged Sorts in JavaScript"
created: "2021-08-15T19:26:51+02:00"
modified: "2021-08-15T19:26:51+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-arrays ">
<header class="post-full-header">
<h1 class="post-full-title">How to Use Supercharged Sorts in JavaScript</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/6054e9bf687d62084bf682b9.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/6054e9bf687d62084bf682b9.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/6054e9bf687d62084bf682b9.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/6054e9bf687d62084bf682b9.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/6054e9bf687d62084bf682b9.jpg" alt="How to Use Supercharged Sorts in JavaScript">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>I was asked a great question recently about filtering and sorting arrays. At first, it seemed trivial:</p>
<blockquote>If I have an array of objects, and I want to be able to <code>filter()</code> by multiple properties, can I do that?</blockquote>
<p>And the answer is, of course, sure. Absolutely. The way <code>Array.filter()</code> works in JavaScript, it's chainable. That means, when the first <code>.filter()</code> function returns, it can be fed straight into a second <code>.filter()</code>, and to as many filters as you like.</p>
<p>But if we want to <em>sort</em> by more than one property, that seems a little trickier. After all, if we sort by one property, then sort by a second, we've lost the first.</p>
<p>How about if we use something like <code>.reduce()</code> instead? We could use that to reduce the array to an object whose properties are the first sort values, then set each of those properties to an array of items <em>containing</em> those values, and sort them!</p>
<p>And just like that, we're down the rabbit hole. There has to be an easier way.</p>
<p>As it happens, there is. It's good old <code>Array.sort()</code> all over again.</p>
<h2 id="second-verse-same-as-the-first">Second verse, same as the first</h2>
<p>Here's where we need to start: Think about the values that <code>Array.sort()</code> expects its callback function to return, given a callback with <code>(a, b)</code> as its parameters:</p>
<ul>
<li>If the returned value is less than zero, <code>a</code> will remain before <code>b</code> in the sort order.</li>
<li>If the returned value is greater than zero, <code>b</code> will swap places with <code>a</code> in the sort order.</li>
<li><em>If the returned value is equal to zero, <code>a</code> and <code>b</code> have the same weight, and thus will remain unchanged.</em></li>
</ul>
<p>Now, something else to note: in those three cases, we have three values: 0, -1, and 1. Here's how JavaScript will coerce them, as Boolean (true/false) values:</p><pre><code class="language-js">Boolean(-1) === true;
Boolean(1) === true;
// But:
Boolean(0) === false;</code></pre>
<p>Now, how does that help us? We have some great information here: first, if a sort is performed between two properties, and the properties are the same, the comparison should return 0 or a Boolean <code>false</code>. As zero is the only number to coerce to a false value, any equal values will give a false comparison.</p>
<p>Second, we can use that <code>true</code> or <code>false</code> to determine if we need to drill deeper.</p>
<p>Here's the last page, for those who are already seeing where this is going:‌</p><pre><code class="language-js">return &lt;the value of the first comparator, if it coerces to a Boolean true&gt;
|| &lt;the value of a second one&gt;;</code></pre>
<h2 id="wait-what">Wait, What?</h2>
<p>Lol Yup. What just happened? What exactly are we returning there?</p>
<p>Using the inline OR, <code>||</code>, tells the return statement to evaluate the value to be returned. Is the first comparator Boolean <code>true</code>? If not, then work through the <code>||</code> tree to the first comparison that does, or if none does, return the result of that last comparison.</p>
<p>Let's work it through with a practical example (run the code <strong><a href="https://tech.io/snippet/oJ0Ueod">here</a></strong> on Tech.io). Consider an array of four members:</p><pre><code class="language-js">const myArray = [
{
firstName: 'Bob',
lastName: 'Francis',
age: 34,
city: 'Holland',
state: 'Massachusetts',
country: 'USA',
online: true
}, {
firstName: 'Janet',
lastName: 'Francis',
age: 41,
city: 'Holland',
state: 'Massachusetts',
country: 'USA',
online: false
},{
firstName: 'Alexia',
lastName: 'Francis',
age: 39,
city: 'Paris',
state: 'Ile de France',
country: 'France',
online: true,
},{
firstName: 'Lucille',
lastName: 'Boure',
age: 29,
city: 'Paris',
state: 'Ile de France',
country: 'France',
online: true,
}
];</code></pre>
<p>We have these four users, and we wish to sort them by their last name:</p><pre><code class="language-js">const sortByLastName = function(a, b){
return a.lastName.localeCompare(b.lastName)
};
console.log(myArray.sort(sortByLastName) );</code></pre>
<p>That first line defines our sorting function, which we'll pass into <code>myArray.sort(...)</code>. The <code>localeCompare()</code> function is a handy JavaScript function for comparing one string to another, sidestepping differences of case, and so on. It is made to work with <code>sort()</code>, returning 1, 0, or -1, depending on how each pair of records match.</p>
<p>So, the result of this sort function (and this is a pretty trivial example) sorts the array by lastName:</p><pre><code class="language-js">[
{
firstName: 'Lucille',
lastName: 'Boure',
// ...
},{
firstName: 'Bob',
lastName: 'Francis'
//...
},{
firstName: 'Janet',
lastName: 'Francis',
// ...
},{
firstName: 'Alexia',
lastName: 'Francis',
// ...
}
]</code></pre>
<p>Not all that impressive, really – we've sorted by last name, but what about last AND first? Can we do THAT?</p>
<h2 id="we-have-the-power-">We have the power!</h2>
<p>The answer is, of course, yes. If you've read this far, it would be silly of me to bait you along and not give you a good answer.</p>
<p>The trick to remember is, if the first comparison returns a falsy value (in this case, <code>0</code>), then we can fall into a second one. And, if we want, a third or fourth or...</p>
<p>Here's how the comparator function might look, to sort by <code>lastName</code>, then by <code>firstName</code>:</p><pre><code class="language-js">const sortByLastAndFirst = function(a, b){
return (a.lastName.localeCompare(b.lastName) )
|| (a.firstName.localeCompare(b.firstName) )
};</code></pre>
<p>And here's a <strong><a href="https://tech.io/snippet/udV2Qfx">runnable</a></strong><em> </em>of that one. The parentheses in that return are simply to make things a little more readable, but here's the logic going on:</p><pre><code>comparing a and b in a sort function, return:
* if a.lastName comes before or after b.lastName,
: return the value of that comparison.
* if a.lastName and b.lastName are the same, we get a false value, so
: go on to the next comparison, a.firstName and b.firstName</code></pre>
<h2 id="recap-before-moving-on">Recap before moving on</h2>
<p>So, at this point, we know we can string sort <code>return</code> clauses together. And that's powerful. It gives us some depth, and makes our sorts a little more flexible. We can make it more readable, and more "plug-and-play", as well.</p>
<p>Now I'm going to change it up a little, I'll be using ES6 <em>fat-arrow functions</em>:</p><pre><code class="language-js">// Let's put together some smaller building blocks...
const byLast = (a, b)=&gt;a.last.localeCompare(b.last);
const byFirst = (a, b)=&gt;a.first.localeCompare(b.first);
// And then we can combine (or compose) them!
const byLastAndFirst = (a, b) =&gt; byLast(a, b) || byFirst(a, b);</code></pre>
<p>That does the same thing as the one we just did, but it's a bit more understandable. Reading that <code>byLastAndFirst</code> function, we can see that it's sorting by last, then by first.</p>
<p>But that's a bit of a pain – we have to write the same code each time? Look at <code>byLast</code> and <code>byFirst</code> in that last example. They are the same, other than the property name. Can we fix it so we don't have to write the same functions over and over?</p>
<h2 id="third-verse-same-as-never-mind-">Third verse, same as... never mind.</h2>
<p>Of course! Let's start by trying to make a generic <code>sortByProp</code> function. That will take a property name, and two objects, and compare them.</p><pre><code class="language-js">const sortByProp = function(prop, a, b){
if (typeof a[prop] === 'number')
return a[prop]-b[prop];
// implied else - if we're here, then we didn't return above
// This is simplified, I'm only expecting a number or a string.
return a[prop].localeCompare(b[prop]); };</code></pre>
<p>So that we can use in our sort function as a comparator:</p><pre><code class="language-js">myArray.sort((a, b)=&gt; sortByProp('lastName', a,b)
|| sortByProp('firstName', a, b) );</code></pre>
<p>And that looks pretty great, right? I mean, we now only have one function, and we can compare by any property. And hey, it includes a check for comparing numbers vs strings, for the win!</p>
<p>Yeah, but it bothers me. I like to be able to take those smaller functions (the <code>byLast</code> and <code>byFirst</code>), and know they will still work with <code>sort</code> – but with the parameter signature on our <code>byProp(prop, a, b)</code>, we can't use that! Sort doesn't know about our <code>prop</code> function.</p>
<h2 id="what-s-a-dev-to-do">What's a dev to do?</h2>
<p>Well, what we do here is, we write a function that returns a function. These are known as <strong>higher-order functions</strong>, and they're a powerful feature of JavaScript.</p>
<p>We want to create a function (we'll still call it <code>sortByProp()</code>) that we can pass in a property name. In return, we get back a function that remembers our property name in its internal scope, but that can accept the sort function's <code>(a, b)</code> parameter signature.</p>
<p>What this pattern is doing is creating a "closure". The property is passed into the outer function as a parameter, so it solely exists within the scope of that outer function.</p>
<p>But within that, we return a function that can reference values in there. A closure needs two parts: a private scope, and some access methods into that private scope. It's a powerful technique, and one I'll be exploring more in the future.</p>
<p>Here's where we'll start: First, we need to redefine our <code>sortByProp</code> function. We know it needs to take a property, and it needs to return a function. Further, that function being returned should take the two properties that <code>sort()</code> will be passing in:</p><pre><code class="language-js">const sortByProp = function(prop){
return function(a,b){
/* here, we'll have something going on */
}
}</code></pre>
<p>Now, when we call this one, we will get back a function. So we can assign it to a variable in order to be able to call it again later:</p><pre><code class="language-js">const byLast = sortByProp('lastName');</code></pre>
<p>In that line, we've caught the function that's been returned, and stored it into <code>byLast</code>. Further, we've just created a <em>closure</em>, a reference into a closed scope that stores our <code>prop</code> variable, and that we can use later, whenever we call our <code>byLast</code> function.</p>
<p>Now, we need to revisit that <code>sortByProp</code> function and fill in what happens inside. It's the same as what we did in the first <code>sortByProp</code> function, but now it's enclosed with a function signature we can use:</p><pre><code class="language-js">const sortByProp = function(prop){
return function(a,b){
if(typeof a[prop] === 'number')
return a[prop]-b[prop];
return a[prop].localeCompare(b[prop]);
}
}</code></pre>
<p>And to use it, we can simply:</p><pre><code class="language-js">const byLast = sortByProp('lastName');
const byFirst = sortByProp('firstName');
// we can now combine, or "compose" these two:
const byLastAndFirst = function(a, b){
return byLast(a, b)
|| byFirst(a, b);
}
console.log( myArray.sort(byLastAndFirst) );</code></pre>
<p>And note that we can extend that to whatever depth we want:</p><pre><code class="language-js">const byLast = sortByProp('lastName');
const byFirst = sortByProp('firstName');
const byCountry = sortByProp('country');
const byState = sortByProp('state');
const byCity = sortByProp('city');
const byAll = (a, b)=&gt; byCountry(a, b) || byState(a, b) || byCity(a, b) || byLast(a, b) || byFirst(a, b);
console.log(myArray.sort(byAll) );</code></pre>
<p>That last example was painfully deep. And it was done on purpose. My next post will be an alternative way to do that same thing, without having to hand-code all the comparisons like that.</p>
<p>For those who like to see the complete picture, I fully expect questions about an ES6 version of that same <code>sortByProp</code> function, just because they're pretty. And they are pretty, sure, between an implicit return and the lovely ternary. Here it is, and here's the <strong><a href="https://tech.io/snippet/imU4elI">Tech.io</a></strong> for that one:</p><pre><code class="language-js">const byProp = (prop) =&gt; (a, b) =&gt; typeof(a[prop])==='number'
? a[prop]-b[prop]
: a[prop].localeCompare(b[prop]);</code></pre>
<p>Do note that this version is no better or worse than the other. It looks sleek, and it leverages some great ES6 functionality, but it sacrifices readability. A junior developer might look at that one and throw up their hands. Please, don't sacrifice maintainability for cleverness.</p>
<p>Thanks for reading, everyone!</p>
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
