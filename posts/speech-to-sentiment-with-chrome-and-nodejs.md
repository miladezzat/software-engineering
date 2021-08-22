---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c9d4d740569d1a4ca3707.jpg"
tags: [JavaScript]
description: Have you ever wondered - can we make Node.js check to see if
author: "Milad E. Fahmy"
title: "How to Build a Speech to Emotion Converter with the Web Speech API and Node.js"
created: "2021-08-15T19:31:03+02:00"
modified: "2021-08-15T19:31:03+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-nodejs tag-tutorial tag-chrome ">
<header class="post-full-header">
<h1 class="post-full-title">How to Build a Speech to Emotion Converter with the Web Speech API and Node.js</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c9d4d740569d1a4ca3707.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9d4d740569d1a4ca3707.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9d4d740569d1a4ca3707.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9d4d740569d1a4ca3707.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c9d4d740569d1a4ca3707.jpg" alt="How to Build a Speech to Emotion Converter with the Web Speech API and Node.js">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Have you ever wondered - can we make Node.js check to see if what we say is positive or negative?</p>
<p>I got a newsletter which discussed tone detection. The program can check what we write and then tells us if it might be seen as aggressive, confident, or a variety of other feelings.</p>
<p>That got me wondering how could I build a simplified version using the browser and Node.js that would be initiated by speaking.</p>
<p>As a result, I ended up with a small project that detects if what was spoken has positive, neutral, or negative valence.</p>
<p>Here's how I did it.</p>
<h2 id="the-plan">The plan</h2>
<figcaption>Voice detection -&gt; Voice to text -&gt; Text scoring -&gt; Result</figcaption>
</figure>
<p>When you're starting a project, you should sketch out - at least vaguely - your goal and how to reach it. Before starting my search I noted down that I needed:</p>
<ul>
<li>Voice recording</li>
<li>A way to translate the recording to text</li>
<li>A way to give the text a score</li>
<li>A way to show the result to the user that just spoke</li>
</ul>
<p>After researching for a while, I discovered that the voice recording and translation to text parts were already done by the <a href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API">Web Speech API</a> that's available in Google Chrome. It has exactly what we need in the <a href="https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition">SpeechRecognition</a> interface.</p>
<p>As for text scoring, I found <a href="http://www2.imm.dtu.dk/pubdb/views/publication_details.php?id=6010">AFINN</a> which is a list of words that are already scored. It has a limited scope with "only" 2477 words but it's more than enough for our project.</p>
<p>Since we're already using the browser we can show a different emoji with HTML, JavaScript and CSS depending on the result. So that handles our last step.</p>
<p>Now that we know what we're going to use, we can sum it up:</p>
<ul>
<li>The browser listens to the user and returns some text using the Web Speech API</li>
<li>It makes a request to our Node.js server with the text</li>
<li>The server evaluates the text using AFINN's list and returns the score</li>
<li>The browser shows a different emoji depending on the score</li>
</ul>
<p><strong>Note:</strong> If you're familiar with project setup you can mostly skip the "project files and setup" section below.</p>
<h2 id="project-files-and-setup">Project files and setup</h2>
<p>Our project folder and files structure will be as follows:</p><pre><code>src/
|-public // folder with the content that we will feed to the browser
|-style // folder for our css and emojis
|-css // optional folder, we have only one obvious file
|-emojis.css
|-images // folder for the emojis
|-index.html
|-recognition.js
package.json
server.js // our Node.js server</code></pre>
<p>On the front end side of things, our <em>index.html</em> file will include the JS and CSS:</p><pre><code class="language-html">&lt;html&gt;
&lt;head&gt;
&lt;title&gt;
Speech to emotion
&lt;/title&gt;
&lt;link rel="stylesheet" href="style/css/emojis.css"&gt;
&lt;/head&gt;
&lt;body&gt;
nothing for now
&lt;script src="recognition.js"&gt;&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
<p>The<em> recognition.js</em> file will be wrapped in the <em>DOMContentLoaded</em><strong> </strong>event so we make sure that the page has loaded before executing our JS:</p><pre><code class="language-js">document.addEventListener('DOMContentLoaded', speechToEmotion, false);
function speechToEmotion() {
// Web Speech API section code will be added here
}</code></pre>
<p>We leave our <em>emojis.css </em>empty<em> </em>for now<em>.</em></p>
<p>On our folder, we will run <strong>npm run init</strong> which will create <em>package.json</em>.</p>
<p>For now, we will need to install two packages to make our life easier. So just <em>npm install </em>both:</p>
<ul>
<li><a href="https://expressjs.com/">expressjs</a> - to have an HTTP server quickly running</li>
<li><a href="https://www.npmjs.com/package/nodemon">nodemon</a> - so we don't constantly type <strong>node server.js</strong> whenever we make a change in our <em>server.js file</em>.</li>
</ul>
<p><em>package.json</em> will end up looking something like this:</p><pre><code class="language-json">{
"name": "speech-to-emotion",
"version": "1.0.0",
"description": "We speak and it feels us :o",
"main": "index.js",
"scripts": {
"server": "node server.js",
"server-debug": "nodemon --inspect server.js"
},
"author": "daspinola",
"license": "MIT",
"dependencies": {
"express": "^4.17.1"
},
"devDependencies": {
"nodemon": "^2.0.2"
}
}</code></pre>
<p><em>server.js </em>starts like this:</p><pre><code class="language-js">const express = require('express')
const path = require('path')
const port = 3000
const app = express()
app.use(express.static(path.join(__dirname, 'public')))
app.get('/', function(req, res) {
res.sendFile(path.join(__dirname, 'index.html'))
})
app.get('/emotion', function(req, res) {
// Valence of emotion section code will be here for not it returns nothing
res.send({})
})
app.listen(port, function () {
console.log(`Listening on port ${port}!`)
})</code></pre>
<p>And with this, we can run <strong>npm run server-debug</strong> in the command line and open the browser on <em>localhost:3000.</em> Then we'll see our "nothing for now" message that's in the HTML file.</p>
<h2 id="web-speech-api">Web Speech API</h2>
<p>This API comes out of the box in Chrome and contains <a href="https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition">SpeechRecognition</a>. This is what will allow us to turn on the microphone, speak, and get the result back as text.</p>
<p>It works with events that can detect, for example, when audio is first and last captured. </p>
<p>For now, we will need the <em>onresult</em> and <em>onend</em> events so we can check what the microphone captured and when it stops working, respectively.</p>
<p>To make our first sound to text capture we just need a dozen lines or so of code in our <em>recognition.js</em> file.</p>
recognition.lang = 'en-US'
recognition.onresult = function(event) {
const results = event.results;
const transcript = results[0][0].transcript
console.log('text -&gt;', transcript)
}
recognition.onend = function() {
console.log('disconnected')
}
recognition.start()</code></pre>
<figcaption>This will connect the microphone for some seconds to listen for audio. If nothing is found it will disconnect</figcaption>
</figure>
<p>We can find a list of available languages in the Google docs <a href="https://cloud.google.com/speech-to-text/docs/languages">here</a>.</p>
<p>If we want it to stay connected for more than a few seconds (or for when we speak more than once) there is a property called <strong>continuous</strong>. It can be changed the same as the <strong>lang</strong> property by just assigning it <strong>true</strong>. This will make the microphone listen for audio indefinitely.</p>
recognition.lang = 'en-US'
recognition.continuous = true
recognition.onresult = function(event) {
const results = event.results;
const transcript = results[results.length-1][0].transcript
console.log('text -&gt;', transcript)
}
recognition.onend = function() {
console.log('disconnected')
}
recognition.start()</code></pre>
<figcaption>We add the continuous and change the transcript to get only the last result instead of all the results up until now</figcaption>
</figure>
<p>If we refresh our page, at first it should ask whether we want to allow the usage of the microphone. After replying yes we can speak and check on the Chrome DevTools console the result of our speech.</p>
<p>Profanity is shown censored and there doesn't seem to be a way to remove the censorship. What this means is that we can't rely on profanity for scoring even though AFINN is uncensored.</p>
<p><strong>Note:</strong> At the moment of writing, this API can be found only in Chrome and Android with expected support for Edge in the near future. There are probably polyfills or other tools that give better browser compatibility but I didn't test them out. You can check the compatibility in <a href="https://caniuse.com/#feat=speech-recognition">Can I use</a>.</p>
<h2 id="making-the-request">Making the request</h2>
<p>For the request, a simple <em>fetch</em> is enough. We send the transcript as a query parameter which we will call <strong>text</strong>.</p>
<p>Our <em>onresult</em> function should now look like this:</p>
const results = event.results;
const transcript = results[results.length-1][0].transcript
// making a request to our /emotion endpoint that we defined on the project start and setup section
fetch(`/emotion?text=${transcript}`)
.then((response) =&gt; response.json())
.then((result) =&gt; {
console.log('result -&gt;', result) // should be undefined
})
.catch((e) =&gt; {
console.error('Request error -&gt; ', e)
})
}</code></pre>
<figcaption>If we were to use longer texts it would be better to switch /emotion to a POST instead of a GET. For this purpose, though, a GET should be more than enough</figcaption>
</figure>
<h2 id="valence-of-emotion">Valence of emotion</h2>
<p>Valence can be seen as a way to measure if our emotions are positive or negative and if they create low or high arousal.</p>
<p>For this project, we will use two emotions: <strong>happy</strong> on the positive side for any score above zero, and <strong>upset</strong> on the negative side for scores below zero. Scores of zero will be seen as indifferent. Any score of 0 will be treated as "<strong>what?!</strong>"</p>
<p>The AFINN list is scored from -5 to 5 and the file contains words organised like this:</p>
hopeful 2
hopefully 2
hopeless -2
hopelessness -2
hopes 2
hoping 2
horrendous -3
horrible -3
horrific -3</code></pre>
<figcaption>word &lt;space&gt; score</figcaption>
</figure>
<p>As an example, let's say we spoke to the microphone and said "I hope this is not horrendous". That would be <strong>2</strong> points for "hope" and <strong>-3</strong> points for "horrendous" which would make our sentence negative with <strong>-1</strong> points. All the other words that are not on the list we would ignore for scoring.</p>
<p>We could parse the file and convert it into a JSON file that looks similar to this:</p><pre><code class="language-js">{
&lt;word&gt;: &lt;score&gt;,
&lt;word1&gt;: &lt;score1&gt;,
..
}</code></pre>
<p>And then we could check each word in the text and sum up the scores. But this is something that <a href="https://github.com/thisandagain">Andrew Sliwinski</a> has already done with <a href="https://github.com/thisandagain/sentiment">sentiment</a>. So we're going to use that instead of coding everything from scratch.</p>
<p>To install we use <strong>npm install sentiment </strong>and open <em>server.js</em> so we can import the library with:</p><pre><code class="language-js">const Sentiment = require('sentiment');</code></pre>
<p>Followed by changing the route "/emotion" to:</p><pre><code class="language-js">app.get('/emotion', function(req, res) {
const sentiment = new Sentiment()
const text = req.query.text // this returns our request query "text"
const score = sentiment.analyze(text);
res.send(score)
})</code></pre>
<p><em>sentiment.analyze(&lt;our_text_variable&gt;)</em> does the steps described before: it checks each word of our text against AFINN's list and gives us a score at the end.</p>
<p>The variable <strong>score</strong> will have an object similar to this:</p>
score: 7,
comparative: 2.3333333333333335,
calculation: [ { awesome: 4 }, { good: 3 } ],
tokens: [ 'good', 'awesome', 'film' ],
words: [ 'awesome', 'good' ],
positive: [ 'awesome', 'good' ],
negative: []
}</code></pre>
<figcaption>What we want is the score property which in this case would lead to a positive result</figcaption>
</figure>
<p>Now that we have the score returned, we just have to make it show in our browser.</p>
<p><strong>Note:</strong> AFINN is in English. While we can select other languages in the Web Speech API we would have to find a scored list similar to AFINN in our desired language to make the matching work.</p>
<h2 id="making-it-smile">Making it smile</h2>
<p>For our last step, we will update our <em>index.html</em><strong> </strong>to display an area where we can show the emoji. So we change it to the following:</p><pre><code class="language-html">&lt;html&gt;
&lt;head&gt;
&lt;title&gt;
Speech to emotion
&lt;/title&gt;
&lt;link rel="stylesheet" href="style/css/emojis.css"&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;!-- We replace the "nothing for now" --&gt;
&lt;div class="emoji"&gt;
&lt;img class="idle"&gt;
&lt;/div&gt;
&lt;!-- And leave the rest alone --&gt;
&lt;script src="recognition.js"&gt;&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
<p>The emoji used in this project are free for commercial use and can be found <a href="https://www.iconfinder.com/iconsets/emoji-66">here</a>. Kudos to the artist.</p>
<p>We download the icons we like and add them to the images folder. We will be needing emoji for:</p>
<ul>
<li><strong>error</strong> - When an error occurs</li>
<li><strong>idle</strong> - Whenever the microphone is not active</li>
<li><strong>listening</strong> - When the microphone is connected and waiting for input</li>
<li><strong>negative - </strong>For positive scores</li>
<li><strong>neutral - </strong>For when the score is zero</li>
<li><strong>positive - </strong>For negative scores</li>
<li><strong>searching - </strong>For when our server request is being done</li>
</ul>
<p>And in our <em>emojis.css</em> we simply add:</p>
width: 100px;
width: 100px;
}
.emoji .error {
content:url("../images/error.png");
}
.emoji .idle {
content:url("../images/idle.png");
}
.emoji .listening {
content:url("../images/listening.png");
}
.emoji .negative {
content:url("../images/negative.png");
}
.emoji .neutral {
content:url("../images/neutral.png");
}
.emoji .positive {
content:url("../images/positive.png");
}
.emoji .searching {
content:url("../images/searching.png");
}</code></pre>
<figcaption>The first selector is to give it a consistent size, the rest is our emojis images</figcaption>
</figure>
<p>When we reload the page after these changes it'll show the idle emoji. It never changes, though, since we haven't replaced our <strong>idle</strong> class in the &lt;img&gt; element depending on the scenario.</p>
<p>To fix that we go one last time to our <em>recognition.js<strong> </strong></em>file. There, we're going to add a function to change the emoji:</p><pre><code class="language-js">/**
* @param {string} type - could be any of the following:
*   error|idle|listening|negative|positive|searching
*/
function setEmoji(type) {
const emojiElem = document.querySelector('.emoji img')
emojiElem.classList = type
}</code></pre>
<p>On the response of our server request, we add the check for positive, negative or neutral score and call our <em>setEmoji </em>function<em> </em>accordingly:</p>
setEmoji('searching')
fetch(`/emotion?text=${transcript}`)
.then((response) =&gt; response.json())
.then((result) =&gt; {
if (result.score &gt; 0) {
setEmoji('positive')
} else if (result.score &lt; 0) {
setEmoji('negative')
} else {
setEmoji('listening')
}
})
.catch((e) =&gt; {
console.error('Request error -&gt; ', e)
recognition.abort()
})</code></pre>
<figcaption>We set the emoji to searching before making the request</figcaption>
</figure>
<p>Finally, we add the events <em>onerror</em> and <em>onaudiostart</em> and change the event <em>onend</em> so we have them set with the proper emoji.</p><pre><code class="language-js">  recognition.onerror = function(event) {
console.error('Recognition error -&gt; ', event.error)
setEmoji('error')
}
recognition.onaudiostart = function() {
setEmoji('listening')
}
recognition.onend = function() {
setEmoji('idle')
}</code></pre>
<p>Our final <em>recognition.js</em> file should look something like this:</p><pre><code class="language-js">document.addEventListener('DOMContentLoaded', speechToEmotion, false);
function speechToEmotion() {
const recognition = new webkitSpeechRecognition()
recognition.lang = 'en-US'
recognition.continuous = true
recognition.onresult = function(event) {
const results = event.results;
const transcript = results[results.length-1][0].transcript
console.log(transcript)
setEmoji('searching')
fetch(`/emotion?text=${transcript}`)
.then((response) =&gt; response.json())
.then((result) =&gt; {
if (result.score &gt; 0) {
setEmoji('positive')
} else if (result.score &lt; 0) {
setEmoji('negative')
} else {
setEmoji('listening')
}
})
.catch((e) =&gt; {
console.error('Request error -&gt; ', e)
recognition.abort()
})
}
recognition.onerror = function(event) {
console.error('Recognition error -&gt; ', event.error)
setEmoji('error')
}
recognition.onaudiostart = function() {
setEmoji('listening')
}
recognition.onend = function() {
setEmoji('idle')
}
recognition.start();
/**
* @param {string} type - could be any of the following:
*   error|idle|listening|negative|positive|searching
*/
function setEmoji(type) {
const emojiElem = document.querySelector('.emoji img')
emojiElem.classList = type
}
}</code></pre>
<p>And by testing our project we can now see the final results:</p>
<p><strong>Note:</strong> Instead of a <em>console.log</em> to check what the recognition understood, we can add an element on our html and replace the <em>console.log.</em> That way we always have access to what it understood.</p>
<h2 id="final-remarks">Final remarks</h2>
<p>There are some areas where this project can be vastly improved: </p>
<ul>
<li>it can't detect sarcasm </li>
<li>there is no way to check if you're enraged due to the censorship of the speech to text API </li>
<li>there's probably a way to do it with just voice without conversion to text.</li>
</ul>
<p>From what I saw while researching this project, there are implementations that check if your tone and mood will lead to a sale in a call centre. And the newsletter I got was from Grammarly, which is using it to check the tone of what you write. So as you can see there are interesting applications.</p>
<p>Hopefully, this content has helped out in some way. If anybody builds anything using this stack let me know – it's always fun to see what people build.</p>
<p>The code can be found in my github <strong><a href="https://github.com/daspinola/speech-to-emotion">here</a></strong>.</p>
<p>See you in the next one, in the meantime, go code something!</p>
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
