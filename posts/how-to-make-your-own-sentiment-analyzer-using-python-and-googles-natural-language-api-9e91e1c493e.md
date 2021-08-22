---
card: "https://cdn-media-1.freecodecamp.org/images/1*KOfmj8IK7U5cvOF0Ogxfcw.jpeg"
tags: [Bots]
description: "Imagine you are a product owner who wants to know what people"
author: "Milad E. Fahmy"
title: "How to make your own sentiment analyzer using Python and Google’s Natural Language API"
created: "2021-08-16T15:39:30+02:00"
modified: "2021-08-16T15:39:30+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-bots tag-python tag-machine-learning tag-programming tag-nlp ">
<header class="post-full-header">
<h1 class="post-full-title">How to make your own sentiment analyzer using Python and Google’s Natural Language API</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*KOfmj8IK7U5cvOF0Ogxfcw.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*KOfmj8IK7U5cvOF0Ogxfcw.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*KOfmj8IK7U5cvOF0Ogxfcw.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*KOfmj8IK7U5cvOF0Ogxfcw.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*KOfmj8IK7U5cvOF0Ogxfcw.jpeg" alt="How to make your own sentiment analyzer using Python and Google’s Natural Language API">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
ACC_SECRET = 'YOUR_ACCESS_TOKEN_SECRET'
CONS_KEY = 'YOUR_CONSUMER_API_KEY'
CONS_SECRET = 'YOUR_CONSUMER_API_SECRET_KEY'</code></pre><p>Make a function called <code>authentication</code> to connect to the API, with four parameters which are all of the keys.</p><pre><code class="language-py">def authentication(cons_key, cons_secret, acc_token, acc_secret):
auth = tweepy.OAuthHandler(cons_key, cons_secret)
auth.set_access_token(acc_token, acc_secret)
api = tweepy.API(auth)
return api</code></pre><h4 id="2-search-the-tweets">2. Search the tweets</h4><p>We can search the tweets with two criteria, based on time or quantity. If it’s based on time, we define the time interval and if it’s based on quantity, we define the total tweets that we want to gather. Since we want to gather the tweets from the last 24 hours with maximum tweets of 50, we will use both of the criteria.</p><p>Since we want to gather the tweets from the last 24 hours, let's take yesterday’s date as our time parameter.</p><pre><code class="language-py">from datetime import datetime, timedelta
today_datetime = datetime.today().now()
yesterday_datetime = today_datetime - timedelta(days=1)
today_date = today_datetime.strftime('%Y-%m-%d')
yesterday_date = yesterday_datetime.strftime('%Y-%m-%d')</code></pre><p>Connect to the Twitter API using a function we defined before.</p><pre><code>api = authentication(CONS_KEY,CONS_SECRET,ACC_TOKEN,ACC_SECRET)</code></pre><p>Define our search parameters. <code>q</code> is where we define our keyword, <code>since</code> is the start date for our search, <code>result_type='recent'</code> means we are going to take the newest tweets, <code>lang='en'</code> is going to take the English tweets only, and <code>items(total_tweets)</code> is where we define the maximum tweets that we are going to take.</p><pre><code class="language-py">search_result = tweepy.Cursor(api.search,
q=keyword,
since=yesterday_date,
result_type='recent',
lang='en').items(total_tweets)</code></pre><p>Wrap those codes in a function called <code>search_tweets</code> with <code>keyword</code> and <code>total_tweets</code> as the parameters.</p><pre><code class="language-py">def search_tweets(keyword, total_tweets):
today_datetime = datetime.today().now()
yesterday_datetime = today_datetime - timedelta(days=1)
today_date = today_datetime.strftime('%Y-%m-%d')
yesterday_date = yesterday_datetime.strftime('%Y-%m-%d')
api = authentication(CONS_KEY,CONS_SECRET,ACC_TOKEN,ACC_SECRET)
search_result = tweepy.Cursor(api.search,
q=keyword,
since=yesterday_date,
result_type='recent',
lang='en').items(total_tweets)
return search_result</code></pre><h4 id="3-clean-the-tweets">3. Clean the tweets</h4><p>Before we analyze the tweets sentiment, we need to clean the tweets a little bit so the Google Natural Language API can identify them better.</p><p>We will use the nltk and regex libraries to help us in this process.</p><pre><code class="language-py">import re
from nltk.tokenize import WordPunctTokenizer</code></pre><p>We remove the username in every tweet, so basically we can remove everything that begins with <code>@</code> and we use regex to do it.</p><pre><code>user_removed = re.sub(r'@[A-Za-z0-9]+','',tweet.decode('utf-8'))</code></pre><p>We also remove links in every tweet.</p><pre><code>link_removed = re.sub('https?://[A-Za-z0-9./]+','',user_removed)</code></pre><p>Numbers are also deleted from all of the tweets.</p><pre><code>number_removed = re.sub('[^a-zA-Z]',' ',link_removed)</code></pre><p>The last, convert all of the characters into lower space, then remove every unnecessary space.</p><pre><code class="language-py">lower_case_tweet = number_removed.lower()
tok = WordPunctTokenizer()
words = tok.tokenize(lower_case_tweet)
clean_tweet = (' '.join(words)).strip()</code></pre><p>Wrap those codes into a function called <code>clean_tweets</code> with <code>tweet</code> as our parameter.</p><pre><code class="language-py">def clean_tweets(tweet):
user_removed = re.sub(r'@[A-Za-z0-9]+','',tweet.decode('utf-8'))
link_removed = re.sub('https?://[A-Za-z0-9./]+','',user_removed)
number_removed = re.sub('[^a-zA-Z]', ' ', link_removed)
lower_case_tweet= number_removed.lower()
tok = WordPunctTokenizer()
words = tok.tokenize(lower_case_tweet)
clean_tweet = (' '.join(words)).strip()
return clean_tweet</code></pre><h4 id="4-get-tweet-s-sentiment">4. Get tweet’s sentiment</h4><p>To be able to get a tweet’s sentiment, we will use Google Natural Language API.</p><p>The API provides Sentiment Analysis, Entities Analysis, and Syntax Analysis. We will only use the Sentiment Analysis for this tutorial.</p><p>In Google’s Sentiment Analysis, there are <code>score</code> and <code>magnitude</code>. <code>Score</code> is the score of the sentiment ranges from -1.0 (very negative) to 1.0 (very positive). <code>Magnitude</code> is the strength of sentiment and ranges from 0 to infinity.</p><p>For the sake of simplicity of this tutorial, we will only consider the <code>score</code>. If you are thinking of doing deep NLP analysis, you should consider the <code>magnitude</code> too.</p><p>Import the Google Natural Language library.</p><pre><code class="language-py">from google.cloud import language
from google.cloud.language import enums
from google.cloud.language import types</code></pre><p>Make a function called <code>get_sentiment_score</code> which takes <code>tweet</code> as the parameter, and returns the <code>sentiment</code> score.</p><pre><code class="language-py">def get_sentiment_score(tweet):
client = language.LanguageServiceClient()
document = types\
.Document(content=tweet,
type=enums.Document.Type.PLAIN_TEXT)
sentiment_score = client\
.analyze_sentiment(document=document)\
.document_sentiment\
.score
return sentiment_score</code></pre><h4 id="5-analyze-the-tweets">5. Analyze the tweets</h4><p>Let’s make a function that will loop the list of tweets we get from <code>search_tweets</code> function and get the sentiment’s score of every tweet using <code>get_sentiment_score</code> function. Then we’ll calculate the average. The average score will determine whether the given keyword has a positive, neutral, or negative sentiment.</p><p>Define <code>score</code> equals to <code>0</code> , then use <code>search_tweets</code> function to get the tweets related to the keyword that we define.</p><pre><code class="language-py">score = 0
tweets = search_tweets(keyword, total_tweets)</code></pre><p>Loop through the list of tweets, and do the cleaning using <code>clean_tweets</code> function that we created before.</p><pre><code class="language-py">for tweet in tweets:
cleaned_tweet = clean_tweets(tweet.text.encode('utf-8'))</code></pre><p>Get the sentiment score using <code>get_sentiment_score</code> function, and increment the <code>score</code> by adding <code>sentiment_score</code>.</p><pre><code class="language-py">for tweet in tweets:
cleaned_tweet = clean_tweets(tweet.text.encode('utf-8'))
sentiment_score = get_sentiment_score(cleaned_tweet)
score += sentiment_score</code></pre><p>Let’s print out each tweet and its sentiment so we can see the progress detail in the terminal.</p><pre><code class="language-py">for tweet in tweets:
cleaned_tweet = clean_tweets(tweet.text.encode('utf-8'))
sentiment_score = get_sentiment_score(cleaned_tweet)
score += sentiment_score
print('Tweet: {}'.format(cleaned_tweet))
print('Score: {}\n'.format(sentiment_score))</code></pre><p>Calculate the average score and pass it to <code>final_score</code> variable. Wrap all of the codes into <code>analyze_tweets</code> function, with <code>keyword</code> and <code>total_tweets</code> as the parameters.</p><pre><code class="language-py">def analyze_tweets(keyword, total_tweets):
score = 0
tweets = search_tweets(keyword, total_tweets)
for tweet in tweets:
cleaned_tweet = clean_tweets(tweet.text.encode('utf-8'))
sentiment_score = get_sentiment_score(cleaned_tweet)
score += sentiment_score
print('Tweet: {}'.format(cleaned_tweet))
print('Score: {}\n'.format(sentiment_score))
final_score = round((score / float(total_tweets)),2)
status = 'NEGATIVE ❌'
elif final_score &lt;= 0.25:
status = 'NEUTRAL ?'
else:
status = 'POSITIVE ✅'</code></pre><p>Lastly, send the <code>final_score</code> and the <code>status</code> through Telegram Bot.</p><pre><code class="language-py">bot.send_message(chat_id=update.message.chat_id,
text='Average score for '
+ str(keyword)
+ ' is '
+ str(final_score)
+ ' '
+ status)</code></pre><p>Wrap the codes into a function called <code>send_the_result</code>.</p><pre><code class="language-py">def send_the_result(bot, update):
keyword = update.message.text
final_score = analyze_tweets(keyword, 50)
if final_score &lt;= -0.25:
status = 'NEGATIVE ❌'
elif final_score &lt;= 0.25:
status = 'NEUTRAL ?'
else:
status = 'POSITIVE ✅'
bot.send_message(chat_id=update.message.chat_id,
text='Average score for '
+ str(keyword)
+ ' is '
+ str(final_score)
+ ' '
+ status)</code></pre><h4 id="7-main-program">7. Main program</h4><p>Lastly, create another function called <code>main</code> to run our program. <strong>Don’t forget to change</strong> <code>YOUR_TOKEN</code> to your bot’s token.</p><pre><code class="language-py">from telegram.ext import Updater, MessageHandler, Filters
def main():
updater = Updater('YOUR_TOKEN')
dp = updater.dispatcher
dp.add_handler(MessageHandler(Filters.text, send_the_result))
updater.start_polling()
updater.idle()
if __name__ == '__main__':
main()</code></pre><p>In the end, your code should look like this</p><pre><code class="language-py">import tweepy
import re
from telegram.ext import Updater, MessageHandler, Filters
from google.cloud import language
from google.cloud.language import enums
from google.cloud.language import types
from datetime import datetime, timedelta
from nltk.tokenize import WordPunctTokenizer
ACC_TOKEN = 'YOUR_ACCESS_TOKEN'
ACC_SECRET = 'YOUR_ACCESS_TOKEN_SECRET'
CONS_KEY = 'YOUR_CONSUMER_API_KEY'
CONS_SECRET = 'YOUR_CONSUMER_API_SECRET_KEY'
def authentication(cons_key, cons_secret, acc_token, acc_secret):
auth = tweepy.OAuthHandler(cons_key, cons_secret)
auth.set_access_token(acc_token, acc_secret)
api = tweepy.API(auth)
return api
def search_tweets(keyword, total_tweets):
today_datetime = datetime.today().now()
yesterday_datetime = today_datetime - timedelta(days=1)
today_date = today_datetime.strftime('%Y-%m-%d')
yesterday_date = yesterday_datetime.strftime('%Y-%m-%d')
api = authentication(CONS_KEY,CONS_SECRET,ACC_TOKEN,ACC_SECRET)
search_result = tweepy.Cursor(api.search,
q=keyword,
since=yesterday_date,
result_type='recent',
lang='en').items(total_tweets)
return search_result
def clean_tweets(tweet):
user_removed = re.sub(r'@[A-Za-z0-9]+','',tweet.decode('utf-8'))
link_removed = re.sub('https?://[A-Za-z0-9./]+','',user_removed)
number_removed = re.sub('[^a-zA-Z]', ' ', link_removed)
lower_case_tweet= number_removed.lower()
tok = WordPunctTokenizer()
words = tok.tokenize(lower_case_tweet)
clean_tweet = (' '.join(words)).strip()
return clean_tweet
def get_sentiment_score(tweet):
client = language.LanguageServiceClient()
document = types\
.Document(content=tweet,
type=enums.Document.Type.PLAIN_TEXT)
sentiment_score = client\
.analyze_sentiment(document=document)\
.document_sentiment\
.score
return sentiment_score
def analyze_tweets(keyword, total_tweets):
score = 0
tweets = search_tweets(keyword,total_tweets)
for tweet in tweets:
cleaned_tweet = clean_tweets(tweet.text.encode('utf-8'))
sentiment_score = get_sentiment_score(cleaned_tweet)
score += sentiment_score
print('Tweet: {}'.format(cleaned_tweet))
print('Score: {}\n'.format(sentiment_score))
final_score = round((score / float(total_tweets)),2)
return final_score
def send_the_result(bot, update):
keyword = update.message.text
final_score = analyze_tweets(keyword, 50)
if final_score &lt;= -0.25:
status = 'NEGATIVE ❌'
elif final_score &lt;= 0.25:
status = 'NEUTRAL ?'
else:
status = 'POSITIVE ✅'
bot.send_message(chat_id=update.message.chat_id,
text='Average score for '
+ str(keyword)
+ ' is '
+ str(final_score)
+ ' '
+ status)
def main():
updater = Updater('YOUR_TOKEN')
dp = updater.dispatcher
dp.add_handler(MessageHandler(Filters.text, send_the_result))
updater.start_polling()
updater.idle()
if __name__ == '__main__':
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
