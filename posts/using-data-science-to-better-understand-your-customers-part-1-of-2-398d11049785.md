---
card: "https://cdn-media-1.freecodecamp.org/images/0*ZmsRm4xaKe99RG4v.jpg"
tags: [Machine Learning]
description: "by Jerin Paul"
author: "Milad E. Fahmy"
title: "How to use Data Science to better understand your customers"
created: "2021-08-16T11:30:12+02:00"
modified: "2021-08-16T11:30:12+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-machine-learning tag-sales tag-marketing tag-data-science tag-technology ">
<header class="post-full-header">
<h1 class="post-full-title">How to use Data Science to better understand your customers</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/0*ZmsRm4xaKe99RG4v.jpg 300w,
https://cdn-media-1.freecodecamp.org/images/0*ZmsRm4xaKe99RG4v.jpg 600w,
https://cdn-media-1.freecodecamp.org/images/0*ZmsRm4xaKe99RG4v.jpg 1000w,
https://cdn-media-1.freecodecamp.org/images/0*ZmsRm4xaKe99RG4v.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/0*ZmsRm4xaKe99RG4v.jpg" alt="How to use Data Science to better understand your customers">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
import numpy as np
from sklearn.cluster import KMeans
import matplotlib.pyplot as plt
plt.rc(“font”, size=14)</code></pre><p>Now, we will import the dataset.</p><pre><code class="language-py">data_path = "Mall_Customers.csv"
df = pd.read_csv(data_path)</code></pre><p>Maybe it’s just me, but I find a few column headers unsettling for some reason. Let’s dive in and change those.</p><pre><code class="language-py">df.rename(columns={'Genre':'Gender',
'Annual Income (k$)':'Annual_Income',
'Spending Score (1-100)':'Spending_Score'
},
inplace=True
)</code></pre><p>In this project, we will be clustering the customers using their annual income and their spending score (between 1 and 100). Therefore we will only be using those two columns.</p><pre><code class="language-py">X = df.iloc[:, [3, 4]].values</code></pre><p>Now that we are all set on the data front, it is time to start with our clustering. Before we run our clustering algorithm, it is imperative to determine the number of clusters to divide our customers into. There are a few different methods of determining the ideal number of clusters for this dataset. For that, we will be using the elbow method.</p><h4 id="elbow-method">Elbow method</h4><p>One method to figure out the number of clusters is by using the elbow method. This method involves running the K-means clustering algorithm on the data for different values of K and calculating the Sum of Squared Errors (S.S.E.) for each value of K.</p><p>Then, these values are plotted on a graph, and we can see that S.S.E. tends to decrease as the value of K increases. S.S.E. becomes 0 when the values of K is equal to the number of data points, because then each data point is its own cluster. Our aim is to find a point with a small value of K and that has a low S.S.E.</p><p>In this experiment, we will run K-means for different values of K in the range of 0 to 10 and store the S.S.E. in a list called distortions.</p><pre><code class="language-py">distortions = []
K = range(1, 10)
for k in K:
kmeansModel = KMeans(n_clusters = k, init = 'k-means++',    random_state = 23)
kmeansModel.fit(X)
distortions.append(kmeansModel.inertia_)
plt.plot(K, distortions)
plt.title("The Elbow Method")
plt.xlabel("Number of Clusters")
plt.ylabel("S.S.E.")
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
