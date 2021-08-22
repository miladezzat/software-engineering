---
card: "https://cdn-media-1.freecodecamp.org/images/1*aJhKGNE9DKAbp8YODtMfSQ.jpeg"
tags: [JavaScript]
description: by Paul Pinard
author: "Milad E. Fahmy"
title: "How to code a chatbot tailored for web apps like Google Maps"
created: "2021-08-15T19:36:14+02:00"
modified: "2021-08-15T19:36:14+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-chatbots tag-google-maps tag-web-applications tag-tech ">
<header class="post-full-header">
<h1 class="post-full-title">How to code a chatbot tailored for web apps like Google Maps</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*aJhKGNE9DKAbp8YODtMfSQ.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*aJhKGNE9DKAbp8YODtMfSQ.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*aJhKGNE9DKAbp8YODtMfSQ.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*aJhKGNE9DKAbp8YODtMfSQ.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*aJhKGNE9DKAbp8YODtMfSQ.jpeg" alt="How to code a chatbot tailored for web apps like Google Maps">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Paul Pinard</p>
<h1 id="how-to-code-a-chatbot-tailored-for-web-apps-like-google-maps">How to code a chatbot tailored for web apps like Google Maps</h1>
<p><em>In this article, we’ll learn how to integrate a SAP Conversational AI chatbot into any of your web applications and provide users with a fun and intuitive way to interact with the UI!</em></p>
<p>Conversational interfaces are gaining in popularity, especially for transacting with seemingly opaque backend systems. For example, we can deploy a chatbot to walk a customer through a troubleshooting process and create a ticket if they require further assistance; all without the customer having to know the ticket creation process.</p>
<p>This allows for a more intuitive experience for your customer, increasing customer satisfaction, while also improving efficiency by freeing employees from handling the classification and routing of tickets.</p>
<p>Conversational AI can handle this out of the box, but what if your users want to be able to interact with your front end application?</p>
<p>For example, it might be nice for your user to navigate to a certain page within your website without having to find the exact link. Or allow your user to apply a complex filter to a list of products without having to click around menus.</p>
<p>Though our webchat can be imbedded in any website, it does not have the contextual awareness of the UI necessary for these sorts of interactions. To demonstrate how we can accomplish this contextual awareness, we will create a simple map application with an embedded bot that has the ability to move the map and zoom in or out:</p>
<h3 id="resources">Resources</h3>
<p><a href="https://cai.tools.sap/blog/build-your-first-bot-with-sap-conversational-ai/" rel="noopener">Create your first chatbot on SAP Conversational AI</a></p>
<p><a href="https://github.com/SAPConversationalAI/Webchat#self-hosted-webchat" rel="noopener">Learn how to selfhost the Webchat</a></p>
<p><a href="https://developers.google.com/maps/documentation/javascript/tutorial" rel="noopener">Google Maps APIs</a></p>
<p><a href="https://cai.tools.sap/timoteo/map-mover" rel="noopener">Map mover bot</a></p>
<p><a href="https://github.com/timothy-janssen/map-app" rel="noopener">Frontend Application source code</a></p>
<p><a href="https://map-app-demo-1.herokuapp.com/" rel="noopener">Final Map Application</a></p>
<h3 id="pre-requisites">Pre-requisites</h3>
<ul>
<li>First, you will need to be comfortable building a simple bot using <a href="https://cai.tools.sap/" rel="noopener">SAP Conversational AI</a>. If you are unfamiliar with the platform, head over to <a href="https://cai.tools.sap/blog/build-your-first-bot-with-sap-conversational-ai/" rel="noopener">this tutorial</a> to learn how to build a hilarious joke bot.</li>
<li>You will also need to be able to host our webchat component somewhere that you control. Our <a href="https://github.com/SAPConversationalAI/Webchat#self-hosted-webchat" rel="noopener">GitHub </a>has all the information to get you started.</li>
<li>It is also expected that you are at least familiar with JavaScript and front end web development basics.</li>
</ul>
<h3 id="tutorial">Tutorial</h3>
<p>To start, we will need to define the interface for our bot to be able to send commands and messages to our front end. This will be accomplished by sending a stringified JSON object in the place of the normal message string we generally send to the user. Our modified webchat will be able to understand this JSON object, take the defined action and finally display a “message” to the user.</p>
<p>This can be accomplished fairly simply; we will send an object with an action of either “<em>move</em>” or “<em>zoom</em>” and then a message that we can show to the user. Note that we will pass this JSON object as a string, and it is our assumption that the application will parse it and display only the value of “message” to the user.</p><pre><code>{ "action": "move" || "zoom", "message": "This will be displayed to the user" }</code></pre>
<p>If our action type is “<em>move</em>”, the map will need coordinates to navigate to. <br>So, we will include a location’s coordinates in our JSON object. Alternatively, if our action is <em>zoom</em>, we will need to know whether to <em>zoom in</em> or <em>out</em>. For this, we will include a direction represented as a 1 for in or a -1 for out. With this defined, here are some examples of what our JSON objects could look like:</p><pre><code>{"action": "move", "location": { "lat": -8.3405389, "Ing": 115.0919509 "message": "Going to Bali, Indonesia!" }{"action": "zoom" "direction": 1, "message": "Zooming in!"}</code></pre>
<p>With that in mind, we can start building our bot. As always, we will start with defining the intents our user could say. In this case we have <em>zoom</em> and <em>move-map</em>.</p>
<p>Note that we will need to tag the sentences in <em>@zoom</em> with the entity ‘direction’, but ‘location’ is automatically recognized in <em>@move-map</em>. Luckily for us, the location gold entity comes with the longitude and latitude out of the box, so we will be able to easily pass these to the front end.</p>
<p>To get the 1 or -1 that represents our zooming direction, we will leverage custom enrichments. We will add the keys “name” and “direction” with the following values. Then map the correct entity values to their respective key values.</p>
<p>Now that we can recognize our move-map intent, we just need a skill that is triggered if our intent is matched:</p>
<p>And requires a location:</p>
<p>And finally sends a message back telling the front-end where to go:</p>
<p>The zoom skill can be implemented in much the same way; I encourage you to try it for yourself!</p>
<p>Now that our bot is done, we will need to host the webchat locally so that we can modify it to understand our “unusual” responses. If you are unfamiliar with the self-hosting process, check out <a href="https://github.com/SAPConversationalAI/Webchat#self-hosted-webchat" rel="noopener">this github</a>.</p>
<p>Finally, it’s time to build our web application. We will start by including a container div for our map, the script we will write to handle the map interactions (map_controls.js), the necessary script as described in <a href="https://developers.google.com/maps/documentation/javascript/tutorial" rel="noopener">this tutorial from Google</a>, and the script tag pointing to our locally hosted bot. It should look something like this:</p>
<p>To complete our simple application, we will implement our map initialization and zoom/move methods:</p><pre><code>function initMap () {  window.map = new google.maps.Map(document.getElementById('map'), {    // OPTIONS    center: {lat: -34.397, lng: 150.644},    zoom: 8,    zoomControl: false,    streetViewControl: false,    mapTypeControl: false,    rotateControl: false,    scaleControl: false,    fullscreenControl: false  });}     const zoom = (direction) =&gt; {  window.map.setZoom(window.map.getZoom() + direction);}</code></pre><pre><code>const setCenter = (lat, lng) =&gt; {  window.map.setCenter({lat: lat, lng: lng});}</code></pre>
<p>Once we have the chatbot successfully added to our application, we will be able to ask it to move around or zoom in/out, but it will still just display that ugly JSON string to us. To solve that, we will add the following code to Webchat/src/containers/Chat/index.js. This will search the window object for a function called applicationParse and call it if it exists.</p><pre><code>const getApplicationParse =  messages  =&gt; {  return new Promise(resolve =&gt; {    if (!window.webchatMethods || !window.webchatMethods.applicationParse) {      return resolve()    }    // so that we process the message in all cases    setTimeout(resolve, MAX_GET_MEMORY_TIME)    try {      const applicationParseResponse = window.webchatMethods.applicationParse(messages)      if (!applicationParseResponse) {        return resolve()      }      if (applicationParseResponse.then &amp;&amp; typeof applicationParseResponse.then === 'function') {        // the function returned a Promise        applicationParseResponse          .then(applicationParse =&gt; resolve())          .catch(err =&gt; {            console.error(FAILED_TO_GET_MEMORY)            console.error(err)            resolve()          })      } else {        resolve()      }    } catch (err) {      console.error(FAILED_TO_GET_MEMORY)      console.error(err)      resolve()    }  })}</code></pre>
<p>Now, we will call getApplicationParse before the call to setState in componentWillReceiveProps. This will ensure that our application has a chance to parse the response from the bot before anything is sent back to the user.</p><pre><code>componentWillReceiveProps(nextProps) {  const { messages, show } = nextProps    if (messages !== this.state.messages) {    getApplicationParse(messages)    this.setState({ messages }, () =&gt; {      const { getLastMessage } = this.props      if (getLastMessage) {        getLastMessage(messages[messages.length - 1])      }    })  }  if (show &amp;&amp; show !== this.props.show &amp;&amp; !this.props.sendMessagePromise &amp;&amp; !this._isPolling) {    this.doMessagesPolling()  }}</code></pre>
<p>Finally, we need to implement applicationParse and include it in the window object from map_controls.js. Here, we will loop through our messages, and if it is a valid action command from the bot, take the action and return only the message back to the user.</p><pre><code>window.webchatMethods = {  applicationParse: (messages) =&gt; {    messages.map(message =&gt; {      try {        var obj = JSON.parse(message.attachment.content);        console.log(obj);        if(obj !== undefined &amp;&amp;            obj.action == 'zoom' &amp;&amp;            typeof obj.direction === "number"){          message.attachment.content = obj.message.toString();          zoom(obj.direction);        } else if (obj !== undefined &amp;&amp;                    obj.action == 'move' &amp;&amp;                    typeof obj.location.lat === "number" &amp;&amp;                    typeof obj.location.lng === "number") {          message.attachment.content = obj.message.toString();          setCenter(obj.location.lat, obj.location.lng);        }      } catch (err) {        // Invalid JSON - treat it as a regular message and pass it back to UI as is      }      message    })     return messages;       }}</code></pre>
<p>You can now ask your bot to move or zoom the map and it will send a message that the application can interpret and act upon.</p>
<p>With this tool in your tool belt, you can now integrate a chatbot into any of your web applications!</p>
<p><em>Originally published on <a href="https://cai.tools.sap/blog/how-to-control-your-web-application-with-an-integrated-chatbot/" rel="noopener">SAP Conversational AI blog</a>.</em></p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
