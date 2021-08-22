---
card: "/images/default.jpg"
tags: [Data Analysis]
description: "In this article, I ll share some newbie explorations I ve mad"
author: "Milad E. Fahmy"
title: "So Malcolm Gladwell got the data all wrong...or did he?"
created: "2021-08-16T15:34:56+02:00"
modified: "2021-08-16T15:34:56+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-data-analysis tag-data-analytics tag-python ">
<header class="post-full-header">
<h1 class="post-full-title">So Malcolm Gladwell got the data all wrong...or did he?</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/12/analytics-3268935_640.png 300w,
/news/content/images/size/w600/2020/12/analytics-3268935_640.png 600w,
/news/content/images/size/w1000/2020/12/analytics-3268935_640.png 1000w,
/news/content/images/size/w2000/2020/12/analytics-3268935_640.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/12/analytics-3268935_640.png" alt="So Malcolm Gladwell got the data all wrong...or did he?">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>In this article, I'll share some newbie explorations I've made in the areas of data analytics and pro hockey.</p><p>I recently embarked on a crazy journey into the world of data analytics. There's nothing all that crazy about data analytics, mind you. It's my journey that's a bit odd. </p><p>You see, <a href="https://bootstrap-it.com/davidclinton">I've built myself a nice career in cloud and Linux administration</a>, but I'm no developer. And, besides some obvious overlap, data is a whole universe apart from administration - a universe where programming on some level just can't be avoided.</p><p>But <a href="https://bootstrap-it.com/davidclinton/keeping-up/">parts of my work require me to closely follow the big developing trends in technology</a>. And data is big. For years I've watched all the (un)cool kids playing around with the numbers that make the modern world work and, frankly, I'm jealous. </p><p>So here I go. I'm going to fumble my way through some very unfamiliar territory, make some dumb mistakes, and have fun. Want to join me?</p><p>This article won't start with the absolute <em>basic</em> basics. If you're still looking to take your first steps in Python, <a href="https://www.python.org/about/gettingstarted/">check this out</a>. And if you want to know how to get started with a programming environment like the Jupyter notebooks I use, <a href="https://jupyter-notebook-beginner-guide.readthedocs.io/en/latest/">look over here</a>. I'll assume you're already comfortable with all that.</p><h2 id="do-birthdays-matter-in-sports">Do Birthdays Matter in Sports?</h2><p>I'll begin with the question I'm going to try to answer: </p><blockquote>Are you more likely to succeed as an elite athlete if your birthday happens to fall early in the calendar year?</blockquote><p>It's been claimed that youth sports that divide participants by age and set the yearly cut off at December 31 unwittingly make it harder for second-half-of-the-year players to succeed. That's because they'll be competing against players who are many months older. </p><p>At younger ages, those months can make a very big difference in physical strength, size, and coordination. If you were a minor league coach looking to invest in talent for a better team in a stronger league, who would you choose? And who would benefit over the long term from your extra attention?</p><p>This is where the well-known writer, thinker, (and fellow Canadian) Malcolm Gladwell comes in. Gladwell wasn't actually the original source of this insight, although he's the one most often associated with it. </p><p>Rather, those honors fall to the psychologist Roger Barnesly who noticed an oddly distributed birthdate pattern among players at an elite junior hockey game he was attending. Why were so many of those talented athletes born early in the year? Gladwell just mentioned Barnesly's insight in his book <em>Outliers</em>, which was where I came across it.</p><p>But is all that true? Was Barnesly's observation just an intriguing guess, or does real-world data bear him out?</p><h2 id="where-does-the-nhl-hide-its-data">Where Does the NHL Hide Its Data?</h2><p>A couple of my kids are still teenagers so, for better or for worse, there's no escaping the long shadow of hockey fandom in my house. To feed their bottomless appetites for such things, I discovered the existence of a robust official but undocumented API maintained by the National Hockey League. This URL:</p><pre><code>https://statsapi.web.nhl.com/api/v1/teams/15/roster
</code></pre><p>...for instance, will produce a JSON-formatted dataset containing the official current roster of the Washington Capitals. Changing that <code>15</code> in the URL to, say, <code>10</code>, would give you the same information about the Toronto Maple Leafs. </p><p>There are many, many such endpoints as part of the API. Many of those endpoints can, in addition, be modified using URL expansion syntax.</p><blockquote>Fun fact: if you look at the site icon in the browser tab while on an NHL API-generated web page, you'll see the <strong>Major League Baseball</strong> trademark. How did <em><strong>that</strong></em> happen?</blockquote><h2 id="how-to-use-python-to-scrape-nhl-statistics">How to Use Python to Scrape NHL Statistics</h2><p>Knowing all that, I could scrape the endpoint for each team's roster for each player's ID number, and then use those IDs to query each player's unique endpoint and read his birthdate. I could then extract the birth month from each NHL player into a Pandas DataFrame where the entire set could be computed and displayed as a histogram.</p><p>Here's the code I wrote to make all that happen. I'm not going to discuss it in detail here, although that might happen sometime later.</p><pre><code>import pandas as pd
import requests
import json
import matplotlib.pyplot as plt
import numpy as np
df3 = pd.DataFrame(columns=['months'])
for team_id in range(1, 11, 1):
url = 'https://statsapi.web.nhl.com/api/v1/teams/{}/roster'.format(team_id)
r = requests.get(url)
roster_data = r.json()
df = pd.json_normalize(roster_data['roster'])
for index, row in df.iterrows():
newrow = row['person.id']
url = 'https://statsapi.web.nhl.com/api/v1/people/{}'.format(newrow)
newerdata = requests.get(url)
player_stats = newerdata.json()
birthday = (player_stats['people'][0]['birthDate'])
newmonth = int(birthday.split('-')[1])
df3 = df3.append({'months': newmonth}, ignore_index=True)
df3.months.hist()
df = pd.read_csv('player_data.csv')
df['months'].value_counts()
</code></pre><p>And here's what my output looked like (I added the column headers manually):</p><pre><code>Month Frequecy
5     127
2     121
3     111
1     104
499
798
10     79
876
12     75
671
11     69
963
</code></pre><p>Looks like there were 127 births in May, 121 in February, and 111 in March. December had only 75.</p><p>Whoops. Sorry Malcolm. I should have had more faith. See how the five months with the highest birth frequencies are the first five months of the year? Now that's <em>exactly</em> what Gladwell's prediction would expect. So then what's up with the histogram?</p><p>Let's run it again, but this time, I'll specify 12 bins rather than the default ten.</p><pre><code>import pandas as pd
df = pd.read_csv('player_data.csv')
df.hist(column='months', bins=12);
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
