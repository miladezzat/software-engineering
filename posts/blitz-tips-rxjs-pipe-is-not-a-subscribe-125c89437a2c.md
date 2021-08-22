---
card: "https://cdn-media-1.freecodecamp.org/images/1*8WNtSRqKD9vfik5zLqDRzw.jpeg"
tags: [JavaScript]
description: by Tomas Trajan
author: "Milad E. Fahmy"
title: "⚡ How to never repeat the same RxJs mistakes again⚡"
created: "2021-08-15T19:38:10+02:00"
modified: "2021-08-15T19:38:10+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-rxjs tag-typescript tag-tech tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">⚡ How to never repeat the same RxJs mistakes again⚡</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*8WNtSRqKD9vfik5zLqDRzw.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*8WNtSRqKD9vfik5zLqDRzw.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*8WNtSRqKD9vfik5zLqDRzw.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*8WNtSRqKD9vfik5zLqDRzw.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*8WNtSRqKD9vfik5zLqDRzw.jpeg" alt="⚡ How to never repeat the same RxJs mistakes again⚡">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Tomas Trajan</p>
<h1 id="-how-to-never-repeat-the-same-rxjs-mistakes-again-">⚡ How to never repeat the same RxJs mistakes again⚡</h1>
<h4 id="remember-pipe-is-not-subscribe-">Remember: .pipe() is not .subscribe()!</h4>
<figcaption>Look! A lightning tip! (Original ? by M<a href="https://unsplash.com/photos/iF5odYWB_nQ?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText" rel="noopener" target="_blank" title="">ax Bender)</a> </figcaption>
</figure>
<blockquote>This article is directed at the beginners trying to increase their RxJs knowledge but can also be a quick refresh or a reference to show to beginners for more experienced developers!</blockquote>
<p>Today we are going to keep it short and straight to the point!</p>
<p>Currently I am working in a rather large organization quite a few teams and projects (more than 40 SPAs) that are in the process of migration to Angular and therefore also RxJs.</p>
<p>This represents a great opportunity to get in touch with the confusing parts of RxJs which can be easy to forget once one masters the APIs and focuses on the implementation of the features instead.</p>
<h3 id="the-subscribe-function">The “.subscribe()” function</h3>
<p>RxJs observable represent a “recipe” of what we want to happen. It’s declarative which means that all the operations and transformations are specified in their entirety from the get go.</p>
<p>An example of an observable stream could look something like this…</p>
<figcaption>Example of the RxJs observable stream declaration</figcaption>
</figure>
<p>This RxJs observable stream will do literally nothing by itself. To execute it we have to subscribe to it somewhere in our codebase!</p>
<figcaption>This subscription will log our greetings every odd minute</figcaption>
</figure>
<p>In the example above, we provided a handler only for the values emitted by the observable. The subscribe function itself accepts up to three different argument to the handle <strong>next </strong>value, <strong>error </strong>or <strong>complete </strong>event.</p>
<p>Besides that we could also pass in an object with the properties listed above. Such an object is an implementation of the <code>Observer</code> interface. The advantage of observer is that we don’t have to provide implementation or at least a <code>null</code> placeholder for the handlers we are not interested in.</p>
<p>Consider the following example…</p>
<p>In the code above, we are passing an object literal which contains only complete handler, the normal values will be ignored and errors will bubble up the stack.</p>
<p>And in this example, we are passing the handler of the next error and complete it as direct arguments of the subscribe function. All unimplemented handlers have to be passed as a null or undefined until we get to the argument we’re interested in.</p>
<p>As we can see, the inline argument style of implementation of a <code>.subscribe()</code> function call is positional.</p>
<blockquote>In my experience, the inline arguments style is the one which is most common in various projects and organizations.</blockquote>
<p>Unfortunately, many times we may encounter implementation like the following…</p>
<figcaption>Example of redundant handlers often encountered in the “wild”</figcaption>
</figure>
<p>The example above contains redundant handlers for both <code>next</code> and <code>error</code> handlers which <strong>do exactly nothing </strong>and could have been replaced by <code>null</code>.</p>
<blockquote>Even better would be to pass the observer object with the <code>complete</code> handler implementation, omitting other handlers altogether!</blockquote>
<h3 id="the-pipe-and-the-operators">The “.pipe()” and the operators</h3>
<p>As beginners are used to providing three arguments to subscribe, they often try to implement a similar pattern when using similar operators in the pipe chain.</p>
<p>RxJs operators, which are often confused with the <code>.subscribe()</code> handlers, are <code>catchError</code> and <code>finalize</code>. They both serve a similar purpose too — the only difference being that they are used in the context of the pipe instead of the subscription.</p>
<p>In case we would like to react to the complete event of every subscription of the RxJs observable stream, we could implement <code>finalize</code> operator as a part of the observable stream itself.</p>
<blockquote>That way we don’t have to depend on the developers to implement complete handlers in the every single .subscribe() call. Remember, the observable stream can be subscribed to more than once!</blockquote>
<figcaption>Use the finalize operator to react to the complete event of the stream independently from the subscription. (Similar to tap)</figcaption>
</figure>
<p>This brings us to the final and arguably most problematic pattern we may encounter when exploring various code bases: redundant operators added when trying to follow .subscribe() pattern in the .pipe() context.</p>
<p>Also, we might encounter its even more verbose cousin…</p>
<figcaption>Stuff might get verbose…</figcaption>
</figure>
<p>Notice we have progressed from the original single line to the full nine lines of code which we have to read and understand when we want to fix a bug or add a new feature.</p>
<blockquote>Stuff might get even more complex when combined with more complex generic Typescript types, which can make the whole code block even more mysterious (and hence waste more of our time).</blockquote>
<h3 id="recapitulation">Recapitulation</h3>
<ol>
<li>The <code>.subscribe()</code> method accepts both the observer object and inline handlers.</li>
<li>The observer object represents the most versatile and concise way to subscribe to an observable stream.</li>
<li>In case we want to go with the inline subscribe arguments (<code>next</code>, <code>error</code>, <code>complete</code>) we can provide <code>null</code> in place of a handler we don’t need.</li>
<li>We should make sure that we don’t try to repeat the <code>.subscribe()</code> pattern when dealing with <code>.pipe()</code> and operators.</li>
<li>Always strive to keep the code as simple as possible and remove unnecessary redundancies!</li>
</ol>
<h4 id="that-s-it-">That’s it! ✨</h4>
<blockquote>I hope you enjoyed this article and will now have better understanding of how to subscribe to RxJs observables with clean, concise implementation!</blockquote>
<p>Please support this guide with your ??? using the clap button and help it spread to a wider audience ? Also, don’t hesitate to ping me if you have any questions using the article responses or Twitter DMs @tom<a href="https://twitter.com/tomastrajan" rel="noopener">astrajan.</a></p>
<blockquote><a href="https://twitter.com/tomastrajan" rel="noopener">And never forget, the future is bright</a></blockquote>
<figcaption><a href="https://twitter.com/tomastrajan" rel="noopener" target="_blank" title="">Obviously the bright future! (? by X</a><a href="https://unsplash.com/photos/WV4B_aVj0aQ?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText" rel="noopener" target="_blank" title="">avier Coiffic)</a> </figcaption>
</figure>
<blockquote>Starting an Angular project? Check out <a href="https://github.com/tomastrajan/angular-ngrx-material-starter" rel="noopener">Angular NgRx Material Starter</a>!</blockquote>
<figcaption>Angular NgRx Material Starter with built in best practices, theming and much more!</figcaption>
</figure>
<p>If you made it this far, feel free to check out some of my other articles about Angular and frontend software development in general…</p>
<p><a href="https://hackernoon.com/%EF%B8%8F-the-7-pro-tips-to-get-productive-with-angular-cli-schematics-b59783704c54" rel="noopener"><strong>?‍?️ The 7 Pro Tips To Get Productive With Angular CLI &amp; Schematics ?</strong></a><br><a href="https://hackernoon.com/%EF%B8%8F-the-7-pro-tips-to-get-productive-with-angular-cli-schematics-b59783704c54" rel="noopener"><strong>An</strong>g<em>ular Schematics is a workflow tool for the modern web — official introduction articlehac</em>kernoon.com &nbsp;</a><a href="https://blog.angularindepth.com/the-best-way-to-unsubscribe-rxjs-observable-in-the-angular-applications-d8f9aa42f6a0" rel="noopener"><strong>The Best Way To Unsubscribe RxJS Observable In The Angular Applications!</strong></a><br><a href="https://blog.angularindepth.com/the-best-way-to-unsubscribe-rxjs-observable-in-the-angular-applications-d8f9aa42f6a0" rel="noopener"><em>There are many different ways how to handle RxJS subscriptions in Angular applications and we’re going to explore their…</em>blog.angularindepth.com</a><a href="https://medium.com/@tomastrajan/total-guide-to-angular-6-dependency-injection-providedin-vs-providers-85b7a347b59f" rel="noopener"><strong>Total Guide To Angular 6+ Dependency Injection — providedIn vs providers:[ ] ?</strong></a><br><a href="https://medium.com/@tomastrajan/total-guide-to-angular-6-dependency-injection-providedin-vs-providers-85b7a347b59f" rel="noopener">L<em>et’s learn when and how to use new better Angular 6+ dependency injection mechanism with new providedIn syntax to make…m</em>edium.com </a><a href="https://blog.angularindepth.com/angular-question-rxjs-subscribe-vs-async-pipe-in-component-templates-c956c8c0c794" rel="noopener"><strong>The Ultimate Answer To The Very Common Angular Question: subscribe() vs | async Pipe</strong></a><br><a href="https://blog.angularindepth.com/angular-question-rxjs-subscribe-vs-async-pipe-in-component-templates-c956c8c0c794" rel="noopener"><em>Most of the popular Angular state management libraries like NgRx expose application state in a form of a stream of…</em>blog.angularindepth.com</a></p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
