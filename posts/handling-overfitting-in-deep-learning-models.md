---
card: "/images/default.jpg"
tags: [Deep Learning]
description: "Overfitting occurs when you achieve a good fit of your model "
author: "Milad E. Fahmy"
title: "How to Handle Overfitting in Deep Learning Models"
created: "2021-08-16T15:37:54+02:00"
modified: "2021-08-16T15:37:54+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-deep-learning tag-overfitting tag-regularization tag-python tag-keras ">
<header class="post-full-header">
<h1 class="post-full-title">How to Handle Overfitting in Deep Learning Models</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/01/1_XXtWMdH-YVL8z1VtnfG_iw.jpeg 300w,
/news/content/images/size/w600/2020/01/1_XXtWMdH-YVL8z1VtnfG_iw.jpeg 600w,
/news/content/images/size/w1000/2020/01/1_XXtWMdH-YVL8z1VtnfG_iw.jpeg 1000w,
/news/content/images/size/w2000/2020/01/1_XXtWMdH-YVL8z1VtnfG_iw.jpeg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/01/1_XXtWMdH-YVL8z1VtnfG_iw.jpeg" alt="How to Handle Overfitting in Deep Learning Models">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Overfitting occurs when you achieve a good fit of your model on the training data, but it does not generalize well on new, unseen data. In other words, the model learned patterns specific to the training data, which are irrelevant in other data.</p><p>We can identify overfitting by looking at validation metrics like loss or accuracy. Usually, the validation metric stops improving after a certain number of epochs and begins to decrease afterward. The training metric continues to improve because the model seeks to find the best fit for the training data.</p><p>There are several manners in which we can reduce overfitting in deep learning models. The best option is to <strong><strong>get more training data</strong></strong>. Unfortunately, in real-world situations, you often do not have this possibility due to time, budget, or technical constraints.</p><p>Another way to reduce overfitting is to <strong><strong>lower the capacity of the model to memorize the training data</strong></strong>. As such, the model will need to focus on the relevant patterns in the training data, which results in better generalization. In this post, we’ll discuss three options to achieve this.</p><h1 id="set-up-the-project">Set up the project</h1><p>We start by importing the necessary packages and configuring some parameters. We will use <a href="https://keras.io/" rel="noopener nofollow">Keras</a> to fit the deep learning models. The training data is the <a href="https://www.kaggle.com/crowdflower/twitter-airline-sentiment" rel="noopener nofollow">Twitter US Airline Sentiment data set from Kaggle</a>.</p><pre><code class="language-python"># Basic packages
import pandas as pd
import numpy as np
import re
import collections
import matplotlib.pyplot as plt
from pathlib import Path
# Packages for data preparation
from sklearn.model_selection import train_test_split
from nltk.corpus import stopwords
from keras.preprocessing.text import Tokenizer
from keras.utils.np_utils import to_categorical
from sklearn.preprocessing import LabelEncoder
# Packages for modeling
from keras import models
from keras import layers
from keras import regularizers
NB_WORDS = 10000  # Parameter indicating the number of words we'll put in the dictionary
NB_START_EPOCHS = 20  # Number of epochs we usually start to train with
BATCH_SIZE = 512  # Size of the batches used in the mini-batch gradient descent
MAX_LEN = 20  # Maximum number of words in a sequence
root = Path('../')
input_path = root / 'input/'
ouput_path = root / 'output/'
source_path = root / 'source/'</code></pre><h1 id="some-helper-functions">Some helper functions</h1><p>We will use some helper functions throughout this post.</p><pre><code class="language-python">def deep_model(model, X_train, y_train, X_valid, y_valid):
'''
Function to train a multi-class model. The number of epochs and
batch_size are set by the constants at the top of the
notebook.
Parameters:
model : model with the chosen architecture
X_train : training features
y_train : training target
X_valid : validation features
Y_valid : validation target
Output:
model training history
'''
model.compile(optimizer='rmsprop'
, loss='categorical_crossentropy'
, metrics=['accuracy'])
history = model.fit(X_train
, y_train
, epochs=NB_START_EPOCHS
, batch_size=BATCH_SIZE
, validation_data=(X_valid, y_valid)
, verbose=0)
return history
def eval_metric(model, history, metric_name):
'''
Function to evaluate a trained model on a chosen metric.
Training and validation metric are plotted in a
line chart for each epoch.
Parameters:
history : model training history
metric_name : loss or accuracy
Output:
line chart with epochs of x-axis and metric on
y-axis
'''
metric = history.history[metric_name]
val_metric = history.history['val_' + metric_name]
e = range(1, NB_START_EPOCHS + 1)
plt.plot(e, metric, 'bo', label='Train ' + metric_name)
plt.plot(e, val_metric, 'b', label='Validation ' + metric_name)
plt.xlabel('Epoch number')
plt.ylabel(metric_name)
plt.title('Comparing training and validation ' + metric_name + ' for ' + model.name)
plt.legend()
plt.show()
def test_model(model, X_train, y_train, X_test, y_test, epoch_stop):
'''
Function to test the model on new data after training it
on the full training data with the optimal number of epochs.
Parameters:
model : trained model
X_train : training features
y_train : training target
X_test : test features
y_test : test target
epochs : optimal number of epochs
Output:
test accuracy and test loss
'''
model.fit(X_train
, y_train
, epochs=epoch_stop
, batch_size=BATCH_SIZE
, verbose=0)
results = model.evaluate(X_test, y_test)
print()
print('Test accuracy: {0:.2f}%'.format(results[1]*100))
return results
def remove_stopwords(input_text):
'''
Function to remove English stopwords from a Pandas Series.
Parameters:
input_text : text to clean
Output:
cleaned Pandas Series
'''
stopwords_list = stopwords.words('english')
# Some words which might indicate a certain sentiment are kept via a whitelist
whitelist = ["n't", "not", "no"]
words = input_text.split()
clean_words = [word for word in words if (word not in stopwords_list or word in whitelist) and len(word) &gt; 1]
return " ".join(clean_words)
def remove_mentions(input_text):
'''
Function to remove mentions, preceded by @, in a Pandas Series
Parameters:
input_text : text to clean
Output:
cleaned Pandas Series
'''
return re.sub(r'@\w+', '', input_text)
def compare_models_by_metric(model_1, model_2, model_hist_1, model_hist_2, metric):
'''
Function to compare a metric between two models
Parameters:
model_hist_1 : training history of model 1
model_hist_2 : training history of model 2
metrix : metric to compare, loss, acc, val_loss or val_acc
Output:
plot of metrics of both models
'''
metric_model_1 = model_hist_1.history[metric]
metric_model_2 = model_hist_2.history[metric]
e = range(1, NB_START_EPOCHS + 1)
metrics_dict = {
'acc' : 'Training Accuracy',
'loss' : 'Training Loss',
'val_acc' : 'Validation accuracy',
'val_loss' : 'Validation loss'
}
metric_label = metrics_dict[metric]
plt.plot(e, metric_model_1, 'bo', label=model_1.name)
plt.plot(e, metric_model_2, 'b', label=model_2.name)
plt.xlabel('Epoch number')
plt.ylabel(metric_label)
plt.title('Comparing ' + metric_label + ' between models')
plt.legend()
plt.show()
def optimal_epoch(model_hist):
'''
Function to return the epoch number where the validation loss is
at its minimum
Parameters:
model_hist : training history of model
Output:
epoch number with minimum validation loss
'''
min_epoch = np.argmin(model_hist.history['val_loss']) + 1
print("Minimum validation loss reached in epoch {}".format(min_epoch))
return min_epoch</code></pre><h1 id="data-preparation">Data preparation</h1><h2 id="data-cleaning">Data cleaning</h2><p>We load the CSV with the tweets and perform a random shuffle. It’s a good practice to shuffle the data before splitting between a train and test set. That way the sentiment classes are equally distributed over the train and test sets. We’ll only keep the <strong><strong>text</strong></strong> column as input and the <strong><strong>airline_sentiment</strong></strong> column as the target.</p><p>The next thing we’ll do is <strong>remove<strong> stopwords</strong></strong>. Stopwords do not have any value for predicting the sentiment. Furthermore, as we want to build a model that can be used for other airline companies as well, we <strong><strong>remove the mentions</strong></strong>.</p><pre><code class="language-python">df = pd.read_csv(input_path / 'Tweets.csv')
df = df.reindex(np.random.permutation(df.index))
df = df[['text', 'airline_sentiment']]
df.text = df.text.apply(remove_stopwords).apply(remove_mentions)</code></pre><h2 id="train-test-split">Train-Test split</h2><p>The evaluation of the model performance needs to be done on a separate test set. As such, we can estimate how well the model generalizes. This is done with the <strong><strong>train_test_split</strong></strong> method of scikit-learn.</p><pre><code>X_train, X_test, y_train, y_test = train_test_split(df.text, df.airline_sentiment, test_size=0.1, random_state=37)</code></pre><h2 id="converting-words-to-numbers">Converting words to numbers</h2><p>To use the text as input for a model, we first need to convert the words into tokens, which simply means converting the words into integers that refer to an index in a dictionary. Here we will only keep the most frequent words in the training set.</p><p>We clean up the text by applying <strong><strong>filters</strong></strong> and putting the words to <strong><strong>lowercase</strong></strong>. Words are separated by spaces.</p><pre><code class="language-python">tk = Tokenizer(num_words=NB_WORDS,
filters='!"#$%&amp;()*+,-./:;&lt;=&gt;?@[\\]^_`{"}~\t\n',
lower=True,
char_level=False,
split=' ')
tk.fit_on_texts(X_train)</code></pre><p>After having created the dictionary we can convert the text of a tweet to a vector with NB_WORDS values. With <strong><strong>mode=binary</strong></strong>, it contains an indicator whether the word appeared in the tweet or not. This is done with the <strong><strong>texts_to_matrix</strong></strong> method of the Tokenizer.</p><pre><code class="language-python">X_train_oh = tk.texts_to_matrix(X_train, mode='binary')
X_test_oh = tk.texts_to_matrix(X_test, mode='binary')</code></pre><h2 id="converting-the-target-classes-to-numbers">Converting the target classes to numbers</h2><p>We need to convert the target classes to numbers as well, which in turn are one-hot-encoded with the <strong><strong>to_categorical</strong></strong> method in Keras.</p><pre><code class="language-python">le = LabelEncoder()
y_train_le = le.fit_transform(y_train)
y_test_le = le.transform(y_test)
y_train_oh = to_categorical(y_train_le)
y_test_oh = to_categorical(y_test_le)</code></pre><h2 id="splitting-off-a-validation-set">Splitting off a validation set</h2><p>Now that our data is ready, we split off a validation set. This validation set will be used to evaluate the model performance when we tune the parameters of the model.</p><pre><code class="language-python">X_train_rest, X_valid, y_train_rest, y_valid = train_test_split(X_train_oh, y_train_oh, test_size=0.1, random_state=37)</code></pre><h1 id="deep-learning">Deep learning</h1><h2 id="creating-a-model-that-overfits">Creating a model that overfits</h2><p>We start with a model that overfits. It has 2 densely connected layers of 64 elements. The <strong><strong>input_shape</strong></strong> for the first layer is equal to the number of words we kept in the dictionary and for which we created one-hot-encoded features.</p><p>As we need to predict 3 different sentiment classes, the last layer has 3 elements. The <strong><strong>softmax</strong></strong> activation function makes sure the three probabilities sum up to 1.</p><p>The number of parameters to train is computed as <strong><strong>(nb inputs x nb elements in hidden layer) + nb bias terms</strong></strong>. The number of inputs for the first layer equals the number of words in our corpus. The subsequent layers have the number of outputs of the previous layer as inputs. So the number of parameters per layer are:</p><ul><li>First layer : (10000 x 64) + 64 = 640064</li><li>Second layer : (64 x 64) + 64 = 4160</li><li>Last layer : (64 x 3) + 3 = 195</li></ul><pre><code class="language-python">base_model = models.Sequential()
base_model.add(layers.Dense(64, activation='relu', input_shape=(NB_WORDS,)))
base_model.add(layers.Dense(64, activation='relu'))
base_model.add(layers.Dense(3, activation='softmax'))
base_model.name = 'Baseline model'</code></pre><p>Because this project is a multi-class, single-label prediction, we use <strong><strong>categorical_crossentropy</strong></strong> as the loss function and <strong><strong>softmax</strong></strong> as the final activation function. We fit the model on the train data and validate on the validation set. We run for a predetermined number of epochs and will see when the model starts to overfit.</p><pre><code class="language-python">base_history = deep_model(base_model, X_train_rest, y_train_rest, X_valid, y_valid)
base_min = optimal_epoch(base_history)
reduced_model.add(layers.Dense(16, activation='relu', input_shape=(NB_WORDS,)))
reduced_model.add(layers.Dense(3, activation='softmax'))
reduced_model.name = 'Reduced model'
reduced_history = deep_model(reduced_model, X_train_rest, y_train_rest, X_valid, y_valid)
reduced_min = optimal_epoch(reduced_history)
reg_model.add(layers.Dense(64, kernel_regularizer=regularizers.l2(0.001), activation='relu', input_shape=(NB_WORDS,)))
reg_model.add(layers.Dense(64, kernel_regularizer=regularizers.l2(0.001), activation='relu'))
reg_model.add(layers.Dense(3, activation='softmax'))
reg_model.name = 'L2 Regularization model'
reg_history = deep_model(reg_model, X_train_rest, y_train_rest, X_valid, y_valid)
drop_model.add(layers.Dense(64, activation='relu', input_shape=(NB_WORDS,)))
drop_model.add(layers.Dropout(0.5))
drop_model.add(layers.Dense(64, activation='relu'))
drop_model.add(layers.Dropout(0.5))
drop_model.add(layers.Dense(3, activation='softmax'))
drop_model.name = 'Dropout layers model'
drop_history = deep_model(drop_model, X_train_rest, y_train_rest, X_valid, y_valid)
drop_min = optimal_epoch(drop_history)
reduced_results = test_model(reduced_model, X_train_oh, y_train_oh, X_test_oh, y_test_oh, reduced_min)
reg_results = test_model(reg_model, X_train_oh, y_train_oh, X_test_oh, y_test_oh, reg_min)
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
