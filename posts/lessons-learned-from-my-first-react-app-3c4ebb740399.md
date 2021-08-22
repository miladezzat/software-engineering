---
card: "https://cdn-media-1.freecodecamp.org/images/1*Z2OuKxUwqnO-o8i7D8UxYQ.png"
tags: [JavaScript]
description: by ellereeeee
author: "Milad E. Fahmy"
title: "What I learned from creating my first React app"
created: "2021-08-15T19:44:26+02:00"
modified: "2021-08-15T19:44:26+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-react tag-tech tag-design tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">What I learned from creating my first React app</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*Z2OuKxUwqnO-o8i7D8UxYQ.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*Z2OuKxUwqnO-o8i7D8UxYQ.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*Z2OuKxUwqnO-o8i7D8UxYQ.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*Z2OuKxUwqnO-o8i7D8UxYQ.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*Z2OuKxUwqnO-o8i7D8UxYQ.png" alt="What I learned from creating my first React app">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by ellereeeee</p>
<h1 id="what-i-learned-from-creating-my-first-react-app">What I learned from creating my first React app</h1>
<figcaption>animating stuff with react-transition-group</figcaption>
</figure>
<p>I’m going to share the things I wish I knew, wish I had done, or was glad I did when I made my first React app. It’s a Pomodoro Clock, or a productivity timer. I built it for a <a href="https://www.freecodecamp.org/" rel="noopener">freeCodeCamp</a> project and to practice the React I learned for a <a href="https://chingu.io/" rel="noopener">Chingu</a> cohort.</p>
<p>You can check it out live <a href="https://ellereeeee-pomodoro-clock.netlify.com/" rel="noopener">here</a>, and the code is <a href="https://github.com/ellereeeee/pomodoro-clock" rel="noopener">here</a>.</p>
<p>Hopefully I can help some React newbies.</p>
<h3 id="read-the-react-docs">Read the React docs</h3>
<p>If you’re just starting to learn React, start with the <a href="https://reactjs.org/docs/hello-world.html" rel="noopener">official docs</a>. As far as docs go, the React ones are easy to understand and provide lots of examples.</p>
<p>Don’t do what I did and start with a React tutorial. I started with egghead.io’s <a href="https://egghead.io/courses/the-beginner-s-guide-to-react" rel="noopener">The Beginner’s Guide to React</a> (“<em>Beginner’s</em>” is a misnomer in my opinion) and it was rough. To be fair, I’ve heard egghead.io is meant for more experienced developers looking to get up to speed with a new framework.</p>
<p>I definitely learned a lot, but there was a lot of pausing videos, going back 10 seconds to hear an explanation again and again, and just looking at code and feeling lost. Things eventually clicked, but I can’t help but think I would’ve been better off starting with the official docs then checking out a tutorial.</p>
<p>I’m sure you can find a more beginner-friendly tutorial. However, looking at official docs first is a good practice and I think you’ll be better off in the case of learning React.</p>
<h3 id="know-javascript-well-or-be-ready-to-learn">Know JavaScript well, or be ready to learn</h3>
<p>Look at this short code-snippet:</p><pre><code>class Counter extends React.Component {  constructor(props) {    super(props)    this.state = {count: 0}    this.handleClick = this.handleClick.bind(this)  }</code></pre>
<p>Above, we’ve got an ES6 class (which is just syntactic sugar for prototypal inheritance) declaration. What is prototypal inheritance? What are the <code>constructor</code> and <code>super</code> functions? Why are we hard binding <code>handleClick</code> to <code>this</code>? Do you know anything about lex-time scope in JavaScript?</p>
<p>Now, you don’t <em>have</em> to know the answers to these questions to make something in React. You could just assume that you need this or that piece of code to make things work and leave it at that. However, I think it’s important to understand things at a deeper level.</p>
<p>This code pattern is the bread and butter of React. Don’t you want to know what’s going on?</p>
<p>This is just an example in React where you’ll need a decent knowledge of JavaScript.</p>
<p>Know it well, or be ready to learn.</p>
<h3 id="think-in-react">Think in React</h3>
<p>Design your app into a wireframe or mockup and break it down into components. This will make the coding process much smoother.</p>
<p>For example, I started with this mockup.</p>
<p>I changed some things in my final app, but looking at the mockup you can see:</p>
<ol>
<li>the orange app encompassing everything</li>
</ol>
<p>2. an information button at the top-left</p>
<p>3. a history button for completed tasks at the top-right</p>
<p>4. a message/input in the top-center</p>
<p>5. a radial timer, clock, and up and down buttons in the center</p>
<p>6. a play button in the bottom center</p>
<p>Then I separated my UI into components. Each piece should represent some function or data.</p>
<p>From this I was able to organize my components into a hierarchy:</p>
<p>Pretty straightforward. Everything is nested in the PomodoroTimer component. The important thing this illustrates is where state should be. State should be in one place in React and “flow down” to nested components. I decided it should be in the PomodoroTimer component.</p>
<p>I could have <code>time</code> state in the Timer component. However, I want to change the color of PomodoroTimer to blue if the user is taking a break. That means I'll have a <code>timerType</code> state that changes the background color and also the initial time (25 minutes for working and 5 minutes for resting).</p>
<p>The flow of data is more straight-forward if I have both <code>timerType</code> state and <code>time</code> state in PomodoroTimer and pass down <code>time</code> to Timer. <code>timerType</code> would change from <code>"Pomodoro"</code> to <code>"Rest"</code> once <code>time</code> reaches 0. It's easier to understand how state flows in my app if it's all it one place. This makes for easier debugging as well.</p>
<p>Check out the article <a href="https://reactjs.org/docs/thinking-in-react.html" rel="noopener">“Thinking in React”</a> from React’s official docs for a more detailed explanation on creating a React app from mockup to finished app.</p>
<h3 id="check-the-console-for-errors">Check the console for errors</h3>
<p>I made a big mistake in my code, and I would’ve caught it if I checked the console for errors. You should always be doing this regardless of what language or framework you’re coding in.</p>
<p>I had the mistake pointed out to me after I posted my code to forums for review:</p><pre><code>./src/components/PomodoroTimer.jsx  Line 17:   Do not mutate state directly. Use setState()  react/no-direct-mutation-state  Line 21:   Do not mutate state directly. Use setState()  react/no-direct-mutation-state</code></pre>
<p>This means I was modifying state directly, which is a big no-no in React.</p>
<p>So I changed my code from this:</p><pre><code>handleIncrementTime = () =&gt; {    this.setState({ state: (this.state.time += 300000) });  };  handleDecrementTime = () =&gt; {    if (this.state.time &gt; 300000) {      this.setState({ time: (this.state.time -= 300000) });    }  };</code></pre>
<p>to this:</p><pre><code>handleIncrementTime = () =&gt;    this.setState(prevState =&gt; ({ time: (prevState.time + 300000) }));  handleDecrementTime = () =&gt; {    if (this.state.time &gt; 300000) {      this.setState(prevState =&gt; ({ time: (prevState.time - 300000) }));    }  };</code></pre>
<p>I needed to use the second form of <code>setState</code> to update the state. Pass a function to <code>setState</code> that uses the argument <code>prevState</code> to update state. You can read about the second form of <code>setState</code> <a href="https://reactjs.org/docs/state-and-lifecycle.html" rel="noopener">here</a>.</p>
<h3 id="tl-dr">TL;DR</h3>
<ol>
<li>If you’re learning React, start with the React docs.</li>
<li>Know JavaScript well, or be ready to learn.</li>
<li>Take time planning your app. Break down your UI into components and consider where state will live.</li>
<li>Check the console for errors.</li>
</ol>
<p>I had a lot of fun coding my first React app and I hope you do too. Good luck!</p>
<p>Thank you Reddit user codethesite for helping me <a href="https://www.reddit.com/r/reactjs/comments/8tinqo/lessons_learned_from_my_first_react_app/e18vqtw/" rel="noopener">refactor my handler assignment operators</a>!</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
