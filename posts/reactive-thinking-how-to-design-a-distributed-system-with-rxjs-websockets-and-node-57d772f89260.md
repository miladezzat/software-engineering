---
card: "https://cdn-media-1.freecodecamp.org/images/1*nrD86pjtZh_Xjn9AJZKLRQ.png"
tags: [JavaScript]
description: "In my previous article, How to think reactively and animate m"
author: "Milad E. Fahmy"
title: "How to design a distributed system that controls object animation using RxJx, Node, and WebSockets"
created: "2021-08-16T11:42:03+02:00"
modified: "2021-08-16T11:42:03+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-rxjs tag-nodejs tag-functional-programming tag-technology ">
<header class="post-full-header">
<h1 class="post-full-title">How to design a distributed system that controls object animation using RxJx, Node, and WebSockets</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*nrD86pjtZh_Xjn9AJZKLRQ.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*nrD86pjtZh_Xjn9AJZKLRQ.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*nrD86pjtZh_Xjn9AJZKLRQ.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*nrD86pjtZh_Xjn9AJZKLRQ.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*nrD86pjtZh_Xjn9AJZKLRQ.png" alt="How to design a distributed system that controls object animation using RxJx, Node, and WebSockets">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
import { Observable } from 'rxjs';
import { Observer } from 'rxjs';
import * as socketIoServer from 'socket.io';
import {SocketObs} from './socket-obs';
export function sockets(httpServer: Server, port) {
httpServer.listen(port, () =&gt; {
console.log('Running server on port %s', port);
});
return new Observable&lt;SocketObs&gt;(
(subscriber: Observer&lt;SocketObs&gt;) =&gt; {
socketIoServer(httpServer).on('connect',
socket =&gt; {
console.log('client connected');
subscriber.next(new SocketObs(socket));
}
);
}
);
export class SocketObs {
constructor(private socket: SocketIO.Socket) {}
onMessageType(messageType): Observable&lt;any&gt; {
return new Observable&lt;any&gt;((observer: Observer&lt;any&gt;) =&gt; {
this.socket.on(messageType, data =&gt; observer.next(data));
});
}
sockets(httpServer, this.port).pipe(
mergeMap(socket =&gt;
race(
socket.onMessageType(MessageType.BIND_MONITOR),
socket.onMessageType(MessageType.BIND_CONTROLLER)
)
)
)
.subscribe();
import {SocketObs} from './socket-obs';
class MobileObjectServer {
private mobileObjectAdded = new Subject&lt;{mobObj: MobileObject, mobObjId: string}&gt;();
private mobileObjectRemoved = new Subject&lt;string&gt;();
startSocketServer(httpServer: Server) {
sockets(httpServer, this.port).pipe(
mergeMap(socket =&gt;
race(
socket.onMessageType(MessageType.BIND_MONITOR)
.pipe(
map(() =&gt; (socketObs: SocketObs) =&gt; this.handleMonitorObs(socketObs))
),
socket.onMessageType(MessageType.BIND_CONTROLLER)
// something will be added here soon to make this logic work
)
.pipe(
mergeMap(handler =&gt; handler(socket))
)
)
)
.subscribe();
}
handleMonitorObs(socket: SocketObs) {
const mobObjAdded = this.mobileObjectAdded;
const mobObjRemoved = this.mobileObjectRemoved;
return merge(mobObjAdded, mobObjRemoved);
}
}
</code></pre><p>We have introduced a few things with this code which are worth commenting on here.</p><p>We have created the <code>MobileObjectServer</code> class, which will be the place where we will code all our server logic from now on.</p><p>The method <code>handleMonitorsObs</code>, which we are going to enrich later on, returns simply the <code>merge</code> of two Observables, <code>mobileObjectAdded</code> and <code>mobileObjectRemoved</code>, which are Subjects. This is the “inner” <code>merge</code> shown in the picture above.</p><p>Subjects are Observables, and therefore can be merged as we do here. But Subjects are also Observers, so we can emit events through them. As we will see later in the code, there will be a time when we will use these Subjects to emit the events their names suggest.</p><p>The last point is related to the code we have added in the startSocketServer method:</p><pre><code>race(
socket.onMessageType(MessageType.BIND_MONITOR)
.pipe(
map(() =&gt; (sObs: SocketObs) =&gt; this.handleMonitorObs(sObs))
),
socket.onMessageType(MessageType.BIND_CONTROLLER)
// something will be added here soon to make this logic work
)
.pipe(
mergeMap(handler =&gt; handler(socket))
import {SocketObs} from './socket-obs';
class MobileObjectServer {
private mobileObjectAdded = new Subject&lt;{mobObj: MobileObject, mobObjId: string}&gt;();
private mobileObjectRemoved = new Subject&lt;string&gt;();
startSocketServer(httpServer: Server) {
sockets(httpServer, this.port).pipe(
mergeMap(socket =&gt;
race(
socket.onMessageType(MessageType.BIND_MONITOR)
.pipe(
map(() =&gt; (socketObs: SocketObs) =&gt; this.handleMonitorObs(socketObs))
),
socket.onMessageType(MessageType.BIND_CONTROLLER)
// something will be added here soon to make this logic work
)
.pipe(
mergeMap(handler =&gt; handler(socket))
)
)
)
.subscribe();
}
handleMonitorObs(socket: SocketObs) {
const mobObjAdded = this.mobileObjectAdded
.pipe(
mergeMap(data =&gt; data.mobileObject.dynamicsObs)
);
const mobObjRemoved = this.mobileObjectRemoved;
return merge(mobObjAdded, mobObjRemoved);
}
}
sockets(httpServer, this.port).pipe(
mergeMap(socket =&gt;
race(
socket.onMessageType(MessageType.BIND_MONITOR)
.pipe(
map(() =&gt; (socketObs: SocketObs) =&gt; this.handleMonitorObs(socketObs))
),
socket.onMessageType(MessageType.BIND_CONTROLLER)
.pipe(
map(() =&gt; (socketObs: SocketObs) =&gt; this.handleControllerObs(socketObs))
),
)
.pipe(
mergeMap(handler =&gt; handler(socket))
)
)
)
.subscribe();
}
handleMonitorObs(socket: SocketObs) {
const mobObjAdded = this.mobileObjectAdded
.pipe(
mergeMap(data =&gt; data.mobileObject.dynamicsObs)
);
const mobObjRemoved = this.mobileObjectRemoved;
return merge(mobObjAdded, mobObjRemoved);
}
handleControllerObs(socket: SocketObs) {
const commands = socket.onMessageType(MessageType.CONTROLLER_COMMAND);
const disconnect = socket.onDisconnect();
return merge(commands, disconnect);
.pipe(
tap(dynamics =&gt; socket.send(MessageType.DYNAMICS_INFO, dynamics)),
)</code></pre><p>We can easily achieve this just using the <code>takeUntil</code> operator together with the <code>mobileObjectRemoved</code> Observable we already know:</p><pre><code class="language-js">mobObjInfo.mobObj.dynamicsObs
.pipe(
tap(dynamics =&gt; socket.send(MessageType.DYNAMICS_INFO, dynamics)),
takeUntil(this.mobileObjectRemoved.pipe(
filter(id =&gt; id === mobObjInfo.mobObjId)
))
)</code></pre><p><code>takeUntil</code> ensures that an Observable completes when the Observable passed as a parameter to <code>takeUntil</code> emits.</p><p><code>mobileObjectRemoved</code> emits every time a <strong>MobileObject</strong> is removed. What we want, though, is to stop sending dynamics info when a specific <strong>MobileObject</strong>, identified by its id, is removed. So we add the <code>filter</code> logic.</p><h4 id="when-a-monitor-disconnects">When a Monitor disconnects</h4><p>In this case, we can also use <strong>takeUntil</strong>.</p><p>We know when a Monitor disconnects because the <code>socket</code>, of type <code>SocketObs</code>, associated to it emits via the <code>socket.onDisconnect()</code> Observable. So what we need to do is stop sending dynamics info when <code>socket.onDisconnect()</code> emits.</p><p>So the final logic to govern the completion of the Observable is</p><pre><code class="language-js">mobObjInfo.mobObj.dynamicsObs
.pipe(
tap(dynamics =&gt; socket.send(MessageType.DYNAMICS_INFO, dynamics)),
takeUntil(this.stopSendDynamics(socket, mobObjInfo.mobObjId))
)</code></pre><p>where</p><pre><code>private stopSendDynamics(socket: SocketObs, mobObjId: string){
return merge(
this.mobileObjectRemoved.pipe(
filter(id =&gt; id === mobObjId)
),
socket.onDisconnect()
);
}</code></pre><p>And this is how the core of the code implementing our logic looks:</p><pre><code class="language-js">import {sockets} from './socket-io-observable';
import {SocketObs} from './socket-obs';
class MobileObjectServer {
private mobileObjectAdded = new Subject&lt;{mobObj: MobileObject, mobObjId: string}&gt;();
private mobileObjectRemoved = new Subject&lt;string&gt;();
public startSocketServer(httpServer: Server) {
sockets(httpServer, this.port).pipe(
mergeMap(socket =&gt;
race(
socket.onMessageType(MessageType.BIND_MONITOR)
.pipe(
map(() =&gt; (socketObs: SocketObs) =&gt; this.handleMonitorObs(socketObs))
),
socket.onMessageType(MessageType.BIND_CONTROLLER)
.pipe(
map(() =&gt; (socketObs: SocketObs) =&gt; this.handleControllerObs(socketObs))
),
)
.pipe(
mergeMap(handler =&gt; handler(socket))
)
)
)
.subscribe();
}
private handleMonitorObs(socket: SocketObs) {
const mobObjAdded = this.mobileObjectAdded
.pipe(
tap(mobObjInfo =&gt; socket.send(MessageType.MOBILE_OBJECT, mobObjInfo.mobObjId)),
mergeMap(mobObjInfo =&gt; mobObjInfo.mobObj.dynamicsObs
.pipe(
tap(dynamics =&gt; socket.send(MessageType.DYNAMICS_INFO, dynamics)),
takeUntil(this.stopSendDynamicsInfo(socket, mobObjInfo.mobObjId))
)
)
);
const mobObjRemoved = this.mobileObjectRemoved
.pipe(
tap(mobObjId =&gt; socket.send(MessageType.MOBILE_OBJECT_REMOVED, mobObjId)),
);
return merge(mobObjAdded, mobObjRemoved);
}
private handleControllerObs(socket: SocketObs) {
const {mobObj, mobObjId} = this.newMobileObject();
this.mobileObjectAdded.next({mobObj, mobObjId});
const commands = socket.onMessageType(MessageType.CONTROLLER_COMMAND)
.pipe(
tap(command  =&gt; this.execute(command, mobObj))
);
const disconnect = socket.onDisconnect()
.pipe(
tap(() =&gt; this.mobileObjectRemoved.next(mobObjId)),
);
return merge(commands, disconnect);
}
private stopSendDynamicsInfo(socket: SocketObs, mobObjId: string) {
return merge(this.mobileObjectRemoved.pipe(filter(id =&gt; id === mobObjId)), socket.onDisconnect());
}
}
</code></pre><h3 id="conclusion">Conclusion</h3><p>It has been a pretty long journey. We have seen some reasoning driven by Reactive Thinking and some implementations of this reasoning.</p><p>We started transforming WebSockets events into Observables. Then, applying incremental transformations, we ended up creating a single Observable that, once subscribed, unfolds all the events we are interested in.</p><p>At this point, adding the side effects that allow us to achieve our goal has been straightforward.</p><p>This mental process of design, which is incremental in itself, is the meaning I give to “Reactive Thinking”.</p><p>The full code base, comprising Server Controller and Monitor, can be found <a href="https://github.com/EnricoPicci/mobile-object-observables" rel="noopener">here</a>.</p>
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
