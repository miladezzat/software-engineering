---
card: "https://cdn-media-1.freecodecamp.org/images/1*LEexgp77Nph6PDWZAh2vnA.jpeg"
tags: [Web Development]
description: "by Mike Sedzielewski"
author: "Milad E. Fahmy"
title: "How to use your API-first platform to get your prototype production-ready"
created: "2021-08-16T10:17:26+02:00"
modified: "2021-08-16T10:17:26+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-web-development tag-api tag-software-development tag-tech tag-design ">
<header class="post-full-header">
<h1 class="post-full-title">How to use your API-first platform to get your prototype production-ready</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*LEexgp77Nph6PDWZAh2vnA.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*LEexgp77Nph6PDWZAh2vnA.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*LEexgp77Nph6PDWZAh2vnA.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*LEexgp77Nph6PDWZAh2vnA.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*LEexgp77Nph6PDWZAh2vnA.jpeg" alt="How to use your API-first platform to get your prototype production-ready">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
"fields": {
"technologies": {
"en-US": ["   { \n     \"sys\": {\n        \"type\": \"Link\",\n        \"linkType\": \"Entry\",\n        \"id\": \"5oKmKwfdjGO2cCaCkwamKW\"\n      }\n    }"]
},
"name": {
"en-US": "Test Testowicz"
}
}
if (inputData.gwt) {
technologies.push({
sys: {
type: "Link",
linkType: "Entry",
id: "7Dtej0GnXqw6cSIMmA6Cko"
}
});
}
if (inputData.symfony) {
technologies.push({
sys: {
type: "Link",
linkType: "Entry",
id: "5S2iYV7inK6KyokCkwu4ss"
}
});
}
if (inputData.struts) {
technologies.push({
sys: {
type: "Link",
linkType: "Entry",
id: "5oKmKwfdjGO2cCaCkwamKW"
}
});
}
fetch('https://api.contentful.com/spaces/n763nxcwuf4y/entries',{
method: 'post',
headers: {
"Authorization": "Bearer &lt;hidden&gt;",
"Content-Type": "application/vnd.contentful.management.v1+json",
"X-Contentful-Content-Type": "expert"
},
body: JSON.stringify({
fields: {
name: {
'en-US': inputData.name
},
price: {
'en-US': parseInt(inputData.price)
},
projects: {
'en-US': parseInt(inputData.projects)
},
description: {
'en-US': inputData.profile
},
technologies: {
'en-US': technologies
}
}
})
})
.then(function(res) {
return res.json();
})
.then(function(json) {
var output = { expert: json }
callback(null, output);
})
method: 'post',
headers: {
"Authorization": "Bearer &lt;hidden&gt;",
"Content-Type": "application/vnd.contentful.management.v1+json"
},
body: JSON.stringify({
fields: {
title: {
'en-US': inputData.name
},
file: {
'en-US': {
"fileName": inputData.name+".jpg",
"upload": inputData.pictureLink,
"contentType": "image/jpeg"
}
}
}
})
})
.then(function(res) {
return res.json();
})
.then(function(json) {
callback(null, json)
})
.catch(callback);</code></pre><ul><li>The second one to download the image</li></ul><pre><code class="language-js">var assetURL = "https://api.contentful.com/spaces/n763nxcwuf4y/assets/" + inputData.assetId + "/files/en-US/process";
fetch(assetURL, {
method: 'put',
headers: {
"Authorization": "Bearer &lt;hidden&gt;",
"X-Contentful-Version": "1"
}
})
.then(function(res) {
callback(null, []);
})
fetch('https://api.timekit.io/v2/resources?include=calendars', // notice the include param
{
method: 'post',
headers: {
"Authorization" : "Basic &lt;hidden&gt;",
"Content-Type": "application/json"
},
body: JSON.stringify({
name: email,
timezone: 'Europe/Warsaw'
})
})
.then(function(res) {
return res.json();
})
.then(function(resource) {
callback(null, resource);
})
requests: []
};
if (inputData.gwt) {
objects.requests.push({
action: "addObject",
body: {
name: inputData.name,
description: inputData.description,
projects: inputData.projects,
price: inputData.price,
contentfulID: inputData.contentfulID,
technologies: { name: "Google Web Toolkit" }
}
});
}
if (inputData.struts) {
objects.requests.push({
action: "addObject",
body: {
name: inputData.name,
description: inputData.description,
projects: inputData.projects,
price: inputData.price,
contentfulID: inputData.contentfulID,
technologies: { name: "Apache Struts 1" }
}
});
}
if (inputData.symfony) {
objects.requests.push({
action: "addObject",
body: {
name: inputData.name,
description: inputData.description,
projects: inputData.projects,
price: inputData.price,
contentfulID: inputData.contentfulID,
technologies: { name: "Symfony 1.x" }
}
});
}
fetch('https://N675AF3ESI.algolia.net/1/indexes/experts/batch',{
method: 'post',
headers: {
"X-Algolia-API-Key" : "&lt;hidden&gt;",
"X-Algolia-Application-Id" : "N675AF3ESI"
},
body: JSON.stringify(objects)
})
.then(function(res) {
return res.json();
})
.then(function(resource) {
callback(null, resource)
})
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
