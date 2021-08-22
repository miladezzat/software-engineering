---
card: "https://cdn-media-1.freecodecamp.org/images/1*5Yrv4yG9LUeSmYrvZ_ZUMQ.jpeg"
tags: [Programming]
description: "Like many of you, I often have to take the result of SQL quer"
author: "Milad E. Fahmy"
title: "Spreadsheets getting you down? Converting row data to JSON trees is a breeze."
created: "2021-08-16T11:48:46+02:00"
modified: "2021-08-16T11:48:46+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-programming tag-technology tag-web-development tag-sql tag-productivity ">
<header class="post-full-header">
<h1 class="post-full-title">Spreadsheets getting you down? Converting row data to JSON trees is a breeze.</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*5Yrv4yG9LUeSmYrvZ_ZUMQ.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*5Yrv4yG9LUeSmYrvZ_ZUMQ.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*5Yrv4yG9LUeSmYrvZ_ZUMQ.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*5Yrv4yG9LUeSmYrvZ_ZUMQ.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*5Yrv4yG9LUeSmYrvZ_ZUMQ.jpeg" alt="Spreadsheets getting you down? Converting row data to JSON trees is a breeze.">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Like many of you, I often have to take the result of <a href="http://www.sqlcourse.com/intro.html" rel="noopener">SQL queries</a> and convert the rowsets to <a href="http://www.json.org/" rel="noopener">JSON data objects</a>. Sometimes I have to do the same with CSV files from spreadsheets. The transformation process can be a hassle, though anyone can do it. Yet, it can be time-consuming and error-prone. This post will show you how to use the <a href="https://www.npmjs.com/package/treeize" rel="noopener"><strong>treeize</strong></a><strong> </strong>Node.js package to simplify the process in very few lines of code.</p><p>Before going further, I’ll first need a dataset to base some examples on. The domain will be <strong>Books</strong>, which lend themselves to all sorts of categorization. I will use a fake data generator called <a href="https://github.com/boo1ean/casual" rel="noopener">casual</a>, which I previously used for mocks in my post on<a href="https://medium.freecodecamp.org/mocking-graphql-with-graphql-tools-42c2dd9d0364" rel="noopener"> GraphQL testing</a>.</p><p>The book data will be of the following structure:</p><pre><code class="language-js">casual.define('book', () =&gt; {
const author = casual.random_element(authors);
const book = {
first_name: author.first,
last_name: author.last,
title: casual.random_element(author.titles),
category: casual.random_element(author.category)
}
return book;
});</code></pre><p>Every time I request a <code>casual.book</code> I get a book with a new set of values. It’s not entirely random. The generator uses some <a href="https://github.com/JeffML/rowsets2json/blob/master/src/mocks/index.js" rel="noopener">predefined data</a> for well-known authors, and more-or-less randomly generated data for other authors. Here’s a sample:</p><pre><code class="language-json">{ dataset:
[ { first_name: 'Barbara',
last_name: 'Cartland',
title: 'The Pirate and the Piano Teacher',
category: 'thriller' },
{ first_name: 'Carlie',
last_name: 'Haley',
title: 'Digitized Global Orchestration',
category: 'engineering' },
{ first_name: 'Arthur',
last_name: 'Doyle',
title: 'The Case of the Spotted Dick',
category: 'mystery' },
{ first_name: 'Reinhold',
last_name: 'Gutmann',
title: 'Managed Directional Benchmark',
category: 'management' },
{ first_name: 'Isaac',
last_name: 'Asimov',
title: 'Once in a Venusian Sun',
category: 'science fiction' },
{ first_name: 'R. L.',
last_name: 'Stein',
title: 'Why are You Scared of Me?',
category: 'childrens books' },
{ first_name: 'Alicia',
last_name: 'Cruickshank',
title: 'Balanced Local Database',
category: 'engineering' },
{ first_name: 'Chase',
last_name: 'Runte',
title: 'Ergonomic Tertiary Solution',
category: 'engineering' } ] }</code></pre><p>If you’re interested in how this data was generated, the full source code used in this post can be found <a href="https://github.com/JeffML/rowsets2json" rel="noopener">here</a>. For a little bit of added realism, this generated data will be thrown into an <a href="https://www.npmjs.com/package/alasql" rel="noopener">in-memory SQL database</a> for later retrieval. Here’s the format of the results for the SQL query:</p><pre><code class="language-sql">SELECT title, category, first_name, last_name
FROM book
JOIN author ON author.id = book.author</code></pre><p>This format is, for all intents and purposes, identical to the format of the <strong>dataset </strong>shown just previously, for example:</p><pre><code class="language-json">[ { title: 'Proactive Regional Forecast',
category: 'mystery',
first_name: 'Arthur',
last_name: 'Doyle' },
{ title: 'More Scary Stuff',
category: 'suspense',
first_name: 'Steven',
last_name: 'King' },
{ title: 'Scary Stuff',
category: 'occult',
first_name: 'Steven',
last_name: 'King' },
{ title: 'Persistent Neutral Info Mediaries',
category: 'management',
first_name: 'Maegan',
last_name: 'Frami' },
{ title: 'Enhanced Background Frame',
category: 'engineering',
first_name: 'Winifred',
dataset.forEach(d =&gt; {
d.title = d.title.replace(/'/, "''")
const stmt =
`
IF NOT EXISTS (
select * from author
where first_name = '${d.first_name}'
and last_name = '${d.last_name}')
INSERT INTO author (first_name, last_name) VALUES('${d.first_name}', '${d.last_name}');
IF NOT EXISTS (
select * from book
where title = '${d.title}'
and category = '${d.category}')
INSERT INTO book (title, category, author) VALUES('${d.title}', '${d.category}',
(select id from author where first_name ='${d.first_name}' and last_name = '${d.last_name}'))
`
try {
alasql(stmt)
} catch (e) {
console.error(stmt);
throw (e);
}
})
const authors = {}
rs.forEach(r =&gt; {
const authname = [r.last_name, r.first_name].join(',');
if (!authors[authname]) {
authors[authname] = {
categories: {}
}
}
var author = authors[authname];
if (!author.categories[r.category]) {
author.categories[r.category] = {
titles: []
}
}
var category = author.categories[r.category]
if (!category.titles.includes(r.title)) {
category.titles.push(r.title)
}
})
return authors;
}</code></pre><figcaption>handrolled.js</figcaption></figure><p>The <code>handrolled()</code>method gets a bit hairy the deeper the hierarchy. Local variables are used to reduce long path lengths. We have to keep the meta-structure in mind to write the proper initializations of properties in the JSON object. What could be simpler?</p><p>The results returned are:</p><pre><code class="language-json">...
"Doyle,Arthur": {
"categories": {
"thriller": {
"titles": [
"The Case of the Spotted Dick",
"The Case of the Mashed Potato"
]
},
"mystery": {
"titles": [
"The Case of the Spotted Dick"
]
}
}
},
"Asimov,Isaac": {
"categories": {
"science": {
"titles": [
"Once in a Venusian Sun",
"Total Multi Tasking Forecast"
]
},
"general interest": {
"titles": [
"Total Multi Tasking Forecast",
"Once in a Venusian Sun",
"Fourth Foundation"
]
}
}
},
"Kilback,Bradley": {
"categories": {
"management": {
"titles": [
"Mandatory Solution Oriented Leverage"
]
},
"engineering": {
"titles": [
"Multi Layered Fresh Thinking Framework",
"Total Scalable Neural Net",
"Mandatory Solution Oriented Leverage"
]
},
"reference": {
"titles": [
"Multi Layered Fresh Thinking Framework"
]
}
}
const treeized = rs =&gt; {
var authors = new Treeize();
const seed = rs.map(r =&gt; ({
name: [r.last_name, r.first_name].join(', '),
'categories:type': r.category,
'categories:titles:name': r.title
}))
authors.grow(seed);
return authors.getData();
}</code></pre><figcaption>treeize.js</figcaption></figure><p>This is about a dozen lines of code compared to double that for the hand-rolled version. Notice the key values used in the mapping operation. Treeize recognizes plurals as collections, so <code>categories</code>and <code>titles</code>will be arrays. The colons (‘:’) in the names indicate nesting. <code>Type</code>will be a property of an object in the array of categories, and <code>name</code>will be a property in all objects in titles.</p><p>The tree is built when <code>authors.grow(seed)</code> is called, and the results retrieved through <code>authors.getData()</code>. However, it doesn’t <em>quite</em> yield the same results as what we had from the hand-rolled method:</p><pre><code class="language-json">...,
{
"name": "Glover, Ashley",
"categories": [
{
"type": "engineering",
"titles": [
{
"name": "Intuitive Full Range Capacity"
},
{
"name": "Organic Encompassing Core"
}
]
},
{
"type": "reference",
"titles": [
{
"name": "Distributed Client Server Service Desk"
},
{
"name": "Organic Encompassing Core"
}
]
},
{
"type": "management",
"titles": [
{
"name": "Organic Encompassing Core"
}
]
}
]
},...</code></pre><p>One notable difference is that categories are not named objects (as before), but objects with a <code>name</code> property. <code>Title</code> is also not just an array of strings, but an array of objects with <code>name</code>as the title. Treeize interprets <code>categories</code> and <code>titles</code> as arrays of objects, not as maps (or arrays of primitives). For most use cases, this is not much of an issue. But, if you need to find a category by name quickly (rather than iterate through an array of categories), then you can take care of that <a href="https://gist.github.com/JeffML/1bbe228f271765d3ee3a917196e8a81c" rel="noopener">through a couple of reduce operations</a> to arrive at the same structure as before:</p><pre><code class="language-json">,...
"Doyle, Arthur": {
"categories": {
"mystery": {
"titles": [
"The Case of the Spotted Dick",
"Pre Emptive Needs Based Approach",
"The Case of the Mashed Potato"
]
},
"thriller": {
"titles": [
"The Case of the Mashed Potato",
"The Pound Puppies of the Baskervilles"
]
}
}
},...</code></pre><h4 id="spreadsheets">Spreadsheets</h4><p>Sometimes data comes from spreadsheets rather than relational databases. Treeize is adept at handling this case, too. Instead of using descriptive keys as we did with rowset data in JSON format, the same descriptive format is used as column values in a header row:</p><pre><code class="language-js">var seed = [
['name', 'categories:type', 'categories:titles:name'],
['Doyle, Arthur', 'mystery', 'The Adventure of the Gyring Gerbils'],
['Schuppe, Katarina', 'engineering', 'Configurable Discrete Locks'],
['Doyle, Arthur', 'mystery', 'Holmes Alone 2'],
['Asimov, Isaac', 'science fiction', 'A Crack in the Foundation']
];
// same as before...
var authors = new Treeize();
authors.grow(seed);
return authors.getData();</code></pre><p>There are <a href="https://www.npmjs.com/package/treeize#1-getset-options-optional" rel="noopener">quite a few options</a> that treeize supports, and I’ve only shown the basics. It is a powerful tool that makes light work of transforming row-based data structures.</p><p>Complete source <a href="https://github.com/JeffML/rowsets2json" rel="noopener">can be found at my GitHub</a>.</p>
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
