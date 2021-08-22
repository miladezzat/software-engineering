---
card: "https://cdn-media-1.freecodecamp.org/images/1*OUB8k2i29fHzusm5H5lW0Q.png"
tags: [Web Development]
description: "With a myriad of visualization tools available, it is hard to"
author: "Milad E. Fahmy"
title: "Powerful Tools for MongoDB data Visualization"
created: "2021-08-16T10:11:18+02:00"
modified: "2021-08-16T10:11:18+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-web-development tag-mongodb tag-tech tag-programming tag-data-analysis ">
<header class="post-full-header">
<h1 class="post-full-title">Powerful Tools for MongoDB data Visualization</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*OUB8k2i29fHzusm5H5lW0Q.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*OUB8k2i29fHzusm5H5lW0Q.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*OUB8k2i29fHzusm5H5lW0Q.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*OUB8k2i29fHzusm5H5lW0Q.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*OUB8k2i29fHzusm5H5lW0Q.png" alt="Powerful Tools for MongoDB data Visualization">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>With a myriad of visualization tools available, it is hard to find the right one for MongoDB data which has out-of-the-box functionality.</p><p>Today, I want to tell you about my experience in exploring such visualization tools.</p><p>My goal was to analyze a dataset from a MongoDB database. I wanted to work out a workflow for data analysis which combines database management analysis, data aggregation and data visualization.</p><p>Here are the tools I’ve chosen:</p><ul><li><a href="https://www.mongodb.com/products/compass/?r=m3" rel="noopener">Compass</a><strong> </strong>is a GUI application for in-depth analysis and visualization of MongoDB data and a collections’ schema. It provides a real-time view of your data. The intuitive interface helped me to focus on the meaning of data.</li><li><a href="https://www.flexmonster.com/?r=m3" rel="noopener">Flexmonster Pivot Table</a> is a tool for advanced web reporting and analysis. While Compass is a stand-alone application, I’ve discovered that Flexmonster is integrated directly into the web project. I’ve managed to embed it into my Angular 4 application and used it for data analysis.</li></ul><p>The first part of the visualization process is to set up a connection to a MongoDB database with Compass. Then you can explore what functionalities Compass offers and what analysis you can conduct using this tool.</p><p>The second part is dedicated to further MongoDB data analysis. We will load data into a pivot table and explore the possibilities this offers.</p><p>As a data source for my research<strong>,</strong> I’ve chosen a <a href="https://www.kaggle.com/heesoo37/120-years-of-olympic-history-athletes-and-results/?r=m3" rel="noopener">dataset on 120 years of Olympic history and results</a>.</p><p>This dataset has a typical JSON structure which is different from the format required by MongoDB. To import this into MongoDB, I’ve executed the following command in the CLI:</p><pre><code class="language-bash">mongoimport - db &lt;db-name&gt; - collection athletes - type json - file athletes.json
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
