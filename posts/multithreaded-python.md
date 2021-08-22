---
card: "/images/default.jpg"
tags: [Python]
description: "I recently developed a project that I called Hydra: a multith"
author: "Milad E. Fahmy"
title: "Multithreaded Python: Slithering Through an I/O Bottleneck?"
created: "2021-08-16T15:37:12+02:00"
modified: "2021-08-16T15:37:12+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-python tag-multithreading tag-computers ">
<header class="post-full-header">
<h1 class="post-full-title">Multithreaded Python: Slithering Through an I/O Bottleneck?</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/03/cover.png 300w,
/news/content/images/size/w600/2020/03/cover.png 600w,
/news/content/images/size/w1000/2020/03/cover.png 1000w,
/news/content/images/size/w2000/2020/03/cover.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/03/cover.png" alt="Multithreaded Python: Slithering Through an I/O Bottleneck?">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<thead>
<tr>
<th></th>
<th>Task</th>
<th>Time</th>
</tr>
</thead>
<tbody>
<tr>
<td>CPU</td>
<td>execute typical instruction</td>
<td>1/1,000,000,000 sec = 1 nanosec</td>
</tr>
<tr>
<td>CPU</td>
<td>fetch from L1 cache memory</td>
<td>0.5 nanosec</td>
</tr>
<tr>
<td>CPU</td>
<td>branch misprediction</td>
<td>5 nanosec</td>
</tr>
<tr>
<td>CPU</td>
<td>fetch from L2 cache memory</td>
<td>7 nanosec</td>
</tr>
<tr>
<td>RAM</td>
<td>Mutex lock/unlock</td>
<td>25 nanosec</td>
</tr>
<tr>
<td>RAM</td>
<td>fetch from main memory</td>
<td>100 nanosec</td>
</tr>
<tr>
<td>Network</td>
<td>send 2K bytes over 1Gbps network</td>
<td>20,000 nanosec</td>
</tr>
<tr>
<td>RAM</td>
<td>read 1MB sequentially from memory</td>
<td>250,000 nanosec</td>
</tr>
<tr>
<td>Disk</td>
<td>fetch from new disk location (seek)</td>
<td>8,000,000 nanosec   (8ms)</td>
</tr>
<tr>
<td>Disk</td>
<td>read 1MB sequentially from disk</td>
<td>20,000,000 nanosec  (20ms)</td>
</tr>
<tr>
<td>Network</td>
<td>send packet US to Europe and back</td>
<td>150,000,000 nanosec (150ms)</td>
</tr>
</tbody>
</table>
class Checker:
# Queue of links to be checked
TO_PROCESS = Queue()
# Maximum workers to run
THREADS = 100
# Maximum seconds to wait for HTTP response
TIMEOUT = 60
def __init__(self, url):
...
# Create the thread pool
self.pool = futures.ThreadPoolExecutor(max_workers=self.THREADS)
def run(self):
# Run until the TO_PROCESS queue is empty
while True:
try:
target_url = self.TO_PROCESS.get(block=True, timeout=2)
# If we haven't already checked this link
if target_url["url"] not in self.visited:
# Mark it as visited
self.visited.add(target_url["url"])
# Submit the link to the pool
job = self.pool.submit(self.load_url, target_url, self.TIMEOUT)
job.add_done_callback(self.handle_future)
except Empty:
return
except Exception as e:
print(e)
</code></pre><p>You can view the full code in <a href="https://github.com/victoriadrake/hydra-link-checker">Hydra’s GitHub repository</a>.</p><h2 id="single-thread-to-multithread">Single thread to multithread</h2><p>If you’d like to see the full effect, I compared the run times for checking my website between a prototype single-thread program, and the multiheaded - I mean multithreaded - Hydra.</p><pre><code class="language-text">time python3 slow-link-check.py https://victoria.dev
real    17m34.084s
user    11m40.761s
sys     0m5.436s
time python3 hydra.py https://victoria.dev
real    0m15.729s
user    0m11.071s
sys     0m2.526s
</code></pre><p>The single-thread program, which blocks on I/O, ran in about seventeen minutes. When I first ran the multithreaded version, it finished in 1m13.358s - after some profiling and tuning, it took a little under sixteen seconds. </p><p>Again, the exact times don’t mean all that much; they’ll vary depending on factors such as the size of the site being crawled, your network speed, and your program’s balance between the overhead of thread management and the benefits of &nbsp;parallelism.</p><p>The more important thing, and the result I’ll take any day, is a program that runs some orders of magnitude faster.</p>
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
