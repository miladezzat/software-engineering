---
card: "/images/default.jpg"
tags: [Discord]
description: "This tutorial will show you how to build your own Discord bot"
author: "Milad E. Fahmy"
title: "How to Create a Discord Bot for Free with Python – Full Tutorial"
created: "2021-08-16T15:35:06+02:00"
modified: "2021-08-16T15:35:06+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-discord tag-youtube tag-python ">
<header class="post-full-header">
<h1 class="post-full-title">How to Create a Discord Bot for Free with Python – Full Tutorial</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2021/06/discordbot.png 300w,
/news/content/images/size/w600/2021/06/discordbot.png 600w,
/news/content/images/size/w1000/2021/06/discordbot.png 1000w,
/news/content/images/size/w2000/2021/06/discordbot.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2021/06/discordbot.png" alt="How to Create a Discord Bot for Free with Python – Full Tutorial">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
import os
client = discord.Client()
@client.event
async def on_ready():
print('We have logged in as {0.user}'.format(client))
@client.event
async def on_message(message):
if message.author == client.user:
return
if message.content.startswith('$hello'):
await message.channel.send('Hello!')
import os
import requests
import json
client = discord.Client()
def get_quote():
response = requests.get("https://zenquotes.io/api/random")
json_data = json.loads(response.text)
quote = json_data[0]['q'] + " -" + json_data[0]['a']
return(quote)
@client.event
async def on_ready():
print('We have logged in as {0.user}'.format(client))
@client.event
async def on_message(message):
if message.author == client.user:
return
if message.content.startswith('$inspire'):
quote = get_quote()
await message.channel.send(quote)
client.run(os.getenv('TOKEN'))</code></pre><p>We now have to import the <code>requests</code> module. This module allows our code to make an HTTP request to get data from the API. The API returns JSON, so the <code>json</code> module makes it easier to work with the data returned.</p><p>The <code>get_quote()</code> function is pretty straightforward. First, it uses the requests module to request data from the API URL. The API returns a random inspirational quote. This function could easily be rewritten to get quotes from a different API, if the current one stops working.</p><p>Next inside the function, we use <code>json.loads()</code> to convert the response from the API to JSON. Through trial and error I figured out how to get the quote from the JSON into the string format I wanted. The quote is returned from the function as a string.</p><p>The final part updated in the code is toward the end. Previously it looked for a message that started with "$hello". Now it looks for "$inspire". Instead of returning "Hello!", it gets the quote with <code>quote = get_quote()</code> and returns the quote.</p><p>At this point you can run your code and try it out.</p><h2 id="how-to-add-encouraging-messages-to-the-bot">How to Add Encouraging Messages to the Bot</h2><p>Now we will implement the feature where the bot responds with encouraging messages when a user posts a message with a sad word.</p><h3 id="how-to-add-sad-words-to-the-bot">How to Add Sad Words to the Bot</h3><p>First we need to create a Python list that contains the sad words that the bot will respond to.</p><p>Add the following line after the <code>client</code> variable is created:</p><p><code>sad_words = ["sad", "depressed", "unhappy", "angry", "miserable"]</code></p><p>Feel free to add more words to the list.</p><h3 id="how-to-add-encouraging-messages-to-the-bot-1">How to Add Encouraging Messages to the Bot</h3><p>Now we'll add a list of encouraging messages that the bot will respond with.</p><p>Add the following list after the <code>sad_words</code> list you created:</p><pre><code class="language-python">starter_encouragements = [
"Cheer up!",
"Hang in there.",
"You are a great person / bot!"
]</code></pre><p>Like before, feel free to add more phrases of your choice to the list. I'm just using three items for now because later we'll add the ability for users to add more encouraging phrases for the bot to use.</p><h3 id="how-to-respond-to-messages">How to Respond to Messages</h3><p>Now we need to update our bot to use the two lists we created. First, import the random module because the bot will choose encouraging messages randomly. Add the following line to the import statements at the top of the code: <code>import random</code>.</p><p>Now we will update the <code>on_message()</code> function to check all messages to see if they contain a word from the <code>sad_words</code> list. If a sad word is found, the bot will send a random message of encouragement. </p><p>Here is the updated code:</p><pre><code class="language-python">async def on_message(message):
if message.author == client.user:
return
msg = message.content
if msg.startswith('$inspire'):
quote = get_quote()
await message.channel.send(quote)
if any(word in msg for word in sad_words):
await message.channel.send(random.choice(starter_encouragements))</code></pre><p>This is a good time to test the bot. You know enough now to create your own bot. But next you'll learn how to implement more advanced features and store data using the Repl.it database.</p><h3 id="how-to-enable-user-submitted-messages">How to Enable User-submitted Messages</h3><p>The bot is completely functional, but now let's make it possible to update the bot right from Discord. A user should be able to add more encouraging messages for the bot to use when it detects a sad word.</p><p>We are going to use Repl.it's built-in database to store user-submitted messages. This database is a key-value store that’s built into every repl.</p><p>At the top of the code, under the other import statements, add <code>from replit import db</code>. This will allow us to use the Repl.it database.</p><p>Users will be able to add custom encouraging messages for the bot to use directly from the Discord chat. Before we add new commands for the bot, let's create two helper functions that will add custom messages to the database and delete them.</p><p>Add the following code after the <code>get_quote()</code> function:</p><pre><code class="language-python">def update_encouragements(encouraging_message):
if "encouragements" in db.keys():
encouragements = db["encouragements"]
encouragements.append(encouraging_message)
db["encouragements"] = encouragements
else:
db["encouragements"] = [encouraging_message]
def delete_encouragment(index):
encouragements = db["encouragements"]
if len(encouragements) &gt; index:
del encouragements[index]
db["encouragements"] = encouragements</code></pre><p>The <code>update_encouragements()</code> function accepts an encouraging message as an argument.</p><p>First it checks if "encouragements" is a key in the database. If so, it gets the list of encouragements already in the database, adds the new one to the list, and stores the updated list back in the database under the "encouragements" key. </p><p>If the database does not already contain "encouragements", a new key by that name is created and the new encouraging message is added as the first element in the list.</p><p>The <code>delete_encouragement()</code> function accepts an index as an argument.</p><p>It gets the list of encouragements from the database stored under the "encouragements" key. If the number of items in the encouragements list is greater than the index, then the list item at that index is deleted. </p><p>Finally, the updated list is stored back in the database under the "encouragements" key.</p><p>Here is the updated code for the <code>on_message()</code> function. After the code, I'll explain the new sections.</p><pre><code class="language-python">async def on_message(message):
if message.author == client.user:
return
msg = message.content
if msg.startswith("$inspire"):
quote = get_quote()
await message.channel.send(quote)
options = starter_encouragements
if "encouragements" in db.keys():
options = options + db["encouragements"]
if any(word in msg for word in sad_words):
await message.channel.send(random.choice(options))
if msg.startswith("$new"):
encouraging_message = msg.split("$new ",1)[1]
update_encouragements(encouraging_message)
await message.channel.send("New encouraging message added.")
if msg.startswith("$del"):
encouragements = []
if "encouragements" in db.keys():
index = int(msg.split("$del",1)[1])
delete_encouragment(index)
encouragements = db["encouragements"]
await message.channel.send(encouragements)</code></pre><p>The first new line of code from above is <code>options = starter_encouragements</code>. We are making a copy of <code>starter_encouragements</code> because we are going to add the user-submitted messages to that list before choosing a random message for the bot to send.</p><p>We check if "encouragements" is already in the database keys (meaning that a user has submitted at least one custom message). If so, we add the user messages to the starter encouragements.</p><p>Then, instead of sending a random message from <code>starter_encouragements</code>, the bot now sends a random message from <code>options</code>.</p><p>The next new section of code is used to add a new user-submitted message to the database. If a Discord message starts with "$new", then the text after "$new" will be used as a new encouraging message. </p><p>The code <code>msg.split("$new ",1)[1]</code> splits off the message from the "$new" command and stores the message in a variable. In that line of code, take note of the space in <code>"$new "</code>. We want everything <em>after</em> the space.</p><p>We call the <code>update_encouragements</code> helper function with the new message, and then the bot sends a message to the discord chat confirming that the message was added.</p><p>The third new section (at the end of the code above) checks if a new Discord message starts with "$del". This is the command to delete an item from the "encouragements" list in the database.</p><p>First a new variable called <code>encouragements</code> is initialized as an empty array. The reason for this is that this section of code will send a message with an empty array if the database does not include an "encouragement" key.</p><p>If the "encouragement" key is in the database, the index will be split off from the Discord message starting with "$del". Then, the <code>delete_encouragement()</code> function is called passing in the index to delete. The updated list of encouragements is loaded into the <code>encouragements</code> variable, and then the bot sends a message to Discord with the current list.</p><h2 id="final-bot-features">Final Bot Features</h2><p>The bot should work so this is a good time to test it. We will now add a few final features.</p><p>We will add the ability to get a list of user-submitted messages right from Discord and we will add the ability to turn off and on whether the bot responds to sad words.</p><p>I will give you the full final code of the program, and then I'll discuss the updates below the code.</p><pre><code class="language-python">import discord
import os
import requests
import json
import random
from replit import db
client = discord.Client()
sad_words = ["sad", "depressed", "unhappy", "angry", "miserable"]
starter_encouragements = [
"Cheer up!",
"Hang in there.",
"You are a great person / bot!"
]
if "responding" not in db.keys():
db["responding"] = True
def get_quote():
response = requests.get("https://zenquotes.io/api/random")
json_data = json.loads(response.text)
quote = json_data[0]["q"] + " -" + json_data[0]["a"]
return(quote)
def update_encouragements(encouraging_message):
if "encouragements" in db.keys():
encouragements = db["encouragements"]
encouragements.append(encouraging_message)
db["encouragements"] = encouragements
else:
db["encouragements"] = [encouraging_message]
def delete_encouragment(index):
encouragements = db["encouragements"]
if len(encouragements) &gt; index:
del encouragements[index]
db["encouragements"] = encouragements
@client.event
async def on_ready():
print("We have logged in as {0.user}".format(client))
@client.event
async def on_message(message):
if message.author == client.user:
return
msg = message.content
if msg.startswith("$inspire"):
quote = get_quote()
await message.channel.send(quote)
if db["responding"]:
options = starter_encouragements
if "encouragements" in db.keys():
options = options + db["encouragements"]
if any(word in msg for word in sad_words):
await message.channel.send(random.choice(options))
if msg.startswith("$new"):
encouraging_message = msg.split("$new ",1)[1]
update_encouragements(encouraging_message)
await message.channel.send("New encouraging message added.")
if msg.startswith("$del"):
encouragements = []
if "encouragements" in db.keys():
index = int(msg.split("$del",1)[1])
delete_encouragment(index)
encouragements = db["encouragements"]
await message.channel.send(encouragements)
if msg.startswith("$list"):
encouragements = []
if "encouragements" in db.keys():
encouragements = db["encouragements"]
await message.channel.send(encouragements)
if msg.startswith("$responding"):
value = msg.split("$responding ",1)[1]
if value.lower() == "true":
db["responding"] = True
await message.channel.send("Responding is on.")
else:
db["responding"] = False
await message.channel.send("Responding is off.")
client.run(os.getenv("TOKEN"))</code></pre><p>The first section added to the code is right under the <code>starter_encouragements</code> list:</p><pre><code class="language-python">if "responding" not in db.keys():
from threading import Thread
app = Flask('')
@app.route('/')
def home():
return "Hello. I am alive!"
def run():
app.run(host='0.0.0.0',port=8080)
def keep_alive():
t = Thread(target=run)
t.start()
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
