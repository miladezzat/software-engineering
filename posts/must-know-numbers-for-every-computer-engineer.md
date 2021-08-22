---
card: "/images/default.jpg"
tags: [Computer Science]
description: "In 2010, Jeff Dean from Google gave a wonderful talk at Stanf"
author: "Milad E. Fahmy"
title: "These are the numbers every computer engineer should know"
created: "2021-08-16T11:28:30+02:00"
modified: "2021-08-16T11:28:30+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-computer-science tag-google tag-internet tag-coding tag-technology ">
<header class="post-full-header">
<h1 class="post-full-title">These are the numbers every computer engineer should know</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2019/09/numbers.jpg 300w,
/news/content/images/size/w600/2019/09/numbers.jpg 600w,
/news/content/images/size/w1000/2019/09/numbers.jpg 1000w,
/news/content/images/size/w2000/2019/09/numbers.jpg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2019/09/numbers.jpg" alt="These are the numbers every computer engineer should know">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>In 2010, <a href="https://en.wikipedia.org/wiki/Jeff_Dean_(computer_scientist)" rel="noopeneer">Jeff Dean</a> from Google gave a wonderful talk at Stanford that made him quite famous. In it, he discussed a few numbers that are relevant to computing systems. Then Peter Norvig <a href="http://norvig.com/21-days.html" rel="noopeneer">published</a> those numbers for the first time on the internet. </p><p>Time passed, and the numbers changed. Here is a very good <a href="https://people.eecs.berkeley.edu/~rcs/research/interactive_latency.html" rel="noopeneer">interactive web UI</a> of those numbers which roughly tells how much they have changed over the years as a function of time.</p><p>This article is not only a compilation of Jeff Dean's estimated data, but rather it brings together all such numbers from different sources. This should help you as a system designer and architect. While designing, you can use these numbers to estimate the amount of resources your system needs.</p><h2 id="rough-estimation-of-latency-data-for-2019-">Rough estimation of latency data for 2019:</h2><ol><li>L1 cache reference: 1 nanosecond.</li><li>L2 cache reference: 4 nanoseconds.</li><li>Mutex Lock / Unlock: 17 nanoseconds.</li><li>Main memory / RAM reference: 100 nanoseconds.</li><li>Compress 1 KB with Zippy (currently called <a href="https://en.wikipedia.org/wiki/Snappy_(compression)" rel="noopeneer">Snappy</a>): 2000 nanoseconds or 2 microseconds.</li><li>CPU branch <a href="https://en.wikipedia.org/wiki/Branch_predictor" rel="noopeneer">mispredict</a>: 3 nanoseconds.</li><li>Solid State Drive (SSD) random read: 16 microseconds.</li><li>Disk (Hard drive / magnetic drive) seek: 3 milliseconds.</li><li>Read 1,000,000 bytes sequentially from main memory: 4 microseconds.</li><li>Read 1,000,000 bytes sequentially from SSD: 62 microseconds.</li><li>Read 1,000,000 bytes sequentially from disk: 947 microseconds.</li><li>Round trip network request in same data centre : 500 microseconds.</li><li>Send 2000 bytes over commodity network: 62 nanoseconds.</li></ol><h2 id="time-taken-for-payload-to-travel-over-tcp-">Time Taken for payload to travel over TCP:</h2><p>Here is the amount of time required to transmit various data payloads on typical cell networks around the world assuming no data loss.</p><p>RTT — Round Trip Time — Total time taken for a data packet (bunch of data bytes) to travel from sender to receiver and receiver to sender over the network. In short, it’s called Ping time.</p><ol><li>Transfer of 1 byte to 13,000 bytes (roughly 13 KB) data takes 1 round trip or 1 RTT. Rough time taken — USA: 150 milliseconds, India: 1200 milliseconds, Brazil: 600 milliseconds.</li><li>13,001 bytes — 39,000 bytes (13 KB to 39 KB) takes 2 RTT. Rough time taken — USA: 300 milliseconds, India: 2400 milliseconds, Brazil: 1200 milliseconds.</li><li>39,001 bytes — 91,000 bytes (39 KB to 91KB) takes 3 RTT. Rough time taken-USA: 450 milliseconds, India: 3600 milliseconds, Brazil: 1800 milliseconds.</li><li>91,001 bytes — 195,000 bytes (91 KB to 195 KB) takes 4 RTT. Rough time taken — USA: 600 milliseconds, India: 4800 milliseconds, Brazil: 2400 milliseconds.</li></ol><p>So the greater the response size means more bytes, a longer round trip, more API latency, and ultimately a less user friendly app.</p><p>This post will be updated when new or updated numbers are found. Please let me know if you are aware of new numbers.</p><p>This article is originally published on Author's <a href="https://medium.com/@kousiknath/must-know-numbers-for-every-computer-engineer-6338a12c292c">medium wall</a>. If you like it, please give claps.</p><p>Reference:</p><ol><li><a href="https://colin-scott.github.io/blog/2012/12/24/latency-trends/" rel="noopeneer">https://colin-scott.github.io/blog/2012/12/24/latency-trends/</a></li><li><a href="https://blog.std.in/2015/05/23/http-response-sizes-and-tcp/" rel="noopeneer">https://blog.std.in/2015/05/23/http-response-sizes-and-tcp/</a></li><li><a href="https://medium.com/@kousiknath/must-know-numbers-for-every-computer-engineer-6338a12c292c">https://medium.com/@kousiknath/must-know-numbers-for-every-computer-engineer-6338a12c292c</a></li></ol>
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
