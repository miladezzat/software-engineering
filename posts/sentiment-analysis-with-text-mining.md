---
card: "/images/default.jpg"
tags: [Data Science]
description: "In this tutorial, I will explore some text mining techniques "
author: "Milad E. Fahmy"
title: "Sentiment Analysis with Text Mining"
created: "2021-08-15T23:32:40+02:00"
modified: "2021-08-15T23:32:40+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-data-science tag-machine-learning tag-text-mining tag-sentiment-analysis tag-nlp ">
<header class="post-full-header">
<h1 class="post-full-title">Sentiment Analysis with Text Mining</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2019/06/dictionary.jpeg 300w,
/news/content/images/size/w600/2019/06/dictionary.jpeg 600w,
/news/content/images/size/w1000/2019/06/dictionary.jpeg 1000w,
/news/content/images/size/w2000/2019/06/dictionary.jpeg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2019/06/dictionary.jpeg" alt="Sentiment Analysis with Text Mining">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>In this tutorial, I will explore some text mining techniques for sentiment analysis. We'll look at how to prepare textual data. After that we will try two different classifiers to infer the tweets' sentiment. We will tune the hyperparameters of both classifiers with grid search. Finally, we evaluate the performance on a set of metrics like precision, recall and the F1 score.</p><p>For this project, we'll be working with the <a href="https://www.kaggle.com/crowdflower/twitter-airline-sentiment" rel="noopener">Twitter US Airline Sentiment data set on Kaggle</a>. It contains the tweet’s text and one variable with three possible sentiment values. Let's start by importing the packages and configuring some settings.</p><pre><code class="language-python">import numpy as np
import pandas as pd
pd.set_option('display.max_colwidth', -1)
from time import time
import re
import string
import os
import emoji
from pprint import pprint
import collections
import matplotlib.pyplot as plt
import seaborn as sns
sns.set(style="darkgrid")
sns.set(font_scale=1.3)
from sklearn.base import BaseEstimator, TransformerMixin
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.model_selection import GridSearchCV
from sklearn.model_selection import train_test_split
from sklearn.pipeline import Pipeline, FeatureUnion
from sklearn.metrics import classification_report
from sklearn.naive_bayes import MultinomialNB
from sklearn.linear_model import LogisticRegression
from sklearn.externals import joblib
import gensim
from nltk.corpus import stopwords
from nltk.stem import PorterStemmer
from nltk.tokenize import word_tokenize
import warnings
warnings.filterwarnings('ignore')
np.random.seed(37)</code></pre><h2 id="loading-the-data">Loading the data</h2><p>We read in the comma separated file we downloaded from the Kaggle Datasets. We shuffle the data frame in case the classes are sorted. Applying the <code>reindex</code> method on the <code>permutation</code> of the original indices is good for that. In this notebook, we will work with the <code>text</code> variable and the <code>airline_sentiment</code> variable.</p><pre><code class="language-python">df = pd.read_csv('../input/Tweets.csv')
df = df.reindex(np.random.permutation(df.index))
df = df[['text', 'airline_sentiment']]</code></pre><h2 id="exploratory-data-analysis">Exploratory Data Analysis</h2><h3 id="target-variable">Target variable</h3><p>There are three class labels we will predict: negative, neutral or positive.</p><p>The class labels are imbalanced as we can see below in the chart. This is something that we should keep in mind during the model training phase. With the <code>factorplot</code> of the seaborn package, we can visualize the distribution of the target variable.</p><pre><code class="language-python">sns.factorplot(x="airline_sentiment", data=df, kind="count", size=6, aspect=1.5, palette="PuBuGn_d")
def count_regex(self, pattern, tweet):
return len(re.findall(pattern, tweet))
def fit(self, X, y=None, **fit_params):
# fit method is used when specific operations need to be done on the train data, but not on the test data
return self
def transform(self, X, **transform_params):
count_words = X.apply(lambda x: self.count_regex(r'\w+', x))
count_mentions = X.apply(lambda x: self.count_regex(r'@\w+', x))
count_hashtags = X.apply(lambda x: self.count_regex(r'#\w+', x))
count_capital_words = X.apply(lambda x: self.count_regex(r'\b[A-Z]{2,}\b', x))
count_excl_quest_marks = X.apply(lambda x: self.count_regex(r'!|\?', x))
count_urls = X.apply(lambda x: self.count_regex(r'http.?://[^\s]+[\s]?', x))
# We will replace the emoji symbols with a description, which makes using a regex for counting easier
# Moreover, it will result in having more words in the tweet
count_emojis = X.apply(lambda x: emoji.demojize(x)).apply(lambda x: self.count_regex(r':[a-z_&amp;]+:', x))
df = pd.DataFrame({'count_words': count_words
, 'count_mentions': count_mentions
, 'count_hashtags': count_hashtags
, 'count_capital_words': count_capital_words
, 'count_excl_quest_marks': count_excl_quest_marks
, 'count_urls': count_urls
, 'count_emojis': count_emojis
})
return df
tc = TextCounts()
df_eda = tc.fit_transform(df.text)
df_eda['airline_sentiment'] = df.airline_sentiment</code></pre><p>It could be interesting to see how the TextStats variables relate to the class variable. So we write a function <code>show_dist</code> that provides descriptive statistics and a plot per target class.</p><pre><code class="language-python">def show_dist(df, col):
print('Descriptive stats for {}'.format(col))
print('-'*(len(col)+22))
print(df.groupby('airline_sentiment')[col].describe())
bins = np.arange(df[col].min(), df[col].max() + 1)
g = sns.FacetGrid(df, col='airline_sentiment', size=5, hue='airline_sentiment', palette="PuBuGn_d")
g = g.map(sns.distplot, col, kde=False, norm_hist=True, bins=bins)
def remove_mentions(self, input_text):
return re.sub(r'@\w+', '', input_text)
def remove_urls(self, input_text):
return re.sub(r'http.?://[^\s]+[\s]?', '', input_text)
def emoji_oneword(self, input_text):
# By compressing the underscore, the emoji is kept as one word
return input_text.replace('_','')
def remove_punctuation(self, input_text):
# Make translation table
punct = string.punctuation
trantab = str.maketrans(punct, len(punct)*' ')  # Every punctuation symbol will be replaced by a space
return input_text.translate(trantab)
def remove_digits(self, input_text):
return re.sub('\d+', '', input_text)
def to_lower(self, input_text):
return input_text.lower()
def remove_stopwords(self, input_text):
stopwords_list = stopwords.words('english')
# Some words which might indicate a certain sentiment are kept via a whitelist
whitelist = ["n't", "not", "no"]
words = input_text.split()
clean_words = [word for word in words if (word not in stopwords_list or word in whitelist) and len(word) &gt; 1]
return " ".join(clean_words)
def stemming(self, input_text):
porter = PorterStemmer()
words = input_text.split()
stemmed_words = [porter.stem(word) for word in words]
return " ".join(stemmed_words)
def fit(self, X, y=None, **fit_params):
return self
def transform(self, X, **transform_params):
clean_X = X.apply(self.remove_mentions).apply(self.remove_urls).apply(self.emoji_oneword).apply(self.remove_punctuation).apply(self.remove_digits).apply(self.to_lower).apply(self.remove_stopwords).apply(self.stemming)
return clean_X</code></pre><p>To show how the cleaned text variable will look like, here’s a sample.</p><pre><code class="language-python">ct = CleanText()
sr_clean = ct.fit_transform(df.text)
sr_clean.sample(5)</code></pre><blockquote><em><em>glad rt bet bird wish flown south winter</em></em><br><em><em>point upc code check baggag tell luggag vacat day tri swimsuit</em></em><br><em><em>vx jfk la dirti plane not standard</em></em><br><em><em>tell mean work need estim time arriv pleas need laptop work thank</em></em><br><em><em>sure busi go els airlin travel name kathryn sotelo</em></em></blockquote><p>One side-effect of text cleaning is that some rows do not have any words left in their text. For the <code>CountVectorizer</code> and <code>TfIdfVectorizer</code> this does not pose a problem. Yet, for the <code>Word2Vec</code> algorithm this causes an error. There are different strategies to deal with these missing values.</p><ul><li>Remove the complete row, but in a production environment this is not desirable.</li><li>Impute the missing value with some placeholder text like *[no_text]*</li><li>When applying Word2Vec: use the average of all vectors</li></ul><p>Here we will impute with placeholder text.</p><pre><code class="language-python">empty_clean = sr_clean == ''
print('{} records have no words left after text cleaning'.format(sr_clean[empty_clean].count()))
sr_clean.loc[empty_clean] = '[no_text]'</code></pre><p>Now that we have the cleaned text of the tweets, we can have a look at what are the most frequent words. Below we’ll show the top 20 words. The most frequent word is “flight”.</p><pre><code class="language-python">cv = CountVectorizer()
bow = cv.fit_transform(sr_clean)
word_freq = dict(zip(cv.get_feature_names(), np.asarray(bow.sum(axis=0)).ravel()))
word_counter = collections.Counter(word_freq)
word_counter_df = pd.DataFrame(word_counter.most_common(20), columns = ['word', 'freq'])
fig, ax = plt.subplots(figsize=(12, 10))
sns.barplot(x="word", y="freq", data=word_counter_df, palette="PuBuGn_d", ax=ax)
df_model['clean_text'] = sr_clean
df_model.columns.tolist()</code></pre><p>So <code>df_model</code> now contains several variables. But our vectorizers (see below) will only need the <code>clean_text</code> variable. The <code>TextCounts</code>variables can be added as such. To select columns, I wrote the class <code>ColumnExtractor</code> below.</p><pre><code class="language-python">class ColumnExtractor(TransformerMixin, BaseEstimator):
def __init__(self, cols):
self.cols = cols
def transform(self, X, **transform_params):
return X[self.cols]
def fit(self, X, y=None, **fit_params):
return self
X_train, X_test, y_train, y_test = train_test_split(df_model.drop('airline_sentiment', axis=1), df_model.airline_sentiment, test_size=0.1, random_state=37)</code></pre><h2 id="hyperparameter-tuning-and-cross-validation">Hyperparameter tuning and cross-validation</h2><p>As we will see below, the vectorizers and classifiers all have configurable parameters. To choose the best parameters, we need to test on a separate validation set. This validation set was not used during the training. Yet, using only one validation set may not produce reliable validation results. Due to chance, you might have a good model performance on the validation set. If you would split the data otherwise, you might end up with other results. To get a more accurate estimation, we perform cross-validation.</p><p>With cross-validation we split the data into a train and validation set many times. The evaluation metric is then averaged over the different folds. Luckily, GridSearchCV applies cross-validation out-of-the-box.</p><p>To find the best parameters for both a vectorizer and classifier, we create a <code>Pipeline</code>.</p><h2 id="evaluation-metrics">Evaluation metrics</h2><p>By default GridSearchCV uses the default scorer to compute the <code>best_score_</code>. For both the <code>MultiNomialNb</code> and <code>LogisticRegression</code> this default scoring metric is accuracy.</p><p>In our function <code>grid_vect</code>we additionally generate the <code>classification_report</code> on the test data. This provides some interesting metrics per target class. This might be more appropriate here. These metrics are the precision, recall and F1 score<strong><strong>.</strong></strong></p><ul><li>Precision<strong><strong>: </strong></strong>Of all rows we predicted to be a certain class, how many did we correctly predict?</li><li>Recall<strong><strong>: </strong></strong>Of all rows of a certain class, how many did we correctly predict?</li><li>F1 score<strong><strong>: </strong></strong>Harmonic mean of Precision and Recall.</li></ul><p>With the elements of the <a href="https://en.wikipedia.org/wiki/Confusion_matrix" rel="noopener">confusion matrix</a> we can calculate Precision and Recall.</p><pre><code class="language-python"># Based on http://scikit-learn.org/stable/auto_examples/model_selection/grid_search_text_feature_extraction.html
def grid_vect(clf, parameters_clf, X_train, X_test, parameters_text=None, vect=None, is_w2v=False):
textcountscols = ['count_capital_words','count_emojis','count_excl_quest_marks','count_hashtags'
,'count_mentions','count_urls','count_words']
if is_w2v:
w2vcols = []
for i in range(SIZE):
w2vcols.append(i)
features = FeatureUnion([('textcounts', ColumnExtractor(cols=textcountscols))
, ('w2v', ColumnExtractor(cols=w2vcols))]
, n_jobs=-1)
else:
features = FeatureUnion([('textcounts', ColumnExtractor(cols=textcountscols))
, ('pipe', Pipeline([('cleantext', ColumnExtractor(cols='clean_text')), ('vect', vect)]))]
, n_jobs=-1)
pipeline = Pipeline([
('features', features)
, ('clf', clf)
])
# Join the parameters dictionaries together
parameters = dict()
if parameters_text:
parameters.update(parameters_text)
parameters.update(parameters_clf)
# Make sure you have scikit-learn version 0.19 or higher to use multiple scoring metrics
grid_search = GridSearchCV(pipeline, parameters, n_jobs=-1, verbose=1, cv=5)
print("Performing grid search...")
print("pipeline:", [name for name, _ in pipeline.steps])
print("parameters:")
pprint(parameters)
t0 = time()
grid_search.fit(X_train, y_train)
print("done in %0.3fs" % (time() - t0))
print()
print("Best CV score: %0.3f" % grid_search.best_score_)
print("Best parameters set:")
best_parameters = grid_search.best_estimator_.get_params()
for param_name in sorted(parameters.keys()):
print("\t%s: %r" % (param_name, best_parameters[param_name]))
print("Test score with best_estimator_: %0.3f" % grid_search.best_estimator_.score(X_test, y_test))
print("\n")
print("Classification Report Test Data")
print(classification_report(y_test, grid_search.best_estimator_.predict(X_test)))
return grid_search</code></pre><h2 id="parameter-grids-for-gridsearchcv">Parameter grids for GridSearchCV</h2><p>In the grid search, we will investigate the performance of the classifier. The set of parameters used to test the performance are specified below.</p><pre><code class="language-python"># Parameter grid settings for the vectorizers (Count and TFIDF)
parameters_vect = {
'features__pipe__vect__max_df': (0.25, 0.5, 0.75),
'features__pipe__vect__ngram_range': ((1, 1), (1, 2)),
'features__pipe__vect__min_df': (1,2)
}
# Parameter grid settings for MultinomialNB
parameters_mnb = {
'clf__alpha': (0.25, 0.5, 0.75)
}
# Parameter grid settings for LogisticRegression
parameters_logreg = {
'clf__C': (0.25, 0.5, 1.0),
'clf__penalty': ('l1', 'l2')
}</code></pre><h2 id="classifiers">Classifiers</h2><p>Here we will compare the performance of a <code>MultinomialNB</code>and <code>LogisticRegression</code>.</p><pre><code class="language-python">mnb = MultinomialNB()
logreg = LogisticRegression()</code></pre><h3 id="countvectorizer">CountVectorizer</h3><p>To use words in a classifier, we need to convert the words to numbers. Sklearn’s <code>CountVectorizer</code> takes all words in all tweets, assigns an ID and counts the frequency of the word per tweet. We then use this bag of words as input for a classifier. This bag of words is a sparse data set. This means that each record will have many zeroes for the words not occurring in the tweet.</p><pre><code class="language-python">countvect = CountVectorizer()
# MultinomialNB
best_mnb_countvect = grid_vect(mnb, parameters_mnb, X_train, X_test, parameters_text=parameters_vect, vect=countvect)
joblib.dump(best_mnb_countvect, '../output/best_mnb_countvect.pkl')
# LogisticRegression
best_logreg_countvect = grid_vect(logreg, parameters_logreg, X_train, X_test, parameters_text=parameters_vect, vect=countvect)
joblib.dump(best_logreg_countvect, '../output/best_logreg_countvect.pkl')</code></pre><h3 id="tf-idf-vectorizer">TF-IDF Vectorizer</h3><p>One issue with CountVectorizer is that there might be words that occur frequently. These words might not have discriminatory information. Thus they can be removed. <a href="https://en.wikipedia.org/wiki/Tf%E2%80%93idf" rel="noopener">TF-IDF (term frequency — inverse document frequency)</a>can be used to down-weight these frequent words.</p><pre><code class="language-python">tfidfvect = TfidfVectorizer()
# MultinomialNB
best_mnb_tfidf = grid_vect(mnb, parameters_mnb, X_train, X_test, parameters_text=parameters_vect, vect=tfidfvect)
joblib.dump(best_mnb_tfidf, '../output/best_mnb_tfidf.pkl')
# LogisticRegression
best_logreg_tfidf = grid_vect(logreg, parameters_mnb, X_train, X_test, parameters_text=parameters_vect, vect=tfidfvect)
joblib.dump(best_logreg_tfidf, '../output/best_logreg_tfidf.pkl')</code></pre><h3 id="word2vec">Word2Vec</h3><p>Another way of converting the words to numerical values is to use <code>Word2Vec</code>. Word2Vec maps each word in a multi-dimensional space. It does this by taking into account the context in which a word appears in the tweets. As a result, words that are similar are also close to each other in the multi-dimensional space.</p><p>The Word2Vec algorithm is part of the <a href="https://radimrehurek.com/gensim/models/word2vec.html" rel="noopener">gensim</a> package.</p><p>The Word2Vec algorithm uses lists of words as input. For that purpose, we use the <code>word_tokenize</code> method of the the <code>nltk</code> package.</p><pre><code class="language-python">SIZE = 50
X_train['clean_text_wordlist'] = X_train.clean_text.apply(lambda x : word_tokenize(x))
X_test['clean_text_wordlist'] = X_test.clean_text.apply(lambda x : word_tokenize(x))
model = gensim.models.Word2Vec(X_train.clean_text_wordlist
, min_count=1
, size=SIZE
, window=5
, workers=4)
model.most_similar('plane', topn=3)</code></pre><p>The Word2Vec model provides a vocabulary of the words in all the tweets. For each word you also have its vector values. The number of vector values is equal to the chosen size. These are the dimensions on which each word is mapped in the multi-dimensional space. Words with an occurrence less than <code>min_count</code> are not kept in the vocabulary.</p><p>A side effect of the min_count parameter is that some tweets could have no vector values. This is would be the case when the word(s) in the tweet occur in less than min_count<em> </em>tweets. Due to the small corpus of tweets, there is a risk of this happening in our case. Thus we set the min_count value equal to 1.</p><p>The tweets can have a different number of vectors, depending on the number of words it contains. To use this output for modeling we will calculate the average of all vectors per tweet. As such we will have the same number (i.e. size) of input variables per tweet.</p><p>We do this with the function <code>compute_avg_w2v_vector</code>. In this function we also check whether the words in the tweet occur in the vocabulary of the Word2Vec model. If not, a list filled with 0.0 is returned. Else the average of the word vectors.</p><pre><code class="language-python">def compute_avg_w2v_vector(w2v_dict, tweet):
list_of_word_vectors = [w2v_dict[w] for w in tweet if w in w2v_dict.vocab.keys()]
if len(list_of_word_vectors) == 0:
result = [0.0]*SIZE
else:
result = np.sum(list_of_word_vectors, axis=0) / len(list_of_word_vectors)
return result
X_train_w2v = X_train['clean_text_wordlist'].apply(lambda x: compute_avg_w2v_vector(model.wv, x))
X_test_w2v = X_test['clean_text_wordlist'].apply(lambda x: compute_avg_w2v_vector(model.wv, x))</code></pre><p>This gives us a Series with a vector of dimension equal to <code>SIZE</code>. Now we will split this vector and create a DataFrame with each vector value in a separate column. That way we can concatenate the Word2Vec variables to the other TextCounts variables. We need to reuse the index of <code>X_train</code> and <code>X_test</code>. Otherwise this will give issues (duplicates) in the concatenation later on.</p><pre><code class="language-python">X_train_w2v = pd.DataFrame(X_train_w2v.values.tolist(), index= X_train.index)
X_test_w2v = pd.DataFrame(X_test_w2v.values.tolist(), index= X_test.index)
# Concatenate with the TextCounts variables
X_train_w2v = pd.concat([X_train_w2v, X_train.drop(['clean_text', 'clean_text_wordlist'], axis=1)], axis=1)
X_test_w2v = pd.concat([X_test_w2v, X_test.drop(['clean_text', 'clean_text_wordlist'], axis=1)], axis=1)</code></pre><p>We only consider LogisticRegression as we have negative values in the Word2Vec vectors. MultinomialNB assumes that the variables have a <a href="https://en.wikipedia.org/wiki/Multinomial_distribution" rel="noopener">multinomial distribution</a>. So they cannot contain negative values.</p><pre><code class="language-python">best_logreg_w2v = grid_vect(logreg, parameters_logreg, X_train_w2v, X_test_w2v, is_w2v=True)
joblib.dump(best_logreg_w2v, '../output/best_logreg_w2v.pkl')</code></pre><h2 id="conclusion">Conclusion</h2><ul><li>Both classifiers achieve the best results when using the features of the CountVectorizer</li><li>Logistic Regression outperforms the Multinomial Naive Bayes classifier</li><li>The best performance on the test set comes from the LogisticRegression with features from CountVectorizer.</li></ul><h3 id="best-parameters">Best parameters</h3><ul><li>C value of 1</li><li>L2 regularization</li><li>max_df: 0.5 or maximum document frequency of 50%.</li><li>min_df: 1 or the words need to appear in at least 2 tweets</li><li>ngram_range: (1, 2), both single words as bi-grams are used</li></ul><h3 id="evaluation-metrics-1">Evaluation metrics</h3><ul><li>A test accuracy of 81,3%. This is better than a baseline performance of predicting the majority class (here a negative sentiment) for all observations. The baseline would give 63% accuracy.</li><li>The Precision is rather high for all three classes. For instance, of all cases that we predict as negative, 80% is negative.</li><li>The Recall for the neutral class is low. Of all neutral cases in our test data, we only predict 48% as being neutral.</li></ul><h2 id="apply-the-best-model-on-new-tweets">Apply the best model on new tweets</h2><p>For the fun, we will use the best model and apply it to some new tweets that contain <em>@VirginAmerica</em>. I selected 3 negative and 3 positive tweets by hand.</p><p>Thanks to the GridSearchCV, we now know what are the best hyperparameters. So now we can train the best model on all training data, including the test data that we split off before.</p><pre><code class="language-python">textcountscols = ['count_capital_words','count_emojis','count_excl_quest_marks','count_hashtags'
,'count_mentions','count_urls','count_words']
features = FeatureUnion([('textcounts', ColumnExtractor(cols=textcountscols))
, ('pipe', Pipeline([('cleantext', ColumnExtractor(cols='clean_text'))
, ('vect', CountVectorizer(max_df=0.5, min_df=1, ngram_range=(1,2)))]))]
, n_jobs=-1)
pipeline = Pipeline([
('features', features)
, ('clf', LogisticRegression(C=1.0, penalty='l2'))
])
best_model = pipeline.fit(df_model.drop('airline_sentiment', axis=1), df_model.airline_sentiment)
# Applying on new positive tweets
new_positive_tweets = pd.Series(["Thank you @VirginAmerica for you amazing customer support team on Tuesday 11/28 at @EWRairport and returning my lost bag in less than 24h! #efficiencyiskey #virginamerica"
,"Love flying with you guys ask these years. Sad that this will be the last trip ? @VirginAmerica #LuxuryTravel"
,"Wow @VirginAmerica main cabin select is the way to fly!! This plane is nice and clean &amp; I have tons of legroom! Wahoo! NYC bound! ✈️"])
df_counts_pos = tc.transform(new_positive_tweets)
df_clean_pos = ct.transform(new_positive_tweets)
df_model_pos = df_counts_pos
df_model_pos['clean_text'] = df_clean_pos
best_model.predict(df_model_pos).tolist()
# Applying on new negative tweets
new_negative_tweets = pd.Series(["@VirginAmerica shocked my initially with the service, but then went on to shock me further with no response to what my complaint was. #unacceptable @Delta @richardbranson"
,"@VirginAmerica this morning I was forced to repack a suitcase w a medical device because it was barely overweight - wasn't even given an option to pay extra. My spouses suitcase then burst at the seam with the added device and had to be taped shut. Awful experience so far!"
,"Board airplane home. Computer issue. Get off plane, traverse airport to gate on opp side. Get on new plane hour later. Plane too heavy. 8 volunteers get off plane. Ohhh the adventure of travel ✈️ @VirginAmerica"])
df_counts_neg = tc.transform(new_negative_tweets)
df_clean_neg = ct.transform(new_negative_tweets)
df_model_neg = df_counts_neg
df_model_neg['clean_text'] = df_clean_neg
best_model.predict(df_model_neg).tolist()</code></pre><p>The model classifies all tweets correctly. A larger test set should be used to assess the model’s performance. But on this small data set it does what we are aiming for. I hope you enjoyed reading this story. If you did, feel free to share it.</p>
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
