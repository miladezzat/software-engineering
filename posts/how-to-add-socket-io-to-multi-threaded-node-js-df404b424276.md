---
card: "https://cdn-media-1.freecodecamp.org/images/1*iCeTauiYBnC5UTzlOIKmyw.jpeg"
tags: [JavaScript]
description: One of the disadvantages of Node is that it is single-threade
author: "Milad E. Fahmy"
title: "Adding Socket.io to multi-threaded Node.js"
created: "2021-08-15T19:42:05+02:00"
modified: "2021-08-15T19:42:05+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-nodejs tag-tech tag-programming tag-productivity ">
<header class="post-full-header">
<h1 class="post-full-title">Adding Socket.io to multi-threaded Node.js</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*iCeTauiYBnC5UTzlOIKmyw.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*iCeTauiYBnC5UTzlOIKmyw.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*iCeTauiYBnC5UTzlOIKmyw.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*iCeTauiYBnC5UTzlOIKmyw.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*iCeTauiYBnC5UTzlOIKmyw.jpeg" alt="Adding Socket.io to multi-threaded Node.js">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>One of the disadvantages of Node is that it is single-threaded. Of course, there is a way around it — namely a module called <strong>cluster</strong><em>.</em> Cluster enables us to spread our application over multiple threads.</p>
<p>Now, however, a new problem presents itself. See, our code being run across multiple instances actually has some significant downsides. One of them is not having global states.</p>
<p>Normally, in a single-threaded instance, this would not be much of a worry. For us now it changes everything.</p>
<p>Let’s see why.</p>
<h3 id="so-what-is-the-problem">So, what is the problem?</h3>
<p>Our application is a simple online chat running on four threads. This enables a user to be logged in at the same time on their phone and computer.</p>
<p>Imagine that we have sockets set up exactly the way we would have set them for one thread. In other words we now have one big global state with sockets.</p>
<p>When the user logs in on their computer, the website opens up the connection with a Socket.io instance on our server. The socket is stored in the state of thread #3.</p>
<p>Now, imagine the user goes to the kitchen to grab a snack and takes their phone with them — naturally wanting to keep texting with their friends online.</p>
<p>Their phone connects to thread #4, and the socket is saved in the thread’s state.</p>
<p>Sending a message from their phone will do the user no good. Only people from thread #3 are going to be able to see the message. That is because the sockets saved on thread #3 are not somehow magically stored on threads #1, #2 and #4 as well.</p>
<p>Funny enough, even the user themself is not going to see their messages on their computer once they come back from the kitchen.</p>
<p>Of course, when they refresh the website, we could send a GET request and fetch the last 50 messages, but we cannot really say it is the ‘dynamic’ way, can we?</p>
<h3 id="why-is-this-happening">Why is this happening?</h3>
<p>Spreading our server over multiple threads is in some way tantamount to having several separate servers. They do not know about each other’s existence and certainly do not share any memory. This means that an object on one instance does not exist on the other.</p>
<p>Sockets saved in thread #3 are not necessarily all the sockets that the user is using at the moment. If the user’s friends are on different threads, they are not going to see the user’s messages unless they refresh the website.</p>
<p>Ideally, we would like to notify other instances about an event for the user. This way we can be sure that every connected device is receiving live updates.</p>
<h3 id="a-solution">A solution</h3>
<p>We can notify other threads by using <a href="https://redis.io/" rel="noopener">Redis</a>’ publish/subscribe <a href="https://redis.io/topics/pubsub" rel="noopener">messaging paradigm</a> (<strong>pubsub</strong>).</p>
<p><strong>Redis</strong> is an open source (<strong>BSD</strong>-licensed) in-memory data structure<strong> </strong>store. It can be used as a database, cache and message broker.</p>
<p>This means that we can use Redis to have events distributed between our instances.</p>
<p>Note that normally we would probably store our entire structure inside Redis. However, since the structure is not serializable and needs to be kept “alive” inside the memory, we are going to store part of it on each instance.</p>
<h3 id="the-flow">The flow</h3>
<p>Let’s now think about the steps in which we are going to handle an incoming event.</p>
<ol>
<li>The event called <strong>message</strong> comes to one of our sockets — this way, we do not have to listen for every possible event.</li>
<li>Inside the object passed to the handler of this event as an argument, we can find the name of the event. For example, <strong>sendMessage</strong> — <code>.on('message', ({ event }) =&gt;{})</code>.</li>
<li>If there is a handler for this name, we are going execute it.</li>
<li>The handler may execute <strong>dispatch</strong> with a response.</li>
<li>The dispatch sends the response event to our Redis pubsub<em>. </em>From there it gets <strong>emitted</strong> to each one of our instances.</li>
<li>Each instance emits it to their socketsState, ensuring every connected client is going to receive the event.</li>
</ol>
<p>Seems complicated, I know, but bear with me.</p>
<h3 id="implementation">Implementation</h3>
<p>Here is the <a href="https://github.com/maciejcieslar/multithreaded-socket" rel="noopener">repository</a> with the environment ready, so that we do not have to install and set everything up ourselves.</p>
<p>First, we are going to set up a server with <strong>Express</strong>.</p><pre><code class="language-javascript">import * as moduleAlias from 'module-alias';
moduleAlias.addAliases({
src: __dirname,
});
import * as express from 'express';
import * as http from 'http';
import * as socketio from 'socket.io';
const port = 7999;
const app = express();
const server = http.createServer(app);
const io = initSocket(socketio(server).of('/socket'));
server.listen(port, () =&gt; {
console.log(`Listening on port ${port}.`);
});</code></pre>
<p>We create an Express app, HTTP server and init sockets.</p>
<p>Now we can focus on adding sockets.</p>
<p>We pass the<em> </em>Socket.io’s server instance to our function in which we set the middlewares.</p><pre><code class="language-javascript">const initSocket = (instance: socketio.Namespace): socketio.Namespace =&gt;
instance.use(onAuth).use(onConnection);</code></pre>
<h3 id="onauth">onAuth</h3>
<p>The <strong>onAuth</strong> function simply imitates a mock authorization. In our case it is token-based.</p>
<p>Personally, I would probably replace it with <a href="https://jwt.io/" rel="noopener">JWT</a> in the future, but it is not enforced in any way.</p><pre><code class="language-javascript">const onAuth: SocketMiddleware = (socket, next) =&gt; {
const { token, id }: { token: string; id: string } =
socket.request._query || socket.request.headers;
if (!token) {
return next(new Error('Authorization failed, no token has been provided!'));
}
// mock
const user = checkToken(token, id);
socket.user = user;
return next();
};</code></pre>
<p>Now, let’s move on to the <strong>onConnection</strong> middleware.</p>
<h3 id="onconnection">onConnection</h3><pre><code class="language-javascript">const onConnection: SocketMiddleware = (socket, next) =&gt; {
if (!socket.user) {
return next(new Error('Something went wrong.'));
}
const { id } = socket.user;
socketsState.add(id, socket);
socket.on('message', ({ event, args }) =&gt; {
const handler = handlers[event];
if (!handler) {
return null;
}
return handler &amp;&amp; handler({ id, args });
});
socket.on('disconnect', () =&gt; {
return socketsState.remove(id, socket);
});
return next();
};</code></pre>
<p>Here we see that we retrieve the user’s <strong>id</strong>, which was set in the previous middleware, and save it in our socketsState, with the key being the id and the value being an array of sockets.</p>
<p>Next, we listen for the <strong>message</strong> event. Our entire logic is based on that — every event the frontend sends us is going to be called: <strong>message</strong>.</p>
<p>The name of the event will be sent inside the arguments object — as stated above.</p>
<h3 id="handlers">Handlers</h3>
<p>As you can see in onConnection, specifically in the listener for the message event, we are looking for a handler based on the event’s name.</p>
<p>Our <strong>handlers</strong> is simply an object in which the key is the event name and the value is the function. We will use it to listen for events and respond accordingly.</p><pre><code class="language-javascript">const dispatchTypes = {
MESSAGE_SENT: 'message_sent',
POST_UPDATED_NOTIFICATION: 'post_updated_notification',
};
interface Handlers {
[key: string]: ({ id, args }: { id: string; args: any }) =&gt; any;
}
const handlers: Handlers = {
sendMessage: async ({ id, args }) =&gt; {
// await sendMessageToUser();
dispatch({
id,
event: dispatchTypes.MESSAGE_SENT,
args: {
message: `A message from user with id: ${id} has been send`,
},
});
},
postUpdated: async ({ id, args }) =&gt; {
dispatch({
id,
event: dispatchTypes.POST_UPDATED_NOTIFICATION,
args: {
message: 'A post you have been mentioned in has been updated',
},
});
},
};
export = handlers;</code></pre>
<p>Also, later on, we are going to add the <strong>dispatch</strong> function and use it to send the event across the instances.</p>
<h3 id="socketsstate">SocketsState</h3>
<p>We know the interface of our state, but we have yet to implement it.</p>
<p>We add methods for adding and removing a socket, as well as for emitting an event.</p><pre><code class="language-javascript">import * as socketio from 'socket.io';
interface SocketsState {
[id: string]: socketio.Socket[];
}
const socketsState: SocketsState = {};
const add = (id: string, socket: socketio.Socket) =&gt; {
if (!socketsState[id]) {
socketsState[id] = [];
}
socketsState[id] = [...socketsState[id], socket];
return socketsState[id];
};
const remove = (id: string, socket: socketio.Socket) =&gt; {
if (!socketsState[id]) {
return null;
}
socketsState[id] = socketsState[id].filter((s) =&gt; s !== socket);
if (!socketsState[id].length) {
socketsState[id] = undefined;
}
return null;
};
const emit = ({
event,
id,
args,
}: {
event: string;
id: string;
args: any;
}) =&gt; {
if (!socketsState[id]) {
return null;
}
socketsState[id].forEach((socket) =&gt;
socket.emit('message', { event, id, args }),
);
return null;
};
export { add, remove, emit };
</code></pre>
<p>The <strong>add</strong> function checks whether the state has a property which is equal to the user’s id. If that is the case, then we simply add it to our already existing array. Otherwise, we create a new array first.</p>
<p>The <strong>remove</strong> function also checks if the state has the user’s id in its properties. If not — it does nothing. Otherwise, it filters the array to remove the socket from the array. Then if the array is empty it removes it from the state, setting the property to <strong>undefined</strong>.</p>
<h3 id="redis-pubsub">Redis’ pubsub</h3>
<p>For creating our <strong>pubsub</strong> we are going to use the package called <strong>node-redis-pubsub</strong>.</p><pre><code class="language-javascript">import * as NRP from 'node-redis-pubsub';
const client = new NRP({
port: 6379,
scope: 'message',
});
export = client;</code></pre>
<h3 id="adding-dispatch">Adding dispatch</h3>
<p>Ok, now all that’s left to do is to add the dispatch function…</p><pre><code class="language-javascript">const dispatch = ({
event,
id,
args,
}: {
event: string;
id: string;
args: any;
}) =&gt; pubsub.emit('outgoing_socket_message', { event, id, args });</code></pre>
<p>…and add a listener for <strong>outgoing_socket_message</strong>. This way, each instance receives the event and sends it to the user’s sockets.</p><pre><code class="language-javascript">pubsub.on('outgoing_socket_message', ({ event, id, args }) =&gt;
socketsState.emit({ event, id, args }),
);</code></pre>
<h3 id="making-it-all-multi-threaded">Making it all multi-threaded</h3>
<p>Finally, let’s add the code needed for our server to be multi-threaded.</p><pre><code class="language-javascript">import * as os from 'os';
import * as cluster from 'cluster';
const spawn = () =&gt; {
const numWorkes = os.cpus().length;
for (let i = 0; i &lt; numWorkes; i += 1) {
cluster.fork();
}
cluster.on('online', () =&gt; {
console.log('Worker spawned');
});
cluster.on('exit', (worker, code, status) =&gt; {
if (code === 0 || worker.exitedAfterDisconnect) {
console.log(`Worker ${worker.process.pid} finished his job.`);
return null;
}
console.log(
`Worker ${
worker.process.pid
} crashed with code ${code} and status ${status}.`,
);
return cluster.fork();
});
};
export { spawn };</code></pre><pre><code class="language-javascript">import * as moduleAlias from 'module-alias';
moduleAlias.addAliases({
src: __dirname,
});
import * as express from 'express';
import * as http from 'http';
import * as cluster from 'cluster';
import * as socketio from 'socket.io';
import * as killPort from 'kill-port';
import { initSocket } from 'src/common/socket';
import { spawn } from 'src/clusters';
const port = 7999;
if (cluster.isMaster) {
killPort(port).then(spawn);
} else {
const app = express();
const server = http.createServer(app);
const io = initSocket(socketio(server).of('/socket'));
server.listen(port, () =&gt; {
console.log(`Listening on port ${port}.`);
});
}
</code></pre>
<p>Note: We have to kill the port, because after quitting our <strong>Nodemon</strong> process with Ctrl + c it just hangs there.</p>
<p>With a little tweaking, we now have working sockets across all instances. As a result: a much more efficient server.</p>
<p>Thank you very much for reading!</p>
<p>I appreciate that it all might seem overwhelming at first and strenuous to take it all in at once. With that in mind, I highly encourage you to read the code again in its entirety and ponder it as a whole.</p>
<p>If you have any questions or comments feel free to put them in the comment section below or send me a <a href="https://www.mcieslar.com/contact" rel="noopener">message</a>.</p>
<p>Check out my <a href="https://www.maciejcieslar.com/about/" rel="noopener">social media</a>!</p>
<p><a href="http://eepurl.com/dAKhxb" rel="noopener">Join my newsletter</a>!</p>
<p><em>Originally published at <a href="https://www.mcieslar.com/adding-socket-io-to-multithreaded-node" rel="noopener">www.mcieslar.com</a> on September 10, 2018.</em></p>
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
