---
card: "https://cdn-media-1.freecodecamp.org/images/1*bcIzB5Jcrcw25eIITJYsJg.png"
tags: [JavaScript]
description: by Thomas Reinecke
author: "Milad E. Fahmy"
title: "How to create application boilerplate with Vert.x, VueJS, and OAuth2 in five steps"
created: "2021-08-15T19:40:49+02:00"
modified: "2021-08-15T19:40:49+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-vuejs tag-java tag-tech tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">How to create application boilerplate with Vert.x, VueJS, and OAuth2 in five steps</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*bcIzB5Jcrcw25eIITJYsJg.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*bcIzB5Jcrcw25eIITJYsJg.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*bcIzB5Jcrcw25eIITJYsJg.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*bcIzB5Jcrcw25eIITJYsJg.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*bcIzB5Jcrcw25eIITJYsJg.png" alt="How to create application boilerplate with Vert.x, VueJS, and OAuth2 in five steps">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Thomas Reinecke</p>
<h1 id="how-to-create-application-boilerplate-with-vert-x-vuejs-and-oauth2-in-five-steps">How to create application boilerplate with Vert.x, VueJS, and OAuth2 in five steps</h1>
<figcaption>VueJS + Vert.x + Keycloak</figcaption>
</figure>
<p>In this tutorial you will learn how to setup an application boilerplate based on Vert.x (Java) as a backend and VueJs as a frontend with a focus on User Authentication against Keycloak through OAuth2. Once a User is logged in, the <a href="https://github.com/vertx-stack/vertx-vue-keycloak" rel="noopener"><strong>vertx-vue-keycloak</strong></a> app also demonstrates how to query the Vert.x backend, send data (mutations) and how Publish/Subscribe works between Vert.x and VueJS.</p>
<p>The e2e code for this article is hosted on GH <a href="https://github.com/vertx-stack/vertx-vue-keycloak" rel="noopener">here</a>.</p>
<h3 id="step-1-prep-work">Step 1 — Prep Work</h3>
<h4 id="install-keycloak">Install KeyCloak</h4>
<p>In this example we’re going to use Keycloak as Authentication and Authorization management provider. <a href="https://www.keycloak.org/" rel="noopener">Keycloak</a> is an open source identity and access management offering by RedHat, which provides OAuth2 and much more. Keycloak comes with a Web admin console to administrate the server. We can easily run it based on docker:</p><pre><code>docker run -d — name keycloak -p 38080:8080 -e KEYCLOAK_USER=admin -e KEYCLOAK_PASSWORD=admin -e KEYCLOAK_LOGLEVEL=DEBUG jboss/keycloak</code></pre>
<p>After starting this container, the <strong>Keycloak</strong> admin console will be available at <a href="http://127.0.0.1:38080" rel="noopener">http://127.0.0.1:38080</a>. Be aware of the version of Keycloak — at the time this article was written it was <strong>4.5.0.Final</strong>, so the UI might look a little different with newer or earlier versions.</p>
<h4 id="create-the-keycloak-client-credential">Create the Keycloak client credential</h4>
<p>For the Vert.x app we’re going to develop, we need a registered client in Keycloak. Fill out the form with the given highlighted values:</p>
<p>Save this, open and inspect the just created <strong>vertx-account</strong> client object:</p>
<p>We’ll come back to this page, in particular the information on the <strong>Credentials</strong> tab later when we embed the client details in the vertx code.</p>
<h4 id="create-roles">Create Roles</h4>
<p>On the Roles Tab from the left sidebar in Keycloak, create two exemplary roles <strong>modify-account</strong> and <strong>view-account</strong>:</p>
<h4 id="create-a-user">Create a User</h4>
<p>On the Manage Users tab, create a new user, give it a username <strong>testuser</strong> and an email address<strong> test@tester.com</strong> and save it:</p>
<p>Still on the just created users page, switch to the Credentials tab and set the password of this user to <strong>test. </strong>Also unselect the <strong>Temporary</strong> switch and click the <strong>Reset Password</strong> button. Be aware: the behaviour of this UI is a little strange. When you click this button, the <strong>Temporary</strong> flag switches back to true, but just ignore this. The password you gave should be well set.</p>
<p>Switch to the Role Mapping tab and assign the just created roles <strong>modify-account</strong> and <strong>view-account</strong> to this user:</p>
<p>This completes the setup of Keycloak. Congratulations! We’re now ready to work on our vert.x backend and VueJS frontend.</p>
<p>More details on setting up Keycloak and configuring it for Vert.x can be found in <a href="https://piotrminkowski.wordpress.com/2017/09/15/building-secure-apis-with-vert-x-and-oauth2/" rel="noopener">this great article</a>, which I also used as source for above instructions (thanks to Piotr Minkowski)<em>.</em></p>
<h3 id="step-2-create-vert-x-backend-and-vuejs-frontend">Step 2 — Create Vert.x Backend and VueJs Frontend</h3>
<p>I used Eclipse to create a simple Maven project (without archtype selection) and from there I added vertx onto the dependency list in <em>pom.xml</em>. At the time this article was written, vertx was on version 3.5.4.</p>
<p>Clone the following repository (including the source-code for this article):</p>
<p><a href="https://github.com/vertx-stack/vertx-vue-keycloak" rel="noopener"><strong>vertx-stack/vertx-vue-keycloak</strong></a><br><a href="https://github.com/vertx-stack/vertx-vue-keycloak" rel="noopener"><em>Contribute to vertx-stack/vertx-vue-keycloak development by creating an account on GitHub.</em>github.com</a></p><pre><code>git clone https://github.com/vertx-stack/vertx-vue-keycloak.git</code></pre>
<h4 id="create-keystore-file">Create Keystore file</h4>
<p>You may want to follow whatever procedure you find appropriate to create a proper certificate chain and get it into the jks format. The example I give here is based on a self-signed certificate and it works great on local or for test environments. The repo you just cloned comes with the file, so you may skip this section. For production, please get a CA-signed certificate (a free one, for example, from <a href="https://letsencrypt.org/" rel="noopener">LetsEncrypt</a>).</p>
<p>Run the following OpenSSL command to generate your private key and public certificate. Use “<strong>testpassword</strong>” as password and leave all values default (hit enter until you’re through):</p><pre><code>openssl req -x509 -newkey rsa:2048 -keyout key.pem -out cert.pem -days 365</code></pre>
<p>Review the certificate file:</p><pre><code>openssl x509 -text -noout -in cert.pem</code></pre>
<p>Combine your key and certificate in a PKCS#12 (P12) bundle, and as the export password use “<strong>testpassword</strong>” again:</p><pre><code>openssl pkcs12 -inkey key.pem -in cert.pem -export -out certificate.p12</code></pre>
<p>Convert it into a JKS file. Use “<strong>testpassword</strong>” as the destination keystore password:</p><pre><code>keytool -importkeystore -srckeystore certificate.p12 -srcstoretype pkcs12 -destkeystore test.jks -deststoretype jks</code></pre>
<p>We now have our certificate store in test.jks, ready for use by vert.x to secure an HTTPS connection. This file also comes with the repo you just cloned.</p>
<h4 id="understand-the-vertx-vue-keycloak-app">Understand the vertx-vue-keycloak app</h4>
<p>The app contains both the vertx source codes for the backend and the VueJS-based frontend code.</p>
<p>On the <strong>Backend</strong> (src/main/java), the <strong>MainVerticle.java</strong> is primary entry point. It’s a Vertx verticle that is creating the HTTP/HTTPS server, configuring the various routes, exposing the /login endpoint that’s integrating with Keycloak, and finally is providing the API endpoints for our frontend.</p>
<p>The Frontend (placed in src/main/frontend) is a regular VueJS frontend that was created with the VueJS CLI. It’s containing the assets, libraries and components.</p>
<h3 id="step-3-integrate-with-keycloak">Step 3 — Integrate with KeyCloak</h3>
<p>Open src/main/java/backend/MainVerticle.java and inspect the method <strong>createHttpServerAndRoutes:</strong></p><pre><code>JsonObject keycloakJson = new JsonObject()  .put("realm", "master")   .put("realm-public-key", "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAqZeGGDeEHmmUN4/UXh2gQD0yZEZirprsrdYK7GfcE1+QF9yfYfBrIv5cQUssFQKISVpbbLcoqYolsxcOvDyVFSQedHRsumOzqNZK38RHkidPMPrSNof5C3iMIHuXOCv/6exnLZvVoeYmkq42davYEz1tpSWzkZnlUMbRZFs1CfzLMM2rsAJWsO1/5zbDm0JhFl7EFUsTki72ihac1Q5zUUSFyf1jKUEkL7rrkYINjgAaQKktE8pnubc3Y44F5llY4YyU9/bqUWqMYDx868oiDcnoBpGGd4QrUMlbULZZLRqqUKK6iG1kHxDCJQ9gaCiJoELyAqXjnnO28OODQhxMHQIDAQAB")     .put("auth-server-url", "http://127.0.0.1:38080/auth")  .put("ssl-required", "external")  .put("resource", "vertx-account")  .put("credentials", new JsonObject()    . put("secret", "0c22e587-2ccb-4dd3-b017-5ff6a903891b")); </code></pre><pre><code>OAuth2Auth oauth2 = KeycloakAuth.create(vertx, OAuth2FlowType.PASSWORD, keycloakJson);</code></pre>
<p>Get the <strong>realm</strong> and <strong>real-public-key</strong> from the Keycloak admin console. To get the key, click on the “Public Key” button on the <strong>Keys</strong> tab of the <strong>master</strong> realm:</p>
<p>As a resource, include the previously created <strong>vertx-account</strong> client. As its credentials, navigate to it on the Clients menu &gt; vertx-account &gt; Credentials tab and copy the Secret from there:</p>
<p>As the OAuth2FlowType we’re going to select PASSWORD, representing the <strong>Password Credentials Flow</strong>. More details on the OAuthFlows can be found <a href="https://vertx.io/docs/vertx-auth-oauth2/java/" rel="noopener">here</a>.</p>
<p>We’re now able to define the <strong>/login</strong> route to handle the actual login:</p>
<p>We can now run our first test of the vertx Backend by starting the vert.x launcher. Using Postman, we can now run the first user auth via a POST against <strong>127.0.0.1:8080/login</strong> (our vertx server with the <strong>/login</strong> route). On the Body, we select raw data and enter the following JSON object:</p><pre><code>{  "username":"testuser",   "password":"test",   "scope":"modify-account view-account"}</code></pre>
<p>Press <strong>Send</strong> in Postman and send this to our vertx server:</p>
<p>The result on the server will look like this, indicating that we have successfully found the user “<strong>testuser</strong>” on Keycloak. Good job!</p>
<h4 id="authenticate-with-our-frontend">Authenticate with our Frontend</h4>
<p>Now that we have the basic Authentication working and have tested it with Postman, it’s time to get our Frontend app integrated with it. The Forntend comes at <strong>src/main/frontend</strong>. To get it going, run a quick install of the dependencies with <strong>yarn</strong> and finally start it with <strong>yarn dev</strong>. More Details <a href="https://github.com/vertx-stack/vertx-vue-keycloak" rel="noopener">here</a>.</p>
<p>The Frontend will now start on <strong>localhost:8081</strong>. It’s going to present a fairly simple login page (bootstrap was used to style it):</p>
<p>I wont go into all the specifics of this app here. For many more details on how this was created, please check out <a href="https://paweljw.github.io/2017/09/vue.js-front-end-app-part-3-authentication/" rel="noopener">this great article</a> from <a href="undefined" rel="noopener">Paweł J. Wal</a>.</p>
<p>The only additional thing we need to change is to configure CORS on the Vert.x backend side to make sure the Frontend can speak to it.</p>
<p>You’re now ready to authenticate a user from the VueJS Frontend App to your Vert.x backend. Logging in with your <strong>testuser:test</strong> gets you into the protected space of your app:</p>
<p>Congratulations, you now have a pretty slick way to log into a VueJS app, running against a Vert.x API and Authentication server thats integrated with Keycloak.</p>
<h3 id="step-4-integrate-query-and-data-update-logic">Step 4 — Integrate Query and Data Update logic</h3>
<p>We’re going to implement a very simple message management system here as an example, which looks roughly like this:</p>
<p>The frontend and pieces of the eventbus integration in this example have been inspired by <a href="undefined" rel="noopener">Mateusz Parzonka</a>’s <a href="https://github.com/parzonka/vertx-examples" rel="noopener"><em>vertx-examples</em> project</a> on GitHub — thanks for that!</p>
<p>The proposed procedure in this example is to utilize standard message endpoints, producers and consumers on the Vertx EventBus for a fully sophisticated Client/Server communication pattern including queries, data mutations and publish/subscribe. The idea is pretty simple:</p>
<ul>
<li>on the backend we expose a number of message consumers which act as get, create, and delete methods.</li>
<li>on the frontend we subscribe to specific data channels that allow us to send whatever from the backend to the frontend, which also greatly helps to tunnel client to client communication through the backend.</li>
</ul>
<p>On the Frontend side, we’re going to create a vertx eventbus service that’s using <a href="https://www.npmjs.com/package/vertx3-eventbus-client" rel="noopener"><strong>vertx3-eventbus-client</strong></a>. The essential methods here are <strong>callApi</strong> and <strong>subscribe</strong> (for more details on pubsub, see step 5):</p>
<p>To get, delete and create a new message, inspect the Home.vue component, in particular the usage of the <strong>eventbus</strong> service from utils/eventbus:</p>
<p>As a result, you’re now able to use this UI to receive the array of known messages from the backend, create new messages, and delete them. So far so good, but wait a minute: what’s actually happening to other clients that use the same app in parallel to me? Let’s dive into PubSub finally…</p>
<h3 id="step-5-integrate-publish-subscribe">Step 5 — Integrate Publish &amp; Subscribe</h3>
<p>We’ve already seen that the backend is publishing the full array of messages onto the Vertx EventBus whenever an update is made (which is a little bit of overkill, but let’s accept this for this example). How can the frontend finally catch these updates?</p>
<p>Fortunately the Vertx EventBus (which is based on SockJS) allows us to subscribe clients to channels that can be fueled by any other client (c2c communication) or also from the server.</p>
<p>Our eventBus service provides a function to <strong>subscribe</strong> to such a channel (see the code above). This is being used again on the Home.vue component to capture changes on the message array and on the number of connections the vertx server is managing in the following way:</p>
<p>Here we’re capturing the messages coming from the <strong>:pubsub/connections</strong> and <strong>:pubsub/messages</strong> channels and we’re pushing the incoming data into the frontend. This allows to keep multiple browsers that run the same app perfectly in sync through the vertx EventBus.</p>
<h3 id="limitations">Limitations</h3>
<p>One of the biggest limitations of this example is the setup of the vertx Backend. In particular the security on the vertx Eventbus is not yet configured, since we don’t check whether the user that’s calling the API is actually authenticated on the backend. So do not use this code for production apps without working on this.</p>
<p>Another aspect is that the EventBus and also the /login handler on the Backend still work over HTTP. The redirection to HTTPS code that’s in place only relates to the static resources, not yet to the EventBus as far I have tested with limited time. I guess since we don’t really serve static HTML content through vertx, it would make sense to disable the HTTP server completely and just go with HTTPS.</p>
<p>Finally the HTTPS certificate was self-signed and certainly you don’t want to use this for serious use outside of localhost. Get yourself a CA-signed certificate (e.g. from LetsEncrypt) and go from there.</p>
<p>Other than that : happy vertx’ing !</p>
<p>If you need OAuth based on Google instead of Keycloak, checkout <br><a href="https://medium.com/@thomas.reinecke/google-oauth2-with-vuejs-and-vert-x-6c9d9e617bf" rel="noopener">Google OAuth2 with VueJS and Vert.x</a></p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
