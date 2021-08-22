---
card: "https://cdn-media-1.freecodecamp.org/images/0*TZYrBalMX5If2Jj3.jpg"
tags: [Twitter]
description: Twitter bots can do a heck of a lot more than just spam trend
author: "Milad E. Fahmy"
title: "Why you should have your own Twitter bot, and how to build one in less than 30 minutes"
created: "2021-08-15T19:53:16+02:00"
modified: "2021-08-15T19:53:16+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-twitter tag-javascript tag-bots tag-social-media tag-tech ">
<header class="post-full-header">
<h1 class="post-full-title">Why you should have your own Twitter bot, and how to build one in less than 30 minutes</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/0*TZYrBalMX5If2Jj3.jpg 300w,
https://cdn-media-1.freecodecamp.org/images/0*TZYrBalMX5If2Jj3.jpg 600w,
https://cdn-media-1.freecodecamp.org/images/0*TZYrBalMX5If2Jj3.jpg 1000w,
https://cdn-media-1.freecodecamp.org/images/0*TZYrBalMX5If2Jj3.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/0*TZYrBalMX5If2Jj3.jpg" alt="Why you should have your own Twitter bot, and how to build one in less than 30 minutes">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<blockquote><strong>UPDATE 20171102:</strong> Since this story was originally posted back in January 2017 there have been a few things that have changed with the repository on GitHub, if you are going to be following along I’d suggest using the repository <code><a href="https://github.com/spences10/twitter-bot-bootstrap/#twitter-bot-bootstrap" rel="noopener">README.md</a></code> in conjunction with this story to save any confusion.</blockquote>
<p>Twitter bots can do a heck of a lot more than just spam trending hashtags and relentlessly follow users.</p>
<p>Take the <a href="https://twitter.com/twisst" rel="noopener">Twisst ISS alerts</a> bot, which sends you a direct message whenever the international space station (ISS) will be visible at your location.</p>
<p>Or public service bots like the <a href="https://twitter.com/earthquakeBot" rel="noopener">Earthquake Robot</a>, which tweets about any earthquake greater than 5.0 on the Richter Scale as it happens.</p>
<p>And of course a robot that tweets poetry, <a href="https://twitter.com/poem_exe" rel="noopener">poem.exe</a>, along with one that will retweet your tweets that also happen to be an <a href="https://twitter.com/accidental575" rel="noopener">Accidental Haiku</a>.</p>
<p>I personally use a bot to enhance my <a href="https://twitter.com/ScottDevTweets" rel="noopener">@ScottDevTweets</a> account by liking and re-tweeting subjects I have an interest in.</p>
<p>The <a href="https://twitter.com/search?q=%23100DaysOfCode&amp;src=savs" rel="noopener">#100DaysOfCode</a> community challenge will congratulate you on starting the #100DaysOfCode challenge, and again when you reach specific milestones.</p>
<figcaption>Bot user congratulate</figcaption>
</figure>
<p>It will also reply with encouragement if it detects negative sentiment (frustration) in a tweet that has the #100DaysOfCode hashtag in it.</p>
<figcaption>Bot sentiment detection</figcaption>
</figure>
<p>One question I’m asked in job interviews quite often is “what do you get out of working with technology?” I always answer that “I like to automate repetitive tasks to save me time so I can concentrate on other stuff. I like the the feeling of accomplishment that comes with having saved myself some time.”</p>
<p>In the case of my @ScottDevTweets bot, it’s usually an opener for a conversation with another person who follows me. So the bot can initiate the conversation, then I can carry on from where the bot left off.</p>
<p>Bearing this in mind, a bot is only as ethical as the person who programmed it.</p>
<p>If you have any doubts about the ethics of the bot you’re building, check out <a href="https://botwiki.org/bot-ethics" rel="noopener">botwiki</a>’s ethics section.</p>
<p>So, ready to get started? OK. Let’s do this!</p>
<h3 id="how-to-build-a-twitter-bot-in-30-minutes">How to build a Twitter Bot in 30 minutes</h3>
<p>You’re going to use the <code>twit</code> library to build a Twitter bot. It will like and re-tweet whatever you specify. It will also reply to your followers with a selection of canned responses.</p>
<p>Before starting the clock you’ll need to set up some accounts set up if you don’t have them already.</p>
<h3 id="what-you-ll-need">What you’ll need</h3>
<ul>
<li><a href="https://twitter.com/signup" rel="noopener">Twitter</a></li>
<li><a href="https://c9.io/signup" rel="noopener">Cloud9 IDE</a></li>
<li><a href="https://signup.heroku.com/" rel="noopener">Heroku</a></li>
</ul>
<h3 id="step-1-set-up-a-twitter-application">Step #1: Set up a Twitter application</h3>
<p>Either create a new Twitter account or use your own to <a href="https://apps.twitter.com/app/new" rel="noopener">create a new Twitter application</a>.</p>
<p>As an example, I’ll configure my old <a href="https://twitter.com/droidscott" rel="noopener">@DroidScott</a> twitter account so you can follow along.</p>
<p>Be sure to add your phone number to your Twitter account before clicking the <strong>Create your Twitter application</strong> button.</p>
<p>You should now be in the ‘Application Management’ section, where you will need to take a note of your keys. You should have your ‘Consumer Key (API Key)’ and ‘Consumer Secret (API Secret)’ already available.</p>
<p>You’ll need to scroll to the bottom of the page and click the <strong>Create my access token</strong> to get the ‘Access Token’ and ‘Access Token Secret’ take note of all four of them you’ll need them when setting up the bot.</p>
<h3 id="step-2-set-up-your-development-environment">Step #2: Set up your development environment</h3>
<p>For this I’m just going to say use <a href="https://c9.io/" rel="noopener">Cloud9</a> as you can be up and running in minutes with one of the pre-made Node.js environments.</p>
<h3 id="set-up-the-bot">Set up the bot</h3>
<p>In the project tree delete the example project files of <code>client</code>, <code>package.json</code>, <code>README.md</code> and <code>server.js</code> you’ll not need them, you can leave them there if you desire.</p>
<p>In your new Node.js c9 environment go to the terminal and enter:</p><pre><code>git clone https://github.com/spences10/twitter-bot-bootstrap</code></pre>
<h4 id="project-structure">Project structure</h4>
<p>The environment project tree should look something like this:</p>
<h3 id="node-dependencies">Node dependencies</h3>
<p>Before configuring the bot we’ll need to install the dependencies, cd into the project folder with <code>cd tw*</code> this will move you to <code>:~/workspace/twitter-bot-bootstrap (master) $</code> from the terminal enter:</p><pre><code>npm install</code></pre>
<p>This will install all the dependencies listed in the <code>package.json</code> file.</p>
<p>If you get any errors then I suggest installing the dependencies one by one from the <code>package.json</code> file with the same command and the package name at the end:</p>
<p>Here is an example of the <code>dependencies</code> in the <code>package,json</code> file:</p><pre><code>"dependencies": {    "dotenv": "^4.0.0",    "twit": "^2.2.5",    "unique-random-array": "^1.0.0",    "unirest": "^0.5.1"  }</code></pre>
<p>The npm command to install them all:</p><pre><code>npm install --save dotenv twit unique-random-array unirest</code></pre>
<p>If you get any <code>WARN</code> messages such as <code>npm WARN package.json twitter-bot@1.0.0 No repository field</code> this will not break the bot so it's safe to ignore.</p>
<p>Now you can configure the bot. From the terminal enter:</p><pre><code>npm init</code></pre>
<p>This will configure the <code>package.json</code> file with your details as desired. Just keep hitting return if you're happy with the defaults.</p>
<p>Now you’ll need to add your Twitter keys to the <code>.env</code> file. Just input the keys in their corresponding fields and save the file.</p>
<p>If you can not find the <code>.env</code> file in the file structure of your c9 project then you will need to enable the <code>Show Hidden Files</code>option. In the file view select the settings cog then tick the <code>Show Hidden Files</code> option if it is not already checked.</p>
<p>The <code>SENTIMENT_KEY</code> you can get a new API key at <a href="https://market.mashape.com/vivekn/sentiment-3" rel="noopener">https://market.mashape.com/vivekn/sentiment-3</a> your key is in the <code>REQUEST EXAMPLE</code></p>
<p>Take a look at the gif, click the link, sign up for or sign into <code>mashape</code>, click on <code>node</code> in the right hand panel and select out your API key, it will be in the space highlighted <code>&lt;requir</code>ed&gt; in the gif.</p>
<p>Add your API key to the <code>.env</code> file along with your Twitter API keys ?</p>
<p>Here you should add your Twitter account name, and how often you want the bot to run the retweet and favorite functions in minutes.</p>
<blockquote><em>NOTE none of the <code>.env</code> items have quotes <code>''</code> round them.</em></blockquote><pre><code>CONSUMER_KEY=Fw***********P9CONSUMER_SECRET=TD************CqACCESS_TOKEN=31**************UCACCESS_TOKEN_SECRET=r0************S2SENTIMENT_KEY=Gj************lFTWITTER_USERNAME=DroidScottTWITTER_RETWEET_RATE=5TWITTER_FAVORITE_RATE=5</code></pre>
<p>You can then add some keywords into the <code>strings.js</code> file for what you want to search for as well as sub-queries.</p>
<figcaption><em>add query and sub-query strings</em> <em>you can also update blocked strings to block more stuff</em></figcaption>
</figure>
<p>When adding sub-query strings make sure you leave a space at the beginning of the string so <code>' handy tip'</code> gets concatenated onto <code>'node.js'</code> as <code>node.js handy tip</code> and not <code>node.jshandy tip</code>.</p>
<p>That should be it, go to the terminal and enter <code>npm start</code> you should get some output:</p>
<p>Check the Twitter account:</p>
<h3 id="step-3-setting-up-heroku">Step #3: Setting up Heroku</h3>
<p>Cool, now we have a bot that we can test on our dev environment but we can’t leave it there, we’ll need to deploy it to Heroku.</p>
<p>If you haven’t done so already set up a <a href="https://signup.heroku.com/" rel="noopener">Heroku account</a> then select <strong>Create a new app</strong> from the dropdown box top right of your dashboard, in the next screen name the app it if you want, then click <strong>Create App</strong>.</p>
<p>You’ll be presented with your app dashboard and instructions for the deployment method.</p>
<p>Your app name should be displayed on the top of your dashboard, you’ll need this when logging in with the Heroku command line interface, which we’ll use to deploy your app.</p>
<h3 id="heroku-cli">Heroku CLI</h3>
<p>We’re going to deploy initially via the Heroku Command Line Interface (<em>CLI</em>).</p>
<p>On your c9 environment terminal, log into Heroku [it should be installed by default]</p><pre><code>heroku login</code></pre>
<p>Enter your credentials:</p><pre><code>cd twitter-bot-bootstrap git init heroku git:remote -a your-heroku-app-name</code></pre>
<p>Deploy your application:</p><pre><code>git add . git commit -am 'make it better' git push heroku master</code></pre>
<p>You should get build output in the terminal:</p>
<p>Then check the output with:</p><pre><code>heroku logs -t</code></pre>
<p>All good? Cool! ?</p>
<h4 id="configuring-heroku-variables">Configuring Heroku variables</h4>
<p>Now that we have our bot on Heroku we need to add environment variables to store our Twitter keys. This is because the <code>.env</code> file where we stored our keys is listed in the <code>.gitignore</code> file, which tells git not to upload that file to Heroku. It also makes it so if in the future we want to add our code to GitHub we don't have to worry about the <code>.env</code> file making our keys public, because the file will automatically be ignored.</p>
<p>All you need to do is go to the console of your Heroku app and select the ‘Settings’ sections and add in your Twitter keys from the <code>.env</code> file. Click the 'Reveal Config Vars' button and add in the variables with their corresponding values:</p><pre><code>CONSUMER_KEYCONSUMER_SECRETACCESS_TOKENACCESS_TOKEN_SECRETSENTIMENT_KEY</code></pre>
<p>Once you have the Heroku vars set up, take a look at the <code>config.js</code> file of this project. You are going to delete this line:</p><pre><code>require('dotenv').config();</code></pre>
<p>You’re now ready to deploy to Heroku again. Your console commands should look something like this:</p><pre><code>$ git add .$ git commit -m 'add environment variables'$ git push heroku master</code></pre>
<p>Then you can check the Heroku logs again with:</p><pre><code>$ heroku logs -t</code></pre>
<p>You should now have a bot you can leave to do its thing forever more, or until you decide you want to change the search criteria ?</p>
<h4 id="heroku-deployment-via-github">Heroku deployment via GitHub</h4>
<p>You can also deploy your app by connecting to GitHub and deploy automatically to Heroku each time your master branch is updated on GitHub, this is straight forward enough.</p>
<p>Go to the ‘Deploy’ dashboard on Heroku, select GitHub as the deployment method if you have connected your GitHub account to your Heroku account then you can search for the repository so if you forked this repo then you can just enter <code>twitter-bot-bootstrap</code> and <strong>Search</strong> you can then click the <strong>Connect</strong> button, you can then auto deploy from GitHub.</p>
<h3 id="heroku-troubleshooting">Heroku troubleshooting</h3>
<p>What do you mean it crashed!?</p>
<p>Ok, I found that sometimes the <code>worker</code> is set as <code>web</code> and it crashes out, try setting the <code>worker</code> again with:</p><pre><code>heroku ps:scale worker=0 heroku ps:scale worker=1</code></pre>
<p>If that still crashes out then try setting the <code>Resources</code> on the Heroku dashboard, I found if you toggle between the <code>web</code>, <code>heroku</code> and <code>worker</code> it usually settles down. Basically you need to be set to the <code>worker</code> Dyno this is what causes the <code>Error R10 (Boot timeout)</code> crashes because it's trying to use one of the other resources when it should be using the <code>worker</code> Dyno.</p>
<p>Other useful Heroku commands I use:</p><pre><code>heroku restart</code></pre>
<p>By default you can only push your master branch if you are working on a development branch i.e. <code>dev</code> branch. If you want to test on Heroku, then you can use:</p><pre><code>git push heroku dev:master</code></pre>
<h3 id="handy-tip">Handy tip</h3>
<p>If you want to add this to your own GitHub repo and don’t want to share your API keys ? with the world then you should turn off tracking on the .<code>env </code>file. From the terminal enter this git command:</p><pre><code>$ git update-index --assume-unchanged .env</code></pre>
<p>I have added my most used git command I use in this <a href="https://gist.github.com/spences10/5c492e197e95158809a83650ff97fc3a" rel="noopener">gist</a></p>
<h3 id="wrapping-up">Wrapping up</h3>
<p>Your Twitter bot should now be live. You can tinker with it and further configure it.</p>
<p>Here’s my <a href="https://github.com/spences10/twitter-bot-bootstrap" rel="noopener">repository</a> if you’d like to fork it and contribute back using pull requests. Any contributions large or small — major features, bug-fixes, integration tests — are welcome, but will be thoroughly reviewed and discussed.</p>
<h3 id="acknowledgements">Acknowledgements</h3>
<p>Credit for the inspiration for this should go to <a href="https://twitter.com/amanhimself" rel="noopener">@amanhimself</a> and his posts on creating your own twitter bot.</p>
<p><a href="https://hackernoon.com/create-a-simple-twitter-bot-with-node-js-5b14eb006c08#.flysreo60" rel="noopener">create-a-simple-twitter-bot-with-node-js</a></p>
<p><a href="https://chatbotslife.com/how-to-make-a-twitter-bot-with-nodejs-d5cb04fdbf97#.h5ah8dq5n" rel="noopener">how-to-make-a-twitter-bot-with-nodejs</a></p>
<p><a href="https://medium.com/@spences10/twitter-mctwitbot-4d15cd005dc0#.dp9q5f427" rel="noopener">twitter-mctwitbot</a></p>
<p><a href="https://github.com/amandeepmittal/awesome-twitter-bots" rel="noopener">awesome-twitter-bots</a></p>
<p>Other posts detailing useful Twitter bots.</p>
<p><a href="http://www.brit.co/twitter-bots-to-follow/" rel="noopener">www.brit.co/twitter-bots-to-follow</a></p>
<p><a href="http://www.hongkiat.com/blog/using-twitter-bots/" rel="noopener">www.hongkiat.com/using-twitter-bots</a></p>
<p>Made it this far? Wow, thanks for reading! If you liked this story, please don’t forget to recommend it by clicking the ❤ button on the side, and by sharing it with your friends through social media.</p>
<p>If you want to learn more about me, visit my <a href="http://spences10.github.io" rel="noopener">blog</a>, my <a href="https://github.com/spences10" rel="noopener">Github</a>, or tweet me <a href="https://twitter.com/ScottDevTweets" rel="noopener">@ScottDevTweets</a>.</p>
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
