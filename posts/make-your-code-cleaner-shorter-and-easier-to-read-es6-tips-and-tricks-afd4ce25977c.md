---
card: "https://cdn-media-1.freecodecamp.org/images/1*2VqxkdyNCmWa8ojZZIoQOg.jpeg"
tags: [JavaScript]
description: by Sam Williams
author: "Milad E. Fahmy"
title: "ES6 tips and tricks to make your code cleaner, shorter, and easier to read!"
created: "2021-08-15T19:48:43+02:00"
modified: "2021-08-15T19:48:43+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-learning tag-es6 tag-tech tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">ES6 tips and tricks to make your code cleaner, shorter, and easier to read!</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*2VqxkdyNCmWa8ojZZIoQOg.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*2VqxkdyNCmWa8ojZZIoQOg.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*2VqxkdyNCmWa8ojZZIoQOg.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*2VqxkdyNCmWa8ojZZIoQOg.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*2VqxkdyNCmWa8ojZZIoQOg.jpeg" alt="ES6 tips and tricks to make your code cleaner, shorter, and easier to read!">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Sam Williams</p>
<h1 id="es6-tips-and-tricks-to-make-your-code-cleaner-shorter-and-easier-to-read-">ES6 tips and tricks to make your code cleaner, shorter, and easier to read!</h1>
<h3 id="template-literals">Template literals</h3>
<p>Template literals make working with strings so much easier than before. They're started with a back tick, and can have variables inserted using <code>${variable}</code>. Compare these two lines of code:</p><pre><code>var fName = 'Peter', sName = 'Smith', age = 43, job= 'photographer';var a = 'Hi, I\'m ' + fName + ' ' + sName + ', I\'m ' + age + ' and work as a ' + job + '.';var b = `Hi, I'm ${ fName } ${ sName }, I'm ${ age } and work as a ${ job }.`;</code></pre>
<p>This makes life far simpler and code easier to read. You can put anything inside of the curly braces: variables, equations, or function calls. I'll use these in examples throughout this article.</p>
<h3 id="syntax-block-scoping">Syntax Block scoping</h3>
<p>JavaScript has always been scoped by functions, which is why it had become common to wrap the whole of a JavaScript file in an empty immediately invoked function expression (IIFE). This is done to isolate all of the variables in the file, so there are no variable conflicts.</p>
<p>Now, we have block scoping and two new variable declarations which are bound to a block.</p>
<h3 id="-let-declaration">‘Let’ Declaration</h3>
<p>This is similar to <code>var</code> but has a few notable differences. Because it's block scoped, a new variable with the same name can be declared without affecting outer variables.</p><pre><code>var a = 'car' ;{    let a = 5;    console.log(a) // 5}console.log(a) // car</code></pre>
<p>Because its bound to a block scope, it solves this classic interview question:<br>"what is output, and how would you get it to work as you expect?"</p><pre><code>for (var i = 1; i &lt; 5; i++){    setTimeout(() =&gt; { console.log(i); }, 1000);}</code></pre>
<p>In this case it outputs "5 5 5 5 5" because the variable <code>i </code>changes on each iteration.</p>
<p>If you switch out the <code>var</code> for <code>let</code> then everything changes. Now, each loop creates a new block scope with the value for i bound to that loop. It is though you've written:</p><pre><code>{let i = 1; setTimeout(() =&gt; { console.log(i) }, 1000)} {let i = 2; setTimeout(() =&gt; { console.log(i) }, 1000)} {let i = 3; setTimeout(() =&gt; { console.log(i) }, 1000)} {let i = 4; setTimeout(() =&gt; { console.log(i) }, 1000)} {let i = 5; setTimeout(() =&gt; { console.log(i) }, 1000)} </code></pre>
<p>Another difference between <code>var</code> and <code>let</code> is that <code>let</code> isn't hoisted as <code>var</code> is.</p><pre><code>{     console.log(a); // undefined    console.log(b); // ReferenceError    var a = 'car';    let b = 5;}</code></pre>
<p>Because of its tighter scoping and more predictable behaviour, some people have said that you should use <code>let</code> instead of <code>var</code>, except where you specifically need the hoisting or looser scoping of the <code>var</code> declaration.</p>
<h3 id="const">Const</h3>
<p>If you wanted to declare a constant variable in JavaScript before, it was convention to name the variable in block caps. However, this wouldn’t secure the variable — it just let other developers know that it was a constant and shouldn't be changed.</p>
<p>Now we have the <code>const</code> declaration.</p><pre><code>{    const c = "tree";    console.log(c);  // tree    c = 46;  // TypeError! }</code></pre>
<p><code>const</code> doesn't make the variable immutable, just locks its assignment. If you have a complex assignment (object or array), then the value can still be modified.</p><pre><code>{    const d = [1, 2, 3, 4];    const dave = { name: 'David Jones', age: 32};    d.push(5);     dave.job = "salesman";    console.log(d);  // [1, 2, 3, 4, 5]    console.log(dave);  // { age: 32, job: "salesman", name: 'David Jones'}}</code></pre>
<h3 id="problem-with-block-scoping-functions">Problem with block scoping functions</h3>
<p>Function declarations are now specified to be bound to block scoping.</p><pre><code>{    bar(); // works    function bar() { /* do something */ }}bar();  // doesn't work</code></pre>
<p>The problem comes when you declare a function inside an <code>if</code> statement.</p>
<p>Consider this:</p><pre><code>if ( something) {    function baz() { console.log('I passed') }} else {    function baz() { console.log('I didn\'t pass') } } baz();</code></pre>
<p>Before ES6, both function declarations would have been hoisted and the result would have been <code>'I didn\'t pass'</code> no matter what <code>something</code> was. <br>Now we get <code>'ReferenceError'</code>, as <code>baz</code> is always bound by the block scope.</p>
<h3 id="spread">Spread</h3>
<p>ES6 introduces the <code>...</code> operator, which is referred to as the ‘spread operator’. It has two main uses: spreading an array or object into a new array or object, and joining multiple parameters into an array.</p>
<p>The first use case is the one you'll probably encounter most, so we’ll look at that first.</p><pre><code>let a = [3, 4, 5];let b = [1, 2, ...a, 6];console.log(b);  // [1, 2, 3, 4, 5, 6]</code></pre>
<p>This can be very useful for passing in a set of variables to a function from an array.</p><pre><code>function foo(a, b, c) { console.log(`a=${a}, b=${b}, c=${c}`)} let data = [5, 15, 2];foo( ...data); // a=5, b=15, c=2</code></pre>
<p>An object can also be spread, inputting each of the key value pairs into the new object. ( Object spread is actually in stage 4 of proposal and will be officially in ES2018. Its only supported by Chrome 60 or later, Firefox 55 or later, and Node 6.4.0 or later)</p><pre><code>let car = { type: 'vehicle ', wheels: 4};let fordGt = { make: 'Ford', ...car, model: 'GT'};console.log(fordGt); // {make: 'Ford', model: 'GT', type: 'vehicle', wheels: 4}</code></pre>
<p>Another feature of the spread operator is that it creates a new array or object. The example below creates a new array for <code>b</code>, but <code>c</code> just refers to the same array.</p><pre><code>let a = [1, 2, 3];let b = [ ...a ];let c = a;b.push(4);console.log(a);  // [1, 2, 3]console.log(b);  // [1, 2, 3, 4] referencing different arraysc.push(5);console.log(a);  // [1, 2, 3, 5] console.log(c);  // [1, 2, 3, 5] referencing the same array</code></pre>
<p>The second use case is gathering variables together into an array. This is very useful for when you don’t know how many variables are being passed to a function.</p><pre><code>function foo(...args) {    console.log(args); } foo( 'car', 54, 'tree');  //  [ 'car', 54, 'tree' ] </code></pre>
<h3 id="default-parameters">Default Parameters</h3>
<p>Functions can now be defined with default parameters. Missing or undefined values are initialized with the default value. Just be careful — because null and false values are coerced to 0.</p><pre><code>function foo( a = 5, b = 10) {    console.log( a + b);} foo();  // 15foo( 7, 12 );  // 19foo( undefined, 8 ); // 13foo( 8 ); // 18foo( null ); // 10 as null is coerced to 0</code></pre>
<p>The default values can be more than just values — they can also be expressions or functions.</p><pre><code>function foo( a ) { return a * 4; }function bar( x = 2, y = x + 4, z = foo(x)) {    console.log([ x, y, z ]);}bar();  // [ 2, 6, 8 ]bar( 1, 2, 3 ); //[ 1, 2, 3 ] bar( 10, undefined, 3 );  // [ 10, 14, 3 ]</code></pre>
<h3 id="destructuring">Destructuring</h3>
<p>Destructuring is the process of taking apart the array or object on the left hand side of the equal sign. The array or object can come from a variable, function, or equation.</p><pre><code>let [ a, b, c ] = [ 6, 2, 9];console.log(`a=${a}, b=${b}, c=${c}`); //a=6, b=2, c=9</code></pre><pre><code>function foo() { return ['car', 'dog', 6 ]; } let [ x, y, z ] = foo();console.log(`x=${x}, y=${y}, z=${z}`);  // x=car, y=dog, z=6</code></pre>
<p>With object destructuring, the keys of the object can be listed inside curly braces to extract that key-value pair.</p><pre><code>function bar() { return {a: 1, b: 2, c: 3}; }let { a, c } = bar();console.log(a); // 1console.log(c); // 3console.log(b); // undefined</code></pre>
<p>Sometimes, you want to extract the values but assign them to a new variable. This is done using a 'key: variable' pairing on the left of the equals sign.</p><pre><code>function baz() {     return {        x: 'car',        y: 'London',        z: { name: 'John', age: 21}    }; }let { x: vehicle, y: city, z: { name: driver } } = baz();</code></pre><pre><code>console.log(    `I'm going to ${city} with ${driver} in their ${vehicle}.`); // I'm going to London with John in their car. </code></pre>
<p>Another thing that object destructuring allows is assigning a value to multiple variables.</p><pre><code>let { x: first, x: second } = { x: 4 };console.log( first, second ); // 4, 4</code></pre>
<h3 id="object-literals-and-concise-parameters">Object Literals and Concise Parameters</h3>
<p>When you are creating an object literal from variables, ES6 allows you to omit the key if it is the same as the variable name.</p><pre><code>let a = 4, b = 7;let c = { a: a, b: b };let concise = { a, b };console.log(c, concise) // {a: 4, b: 7}, {a: 4, b: 7}</code></pre>
<p>This can also be used in combination with destructuring to make your code much simpler and cleaner.</p><pre><code>function foo() {    return {        name: 'Anna',         age: 56,       job: { company: 'Tesco', title: 'Manager' }    };} </code></pre><pre><code>// pre ES6let a = foo(), name = a.name, age = a.age, company = a.job.company;</code></pre><pre><code>// ES6 destructuring and concise parameters let { name, age, job: {company}} = foo();</code></pre>
<p>It can also be used to destructure objects passed into functions. Method 1 and 2 are how you would have done it before ES6, and method 3 uses destructuring and concise parameters.</p><pre><code>let person = {    name: 'Anna',     age: 56,    job: { company: 'Tesco', title: 'Manager' }};</code></pre><pre><code>// method 1function old1( person) {    var yearOfBirth = 2018 - person.age;    console.log( `${ person.name } works at ${ person.job.company } and was born in ${ yearOfBirth }.`);}</code></pre><pre><code>// method 2function old1( person) {    var age = person.age,        yearOfBirth = 2018 - age,         name = person.name,        company = person.job.company;    console.log( `${ name } works at ${ company } and was born in ${ yearOfBirth }.`);} </code></pre><pre><code>// method 3function es6({ age, name, job: {company}}) {    var yearOfBirth = 2018 - age;    console.log( `${ name } works at ${ company } and was born in ${ yearOfBirth }.`);} </code></pre>
<p>Using ES6, we can extract the <code>age</code>, <code>name</code> and <code>company</code> without extra variable declaration.</p>
<h3 id="dynamic-property-names">Dynamic Property Names</h3>
<p>ES6 adds the ability to create or add properties with dynamically assigned keys.</p><pre><code>let  city= 'sheffield_';let a = {    [ city + 'population' ]: 350000};a[ city + 'county' ] = 'South Yorkshire';console.log(a); // {sheffield_population: 350000, sheffield_county: 'South Yorkshire' }</code></pre>
<h3 id="arrow-functions">Arrow Functions</h3>
<p>Arrow functions have two main aspects: their structure and their <code>this</code> binding.</p>
<p>They can have a much simpler structure than traditional functions because they don't need the <code>function</code> key word, and they automatically return whatever is after the arrow.</p><pre><code>var foo = function( a, b ) {    return a * b;} </code></pre><pre><code>let bar = ( a, b ) =&gt; a * b;</code></pre>
<p>If the function requires more than a simple calculation, curly braces can be used and the function returns whatever is returned from the block scope.</p><pre><code>let baz = ( c, d ) =&gt; {    let length = c.length + d.toString().length;    let e = c.join(', ');    return `${e} and there is a total length of  ${length}`;}</code></pre>
<p>One of the most useful places for arrow functions is in array functions like <code>.map</code>, <code>.forEach</code> or <code>.sort</code>.</p><pre><code>let arr = [ 5, 6, 7, 8, 'a' ];let b = arr.map( item =&gt; item + 3 );console.log(b); // [ 8, 9, 10, 11, 'a3' ]</code></pre>
<p>As well as having a shorter syntax, it also fixes the issues that often arose around the <code>this</code> binding behaviour. The fix with pre-ES6 functions was to store the <code>this</code> reference, often as a <code>self</code> variable.</p><pre><code>var clickController = {    doSomething: function (..) {        var self = this;        btn.addEventListener(            'click',             function() { self.doSomething(..) },             false       );   } };</code></pre>
<p>This had to be done because the <code>this</code> binding is dynamic. This means that the <code>this</code> inside the event listener and the <code>this</code> inside the <code>doSomething</code> do not refer to the same thing.</p>
<p>Inside arrow functions, the <code>this</code> binding is lexical, not dynamic. This was the main design feature of the arrow function.</p>
<p>Whilst lexical <code>this</code> binding can be great, sometimes that's not what is wanted.</p><pre><code>let a = {    oneThing: ( a ) =&gt; {         let b = a * 2;         this.otherThing(b);    },     otherThing: ( b ) =&gt; {....} };</code></pre><pre><code>a.oneThing(6);</code></pre>
<p>When we use <code>a.oneThing(6)</code>, the <code>this.otherThing( b )</code> reference fails as <code>this</code> doesn't point to the <code>a</code> object, but to the surrounding scope. If you are rewriting legacy code using ES6 syntax, this is something to watch out for.</p>
<h3 id="for-of-loops"><code>for … of</code> Loops</h3>
<p>ES6 adds a way to iterate over each of the values in an array. This is different from the existing <code>for ... in</code> loop that loops over the key/index.</p><pre><code>let a = ['a', 'b', 'c', 'd' ];// ES6 for ( var val of a ) {    console.log( val );} // "a" "b" "c" "d"// pre-ES6 for ( var idx in a ) {    console.log( idx );}  // 0 1 2 3</code></pre>
<p>Using the new <code>for … of</code> loop saves adding a <code>let val = a[idx]</code> inside each loop.</p>
<p>Arrays, strings, generators and collections are all iterable in standard JavaScript. Plain objects can't normally be iterated over, unless you have defined an iterator for it.</p>
<h3 id="number-literals">Number Literals</h3>
<p>ES5 code handled decimal and hexadecimal number formats well, but octal form wasn't specified. In fact, it was actively disallowed in strict mode.</p>
<p>ES6 has added a new format, adding an <code>o</code> after the initial <code>0</code> to declare the number an octal. They've also added a binary format.</p><pre><code>Number( 29 )  // 29Number( 035 ) // 35 in old octal form. Number( 0o35 ) // 29 in new octal form Number( 0x1d ) // 29 in hexadecimal Number( 0b11101 ) // 29 in binary form</code></pre>
<h3 id="and-much-more-">And Much More…</h3>
<p>There is much, much more that ES6 offers us to make our code cleaner, shorter, easier to read and more robust. I aim to write a continuation of this article covering the less well known bits of ES6.</p>
<p>If you can’t wait that long, have a read of Kyle Simpson’s <a href="https://github.com/getify/You-Dont-Know-JS/blob/master/es6%20%26%20beyond/ch2.md" rel="noopener">You Don’t Know JS book on ES6</a>, or check out this <a href="http://es6-features.org/#Constants" rel="noopener">brilliant little website</a>!</p>
<p>Do you want to become a developer and get your first software job? Download the <a href="https://mailchi.mp/4e8890d8138a/completecoding" rel="noopener">7 Steps to Becoming a Developer and Getting Your First Job</a>.</p>
<blockquote>NEXT -&amp;g<a href="https://medium.com/@samwsoftware/how-to-secure-the-job-of-your-dreams-by-smashing-your-interview-61f38b7cdd0e" rel="noopener">t; How to Secure Your Dream Job. Master the Interview Proc</a>ess</blockquote>
<p><em>If you liked this and found it helpful, show your support by clapping away and subscribe to get more articles like this one!</em></p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
