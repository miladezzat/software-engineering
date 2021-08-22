---
card: "/images/default.jpg"
tags: [Python]
description: "Say you have a list that contains duplicate numbers:"
author: "Milad E. Fahmy"
title: "Python Unique List – How to Get all the Unique Values in a List or Array"
created: "2021-08-16T15:35:45+02:00"
modified: "2021-08-16T15:35:45+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-python ">
<header class="post-full-header">
<h1 class="post-full-title">Python Unique List – How to Get all the Unique Values in a List or Array</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/08/skye-studios-NDLLFxTELrU-unsplash.jpg 300w,
/news/content/images/size/w600/2020/08/skye-studios-NDLLFxTELrU-unsplash.jpg 600w,
/news/content/images/size/w1000/2020/08/skye-studios-NDLLFxTELrU-unsplash.jpg 1000w,
/news/content/images/size/w2000/2020/08/skye-studios-NDLLFxTELrU-unsplash.jpg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/08/skye-studios-NDLLFxTELrU-unsplash.jpg" alt="Python Unique List – How to Get all the Unique Values in a List or Array">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
</code></pre>
</code></pre>
def get_unique_numbers(numbers):
list_of_unique_numbers = []
unique_numbers = set(numbers)
for number in unique_numbers:
list_of_unique_numbers.append(number)
return list_of_unique_numbers
print(get_unique_numbers(numbers))
# result: [1, 2, 3, 4, 5]
</code></pre>
</code></pre>
list_of_unique_numbers.append(number)
</code></pre>
unique_numbers = list(set(numbers))
print(unique_numbers)
# Result: [1, 2, 3, 4, 5]
</code></pre>
</code></pre>
def get_unique_numbers(numbers):
unique = []
for number in numbers:
if number in unique:
continue
else:
unique.append(number)
return unique
print(get_unique_numbers(numbers))
# Result: [20, 30, 40]
</code></pre>
if number in unique:
continue
else:
unique.append(number)
</code></pre>
def get_unique_numbers(numbers):
unique = []
for number in numbers:
if number not in unique:
unique.append(number)
return unique
#Result: [20, 30, 40]
</code></pre>
unique.append(number)
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
