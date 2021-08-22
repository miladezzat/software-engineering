---
card: "https://cdn-media-1.freecodecamp.org/images/1*krm8DV5lopMRYxuH0DevlQ.jpeg"
tags: [JavaScript]
description: There’s nothing as flashy and useful for JavaScript interview
author: "Milad E. Fahmy"
title: "How to impress interviewers by using recursion in JavaScript with ES6 features"
created: "2021-08-15T19:41:33+02:00"
modified: "2021-08-15T19:41:33+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-es6 tag-interview tag-tech tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">How to impress interviewers by using recursion in JavaScript with ES6 features</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*krm8DV5lopMRYxuH0DevlQ.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*krm8DV5lopMRYxuH0DevlQ.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*krm8DV5lopMRYxuH0DevlQ.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*krm8DV5lopMRYxuH0DevlQ.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*krm8DV5lopMRYxuH0DevlQ.jpeg" alt="How to impress interviewers by using recursion in JavaScript with ES6 features">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>There’s nothing as flashy and useful for JavaScript interviews than recursion.</p>
<p>If you just want to be impressive with recursion in JavaScript, here are some semi real-world (technical test type) examples.</p>
<p>The short definition of a recursive solution to a problem (in computer science) is: don’t use iteration. This usually means a function has to call itself with a smaller instance of the same problem. It does this until it hits a trivial case (usually defined in the problem).</p>
<p>Hence, recursion is composed of a couple of steps.</p>
<p>In this post, we’ll discuss:</p>
<ul>
<li>? Recursion to wrap sequential HTTP requests</li>
<li>? Count number of characters</li>
</ul>
<p>The examples for this post are also on <a href="http://beta.observablehq.com/" rel="noopener nofollow">ObervableHQ</a>, which is a super cool tool that allows you to build JavaScript notebooks:</p>
<ul>
<li><a href="https://beta.observablehq.com/@hugodf/recursion-to-wrap-http-requests" rel="noopener nofollow">Recursion to wrap sequential HTTP request</a></li>
<li><a href="https://beta.observablehq.com/@hugodf/count-something-in-something-else" rel="noopener nofollow">Count number of characters</a></li>
</ul>
<h1 id="recursion-to-wrap-sequential-http-requests">? Recursion to wrap sequential HTTP requests</h1>
<p>Say you need to get multiple pages from a REST API and you’re forced to use the native HTTPS module, (<a href="https://beta.observablehq.com/@hugodf/recursion-to-wrap-http-requests" rel="noopener nofollow">example here</a>). In this situation, we’ll be fetching comments from the Reddit API.</p>
<p>With this API:</p>
<ul>
<li>if there are more comments than fit in one response, it will return an <code>after</code> field in the data. This can be used as a query param in a request to get the next chunk of comments</li>
<li>if there are no more comments, <code>after</code> will be falsy</li>
</ul>
<p>That defines our terminating and recursive cases. We fetch data from the Reddit API and then either:</p>
<ul>
<li><code>after</code> is falsy → <strong><strong>terminating case</strong></strong>, return the data</li>
<li><code>after</code> is defined → <strong><strong>recursive case</strong></strong>, pass it to fetch the next page as well as data returned from the current call</li>
</ul>
<p>One of the tricks used here is passing an empty <code>data</code> array into the <code>recursiveCommentFetch</code> function from the first pass. This allows us to keep injecting more and more values as we go through each recursive call. We are able to resolve to the full set at the terminating case.</p><pre><code class="language-js">const fetch = require('node-fetch');
const user = 'hugo__df';
function makeRedditCommentUrl(user, queryParams) {
return `https://www.reddit.com/user/${user}/comments.json?${
Object.entries(queryParams)
.filter(([k, v]) =&gt; Boolean(v))
.map(
([k, v]) =&gt; `${k}=${v}`
).join('&amp;')
}`;
}
function recursiveCommentFetch(user, data = [], { after, limit = 100 } = {}) {
const url = makeRedditCommentUrl(user, { after, limit });
return fetch(url)
.then(res =&gt; res.json())
.then(res =&gt; {
const { after, children } = res.data;
const newData = [...data, ...children];
if (after) {
// recursive case, there's a way to fetch more comments
return recurseCommentFetch(user, newData, { after });
}
// base or terminating case
return newData;
});
}
recursiveCommentFetch(user)
.then(comments =&gt; console.log(comments));</code></pre>
<p>I familiarized myself with this API by creating the following visualization for Reddit contributions (in GitHub’s contribution graph style). <a href="https://beta.observablehq.com/@hugodf/reddit-contributions-per-week-graph" rel="noopener nofollow">See it here</a>. The <a href="https://accountableblogging.com/post-frequency" rel="noopener nofollow">blog version is also live</a>.</p>
<h1 id="count-number-of-characters">? Count number of characters</h1>
<p>When the question goes something like this: “given an input, return an object containing how many times each character is present in the input” you’ll use this method.</p>
<p>There’s a <a href="https://beta.observablehq.com/@hugodf/count-something-in-something-else" rel="noopener nofollow">live demo here</a>.</p>
<p>The terminating and recursive case isn’t immediately obvious, so there are a few leaps here:</p>
<ol>
<li>understanding that an input can be cast to a string, which can be <code>.split</code> into an Array (ie. most arbitrary input can be converted into an Array).</li>
<li>knowing how to recurse through an Array. It’s probably one of the easier/most common things to recurse through. But it takes seeing it a couple of times to start feeling comfortable doing it.</li>
</ol>
<p>That gives us the following situation for a recursive function:</p>
<ul>
<li>list/array of characters is empty → <strong><strong>terminating case</strong></strong>, return the <code>characterToCount</code> map</li>
<li>list/array of characters is not empty → <strong><strong>recursive case</strong></strong>, update <code>characterToCountMap</code> by incrementing/ initializing the current character’s entry. Call the recursive function with the updated map and the rest of the list/array.</li>
</ul>
<p>I’ve written a more complete post: <a href="https://codewithhugo.com/recursion-in-javascript-with-es6-destructuring-and-rest/spread/" rel="noopener nofollow"><strong><strong>Recursion in JavaScript with ES6, destructuring and rest/spread</strong></strong></a>, which goes into more detail (examples and techniques) about how we can recurse through lists (arrays) in ES6 JavaScript. It explains things like the <code>[firstCharacter, ...rest]</code> notation.</p><pre><code class="language-js">function recurseCountCharacters(
[firstCharacter, ...rest],
characterToCountMap = {}
) {
const currentCharacterCount = characterToCountMap[firstCharacter] || 0;
const newCharacterToCountMap = {
...characterToCountMap,
[firstCharacter]: currentCharacterCount + 1
};
if (rest.length === 0) {
// base/terminating case
// -&gt; nothing characters left in the string
return newCharacterToCountMap;
}
// recursive case
return recurseCountCharacters(rest, newCharacterToCountMap);
}
function countCharacters(input) {
return recurseCountCharacters(String(input).split(''));
}
console.log(countCharacters(1000000));
// { "0":6, "1": 1 }
console.log(countCharacters('some sentence'));
// { "s":2,"o":1,"m":1,"e":4," ":1,"n":2,"t":1,"c":1}</code></pre>
<p>That’s how you breeze through interviews using recursion ?, running circles around those toy problems.</p>
<p>Recursive solutions to interview problems end up looking cooler and cleaner than iterative ones. They’re interviewer eye-candy.</p>
<p>For any questions, you can reach me on Twitter <a href="https://twitter.com/hugo__df" rel="noopener nofollow">@hugo__df</a>.</p>
<p>Get all the posts of the week before anyone else in your inbox: <a href="https://buttondown.email/hugo" rel="noopener nofollow">Code with Hugo newsletter</a>.</p>
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
