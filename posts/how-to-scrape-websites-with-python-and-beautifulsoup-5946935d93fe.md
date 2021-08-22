---
card: "https://cdn-media-1.freecodecamp.org/images/1*BrUAg3-OqIHkoTz_CRIzTA.png"
tags: [Web Development]
description: "by Justin Yek"
author: "Milad E. Fahmy"
title: "How to scrape websites with Python and BeautifulSoup"
created: "2021-08-16T15:42:38+02:00"
modified: "2021-08-16T15:42:38+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-web-development tag-software-development tag-python tag-programming tag-life-hacking ">
<header class="post-full-header">
<h1 class="post-full-title">How to scrape websites with Python and BeautifulSoup</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*BrUAg3-OqIHkoTz_CRIzTA.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*BrUAg3-OqIHkoTz_CRIzTA.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*BrUAg3-OqIHkoTz_CRIzTA.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*BrUAg3-OqIHkoTz_CRIzTA.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*BrUAg3-OqIHkoTz_CRIzTA.png" alt="How to scrape websites with Python and BeautifulSoup">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
pip install BeautifulSoup4</code></pre><p><strong>Note</strong>: If you fail to execute the above command line, try adding <code>sudo</code> in front of each line.</p><h3 id="the-basics">The Basics</h3><p>Before we start jumping into the code, let’s understand the basics of HTML and some rules of scraping.</p><p><strong>HTML tags</strong><br>If you already understand HTML tags, feel free to skip this part.</p><pre><code class="language-html">&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;h1&gt; First Scraping &lt;/h1&gt;
&lt;p&gt; Hello World &lt;/p&gt;
&lt;body&gt;
import urllib2
from bs4 import BeautifulSoup</code></pre><p>Next, declare a variable for the url of the page.</p><pre><code class="language-py"># specify the url
quote_page = ‘http://www.bloomberg.com/quote/SPX:IND'</code></pre><p>Then, make use of the Python urllib2 to get the HTML page of the url declared.</p><pre><code class="language-py"># query the website and return the html to the variable ‘page’
page = urllib2.urlopen(quote_page)</code></pre><p>Finally, parse the page into BeautifulSoup format so we can use BeautifulSoup to work on it.</p><pre><code class="language-py"># parse the html using beautiful soup and store in variable `soup`
soup = BeautifulSoup(page, ‘html.parser’)</code></pre><p>Now we have a variable, <code>soup</code>, containing the HTML of the page. Here’s where we can start coding the part that extracts the data.</p><p>Remember the unique layers of our data? BeautifulSoup can help us get into these layers and extract the content with <code>find()</code>. In this case, since the HTML class <code>name</code> is unique on this page, we can simply query <code>&lt;div class="name"&gt;</code>.</p><pre><code class="language-py"># Take out the &lt;div&gt; of name and get its value
name_box = soup.find(‘h1’, attrs={‘class’: ‘name’})</code></pre><p>After we have the tag, we can get the data by getting its <code>text</code>.</p><pre><code class="language-py">name = name_box.text.strip() # strip() is used to remove starting and trailing
print name</code></pre><p>Similarly, we can get the price too.</p><pre><code class="language-py"># get the index price
price_box = soup.find(‘div’, attrs={‘class’:’price’})
price = price_box.text
from datetime import datetime</code></pre><p>At the bottom of your code, add the code for writing data to a csv file.</p><pre><code class="language-py"># open a csv file with append, so old data will not be erased
with open(‘index.csv’, ‘a’) as csv_file:
writer = csv.writer(csv_file)
data = []
for pg in quote_page:
# query the website and return the html to the variable ‘page’
page = urllib2.urlopen(pg)
# parse the html using beautiful soap and store in variable `soup`
soup = BeautifulSoup(page, ‘html.parser’)
# Take out the &lt;div&gt; of name and get its value
name_box = soup.find(‘h1’, attrs={‘class’: ‘name’})
name = name_box.text.strip() # strip() is used to remove starting and trailing
# get the index price
price_box = soup.find(‘div’, attrs={‘class’:’price’})
price = price_box.text
# save the data in tuple
data.append((name, price))</code></pre><p>Also, modify the saving section to save data row by row.</p><pre><code class="language-py"># open a csv file with append, so old data will not be erased
with open(‘index.csv’, ‘a’) as csv_file:
writer = csv.writer(csv_file)
# The for loop
for name, price in data:
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
