---
card: "https://cdn-media-1.freecodecamp.org/images/0*JFmZsramtJjAI0yJ.png"
tags: [JavaScript]
description: "In this tutorial, we’ll build a UI using Wikipedia’s public s"
author: "Milad E. Fahmy"
title: "How to use Wikipedia’s search API to build a user interface with RamdaJS"
created: "2021-08-16T11:35:14+02:00"
modified: "2021-08-16T11:35:14+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-ramda tag-technology tag-functional-programming tag-api ">
<header class="post-full-header">
<h1 class="post-full-title">How to use Wikipedia’s search API to build a user interface with RamdaJS</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/0*JFmZsramtJjAI0yJ.png 300w,
https://cdn-media-1.freecodecamp.org/images/0*JFmZsramtJjAI0yJ.png 600w,
https://cdn-media-1.freecodecamp.org/images/0*JFmZsramtJjAI0yJ.png 1000w,
https://cdn-media-1.freecodecamp.org/images/0*JFmZsramtJjAI0yJ.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/0*JFmZsramtJjAI0yJ.png" alt="How to use Wikipedia’s search API to build a user interface with RamdaJS">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<h3 id="gettingstarted">Getting Started</h3>
<p>Here’s the <a href="https://github.com/yazeedb/ramda-wikipedia-search">GitHub link</a> and <a href="https://codesandbox.io/s/y2zpq2xw39">Codesandbox link</a>. Open your terminal and pick a directory to clone it.</p>
<pre><code>git clone [https://github.com/yazeedb/ramda-wikipedia-search](https://github.com/yazeedb/ramda-wikipedia-search)
cd ramda-wikipedia-search
yarn install (or npm install)
</code></pre>
<p>The <code>master</code> branch has the finished project, so check out the <code>start</code> branch if you wish to code along.</p>
<p><code>git checkout start</code></p>
<p>And start the project!</p>
<p><code>npm start</code></p>
<p>Your browser should automatically open <a href="http://localhost:1234/">localhost:1234</a>.</p>
<h3 id="gettingtheinputvalue"><strong>Getting the Input Value</strong></h3>
<p>Here’s the initial app.</p>
<p><img src="https://cdn-media-1.freecodecamp.org/images/0*Wu4Qmu5newQZWGzt.png" alt=""></p>
<p>To capture the user’s input as they type, our <code>input</code> element needs an event listener.</p>
<p>Your <code>src/index.js</code> file is already hooked up and ready to go. You’ll notice we imported Bootstrap for styling.</p>
<p><img src="https://cdn-media-1.freecodecamp.org/images/0*qHfza67WgAEMZ-by.png" alt=""></p>
<p>Let’s add a dummy event listener to get things going.</p>
<pre><code class="language-js">import 'bootstrap/dist/css/bootstrap.min.css';
const inputElement = document.querySelector('input');
inputElement.addEventListener('keyup', (event) =&gt; {
console.log('value:', event.target.value);
});
</code></pre>
<p>We know <code>event.target.value</code>'s the standard way to access an input’s value. Now it shows the value.</p>
<p><img src="https://cdn-media-1.freecodecamp.org/images/0*NLxwt8JdO7YkAUNV.png" alt=""></p>
<p>How can Ramda help us achieve the following?</p>
<ul>
<li>Grab <code>event.target.value</code></li>
<li>Trim the output (strip leading/trailing whitespace)</li>
<li>Default to empty string if <code>undefined</code></li>
</ul>
<p>The <code>pathOr</code> function can actually handle the first and third bullet points. It takes three parameters: the default, the path, and the data.</p>
<p>So the following works perfectly</p>
<pre><code class="language-js">import { pathOr } from 'ramda';
const getInputValue = pathOr('', ['target', 'value']);
</code></pre>
<p>If <code>event.target.value</code> is <code>undefined</code>, we’ll get an empty string back!</p>
<p>Ramda also has a <code>trim</code> function, so that solves our whitespace issue.</p>
<pre><code class="language-js">import { pathOr, trim } from 'ramda';
const getInputValue = (event) =&gt; trim(pathOr('', ['target', 'value'], event));
</code></pre>
<p>Instead of nesting those functions, let’s use <code>pipe</code>. See <a href="a-quick-intro-to-pipe-and-compose">my article on pipe</a> if it’s new to you.</p>
<pre><code class="language-js">import { pathOr, pipe, trim } from 'ramda';
const getInputValue = pipe(
pathOr('', ['target', 'value']),
trim
);
</code></pre>
<p>We now have a composed function that takes an <code>event</code> object, grabs its <code>target.value</code>, defaults to <code>''</code>, and trims it.</p>
<p>Beautiful.</p>
<p>I recommend storing this in a separate file. Maybe call it <code>getInputValue.js</code> and use the default export syntax.</p>
<p><img src="https://cdn-media-1.freecodecamp.org/images/1*EKKGBfZBV5jhZRl9S7wORw.png" alt=""></p>
<h3 id="gettingthewikipediaurl">Getting the Wikipedia URL</h3>
<p>As of this writing, Wikipedia’s API search URL is <a href="https://en.wikipedia.org/w/api.php?origin=*&amp;action=opensearch&amp;search=">https://en.wikipedia.org/w/api.php?origin=*&amp;action=opensearch&amp;search=</a></p>
<p>For an actual search, just append a topic. If you need bears, for example, the URL looks like this:</p>
<p><a href="https://en.wikipedia.org/w/api.php?origin=*&amp;action=opensearch&amp;search=bears">https://en.wikipedia.org/w/api.php?origin=*&amp;action=opensearch&amp;search=bears</a></p>
<p>We’d like a function that takes a topic and returns the full Wikipedia search URL. As the user types we build the URL based off their input.</p>
<p>Ramda’s <code>concat</code> works nicely here.</p>
<pre><code class="language-js">import { concat } from 'ramda';
const getWikipediaSearchUrlFor = concat(
'https://en.wikipedia.org/w/api.php?origin=*&amp;action=opensearch&amp;search='
);
</code></pre>
<p><code>concat</code>, true to its name, concatenates strings and arrays. It’s curried so providing the URL as one argument returns a function expecting a second string. See <a href="https://medium.com/front-end-hacking/how-does-javascripts-curry-actually-work-8d5a6f891499">my article on currying</a> if it’s new!</p>
<p>Put that code into a module called <code>getUrl.js</code>.</p>
<p><img src="https://cdn-media-1.freecodecamp.org/images/1*K-qJqHr60zKPUe_-5ql5cw.png" alt=""></p>
<p>Now let’s update <code>index.js</code>. Import our two new modules, along with <code>pipe</code> and <code>tap</code> from Ramda.</p>
<pre><code class="language-js">import 'bootstrap/dist/css/bootstrap.min.css';
import { pipe, tap } from 'ramda';
import getInputValue from './getInputValue';
import getUrl from './getUrl';
const makeUrlFromInput = pipe(
getInputValue,
getUrl,
tap(console.warn)
);
const inputElement = document.querySelector('input');
inputElement.addEventListener('keyup', makeUrlFromInput);
</code></pre>
<p>This new code’s constructing our request URL from the user’s input and logging it via <code>tap</code>.</p>
<p>Check it out.</p>
<p><img src="https://cdn-media-1.freecodecamp.org/images/1*xZxxcq2MpNutqcfvzTUXKQ.png" alt=""></p>
<h3 id="makingtheajaxrequest"><strong>Making the AJAX Request</strong></h3>
<p>Next step is mapping that URL to an AJAX request and collecting the JSON response.</p>
<p>Replace <code>makeUrlFromInput</code> with a new function, <code>searchAndRenderResults</code>.</p>
<pre><code class="language-js">const searchAndRenderResults = pipe(
getInputValue,
getUrl,
(url) =&gt;
fetch(url)
.then((res) =&gt; res.json())
.then(console.warn)
);
</code></pre>
<p>Don’t forget to change your event listener too!</p>
<pre><code class="language-js">inputElement.addEventListener('keyup', searchAndRenderResults);
</code></pre>
<p>Here’s our result.</p>
<p><img src="https://cdn-media-1.freecodecamp.org/images/1*gMD8q10P6eFtW7qLNz7uXQ.png" alt=""></p>
<h3 id="makingaresultscomponent"><strong>Making a Results Component</strong></h3>
<p>Now that we have JSON, let’s create a component that pretties it up.</p>
<p>Add <code>Results.js</code> to your directory.</p>
<p><img src="https://cdn-media-1.freecodecamp.org/images/1*5L38JxtvqbyjxfVeM2lRvA.png" alt=""></p>
<p>Look back at our Wikipedia search JSON response. Note its shape. It’s an array with the following indices:</p>
<ol>
<li>Query (what you searched for)</li>
<li>Array of result names</li>
<li>Array of summaries</li>
<li>Array of links to results</li>
</ol>
<p>Our component can take an array of this shape and return a nicely formatted list. Through ES6 array destructuring, we can use that as our function signature.</p>
<p>Edit <code>Results.js</code></p>
<pre><code class="language-js">export default ([query, names, summaries, links]) =&gt; `
&lt;h2&gt;Searching for "${query}"&lt;/h2&gt;
&lt;ul class="list-group"&gt;
${names.map(
(name, index) =&gt; `
&lt;li class="list-group-item"&gt;
&lt;a href=${links[index]} target="_blank"&gt;
&lt;h4&gt;${name}&lt;/h4&gt;
&lt;/a&gt;
&lt;p&gt;${summaries[index]}&lt;/p&gt;
&lt;/li&gt;
`
)}
&lt;/ul&gt;
`;
</code></pre>
<p>Let’s go step by step.</p>
<ul>
<li>It’s a function that takes an array of our expected elements: <code>query</code>, <code>names</code>, <code>summaries</code>, and <code>links</code>.</li>
<li>Using <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals">ES6 template literals</a>, it returns an HTML string with a title and a list.</li>
<li>Inside the <code>&lt;ul&gt;</code> we map <code>names</code> to <code>&lt;li&gt;</code> tags, so one for each.</li>
<li>Inside those are <code>&lt;a&gt;</code> tags pointing to each result’s link. Each link opens in a new tab.</li>
<li>Below the link is a paragraph summary.</li>
</ul>
<p>Import this in <code>index.js</code> and use it like so:</p>
<pre><code class="language-js">// ...
import Results from './Results';
// ...
const searchAndRenderResults = pipe(
getInputValue,
getUrl,
(url) =&gt;
fetch(url)
.then((res) =&gt; res.json())
.then(Results)
.then(console.warn)
);
</code></pre>
<p>This passes the Wikipedia JSON to <code>Results</code> and logs the result. You should be seeing a bunch of HTML in your DevTools console!</p>
<p><img src="https://cdn-media-1.freecodecamp.org/images/0*_A5qIZOpTB3HPsga.png" alt=""></p>
<p>All that’s left is to render it to the DOM. A simple <code>render</code> function should do the trick.</p>
<pre><code class="language-js">const render = (markup) =&gt; {
const resultsElement = document.getElementById('results');
resultsElement.innerHTML = markup;
};
</code></pre>
<p>Replace <code>console.warn</code> with the <code>render</code> function.</p>
<pre><code class="language-js">const searchAndRenderResults = pipe(
getInputValue,
getUrl,
(url) =&gt;
fetch(url)
.then((res) =&gt; res.json())
.then(Results)
.then(render)
);
</code></pre>
<p>And check it out!</p>
<p><img src="https://cdn-media-1.freecodecamp.org/images/0*v6by39wYex3-NwIl.png" alt=""></p>
<p>Each link should open in a new tab.</p>
<h3 id="removingthoseweirdcommas"><strong>Removing Those Weird Commas</strong></h3>
<p>You may have noticed something off about our fresh UI.</p>
<p><img src="https://cdn-media-1.freecodecamp.org/images/0*ZAeJJS-ZP1YNAv5f.png" alt=""></p>
<p>It has extra commas! Why??</p>
<h3 id="templateliterals">Template Literals</h3>
<p>It’s all about how template literals join things. If you stick in an array, it’ll join it using the <code>toString()</code> method.</p>
<p>See how this becomes joined?</p>
<pre><code class="language-js">const joined = [1, 2, 3].toString();
console.log(joined);
// 1,2,3
console.log(typeof joined);
// string
</code></pre>
<p>Template literals do that if you put arrays inside of them.</p>
<pre><code class="language-js">const nums = [1, 2, 3];
const msg = `My favorite nums are ${nums}`;
console.log(msg);
// My favorite nums are 1,2,3
</code></pre>
<p>You can fix that by joining the array without commas. Just use an empty string.</p>
<pre><code class="language-js">const nums = [1, 2, 3];
const msg = `My favorite nums are ${nums.join('')}`;
console.log(msg);
// My favorite nums are 123
</code></pre>
<p>Edit <code>Results.js</code> to use the <code>join</code> method.</p>
<pre><code class="language-jsx">export default ([query, names, summaries, links]) =&gt; `
&lt;h2&gt;Searching for "${query}"&lt;/h2&gt;
&lt;ul class="list-group"&gt;
${names
.map(
(name, index) =&gt; `
&lt;li class="list-group-item"&gt;
&lt;a href=${links[index]} target="_blank"&gt;
&lt;h4&gt;${name}&lt;/h4&gt;
&lt;/a&gt;
&lt;p&gt;${summaries[index]}&lt;/p&gt;
&lt;/li&gt;
`
)
.join('')}
&lt;/ul&gt;
`;
</code></pre>
<p>Now your UI’s much cleaner.</p>
<p><img src="https://cdn-media-1.freecodecamp.org/images/0*JFmZsramtJjAI0yJ.png" alt=""></p>
<h3 id="fixingalittlebug"><strong>Fixing a Little Bug</strong></h3>
<p>I found a little bug while building this. Did you notice it?</p>
<p><img src="https://cdn-media-1.freecodecamp.org/images/0*8qwAFsWU_6nKuXUH.png" alt=""></p>
<p>Emptying the <code>input</code> throws this error.</p>
<p><img src="https://cdn-media-1.freecodecamp.org/images/0*-aUVIsS0rtQoVomy.png" alt=""></p>
<p>That’s because we’re sending an AJAX request without a search topic. Check out the URL in your Network tab.</p>
<p><img src="https://cdn-media-1.freecodecamp.org/images/0*4cDzbOBm8Sw7KDwy.png" alt=""></p>
<p>That link points to a default HTML page. We didn’t get JSON back because we didn’t specify a search topic.</p>
<p>To prevent this from happening we can avoid sending the request if the <code>input</code>'s empty.</p>
<p>We need a function that <strong>does nothing</strong> if the <code>input</code>'s empty, and <strong>does the search</strong> if it’s filled.</p>
<p>Let’s first create a function called <code>doNothing</code>. You can guess what it looks like.</p>
<pre><code class="language-js">const doNothing = () =&gt; {};
</code></pre>
<p>This is better known as <code>noOp</code>, but I like <code>doNothing</code> in this context.</p>
<p>Next remove <code>getInputValue</code> from your <code>searchAndRenderResults</code> function. We need a bit more security before using it.</p>
<pre><code class="language-js">const searchAndRenderResults = pipe(
getUrl,
(url) =&gt;
fetch(url)
.then((res) =&gt; res.json())
.then(Results)
.then(render)
);
</code></pre>
<p>Import <code>ifElse</code> and <code>isEmpty</code> from Ramda.</p>
<pre><code class="language-js">import { ifElse, isEmpty, pipe, tap } from 'ramda';
</code></pre>
<p>Add another function, <code>makeSearchRequestIfValid</code>.</p>
<pre><code class="language-js">const makeSearchRequestIfValid = pipe(
getInputValue,
ifElse(isEmpty, doNothing, searchAndRenderResults)
);
</code></pre>
<p>Take a minute to absorb that.</p>
<p>If the input value’s empty, do nothing. Else, search and render the results.</p>
<p>You can gather that information just by reading the function. <em>That’s</em> expressive.</p>
<p>Ramda’s <a href="https://ramdajs.com/docs/#isEmpty">isEmpty</a> function works with strings, arrays, objects.</p>
<p><img src="https://cdn-media-1.freecodecamp.org/images/0*VSddS4PKGUKcW_NC.png" alt=""></p>
<p>This makes it perfect to test our input value.</p>
<p><code>ifElse</code> fits here because when <code>isEmpty</code> returns true, <code>doNothing</code> runs. Otherwise <code>searchAndRenderResults</code> runs.</p>
<p>Lastly, update your event handler.</p>
<pre><code class="language-js">inputElement.addEventListener('keyup', makeSearchRequestIfValid);
</code></pre>
<p>And check the results. No more errors when clearing the <code>input</code>!</p>
<p><img src="https://cdn-media-1.freecodecamp.org/images/0*rKRi-EEHpN0FaRER.png" alt=""></p>
<p>This tutorial was from <strong>my</strong> <strong>completely free</strong> <strong>course</strong> on Educative.io, <a href="https://www.educative.io/collection/5070627052453888/5738600293466112?authorName=Yazeed%20Bzadough">Functional Programming Patterns With RamdaJS</a>!</p>
<p>Please consider taking/sharing it if you enjoyed this content.</p>
<p>It’s full of lessons, graphics, exercises, and runnable code samples to teach you a basic functional programming style using RamdaJS.</p>
<p>Thank you for reading ❤️</p>
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
