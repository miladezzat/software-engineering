---
card: "https://cdn-media-2.freecodecamp.org/w1280/5ffd8f3b75d5f706921cc190.jpg"
tags: [Python]
description: "Selenium is a tool designed to help you run automated tests i"
author: "Milad E. Fahmy"
title: "How to Code a Scraping Bot with Selenium and Python"
created: "2021-08-16T15:34:53+02:00"
modified: "2021-08-16T15:34:53+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-python tag-selenium tag-web-scraping tag-tutorial ">
<header class="post-full-header">
<h1 class="post-full-title">How to Code a Scraping Bot with Selenium and&nbsp;Python</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5ffd8f3b75d5f706921cc190.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5ffd8f3b75d5f706921cc190.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5ffd8f3b75d5f706921cc190.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5ffd8f3b75d5f706921cc190.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5ffd8f3b75d5f706921cc190.jpg" alt="How to Code a Scraping Bot with Selenium and&nbsp;Python">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Selenium is a tool designed to help you run automated tests in web applications. It is available in several different programming languages. </p><p>Although it’s not its main purpose, Selenium is also used in Python for web scraping, because it can access JavaScript-rendered content (which regular scraping tools like BeautifulSoup can’t do).</p><p>Selenium is also useful when you need to interact with the page somehow before collecting the data, such as clicking buttons or filling out fields. This is the use case that will be covered in this article. </p><p>As an example, we’ll scrape investing.com to extract historical data of dollar exchange rates against one or more currencies.</p><p>If you search the web, you can find APIs and Python packages that make it much easier to gather financial data (instead of scraping it manually). However, the idea here is to explore how Selenium can help you with general data extraction.</p><h2 id="the-website-we-re-going-to-scrape">The Website We're Going to Scrape</h2><p>First, we need to understand the website. <a href="https://investing.com/currencies/usd-eur-historical-data">This site</a> contains the historical data for the exchange rate of the dollar against the euro.</p><p>On this page, you can see a table with the data and the option to set the date range we want. That’s what we’re going to use. </p><p>To see the data for other currencies against the dollar, just replace “<em>eur</em>” with the other currency code in the URL.</p><p>Also, this assumes that you’ll only want the currency's exchange rate against the dollar. If that’s not the case, just replace the “usd” in the URL.</p><h2 id="the-scraper-s-code">The Scraper's Code</h2><p>We’ll start with the imports, and we don’t need much. Let's import some useful items from Selenium: the <code>sleep</code> function to insert some pauses in the code, and Pandas to manipulate the date when necessary.</p><pre><code class="language-python">from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
from time import sleep
import pandas as pd</code></pre><p>Next, we’ll write a function to scrape the data. The function will receive:</p><ul><li>A list of currency codes</li><li>A start date</li><li>An end date</li><li>A boolean informing if we want to export the data as a <em>.csv</em> file. I’ll use False as the default.</li></ul><p>Also, as the idea here is to build a scraper capable of gathering data about multiple currencies, we’ll also initialize an empty list to store the data from each currency.</p><pre><code class="language-python">def get_currencies(currencies, start, end, export_csv=False):
frames = []</code></pre><p>As the function now has a list of currencies, you’ll probably imagine that we’ll iterate over this list and get the data currency by currency. That’s precisely the plan.</p><p>So for each currency in the currencies list, we’ll create a URL, instantiate a driver object, and use it to get the page. Then we’ll maximize the window, but that’s only visible if you keep <code>option.headless </code>as False. Otherwise, Selenium will do all the work without showing you anything.</p><pre><code class="language-python">for currency in currencies:
my_url = f'https://br.investing.com/currencies/usd-{currency.lower()}-historical-data'
option = Options()
option.headless = False
driver = webdriver.Chrome(options=option)
driver.get(my_url)
driver.maximize_window()</code></pre><p>We’re already looking at the historical data at this point, and we could just get the table with the data. However, by default, we only see the data for about the last 20 days. We want to get this data for any time period. </p><p>For this, we’ll use some interesting Selenium functionalities to interact with the website. This is when Selenium shines!</p><p>What we’ll do here is click on the dates and fill the Start Date and End Date fields with the dates we want and hit Apply. </p><p>For this, we’ll use <code>WebDriverWait</code>, <code>ExpectedConditions</code>, and <code>By</code> to make sure the web driver will wait for the elements we want to interact with to be clickable. </p><p>This is important because if the diver tries to interact with something before it becomes clickable, an exception will be raised.</p><p>The waiting time will be twenty seconds, but it’s up to you to set it as you find appropriate. First, let’s select the date button by its Xpath and then click on it.</p><pre><code class="language-python">date_button = WebDriverWait(driver, 20).until(
EC.element_to_be_clickable((By.XPATH,
"/html/body/div[5]/section/div[8]/div[3]/div/div[2]/span")))
date_button.click()</code></pre><p>Now, we need to fill the Start Date field. Let’s first select it and then use <code>clear</code> to delete the default date and <code>send_keys</code> to fill it with the date we want.</p><pre><code class="language-python">start_bar = WebDriverWait(driver, 20).until(
EC.element_to_be_clickable((By.XPATH,
"/html/body/div[7]/div[1]/input[1]")))
start_bar.clear()
start_bar.send_keys(start) </code></pre><p>And now we repeat the process for the End Date field.</p><pre><code class="language-python">end_bar = WebDriverWait(driver, 20).until(
EC.element_to_be_clickable((By.XPATH,
"/html/body/div[7]/div[1]/input[2]")))
end_bar.clear()
end_bar.send_keys(end)</code></pre><p>With this done, we’ll select the Apply button and click on it. Then we use <code>sleep</code> to pause the code for a few seconds and make sure the new page is fully loaded.</p><pre><code class="language-python">apply_button = WebDriverWait(driver, 20).until(
EC.element_to_be_clickable((By.XPATH,
"/html/body/div[7]/div[5]/a")))
apply_button.click()
sleep(5)</code></pre><p>If you had <code>option.headless </code>as False, you’ll see this entire process happening in front of you as if somebody was actually clicking on the page. When Selenium clicks on Apply, you’ll see the table reloading to show the data for the time period you specified.</p><p>We now use the <code>pandas.read_html </code>function to select all the tables on the page. This function will receive the page’s source code. Finally, we can quit the driver.</p><pre><code class="language-python">dataframes = pd.read_html(driver.page_source)
driver.quit()
print(f'{currency} scraped.')</code></pre><h2 id="how-to-handle-exceptions-in-selenium">How to Handle Exceptions in Selenium</h2><p>The process of collecting the data is done. But we need to consider that Selenium can sometimes be a little unstable and could eventually fail to load the page at some point during all the actions we’re performing here.</p><p>To prevent that, we’ll have the entire code inside a <code>try</code> clause that will be inside an infinity loop. Once Selenium manages to collect the data as I described above, the loop will be broken. But every time it finds a problem, an <code>expect</code> clause will be activated. </p><p>In this scenario the code will:</p><ul><li>Quit the driver – it’s always important to do this so we don’t end up with dozens of memory consuming web drivers running</li><li>Print a message indicating the error</li><li>Sleep for thirty seconds</li><li>Go to the start of the loop once more</li></ul><p>This process will be repeated until the data for each currency is properly collected. And this is the code for all this:</p><pre><code class="language-python"> for currency in currencies:
while True:
try:
# Opening the connection and grabbing the page
my_url = f'https://br.investing.com/currencies/usd-{currency.lower()}-historical-data'
option = Options()
option.headless = False
driver = webdriver.Chrome(options=option)
driver.get(my_url)
driver.maximize_window()
# Clicking on the date button
date_button = WebDriverWait(driver, 20).until(
EC.element_to_be_clickable((By.XPATH,
"/html/body/div[5]/section/div[8]/div[3]/div/div[2]/span")))
date_button.click()
# Sending the start date
start_bar = WebDriverWait(driver, 20).until(
EC.element_to_be_clickable((By.XPATH,
"/html/body/div[7]/div[1]/input[1]")))
start_bar.clear()
start_bar.send_keys(start)
# Sending the end date
end_bar = WebDriverWait(driver, 20).until(
EC.element_to_be_clickable((By.XPATH,
"/html/body/div[7]/div[1]/input[2]")))
end_bar.clear()
end_bar.send_keys(end)
# Clicking on the apply button
apply_button = WebDriverWait(driver,20).until(
EC.element_to_be_clickable((By.XPATH,
"/html/body/div[7]/div[5]/a")))
apply_button.click()
sleep(5)
# Getting the tables on the page and quiting
dataframes = pd.read_html(driver.page_source)
driver.quit()
print(f'{currency} scraped.')
break
except:
driver.quit()
print(f'Failed to scrape {currency}. Trying again in 30 seconds.')
sleep(30)
continue
</code></pre><p>One last step, though. If you recall, what we have so far is a list containing all the tables on the page stored as DataFrames. We need to select the one table that contains the historical data we want.</p><p>For each DataFrame in this dataframes list, we’ll check if the name of its columns matches what we expect. If they do, then that’s our frame and we break the loop. And now we’re finally ready to append this DataFrame to the list that was initialized in the beginning.</p><pre><code class="language-python">for dataframe in dataframes:
if dataframe.columns.tolist() == ['Date', 'Price', 'Open', 'High', 'Low', 'Change%']:
df = dataframe
break
frames.append(df)</code></pre><p>And yes, if the <code>export_csv</code> parameter was set to True, we would need to export a <em>.csv</em> file. But that’s far from being an issue as the <code>DataFrame.to_csv</code> method can easily get this done. </p><p>And then we can just wrap this function up by returning the list of DataFrames. This last step is done after the looping through the currencies list is over, of course.</p><pre><code class="language-python">if export_csv:
df.to_csv('currency.csv', index=False)
print(f'{currency}.csv exported.')
# Outside of the loop
return frames</code></pre><p>And that’s it! Here’s the complete code for these two last steps combined:</p><pre><code class="language-python">		# Selecting the correct table
for dataframe in dataframes:
if dataframe.columns.tolist() == ['Date', 'Price', 'Open', 'High', 'Low', 'Change%']:
df = dataframe
break
frames.append(df)
# Exporting the .csv file
if export_csv:
df.to_csv('currency.csv', index=False)
print(f'{currency}.csv exported.')
return frames</code></pre><h2 id="next-steps-and-wrapping-up">Next Steps and Wrapping Up</h2><p>So far this code gets the historical data of the exchange rate of a list of currencies against the dollar and returns a list of DataFrames and several <em>.csv</em> files.</p><p>But there’s always room for improvement. With a few more lines of code, it’s not hard to make the function return and export a single DataFrame containing the data for every currency in the list. </p><p>Another suggestion is to write an <code>update </code>function using the same Selenium functionalities that receive an existing dataframe and update the historical data to the present date.</p><p>Besides, the exact same logic used to scrape the currencies can be used to scrape stocks, indices, commodities, futures, and much more. There are so many pages you can scrape.</p><p>However, if that’s the goal, then it’s important to insert more pauses in the code to avoid overloading the server. You should also take advantage of a proxy provider, such as <a href="https://infatica.io/" rel="noopener nofollow noopener">Infatica</a>, to make sure your code will keep running as long as there are pages left to scrape and that you and your connection are protected.</p><p>Finally, Selenium can be useful in several other situations such as signing in to websites, filling out forms, selecting items in a dropdown list, and much more. Of course, it’s not the only solution for such problems, but it can definitely be useful depending on the use case.</p><p>I hope you’ve enjoyed this article and that it has helped you out. If you have a question or a suggestion, feel free to <a href="https://www.linkedin.com/in/otavioss28/" rel="noopener">be in touch</a>.</p>
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
