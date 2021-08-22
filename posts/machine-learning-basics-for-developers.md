---
card: "/images/default.jpg"
tags: [Machine Learning]
description: "In the current tech landscape, developers are expected to hav"
author: "Milad E. Fahmy"
title: "Machine Learning Basics for Developers"
created: "2021-08-15T23:31:59+02:00"
modified: "2021-08-15T23:31:59+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-machine-learning tag-data-science tag-artificial-intelligence tag-deep-learning tag-algorithms ">
<header class="post-full-header">
<h1 class="post-full-title">Machine Learning Basics for Developers</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/08/Machine-Learning-Basics-For-Developers.png 300w,
/news/content/images/size/w600/2020/08/Machine-Learning-Basics-For-Developers.png 600w,
/news/content/images/size/w1000/2020/08/Machine-Learning-Basics-For-Developers.png 1000w,
/news/content/images/size/w2000/2020/08/Machine-Learning-Basics-For-Developers.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/08/Machine-Learning-Basics-For-Developers.png" alt="Machine Learning Basics for Developers">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
theta_n = theta_n - alpha * (1 / m) * sum(y_n - y_i) * X_n</code></pre><p>where <code>y_n</code> is the predicted value based on the algorithm's calculations and <code>y_i</code> is the value we have from our data or the expected value.</p><p>We want the margin of error between the predicted value and the real value to be as small as possible. That's the reason we're trying to optimize theta values. This is so we can minimize the cost function for predicting output values. </p><p>Here's the cost function equation:</p><p><code>J(theta_n) = (1 / 2m) * sum(y_n - y_i)^2</code></p><p>That's all of the math we need to build and train the model, so let's get started.</p><h3 id="pre-processing-data">Pre-processing data</h3><p>The first thing you want to do is check and see what our data looks like. I've done some modifications to that wine quality data set so that it will work with our algorithm. </p><p>You can download it here: <a href="https://github.com/flippedcoder/probable-waddle/blob/master/wine-quality-data.csv">https://github.com/flippedcoder/probable-waddle/blob/master/wine-quality-data.csv</a>.</p><p>All I've done is take the original file, removed the unneeded features, moved the density to the end, and cleaned up the format.</p><p>Now we can get to the real pre-processing part! Make a new file called <em>multivariate-wine.py</em>. This file should be in the same folder as the data set. </p><p>The first thing we'll do in this file is import some packages and see what the data set looks like.</p><pre><code class="language-Python">import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
df = pd.read_csv('./wine-quality-data.csv', header=None)
7.e
6.3
9.5
97 .ø
7.2
7.2
8.
1
17ø.ø
132.ø
186.ø
186.ø
3.øø
3
30
3.26
3.
19
3.
19
9
6
6
6
6
6
1. øele
ø. 994€
ø. 9951 "></figure><p>The data looks good to go for the multivariate regression algorithm, so we can start building the model. I do encourage you to try and start with the raw white wine data set to see if you can find a way to get it to the correct format.</p><h3 id="building-the-model">Building the model</h3><p>We need to add a bias term to the data because, as you saw in the explanation of the algorithm, we need it because it's the <code>theta_0</code> term.</p><p><code>df = pd.concat([pd.Series(1, index=df.index, name='00'), df], axis=1)</code></p><p>Since the data is ready, we can define the independent and dependent variables for the algorithm.</p><pre><code class="language-Python">X = df.drop(columns=5)
y = df.iloc[:, 6]</code></pre><p>Now let's normalize the data by dividing each column by the max value in that column. </p><p>You don't really have to do this step, but it will help speed up the training time for the algorithm. It also helps to prevent one feature from being more dominate than other features.</p><pre><code class="language-Python">for i in range(1, len(X.columns)):
return theta * X</code></pre><p>Next we'll define the cost model which will give us the error margin between the real and predicted values.</p><pre><code class="language-Python">def calculateCost(X, y, theta):
y1 = hypothesis(theta, X)
y1 = np.sum(y1, axis=1)
return (1 / 2 * m) * sum(np.sqrt((y1 - y) ** 2))</code></pre><p>The last function we need before our model is ready to run is a function to calculate gradient descent values.</p><pre><code class="language-Python">def gradientDescent(X, y, theta, alpha, i):
J = [] # cost function for each iteration
k = 0
while k &lt; i:
y1 = hypothesis(theta, X)
y1 = np.sum(y1, axis=1)
for c in range(1, len(X.columns)):
theta[c] = theta[c] - alpha * (1 / m) * (sum((y1 - y) * X.iloc[:, c]))
j = calculateCost(X, y, theta)
J.append(j)
k += 1
return J, j, theta</code></pre><p>With these three functions in place and our data clean, we can finally get to training the model.</p><h3 id="training-the-model">Training the model</h3><p>The training part is the fun part and also the easiest. If you've set your algorithm up correctly, then all you'll have to do is take the optimized parameters it gives you and make predictions. </p><p>We're returning a list of costs at each iteration, the final cost, and the optimized theta values from the gradient descent function. So we'll get the optimized theta values and use them for testing.</p><p><code>J, j, theta = gradientDescent(X, y, theta, 0.1, 10000)</code></p><p>After all of the work of setting up the functions and data correctly, this single line of code trains the model and gives us the theta values we need to start predicting values and testing the accuracy of the model.</p><h3 id="testing-the-model">Testing the model</h3><p>Now we can test the model by making a prediction using the data.</p><pre><code class="language-Python">y_hat = hypothesis(theta, X)
y_hat = np.sum(y_hat, axis=1)</code></pre><p>After you’ve checked a few values, you'll know if your model is accurate enough or if you need to do more tuning on the theta values. </p><p>If you feel comfortable with your testing results, you can go ahead and start using this model in your projects.</p><h3 id="using-the-model">Using the model</h3><p>The optimized theta values are really all you need to start using the model. You'll continue to use the same equations, even in production, but with the best theta values to give you the most accurate predictions. </p><p>You can even continue training the model and try and find better theta values.</p><h2 id="final-thoughts">Final thoughts</h2><p>Machine learning has a lot of layers to it, but none of them are too complex. They just start to stack which makes it seem more difficult than it is. </p><p>If you're willing to spend some time reading about machine learning libraries and tools, it's really easy to get started. You don't need to know any of the advanced math and statistics to learn the concepts or even to solve real world problems.</p><p>The tools are more advanced than they used to be so you can be a machine learning engineer without understanding most of the math behind it. </p><p>The main thing you need to understand is how to handle your data. That's the part no one likes to talk about. The algorithms are fun and exciting, but there may be times you need to write SQL procedures to get the raw data you need before you even start processing it.</p><p>There are so many applications for machine learning from video games to medicine to manufacturing automation. </p><p>Just take some time and make a small model if you're interested in machine learning. As you start to get more comfortable, add on to that model and keep learning more.</p>
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
