---
card: "/images/default.jpg"
tags: [JavaScript]
description: Array.map might be JavaScript's most useful function. Forgoin
author: "Milad E. Fahmy"
title: "Array.map explained at 4 levels of complexity: from a 5-year old to a Functional Programmer."
created: "2021-08-15T19:33:17+02:00"
modified: "2021-08-15T19:33:17+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-arrays tag-react tag-functional-programming ">
<header class="post-full-header">
<h1 class="post-full-title">Array.map explained at 4 levels of complexity: from a 5-year old to a Functional Programmer.</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2019/07/4-levels-of-explanation.png 300w,
/news/content/images/size/w600/2019/07/4-levels-of-explanation.png 600w,
/news/content/images/size/w1000/2019/07/4-levels-of-explanation.png 1000w,
/news/content/images/size/w2000/2019/07/4-levels-of-explanation.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2019/07/4-levels-of-explanation.png" alt="Array.map explained at 4 levels of complexity: from a 5-year old to a Functional Programmer.">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p><code>Array.map</code> might be JavaScript's most useful function. Forgoing it nowadays is like donning your toolbelt without a hammer.</p>
<p>To further appreciate <code>map</code> and deepen our understanding of it, let's see 4 levels of explanations in ascending complexity.</p>
<p>Tell me which ones you got and which ones surprised you!</p>
<h2 id="tableofcontents">Table of Contents</h2>
<ol>
<li><a href="#toafiveyearold">To a Five Year Old</a></li>
<li><a href="#toahighschoolcodingstudent">To a High School Coding Student</a></li>
<li><a href="#toareactdeveloper">To a React Developer</a></li>
<li><a href="#toafunctionalprogrammer">To a Functional Programmer</a></li>
</ol>
<h2 id="toafiveyearold">To a Five Year Old</h2>
<p>Do you know DragonBall Z? Here are my favorite characters from the show!</p>
<h4 id="goku">Goku</h4>
<p><img src="https://www.freecodecamp.org/news/content/images/2019/07/goku-saluting-1.png" alt="goku-saluting-1"></p>
<h4 id="vegeta">Vegeta</h4>
<p><img src="https://www.freecodecamp.org/news/content/images/2019/07/vegeta-standing-2.png" alt="vegeta-standing-2"></p>
<h4 id="trunks">Trunks</h4>
<p><img src="https://www.freecodecamp.org/news/content/images/2019/07/trunks-with-sword-1.png" alt="trunks-with-sword-1"></p>
<p>They're saiyans, and they're really strong!</p>
<p>I put them in this list–JavaScript calls them <em>arrays</em>. It lets you hold a bunch of things together:</p>
<pre><code class="language-js">saiyans = [goku, vegeta, trunks];
</code></pre>
<p>And I have code that turns them into Super Saiyans, so they get 50x stronger (literally)! This code is called a <em>function</em>.</p>
<pre><code class="language-js">turnSuperSaiyan = () =&gt; { /* use your imagination */ };
turnSuperSaiyan(goku);
</code></pre>
<p><img src="https://www.freecodecamp.org/news/content/images/2019/07/transforming-goku.png" alt="transforming-goku"></p>
<p>What if I want to transform all 3 of them? I have to run the function 3 times! Repeating things like that is boring ?</p>
<pre><code class="language-js">turnSuperSaiyan(goku);
turnSuperSaiyan(vegeta);
turnSuperSaiyan(trunks);
</code></pre>
<p>Luckily, programming lets you repeat things lots of times really easily! <code>Array.map</code> can turn them all into Super Saiyans at once!</p>
<p>Just plug <code>turnSuperSaiyan</code> in there and get back a <em>new array</em> of Super Saiyan Goku, Vegeta, and Trunks.</p>
<pre><code class="language-js">superSaiyans = saiyans.map(turnSuperSaiyan);
</code></pre>
<p><img src="https://www.freecodecamp.org/news/content/images/2019/07/mapping-saiyans.png" alt="mapping-saiyans"></p>
<h2 id="toahighschoolcodingstudent">To a High School Coding Student</h2>
<p>Hi!</p>
<p>So you've learned <code>for</code> loops. They're great for performing repetitive work, but I personally haven't needed one in years.</p>
<p>Don't get me wrong, I still love automating repetitive work. In fact, most applications involve repetitive work.</p>
<p>Think of these examples...</p>
<ul>
<li>Instagram</li>
<li>Whatsapp</li>
<li>Google search results</li>
<li>Emails</li>
<li>Contacts</li>
<li>Text messages</li>
</ul>
<p>If you boil them down to the core, these everyday apps are just fancy lists. Much of Front-End development is transforming these lists into something user-friendly.</p>
<p>Of course the big picture is more complex, but the core of most apps is manipulating lists!</p>
<p>In a JavaScript program, we represent lists as arrays.</p>
<p>All arrays carry a special method called <code>map</code>. It lets you transform an array into a new one based on some function you give it.</p>
<p>Here's some numbers.</p>
<pre><code class="language-js">numbers = [1, 2, 3, 4, 5];
</code></pre>
<p>And a <code>double</code> function.</p>
<pre><code class="language-js">double = (x) =&gt; x * 2;
</code></pre>
<p>Can you double each one using a <code>for</code> loop?</p>
<pre><code class="language-js">doubledNumbers = [];
for (let i = 0; i &lt; numbers.length; i++) {
doubledNumbers.push(double(numbers[i]))
}
// [2, 4, 6, 8, 10]
</code></pre>
<p>Cool! Here's the same idea expressed with <code>map</code>.</p>
<pre><code class="language-js">doubledNumbers = numbers.map(double);
// [2, 4, 6, 8, 10]
</code></pre>
<p><code>map</code> constructs the loop under the hood, so you don't have to worry about typos or missing semicolons anymore!</p>
<p><img src="https://www.freecodecamp.org/news/content/images/2019/07/cant-forget-semis-if-you-forget-loops.jpeg" alt="cant-forget-semis-if-you-forget-loops"></p>
<p>And this goes beyond just numbers. Here's some users...</p>
<pre><code class="language-js">users = [{
name: 'Bruce Wayne',
location: 'Gotham City',
heroName: 'Batman'
}, {
name: 'Barry Allen',
location: 'Central City',
heroName: 'The Flash'
}, {
name: 'Clark Kent',
location: 'Kryptonopolis',
heroName: 'Superman'
}];
</code></pre>
<p>How would you create <em>a new array</em> of every user's <code>name</code> and <code>heroName</code>? Probably using a <code>for</code> loop.</p>
<pre><code class="language-js">userInfo = [];
for (let i = 0; i &lt; users.length; i++) {
userInfo.push({
name: users[i].name,
heroName: users[i].heroName
});
}
// Result
[
{
"name": "Bruce Wayne",
"heroName": "Batman"
},
{
"name": "Barry Allen",
"heroName": "The Flash"
},
{
"name": "Clark Kent",
"heroName": "Superman"
}
]
</code></pre>
<p>Here's a loop-less version.</p>
<pre><code class="language-js">userInfo = users.map(u =&gt; ({
name: u.name,
heroName: u.heroName
}));
// Result
[
{
"name": "Bruce Wayne",
"heroName": "Batman"
},
{
"name": "Barry Allen",
"heroName": "The Flash"
},
{
"name": "Clark Kent",
"heroName": "Superman"
}
]
</code></pre>
<p>See how much easier that is? We can implement <code>map</code> like so:</p>
<pre><code class="language-js">map = (fn, array) =&gt; {
const results = [];
for (let i = 0; i &lt; array.length; i++) {
results.push(fn(array[i]));
}
return results;
}
</code></pre>
<p>So for every element, call the given function and store it inside a new array!</p>
<h2 id="toareactdeveloper">To a React Developer</h2>
<p>Hi!</p>
<p>The Array prototype offers a method called <code>map</code>.</p>
<p>It will loop over your array, calling a given function on each item, and return a new array with those changes.</p>
<p>Instead of a <code>for</code> loop, just use <code>map</code> to get usernames and render the UI.</p>
<pre><code class="language-jsx">const App = users =&gt; {
return (
&lt;ul&gt;
&lt;li&gt;My name is {users.map(u =&gt; u.name)}!&lt;/li&gt;
&lt;/ul&gt;
);
};
</code></pre>
<p>Yep you can method chain, since it returns the same type!</p>
<pre><code class="language-jsx">const App = users =&gt; {
return (
&lt;ul&gt;
{users
.map(u =&gt; u.name)
.map(name =&gt; (
&lt;li&gt;My name is {name}!&lt;/li&gt;
))}
&lt;/ul&gt;
);
};
</code></pre>
<p>Tremendously useful. Most of your main components will probably use <code>map</code>.</p>
<h2 id="toafunctionalprogrammer">To a Functional Programmer</h2>
<p>Map simply lifts a function <code>a -&gt; b</code> into a context <code>F a -&gt; F b</code>.</p>
<p><img src="https://www.freecodecamp.org/news/content/images/2019/07/functors.png" alt="functors"></p>
<p>JavaScript doesn't extend this expressibility beyond arrays, unfortunately...</p>
<p><img src="https://www.freecodecamp.org/news/content/images/2019/07/i-think-harold-gets-it.jpg" alt="i-think-harold-gets-it"></p>
<p>Thank you Brian Lonsdorf for <a href="https://twitter.com/yazeedBee/status/1150108731759300608">the wicked explanation</a>!</p>
<p>For more content like this, check out <a href="https://yazeedb.com">https://yazeedb.com!</a></p>
<p>And please let me know what else you'd like to see! <a href="https://twitter.com/yazeedBee">My DMs are open</a> for questions, comments, and suggestions!</p>
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
