---
card: "https://cdn-media-1.freecodecamp.org/images/1*IqZ-dx0QZDVvTBqQBNrOhg.jpeg"
tags: [JavaScript]
description: "Discover Functional JavaScript was named one of the best new "
author: "Milad E. Fahmy"
title: "What to do when “this” loses context"
created: "2021-08-16T11:41:00+02:00"
modified: "2021-08-16T11:41:00+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-programming tag-technology tag-tech tag-tutorial ">
<header class="post-full-header">
<h1 class="post-full-title">What to do when “this” loses context</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*IqZ-dx0QZDVvTBqQBNrOhg.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*IqZ-dx0QZDVvTBqQBNrOhg.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*IqZ-dx0QZDVvTBqQBNrOhg.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*IqZ-dx0QZDVvTBqQBNrOhg.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*IqZ-dx0QZDVvTBqQBNrOhg.jpeg" alt="What to do when “this” loses context">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p><a href="https://read.amazon.com/kp/embed?asin=B07PBQJYYG&amp;preview=newtab&amp;linkCode=kpe&amp;ref_=cm_sw_r_kb_dp_cm5KCbE5BDJGE" rel="nofollow noopener noopener noopener noopener noopener noopener noopener noopener noopener noopener noopener noopener nofollow noopener nofollow noopener"><strong><strong>Discover Functional JavaScript</strong></strong></a> was named one of the <a href="https://bookauthority.org/books/new-functional-programming-books?t=7p46zt&amp;s=award&amp;book=1095338781" rel="noopener nofollow nofollow noopener"><strong><strong>best new Functional Programming books by BookAuthority</strong></strong></a><strong><strong>!</strong></strong></p><p>The best way to avoid <code>this</code> losing context is to not use <code>this</code> at all. However, this is not always an option. We may have inherited code that uses <code>this</code> or we might work with a library making use of <code>this</code>.</p><p>Object literals, constructor functions, and <code>class</code>es build objects over the prototype system. The <code>this</code> pseudo-parameter is used by the prototype system to give functions access to the other object properties.</p><p>Let’s take a look at some situations.</p><h3 id="nested-functions">Nested Functions</h3><p><code>this</code> loses context inside nested functions. <a href="https://jsfiddle.net/cristi_salcescu/n7zh5gvw/" rel="noopener">Consider the following code</a>:</p><pre><code>class Service {
constructor(){
this.numbers = [1,2,3];
this.token = "token";
}
doSomething(){
setTimeout(function doAnotherThing(){
this.numbers.forEach(function log(number){
//Cannot read property 'forEach' of undefined
console.log(number);
console.log(this.token);
});
}, 100);
}
}
let service = new Service();
service.doSomething();</code></pre><p>The <code>doSomething()</code> method has two nested functions: <code>doAnotherThing()</code> and <code>log()</code>. When <code>service.doSomething()</code> is called, <code>this</code> loses context in the nested functions.</p><h4 id="bind-">bind()</h4><p>One way to fix the problem is with <code>bind()</code>. <a href="https://jsfiddle.net/cristi_salcescu/2r4ncoum/" rel="noopener">Look at the next code</a>:</p><pre><code>doSomething(){
setTimeout(function doAnotherThing(){
this.numbers.forEach(function log(number){
console.log(number);
console.log(this.token);
}.bind(this));
}.bind(this), 100);
}</code></pre><p><code>bind()</code> creates a new version of the function that, when called, has the <code>this</code> value already set. Note that we need to use <code>.bind(this)</code> for every nested function.</p><p><code>function doAnotherThing(){ /*…*/}.bind(this)</code> creates a version of <code>doAnotherThing()</code> that takes the <code>this</code> value from <code>doSomething()</code>.</p><h4 id="that-self">that/self</h4><p>Another option is to declare and use a new variable <code>that/self</code> that stores the value of <code>this</code> from the <code>doSomething()</code> method.</p><p><a href="https://jsfiddle.net/cristi_salcescu/6ajx1hbp/" rel="noopener">See the code below</a>:</p><pre><code>doSomething(){
let that = this;
setTimeout(function doAnotherThing(){
that.numbers.forEach(function log(number){
console.log(number);
console.log(that.token);
});
}, 100);
}</code></pre><p>We need to declare <code>let that = this</code> in all methods using <code>this</code> in nested functions.</p><h4 id="arrow-function">Arrow function</h4><p>The arrow function offers another way to fix this issue. <a href="https://jsfiddle.net/cristi_salcescu/ejdb19su/" rel="noopener">Below is the code</a>:</p><pre><code>doSomething(){
setTimeout(() =&gt; {
this.numbers.forEach(number =&gt; {
console.log(number);
console.log(this.token);
});
}, 100);
}</code></pre><p>The arrow function does not have its own <code>this</code>. It takes the <code>this</code> value from its parent. The only problem with this fix is that we tend to lose the function name. The function name is important, as it improves readability by expressing the function intention.</p><p><a href="https://jsfiddle.net/cristi_salcescu/by096fza/" rel="noopener">Below is the same code</a>, with functions inferring the variable name:</p><pre><code>doSomething(){
let log = number =&gt; {
console.log(number);
console.log(this.token);
}
let doAnotherThing = () =&gt; {
this.numbers.forEach(log);
}
setTimeout(doAnotherThing, 100);
}</code></pre><p>Method as callback</p><p><code>this</code> loses context when the method is used as a callback.</p><p><a href="https://jsfiddle.net/cristi_salcescu/f3t2vmex/" rel="noopener">Consider the next class</a>:</p><pre><code>class Service {
constructor(){
this.token = "token";
}
doSomething(){
console.log(this.token);//undefined
}
}
let service = new Service();</code></pre><p>Now, let’s look at some situations where the method <code>service.doSomething()</code> is used as a callback.</p><pre><code>//callback on DOM event
$("#btn").click(service.doSomething);
//callback for timer
setTimeout(service.doSomething, 0);
//callback for custom function
run(service.doSomething);
function run(fn){
fn();
}</code></pre><p>In all previous situations <code>this</code> loses context.</p><h4 id="bind--1">bind()</h4><p>We can use <code>bind()</code> to fix the problem. <a href="https://jsfiddle.net/cristi_salcescu/1904jbh8/" rel="noopener">Check out the next code snippet</a>:</p><pre><code>//callback on DOM event
$("#btn").click(service.doSomething.bind(service));
//callback for timer
setTimeout(service.doSomething.bind(service), 0);
//callback for custom function
run(service.doSomething.bind(service));</code></pre><h4 id="arrow-function-1">Arrow function</h4><p>Another option is to create a new function that calls <code>service.doSomething()</code> .</p><pre><code>//callback on DOM event
$("#btn").click(() =&gt; service.doSomething());
//callback for timer
setTimeout(() =&gt; service.doSomething(), 0);
//callback for custom function
run(() =&gt; service.doSomething());</code></pre><h3 id="react-components">React Components</h3><p>In React components, <code>this</code> loses context when methods are used as callbacks for UI events.</p><p><a href="https://jsfiddle.net/cristi_salcescu/q59zjx1p/" rel="noopener">Consider the following component</a>:</p><pre><code>class TodoAddForm extends React.Component {
constructor(){
super();
this.todos = [];
}
componentWillMount() {
this.setState({desc: ""});
}
add(){
let todo = {desc: this.state.desc};
//Cannot read property 'state' of undefined
this.todos.push(todo);
}
handleChange(event) {
//Cannot read property 'setState' of undefined
this.setState({desc: event.target.value});
}
render() {
return &lt;form&gt;
&lt;input onChange={this.handleChange} value={this.state.desc} type="text"/&gt;
&lt;button onClick={this.add} type="button"&gt;Save&lt;/button&gt;
&lt;/form&gt;;
}
}
ReactDOM.render(
&lt;TodoAddForm /&gt;,
document.getElementById('root'));</code></pre><p>A way to fix the problem is to create new functions in the constructor using <code>bind(this)</code>.</p><pre><code>constructor(){
super();
this.todos = [];
this.handleChange = this.handleChange.bind(this);
this.add = this.add.bind(this);
}</code></pre><h3 id="not-using-this">Not using “<code>this"</code></h3><p>No <code>this</code>, no problems with losing context. Objects can be created using factory functions. <a href="https://jsfiddle.net/cristi_salcescu/xvsk6twc/" rel="noopener">Check out this code</a>:</p><pre><code>function Service() {
let numbers = [1,2,3];
let token = "token";
function doSomething(){
setTimeout(function doAnotherThing(){
numbers.forEach(function log(number){
console.log(number);
console.log(token);
});
}, 100);
}
return Object.freeze({
doSomething
});
}</code></pre><p>This time the context is not lost when the method is used as a callback.</p><pre><code>
let service = Service();
service.doSomething();
//callback on DOM event
$("#btn").click(service.doSomething);
//callback for timer
setTimeout(service.doSomething, 0);
//callback for custom function
run(service.doSomething);</code></pre><h3 id="conclusion">Conclusion</h3><p><code>this</code> can lose context in different situations.</p><p><code>bind()</code>, the that/self pattern, and arrow functions are tools at our disposal for solving the context problems.</p><p>Factory functions give the option of creating objects without using <code>this</code> at all.</p><p><a href="https://read.amazon.com/kp/embed?asin=B07PBQJYYG&amp;preview=newtab&amp;linkCode=kpe&amp;ref_=cm_sw_r_kb_dp_cm5KCbE5BDJGE&amp;source=post_page---------------------------"><strong><strong>Discover Functional JavaScript</strong></strong></a> was named one of the<strong><strong> </strong></strong><a href="https://bookauthority.org/books/new-functional-programming-books?t=7p46zt&amp;s=award&amp;book=1095338781&amp;source=post_page---------------------------"><strong><strong>best new Functional Programming books by BookAuthority</strong></strong></a><strong><strong>!</strong></strong></p><p><strong><strong>For more on applying functional programming techniques in React take a look at</strong></strong> <a href="https://read.amazon.com/kp/embed?asin=B07S1NLFTS&amp;preview=newtab&amp;linkCode=kpe&amp;ref_=cm_sw_r_kb_dp_Pko5CbA30383Y" rel="noopener nofollow"><strong><strong>Functional React</strong></strong></a><strong><strong>.</strong></strong></p><p>Learn <strong><strong>functional React</strong></strong>, in a project-based way, with <a href="https://read.amazon.com/kp/embed?asin=B0846NRJYR&amp;preview=newtab&amp;linkCode=kpe&amp;ref_=cm_sw_r_kb_dp_o.hlEbDD02JB2" rel="noopener nofollow"><strong><strong>Functional Architecture with React and Redux</strong></strong></a><strong><strong>.</strong></strong></p><p><a href="https://twitter.com/cristi_salcescu" rel="noopener nofollow nofollow noopener nofollow noopener nofollow noopener">Follow on Twitter</a></p>
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
