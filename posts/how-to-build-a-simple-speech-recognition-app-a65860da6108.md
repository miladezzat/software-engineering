---
card: "https://cdn-media-1.freecodecamp.org/images/1*e5flIoQf_jfcYYoSD0MkyA.jpeg"
tags: [Web Development]
description: "Technology has come a long way, and with each new advancement"
author: "Milad E. Fahmy"
title: "How to build a simple speech recognition app"
created: "2021-08-16T11:45:30+02:00"
modified: "2021-08-16T11:45:30+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-web-development tag-programming tag-tech tag-javascript tag-technology ">
<header class="post-full-header">
<h1 class="post-full-title">How to build a simple speech recognition app</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*e5flIoQf_jfcYYoSD0MkyA.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*e5flIoQf_jfcYYoSD0MkyA.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*e5flIoQf_jfcYYoSD0MkyA.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*e5flIoQf_jfcYYoSD0MkyA.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*e5flIoQf_jfcYYoSD0MkyA.jpeg" alt="How to build a simple speech recognition app">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<blockquote>“In this 10-year time frame, I believe that we’ll not only be using the keyboard and the mouse to interact but during that time we will have perfected speech recognition and speech output well enough that those will become a standard part of the interface.” — Bill Gates, 1 October 1997</blockquote><p>Technology has come a long way, and with each new advancement, the human race becomes more attached to it and longs for these new cool features across all devices.</p><p>With the advent of Siri, Alexa, and Google Assistant, users of technology have yearned for speech recognition in their everyday use of the internet. In this post, I’ll be covering how to integrate native speech recognition and speech synthesis in the browser using the JavaScript <a href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API" rel="noopener">WebSpeech API</a>.</p><p>According to the Mozilla web docs:</p><blockquote>The Web Speech API enables you to incorporate voice data into web apps. The Web Speech API has two parts: SpeechSynthesis (Text-to-Speech), and SpeechRecognition (Asynchronous Speech Recognition.)</blockquote><h3 id="requirements-we-will-need-to-build-our-application">Requirements we will need to build our application</h3><p>For this simple speech recognition app, we’ll be working with just three files which will all reside in the same directory:</p><ul><li><code>index.html</code> containing the HTML for the app.</li><li><code>style.css</code> containing the CSS styles.</li><li><code>index.js</code> containing the JavaScript code.</li></ul><p>Also, we need to have a few things in place. They are as follows:</p><ul><li>Basic knowledge of JavaScript.</li><li>A web server for running the app. The <a href="https://chrome.google.com/webstore/detail/web-server-for-chrome/ofhbbkphhbklhfoeikjpcbhemlocgigb?hl=en" rel="noopener">Web Server for Chrome</a><strong> </strong>will be sufficient for this purpose.</li></ul><h3 id="setting-up-our-speech-recognition-app">Setting up our speech recognition app</h3><p>Let’s get started by setting up the HTML and CSS for the app. Below is the HTML markup:</p><pre><code class="language-html">&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
&lt;meta charset="UTF-8"&gt;
&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
&lt;meta http-equiv="X-UA-Compatible" content="ie=edge"&gt;
&lt;title&gt;Speech Recognition&lt;/title&gt;
&lt;link rel="stylesheet" href="style.css"&gt;
&lt;link href="https://fonts.googleapis.com/css?family=Shadows+Into+Light" rel="stylesheet"&gt;
&lt;!-- load font awesome here for icon used on the page --&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;div class="container"&gt; &lt;!--page container --&gt;
&lt;div class="text-box" contenteditable="true"&gt;&lt;/div&gt; &lt;!--text box which will contain spoken text --&gt;
&lt;i class="fa fa-microphone"&gt;&lt;/i&gt; &lt;!-- microphone icon to be clicked before speaking --&gt;
&lt;/div&gt;
&lt;audio class="sound" src="chime.mp3"&gt;&lt;/audio&gt; &lt;!-- sound to be played when we click icon =&gt; http://soundbible.com/1598-Electronic-Chime.html --&gt;
&lt;script src="index.js"&gt;&lt;/script&gt; &lt;!-- link to index.js script --&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre><p>Here is its accompanying CSS style:</p><pre><code class="language-css">body {
background: #1e2440;
color: #f2efe2;
font-size: 16px;
font-family: 'Kaushan Script', cursive;
font-family: 'Shadows Into Light', cursive;
}
.container {
position: relative;
border: 1px solid #f2efe2;
width: 40vw;
max-width: 60vw;
margin: 0 auto;
border-radius: 0.1rem;
background: #f2efe2;
padding: 0.2rem 1rem;
color: #1e2440;
overflow: scroll;
margin-top: 10vh;
}
.text-box {
max-height: 70vh;
overflow: scroll;
}
.text-box:focus {
outline: none;
}
.text-box p {
border-bottom: 1px dotted black;
margin: 0px !important;
}
.fa {
color: white;
background: #1e2440;
border-radius: 50%;
cursor: pointer;
margin-top: 1rem;
float: right;
width: 2rem;
height: 2rem;
display: flex !important;
align-items: center;
justify-content: center;
}
@media (max-width: 768px) {
.container {
width: 85vw;
max-width: 85vw;
}
.text-box {
max-height: 55vh;
}
const icon = document.querySelector('i.fa.fa-microphone')
let paragraph = document.createElement('p');
let container = document.querySelector('.text-box');
container.appendChild(paragraph);
const sound = document.querySelector('.sound');</code></pre><p>In the code above, apart from instantiating speech recognition, we also selected the <code>icon</code>, <code>text-box,</code> and <code>sound</code> elements on the page. We also created a paragraph element which will hold the words we say, and we appended it to the <code>text-box</code>.</p><p>Whenever the microphone icon on the page is clicked, we want to play our sound and start the speech recognition service. To achieve this, we add a click event listener to the icon:</p><pre><code class="language-js">icon.addEventListener('click', () =&gt; {
sound.play();
dictate();
});
const dictate = () =&gt; {
recognition.start();
}</code></pre><p>In the event listener, after playing the sound, we went ahead and created and called a <code>dictate</code> function. The <code>dictate</code> function starts the speech recognition service by calling the <code>start</code> method on the speech recognition instance.</p><p>To return a result for whatever a user says, we need to add a <code>result</code> event to our speech recognition instance. The <code>dictate</code> function will then look like this:</p><pre><code class="language-js">const dictate = () =&gt; {
recognition.start();
recognition.onresult = (event) =&gt; {
const speechToText = event.results[0][0].transcript;
paragraph.textContent = speechToText;
}
utterThis = new SpeechSynthesisUtterance(action());
synth.speak(utterThis);
};</code></pre><p>The <code>speak</code> function takes in a function called the <code>action</code> as a parameter. The function returns a string which is passed to <code>SpeechSynthesisUtterance</code>. <code>SpeechSynthesisUtterance</code> is the WebSpeech API interface that holds the content the speech recognition service should read. The speechSynthesis <code>speak</code> method is then called on its instance and passed the content to read.</p><p>To test this out, we need to know when the user is done speaking and says a <code>keyword.</code> Luckily there is a method to check that:</p><pre><code class="language-js">const dictate = () =&gt; {
...
if (event.results[0].isFinal) {
if (speechToText.includes('what is the time')) {
speak(getTime);
};
if (speechToText.includes('what is today\'s date
')) {
speak(getDate);
};
if (speechToText.includes('what is the weather in')) {
getTheWeather(speechToText);
};
}
...
}
const getTime = () =&gt; {
const time = new Date(Date.now());
return `the time is ${time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}`
};
const getDate = () =&gt; {
const time = new Date(Date.now())
return `today is ${time.toLocaleDateString()}`;
};
const getTheWeather = (speech) =&gt; {
fetch(`http://api.openweathermap.org/data/2.5/weather?q=${speech.split(' ')[5]}&amp;appid=58b6f7c78582bffab3936dac99c31b25&amp;units=metric`)
.then(function(response){
return response.json();
})
.then(function(weather){
if (weather.cod === '404') {
utterThis = new SpeechSynthesisUtterance(`I cannot find the weather for ${speech.split(' ')[5]}`);
synth.speak(utterThis);
return;
}
utterThis = new SpeechSynthesisUtterance(`the weather condition in ${weather.name} is mostly full of ${weather.weather[0].description} at a temperature of ${weather.main.temp} degrees Celcius`);
synth.speak(utterThis);
});
};</code></pre><p>In the code above, we called the <code>isFinal</code> method on our event result which returns <code>true</code> or <code>false</code> depending on if the user is done speaking.</p><p>If the user is done speaking, we check if the transcript of what was said contains keywords such as <code>what is the time</code> , and so on. If it does, we call our <code>speak</code> function and pass it one of the three functions <code>getTime</code>, <code>getDate</code> or <code>getTheWeather</code> which all return a string for the browser to read.</p><p>Our <code>index.js</code> file should now look like this:</p><pre><code class="language-js">window.SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
const synth = window.speechSynthesis;
const recognition = new SpeechRecognition();
const icon = document.querySelector('i.fa.fa-microphone')
let paragraph = document.createElement('p');
let container = document.querySelector('.text-box');
container.appendChild(paragraph);
const sound = document.querySelector('.sound');
icon.addEventListener('click', () =&gt; {
sound.play();
dictate();
});
const dictate = () =&gt; {
recognition.start();
recognition.onresult = (event) =&gt; {
const speechToText = event.results[0][0].transcript;
paragraph.textContent = speechToText;
if (event.results[0].isFinal) {
if (speechToText.includes('what is the time')) {
speak(getTime);
};
if (speechToText.includes('what is today\'s date')) {
speak(getDate);
};
if (speechToText.includes('what is the weather in')) {
getTheWeather(speechToText);
};
}
}
}
const speak = (action) =&gt; {
utterThis = new SpeechSynthesisUtterance(action());
synth.speak(utterThis);
};
const getTime = () =&gt; {
const time = new Date(Date.now());
return `the time is ${time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}`
};
const getDate = () =&gt; {
const time = new Date(Date.now())
return `today is ${time.toLocaleDateString()}`;
};
const getTheWeather = (speech) =&gt; {
fetch(`http://api.openweathermap.org/data/2.5/weather?q=${speech.split(' ')[5]}&amp;appid=58b6f7c78582bffab3936dac99c31b25&amp;units=metric`)
.then(function(response){
return response.json();
})
.then(function(weather){
if (weather.cod === '404') {
utterThis = new SpeechSynthesisUtterance(`I cannot find the weather for ${speech.split(' ')[5]}`);
synth.speak(utterThis);
return;
}
utterThis = new SpeechSynthesisUtterance(`the weather condition in ${weather.name} is mostly full of ${weather.weather[0].description} at a temperature of ${weather.main.temp} degrees Celcius`);
synth.speak(utterThis);
});
};</code></pre><p>Let’s click the icon and try one of the following phrases:</p><ul><li>What is the time?</li><li>What is today’s date?</li><li>What is the weather in Lagos?</li></ul><p>We should get a reply from the app.</p><h3 id="conclusion">Conclusion</h3><p>In this article, we’ve been able to build a simple speech recognition app. There are a few more cool things we could do, like select a different voice to read to the users, but I’ll leave that for you to do.</p><p>If you have questions or feedback, please leave them as a comment below. I can’t wait to see what you build with this. You can hit me up on Twitter <a href="https://twitter.com/developia_" rel="noopener">@developia_</a>.</p>
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
