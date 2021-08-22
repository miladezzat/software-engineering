---
card: "https://cdn-media-1.freecodecamp.org/images/1*NQgINaLXYMzvowRHHa6Plw.jpeg"
tags: [Python]
description: "Manually copy-pasting is fine if you don’t have too many file"
author: "Milad E. Fahmy"
title: "How to combine multiple CSV files with 8 lines of code"
created: "2021-08-16T15:39:36+02:00"
modified: "2021-08-16T15:39:36+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-python tag-excel tag-automation tag-tech tag-productivity ">
<header class="post-full-header">
<h1 class="post-full-title">How to combine multiple CSV files with 8 lines of code</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*NQgINaLXYMzvowRHHa6Plw.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*NQgINaLXYMzvowRHHa6Plw.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*NQgINaLXYMzvowRHHa6Plw.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*NQgINaLXYMzvowRHHa6Plw.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*NQgINaLXYMzvowRHHa6Plw.jpeg" alt="How to combine multiple CSV files with 8 lines of code">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
import glob
import pandas as pd
os.chdir("/mydir")</code></pre><h4 id="step-2-use-glob-to-match-the-pattern-csv-">Step 2: Use glob to match the pattern ‘csv’</h4><p>Match the pattern (‘csv’) and save the list of file names in the ‘all_filenames’ variable. You can check out <a href="https://regexr.com/" rel="noopener">this link</a> to learn more about regular expression matching.</p><pre><code class="language-py">extension = 'csv'
all_filenames = [i for i in glob.glob('*.{}'.format(extension))]</code></pre><h4 id="step-3-combine-all-files-in-the-list-and-export-as-csv">Step 3: Combine all files in the list and export as CSV</h4><p>Use pandas to concatenate all files in the list and export as CSV. The output file is named “combined_csv.csv” located in your working directory.</p><pre><code class="language-py">#combine all files in the list
combined_csv = pd.concat([pd.read_csv(f) for f in all_filenames ])
#export to csv
combined_csv.to_csv( "combined_csv.csv", index=False, encoding='utf-8-sig')</code></pre><p>encoding = ‘utf-8-sig’ is added to overcome the issue when exporting ‘Non-English’ languages.</p><p>And…it’s done!</p><p>This article was inspired by my actual everyday problem, and the coding structure is from a discussion on <a href="https://stackoverflow.com/questions/9234560/find-all-csv-files-in-a-directory-using-python/12280052" rel="noopener">stackoverflow</a>. The completed script for this how-to is <a href="https://github.com/ekapope/Combine-CSV-files-in-the-folder/blob/master/Combine_CSVs.py" rel="noopener">documented on GitHub</a>.</p><p>Thank you for reading. Please give it a try, have fun and let me know your feedback!</p><p>If you like what I did, consider following me on <a href="https://ekapope.github.io/" rel="noopener">GitHub</a>, <a href="https://medium.com/@ekapope.v" rel="noopener">Medium</a>, and <a href="https://twitter.com/EkapopeV" rel="noopener">Twitter</a>. Make sure <a href="https://github.com/Ekapope" rel="noopener">to star it on GitHub</a> :P</p>
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
