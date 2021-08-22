---
card: "https://cdn-media-1.freecodecamp.org/images/1*4x8Zuht2TaQ87ZhwYcLUqQ.jpeg"
tags: [JavaScript]
description: "Often, JavaScript just works. And because it is written in hu"
author: "Milad E. Fahmy"
title: "Thrown for a loop: understanding for loops and timeouts in JavaScript"
created: "2021-08-16T10:14:56+02:00"
modified: "2021-08-16T10:14:56+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-tech tag-programming tag-web-development tag-learning ">
<header class="post-full-header">
<h1 class="post-full-title">Thrown for a loop: understanding for loops and timeouts in JavaScript</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*4x8Zuht2TaQ87ZhwYcLUqQ.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*4x8Zuht2TaQ87ZhwYcLUqQ.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*4x8Zuht2TaQ87ZhwYcLUqQ.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*4x8Zuht2TaQ87ZhwYcLUqQ.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*4x8Zuht2TaQ87ZhwYcLUqQ.jpeg" alt="Thrown for a loop: understanding for loops and timeouts in JavaScript">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Often, JavaScript just works. And because it is written in human-readable syntax, certain things <em>seem</em> intuitive. But it’s easy to ignore what’s happening on a deeper level. Eventually, though, this lack of understanding results in an inability to solve a problem.</p><blockquote>Intuition is the ability to understand something immediately, without the need for conscious reasoning. — Google</blockquote><p>I spend a fair amount of time trying to solve two-dimensional problems, and a slightly larger portion of it trying to solve three-dimensional ones.</p><p>While I enjoy practicing coding in my off time, by day I am an air traffic controller. The problems we face as air traffic controllers aren’t different than any other job. There are routine problems with routine solutions and unique problems with unique solutions. It’s through a deeper understanding that we can solve the unique ones.</p><p>From the outside looking in at air traffic control, it may seem everything is a unique problem–that there is an inherent requisite skill to do the job. However, while certain aptitudes can make learning any skill easier, it is ultimately experience that drives problem-solving to a subconscious level. The result is intuition.</p><p>Intuition follows observation. Observe a unique problem enough times, and it and its solution become routine. It’s noticing the consistencies across each situation where we begin to develop a sense of what <em>should </em>happen next.</p><p>Intuition does <em>not, </em>however, require a deep understanding. We can often point to the correct solution, without being able to articulate how or why it works. Sometimes, however, we choose solutions which <em>seem</em> intuitive but are in fact governed by an unfamiliar set of rules.</p><h3 id="what-does-this-code-output"><strong>What does this code output?</strong></h3><pre><code class="language-js">for(var i = 1; i &lt; 6; i++) {
setTimeout(function() {
console.log(i);
},1000);
}
console.log('The loop is done!');</code></pre><p>Take some time to think about what this code will output. We will begin to build the foundation to answer this, and we will return to this later.</p><h4 id="javascript-is-a-language-dialect-">JavaScript is a language dialect.</h4><p>I grew up in the Northeastern United States. Although I speak English, my speech undeniably contains regional variety. This variety is called <em>dialect</em>. My particular dialect is an <em>implementation</em> (or version) of the English language standard.</p><p>It may seem standards would give birth to dialects, but it is the dialect which initially drives the need for standards. JavaScript is similar. JavaScript is the dialect, not the standard. The standard is <em>ECMAScript</em>, created by ECMA–the European Computer Manufacturers Association. ECMAScript is an attempt to standardize JavaScript.</p><p>There is more than one implementation of ECMAScript, but JavaScript happens to be the most popular, and therefore, the name JavaScript and ECMAScript are often used interchangeably.</p><h3 id="javascript-runs-in-an-engine-">JavaScript runs in an engine.</h3><p>JavaScript is only a text file. Like a driver without a car, it can’t go very far. Something has to run or interpret your file. This is done by a JavaScript engine.</p><p>A few examples of JavaScript engines include V8, the engine used by Google Chrome; SpiderMonkey, the engine used by Mozilla Firefox; and JavaScriptCore, the engine used by Apple Safari. ECMAScript, the language standard, ensures consistency across the different JavaScript engines.</p><h3 id="javascript-engines-run-in-an-environment-">JavaScript engines run in an environment.</h3><p>While JavaScript can run in different <em>places</em> (for example, Node.js, a popular server-side technology, runs JavaScript and uses the same V8 engine that Google Chrome uses), the most common place to find a JavaScript engine is a web browser.</p><p>Within the browser, the JavaScript engine is just one part of a larger environment that helps bring our code to life. There are three main parts to this environment, and together they make up what is termed the <em>runtime environment</em>.</p><h4 id="the-call-stack">The call stack</h4><p>The first part is the location of the currently running code. This is named the <em>call stack.</em> There’s only one call stack in JavaScript, and this will become important as we continue to build our foundation.</p><p>Here is a simplified example of the call stack:</p><pre><code class="language-js">function doSomething() {
//some other code
doSomethingElse();
//some other code
}
function doSomethingElse() {
//some other code
}
doSomething();</code></pre><p>The initial call stack is empty, as there is no running code. When our JavaScript engine finally reaches the first function invocation, <code>doSomething()</code>, it gets added to the stack:</p><pre><code>--Call Stack--
doSomething;</code></pre><p>Inside of <code>doSomething()</code> we run some other code and then reach <code>doSomethingElse():</code></p><pre><code>--Call Stack--
doSomething
doSomethingElse</code></pre><p>When <code>doSomethingElse()</code> is done running, it is removed from the call stack:</p><pre><code>--Call Stack--
doSomething</code></pre><p>Finally, <code>doSomething()</code> finishes the remaining code, and is also removed from the call stack:</p><pre><code>--Call Stack--
Empty</code></pre><h4 id="web-apis">Web APIs</h4><p>The second part of our browser environment fills somewhat of a void. Surprisingly, things such as interacting with the DOM, making server requests, and most browser-based tasks are <em>not</em> part of the ECMAScript language standard.</p><p>Fortunately, browsers offer us added features that our JavaScript engine can plug in to. These features extend the functionality of JavaScript within the browser. They allow us to do things such as listen for events or make server requests — things that JavaScript can’t do by itself. And they are called w<em>eb APIs</em>.</p><p>Many web APIs allow us to listen or wait for something to occur. When that event occurs, we then run some other code.</p><p>Here is our call stack example expanded to include a (pretend) web API.</p><pre><code class="language-js">function doSomething() {
//some other code
listenForClick();
doSomethingElse();
//some other code
}
function doSomethingElse() {
//some other code
}
listenForClick() {
console.log('the button was clicked!')
}
doSomething();</code></pre><p>When the browser encounters <code>doSomething()</code> it gets placed in the call stack:</p><pre><code>--Call Stack--
doSomething</code></pre><p>Then, it runs some other code and then encounters <code>listenForClick(...)</code>:</p><pre><code>--Call Stack--
doSomething
listenForClick</code></pre><p><code>listenForClick()</code> gets plugged into a web API, and in this case, it is removed from our call stack.</p><p>The JavaScript engine now moves on to <code>doSomethingElse()</code>:</p><pre><code>--Call Stack--
doSomething
//some other code
listenForClick();
doSomethingElse();
//some other code
}
function doSomethingElse() {
//some other code
}
listenForClick() {
console.log('the button was clicked!')
}
doSomething();</code></pre><p>So now, our code runs like this:</p><p>Our engine encounters <code>doSomething()</code>:</p><pre><code>--Call Stack--
doSomething</code></pre><p><code>doSomething()</code> runs some code and then encounters <code>listenForClick(...)</code>. In our example, this takes a callback, which is the code we want to run after the user clicks a button. The engine passes <code>listenForClick(…)</code> out of the call stack and continues until it encounters <code>doSomethingElse()</code>:</p><pre><code>--Call Stack--
doSomething
doSomethingElse</code></pre><p><code>doSomethingElse()</code> runs some code, and finishes. By this time, our user clicks the button. The web API <em>hears</em> the click and sends the <code>console.log()</code> statement to the event queue. We’ll pretend <code>doSomething()</code> is not done; therefore, the call stack is not empty, and the <code>console.log()</code> statement must wait in the event queue.</p><pre><code>--Call Stack--
doSomething</code></pre><p>After a few seconds, <code>doSomething()</code> finishes and is removed from the call stack:</p><pre><code>--Call Stack--
EMPTY</code></pre><p>Finally, the <code>console.log()</code> statement can get passed into the call stack to be executed:</p><pre><code>--Call Stack--
console.log(a); // prints "10" and is called "outside the loop"</code></pre><h3 id="the-answer-revealed"><strong>The answer revealed</strong></h3><p>At this point, we’ve discussed enough to build our answer.</p><p>Here is our example revisited:</p><pre><code class="language-js">for(var i = 1; i &lt; 6; i++) {
setTimeout(function() {
console.log(i);
},1000);
}
console.log('The loop is done!');</code></pre><p>Intuitively, you might believe this will print the numbers one through five, with one second between each number being printed:</p><pre><code>// one second between each log
1
2
3
4
5
The loop is done!</code></pre><p>However, what we actually output is:</p><pre><code>The loop is done!
// then about one second later and all at once
6
6
6
6
6</code></pre><h4 id="what-s-happening"><strong>What’s happening?</strong></h4><p>Recall our discussion about web APIs. Asynchronous web API’s, or those with callbacks, go through the event loop. <code>setTimeout()</code>happens to be an asynchronous web API.</p><p>Every time we loop, <code>setTimeout()</code> is passed outside of the call stack and enters the event loop. Because of this, the engine is able to move to the next piece of code. The next piece of code happens to be the remaining iterations of the loop, followed by <code>console.log(‘The loop is done!’)</code>.</p><p>To show the <code>setTimeout()</code> statements are being passed from the call stack, and the loop is running, we can place a <code>console.log()</code> statement outside of the <code>setTimeout()</code> function and print the results. We can also place a built-in timer method to show just how quickly everything is happening. We use <code>console.time()</code> and <code>console.timeEnd()</code> to do this .</p><pre><code class="language-js">console.time('myTimer');
for(var i = 1; i &lt; 6; i++) {
console.log('Loop Number' + i); // added this
setTimeout(()=&gt;{
console.log(i);
},1000);
}
console.log('The loop is done!');
console.timeEnd('myTimer');</code></pre><p>Results:</p><pre><code>Loop Number 1
Loop Number 2
Loop Number 3
Loop Number 4
Loop Number 5
The loop is done!
// then, about one second later and all at once:
6
6
6
6
6
myTimer: 1.91577ms   // Wow, that is quick!</code></pre><p>First, we can see the loop is in fact running. In addition, the timer we added tells us that everything other than our <code>setTimeout()</code> functions took less than two milliseconds to run! That means each <code>setTimeout()</code> function has about 998 milliseconds remaining before the code it contains goes into the event queue and then finally into the call stack. Remember earlier when I said it would be difficult for a user to be faster than our code!</p><p>If you run this code multiple times, you will likely notice the timer output will change slightly. This is because your computer’s available resources are always changing and it might be slightly faster or slower each time.</p><p>So here is what’s happening:</p><ol><li>Our engine comes across our for loop. We declare and initialize a global variable named <code>i</code> equal to one.</li><li>Each iteration of loop passes <code>setTimeout()</code> to a web API and into the event loop. Therefore, our <code>for loop</code> finishes very quickly, since there is no other code inside of it to run. In fact, the only thing our loop does is change the value of <code>i</code> to six.</li><li>At this point, the loop is over, our <code>setTimeout()</code> functions are still counting down, and all that remains in the call stack is <code>console.log(‘The loop is done!’)</code>.</li><li>Fast forward a bit, and the <code>setTimeout()</code> functions have finished, and the <code>console.log(i)</code> statements go into the event queue. By this time, our <code>console.log(‘The loop is done!’)</code> has been printed and the call stack is empty.</li><li>Since the call stack is empty, the five<code>console.log(i)</code> statements get passed from the event queue into the call stack.</li><li>Remember, <code>i</code> is now equal to six, and that’s why we see five sixes printed to the screen.</li></ol><h3 id="let-s-create-the-output-we-thought-we-would-get">Let’s create the output we thought we would get</h3><p>Up to this point, we’ve discussed the <em>actual</em> output of a few simple lines of code that turned out to be not-so-simple. We’ve talked about what’s happening on a deeper level and what the result is. But, what if we want to create the output we <em>thought</em> we would get? In other words, how can we reverse engineer the following results:</p><pre><code>1 // after one second, then
2 // one second later (2 seconds total)
3 // one second later (3 seconds total)
4 // one second later (4 seconds total)
5 // one second later (5 seconds total)
'The loop is done!' // one second later (6 seconds total)</code></pre><h4 id="does-the-duration-on-our-timeout-change-anything"><strong>Does the duration on our timeout change anything?</strong></h4><p>Setting the timeout’s duration to zero seems like a possible solution. Let’s give it a try.</p><pre><code class="language-js">for(var i = 1; i &lt; 6; i++) {
setTimeout(()=&gt;{
console.log(i);
},0);
}
console.log('The loop is done!');</code></pre><p>Results:</p><pre><code>// Everything appears (essentially) at once
The loop is done!
6
6
6
6
6</code></pre><p>It still didn’t work. What happened?</p><p>Remember, just because the duration of <code>setTimeout()</code> is zero, it is still asynchronous and handled by a web API. Regardless of the duration, it will be passed to the event queue and then the call stack. So even with a timeout of zero, the process remains the same, and the output is <em>relatively</em> unchanged.</p><p>Notice I said <em>relatively</em>. One thing you may have noticed that was different, was everything printed <em>almost</em> at once. This is because the duration of <code>setTimeout()</code> expires instantly, and its code gets from the web API, into the event queue, and finally into the call stack almost immediately. In our previous example, our code had to wait 1000 milliseconds before it went into the event queue and then the call stack.</p><p>So, if changing the duration to zero didn’t work, now what?</p><h4 id="revisiting-scope">Revisiting Scope</h4><p>What will this code output?</p><pre><code class="language-js">
function myFunction1() {
var a = 'Brandon';
console.log(a);
}
function myFunction2() {
var a = 'Matt';
console.log(a);
}
function myFunction3() {
var a = 'Bill';
console.log(a);
}
myFunction1()
myFunction2()
myFunction3()</code></pre><p>Notice how each function uses the same variable named <code>a</code>. It would seem each function might throw an error, or possibly overwrite the value of <code>a</code>.</p><p>Results:</p><pre><code>Brandon
Bill
Matt</code></pre><p>There is no error, and <code>a</code> is unique each time.</p><p>It appears the variable <code>a</code> is unique to each function. It’s very similar to how an address works. Street names and numbers are invariably shared across the world. There is more than a single 123 Main St. It’s the city and state which provide <em>scope</em> to which address belongs where.</p><p>Functions work in the same way. Functions act as a protective bubble. Anything inside of that bubble can’t be accessed by anything outside. This is why the variable <code>a</code> is not actually the <em>same</em> variable. It’s three <em>different</em> variables located in three different places in memory. They just so happen to all share the same name.</p><h4 id="applying-the-principles-of-scope-to-our-example-">Applying the principles of scope to our example:</h4><p>We know we have access to the iterative value of <code>i</code>, just not when the <code>setTimeout()</code> statements finish. What if we take the value of <code>i</code> and package it with the <code>setTimeout()</code> statement in its own bubble (as a way to preserve <code>i</code>)?</p><pre><code class="language-js">for(var i = 1; i &lt; 6; i++) {
function timer(){ // create a unique function (scope) each time
var k = i; // save i to the variable k which
setTimeout(()=&gt;{
console.log(k);
},1000);
}
timer();
}</code></pre><p>Result:</p><pre><code>The loop is done!
1
2
3
4
5</code></pre><h4 id="it-almost-works-what-did-we-do">It <em>almost </em>works. What did we do?</h4><p>We are beginning to get into the topic of <em>closures. </em>A deep discussion on closures goes beyond the scope of this article. However, a brief introduction will help our understanding.</p><p>Remember, each function creates a unique scope. Because of this, variables with the same name can exist in separate functions and not interfere with each other. In our most recent example, each iteration created a new and unique scope (along with a new and unique variable <code>k</code>). When the <code>for loop</code> is done, these five unique values of <code>k</code> are still in memory and are accessed appropriately by our <code>console.log(k)</code> statements. That is closure in a nutshell.</p><p>In our original example where we declare <code>i</code> with <code>var</code>, each iteration overwrote the value of <code>i</code> (which in our case was a global variable).</p><h3 id="es6-makes-this-much-cleaner-">ES6 makes this much cleaner.</h3><p>In 2015, ECMAScript released a major update to its standards. The update contained many new features. One of those features was a new way to declare variables. Up to this point, we have used the <code>var</code> keyword to declare variables. ES6 introduced the <code>let</code> keyword.</p><pre><code class="language-js">for(let i = 1; i &lt; 6; i++) {
setTimeout(()=&gt;{
console.log(i);
},1000);
}
console.log('The loop is done!');</code></pre><p>Results:</p><pre><code>The loop is done!
1
2
3
4
5</code></pre><p>Just by changing <code>var</code> to <code>let</code>, we are much closer to the result we want.</p><h4 id="a-brief-introduction-to-let-vs-var-">A brief introduction to “let” vs “var”</h4><p>In our example, <code>let</code> does two things:</p><p>First, it makes <code>i</code> available only inside our for loop. If we try to log <code>i</code> outside of the loop, we get an error. This is because <code>let</code> is a block scope variable. If it is inside a block of code (such as a <code>for loop</code>) it can only be accessed there. <code>var</code> is function scoped.</p><p>An example to show <code>let</code> vs <code>var</code> behavior:</p><pre><code class="language-js">function variableDemo() {
var i = 'Hello World!';
for(let i = 1; i &lt; 3; i++) {
console.log(i); // 1, 2, 3
}
console.log(i); // "Hello World!"
// the for-loop value of i is hidden outside of the loop with let
}
variableDemo();
console.log(i); //Error, can't access either value of i</code></pre><p>Notice how we don’t have access to either <code>i</code> outside of the function <code>variableDemo()</code>. This is because <code>‘Hello World’</code> is function scoped, and <code>i</code> is block scoped.</p><p>The second thing <code>let</code> does for us is create a unique value of <code>i</code> each time the loop iterates. When our loop is over, we have created six separate values of <code>i</code> that are stored in memory that our <code>console.log(i)</code> statements can access. With <code>var,</code> we only had one variable that we kept overwriting.</p><h3 id="the-loop-is-not-done-">The loop is not done.</h3><p>We’re almost there. We still are logging <code>'The loop is done!'</code> first, and we aren’t logging everything one second apart. First, we will look at two ways to address the <code>The loop is done!</code> output.</p><h4 id="option-1-using-settimeout-and-the-concurrency-model-to-our-advantage-">Option 1: Using setTimeout() and the concurrency model to our advantage.</h4><p>This is fairly straightforward. We want <code>The loop is done!</code> to pass through the same process as the <code>console.log(i)</code> statements. If we wrap <code>The loop is done!</code> in a <code>setTimeout()</code> whose duration is greater to or equal than the <code>for loop</code> timeouts, we ensure <code>The loop is done!</code> arrives behind and expires after the last <code>for loop</code> timeouts.</p><p>We’ll break up our code a bit to make it a bit clearer:</p><pre><code class="language-js">function loopDone() { // we will call this below
console.log('The loop is done!)'
}
for(let i = 1; i &lt; 6; i++) {
setTimeout(()=&gt;{
console.log(i);
},1000);
}
setTimeout(loopDone, 1001);</code></pre><p>Results:</p><pre><code>1
2
3
4
5
The loop is done!</code></pre><h4 id="option-2-check-for-the-final-console-log-i-completion">Option 2: Check for the final console.log(i) completion</h4><p>Another option is to check when the <code>console.log(i)</code> statements are done.</p><pre><code class="language-js">function loopDone() {
console.log('The loop is done!');
}
for(let i = 1; i &lt; 6; i++) {
setTimeout(()=&gt;{
console.log(i);
if(i === 5){ // check when the last statement has been logged
loopDone();
}
},1000);
}</code></pre><p>Results:</p><pre><code>1
2
3
4
5
The loop is done!</code></pre><p>Notice that we placed our loop completion check within the <code>setTimeout()</code> function, <em>not</em> within the main body of the for loop.</p><p>Checking when the loop is done won’t help us, since we still must wait for the timeouts to complete. What we want to do is check when the <code>console.log(i)</code> statements are done. We know this will be <em>after</em> the value of <code>i</code> is 5 and <em>after</em> we’ve logged it. If we place our loop completion check after the console.log(i) statement, we can ensure we’ve logged the final <code>i</code> <em>before</em> we run <code>loopDone()</code>.</p><h3 id="getting-everything-to-happen-one-second-apart-">Getting everything to happen one second apart.</h3><p>Everything is happening essentially at the same time because the loop is so fast, and all the timeouts arrive at the web API within milliseconds of each other. Therefore, they expire around the same time and go to the event queue and call stack around the same time.</p><p>We can’t easily change when they arrive at the web API. But we can, with the unique value of each <code>i</code>, delay how long they stay there.</p><pre><code class="language-js">function loopDone() {
console.log('The loop is done!');
}
for(let i = 1; i &lt; 6; i++) {
setTimeout(()=&gt;{
console.log(i);
if(i === 5){
loopDone();
}
},i * 1000); // multiple i by 1000
}</code></pre><p>Since <code>i</code> is now unique (because we are using <code>let</code>), if we multiply <code>i</code> by 1000, each timeout will last one second longer than the previous timeout. The first timeout will arrive with a 1000 millisecond duration, the second with 2000 and so forth.</p><p>Although they arrive at the same time, it will now take each timeout one second longer than the previous to pass to the event queue. Since our call stack is empty by this point, it goes from the event queue immediately into the call stack to be executed. With each <code>console.log(i)</code> statement arriving one second apart in the event queue, we will <em>almost </em>have our desired output.</p><pre><code>1 // after one second, then
2 // one second later (2 seconds total)
3 // one second later (3 seconds total)
4 // one second later (4 seconds total)
5 // one second later (5 seconds total)
'The loop is done!' // still occurs with the final log</code></pre><p>Notice that <code>The loop is done!</code> is still arriving <em>with</em> the last <code>console.log(i)</code> statement, not one second after it. This is because when <code>i===5</code> <code>loopDone()</code> is run. This prints both the <code>i</code> and <code>The loop is done! </code>statements around the same time.</p><p>We can simply wrap <code>loopDone() </code>in a <code>setTimeout()</code> to address this.</p><pre><code class="language-js">function loopDone() {
console.log('The loop is done!');
}
for(let i = 1; i &lt; 6; i++) {
setTimeout(()=&gt;{
console.log(i);
if(i === 5){
setTimeout(loopDone, 1000); // update this
}
},i * 1000);
}</code></pre><p>Results:</p><pre><code>1 // after one second, then
2 // one second later (2 seconds total)
3 // one second later (3 seconds total)
4 // one second later (4 seconds total)
5 // one second later (5 seconds total)
'The loop is done!' // one second later (6 seconds total)</code></pre><p>We finally have the results we wanted!</p><p>Most of this article stemmed from my own struggles and the subsequent aha! moments in an attempt to understand closures and the JavaScript event loop. I hope this can make sense of the basic processes at play and serve as a foundation for more advanced discussions of the topic.</p><p>Thanks!</p><p>woz</p>
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
