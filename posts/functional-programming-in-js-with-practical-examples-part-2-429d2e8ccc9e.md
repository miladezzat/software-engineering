---
card: "https://cdn-media-1.freecodecamp.org/images/1*U1TQD4tsM3JLZ-MfBH-vJA.jpeg"
tags: [JavaScript]
description: by rajaraodv
author: "Milad E. Fahmy"
title: "Functional Programming In JavaScript — With Practical Examples (Part 2)"
created: "2021-08-15T19:53:59+02:00"
modified: "2021-08-15T19:53:59+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-react tag-functional-programming tag-programming tag-tech ">
<header class="post-full-header">
<h1 class="post-full-title">Functional Programming In JavaScript — With Practical Examples (Part 2)</h1>
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
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*U1TQD4tsM3JLZ-MfBH-vJA.jpeg" alt="Functional Programming In JavaScript — With Practical Examples (Part 2)">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by rajaraodv</p>
<h1 id="functional-programming-in-javascript-with-practical-examples-part-2-">Functional Programming In JavaScript — With Practical Examples (Part 2)</h1>
<p><a href="https://medium.com/@rajaraodv/functional-programming-in-js-with-practical-examples-part-1-87c2b0dbc276#.8dao66cag" rel="noopener"><strong>In Part 1</strong></a>, we talked through: Functional Programming basics, Currying, Pure Functions, “Fantasy-land” specs,<strong> </strong>“Functors”, “Monads”, “Maybe Monads” and “Either Monads” via couple of examples.</p>
<p><strong>In this part, we’ll cover: Applicative, curryN function and “Validation Applicative”.</strong></p>
<blockquote>Thanks to FP gurus <a href="undefined" rel="noopener">Brian Lonsdorf</a>, <a href="undefined" rel="noopener">keithalexander</a> and others for reviewing <em>??</em></blockquote>
<h3 id="example-3-assigning-values-to-potentially-null-objects"><em>Example 3— Assigning Values To Potentially Null Objects</em></h3>
<p><em><strong><em>FP Concepts Used: “Applicative”</em></strong></em></p>
<p><em><strong>Use Case:</strong> Let’s say we want to give discount to the user if the user is logged in and if we are running promotion (i.e. discount exists).</em></p>
<p><em>Let’s say we are using the <strong>applyDiscount</strong> method below. As you can imagine, applyDiscount might throw null errors if either the user (the left-hand side or the discount (the right-hand side) is null.</em></p>
<p><em><code>//Adds discount to the user object if BOTH user and discount exists.</code></em><br><em><code>//Throws null errors if either user or discount is nullconst applyDiscount = (user, discount) =&gt; { &nbsp; &nbsp;let userClone = clone(user);// use some lib to make a copy &nbsp;</code></em><br><em><code> &nbsp; <strong> userClone.discount = discount.code;</strong> &nbsp; return userClone;</code></em><br><em><code>}</code></em></p>
<p><em>Let’s see how we can solve this using “applicative”.</em></p>
<p><em><strong>Applicative:</strong></em></p>
<p><em>Any Class that have a method “ap” and implements the Applicative spec is called an Applicative. Applicatives can be used in functions that are dealing with null values on both left-hand-side(user) and right-hand-side(discount) of the equation.</em></p>
<p><em>It turns out “Maybe” Monads (and every Monads) also implement “ap” spec and hence are also “Applicatives” and not just Monads. So we can use “Maybe” Monads to deal with null at function level.</em></p>
<p><em>Let’s see how we can solve make applyDiscount work using Maybe used as an “applicative”.</em></p>
<h4 id="step-1-wrap-our-potential-null-values-in-maybe-monads"><em><strong>Step 1:</strong> wrap our potential null values in Maybe Monads</em></h4>
<p><em><code>const maybeUser = Maybe(user);</code></em><br><em><code>const maybeDiscount = Maybe(discount);</code></em></p>
<h4 id="step-2-rewrite-the-function-and-curry-it-so-we-can-pass-one-param-at-a-time-"><em><strong>Step 2:</strong> Rewrite the function and curry it so we can pass one param at a time.</em></h4>
<p><em><code>//Rewrite the function and curry it so we can </code></em><br><em><code>//pass one param at a time</code></em><br><em><code>var applyDiscount = curry(function(user, discount) { &nbsp; &nbsp; </code></em><br><em><code> &nbsp; &nbsp; &nbsp; user.discount = discount.code; &nbsp; &nbsp; </code></em><br><em><code> &nbsp; &nbsp; &nbsp; return user; </code></em><br><em><code>});</code></em></p>
<h4 id="step-3-let-s-pass-the-first-argument-maybeuser-to-applydiscount-via-map-"><em><strong>Step 3:</strong> let’s pass the first argument(maybeUser) to applyDiscount via “map”.</em></h4>
<p><em><code>//pass the first argument to applyDiscount via "map"</code></em><br><em><code><strong>const maybeApplyDiscountFunc = maybeUser.map(applyDiscount);</strong>//Note, since applyDiscount is "curried", and "map" will only pass 1 parameter, the return result (<strong>maybeApplyDiscountFunc</strong>) will be a Maybe wrapped "applyDiscount" function that now has maybeUser(1st param) in it's closure.<strong>In other words, we now have a function wrapped in a Monad!</strong></code></em></p>
<h4 id="step-4-deal-with-maybeapplydiscountfunc"><em><strong>Step 4: Deal With </strong>maybeApplyDiscountFunc</em></h4>
<p><em>At this stage maybeApplyDiscountFunc can be:</em><br><em>1. If user actually exists, then maybeApplyDiscountFunc is a function wrapped inside a Maybe.</em><br><em>2. If the user does not exist, then maybeApplyDiscountFunc will be “Nothing” (subclass of Maybe)</em></p>
<p><em>If user doesn’t exist, then “Nothing” is returned and any further interaction with this are ignore completely. So if we pass 2nd argument, nothing happens. And also no Null errors are thrown.</em></p>
<p><em>But in the case where the user actually exists, we can try to pass the 2nd argument to maybeApplyDiscountFunc via “map” to execute the function like below:</em></p>
<p><em><code>maybeDiscount.map(maybeApplyDiscountFunc)! // PROBLEM!</code></em></p>
<p><em><strong>Uh oh! “map” doesn’t know how to run function(</strong>maybeApplyDiscountFunc)<strong> when the function itself is inside a MayBe!</strong></em></p>
<p><em>That’s why we need a different interface to deal with this scenario. It turns out that’s “ap”!</em></p>
<p><em><strong>Step5:</strong> Let’s recap “ap” function. “ap” method takes another Maybe monad and passes/applies the function it’s currently storing to that Maybe.</em></p>
<p><em>So we can simply apply (“ap”) maybeApplyDiscountFunc to maybeDiscount instead of using “map” like below and it’ll work like a charm!</em></p>
<p><em><code>maybeApplyDiscountFunc.<strong>ap</strong>(maybeDiscount)//Internally it is doing the following because applyDiscount is store in the this.val of maybeApplyDiscountFunc wrapper:</code></em><br><em><code>maybeDiscount.map(applyDiscount)//Now, if maybeDiscount actually has the discount, then the function is is run.If maybeDiscount is Null, then nothing happens.</code></em></p>
<blockquote><em>FYI: Apparently there is a change in the FL spec, The old version has (eg): `Just(f).ap(Just(x))` (where `f` is a function and `x` is a value) but the new version would have you write `Just(x).ap(Just(f))`But the implementations mostly haven’t changed yet. Thanks <a href="undefined" rel="noopener">keithalexander</a></em></blockquote>
<p><em>To summarize, if you have a function that deals with multiple parameters that might all be null, you curry it first, then put it inside a Maybe. Further, also put all params in a Maybe and then use “ap” to run the function.</em></p>
<h3 id="curryn-function"><em>curryN function</em></h3>
<p><em>We are familiar with “curry”. It simply converts a function that takes multiple arguments to take them one-by-one.</em></p>
<p><em><code><strong>//Curry Example:</strong></code></em><br><em><code>const add = (a, b) =&gt;a+b;const curriedAdd = R.curry(add);const add10 = curriedAdd(10);//pass the 1st argument. Returns a function that takes 2nd (b) parameter.//run function by passing 2nd argument</code></em><br><em><code>add10(2) // -&gt; 12 //internally runs "add" with 10 and 2.</code></em></p>
<p><em>But instead of adding just two numbers, what if the <strong>add</strong> function can sum up all the numbers passed to it as an argument?</em></p>
<p><em><code>const add = (...args) =&gt; R.sum(args); //sum all the numbers in args</code></em></p>
<p><em>We can still curry it by limiting number of args using <strong>curryN</strong> like below:</em></p>
<p><em><code><strong>//curryN example</strong></code></em><br><em><code>const add = (...args) =&gt; R.sum(args);//CurryN Example:</code></em><br><em><code>const add = (...args) =&gt; R.sum(args);const add3Numbers = R.<strong>curryN</strong>(3, add);</code></em><br><em><code>const add5Numbers = R.<strong>curryN</strong>(5, add);</code></em><br><em><code>const add10Numbers = R.<strong>curryN</strong>(10, add);add3Numbers(1,2,3) // 6</code></em><br><em><code>add3Numbers(1) // returns a function that takes 2 more params.</code></em><br><em><code>add3Numbers(1, 2) // returns a function that take 1 more param.</code></em></p>
<h4 id="using-curryn-to-wait-for-number-of-function-calls"><em>Using “curryN” to wait for number of function calls</em></h4>
<p><em>Let’s say we want to write a function that only logs if we call it 3 times (and ignore the 1st and 2nd call). Something like below:</em></p>
<p><em><code>//impure</code></em><br><em><code>let counter = 0;</code></em><br><em><code>const logAfter3Calls = () =&gt; {</code></em><br><em><code> if(++counter == 3)</code></em><br><em><code> &nbsp; console.log('called me 3 times');</code></em><br><em><code>}logAfter3Calls() // Nothing happens</code></em><br><em><code>logAfter3Calls() // Nothing happens</code></em><br><em><code>logAfter3Calls() // 'called me 3 times'</code></em></p>
<p><em>We can simulate that using curryN like below.</em></p>
<p><em><code>//Pure</code></em><br><em><code>const log = () =&gt; {</code></em><br><em><code> &nbsp; console.log('called me 3 times');</code></em><br><em><code>}<strong>const logAfter3Calls = R.curryN(3, log);</strong>//call</code></em><br><em><code><strong>logAfter3Calls('')('')('')</strong>//'called me 3 times'//Note: We are passing '' to satisfy CurryN that we are passing some parameter.</code></em></p>
<blockquote><em><strong>Note: We’ll be using this technique in the Applicative validation.</strong></em></blockquote>
<h3 id="example-4-collecting-and-displaying-multiple-errors"><em>Example 4— Collecting And Displaying Multiple Errors</em></h3>
<p><em>Topics covered: <strong>Validation (aka “Validation Functor”, “Validation Applicative”, “Validation Monad”)</strong>.</em></p>
<blockquote><em><strong>Validations</strong> are commonly referred as <strong>Validation Applicative</strong> because it is commonly used for validation using it’s “ap”(apply) function.</em></blockquote>
<p><em><strong>Validations</strong> are similar to <strong>Either Monads </strong>and used to work with composing multiple error-throwing functions. But unlike with Either Monad, where we typically use its “chain” method to compose, in Validation Monads, we typically use “ap” method to compose. And unlike either’s “chain” method, where we only collect the 1st error, <strong>“ap” method, especially in Validation Monads allows us to collect all the errors in an Array</strong>.</em></p>
<p><em>They are typically used in form validation where we may want to show all the errors at the same time.</em></p>
<p><em><strong>Use case:</strong> We have a sign up form that validates username, password and email using 3 functions(isUsernameValid, isPwdLengthCorrect and ieEmailValid. We need to show all 1, 2 or 3 errors if they all occur at the same time.</em></p>
<figcaption>In order to show multiple errors, use “Validation” Functor</figcaption>
</figure>
<p><em>OK, let’s see how to implement it using “Validation Applicative”.</em></p>
<blockquote><em>We’ll use data.validation lib from <a href="https://github.com/folktale/data.validation" rel="noopener">folktalejs</a> because ramda-fantasy doesn’t implement it yet.</em></blockquote>
<p><em>Similar to “Either” Monad, it has two constructors: <strong>Success</strong> and <strong>Failure</strong>. These are like subclasses that each implement Either’s specs.</em></p>
<p><em><strong>Step1: </strong>In order to use Validation, all we need to do is to wrap valid values and errors inside <strong>Success</strong> and <strong>Failure</strong> constructors (i.e. create instances of those classes).</em></p>
<p><em><code>const Validation = require('data.validation') //from <a href="https://github.com/folktale/data.validation" rel="noopener">folktalejs</a></code></em><br><em><code>const Success = Validation.Success</code></em><br><em><code>const Failure = Validation.Failure</code></em><br><em><code>const R = require('ramda');<strong>//Instead Of:</strong></code></em><br><em><code>function isUsernameValid(a) {</code></em><br><em><code> &nbsp; &nbsp;return /^(0|[1-9][0-9]*)$/.test(a) ? </code></em><br><em><code> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ["Username can't be a number"] : a</code></em><br><em><code>}<strong>//Use:</strong></code></em><br><em><code>function isUsernameValid(a) {</code></em><br><em><code> &nbsp; &nbsp;return /^(0|[1-9][0-9]*)$/.test(a) ? </code></em><br><em><code> &nbsp; &nbsp; &nbsp; &nbsp; <strong>Failure</strong>(["Username can't be a number"]) : <strong>Success</strong>(a)</code></em><br><em><code>}</code></em></p>
<blockquote><em><strong>Repeat the process for ALL error throwing validation functions.</strong></em></blockquote>
<p><em><strong>Step 2:</strong> Create a dummy function to hold validation success.</em></p>
<p><em><code>const returnSuccess = () =&gt; 'success';//simply returns success</code></em></p>
<p><em><strong>Step 3: Use curryN to repeatedly apply “ap”</strong></em></p>
<p><em>The problem with “ap” is that the left-hand side should be a functor (or a monad) containing <strong>function</strong>.</em></p>
<p><em>For example, let’s say we want to repeatedly apply “ap” like below. It will only work if monad1 contains a function. And the result of monad1.ap(monad2) i.e. <strong>resultingMonad</strong> is also a monad with a function so that we can “ap” to monad3.</em></p>
<p><em><code><strong>let finalResult = monad1.ap(monad2).ap(monad3)</strong>//Can be rewritten as:</code></em><br><em><code>let resultingMonad = monad1.ap(monad2)</code></em><br><em><code>let <strong>finalResult</strong> = resultingMonad.ap(monad3)<strong>//will only work if: monad1 has a function and monad1.ap(monad2) results in another monad (resultingMonad) with a function</strong></code></em></p>
<blockquote><em>Generally speaking, we need 2 monads that has functions in order to apply “ap” twice.</em></blockquote>
<p><em>In our case, we have 3 functions that we need to apply.</em></p>
<p><em>Let’s say we did something like below.</em></p>
<p><em><code>Success(returnSuccess)</code></em><br><em><code> &nbsp; &nbsp; &nbsp; &nbsp;.ap(isUsernameValid(username)) //works</code></em><br><em><code> &nbsp; &nbsp; &nbsp; &nbsp;.ap(isPwdLengthCorrect(pwd))//wont work</code></em><br><em><code> &nbsp; &nbsp; &nbsp; &nbsp;.ap(ieEmailValid(email))//wont work</code></em></p>
<p><em>The above won’t work because Success(returnSuccess).ap(isUsernameValid(username)) will result in a value. And we can no longer continue to do “ap” on 2nd and 3rd function.</em></p>
<p><em>Enter curryN.</em></p>
<p><em>We can use curryN to keep returning function until it is called “N” number of times.</em></p>
<p><em>So we can simply do:</em></p>
<p><em><code>//3 coz we are calling "ap" 3 times.</code></em><br><em><code>let success = R.curryN(3, returnSuccess);</code></em></p>
<p><em>Now, the curried <strong>success keeps returning function 3 times.</strong></em></p>
<p><em><code>function validateForm(username, pwd, email) {</code></em><br><em><code> &nbsp; &nbsp;//3 coz we are calling "ap" 3 times.</code></em><br><em><code> &nbsp; &nbsp;let success = R.curryN(3, returnSuccess); &nbsp; &nbsp;return Success(success)// default; used for 3 "ap"s</code></em><br><em><code> &nbsp; &nbsp; &nbsp; &nbsp;.ap(isUsernameValid(username))</code></em><br><em><code> &nbsp; &nbsp; &nbsp; &nbsp;.ap(isPwdLengthCorrect(pwd))</code></em><br><em><code> &nbsp; &nbsp; &nbsp; &nbsp;.ap(ieEmailValid(email))</code></em><br><em><code>}</code></em></p>
<p><em>Putting it all together:</em></p>
<p><em><strong>If you liked the post by clicking on the ? it below and sharing it on Twitter! Thanks for reading! </strong>??</em></p>
<h3 id="my-other-posts"><em>My Other Posts</em></h3>
<p><em><strong>LATEST: </strong><a href="https://medium.com/@rajaraodv/the-inner-workings-of-the-browser-for-javascript-web-developers-course-d26f11270f41" rel="noopener"><em>The Inner workings of the Browser — for JavaScript &amp; Web Developers </em></a><em><strong>Use code: INNER15 and get 50% off!</strong></em></em></p>
<h4 id="functional-programming"><em>Functional Programming</em></h4>
<ol>
<li><em><a href="https://medium.com/@rajaraodv/javascript-is-turing-complete-explained-41a34287d263#.6t0b2w66p" rel="noopener"><em>JavaScript Is Turing Complete — Explained</em></a></em></li>
<li><em><a href="https://medium.com/@rajaraodv/functional-programming-in-js-with-practical-examples-part-1-87c2b0dbc276#.fbgrmoa7g" rel="noopener"><em>Functional Programming In JS — With Practical Examples (Part 1)</em></a></em></li>
<li><em><a href="https://medium.com/@rajaraodv/functional-programming-in-js-with-practical-examples-part-2-429d2e8ccc9e#.mmpv20wsv" rel="noopener"><em>Functional Programming In JS — With Practical Examples (Part 2)</em></a></em></li>
</ol>
<h4 id="es6"><em>ES6</em></h4>
<ol>
<li><em><a href="https://medium.com/@rajaraodv/5-javascript-bad-parts-that-are-fixed-in-es6-c7c45d44fd81#.7e2s6cghy" rel="noopener"><em>5 JavaScript “Bad” Parts That Are Fixed In ES6</em></a></em></li>
<li><em><a href="https://medium.com/@rajaraodv/is-class-in-es6-the-new-bad-part-6c4e6fe1ee65#.4hqgpj2uv" rel="noopener"><em>Is “Class” In ES6 The New “Bad” Part?</em></a></em></li>
</ol>
<h4 id="webpack"><em>WebPack</em></h4>
<ol>
<li><em><a href="https://medium.com/@rajaraodv/webpack-the-confusing-parts-58712f8fcad9#.6ot6deo2b" rel="noopener"><em>Webpack — The Confusing Parts</em></a></em></li>
<li><em><a href="https://medium.com/@rajaraodv/webpack-hot-module-replacement-hmr-e756a726a07#.y667mx4lg" rel="noopener"><em>Webpack &amp; Hot Module Replacement [HMR]</em></a><em> (under-the-hood)</em></em></li>
<li><em><a href="https://medium.com/@rajaraodv/webpacks-hmr-react-hot-loader-the-missing-manual-232336dc0d96#.fbb1e7ehl" rel="noopener"><em>Webpack’s HMR And React-Hot-Loader — The Missing Manual</em></a></em></li>
</ol>
<h4 id="draft-js"><em>Draft.js</em></h4>
<ol>
<li><em><a href="https://medium.com/@rajaraodv/why-draft-js-and-why-you-should-contribute-460c4a69e6c8#.jp1tsvsqc" rel="noopener"><em>Why Draft.js And Why You Should Contribute</em></a></em></li>
<li><em><a href="https://medium.com/@rajaraodv/how-draft-js-represents-rich-text-data-eeabb5f25cf2#.hh0ue85lo" rel="noopener"><em>How Draft.js Represents Rich Text Data</em></a></em></li>
</ol>
<h4 id="react-and-redux-"><em>React And Redux :</em></h4>
<ol>
<li><em><a href="https://medium.com/@rajaraodv/step-by-step-guide-to-building-react-redux-apps-using-mocks-48ca0f47f9a#.s7zsgq3u1" rel="noopener"><em>Step by Step Guide To Building React Redux Apps</em></a></em></li>
<li><em><a href="https://medium.com/@rajaraodv/a-guide-for-building-a-react-redux-crud-app-7fe0b8943d0f#.g99gruhdz" rel="noopener"><em>A Guide For Building A React Redux CRUD App</em></a><em> (3-page app)</em></em></li>
<li><em><a href="https://medium.com/@rajaraodv/using-middlewares-in-react-redux-apps-f7c9652610c6#.oentrjqpj" rel="noopener"><em>Using Middlewares In React Redux Apps</em></a></em></li>
<li><em><a href="https://medium.com/@rajaraodv/adding-a-robust-form-validation-to-react-redux-apps-616ca240c124#.jq013tkr1" rel="noopener"><em>Adding A Robust Form Validation To React Redux Apps</em></a></em></li>
<li><em><a href="https://medium.com/@rajaraodv/securing-react-redux-apps-with-jwt-tokens-fcfe81356ea0#.xci6o9s6w" rel="noopener"><em>Securing React Redux Apps With JWT Tokens</em></a></em></li>
<li><em><a href="https://medium.com/@rajaraodv/handling-transactional-emails-in-react-redux-apps-8b1134748f76#.a24nenmnt" rel="noopener"><em>Handling Transactional Emails In React Redux Apps</em></a></em></li>
<li><em><a href="https://medium.com/@rajaraodv/the-anatomy-of-a-react-redux-app-759282368c5a#.7wwjs8eqo" rel="noopener"><em>The Anatomy Of A React Redux App</em></a></em></li>
</ol>
<h4 id="salesforce"><em>Salesforce</em></h4>
<ol>
<li><em><a href="https://medium.com/@rajaraodv/developing-react-redux-apps-in-salesforce-s-visualforce-3ad7be560d1c#.f6bao6mtu" rel="noopener"><em>Developing React Redux Apps In Salesforce’s Visualforce</em></a></em></li>
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
