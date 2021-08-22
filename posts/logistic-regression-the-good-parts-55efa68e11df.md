---
card: "https://cdn-media-1.freecodecamp.org/images/1*KtyUBxGIhq99V1Wm11CXlw.jpeg"
tags: [Machine Learning]
description: "by Thalles Silva"
author: "Milad E. Fahmy"
title: "Logistic Regression: The good parts"
created: "2021-08-16T15:39:33+02:00"
modified: "2021-08-16T15:39:33+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-machine-learning tag-technology tag-data-science tag-python tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">Logistic Regression: The good parts</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*KtyUBxGIhq99V1Wm11CXlw.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*KtyUBxGIhq99V1Wm11CXlw.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*KtyUBxGIhq99V1Wm11CXlw.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*KtyUBxGIhq99V1Wm11CXlw.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*KtyUBxGIhq99V1Wm11CXlw.jpeg" alt="Logistic Regression: The good parts">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
clf.fit(x_train,y_train,iterations=10)
logits = self._forward(X)
if self.method == 'newton':
# calculate the hesssian
for i in range(k):
for j in range(k):
r = np.multiply(logits[:,i],((i==j)-logits[:,j]))  ## r has negative value, so cannot use sqrt
HT[:,i,:,j] = np.dot(np.multiply(X.T,r),X) # 4.110
H = np.reshape(HT,(dk,dk))
# calculate the gradient of the cross-entropy
G = np.dot(X.T,(logits-y))
if self.method == 'newton':
# Newton's update
self.W = self.W.reshape(-1) - np.dot(pinv(H), G.reshape(-1)) # 4.92
self.W = np.reshape(self.W,W_shape)
else:
# follow the gradient with GD
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
