---
card: "https://cdn-media-1.freecodecamp.org/images/1*Ye9GrpJqOsiaZPbMeZkpGQ.png"
tags: [JavaScript]
description: 30 Seconds of Code is a brilliant collection of JavaScript sn
author: "Milad E. Fahmy"
title: "How to conditionally change values with when() in JavaScript"
created: "2021-08-15T19:46:22+02:00"
modified: "2021-08-15T19:46:22+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-functional-programming tag-react tag-tech tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">How to conditionally change values with when() in JavaScript</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*Ye9GrpJqOsiaZPbMeZkpGQ.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*Ye9GrpJqOsiaZPbMeZkpGQ.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*Ye9GrpJqOsiaZPbMeZkpGQ.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*Ye9GrpJqOsiaZPbMeZkpGQ.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*Ye9GrpJqOsiaZPbMeZkpGQ.png" alt="How to conditionally change values with when() in JavaScript">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>30 Seconds of Code is a brilliant collection of JavaScript snippets, digestible in ≤ 30 seconds. <strong>Anyone looking to master JavaScript should go through the entire thing.</strong></p>
<p>Inspired by <a href="http://ramdajs.com/docs/#when">Ramda</a>, I contributed <code>when()</code> to 30secondsofcode’s <a href="https://github.com/Chalarangelo/30-seconds-of-code/pull/652">official GitHub repo</a>. This is one my favorite functions.</p>
<p><code>when()</code> takes 3 parameters:</p>
<ol>
<li><code>pred</code>: A predicate function (must return <code>true</code> or <code>false</code>)</li>
<li><code>whenTrue</code>: A function to run if <code>pred</code> returns <code>true</code>.</li>
<li>A value: <code>x</code>.</li>
</ol>
<p>Here’s the most basic implementation:</p>
<pre><code class="language-js">when = (pred, whenTrue, x) =&gt; {
if (pred(x)) {
return whenTrue(x);
} else {
return x;
}
};
</code></pre>
<p>Which you can shorten to:</p>
<pre><code class="language-js">when = (pred, whenTrue, x) =&gt; (pred(x) ? whenTrue(x) : x);
</code></pre>
<p>Let’s say we want to triple even numbers</p>
<pre><code class="language-js">when((x) =&gt; x % 2 === 0, (x) =&gt; x * 3, 2);
// 6
</code></pre>
<p>We got <code>6</code> because <code>2</code> is an even number. What if we pass <code>11</code>?</p>
<pre><code class="language-js">when((x) =&gt; x % 2 === 0, (x) =&gt; x * 3, 11);
// 11
</code></pre>
<h3 id="astepfurther">A Step Further</h3>
<p><code>when</code> currently needs all 3 parameters at once–what if we could supply just the first 2, and give <code>x</code> later on?</p>
<pre><code class="language-js">when = (pred, whenTrue) =&gt; (x) =&gt; (pred(x) ? whenTrue(x) : x);
</code></pre>
<p>This version’s what I submitted to <a href="https://30secondsofcode.org/function#when">30secondsofcode.org</a>. Now our code’s more flexible.</p>
<pre><code class="language-js">tripleEvenNums = when((x) =&gt; x % 2 === 0, (x) =&gt; x * 3);
tripleEvenNums(20); // 60
tripleEvenNums(21); // 21
tripleEvenNums(22); // 66
</code></pre>
<h3 id="evenfurtherbeyond">Even Further Beyond</h3>
<p>We can pass <code>x</code> later because <code>when(pred, whenTrue)</code> returns a function expecting <code>x</code>. What if we curry <code>when()</code>?</p>
<p>If you’re new to currying see <a href="https://medium.com/front-end-hacking/how-does-javascripts-curry-actually-work-8d5a6f891499">my article</a> on it.</p>
<p>A curried function doesn’t need all its parameters at once. You can supply some and get a function that takes the rest, allowing for powerful patterns.</p>
<h4 id="asillyexample">A Silly Example</h4>
<p>Imagine we have two lists of people, both contain a guy named <code>Bobo</code>.</p>
<p><code>Bobo</code> wants a nickname for each list.</p>
<ul>
<li>If we find <code>Bobo</code> in list 1, change his name to <code>B Money</code>.</li>
<li>If we find <code>Bobo</code> in list 2, change his name to <code>Bo-bob</code>.</li>
</ul>
<p>Currying <code>when</code> allows us to easily write a function for each concern.</p>
<p>If you’re following along, here’s a <code>curry</code> function from <a href="https://30secondsofcode.org/function#curry">30secondsofcode.org</a>.</p>
<pre><code class="language-js">curry = (fn, arity = fn.length, ...args) =&gt;
arity &lt;= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);
</code></pre>
<p>We’ll need a predicate to find <code>Bobo</code>.</p>
<pre><code class="language-js">isBobo = (person) =&gt; person.name === 'Bobo';
</code></pre>
<p>To keep our functions pure, we’ll need a way to <em>immutably</em> change a person’s name.</p>
<pre><code class="language-js">changeName = (newName, obj) =&gt; ({
...obj,
name: newName
});
</code></pre>
<p>Let’s also curry it so we can supply just <code>newName</code>.</p>
<pre><code class="language-js">changeName = curry((newName, obj) =&gt; ({
...obj,
name: newName
}));
</code></pre>
<p>Here’s our lists.</p>
<pre><code class="language-js">list1 = [
{
name: 'Bobo',
id: 1,
iq: 9001
},
{
name: 'Jaime',
id: 2,
iq: 9000
},
{
name: 'Derek',
id: 3,
iq: 8999
}
];
list2 = [
{
name: 'Sam',
id: 1,
iq: 600
},
{
name: 'Bobo',
id: 2,
iq: 9001
},
{
name: 'Peter',
id: 3,
iq: 8
}
];
</code></pre>
<p>Let’s map over <code>list1</code>.</p>
<pre><code class="language-js">doIfBobo = when(isBobo);
renameToBMoney = changeName('B Money');
list1.map(doIfBobo(renameToBMoney));
</code></pre>
<p>Our result:</p>
<pre><code class="language-js">[
{
name: 'B Money',
id: 1,
iq: 9001
},
{
name: 'Jaime',
id: 2,
iq: 9000
},
{
name: 'Derek',
id: 3,
iq: 8999
}
];
</code></pre>
<p>Because of <code>when</code>, we only changed <code>Bobo</code> and ignored everyone else!</p>
<p>Now map over <code>list2</code>.</p>
<pre><code class="language-js">renameToBoBob = changeName('Bo-bob');
list2.map(doIfBobo(renameToBoBob));
</code></pre>
<pre><code class="language-js">Our result:
[{
"name": "Sam",
"id": 1,
"iq": 600
},
{
"name": "Bo-bob",
"id": 2,
"iq": 9001**
},
{
"name": "Peter",
"id": 3,
"iq": 8
}
];
</code></pre>
<p>Looks good to me! We gave <code>Bobo</code> his nicknames without affecting anyone else.</p>
<p>If you’re further interested, consider these links:</p>
<ul>
<li><a href="https://30secondsofcode.org/array">30secondsofcode.org’s collection</a></li>
<li><a href="https://medium.com/front-end-hacking/how-does-javascripts-curry-actually-work-8d5a6f891499">My article on currying</a></li>
<li><a href="http://ramdajs.com/docs/">Ramda</a></li>
</ul>
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
