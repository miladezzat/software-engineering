---
card: "https://cdn-media-1.freecodecamp.org/images/1*g_B4JNulmfXSj0AyEjImyA.jpeg"
tags: [JavaScript]
description: "In this tutorial, I will guide you to build your own group ch"
author: "Milad E. Fahmy"
title: "How to build a modern chat application with React.js"
created: "2021-08-16T10:06:49+02:00"
modified: "2021-08-16T10:06:49+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-react tag-software-development tag-web-development tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">How to build a modern chat application with React.js</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*g_B4JNulmfXSj0AyEjImyA.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*g_B4JNulmfXSj0AyEjImyA.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*g_B4JNulmfXSj0AyEjImyA.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*g_B4JNulmfXSj0AyEjImyA.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*g_B4JNulmfXSj0AyEjImyA.jpeg" alt="How to build a modern chat application with React.js">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
import { BrowserRouter as Router } from 'react-router-dom'; // added
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
ReactDOM.render(
&lt;Router&gt;
&lt;App /&gt;
&lt;/Router&gt;
, document.getElementById('root'));</code></pre><p><code>index.js</code> is the entry point for our application. Its only real job is to render our React application. Most of our “real” logic happens in a file called App.js, which we will modify next.</p><p>In App.js, we must import additional React Router dependencies which will enable us to render different components depending on what route the user has loaded. For example, if the user goes to the “/login” route, we should render the Login component. Likewise, if the user goes to the “/chat” route, we should render the <code>Groupchat</code> component:</p><pre><code class="language-js">import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import "./App.css";
// the below components will be created shortly
import Login from "./components/Login";
import Groupchat from "./components/Groupchat";
class App extends Component {
constructor(props) {
super(props);
}
render() {
return (
&lt;Switch&gt;
&lt;Redirect exact from="/" to="/login" /&gt;
&lt;Route path="/login" component={Login} /&gt;
&lt;Route path="/chat" component={Groupchat} /&gt;
&lt;/Switch&gt;
);
}
}
export default App;</code></pre><p>If you try to run this code it will definitely throw some errors because we haven’t made the <code>Login</code> and <code>Groupchat</code> components. Let’s do that now.</p><h3 id="create-the-login-component">Create the Login component</h3><p>To keep our project nice and tidy, create a folder called <code>components</code> to hold our custom components.</p><p>Then, in that newly-created folder, create a file called Login.js with the following code:</p><pre><code class="language-js">import React from "react";
class Login extends React.Component {
constructor(props) {
super(props);
this.state = {
};
}
render() {
return (
&lt;div className="App"&gt;
&lt;h1&gt;Login&lt;/h1&gt;
&lt;/div&gt;
);
}
}
export default Login;</code></pre><p>All we’re doing here is exporting a component with the heading text, “Login”. We’ll flesh this component out soon but for right now, we are merely creating boilerplate.</p><h3 id="create-the-groupchat-component">Create the Groupchat component</h3><p>In the same components folder, create a new component called Groupchat.js:</p><pre><code class="language-js">import React from "react";
class Groupchat extends React.Component {
constructor(props) {
super(props);
}
render() {
return &lt;div className="chatWindow" /&gt;;
}
}
appId: "", //Enter your App ID
apiKey: "", //Enter your API KEY
GUID: "", // Enter your group UID
};</code></pre><p>You can now close the dashboard. Once you setup CometChat, all interaction happens through code.</p><h3 id="create-a-cometchat-manager-class">Create a CometChat Manager class</h3><p>One of the beautiful things about React is that it lends itself to a separation of concerns. Our components can focus purely on presentation while we can create other modules to handle things like data fetching and state management.</p><p>To really take advantage of this, let’s create a new folder called “lib” and in that new folder, a file called chat.js. This is where all of our interaction with CometChat will take place:</p><pre><code class="language-js">import { CometChat } from "@cometchat-pro/chat";
import config from "../config";
export default class CCManager {
static LISTENER_KEY_MESSAGE = "msglistener";
static appId = config.appId;
static apiKey = config.apiKey;
static LISTENER_KEY_GROUP = "grouplistener";
static init() {
return CometChat.init(CCManager.appId);
}
static getTextMessage(uid, text, msgType) {
if (msgType === "user") {
return new CometChat.TextMessage(
uid,
text,
CometChat.MESSAGE_TYPE.TEXT,
CometChat.RECEIVER_TYPE.USER
);
} else {
return new CometChat.TextMessage(
uid,
text,
CometChat.MESSAGE_TYPE.TEXT,
CometChat.RECEIVER_TYPE.GROUP
);
}
}
static getLoggedinUser() {
return CometChat.getLoggedinUser();
}
static login(UID) {
return CometChat.login(UID, this.apiKey);
}
static getGroupMessages(GUID, callback, limit = 30) {
const messagesRequest = new CometChat.MessagesRequestBuilder()
.setGUID(GUID)
.setLimit(limit)
.build();
callback();
return messagesRequest.fetchPrevious();
}
static sendGroupMessage(UID, message) {
const textMessage = this.getTextMessage(UID, message, "group");
return CometChat.sendMessage(textMessage);
}
static joinGroup(GUID) {
return CometChat.joinGroup(GUID, CometChat.GROUP_TYPE.PUBLIC, "");
}
static addMessageListener(callback) {
CometChat.addMessageListener(
this.LISTENER_KEY_MESSAGE,
new CometChat.MessageListener({
onTextMessageReceived: textMessage =&gt; {
callback(textMessage);
}
})
);
}
}
import { Redirect } from "react-router-dom";
import chat from "../lib/chat";
import spinner from "../logo.svg";
class Login extends React.Component {
constructor(props) {
super(props);
this.state = {
username: "",
isAuthenticated: false,
user: null,
isSubmitting: false,
errorMessage: ""
};
}
onSubmit = e =&gt; {
if (this.state.username !== "") {
e.preventDefault();
this.login();
}
};
login = () =&gt; {
this.toggleIsSubmitting();
chat
.login(this.state.username)
.then(user =&gt; {
this.setState({
user,
isAuthenticated: true
});
})
.catch(error =&gt; {
this.setState({
errorMessage: "Please enter a valid username"
});
this.toggleIsSubmitting();
console.log(error);
});
};
toggleIsSubmitting = () =&gt; {
this.setState(prevState =&gt; ({
isSubmitting: !prevState.isSubmitting
}));
};
handleInputChange = e =&gt; {
this.setState({
username: e.target.value
});
};
render() {
if (this.state.isAuthenticated) {
return (
&lt;Redirect
to={{
pathname: "/chat",
state: { user: this.state.user }
}}
/&gt;
);
}
return (
&lt;div className="App"&gt;
&lt;h1&gt;COMETCHAT&lt;/h1&gt;
&lt;p&gt;Create an account through your CometChat dashboard or login with one of our test users, superhero1, superhero2, etc.&lt;/p&gt;
&lt;form className="form" onSubmit={this.onSubmit}&gt;
&lt;input onChange={this.handleInputChange} type="text" /&gt;
&lt;span className="error"&gt;{this.state.errorMessage}&lt;/span&gt;
{this.state.isSubmitting ? (
&lt;img src={spinner} alt="Spinner component" className="App-logo" /&gt;
) : (
&lt;input
type="submit"
disabled={this.state.username === ""}
value="LOGIN"
/&gt;
)}
&lt;/form&gt;
&lt;/div&gt;
);
}
}
import { Redirect } from "react-router-dom";
import chat from "../lib/chat";
import config from "../config";
class Groupchat extends React.Component {
constructor(props) {
super(props);
this.state = {
receiverID: "",
messageText: null,
groupMessage: [],
user: {},
isAuthenticated: true
};
this.GUID = config.GUID;
}
sendMessage = () =&gt; {
chat.sendGroupMessage(this.GUID, this.state.messageText).then(
message =&gt; {
console.log("Message sent successfully:", message);
this.setState({ messageText: null });
},
error =&gt; {
if (error.code === "ERR_NOT_A_MEMBER") {
chat.joinGroup(this.GUID).then(response =&gt; {
this.sendMessage();
});
}
}
);
};
scrollToBottom = () =&gt; {
const chat = document.getElementById("chatList");
chat.scrollTop = chat.scrollHeight;
};
handleSubmit = event =&gt; {
event.preventDefault();
this.sendMessage();
event.target.reset();
};
handleChange = event =&gt; {
this.setState({ messageText: event.target.value });
};
getUser = () =&gt; {
chat
.getLoggedinUser()
.then(user =&gt; {
console.log("user details:", { user });
this.setState({ user });
})
.catch(({ error }) =&gt; {
if (error.code === "USER_NOT_LOGED_IN") {
this.setState({
isAuthenticated: false
});
}
});
};
messageListener = () =&gt; {
chat.addMessageListener((data, error) =&gt; {
if (error) return console.log(`error: ${error}`);
this.setState(
prevState =&gt; ({
groupMessage: [...prevState.groupMessage, data]
}),
() =&gt; {
this.scrollToBottom();
}
);
});
};
componentDidMount() {
this.getUser();
this.messageListener();
// chat.joinGroup(this.GUID)
}
render() {
const { isAuthenticated } = this.state;
if (!isAuthenticated) {
return &lt;Redirect to="/" /&gt;;
}
return (
&lt;div className="chatWindow"&gt;
&lt;ul className="chat" id="chatList"&gt;
{this.state.groupMessage.map(data =&gt; (
&lt;div key={data.id}&gt;
{this.state.user.uid === data.sender.uid ? (
&lt;li className="self"&gt;
&lt;div className="msg"&gt;
&lt;p&gt;{data.sender.uid}&lt;/p&gt;
&lt;div className="message"&gt; {data.data.text}&lt;/div&gt;
&lt;/div&gt;
&lt;/li&gt;
) : (
&lt;li className="other"&gt;
&lt;div className="msg"&gt;
&lt;p&gt;{data.sender.uid}&lt;/p&gt;
&lt;div className="message"&gt; {data.data.text} &lt;/div&gt;
&lt;/div&gt;
&lt;/li&gt;
)}
&lt;/div&gt;
))}
&lt;/ul&gt;
&lt;div className="chatInputWrapper"&gt;
&lt;form onSubmit={this.handleSubmit}&gt;
&lt;input
className="textarea input"
type="text"
placeholder="Enter your message..."
onChange={this.handleChange}
/&gt;
&lt;/form&gt;
&lt;/div&gt;
&lt;/div&gt;
);
}
}
export default Groupchat;&lt;</code></pre><p>There’s a lot to digest here, so let’s break the important parts down:</p><ul><li><code>sendMessage()</code> – This function handles sending a message to the group, passing the GUID and the text message that is stored is in the component’s state. If the user is not part of the group we then make a request to join the group and then call the sendMessage function again.</li><li><code>scrollToBottom()</code> – This function will be used as a callback function for the message listener, it just makes sure that the latest messages are shown in the chat list.</li><li><code>handleSubmit()</code> – This calls the sendMessage function.</li><li><code>getUser()</code> – This calls the chat.getLoggedInUser() method and stores the user object in the component’s state.</li><li><code>messageListener()</code> – This calls the chat.addMessageListener() function and appends every new message received to the <code>groupMessage</code> array which is stored in the component’s state and rendered in the app.</li><li><code>componentDidMount()</code> – This calls the getUser and messageListener functions.</li></ul><p>Finally, we render a class depending on if the message is ours or someone else’s. This way, we can apply different styles which is the topic of the next section.</p><h3 id="update-the-styles">Update the styles</h3><p>If you were to run the application now, it would work but with no CSS to speak of thus far, it would look quite uh, odd.</p><p>This isn’t a tutorial about CSS so I won’t explain it in any detail, but to help you follow along, you can paste the following into your App.css file (you will have one already because it was generated by <code>create-react-app</code> earlier):</p><pre><code class="language-css">.App {
text-align: center;
display: flex;
width: 100%;
flex-direction: column;
align-items: center;
justify-content: center;
height: 50vh;
}
.App p{
font-size: 12px;
width: 50%;
}
.App-logo {
animation: App-logo-spin infinite 0.5s linear;
height: 10vmin;
}
.form {
display: flex;
flex-direction: column;
}
.form input[type="text"] {
width: 300px;
height: 30px;
margin-bottom: 10px;
}
.form input[type="submit"] {
padding: 5px;
height: 30px;
border: none;
background-color: #187dbc;
color: #fff;
}
.form input[type="submit"]:hover {
border: #fff;
cursor: pointer;
background-color: #000;
color: #fff;
}
.error{
color: red;
font-size: 10px;
text-align: center;
}
@keyframes App-logo-spin {
from {
transform: rotate(0deg);
}
to {
transform: rotate(360deg);
}
}
.message {
font-size: 15px !important;
}
body {
background-color: #f5f5f5;
font: 600 18px/1.5 -apple-system, BlinkMacSystemFont, "Segoe UI", Lato,
Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
color: #4b4b4b;
}
.container {
display: grid;
grid-template-columns: repeat(4, 1fr);
grid-template-rows: repeat(1, 50px);
grid-gap: 3px;
margin-top: 15px;
}
.group {
background: #4eb5e5;
grid-column-start: 1;
grid-column-end: 2;
grid-row-start: 1;
grid-row-end: 190;
border-radius: 5px;
}
.chatWindow {
display: grid;
grid-column-start: 2;
grid-column-end: 9;
grid-row-start: 1;
grid-row-end: 190;
background: rgb(233, 229, 229);
border-radius: 5px;
}
.chatInputWrapper {
display: grid;
grid-row-start: 190;
grid-row-end: 190;
}
::-webkit-scrollbar {
display: none;
}
/* M E S S A G E S */
.chat {
list-style: none;
background: none;
margin: 0;
padding: 0 0 50px 0;
margin-top: 60px;
margin-bottom: 10px;
max-height: 400px;
overflow: scroll;
scroll-behavior: smooth;
}
.chat li {
padding: 0.5rem;
overflow: hidden;
display: flex;
}
.chat .avatar {
position: relative;
display: block;
z-index: 2;
}
.chat .avatar img {
background-color: rgba(255, 255, 255, 0.9);
-webkit-touch-callout: none;
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
}
.chat .uid img {
background-color: rgba(255, 255, 255, 0.9);
-webkit-touch-callout: none;
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
}
.chat .day {
position: relative;
display: block;
text-align: center;
color: #c0c0c0;
height: 20px;
text-shadow: 7px 0px 0px #e5e5e5, 6px 0px 0px #e5e5e5, 5px 0px 0px #e5e5e5,
4px 0px 0px #e5e5e5, 3px 0px 0px #e5e5e5, 2px 0px 0px #e5e5e5,
1px 0px 0px #e5e5e5, 1px 0px 0px #e5e5e5, 0px 0px 0px #e5e5e5,
-1px 0px 0px #e5e5e5, -2px 0px 0px #e5e5e5, -3px 0px 0px #e5e5e5,
-4px 0px 0px #e5e5e5, -5px 0px 0px #e5e5e5, -6px 0px 0px #e5e5e5,
-7px 0px 0px #e5e5e5;
box-shadow: inset 20px 0px 0px #e5e5e5, inset -20px 0px 0px #e5e5e5,
inset 0px -2px 0px #d7d7d7;
line-height: 38px;
margin-top: 5px;
margin-bottom: 20px;
cursor: default;
-webkit-touch-callout: none;
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
}
.other .msg {
order: 1;
border-top-left-radius: 0px;
box-shadow: -1px 2px 0px #d4d4d4;
}
.other:before {
content: "";
position: relative;
top: 0px;
right: 0px;
left: 40px;
width: 0px;
height: 0px;
border: 5px solid #fff;
border-left-color: transparent;
border-bottom-color: transparent;
}
.self {
justify-content: flex-end;
align-items: flex-end;
}
.self .msg {
order: 1;
border-bottom-right-radius: 0px;
box-shadow: 1px 2px 0px #d4d4d4;
}
.self .avatar {
order: 2;
}
.self .avatar:after {
content: "";
position: relative;
display: inline-block;
bottom: 19px;
right: 0px;
width: 0px;
height: 0px;
border: 5px solid #fff;
border-right-color: transparent;
border-top-color: transparent;
box-shadow: 0px 2px 0px #d4d4d4;
}
.msg {
background: white;
min-width: fit-content;
padding: 10px;
border-radius: 10px;
box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.07);
}
.msg p {
font-size: 0.8rem;
margin: 0 0 0.2rem 0;
color: rgb(81, 84, 255);
}
.msg img {
position: relative;
display: block;
width: 450px;
border-radius: 5px;
box-shadow: 0px 0px 3px #eee;
transition: all 0.4s cubic-bezier(0.565, -0.26, 0.255, 1.41);
cursor: default;
-webkit-touch-callout: none;
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
}
@media screen and (max-width: 800px) {
.msg img {
width: 300px;
}
}
@media screen and (max-width: 550px) {
.msg img {
width: 200px;
}
}
.msg time {
font-size: 0.7rem;
color: #ccc;
margin-top: 3px;
float: right;
cursor: default;
-webkit-touch-callout: none;
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
}
.msg time:before {
content: " ";
color: #ddd;
font-family: FontAwesome;
display: inline-block;
margin-right: 4px;
}
::-webkit-scrollbar {
min-width: 12px;
width: 12px;
max-width: 12px;
min-height: 12px;
height: 12px;
max-height: 12px;
background: #e5e5e5;
}
::-webkit-scrollbar-thumb {
background: rgb(48, 87, 158);
border: none;
border-radius: 100px;
border: solid 3px #e5e5e5;
box-shadow: inset 0px 0px 3px #999;
}
::-webkit-scrollbar-thumb:hover {
background: #b0b0b0;
box-shadow: inset 0px 0px 3px #888;
}
::-webkit-scrollbar-thumb:active {
background: #aaa;
box-shadow: inset 0px 0px 3px #7f7f7f;
}
::-webkit-scrollbar-button {
display: block;
height: 26px;
}
/* T Y P E */
input.textarea {
width: 100%;
height: 50px;
background: #fafafa;
border: none;
outline: none;
padding-left: 55px;
padding-right: 55px;
color: #666;
font-weight: 400;
}</code></pre><h3 id="conclusion">Conclusion</h3><p>Run the application with <code>npm start</code> and low and behold, your chat application is complete. At least, the basic functionality is in place. With CometChat, you could easily expand the app to include a “who’s online list”, direct messages, media messages, and a bunch of other features.</p><p><em>This article was originally published on Cometchat’s <a href="https://www.cometchat.com/tutorials/build-a-modern-chat-application-with-react" rel="noopener">blog</a>.</em></p>
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
