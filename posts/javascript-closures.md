---
card: "/images/default.jpg"
tags: [JavaScript]
description: Fully understanding closures may seem like a right of passage
author: "Milad E. Fahmy"
title: "Why You Should Know JavaScript Closures"
created: "2021-08-15T19:29:23+02:00"
modified: "2021-08-15T19:29:23+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-closure-with-example tag-beginner tag-closure ">
<header class="post-full-header">
<h1 class="post-full-title">Why You Should Know JavaScript Closures</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/06/Why-JS-Closures-Matter.png 300w,
/news/content/images/size/w600/2020/06/Why-JS-Closures-Matter.png 600w,
/news/content/images/size/w1000/2020/06/Why-JS-Closures-Matter.png 1000w,
/news/content/images/size/w2000/2020/06/Why-JS-Closures-Matter.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/06/Why-JS-Closures-Matter.png" alt="Why You Should Know JavaScript Closures">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Fully understanding closures may seem like a right of passage to becoming a JavaScript developer. </p>
<p>There is a reason why it can be difficult to make sense of closures—because they are often taught <em>backwards</em>. You may have been taught what a closures is, but you might not understand how they are useful to the average developer or within your own code.</p>
<p><strong>So why do closures matter in our day-to-day JavaScript code?</strong></p>
<p>Instead of seeing closures as a topic to be memorized for some sort of pop quiz, let's see what series of steps can lead us to seeing a closure in the first place. Once we see what they are, we will uncover why closures are worthwhile for you to know and take advantage of in your JavaScript code.</p>
<p><em>Want to watch this lesson instead?</em> This tutorial is part of the 2020 JS Bootcamp, a 4+ hour course that shows you how to be a JavaScript expert through tons of practical, no-nonsense lessons. <strong><a href="https://courses.reedbarger.com/p/2020-js-bootcamp">Get instant access to the JS Bootcamp here</a>.</strong></p>
<h2 id="seeing-a-closure-in-the-wild">Seeing a closure in the wild ?</h2>
<p>Let's say we are making an app clone of the blogging site Medium, and we want each user to be able to like different posts.</p>
<p>Whenever a user clicks on the like button, its value will be incremented by one each time.</p>
<p>Think of it like the Medium clap button:</p>
<p>The function that will handle increasing the count by 1 each time is called <code>handleLikePost</code> and we are keeping track of the number of likes with a variable named <code>likeCount</code>:</p><pre><code class="language-js">// global scope
let likeCount = 0;
function handleLikePost() {
// function scope
likeCount = likeCount + 1;
}
handleLikePost();
console.log("like count:", likeCount); // like count: 1
</code></pre>
<p>Whenever a user likes a post, we call <code>handleLikePost</code> and it increments our <code>likeCount</code> by 1.</p>
<p>And this works because we know that functions can access variables outside of themselves.</p>
<p>In other words, <strong>functions can access any variables defined in any parent scope</strong>.</p>
<p>There's a problem with this code, however. Since <code>likeCount</code> is in the global scope, and not in any function, <code>likeCount</code> is a global variable. Global variables can be used (and changed) by any other bit of code or function in our app.</p>
<p>For example, what if after our function, we mistakenly set our <code>likeCount</code> to 0?</p><pre><code class="language-js">let likeCount = 0;
function handleLikePost() {
likeCount = likeCount + 1;
}
handleLikePost();
likeCount = 0;
console.log("like count:", likeCount); // like count: 0
</code></pre>
<p>Naturally, <code>likeCount</code> can never be incremented from 0.</p>
<p>When only one function needs a given piece of data, it just needs to exist locally, that is, within that function.</p>
<p>Now let's bring <code>likeCount</code> within our function:</p><pre><code class="language-jsx">function handleLikePost() {
// likeCount moved from global scope to function scope
let likeCount = 0;
likeCount = likeCount + 1;
}
</code></pre>
<p>Note that there's a shorter way to write the line where we increment <code>likeCount</code>. Instead of saying <code>likeCount</code> is equal to previous value of <code>likeCount</code> and add one like this, we can just use the += operator like so:</p><pre><code class="language-jsx">function handleLikePost() {
let likeCount = 0;
likeCount += 1;
}
</code></pre>
<p>And for it to work as before and get like count's value, we also need to bring our <code>console.log</code> into the function as well.</p><pre><code class="language-jsx">function handleLikePost() {
let likeCount = 0;
likeCount += 1;
console.log("like count:", likeCount);
}
handleLikePost(); // like count: 1
</code></pre>
<p>And it still works properly as before.</p>
<p>So now users should be able to like a post as many times as they want, so let's call <code>handleLikePost</code> a few more times:</p><pre><code class="language-jsx">handleLikePost(); // like count: 1
handleLikePost(); // like count: 1
handleLikePost(); // like count: 1
</code></pre>
<p>When we run this code, however, there's a problem.</p>
<p>We would expect to see the <code>likeCount</code> keep increasing, but we just see 1 each time. Why is that?</p>
<p>Take a second, look at our code and try to explain why our <code>likeCount</code> is no longer being incremented.</p>
<p>Let's look at our <code>handleLikePost</code> function and how it's working:</p><pre><code class="language-js">function handleLikePost() {
let likeCount = 0;
likeCount += 1;
console.log("like count:", likeCount);
}
</code></pre>
<p>Every time we use it, we are recreating this <code>likeCount</code> variable, which is given an initial value of 0.</p>
<p>No wonder we can't keep track of the count between function calls! It keeps being set to 0 each time, then it's incremented by 1, after which the function is finished running.</p>
<p>So we're stuck here. Our variable needs to live inside of the <code>handleLikePost</code> function, but we can't preserve the count.</p>
<p>We need something that allows us to preserve or remember the <code>likeCount</code> value between function calls.</p>
<p>What if we tried something that may look a little strange at first—what if we tried putting another function in our function:</p><pre><code class="language-js">function handleLikePost() {
let likeCount = 0;
likeCount += 1;
function() {
}
}
handleLikePost();
</code></pre>
<p>Here we're going to name this function <code>addLike</code>. The reason? Because it will be responsible for incrementing the <code>likeCount</code> variable now.</p>
<p>And note that this inner function doesn't have to have a name. It can be an anonymous function. In most cases, it is. We're just giving it a name so we can more easily talk about it and what it does.</p>
<p><code>addLike</code> will now be responsible for increasing our <code>likeCount</code>, so we'll move the line where we increment by 1 into our inner function.</p><pre><code class="language-js">function handleLikePost() {
let likeCount = 0;
function addLike() {
likeCount += 1;
}
}
</code></pre>
<p>What if we were to call this <code>addLike</code> function in <code>handleLikePost</code>?</p>
<p>All that would happen is that <code>addLike</code> would increment our <code>likeCount</code>, but still the <code>likeCount</code> variable would be destroyed. So again, we lose our value and the result is 0.</p>
<p>But instead of calling <code>addLike</code> within its enclosing function, what if we called it outside of the function? This seems even stranger. And how would we do that?</p>
<p>We know at this point that functions return values. For example, we could return our <code>likeCount</code> value at the end of <code>handleLikePost</code> to pass it to other parts of of our program:</p><pre><code class="language-js">function handleLikePost() {
let likeCount = 0;
function addLike() {
likeCount += 1;
}
addLike();
return likeCount;
}
</code></pre>
<p>But instead of doing that, let's return <code>likeCount</code> within <code>addLike</code> and then return the <code>addLike</code> function itself:</p><pre><code class="language-js">function handleLikePost() {
let likeCount = 0;
return function addLike() {
likeCount += 1;
return likeCount;
};
// addLike();
}
handleLikePost();
</code></pre>
<p>Now this may look bizarre, but this is allowed in JS. We can use functions like any other value in JS. That means a function can be returned from another function. By returning the inner function, we can call it from outside of its enclosing function.</p>
<p>But how would we do that? Think about this for a minute and see if you can figure it out...</p>
<p>First, to better see what's happening, let's <code>console.log(handleLikePost)</code> when we call it and see what we get:</p><pre><code class="language-js">function handleLikePost() {
let likeCount = 0;
return function addLike() {
likeCount += 1;
return likeCount;
};
}
console.log(handleLikePost()); // ƒ addLike()
</code></pre>
<p>Unsurprisingly, we get the <code>addLike</code> function logged. Why? Because we're returning it, after all.</p>
<p>To call it, couldn't we just put it in another variable? As we just said, functions can be used like any other value in JS. If we can return it from a function, we can put it in a variable too. So let's put it in a new variable called <code>like</code>:</p><pre><code class="language-js">function handleLikePost() {
let likeCount = 0;
return function addLike() {
likeCount += 1;
return likeCount;
};
}
const like = handleLikePost();
</code></pre>
<p>And finally, let's call <code>like</code>. We'll do it a few times and <code>console.log</code> each result:</p><pre><code class="language-js">function handleLikePost() {
let likeCount = 0;
return function addLike() {
likeCount += 1;
return likeCount;
};
}
const like = handleLikePost();
console.log(like()); // 1
console.log(like()); // 2
console.log(like()); // 3
</code></pre>
<p>Our <code>likeCount</code> is finally preserved! Every time we call <code>like</code>, the <code>likeCount</code> is incremented from its previous value.</p>
<p>So what in the world happened here? Well, we figured out how to call the <code>addLike</code> function from outside the scope in which it was declared. We did that by returning the inner function from the outer one and storing a reference to it, named <code>like</code>, to call it.</p>
<h2 id="how-a-closure-works-line-by-line">How a closure works, line-by-line ?</h2>
<p>So that was our implementation, of course, but how did we preserve the value of <code>likeCount</code> between function calls?</p><pre><code class="language-js">function handleLikePost() {
let likeCount = 0;
return function addLike() {
likeCount += 1;
return likeCount;
};
}
const like = handleLikePost();
console.log(like()); // 1
</code></pre>
<ol>
<li>The <code>handleLikePost</code> outer function is executed, creating an instance of the inner function <code>addLike</code>; that function <em>closes</em> over the variable <code>likeCount</code>, which is one scope above.</li>
<li>We called the <code>addLike</code> function from outside the scope in which it was declared. We did that by returning the inner function from the outer one and storing a reference to it, named <code>like</code>, to call it.</li>
<li>When the <code>like</code> function finishes running, normally we would expect all of its variables to be garbage collected (removed from memory, which is an automatic process that the JS compiler does). We'd expect each <code>likeCount</code> to go away when the function is done, but they don't.</li>
</ol>
<p>What is that reason? <em>Closure</em>.</p>
<p><strong>Since the inner function instances are still alive (assigned to <code>like</code>), the closure is still preserving the <code>countLike</code> variables.</strong></p>
<p>You would think that having a function written in another function, would just be like a function written in the global scope. But it's not.</p>
<p><em>This is why closure makes functions so powerful</em>, because it is a special property that isn't present in anything else in the language.</p>
<h2 id="the-lifetime-of-a-variable">The lifetime of a variable</h2>
<p>To better appreciate closures, we have to understand how JavaScript treats variables that are created. You might have wondered what happens to variables when you close your page or go to another page within an app. How long do variables live?</p>
<p>However, local variables have short lives. They are created when the function is invoked, and deleted when the function is finished.</p>
<p>So before, where <code>likeCount</code> was just a local variable, when the function was run. The likeCount variable was created at the beginning of the function and then destroyed once it finished executing.</p>
<h2 id="closures-are-not-snapshots-they-keep-local-variables-alive">Closures are not snapshots - they keep local variables alive</h2>
<p>It's sometimes stated that JavaScript closures are similar to snapshots, a picture of our program at certain point in time. This is a misconception that we can dispel by adding another feature to our like button functionality.</p>
<p>Let's say that on some rare occasions, we want to allow users to 'double like' a post and increment the <code>likeCount</code> by 2 at a time instead of 1.</p>
<p>How would would we add this feature?</p>
<p>Another way to pass values to a function is of course through arguments, which operate just like local variables.</p>
<p>Let's pass in an argument called step to the function, which will allow us to provide a dynamic, changeable value to increment our count by instead of the hard-coded value 1.</p><pre><code class="language-js">function handleLikePost(step) {
let likeCount = 0;
return function addLike() {
likeCount += step;
// likeCount += 1;
return likeCount;
};
}
</code></pre>
<p>Next, let's try making a special function that will allow us to double like our posts, doubleLike. We'll pass in 2 as our <code>step</code> value to make it and then try calling both of our functions, <code>like</code> and <code>doubleLike</code>:</p><pre><code class="language-js">function handleLikePost(step) {
let likeCount = 0;
return function addLike() {
likeCount += step;
return likeCount;
};
}
const like = handleLikePost(1);
const doubleLike = handleLikePost(2);
like(); // 1
like(); // 2
doubleLike(); // 2 (the count is still being preserved!)
doubleLike(); // 4
</code></pre>
<p>We see the <code>likeCount</code> is also being preserved for <code>doubleLike</code>.</p>
<p>What's happening here?</p>
<p>Each instance of the inner <code>addLike</code> function closes over both the <code>likeCount</code> and <code>step</code> variables from its outer <code>handleLikePost</code> function's scope. <code>step</code> remains the same over time, but the count is updated on each invocation of that inner function. Since closure is over the variables and not just snapshots of the values, these updates are preserved between function calls.</p>
<p>So what does this code show to us—the fact that we can pass in dynamic values to change the result of our function? That they are still alive! Closures keep local variables alive from functions that should have destroyed them a long time ago.</p>
<p>In other words, they are not static and unchanging, like a snapshot of the closed-over variables value at one point in time—closures preserve the variables and provide an active link to them. As a result, we can use closures can observe or make updates to these variables over time.</p>
<h2 id="what-is-a-closure-exactly">What is a closure, exactly?</h2>
<p>Now that you see how a closure is useful, there are two criteria for something to be a closure, both of which you've seen here:</p>
<ol>
<li>Closures are a property of JavaScript functions, and only functions. No other data type has them.</li>
<li>To observe a closure, you must execute a function in a different scope than where that function was originally defined.</li>
</ol>
<h2 id="why-should-you-know-closures">Why should you know closures? </h2>
<p>Let's answer the original question we set out to answer. Based off of what we've seen, pause and take a stab at answering this question. Why should we care about closures as JS developers?</p>
<p>Closures matter for you and your code because they allow you to 'remember' values, which is a very powerful and unique feature in the language which only functions possess.</p>
<p>We saw it right here in this example. After all, what use is a like count variable that doesn't remember likes? You'll encounter this often in your JS career. You need to hold onto some value somehow and likely keep it separate from other values. What do you use? A function. Why? To keep track of data over time with a closure.</p>
<p>And with that, you're already a step ahead other developers. </p>
<h2 id="enjoythispostjointhereactbootcamp">Enjoy this post? Join The React Bootcamp</h2>
<p><strong><a href="http://bit.ly/join-react-bootcamp">The React Bootcamp</a></strong> takes everything you should know about learning React and bundles it into one comprehensive package, including videos, cheatsheets, plus special bonuses.</p>
<p>Gain the insider information hundreds of developers have already used to master React, find their dream jobs, and take control of their future:</p>
<p><a href="http://bit.ly/join-react-bootcamp"><img src="https://reedbarger.nyc3.digitaloceanspaces.com/react-bootcamp-banner.png" alt="The React Bootcamp"></a><br>
<em>Click here to be notified when it opens</em>
</p>
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
