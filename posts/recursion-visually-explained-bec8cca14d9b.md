---
card: "https://cdn-media-1.freecodecamp.org/images/1*PPXnzjpCdxuMiz9OJdhe8w.png"
tags: [Python]
description: "In this article, I will explain recursion (almost) completely"
author: "Milad E. Fahmy"
title: "Check out my visual guide to recursion (because a picture’s worth 1,000 words)"
created: "2021-08-16T15:41:40+02:00"
modified: "2021-08-16T15:41:40+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-python tag-coding tag-software-development tag-programming tag-tech ">
<header class="post-full-header">
<h1 class="post-full-title">Check out my visual guide to recursion (because a picture’s worth 1,000 words)</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*PPXnzjpCdxuMiz9OJdhe8w.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*PPXnzjpCdxuMiz9OJdhe8w.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*PPXnzjpCdxuMiz9OJdhe8w.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*PPXnzjpCdxuMiz9OJdhe8w.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*PPXnzjpCdxuMiz9OJdhe8w.png" alt="Check out my visual guide to recursion (because a picture’s worth 1,000 words)">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>In this article, I will explain recursion (almost) completely with visual representations. I’ll show, rather than explain, how each recursive function call interacts with the entirety of the initial function invocation — in other words, how each piece connects to the whole.</p><p>A few details:</p><ul><li>The code is written in Python</li><li>Blue boxes represent the current scope of the function</li><li>Connecting lines are what a function returns</li></ul><p>Please use the code as a reference, as I do not go over the running of it in detail.</p><p>We’ll look at three problems: finding the Anagrams of a string, Merge Sort, and The Tower of Hanoi. They progressively get a little bit more nuanced, so watch out!</p><p>I’ll discuss more details of recursion below.</p><h3 id="anagrams">Anagrams</h3><pre><code class="language-python">def anagrams(s):
if s == "":
return [s]
else :
ans = []
for w in anagrams(s[1: ]):
for pos in range(len(w) + 1):
ans.append(w[: pos] + s[0] + w[pos: ])
return ans
anagrams("abc")
i1, i2, i3 = 0, 0, 0
n1, n2 = len(lst1), len(lst2)
while i1 &lt; n1 and i2 &lt; n2:
if lst1[i1] &lt; lst2[i2]:
lst3[i3] = lst1[i1]
i1 = i1 + 1
else:
lst3[i3] = lst2[i2]
i2 = i2 + 1
i3 = i3 + 1
# unequal length of lists? Check both
while i1 &lt; n1:
lst3[i3] = lst1[i1]
i1 = i1 + 1
i3 = i3 + 1
while i2 &lt; n2:
lst3[i3] = lst2[i2]
i2 = i2 + 1
i3 = i3 + 1
def mergeSort(nums):
n = len(nums)
if n &gt; 1:
m = n // 2
nums1, nums2 = nums[:m], nums[m:]
mergeSort(nums1)
mergeSort(nums2)
merge(nums1, nums2,nums)
numbers = [7, 4, 6, 2, 8]
mergeSort(numbers)
print(numbers)
if n == 1:
print("Move disk from", source, "to", dest+".")
else:
moveTower(n-1, source, temp, dest)
moveTower(1, source, dest, temp)
moveTower(n-1, temp, dest, source)
def hanoi(n):
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
