---
card: "https://cdn-media-1.freecodecamp.org/images/0*T8onsKEr4xcSyyQR."
tags: [JavaScript]
description: One thing I struggled with when I started learning React was
author: "Milad E. Fahmy"
title: "How to build sturdy React apps with TDD and the React Testing Library"
created: "2021-08-15T19:45:56+02:00"
modified: "2021-08-15T19:45:56+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-react tag-testing tag-tech tag-productivity ">
<header class="post-full-header">
<h1 class="post-full-title">How to build sturdy React apps with TDD and the React Testing Library</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/0*T8onsKEr4xcSyyQR. 300w,
https://cdn-media-1.freecodecamp.org/images/0*T8onsKEr4xcSyyQR. 600w,
https://cdn-media-1.freecodecamp.org/images/0*T8onsKEr4xcSyyQR. 1000w,
https://cdn-media-1.freecodecamp.org/images/0*T8onsKEr4xcSyyQR. 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/0*T8onsKEr4xcSyyQR." alt="How to build sturdy React apps with TDD and the React Testing Library">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>One thing I struggled with when I started learning React was testing my web apps in a way that is both useful and intuitive. I used <a href="http://airbnb.io/enzyme/docs/api/" rel="noopener">Enzyme</a> with <a href="https://facebook.github.io/jest/" rel="noopener">Jest</a> to shallow render a component every time I wanted to test it.</p>
<p>Of course, I was absolutely abusing the snapshot testing feature.</p>
<p>Well, at least I wrote a test right?</p>
<p>You might have heard somewhere that writing unit and integration tests will improve the quality of the software you write. Having bad tests, on the other hand, breeds false confidence.</p>
<p>Recently, I attended a workshop through <a href="https://workshop.me/" rel="noopener">workshop.me</a> with <a href="undefined" rel="noopener">Kent C. Dodds</a> where he taught us how to write better integration tests for React applications.</p>
<p>He also tricked us into using his <a href="https://github.com/kentcdodds/react-testing-library" rel="noopener">new testing library</a>, in favor of its emphasis on testing the application in the same way that a user would encounter it.</p>
<p>In this article, we will learn to exercise TDD in order to build solid React applications by creating a comment feed. Of course, this process applies to just about all software development, not just React or JavaScript apps.</p>
<h3 id="getting-started"><strong>Getting Started</strong></h3>
<p>We’re going to start off by running <code>create-react-app</code> and installing the dependencies. My assumption is that if you’re reading an article about testing applications, you’re probably already a familiar with installing and starting up JavaScript projects. I’ll be using <code>yarn</code> rather than <code>npm</code> here.</p><pre><code>create-react-app comment-feed</code></pre><pre><code>cd comment-feed</code></pre><pre><code>yarn</code></pre>
<p>As it stands, we can remove all of the files in the <code>src</code> directory except for index.js. Then, right inside the <code>src</code> folder, create a new folder called <code>components</code> and another folder called <code>containers</code>.</p>
<p>For testing utilities, I am going to build this app using Kent’s <a href="https://github.com/kentcdodds/react-testing-library" rel="noopener">React Testing Library</a>. It is a lightweight test utility that encourages the developer to test their application in the same way that it’ll be used.</p>
<p>Like Enzyme, it exports a render function, but this render function always does a full mount of your component. It exports helper methods allowing you to locate elements by label or text or even test IDs. Enzyme does that as well with its <code>mount</code> API, but the abstraction it creates actually offers more options, many of which allow you to get away with testing implementation details.</p>
<p>We don’t want to test implementation details anymore. We want to render a component and see if the right things happen when we click or change something on the UI. That’s it! No more directly checking props or state or class names.</p>
<p>Let’s install them and get to work.</p><pre><code>yarn add react-testing-library</code></pre>
<h3 id="building-the-comment-feed-with-tdd"><strong>Building the Comment Feed with TDD</strong></h3>
<p>Let’s do this first component TDD-style. Fire up your test runner.</p><pre><code>yarn test --watch</code></pre>
<p>Inside the <code>containers</code> folder, we are going to add a file called CommentFeed.js. Alongside it, add a file called CommentFeed.test.js. For the very first test, let’s verify that users can create comments. Too soon? Okay, since we don’t have any code yet, we’ll start with a smaller test. Let’s check that we can render the feed.</p>
<h4 id="some-notes-on-react-testing-library"><strong>Some notes on react-testing-library</strong></h4>
<p>First, let’s note the render function here. It is similar to the way <code>react-dom</code> renders a component onto the DOM, but it returns an object which we can destructure to get some neat test helpers. In this case, we get <code>queryByText</code>, which, given some text we expect to see on the DOM, will return that HTML element.</p>
<p>The <a href="https://github.com/kentcdodds/react-testing-library#faq" rel="noopener">React Testing Library docs</a> have a hierarchy that should help you decide which query or get method to use. Generally, the order goes like this:</p>
<ul>
<li><code>getByLabelText</code> (form inputs)</li>
<li><code>getByPlaceholderText</code> (only if your input doesn’t have a label — less accessible!)</li>
<li><code>getByText</code> (buttons and headers)</li>
<li><code>getByAltText</code> (images)</li>
<li><code>getByTestId</code> (use this for things like dynamic text or otherwise odd elements you want to test)</li>
</ul>
<p>Each of these has an associated <code>queryByFoo</code> that does the same, except won’t fail your test when it doesn’t find an element. Use these if you’re just testing for the <strong>existence</strong> of an element.</p>
<p>If none of these get you exactly what you’re looking for, the <code>render</code> method also returns the DOM element mapped to the <code>container</code> property, so you can use it like <code>container.querySelector(‘body #root’)</code>.</p>
<h3 id="the-first-implementation-code"><strong>The First Implementation Code</strong></h3>
<p>Now, the implementation will look fairly simple. We just need to make sure that “Comment Feed” is in the component.</p>
<p>It could be worse — I mean, I was about to write this whole article while styling components. Fortunately, tests don’t care too much for styles, so we can focus on our application logic.</p>
<p>This next test will verify that we can render comments. But we don’t even have any comments, so let’s add in that component too. After the test though.</p>
<p>I’m also going to create a props object to store the data we may reuse in these tests.</p>
<p>In this case, I am checking that the number of comments is equal to the number of items passed into the CommentFeed. It’s trivial, but the failure of the test gives us the opportunity to create the Comment.js file.</p>
<p>This green lights our test suite so we can proceed without fear. All hail TDD, the savior of our kind. It works when we give it an empty array, of course. But what if we give it some real objects?</p>
<p>We must update our implementation to actually render stuff. Simple enough now that know where we’re going, right?</p>
<p>Ah look at that, our test is once again passing. Here’s a neat shot of its beauty.</p>
<p>Notice how I never once said we should fire up our program with <code>yarn start</code>? We’re going to keep it that way for a while. The point is, you must feel the code with your mind.</p>
<p>The styling is just what’s on the outside — it’s what is on the inside that counts.</p>
<p>Just in case you want to start the app though, update index.js to the following:</p>
<h3 id="add-comment-form"><strong>Add Comment Form</strong></h3>
<p>This is where things start getting more fun. This is where we go from sleepily checking for the existence of DOM nodes to actually doing stuff with that and <strong>validating behavior</strong>. All that other stuff was a warmup.</p>
<p>Let’s start by describing what I want from this form. It should:</p>
<ul>
<li>contain a text input for the author</li>
<li>contain a text input for then comment itself</li>
<li>have a submit button</li>
<li>eventually call the API or whatever service handles creating and storing the comment.</li>
</ul>
<p>We can take down this list in a single integration test. For the previous test cases we took it rather slowly, but now we’re going to pick up the pace and try to nail it in one fell swoop.</p>
<p>Notice how our test suite is developing? We went from hard-coding props inside their own test cases to creating a factory for them.</p>
<h4 id="arrange-act-assert"><strong>Arrange, Act, Assert</strong></h4>
<p>This following integration test can be broken into three parts: arrange, act, and assert.</p>
<ul>
<li><strong>Arrange: </strong>create props and other fixtures for the test case</li>
<li><strong>Act: </strong>simulate changes to the elements such as text inputs or button clicks</li>
<li><strong>Assert: </strong>assert that the desired functions were invoked the right number of times, and with the correct arguments</li>
</ul>
<p>There are some assumptions made about the code, like the naming of our labels or the fact that we will have a <code>createComment</code> prop.</p>
<p>When finding inputs, we want to try to find them by their labels. This prioritizes accessibility when we’re building our applications. The easiest way to grab the form is by using <code>container.querySelector</code>.</p>
<p>Next, we must assign new values to the inputs and simulate the change to update their state. This step may feel a little strange, since normally we type one character at a time, updating the component’s state for each new character.</p>
<p>This test behaves more like the behavior of copy/paste, going from empty string to ‘Socrates’. No breaking issues for now, but we may want to make note of that in case it comes up later.</p>
<p>After submitting the form, we can make assertions on things like which props were invoked and with what arguments. We could also use this moment to verify that the form inputs cleared.</p>
<p>Is it intimidating? No need to fear, my child, walk this way. Start by adding the form to your render function.</p>
<p>I could break this form into its own separate component, but I will refrain for now. Instead, I’ll add it to my “Refactor Wish List” I keep beside my desk.</p>
<p>This is the way of TDD. When something seems like it can be refactored, make a note of it and move on. Refactor only when the presence of an abstraction benefits you and doesn’t feel unnecessary.</p>
<p>Remember when we refactored our test suite by creating the <code>createProps</code> factory? Just like that. We can refactor tests, too.</p>
<p>Now, let’s add in the <code>handleChange</code> and <code>handleSubmit</code> class methods. These get fired when we change an input or submit our form. I will also initialize our state.</p>
<p>And that did it. Our tests are passing and we have something that sort of resembles a real application. How does our coverage look?</p>
<p>Not bad. If we ignore all of the setups that go inside index.js, we have a fully covered web application with respect to lines executed.</p>
<p>Of course, there are probably other cases we want to test in order to verify that the application is working as we intend. That coverage number is just something your boss can brag about when they’re talking to the other cohorts.</p>
<h3 id="liking-comments"><strong>Liking Comments</strong></h3>
<p>How about we check that we can like a comment? This may be a good time to establish some concept of authentication within our application. But we’ll not jump too far just yet. Let’s first update our props factory to add an <code>auth</code> field along with IDs for the comments we generate.</p>
<p>The user who is “authenticated” will have their <code>auth</code> property passed down through the application. Any actions that are relevant to whether they are authenticated will be noted.</p>
<p>In many applications, this property may contain some sort of access token or cookie that is sent up when making requests to the server.</p>
<p>On the client, the presence of this property lets the application know that they can let the user view their profile or other protected routes.</p>
<p>In this testing example, however, we will not fiddle too hard with authentication. Imagine a scenario like this: When you enter a chatroom, you give your screen name. From that point on, you are in charge of every comment that uses this screen name, despite who else signed in with that name.</p>
<p>While it is not a great solution, even in this contrived example, we are only concerned with testing that the CommentFeed component behaves as it should. We are not concerned with <strong>how</strong> our users are logged in.</p>
<p>In other words, we may have a totally different login component that handles the authentication of a particular user, thus sending them through hoops of fire and fury in order to derive the almighty <code>auth</code> property that lets them wreak havoc in our application.</p>
<p>Let’s “like” a comment. Add this next test case and then update the props factory to include <code>likeComment</code>.</p>
<p>And now for the implementation, we’ll start by updating the Comment component to have a like button as well as a <code>data-testid</code> attribute so we can locate it.</p>
<p>I put the test ID directly on the button so that we can immediately simulate a click on it without having to nest query selectors. I also attached an <code>onClick</code> handler to the button so that it calls the <code>onLike</code> function passed down to it.</p>
<p>Now we just add this class method to our CommentFeed:</p>
<p>You may wonder why we don’t simply pass the <code>likeComment</code> prop directly to the Comment component. Why do we make it a class property?</p>
<p>In this case, because it is rather simple, we don’t have to build this abstraction. In the future, we may decide to add other <code>onClick</code> handlers that, for example, handle analytics events or initiate a subscription to that post’s future comments.</p>
<p>Being able to bundle multiple different function calls in the <code>handleLike </code>method of this container component has its advantages. We could also use this method to update the state of the component after a successful “Like” if we so choose.</p>
<h3 id="disliking-comments"><strong>Disliking Comments</strong></h3>
<p>At this point we have working tests for rendering, creating, and liking comments. Of course, we haven’t implemented the logic that actually does that — we’re not updating the store or writing to a database.</p>
<p>You might also notice that the logic we’re testing is fragile and not terribly applicable to a real-world comment feed. For example, what if we tried to like a comment we already liked? Will it increment the likes count indefinitely, or will it unlike it? Can I like my own comments?</p>
<p>I’ll leave extending the functionality of the components to your imagination, but a good start would be to write a new test case. Here’s one that builds off the assumption that we would like to implement disliking a comment we already liked:</p>
<p>Notice that this comment feed we’re building allows me to like my own comments. Who does that?</p>
<p>I have updated the Comment component with some logic to determine whether or not the current user has liked the comment.</p>
<p>Well I cheated a little bit: where we were passing <code>author</code> to the <code>onLike</code> function before, I changed to <code>currentUser</code>, which is the <code>auth</code> prop passed down to the Comment component.</p>
<p>After all, it wouldn’t make sense for the comment’s author to show up when someone else likes their comment.</p>
<p>I realized this because I was vigorously writing tests. Had I just been coding by coincidence this might’ve slipped past me until one of my coworkers berated me for my ignorance!</p>
<p>But there is no ignorance here, just tests and the code that follows. Be sure to update the CommentFeed so that it expects to pass down the <code>auth</code> property. For the <code>onClick</code> handlers we can omit passing around the <code>auth</code> property, since we can derive that from the <code>auth</code> property in the parent’s <code>handleLike</code> and <code>handleDislike</code> methods.</p>
<h3 id="wrapping-up"><strong>Wrapping up</strong></h3>
<p>Hopefully, your test suite is looking like an unlit Christmas tree.</p>
<p>There are so many different routes we can take at this, it can get a little overwhelming. Every time you get an idea for something, just write it down, either on paper or in a new test block.</p>
<p>For example, say you actually want to implement <code>handleLike</code> and <code>handleDislike</code> in one single class method, but you have other priorities right now. You can do this by documenting in a test case like so:</p>
<p>This doesn’t mean you need to write an entirely new test. You could also update the previous two cases. But the point is, you can use your test runner as a more imperative “To Do” list for your application.</p>
<h4 id="helpful-links"><strong>Helpful Links</strong></h4>
<p>There are a few great pieces of content out there that deal with testing at large. Here are some in particular that inspired this article as well as my own practices.</p>
<ul>
<li>“<a href="https://blog.kentcdodds.com/introducing-the-react-testing-library-e3a274307e65" rel="noopener">Introducing the React Testing Library</a>" by <a href="undefined" rel="noopener">Kent C. Dodds</a>. It’s a good idea to understand the philosophy behind this testing library.</li>
<li>“<a href="http://blog.codepipes.com/testing/software-testing-antipatterns.html" rel="noopener">Software Testing Anti-patterns</a>" by Kostis Kapelonis. An extremely in-depth article that discusses unit and integration testing. Also how not to do them.</li>
<li>“<a href="https://www.amazon.com/Test-Driven-Development-Kent-Beck/dp/0321146530" rel="noopener">Test Driven Development by Example</a>" by Kent Beck. This is a physical book that discusses TDD patterns. It is not too long and it is written conversationally, making it easy to digest.</li>
</ul>
<p>I hope that’ll tide you over for a while.</p>
<p>Curious for more posts or witty remarks? If you enjoyed this article, give me some claps and follow me on <a href="http://Medium](https://medium.com/@iwilsonq" rel="noopener">Medium</a>, <a href="https://github.com/iwilsonq" rel="noopener">Github</a>, and <a href="https://twitter.com/iwilsonq" rel="noopener">Twitter</a>!</p>
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
