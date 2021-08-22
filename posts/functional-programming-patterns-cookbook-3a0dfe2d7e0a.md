---
card: "https://cdn-media-1.freecodecamp.org/images/1*wnKmEBrlwH3uDZ_c6su12w.jpeg"
tags: [Functional Programming]
description: "This article targets an audience that’s graduating from funct"
author: "Milad E. Fahmy"
title: "Functional Programming Patterns: A Cookbook"
created: "2021-08-16T11:33:18+02:00"
modified: "2021-08-16T11:33:18+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-functional-programming tag-javascript tag-software-development tag-programming tag-technology ">
<header class="post-full-header">
<h1 class="post-full-title">Functional Programming Patterns: A Cookbook</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*wnKmEBrlwH3uDZ_c6su12w.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*wnKmEBrlwH3uDZ_c6su12w.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*wnKmEBrlwH3uDZ_c6su12w.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*wnKmEBrlwH3uDZ_c6su12w.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*wnKmEBrlwH3uDZ_c6su12w.jpeg" alt="Functional Programming Patterns: A Cookbook">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>This article targets an audience that’s graduating from functional libraries like <code>ramda</code> to using Algebraic Data Types. We’re using the excellent <code><a href="https://evilsoft.github.io/crocks/?source=post_page---------------------------">crocks</a></code> library for our ADTs and helpers, although these concepts may apply to other ones as well. We’ll be focusing on demonstrating practical applications and patterns without delving into a lot of theory.</p><h4 id="safely-executing-dangerous-functions">Safely Executing Dangerous Functions</h4><p>Let’s say we have a situation where we want to use a function called <code>darken</code> from a third-party library. <code>darken</code> takes a multiplier, a color and returns a darker shade of that color.</p><pre><code class="language-js">// darken :: Number -&gt; String -&gt; String
darken(0.1)("gray")
//=&gt; "#343434"</code></pre><p>Pretty handy for our CSS needs. But it turns out that the function is not as innocent as it seems. <code>darken</code> throws errors when it receives unexpected arguments!</p><pre><code class="language-js">darken(0.1)(null)
=&gt; // Error: Passed an incorrect argument to a color function, please pass a string representation of a color.
</code></pre><p>This is, of course, very helpful for debugging — but we wouldn’t want our application to blow up just because we couldn’t derive a color. Here’s where <code>tryCatch</code> comes to the rescue.</p><pre><code class="language-js">import { darken } from "polished"
import { tryCatch, compose, either, constant, identity, curry } from "crocks"
// safeDarken :: Number -&gt; String -&gt; String
const safeDarken = curry(n =&gt;
compose(
either(constant("inherit"), identity),
tryCatch(darken(n))
)
)</code></pre><p><code>tryCatch</code> executes the provided function within a try-catch block and returns a Sum Type called <code>Result</code>. In its essence, a Sum Type is basically an “or” type. This means that the <code>Result</code> could be either an <code>Ok</code> if an operation is successful <em><em>or</em></em> an <code>Error</code> in case of failures. Other examples of Sum Types include <code>Maybe</code>, <code>Either</code>, <code>Async</code> and so on. The <code>either</code> point-free helper breaks the value out of the <code>Result</code> box, and returns the CSS default <code>inherit</code> if things went south or the darkened color if everything went well.</p><pre><code class="language-js">safeDarken(0.5)(null)
//=&gt; inherit
safeDarken(0.25)('green')
//=&gt; '#004d00'</code></pre><h4 id="enforcing-types-using-maybe-helpers">Enforcing Types using Maybe Helpers</h4><p>With JavaScript, we often run into cases where our functions explode because we’re expecting a particular data type, but we receive a different one instead. <code>crocks</code> provides the <code>safe</code>, <code>safeAfter</code> and <code>safeLift</code> functions that allow us to execute code more predictably by using the <code>Maybe</code> type. Let’s look at a way to convert camelCased strings into Title Case.</p><pre><code class="language-js">import { safeAfter, safeLift, isArray, isString, map, compose, option } from "crocks"
// match :: Regex -&gt; String -&gt; Maybe [String]
const match = regex =&gt; safeAfter(isArray, str =&gt; str.match(regex))
// join :: String -&gt; [String] -&gt; String
const join = separator =&gt; array =&gt; array.join(separator)
// upperFirst :: String -&gt; String
const upperFirst = x =&gt;
x.charAt(0)
.toUpperCase()
.concat(x.slice(1).toLowerCase())
// uncamelize :: String -&gt; Maybe String
const uncamelize = safeLift(isString, compose(
option(""),
map(compose(join(" "), map(upperFirst))),
match(/(((^[a-z]|[A-Z])[a-z]*)|[0-9]+)/g),
))
uncamelize("rockTheCamel")
//=&gt; Just "Rock The Camel"
uncamelize({})
//=&gt; Nothing</code></pre><p>We’ve created a helper function <code>match</code> that uses <code>safeAfter</code> to iron out <code>String.prototype.match</code>’s behavior of returning an <code>undefined</code> in case there are no matches. The <code>isArray</code> predicate ensures that we receive a <code>Nothing</code> if there are no matches found, and a <code>Just [String]</code> in case of matches. <code>safeAfter</code> is great for executing existing or third-party functions in a reliable safe manner.</p><p>(Tip: <code>safeAfter</code> works really well with <code>ramda</code> functions that return <code>a | undefined</code>.)</p><p>Our <code>uncamelize ?</code> function is executed with <code>safeLift(isString)</code> which means that it’ll only execute when the input returns true for the <code>isString</code>predicate.</p><p>In addition to this, crocks also provides the <code>prop</code> and <code>propPath</code> helpers which allow you to pick properties from <code>Object</code>s and <code>Array</code>s.</p><pre><code class="language-js">import { prop, propPath, map, compose } from "crocks"
const goodObject = {
name: "Bob",
bankBalance: 7999,
address: {
city: "Auckland",
country: "New Zealand",
},
}
prop("name")(goodObject)
//=&gt; Just "Bob"
propPath(["address", "city"])(goodObject)
//=&gt; Just "Auckland"
// getBankBalance :: Object -&gt; Maybe String
const getBankBalance = compose(
map(balance =&gt; balance.toFixed(2)),
prop("bankBalance")
)
getBankBalance(goodObject)
//=&gt; Just '7999.00'
getBankBalance({})
//=&gt; Nothing</code></pre><p>This is great, especially if we’re dealing with data from side-effects that are not under our control like API responses. But what happens if the API developers suddenly decide to handle formatting at their end?</p><pre><code class="language-js">const badObject = {
name: "Rambo",
bankBalance: "100.00",
address: {
city: "Hope",
country: "USA"
}
}
getBankBalance(badObject) // TypeError: balance.toFixed is not a function :-(</code></pre><p>Runtime errors! We tried to invoke the <code>toFixed</code> method on a String, which doesn’t really exist. We need to make sure that <code>bankBalance</code> is really a <code>Number</code> before we invoke <code>toFixed</code> on it. Let’s try to solve it with our <code>safe</code> helper.</p><pre><code class="language-js">import { prop, propPath, compose, map, chain, safe, isNumber } from "crocks"
// getBankBalance :: Object -&gt; Maybe String
const getBankBalance = compose(
map(balance =&gt; balance.toFixed(2)),
chain(safe(isNumber)),
prop("bankBalance")
)
getBankBalance(badObject) //=&gt; Nothing
getBankBalance(goodObject) //=&gt; Just '7999.00'</code></pre><p>We pipe the results of the <code>prop</code> function to our <code>safe(isNumber)</code> function which also returns a <code>Maybe</code>, depending on whether the result of <code>prop</code>satisfies the predicate. The pipeline above guarantees that the last <code>map</code>which contains the <code>toFixed</code> will only be called when <code>bankBalance</code> is a <code>Number</code>.</p><p>If you’re going to be dealing with a lot of similar cases, it would make sense to extract this pattern as a helper:</p><pre><code class="language-js">import { Maybe, ifElse, prop, chain, curry, compose, isNumber } from "crocks"
const { of, zero } = Maybe
// propIf :: (a -&gt; Boolean) -&gt; [String | Number] -&gt; Maybe a
const propIf = curry((fn, path) =&gt;
compose(
chain(ifElse(fn, of, zero)),
prop(path)
)
)
propIf(isNumber, "age", goodObject)
//=&gt; Just 7999
propIf(isNumber, "age", badObject)
//=&gt; Nothing</code></pre><h4 id="using-applicatives-to-keep-functions-clean">Using Applicatives to keep Functions Clean</h4><p>Often times, we find ourselves in situations where we would want to use an existing function with values wrapped in a container. Let’s try to design a safe <code>add</code> function that allows only numbers, using the concepts from the previous section. Here’s our first attempt.</p><pre><code class="language-js">import { Maybe, safe, isNumber } from "crocks"
// safeNumber :: a -&gt; Maybe a
const safeNumber = safe(isNumber)
// add :: a -&gt; b -&gt; Maybe Number
const add = (a, b) =&gt; {
const maybeA = safeNumber(a)
const maybeB = safeNumber(b)
return maybeA.chain(
valA =&gt; maybeB.map(valB =&gt; valA + valB)
)
}
add(1, 2)
//=&gt; Just 3
add(1, {})
//=&gt; Nothing</code></pre><p>This does exactly what we need, but our <code>add</code> function is no longer a simple <code>a + b</code>. It has to first lift our values into <code>Maybe</code>s, then reach into them to access the values, and then return the result. We need to find a way to preserve the core functionality of our <code>add</code> function while allowing it to work with values contained in ADTs! Here’s where Applicative Functors come in handy.</p><p>An Applicative Functor is just a like a regular functor, but along with <code>map</code>, it also implements two additional methods:</p><pre><code>of :: Applicative f =&gt; a -&gt; f a</code></pre><p>The <code>of</code> is a completely dumb constructor, and lifts any value that you give it into our data type. It’s also referred to as <code>pure</code> in other languages.</p><pre><code class="language-js">Maybe.of(null)
//=&gt; Just null
Const.of(42)
//=&gt; Const 42</code></pre><p>And here’s where all the money is — the <code>ap</code> method:</p><pre><code>ap :: Apply f =&gt; f a ~&gt; f (a -&gt; b) -&gt; f b</code></pre><p>The signature looks very similar to <code>map</code>, with the only difference being that our <code>a -&gt; b</code> function is also wrapped in an <code>f</code>. Let’s see this in action.</p><pre><code class="language-js">import { Maybe, safe, isNumber } from "crocks"
// safeNumber :: a -&gt; Maybe a
const safeNumber = safe(isNumber)
// add :: a -&gt; b -&gt; c
const add = a =&gt; b =&gt; a + b
// add :: a -&gt; b -&gt; Maybe Number
const safeAdd = (a, b) =&gt; Maybe.of(add)
.ap(safeNumber(a))
.ap(safeNumber(b))
safeAdd(1, 2)
//=&gt; Just 3
safeAdd(1, "danger")
//=&gt; Nothing</code></pre><p>We first lift our curried <code>add</code> function into a <code>Maybe</code>, and then apply <code>Maybe a</code>and <code>Maybe b</code> to it. We’ve been using <code>map</code> so far to access the value inside a container and <code>ap</code> is no different. Internally, it <code>map</code>s on <code>safeNumber(a)</code> to access the <code>a</code> and applies it to <code>add</code>. This results in a <code>Maybe</code> that contains a partially applied <code>add</code>. We repeat the same process with <code>safeNumber(b)</code> to execute our <code>add</code> function, resulting in a <code>Just</code> of the result if both <code>a</code> and <code>b</code>are valid or a <code>Nothing</code> otherwise.</p><p>Crocks also provides us the <code>liftA2</code> and <code>liftN</code> helpers to express the same concept in a pointfree manner. A trivial example follows:</p><pre><code class="language-js">liftA2(add)(Maybe(1))(Maybe(2))
//=&gt; Just 3</code></pre><p>We shall use this helper extensively in the section <code>Expressing Parallelism</code>.</p><p>Tip: Since we’ve observed that <code>ap</code> uses <code>map</code> to access values, we can do cool things like generating a Cartesian product when given two lists.</p><pre><code class="language-js">import { List, Maybe, Pair, liftA2 } from "crocks"
const names = List(["Henry", "George", "Bono"])
const hobbies = List(["Music", "Football"])
List(name =&gt; hobby =&gt; Pair(name, hobby))
.ap(names)
.ap(hobbies)
// =&gt; List [ Pair( "Henry", "Music" ), Pair( "Henry", "Football" ),
// Pair( "George", "Music" ), Pair( "George", "Football" ),
// Pair( "Bono", "Music" ), Pair( "Bono", "Football" ) ]</code></pre><h4 id="using-async-for-predictable-error-handling">Using Async for Predictable Error Handling</h4><p><code>crocks</code> provides the <code>Async</code> data type that allows us to build lazy asynchronous computations. To know more about it, you can refer to the extensive official documentation <a href="https://evilsoft.github.io/crocks/docs/crocks/Async.html?source=post_page---------------------------">here</a>. This section aims to provide examples of how we can use <code>Async</code> to improve the quality of our error reporting and make our code resilient.</p><p>Often, we run into cases where we want to make API calls that depend on each other. Here, the <code>getUser</code> endpoint returns a user entity from GitHub and the response contains a lot of embedded URLs for repositories, stars, favorites and so on. We will see how we can design this use case with using <code>Async</code>.</p><pre><code class="language-js">import { Async, prop, compose, chain,  safe, isString, maybeToAsync } from "crocks"
const { fromPromise } = Async
// userPromise :: String -&gt; Promise User Error
const userPromise = user =&gt; fetch(`https://api.github.com/users/${user}`)
.then(res =&gt; res.json())
// resourcePromise :: String -&gt; Promise Resource Error
const resourcePromise = url =&gt; fetch(url)
.then(res =&gt; res.json())
// getUser :: String -&gt; Async User Error
const getUser = compose(
chain(fromPromise(userPromise)),
maybeToAsync('getUser expects a string'),
safe(isString)
)
// getResource :: String -&gt; Object -&gt; Async Resource Error
const getResource = path =&gt; user =&gt; {
if (!isString(path)) {
return Async.Rejected("getResource expects a string")
}
return maybeToAsync("Error: Malformed user response received", prop(path, user))
.chain(fromPromise(resourcePromise))
}
// logError :: (...a) -&gt; IO()
const logError = (...args) =&gt; console.log("Error: ", ...args)
// logResponse :: (...a) -&gt; IO()
const logSuccess = (...args) =&gt; console.log("Success: ", ...args)
getUser("octocat")
.chain(getResource("repos_url"))
.fork(logError, logSuccess)
//=&gt; Success: { ...response }
getUser(null)
.chain(getResource("repos_url"))
.fork(logError, logSuccess)
//=&gt; Error: The user must be as string
getUser("octocat")
.chain(getResource(null))
.fork(logError, logSuccess)
//=&gt; Error: getResource expects a string
getUser("octocat")
.chain(getResource("unknown_path_here"))
.fork(logError, logSuccess)
//=&gt; Error: Malformed user response received</code></pre><p>The usage of the <code>maybeToAsync</code> transformation allows us to use all of the safety features that we get from using <code>Maybe</code> and bring them to our <code>Async</code>flows. We can now flag input and other errors as a part of our <code>Async</code> flows.</p><h4 id="using-monoids-effectively">Using Monoids Effectively</h4><p>We’ve already been using Monoids when we perform operations like <code>String</code>/<code>Array</code> concatenation and number addition in native JavaScript. It’s simply a data type that offers us the following methods.</p><pre><code>concat :: Monoid m =&gt; m a -&gt; m a -&gt; m a</code></pre><p><code>concat</code> allows us to combine two Monoids of the same type together with a pre-specified operation.</p><pre><code>empty :: Monoid m =&gt; () =&gt; m a</code></pre><p>The <code>empty</code> method provides us with an identity element, that when <code>concat</code> ed with other Monoids of the same type, would return the same element. Here’s what I’m talking about.</p><pre><code class="language-js">import { Sum } from "crocks"
Sum.empty()
//=&gt; Sum 0
Sum(10)
.concat(Sum.empty())
//=&gt; Sum 10
Sum(10)
.concat(Sum(32))
//=&gt; Sum 42</code></pre><p>By itself, this doesn’t look very useful, but <code>crocks</code> provides some additional Monoids along with helpers <code>mconcat</code>, <code>mreduce</code>, <code>mconcatMap</code> and <code>mreduceMap</code>.</p><pre><code class="language-js">import { Sum, mconcat, mreduce, mconcatMap, mreduceMap } from "crocks"
const array = [1, 3, 5, 7, 9]
const inc = x =&gt; x + 1
mconcat(Sum, array)
//=&gt; Sum 25
mreduce(Sum, array)
//=&gt; 25
mconcatMap(Sum, inc, array)
//=&gt; Sum 30
mreduceMap(Sum, inc, array)
//=&gt; 30</code></pre><p>The <code>mconcat</code> and <code>mreduce</code> methods take a Monoid and a list of elements to work with, and apply <code>concat</code> to all of their elements. The only difference between them is that <code>mconcat</code> returns an instance of the Monoid while <code>mreduce</code> returns the raw value. The <code>mconcatMap</code> and <code>mreduceMap</code> helpers work in the same way, except that they accept an additional function that is used to map over every element before calling <code>concat</code>.</p><p>Let’s look at another example of a Monoid from <code>crocks</code>, the <code>First</code> Monoid. When concatenating, <code>First</code> will always return the first, non-empty value.</p><pre><code class="language-js">import { First, Maybe } from "crocks"
First(Maybe.zero())
.concat(First(Maybe.zero()))
.concat(First(Maybe.of(5)))
//=&gt; First (Just 5)
First(Maybe.of(5))
.concat(First(Maybe.zero()))
.concat(First(Maybe.of(10)))
//=&gt; First (Just 5)</code></pre><p>Using the power of <code>First</code>, let’s try creating a function that attempts to get the first available property on an object.</p><pre><code class="language-js">import { curry, First, mreduceMap, flip, prop, compose } from "crocks"
/** tryProps -&gt; a -&gt; [String] -&gt; Object -&gt; b */
const tryProps = flip(object =&gt;
mreduceMap(
First,
flip(prop, object),
)
)
const a = {
x: 5,
z: 10,
m: 15,
g: 12
}
tryProps(["a", "y", "b", "g"], a)
//=&gt; Just 12
tryProps(["a", "b", "c"], a)
//=&gt; Nothing
tryProps(["a", "z", "c"], a)
//=&gt; Just 10</code></pre><p>Pretty neat! Here’s another example that tries to create a best-effort formatter when provided different types of values.</p><pre><code class="language-js">
import {
applyTo, mreduceMap, isString, isEmpty, mreduce, First, not, isNumber, chain
compose, safe, and, constant, Maybe, map, equals, ifElse, isBoolean, option,
} from "crocks";
// isDate :: a -&gt; Boolean
const isDate = x =&gt; x instanceof Date;
// lte :: Number -&gt; Number -&gt; Boolean
const lte = x =&gt; y =&gt; y &lt;= x;
// formatBoolean :: a -&gt; Maybe String
const formatBoolean = compose(
map(ifElse(equals(true), constant("Yes"), constant("No"))),
safe(isBoolean)
);
// formatNumber :: a -&gt; Maybe String
const formatNumber = compose(
map(n =&gt; n.toFixed(2)),
safe(isNumber)
);
// formatPercentage :: a -&gt; Maybe String
const formatPercentage = compose(
map(n =&gt; n + "%"),
safe(and(isNumber, lte(100)))
);
// formatDate :: a -&gt; Maybe String
const formatDate = compose(
map(d =&gt; d.toISOString().slice(0, 10)),
safe(isDate)
);
// formatString :: a -&gt; Maybe String
const formatString = safe(isString)
// autoFormat :: a -&gt; Maybe String
const autoFormat = value =&gt;
mreduceMap(First, applyTo(value), [
formatBoolean,
formatPercentage,
formatNumber,
formatDate,
formatString
]);
autoFormat(true)
//=&gt; Just "Yes"
autoFormat(10.02)
//=&gt; Just "10%"
autoFormat(255)
//=&gt; Just "255.00"
autoFormat(new Date())
//=&gt; Just "2019-01-14"
autoFormat("YOLO!")
//=&gt; Just "YOLO!"
autoFormat(null)
//=&gt; Nothing</code></pre><h4 id="expressing-parallelism-in-a-pointfree-manner">Expressing Parallelism in a Pointfree manner</h4><p>We might run into cases where want to perform multiple operations on a single piece of data and combine the results in some way. <code>crocks</code> provides us with two methods to achieve this. The first pattern leverages Product Types <code>Pair</code> and <code>Tuple</code>. Let’s look at a small example where we have an object that looks like this:</p><pre><code>{ ids: [11233, 12351, 16312], rejections: [11233] }</code></pre><p>We would like to write a function that accepts this object and returns an <code>Array</code> of <code>ids</code> excluding the rejected ones. Our first attempt in native JavaScript would look like this:</p><pre><code class="language-js">const getIds = (object) =&gt; object.ids.filter(x =&gt; object.rejections.includes(x))</code></pre><p>This of course works, but it would explode in case one of the properties is malformed or is not defined. Let’s make <code>getIds</code> return a <code>Maybe</code> instead. We use <code>fanout</code> helper that accepts two functions, runs it on the same input and returns a <code>Pair</code> of the results.</p><pre><code class="language-js">import { prop, compose, equals, filter, fanout, merge, liftA2 } from "crocks"
/**
* object :: Record
* Record :: {
*  ids: [Number]
*  rejection: [Number]
* }
**/
const object = { ids: [11233, 12351, 16312], rejections: [11233] }
// excludes :: [a] -&gt; [b] -&gt; Boolean
const excludes = x =&gt; y =&gt; !x.includes(y)
// difference :: [a] -&gt; [a] -&gt; [a]
const difference = compose(filter, excludes)
// getIds :: Record -&gt; Maybe [Number]
const getIds = compose(
merge(liftA2(difference)),
fanout(prop("rejections"), prop("ids"))
)
getIds(object)
//=&gt; Just [ 12351, 16312 ]
getIds({ something: [], else: 5 })
//=&gt; Nothing</code></pre><p>One of the main benefits of using the pointfree approach is that it encourages us to break our logic into smaller pieces. We now have the reusable helper <code>difference</code> (with <code>liftA2</code>, as seen previously) that we can use to <code>merge</code> both halves the <code>Pair</code> together.</p><p>The second method would be to use the <code>converge</code> combinator to achieve similar results. <code>converge</code> takes three functions and an input value. It then applies the input to the second and third function and pipes the results of both into the first. Let’s use it to create a function that normalizes an <code>Array</code>of objects based on their <code>id</code>s. We will use the <code>Assign</code> Monoid that allows us to combine objects together.</p><pre><code class="language-js">import {
mreduceMap, applyTo, option, identity, objOf, map,
converge, compose, Assign, isString, constant
} from "crocks"
import propIf from "./propIf"
// normalize :: String -&gt; [Object] -&gt; Object
const normalize = mreduceMap(
Assign,
converge(
applyTo,
identity,
compose(
option(constant({})),
map(objOf),
propIf(isString, "id")
)
)
)
normalize([{ id: "1", name: "Kerninghan" }, { id: "2", name: "Stallman" }])
//=&gt; { 1: { id: '1', name: 'Kerninghan' }, 2: { id: '2', name: 'Stallman' } }
normalize([{ id: null}, { id: "1", name: "Knuth" }, { totally: "unexpected" }])
//=&gt; { 1: { id: '1', name: 'Knuth' } }</code></pre><h4 id="using-traverse-and-sequence-to-ensure-data-sanity">Using Traverse and Sequence to Ensure Data Sanity</h4><p>We’ve seen how to use <code>Maybe</code> and friends to ensure that we’re always working with the types we expect. But what happens when we’re working with a type that contains other values, like an <code>Array</code> or a <code>List</code> for example? Let’s look at a simple function that gives us the total length of all strings contained within an <code>Array</code>.</p><pre><code class="language-js">import { compose, safe, isArray, reduce, map } from "crocks"
// sum :: [Number] -&gt; Number
const sum = reduce((a, b) =&gt; a + b, 0)
// length :: [a] -&gt; Number
const length = x =&gt; x.length;
// totalLength :: [String] -&gt; Maybe Number
const totalLength = compose(
map(sum),
map(map(length)),
safe(isArray)
)
const goodInput = ["is", "this", "the", "real", "life?"]
totalLength(goodInput)
//=&gt; Just 18
const badInput = { message: "muhuhahhahahaha!"}
totalLength(badInput)
//=&gt; Nothing</code></pre><p>Great. We’ve made sure our function always returns a <code>Nothing</code> if it doesn’t receive an <code>Array</code>. Is this enough, though?</p><pre><code class="language-js">totalLength(["stairway", "to", undefined])
//=&gt; TypeError: x is undefined</code></pre><p>Not really. Our function doesn’t guarantee that the contents of the list won’t hold any surprises. One of the ways we could solve this would be to define a <code>safeLength</code> function that only works with strings:</p><pre><code class="language-js">// safeLength :: a -&gt; Maybe Number
const safeLength = safeLift(isString, length)</code></pre><p>If we use <code>safeLength</code> instead of <code>length</code> as our mapping function, we would receive a <code>[Maybe Number]</code> instead of a <code>[Number]</code> and we cannot use our <code>sum</code>function anymore. Here’s where <code>sequence</code> comes in handy.</p><pre><code class="language-js">import { sequence, Maybe, Identity } from "crocks"
sequence(Maybe, Identity(Maybe.of(1)))
//=&gt; Just Identity 1
sequence(Array, Identity([1,2,3]))
//=&gt; [ Identity 1, Identity 2, Identity 3 ]
sequence(Maybe, [Maybe.of(4), Maybe.of(2)])
//=&gt; Just [ 4, 2 ]
sequence(Maybe, [Maybe.of(4), Maybe.zero()])
//=&gt; Nothing</code></pre><p><code>sequence</code> helps swap the inner type with the outer type while performing a certain <code>effect</code>, given that the inner type is an Applicative. The <code>sequence </code>on <code>Identity</code> is pretty dumb — it just <code>map</code>s over the inner type and returns the contents wrapped in an <code>Identity</code> container. For <code>List</code> and <code>Array</code>, <code>sequence</code>uses <code>reduce</code> on the list to combine its contents using <code>ap</code> and <code>concat</code>. Let’s see this in action in our refactored <code>totalLength</code> implementation.</p><pre><code class="language-js">// totalLength :: [String] -&gt; Maybe Number
const totalLength = compose(
map(sum),
chain(sequence(Maybe)),
map(map(safeLength)),
safe(isArray)
)
const goodString = ["is", "this", "the", "real", "life?"]
totalLength(goodString)
//=&gt; Just 18
totalLength(["stairway", "to", undefined])
//=&gt; Nothing</code></pre><p>Great! We’ve built a completely bulletproof <code>totalLength</code>. This pattern of mapping over something from <code>a -&gt; m b</code> and then using <code>sequence</code> is so common that we have another helper called <code>traverse</code> which performs both operations together. Let’s see how we can use <code>traverse</code> instead of sequence in the above example.</p><pre><code class="language-js">// totalLengthT :: [String] -&gt; Maybe Number
const totalLengthT = compose(
map(sum),
chain(traverse(Maybe, safeLength)),
safe(isArray)
)</code></pre><p>There! It works exactly the same way. If we think about it, our <code>sequence</code>operator is basically <code>traverse</code>, with an <code>identity</code> as the mapping function.</p><p>Note: Since we cannot infer inner type using JavaScript, we have to explicitly provide the type constructor as the first argument to <code>traverse</code> and <code>sequence</code>.</p><p>It’s easy to see how <code>sequence</code> and <code>traverse</code> are invaluable for validating data. Let’s try to create a generic validator that takes a schema and validates an input object. We’ll use the <code>Result</code> type, which accepts a Semigroup on the left side that allows us to collect errors. A Semigroup is similar to a Monoid and it defines a <code>concat</code> method — but unlike the Monoid, it doesn’t require the presence of the <code>empty</code> method. We’re also introducing the transformation function <code>maybeToResult</code> below, that’ll help us interoperate between <code>Maybe</code> and <code>Result</code>.</p><pre><code class="language-js">
import {
Result, isString, map, merge, constant, bimap, flip, propOr, identity,
toPairs, safe, maybeToResult, traverse, and, isNumber, compose
} from "crocks"
// length :: [a] -&gt; Int
const length = x =&gt; x.length
// gte :: Number -&gt; a -&gt; Result String a
const gte = x =&gt; y =&gt; y &gt;= x
// lte :: Number -&gt; a -&gt; Result String a
const lte = x =&gt; y =&gt; y &lt;= x
// isValidName :: a -&gt; Result String a
const isValidName = compose(
maybeToResult("expected a string less than 20 characters"),
safe(and(compose(lte(20), length), isString))
)
// isAdult :: a -&gt; Result String a
const isAdult = compose(
maybeToResult("expected a value greater than 18"),
safe(and(isNumber, gte(18)))
)
/**
*  schema :: Schema
*  Schema :: {
*    [string]: a -&gt; Result String a
*  }
* */
const schema = {
name: isValidName,
age: isAdult,
}
// makeValidator :: Schema -&gt; Object -&gt; Result [String] Object
const makeValidator = flip(object =&gt;
compose(
map(constant(object)),
traverse(Result, merge((key, validator) =&gt;
compose(
bimap(error =&gt; [`${key}: ${error}`], identity),
validator,
propOr(undefined, key)
)(object)
)
),
toPairs
)
)
// validate :: Object -&gt; Result [String] Object
const validate = makeValidator(schema)
validate(({
name: "Car",
age: 21,
}))
//=&gt; Ok { name: "Car", age: 21 }
validate(({
name: 7,
age: "Old",
}))
//=&gt;  Err [ "name: expected a string less than 20 characters", "age: expected a value greater than 18" ]</code></pre><p>Since we’ve flipped the <code>makeValidator</code> function to make more suitable for currying, our <code>compose</code> chain receives the schema that we need to validate against first. We first break the schema into key-value <code>Pair</code>s, and pass the value of each property to it’s corresponding validation function. In case the function fails, we use <code>bimap</code> to map on the error, add some more information to it, and return it as a singleton <code>Array</code>. <code>traverse</code> will then <code>concat</code> all the errors if they exist, or return the original object if it’s valid. We could have also returned a <code>String</code> instead of an <code>Array</code>, but an <code>Array</code>feels much nicer.</p><p><em>Thanks to <a href="undefined" rel="noopener">Ian Hofmann-Hicks,</a> <a href="undefined" rel="noopener">Sinisa Louc</a> and <a href="https://github.com/dalefrancis88" rel="noopener">Dale Francis</a> for their inputs on this post.</em></p>
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
