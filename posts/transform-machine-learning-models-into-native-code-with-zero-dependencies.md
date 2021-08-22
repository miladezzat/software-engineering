---
card: "/images/default.jpg"
tags: [Machine Learning]
description: "Most trained machine learning models are saved as pickle file"
author: "Milad E. Fahmy"
title: "m2cgen Tutorial – How to Transform Machine Learning Models into Native Code with Zero Dependencies"
created: "2021-08-16T15:34:52+02:00"
modified: "2021-08-16T15:34:52+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-machine-learning tag-python ">
<header class="post-full-header">
<h1 class="post-full-title">m2cgen Tutorial – How to Transform Machine Learning Models into Native Code with Zero Dependencies</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2021/01/dandelion-2817950_1920.jpg 300w,
/news/content/images/size/w600/2021/01/dandelion-2817950_1920.jpg 600w,
/news/content/images/size/w1000/2021/01/dandelion-2817950_1920.jpg 1000w,
/news/content/images/size/w2000/2021/01/dandelion-2817950_1920.jpg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2021/01/dandelion-2817950_1920.jpg" alt="m2cgen Tutorial – How to Transform Machine Learning Models into Native Code with Zero Dependencies">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Most trained machine learning models are saved as <a href="https://machinelearningmastery.com/save-load-machine-learning-models-python-scikit-learn/">pickle files</a>. This file type is the standard way of serializing and de-serializing objects in Python. </p><p>In order to make predictions, you need to load the saved trained model and then perform predictions from the inputs provided. </p><p>In this article you will learn how to use the <strong>m2cgen</strong> Python library to convert the trained machine learning model into native code (for example Python, PHP, or JavaScript) with zero dependencies. Then you'll make predictions based on it.</p><h2 id="what-is-the-m2cgen-python-library">What is the m2cgen Python Library?</h2><p>m2cgen (Model 2 Code Generator) is a simple Python library that converts a trained machine learning model into different programming languages. </p><p>For example, you can train your machine learning model from the Scikit-learn library and then convert it into the programming language of your choice.</p><p>This library is very useful if you want to deploy models into environments where you can't install your Python stack to support your model prediction.</p><h3 id="languages-supported-by-the-m2cgen-library">Languages supported by the m2cgen library </h3><p><a href="https://github.com/BayesWitnesses/m2cgen">M2cgen</a> supports &nbsp;14 different programming languages:</p><ul><li>C</li><li>C#</li><li>Dart</li><li>F#</li><li>Go</li><li>Haskell</li><li>Java</li><li>JavaScript</li><li>PHP</li><li>PowerShell</li><li>Python</li><li>R</li><li>Ruby</li><li>Visual Basic (VBA-compatible)</li></ul><h3 id="models-supported-by-the-m2cgen-library">Models supported by the m2cgen library</h3><p>The library supports different regression and classification models from Scikit-learn, and different gradient boost frameworks such as XGBoost and LightGBM (Light Gradient Boosting Machine). </p><p>If you want to learn about other supported models, check here: <a href="https://github.com/BayesWitnesses/m2cgen#supported-models">https://github.com/BayesWitnesses/m2cgen#supported-models</a>.</p><h2 id="how-to-install-the-m2cgen-python-library">How to Install the m2cgen Python Library</h2><p>To install m2cgen, run the following command in your terminal:</p><pre><code class="language-terminal">pip install m2cgen</code></pre><p>Note that m2cgen<strong> </strong>is supported by Python versions &gt;= <strong>3.6</strong>.</p><h2 id="how-to-use-the-m2cgen-python-library">How to Use the m2cgen Python Library</h2><p>In the following examples, we will use the loan dataset to create a simple machine learning model using a LogisticRegression algorithm. The algorithm will be able to predict if a customer is eligible for loan amount. </p><p>Then we will convert the trained model into Python, PHP and JavaScript using the m2cgen library. You can download the dataset <a href="https://github.com/Davisy/Convert-Trained-ML-Models-To-Native-Code/tree/main/data">here</a>.</p><p>Let's get started! 🚀</p><p>Import the following important packages for this use case:</p><pre><code class="language-python">import pandas as pd
import numpy as np
from sklearn.preprocessing import StandardScaler, LabelEncoder
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
import m2cgen as m2c
import warnings                  # To ignore any warnings
def preprocessing(data):
# replace with numerical values
data['Dependents'].replace('3+', 3,inplace=True)
data['Loan_Status'].replace('N', 0,inplace=True)
data['Loan_Status'].replace('Y', 1,inplace=True)
# handle missing data
data['Gender'].fillna(data['Gender'].mode()[0], inplace=True)
data['Married'].fillna(data['Married'].mode()[0], inplace=True)
data['Dependents'].fillna(data['Dependents'].mode()[0], inplace=True)
data['Self_Employed'].fillna(data['Self_Employed'].mode()[0], inplace=True)
data['Credit_History'].fillna(data['Credit_History'].mode()[0], inplace=True)
data['Loan_Amount_Term'].fillna(data['Loan_Amount_Term'].mode()[0], inplace=True)
data['LoanAmount'].fillna(data['LoanAmount'].median(), inplace=True)
# drop ID column
data = data.drop('Loan_ID',axis=1)
#split features and target
X = data.drop('Loan_Status',axis=1)
y = data.Loan_Status.values
#scale the  features
X  = pd.get_dummies(X,columns=["Gender","Married","Education","Self_Employed","Property_Area"])
X = StandardScaler().fit_transform(X)
return X,y </code></pre><p>Let’s preprocess the loan dataset. It will return processed features and the target.</p><pre><code class="language-python">X,y = preprocessing(data) </code></pre><p>We then split the processed data into train and test data sets by using the <strong><code>train_test_split</code></strong> function from Scikit-learn.</p><pre><code class="language-python"># split into train and test set
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.1)</code></pre><p>Now, we create and train the LogisticRegression model into our train set.</p><pre><code class="language-python"># create and train the classifier
classifier = LogisticRegression()
classifier.fit(X_train,y_train)</code></pre><h2 id="how-to-convert-the-trained-model-into-python-code">How to Convert the Trained Model into Python Code</h2><p>The m2cgen library provides methods to convert the trained model into any of the supported languages mentioned above. In this example, we will convert the trained model into Python by using the <strong><code>export_to_python()</code></strong> method from m2cgen.</p><pre><code class="language-python"># convert model to pure python code
model_to_python = m2c.export_to_python(classifier)  </code></pre><p>Here is the trained model represented in Python code:</p><pre><code class="language-python">#pure python code
def score(input):
return (((((((((((((((((0.7929123964945446) + ((input[0]) * (0.07801862594632314))) + ((input[1]) * (-0.014853900985478468))) + ((input[2]) * (-0.15783041201914427))) + ((input[3]) * (-0.05222073553791883))) + ((input[4]) * (-0.0787403404504791))) + ((input[5]) * (1.3714807410150505))) + ((input[6]) * (0.015077765348160292))) + ((input[7]) * (-0.015077765348160353))) + ((input[8]) * (-0.12161041350915254))) + ((input[9]) * (0.12161041350915253))) + ((input[10]) * (0.09387440269562626))) + ((input[11]) * (-0.09387440269562626))) + ((input[12]) * (-0.0047109053878701835))) + ((input[13]) * (0.004710905387870008))) + ((input[14]) * (-0.14569247529698154))) + ((input[15]) * (0.19858601990225683))) + ((input[16]) * (-0.06417592734444703))</code></pre><p>The Python function code it generates will receive input data and then perform its predictions. Now let's test the Python code generated. </p><p>We will first make predictions from the actual trained model. Here is the sample test data we will use from the test set:</p><pre><code class="language-python">test_data = X_test[6]
print(test_data)</code></pre><p>array([ 1.24474546, &nbsp;1.9817189 , -0.55448733, &nbsp;3.02536229, &nbsp;0.2732313 , 0.41173269, -0.47234264, &nbsp;0.47234264, -0.72881553, &nbsp;0.72881553, 0.52836225, -0.52836225, -2.54711697, &nbsp;2.54711697, &nbsp;1.55889948, -0.7820157 , -0.70020801])</p><p>Now we make predictions with the actual trained model.</p><pre><code class="language-python">pred = classifier.predict(test_data.reshape(1,-1))
print("prediction result: {}".format(pred))</code></pre><p>prediction result: [1]</p><p>The model prediction is <strong>1</strong>, which means that the customer is eligible for the loan amount.</p><p>We will use the same test data to perform predictions in the pure Python code generated and evaluate if it will give the same prediction.</p><pre><code class="language-python"># test prediction in pure python code
input = [ 1.24474546,  1.9817189 , -0.55448733,  3.02536229,  0.2732313 ,
0.41173269, -0.47234264,  0.47234264, -0.72881553,  0.72881553,
0.52836225, -0.52836225, -2.54711697,  2.54711697,  1.55889948,
-0.7820157 , -0.70020801]
pred = score(input)
print("prediction result: {}".format(int(pred)))</code></pre><p>prediction result: 1</p><p>The pure Python code also provides the same prediction results.</p><h2 id="how-to-convert-the-trained-model-into-php-code">How to Convert the Trained Model into PHP Code</h2><p>We will use the <strong><code>export_to_php()</code></strong> method from m2cgen to convert the trained model into pure PHP code.</p><pre><code class="language-python"># convert model to pure PHP code
model_to_php = m2c.export_to_php(classifier)  </code></pre><p>Here is the trained model represented in PHP code:</p><pre><code class="language-php">function score(array $input)
{
return (((((((((((((((((0.8166973302490392) + (($input[0]) * (0.035269518507829584))) + (($input[1]) * (0.05203333118549156))) + (($input[2]) * (-0.13217178253938103))) + (($input[3]) * (-0.13136526173536608))) + (($input[4]) * (-0.024875019809902837))) + (($input[5]) * (1.2864103414352563))) + (($input[6]) * (-0.005259373701309709))) + (($input[7]) * (0.005259373701309715))) + (($input[8]) * (-0.11512289603368371))) + (($input[9]) * (0.11512289603368378))) + (($input[10]) * (0.06905305123713898))) + (($input[11]) * (-0.06905305123713898))) + (($input[12]) * (0.021080906307735767))) + (($input[13]) * (-0.02108090630773594))) + (($input[14]) * (-0.14491490189610398))) + (($input[15]) * (0.2189862115713242))) + (($input[16]) * (-0.08599736364921017));
}</code></pre><p>We will use the same test data to perform predictions in the pure PHP code generated and evaluate if it will give us the same prediction:</p><pre><code class="language-php"># test prediction in pure PHP code
$input = [1.24474546, 1.9817189, -0.55448733, 3.02536229, 0.2732313,
0.41173269, -0.47234264, 0.47234264, -0.72881553, 0.72881553,
0.52836225, -0.52836225, -2.54711697, 2.54711697, 1.55889948,
-0.7820157, -0.70020801];
// perform predition with pure php code
$pred = score($input);
echo "Predicton result: ". round($pred);</code></pre><p>Prediction result: 1</p><p>The pure PHP code also provides the same prediction results.</p><h2 id="how-to-convert-the-trained-model-into-javascript-code">How to Convert the Trained Model into JavaScript Code</h2><p>In our last example, we will use the <strong><code>export_to_javascript()</code></strong> method from m2cgen to convert the trained model into pure JavaScript code.</p><pre><code class="language-python"># convert model to pure Javascript code
model_to_javascript = m2c.export_to_javascript(classifier)  </code></pre><p>Here is the trained model represented in JavaScript code:</p><pre><code class="language-javascript">function score(input)
{
return (((((((((((((((((0.8166973302490392) + ((input[0]) * (0.035269518507829584))) + ((input[1]) * (0.05203333118549156))) + ((input[2]) * (-0.13217178253938103))) + ((input[3]) * (-0.13136526173536608))) + ((input[4]) * (-0.024875019809902837))) + ((input[5]) * (1.2864103414352563))) + ((input[6]) * (-0.005259373701309709))) + ((input[7]) * (0.005259373701309715))) + ((input[8]) * (-0.11512289603368371))) + ((input[9]) * (0.11512289603368378))) + ((input[10]) * (0.06905305123713898))) + ((input[11]) * (-0.06905305123713898))) + ((input[12]) * (0.021080906307735767))) + ((input[13]) * (-0.02108090630773594))) + ((input[14]) * (-0.14491490189610398))) + ((input[15]) * (0.2189862115713242))) + ((input[16]) * (-0.08599736364921017));
}</code></pre><p>We will use the same test data to perform predictions in the pure JavaScript code generated and evaluate if it will give us the same prediction.</p><pre><code class="language-javascript">// perform predition with pure Javascript code
let input =  [1.24474546, 1.9817189, -0.55448733, 3.02536229, 0.2732313,
0.41173269, -0.47234264, 0.47234264, -0.72881553, 0.72881553,
0.52836225, -0.52836225, -2.54711697, 2.54711697, 1.55889948,
-0.7820157, -0.70020801];
let pred = score(input);
console.log("Prediction results:",Math.round(pred));</code></pre><p>"Prediction result:", 1</p><p>The pure JavaScript code also provides the same prediction results.</p><h2 id="wrapping-up">Wrapping Up</h2><p>Sometimes, the native code generated by the m2cgen library can provide different results compared to the original Python trained ML model. Here's a brief explanation from the library's developers:</p><blockquote> "Some models force input data to be particular type during prediction phase in their native Python libraries. Currently, m2cgen works only with <code>float64</code> (<code>double</code>) data type. You can try to cast your input data to another type manually and check results again. Also, some small differences can happen due to specific implementation of floating-point arithmetic in a target language." (<a href="https://github.com/BayesWitnesses/m2cgen"><strong>Source: Github Repository</strong></a>)</blockquote><p>In the examples mentioned above, I use <strong><code>int()</code></strong> for <strong>Python</strong> , <strong><code>round()</code></strong> for <strong>PHP</strong>, and <strong><code>Math.round()</code></strong> for <strong>JavaScript</strong> to convert the prediction results from the <em>float</em> data type to the <em>integer</em> data type.</p><p>Congratulations, you have made it to the end of this article!</p><p>You can download the dataset, notebook, and script files used in this article here: <a href="https://github.com/Davisy/Convert-Trained-ML-Models-To-Native-Code">https://github.com/Davisy/Convert-Trained-ML-Models-To-Native-Code</a></p><p>If you learned something new or enjoyed reading this article, please share it so that others can see it. Until then, see you in the next post! I can also be reached on Twitter <a href="https://twitter.com/Davis_McDavid" rel="noopener nofollow">@Davis_McDavid</a>.</p>
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
