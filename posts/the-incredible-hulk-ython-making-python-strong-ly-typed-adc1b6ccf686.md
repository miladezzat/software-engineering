---
card: "https://cdn-media-1.freecodecamp.org/images/1*Awcmdb1xwSKXM7aID2TP1A.png"
tags: [Python]
description: "Python is a wonderful dynamically typed language. But quite a"
author: "Milad E. Fahmy"
title: "Why you should experiment with type-checking in Python"
created: "2021-08-16T15:40:41+02:00"
modified: "2021-08-16T15:40:41+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-python tag-tech tag-programming tag-learning tag-coding ">
<header class="post-full-header">
<h1 class="post-full-title">Why you should experiment with type-checking in Python</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*Awcmdb1xwSKXM7aID2TP1A.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*Awcmdb1xwSKXM7aID2TP1A.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*Awcmdb1xwSKXM7aID2TP1A.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*Awcmdb1xwSKXM7aID2TP1A.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*Awcmdb1xwSKXM7aID2TP1A.png" alt="Why you should experiment with type-checking in Python">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
# In here we import List, which provided equivalent functionality to
# the list() function or the [] equivalent shorthand
from typing import List
# We define a function, as usually but we add the expected
# type to the args and we add a return type too
def find_files_of_type(type: str, files_types: List[str]) -&gt; bool:
return (type in files_types)
files_types: List[str] = [‘ppt’, ‘vcf’, ‘png’]
type_to_search: str = ‘ppt’
print(‘Found files of type {} in list? {}’.format(type_to_search,
find_files_of_type(type_to_search, files_types)))</code></pre><p>A bit awkward, but still clear, right? :)</p><h3 id="the-potential-trap">The potential trap</h3><p>You might have noticed that I mentioned the word ‘optional’ a few lines above. So, at the time of writing this article, there is no enforcement on the type checking.</p><p>You might add whatever irrelevant type you want to your variables. Do the most invalid, irrelevant and “perverted” operations to them, but Python won’t bat an eye.</p><p>If you want to <strong>enforce</strong> the type checking, you should use a type checker like the great <a href="http://mypy-lang.org/examples.html" rel="noopener">mypy</a>.</p><p>Of course, most IDEs have some functionality towards type checking. <a href="https://www.jetbrains.com/help/pycharm/type-hinting-in-product.html" rel="noopener">Here</a> is the relevant documentation for Pycharm.</p><h3 id="thinks-i-would-like-to-see-in-the-future">Thinks I would like to see in the future</h3><ul><li>Integrate a type-checking mechanism in the core of the language</li><li>As a result of the above, more seamless type hints. For example, if the type-checking is on then, I should not have to use the class <code>List</code> or <code>Tuple</code> to do it. The <code>[]</code> and <code>()</code> shorthands should be enough</li></ul><h3 id="conclusion">Conclusion</h3><p>Thank you for reading this article. This is by no means an extended guide to this great functionality of Python. Rather it is a primer that I hope will lead to more research.</p><p>If you are starting a new project in Python 3.5+, I would recommend experimenting with the type checking. I would love to see your suggestions and thoughts about this feature, so feel free to leave a comment.</p><p>Originally published on <a href="http://perigk.github.io" rel="noopener">my blog</a>.</p>
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
