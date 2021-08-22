---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9ca0d8740569d1a4ca4b21.jpg"
tags: [Python]
description: "Hi everyone :) Today I am beginning a new series of posts spe"
author: "Milad E. Fahmy"
title: "A Python project in 30 lines of code: how to set up an SMS notification when your favorite Twitcher is streaming"
created: "2021-08-16T15:38:33+02:00"
modified: "2021-08-16T15:38:33+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-python tag-api tag-projects tag-heroku ">
<header class="post-full-header">
<h1 class="post-full-title">A Python project in 30 lines of code: how to set up an SMS notification when your favorite Twitcher is streaming</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9ca0d8740569d1a4ca4b21.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9ca0d8740569d1a4ca4b21.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9ca0d8740569d1a4ca4b21.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9ca0d8740569d1a4ca4b21.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9ca0d8740569d1a4ca4b21.jpg" alt="A Python project in 30 lines of code: how to set up an SMS notification when your favorite Twitcher is streaming">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
# https://2.python-requests.org/en/master/
import requests
# This is one of the route where Twich expose data,
# They have many more: https://dev.twitch.tv/docs
endpoint = "https://api.twitch.tv/helix/streams?"
# In order to authenticate we need to pass our api key through header
headers = {"Client-ID": "&lt;YOUR-CLIENT-ID&gt;"}
# The previously set endpoint needs some parameter, here, the Twitcher we want to follow
# Disclaimer, I don't even know who this is, but he was the first one on Twich to have a live stream so I could have nice examples
params = {"user_login": "Solary"}
# It is now time to make the actual request
response = request.get(endpoint, params=params, headers=headers)
print(response.json())</code></pre><p>The output should look like this:</p><pre><code class="language-json">{
'data':[
{
'id':'35289543872',
'user_id':'174955366',
'user_name':'Solary',
'game_id':'21779',
'type':'live',
'title':"Wakz duoQ w/ Tioo - GM 400LP - On récupère le chall après les -250LP d'inactivité !",
'viewer_count':4073,
'started_at':'2019-08-14T07:01:59Z',
'language':'fr',
'thumbnail_url':'https://static-cdn.jtvnw.net/previews-ttv/live_user_solary-{width}x{height}.jpg',
'tag_ids':[
'6f655045-9989-4ef7-8f85-1edcec42d648'
]
}
],
'pagination':{
'cursor':'eyJiIjpudWxsLCJhIjp7Ik9mZnNldCI6MX19'
}
}</code></pre><p>This data format is called JSON and is easily readable. The <code>data</code> object is an array that contains all the currently active streams. The key <code>type</code> ensures that the stream is currently <code>live</code>. This key will be empty otherwise (in case of an error, for example).</p><p>So if we want to create a boolean variable in Python that stores whether the current user is streaming, all we have to append to our code is:</p><pre><code class="language-python">json_response = response.json()
# We get only streams
streams = json_response.get('data', [])
# We create a small function, (a lambda), that tests if a stream is live or not
is_active = lambda stream: stream.get('type') == 'live'
# We filter our array of streams with this function so we only keep streams that are active
streams_active = filter(is_active, streams)
# any returns True if streams_active has at least one element, else False
at_least_one_stream_active = any(streams_active)
print(at_least_one_stream_active)</code></pre><p>At this point, <code>at_least_one_stream_active</code> is True when your favourite Twitcher is live.</p><p>Let's now see how to get notified by SMS.</p><h1 id="send-me-a-text-now-">Send me a text, NOW!</h1><p>So to send a text to ourselves, we will use the Twilio API. Just go over <a href="https://www.twilio.com/try-twilio">there</a> and create an account. When asked to confirm your phone number, please use the phone number you want to use in this project. This way you'll be able to use the $15 of free credit Twilio offers to new users. At around 1 cent a text, it should be enough for your bot to run for one year.</p><p>If you go on the <a href="https://www.twilio.com/console">console</a>, you'll see your <code>Account SID</code> and your <code>Auth Token</code> , save them for later. Also click on the big red button "Get My Trial Number", follow the step, and save this one for later too.</p><p>Sending a text with the Twilio Python API is very easy, as they provide a package that does the annoying stuff for you. Install the package with <code>pip install Twilio</code> and just do: </p><pre><code class="language-python">from twilio.rest import Client
client = Client(&lt;Your Account SID&gt;, &lt;Your Auth Token&gt;)
client.messages.create(
body='Test MSG',from_=&lt;Your Trial Number&gt;,to=&lt;Your Real Number&gt;)
from twilio.rest import Client
endpoint = "https://api.twitch.tv/helix/streams?"
headers = {"Client-ID": "&lt;YOUR-CLIENT-ID&gt;"}
params = {"user_login": "Solary"}
response = request.get(endpoint, params=params, headers=headers)
json_response = response.json()
streams = json_response.get('data', [])
is_active = lambda stream:stream.get('type') == 'live'
streams_active = filter(is_active, streams)
at_least_one_stream_active = any(streams_active)
if at_least_one_stream_active:
client = Client(&lt;Your Account SID&gt;, &lt;Your Auth Token&gt;)
client.messages.create(body='LIVE !!!',from_=&lt;Your Trial Number&gt;,to=&lt;Your Real Number&gt;)</code></pre><figcaption>Still have 16 lines left!</figcaption></figure><h1 id="avoiding-double-notifications">Avoiding double notifications</h1><p>This snippet works great, but should that snippet run every minute on a server, as soon as our favorite Twitcher goes live we will receive an SMS every minute. </p><p>We need a way to store the fact that we were already notified that our Twitcher is live and that we don't need to be notified anymore.</p><p>The good thing with the Twilio API is that it offers a way to retrieve our message history, so we just have to retrieve the last SMS we sent to see if we already sent a text notifying us that the twitcher is live.</p><p>Here what we are going do to in pseudocode:</p><pre><code>if favorite_twitcher_live and last_sent_sms is not live_notification:
send_live_notification()
if not favorite_twitcher_live and last_sent_sms is live_notification:
send_live_is_over_notification()</code></pre><p>This way we will receive a text as soon as the stream starts, as well as when it is over. This way we won't get spammed - perfect right? Let's code it:</p><pre><code class="language-python"># reusing our Twilio client
last_messages_sent = client.messages.list(limit=1)
last_message_id = last_messages_sent[0].sid
last_message_data = client.messages(last_message_id).fetch()
last_message_content = last_message_data.body</code></pre><p>Let's now put everything together again:</p><pre><code class="language-py">import requests
from twilio.rest import Client
client = Client(&lt;Your Account SID&gt;, &lt;Your Auth Token&gt;)
endpoint = "https://api.twitch.tv/helix/streams?"
headers = {"Client-ID": "&lt;YOUR-CLIENT-ID&gt;"}
params = {"user_login": "Solary"}
response = request.get(endpoint, params=params, headers=headers)
json_response = response.json()
streams = json_response.get('data', [])
is_active = lambda stream:stream.get('type') == 'live'
streams_active = filter(is_active, streams)
at_least_one_stream_active = any(streams_active)
last_messages_sent = client.messages.list(limit=1)
if last_messages_sent:
last_message_id = last_messages_sent[0].sid
last_message_data = client.messages(last_message_id).fetch()
last_message_content = last_message_data.body
online_notified = "LIVE" in last_message_content
offline_notified = not online_notified
else:
online_notified, offline_notified = False, False
if at_least_one_stream_active and not online_notified:
client.messages.create(body='LIVE !!!',from_=&lt;Your Trial Number&gt;,to=&lt;Your Real Number&gt;)
if not at_least_one_stream_active and not offline_notified:
twilio</code></pre><figcaption>This is to ensure that Heroku downloads the correct dependencies.</figcaption></figure><p><code>cd</code> into this folder and just do a `heroku create --app &lt;app name&gt;`.</p><p>If you go on your <a href="https://dashboard.heroku.com/apps">app dashboard</a> you'll see your new app. </p><p>We now need to initialize a git repo and push the code on Heroku:</p><pre><code>git init
heroku git:remote -a &lt;app name&gt;
git add .
git commit -am 'Deploy breakthrough script'
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
