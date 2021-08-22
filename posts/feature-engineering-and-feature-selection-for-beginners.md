---
card: "/images/default.jpg"
tags: [Machine Learning]
description: "They say data is the new oil, but we don t use oil directly f"
author: "Milad E. Fahmy"
title: "Machine Learning Tutorial – Feature Engineering and Feature Selection For Beginners"
created: "2021-08-16T15:34:28+02:00"
modified: "2021-08-16T15:34:28+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-machine-learning tag-data-science tag-data-analysis tag-python ">
<header class="post-full-header">
<h1 class="post-full-title">Machine Learning Tutorial – Feature Engineering and Feature Selection For Beginners</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2021/04/tools-864983_1920.jpg 300w,
/news/content/images/size/w600/2021/04/tools-864983_1920.jpg 600w,
/news/content/images/size/w1000/2021/04/tools-864983_1920.jpg 1000w,
/news/content/images/size/w2000/2021/04/tools-864983_1920.jpg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2021/04/tools-864983_1920.jpg" alt="Machine Learning Tutorial – Feature Engineering and Feature Selection For Beginners">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
import numpy as np
import pandas as pd
# read dataset
data = pd.read_csv('path/to/data')
#set threshold
threshold = 0.7
# dropping columns with missing value rate higher than threshold
data = data[data.columns[data.isnull().mean() &lt; threshold]]
</code></pre><p>In the code snippet above, you can see how I use NumPy and pandas to load the dataset and set a threshold to<strong> 0.7</strong>. This means any column that has missing values of more than<strong> 70%</strong> of the observations will be dropped from the dataset.</p><p>I recommend you set your threshold value depending on the size of your dataset.</p><h3 id="mean-or-median-imputation">Mean or Median Imputation</h3><p>Another common technique is to use the mean or median of the non-missing observations. This strategy can be applied to a feature that has numeric data.</p><pre><code class="language-python"># filling missing values with medians of the columns
data = data.fillna(data.median())</code></pre><p>In the example above, we use the <strong>median method</strong> to fill missing values in the dataset.</p><h3 id="most-common-value">Most Common Value</h3><p>This method is replacing the missing values with the <strong>maximum occurred value</strong> in a column/feature. This is a good option for handling <strong>categorical </strong>columns/features.</p><pre><code class="language-python"># filling missing values with medians of the columns
import numpy as np
# 4 samples/observations and 2 variables/features
data = np.array([[4, 6], [11, 34], [10, 17], [1, 5]])
# create scaler method
scaler = MinMaxScaler(feature_range=(0,1))
# fit and transform the data
scaled_data = scaler.fit_transform(data)
print(scaled_data)
# [[0.3  0.03448276]
#  [1.   1.        ]
#  [0.9  0.4137931 ]
import numpy as np
# 4 samples/observations and 2 variables/features
data = np.array([[4, 1], [11, 1], [10, 4], [1, 11]])
# create scaler method
scaler = StandardScaler()
# fit and transform the data
scaled_data = scaler.fit_transform(data)
print(scaled_data)
# [[-0.60192927 -0.79558708]
#  [ 1.08347268 -0.79558708]
#  [ 0.84270097 -0.06119901]
#  [-1.32424438  1.65237317]]</code></pre><p>Let's verify that the mean of each feature (column) is <strong>0</strong>:</p><pre><code class="language-python">print(scaled_data.mean(axis=0))</code></pre><p><code>[0. 0.]</code></p><p>And that the standard deviation of each feature (column) is <strong>1</strong>:</p><pre><code class="language-python">print(scaled_data.std(axis=0))</code></pre><p><code>[1. 1.]</code></p><h2 id="how-to-handle-categorical-features">How to Handle Categorical Features</h2><p>Categorical features represent types of data that may be divided into groups. For example, genders and educational levels.</p><p>Any non-numerical values need to be <em>converted</em> to integers or floats to be utilized in most machine learning libraries.</p><p>Common methods to handle categorical features are:</p><h3 id="label-encoding">Label Encoding</h3><p>Label encoding is simply converting each categorical value in a column to a number.</p><p>It is recommended to use label encoding to convert them into binary variables.</p><p>In the following example, you will learn how to use <strong><a href="https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.LabelEncoder.html">LableEncoder</a></strong> from Scikit-learn to transform categorical values into binary:</p><pre><code class="language-python"># import packages
import numpy as np
import pandas as pd
from sklearn.preprocessing import LabelEncoder
# intialise data of lists.
data = {'Gender':['male', 'female', 'female', 'male','male'],
'Country':['Tanzania','Kenya', 'Tanzania', 'Tanzania','Kenya']}
# Create DataFrame
data = pd.DataFrame(data)
# create label encoder object
le = LabelEncoder()
data['Gender']= le.fit_transform(data['Gender'])
data['Country']= le.fit_transform(data['Country'])
import numpy as np
from sklearn.preprocessing import OneHotEncoder, LabelEncoder
# define example
data = np.array(['cold', 'cold', 'warm', 'cold', 'hot', 'hot', 'warm', 'cold', 'warm', 'hot'])
# integer encode
label_encoder = LabelEncoder()
#fit and transform the data
integer_encoded = label_encoder.fit_transform(data)
print(integer_encoded)
# one-hot encode
onehot_encoder = OneHotEncoder(sparse=False)
#reshape the data
integer_encoded = integer_encoded.reshape(len(integer_encoded), 1)
#fit and transform the data
onehot_encoded = onehot_encoder.fit_transform(integer_encoded)
print(onehot_encoded)</code></pre><p>This is the ouput of <strong>integer_encoded</strong> by <strong>LabelEncoder</strong> method:</p><p><code>[0 0 2 0 1 1 2 0 2 1]</code></p><p>And this is the output of <strong>onehot_encoded</strong> by <strong>OneHotEncoder</strong> method:</p><pre><code>[[1. 0. 0.]
[1. 0. 0.]
[0. 0. 1.]
[1. 0. 0.]
[0. 1. 0.]
[0. 1. 0.]
[0. 0. 1.]
[1. 0. 0.]
[0. 0. 1.]
from sklearn.datasets import load_iris
from sklearn.feature_selection import SelectKBest
from sklearn.feature_selection import chi2
# Load iris data
iris_dataset = load_iris()
# Create features and target
X = iris_dataset.data
y = iris_dataset.target
# Convert to categorical data by converting data to integers
X = X.astype(int)
# Two features with highest chi-squared statistics are selected
chi2_features = SelectKBest(chi2, k = 2)
X_kbest_features = chi2_features.fit_transform(X, y)
# Reduced features
print('Original feature number:', X.shape[1])
print('Reduced feature number:', X_kbest_features.shape[1])</code></pre><p>Original feature number: 4 <br>Reduced feature number: 2</p><p>As you can see chi-squared test helps us to select <strong>two important independent features</strong> out of the original 4 that have the strongest relationship with the target feature.</p><p>You can learn more about chi-squared test here: <a href="https://machinelearningmastery.com/chi-squared-test-for-machine-learning/">"</a><a href="https://machinelearningmastery.com/chi-squared-test-for-machine-learning/">A Gentle Introduction to the Chi-Squared Test for Machine Learning</a>".</p><h3 id="feature-importance">Feature Importance</h3><p>Feature importance gives you a score for each feature of your data. The higher the score, the more <strong>important</strong> or <strong>relevant</strong> that feature is to your target feature.</p><p>Feature importance is an inbuilt class that comes with tree-based classifiers such as:</p><ul><li>Random Forest Classifiers</li><li>Extra Tree Classifiers</li></ul><p>In the following example, we will train the extra tree classifier into the iris dataset and use the inbuilt class <strong>.feature_importances_</strong> to compute the importance of each feature:</p><pre><code class="language-python"># Load libraries
from sklearn.datasets import load_iris
import matplotlib.pyplot as plt
from sklearn.ensemble import ExtraTreesClassifier
# Load iris data
iris_dataset = load_iris()
# Create features and target
X = iris_dataset.data
y = iris_dataset.target
# Convert to categorical data by converting data to integers
X = X.astype(int)
# Building the model
extra_tree_forest = ExtraTreesClassifier(n_estimators = 5,
criterion ='entropy', max_features = 2)
# Training the model
extra_tree_forest.fit(X, y)
# Computing the importance of each feature
feature_importance = extra_tree_forest.feature_importances_
# Normalizing the individual importances
feature_importance_normalized = np.std([tree.feature_importances_ for tree in
extra_tree_forest.estimators_],
axis = 0)
# Plotting a Bar Graph to compare the models
plt.bar(iris_dataset.feature_names, feature_importance_normalized)
plt.xlabel('Feature Labels')
plt.ylabel('Feature Importances')
plt.title('Comparison of different Feature Importances')
plt.show()
from sklearn.datasets import load_boston
import matplotlib.pyplot as plt
import seaborn as sns
# load boston data
boston_dataset = load_boston()
# create a daframe for boston data
boston = pd.DataFrame(boston_dataset.data, columns=boston_dataset.feature_names)
# Convert to categorical data by converting data to integers
#X = X.astype(int)
#ploting the heatmap for correlation
ax = sns.heatmap(boston.corr().round(2), annot=True)
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
