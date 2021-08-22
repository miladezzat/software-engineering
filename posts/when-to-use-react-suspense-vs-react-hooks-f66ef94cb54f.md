---
card: "https://cdn-media-1.freecodecamp.org/images/1*7vvZM3wS9aUoDvyqt3yR9Q.png"
tags: [Functional Programming]
description: Monads and Applicative Functors are extensively used in funct
author: "Milad E. Fahmy"
title: "When to use React Suspense vs React Hooks"
created: "2021-08-15T19:34:50+02:00"
modified: "2021-08-15T19:34:50+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-functional-programming tag-javascript tag-react tag-tech tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">When to use React Suspense vs React Hooks</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*7vvZM3wS9aUoDvyqt3yR9Q.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*7vvZM3wS9aUoDvyqt3yR9Q.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*7vvZM3wS9aUoDvyqt3yR9Q.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*7vvZM3wS9aUoDvyqt3yR9Q.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*7vvZM3wS9aUoDvyqt3yR9Q.png" alt="When to use React Suspense vs React Hooks">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<h4 id="react-suspense-is-to-a-monad-as-hooks-are-to-applicative-notation">React Suspense is to a Monad as Hooks are to Applicative Notation</h4>
<p>Monads and Applicative Functors are extensively used in functional programming. There is a relationship between them and React Suspense for Data Fetching and React Hooks APIs. This is a quick and simple introduction to Monads and Applicatives along with a description of their similarities.</p>
<p>The post is about future React Suspense for Data Fetching, not about recently released React Suspense for Code Splitting (<code>React.Suspense</code> and <code>React.lazy</code>) .</p>
<h4 id="monad-do-notation">Monad do-notation</h4>
<p>The React framework approach encourages developers to use functional programming techniques. At least component render functions should not have observable side effects. JavaScript has no way to ensure this, but there are programming languages which can. For example, Haskell doesn’t accept side effects at all.</p>
<p>Pure functions make the code modular, predictable and easier to verify. But they also significantly increase verbosity. Here is a statement from <a href="https://en.wikipedia.org/wiki/Philip_Wadler" rel="noopener">Phil Walder</a>’s <a href="https://homepages.inf.ed.ac.uk/wadler/papers/marktoberdorf/baastad.pdf" rel="noopener">Monads for functional programming</a>(1995) tutorial:</p>
<blockquote>It is with regard to modularity that explicit data flow becomes both a blessing and a curse. On the one hand, it is the ultimate in modularity. All data in and all data out are rendered manifest and accessible, providing a maximum of flexibility. On the other hand, it is the nadir of modularity. The essence of an algorithm can become buried under the plumbing required to carry data from its point of creation to its point of use.</blockquote>
<p>Monads solve this problem for Haskell. And Suspense/Hooks solve the same problem in React.</p>
<p>So what is a Monad? It is a simple abstract interface which has two functions, let’s call them <code>of</code> and <code>chain</code>.</p>
<ul>
<li><code>of</code> — takes any value and returns some monadic (effectful) value</li>
<li><code>chain</code> — takes an effectful value and a function from any value to an effectful one and returns another effectful value</li>
</ul>
<p>The effectful values there may encapsulate any concrete implementation-specific information. There are no requirements what exactly it should be, it is some opaque data. The interface’s concrete implementations should follow a set of laws, and this is it.</p>
<p>There is nothing to say more about monads since they are abstract. They don’t necessarily store anything, wrap or unwrap anything or even chain anything.</p>
<p>But why do we need this if it is so abstract and defines almost nothing? The interface provides an abstract mean to compose computations with side effects.</p>
<p>If you write code in JavaScript, you may wonder now. You’ve already composed a lot of computations with side effects without seeing any Monad. But in fact, you can consider you’ve already used them there.</p>
<p>In computer science, Monads first appeared for studying side effects in imperative languages. They are a tool to embed imperative worlds into a pure math world for further studying.</p>
<p>This way if you want to convert your imperative program into math formulas representing it, doing this with Monad expressions would be the simplest and the most straightforward way. It is so straightforward what you don’t even need to do it manually, there are tools that do it for you.</p>
<p>Haskell has a syntax sugar called do-notation exactly for this. This makes writing imperative programs in Haskell possible. There is a special tool in its compiler. It converts such imperative programs into a Monadic pure Haskell expressions. The expressions are close to math you see in textbooks.</p>
<p>JavaScript is an imperative language. We can consider any imperative code to be a do-notation already. But unlike the one in Haskell’s, it is not abstract. It works only for built-in side effects. There is no way to add support of any new one except extending the language.</p>
<p>There are such extensions, namely generators, async and async generator functions. JavaScipt JIT compiler converts async and generator functions into concrete built-in API calls. Haskell doesn’t need such extensions. Its compiler converts do-notation into abstract Monads interface function calls.</p>
<p>Here is an example of how async functions simplify sources. This shows again why we need to bother having a syntax for effects.</p>
<figcaption>from <a href="http://www.async-await.xyz" rel="noopener" target="_blank" title="">www.async-await.xyz</a> by Wassim Chegham (<a href="https://twitter.com/@manekinekko" rel="noopener" target="_blank" title="">@manekinekko</a>)</figcaption>
</figure>
<p>For this post, we need only two JavaScript built-in effects. Let’s call them Mutation and Exception. They have clear meanings. Mutations allow changing values of some references. JavaScript has the Exceptions effect embedded using <code>throw</code>/ <code>try-catch</code> statements.</p>
<p>We can convert some effects into others. This way we can write async code using Generators.</p>
<p>This conversion trick can be applied to other effects too. And apparently, just Mutation and Exception are enough to get any other effect. This means we can turn any plain function into an abstract do-notation already. And this is exactly what Suspense does.</p>
<p>When the code encounters some effectful operation and requires suspension it throws an exception. It contains some details (for example a Promise object). One of its callers catches the exception, waits while the promise in the argument is settled, stores the resulting value in a cache, and re-runs the effectful function from the beginning.</p>
<p>After the Promise is resolved the engine calls the function again. The execution goes from its start, and when it encounters the same operations it returns its value from the cache. It doesn’t throw an exception and continues execution until the next suspension request or the function’s exit. If the function doesn’t have any other side effects its execution should go the same paths and all pure expressions are recalculated producing the same values.</p>
<p>Let’s re-implement Suspense. Unlike React, this one works with the abstract Monads interface. For simplicity, my implementation also hides a resource cache. Instead, the runner function counts invoked effects and uses the current counter value as a key for the internal cache. Here is the runner for the abstract interface:</p><pre><code class="language-js">/** effectful expression throws this object if it requires suspension */
const token = {};
/** Pointer to mutable data used to record effectful computations */
let context;
/** Runs `thunk()` as an effectful expression with `of` and `chain` as Monad's definition */
const run = (of, chain) =&gt; thunk =&gt; {
/** here it caches effects requests */
const trace = [];
const ctx = {trace};
return step();
function step() {
const savedContext = context;
ctx.pos = 0;
try {
context = ctx;
return of(thunk());
} catch(e) {
/** re-throwing other exceptions */
if (e !== token)
throw e;
const {pos} = ctx;
return chain(ctx.effect,
(value) =&gt; {
trace.length = pos;
/* recording the resolved value */
trace[pos] = value;
ctx.pos = pos + 1;
/** replay */
return step(value);
})
} finally {
context = savedContext;
}
}
}
/** marks effectful expression */
const M = eff =&gt; {
/* if the execution is in a replay stage the value will be cached */
if (context.pos &lt; context.trace.length)
return context.trace[context.pos++];
/* saving the expression to resolve in `run` */
context.effect = eff;
throw token;
}</code></pre>
<p>Now let’s add a concrete Async effects implementation. Promises, unfortunately, aren’t exactly monads since one Monad law doesn’t hold for them, and it is a source of subtle problems, but they are still fine for our do-notation to work.</p>
<p>Here is concrete Async effect implementation:</p><pre><code class="language-js">const runPromise = run(
v =&gt; Promise.resolve(v),
(arg, f) =&gt; arg.then(f));</code></pre>
<p>And here’s a simple example, it waits for delayed values before rendering proceeds:</p>
<p>The sandbox also contains <code>Component</code> wrapper. It turns an effectful functional component into a React component. It simply adds <code>chain</code> callback and updates the state accordingly. This version doesn’t have a fallback on threshold feature yet, but the last example here does have it.</p>
<p>The runner is abstract, so we can apply it for something else. Let’s try this for the <code>useState</code> hook. It is a Continuation monad, not a State monad as its name may suggest.</p>
<p>Effectful value here is a function which takes a callback as an argument. This callback is called when the runner has some value to pass further. For example when the callback returned from <code>useState</code> is called.</p>
<p>Here, for simplicity, I use single callback continuations. Promises have one more continuation for failure propagation.</p><pre><code class="language-js">const runCont = run(
value =&gt; cont =&gt; cont(value),
(arg, next) =&gt; cont =&gt; arg(value =&gt; next(value)(cont)));
const useState = initial =&gt;
M(cont =&gt;
cont([initial, function next(value) { cont([value,next]); }]));</code></pre>
<p>And here is a working usage example, with most of “kit.js” copy-pasted, except the monad’s definition.</p>
<p>Unfortunately, this is not exactly the <code>useState</code> hook from React yet, and the next section shows why.</p>
<h4 id="applicative-do-notation">Applicative do-notation</h4>
<p>There is another extension for do-notation in Haskell. It targets not only Monad abstract interface calls but also calls of Applicative Functors abstract interface.</p>
<p>Applicative interfaces shares the <code>of</code> function with Monads and there is another function, let’s call it <code>join</code>. It takes an array of effectful values and returns a single effectful value resolving to an array. The resulting array contains all the values to which each element of the argument array was resolved.</p>
<p>I use a different one from Haskell’s interface. Both are equal though — it is simple to convert Haskell’s interface into the one used here and back. I do this because this basis is much simpler to use in JavaScript, it doesn’t need any higher-order functions, and there is already its instance in the standard runtime.</p>
<p>In Haskell and in JavaScript any Monad is immediately an Applicative Functor. This means we don’t need to write a concrete implementation of Applicative interface, we can generate it automatically.</p>
<p>If there is a default implementation, why do we need Applicative Functors? There are two reasons. The first one is not all Applicative Functors are Monads, so there is no <code>chain</code> method from which we can generate <code>join</code>. Another reason is, even if there is <code>chain</code>, custom <code>join</code> implementation can do the same thing in a different way, probably more efficiently. For example, fetching resources in parallel rather than sequentially.</p>
<p>There is an instance of this interface for Promises in the standard runtime. It is <code>Promise.all</code>(ignoring some details here for simplicity again).</p>
<p>Let’s now return to the state example. What if we add another counter in the component?</p>
<p>The second counter now resets its value when the first one is incremented. It is not how Hooks are supposed to work. Both counters should keep their values and work in parallel.</p>
<p>This happens because each continuation invocation erases everything after it in the code. When the first counter changes its value the whole next continuation is re-started from the beginning. And there, the second counter value is 0 again.</p>
<p>In the <a href="https://medium.com/dailyjs/react-suspense-as-a-monad-notation-and-hooks-as-an-applicative-notation-f66ef94cb54f#fae1" rel="noopener">run function implementation</a>, the invalidation happens at line 26 — <code>trace.length = pos</code> — this removes all the memorized values after the current one (at <code>pos</code>). Instead, we could try to diff/patch the trace instead. It would be an instance of Adaptive Monad used for incremental computations. MobX and similar libraries are very similar to this.</p>
<p>If we invoke effectful operations only from a function’s top level, there are no branches or loops. Everything will be merged well overwriting the values on the corresponding positions, and this is exactly what Hooks do. Try to remove the line in the code sandbox for two counters above.</p>
<h4 id="transpiler-alternative">Transpiler alternative</h4>
<p>Using Hooks already makes programs more succinct, reusable and readable. Imagine what you could do if there were no limitations (Rules of Hooks). The limitations are due to runtime-only embedding. We can remove these limitations by means of a transpiler.</p>
<p><a href="https://github.com/awto/effectfuljs" rel="noopener">Effectful.JS</a> is a transpiler for embedding effectful into JavaScipt. It supports both Monadic and Applicative targets. It greatly simplifies programs in the designing, implementing, testing, and maintaining stages.</p>
<p>Unlike React Hooks and Suspense, the transpiler doesn’t need to follow any rules. It works for any JavaScript statement (branches, loops, exceptions etc). It never re-plays functions from the beginning. This is faster. Plus the functions can use any JavaScript built-in side effect.</p>
<p>Effectful.JS is not exactly a transpiler but rather a tool to create transpilers. There are also a few predefined ones and a lot of options for tuning. It supports double-level syntax, with special markers for effectful values (like <code>await</code>expressions in async functions, or Haskell’s do). And it also supports a single level syntax where this information is implicit (like Suspense, Hooks or languages with Algebraic Effects).</p>
<p>I’ve quickly built a Hooks-like transpiler for demo-purposes — <a href="https://github.com/awto/effectfuljs/tree/master/samples/react-do" rel="noopener">@effectful/react-do</a>. Calling a function with names starting with “use” is considered effectful. Functions are transpiled only if their name starts with “use” or they have “component” or “effectful” block directive (a string at the beginning of the function).</p>
<p>There are also “par” and “seq” block-level directives to switch between applicative and monadic targets. With “par” mode enabled the compiler analyzes variable dependencies and injects <code>join</code> instead of <code>chain</code> if possible.</p>
<p>Here is the example with two counters, but now adapted with the transpiler:</p>
<p>For demo purposes, it also implements Suspense for Code Splitting. The whole function is six lines long. Check it out in the runtime implementation <a href="https://github.com/awto/effectfuljs/blob/master/samples/react-do/main.js" rel="noopener">@effectful/react-do/main.js</a>. In the next example, I’ve added another counter which rendering is artificially delayed for demo purposes.</p>
<h4 id="algebraic-effects">Algebraic Effects</h4>
<p>Algebraic Effects are often mentioned along with Suspense and Hooks. These may be internals details or a modeling tool, but React doesn’t ship Algebraic Effects to its userland anyway.</p>
<p>With access to Algebraic Effects, users could override operations behavior by using own Effect Handler. This works like exceptions with an ability to resume a computation after <code>throw</code>. Say, some library function throws an exception if some file doesn’t exist. Any caller function can override how it can handle it, either ignore or exit process, etc.</p>
<p>EffectfulJS doesn’t have built-in Algebraic Effects. But their implementation is a tiny runtime library on top of continuations or free monads.</p>
<p>Invoking a continuation also erases everything after the corresponding <code>throw</code>. There is also special syntax and typing rules to get Applicative (and Arrows) API — <a href="http://homepages.inf.ed.ac.uk/slindley/papers/aeia.pdf" rel="noopener">Algebraic Effects and Effect Handlers for Idioms and Arrows</a>. Unline Applicative-do this prohibits using any anything which requires Monad operations.</p>
<h4 id="wrapping-up">Wrapping up</h4>
<p>The transpiler is a burden, and it has its own usage cost. Like for any other tool, use it only if this cost is smaller than the value you get.</p>
<p>And you can achieve a lot with EffectfulJS. It is a new way to write JavaScript programs. It is useful for projects with complex business logic. Any complex workflow can be a simple maintainable script.</p>
<p>As an example, Effectful.JS can replace Suspense, Hooks, Context, and Components State with tiny functions. Error Boundaries are the usual <code>try-catch</code> statements. Async rendering is an async scheduler. But we can use it for any computations, not only for rendering.</p>
<p>There are a lot of other awesome application-specific uses, and I’m going to write more about them soon. Stay tuned!</p>
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
