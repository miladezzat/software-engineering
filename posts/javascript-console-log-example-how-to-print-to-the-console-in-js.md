---
card: "/images/default.jpg"
tags: [JavaScript]
description: Logging messages to the console is a very basic way to diagno
author: "Milad E. Fahmy"
title: "JavaScript Console.log() Example – How to Print to the Console in JS"
created: "2021-08-15T19:28:33+02:00"
modified: "2021-08-15T19:28:33+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-console tag-debugging ">
<header class="post-full-header">
<h1 class="post-full-title">JavaScript Console.log() Example – How to Print to the Console in JS</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/09/fCC_-Console.log.png 300w,
/news/content/images/size/w600/2020/09/fCC_-Console.log.png 600w,
/news/content/images/size/w1000/2020/09/fCC_-Console.log.png 1000w,
/news/content/images/size/w2000/2020/09/fCC_-Console.log.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/09/fCC_-Console.log.png" alt="JavaScript Console.log() Example – How to Print to the Console in JS">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Logging messages to the console is a very basic way to diagnose and troubleshoot minor issues in your code. </p>
<p>But, did you know that there is more to <code>console</code> than just <code>log</code>? In this article, I'll show you how to print to the console in JS, as well as all of the things you didn't know <code>console</code> could do.</p>
<h2 id="firefox-multi-line-editor-console">Firefox Multi-line Editor Console</h2>
<p>If you've never used the multi-line editor mode in Firefox, you should give it a try right now! </p>
<p>Just open the console, <code>Ctrl+Shift+K</code> or <code>F12</code>, and in the top right you will see a button that says "Switch to multi-line editor mode". Alternatively, you can press <code>Ctrl+B</code>.</p>
<p>This gives you a multi-line code editor right inside Firefox.</p>
<h2 id="console-log">console.log</h2>
<p>Let's start with a very basic log example.</p><pre><code class="language-js">let x = 1
console.log(x)</code></pre>
<p>Type that into the Firefox console and run the code. You can click the "Run" button or press <code>Ctrl+Enter</code>.</p>
<p>In this example, we should see "1" in the console. Pretty straightforward, right?</p>
<h2 id="multiple-values">Multiple Values</h2>
<p>Did you know that you can include multiple values? Add a string to the beginning to easily identify what it is you are logging.</p><pre><code class="language-js">let x = 1
console.log("x:", x)</code></pre>
<p>But what if we have multiple values that we want to log?</p><pre><code class="language-js">let x = 1
let y = 2
let z = 3</code></pre>
<p>Instead of typing <code>console.log()</code> three times we can include them all. And we can add a string before each of them if we wanted, too. </p><pre><code class="language-js">let x = 1
let y = 2
let z = 3
console.log("x:", x, "y:", y, "z:", z)</code></pre>
<p>But that's too much work. Just wrap them with curly braces! Now you get an object with the named values.</p><pre><code class="language-js">let x = 1
let y = 2
let z = 3
console.log( {x, y, z} )</code></pre>
<figcaption>Console Output</figcaption>
</figure>
<p>You can do the same thing with an object.</p><pre><code class="language-js">let user = {
name: 'Jesse',
contact: {
email: 'codestackr@gmail.com'
}
}
console.log(user)
console.log({user})</code></pre>
<p>The first log will print the properties within the user object. The second will identify the object as "user" and print the properties within it. </p>
<p>If you are logging many things to the console, this can help you to identify each log. </p>
<h2 id="variables-within-the-log">Variables within the log</h2>
<p>Did you know that you can use portions of your log as variables?</p><pre><code class="language-js">console.log("%s is %d years old.", "John", 29)</code></pre>
<p>In this example, <code>%s</code> refers to a string option included after the initial value. This would refer to "John".</p>
<p>The <code>%d</code> refers to a digit option included after the initial value. This would refer to 29. </p>
<p>The output of this statement would be: "John is 29 years old.".</p>
<h2 id="variations-of-logs">Variations of logs</h2>
<p>There are a few variations of logs. There is the most widely used <code>console.log()</code>. But there is also:</p><pre><code class="language-js">console.log('Console Log')
console.info('Console Info')
console.debug('Console Debug')
console.warn('Console Warn')
console.error('Console Error')
</code></pre>
<p>These variations add styling to our logs in the console. For instance, the <code>warn</code> will be colored yellow, and the <code>error</code> will be colored red.</p>
<p>Note: The styles vary from browser to browser.</p>
<h2 id="optional-logs">Optional Logs</h2>
<p>We can print messages to the console conditionally with <code>console.assert()</code>.</p><pre><code class="language-js">let isItWorking = false
console.assert(isItWorking, "this is the reason why")</code></pre>
<p>If the first argument is false, then the message will be logged.</p>
<p>If we were to change <code>isItWorking</code> to <code>true</code>, then the message will not be logged.</p>
<h2 id="counting">Counting</h2>
<p>Did you know that you can count with console?</p><pre><code class="language-js">for(i=0; i&lt;10; i++){
console.count()
}</code></pre>
<p>Each iteration of this loop will print a count to the console. You will see "default: 1, default: 2", and so on until it reaches 10.</p>
<p>If you run this same loop again you will see that the count picks up where it left off; 11 - 20.</p>
<p>To reset the counter we can use <code>console.countReset()</code>.</p>
<p>And, if you want to name the counter to something other than "default", you can!</p><pre><code class="language-js">for(i=0; i&lt;10; i++){
console.count('Counter 1')
}
console.countReset('Counter 1')</code></pre>
<p>Now that we have added a label, you will see "Counter 1, Counter 2", and so on.</p>
<p>And to reset this counter, we have to pass the name into <code>countReset</code>. This way you can have several counters running at the same time and only reset specific ones.</p>
<h2 id="track-time">Track Time</h2>
<p>Besides counting, you can also time something like a stopwatch.</p>
<p>To start a timer we can use <code>console.time()</code>. This will not do anything by itself. So, in this example, we will use <code>setTimeout()</code> to emulate code running. Then, within the timeout, we will stop our timer using <code>console.timeEnd()</code>.</p><pre><code class="language-js">console.time()
setTimeout(() =&gt; {
console.timeEnd()
}, 5000)</code></pre>
<p>As you would expect, after 5 seconds, we will have a timer end log of 5 seconds.</p>
<p>We can also log the current time of our timer while it's running, without stopping it. We do this by using <code>console.timeLog()</code>.</p><pre><code class="language-js">console.time()
setTimeout(() =&gt; {
console.timeEnd()
}, 5000)
setTimeout(() =&gt; {
console.timeLog()
}, 2000)</code></pre>
<p>In this example, we will get our 2 second <code>timeLog</code> first, then our 5 second <code>timeEnd</code>. </p>
<p>Just the same as the counter, we can label timers and have multiple running at the same time.</p>
<h2 id="groups">Groups</h2>
<p>Another thing that you can do with <code>log</code> is group them. ?</p>
<p>We start a group by using <code>console.group()</code>. And we end a group with <code>console.groupEnd()</code>.</p><pre><code class="language-js">console.log('I am not in a group')
console.group()
console.log('I am in a group')
console.log('I am also in a group')
console.groupEnd()
console.log('I am not in a group')</code></pre>
<p>This group of logs will be collapsible. This makes it easy to identify sets of logs. </p>
<p>By default, the group is not collapsed. You can set it to collapsed by using <code>console.groupCollapsed()</code> in place of <code>console.group()</code>.</p>
<p>Labels can also be passed into the <code>group()</code> to better identify them.</p>
<h2 id="stack-trace">Stack Trace</h2>
<p>You can also do a stack trace with <code>console</code>. Just add it into a function.</p><pre><code class="language-js">function one() {
two()
}
function two() {
three()
}
function three() {
console.trace()
}
one()
</code></pre>
<p>In this example, we have very simple functions that just call each other. Then, in the last function, we call <code>console.trace()</code>.</p>
<figcaption>Console Output</figcaption>
</figure>
<h2 id="tables">Tables</h2>
<p>Here's one of the most mind-blowing uses for console: <code>console.table()</code>.</p>
<p>So let's set up some data to log:</p><pre><code class="language-js">let devices = [
{
name: 'iPhone',
brand: 'Apple'
},
{
name: 'Galaxy',
brand: 'Samsung'
}
]</code></pre>
<p>Now we'll log this data using <code>console.table(devices)</code>.</p>
<figcaption>Console Output</figcaption>
</figure>
<p>But wait – it gets better!</p>
<p>If we only want the brands, just <code>console.table(devices, ['brand'])</code>!</p>
<figcaption>Console Output</figcaption>
</figure>
<p>How about a more complex example? In this example, we'll use jsonplaceholder.</p><pre><code class="language-js">async function getUsers() {
let response = await fetch('https://jsonplaceholder.typicode.com/users')
let data = await response.json()
console.table(data, ['name', 'email'])
}
getUsers()</code></pre>
<p>Here we are just printing the "name" and "email". If you <code>console.log</code> all of the data, you will see that there are many more properties for each user.</p>
<h2 id="style">Style ?</h2>
<p>Did you know that you can use CSS properties to style your logs?</p>
<p>To do this, we use <code>%c</code> to specify that we have styles to add. The styles get passed into the second argument of the <code>log</code>.</p><pre><code class="language-js">console.log("%c This is yellow text on a blue background.", "color:yellow; background-color:blue")</code></pre>
<p>You can use this to make your logs stand out.</p>
<h2 id="clear">Clear</h2>
<p>If you are trying to troubleshoot an issue using logs, you may be refreshing a lot and your console may get cluttered.</p>
<p>Just add <code>console.clear()</code> to the top of your code and you'll have a fresh console every time you refresh. ?</p>
<p>Just don't add it to the bottom of your code, lol.</p>
<h2 id="thanks-for-reading-">Thanks for Reading!</h2>
<p>If you want to revisit the concepts in this article via video, you can check out this <a href="https://youtu.be/_-bHhEGcDiQ">video-version I made here</a>.</p>
<figcaption>YouTube: There's More To Console Than Log</figcaption>
</figure>
<p>I'm Jesse from Texas. Check out my other content and let me know how I can help you on your journey to becoming a web developer.</p>
<ul>
<li><a href="https://youtube.com/codeSTACKr">Subscribe To My YouTube</a></li>
<li>Say Hello! <a href="https://instagram.com/codeSTACKr">Instagram</a> | <a href="https://twitter.com/codeSTACKr">Twitter</a></li>
<li><a href="https://codestackr.com/">Sign Up For My Newsletter</a></li>
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
