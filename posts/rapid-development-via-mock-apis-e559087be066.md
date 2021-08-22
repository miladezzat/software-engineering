---
card: "https://cdn-media-1.freecodecamp.org/images/1*Subl5K29BEplXnabKvek-A.jpeg"
tags: [JavaScript]
description: "In this era of service-oriented development, you need to get "
author: "Milad E. Fahmy"
title: "No API? No Problem! Rapid Development via Mock APIs"
created: "2021-08-16T10:26:56+02:00"
modified: "2021-08-16T10:26:56+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-software-development tag-web-development tag-mobile-app-development tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">No API? No Problem! Rapid Development via Mock APIs</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*Subl5K29BEplXnabKvek-A.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*Subl5K29BEplXnabKvek-A.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*Subl5K29BEplXnabKvek-A.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*Subl5K29BEplXnabKvek-A.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*Subl5K29BEplXnabKvek-A.jpeg" alt="No API? No Problem! Rapid Development via Mock APIs">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
"type": "object",
"properties": {
"users": {
"type": "array",
"minItems": 3,
"maxItems": 5,
"items": {
"type": "object",
"properties": {
"id": {
"type": "number",
"unique": true,
"minimum": 1
},
"firstName": {
"type": "string",
"faker": "name.firstName"
},
"lastName": {
"type": "string",
"faker": "name.lastName"
},
"email": {
"type": "string",
"faker": "internet.email"
}
},
"required": ["id", "type", "lastname", "email"]
}
}
},
"required": ["users"]
};
module.exports = schema;
This way you don't have to point to an actual API,
but you can enjoy realistic, but randomized data,
and rapid page loads due to local, static data.
*/
var jsf = require('json-schema-faker');
var mockDataSchema = require('./mockDataSchema');
var fs = require('fs');
var json = JSON.stringify(jsf(mockDataSchema));
fs.writeFile("./src/api/db.json", json, function (err) {
if (err) {
return console.log(err);
} else {
console.log("Mock data generated.");
}
});</code></pre><figcaption>generateMockData.js</figcaption></figure><p>I’m calling <a href="https://www.npmjs.com/package/json-schema-faker" rel="noopener">json-schema-faker</a> on line 11, and passing it the mock data schema we set up in step 1. This ultimately writes JSON to db.json, as specified on line 13 above.</p><h4 id="step-3-serve-random-data"><strong>Step 3 — Serve Random Data</strong></h4><p>Now that we have written randomized, realistic data to db.json, let’s serve it up! <a href="https://github.com/typicode/json-server" rel="noopener">JSON server</a> creates a realistic API using the static JSON file we created. So let’s point JSON server at the mock dataset that we dynamically generated in step 2.</p><pre><code class="language-json">"start-mockapi": "json-server --watch src/api/db.json --port 3001"</code></pre><p>This starts json-server and serves up the data in db.json on port 3001. Each top-level object is exposed on an HTTP endpoint.</p><p>Here’s the awesome part: JSON Server simulates a real database by saving the changes to the db.json file we created in step 2.</p><blockquote><strong>The beauty of JSON server: it handles create, reads, updates, and deletes, so it feels totally real.</strong></blockquote><p><strong>The mock API operates just like a real API, but without having to make an actual HTTP call or stand up a real database!</strong> Slick.</p><p>This means we can do development without creating a real API first. We just need to agree on the calls and data shape, then the UI team can move ahead without having to wait on the service team to create the associated services.</p><p>In summary, to make all this come together, you need 3 lines in package.json:</p><pre><code class="language-json">"generate-mock-data": "node buildScripts/generateMockData",
"prestart-mockapi": "npm run generate-mock-data",
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
