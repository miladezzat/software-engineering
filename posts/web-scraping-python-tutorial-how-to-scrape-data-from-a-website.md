---
card: "/images/default.jpg"
tags: [Web Scraping]
description: "Python is a beautiful language to code in. It has a great pac"
author: "Milad E. Fahmy"
title: "Web Scraping Python Tutorial – How to Scrape Data From A Website"
created: "2021-08-16T15:35:26+02:00"
modified: "2021-08-16T15:35:26+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-web-scraping tag-python ">
<header class="post-full-header">
<h1 class="post-full-title">Web Scraping Python Tutorial – How to Scrape Data From A Website</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/09/webscrapingposter.jpg 300w,
/news/content/images/size/w600/2020/09/webscrapingposter.jpg 600w,
/news/content/images/size/w1000/2020/09/webscrapingposter.jpg 1000w,
/news/content/images/size/w2000/2020/09/webscrapingposter.jpg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/09/webscrapingposter.jpg" alt="Web Scraping Python Tutorial – How to Scrape Data From A Website">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
res = requests.get('https://codedamn.com')
print(res.text)
print(res.status_code)</code></pre><h3 id="passing-requirements-">Passing requirements:</h3><ul><li>Get the contents of the following URL using <code>requests</code> module: <strong>https://codedamn-classrooms.github.io/webscraper-python-codedamn-classroom-website/</strong></li><li>Store the text response (as shown above) in a variable called <code>txt</code></li><li>Store the status code (as shown above) in a variable called <code>status</code></li><li>Print <code>txt</code> and <code>status</code> using <code>print</code> function</li></ul><p>Once you understand what is happening in the code above, it is fairly simple to pass this lab. Here's the solution to this lab:</p><pre><code class="language-py">import requests
# Make a request to https://codedamn-classrooms.github.io/webscraper-python-codedamn-classroom-website/
# Store the result in 'res' variable
res = requests.get(
'https://codedamn-classrooms.github.io/webscraper-python-codedamn-classroom-website/')
txt = res.text
status = res.status_code
print(txt, status)
# print the result</code></pre><p>Let's move on to part 2 now where you'll build more on top of your existing code.</p><h2 id="part-2-extracting-title-with-beautifulsoup">Part 2: Extracting title with BeautifulSoup</h2><p>This is the <a href="https://codedamn.com/practice/web-scraping-python-beautifulsoup/e55282e8-8481-4fb9-9a95-5df4d4a526ce">link to this lab</a>.</p><p>In this whole classroom, you’ll be using a library called <code>BeautifulSoup</code> in Python to do web scraping. Some features that make BeautifulSoup a powerful solution are:</p><ol><li>It provides a lot of simple methods and Pythonic idioms for navigating, searching, and modifying a DOM tree. It doesn't take much code to write an application</li><li>Beautiful Soup sits on top of popular Python parsers like lxml and html5lib, allowing you to try out different parsing strategies or trade speed for flexibility.</li></ol><p>Basically, BeautifulSoup can parse anything on the web you give it.</p><p>Here’s a simple example of BeautifulSoup:</p><pre><code class="language-py">from bs4 import BeautifulSoup
page = requests.get("https://codedamn.com")
soup = BeautifulSoup(page.content, 'html.parser')
title = soup.title.text # gets you the text of the &lt;title&gt;(...)&lt;/title&gt;</code></pre><h3 id="passing-requirements--1">Passing requirements:</h3><ul><li>Use the <code>requests</code> package to get title of the URL: https://codedamn-classrooms.github.io/webscraper-python-codedamn-classroom-website/</li><li>Use BeautifulSoup to store the title of this page into a variable called <code>page_title</code></li></ul><p>Looking at the example above, you can see once we feed the <code>page.content</code> inside BeautifulSoup, you can start working with the parsed DOM tree in a very pythonic way. The solution for the lab would be:</p><pre><code class="language-py">import requests
from bs4 import BeautifulSoup
# Make a request to https://codedamn-classrooms.github.io/webscraper-python-codedamn-classroom-website/
page = requests.get(
"https://codedamn-classrooms.github.io/webscraper-python-codedamn-classroom-website/")
soup = BeautifulSoup(page.content, 'html.parser')
# Extract title of page
page_title = soup.title.text
# print the result
print(page_title)</code></pre><p>This was also a simple lab where we had to change the URL and print the page title. This code would pass the lab.</p><h2 id="part-3-soup-ed-body-and-head">Part 3: Soup-ed body and head</h2><p>This is the <a href="https://codedamn.com/practice/web-scraping-python-beautifulsoup/a91108fd-2f13-4640-ac62-d7877235376a">link to this lab</a>.</p><p>In the last lab, you saw how you can extract the <code>title</code> from the page. It is equally easy to extract out certain sections too. </p><p>You also saw that you have to call <code>.text</code> on these to get the string, but you can print them without calling <code>.text</code> too, and it will give you the full markup. Try to run the example below:</p><pre><code class="language-py">import requests
from bs4 import BeautifulSoup
# Make a request
page = requests.get(
"https://codedamn.com")
soup = BeautifulSoup(page.content, 'html.parser')
# Extract title of page
page_title = soup.title.text
# Extract body of page
page_body = soup.body
# Extract head of page
page_head = soup.head
# print the result
print(page_body, page_head)</code></pre><p>Let's take a look at how you can extract out <code>body</code> and <code>head</code> sections from your pages.</p><h3 id="passing-requirements--2">Passing requirements:</h3><ul><li>Repeat the experiment with URL: <code>https://codedamn-classrooms.github.io/webscraper-python-codedamn-classroom-website/</code></li><li>Store page title (without calling .text) of URL in <code>page_title</code></li><li>Store body content (without calling .text) of URL in <code>page_body</code></li><li>Store head content (without calling .text) of URL in <code>page_head</code></li></ul><p>When you try to print the <code>page_body</code> or <code>page_head</code> you'll see that those are printed as <code>strings</code>. But in reality, when you <code>print(type page_body)</code> you'll see it is not a string but it works fine.</p><p>The solution of this example would be simple, based on the code above:</p><pre><code class="language-py">import requests
from bs4 import BeautifulSoup
# Make a request
page = requests.get(
"https://codedamn-classrooms.github.io/webscraper-python-codedamn-classroom-website/")
soup = BeautifulSoup(page.content, 'html.parser')
# Extract title of page
page_title = soup.title
# Extract body of page
page_body = soup.body
# Extract head of page
page_head = soup.head
# print the result
print(page_title, page_head)</code></pre><h2 id="part-4-select-with-beautifulsoup">Part 4: select with BeautifulSoup</h2><p>This is the <a href="https://codedamn.com/practice/web-scraping-python-beautifulsoup/0ee9fa0e-e7ac-4afa-ad8a-b4b3d16900ef">link to this lab</a>.</p><p>Now that you have explored some parts of BeautifulSoup, let's look how you can select DOM elements with BeautifulSoup methods.</p><p>Once you have the <code>soup</code> variable (like previous labs), you can work with <code>.select</code> on it which is a CSS selector inside BeautifulSoup. That is, you can reach down the DOM tree just like how you will select elements with CSS. Let's look at an example:</p><pre><code class="language-py">import requests
from bs4 import BeautifulSoup
# Make a request
page = requests.get(
"https://codedamn-classrooms.github.io/webscraper-python-codedamn-classroom-website/")
soup = BeautifulSoup(page.content, 'html.parser')
# Extract first &lt;h1&gt;(...)&lt;/h1&gt; text
first_h1 = soup.select('h1')[0].text</code></pre><p><code>.select</code> returns a Python list of all the elements. This is why you selected only the first element here with the <code>[0]</code> index.</p><h3 id="passing-requirements--3">Passing requirements:</h3><ul><li>Create a variable <code>all_h1_tags</code>. Set it to empty list.</li><li>Use <code>.select</code> to select all the <code>&lt;h1&gt;</code> tags and store the text of those h1 inside <code>all_h1_tags</code> list.</li><li>Create a variable <code>seventh_p_text</code> and store the text of the 7th <code>p</code> element (index 6) inside.</li></ul><p>The solution for this lab is:</p><pre><code class="language-py">import requests
from bs4 import BeautifulSoup
# Make a request
page = requests.get(
"https://codedamn-classrooms.github.io/webscraper-python-codedamn-classroom-website/")
soup = BeautifulSoup(page.content, 'html.parser')
# Create all_h1_tags as empty list
all_h1_tags = []
# Set all_h1_tags to all h1 tags of the soup
for element in soup.select('h1'):
all_h1_tags.append(element.text)
# Create seventh_p_text and set it to 7th p element text of the page
seventh_p_text = soup.select('p')[6].text
print(all_h1_tags, seventh_p_text)
</code></pre><p>Let's keep going.</p><h2 id="part-5-top-items-being-scraped-right-now">Part 5: Top items being scraped right now</h2><p>This is the <a href="https://codedamn.com/practice/web-scraping-python-beautifulsoup/0f404796-1b8f-491b-9b50-9e47893d2e47">link to this lab</a>.</p><p>Let's go ahead and extract the top items scraped from the URL: https://codedamn-classrooms.github.io/webscraper-python-codedamn-classroom-website/</p><p>If you open this page in a new tab, you’ll see some top items. In this lab, your task is to scrape out their names and store them in a list called <code>top_items</code>. You will also extract out the reviews for these items as well.</p><p>To pass this challenge, take care of the following things:</p><ul><li>Use <code>.select</code> to extract the titles. (Hint: one selector for product titles could be <code>a.title</code>)</li><li>Use <code>.select</code> to extract the review count label for those product titles. (Hint: one selector for reviews could be <code>div.ratings</code>) Note: this is a complete label (i.e. <strong>2 reviews</strong>) and not just a number.</li><li>Create a new dictionary in the format:</li></ul><pre><code class="language-py">info = {
"title": 'Asus AsusPro Adv...   '.strip(),
"review": '2 reviews\n\n\n'.strip()
}</code></pre><ul><li>Note that you are using the <code>strip</code> method to remove any extra newlines/whitespaces you might have in the output. This is <strong>important</strong> to pass this lab.</li><li>Append this dictionary in a list called <code>top_items</code></li><li>Print this list at the end</li></ul><p>There are quite a few tasks to be done in this challenge. Let's take a look at the solution first and understand what is happening:</p><pre><code class="language-py">import requests
from bs4 import BeautifulSoup
# Make a request
page = requests.get(
"https://codedamn-classrooms.github.io/webscraper-python-codedamn-classroom-website/")
soup = BeautifulSoup(page.content, 'html.parser')
# Create top_items as empty list
top_items = []
# Extract and store in top_items according to instructions on the left
products = soup.select('div.thumbnail')
for elem in products:
title = elem.select('h4 &gt; a.title')[0].text
review_label = elem.select('div.ratings')[0].text
info = {
"title": title.strip(),
"review": review_label.strip()
}
top_items.append(info)
print(top_items)</code></pre><p>Note that this is only one of the solutions. You can attempt this in a different way too. In this solution:</p><ol><li>First of all you select all the <code>div.thumbnail</code> elements which gives you a list of individual products</li><li>Then you iterate over them</li><li>Because <code>select</code> allows you to chain over itself, you can use select again to get the title.</li><li>Note that because you're running inside a loop for <code>div.thumbnail</code> already, the <code>h4 &gt; a.title</code> selector would only give you one result, inside a list. You select that list's 0th element and extract out the text.</li><li>Finally you strip any extra whitespace and append it to your list.</li></ol><p>Straightforward right?</p><h2 id="part-6-extracting-links">Part 6: Extracting Links</h2><p>This is the <a href="https://codedamn.com/practice/web-scraping-python-beautifulsoup/be9b007a-ff03-45d5-ad44-1adecdb21e2a">link to this lab</a>.</p><p>So far you have seen how you can extract the text, or rather innerText of elements. Let's now see how you can extract attributes by extracting links from the page.</p><p>Here’s an example of how to extract out all the image information from the page:</p><pre><code class="language-py">import requests
from bs4 import BeautifulSoup
# Make a request
page = requests.get(
"https://codedamn-classrooms.github.io/webscraper-python-codedamn-classroom-website/")
soup = BeautifulSoup(page.content, 'html.parser')
# Create top_items as empty list
image_data = []
# Extract and store in top_items according to instructions on the left
images = soup.select('img')
for image in images:
src = image.get('src')
alt = image.get('alt')
image_data.append({"src": src, "alt": alt})
print(image_data)</code></pre><p>In this lab, your task is to extract the <code>href</code> attribute of links with their <code>text</code> as well. Make sure of the following things:</p><ul><li>You have to create a list called <code>all_links</code></li><li>In this list, store all link dict information. It should be in the following format:</li></ul><pre><code class="language-py">info = {
"href": "&lt;link here&gt;",
"text": "&lt;link text here&gt;"
}</code></pre><ul><li>Make sure your <code>text</code> is stripped of any whitespace</li><li>Make sure you check if your <code>.text</code> is None before you call <code>.strip()</code> on it.</li><li>Store all these dicts in the <code>all_links</code></li><li>Print this list at the end</li></ul><p>You are extracting the attribute values just like you extract values from a dict, using the <code>get</code> function. Let's take a look at the solution for this lab:</p><pre><code class="language-py">import requests
from bs4 import BeautifulSoup
# Make a request
page = requests.get(
"https://codedamn-classrooms.github.io/webscraper-python-codedamn-classroom-website/")
soup = BeautifulSoup(page.content, 'html.parser')
# Create top_items as empty list
all_links = []
# Extract and store in top_items according to instructions on the left
links = soup.select('a')
for ahref in links:
text = ahref.text
text = text.strip() if text is not None else ''
href = ahref.get('href')
href = href.strip() if href is not None else ''
all_links.append({"href": href, "text": text})
print(all_links)
</code></pre><p>Here, you extract the <code>href</code> attribute just like you did in the image case. The only thing you're doing is also checking if it is None. We want to set it to empty string, otherwise we want to strip the whitespace.</p><h2 id="part-7-generating-csv-from-data">Part 7: Generating CSV from data</h2><p>This is the <a href="https://codedamn.com/practice/web-scraping-python-beautifulsoup/a10e33c1-7780-40bc-a541-adc632fab185">link to this lab</a>.</p><p>Finally, let's understand how you can generate CSV from a set of data. You will create a CSV with the following headings:</p><ol><li>Product Name</li><li>Price</li><li>Description</li><li>Reviews</li><li>Product Image</li></ol><p>These products are located in the <code>div.thumbnail</code>. The CSV boilerplate is given below:</p><pre><code class="language-py">import requests
from bs4 import BeautifulSoup
import csv
# Make a request
page = requests.get(
"https://codedamn-classrooms.github.io/webscraper-python-codedamn-classroom-website/")
soup = BeautifulSoup(page.content, 'html.parser')
all_products = []
products = soup.select('div.thumbnail')
for product in products:
# TODO: Work
print("Work on product here")
keys = all_products[0].keys()
with open('products.csv', 'w', newline='') as output_file:
dict_writer = csv.DictWriter(output_file, keys)
dict_writer.writeheader()
dict_writer.writerows(all_products)
</code></pre><p>You have to extract data from the website and generate this CSV for the three products.</p><h3 id="passing-requirements--4">Passing Requirements:</h3><ul><li>Product Name is the whitespace trimmed version of the name of the item (example - Asus AsusPro Adv..)</li><li>Price is the whitespace trimmed but full price label of the product (example - $1101.83)</li><li>The description is the whitespace trimmed version of the product description (example - Asus AsusPro Advanced BU401LA-FA271G Dark Grey, 14", Core i5-4210U, 4GB, 128GB SSD, Win7 Pro)</li><li>Reviews are the whitespace trimmed version of the product (example - 7 reviews)</li><li>Product image is the URL (src attribute) of the image for a product (example - /webscraper-python-codedamn-classroom-website/cart2.png)</li><li>The name of the CSV file should be <strong>products.csv</strong> and should be stored in the same directory as your <strong>script.py</strong> file</li></ul><p>Let's see the solution to this lab:</p><pre><code class="language-py">import requests
from bs4 import BeautifulSoup
import csv
# Make a request
page = requests.get(
"https://codedamn-classrooms.github.io/webscraper-python-codedamn-classroom-website/")
soup = BeautifulSoup(page.content, 'html.parser')
# Create top_items as empty list
all_products = []
# Extract and store in top_items according to instructions on the left
products = soup.select('div.thumbnail')
for product in products:
name = product.select('h4 &gt; a')[0].text.strip()
description = product.select('p.description')[0].text.strip()
price = product.select('h4.price')[0].text.strip()
reviews = product.select('div.ratings')[0].text.strip()
image = product.select('img')[0].get('src')
all_products.append({
"name": name,
"description": description,
"price": price,
"reviews": reviews,
"image": image
})
keys = all_products[0].keys()
with open('products.csv', 'w', newline='') as output_file:
dict_writer = csv.DictWriter(output_file, keys)
dict_writer.writeheader()
dict_writer.writerows(all_products)
</code></pre><p>The <code>for</code> block is the most interesting here. You extract all the elements and attributes from what you've learned so far in all the labs. </p><p>When you run this code, you end up with a nice CSV file. And that's about all the basics of web scraping with BeautifulSoup!</p><h2 id="conclusion">Conclusion</h2><p>I hope this interactive classroom from <a href="https://codedamn.com">codedamn</a> helped you understand the basics of web scraping with Python. </p><p>If you liked this classroom and this blog, tell me about it on my <a href="https://twitter.com/mehulmpt">twitter</a> and <a href="https://instagram.com/mehulmpt">Instagram</a>. Would love to hear feedback!</p>
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
