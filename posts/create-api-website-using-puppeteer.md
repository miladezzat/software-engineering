---
card: "/images/default.jpg"
tags: [Puppeteer]
description: "It often happens that you come across a website and are force"
author: "Milad E. Fahmy"
title: "How to Create a Custom API From Any Website Using Puppeteer"
created: "2021-08-16T10:05:03+02:00"
modified: "2021-08-16T10:05:03+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-puppeteer tag-node-js tag-api tag-web-development ">
<header class="post-full-header">
<h1 class="post-full-title">How to Create a Custom API From Any Website Using Puppeteer</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/05/F4C23721-4609-4B8B-A907-36ACDF146287.jpg 300w,
/news/content/images/size/w600/2020/05/F4C23721-4609-4B8B-A907-36ACDF146287.jpg 600w,
/news/content/images/size/w1000/2020/05/F4C23721-4609-4B8B-A907-36ACDF146287.jpg 1000w,
/news/content/images/size/w2000/2020/05/F4C23721-4609-4B8B-A907-36ACDF146287.jpg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/05/F4C23721-4609-4B8B-A907-36ACDF146287.jpg" alt="How to Create a Custom API From Any Website Using Puppeteer">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
const url = 'https://www.amazon.in/s?k=Shirts&amp;ref=nb_sb_noss_2';
async function fetchProductList(url) {
const browser = await puppeteer.launch({
headless: true, // false: enables one to view the Chrome instance in action
defaultViewport: null, // (optional) useful only in non-headless mode
});
const page = await browser.newPage();
await page.goto(url, { waitUntil: 'networkidle2' });
...
}
fetchProductList(url);
brand: 'Brand Name',
product: 'Product Name',
url: 'https://www.amazon.in/url.of.product.com/',
image: 'https://www.amazon.in/image.jpg',
price: '₹599',
async function fetchProductList(url) {
...
await page.waitFor('div[data-cel-widget^="search_result_"]');
const result = await page.evaluate(() =&gt; {
// counts total number of products
let totalSearchResults = Array.from(document.querySelectorAll('div[data-cel-widget^="search_result_"]')).length;
let productsList = [];
for (let i = 1; i &lt; totalSearchResults - 1; i++) {
let product = {
brand: '',
product: '',
};
let onlyProduct = false;
let emptyProductMeta = false;
// traverse for brand and product names
let productNodes = Array.from(document.querySelectorAll(`div[data-cel-widget="search_result_${i}"] .a-size-base-plus.a-color-base`));
if (productNodes.length === 0) {
// traverse for brand and product names
// (in case previous traversal returned empty elements)
productNodes = Array.from(document.querySelectorAll(`div[data-cel-widget="search_result_${i}"] .a-size-medium.a-color-base.a-text-normal`));
productNodes.length &gt; 0 ? onlyProduct = true : emptyProductMeta = true;
}
let productsDetails = productNodes.map(el =&gt; el.innerText);
if (!emptyProductMeta) {
product.brand = onlyProduct ? '' : productsDetails[0];
product.product = onlyProduct ? productsDetails[0] : productsDetails[1];
}
// traverse for product image
let rawImage = document.querySelector(`div[data-cel-widget="search_result_${i}"] .s-image`);
product.image =rawImage ? rawImage.src : '';
// traverse for product url
let rawUrl = document.querySelector(`div[data-cel-widget="search_result_${i}"] a[target="_blank"].a-link-normal`);
product.url = rawUrl ? rawUrl.href : '';
// traverse for product price
let rawPrice = document.querySelector(`div[data-cel-widget="search_result_${i}"] span.a-offscreen`);
product.price = rawPrice ? rawPrice.innerText : '';
if (typeof product.product !== 'undefined') {
!product.product.trim() ? null : productsList = productsList.concat(product);
}
}
return productsList;
});
...
}
async function fetchProductList(url, searchTerm) {
...
await page.goto(url, { waitUntil: 'networkidle2' });
await page.waitFor('input[name="field-keywords"]');
await page.evaluate(val =&gt; document.querySelector('input[name="field-keywords"]').value = val, searchTerm);
await page.click('div.nav-search-submit.nav-sprite');
// DOM traversal and data mapping logic
// returns a productsList array
...
}
fetchProductList('https://amazon.in', 'Shirts');
const userAgent = require('user-agents');
...
const browser = await puppeteer.launch({ headless: true, defaultViewport: null });
const page = await browser.newPage();
await page.setUserAgent(userAgent.toString());
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
