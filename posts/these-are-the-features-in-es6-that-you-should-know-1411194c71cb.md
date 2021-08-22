---
card: "https://cdn-media-1.freecodecamp.org/images/1*yZbFWrCpWZnlps21EJ0avQ.jpeg"
tags: [JavaScript]
description: "Discover Functional JavaScript was named one of the best new "
author: "Milad E. Fahmy"
title: "These are the features in ES6 that you should know"
created: "2021-08-16T11:34:05+02:00"
modified: "2021-08-16T11:34:05+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-technology tag-web-development tag-programming tag-learning ">
<header class="post-full-header">
<h1 class="post-full-title">These are the features in ES6 that you should know</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*yZbFWrCpWZnlps21EJ0avQ.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*yZbFWrCpWZnlps21EJ0avQ.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*yZbFWrCpWZnlps21EJ0avQ.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*yZbFWrCpWZnlps21EJ0avQ.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*yZbFWrCpWZnlps21EJ0avQ.jpeg" alt="These are the features in ES6 that you should know">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p><a href="https://read.amazon.com/kp/embed?asin=B07PBQJYYG&amp;preview=newtab&amp;linkCode=kpe&amp;ref_=cm_sw_r_kb_dp_cm5KCbE5BDJGE" rel="nofollow noopener noopener noopener noopener noopener noopener noopener noopener noopener noopener noopener noopener nofollow noopener nofollow noopener"><strong><strong>Discover Functional JavaScript</strong></strong></a> was named one of the <a href="https://bookauthority.org/books/new-functional-programming-books?t=7p46zt&amp;s=award&amp;book=1095338781" rel="noopener nofollow nofollow noopener"><strong><strong>best new Functional Programming books by BookAuthority</strong></strong></a><strong><strong>!</strong></strong></p><p>ES6 brings more features to the JavaScript language. Some new syntax allows you to write code in a more expressive way, some features complete the functional programming toolbox, and some features are questionable.</p><h3 id="let-and-const">let and const</h3><p>There are two ways for declaring a variable (<code>let</code> and <code>const</code>) plus one that has become obsolete (<code>var</code>).</p><h2 id="let">let</h2><p><code>let</code> declares and optionally initializes a variable in the current scope. The current scope can be either a module, a function or a block. The value of a variable that is not initialized is <code>undefined</code> .</p><p>Scope defines the lifetime and visibility of a variable. Variables are not visible outside the scope in which they are declared.</p><p>Consider the next code that emphasizes <code>let</code> block scope:</p><pre><code class="language-javascript">let x = 1;
{
let x = 2;
}
console.log(x); //1</code></pre><p>In contrast, the <code>var</code> declaration had no block scope:</p><pre><code class="language-javascript">var x = 1;
{
var x = 2;
}
console.log(x); //2</code></pre><p>The <code>for</code> loop statement, with the <code>let</code> declaration, creates a new variable local to the block scope, for each iteration. The next loop creates five closures over five different <code>i</code> variables.</p><pre><code class="language-javascript">(function run(){
for(let i=0; i&lt;5; i++){
setTimeout(function log(){
console.log(i); //0 1 2 3 4
}, 100);
}
})();</code></pre><p>Writing the same code with <code>var</code> will create five closures, over the same variable, so all closures will display the last value of <code>i</code>.</p><p>The <code>log()</code> function is a closure. For more on closures, take a look at <a href="https://medium.freecodecamp.org/discover-the-power-of-closures-in-javascript-5c472a7765d7">Discover the power of closures in JavaScript</a>.</p><h2 id="const">const</h2><p><code>const</code> declares a variable that cannot be reassigned. It becomes a constant only when the assigned value is immutable.</p><p>An immutable value is a value that, once created, cannot be changed. Primitive values are immutable, objects are mutable.</p><p><code>const</code> freezes the variable, <code>Object.freeze()</code> freezes the object.</p><p>The initialization of the <code>const</code> variable is mandatory.</p><h2 id="modules">Modules</h2><p>Before modules, a variable declared outside any function was a global variable.</p><p>With modules, a variable declared outside any function is hidden and not available to other modules unless it is explicitly exported.</p><p>Exporting makes a function or object available to other modules. In the next example, I export functions from different modules:</p><pre><code class="language-js">//module "./TodoStore.js"
export default function TodoStore(){}
//module "./UserStore.js"
export default function UserStore(){}</code></pre><p>Importing makes a function or object, from other modules, available to the current module.</p><pre><code class="language-js">import TodoStore from "./TodoStore";
import UserStore from "./UserStore";
const todoStore = TodoStore();
const userStore = UserStore();</code></pre><h2 id="spread-rest">Spread/Rest</h2><p>The <code>…</code> operator can be the spread operator or the rest parameter, depending on where it is used. Consider the next example:</p><pre><code class="language-js">const numbers = [1, 2, 3];
const arr = ['a', 'b', 'c', ...numbers];
console.log(arr);
["a", "b", "c", 1, 2, 3]</code></pre><p>This is the spread operator. Now look at the next example:</p><pre><code class="language-js">function process(x,y, ...arr){
console.log(arr)
}
process(1,2,3,4,5);
//[3, 4, 5]
function processArray(...arr){
console.log(arr)
}
processArray(1,2,3,4,5);
//[1, 2, 3, 4, 5]</code></pre><p>This is the rest parameter.</p><h3 id="arguments">arguments</h3><p>With the rest parameter we can replace the <code>arguments</code> pseudo-parameter. The rest parameter is an array, <code>arguments</code> is not.</p><pre><code class="language-js">function addNumber(total, value){
return total + value;
}
function sum(...args){
return args.reduce(addNumber, 0);
}
sum(1,2,3); //6</code></pre><h3 id="cloning">Cloning</h3><p>The spread operator makes the cloning of objects and arrays simpler and more expressive.</p><p>The object spread properties operator will be available as part of ES2018.</p><pre><code class="language-js">const book = { title: "JavaScript: The Good Parts" };
//clone with Object.assign()
const clone = Object.assign({}, book);
//clone with spread operator
const clone = { ...book };
const arr = [1, 2 ,3];
//clone with slice
const cloneArr = arr.slice();
//clone with spread operator
const cloneArr = [ ...arr ];</code></pre><h3 id="concatenation">Concatenation</h3><p>In the next example, the spread operator is used to concatenate arrays:</p><pre><code class="language-js">const part1 = [1, 2, 3];
const part2 = [4, 5, 6];
const arr = part1.concat(part2);
const arr = [...part1, ...part2];</code></pre><h3 id="merging-objects">Merging objects</h3><p>The spread operator, like <code>Object.assign()</code>, can be used to copy properties from one or more objects to an empty object and combine their properties.</p><pre><code class="language-js">const authorGateway = {
getAuthors : function() {},
editAuthor: function() {}
};
const bookGateway = {
getBooks : function() {},
editBook: function() {}
};
//copy with Object.assign()
const gateway = Object.assign({},
authorGateway,
bookGateway);
//copy with spread operator
const gateway = {
...authorGateway,
...bookGateway
};</code></pre><h2 id="property-short-hands">Property short-hands</h2><p>Consider the next code:</p><pre><code class="language-js">function BookGateway(){
function getBooks() {}
function editBook() {}
return {
getBooks: getBooks,
editBook: editBook
}
}</code></pre><p>With property short-hands, when the property name and the name of the variable used as the value are the same, we can just write the key once.</p><pre><code class="language-js">function BookGateway(){
function getBooks() {}
function editBook() {}
return {
getBooks,
editBook
}
}</code></pre><p>Here is another example:</p><pre><code class="language-js">const todoStore = TodoStore();
const userStore = UserStore();
const stores = {
todoStore,
userStore
};</code></pre><h2 id="destructuring-assignment">Destructuring assignment</h2><p>Consider the next code:</p><pre><code class="language-js">function TodoStore(args){
const helper = args.helper;
const dataAccess = args.dataAccess;
const userStore = args.userStore;
}</code></pre><p>With destructuring assignment syntax, it can be written like this:</p><pre><code class="language-js">function TodoStore(args){
const {
helper,
dataAccess,
userStore } = args;
}</code></pre><p>or even better, with the destructuring syntax in the parameter list:</p><pre><code class="language-js">function TodoStore({ helper, dataAccess, userStore }){}</code></pre><p>Below is the function call:</p><pre><code class="language-js">TodoStore({
helper: {},
dataAccess: {},
userStore: {}
});</code></pre><h2 id="default-parameters">Default parameters</h2><p>Functions can have default parameters. Look at the next example:</p><pre><code class="language-js">function log(message, mode = "Info"){
console.log(mode + ": " + message);
}
log("An info");
//Info: An info
log("An error", "Error");
//Error: An error</code></pre><h2 id="template-string-literals">Template string literals</h2><p>Template strings are defined with the <code>`</code> character. With template strings, the previous logging message can be written like this:</p><pre><code class="language-js">function log(message, mode= "Info"){
console.log(`${mode}: ${message}`);
}</code></pre><p>Template strings can be defined on multiple lines. However, a better option is to keep the long text messages as resources, in a database for example.</p><p>See below a function that generates an HTML that spans multiple lines:</p><pre><code class="language-js">function createTodoItemHtml(todo){
return `&lt;li&gt;
&lt;div&gt;${todo.title}&lt;/div&gt;
&lt;div&gt;${todo.userName}&lt;/div&gt;
&lt;/li&gt;`;
}</code></pre><h2 id="proper-tail-calls">Proper tail-calls</h2><blockquote><em><em>A recursive function is tail recursive when the recursive call is the last thing the function does.</em></em></blockquote><p>The tail recursive functions perform better than non tail recursive functions. The optimized tail recursive call does not create a new stack frame for each function call, but rather uses a single stack frame.</p><p>ES6 brings the tail-call optimization in strict mode.</p><p><a href="https://jsfiddle.net/cristi_salcescu/4t2j3uho/">The following function</a> should benefit from the tail-call optimization.</p><pre><code class="language-js">function print(from, to)
{
const n = from;
if (n &gt; to)  return;
console.log(n);
//the last statement is the recursive call
print(n + 1, to);
}
print(1, 10);</code></pre><p>Note: the tail-call optimization is not yet supported by major browsers.</p><h2 id="promises">Promises</h2><p><em><em>A promise is a reference to an asynchronous call. It may resolve or fail somewhere in the future.</em></em></p><p>Promises are easier to combine. <a href="https://jsfiddle.net/cristi_salcescu/eqyhq2e3/">As you see in the next example</a>, it is easy to call a function when all promises are resolved, or when the first promise is resolved.</p><pre><code class="language-js">function getTodos() { return fetch("/todos"); }
function getUsers() { return fetch("/users"); }
function getAlbums(){ return fetch("/albums"); }
const getPromises = [
getTodos(),
getUsers(),
getAlbums()
];
Promise.all(getPromises).then(doSomethingWhenAll);
Promise.race(getPromises).then(doSomethingWhenOne);
function doSomethingWhenAll(){}
function doSomethingWhenOne(){}</code></pre><p>The <code>fetch()</code> function, part of the Fetch API, returns a promise.</p><p><code>Promise.all()</code> returns a promise that resolves when all input promises have resolved. <code>Promise.race()</code> returns a promise that resolves or rejects when one of the input promises resolves or rejects.</p><p>A promise can be in one of the three states: pending, resolved or rejected. The promise will in pending until is either resolved or rejected.</p><p>Promises support a chaining system that allows you to pass data through a set of functions. <a href="https://jsfiddle.net/cristi_salcescu/kgxnay46/">In the next example</a>, the result of <code>getTodos()</code> is passed as input to <code>toJson()</code>, then its result is passed as input to <code>getTopPriority()</code>, and then its result is passed as input to <code>renderTodos()</code> function. When an error is thrown or a promise is rejected the <code>handleError</code> is called.</p><pre><code class="language-js">getTodos()
.then(toJson)
.then(getTopPriority)
.then(renderTodos)
.catch(handleError);
function toJson(response){}
function getTopPriority(todos){}
function renderTodos(todos){}
function handleError(error){}</code></pre><p>In the previous example, <code>.then()</code> handles the success scenario and <code>.catch()</code> handles the error scenario. If there is an error at any step, the chain control jumps to the closest rejection handler down the chain.</p><p><code>Promise.resolve()</code> returns a resolved promise. <code>Promise.reject()</code> returns a rejected promise.</p><h2 id="class">Class</h2><p>Class is sugar syntax for creating objects with a custom prototype. It has a better syntax than the previous one, the function constructor. <a href="https://jsfiddle.net/cristi_salcescu/aLg8t632/">Check out the next exemple</a>:</p><pre><code class="language-js">class Service {
doSomething(){ console.log("doSomething"); }
}
let service = new Service();
console.log(service.__proto__ === Service.prototype);</code></pre><p>All methods defined in the <code>Service</code> class will be added to the<code>Service.prototype</code> object. Instances of the <code>Service</code> class will have the same prototype (<code>Service.prototype</code>) object. All instances will delegate method calls to the <code>Service.prototype</code> object. Methods are defined once on<code>Service.prototype</code> and then inherited by all instances.</p><h3 id="inheritance">Inheritance</h3><p>“Classes can inherit from other classes”. Below is an <a href="https://jsfiddle.net/cristi_salcescu/1xo96yt8/">example of inheritance</a>where the <code>SpecialService</code> class “inherits” from the <code>Service</code> class:</p><pre><code class="language-js">class Service {
doSomething(){ console.log("doSomething"); }
}
class SpecialService extends Service {
doSomethingElse(){ console.log("doSomethingElse"); }
}
let specialService = new SpecialService();
specialService.doSomething();
specialService.doSomethingElse();</code></pre><p>All methods defined in the <code>SpecialService</code> class will be added to the <code>SpecialService.prototype</code> object. All instances will delegate method calls to the <code>SpecialService.prototype</code> object. If the method is not found in <code>SpecialService.prototype</code>, it will be searched in the <code>Service.prototype</code>object. If it is still not found, it will be searched in <code>Object.prototype</code>.</p><h3 id="class-can-become-a-bad-feature">Class can become a bad feature</h3><p>Even if they seem encapsulated, all members of a class are public. You still need to manage problems with <code>this</code> losing context. The public API is mutable.</p><p><code>class</code> can become a bad feature if you neglect the functional side of JavaScript. <code>class</code> may give the impression of a class-based language when JavaScript is both a functional programming language and a prototype-based language.</p><p>Encapsulated objects can be created with factory functions. Consider the next example:</p><pre><code class="language-js">function Service() {
function doSomething(){ console.log("doSomething"); }
return Object.freeze({
doSomething
});
}</code></pre><p>This time all members are private by default. The public API is immutable. There is no need to manage issues with <code>this</code> losing context.</p><p><code>class</code> may be used as an exception if required by the components framework. This was the case with React, but is not the case anymore with <a href="https://reactjs.org/docs/hooks-overview.html">React Hooks</a>.</p><p>For more on why to favor factory functions, take a look at <a href="https://medium.freecodecamp.org/class-vs-factory-function-exploring-the-way-forward-73258b6a8d15">Class vs Factory function: exploring the way forward</a>.</p><h3 id="arrow-functions">Arrow functions</h3><p>Arrow functions can create anonymous functions on the fly. They can be used to create small callbacks, with a shorter syntax.</p><p>Let’s take a collection of to-dos. A to-do has an <code>id</code> , a <code>title</code> , and a <code>completed</code> boolean property. Now, consider the next code that selects only the <code>title</code> from the collection:</p><pre><code class="language-js">const titles = todos.map(todo =&gt; todo.title);</code></pre><p>or the next example selecting only the <code>todos</code> that are not completed:</p><pre><code class="language-js">const filteredTodos = todos.filter(todo =&gt; !todo.completed);</code></pre><h3 id="this">this</h3><p>Arrow functions don’t have their own <code>this</code> and <code>arguments</code>. As a result, you may see the arrow function used to fix problems with <code>this</code> losing context. I think that the best way to avoid this problem is to not use <code>this</code> at all.</p><h3 id="arrow-functions-can-become-a-bad-feature">Arrow functions can become a bad feature</h3><p>Arrow functions can become a bad feature when used to the detriment of named functions. This will create readability and maintainability problems. Look at the next code written only with anonymous arrow functions:</p><pre><code class="language-js">const newTodos = todos.filter(todo =&gt;
!todo.completed &amp;&amp; todo.type === "RE")
.map(todo =&gt; ({
title : todo.title,
userName : users[todo.userId].name
}))
.sort((todo1, todo2) =&gt;
todo1.userName.localeCompare(todo2.userName));</code></pre><p><a href="https://jsfiddle.net/cristi_salcescu/pm7n2ab5/">Now, check out the same logic</a> refactored to pure functions with intention revealing names and decide which of them is easier to understand:</p><pre><code class="language-js">const newTodos = todos.filter(isTopPriority)
.map(partial(toTodoView, users))
.sort(ascByUserName);
function isTopPriority(todo){
return !todo.completed &amp;&amp; todo.type === "RE";
}
function toTodoView(users, todo){
return {
title : todo.title,
userName : users[todo.userId].name
}
}
function ascByUserName(todo1, todo2){
return todo1.userName.localeCompare(todo2.userName);
}</code></pre><p>Even more, anonymous arrow functions will appear as <code>(anonymous)</code> in the Call Stack.</p><p>For more on why to favor named functions, take a look at <a href="https://medium.freecodecamp.org/how-to-make-your-code-better-with-intention-revealing-function-names-6c8b5271693e">How to make your code better with intention-revealing function names</a>.</p><p>Less code doesn’t necessary mean more readable. <a href="https://jsfiddle.net/cristi_salcescu/wc8be2gn/">Look at the next example</a>and see which version is easier for you to understand:</p><pre><code class="language-js">//with arrow function
const prop = key =&gt; obj =&gt; obj[key];
//with function keyword
function prop(key){
return function(obj){
return obj[key];
}
}</code></pre><p>Pay attention when returning an object. In the next example, the <code>getSampleTodo()</code> returns <code>undefined</code>.</p><pre><code class="language-js">const getSampleTodo = () =&gt; { title : "A sample todo" };
getSampleTodo();
//undefined</code></pre><h2 id="generators">Generators</h2><p>I think the ES6 generator is an unnecessary feature that makes code more complicated.</p><p>The ES6 generator creates an object that has the <code>next()</code> method. The <code>next()</code> method creates an object that has the <code>value</code> property. ES6 generators promote the use of loops. <a href="https://jsfiddle.net/cristi_salcescu/edq7vfwm/">Take a look at code below</a>:</p><pre><code class="language-js">function* sequence(){
let count = 0;
while(true) {
count += 1;
yield count;
}
}
const generator = sequence();
generator.next().value;//1
generator.next().value;//2
generator.next().value;//3</code></pre><p>The same generator can be simply implemented with a closure.</p><pre><code class="language-js">function sequence(){
let count = 0;
return function(){
count += 1;
return count;
}
}
const generator = sequence();
generator();//1
generator();//2
generator();//3</code></pre><p>For more examples with functional generators take a look at <a href="https://medium.freecodecamp.org/lets-experiment-with-functional-generators-and-the-pipeline-operator-in-javascript-520364f97448">Let’s experiment with functional generators and the pipeline operator in JavaScript</a>.</p><h1 id="conclusion">Conclusion</h1><p><code>let</code> and <code>const</code> declare and initialize variables.</p><p>Modules encapsulate functionality and expose only a small part.</p><p>The spread operator, rest parameter, and property shorthand make things easier to express.</p><p>Promises and tail recursion complete the functional programming toolbox.</p><p><a href="https://read.amazon.com/kp/embed?asin=B07PBQJYYG&amp;preview=newtab&amp;linkCode=kpe&amp;ref_=cm_sw_r_kb_dp_cm5KCbE5BDJGE&amp;source=post_page---------------------------"><strong><strong>Discover Functional JavaScript</strong></strong></a> was named one of the<strong><strong> </strong></strong><a href="https://bookauthority.org/books/new-functional-programming-books?t=7p46zt&amp;s=award&amp;book=1095338781&amp;source=post_page---------------------------"><strong><strong>best new Functional Programming books by BookAuthority</strong></strong></a><strong><strong>!</strong></strong></p><p><strong><strong>For more on applying functional programming techniques in React take a look at</strong></strong> <a href="https://read.amazon.com/kp/embed?asin=B07S1NLFTS&amp;preview=newtab&amp;linkCode=kpe&amp;ref_=cm_sw_r_kb_dp_Pko5CbA30383Y" rel="noopener nofollow"><strong><strong>Functional React</strong></strong></a><strong><strong>.</strong></strong></p><p>Learn <strong><strong>functional React</strong></strong>, in a project-based way, with <a href="https://read.amazon.com/kp/embed?asin=B0846NRJYR&amp;preview=newtab&amp;linkCode=kpe&amp;ref_=cm_sw_r_kb_dp_o.hlEbDD02JB2" rel="noopener nofollow"><strong><strong>Functional Architecture with React and Redux</strong></strong></a><strong><strong>.</strong></strong></p><p><a href="https://twitter.com/cristi_salcescu" rel="noopener nofollow nofollow noopener nofollow noopener nofollow noopener">Follow on Twitter</a></p>
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
