---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9cb0a8740569d1a4cab5c2.jpg"
tags: [Machine Learning]
description: "From a signalling perspective, the world is a noisy place. In"
author: "Milad E. Fahmy"
title: "Finding Correlations in Non-Linear Data"
created: "2021-08-16T15:41:52+02:00"
modified: "2021-08-16T15:41:52+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-machine-learning tag-python tag-tech tag-data-science tag-programming tag-statistics tag-r ">
<header class="post-full-header">
<h1 class="post-full-title">Finding Correlations in Non-Linear Data</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9cb0a8740569d1a4cab5c2.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9cb0a8740569d1a4cab5c2.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9cb0a8740569d1a4cab5c2.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9cb0a8740569d1a4cab5c2.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9cb0a8740569d1a4cab5c2.jpg" alt="Finding Correlations in Non-Linear Data">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
return sum(x)/len(x)
def covariance(x,y):
calc = []
for i in range(len(x)):
xi = x[i] - mean(x)
yi = y[i] - mean(y)
calc.append(xi * yi)
return sum(calc)/(len(x) - 1)
a = [1,2,3,4,5] ; b = [5,4,3,2,1]
def stDev(x):
variance = 0
for i in x:
variance += (i - mean(x) ** 2) / len(x)
return math.sqrt(variance)
def Pearsons(x,y):
cov = covariance(x,y)
a_centered = [i - mean(a) for i in a]
calc = 0
for i in range(len(x)):
calc += x[i] * y[i]
x_sq = [i ** 2 for i in x]
mag_x = magnitude(x)
mag_y = magnitude(y)
z = math.atanh(r)
SD_z = 1 / math.sqrt(len(x) - 3)
z_upper = z + 1.96 * SD_z
z_lower = z - 1.96 * SD_z
r_upper = math.tanh(z_upper)
doubleCenter &lt;- function(x){
centered &lt;- x
for(i in 1:dim(x)[1]){
for(j in 1:dim(x)[2]){
centered[i,j] &lt;- x[i,j] - mean(x[i,]) - mean(x[,j]) + mean(x)
}
}
return(centered)
}
distanceCovariance &lt;- function(x,y){
N &lt;- length(x)
distX &lt;- as.matrix(dist(x))
distY &lt;- as.matrix(dist(y))
centeredX &lt;- doubleCenter(distX)
centeredY &lt;- doubleCenter(distY)
calc &lt;- sum(centeredX * centeredY)
return(sqrt(calc/(N^2)))
}
distanceVariance &lt;- function(x){
return(distanceCovariance(x,x))
}
distanceCorrelation &lt;- function(x,y){
cov &lt;- distanceCovariance(x,y)
sd &lt;- sqrt(distanceVariance(x)*distanceVariance(y))
return(cov/sd)
}
# Compare with Pearson's r
x &lt;- -10:10
y &lt;- x^2 + rnorm(21,0,10)
cor(x,y) # --&gt; 0.057
bootstrap &lt;- function(x,y,reps,alpha){
estimates &lt;- c()
original &lt;- data.frame(x,y)
N &lt;- dim(original)[1]
for(i in 1:reps){
S &lt;- original[sample(1:N, N, replace = TRUE),]
estimates &lt;- append(estimates, distanceCorrelation(S$x, S$y))
}
u &lt;- alpha/2 ; l &lt;- 1-u
interval &lt;- quantile(estimates, c(l, u))
return(2*(dcor(x,y)) - as.numeric(interval[1:2]))
}
# Use with 1000 reps and threshold alpha = 0.05
x &lt;- -10:10
y &lt;- x^2 + rnorm(21,0,10)
bootstrap(x,y,1000,0.05) # --&gt; 0.237 to 0.546</code></pre><p>If you want to establish statistical significance, there is another resampling trick available, called a ‘permutation test’.</p><p>This is slightly different to the bootstrap method defined above. Here, we keep one vector constant and ‘shuffle’ the other by resampling. This approximates the null hypothesis — that there is no dependency between the variables.</p><p>The ‘shuffled’ variable is then used to calculate the distance correlation between it and the constant variable. This is done many times, and the distribution of outcomes is compared against the actual distance correlation (obtained from the unshuffled data).</p><p>The proportion of ‘shuffled’ outcomes greater than or equal to the ‘real’ outcome is then taken as a p-value, which can be compared to a given significance threshold (e.g., 0.05).</p><p>Check out the code to see how this works:</p><pre><code class="language-R">permutationTest &lt;- function(x,y,reps){
estimates &lt;- c()
observed &lt;- distanceCorrelation(x,y)
N &lt;- length(x)
for(i in 1:reps){
y_i &lt;- sample(y, length(y), replace = T)
estimates &lt;- append(estimates, distanceCorrelation(x, y_i))
}
p_value &lt;- mean(estimates &gt;= observed)
return(p_value)
}
# Use with 1000 reps
x &lt;- -10:10
y &lt;- x^2 + rnorm(21,0,10)
pr &lt;- prop.table(table(x))
H &lt;- sum(pr * log(pr,2))
return(-H)
}
dice1 &lt;- 1:6
dice2 &lt;- c(1,1,1,1,2:6)
entropy(dice1) # --&gt; 2.585
prX &lt;- prop.table(table(x))
prY &lt;- prop.table(table(y))
H &lt;- sum(prX * log(prY,2))
return(-H)
kl &lt;- crossEntropy(x,y) - entropy(x)
return(kl)
}</code></pre><p>One use for KL-divergence in the context of discovering correlations is to calculate the Mutual Information (MI) of two variables.</p><p>Mutual Information can be defined as “the KL-divergence between the joint and marginal distributions of two random variables”. If these are identical, MI will equal zero. If they are at all different, then MI will be a positive number. The more different the joint and marginal distributions are, the higher the MI.</p><p>To understand this better, let’s take a moment to revisit some probability concepts.</p><p>The joint distribution of variables <em>X</em> and <em>Y</em> is simply the probability of them co-occurring. For instance, if you flipped two coins X and Y, their joint distribution would reflect the probability of each observed outcome. Say you flip the coins 100 times, and get the result “heads, heads” 40 times. The joint distribution would reflect this.</p><p>P(X=H, Y=H) = 40/100 = 0.4</p><pre><code class="language-R">jointDist &lt;- function(x,y){
N &lt;- length(x)
u &lt;- unique(append(x,y))
joint &lt;- c()
for(i in u){
for(j in u){
f &lt;- x[paste0(x,y) == paste0(i,j)]
joint &lt;- append(joint, length(f)/N)
}
}
return(joint)
}</code></pre><p>The marginal distribution is the probability distribution of one variable in the absence of any information about the other. The product of two marginal distributions gives the probability of two events’ co-occurrence under the assumption of independence. </p><p>For the coin flipping example, say both coins produce 50 heads and 50 tails. Their marginal distributions would reflect this.</p><p>P(X=H) = 50/100 = 0.5 ; P(Y=H) = 50/100 = 0.5</p><p>P(X=H) × P(Y=H) = 0.5 × 0.5 = 0.25</p><pre><code class="language-R">marginalProduct &lt;- function(x,y){
N &lt;- length(x)
u &lt;- unique(append(x,y))
marginal &lt;- c()
for(i in u){
for(j in u){
fX &lt;- length(x[x == i]) / N
fY &lt;- length(y[y == j]) / N
marginal &lt;- append(marginal, fX * fY)
}
}
return(marginal)
joint &lt;- jointDist(x,y)
marginal &lt;- marginalProduct(x,y)
Hjm &lt;- - sum(joint[marginal &gt; 0] * log(marginal[marginal &gt; 0],2))
Hj &lt;- - sum(joint[joint &gt; 0] * log(joint[joint &gt; 0],2))
return(Hjm - Hj)
N &lt;- length(x)
maxBins &lt;- ceiling(N ** 0.6)
MI &lt;- c()
for(i in 2:maxBins) {
for (j in 2:maxBins){
if(i * j &gt; maxBins){
next
}
Xbins &lt;- i; Ybins &lt;- j
binnedX &lt;-cut(x, breaks=Xbins, labels = 1:Xbins)
binnedY &lt;-cut(y, breaks=Ybins, labels = 1:Ybins)
MI_estimate &lt;- mutualInfo(binnedX,binnedY)
MI_normalized &lt;- MI_estimate / log(min(Xbins,Ybins),2)
MI &lt;- append(MI, MI_normalized)
}
}
return(max(MI))
}
x &lt;- runif(100,-10,10)
y &lt;- x**2 + rnorm(100,0,10)
MIC(x,y) # --&gt; 0.751</code></pre><p>The above code is a simplification of the method outlined in the original paper. A more faithful implementation of the algorithm is available in the <a href="https://cran.r-project.org/web/packages/minerva/index.html" rel="noopener">R package <em>minerva</em></a>. In Python, you can use the <a href="https://minepy.readthedocs.io/en/latest/" rel="noopener"><em>minepy</em> module</a>.</p><p>MIC is capable of picking out all kinds of linear and non-linear relationships, and has found use in a range of different applications. It is bound between 0 and 1, with higher values indicating greater dependence.</p><h4 id="confidence-intervals-1">Confidence Intervals?</h4><p>To establish confidence bounds on an estimate of MIC, you can simply use a bootstrapping technique like the one we looked at earlier.</p><p>To generalize the bootstrap function, we can take advantage of R’s functional programming capabilities, by passing the technique we want to use as an argument.</p><pre><code class="language-R">bootstrap &lt;- function(x,y,func,reps,alpha){
estimates &lt;- c()
original &lt;- data.frame(x,y)
N &lt;- dim(original)[1]
for(i in 1:reps){
S &lt;- original[sample(1:N, N, replace = TRUE),]
estimates &lt;- append(estimates, func(S$x, S$y))
}
l &lt;- alpha/2 ; u &lt;- 1 - l
interval &lt;- quantile(estimates, c(u, l))
return(2*(func(x,y)) - as.numeric(interval[1:2]))
}
# Noise
x0 &lt;- rnorm(100,0,1)
y0 &lt;- rnorm(100,0,1)
plot(y0~x0, pch = 18)
cor(x0,y0)
distanceCorrelation(x0,y0)
x1 &lt;- -20:20
y1 &lt;- x1 + rnorm(41,0,4)
plot(y1~x1, pch =18)
cor(x1,y1)
distanceCorrelation(x1,y1)
x2 &lt;- -20:20
y2 &lt;- x2**2 + rnorm(41,0,40)
plot(y2~x2, pch = 18)
cor(x2,y2)
distanceCorrelation(x2,y2)
x3 &lt;- -20:20
y3 &lt;- cos(x3/4) + rnorm(41,0,0.2)
plot(y3~x3, type='p', pch=18)
cor(x3,y3)
distanceCorrelation(x3,y3)
n &lt;- 50
theta &lt;- runif (n, 0, 2*pi)
x4 &lt;- append(cos(theta), cos(theta))
y4 &lt;- append(sin(theta), -sin(theta))
plot(x4,y4, pch=18)
cor(x4,y4)
distanceCorrelation(x4,y4)
MIC(x4,y4)</code></pre><ul><li>Pearson’s <em>r</em> &lt; 0.001</li><li>Distance Correlation = 0.234</li><li>MIC = 0.218</li></ul><p>Thanks for reading!</p>
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
