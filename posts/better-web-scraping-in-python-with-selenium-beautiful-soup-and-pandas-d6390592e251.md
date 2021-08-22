---
card: "https://cdn-media-1.freecodecamp.org/images/1*DiffPQdgEAjDK4M_unUd4Q.jpeg"
tags: [Python]
description: "by Dave Gray"
author: "Milad E. Fahmy"
title: "Better web scraping in Python with Selenium, Beautiful Soup, and pandas"
created: "2021-08-16T15:41:20+02:00"
modified: "2021-08-16T15:41:20+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-python tag-javascript tag-tech tag-programming tag-tutorial ">
<header class="post-full-header">
<h1 class="post-full-title">Better web scraping in Python with Selenium, Beautiful Soup, and pandas</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*DiffPQdgEAjDK4M_unUd4Q.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*DiffPQdgEAjDK4M_unUd4Q.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*DiffPQdgEAjDK4M_unUd4Q.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*DiffPQdgEAjDK4M_unUd4Q.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*DiffPQdgEAjDK4M_unUd4Q.jpeg" alt="Better web scraping in Python with Selenium, Beautiful Soup, and pandas">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
from selenium.webdriver.common.keys import Keys
from bs4 import BeautifulSoup
import re
import pandas as pd
import os</code></pre><p>Selenium will now start a browser session. For Selenium to work, it must access the browser driver. By default, it will look in the same directory as the Python script. Links to Chrome, Firefox, Edge, and Safari drivers <a href="https://pypi.python.org/pypi/selenium" rel="noopener">available here</a>. The example code below uses Firefox:</p><pre><code class="language-py">#launch url
url = "http://kanview.ks.gov/PayRates/PayRates_Agency.aspx"
# create a new Firefox session
driver = webdriver.Firefox()
driver.implicitly_wait(30)
driver.get(url)
python_button = driver.find_element_by_id('MainContent_uxLevel1_Agencies_uxAgencyBtn_33') #FHSU
soup_level1=BeautifulSoup(driver.page_source, 'lxml')
datalist = [] #empty list
x = 0 #counter
for link in soup_level1.find_all('a', id=re.compile("^MainContent_uxLevel2_JobTitles_uxJobTitleBtn_")):
##code to execute in for loop goes here</code></pre><p>You can see from the example above that Beautiful Soup will retrieve a JavaScript link for each job title at the state agency. Now in the code block of the for / in loop, Selenium will click each JavaScript link. Beautiful Soup will then retrieve the table from each page.</p><pre><code class="language-py">#Beautiful Soup grabs all Job Title links
for link in soup_level1.find_all('a', id=re.compile("^MainContent_uxLevel2_JobTitles_uxJobTitleBtn_")):
#Selenium visits each Job Title page
python_button = driver.find_element_by_id('MainContent_uxLevel2_JobTitles_uxJobTitleBtn_' + str(x))
python_button.click() #click link
#Selenium hands of the source of the specific job page to Beautiful Soup
soup_level2=BeautifulSoup(driver.page_source, 'lxml')
#Beautiful Soup grabs the HTML table on the page
table = soup_level2.find_all('table')[0]
#Giving the HTML table to pandas to put in a dataframe object
df = pd.read_html(str(table),header=0)
#Store the dataframe in a list
datalist.append(df[0])
#Ask Selenium to click the back button
driver.execute_script("window.history.go(-1)")
#increment the counter variable before starting the loop over
#end the Selenium browser session
driver.quit()
#combine all pandas dataframes in the list into one big dataframe
result = pd.concat([pd.DataFrame(datalist[i]) for i in range(len(datalist))],ignore_index=True)
#convert the pandas dataframe to JSON
json_records = result.to_json(orient='records')</code></pre><p>Now Python creates the JSON data file. It is ready for use!</p><pre><code class="language-py">#get current working directory
path = os.getcwd()
#open, write, and close the file
f = open(path + "\\fhsu_payroll_data.json","w") #FHSU
f.write(json_records)
from selenium.webdriver.common.keys import Keys
from bs4 import BeautifulSoup
import re
import pandas as pd
from tabulate import tabulate
import os
#launch url
url = "http://kanview.ks.gov/PayRates/PayRates_Agency.aspx"
# create a new Firefox session
driver = webdriver.Firefox()
driver.implicitly_wait(30)
driver.get(url)
#After opening the url above, Selenium clicks the specific agency link
python_button = driver.find_element_by_id('MainContent_uxLevel1_Agencies_uxAgencyBtn_33') #FHSU
python_button.click() #click fhsu link
#Selenium hands the page source to Beautiful Soup
soup_level1=BeautifulSoup(driver.page_source, 'lxml')
datalist = [] #empty list
x = 0 #counter
#Beautiful Soup finds all Job Title links on the agency page and the loop begins
for link in soup_level1.find_all('a', id=re.compile("^MainContent_uxLevel2_JobTitles_uxJobTitleBtn_")):
#Selenium visits each Job Title page
python_button = driver.find_element_by_id('MainContent_uxLevel2_JobTitles_uxJobTitleBtn_' + str(x))
python_button.click() #click link
#Selenium hands of the source of the specific job page to Beautiful Soup
soup_level2=BeautifulSoup(driver.page_source, 'lxml')
#Beautiful Soup grabs the HTML table on the page
table = soup_level2.find_all('table')[0]
#Giving the HTML table to pandas to put in a dataframe object
df = pd.read_html(str(table),header=0)
#Store the dataframe in a list
datalist.append(df[0])
#Ask Selenium to click the back button
driver.execute_script("window.history.go(-1)")
#increment the counter variable before starting the loop over
x += 1
#end loop block
#loop has completed
#end the Selenium browser session
driver.quit()
#combine all pandas dataframes in the list into one big dataframe
result = pd.concat([pd.DataFrame(datalist[i]) for i in range(len(datalist))],ignore_index=True)
#convert the pandas dataframe to JSON
json_records = result.to_json(orient='records')
#pretty print to CLI with tabulate
#converts to an ascii table
print(tabulate(result, headers=["Employee Name","Job Title","Overtime Pay","Total Gross Pay"],tablefmt='psql'))
#get current working directory
path = os.getcwd()
#open, write, and close the file
f = open(path + "\\fhsu_payroll_data.json","w") #FHSU
f.write(json_records)
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
