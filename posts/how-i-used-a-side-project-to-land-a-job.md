---
card: "/images/default.jpg"
tags: [Career Advice]
description: "Landing any job, let alone a first job, can be a difficult pr"
author: "Milad E. Fahmy"
title: "How I Built a Web Scraper with Beautiful Soup and Used it to Land My First Job"
created: "2021-08-16T15:34:43+02:00"
modified: "2021-08-16T15:34:43+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-career-advice tag-job-hunting tag-self-improvement tag-python ">
<header class="post-full-header">
<h1 class="post-full-title">How I Built a Web Scraper with Beautiful Soup and Used it to Land My First&nbsp;Job</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2021/02/alvaro-reyes-6avV9oeHxfo-unsplash.jpg 300w,
/news/content/images/size/w600/2021/02/alvaro-reyes-6avV9oeHxfo-unsplash.jpg 600w,
/news/content/images/size/w1000/2021/02/alvaro-reyes-6avV9oeHxfo-unsplash.jpg 1000w,
/news/content/images/size/w2000/2021/02/alvaro-reyes-6avV9oeHxfo-unsplash.jpg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2021/02/alvaro-reyes-6avV9oeHxfo-unsplash.jpg" alt="How I Built a Web Scraper with Beautiful Soup and Used it to Land My First&nbsp;Job">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
import urllib.request
from bs4 import BeautifulSoup
#specify the url
quote_page = 'https://www.nasdaq.com/symbol/fb/after-hours'
# query the website and return the html to the variable 'page'
page = urllib.request.urlopen(quote_page)
# parse the html using beautiful soup and store in the variable 'soup'
soup = BeautifulSoup(page, 'html.parser')
# Take out the &lt;div&gt; of name and get its value
name_box = soup.find('h1')
#define variable for where we'll store the name of our stock
name = name_box.text.strip() # strip() is used to remove starting and trailing
print(name)
# get the index price
price_box = soup.find('div', attrs={'class':'qwidget-dollar'})
# define variable for where we'll store the price of our stock
price = price_box.text
print(price)</code></pre><p>The above script printed out whatever price the Facebook stock was that day. But I knew I couldn't stop there. I needed to show I could scrape stock data as well as do something with the data. I didn't want to overcomplicate the project. But I also wanted to include enough analysis to impress potential employers. </p><p>After a month of work, I came up with a Python script that did the following:</p><ul><li>Scrape and append three companies' stock prices to a CSV file over the course of 30 days</li><li>Import the CSV as a dataframe and calculate the average price for each stock for the last 30 days</li><li>Visualize the change in stock price for each company using matplotlib</li></ul><p>When I bought a new computer I forgot to save the actual script. Here is some pseudocode in case any of you wanted to reproduce what I did:</p><pre><code class="language-Python">#import libraries
import pandas as pd
from datetime import date, datetime, timedelta
import math
import numpy as np
#Scrape and append three companies' stock prices to a pandas dataframe over the course of 30 days
#1) Scrape stock prices for Company A, Company B, and Company C
#2) Append each stock price for the day to a separate column within a CSV using ExcelWriter (pandas function)
#3) Include a single column in the CSV for the date
#4) Repeat until you have 30 days' worth of data for each company
#Calculate the average price for each stock over the course of the 30 days in the dataframe
#1) Import CSV file back into the script as a dataframe
#2) Generate basic statistics (describe() function) for each column or use the .mean() function if you're looking for just the average
#Visualize the average stock price over the last 30 days using matplotlib
#1) Create a different Time Series line plot for Company A, Company B, and Company C
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
