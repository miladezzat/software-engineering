---
card: "https://cdn-media-1.freecodecamp.org/images/1*SUeSr13iO7yJfIf4ipaeFg.png"
tags: [JavaScript]
description: In this article, I’ll show you the easiest way possible to cr
author: "Milad E. Fahmy"
title: "Learn to build a React chat app in 10 minutes - React JS tutorial"
created: "2021-08-15T19:44:36+02:00"
modified: "2021-08-15T19:44:36+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-learning tag-react tag-programming tag-front-end-development ">
<header class="post-full-header">
<h1 class="post-full-title">Learn to build a React chat app in 10 minutes - React JS tutorial</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*SUeSr13iO7yJfIf4ipaeFg.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*SUeSr13iO7yJfIf4ipaeFg.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*SUeSr13iO7yJfIf4ipaeFg.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*SUeSr13iO7yJfIf4ipaeFg.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*SUeSr13iO7yJfIf4ipaeFg.png" alt="Learn to build a React chat app in 10 minutes - React JS tutorial">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<figcaption><a href="https://scrimba.com/g/greactchatkit?utm_source=freecodecamp.org&amp;utm_medium=referral&amp;utm_campaign=greactchatkit_10_minute_article">Click here to get to the full course</a> this article is based on.</figcaption>
</figure>
<p>In this article, I’ll show you the easiest way possible to create a chat application using React.js. It’ll be done entirely without server-side code, as we’ll let the <a href="https://pusher.com/chatkit">Chatkit API</a> handle the back-end.</p>
<p>I’m assuming that you know basic JavaScript and that you’ve encountered a little bit of React.js before. Other than that, there are no prerequisites.</p>
<p>Note: I’ve also created a free full-length course on <a href="https://scrimba.com/g/greactchatkit?utm_source=freecodecamp.org&amp;utm_medium=referral&amp;utm_campaign=greactchatkit_10_minute_article">how to create a React.js chat app here:</a></p>
<p>If you follow along with this tutorial you’ll end up with your very own chat application at the end, which you then can build further upon if you’d like to.</p>
<p>Let’s get started!</p>
<h3 id="step-1-breaking-the-ui-into-components">Step 1: Breaking the UI into components</h3>
<p>React is built around components, so the first thing you want to do when creating an app is to break its UI into components.</p>
<p>Let’s start by drawing a rectangle around the entire app. This is your root component and the common ancestor for all other components. Let’s call it <code>App</code>:</p>
<p>Once you’ve defined your root component, you need to ask yourself the following question:</p>
<p>Which direct children does this component have?</p>
<p>In our case, it makes sense to give it three child components, which we’ll call the following:</p>
<ul>
<li><code>Title</code></li>
<li><code>MessagesList</code></li>
<li><code>SendMessageForm</code></li>
</ul>
<p>Let’s draw a rectangle for each of these:</p>
<p>This gives us a nice overview of the different components and the architecture behind our app.</p>
<p>We could have continued asking ourselves which children these components again have. Thus we could have broken the UI into even more components, for example through turning each of the messages into their own components. However, we’ll stop here for the sake of simplicity.</p>
<h3 id="step-2-setting-up-the-codebase">Step 2: Setting up the codebase</h3>
<p>Now we’ll need to setup our repository. We’ll use the simplest structure possible: an *index.html *file with links to a JavaScript file and a stylesheet. We’re also importing the Chatkit SDK and Babel, which is used to transform our JSX:</p>
<p><a href="https://scrimba.com/c/c7aW2hd?utm_source=freecodecamp.org&amp;utm_medium=referral&amp;utm_campaign=greactchatkit_10_minute_article">Here’s a Scrimba playground</a> with the final code for the tutorial. I’d recommend you to open it up in a new tab and play around with it whenever you feel confused.</p>
<p>Alternatively, you can download the Scrimba project as a .zip file and run a simple <a href="https://gist.github.com/willurd/5720255">server to get it up and running locally.</a></p>
<h3 id="step-3-creating-the-root-component">Step 3: Creating the root component</h3>
<p>With the repository in place, we’re able to start writing some React code, which we’ll do inside the *index.js *file.</p>
<p>Let’s start with the main component, <code>App</code>. This will be our only “smart” component, as it’ll handle the data and the connection with the API. Here’s the basic setup for it (before we’ve added any logic):</p><pre><code class="language-jsx">    class App extends React.Component {
render() {
return (
&lt;div className="app"&gt;
&lt;Title /&gt;
&lt;MessageList /&gt;
&lt;SendMessageForm /&gt;
&lt;/div&gt;
)
}
}
</code></pre>
<p>As you can see, it simply renders out three children: the <code>&lt;Title&gt;</code>,<code>&lt;MessageList&gt;</code>, and the <code>&lt;SendMessageForm&gt;</code> components.</p>
<p>We’re going to make it a bit more complex though, as the chat messages will need to be stored inside the <em>state</em> of this <code>App</code> component. This will enable us to access the messages through <code>this.state.messages</code>, and thus pass them around to other components.</p>
<p>We’ll begin with using dummy data so that we can understand the data flow of the app. Then we’ll swap this out with real data from the <a href="https://pusher.com/chatkit">Chatkit</a> API later on.</p>
<p>Let’s create a <code>DUMMY_DATA</code> variable:</p><pre><code class="language-jsx">    const DUMMY_DATA = [
{
senderId: "perborgen",
text: "who'll win?"
},
{
senderId: "janedoe",
text: "who'll win?"
}
]
</code></pre>
<p>Then we’ll add this data to the state of <code>App</code> and pass it down to the <code>MessageList</code> component as a prop.</p><pre><code class="language-jsx">    class App extends React.Component {
constructor() {
super()
this.state = {
messages: DUMMY_DATA
}
}
render() {
return (
&lt;div className="app"&gt;
&lt;MessageList messages={this.state.messages}/&gt;
&lt;SendMessageForm /&gt;
&lt;/div&gt;
)
}
}
</code></pre>
<p>Here, we’re initializing the state in the <code>constructor</code> and we’re also passing <code>this.state.messages</code> down to <code>MessageList</code>.</p>
<p>Note that we’re calling <code>super()</code> in the constructor. You must do that if you want to create a stateful component.</p>
<h3 id="step-4-rendering-dummy-messages">Step 4: Rendering dummy messages</h3>
<p>Let’s see how we can render these messages out in the <code>MessageList</code> component. Here’s how it looks:</p><pre><code class="language-jsx">    class MessageList extends React.Component {
render() {
return (
&lt;ul className="message-list"&gt;
{this.props.messages.map(message =&gt; {
return (
&lt;li key={message.id}&gt;
&lt;div&gt;
{message.senderId}
&lt;/div&gt;
&lt;div&gt;
{message.text}
&lt;/div&gt;
&lt;/li&gt;
)
})}
&lt;/ul&gt;
)
}
}
</code></pre>
<p>This is a so-called stupid component. It takes one prop, <code>messages</code>, which contains an array of objects. And then we’re simply rendering out the <code>text</code> and <code>senderId</code> properties from the objects.</p>
<p>With our dummy data flowing into this component, it will render the following:</p>
<p>So now we have the basic structure for our app, and we’re also able to render out messages. Great job!</p>
<p><strong>Now let’s replace our dummy data with actual messages from a chat room!</strong></p>
<h3 id="step-5-fetching-api-keys-from-chatkit">Step 5: Fetching API-keys from Chatkit</h3>
<p>In order to get fetch messages, we’ll need to connect with the Chatkit API. And to do so, we need to obtain API keys.</p>
<p>At this point, I want to encourage you to follow my steps so that you can get your own chat application up and running. You can use my <a href="https://scrimba.com/c/crVznf6?utm_source=freecodecamp.org&amp;utm_medium=referral&amp;utm_campaign=greactchatkit_10_minute_article">Scrimba playground</a> in order to test your own API keys.</p>
<p>Start by creating a free <a href="https://pusher.com/chatkit#sign-up">account here</a>. Once you’ve done that you’ll see your dashboard. This is where you create new Chatkit instances. Create one and give it whatever name you want:</p>
<p>Then you’ll be navigated to your newly created instance. Here you’ll need to copy four values:</p>
<ul>
<li>Instance Locator</li>
<li>Test Token Provider</li>
<li>Room id</li>
<li>Username</li>
</ul>
<p>We’ll start with the <strong>Instance Locator</strong>:</p>
<p><em><em>You can copy using the icon on the right side of the Instance Locator.</em></em></p>
<p>And if you scroll a bit down you’ll find the <strong>Test Token Provider</strong>:</p>
<p>The next step is to create a <strong>User</strong>* *and a <strong>Room</strong>, which is done on the same page. Note that you’ll have to create a user <em>first</em>, and then you’ll be able to create a room, which again gives you access to the room identifier.</p>
<p>So now you’ve found your four identifiers. Well done!</p>
<p>However, before we head back to the codebase, I want you to manually send a message from the Chatkit dashboard as well, as this will help us in the next chapter.</p>
<p>Here’s how to do that:</p>
<p>This is so that we actually have a message to render out in the next step.</p>
<h3 id="step-6-rendering-real-chat-messages">Step 6: Rendering real chat messages</h3>
<p>Now let’s head back to our <em>index.js</em> file and store these four identifiers as variables at the top of our file.</p>
<p>Here are mine, but I’d encourage you to create your own:</p><pre><code class="language-jsx">    const instanceLocator = "v1:us1:dfaf1e22-2d33-45c9-b4f8-31f634621d24"
const testToken = "https://us1.pusherplatform.io/services/chatkit_token_provider/v1/dfaf1e22-2d33-45c9-b4f8-31f634621d24/token"
const username = "perborgen"
const roomId = 9796712
</code></pre>
<p>And with that in place, we’re finally ready to connect with Chatkit. This will happen in the <code>App</code> component, and more specifically in the <code>componentDidMount</code> method. That’s the method you should use when connecting React.js components to API’s.</p>
<p>First we’ll create a <code>chatManager</code>:</p><pre><code class="language-jsx">    componentDidMount() {
const chatManager = new Chatkit.ChatManager({
instanceLocator: instanceLocator,
userId: userId,
tokenProvider: new Chatkit.TokenProvider({
url: testToken
})
})
</code></pre>
<p>… and then we’ll do<code>chatManager.connect()</code> to connect with the API:</p><pre><code class="language-jsx">      chatManager.connect().then(currentUser =&gt; {
currentUser.subscribeToRoom({
roomId: roomId,
hooks: {
onNewMessage: message =&gt; {
this.setState({
messages: [...this.state.messages, message]
})
}
}
})
})
}
</code></pre>
<p>This gives us access to the <code>currentUser</code> object, which is the interface for interacting with the API.</p>
<p>Note: As we’ll need to use<code>currentUser</code> later on, well store it on the instance by doing <code>this.currentUser = ``currentUser</code>.</p>
<p>Then, we’re calling <code>currentUser.subscribeToRoom()</code> and pass it our <code>roomId</code> and an <code>onNewMessage</code> hook.</p>
<p>The <code>onNewMessage</code> hook is triggered every time a new message is broadcast to the chat room. So every time it happens, we’ll simply add the new message at the end of <code>this.state.messages</code>.</p>
<p>This results in the app fetching data from the API and then rendering it out on the page.</p>
<p>This is awesome, as we now have the skeleton for our client-server connection.</p>
<p>Woohoo!</p>
<h3 id="step-7-handling-user-input">Step 7: Handling user input</h3>
<p>The next thing we’ll need to create is the <code>SendMessageForm</code> component. This will be a so-called <em>controlled component</em>, meaning the component controls what’s being rendered in the input field via its state.</p>
<p>Take a look at the <code>render()</code> method, and pay special attention to the lines I’ve highlighted:</p><pre><code class="language-jsx">    class SendMessageForm extends React.Component {
render() {
return (
&lt;form
className="send-message-form"&gt;
&lt;input
onChange={this.handleChange}
value={this.state.message}
placeholder="Type your message and hit ENTER"
type="text" /&gt;
&lt;/form&gt;
)
}
}
</code></pre>
<p>We’re doing two things:</p>
<ol>
<li>Listening for user inputs with the <code>onChange</code> event listener, so that we can<br>trigger the <code>handleChange</code> method</li>
<li>Setting the <code>value</code> of the input field explicitly using <code>this.state.message</code></li>
</ol>
<p>The connection between these two steps is found inside the <code>handleChange</code> method. It simply updates the state to whatever the user types into the input field:</p><pre><code class="language-jsx">    handleChange(e) {
this.setState({
message: e.target.value
})
}
</code></pre>
<p>This triggers a re-render, and since the input field is set explicitly from the state using <code>value={this.state.message}</code>, the input field will be updated.</p>
<p>So even though the app feels instant for the user when they type something into the input field, <strong>the data actually goes via the state before React updates the UI.</strong></p>
<p>To wrap up this feature, we need to give the component a <code>constructor</code>. In it, we’ll both initialize the state and bind <code>this</code> in the <code>handleChange</code> method:</p><pre><code class="language-jsx">    constructor() {
super()
this.state = {
message: ''
}
this.handleChange = this.handleChange.bind(this)
}
</code></pre>
<p>We need to bind the <code>handleChange</code>method so that we’ll have access to the <code>this</code> keyword inside of it. That’s how JavaScript works: the <code>this</code> keyword is by default <em>undefined</em> inside the body of a function.</p>
<h3 id="step-8-sending-messages">Step 8: Sending messages</h3>
<p>Our <code>SendMessageForm</code> component is almost finished, but we also need to take care of the form submission. We need fetch the messages and send them off!</p>
<p>To do this we’ll hook a <code>handleSubmit</code> even handler up with the <code>onSubmit</code> event listener in the <code>&lt;form&gt;</code>.</p><pre><code class="language-jsx">    render() {
return (
&lt;form
onSubmit={this.handleSubmit}
className="send-message-form"&gt;
&lt;input
onChange={this.handleChange}
value={this.state.message}
placeholder="Type your message and hit ENTER"
type="text" /&gt;
&lt;/form&gt;
)
}
</code></pre>
<p>As we have the value of the input field stored in <code>this.state.message</code>, it’s actually pretty easy to pass the correct data along with the submission. We’ll<br>simply do:</p><pre><code class="language-jsx">    handleSubmit(e) {
e.preventDefault()
this.props.sendMessage(this.state.message)
this.setState({
message: ''
})
}
</code></pre>
<p>Here, we’re calling the <code>sendMessage</code> prop and passing in <code>this.state.message</code> as a parameter. You might be a little confused by this, as we haven’t created the <code>sendMessage</code> method yet. However, we’ll do that in the next section, as that method lives inside the <code>App</code> component. So don’t worry!</p>
<p>Secondly, we’re clearing out the input field by setting <code>this.state.message</code> to an empty string.</p>
<p>Here’s the entire <code>SendMessageForm</code> component. Notice that we’ve also bound <code>this</code> to the <code>handleSubmit</code> method:</p><pre><code class="language-jsx">    class SendMessageForm extends React.Component {
constructor() {
super()
this.state = {
message: ''
}
this.handleChange = this.handleChange.bind(this)
this.handleSubmit = this.handleSubmit.bind(this)
}
handleChange(e) {
this.setState({
message: e.target.value
})
}
handleSubmit(e) {
e.preventDefault()
this.props.sendMessage(this.state.message)
this.setState({
message: ''
})
}
render() {
return (
&lt;form
onSubmit={this.handleSubmit}
className="send-message-form"&gt;
&lt;input
onChange={this.handleChange}
value={this.state.message}
placeholder="Type your message and hit ENTER"
type="text" /&gt;
&lt;/form&gt;
)
}
}
</code></pre>
<h3 id="step-9-sending-the-messages-to-chatkit">Step 9: Sending the messages to Chatkit</h3>
<p>We’re now ready so send the messages off to Chatkit. That’s done up in the <code>App</code> component, where we’ll create a method called <code>this.sendMessage</code>:</p><pre><code class="language-jsx">    sendMessage(text) {
this.currentUser.sendMessage({
text: text,
roomId: roomId
})
}
</code></pre>
<p>It takes one parameter (the text) and it simply calls <code>this.currentUser.sendMessage()</code>.</p>
<p>The final step is to pass this down to the <code>&lt;SendMessageForm&gt;</code> component as a prop:</p><pre><code class="language-jsx">    /* App component */
render() {
return (
&lt;div className="app"&gt;
&lt;Title /&gt;
&lt;MessageList messages={this.state.messages} /&gt;
&lt;SendMessageForm sendMessage={this.sendMessage} /&gt;
)
}
</code></pre>
<p>And with that, we’ve passed down the handler so that <code>SendMessageForm</code> can invoke it when the form is submitted.</p>
<h3 id="step-10-creating-the-title-component">Step 10: Creating the Title component</h3>
<p>To finish up, let’s also create the Title component. It’s just a simple functional component, meaning a function which returns a JSX expression.</p><pre><code class="language-jsx">    function Title() {
return &lt;p class="title"&gt;My awesome chat app&lt;/p&gt;
}
</code></pre>
<p>It’s a good practice to use functional components, as they have more constraints than class components, which makes them less prone to bugs.</p>
<h3 id="the-result">The result</h3>
<p>And with that in place you have your own chat application which you can use to chat with your friends!</p>
<p>Give yourself a pat on the back if you’ve coded along until the very end.</p>
<p>If you want to learn how to build further upon this example, <a href="https://scrimba.com/g/greactchatkit?utm_source=freecodecamp.org&amp;utm_medium=referral&amp;utm_campaign=greactchatkit_10_minute_article">then check out my free course on how to create a chat app with React here.</a></p>
<p>Thanks for reading and happy coding :)</p>
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
