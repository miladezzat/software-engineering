---
card: "/images/default.jpg"
tags: [JavaScript]
description: Making your Nuxt web app static can potentially save you the
author: "Milad E. Fahmy"
title: "How to Use Flat-File Data in a Static Nuxt App"
created: "2021-08-15T19:29:12+02:00"
modified: "2021-08-15T19:29:12+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-database tag-nuxtjs ">
<header class="post-full-header">
<h1 class="post-full-title">How to Use Flat-File Data in a Static Nuxt App</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/06/flat_file_db.jpg 300w,
/news/content/images/size/w600/2020/06/flat_file_db.jpg 600w,
/news/content/images/size/w1000/2020/06/flat_file_db.jpg 1000w,
/news/content/images/size/w2000/2020/06/flat_file_db.jpg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/06/flat_file_db.jpg" alt="How to Use Flat-File Data in a Static Nuxt App">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Making your Nuxt web app static can potentially save you the time and money of setting up a server-rendered app. It may also offer superior performance.</p>
<p>But what if your app needs dynamic data? The most popular solution is to set up an API alongside your static app that can deliver dynamic data via AJAX.</p>
<p>In this article, I'll show you another possible architecture - using a flat-file database. This architecture might save you the hassle of setting up an API and offers superior performance.</p>
<h2 id="what-is-a-flat-file-database">What is a flat-file database?</h2>
<p>A "flat-file database" is a database architecture where data is stored in a simple text file rather than in database software like MySQL or MongoDB.</p>
<p>In a Nuxt app, this file can be a JSON file that sits in your static files directory and is deployed alongside the markup files.</p>
<p>At runtime, the JSON file is loaded by the Nuxt app. Once the data is parsed as JavaScript data it can be used to power the app.</p>
<h2 id="why-use-a-flat-file-database">Why use a flat-file database?</h2>
<p>Flat-file databases are advantageous because of their simplicity and low overhead. But they are also insecure and don't offer the performance benefits of conventional database software, which is why they're rarely used.</p>
<p>In the context of Nuxt apps, though, they have another great advantage – they can be stored and accessed from static hosting.</p>
<p>Using a flat-file database may also have a performance advantage over an API service which will have a small latency overhead incurred when requests are processed by the server.</p>
<p>However, flat-file DBs won't always be appropriate to use, as they offer no security and are read-only while in production. This means you'll need to rebuild the site any time you want to write new data.</p>
<p>A type of data that is a good candidate for flat-file storage and retrieval is meta data. For example, on the <a href="https://vuejsdevelopers.com/">Vue.js Developers blog</a>, which I built with Nuxt, I use a flat-file database to store meta data about published posts.</p>
<p>This allows me to easily access that data across the site, for example on the home page where the latest blog articles are displayed, and on the topics page which indexes posts based on topic tags applied (both shown below).</p>
<h2 id="implementing-the-flat-file-database-architecture-in-nuxt">Implementing the flat-file database architecture in Nuxt</h2>
<p>Now let's see how to implement the flat-file database architecture in your own Nuxt site.</p>
<p>Say we want to create a blog home page which show the latest published article like that on the Vue.js Developers blog.</p>
<p>We'll begin by seeing how flat-file-sourced data gets used in the page, and then work backwards until we can see how the whole architecture works.</p>
<h3 id="using-flat-file-data-in-a-page">Using flat-file data in a page</h3>
<p>In our home page component, <em>pages/index.vue</em>, we'll import <code>getArticleSummaries</code> from a soon-to-be-created JavaScript module <code>flatFileDb</code>.</p>
<p>This method will return a Promise containing the article summary data ready for use on the page.</p>
<p>You can, of course, use this data at build time via <code>asyncData</code>, and at run time via the <code>created</code> hook.</p>
<p><em>pages/index.vue</em>:</p><pre><code class="language-js">const { getArticleSummaries } from "@/assets/js/flatFileDb";
export default {
data: () =&gt; ({
articleSummaries: []
}),
async asyncData () {
const articleSummaries = await getArticleSummaries();
return { articleSummaries }
},
async created () {
this.articleSummaries = await getArticleSummaries();
}
}
</code></pre>
<p>Note that the data structure we'll get from <code>getArticleSummaries</code> will be an array of objects like this:</p><pre><code class="language-js">[
{
title: "...",
description: "...",
published: "...",
...
},
...
]
</code></pre>
<p>Note: If you have multiple entities (for example, in addition to articles you also store information about videos), each will have its own flat file and its own retrieval method in the app, like <code>getVideoSummaries</code>.</p>
<h3 id="flat-file-database-module">Flat-file database module</h3>
<p>We saw above that a <code>getArticleSummary</code> method was imported from the <code>flatFileDb</code> module. Let's see how we can implement that.</p>
<p>Our flat-file database will be included in our static files and should be a JSON file since these are simple to parse as valid JavaScript data.</p>
<p>We'll include this JSON file by using a dynamic import. This feature is designed for importing JavaScript modules, but it works with JSON files out-of-the-box with Webpack. Conveniently, you get the JSON file already parsed as JavaScript.</p>
<p>It's important to call the dynamic import in a <code>try/catch</code> block to prevent the app crashing if the file is missing or the JSON parsing fails.</p>
<p>Before we return the data to the consuming component we need to "decode" it with another custom method <code>decodeArticleSummaries</code>. I'll explain that in a moment.</p>
<p>Finally, note that a JSON file doesn't have a default export, so you'll need to access the <code>default</code> property of the db module to access the data.</p>
<p><em>assets/js/flatFileDb.js</em>:</p><pre><code class="language-js">import { decodeArticleSummaries } from "dbDecoders";
const getArticleSummaries = async () =&gt; {
try {
const db = await import(`@/static/article-summaries.json`);
return decodeArticleSummaries(db.default);
} catch (err) {
console.log(err);
return [];
}
};
export { getArticleSummaries };
</code></pre>
<h3 id="decoding-the-database">Decoding the database</h3>
<p>Above, I said the data provided to the component would look like this:</p><pre><code>{
title: "...",
description: "...",
published: "...",
// etc
}
</code></pre>
<p>However, it shouldn't be stored in the database like this because the property names are wastefully long.</p>
<p>In order to keep the flat file as lean as possible we should "encode" each key when the database is created. Then we should decode them before they're consumed by components so they have their full names available to the developer.</p>
<p>So, let's say we make "title" =&gt; "t", "description" =&gt; "d", and "published" =&gt; "p". In a large database, this transformation could reduce the file size by many bytes.</p>
<p><em>assets/js/dbDecode.js</em>:</p><pre><code class="language-js">const decodeArticleSummaries = db =&gt; {
return db.map(article =&gt; ({
title: article.t,
description: article.d,
published: article.p
// etc
}));
}
</code></pre>
<h2 id="generating-the-flat-file-database">Generating the flat-file database</h2>
<p>So now we've seen how the flat-file database is consumed at run time. How is it created?</p>
<p>You could create a flat-file database manually by hand, but usually you'll want to generate it at build time with a Node.js script.</p>
<p>In our example, we'll want to make a script that extracts the meta data of each article and stores it as <em>static/article-summaries.json</em>. Let's assume the articles are stored as markdown and are in an "articles" directory in the project root.</p>
<p>The details of the script will be specific to your implementation, so I'll just give you pseudo code to communicate the basic idea.</p>
<p><em>scripts/generateDb.js</em>:</p><pre><code class="language-js">const fs = require("fs");
const frontmatterExtractor = require("./frontmatterExtractor");
const encodeArticleSummaries = require("./encodeArticleSummaries");
module.exports = async () =&gt; {
// Load article files
const articles = await fs.readdir("/articles", (err, filePaths) =&gt; {
// Create the database by reading each file
const db = filePaths.map(async path =&gt; {
const file = await fs.readFile(path);
// Extract the meta data
return frontmatterExtractor(file);
});
// Encode the data
const encoded = encodeArticleSummaries(db);
// Write the database object to a JSON file
await fs.writeFile(
"/static/article-summaries.json",
JSON.stringify(encoded)
);
});
}
</code></pre>
<h2 id="running-the-db-generator-script-before-the-site-build">Running the DB generator script before the site build</h2>
<p>Now that we've got a database generator script, let's trigger it to run just before the build (or generate) processes which will want to consume it.</p>
<p>To do this, we'll squeeze it into the NPM commands in <em>package.json</em>. Note that by using the <code>&amp;&amp;</code> operator we can ensure the Nuxt process doesn't begin until the generator script completes.</p>
<p><em>package.json</em>:</p><pre><code class="language-json">{
...
"scripts": {
...
"build": "node scripts/generateDb &amp;&amp; nuxt build",
"generate": "node scripts/generateDb &amp;&amp; nuxt generate",
...
}
...
}
</code></pre>
<p>In development, however, I find it easier to manually generate the database on the command line whenever I need to update it:</p><pre><code>$ node scripts/generateDb
</code></pre>
<h2 id="further-reading">Further reading</h2>
<p>That's the basic architecture explained. Here are a few other articles learn more:</p>
<ul>
<li><a href="https://blog.lichter.io/posts/jamstack-nuxt-netlify/">Going JAMstack with Netlify and Nuxt</a></li>
<li><a href="https://www.raymondcamden.com/2019/07/25/multiple-ways-of-api-integration-in-your-jamstack">Multiple Ways of API Integration in your JAMStack</a></li>
<li><a href="https://vuejsdevelopers.com/2018/12/31/vue-nuxt-spa-markdown/">Including Markdown Content in a Vue or Nuxt SPA</a></li>
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
