---
card: "/images/default.jpg"
tags: [JavaScript]
description: Slack is an American cloud-based set of proprietary team coll
author: "Milad E. Fahmy"
title: "How to build a SlackBot with Node.js and SlackBots.js"
created: "2021-08-15T19:33:06+02:00"
modified: "2021-08-15T19:33:06+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-nodejs tag-slack tag-bots tag-api tag-100daysofcode ">
<header class="post-full-header">
<h1 class="post-full-title">How to build a SlackBot with Node.js and SlackBots.js</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/05/article-banner--4-.png 300w,
/news/content/images/size/w600/2020/05/article-banner--4-.png 600w,
/news/content/images/size/w1000/2020/05/article-banner--4-.png 1000w,
/news/content/images/size/w2000/2020/05/article-banner--4-.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/05/article-banner--4-.png" alt="How to build a SlackBot with Node.js and SlackBots.js">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Slack is an American cloud-based set of proprietary team collaboration software tools and online services, developed by Slack Technologies. Slack is a workspace where teams can communicate and collaborate.</p>
<p>Teamwork in Slack happens in channels — a single place for messaging, tools and files — helping everyone save time and collaborate.</p>
<hr>
<p>One of the awesome features of Slack is <a href="https://slack.com/apps">Slack Apps</a>, integrations and <a href="https://api.slack.com/bot-users">Slack Bots</a>.</p>
<p>A Slack bot is a type of Slack App designed to interact with users via conversation. Your bot can send DMs, it can be mentioned by users, it can post messages or upload files, and it can be invited to channels. Cool right?</p>
<p>If you use Slack already, you should be familiar with some creative Slack bots like <a href="https://standupbot.com/">Standupbot</a>, <a href="https://birthdaybot.io/">Birthdaybot</a> and more.</p>
<p>In this article, I'll walk you through building your first Slack bot from start to finish with <a href="http://nodejs.org/">Node.js</a> and <a href="https://github.com/mishk0/slack-bot-api">SlackBots.js</a></p>
<blockquote>PS: This article was published <a href="https://www.bolajiayodeji.com/building-a-slackbot-with-node-js-and-slackbots-js/">on my blog first</a>.</blockquote>
<h1 id="slackbot-description">SlackBot Description</h1>
<p>We're going to build a simple Slackbot that displays random inspiring techie quotes and jokes for developers/designers.</p>
<p>I built a <a href="https://github.com/BolajiAyodeji/inspireNuggets">chrome extension</a> that displays random inspiring techie quotes for developers/designers on your new tab (you can download it <a href="https://chrome.google.com/webstore/detail/inspirenuggets-for-chrome/acnfgdioohhajabdofaadfdhmlkphmlb">here</a>). We'll be using the quotes JSON from this extension as our quotes API and the <a href="https://api.chucknorris.io/">Chuck Norris Jokes API</a> for the jokes.</p>
<p>When a user mentions our bot and adds <strong>inspire me</strong>, the bot returns a random quote from <a href="https://chrome.google.com/webstore/detail/inspirenuggets-for-chrome/acnfgdioohhajabdofaadfdhmlkphmlb">inspireNuggets</a>. When the user types <strong>random joke</strong>, it returns a random joke from the <a href="https://api.chucknorris.io/">Chuck Norris</a> API. And when the user types help, it returns the instruction guide.</p>
<blockquote>@inspirenuggets inspire me <br><br>@inspirenuggets random joke <br><br>@inspirenuggets help</blockquote>
<p>This article is not really about what we'll be building - it's just to show you the concept behind Slack bots and how to build yours. After you go through it, you can think about something else and build a different bot, as there're many possibilities.</p>
<p>You can clone or fork the final project <a href="https://github.com/BolajiAyodeji/inspireNuggetsSlackBot">here</a>.</p>
<p>Pretty interesting right? Let's get started.</p>
<h1 id="prerequisites">Prerequisites</h1>
<p>We'll build this bot with Node.js and SlackBots.js. You don't need to know how to write Node.js, since I'll walk you through it. Still, knowing it is an advantage. You should also have</p>
<ul>
<li>Basic JavaScript knowledge</li>
<li>ES6 JavaScript</li>
<li>Slack workspace</li>
<li>Some experience with Slack</li>
<li>Some version control skills</li>
</ul>
<h1 id="setup-environment">Setup environment</h1>
<p>Let's set up and install Node.js and Npm first.</p>
<ul>
<li>Download node <a href="https://nodejs.org/en/">here</a>. If you have it installed already, skip this step. If you prefer to use a package manager to install, read <a href="https://nodejs.org/en/download/package-manager/#windows">this</a> for all operating systems.</li>
<li>Check if you have Node installed</li>
</ul><pre><code>node -v
</code></pre>
<ul>
<li>Node.js comes with Npm, so you don't have to install that again.</li>
</ul><pre><code>npm -v
</code></pre>
<p>Now that we have Node.js setup, let's initialize our project.</p>
<p>Create your project directory (I called mine Slackbot) and initialize git:</p><pre><code>git init
</code></pre>
<p>Next, create an <code>index.js</code> file:</p><pre><code>touch index.js
</code></pre>
<p>And initialize Npm:</p><pre><code>npm init
</code></pre>
<p>Simply answer all questions that come afterwards. If you're having issues, here's my own <code>package.json</code>:</p><pre><code class="language-json">{
"name": "slackbot",
"version": "1.0.0",
"description": "A simple Slackbot that displays random inspiring techie quotes for developers/designers.",
"main": "index.js",
"scripts": {
"start": "index.js"
},
"repository": {
"type": "git",
"url": "git+https://github.com/BolajiAyodeji/slackbot.git"
},
"author": "Bolaji Ayodeji",
"license": "MIT",
"bugs": {
"url": "https://github.com/BolajiAyodeji/slackbot/issues"
},
"homepage": "https://github.com/BolajiAyodeji/slackbot#readme"
}
</code></pre>
<h1 id="install-dependencies">Install Dependencies</h1>
<p><strong>Now let's install and setup all the libraries we need.</strong></p>
<h2 id="slackbots-js">SlackBots.js</h2>
<p><a href="https://github.com/mishk0/slack-bot-api">SlackBots.js</a> is a Node.js library for easy operation with the Slack API.</p><pre><code>npm install slackbots
</code></pre>
<p>In <code>index.js</code>:</p><pre><code>const SlackBot = require('slackbots');
</code></pre>
<h2 id="axios">Axios</h2>
<p><a href="https://github.com/axios/axios">Axios</a> is a promise-based HTTP client for the browser and node.js. If you know Fetch or AJAX, this is just a library that does the same thing with way cooler features. You can see them <a href="https://github.com/axios/axios">here</a>.</p><pre><code>npm install axios
</code></pre>
<p>In <code>index.js</code>:</p><pre><code>const axios = require('axios')
</code></pre>
<h2 id="nodemon">Nodemon</h2>
<p>To run a script in Node.js, you have to run <code>node index.js</code>. Whenever you make changes to this file, you have to rerun <code>node index.js</code>. This sucks when you're making so many changes like we'll be doing. That's why we need <a href="https://github.com/remy/nodemon">nodemon</a>, a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.</p><pre><code>npm install -g nodemon
</code></pre>
<p>In <code>package.json</code>, locate the scripts section and add a new start script:</p><pre><code>"scripts": {
"start": "node index.js"
}
</code></pre>
<p>If you run <code>npm start</code>, the file will run but won't restart on change. To fix this, use the nodemon we installed instead of node like so:</p><pre><code>"scripts": {
"start": "nodemon index.js"
}
</code></pre>
<h1 id="dotenv">Dotenv</h1>
<p>I won't explain this in-depth. In a few days, I'll publish an article around environmental variables, but for now just know that we use this to hide secret keys and tokens like the Slack Access Token we would be using. This way you don't have to push your secret keys to GitHub. </p>
<p>There are several ways to do this, but I prefer using dotenv. <a href="https://github.com/motdotla/dotenv">Dotenv</a> is a zero-dependency module that loads environment variables from a .env file into process.env.</p><pre><code>npm install dotenv
</code></pre>
<p>In <code>index.js</code>:</p><pre><code>const dotenv = require('dotenv')
dotenv.config()
</code></pre>
<p>After all installation, your <code>package.json</code> should look like this:</p><pre><code class="language-json">{
"name": "inspireNuggetsSlackBot",
"version": "1.0.0",
"description": "A simple Slackbot that displays random inspiring techie quotes and jokes for developers/designers.",
"main": "index.js",
"scripts": {
"start": "nodemon index.js"
},
"repository": {
"type": "git",
"url": "git+https://github.com/BolajiAyodeji/inspireNuggetsSlackBot.git"
},
"author": "Bolaji Ayodeji",
"license": "MIT",
"bugs": {
"url": "https://github.com/BolajiAyodeji/inspireNuggetsSlackBot/issues"
},
"homepage": "https://github.com/BolajiAyodeji/inspireNuggetsSlackBot#readme",
"devDependencies": {
"dotenv": "^8.0.0"
},
"dependencies": {
"axios": "^0.19.0",
"slackbots": "^1.2.0"
}
}
</code></pre>
<h1 id="create-your-slack-workspace">Create your Slack workspace</h1>
<p>Now that we have that all set up, we need a Slack workspace to run our bot in development. Creating a workspace is pretty easy, read <a href="https://get.slack.help/hc/en-us/articles/206845317-Create-a-Slack-workspace">this</a> to learn more.</p>
<h1 id="register-your-slack-bot">Register your Slack Bot</h1>
<p>Now that you have a workspace, you should have a Slack URL with your workspace name. Mine is <code>mekafindteam.slack.com</code>.</p>
<p>Now you'll need to create a Slack App. Create one <a href="https://api.slack.com/apps/new">here</a>.</p>
<p>Enter your App name and ensure you're in the workspace you created if you're in multiple workspaces.</p>
<p>Now you'll see the settings &gt; Basic Information page. Click the first tab <code>Add features and functionality</code>:</p>
<p>Since we're building a bot, select the <strong>Bots</strong> field.</p>
<p>Now you'll see the Bot user page:</p>
<p>Click the <code>Add a Bot User</code> button.</p>
<p>Your display name will automatically be filled in from your already chosen App name. You can update it, but I'll advise you use the same name everywhere with the same alphabet case to avoid errors.</p>
<p>Now, toggle the <code>Always Show My Bot as Online</code> switch to always show your bot as Online. Remember this bot is just like a user in your workspace. Afterwards, click the <code>Add Bot User</code> button.</p>
<p>Save all changes now:</p>
<p>Next, return to the <code>Basic Information</code> page and select the <code>Install your app to your workspace</code> tab.</p>
<p>Click the <code>Install App to Workspace</code>:</p>
<p>Click allow and wait to be redirected back to the <code>Basic Information</code> page.</p>
<p>Note the <code>Manage distribution</code> tab: this section is needed when you want to make your Bot available for installation by others. For now we're just building in development and I won't be covering distribution in this article. In my next article, I'll show you how to deploy your Slack bot and make it available as an App to other workspaces.</p>
<p>If you check your Slack workspace now, you should see the App installed in the Apps section.</p>
<p>For now, it's offline - once we start building the bot, we'll turn this on.</p>
<h1 id="customize-your-slack-bot">Customize your Slack bot</h1>
<p>Now we've created our bot, let's do some customization.</p>
<p>Still, on the <code>Basic Information</code> page, scroll down to the <code>Display Information</code> section:</p>
<p>This is basic stuff: just upload a logo, change your background color, and add a short description.</p>
<p>Your icon should be <code>512x512px</code> or bigger and your background color should be in HEX. Read more on the App guidelines <a href="https://api.slack.com/docs/slack-apps-guidelines">here</a>.</p>
<p>Here's what mine looks like after customization:</p>
<h1 id="slack-bot-oauth-tokens">Slack bot OAuth Tokens</h1>
<p>Now that we have our Slack bot setup, let's grab out token keys.</p>
<p>In the navigation bar, locate the Features section and click the <code>OAuth &amp; Permission</code> tab:</p>
<p>You'll see two Access Tokens:</p>
<ul>
<li>OAuth Access Token</li>
<li>Bot User OAuth Access Token</li>
</ul>
<p>Copy the <strong>Bot User OAuth Access Token.</strong></p>
<p>This will change every time you re-install this app or when you install it in another workspace. The token should start with <code>xoxb-</code>.</p>
<blockquote>Keeping credentials secure is important whether you're developing open source libraries and tools, internal integrations for your workspace, or Slack apps for distribution to workspaces across the world. - Slack</blockquote>
<p>This is why we have installed Dotenv - we'll set that up in the next section.</p>
<h1 id="building-the-bot">Building the bot</h1>
<p>Now let's build our bot :).</p>
<h3 id="first-let-s-keep-our-access-token-somewhere-">First, let's keep our Access Token somewhere.</h3>
<p>Create a <code>.env</code> file and add this:</p><pre><code>BOT_TOKEN=YOUR_SLACK_ACCESS_TOKEN_HERE
</code></pre>
<p>Now let's start our SlackBot.js:</p><pre><code class="language-javascript">const bot = new SlackBot({
token: `${process.env.BOT_TOKEN}`,
name: 'inspirenuggets'
})
</code></pre>
<p>We've just created a bot variable that initializes a new SlackBot instance which has two values, our token and app name.</p>
<p>I used the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals">ES6 template string syntax</a> to bring in our token key from our <code>.env</code> file. dotenv has this covered for us.</p>
<p>Make sure you use the same name you used while creating your Slack app, or else you'll have authentication errors.</p>
<p>Now start the app:</p><pre><code>npm start
</code></pre>
<p>nodemon should be running now and our Slack app should be online too.</p>
<h3 id="start-handler">Start handler</h3>
<p>Our Bot does nothing now even though it's running. Let's return a message.</p><pre><code class="language-javascript">bot.on('start', () =&gt; {
const params = {
icon_emoji: ':robot_face:'
}
bot.postMessageToChannel(
'random',
'Get inspired while working with @inspirenuggets',
params
);
})
</code></pre>
<p>The <code>bot.on</code> handler sends the welcome message. We passed two parameters, the <code>'start'</code> and a function which holds a params variable which also holds the slack emoji. Slack emoji have codes, and you can find them <a href="https://slackmojis.com/">here</a>. I used <code>:robot_face:</code>, but you can change this to your preferred emoji.</p>
<p>We also initialized the <code>bot.postMessageToChannel</code> function which is a SlackBot.js method to post a message to a channel. In this function, we pass the channel name we want to post to, the message in a string, and the params variable we declared earlier for the emoji. I used the <strong>#random</strong> channel and sent <code>Get inspired while working with @inspirenuggets</code> to it. Your app should restart automatically and your bot should do this:</p>
<p>Cool right?<br>You can also post messages to users and groups.</p><pre><code class="language-javascript">    // define existing username instead of 'user_name'
bot.postMessageToUser('user_name', 'Hello world!', params);
// define private group instead of 'private_group', where bot exist
bot.postMessageToGroup('private_group', 'Hello world!', params);
</code></pre>
<h3 id="error-handler">Error Handler</h3>
<p>Let's also write a function to check for errors and return them:</p><pre><code class="language-javascript">bot.on('error', (err) =&gt; {
console.log(err);
})
</code></pre>
<h3 id="message-handler">Message Handler</h3>
<p>Now let's build the main bot functionality.</p>
<p>Like I said earlier, we'll be using the quotes JSON from the extension I built as our quotes API. The JSON can be found with this URL: <code>https://raw.githubusercontent.com/BolajiAyodeji/inspireNuggets/master/src/quotes.json</code></p>
<p>When a user mentions our bot and adds <strong>inspire me</strong>, the bot returns a random quote from <a href="https://chrome.google.com/webstore/detail/inspirenuggets-for-chrome/acnfgdioohhajabdofaadfdhmlkphmlb">inspireNuggets</a>. When the user types <strong>random joke</strong>, it returns a random joke from the <a href="https://api.chucknorris.io/">Chuck Norris</a> API. And when the user types <strong>help</strong>, it returns the instruction guide.</p>
<p>First, let's check for our command words from the user message (<strong>inspire me</strong>, <strong>random joke,</strong> and <strong>help</strong>):</p><pre><code class="language-javascript">function handleMessage(message) {
if(message.includes(' inspire me')) {
inspireMe()
} else if(message.includes(' random joke')) {
randomJoke()
} else if(message.includes(' help')) {
runHelp()
}
}
</code></pre>
<p>Now let's create the three function we need</p>
<p><strong>inspireMe()</strong></p>
<p>Our demo JSON is not really an API, it's just some JSON I used in the Chrome Extension. We're only accessing it from GitHub raw contents. You can use any API you prefer, you'll just have to iterate differently to get your data depending on if your API returns an array or object - whichever it returns, it's not a big deal.</p>
<p>Check out my previous articles on:</p>
<ul>
<li><a href="https://www.bolajiayodeji.com/manipulating-arrays-in-javascript/">Manipulating Arrays in JavaScript</a> and</li>
<li><a href="https://www.bolajiayodeji.com/iterating-through-javascript-objects-5-techniques-and-performance-tests/">Iterating through JavaScript Objects  -  5 Techniques and Performance Tests.</a></li>
</ul><pre><code class="language-javascript">function inspireMe() {
axios.get('https://raw.githubusercontent.com/BolajiAyodeji/inspireNuggets/master/src/quotes.json')
.then(res =&gt; {
const quotes = res.data;
const random = Math.floor(Math.random() * quotes.length);
const quote = quotes[random].quote
const author = quotes[random].author
const params = {
icon_emoji: ':male-technologist:'
}
bot.postMessageToChannel(
'random',
`:zap: ${quote} - *${author}*`,
params
);
})
}
</code></pre>
<p>We just used Axios to get the JSON file which returns some data:</p><pre><code class="language-json">[
{
"number": "1",
"author": "Von R. Glitschka",
"quote": "The client may be king, but he's not the art director."
},
{
"number": "2",
"author": "Frank Capra",
"quote": "A hunch is creativity trying to tell you something."
},
.
.
.
.
]
</code></pre>
<p>This JSON currently contains 210 quotes and I update them frequently. So we want to get a random quote plus the author name every time the user request it. From our Axios response, we just do this:</p><pre><code class="language-javascript">
const quotes = res.data;
const random = Math.floor(Math.random() * quotes.length);
const quote = quotes[random].quote
const author = quotes[random].author
</code></pre>
<p>And just like we did with the welcome message, we just return the quote and author instead of a string message:</p><pre><code class="language-javascript">`:zap: ${quote} - *${author}*`</code></pre>
<p>Let's test this:</p>
<p>Type <code>@inspirenuggets inspire me</code></p>
<p>Yayyy! It worked!</p>
<p>PS: You can always change the emoji type for every request. If you noticed I changed the <code>inspireMe()</code> to <code>:male-technologist:</code></p>
<p><strong>randomJoke()</strong></p>
<p>We're getting the jokes from the Chuck Norris API from this endpoint <code>https://api.chucknorris.io/jokes/random</code>.</p><pre><code class="language-json">{
"categories": [],
"created_at": "2016-05-01 10:51:41.584544",
"icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
"id": "6vUvusBeSVqdsU9C5-ZJZw",
"updated_at": "2016-05-01 10:51:41.584544",
"url": "https://api.chucknorris.io/jokes/6vUvusBeSVqdsU9C5-ZJZw",
"value": "Chuck Norris once choked a wildcat to death with his sphincter muscle."
}
</code></pre>
<p>This is a real API that returns a random joke on every request, so we don't have to do <code>Math.floor()</code> again.</p><pre><code class="language-javascript">function randomJoke() {
axios.get('https://api.chucknorris.io/jokes/random')
.then(res =&gt; {
const joke = res.data.value;
const params = {
icon_emoji: ':smile:'
}
bot.postMessageToChannel(
'random',
`:zap: ${joke}`,
params
);
})
}
</code></pre>
<p>By now, you should understand how this works already. Make a post with the channel name, message and params.</p>
<p><strong>runHelp()</strong></p>
<p>This is similar to our welcome message: we just want to return a custom text when the user adds <strong>help</strong> to the request.</p><pre><code class="language-javascript">function runHelp() {
const params = {
icon_emoji: ':question:'
}
bot.postMessageToChannel(
'random',
`Type *@inspirenuggets* with *inspire me* to get an inspiring techie quote, *random joke* to get a Chuck Norris random joke and *help* to get this instruction again`,
params
);
}
</code></pre>
<p>Now let's test all three commands:</p>
<p>Everything works fine now, congratulations!!!! You just built your SlackBot.</p>
<hr>
<p>There are an endless number of possibilities of Bots you can build with this to automate your own work or teamwork.</p>
<p>You can build a bot that: </p>
<ul>
<li>Fetches your tasks from somewhere and reminds you when you type <code>hey what next</code>, </li>
<li>Welcomes every user to your workspace (I built this during one of the <a href="https://hng.tech/">HNG Internship's</a>), </li>
<li>Gives you football matches updates while you're working, </li>
<li>Tells your team when you hit a milestone in number of registered users,</li>
</ul>
<p>and many more...</p>
<p>It's just about having somewhere to get the data from, and some basic iteration skills and the <code>bot.postMessageToChannel()</code> method.</p>
<p>Automation is one thing we should learn as developers. We have a lot to do, so we should automate the simpler tasks so we have time for the more difficult ones. I hope with this you can automate your tasks and I look forward to the creative ideas you'll bring to life.</p>
<hr>
<h1 id="final-code">Final Code</h1>
<p>Here's our final <code>index.js</code></p><pre><code class="language-javascript">const SlackBot = require('slackbots');
const axios = require('axios')
const dotenv = require('dotenv')
dotenv.config()
const bot = new SlackBot({
token: `${process.env.BOT_TOKEN}`,
name: 'inspirenuggets'
})
// Start Handler
bot.on('start', () =&gt; {
const params = {
icon_emoji: ':robot_face:'
}
bot.postMessageToChannel(
'random',
'Get inspired while working with @inspirenuggets',
params
);
})
// Error Handler
bot.on('error', (err) =&gt; {
console.log(err);
})
// Message Handler
bot.on('message', (data) =&gt; {
if(data.type !== 'message') {
return;
}
handleMessage(data.text);
})
// Response Handler
function handleMessage(message) {
if(message.includes(' inspire me')) {
inspireMe()
} else if(message.includes(' random joke')) {
randomJoke()
} else if(message.includes(' help')) {
runHelp()
}
}
// inspire Me
function inspireMe() {
axios.get('https://raw.githubusercontent.com/BolajiAyodeji/inspireNuggets/master/src/quotes.json')
.then(res =&gt; {
const quotes = res.data;
const random = Math.floor(Math.random() * quotes.length);
const quote = quotes[random].quote
const author = quotes[random].author
const params = {
icon_emoji: ':male-technologist:'
}
bot.postMessageToChannel(
'random',
`:zap: ${quote} - *${author}*`,
params
);
})
}
// Random Joke
function randomJoke() {
axios.get('https://api.chucknorris.io/jokes/random')
.then(res =&gt; {
const joke = res.data.value;
const params = {
icon_emoji: ':smile:'
}
bot.postMessageToChannel(
'random',
`:zap: ${joke}`,
params
);
})
}
// Show Help
function runHelp() {
const params = {
icon_emoji: ':question:'
}
bot.postMessageToChannel(
'random',
`Type *@inspirenuggets* with *inspire me* to get an inspiring techie quote, *random joke* to get a Chuck Norris random joke and *help* to get this instruction again`,
params
);
}</code></pre>
<h1 id="what-next">What Next?</h1>
<p>Our bot only runs in development now, and to use it we always have to <code>npm start</code>.</p>
<p>This isn't cool, right? We'll want to host it somewhere it can run every time. In my next article, I'll show you how to host this on either <a href="https://herokuapp.com/">Heroku</a>, <a href="https://zeit.co/">Zeit</a> or <a href="https://netlify.com">Netlify</a> and publish it to the Slack Apps store so anyone around the world can use it.<br>Also, don't forget to add this in your <code>.gitignore</code> before pushing to GitHub:</p><pre><code>
/.env
/node_modules
</code></pre>
<blockquote><strong>Subscribe to my <a href="https://tinyletter.com/bolajiayodeji/">newsletter</a> to get updated.</strong></blockquote>
<h1 id="useful-resources">Useful Resources</h1>
<ul>
<li><a href="https://api.slack.com/">Slack API</a></li>
<li><a href="https://api.slack.com/#read_the_docs">Slack API Docs</a></li>
<li><a href="https://github.com/slackapi/node-slack-sdk">SlackBot.js</a></li>
<li><a>Slack Apps</a></li>
<li><a href="https://api.slack.com/docs/slack-apps-guidelines">Slack Apps Guidelines</a></li>
<li><a href="https://api.slack.com/start/overview">An introduction to Slack apps</a></li>
<li><a href="https://github.com/BolajiAyodeji/inspireNuggets">inspireNuggets</a></li>
<li><a href="https://github.com/BolajiAyodeji/inspireNuggetsSlackBot">inspireNuggetsSlackBot</a></li>
</ul>
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
