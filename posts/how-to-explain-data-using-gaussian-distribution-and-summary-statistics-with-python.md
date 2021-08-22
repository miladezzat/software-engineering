---
card: "/images/default.jpg"
tags: [Python]
description: "Once you understand the taxonomy of data, you should learn to"
author: "Milad E. Fahmy"
title: "How to Explain Data Using Gaussian Distribution and Summary Statistics with Python"
created: "2021-08-16T15:35:12+02:00"
modified: "2021-08-16T15:35:12+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-python tag-data tag-data-analysis tag-statistics ">
<header class="post-full-header">
<h1 class="post-full-title">How to Explain Data Using Gaussian Distribution and Summary Statistics with Python</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/11/1.jpeg 300w,
/news/content/images/size/w600/2020/11/1.jpeg 600w,
/news/content/images/size/w1000/2020/11/1.jpeg 1000w,
/news/content/images/size/w2000/2020/11/1.jpeg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/11/1.jpeg" alt="How to Explain Data Using Gaussian Distribution and Summary Statistics with Python">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Once you understand the <a href="https://towardsdatascience.com/types-of-structured-data-every-data-science-enthusiast-should-know-a656b95afbe2" rel="noopener">taxonomy of data</a>, you should learn to apply a few essential foundational concepts that help describe the data using a set of statistical methods.</p><p>Before we dive into data and its distribution, we should understand the difference between two very important keywords - <strong>sample </strong>and<strong> population.</strong></p><p>A <em><em>sample</em></em> is a snapshot of data from a larger dataset. This larger dataset which is all of the data that could be possibly collected is called <em><em>population.</em></em><strong><strong><em><em> </em></em></strong></strong></p><p>In statistics,<strong><strong><em><em> </em></em></strong></strong>the<strong><strong><em><em> </em></em></strong></strong>population is a broad, defined, and often theoretical set of all possible observations that are generated from an experiment or from a domain.</p><p>Observations in a sample dataset often fit a certain kind of distribution which is commonly called <strong><strong>normal distribution</strong></strong>, and formally called <strong><strong>Gaussian</strong></strong> <strong>distribution</strong>. This is the most studied distribution, and there is an entire sub-field of statistics dedicated to Gaussian data.</p><h2 id="what-we-ll-cover">What we’ll cover</h2><p>In this post, we’ll focus on understanding:</p><ul><li>more about Guassian distribution and how it can be used to describe the data and observations from a machine learning model.</li><li><strong><strong>estimates of location </strong></strong>— the central tendency of a distribution.</li><li><strong><strong>estimates of variability</strong></strong> — the dispersion of data from the mean in the distribution.</li><li>the code snippets for generating normally distributed data and calculating estimates using various Python packages like <a href="https://towardsdatascience.com/numpy-essentials-for-data-science-25dc39fae39" rel="noopener">numpy</a>, <a href="https://www.scipy.org/docs.html" rel="noopener nofollow">scipy</a>, <a href="https://matplotlib.org/" rel="noopener nofollow">matplotlib</a>, and so on.</li></ul><p>And with that, let's get started.</p><h2 id="what-is-normal-or-guassian-distributon">What is normal or Guassian distributon?</h2><p>When we plot a dataset such as a histogram, the shape of that charted plot is what we call its distribution. The most commonly observed shape of continuous values is the bell curve, which is also called the Gaussian or normal distribution.</p><p>It is named after the German mathematician, Carl Friedrich Gauss. Some common example datasets that follow Gaussian distribution are:</p><ul><li>Body temperature</li><li>People’s Heights</li><li>Car mileage</li><li>IQ scores</li></ul><p>Let’s try to generate the ideal normal distribution and plot it using Python.</p><h3 id="how-to-plot-gaussian-distribution-in-python">How to plot Gaussian distribution in Python</h3><p>We have libraries like Numpy, scipy, and matplotlib to help us plot an ideal normal curve.</p><pre><code class="language-py">import numpy as np
import scipy as sp
from scipy import stats
import matplotlib.pyplot as plt
## generate the data and plot it for an ideal normal curve
## x-axis for the plot
x_data = np.arange(-5, 5, 0.001)
## y-axis as the gaussian
y_data = stats.norm.pdf(x_axis, 0, 1)
## plot data
np.random.seed(1)
## generating univariate data
data = 10 * np.random.randn(1000) + 100
## plotting the data
plt.hist(data)plt.show()
## output: 68.57490118577076</code></pre><h3 id="weighted-mean">Weighted mean</h3><p>The sum of all values times a weight divided by the sum of the weights. This is also known as the weighted average.</p><p>Here are two main motivations for using a weighted mean:</p><ul><li>Some observations are intrinsically more variable (high standard deviation) than others, and highly variable observations are given a lower weight.</li><li>The collected data does not equally represent the different groups that we are interested in measuring.</li></ul><h3 id="median">Median</h3><p>The value that separates one half of the data from the other, thus dividing it into a higher and lower half. This is also called the 50th percentile.</p><p>Here's how to calculate the median of the <code>Age</code> variable:</p><pre><code class="language-py">df['Age'].median()
stats.trim_mean(df['Age'], 0.1)
## output: 28.148861406903617</code></pre><h3 id="mean-absolute-deviation">Mean absolute deviation</h3><p>The mean of the absolute values of the deviations from the mean. This is also referred to as the l1-norm or Manhattan norm.</p><p>I’ve covered this in more detail along with a mathematical explanation here: <a href="https://towardsdatascience.com/calculating-vector-p-norms-linear-algebra-for-data-science-iv-400511cffcf0">Calculating Vector P-Norms — Linear Algebra for Data Science -IV</a></p><h3 id="median-absolute-deviation-from-the-median">Median absolute deviation from the median</h3><p>The median of the absolute values of the deviations from the median.</p><pre><code class="language-py">df['Age'].mad()
## output: 24.610885188020433</code></pre><h3 id="range">Range</h3><p>The difference between the largest and the smallest value in a data set.</p><p>We can calculate the range of a variable using the min and max from the summary statistics of the dataframe:</p><pre><code class="language-py">df['Age'].iloc[df['Age'].idxmax] - df['Age'].iloc[df['Age'].idxmin()]
## output: 97.1</code></pre><h3 id="order-statistics">Order statistics</h3><p>Order statistics, or ranks, are metrics based on the data values sorted from smallest to biggest.</p><h3 id="percentile-1">Percentile</h3><p>The value such that <em><em>P</em></em> percent of the values take on this value or less and (100–P) percent take on this value or more. This is sometimes called quantile.</p><h3 id="interquartile-range">Interquartile range</h3><p>Interquartile range, or IQR, is the difference between the 75th percentile and the 25th percentile.</p><pre><code class="language-py">Q1 = df['Age'].quantile(0.25)
Q3 = df['Age'].quantile(0.75)
IQR = Q3 - Q1
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
