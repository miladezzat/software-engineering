---
card: "/images/default.jpg"
tags: [JavaScript]
description: Chess games can sometimes go on for quite some time. I once h
author: "Milad E. Fahmy"
title: "How to Build a Chess Clock with JavaScript and setInterval"
created: "2021-08-15T19:26:38+02:00"
modified: "2021-08-15T19:26:38+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-mobile-app-development ">
<header class="post-full-header">
<h1 class="post-full-title">How to Build a Chess Clock with JavaScript and setInterval</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2021/04/cover_image_1920x1005-1.png 300w,
/news/content/images/size/w600/2021/04/cover_image_1920x1005-1.png 600w,
/news/content/images/size/w1000/2021/04/cover_image_1920x1005-1.png 1000w,
/news/content/images/size/w2000/2021/04/cover_image_1920x1005-1.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2021/04/cover_image_1920x1005-1.png" alt="How to Build a Chess Clock with JavaScript and setInterval">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Chess games can sometimes go on for quite some time. I once heard a story of a chess game between two famous chess grandmasters that went on for over eight hours, with the crowd waiting for them to make a move. </p>
<p>After a while one player said to the other "Aren't you going to move?" His opponent responded, "I thought it was your turn."</p>
<h2 id="introduction">Introduction</h2>
<p>Chess clocks are used to limit a chess game to a certain amount of time. A chess clock can add a great deal of excitement to a chess game. Many people use these clocks in tournaments and just for fun. </p>
<p>With a chess clock, the goal is to checkmate your opponent before your timer runs out. The first person that runs out of time without checkmating their opponent loses the game.</p>
<p>I will show you how to create a basic chess clock using JavaScript and the <a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Timeouts_and_intervals">setInterval</a> method. <code>setInterval</code> allows you to execute a timed event repeatedly by specifying a time in milliseconds. <code>setInterval</code> can be set to an ID and stopped by calling <code>clearInterval</code> on the <code>setInterval</code> ID.</p>
<p>Here is a simple example of how setInterval works:</p>
// Assign a timed event to variable timerId.
const timerId = setInterval(() =&gt; {
console.log(`Executing function for ${count} seconds.`);
// Increment the count variable by one.
count++;
if (count === 11) {
// Stop event by calling clearInterval on timerId.
clearInterval(timerId);
console.log(`Timing event cleared.`);
}
}, 1000); // Execute event every second (1000 milliseconds = 1 second).
</code></pre>
<figcaption>SetInterval example</figcaption>
</figure>
<figcaption>output</figcaption>
</figure>
<p>Here is the blueprint for how the application will look on desktop and mobile.</p>
<p><strong>The programming requirements for this project are:</strong></p>
<ul>
<li>We need two clocks that countdown to zero.</li>
<li>We need a start button and a reset button.</li>
<li>And we need a way to toggle between the clocks as the time is counting down.</li>
</ul>
<h2 id="let-s-set-up-the-project">Let's set up the project</h2>
<p>Create the directories <code>css</code>, <code>js</code> , and <code>audio</code> to keep the project organized.</p><pre><code class="language-bash">$ mkdir css js audio
</code></pre>
<p>Create the files <code>index.html</code>, <code>style.css</code>, and <code>script.js</code>.</p><pre><code class="language-bash">$ touch index.html css/style.css js/script.js
</code></pre>
<p>Add this code to the <code>index.html</code> file.</p><pre><code class="language-html">&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
&lt;meta charset="utf-8"&gt;
&lt;meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0"&gt;
&lt;link rel="stylesheet" href="css/style.css"&gt;
&lt;title&gt;chess clock&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;main&gt;
&lt;div class="player"&gt;
&lt;div class="player__tile player-1"&gt;
&lt;div class="player__digits"&gt;
&lt;span id="min1"&gt;10&lt;/span&gt;:&lt;span id="sec1"&gt;00&lt;/span&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;div class="player__tile player-2"&gt;
&lt;div class="player__digits"&gt;
&lt;span id="min2"&gt;10&lt;/span&gt;:&lt;span id="sec2"&gt;00&lt;/span&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;div class="timer__buttons"&gt;
&lt;button class="timer__start-bttn bttn" type="button"&gt;START&lt;/button&gt;
&lt;button class="timer__reset-bttn bttn" type="button"&gt;RESET&lt;/button&gt;
&lt;/div&gt;
&lt;/main&gt;
&lt;footer&gt;
&lt;p&gt;Press spacebar or click on timer after a move to switch player's clock.&lt;/p&gt;
&lt;/footer&gt;
&lt;script src="js/script.js"&gt;&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre>
<p>This is what we have without any CSS.</p>
<h2 id="add-some-css-to-style-the-project">Add some CSS to style the project</h2>
<p>Add this CSS code to the <code>style.css</code> file to style the project mobile first. </p><pre><code class="language-css">* {
margin: 0;
padding: 0;
box-sizing: border-box;
}
html,
body {
width: 100%;
height: 100%;
background-color: #14A7FF;
}
body {
font-size: 100%;
font-family: monospace, monospace;
}
main {
width: 100%;
padding: 0 10px;
box-sizing: border-box;
}
.player {
margin: 1em 0 5px 0;
display: flex;
flex-direction: column;
}
.player__tile {
width: 100%;
height: 300px;
display: flex;
margin: 0 auto;
color: #000000;
max-width: 400px;
border-radius: 8px;
align-items: center;
justify-content: center;
background-color: #FFFFFF;
box-shadow: inset 3px 3px 0 #000,
inset -3px 3px 0 black,
inset -3px -3px 0 black,
inset 3px -3px 0 black;
}
.player-2 {
color: #FFFFFF;
margin-top: 5px;
background-color: #2D2C2C;
}
.player__digits {
font-size: 6rem;
font-weight: bold;
}
.timer__buttons {
margin-bottom: 1em;
}
.timer__start-bttn,
.timer__reset-bttn {
width: 100%;
display: block;
color: #020202;
min-height: 50px;
max-width: 400px;
font-size: 1.5rem;
font-weight: bold;
border-radius: 8px;
letter-spacing: 2px;
margin: 0 auto 5px auto;
border: 4px solid #000000;
}
.timer__start-bttn {
color: #FFFFFF;
background-color: #0071D5;
}
.timer__start-bttn:hover {
color: #000000;
background-color: #FFFFFF;
}
.timer__reset-bttn:hover {
color: #FFFFFF;
background-color: #0071D5;
}
footer p {
text-align: center;
}
/* Media queries for mobile first develoment. */
/* Media queries for landscape mode on mobile devices */
@media only screen and (orientation: landscape) and (max-width: 850px) {
.player {
max-width: 610px;
flex-direction: row;
margin: 5px auto 0 auto;
}
.player__tile {
max-width: 300px;
max-height: 250px;
margin: 0 3px 5px 3px;
}
.player__digits {
font-size: 5rem;
}
.timer__buttons {
display: flex;
margin: 0 auto;
max-width: 610px;
}
.timer__start-bttn,
.timer__reset-bttn {
display: block;
max-width: 300px;
margin: 0 3px 5px 3px;
}
}
/* Media queries for portrait mode */
@media only screen and (orientation: portrait) and (min-width: 400px) {
.player__tile {
height: 400px;
}
.player__digits {
font-size: 6rem;
}
}
/* Screen wider than 850px wide will use these settings. */
@media only screen and (min-width: 850px) {
.player {
margin: 1em auto 10px auto;
max-width: 810px;
flex-direction: row;
}
.player__tile {
height: 400px;
}
.player-2 {
margin-top: 0;
}
.player__digits {
font-size: 7rem;
}
.timer__buttons {
display: flex;
margin: 0 auto;
max-width: 810px;
}
.timer__start-bttn,
.timer__reset-bttn {
padding: .7em;
font-size: 1.8rem;
}
}
</code></pre>
<p>With CSS added, the project is looking better.</p>
<h2 id="add-javascript-code-to-make-the-clock-run">Add JavaScript code to make the clock run</h2>
<p>I will first add the functions that we need to make the project work. </p>
<p>Edit the <code>script.js</code> file:</p><pre><code class="language-bash">$ vim js/script.js
</code></pre>
<p>And add the following ES6 arrow functions:</p><pre><code class="language-javascript">
// Add a leading zero to numbers less than 10.
const padZero = () =&gt; {
// code
}
// Warn the player if time drops below thirty seconds.
const timeWarning = () =&gt; {
// code
}
// Create a class for the timer.
class Timer {
// code
}
// Swap player's timer after a move (player1 = 1, player2 = 2).
const swapPlayer = () =&gt; {
// code
}
// Start timer countdown to zero.
const startTimer = () =&gt; {
// code
let timerId = setInterval(function() {
// code
}, 1000)
}</code></pre>
<p>Now we can fill in the JavaScript functions with code to make the clock work.</p>
<p>We start by adding some variables to the project. If the variable <code>playing</code> is<br>true, the clock runs. </p>
<p>The <code>currentPlayer</code> stores the value 1 for player one or 2 for player two. We can add sounds <a href="https://freesound.org/">(from freesound.org)</a> for when the clock is toggled from one player to the other and to alarm when the time has run out. </p>
<p>The <code>padZero</code> function will add a leading zero to numbers that are lower than 10.</p>
<p>Edit the <code>script.js</code> file like this:</p><pre><code class="language-bash">$ vim js/script.js</code></pre><pre><code class="language-javascript">let playing = false;
let currentPlayer = 1;
const panel = document.querySelector('.player');
const buttons = document.querySelectorAll('.bttn');
// Sound effects for project.
const timesUp = new Audio('audio/460133__eschwabe3__robot-affirmative.wav');
const click = new Audio('audio/561660__mattruthsound.wav');
// Add a leading zero to numbers less than 10.
const padZero = (number) =&gt; {
if (number &lt; 10) {
return '0' + number;
}
return number;
}
</code></pre>
<p>Give each player a visual notification that the time is running out by changing the numbers to a red color.</p><pre><code class="language-javascript">// Warn player if time drops below one minute and thirty seconds.
const timeWarning = (player, min, sec) =&gt; {
// Change the numbers to red below 0 minutes and 30 seconds
if (min &lt; 1 &amp;&amp; sec &lt;= 30) {
if (player === 1) {
document.querySelector('.player-1 .player__digits').style.color = '#CC0000';
} else {
document.querySelector('.player-2 .player__digits').style.color = '#CC0000';
}
}
}</code></pre>
<p>We will create a class to set up the timer for each player.</p><pre><code class="language-javascript">// Create a class for the timer.
class Timer {
constructor(player, minutes) {
this.player = player;
this.minutes = minutes;
}
getMinutes(timeId) {
return document.getElementById(timeId).textContent;
}
}
// Create an instance of the timer for each player.
let p1time = new Timer('min1', document.getElementById('min1').textContent);
let p2time = new Timer('min2', document.getElementById('min2').textContent);
</code></pre>
<p>The <code>swapPlayer</code> function toggles the timer between player 1 and player 2 using a ternary operator.</p>
<p>If the <code>playing</code> variable is false, the clocks are not running and the function exits.</p><pre><code class="language-javascript">// Swap player's timer after a move (player1 = 1, player2 = 2).
const swapPlayer = () =&gt; {
if (!playing) return;
// Toggle the current player.
currentPlayer = currentPlayer === 1 ? 2 : 1;
// Play the click sound.
click.play();
}
</code></pre>
<p>The startTimer function uses <code>setInterval</code> to countdown each timer.</p>
<p>The <code>playing</code> variable is set to true to get the clock running. </p>
<p>The if statement checks to see which player is the current player, and then it starts counting down the timer for that player. </p>
<p>If the seconds reach 60, one number is subtracted from the minutes. The HTML element is updated with the time each second. Once the seconds and minutes get to zero, <code>clearInterval()</code> is called to stop the timer.</p><pre><code class="language-javascript">// Start timer countdown to zero.
const startTimer = () =&gt; {
playing = true;
let p1sec = 60;
let p2sec = 60;
let timerId = setInterval(function() {
// Player 1.
if (currentPlayer === 1) {
if (playing) {
buttons[0].disabled = true;
p1time.minutes = parseInt(p1time.getMinutes('min1'), 10);
if (p1sec === 60) {
p1time.minutes = p1time.minutes - 1;
}
p1sec = p1sec - 1;
document.getElementById('sec1').textContent = padZero(p1sec);
document.getElementById('min1').textContent = padZero(p1time.minutes);
if (p1sec === 0) {
// If minutes and seconds are zero stop timer with the clearInterval method.
if (p1sec === 0 &amp;&amp; p1time.minutes === 0) {
// Play a sound effect.
timesUp.play();
// Stop timer.
clearInterval(timerId);
playing = false;
}
p1sec = 60;
}
}
} else {
// Player 2.
if (playing) {
p2time.minutes = parseInt(p2time.getMinutes('min2'), 10);
if (p2sec === 60) {
p2time.minutes = p2time.minutes - 1;
}
p2sec = p2sec - 1;
document.getElementById('sec2').textContent = padZero(p2sec);
document.getElementById('min2').textContent = padZero(p2time.minutes);
if (p2sec === 0) {
// If minutes and seconds are zero stop timer with the clearInterval method.
if (p2sec === 0 &amp;&amp; p2time.minutes === 0) {
// Play a sound effect.
timesUp.play();
// Stop timer.
clearInterval(timerId);
playing = false;
}
p2sec = 60;
}
}
}
}, 1000);
}
</code></pre>
<p>To get the timer running I will add an event listener to the HTML buttons. The event listener will also listen for a click or tap on the <code>.player</code> div or if someone is pressing the space bar to toggle between timers.</p><pre><code class="language-javascript">// Listen for a mouse click or tap on the screen to toggle between timers.
timerPanel.addEventListener('click', swapPlayer);
// Loop through the start and reset buttons.
for (let i = 0; i &lt; buttons.length; i++) {
buttons[i].addEventListener('click', () =&gt; {
if (buttons[i].textContent === 'START') {
// Turn the button a gray color to signify a disabled button.
buttons[i].style.color = '#EEEEEE';
buttons[i].style.backgroundColor = '#606060';
startTimer();
} else {
// Reset everything by reloading the page.
location.reload(true);
}
});
}
// Listen for the press of the spacebar on Windows, Linux, and Mac.
document.addEventListener('keypress', event =&gt; {
if (event.keyCode === 32 || event.which === 32) {
swapPlayer();
}
});</code></pre>
<h3 id="here-is-the-final-result-">Here is the final result:</h3>
<p>You can see it <a href="https://chessclock.cf">live here</a>, and you can check out the <a href="https://github.com/brandon-wallace/chess_clock2">GitHub repository here</a>.</p>
<h2 id="conclusion">Conclusion</h2>
<p>This is one way of creating a basic chess clock. If you are a chess aficionado this might be a fun project to build and something you can use. </p>
<p>This project shows a good way to use the setInterval method, how to use event listeners, and mobile-first development. You could add other features to the project such as a way to set the time, pausing the timer, different timer modes, and more.</p>
<p>Follow me on <a href="https://github.com/brandon-wallace">Github</a> | <a href="https://dev.to/brandonwallace">Dev.to</a></p>
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
