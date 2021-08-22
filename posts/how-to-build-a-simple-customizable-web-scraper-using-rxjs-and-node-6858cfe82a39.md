---
card: "https://cdn-media-1.freecodecamp.org/images/0*zqqImyUXrCGM9nA-.jpg"
tags: [JavaScript]
description: by Jacob Goh
author: "Milad E. Fahmy"
title: "How to build a simple & customizable web scraper using RxJS and Node"
created: "2021-08-15T19:39:53+02:00"
modified: "2021-08-15T19:39:53+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-rxjs tag-web-scraping tag-nodejs tag-tech ">
<header class="post-full-header">
<h1 class="post-full-title">How to build a simple &amp; customizable web scraper using RxJS and Node</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/0*zqqImyUXrCGM9nA-.jpg 300w,
https://cdn-media-1.freecodecamp.org/images/0*zqqImyUXrCGM9nA-.jpg 600w,
https://cdn-media-1.freecodecamp.org/images/0*zqqImyUXrCGM9nA-.jpg 1000w,
https://cdn-media-1.freecodecamp.org/images/0*zqqImyUXrCGM9nA-.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/0*zqqImyUXrCGM9nA-.jpg" alt="How to build a simple &amp; customizable web scraper using RxJS and Node">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Jacob Goh</p>
<h1 id="how-to-build-a-simple-customizable-web-scraper-using-rxjs-and-node">How to build a simple &amp; customizable web scraper using RxJS and Node</h1>
<h3 id="introduction">Introduction</h3>
<p>After getting to know RxJS (thanks to Angular!), I realized that it’s surprisingly a good fit for handling web scraping operations.</p>
<p>I tried it out in a side project and I would like to share my experience with you. Hopefully, this will open your eyes to how reactive programming can make your life simpler.</p>
<p>The codes can be found on <a href="https://github.com/jacobgoh101/web-scraping-with-rxjs" rel="noopener">https://github.com/jacobgoh101/web-scraping-with-rxjs</a></p>
<h3 id="requirements">Requirements</h3>
<ul>
<li>Node</li>
<li>RxJS and intermediate understanding of it</li>
<li><a href="https://www.npmjs.com/package/cheerio" rel="noopener">cheerio</a>: it allows you to use jQuery-like syntax to extract information out of HTML code</li>
<li><a href="https://www.npmjs.com/package/request-promise-native" rel="noopener">request-promise-native</a>: for sending HTTP request</li>
</ul>
<h3 id="hypothetical-goal">Hypothetical Goal</h3>
<p>Everybody loves a good comedy movie.</p>
<p>Let’s make it our goal to scrape a list of good comedy movies from IMDB.</p>
<p>There are only 3 requirements that the target data needs to fulfill:</p>
<ul>
<li>it is a movie (not TV shows, music videos, etc)</li>
<li>it is a comedy</li>
<li>it has a rating of 7 or higher</li>
</ul>
<h3 id="get-started">Get Started</h3>
<p>Let’s set our base URL and define a BehaviorSubject <code>allUrl$</code> that uses the base URL as the initial value.</p>
<p>(A BehaviorSubject is a <a href="https://www.youtube.com/watch?v=rdK92pf3abs" rel="noopener">subject</a> with an initial value.)</p><pre><code>const { BehaviorSubject } =  require('rxjs');const  baseUrl  =  `https://imdb.com`;const  allUrl$  =  new  BehaviorSubject(baseUrl);</code></pre>
<p><code>allUrl$</code> is going to be the starting point of all crawling operations. Every URL will be passed into <code>allUrl$</code> and be processed on later.</p>
<h4 id="making-sure-that-we-scrape-each-url-only-once">Making sure that we scrape each URL only once</h4>
<p>With the help of <a href="https://rxjs-dev.firebaseapp.com/api/operators/distinct" rel="noopener">distinct</a> operators and <a href="https://www.npmjs.com/package/normalize-url" rel="noopener">normalize-url</a>, we can easily make sure that we never scrape the same URL twice.</p><pre><code>// ...const { map, distinct, filter } =  require('rxjs/operators');const  normalizeUrl  =  require('normalize-url');</code></pre><pre><code>// ...</code></pre><pre><code>const  uniqueUrl$  =  allUrl$.pipe(    // only crawl IMDB url    filter(url  =&gt;  url.includes(baseUrl)),    // normalize url for comparison    map(url  =&gt;  normalizeUrl(url, { removeQueryParameters: ['ref', 'ref_']     })),    // distinct is a RxJS operator that filters out duplicated values    distinct());</code></pre>
<h4 id="it-s-time-to-start-scraping">It’s time to start scraping</h4>
<p>We are going to make a request to each unique URL and map the content of each URL into another observable.</p>
<p>To do that, we use <a href="https://www.learnrxjs.io/operators/transformation/mergemap.html" rel="noopener">mergeMap</a> to map the result of the request to another observable.</p><pre><code>const { BehaviorSubject, from } =  require('rxjs');const { map, distinct, filter, mergeMap } = require('rxjs/operators');const rp = require('request-promise-native');const  cheerio  =  require('cheerio');</code></pre><pre><code>//...const urlAndDOM$ = uniqueUrl$.pipe(  mergeMap(url =&gt; {    return from(rp(url)).pipe(      // get the cheerio function $      map(html =&gt; cheerio.load(html)),      // add URL to the result. It will be used later for crawling      map($ =&gt; ({        $,        url      }))    );  }));</code></pre>
<p><code>urlAndDOM$</code> will emit an object consisting of 2 properties, which are <code>$</code> and <code>url</code>. <code>$</code> is a Cheerio function where you can use something like <code>$('div').text()</code> to extract information out of raw HTML code.</p>
<h4 id="crawl-all-the-urls">Crawl all the URLs</h4><pre><code>const { resolve } =  require('url');//...</code></pre><pre><code>// get all the next crawlable URLsurlAndDOM$.subscribe(({ url, $ }) =&gt; {  $('a').each(function(i, elem) {    const href = $(this).attr('href');    if (!href) return;</code></pre><pre><code>// build the absolute url    const absoluteUrl = resolve(url, href);    allUrl$.next(absoluteUrl);  });});</code></pre>
<p>In the code above, we scrape all the links inside the page and send them to <code>allUrl$</code> to be crawled later.</p>
<h4 id="scrape-and-save-the-movies-we-want-">Scrape and save the movies we want!</h4><pre><code>const  fs  =  require('fs');//...</code></pre><pre><code>const isMovie = $ =&gt;  $(`[property='og:type']`).attr('content') === 'video.movie';const isComedy = $ =&gt;  $(`.title_wrapper .subtext`)    .text()    .includes('Comedy');const isHighlyRated = $ =&gt; +$(`[itemprop="ratingValue"]`).text() &gt; 7;</code></pre><pre><code>urlAndDOM$  .pipe(    filter(({ $ }) =&gt; isMovie($)),    filter(({ $ }) =&gt; isComedy($)),    filter(({ $ }) =&gt; isHighlyRated($))  )  .subscribe(({ url, $ }) =&gt; {    // append the data we want to a file named "comedy.txt"    fs.appendFile('comedy.txt', `${url}, ${$('title').text()}\n`);  });</code></pre>
<h3 id="yup-we-just-created-a-web-scraper">Yup, we just created a web scraper</h3>
<p>In around 70 lines of code, we have created a web scraper that</p>
<ul>
<li>automatically crawled URLs without unnecessary duplicates</li>
<li>automatically scrapes and saves the info we want in a text file</li>
</ul>
<p>You may see the code up to this point in <a href="https://github.com/jacobgoh101/web-scraping-with-rxjs/blob/86ff05e893dec5f1b39647350cb0f74efe258c86/index.js" rel="noopener">https://github.com/jacobgoh101/web-scraping-with-rxjs/blob/86ff05e893dec5f1b39647350cb0f74efe258c86/index.js</a></p>
<p>If you have ever tried writing a web scraper from scratch, you should be able to see now how elegant it is to write one with RxJS.</p>
<h3 id="but-we-are-not-done-yet-">But we are not done yet…</h3>
<p>In an ideal world, the code above should work forever without any problems.</p>
<p>But in reality, silly errors happen.</p>
<h3 id="handling-errors">Handling Errors</h3>
<h4 id="limit-the-number-of-active-concurrent-connections">Limit the number of active concurrent connections</h4>
<p>If we send too many requests to a server in a short period of time, it’s likely that our IP will be temporarily blocked from making any further requests, especially for an established website like IMDB.</p>
<p>It’s also considered <strong>rude/unethical</strong> to send so many requests at once because it would create a heavier load on the server and in some cases, <strong>crash the server</strong>.</p>
<p><a href="https://www.learnrxjs.io/operators/transformation/mergemap.html" rel="noopener">mergeMap</a> has built-in functionality to control concurrency. Simply add a number to the 3rd function argument and it will limit the active concurrent connection automatically. Graceful!</p><pre><code>const maxConcurrentReq = 10;//...const urlAndDOM$ = uniqueUrl$.pipe(  mergeMap(    //...    null,    maxConcurrentReq  ));</code></pre>
<p>Code Diff: <a href="https://github.com/jacobgoh101/web-scraping-with-rxjs/commit/6aaed6dae230d2dde1493f1b6d78282ce2e8f316" rel="noopener">https://github.com/jacobgoh101/web-scraping-with-rxjs/commit/6aaed6dae230d2dde1493f1b6d78282ce2e8f316</a></p>
<h4 id="handle-and-retry-failed-request">Handle and Retry Failed Request</h4>
<p>Requests may fail randomly due to dead links or server-side rate limiting. This is crucial for web scrapers.</p>
<p>We can use <a href="https://www.learnrxjs.io/operators/error_handling/catch.html" rel="noopener">catchError</a>, <a href="https://www.learnrxjs.io/operators/error_handling/retry.html" rel="noopener">retry</a> operators to handle this.</p><pre><code>const { BehaviorSubject, from, of } =  require('rxjs');const {  // ...  retry,  catchError} = require('rxjs/operators');//...</code></pre><pre><code>const maxRetries = 5;// ...</code></pre><pre><code>const urlAndDOM$ = uniqueUrl$.pipe(  mergeMap(    url =&gt; {      return from(rp(url)).pipe(        retry(maxRetries),        catchError(error =&gt; {          const { uri } = error.options;          console.log(`Error requesting ${uri} after ${maxRetries} retries.`);          // return null on error          return of(null);        }),        // filter out errors        filter(v =&gt; v),        // ...      );    },</code></pre>
<p>Code Diff: <a href="https://github.com/jacobgoh101/web-scraping-with-rxjs/commit/3098b48ca91a59aa5171bc2aa9c17801e769fcbb" rel="noopener">https://github.com/jacobgoh101/web-scraping-with-rxjs/commit/3098b48ca91a59aa5171bc2aa9c17801e769fcbb</a></p>
<h4 id="improved-retry-failed-request">Improved Retry Failed Request</h4>
<p>Using retry operator, the retry would happen immediately after the request failed. This is not ideal.</p>
<p>It’s better to retry after a certain period of delay.</p>
<p>We can use the <code>genericRetryStrategy</code> suggested in <a href="https://www.learnrxjs.io/operators/error_handling/retrywhen.html" rel="noopener">learnrxjs</a> to achieve this.</p>
<p>Code Diff: <a href="https://github.com/jacobgoh101/web-scraping-with-rxjs/commit/e194f4ff128a573241055ffc0d1969d54ca8c270" rel="noopener">https://github.com/jacobgoh101/web-scraping-with-rxjs/commit/e194f4ff128a573241055ffc0d1969d54ca8c270</a></p>
<h3 id="conclusion">Conclusion</h3>
<p>To recap, in this post, we discussed:</p>
<ul>
<li>how to crawl a web page using Cheerio</li>
<li>how to avoid duplicated crawl using RxJS operators like filter, distinct</li>
<li>how to use mergeMap to create an observable of request’s response</li>
<li>how to limit concurrency in mergeMap</li>
<li>how to handle error</li>
<li>how to handle retry</li>
</ul>
<p>I hope this has been helpful to you and has deepened your understanding of RxJs and web scraping.</p>
<p><em>Originally published at <a href="https://dev.to/jacobgoh101/simple--customizable-web-scraper-using-rxjs-and-node-1on7" rel="noopener">dev.to</a>.</em></p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
