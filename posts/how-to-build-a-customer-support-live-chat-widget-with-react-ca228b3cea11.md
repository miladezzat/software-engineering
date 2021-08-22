---
card: "https://cdn-media-1.freecodecamp.org/images/1*dezdlu7b6juRGJAMukMwJQ.png"
tags: [JavaScript]
description: "Live chat is a customer support method with a proven record. "
author: "Milad E. Fahmy"
title: "How to build a customer support live chat widget with React"
created: "2021-08-16T10:07:52+02:00"
modified: "2021-08-16T10:07:52+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-react tag-web-development tag-programming tag-tech ">
<header class="post-full-header">
<h1 class="post-full-title">How to build a customer support live chat widget with React</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*dezdlu7b6juRGJAMukMwJQ.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*dezdlu7b6juRGJAMukMwJQ.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*dezdlu7b6juRGJAMukMwJQ.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*dezdlu7b6juRGJAMukMwJQ.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*dezdlu7b6juRGJAMukMwJQ.png" alt="How to build a customer support live chat widget with React">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
cd react-express-chat-widget
npm init -y</code></pre><p>Next, install Express and axios:</p><pre><code>npm install express axios</code></pre><p>Then, in a file called <code>sever.js</code> paste:</p><pre><code class="language-js">const express = require('express');
const axios = require('axios');
const app = express();
// enter CometChat Pro configurations here
const appID = '{appID}';
const apiKey = '{apiKey}';
const agentUID = '{agentUID}';
const url = 'https://api.cometchat.com/v1';
const headers = {
'Content-Type': 'application/json',
appid: appID,
apikey: apiKey,
};</code></pre><p>In the above file, we:</p><ol><li>Store our application credentials and agent user ID, which we created earlier</li><li>Define the CometChat API <code>url</code> for convenient access</li><li>Create a <code>headers</code> object with our <code>appID</code> and <code>apiKey</code>. We'll send this header with every request to CometChat</li></ol><p>In the same file, let’s now define a route to handle creating new CometChat users.</p><p>In order to create a new user, we need to send a POST request with the UID and name for the user.</p><p>In this tutorial, we will hard-code the same name for all customers — we’ll call every customer “customer” — but the UID has to be unique. For the UID, we can use <code>new Date().getTime()</code> to generate a random ID.</p><p>Add the following code to <code>server.js</code>:</p><pre><code class="language-js">app.get('/api/create', (req, res) =&gt; {
// data for new user
const data = {
// you can use your own logic to generate random UID and name
// only uid has to be unique
uid: new Date().getTime(),
name: 'customer',
};
axios
.post(`${url}/users`, JSON.stringify(data), {
headers,
})
.then(response =&gt; {
// user is created, fetch auth token
requestAuthToken(response.data.data.uid)
.then(token =&gt; {
console.log('Success:' + JSON.stringify(token));
// token is returned to client
res.json(token);
})
.catch(error =&gt; console.error('Error:', error));
})
.catch(error =&gt; console.error('Error:', error));
});
// this function will fetch token
const requestAuthToken = uid =&gt; {
return new Promise((resolve, reject) =&gt; {
axios
.post(`${url}/users/${uid}/auth_tokens`, null, {
headers,
})
.then(response =&gt; {
console.log('New Auth Token:', response.data);
resolve(response.data.data);
})
.catch(error =&gt; reject(error));
});
};</code></pre><p>When this route is called, Express will:</p><ul><li>Send a POST request to <a href="http://api.cometchat.com/v1/users" rel="noopener">https://api.cometchat.com/v1/users/</a> with the correct <code>headers</code> and information about the new user</li><li>Fetch an authentication token for the new user</li><li>And, finally, return it to the caller</li></ul><p>We also created a function called <code>requestAuthToken</code> to help with fetching the authentication token.</p><p>Next, in the same file, let’s create an authentication route we can call to create tokens for returning users:</p><pre><code class="language-js">//...
app.get('/api/auth', (req, res) =&gt; {
const uid = req.query.uid;
// if you have your own login method, call it here.
// then call CometChat for auth token
requestAuthToken(uid)
.then(token =&gt; {
console.log('Success:' + JSON.stringify(token));
res.json(token);
})
.catch(error =&gt; console.error('Error:', error));
});
//...</code></pre><p>Finally, let’s create a function to return a list of users, excluding the agent.</p><p>We’ll call this endpoint from the dashboard later to show a list of users the agent can talk with (of course, the agent doesn’t want to talk to themselves, so we filter them from the list):</p><pre><code class="language-js">//...
app.get('/api/users', (req, res) =&gt; {
axios
.get(`${url}/users`, {
headers,
})
.then(response =&gt; {
const { data } = response.data;
const filterAgentData = data.filter(data =&gt; {
// filter agent out from the list of users
return data.uid !== agentUID;
});
res.json(filterAgentData);
})
.catch(error =&gt; console.error('Error:', error));
});
//...</code></pre><p>At the very bottom of <code>server.js</code>, run the server:</p><pre><code class="language-js">const PORT = process.env.PORT || 5000;
app.listen(PORT, () =&gt; {
console.log(`Listening on port ${PORT}`);
});</code></pre><p>If you’ve been following along, this is what <code>server.js</code> should look like by now:</p><pre><code class="language-js">const express = require('express');
const axios = require('axios');
const app = express();
const appID = '{appID}';
const apiKey = '{apiKey}';
const agentUID = '{agentUID}';
const url = 'https://api.cometchat.com/v1';
const headers = {
'Content-Type': 'application/json',
appid: appID,
apikey: apiKey,
};
app.get('/api/create', (req, res) =&gt; {
const data = {
uid: new Date().getTime(),
name: 'customer',
};
axios
.post(`${url}/users`, JSON.stringify(data), {
headers,
})
.then(response =&gt; {
requestAuthToken(response.data.data.uid)
.then(token =&gt; {
console.log('Success:' + JSON.stringify(token));
res.json(token);
})
.catch(error =&gt; console.error('Error:', error));
})
.catch(error =&gt; console.error('Error:', error));
});
app.get('/api/auth', (req, res) =&gt; {
const uid = req.query.uid;
requestAuthToken(uid)
.then(token =&gt; {
console.log('Success:' + JSON.stringify(token));
res.json(token);
})
.catch(error =&gt; console.error('Error:', error));
});
const requestAuthToken = uid =&gt; {
return new Promise((resolve, reject) =&gt; {
axios
.post(`${url}/users/${uid}/auth_tokens`, null, {
headers,
})
.then(response =&gt; {
console.log('New Auth Token:', response.data);
resolve(response.data.data);
})
.catch(error =&gt; reject(error));
});
};
app.get('/api/users', (req, res) =&gt; {
axios
.get(`${url}/users`, {
headers,
})
.then(response =&gt; {
const { data } = response.data;
const filterAgentData = data.filter(data =&gt; {
return data.uid !== agentUID;
});
res.json(filterAgentData);
})
.catch(error =&gt; console.error('Error:', error));
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =&gt; {
console.log(`Listening on port ${PORT}`);
});</code></pre><p>In a terminal window, run <code>node server.js</code> and look out for a message that says "Listening on port 5000". Now would be a good time to test the end-points with curl or <a href="https://www.getpostman.com/" rel="noopener">Postman</a> but we'll trust they work and move on to the client.</p><h3 id="setting-up-the-react-app">Setting up the react app</h3><p>Inside your directory, run <code>npx create-react-app</code> to scaffold a new React application:</p><pre><code>npx create-react-app client</code></pre><p>Your folder structure should look like this:</p><pre><code class="language-js">|-- express-react-chat-widget
|-- package-lock.json
|-- package.json
|-- server.js
|-- client
|-- .gitignore
|-- package-lock.json
|-- package.json
|-- public
|-- src</code></pre><p>With your React application in place, navigate to the <code>client</code> directory install the following modules:</p><pre><code>cd client
npm install @cometchat-pro/chat react-chat-widget react-router-dom bootstrap react-md-spinner</code></pre><p>Create React app is really useful to bootstrap a React app, but it also generates a lot of files we don’t need (test files, and so on).</p><p>Before we jump into the code, remove everything in the <code>client/src</code> directory - we will start from scratch.</p><p>To begin, create a <code>config.js</code> file with your app ID and agent UID inside:</p><pre><code class="language-js">// client/src/config.js
const config = {
appID: '{appID}',
agentUID: '{agentUID}',
}
export default config;</code></pre><p>This is a bit of boilerplate we can use to reference our CometChat credentials from anywhere.</p><p>While we’re dealing with boilerplate, let’s also take this opportunity to create an <code>index.css</code> file:</p><pre><code class="language-css">body {
margin: 0;
padding: 0;
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
"Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
sans-serif;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
}
code {
font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
}
.message {
overflow: hidden;
}
.balon1 {
float: right;
background: #35cce6;
border-radius: 10px;
}
.balon2 {
float: left;
background: #f4f7f9;
border-radius: 10px;
}</code></pre><p>We will reference this later from the dashboard.</p><p>Now, in a file called <code>index.js</code> paste the following:</p><pre><code class="language-js">import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import { CometChat } from '@cometchat-pro/chat';
import config from './config';
CometChat.init(config.appID)
ReactDOM.render(&lt;App /&gt;, document.getElementById('root'));</code></pre><p>Here, we import Bootstrap, CometChat, and the config file we just created before initialising CometChat and rendering our <code>App</code>.</p><p>If you’re following along, you’ll have noticed we haven’t defined <code>App</code> yet - let's do that now.</p><p>In a file called <code>App.js</code>:</p><pre><code class="language-js">import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Client from './Client';
import Agent from './Agent';
const App = () =&gt; {
return (
&lt;Router&gt;
&lt;React.Fragment&gt;
&lt;ul&gt;
&lt;li&gt;
&lt;Link to='/'&gt;Client Home&lt;/Link&gt;
&lt;/li&gt;
&lt;li&gt;
&lt;Link to='/agent'&gt;Agent Dashboard&lt;/Link&gt;
&lt;/li&gt;
&lt;/ul&gt;
&lt;hr /&gt;
&lt;Route exact path='/' component={Client} /&gt;
&lt;Route path='/agent' component={Agent} /&gt;
&lt;/React.Fragment&gt;
&lt;/Router&gt;
);
}
export default App;</code></pre><p>Here, we define two routes:</p><ul><li>The <code>/</code> or <code>"Customer home"</code> route for the customer to chat with the agent</li><li>And the <code>/agent</code> or <code>"Agent Dashboard"</code> route for quick and convenient access to the dashboard</li></ul><p>Let’s tackle the customer-facing component first. We’ll call this the client component.</p><h3 id="creating-the-client-component">Creating the client component</h3><p>Our client component will have two main responsibilities:</p><ol><li>Create a new CometChat user through our Express server when a customer first connects</li><li>Send and receive messages in real-time.</li></ol><p>Create a file called <code>Client.js</code> and paste the following:</p><pre><code>// Client.js
import React, {Component} from 'react';
import { Widget, addResponseMessage, addUserMessage, dropMessages } from 'react-chat-widget';
import { CometChat } from '@cometchat-pro/chat';
import config from './config';
import 'react-chat-widget/lib/styles.css';
const agentUID = config.agentUID;
const CUSTOMER_MESSAGE_LISTENER_KEY = "client-listener";
const limit = 30;
class Client extends Component {
componentDidMount() {
addResponseMessage('Welcome to our store!');
addResponseMessage('Are you looking for anything in particular?');
}
render() {
return (
&lt;div className='App'&gt;
&lt;Widget
handleNewUserMessage={this.handleNewUserMessage}
title='My E-commerce Live Chat'
subtitle='Ready to help you'
/&gt;
&lt;/div&gt;
);
}
createUser = async () =&gt; {
const response = await fetch(`/api/create`)
const result = await response.json()
return result;
}
handleNewUserMessage = newMessage =&gt; {
console.log(`New message incoming! ${newMessage}`);
var textMessage = new CometChat.TextMessage(
agentUID,
newMessage,
CometChat.MESSAGE_TYPE.TEXT,
CometChat.RECEIVER_TYPE.USER
);
let uid = localStorage.getItem("cc-uid");
if (uid === null) {
// no uid, create user
this.createUser().then(
result =&gt; {
console.log('auth token fetched', result);
localStorage.setItem("cc-uid",result.uid)
// do login
CometChat.login(result.authToken)
.then(user =&gt; {
console.log("Login successfully:", { user });
CometChat.sendMessage(textMessage).then(
message =&gt; {
console.log('Message sent successfully:', message);
},
error =&gt; {
console.log('Message sending failed with error:', error);
}
);
// create listener
CometChat.addMessageListener(
CUSTOMER_MESSAGE_LISTENER_KEY,
new CometChat.MessageListener({
onTextMessageReceived: message =&gt; {
console.log("Incoming Message Log", { message });
addResponseMessage(message.text);
}
})
);
})
},
error =&gt; {
console.log('Initialization failed with error:', error);
})
} else {
// we have uid, do send
CometChat.sendMessage(textMessage).then(
message =&gt; {
console.log('Message sent successfully:', message);
},
error =&gt; {
console.log('Message sending failed with error:', error);
}
);
}
};
componentWillUnmount() {
CometChat.removeMessageListener(CUSTOMER_MESSAGE_LISTENER_KEY);
CometChat.logout();
dropMessages();
}
}
export default Client;</code></pre><p>Woah, that is a lot of new code. Let’s break it down.</p><p>The <code>render</code> function is simple enough, it mainly boils down to rendering the <a href="https://github.com/Wolox/react-chat-widget" rel="noopener">react-chat-widget</a>.</p><p>Most of the code is dedicated to handling new message sent by the customer in the function called <code>handleNewUserMessage</code>.</p><p>In a nutshell, we first check to see if customer UID exists in localStorage. If it does, we will use this UID to log the user in and send messages. Otherwise, we call <code>createUser()</code> and use the returned value to login. This <code>createUser</code> function calls the endpoint we defined earlier in the tutorial.</p><p>Finally, in a React lifecycle function called <code>componentWillUnmount</code>, we remember to remove the message listener.</p><p>Before moving on, here’s a little tip: In the above code, rather than typing server url and port <code>("localhost:5000/users"</code> or something like that) in our front-end, we can instead add a <a href="https://facebook.github.io/create-react-app/docs/proxying-api-requests-in-development" rel="noopener">proxy</a> option to <code>package.json</code>. This will allow us to write <code>/users"</code> instead of <code>//localhost:5000/users"</code>:</p><pre><code>"browserslist": [
"&gt;0.2%",
"not dead",
"not ie &lt;= 11",
"not op_mini all"
],
addResponseMessage('Welcome to our store!');
addResponseMessage('Are you looking for anything in particular?');
let uid = localStorage.getItem("cc-uid");
// check for uid, if exist then get auth token
if ( uid !== null) {
this.fetchAuthToken(uid).then(
result =&gt; {
console.log('auth token fetched', result);
// SDK login
CometChat.login(result.authToken)
.then( user =&gt; {
console.log("Login successfully:", { user });
// listen to incoming message and fetch previous messages
this.createMessageListener();
this.fetchPreviousMessages();
})
},
error =&gt; {
console.log('Initialization failed with error:', error);
}
);
}
}
// The functions used above
fetchAuthToken = async uid =&gt; {
const response = await fetch(`/api/auth?uid=${uid}`)
const result = await response.json()
return result;
}
createMessageListener = () =&gt; {
CometChat.addMessageListener(
CUSTOMER_MESSAGE_LISTENER_KEY,
new CometChat.MessageListener({
onTextMessageReceived: message =&gt; {
console.log("Incoming Message Log", { message });
addResponseMessage(message.text);
}
})
);
}
fetchPreviousMessages = () =&gt; {
var messagesRequest = new CometChat.MessagesRequestBuilder()
.setUID(agentUID)
.setLimit(limit)
.build();
messagesRequest.fetchPrevious().then(
messages =&gt; {
console.log("Message list fetched:", messages);
// add messages to the widget chat bubbles
messages.forEach( message =&gt; {
if(message.receiver !== agentUID){
addResponseMessage(message.text);
} else {
addUserMessage(message.text)
}
});
},
error =&gt; {
console.log("Message fetching failed with error:", error);
}
);
import {CometChat} from '@cometchat-pro/chat';
import MDSpinner from "react-md-spinner";
import config from './config';
const agentUID = config.agentUID;
const AGENT_MESSAGE_LISTENER_KEY = 'agent-listener'
const limit = 30;
class Agent extends Component {
state = {
customers: [],
selectedCustomer: '',
chat: [],
chatIsLoading: false,
customerIsLoading:true
}
}</code></pre><p>In the same file, create a <code>componentDidMount</code> method:</p><pre><code class="language-js">componentDidMount(){
this.fetchAuthToken(agentUID).then(
authToken =&gt; {
console.log('auth token fetched', authToken);
CometChat.login(authToken)
.then( user =&gt; {
console.log("Login successfully:", { user });
// after login, fetch all users
// put them into customer state
this.fetchUsers().then(result =&gt; {
this.setState({
customers: result,
customerIsLoading: false
})
});
CometChat.addMessageListener(
AGENT_MESSAGE_LISTENER_KEY,
new CometChat.MessageListener({
onTextMessageReceived: message =&gt; {
let {customers, selectedCustomer, chat} = this.state;
console.log("Incoming Message Log", { message });
// check incoming message
// if from the same customer agent is currently chatting
// push a new chat item into chat state
if(selectedCustomer === message.sender.uid){
chat.push(message);
this.setState({
chat
})
} else {
// if new customer, push a new customer into customer state
let aRegisteredCustomer = customers.filter( customer =&gt; {
return customer.uid === message.sender.uid });
if(!aRegisteredCustomer.length){
customers.push(message.sender)
this.setState({
customers
})
}
}
}
})
);
})
},
error =&gt; {
console.log('Initialization failed with error:', error);
}
);
}
fetchUsers = async () =&gt; {
const response = await fetch(`/api/users`)
const result = await response.json()
return result;
}</code></pre><p>There’s a lot happening in the above code, here’s a rundown to help you understand:</p><ol><li>First, we automatically login our agent and fetch all users for the agent to chat with from the server</li><li>Next, we create an incoming message listener. Every time a message is received in the selected conversation, we push it to the chat state which, in turn, updates the UI</li><li>If the incoming message is not from the currently selected conversation, we check to see if the new message is from registered customer. If not, we push that new customer to the customer state.</li></ol><p>You’ll probably recognise the Express API we create to get a list of registered users. We use this to populate the list of users on the left-hand-side of the dashboard. We will position the list to the left-hand-side using a combination of Bootstrap classes and the <code>index.css</code> file we defined earlier.</p><p>Next, let’s create the render function. It will render a conversation interface, styled with Bootstrap. To make the code easier to follow, we will separate <code>CustomerList</code> and <code>ChatBox</code> into their own components, which you can define in the same file:</p><pre><code class="language-js">render() {
return(
&lt;div className='container-fluid'&gt;
&lt;div className='row'&gt;
&lt;div className='col-md-2'&gt;&lt;/div&gt;
&lt;div className="col-md-8 h-100pr border rounded"&gt;
&lt;div className='row'&gt;
&lt;div className='col-lg-4 col-xs-12 bg-light' style={{ height: 658 }}&gt;
&lt;div className='row p-3'&gt;&lt;h2&gt;Customer List&lt;/h2&gt;&lt;/div&gt;
&lt;div className='row ml-0 mr-0 h-75 bg-white border rounded'
style={{ height: '100%', overflow:'auto' }}&gt;
{/* The CustomerList component */}
&lt;CustomerList {...this.state} selectCustomer={this.selectCustomer}/&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;div className='col-lg-8 col-xs-12 bg-light'  style={{ height: 658 }}&gt;
&lt;div className='row p-3 bg-white'&gt;
&lt;h2&gt;Who you gonna chat with?&lt;/h2&gt;
&lt;/div&gt;
&lt;div className='row pt-5 bg-white'
style={{ height: 530, overflow:'auto' }}&gt;
{/* The ChatBox component */}
&lt;ChatBox {...this.state} /&gt;
&lt;/div&gt;
&lt;div className="row bg-light" style={{ bottom: 0, width: '100%' }}&gt;
&lt;form className="row m-0 p-0 w-100" onSubmit={this.handleSubmit}&gt;
&lt;div className="col-9 m-0 p-1"&gt;
&lt;input id="text"
className="mw-100 border rounded form-control"
type="text"
name="text"
ref="message"
placeholder="Type a message..."/&gt;
&lt;/div&gt;
&lt;div className="col-3 m-0 p-1"&gt;
&lt;button className="btn btn-outline-secondary rounded border w-100"
title="Send"
style={{ paddingRight: 16 }}&gt;Send&lt;/button&gt;
&lt;/div&gt;
&lt;/form&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
)
}</code></pre><p><code>Chatbox</code> component:</p><pre><code class="language-js">class ChatBox extends Component {
render(){
const {chat, chatIsLoading} = this.props;
if (chatIsLoading) {
return (
&lt;div className='col-xl-12 my-auto text-center'&gt;
&lt;MDSpinner size='72'/&gt;
&lt;/div&gt;
)
}
else {
// simple mapping of array from props
return (
&lt;div className='col-xl-12'&gt;
{
chat
.map(chat =&gt;
&lt;div key={chat.id} className="message"&gt;
&lt;div className={
`${chat.receiver !== agentUID ? 'balon1': 'balon2'} p-3 m-1`
}&gt;
{chat.text}
&lt;/div&gt;
&lt;/div&gt;)
}
&lt;/div&gt;
)
}
}
}</code></pre><p><code>CustomerList</code> component:</p><pre><code class="language-js">class CustomerList extends Component {
render(){
const {customers, customerIsLoading, selectedCustomer} = this.props;
if (customerIsLoading) {
return (
&lt;div className='col-xl-12 my-auto text-center'&gt;
&lt;MDSpinner size='72'/&gt;
&lt;/div&gt;
)
}
else {
// simple mapping of array from props
return (
&lt;ul className="list-group list-group-flush w-100"&gt;
{
customers
.map(customer =&gt;
&lt;li
key={customer.uid}
className={
`list-group-item ${customer.uid === selectedCustomer ? 'active':''}`
}
onClick={ () =&gt; this.props.selectCustomer(customer.uid) }&gt;
{customer.name}
&lt;/li&gt;)
}
&lt;/ul&gt;
)
}
}
}</code></pre><p>That makes up the foundation for our UI, but we still can’t send messages.</p><p>To send messages, we have to create a handler for when the agent submits a new message. How to send messages should be familiar to you now because we’ll make the the same <code>sendMessage</code> call that we made in the Client component as well.</p><pre><code class="language-js">handleSubmit = event =&gt; {
event.preventDefault();
let message = this.refs.message.value;
var textMessage = new CometChat.TextMessage(
this.state.selectedCustomer,
message,
CometChat.MESSAGE_TYPE.TEXT,
CometChat.RECEIVER_TYPE.USER
);
CometChat.sendMessage(textMessage).then(
message =&gt; {
let {chat} = this.state;
console.log('Message sent successfully:', message);
chat.push(message);
this.setState({
chat
})
},
error =&gt; {
console.log('Message sending failed with error:', error);
}
);
this.refs.message.value='';
}</code></pre><p>We’ll also want to enable the agent to see historical messages like we did for the customer:</p><pre><code class="language-js">selectCustomer = uid =&gt; {
this.setState({
selectedCustomer: uid
}, ()=&gt; {this.fetchPreviousMessage(uid)})
}
fetchPreviousMessage = uid =&gt; {
this.setState({
hat: [],
chatIsLoading: true
}, () =&gt; {
var messagesRequest = new CometChat.MessagesRequestBuilder()
.setUID(uid)
.setLimit(limit)
.build();
messagesRequest.fetchPrevious().then(
messages =&gt; {
console.log("Message list fetched:", messages);
this.setState({
chat: messages,
chatIsLoading: false
})
},
error =&gt; {
console.log("Message fetching failed with error:", error);
}
);
});
}</code></pre><p>Remember to remove the message listener when the component unmounts:</p><pre><code>componentWillUnmount(){
CometChat.removeMessageListener(AGENT_MESSAGE_LISTENER_KEY);
CometChat.logout();
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
