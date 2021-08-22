---
card: "/images/default.jpg"
tags: [AWS]
description: "S3 and CloudFront are AWS cloud services that make serving st"
author: "Milad E. Fahmy"
title: "How to host and deploy a static website or JAMstack app to AWS S3 and CloudFront"
created: "2021-08-16T11:27:57+02:00"
modified: "2021-08-16T11:27:57+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-aws tag-web-development tag-static-site-generators tag-jamstack tag-website-development tag-s3 tag-html tag-cloudfront tag-cloud-services tag-cloud tag-cloud-solutions tag-tutorial tag-beginners-guide tag-programming tag-tech tag-technology tag-software-development ">
<header class="post-full-header">
<h1 class="post-full-title">How to host and deploy a static website or JAMstack app to AWS S3 and CloudFront</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/03/static-website-in-aws-s3.jpg 300w,
/news/content/images/size/w600/2020/03/static-website-in-aws-s3.jpg 600w,
/news/content/images/size/w1000/2020/03/static-website-in-aws-s3.jpg 1000w,
/news/content/images/size/w2000/2020/03/static-website-in-aws-s3.jpg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/03/static-website-in-aws-s3.jpg" alt="How to host and deploy a static website or JAMstack app to AWS S3 and CloudFront">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
&lt;html lang=“en”&gt;
&lt;head&gt;
&lt;meta charset=“UTF-8”&gt;
&lt;meta name=“viewport” content=“width=device-width, initial-scale=1.0”&gt;
&lt;title&gt;My Static Website&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;h1&gt;Hello World!&lt;/h1&gt;
&lt;p&gt;This is my static website. ?&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;
"Version":"2012-10-17",
"Statement":[{
"Sid":"PublicReadGetObject",
"Effect":"Allow",
"Principal": "*",
"Action":["s3:GetObject"],
"Resource":["arn:aws:s3:::[your-bucket-name]/*”
]
}
]
}
<p style="margin: 0;">
<a href="https://twitter.com/colbyfayock" style="display: block;">
</a>
</p>
<ul style="display:flex;justify-content:center;list-style:none;padding:0;margin: .5em 0 0;font-size: .8em;">
<li style="margin: 0 .6em;padding: 0;">
<a href="https://twitter.com/colbyfayock" style="text-decoration: none;">? Follow Me On Twitter</a>
</li>
<li style="margin: 0 .6em;padding: 0;">
<a href="https://youtube.com/colbyfayock" style="text-decoration: none;">?️ Subscribe To My Youtube</a>
</li>
<li style="margin: 0 .6em;padding: 0;">
<a href="https://www.colbyfayock.com/newsletter/" style="text-decoration: none;">✉️ Sign Up For My Newsletter</a>
</li>
</ul>
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
