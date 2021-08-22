---
card: "/images/default.jpg"
tags: [Python]
description: "Natural Language Processing (NLP) is one of the most importan"
author: "Milad E. Fahmy"
title: "How to Use Texthero to Prep a Text-based Dataset for Your NLP Project"
created: "2021-08-16T15:35:53+02:00"
modified: "2021-08-16T15:35:53+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-python tag-nlp tag-data-analysis ">
<header class="post-full-header">
<h1 class="post-full-title">How to Use Texthero to Prep a Text-based Dataset for Your NLP Project</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/07/priscilla-du-preez-I79wWVFyhEQ-unsplash.jpg 300w,
/news/content/images/size/w600/2020/07/priscilla-du-preez-I79wWVFyhEQ-unsplash.jpg 600w,
/news/content/images/size/w1000/2020/07/priscilla-du-preez-I79wWVFyhEQ-unsplash.jpg 1000w,
/news/content/images/size/w2000/2020/07/priscilla-du-preez-I79wWVFyhEQ-unsplash.jpg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/07/priscilla-du-preez-I79wWVFyhEQ-unsplash.jpg" alt="How to Use Texthero to Prep a Text-based Dataset for Your NLP Project">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
import texthero as hero
import pandas as pd</code></pre><p>Then we'll load a dataset from the data directory. The dataset for this article focuses on news in the <a href="https://medium.com/@Davis_David/meet-the-winners-of-swahili-news-classification-challenge-60f5edd7aa9">Swahili </a>Language.</p><pre><code class="language-python">#load dataset
data = pd.read_csv("data/swahili_news_dataset.csv")</code></pre><p>Let's look at the top 5 rows of the dataset:</p><pre><code class="language-python"># show top 5 rows
news_content = data[["content"]]
news_content['clean_content'] = hero.clean(news_content['content'])</code></pre><p>The <strong>clean()</strong> method runs seven functions when you pass a pandas series. These seven functions are:</p><ul><li>lowercase(s): Lowercases all text.</li><li>remove_diacritics(): Removes all accents from strings.</li><li>remove_stopwords(): Removes all stop words.</li><li>remove_digits(): Removes all blocks of digits.</li><li>remove_punctuation(): Removes all string.punctuation (!"#$%&amp;'()*+,-./:;&lt;=&gt;?@[]^_`{|}~).</li><li>fillna(s): Replaces unassigned values with empty spaces.</li><li>remove_whitespace(): Removes all white space between words</li></ul><p>Now we can see the cleaned news content.</p><pre><code class="language-python">#show unclean and clean news content
from texthero import preprocessing
custom_pipeline = [preprocessing.fillna,
preprocessing.lowercase,
preprocessing.remove_whitespace,
preprocessing.remove_punctuation,
preprocessing.remove_urls,
]</code></pre><p>Now I can use the custome_pipeline to clean my dataset.</p><pre><code class="language-python">#altearnative for custom pipeline
news_content['clean_custom_content'] = news_content['content'].pipe(hero.clean, custom_pipeline)</code></pre><p>You can see the clean dataset we have created by using custom pipeline .</p><pre><code class="language-python"># show output of custome pipeline
clean_text = hero.preprocessing.remove_digits(text)
print(clean_text)</code></pre><p>output: Hi my phone number is + &nbsp; &nbsp; &nbsp; &nbsp;call me at &nbsp;: &nbsp;am <br>dtype: object</p><h3 id="remove-stopwords">Remove stopwords</h3><p>You can use the <strong>remove_stopwords() </strong>function to remove stopwords in your text-based datasets.</p><pre><code class="language-python">text = pd.Series("you need to know NLP to develop the chatbot that you desire")
clean_text = hero.remove_stopwords(text)
print(clean_text) </code></pre><p> output: &nbsp; &nbsp;need &nbsp;know NLP &nbsp;develop &nbsp;chatbot &nbsp; desire<br> dtype: object</p><h3 id="remove-urls">Remove URLs</h3><p>You can use the <strong>remove_urls() </strong>function to remove links in your text-based datasets.</p><pre><code class="language-python">text = pd.Series("Go to https://www.freecodecamp.org/news/ to read more articles you like")
clean_text = hero.remove_urls(text)
print(clean_text)</code></pre><p>output: &nbsp; Go to &nbsp; &nbsp;to read more articles you like <br>dtype: object</p><h3 id="tokenize">Tokenize</h3><p>Tokenize each row of the given Pandas Series by using the <strong>tokenize() </strong>method and return a Pandas Series where each row contains a list of tokens.</p><pre><code class="language-python">text = pd.Series(["You can think of Texthero as a tool to help you understand and work with text-based dataset. "])
clean_text = hero.tokenize(text)
print(clean_text)</code></pre><p>output: &nbsp; [You, can, think, of, Texthero, as, a, tool, to, help, you, understand, and, work, with, text, based, dataset]<br> dtype: object</p><h3 id="remove-html-tags">Remove HTML tags</h3><p>You can remove html tags from the given Pandas Series by using the <strong>remove_html_tags()</strong> method.</p><pre><code class="language-python">text = pd.Series("&lt;html&gt;&lt;body&gt;&lt;h2&gt;hello world&lt;/h2&gt;&lt;/body&gt;&lt;/html&gt;")
clean_text = hero.remove_html_tags(text)
print(clean_text)</code></pre><p>output: &nbsp; hello world <br>dtype: object</p><h2 id="useful-visualization-methods">Useful visualization methods</h2><p>Texthero contains different method to visualize insights and statistics of a text-based Pandas DataFrame.</p><h3 id="top-words">Top words</h3><p>If you want to know the top words in your text-based dataset, you can use the <strong>top_words() </strong>method from the visualization module. This method is useful if you want see additional words that you can add to the stop words lists.</p><p>This method does not return a bar graph, so I will use <strong>matplotlib</strong> to visualize the top words in a bar graph.</p><pre><code class="language-python">import matplotlib.pyplot as plt
NUM_TOP_WORDS = 20
top_20 = hero.visualization.top_words(news_content['clean_content']).head(NUM_TOP_WORDS)
# Draw the bar chart
top_20.plot.bar(rot=90, title="Top 20 words");
news = pd.Series(["mkuu wa mkoa wa tabora aggrey mwanri amesitisha likizo za viongozi wote mkoani humo kutekeleza maazimio ya jukwaa la fursa za biashara la mkoa huo", "serikali imetoa miezi sita kwa taasisi zote za umma ambazo hazitumii mfumo wa gepg katika ukusanyaji wa fedha kufanya hivyo na baada ya hapo itafanya ukaguzi na kuwawajibisha"])
#convert into tfidf features
hero.tfidf(news)</code></pre><p>output: [0.187132760851739, 0.0, 0.187132760851739, 0....<br> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; [0.0, 0.18557550845969953, 0.0, 0.185575508459... <br>dtype: object</p><p><strong>NOTE:</strong> TF-IDF stands for<em> term frequency-inverse document frequency.</em></p><h3 id="term-frequency">Term Frequency</h3><p>You can represent a text-based Pandas Series using the <strong>term_frequency()</strong> method. Term frequency (TF) is used to show how frequently an expression (term or word) occurs in a document or text content.</p><pre><code class="language-python">
news = pd.Series(["mkuu wa mkoa wa tabora aggrey mwanri amesitisha likizo za viongozi wote mkoani humo kutekeleza maazimio ya jukwaa la fursa za biashara la mkoa huo", "serikali imetoa miezi sita kwa taasisi zote za umma ambazo hazitumii mfumo wa gepg katika ukusanyaji wa fedha kufanya hivyo na baada ya hapo itafanya ukaguzi na kuwawajibisha"])
# Represent a text-based Pandas Series using term_frequency.
hero.term_frequency(news)</code></pre><p>output: [1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, ... <br> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;[0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1, ... <br>dtype: object</p><h3 id="k-means">K-means</h3><p>Texthero can perform K-means clustering algorithm by using the <strong>kmeans() </strong>method. If you have an unlabeled text-based dataset, you can use this method to group content according to their similarities.</p><p>In this example, I will create a new pandas dataframe called <strong>news</strong> with the following columns <em>content,tfidf and kmeans_labels.</em></p><pre><code>column_names = ["content","tfidf", "kmeans_labels"]
news = pd.DataFrame(columns = column_names)
</code></pre><p>We will use only the first 30 pieces of cleaned content from our <em>news_content dataframe</em> and cluster them into groups by using the <strong>kmeans() </strong>method.</p><pre><code class="language-python"># collect 30 clean content.
news["content"] = news_content.clean_content[:30]
# convert them into tf-idf features.
news['tfidf'] = (
news['content']
.pipe(hero.tfidf)
)
# perform clustering algorithm by using kmeans()
news['kmeans_labels'] = (
news['tfidf']
.pipe(hero.kmeans, n_clusters=5)
.astype(str)
)</code></pre><p>In the above source code, in the pipeline of the k-means method we passed the number of clusters which is 5. This means we will group these contents into 5 groups.</p><p>Now the selected news content has been labeled into five groups.</p><pre><code class="language-python"># show content and their labels
news['pca'] = news['tfidf'].pipe(hero.pca)
#show scatterplot
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
