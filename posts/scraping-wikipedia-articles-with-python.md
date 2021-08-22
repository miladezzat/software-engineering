---
card: "/images/default.jpg"
tags: [Web Scraping]
description: "In this article I m going to create a web scraper in Python t"
author: "Milad E. Fahmy"
title: "How to Scrape Wikipedia Articles with Python"
created: "2021-08-16T15:35:40+02:00"
modified: "2021-08-16T15:35:40+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-web-scraping tag-python ">
<header class="post-full-header">
<h1 class="post-full-title">How to Scrape Wikipedia Articles with Python</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/08/artem-maltsev-vgQFlPq8tVQ-unsplash-1.jpg 300w,
/news/content/images/size/w600/2020/08/artem-maltsev-vgQFlPq8tVQ-unsplash-1.jpg 600w,
/news/content/images/size/w1000/2020/08/artem-maltsev-vgQFlPq8tVQ-unsplash-1.jpg 1000w,
/news/content/images/size/w2000/2020/08/artem-maltsev-vgQFlPq8tVQ-unsplash-1.jpg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/08/artem-maltsev-vgQFlPq8tVQ-unsplash-1.jpg" alt="How to Scrape Wikipedia Articles with Python">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>In this article I'm going to create a web scraper in Python that will scrape Wikipedia pages. </p><p>The scraper will go to a Wikipedia page, scrape the title, and follow a random link to the next Wikipedia page.</p><p>I think it will be fun to see what random Wikipedia pages this scraper will visit!</p><h2 id="setting-up-the-scraper">Setting up the scraper</h2><p>To start, I'm going to create a new python file called <code>scraper.py</code>:</p><pre><code>touch scraper.py</code></pre><p>To make the HTTP request, I'm going to use the <code>requests</code> library. You can install it with the following command:</p><pre><code>pip install requests</code></pre><p>Let's use the web scraping wiki page as our starting point:</p><pre><code class="language-python">import requests
response = requests.get(
url="https://en.wikipedia.org/wiki/Web_scraping",
)
print(response.status_code)
</code></pre><p>When running the scraper, it should display a 200 status code:</p><pre><code>python3 scraper.py
from bs4 import BeautifulSoup
response = requests.get(
url="https://en.wikipedia.org/wiki/Web_scraping",
)
soup = BeautifulSoup(response.content, 'html.parser')
title = soup.find(id="firstHeading")
print(title.string)
</code></pre><p>And when running this, it shows the title of the Wiki article: ?</p><pre><code>python3 scraper.py
Web scraping</code></pre><h2 id="scraping-other-links">Scraping other links</h2><p>Now I'm going to dive deep into Wikipedia. I'm going to grab a random <code>&lt;a&gt;</code> tag to another Wikipedia article and scrape that page.</p><p>To do this I will use beautiful soup to find all the <code>&lt;a&gt;</code> tags within the wiki article. Then I shuffle the list to make it random. </p><pre><code class="language-python">import requests
from bs4 import BeautifulSoup
import random
response = requests.get(
url="https://en.wikipedia.org/wiki/Web_scraping",
)
soup = BeautifulSoup(response.content, 'html.parser')
title = soup.find(id="firstHeading")
print(title.content)
# Get all the links
allLinks = soup.find(id="bodyContent").find_all("a")
random.shuffle(allLinks)
linkToScrape = 0
for link in allLinks:
# We are only interested in other wiki articles
if link['href'].find("/wiki/") == -1:
continue
# Use this link to scrape
linkToScrape = link
break
print(linkToScrape)</code></pre><p>As you can see, I use the <code>soup.find(id="bodyContent").find_all("a")</code> to find all the <code>&lt;a&gt;</code> tags within the main article. </p><p>Since I'm only interested in links to other wikipedia articles, I make sure the link contains the <code>/wiki</code> prefix.</p><p>When running the program now it displays a link to another wikipedia article, nice!</p><pre><code>python3 scraper.py
&lt;a href="/wiki/Link_farm" title="Link farm"&gt;Link farm&lt;/a&gt;</code></pre><h2 id="creating-an-endless-scraper">Creating an endless scraper</h2><p>Alright, let's make the scraper actually scrape the new link.</p><p>To do this I'm going to move everything into a <code>scrapeWikiArticle</code> function.</p><pre><code class="language-python">import requests
from bs4 import BeautifulSoup
import random
def scrapeWikiArticle(url):
response = requests.get(
url=url,
)
soup = BeautifulSoup(response.content, 'html.parser')
title = soup.find(id="firstHeading")
print(title.text)
allLinks = soup.find(id="bodyContent").find_all("a")
random.shuffle(allLinks)
linkToScrape = 0
for link in allLinks:
# We are only interested in other wiki articles
if link['href'].find("/wiki/") == -1:
continue
# Use this link to scrape
linkToScrape = link
break
scrapeWikiArticle("https://en.wikipedia.org" + linkToScrape['href'])
scrapeWikiArticle("https://en.wikipedia.org/wiki/Web_scraping")</code></pre><p>The <code>scrapeWikiArticle</code> function will get the wiki article, extract the title, and find a random link. </p><p>Then, it will call the <code>scrapeWikiArticle</code> again with this new link. Thus, it creates an endless cycle of a Scraper that bounces around on wikipedia. </p><p>Let's run the program and see what we get:</p><pre><code>pythron3 scraper.py
Web scraping
Digital object identifier
ISO 8178
STEP-NC
ISO/IEC 2022
EBCDIC 277
Code page 867
Code page 1021
EBCDIC 423
Code page 950
G
R
Mole (unit)
Gram
Remmius Palaemon
Encyclopædia Britannica Eleventh Edition
Geography
Gender studies
Feminism in Brazil</code></pre><p>Awesome, in roughly 10 steps we went from "Web Scraping" to "Feminism in Brazil". Amazing!</p><h2 id="conclusion">Conclusion</h2><p>We've built a web scraper in Python that scrapes random Wikipedia pages. It bounces around endlessly on Wikipedia by following random links.</p><p>This is a fun gimmick and Wikipedia is pretty lenient when it comes to web scraping. </p><p>There are also harder to scrape websites such as Amazon or Google. If you want to scrape such a website, you should set up a system with <a href="https://github.com/puppeteer/puppeteer">headless Chrome browsers</a> and proxy servers. Or you can use a service that handles all that for you <a href="https://scraperbox.com">like this one</a>.</p><p>But be careful not to abuse websites, and only scrape data that you are allowed to scrape.</p><p>Happy coding!</p>
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
