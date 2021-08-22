---
card: "/images/default.jpg"
tags: [mafft]
description: "Novel Coronavirus (2019-nCoV) is a deadly virus that seems to"
author: "Milad E. Fahmy"
title: "The Novel Coronavirus Epidemic in China: How to Help Researchers Using Sequence Alignment on 2019-nCoV with MAFFT"
created: "2021-08-16T15:37:29+02:00"
modified: "2021-08-16T15:37:29+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-mafft tag-genetics tag-python ">
<header class="post-full-header">
<h1 class="post-full-title">The Novel Coronavirus Epidemic in China: How to Help Researchers Using Sequence Alignment on 2019-nCoV with MAFFT</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/01/image-64-1.png 300w,
/news/content/images/size/w600/2020/01/image-64-1.png 600w,
/news/content/images/size/w1000/2020/01/image-64-1.png 1000w,
/news/content/images/size/w2000/2020/01/image-64-1.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/01/image-64-1.png" alt="The Novel Coronavirus Epidemic in China: How to Help Researchers Using Sequence Alignment on 2019-nCoV with MAFFT">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
import re
output = ""
for filename in sys.argv[1:]:
infile = open(filename)
data = infile.read()
data = " ".join(re.split("[^atcg\n]", data))
data = data.replace(" ", "")
output = output + "&gt;" + filename + "\n" + data + "\n"
print(output)
outfile = open('SEQUENCES.txt', 'w+')
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
