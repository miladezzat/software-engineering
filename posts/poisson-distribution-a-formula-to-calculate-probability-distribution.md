---
card: "/images/default.jpg"
tags: [Mathematics]
description: "Probability Distributions play an important role in our daily"
author: "Milad E. Fahmy"
title: "Poisson Distribution – A Formula to Calculate Probability Distribution"
created: "2021-08-16T15:35:51+02:00"
modified: "2021-08-16T15:35:51+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-mathematics tag-statistics tag-python tag-data-science ">
<header class="post-full-header">
<h1 class="post-full-title">Poisson Distribution – A Formula to Calculate Probability Distribution</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/07/thisisengineering-raeng-GzDrm7SYQ0g-unsplash.jpg 300w,
/news/content/images/size/w600/2020/07/thisisengineering-raeng-GzDrm7SYQ0g-unsplash.jpg 600w,
/news/content/images/size/w1000/2020/07/thisisengineering-raeng-GzDrm7SYQ0g-unsplash.jpg 1000w,
/news/content/images/size/w2000/2020/07/thisisengineering-raeng-GzDrm7SYQ0g-unsplash.jpg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/07/thisisengineering-raeng-GzDrm7SYQ0g-unsplash.jpg" alt="Poisson Distribution – A Formula to Calculate Probability Distribution">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
import matplotlib.pyplot as plt
import scipy.stats as stats
# n = number of events, lambd = expected number of events
# which can take place in a period
for lambd in range(2, 12, 2):
n = np.arange(0, 9)
poisson = stats.poisson.pmf(n, lambd)
plt.plot(n, poisson, '-o', label="λ = {:f}".format(lambd))
plt.xlabel('Number of Events', fontsize=12)
plt.ylabel('Probability', fontsize=12)
plt.title("Poisson Distribution varying λ")
plt.legend()
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
