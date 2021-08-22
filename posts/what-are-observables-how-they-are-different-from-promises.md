---
card: "/images/default.jpg"
tags: [Rxjs]
description: ‘Observables’, ‘Observables’, ‘Observables’...Yes! Today, we
author: "Milad E. Fahmy"
title: "An intro to Observables and how they are different from promises"
created: "2021-08-15T19:32:39+02:00"
modified: "2021-08-15T19:32:39+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-rxjs tag-observables tag-promises tag-asynchronous tag-javascript ">
<header class="post-full-header">
<h1 class="post-full-title">An intro to Observables and how they are different from promises</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2019/10/code_feature.jpeg 300w,
/news/content/images/size/w600/2019/10/code_feature.jpeg 600w,
/news/content/images/size/w1000/2019/10/code_feature.jpeg 1000w,
/news/content/images/size/w2000/2019/10/code_feature.jpeg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2019/10/code_feature.jpeg" alt="An intro to Observables and how they are different from promises">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>‘<strong>Observables</strong>’, ‘<strong>Observables</strong>’, ‘<strong>Observables</strong>’...Yes! Today, we will talk about this often discussed word of the market. We'll also learn how they are different from Promises (haven't heard about Promises? Not to worry! You will know more soon). Let’s start!</p>
<p>I first encountered the term <strong>Observable</strong> when I started learning Angular. Although it’s not an Angular-specific feature, it’s a new way of handling<em> </em><strong>async</strong><em> </em>requests. &nbsp;Async request? &nbsp;You know it, right? No! It’s ok. Let’s first understand what’s an <strong>async</strong> request is then.</p>
<h2 id="async-requests">Async Requests</h2>
<p>Well! You must have read about asynchronous features in the JavaScript world. '<strong>Asynchrony</strong>' in the computer world means that the flow of the program occurs independently. It does not wait for a task to get finished. It moves to the next task. </p>
<p>Now, you might be thinking - what happens to the task that is not finished? The co-worker handles those unfinished tasks. Yes! In the background, a co-worker works and handles those unfinished tasks and once they are done, it sends data back. </p>
<p>This can bring up another question of how we handle the data that is returned. The answer is <strong>Promises</strong>, <strong>Observables</strong>, <strong>callbacks</strong> and many more. </p>
<p>We know that these asynchronous operations return responses, either some data after success or an error. To handle this, concepts like <strong>Promises</strong>, <strong>callbacks</strong>, <strong>observables</strong> came into the market. Well! I will not get into them now as we have deviated from our sub topic i.e '<strong>async</strong>' request. (Don't worry! These topics will be discussed soon).</p>
<p>After discussing the above points, you might ha have got a rough picture of what the <strong>async</strong> request is. Let’s clear it up. An <strong>Async</strong> request is one where the client does not wait for the response. Nothing is blocked. Let’s understand this concept by looking at a very common scenario.</p>
<p>In the web world, it's quite common to hit the server to get data like the details of a user, a list, and so on. We know it will take time and anything can follow (success/failure). </p>
<p> this case, instead of waiting for data to come, we handle it asynchronously (no waiting) so that our application does not get blocked. Such requests are asynchronous requests. I think now we are clear with it. So let's see how we can actually handle these async requests.</p>
<p>As I already told you, Observables gave us a new way of handling async requests. The other ways are promises, callbacks, and async/await. These are the popular ways. Let’s have a look at two of them which are callbacks and promises.</p>
<h2 id="callbacks">Callbacks</h2>
<p>Callbacks are quite a common one. Callback functions (as their name suggests) are called at the back. That is when the request gets completed and returns the data or error, these functions get called. Have a look at the code for a better understanding:</p><pre><code>const request = require(‘request’);
request('https://www.example.com', function (err, response, body) {
if(error){
// Error handling
}
else {
// Success
}
});</code></pre>
<p>This is one way of handling an async request. But what happens when we want to again request to the server for data after the success of the first request? What if we want to make a third request after that successful second request? Horrible! </p>
<p>At this point, our code will become messy and less readable. This is called ‘<strong>callback</strong> <strong>hell</strong>’. To overcome it, promises came around. They offer a better way of handling an async request that improves code readability. Let’s understand a bit more.</p>
<h2 id="promises">Promises</h2>
<p>Promises are objects that promise they will have value in the near future - either a success or failure. Promises have their own methods which are<em> </em><strong>then </strong>and <strong>catch</strong>. <strong>.then()</strong> is called when success comes, else the <strong>catch()</strong> method calls. &nbsp;<strong>Promises</strong><em> </em>are created using the <strong>promise </strong>constructor. Have a look at code to better understand.</p><pre><code>function myAsyncFunction(name){
return new Promise(function(resolve, reject){
if(name == ‘Anchal’){
resolve(‘Here is Anchal’)
}
else{
reject(‘Oops! This is not Anchal’)
}
}
}
myAsyncFunction(‘Anchal’)
.then(function(val){
// Logic after success
console.log(val)     // output -  ‘Here is Anchal’
})
.catch(function(val){
//Logic after failure
console.log(val)     // output - ‘Oops! This is not Anchal’
})</code></pre>
<p>As you can see,<strong> myAsyncFunction </strong>is actually promising that it will have some value in near future. <strong>.then()</strong> or <strong>.catch()</strong> is called according to the promise's status. </p>
<p><strong>Promises</strong> improve <strong>code</strong> <strong>readability</strong>. You can see how readable the code is by using promises. Better handling of async operations can be achieved using Promises. This is a brief introduction of what promises are, how they handle data and what beauty promises carry.</p>
<p>Now, it's time to learn about our main topic: Observables.</p>
<h2 id="what-are-observables">What are Observables?</h2>
<p>Observables are also like callbacks and promises - that are responsible for handling async requests. Observables are a part of the <strong><em>RXJS</em></strong> library. This library introduced Observables. </p>
<p>Before understanding what an observable actually is, you must understand two communication models: <strong>pull</strong> and <strong>push</strong>. These two concepts are protocols of how producers of data communicate with the consumers of data.</p>
<h3 id="pull-push-model">Pull &amp; Push Model</h3>
<p>As I have already told you, Push and Pull are communication protocols between data producers and consumers. &nbsp;Let’s understand both one by one.</p>
<p><strong>Pull Model:</strong> In this model, the <strong>consumer</strong> of data is <strong>king</strong>. This means that the consumer of data determines when it wants data from the producer. The producer does not decide when the data will get delivered. You can better understand if you relate <strong>functions </strong>to it.</p>
<p>As we know, functions are responsible for doing some task. For example, <strong>dataProducer</strong> is a function which is simply returning a string, like "<strong>Hi</strong> <strong>Observable</strong>".</p><pre><code>function dataProducer(){
return ‘Hi Observable’;
}</code></pre>
<p><br>Now, you can see that the above function is not going to decide when it will deliver the ‘Hi Observable’ string. It will decide by the consumer, that is code that calls this function. Consumer is king. The reason why it is called a pull model is that <strong>pull</strong> task is determining the communication. &nbsp;This is<em> </em>the<em> </em><strong>pull</strong> <strong>Model</strong>. Now, let’s go into the <strong>Push</strong> <strong>Model</strong><em>.</em></p>
<p><strong>Push Model:</strong> In this model, the <strong>producer</strong> of data is <strong>king</strong>. Producer determines when to send data to consumer. The Consumer does not know when data is going to come. Let’s understand it by taking an example:</p>
<p>I hope you remember <strong>promises</strong><em>.</em> Yes, <strong>Promises</strong> follow the <strong>push</strong> <strong>model</strong><em>.</em> &nbsp;A Promise (producer) delivers data to the callback (<em>.then()</em> - consumer). Callbacks do not know when data is going to come. Here, <strong>promise</strong> (producer) is king. It is determining the communication. That’s why it's called <strong>Push</strong> <strong>Model </strong>as the producer is in charge.</p>
<p>Like promises, Observables also follow the push model. How? You will get the answer once I elaborate on observables. Let’s get back to observables then.</p>
<h2 id="observables-as-functions">Observables as functions</h2>
<p>To simply understand, you can think of observables as functions. Let’s have a look at the below examples:</p><pre><code>function dataProducer(){
return ‘Hi Observable’
}
var result = dataProducer();
console.log(result) // output -  ‘Hi Observable’
</code></pre>
<p><br>You can get the same behaviour using an observable: </p><pre><code>var observable = Rx.Observable.create((observer: any) =&gt;{
observer.next(‘Hi Observable’);
})
observable.subscribe((data)=&gt;{
console.log(data);    // output - ‘Hi Observable’
})</code></pre>
<p>From above, you can see both functions and observables show the same behaviour. This may bring a question to your mind - are observables the same as functions? No. I'll clarify in a minute why the answer is no. Have a look at an elaborate version of the above example.</p><pre><code>function dataProducer(){
return ‘Hi Observable’;
return ‘Am I understandable?’ // not a executable code.
}
var observable = Rx.Observable.create((observer: any) =&gt;{
observer.next(‘Hi Observable’);
observer.next( ‘Am I understandable?’ );
})
observable.subscribe((data)=&gt;{
console.log(data);
})
Output :
‘Hi Observable’
‘Am I understandable?’ </code></pre>
<p><br>I hope you can now see what difference I wanted to address. From above, you can see,<em><strong> </strong></em><strong>both functions and observables are lazy</strong>. We need to call (functions) or subscribe (observables) to get the results. </p>
<p><strong>Subscriptions to observables are quite similar to calling a function.</strong> But where observables are different is in their ability to return <strong>multiple</strong> <strong>values</strong> called <strong>streams</strong> (a stream is a sequence of data over time). </p>
<p>Observables not only able to return a value <strong>synchronously</strong>, but also <strong>asynchronously</strong>.</p><pre><code>var observable = Rx.Observable.create((observer: any) =&gt;{
observer.next(‘Hi Observable’);
setTimeout(()=&gt;{
observer.next(‘Yes, somehow understandable!’)
}, 1000)
observer.next( ‘Am I understandable?’ );
})
output :
‘Hi Observable’
‘Am I understandable?’
Yes, somehow understandable!’.
</code></pre>
<p>In short, you can say <strong>observables are simply a function that are able to give multiple values over time, either synchronously or asynchronously</strong><em><strong>.</strong></em></p>
<p>You now have an outline about observables. But let’s understand them more by looking into different phases of observables.</p>
<h2 id="observable-phases">Observable Phases</h2>
<p><br>We have already seen from the above example how observables create and execute and come into play by subscription. Hence, there are four stages through which observables pass. They are:</p>
<ol>
<li><strong>Creation</strong></li>
<li><strong>Subscription.</strong></li>
<li><strong>Execution</strong></li>
<li><strong>Destruction.</strong></li>
</ol>
<p><br><strong>Creation of an observable<em> </em></strong>is done using a <strong>create</strong> <strong>function</strong>.</p><pre><code>var observable = Rx.Observable.create((observer: any) =&gt;{
})
</code></pre>
<p>To make an <strong>observable</strong> <strong>work</strong>, we have to <strong>subscribe</strong> it. This can be done using the subscribe method.</p><pre><code>observable.subscribe((data)=&gt;{
console.log(data);
})</code></pre>
<p><br>Execution of observables is what is inside of the create block. Let me illustrate with the help of an example:</p><pre><code>var observable = Rx.Observable.create((observer: any) =&gt;{
observer.next(‘Hi Observable’);
setTimeout(()=&gt;{
observer.next(‘Yes, somehow understandable!’)
}, 1000)
observer.next( ‘Am I understandable?’ );
})
</code></pre>
<p>The above code inside the create function is observable execution. The <strong>three</strong> types of <strong>values</strong> that an observable can deliver to the subscriber are:</p><pre><code>observer.next(‘hii’);//this can be multiple (more than one)
observer.error(‘error occurs’) // this call whenever any error occus.
Observer.complete(‘completion of delivery of all values’) // this tells the subscriptions to observable is completed. No delivery is going to take place after this statement.</code></pre>
<p>Let’s have a look below to understand all three values:</p><pre><code>var observable = Rx.Observable.create((observer: any) =&gt;{
try {
observer.next(‘Hi Observable’);
setTimeout(()=&gt;{
observer.next(‘Yes, somehow understandable!’)
}, 1000)
observer.next( ‘Am I understandable?’ );
observer.complete();
observer.next(‘lAST DELIVERY?’ );
// above block is not going to execute as completion notification is      already sent.
}
catch(err){
observer.error(err);
}
})                      </code></pre>
<p>Last phase that comes into the market is destruction. After an error or a complete notification, the observable is automatically unsubscribed. But there are cases where we have to manually <strong>unsubscribe</strong> it. To manually do this task, just use:</p><pre><code>var subscription = observable.subscribe(x =&gt; console.log(x)); // Later: subscription.unsubscribe();</code></pre>
<p>This is all about the different phases through which an observable passes.</p>
<p>I think, now, we know what observables are? But what about the other question which is - how observables are different from promises? Let’s find the answer to it.</p>
<h2 id="promises-vs-observables">Promises vs observables</h2>
<p>As we know, promises are for handling async requests and observables can also do the same. But where do they differ?</p>
<h3 id="observables-are-lazy-whereas-promises-are-not">Observables are lazy whereas promises are not</h3>
<p>This is pretty self-explanatory: observables are lazy, that is we have to subscribe observables to get the results. In the case of promises, they execute immediately.</p>
<h3 id="observables-handle-multiple-values-unlike-promises">Observables handle multiple values unlike promises </h3>
<p>Promises can only provide a single value whereas observables can give you multiple values.</p>
<h3 id="observables-are-cancelable">Observables are cancelable</h3>
<p>You can cancel observables by unsubscribing it using the <strong>unsubscribe</strong> method whereas promises don’t have such a feature.</p>
<h3 id="observables-provide-many-operators">Observables provide many operators</h3>
<p>There are many operators like <strong>map</strong><em>, </em><strong>forEach</strong><em>, </em><strong>filter</strong> etc. Observables provide these whereas promises does not have any operators in their bucket.</p>
<p>These are features that makes observables different from promises.</p>
<p>Now, it's time to end. I hope you have a better understanding of the hot topic of observables!</p>
<p>Thanks for reading!<br></p>
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
