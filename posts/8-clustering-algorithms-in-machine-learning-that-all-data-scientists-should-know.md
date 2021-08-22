---
card: "/images/default.jpg"
tags: [Machine Learning]
description: "There are three different approaches to machine learning, dep"
author: "Milad E. Fahmy"
title: "8 Clustering Algorithms in Machine Learning that All Data Scientists Should Know"
created: "2021-08-15T23:31:56+02:00"
modified: "2021-08-15T23:31:56+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-machine-learning tag-algorithms tag-clustering tag-data-science ">
<header class="post-full-header">
<h1 class="post-full-title">8 Clustering Algorithms in Machine Learning that All Data Scientists Should Know</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/09/analysis.png 300w,
/news/content/images/size/w600/2020/09/analysis.png 600w,
/news/content/images/size/w1000/2020/09/analysis.png 1000w,
/news/content/images/size/w2000/2020/09/analysis.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/09/analysis.png" alt="8 Clustering Algorithms in Machine Learning that All Data Scientists Should Know">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>There are three different approaches to machine learning, depending on the data you have. You can go with supervised learning, semi-supervised learning, or unsupervised learning. </p><p>In supervised learning you have labeled data, so you have outputs that you know for sure are the correct values for your inputs. That's like knowing car prices based on features like make, model, style, drivetrain, and other attributes.</p><p>With semi-supervised learning, you have a large data set where some of the data is labeled but most of it isn't. </p><p>This covers a large amount of real world data because it can be expensive to get an expert to label every data point. You can work around this by using a combination of supervised and unsupervised learning.</p><p>Unsupervised learning means you have a data set that is completely unlabeled. You don’t know if there are any patterns hidden in the data, so you leave it to the algorithm to find anything it can. </p><p>That's where clustering algorithms come in. It's one of the methods you can use in an unsupervised learning problem.</p><h2 id="what-are-clustering-algorithms">What are clustering algorithms?</h2><p>Clustering is an unsupervised machine learning task. You might also hear this referred to as cluster analysis because of the way this method works. </p><p>Using a clustering algorithm means you're going to give the algorithm a lot of input data with no labels and let it find any groupings in the data it can.</p><p>Those groupings are called <em>clusters</em>. A cluster is a group of data points that are similar to each other based on their relation to surrounding data points. Clustering is used for things like feature engineering or pattern discovery. </p><p>When you're starting with data you know nothing about, clustering might be a good place to get some insight. </p><h2 id="types-of-clustering-algorithms">Types of clustering algorithms</h2><p>There are different types of clustering algorithms that handle all kinds of unique data.</p><h3 id="density-based">Density-based</h3><p>In density-based clustering, data is grouped by areas of high concentrations of data points surrounded by areas of low concentrations of data points. Basically the algorithm finds the places that are dense with data points and calls those clusters.</p><p>The great thing about this is that the clusters can be any shape. You aren't constrained to expected conditions. </p><p>The clustering algorithms under this type don't try to assign outliers to clusters, so they get ignored.</p><h3 id="distribution-based">Distribution-based</h3><p>With a distribution-based clustering approach, all of the data points are considered parts of a cluster based on the probability that they belong to a given cluster. </p><p>It works like this: there is a center-point, and as the distance of a data point from the center increases, the probability of it being a part of that cluster decreases. </p><p>If you aren't sure of how the distribution in your data might be, you should consider a different type of algorithm.</p><h3 id="centroid-based">Centroid-based</h3><p>Centroid-based clustering is the one you probably hear about the most. It's a little sensitive to the initial parameters you give it, but it's fast and efficient. </p><p>These types of algorithms separate data points based on multiple centroids in the data. Each data point is assigned to a cluster based on its squared distance from the centroid. This is the most commonly used type of clustering.</p><h3 id="hierarchical-based">Hierarchical-based</h3><p>Hierarchical-based clustering is typically used on hierarchical data, like you would get from a company database or taxonomies. It builds a tree of clusters so everything is organized from the top-down. </p><p>This is more restrictive than the other clustering types, but it's perfect for specific kinds of data sets.</p><h2 id="when-to-use-clustering">When to use clustering</h2><p>When you have a set of unlabeled data, it's very likely that you'll be using some kind of unsupervised learning algorithm. </p><p>There are a lot of different unsupervised learning techniques, like neural networks, reinforcement learning, and clustering. The specific type of algorithm you want to use is going to depend on what your data looks like.</p><p>You might want to use clustering when you're trying to do anomaly detection to try and find outliers in your data. It helps by finding those groups of clusters and showing the boundaries that would determine whether a data point is an outlier or not. </p><p>If you aren't sure of what features to use for your machine learning model, clustering discovers patterns you can use to figure out what stands out in the data.</p><p>Clustering is especially useful for exploring data you know nothing about. It might take some time to figure out which type of clustering algorithm works the best, but when you do, you'll get invaluable insight on your data. You might find connections you never would have thought of.</p><p>Some real world applications of clustering include fraud detection in insurance, categorizing books in a library, and customer segmentation in marketing. It can also be used in larger problems, like earthquake analysis or city planning.</p><h2 id="the-top-8-clustering-algorithms">The Top 8 Clustering Algorithms</h2><p>Now that you have some background on how clustering algorithms work and the different types available, we can talk about the actual algorithms you'll commonly see in practice. </p><p>We'll implement these algorithms on an example data set from the <a href="https://scikit-learn.org/stable/">sklearn library</a> in Python.</p><p>We'll be using the <em>make_classification</em> data set from the sklearn library to demonstrate how different clustering algorithms aren't fit for all clustering problems. </p><p>You can find <a href="https://github.com/flippedcoder/probable-waddle">the code for all of the following example here</a>.</p><h3 id="k-means-clustering-algorithm">K-means clustering algorithm</h3><p>K-means clustering is the most commonly used clustering algorithm. It's a centroid-based algorithm and the simplest unsupervised learning algorithm. </p><p>This algorithm tries to minimize the variance of data points within a cluster. It's also how most people are introduced to unsupervised machine learning.</p><p>K-means is best used on smaller data sets because it iterates over <em>all</em> of the data points. That means it'll take more time to classify data points if there are a large amount of them in the data set. </p><p>Since this is how k-means clusters data points, it doesn't scale well.</p><p><strong>Implementation:</strong></p><pre><code class="language-Python">from&nbsp;numpy&nbsp;import&nbsp;unique
from&nbsp;numpy&nbsp;import&nbsp;where
from&nbsp;matplotlib&nbsp;import&nbsp;pyplot
from&nbsp;sklearn.datasets&nbsp;import&nbsp;make_classification
from&nbsp;sklearn.cluster&nbsp;import&nbsp;KMeans
#&nbsp;initialize&nbsp;the&nbsp;data&nbsp;set&nbsp;we'll&nbsp;work&nbsp;with
training_data,&nbsp;_&nbsp;=&nbsp;make_classification(
&nbsp;&nbsp;&nbsp;&nbsp;n_samples=1000,
&nbsp;&nbsp;&nbsp;&nbsp;n_features=2,
&nbsp;&nbsp;&nbsp;&nbsp;n_informative=2,
&nbsp;&nbsp;&nbsp;&nbsp;n_redundant=0,
&nbsp;&nbsp;&nbsp;&nbsp;n_clusters_per_class=1,
&nbsp;&nbsp;&nbsp;&nbsp;random_state=4
)
#&nbsp;define&nbsp;the&nbsp;model
kmeans_model&nbsp;=&nbsp;KMeans(n_clusters=2)
#&nbsp;assign&nbsp;each&nbsp;data&nbsp;point&nbsp;to&nbsp;a&nbsp;cluster
dbscan_result&nbsp;=&nbsp;dbscan_model.fit_predict(training_data)
#&nbsp;get&nbsp;all&nbsp;of&nbsp;the&nbsp;unique&nbsp;clusters
dbscan_clusters&nbsp;=&nbsp;unique(dbscan_result)
#&nbsp;plot&nbsp;the&nbsp;DBSCAN&nbsp;clusters
for&nbsp;dbscan_cluster&nbsp;in&nbsp;dbscan_clusters:
&nbsp;&nbsp;&nbsp;&nbsp;#&nbsp;get&nbsp;data&nbsp;points&nbsp;that&nbsp;fall&nbsp;in&nbsp;this&nbsp;cluster
&nbsp;&nbsp;&nbsp;&nbsp;index&nbsp;=&nbsp;where(dbscan_result&nbsp;==&nbsp;dbscan_clusters)
&nbsp;&nbsp;&nbsp;&nbsp;#&nbsp;make&nbsp;the&nbsp;plot
&nbsp;&nbsp;&nbsp;&nbsp;pyplot.scatter(training_data[index,&nbsp;0],&nbsp;training_data[index,&nbsp;1])
#&nbsp;show&nbsp;the&nbsp;DBSCAN&nbsp;plot
pyplot.show()</code></pre><h3 id="dbscan-clustering-algorithm">DBSCAN clustering algorithm</h3><p>DBSCAN stands for density-based spatial clustering of applications with noise. It's a density-based clustering algorithm, unlike k-means. </p><p>This is a good algorithm for finding outliners in a data set. It finds arbitrarily shaped clusters based on the density of data points in different regions. It separates regions by areas of low-density so that it can detect outliers between the high-density clusters.</p><p>This algorithm is better than k-means when it comes to working with oddly shaped data. </p><p>DBSCAN uses two parameters to determine how clusters are defined: <em>minPts</em> (the minimum number of data points that need to be clustered together for an area to be considered high-density) and <em>eps</em> (the distance used to determine if a data point is in the same area as other data points). </p><p>Choosing the right initial parameters is critical for this algorithm to work.</p><p><strong>Implementation:</strong></p><pre><code class="language-Python">from&nbsp;numpy&nbsp;import&nbsp;unique
from&nbsp;numpy&nbsp;import&nbsp;where
from&nbsp;matplotlib&nbsp;import&nbsp;pyplot
from&nbsp;sklearn.datasets&nbsp;import&nbsp;make_classification
from&nbsp;sklearn.cluster&nbsp;import&nbsp;DBSCAN
#&nbsp;initialize&nbsp;the&nbsp;data&nbsp;set&nbsp;we'll&nbsp;work&nbsp;with
training_data,&nbsp;_&nbsp;=&nbsp;make_classification(
&nbsp;&nbsp;&nbsp;&nbsp;n_samples=1000,
&nbsp;&nbsp;&nbsp;&nbsp;n_features=2,
&nbsp;&nbsp;&nbsp;&nbsp;n_informative=2,
&nbsp;&nbsp;&nbsp;&nbsp;n_redundant=0,
&nbsp;&nbsp;&nbsp;&nbsp;n_clusters_per_class=1,
&nbsp;&nbsp;&nbsp;&nbsp;random_state=4
)
#&nbsp;define&nbsp;the&nbsp;model
dbscan_model&nbsp;=&nbsp;DBSCAN(eps=0.25,&nbsp;min_samples=9)
#&nbsp;train&nbsp;the&nbsp;model
dbscan_model.fit(training_data)
#&nbsp;assign&nbsp;each&nbsp;data&nbsp;point&nbsp;to&nbsp;a&nbsp;cluster
dbscan_result&nbsp;=&nbsp;dbscan_model.predict(training_data)
#&nbsp;get&nbsp;all&nbsp;of&nbsp;the&nbsp;unique&nbsp;clusters
dbscan_cluster&nbsp;=&nbsp;unique(dbscan_result)
#&nbsp;plot&nbsp;the&nbsp;DBSCAN&nbsp;clusters
for&nbsp;dbscan_cluster&nbsp;in&nbsp;dbscan_clusters:
&nbsp;&nbsp;&nbsp;&nbsp;#&nbsp;get&nbsp;data&nbsp;points&nbsp;that&nbsp;fall&nbsp;in&nbsp;this&nbsp;cluster
&nbsp;&nbsp;&nbsp;&nbsp;index&nbsp;=&nbsp;where(dbscan_result&nbsp;==&nbsp;dbscan_clusters)
&nbsp;&nbsp;&nbsp;&nbsp;#&nbsp;make&nbsp;the&nbsp;plot
&nbsp;&nbsp;&nbsp;&nbsp;pyplot.scatter(training_data[index,&nbsp;0],&nbsp;training_data[index,&nbsp;1])
#&nbsp;show&nbsp;the&nbsp;DBSCAN&nbsp;plot
pyplot.show()</code></pre><h3 id="gaussian-mixture-model-algorithm">Gaussian Mixture Model algorithm</h3><p>One of the problems with k-means is that the data needs to follow a circular format. The way k-means calculates the distance between data points has to do with a circular path, so non-circular data isn't clustered correctly. </p><p>This is an issue that Gaussian mixture models fix. You don’t need circular shaped data for it to work well.</p><p>The Gaussian mixture model uses multiple Gaussian distributions to fit arbitrarily shaped data. </p><p>There are several single Gaussian models that act as hidden layers in this hybrid model. So the model calculates the probability that a data point belongs to a specific Gaussian distribution and that's the cluster it will fall under.</p><p><strong>Implementation:</strong></p><pre><code class="language-Python">from&nbsp;numpy&nbsp;import&nbsp;unique
from&nbsp;numpy&nbsp;import&nbsp;where
from&nbsp;matplotlib&nbsp;import&nbsp;pyplot
from&nbsp;sklearn.datasets&nbsp;import&nbsp;make_classification
from&nbsp;sklearn.mixture&nbsp;import&nbsp;GaussianMixture
#&nbsp;initialize&nbsp;the&nbsp;data&nbsp;set&nbsp;we'll&nbsp;work&nbsp;with
training_data,&nbsp;_&nbsp;=&nbsp;make_classification(
&nbsp;&nbsp;&nbsp;&nbsp;n_samples=1000,
&nbsp;&nbsp;&nbsp;&nbsp;n_features=2,
&nbsp;&nbsp;&nbsp;&nbsp;n_informative=2,
&nbsp;&nbsp;&nbsp;&nbsp;n_redundant=0,
&nbsp;&nbsp;&nbsp;&nbsp;n_clusters_per_class=1,
&nbsp;&nbsp;&nbsp;&nbsp;random_state=4
)
#&nbsp;define&nbsp;the&nbsp;model
gaussian_model&nbsp;=&nbsp;GaussianMixture(n_components=2)
#&nbsp;train&nbsp;the&nbsp;model
gaussian_model.fit(training_data)
#&nbsp;assign&nbsp;each&nbsp;data&nbsp;point&nbsp;to&nbsp;a&nbsp;cluster
gaussian_result&nbsp;=&nbsp;gaussian_model.predict(training_data)
#&nbsp;get&nbsp;all&nbsp;of&nbsp;the&nbsp;unique&nbsp;clusters
gaussian_clusters&nbsp;=&nbsp;unique(gaussian_result)
#&nbsp;plot&nbsp;Gaussian&nbsp;Mixture&nbsp;the&nbsp;clusters
for&nbsp;gaussian_cluster&nbsp;in&nbsp;gaussian_clusters:
&nbsp;&nbsp;&nbsp;&nbsp;#&nbsp;get&nbsp;data&nbsp;points&nbsp;that&nbsp;fall&nbsp;in&nbsp;this&nbsp;cluster
&nbsp;&nbsp;&nbsp;&nbsp;index&nbsp;=&nbsp;where(gaussian_result&nbsp;==&nbsp;gaussian_clusters)
&nbsp;&nbsp;&nbsp;&nbsp;#&nbsp;make&nbsp;the&nbsp;plot
&nbsp;&nbsp;&nbsp;&nbsp;pyplot.scatter(training_data[index,&nbsp;0],&nbsp;training_data[index,&nbsp;1])
#&nbsp;show&nbsp;the&nbsp;Gaussian&nbsp;Mixture&nbsp;plot
pyplot.show()</code></pre><h3 id="birch-algorithm">BIRCH algorithm</h3><p>The Balance Iterative Reducing and Clustering using Hierarchies (BIRCH) algorithm works better on large data sets than the k-means algorithm. </p><p>It breaks the data into little summaries that are clustered instead of the original data points. The summaries hold as much distribution information about the data points as possible.</p><p>This algorithm is commonly used with other clustering algorithm because the other clustering techniques can be used on the summaries generated by BIRCH. </p><p>The main downside of the BIRCH algorithm is that it only works on numeric data values. You can't use this for categorical values unless you do some data transformations.</p><p><strong>Implementation:</strong></p><pre><code class="language-Python">from&nbsp;numpy&nbsp;import&nbsp;unique
from&nbsp;numpy&nbsp;import&nbsp;where
from&nbsp;matplotlib&nbsp;import&nbsp;pyplot
from&nbsp;sklearn.datasets&nbsp;import&nbsp;make_classification
from&nbsp;sklearn.cluster&nbsp;import&nbsp;Birch
#&nbsp;initialize&nbsp;the&nbsp;data&nbsp;set&nbsp;we'll&nbsp;work&nbsp;with
training_data,&nbsp;_&nbsp;=&nbsp;make_classification(
&nbsp;&nbsp;&nbsp;&nbsp;n_samples=1000,
&nbsp;&nbsp;&nbsp;&nbsp;n_features=2,
&nbsp;&nbsp;&nbsp;&nbsp;n_informative=2,
&nbsp;&nbsp;&nbsp;&nbsp;n_redundant=0,
&nbsp;&nbsp;&nbsp;&nbsp;n_clusters_per_class=1,
&nbsp;&nbsp;&nbsp;&nbsp;random_state=4
)
#&nbsp;define&nbsp;the&nbsp;model
birch_model&nbsp;=&nbsp;Birch(threshold=0.03,&nbsp;n_clusters=2)
#&nbsp;train&nbsp;the&nbsp;model
birch_model.fit(training_data)
#&nbsp;assign&nbsp;each&nbsp;data&nbsp;point&nbsp;to&nbsp;a&nbsp;cluster
birch_result&nbsp;=&nbsp;birch_model.predict(training_data)
#&nbsp;get&nbsp;all&nbsp;of&nbsp;the&nbsp;unique&nbsp;clusters
birch_clusters&nbsp;=&nbsp;unique(birch_result)
#&nbsp;plot&nbsp;the&nbsp;BIRCH&nbsp;clusters
for&nbsp;birch_cluster&nbsp;in&nbsp;birch_clusters:
&nbsp;&nbsp;&nbsp;&nbsp;#&nbsp;get&nbsp;data&nbsp;points&nbsp;that&nbsp;fall&nbsp;in&nbsp;this&nbsp;cluster
&nbsp;&nbsp;&nbsp;&nbsp;index&nbsp;=&nbsp;where(birch_result&nbsp;==&nbsp;birch_clusters)
&nbsp;&nbsp;&nbsp;&nbsp;#&nbsp;make&nbsp;the&nbsp;plot
&nbsp;&nbsp;&nbsp;&nbsp;pyplot.scatter(training_data[index,&nbsp;0],&nbsp;training_data[index,&nbsp;1])
#&nbsp;show&nbsp;the&nbsp;BIRCH&nbsp;plot
pyplot.show()
</code></pre><h3 id="affinity-propagation-clustering-algorithm">Affinity Propagation clustering algorithm</h3><p>This clustering algorithm is completely different from the others in the way that it clusters data. </p><p>Each data point communicates with all of the other data points to let each other know how similar they are and that starts to reveal the clusters in the data. You don't have to tell this algorithm how many clusters to expect in the initialization parameters.</p><p>As messages are sent between data points, sets of data called <em>exemplars</em> are found and they represent the clusters. </p><p>An exemplar is found after the data points have passed messages to each other and form a consensus on what data point best represents a cluster. </p><p>When you aren't sure how many clusters to expect, like in a computer vision problem, this is a great algorithm to start with.</p><p><strong>Implementation:</strong></p><pre><code class="language-Python">from&nbsp;numpy&nbsp;import&nbsp;unique
from&nbsp;numpy&nbsp;import&nbsp;where
from&nbsp;matplotlib&nbsp;import&nbsp;pyplot
from&nbsp;sklearn.datasets&nbsp;import&nbsp;make_classification
from&nbsp;sklearn.cluster&nbsp;import&nbsp;AffinityPropagation
#&nbsp;initialize&nbsp;the&nbsp;data&nbsp;set&nbsp;we'll&nbsp;work&nbsp;with
training_data,&nbsp;_&nbsp;=&nbsp;make_classification(
&nbsp;&nbsp;&nbsp;&nbsp;n_samples=1000,
&nbsp;&nbsp;&nbsp;&nbsp;n_features=2,
&nbsp;&nbsp;&nbsp;&nbsp;n_informative=2,
&nbsp;&nbsp;&nbsp;&nbsp;n_redundant=0,
&nbsp;&nbsp;&nbsp;&nbsp;n_clusters_per_class=1,
&nbsp;&nbsp;&nbsp;&nbsp;random_state=4
)
#&nbsp;define&nbsp;the&nbsp;model
model&nbsp;=&nbsp;AffinityPropagation(damping=0.7)
#&nbsp;train&nbsp;the&nbsp;model
model.fit(training_data)
#&nbsp;assign&nbsp;each&nbsp;data&nbsp;point&nbsp;to&nbsp;a&nbsp;cluster
result&nbsp;=&nbsp;model.predict(training_data)
#&nbsp;get&nbsp;all&nbsp;of&nbsp;the&nbsp;unique&nbsp;clusters
clusters&nbsp;=&nbsp;unique(result)
#&nbsp;plot&nbsp;the&nbsp;clusters
for&nbsp;cluster&nbsp;in&nbsp;clusters:
&nbsp;&nbsp;&nbsp;&nbsp;#&nbsp;get&nbsp;data&nbsp;points&nbsp;that&nbsp;fall&nbsp;in&nbsp;this&nbsp;cluster
&nbsp;&nbsp;&nbsp;&nbsp;index&nbsp;=&nbsp;where(result&nbsp;==&nbsp;cluster)
&nbsp;&nbsp;&nbsp;&nbsp;#&nbsp;make&nbsp;the&nbsp;plot
&nbsp;&nbsp;&nbsp;&nbsp;pyplot.scatter(training_data[index,&nbsp;0],&nbsp;training_data[index,&nbsp;1])
#&nbsp;show&nbsp;the&nbsp;plot
pyplot.show()</code></pre><h3 id="mean-shift-clustering-algorithm">Mean-Shift clustering algorithm</h3><p>This is another algorithm that is particularly useful for handling images and computer vision processing. </p><p>Mean-shift is similar to the BIRCH algorithm because it also finds clusters without an initial number of clusters being set. </p><p>This is a hierarchical clustering algorithm, but the downside is that it doesn't scale well when working with large data sets.</p><p>It works by iterating over all of the data points and shifts them towards the mode. The mode in this context is the high density area of data points in a region. </p><p>That's why you might hear this algorithm referred to as the mode-seeking algorithm. It will go through this iterative process with each data point and move them closer to where other data points are until all data points have been assigned to a cluster.</p><p><strong>Implementation:</strong></p><pre><code class="language-Python">from&nbsp;numpy&nbsp;import&nbsp;unique
from&nbsp;numpy&nbsp;import&nbsp;where
from&nbsp;matplotlib&nbsp;import&nbsp;pyplot
from&nbsp;sklearn.datasets&nbsp;import&nbsp;make_classification
from&nbsp;sklearn.cluster&nbsp;import&nbsp;MeanShift
#&nbsp;initialize&nbsp;the&nbsp;data&nbsp;set&nbsp;we'll&nbsp;work&nbsp;with
training_data,&nbsp;_&nbsp;=&nbsp;make_classification(
&nbsp;&nbsp;&nbsp;&nbsp;n_samples=1000,
&nbsp;&nbsp;&nbsp;&nbsp;n_features=2,
&nbsp;&nbsp;&nbsp;&nbsp;n_informative=2,
&nbsp;&nbsp;&nbsp;&nbsp;n_redundant=0,
&nbsp;&nbsp;&nbsp;&nbsp;n_clusters_per_class=1,
&nbsp;&nbsp;&nbsp;&nbsp;random_state=4
)
#&nbsp;define&nbsp;the&nbsp;model
mean_model&nbsp;=&nbsp;MeanShift()
#&nbsp;assign&nbsp;each&nbsp;data&nbsp;point&nbsp;to&nbsp;a&nbsp;cluster
mean_result&nbsp;=&nbsp;mean_model.fit_predict(training_data)
#&nbsp;get&nbsp;all&nbsp;of&nbsp;the&nbsp;unique&nbsp;clusters
mean_clusters&nbsp;=&nbsp;unique(mean_result)
#&nbsp;plot&nbsp;Mean-Shift&nbsp;the&nbsp;clusters
for&nbsp;mean_cluster&nbsp;in&nbsp;mean_clusters:
&nbsp;&nbsp;&nbsp;&nbsp;#&nbsp;get&nbsp;data&nbsp;points&nbsp;that&nbsp;fall&nbsp;in&nbsp;this&nbsp;cluster
&nbsp;&nbsp;&nbsp;&nbsp;index&nbsp;=&nbsp;where(mean_result&nbsp;==&nbsp;mean_cluster)
&nbsp;&nbsp;&nbsp;&nbsp;#&nbsp;make&nbsp;the&nbsp;plot
&nbsp;&nbsp;&nbsp;&nbsp;pyplot.scatter(training_data[index,&nbsp;0],&nbsp;training_data[index,&nbsp;1])
#&nbsp;show&nbsp;the&nbsp;Mean-Shift&nbsp;plot
pyplot.show()</code></pre><h3 id="optics-algorithm">OPTICS algorithm</h3><p>OPTICS stands for Ordering Points to Identify the Clustering Structure. It's a density-based algorithm similar to DBSCAN, but it's better because it can find meaningful clusters in data that varies in density. It does this by ordering the data points so that the closest points are neighbors in the ordering.</p><p>This makes it easier to detect different density clusters. The OPTICS algorithm only processes each data point once, similar to DBSCAN (although it runs slower than DBSCAN). There's also a special distance stored for each data point that indicates a point belongs to a specific cluster.</p><p><strong>Implementation:</strong></p><pre><code class="language-Python">from&nbsp;numpy&nbsp;import&nbsp;unique
from&nbsp;numpy&nbsp;import&nbsp;where
from&nbsp;matplotlib&nbsp;import&nbsp;pyplot
from&nbsp;sklearn.datasets&nbsp;import&nbsp;make_classification
from&nbsp;sklearn.cluster&nbsp;import&nbsp;OPTICS
#&nbsp;initialize&nbsp;the&nbsp;data&nbsp;set&nbsp;we'll&nbsp;work&nbsp;with
training_data,&nbsp;_&nbsp;=&nbsp;make_classification(
&nbsp;&nbsp;&nbsp;&nbsp;n_samples=1000,
&nbsp;&nbsp;&nbsp;&nbsp;n_features=2,
&nbsp;&nbsp;&nbsp;&nbsp;n_informative=2,
&nbsp;&nbsp;&nbsp;&nbsp;n_redundant=0,
&nbsp;&nbsp;&nbsp;&nbsp;n_clusters_per_class=1,
&nbsp;&nbsp;&nbsp;&nbsp;random_state=4
)
#&nbsp;define&nbsp;the&nbsp;model
optics_model&nbsp;=&nbsp;OPTICS(eps=0.75,&nbsp;min_samples=10)
#&nbsp;assign&nbsp;each&nbsp;data&nbsp;point&nbsp;to&nbsp;a&nbsp;cluster
optics_result&nbsp;=&nbsp;optics_model.fit_predict(training_data)
#&nbsp;get&nbsp;all&nbsp;of&nbsp;the&nbsp;unique&nbsp;clusters
optics_clusters&nbsp;=&nbsp;unique(optics_clusters)
#&nbsp;plot&nbsp;OPTICS&nbsp;the&nbsp;clusters
for&nbsp;optics_cluster&nbsp;in&nbsp;optics_clusters:
&nbsp;&nbsp;&nbsp;&nbsp;#&nbsp;get&nbsp;data&nbsp;points&nbsp;that&nbsp;fall&nbsp;in&nbsp;this&nbsp;cluster
&nbsp;&nbsp;&nbsp;&nbsp;index&nbsp;=&nbsp;where(optics_result&nbsp;==&nbsp;optics_clusters)
&nbsp;&nbsp;&nbsp;&nbsp;#&nbsp;make&nbsp;the&nbsp;plot
&nbsp;&nbsp;&nbsp;&nbsp;pyplot.scatter(training_data[index,&nbsp;0],&nbsp;training_data[index,&nbsp;1])
#&nbsp;show&nbsp;the&nbsp;OPTICS&nbsp;plot
pyplot.show()</code></pre><h3 id="agglomerative-hierarchy-clustering-algorithm">Agglomerative Hierarchy clustering algorithm</h3><p>This is the most common type of hierarchical clustering algorithm. It's used to group objects in clusters based on how similar they are to each other. </p><p>This is a form of bottom-up clustering, where each data point is assigned to its own cluster. Then those clusters get joined together.</p><p>At each iteration, similar clusters are merged until all of the data points are part of one big root cluster. </p><p>Agglomerative clustering is best at finding small clusters. The end result looks like a dendrogram so that you can easily visualize the clusters when the algorithm finishes.</p><p><strong>Implementation:</strong></p><pre><code class="language-Python">from&nbsp;numpy&nbsp;import&nbsp;unique
from&nbsp;numpy&nbsp;import&nbsp;where
from&nbsp;matplotlib&nbsp;import&nbsp;pyplot
from&nbsp;sklearn.datasets&nbsp;import&nbsp;make_classification
from&nbsp;sklearn.cluster&nbsp;import&nbsp;AgglomerativeClustering
#&nbsp;initialize&nbsp;the&nbsp;data&nbsp;set&nbsp;we'll&nbsp;work&nbsp;with
training_data,&nbsp;_&nbsp;=&nbsp;make_classification(
&nbsp;&nbsp;&nbsp;&nbsp;n_samples=1000,
&nbsp;&nbsp;&nbsp;&nbsp;n_features=2,
&nbsp;&nbsp;&nbsp;&nbsp;n_informative=2,
&nbsp;&nbsp;&nbsp;&nbsp;n_redundant=0,
&nbsp;&nbsp;&nbsp;&nbsp;n_clusters_per_class=1,
&nbsp;&nbsp;&nbsp;&nbsp;random_state=4
)
#&nbsp;define&nbsp;the&nbsp;model
agglomerative_model&nbsp;=&nbsp;AgglomerativeClustering(n_clusters=2)
#&nbsp;assign&nbsp;each&nbsp;data&nbsp;point&nbsp;to&nbsp;a&nbsp;cluster
agglomerative_result&nbsp;=&nbsp;agglomerative_model.fit_predict(training_data)
#&nbsp;get&nbsp;all&nbsp;of&nbsp;the&nbsp;unique&nbsp;clusters
agglomerative_clusters&nbsp;=&nbsp;unique(agglomerative_result)
#&nbsp;plot&nbsp;the&nbsp;clusters
for&nbsp;agglomerative_cluster&nbsp;in&nbsp;agglomerative_clusters:
&nbsp;&nbsp;&nbsp;&nbsp;#&nbsp;get&nbsp;data&nbsp;points&nbsp;that&nbsp;fall&nbsp;in&nbsp;this&nbsp;cluster
&nbsp;&nbsp;&nbsp;&nbsp;index&nbsp;=&nbsp;where(agglomerative_result&nbsp;==&nbsp;agglomerative_clusters)
&nbsp;&nbsp;&nbsp;&nbsp;#&nbsp;make&nbsp;the&nbsp;plot
&nbsp;&nbsp;&nbsp;&nbsp;pyplot.scatter(training_data[index,&nbsp;0],&nbsp;training_data[index,&nbsp;1])
#&nbsp;show&nbsp;the&nbsp;Agglomerative&nbsp;Hierarchy&nbsp;plot
pyplot.show()</code></pre><h2 id="other-types-of-clustering-algorithms">Other types of clustering algorithms</h2><p>We've covered eight of the top clustering algorithms, but there are plenty more than that available. There are some very specifically tuned clustering algorithms that quickly and precisely handle your data. Here are a few of the others that might be of interest to you.</p><p>There's another hierarchical algorithm that's the opposite of the agglomerative approach. It starts with a top-down clustering strategy. So it will start with one large root cluster and break out the individual clusters from there. </p><p>This is known as the <strong>Divisive Hierarchical</strong> clustering algorithm. There's research that shows this is creates more accurate hierarchies than agglomerative clustering, but it's way more complex.</p><p><strong>Mini-Batch K-means</strong> is similar to K-means, except that it uses small random chunks of data of a fixed size so they can be stored in memory. This helps it run faster than K-means so it converges to a solution in less time. </p><p>The drawback to this algorithm is that the speed boost will cost you some cluster quality.</p><p>The last algorithm we'll briefly cover is <strong>Spectral Clustering</strong>. This algorithm is completely different from the others we've looked at. </p><p>It works by taking advantage of graph theory. This algorithm doesn't make any initial guesses about the clusters that are in the data set. It treats data points like nodes in a graph and clusters are found based on communities of nodes that have connecting edges.</p><h2 id="other-thoughts">Other thoughts</h2><p>Watch out for scaling issues with the clustering algorithms. Your data set could have millions of data points, and since clustering algorithms work by calculating the similarities between all pairs of data points, you might end up with an algorithm that doesn’t scale well.</p><h2 id="conclusion">Conclusion</h2><p>Clustering algorithms are a great way to learn new things from old data. Sometimes you'll be surprised by the resulting clusters you get and it might help you make sense of a problem. </p><p>One of the coolest things about using clustering for unsupervised learning is that you can use the results in a supervised learning problem.</p><p>The clusters could be your new features that you use on a completely different data set! You can use clustering on just about any unsupervised machine learning problem, but make sure that you know how to analyze the results for accuracy.</p>
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
