---
card: "/images/default.jpg"
tags: [Angular]
description: In this tutorial, we'll learn to use the RxJS 6 library with
author: "Milad E. Fahmy"
title: "Angular RxJS In-Depth"
created: "2021-08-15T19:33:13+02:00"
modified: "2021-08-15T19:33:13+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-angular tag-javascript tag-typescript ">
<header class="post-full-header">
<h1 class="post-full-title">Angular RxJS In-Depth</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2019/07/s_98CC91BB1D7ABCD50AC04362B7F541F3549A631A6219D02FE7AED5645CF1CAA7_1549549534749_use-reactive-programming-you-must.jpg 300w,
/news/content/images/size/w600/2019/07/s_98CC91BB1D7ABCD50AC04362B7F541F3549A631A6219D02FE7AED5645CF1CAA7_1549549534749_use-reactive-programming-you-must.jpg 600w,
/news/content/images/size/w1000/2019/07/s_98CC91BB1D7ABCD50AC04362B7F541F3549A631A6219D02FE7AED5645CF1CAA7_1549549534749_use-reactive-programming-you-must.jpg 1000w,
/news/content/images/size/w2000/2019/07/s_98CC91BB1D7ABCD50AC04362B7F541F3549A631A6219D02FE7AED5645CF1CAA7_1549549534749_use-reactive-programming-you-must.jpg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2019/07/s_98CC91BB1D7ABCD50AC04362B7F541F3549A631A6219D02FE7AED5645CF1CAA7_1549549534749_use-reactive-programming-you-must.jpg" alt="Angular RxJS In-Depth">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>In this tutorial, we'll learn to use the RxJS 6 library with Angular 6 or Angular 7. We'll learn about:</p>
<ul>
<li>How to import the Observable class and the other operators.</li>
<li>How to subscribe and unsubscribe from Observables.</li>
<li>How to import and call operators and chain them with the <code>pipe()</code> function.</li>
<li>We'll also see how to use the async pipe to subscribe to Observables from Angular templates.</li>
<li>Finally we'll see how to use some popular pipeable operators such as <code>tap()</code>, <code>map()</code> and <code>filter()</code> and their new import paths in RxJS 6.</li>
</ul>
<p><strong>Note</strong>: This tutorial works with both Angular 6 and Angular 7.</p>
<p>Throughout this tutorial, we’ll start looking at what reactive programming, asynchronous operations and data streams are and how they are related to the RxJS library. We’ll then see the concept of an RxJS <code>Observable</code> with examples, the various types of Observables such as:</p>
<ul>
<li><code>Subject</code>,</li>
<li><code>BehaviorSubject</code> and <code>ReplaySubject</code>,</li>
<li>unicast and multicast Observables,</li>
<li>cold and hot Observables &nbsp;etc.</li>
</ul>
<p>Next, we’ll see what RxJS operators are and examples of some popular operators such as <code>tap()</code>, <code>map()</code>, <code>filter()</code>, <code>share()</code>, etc. And finally we’ll see how Angular uses the RxJS Observable to do asynchronous programming.</p>
<h2 id="what-is-reactive-programming">What is Reactive Programming</h2>
<p>Let’s see the definition of Reactive programming from different sources.</p>
<p>This is how  Andre Staltz, the creator of <a href="https://cycle.js.org/">cycle.js</a> (A functional and reactive JavaScript framework for predictable code) defines it:</p>
<p>Reactive Programming is programming with asynchronous data streams</p>
<p>This means when you are writing code that deals with asynchronous operations and streams of data, you are doing reactive programming.</p>
<p>Now, this is the definition from <a href="https://en.wikipedia.org/wiki/Reactive_programming">Wikipedia</a> which is more in-depth:</p>
<p>In computing, reactive programming is a declarative programming paradigm concerned with data streams and the propagation of change.</p>
<p>This means reactive programming is a declarative (vs. a procedural) style of programming &nbsp;that works on streams of data.</p>
<p>For a detailed guide on reactive programming and data streams, check out: <a href="https://gist.github.com/staltz/868e7e9bc2a7b8c1f754">The introduction to Reactive Programming you've been missing</a>.</p>
<p><strong>What is Stream</strong></p>
<p>A stream is an essential concept in reactive programming so it's worth seeing the definition before we proceed further.</p>
<p>In all definitions we’ve seen the word <strong>stream.</strong></p>
<p>So what is a stream?</p>
<p>Simply put:</p>
<p>A stream refers to values of data overtime.</p>
<p>We'll see later that Observables and streams are very related concepts.</p>
<h2 id="what-is-rxjs">What is RxJS</h2>
<p>Now, that we’ve seen the conceps of reactive programming and data streams, let’s see what RxJS is.</p>
<p><a href="https://github.com/ReactiveX/rxjs">RxJS</a> is a popular library among web developers. It provides functional and reactive programming patterns for working with events and streams of data and has been integrated in many web development libraries and frameworks such as Angular.</p>
<p>RxJS makes it easy for JavaScript developers to write asynchronous code using composable Observables instead of callbacks and Promises.</p>
<p>RxJS stands for Reactive Extensions for JavaScript and it actually has implementations in other programming languages such as Java, Python, Ruby, and PHP etc. It's also available for platforms such as Android. Check out the <a href="http://reactivex.io/languages.html">complete list of supported languages and platforms</a>.</p>
<p>RxJS v6 is currently the stable version of RxJS and it has many breaking changes with RxJS v5. You can check out more information about the changes and how to migrate from the old version from this official <a href="https://github.com/ReactiveX/rxjs/blob/master/docs_app/content/guide/v6/migration.md">migration guide</a>.</p>
<p>RxJS 6 has many advantages over the previous RxJS 5 version(s), such as:</p>
<ul>
<li>The bundle size of the library is smaller,</li>
<li>The performance of the latest version is better,</li>
<li>RxJS 6 Observable follows the <a href="https://github.com/zenparsing/es-observable">Observable Spec Proposal</a>,</li>
<li>The latest version provides better debugability,</li>
<li>A better modular architecture,</li>
<li>It's backward compatible.</li>
</ul>
<h2 id="how-to-install-and-use-rxjs">How to Install and Use RxJS</h2>
<p>RxJS is a JavaScript library which means you can install it in the same way you install other libraries:</p>
<p><strong>Using RxJS with ES6 via npm</strong></p>
<p>In your project, you can run the following command to install RxJS:</p><pre><code>$ npm install rxjs
</code></pre>
<p>You can then import the symbols you want to use from the <code>rxjs</code> package or a sub-package such as <code>rxjs/operators</code>:</p><pre><code>import { Observable, Subscriber } from 'rxjs';
import { tap, map, filter } from 'rxjs/operators';
</code></pre>
<p>We imported the <code>Observable</code> and <code>Subscriber</code> symbols from <code>rxjs</code> and the <code>tap</code>, <code>map</code> and <code>filter</code> operators from <code>rxjs/operators</code>.</p>
<p>We'll see later what these symbols are and how to use them in your Angular application.</p>
<p><strong>Using RxJS from a CDN</strong></p>
<p>You can also use RxJS from a <a href="https://unpkg.com/rxjs/bundles/rxjs.umd.min.js">CDN</a> using a <code>&lt;script&gt;</code> in your HTML document:</p><pre><code>&lt;script src="https://unpkg.com/rxjs/bundles/rxjs.umd.min.js"&gt;&lt;/script&gt;
</code></pre>
<p><strong>Note</strong>: Please note that in Angular 6 &amp; 7, RxJS 6 is already included in your project so you don't need to install it manually.</p>
<h2 id="what-is-an-observable-observer-and-subsription-in-rxjs-6">What is an Observable, Observer and Subsription in RxJS 6</h2>
<p>RxJS uses the concept of Observables to handle and work with asynchronous and event-based code.</p>
<p>The asynchronous word comes from Asynchrony. In computer programming, here is the definition of Asynchrony from <a href="https://en.wikipedia.org/wiki/Asynchrony_(computer_programming)">Wikipedia</a>:</p>
<p>Asynchrony, in computer programming, refers to the occurrence of events independent of the main program flow and ways to deal with such events. These may be "outside" events such as the arrival of signals, or actions instigated by a program that take place concurrently with program execution, without the program blocking to wait for results.</p>
<p>After reading this definition, you may have concluded how much asynchrony is important for computers and programming!</p>
<p>Let's make this simple!</p>
<p><strong>Asynchronous</strong> code is the inverse of <strong>synchronous</strong> code which is the original way of thinking about your code when you are first introduced to programming.</p>
<p>Your code is synchronous when it's running in sequences i.e instruction by instruction in the order they appear in the source code.</p>
<p>For example, let's consider this simple JavaScript code:</p><pre><code>const foo = "foo" //1
const bar = "bar" //2
const foobar = foo  +  bar //3
console.log(foobar) //4
</code></pre>
<p>The browser will run this synchronous code line by line from line 1 to 4 starting by assigning the <code>foo</code> and <code>bar</code> variables, concatenating them and displaying the <code>foobar</code> variable in the console.</p>
<p>JavaScript supports also the <strong>asynchronous</strong> approach of writing code which makes sense, since you need to respond to the user events in the browser but you don't actually know when the user interacts with your application (and in which order) when you are writing code.</p>
<p>This was originally achieved using callbacks which you need to define in your code and specify when they will be called.</p>
<p>For example, the following asynchronous code will display <strong>You clicked the button!</strong> when the user clicks the button identified by the <code>mybutton</code> identifier:</p><pre><code>document.getElementById('mybutton').addEventListener('click', () =&gt; {
console.log("You clicked the button!")
})
</code></pre>
<p>The second argument of the <code>addEventListener()</code> method is the callback.</p>
<p>You can also use callbacks to handle asynchronous operations which don't involve the DOM. For example, the following code can be used to send an HTTP POST request to a web server:</p><pre><code>const xhr = new XMLHttpRequest()
xhr.onreadystatechange = () =&gt; {
if (xhr.readyState === 4) {
xhr.status === 200 ? console.log(xhr.responseText) : console.error('error')
}
}
xhr.open('POST', 'your.server.com')
xhr.send()
</code></pre>
<p>This is how you perform the famous Ajax calls in JavaScript.</p>
<p>Actually, <a href="https://en.wikipedia.org/wiki/Ajax_(programming)">Ajax</a> itself stands for <strong>A</strong>synchronous <strong>J</strong>avaScript <strong>a</strong>nd <strong>X</strong>ML.</p>
<p><strong>Note</strong>: Sending HTTP requests (which is a common operation in web apps) is an asynchronous operation by nature since the request will take time to reach the server which will then send a response back to your client application. In this mean time, the application needs to respond to other actions and perform other tasks and only process the server response when it's received.</p>
<p>If you have ever extensively worked with callbacks, you'll notice one problem with them. They are difficult to track!</p>
<p>When you write complex applications you usually end up writing nested callbacks (callbacks inside callbacks) with multiple nesting levels. This is what's known as the <a href="https://stackoverflow.com/questions/25098066/what-is-callback-hell-and-how-and-why-rx-solves-it">callback hell</a>.</p>
<p>Modern JavaScript introduced other approaches or abstractions to deal with asynchronous operations (without using too much callbacks) such as Promises and Async/Await.</p>
<p>Promises have been introduced in <a href="https://www.ecma-international.org/ecma-262/6.0/">ES6</a> (JS 2015).</p>
<p>Async/await has been introduced in ES8 (JS 2017) and it's actually a syntactic sugar on top of Promises which helps developers write asynchronous code with Promises in a way that looks synchronous.</p>
<p>But Promises are actually similar to callbacks and have the same nesting problem at some degree.</p>
<p>Since developers are always looking for better solutions we now have Observables which use the <a href="https://en.wikipedia.org/wiki/Observer_pattern">observer</a> software pattern.</p>
<p>The observer pattern is a software design pattern in which an object, called the subject, maintains a list of its dependents, called observers, and notifies them automatically of any state changes, usually by calling one of their methods. <a href="https://en.wikipedia.org/wiki/Observer_pattern">Observer pattern</a>.</p>
<p>Observables are implemented in the <a href="http://reactivex.io/">ReactiveX</a> project which has implementations in various languages. RxJS is the JavaScript implementation.</p>
<p><strong>Note</strong>: Observables are implemented in many other libraries such as <a href="https://github.com/zenparsing/zen-observable">zen-observable</a> and <a href="https://github.com/staltz/xstream">xstream</a> but RxJS Observables are the most popular in JavaScript.</p>
<p>Observables are not yet a builtin feature of JavaScript but there is a <a href="https://tc39.github.io/proposal-observable/">proposal</a> to add them in EcmaScript.</p>
<p>Now, what's an RxJS Observable?</p>
<p>An Observable is an entity that emits (or publishes) multiple data values (stream of data) over time and asynchronously.</p>
<p>This is the definition of an Observable from the <a href="https://rxjs.dev/guide/overview">RxJS docs</a></p>
<p>Observable represents the idea of an invokable collection of future values or events.</p>
<p><strong>Observers and Subscriptions</strong></p>
<p>There are also related concepts that you'll work with when using Observables which are <strong>Observers</strong> and <strong>Subscriptions</strong>.</p>
<p>Observers are also called listeners (or consumers) as they can listen or subscribe to get the observed data.</p>
<p>From the RxJS docs:</p>
<p>Observer is a collection of callbacks that knows how to listen to values delivered by the Observable.</p>
<p><a href="http://reactivex.io/rxjs/class/es6/Subscription.js~Subscription.html">Subscriptions</a> are objects that are returned when you subscribe to an Observable. They contain many methods such as the <code>unsubscribe()</code> method that you can call to unsubscribe from receving published values from the Observable.</p>
<p>From the official docs:</p>
<p>Subscription represents the execution of an Observable, is primarily useful for cancelling the execution.</p>
<h2 id="what-is-a-subject-in-rxjs">What is a Subject in RxJS</h2>
<p>A <a href="https://rxjs-dev.firebaseapp.com/guide/subject">Subject</a> is a special type of Observable that observers can also subscribe to it to receive published values but with one difference: &nbsp;<strong>The values are multicasted to many Observers</strong>.</p>
<p><strong>Note</strong>: By default an RxJS Observable is unicast.</p>
<p>Unicast simply means that each subscribed observer has an independent execution of the Observable while multicast means that the Observable execution is shared by multiple Observers.</p>
<p><strong>Note</strong>: Subjects are similar to Angular EventEmitters.</p>
<p>So when using Subjects instead of plain Observables, all subscribed Observers will get the same values of emitted data.</p>
<p><strong>Note</strong>: Subjects are also Observers i.e they can also subscribe to other Observables and listen to published data.</p>
<p><strong>Hot and Cold Observables</strong></p>
<p>Unlike regular Observables, Subjects are called <strong>hot</strong>. &nbsp;A hot Observable starts emitting events even before any observer subscribes to it which means observers may lose previous emitted values if they don’t subscribe at that right time while <strong>cold</strong> Observables ****start emitting values when at least one observer is subscribed.</p>
<p><strong>Note</strong>: You can use the <code>asObservable()</code> method to convert a subject to only an Observable.</p>
<h2 id="rxjs-behaviorsubject-and-replaysubject">RxJS’ <code>BehaviorSubject</code> and <code>ReplaySubject</code></h2>
<p>RxJS provides two other types of Subjects: <code>BehaviorSubject</code> and <code>ReplaySubject</code>.</p>
<p>With a normal Subject, Observers that are subscribed at a point later will not receive data values emitted before their subscriptions. In many situations, this is not the desired behavior we want to implement. This can be solved using &nbsp;<code>BehaviorSubject</code> and <code>ReplaySubject</code>.</p>
<p><code>ReplaySubject</code> works by using a buffer that keeps the emitted values and re-emit them when new Observers are subscribed.</p>
<p><code>BehaviorSubject</code> works like <code>ReplaySubject</code> but only re-emits the last emitted value.</p>
<h2 id="how-to-create-an-rxjs-observable">How to Create an RxJS Observable</h2>
<p>You can create an RxJS Observable using the <code>Observable.create()</code> method which takes a function with an <code>observer</code> argument. You can then subscribe to the returned Observable instance.</p>
<p>There many other methods to create Observables besides the static <code>create()</code> method:</p>
<ul>
<li>The <code>lift()</code> instance method which creates a new Observable from the instance (the source) it's called on,</li>
<li>The <code>of([])</code> operator which creates an Observable of a single value. We'll see an example next,</li>
<li>The <code>interval(interval)</code> operator which creates an Observable that emits an infinite sequence of numbers. Each number is emitted at a constant interval of time in seconds,</li>
<li>The <a href="http://reactivex.io/documentation/operators/timer.html">timer()</a> operator which returns an Observable that after a specified amount of time, emits numbers in sequence every specified duration,</li>
<li>The <code>from()</code> method that creates an Observable from a Promise or an array of values,</li>
<li>The <code>fromEvent()</code> method that creates an Observable from a DOM event,</li>
<li>The <code>ajax()</code> method which creates an Observable that sends an Ajax request.</li>
</ul>
<p>We'll see these creation methods by example later.</p>
<h3 id="how-to-subscribe-to-an-rxjs-observable">How to Subscribe to an RxJS Observable</h3>
<p>After creating an <code>Observable</code>, you can subscribe to it using the <code>subscribe()</code> method on the instance which returns an instance of <code>Subscription</code>.</p>
<h3 id="a-simple-example-of-the-rxjs-observable">A Simple Example of the RxJS Observable</h3>
<p>Let's now see a simple example of creating and working with an Observable.</p>
<p>First let's create an Observable:</p><pre><code>let ob$ = Observable.create((observer) =&gt; {
observer.next("A new value!");
});
</code></pre>
<p>We create an <code>ob$</code> Observable and we define the logic that our Observable is supposed to do in the body of the passed in method.</p>
<p>In this example, the Observable will simply emit the <strong>A new value!</strong> value to the subscribed Observer.</p>
<p><strong>Note</strong>: The dollar sign is just a convention for naming variables that hold instance of Observables.</p>
<p>We call the <code>next()</code> method of the observer object to inform it of the available values.</p>
<p><strong>Note</strong>: All observer objects must have a collection of methods such as <code>next()</code>, <code>complete()</code> and <code>error()</code>. This allows Observables to communicate with them.</p>
<p>The <code>next()</code> method is used by the Observable to pass values (publish values) to the subscribed Observer.</p>
<p>Next, let's create an observer object:</p><pre><code>let observer = {
next: data =&gt; console.log( 'Data received: ', data),
complete: data =&gt; console.log('Completed'),
};
</code></pre>
<p>An observer is a plain JavaScript object that contains methods such as <code>next()</code>, <code>complete()</code> and <code>error()</code>. This means it knows how to get notified by the Observable.</p>
<p><strong>Note</strong>: You can also add other custom attributes and methods to the Observer objects besides <code>next()</code>, <code>complete()</code> and <code>error()</code>.</p>
<p>Finally, let's subscribe to our <code>ob$</code> Observable and return a <code>Subscription</code>:</p><pre><code>let subscription = ob$.subscribe(observer);
</code></pre>
<p>Once you susbscribe to the <code>ob$</code> Observable, you'll get the following output in the console:</p><pre><code>Data received: A new value!
</code></pre>
<h2 id="rxjs-operators">RxJS Operators</h2>
<p>RxJS provides the implemenation of Observable concept but also a variety of operators that allows you to compose Observables.</p>
<p>Operators offer a declarative way to perform complex asynchronous operations with Observables.</p>
<p>An operator works on a source Observable by observing its emitted values and applying the intended transformation on them then return a new Observable with the modified values.</p>
<p>There many RxJS operators such as:</p>
<ul>
<li><code>tap()</code>,</li>
<li><code>map()</code>,</li>
<li><code>filter()</code>,</li>
<li><code>concat()</code>,</li>
<li><code>share()</code>,</li>
<li><code>retry()</code>,</li>
<li><code>catchError()</code>,</li>
<li><code>switchMap()</code>,</li>
<li>and <code>flatMap()</code> etc.</li>
</ul>
<h2 id="pipes-combining-multiple-operators">Pipes: Combining Multiple Operators</h2>
<p>RxJS provides two versions of the <code>pipe()</code> function: A standalone function and a method on the <code>Observable</code> interface.</p>
<p>You can use the <code>pipe()</code> function/method to combine multiple Operators. For example:</p><pre><code>import { filter, map } from 'rxjs/operators';
const squareOf2 = of(1, 2, 3, 4, 5,6)
.pipe(
filter(num =&gt; num % 2 === 0),
map(num =&gt; num * num)
);
squareOf2.subscribe( (num) =&gt; console.log(num));
</code></pre>
<p>The <code>of()</code> method will create and return an Observable from the <code>1, 2, 3, 4, 5,6</code> numbers and the <code>pipe()</code> method will apply the <code>filter()</code> and <code>map()</code> operators on each emitted value.</p>
<h2 id="how-observables-are-used-in-angular">How Observables are Used in Angular</h2>
<p>Angular uses the RxJS Observable as a built-in type for many of its APIs such as:</p>
<ul>
<li>The <code>HttpClient</code> methods return Observables and actual requests are only sent when you subscribe to the returned Observable.</li>
<li>The Router uses Observables in multiple places such as:</li>
<li>the <code>[events](https://angular.io/api/router/Router#events)</code> of the Router instance is an Observable to listen to events on the router.</li>
<li>Also <code>ActivatedRoute</code> (which contains information about the route associated with the currently loaded component on the router outlet) has many Observable properties such as <code>params</code> and <code>paramMap</code> for the route parameters.</li>
</ul>
<p>Let's assume, you have an Angular component and the Router service injected as <code>router</code>. This example from <a href="https://stackoverflow.com/questions/33520043/how-to-detect-a-route-change-in-angular">StackOverflow</a> shows you how you can subscribe to the router events for detecting a route change:</p><pre><code>import { Component } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';
@Component({
selector: 'app-root',
template: `&lt;router-outlet&gt;&lt;/router-outlet&gt;`
})
export class AppComponent {
constructor(private router: Router) {
this.router.events.subscribe((event: Event) =&gt; {
if (event instanceof NavigationStart) {
console.log("Navigation start");
}
if (event instanceof NavigationEnd) {
console.log("Navigation end");
}
if (event instanceof NavigationError) {
console.log(event.error);
}
});
}
}
</code></pre>
<ul>
<li>The Reactive Forms Module uses reactive programming and Observables for listening to user input.</li>
<li>The <code>@output()</code> decorator in a component takes an <code>EventEmitter</code> instance. <code>EventEmitter</code> is a subclass of the RxJS Observable.</li>
</ul>
<h2 id="how-to-use-rxjs-6-observable-in-your-angular-code">How to Use RxJS 6 Observable in Your Angular Code</h2>
<p>Angular uses Observables (implemented with the RxJS library) for all asynchronous events. If you are using Angular CLI 6|7, RxJS 6 will be installed by default on your project.</p>
<p>Otherwise you can install it via npm using:</p><pre><code>$ npm install rxjs --save
</code></pre>
<p>To be able to use the Observable symbol in your code, you first need to import it:</p><pre><code>import { Observable } from 'rxjs';
</code></pre>
<p>This is the new import path in RxJS 6 which is different from RxJS 5.</p>
<h2 id="working-with-the-httpclient-module-and-observables">Working with the HttpClient Module and Observables</h2>
<p>The new Angular <code>HttpClient</code> works with Observables by default. Methods such as <code>get()</code>, <code>post()</code>, <code>put()</code> and <code>delete()</code> return an instance of the Observable interface.</p>
<p>HTTP requests are only sent when we subscribe to the Observable.</p>
<p>This is an example of making an HTTP request:</p><pre><code>getItems(): Observable&lt;Item[]&gt; {
return this.httpClient.get&lt;Item[]&gt;(this.itemUrl);
}
</code></pre>
<p>We assume that you have injected the <code>HttpClient</code> service as <em>httpClient</em>.</p>
<h2 id="using-observable-with-asyncpipe">Using <code>Observable</code> with <code>AsyncPipe</code></h2>
<p>Angular <code>AsyncPipe</code> subscribes to Observable and returns the emitted data. For example. Let's suppose we have this method:</p><pre><code>getItems(): Observable {
this.items$ = this.httpClient.get(this.itemUrl);
}
</code></pre>
<p>The <code>items$</code> variable is of type Observable&lt;Item[]&gt;`.</p>
<p>After calling the <code>getItems()</code> method on the component we can use the <code>async</code> pipe in the component template to subscribe to the returned Observable:</p>
<h2 id="subscribing-to-observables">Subscribing to Observables</h2>
<p>Observables are used for better support of event handling, asynchronous programming, and handling multiple values. When you define an Observable to publish some values for a consumer, the values are not emitted until you actually subscribe to the Observable.</p>
<p>The Consumer that subscribes to the Observable keeps receiving values until the Observable is completed or the consumer unsubscribes from the observable.</p>
<p>Let's start by defining an observable that provides a stream of updates</p>
<h2 id="using-the-map-operator">Using the <code>map()</code> Operator</h2>
<p>The <code>map()</code> operator is similar to the <code>Array.map()</code> method. It lets you map observable responses to other values. For example:</p><pre><code>import { Observable} from 'rxjs';
import { map } from 'rxjs/operators';
getItems(): Observable&gt; {
return this.aService.getItems().pipe(map(response =&gt; response.data));
}
</code></pre>
<p>The <code>getItems()</code> method returns an Observable. We're using the <code>map()</code> operator to return the <code>data</code> property of the response object.</p>
<p>The operator enables us to map the response of the Observable stream to the <code>data</code> value.</p>
<p>We import the pipeable operator <code>map()</code> from the <code>rxjs/operators</code> package and we use the <code>pipe()</code> method (which takes a variable number of pipeable operators) to wrap the operator.</p>
<h2 id="using-the-filter-operator">Using the <code>filter()</code> Operator</h2>
<p>The <code>filter()</code> operator is similar to the <code>Array.filter()</code> method. It lets you filter the observable stream and returns another observable. For example:</p><pre><code>import { Observable} from 'rxjs';
import { filter } from 'rxjs/operators';
filter(): Observable&lt;Array&lt;any&gt;&gt; {
return this.aService.getItems()
.pipe(
filter(response =&gt; response.code === 200));
}
</code></pre>
<p>We use the &nbsp;<code>filter()</code> operator to only emit a notification to observers of the observable stream when the status code of the HTTP response is 200.</p>
<h2 id="conclusion">Conclusion</h2>
<p></p>
<p>In this tutorial, you have been introduced to reactive programming, data streams and RxJS 6.</p>
<p>You have learned that reactive programming is about coding with asynchronous data streams and that RxJS is the most popular implementation that implements Observables and the observer pattern.</p>
<p>You have learned what an Observable is — An object that emits or publishes values over time and asynchronously.</p>
<p>You have learned about the related concepts to Observables such as Observers and Subscriptions — Observers are objects that listen and consume values published by an Observable and Subscriptions are the objects returned from the <code>subscribe()</code> method (They are usually used to unsubscribe the Observer from the Observable).</p>
<p>You have also learned about special types of Observables such as Subjects, behavior Subjects (<code>BehaviorSubject</code>) and replay Subjects (<code>ReplaySubject</code>) and also the difference between unicast and multicast Observables. As a reminder a multicast Observable shares its execution between all its Observers.</p>
<p>You learned about cold and hot Observables — hot refers to when the Obseravble starts publishing values when it’s created even before getting any subscriptions.</p>
<p>You learned about RxJS operators which are methods that are used to compose Observables and work on their data streams.</p>
<p>Finally, you learned that Angular 6 &amp; 7 uses RxJS v6 for working with asynchronous operations and APIs (instead of callbacks or Promises) in many of its commonly used modules such as <code>HttpClient</code>, <code>Router</code> and <code>ReactiveForms</code>.</p>
<p>This <a href="https://www.techiediaries.com/angular-rxjs-tutorial/">article </a>was originally posted in <a href="https://www.techiediaries.com/">techiediaries</a>.</p>
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
