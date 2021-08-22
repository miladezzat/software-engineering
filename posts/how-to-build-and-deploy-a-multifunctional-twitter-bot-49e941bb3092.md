---
card: "https://cdn-media-1.freecodecamp.org/images/1*dSTTYRDbaLqRHvFMPbVPxg.jpeg"
tags: [Nodejs]
description: I’ve been busy building Twitter bots again!
author: "Milad E. Fahmy"
title: "How to build and deploy a multifunctional Twitter bot"
created: "2021-08-15T19:52:06+02:00"
modified: "2021-08-15T19:52:06+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-nodejs tag-tech tag-twitter tag-bots tag-javascript ">
<header class="post-full-header">
<h1 class="post-full-title">How to build and deploy a multifunctional Twitter bot</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*dSTTYRDbaLqRHvFMPbVPxg.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*dSTTYRDbaLqRHvFMPbVPxg.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*dSTTYRDbaLqRHvFMPbVPxg.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*dSTTYRDbaLqRHvFMPbVPxg.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*dSTTYRDbaLqRHvFMPbVPxg.jpeg" alt="How to build and deploy a multifunctional Twitter bot">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<blockquote><strong><em><strong><em>UPDATE 20190507:</em></strong></em></strong><em> This tutorial is probably not relevant anymore as Twitter depreciate parts of the API this will be less and less relevant. I won’t be updating this going forward. ?</em><br><br><strong><em>UPDATE 20171105:</em></strong><em> For ease of navigation I have compiled all of this story into a <a href="https://spences10.gitbooks.io/twitter-bot-playground/content/" rel="noopener">GitBook</a> it is a near exact representation of this story but will be kept up to date with any changes that are made to the <a href="https://github.com/spences10/twitter-bot-playground/" rel="noopener">GitHub</a> repository. Thanks.</em></blockquote>
<p>I’ve been busy building Twitter bots again!</p>
<p>If you take a look at my <a href="https://github.com/spences10?utf8=%E2%9C%93&amp;tab=repositories&amp;q=twitt&amp;type=source&amp;language=javascript" rel="noopener">GitHub profile</a>, you’ll see that I have quite a few repos relating to Twitter bots.</p>
<p>My latest project started with the decision to repurpose one of my testing repos as documentation for how to use the npm <code>twit</code> package. But as I added new examples, it quickly morphed into another Twitter bot.</p>
<p>This bot is cobbled together from three examples we’ll go over here. I’ll also detail how I used Zeit’s <code>now</code> platform to deploy the bot to a server.</p>
<p>Special thanks go to <a href="https://twitter.com/timneutkens" rel="noopener">Tim</a> for helping me with the <code>now</code> deployment. And to <a href="https://twitter.com/ahandvanish" rel="noopener">Hannah Davis</a> for the <a href="https://egghead.io/courses/create-your-own-twitter-bots" rel="noopener">egghead.io</a> course material. It has some pretty neat examples, which I’ve linked to in the relevant sections.</p>
<h3 id="get-started">Get started</h3>
<p>This article is meant as a reference for me and anyone else that’s interested in Twitter bots in JavaScript using <code>Node.js</code>. Note that all of the examples here use the <a href="https://www.npmjs.com/" rel="noopener">npm</a> package <a href="https://www.npmjs.com/package/twit" rel="noopener">twit</a>.</p>
<p>Bot example 1: tweeting media with the NASA picture of the day</p>
<blockquote class="twitter-tweet" data-lang="en">
<p lang="en" dir="ltr">Ganymede: The Largest Moon <a href="https://t.co/6ir3tp1lRM">pic.twitter.com/6ir3tp1lRM</a></p>— Botland Mc Bot ?‍?? (@DroidScott) <a href="https://twitter.com/DroidScott/status/863823681788817408?ref_src=twsrc%5Etfw">May 14, 2017</a>
</blockquote>
<p>Bot example 2: using RiTa to make a Markov bot that will use your Twitter archive to post statuses based off of your tweet history.</p>
<blockquote class="twitter-tweet" data-lang="en">
<p lang="en" dir="ltr">I had the best turkey pie and mash made by my sister in law # nomnomnom the pants still not turned up?</p>— Botland Mc Bot ?‍?? (@DroidScott) <a href="https://twitter.com/DroidScott/status/863857996442607618?ref_src=twsrc%5Etfw">May 14, 2017</a>
</blockquote>
<p>Bot example 3: posting links (or other data) from a spreadsheet.</p>
<blockquote class="twitter-tweet" data-lang="en">
<p lang="en" dir="ltr"><a href="https://t.co/9M9K7Gmtoa">https://t.co/9M9K7Gmtoa</a> a link from a Google spreadsheet</p>— Botland Mc Bot ?‍?? (@DroidScott) <a href="https://twitter.com/DroidScott/status/864030168511377408?ref_src=twsrc%5Etfw">May 15, 2017</a>
</blockquote>
<p>We'll go through setting up a simple bot, which we’ll use to run each of these examples.</p>
<p>I'm going to assume that you have <code>Node.js</code> installed along with <code>npm</code> and that you are comfortable with the terminal.</p>
<p>If you are not familiar with <code>Node.js</code> or do not have your environment set up to use it, take a look at the <a href="https://github.com/spences10/twitter-bot-bootstrap#twitter-bot-bootstrap" rel="noopener">README.md</a> on my <a href="https://github.com/spences10/twitter-bot-bootstrap" rel="noopener">Twitter bot bootstrap</a> repo. It gives details about getting a Twitter application set up and a development environment with c9.</p>
<p>A great resource is <a href="https://github.com/amandeepmittal" rel="noopener">Aman Mittal's</a> <a href="https://github.com/amandeepmittal/awesome-twitter-bots" rel="noopener">Awesome Twitter bots</a> repo which has resources and bot examples.</p>
<p>A lot of this information is already out there, but I'm hoping this is all the information someone will need to get started with their own Twitter bot. I'm doing this for my own learning and hopefully other people will get something out of this as well.</p>
<h3 id="set-up-the-bot">Set up the bot</h3>
<p>Before touching the terminal or writing any code, we’ll need to create a <a href="https://apps.twitter.com/app/new" rel="noopener">Twitter app</a> to get our API keys (we’ll need them all):</p><pre><code>Consumer Key (API Key)
Consumer Secret (API Secret)
Access Token
Access Token Secret</code></pre>
<p>Keep the keys somewhere safe so you can use them again when you need them. We’re going to use them in an <code><a href="https://www.npmjs.com/package/dotenv" rel="noopener">.env</a></code> file that we’ll create.</p>
<p>We’re using <code><a href="https://www.npmjs.com/package/dotenv" rel="noopener">dotenv</a></code> so that if at some point in the future we want to add our bot to GitHub the Twitter API keys are not added to GitHub for all to see.</p>
<p>Starting from scratch, create a new folder via the terminal and initialise the <code>package.json</code> via <code>npm</code> or <code>yarn</code>. We'll need <code>twit</code> and <code>dotenv</code> for all these examples.</p>
<p>I’ll be using <code>yarn</code> for all these examples, you can use <code>npm</code> if you prefer.</p>
<p>Terminal commands:</p><pre><code class="language-bash">mkdir tweebot-play
cd tweebot-play
yarn init -y
yarn add twit dotenv
touch .env .gitignore index.js</code></pre>
<p>If you take a look at the <code>package.json</code> that was created it should look something like this:</p><pre><code class="language-json">{
"name": "tweebot-play",
"version": "1.0.0",
"main": "index.js",
"author": "Scott Spence &lt;spences10apps@gmail.com&gt; (https://spences10.github.io/)",
"license": "MIT",
"dependencies": {
"dotenv": "^4.0.0",
"twit": "^2.2.5"
}
}</code></pre>
<p>Add an <code>npm</code> script to the <code>package.json</code> to kick off the bot when we're testing and looking for output:</p><pre><code class="language-json">"scripts": {
"start": "node index.js"
},</code></pre>
<p>It should look something like this now:</p><pre><code class="language-json">{
"name": "tweebot-play",
"version": "1.0.0",
"main": "index.js",
"scripts": {
"start": "node index.js"
},
"author": "Scott Spence &lt;spences10apps@gmail.com&gt; (https://spences10.github.io/)",
"license": "MIT",
"dependencies": {
"dotenv": "^4.0.0",
"twit": "^2.2.5"
}
}</code></pre>
<p>Now we can add the following pointer to the bot in <code>index.js</code>, like so:</p><pre><code class="language-js">require('./src/bot')</code></pre>
<p>So when we use <code>yarn start</code> to run the bot it calls the <code>index.js</code> file which runs the <code>bot.js</code> file from the <code>src</code> folder we're going to create.</p>
<p>Now we add our API keys to the <code>.env</code> file, it should look something like this:</p><pre><code>CONSUMER_KEY=AmMSbxxxxxxxxxxNh4BcdMhxg
CONSUMER_SECRET=eQUfMrHbtlxxxxxxxxxxkFNNj1H107xxxxxxxxxx6CZH0fjymV
ACCESS_TOKEN=7xxxxx492-uEcacdl7HJxxxxxxxxxxecKpi90bFhdsGG2N7iII
ACCESS_TOKEN_SECRET=77vGPTt20xxxxxxxxxxxZAU8wxxxxxxxxxx0PhOo43cGO</code></pre>
<p>In the <code>.gitignore</code> file we need to add <code>.env</code> and <code>node_modules</code></p><pre><code># Dependency directories
node_modules
# env files
.env</code></pre>
<p>Then init git:</p><pre><code class="language-bash">git init</code></pre>
<p>Ok, now we can start to configure the bot, we'll need a <code>src</code> folder a <code>bot.js</code> file and a <code>config.js</code> file.</p>
<p>Terminal:</p><pre><code class="language-bash">mkdir src
cd src
touch config.js bot.js</code></pre>
<p>Then we can set up the bot config, open the <code>config.js</code> file and add the following:</p><pre><code class="language-js">require('dotenv').config()
module.exports = {
consumer_key: process.env.CONSUMER_KEY,
consumer_secret: process.env.CONSUMER_SECRET,
access_token: process.env.ACCESS_TOKEN,
access_token_secret: process.env.ACCESS_TOKEN_SECRET,
}</code></pre>
<p>Okay, with the bot config done, now we can set up the bot. Each of the examples detailed here will have the same three lines of code:</p><pre><code class="language-js">const Twit = require('twit')
const config = require('./config')
const bot = new Twit(config)</code></pre>
<p>Do a test with <code>yarn start</code> from the terminal, we should get this for output:</p><pre><code class="language-bash">yarn start
yarn start v0.23.4
$ node index.js
Done in 0.64s.</code></pre>
<p>Our bot is now configured and ready to go!</p>
<h3 id="post-statuses">Post Statuses</h3>
<p>To post a status, use <code>.post('statuses/update'...</code>. This example makes the bot post a “hello world!” status.</p><pre><code class="language-js">bot.post('statuses/update', {
status: 'hello world!'
}, (err, data, response) =&gt; {
if (err) {
console.log(err)
} else {
console.log(`${data.text} tweeted!`)
}
})</code></pre>
<h3 id="work-with-users">Work with users</h3>
<p>To get a list of follower IDs, use <code>.get('followers/ids'...</code> and include the account of which you want the followers. In this example, we're using <code><a href="https://twitter.com/DroidScott" rel="noopener">@DroidScott</a></code>, but you can use any account you like. We can then log them out to the console.</p><pre><code class="language-js">bot.get('followers/ids', {
screen_name: 'DroidScott',
count: 5
}, (err, data, response) =&gt; {
if (err) {
console.log(err)
} else {
console.log(data)
}
})</code></pre>
<p>You can use the <code>count</code> parameter the specify how many results you get, up to 100 at a time.</p>
<p>Or to get a detailed list you can use <code>.get('followers/list'...</code></p>
<p>Here we print off a list of <code>user.screen_name</code>'s up to 200 per call.</p><pre><code class="language-js">bot.get('followers/list', {
screen_name: 'DroidScott',
count:200
}, (err, data, response) =&gt; {
if (err) {
console.log(err)
} else {
data.users.forEach(user =&gt; {
console.log(user.screen_name)
})
}
})</code></pre>
<p>To follow back a follower we can use <code>.post('friendships/create'...</code> here the bot is following back the user <code>MarcGuberti</code></p>
<p><em>A bot should only follow users that follow the bot.</em></p><pre><code class="language-js">bot.post('friendships/create', {
screen_name: 'MarcGuberti'
}, (err, data, response) =&gt; {
if (err) {
console.log(err)
} else {
console.log(data)
}
})</code></pre>
<p>Like we did with followers, you can get a list of accounts that your bot is following back.</p><pre><code class="language-js">bot.get('friends/ids', {
screen_name: 'DroidScott'
}, (err, data, response) =&gt; {
if (err) {
console.log(err)
} else {
console.log(data)
}
})</code></pre>
<p>And also a detailed list.</p><pre><code class="language-js">bot.get('friends/list', {
screen_name: 'DroidScott'
}, (err, data, response) =&gt; {
if (err) {
console.log(err)
} else {
console.log(data)
}
})</code></pre>
<p>You can get friendship statuses. This is useful for following new followers, and gives us the relation of a specific user. You can run through your followers list and follow back any users that do not have the <code>following</code> connection.</p>
<p>Lets take a look at the relation between our bot and <code><a href="https://twitter.com/ScottDevTweets" rel="noopener">@ScottDevTweets</a></code></p><pre><code class="language-js">bot.get('friendships/lookup', {
screen_name: 'ScottDevTweets'
}, (err, data, response) =&gt; {
if (err) {
console.log(err)
} else {
console.log(data)
}
})</code></pre>
<p>If the user follows the bot, then relationship will be:</p><pre><code class="language-js">[ { name: 'Scott Spence ???♻',
screen_name: 'ScottDevTweets',
id: 4897735439,
id_str: '4897735439',
connections: [ 'followed_by' ] } ]</code></pre>
<p>If the user and the bot are following each other, the relationship will be:</p><pre><code class="language-js">[ { name: 'Scott Spence ???♻',
screen_name: 'ScottDevTweets',
id: 4897735439,
id_str: '4897735439',
connections: [ 'following', 'followed_by' ] } ]</code></pre>
<p>And if there is no relationship then:</p><pre><code class="language-js">[ { name: 'Scott Spence ???♻',
screen_name: 'ScottDevTweets',
id: 4897735439,
id_str: '4897735439',
connections: [ 'none' ] } ]</code></pre>
<p>Direct Message a user with <code>bot.post('direct_messages/new'...</code></p>
<p><em>A bot should only DM a user that is following the bot account</em></p><pre><code class="language-js">bot.post('direct_messages/new', {
screen_name: 'ScottDevTweets',
text: 'Hello from bot!'
}, (err, data, response) =&gt; {
if (err) {
console.log(err)
} else {
console.log(data)
}
})</code></pre>
<h3 id="interact-with-tweets">Interact with tweets</h3>
<p>To get a list of tweets in the bot’s time line, use <code>.get(statuses/home_timeline'...</code></p><pre><code class="language-js">bot.get('statuses/home_timeline', {
count: 1
}, (err, data, response) =&gt; {
if (err) {
console.log(err)
} else {
console.log(data)
}
})</code></pre>
<p>To be more granular you can pull out specific information on each tweet.</p><pre><code class="language-js">bot.get('statuses/home_timeline', {
count: 5
}, (err, data, response) =&gt; {
if (err) {
console.log(err)
} else {
data.forEach(t =&gt; {
console.log(t.text)
console.log(t.user.screen_name)
console.log(t.id_str)
console.log('\n')
})
}
})</code></pre>
<p>To retweet use <code>.post('statuses/retweet/:id'...</code> and pass in a tweet id to retweet.</p><pre><code class="language-js">bot.post('statuses/retweet/:id', {
id: '860828247944253440'
}, (err, data, response) =&gt; {
if (err) {
console.log(err)
} else {
console.log(`${data.text} retweet success!`)
}
})</code></pre>
<p>To unretweet just use <code>.post('statuses/unretweet/:id'...</code></p><pre><code class="language-js">bot.post('statuses/unretweet/:id', {
id: '860828247944253440'
}, (err, data, response) =&gt; {
if (err) {
console.log(err)
} else {
console.log(`${data.text} unretweet success!`)
}
})</code></pre>
<p>To like a tweet use <code>.post('favorites/create'...</code></p><pre><code class="language-js">bot.post('favorites/create', {
id: '860897020726435840'
}, (err, data, response) =&gt; {
if (err) {
console.log(err)
} else {
console.log(`${data.text} tweet liked!`)
}
})</code></pre>
<p>To unlike a post use <code>.post('favorites/destroy'...</code></p><pre><code class="language-js">bot.post('favorites/destroy', {
id: '860897020726435840'
}, (err, data, response) =&gt; {
if (err) {
console.log(err)
} else {
console.log(`${data.text} tweet unliked!`)
}
})</code></pre>
<p>To reply to a tweet is much the same as posting a tweet, but you need to include the <code>in_reply_to_status_id</code> parameter. Also, you will need to put in the screen name of the person you are replying to.</p><pre><code class="language-js">bot.post('statuses/update', {
status: '@ScottDevTweets I reply to you yes!',
in_reply_to_status_id: '860900406381211649'
}, (err, data, response) =&gt; {
if (err) {
console.log(err)
} else {
console.log(`${data.text} tweeted!`)
}
})</code></pre>
<p>Finally, if you want to delete a tweet, use <code>.post('statuses/destroy/:id'...</code> by passing the tweet id you want to delete.</p><pre><code class="language-js">bot.post('statuses/destroy/:id', {
id: '860900437993676801'
}, (err, data, response) =&gt; {
if (err) {
console.log(err)
} else {
console.log(`${data.text} tweet deleted!`)
}
})</code></pre>
<h3 id="use-twitter-search">Use Twitter search</h3>
<p>To use search, use <code>.get('search/tweets',...</code>. There are quite a few search parameters for search.</p>
<p>The structure is <code>q: ''</code> where the q is for query. You would use <code>q: 'mango'</code> to search for mango. We can also limit the results returned with <code>count: n</code> so let's limit the count to 5 in the example.</p><pre><code class="language-js">bot.get('search/tweets', {
q: 'mango',
count: 5
}, (err, data, response) =&gt; {
if (err) {
console.log(err)
} else {
console.log(data.statuses)
}
})</code></pre>
<p>Like we did with the timeline we will pull out specific items from the <code>data.statuses</code> returned, like this:</p><pre><code class="language-js">bot.get('search/tweets', {
q: 'mango',
count: 5
}, (err, data, response) =&gt; {
if (err) {
console.log(err)
} else {
data.statuses.forEach(s =&gt; {
console.log(s.text)
console.log(s.user.screen_name)
console.log('\n')
})
}
})</code></pre>
<p>The search API returns results for relevance and not completeness. If you want to search for an exact phrase, you’ll need to wrap the query in quotes <code>"purple pancakes"</code>. If you want to search for one of two words, then use <code>OR</code> like <code>'tabs OR spaces'</code>. And if you want to search for both, use <code>AND</code> like <code>'tabs AND spaces'</code>.</p>
<p>If you want to search for a tweet without another word use <code>-</code> like <code>donald -trump</code>. You can use it multiple times as well, like <code>donald -trump -duck</code></p>
<p>You can search for tweets with emoticons, like <code>q: 'sad :('</code> try it!</p>
<p>Of course, you can look for hashtags <code>q: '#towie'</code>. Look for tweets to a user <code>q: 'to:@stephenfry'</code> or from a user <code>q: 'from:@stephenfry'</code></p>
<p>You can filter out indecent tweets with the <code>filter:safe</code> parameter. You can also use it to filter for <code>media</code> tweets which will return tweets containing video. You can specify for <code>images</code> to view tweets with images and you can specify <code>links</code> for tweets with links.</p>
<p>If you want tweets from a certain website, you can specify with the <code>url</code> parameter like <code>url:asda</code></p><pre><code class="language-js">bot.get('search/tweets', {
q: 'from:@dan_abramov url:facebook filter:images since:2017-01-01',
count: 5
}, (err, data, response) =&gt; {
if (err) {
console.log(err)
} else {
data.statuses.forEach(s =&gt; {
console.log(s.text)
console.log(s.user.screen_name)
console.log('\n')
})
}
})</code></pre>
<p>Last few now, there’s the <code>result_type</code> parameter that will return <code>recent</code>, <code>popular</code>, or <code>mixed</code> results.</p>
<p>The <code>geocode</code> parameter takes the format latitude longitude then radius in miles <code>'51.5033640,-0.1276250,1mi'</code> example:</p><pre><code class="language-js">bot.get('search/tweets', {
q: 'bacon',
geocode: '51.5033640,-0.1276250,1mi',
count: 5
}, (err, data, response) =&gt; {
if (err) {
console.log(err)
} else {
data.statuses.forEach(s =&gt; {
console.log(s.text)
console.log(s.user.screen_name)
console.log('\n')
})
}
})</code></pre>
<h3 id="use-twitter-stream-api">Use Twitter Stream API</h3>
<p>There are two ways to use the Stream API. First, there’s <code>.stream('statuses/sample')</code>.</p><pre><code class="language-js">const stream = bot.stream('statuses/sample');
stream.on('tweet', t =&gt; {
console.log(`${t.text}\n`)
})</code></pre>
<p>This will give you a random sampling of tweets.</p>
<p>For more specific information use <code>.stream('statuses/filter')...</code> then pass some parameters, and use <code>track:</code> to specify a search string.</p><pre><code class="language-js">var stream = bot.stream('statuses/filter', {
track: 'bot'
})
stream.on('tweet', function (t) {
console.log(t.text + '\n')
})</code></pre>
<p>You can also use multiple words in the <code>track</code> parameter, this will get you results with either <code>twitter</code> or <code>bot</code> in them.</p><pre><code class="language-js">const stream = bot.stream('statuses/filter', {
track: 'twitter, bot'
});
stream.on('tweet', t =&gt; {
console.log(`${t.text}\n`)
})</code></pre>
<p>If you want both words, then remove the comma <code>,</code> — you can think of spaces as <code>AND</code> and commas as <code>OR</code>.</p>
<p>You can also use the <code>follow:</code> parameter which lets you input the ids of specific users.</p><pre><code class="language-js">const stream = bot.stream('statuses/filter', {
follow: '4897735439'
});
stream.on('tweet', t =&gt; {
console.log(`${t.text}\n`)
})</code></pre>
<h3 id="tweet-media-files">Tweet media files</h3>
<p>This <a href="https://egghead.io/lessons/node-js-tweet-media-files-with-twit-js" rel="noopener">egghead.io</a> video is a great resource for this section thanks to <a href="https://egghead.io/instructors/hannah-davis" rel="noopener">Hannah Davis</a> for the awesome content!</p>
<p>This will be a request to get the <a href="https://www.nasa.gov/multimedia/imagegallery/iotd.html" rel="noopener">NASA image of the day</a> and tweet it.</p>
<p>We will need references to <code>request</code> and <code>fs</code> for working with the file system.</p><pre><code class="language-js">const Twit = require('twit')
const request = require('request')
const fs = require('fs')
const config = require('./config')
const bot = new Twit(config)</code></pre>
<p>The first step is to get the photo from the NASA API. We will need to create a parameter object inside our <code>getPhoto</code> function that will be passed to the node HTTP client <code>request</code> for the image.</p><pre><code class="language-js">function getPhoto() {
const parameters = {
url: 'https://api.nasa.gov/planetary/apod',
qs: {
api_key: process.env.NASA_KEY
},
encoding: 'binary'
};
}</code></pre>
<p>The <code>parameters</code> specify an <code>api_key</code> so for this you can <a href="https://api.nasa.gov/index.html#apply-for-an-api-key" rel="noopener">apply for an API key</a> or you can use the <code>DEMO_KEY</code>. This API key can be used for initially exploring APIs prior to signing up, but it has much lower rate limits, so you’re encouraged to signup for your own API key.</p>
<p>In the example, you can see that I have configured my key with the rest of my <code>.env</code> variables.</p><pre><code class="language-js">CONSUMER_KEY=AmMSbxxxxxxxxxxNh4BcdMhxg
CONSUMER_SECRET=eQUfMrHbtlxxxxxxxxxxkFNNj1H107xxxxxxxxxx6CZH0fjymV
ACCESS_TOKEN=7xxxxx492-uEcacdl7HJxxxxxxxxxxecKpi90bFhdsGG2N7iII
ACCESS_TOKEN_SECRET=77vGPTt20xxxxxxxxxxxZAU8wxxxxxxxxxx0PhOo43cGO
NASA_KEY=DEMO_KEY</code></pre>
<p>Now to use the <code>request</code> to get the image:</p><pre><code class="language-js">function getPhoto() {
const parameters = {
url: 'https://api.nasa.gov/planetary/apod',
qs: {
api_key: process.env.NASA_KEY
},
encoding: 'binary'
};
request.get(parameters, (err, respone, body) =&gt; {
body = JSON.parse(body)
saveFile(body, 'nasa.jpg')
})
}</code></pre>
<p>In the <code>request</code>, we pass in our parameters and parse the body as JSON so we can save it with the <code>saveFile</code> function.</p><pre><code class="language-js">function saveFile(body, fileName) {
const file = fs.createWriteStream(fileName);
request(body).pipe(file).on('close', err =&gt; {
if (err) {
console.log(err)
} else {
console.log('Media saved!')
console.log(body)
}
})
}</code></pre>
<p><code>request(body).pipe(file).on('close'...</code> is what saves the file from the <code>file</code> variable. It has the name <code>nasa.jpg</code> passed to it from the <code>getPhoto</code> function.</p>
<p>Calling <code>getPhoto()</code> should now save the NASA image of the day to the root of your project.</p>
<p>Now we can share it on Twitter. There are two parts to this, the first is to save the file.</p><pre><code class="language-js">function saveFile(body, fileName) {
const file = fs.createWriteStream(fileName);
request(body).pipe(file).on('close', err =&gt; {
if (err) {
console.log(err)
} else {
console.log('Media saved!')
const descriptionText = body.title;
uploadMedia(descriptionText, fileName)
}
})
}</code></pre>
<p>Then <code>uploadMedia</code> to upload media to Twitter before we can post it. This had me stumped for a bit as I have my files in a <code>src</code>folder. If you have your bot files nested in folders, then you will need to do the same if you are struggling with <code>file does not exist</code> errors.</p>
<p>Add a <code>require</code> to <code>path</code> then use <code>join</code> with the relevant relative file path.</p><pre><code class="language-js">const path = require('path')
//...
const filePath = path.join(__dirname, '../' + fileName)</code></pre>
<p>Here’s the complete function:</p><pre><code class="language-js">function uploadMedia(descriptionText, fileName) {
console.log(`uploadMedia: file PATH ${fileName}`)
bot.postMediaChunked({
file_path: fileName
}, (err, data, respone) =&gt; {
if (err) {
console.log(err)
} else {
console.log(data)
const params = {
status: descriptionText,
media_ids: data.media_id_string
}
postStatus(params)
}
})
}</code></pre>
<p>Then with the <code>params</code> we created in <code>uploadMedia</code> we can post with a straightforward <code>.post('statuses/update'...</code></p><pre><code class="language-js">function postStatus(params) {
bot.post('statuses/update', params, (err, data, respone) =&gt; {
if (err) {
console.log(err)
} else {
console.log('Status posted!')
}
})
}</code></pre>
<p>Call the <code>getPhoto()</code> function to post to Twitter... super straight forward, right? I know it wasn't. Here’s the complete module:</p><pre><code class="language-js">const Twit = require('twit')
const request = require('request')
const fs = require('fs')
const config = require('./config')
const path = require('path')
const bot = new Twit(config)
function getPhoto() {
const parameters = {
url: 'https://api.nasa.gov/planetary/apod',
qs: {
api_key: process.env.NASA_KEY
},
encoding: 'binary'
}
request.get(parameters, (err, respone, body) =&gt; {
body = JSON.parse(body)
saveFile(body, 'nasa.jpg')
})
}
function saveFile(body, fileName) {
const file = fs.createWriteStream(fileName)
request(body).pipe(file).on('close', err =&gt; {
if (err) {
console.log(err)
} else {
console.log('Media saved!')
const descriptionText = body.title
uploadMedia(descriptionText, fileName)
}
})
}
function uploadMedia(descriptionText, fileName) {
const filePath = path.join(__dirname, `../${fileName}`)
console.log(`file PATH ${filePath}`)
bot.postMediaChunked({
file_path: filePath
}, (err, data, respone) =&gt; {
if (err) {
console.log(err)
} else {
console.log(data)
const params = {
status: descriptionText,
media_ids: data.media_id_string
}
postStatus(params)
}
})
}
function postStatus(params) {
bot.post('statuses/update', params, (err, data, respone) =&gt; {
if (err) {
console.log(err)
} else {
console.log('Status posted!')
}
})
}
getPhoto()</code></pre>
<h3 id="make-a-markov-bot">Make a Markov bot</h3>
<p>This is pretty neat, again from the <a href="https://egghead.io/lessons/node-js-make-a-bot-that-sounds-like-you-with-rita-js?series=create-your-own-twitter-bots" rel="noopener">egghead.io</a> series it uses <code><a href="https://www.npmjs.com/package/rita" rel="noopener">rita</a></code> natural language toolkit. It also uses <code>csv-parse</code> as we're going to be reading out our Twitter archive to make the bot sound like it’s us tweeting.</p>
<p>First of all, to set up the <a href="https://support.twitter.com/articles/20170160" rel="noopener">Twitter archive</a>, you’ll need to request your data from the Twitter settings page. You’ll be emailed a link to download your archive, then when you have downloaded the archive extract out the <code>tweets.csv</code> file, we'll then put that in it's own folder, so from the root of your project:</p><pre><code class="language-bash">cd src
mkdir twitter-archive</code></pre>
<p>We’ll move our <code>tweets.csv</code> there to be accessed by the bot we're going to go over now.</p>
<p>Use <code>fs</code> to set up a read stream...</p><pre><code class="language-js">const filePath = path.join(__dirname, './twitter-archive/tweets.csv')
const tweetData =
fs.createReadStream(filePath)
.pipe(csvparse({
delimiter: ','
}))
.on('data', row =&gt; {
console.log(row[5])
})</code></pre>
<p>When you run this from the console you should get the output from your Twitter archive.</p>
<p>Now clear out things like <code>@</code> and <code>RT</code> to help with the natural language processing. We'll set up two functions <code>cleanText</code> and <code>hasNoStopWords</code></p>
<p><code>cleanText</code> will tokenize the text delimiting it on space <code>' '</code>, filter out the stop words, then <code>.join(' ')</code> back together with a space, and <code>.trim()</code> any whitespace that may be at the start of the text.</p><pre><code class="language-js">function cleanText(text) {
return rita.RiTa.tokenize(text, ' ')
.filter(hasNoStopWords)
.join(' ')
.trim()
}</code></pre>
<p>The tokenized text can then be fed into the <code>hasNoStopWords</code> function to be sanitized for use in <code>tweetData</code></p><pre><code class="language-js">function hasNoStopWords(token) {
const stopwords = ['@', 'http', 'RT'];
return stopwords.every(sw =&gt; !token.includes(sw))
}</code></pre>
<p>Now that we have the data cleaned, we can tweet it. Replace <code>console.log(row[5])</code> with <code>inputText = inputText + ' ' + cleanText(row[5])</code>. Next we can use <code>rita.RiMarkov(3)</code> where the 3 is the number of words to take into consideration. Then use <code>markov.generateSentences(1)</code> where 1 is the number of sentences being generated. We'll also use <code>.toString()</code> and <code>.substring(0, 140)</code> to truncate the result down to 140 characters.</p><pre><code class="language-js">const tweetData =
fs.createReadStream(filePath)
.pipe(csvparse({
delimiter: ','
}))
.on('data', function (row) {
inputText = `${inputText} ${cleanText(row[5])}`
})
.on('end', function(){
const markov = new rita.RiMarkov(3)
markov.loadText(inputText)
const sentence = markov.generateSentences(1)
.toString()
.substring(0, 140)
}</code></pre>
<p>Now we can tweet this with the bot using <code>.post('statuses/update'...</code>passing in the <code>sentence</code> variable as the <code>status</code> and logging a message to the console when there is a tweet.</p><pre><code class="language-js">const tweetData =
fs.createReadStream(filePath)
.pipe(csvparse({
delimiter: ','
}))
.on('data', row =&gt; {
inputText = `${inputText} ${cleanText(row[5])}`
})
.on('end', () =&gt; {
const markov = new rita.RiMarkov(3)
markov.loadText(inputText)
const sentence = markov.generateSentences(1)
.toString()
.substring(0, 140)
bot.post('statuses/update', {
status: sentence
}, (err, data, response) =&gt; {
if (err) {
console.log(err)
} else {
console.log('Markov status tweeted!', sentence)
}
})
})
}</code></pre>
<p>If you want your sentences to be closer to the input text you can increase the words to consider in <code>rita.RiMarkov(6)</code> and if you want to make it gibberish then lower the number.</p>
<p>Here’s the completed module:</p><pre><code class="language-js">const Twit = require('twit')
const fs = require('fs')
const csvparse = require('csv-parse')
const rita = require('rita')
const config = require('./config')
const path = require('path')
let inputText = ''
const bot = new Twit(config)
const filePath = path.join(__dirname, '../twitter-archive/tweets.csv')
const tweetData =
fs.createReadStream(filePath)
.pipe(csvparse({
delimiter: ','
}))
.on('data', row =&gt; {
inputText = `${inputText} ${cleanText(row[5])}`
})
.on('end', () =&gt; {
const markov = new rita.RiMarkov(10)
markov.loadText(inputText)
const sentence = markov.generateSentences(1)
.toString()
.substring(0, 140)
bot.post('statuses/update', {
status: sentence
}, (err, data, response) =&gt; {
if (err) {
console.log(err)
} else {
console.log('Markov status tweeted!', sentence)
}
})
})
}
function hasNoStopWords(token) {
const stopwords = ['@', 'http', 'RT']
return stopwords.every(sw =&gt; !token.includes(sw))
}
function cleanText(text) {
return rita.RiTa.tokenize(text, ' ')
.filter(hasNoStopWords)
.join(' ')
.trim()
}</code></pre>
<h3 id="retrieve-and-tweet-data-from-google-sheets">Retrieve and Tweet data from Google sheets</h3>
<p>If you want to tweet a list of links, you can use <code><a href="https://www.npmjs.com/package/tabletop" rel="noopener">tabletop</a></code> to work though the list. In this example, again from <a href="https://egghead.io/lessons/node-js-retrieve-and-tweet-information-from-google-spreadsheets" rel="noopener">egghead.io</a>, we'll go through a list of links.</p>
<p>So, set up the bot and require <code>tabletop</code>:</p><pre><code class="language-js">const Twit = require('twit')
const config = require('./config')
const Tabletop = require('tabletop')
const bot = new Twit(config)</code></pre>
<p>On your <code><a href="https://github.com/spences10/twitter-bot-playground/blob/master/sheets.google.com" rel="noopener">Google spreadsheet</a></code> you'll need to have a header defined and then add your links, we'll use the following for an example:</p>
<p>Now from Google sheets we can select ‘File’&gt;’Publish to the web’ and copy the link that is generated to use in tabletop.</p>
<p>Now init <code>Tabletop</code> with three parameters, <code>key:</code> which is the spreadsheet URL, a <code>callback:</code> function to get the data and <code>simpleSheet:</code> which is <code>true</code> if you only have one sheet, like in our example here:</p><pre><code class="language-js">const spreadsheetUrl = 'https://docs.google.com/spreadsheets/d/1842GC9JS9qDWHc-9leZoEn9Q_-jcPUcuDvIqd_MMPZQ/pubhtml'
Tabletop.init({
key: spreadsheetUrl,
callback(data, tabletop) {
console.log(data)
},
simpleSheet: true
})</code></pre>
<p>Running the bot now should give output like this:</p><pre><code class="language-bash">$ node index.js
[ { 'links': 'https://www.freecodecamp.com' },
{ 'links': 'https://github.com' },
{ 'links': 'https://www.reddit.com' },
{ 'links': 'https://twitter.com' } ]</code></pre>
<p>So now we can tweet them using <code>.post('statuses/update',...</code> with a <code>forEach</code> on the <code>data</code> that is returned in the callback:</p><pre><code class="language-js">Tabletop.init({
key: spreadsheetUrl,
callback(data, tabletop) {
data.forEach(d =&gt; {
const status = `${d.links} a link from a Google spreadsheet`;
bot.post('statuses/update', {
status
}, (err, response, data) =&gt; {
if (err) {
console.log(err)
} else {
console.log('Post success!')
}
})
})
},
simpleSheet: true
})</code></pre>
<p>Note that <code>${d.links}</code> is the header name we use in the Google spreadsheet, I tried using skeleton and camel case and both returned errors so I went with a single name header on the spreadsheet.</p>
<p>The completed code here:</p><pre><code class="language-js">const Twit = require('twit')
const config = require('./config')
const Tabletop = require('tabletop')
const bot = new Twit(config)
const spreadsheetUrl = 'https://docs.google.com/spreadsheets/d/1842GC9JS9qDWHc-9leZoEn9Q_-jcPUcuDvIqd_MMPZQ/pubhtml'
Tabletop.init({
key: spreadsheetUrl,
callback(data, tabletop) {
data.forEach(d =&gt; {
const status = `${d.links} a link from a Google spreadsheet`
console.log(status)
bot.post('statuses/update', {
status
}, (err, response, data) =&gt; {
if (err) {
console.log(err)
} else {
console.log('Post success!')
}
})
})
},
simpleSheet: true
})</code></pre>
<h3 id="putting-it-all-together">Putting it all together</h3>
<p>Ok, so those examples were good and all, but we haven’t really got a bot out of this have we? I mean you run it from the terminal and it’s done, but we want to be able to kick off the bot and leave it to do its thing.</p>
<p>One way I have found to do this is to use <code>setInterval</code> which will kick off events from the main <code>bot.js</code> module.</p>
<p>Take the example we did to tweet a picture and add it to it’s own module, so from the root directory of our project:</p><pre><code class="language-bash">cd src
touch picture-bot.js</code></pre>
<p>Take the example code from that and paste it into the new module. Then we’re going to make the following changes, to <code>getPhoto</code>:</p><pre><code class="language-js">const getPhoto = () =&gt; {
const parameters = {
url: 'https://api.nasa.gov/planetary/apod',
qs: {
api_key: process.env.NASA_KEY
},
encoding: 'binary'
}
request.get(parameters, (err, respone, body) =&gt; {
body = JSON.parse(body)
saveFile(body, 'nasa.jpg')
})
}</code></pre>
<p>Then at the bottom of the module add:</p><pre><code class="language-bash">module.exports = getPhoto</code></pre>
<p>So now we can call the <code>getPhoto</code> function from the <code>picture-bot.js</code> module in our <code>bot.js</code> module. Our <code>bot.js</code> module should look something like this:</p><pre><code class="language-js">const picture = require('./picture-bot')
picture()</code></pre>
<p>That’s it, two lines of code, try running that from the terminal now:</p><pre><code class="language-bash">yarn start</code></pre>
<p>We should get some output like this:</p><pre><code class="language-bash">yarn start v0.23.4
$ node index.js
Media saved!
file PATH C:\Users\path\to\project\tweebot-play\nasa.jpg
{ media_id: 863020197799764000,
media_id_string: '863020197799763968',
size: 371664,
expires_after_secs: 86400,
image: { image_type: 'image/jpeg', w: 954, h: 944 } }
Status posted!
Done in 9.89s.</code></pre>
<p>The picture of the day is set up, but it has run once and completed. We need to put it on an interval with <code>setInterval</code>. It takes two options, the function it's going to call and the timeout value.</p>
<p>The picture updates every 24 hours so that will be how many milliseconds in 24 hours [8.64e+7].</p>
<p>The formula is 1000 * 60 = 1 minute, so 1000 * 60 * 60 * 24 so for now let’s add that directly into the <code>setInterval</code> function:</p><pre><code class="language-js">const picture = require('./picture-bot')
picture()
setInterval(picture, 1000 * 60 * 60 * 24)</code></pre>
<p>Cool, that’s a bot that will post the NASA image of the day every 24 hours!</p>
<p>Lets keep going, now lets add some randomness in with the Markov bot. Like what we did for the picture of the day example, let’s create a new module for the Markov bot and add all the code in there from the previous example, so from the terminal:</p><pre><code class="language-bash">cd src
touch markov-bot.js</code></pre>
<p>Then copy and paste the Markov bot example into the new module, and make the following changes:</p><pre><code class="language-js">const tweetData = () =&gt; {
fs.createReadStream(filePath)
.pipe(csvparse({
delimiter: ','
}))
.on('data', row =&gt; {
inputText = `${inputText} ${cleanText(row[5])}`
})
.on('end', () =&gt; {
const markov = new rita.RiMarkov(10)
markov.loadText(inputText)
.toString()
.substring(0, 140)
const sentence = markov.generateSentences(1)
bot.post('statuses/update', {
status: sentence
}, (err, data, response) =&gt; {
if (err) {
console.log(err)
} else {
console.log('Markov status tweeted!', sentence)
}
})
})
}</code></pre>
<p>Then at the bottom of the module add:</p><pre><code class="language-js">module.exports = tweetData</code></pre>
<p>Similar to the picture bot example, we’re going to add the <code>tweetData</code> export from <code>markov-bot.js</code> to our <code>bot.js</code>module, which should now look something like this:</p><pre><code class="language-js">const picture = require('./picture-bot')
const markov = require('./markov-bot')
picture()
setInterval(picture, 1000 * 60 * 60 * 24)
markov()</code></pre>
<p>Let’s make the Markov bot tweet at random intervals between 5 minutes and 3 hours</p><pre><code class="language-js">const picture = require('./picture-bot')
const markov = require('./markov-bot')
picture()
setInterval(picture, 1000 * 60 * 60 * 24)
const markovInterval = (Math.floor(Math.random() * 180) + 1) * 1000
markov()
setInterval(markov, markovInterval)</code></pre>
<p>Alright! Picture bot and Markov bot, both done.</p>
<p>Do the same with the link bot? Ok, same as before, you get the idea now, right?</p>
<p>Create a new file in the <code>src</code> folder for link bot:</p><pre><code class="language-bash">touch link-bot.js</code></pre>
<p>Copy and paste the code from the link bot example into the new module, like this:</p><pre><code class="language-js">const link = () =&gt; {
Tabletop.init({
key: spreadsheetUrl,
callback(data, tabletop) {
data.forEach(d =&gt; {
const status = `${d.links} a link from a Google spreadsheet`
console.log(status)
bot.post('statuses/update', {
status
}, (err, response, data) =&gt; {
if (err) {
console.log(err)
} else {
console.log('Post success!')
}
})
})
},
simpleSheet: true
})
}
module.exports = link</code></pre>
<p>Then we can call it from the bot, so it should look something like this:</p><pre><code class="language-js">const picture = require('./picture-bot')
const markov = require('./markov-bot')
const link = require('./link-bot')
picture()
setInterval(picture, 1000 * 60 * 60 * 24)
const markovInterval = (Math.floor(Math.random() * 180) + 1) * 1000
markov()
setInterval(markov, markovInterval)
link()
setInterval(link, 1000 * 60 * 60 * 24)</code></pre>
<p>We can now leave the bot running to do its thing!!</p>
<h3 id="deploy-to-now">Deploy to <code>now</code></h3>
<p>We have a bot that does a few things, but it’s on our development environment and can’t stay there forever. (It could, but that would be pretty impractical). Let’s put our bot on a server somewhere to do it’s thing.</p>
<p>We’re going to be using <a href="https://zeit.co/now" rel="noopener">Zeit’s</a> <code>now</code> platform, which allows for simple deployments from the CLI. If you're not familiar with it, then take a quick look at the <a href="https://zeit.co/now" rel="noopener">documentation</a>. In these examples we're going to be using the <code>now-cli</code>.</p>
<p>There’s a few things we need to do in order to get our bot ready to go on <code>now</code>. Let's list them quickly and then go into detail.</p>
<ul>
<li>Signup and install <code>now-cli</code></li>
<li>Add <code>now</code> settings + <code>.npmignore</code> file</li>
<li>Add <code>.env</code> variables as secrets</li>
<li>Add npm <code>deploy</code> script</li>
<li>Re jig <code>picture-bot.js</code></li>
</ul>
<p>Ready? Lets do this!</p>
<p><strong>Signup and install <code>now-cli</code></strong></p>
<p>First, signup for Z<a href="https://zeit.co/login" rel="noopener">eit</a> by creating an account and authenticating it, then install the CLI.</p>
<p>Install <code>now</code> globally on your machine so you can use it everywhere.</p><pre><code class="language-bash">npm install -g now</code></pre>
<p>Once it’s completed, login with:</p><pre><code class="language-bash">now --login</code></pre>
<p>The first time you run <code>now</code>, it'll ask for your email address in order to identify you. Go to the email account you supplied when signing up, click on the email sent to you from <code>now</code>, and you'll be logged in automatically.</p>
<p>If you need to switch the account or re-authenticate, run the same command again.</p>
<p>You can always check out the <code>now-cli</code> documentation for more information along with the <code><a href="https://zeit.co/docs/getting-started/your-first-deployments#deploying-node" rel="noopener">your first deployment</a></code> guide.</p>
<p><strong>Add <code>now</code> settings</strong></p>
<p>With signup and install done, we can configure the bot for deploying to <code>now</code>. First let’s add the <code>now</code> settings to our <code>package.json</code> file. I put it between my <code>npm</code> scripts and the author name in my <code>package.json</code>:</p><pre><code class="language-js">"scripts": {
"start": "node index.js"
},
"now": {
"alias": "my-awesome-alias",
"files": [
"src",
"index.js"
]
},
"author": "Scott Spence",</code></pre>
<p>This was a source of major confusion for me so I’m hoping I can save you the pain I went through trying to configure this. All the relevant documentation is there, you just need to put it all together.</p>
<p>If you find anything in here that doesn’t make sense or seems wrong, then please <a href="https://github.com/spences10/twitter-bot-playground/issues/new" rel="noopener">log an issue</a> or create a pull request.</p>
<p>The now settings <code>alias</code> is to give your deployment a shorthand name over the auto generated URL that <code>now</code> creates. The <code>files</code> section covers what we want to include in the deployment to <code>now</code> which I’ll cover shortly. Basically, what is included in the <code>files</code> array is all that get passed up to the <code>now</code> servers.</p>
<p>Now we need to add a <code>.npmignore</code> file in the root of the project and add the following line to it:</p><pre><code>!tweets.csv</code></pre>
<p>The <code>tweets.csv</code> needs to go up to the <code>now</code> server to be used by the bot, but we previously included it in our <code>.gitignore</code>. This is what <code>now</code> uses to build your project when it's being loaded to the server. This means that the file isn't going to get loaded unless we edit the <code>.npmignore</code> to not ignore the <code>tweets.csv</code>.</p>
<p><strong>Add <code>.env</code> variables as secrets</strong></p>
<p>Our super secret Twitter keys will need to be stored as <code>secrets</code> in <code>now</code>. This is a pretty neat feature where you can define anything as a secret and reference it as an alias.</p>
<p>The syntax is <code>now secrets add my-secret "my value"</code> so for our <code>.env</code> keys, add them all in, giving them a descriptive (but short!) name.</p>
<p>You will not need to wrap your “my value” in quotes but the documentation does say “when in doubt, wrap your value in quotes.”</p>
<p>In the terminal, <code>now secrets ls</code> should list out your <code>secrets</code> you just created:</p><pre><code class="language-bash">$ now secrets ls
&gt; 5 secrets found under spences10 [1s]
id  name                   created
sec_xxxxxxxxxxZpLDxxxxxxxxxx  ds-twit-key            23h ago
sec_xxxxxxxxxxTE5Kxxxxxxxxxx  ds-twit-secret         23h ago
sec_xxxxxxxxxxNorlxxxxxxxxxx  ds-twit-access         23h ago
sec_xxxxxxxxxxMe1Cxxxxxxxxxx  ds-twit-access-secret  23h ago
sec_xxxxxxxxxxMJ2jxxxxxxxxxx  nasa-key               23h ago</code></pre>
<p><strong>Add npm <code>deploy</code> script</strong></p>
<p>With our secrets defined, we can create a deployment script to deploy to <code>now</code>. In our <code>package.json</code>, add an additional script:</p><pre><code class="language-json">"main": "index.js",
"scripts": {
"start": "node index.js",
"deploy": "now -e CONSUMER_KEY=@ds-twit-key -e CONSUMER_SECRET=@ds-twit-secret -e ACCESS_TOKEN=@ds-twit-access  -e ACCESS_TOKEN_SECRET=@ds-twit-access-secret -e NASA_KEY=@nasa-key"
},
"now": {</code></pre>
<p>We added <code>deploy</code>, which will run the <code>now</code> command and pass it all our environment <code>-e</code> variables and the associated <code>secret</code> value. If we break it down into separate lines it will be a bit clearer:</p><pre><code class="language-bash">now
-e CONSUMER_KEY=@ds-twit-key
-e CONSUMER_SECRET=@ds-twit-secret
-e ACCESS_TOKEN=@ds-twit-access
-e ACCESS_TOKEN_SECRET=@ds-twit-access-secret
-e NASA_KEY=@nasa-key</code></pre>
<p><strong>Re-jig <code>picture-bot.js</code></strong></p>
<p>Because <code>now</code> deployments are <a href="https://blog.codeship.com/immutable-deployments/" rel="noopener">immutable</a>, it means that there's no write access to the disk where we want to save our NASA photo of the day. To get around that we need to use the <code>/tmp</code> file location.</p>
<p>Thank you to <a href="https://github.com/timneutkens" rel="noopener">Tim</a> from Zeit for helping me out with this!</p>
<p>In the <code>picture-bot.js</code> module, add the following two lines to the top of the module:</p><pre><code class="language-js">const os = require('os')
const tmpDir = os.tmpdir()</code></pre>
<p>Those two lines give us the <code>temp</code> directory of the operating system. If you’re like me and you use Windows, it will work just as well as if you are on another system like a linux based system (what <code>now</code> is). In our <code>saveFile</code> function, we're going to use <code>tmpDir</code> to save our file.</p>
<p>We’ve taken out the <code>nasa.jpg</code> from the <code>getPhoto</code> function since we can define that information in the <code>saveFile</code> function. The NASA photo of the day is not always a <code>jpeg</code>, some items posted there are videos. We can define the type with a <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Conditional_Operator" rel="noopener">ternary function</a> off of the <code>body</code> being passed in, this will send a tweet with a link to the video:</p><pre><code class="language-js">function saveFile(body) {
const fileName = body.media_type === 'image/jpeg' ? 'nasa.jpg' : 'nasa.mp4';
const filePath = path.join(tmpDir + `/${fileName}`)
console.log(`saveFile: file PATH ${filePath}`)
if (fileName === 'nasa.mp4') {
// tweet the link
const params = {
status: 'NASA video link: ' + body.url
}
postStatus(params)
return
}
const file = fs.createWriteStream(filePath)
request(body).pipe(file).on('close', err =&gt; {
if (err) {
console.log(err)
} else {
console.log('Media saved!')
const descriptionText = body.title
uploadMedia(descriptionText, filePath)
}
})
}</code></pre>
<p>The completed code here:</p><pre><code class="language-js">const Twit = require('twit')
const request = require('request')
const fs = require('fs')
const config = require('./config')
const path = require('path')
const bot = new Twit(config)
const os = require('os')
const tmpDir = os.tmpdir()
const getPhoto = () =&gt; {
const parameters = {
url: 'https://api.nasa.gov/planetary/apod',
qs: {
api_key: process.env.NASA_KEY
},
encoding: 'binary'
}
request.get(parameters, (err, respone, body) =&gt; {
body = JSON.parse(body)
saveFile(body)
})
}
function saveFile(body) {
const fileName = body.media_type === 'image/jpeg' ? 'nasa.jpg' : 'nasa.mp4';
const filePath = path.join(tmpDir + `/${fileName}`)
console.log(`saveFile: file PATH ${filePath}`)
if (fileName === 'nasa.mp4') {
// tweet the link
const params = {
status: 'NASA video link: ' + body.url
}
postStatus(params)
return
}
const file = fs.createWriteStream(filePath)
request(body).pipe(file).on('close', err =&gt; {
if (err) {
console.log(err)
} else {
console.log('Media saved!')
const descriptionText = body.title
uploadMedia(descriptionText, filePath)
}
})
}
function uploadMedia(descriptionText, fileName) {
console.log(`uploadMedia: file PATH ${fileName}`)
bot.postMediaChunked({
file_path: fileName
}, (err, data, respone) =&gt; {
if (err) {
console.log(err)
} else {
console.log(data)
const params = {
status: descriptionText,
media_ids: data.media_id_string
}
postStatus(params)
}
})
}
function postStatus(params) {
bot.post('statuses/update', params, (err, data, respone) =&gt; {
if (err) {
console.log(err)
} else {
console.log('Status posted!')
}
})
}
module.exports = getPhoto</code></pre>
<p>Ok, thats it! We’re ready to deploy to <code>now</code>!</p>
<p>In the terminal we call our deployment script we defined earlier:</p><pre><code class="language-bash">yarn deploy</code></pre>
<p>You will get some output:</p><pre><code class="language-bash">λ yarn deploy
yarn deploy v0.24.4
$ now -e CONSUMER_KEY=@ds-twit-key -e CONSUMER_SECRET=@ds-twit-secret -e ACCESS_TOKEN=@ds-twit-access  -e ACCESS_TOKEN_SECRET=@ds-twit-access-secret -e NASA_KEY=@nasa-key
&gt; Deploying ~\gitrepos\tweebot-play under spences10
&gt; Using Node.js 7.10.0 (default)
&gt; Ready! https://twee-bot-play-rapjuiuddx.now.sh (copied to clipboard) [5s]
&gt; Upload [====================] 100% 0.0s
&gt; Sync complete (1.54kB) [2s]
&gt; Initializing…
&gt; Building
&gt; ▲ npm install
&gt; ⧗ Installing:
&gt;  ‣ csv-parse@^1.2.0
&gt;  ‣ dotenv@^4.0.0
&gt;  ‣ rita@^1.1.63
&gt;  ‣ tabletop@^1.5.2
&gt;  ‣ twit@^2.2.5
&gt; ✓ Installed 106 modules [3s]
&gt; ▲ npm start
&gt; &gt; tweet-bot-playground@1.0.0 start /home/nowuser/src
&gt; &gt; node index.js
&gt; saveFile: file PATH /tmp/nasa.jpg
&gt; Media saved!
&gt; uploadMedia: file PATH /tmp/nasa.jpg</code></pre>
<p>Woot! You have your bot deployed!</p>
<p>If you click on the link produced, you will be able to inspect the bot as it is on <code>now</code>. There's also a handy logs section on the page where you can check for output.</p>
<h3 id="resources">Resources</h3>
<p><a href="https://github.com/amandeepmittal/awesome-twitter-bots" rel="noopener">awesome-twitter-bots</a></p>
<p>Thanks for reading! If you liked this story, please don’t forget to recommend it by clicking the button on the side, and by sharing it with your friends through social media.</p>
<p>If you want to learn more about me, you can <a href="https://github.com/spences10/ama" rel="noopener">ask me anything</a> check my <a href="https://github.com/spences10" rel="noopener">Github</a>, or tweet me <a href="https://twitter.com/ScottDevTweets" rel="noopener">@ScottDevTweets</a>.</p>
<blockquote><strong>You can read other articles like this on <a href="https://thelocalhost.blog/">my blog</a>.</strong></blockquote>
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
