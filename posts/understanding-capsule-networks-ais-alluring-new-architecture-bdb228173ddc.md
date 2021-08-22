---
card: "https://cdn-media-1.freecodecamp.org/images/1*e2Y2V1vCy6oo5Of7x0guUA.jpeg"
tags: [Machine Learning]
description: "by Nick Bourdakos"
author: "Milad E. Fahmy"
title: "Understanding Capsule Networks — AI’s Alluring New Architecture"
created: "2021-08-16T11:47:09+02:00"
modified: "2021-08-16T11:47:09+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-machine-learning tag-ai tag-tech tag-programming tag-technology ">
<header class="post-full-header">
<h1 class="post-full-title">Understanding Capsule Networks — AI’s Alluring New Architecture</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*e2Y2V1vCy6oo5Of7x0guUA.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*e2Y2V1vCy6oo5Of7x0guUA.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*e2Y2V1vCy6oo5Of7x0guUA.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*e2Y2V1vCy6oo5Of7x0guUA.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*e2Y2V1vCy6oo5Of7x0guUA.jpeg" alt="Understanding Capsule Networks — AI’s Alluring New Architecture">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
114 - 153 = -39
153 - 153 = 0
255 - 255 = 0</code></pre><p>What if we went through each pixel in the image and replaced its value with the value of the difference of the pixels to the left and right of it? In theory, the image should become all black except for the edges.</p><p>We could do this by looping through every pixel in the image:</p><pre><code class="language-py">for pixel in image {
result[pixel] = image[pixel - 1] - image[pixel + 1]
}</code></pre><p>But this isn’t very efficient. We can instead use something called a “convolution.” Technically speaking, it’s a “cross-correlation,” but everyone likes to call them convolutions.</p><p>A convolution is essentially doing the same thing as our loop, but it takes advantage of matrix math.</p><p>A convolution is done by lining up a small “window” in the corner of the image that only lets us see the pixels in that area. We then slide the window across all the pixels in the image, multiplying each pixel by a set of weights and then adding up all the values that are in that window.</p><p>This window is a matrix of weights, called a “kernel.”</p><p>We only care about 2 pixels, but when we wrap the window around them it will encapsulate the pixel between them.</p><pre><code>Window:
┌─────────────────────────────────────┐
│ left_pixel middle_pixel right_pixel │
└─────────────────────────────────────┘</code></pre><p>Can you think of a set of weights that we can multiply these pixels by so that their sum adds up to the value we are looking for?</p><pre><code>Window:
┌─────────────────────────────────────┐
│ left_pixel middle_pixel right_pixel │
└─────────────────────────────────────┘
(w1 * 255) + (w2 * 255) + (w3 * 114) = 141</code></pre><p><strong>Spoilers below!</strong></p><pre><code> │      │            │
│      │            │
│      │            │
│      │            │
│      │            │
\│/    \│/          \│/
V      V            V</code></pre><p>We can do something like this:</p><pre><code>Window:
┌─────────────────────────────────────┐
│ left_pixel middle_pixel right_pixel │
└─────────────────────────────────────┘
(1 * 255) + (0 * 255) + (-1 * 114) = 141</code></pre><p>With these weights, our kernel will look like this:</p><pre><code class="language-py">kernel = [1  0 -1]</code></pre><p>However, kernels are generally square — so we can pad it with more zeros to look like this:</p><pre><code class="language-py">kernel = [
[0  0  0]
[1  0 -1]
[0  0  0]
[0  1  0]
[0  0  0]
[0 -1  0]
]</code></pre><p>Also, both of these kernels won’t work well with edges of other angles or edges that are blurred. For that reason, we use many kernels (in our CapsNet implementation, we use 256 kernels). And the kernels are normally larger to allow for more wiggle room (our kernels will be 9x9).</p><p>This is what one of the kernels looked like after training the model. It’s not very obvious, but this is just a larger version of our edge detector that is more robust and only finds edges that go from bright to dark.</p><pre><code class="language-py">kernel = [
[ 0.02 -0.01  0.01 -0.05 -0.08 -0.14 -0.16 -0.22 -0.02]
[ 0.01  0.02  0.03  0.02  0.00 -0.06 -0.14 -0.28  0.03]
[ 0.03  0.01  0.02  0.01  0.03  0.01 -0.11 -0.22 -0.08]
[ 0.03 -0.01 -0.02  0.01  0.04  0.07 -0.11 -0.24 -0.05]
[-0.01 -0.02 -0.02  0.01  0.06  0.12 -0.13 -0.31  0.04]
[-0.05 -0.02  0.00  0.05  0.08  0.14 -0.17 -0.29  0.08]
[-0.06  0.02  0.00  0.07  0.07  0.04 -0.18 -0.10  0.05]
[-0.06  0.01  0.04  0.05  0.03 -0.01 -0.10 -0.07  0.00]
[-0.04  0.00  0.04  0.05  0.02 -0.04 -0.02 -0.05  0.04]
cap_1 * weight_for_1 = prediction
cap_1 * weight_for_2 = prediction
cap_1 * ...
cap_1 * weight_for_9 = prediction
cap_2 * weight_for_0 = prediction
cap_2 * weight_for_1 = prediction
cap_2 * weight_for_2 = prediction
cap_2 * ...
cap_2 * weight_for_9 = prediction
...
cap_1152 * weight_for_0 = prediction
cap_1152 * weight_for_1 = prediction
cap_1152 * weight_for_2 = prediction
cap_1152 * ...
cd CapsNet-Visualization
pip install -r requirements.txt</code></pre><p>Run the tool:</p><pre><code class="language-bash">python run_visualization.py</code></pre><p>Then point your browser to: <a href="http://localhost:5000/" rel="noopener">http://localhost:5000</a></p><h3 id="final-thoughts">Final Thoughts</h3><p>I think that the reconstructions from capsule networks are stunning. Even though the current model is only trained on simple digits, it makes my mind run with the possibilities that a matured architecture trained on a larger dataset could achieve.</p><p>I’m very curious to see how manipulating the reconstruction vectors of a more complicated image would affect it. For that reason, my next project is to get capsule networks to work with the CIFAR and smallNORB datasets.</p><p>Thanks for reading! If you have any questions, feel free to reach out at bourdakos1@gmail.com, connect with me on <a href="https://www.linkedin.com/in/nicholasbourdakos" rel="noopener">LinkedIn</a>, or follow me on <a href="https://medium.com/@bourdakos1" rel="noopener">Medium</a> and <a href="https://twitter.com/bourdakos1" rel="noopener">Twitter</a>.</p><p>If you found this article helpful, it would mean a lot if you gave it some applause? and shared to help others find it! And feel free to leave a comment below.</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
