---
card: "/images/default.jpg"
tags: [SEO]
description: Good news - we now have a brand new set of standards by which
author: "Milad E. Fahmy"
title: "How to Track and Analyze Web Vitals to Improve SEO"
created: "2021-08-15T19:29:13+02:00"
modified: "2021-08-15T19:29:13+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-seo tag-web-vitals tag-javascript tag-front-end-development tag-analytics tag-data tag-software-engineering ">
<header class="post-full-header">
<h1 class="post-full-title">How to Track and Analyze Web Vitals to Improve SEO</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/06/vitals.png 300w,
/news/content/images/size/w600/2020/06/vitals.png 600w,
/news/content/images/size/w1000/2020/06/vitals.png 1000w,
/news/content/images/size/w2000/2020/06/vitals.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/06/vitals.png" alt="How to Track and Analyze Web Vitals to Improve SEO">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Good news - we now have a brand new set of standards by which to judge our search engine's worthiness! ? </p>
<p>If you're like me, you may not have been jumping for joy when you read <a href="https://webmasters.googleblog.com/2020/05/evaluating-page-experience.html">Google's announcement of its upcoming search algorithm change</a>. But after taking some time to breathe, I believe it's a positive change. </p>
<p>The announcement emphasizes web page <em>experience</em> and its role in the future of search indexing. By following this new direction, we can not only provide a better experience to website users, but also establish effective strategies to improve SEO.</p>
<h2 id="what-are-web-vitals">What are Web Vitals?</h2>
<p>The following metrics encompass Web Vitals as defined at the time of this writing.</p>
<ul>
<li><a href="https://web.dev/fcp/">First Contentful Paint (FCP</a>) measures the time from when the page starts loading to when any part of the page's content is rendered on the screen.</li>
<li><a href="https://web.dev/fid/">First Input Delay (FID)</a> measures the time from when a user first interacts with a page to the time when the browser is able to respond to that interaction.</li>
<li><a href="https://web.dev/lcp/">Largest Contentful Paint (LCP)</a> metric reports the render time of the largest content element visible within the viewport.</li>
<li><a href="https://web.dev/time-to-first-byte/">Time to First Byte (TTFB)</a> is the time that it takes for a user's browser to receive the first byte of page content.</li>
<li><a href="https://web.dev/cls/">Cumulative Layout Shift (CLS)</a> measures the sum total of all individual <em><em>layout shift scores</em></em> for every <em><em>unexpected layout shift</em></em> that occurs during the entire lifespan of a page. To calculate the <em><em>layout shift score</em></em>, the browser looks at the viewport size and the movement of unstable elements in the viewport between two rendered frames.</li>
</ul>
<h2 id="why-are-web-vitals-important">Why are Web Vitals Important?</h2>
<p>In recent years, <a href="https://developers.google.com/web/tools/lighthouse">Lighthouse</a>, an open-source automated tool for improving the quality of web pages, became widely adopted as an industry standard. </p>
<p>Now another Google project called <a href="https://github.com/GoogleChrome/web-vitals">Web Vitals</a> has emerged, deriving metrics from <strong>real users</strong> in a way that accurately matches how they're measured by Chrome and reported to other Google tools. </p>
<p>With it, we can establish page experience perspective from an SEO point of view, analyze, and adjust accordingly. ?</p>
<blockquote>Core Web Vitals are the subset of Web Vitals that apply to all web pages, should be measured by all site owners, and will be surfaced across all Google tools. Each of the Core Web Vitals represents a distinct facet of the user experience, is measurable <a href="https://web.dev/user-centric-performance-metrics/#how-metrics-are-measured">in the field</a>, and reflects the real-world experience of a critical <a href="https://web.dev/user-centric-performance-metrics/#how-metrics-are-measured">user-centric</a> outcome.</blockquote>
<div class="kg-bookmark-content">
<div class="kg-bookmark-title">Web Vitals</div>
<div class="kg-bookmark-description">Essential metrics for a healthy site</div>
<div class="kg-bookmark-metadata"><img class="kg-bookmark-icon" src="https://web.dev/images/apple-touch-icon.png"><span class="kg-bookmark-publisher">web.dev</span></div>
</div>
<div class="kg-bookmark-thumbnail"><img src="https://webdev.imgix.net/images/social.png?auto=format&amp;fit=max&amp;w=1200"></div>
</a></figure>
<h2 id="web-vitals-in-google-search-console">Web Vitals in Google Search Console</h2>
<p>Search Console provides reporting of how real users are accessing a website and a variety of data about these users. </p>
<p>Core Web Vitals are reported as a summary showing the total number of URLs that are good, need improvement, or are just poor. ?</p>
<figcaption>Google Search Console Core Web Vitals</figcaption>
</figure>
<h2 id="sending-web-vitals-to-google-analytics-and-visualizing-in-data-studio">Sending Web Vitals to Google Analytics and Visualizing in Data Studio</h2>
<p>Search Console provides a summary of results in the grand scheme, but in order to get detailed reporting we can take this a step further. The <a href="https://github.com/GoogleChrome/web-vitals#send-the-results-to-google-analytics">Web Vitals GitHub project documents a way of capturing metrics as analytics events</a> that can be visualized as charts in Google's Data Studio.</p>
<p>Disclaimer: I haven't personally been able to wire analytics Web Vitals events to Data Studio, and the documentation is lacking at this time. But I'll update this post once I can put together an example.</p>
<h2 id="visualizing-and-analyzing-web-vitals-in-real-time-with-automated-lighthouse-check">Visualizing and Analyzing Web Vitals in Real Time with Automated Lighthouse Check</h2>
<figcaption><a href="https://www.automated-lighthouse-check.com/dashboard/demo/web-vitals">Automated Lighthouse Check Web Vitals Demo</a></figcaption>
</figure>
<p>Google Analytics and Data Studio are powerful tools that provide great insight. And best of all, they are free! </p>
<p>Automated Lighthouse Check is a website that monitors websites with Lighthouse and now offers a Web Vitals implementation. You can embed a JS snippet on your website and start collecting Web Vitals metrics in real time. </p>
<p>One advantage of this tool is its simple setup process and easy filtering. You can <a href="https://www.foo.software/web-vitals">filter data by URL as well as browser, OS, and device</a>.</p>
<h2 id="conclusion">Conclusion</h2>
<p>The road to SEO success is a winding one, but fortunately we now have a more concrete set of guidelines. If your goal is to achieve high ranking on Google's search engine, it's a good idea to utilize the tools and projects Google recommends including Lighthouse and Web Vitals.</p>
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
