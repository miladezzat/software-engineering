---
card: "/images/default.jpg"
tags: [React]
description: "Whenever I m starting with a new framework or it s been a whi"
author: "Milad E. Fahmy"
title: "React Cheatsheet – 9 Common HTML Rendering Cases You Should Know"
created: "2021-08-15T22:48:46+02:00"
modified: "2021-08-15T22:48:46+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-react tag-html tag-cheatsheet ">
<header class="post-full-header">
<h1 class="post-full-title">React Cheatsheet – 9 Common HTML Rendering Cases You Should Know</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2021/04/teaser.jpg 300w,
/news/content/images/size/w600/2021/04/teaser.jpg 600w,
/news/content/images/size/w1000/2021/04/teaser.jpg 1000w,
/news/content/images/size/w2000/2021/04/teaser.jpg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2021/04/teaser.jpg" alt="React Cheatsheet – 9 Common HTML Rendering Cases You Should Know">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
</code></pre>
<pre><code class="language-js">{ metadata.subtitle.value }
</code></pre>
</code></pre>
<pre><code class="language-js">&lt;div className="sidebar__inner"&gt;
</code></pre>
</code></pre>
<pre><code class="language-js">&lt;a href={`https://twitter.com/${author.twitter.value}`}&gt;
</code></pre>
</code></pre>
<pre><code class="language-js">&lt;div dangerouslySetInnerHTML={{__html: article.teaser}}&gt;&lt;/div&gt;
</code></pre>
&lt;Component data={item} key={item.uniqueKey} /&gt;);
...
&lt;div&gt;{components}&lt;/div&gt;
</code></pre>
<pre><code class="language-js">let articleComponents = articles.map((article) =&gt;
&lt;Article data={article} key={article.id} ... /&gt;);
...
&lt;div&gt;{articleComponents}&lt;/div&gt;
</code></pre>
&lt;Component data={item} index={index} key={uniqueKey} /&gt;);
...
&lt;div&gt;{components}&lt;/div&gt;
</code></pre>
<pre><code class="language-js">let articleComponents = articles.map((article) =&gt;
&lt;Article data={article} index={index} key={article.id} ... /&gt;);
...
&lt;div&gt;{articleComponents}&lt;/div&gt;
</code></pre>
</code></pre>
<pre><code class="language-js">{data.length &gt; 0 &amp;&amp; &lt;div&gt; ... &lt;/div&gt;}
</code></pre>
{variable == null &amp;&amp; &lt;... &gt;}
</code></pre>
<pre><code class="language-js">{data.length &gt; 0 &amp;&amp; &lt;div&gt; ... &lt;/div&gt;}
{data.length == 0 &amp;&amp; &lt;div&gt;Loading...&lt;/div&gt;}
</code></pre>
</code></pre>
<pre><code class="language-js">&lt;links author={author}&gt;
</code></pre>
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
