---
card: "https://cdn-media-1.freecodecamp.org/images/0*CPTNvq87xG-sUGdx.png"
tags: [JavaScript]
description: by Aswin M Prabhu
author: "Milad E. Fahmy"
title: "How to build a real-time chatroom with Firebase and React (Hooks)"
created: "2021-08-15T19:38:25+02:00"
modified: "2021-08-15T19:38:25+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-programming tag-react tag-tech tag-firebase ">
<header class="post-full-header">
<h1 class="post-full-title">How to build a real-time chatroom with Firebase and React (Hooks)</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/0*CPTNvq87xG-sUGdx.png 300w,
https://cdn-media-1.freecodecamp.org/images/0*CPTNvq87xG-sUGdx.png 600w,
https://cdn-media-1.freecodecamp.org/images/0*CPTNvq87xG-sUGdx.png 1000w,
https://cdn-media-1.freecodecamp.org/images/0*CPTNvq87xG-sUGdx.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/0*CPTNvq87xG-sUGdx.png" alt="How to build a real-time chatroom with Firebase and React (Hooks)">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Aswin M Prabhu</p>
<p>If you are into front-end development, I bet you know what <a href="https://reactjs.org" rel="noopener"><strong>react</strong></a> is. It has become the most popular <strong>front-end framework</strong> and does not appear to be slowing down. <a href="https://firebase.google.com/" rel="noopener"><strong>Firebase</strong></a> is a <strong>back-end service </strong>created by<strong> </strong>Google that enables developers to rapidly iterate on their applications without worrying about run of the mill stuff like authentication, database, storage.</p>
<p>Firebase has two database options, both of which have awesome <a href="https://firebase.google.com/docs/firestore/query-data/listen" rel="noopener"><strong>real-time capabilities</strong></a>. For example, you can subscribe to changes in a document stored in firebase cloud firestore with the following JavaScript snippet.</p><pre><code>db.collection("cities").doc("SF")    .onSnapshot(function(doc) {        console.log("Current data: ", doc.data());    });</code></pre>
<p>The callback provided to the <code>onSnapshot()</code> function fires every time the document changes. Local writes from your app will fire it immediately with a feature called latency compensation.</p>
<p><a href="https://reactjs.org/docs/hooks-intro.html" rel="noopener"><strong>React Hooks</strong></a><strong> </strong>are an upcoming react feature that let you use state and other react features without writing a class. They’re currently in react v16.7.0-alpha. Building this app is a great way to explore the future of react with react hooks.</p>
<p>The final product will be an IRC like global chatroom app where we first ask the user to enter a nickname. Simple.</p>
<h3 id="scaffolding">Scaffolding</h3>
<p>A new react app can easily be created with the official <a href="https://www.npmjs.com/package/create-react-app" rel="noopener"><strong>create-react-app</strong></a> cli tool with the following terminal commands (react hooks need react and react-dom v16.7.0-alpha).</p><pre><code>npm i -g create-react-appcreate-react-app react-firebase-chatroomcd react-firebase-chatroomnpm i -S react@16.7.0-alpha.2 react-dom@16.7.0-alpha.2</code></pre>
<p>The firebase setup is pretty straight forward as well. Create a new project from the <a href="https://console.firebase.google.com/" rel="noopener"><strong>firebase console</strong></a><strong>. </strong>Setup the firebase real-time database in test mode. Initialize the local project with <a href="https://www.npmjs.com/package/firebase-tools?activeTab=versions" rel="noopener"><strong>firebase-tools</strong></a><strong> </strong>command. Choose the realtime-database and hosting as the enabled features. Select <code>build</code> as the public directory. Every other option can be left as is.</p><pre><code>npm i -g firebase-toolsfirebase-tools initnpm i -S firebase</code></pre>
<p>It might need you to login before you can initialize the repository.</p>
<p>The database structure will look like the following.</p>
<figcaption>Database structure</figcaption>
</figure>
<h3 id="building-the-app-using-good-old-class-based-components">Building the app using good old class based components</h3>
<p>React hooks are still an experimental feature and the API might change in the future. So let us first look at how the app can be build with class based components. I went with only the <code>App</code> component because the application logic was simple enough.</p>
<p>The user will be prompted to join with a nickname and an email if the <code>joined</code> variable is <code>false</code> . It is initially set to false in the <code>constructor</code> .</p><pre><code>constructor() {    super();    this.state = {      joined: false,      nickname: "",      email: "",      msg: "",      messages: {},    };    this.chatRoom = db.ref().child('chatrooms').child('global');    this.handleNewMessages = snap =&gt; {      console.log(snap.val());      if (snap.val()) this.setState({ messages: snap.val() });    };  }</code></pre><pre><code>  componentDidMount() {    this.chatRoom.on('value', this.handleNewMessages);  }</code></pre><pre><code>  componentWillUnmount() {    this.chatRoom.off('value', this.handleNewMessages);  }</code></pre>
<p>All the messages are initially fetched from firebase in the <code>componentDidMount</code> life cycle method. The <code>on</code> method on a db ref takes an <a href="https://firebase.google.com/docs/reference/js/firebase.database.Reference#on" rel="noopener">event type</a> and a callback as arguments. Every time a user sends a new message and updates the database, the <code>handleNewMessages</code> function receives a snapshot of the updated data and updates the state with the new messages. We can unsubscribe from the database updates in the <code>componentWillUnmount</code> life cycle method using the <code>off</code> method on the db ref.</p>
<p>A message can be sent by appending the message to the chatroom ref on the database. The <code>push</code> method of the ref generates a unique id for the new entry and appends it to the existing data.</p><pre><code>this.chatRoom.push({  sender: this.state.nickname,  msg: this.state.msg,});</code></pre>
<p>The messages are rendered by looping over the <code>messages</code> object.</p><pre><code>{Object.keys(this.state.messages).map(message =&gt; {  if(this.state.messages[message]["sender"] === this.state.nickname)    // render the user's messages        else    // render messages from other users})}</code></pre>
<p>The final <code>App</code> component will look like this.</p>
<p>Find the gist <a href="https://gist.github.com/aswinmprabhu/665c555577f78b4865bb782bb26df3bb" rel="noopener"><strong>here</strong></a><strong>.</strong></p>
<h3 id="migrating-to-react-hooks">Migrating to react hooks</h3>
<p>The simplest hook is the <code>useState</code> hook. It takes the initial state and returns the state variable and a function that lets you update it. This function acts as a replacement for <code>this.setState</code> . For example the nickname state logic can be modified as follows.</p><pre><code>const [nickname, setNickname] = useState("");const handleNameChange = e =&gt; setNickname(e.target.value);...// during render&lt;input placeholder="Nickname" value={nickname} onChange={handleNameChange} /&gt;</code></pre>
<p>The next challenge is to find a place for the logic inside the life cycle methods. This is where the <code>useEffect</code> hook comes in. This is where we perform logic that has side effects. It can be thought of as a combination of all the life cycle methods. <code>useEffect</code> can also optionally return a function that is used to clean up (like unsubscribe to an event).</p><pre><code>useEffect(() =&gt; {  const handleNewMessages = snap =&gt; {    if (snap.val()) setMessages(snap.val());  }  chatRoom.on('value', handleNewMessages);  return () =&gt; {    chatRoom.off('value', handleNewMessages);  };});</code></pre>
<p>Subscription and unsubscription were related pieces of logic that were split into different life cycle methods. Now they are put together in a single hook. Using different <code>useEffect</code> hooks for different side effects enables separation of concerns.</p>
<p>By default, <code>useEffect</code> runs both after the first render <em>and</em> after every update.</p>
<p>One of the major advantages of using hooks is that stateful logic can be reused between components. For example, imagine you want to reuse email input handling and validating logic in multiple components. A custom hook can achieve this as shown below. A custom hook is a function that can call other hooks and starts with “use”. Starting with “use” is not a rule but a very important convention.</p><pre><code>function useEmail(defaultEmail) {  const [email, setEmail] = useState(defaultEmail);  const [isValidEmail, setValidEmail] = useState(defaultEmail);</code></pre><pre><code>  function validateEmail(email) {    const re = /^(([^&lt;&gt;()\[\]\\.,;:\s@"]+(\.[^&lt;&gt;()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;    return re.test(String(email).toLowerCase());  }</code></pre><pre><code>function handleEmailChange(e) {    if (validateEmail(e.target.value)) {      setValidEmail(true);    }    setEmail(e.target.value);  }  return {    email,    handleEmailChange,    isValidEmail  };}</code></pre>
<p>And in your components you can use the custom hook as shown below.</p><pre><code>// in your componentsconst { email, handleEmailChange, isValidEmail } = useEmail("")...&lt;input value={email} value={email} onChange={handleEmailChange} /&gt;// show error message based on isValidEmail</code></pre>
<p>Custom hooks also make it easier to unit test a piece of logic independent of the components that use the hook.</p>
<p>The final <code>App</code> component looks as follows.</p>
<p>Find the gist <a href="https://gist.github.com/aswinmprabhu/601e74d26e88e882038764cc2e0b3df6" rel="noopener"><strong>here</strong></a>.</p>
<h4 id="there-s-more-to-read-on-hooks">There’s more to read on hooks</h4>
<ol>
<li><a href="https://reactjs.org/docs/hooks-intro.html#motivation" rel="noopener"><strong>Motivation behind hooks</strong></a></li>
<li><a href="https://reactjs.org/docs/hooks-rules.html" rel="noopener"><strong>Golden rules of hooks</strong></a></li>
<li><a href="https://reactjs.org/docs/hooks-reference.html" rel="noopener"><strong>Hooks API Reference</strong></a></li>
<li><a href="https://medium.com/@dan_abramov/making-sense-of-react-hooks-fdbde8803889" rel="noopener"><strong>Making sense of hooks by Dan Abramov</strong></a></li>
</ol>
<p>Find<strong> <a href="https://react-chat-room-4b8e8.firebaseapp.com/" rel="noopener">the final app</a></strong> with bare minimum styling.</p>
<p>Thanks for reading and happy hacking!</p>
<p>Find me on <a href="https://twitter.com/aswinmprabhu" rel="noopener"><strong>Twitter</strong></a> and <a href="https://github.com/aswinmprabhu" rel="noopener"><strong>GitHub</strong></a><strong>.</strong></p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
