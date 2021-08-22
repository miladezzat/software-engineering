---
card: "/images/default.jpg"
tags: [Machine Learning]
description: "Tree-based algorithms are popular machine learning methods us"
author: "Milad E. Fahmy"
title: "Random Forest Classifier Tutorial: How to Use Tree-Based Algorithms for Machine Learning"
created: "2021-08-15T23:32:02+02:00"
modified: "2021-08-15T23:32:02+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-machine-learning tag-trees tag-algorithms tag-data-science ">
<header class="post-full-header">
<h1 class="post-full-title">Random Forest Classifier Tutorial: How to Use Tree-Based Algorithms for Machine Learning</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/08/0_hOa0fVvazQigNgB2.jpg 300w,
/news/content/images/size/w600/2020/08/0_hOa0fVvazQigNgB2.jpg 600w,
/news/content/images/size/w1000/2020/08/0_hOa0fVvazQigNgB2.jpg 1000w,
/news/content/images/size/w2000/2020/08/0_hOa0fVvazQigNgB2.jpg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/08/0_hOa0fVvazQigNgB2.jpg" alt="Random Forest Classifier Tutorial: How to Use Tree-Based Algorithms for Machine Learning">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
%matplotlib inline
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score
from sklearn.preprocessing import StandardScaler, MinMaxScaler
import pandas_profiling
from matplotlib import rcParams
import warnings
warnings.filterwarnings("ignore")
# figure size in inches
rcParams["figure.figsize"] = 10, 6
np.random.seed(42)</code></pre><h3 id="dataset">Dataset</h3><p>Then load the dataset from the data directory:</p><pre><code class="language-python"># Load dataset
data = pd.read_csv("../data/pima_indians_diabetes.csv")</code></pre><p>Now we can observe the sample of the dataset.</p><pre><code class="language-python">
# show sample of the dataset
X = data.drop("class", axis=1)
y = data["class"]</code></pre><h3 id="preprocessing-the-dataset">Preprocessing the Dataset</h3><p>Before we create a model we need to standardize our independent features by using the <code>standardScaler</code> method from scikit-learn.</p><pre><code class="language-python"># standardize the dataset
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)</code></pre><p>You can learn more on how and why to standardize your data from this article by clicking <a href="https://towardsdatascience.com/how-and-why-to-standardize-your-data-996926c2c832">here</a>.</p><h3 id="splitting-the-dataset-into-training-and-test-data">Splitting the dataset into Training and Test data</h3><p>We now split our processed dataset into training and test data. The test data will be 10% of the entire processed dataset.</p><pre><code class="language-python"># split into train and test set
X_train, X_test, y_train, y_test = train_test_split(
X_scaled, y, stratify=y, test_size=0.10, random_state=42
)</code></pre><h3 id="building-the-random-forest-classifier">Building the Random Forest Classifier</h3><p>Now is time to create our random forest classifier and then train it on the train set. We will also pass the number of trees (100) in the forest we want to use through the<strong> </strong>parameter called <strong>n_estimators.</strong> </p><pre><code class="language-python"># create the classifier
classifier = RandomForestClassifier(n_estimators=100)
# Train the model using the training sets
y_pred = classifier.predict(X_test)</code></pre><p> Then we check the accuracy using actual and predicted values from the test data.</p><pre><code class="language-python"># Calculate Model Accuracy
print("Accuracy:", accuracy_score(y_test, y_pred))</code></pre><p>Accuracy: 0.8051948051948052</p><p>Our accuracy is around 80.5% which is good. But we can always make it better.</p><h3 id="identify-important-features">Identify Important Features</h3><p>As I said before, we can also check the important features by using the <strong>feature_importances_</strong> variable from the random forest algorithm in scikit-learn.</p><pre><code class="language-python"># check Important features
feature_importances_df = pd.DataFrame(
{"feature": list(X.columns), "importance": classifier.feature_importances_}
).sort_values("importance", ascending=False)
# Display
# Creating a bar plot
sns.barplot(x=feature_importances_df.feature, y=feature_importances_df.importance)
# Add labels to your
plt.xlabel("Feature Importance Score")
plt.ylabel("Features")
plt.title("Visualizing Important Features")
plt.xticks(
rotation=45, horizontalalignment="right", fontweight="light", fontsize="x-large"
)
X = data.drop(["class", "triceps_skinfold_thickness"], axis=1)
y = data["class"]
# standardize the dataset
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)
# split into train and test set
X_train, X_test, y_train, y_test = train_test_split(
X_scaled, y, stratify=y, test_size=0.10, random_state=42
)</code></pre><p>We will train the random forest algorithm with the selected processed features from our dataset, perform predictions, and then find the accuracy of the model.</p><pre><code class="language-python"># Create a Random Classifier
clf = RandomForestClassifier(n_estimators=100)
# Train the model using the training sets
clf.fit(X_train, y_train)
# prediction on test set
y_pred = clf.predict(X_test)
# Calculate Model Accuracy,
print("Accuracy:", accuracy_score(y_test, y_pred))</code></pre><p>Accuracy: 0.8181818181818182</p><p>Now the model accuracy has increased from <strong>80.5%</strong> to <strong>81.8%</strong> after we removed the least important feature called <em>triceps_skinfold_thickness</em>. </p><p>This suggests that it is very important to check important features and see if you can remove the least important features to increase your model's performance.</p><h1 id="wrapping-up">Wrapping up</h1><p>Tree-based algorithms are really important for every data scientist to learn. In this article, you've learned the basics of tree-based algorithms and how to create a classification model by using the random forest algorithm. </p><p>I also recommend you try other types of tree-based algorithms such as the <a href="https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.ExtraTreesClassifier.html#sklearn.ensemble.ExtraTreesClassifier">Extra-trees algorithm</a>.</p><p>You can download the dataset and notebook used in this article here: <a href="https://github.com/Davisy/Random-Forest-classification-Tutorial">https://github.com/Davisy/Random-Forest-classification-Tutorial</a></p><p>Congratulations, you have made it to the end of this article!</p><p>If you learned something new or enjoyed reading this article, please share it so that others can see it. Until then, see you in the next post! I can also be reached on Twitter <a href="https://twitter.com/Davis_McDavid">@Davis_McDavid</a></p>
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
