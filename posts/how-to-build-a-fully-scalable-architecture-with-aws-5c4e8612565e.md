---
card: "https://cdn-media-1.freecodecamp.org/images/1*FrPZa97jMlK-TARcgvegmA.png"
tags: [AWS]
description: "What I learned building the StateOfVeganism ?"
author: "Milad E. Fahmy"
title: "How to build a scalable architecture with AWS"
created: "2021-08-16T11:39:20+02:00"
modified: "2021-08-16T11:39:20+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-aws tag-cloud tag-nodejs tag-technology tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">How to build a scalable architecture with AWS</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*FrPZa97jMlK-TARcgvegmA.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*FrPZa97jMlK-TARcgvegmA.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*FrPZa97jMlK-TARcgvegmA.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*FrPZa97jMlK-TARcgvegmA.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*FrPZa97jMlK-TARcgvegmA.png" alt="How to build a scalable architecture with AWS">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
const NewsAPI = require('newsapi')
const moment = require('moment')
const AWS = require('aws-sdk')
exports.handler = async (event) =&gt; {
// Right now we only need to query the API every hour because there
// are very few articles that contain the word veganism
const toTS = moment().format('YYYY-MM-DDTHH:mm:ss')
const fromTS = moment(toTS).subtract(1, 'hour').format('YYYY-MM-DDTHH:mm:ss')
const newsapi = new NewsAPI(process.env.API_KEY)
const s3 = new AWS.S3()
const myBucket = process.env.S3_BUCKET
// Get the news from the given timeframe
return new Promise((resolve, reject) =&gt; {
newsapi.v2.everything({
q: '+vegan',
pageSize: 100,
from: fromTS,
to: toTS
})
.then(response =&gt; {
console.log(`Working with a total of ${response.articles.length} articles.`)
// Write all the documents to the S3-bucket
const promisedArticles = response.articles.map(article =&gt; {
const myKey = `sov_${article.publishedAt}.json`
const params = {Bucket: myBucket, Key: myKey, Body: JSON.stringify(article, null, 2)}
// Saving the record for given key in S3
return new Promise((res, rej) =&gt; {
s3.putObject(params, (err, data) =&gt; {
if (err) {
console.error(`Problem with persisting article to S3... ${err}`)
rej(err)
return
}
console.log(`Successfully uploaded data to ${myBucket}/${myKey}`)
res(`Successfully uploaded data to ${myBucket}/${myKey}`)
})
})
})
})
.catch(err =&gt; {
console.error(`Encountered a problem... ${err}`)
reject(err)
})
})
}
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
