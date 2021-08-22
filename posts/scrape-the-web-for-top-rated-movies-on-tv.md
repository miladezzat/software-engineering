---
card: "/images/default.jpg"
tags: [Web Scraping]
description: "In this article, I will show how to scrape the internet for t"
author: "Milad E. Fahmy"
title: "The Complete Guide to Scraping the Web for Top Rated Movies on TV"
created: "2021-08-16T15:38:05+02:00"
modified: "2021-08-16T15:38:05+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-web-scraping tag-scrapy tag-python ">
<header class="post-full-header">
<h1 class="post-full-title">The Complete Guide to Scraping the Web for Top Rated Movies on TV</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/01/0_D52CsZmqCYvifA3M.jpeg 300w,
/news/content/images/size/w600/2020/01/0_D52CsZmqCYvifA3M.jpeg 600w,
/news/content/images/size/w1000/2020/01/0_D52CsZmqCYvifA3M.jpeg 1000w,
/news/content/images/size/w2000/2020/01/0_D52CsZmqCYvifA3M.jpeg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/01/0_D52CsZmqCYvifA3M.jpeg" alt="The Complete Guide to Scraping the Web for Top Rated Movies on TV">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
class TVGuideItem(scrapy.Item):
title = scrapy.Field()
channel = scrapy.Field()
start_ts = scrapy.Field()
film_date_long = scrapy.Field()
film_date_short = scrapy.Field()
genre = scrapy.Field()
plot = scrapy.Field()
rating = scrapy.Field()
tmdb_link = scrapy.Field()
release_date = scrapy.Field()
nb_votes = scrapy.Field()</code></pre><h1 id="processing-items-with-pipelines">Processing Items with Pipelines</h1><p>After starting a new Scrapy project, you’ll have a file called <strong><strong>pipelines.py</strong></strong>. Open this file and copy-paste the code shown below. Afterward, I’ll show you step-by-step what each part of the code does.</p><pre><code class="language-python">import sqlite3 as lite
con = None  # db connection
class StoreInDBPipeline(object):
def __init__(self):
self.setupDBCon()
self.dropTopFilmsTable()
self.createTopFilmsTable()
def process_item(self, item, spider):
self.storeInDb(item)
return item
def storeInDb(self, item):
self.cur.execute("INSERT INTO topfilms(\
title, \
channel, \
start_ts, \
film_date_long, \
film_date_short, \
rating, \
genre, \
plot, \
tmdb_link, \
release_date, \
nb_votes \
) \
VALUES( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ? )",
(
item['title'],
item['channel'],
item['start_ts'],
item['film_date_long'],
item['film_date_short'],
float(item['rating']),
item['genre'],
item['plot'],
item['tmdb_link'],
item['release_date'],
item['nb_votes']
))
self.con.commit()
def setupDBCon(self):
self.con = lite.connect('topfilms.db')
self.cur = self.con.cursor()
def __del__(self):
self.closeDB()
def createTopFilmsTable(self):
self.cur.execute("CREATE TABLE IF NOT EXISTS topfilms(id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, \
title TEXT, \
channel TEXT, \
start_ts TEXT, \
film_date_long TEXT, \
film_date_short TEXT, \
rating TEXT, \
genre TEXT, \
plot TEXT, \
tmdb_link TEXT, \
release_date TEXT, \
nb_votes \
)")
def dropTopFilmsTable(self):
self.cur.execute("DROP TABLE IF EXISTS topfilms")
def closeDB(self):
self.con.close()</code></pre><p>First, we start by importing the <a href="https://docs.python.org/2/library/sqlite3.html" rel="noopener nofollow">SQLite package</a> and give it the alias <code>lite</code>. We also initialize a variable <code>con</code> which is used for the database connection.</p><h2 id="creating-a-class-to-store-items-in-the-database">Creating a class to store Items in the database</h2><p>Next, you create a <a href="https://docs.python.org/2/tutorial/classes.html" rel="noopener nofollow"><strong><strong><em><em>class</em></em></strong></strong></a> with a logical name. After enabling the pipeline in the settings file (more on that later), this class will be called.</p><pre><code class="language-python">class StoreInDBPipeline(object):</code></pre><h2 id="defining-the-constructor-method">Defining the constructor method</h2><p>The constructor method is the method with the name <code>__init__</code>. This method is automatically run when creating an instance of the <code>StoreInDBPipeline</code> class.</p><pre><code class="language-python">def __init__(self):
self.setupDBCon()
self.dropTopFilmsTable()
self.createTopFilmsTable()</code></pre><p>In the constructor method, we launch three other methods which are defined below the constructor method.</p><h2 id="setupdbcon-method">SetupDBCon Method</h2><p>With the method <code>setupDBCon</code>, we create the <code>topfilms</code> database (if it didn’t exist yet) and make a connection to it with the <code>connect</code> function.</p><pre><code class="language-python">def setupDBCon(self):
self.con = lite.connect('topfilms.db')
self.cur = self.con.cursor()</code></pre><p>Here we use the alias lite for the SQLite package. Secondly, we create a Cursor object with the <code>cursor</code> function. With this Cursor object, we can execute SQL statements in the database.</p><h2 id="droptopfilmstable-method">DropTopFilmsTable Method</h2><p>The second method that is called in the constructor is <code>dropTopFilmsTable</code>. As the name says, it drops the table in the SQLite database.</p><p>Each time the web scraper is run the database will be completely removed. It is up to you if you want to do that as well. If you want to do some querying or analysis of the films’ data, you could keep the scraping results of each run.</p><p>I just want to see the top rated films of the coming days and nothing more. Therefore I decided to delete the database in each run.</p><pre><code class="language-python">def dropTopFilmsTable(self):
self.cur.execute("DROP TABLE IF EXISTS topfilms")</code></pre><p>With the Cursor object <code>cur</code> we execute the <code>DROP</code> statement.</p><h2 id="createtopfilmstable-method">CreateTopFilmsTable Method</h2><p>After dropping the top films table, we need to create it. This is done by the last method call in the constructor method.</p><pre><code class="language-python">def createTopFilmsTable(self):
self.cur.execute("CREATE TABLE IF NOT EXISTS topfilms(id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, \
title TEXT, \
channel TEXT, \
start_ts TEXT, \
film_date_long TEXT, \
film_date_short TEXT, \
rating TEXT, \
genre TEXT, \
plot TEXT, \
tmdb_link TEXT, \
release_date TEXT, \
nb_votes \
)")</code></pre><p>Again we use the Cursor object <code>cur</code> to execute the <code>CREATE TABLE</code> statement. The fields that are added to the table top films are the same as in the Scrapy Item we created before. To keep things easy, I use exactly the same names in the SQLite table as in the Item. Only the <code>id</code> field is extra.</p><p><em><em><strong><strong>Sidenote</strong></strong>: a good application to look at your SQLite databases is the <a href="https://addons.mozilla.org/nl/firefox/addon/sqlite-manager/" rel="noopener nofollow">SQLite Manager plugin in Firefox</a>. You can watch this <a href="https://youtu.be/y-yA7YT-7gw" rel="noopener nofollow">SQLite Manager tutorial on Youtube</a> to learn how to use this plugin.</em></em></p><h2 id="process_item-method">Process_item Method</h2><p>This method must be implemented in the Pipeline class and it must return a dict, an Item or DropItem exception. In our web scraper, we will return the item.</p><pre><code class="language-python">def process_item(self, item, spider):
self.storeInDb(item)
return item</code></pre><p>In contrast with the other methods explained, it has two extra arguments. The <code>item</code> that was scraped and the <code>spider</code> that scraped the item. From this method, we launch the <code>storeInDb</code> method and afterward return the item.</p><h2 id="storeindb-method">StoreInDb Method</h2><p>This method executes an <code>INSERT</code> statement to insert the scraped item into the SQLite database.</p><pre><code class="language-python">def storeInDb(self, item):
self.cur.execute("INSERT INTO topfilms(\
title, \
channel, \
start_ts, \
film_date_long, \
film_date_short, \
rating, \
genre, \
plot, \
tmdb_link, \
release_date, \
nb_votes \
) \
VALUES( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ? )",
(
item['title'],
item['channel'],
item['start_ts'],
item['film_date_long'],
item['film_date_short'],
float(item['rating']),
item['genre'],
item['plot'],
item['tmdb_link'],
item['release_date'],
item['nb_votes']
))
self.con.commit()</code></pre><p>The values for the table fields come from the item, which is an argument for this method. These values are simply called as a dict value (remember that an Item is nothing more than a dict?).</p><h2 id="every-constructor-has-a-destructor">Every constructor has a... destructor</h2><p>The counterpart of the constructor method is the destructor method with the name <code>__del__</code>. In the destructor method for this pipelines class, we close the connection to the database.</p><pre><code class="language-python">def __del__(self):
self.closeDB()</code></pre><h2 id="closedb-method">CloseDB Method</h2><pre><code class="language-python">def closeDB(self):
self.con.close()</code></pre><p>In this last method, we close the database connection with the <code>close</code> function. So now we have written a fully functional pipeline. There is still one last step left to enable the pipeline.</p><h2 id="enabling-the-pipeline-in-settings-py">Enabling the pipeline in settings.py</h2><p>Open the <strong><strong><em><em>settings.py</em></em></strong></strong> file and add the following code:</p><pre><code class="language-python">ITEM_PIPELINES = {
'topfilms.pipelines.StoreInDBPipeline':1
}</code></pre><p>The <strong><strong><em><em>integer value</em></em></strong></strong> indicates the order in which the pipelines are run. As we have only one pipeline, we assign it the value 1.</p><h1 id="creating-a-spider-in-scrapy">Creating a Spider in Scrapy</h1><p>Now we’ll be looking at the core of Scrapy, the <strong><strong><em><em>Spider</em></em></strong></strong>. This is where the heavy lifting of your web scraper will be done. I’ll show you step-by-step how to create one.</p><h2 id="importing-the-necessary-packages">Importing the necessary packages</h2><p>First of all, we’ll import the necessary packages and modules. We use the <code>CrawlSpider</code> module to follow links throughout the online TV guide.</p><p><code>Rule</code> and <code>LinkExtractor</code> are used to determine which links we want to follow.</p><p>The <code>config</code> module contains some constants like <code>DOM_1, DOM_2</code> and <code>START_URL</code> that are used in the Spider. The config module is found one directory up to the current directory. That’s why you see two dots before the config module.</p><p>And lastly, we import the <code>TVGuideItem</code>. This TVGuideItem will be used to contain the information during the scraping.</p><pre><code class="language-python">import scrapy
from scrapy.spiders import CrawlSpider, Rule
from scrapy.linkextractors import LinkExtractor
from fuzzywuzzy import fuzz
from ..config import *
name = "tvguide"
allowed_domains = [DOM_1, DOM_2]
start_urls = [START_URL]
# Extract the links from the navigation per day
# We will not crawl the films for yesterday
rules = (
Rule(LinkExtractor(allow=(), deny=(r'\/gisteren'), restrict_xpaths=('//a[@class="button button--beta"]',)), callback="parse_by_day", follow= True),
film_date_long = response.xpath('//div[@class="grid__col__inner"]/p/text()').extract_first()
film_date_long = film_date_long.rsplit(',',1)[-1].strip()  # Remove day name and white spaces
# Create a film date with a short format like YYYYMMDD to sort the results chronologically
film_day_parts = film_date_long.split()
months_list = ['januari', 'februari', 'maart',
'april', 'mei', 'juni', 'juli',
'augustus', 'september', 'oktober',
'november', 'december' ]
year = str(film_day_parts[2])
month = str(months_list.index(film_day_parts[1]) + 1).zfill(2)
day = str(film_day_parts[0]).zfill(2)
film_date_short = year + month + day
for col_inner in response.xpath('//div[@class="grid__col__inner"]'):
chnl = col_inner.xpath('.//div[@class="tv-guide__channel"]/h6/a/text()').extract_first()
if chnl in ALLOWED_CHANNELS:
for program in col_inner.xpath('.//div[@class="program"]'):
item = TVGuideItem()
item['channel'] = chnl
item['title'] = program.xpath('.//div[@class="title"]/a/text()').extract_first()
item['start_ts'] = program.xpath('.//div[@class="time"]/text()').extract_first()
item['film_date_long'] = film_date_long
item['film_date_short'] = film_date_short
detail_link = program.xpath('.//div[@class="title"]/a/@href').extract_first()
url_part = detail_link.rsplit('/',1)[-1]
# Extract information from the Movie Database www.themoviedb.org
request = scrapy.Request("https://www.themoviedb.org/search?query="+url_part,callback=self.parse_tmdb)
request.meta['item'] = item  # Pass the item with the request to the detail page
item = response.meta['item']  # Use the passed item
tmdb_titles = response.xpath('//a[@class="title result"]/text()').extract()
if tmdb_titles:  # Check if there are results on TMDB
for tmdb_title in tmdb_titles:
match_ratio = fuzz.ratio(item['title'], tmdb_title)
if match_ratio &gt; 90:
item['genre'] = response.xpath('.//span[@class="genres"]/text()').extract_first()
item['rating'] = response.xpath('//span[@class="vote_average"]/text()').extract_first()
release_date = response.xpath('.//span[@class="release_date"]/text()').extract_first()
release_date_parts = release_date.split('/')
item['release_date'] = "/".join(
[release_date_parts[1].strip(), release_date_parts[0].strip(), release_date_parts[2].strip()])
tmdb_link = "https://www.themoviedb.org" + response.xpath(
'//a[@class="title result"]/@href').extract_first()
item['tmdb_link'] = tmdb_link
# Extract more info from the detail page
request = scrapy.Request(tmdb_link, callback=self.parse_tmdb_detail)
request.meta['item'] = item  # Pass the item with the request to the detail page
yield request
break  # We only consider the first match
else:
item = response.meta['item']  # Use the passed item
item['nb_votes'] = response.xpath('//span[@itemprop="ratingCount"]/text()').extract_first()
item['plot'] = response.xpath('.//p[@id="overview"]/text()').extract_first()
yield item</code></pre><h1 id="using-extensions-in-scrapy">Using Extensions in Scrapy</h1><p>In the section about Pipelines, we already saw how we store the scraping results in an SQLite database. Now I will show you how you can <strong><strong><em><em>send the scraping results via email.</em></em></strong></strong> This way you get a nice overview of the top rated films for the coming week in your mailbox.</p><h2 id="importing-the-necessary-packages-1">Importing the necessary packages</h2><p>We will be working with the file <strong><strong><em><em>extensions.py</em></em></strong></strong>. This file is automatically created in the root directory when you created the Scrapy project. We start by importing the packages which we’ll use later in this file.</p><pre><code class="language-python">import logging
from scrapy import signals
from scrapy.exceptions import NotConfigured
import smtplib
import sqlite3 as lite
from config import *</code></pre><p>The <code>logging</code> package is not really required. But this package can be useful for debugging your program or just to write some information to the log.<br>The <code>signals</code> module will help us to know when the spider has been opened and closed. We will send the email with the films after the spider has done its job.</p><p>From the <code>scrapy.exceptions</code> module we import the method <code>NotConfigured</code>. This will be raised when the extension is not configured in the <strong><strong><em><em>settings.py</em></em></strong></strong> file. Concretely the parameter <code>MYEXT_ENABLED</code> must be set to <code>True</code>. We’ll see this later in the code.</p><p>The <code>smtplib</code> package is imported to be able to send the email. I use my Gmail address to send the email, but you could adapt the code in config.py to use another email service.</p><p>Lastly, we import the <code>sqlite3</code> package to extract the top-rated films from the database and import <code>config</code> to get our constants.</p><h2 id="creating-the-sendemail-class-in-the-extensions">Creating the SendEmail class in the extensions</h2><p>First, we define the <code>logger</code> object. With this object we can write messages to the log at certain events. Then we create the <code>SendEmail</code> class with the constructor method. In the constructor, we assign <code>FROMADDR</code> and <code>TOADDR</code> to the corresponding attributes of the class. These constants are set in the <strong><strong><em><em>config.py</em></em></strong></strong> file. I used my Gmail address for both attributes.</p><pre><code class="language-python">logger = logging.getLogger(__name__)
class SendEmail(object):
def __init__(self):
self.fromaddr = FROMADDR
self.toaddr  = TOADDR</code></pre><h2 id="instantiating-the-extension-object">Instantiating the extension object</h2><p>The first method of the <code>SendEmail</code> object is <code>from_crawler</code>. The first check we do is whether <code>MYEXT_ENABLED</code> is enabled in the settings.py file. If this is not the case, we raise a <code>NotConfigured</code> exception. When this happens, the rest of the code in the extension is not executed.</p><p>In the <strong><strong><em><em>settings.py</em></em></strong></strong> file we need to add the following code to enable this extension.</p><pre><code class="language-python">MYEXT_ENABLED = True
EXTENSIONS = {
'topfilms.extensions.SendEmail': 500,
'scrapy.telnet.TelnetConsole': None
}</code></pre><p>So we set the Boolean flag <code>MYEXT_ENABLED</code> to <code>True</code>. Then we add our own extension <code>SendEmail</code> to the <code>EXTENSIONS</code> dictionary. The integer value of 500 specifies the order in which the extension must be executed. I also had to disable the <code>TelnetConsole</code>. Otherwise sending the email did not work. This extension is disabled by putting <code>None</code>instead of an integer order value.</p><p>Next, we instantiate the extension object with the <code>cls()</code> function. To this extension object we connect some <code>signals</code>. We are interested in the <code>spider_opened</code> and <code>spider_closed</code>signals. And lastly we return the <code>ext</code> object.</p><pre><code>@classmethod
def from_crawler(cls, crawler):
# first check if the extension should be enabled and raise
# NotConfigured otherwise
if not crawler.settings.getbool('MYEXT_ENABLED'):
raise NotConfigured
# instantiate the extension object
ext = cls()
# connect the extension object to signals
crawler.signals.connect(ext.spider_opened, signal=signals.spider_opened)
crawler.signals.connect(ext.spider_closed, signal=signals.spider_closed)
# return the extension object
return ext</code></pre><h2 id="define-the-actions-in-the-spider_opened-event">Define the actions in the spider_opened event</h2><p>When the spider has been opened we simply want to write this to the log. Therefore we use the <code>logger</code> object which we created at the top of the code. With the <code>info</code> method we write a message to the log. <code>Spider.name</code> is replaced by the name we defined in the TVGuideSpider.py file.</p><pre><code class="language-python">def spider_opened(self, spider):
logger.info("opened spider %s", spider.name)</code></pre><h2 id="sending-the-email-after-the-spider_closed-event">Sending the email after the spider_closed event</h2><p>In the last method of the <code>SendEmail</code> class we send the email containing the overview with top rated films.</p><p>Again we send a notification to the log that the spider has been closed. Secondly, we create a connection to the SQLite database containing all the films of the coming week for the <strong><strong><em><em>ALLOWED_CHANNELS.</em></em></strong></strong> We select the films with a <code>rating &gt;= 6.5</code>. You can change the rating to a higher or lower threshold as you wish. The resulting films are then sorted by <code>film_date_short</code>, which has the YYYYMMDD format and by the starting time <code>start_ts</code>.</p><p>We fetch all rows in the cursor <code>cur</code> and check whether we have some results with the <code>len</code> function. It is possible to have no results when you set the threshold rating too high, for example.</p><p>With <code>for row in data</code> we go through each resulting film. We extract all the interesting information from the <code>row</code>. For some data we apply some encoding with <code>encode('ascii','ignore')</code>. This is to ignore some of the special characters like é, à, è, and so on. Otherwise we get errors when sending the email.</p><p>When all data about the film is gathered, we compose a string variable <code>topfilm</code>. Each <code>topfilm</code> is then concatenated to the variable <code>topfilms_overview</code>, which will be the message of the email we send. If we have no film in our query result, we mention this in a short message.</p><p>At the end, we send the message with the Gmail address, thanks to the <code>smtplib</code> package.</p><pre><code class="language-python">def spider_closed(self, spider):
logger.info("closed spider %s", spider.name)
# Getting films with a rating above a threshold
topfilms_overview = ""
con = lite.connect('topfilms.db')
cur = con.execute(
"SELECT title, channel, start_ts, film_date_long, plot, genre, release_date, rating, tmdb_link, nb_votes "
"FROM topfilms "
"WHERE rating &gt;= 6.5 "
"ORDER BY film_date_short, start_ts")
data = cur.fetchall()
if len(data) &gt; 0:  # Check if we have records in the query result
for row in data:
title = row[0].encode('ascii', 'ignore')
channel = row[1]
start_ts = row[2]
film_date_long = row[3]
plot = row[4].encode('ascii', 'ignore')
genre = row[5]
release_date = row[6].rstrip()
rating = row[7]
tmdb_link = row[8]
nb_votes = row[9]
topfilm = ' - '.join([title, channel, film_date_long, start_ts])
topfilm = topfilm + "\r\n" + "Release date: " + release_date
topfilm = topfilm + "\r\n" + "Genre: " + str(genre)
topfilm = topfilm + "\r\n" + "TMDB rating: " + rating + " from " + nb_votes + " votes"
topfilm = topfilm + "\r\n" + plot
topfilm = topfilm + "\r\n" + "More info on: " + tmdb_link
topfilms_overview = "\r\n\r\n".join([topfilms_overview, topfilm])
con.close()
if len(topfilms_overview) &gt; 0:
message = topfilms_overview
else:
message = "There are no top rated films for the coming week."
msg = "\r\n".join([
"From: " + self.fromaddr,
"To: " + self.toaddr,
"Subject: Top Films Overview",
message
])
username = UNAME
password = PW
server = smtplib.SMTP(GMAIL)
server.ehlo()
server.starttls()
server.login(username, password)
server.sendmail(self.fromaddr, self.toaddr, msg)
'scrapy.downloadermiddleware.useragent.UserAgentMiddleware': None,
'scrapy_fake_useragent.middleware.RandomUserAgentMiddleware': 400,
}</code></pre><p>First, we disable the default <code>UserAgentMiddleware</code> of Scrapy by specifying <em><em>None </em></em>instead of an integer value. Then we enable our own middleware <code>RandomUserAgentMiddleware</code>. Intuitively, middleware is a piece of code that is executed <strong><strong><em><em>during a request</em></em></strong></strong>.</p><p>In the file <strong><strong><em><em>middleware.py</em></em></strong></strong> we add the code to <strong><strong><em><em>randomize the user agent</em></em></strong></strong><em><em> </em></em>for each request. Make sure you have the fake_useragent package installed. From the <a href="https://pypi.python.org/pypi/fake-useragent" rel="noopener nofollow">fake_usergent package</a> we import the <code>UserAgent</code> module. This contains <strong><strong><em><em>a list of different user agents</em></em></strong></strong>. In the constructor of the RandomUserAgentMiddleware class, we instantiate the UserAgent object. In the method <strong><strong><em><em>process_request </em></em></strong></strong>we set the user agent to a random user agent from the <code>ua</code> object in the header of the request.</p><pre><code class="language-python">from fake_useragent import UserAgent
class RandomUserAgentMiddleware(object):
def __init__(self):
super(RandomUserAgentMiddleware, self).__init__()
self.ua = UserAgent()
def process_request(self, request, spider):
request.headers.setdefault('User-Agent', self.ua.random)</code></pre><h1 id="conclusion">Conclusion</h1><p>That was it! I hope you now have a clear view on how to use Scrapy for your web scraping projects.</p>
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
