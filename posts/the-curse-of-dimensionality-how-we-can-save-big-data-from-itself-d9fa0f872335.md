---
card: "https://cdn-media-1.freecodecamp.org/images/1*i-RTdVP-I_JIod0o2xnarg.png"
tags: [Machine Learning]
description: "How do machines ‘see’? Or, in general, how can computers redu"
author: "Milad E. Fahmy"
title: "Escaping the Curse of Dimensionality"
created: "2021-08-16T11:49:01+02:00"
modified: "2021-08-16T11:49:01+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-machine-learning tag-data-science tag-technology tag-tech tag-startup ">
<header class="post-full-header">
<h1 class="post-full-title">Escaping the Curse of Dimensionality</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*i-RTdVP-I_JIod0o2xnarg.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*i-RTdVP-I_JIod0o2xnarg.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*i-RTdVP-I_JIod0o2xnarg.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*i-RTdVP-I_JIod0o2xnarg.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*i-RTdVP-I_JIod0o2xnarg.png" alt="Escaping the Curse of Dimensionality">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
C &lt;- diag(n) - (1/n) * matrix(rep(1, n^2), nrow = n)</code></pre><p>We then use R’s support for matrix multiplication <code>%*%</code> to apply the centering matrix to our original data to form a new matrix, <strong>B</strong>.</p><pre><code class="language-R">B &lt;- -(1/2) * C %*% M %*% C</code></pre><p>Nice! Now we can begin building our 2-D projection matrix. To do this, we define two more matrices using the <strong>eigenvectors</strong><em> </em>associated with the two largest <strong>eigenvalues</strong><em> </em>of matrix <strong>B</strong>.</p><p>Like so:</p><pre><code class="language-R">E &lt;- eigen(B)$vectors[,1:2]
L &lt;- diag(2) * eigen(B)$values[1:2]</code></pre><p>Let’s calculate our 2-D output matrix <strong>X</strong>, and plot the data according to the new co-ordinates.</p><pre><code class="language-R">X &lt;- E %*% L^(1/2)
plot(-X, pch=4)
head(data)
dim(data)</code></pre><p>Here we have 32 observations of different cars across 11 dimensions. They include features and measurements such as mpg, cylinders, horsepower….</p><p>But how many of those 11 dimensions do we actually need? Are some of them correlated?</p><p>Let’s calculate the correlation between the number of cylinders and horsepower. Without any prior knowledge, what might we expect to find?</p><pre><code class="language-R">cor(mtcars$cyl, mtcars$hp)</code></pre><p>That’s an interesting result . At +0.83, we find the <a href="http://www.investopedia.com/markets/" rel="noopener">correlation coefficient</a> is pretty high. This suggests that number of cylinders and horsepower are both describing the same underlying feature. Are more of our dimensions doing something similar?</p><p>Let’s correlate all pairs of our dimensions and build a <strong>correlation matrix</strong>. Because life’s too short.</p><pre><code class="language-R">cor(data)</code></pre><p>Each cell contains the correlation coefficient between the dimensions at each row and column. The diagonal always equals 1.</p><p>Correlation coefficients near +1 show strong positive correlation. Coefficients near -1 show strong negative correlation. We can see some values close to -1 and +1 in our correlation matrix. This shows we have some correlated dimensions in our data set.</p><p>This is cool, but we still have the same number of dimensions we started with. Let’s throw out a few!</p><p>To do this, we can get out the linear algebra again. One of the strong points of the R language is that it is good at linear algebra, and we’re gonna make use of that in our code. Our first step is to take our correlation matrix and find its eigenvalues.</p><pre><code class="language-R">e &lt;- eigen(cor(data))</code></pre><p>Let’s inspect the eigenvalues:</p><pre><code class="language-R">e$valuesbarplot(e$values/sum(e$values),
print(cumulative)
i &lt;- which(cumulative &gt;= 0.9)[1]
print(i)</code></pre><p>We calculate the cumulative sum of our eigenvalues’ relative proportion of the total variance. We see that the eigenvectors associated with the 4 largest eigenvalues can describe 92.3% of the original variation in our data.</p><p>This is useful! We can retain &gt;90% of the original structure using only 4 dimensions. Let’s project the original data set onto a 4-D space. To do this, we need to create a matrix of weights, which we’ll ca<strong>l</strong>l W.</p><pre><code class="language-R">W &lt;- e$vectors[1:ncol(data),1:i]</code></pre><p><strong>W </strong>is an 11 x 4 matrix. Remember, 11 is the number of dimensions in our original data, and 4 is the number we want to have for our transformed data. Each column in <strong>W</strong> is given by the eigenvectors corresponding to the four largest eigenvalues we saw earlier.</p><p>To get our transformed data, we multiply the original data set by the weights matrix <strong>W. </strong>In R, we perform matrix multiplication with the %*% operator.</p><pre><code class="language-R">tD &lt;- data %*% W
languages &lt;- data.frame(
HTML = c(22,20,15, 5, 5, 5, 0, 2, 0),
JavaScript = c(20,25,25,20,20,15, 5, 5, 0),
Java = c(15, 5, 0,15,30,30,10,10,15),
Python = c( 5, 0, 2, 5,10, 5,40,35,30),
job = c("Web","Web","Web","App","App","App","Data","Data","Data")
)
View(languages)</code></pre><p>We have a fictional data set describing nine developers in terms of the number of hours they spend working in each of four languages:</p><ul><li>HTML</li><li>JavaScript</li><li>Java</li><li>Python</li></ul><p>Each developer is classed in one of three job roles:</p><ul><li>web developer</li><li>app developer</li><li>and data scientist</li></ul><pre><code class="language-R">cor(select(languages, -job))</code></pre><p>We use the <code>select()</code> function from the <code>dplyr</code> package to drop the class labels from the data set. This allows us to inspect the correlations between the different languages.</p><p>Unsurprisingly, we see some patterns. There is a strong, positive correlation between HTML and JavaScript. This indicates developers who use one of these languages have a tendency to also use the other.</p><p>We suspect that there is some lower-dimensional structure beneath this 4-D data set. Remember, four languages = four dimensions.</p><p>Let’s use LDA to project our data into a lower-dimensional space that best separates the three classes of job roles.</p><p>First, we need to build <strong>within-class</strong> scatter matrices for each class. Let’s use <code>dplyr</code>’s <code>filter()</code> and <code>select()</code> methods to break down our data by job role.</p><pre><code class="language-R">Web &lt;- as.data.frame(
scale(filter(languages, job == "Web") %&gt;%
select(., -job),T))
App &lt;- as.data.frame(
scale(filter(languages, job == "App") %&gt;%
select(., -job),T))
Data &lt;- as.data.frame(
scale(filter(languages, job == "Data") %&gt;%
select(., -job),T))</code></pre><p>So now we have three new data sets, one for each job role. For each of these, we can find a <a href="https://en.wikipedia.org/wiki/Covariance_matrix" rel="noopener">covariance matrix</a>. This is closely related to the correlation matrix. It also describes the trends between how languages are used together.</p><p>We find the within-class<em> </em>scatter matrix by summing the each of the three covariance matrices. This gives us a matrix describing the scatter within each class.</p><pre><code class="language-R">within &lt;- cov(Web) + cov(App) + cov(Data)</code></pre><p>Now we want to find the between-class scatter matrix which describes the scatter between the classes. To do this, we must first find the center of each class, by calculating the average features of each. This lets us form a <code>data.frame</code> where each column describes the average developer for each class.</p><pre><code class="language-R">means &lt;- t(data.frame(
mean_Web &lt;- sapply(Web, mean),
mean_App &lt;- sapply(App, mean),
barplot(e$values/sum(e$values),
main='Variance explained')
W &lt;- e$vectors[,1:2]</code></pre><p>By plotting the eigenvalues, we can see that the first two eigenvectors will explain more than 95% of the variation in the data.</p><p>Let’s transform the original data set and plot the data in its new, lower-dimensional space.</p><pre><code class="language-R">LDA &lt;- scale(select(languages, -job), T) %*% W
plot(LDA, pch="",
main='Linear Discriminant Analysis')
text(LDA[,1],LDA[,2],cex=0.75,languages$job,
for(i in 1:1000){
theta &lt;- 0.01 * i
x &lt;- append(x,(a+b*theta)*(cos(theta)+runif(1,-1,1))
y &lt;- append(y,(a+b*theta)*(sin(theta)+runif(1,-1,1))
}
color &lt;- rainbow(1200)[1:1000]
spiral &lt;- data.frame(x,y,color)
plot(data.frame(
distance &lt;- as.matrix(dist(spiral[,1:2]))
A &lt;- matrix(0,ncol=ncol(distance),nrow=nrow(distance))
for(i in 1:nrow(A)){
neighbours &lt;- as.integer(
names(sort(distance[i,])[2:n+1]))
A[i,neighbours] &lt;- 1
}</code></pre><p>Now we have our <em>n</em>-nearest neighbors graph, we can start working with the data in a non-linear way. For example, we can begin to approximate the distances between points on the spiral by finding their <strong>geodesic</strong> distance — calculating the length of the shortest path between them.</p><p><a href="https://www.cs.usfca.edu/~galles/visualization/Dijkstra.html" rel="noopener">Dijkstra’s algorithm</a> is a famous algorithm which can be used to find the shortest path between any two points in a connected graph. We could implement our own version here but to remain on-topic, I will use the <code>distances()</code> function from <a href="http://igraph.org/" rel="noopener">R’s igraph library</a>.</p><pre><code class="language-R">install.packages('igraph'); require(igraph)
graph &lt;- graph_from_adjacency_matrix(A)
geo &lt;- distances(graph, algorithm = 'dijkstra')</code></pre><p>This gives us a distance matrix. Each element represents the shortest number of edges or links required to get from one point to another.</p><p>Here’s an idea… why not use MDS to find some co-ordinates for the points represented in this distance matrix? It worked earlier for the cities data.</p><p>We could wrap our earlier MDS example in a function and apply our own, homemade version. However, you’ll be pleased to know that R provides an in-built MDS function we can use as well. Let’s scale to one dimension.</p><pre><code class="language-R">md &lt;- data.frame(
'scaled'=cmdscale(geo,1),
'color'=spiral$color)
plot(data.frame(
x &lt;- y &lt;- c();
a &lt;- b &lt;- 1
for(i in 1:1000){
theta &lt;- 0.02 * i
x &lt;- append(x,(a+b*theta)*(cos(theta)+runif(1,-1,1))
y &lt;- append(y,(a+b*theta)*(sin(theta)+runif(1,-1,1))
}
color &lt;- rainbow(1200)[1:1000]
spiral &lt;- data.frame(x,y,color)
distance &lt;- as.matrix(dist(spiral[,1:2]))
A &lt;- matrix(0,ncol=ncol(distance),
nrow=nrow(distance))
for(i in 1:nrow(A)){
neighbours &lt;- as.integer(
names(sort(distance[i,])[2:n+1]))
A[i,neighbours] &lt;- 1
}
for(j in 1:nrow(A)){
for(k in 1:ncol(A)){
if(A[j,k] == 1){
out[k,j] &lt;- 1
}
}
}</code></pre><p>So far, so much like Isomap. We’ve added an extra few lines of logic to force the matrix to be symmetric. This will allow us to use ideas from <a href="http://web.cs.ucdavis.edu/~bai/ECS231/ho_clustering.pdf" rel="noopener">spectral graph theory</a> in the next step. We will define the <a href="http://mathworld.wolfram.com/LaplacianMatrix.html" rel="noopener">Laplacian matrix</a> of our graph.</p><p>We do this by building the degree matrix <strong>D</strong>.</p><pre><code class="language-R">D &lt;- diag(nrow(A))
for(i in 1:nrow(D)){
D[i,i] = sum(A[,i])
}</code></pre><p>This is a matrix the same size as <strong>A</strong>, where every element is equal to zero — except those on the diagonal, which equal the sum of the corresponding column of matrix <strong>A</strong>.</p><p>Next, we form the Laplacian matrix <strong>L</strong> with the simple subtraction:</p><pre><code class="language-R">L = D - A</code></pre><p>The Laplacian matrix is another matrix representation of our graph particularly suited to linear algebra. It allows us to calculate a whole range of interesting properties.</p><p>To find our 1-D embedding of the original data, we need to find a vector <em>x</em> and eigenvalue λ.</p><p>This will solve the <a href="https://en.wikipedia.org/wiki/Eigendecomposition_of_a_matrix#Generalized_eigenvalue_problem" rel="noopener">generalized eigenvalue problem</a>:</p><p><code><strong>L</strong><em>x</em> = λ<strong>D</strong><em>x</em></code></p><p>Thankfully, you can put away the pencil and paper, because R provides a package to help us do this.</p><pre><code class="language-R">install.packages('geigen'); require(geigen)
eig &lt;- geigen(L,D)
eig$values[1:10]</code></pre><p>We see that the <code>geigen()</code> function has returned the eigenvalue solutions from smallest to largest. Note how the first value is practically zero.</p><p>This is one of the properties of the Laplacian matrix — its number of zero eigenvalues tell us how many connected components we have in the graph. Had we used a lower value for <em>n</em>, we might have built a fragmented graph in say, three separate, disconnected parts — in which case, we’d have found three zero eigenvalues.</p><p>To find our low-dimensional embedding, we can take the eigenvectors associated with the lowest non-zero eigenvalues. Since we are projecting from 2-D into 1-D, we will only need one such eigenvector.</p><pre><code class="language-R">embedding &lt;- eig$vectors[,2]
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
