---
card: "https://cdn-media-1.freecodecamp.org/images/0*hO-7lLXvx8RG6CAQ"
tags: [Testing]
description: by Justice Mba
author: "Milad E. Fahmy"
title: "How to test a Socket.io-client app using Jest and the react-testing-library"
created: "2021-08-15T19:44:45+02:00"
modified: "2021-08-15T19:44:45+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-testing tag-react tag-javascript tag-programming tag-tech ">
<header class="post-full-header">
<h1 class="post-full-title">How to test a Socket.io-client app using Jest and the react-testing-library</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/0*hO-7lLXvx8RG6CAQ 300w,
https://cdn-media-1.freecodecamp.org/images/0*hO-7lLXvx8RG6CAQ 600w,
https://cdn-media-1.freecodecamp.org/images/0*hO-7lLXvx8RG6CAQ 1000w,
https://cdn-media-1.freecodecamp.org/images/0*hO-7lLXvx8RG6CAQ 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/0*hO-7lLXvx8RG6CAQ" alt="How to test a Socket.io-client app using Jest and the react-testing-library">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Justice Mba</p>
<h1 id="how-to-test-a-socket-io-client-app-using-jest-and-the-react-testing-library">How to test a Socket.io-client app using Jest and the react-testing-library</h1>
<figcaption>Photo by <a href="undefined" rel="noopener" target="_blank" title="">freestocks</a> on <a href="https://unsplash.com/@freestocks" rel="noopener" target="_blank" title="">Unsplash</a></figcaption>
</figure>
<p>Testing the quality of real-time Socket.io-client integration seems to have sunk into oblivion, maybe because the UIs had a long history of testability issues. Let’s fix this!</p>
<p>Quickly google “testing socket.io app”.</p>
<p>The first two result pages (just don’t bother opening the rest of the pages) are all examples and tutorials focusing on testing the server-side socket.io integration. No one is talking about the quality of socket.io-client integration on the front-end, how the User Interface will look when it receives certain events, and if the front-end code is actually emitting the right events.</p>
<p>But why? Does this just mean that people don’t really care about the quality of their real-time apps on the front-end — the meat of the software? I don’t think so. My guess is: Testing UIs <em>was</em> <strong>just too hard!</strong></p>
<p>User Interfaces have had a long history of testability issues. UIs are never stable. The testing tools we have had available to us easily lead to writing very brittle UI tests. Thus, people tend to focus their time and energy on testing their socket.io apps only on the server-side.</p>
<p>But that doesn’t feel right. It is <strong>only</strong> the UI that makes our user confident that they’re actually accomplishing the purpose of using our app. But then, unto us a UI testing tool has been born!</p>
<h3 id="react-testing-library">react-testing-library</h3>
<p>It was a few months ago that my friend and mentor <a href="undefined" rel="noopener">Kent C. Dodds</a> <a href="https://blog.kentcdodds.com/introducing-the-react-testing-library-e3a274307e65" rel="noopener">released this beautiful tool</a> for testing react apps. Ever since then, I no longer just love the <strong>idea</strong> of testing UIs, but actually love testing them. I have literally dug out and tested all the UI code I gave up on testing because of its complexity :).</p>
<p>In my experience-based opinion, the react-testing-library is the panacea for all UI test issues. It is not just a testing tool, it is a testing approach.</p>
<p>Note: If your’re not a React person, there is <a href="https://www.npmjs.com/package/vue-testing-library" rel="noopener">vue-testing-library</a>, <a href="https://www.npmjs.com/package/ng-testing-library" rel="noopener">ng-testing-library</a> and <a href="https://www.npmjs.com/browse/depended/dom-testing-library" rel="noopener">others</a>, all built on top of the <a href="https://www.npmjs.com/package/dom-testing-library" rel="noopener">dom-testing-library</a>.</p>
<p>The best feature of the react-testing-library is probably its support of UI TDD. According to the docs, it’s <a href="https://twitter.com/kentcdodds/status/977018512689455106" rel="noopener">primary guiding principle</a> is:</p>
<blockquote><em>The more your tests resemble the way your software is used, the more confidence they can give you.</em></blockquote>
<p>This is the “approach” I’m talking about. Test your UIs just as your non-techie friend would. Your user probably neither knows nor cares what your code looks like. And nor should your test. That gives us the power to use TDD on our UIs.</p>
<p>This is how we’re going to write our socket.io-client test — test everything without thinking about the code. Now let’s do it!</p>
<h3 id="testing-out-the-telegram-app">Testing out the Telegram app</h3>
<p>From our very talented Telegram UI designer, bellow are the designs of the Telegram app we’ll be testing.</p>
<figcaption>telegram chat screenshots</figcaption>
</figure>
<p>Looking at the design, I see a couple of real-time features our user would want to make sure the app performs, otherwise they’ll close the tab. Here are some of them:</p>
<ul>
<li>App should get messages</li>
<li>App should tell when/if a message is sent or not</li>
<li>App should tell when/if a message is delivered or not</li>
<li>App should tell when a friend comes online/goes offline</li>
<li>App should tell when a friend is typing</li>
</ul>
<p>Okay, the list goes on…but let’s work on these first.</p>
<h4 id="receiving-messages">Receiving messages</h4>
<p>Let’s look at how a user would know if they received a message as an example. First, create a test file, then import the chat.js file and its mocked dependencies. If you’re new to mocking or stuff like that, then <a href="undefined" rel="noopener">Kent C. Dodds</a> should really be your friend. He’s got everything covered on JavaScript testing, so just follow him on here, Twitter, and everywhere else.</p>
<p>Now as I was writing this line, I was thinking he should just write a book on JS testing so I tweeted:</p>
<p>And hopefully, he will eventually :)</p>
<p>Back to our test file:</p><pre><code>// chat.test.jsimport React from 'react';import io from 'socket.io-client';</code></pre><pre><code>import Chat from './chat';</code></pre>
<p>Because, we’re only doing integration testing here, we don’t really want to emit socket.io events to the server. So we need to mock out socket.io-client. For more information on mocking, see Kent’s article “<a href="https://blog.kentcdodds.com/but-really-what-is-a-javascript-mock-10d060966f7d" rel="noopener">But really, what is a JavaScript mock?</a>” as well as this section from the Jest docs on <a href="https://facebook.github.io/jest/docs/en/mock-functions.html#using-a-mock-function" rel="noopener">Jest’s Mock Functions</a>.</p>
<p>Once you understand how to mock, the next thing is understanding what your module is doing, and then fake the implementation.</p><pre><code>// socket.io-client.js</code></pre><pre><code>let EVENTS = {};</code></pre><pre><code>function emit(event, ...args) { EVENTS[event].forEach(func =&gt; func(...args));}</code></pre><pre><code>const socket = { on(event, func) {  if (EVENTS[event]) {   return EVENTS[event].push(func);  }  EVENTS[event] = [func]; }, emit};</code></pre><pre><code>export const io = { connect() {  return socket; }};</code></pre><pre><code>// Additional helpers, not included in the real socket.io-client,just for out test.</code></pre><pre><code>// to emulate server emit.export const serverSocket = { emit }; // cleanup helperexport function cleanup() { EVENTS = {}}</code></pre><pre><code>export default io;</code></pre>
<p>With that, we have a good-enough socket.io-client mock for our test. Let’s use it.</p><pre><code>// chat.test.jsimport React from 'react';import mockio, {serverSocket, cleanUp } from 'socket.io-client';</code></pre><pre><code>import Chat from './chat';</code></pre>
<p>Now let’s write our first test. The traditional TDD approach says we’ll write a test for a feature, see it fail, then go implement the feature to satisfy our test. For brevity, we’re not going to do <em>exactly</em> that, as this article focuses on testing.</p>
<p>Following the react-testing-library approach, the first thing you do before you write any test is to ask yourself: “How will a user test this feature?” For the first test in our list above, you ask yourself, “how will a user know that they’re getting the messages their friend is sending?”. To test it, they’ll probably tell the person next to them to send them a message.</p>
<p>Usually, how that will work is that the user’s friend sends a message to the server, with the user’s address, then the server emits the message to the user. Now, since we’re not testing if the user can send a message at this time, but whether the user can <strong>receive </strong>a message, let’s have<code>socket.io server</code> directly send the user a message.</p><pre><code>// chat.test.jsimport React from 'react';import mock-io, {serverSocket, cleanUp } from 'socket.io-client';import {render} from 'react-testing-library';</code></pre><pre><code>import Chat from './chat';</code></pre><pre><code>test('App should get messages', () =&gt; {  // first render the app  const utils = render(&lt;Chat /&gt;)    // then send a message  serverSocket.emit('message', 'Hey Wizy!');})</code></pre>
<p>Above we imported the <code>render</code> method from the react-testing-library, which is just a wrapper around <code>ReactDom.render</code>. In our text, we use it to render our Chat app. The render method returns a test utility object that contains query methods we can use to query the <code>container</code> of our app — the DOM node <code>render</code> rendered our app into — for DOM nodes our test is interested in. Next in the text, use our mock socket.io server to send a message to the user.</p>
<p>Now that we’ve sent a message to the user, think again: how will the user know they’ve gotten the message? From the design above, they’ll definitely have to look at the screen to see the message appear. So to test that, we have to query the container of our app to see if it has any node that contains the message we sent, ‘Hey Wizy!’ To do that, the utility object returned from <code>render</code> has a query method called <code>getByText</code>, so we could simply do:</p>
<p><code>expect(utils.getByText('Hey Wizy!')).toBeTruthy();</code></p>
<p>While that might work, unfortunately, we can’t do that. Here’s why: All query methods returned from <code>render</code> will search the entire container for the specified query. That means that <code>getByText</code>, as used above, will search the entire container for the text ‘Hey Wizy!’, then returns the first node that has that text.</p>
<p>But that’s not how our user will look for the text. Instead, our user will only look <strong>within </strong>the ‘messages-section’, the section that contains all the messages. Only if messages appear in that section will they know they’ve got a message. So to make sure our test resembles how the user is using our app, we’ll need to search for the text ‘Hey Wizy!’ <strong>only within </strong>the messages-section, just as the user would do.</p>
<p>For that, the react-testing-library provides us with a unique query method call, <code>within</code>, which helps us focus our query <strong>within</strong> a particular section of the rendered document. Let’s use it!</p>
<p>Note: <code>within</code> is a new API that was inspired by this article, so make sure you have the very latest version of the react-testing-library.</p><pre><code>// chat.test.jsimport React from 'react';import mock-io, {serverSocket, cleanUp } from 'socket.io-client';import {render, within} from 'react-testing-library';</code></pre><pre><code>import Chat from './chat';</code></pre><pre><code>test('App should get messages', () =&gt; {  // first render the app  const utils = render(&lt;Chat /&gt;)    // then send a message  serverSocket.emit('message', 'Hey Wizy!');    // the message must appear in the message-section  const messageSection = utils.getByTestId('message-section');  // check withing messageSection to find the received message  const message = within(messageSection).getByText('Hey Wizy!');})</code></pre>
<p>First, we grabbed the message section with a query method <code>getByTestId</code>. To use <code>getByTestId</code> in your test, you have to hard-code it in the DOM. Like so:</p>
<p><code>&lt;div data-testid=”message-section”</code> /&gt;</p>
<p>Because <code>getByTestId</code> does not closely resemble how users locate sections of your app, you should use it only on spacial cases and only when you’re certain there is no better alternative.</p>
<p>Still, our test is not relying on the DOM structure. Even if someone changes the <code>div</code> to a <code>section</code> tag or wraps it 10 levels deep in the DOM, our test doesn’t just care about the code — it just cares about the test-id.</p>
<p>Lastly, we use the <code>within</code> method as described earlier to get the received message. If the text is not found, <code>getByText</code> will throw and fail our test.</p>
<p>And that’s how we assert that the App can get messages.</p>
<h4 id="writing-more-tests">Writing more tests</h4>
<p>Let’s see some more query methods that the react-test-library gives us. We’ll see how we can further combine the APIs we’ve already learned to perform more complex queries without relying on the UI code.</p>
<p>So now, let’s write the second test: the App should tell the user when/if a message has been sent or not. Also, I think this test is basically doing the same thing as the next one in the list, so let’s merge both into one example.</p>
<p>Again, the first question we ask is…? I know you got it: “how will our user test this feature?” Okay, how you phrase your question might be different, but you get the idea :). So to test the sending message feature, the steps will look like this:</p>
<ul>
<li>The user locates the input to enter their message. Then they enter their message. Finally, they click the send button.</li>
<li>The message should appear on the message-section</li>
<li>The server will tell if the message got to the server, which means sent</li>
<li>The UI should mark the message as sent</li>
<li>The server then tells when the message is delivered</li>
<li>The UI should, in turn, update the message as delivered</li>
</ul>
<p>How does the user locate the input to enter their message? From the UI design we’re working with, they’ve gotta look and find the input with the placeholder ‘message’. (Well, that’s actually the only input on the screen, but even if there are more, the user will identify the input to enter their message by the placeholder or label.)</p>
<p>The react-testing-library has us covered again with a query method called <code>getByPlaceholderText</code></p><pre><code>// chat.test.jsimport React from 'react';import mock-io, {serverSocket, cleanUp } from 'socket.io-client';import {render, renderIntoDocument, within, cleanup} from 'react-testing-library';</code></pre><pre><code>import Chat from './chat';</code></pre><pre><code>afterEach(cleanup);</code></pre><pre><code>test('App should get messages', () =&gt; {  // ...})</code></pre><pre><code>test('App should tell when message is sent and delivered', () =&gt; {  // first render the app  const utils= renderIntoDocument(&lt;Chat /&gt;)    // enter and send a message  utils.getByPlaceholderText('message').value = 'Hello';  utils.getByTestId('send-btn').click()})</code></pre>
<p>So we introduced a couple of new APIs here. The first one is the <code>renderIntoDocument</code> method. We should fire real DOM events, not simulate them, in our test, as that more closely resembles how users use our app.</p>
<p>The drawback is that the <code>render</code> method creates and renders our app to an arbitrary DOM node, called <code>container</code>, on the fly. But React handles events via event delegation — attaching a single event for all event types on the <code>document</code>, and then delegating the event to the appropriate DOM node that triggered the event.</p>
<p>So, to fire real DOM events, we need to actually render our app into <code>document.body</code>. That’s what <code>renderIntoDocument</code> does for us.</p>
<p>Because we render into the document, we want to always make sure that the document is cleaned up after each test. You guessed right, the <strong>cleanup</strong> helper function does that for us.</p>
<p>In the test, after we enter the value, we click the send button to send our message. If you noticed, looking at the design, there is no send button. But if you pull out your Telegram or WhatsApp right now, you’ll notice that the send button only appears when you’ve actually entered some text in the message input. Our test has just accidentally covered that feature. :)</p>
<p>Now that we’ve clicked the send button, let’s make some assertions.</p><pre><code>// chat.test.jsimport React from 'react';import mock-io, {serverSocket, cleanUp } from 'socket.io-client';import {render, renderIntoDocument, within, cleanup} from 'react-testing-library';</code></pre><pre><code>import Chat from './chat';</code></pre><pre><code>afterEach(cleanup);</code></pre><pre><code>test('App should get messages', () =&gt; {  // ...})</code></pre><pre><code>test('App should tell when message is sent/delivered', () =&gt; {  // first render the app  const utils = renderIntoDocument(&lt;Chat /&gt;)    // enter and send a message  utils.getByPlaceholderText('message').value = 'Hello';  utils.getByTestId('send-btn').click();    // the message should appear on the message section  const messageSection = uitils.getByTestId('message-section');  expect(within(messageSection).getByText('Hello')).toBeTruthy();    // server tells us message is sent  serverSocket.emit('message-sent');</code></pre><pre><code>  // Now the UI should mark the message as sent  const message = within(messageSection).getByText('Hello');  expect(within(message).getByTestId('sentIcon')).toBeTruthy();</code></pre><pre><code>  // server tells us it's delivered  serverSocket.emit('message-delivered');</code></pre><pre><code>  // UI should mark the message as delivered  expect(within(message).getByTestId('deliveredIcon')).toBeTruthy();})</code></pre>
<p>And that’s it. Just exactly as the user would expect, our test expects to see the sent/delivered icon appear next to the message when it’s sent/delivered.</p>
<p>So far, we’ve seen how easy testing a real-time socket.io-client app can be with the react-testing-library. No matter what you are testing, when you follow this approach, you gain more confidence that your app is working as it should. And what is more, we still have <strong>zero idea</strong> what the implementation of the app will look like. Just as the user, <strong>our test just doesn’t care about the implementation!</strong></p>
<h3 id="finishing-up">Finishing up</h3>
<p>Lastly, I’ll leave it to you to think about how to write the last two remaining tests on our list:</p>
<ul>
<li>App should tell when a friend comes online/goes offline</li>
<li>App should tell when a friend is typing</li>
</ul>
<p>Tip: You should have the server socket.io emit the event, then you assert what the UI will look like. Think about how <strong>exactly</strong> the user will know when a friend is typing, online, offline.</p>
<p>If you feel like I’ve done a nice job, and that others deserve a chance to see this, kindly applaud this article to help spread a better approach of testing real-time socket.io-client apps.</p>
<p>If you have a question that hasn’t been answered or feel differently about some of the points here, feel free to drop in some comments here or via <a href="https://twitter.com/Daajust" rel="noopener">Twitter</a>.</p>
<p>You might also want to follow me here and/or on Twitter for more awesome articles coming up. And you might like to check out my previous articles:</p>
<ul>
<li><a href="https://medium.freecodecamp.org/do-you-want-a-better-understanding-of-buffer-in-node-js-check-this-out-2e29de2968e8?source=user_profile---------2-------------------" rel="noopener">Do you want a better understanding of Buffer in Node.js? Check this out</a></li>
<li><a href="https://medium.freecodecamp.org/functional-setstate-is-the-future-of-react-374f30401b6b" rel="noopener">Functional setState is the future of React</a></li>
</ul>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
