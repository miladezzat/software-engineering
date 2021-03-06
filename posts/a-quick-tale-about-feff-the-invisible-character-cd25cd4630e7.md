---
card: "https://cdn-media-1.freecodecamp.org/images/0*J31NyCBQWkZvSV5C"
tags: [Ruby]
description: "Today, we encountered an error while trying to create some da"
author: "Milad E. Fahmy"
title: "A quick tale about FEFF, an invisible UTF-8 character that wrecked our CSV files"
created: "2021-08-16T10:13:00+02:00"
modified: "2021-08-16T10:13:00+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-ruby tag-programming tag-tech tag-apple tag-web-development ">
<header class="post-full-header">
<h1 class="post-full-title">A quick tale about FEFF, an invisible UTF-8 character that wrecked our CSV files</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/0*J31NyCBQWkZvSV5C 300w,
https://cdn-media-1.freecodecamp.org/images/0*J31NyCBQWkZvSV5C 600w,
https://cdn-media-1.freecodecamp.org/images/0*J31NyCBQWkZvSV5C 1000w,
https://cdn-media-1.freecodecamp.org/images/0*J31NyCBQWkZvSV5C 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/0*J31NyCBQWkZvSV5C" alt="A quick tale about FEFF, an invisible UTF-8 character that wrecked our CSV files">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Today, we encountered an error while trying to create some database seeds from a CSV. This CSV was originally generated by me using a Ruby script which piped the output to a file and saved as a CSV.</p><p>The CSV was checked in to Git and had been used for awhile until we had to update some parts of it by adding a new column and fixing some values.</p><p>While we don’t know the exact reason yet, my theory is that somehow, Excel for Mac (we are all using Macs) added some additional metadata to it even after saving the file as a CSV.</p><p>This in turn made anyone using the seed receive the following error:</p><pre><code>CSV::MalformedCSVError: Illegal quoting in line 1.</code></pre><p>I opened the CSV file and nothing looked suspicious. My first thought was some left/right quotation marks were somehow mixed into the file instead of just the ‘normal’ double quotes: <code>"</code>. But upon further investigation, there was nothing out of the ordinary. This led me to just wipe out the whole file, and actually type out the first row again.</p><p>I saved that file again and ran the migration:</p><pre><code>CSV::MalformedCSVError: Illegal quoting in line 1.</code></pre><p>What?!</p><p>Okay, this was driving me nuts. I opened up a new file, typed the exact single line again, and ran the migration. It worked. So what was in that file?!</p><p>Only one way to find out:</p><pre><code>cat companies.csv | pbcopy | pbpaste &gt; temp.csv
rm companies.csv
mv temp.csv companies.csv
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
