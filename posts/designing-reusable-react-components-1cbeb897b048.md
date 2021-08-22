---
card: "https://cdn-media-1.freecodecamp.org/images/1*CByHyzJRQR6G8aiAkdFwcQ.png"
tags: [JavaScript]
description: "React is a component library. So React makes it easy to break"
author: "Milad E. Fahmy"
title: "Designing Reusable React Components"
created: "2021-08-16T10:18:45+02:00"
modified: "2021-08-16T10:18:45+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-react tag-web-development tag-web-design tag-reactjs ">
<header class="post-full-header">
<h1 class="post-full-title">Designing Reusable React Components</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*CByHyzJRQR6G8aiAkdFwcQ.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*CByHyzJRQR6G8aiAkdFwcQ.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*CByHyzJRQR6G8aiAkdFwcQ.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*CByHyzJRQR6G8aiAkdFwcQ.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*CByHyzJRQR6G8aiAkdFwcQ.png" alt="Designing Reusable React Components">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
1. Centralizes our Axios default configuration.
2. Abstracts away the logic for determining the baseURL.
3. Provides a clear, easily consumable list of JavaScript functions
for interacting with the API. This keeps API calls short and consistent.
*/
import axios from 'axios';
let api = null;
function getInitializedApi() {
if (api) return api; // return initialized api if already initialized.
return (api = axios.create({
baseURL: getBaseUrl(),
responseType: 'json',
withCredentials: true
}));
}
// Helper functions
function getBaseUrl() {
// Insert logic here to get the baseURL by either:
// 1. Sniffing the URL to determine the environment we're running in.
// 2. Looking for an environment variable as part of the build process.
}
function get(url) {
return getInitializedApi().get(url);
}
function post(url, data) {
return getInitializedApi().post(url, data);
}
// Public functions
// Note how short these are due to the centralized config and helpers above. ?
export function getUserById(id) {
return get(`user/${id}`);
}
export function saveUser(user) {
return post(`user/${user.id}`, {user: user});
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
