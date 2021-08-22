---
card: "https://cdn-media-1.freecodecamp.org/images/1*zhjnyEri0hw-WNu2dLLgmg.png"
tags: [JavaScript]
description: The Push API allows a web app to receive messages pushed by a
author: "Milad E. Fahmy"
title: "A guide to getting the most out of the Push API"
created: "2021-08-15T19:46:50+02:00"
modified: "2021-08-15T19:46:50+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-tech tag-programming tag-api tag-mobile ">
<header class="post-full-header">
<h1 class="post-full-title">A guide to getting the most out of the Push API</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*zhjnyEri0hw-WNu2dLLgmg.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*zhjnyEri0hw-WNu2dLLgmg.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*zhjnyEri0hw-WNu2dLLgmg.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*zhjnyEri0hw-WNu2dLLgmg.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*zhjnyEri0hw-WNu2dLLgmg.png" alt="A guide to getting the most out of the Push API">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<blockquote>Interested in learning JavaScript? Get my ebook at <a href="https://jshandbook.com/" rel="noopener">jshandbook.com</a></blockquote>
<p>The Push API allows a web app to receive messages pushed by a server, even if the web app is not currently open in the browser or not running on the device.</p>
<p>The Push API is a recent addition to browser APIs, and it’s currently supported by Chrome (Desktop and Mobile), Firefox, and Opera since 2016.</p>
<p>IE and Edge do not support it yet, and Safari <a href="https://developer.apple.com/notifications/safari-push-notifications/" rel="noopener">has its own implementation</a> of it. Since Chrome and Firefox support it, approximately 60% of users browsing on their desktops have access to it, so it’s quite safe to use.</p>
<h3 id="what-can-you-do-with-it">What can you do with it</h3>
<p>You can send messages to your users, pushing them from the server to the client, even when the user is not browsing the site.</p>
<p>This lets you deliver notifications and content updates, giving you the ability to engage more with your audience.</p>
<p>This is huge, because one of the missing pillars of the mobile web, compared to native apps, used to be the ability to receive notifications, along with offline support.</p>
<h3 id="how-it-works">How it works</h3>
<p>When a user visits your web app, you can trigger a panel asking permission to send updates. A <a href="https://flaviocopes.com/service-workers" rel="noopener">Service Worker</a> is installed, and operates in the background listening for a <a href="https://flaviocopes.com/service-workers#push-events" rel="noopener">Push Event</a>.</p>
<blockquote><em>Push and Notifications are two separate concepts and APIs. They’re sometimes mixed up because of the <strong>push notifications</strong> term used in iOS. Basically, the Notifications API is invoked when a push event is received using the Push API.</em></blockquote>
<p>Your <strong>server</strong> sends the notification to the client, and the Service Worker, if given permission, receives a <strong>push event</strong>. The Service Worker reacts to this event by <strong>triggering a notification</strong>.</p>
<h3 id="getting-the-user-s-permission">Getting the user’s permission</h3>
<p>The first step in working with the Push API is getting the user’s permission to receive data from you.</p>
<blockquote><em>Many sites implement this panel badly, showing it on the first page load. The user is not yet convinced your content is good, and they will deny the permission. So do it wisely.</em></blockquote>
<p>There are six steps to getting permission from your user:</p>
<ol>
<li>Check if Service Workers are supported</li>
<li>Check if the Push API is supported</li>
<li>Register a Service Worker</li>
<li>Request permission from the user</li>
<li>Subscribe the user and get the PushSubscription object</li>
<li>Send the PushSubscription object to your server</li>
</ol>
<p>Let’s go through them one by one.</p>
<h3 id="check-if-service-workers-are-supported">Check if Service Workers are supported</h3><pre><code>if (!('serviceWorker' in navigator)) {  // Service Workers are not supported. Return  return}</code></pre>
<h3 id="check-if-the-push-api-is-supported">Check if the Push API is supported</h3><pre><code>if (!('PushManager' in window)) {  // The Push API is not supported. Return  return}</code></pre>
<h3 id="register-a-service-worker">Register a Service Worker</h3>
<p>This code registers the Service Worker located in the <code>worker.js</code> file placed in the domain root:</p><pre><code>window.addEventListener('load', () =&gt; {  navigator.serviceWorker.register('/worker.js')  .then((registration) =&gt; {    console.log('Service Worker registration completed with scope: ',      registration.scope)  }, (err) =&gt; {    console.log('Service Worker registration failed', err)  })})</code></pre>
<p>To know more about how Service Workers work in detail, check out the <a href="https://flaviocopes.com/service-workers" rel="noopener">Service Workers guide</a>.</p>
<h3 id="request-permission-from-the-user">Request permission from the user</h3>
<p>Now that the Service worker is registered, you can request the permission.</p>
<p>The API to do this has changed over time, and it went from accepting a callback function as a parameter to returning a <a href="https://flaviocopes.com/javascript-promises/" rel="noopener">Promise</a>, breaking the backward and forward compatibility. And note that we need to do <strong>both,</strong> as we don’t know which approach is implemented by the user’s browser.</p>
<p>The code is the following, calling <code>Notification.requestPermission()</code>.</p><pre><code>const askPermission = () =&gt; {  return new Promise((resolve, reject) =&gt; {    const permissionResult = Notification.requestPermission(      (result) =&gt; {        resolve(result)      }    )    if (permissionResult) {      permissionResult.then(resolve, reject)    }  })  .then((permissionResult) =&gt; {    if (permissionResult !== 'granted') {      throw new Error('Permission denied')    }  })}</code></pre>
<p>The <code>permissionResult</code> value is a string, that can have the value of: - <code>granted</code> - <code>default</code> - <code>denied</code></p>
<p>This code causes the browser to show the permission dialogue:</p>
<p><strong>If the user clicks Block, you won’t be able to ask for the user’s permission any more</strong>, unless they manually go and unblock the site in an advanced settings panel in the browser (very unlikely to happen).</p>
<p>If the user gave us permission, we can subscribe them by calling <code>registration.pushManager.subscribe()</code>.</p><pre><code>const APP_SERVER_KEY = 'XXX'window.addEventListener('load', () =&gt; {  navigator.serviceWorker.register('/worker.js')  .then((registration) =&gt; {    askPermission().then(() =&gt; {      const options = {        userVisibleOnly: true,        applicationServerKey: urlBase64ToUint8Array(APP_SERVER_KEY)      }      return registration.pushManager.subscribe(options)    }).then((pushSubscription) =&gt; {      // we got the pushSubscription object    }  }, (err) =&gt; {    console.log('Service Worker registration failed', err)  })})</code></pre>
<p><code>APP_SERVER_KEY</code> is a string — called <em>Application Server Key</em> or <em>VAPID key </em>—<em> </em>that identifies the applications’s public key, part of a public / private key pair.</p>
<p>It will be used as part of the validation that, for security reasons, comes up to make sure you (and only you, not someone else) can send a push message back to the user.</p>
<h3 id="send-the-pushsubscription-object-to-your-server">Send the PushSubscription object to your server</h3>
<p>In the previous snippet we got the <code>pushSubscription</code> object, which contains all we need to send a push message to the user. We need to send this information to our server so we’re able to send notifications later on.</p>
<p>We first create a JSON representation of the object</p><pre><code>const subscription = JSON.stringify(pushSubscription)</code></pre>
<p>and we can post it to our server using the <a href="https://flaviocopes.com/fetch-api" rel="noopener">Fetch API</a>:</p><pre><code>const sendToServer = (subscription) =&gt; {  return fetch('/api/subscription', {    method: 'POST',    headers: {      'Content-Type': 'application/json'    },    body: JSON.stringify(subscription)  })  .then((res) =&gt; {    if (!res.ok) {      throw new Error('An error occurred')    }    return res.json()  })  .then((resData) =&gt; {    if (!(resData.data &amp;&amp; resData.data.success)) {      throw new Error('An error occurred')    }  })}sendToServer(subscription)</code></pre>
<p>Server-side, the <code>/api/subscription</code> endpoint receives the POST request and can store the subscription information into its storage.</p>
<h3 id="how-the-server-side-works">How the Server side works</h3>
<p>So far we only talked about the client-side part: getting a user’s permission to be notified in the future.</p>
<p>What about the server? What should it do, and how should it interact with the client?</p>
<blockquote><em>These server-side examples use <a href="http://expressjs.com/" rel="noopener">Express.js</a> as the base HTTP framework, but you can write a server-side Push API handler in any language or framework</em></blockquote>
<h3 id="registering-a-new-client-subscription">Registering a new client subscription</h3>
<p>When the client sends a new subscription, remember that we used the <code>/api/subscription</code> HTTP POST endpoint, sending the PushSubscription object details in JSON format, in the body.</p>
<p>We initialize Express.js:</p><pre><code>const express = require('express')const app = express()</code></pre>
<p>This utility function makes sure the request is valid and has a body and an endpoint property, otherwise it returns an error to the client:</p><pre><code>const isValidSaveRequest = (req, res) =&gt; {  if (!req.body || !req.body.endpoint) {    res.status(400)    res.setHeader('Content-Type', 'application/json')    res.send(JSON.stringify({      error: {        id: 'no-endpoint',        message: 'Subscription must have an endpoint'      }    }))    return false  }  return true}</code></pre>
<p>The next utility function saves the subscription to the database, returning a promise resolved when the insertion completed (or failed). The <code>insertToDatabase</code> function is a placeholder — we’re not going into those details here:</p><pre><code>const saveSubscriptionToDatabase = (subscription) =&gt; {  return new Promise((resolve, reject) =&gt; {    insertToDatabase(subscription, (err, id) =&gt; {      if (err) {        reject(err)        return      }      resolve(id)    })  })}</code></pre>
<p>We use those functions in the POST request handler below. We check if the request is valid, then we save the request and return a <code>data.success: true</code> response back to the client, or an error:</p><pre><code>app.post('/api/subscription', (req, res) =&gt; {  if (!isValidSaveRequest(req, res)) {    return  }  saveSubscriptionToDatabase(req, res.body)  .then((subscriptionId) =&gt; {    res.setHeader('Content-Type', 'application/json')    res.send(JSON.stringify({ data: { success: true } }))  })  .catch((err) =&gt; {    res.status(500)    res.setHeader('Content-Type', 'application/json')    res.send(JSON.stringify({      error: {        id: 'unable-to-save-subscription',        message: 'Subscription received but failed to save it'      }    }))  })})app.listen(3000, () =&gt; {  console.log('App listening on port 3000')})</code></pre>
<h3 id="sending-a-push-message">Sending a Push message</h3>
<p>Now that the server has registered the client in its list, we can send it Push messages. Let’s see how that works by creating an example code snippet that fetches all subscriptions and sends a Push message to all of them at the same time.</p>
<p>We use a library because the <a href="https://developers.google.com/web/fundamentals/push-notifications/web-push-protocol" rel="noopener"><strong>Web Push protocol</strong></a> is complex, and a lib allows us to abstract away a lot of low level code that makes sure we can work safely and can correctly handle any edge case.</p>
<blockquote><em>This example uses the <code>web-push</code> <a href="https://flaviocopes.com/nodejs/" rel="noopener">Node.js</a> <a href="https://github.com/web-push-libs/web-push" rel="noopener">library</a> to handle sending the Push message.</em></blockquote>
<p>We first initialize the <code>web-push</code> lib, and we generate a tuple of private and public keys, and set them as the VAPID details:</p><pre><code>const webpush = require('web-push')const vapidKeys = webpush.generateVAPIDKeys()const PUBLIC_KEY = 'XXX'const PRIVATE_KEY = 'YYY'const vapidKeys = {  publicKey: PUBLIC_KEY,  privateKey: PRIVATE_KEY}webpush.setVapidDetails(  'mailto:my@email.com',  vapidKeys.publicKey,  vapidKeys.privateKey)</code></pre>
<p>Then we set up a <code>triggerPush()</code> method, responsible for sending the push event to a client. It just calls <code>webpush.sendNotification()</code> and catches any error. If the return error HTTP status code is <a href="https://developer.mozilla.org/docs/Web/HTTP/Status/410" rel="noopener">410</a>, which means <strong>gone</strong>, we delete that subscriber from the database.</p><pre><code>const triggerPush = (subscription, dataToSend) =&gt; {  return webpush.sendNotification(subscription, dataToSend)  .catch((err) =&gt; {    if (err.statusCode === 410) {      return deleteSubscriptionFromDatabase(subscription._id)    } else {      console.log('Subscription is no longer valid: ', err)    }  })}</code></pre>
<p>We don’t implement getting the subscriptions from the database, but we leave it as a stub:</p><pre><code>const getSubscriptionsFromDatabase = () =&gt; {  //stub}</code></pre>
<p>The meat of the code is the callback of the POST request to the <code>/api/push</code> endpoint:</p><pre><code>app.post('/api/push', (req, res) =&gt; {  return getSubscriptionsFromDatabase()  .then((subscriptions) =&gt; {    let promiseChain = Promise.resolve()    for (let i = 0; i &lt; subscriptions.length; i++) {      const subscription = subscriptions[i]      promiseChain = promiseChain.then(() =&gt; {        return triggerPush(subscription, dataToSend)      })    }    return promiseChain  })  .then(() =&gt; {    res.setHeader('Content-Type', 'application/json')    res.send(JSON.stringify({ data: { success: true } }))  })  .catch((err) =&gt; {    res.status(500)    res.setHeader('Content-Type', 'application/json')    res.send(JSON.stringify({      error: {        id: 'unable-to-send-messages',        message: `Failed to send the push ${err.message}`      }    }))  })})</code></pre>
<p>The above code gets all the subscriptions from the database, then it iterates on them, and it calls the <code>triggerPush()</code> function we explained before.</p>
<p>Once the subscriptions are done, we return a successful JSON response. Unless an error occurred, and then we return a 500 error.</p>
<h3 id="in-the-real-world-">In the real world…</h3>
<p>It’s unlikely that you’ll set up your own Push server unless you have a very special use case, or you just want to learn the tech or you like to DIY.</p>
<p>Instead, you’ll usually want to use platforms such as <a href="https://onesignal.com" rel="noopener">OneSignal</a> which transparently handle Push events to all kind of platforms, Safari and iOS included, for free.</p>
<h3 id="receive-a-push-event">Receive a Push event</h3>
<p>When a Push event is sent from the server, how does the client get it?</p>
<p>It’s a normal JavaScript event listener, on the <code>push</code> event, which runs inside a Service Worker:</p><pre><code>self.addEventListener('push', (event) =&gt; {  // data is available in event.data})</code></pre>
<p><code>event.data</code> contains the <code><a href="https://developer.mozilla.org/docs/Web/API/PushMessageData" rel="noopener">PushMessageData</a></code> object which exposes methods to retrieve the push data sent by the server, in the format you want:</p>
<ul>
<li><strong>arrayBuffer()</strong> : as an ArrayBuffer object</li>
<li><strong>blob()</strong>: as a Blob object</li>
<li><strong>json()</strong>: parsed as JSON</li>
<li><strong>text()</strong>: plain text</li>
</ul>
<p>You’ll normally use <code>event.data.json()</code>.</p>
<h3 id="displaying-a-notification">Displaying a notification</h3>
<p>Here we intersect a bit with the <a href="https://flaviocopes.com/notifications-api" rel="noopener">Notifications API</a>, but for a good reason, as one of the main use cases of the Push API is to display notifications.</p>
<p>Inside our <code>push</code> event listener in the Service Worker, we need to display the notification to the user. We also need to tell the event to wait until the browser has shown it before the function can terminate. We extend the event lifetime until the browser has finished displaying the notification (until the promise has been resolved), otherwise the Service Worker could be stopped in the middle of your processing:</p><pre><code>self.addEventListener('push', (event) =&gt; {  const promiseChain = self.registration.showNotification('Hey!')  event.waitUntil(promiseChain)})</code></pre>
<blockquote>Interested in learning JavaScript? Get my ebook at <a href="https://jshandbook.com/" rel="noopener">jshandbook.com</a></blockquote>
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
