---
card: "https://cdn-media-1.freecodecamp.org/images/1*KOiao8Wi7g8KSNP2HfxssA.png"
tags: [JavaScript]
description: "This article will teach you the bare minimum you need to know"
author: "Milad E. Fahmy"
title: "Learn the Dropbox API in 5 minutes"
created: "2021-08-16T11:31:08+02:00"
modified: "2021-08-16T11:31:08+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-web-development tag-front-end-development tag-coding tag-technology ">
<header class="post-full-header">
<h1 class="post-full-title">Learn the Dropbox API in 5 minutes</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*KOiao8Wi7g8KSNP2HfxssA.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*KOiao8Wi7g8KSNP2HfxssA.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*KOiao8Wi7g8KSNP2HfxssA.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*KOiao8Wi7g8KSNP2HfxssA.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*KOiao8Wi7g8KSNP2HfxssA.png" alt="Learn the Dropbox API in 5 minutes">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
const accessToken = '&lt;your-token-from-dashboard&gt;';
const dbx = new Dropbox({
accessToken,
fetch
});
</code></pre><p>Note that Dropbox is a named import. The reason is that there are other sub-libraries within <code>'dropbox'</code>, for example, <code>DropboxTeam</code>, but we will focus only on <code>Dropbox</code> in this tutorial.</p><h3 id="getting-files">Getting files</h3><p>The first method we’re going to look at is for getting files.</p><pre><code class="language-js">dbx.filesListFolder({
path: ''
}).then(response =&gt; console.log(response))
const response = await dbx.filesListFolder({
path: '',
limit: 5
})
console.log(response)
}
getFiles()
const response = await dbx.filesListFolder({
path: '',
limit: 5
})
// We can perform a custom action with received files
processFiles(response.entries)
if (response.has_more) {
// provide a callback for the newly received entries
// to be processed
getMoreFiles(response.cursor, more =&gt; processFiles(more.entries))
}
}
getFiles()
</code></pre><p>We provide the cursor to let the API know the entries that we’ve received, so we won’t receive the same files again.</p><pre><code class="language-js">const getMoreFiles = async (cursor, callback) =&gt; {
// request further files from where the previous call finished
const response = await dbx.filesListFolderContinue({ cursor })
// if a callback is provided we call it
if (callback) callback(response)
if (response.has_more) {
// if there are more files, call getMoreFiles recursively,
// providing the same callback.
await getMoreFiles(response.cursor, callback)
}
}
entries: [{
path: '',
size: 'w32h32',
format: 'png',
}]
});
from_path: 'origin_folder',
to_path: 'destination_folder
}
const moveFiles = async () =&gt; {
let response = await dbx.filesMoveBatchV2({ entries })
const { async_job_id } = response
if (async_job_id) {
do {
response = await dbx.filesMoveBatchCheckV2({ async_job_id })
// This where we perform state update or any other action.
console.log(res)
} while (response['.tag'] === 'in_progress')
}
}
</code></pre><h3 id="wrap-up">Wrap up</h3><p>Congratulations! You now have a very basic understanding of Dropbox API and its JavaScript SDK.</p><p>If you want to learn more about the Dropbox API and build an app on top of it with Vanilla JavaScript, be sure to check out our <a href="https://scrimba.com/g/gdropbox?utm_source=freecodecamp.org&amp;utm_medium=referral&amp;utm_campaign=gdropbox_5_minute_article">free course on Scrimba.</a> It has, along with this post, been sponsored and paid for by Dropbox. This sponsorship helps Scrimba keep the lights on and it enables us to continue creating free content for our community throughout 2019. So a big thanks to Dropbox for that!</p><p>Happy coding :)</p>
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
