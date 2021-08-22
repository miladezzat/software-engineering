---
card: "https://cdn-media-1.freecodecamp.org/images/1*C7ICI8d7aAna_zTZvZ64MA.png"
tags: [Nodejs]
description: Scalability in Node.js is not an afterthought. It’s something
author: "Milad E. Fahmy"
title: "Scaling Node.js Applications"
created: "2021-08-15T19:51:23+02:00"
modified: "2021-08-15T19:51:23+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-nodejs tag-scaling tag-distributed-systems tag-javascript ">
<header class="post-full-header">
<h1 class="post-full-title">Scaling Node.js Applications</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*C7ICI8d7aAna_zTZvZ64MA.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*C7ICI8d7aAna_zTZvZ64MA.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*C7ICI8d7aAna_zTZvZ64MA.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*C7ICI8d7aAna_zTZvZ64MA.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*C7ICI8d7aAna_zTZvZ64MA.png" alt="Scaling Node.js Applications">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<h4 id="everything-you-need-to-know-about-node-js-built-in-tools-for-scalability">Everything you need to know about Node.js built-in tools for scalability<br></h4>
<blockquote><strong>Update:</strong> This article is now part of my book “Node.js Beyond The Basics”.</blockquote>
<blockquote>Read the updated version of this content and more about Node at <a href="https://jscomplete.com/g/scaling-node" rel="noopener"><strong>jscomplete.com/node-beyond-basics</strong></a>.</blockquote>
<p>Scalability in Node.js is not an afterthought. It’s something that’s baked into the core of the runtime. Node is named Node to emphasize the idea that a Node application should comprise multiple small distributed <em>nodes</em> that communicate with each other.</p>
<p>Are you running multiple nodes for your Node applications? Are you running a Node process on every CPU core of your production machines and load balancing all the requests among them? Did you know that Node has a built-in module to help with that?</p>
<p>Node’s <em>cluster</em> module not only provides an out-of-the-box solution to utilizing the full CPU power of a machine, but it also helps with increasing the availability of your Node processes and provides an option to restart the whole application with a zero downtime. This article covers all that goodness and more.</p>
<blockquote>This article is a write-up of part of <a href="https://www.pluralsight.com/courses/nodejs-advanced" rel="noopener">my Pluralsight course about Node.js</a>. I cover similar content in video format there.</blockquote>
<h3 id="strategies-of-scalability">Strategies of Scalability</h3>
<p>The workload is the most popular reason we scale our applications, but it’s not the only reason. We also scale our applications to increase their availability and tolerance to failure.</p>
<p>There are mainly three different things we can do to scale an application:</p>
<h4 id="1-cloning">1 — Cloning</h4>
<p>The easiest thing to do to scale a big application is to clone it multiple times and have each cloned instance handle part of the workload (with a load balancer, for example). This does not cost a lot in term of development time and it’s highly effective. This strategy is the minimum you should do and Node.js has the built-in module, <code>cluster</code>, to make it easier for you to implement the cloning strategy on a single server.</p>
<h4 id="2-decomposing">2 — Decomposing</h4>
<p>We can also scale an application by <a href="https://builttoadapt.io/whats-your-decomposition-strategy-e19b8e72ac8f" rel="noopener">decomposing</a> it based on functionalities and services. This means having multiple, different applications with different code bases and sometimes with their own dedicated databases and User Interfaces.</p>
<p>This strategy is commonly associated with the term <em>Microservice</em>, where micro indicates that those services should be as small as possible, but in reality, the size of the service is not what’s important but rather the enforcement of loose coupling and high cohesion between services. The implementation of this strategy is often not easy and could result in long-term unexpected problems, but when done right the advantages are great.</p>
<h4 id="3-splitting">3 — Splitting</h4>
<p>We can also split the application into multiple instances where each instance is responsible for only a part of the application’s data. This strategy is often named <em>horizontal partitioning</em>, or <em>sharding</em>, in databases. Data partitioning requires a lookup step before each operation to determine which instance of the application to use. For example, maybe we want to partition our users based on their country or language. We need to do a lookup of that information first.</p>
<p>Successfully scaling a big application should eventually implement all three strategies. Node.js makes it easy to do so but I am going to focus on the cloning strategy in this article and explore the built-in tools available in Node.js to implement it.</p>
<p>Please note that you need a good understanding of Node.js <em>child processes </em>before reading this article. If you haven’t already, I recommend that you read this other article first:</p>
<p><a href="https://medium.freecodecamp.org/node-js-child-processes-everything-you-need-to-know-e69498fe970a" rel="noopener"><strong>Node.js Child Processes: Everything you need to know</strong></a><br><a href="https://medium.freecodecamp.org/node-js-child-processes-everything-you-need-to-know-e69498fe970a" rel="noopener"><em>How to use spawn(), exec(), execFile(), and fork()</em>medium.freecodecamp.org</a></p>
<h3 id="the-cluster-module">The Cluster Module</h3>
<p>The cluster module can be used to enable load balancing over an environment’s multiple CPU cores. It’s based on the child process module <code>fork</code> method and it basically allows us to fork the main application process as many times as we have CPU cores. It will then take over and load balance all requests to the main process across all forked processes.</p>
<p>The cluster module is Node’s helper for us to implement the cloning scalability strategy, but only on one machine. When you have a big machine with a lot of resources or when it’s easier and cheaper to add more resources to one machine rather than adding new machines, the cluster module is a great option for a really quick implementation of the cloning strategy.</p>
<p>Even small machines usually have multiple cores and even if you’re not worried about the load on your Node server, you should enable the cluster module anyway to increase your server availability and fault-tolerance. It’s a simple step and when using a process manager like PM2, for example, it becomes as simple as just providing an argument to the launch command!</p>
<p>But let me tell you how to use the cluster module natively and explain how it works.</p>
<p>The structure of what the cluster module does is simple. We create a <em>master </em>process and that master process forks a number of <em>worker</em> processes and manages them. Each worker process represents an instance of the application that we want to scale. All incoming requests are handled by the master process, which is the one that decides which worker process should handle an incoming request.</p>
<figcaption>Screenshot captured from my Pluralsight course — Advanced Node.js</figcaption>
</figure>
<p>The master process’s job is easy because it actually just uses a <em>round-robin</em> algorithm to pick a worker process. This is enabled by default on all platforms except Windows and it can be globally modified to let the load-balancing be handled by the operation system itself.</p>
<p>The round-robin algorithm distributes the load evenly across all available processes on a rotational basis. The first request is forwarded to the first worker process, the second to the next worker process in the list, and so on. When the end of the list is reached, the algorithm starts again from the beginning.</p>
<p>This is one of the simplest and most used load balancing algorithms. But it’s not the only one. More featured algorithms allow assigning priorities and selecting the least loaded server or the one with the fastest response time.</p>
<h4 id="load-balancing-an-http-server">Load-Balancing an HTTP Server</h4>
<p>Let’s clone and load balance a simple HTTP server using the cluster module. Here’s the simple Node’s hello-world example server slightly modified to simulate some CPU work before responding:</p><pre><code>// server.js
const http = require('http');
const pid = process.pid;
http.createServer((req, res) =&gt; {
for (let i=0; i&lt;1e7; i++); // simulate CPU work
res.end(`Handled by process ${pid}`);
}).listen(8080, () =&gt; {
console.log(`Started process ${pid}`);
});</code></pre>
<p>To verify that the balancer we’re going to create is going to work, I’ve included the process <code>pid</code> in the HTTP response to identify which instance of the application is actually handling a request.</p>
<p>Before we create a cluster to clone this server into multiple workers, let’s do a simple benchmark of how many requests this server can handle per second. We can use the <a href="https://httpd.apache.org/docs/2.4/programs/ab.html" rel="noopener">Apache benchmarking tool</a> for that. After running the simple <code>server.js</code> code above, run this <code>ab</code> command:</p><pre><code>ab -c200 -t10 http://localhost:8080/</code></pre>
<p>This command will test-load the server with 200 concurrent connections for 10 seconds.</p>
<figcaption>Screenshot captured from my Pluralsight course — Advanced Node.js</figcaption>
</figure>
<p>On my machine, the single node server was able to handle about 51 requests per second. Of course, the results here will be different on different platforms and this is a very simplified test of performance that’s not a 100% accurate, but it will clearly show the difference that a cluster would make in a multi-core environment.</p>
<p>Now that we have a reference benchmark, we can scale the application with the cloning strategy using the cluster module.</p>
<p>On the same level as the <code>server.js</code> file above, we can create a new file (<code>cluster.js</code>) for the master process with this content (explanation follows):</p><pre><code class="language-js">// cluster.js
const cluster = require('cluster');
const os = require('os');
if (cluster.isMaster) {
const cpus = os.cpus().length;
console.log(`Forking for ${cpus} CPUs`);
for (let i = 0; i&lt;cpus; i++) {
cluster.fork();
}
} else {
require('./server');
}</code></pre>
<p>In <code>cluster.js</code>, we first required both the <code>cluster</code> module and the <code>os</code> module. We use the <code>os</code> module to read the number of CPU cores we can work with using <code>os.cpus()</code>.</p>
<p>The <code>cluster</code> module gives us the handy Boolean flag <code>isMaster</code> to determine if this <code>cluster.js</code> file is being loaded as a master process or not. The first time we execute this file, we will be executing the master process and that <code>isMaster</code> flag will be set to true. In this case, we can instruct the master process to fork our server as many times as we have CPU cores.</p>
<p>Now we just read the number of CPUs we have using the <code>os</code> module, then with a for loop over that number, we call the <code>cluster.fork</code> method. The for loop will simply create as many workers as the number of CPUs in the system to take advantage of all the available processing power.</p>
<p>When the <code>cluster.fork</code> line is executed from the master process, the current file, <code>cluster.js</code>, is run again, but this time in <em>worker mode</em> with the <code>isMaster</code> flag set to false. <em>There is actually another flag set to true in this case if you need to use it, which is the <code>isWorker</code> flag.</em></p>
<p>When the application runs as a worker, it can start doing the actual work. This is where we need to define our server logic, which, for this example, we can do by requiring the <code>server.js</code> file that we have already.</p>
<p>That’s basically it. That’s how easy it is to take advantage of all the processing power in a machine. To test the cluster, run the <code>cluster.js</code> file:</p>
<figcaption>Screenshot captured from my Pluralsight course — Advanced Node.js</figcaption>
</figure>
<p>I have 8 cores on my machine so it started 8 processes. It’s important to understand that these are completely different Node.js processes. Each worker process here will have its own event loop and memory space.</p>
<p>When we now hit the web server multiple times, the requests will start to get handled by different worker processes with different process ids. The workers will not be exactly rotated in sequence because the cluster module performs some optimizations when picking the next worker, but the load will be somehow distributed among the different worker processes.</p>
<p>We can use the same <code>ab</code> command above to load-test this cluster of processes:</p>
<figcaption>Screenshot captured from my Pluralsight course — Advanced Node.js</figcaption>
</figure>
<p>The cluster I created on my machine was able to handle 181 requests per second in comparison to the 51 requests per second that we got using a single Node process. The performance of this simple application tripled with just a few lines of code.</p>
<h4 id="broadcasting-messages-to-all-workers">Broadcasting Messages to All Workers</h4>
<p>Communicating between the master process and the workers is simple because under the hood the cluster module is just using the <code>child_process.fork</code> API, which means we also have communication channels available between the master process and each worker.</p>
<p>Based on the <code>server.js</code>/<code>cluster.js</code> example above, we can access the list of worker objects using <code>cluster.workers</code>, which is an object that holds a reference to all workers and can be used to read information about these workers. Since we have communication channels between the master process and all workers, to broadcast a message to all them we just need a simple loop over all the workers. For example:</p><pre><code class="language-js">Object.values(cluster.workers).forEach(worker =&gt; {
worker.send(`Hello Worker ${worker.id}`);
});</code></pre>
<p>We simply used <code>Object.values</code> to get an array of all workers from the <code>cluster.workers</code> object. Then, for each worker, we can use the <code>send</code> function to send over any value that we want.</p>
<p>In a worker file, <code>server.js</code> in our example, to read a message received from this master process, we can register a handler for the <code>message</code> event on the global <code>process</code> object. For example:</p><pre><code class="language-js">process.on('message', msg =&gt; {
console.log(`Message from master: ${msg}`);
});</code></pre>
<p>Here is what I see when I test these two additions to the cluster/server example:</p>
<figcaption>Screenshot captured from my Pluralsight course — Advanced Node.js</figcaption>
</figure>
<p>Every worker received a message from the master process. <em>Note how the workers did not start in order.</em></p>
<p>Let’s make this communication example a little bit more practical. Let’s say we want our server to reply with the number of users we have created in our database. We’ll create a mock function that returns the number of users we have in the database and just have it square its value every time it’s called (dream growth):</p><pre><code class="language-js">// **** Mock DB Call
const numberOfUsersInDB = function() {
this.count = this.count || 5;
this.count = this.count * this.count;
return this.count;
}
// ****</code></pre>
<p>Every time <code>numberOfUsersInDB</code> is called, we’ll assume that a database connection has been made. What we want to do here — to avoid multiple DB requests — is to cache this call for a certain period of time, such as 10 seconds. However, we still don’t want the 8 forked workers to do their own DB requests and end up with 8 DB requests every 10 seconds. We can have the master process do just one request and tell all of the 8 workers about the new value for the user count using the communication interface.</p>
<p>In the master process mode, we can, for example, use the same loop to broadcast the users count value to all workers:</p><pre><code class="language-js">// Right after the fork loop within the isMaster=true block
const updateWorkers = () =&gt; {
const usersCount = numberOfUsersInDB();
Object.values(cluster.workers).forEach(worker =&gt; {
worker.send({ usersCount });
});
};
updateWorkers();
setInterval(updateWorkers, 10000);</code></pre>
<p>Here we’re invoking <code>updateWorkers</code> for the first time and then invoking it every 10 seconds using a <code>setInterval</code>. This way, every 10 seconds, all workers will receive the new user count value over the process communication channel and only one database connection will be made.</p>
<p>In the server code, we can use the <code>usersCount</code> value using the same <code>message</code> event handler. We can simply cache that value with a module global variable and use it anywhere we want.</p>
<p>For example:</p><pre><code class="language-js">const http = require('http');
const pid = process.pid;
let usersCount;
http.createServer((req, res) =&gt; {
for (let i=0; i&lt;1e7; i++); // simulate CPU work
res.write(`Handled by process ${pid}\n`);
res.end(`Users: ${usersCount}`);
}).listen(8080, () =&gt; {
console.log(`Started process ${pid}`);
});
process.on('message', msg =&gt; {
usersCount = msg.usersCount;
});</code></pre>
<p>The above code makes the worker web server respond with the cached <code>usersCount</code><strong> </strong>value. If you test the cluster code now, during the first 10 seconds you’ll get “25” as the users count from all workers (and only one DB request would be made). Then after another 10 seconds, all workers would start reporting the new user count, 625 (and only one other DB request would be made).</p>
<p>This is all possible thanks to the communication channels between the master process and all workers.</p>
<h4 id="increasing-server-availability">Increasing Server Availability</h4>
<p>One of the problems in running a single instance of a Node application is that when that instance crashes, it has to be restarted. This means some downtime between these two actions, even if the process was automated as it should be.</p>
<p>This also applies to the case when the server has to be restarted to deploy new code. With one instance, there will be downtime which affects the availability of the system.</p>
<p>When we have multiple instances, the availability of the system can be easily increased with just a few extra lines of code.</p>
<p>To simulate a random crash in the server process, we can simply do a <code>process.exit</code> call inside a timer that fires after a random amount of time:</p><pre><code class="language-js">// In server.js
setTimeout(() =&gt; {
process.exit(1) // death by random timeout
}, Math.random() * 10000);</code></pre>
<p>When a worker process exits like this, the master process will be notified using the <code>exit</code> event on the <code>cluster</code> model object. We can register a handler for that event and just fork a new worker process when any worker process exits.</p>
<p>For example:</p><pre><code class="language-js">// Right after the fork loop within the isMaster=true block
cluster.on('exit', (worker, code, signal) =&gt; {
if (code !== 0 &amp;&amp; !worker.exitedAfterDisconnect) {
console.log(`Worker ${worker.id} crashed. ` +
'Starting a new worker...');
cluster.fork();
}
});</code></pre>
<p>It’s good to add the if condition above to make sure the worker process actually crashed and was not manually disconnected or killed by the master process itself. For example, the master process might decide that we are using too many resources based on the load patterns it sees and it will need to kill a few workers in that case. To do so, we can use the <code>disconnect</code> methods on any worker and, in that case, the <code>exitedAfterDisconnect</code> flag will be set to true. The if statement above will guard to not fork a new worker for that case.</p>
<p>If we run the cluster with the handler above (and the random crash in <code>server.js</code>), after a random number of seconds, workers will start to crash and the master process will immediately fork new workers to increase the availability of the system. You can actually measure the availability using the same <code>ab</code> command and see how many requests the server will not be able to handle overall (because some of the unlucky requests will have to face the crash case and that’s hard to avoid.)</p>
<p>When I tested the code, only 17 requests failed out of over 1800 in the 10-second testing interval with 200 concurrent requests.</p>
<figcaption>Screenshot captured from my Pluralsight course — Advanced Node.js</figcaption>
</figure>
<p>That’s over 99% availability. By just adding a few lines of code, we now don’t have to worry about process crashes anymore. The master guardian will keep an eye on those processes for us.</p>
<h4 id="zero-downtime-restarts">Zero-downtime Restarts</h4>
<p>What about the case when we want to restart all worker processes when, for example, we need to deploy new code?</p>
<p>We have multiple instances running, so instead of restarting them together, we can simply restart them one at a time to allow other workers to continue to serve requests while one worker is being restarted.</p>
<p>Implementing this with the cluster module is easy. Since we don’t want to restart the master process once it’s up, we need a way to send this master process a command to instruct it to start restarting its workers. This is easy on Linux systems because we can simply listen to a process signal like <code>SIGUSR2</code>, which we can trigger by using the <code>kill</code> command on the process id and passing that signal:</p><pre><code class="language-js">// In Node
process.on('SIGUSR2', () =&gt; { ... });
// To trigger that
$ kill -SIGUSR2 PID</code></pre>
<p>This way, the master process will not be killed and we have a way to instruct it to start doing something. <code>SIGUSR2</code> is a proper signal to use here because this will be a user command. If you’re wondering why not <code>SIGUSR1</code>, it’s because Node uses that for its debugger and you want to avoid any conflicts.</p>
<p>Unfortunately, on Windows, these process signal are not supported and we would have to find another way to command the master process to do something. There are some alternatives. We can, for example, use standard input or socket input. Or we can monitor the existence of a <code>process.pid</code> file and watch that for a remove event. But to keep this example simple, we’ll just assume this server is running on a Linux platform.</p>
<p>Node works very well on Windows, but I think it’s a much safer option to host production Node applications on a Linux platform. This is not just because of Node itself, but many other production tools that are much more stable on Linux. This is my personal opinion and feel free to completely ignore it.</p>
<p><em>By the way, on recent versions of Windows, you can actually use a Linux subsystem and it works very well. I’ve tested it myself and it was nothing short of impressive. If you’re developing a Node applications on Windows, check out <a href="https://msdn.microsoft.com/en-us/commandline/wsl/about" rel="noopener">Bash on Windows</a> and give it a try.</em></p>
<p>In our example, when the master process receives the <code>SIGUSR2</code> signal, that means it’s time for it to restart its workers, but we want to do that one worker at a time. This simply means the master process should only restart the next worker when it’s done restarting the current one.</p>
<p>To begin this task, we need to get a reference to all current workers using the <code>cluster.workers</code> object and we can simply just store the workers in an array:</p><pre><code>const workers = Object.values(cluster.workers);</code></pre>
<p>Then, we can create a <code>restartWorker</code> function that receives the index of the worker to be restarted. This way we can do the restarting in sequence by having the function call itself when it’s ready for the next worker. Here’s an example <code>restartWorker</code> function that we can use (explanation follows):</p><pre><code class="language-js">const restartWorker = (workerIndex) =&gt; {
const worker = workers[workerIndex];
if (!worker) return;
worker.on('exit', () =&gt; {
if (!worker.exitedAfterDisconnect) return;
console.log(`Exited process ${worker.process.pid}`);
cluster.fork().on('listening', () =&gt; {
restartWorker(workerIndex + 1);
});
});
worker.disconnect();
};
restartWorker(0);</code></pre>
<p>Inside the <code>restartWorker</code> function, we got a reference to the worker to be restarted and since we will be calling this function recursively to form a sequence, we need a stop condition. When we no longer have a worker to restart, we can just return. We then basically want to disconnect this worker (using <code>worker.disconnect</code>), but before restarting the next worker, we need to fork a new worker to replace this current one that we’re disconnecting.</p>
<p>We can use the <code>exit</code> event on the worker itself to fork a new worker when the current one exists, but we have to make sure that the exit action was actually triggered after a normal disconnect call. We can use the <code>exitedAfetrDisconnect</code> flag. If this flag is not true, the exit was caused by something else other than our disconnect call and in that case, we should just return and do nothing. But if the flag is set to true, we can go ahead and fork a new worker to replace the one that we’re disconnecting.</p>
<p>When this new forked worker is ready, we can restart the next one. However, remember that the fork process is not synchronous, so we can’t just restart the next worker after the fork call. Instead, we can monitor the <code>listening</code> event on the newly forked worker, which tells us that this worker is connected and ready. When we get this event, we can safely restart the next worker in sequence.</p>
<p>That’s all we need for a zero-downtime restart. To test it, you’ll need to read the master process id to be sent to the <code>SIGUSR2 </code>signal:</p><pre><code>console.log(`Master PID: ${process.pid}`);</code></pre>
<p>Start the cluster, copy the master process id, and then restart the cluster using the <code>kill -SIGUSR2 PID</code> command. You can also run the same <code>ab</code> command while restarting the cluster to see the effect that this restart process will have on availability. Spoiler alert, you should get ZERO failed requests:</p>
<figcaption>Screenshot captured from my Pluralsight course — Advanced Node.js</figcaption>
</figure>
<p>Process monitors like PM2, which I personally use in production, make all the tasks we went through so far extremely easy and give a lot more features to monitor the health of a Node.js application. For example, with PM2, to launch a cluster for any app, all you need to do is use the <code>-i</code> argument:</p><pre><code>pm2 start server.js -i max</code></pre>
<p>And to do a zero downtime restart you just issue this magic command:</p><pre><code>pm2 reload all</code></pre>
<p>However, I find it helpful to first understand what actually will happen under the hood when you use these commands.</p>
<h4 id="shared-state-and-sticky-load-balancing">Shared State and Sticky Load Balancing</h4>
<p>Good things always come with a cost. When we load balance a Node application, we lose some features that are only suitable for a single process. This problem is somehow similar to what’s known in other languages as thread safety, which is about sharing data between threads. In our case, it’s sharing data between worker processes.</p>
<p>For example, with a cluster setup, we can no longer cache things in memory because every worker process will have its own memory space. If we cache something in one worker’s memory, other workers will not have access to it.</p>
<p>If we need to cache things with a cluster setup, we have to use a separate entity and read/write to that entity’s API from all workers. This entity can be a database server or if you want to use in-memory cache you can use a server like Redis or create a dedicated Node process with a read/write API for all other workers to communicate with.</p>
<figcaption>Screenshot captured from my Pluralsight course — Advanced Node.js</figcaption>
</figure>
<p>Don’t look at this as a disadvantage though, because using a separate entity for your application caching needs is part of <em>decomposing</em> your app for scalability. You should probably be doing that even if you’re running on a single core machine.</p>
<p>Other than caching, when we’re running on a cluster, stateful communication in general becomes a problem. Since the communication is not guaranteed to be with the same worker, creating a stateful channel on any one worker is not an option.</p>
<p>The most common example for this is authenticating users.</p>
<figcaption>Screenshot captured from my Pluralsight course — Advanced Node.js</figcaption>
</figure>
<p>With a cluster, the request for authentication comes to the master balancer process, which gets sent to a worker, assuming that to be A in this example.</p>
<figcaption>Screenshot captured from my Pluralsight course — Advanced Node.js</figcaption>
</figure>
<p>Worker A now recognizes the state of this user. However, when the same user makes another request, the load balancer will eventually send them to other workers, which do not have them as authenticated. Keeping a reference to an authenticated user session in one instance memory is not going to work anymore.</p>
<p>This problem can be solved in many ways. We can simply share the state across the many workers we have by storing these sessions’ information in a shared database or a Redis node. However, applying this strategy requires some code changes, which is not always an option.</p>
<p>If you can’t do the code modifications needed to make a shared storage of sessions here, there is a less invasive but not as efficient strategy. You can use what’s known as Sticky Load Balancing. This is much simpler to implement as many load balancers support this strategy out of the box. The idea is simple. When a user authenticates with a worker instance, we keep a record of that relation on the load balancer level.</p>
<figcaption>Screenshot captured from my Pluralsight course — Advanced Node.js</figcaption>
</figure>
<p>Then, when the same user sends a new request, we do a lookup in this record to figure out which server has their session authenticated and keep sending them to that server instead of the normal distributed behavior. This way, the code on the server side does not have to be changed, but we don’t really get the benefit of load balancing for authenticated users here so only use sticky load balancing if you have no other option.</p>
<p>The cluster module actually does not support sticky load balancing, but a few other load balancers can be configured to do sticky load balancing by default.</p>
<p>Thanks for reading.</p>
<p>Learning React or Node? Checkout my books:</p>
<ul>
<li><a href="http://amzn.to/2peYJZj" rel="noopener">Learn React.js by Building Games</a></li>
<li><a href="http://amzn.to/2FYfYru" rel="noopener">Node.js Beyond the Basics</a></li>
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
