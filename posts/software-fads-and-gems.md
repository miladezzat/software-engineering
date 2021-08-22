---
card: "/images/default.jpg"
tags: [Python]
description: "Maybe one of the most important qualities of a developer is t"
author: "Milad E. Fahmy"
title: "How looking back can help us move forward: a retrospective on software gems and fads"
created: "2021-08-16T15:38:30+02:00"
modified: "2021-08-16T15:38:30+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-python tag-bitcoin tag-asyncio tag-nosql tag-formats ">
<header class="post-full-header">
<h1 class="post-full-title">How looking back can help us move forward: a retrospective on software gems and fads</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2019/08/hidden-gem.jpg 300w,
/news/content/images/size/w600/2019/08/hidden-gem.jpg 600w,
/news/content/images/size/w1000/2019/08/hidden-gem.jpg 1000w,
/news/content/images/size/w2000/2019/08/hidden-gem.jpg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2019/08/hidden-gem.jpg" alt="How looking back can help us move forward: a retrospective on software gems and fads">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<pre><code class="language-python">from ZODB import FileStorage, DB
import transaction
storage = FileStorage.FileStorage('mydatabase.fs')
root = DB(storage).open().root()
print("ROOT:", root)
root['employees'] = ['Mary', 'Jo', 'Bob']
transaction.commit()
</code></pre>
<pre><code class="language-python">
async def increment_counter(counter):
current = counter.current_value
await log_counter_value(current)  # Unwanted context switch happens here
counter.current_value = current + 1
</code></pre>
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
