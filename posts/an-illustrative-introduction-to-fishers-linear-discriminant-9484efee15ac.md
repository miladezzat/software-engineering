---
card: "https://cdn-media-1.freecodecamp.org/images/1*XfBJ8NEwSB_zW8Up1V71mQ.jpeg"
tags: [Machine Learning]
description: "by Thalles Silva"
author: "Milad E. Fahmy"
title: "An illustrative introduction to Fisher’s Linear Discriminant"
created: "2021-08-16T11:33:50+02:00"
modified: "2021-08-16T11:33:50+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-machine-learning tag-data-science tag-artificial-intelligence tag-programming tag-technology ">
<header class="post-full-header">
<h1 class="post-full-title">An illustrative introduction to Fisher’s Linear Discriminant</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*XfBJ8NEwSB_zW8Up1V71mQ.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*XfBJ8NEwSB_zW8Up1V71mQ.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*XfBJ8NEwSB_zW8Up1V71mQ.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*XfBJ8NEwSB_zW8Up1V71mQ.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*XfBJ8NEwSB_zW8Up1V71mQ.jpeg" alt="An illustrative introduction to Fisher’s Linear Discriminant">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
def gaussian(self, X):
means = {}
covariance = {}
priors = {}  # p(Ck)
for class_id, values in X.items():
proj = np.dot(values, self.W)
means[class_id] = np.mean(proj, axis=0)
covariance[class_id] = np.cov(proj, rowvar=False)
# estimate the priors using fractions of the training set data points in each of the classes.
priors[class_id] = values.shape[0] / self.N
return means, covariance, priors
# model a multi-variate Gaussian distribution for each class’ likelihood distribution P(x|Ck)
def gaussian_distribution(self, x, u, cov):
scalar = (1. / ((2 * np.pi) ** (x.shape[0] / 2.))) * (1 / np.sqrt(np.linalg.det(cov)))
x_sub_u = np.subtract(x, u)
proj = self.project(X)
gaussian_likelihoods = []
classes = sorted(list(self.g_means.keys()))
for x in proj:
row = []
for c in classes:  # number of classes
res = self.priors[c] * self.gaussian_distribution(x, self.g_means[c], self.g_covariance[c])  # Compute the posterios P(Ck|x) prob of a class k given a point x
row.append(res)
gaussian_likelihoods.append(row)
gaussian_likelihoods = np.asarray(gaussian_likelihoods)
# assign x to the class with the largest posterior probability
predictions = np.argmax(gaussian_likelihoods, axis=1)
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
