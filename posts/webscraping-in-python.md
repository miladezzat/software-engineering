---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c9af8740569d1a4ca28f1.jpg"
tags: [Web Scraping]
description: "Web scraping is the process of extracting data from websites."
author: "Milad E. Fahmy"
title: "How to Scrape Websites with Python 3"
created: "2021-08-16T15:36:29+02:00"
modified: "2021-08-16T15:36:29+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-web-scraping tag-python ">
<header class="post-full-header">
<h1 class="post-full-title">How to Scrape Websites with Python 3</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c9af8740569d1a4ca28f1.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9af8740569d1a4ca28f1.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9af8740569d1a4ca28f1.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9af8740569d1a4ca28f1.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c9af8740569d1a4ca28f1.jpg" alt="How to Scrape Websites with Python 3">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
https://www.gesetze-im-internet.de/gg/art_2.html
https://www.gesetze-im-internet.de/gg/art_3.html
https://www.gesetze-im-internet.de/gg/art_4.html
https://www.gesetze-im-internet.de/gg/art_5.html
https://www.gesetze-im-internet.de/gg/art_6.html
https://www.gesetze-im-internet.de/gg/art_7.html
https://www.gesetze-im-internet.de/gg/art_8.html
https://www.gesetze-im-internet.de/gg/art_9.html
https://www.gesetze-im-internet.de/gg/art_10.html
https://www.gesetze-im-internet.de/gg/art_11.html
https://www.gesetze-im-internet.de/gg/art_12.html
https://www.gesetze-im-internet.de/gg/art_12a.html
https://www.gesetze-im-internet.de/gg/art_13.html
https://www.gesetze-im-internet.de/gg/art_14.html
https://www.gesetze-im-internet.de/gg/art_15.html
https://www.gesetze-im-internet.de/gg/art_16.html
https://www.gesetze-im-internet.de/gg/art_16a.html
https://www.gesetze-im-internet.de/gg/art_17.html
https://www.gesetze-im-internet.de/gg/art_17a.html
https://www.gesetze-im-internet.de/gg/art_18.html
from pathlib import PurePath
import requests
with open('urls.txt', 'r') as fh:
urls = fh.readlines()
urls = [url.strip() for url in urls]  # strip `\n`
for url in urls:
file_name = PurePath(url).name
file_path = path.join('.', file_name)
text = ''
try:
response = requests.get(url)
if response.ok:
text = response.text
except requests.exceptions.ConnectionError as exc:
print(exc)
with open(file_path, 'w') as fh:
fh.write(text)
from pathlib import PurePath
import sys
from bs4 import BeautifulSoup
import requests
def download_urls(urls, dir):
paths = []
for url in urls:
file_name = PurePath(url).name
file_path = path.join(dir, file_name)
text = ''
try:
response = requests.get(url)
if response.ok:
text = response.text
else:
print('Bad response for', url, response.status_code)
except requests.exceptions.ConnectionError as exc:
print(exc)
with open(file_path, 'w') as fh:
fh.write(text)
paths.append(file_path)
return paths
def parse_html(path):
with open(path, 'r') as fh:
content = fh.read()
return BeautifulSoup(content, 'html.parser')
def download(urls):
return download_urls(urls, '.')
def extract(path):
return parse_html(path)
def transform(soup):
container = soup.find(id='container')
if container is not None:
return container.get_text()
def load(key, value):
d = {}
d[key] = value
return d
def run_single(path):
soup = extract(path)
content = transform(soup)
unserialised = load(path, content.strip() if content is not None else '')
return unserialised
def run_everything():
l = []
with open('urls.txt', 'r') as fh:
urls = fh.readlines()
urls = [url.strip() for url in urls]
paths = download(urls)
for path in paths:
print('Written to', path)
l.append(run_single(path))
print(l)
if __name__ == "__main__":
args = sys.argv
if len(args) is 1:
run_everything()
else:
if args[1] == 'download':
download([args[2]])
print('Done')
if args[1] == 'parse':
path = args[2]
result = run_single(path)
print(result)
from pathlib import Path, PurePath
import sys
from bs4 import BeautifulSoup
import requests
from wordcloud import WordCloud
STOPWORDS_ADDENDUM = [
'Das',
'Der',
'Die',
'Diese',
'Eine',
'In',
'InhaltsverzeichnisGrundgesetz',
'im',
'Jede',
'Jeder',
'Kein',
'Sie',
'Soweit',
'Über'
]
STOPWORDS_FILE_PATH = 'stopwords.txt'
STOPWORDS_URL = 'https://raw.githubusercontent.com/stopwords-iso/stopwords-de/master/stopwords-de.txt'
def download_urls(urls, dir):
paths = []
for url in urls:
file_name = PurePath(url).name
file_path = path.join(dir, file_name)
text = ''
try:
response = requests.get(url)
if response.ok:
text = response.text
else:
print('Bad response for', url, response.status_code)
except requests.exceptions.ConnectionError as exc:
print(exc)
with open(file_path, 'w') as fh:
fh.write(text)
paths.append(file_path)
return paths
def parse_html(path):
with open(path, 'r') as fh:
content = fh.read()
return BeautifulSoup(content, 'html.parser')
def download_stopwords():
stopwords = ''
try:
response = requests.get(STOPWORDS_URL)
if response.ok:
stopwords = response.text
else:
print('Bad response for', url, response.status_code)
except requests.exceptions.ConnectionError as exc:
print(exc)
with open(STOPWORDS_FILE_PATH, 'w') as fh:
fh.write(stopwords)
return stopwords
def download(urls):
return download_urls(urls, '.')
def extract(path):
return parse_html(path)
def transform(soup):
container = soup.find(id='container')
if container is not None:
return container.get_text()
def load(filename, text):
if Path(STOPWORDS_FILE_PATH).exists():
with open(STOPWORDS_FILE_PATH, 'r') as fh:
stopwords = fh.readlines()
else:
stopwords = download_stopwords()
# Strip whitespace around
stopwords = [stopword.strip() for stopword in stopwords]
# Extend stopwords with own ones, which were determined after first run
stopwords = stopwords + STOPWORDS_ADDENDUM
try:
cloud = WordCloud(stopwords=stopwords).generate(text)
cloud.to_file(filename.replace('.html', '.png'))
except ValueError:
print('Could not generate word cloud for', key)
def run_single(path):
soup = extract(path)
content = transform(soup)
load(path, content.strip() if content is not None else '')
def run_everything():
with open('urls.txt', 'r') as fh:
urls = fh.readlines()
urls = [url.strip() for url in urls]
paths = download(urls)
for path in paths:
print('Written to', path)
run_single(path)
print('Done')
if __name__ == "__main__":
args = sys.argv
if len(args) is 1:
run_everything()
else:
if args[1] == 'download':
download([args[2]])
print('Done')
if args[1] == 'parse':
path = args[2]
run_single(path)
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from wordcloud import WordCloud
def extract(url):
elem = None
driver = webdriver.Firefox()
driver.get(url)
try:
found = WebDriverWait(driver, 10).until(
EC.visibility_of(
driver.find_element(By.TAG_NAME, "article")
)
)
# Make a copy of relevant data, because Selenium will throw if
# you try to access the properties after the driver quit
elem = {
"text": found.text
}
finally:
driver.close()
return elem
def transform(elem):
return elem["text"]
def load(text, filepath):
cloud = WordCloud().generate(text)
cloud.to_file(filepath)
if __name__ == "__main__":
url = "https://angular.io/"
filepath = "angular.png"
elem = extract(url)
if elem is not None:
text = transform(elem)
load(text, filepath)
else:
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
