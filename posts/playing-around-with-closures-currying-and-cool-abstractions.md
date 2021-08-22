---
card: "/images/default.jpg"
tags: [JavaScript]
description: "In this article, we will talk about closures and curried func"
author: "Milad E. Fahmy"
title: "Closures, Curried Functions, and Cool Abstractions in JavaScript"
created: "2021-08-16T10:05:11+02:00"
modified: "2021-08-16T10:05:11+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-functional-programming tag-web-development tag-software-development tag-software-engineering ">
<header class="post-full-header">
<h1 class="post-full-title">Closures, Curried Functions, and Cool Abstractions in JavaScript</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/04/curry.jpg 300w,
/news/content/images/size/w600/2020/04/curry.jpg 600w,
/news/content/images/size/w1000/2020/04/curry.jpg 1000w,
/news/content/images/size/w2000/2020/04/curry.jpg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/04/curry.jpg" alt="Closures, Curried Functions, and Cool Abstractions in JavaScript">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>In this article, we will talk about closures and curried functions and we'll play around with these concepts to build cool abstractions. I want to show the idea behind each concept, but also make it very practical with examples and refactored code to make it more fun.</p><h2 id="closures">Closures</h2><p>Closures are a common topic in JavaScript, and it's the one we'll start with. According to MDN:</p><blockquote>A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).</blockquote><p>Basically, every time a function is created, a closure is also created and it gives access to the state (variables, constants, functions, and so on). The surrounding state is known as the <code>lexical environment</code>.</p><p>Let's show a simple example:</p><pre><code class="language-javascript">function makeFunction() {
const name = 'TK';
function displayName() {
console.log(name);
}
return displayName;
};
</code></pre><p>What do we have here?</p><ul><li>Our main function is called <code>makeFunction</code></li><li>A constant named <code>name</code> is assigned with the string, <code>'TK'</code></li><li>The definition of the <code>displayName</code> function (which just logs the <code>name</code> constant)</li><li>And finally, <code>makeFunction</code> returns the <code>displayName</code> function</li></ul><p>This is just a definition of a function. When we call the <code>makeFunction</code>, it will create everything within it: a constant and another function, in this case.</p><p>As we know, when the <code>displayName</code> function is created, the closure is also created and it makes the function aware of its environment, in this case, the <code>name</code> constant. This is why we can <code>console.log</code> the <code>name</code> constant without breaking anything. The function knows about the lexical environment.</p><pre><code class="language-javascript">const myFunction = makeFunction();
myFunction(); // TK
</code></pre><p>Great! It works as expected. The return value of <code>makeFunction</code> is a function that we store in the <code>myFunction</code> constant. When we call <code>myFunction</code>, it displays <code>TK</code>.</p><p>We can also make it work as an arrow function:</p><pre><code class="language-javascript">const makeFunction = () =&gt; {
const name = 'TK';
return () =&gt; console.log(name);
};
</code></pre><p>But what if we want to pass the name and display it? Simple! Use a parameter:</p><pre><code class="language-javascript">const makeFunction = (name = 'TK') =&gt; {
return () =&gt; console.log(name);
};
// Or as a one-liner
const makeFunction = (name = 'TK') =&gt; () =&gt; console.log(name);
</code></pre><p>Now we can play with the name:</p><pre><code class="language-javascript">const myFunction = makeFunction();
myFunction(); // TK
const myFunction = makeFunction('Dan');
myFunction(); // Dan
</code></pre><p><code>myFunction</code> is aware of the argument that's passed in, and whether it's a default or dynamic value.</p><p>The closure makes sure the created function is not only aware of the constants/variables, but also other functions within the function.</p><p>So this also works:</p><pre><code class="language-javascript">const makeFunction = (name = 'TK') =&gt; {
const display = () =&gt; console.log(name);
return () =&gt; display();
};
const myFunction = makeFunction();
myFunction(); // TK
</code></pre><p>The returned function knows about the <code>display</code> function and is able to call it.</p><p>One powerful technique is to use closures to build "private" functions and variables.</p><p>Months ago I was learning data structures (again!) and wanted to implement each one. But I was always using the object oriented approach. As a functional programming enthusiast, I wanted to build all the data structures following FP principles (pure functions, immutability, referential transparency, etc.).</p><p>The first data structure I was learning was the Stack. It is pretty simple. The main API is:</p><ul><li><code>push</code>: add an item to the first place of the stack</li><li><code>pop</code>: remove the first item from the stack</li><li><code>peek</code>: get the first item from the stack</li><li><code>isEmpty</code>: verify if the stack is empty</li><li><code>size</code>: get the number of items the stack has</li></ul><p>We could clearly create a simple function to each "method" and pass the stack data to it. It could then use/transform the data and return it.</p><p>But we can also create a stack with private data and only expose the API methods. Let's do this!</p><pre><code class="language-javascript">const buildStack = () =&gt; {
let items = [];
const push = (item) =&gt; items = [item, ...items];
const pop = () =&gt; items = items.slice(1);
const peek = () =&gt; items[0];
const isEmpty = () =&gt; !items.length;
const size = () =&gt; items.length;
return {
push,
pop,
peek,
isEmpty,
size,
};
};
</code></pre><p>Because we created the <code>items</code> stack inside our <code>buildStack</code> function, it is "private". It can be accessed only within the function. In this case, only <code>push</code>, <code>pop</code>, and so one could touch the data. This is exactly what we're looking for.</p><p>And how do we use it? Like this:</p><pre><code class="language-javascript">const stack = buildStack();
stack.isEmpty(); // true
stack.push(1); // [1]
stack.push(2); // [2, 1]
stack.push(3); // [3, 2, 1]
stack.push(4); // [4, 3, 2, 1]
stack.push(5); // [5, 4, 3, 2, 1]
stack.peek(); // 5
stack.size(); // 5
stack.isEmpty(); // false
stack.pop(); // [4, 3, 2, 1]
stack.pop(); // [3, 2, 1]
stack.pop(); // [2, 1]
stack.pop(); // [1]
stack.isEmpty(); // false
stack.peek(); // 1
stack.pop(); // []
stack.isEmpty(); // true
stack.size(); // 0
</code></pre><p>So, when the stack is created, all the functions are aware of the <code>items</code> data. But outside the function, we can't access this data. It's private. We just modify the data by using the stack's builtin API.</p><h2 id="curry"><strong>Curry</strong></h2><blockquote>"Currying is the process of taking a function with multiple arguments and turning it into a sequence of functions each with only a single argument." <br>- <a href="https://frontendinterview.co/question/what-is-currying-function?tech=javascript">Frontend Interview</a></blockquote><p>So imagine you have a function with multiple arguments: <code>f(a, b, c)</code>. Using currying, we achieve a function <code>f(a)</code> that returns a function <code>g(b)</code> that returns a function <code>h(c)</code>.</p><p>Basically: <code>f(a, b, c)</code> —&gt; <code>f(a) =&gt; g(b) =&gt; h(c)</code></p><p>Let's build a simple example that adds two numbers. But first, without currying:</p><pre><code class="language-javascript">const add = (x, y) =&gt; x + y;
add(1, 2); // 3
</code></pre><p>Great! Super simple! Here we have a function with two arguments. To transform it into a curried function we need a function that receives <code>x</code> and returns a function that receives <code>y</code> and returns the sum of both values.</p><pre><code class="language-javascript">const add = (x) =&gt; {
function addY(y) {
return x + y;
}
return addY;
};
</code></pre><p>We can refactor <code>addY</code> into a anonymous arrow function:</p><pre><code class="language-javascript">const add = (x) =&gt; {
return (y) =&gt; {
return x + y;
}
};
</code></pre><p>Or simplify it by building one liner arrow functions:</p><pre><code class="language-javascript">const add = (x) =&gt; (y) =&gt; x + y;
</code></pre><p>These three different curried functions have the same behavior: build a sequence of functions with only one argument.</p><p>How can we use it?</p><pre><code class="language-javascript">add(10)(20); // 30
</code></pre><p>At first, it can look a bit strange, but there's a logic behind it. <code>add(10)</code> returns a function. And we call this function with the <code>20</code> value.</p><p>This is the same as:</p><pre><code class="language-javascript">const addTen = add(10);
addTen(20); // 30
</code></pre><p>And this is interesting. We can generate specialized functions by calling the first function. Imagine we want an <code>increment</code> function. We can generate it from our <code>add</code> function by passing <code>1</code> as the value.</p><pre><code class="language-javascript">const increment = add(1);
increment(9); // 10
</code></pre><p>When I was implementing <a href="https://github.com/leandrotk/lazy-cypress">Lazy Cypress</a>, an npm library to record user behavior on a form page and generate Cypress testing code, I wanted to build a function to generate this string <code>input[data-testid="123"]</code>. So I had the element (<code>input</code>), the attribute (<code>data-testid</code>), and the value (<code>123</code>). Interpolating this string in JavaScript would look like this: <code>${element}[${attribute}="${value}"]</code>.</p><p>My first implementation was to receive these three values as parameters and return the interpolated string above:</p><pre><code class="language-javascript">const buildSelector = (element, attribute, value) =&gt;
`${element}[${attribute}="${value}"]`;
buildSelector('input', 'data-testid', 123); // input[data-testid="123"]
</code></pre><p>And it was great. I achieved what I was looking for. </p><p>But at the same time, I wanted to build a more idiomatic function. Something where I could write "G<em>et element X with attribute Y and value Z</em>". So if we break this phrase into three steps:</p><ul><li>"<em>get an element X</em>": <code>get(x)</code></li><li>"<em>with attribute Y</em>": <code>withAttribute(y)</code></li><li>"<em>and value Z</em>": <code>andValue(z)</code></li></ul><p>We can transform <code>buildSelector(x, y, z)</code> into <code>get(x)</code> ⇒ <code>withAttribute(y)</code> ⇒ <code>andValue(z)</code> by using the currying concept.</p><pre><code class="language-javascript">const get = (element) =&gt; {
return {
withAttribute: (attribute) =&gt; {
return {
andValue: (value) =&gt; `${element}[${attribute}="${value}"]`,
}
}
};
};
</code></pre><p>Here we use a different idea: returning an object with function as key-value. Then we can achieve this syntax: <code>get(x).withAttribute(y).andValue(z)</code>.</p><p>And for each returned object, we have the next function and argument.</p><p>Refactoring time! Remove the <code>return</code> statements:</p><pre><code class="language-javascript">const get = (element) =&gt; ({
withAttribute: (attribute) =&gt; ({
andValue: (value) =&gt; `${element}[${attribute}="${value}"]`,
}),
});
</code></pre><p>I think it looks prettier. And here's how we use it:</p><pre><code class="language-javascript">const selector = get('input')
.withAttribute('data-testid')
.andValue(123);
selector; // input[data-testid="123"]
</code></pre><p>The <code>andValue</code> function knows about the <code>element</code> and <code>attribute</code> values because it is aware of the lexical environment like with closures that we talked about before.</p><p>We can also implement functions using "partial currying" by separating the first argument from the rest for example.</p><p>After doing web development for a long time, I am really familiar with the <a href="https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener">event listener Web API</a>. Here's how to use it:</p><pre><code class="language-javascript">const log = () =&gt; console.log('clicked');
button.addEventListener('click', log);
</code></pre><p>I wanted to create an abstraction to build specialized event listeners and use them by passing the element and a callback handler.</p><pre><code class="language-javascript">const buildEventListener = (event) =&gt; (element, handler) =&gt; element.addEventListener(event, handler);
</code></pre><p>This way I can create different specialized event listeners and use them as functions.</p><pre><code class="language-javascript">const onClick = buildEventListener('click');
onClick(button, log);
const onHover = buildEventListener('hover');
onHover(link, log);
</code></pre><p>With all these concepts, I could create an SQL query using JavaScript syntax. I wanted to query JSON data like this:</p><pre><code class="language-javascript">const json = {
"users": [
{
"id": 1,
"name": "TK",
"age": 25,
"email": "tk@mail.com"
},
{
"id": 2,
"name": "Kaio",
"age": 11,
"email": "kaio@mail.com"
},
{
"id": 3,
"name": "Daniel",
"age": 28,
"email": "dani@mail.com"
}
]
}
</code></pre><p>So I built a simple engine to handle this implementation:</p><pre><code class="language-javascript">const startEngine = (json) =&gt; (attributes) =&gt; ({ from: from(json, attributes) });
const buildAttributes = (node) =&gt; (acc, attribute) =&gt; ({ ...acc, [attribute]: node[attribute] });
const executeQuery = (attributes, attribute, value) =&gt; (resultList, node) =&gt;
node[attribute] === value
? [...resultList, attributes.reduce(buildAttributes(node), {})]
: resultList;
const where = (json, attributes) =&gt; (attribute, value) =&gt;
json
.reduce(executeQuery(attributes, attribute, value), []);
const from = (json, attributes) =&gt; (node) =&gt; ({ where: where(json[node], attributes) });
</code></pre><p>With this implementation, we can start the engine with the JSON data:</p><pre><code class="language-javascript">const select = startEngine(json);
</code></pre><p>And use it like a SQL query:</p><pre><code class="language-javascript">select(['id', 'name'])
.from('users')
.where('id', 1);
result; // [{ id: 1, name: 'TK' }]
</code></pre><p>That's it for today. I could go on and on showing you a lot of different examples of abstractions, but I'll let you play with these concepts.</p><p>You can other articles like this <a href="https://leandrotk.github.io/tk/2020/04/react-hooks-context-api-and-pokemons/index.html"></a><a href="https://leandrotk.github.io/tk/2020/03/closure-currying-and-cool-abstractions/index.html">on my blog</a>.</p><p>My <a href="https://twitter.com/leandrotk_">Twitter</a> and <a href="https://github.com/leandrotk">Github</a>.</p><h2 id="resources">Resources</h2><ul><li><a href="https://github.com/tk-notes/blog/tree/master/closures-currying-and-cool-abstractions">Blog post source code</a></li><li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures">Closures | MDN Web Docs</a></li><li><a href="https://www.youtube.com/watch?v=iZLP4qOwY8I">Currying | Fun Fun Function</a></li><li><a href="https://alterclass.io/?ref=5ec57f513c1321001703dcd2">Learn React by building an App</a></li></ul>
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
