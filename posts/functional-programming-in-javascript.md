---
card: "/images/default.jpg"
tags: [Functional Programming]
description: JavaScript is a multi-paradigm language and can be written fo
author: "Milad E. Fahmy"
title: "What is Functional Programming? A Beginner's JavaScript Guide"
created: "2021-08-15T19:27:59+02:00"
modified: "2021-08-15T19:27:59+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-functional-programming tag-javascript ">
<header class="post-full-header">
<h1 class="post-full-title">What is Functional Programming? A Beginner's JavaScript Guide</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/11/Functional-code.png 300w,
/news/content/images/size/w600/2020/11/Functional-code.png 600w,
/news/content/images/size/w1000/2020/11/Functional-code.png 1000w,
/news/content/images/size/w2000/2020/11/Functional-code.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/11/Functional-code.png" alt="What is Functional Programming? A Beginner's JavaScript Guide">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>JavaScript is a multi-paradigm language and can be written following different programming paradigms. A programming paradigm is essentially a bunch of rules that you follow when writing code.</p>
<p>These paradigms exist because they solve problems that programmers face, and they have their own rules and instructions to help you write better code.</p>
<p>Each paradigm helps you solve a specific problem. So it's helpful to have an overview of each of them. We'll cover functional programming here.</p>
<p>At the end of this article, there are some resources you can use to go further if you enjoyed this introduction. </p>
<p>There's also a GitHub glossary that'll help you decode some of the jargon that functional programming uses. </p>
<p>Lastly, you'll find a place to get your hands dirty coding with practical examples and a GitHub repo full of resources you can use to learn more. So let's dive in.</p>
<h2 id="declarative-vs-imperative-programming-paradigms">Declarative vs Imperative Programming Paradigms</h2>
<p>One example of these paradigms I talked about at the beginning is object-orientated programming. Another is functional programming.</p>
<p>So what exactly is functional programming? </p>
<p>Functional programming is a sub-paradigm of the <strong>Declarative programming</strong> paradigm, with its own rules to follow when writing code.</p>
<h3 id="what-is-the-declarative-programming-paradigm">What is the declarative programming paradigm?</h3>
<p>If you're coding in a language that follows the declarative paradigm, you write code that specifies <strong>what you want to do, without saying how.</strong></p>
<p>A super simple example of this is either SQL or HTML:</p><pre><code class="language-SQL">SELECT * FROM customers</code></pre><pre><code class="language-HTML">&lt;div&gt;&lt;/div&gt;</code></pre>
<p>In the above code examples, you aren't implementing the <code>SELECT</code> or how to render a <code>div</code>. You are just telling the computer <em>what</em> to do, without the <em>how</em>.</p>
<p>From this paradigm, there are sub-paradigms such as <strong>Functional programming.</strong> More on that below.</p>
<h3 id="what-is-the-imperative-programming-paradigm">What is the imperative programming paradigm?</h3>
<p>If you're coding in a language that follows the imperative/procedural paradigm, you write code that tells <strong>how to do something.</strong></p>
<p>For example, if you do something like below:</p><pre><code class="language-javascript">for (let i = 0; i &lt; arr.length; i++) {
increment += arr[i];
}</code></pre>
<p>You are telling the computer exactly what to do. Iterate through the array called <code>arr</code>, and then <code>increment</code> each of the items in the array.</p>
<h3 id="declarative-vs-imperative-programming">Declarative vs Imperative programming</h3>
<p>You can write JavaScript in the <strong>Declarative paradigm</strong> or the <strong>Imperative paradigm.</strong> This is what people mean when they say it's a multi-paradigm language. It's just that functional code follows the <strong>Declarative paradigm</strong>.</p>
<p>If it helps you remember, an example of a declarative command would be to ask the computer to make you a cup of tea (I don't care how you do it, just bring me some tea).</p>
<p>Whilst imperatively, you would have to say:</p>
<ul>
<li>Go to the kitchen.</li>
<li>If there is a kettle in the room, and it has enough water for a cup of tea, turn on the kettle.</li>
<li>If there is a kettle in the room, and it doesn't have enough water for a cup of tea, fill the kettle with enough water for a cup of tea, then turn on the kettle.</li>
<li><em>And so on</em></li>
</ul>
<h3 id="so-what-is-functional-programming">So what is Functional Programming?</h3>
<p>So what does this mean for functional code?</p>
<p>Because it's a sub-paradigm from the <strong>Declarative paradigm</strong>, this affects the way you write functional code. It generally leads to less code, because JavaScript already has a lot of the in-built functions you commonly need. This is one reason people like functional code. </p>
<p>It also allows you to abstract away a lot (you don't have to understand in depth how something gets done), you just call a function that does it for you.</p>
<p>And what are the rules that lead to functional code?</p>
<p>Functional programming can be simply explained by following these 2 laws in your code:</p>
<ol>
<li><strong>You architect your software out of pure, isolated functions</strong></li>
<li><strong>You avoid mutability and side-effects</strong></li>
</ol>
<p>Let's dig into that.</p>
<h2 id="1-architect-your-software-out-of-pure-isolated-functions">1. Architect your software out of pure, isolated functions</h2>
<p>Let's start at the beginning, </p>
<p>Functional code makes heavy use of a few things:</p>
<h3 id="pure-functions">Pure functions</h3>
<p>The same input always gives the same output (<strong>idempotence</strong>), and has no side effects. </p>
<p>An <strong>idempotent function</strong>, is one that, when you reapply the results to that function again, doesn't produce a different result.</p>
Math.abs('-1');     // 1
Math.abs(-1);       // 1
Math.abs(null);     // 0
Math.abs(Math.abs(Math.abs('-1')));           // Still returns 1
Math.abs(Math.abs(Math.abs(Math.abs('-1')))); // Still returns 1</code></pre>
<figcaption>An example of an idempotent function.</figcaption>
</figure>
<p>Side effects are when your code interacts with (reads or writes to) external mutable state. </p>
<p>External mutable state is literally anything outside the function that would change the data in your program. Set a function? Set a Boolean on an object? Delete properties on an object? All changes to state outside your function.</p>
available = true;
}</code></pre>
<figcaption>An example of mutable state being set inside your functions.</figcaption>
</figure>
<h3 id="isolated-functions">Isolated functions</h3>
<p>There is no dependence on the state of the program, which includes global variables that are subject to change. </p>
<p>We will discuss this further, but anything that you need should be passed into the function as an argument. This makes your dependencies (things that the function needs to do its job) much clearer to see, and more discoverable.</p>
<p>Ok, so why do you do things this way?</p>
<p>I know this seems like lots of restrictions that make your code unnecessarily hard. But they aren't restrictions, they are guidelines that try to stop you from falling into patterns that commonly lead to bugs.</p>
<p>When you aren't changing your code execution, forking your code with <code>if</code> 's based on <code>Boolean</code>'s state, being set by multiple places in your code, you make the code more predictable and it's easier to reason about what's happening.</p>
<p>When you follow the functional paradigm, you'll find that the execution order of your code doesn't matter as much. </p>
<p>This has quite a few benefits – one being, for example, that to replicate a bug you don't need to know exactly what each <code>Boolean</code> and <code>Object</code>'s state was before you run your functions. As long as you have a call stack (you know what function is running/has run before you) it can replicate the bugs, and solve them more easily.</p>
<h3 id="reusability-through-higher-order-functions">Reusability through Higher order functions</h3>
<p>Functions that can be assigned to a variable, passed into another function, or returned from another function just like any other normal value, are called <strong>first class functions</strong>. </p>
<p>In JavaScript, all functions are first class functions. Functions that have a first class status allow us to create <strong>higher order functions</strong>.</p>
<p>A <strong><strong>higher order function</strong></strong> is a function that either take a function as an argument, returns a function, or both! You can use higher order functions to stop repeating yourself in your code.</p>
<p>Something like this:</p><pre><code class="language-js">// Here's a non-functional example
const ages = [12,32,32,53]
for (var i=0; i &lt; ages.length; i++) {
finalAge += ages[i];
}
// Here's a functional example
const ages = [12,32,32,53]
const totalAge = ages.reduce( function(firstAge, secondAge){
return firstAge + secondAge;
})
</code></pre>
<p>The in-built JavaScript <code>Array</code> functions <code>.map</code>, <code>.reduce</code>, and <code>.filter</code> all accept a function. They are excellent examples of <strong>higher order functions, </strong>as they iterate over an array and call the function they received for each item in the array.</p>
<p>So you could do:</p><pre><code class="language-js">// Here's an example of each
const array = [1, 2, 3];
const mappedArray = array.map(function(element){
return element + 1;
});
// mappedArray is [2, 3, 4]
const reduced = array.reduce(function(firstElement, secondElement){
return firstElement + secondElement;
});
// reduced is 6
const filteredArray = array.filter(function(element){
return element !== 1;
});
// filteredArray is [2, 3]</code></pre>
<p>Passing the results of functions into other functions, or even passing the functions themselves, in is extremely common in functional code. I included this brief explanation because of how often it is used.</p>
<p>These functions are also often used because they don't change the underlying function (no state change) but operate on a copy of the <code>array</code>.</p>
<h2 id="2-avoid-mutability-and-side-effects">2. Avoid mutability and side-effects</h2>
<p>The second rule is to avoid mutability – we touched on this briefly earlier, when we talked about limiting changes to external mutable state – and side effects.</p>
<p>But here we'll expand further. Basically, it boils down to this: don't change things! Once you've made it, it is <strong>immutable </strong>(unchanging over time).</p>
ages[1] = 12;  // no!
ages = [];     // no!
ages.push("2") // no!</code></pre>
<figcaption>This code isn't written in the functional pattern.</figcaption>
</figure>
<p>If something has to change for your data structures, make changes to a copy.</p>
const newAges = ages.map(function (age){
if (age == 12) { return 20; }
else { return age; }
})</code></pre>
<figcaption>Much better!</figcaption>
</figure>
<p>Can you see I made a copy with my necessary changes?</p>
<p>This element is repeated over and over again. Don't change state! </p>
<p>If we follow that rule, we will make heavy use of <code>const</code> so we know things wont change. But it has to go further than that. How about the below?</p><pre><code class="language-js">const changingObject = {
willChange: 10
}
changingObject.willChange = 10;  // no!
delete obj.willChange            // no!
</code></pre>
<p>The properties of <code>changingObject</code> should be locked down completely. <code>const</code> will only protect you from initializing over the variable.</p>
cantChange: 'Locked' }) // The `freeze` function enforces immutability.
obj.cantChange = 0      // Doesn't change the obj!
delete obj.cantChange   // Doesn't change the obj!
obj.addProp = "Gotcha!" // Doesn't change the obj!</code></pre>
<figcaption>Use persistent data structures</figcaption>
</figure>
<p>If we can't change the state of global variables, then we need to ensure:</p>
<ul>
<li>We declare function arguments – any computation inside a function depends only on the arguments, and not on any global object or variable.</li>
<li>We don't alter a variable or object – create new variables and objects and return them if need be from a function.</li>
</ul>
<h3 id="make-your-code-referentially-transparent">Make your code referentially transparent</h3>
<p>When you follow the rule of never changing state, your code becomes <strong>referentially transparent</strong>. That is, your function calls can be replaced with the values that they represent without affecting the result.</p>
<p>As a simple example of checking if your code is <strong>referentially transparent, </strong>look at<strong> </strong>the below code snippet:</p><pre><code class="language-js">const greetAuthor = function(){
return 'Hi Kealan'
}</code></pre>
<p>You should be able to just swap that function call with the <code>string</code> it returns, and have no problems. </p>
<p>Functional programming with referentially transparent expressions makes you start to think about your code differently if you're used to <strong>object orientation</strong>.</p>
<p>But why?</p>
<p>Because instead of objects and mutable state in your code, you start to have pure functions, with no state change. You understand very clearly what you are expecting your function to return (as it never changes, when normally it might return different data types depending on state outside the function).</p>
<p>It can help you understand the flow better, understand what a function is doing just by skimming it, and be more rigorous with each function's responsibilities to come up with better decoupled systems.</p>
<p>You can learn more about referential transparency <a href="https://medium.com/@olxc/referential-transparency-93352c2dd713">here</a>.</p>
<h3 id="don-t-iterate">Don't iterate</h3>
<p>Hopefully, if you've paid attention so far, you see we aren't changing state. So just to be clear <code>for</code> loops go out the window:</p><pre><code class="language-js">for(let i = 0; i &lt; arr.length; i++) {
total += arr[i];
}</code></pre>
<p>Because we are changing a variable's state there. Use the <code>map</code> higher order function instead.</p>
<h2 id="more-features-of-functional-programming">More Features of Functional Programming</h2>
<p>I hope at this point you have a good overview of what functional code is and isn't. But there's some final concepts used heavily in functional code that we have to cover. </p>
<p>In all the functional code I have read, these concepts and tools are used the most, and we have to cover them to get our foundational knowledge.</p>
<p>So here we go.</p>
<h2 id="recursion-in-functional-programming">Recursion in Functional Programming</h2>
<p>It's possible in JavaScript to call a function from the function itself.</p>
<p>So what we could always do:</p>
recurse();
}</code></pre>
<figcaption>This might not be a great idea.</figcaption>
</figure>
<p>The problem with this is that it isn't useful. It will run eventually until it crashes your browser. But the idea of recursion is a function calling itself from its function body. So let's see a more useful example:</p><pre><code class="language-js">function recurse(start, end){
if (start == end) {
console.log(end)
return;
} else {
console.log(start)
return recurse(start+1, end)
}
}
recurse(1, 10);
// 1, 2, 3, 4, 5, 6, 7, 8, 9, 10</code></pre>
<p>This code snippet will count from the <code>start</code> argument to the <code>end</code> argument. And it does so by calling its own function again.</p>
<p>So the order of this will look something like this:</p>
<figcaption>A call stack example for this recursive function.</figcaption>
</figure>
<p>Add a debugger inside the if blocks to follow this if it doesn't make sense to you. Recursion is one tool you can use to iterate in functional programming.</p>
<p>What makes the first example and the second example different? The second one has what we call <strong>"a base case"</strong>. A base case lets the function eventually stop calling into itself infinitely. When <code>start</code> is equal to <code>end</code> we can stop recursing. As we know we have counted to the very end of our loop.</p>
<p>But each call of the functions is calling into its own function again, and adding on to the function argument.</p>
<p>The code example I just included for the counting example isn't a <strong>pure function</strong>. Why is that?</p>
<p>Because the <code>console</code> is state! And we logged <code>string</code>'s to it. </p>
<p>This has been a brief introduction to recursion, but feel free to go here to learn more <a href="https://javascript.info/recursion">here</a>.</p>
<h3 id="why-use-recursion">Why use recursion?</h3>
<p>Recursion allows us to stop mutating state variables, for one.</p>
<p>There are also certain data structures (tree structures) that are more efficient when solved with recursion. They generally require less code, so some coders like the readability of recursion. </p>
<h2 id="currying-in-functional-programming">Currying in Functional Programming</h2>
<p>Currying is another tool used heavily in functional code. The <strong>arity </strong>of a function refers to how many arguments it receives.</p><pre><code class="language-js">// Let's talk arity
function arity2(arg1, arg2){}             // Function has an arity of 2
function arity0(){}                       // Function has an arity of 0
function arity2(arg1, arg2, arg3, arg4){} // Function has an arity of 4</code></pre>
<p><br><strong>Currying</strong> a function turns a function that has an arity of more than 1, to 1. It does this by returning an inner function to take the next argument. Here's an example:</p><pre><code class="language-js">function add(firstNum, secondNum){
return firstNum + secondNum;
}
// Lets curry this function
function curryAdd(firstNum){
return function(secondNum){
return firstNum + secondNum;
}
}</code></pre>
<p><br>Essentially, it restructures a function so it takes one argument, but it then returns another function to take the next argument, as many times as it needs to. </p>
<h3 id="why-use-currying">Why use currying?</h3>
<p>The big benefit of currying is when you need to re-use the same function multiple times but only change one (or fewer) of the parameters. So you can save the first function call, something like this:</p><pre><code class="language-js">function curryAdd(firstNum){
return function(secondNum){
return firstNum + secondNum;
}
}
let add10 = curryAdd(10);
add10(2); // Returns 12
let add20 = curryAdd(20);
add20(2); // Returns 22</code></pre>
<p>Currying can also make your code easier to refactor. You don't have to change multiple places where you are passing in the wrong function arguments – just the one place, where you bound the first function call to the wrong argument.</p>
<p>It's also helpful if you can't supply all the arguments to a function at one time. You can just return the first function to call the inner function when you have all the arguments later. </p>
<h2 id="partial-application-in-functional-programming">Partial application in Functional Programming</h2>
<p>Similarly, partial application means that you apply a few arguments to a function at a time and return another function that is applied to more arguments. Here's the best example I found from the MDN docs:</p><pre><code class="language-javascript">const module = {
height: 42,
getComputedHeight: function(height) {
return this.height + height;
}
};
const unboundGetComputedHeight = module.getComputedHeight;
console.log(unboundGetComputedHeight(32)); // The function gets invoked at the global scope
// outputs: NaN
// Outputs NaN as this.height is undefined (on scope of window) so does
// undefined + 32 which returns NaN
const boundGetComputedHeight = unboundGetComputedHeight.bind(module);
console.log(boundGetComputedHeight(32));
// expected output: 74</code></pre>
<p><code>bind</code> is the best example of a partial application. Why?</p>
<p>Because we return an inner function that gets assigned to <code>boundGetComputedHeight</code> that gets called, with the <code>this</code> scope correctly set up and a new argument passed in later. We didn't assign all the arguments at once, but instead we returned a function to accept the rest of the arguments.</p>
<h3 id="why-use-partial-application">Why use partial application?</h3>
<p>You can use partial application whenever you can't pass all your arguments at once, but can return <code>function</code>s from higher order functions to deal with the rest of the arguments.</p>
<h2 id="function-composition-in-functional-programming">Function composition in Functional Programming</h2>
<p>The final topic that I think is fundamental to functional code is <strong>function composition</strong>.</p>
<p><strong>Function composition </strong>allows us to take two or more functions and turn them into one function that does exactly what the two functions (or more) do.</p><pre><code class="language-javascript">// If we have these two functions
function add10(num) {
return num + 10;
}
function add100(num) {
return num + 100;
}
// We can compose these two down to =&gt;
function composed(num){
return add10(add100(num));
}
composed(1) // Returns 111</code></pre>
<p>You can take this further and create functions to compose any number of multiple arity functions together if you need that for your use case.</p>
<h3 id="why-use-function-composition">Why use function composition?</h3>
<p>Composition allows you to structure your code out of re-usable functions, to stop repeating yourself. You can start to treat functions like small building blocks you can combine together to achieve a more complicated output. </p>
<p>These then become the "units" or the computation power in your programs. They're lots of small functions that work generically, all composed into larger functions to do the "real" work. </p>
<p>It's a powerful way of architecting your code, and keeps you from creating huge functions copied and pasted with tiny differences between them. </p>
<p>It can also help you test when your code is not tightly coupled. And it makes your code more reusable. You can just change the composition of your functions or add more tiny functions into the composition, rather than having all the code copied and pasted all over the codebase (for when you need it to do something similar but not quite the same as another function).</p>
<p>The example below is made trivial to help you understand, but I hope you see the power of <strong>function composition.</strong></p><pre><code class="language-javascript">/// So here's an example where we have to copy and paste it
function add50(num) {
return num + 50;
}
// Ok. Now we need to add 30. But we still ALSO need elsewhere to add 50 still
// So we need a new function
function add30(num){
return num + 30;
}
// Ugh, business change again
function add20(num){
return num + 20;
}
// Everytime we need to change the function ever so slightly. We need a new function
//Let's use composition
// Our small, reusable pure function
function add10(num){
return num + 10;
}
function add50Composed(num){
return add10(add10(add10(add10(addNum(num)))));
}
function add30Composed(num){
return add10(add10(add10(num)));
}
function add20Composed(num){
return add10(add10(num));
}</code></pre>
<p>Do you see how we composed new functions out of smaller, pure functions?</p>
<h2 id="conclusion">Conclusion</h2>
<p>This article covered a lot. But I hope it has explained functional code simply, along with some of the repeating patterns you will see over and over again, in functional and even non-functional code.</p>
<p>Functional code isn't necessarily the best, and neither is object orientated code. Functional code is generally used for more math-based problems like data analysis. It's also very useful for high-availability real-time systems, like stuff written in Erlang (a functional language). But it genuinely does depend problem to problem.</p>
<p>I post my articles on <a href="https://twitter.com/kealanparr">Twitter</a>. If you enjoyed this article you can read more there.</p>
<h2 id="how-to-learn-more">How to learn more</h2>
<p>Start <a href="https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/learn-about-functional-programming">here</a>, with freeCodeCamp's introduction to functional programming with JavaScript.</p>
<p>Look <a href="https://github.com/xgrommx/awesome-functional-programming#javascript">here </a>for some libraries you can include and play around with, to really master functional programming.</p>
<p>Peruse <a href="https://github.com/leandrotk/functional-programming-learning-path">this </a>good overview of lots of functional concepts.</p>
<p>Finally, <a href="https://github.com/hemanth/functional-programming-jargon">here's </a>an excellent jargon-busting glossary of functional terms.</p>
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
