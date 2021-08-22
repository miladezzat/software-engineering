---
card: "https://cdn-media-1.freecodecamp.org/images/1*An5EH7U1GKo_td9yXY2j4A.jpeg"
tags: [JavaScript]
description: by Alex Permyakov
author: "Milad E. Fahmy"
title: "How to simplify your codebase with map(), reduce(), and filter() in JavaScript"
created: "2021-08-15T19:38:17+02:00"
modified: "2021-08-15T19:38:17+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-programming tag-front-end-development tag-tech tag-productivity ">
<header class="post-full-header">
<h1 class="post-full-title">How to simplify your codebase with map(), reduce(), and filter() in JavaScript</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*An5EH7U1GKo_td9yXY2j4A.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*An5EH7U1GKo_td9yXY2j4A.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*An5EH7U1GKo_td9yXY2j4A.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*An5EH7U1GKo_td9yXY2j4A.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*An5EH7U1GKo_td9yXY2j4A.jpeg" alt="How to simplify your codebase with map(), reduce(), and filter() in JavaScript">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Alex Permyakov</p>
<h1 id="how-to-simplify-your-codebase-with-map-reduce-and-filter-in-javascript">How to simplify your codebase with map(), reduce(), and filter() in JavaScript</h1>
<figcaption>Photo by <a href="https://unsplash.com/@andersjilden" rel="noopener" target="_blank" title="">Anders Jildén</a> on <a href="https://unsplash.com/photos/Sc5RKXLBjGg" rel="noopener" target="_blank" title="">Unsplash</a></figcaption>
</figure>
<p>When you read about <strong>Array.reduce</strong> and how cool it is, the first and sometimes the only example you find is the sum of numbers. This is not our definition of ‘useful’. ?</p>
<p>Moreover, I’ve never seen it in a real codebase. But, what I’ve seen a lot is 7–8 line for-loop statements for solving a regular task where <strong>Array.reduce</strong> could do it in one line.</p>
<p>Recently I rewrote a few modules using these great functions. It surprised me how simplified the codebase became. So, below is a list of goodies.</p>
<p>If you have a good example of using a <strong>map</strong> or <strong>reduce</strong> method — post it in the comments section. ?</p>
<p>Let’s get started!</p>
<h4 id="1-remove-duplicates-from-an-array-of-numbers-strings">1. Remove duplicates from an array of numbers/strings</h4>
<p>Well, this is the only one not about <strong>map</strong>/<strong>reduce</strong>/<strong>filter</strong>, but it’s so compact that it was hard not to put it in the list. Plus we’ll use it in a few examples too.</p><pre><code class="language-js">const values = [3, 1, 3, 5, 2, 4, 4, 4];
const uniqueValues = [...new Set(values)];
// uniqueValues is [3, 1, 5, 2, 4]</code></pre>
<h4 id="2-a-simple-search-case-sensitive-">2. A simple search (case-sensitive)</h4>
<p>The <strong>filter()</strong> method creates a new array with all elements that pass the test implemented by the provided function.</p><pre><code class="language-js">const users = [
{ id: 11, name: 'Adam', age: 23, group: 'editor' },
{ id: 47, name: 'John', age: 28, group: 'admin' },
{ id: 85, name: 'William', age: 34, group: 'editor' },
{ id: 97, name: 'Oliver', age: 28, group: 'admin' }
];
let res = users.filter(it =&gt; it.name.includes('oli'));
// res is []</code></pre>
<h4 id="3-a-simple-search-case-insensitive-">3. A simple search (case-insensitive)</h4><pre><code class="language-js">let res = users.filter(it =&gt; new RegExp('oli', "i").test(it.name));
// res is
[
{ id: 97, name: 'Oliver', age: 28, group: 'admin' }
]</code></pre>
<h4 id="4-check-if-any-of-the-users-have-admin-rights">4. Check if any of the users have admin rights</h4>
<p>The <strong>some()</strong> method tests whether at least one element in the array passes the test implemented by the provided function.</p><pre><code class="language-js">const hasAdmin = users.some(user =&gt; user.group === 'admin');
// hasAdmin is true</code></pre>
<h4 id="5-flattening-an-array-of-arrays">5. Flattening an array of arrays</h4>
<p>The result of the first iteration is equal to : […[], …[1, 2, 3]] means it transforms to [1, 2, 3] — this value we provide as an <em>‘acc’ </em>on the second iteration and so on.</p><pre><code class="language-js">const nested = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let flat = nested.reduce((acc, it) =&gt; [...acc, ...it], []);
// flat is [1, 2, 3, 4, 5, 6, 7, 8, 9]</code></pre>
<p>We can slightly improve this code by omitting an empty array<code>[]</code>as the second argument for <strong>reduce(). </strong>Then the first value of the <strong>nested </strong>will be used as the initial <strong>acc</strong> value. Thanks to <a href="https://medium.com/@vladimir_efanov?source=responses---------2---------------------" rel="noopener">Vladimir Efanov</a>.</p><pre><code class="language-js">let flat = nested.reduce((acc, it) =&gt; [...acc, ...it]);
// flat is [1, 2, 3, 4, 5, 6, 7, 8, 9]</code></pre>
<p>Note that using the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax" rel="noopener">spread operator</a> inside a <strong>reduce</strong> is not great for performance. This example is a case when measuring performance makes sense for your use-case. ☝️</p>
<p>Thanks to <a href="https://medium.com/@pawewolak?source=responses---------0---------------------" rel="noopener">Paweł Wolak</a>, here is a shorter way without <strong>Array.reduce:</strong></p><pre><code class="language-js">let flat = [].concat.apply([], nested);</code></pre>
<p>Also <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat" rel="noopener"><em>Array.flat</em></a> is coming, but it’s still an experimental feature.</p>
<h4 id="6-create-an-object-that-contains-the-frequency-of-the-specified-key">6. Create an object that contains the frequency of the specified key</h4>
<p>Let’s group and count the ‘age’ property for each item in the array:</p><pre><code class="language-js">const users = [
{ id: 11, name: 'Adam', age: 23, group: 'editor' },
{ id: 47, name: 'John', age: 28, group: 'admin' },
{ id: 85, name: 'William', age: 34, group: 'editor' },
{ id: 97, name: 'Oliver', age: 28, group: 'admin' }
];
const groupByAge = users.reduce((acc, it) =&gt; {
acc[it.age] = acc[it.age] + 1 || 1;
return acc;
}, {});
// groupByAge is {23: 1, 28: 2, 34: 1}</code></pre>
<p>Thanks to <a href="https://medium.com/@krishnasai952?source=responses---------8-31--------------------" rel="noopener">sai krishna</a> for suggesting this one!</p>
<h4 id="7-indexing-an-array-of-objects-lookup-table-">7. Indexing an array of objects (lookup table)</h4>
<p>Instead of processing the whole array for finding a user by id, we can construct an object where the user’s id represents a key (with constant searching time).</p><pre><code class="language-js">const uTable = users.reduce((acc, it) =&gt; (acc[it.id] = it, acc), {})
// uTable equals:
{
11: { id: 11, name: 'Adam', age: 23, group: 'editor' },
47: { id: 47, name: 'John', age: 28, group: 'admin' },
85: { id: 85, name: 'William', age: 34, group: 'editor' },
97: { id: 97, name: 'Oliver', age: 28, group: 'admin' }
}</code></pre>
<p>It’s useful when you have to access your data by id like <code>uTable[85].name</code> a lot.</p>
<h4 id="8-extract-the-unique-values-for-the-given-key-of-each-item-in-the-array">8. Extract the unique values for the given key of each item in the array</h4>
<p>Let’s create a list of existing users’ groups. The <strong>map()</strong> method creates a new array with the results of calling a provided function on every element in the calling array.</p><pre><code class="language-js">const listOfUserGroups = [...new Set(users.map(it =&gt; it.group))];
// listOfUserGroups is ['editor', 'admin'];</code></pre>
<h4 id="9-object-key-value-map-reversal">9. Object key-value map reversal</h4><pre><code class="language-js">const cities = {
Lyon: 'France',
Berlin: 'Germany',
Paris: 'France'
};
let countries = Object.keys(cities).reduce(
(acc, k) =&gt; (acc[cities[k]] = [...(acc[cities[k]] || []), k], acc) , {});
// countries is
{
France: ["Lyon", "Paris"],
Germany: ["Berlin"]
}</code></pre>
<p>This one-liner looks quite tricky. We use the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comma_Operator" rel="noopener">comma operator</a> here, and it means we return the last value in parenthesis — <code>acc</code>. Let’s rewrite this example in a more production-ready and performant way:</p><pre><code class="language-js">let countries = Object.keys(cities).reduce((acc, k) =&gt; {
let country = cities[k];
acc[country] = acc[country] || [];
acc[country].push(k);
return acc;
}, {});</code></pre>
<p>Here we don’t use <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax" rel="noopener">spread operator</a> — it creates a new array on each <strong>reduce()</strong> call, which leads to a big performance penalty: O(n²). Instead the old good <strong>push() </strong>method<strong>.</strong></p>
<h4 id="10-create-an-array-of-fahrenheit-values-from-an-array-of-celsius-values">10. Create an array of Fahrenheit values from an array of Celsius values</h4>
<p>Think of it as processing each element with a given formula ?</p><pre><code class="language-js">const celsius = [-15, -5, 0, 10, 16, 20, 24, 32]
const fahrenheit = celsius.map(t =&gt; t * 1.8 + 32);
// fahrenheit is [5, 23, 32, 50, 60.8, 68, 75.2, 89.6]</code></pre>
<h4 id="11-encode-an-object-into-a-query-string">11. Encode an object into a query string</h4><pre><code class="language-js">const params = {lat: 45, lng: 6, alt: 1000};
const queryString = Object.entries(params).map(p =&gt; encodeURIComponent(p[0]) + '=' + encodeURIComponent(p[1])).join('&amp;')
// queryString is "lat=45&amp;lng=6&amp;alt=1000"</code></pre>
<h4 id="12-print-a-table-of-users-as-a-readable-string-only-with-specified-keys">12. Print a table of users as a readable string only with specified keys</h4>
<p>Sometimes you want to print your array of objects with selected keys as a string, but you realize that <strong>JSON.stringify</strong> is not that great ?</p><pre><code class="language-js">const users = [
{ id: 11, name: 'Adam', age: 23, group: 'editor' },
{ id: 47, name: 'John', age: 28, group: 'admin' },
{ id: 85, name: 'William', age: 34, group: 'editor' },
{ id: 97, name: 'Oliver', age: 28, group: 'admin' }
];
users.map(({id, age, group}) =&gt; `\n${id} ${age} ${group}`).join('')
// it returns:
"
11 23 editor
47 28 admin
85 34 editor
97 28 admin"</code></pre>
<p><strong>JSON.stringify </strong>can make the string output more readable, but not as a table:</p><pre><code class="language-js">JSON.stringify(users, ['id', 'name', 'group'], 2);
// it returns:
"[
{
"id": 11,
"name": "Adam",
"group": "editor"
},
{
"id": 47,
"name": "John",
"group": "admin"
},
{
"id": 85,
"name": "William",
"group": "editor"
},
{
"id": 97,
"name": "Oliver",
"group": "admin"
}
]"</code></pre>
<h4 id="13-find-and-replace-a-key-value-pair-in-an-array-of-objects">13. Find and replace a key-value pair in an array of objects</h4>
<p>Let’s say we want to change John’s age. If you know the index, you can write this line: <code>users[1].age = 29</code>. However, let’s take a look at another way of doing it:</p><pre><code class="language-js">const updatedUsers = users.map(
p =&gt; p.id !== 47 ? p : {...p, age: p.age + 1}
);
// John is turning 29 now</code></pre>
<p>Here instead of changing the single item in our array, we create a new one with only one element different. Now we can compare our arrays just by reference like <code>updatedUsers == users</code> which is super quick! React.js uses this approach to speed up the reconciliation process. <a href="https://blog.logrocket.com/immutability-in-react-ebe55253a1cc" rel="noopener">Here is an explanation.</a></p>
<h4 id="14-union-a-b-of-arrays">14. Union (A ∪ B) of arrays</h4>
<p>Less code than importing and calling the <a href="https://lodash.com/docs/4.17.11#union" rel="noopener">lodash method union</a>.</p><pre><code class="language-js">const arrA = [1, 4, 3, 2];
const arrB = [5, 2, 6, 7, 1];
[...new Set([...arrA, ...arrB])]; // returns [1, 4, 3, 2, 5, 6, 7]</code></pre>
<h4 id="15-intersection-a-b-of-arrays">15. Intersection (A ∩ B) of arrays</h4>
<p>The last one!</p><pre><code class="language-js">const arrA = [1, 4, 3, 2];
const arrB = [5, 2, 6, 7, 1];
arrA.filter(it =&gt; arrB.includes(it)); // returns [1, 2]</code></pre>
<p>As an exercise try to implement difference (A \ B) of the arrays. Hint: use an exclamation mark.</p>
<p>Thanks to <a href="https://www.reddit.com/user/Asmor" rel="noopener">Asmor</a> and <a href="https://www.reddit.com/user/incarnatethegreat" rel="noopener">incarnatethegreat</a> for their comments about #9.</p>
<h3 id="that-s-it-">That’s it!</h3>
<p>If you have any questions or feedback, let me know in the comments down below or ping me on <a href="https://twitter.com/AlexDevBB" rel="noopener">Twitter</a>.</p>
<h4 id="if-this-was-useful-please-click-the-clap-button-down-below-a-few-times-to-show-your-support-">If this was useful, please click the clap ? button down below a few times to show your support! ⬇⬇ ??</h4>
<p>Here are more articles I’ve written:</p>
<p><a href="/news/how-to-get-started-with-internationalization-in-javascript-c09a0d2cd834/"><strong>How to get started with internationalization in JavaScript</strong><br><em>By adapting our app for different languages and countries, we provide a better user experience. It’s simpler for users…</em></a></p>
<p><a href="https://medium.com/@alex.permyakov/production-ready-node-js-rest-apis-setup-using-typescript-postgresql-and-redis-a9525871407" rel="noopener"><strong>Production ready Node.js REST APIs Setup using TypeScript, PostgreSQL and Redis.</strong></a><br><a href="https://medium.com/@alex.permyakov/production-ready-node-js-rest-apis-setup-using-typescript-postgresql-and-redis-a9525871407" rel="noopener"><em>A month ago I was given a task to build a simple Search API. All It had to do is to grab some data from 3rd party…</em></a></p>
<p>Thanks for reading ❤️</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
