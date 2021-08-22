---
card: "https://cdn-media-1.freecodecamp.org/images/1*3MvXyPKEun4xcGZX6ay4PA.png"
tags: [JavaScript]
description: "A few weeks ago, I tweeted this interview question:"
author: "Milad E. Fahmy"
title: "JavaScript Timers: Everything you need to know"
created: "2021-08-15T19:41:49+02:00"
modified: "2021-08-15T19:41:49+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-nodejs tag-tech tag-programming tag-learning ">
<header class="post-full-header">
<h1 class="post-full-title">JavaScript Timers: Everything you need to know</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*3MvXyPKEun4xcGZX6ay4PA.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*3MvXyPKEun4xcGZX6ay4PA.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*3MvXyPKEun4xcGZX6ay4PA.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*3MvXyPKEun4xcGZX6ay4PA.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*3MvXyPKEun4xcGZX6ay4PA.png" alt="JavaScript Timers: Everything you need to know">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>A few weeks ago, I tweeted this interview question:</p>
<p><strong><em>*** Answer the question in your head now before you proceed ***</em></strong></p>
<p><em>About half the replies to the Tweet were wrong. </em>The answer is <strong>NOT</strong> V8 (or other VMs)!! While famously known as “JavaScript Timers”, functions like <code>setTimeout</code> and <code>setInterval</code> are not part of the ECMAScript specs or any JavaScript engine implementations. Timer functions are implemented by browsers and their implementations will be different among different browsers. Timers are also implemented natively by the Node.js runtime itself.</p>
<p>In browsers, the main timer functions are part of the <code>Window</code> interface, which has a few other functions and objects. That interface makes all of its elements available globally in the main JavaScript scope. This is why you can execute <code>setTimeout</code> directly in your browser’s console.</p>
<p>In Node, timers are part of the <code>global</code> object, which behaves similarly to the browser’s <code>Window</code> interface. You can see the source code of timers in Node <a href="https://github.com/nodejs/node/blob/master/lib/timers.js" rel="noopener">here</a>.</p>
<p>Some might think this is a bad interview question — why does knowing this matter anyway?! As a JavaScript developer, I think you’re expected to know this because if you don’t, that might be a sign that you don’t completely understand how V8 (and other VMs) interacts with browsers and Node.</p>
<p>Let’s do a few examples and challenges about timer functions, shall we?</p>
<blockquote><strong>Update:</strong> This article is now part of my “Complete Introduction to Node.js”. <br>You can read the updated version of it at <a href="https://jscomplete.com/g/js-timers" rel="noopener">here</a>.</blockquote>
<h3 id="delaying-the-execution-of-a-function">Delaying the execution of a function</h3>
<p>Timer functions are higher-order functions that can be used to delay or repeat the execution of other functions (which they receive as their first argument).</p>
<p>Here’s an example about delaying:</p><pre><code class="language-js">// example1.js
setTimeout(
() =&gt; {
console.log('Hello after 4 seconds');
},
4 * 1000
);</code></pre>
<p>This example uses <code>setTimeout</code> to delay the printing of the greeting message by 4 seconds. The second argument to <code>setTimeout</code> is the delay (in ms). This is why I multiplied 4 by 1000 to make it into 4 seconds.</p>
<p>The first argument to <code>setTimeout</code> is the function whose execution will be delayed.</p>
<p>If you execute the <code>example1.js</code> file with the <code>node</code> command, Node will pause for 4 seconds and then it’ll print the greeting message (and exit after that).</p>
<p>Note that the first argument to <code>setTimeout</code> is just a function <strong>reference</strong>. It does not have to be an inline function like what <code>example1.js</code> has. Here’s the same example without using an inline function:</p><pre><code class="language-js">const func = () =&gt; {
console.log('Hello after 4 seconds');
};
setTimeout(func, 4 * 1000);</code></pre>
<h3 id="passing-arguments">Passing Arguments</h3>
<p>If the function that uses <code>setTimeout</code> to delay its execution accepts any arguments, we can use the remaining arguments for <code>setTimeout</code> itself (after the 2 we learned about so far) to relay the argument values to the delayed function.</p><pre><code class="language-js">// For: func(arg1, arg2, arg3, ...)
// We can use: setTimeout(func, delay, arg1, arg2, arg3, ...)</code></pre>
<p>Here’s an example:</p><pre><code class="language-js">// example2.js
const rocks = who =&gt; {
console.log(who + ' rocks');
};
setTimeout(rocks, 2 * 1000, 'Node.js');</code></pre>
<p>The <code>rocks</code> function above, which is delayed by 2 seconds, accepts a <code>who</code> argument and the <code>setTimeout</code> call relays the value “<em>Node.js</em>” as that <code>who</code> argument.</p>
<p>Executing <code>example2.js</code> with the <code>node</code> command will print out “<em>Node.js rocks</em>” after 2 seconds.</p>
<h3 id="timers-challenge-1">Timers Challenge #1</h3>
<p>Using what you learned so far about <code>setTimeout</code>, print the following 2 messages after their corresponding delays.</p>
<ul>
<li>Print the message “<em>Hello after 4 seconds</em>” after 4 seconds</li>
<li>Print the message “<em>Hello after 8 seconds</em>” after 8 seconds.</li>
</ul>
<p><strong>Constraints</strong>:<br>You can define only a single function in your solution, which includes inline functions. This means many <code>setTimeout</code> calls will have to use the exact same function.</p>
<h4 id="solution">Solution</h4>
<p>Here’s how I’d solve this challenge:</p><pre><code class="language-js">// solution1.js
const theOneFunc = delay =&gt; {
console.log('Hello after ' + delay + ' seconds');
};
setTimeout(theOneFunc, 4 * 1000, 4);
setTimeout(theOneFunc, 8 * 1000, 8);</code></pre>
<p>I’ve made <code>theOneFunc</code> receive a <code>delay</code> argument and used the value of that <code>delay</code> argument in the printed message. This way, the function can print different messages based on whatever delay value we pass to it.</p>
<p>I then used <code>theOneFunc</code> in two <code>setTimeout</code> calls, one that fires after 4 seconds and another that fires after 8 seconds. Both of these <code>setTimeout</code> calls also get a <strong>3rd</strong> argument to represent the <code>delay</code> argument for <code>theOneFunc</code>.</p>
<p>Executing the <code>solution1.js</code> file with the <code>node</code> command will print out the challenge requirements, the first message after 4 seconds, and the second message after 8 seconds.</p>
<h3 id="repeating-the-execution-of-a-function">Repeating the execution of a function</h3>
<p>What if I asked you to print a message every 4 seconds, forever?</p>
<p>While you can put <code>setTimeout</code> in a loop, the timers API offers the <code>setInterval</code> function as well, which would accomplish the requirement of doing something forever.</p>
<p>Here’s an example of setInterval:</p><pre><code class="language-js">// example3.js
setInterval(
() =&gt; console.log('Hello every 3 seconds'),
3000
);</code></pre>
<p>This example will print its message every 3 seconds. Executing <code>example3.js</code> with the <code>node</code> command will make Node print this message forever, until you kill the process (with <em>CTRL+C</em>).</p>
<h3 id="cancelling-timers">Cancelling Timers</h3>
<p>Because calling a timer function schedules an action, that action can also be cancelled before it gets executed.</p>
<p>A call to <code>setTimeout</code> returns a timer “ID” and you can use that timer ID with a <code>clearTimeout</code> call to cancel that timer. Here’s an example:</p><pre><code class="language-js">// example4.js
const timerId = setTimeout(
() =&gt; console.log('You will not see this one!'),
0
);
clearTimeout(timerId);</code></pre>
<p>This simple timer is supposed to fire after <code>0</code> ms (making it immediate), but it will not because we are capturing the <code>timerId</code> value and canceling it right after with a <code>clearTimeout</code> call.</p>
<p>When we execute <code>example4.js</code> with the <code>node</code> command, Node will not print anything and the process will just exit.</p>
<p>By the way, in Node.js, there is another way to do <code>setTimeout</code> with <code>0</code> ms. The Node.js timer API has another function called <code>setImmediate</code>, and it’s basically the same thing as a <code>setTimeout</code> with a <code>0</code> ms but we don’t have to specify a delay there:</p><pre><code class="language-js">setImmediate(
() =&gt; console.log('I am equivalent to setTimeout with 0 ms'),
);</code></pre>
<p><em>The <code>setImmediate</code> function <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/setImmediate" rel="noopener">is not available in all browsers</a>. Don’t use it for front-end code.</em></p>
<p>Just like <code>clearTimeout</code>, there is also a <code>clearInterval</code> function, which does the same thing but for <code>setInerval</code> calls, and there is also a <code>clearImmediate</code> call as well.</p>
<h3 id="a-timer-delay-is-not-a-guaranteed-thing">A timer delay is not a guaranteed thing</h3>
<p>In the previous example, did you notice how executing something with <code>setTimeout</code> after <code>0</code> ms did not mean execute it right away (after the setTimeout line), but rather execute it right away after everything else in the script (including the clearTimeout call)?</p>
<p>Let me make this point clear with an example. Here’s a simple <code>setTimeout</code> call that should fire after half a second, but it won’t:</p><pre><code class="language-js">// example5.js
setTimeout(
() =&gt; console.log('Hello after 0.5 seconds. MAYBE!'),
500,
);
for (let i = 0; i &lt; 1e10; i++) {
// Block Things Synchronously
}</code></pre>
<p>Right after defining the timer in this example, we block the runtime synchronously with a big <code>for</code> loop. The <code>1e10</code> is <code>1</code> with <code>10</code> zeros in front of it, so the loop is a <code>10</code> Billion ticks loop (which basically simulates a busy CPU). Node can do nothing while this loop is ticking.</p>
<p>This of course is a very bad thing to do in practice, but it’ll help you here to understand that <code>setTimeout</code> delay is not a guaranteed thing, but rather a <strong>minimum</strong> thing. The <code>500</code> ms means a minimum delay of <code>500</code> ms. In reality, the script will take a lot longer to print its greeting line. It will have to wait on the blocking loop to finish first.</p>
<h3 id="timers-challenge-2">Timers Challenge #2</h3>
<p>Write a script to print the message “<strong>Hello World</strong>” every second, but only 5 times. After 5 times, the script should print the message “<em>Done</em>” and let the Node process exit.</p>
<p><strong>Constraints</strong>: You cannot use a <code>setTimeout</code> call for this challenge. <br><strong>Hint</strong>: You need a counter.</p>
<h4 id="solution-1">Solution</h4>
<p>Here’s how I’d solve this one:</p><pre><code class="language-js">let counter = 0;
const intervalId = setInterval(() =&gt; {
console.log('Hello World');
counter += 1;
if (counter === 5) {
console.log('Done');
clearInterval(intervalId);
}
}, 1000);</code></pre>
<p>I initiated a <code>counter</code> value as <code>0</code> and then started a <code>setInterval</code> call capturing its id.</p>
<p>The delayed function will print the message and increment the counter each time. Inside the delayed function, an <code>if</code> statement will check if we’re at <code>5</code> times by now. If so, it’ll print “<em>Done</em>” and clear the interval using the captured <code>intervalId</code> constant. The interval delay is <code>1000</code> ms.</p>
<h3 id="who-exactly-calls-the-delayed-functions">Who exactly “calls” the delayed functions?</h3>
<p>When you use the JavaScript <code>this</code> keyword inside a regular function, like this:</p><pre><code class="language-js">function whoCalledMe() {
console.log('Caller is', this);
}</code></pre>
<p>The value inside the <code>this</code> keyword will represent the <strong>caller</strong> of the function. If you define the function above inside a Node REPL, the caller will be the <code>global</code> object. If you define the function inside a browser’s console, the caller will be the <code>window</code> object.</p>
<p>Let’s define the function as a property on an object to make this a bit more clear:</p><pre><code class="language-js">const obj = {
id: '42',
whoCalledMe() {
console.log('Caller is', this);
}
};
// The function reference is now: obj.whoCallMe</code></pre>
<p>Now when you call the <code>obj.whoCallMe</code> function using its reference directly, the caller will be the <code>obj</code> object (identified by its id):</p>
<p>Now, the question is, what would the caller be if we pass the reference of <code>obj.whoCallMe</code> to a <code>setTimetout</code> call?</p><pre><code class="language-js">// What will this print??
setTimeout(obj.whoCalledMe, 0);</code></pre>
<p><strong>Who will the caller be in that case?</strong></p>
<p>The answer is different based on where the timer function is executed. You simply can’t depend on who the caller is in that case. You lose control of the caller because the timer implementation will be the one invoking your function now. If you test it in a Node REPL, you’d get a <code>Timetout</code> object as the caller:</p>
<p>Note that this only matters if you’re using JavaScript’s <code>this</code> keyword inside regular functions. You don’t need to worry about the caller at all if you’re using arrow functions.</p>
<h3 id="timers-challenge-3">Timers Challenge #3</h3>
<p>Write a script to continuously print the message “<em>Hello World</em>” with varying delays. Start with a delay of 1 second and then increment the delay by 1 second each time. The second time will have a delay of 2 seconds. The third time will have a delay of 3 seconds, and so on.</p>
<p>Include the delay in the printed message. Expected output looks like:</p><pre><code>Hello World. 1
Hello World. 2
Hello World. 3
...</code></pre>
<p><strong>Constraints:</strong> You can only use <code>const</code> to define variables. You can’t use <code>let</code> or <code>var</code>.</p>
<h4 id="solution-2">Solution</h4>
<p>Because the delay amount is a variable in this challenge, we can’t use <code>setInterval</code> here, but we can manually create an interval execution using <code>setTimeout</code> within a recursive call. The first executed function with setTimeout will create another timer, and so on.</p>
<p>Also, because we can’t use let/var, we can’t have a counter to increment the delay in each recursive call, but we can instead use the recursive function arguments to increment during the recursive call.</p>
<p>Here’s one possible way to solve this challenge:</p><pre><code class="language-js">const greeting = delay =&gt;
setTimeout(() =&gt; {
console.log('Hello World. ' + delay);
greeting(delay + 1);
}, delay * 1000);
greeting(1);</code></pre>
<h3 id="timers-challenge-4">Timers Challenge #4</h3>
<p>Write a script to continuously print the message “<em>Hello World</em>” with the same varying delays concept as challenge #3, but this time, in groups of 5 messages per main-delay interval. Starting with a delay of 100ms for the first 5 messages, then a delay of 200ms for the next 5 messages, then 300ms, and so on.</p>
<p>Here’s how the script should behave:</p>
<ul>
<li>At the 100ms point, the script will start printing “Hello World” and do that 5 times with an interval of 100ms. The 1st message will appear at 100ms, 2nd message at 200ms, and so on.</li>
<li>After the first 5 messages, the script should increment the main delay to 200ms. So 6th message will be printed at 500ms + 200ms (700ms), 7th message will be printed at 900ms, 8th message will be printed at 1100ms, and so on.</li>
<li>After 10 messages, the script should increment the main delay to 300ms. So the 11th message should be printed at 500ms + 1000ms + 300ms (18000ms). The 12th message should be printed at 21000ms, and so on.</li>
<li>Continue the pattern forever.</li>
</ul>
<p>Include the delay in the printed message. The expected output looks like this (without the comments):</p><pre><code>Hello World. 100  // At 100ms
Hello World. 100  // At 200ms
Hello World. 100  // At 300ms
Hello World. 100  // At 400ms
Hello World. 100  // At 500ms
Hello World. 200  // At 700ms
Hello World. 200  // At 900ms
Hello World. 200  // At 1100ms
...</code></pre>
<p><strong>Constraints:</strong> You can use only <code>setInterval</code> calls (not <code>setTimeout</code>) and you can use only ONE if statement.</p>
<h4 id="solution-3">Solution</h4>
<p>Because we can only use <code>setInterval</code> calls, we’ll need recursion here as well to increment the delay of the next <code>setInterval</code> call. In addition, we need an if statement to control doing that only after 5 calls of that recursive function.</p>
<p>Here’s one possible solution:</p><pre><code class="language-js">let lastIntervalId, counter = 5;
const greeting = delay =&gt; {
if (counter === 5) {
clearInterval(lastIntervalId);
lastIntervalId = setInterval(() =&gt; {
console.log('Hello World. ', delay);
greeting(delay + 100);
}, delay);
counter = 0;
}
counter += 1;
};
greeting(100);</code></pre>
<p>Thanks for reading.</p>
<p>If you’re just beginning to learn Node.js, I recently published a <a href="https://jscomplete.com/c/nodejs-getting-started" rel="noopener"><strong>first-steps course at Pluralsight</strong></a>, check it out:</p>
<figcaption><a href="https://jscomplete.com/c/nodejs-getting-started" rel="noopener" target="_blank" title="">https://jscomplete.com/c/nodejs-getting-started</a></figcaption>
</figure>
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
