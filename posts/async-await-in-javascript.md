---
card: "/images/default.jpg"
tags: [JavaScript]
description: In this tutorial, we are going to learn how to use Async/Awai
author: "Milad E. Fahmy"
title: "How to Use Async/Await in JavaScript with Example JS Code"
created: "2021-08-15T19:27:24+02:00"
modified: "2021-08-15T19:27:24+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript ">
<header class="post-full-header">
<h1 class="post-full-title">How to Use Async/Await in JavaScript with Example JS Code</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2021/01/Pink-Cute-Chic-Vintage-90s-Virtual-Trivia-Quiz-Presentations--12-.png 300w,
/news/content/images/size/w600/2021/01/Pink-Cute-Chic-Vintage-90s-Virtual-Trivia-Quiz-Presentations--12-.png 600w,
/news/content/images/size/w1000/2021/01/Pink-Cute-Chic-Vintage-90s-Virtual-Trivia-Quiz-Presentations--12-.png 1000w,
/news/content/images/size/w2000/2021/01/Pink-Cute-Chic-Vintage-90s-Virtual-Trivia-Quiz-Presentations--12-.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2021/01/Pink-Cute-Chic-Vintage-90s-Virtual-Trivia-Quiz-Presentations--12-.png" alt="How to Use Async/Await in JavaScript with Example JS Code">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>In this tutorial, we are going to learn how to use Async/Await in JavaScript.</p>
<p>But before we get there, we should understand a few topics like:</p>
<ol>
<li>Event loops</li>
<li>Callbacks</li>
<li>Promises</li>
</ol>
<h2 id="what-are-event-loops-in-javascript">What are Event Loops in JavaScript?</h2>
<p>Event loops are one of the most important aspects of JavaScript.</p>
<p>JavaScript is a single-threaded programming language which means that only one task can run at a time. It has a call stack and all the code is executed inside this call stack. Let’s understand with an example.</p>
<p>In the above example, we can see that we are logging two values in the console.</p>
<p>When the <code>First()</code> finishes its execution, it will be popped out of the call stack and the event loop will go down to the next line. The next line will be stored in the call stack and will be flagged for execution.</p>
<p>Our console will print the following result:</p>
<p>To understand things better, let’s take a look at another example.</p><pre><code class="language-JavaScript">console.log('First!');
setTimeout(function second(){
console.log('Timed Out!')
}, 0000)
console.log('Final!');</code></pre>
<p>As usual, our code will move into the call stack and the event loop will loop through line by line.</p>
<p>We will get “First!” in the console and it will be moved out of the call stack.</p>
<p>Now, the event loop will move to the second line and push it into the call stack. It will encounter the <code>setTimeout</code> function, which is a Macro task, and it will be executed in the next event Loop. </p>
<p>And now, you might be wondering what a Macro task is. Well, it's a task that runs after all of the tasks in the Event Loop, or you might say, in the other Event Loop. The <code>SetTimeout</code> and <code>SetInterval</code> functions can be the example of a Macro task which runs after all of the other tasks are completed.</p>
<p>Finally, the final line of code will be executed. We will get First in our console, then Final, and then Timed Out.</p>
<h2 id="how-do-callback-functions-work-in-javascript">How Do Callback Functions Work in JavaScript?</h2>
<p>Callback functions are those functions that have been passed to another function as an argument.</p>
<p>Let’s take a look at an example.</p><pre><code class="language-JavaScript">const movies = [
{ title: `A New Hope`, body:`After Princess Leia, the leader of the Rebel Alliance, is held hostage by Darth Vader, Luke and Han Solo must free her and destroy the powerful weapon created by the Galactic Empire.`},
{ title: `The Empire Strikes Back`, body: `Darth Vader is adamant about turning Luke Skywalker to the dark side. Master Yoda trains Luke to become a Jedi Knight while his friends try to fend off the Imperial fleet.` }]
function getMovies(){
setTimeout(() =&gt; {
movies.forEach((movie, index) =&gt; {
console.log(movie.title)
})
}, 1000);
}
getMovies();</code></pre>
<p>We have an array that contains the list of Star Wars movies and a function <code>getMovies()</code> to fetch the list.</p>
<p>Let’s create another function called <code>createMovie()</code>. It will be used to add a new movie.</p><pre><code class="language-JavaScript">const movies = [
{ title: `A New Hope`, body:`After Princess Leia, the leader of the Rebel Alliance, is held hostage by Darth Vader, Luke and Han Solo must free her and destroy the powerful weapon created by the Galactic Empire.`},
{ title: `The Empire Strikes Back`, body: `Darth Vader is adamant about turning Luke Skywalker to the dark side. Master Yoda trains Luke to become a Jedi Knight while his friends try to fend off the Imperial fleet.` }
]
function getMovies(){
setTimeout(() =&gt; {
movies.forEach((movie, index) =&gt; {
console.log(movie.title)
})
}, 1000);
}
function createMovies(movie){
setTimeout(() =&gt; {
movies.push(movie)
}, 2000);
}
getMovies();
createMovies({ title: `Return of the Jedi`, body:`Luke Skywalker attempts to bring his father back to the light side of the Force. At the same time, the rebels hatch a plan to destroy the second Death Star.` });</code></pre>
<p>But the problem here is we are not getting the third movie on the console. That is because <code>createMovie()</code> takes longer than <code>getMovies()</code>. The <code>createMovie()</code> function took two seconds but <code>getMovies()</code> took only one second.</p>
<p>In other words, <code>getMovies()</code> runs before <code>createMovies()</code> and the list of Movies is already displayed.</p>
<p>To solve this, we can use Callbacks<em><em>.</em></em></p>
<p>In <code>createPost()</code>, pass a function callback and call the function right after the new movie is pushed (instead of waiting two seconds).</p><pre><code class="language-JavaScript">const movies = [
{ title: `A New Hope`, body:`After Princess Leia, the leader of the Rebel Alliance, is held hostage by Darth Vader, Luke and Han Solo must free her and destroy the powerful weapon created by the Galactic Empire.`},
{ title: `The Empire Strikes Back`, body: `Darth Vader is adamant about turning Luke Skywalker to the dark side. Master Yoda trains Luke to become a Jedi Knight while his friends try to fend off the Imperial fleet.` }
]
function getMovies(){
setTimeout(() =&gt; {
movies.forEach((movie, index) =&gt; {
console.log(movie.title)
})
}, 1000);
}
function createMovies(movie, callback){
setTimeout(() =&gt; {
movies.push(movie);
callback();
}, 2000);
}
createMovies({ title: `Return of the Jedi`,
body:`Luke Skywalker attempts to bring his father back to the light side of the Force.
At the same time, the rebels hatch a plan to destroy the second Death Star.` }, getMovies);</code></pre>
<p>Now we get the updated list of movies.</p>
<h2 id="how-do-promises-work-in-javascript">How Do Promises Work in JavaScript?</h2>
<p>A promise is a value that may produce a value in the future. That value can either be resolved or unresolved (in some error cases, like a network failure). It works like a real-life promise.</p>
<p>It has three states: fulfilled, rejected, or pending.</p>
<ul>
<li><strong><strong>Fulfilled:</strong></strong> <code>onFulfilled()</code> will be called (for example, <code>resolve()</code> was called).</li>
<li><strong><strong>Rejected:</strong></strong> <code>onRejected()</code> will be called (for example, &nbsp;<code>reject()</code> was called).</li>
<li><strong><strong>Pending:</strong></strong> not yet fulfilled or rejected.</li>
</ul>
<p>Let’s take a look at an example.</p>
<p>Promise takes two parameters, resolve and reject. When something goes wrong, reject is called, or else resolve is called.</p><pre><code class="language-JavaScript">const movies = [
{ title: `A New Hope`, body:`After Princess Leia, the leader of the Rebel Alliance, is held hostage by Darth Vader, Luke and Han Solo must free her and destroy the powerful weapon created by the Galactic Empire.`},
{ title: `The Empire Strikes Back`, body: `Darth Vader is adamant about turning Luke Skywalker to the dark side. Master Yoda trains Luke to become a Jedi Knight while his friends try to fend off the Imperial fleet.` }
]
function getMovies(){
setTimeout(() =&gt; {
movies.forEach((movie, index) =&gt; {
console.log(movie.title)
})
}, 1000);
}
function createMovies(movie){
return new Promise((resolve, reject) =&gt; {
setTimeout(() =&gt; {
movies.push(movie);
const error = false;
if(!error){
resolve();
}
else{
reject('Error: Something went wrong!')
}
}, 2000);
})
}
createMovies({ title: `Return of the Jedi`, body:`Luke Skywalker attempts to bring his father back to the light side of the Force. At the same time, the rebels hatch a plan to destroy the second Death Star.`})
.then(getMovies);</code></pre>
<p>If we get an error, it will be something like ‘Error: Something went wrong!’, and if not, the promise will resolve.</p>
<p>Once the promise is resolved, it calls for the <code>.then()</code> keyword and <code>getMovies()</code>.</p>
<h2 id="finally-how-does-async-await-work-in-javascript">Finally, How Does Async/Await Work in JavaScript</h2>
<p>Async means asynchronous. It allows a program to run a function without freezing the entire program. This is done using the Async/Await keyword. </p>
<p>Async/Await makes it easier to write promises. The keyword ‘async’ before a function makes the function return a promise, always. And the keyword await is used inside async functions, which makes the program wait until the Promise resolves.</p><pre><code class="language-JavaScript">async function example() {
let promise = new Promise((resolve, reject) =&gt; {
setTimeout(() =&gt; resolve("done!"), 2000)
});
let result = await promise; // wait until the promise resolves (*)
alert(result); // "done!"
}
example();</code></pre>
<p>The function execution “pauses” at the <code>(*)</code> line and resumes when the promise is fulfilled, with <code>result</code> becoming its result. So the code above shows “done!” in two seconds.</p>
<p>Let's take a look at a practice example.</p><pre><code class="language-JavaScript">const movies = [
{ title: `A New Hope`, body:`After Princess Leia, the leader of the Rebel Alliance, is held hostage by Darth Vader, Luke and Han Solo must free her and destroy the powerful weapon created by the Galactic Empire.`},
{ title: `The Empire Strikes Back`, body: `Darth Vader is adamant about turning Luke Skywalker to the dark side. Master Yoda trains Luke to become a Jedi Knight while his friends try to fend off the Imperial fleet.` }
]
function getMovies(){
setTimeout(() =&gt; {
movies.forEach((movie, index) =&gt; {
console.log(movie.title)
})
}, 1000);
}
function createMovies(movie){
return new Promise((resolve, reject) =&gt; {
setTimeout(() =&gt; {
movies.push(movie);
const error = false;
if(!error){
resolve();
}
else{
reject('Error: Something went wrong!')
}
}, 2000);
})
}
async function init(){
await createMovies({ title: `Return of the Jedi`, body:`Luke Skywalker attempts to bring his father back to the light side of the Force. At the same time, the rebels hatch a plan to destroy the second Death Star.`});
getMovies(); (*)
}
init();</code></pre>
<p>In the above example, <code>getMovies()</code> at the (*) line is waiting for <code>createMovies()</code> to be executed in the async function.</p>
<p>In other words, <code>createMovies()</code> is async, so <code>getMovies()</code> will only run after <code>createMovies()</code> is done.</p>
<p>Now you know all the basics of Event Loops, Callbacks, Promises and Async/Await. These features were introduced in ECMAScript 2017, and they've made reading and writing JS code much easier and more effective. </p>
<blockquote><em><em>That’s all folks! Happy learning and experimenting,</em></em></blockquote>
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
