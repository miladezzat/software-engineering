---
card: "https://cdn-media-1.freecodecamp.org/images/1*U1TQD4tsM3JLZ-MfBH-vJA.jpeg"
tags: [JavaScript]
description: by rajaraodv
author: "Milad E. Fahmy"
title: "Functional Programming In JavaScript — With Practical Examples (Part 1)"
created: "2021-08-15T19:54:05+02:00"
modified: "2021-08-15T19:54:05+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-react tag-functional-programming tag-programming tag-angularjs ">
<header class="post-full-header">
<h1 class="post-full-title">Functional Programming In JavaScript — With Practical Examples (Part 1)</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*U1TQD4tsM3JLZ-MfBH-vJA.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*U1TQD4tsM3JLZ-MfBH-vJA.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*U1TQD4tsM3JLZ-MfBH-vJA.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*U1TQD4tsM3JLZ-MfBH-vJA.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*U1TQD4tsM3JLZ-MfBH-vJA.jpeg" alt="Functional Programming In JavaScript — With Practical Examples (Part 1)">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by rajaraodv</p>
<h1 id="functional-programming-in-javascript-with-practical-examples-part-1-">Functional Programming In JavaScript — With Practical Examples (Part 1)</h1>
<p>Functional Programming(FP) can change the way you program for the better. But it’s hard to learn and many posts and tutorials don’t go into details like Monads, Applicative and so on and don’t seem to use practical examples to help us use powerful FP techniques on a daily basis. That’s why I thought of writing a post to make it easier to use FP techniques.</p>
<blockquote>Please Note: The emphasis in this blog is on <strong>WHY</strong> xyz feature is required than just <strong>WHAT</strong> xyz feature is.</blockquote>
<p><strong>In Part 1, you’ll learn Functional Programming basics, Currying, Pure Functions, “Fantasy-land” specs, “Functors”, “Monads”, “Maybe Monads” and “Either Monads” via couple of examples.</strong></p>
<h3 id="functional-programming">Functional Programming</h3>
<p>Functional Programming is a style of writing programs by simply composing a set of functions.</p>
<p>Essentially, FP asks us to wrap virtually everything in functions, write lots of small reusable functions and simply call them one after the other to get the result like: (<strong>func1.func2.func3</strong>) or in a compose fashion, like: <strong>func1(func2(func3()))</strong>.</p>
<p>But in order to actually write programs in this style, functions need to follow some rules and overcome some challenges like the ones mentioned below:</p>
<h4 id="the-fp-challenges-">The FP Challenges:</h4>
<p>If everything can be done by composing a set of functions..</p>
<ol>
<li>How can we handle if-else condition? (<strong>Hint: “Either” Monad</strong>)</li>
<li>How can we handle Null Exceptions (<strong>Hint: “Maybe” Monad</strong>)?</li>
<li>How to ensure functions are truly “reusable” and can be reused anywhere, (<strong>Hint:</strong> <strong>Pure functions,</strong> <strong>referential transparency</strong>)?</li>
<li>How to ensure the data we pass to it is unchanged so that we can reuse the data elsewhere(<strong>Hint:</strong> <strong>Pure functions, immutability</strong>)?</li>
<li>If a function is taking multiple values but chaining can only pass a single value, how can we still make it part of a chain (<strong>Hint:</strong> “<strong>currying” and “higher-order functions”</strong>)?</li>
<li>and more..&lt;add your question here&gt;.</li>
</ol>
<h4 id="the-fp-solution-">The FP Solution:</h4>
<p>In order to deal with all these challenges, fully Functional Programming languages like Haskell provides various tools and concepts from mathematics like “Monads”, “Functors” and so on out-of-the-box.</p>
<p>While JavaScript doesn’t provide many of the tools out-of-the-box, thankfully it has enough FP features that allows people to write libraries.</p>
<h3 id="fantasy-land-specs-and-fp-libraries">Fantasy-Land Specs And FP Libraries</h3>
<p>Libraries that want to provide features like Functors, Monads and so on, need to implement functions/classes that follow some specs in order to provide functionalities like they are in languages like Haskell.</p>
<p><a href="https://github.com/fantasyland/fantasy-land" rel="noopener">Fantasyland specs </a>is one of the prominent specs that explains how each JS functions/classes should behave.</p>
<p>The above picture shows all the specs and their dependencies. Specs are essentially laws and similar to “interfaces” in Java. From JS perspective, you can think of specs as “classes” or constructor functions that implement some methods like (<strong>map</strong>, <strong>of</strong>, <strong>chain</strong> and so on) according to the specification.</p>
<p>For example:</p>
<p>A JS class is a “Functor” if it implements a “map” method. And that map method must work as per spec (ps:This is simplified version and there are more rules).</p>
<p>Similarly, a JS class is an “Apply Functor” if it implements “map” and “ap” functions as per spec.</p>
<p>Similarly, a JS class is a “Monad” (aka Monad Functor), if implements requirements of “Functor”, “Apply”, “Applicative”, “Chain” and “Monad” itself (because of the dependency chain).</p>
<blockquote>Note: The dependency may look like inheritance but not necessarily. For example: Monad implements both “Applicative” and “Chain” specs (in addition to others).</blockquote>
<h4 id="fantasy-land-spec-compliant-libraries">Fantasy-Land Spec compliant Libraries</h4>
<p>There are several libraries that implement FL spec. For example: <a href="https://cwmyers.github.io/monet.js/" rel="noopener"><strong>monet.js,</strong></a><strong> <a href="https://github.com/cullophid/barely-functional" rel="noopener">barely-functional</a>, <a href="http://folktalejs.org/" rel="noopener">folktalejs</a>, <a href="https://github.com/ramda/ramda-fantasy" rel="noopener">ramda-fantasy</a> (based on Ramda), <a href="https://github.com/DrBoolean/immutable-ext" rel="noopener">immutable-ext</a> (based on ImmutableJS), <a href="https://github.com/Avaq/Fluture" rel="noopener">Fluture</a> and more.</strong></p>
<h3 id="what-libraries-should-i-use">What Libraries Should I Use?</h3>
<p>Libraries like <a href="https://github.com/lodash/lodash/wiki/FP-Guide" rel="noopener"><strong>lodash-fp</strong></a><strong>, <a href="http://ramdajs.com/" rel="noopener">ramdajs</a></strong>, only enable you to start writing in FP style. But they don’t provide functions to use key mathematical concepts like Monads, Functors, Foldables to actually solve real-world problems.</p>
<p>So, in addition to them you’ll have to use one of the libraries that follow fantasy-land spec. Some such libraries are:<strong> <a href="https://cwmyers.github.io/monet.js/" rel="noopener">monet.js,</a></strong><a href="https://cwmyers.github.io/monet.js/" rel="noopener"> </a><strong>barely-functional, <a href="http://folktalejs.org/" rel="noopener">folktalejs</a>, <a href="https://github.com/ramda/ramda-fantasy" rel="noopener">ramda-fantasy</a> (based on Ramda), <a href="https://github.com/DrBoolean/immutable-ext" rel="noopener">immutable-ext</a> (based on ImmutableJS), <a href="https://github.com/Avaq/Fluture" rel="noopener">Fluture</a> and more.</strong></p>
<blockquote>Note: I’m using <a href="http://ramdajs.com/" rel="noopener"><strong>ramdajs</strong></a> and <a href="https://github.com/ramda/ramda-fantasy" rel="noopener"><strong>ramda-fantasy</strong></a></blockquote>
<p>OK, now that we know the basics, Let’s see some practical examples and learn various FP features and techniques through those examples.</p>
<h3 id="example-1-dealing-with-null-checks">Example 1 — Dealing With Null Checks</h3>
<p><strong><em>Topics covered: Functors, Monads, Maybe Monad, Currying.</em></strong></p>
<p><strong>Use-case:</strong> We want to show different index webpage depending on the user’s “<strong>primary”</strong> <strong>language </strong>(inside user’s prefs, see below). And we need to write <strong>getUrlForUser </strong>that returns appropriate<strong> </strong>URL<strong> </strong>from the list of URLs(<strong>indexURLs</strong>) for the user’s (<strong>joeUser</strong>) <strong>primary</strong> <strong>language</strong>(“<strong>spanish”</strong>).</p>
<p><strong>The problem is: </strong>the primary language could be null. The user itself could be null (not logged in). The primary language might not be available in our list of indexURLs. So we’ll have to take care of lots of “nulls” or “undefined”.</p>
<h4 id="solution-imperative-vs-fp-">Solution (Imperative Vs FP):</h4>
<blockquote>PS: Don’t worry if the FP version looks hard to understand, I’ll cover them step-by-step later in this post.</blockquote>
<p>OK, Let’s first understand several FP concepts and techniques used in this solution.</p>
<h4 id="functors">Functors</h4>
<p>Any class(or construction function) or a datatype that stores a value and implements “map” method is called a “Functor”.</p>
<p>For example: An Array is a “Functor”. Because an Array can store values and has “map” method that allows us to map a function to the values it’s storing.</p><pre><code>const add1 = (a) =&gt; a+1;</code></pre><pre><code>let myArray = new Array(1, 2, 3, 4); //store values</code></pre><pre><code>myArray.map(add1) // -&gt; [2,3,4,5] //applies functions</code></pre>
<p>Let’s write our own Functor “MyFunctor”. It’s simply a JS class (constructor function) that stores some value and implements a “map” method. This “map” method applies the function to the stored value and then creates a new Myfunctor from the result and returns that new MyFunctor.</p>
<blockquote>PS: Functors also need to implement other specs (see <a href="https://github.com/fantasyland/fantasy-land" rel="noopener">Fantasyland specs</a>) in addition to “map” but I’m not going to cover them here.</blockquote>
<h4 id="monads">Monads</h4>
<p>Monads are also Functors, i.e. they have “<strong>map</strong>” method but implements more methods than just “map”. If you look at the spec dependency graph again, you’ll see that also need to implement various other features in different specs like: “<a href="https://github.com/fantasyland/fantasy-land#apply" rel="noopener">Apply</a>” (<strong>ap</strong> method), “<a href="https://github.com/fantasyland/fantasy-land#applicative" rel="noopener">Applicative</a>” (<strong>ap</strong> and <strong>of</strong> method), and “<a href="https://github.com/fantasyland/fantasy-land#chain" rel="noopener">Chain</a>” (<strong>chain</strong> method).</p>
<p><strong><em>Simplified Explanation:</em></strong><em> In JS, Monads are classes or constructor functions that store some data and implements “map”, “ap”, “of” and “chain” methods that do something with the stored data as per spec.</em></p>
<p>Below is a sample implementation so you get an idea of the internals of the Monad.</p>
<p>Now, the generic Monads are not typically used but more specific and more useful Monads like “Maybe Monad” or “Either Monad” are often used in FP programming. So, let’s take a look at “Maybe Monad”.</p>
<p><strong>“Maybe” Monad</strong></p>
<p>A “Maybe” Monad is a class that implements Monad spec. But the special thing about Monad is that it takes care of “null” or “undefined” values.</p>
<p><strong>Specifically, if the data stored is a null or undefined, then it’s “map” function doesn’t run the given function at all and there by avoiding any null or undefined issues</strong>. It is used in situations where we are dealing with Null values.</p>
<blockquote>Below code shows ramda-fantasy’s implementation of Maybe Monad. It creates an instance of one of the two different sub-classes, <strong>Just</strong> or <strong>Nothing,</strong> depending on the value (i.e. useful value V/s null/undefined respectively).</blockquote>
<blockquote>While both <strong>Just</strong> and <strong>Nothing</strong> has similar methods (map, orElse etc), Just’s actually does something but Nothing’s doesn’t do anything.</blockquote>
<blockquote><strong>Give special attention to “map” and “orElse” methods below</strong></blockquote>
<p>Let’s see how to use Maybe monad to deal with “null” checks.</p>
<p>Follow these steps:</p>
<ol>
<li>If there any object that might be null or have null properties, create a Monad object out of it.</li>
<li>Use some libraries like ramdajs, that are “Maybe-aware” to access value from w/in the Monad and work on it.</li>
<li>Provide a default value if the actual value happens to be null (i.e handle Null errors upfront).</li>
</ol>
<h3 id="currying-helps-dealing-with-global-data-and-multi-param-functions-">Currying — (Helps Dealing With Global Data And Multi-Param Functions)</h3>
<p>Topics covered: <strong>Pure functions</strong> and <strong>Composition</strong></p>
<p>If we want to chain a series of functions together like: func1.func2.func3 or (func1(func2(func3())), all these functions can only receive just one input parameter each. For example, if func2 takes two parameters func2(param1, param2), then we can’t chain it!</p>
<p>But the practically speaking, many functions take multiple parameters. So how to use them in composition? Solution: “Currying”.</p>
<p>Currying converts a function that takes multiple parameter into a function that takes a single parameter at a time. It wont run the function until all parameters are passed.</p>
<h4 id="in-addition-currying-can-also-be-used-in-situations-when-we-are-accessing-global-values-i-e-make-it-pure-">In addition, Currying can also be used in situations when we are accessing global values. i.e. make it “pure”.</h4>
<p>Let’s look at our solution again:</p>
<h3 id="example-2-handling-error-throwing-functions-and-exiting-immediately-after-an-error">Example 2— Handling Error Throwing Functions And Exiting Immediately After An Error</h3>
<p><strong>Topics Covered: “Either Monad”</strong></p>
<p>Maybe Monad is great if we have “default” values to replace Null errors. But what about functions that actually need to throw errors? And how to know which function threw the error when we chain multiple error-throwing functions (i.e. we want fast-failure)?</p>
<p>For example: If we have<strong> func1.func2.func3…</strong> and if <strong>func2</strong> threw an error, we should skip <strong>func3</strong> and other future functions and properly show error from <strong>func2</strong> so we can handle it.</p>
<h3 id="either-monad"><strong>Either Monad</strong></h3>
<p>Either Monads are great for dealing with multiple functions when they all can potentially throw error and want to quit immediately after an error so that we can pin-point where the error occurred.</p>
<p><strong>Use case: </strong>For example in the below imperative snippet, we are calculating “<strong>tax</strong>” and “<strong>discount</strong>” for <strong>items</strong> and ultimately displaying <strong>showTotalPrice</strong>.</p>
<p>Note that the “<strong>tax</strong>” function will throw error if the price is non-numeric. Similarly, “<strong>discount</strong>” function will throw error if price is non-numeric and it will also throw error if the item’s price is less than 10.</p>
<blockquote>So <strong>showTotalPrice</strong> has multiple error checks.</blockquote>
<p>Let’s see how <strong>showTotalPrice</strong> can be improved by using Either Monad and rewrite everything in FP style.</p>
<p>Either Monad provides two constructors: “Either.Left” and “Either.Right”. Think of them as subclasses of Either. <strong>Both “Left” and “Right” are Monads!</strong> <strong>The idea is to store errors/exceptions in Left and useful values in Right</strong>.</p>
<p>i.e. create an instance of Either.Left or Either.Right depending on the value. <strong>Once we do that we can run map, chain and so on on those values to compose them.</strong></p>
<blockquote>While both <strong>Left</strong> and <strong>Right</strong> provide “map”, “chain” and so on, <strong>Left</strong> constructor doesn’t do anything as it stored Errors. Where as the <strong>Right</strong> constructor implements all the functions as it contains actual result.</blockquote>
<p><strong>OK, Let’s see how to change our imperative example to FP</strong></p>
<p><strong>Step 1: </strong>Wrap return values with Left and Right</p>
<blockquote>Note: “Wrap” means create an instance of some Class. These functions internally call “new” so we don’t have to.</blockquote>
<p><strong>Step 2: </strong>Wrap the initial value in <strong>Right</strong> because it’s a valid value and so we can compose it.</p><pre><code>const getItemPrice = (item) =&amp;gt; Right(item.price);</code></pre>
<p><strong>Step 3:</strong> Create two functions, one to handle eventual error and another to handle result. And warp them in <strong>Either.either</strong> (this is from <a href="https://github.com/ramda/ramda-fantasy/blob/master/src/Either.js#L33" rel="noopener">ramda-fantasy.js api</a>).</p>
<blockquote><strong>Either.either</strong> takes 3 params. success handler, an error handler and an "Either" Monad. Either is curried. So we can just pass the handlers for now and pass the Either (3rd param) later.</blockquote>
<blockquote>Once Either.either receives all 3 params, it passes the 3rd param "Either" to the success handler or error handler depending of if the Either is "Right" or "Left" respectively.</blockquote><pre><code>const displayTotal = (total) =&gt; { console.log(‘Total Price: ‘ + total) };</code></pre><pre><code>const logError = (error) =&gt; { console.log(‘Error: ‘ + error.message); };</code></pre><pre><code>const eitherLogOrShow = Either.either(logError, displayTotal);</code></pre>
<p><strong>Step 4:</strong> Use “<strong>chain</strong>” method to compose multiple error throwing functions. Pass their result to Either.either (eitherLogOrShow) which will take care of passing the result to success handler or failure handler.</p><pre><code>const showTotalPrice = (item) =&gt; eitherLogOrShow(getItemPrice(item).chain(apply25PercDisc).chain(addCaliTax));</code></pre>
<p>Putting it all together:</p>
<p>Thank you for reading! If you liked the post please ? and share it on Twitter!??</p>
<p><strong>LATEST: </strong><a href="https://medium.com/@rajaraodv/functional-programming-in-js-with-practical-examples-part-2-429d2e8ccc9e#.r2mglxozr" rel="noopener"><em>Functional Programming In JS — With Practical Examples (Part 2)</em></a></p>
<h3 id="my-other-posts">My Other Posts</h3>
<h4 id="functional-programming-1">Functional Programming</h4>
<ol>
<li><a href="https://medium.com/@rajaraodv/javascript-is-turing-complete-explained-41a34287d263#.6t0b2w66p" rel="noopener"><em>JavaScript Is Turing Complete — Explained</em></a></li>
<li><a href="https://medium.com/@rajaraodv/functional-programming-in-js-with-practical-examples-part-1-87c2b0dbc276#.fbgrmoa7g" rel="noopener"><em>Functional Programming In JS — With Practical Examples (Part 1)</em></a></li>
<li><a href="https://medium.com/@rajaraodv/functional-programming-in-js-with-practical-examples-part-2-429d2e8ccc9e#.r2mglxozr" rel="noopener"><em>Functional Programming In JS — With Practical Examples (Part 2)</em></a></li>
</ol>
<h4 id="es6">ES6</h4>
<ol>
<li><a href="https://medium.com/@rajaraodv/5-javascript-bad-parts-that-are-fixed-in-es6-c7c45d44fd81#.7e2s6cghy" rel="noopener"><em>5 JavaScript “Bad” Parts That Are Fixed In ES6</em></a></li>
<li><a href="https://medium.com/@rajaraodv/is-class-in-es6-the-new-bad-part-6c4e6fe1ee65#.4hqgpj2uv" rel="noopener"><em>Is “Class” In ES6 The New “Bad” Part?</em></a></li>
</ol>
<h4 id="webpack">WebPack</h4>
<ol>
<li><a href="https://medium.com/@rajaraodv/webpack-the-confusing-parts-58712f8fcad9#.6ot6deo2b" rel="noopener"><em>Webpack — The Confusing Parts</em></a></li>
<li><a href="https://medium.com/@rajaraodv/webpack-hot-module-replacement-hmr-e756a726a07#.y667mx4lg" rel="noopener"><em>Webpack &amp; Hot Module Replacement [HMR]</em></a><em> (under-the-hood)</em></li>
<li><a href="https://medium.com/@rajaraodv/webpacks-hmr-react-hot-loader-the-missing-manual-232336dc0d96#.fbb1e7ehl" rel="noopener"><em>Webpack’s HMR And React-Hot-Loader — The Missing Manual</em></a></li>
</ol>
<h4 id="draft-js">Draft.js</h4>
<ol>
<li><a href="https://medium.com/@rajaraodv/why-draft-js-and-why-you-should-contribute-460c4a69e6c8#.jp1tsvsqc" rel="noopener"><em>Why Draft.js And Why You Should Contribute</em></a></li>
<li><a href="https://medium.com/@rajaraodv/how-draft-js-represents-rich-text-data-eeabb5f25cf2#.hh0ue85lo" rel="noopener"><em>How Draft.js Represents Rich Text Data</em></a></li>
</ol>
<h4 id="react-and-redux-">React And Redux :</h4>
<ol>
<li><a href="https://medium.com/@rajaraodv/step-by-step-guide-to-building-react-redux-apps-using-mocks-48ca0f47f9a#.s7zsgq3u1" rel="noopener"><em>Step by Step Guide To Building React Redux Apps</em></a></li>
<li><a href="https://medium.com/@rajaraodv/a-guide-for-building-a-react-redux-crud-app-7fe0b8943d0f#.g99gruhdz" rel="noopener"><em>A Guide For Building A React Redux CRUD App</em></a><em> (3-page app)</em></li>
<li><a href="https://medium.com/@rajaraodv/using-middlewares-in-react-redux-apps-f7c9652610c6#.oentrjqpj" rel="noopener"><em>Using Middlewares In React Redux Apps</em></a></li>
<li><a href="https://medium.com/@rajaraodv/adding-a-robust-form-validation-to-react-redux-apps-616ca240c124#.jq013tkr1" rel="noopener"><em>Adding A Robust Form Validation To React Redux Apps</em></a></li>
<li><a href="https://medium.com/@rajaraodv/securing-react-redux-apps-with-jwt-tokens-fcfe81356ea0#.xci6o9s6w" rel="noopener"><em>Securing React Redux Apps With JWT Tokens</em></a></li>
<li><a href="https://medium.com/@rajaraodv/handling-transactional-emails-in-react-redux-apps-8b1134748f76#.a24nenmnt" rel="noopener"><em>Handling Transactional Emails In React Redux Apps</em></a></li>
<li><a href="https://medium.com/@rajaraodv/the-anatomy-of-a-react-redux-app-759282368c5a#.7wwjs8eqo" rel="noopener"><em>The Anatomy Of A React Redux App</em></a></li>
</ol>
<h4 id="salesforce">Salesforce</h4>
<ol>
<li><a href="https://medium.com/@rajaraodv/developing-react-redux-apps-in-salesforce-s-visualforce-3ad7be560d1c#.f6bao6mtu" rel="noopener"><em>Developing React Redux Apps In Salesforce’s Visualforce</em></a></li>
</ol>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
