---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c9a98740569d1a4ca2689.jpg"
tags: [JavaScript]
description: jQuery makes it easy to get your project up and running. Thou
author: "Milad E. Fahmy"
title: "Targeting Click of “Clear” Button (X) on Input Field"
created: "2021-08-15T19:29:31+02:00"
modified: "2021-08-15T19:29:31+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-jquery tag-toothbrush ">
<header class="post-full-header">
<h1 class="post-full-title">Targeting Click of “Clear” Button (X) on Input Field</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c9a98740569d1a4ca2689.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9a98740569d1a4ca2689.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9a98740569d1a4ca2689.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9a98740569d1a4ca2689.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c9a98740569d1a4ca2689.jpg" alt="Targeting Click of “Clear” Button (X) on Input Field">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>jQuery makes it easy to get your project up and running. Though it's fallen out of favor in recent years, it's still worth learning the basics, especially if you want quick access to its powerful methods.</p>
<p>But while jQuery is a powerful library, it can't do everything. That's where having solid understanding of vanilla JavaScript comes in handy.</p>
<p>Say you have a <a href="https://www.freecodecamp.org/learn/coding-interview-prep/take-home-projects/build-a-wikipedia-viewer">Wikipedia Viewer</a> project like this:</p>
&lt;p id="text"&gt;Search on Wikipedia&lt;/p&gt;
&lt;input id="searchbox" type="search"&gt;&lt;/input&gt;
&lt;button id="searchbutton"&gt;Search&lt;/button&gt;
&lt;a href="https://en.wikipedia.org/wiki/Special:Random" target="_blank"&gt;&lt;button id="searchbutton"&gt;Random Article&lt;/button&gt;&lt;/a&gt;
&lt;div class="resultingarticles"&gt;&lt;/div&gt;
&lt;/div&gt;</code></pre>
<figcaption>Source: <a href="https://codepen.io/sk1995/pen/YYEbYz">Sandris Kupavskis</a></figcaption>
</figure><pre><code class="language-js">$("#searchbox").keyup(function(event) {
if(event.keyCode === 13) {
$("#searchbutton").click();
};
});
$("#searchbutton").click(function() {
var searchInput = document.getElementById("searchbox").value;
searchInput = searchInput.toLowerCase();
if(searchInput !== "") {
var myRequest = new XMLHttpRequest();
myRequest.open('GET','https://en.wikipedia.org/w/api.php?action=query&amp;list=search&amp;srsearch='+ searchInput + '&amp;utf8=&amp;format=json&amp;origin=*');
myRequest.onload = function() {
var searchResults = JSON.parse(myRequest.responseText);
$(".resultingarticles").empty();
for(i=0; i&lt;10; i++) {
var articleTitle = searchResults.query.search[i].title;
var articleSnippet = searchResults.query.search[i].snippet;
var articleId = searchResults.query.search[i].pageid;
var articleLink = "https://en.wikipedia.org/?curid=" + articleId;
$(".resultingarticles").append("&lt;a href='" + articleLink + "' target='_blank'&gt;" + "&lt;div class='article'&gt;" + "&lt;p&gt;"+articleTitle+"&lt;/p&gt;" + "&lt;p&gt;" + articleSnippet + "&lt;/p&gt;" + "&lt;/div&gt;" + "&lt;/a&gt;");
};
};
myRequest.send();
};
});</code></pre>
<p>Everything is working as you expect – you can enter text into the search box, hit enter or the "Search" button, and see a list of Wikipedia articles.</p>
<p>Because you're using <code>type="search"</code> on your <code>input</code> element, the Chrome browser will automatically add an "X" to the end of the input if there's text and you hover over the input. Note that other browsers might handle <code>type="search"</code> differently.</p>
<p>When you click on the "X", the text disappears.</p>
<p>But say you already have a list of articles, and when you clear the text, you also want to clear the populated articles:</p>
<p>It turns out that clicking the "X" in the search box fires a "search" event. jQuery doesn't support the "search" event, so you'll have to write an event listener in vanilla JavaScript:</p><pre><code class="language-js">document.getElementById("searchbox").addEventListener("search", function(event) {
$(".resultingarticles").empty();
});</code></pre>
<p>Now when a search event is fired, you can use jQuery to clear the <code>div</code> element with the articles:</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
