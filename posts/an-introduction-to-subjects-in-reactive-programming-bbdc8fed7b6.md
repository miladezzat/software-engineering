---
card: "https://cdn-media-1.freecodecamp.org/images/1*6gi30QcIoPkwcxpz5d4wkg.png"
tags: [JavaScript]
description: A Subject is a “special” type of observable that allows us to
author: "Milad E. Fahmy"
title: "An introduction to Subjects in Reactive Programming"
created: "2021-08-15T19:35:39+02:00"
modified: "2021-08-15T19:35:39+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-observables tag-rxjs tag-reactive-programming tag-tech ">
<header class="post-full-header">
<h1 class="post-full-title">An introduction to Subjects in Reactive Programming</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*6gi30QcIoPkwcxpz5d4wkg.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*6gi30QcIoPkwcxpz5d4wkg.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*6gi30QcIoPkwcxpz5d4wkg.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*6gi30QcIoPkwcxpz5d4wkg.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*6gi30QcIoPkwcxpz5d4wkg.png" alt="An introduction to Subjects in Reactive Programming">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>A Subject is a “special” type of observable that allows us to broadcast values to multiple subscribers. The cool thing about Subjects, is that it provides a real-time response.</p>
<p>For instance, if we have a subject with 10 subscribers, whenever we push values to the subject, we can see the value captured by each subscriber</p>
<p>This introduces a couple challenges; what if we push some values, and then subscribe, or vice-verse? Timing plays an important role, if we subscribe late, we won’t be able to access the values, similar to if someone enters a live-sport event on TV 30 minutes later.</p>
<p>Luckily, we have 4 types of Subjects that allows us to “time travel” in which we can access values even though we subscribe late or not.</p>
<h4 id="topics-we-ll-cover-">Topics we’ll cover:</h4>
<ol>
<li>What is a Subject with a practical example</li>
<li>BehaviorSubject: Get the last message</li>
<li>ReplaySubject: Time travel</li>
<li>AsyncSubject: Once completed, get the last message</li>
</ol>
<h3 id="1-what-is-a-subject">1. What is a Subject?</h3>
<p>As mentioned, a Subject is nothing more like an observable with a few more characteristics. An observable is by definition an <a href="https://rxjs.dev/guide/overview" rel="noopener">invokable collection</a> that emits data once subscribed. Meanwhile, a Subject is where we control the state of “when to emit data” to multiple subscribers.</p>
<p>A Subject allows us to invoke methods like <code>.next()</code>, <code>.complete()</code> and <code>.error()</code> outside, while in an observable, we invoke these methods as callbacks.</p><pre><code class="language-js">// Creating an Observable
const observable = new Observable((observer) =&gt; {
observer.next(10);
observer.next(5);
observer.complete();
});
// Creating a Subject
const subject = new Subject();
subject.next(10);
subject.next(5);
subject.complete();</code></pre>
<h4 id="practical-example-let-s-build-a-simple-chat-group-using-a-subject">Practical example: Let’s build a simple chat group using a Subject</h4>
<p>Let’s imagine we are building a simple chat app where people can post messages to the chat group. The first step is to create an instance of the Subject, and then assign it to a <code>chatGroup</code>.</p><pre><code class="language-js">// Create subject "Observable"
const chatGroup = new Subject();</code></pre>
<p>Now that our chat group (Subject) is created, the next thing to do is add messages. Let’s create a typical conversation between two friends.</p><pre><code class="language-js">// Push values to the stream
chatGroup.next('David - Hi, which hot series do you recommend?');
chatGroup.next('Peter - Game of Thrones, Bodyguard or Narcos are few of the good ones');
chatGroup.next('David - Interesting, which one is the hottest?');
chatGroup.next('Peter - Game of Thrones!');</code></pre>
<p>So far so good — now we have 4 messages posted in our chat group, so what happens if we subscribe? Or let’s say a new friend named John wants to join the conversation. Is he be able to see the old messages?</p><pre><code class="language-js">// Print messages
chatGroup.subscribe((messages) =&gt; {
console.log(messages)
})</code></pre>
<p>Unfortunately not, John misses the conversation because he’s subscribes late. This is a perfect example of how reactive programming works — the idea of values passing over time, and thus, we must subscribe in the right time to access the values.</p>
<p>To further elaborate on the previous example, what if John enters in the middle of the conversation?</p><pre><code class="language-js">// Push values to the stream
chatGroup.next('David - Hi, which hot series do you recommend?');
chatGroup.next('Peter - Game of Thrones, Bodyguard or Narcos are few of the good ones');
// John enters the conversation
chatGroup.subscribe((messages) =&gt; {
console.log(messages)
});
chatGroup.next('David - Interesting, which one is the hottest?');
chatGroup.next('Peter - Game of Thrones!');
// OUTPUT
// David - Interesting, which one is the hottest?
// Peter - Game of Thrones!</code></pre>
<p>Once John subscribes, he sees the two last messages. The Subject is doing what it’s intended to do. But what if we want John to view all messages, or just the last one, or get notified when a new message is posted?</p>
<p>In general, these Subjects are mostly similar, but each one provides some extra functionality, let’s describe them one by one.</p>
<h3 id="2-behaviorsubject-get-last-message">2. BehaviorSubject: Get last message</h3>
<p>The BehaviorSubject is similar to a Subject except it requires an initial value as an argument to mark the starting point of the data stream. The reason is because when we subscribe, it returns the last message. This is similar concept when dealing with arrays; where we do <code>array.length-1</code> to get the latest value.</p><pre><code class="language-js">import {BehaviorSubject } from "rxjs";
// Create a Subject
const chatGroup = new BehaviorSubject('Starting point');
// Push values to the data stream
chatGroup.next('David - Hi, which hot series do you recommend?');
chatGroup.next('Peter - Game of Thrones, Bodyguard or Narcos are few of the good ones');
chatGroup.next('David - Interesting, which one is the hottest?');
chatGroup.next('Peter - Game of Thrones!');
// John enters the conversation
chatGroup.subscribe((messages) =&gt; {
console.log(messages)
})
// OUTPUT
// Peter - Game of Thrones!</code></pre>
<h3 id="3-replaysubject-time-travel">3. ReplaySubject: Time travel</h3>
<p>The ReplaySubject, as the name implies, once subscribed it broadcasts all messages, despite if we subscribed late or not. It’s like time travel, where we can access all the values that were broadcast.</p><pre><code class="language-js">
import { ReplaySubject } from "rxjs";
// Create a Subject
const chatGroup = new ReplaySubject();
// Push values to the data stream
chatGroup.next('David - Hi, which hot series do you recommend?');
chatGroup.next('Peter - Game of Thrones, Bodyguard or Narcos are few of the good ones');
chatGroup.next('David - Interesting, which one is the hottest?');
chatGroup.next('Peter - Game of Thrones!');
// John enters the conversation
chatGroup.subscribe((messages) =&gt; {
console.log(messages)
})
// OUTPUT
// David - Hi, which hot series do you recommend?'
// Peter - Game of Thrones, Bodyguard or Narcos are few of the good ones'
// David - Interesting, which one is the hottest?'
// Peter - Game of Thrones!'</code></pre>
<h3 id="4-asyncsubject-once-completed-get-last-message">4. AsyncSubject: Once completed, get last message</h3>
<p>The AsyncSubject is similar to BehaviorSubject in terms of emitting the last value once subscribed. The only difference is that it requires a <code>complete()</code> method to mark the stream as completed. Once that is done, the last value is emitted.</p><pre><code class="language-js">import { AsyncSubject } from "rxjs";
// Create a Subject
const chatGroup = new AsyncSubject();
// Push values to the data stream
chatGroup.next('David - Hi, which hot series do you recommend?');
chatGroup.next('Peter - Game of Thrones, Bodyguard or Narcos are few of the good ones');
chatGroup.next('David - Interesting, which one is the hottest?');
chatGroup.next('Peter - Game of Thrones!');
chatGroup.complete(); // &lt;-- Mark the stream as completed
// John enters the conversation
chatGroup.subscribe((messages) =&gt; {
console.log(messages)
})
// OUTPUT
// Peter - Game of Thrones!'</code></pre>
<h3 id="summary">Summary</h3>
<p>Back to our previous example with John, we can now decide if we want John to access the whole conversation (ReplaySubject), the last message (BehaviorSubject), or the last message once the conversation completes (AsyncSubject).</p>
<p>If you ever struggle to identify if a Subject is the right way to go, the article “<a href="http://davesexton.com/blog/post/To-Use-Subject-Or-Not-To-Use-Subject.aspx" rel="noopener">To Use a Subject or Not to Use a Subject</a>” by Dave Sixton describes when to use Subjects based on two criteria:</p>
<ol>
<li>Only when one want to <strong>convert</strong> a cold Observable into a hot observable.</li>
<li><strong>Generate</strong> a hot observable that passes data continuously.</li>
</ol>
<p>In short, only creativity limits the potential use of reactive programming. There will be some scenarios where Observables do most of the heavy-lifting, but understanding what Subjects are, and what type of Subjects exists, will definitely improve your reactive programming skills.</p>
<p>If you are interested to learn more about the web-ecosystem, here are few articles I’ve written, enjoy.</p>
<ul>
<li><a href="https://medium.freecodecamp.org/a-comparison-between-angular-and-react-and-their-core-languages-9de52f485a76" rel="noopener">A comparison between Angular and React</a></li>
<li><a href="https://medium.freecodecamp.org/how-to-use-es6-modules-and-why-theyre-important-a9b20b480773" rel="noopener">A practical guide to ES6 modules</a></li>
<li><a href="http://A practical ES6 guide on how to perform HTTP requests using the Fetch API" rel="noopener">How to perform HTTP requests using the Fetch API</a></li>
<li><a href="https://medium.freecodecamp.org/learn-these-core-javascript-concepts-in-just-a-few-minutes-f7a16f42c1b0?gi=6274e9c4d599" rel="noopener">Important web concepts to learn</a></li>
<li><a href="https://medium.freecodecamp.org/7-javascript-methods-that-will-boost-your-skills-in-less-than-8-minutes-4cc4c3dca03f" rel="noopener">Boost your skills with these JavaScript methods</a></li>
<li><a href="https://codeburst.io/learn-how-to-create-custom-bash-commands-in-less-than-4-minutes-6d4ceadd9590" rel="noopener">Create custom bash commands</a></li>
</ul>
<p>You can find me on Medium where I publish on a weekly basis. Or you can follow me on <a href="http://twitter.com/dleroari" rel="noopener">Twitter</a>, where I post relevant web development tips and tricks.</p>
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
