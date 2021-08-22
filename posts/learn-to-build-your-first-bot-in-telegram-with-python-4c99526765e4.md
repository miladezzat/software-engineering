---
card: "https://cdn-media-1.freecodecamp.org/images/1*vUK3nWPkSEJVAFRLLJbxHA.jpeg"
tags: [Bots]
description: "Imagine this, there is a message bot that will send you a ran"
author: "Milad E. Fahmy"
title: "Learn to build your first bot in Telegram with Python"
created: "2021-08-16T15:40:00+02:00"
modified: "2021-08-16T15:40:00+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-bots tag-python tag-programming tag-api tag-software-engineering ">
<header class="post-full-header">
<h1 class="post-full-title">Learn to build your first bot in Telegram with Python</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*vUK3nWPkSEJVAFRLLJbxHA.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*vUK3nWPkSEJVAFRLLJbxHA.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*vUK3nWPkSEJVAFRLLJbxHA.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*vUK3nWPkSEJVAFRLLJbxHA.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*vUK3nWPkSEJVAFRLLJbxHA.jpeg" alt="Learn to build your first bot in Telegram with Python">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Imagine this, there is a message bot that will send you a random cute dog image whenever you want, sounds cool right? Let’s make one!</p><p>For this tutorial, we are going to use <strong>Python 3, <a href="https://github.com/python-telegram-bot/python-telegram-bot" rel="noopener">python-telegram-bot</a>, </strong>and public API <a href="https://random.dog/" rel="noopener"><strong>RandomDog</strong></a><strong>.</strong></p><p>At the end of this tutorial, you will have a stress relieving bot that will send you cute dog images every time you need it, yay!</p><h3 id="getting-started">Getting started</h3><p>Before we start to write the program, we need to generate a token for our bot. The token is needed to access the Telegram API, and install the necessary dependencies.</p><h4 id="1-create-a-new-bot-in-botfather">1. Create a new bot in BotFather</h4><p>If you want to make a bot in Telegram, you have to “register” your bot first before using it. When we “register” our bot, we will get the token to access the Telegram API.</p><p>Go to the <a href="https://telegram.me/BotFather" rel="noopener">BotFather</a> (if you open it in desktop, make sure you have the Telegram app), then create new bot by sending the <code>/newbot</code> command. Follow the steps until you get the username and token for your bot. You can go to your bot by accessing this URL: <code><a href="https://telegram.me/YOUR_BOT_USERNAMEa" rel="noopener">https://telegram.me/YOUR_BOT_USERNAME</a> </code>and your token should looks like this.</p><pre><code>704418931:AAEtcZ*************</code></pre><h4 id="2-install-the-library">2. Install the library</h4><p>Since we are going to use a library for this tutorial, install it using this command.</p><pre><code>pip3 install python-telegram-bot</code></pre><p>If the library is successfully installed, then we are good to go.</p><h3 id="write-the-program">Write the program</h3><p>Let’s make our first bot. This bot should return a dog image when we send the <code>/bop</code> command. To be able to do this, we can use the public API from <a href="https://random.dog/" rel="noopener"><strong>RandomDog</strong></a><strong> </strong>to help us generate random dog images.</p><p>The workflow of our bot is as simple as this:</p><blockquote>access the API -&gt; get the image URL -&gt; send the image</blockquote><h4 id="1-import-the-libraries">1. Import the libraries</h4><p>First, import all the libraries we need.</p><pre><code class="language-py">from telegram.ext import Updater, CommandHandler
import requests
import re</code></pre><h4 id="2-access-the-api-and-get-the-image-url">2. Access the API and get the image URL</h4><p>Let’s create a function to get the URL. Using the requests library, we can access the API and get the json data.</p><pre><code>contents = requests.get('https://random.dog/woof.json').json()</code></pre><p>You can check the json data by accessing that URL: <code>https://random.dog/woof.json</code> in your browser. You will see something like this on your screen:</p><pre><code>{“url":"https://random.dog/*****.JPG"}</code></pre><p>Get the image URL since we need that parameter to be able to send the image.</p><pre><code>image_url = contents['url']</code></pre><p>Wrap this code into a function called <code>get_url()</code> .</p><pre><code class="language-py">def get_url():
contents = requests.get('https://random.dog/woof.json').json()
url = contents['url']
return url</code></pre><h4 id="3-send-the-image">3. Send the image</h4><p>To send a message/image we need two parameters, the image URL and the recipient’s ID — this can be group ID or user ID.</p><p>We can get the image URL by calling our <code>get_url()</code> function.</p><pre><code>url = get_url()</code></pre><p>Get the recipient’s ID using this code:</p><pre><code>chat_id = update.message.chat_id</code></pre><p>After we get the image URL and the recipient’s ID, it’s time to send the message, which is an image.</p><pre><code>bot.send_photo(chat_id=chat_id, photo=url)</code></pre><p>Wrap that code in a function called <code>bop</code> , and make sure your code looks like this:</p><pre><code class="language-py">def bop(bot, update):
url = get_url()
chat_id = update.message.chat_id
bot.send_photo(chat_id=chat_id, photo=url)</code></pre><h4 id="4-main-program">4. <code>Main program</code></h4><p>Lastly, create another function called <code>main</code> to run our program. <strong>Don’t forget to change</strong> <code>YOUR_TOKEN</code> with the token that we generated earlier in this tutorial.</p><pre><code class="language-py">def main():
updater = Updater('YOUR_TOKEN')
dp = updater.dispatcher
dp.add_handler(CommandHandler('bop',bop))
updater.start_polling()
updater.idle()
if __name__ == '__main__':
main()</code></pre><p>At the end your code should look like this:</p><pre><code class="language-py">from telegram.ext import Updater, InlineQueryHandler, CommandHandler
import requests
import re
def get_url():
contents = requests.get('https://random.dog/woof.json').json()
url = contents['url']
return url
def bop(bot, update):
url = get_url()
chat_id = update.message.chat_id
bot.send_photo(chat_id=chat_id, photo=url)
def main():
updater = Updater('YOUR_TOKEN')
dp = updater.dispatcher
dp.add_handler(CommandHandler('bop',bop))
updater.start_polling()
updater.idle()
if __name__ == '__main__':
allowed_extension = ['jpg','jpeg','png']
file_extension = ''
while file_extension not in allowed_extension:
url = get_url()
file_extension = re.search("([^.]*)$",url).group(1).lower()
return url</code></pre><h4 id="2-modify-your-code">2. Modify your code</h4><p>Great! Now for the last part, replace the <code>url = get_url()</code> line in the <code>bop()</code> function with <code>url = get_image_url()</code> , and your code should look like this:</p><pre><code class="language-py">from telegram.ext import Updater, InlineQueryHandler, CommandHandler
import requests
import re
def get_url():
contents = requests.get('https://random.dog/woof.json').json()
url = contents['url']
return url
def get_image_url():
allowed_extension = ['jpg','jpeg','png']
file_extension = ''
while file_extension not in allowed_extension:
url = get_url()
file_extension = re.search("([^.]*)$",url).group(1).lower()
return url
def bop(bot, update):
url = get_image_url()
chat_id = update.message.chat_id
bot.send_photo(chat_id=chat_id, photo=url)
def main():
updater = Updater('YOUR_TOKEN')
dp = updater.dispatcher
dp.add_handler(CommandHandler('bop',bop))
updater.start_polling()
updater.idle()
if __name__ == '__main__':
main()</code></pre><p>Nice! Everything should run perfectly. You can also check out my <a href="https://github.com/dzakyputra/doggobot" rel="noopener">GitHub</a> account to get the code.</p><p>Finally, congratulations for finishing this tutorial, plus you have a cool Telegram bot now.</p><p>Please leave a comment if you think there are any errors in my code or writing, because I’m still learning and I want to get better.</p><p>Thank you and good luck practicing! :)</p>
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
