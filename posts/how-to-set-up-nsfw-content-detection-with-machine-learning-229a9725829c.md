---
card: "https://cdn-media-1.freecodecamp.org/images/0*auWeZYXZjFkr33e6"
tags: [Machine Learning]
description: "Teaching a machine to recognize indecent content wasn’t diffi"
author: "Milad E. Fahmy"
title: "How to set up NSFW content detection with Machine Learning"
created: "2021-08-16T15:39:11+02:00"
modified: "2021-08-16T15:39:11+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-machine-learning tag-keras tag-ai tag-python tag-tech ">
<header class="post-full-header">
<h1 class="post-full-title">How to set up NSFW content detection with Machine Learning</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/0*auWeZYXZjFkr33e6 300w,
https://cdn-media-1.freecodecamp.org/images/0*auWeZYXZjFkr33e6 600w,
https://cdn-media-1.freecodecamp.org/images/0*auWeZYXZjFkr33e6 1000w,
https://cdn-media-1.freecodecamp.org/images/0*auWeZYXZjFkr33e6 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/0*auWeZYXZjFkr33e6" alt="How to set up NSFW content detection with Machine Learning">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
weights='imagenet',
include_top=False,
input_shape=(height, width, num_channels)
x = Dense(256, activation='relu', kernel_initializer=initializers.he_normal(seed=None), kernel_regularizer=regularizers.l2(.0005))(x)
x = Dropout(0.5)(x)
# Add 128
x = Dense(128,activation='relu', kernel_initializer=initializers.he_normal(seed=None))(x)
x = Dropout(0.25)(x)
# Add 5
for layer in conv_base.layers:
if layer.name == 'conv2d_56':
set_trainable = True
if set_trainable:
layer.trainable = True
else:
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
