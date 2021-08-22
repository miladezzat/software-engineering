---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c9c77740569d1a4ca3259.jpg"
tags: [Python]
description: "Python utilizes the while loop similarly to other popular lan"
author: "Milad E. Fahmy"
title: "Python While Loop Statement Explained"
created: "2021-08-16T15:37:15+02:00"
modified: "2021-08-16T15:37:15+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-python tag-toothbrush ">
<header class="post-full-header">
<h1 class="post-full-title">Python While Loop Statement Explained</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c9c77740569d1a4ca3259.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9c77740569d1a4ca3259.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9c77740569d1a4ca3259.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9c77740569d1a4ca3259.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c9c77740569d1a4ca3259.jpg" alt="Python While Loop Statement Explained">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<h2 id="while-loop-statements"><strong>While Loop Statements</strong></h2><p>Python utilizes the <code>while</code> loop similarly to other popular languages. The <code>while</code> loop evaluates a condition then executes a block of code if the condition is true. The block of code executes repeatedly until the condition becomes false.</p><p>The basic syntax is:</p><pre><code class="language-python">counter = 0
while counter &lt; 10:
# Execute the block of code here as
# long as counter is less than 10</code></pre><p>An example is shown below:</p><pre><code class="language-python">days = 0
week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
while days &lt; 7:
print("Today is " + week[days])
days += 1</code></pre><p>Output:</p><pre><code class="language-text">Today is Monday
Today is Tuesday
Today is Wednesday
Today is Thursday
Today is Friday
Today is Saturday
Today is Sunday</code></pre><p>Line-by-Line Explanation of the above CODE:</p><ol><li>the variable ‘days’ is set to a value 0.</li><li>a variable week is assigned to a list containing all the days of the week.</li><li>while loop starts</li><li>the block of code will be executed until the condition returns ‘true’.</li><li>the condition is ‘days&lt;7’ which rougly says run the while loop till the point the variable days is less than 7</li><li>So when the days=7 the while loop stops executing.</li><li>the days variable gets updated on every iteration.</li><li>When the while loop runs for the first time the line ‘Today is Monday’ is printed onto the console and the variable days becomes equal to 1.</li><li>Since the variable days is equal to 1 which is less than 7 so the while loop is executed again.</li><li>It goes on again and again and when the console prints ‘Today is Sunday’ the variable days is now equal to 7 and the while loop stops executing.</li></ol><h4 id="more-information-"><strong>More Information:</strong></h4><ul><li><a href="https://docs.python.org/3/reference/compound_stmts.html#the-while-statement" rel="nofollow">Python <code>while</code> statement documentation</a></li></ul>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
