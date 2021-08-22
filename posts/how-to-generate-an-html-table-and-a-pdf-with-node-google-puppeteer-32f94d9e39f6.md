---
card: "https://cdn-media-1.freecodecamp.org/images/1*vmoUk8zB0XXR2l203rw7fQ.jpeg"
tags: [JavaScript]
description: "Understanding NodeJS internally can be a little bit daunting "
author: "Milad E. Fahmy"
title: "How to generate an HTML table and a PDF with Node & Google Puppeteer"
created: "2021-08-15T23:43:56+02:00"
modified: "2021-08-15T23:43:56+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-node tag-coding tag-tech tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">How to generate an HTML table and a PDF with Node &amp; Google Puppeteer</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*vmoUk8zB0XXR2l203rw7fQ.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*vmoUk8zB0XXR2l203rw7fQ.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*vmoUk8zB0XXR2l203rw7fQ.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*vmoUk8zB0XXR2l203rw7fQ.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*vmoUk8zB0XXR2l203rw7fQ.jpeg" alt="How to generate an HTML table and a PDF with Node &amp; Google Puppeteer">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
{},
{},
{
"invoiceId": 1,
"createdDate": "3/27/2018",
"dueDate": "5/24/2019",
"address": "28058 Hazelcrest Center",
"companyName": "Eayo",
"invoiceName": "Carbonated Water - Peach",
"price": 376
},
{
"invoiceId": 2,
"createdDate": "6/14/2018",
"dueDate": "11/14/2018",
"address": "6205 Shopko Court",
"companyName": "Ozu",
"invoiceName": "Pasta - Fusili Tri - Coloured",
"price": 285
},
{},
{}
]</code></pre><blockquote>You can download the complete JSON array for this tutorial from <a href="https://gist.github.com/adeelibr/69d2ca9d40642aaf99721796da0aaa64" rel="noopener"><strong>here</strong></a><strong>.</strong></blockquote><h4 id="step-3-">Step 3:</h4><p>Next create a new file called <code>buildPaths.js</code></p><pre><code class="language-js">const path = require('path');
const buildPaths = {
buildPathHtml: path.resolve('./build.html'),
buildPathPdf: path.resolve('./build.pdf')
};
// JSON data
const data = require('./data.json');
// Build paths
const { buildPathHtml } = require('./buildPaths');
/**
* Take an object which has the following model
* @param {Object} item
* @model
* {
*   "invoiceId": `Number`,
*   "createdDate": `String`,
*   "dueDate": `String`,
*   "address": `String`,
*   "companyName": `String`,
*   "invoiceName": `String`,
*   "price": `Number`,
* }
*
* @returns {String}
*/
const createRow = (item) =&gt; `
&lt;tr&gt;
&lt;td&gt;${item.invoiceId}&lt;/td&gt;
&lt;td&gt;${item.invoiceName}&lt;/td&gt;
&lt;td&gt;${item.price}&lt;/td&gt;
&lt;td&gt;${item.createdDate}&lt;/td&gt;
&lt;td&gt;${item.dueDate}&lt;/td&gt;
&lt;td&gt;${item.address}&lt;/td&gt;
&lt;td&gt;${item.companyName}&lt;/td&gt;
&lt;/tr&gt;
`;
/**
* @description Generates an `html` table with all the table rows
* @param {String} rows
* @returns {String}
*/
const createTable = (rows) =&gt; `
&lt;table&gt;
&lt;tr&gt;
&lt;th&gt;Invoice Id&lt;/td&gt;
&lt;th&gt;Invoice Name&lt;/td&gt;
&lt;th&gt;Price&lt;/td&gt;
&lt;th&gt;Invoice Created&lt;/td&gt;
&lt;th&gt;Due Date&lt;/td&gt;
&lt;th&gt;Vendor Address&lt;/td&gt;
&lt;th&gt;Vendor Name&lt;/td&gt;
&lt;/tr&gt;
${rows}
&lt;/table&gt;
`;
/**
* @description Generate an `html` page with a populated table
* @param {String} table
* @returns {String}
*/
const createHtml = (table) =&gt; `
&lt;html&gt;
&lt;head&gt;
&lt;style&gt;
table {
width: 100%;
}
tr {
text-align: left;
border: 1px solid black;
}
th, td {
padding: 15px;
}
tr:nth-child(odd) {
background: #CCC
}
tr:nth-child(even) {
background: #FFF
}
.no-content {
background-color: red;
}
&lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
${table}
&lt;/body&gt;
&lt;/html&gt;
`;
/**
* @description this method takes in a path as a string &amp; returns true/false
* as to if the specified file path exists in the system or not.
* @param {String} filePath
* @returns {Boolean}
*/
const doesFileExist = (filePath) =&gt; {
try {
fs.statSync(filePath); // get information of the specified file path.
return true;
} catch (error) {
return false;
}
};
try {
/* Check if the file for `html` build exists in system or not */
if (doesFileExist(buildPathHtml)) {
console.log('Deleting old build file');
/* If the file exists delete the file from system */
fs.unlinkSync(buildPathHtml);
}
/* generate rows */
const rows = data.map(createRow).join('');
/* generate table */
const table = createTable(rows);
/* generate html */
const html = createHtml(table);
/* write the generated html to file */
fs.writeFileSync(buildPathHtml, html);
console.log('Succesfully created an HTML table');
} catch (error) {
console.log('Error generating table', error);
}</code></pre><figcaption><strong>createTable.js script (github gist: </strong><a href="https://gist.github.com/adeelibr/70936277d38f3c77d3910e417581e98a#file-createtable-js">https://gist.github.com/adeelibr/70936277d38f3c77d3910e417581e98a#file-createtable-js</a><strong>)</strong></figcaption></figure><p>I know that is a lot of code, but let’s divide it into chunks and start understanding it piece by piece.</p><p>Go to <strong><em>line 106 </em></strong><em>(<a href="https://gist.github.com/adeelibr/70936277d38f3c77d3910e417581e98a#file-createtable-js">github gist</a>)</em></p><p>In our <code>try/catch</code> block we first check if the build file for HTML exists in the system or not. This is the path of the file where our NodeJS script will generate our HTML.</p><p><code>if (doesFileExist(buildPathHtml){}</code> calls doesFileExist() method which simply returns true/false. For this we use</p><pre><code>fs.statSync(filePath);</code></pre><p>This method actually returns information about the file like the size of the file, when the file was created, and so on. However if we provide it an invalid file path, this method returns as a null error. Which we use here to our benefit and wrap the <code>fs.statSync()</code> method in a <code>try/catch</code>. If Node is successfully able to read the file in our try block, we return <code>true</code> — otherwise it throws an error which we get in our catch block and returns <code>false</code>.</p><p>If the file exists in the system we end up deleting the file using</p><pre><code>fs.unlinkSync(filePath); // takes in a file path &amp; deletes it</code></pre><p>After deleting the file, we need to generate rows to put in the table.</p><h4 id="step-5-">Step 5:</h4><p>So first we import <code>data.json</code> which we do at <strong><em>line 3 </em></strong>&amp; then on <strong><em>line 115 </em></strong>we iterate each item using map(). You can read more about <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map" rel="noopener">Array.prototype.map() here.</a></p><p>The map method takes a method <code>createRow</code> which takes in an object through each iteration and returns a string which has content like this:</p><pre><code class="language-html">"&lt;tr&gt;
&lt;td&gt;invoice id&lt;/td&gt;
&lt;td&gt;invoice name&lt;/td&gt;
&lt;td&gt;invoice price&lt;/td&gt;
&lt;td&gt;invoice created date&lt;/td&gt;
&lt;td&gt;invoice due date&lt;/td&gt;
&lt;td&gt;invoice address&lt;/td&gt;
&lt;td&gt;invoice sender company name&lt;/td&gt;
"build:table": "node ./createTable.js"
const fs = require('fs');
const puppeteer = require('puppeteer');
// Build paths
const { buildPathHtml, buildPathPdf } = require('./buildPaths');
const printPdf = async () =&gt; {
console.log('Starting: Generating PDF Process, Kindly wait ..');
/** Launch a headleass browser */
const browser = await puppeteer.launch();
/* 1- Ccreate a newPage() object. It is created in default browser context. */
const page = await browser.newPage();
/* 2- Will open our generated `.html` file in the new Page instance. */
await page.goto(buildPathHtml, { waitUntil: 'networkidle0' });
/* 3- Take a snapshot of the PDF */
const pdf = await page.pdf({
format: 'A4',
margin: {
top: '20px',
right: '20px',
bottom: '20px',
left: '20px'
}
});
/* 4- Cleanup: close browser. */
await browser.close();
console.log('Ending: Generating PDF Process');
return pdf;
};
const init = async () =&gt; {
try {
const pdf = await printPdf();
fs.writeFileSync(buildPathPdf, pdf);
console.log('Succesfully created an PDF table');
} catch (error) {
console.log('Error generating PDF', error);
}
};
init();</code></pre><figcaption><a href="https://gist.github.com/adeelibr/57081ec24b634b4d161e405ae3bf6d78#file-createpdf-js">createPdf.js github gist</a>&nbsp;</figcaption></figure><p>As we did with <code>createTable.js</code> script, let’s break this down into chunks and start understanding this script step by step.</p><p>Let’s start with <strong><a href="https://gist.github.com/adeelibr/57081ec24b634b4d161e405ae3bf6d78#file-createpdf-js-L40">line 40:</a></strong> here we call a method <strong><em>init() </em></strong>which calls the method on <strong><a href="https://gist.github.com/adeelibr/57081ec24b634b4d161e405ae3bf6d78#file-createpdf-js-L30">line 30</a>. </strong>One<strong> </strong>thing to focus on is that our init() method is an async method. Read more on this <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function" rel="noopener">async function</a>.</p><p>First in the init() method we call <strong><em>printPdf() </em></strong>method which is again an async method, so we have to wait for its response. The printPdf() method returns us a PDF instance which we then write to a file on <strong><a href="https://gist.github.com/adeelibr/57081ec24b634b4d161e405ae3bf6d78#file-createpdf-js-L33">line 33</a>.</strong></p><p>So what does the <code>printPdf()</code> method do? Let’s dig deep in it.</p><pre><code class="language-js">const browser = await puppeteer.launch();
const page = await browser.newPage();
await page.goto(buildPathHtml, { waitUntil: 'networkidle0' });
const pdf = await page.pdf({
format: 'A4',
margin: {
top: '20px', right: '20px', bottom: '20px', left: '20px'}
});
await browser.close();
return pdf;</code></pre><p>We first launch a headless browser instance using puppeteer by doing the following:</p><pre><code>await puppeteer.launch(); // this returns us headless browser</code></pre><p>which we then use to open a web page:</p><pre><code>await browser.newPage(); // open a blank page in headless browser</code></pre><p>Once we have a blank page open we can navigate to a page. Since our web page is locally in our system, we simply</p><pre><code>page.goto(buildPathHtml, { waitUntil: 'networkidle0' });</code></pre><p>Here <code>waitUntil: 'networkidle0;</code> is important, because it tells puppeteer to wait for 500/ms until there are no more network connections.</p><blockquote><strong><em>Note:</em> </strong>This is why we used path.resolve() to get absolute paths, because in order to open the web page with puppeteer, we need an absolute path.</blockquote><p>After we have a web page opened in the headless browser on the server, we save that page as a pdf:</p><pre><code>await page.pdf({ });</code></pre><p>As soon as we have a pdf version of the web page, we need to close the browser instance opened by puppeteer to save resources by doing this:</p><pre><code>await browser.close();</code></pre><p>&amp; then we return the <code>pdf</code> saved, which we then write to the file.</p><h4 id="step-10-">Step 10:</h4><p>In your terminal type</p><pre><code>$ npm ./createPdf.js</code></pre><p>Note: Before running the above script, ensure that you the <code>build.html</code> file generated by <code>createTable.js</code> script. This ensures we always have the <code>build.html</code> prior to running the <code>createPdf.js</code> script. In your <code>package,json</code> do the following.</p><pre><code>"scripts": {
"build:table": "node ./createTable.js",
"prebuild:pdf": "npm run build:table",
"build:pdf": "node ./createPdf.js"
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
