---
card: "/images/default.jpg"
tags: [JavaScript]
description: "Search is a powerful way help people visiting your site find "
author: "Milad E. Fahmy"
title: "How to Add Search to a React App with Fuse.js"
created: "2021-08-16T11:27:39+02:00"
modified: "2021-08-16T11:27:39+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-technology tag-tech tag-programming tag-frontend tag-front-end tag-front-end-development tag-js tag-json tag-fuse-js tag-search tag-reactjs tag-react-hooks tag-react ">
<header class="post-full-header">
<h1 class="post-full-title">How to Add Search to a React App with Fuse.js</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/05/fusejs-1.jpg 300w,
/news/content/images/size/w600/2020/05/fusejs-1.jpg 600w,
/news/content/images/size/w1000/2020/05/fusejs-1.jpg 1000w,
/news/content/images/size/w2000/2020/05/fusejs-1.jpg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/05/fusejs-1.jpg" alt="How to Add Search to a React App with Fuse.js">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
</code></pre><p><a href="https://github.com/colbyfayock/my-futurama-characters/tree/start">Git branch "start"</a></p><p>Or <a href="https://github.com/colbyfayock/my-futurama-characters/commit/20d4e42aaf69e214b63e684e012cd2f8c95d427b">follow along with the commit</a>.</p><h2 id="step-1-installing-fuse-js">Step 1: Installing Fuse.js</h2><p>First thing we'll want to do is actually add Fuse.js to our app. In your project, run:</p><pre><code class="language-shell">yarn add fuse.js
# or
npm install --save fuse.js
</code></pre><p>This will save the dependency to our project so that we'll be able to use it in our project.</p><p>Next we'll want to import the dependency to our app so that we can start building with it. At the top of your file, in our case <code>src/App.js</code> if you're following along with me in a new Create React App project, add:</p><pre><code class="language-js">import Fuse from 'fuse.js';
keys: [
'name',
'company',
'species'
]
});
</code></pre><p>With this does:</p><ul><li>Creates a new instance of Fuse</li><li>Passes in our <code>characters</code> array of objects</li><li>Specifies the 3 keys in our data that we want to search on</li></ul><p>Next, to perform the search, we can add:</p><pre><code class="language-js">const results = fuse.search('bender');
keys: [
'name',
'company',
'species'
],
includeScore: true
});
const characterResults = results.map(character =&gt; character.item);
</code></pre><p>What this is doing is creating a new array using the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map">map</a> method that will only include the <code>item</code> property from each array object.</p><p>Then if we replace our <code>characters</code> map inside of our list with <code>characterResults.map</code>:</p><pre><code class="language-jsx">&lt;ul className="characters"&gt;
{characterResults.map(character =&gt; {
const { name, company, species, thumb } = character;
</code></pre><p>Next, let's use that hook to create a state instance:</p><pre><code class="language-js">const [query, updateQuery] = useState('');
</code></pre><p>Here, we're creating a new state of <code>query</code> that we can update with <code>updateQuery</code> that defaults to an empty string (<code>''</code>).</p><p>With that, let's tell our search input to use that <code>query</code> value as it's value:</p><pre><code class="language-jsx">&lt;input type="text" value={query} /&gt;
</code></pre><p>And we'll want to create that function so we can use it:</p><pre><code class="language-js">function onSearch({ currentTarget }) {
updateQuery(currentTarget.value);
}
</code></pre><p>This will update our <code>query</code> with the input's value any time it changes.</p><p>Now that our <code>query</code> &nbsp;will have what we want to search for, we can update our search instance:</p><pre><code class="language-js">const results = fuse.search(query);
<p style="margin: 0;">
<a href="https://twitter.com/colbyfayock" style="display: block;">
</a>
</p>
<ul style="display:flex;justify-content:center;list-style:none;padding:0;margin: .5em 0 0;font-size: .8em;">
<li style="margin: 0 .6em;padding: 0;">
<a href="https://twitter.com/colbyfayock" style="text-decoration: none;">? Follow Me On Twitter</a>
</li>
<li style="margin: 0 .6em;padding: 0;">
<a href="https://youtube.com/colbyfayock" style="text-decoration: none;">?️ Subscribe To My Youtube</a>
</li>
<li style="margin: 0 .6em;padding: 0;">
<a href="https://www.colbyfayock.com/newsletter/" style="text-decoration: none;">✉️ Sign Up For My Newsletter</a>
</li>
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
