---
card: "https://cdn-media-1.freecodecamp.org/images/1*e-tlgkX_3RVuHm5CRth_tA.png"
tags: [JavaScript]
description: "In my previous startup, we used the Dropbox API heavily in ou"
author: "Milad E. Fahmy"
title: "Free Course: Build an  expense organizer with ES6 and Dropbox"
created: "2021-08-16T11:31:12+02:00"
modified: "2021-08-16T11:31:12+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-web-development tag-dropbox tag-front-end-development tag-technology ">
<header class="post-full-header">
<h1 class="post-full-title">Free Course: Build an  expense organizer with ES6 and Dropbox</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*e-tlgkX_3RVuHm5CRth_tA.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*e-tlgkX_3RVuHm5CRth_tA.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*e-tlgkX_3RVuHm5CRth_tA.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*e-tlgkX_3RVuHm5CRth_tA.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*e-tlgkX_3RVuHm5CRth_tA.png" alt="Free Course: Build an  expense organizer with ES6 and Dropbox">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
import { Dropbox } from 'dropbox';
</code></pre><p>The class is instantiated with a configuration object, that needs <code>accessToken</code> and a fetching library. We will be using plain <code>fetch</code> in the course and you can get your <code>accessToken</code>, if you wish, in your Dropbox Developer Account.</p><pre><code class="language-js">import { Dropbox } from 'dropbox';
const dbx = new Dropbox({
accessToken: 'aeOL1E1HS0AAAAAAAAAALX6z1ogWy75HGE_HBN-NNpJNfhnEa1kjF1vsJ_t7Wf8k',
fetch
})
</code></pre><p>Note: the <code>accessToken</code> above has been revoked, so it’s no point trying to use it in your own code.</p><h3 id="get-files">Get Files</h3><p>So far, Christian showed us how to instantiate a class.</p><p>A full list of methods on the class can be found at <a href="https://dropbox.github.io/dropbox-sdk-js/Dropbox.html">the official docs page</a>.</p><p>In this cast, we will learn about the <code>filesListFolder()</code> method. It accepts a folder and _s_tarts returning the contents of the folder.</p><pre><code class="language-js">dbx.filesListFolder({
path: ''
}).then(res =&gt; console.log(res))
// for a full console.log results, visit:
// [https://scrimba.com/p/pnyeEhr/cGvvanuy](https://scrimba.com/p/pnyeEhr/cGvvanuy)
state.files = [...state.files, ...files]
renderFiles()
getThumbnails(files)
}
</code></pre><p>To get thumbnails we can use an existing API endpoint:</p><pre><code class="language-js">// [http://dropbox.github.io/dropbox-sdk-js/Dropbox.html](http://dropbox.github.io/dropbox-sdk-js/Dropbox.html)
dbx.filesGetThumbnailBatch({
entries: [{
path: '',
// preferred size for a thumbnail
size: 'w32h32'
}]
})
const res = await dbx.filesListFolder({
path: '',
limit: 20
})
updateFiles(res.entries)
}
const res = await dbx.filesListFolder({
path: '',
limit: 20
})
updateFiles(res.entries)
if (res.has_more) {
getMoreFiles(res.cursor, more =&gt; updateFiles(more.entries))
}
}
</code></pre><p>We can improve the user experience, but adding a loading message when more files need to be loaded.</p><pre><code class="language-js">const loadingElem = document.querySelector('.js-loading')
const init = async () =&gt; {
const res = await dbx.filesListFolder({
path: '',
limit: 20
})
updateFiles(res.entries)
if (res.has_more) {
loadingElem.classList.remove('hidden')
getMoreFiles(res.cursor, more =&gt; updateFiles(more.entries))
loadingElem.classList.add('hidden')
} else {
loadingElem.classList.add('hidden')
}
}
</code></pre><p>Now we can implement <code>getMoreFiles()</code> function.</p><pre><code class="language-js">const getMoreFiles = async (cursor, cb) =&gt; {
const res = await dbx.filesListFolderContinue({ cursor })
// we check if the callback is provided and if so - call it
if (cb) cb(res)
if (res.has_more) {
// if there are more files, call getMoreFiles recursively,
// providing the same callback.
await getMoreFiles(res.cursor, cb)
}
}
organizeBtn.addEventListener('click', async e =&gt; {
const originalMsg = e.target.innerHTML
e.target.disabled = true
e.target.innerHTML = 'Working...'
await moveFilesToDatedFolders()
e.target.disabled = false
e.target.innerHTML = originalMsg
})
</code></pre><p>Next, let’s implement <code>moveFilesToDatedFolders()</code> that will use Dropbox’s <code>filesMoveBatchV2()</code>.</p><pre><code class="language-js">// Basic API implementation.
dbx.filesMoveBatchV2({
entries: [{
from_path: 'some_folder',
to_path: 'some_other_folder'
}]
})
loadingElem.classList.remove('hidden')
init()
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
