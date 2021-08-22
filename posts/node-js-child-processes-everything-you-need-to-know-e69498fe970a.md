---
card: "https://cdn-media-1.freecodecamp.org/images/1*I56pPhzO1VQw8SIsv8wYNA.png"
tags: [Nodejs]
description: "Single-threaded, non-blocking performance in Node.js works gr"
author: "Milad E. Fahmy"
title: "Node.js Child Processes: Everything you need to know"
created: "2021-08-16T10:23:33+02:00"
modified: "2021-08-16T10:23:33+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-nodejs tag-javascript tag-web-development tag-programming tag-software-development ">
<header class="post-full-header">
<h1 class="post-full-title">Node.js Child Processes: Everything you need to know</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*I56pPhzO1VQw8SIsv8wYNA.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*I56pPhzO1VQw8SIsv8wYNA.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*I56pPhzO1VQw8SIsv8wYNA.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*I56pPhzO1VQw8SIsv8wYNA.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*I56pPhzO1VQw8SIsv8wYNA.png" alt="Node.js Child Processes: Everything you need to know">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<h4 id="how-to-use-spawn-exec-execfile-and-fork-">How to use spawn(), exec(), execFile(), and fork()<br></h4><blockquote><strong>Update:</strong> This article is now part of my book “Node.js Beyond The Basics”.<br><br>Read the updated version of this content and more about Node at <a href="https://jscomplete.com/g/node-cps" rel="noopener"><strong>jscomplete.com/node-beyond-basics</strong></a>.</blockquote><p>Single-threaded, non-blocking performance in Node.js works great for a single process. But eventually, one process in one CPU is not going to be enough to handle the increasing workload of your application.</p><p>No matter how powerful your server may be, a single thread can only support a limited load.</p><p>The fact that Node.js runs in a single thread does not mean that we can’t take advantage of multiple processes and, of course, multiple machines as well.</p><p>Using multiple processes is the best way to scale a Node application. Node.js is designed for building distributed applications with many nodes. This is why it’s named <em>Node</em>. Scalability is baked into the platform and it’s not something you start thinking about later in the lifetime of an application.</p><blockquote>This article is a write-up of part of <a href="https://www.pluralsight.com/courses/nodejs-advanced" rel="noopener">my Pluralsight course about Node.js</a>. I cover similar content in video format there.</blockquote><p>Please note that you’ll need a good understanding of Node.js <em>events</em> and <em>streams</em> before you read this article. If you haven’t already, I recommend that you read these two other articles before you read this one:</p><p><strong><a href="/news/understanding-node-js-event-driven-architecture-223292fcbc2d/">Understanding Node.js Event-Driven Architecture</a></strong><br><em><a href="/news/understanding-node-js-event-driven-architecture-223292fcbc2d/">Most of Node’s objects — like HTTP requests, responses, and streams — implement the EventEmitter module so they can…</a></em></p><p><a href="https://medium.freecodecamp.com/node-js-streams-everything-you-need-to-know-c9141306be93" rel="noopener"><strong>Streams: Everything you need to know</strong></a><br><em><a href="/news/node-js-streams-everything-you-need-to-know-c9141306be93/">Node.js streams have a reputation for being hard to work with, and even harder to understand. Well I’ve got good news…</a></em></p><h3 id="the-child-processes-module">The Child Processes Module</h3><p>We can easily spin a child process using Node’s <code>child_process</code> module and those child processes can easily communicate with each other with a messaging system.</p><p>The <code>child_process</code> module enables us to access Operating System functionalities by running any system command inside a, well, child process.</p><p>We can control that child process input stream, and listen to its output stream. We can also control the arguments to be passed to the underlying OS command, and we can do whatever we want with that command’s output. We can, for example, pipe the output of one command as the input to another (just like we do in Linux) as all inputs and outputs of these commands can be presented to us using <a href="https://medium.freecodecamp.com/node-js-streams-everything-you-need-to-know-c9141306be93" rel="noopener">Node.js streams</a>.</p><p><em>Note that examples I’ll be using in this article are all Linux-based. On Windows, you need to switch the commands I use with their Windows alternatives.</em></p><p>There are four different ways to create a child process in Node: <code>spawn()</code>, <code>fork()</code>, <code>exec()</code>, and <code>execFile()</code>.</p><p>We’re going to see the differences between these four functions and when to use each.</p><h4 id="spawned-child-processes">Spawned Child Processes</h4><p>The <code>spawn</code> function launches a command in a new process and we can use it to pass that command any arguments. For example, here’s code to spawn a new process that will execute the <code>pwd</code> command.</p><pre><code>const { spawn } = require('child_process');
const child = spawn('pwd');</code></pre><p>We simply destructure the <code>spawn</code> function out of the <code>child_process</code> module and execute it with the OS command as the first argument.</p><p>The result of executing the <code>spawn</code> function (the <code>child</code> object above) is a <code>ChildProcess</code> instance, which implements the <a href="https://medium.freecodecamp.com/understanding-node-js-event-driven-architecture-223292fcbc2d" rel="noopener">EventEmitter API</a>. This means we can register handlers for events on this child object directly. For example, we can do something when the child process exits by registering a handler for the <code>exit</code> event:</p><pre><code class="language-js">child.on('exit', function (code, signal) {
console.log('child process exited with ' +
`code ${code} and signal ${signal}`);
});</code></pre><p>The handler above gives us the exit <code>code</code> for the child process and the <code>signal</code>, if any, that was used to terminate the child process. This <code>signal</code> variable is null when the child process exits normally.</p><p>The other events that we can register handlers for with the <code>ChildProcess</code> instances are <code>disconnect</code>, <code>error</code>, <code>close</code>, and <code>message</code>.</p><ul><li>The <code>disconnect</code> event is emitted when the parent process manually calls the <code>child.disconnect</code> function.</li><li>The <code>error</code> event is emitted if the process could not be spawned or killed.</li><li>The <code>close</code> event is emitted when the <code>stdio</code> streams of a child process get closed.</li><li>The <code>message</code> event is the most important one. It’s emitted when the child process uses the <code>process.send()</code> function to send messages. This is how parent/child processes can communicate with each other. We’ll see an example of this below.</li></ul><p>Every child process also gets the three standard <code>stdio</code> streams, which we can access using <code>child.stdin</code>, <code>child.stdout</code>, and <code>child.stderr</code>.</p><p>When those streams get closed, the child process that was using them will emit the <code>close</code> event. This <code>close</code> event is different than the <code>exit</code> event because multiple child processes might share the same <code>stdio</code> streams and so one child process exiting does not mean that the streams got closed.</p><p>Since all streams are event emitters, we can listen to different events on those <code>stdio</code> streams that are attached to every child process. Unlike in a normal process though, in a child process, the <code>stdout</code>/<code>stderr</code> streams are readable streams while the <code>stdin</code> stream is a writable one. This is basically the inverse of those types as found in a main process. The events we can use for those streams are the standard ones. Most importantly, on the readable streams, we can listen to the <code>data</code> event, which will have the output of the command or any error encountered while executing the command:</p><pre><code class="language-js">child.stdout.on('data', (data) =&gt; {
console.log(`child stdout:\n${data}`);
});
child.stderr.on('data', (data) =&gt; {
console.error(`child stderr:\n${data}`);
});</code></pre><p>The two handlers above will log both cases to the main process <code>stdout</code> and <code>stderr</code>. When we execute the <code>spawn</code> function above, the output of the <code>pwd</code> command gets printed and the child process exits with code <code>0</code>, which means no error occurred.</p><p>We can pass arguments to the command that’s executed by the <code>spawn</code> function using the second argument of the <code>spawn</code> function, which is an array of all the arguments to be passed to the command. For example, to execute the <code>find</code> command on the current directory with a <code>-type f</code> argument (to list files only), we can do:</p><pre><code class="language-js">const child = spawn('find', ['.', '-type', 'f']);</code></pre><p>If an error occurs during the execution of the command, for example, if we give find an invalid destination above, the <code>child.stderr</code> <code>data</code> event handler will be triggered and the <code>exit</code> event handler will report an exit code of <code>1</code>, which signifies that an error has occurred. The error values actually depend on the host OS and the type of error.</p><p>A child process <code>stdin</code> is a writable stream. We can use it to send a command some input. Just like any writable stream, the easiest way to consume it is using the <code>pipe</code> function. We simply pipe a readable stream into a writable stream. Since the main process <code>stdin</code> is a readable stream, we can pipe that into a child process <code>stdin</code> stream. For example:</p><pre><code class="language-js">const { spawn } = require('child_process');
const child = spawn('wc');
process.stdin.pipe(child.stdin)
child.stdout.on('data', (data) =&gt; {
console.log(`child stdout:\n${data}`);
const find = spawn('find', ['.', '-type', 'f']);
const wc = spawn('wc', ['-l']);
find.stdout.pipe(wc.stdin);
wc.stdout.on('data', (data) =&gt; {
console.log(`Number of files ${data}`);
});</code></pre><p>I added the <code>-l</code> argument to the <code>wc</code> command to make it count only the lines. When executed, the code above will output a count of all files in all directories under the current one.</p><h4 id="shell-syntax-and-the-exec-function">Shell Syntax and the exec function</h4><p>By default, the <code>spawn</code> function does not create a <em>shell</em> to execute the command we pass into it. This makes it slightly more efficient than the <code>exec</code> function, which does create a shell. The <code>exec</code> function has one other major difference. It <em>buffers</em> the command’s generated output and passes the whole output value to a callback function (instead of using streams, which is what <code>spawn</code> does).</p><p>Here’s the previous <code>find | wc </code>example implemented with an <code>exec</code> function.</p><pre><code class="language-js">const { exec } = require('child_process');
exec('find . -type f | wc -l', (err, stdout, stderr) =&gt; {
if (err) {
console.error(`exec error: ${err}`);
return;
}
console.log(`Number of files ${stdout}`);
});</code></pre><p>Since the <code>exec</code> function uses a shell to execute the command, we can use the <em>shell syntax</em> directly here making use of the shell <em>pipe</em> feature.</p><p>Note that using the shell syntax comes at a <a href="https://blog.liftsecurity.io/2014/08/19/Avoid-Command-Injection-Node.js/" rel="noopener">security risk</a> if you’re executing any kind of dynamic input provided externally. A user can simply do a command injection attack using shell syntax characters like ; and $ (for example, <code>command + ’; rm -rf ~’</code> )</p><p>The <code>exec</code> function buffers the output and passes it to the callback function (the second argument to <code>exec</code>) as the <code>stdout</code> argument there. This <code>stdout</code> argument is the command’s output that we want to print out.</p><p>The <code>exec</code> function is a good choice if you need to use the shell syntax and if the size of the data expected from the command is small. (Remember, <code>exec</code> will buffer the whole data in memory before returning it.)</p><p>The <code>spawn</code> function is a much better choice when the size of the data expected from the command is large, because that data will be streamed with the standard IO objects.</p><p>We can make the spawned child process inherit the standard IO objects of its parents if we want to, but also, more importantly, we can make the <code>spawn</code> function use the shell syntax as well. Here’s the same <code>find | wc</code> command implemented with the <code>spawn</code> function:</p><pre><code class="language-js">const child = spawn('find . -type f | wc -l', {
stdio: 'inherit',
shell: true
});</code></pre><p>Because of the <code>stdio: 'inherit'</code> option above, when we execute the code, the child process inherits the main process <code>stdin</code>, <code>stdout</code>, and <code>stderr</code>. This causes the child process data events handlers to be triggered on the main <code>process.stdout</code> stream, making the script output the result right away.</p><p>Because of the <code>shell: true</code> option above, we were able to use the shell syntax in the passed command, just like we did with <code>exec</code>. But with this code, we still get the advantage of the streaming of data that the <code>spawn</code> function gives us. <em>This is really the best of both worlds.</em></p><p>There are a few other good options we can use in the last argument to the <code>child_process</code> functions besides <code>shell</code> and <code>stdio</code>. We can, for example, use the <code>cwd</code> option to change the working directory of the script. For example, here’s the same count-all-files example done with a <code>spawn</code> function using a shell and with a working directory set to my Downloads folder. The <code>cwd</code> option here will make the script count all files I have in <code>~/Downloads</code>:</p><pre><code class="language-js">const child = spawn('find . -type f | wc -l', {
stdio: 'inherit',
shell: true,
cwd: '/Users/samer/Downloads'
});</code></pre><p>Another option we can use is the <code>env</code> option to specify the environment variables that will be visible to the new child process. The default for this option is <code>process.env</code> which gives any command access to the current process environment. If we want to override that behavior, we can simply pass an empty object as the <code>env</code> option or new values there to be considered as the only environment variables:</p><pre><code class="language-js">const child = spawn('echo $ANSWER', {
stdio: 'inherit',
shell: true,
env: { ANSWER: 42 },
});</code></pre><p>The echo command above does not have access to the parent process’s environment variables. It can’t, for example, access <code>$HOME</code>, but it can access <code>$ANSWER</code> because it was passed as a custom environment variable through the <code>env</code> option.</p><p>One last important child process option to explain here is the <code>detached</code> option, which makes the child process run independently of its parent process.</p><p>Assuming we have a file <code>timer.js</code> that keeps the event loop busy:</p><pre><code class="language-js">setTimeout(() =&gt; {
// keep the event loop busy
}, 20000);</code></pre><p>We can execute it in the background using the <code>detached</code> option:</p><pre><code class="language-js">const { spawn } = require('child_process');
const child = spawn('node', ['timer.js'], {
detached: true,
stdio: 'ignore'
});
spawnSync,
execSync,
execFileSync,
} = require('child_process');</code></pre><p>Those synchronous versions are potentially useful when trying to simplify scripting tasks or any startup processing tasks, but they should be avoided otherwise.</p><h4 id="the-fork-function">The fork() function</h4><p>The <code>fork</code> function is a variation of the <code>spawn</code> function for spawning node processes. The biggest difference between <code>spawn</code> and <code>fork</code> is that a communication channel is established to the child process when using <code>fork</code>, so we can use the <code>send</code> function on the forked process along with the global <code>process</code> object itself to exchange messages between the parent and forked processes. We do this through the <code>EventEmitter</code> module interface. Here’s an example:</p><p>The parent file, <code>parent.js</code>:</p><pre><code class="language-js">const { fork } = require('child_process');
const forked = fork('child.js');
forked.on('message', (msg) =&gt; {
console.log('Message from child', msg);
});
forked.send({ hello: 'world' });</code></pre><p>The child file, <code>child.js</code>:</p><pre><code class="language-js">process.on('message', (msg) =&gt; {
console.log('Message from parent:', msg);
});
let counter = 0;
setInterval(() =&gt; {
process.send({ counter: counter++ });
const longComputation = () =&gt; {
let sum = 0;
for (let i = 0; i &lt; 1e9; i++) {
sum += i;
};
return sum;
};
const server = http.createServer();
server.on('request', (req, res) =&gt; {
if (req.url === '/compute') {
const sum = longComputation();
return res.end(`Sum is ${sum}`);
} else {
res.end('Ok')
}
});
server.listen(3000);</code></pre><p>This program has a big problem; when the the <code>/compute</code> endpoint is requested, the server will not be able to handle any other requests because the event loop is busy with the long for loop operation.</p><p>There are a few ways with which we can solve this problem depending on the nature of the long operation but one solution that works for all operations is to just move the computational operation into another process using <code>fork</code>.</p><p>We first move the whole <code>longComputation</code> function into its own file and make it invoke that function when instructed via a message from the main process:</p><p>In a new <code>compute.js</code> file:</p><pre><code class="language-js">const longComputation = () =&gt; {
let sum = 0;
for (let i = 0; i &lt; 1e9; i++) {
sum += i;
};
return sum;
};
process.on('message', (msg) =&gt; {
const sum = longComputation();
process.send(sum);
});</code></pre><p>Now, instead of doing the long operation in the main process event loop, we can <code>fork</code> the <code>compute.js</code> file and use the messages interface to communicate messages between the server and the forked process.</p><pre><code class="language-js">const http = require('http');
const { fork } = require('child_process');
const server = http.createServer();
server.on('request', (req, res) =&gt; {
if (req.url === '/compute') {
const compute = fork('compute.js');
compute.send('start');
compute.on('message', sum =&gt; {
res.end(`Sum is ${sum}`);
});
} else {
res.end('Ok')
}
});
server.listen(3000);</code></pre><p>When a request to <code>/compute</code> happens now with the above code, we simply send a message to the forked process to start executing the long operation. The main process’s event loop will not be blocked.</p><p>Once the forked process is done with that long operation, it can send its result back to the parent process using <code>process.send</code>.</p><p>In the parent process, we listen to the <code>message</code> event on the forked child process itself. When we get that event, we’ll have a <code>sum</code> value ready for us to send to the requesting user over http.</p><p>The code above is, of course, limited by the number of processes we can fork, but when we execute it and request the long computation endpoint over http, the main server is not blocked at all and can take further requests.</p><p>Node’s <code>cluster</code> module, which is the topic of my next article, is based on this idea of child process forking and load balancing the requests among the many forks that we can create on any system.</p><p>That’s all I have for this topic. Thanks for reading! Until next time!</p><p>Learning React or Node? Checkout my books:</p><ul><li><a href="http://amzn.to/2peYJZj" rel="noopener">Learn React.js by Building Games</a></li><li><a href="http://amzn.to/2FYfYru" rel="noopener">Node.js Beyond the Basics</a></li></ul>
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
