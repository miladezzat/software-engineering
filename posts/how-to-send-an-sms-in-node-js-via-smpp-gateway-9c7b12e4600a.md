---
card: "https://cdn-media-1.freecodecamp.org/images/1*XVSMVkKMUtd0tX_DzlhVbA.jpeg"
tags: [JavaScript]
description: SMPP (Short Message Peer-to-Peer) is a protocol used by the t
author: "Milad E. Fahmy"
title: "How to send an SMS in Node.js via SMPP Gateway"
created: "2021-08-15T19:41:29+02:00"
modified: "2021-08-15T19:41:29+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-nodejs tag-tech tag-sms tag-communication ">
<header class="post-full-header">
<h1 class="post-full-title">How to send an SMS in Node.js via SMPP Gateway</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*XVSMVkKMUtd0tX_DzlhVbA.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*XVSMVkKMUtd0tX_DzlhVbA.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*XVSMVkKMUtd0tX_DzlhVbA.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*XVSMVkKMUtd0tX_DzlhVbA.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*XVSMVkKMUtd0tX_DzlhVbA.jpeg" alt="How to send an SMS in Node.js via SMPP Gateway">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<h3 id="introduction">Introduction</h3>
<p>SMPP (Short Message Peer-to-Peer) is a protocol used by the telecommunications industry. It exchanges SMS messages between (SMSC) and ESME. SMSC acts as middleman to store the message and route it. ESME is the system that delivers SMS to SMSC.</p>
<p>This tutorial will help you to send SMS messages using your own SMSC gateway.</p>
<h3 id="getting-started"><strong>Getting Started</strong></h3>
<h4 id="where-is-smpp-used"><strong>Where is SMPP used?</strong></h4>
<p>SMPP is particularly suited to high-volume and high-throughput SMS applications. It has the following features:</p>
<ul>
<li>Connections established by the client with the server are persistent and may be kept open indefinitely. There is not the connection overhead to be found with protocols such as HTTP that use transient connections.</li>
<li>Requests can be issued by the SMPP client as well as the SMPP server.</li>
<li>Requests are processed asynchronously. Meaning that requests can be issued without having to wait first for responses to earlier requests to be received.</li>
</ul>
<h4 id="how-to-use-it"><strong>How to use it</strong></h4>
<p>We will be using Node.js <a href="https://github.com/farhadi/node-smpp" rel="noopener">node-smpp</a> for the implementation.</p>
<p>SMPP Requests:</p>
<ul>
<li><strong>bind</strong> request to establish the SMPP session</li>
<li><strong>submit_sm</strong> requests issued by the client to send messages to a mobile phone</li>
<li><strong>deliver_sm</strong> requests issued by the server to forward messages from the mobile phone to the client, including delivery receipts</li>
<li><strong>enquire_link</strong> requests issued by both the server and client to keep the SMPP session alive</li>
<li><strong>unbind</strong> request issued by either the server or the client to terminate the SMPP session</li>
</ul>
<h4 id="how-it-works"><strong>How it works</strong></h4>
<p>An SMPP session must be established between the ESME (External Short Messaging Entities) and the Message Centre or SMPP Routing Entity where appropriate.</p>
<p>This session is created using an SMPP client that communicates with an SMPP protocol. There is a continuous exchange of SMPP PDU (Protocol Data Units or Packets) to ensure a proper bind/connection is established.</p>
<p>The SMPP client takes care of the SMS and delivers them to the SMPP server. The SMPP server also transmits a <strong>delivery report</strong> back to the client when there is a change of status for an SMS.</p>
<p>Node.js will help us to achieve high MPS as it performs all I/O operations asynchronously.</p>
<p>Traditionally, I/O operations either run synchronously (blocking) or asynchronously by spawning off parallel threads to perform the work.</p>
<p>This old approach consumes a lot of memory and is notoriously difficult to program.</p>
<p>In contrast, when a Node application needs to perform an I/O operation, it sends an asynchronous task to the event loop, along with a callback function. It then continues to execute the rest of its program.</p>
<p>When the async operation completes, the event loop returns to the task to execute its callback.</p>
<h4 id="store-and-forward-message-mode"><strong>Store and Forward Message Mode</strong></h4>
<p>The conventional approach to SMS has been to store the message in an SMSC storage area (e.g. message database) before forwarding the message for delivery to the recipient SME. With this model, the message remains securely stored until all delivery attempts have been made by the SMSC. This mode of messaging is commonly referred to as “store and forward”.</p>
<h3 id="step-1-create-smpp-session">Step 1: Create SMPP Session</h3>
<p>In beginning, we need to create a new <code>smpp</code> session with IP address and port.</p><pre><code class="language-js">const smpp = require('smpp');
const session = new smpp.Session({host: '0.0.0.0', port: 9500});</code></pre>
<h3 id="step-2-bind-transceiver">Step 2: Bind Transceiver</h3>
<p>As soon as it connects we will bind it on <code>connect</code> event:</p><pre><code class="language-js">let isConnected = false
session.on('connect', () =&gt; {
isConnected = true;
session.bind_transceiver({
system_id: 'USER_NAME',
password: 'USER_PASSWORD',
interface_version: 1,
system_type: '380666000600',
address_range: '+380666000600',
addr_ton: 1,
addr_npi: 1,
}, (pdu) =&gt; {
if (pdu.command_status == 0) {
console.log('Successfully bound')
}
})
})
session.on('close', () =&gt; {
console.log('smpp is now disconnected')
if (isConnected) {
session.connect();    //reconnect again
}
})
session.on('error', error =&gt; {
console.log('smpp error', error)
isConnected = false;
});</code></pre>
<h3 id="step-3-send-sms">Step 3: Send SMS</h3>
<p>So now we are connected, let's send the SMS:</p><pre><code class="language-js">function sendSMS(from, to, text) {
from = `+${from}`
// this is very important so make sure you have included + sign before ISD code to send sms
to = `+${to}`
session.submit_sm({
source_addr:      from,
destination_addr: to,
short_message:    text
}, function(pdu) {
if (pdu.command_status == 0) {
// Message successfully sent
console.log(pdu.message_id);
}
});
}</code></pre>
<p>Now after sending the SMS, SMSC will send the delivery report that the message has been delivered.</p>
<p>I hope you find this tutorial useful. Feel free to reach <a href="https://101node.io" rel="noopener">out</a> if you have any <strong>questions.</strong></p>
<h4 id="further-reading-"><strong>Further reading:</strong></h4>
<p>If you would like to learn more about SMPP, check out: <a href="http://opensmpp.org/specifications.html" rel="noopener">http://opensmpp.org/specifications.html</a></p>
<p><em>Don’t hesitate to clap if you considered this a worthwhile read!</em></p>
<p>Follow <a href="/news/author/thatshailesh/">Shailesh Shekhawat</a> to get notified whenever I publish a new post.</p>
<p><em>Originally published at <a href="https://101node.io/blog/send-sms-in-node-js-via-smpp-gateway/" rel="noopener">101node.io</a> on September 16, 2018.</em></p>
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
