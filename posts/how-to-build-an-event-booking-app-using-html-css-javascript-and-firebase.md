---
card: "/images/default.jpg"
tags: [JavaScript]
description: In this tutorial, we are going to build an Event Booking App
author: "Milad E. Fahmy"
title: "How to Build an Event Booking App Using HTML, CSS, JavaScript, and Firebase"
created: "2021-08-15T19:30:30+02:00"
modified: "2021-08-15T19:30:30+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-firebase ">
<header class="post-full-header">
<h1 class="post-full-title">How to Build an Event Booking App Using HTML, CSS, JavaScript, and Firebase</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/03/cover-2.png 300w,
/news/content/images/size/w600/2020/03/cover-2.png 600w,
/news/content/images/size/w1000/2020/03/cover-2.png 1000w,
/news/content/images/size/w2000/2020/03/cover-2.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/03/cover-2.png" alt="How to Build an Event Booking App Using HTML, CSS, JavaScript, and Firebase">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>In this tutorial, we are going to build an Event Booking App with HTML, CSS, JavaScript, and Firebase.</p>
<ul>
<li><a href="#plan-our-app">Plan our app</a></li>
<li><a href="#markup">Markup</a></li>
<li><a href="#styling">Styling</a></li>
<li><a href="#interact-with-firebase">Interact With Firebase</a></li>
<li><a href="#fetch-events">Fetch events</a></li>
<li><a href="#create-an-event">Create an event</a></li>
<li><a href="#book-an-event">Book an event</a></li>
<li><a href="#show-and-update-data-with-javascript">Show and Update Data with JavaScript</a></li>
</ul>
<h2 id="plan-our-app">Plan our app</h2>
<p>We are not going to build a complete event booking app with all the functionality. We don't need to cover everything in just one tutorial. Since I just want to keep things simple and easy to digest, we'll go over the authentication part in a separate article.</p>
<p>So, our Event Booking App will have the following functionalities:</p>
<ul>
<li>The user can create an event and store it to Firestore.</li>
<li>The user can fetch all events in real-time.</li>
<li>The user can book an event.</li>
<li>The user can't book an event more than once.</li>
</ul>
<p>Now that we know what our app will look like, let's start building it in the next section.</p>
<h2 id="markup">Markup</h2>
<p>Our HTML file will be relatively simple. We will hold our navigation bar and the latest event in the <code>header</code> tag.</p>
<ul>
<li>In <code>index.html</code></li>
</ul><pre><code class="language-html">&lt;body&gt;
&lt;header id="home"&gt;
&lt;nav class="navbar"&gt;
&lt;h1&gt;Eventic&lt;/h1&gt;
&lt;ul&gt;
&lt;li&gt;&lt;a href="#home"&gt;Home&lt;/a&gt;&lt;/li&gt;
&lt;li&gt;&lt;a href="#events"&gt;Events&lt;/a&gt;&lt;/li&gt;
&lt;li&gt;&lt;a href="#add-event"&gt;New Event&lt;/a&gt;&lt;/li&gt;
&lt;/ul&gt;
&lt;/nav&gt;
&lt;div class="welcome-event"&gt;&lt;/div&gt;
&lt;/header&gt;
&lt;main&gt;
&lt;section id="events"&gt;
&lt;h1 class="section-title"&gt;Events&lt;/h1&gt;
&lt;div class="events-container"&gt;&lt;/div&gt;
&lt;/section&gt;
&lt;section id="add-event"&gt;
&lt;h1 class="section-title"&gt;New Event&lt;/h1&gt;
&lt;form class="form"&gt;
&lt;input type="text" id="name" placeholder="Name"&gt;
&lt;input type="number" id="attendee" placeholder="Attendees"&gt;
&lt;textarea id="description" cols="30" rows="10" placeholder="Description..."&gt;&lt;/textarea&gt;
&lt;select id="status"&gt;
&lt;option value="0"&gt;Free&lt;/option&gt;
&lt;option value="1"&gt;Paid&lt;/option&gt;
&lt;/select&gt;
&lt;button class="btn btn-primary"&gt;Save&lt;/button&gt;
&lt;/form&gt;
&lt;/section&gt;
&lt;/main&gt;
</code></pre>
<p>Next, the <code>main</code> tag will wrap the list of events and the form which enables us to create a new event.</p>
<p>The events will be displayed later with the help of JavaScript.</p>
<ul>
<li>In <code>index.html</code></li>
</ul><pre><code class="language-html">&lt;script src="https://www.gstatic.com/firebasejs/7.9.1/firebase-app.js"&gt;&lt;/script&gt;
&lt;script src="https://www.gstatic.com/firebasejs/7.9.1/firebase-firestore.js"&gt;&lt;/script&gt;
&lt;script&gt;
// Your web app's Firebase configuration
var firebaseConfig = {
apiKey: "xxxxxxxxxxxxxxxxxxxxxxxxx",
authDomain: "xxxxxxxxxxxxxxxxxxxxxxxx",
databaseURL: "xxxxxxxxxxxxxxxxxxxxxxxxx",
projectId: "xxxxxxxxxxxxxxxxxxxxxxxxx",
storageBucket: "xxxxxxxxxxxxxxxxxxxxxxxxx",
messagingSenderId: "xxxxxxxxxxxxxxxxxxxxxxxxx",
appId: "xxxxxxxxxxxxxxxxxxxxxxxxx"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore()
&lt;/script&gt;
&lt;script src="db.js"&gt;&lt;/script&gt;
&lt;script src="app.js"&gt;&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre>
<p>Next, we need to connect our app to <a href="https://firebase.google.com/">Firebase</a> to be able to store our data.</p>
<p>To have these credentials, you will need to create a new app in the <a href="https://console.firebase.google.com/">Firebase Console</a>. And once the project created, click on the code icon <code>&lt;/&gt;</code> that sits next to the iOS and Android icons to register your app.</p>
<p>Now, to generate the credentials, you have to register the name of your app.<br>And finally, put the credentials in the HTML file as I do here.</p>
<p>Next, duplicate the first <code>script</code> tag and change <code>firebase-app.js</code> to <code>firebase-firestore.js</code> because we will use Firestore in this project.</p>
<p>Then, initialize <code>firebase</code> with the configuration and declare a <code>db</code> variable that will be used later to interact with Firebase.</p>
<p>Now, we have our markup and have successfully linked our project to Firebase. So let's start styling it in the next section.</p>
<h2 id="styling">Styling</h2>
<p>The CSS file is a bit long, so I won't cover everything in this post. I will just highlight the most important parts. However, no worries, you will find the source code at the end of the article.</p>
<p>As usual, we start by importing our font and doing some resets to prevent the default behavior.</p>
<ul>
<li>In <code>style.css</code></li>
</ul><pre><code class="language-css">@import url('https://fonts.googleapis.com/css?family=Nunito:400,700&amp;display=swap');
*,
*::after,
*::before {
margin: 0;
padding: 0;
box-sizing: border-box;
}
html {
--primary-color:#e74c3c;
--secondary-color:#222;
--tertiary-color:#333;
--light-color: #fff;
scroll-behavior: smooth;
}
body {
background-color: #1f1f1f;
font-family: 'Nunito', sans-serif;
font-size: 1rem;
color: var(--light-color);
line-height: 1.6;
}
</code></pre>
<p>Next, we use CSS Variables to store our colors and set the <code>scroll-behavior</code> to <code>smooth</code> so we have a nice scrolling effect when the user clicks in the navbar links.</p>
<p>However, be careful with the <code>scroll-behavior</code>, as it's not <a href="https://caniuse.com/#search=scroll-behavior">supported by all browsers</a>. You can check on browser compatibility <a href="https://caniuse.com/">here</a>.</p>
<ul>
<li>In <code>style.css</code></li>
</ul><pre><code class="language-css">nav {
display: flex;
justify-content: space-between;
align-items: center;
padding: 0.5rem 2.5rem;
z-index: 100;
width: 100%;
transition: background 0.3s;
position: fixed;
top: 0;
left: 0;
}
nav ul {
display: flex;
list-style: none;
}
nav li:not(:last-child), .welcome-event div span {
margin-right: 1.5rem;
}
</code></pre>
<p>For the navbar, by default, the background will be transparent. For better usability, it will change when the user starts scrolling.</p>
<p>Our Event Booking App is starting to take shape. Now let's start implementing Firebase and connect our app to Firestore.</p>
<h2 id="interact-with-firebase">Interact With Firebase</h2>
<p><a href="https://firebase.google.com/?gclid=EAIaIQobChMIjIichor85wIVWOJ3Ch1o_AlDEAAYASAAEgKmL_D_BwE">Firebase</a> is a platform that handles everything related to the back-end for us. The only thing we have to do is connect our app to it and start using the database or other services.</p>
<p><a>Firestore</a> is a NoSQL database, and it's non-relational and uses documents, collections, and so on to create the database.</p>
<p>Now, let's connect to Firestore and create our very first database.</p>
<h3 id="fetch-events">Fetch events</h3>
<p>Earlier in this tutorial, we had declared a variable <code>db</code> in the HTML part. Now, let's use that variable to connect our app to Firestore.</p>
<p>I will put everything related to the database on the <code>db.js</code> file to just have a cleaner structure.</p>
<ul>
<li>In <code>db.js</code></li>
</ul><pre><code class="language-javascript">db.collection('events').onSnapshot(snapshot =&gt; {
// Handle the latest event
const newestEvent = snapshot.docChanges()[0].doc.data()
const id = snapshot.docChanges()[0].doc.id
showLatestEvent(newestEvent, id);
// delete the latest event element
snapshot.docChanges().shift()
snapshot.docChanges().forEach(event =&gt; {
showEvents(event.doc.data(), event.doc.id)
});
})
</code></pre>
<p>With the help of <code>db</code>, we can now access our collection <code>events</code>. It's just the name of our database, and if it doesn't exist Firestore will create it on the fly for us.</p>
<p>The collection object has a very handy method called <code>onSnapshot()</code>. It helps us listen in real-time to the database. This means that whenever a change occurs on it, it will react and return the change in real-time.</p>
<p>The <code>onSnapshot()</code> method will also help us access the document (our data). And now, we can extract the latest event to show on the header. And, before looping through the events array, delete the latest event so that it doesn't display it again.</p>
<p>Now, to display the events on the UI, we have to call our necessary functions <code>showLatestEvent()</code> and <code>showEvents()</code>. Then we pass the event and the id to them as parameters.</p>
<p>We can now fetch the events from Firestore, but we still don't have any events to show. Let's store our very first event in our database.</p>
<h3 id="create-an-event">Create an event</h3>
<p>To get the values entered by the user, we have to first select the <code>form</code> tag and use it to pick the id of each input and pull the value entered.</p>
<ul>
<li>In <code>db.js</code></li>
</ul><pre><code class="language-javascript">const addNewEvent = () =&gt; {
const event = {
name: form.name.value,
attendee: form.attendee.value,
booked: 0,
description: form.description.value,
status: parseInt(form.status.value, 10)
}
db.collection('events').add(event)
.then(() =&gt; {
// Reset the form values
form.name.value = "",
form.attendee.value = "",
form.description.value = "",
form.status.value = ""
alert('Your event has been successfully saved')
})
.catch(err =&gt; console.log(err))
}
</code></pre>
<p>The <code>db</code> variable (remember it's the reference to <code>firebase.firestore()</code>) has another method to save data to Firestore: the <code>save()</code> function. It's a promise, and once it's complete, we can now reset the values of the form and show a success message to the user.</p>
<p>Now, let's move on and handle the case when the user wants to book an event.</p>
<h3 id="book-an-event">Book an event</h3>
<p>As I said earlier, we can't check if the user is authenticated or not, so they can potentially book an event more than once.</p>
<p>So to handle this, I will use <code>localStorage</code> to prevent booking duplication.</p>
<ul>
<li>In <code>db.js</code></li>
</ul><pre><code class="language-javascript">let bookedEvents = [];
const bookEvent = (booked, id) =&gt; {
const getBookedEvents = localStorage.getItem('booked-events');
if (getBookedEvents) {
bookedEvents = JSON.parse(localStorage.getItem('booked-events'));
if(bookedEvents.includes(id)) {
alert('Seems like you have already booked this event')
}
else {
saveBooking(booked, id)
}
}
else {
saveBooking(booked, id)
}
};
const saveBooking = (booked, id) =&gt; {
bookedEvents.push(id);
localStorage.setItem('booked-events', JSON.stringify(bookedEvents));
const data = { booked: booked +1 }
db.collection('events').doc(id).update(data)
.then(() =&gt; alert('Event successfully booked'))
.catch(err =&gt; console.log(err))
}
</code></pre>
<p>And as you can see here, we first check if the event id is stored or not in localStorage. If it is, the user can't book the same event again. Otherwise, they will be able to book the event.</p>
<p>And to update the booking counter, we use again <code>db</code> to update the event on Firestore.</p>
<p>The <code>db.js</code> file is now complete, So, let's move to the final part and connect our project to <code>db.js</code></p>
<h2 id="show-and-update-data-with-javascript">Show and Update Data with JavaScript</h2>
<p>As usual, we start by selecting the necessary elements.</p><pre><code class="language-javascript">const eventsContainer = document.querySelector('.events-container')
const nav = document.querySelector('nav')
const welcomeEvent = document.querySelector('.welcome-event')
const form = document.querySelector('.form')
const showEvents = (event, id) =&gt; {
const {name, attendee, status, description, booked} = event
const eventStatus = status === 0 ? 'free': 'paid'
const output = `
&lt;div&gt;
&lt;h1&gt;${name}&lt;/h1&gt;
&lt;span&gt;${attendee - booked} attendees&lt;/span&gt;
&lt;/div&gt;
${eventStatus}
&lt;/span&gt;
&lt;p&gt;${description}&lt;/p&gt;
&lt;button onclick="bookEvent(${booked} ,'${id}')" class="btn btn-tertiary"&gt;Book&lt;/button&gt;
&lt;/div&gt;
&lt;/div&gt;
`
eventsContainer.innerHTML += output;
}
</code></pre>
<p>Earlier in this article, we had passed as a parameter to the <code>showEvents()</code> function the event fetched from Firestore in the <code>db.js</code> file.</p>
<p>We can now pull the values held on the event object and display it. And, when the user clicks on the button to book an event, we will call the <code>bookEvent()</code> function to handle it.</p><pre><code class="language-javascript">const showLatestEvent = (latestEvent, id) =&gt; {
const {name, attendee, status, description, booked} = latestEvent
// Get the first event
welcomeEvent.innerHTML = `
&lt;h1&gt;${name}&lt;/h1&gt;
&lt;p&gt;${description.length &gt;= 100 ? `${description.substring(0, 100)}...` : description}&lt;/p&gt;
&lt;div&gt;
&lt;span&gt;Attendees: ${attendee - booked}&lt;/span&gt;
&lt;span&gt;Status: ${status === 0 ? 'free': 'paid'}&lt;/span&gt;
&lt;/div&gt;
&lt;button onclick="bookEvent(${booked} ,'${id}')" class="btn btn-tertiary"&gt;Book&lt;/button&gt;
`
}
form.addEventListener('submit', e =&gt; {
e.preventDefault()
addNewEvent()
})
window.onscroll = () =&gt;  {
if (document.body.scrollTop &gt; 20 || document.documentElement.scrollTop &gt; 20) {
nav.style.background = 'var(--tertiary-color)';
nav.style.boxShadow = '0 10px 42px rgba(25,17,34,.1)';
} else {
nav.style.background = 'none';
nav.style.boxShadow = 'none';
}
}
</code></pre>
<p>As you can see, the <code>showLatestEvent()</code> method is quite similar to <code>showEvents()</code>, unlike the element used to display the event.</p>
<p>And, when the description is a bit long, we use <code>substring()</code> to truncate the value.</p>
<p>Next, we listen to the <code>form</code> element to handle the submit event and store it to Firestore with <code>addNewEvent()</code>.</p>
<p>And to make everything looking nice, when the user scrolls we add a background color and a box-shadow to the navigation bar.</p>
<p>With that change, we have now our Event booking App using JavaScript and Firebase.</p>
<p>Thanks for reading this article.</p>
<p>You can check it <a href="https://event-booking.netlify.com/">live here</a> or find the <a href="https://github.com/ibrahima92/event-booking-app-with-javascript-and-firebase">Source Code here</a>.</p>
<p><a href="https://www.ibrahima-ndaw.com">Read more articles on my blog</a> - <a href="https://ibrahima-ndaw.us5.list-manage.com/subscribe?u=8dedf5d07c7326802dd81a866&amp;id=5d7bcd5b75">Subscribe to my newsletter</a> - <a href="https://twitter.com/ibrahima92_">Follow me on twitter</a></p>
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
