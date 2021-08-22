---
card: "https://cdn-media-1.freecodecamp.org/images/0*dRRGbswavkQQyO_P.png"
tags: [JavaScript]
description: by Leonardo Cardoso
author: "Milad E. Fahmy"
title: "How to add push notifications to a web app with Firebase ?+?"
created: "2021-08-15T19:44:05+02:00"
modified: "2021-08-15T19:44:05+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-firebase tag-push-notification tag-tech tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">How to add push notifications to a web app with Firebase ?+?</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/0*dRRGbswavkQQyO_P.png 300w,
https://cdn-media-1.freecodecamp.org/images/0*dRRGbswavkQQyO_P.png 600w,
https://cdn-media-1.freecodecamp.org/images/0*dRRGbswavkQQyO_P.png 1000w,
https://cdn-media-1.freecodecamp.org/images/0*dRRGbswavkQQyO_P.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/0*dRRGbswavkQQyO_P.png" alt="How to add push notifications to a web app with Firebase ?+?">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Leonardo Cardoso</p>
<h1 id="how-to-add-push-notifications-to-a-web-app-with-firebase-">How to add push notifications to a web app with Firebase ?+?</h1>
<p>As web applications evolve, it is increasingly common to come across functionality that you’d normally associate with a native app in a web app. Many sites send notifications to their users through the browser for various events that occur within the web app.</p>
<p>Today, I’ll show you the steps required, in detail, to achieve such functionality in your web app using <strong>Firebase</strong>.</p>
<h3 id="notifications-with-firebase">Notifications with Firebase</h3>
<p>Firebase is a platform that offers various services for mobile and web applications and helps developers build apps quickly with a lot of features.</p>
<p>To send the notifications, we will use the service called <a href="https://firebase.google.com/docs/cloud-messaging/" rel="noopener">Cloud Messaging</a>, which allows us to send messages to any device using HTTP requests.</p>
<h3 id="project-setup">Project Setup</h3>
<p>First of all, you need to have a <a href="https://console.firebase.google.com" rel="noopener">Firebase</a> account and you’ll need to create a new project within it.</p>
<p>For this demo setup, I will use a simple project created with the <a href="https://github.com/facebook/create-react-app" rel="noopener"><strong>create-react-app</strong></a>, but you can use the same code anywhere else that uses JavaScript.</p>
<p>In addition to that, we need to add the Firebase library to the project.</p><pre><code class="language-bash">npm install firebase --save</code></pre>
<h3 id="so-let-s-get-coding-">So let’s get coding!</h3>
<p>Now that we’ve done our setup, we can begin coding the module that will be in charge of notifications.</p>
<p>Let’s create a file inside the project directory called <code>push-notification.js</code>.</p>
<p>Inside the file, let’s create a function that initializes Firebase and passes the keys of your project.</p><pre><code class="language-js">import firebase from 'firebase';
export const initializeFirebase = () =&gt; {
firebase.initializeApp({
messagingSenderId: "your messagingSenderId"
});
}</code></pre>
<p>Well, now that we have the function we need to call it.</p>
<p>Inside the entry point of your project, import the function and call it.</p><pre><code class="language-js">import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { initializeFirebase } from './push-notification';
ReactDOM.render(&lt;App /&gt;, document.getElementById('root'));
initializeFirebase();</code></pre>
<blockquote>You can find the keys to your project inside the <strong>Firebase Console.</strong></blockquote>
<figcaption>Getting the keys</figcaption>
</figure>
<h4 id="service-workers">Service Workers</h4>
<blockquote>A service worker is a script that your browser runs in the background, separate from the web page, enabling features that do not require a web page or user interaction.</blockquote>
<p>To receive the <strong>onMessage </strong>event, your app needs a service worker. By default, when you start Firebase, it looks for a file called <code>firebase-messaging-sw.js</code>.</p>
<p>But if you already have one and want to take advantage of it to receive notifications, you can specify during the Firebase startup which service worker it will use. For example:</p><pre><code class="language-js">export const inicializarFirebase = () =&gt; {
firebase.initializeApp({
messagingSenderId: 'your messagingSenderId'
});
navigator.serviceWorker
.register('/my-sw.js')
.then((registration) =&gt; {
firebase.messaging().useServiceWorker(registration);
});
}</code></pre>
<p>This service worker will basically import the script needed to show the notifications when your app is in the background.</p>
<p>We need to add <code>firebase-messaging-sw.js</code> to the location where your files are served. As I’m using the create-react-app, I’m going to add it inside the public folder with the following content:</p><pre><code class="language-js">importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');
firebase.initializeApp({
messagingSenderId: "your messagingSenderId again"
});
const messaging = firebase.messaging();</code></pre>
<h3 id="requesting-permission-to-send-notifications">Requesting permission to send notifications</h3>
<p>Well, everyone knows how annoying it is to enter the site and ask for authorization to send notifications. So let’s do it another way!<br>Let the user choose whether or not to receive notifications.</p>
<p>First of all, let’s create the function that will make the request and return the user’s token.</p>
<p>Inside our push-notification.js file, add the function:</p><pre><code class="language-js">export const askForPermissioToReceiveNotifications = async () =&gt; {
try {
const messaging = firebase.messaging();
await messaging.requestPermission();
const token = await messaging.getToken();
console.log('token do usuário:', token);
return token;
} catch (error) {
console.error(error);
}
}</code></pre>
<p>We need to call this function from somewhere, so I’ll add it at the click of a button.</p><pre><code class="language-js">import React from 'react';
import { askForPermissioToReceiveNotifications } from './push-notification';
const NotificationButton = () =&gt; (
&lt;button onClick={askForPermissioToReceiveNotifications} &gt;
Clique aqui para receber notificações
&lt;/button&gt;
);
export default NotificationButton;</code></pre>
<p>Okay, let’s see it working:</p>
<h3 id="sending-notifications">Sending notifications</h3>
<p>To send the notification, we need to make a request to the Firebase API informing it of the token the user will receive.</p>
<blockquote>In the examples below I use Postman, but you can do this from any other REST client.</blockquote>
<p>Basically, we need to make a POST request to <a href="https://fcm.googleapis.com/fcm/send" rel="noopener">https://fcm.googleapis.com/fcm/send</a> by sending a JSON in the request body.</p>
<p>Below is the structure of the JSON that will be sent:</p><pre><code class="language-json">{
"notification": {
"title": "Firebase",
"body": "Firebase is awesome",
"click_action": "http://localhost:3000/",
"icon": "http://url-to-an-icon/icon.png"
},
"to": "USER TOKEN"
}</code></pre>
<p>In the request header, we need to pass the server key of our project in Firebase and the content-type:</p><pre><code>Content-Type: application/json
Authorization: key=SERVER_KEY</code></pre>
<blockquote>The server key is found in the project settings in the Firebase Console under the Cloud Messaging tab.</blockquote>
<h4 id="notifications-in-action">Notifications in action</h4>
<blockquote>Remember that notifications will only appear when your app is minimized or in the background.</blockquote>
<p>That is how we send a direct notification to a device.</p>
<h3 id="send-notifications-to-a-group-of-users">Send notifications to a group of users</h3>
<p>Well, now that we’ve seen how to send a notification to one user, how do we send a notification to multiple users at once?</p>
<p>To do this, Firebase has a feature called <strong>topic</strong>, where you insert multiple tokens for a specific topic, and you can send the same notification to all of them from a single request.</p>
<h4 id="how-to-do-this">How to do this</h4>
<p>We will basically send a POST request to the address <a href="https://iid.googleapis.com/iid/v1/TOKEN/rel/topics/TOPICO_NAME" rel="noopener">https://iid.googleapis.com/iid/v1/<strong>TOKEN</strong>/rel/topics/<strong>TOPIC_NAME</strong></a>,<strong> </strong>passing the topic name and the token in the URL.</p>
<p>Do not forget to pass in the header the same authorization that we used to send the notification.</p>
<p>Sending the notification to users subscribed to any topic is very similar to sending a notification to a single user. The difference is that we need to pass the topic name in the<strong> “to”</strong> attribute instead of the token.</p>
<p>See the example below:</p><pre><code class="language-json">{
"notification": {
"title": "Firebase",
"body": "Firebase topic message",
"click_action": "http://localhost:3000/",
"icon": "http://localhost:3000/icon.png"
},
"to": "/topics/TOPIC_NAME"
}</code></pre>
<h4 id="conclusion">Conclusion</h4>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
