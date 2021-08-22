---
card: "/images/default.jpg"
tags: [JavaScript]
description: "Closures are a notoriously difficult to grasp. But they are v"
author: "Milad E. Fahmy"
title: "Learn JavaScript Closures in 6 Minutes"
created: "2021-08-16T11:28:45+02:00"
modified: "2021-08-16T11:28:45+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-functional-programming tag-react tag-react-hooks tag-technology ">
<header class="post-full-header">
<h1 class="post-full-title">Learn JavaScript Closures in 6 Minutes</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Understanding closures can lead to more elegant code and better job opportunities.</p>
<p>I hope this post helps the concept stick as fast as possible.</p>
<p><strong>BONUS</strong>: Closures aren't JS specific! They're a computer science concept that - once you learn them -  you'll start to recognize everywhere else in software development.</p>
<h2 id="functionsarevaluestoo">Functions Are Values Too</h2>
<p>First off, understand that JavaScript supports <em>first-class functions</em>.</p>
<p><img src="https://www.freecodecamp.org/news/content/images/2019/08/winnie-1.jpeg" alt="winnie-1"></p>
<p>A fancy name, but it just means functions <em>are treated like any other value</em>. Values like strings, numbers, and objects.</p>
<p>What can you do with values?</p>
<h3 id="valuescanbevariables">Values can be variables</h3>
<pre><code class="language-js">const name = 'Yazeed';
const age = 25;
const fullPerson = {
name: name,
age: age
};
</code></pre>
<h3 id="valuescanbeinarrays">Values can be in arrays</h3>
<pre><code class="language-js">const items = [
'Yazeed',
25,
{ name: 'Yazeed', age: 25 }
]
</code></pre>
<h3 id="valuescanbereturnedfromfunctions">Values can be returned from functions</h3>
<pre><code class="language-js">function getPerson() {
return [
'Yazeed',
25,
{ name: 'Yazeed', age: 25 }
];
}
</code></pre>
<p>Guess what? Functions can be all that, too.</p>
<p><img src="https://www.freecodecamp.org/news/content/images/2019/08/functions-can-do-that-too.jpeg" alt="functions-can-do-that-too"></p>
<h3 id="functionscanbevariables">Functions can be variables</h3>
<pre><code class="language-js">const sayHi = function(name) {
return `Hi, ${name}!`;
}
</code></pre>
<h3 id="functionscanbeinarrays">Functions can be in arrays</h3>
<pre><code class="language-js">const myFunctions = [
function sayHi(name) {
return `Hi, ${name}!`;
},
function add(x, y) {
return x + y;
}
];
</code></pre>
<p>And here's the big one...</p>
<h2 id="functionscanreturnotherfunctions">Functions Can Return <em>Other Functions</em></h2>
<p>A function that returns another function has a special name. It's called a <em>higher-order</em> function.</p>
<p>This is the foundation on which closures stand. Here's our first example of a <em>higher-order</em> function.</p>
<pre><code class="language-js">function getGreeter() {
return function() {
return 'Hi, Jerome!';
};
}
</code></pre>
<p><code>getGreeter</code> returns a function. To be greeted, call it twice.</p>
<pre><code class="language-js">getGreeter(); // Returns function
getGreeter()(); // Hi, Jerome!
</code></pre>
<p>One call for the returned function, and one more for the greeting.</p>
<p>You can store it in a variable for easier reuse.</p>
<pre><code class="language-js">const greetJerome = getGreeter();
greetJerome(); // Hi, Jerome!
greetJerome(); // Hi, Jerome!
greetJerome(); // Hi, Jerome!
</code></pre>
<h2 id="getsomeclosure">Get Some Closure</h2>
<p>Now for the grand unveiling.</p>
<p>Instead of hardcoding Jerome, we'll make <code>getGreeter</code> dynamic by accepting one parameter called <code>name</code>.</p>
<pre><code class="language-js">// We can greet anyone now!
function getGreeter(name) {
return function() {
return `Hi, ${name}!`;
};
}
</code></pre>
<p>And use it like so...</p>
<pre><code class="language-js">const greetJerome = getGreeter('Jerome');
const greetYazeed = getGreeter('Yazeed');
greetJerome(); // Hi, Jerome!
greetYazeed(); // Hi, Yazeed!
</code></pre>
<p><img src="https://www.freecodecamp.org/news/content/images/2019/08/fallout-hold-up.jpg" alt="fallout-hold-up"></p>
<p>Look at this code again.</p>
<pre><code class="language-js">function getGreeter(name) {
return function() {
return `Hi, ${name}!`;
};
}
</code></pre>
<h2 id="weusedaclosure">We Used a Closure</h2>
<p>The <em>outer</em> function takes <code>name</code>, but the <em>inner</em> function uses it later. This is the power of closures.</p>
<p>When a function returns, its lifecycle is complete. It can no longer perform any work, and its local variables are cleaned up.</p>
<p><em>Unless</em> it returns another function. If that happens, then the returned function still has access to those outer variables, even after the parent passes on.</p>
<h2 id="benefitsofclosures">Benefits of Closures</h2>
<p><img src="https://www.freecodecamp.org/news/content/images/2019/08/why-do-i-care.jpeg" alt="why-do-i-care"></p>
<p>Like I said, closures can level up your developer game. Here's a few practical uses.</p>
<h2 id="1dataprivacy">1. Data Privacy</h2>
<p>Data privacy is essential for safely sharing code.</p>
<p>Without it, anyone using your function/library/framework can maliciously manipulate its inner variables.</p>
<h3 id="abankwithnoprivacy">A bank with no privacy</h3>
<p>Consider this code that manages a bank account. The <code>accountBalance</code> is exposed globally!</p>
<pre><code class="language-js">let accountBalance = 0;
const manageBankAccount = function() {
return {
deposit: function(amount) {
accountBalance += amount;
},
withdraw: function(amount) {
// ... safety logic
accountBalance -= amount;
}
};
}
</code></pre>
<p>What's stopping me from inflating my balance or ruining someone else's?</p>
<pre><code class="language-js">// later in the script...
accountBalance = 'Whatever I want, muhahaha &gt;:)';
</code></pre>
<p><img src="https://www.freecodecamp.org/news/content/images/2019/08/who-reset-my-balance-this-time.jpeg" alt="who-reset-my-balance-this-time"></p>
<p>Languages like Java and C++ allow classes to have private fields. These fields cannot be accessed outside the class, enabling perfect privacy.</p>
<p>JavaScript doesn't support private variables (<a href="https://github.com/tc39/proposal-class-fields">yet</a>), but we can use closures!</p>
<h3 id="abankwithproperprivacy">A bank with proper privacy</h3>
<p>This time <code>accountBalance</code> sits <em>inside</em> our manager.</p>
<pre><code class="language-js">const manageBankAccount = function(initialBalance) {
let accountBalance = initialBalance;
return {
getBalance: function() { return accountBalance; },
deposit: function(amount) { accountBalance += amount; },
withdraw: function(amount) {
if (amount &gt; accountBalance) {
return 'You cannot draw that much!';
}
accountBalance -= amount;
}
};
}
</code></pre>
<p>And perhaps use it like so...</p>
<pre><code class="language-js">const accountManager = manageBankAccount(0);
accountManager.deposit(1000);
accountManager.withdraw(500);
accountManager.getBalance(); // 500
</code></pre>
<p>Notice I can't directly access <code>accountBalance</code> anymore. I can only view it through <code>getBalance</code>, and change it via <code>deposit</code> and <code>withdraw</code>.</p>
<p>How's this possible? Closures!</p>
<p>Even though <code>manageBankAccount</code> created the <code>accountBalance</code> variable, the three functions it returns all have access to <code>accountBalance</code> via closure.</p>
<p><img src="https://www.freecodecamp.org/news/content/images/2019/08/i-wish-my-bank-did-that.jpeg" alt="i-wish-my-bank-did-that"></p>
<h2 id="2currying">2. Currying</h2>
<p><a href="https://www.yazeedb.com/posts/deeply-understand-currying-in-7-minutes">I've written on currying before</a>. It's when a function takes its arguments one at a time.</p>
<p>So instead of this...</p>
<pre><code class="language-js">const add = function(x, y) {
return x + y;
}
add(2, 4); // 6
</code></pre>
<p>You can <em>curry</em> <code>add</code> by leveraging closures...</p>
<pre><code class="language-js">const add = function(x) {
return function(y) {
return x + y;
}
}
</code></pre>
<p>And you know that the returned function has access to <code>x</code> and <code>y</code>, so you could do something like this...</p>
<pre><code class="language-js">const add10 = add(10);
add10(10); // 20
add10(20); // 30
add10(30); // 40
</code></pre>
<p>Currying's great if you'd like to "preload" a function's arguments for easier reuse. Again, only possible through JavaScript closures!</p>
<h2 id="3reactdevelopersuseclosures">3. React Developers Use Closures</h2>
<p>If you've kept up with React news, you heard that they released <a href="https://reactjs.org/docs/hooks-intro.html">hooks</a> last year. The most confusing hook, <code>useEffect</code>, relies on closures.</p>
<p>This article won't have a full React tutorial, so I hope the example's simple enough for all.</p>
<iframe src="https://codesandbox.io/embed/react-hooks-closures-example-2kixb?fontsize=14" title="react-hooks-closures-example" allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>
<h3 id="herestheimportantpart">Here's the important part...</h3>
<pre><code class="language-js">function App() {
const username = 'yazeedb';
React.useEffect(function() {
fetch(`https://api.github.com/users/${username}`)
.then(res =&gt; res.json())
.then(user =&gt; console.log(user));
});
// blah blah blah
}
</code></pre>
<p>Change <code>username</code> in the code, notice that it will fetch that username and log the output to the console.</p>
<p>This is closures once again. <code>username</code> is defined inside the <em>outer</em> function, but <code>useEffect</code>'s <em>inner</em> function actually uses it.</p>
<h2 id="summary">Summary</h2>
<ol>
<li>Functions are values, too.</li>
<li>Functions can return other functions.</li>
<li>An outer function's variables are still accessible to its inner function, <em>even after the outer has passed on</em>.</li>
<li>Those variables are also known as <em>state</em>.</li>
<li>Therefore, closures can also be called <em>stateful</em> functions.</li>
</ol>
<h2 id="wantfreecoaching">Want Free Coaching?</h2>
<p>If you'd like to schedule a <strong>free</strong> 15-30 minute call to discuss Front-End development questions regarding code, interviews, career, or anything else <a href="https://twitter.com/yazeedBee">follow me on Twitter and DM me</a>.</p>
<p>After that if you enjoy our first meeting, we can discuss an ongoing coaching relationship that'll help you reach your Front-End development goals!</p>
<h2 id="thanksforreading">Thanks for reading</h2>
<p>For more content like this, check out <a href="https://yazeedb.com">https://yazeedb.com!</a></p>
<p>Until next time!</p>
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
