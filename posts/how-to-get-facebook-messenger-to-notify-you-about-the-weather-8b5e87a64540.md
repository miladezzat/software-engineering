---
card: "https://cdn-media-1.freecodecamp.org/images/1*RBHbkOfMOzl7o_crT4Rg7g.jpeg"
tags: [Python]
description: "The morning routine is always stressful. Wouldn’t it be wonde"
author: "Milad E. Fahmy"
title: "How to get Facebook messenger to notify you about the weather"
created: "2021-08-16T15:39:40+02:00"
modified: "2021-08-16T15:39:40+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-python tag-weather tag-facebook-messenger tag-bots tag-how-to ">
<header class="post-full-header">
<h1 class="post-full-title">How to get Facebook messenger to notify you about the weather</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*RBHbkOfMOzl7o_crT4Rg7g.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*RBHbkOfMOzl7o_crT4Rg7g.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*RBHbkOfMOzl7o_crT4Rg7g.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*RBHbkOfMOzl7o_crT4Rg7g.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*RBHbkOfMOzl7o_crT4Rg7g.jpeg" alt="How to get Facebook messenger to notify you about the weather">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
FB_USERNAME= ""
# Your Facebook password
FB_PASSWORD= ""
# Your AccuWeather API key
ACCUWEATHER_API_KEY= ""</code></pre><h4 id="2-setup-parameters"><strong>2. Setup parameters</strong></h4><p>In this step, we will define the threshold for the probability of rain or snow, delay time between each request and message, and also location.</p><p>Currently, we set the threshold at 25% for both rain and snow. We will get the alert message only if the AccuWeather data shows the probability ≥ 25%.</p><p>The scripts below will request data from AccuWeather every 1 hour ( UPDATE_INTERVAL_HR= 1) and will send a message every 4 hours ( DELAY_TIME_HR= 4).</p><p>These parameters will be stored in the <a href="https://github.com/ekapope/Weather_Alert_Notification_Facebook_Chat/blob/master/scripts/params.py" rel="noopener">params.py</a> file.</p><pre><code class="language-py"># Define % threshold for probability of rain and snow.
# The msg will be sent out if the % chance exceed the value
RAIN_THRESHOLD = 25
SNOW_THRESHOLD = 25
# time between Accuweather request (in hour)
UPDATE_INTERVAL_HR = 1
# delay time between msg (in hour)
DELAY_TIME_HR = 4
# location id
# for example, https://www.accuweather.com/en/fr/lille/135564/weather-forecast/135564
# location id is 135564
LOCATION_ID = "135564" </code></pre><h4 id="3-retrieve-data-from-accuweather">3. Retrieve data from AccuWeather</h4><p>Now here comes the fun part. We will now work on the main script.</p><p>If you plan to run it locally, setup your directory and import keys and params. Make sure you put <a href="https://github.com/ekapope/Weather_Alert_Notification_Facebook_Chat/blob/master/scripts/keys.py" rel="noopener">keys.py</a> and <a href="https://github.com/ekapope/Weather_Alert_Notification_Facebook_Chat/blob/master/scripts/params.py" rel="noopener">params.py</a> in the same folder as this <a href="https://github.com/ekapope/Weather_Alert_Notification_Facebook_Chat/blob/master/scripts/main.py" rel="noopener">main.py</a> script.</p><pre><code class="language-py">#set the current directory
import os
os.chdir(r".\YOUR_PATH")
###############################################################################
#import keys and parameters other scripts in the same folder
from keys import FB_USERNAME,FB_PASSWORD,ACCUWEATHER_API_KEY
from params import RAIN_THRESHOLD,SNOW_THRESHOLD,UPDATE_INTERVAL_HR,DELAY_TIME_HR,LOCATION_ID
</code></pre><p>Import required modules.</p><pre><code class="language-py">#import required modules
import urllib
import urllib.parse
import json
import time
import requests
import pandas as pd
import logging
import sys
from fbchat import Client
from fbchat.models import *
from datetime import datetime</code></pre><p>Define ‘url_page’ to be requested, in this example, we will retrieve 12-hour hourly forecast. Convert our update/delay time into seconds.</p><pre><code class="language-py">url_page = "http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/"+str(LOCATION_ID)+"?apikey="+ACCUWEATHER_API_KEY+"&amp;details=true&amp;metric=true"
#convert hours to seconds
update_interval_sec = 60*60*UPDATE_INTERVAL_HR
delay_time_sec = 60*60*DELAY_TIME_HR </code></pre><p>Then, request the data and put in pandas DataFrame called ‘json_df’.</p><p>At this point, we can inspect the retrieved table. Extract and rename the elements that we need. In this example, we will need AccuWeather link, % rain, % snow, date, and time in the desired format.</p><pre><code class="language-py">    json_page = urllib.request.urlopen(url_page)
json_data = json.loads(json_page.read().decode())
json_df = pd.DataFrame(json_data)
# set maximum width, so the links are fully shown and clickable
pd.set_option('display.max_colwidth', -1)
json_df['Links'] = json_df['MobileLink'].apply(lambda x: '&lt;a href='+x+'&gt;Link&lt;/a&gt;')
json_df['Real Feel (degC)'] = json_df['RealFeelTemperature'].apply(lambda x: x.get('Value'))
json_df['Weather'] = json_df['IconPhrase']
json_df['Percent_Rain'] = json_df['RainProbability']
json_df['Percent_Snow'] = json_df['SnowProbability'] </code></pre><p>If we look closely, the ‘DateTime’ column is a bit tricky to extract and needs some work. After clean up, save it in ‘current_retrieved_datetime’ variable.</p><pre><code class="language-py">json_df[['Date','Time']] = json_df['DateTime'].str.split('T', expand=True)
# trim the time to hh:mm format, change to str
json_df[['Time']] = json_df['Time'].str.split('+', expand=True)[0].astype(str).str[:5]
current_retrieved_datetime = str(json_df['Date'][0])+' '+str(json_df['Time'][0])</code></pre><p>Next, write an if-else condition to customize the alert message. The retrieved table provides us a 12-hr forecast. We will check each element of both the rain and snow columns and return a message if the probability is above the threshold.</p><p>First, initialize the alert message for each case.</p><pre><code class="language-py">rain_msg=""
snow_msg=""</code></pre><p>Check ‘Percent_Rain’ and ‘ Percent_Snow’ columns, flag with 1 if the % probability is above threshold (or 0 otherwise).</p><p>Sum the columns and modify the ‘rain_msg’ and ‘snow_msg’.</p><pre><code class="language-py">    # check % Rain column, return rain_msg
json_df.loc[json_df['Percent_Rain'] &gt;= RAIN_THRESHOLD, 'Rain_Alert'] = 1
json_df.loc[json_df['Percent_Rain'] &lt; RAIN_THRESHOLD, 'Rain_Alert'] = 0
if (sum(json_df['Rain_Alert']) &gt; 0):
rain_msg = 'There is ' \
+str(json_df['Percent_Rain'][json_df['Rain_Alert']==1][0]) \
+' % chance of rain' \
+' at ' \
+str(json_df['Time'][json_df['Rain_Alert']==1][0])
# check % Snow column
json_df.loc[json_df['Percent_Snow'] &gt;= SNOW_THRESHOLD, 'Snow_Alert'] = 1
json_df.loc[json_df['Percent_Snow'] &lt; SNOW_THRESHOLD, 'Snow_Alert'] = 0
if (sum(json_df['Snow_Alert']) &gt; 0):
snow_msg = 'There is ' \
+str(json_df['Percent_Snow'][json_df['Percent_Snow']==1][0]) \
+' % chance of snow' \
+' at ' \
+str(json_df['Time'][json_df['Percent_Snow']==1][0])</code></pre><p>Initialize ‘alert_msg’, modify the messages if there is any ‘rain_msg’ or ‘snow_msg’.</p><pre><code class="language-py">alert_msg =""
if(len(rain_msg)|len(snow_msg)!=0):
alert_msg = rain_msg +" "+snow_msg</code></pre><p>Add the link to variable ‘ link_for_click’ this will be attached to the message when we send later on.</p><pre><code class="language-py">link_for_click = json_df['MobileLink'][0]</code></pre><p>Up until this point, we can now wrap them into a function. Don’t worry if you get lost, I have put them together below.</p><pre><code class="language-py">def func_get_weather(url_page):
json_page = urllib.request.urlopen(url_page)
json_data = json.loads(json_page.read().decode())
json_df = pd.DataFrame(json_data)
# set maximum width, so the links are fully shown and clickable
pd.set_option('display.max_colwidth', -1)
json_df['Links'] = json_df['MobileLink'].apply(lambda x: '&lt;a href='+x+'&gt;Link&lt;/a&gt;')
json_df['Real Feel (degC)'] = json_df['RealFeelTemperature'].apply(lambda x: x.get('Value'))
json_df['Weather'] = json_df['IconPhrase']
json_df['Percent_Rain'] = json_df['RainProbability']
json_df['Percent_Snow'] = json_df['SnowProbability']
json_df[['Date','Time']] = json_df['DateTime'].str.split('T', expand=True)
# trim the time to hh:mm format, change to str
json_df[['Time']] = json_df['Time'].str.split('+', expand=True)[0].astype(str).str[:5]
current_retrieved_datetime = str(json_df['Date'][0])+' '+str(json_df['Time'][0])
rain_msg=""
snow_msg=""
# check % Rain column, return rain_msg
json_df.loc[json_df['Percent_Rain'] &gt;= RAIN_THRESHOLD, 'Rain_Alert'] = 1
json_df.loc[json_df['Percent_Rain'] &lt; RAIN_THRESHOLD, 'Rain_Alert'] = 0
if (sum(json_df['Rain_Alert']) &gt; 0):
rain_msg = 'There is ' \
+str(json_df['Percent_Rain'][json_df['Rain_Alert']==1][0]) \
+' % chance of rain' \
+' at ' \
+str(json_df['Time'][json_df['Rain_Alert']==1][0])
# check % Snow column
json_df.loc[json_df['Percent_Snow'] &gt;= SNOW_THRESHOLD, 'Snow_Alert'] = 1
json_df.loc[json_df['Percent_Snow'] &lt; SNOW_THRESHOLD, 'Snow_Alert'] = 0
if (sum(json_df['Snow_Alert']) &gt; 0):
snow_msg = 'There is ' \
+str(json_df['Percent_Snow'][json_df['Percent_Snow']==1][0]) \
+' % chance of snow' \
+' at ' \
+str(json_df['Time'][json_df['Percent_Snow']==1][0])
alert_msg =""
if(len(rain_msg)|len(snow_msg)!=0):
alert_msg = rain_msg +" "+snow_msg
link_for_click = json_df['MobileLink'][0]
return(current_retrieved_datetime,alert_msg,link_for_click)</code></pre><h4 id="4-automated-loop">4. Automated loop</h4><p>Finally, for the last part, we will automate the process by using loops. The scripts below are putting the number of loops as ‘num_repeat = 999’.</p><pre><code class="language-py">num_repeat = 999 # number of loops to repeat
previous_alert_msg = "" # initialize alert msg</code></pre><p>Use try and except to overcome errors (just in case something goes wrong with connections). Call ‘func_get_weather’ function and assign to variables.</p><pre><code class="language-py">for i in range(num_repeat):
try:
current_retrieved_datetime,alert_msg,link_for_click = func_get_weather(url_page)
except (RuntimeError, TypeError, NameError, ValueError, urllib.error.URLError):
print('error catched')</code></pre><p>Then, check if there are any changes in the weather. If nothing has changed, print the message to the screen. No chat message will be sent.</p><pre><code class="language-py">    #if the weather forecast has not changed, no alert msg will be sent
if len(alert_msg) &gt; 0 and previous_alert_msg == alert_msg:
print(i, current_retrieved_datetime, 'no changes in weather forecast')</code></pre><p>The message will be sent only if there is any change in the weather.</p><p>We can finalize our message at this point. Fetch your user id of your friends and store in ‘friend_list’. Loop to send the message to each friend one-by-one. We put sleep time = 2 seconds between each message and logout after finish.</p><pre><code class="language-py">    if len(alert_msg) &gt; 0 and previous_alert_msg != alert_msg:
# login and send facebook msg
client = Client(FB_USERNAME,FB_PASSWORD)
users = client.fetchAllUsers()
friend_list=[user.uid for user in users if user.uid!="0"]
# loop though all friends
for id in friend_list:
client.send(Message(text=current_retrieved_datetime+' '+'12-hr Weather Forecast' +' '+ alert_msg +' '+link_for_click),thread_id=id, thread_type=ThreadType.USER)
#sleep for 2 secs between each msg
time.sleep(2)
#logout after sent
client.logout()   </code></pre><p>Execute delay time for the next message. Already defined in <a href="https://github.com/ekapope/Weather_Alert_Notification_Facebook_Chat/blob/master/scripts/params.py" rel="noopener">params.py</a> file — in this case, it is 4 hours. And another one for AccuWeather request delay is 1 hour.</p><pre><code class="language-py">    time.sleep(delay_time_sec)
time.sleep(update_interval_sec)</code></pre><p>Again, don’t worry if you get lost. I have put the complete loop together below.</p><pre><code class="language-py"># Execute functions, retrieve data and send facebook msg
num_repeat = 999 # number of loops to repeat
previous_alert_msg = "" # initialize alert msg
for i in range(num_repeat):
try:
current_retrieved_datetime,alert_msg,link_for_click = func_get_weather(url_page)
except (RuntimeError, TypeError, NameError, ValueError, urllib.error.URLError):
print('error catched')
#if the weather forecast has not changed, no alert msg will be sent
if len(alert_msg) &gt; 0 and previous_alert_msg == alert_msg:
print(i, current_retrieved_datetime, 'no changes in weather forecast')
#if there is any changes in weather
if len(alert_msg) &gt; 0 and previous_alert_msg != alert_msg:
# login and send facebook msg
client = Client(FB_USERNAME,FB_PASSWORD)
users = client.fetchAllUsers()
friend_list=[user.uid for user in users if user.uid!="0"]
# loop though all friends
for id in friend_list:
client.send(Message(text=current_retrieved_datetime+' '+'12-hr Weather Forecast' +' '+ alert_msg +' '+link_for_click),thread_id=id, thread_type=ThreadType.USER)
#sleep for 2 secs between each msg
time.sleep(2)
#logout after sent
client.logout()
time.sleep(delay_time_sec)
time.sleep(update_interval_sec)
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
