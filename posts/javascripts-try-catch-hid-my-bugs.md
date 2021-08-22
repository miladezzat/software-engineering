---
card: "/images/default.jpg"
tags: [JavaScript]
description: Let me start by making one thing clear - JavaScript is a grea
author: "Milad E. Fahmy"
title: "JavaScript's try-catch hid my bugs!"
created: "2021-08-15T19:32:16+02:00"
modified: "2021-08-15T19:32:16+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-functional-programming tag-programming tag-code-quality ">
<header class="post-full-header">
<h1 class="post-full-title">JavaScript's try-catch hid my bugs!</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2019/11/thomas-smith-doI0mceCxfk-unsplash.jpg 300w,
/news/content/images/size/w600/2019/11/thomas-smith-doI0mceCxfk-unsplash.jpg 600w,
/news/content/images/size/w1000/2019/11/thomas-smith-doI0mceCxfk-unsplash.jpg 1000w,
/news/content/images/size/w2000/2019/11/thomas-smith-doI0mceCxfk-unsplash.jpg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2019/11/thomas-smith-doI0mceCxfk-unsplash.jpg" alt="JavaScript's try-catch hid my bugs!">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<blockquote>(Banner photo by <a href="https://unsplash.com/@thomastasy?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Thomas Smith</a> on <a href="https://unsplash.com/s/photos/bugs?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a>)</blockquote>
<p>Let me start by making one thing clear - JavaScript is a great language, and not to blame. I was totally to blame - my mental model of error handling was incomplete, and that caused the trouble. Hence, this post.</p>
<p>But first, let me give you some context. &nbsp;I was writing a bunch of code involving third party APIs (<a href="https://stripe.com/docs/billing/quickstart">Stripe's recurring billing and subscription APIs</a>, to be specific), and had written a wrapper class and some server route-handlers to respond to requests from the front-end web app. &nbsp;The entire application is React +TypeScript + Node, with a <a href="https://koajs.com/">Koa server</a>.</p>
<p>As part of this, I was trying to handle the following errors:</p>
<ol>
<li>Errors thrown by Stripe's API</li>
<li>Errors thrown by my wrapper class, especially when fetching user data from the database</li>
<li>Errors in route-handlers that arise from a combination of the above.</li>
</ol>
<p>During development, my most common errors were incomplete data in the server requests and incorrect data passed to Stripe.</p>
<p>To help you visualize the flow of data, let me give you some background on the server-side code. Typically this is what the function call chain looked like:</p>
<p><em>Route-Handler -&gt; Stripe Wrapper -&gt; Stripe API</em></p>
<p>The first function being called would be in the Route-Handler, then in the Stripe Wrapper class, inside which the Stripe API method would be called. So the call stack has Route-Handler at the bottom (first called function) and the Stripe API method on the top (last called function).</p>
<p>The problem was that I did not understand where to put my error handling. If I did not put an error handler in the server code, then node would crash (literally, exit execution!) and the front end would receive an error HTTP response (typically a HTTP<a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/500"> 5xx err0r</a>). So I put a few <code>try-catch</code> handlers inside the various methods being called, and added logging statements inside the <code>catch</code> block. &nbsp;That way I could debug the error by tracking the logs. </p>
<p>An example of the calling logic:</p>
console.log('this is the first function')
if(!arg) throw new Error('no arg!')
// else
saveToDb()
}
function stripeWrapper(){
console.log('this is the second function, about to call the first function')
try{
stripeAPI()
} catch(err) {
//         console.log(' this error will not bubble up to the first function that triggered the function calls!')
}
}
function routeHandler(){
console.log('this is the third  function, about to call the second function')
stripeWrapper()
}
function callAll(){
try{
routeHandler()
return 'done'
} catch (err){
console.log('error in callAll():', err)
return ' not done '
}
}
callAll()</code></pre>
<figcaption>I personally use <a href="repl.it">repl.it </a>for all my rapid script executions - check it out.</figcaption>
</figure>
<p>The problems? &nbsp;</p>
<ol>
<li> If I didn't log the error, I <em>lost</em> the error! In the above snippet, note that even though I've called <code>first()</code> without the required arguments, the error defined in the definition of <code>first</code> did not get thrown! Also, there is no <code>saveToDb()</code> method defined... and yet this was not caught! If you run this code above, you will see it returns 'done' - and you've got no idea that your database wasn't updated and something had gone wrong! ☠️☠️☠️</li>
<li>My console had way too many logs, repeating the same error. It also meant that in production, there was excessive logging... ?</li>
<li>The code looked ugly. Almost as ugly as my console.</li>
<li>Others who worked with code found it confusing and a debugging nightmare. ?</li>
</ol>
<p>None of these are good outcomes, and all are avoidable.</p>
<h2 id="theconcepts">The concepts</h2>
<p>So, let's get some basics out of the way. &nbsp;I'm sure you know them but some people may not, and let's not leave them behind! &nbsp;</p>
<p>Some basic terminology:</p>
<p><strong>Error</strong> - also known as an 'exception', is when something goes wrong in the node code, and the program exits immediately. &nbsp;Errors, if not handled, will cause the program to come to a screeching halt, and ugly messages are spewed into the console, with a long and generally hideous error stack trace message.</p>
<p><strong>Throw</strong><em> - &nbsp;</em>the <code>throw</code> operator is how the language handles an error. By using <code>throw</code> you generate an exception using the value you put after the operator. Note that the code after <code>throw</code> does not get executed - in that sense it is like a <code>return</code> statement.</p>
<p><strong>Error</strong> - &nbsp;there is a JavaScript <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error">object</a> called <code>Error</code>. An error gets 'thrown' in order to help the programmer know something needs to be handled. &nbsp;Think of it as a little ticking bomb ? that gets thrown from one function to another inside a chain of function calls. Technically, you can throw any data, including JavaScript primitives as an error, but it's generally a good idea to throw an <code>Error</code> object. </p>
<p>You typically construct the <code>Error</code> object by passing in a message string like so: &nbsp;<code>new Error('This is an error')</code>. &nbsp;But simply creating a new <code>Error</code>? object is unhelpful as that's only half the job. You've got to <code>throw</code> it so it can be caught. That's how it becomes useful. &nbsp;</p>
<p>Languages generally come with a<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors"> standard set of errors,</a> but you can create a custom error message with the <code>new Error('this is my error message')</code> constructor, and your error message should help you work out what's going on. &nbsp;More on <a href="https://nodejs.org/api/errors.html">Node errors.</a></p>
<p><strong>Catch</strong><em> - </em>this is what you do when someone throws something at you, right? You'd probably do it reflexively even if someone threw you one of these... ?! &nbsp;</p>
<p>The <code>catch</code> statement in JavaScript lets you handle an error ? that gets thrown. If you don't catch the error, then the error 'bubbles up' (or down, depending on how you view the call stack) until it reaches the first called function and there it will crash the program. </p>
<p>In my example an error thrown by the Stripe API will bubble up all the way to my Route-Handler function, unless I catch it somewhere along the way and deal with it. &nbsp;If I don't handle the error, Node will throw an <code>uncaughtException</code> error and then terminate the program.</p>
<p>Let's return to my example:</p>
<p><strong>Call stack<em> </em></strong></p>
<p><em>Route-Handler -&gt; Stripe Wrapper -&gt; Stripe API</em></p>
<p><strong>Error path</strong></p>
<p><em>Stripe API (</em>?<em> thrown here) &nbsp;-&gt; &nbsp;API Wrapper (</em>� �<em>not caught) &nbsp;-&gt; </em> &nbsp;<em>Route-Handler (</em>� �still <em>not caught) &nbsp;-&gt; &nbsp;ccrraashh </em>???</p>
<p>We want to avoid app crashes as it can cause your data to corrupt, your state to be inconsistent, and your user to think your app sucks. So handling errors thoughtfully requires many levels of analysis.</p>
<p>There are some detailed guides to error handling in JavaScript and one of my favourites is <a href="http://javascript.info/try-catch">here</a>, but I will summarize my key leanings for you here.</p>
<h2 id="trycatchstatement">Try-Catch statement</h2>
<p>Use these to gracefully handle errors, but be careful about <em>where</em> and <em>when</em>. &nbsp;When errors are caught and not handled properly they are lost. &nbsp;That 'bubbling up' process happens only up until the error encounters a <code>catch</code> statement. If there is a <code>catch</code> statement in the call chain that intercepts the error then the error won't crash the app, but not handling the error will hide it! &nbsp;Then it gets passed as an argument to <code>catch</code> and it requires you to handle it there. </p><pre><code class="language-javascript">try{
// code logic
} catch (error) {
// handle the error appropriately
}
</code></pre>
<p>So it's very important to catch <em>and</em> handle the error at a point where it makes the most logical sense for you when you have to debug it. &nbsp;It's tempting to think that you must catch it at the very first place it comes up (the last function called that sits right on the top of the call stack), but that isn't true! &nbsp;</p>
<p><em>Route-Handler -&gt; Stripe Wrapper (don't catch here!) -&gt; Stripe API </em></p>
<p>If I put my <code>try-catch</code> in the Stripe Wrapper which directly invokes Stripe's API, then I don't have information on <em>where</em> my Stripe Wrapper function was called. &nbsp; Maybe it was the handler, maybe it was another method inside my wrapper, maybe it was in another file altogether! &nbsp;In this simple example it's obviously called by Route-Handler, but in a real world app, it could be called in multiple places. </p>
<p>Instead, it makes sense for me to put the <code>try-catch</code> in the Route-Handler, which is the very first place where the function calls begin that resulted in the error. That way you can trace the call stack (also called unwinding the call stack) and drill down into the error. &nbsp;If I send bad data to Stripe it will throw an error, and that error will pass through my code until I catch it.</p>
<p>But when I catch it I need to handle it properly, or I could inadvertently conceal this error. Handling errors usually means deciding whether I need my front end user to know something has gone wrong (their payment didn't work, for example), or is it just an internal server error (for example, Stripe could not find the product ID I passed) that I need to handle gracefully without tripping up my front end users and crashing the Node code. If I added things to the database that are not correct, then I should clean up those false writes now. &nbsp;</p>
<p>When handling the error, it is a good idea to log it so I can monitor the app for bugs and failures in production and debug efficiently. &nbsp;So at the very, very least, handling would include logging the error in the <code>catch</code> statement. But...</p><pre><code class="language-JavaScript"> function stripeAPI(arg){
console.log('this is the first function')
if(!arg) throw new Error('no arg!')
// else
saveToDb()
}
function stripeWrapper(){
console.log('this is the second function, about to call the first function')
try {
stripeAPI()
} catch(err) {
console.log('Oops!  err will not bubble up to the first function that triggered the function calls!')
}
}
function routeHandler(){
console.log('this is the third  function, about to call the second function')
stripeWrapper()
}
function callAll(){
try {
routeHandler()
return 'done'
} catch (err){
console.log('error in callAll():', err)
return ' not done '
}
}
callAll()</code></pre>
<p>...as you can see above, if I catch it and log it in the middle level (my Stripe Wrapper class), it won't reach <code>routeHandler</code> or <code>callAll</code>, and my app will not know something went wrong. <code>callAll</code> still returns <code>done</code> and the only evidence something went wrong was in the log statement: <code>'Oops! &nbsp;err will not bubble up to to first function that triggered the function calls!'</code>. Had we not put a log statement there the error would have vanished without a trace.</p>
<p>This is 'error hiding' and it makes debugging a pain. &nbsp;If I add a <code>try-catch</code> but don't do anything in the <code>catch</code> statement, I will prevent my program from crashing. But I also end up 'hiding' the problem! &nbsp;It usually leads to inconsistent state - parts of my server code thinks everything is OK, and tells my front end that. But another part of my server code had indicated something was wrong!</p>
<p>In this simple example, it's easy to unravel, but think of deeply nested called across your entire application - what a nightmare!</p>
<p>If you absolutely need to handle the error in the middle of your call stack, then be sure to re-throw the error appropriately. That means ending your <code>catch</code> statement with another <code>throw error</code> operation. That way the error will get thrown again and continue to 'bubble up' towards the first function (bottom of the call stack) that triggered the call chain where it can be properly handled again. </p>
<p>Here's what it looks like, adding just one small re-throw in the <code>stripeWrapper()</code> function. Run the code and see the difference in outcome because <code>callAll()</code> now gets passed the error!</p><pre><code>function stripeWrapper(){
console.log('this is the second function, about to call the first function')
try{
stripeAPI()
} catch(err) {
console.log('Oops!  err will not bubble up to to first function that triggered the function calls!')
throw err  // add this to re-throw!
}
}
function callAll(){
try{
routeHandler()
return 'done'
} catch (err){  // catches the re-thrown error and prints it to console!
console.log('error in callAll():', err)
return ' not done '
}
}</code></pre>
<p>Since you threw the error in the middle stage, it went to the outer boundary, and got caught there. The code returns <code>not done</code> and you can investigate why the error says 'no arg'. You can also then see that it never executed <code>saveToDb()</code>, as the error threw before that code could be executed! That could be a good thing in cases where you're saving things to the database <em>assuming that there were no errors until that point</em>. Imagine saving things to the database that should never have been saved - that's dirty data in the database now! ???</p>
<p>So, don't do what I did in my early days of programming and simply log the error at <em>every</em> step in the call stack and re-throw it. It just means you will get multiple logs for each error as it passes through the call stack! &nbsp;Only intercept the error at a place where you can most efficiently and usefully handle it, ideally once in a given chain of calls.</p>
<p>In general, it really helps if you place your <code>try catch</code> statement at the outermost (first calling) function that lies at the bottom of the call stack. You can identify this as the place the error will bubble up to <em>just before</em> throwing an <code>uncaughtException</code> error. That's a good place to catch, log, and handle it.</p>
<p>To see the difference in handling when you don't use the <code>try-catch</code> simply modify <code>callAll()</code> to look like this:</p><pre><code>function callAll(){
routeHandler()
// this won't run!
console.log('This function is not contained inside a try-catch, so will crash the node program.')
}
callAll()
</code></pre>
<p>You'll note that the <code>console.log</code> statement never runs here because the program crashes when <code>routeHandler()</code> finishes executing.</p>
<h2 id="rulesofthumb">Rules of Thumb ???</h2>
<p>So let's summarize some quick rules that will cover 90+% of your needs:</p>
<ol>
<li>Do not litter your code with <code>try-catch</code> statements</li>
<li>Try as much as possible to <code>catch</code> only once in a given chain of function calls</li>
<li>Try and place that <code>catch</code> at the outermost boundary - the first function that starts the chain of function calls (bottom of the call stack)</li>
<li>Do not leave your <code>catch</code> statement empty as a way to stop your program from crashing! If you don't handle it, chances are it will lead to inconsistent state between your front end and back end. This can be dangerous and lead to a horrible user experience ?!</li>
<li>Do not use a <code>catch</code> statement only in the middle of the call stack, and not at the outer boundary. &nbsp;This will cause the error to get 'hidden' in the middle of your code where it isn't going to help you debug or manage data properly. Others who work with your code will find where you live and cut off your internet connection.</li>
<li>Catch it where you need to know, and where you can meaningfully do all the things necessary to clean things up.</li>
</ol>
<p><em>Stripe API (</em>?<em> thrown here) -&gt; API Wrapper (</em>? <em>passing through) -&gt; </em> <em>Route-Handler (</em>? <em>caught, handled, logged) -&gt; </em>???</p>
<p>Thanks for reading!</p>
<p>If you would like to learn more about my journey into code, check out <a href="http://podcast.freecodecamp.org/53-zubin-pratap-from-lawyer-to-developer">episode 53</a> of the <a href="http://podcast.freecodecamp.org/">freeCodeCamp podcast</a>, where Quincy (founder of freeCodeCamp) and I share our experiences as career changers that may help you on your journey. You can also access the podcast on <a href="https://itunes.apple.com/au/podcast/ep-53-zubin-pratap-from-lawyer-to-developer/id1313660749?i=1000431046274&amp;mt=2">iTunes</a>, <a href="https://www.stitcher.com/podcast/freecodecamp-podcast/e/59201373?autoplay=true">Stitcher</a>, and <a href="https://open.spotify.com/episode/4lG0RGpzriG5vXRMgza05C">Spotify</a>.</p>
<p>I will also hold a few AMAs and webinars in the coming months. If this is of interest to you please let me know by going <a href="http://www.matchfitmastery.com/">here</a>. And of course, you can also Tweet me at <a href="https://twitter.com/zubinpratap">@ZubinPratap</a>.</p>
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
