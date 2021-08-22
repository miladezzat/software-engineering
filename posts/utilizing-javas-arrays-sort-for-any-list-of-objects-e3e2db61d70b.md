---
card: "https://cdn-media-1.freecodecamp.org/images/1*Aap5LkZQvXhukGZicn8_vA.jpeg"
tags: [Programming]
description: "Sorting can be tricky, especially when your list is not of a "
author: "Milad E. Fahmy"
title: "Using Java’s Arrays.sort() for any List of Objects"
created: "2021-08-16T11:48:11+02:00"
modified: "2021-08-16T11:48:11+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-programming tag-java tag-technology tag-web-development tag-javascript ">
<header class="post-full-header">
<h1 class="post-full-title">Using Java’s Arrays.sort() for any List of Objects</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*Aap5LkZQvXhukGZicn8_vA.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*Aap5LkZQvXhukGZicn8_vA.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*Aap5LkZQvXhukGZicn8_vA.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*Aap5LkZQvXhukGZicn8_vA.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*Aap5LkZQvXhukGZicn8_vA.jpeg" alt="Using Java’s Arrays.sort() for any List of Objects">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Sorting can be tricky, especially when your list is not of a primitive Java numeric type (Byte, Integer, Short, Long, Double, Float). Now, all situations will vary so this method might not be the best case. However, I’ve found it incredibly useful for simple coding challenges and university lab assignments.</p><p>To start, pick your list. For this example I’ll be using a list of <code>Edges</code> from a simple <code>Graph</code> data structure:</p><pre><code>// Very simple Edge classpublic class Edge {    public Vertex src;    public Vertex dst;    public double cost;        // creates an edge between two vertices    Edge(Vertex s, Vertex d, double c) {        src = s;        dst = d;        cost = c;    }}</code></pre><pre><code>// List of edgesEdge[] edges = graph.getEdges();</code></pre><p>Next, define the implementation of the <code>java.util.Comparator</code> interface:</p><pre><code>class SortByCost implements Comparator&lt;Edge&gt; {    public int compare(Edge a, Edge b) {        if ( a.cost &lt; b.cost ) return -1;        else if ( a.cost == b.cost ) return 0;        else return 1;    }}</code></pre><p>In this example, we will be sorting the <code>edges</code> by their cost, or distance from the <code>src</code> (source) vertex to the <code>dst</code> (destination) vertex.</p><p>Finally use the standard <code>java.util.Arrays.sort()</code> method:</p><pre><code>Arrays.sort(edges, new SortByCost())</code></pre><p>And just like that, the list of<code> Edges</code> is now sorted in ascending (least to greatest) order.</p><p>If you have any questions feel free to reach out on <a href="https://twitter.com/ArrowoodTech" rel="noopener">Twitter</a></p><p>You can also find me on <a href="https://github.com/ethan-arrowood" rel="noopener">GitHub</a> or my personal <a href="https://ethanarrowood.com" rel="noopener">website</a></p><p>~ Happy Coding</p><p>— Ethan Arrowood</p>
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
