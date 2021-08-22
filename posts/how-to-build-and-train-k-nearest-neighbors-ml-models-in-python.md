---
card: "/images/default.jpg"
tags: [Machine Learning]
description: "One of machine learning s most popular applications is in sol"
author: "Milad E. Fahmy"
title: "How to Build and Train K-Nearest Neighbors and K-Means Clustering ML Models in Python"
created: "2021-08-16T15:36:13+02:00"
modified: "2021-08-16T15:36:13+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-machine-learning tag-python ">
<header class="post-full-header">
<h1 class="post-full-title">How to Build and Train K-Nearest Neighbors and K-Means Clustering ML Models in Python</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/07/classificaton.png 300w,
/news/content/images/size/w600/2020/07/classificaton.png 600w,
/news/content/images/size/w1000/2020/07/classificaton.png 1000w,
/news/content/images/size/w2000/2020/07/classificaton.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/07/classificaton.png" alt="How to Build and Train K-Nearest Neighbors and K-Means Clustering ML Models in Python">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>One of <a href="https://gumroad.com/l/pGjwd">machine learning's most popular applications</a> is in solving classification problems.</p><p>Classification problems are situations where you have a data set, and you want to classify observations from that data set into a specific category. </p><p>A famous example is a spam filter for email providers. Gmail uses supervised machine learning techniques to automatically place emails in your spam folder based on their content, subject line, and other features.</p><p>Two machine learning models perform much of the heavy lifting when it comes to classification problems:</p><ul><li>K-nearest neighbors</li><li>K-means clustering</li></ul><p>This tutorial will teach you how to code K-nearest neighbors and K-means clustering algorithms in Python.</p><h1 id="k-nearest-neighbors-models">K-Nearest Neighbors Models</h1><p>The <a href="https://nickmccullum.com/python-machine-learning/k-nearest-neighbors-python/">K-nearest neighbors algorithm</a> is one of the world’s most popular machine learning models for solving classification problems.</p><p>A common exercise for students exploring machine learning is to apply the K nearest neighbors algorithm to a data set where the categories are not known. A real-life example of this would be if you needed to make predictions using machine learning on a data set of classified government information.</p><p>In this tutorial, you will learn to write your first K nearest neighbors machine learning algorithm in Python. We will be working with an anonymous data set similar to the situation described above.</p><h2 id="the-data-set-you-will-need-in-this-tutorial"><strong>The Data Set You Will Need in This Tutorial</strong></h2><p>The first thing you need to do is download the data set we will be using in this tutorial. I have uploaded the file to <a href="https://nickmccullum.com/">my website</a>. You can access it by clicking <a href="https://nickmccullum.com/files/k-nearest-neighbors/classified_data.csv">here</a>.</p><p>Now that you have downloaded the data set, you will want to move the file to the directory that you’ll be working in. After that, open a <a href="https://nickmccullum.com/python-course/jupyter-notebook-basics/">Jupyter Notebook</a> and we can get started writing Python code!</p><h2 id="the-libraries-you-will-need-in-this-tutorial"><strong>The Libraries You Will Need in This Tutorial</strong></h2><p>To write a K nearest neighbors algorithm, we will take advantage of many open-source Python libraries including <a href="https://nickmccullum.com/advanced-python/numpy/">NumPy</a>, <a href="https://nickmccullum.com/advanced-python/pandas-dataframes/">pandas</a>, and <a href="https://nickmccullum.com/python-machine-learning/introduction-scikit-learn/">scikit-learn</a>.</p><p>Begin your Python script by writing the following import statements:</p><pre><code class="language-py">
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
%matplotlib inline
</code></pre><h2 id="importing-the-data-set-into-our-python-script"><strong>Importing the Data Set Into Our Python Script</strong></h2><p>Our next step is to import the <code>classified_data.csv</code> file into our Python script. The pandas library makes it easy to<a href="https://nickmccullum.com/advanced-python/pandas-data-input-output/"> import data into a pandas DataFrame</a>.</p><p>Since the data set is stored in a <code>csv</code> file, we will be using the <code>read_csv</code> method to do this:</p><pre><code class="language-py">
raw_data = pd.read_csv('classified_data.csv')
raw_data = pd.read_csv('classified_data.csv', index_col = 0)
</code></pre><p>Next, let’s take a look at the actual features that are contained in this data set. You can print a list of the data set’s column names with the following statement:</p><pre><code class="language-py">
print(raw_data.columns)
</code></pre><p>This returns:</p><pre><code class="language-py">
Index(['WTT', 'PTI', 'EQW', 'SBI', 'LQE', 'QWG', 'FDJ', 'PJF', 'HQE', 'NXJ',
'TARGET CLASS'],
dtype='object')
</code></pre><p>Since this is a classified data set, we have no idea what any of these columns means. For now, it is sufficient to recognize that every column is numerical in nature and thus well-suited for modelling with machine learning techniques.</p><h2 id="standardizing-the-data-set"><strong>Standardizing the Data Set</strong></h2><p>Since the K nearest neighbors algorithm makes predictions about a data point by using the observations that are closest to it, the scale of the features within a data set matters a lot.</p><p>Because of this, machine learning practitioners typically <code>standardize</code> the data set, which means adjusting every <code>x</code> value so that they are roughly on the same scale.</p><p>Fortunately, <code>scikit-learn</code> includes some excellent functionality to do this with very little headache.</p><p>To start, we will need to import the <code>StandardScaler</code> class from <code>scikit-learn</code>. Add the following command to your Python script to do this:</p><pre><code class="language-py">
from sklearn.preprocessing import StandardScaler
</code></pre><p>This function behaves a lot like the <code>LinearRegression</code> and <code>LogisticRegression</code> classes that we used earlier in this course. We will want to create an instance of this class and then fit the instance of that class on our data set.</p><p>First, let’s create an instance of the <code>StandardScaler</code> class named <code>scaler</code> with the following statement:</p><pre><code>
scaler = StandardScaler()
</code></pre><p>We can now train this instance on our data set using the <code>fit</code> method:</p><pre><code class="language-py">
scaler.fit(raw_data.drop('TARGET CLASS', axis=1))
</code></pre><p>Now we can use the <code>transform</code> method to standardize all of the features in the data set so they are roughly the same scale. We’ll assign these scaled features to the variable named <code>scaled_features</code>:</p><pre><code class="language-py">
scaled_features = scaler.transform(raw_data.drop('TARGET CLASS', axis=1))
</code></pre><p>This actually creates a <a href="https://nickmccullum.com/advanced-python/numpy-arrays/">NumPy array</a> of all the features in the data set, and we want it to be a <a href="https://nickmccullum.com/advanced-python/pandas-dataframes/">pandas DataFrame</a> instead.</p><p>Fortunately, this is an easy fix. We’ll simply wrap the <code>scaled_features</code> variable in a <code>pd.DataFrame</code> method and assign this DataFrame to a new variable called <code>scaled_data</code> with an appropriate argument to specify the column names:</p><pre><code class="language-py">
scaled_data = pd.DataFrame(scaled_features, columns = raw_data.drop('TARGET CLASS', axis=1).columns)
</code></pre><p>Now that we have imported our data set and standardized its features, we are ready to split the data set into training data and test data.</p><h2 id="splitting-the-data-set-into-training-data-and-test-data"><strong>Splitting the Data Set Into Training Data and Test Data</strong></h2><p>We will use the <code>train_test_split</code> function from <code>scikit-learn</code> combined with list unpacking to create training data and test data from our classified data set.</p><p>First, you’ll need to import <code>train_test_split</code> from the <code>model_validation</code> module of <code>scikit-learn</code> with the following statement:</p><pre><code class="language-py">
from sklearn.model_selection import train_test_split
</code></pre><p>Next, we will need to specify the <code>x</code> and <code>y</code> values that will be passed into this <code>train_test_split</code> function.</p><p>The <code>x</code> values will be the <code>scaled_data</code> DataFrame that we created previously. The <code>y</code> values will be the <code>TARGET CLASS</code> column of our original <code>raw_data</code> DataFrame.</p><p>You can create these variables with the following statements:</p><pre><code class="language-py">
x = scaled_data
y = raw_data['TARGET CLASS']
</code></pre><p>Next, you’ll need to run the <code>train_test_split</code> function using these two arguments and a reasonable <code>test_size</code>. We will use a <code>test_size</code> of 30%, which gives the following parameters for the function:</p><pre><code class="language-py">
x_training_data, x_test_data, y_training_data, y_test_data = train_test_split(x, y, test_size = 0.3)
</code></pre><p>Now that our data set has been split into training data and test data, we’re ready to start training our model!</p><h2 id="training-a-k-nearest-neighbors-model"><strong>Training a K Nearest Neighbors Model</strong></h2><p>Let’s start by importing the <code>KNeighborsClassifier</code> from <code>scikit-learn</code>:</p><pre><code class="language-py">
from sklearn.neighbors import KNeighborsClassifier
</code></pre><p>Next, let’s create an instance of the <code>KNeighborsClassifier</code> class and assign it to a variable named <code>model</code></p><p>This class requires a parameter named <code>n_neighbors</code>, which is equal to the <code>K</code> value of the K nearest neighbors algorithm that you’re building. To start, let’s specify <code>n_neighbors = 1</code>:</p><pre><code class="language-py">
model = KNeighborsClassifier(n_neighbors = 1)
</code></pre><p>Now we can train our K nearest neighbors model using the <code>fit</code> method and our <code>x_training_data</code> and <code>y_training_data</code> variables:</p><pre><code class="language-py">
model.fit(x_training_data, y_training_data)
</code></pre><p>Now let’s make some predictions with our newly-trained K nearest neighbors algorithm!</p><h2 id="making-predictions-with-our-k-nearest-neighbors-algorithm"><strong>Making Predictions With Our K Nearest Neighbors Algorithm</strong></h2><p>We can make predictions with our K nearest neighbors algorithm in the same way that we did with our <a href="https://nickmccullum.com/python-machine-learning/linear-regression-python/">linear regression</a> and <a href="https://nickmccullum.com/python-machine-learning/logistic-regression-python/">logistic regression</a> models earlier in this course: by using the <code>predict</code> method and passing in our <code>x_test_data</code> variable.</p><p>More specifically, here’s how you can make predictions and assign them to a variable called <code>predictions</code>:</p><pre><code class="language-py">
predictions = model.predict(x_test_data)
</code></pre><p>Let’s explore how accurate our <code>predictions</code> are in the next section of this tutorial.</p><h2 id="measuring-the-accuracy-of-our-model"><strong>Measuring the Accuracy of Our Model</strong></h2><p>We saw in our logistic regression tutorial that <code>scikit-learn</code> comes with built-in functions that make it easy to measure the performance of machine learning classification models.</p><p>Let’s import two of these functions (<code>classification_report</code> and <code>confuson_matrix</code>) into our report now:</p><pre><code class="language-py">
from sklearn.metrics import classification_report
from sklearn.metrics import confusion_matrix
</code></pre><p>Let’s work through each of these one-by-one, starting with the <code>classfication_report</code>. You can generate the report with the following statement:</p><pre><code class="language-py">
print(classification_report(y_test_data, predictions))
</code></pre><p>This generates:</p><pre><code class="language-py">
precision    recall  f1-score   support
0       0.94      0.85      0.89       150
1       0.86      0.95      0.90       150
accuracy                     0.90       300
macro avg 0.90      0.90      0.90       300
weighted avg 0.90      0.90      0.90       300
</code></pre><p>Similarly, you can generate a confusion matrix with the following statement:</p><pre><code class="language-py">
print(confusion_matrix(y_test_data, predictions))
</code></pre><p>This generates:</p><pre><code class="language-py">
[[141  12]
[ 18 129]]
</code></pre><p>Looking at these performance metrics, it looks like our model is already fairly performant. It can still be improved.</p><p>In the next section, we will see how we can improve the performance of our K nearest neighbors model by choosing a better value for <code>K</code>.</p><h2 id="choosing-an-optimal-k-value-using-the-elbow-method"><strong>Choosing An Optimal <code>K</code> Value Using the Elbow Method</strong></h2><p>In this section, we will use the elbow method to choose an optimal value of <code>K</code> for our K nearest neighbors algorithm.</p><p>The elbow method involves iterating through different K values and selecting the value with the lowest error rate when applied to our test data.</p><p>To start, let’s create an empty <a href="https://nickmccullum.com/python-course/lists/">list</a> called <code>error_rates</code>. We will loop through different <code>K</code> values and append their error rates to this list.</p><pre><code class="language-py">
error_rates = []
</code></pre><p>Next, we need to make a Python loop that iterates through the different values of <code>K</code> we’d like to test and executes the following functionality with each iteration:</p><ul><li>Creates a new instance of the <code>KNeighborsClassifier</code> class from <code>scikit-learn</code></li><li>Trains the new model using our training data</li><li>Makes predictions on our test data</li><li>Calculates the mean difference for every incorrect prediction (the lower this is, the more accurate our model is)</li></ul><p>Here is the code to do this for <code>K</code> values between <code>1</code> and <code>100</code>:</p><pre><code class="language-py">
for i in np.arange(1, 101):
new_model = KNeighborsClassifier(n_neighbors = i)
new_model.fit(x_training_data, y_training_data)
new_predictions = new_model.predict(x_test_data)
error_rates.append(np.mean(new_predictions != y_test_data))
</code></pre><p>Let’s visualize how our error rate changes with different <code>K</code> values using a quick matplotlib visualization:</p><pre><code class="language-py">
plt.plot(error_rates)
#Common imports
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
%matplotlib inline
#Import the data set
raw_data = pd.read_csv('classified_data.csv', index_col = 0)
#Import standardization functions from scikit-learn
from sklearn.preprocessing import StandardScaler
#Standardize the data set
scaler = StandardScaler()
scaler.fit(raw_data.drop('TARGET CLASS', axis=1))
scaled_features = scaler.transform(raw_data.drop('TARGET CLASS', axis=1))
scaled_data = pd.DataFrame(scaled_features, columns = raw_data.drop('TARGET CLASS', axis=1).columns)
#Split the data set into training data and test data
from sklearn.model_selection import train_test_split
x = scaled_data
y = raw_data['TARGET CLASS']
x_training_data, x_test_data, y_training_data, y_test_data = train_test_split(x, y, test_size = 0.3)
#Train the model and make predictions
from sklearn.neighbors import KNeighborsClassifier
model = KNeighborsClassifier(n_neighbors = 1)
model.fit(x_training_data, y_training_data)
predictions = model.predict(x_test_data)
#Performance measurement
from sklearn.metrics import classification_report
from sklearn.metrics import confusion_matrix
print(classification_report(y_test_data, predictions))
print(confusion_matrix(y_test_data, predictions))
#Selecting an optimal K value
error_rates = []
for i in np.arange(1, 101):
new_model = KNeighborsClassifier(n_neighbors = i)
new_model.fit(x_training_data, y_training_data)
new_predictions = new_model.predict(x_test_data)
error_rates.append(np.mean(new_predictions != y_test_data))
plt.figure(figsize=(16,12))
plt.plot(error_rates)
</code></pre><h1 id="k-means-clustering-models">K-Means Clustering Models</h1><p>The <a href="https://nickmccullum.com/python-machine-learning/k-means-clustering-python/">K-means clustering algorithm</a> is typically the first unsupervised machine learning model that students will learn.</p><p>It allows machine learning practitioners to create groups of data points within a data set with similar quantitative characteristics. It is useful for solving problems like creating customer segments or identifying localities in a city with high crime rates.</p><p>In this section, you will learn how to build your first K means clustering algorithm in Python.</p><h2 id="the-data-set-we-will-use-in-this-tutorial"><strong>The Data Set We Will Use In This Tutorial</strong></h2><p>In this tutorial, we will be using a data set of data generated using <code>scikit-learn</code>.</p><p>Let’s import <code>scikit-learn</code>’s <code>make_blobs</code> function to create this artificial data. Open up a <a href="https://nickmccullum.com/python-course/jupyter-notebook-basics/">Jupyter Notebook</a> and start your Python script with the following statement:</p><pre><code class="language-py">
from sklearn.datasets import make_blobs
</code></pre><p>Now let’s use the <code>make_blobs</code> function to create some artificial data!</p><p>More specifically, here is how you could create a data set with <code>200</code> samples that has <code>2</code> features and <code>4</code> cluster centers. The standard deviation within each cluster will be set to <code>1.8</code>.</p><pre><code class="language-py">
raw_data = make_blobs(n_samples = 200, n_features = 2, centers = 4, cluster_std = 1.8)
</code></pre><p>If you print this <code>raw_data</code> object, you’ll notice that it is actually a <a href="https://nickmccullum.com/python-course/tuples/">Python tuple</a>. The first element of this tuple is a <a href="https://nickmccullum.com/advanced-python/numpy-arrays/">NumPy array</a> with 200 observations. Each observation contains 2 features (just like we specified with our <code>make_blobs</code> function!).</p><p>Now that our data has been created, we can move on to importing other important open-source libraries into our Python script.</p><h2 id="the-imports-we-will-use-in-this-tutorial"><strong>The Imports We Will Use In This Tutorial</strong></h2><p>This tutorial will make use of a number of popular open-source Python libraries, including <a href="https://nickmccullum.com/advanced-python/pandas/">pandas</a>, <a href="https://nickmccullum.com/advanced-python/numpy/">NumPy</a>, and <a href="https://nickmccullum.com/python-visualization/how-to-import-matplotlib/">matplotlib</a>. Let’s continue our Python script by adding the following imports:</p><pre><code class="language-py">
import pandas as pd
import numpy as np
import seaborn
import matplotlib.pyplot as plt
%matplotlib inline
plt.scatter(raw_data[0][:,0], raw_data[0][:,1], c=raw_data[1])
from sklearn.cluster import KMeans
</code></pre><p>Next, lets create an instance of this <code>KMeans</code> class with a parameter of <code>n_clusters=4</code> and assign it to the variable <code>model</code>:</p><pre><code class="language-py">
model = KMeans(n_clusters=4)
</code></pre><p>Now let’s train our model by invoking the <code>fit</code> method on it and passing in the first element of our <code>raw_data</code> tuple:</p><pre><code class="language-py">
model.fit(raw_data[0])
</code></pre><p>In the next section, we’ll explore how to make predictions with this K means clustering model.</p><p>Before moving on, I wanted to point out one difference that you may have noticed between the process for building this K means clustering algorithm (which is an unsupervised machine learning algorithm) and the supervised machine learning algorithms we’ve worked with so far in this course.</p><p>Namely, we did not have to split the data set into training data and test data. This is an important difference - and in fact, you never need to make the train/test split on a data set when building unsupervised machine learning models!</p><h2 id="making-predictions-with-our-k-means-clustering-model"><strong>Making Predictions With Our K Means Clustering Model</strong></h2><p>Machine learning practitioners generally use K means clustering algorithms to make two types of predictions:</p><ul><li>Which cluster each data point belongs to</li><li>Where the center of each cluster is</li></ul><p>It is easy to generate these predictions now that our model has been trained.</p><p>First, let’s predict which cluster each data point belongs to. To do this, access the <code>labels_</code> attribute from our <code>model</code> object using the dot operator, like this:</p><pre><code class="language-py">
model.labels_
</code></pre><p>This generates a NumPy array with predictions for each data point that looks like this:</p><pre><code class="language-py">
array([3, 2, 7, 0, 5, 1, 7, 7, 6, 1, 2, 4, 6, 7, 6, 4, 4, 3, 3, 6, 0, 0,
6, 4, 5, 6, 0, 2, 6, 5, 4, 3, 4, 2, 6, 6, 6, 5, 6, 2, 1, 1, 3, 4,
3, 5, 7, 1, 7, 5, 3, 6, 0, 3, 5, 5, 7, 1, 3, 1, 5, 7, 7, 0, 5, 7,
3, 4, 0, 5, 6, 5, 1, 4, 6, 4, 5, 6, 7, 2, 2, 0, 4, 1, 1, 1, 6, 3,
3, 7, 3, 6, 7, 7, 0, 3, 4, 3, 4, 0, 3, 5, 0, 3, 6, 4, 3, 3, 4, 6,
1, 3, 0, 5, 4, 2, 7, 0, 2, 6, 4, 2, 1, 4, 7, 0, 3, 2, 6, 7, 5, 7,
5, 4, 1, 7, 2, 4, 7, 7, 4, 6, 6, 3, 7, 6, 4, 5, 5, 5, 7, 0, 1, 1,
0, 0, 2, 5, 0, 3, 2, 5, 1, 5, 6, 5, 1, 3, 5, 1, 2, 0, 4, 5, 6, 3,
4, 4, 5, 6, 4, 4, 2, 1, 7, 4, 6, 6, 0, 6, 3, 5, 0, 5, 2, 4, 6, 0,
1, 0], dtype=int32)
</code></pre><p>To see where the center of each cluster lies, access the <code>cluster_centers_</code> attribute using the dot operator like this:</p><pre><code class="language-py">
model.cluster_centers_
</code></pre><p>This generates a two-dimensional NumPy array that contains the coordinates of each clusters center. It will look like this:</p><pre><code class="language-py">
array([[ -8.06473328,  -0.42044783],
[  0.15944397,  -9.4873621 ],
[  1.49194628,   0.21216413],
[-10.97238157,  -2.49017206],
[  3.54673215,  -9.7433692 ],
[ -3.41262049,   7.80784834],
[  2.53980034,  -2.96376999],
[ -0.4195847 ,   6.92561289]])
</code></pre><p>We’ll assess the accuracy of these predictions in the next section.</p><h2 id="visualizing-the-accuracy-of-our-model"><strong>Visualizing the Accuracy of Our Model</strong></h2><p>The last thing we’ll do in this tutorial is visualize the accuracy of our model. You can use the following code to do this:</p><pre><code class="language-py">
f, (ax1, ax2) = plt.subplots(1, 2, sharey=True,figsize=(10,6))
ax1.set_title('Our Model')
ax1.scatter(raw_data[0][:,0], raw_data[0][:,1],c=model.labels_)
ax2.set_title('Original Data')
ax2.scatter(raw_data[0][:,0], raw_data[0][:,1],c=raw_data[1])
#Create artificial data set
from sklearn.datasets import make_blobs
raw_data = make_blobs(n_samples = 200, n_features = 2, centers = 4, cluster_std = 1.8)
#Data imports
import pandas as pd
import numpy as np
#Visualization imports
import seaborn
import matplotlib.pyplot as plt
%matplotlib inline
#Visualize the data
plt.scatter(raw_data[0][:,0], raw_data[0][:,1])
plt.scatter(raw_data[0][:,0], raw_data[0][:,1], c=raw_data[1])
#Build and train the model
from sklearn.cluster import KMeans
model = KMeans(n_clusters=4)
model.fit(raw_data[0])
#See the predictions
model.labels_
model.cluster_centers_
#PLot the predictions against the original data set
f, (ax1, ax2) = plt.subplots(1, 2, sharey=True,figsize=(10,6))
ax1.set_title('Our Model')
ax1.scatter(raw_data[0][:,0], raw_data[0][:,1],c=model.labels_)
ax2.set_title('Original Data')
ax2.scatter(raw_data[0][:,0], raw_data[0][:,1],c=raw_data[1])
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
