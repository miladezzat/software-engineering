---
card: "/images/default.jpg"
tags: [Python]
description: "In this post we are going to scrape an ecommerce website. We "
author: "Milad E. Fahmy"
title: "Web Scraping in Python – How to Scrape an eCommerce Website Using Beautiful Soup and Pandas"
created: "2021-08-16T15:34:35+02:00"
modified: "2021-08-16T15:34:35+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-python tag-web-scraping ">
<header class="post-full-header">
<h1 class="post-full-title">Web Scraping in Python – How to Scrape an eCommerce Website Using Beautiful Soup and Pandas</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2021/03/Untitled-design--1-.png 300w,
/news/content/images/size/w600/2021/03/Untitled-design--1-.png 600w,
/news/content/images/size/w1000/2021/03/Untitled-design--1-.png 1000w,
/news/content/images/size/w2000/2021/03/Untitled-design--1-.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2021/03/Untitled-design--1-.png" alt="Web Scraping in Python – How to Scrape an eCommerce Website Using Beautiful Soup and Pandas">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
pip install beautifulsoup4
pip install requests
pip install pandas</code></pre><p>Now, create a file inside that folder and name it anything you like. I am using the name <code>scraper.py</code>. We are going to import requests, pandas, and bs4.</p><pre><code class="language-python">import requests
from bs4 import BeautifulSoup
import pandas as pd</code></pre><p>Now, we are going to set the base URL of the main page because we'll need that when we construct our URLs for each of the individual products. </p><p>Also, we will send a user-agent on every HTTP request, because if you make GET request using <strong>requests</strong> then by default the user-agent is <strong>Python</strong> which might get blocked. </p><p>So, to override that, we will declare a variable which will store our user-agent.</p><pre><code class="language-python">baseurl = "https://www.thewhiskyexchange.com"
soup=BeautifulSoup(k,'html.parser')
productlist = soup.find_all("li",{"class":"product-grid__item"})
for product in productlist:
for x in range(1,6):
k = requests.get('https://www.thewhiskyexchange.com/c/35/japanese-whisky?pg={}&amp;psize=24&amp;sort=pasc'.format(x)).text
soup=BeautifulSoup(k,'html.parser')
productlist = soup.find_all("li",{"class":"product-grid__item"})
for product in productlist:
for link in productlinks:
f = requests.get(link,headers=headers).text
hun=BeautifulSoup(f,'html.parser')
try:
price=hun.find("p",{"class":"product-action__price"}).text.replace('\n',"")
except:
price = None
try:
about=hun.find("div",{"class":"product-main__description"}).text.replace('\n',"")
except:
about=None
try:
rating = hun.find("div",{"class":"review-overview"}).text.replace('\n',"")
except:
rating=None
try:
name=hun.find("h1",{"class":"product-main__name"}).text.replace('\n',"")
except:
name=None
whisky = {"name":name,"price":price,"rating":rating,"about":about}
data.append(whisky)</code></pre><p>Here, things are pretty straightforward. We have started a for loop to iterate over every individual link of <strong>productlinks. </strong>We will make an HTTP GET call to every <strong>link</strong> and then extract the <strong>price, name, rating</strong> and <strong>about</strong> text. </p><p>We are using <strong>try</strong> and <strong>except</strong> to avoid any errors if any element is not found. Use the <strong>replace</strong> function to remove all the line breaks or unnecessary strings we get along with the extracted information. </p><p>We have created a dictionary with the name <strong>whisky</strong> where we will store all the extracted information. At the very end we are storing the dictionary inside the list <strong>data</strong>. </p><p>Now before printing the data we are going to make the data more presentable. Here we will use pandas. I love using pandas! </p><pre><code class="language-python">df = pd.DataFrame(data)
from bs4 import BeautifulSoup
import pandas as pd
baseurl = "https://www.thewhiskyexchange.com"
headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.82 Safari/537.36'}
productlinks = []
t={}
data=[]
c=0
for x in range(1,6):
k = requests.get('https://www.thewhiskyexchange.com/c/35/japanese-whisky?pg={}&amp;psize=24&amp;sort=pasc'.format(x)).text
soup=BeautifulSoup(k,'html.parser')
productlist = soup.find_all("li",{"class":"product-grid__item"})
for product in productlist:
productlinks.append(baseurl + link)
for link in productlinks:
f = requests.get(link,headers=headers).text
hun=BeautifulSoup(f,'html.parser')
try:
price=hun.find("p",{"class":"product-action__price"}).text.replace('\n',"")
except:
price = None
try:
about=hun.find("div",{"class":"product-main__description"}).text.replace('\n',"")
except:
about=None
try:
rating = hun.find("div",{"class":"review-overview"}).text.replace('\n',"")
except:
rating=None
try:
name=hun.find("h1",{"class":"product-main__name"}).text.replace('\n',"")
except:
name=None
whisky = {"name":name,"price":price,"rating":rating,"about":about}
data.append(whisky)
c=c+1
print("completed",c)
df = pd.DataFrame(data)
print(df)
</code></pre><h2 id="conclusion">Conclusion</h2><p>Finally we have managed to scrape all the information from every page of the website. Similarly you can scrape other text from this website. As an exercise you can try scraping this <a href="https://books.toscrape.com/">website</a>. If you have any questions for me, please dm me on my <a href="https://twitter.com/scrapingdog">twitter handle</a>. </p>
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
