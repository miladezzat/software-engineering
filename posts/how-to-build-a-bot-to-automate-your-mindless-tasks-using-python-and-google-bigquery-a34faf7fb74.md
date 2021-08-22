---
card: "https://cdn-media-1.freecodecamp.org/images/1*xaB3nYYGNzuhdRJZuat3Cg.jpeg"
tags: [Data Science]
description: "Do you have repetitive tasks? Something that you do regularly"
author: "Milad E. Fahmy"
title: "How to build a bot to automate your mindless tasks using Python and Google BigQuery"
created: "2021-08-16T11:32:04+02:00"
modified: "2021-08-16T11:32:04+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-data-science tag-programming tag-automation tag-technology tag-software-engineering ">
<header class="post-full-header">
<h1 class="post-full-title">How to build a bot to automate your mindless tasks using Python and Google BigQuery</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*xaB3nYYGNzuhdRJZuat3Cg.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*xaB3nYYGNzuhdRJZuat3Cg.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*xaB3nYYGNzuhdRJZuat3Cg.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*xaB3nYYGNzuhdRJZuat3Cg.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*xaB3nYYGNzuhdRJZuat3Cg.jpeg" alt="How to build a bot to automate your mindless tasks using Python and Google BigQuery">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
client = bigquery.Client()
query_job = client.query(query)
result = query_job.result()
dataframe = result.to_dataframe()
return dataframe</code></pre><p>This function will return the data as a dataframe.</p><h4 id="2-visualize-the-data">2. Visualize the data</h4><p>We are going to use matplotlib to visualize the data.</p><pre><code>import matplotlib.pyplot as plt</code></pre><p>We take five parameters which are <code>x</code> as the x-axis data, <code>x_label</code> as the x-axis label name, <code>y</code> as the y-axis data, <code>y_label</code> as the y-axis label name, and <code>title</code> as our visualization title.</p><pre><code class="language-py">def visualize_bar_chart(x, x_label, y, y_label, title):
plt.title(title)
plt.xlabel(x_label)
plt.ylabel(y_label)
index = np.arange(len(x))
plt.xticks(index, x, fontsize=5, rotation=30)
plt.bar(index, y)
return plt</code></pre><h4 id="3-save-the-image">3. Save the image</h4><p>Let’s use the two functions above to create a visualization then save the image.</p><p>Like I mentioned before, we want to send the daily total posts data. Write the query first.</p><pre><code class="language-py">query = """
SELECT DATE(creation_date) date, COUNT(*) total_posts
FROM `bigquery-public-data.stackoverflow.post_history`
GROUP BY 1
HAVING date &gt; DATE_SUB('2018-12-02', INTERVAL 14 DAY)
ORDER BY 1
"""</code></pre><p>Note that in the query above, <code>HAVING date &gt; DATE_SUB('2018-12-02', INTERVAL 14 DAY)</code> means we want to gather the data starting 14 days ago from 2018–12–02.</p><p>We use that date because <code>2018-12-02</code> is the last data recorded in <code>bigquery-public-data.stackoverflow.post_history</code>, in different cases you might want to use <code>CURRENT_DATE()</code> instead so you will get the newest data.</p><p>Call <code>query_to_bigquery</code> function to get the data.</p><pre><code>dataframe = query_to_bigquery(query)</code></pre><p>Take the <code>date</code> column as our x-axis data, and <code>total_posts</code> column as our y-axis data.</p><pre><code class="language-py">x = dataframe['date'].tolist()
y = dataframe['total_posts'].tolist()</code></pre><p>Visualize the data using the <code>visualize_bar_chart</code> function, then save it as an image.</p><pre><code class="language-py">plt = visualize_bar_chart(x=x,
x_label='Date',
y=y,
y_label='Total Posts',
title='Daily Posts')
plt.savefig('viz.png')</code></pre><p>Wrap that code in a function called <code>get_and_save_image</code>.</p><pre><code class="language-py">def get_and_save_image():
query = """
SELECT DATE(creation_date) date, COUNT(*) total_posts
FROM `bigquery-public-data.stackoverflow.post_history`
GROUP BY 1
HAVING date &gt; DATE_SUB('2018-12-02', INTERVAL 14 DAY)
ORDER BY 1
"""
dataframe = query_to_bigquery(query)
x = dataframe['date'].tolist()
y = dataframe['total_posts'].tolist()
plt = visualize_bar_chart(x=x,
x_label='Date',
y=y,
y_label='Total Posts',
title='Daily Posts')
plt.savefig('viz.png')</code></pre><h4 id="4-send-the-image">4. Send the image</h4><p>To be able to send it to the right person, we need to know their <code>chat_id</code>because that is one of the required parameters.</p><p>Go to the <a href="https://telegram.me/userinfobot" rel="nofollow noopener">userinfobot</a> then type <code>/start</code>. The bot will reply with our user information, and our <code>chat_id</code> is the number in the <code>Id</code> field.</p><p>Make a function called <code>send_image</code>. This function will call <code>get_and_save_image</code> function first to get and save the visualization, then send it to the person whose chat_id is declared in the <code>chat_id</code> variable.</p><pre><code class="language-py">def send_image(bot, update):
get_and_save_image()
chat_id = 'CHAT_ID_RECEIVER'
bot.send_photo(chat_id=chat_id, photo=open('viz.png','rb'))</code></pre><h4 id="5-main-program">5. Main program</h4><p>Lastly, create another function called <code>main</code> to run our program. <strong><strong>Don’t forget to change</strong></strong> <code>YOUR_TOKEN</code> with your bot’s token.</p><p>Remember, this program will send the image automatically based on the day and time we defined.</p><p>For example in this tutorial we will set it to 9:00 AM every day.</p><pre><code class="language-py">def main():
updater = Updater('YOUR_TOKEN')
updater.job_queue.run_daily(send_image, time=datetime.datetime.strptime('9:00AM', '%I:%M%p').time(),days=(0,1,2,3,4,5,6))
updater.start_polling()
updater.idle()
if __name__ == '__main__':    main()</code></pre><p>At the end your code should look like this:</p><pre><code class="language-py">from google.cloud import bigquery
from telegram.ext import Updater
import matplotlib.pyplot as plt
import numpy as np
import datetime
def query_to_bigquery(query):
client = bigquery.Client()
query_job = client.query(query)
result = query_job.result()
dataframe = result.to_dataframe()
return dataframe
def visualize_bar_chart(x, x_label, y, y_label, title):
plt.title(title)
plt.xlabel(x_label)
plt.ylabel(y_label)
index = np.arange(len(x))
plt.xticks(index, x, fontsize=5, rotation=30)
plt.bar(index, y)
return plt
def get_and_save_image():
query = """
SELECT DATE(creation_date) date, COUNT(*) total_posts
FROM `bigquery-public-data.stackoverflow.post_history`
GROUP BY 1
HAVING date &gt; DATE_SUB('2018-12-02', INTERVAL 14 DAY)
ORDER BY 1
"""
dataframe = query_to_bigquery(query)
x = dataframe['date'].tolist()
y = dataframe['total_posts'].tolist()
plt = visualize_bar_chart(x=x, x_label='Date', y=y, y_label='Total Posts', title='Daily Posts')
plt.savefig('viz.png')
def send_image(bot, update):
get_and_save_image()
chat_id = 'CHAT_ID_RECEIVER'
bot.send_photo(chat_id=chat_id, photo=open('viz.png', 'rb'))
def main():
updater = Updater('YOUR_TOKEN')
updater.job_queue.run_daily(send_image, time=datetime.datetime.strptime('9:00AM', '%I:%M%p').time(), days=(0,1,2,3,4,5,6))
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
