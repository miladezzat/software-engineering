---
card: "https://cdn-media-1.freecodecamp.org/images/1*QZppItKE3Sqdi3kZA-TNGQ.png"
tags: [JavaScript]
description: "I wrote this article to help you move from pre-ES6 knowledge "
author: "Milad E. Fahmy"
title: "ES5 to ESNext — here’s every feature added to JavaScript since 2015"
created: "2021-08-16T11:32:43+02:00"
modified: "2021-08-16T11:32:43+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-programming tag-web-development tag-tech tag-technology ">
<header class="post-full-header">
<h1 class="post-full-title">ES5 to ESNext — here’s every feature added to JavaScript since 2015</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*QZppItKE3Sqdi3kZA-TNGQ.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*QZppItKE3Sqdi3kZA-TNGQ.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*QZppItKE3Sqdi3kZA-TNGQ.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*QZppItKE3Sqdi3kZA-TNGQ.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*QZppItKE3Sqdi3kZA-TNGQ.png" alt="ES5 to ESNext — here’s every feature added to JavaScript since 2015">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
//...
}</code></pre><p>to</p><pre><code class="language-js">const myFunction = () =&gt; {
//...
}</code></pre><p>If the function body contains just a single statement, you can omit the brackets and write all on a single line:</p><pre><code class="language-js">const myFunction = () =&gt; doSomething()</code></pre><p>Parameters are passed in the parentheses:</p><pre><code class="language-js">const myFunction = (param1, param2) =&gt; doSomething(param1, param2)</code></pre><p>If you have one (and just one) parameter, you could omit the parentheses completely:</p><pre><code class="language-js">const myFunction = param =&gt; doSomething(param)</code></pre><p>Thanks to this short syntax, arrow functions <strong>encourage the use of small functions</strong>.</p><h3 id="implicit-return">Implicit return</h3><p>Arrow functions allow you to have an implicit return: values are returned without having to use the <code>return</code> keyword.</p><p>It works when there is a one-line statement in the function body:</p><pre><code class="language-js">const myFunction = () =&gt; 'test'
myFunction() //'test'</code></pre><p>Another example, when returning an object, remember to wrap the curly brackets in parentheses to avoid it being considered the wrapping function body brackets:</p><pre><code class="language-js">const myFunction = () =&gt; ({ value: 'test' })
myFunction() //{value: 'test'}</code></pre><h3 id="how-this-works-in-arrow-functions">How <code>this</code> works in arrow functions</h3><p><code>this</code> is a concept that can be complicated to grasp, as it varies a lot depending on the context and also varies depending on the mode of JavaScript (<em>strict mode</em> or not).</p><p>It’s important to clarify this concept because arrow functions behave very differently compared to regular functions.</p><p>When defined as a method of an object, in a regular function <code>this</code> refers to the object, so you can do:</p><pre><code class="language-js">const car = {
model: 'Fiesta',
manufacturer: 'Ford',
fullName: function() {
return `${this.manufacturer} ${this.model}`
}
}</code></pre><p>calling <code>car.fullName()</code> will return <code>"Ford Fiesta"</code>.</p><p>The <code>this</code> scope with arrow functions is <strong>inherited</strong> from the execution context. An arrow function does not bind <code>this</code> at all, so its value will be looked up in the call stack, so in this code <code>car.fullName()</code> will not work, and will return the string <code>"undefined undefined"</code>:</p><pre><code class="language-js">const car = {
model: 'Fiesta',
manufacturer: 'Ford',
fullName: () =&gt; {
return `${this.manufacturer} ${this.model}`
}
}</code></pre><p>Due to this, arrow functions are not suited as object methods.</p><p>Arrow functions cannot be used as constructors either, when instantiating an object will raise a <code>TypeError</code>.</p><p>This is where regular functions should be used instead, <strong>when dynamic context is not needed</strong>.</p><p>This is also a problem when handling events. DOM Event listeners set <code>this</code> to be the target element, and if you rely on <code>this</code> in an event handler, a regular function is necessary:</p><pre><code class="language-js">const link = document.querySelector('#link')
link.addEventListener('click', () =&gt; {
// this === window
})
const link = document.querySelector('#link')
link.addEventListener('click', function() {
// this === link
})</code></pre><h2 id="classes">Classes</h2><p>JavaScript has quite an uncommon way to implement inheritance: prototypical inheritance. <a href="https://flaviocopes.com/javascript-prototypal-inheritance/" rel="noopener">Prototypal inheritance</a>, while in my opinion great, is unlike most other popular programming language’s implementation of inheritance, which is class-based.</p><p>People coming from Java or Python or other languages had a hard time understanding the intricacies of prototypal inheritance, so the ECMAScript committee decided to sprinkle syntactic sugar on top of prototypical inheritance so that it resembles how class-based inheritance works in other popular implementations.</p><p>This is important: JavaScript under the hood is still the same, and you can access an object prototype in the usual way.</p><h3 id="a-class-definition">A class definition</h3><p>This is how a class looks.</p><pre><code class="language-js">class Person {
constructor(name) {
this.name = name
}
hello() {
return 'Hello, I am ' + this.name + '.'
}
}</code></pre><p>A class has an identifier, which we can use to create new objects using <code>new ClassIdentifier()</code>.</p><p>When the object is initialized, the <code>constructor</code> method is called, with any parameters passed.</p><p>A class also has as many methods as it needs. In this case <code>hello</code> is a method and can be called on all objects derived from this class:</p><pre><code class="language-js">const flavio = new Person('Flavio')
flavio.hello()</code></pre><h3 id="class-inheritance">Class inheritance</h3><p>A class can extend another class, and objects initialized using that class inherit all the methods of both classes.</p><p>If the inherited class has a method with the same name as one of the classes higher in the hierarchy, the closest method takes precedence:</p><pre><code class="language-js">class Programmer extends Person {
hello() {
return super.hello() + ' I am a programmer.'
}
}
const flavio = new Programmer('Flavio')
flavio.hello()</code></pre><p>(the above program prints “<em>Hello, I am Flavio. I am a programmer.</em>”)</p><p>Classes do not have explicit class variable declarations, but you must initialize any variable in the constructor.</p><p>Inside a class, you can reference the parent class calling <code>super()</code>.</p><h3 id="static-methods">Static methods</h3><p>Normally methods are defined on the instance, not on the class.</p><p>Static methods are executed on the class instead:</p><pre><code class="language-js">class Person {
static genericHello() {
return 'Hello'
}
}
Person.genericHello() //Hello</code></pre><h3 id="private-methods">Private methods</h3><p>JavaScript does not have a built-in way to define private or protected methods.</p><p>There are workarounds, but I won’t describe them here.</p><h3 id="getters-and-setters">Getters and setters</h3><p>You can add methods prefixed with <code>get</code> or <code>set</code> to create a getter and setter, which are two different pieces of code that are executed based on what you are doing: accessing the variable, or modifying its value.</p><pre><code class="language-js">class Person {
constructor(name) {
this._name = name
}
set name(value) {
this._name = value
}
get name() {
return this._name
}
}</code></pre><p>If you only have a getter, the property cannot be set, and any attempt at doing so will be ignored:</p><pre><code class="language-js">class Person {
constructor(name) {
this._name = name
}
get name() {
return this._name
}
}</code></pre><p>If you only have a setter, you can change the value but not access it from the outside:</p><pre><code class="language-js">class Person {
constructor(name) {
this._name = name
}
set name(value) {
this._name = value
}
}</code></pre><h2 id="default-parameters">Default parameters</h2><p>This is a <code>doSomething</code> function which accepts <code>param1</code>.</p><pre><code class="language-js">const doSomething = (param1) =&gt; {
}</code></pre><p>We can add a default value for <code>param1</code> if the function is invoked without specifying a parameter:</p><pre><code class="language-js">const doSomething = (param1 = 'test') =&gt; {
}</code></pre><p>This works for more parameters as well, of course:</p><pre><code class="language-js">const doSomething = (param1 = 'test', param2 = 'test2') =&gt; {
}</code></pre><p>What if you have an unique object with parameters values in it?</p><p>Once upon a time, if we had to pass an object of options to a function, in order to have default values of those options if one of them was not defined, you had to add a little bit of code inside the function:</p><pre><code class="language-js">const colorize = (options) =&gt; {
if (!options) {
options = {}
}
const color = ('color' in options) ? options.color : 'yellow'
...
}</code></pre><p>With destructuring you can provide default values, which simplifies the code a lot:</p><pre><code class="language-js">const colorize = ({ color = 'yellow' }) =&gt; {
...
}</code></pre><p>If no object is passed when calling our <code>colorize</code> function, similarly we can assign an empty object by default:</p><pre><code class="language-js">const spin = ({ color = 'yellow' } = {}) =&gt; {
...
}</code></pre><h2 id="template-literals">Template Literals</h2><p>Template Literals allow you to work with strings in a novel way compared to ES5 and below.</p><p>The syntax at a first glance is very simple, just use backticks instead of single or double quotes:</p><pre><code class="language-js">const a_string = `something`</code></pre><p>They are unique because they provide a lot of features that normal strings built with quotes do not, in particular:</p><ul><li>they offer a great syntax to define multiline strings</li><li>they provide an easy way to interpolate variables and expressions in strings</li><li>they allow you to create DSLs with template tags (DSL means domain specific language, and it’s for example used in React by Styled Components, to define CSS for a component)</li></ul><p>Let’s dive into each of these in detail.</p><h3 id="multiline-strings">Multiline strings</h3><p>Pre-ES6, to create a string spanning over two lines you had to use the <code>\</code> character at the end of a line:</p><pre><code class="language-js">const string =
'first part \
second part'</code></pre><p>This allows to create a string on 2 lines, but it’s rendered on just one line:</p><p><code>first part second part</code></p><p>To render the string on multiple lines as well, you explicitly need to add <code>\n</code> at the end of each line, like this:</p><pre><code class="language-js">const string =
'first line\n \
second line'</code></pre><p>or</p><pre><code class="language-js">const string = 'first line\n' + 'second line'</code></pre><p>Template literals make multiline strings much simpler.</p><p>Once a template literal is opened with the backtick, you just press enter to create a new line, with no special characters, and it’s rendered as-is:</p><pre><code class="language-js">const string = `Hey
this
string
is awesome!`</code></pre><p>Keep in mind that space is meaningful, so doing this:</p><pre><code class="language-js">const string = `First
Second`</code></pre><p>is going to create a string like this:</p><pre><code class="language-js">First
Second</code></pre><p>an easy way to fix this problem is by having an empty first line, and appending the trim() method right after the closing backtick, which will eliminate any space before the first character:</p><pre><code class="language-js">const string = `
First
Second`.trim()</code></pre><h3 id="interpolation">Interpolation</h3><p>Template literals provide an easy way to interpolate variables and expressions into strings.</p><p>You do so by using the <code>${...}</code> syntax:</p><pre><code class="language-js">const var = 'test'
const string = `something ${var}` //something test</code></pre><p>inside the <code>${}</code> you can add anything, even expressions:</p><pre><code class="language-js">const string = `something ${1 + 2 + 3}`
const string2 = `something ${foo() ? 'x' : 'y'}`</code></pre><h3 id="template-tags">Template tags</h3><p>Tagged templates is one feature that might sound less useful at first for you, but it’s actually used by lots of popular libraries around, like Styled Components or Apollo, the GraphQL client/server lib, so it’s essential to understand how it works.</p><p>In Styled Components template tags are used to define CSS strings:</p><pre><code class="language-js">const Button = styled.button`
font-size: 1.5em;
background-color: black;
color: white;
`</code></pre><p>In Apollo template tags are used to define a GraphQL query schema:</p><pre><code class="language-js">const query = gql`
query {
...
}
`</code></pre><p>The <code>styled.button</code> and <code>gql</code> template tags highlighted in those examples are just <strong>functions</strong>:</p><pre><code class="language-js">function gql(literals, ...expressions) {}</code></pre><p>this function returns a string, which can be the result of <em>any</em> kind of computation.</p><p><code>literals</code> is an array containing the template literal content tokenized by the expressions interpolations.</p><p><code>expressions</code> contains all the interpolations.</p><p>If we take an example above:</p><pre><code class="language-js">const string = `something ${1 + 2 + 3}`</code></pre><p><code>literals</code> is an array with two items. The first is <code>something</code>, the string until the first interpolation, and the second is an empty string, the space between the end of the first interpolation (we only have one) and the end of the string.</p><p><code>expressions</code> in this case is an array with a single item, <code>6</code>.</p><p>A more complex example is:</p><pre><code class="language-js">const string = `something
another ${'x'}
new line ${1 + 2 + 3}
test`</code></pre><p>in this case <code>literals</code> is an array where the first item is:</p><pre><code class="language-js">;`something
another `</code></pre><p>the second is:</p><pre><code>;`new line `</code></pre><p>and the third is:</p><pre><code class="language-js">;`
new line `</code></pre><p><code>expressions</code> in this case is an array with two items, <code>x</code> and <code>6</code>.</p><p>The function that is passed those values can do anything with them, and this is the power of this kind feature.</p><p>The most simple example is replicating what the string interpolation does, by joining <code>literals</code> and <code>expressions</code>:</p><pre><code class="language-js">const interpolated = interpolate`I paid ${10}€`</code></pre><p>and this is how <code>interpolate</code> works:</p><pre><code class="language-js">function interpolate(literals, ...expressions) {
let string = ``
for (const [i, val] of expressions) {
string += literals[i] + val
}
string += literals[literals.length - 1]
return string
}</code></pre><h2 id="destructuring-assignments">Destructuring assignments</h2><p>Given an object, you can extract just some values and put them into named variables:</p><pre><code class="language-js">const person = {
firstName: 'Tom',
lastName: 'Cruise',
actor: true,
age: 54, //made up
}
const {firstName: name, age} = person</code></pre><p><code>name</code> and <code>age</code> contain the desired values.</p><p>The syntax also works on arrays:</p><pre><code class="language-js">const a = [1,2,3,4,5]
const [first, second] = a</code></pre><p>This statement creates 3 new variables by getting the items with index 0, 1, 4 from the array <code>a</code>:</p><h2 id="enhanced-object-literals">Enhanced Object Literals</h2><pre><code class="language-js">const [first, second, , , fifth] = a</code></pre><p>In ES2015 Object Literals gained superpowers.</p><h3 id="simpler-syntax-to-include-variables">Simpler syntax to include variables</h3><p>Instead of doing</p><pre><code class="language-js">const something = 'y'
const x = {
something: something
}</code></pre><p>you can do</p><pre><code class="language-js">const something = 'y'
const x = {
something
}</code></pre><h3 id="prototype">Prototype</h3><p>A prototype can be specified with</p><pre><code class="language-js">const anObject = { y: 'y' }
const x = {
__proto__: anObject
}</code></pre><h3 id="super-">super()</h3><pre><code class="language-js">const anObject = { y: 'y', test: () =&gt; 'zoo' }
const x = {
__proto__: anObject,
test() {
return super.test() + 'x'
}
}
x.test() //zoox</code></pre><h3 id="dynamic-properties">Dynamic properties</h3><pre><code class="language-js">const x = {
['a' + '_' + 'b']: 'z'
}
x.a_b //z</code></pre><h2 id="for-of-loop">For-of loop</h2><p>ES5 back in 2009 introduced <code>forEach()</code> loops. While nice, they offered no way to break, like <code>for</code> loops always did.</p><p>ES2015 introduced the <code><strong>for-of</strong></code><strong> loop</strong>, which combines the conciseness of <code>forEach</code> with the ability to break:</p><pre><code class="language-js">//iterate over the value
for (const v of ['a', 'b', 'c']) {
console.log(v);
}
//get the index as well, using `entries()`
for (const [i, v] of ['a', 'b', 'c'].entries()) {
console.log(index) //index
console.log(value) //value
}</code></pre><p>Notice the use of <code>const</code>. This loop creates a new scope in every iteration, so we can safely use that instead of <code>let</code>.</p><p>The difference with <code>for...in</code> is:</p><ul><li><code>for...of</code> <strong>iterates over the property values</strong></li><li><code>for...in</code> <strong>iterates the property names</strong></li></ul><h2 id="promises">Promises</h2><p>A promise is commonly defined as <strong>a proxy for a value that will eventually become available</strong>.</p><p>Promises are one way to deal with asynchronous code, without writing too many callbacks in your code.</p><p><strong>Async functions</strong> use the promises API as their building block, so understanding them is fundamental even if in newer code you’ll likely use async functions instead of promises.</p><h3 id="how-promises-work-in-brief">How promises work, in brief</h3><p>Once a promise has been called, it will start in <strong>pending state</strong>. This means that the caller function continues the execution, while it waits for the promise to do its own processing, and give the caller function some feedback.</p><p>At this point, the caller function waits for it to either return the promise in a <strong>resolved state</strong>, or in a <strong>rejected state</strong>, but as you know <a href="https://flaviocopes.com/javascript/" rel="noopener">JavaScript</a> is asynchronous, so <em>the function continues its execution while the promise does it work</em>.</p><h3 id="which-js-api-use-promises">Which JS API use promises?</h3><p>In addition to your own code and library code, promises are used by standard modern Web APIs such as:</p><ul><li>the Battery API</li><li>the <a href="https://flaviocopes.com/fetch-api/" rel="noopener">Fetch API</a></li><li><a href="https://flaviocopes.com/service-workers/" rel="noopener">Service Workers</a></li></ul><p>It’s unlikely that in modern JavaScript you’ll find yourself <em>not</em> using promises, so let’s start diving right into them.</p><h3 id="creating-a-promise">Creating a promise</h3><p>The Promise API exposes a Promise constructor, which you initialize using <code>new Promise()</code>:</p><pre><code class="language-js">let done = true
const isItDoneYet = new Promise((resolve, reject) =&gt; {
if (done) {
const workDone = 'Here is the thing I built'
resolve(workDone)
} else {
const why = 'Still working on something else'
reject(why)
}
})</code></pre><p>As you can see the promise checks the <code>done</code> global constant, and if that's true, we return a resolved promise, otherwise a rejected promise.</p><p>Using <code>resolve</code> and <code>reject</code> we can communicate back a value, in the above case we just return a string, but it could be an object as well.</p><h3 id="consuming-a-promise">Consuming a promise</h3><p>In the last section, we introduced how a promise is created.</p><p>Now let’s see how the promise can be <em>consumed</em> or used.</p><pre><code class="language-js">const isItDoneYet = new Promise()
//...
const checkIfItsDone = () =&gt; {
isItDoneYet
.then(ok =&gt; {
console.log(ok)
})
.catch(err =&gt; {
console.error(err)
})
}</code></pre><p>Running <code>checkIfItsDone()</code> will execute the <code>isItDoneYet()</code> promise and will wait for it to resolve, using the <code>then</code> callback, and if there is an error, it will handle it in the <code>catch</code> callback.</p><h3 id="chaining-promises">Chaining promises</h3><p>A promise can be returned to another promise, creating a chain of promises.</p><p>A great example of chaining promises is given by the <a href="https://flaviocopes.com/fetch-api" rel="noopener">Fetch API</a>, a layer on top of the XMLHttpRequest API, which we can use to get a resource and queue a chain of promises to execute when the resource is fetched.</p><p>The Fetch API is a promise-based mechanism, and calling <code>fetch()</code> is equivalent to defining our own promise using <code>new Promise()</code>.</p><h3 id="example-of-chaining-promises">Example of chaining promises</h3><pre><code class="language-js">const status = response =&gt; {
if (response.status &gt;= 200 &amp;&amp; response.status &lt; 300) {
return Promise.resolve(response)
}
return Promise.reject(new Error(response.statusText))
}
const json = response =&gt; response.json()
fetch('/todos.json')
.then(status)
.then(json)
.then(data =&gt; {
console.log('Request succeeded with JSON response', data)
})
.catch(error =&gt; {
console.log('Request failed', error)
})</code></pre><p>In this example, we call <code>fetch()</code> to get a list of TODO items from the <code>todos.json</code> file found in the domain root, and we create a chain of promises.</p><p>Running <code>fetch()</code> returns a <a href="https://fetch.spec.whatwg.org/#concept-response" rel="noopener">response</a>, which has many properties, and within those we reference:</p><ul><li><code>status</code>, a numeric value representing the HTTP status code</li><li><code>statusText</code>, a status message, which is <code>OK</code> if the request succeeded</li></ul><p><code>response</code> also has a <code>json()</code> method, which returns a promise that will resolve with the content of the body processed and transformed into JSON.</p><p>So given those premises, this is what happens: the first promise in the chain is a function that we defined, called <code>status()</code>, that checks the response status and if it's not a success response (between 200 and 299), it rejects the promise.</p><p>This operation will cause the promise chain to skip all the chained promises listed and will skip directly to the <code>catch()</code> statement at the bottom, logging the <code>Request failed</code> text along with the error message.</p><p>If that succeeds instead, it calls the json() function we defined. Since the previous promise, when successful, returned the <code>response</code> object, we get it as an input to the second promise.</p><p>In this case, we return the data JSON processed, so the third promise receives the JSON directly:</p><pre><code class="language-js">.then((data) =&gt; {
console.log('Request succeeded with JSON response', data)
})</code></pre><p>and we log it to the console.</p><h3 id="handling-errors">Handling errors</h3><p>In the above example, in the previous section, we had a <code>catch</code> that was appended to the chain of promises.</p><p>When anything in the chain of promises fails and raises an error or rejects the promise, the control goes to the nearest <code>catch()</code> statement down the chain.</p><pre><code class="language-js">new Promise((resolve, reject) =&gt; {
throw new Error('Error')
}).catch(err =&gt; {
console.error(err)
})
// or
new Promise((resolve, reject) =&gt; {
reject('Error')
}).catch(err =&gt; {
console.error(err)
})</code></pre><h3 id="cascading-errors">Cascading errors</h3><p>If inside the <code>catch()</code> you raise an error, you can append a second <code>catch()</code> to handle it, and so on.</p><pre><code class="language-js">new Promise((resolve, reject) =&gt; {
throw new Error('Error')
})
.catch(err =&gt; {
throw new Error('Error')
})
.catch(err =&gt; {
console.error(err)
})</code></pre><h3 id="orchestrating-promises">Orchestrating promises</h3><h4 id="promise-all-"><code>Promise.all()</code></h4><p>If you need to synchronize different promises, <code>Promise.all()</code> helps you define a list of promises, and execute something when they are all resolved.</p><p>Example:</p><pre><code class="language-js">const f1 = fetch('/something.json')
const f2 = fetch('/something2.json')
Promise.all([f1, f2])
.then(res =&gt; {
console.log('Array of results', res)
})
.catch(err =&gt; {
console.error(err)
})</code></pre><p>The ES2015 destructuring assignment syntax allows you to also do</p><pre><code class="language-js">Promise.all([f1, f2]).then(([res1, res2]) =&gt; {
console.log('Results', res1, res2)
})</code></pre><p>You are not limited to using <code>fetch</code> of course, <strong>any promise is good to go</strong>.</p><h4 id="promise-race-"><code>Promise.race()</code></h4><p><code>Promise.race()</code> runs as soon as one of the promises you pass to it resolves, and it runs the attached callback just once with the result of the first promise resolved.</p><p>Example:</p><pre><code class="language-js">const promiseOne = new Promise((resolve, reject) =&gt; {
setTimeout(resolve, 500, 'one')
})
const promiseTwo = new Promise((resolve, reject) =&gt; {
setTimeout(resolve, 100, 'two')
})
Promise.race([promiseOne, promiseTwo]).then(result =&gt; {
console.log(result) // 'two'
})</code></pre><h2 id="modules">Modules</h2><p>ES Modules is the ECMAScript standard for working with modules.</p><p>While Node.js has been using the CommonJS standard for years, the browser never had a module system, as every major decision such as a module system must be first standardized by ECMAScript and then implemented by the browser.</p><p>This standardization process completed with ES2015 and browsers started implementing this standard trying to keep everything well aligned, working all in the same way, and now ES Modules are supported in Chrome, Safari, Edge and Firefox (since version 60).</p><p>Modules are very cool, because they let you encapsulate all sorts of functionality, and expose this functionality to other JavaScript files, as libraries.</p><h3 id="the-es-modules-syntax">The ES Modules Syntax</h3><p>The syntax to import a module is:</p><pre><code class="language-js">import package from 'module-name'</code></pre><p>while CommonJS uses</p><pre><code class="language-js">const package = require('module-name')</code></pre><p>A module is a JavaScript file that <strong>exports</strong> one or more values (objects, functions or variables), using the <code>export</code> keyword. For example, this module exports a function that returns a string uppercase:</p><blockquote><em>uppercase.js</em></blockquote><pre><code class="language-js">export default str =&gt; str.toUpperCase()</code></pre><p>In this example, the module defines a single, <strong>default export</strong>, so it can be an anonymous function. Otherwise it would need a name to distinguish it from other exports.</p><p>Now, <strong>any other JavaScript module</strong> can import the functionality offered by uppercase.js by importing it.</p><p>An HTML page can add a module by using a <code>&lt;scri</code>pt&gt; tag with the sp<code>ecial type="m</code>odule" attribute:</p><pre><code class="language-js">&lt;script type="module" src="index.js"&gt;&lt;/script&gt;</code></pre><blockquote><em>Note: this module import behaves like a <code>defer</code> script load. See <a href="https://flaviocopes.com/javascript-async-defer/" rel="noopener">efficiently load JavaScript with defer and async</a></em></blockquote><p>It’s important to note that any script loaded with <code>type="module"</code> is loaded in strict mode.</p><p>In this example, the <code>uppercase.js</code> module defines a <strong>default export</strong>, so when we import it, we can assign it a name we prefer:</p><pre><code class="language-js">import toUpperCase from './uppercase.js'</code></pre><p>and we can use it:</p><pre><code>toUpperCase('test') //'TEST'</code></pre><p>You can also use an absolute path for the module import, to reference modules defined on another domain:</p><pre><code class="language-js">import toUpperCase from 'https://flavio-es-modules-example.glitch.me/uppercase.js'</code></pre><p>This is also valid import syntax:</p><pre><code class="language-js">import { toUpperCase } from '/uppercase.js'
import { toUpperCase } from '../uppercase.js'</code></pre><p>This is not:</p><pre><code class="language-js">import { toUpperCase } from 'uppercase.js'
import { toUpperCase } from 'utils/uppercase.js'</code></pre><p>It’s either absolute, or has a <code>./</code> or <code>/</code> before the name.</p><h3 id="other-import-export-options">Other import/export options</h3><p>We saw this example above:</p><pre><code class="language-js">export default str =&gt; str.toUpperCase()</code></pre><p>This creates one default export. In a file however you can export more than one thing, by using this syntax:</p><pre><code class="language-js">const a = 1
const b = 2
const c = 3
export { a, b, c }</code></pre><p>Another module can import all those exports using</p><pre><code class="language-js">import * from 'module'</code></pre><p>You can import just a few of those exports, using the destructuring assignment:</p><pre><code class="language-js">import { a } from 'module'
import { a, b } from 'module'</code></pre><p>You can rename any import, for convenience, using <code>as</code>:</p><pre><code class="language-js">import { a, b as two } from 'module'</code></pre><p>You can import the default export, and any non-default export by name, like in this common React import:</p><pre><code class="language-js">import React, { Component } from 'react'</code></pre><p>You can see an ES Modules example here: <a href="https://glitch.com/edit/#!/flavio-es-modules-example?path=index.html" rel="noopener">https://glitch.com/edit/#!/flavio-es-modules-example?path=index.html</a></p><h3 id="cors">CORS</h3><p>Modules are fetched using CORS. This means that if you reference scripts from other domains, they must have a valid CORS header that allows cross-site loading (like <code>Access-Control-Allow-Origin: *</code>)</p><h4 id="what-about-browsers-that-do-not-support-modules">What about browsers that do not support modules?</h4><p>Use a combination of <code>type="module"</code> and <code>nomodule</code>:</p><pre><code class="language-js">&lt;script type="module" src="module.js"&gt;&lt;/script&gt;
&lt;script nomodule src="fallback.js"&gt;&lt;/script&gt;</code></pre><h3 id="wrapping-up-modules">Wrapping up modules</h3><p>ES Modules are one of the biggest features introduced in modern browsers. They are part of ES6 but the road to implement them has been long.</p><p>We can now use them! But we must also remember that having more than a few modules is going to have a performance hit on our pages, as it’s one more step that the browser must perform at runtime.</p><p>Webpack is probably going to still be a huge player even if ES Modules land in the browser, but having such a feature directly built in the language is huge for a unification of how modules work client-side and on Node.js as well.</p><h2 id="new-string-methods">New String methods</h2><p>Any string value got some new instance methods:</p><ul><li><code>repeat()</code></li><li><code>codePointAt()</code></li></ul><h3 id="repeat-">repeat()</h3><p>Repeats the strings for the specified number of times:</p><pre><code class="language-js">'Ho'.repeat(3) //'HoHoHo'</code></pre><p>Returns an empty string if there is no parameter, or the parameter is <code>0</code>. If the parameter is negative you'll get a RangeError.</p><h3 id="codepointat-">codePointAt()</h3><p>This method can be used to handle Unicode characters that cannot be represented by a single 16-bit Unicode unit, but need 2 instead.</p><p>Using <code>charCodeAt()</code> you need to retrieve the first, and the second, and combine them. Using <code>codePointAt()</code> you get the whole character in one call.</p><p>For example, this Chinese character “?” is composed by 2 UTF-16 (Unicode) parts:</p><pre><code class="language-js">"?".charCodeAt(0).toString(16) //d842
"?".charCodeAt(1).toString(16) //dfb7</code></pre><p>If you create a new character by combining those unicode characters:</p><pre><code class="language-js">"\ud842\udfb7" //"?"</code></pre><p>You can get the same result sign <code>codePointAt()</code>:</p><pre><code class="language-js">"?".codePointAt(0) //20bb7</code></pre><p>If you create a new character by combining those unicode characters:</p><pre><code class="language-js">"\u{20bb7}" //"?"</code></pre><p>More on Unicode and working with it in my <a href="https://flaviocopes.com/unicode/" rel="noopener">Unicode guide</a>.</p><h2 id="new-object-methods">New Object methods</h2><p>ES2015 introduced several static methods under the Object namespace:</p><ul><li><code>Object.is()</code> determines if two values are the same value</li><li><code>Object.assign()</code> used to shallow copy an object</li><li><code>Object.setPrototypeOf</code> sets an object prototype</li></ul><h3 id="object-is-">Object.is()</h3><p>This methods aims to help comparing values.</p><p>Usage:</p><pre><code class="language-js">Object.is(a, b)</code></pre><p>The result is always <code>false</code> unless:</p><ul><li><code>a</code> and <code>b</code> are the same exact object</li><li><code>a</code> and <code>b</code> are equal strings (strings are equal when composed by the same characters)</li><li><code>a</code> and <code>b</code> are equal numbers (numbers are equal when their value is equal)</li><li><code>a</code> and <code>b</code> are both <code>undefined</code>, both <code>null</code>, both <code>NaN</code>, both <code>true</code> or both <code>false</code></li></ul><p><code>0</code> and <code>-0</code> are different values in JavaScript, so pay attention in this special case (convert all to <code>+0</code> using the <code>+</code> unary operator before comparing, for example).</p><h3 id="object-assign-">Object.assign()</h3><p>Introduced in <code>ES2015</code>, this method copies all the <strong><strong>enumerable own properties</strong></strong> of one or more objects into another.</p><p>Its primary use case is to create a shallow copy of an object.</p><pre><code class="language-js">const copied = Object.assign({}, original)</code></pre><p>Being a shallow copy, values are cloned, and objects references are copied (not the objects themselves), so if you edit an object property in the original object, that’s modified also in the copied object, since the referenced inner object is the same:</p><pre><code class="language-js">const original = {
name: 'Fiesta',
car: {
color: 'blue'
}
}
const copied = Object.assign({}, original)
original.name = 'Focus'
original.car.color = 'yellow'
copied.name //Fiesta
copied.car.color //yellow</code></pre><p>I mentioned “one or more”:</p><pre><code class="language-js">const wisePerson = {
isWise: true
}
const foolishPerson = {
isFoolish: true
}
const wiseAndFoolishPerson = Object.assign({}, wisePerson, foolishPerson)
console.log(wiseAndFoolishPerson) //{ isWise: true, isFoolish: true }</code></pre><h3 id="object-setprototypeof-">Object.setPrototypeOf()</h3><p>Set the prototype of an object. Accepts two arguments: the object and the prototype.</p><p>Usage:</p><pre><code class="language-js">Object.setPrototypeOf(object, prototype)</code></pre><p>Example:</p><pre><code class="language-js">const animal = {
isAnimal: true
}
const mammal = {
isMammal: true
}
mammal.__proto__ = animal
mammal.isAnimal //true
const dog = Object.create(animal)
dog.isAnimal  //true
console.log(dog.isMammal)  //undefined
Object.setPrototypeOf(dog, mammal)
dog.isAnimal //true
dog.isMammal //true</code></pre><h3 id="the-spread-operator">The spread operator</h3><p>You can expand an array, an object or a string using the spread operator <code>...</code></p><p>Let’s start with an array example. Given</p><pre><code class="language-js">const a = [1, 2, 3]</code></pre><p>you can create a new array using</p><pre><code class="language-js">const b = [...a, 4, 5, 6]</code></pre><p>You can also create a copy of an array using</p><pre><code class="language-js">const c = [...a]</code></pre><p>This works for objects as well. Clone an object with:</p><pre><code class="language-js">const newObj = { ...oldObj }</code></pre><p>Using strings, the spread operator creates an array with each char in the string:</p><pre><code class="language-js">const hey = 'hey'
const arrayized = [...hey] // ['h', 'e', 'y']</code></pre><p>This operator has some pretty useful applications. The most important one is the ability to use an array as function argument in a very simple way:</p><p>(In the past you could do this using <code>f.apply(null, a)</code> but that's not as nice and readable.)</p><p>The <strong><strong>rest element</strong></strong> is useful when working with <strong><strong>array destructuring</strong></strong>:</p><pre><code class="language-js">const numbers = [1, 2, 3, 4, 5]
[first, second, ...others] = numbers</code></pre><p>and <strong><strong>spread elements</strong></strong>:</p><pre><code class="language-js">const numbers = [1, 2, 3, 4, 5]
const sum = (a, b, c, d, e) =&gt; a + b + c + d + e
const sum = sum(...numbers)</code></pre><p>ES2018 introduces rest properties, which are the same but for objects.</p><p><strong><strong>Rest properties</strong></strong>:</p><pre><code class="language-js">const { first, second, ...others } = {
first: 1,
second: 2,
third: 3,
fourth: 4,
fifth: 5
}
first // 1
second // 2
others // { third: 3, fourth: 4, fifth: 5 }</code></pre><p><strong><strong>Spread properties</strong></strong> allow us to create a new object by combining the properties of the object passed after the spread operator:</p><pre><code class="language-js">const items = { first, second, ...others }
items //{ first: 1, second: 2, third: 3, fourth: 4, fifth: 5 }</code></pre><h2 id="set">Set</h2><p>A Set data structure allows us to add data to a container.</p><p>A Set is a collection of objects or primitive types (strings, numbers or booleans), and you can think of it as a Map where values are used as map keys, with the map value always being a boolean true.</p><h3 id="initialize-a-set">Initialize a Set</h3><p>A Set is initialized by calling:</p><pre><code class="language-js">const s = new Set()</code></pre><h3 id="add-items-to-a-set">Add items to a Set</h3><p>You can add items to the Set by using the <code>add</code> method:</p><pre><code class="language-js">s.add('one')
s.add('two')</code></pre><p>A set only stores unique elements, so calling <code>s.add('one')</code> multiple times won't add new items.</p><p>You can’t add multiple elements to a set at the same time. You need to call <code>add()</code> multiple times.</p><h3 id="check-if-an-item-is-in-the-set">Check if an item is in the set</h3><p>Once an element is in the set, we can check if the set contains it:</p><pre><code class="language-js">s.has('one') //true
s.has('three') //false</code></pre><h3 id="delete-an-item-from-a-set-by-key">Delete an item from a Set by key</h3><p>Use the <code>delete()</code> method:</p><pre><code class="language-js">s.delete('one')</code></pre><h3 id="determine-the-number-of-items-in-a-set">Determine the number of items in a Set</h3><p>Use the <code>size</code> property:</p><pre><code class="language-js">s.size</code></pre><h3 id="delete-all-items-from-a-set">Delete all items from a Set</h3><p>Use the <code>clear()</code> method:</p><pre><code class="language-js">s.clear()</code></pre><h3 id="iterate-the-items-in-a-set">Iterate the items in a Set</h3><p>Use the <code>keys()</code> or <code>values()</code> methods - they are equivalent:</p><pre><code class="language-js">for (const k of s.keys()) {
console.log(k)
}
for (const k of s.values()) {
console.log(k)
}</code></pre><p>The <code>entries()</code> method returns an iterator, which you can use like this:</p><pre><code class="language-js">const i = s.entries()
console.log(i.next())</code></pre><p>calling <code>i.next()</code> will return each element as a <code>{ value, done = false }</code> object until the iterator ends, at which point <code>done</code> is <code>true</code>.</p><p>You can also use the forEach() method on the set:</p><pre><code class="language-js">s.forEach(v =&gt; console.log(v))</code></pre><p>or you can just use the set in a for..of loop:</p><pre><code class="language-js">for (const k of s) {
console.log(k)
}</code></pre><h3 id="initialize-a-set-with-values">Initialize a Set with values</h3><p>You can initialize a Set with a set of values:</p><pre><code class="language-js">const s = new Set([1, 2, 3, 4])</code></pre><h3 id="convert-the-set-keys-into-an-array">Convert the Set keys into an array</h3><pre><code class="language-js">const a = [...s.keys()]
// or
const a = [...s.values()]</code></pre><h3 id="a-weakset">A WeakSet</h3><p>A WeakSet is a special kind of Set.</p><p>In a Set, items are never garbage collected. A WeakSet instead lets all its items be freely garbage collected. Every key of a WeakSet is an object. When the reference to this object is lost, the value can be garbage collected.</p><p>Here are the main differences:</p><ol><li>you cannot iterate over the WeakSet</li><li>you cannot clear all items from a WeakSet</li><li>you cannot check its size</li></ol><p>A WeakSet is generally used by framework-level code, and only exposes these methods:</p><ul><li>add()</li><li>has()</li><li>delete()</li></ul><h2 id="map-function map() { [native code] }1">Map</h2><p>A Map data structure allows us to associate data to a key.</p><h3 id="before-es6">Before ES6</h3><p>Before its introduction, people generally used objects as maps, by associating some object or value to a specific key value:</p><pre><code class="language-js">const car = {}
car['color'] = 'red'
car.owner = 'Flavio'
console.log(car['color']) //red
console.log(car.color) //red
console.log(car.owner) //Flavio
console.log(car['owner']) //Flavio</code></pre><h3 id="enter-map">Enter Map</h3><p>ES6 introduced the Map data structure, providing us a proper tool to handle this kind of data organization.</p><p>A Map is initialized by calling:</p><pre><code class="language-js">const m = new Map()</code></pre><h3 id="add-items-to-a-map">Add items to a Map</h3><p>You can add items to the map by using the <code>set</code> method:</p><pre><code class="language-js">m.set('color', 'red')
m.set('age', 2)</code></pre><h3 id="get-an-item-from-a-map-by-key">Get an item from a map by key</h3><p>And you can get items out of a map by using <code>get</code>:</p><pre><code class="language-js">const color = m.get('color')
const age = m.get('age')</code></pre><h3 id="delete-an-item-from-a-map-by-key">Delete an item from a map by key</h3><p>Use the <code>delete()</code> method:</p><pre><code class="language-js">m.delete('color')</code></pre><h3 id="delete-all-items-from-a-map">Delete all items from a map</h3><p>Use the <code>clear()</code> method:</p><pre><code class="language-js">m.clear()</code></pre><h3 id="check-if-a-map-contains-an-item-by-key">Check if a map contains an item by key</h3><p>Use the <code>has()</code> method:</p><pre><code class="language-js">const hasColor = m.has('color')</code></pre><h3 id="find-the-number-of-items-in-a-map">Find the number of items in a map</h3><p>Use the <code>size</code> property:</p><pre><code class="language-js">const size = m.size</code></pre><h3 id="initialize-a-map-with-values">Initialize a map with values</h3><p>You can initialize a map with a set of values:</p><pre><code class="language-js">const m = new Map([['color', 'red'], ['owner', 'Flavio'], ['age', 2]])</code></pre><h3 id="map-keys">Map keys</h3><p>Just like any value (object, array, string, number) can be used as the value of the key-value entry of a map item, <strong><strong>any value can be used as the key</strong></strong>, even objects.</p><p>If you try to get a non-existing key using <code>get()</code> out of a map, it will return <code>undefined</code>.</p><h3 id="weird-situations-you-ll-almost-never-find-in-real-life">Weird situations you’ll almost never find in real life</h3><pre><code class="language-js">const m = new Map()
m.set(NaN, 'test')
m.get(NaN) //test
const m = new Map()
m.set(+0, 'test')
m.get(-0) //test</code></pre><h3 id="iterate-over-map-keys">Iterate over map keys</h3><p>Map offers the <code>keys()</code> method we can use to iterate on all the keys:</p><pre><code class="language-js">for (const k of m.keys()) {
console.log(k)
}</code></pre><h3 id="iterate-over-map-values">Iterate over map values</h3><p>The Map object offers the <code>values()</code> method we can use to iterate on all the values:</p><pre><code class="language-js">for (const v of m.values()) {
console.log(v)
}</code></pre><h3 id="iterate-over-map-key-value-pairs">Iterate over map key, value pairs</h3><p>The Map object offers the <code>entries()</code> method we can use to iterate on all the values:</p><pre><code class="language-js">for (const [k, v] of m.entries()) {
console.log(k, v)
}</code></pre><p>which can be simplified to</p><pre><code class="language-js">for (const [k, v] of m) {
console.log(k, v)
}</code></pre><h3 id="convert-the-map-keys-into-an-array">Convert the map keys into an array</h3><pre><code class="language-js">const a = [...m.keys()]</code></pre><h3 id="convert-the-map-values-into-an-array">Convert the map values into an array</h3><pre><code class="language-js">const a = [...m.values()]</code></pre><h2 id="weakmap">WeakMap</h2><p>A WeakMap is a special kind of map.</p><p>In a map object, items are never garbage collected. A WeakMap instead lets all its items be freely garbage collected. Every key of a WeakMap is an object. When the reference to this object is lost, the value can be garbage collected.</p><p>Here are the main differences:</p><ol><li>you cannot iterate over the keys or values (or key-values) of a WeakMap</li><li>you cannot clear all items from a WeakMap</li><li>you cannot check its size</li></ol><p>A WeakMap exposes those methods, which are equivalent to the Map ones:</p><ul><li><code>get(k)</code></li><li><code>set(k, v)</code></li><li><code>has(k)</code></li><li><code>delete(k)</code></li></ul><p>The use cases of a WeakMap are less evident than the ones of a Map, and you might never find the need for them, but essentially it can be used to build a memory-sensitive cache that is not going to interfere with garbage collection, or for careful encapsulation and information hiding.</p><h2 id="generators">Generators</h2><p>Generators are a special kind of function with the ability to pause itself, and resume later, allowing other code to run in the meantime.</p><p>See the full JavaScript Generators Guide for a detailed explanation of the topic.</p><p>The code decides that it has to wait, so it lets other code “in the queue” to run, and keeps the right to resume its operations “when the thing it’s waiting for” is done.</p><p>All this is done with a single, simple keyword: <code>yield</code>. When a generator contains that keyword, the execution is halted.</p><p>A generator can contain many <code>yield</code> keywords, thus halting itself multiple times, and it's identified by the <code>*function</code> keyword, which is not to be confused with the pointer dereference operator used in lower level programming languages such as C, C++ or Go.</p><p>Generators enable whole new paradigms of programming in JavaScript, allowing:</p><ul><li>2-way communication while a generator is running</li><li>long-lived while loops which do not freeze your program</li></ul><p>Here is an example of a generator which explains how it all works.</p><pre><code class="language-js">function *calculator(input) {
var doubleThat = 2 * (yield (input / 2))
var another = yield (doubleThat)
return (input * doubleThat * another)
}</code></pre><p>We initialize it with</p><pre><code class="language-js">const calc = calculator(10)</code></pre><p>Then we start the iterator on our generator:</p><pre><code class="language-js">calc.next()</code></pre><p>This first iteration starts the iterator. The code returns this object:</p><pre><code class="language-js">{
done: false
value: 5
}</code></pre><p>What happens is: the code runs the function, with <code>input = 10</code> as it was passed in the generator constructor. It runs until it reaches the <code>yield</code>, and returns the content of <code>yield</code>: <code>input / 2 = 5</code>. So we got a value of 5, and the indication that the iteration is not done (the function is just paused).</p><p>In the second iteration we pass the value <code>7</code>:</p><pre><code class="language-js">calc.next(7)</code></pre><p>and what we got back is:</p><pre><code class="language-js">{
done: false
value: 14
}</code></pre><p><code>7</code> was placed as the value of <code>doubleThat</code>. Important: you might read like <code>input / 2</code> was the argument, but that's just the return value of the first iteration. We now skip that, and use the new input value, <code>7</code>, and multiply it by 2.</p><p>We then reach the second yield, and that returns <code>doubleThat</code>, so the returned value is <code>14</code>.</p><p>In the next, and last, iteration, we pass in 100</p><pre><code class="language-js">calc.next(100)</code></pre><p>and in return we got</p><pre><code class="language-js">{
done: true
value: 14000
}</code></pre><p>As the iteration is done (no more yield keywords found) and we just return <code>(input * doubleThat * another)</code> which amounts to <code>10 * 14 * 100</code>.</p><hr><p>Those were the features introduced in ES2015. Let’s now dive into ES2016 which is much smaller in scope.</p><hr><h2 id="array-prototype-includes-">Array.prototype.includes()</h2><p>This feature introduces a more readable syntax for checking if an array contains an element.</p><p>With ES6 and lower, to check if an array contained an element you had to use <code>indexOf</code>, which checks the index in the array, and returns <code>-1</code> if the element is not there.</p><p>Since <code>-1</code> is evaluated as a true value, you could <strong><strong>not</strong></strong> do for example</p><pre><code class="language-js">if (![1,2].indexOf(3)) {
console.log('Not found')
}</code></pre><p>With this feature introduced in ES7 we can do</p><pre><code class="language-js">if (![1,2].includes(3)) {
console.log('Not found')
Object.values(person) // ['Fred', 87]</code></pre><p><code>Object.values()</code> also works with arrays:</p><pre><code class="language-js">const people = ['Fred', 'Tony']
Object.values(people) // ['Fred', 'Tony']</code></pre><h2 id="object-entries-">Object.entries()</h2><p>This method returns an array containing all the object own properties, as an array of <code>[key, value]</code> pairs.</p><p>Usage:</p><pre><code class="language-js">const person = { name: 'Fred', age: 87 }
Object.entries(person) // [['name', 'Fred'], ['age', 87]]</code></pre><p><code>Object.entries()</code> also works with arrays:</p><pre><code class="language-js">const people = ['Fred', 'Tony']Object.entries(people) // [['0', 'Fred'], ['1', 'Tony']]</code></pre><h2 id="object-getownpropertydescriptors-">Object.getOwnPropertyDescriptors()</h2><p>This method returns all own (non-inherited) properties descriptors of an object.</p><p>Any object in JavaScript has a set of properties, and each of these properties has a descriptor.</p><p>A descriptor is a set of attributes of a property, and it’s composed by a subset of the following:</p><ul><li><strong><strong>value</strong></strong>: the value of the property</li><li><strong><strong>writable</strong></strong>: true the property can be changed</li><li><strong><strong>get</strong></strong>: a getter function for the property, called when the property is read</li><li><strong><strong>set</strong></strong>: a setter function for the property, called when the property is set to a value</li><li><strong><strong>configurable</strong></strong>: if false, the property cannot be removed nor any attribute can be changed, except its value</li><li><strong><strong>enumerable</strong></strong>: true if the property is enumerable</li></ul><p><code>Object.getOwnPropertyDescriptors(obj)</code> accepts an object, and returns an object with the set of descriptors.</p><h3 id="in-what-way-is-this-useful">In what way is this useful?</h3><p>ES6 gave us <code>Object.assign()</code>, which copies all enumerable own properties from one or more objects, and return a new object.</p><p>However there is a problem with that, because it does not correctly copies properties with non-default attributes.</p><p>If an object for example has just a setter, it’s not correctly copied to a new object, using <code>Object.assign()</code>.</p><p>For example with</p><pre><code class="language-js">const person1 = {
set name(newName) {
console.log(newName)
}
}</code></pre><p>This won’t work:</p><pre><code class="language-js">const person2 = {}
Object.assign(person2, person1)</code></pre><p>But this will work:</p><pre><code class="language-js">const person3 = {}Object.defineProperties(person3,  Object.getOwnPropertyDescriptors(person1))</code></pre><p>As you can see with a simple console test:</p><pre><code class="language-js">person1.name = 'x'
"x"
person2.name = 'x'
person3.name = 'x'
"x"</code></pre><p><code>person2</code> misses the setter, it was not copied over.</p><p>The same limitation goes for shallow cloning objects with <strong><strong>Object.create()</strong></strong>.</p><h2 id="trailing-commas">Trailing commas</h2><p>This feature allows to have trailing commas in function declarations, and in functions calls:</p><pre><code class="language-js">const doSomething = (var1, var2,) =&gt; {
//...
}
doSomething('test2', 'test2',)</code></pre><p>This change will encourage developers to stop the ugly “comma at the start of the line” habit.</p><h2 id="async-functions">Async functions</h2><p>JavaScript evolved in a very short time from callbacks to promises (ES2015), and since ES2017 asynchronous JavaScript is even simpler with the async/await syntax.</p><p>Async functions are a combination of promises and generators, and basically, they are a higher level abstraction over promises. Let me repeat: <strong><strong>async/await is built on promises</strong></strong>.</p><h3 id="why-were-async-await-introduced">Why were async/await introduced?</h3><p>They reduce the boilerplate around promises, and the “don’t break the chain” limitation of chaining promises.</p><p>When Promises were introduced in ES2015, they were meant to solve a problem with asynchronous code, and they did, but over the 2 years that separated ES2015 and ES2017, it was clear that <em><em>promises could not be the final solution</em></em>.</p><p>Promises were introduced to solve the famous <em><em>callback hell</em></em> problem, but they introduced complexity on their own, and syntax complexity.</p><p>They were good primitives around which a better syntax could be exposed to developers, so when the time was right we got <strong><strong>async functions</strong></strong>.</p><p>They make the code look like it’s synchronous, but it’s asynchronous and non-blocking behind the scenes.</p><h3 id="how-it-works">How it works</h3><p>An async function returns a promise, like in this example:</p><pre><code class="language-js">const doSomethingAsync = () =&gt; {
return new Promise(resolve =&gt; {
setTimeout(() =&gt; resolve('I did something'), 3000)
})
}</code></pre><p>When you want to <strong><strong>call</strong></strong> this function you prepend <code>await</code>, and <strong><strong>the calling code will stop until the promise is resolved or rejected</strong></strong>. One caveat: the client function must be defined as <code>async</code>. Here's an example:</p><pre><code class="language-js">const doSomething = async () =&gt; {
console.log(await doSomethingAsync())
}</code></pre><h3 id="a-quick-example">A quick example</h3><p>This is a simple example of async/await used to run a function asynchronously:</p><pre><code class="language-js">const doSomethingAsync = () =&gt; {
return new Promise(resolve =&gt; {
setTimeout(() =&gt; resolve('I did something'), 3000)
})
}
const doSomething = async () =&gt; {
console.log(await doSomethingAsync())
}
console.log('Before')
doSomething()
console.log('After')</code></pre><p>The above code will print the following to the browser console:</p><pre><code class="language-js">Before
After
I did something //after 3s</code></pre><h3 id="promise-all-the-things">Promise all the things</h3><p>Prepending the <code>async</code> keyword to any function means that the function will return a promise.</p><p>Even if it’s not doing so explicitly, it will internally make it return a promise.</p><p>This is why this code is valid:</p><pre><code class="language-js">const aFunction = async () =&gt; {
return 'test'
}
aFunction().then(alert) // This will alert 'test'</code></pre><p>and it’s the same as:</p><pre><code class="language-js">const aFunction = async () =&gt; {
return Promise.resolve('test')
}
aFunction().then(alert) // This will alert 'test'</code></pre><h3 id="the-code-is-much-simpler-to-read">The code is much simpler to read</h3><p>As you can see in the example above, our code looks very simple. Compare it to code using plain promises, with chaining and callback functions.</p><p>And this is a very simple example, the major benefits will arise when the code is much more complex.</p><p>For example here’s how you would get a JSON resource, and parse it, using promises:</p><pre><code class="language-js">const getFirstUserData = () =&gt; {
return fetch('/users.json') // get users list
.then(response =&gt; response.json()) // parse JSON
.then(users =&gt; users[0]) // pick first user
.then(user =&gt; fetch(`/users/${user.name}`)) // get user data
.then(userResponse =&gt; response.json()) // parse JSON
}
getFirstUserData()</code></pre><p>And here is the same functionality provided using await/async:</p><pre><code class="language-js">const getFirstUserData = async () =&gt; {
const response = await fetch('/users.json') // get users list
const users = await response.json() // parse JSON
const user = users[0] // pick first user
const userResponse = await fetch(`/users/${user.name}`) // get user data
const userData = await user.json() // parse JSON
return userData
}
getFirstUserData()</code></pre><h3 id="multiple-async-functions-in-series">Multiple async functions in series</h3><p>Async functions can be chained very easily, and the syntax is much more readable than with plain promises:</p><pre><code class="language-js">const promiseToDoSomething = () =&gt; {
return new Promise(resolve =&gt; {
setTimeout(() =&gt; resolve('I did something'), 10000)
})
}
const watchOverSomeoneDoingSomething = async () =&gt; {
const something = await promiseToDoSomething()
return something + ' and I watched'
}
const watchOverSomeoneWatchingSomeoneDoingSomething = async () =&gt; {
const something = await watchOverSomeoneDoingSomething()
return something + ' and I watched as well'
}
watchOverSomeoneWatchingSomeoneDoingSomething().then(res =&gt; {
console.log(res)
})</code></pre><p>Will print:</p><pre><code class="language-js">I did something and I watched and I watched as well</code></pre><h3 id="easier-debugging">Easier debugging</h3><p>Debugging promises is hard because the debugger will not step over asynchronous code.</p><p>Async/await makes this very easy because to the compiler it’s just like synchronous code.</p><h2 id="shared-memory-and-atomics">Shared Memory and Atomics</h2><p>WebWorkers are used to create multithreaded programs in the browser.</p><p>They offer a messaging protocol via events. Since ES2017, you can create a shared memory array between web workers and their creator, using a <code>SharedArrayBuffer</code>.</p><p>Since it’s unknown how much time writing to a shared memory portion takes to propagate, <strong><strong>Atomics</strong></strong> are a way to enforce that when reading a value, any kind of writing operation is completed.</p><p>Any more detail on this <a href="https://github.com/tc39/ecmascript_sharedmem/blob/master/TUTORIAL.md" rel="noopener">can be found in the spec proposal</a>, which has since been implemented.</p><hr><p>This was ES2017. Let me now introduce the ES2018 features</p><hr><h2 id="rest-spread-properties">Rest/Spread Properties</h2><p>ES2015 introduced the concept of a <strong><strong>rest element</strong></strong> when working with <strong><strong>array destructuring</strong></strong>:</p><pre><code class="language-js">const numbers = [1, 2, 3, 4, 5]
[first, second, ...others] = numbers</code></pre><p>and <strong><strong>spread elements</strong></strong>:</p><pre><code class="language-js">const numbers = [1, 2, 3, 4, 5]
const sum = (a, b, c, d, e) =&gt; a + b + c + d + e
const sum = sum(...numbers)</code></pre><p>ES2018 introduces the same but for objects.</p><p><strong><strong>Rest properties</strong></strong>:</p><pre><code class="language-js">const { first, second, ...others } = { first: 1, second: 2, third: 3, fourth: 4, fifth: 5 }
first // 1
second // 2
others // { third: 3, fourth: 4, fifth: 5 }</code></pre><p><strong><strong>Spread properties</strong></strong> allow to create a new object by combining the properties of the object passed after the spread operator:</p><pre><code class="language-js">const items = { first, second, ...others }
items //{ first: 1, second: 2, third: 3, fourth: 4, fifth: 5 }</code></pre><h2 id="asynchronous-iteration">Asynchronous iteration</h2><p>The new construct <code>for-await-of</code> allows you to use an async iterable object as the loop iteration:</p><pre><code class="language-js">for await (const line of readLines(filePath)) {
console.log(line)
}</code></pre><p>Since this uses <code>await</code>, you can use it only inside <code>async</code> functions, like a normal <code>await</code>.</p><h2 id="promise-prototype-finally-">Promise.prototype.finally()</h2><p>When a promise is fulfilled, successfully it calls the <code>then()</code> methods, one after another.</p><p>If something fails during this, the <code>then()</code> methods are jumped and the <code>catch()</code> method is executed.</p><p><code>finally()</code> allow you to run some code regardless of the successful or not successful execution of the promise:</p><pre><code class="language-js">fetch('file.json')
.then(data =&gt; data.json())
.catch(error =&gt; console.error(error))
.finally(() =&gt; console.log('finished'))</code></pre><h2 id="regular-expression-improvements">Regular Expression improvements</h2><p>ES2018 introduced a number of improvements regarding Regular Expressions. I recommend my tutorial on them, available at <a href="https://flaviocopes.com/javascript-regular-expressions/" rel="noopener">https://flaviocopes.com/javascript-regular-expressions/</a>.</p><p>Here are the ES2018 specific additions.</p><h3 id="regexp-lookbehind-assertions-match-a-string-depending-on-what-precedes-it">RegExp lookbehind assertions: match a string depending on what precedes it</h3><p>This is a lookahead: you use <code>?=</code> to match a string that's followed by a specific substring:</p><pre><code class="language-js">/Roger(?=Waters)/
/Roger(?= Waters)/.test('Roger is my dog') //false
/Roger(?= Waters)/.test('Roger is my dog and Roger Waters is a famous musician') //true</code></pre><p><code>?!</code> performs the inverse operation, matching if a string is <strong><strong>not</strong></strong> followed by a specific substring:</p><pre><code class="language-js">/Roger(?!Waters)/
/Roger(?! Waters)/.test('Roger is my dog') //true
/Roger(?! Waters)/.test('Roger Waters is a famous musician') //false</code></pre><p>Lookaheads use the <code>?=</code> symbol. They were already available.</p><p><strong><strong>Lookbehinds</strong></strong>, a new feature, uses <code>?&lt;=</code>.</p><pre><code class="language-js">/(?&lt;=Roger) Waters/
/(?&lt;=Roger) Waters/.test('Pink Waters is my dog') //false
/(?&lt;=Roger) Waters/.test('Roger is my dog and Roger Waters is a famous musician') //true</code></pre><p>A lookbehind is negated using <code>?&lt;!</code>:</p><pre><code class="language-js">/(?&lt;!Roger) Waters/
/(?&lt;!Roger) Waters/.test('Pink Waters is my dog') //true
/(?&lt;!Roger) Waters/.test('Roger is my dog and Roger Waters is a famous musician') //false</code></pre><h3 id="unicode-property-escapes-p-and-p-">Unicode property escapes \p{…} and \P{…}</h3><p>In a regular expression pattern you can use <code>\d</code> to match any digit, <code>\s</code> to match any character that's not a white space, <code>\w</code> to match any alphanumeric character, and so on.</p><p>This new feature extends this concept to all Unicode characters introducing <code>\p{}</code> and is negation <code>\P{}</code>.</p><p>Any unicode character has a set of properties. For example <code>Script</code> determines the language family, <code>ASCII</code> is a boolean that's true for ASCII characters, and so on. You can put this property in the graph parentheses, and the regex will check for that to be true:</p><pre><code class="language-js">/^\p{ASCII}+$/u.test('abc')   //✅
/^\p{ASCII}+$/u.test('ABC@')  //✅
/^\p{ASCII}+$/u.test('ABC?') //❌</code></pre><p><code>ASCII_Hex_Digit</code> is another boolean property, that checks if the string only contains valid hexadecimal digits:</p><pre><code class="language-js">/^\p{ASCII_Hex_Digit}+$/u.test('0123456789ABCDEF') //✅
/^\p{ASCII_Hex_Digit}+$/u.test('h')          //❌</code></pre><p>There are many other boolean properties, which you just check by adding their name in the graph parentheses, including <code>Uppercase</code>, <code>Lowercase</code>, <code>White_Space</code>, <code>Alphabetic</code>, <code>Emoji</code> and more:</p><pre><code class="language-js">/^\p{Lowercase}$/u.test('h') //✅
/^\p{Uppercase}$/u.test('H') //✅
/^\p{Emoji}+$/u.test('H')   //❌
/^\p{Emoji}+$/u.test('??') //✅</code></pre><p>In addition to those binary properties, you can check any of the unicode character properties to match a specific value. In this example, I check if the string is written in the greek or latin alphabet:</p><pre><code class="language-js">/^\p{Script=Greek}+$/u.test('ελληνικά') //✅
/^\p{Script=Latin}+$/u.test('hey') //✅</code></pre><p>Read more about all the properties you can use <a href="https://github.com/tc39/proposal-regexp-unicode-property-escapes" rel="noopener">directly on the proposal</a>.</p><h3 id="named-capturing-groups">Named capturing groups</h3><p>In ES2018 a capturing group can be assigned to a name, rather than just being assigned a slot in the result array:</p><pre><code class="language-js">const re = /(?&lt;year&gt;\d{4})-(?&lt;month&gt;\d{2})-(?&lt;day&gt;\d{2})/
const result = re.exec('2015-01-02')
// result.groups.year === '2015';
// result.groups.month === '01';
// result.groups.day === '02';</code></pre><h3 id="the-s-flag-for-regular-expressions">The s flag for regular expressions</h3><p>The <code>s</code> flag, short for <em><em>single line</em></em>, causes the <code>.</code> to match new line characters as well. Without it, the dot matches regular characters but not the new line:</p><pre><code class="language-js">/hi.welcome/.test('hi\nwelcome') // false
/hi.welcome/s.test('hi\nwelcome') // true</code></pre><hr><h2 id="esnext">ESNext</h2><p>What’s next? ESNext.</p><p>ESNext is a name that always indicates the next version of JavaScript.</p><p>The current ECMAScript version is <strong><strong>ES2018</strong></strong>. It was released in June 2018.</p><p>Historically JavaScript editions have been standardized during the summer, so we can expect <strong><strong>ECMAScript 2019</strong></strong> to be released in summer 2019.</p><p>So at the time of writing, ES2018 has been released, and <strong><strong>ESNext is ES2019</strong></strong></p><p>Proposals to the ECMAScript standard are organized in stages. Stages 1–3 are an incubator of new features, and features reaching Stage 4 are finalized as part of the new standard.</p><p>At the time of writing we have a number of features at <strong><strong>Stage 4</strong></strong>. I will introduce them in this section. The latest versions of the major browsers should already implement most of those.</p><p>Some of those changes are mostly for internal use, but it’s also good to know what is going on.</p><p>There are other features at Stage 3, which might be promoted to Stage 4 in the next few months, and you can check them out on this GitHub repository: <a href="https://github.com/tc39/proposals" rel="noopener">https://github.com/tc39/proposals</a>.</p><h2 id="array-prototype-flat-flatmap-">Array.prototype.{flat,flatMap}</h2><p><code>flat()</code> is a new array instance method that can create a one-dimensional array from a multidimensional array.</p><p>Example:</p><pre><code class="language-js">['Dog', ['Sheep', 'Wolf']].flat()
//[ 'Dog', 'Sheep', 'Wolf' ]</code></pre><p>By default it only “flats” up to one level, but you can add a parameter to set the number of levels you want to flat the array to. Set it to <code>Infinity</code> to have unlimited levels:</p><pre><code class="language-js">['Dog', ['Sheep', ['Wolf']]].flat()
//[ 'Dog', 'Sheep', [ 'Wolf' ] ]
['Dog', ['Sheep', ['Wolf']]].flat(2)
//[ 'Dog', 'Sheep', 'Wolf' ]
['Dog', ['Sheep', ['Wolf']]].flat(Infinity)
//[ 'Dog', 'Sheep', 'Wolf' ]</code></pre><p>If you are familiar with the JavaScript <code>map()</code> method of an array, you know that using it you can execute a function on every element of an array.</p><p><code>flatMap()</code> is a new Array instance method that combines <code>flat()</code> with <code>map()</code>. It's useful when calling a function that returns an array in the map() callback, but you want your resulted array to be flat:</p><pre><code class="language-js">['My dog', 'is awesome'].map(words =&gt; words.split(' '))
//[ [ 'My', 'dog' ], [ 'is', 'awesome' ] ]
['My dog', 'is awesome'].flatMap(words =&gt; words.split(' '))
//[ 'My', 'dog', 'is', 'awesome' ]</code></pre><h3 id="optional-catch-binding">Optional catch binding</h3><p>Sometimes we don’t need to have a parameter bound to the catch block of a try/catch.</p><p>We previously had to do:</p><pre><code class="language-js">try {
//...
} catch (e) {
//handle error
}</code></pre><p>Even if we never had to use <code>e</code> to analyze the error. We can now simply omit it:</p><pre><code class="language-js">try {
//...
} catch {
//handle error
}</code></pre><h2 id="object-fromentries-">Object.fromEntries()</h2><p>Objects have an <code>entries()</code> method, since ES2017.</p><p>It returns an array containing all the object own properties, as an array of <code>[key, value]</code> pairs:</p><pre><code class="language-js">const person = { name: 'Fred', age: 87 }
Object.entries(person) // [['name', 'Fred'], ['age', 87]]</code></pre><p>ES2019 introduces a new <code>Object.fromEntries()</code> method, which can create a new object from such array of properties:</p><pre><code class="language-js">const person = { name: 'Fred', age: 87 }
const entries = Object.entries(person)
const newPerson = Object.fromEntries(entries)
person !== newPerson //true </code></pre><h2 id="string-prototype-trimstart-trimend-">String.prototype.{trimStart,trimEnd}</h2><p>This feature has been part of v8/Chrome for almost a year now, and it’s going to be standardized in ES2019.</p><h2 id="trimstart-"><code>trimStart()</code></h2><p>Return a new string with removed white space from the start of the original string</p><pre><code class="language-js">'Testing'.trimStart() //'Testing'
' Testing'.trimStart() //'Testing'
' Testing '.trimStart() //'Testing '
'Testing'.trimStart() //'Testing'</code></pre><h2 id="trimend-"><code>trimEnd()</code></h2><p>Return a new string with removed white space from the end of the original string</p><pre><code class="language-js">'Testing'.trimEnd() //'Testing'
' Testing'.trimEnd() //' Testing'
' Testing '.trimEnd() //' Testing'
'Testing '.trimEnd() //'Testing'</code></pre><h2 id="symbol-prototype-description">Symbol.prototype.description</h2><p>You can now retrieve the description of a symbol by accessing its <code>description</code> property instead of having to use the <code>toString()</code> method:</p><pre><code class="language-js">const testSymbol = Symbol('Test')
testSymbol.description // 'Test'</code></pre><h2 id="json-improvements">JSON improvements</h2><p>Before this change, the line separator (\u2028) and paragraph separator (\u2029) symbols were not allowed in strings parsed as JSON.</p><p>Using JSON.parse(), those characters resulted in a <code>SyntaxError</code> but now they parse correctly, as defined by the JSON standard.</p><h3 id="well-formed-json-stringify-">Well-formed JSON.stringify()</h3><p>Fixes the <code>JSON.stringify()</code> output when it processes surrogate UTF-8 code points (U+D800 to U+DFFF).</p><p>Before this change calling <code>JSON.stringify()</code> would return a malformed Unicode character (a "�").</p><p>Now those surrogate code points can be safely represented as strings using <code>JSON.stringify()</code>, and transformed back into their original representation using <code>JSON.parse()</code>.</p><h2 id="function-prototype-tostring-">Function.prototype.toString()</h2><p>Functions have always had an instance method called <code>toString()</code> which return a string containing the function code.</p><p>ES2019 introduced a change to the return value to avoid stripping comments and other characters like whitespace, exactly representing the function as it was defined.</p><p>If previously we had</p><pre><code class="language-js">function /* this is bar */ bar () {}</code></pre><p>The behavior was this:</p><pre><code class="language-js">bar.toString() //'function bar() {}</code></pre><p>now the new behavior is:</p><pre><code class="language-js">bar.toString(); // 'function /* this is bar */ bar () {}'</code></pre><hr><p>Wrapping up, I hope this article helped you catch up on some of the latest JavaScript additions, and the new features we’ll see in 2019.</p><p><a href="https://flaviocopes.com/page/es5-to-esnext" rel="noopener"><strong><strong>Click here to get a PDF / ePub / Mobi version of this post to read offline</strong></strong></a></p><p>Flavio</p>
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
