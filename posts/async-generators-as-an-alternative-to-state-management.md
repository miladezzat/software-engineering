---
card: "/images/default.jpg"
tags: [JavaScript]
description: Async Generators is a simple but powerful feature that is now
author: "Milad E. Fahmy"
title: "Async Generators as an alternative to State Management"
created: "2021-08-15T19:33:23+02:00"
modified: "2021-08-15T19:33:23+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-functional-programming tag-software-architecture ">
<header class="post-full-header">
<h1 class="post-full-title">Async Generators as an alternative to State Management</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2019/07/async-state.png 300w,
/news/content/images/size/w600/2019/07/async-state.png 600w,
/news/content/images/size/w1000/2019/07/async-state.png 1000w,
/news/content/images/size/w2000/2019/07/async-state.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2019/07/async-state.png" alt="Async Generators as an alternative to State Management">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Async Generators is a simple but powerful feature that is now a part of JavaScript. It unlocks many new tools to improve software architecture, making it more agile, simplifying extension and composition.</p>
<h4 id="tl-dr">TL;DR</h4>
<ul>
<li>With Async Generators there is no longer need for components state, state management tools, component lifecycle methods, and even the latest React Context, Hooks and Suspense APIs. It is much simpler to develop, maintain, and test.</li>
<li>Unlike a state management approach, async generators tame asynchronicity leaving mutations harmless (if visible only in the generator’s scope).</li>
<li>This approach has a functional programming background.</li>
<li>State persistence for things like time traveling, universal apps is also available.</li>
<li>The article uses React and JavaScript, but the technique is applicable in any other framework or programming language with generators (coroutines).</li>
<li><em>I’m advertising my tool only at the end and very briefly. Most of the article is about async generators without any dependency.</em></li>
</ul>
<p>Let’s start with a statement from <a href="https://redux.js.org/introduction/motivation" rel="nofollow noopener">Redux motivation page</a>:</p>
<blockquote><em>This complexity is difficult to handle as <strong><strong>we’re mixing two concepts</strong></strong> that are very hard for the human mind to reason about: <strong><strong>mutation and asynchronicity.</strong></strong> I call them <a href="https://en.wikipedia.org/wiki/Diet_Coke_and_Mentos_eruption" rel="noopener noreferrer nofollow noopener">Mentos and Coke</a>. Both can be great in separation, but together they create a mess.</em></blockquote>
<p>Redux and other state management tools are mostly focusing on restricting or controlling data mutations. Async generators can handle asynchronicity. This makes mutation safe if it is visible only within a particular generator scope.</p>
<p>All the common state management techniques can be split into two big classes.</p>
<p>The first class maintaining data dependencies graph to propagate changes through handlers — React Component State, MobX, RxJS. Maintaining these dependencies is a complex task. The underlying libraries are taking charge of part of this complexity by managing subscriptions, optimizing the order of handlers execution, batching them, but it is still confusing to use sometimes, often requires hard fine-tuning, e.g., with <code>shouldComponentUpdate</code>method.</p>
<p>Another approach limits mutation to only a single cell (storage) (e.g., Redux). This needs much smaller libraries, with less magic in them. It is more a pattern than a library. Unfortunately, the programs are more verbose, and this breaks data encapsulation. There are many patterns, wrappers to solve this though, but they make a single cell approach to be more similar to the graph based one.</p>
<p>The technique in this story and Redux are both based on Event Sourcing pattern, and they have many similarities. It also offers encapsulated data and synchronous deterministic order of executions for operations with side effects.</p>
<p>This approach can be abstractly viewed as a dependency graph as well, but the changes are propagated in reverse direction, from its root to towards leaves of its spanning tree. In each node we check should the propagation proceed to children or not. This makes the scheduling algorithm very lightweight and easy to control. It doesn’t require any library, basing only on JavaScript built-in features.</p>
<p>Let’s first port <a href="https://github.com/reduxjs/redux/blob/master/examples/counter-vanilla/index.html" rel="nofollow noopener">Redux VanillaJS counters</a> example to illustrate the idea.</p>
<p>The original reducer is replaced with async generator function. The function calculates and stores its state in a local variable. It also yields the calculated value, the new value is stored in the singleton storage, and it is visible from event handlers. I’ll remove that singleton storage in the next steps.</p>
<p>This version doesn’t look much different from Redux. The async generator there could be Redux storage middleware. This violates one of Redux <a href="https://redux.js.org/introduction/three-principles" rel="nofollow noopener">principles</a> though, namely storing all application state only in the storage. Even if the generator doesn’t have any local variables, it still has its execution state — the position in the code where the execution is suspended in <code>yield</code> or <code>await</code>.</p>
<h4 id="turning-components-inside-out">Turning components inside-out</h4>
<p>Generator functions are functions returning iterators. We can do with them everything we can do with plain functions. For example, by composing generator functions, we can split computation into a few independent stages.Each stage has own encapsulated state. Each stage receives messages which were yielded on the previous stage, handles them yielding another messaging and passing them to the next stage.</p>
<p>The payload of the messages can contain VDOM elements. Instead of having a monolithic components tree we emit parts of it and send them to the next stage, where they can be assembled or transformed. Here is the same Counters example with React.</p>
<p>There <code>pipe</code> function is a function composition. The functions take two arguments. The first is async iterable for messages from the former stage. And the second is to send a message into the start of the pipe. It should be called only from event handlers. This function can be replaced soon with JavaScript embedded pipeline operator.</p>
<p>When we compose plain functions the next one in chain starts executing only after the previous was finished. While for generators (and in fact any coroutines) the execution can be suspended in interleaved with other functions. This makes composing different parts easier.</p>
<p>The example above briefly shows extensibility by decoupling a few menu buttons from the root component into a separate stage. Instead of abstracting menu buttons into a separate component it maintains a placeholder where it injects components it receives in messages with “MENU_ITEM” type. It is an Inversion of Control for components. Both techniques React Components and these Inverted Components can be used together of course.</p>
<h4 id="extension">Extension</h4>
<p>An exciting point of this technique is nothing should be preliminary designed to make the program reusable and decoupled. Nowadays premature abstraction is probably a bigger evil than premature optimization. It almost definitely leads to an overdesigned mess impossible to use. Using abstract generators, it is easy to keep calm and implement the required features, splitting when needed, without thinking about future extensions, easy to refactor or abstract some common parts after more details are available.</p>
<p>Redux is famous for making programs simpler to extend and reuse. The approach in this story is also based on Event Sourcing, but it is much simpler to run async operations and it doesn’t have a single store bottleneck, nothing should be designed prematurely.</p>
<p>Many developers like single storage because it is easy to control. The control is not a free thing though. One of the widely accepted advantages of Event Sourcing pattern is an absence of a central DB. It is simpler to change one part without danger of breaking something else. There is another problem of single storage discussed in Persistence section below.</p>
<p>There is <a href="https://medium.com/dailyjs/decoupling-business-logic-using-async-generators-cc257f80ab33">Decouple Business Logic</a> article with more detailed cases study. At some step there, I added a multi-select feature to drag and drop without changing anything in single element handling. With a single store, this would mean changing its model from storing a single currently dragging element to a list.</p>
<p>There are similar solutions in Redux, namely applying higher order reducer. It could take a reducer working with a single element and translate into reducer working for a list. The generators solution uses higher order async generators instead, taking a function for a single element and generating the one for a list. It is similar but much less verbose, as the generator encapsulates data and implicit control state.</p>
<p>As an illustration, let’s make a list of counters. This step is covered in “Decouple Business Logic” article, I’m not giving many details here. The <code>fork</code>function is the async iterators transforming function, running its argument in threads per item. It is a not simple, but it is a generic one, works in many contexts as is. In the next section, for example, I apply it recursively to get a tree view.</p>
<h4 id="performance">Performance</h4>
<p>Async generators overhead is much smaller than for state management libraries. But there are a lot of ways to get performance problems here too, e.g. over flooding with messages. But there are also a lot of almost effortless ways to improve performance.</p>
<p>In the former example, there are useless calls to <code>ReactDom.render</code>. This is obviously a performance problem, and there is a simple solution. Solving it quickly by sending another message with type “FLUSH” after each dispatched event. React render runs only after it receives this message. The intermediate steps can yield whatever they need in between.</p>
<p>Another awesome side of this approach is you may not worry about performance until it is a problem. Everything is structured in small autonomous stages. They are easy to refactor, or even without refactoring — many performance problems can be solved by adding another generic state in the pipe of steps, e.g., batching, prioritizing, saving intermediate data, etc.</p>
<p>For example, in the demo constructed React elements are saved in local variables and React can re-use them. Changes are propagated from the root towards leaves, so optimizations like overriding<code>shouldComponentUpdate</code> aren’t needed.</p>
<h4 id="testing">Testing</h4>
<p>Comparing to Redux reducer tests, generators fit a bit darker box testing strategy. The tests don’t have access to the current state. Though still, they are very simple to write. With Jest snapshots, the test can be a list of input messages with comparing output using snapshots.</p><pre><code class="language-javascript">test("counterControl", async () =&gt; {
expect.assertions(3)
for await(const i of Counter.mainControl([
{type:"MENU", value:&lt;span&gt;Menu&lt;/span&gt;},
{type:"VALUE", value:10},
{type:"CONTROL", value:&lt;span&gt;Control&lt;/span&gt;},
{type:"FLUSH"},
{type:"VALUE", value: 11},
{type:"FLUSH"}]))
if (i.type === "CONTROL")
expect(renderer.create(i.value).toJSON()).toMatchSnapshot()
})</code></pre>
<p>If you prefer unit-tests as documentation policy, there are many ways to make a self-documenting API for testing. Say, a function `eventually`/`until` as an addition to traditional BDD expressions.</p>
<h4 id="persistent-state">Persistent state</h4>
<p>There is another motivation for Redux described in <a href="https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367">You Might Not Need Redux</a> article by Dan Abramov — namely providing access to the state and it can be serialized, cloned, diffed, patched, etc. This can be used for time travel, hot reloading, universal applications and more.</p>
<p>For this to work, the whole application state should be kept in Redux storage. Many Redux applications(even Redux samples) have some part of state stored outside of their store. These are components state, closures, generators or async functions state. Redux based tools can not persist this state.</p>
<p>Having a single source of truth as a single storage Redux, of course, makes programs simpler. Unfortunately, it is often impossible. Consider for example distributed application, e.g., data are shared between frontend and backend.</p>
<blockquote class="twitter-tweet">
<p lang="en" dir="ltr">"Oh, you wanted to *increment a counter*?! Good luck with that!" -- the distributed systems literature</p>— Lindsey Kuper (@lindsey) <a href="https://twitter.com/lindsey/status/575006945213485056?ref_src=twsrc%5Etfw">March 9, 2015</a>
</blockquote>
</figure>
<p>Event Sourcing is very successful for distributed applications. With generators, we can write a proxy sending all incoming messages to the remote side and yielding all received messages. There can be separate pipelines on each peer, or it can be the same application but a few running processes. Many configurations are easy to set up, use and re-use.</p>
<p>For example <code>pipe(task1, remoteTask2, task3)</code>. Here <code>remoteTask2</code>may be either proxy or, it may be defined here, say, for debugging purposes.</p>
<p>Each part maintains its own state, it doesn’t need to be persistent. Say if each task is implemented by a separate team they are free to use any model for the state, change it any time without worrying about the other team’s work is broken.</p>
<p>This fits well for Server Side Rendering too. Say, there can be a particular higher order function to cache resulting values depending on inputs on the back-end.</p><pre><code class="language-javascript">const backend = pipe(
commonTask1,
memo(pipe(
renderTask1,
renderTask2)),
commonTask2)</code></pre>
<p>Here the <code>memo</code> higher order function examines incoming messages and may find out some calculation may be reused. This may be a server-side rendered string, and some next stage builds HTTP response with it.</p>
<p>The render tasks can run async operations, requesting something remote. For better user experience we want pages to load fast. To increase initial page load time applications can load components lazily displaying some loading placeholder instead of the component until it is ready. Having a few such components on a page with a bit different loading time causes page re-layouts worsening user experience.</p>
<p>React team recently announced Suspense API to solve this problem. It is an extension of React embedded into its renderer. With the Inverted Components like in this article, Suspense API isn’t needed, the solution is much simpler and not a part of UI framework.</p>
<p>Say the application uses dynamic imports to load lazy controls, this can be done with:</p><pre><code class="language-javascript">yield {type:”LAZY_CONTROL”}
yield {type:”CONTROL”, value: await import(“./lazy_component”)}</code></pre>
<p>There is another generic next stage. It collects all “LAZY_CONTROL” messages, and awaits either all “CONTROL” messages are received after or a threshold time interval. After, it emits “CONTROL” messages either with the loaded control or with loading indicator placeholder. All the next updates can be batched as well using some specific timeout to minimize re-layouts.</p>
<p>Some generator can also reorder messages to give animation a bigger priority than server data updates. I’m not even sure there are needs for a server-side framework. A tiny generator could transform initial HTTP request into messages or threads depending on URL, auth session, etc.</p>
<h4 id="functional-programming">Functional Programming</h4>
<p>Commonly used state management tools have FP background. The code from the article doesn’t look like FP in JavaScript because of imperative <code>for-of/switch/break</code>statements. It has a corresponding concept in FP too. It is so called Monads do-notation. For example one of their use in Haskell is to resolve problems like React components property drilling.</p>
<p>To keep this story practical I don’t digress from the main subject here, there is another article — <a href="https://medium.com/@vitaliy.akimov/using-generators-as-monads-do-notation-8600c53648cf">Using Generators as syntax sugar for side effects</a>.</p>
<h4 id="effectful-js">Effectful.js</h4>
<p><a href="https://effectful.js.org/" rel="noopener nofollow">Effectful.js</a> is a babel preset implementing do-notation working for any monad without any JavaScript syntax extension. It also supports state persistence with a reference implementation in <a href="https://github.com/awto/effectfuljs/tree/master/packages/es-persist" rel="noopener nofollow">es-persist</a> library. For example, this may be used to convert all async generators example above into pure functions.</p>
<p>State persistence is not the primary goal of the tool. It is for higher level business logic description. Nevertheless, the tool is abstract and has many purposes. I’ll write about them more soon.</p>
<p>Here is <a href="https://github.com/awto/effectfuljs" rel="noopener nofollow">the summary sample</a> on GitHub with all the feature above plus automatic Undo/Redo and storing its full state in <code>localStorage</code>. And here is <a href="https://effectful.js.org/demo/alternative/" rel="noopener nofollow">running transpiled</a> version (it writes to your browsers local storage but no information is sent to the server side). I’m not giving many details in this article, it is about async generators without dependency, but I suppose the code is straightforward to read. Check for example <a href="https://github.com/awto/effectfuljs/blob/master/samples/persist-counters/undoredo.js" rel="nofollow noopener">undoredo.js</a> for easy time traveling implementation details.</p>
<p>The original sample requires almost no changes, I only replaced not serializable Promises, with corresponding functions from “es-persist” and replaced closures with invocations of <code>R.bind</code>function from the same library. EffectfulJS toolchain has another transpiler to make all the functions, including closures serializable, but not used in this example to keep it simpler.</p>
<p>The story is just a brief description of the technique. I’m using it for a couple of years already, and happy because of improvements it provides. Try it, and I’m sure you’ll enjoy it too. There are many things to describe in depth. Stay tuned!</p>
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
