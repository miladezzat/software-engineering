---
card: "https://cdn-media-1.freecodecamp.org/images/1*jxvEoOYeWq64HVZAVNoI7g.jpeg"
tags: [React]
description: "Taking notes is key to remembering most things in our lives. "
author: "Milad E. Fahmy"
title: "How to create a searchable log with Gatsby"
created: "2021-08-16T10:06:19+02:00"
modified: "2021-08-16T10:06:19+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-react tag-gatsbyjs tag-tutorial tag-web-development tag-tech ">
<header class="post-full-header">
<h1 class="post-full-title">How to create a searchable log with Gatsby</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*jxvEoOYeWq64HVZAVNoI7g.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*jxvEoOYeWq64HVZAVNoI7g.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*jxvEoOYeWq64HVZAVNoI7g.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*jxvEoOYeWq64HVZAVNoI7g.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*jxvEoOYeWq64HVZAVNoI7g.jpeg" alt="How to create a searchable log with Gatsby">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
title: "Whatever title you want"
date: "2019-05-010"
draft: false
path: "/logs/some-slug-for-the-file"
tags: testing, documentation
---
# Monday, May 6, 2019
resolve: `gatsby-source-filesystem`,
options: {
name: `images`,
path: `${__dirname}/src/images`,
},
},
{
resolve: `gatsby-source-filesystem`,
options: {
name: `markdown-pages`,
path: `${__dirname}/src/content`,
},
},</code></pre><p>So no problem if you are already using <code>gatsby-source-filesystem</code> to read, for instance, your image files. I also tested nesting, and Gatsby will grab anything in your <code>content</code> folder recursively — so you can go ahead and organize any way you like.</p><p>Good times! If you took that diversion to the Gatsby docs, you should now have a fully-functioning log system.</p><h3 id="step-3-add-search">Step 3: Add search</h3><p>Now the fun part. We’ll add the ability to search our logs using the <a href="https://github.com/gatsby-contrib/gatsby-plugin-elasticlunr-search" rel="noopener">Gatsby lunr elastic search plugin</a>.</p><h4 id="configure">Configure</h4><p>First, <code>yarn add @gatsby-contrib/gatsby-plugin-elasticlunr-search</code>, then we’ll add to <code>gatsby-config.js</code>:</p><pre><code class="language-js">{
resolve: `@gatsby-contrib/gatsby-plugin-elasticlunr-search`,
options: {
// Fields to index
fields: [`title`, `tags`, `html`],
resolvers: {
MarkdownRemark: {
title: node =&gt; node.frontmatter.title,
tags: node =&gt; node.frontmatter.tags,
path: node =&gt; node.frontmatter.path,
html: node =&gt; node.internal.content,
},
},
},
},</code></pre><p>Note that I’ve added a field not included on the lunr docs: <code>html</code>. We’ll need this for full text search of the logs, rather than just searching by tags.</p><h4 id="add-a-search-bar">Add a search bar</h4><p>Obviously yours can go anywhere. I put mine right on the index under my name.</p><p><strong>The search bar component:</strong></p><pre><code class="language-js">import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Search from "./search"
export default () =&gt; {
return (
&lt;StaticQuery
query={graphql`
query SearchIndexQuery {
siteSearchIndex {
index
}
}
`}
render={data =&gt; (
&lt;Search searchIndex={data.siteSearchIndex.index}/&gt;
)}
/&gt;
)
}</code></pre><p>Nothing much going on here — we’re just grabbing the search index from the elastic search data.</p><p>The search component, essentially copied directly from the lunr docs:</p><pre><code class="language-js">import React, { Component } from "react"
import { Index } from "elasticlunr"
import { Link } from "gatsby"
import styled from "@emotion/styled"
export default class Search extends Component {
state = {
query: ``,
results: []
}
render() {
return (
&lt;div&gt;
&lt;input type="text" value={this.state.query} onChange={this.search} /&gt;
&lt;ul&gt;
{this.state.results.map(page =&gt; (
&lt;li key={page.id}&gt;
&lt;Link to={"/" + page.path}&gt;{page.title}&lt;/Link&gt;
{': ' + page.tags}
&lt;/li&gt;
))}
&lt;/ul&gt;
&lt;/div&gt;
)
}
getOrCreateIndex = () =&gt; {
return this.index
? this.index
: // Create an elastic lunr index and hydrate with graphql query results
Index.load(this.props.searchIndex)
}
search = evt =&gt; {
const query = evt.target.value
this.index = this.getOrCreateIndex()
this.setState({
query,
// Query the index with search string to get an [] of IDs
results: this.index
.search(query, { expand: true })
// Map over each ID and return the full document
.map(({ ref }) =&gt; {
return this.index.documentStore.getDoc(ref)
}),
})
}
}
const isAuthenticated = isBrowser() &amp;&amp; window.localStorage.getItem('authenticated');
[...]
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
