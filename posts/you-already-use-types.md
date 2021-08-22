---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9ca094740569d1a4ca4989.jpg"
tags: [JavaScript]
description: This post is for skeptics and newcomers to type systems, and
author: "Milad E. Fahmy"
title: "You Already Use Types - So Here's Why You Should Use a Type System"
created: "2021-08-15T19:32:54+02:00"
modified: "2021-08-15T19:32:54+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-typescript tag-flowtype ">
<header class="post-full-header">
<h1 class="post-full-title">You Already Use Types - So Here's Why You Should Use a Type System</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9ca094740569d1a4ca4989.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9ca094740569d1a4ca4989.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9ca094740569d1a4ca4989.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9ca094740569d1a4ca4989.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9ca094740569d1a4ca4989.jpg" alt="You Already Use Types - So Here's Why You Should Use a Type System">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>This post is for skeptics and newcomers to type systems, and aims to articulate rather than hard sell.</p>
<ol>
<li>First we'll look at how static type conventions appear in your dynamically typed coding.</li>
<li>Then we'll step back and try to think about what this phenomenon tells us about how we want to code.</li>
<li>Lastly, we'll ask some (leading!) questions that should arise from these insights.</li>
</ol>
<h2 id="1atypesinnames">1A: Types in Names</h2>
<p>Regardless of language, your journey with types starts almost as soon as you learn to code. The basic list data structure invites a corresponding plural:</p>
<pre><code class="language-js">var dog = 'Fido'
var dogs = ['Fido', 'Sudo', 'Woof']
</code></pre>
<p>As you work with more and more and more code, you start to form opinions that you may mandate to your team or style guide:</p>
<ul>
<li>always use specific names like <code>dogID</code> vs <code>dogName</code> vs <code>dogBreed</code> or a namespace/class/object like <code>dog.name</code> or <code>dog.id</code> or <code>dog.breed</code></li>
<li>singles should not be substrings of plurals, e.g. BAD: <code>blog</code> and <code>blogs</code>, GOOD: <code>blogPost</code> vs <code>blogList</code></li>
<li>booleans <a href="https://github.com/typescript-eslint/typescript-eslint/issues/515">should have a boolean-ish prefix</a>, like <code>isLoading</code>, <code>hasProperty</code>, <code>didChange</code></li>
<li>functions with side effects should have verbs</li>
<li>internal variables should have a <code>_prefix</code></li>
</ul>
<p>This may seem trivial since we're talking about variable names, but this vein runs <em>extremely</em> deep. Names in our coding reflect the concepts and constraints we place on our code to make it more maintainable at scale:</p>
<ul>
<li><a href="https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0">Presentational Components vs Stateful/Connected Containers</a></li>
<li><a href="http://bradfrost.com/blog/post/atomic-web-design/">Atoms, Molecules, Organisms, Templates, Pages</a></li>
<li><a href="https://reactjs.org/blog/2016/09/28/our-first-50000-stars.html#api-churn">Concepts, Actions, Operands</a> (one of the most successful name grammars ever)</li>
<li><a href="http://getbem.com/naming/">Block__Element--Modifier</a></li>
<li><a href="https://reactjs.org/docs/higher-order-components.html">Higher Order Components</a></li>
</ul>
<p>These all seep into your code accordingly: <code>*Container</code>, <code>*Component</code>, <code>*Reducer</code>, <code>*Template</code>, <code>*Page</code>, <code>with*</code>.</p>
<p>Once you start crossing execution paradigms, you start feeling your way into monadic type hints.</p>
<p>Node.js felt this early on:</p>
<pre><code class="language-js">fs.readFile(myfile, callback)
fs.readFileSync(myfile) // introduced when people realized callback hell might not be worth non-blocking
</code></pre>
<p>React introduced the <code>use</code> prefix to indicate hooking into the runtime that must respect <a href="https://reactjs.org/docs/hooks-rules.html">certain rules</a>:</p>
<pre><code class="language-js">function Component() {
const [bool, setBool] = React.useState(true)
React.useEffect(callback)
const foo = useCustomHook()
// ...
}
</code></pre>
<p>I am personally fond of reminders of nullability:</p>
<pre><code class="language-js">const maybeResult = await fetchAPI()
if (maybeResult) {
const result = maybeResult
// do things with result
} else {
// maybeResult is falsy, dont assume it is there
}
</code></pre>
<p><strong>In almost everything you name, you're already using types.</strong></p>
<p>So what, you ask?</p>
<p>Keep reading, I'm building up to it.</p>
<h2 id="1btypesindatastructures">1B: Types in Data Structures</h2>
<p>The problem with encoding types in names is that the language probably doesn't care about your meticulously named variables (indeed, in JavaScript, it probably gets mercilessly minified beyond recognition). It will happily run your code and throw a runtime error if you forget to respect your own nametypehints. What if we made types formally checkable through data structures?</p>
<p>The most basic are constants. In Redux, it is <a href="https://decembersoft.com/posts/a-simple-naming-convention-for-action-creators-in-redux-js/">common to explicitly (and redundantly) set SCREAMING_CASE_CONSTANTS</a>:</p>
<pre><code class="language-js">const ADD_TODO = 'slice/ADD_TODO'
// later in redux code:
import { ADD_TODO } from './redux/types'
switch (action.type) {
case ADD_TODO:
// do stuff based on the action
// ...
}
</code></pre>
<p>This is mostly done because you can't trust your fellow developer not to typo their strings.</p>
<p>However even these strings offer too much trust, and we found it important enough to add a new language feature to guarantee uniqueness:</p>
<pre><code class="language-js">const ADD_TODO = Symbol('slice/ADD_TODO')
</code></pre>
<p>We also fake our way toward enums this way:</p>
<pre><code class="language-js">const colors = {
BLUE: Symbol(1),
GREEN: Symbol(2),
RED: Symbol(3),
}
</code></pre>
<p>But simple values (strings, numbers, booleans) are actually easy to compare and treat accordingly.</p>
<p>More pressing is encoding types in complex values.</p>
<p>This usually happens when you have arrays of objects and the objects are different in some ways and similar in others:</p>
<pre><code class="language-js">const animals = [{ name: 'Fido', legs: 4, says: 'woof' }, { name: 'Kermit', legs: 2, marriedTo: 'Piggy' }]
// will have bugs if an animal with both `says` and `marriedTo` exists
animals.forEach((animal) =&gt; {
if (animal.says) {
// i guess it's a dog?
}
if (animal.marriedTo) {
// i guess it's a frog?
}
})
</code></pre>
<p>Buggy checking and implicitly assumed types is often a cause for much pain. Better to type explicitly:</p>
<pre><code class="language-js">const animals = [
{
type: 'dog', // new!
name: 'Fido',
legs: 4,
says: 'woof',
},
{
type: 'frog', // new!
name: 'Kermit',
legs: 2,
marriedTo: 'Piggy',
},
]
animals.forEach((animal) =&gt; {
if (animal.type === 'dog') {
// must be a dog!
}
if (animal.type === 'frog') {
// must be a frog!
}
})
</code></pre>
<p>This is in fact what happens for Redux (and, interestingly enough, handy for other things like <a href="https://basarat.gitbooks.io/typescript/docs/types/discriminated-unions.html">Discriminated Unions</a>), but you will see this <strong>everywhere</strong> in <a href="https://github.com/sw-yx/overreacted.io/blob/master/gatsby-config.js#L25-L50">Gatsby</a> and <a href="https://babeljs.io/docs/en/plugins/#plugin-options">Babel</a> and <a href="https://reactjs.org/docs/react-without-jsx.html">React</a> and I'm sure you know of cases I don't.</p>
<p>Types even exist in HTML: <code>&lt;input type="file"&gt;</code> and <code>&lt;input type="checkbox"&gt;</code> behave so differently! (and I already mentioned Types in CSS with <a href="http://getbem.com/naming/">Block__Element--Modifier</a>)</p>
<p><strong>Even in HTML/CSS, you're already using types.</strong></p>
<h2 id="1ctypesinapis">1C: Types in APIs</h2>
<p>I'm almost done. Even outside your programming language, the interfaces between machines involve types.</p>
<p>REST's big innovation was basically a primitive form of typing client-server requests: <code>GET</code>, <code>PUT</code>, <code>POST</code>, <code>DELETE</code>. Web conventions have introduced other type fields in requests, like the <code>accept-encoding</code> header, that you must adhere to to get what you want. However, RESTfulness is basically not enforced, and because it doesn't offer guarantees, downstream tooling cannot assume properly behaved endpoints.</p>
<p>GraphQL takes that idea and dials it up to 11: Types are key to queries and mutations and fragments, but also on every field and every input variable, validated on both clientside and serverside by spec. With much stronger guarantees, it is able to ship <a href="https://github.com/graphql/graphiql">much better tooling</a> as a community norm.</p>
<p>I don't know the history of SOAP and XML and gRPC and other machine-machine communication protocols but I'm willing to bet there are strong parallels.</p>
<h2 id="part2whatdoesthistellus">Part 2: What Does This Tell Us?</h2>
<p>This was a very long, and yet inexhaustive examination of types permeating everything you do. Now that you've seen these patterns, you can probably think of more examples I'm forgetting right now. But at every turn, it seems the way toward more maintainable code, and better tooling is to add types in some way.</p>
<p>I mentioned parts of this thesis in <a href="https://www.swyx.io/writing/how-to-name-things">How To Name Things</a>, but basically all of the naming schemas fall under an enlightened form of Hungarian notation, as described in Joel Spolsky's <a href="https://www.joelonsoftware.com/2005/05/11/making-wrong-code-look-wrong/">Making Wrong Code Look Wrong</a>.</p>
<p>If none of what I have described resonates with you, and isn't something you've already been doing, then types may not be for you.</p>
<p>But if it does, and you've been doing this in slipshod fashion, you may be interested in more structure around how you use types in your code, and in using better tooling that takes advantage of all the hard work you already put into types.</p>
<p>You may be working your way toward a type system, without even knowing it.</p>
<h2 id="part3leadingquestions">Part 3: Leading Questions</h2>
<p>So knowing what we know now about using types in our code without a type system. I'll ask some hard questions.</p>
<p><strong>Question 1: What do you currently do to enforce types without a type system?</strong></p>
<p>At an individual level, you engage in defensive coding and manual verification. Basically manually eyeballing your own code and reflexively adding checks and guards without knowing if they're really needed (or, worse, NOT doing it and figuring out after seeing run time exceptions).</p>
<p>At a team level, you spend multiples of developer-hours in code review, inviting bike shedding over names, which we all know is great fun.</p>
<p>These two processes are manual methods, and a very poor use of developer time. <a href="https://hackernoon.com/dont-be-the-bad-cop-in-pull-request-reviews-let-software-do-that-job-1eb9e574c2d1">Don't be the bad cop</a> - this wrecks team dynamics. At scale, you are mathematically guaranteed to have lapses in code quality (therefore causing production bugs), either because everyone missed something, or there just wasn't enough time and you just had to ship something, or there wasn't a good enough policy in place yet.</p>
<p>The solution, of course, is to automate it. As Nick Schrock says, <a href="https://medium.com/@schrockn/on-code-reviews-b1c7c94d868c">Delegate to Tooling Whenever Possible</a>. Prettier and ESLint help to hold up your code quality - only to the extent to which the program can understand you based on an AST. It does not offer any help crossing function and file boundaries - if function <code>Foo</code> expects 4 arguments and you only pass it 3, no linter will yell at you and you'll have to defensively code inside <code>Foo</code>.</p>
<p>So there's only so much you can automate with a linter. What about the rest you can't automate?</p>
<p>Therein lies the last option: Do Nothing.</p>
<p>Most people do nothing to enforce their informally designed type systems.</p>
<p><strong>Question 2: How much of these types are you writing yourself?</strong></p>
<p>It goes without saying that if all your type policies are created by you, then they must be written by you and enforced by you.</p>
<p>That's totally different from how we write code today. We lean heavily on open source - <a href="https://mobile.twitter.com/housecor/status/1078634947831914496">97% of modern web app code is from npm</a>. We import shared code, and then write the last mile parts that make our app special (aka business logic).</p>
<p>Is there a way to share types?</p>
<p>(<a href="https://github.com/DefinitelyTyped/DefinitelyTyped/">yes</a>)</p>
<p><strong>Question 3: What if your types were standardized?</strong></p>
<p>Research has shown that the #1 reason programmers adopt a language is the existing capabilities and functionality available for them to use. I will learn Python to use TensorFlow. I will learn Objective C to create native iOS experiences. Correspondingly, JS has been so successful because it runs everywhere, compounded by the wide availability of free open source software written <em>by other people</em>. With some standardized type system, we can <a href="https://github.com/DefinitelyTyped/DefinitelyTyped/">import types just as easily as we import open source software</a> written by other people.</p>
<p>Just like GraphQL vs REST, Standardized types in a language unlock much better tooling. I will offer 4 examples:</p>
<p><strong>Example 1: Faster Feedback</strong></p>
<p>We might take months and days to learn from <strong>runtime errors</strong>, and these are exposed to users, so they are the worst possible outcome.</p>
<p>We write tests and apply lint rules and other checks to move these errors to <strong>build time errors</strong>, which shortens feedback cycles to minutes and hours. (As I wrote recently: <a href="https://css-tricks.com/types-or-tests-why-not-both/">Types don't replace Tests!</a>)</p>
<p>Type Systems can shorten this feedback by yet another order of magnitude, to seconds, checking during <strong>write time</strong>. (Linters can also do this. Both are conditional on a supportive IDE like VS Code) As side effect, you get autocomplete for free, because autocomplete and write time validation are two sides of the same coin.</p>
<p><strong>Example 2: Better Error Messages</strong></p>
<pre><code class="language-js">const Foo = {
getData() {
return 'data'
},
}
Foo['getdata']() // Error: undefined is not a function
</code></pre>
<p>JavaScript is intentionally lazy evaluation by design. Instead of the dreaded and nondescript <code>undefined is not a function</code> during runtime, we can move this to write time. Here's the write time error message for the exact same code:</p>
<pre><code class="language-ts">const Foo = {
getData() {
return 'data'
},
}
Foo['getdata']() // Property 'getdata' does not exist on type '{ getData(): string; }'. Did you mean 'getData'?
</code></pre>
<p>Why yes, TypeScript, I did.</p>
<p><strong>Example 3: Edge Case Exhaustion</strong></p>
<pre><code class="language-ts">let fruit: string | undefined
fruit.toLowerCase() // Error: Object is possibly 'undefined'.
</code></pre>
<p>Over and above the built in nullable checking (which takes care of issues like passing in 3 arguments when a function expects 4), a type system can make the most of your enums (aka union types). I struggled coming up with a good example but here is one:</p>
<pre><code class="language-ts">type Fruit = 'banana' | 'orange' | 'apple'
function makeDessert(fruit: Fruit) {
// Error: Not all code paths return a value.
switch (fruit) {
case 'banana':
return 'Banana Shake'
case 'orange':
return 'Orange Juice'
}
}
</code></pre>
<p><strong>Example 4: Fearless Refactoring</strong></p>
<p>Many people mentioned this and I'll be honest that it took me a long while to come around to this. The thinking is: "so what? I don't refactor that much. so that means TypeScript's benefit is smaller to me than to you because I'm better than you."</p>
<p>This is the wrong take.</p>
<p>When we start off exploring a problem, we start off with a vague idea of the solution. As we progress, we learn more about the problem, or priorities change, and unless we've done it a million times we probably picked something wrong along the way, whether it be function API, data structure, or something larger scale.</p>
<p><img src="http://www.methodsandtools.com/archive/refact8.png" alt=""></p>
<p>The question is then to either stick with it until it breaks or to refactor the moment you can sense that you're going to outgrow whatever you used to have. I'll assume you accept that there are often benefits to refactoring. So why do we avoid refactoring?</p>
<p><strong>The reason you put off that refactor is that it is costly, not because it isn't beneficial to you. Yet putting it off only increases future cost.</strong></p>
<p>Type System tooling helps to dramatically lower the cost of that refactor, so you can experience the benefits earlier. It lowers that cost via faster feedback, exhaustiveness checking, and better error messages.</p>
<h2 id="truthinadvertising">Truth in Advertising</h2>
<p>There is a cost to learning Type Systems you didn't write. This cost may offset any imagined benefit to automated type checking. This is why I put a great deal of effort into helping to lower that learning curve. However, be aware that it is a new language and will involve unfamiliar concepts, and also that even the tooling is an imperfect work in progress.</p>
<p>But it is good enough for <a href="https://www.reddit.com/r/typescript/comments/aofcik/38_of_bugs_at_airbnb_could_have_been_prevented_by/">AirBnb</a> and <a href="http://neugierig.org/software/blog/2018/09/typescript-at-google.html">Google</a> and <a href="https://github.com/atlassian/react-beautiful-dnd/issues/982">Atlassian</a> and <a href="https://eng.lyft.com/typescript-at-lyft-64f0702346ea">Lyft</a> and <a href="https://medium.com/priceline-labs/trying-out-typescript-part-1-15a5267215b9">Priceline</a> and <a href="https://slack.engineering/typescript-at-slack-a81307fa288d">Slack</a> and it may be for you.</p>
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
