---
card: "https://cdn-media-1.freecodecamp.org/images/1*mtP3Ak9ndB1jJo0mauPu5w.jpeg"
tags: [JavaScript]
description: "There are occasions when running a Python/Ruby/PHP shell scri"
author: "Milad E. Fahmy"
title: "How to integrate a Python/Ruby/PHP shell script with Node.js using child_process.spawn"
created: "2021-08-16T15:39:34+02:00"
modified: "2021-08-16T15:39:34+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-python tag-nodejs tag-tech tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">How to integrate a Python/Ruby/PHP shell script with Node.js using child_process.spawn</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*mtP3Ak9ndB1jJo0mauPu5w.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*mtP3Ak9ndB1jJo0mauPu5w.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*mtP3Ak9ndB1jJo0mauPu5w.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*mtP3Ak9ndB1jJo0mauPu5w.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*mtP3Ak9ndB1jJo0mauPu5w.jpeg" alt="How to integrate a Python/Ruby/PHP shell script with Node.js using child_process.spawn">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>There are occasions when running a Python/Ruby/PHP shell script from Node.js is necessary. This post looks at best practices around leveraging child_process.spawn to encapsulate this call in Node.js/JavaScript.</p><p>The goal here is to have an interoperability layer between Node.js and an outside shell. This is a quick workaround if some other part of your system isn’t developed in JavaScript.</p><p>We’ll use <code>spawn</code> over <code>exec</code> because we’re talking about passing data and potentially large amounts of it. To understand the difference between <code>child_process.spawn</code> and <code>child_process.exec</code> see “<a href="https://www.hacksparrow.com/difference-between-spawn-and-exec-of-node-js-child_process.html" rel="noopener">Difference between spawn and exec of Node.js child_process</a>”.</p><p>The long and short of it is use <code>exec</code> for small amounts of data (under 200k) using a Buffer interface and <code>spawn</code> for larger amounts using a stream interface.</p><p><code>spawn</code> has a more verbose syntax for some of the use-cases we’ll look at. It’s more serviceable for integrating with Ruby/Python/PHP since we might get more data than a couple of lines of text.</p><p>Full examples <a href="https://github.com/HugoDF/node-run-python" rel="noopener">github.com/HugoDF/node-run-python</a>.</p><p>The following examples contain 2 sections:</p><ul><li>The part that actually runs the shell command, usually a function called <code>run</code>, and</li><li>an IIFE (“immediately invoked function expression”) that actually calls it, <code>(async () =&gt; { await run() }</code>)(). This IIFE is a nice pattern enabled by async/await (s<a href="https://codewithhugo.com/async-js/#async-await" rel="noopener">ee Async JS: history, patterns and gotc</a>has) but it’s just there for illustration purposes since it represents the call to the wrapp<code>ed sp</code>awn call from another part of your application.</li></ul><h3 id="call-a-shell-command-and-log-it">Call a shell command and log it</h3><p>Using <code>spawn</code> is overkill in this situation since echo is only going to return what’s passed to it.</p><p>The example is pretty self-explanatory and shows how to use <code>child_process.spawn</code> to “shell out” and read that data back.</p><p><code>spawn</code> takes the executable to call as the first parameter and optionally an array of options/parameters for the executable as the second parameter.</p><pre><code class="language-js">const { spawn } = require('child_process');
function run() {
const process = spawn('echo', ['foo']);
process.stdout.on(
'data',
(data) =&gt; console.log(data.toString())
);
}
(() =&gt; {
try {
run()
// process.exit(0)
} catch (e) {
console.error(e.stack);
process.exit(1);
}
})();</code></pre><h3 id="call-python-for-its-version">Call Python for its version</h3><p>We’ll move quite quickly to showcase how we would do something similar to the above with Python. Note again how <code>--version</code> is passed inside of an array.</p><p>We also create a nice logger to differentiate between stdout and stderr and bind to them. Since spawn returns an instance which has <code>stdout</code> and <code>stderr</code> event emitters, we can bind our <code>logOutput</code> function to <code>'data'</code> event using <code>.on('data', () =&gt; { /* our callback function */</code> }).</p><p>Another interesting tidbit is that <code>python</code> <code>--version</code> outputs the version to <code>stderr</code>. The inconsistencies around whether *NIX executables use exit codes, stderr and stdout on success/error are a quirk that we’ll have to bear in mind while integrating Python/Ruby/other with Node.js.</p><pre><code class="language-js">const { spawn } = require('child_process')
const logOutput = (name) =&gt; (data) =&gt; console.log(`[${name}] ${data.toString()}`)
function run() {
const process = spawn('python', ['--version']);
process.stdout.on(
'data',
logOutput('stdout')
);
process.stderr.on(
'data',
logOutput('stderr')
);
}
(() =&gt; {
try {
run()
process.exit(0)
} catch (e) {
console.error(e.stack);
process.exit(1);
}
})();</code></pre><p>Output:</p><pre><code>$ node run.js</code></pre><pre><code>[stderr] Python 2.7.13</code></pre><h3 id="call-a-python-script-from-node">Call a Python script from Node</h3><p>We’ll now run a fully-fledged Python script (although it could just as well be Ruby, PHP, shell etc.) from Node.js.</p><p>This is <code>script.py</code>, it just logs out <code>argv</code> (the “argument vector”, ie. <code>['path/to/executable', /* command line arguments ]</code>)</p><pre><code class="language-py">import sys
print(sys.argv)</code></pre><p>Like in the previous example, we’ll just call spawn with <code>python</code> with the path to the Python script (<code>./script.py</code>) in the second parameter.</p><p>Here comes another gotcha of integrating scripts in this fashion. In this example, the path to the script is based on the working directory from which <code>node</code> is called.</p><p>There is a workaround, of course, using the <code>path</code> module and <code>__dirname</code>, which for example could resolve a <code>other-script.py</code> co-located with the JavaScript file/Node module calling <code>spawn</code> using: <code>require('path').resolve(__dirname, './other-script.py')</code>.</p><pre><code class="language-js">const { spawn } = require('child_process')
const logOutput = (name) =&gt; (data) =&gt; console.log(`[${name}] ${data.toString()}`)
function run() {
const process = spawn('python', ['./script.py']);
process.stdout.on(
'data',
logOutput('stdout')
);
process.stderr.on(
'data',
logOutput('stderr')
);
}
(() =&gt; {
try {
run()
// process.exit(0)
} catch (e) {
console.error(e.stack);
process.exit(1);
}
})();</code></pre><p>Output:</p><pre><code class="language-bash">node run.js
\[stdout\] ['./script.py']</code></pre><h3 id="pass-arguments-to-a-python-script-from-node-js-using-child_process-spawn">Pass arguments to a Python script from Node.js using child_process.spawn</h3><p>The next step of integration is to be able to pass data from the Node/JavaScript code to the Python script.</p><p>In order to do this, we’ll just pass more shell arguments using the arguments array (the second parameter to <code>spawn</code>).</p><pre><code class="language-js">const { spawn } = require('child_process')
const logOutput = (name) =&gt; (data) =&gt; console.log(`[${name}] ${data.toString()}`)
function run() {
const process = spawn('python', ['./script.py', 'my', 'args']);
process.stdout.on(
'data',
logOutput('stdout')
);
process.stderr.on(
'data',
logOutput('stderr')
);
}
(() =&gt; {
try {
run()
// process.exit(0)
} catch (e) {
console.error(e.stack);
process.exit(1);
}
})();</code></pre><p>Our <code>script.py</code> will also just log out the <code>argv</code> except for the first element (which is the path to the script).</p><pre><code class="language-py">import sys
print(sys.argv)[1:]</code></pre><p>Here’s the output:</p><pre><code class="language-bash">node run.js
\[stdout\] ['my', 'args']</code></pre><h3 id="read-child_process-spawn-output-from-node-js">Read child_process.spawn output from Node.js</h3><p>It’s nice to be able to pass data down to the Python script. We’re still not able to get the data from the Python script back in a format that we’re able to leverage in our Node.js/JavaScript application.</p><p>The solution to this is to wrap the whole <code>spawn</code> -calling function into a Promise. This allows us to decide when we want to <code>resolve</code> or <code>reject</code>.</p><p>To keep track of the Python script’s output stream(s), we manually buffer the output using arrays (one for <code>stdout</code> and another for <code>stderr</code>).</p><p>We also add a listener for <code>'exit'</code> using <code>spawn().on('exit', (code, signal) =&gt; { /* probably call resolve() */</code> }). This is where we will tend <code>to reso</code>l<code>ve/rej</code>ect the Promise’s value(s) from the Python/Ruby/other script.</p><pre><code class="language-js">const { spawn } = require('child_process')
const logOutput = (name) =&gt; (data) =&gt; console.log(`[${name}] ${data}`)
function run() {
return new Promise((resolve, reject) =&gt; {
const process = spawn('python', ['./script.py', 'my', 'args']);
const out = []
process.stdout.on(
'data',
(data) =&gt; {
out.push(data.toString());
logOutput('stdout')(data);
}
);
const err = []
process.stderr.on(
'data',
(data) =&gt; {
err.push(data.toString());
logOutput('stderr')(data);
}
);
process.on('exit', (code, signal) =&gt; {
logOutput('exit')(`${code} (${signal})`)
resolve(out);
});
});
}
(async () =&gt; {
try {
const output = await run()
logOutput('main')(output)
process.exit(0)
} catch (e) {
console.error(e.stack);
process.exit(1);
}
})();</code></pre><p>Output:</p><pre><code class="language-bash">node run.js
\[stdout\] ['my', 'args']
\[main\] ['my', 'args']</code></pre><h3 id="handle-errors-from-child_process-spawn">Handle errors from child_process.spawn</h3><p>Next up we need to handle errors from the Python/Ruby/shell script at the Node.js/JavaScript level.</p><p>The main way that a *NIX executable signals that it errored are by using a <code>1</code> exit code. That’s why the <code>.on('exit'</code> handler now does a check against <code>code === 0</code> before deciding whether to resolve or reject with value(s).</p><pre><code class="language-js">const { spawn } = require('child_process')
const logOutput = (name) =&gt; (data) =&gt; console.log(`[${name}] ${data}`)
function run() {
return new Promise((resolve, reject) =&gt; {
const process = spawn('python', ['./script.py', 'my', 'args']);
const out = []
process.stdout.on(
'data',
(data) =&gt; {
out.push(data.toString());
logOutput('stdout')(data);
}
);
const err = []
process.stderr.on(
'data',
(data) =&gt; {
err.push(data.toString());
logOutput('stderr')(data);
}
);
process.on('exit', (code, signal) =&gt; {
logOutput('exit')(`${code} (${signal})`)
if (code === 0) {
resolve(out);
} else {
reject(new Error(err.join('\n')))
}
});
});
}
(async () =&gt; {
try {
const output = await run()
logOutput('main')(output)
process.exit(0)
} catch (e) {
console.error('Error during script execution ', e.stack);
process.exit(1);
}
})();</code></pre><p>Output:</p><pre><code class="language-bash">node run.js
[stderr] Traceback (most recent call last):
File "./script.py", line 3, in &lt;module&gt;
print(sy.argv)[1:]
NameError: name 'sy' is not defined
Error during script execution Error: Traceback (most recent call last):
File "./script.py", line 3, in &lt;module&gt;
print(sy.argv)[1:]
NameError: name 'sy' is not defined
at ChildProcess.process.on (/app/run.js:33:16)
at ChildProcess.emit (events.js:182:13)
at Process.ChildProcess._handle.onexit (internal/child_process.js:240:12)</code></pre><h3 id="pass-structured-data-from-python-ruby-to-node-js-javascript">Pass structured data from Python/Ruby to Node.js/JavaScript</h3><p>The final step to full integration between Ruby/Python/PHP/shell scripts and our Node.js/JavaScript application layer is to be able to pass structured data back from the script up to Node.js/JavaScript.</p><p>The simplest structured data format that tends to be available in both Python/Ruby/PHP and Node.js/JavaScript is JSON.</p><p>In the Python script, we print the <code>json.dumps()</code> output of a dictionary, see <code>script.py</code>:</p><pre><code class="language-py">import sys
import json
send_message_back = {
'arguments': sys.argv[1:],
'message': """Hello,
This is my message.
To the world"""
}
print(json.dumps(send_message_back))</code></pre><p>In Node, we add some JSON-parsing logic (using <code>JSON.parse</code>) in the <code>'exit'</code> handler.</p><p>A gotcha at this point is if, for example <code>JSON.parse()</code> fails due to badly-formed JSON, we need to propagate that error up. Hence the try/catch where the <code>catch</code> clause <code>reject</code>-s the potential error: <code>try { resolve(JSON.parse(out[0])) } catch(e) { reject(e) }</code>.</p><pre><code class="language-js">const { spawn } = require('child_process')
const logOutput = (name) =&gt; (message) =&gt; console.log(`[${name}] ${message}`)
function run() {
return new Promise((resolve, reject) =&gt; {
const process = spawn('python', ['./script.py', 'my', 'args']);
const out = []
process.stdout.on(
'data',
(data) =&gt; {
out.push(data.toString());
logOutput('stdout')(data);
}
);
const err = []
process.stderr.on(
'data',
(data) =&gt; {
err.push(data.toString());
logOutput('stderr')(data);
}
);
process.on('exit', (code, signal) =&gt; {
logOutput('exit')(`${code} (${signal})`)
if (code !== 0) {
reject(new Error(err.join('\n')))
return
}
try {
resolve(JSON.parse(out[0]));
} catch(e) {
reject(e);
}
});
});
}
(async () =&gt; {
try {
const output = await run()
logOutput('main')(output.message)
process.exit(0)
} catch (e) {
console.error('Error during script execution ', e.stack);
process.exit(1);
}
})();</code></pre><p>Output:</p><pre><code class="language-bash">node run.js
[stdout] {"message": "Hello,\nThis is my message.\n\nTo the world", "arguments": ["my", "args"]}
[main] Hello,
This is my message.
To the world</code></pre><p>That’s it! Thanks for reading :)</p><p>I’ve got mentoring spots open at <a href="https://mentorcruise.com/mentor/HugoDiFrancesco/" rel="noopener">https://mentorcruise.com/mentor/HugoDiFrancesco/</a>. Do that if you want Node.js/JavaScript/career mentoring or feel free to tweet at me <a href="https://twitter.com/hugo__df" rel="noopener">@hugo__df</a></p><p>And read more of my articles on <a href="https://www.codewithhugo.com">codewithhugo.com</a></p>
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
