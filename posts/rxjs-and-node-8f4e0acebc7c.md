---
card: "https://cdn-media-1.freecodecamp.org/images/1*gpmVC7PYhD3ZYHBYltyeXw.png"
tags: [Reactive Programming]
description: Dealing with asynchronous non-blocking processing has always
author: "Milad E. Fahmy"
title: "Reactive programming and Observable sequences with RxJS in Node.js"
created: "2021-08-15T19:49:24+02:00"
modified: "2021-08-15T19:49:24+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-reactive-programming tag-nodejs tag-rxjs tag-typescript tag-javascript ">
<header class="post-full-header">
<h1 class="post-full-title">Reactive programming and Observable sequences with RxJS in Node.js</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*gpmVC7PYhD3ZYHBYltyeXw.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*gpmVC7PYhD3ZYHBYltyeXw.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*gpmVC7PYhD3ZYHBYltyeXw.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*gpmVC7PYhD3ZYHBYltyeXw.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*gpmVC7PYhD3ZYHBYltyeXw.png" alt="Reactive programming and Observable sequences with RxJS in Node.js">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Dealing with asynchronous non-blocking processing has always been the norm in the JavaScript world, and now is becoming very popular in many other contexts. The benefits are clear: an efficient use of resources. But the benefits come at a cost: a non-trivial increase in complexity.</p>
<p>Over time, vendors and the open source community have tried to find ways to reduce such complexity without compromising the benefits.</p>
<p>Asynchronous processing started with ‘callbacks’, then came Promise and Future, async and await. Recently another kid has come to town — <a href="http://reactivex.io/" rel="noopener">ReactiveX</a> with its various language implementations — bringing the developers a new powerful tool, the Observable.</p>
<p>In this article, we want to show how Observables implemented by <a href="http://reactivex.io/rxjs/" rel="noopener">RxJs</a> (the JavaScript embodiment of ReactiveX) can simplify code to be executed with Node.js, the popular server-side JavaScript non-blocking environment.</p>
<h3 id="a-simple-use-case-read-transform-write-and-log">A simple use case — Read, Transform, Write, and Log</h3>
<p>To make our reasoning concrete, let’s start from a simple use case. Let’s assume we need to read the files contained in <code><strong>Source Dir</strong></code>,<em> </em>transform their content and write the new transformed files in a <code><strong>Target Dir</strong></code><em>,</em> while keeping a log of the files we have created.</p>
<figcaption>Read — Transform — Write — Log</figcaption>
</figure>
<h3 id="synchronous-implementation">Synchronous implementation</h3>
<p>The synchronous implementation of this use case is pretty straightforward. In a sort of pseudo code representation, we could think of something like:</p><pre><code>read the names of the files of Source Dir
for each file name
read the file
transform the content
write the new file in Target Dir
log the name of the new file
end for
console.log('I am done')</code></pre>
<p>There is nothing special to comment here. We can just say that we are sure of the sequence of execution of each line and that we are sure that things will happen as described by the following flow of events. Each circle corresponds to the completion of an I/O operation.</p>
<figcaption>The sequence of events in a synchronous world</figcaption>
</figure>
<h3 id="what-happens-in-an-asynchronous-non-blocking-environment-like-node-js">What happens in an asynchronous non-blocking environment like Node.js</h3>
<p>Node.js is an asynchronous non-blocking execution environment for JavaScript. Non-blocking means that Node.js does not wait for I/O or Network operations to complete before moving to the execution of the next line of code.</p>
<h4 id="processing-one-file"><strong>Processing one file</strong></h4>
<p>Reading and writing files are I/O operations where Node.js shows its non-blocking nature. If a Node.js program asks for a file to read, it has to provide a function to be executed when the file content is available (the so called <strong>callback</strong>) and then immediately move on to the next operation to execute.</p>
<p>Let’s consider the case of just <strong>one file</strong>. Reading, transforming, writing <strong>one</strong> file and updating the log in Node.js looks something like this:</p><pre><code class="language-javascript">import * as fs from 'fs'; // Node module to access file system
const fileName = 'one-file.txt';
fs.readFile(fileName, callback(err, data) =&gt; {
const newContent = transform(data);
const newFileName = newFileName(fileName); // calculate new name
fs.writeFile(newFileName, newContent, err =&gt; {
if(err) {// handle error};
fs.appendFile('log.txt', newFileName  + ' written', err = {
if (err) {// handle error}
});
});
})</code></pre>
<p>The syntax may look a bit convoluted with 2 levels of indentation, but if we think of what happens in terms of events we can still precisely foresee the sequence:</p>
<figcaption>Sequence of events in Node while transforming 1 file</figcaption>
</figure>
<h4 id="the-paradise-of-promise"><strong>The paradise of Promise</strong></h4>
<p>This is the use case where JavaScript Promise shines. Using Promise we can make the code look again sequential, without interfering with the asynchronous nature of Node.js.</p>
<p>Assuming we can access functions that perform read and write operations on file and return a Promise, then our code would look like:</p><pre><code class="language-javascript">const fileName = 'my-file.txt';
readFilePromise(fileName)
.then(data =&gt; {
const newContent = transform(data);
const newFileName = newFileName(fileName); // build the new name
return writeFilePromise(newFileName, newContent)
})
.then(newFileName =&gt; appendFile('log.txt', newFileName))
.then(newFileName =&gt; console.log(newFileName + ' written'))
.catch(err =&gt; // handle error)</code></pre>
<p>There are several ways to transform Node.js functions in <code>Promise</code> based functions. This is one example:</p><pre><code class="language-javascript">function readFilePromise(fileName: string): Promise&lt;Buffer&gt;{
return new Promise(function(resolve, reject) {
fs.readFile(fileName, function(err, data: Buffer) {
if(err !== null) return reject(err);
resolve(data);
});
});
}</code></pre>
<h4 id="processing-many-files"><strong>Processing many files</strong></h4>
<p>If we return to the original use case, where we have to transform all the files contained in a Directory, the complexity increases and Promises start showing some limits.</p>
<p>Let’s look at the events the Node.js implementation needs to manage:</p>
<figcaption>Sequence of events when transforming many files in parallel</figcaption>
</figure>
<p>Each circle represents the completion of one I/O operation, either read or write. Every line represents the processing of one specific file, or a chain of Promises.</p>
<p>Given the non-blocking nature of Node.js, there is no certainty on the sequence in time of such events. It is possible that we will finish writing <code><strong>File2</strong></code><strong> </strong>before we finish reading <code><strong>File3</strong></code>.</p>
<p>The parallel processing of each file makes the use of Promises more complex (at the end of this article, a Promise based implementation is provided). This is the scenario where ReactiveX — RxJs in particular — and Observable shine and allow you to build elegant solutions.</p>
<h3 id="what-are-observables-and-what-can-you-do-with-them">What are Observables and what can you do with them?</h3>
<p>There are many places where formal definitions of Observables are detailed, starting from the official site of <a href="http://reactivex.io/intro.html" rel="noopener">ReactiveX</a>.</p>
<p>Here I just want to remind you of a couple of properties that have always gotten my attention:</p>
<ul>
<li>Observable models a <strong>stream of events</strong></li>
<li>Observable is the<strong> “push” </strong>brother of Iterable, which is “pull”</li>
</ul>
<p>As the “push” brother of Iterable, Observable offers developers many of the cool features provided by Iterables such as:</p>
<ul>
<li>Transform “streams of events” or Observables, via operators such as <code>map</code>, <code>filter</code>and <code>skip</code></li>
<li>Apply functional programming style</li>
</ul>
<p>One additional very important thing that Observable offers is subscription. Via subscription, the code can apply “side effects” to events and perform specific actions when specific events happen, such as when errors occur or the stream of events completes.</p>
<figcaption>The subscribe interface of Observable</figcaption>
</figure>
<p>As you can see, the Observable interface gives developers the possibility to provide three different functions which define what to do respectively when: an event is emitted with its data, an error occurs, or the stream of events completes.</p>
<p>I guess all of the above may sound very theoretical to those who have not yet played with Observable, but hopefully the next part of the discussion, which is focused on our use case, will make these concepts more concrete.</p>
<h3 id="implementation-of-the-read-transform-write-and-log-use-case-via-observable">Implementation of the Read, Transform, Write, and Log use case via Observable</h3>
<p>Our use case starts with reading the list of files contained in <code><strong>Source Dir</strong></code>. So, let’s start from there.</p>
<h4 id="read-all-the-file-names-contained-in-a-directory"><strong>Read all the file names contained in a Directory</strong></h4>
<p>Let’s assume we have access to a function which receives as input the name of a directory and returns an Observable which emits the list of file names of the directory once the directory tree structure has been read.</p><pre><code>readDirObservable(dirName: string) : Observable&lt;Array&lt;string&gt;&gt;</code></pre>
<p>We can subscribe to this Observable and when all file names have been read, start doing something with them:</p>
<figcaption>Subscription to an Observable which emits when the directory has been read</figcaption>
</figure>
<h4 id="read-a-list-of-files"><strong>Read a list of files</strong></h4>
<p>Let’s assume now that we can access a function which receives as input a list of file names and emits each time a file has been read (it emits the content of the file <code>Buffer</code>, and its name <code>string</code>).</p><pre><code>readFilesObservable(fileList: Array&lt;string&gt;)
: Observable&lt;{content: Buffer, fileName: string}&gt;</code></pre>
<p>We can subscribe to such <code>Observable</code> and start doing something with the content of the files.</p>
<h4 id="combining-observables-switchmap-operator">Combining Observables — <em>switchMap</em> operator</h4>
<p>We have now two Observables, one that emits a list of file names when the directory has been read and one that emits every time a file is read.</p>
<p>We need to combine them to implement the first step of our use case, which is: when <code>readDirObservable</code> emits, we need to <strong>switch</strong> to <code>readFilesObservable</code> .</p>
<figcaption>switchMap operator</figcaption>
</figure>
<p>The trick here is performed by the <code>switchMap</code> operator. The code looks like:</p><pre><code>readDirObservable(dirName)
.switchMap(fileList =&gt; readFilesObservable(fileList))
.subscribe(
data =&gt; console.log(data.fileName + ‘ read’), // do stuff with the data received
err =&gt; { // manage error },
() =&gt; console.log(‘All files read’)
)</code></pre>
<p>We must mention that the <code>switchMap</code> operator is more powerful than this. Its full power though can not be appreciated in this simple use case, and its full description is outside the scope of this post. If you are interested, this is an <a href="https://blog.angular-university.io/rxjs-switchmap-operator/" rel="noopener">excellent article</a> that describes in detail <code>switchMap</code>.</p>
<h4 id="observable-generating-a-stream-of-observables"><strong>Observable generating a stream of Observables</strong></h4>
<p>We have now a stream of events representing the completion of a <code>read</code> operation. After the <code>read</code> we need to do a transformation of the content that, for sake of simplicity, we assume to be synchronous, and then we need to save the transformed content in a new file.</p>
<p>But writing a new file is again an I/O operation, or a non-blocking operation. So every ‘file-read-completion’ event starts a new path of elaboration that receives as input the content and the name of the source file, and emits when the new file is written in the <code>Target Dir</code> (the event emitted carries the name of the file written).</p>
<p>Again, we assume that we’re able to access a function that emits as soon as the write operation is completed, and the data emitted is the name of the file written.</p><pre><code>writeFileObservable(fileName: string, content: Buffer) :            Observable&lt;string&gt;</code></pre>
<p>In this case, we have different “write-file” Observables, returned by the <code>writeFileObservable</code> function, which emits independently. It would be nice to <strong>merge</strong> them into a new Observable which emits any time each of these “write-file” Observables emit.</p>
<figcaption>A stream of Observables we would like to merge</figcaption>
</figure>
<p>With ReactiveX (or RxJs in JavaScript) we can reach this result using the <code>mergeMap</code> operator (also known as a <strong>flatMap</strong>). This is what the code looks like:</p><pre><code>readDirObservable(dir)
.switchMap(fileList =&gt; readFilesObservable(fileList))
.map(data =&gt; transform(data.fileName, data.content))
.mergeMap(data =&gt; writeFileObservable(data.fileName, data.content))
.subscribe(
file =&gt; console.log(data.fileName + ‘ written’),
err =&gt; { // manage error },
() =&gt; console.log(‘All files written’)
)</code></pre>
<p>The <code>mergeMap</code> operator has created a new Observable, the <code>writeFileObservable</code> as illustrated in the following diagram:</p>
<figcaption>Observable returned by mergeMap operator</figcaption>
</figure>
<h4 id="so-what">So what?</h4>
<p>Applying the same approach, if we just imagine that we have a new function of <code>writeLogObservable</code>, that writes a line on the log as soon as the file is written and emits the file name as soon as the log is updated, the final code for our use case would look like:</p><pre><code>readDirObservable(dir)
.switchMap(fileList =&gt; readFilesObservable(fileList))
.map(data =&gt; transform(data.fileName, data.content))
.mergeMap(data =&gt; writeFileObservable(data.fileName, data.content))
.mergeMap(fileName =&gt; writeLogObservable(fileName))
.subscribe(
file =&gt; console.log(fileName + ‘ logged’),
err =&gt; { // manage error },
() =&gt; console.log(‘All files have been transformed’)
)</code></pre>
<p>We do not have indentations introduced by the callbacks.</p>
<p>Time flows along the vertical axis only, so we can read the code line by line and reason about what is happening line after line.</p>
<p>We have adopted a functional style.</p>
<p>In other words, we have seen the benefits of Observable in action.</p>
<h3 id="create-observable-from-functions-with-callbacks">Create Observable from functions with callbacks</h3>
<p>I hope you now think that this looks pretty cool. But even in this case you may have one question. All the functions that make this code cool just do not exist. There is no <code>readFilesObservable</code> or <code>writeFileObservable</code> in standard Node.js libraries. How can we create them?</p>
<h4 id="bindcallback-and-bindnodecallback"><strong>bindCallback and bindNodeCallback</strong></h4>
<p>A couple of functions provided by Observable, namely <code>bindCallback</code>(and <code>bindNodeCallback</code>) come to our rescue.</p>
<p>The core idea behind them is to provide a mechanism to transform a function <code>f</code> which accepts a callback <code>cB(cBInput)</code> as input parameter into a function which returns an Observable <code>obsBound</code> which emits <code>cBInput</code>.<em> </em>In other words, it transforms the <strong>invocation</strong> of the<code> cB</code><em> </em>in the <strong>emission</strong> of <code>cBInput</code>.</p>
<p>The subscriber of <code>obsBound </code>can define the function which will process <code>cBInput</code><em> </em>(which plays the same role as <code>cB(cBInput)</code>). The convention applied is that the callback function<code> cB(cBInput)</code> must be the last argument of<code>f</code>.</p>
<p>It is probably easier to understand the mechanism looking at the following diagram:</p>
<figcaption>From a function to an Observable</figcaption>
</figure>
<p>The starting point, the function<code> <strong>f(x, cb)</strong></code> is the same in the two cases. The result (what is printed on the console) is the same in the two cases.</p>
<p>What is different is how the result is obtained. In the first case the result is determined by the callback function passed as input. In the second case it is determined by the function defined by the subscriber.</p>
<p>Another way of considering how <code>bindCallback </code>works is to look at the transformation it performs, as illustrated in the diagram below.</p>
<figcaption>Transformation performed by bindCallback</figcaption>
</figure>
<p>The first argument of <code>f</code> becomes the value passed to the new function <code>fBound</code>. The arguments used as parameters of the callback <code>cb</code> become the values emitted by the new Observable returned by <code>fBound</code>.</p>
<p><code>bindNodeCallback</code> is a variation of <code>bindCallback </code>based on the convention that the callback function has an <strong>error</strong> parameter as the first parameter, along with the Node.js convention <code>fs.readFile(err, cb)</code>.</p>
<h4 id="create-observables-from-non-callback-functions"><strong>Create Observables from non-callback functions</strong></h4>
<p><code>bindNodeCallback </code>has been designed to work with functions which expect a callback as the last argument of their input, but we can make it work also with other functions.</p>
<p>Let’s consider the standard Node.js function <code>readLine</code>. This is a function used to read files line by line. The following example shows as it works:</p>
<figcaption>readLine function</figcaption>
</figure>
<p>Each line read is pushed into the <code>lines</code> array. When the file is completely read, the function <code>processLinesCb</code> is called.</p>
<p>Imagine now that we define a new function,<code>_readLines</code>, which wraps the logic defined above as shown by the following snippet:</p>
<figcaption>readLine function wrapped by a callback function</figcaption>
</figure>
<p>Once all lines are read, they are processed by the function <code>processLinesCb</code>, which is the last input parameter of <code>_readLines</code>. <code>_readLines </code>is therefore a function that can be treated by <code>bindCallback</code>. Through this trick we can transform the Node.js function <code>fs.readLine</code> into an Observable using the usual <code>bindCallback </code>function as follows:</p>
<figcaption>readLine as Observable</figcaption>
</figure>
<h3 id="conclusion"><strong>Conclusion</strong></h3>
<p>Asynchronous non-blocking processing is complex by nature. Our minds are used to think sequentially — this is true at least for those of us who started coding few years ago. We often find it challenging to reason about what is really happening in these environments. The callback-hell is just around the corner.</p>
<p>Promises and Futures have simplified some of the most frequent cases such as ‘one time’ asynchronous events, the ‘request now — respond later’ scenario typical of HTTP requests.</p>
<p>If we move from ‘one time’ events to ‘event streams’ Promises start showing some limitations. In such cases we may find ReactiveX and Observables a very powerful tool.</p>
<h4 id="as-promised-the-promise-based-implementation-of-our-use-case"><strong>As promised: the Promise-based implementation of our use case</strong></h4>
<p>This is an implementation of the same use case based on Promises:</p><pre><code>const promises = new Array&lt;Promise&gt;();
readDirPromise(dir)
.then(fileList =&gt; {
for (const file of fileList) {promises.push(
readFilePromise(file)
.then(file_content =&gt; transform(file_content))
.then(file =&gt; writeLogPromise(file))
);
}
return promises;
}
.then(promises =&gt; Promise.all(promises))
.then(() =&gt; console.log(‘I am done’))
.catch(err =&gt; { // manage error })</code></pre>
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
