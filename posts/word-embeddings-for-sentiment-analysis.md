---
card: "/images/default.jpg"
tags: [NLP]
description: "When applying one-hot encoding to words, we end up with spars"
author: "Milad E. Fahmy"
title: "A Deep Dive into Word Embeddings for Sentiment Analysis"
created: "2021-08-16T15:37:57+02:00"
modified: "2021-08-16T15:37:57+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-nlp tag-text-mining tag-machine-learning tag-python tag-sentiment-analysis tag-keras ">
<header class="post-full-header">
<h1 class="post-full-title">A Deep Dive into Word Embeddings for Sentiment Analysis</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/01/1_u9pwb9JShvDIU7j1G9iszQ.jpeg 300w,
/news/content/images/size/w600/2020/01/1_u9pwb9JShvDIU7j1G9iszQ.jpeg 600w,
/news/content/images/size/w1000/2020/01/1_u9pwb9JShvDIU7j1G9iszQ.jpeg 1000w,
/news/content/images/size/w2000/2020/01/1_u9pwb9JShvDIU7j1G9iszQ.jpeg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/01/1_u9pwb9JShvDIU7j1G9iszQ.jpeg" alt="A Deep Dive into Word Embeddings for Sentiment Analysis">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>When applying one-hot encoding to words, we end up with sparse (containing many zeros) vectors of high dimensionality. On large data sets, this could cause performance issues. </p><p>Additionally, one-hot encoding does not take into account the semantics of the words. So words like <em><em>airplane</em></em> and <em><em>aircraft</em></em> are considered to be two different features while we know that they have a very similar meaning. Word embeddings address these two issues.</p><p>Word embeddings are dense vectors with much lower dimensionality. Secondly, the semantic relationships between words are reflected in the distance and direction of the vectors.</p><p>We will work with the <a href="https://www.kaggle.com/crowdflower/twitter-airline-sentiment" rel="noopener nofollow">TwitterAirlineSentiment data set on Kaggle</a>. This data set contains roughly 15K tweets with 3 possible classes for the sentiment (positive, negative and neutral). In my previous post, we tried to <a href="/news/sentiment-analysis-with-text-mining/">classify the tweets </a>by tokenizing the words and applying two classifiers. Let’s see if word embeddings can outperform that.</p><p>After reading this tutorial you will know how to compute task-specific word embeddings with the Embedding layer of <strong><strong>Keras</strong></strong>. Secondly, we will investigate whether word embeddings trained on a larger corpus can improve the accuracy of our model.</p><p>The structure of this tutorial is:</p><ul><li>Intuition behind word embeddings</li><li>Project set-up</li><li>Data preparation</li><li>Keras and its Embedding layer</li><li>Pre-trained word embeddings — GloVe</li><li>Training word embeddings with more dimensions</li></ul><h1 id="intuition-behind-word-embeddings">Intuition behind word embeddings</h1><p>Before we can use words in a classifier, we need to convert them into numbers. One way to do that is to simply map words to integers. Another way is to one-hot encode words. Each tweet could then be represented as a vector with a dimension equal to (a limited set of) the words in the corpus. The words occurring in the tweet have a value of 1 in the vector. All other vector values equal zero.</p><p>Word embeddings are computed differently. Each word is positioned into a <strong><strong><em><em>multi-dimensional space</em></em></strong></strong>. The number of dimensions in this space is chosen by the data scientist. You can experiment with different dimensions and see what provides the best result.</p><p>The <strong><strong><em><em>vector values for a word represent its position</em></em></strong></strong> in this embedding space. Synonyms are found close to each other while words with opposite meanings have a large distance between them. You can also apply mathematical operations on the vectors which should produce semantically correct results. A typical example is that the sum of the word embeddings of <em><em>king</em></em> and <em><em>female</em></em> produces the word embedding of <em><em>queen</em></em>.</p><h1 id="project-set-up">Project set-up</h1><p>Let’s start by importing all packages for this project.</p><pre><code class="language-python">import pandas as pd
import numpy as np
import re
import collections
import matplotlib.pyplot as plt
from pathlib import Path
from sklearn.model_selection import train_test_split
from nltk.corpus import stopwords
from keras.preprocessing.text import Tokenizer
from keras.preprocessing.sequence import pad_sequences
from keras.utils.np_utils import to_categorical
from sklearn.preprocessing import LabelEncoder
from keras import models
from keras import layers</code></pre><p>We define some parameters and paths used throughout the project. Most of them are self-explanatory. But others will be explained further in the code.</p><pre><code class="language-python">NB_WORDS = 10000  # Parameter indicating the number of words we'll put in the dictionary
VAL_SIZE = 1000  # Size of the validation set
NB_START_EPOCHS = 10  # Number of epochs we usually start to train with
BATCH_SIZE = 512  # Size of the batches used in the mini-batch gradient descent
MAX_LEN = 24  # Maximum number of words in a sequence
GLOVE_DIM = 100  # Number of dimensions of the GloVe word embeddings
root = Path('../')
input_path = root / 'input/'
ouput_path = root / 'output/'
source_path = root / 'source/'</code></pre><p>Throughout this code, we will also use some helper functions for data preparation, modeling and visualization. These function definitions are not shown here to keep the blog post clutter free. You can always refer to the<a href="https://github.com/bertcarremans/TwitterUSAirlineSentiment/blob/master/source/Using%20Word%20Embeddings%20for%20Sentiment%20Analysis.ipynb" rel="noopener nofollow"> notebook in Github</a> to look at the code.</p><h1 id="data-preparation">Data preparation</h1><h2 id="reading-the-data-and-cleaning">Reading the data and cleaning</h2><p>We read in the CSV file with the tweets and apply a random shuffle on its indexes. After that, we remove stop words and @ mentions. A test set of 10% is split off to evaluate the model on new data.</p><pre><code class="language-python">df = pd.read_csv(input_path / 'Tweets.csv')
df = df.reindex(np.random.permutation(df.index))
df = df[['text', 'airline_sentiment']]
df.text = df.text.apply(remove_stopwords).apply(remove_mentions)
X_train, X_test, y_train, y_test = train_test_split(df.text, df.airline_sentiment, test_size=0.1, random_state=37)</code></pre><h2 id="convert-words-into-integers">Convert words into integers</h2><p>With the <strong><strong><em><em>Tokenizer</em></em></strong></strong> from Keras, we convert the tweets into sequences of integers. We limit the number of words to the <strong><strong><em><em>NB_WORDS</em></em></strong></strong> most frequent words. Additionally, the tweets are cleaned with some filters, set to lowercase and split on spaces.</p><pre><code class="language-python">tk = Tokenizer(num_words=NB_WORDS,
filters='!"#$%&amp;()*+,-./:;&lt;=&gt;?@[\]^_`{"}~\t\n',lower=True, split=" ")
tk.fit_on_texts(X_train)
X_train_seq = tk.texts_to_sequences(X_train)
X_test_seq = tk.texts_to_sequences(X_test)</code></pre><h2 id="equal-length-of-sequences">Equal length of sequences</h2><p>Each batch needs to provide sequences of equal length. We achieve this with the <strong><strong><em><em>pad_sequences</em></em></strong></strong> method. By specifying <strong><strong><em><em>maxlen</em></em></strong></strong>, the sequences or padded with zeros or truncated.</p><pre><code class="language-python">X_train_seq_trunc = pad_sequences(X_train_seq, maxlen=MAX_LEN)
X_test_seq_trunc = pad_sequences(X_test_seq, maxlen=MAX_LEN)</code></pre><h2 id="encoding-the-target-variable">Encoding the target variable</h2><p>The target classes are strings which need to be converted into numeric vectors. This is done with the <strong><strong><em><em>LabelEncoder</em></em></strong></strong> from Sklearn and the <strong><strong><em><em>to_categorical</em></em></strong></strong> method from Keras.</p><pre><code class="language-python">le = LabelEncoder()
y_train_le = le.fit_transform(y_train)
y_test_le = le.transform(y_test)
y_train_oh = to_categorical(y_train_le)
y_test_oh = to_categorical(y_test_le)</code></pre><h2 id="splitting-off-the-validation-set">Splitting off the validation set</h2><p>From the training data, we split off a validation set of 10% to use during training.</p><pre><code class="language-python">X_train_emb, X_valid_emb, y_train_emb, y_valid_emb = train_test_split(X_train_seq_trunc, y_train_oh, test_size=0.1, random_state=37)</code></pre><h1 id="modeling">Modeling</h1><h2 id="keras-and-the-embedding-layer">Keras and the Embedding layer</h2><p>Keras provides a convenient way to convert each word into a multi-dimensional vector. This can be done with the <strong><strong><em><em>Embedding</em></em></strong></strong> layer. It will compute the word embeddings (or use pre-trained embeddings) and look up each word in a dictionary to find its vector representation. Here we will train word embeddings with 8 dimensions.</p><pre><code class="language-python">emb_model = models.Sequential()
emb_model.add(layers.Embedding(NB_WORDS, 8, input_length=MAX_LEN))
emb_model.add(layers.Flatten())
emb_model.add(layers.Dense(3, activation='softmax'))
print('/n')
print('Test accuracy of word embeddings model: {0:.2f}%'.format(emb_results[1]*100))</code></pre><h2 id="pre-trained-word-embeddings-glove">Pre-trained word embeddings — Glove</h2><p>Because the training data is not so large, the model might not be able to learn good embeddings for the sentiment analysis. Alternatively, we can load pre-trained word embeddings built on a much larger training data.</p><p>The <a href="https://nlp.stanford.edu/projects/glove/" rel="noopener nofollow">GloVe database</a> contains multiple pre-trained word embeddings, and more specific <strong><strong><em><em>embeddings trained on tweets</em></em></strong></strong>. So this might be useful for the task at hand.</p><p>First, we put the word embeddings in a dictionary where the keys are the words and the values the word embeddings.</p><pre><code class="language-python">glove_file = 'glove.twitter.27B.' + str(GLOVE_DIM) + 'd.txt'
emb_dict = {}
glove = open(input_path / glove_file)
for line in glove:
values = line.split()
word = values[0]
vector = np.asarray(values[1:], dtype='float32')
emb_dict[word] = vector
glove.close()</code></pre><p>With the GloVe embeddings loaded in a dictionary, we can look up the embedding for each word in the corpus of the airline tweets. These will be stored in a matrix with a shape of <strong><strong><em><em>NB_WORDS</em></em></strong></strong> and <strong><strong><em><em>GLOVE_DIM</em></em></strong></strong>. If a word is not found in the GloVe dictionary, the word embedding values for the word are zero.</p><pre><code class="language-python">emb_matrix = np.zeros((NB_WORDS, GLOVE_DIM))
for w, i in tk.word_index.items():
if i &lt; NB_WORDS:
vect = emb_dict.get(w)
if vect is not None:
emb_matrix[i] = vect
else:
break</code></pre><p>Then we specify the model just like we did with the model above.</p><pre><code class="language-python">glove_model = models.Sequential()
glove_model.add(layers.Embedding(NB_WORDS, GLOVE_DIM, input_length=MAX_LEN))
glove_model.add(layers.Flatten())
glove_model.add(layers.Dense(3, activation='softmax'))</code></pre><p>In the Embedding layer (which is layer 0 here) we <strong><strong><em><em>set the weights</em></em></strong></strong> for the words to those found in the GloVe word embeddings. By setting <strong><strong><em><em>trainable</em></em></strong></strong> to False we make sure that the GloVe word embeddings cannot be changed. After that, we run the model.</p><pre><code class="language-python">glove_model.layers[0].set_weights([emb_matrix])
glove_model.layers[0].trainable = False
print('/n')
print('Test accuracy of word glove model: {0:.2f}%'.format(glove_results[1]*100))</code></pre><p>As a final exercise, let’s see what results we get when we train the embeddings with the same number of dimensions as the GloVe data.</p><h2 id="training-word-embeddings-with-more-dimensions">Training word embeddings with more dimensions</h2><p>We will train the word embeddings with the same number of dimensions as the GloVe embeddings (i.e. GLOVE_DIM).</p><pre><code class="language-python">emb_model2 = models.Sequential()
emb_model2.add(layers.Embedding(NB_WORDS, GLOVE_DIM, input_length=MAX_LEN))
emb_model2.add(layers.Flatten())
emb_model2.add(layers.Dense(3, activation='softmax'))
print('/n')
print('Test accuracy of word embedding model 2: {0:.2f}%'.format(emb_results2[1]*100))</code></pre><p>On the test data we get good results, but we do not outperform the LogisticRegression with the CountVectorizer. So there is still room for improvement.</p><h1 id="conclusion">Conclusion</h1><p>The best result is achieved with 100-dimensional word embeddings that are trained on the available data. This even outperforms the use of word embeddings that were trained on a much larger Twitter corpus.</p><p>Until now we have just put a Dense layer on the flattened embeddings. By doing this, <strong><strong><em><em>we do not take into account the relationships between the words</em></em></strong></strong> in the tweet. This can be achieved with a recurrent neural network or a 1D convolutional network. But that’s something for a future post :)</p>
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
