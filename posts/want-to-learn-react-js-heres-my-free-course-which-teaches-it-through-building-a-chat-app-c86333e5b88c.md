---
card: "https://cdn-media-1.freecodecamp.org/images/1*Ik3tRrwdvnBFu3_B0rpimw.png"
tags: [JavaScript]
description: Chat is eating the world, and React is eating front-end devel
author: "Milad E. Fahmy"
title: "A free React course that will grow your React JS skills by building a chat app"
created: "2021-08-15T19:44:21+02:00"
modified: "2021-08-15T19:44:21+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-react tag-programming tag-front-end-development tag-learn-to-code ">
<header class="post-full-header">
<h1 class="post-full-title">A free React course that will grow your React JS skills by building a chat app</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*Ik3tRrwdvnBFu3_B0rpimw.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*Ik3tRrwdvnBFu3_B0rpimw.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*Ik3tRrwdvnBFu3_B0rpimw.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*Ik3tRrwdvnBFu3_B0rpimw.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*Ik3tRrwdvnBFu3_B0rpimw.png" alt="A free React course that will grow your React JS skills by building a chat app">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Chat is eating the world, and React is eating front-end development. So what could be better than learning React through building chat app? In my latest course at Scrimba, you’ll do exactly that.</p>
<p>It consists of 17 interactive lessons (plus intro and outro) and five challenges in which you’ll have to edit the code yourself.</p>
<p>And the best part: it’s all done in the browser. You don’t have to write any server-side code. The <a href="https://pusher.com/chatkit?utm_source=scrimba&amp;utm_medium=medium&amp;utm_campaign=announcment-post">Chatkit API</a> takes care of the heavy-lifting on the back-end, so that we can focus on building the chat client.</p>
<p>At the end of the course, you’ll be left with your own personalised chat app, which includes multiple rooms, the ability to create new rooms, auto scrolling, and more. Plus, it’ll be very easily customisable thanks to CSS Grid and CSS Variables.</p>
<p>I’m assuming that you know JavaScript, and that you’ve seen a little bit of React before (e.g. read my <a href="https://medium.freecodecamp.org/learn-react-js-in-5-minutes-526472d292f4">five minute introductory article</a>, and perhaps checked out a couple of tutorials). But other than that, there are no prerequisites for the course.</p>
<p>Now let’s have a look at how it’s laid out!</p>
<h3 id="lesson-1-course-introduction">Lesson #1: Course introduction</h3>
<p>I’ll start off by giving you a quick intro to the course. We’ll go over what you’ll learn, and I’ll introduce myself as well. I’ll also give you an sneak peak at how you’ll be able to customize your own chat app at the end of the course.</p>
<h3 id="lesson-2-component-architecture">Lesson #2: Component architecture</h3>
<p>Before you start building a React app, you should start by getting an overview over the components architecture, and thus break the UI into components. So in this lecture, I’ll show you how to do exactly that.</p>
<h3 id="lesson-3-codebase-architecture">Lesson #3: Codebase architecture</h3>
<p>Next up, we’ll see how our component architecture translates into code. I’ll also look at how the rest of the repo is setup, as I don’t won’t you to be confused about the various files throughout the repo once we start coding.</p>
<p>I won’t be creating the repository from scratch as there are plenty of tutorials which help you get your dev environment setup, and it’s not really what the Scrimba platform is best tailored for.</p>
<h3 id="lesson-4-messagelist-component">Lesson #4: MessageList component</h3>
<p>Now we’re finally ready to start coding, so in this lesson we’ll render out dummy data in our <code>MessageList</code> component. It’ll introduce you to JSX, and you’ll learn how to dynamically create elements using, for example, the <code>map()</code> array method.</p><pre><code class="language-js">{DUMMY_DATA.map((message, index) =&gt; {
return (
&lt;div key={index} className="message"&gt;
&lt;div className="message-username"&gt;{message.senderId}&lt;/div&gt;
&lt;div className="message-text"&gt;{message.text}&lt;/div&gt;
&lt;/div&gt;
)
})}
</code></pre>
<p>In this lesson you’ll also get your very first challenge!</p>
<h3 id="lesson-5-intro-to-chatkit">Lesson #5: Intro to Chatkit</h3>
<p>[!Click the image to get to the Chatkit API.](<a href="https://pusher.com/chatkit?utm_source=scrimba&amp;utm_medium=medium&amp;utm_campaign=announcment-post">https://pusher.com/chatkit?utm_source=scrimba&amp;utm_medium=medium&amp;utm_campaign=announcment-post</a>)<br>Click the image to get to the Chatkit API.</p>
<p>Now that we’re able to render out data on the page, we’ll get started integrating with the <a href="https://pusher.com/chatkit?utm_source=scrimba&amp;utm_medium=medium&amp;utm_campaign=announcment-post">Chatkit API</a>, which will take care of the back-end of the app. In this lesson, I give you quick overview over the API.</p>
<h3 id="lesson-6-connecting-to-chatkit">Lesson #6: Connecting to Chatkit</h3>
<p>Next up is simply coding the <a href="https://pusher.com/chatkit?utm_source=scrimba&amp;utm_medium=medium&amp;utm_campaign=announcment-post">Chatkit</a> integration, which is super simple: the code above is all you need in order to start fetching messages from a chat room. You’ll be exposed for React’s <code>componentDidMount()</code> life-cycle method, which is where you should hook your component up with third-party API’s.</p>
<h3 id="lesson-7-state-and-props">Lesson #7: State and props</h3>
<p>State and props are the two ways we handle data in React, and you need to understand the difference between the two. In this lecture, we’ll need to use both types, since we’ll both store chat messages in the state of our <code>App</code> component and also pass them down as props to the <code>MessageList</code> component.</p><pre><code class="language-js">constructor() {
super()
this.state = {
messages: []
}
}
</code></pre>
<h3 id="lesson-8-the-message-component">Lesson #8: The Message component</h3>
<p>In this lecture, we’ll build out the Message component. It has one job: to render out the username and text which it gets passed down from its parents. I’ll also give you a challenge to change it from a class-based component into a functional component.</p><pre><code class="language-jsx">function Message(props) {
return (
&lt;div className="message"&gt;
&lt;div className="message-username"&gt;{props.username}&lt;/div&gt;
&lt;div className="message-text"&gt;{props.text}&lt;/div&gt;
&lt;/div&gt;
)
}
</code></pre>
<h3 id="lesson-9-the-sendmessageform-component">Lesson #9: The SendMessageForm component</h3>
<p>You can’t have a chat app without a form to send messages through. So in this lecture, we’ll create exactly that. It’ll teach you about controlled components, which is a critical concept in React. It means that the component itself decides what’s being rendered in the input field, instead of the DOM node itself holding that internal state.</p>
<h3 id="lesson-10-broadcasting-messages">Lesson #10: Broadcasting messages</h3><pre><code class="language-js">sendMessage(text) {
this.currentUser.sendMessage({
text,
roodId: 9434230
})
}
</code></pre>
<p>Now that we have the <code>SendMessageForm</code> in place, we need to send the messages to Chatkit so that it can broadcast them. This will force you to learn another core concept of React: the inverse data flow.</p>
<p>In React, data flows downwards, from parent to child. However, sometimes we need child components to reach up to their parents and trigger their methods, along with some data from themselves.</p>
<h3 id="lesson-11-the-roomlist-component">Lesson #11: The RoomList component</h3>
<p>As we have the core chat features in place now (sending and displaying messages), it’s time to jump over to the <code>RoomList</code> component, which displays all the rooms you have available on your Chatkit instance.</p>
<p>It’ll introduce you to a few new concepts in Chatkit, plus solidify your knowledge on how to send data down from parent components to child components. We’ll also revisit the ES6 spread operator, which is super handy to know when building React.js apps.</p>
<h3 id="lesson-12-subscribe-to-rooms">Lesson #12: Subscribe to rooms</h3>
<p>Then you’ll need to learn how to subscribe to specific rooms. We’ll hook an event listener up with each of the rooms displayed in the <code>RoomList</code> component. This will trigger a method in the <code>App</code> component, which tells Chatkit that the user wants to subscribe that specific room.</p><pre><code class="language-js">subscribeToRoom(roomId) {
this.setState({ messages: [] })
this.currentUser.subscribeToRoom({
roomId: roomId,
hooks: {
onNewMessage: message =&gt; {
this.setState({
messages: [...this.state.messages, message]
})
}
}
})
}
</code></pre>
<h3 id="lesson-13-room-order-and-highlighting-the-current-room">Lesson #13: Room order and highlighting the current room</h3>
<p>This lecture will introduce you to the <code>.sort()</code> array method in JavaScript, as we’ll need to make sure our rooms are sorted in the correct order regardless of where the data comes from originally.</p>
<p>const orderedRooms = [...this.props.rooms].sort((a, b) =&gt; a.id - b.id)</p>
<p>We’ll also add an <code>active</code> class to the room we’re currently chatting at in order to signal it to the user.</p>
<h3 id="lesson-14-adding-autoscroll">Lesson #14: Adding autoscroll</h3>
<p>Autoscroll is needed in order to automatically jump down to the latest messages as they appear in the <code>MessageList</code> component. It’s a neat little trick which introduces you to the following component life-cycle methods:</p>
<ul>
<li><code>componentWillUpdate()</code></li>
<li><code>componentDidUpdate()</code></li>
</ul>
<p>We’ll also need to use the<code>ReactDOM.findDOMNode()</code> method, so you’ll get to know that one, too.</p>
<h3 id="lesson-15-the-newroomform-component">Lesson #15: The NewRoomForm component</h3>
<p>This component allows you to create new rooms. It’ll be a refresher on controlled components from the ninth lesson.</p>
<p>With this, we’re done with all the React code for the app. So for the rest of the course, we’ll focus on design using CSS.</p>
<h3 id="lesson-16-creating-your-own-chat-app">Lesson #16: Creating your own chat app</h3>
<p>Before we start modifying the app design, I want to clone my code so that you’ll get your own copy of the repo. This sets you up for the next screencasts where you’ll personalize the design of it. I’ll guide you through each step until you’ve got your very own copy and free API-keys from Chatkit.</p>
<h3 id="lesson-17-changing-the-layout-with-css-grid">Lesson #17: Changing the layout with CSS Grid</h3>
<p>We’re using CSS Grid to control the layout of the app, which gives you super nice flexibility when it comes to changing it, thanks to <code>grid-template-areas</code>. I’ll teach you how you can move elements around on the page through just changing a few lines of CSS.</p>
<h3 id="lesson-18-changing-the-theme-with-css-variables">Lesson #18: Changing the theme with CSS Variables</h3>
<p><br>Before and after modifying the variables.</p>
<p>As we’re using CSS Variables for our colours, you can also really easily change the theme of the app. Here, I’ll give you the challenge of finding a nice palette online and then implement it into your app.</p>
<p>If you combine the layout changes from the previous lesson with a new palette in this one, you’ll be left with your very own personalised chat app! Here’s one I made for myself, just for fun:</p>
<h3 id="lesson-19-outro-and-closing-challenges">Lesson #19: Outro and closing challenges</h3>
<p>If you reach this far: congrats! You’ve really invested in improving your skills, and I’m 100% sure it’ll pay off. In this screencast, I give you a couple of closing challenges you can do if you’re really up for it.</p>
<p>If you were pleased with <a href="https://scrimba.com/g/greactchatkit?utm_source=freecodecamp.org&amp;utm_medium=referral&amp;utm_campaign=greactchatkit_free_course">the course</a>, we’d be really grateful if you’d recommend it to a friend or share it on social media, as that’s how people discover our free Scrimba courses.</p>
<p>Good luck with the course, and happy coding :)</p>
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
