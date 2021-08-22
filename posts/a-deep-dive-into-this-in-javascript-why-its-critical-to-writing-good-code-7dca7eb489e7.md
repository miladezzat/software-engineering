---
card: "https://cdn-media-1.freecodecamp.org/images/1*hVnCdEtqlQvHS1GTXbo5Xw.jpeg"
tags: [JavaScript]
description: "Using simple terminology and a real world example, this post "
author: "Milad E. Fahmy"
title: "A deep dive into this in JavaScript: why it’s critical to writing good code."
created: "2021-08-16T10:10:42+02:00"
modified: "2021-08-16T10:10:42+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-software-development tag-programming tag-web-development tag-tech ">
<header class="post-full-header">
<h1 class="post-full-title">A deep dive into this in JavaScript: why it’s critical to writing good code.</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*hVnCdEtqlQvHS1GTXbo5Xw.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*hVnCdEtqlQvHS1GTXbo5Xw.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*hVnCdEtqlQvHS1GTXbo5Xw.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*hVnCdEtqlQvHS1GTXbo5Xw.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*hVnCdEtqlQvHS1GTXbo5Xw.jpeg" alt="A deep dive into this in JavaScript: why it’s critical to writing good code.">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Using simple terminology and a real world example, this post explains what <code>this</code> is and why it is useful.</p><h3 id="is-this-for-you">Is this for you</h3><p>I have noticed that many explanations for <code>this</code> in JavaScript are taught assuming you are coming from some object-oriented programming language like Java, C++, or Python. This post is geared towards those of you who have no preconceptions of what you think <code>this</code><em> </em>is or what it should be. I will try to explain <strong>what</strong> <code>this</code> is and <strong>why</strong> it is helpful in a simple manner without unnecessary jargon.</p><p>Maybe you procrastinated diving into <code>this</code> because it looked weird and scary. Or maybe you only use it because StackOverflow says you need it in order to do certain things in React.</p><p>Before we dive into what <code>this</code> really is and why you would use it, we first need to understand the difference between <strong>functional</strong> programming and <strong>object-oriented</strong> programming.</p><h3 id="functional-vs-object-oriented-programming">Functional vs Object-Oriented Programming</h3><p>You may or may not know that JavaScript has both functional and object-oriented constructs, so you can choose to focus on one or the other or use both.</p><p>I embraced functional programming early in my JavaScript journey and avoided object-oriented programming like the plague. I didn’t know or understand object-oriented keywords such as <code>this</code>. I think one reason I didn’t understand it was because I didn’t really get why it was necessary. It seemed like I could do everything I needed to do without relying on <code>this</code>.</p><p>And I was right.</p><p>Sort of. You can maybe get by only focusing on one paradigm and never learning about the other, but you will be limited as a JavaScript developer. To illustrate the differences between functional and object-oriented programming, I am going to use an array of Facebook friend data as an example.</p><p>Let’s say you’re building a web app where the user signs in with Facebook, and you show some data regarding their Facebook friends. You will need to hit a Facebook endpoint to get their friends’ data. It might have some information such as <code>firstName</code>, <code>lastName</code>,<code>username</code>, <code>numFriends</code>, <code>friendData</code>, <code>birthday</code>, and <code>lastTenPosts</code>.</p><pre><code class="language-js">const data = [
{
firstName: 'Bob',
lastName: 'Ross',
username: 'bob.ross',
numFriends: 125,
birthday: '2/23/1985',
lastTenPosts: ['What a nice day', 'I love Kanye West', ...],
},
...
]</code></pre><p>The data above is what you get from the (fake, imaginary) Facebook API. Now you need to transform it, so that it is in a format that is useful to you and your project. Let’s say you want to show the following for each of the user’s friends:</p><ul><li>Their name in the format <code>`${firstName} ${lastName}`</code></li><li>Three random posts</li><li>Number of days until their birthday</li></ul><h3 id="functional-approach">Functional Approach</h3><p>A functional approach would be passing the whole array or each element of an array into a function that returns the manipulated data that you need:</p><pre><code>const fullNames = getFullNames(data)
// ['Ross, Bob', 'Smith, Joanna', ...]</code></pre><p>You start with raw data (from the Facebook API). In order to get it to transform into data that is useful to you, you pass the data into a function and the output is or includes the manipulated data that you can use in your app to display to the user.</p><p>You could imagine doing something similar for getting the three random posts and calculating the number of days until that friend’s birthday.</p><p><strong>The functional approach is taking your raw data, passing it through a function or multiple functions, and outputting data that is useful to you and your project.</strong></p><h3 id="object-oriented-approach">Object-Oriented Approach</h3><p>The object-oriented approach might be a little more difficult to grasp for those who are new to programming and learning JavaScript. The idea here is that you transform each friend <strong>into</strong> an object that has everything it needs to generate what <strong>you</strong> as the developer need.</p><p>You might create objects that have a <code>fullName</code> property, and two functions <code>getThreeRandomPosts</code> and <code>getDaysUntilBirthday</code> that are specific to that friend.</p><pre><code class="language-js">function initializeFriend(data) {
return {
fullName: `${data.firstName} ${data.lastName}`,
getThreeRandomPosts: function() {
// get three random posts from data.lastTenPosts
},
getDaysUntilBirthday: function() {
// use data.birthday to get the num days until birthday
}
};
}
const objectFriends = data.map(initializeFriend)
objectFriends[0].getThreeRandomPosts()
// Gets three of Bob Ross's posts</code></pre><p><strong>The object-oriented approach is creating objects for your data which have state and include all the information they need in order to generate the data that is useful to you and your project.</strong></p><h3 id="what-does-this-have-to-do-with-this">What does this have to do with this?</h3><p>You might not have ever thought to write something like <code>initializeFriend</code> above, and you might think something like that could be pretty useful. You might also notice, however, that it is not <strong>truly</strong> object-oriented.</p><p>The only reason that the methods <code>getThreeRandomPosts</code> or <code>getDaysUntilBirthday</code> would even work in the example above is because of closure. They still have access to <code>data</code> after <code>initializeFriend</code> returns because of closure. For more information about closure, check out <a href="https://github.com/getify/You-Dont-Know-JS/blob/master/scope%20%26%20closures/ch5.md" rel="noopener">You Don’t Know JS: Scope &amp; Closures</a>.</p><p>What if you had another method, let’s call it <code>greeting</code>. Note that a method (in regards to an object in JavaScript) is just an attribute whose value is a function. We want <code>greeting</code> to do something like this:</p><pre><code class="language-js">function initializeFriend(data) {
return {
fullName: `${data.firstName} ${data.lastName}`,
getThreeRandomPosts: function() {
// get three random posts from data.lastTenPosts
},
getDaysUntilBirthday: function() {
// use data.birthday to get the num days until birthday
},
greeting: function() {
return `Hello, this is ${fullName}'s data!`
}
};
return {
lastTenPosts: data.lastTenPosts,
birthday: data.birthday,
fullName: `${data.firstName} ${data.lastName}`,
getThreeRandomPosts: function() {
// get three random posts from this.lastTenPosts
},
getDaysUntilBirthday: function() {
// use this.birthday to get the num days until birthday
},
greeting: function() {
const numDays = this.getDaysUntilBirthday()
return `Hello, this is ${this.fullName}'s data! It is ${numDays} until ${this.fullName}'s birthday!`
}
};
}</code></pre><p>Now, everything that this object needs is scoped to the object itself once <code>intializeFriend</code> is executed. Our methods no longer rely on closure. They only use information contained within the object itself.</p><blockquote>Ok, so that is one way to use <code>this</code> , but you said that <code>this</code> can be many different things depending on the context. What does that mean? Why wouldn’t it always refer to the object itself?</blockquote><p>There are some times where you want to force <code>this</code> to be something in particular. A good example is for event handlers. Let’s say we wanted to open up a friend’s Facebook page when the user clicks on them. We might add an <code>onClick</code> method to our object:</p><pre><code class="language-js">function initializeFriend(data) {
return {
lastTenPosts: data.lastTenPosts,
birthday: data.birthday,
username: data.username,
fullName: `${data.firstName} ${data.lastName}`,
getThreeRandomPosts: function() {
// get three random posts from this.lastTenPosts
},
getDaysUntilBirthday: function() {
// use this.birthday to get the num days until birthday
},
greeting: function() {
const numDays = this.getDaysUntilBirthday()
return `Hello, this is ${this.fullName}'s data! It is ${numDays} until ${this.fullName}'s birthday!`
},
onFriendClick: function() {
window.open(`https://facebook.com/${this.username}`)
}
};
}</code></pre><p>Notice that we added <code>username</code> to our object, so that <code>onFriendClick</code> had access to it, so that we can open a new window with the Facebook page of that friend. Now we just need to write the HTML:</p><pre><code class="language-html">&lt;button id="Bob_Ross"&gt;
&lt;!-- A bunch of info associated with Bob Ross --&gt;
&lt;/button&gt; </code></pre><p>And now the JavaScript:</p><pre><code class="language-js">const bobRossObj = initializeFriend(data[0])
const bobRossDOMEl = document.getElementById('Bob_Ross')
bobRossDOMEl.addEventListener("onclick", bobRossObj.onFriendClick)</code></pre><p>In the code above, we create an object for Bob Ross. We get the DOM element associated with Bob Ross. And now we want to execute the <code>onFriendClick</code> method to open up Bob’s Facebook page. Should work as expected, right?</p><p>Nope!</p><p>What went wrong?</p><p>Notice that the function we chose for the onclick handler was <code>bobRossObj.onFriendClick</code> . See the problem yet? What if we re-wrote it like this:</p><pre><code class="language-js">bobRossDOMEl.addEventListener("onclick", function() {  window.open(`https://facebook.com/${this.username}`)})bobRossDOMEl.addEventListener("onclick", function() {
window.open(`https://facebook.com/${this.username}`)
const bobRossDOMEl = document.getElementById('Bob_Ross')
bobRossObj.onFriendClick = bobRossObj.onFriendClick.bind(bobRossObj)
bobRossDOMEl.addEventListener("onclick", bobRossObj.onFriendClick)</code></pre><p>Earlier, <code>this</code> was being set based on the default rule. With the use of <code>bind</code>, we explicitly set the value of <code>this</code> in <code>bobRossObj.onFriendClick</code> to be the object itself, or <code>bobRossObj</code>.</p><p>Up to this point, we have seen why <code>this</code> is helpful and why you might want to explicitly bind <code>this</code>. The last topic we will cover regarding <code>this</code> is arrow functions.</p><h3 id="arrow-functions">Arrow functions</h3><p>You might have noticed that arrow functions are the hip new thing. People seem to like them because they are concise and elegant. You might know that they are a little different from normal functions but maybe you don’t quite know what the difference is.</p><p>Perhaps the simplest way to describe how arrow functions are different is this:</p><p><strong>Whatever <code>this</code> refers to where an arrow function is declared, <code>this</code> refers to the same thing inside that arrow function.</strong></p><blockquote>Ok…that’s not helpful…I thought that was the behavior of a normal function?</blockquote><p>Let’s explain with our <code>initializeFriend</code> example. Let’s say we wanted to add a little helper function within <code>greeting</code> :</p><pre><code class="language-js">function initializeFriend(data) {
return {
lastTenPosts: data.lastTenPosts,
birthday: data.birthday,
username: data.username,
fullName: `${data.firstName} ${data.lastName}`,
getThreeRandomPosts: function() {
// get three random posts from this.lastTenPosts
},
getDaysUntilBirthday: function() {
// use this.birthday to get the num days until birthday
},
greeting: function() {
function getLastPost() {
return this.lastTenPosts[0]
}
const lastPost = getLastPost()
return `Hello, this is ${this.fullName}'s data!
${this.fullName}'s last post was ${lastPost}.`
},
onFriendClick: function() {
window.open(`https://facebook.com/${this.username}`)
}
};
}</code></pre><p>Would this work? If not, how could we change it to make it work?</p><p>No, it will not work. Because <code>getLastPost</code> is not called within the context of an object, <code>this</code> inside <code>getLastPost</code> falls back to the default rule which is the global object.</p><blockquote>You say that it isn’t called “within the context of an object”…don’t you know that it is called inside the object that is returned from <code>initializeFriend</code>? If that isn’t called “within the context of an object” then I don’t know what is.</blockquote><p>I know that “within the context of an object” is vague terminology. Perhaps a good way to determine if a function is called “within the context of an object” is to talk yourself through how the function is called and determine if an object is “attached” to the function.</p><p>Let’s talk through what happens when we execute <code>bobRossObj.onFriendClick()</code>. “Grab me the object <code>bobRossObj</code>, look for the attribute <code>onFriendClick</code> and <strong>call the function assigned to that attribute</strong>.”</p><p>Now let’s talk through what happens when we execute <code>getLastPost()</code>. “Grab me the function with the name <code>getLastPost</code> and call it.” Notice how there was no mention of an object?</p><p>Ok, here’s a tricky one to test your knowledge. Let’s say there is a function <code>functionCaller</code> where all it does is call functions:</p><pre><code class="language-js">functionCaller(fn) {
fn()
}</code></pre><p>What if we did this: <code>functionCaller(bobRossObj.onFriendClick)</code>? Would you say that <code>onFriendClick</code> was called “within the context of an object”? Would <code>this.username</code> be defined?</p><p>Let’s talk through it: “Grab the object <code>bobRossObj</code> and look for the attribute <code>onFriendClick</code>. Grab its value (which happens to be a function), pass it into <code>functionCaller</code>, and name it <code>fn</code>. Now, execute the function named <code>fn</code>.” Notice that the function gets “detached” from <code>bobRossObj</code> before it is called and is therefore not called “within the context of the object <code>bobRossObj</code>” which means that <code>this.username</code> will be undefined.</p><p>Arrow functions to the rescue:</p><pre><code class="language-js">function initializeFriend(data) {
return {
lastTenPosts: data.lastTenPosts,
birthday: data.birthday,
username: data.username,
fullName: `${data.firstName} ${data.lastName}`,
getThreeRandomPosts: function() {
// get three random posts from this.lastTenPosts
},
getDaysUntilBirthday: function() {
// use this.birthday to get the num days until birthday
},
greeting: function() {
const getLastPost = () =&gt; {
return this.lastTenPosts[0]
}
const lastPost = getLastPost()
return `Hello, this is ${this.fullName}'s data!
${this.fullName}'s last post was ${lastPost}.`
},
onFriendClick: function() {
window.open(`https://facebook.com/${this.username}`)
}
};
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
