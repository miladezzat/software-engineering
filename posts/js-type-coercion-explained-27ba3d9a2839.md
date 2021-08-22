---
card: "https://cdn-media-1.freecodecamp.org/images/1*7awmfn1lq2McPz8ggapndw.png"
tags: [JavaScript]
description: "by Alexey Samoshkin"
author: "Milad E. Fahmy"
title: "JavaScript type coercion explained"
created: "2021-08-16T11:47:41+02:00"
modified: "2021-08-16T11:47:41+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-technology tag-programming tag-development tag-tech ">
<header class="post-full-header">
<h1 class="post-full-title">JavaScript type coercion explained</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*7awmfn1lq2McPz8ggapndw.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*7awmfn1lq2McPz8ggapndw.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*7awmfn1lq2McPz8ggapndw.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*7awmfn1lq2McPz8ggapndw.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*7awmfn1lq2McPz8ggapndw.png" alt="JavaScript type coercion explained">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
12 / "6"
"number" + 15 + 3
15 + 3 + "number"
[1] &gt; null
"foo" + + "bar"
'true' == true
false == 'false'
null == ''
!!"false" == !!"true"
[‘x’] == ‘x’
[] + null + 1
[1,2,3] == [1,2,3]
{}+[]+{}+[1]
!+[]+[]+![]
new Date(0) - 0
new Date(0) + 0</code></pre><p>Yes, this list is full of pretty silly things you can do as a developer. In 90% of use cases it’s better to avoid implicit type coercion. Consider this list as a learning exercise to test your knowledge on how type coercion works. If you’re bored, you can find more examples on <a href="https://wtfjs.com/" rel="noopener">wtfjs.com</a>.</p><p>By the way, sometimes you might face such questions on the interview for a JavaScript developer position. So, keep reading ?</p><h3 id="implicit-vs-explicit-coercion">Implicit vs. explicit coercion</h3><p>Type coercion can be explicit and implicit.</p><p>When a developer expresses the intention to convert between types by writing the appropriate code, like <code>Number(value)</code>, it’s called <strong>explicit type coercion</strong> (or type casting).</p><p>Since JavaScript is a weakly-typed language, values can also be converted between different types automatically, and it is called <strong>implicit type coercion</strong>. It usually happens when you apply operators to values of different types, like<br><code>1 == null</code>, <code>2/’5'</code>, <code>null + new Date()</code>, or it can be triggered by the surrounding context, like with <code>if (value) {…}</code>, where <code>value</code> is coerced to boolean.</p><p>One operator that does not trigger implicit type coercion is <code>===</code>, which is called the strict equality operator. The loose equality operator <code>==</code> on the other hand does both comparison and type coercion if needed.</p><p>Implicit type coercion is a double edge sword: it’s a great source of frustration and defects, but also a useful mechanism that allows us to write less code without losing the readability.</p><h3 id="three-types-of-conversion">Three types of conversion</h3><p>The first rule to know is there are only three types of conversion in JavaScript:</p><ul><li>to string</li><li>to boolean</li><li>to number</li></ul><p>Secondly, conversion logic for primitives and objects works differently, but both primitives and objects can only be converted in those three ways.</p><p>Let’s start with primitives first.</p><h3 id="string-conversion">String conversion</h3><p>To explicitly convert values to a string apply the <code>String()</code> function. Implicit coercion is triggered by the binary <code>+</code> operator, when any operand is a string:</p><pre><code>String(123) // explicit
123 + ''    // implicit</code></pre><p>All primitive values are converted to strings naturally as you might expect:</p><pre><code>String(123)             // '123'
String(-12.3)           // '-12.3'
String(null)            // 'null'
String(undefined)       // 'undefined'
String(true)            // 'true'
String(false)           // 'false'</code></pre><p>Symbol conversion is a bit tricky, because it can only be converted explicitly, but not implicitly. <a href="https://leanpub.com/understandinges6/read/#leanpub-auto-symbol-coercion" rel="noopener">Read more</a> on <code>Symbol</code> coercion rules.</p><pre><code>String(Symbol('my symbol'))   // 'Symbol(my symbol)'
'' + Symbol('my symbol')// TypeError is thrown</code></pre><h3 id="boolean-conversion">Boolean conversion</h3><p>To explicitly convert a value to a boolean apply the <code>Boolean()</code> function.<br>Implicit conversion happens in logical context, or is triggered by logical operators ( <code>||</code> <code>&amp;&amp;</code> <code>!</code>) .</p><pre><code>Boolean(2)          // explicit
if (2) { ... }// implicit due to logical context
!!2           // implicit due to logical operator
2 || 'hello'  // implicit due to logical operator</code></pre><p><strong>Note</strong>: Logical operators such as <code>||</code> and <code>&amp;&amp;</code> do boolean conversions internally, but <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Logical_operators" rel="noopener">actually return the value of original operands</a>, even if they are not boolean.</p><pre><code>// returns number 123, instead of returning true
// 'hello' and 123 are still coerced to boolean internally to calculate the expression
let x = 'hello' &amp;&amp; 123;   // x === 123</code></pre><p>As soon as there are only 2 possible results of boolean conversion: <code>true</code> or <code>false</code>, it’s just easier to remember the list of falsy values.</p><pre><code>Boolean('')     // false
Boolean(0)      // false
Boolean(-0)     // false
Boolean(NaN)    // false
Boolean(null)   // false
Boolean(undefined)    // false
Boolean(false)  // false</code></pre><p>Any value that is not in the list is converted to <code>true</code>, including object, function, <code>Array</code>, <code>Date</code>, user-defined type, and so on. Symbols are truthy values. Empty object and arrays are truthy values as well:</p><pre><code>Boolean({})             // true
Boolean([])       // true
Boolean(Symbol()) // true
!!Symbol()        // true
Boolean(function() {})  // true</code></pre><h3 id="numeric-conversion">Numeric conversion</h3><p>For an explicit conversion just apply the <code>Number()</code> function, same as you did with <code>Boolean()</code> and <code>String()</code> .</p><p>Implicit conversion is tricky, because it’s triggered in more cases:</p><ul><li>comparison operators (<code>&gt;</code>, <code>&lt;</code>, <code>&lt;=</code>,<code>&gt;=</code>)</li><li>bitwise operators ( <code>|</code> <code>&amp;</code> <code>^</code> <code>~</code>)</li><li>arithmetic operators (<code>-</code> <code>+</code> <code>*</code> <code>/</code> <code>%</code> ). Note, that binary<code>+</code> does not trigger numeric conversion, when any operand is a string.</li><li>unary <code>+</code> operator</li><li>loose equality operator <code>==</code> (incl. <code>!=</code>). <br>Note that <code>==</code> does not trigger numeric conversion when both operands are strings.</li></ul><pre><code>Number('123')   // explicit
+'123'    // implicit
123 != '456'    // implicit
4 &gt; '5'   // implicit
5/null    // implicit
true | 0  // implicit</code></pre><p>Here is how primitive values are converted to numbers:</p><pre><code>Number(null)                   // 0
Number(undefined)        // NaN
Number(true)             // 1
Number(false)            // 0
Number(" 12 ")           // 12
Number("-12.34")         // -12.34
Number("\n")             // 0
Number(" 12s ")          // NaN
Number(123)              // 123</code></pre><p>When converting a string to a number, the engine first trims leading and trailing whitespace, <code>\n</code>, <code>\t</code> characters, returning <code>NaN</code> if the trimmed string does not represent a valid number. If string is empty, it returns <code>0</code>.</p><p><code>null</code> and <code>undefined</code> are handled differently: <code>null</code> becomes <code>0</code>, whereas <code>undefined</code> becomes <code>NaN</code>.</p><p>Symbols cannot be converted to a number neither explicitly nor implicitly. Moreover, <code>TypeError</code> is thrown, instead of silently converting to <code>NaN</code>, like it happens for <code>undefined</code>. See more on Symbol conversion rules on <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol#Symbol_type_conversions" rel="noopener">MDN</a>.</p><pre><code>Number(Symbol('my symbol'))    // TypeError is thrown
+Symbol('123')           // TypeError is thrown</code></pre><p>There are two <strong>special rules</strong> to remember:</p><ol><li>When applying <code>==</code> to <code>null</code> or <code>undefined</code>, numeric conversion does not happen. <code>null</code> equals only to <code>null</code> or <code>undefined</code>, and does not equal to anything else.</li></ol><pre><code>null == 0               // false, null is not converted to 0
null == null      // true
undefined == undefined  // true
null == undefined // true</code></pre><p>2. NaN does not equal to anything even itself:</p><pre><code>if (value !== value) { console.log("we're dealing with NaN here") }</code></pre><h3 id="type-coercion-for-objects">Type coercion for objects</h3><p>So far, we’ve looked at type coercion for primitive values. That’s not very exciting.</p><p>When it comes to objects and engine encounters expression like <code>[1] + [2,3]</code>, first it needs to convert an object to a primitive value, which is then converted to the final type. And still there are only three types of conversion: numeric, string and boolean.</p><p>The simplest case is boolean conversion: any non-primitive value is always <br>coerced to <code>true</code>, no matter if an object or an array is empty or not.</p><p>Objects are converted to primitives via the internal <code>[[ToPrimitive]]</code> method, which is responsible for both numeric and string conversion.</p><p>Here is a pseudo implementation of <code>[[ToPrimitive]]</code> method:</p><p><code>[[ToPrimitive]]</code> is passed with an input value and preferred type of conversion: <code>Number</code> or <code>String</code>. <code>preferredType</code> is optional.</p><p>Both numeric and string conversion make use of two methods of the input object: <code>valueOf</code> and <code>toString</code> . Both methods are declared on <code>Object.prototype</code> and thus available for any derived types, such as <code>Date</code>, <code>Array</code>, etc.</p><p>In general the algorithm is as follows:</p><ol><li>If input is already a primitive, do nothing and return it.</li></ol><p>2. Call <code>input.toString()</code>, if the result is primitive, return it.</p><p>3. Call <code>input.valueOf()</code>, if the result is primitive, return it.</p><p>4. If neither <code>input.toString()</code> nor <code>input.valueOf()</code> yields primitive, throw <code>TypeError</code>.</p><p>Numeric conversion first calls <code>valueOf</code> (3) with a fallback to <code>toString</code> (2). String conversion does the opposite: <code>toString</code> (2) followed by <code>valueOf</code> (3).</p><p>Most built-in types do not have <code>valueOf</code>, or have <code>valueOf</code> returning <code>this</code> object itself, so it’s ignored because it’s not a primitive. That’s why numeric and string conversion might work the same — both end up calling <code>toString()</code>.</p><p>Different operators can trigger either numeric or string conversion with a help of <code>preferredType</code> parameter. But there are two exceptions: loose equality <code>==</code> and binary <code>+</code> operators trigger default conversion modes (<code>preferredType</code> is not specified, or equals to <code>default</code>). In this case, most built-in types assume numeric conversion as a default, except <code>Date</code> that does string conversion.</p><p>Here is an example of <code>Date</code> conversion behavior:</p><p>You can override the default <code>toString()</code> and <code>valueOf()</code> methods to hook into object-to-primitive conversion logic.</p><p>Notice how <code>obj + ‘’</code> returns <code>‘101’</code> as a string. <code>+</code> operator triggers a default conversion mode, and as said before <code>Object</code> assumes numeric conversion as a default, thus using the <code>valueOf()</code> method first instead of <code>toString()</code>.</p><h3 id="es6-symbol-toprimitive-method">ES6 Symbol.toPrimitive method</h3><p>In ES5 you can hook into object-to-primitive conversion logic by overriding <code>toString</code> and <code>valueOf</code> methods.</p><p>In ES6 you can go farther and completely replace internal<code>[[ToPrimitive]]</code> routine by implementing the<code>[Symbol.toPrimtive]</code> method on an object.</p><h3 id="examples">Examples</h3><p>Armed with the theory, now let’s get back to our examples:</p><pre><code>true + false             // 1
12 / "6"           // 2
"number" + 15 + 3  // 'number153'
15 + 3 + "number"  // '18number'
[1] &gt; null         // true
"foo" + + "bar"    // 'fooNaN'
'true' == true     // false
false == 'false'   // false
null == ''         // false
!!"false" == !!"true"    // true
['x'] == 'x'       // true
[] + null + 1      // 'null1'
[1,2,3] == [1,2,3] // false
{}+[]+{}+[1]       // '0[object Object]1'
!+[]+[]+![]        // 'truefalse'
new Date(0) - 0    // 0
new Date(0) + 0    // 'Thu Jan 01 1970 02:00:00(EET)0'</code></pre><p>Below you can find explanation for each the expression.</p><p>Binary <code>+</code> operator triggers numeric conversion for <code>true</code> and <code>false</code></p><pre><code>true + false
==&gt; 1 + 0
==&gt; 1</code></pre><p>Arithmetic division operator <code>/</code> triggers numeric conversion for string <code>'6'</code> :</p><pre><code>12 / '6'
==&gt; 12 / 6
==&gt;&gt; 2</code></pre><p>Operator <code>+</code> has left-to-right associativity, so expression <code>"number" + 15</code> runs first. Since one operand is a string, <code>+</code> operator triggers string conversion for the number <code>15</code>. On the second step expression <code>"number15" + 3</code> is evaluated similarly.</p><pre><code>“number” + 15 + 3
==&gt; "number15" + 3
==&gt; "number153"</code></pre><p>Expression <code>15 + 3</code> is evaluated first. No need for coercion at all, since both operands are numbers. On the second step, expression <code>18 + 'number'</code> is evaluated, and since one operand is a string, it triggers a string conversion.</p><pre><code>15 + 3 + "number"
==&gt; 18 + "number"
==&gt; "18number"</code></pre><p>Comparison operator <code>&amp;</code>gt; triggers numeric conversion f<code>or </code>[1] a<code>nd n</code>ull .</p><pre><code>[1] &gt; null
==&gt; '1' &gt; 0
==&gt; 1 &gt; 0
==&gt; true</code></pre><p>Unary <code>+</code> operator has higher precedence over binary <code>+</code> operator. So <code>+'bar'</code> expression evaluates first. Unary plus triggers numeric conversion for string <code>'bar'</code>. Since the string does not represent a valid number, the result is <code>NaN</code>. On the second step, expression <code>'foo' + NaN</code> is evaluated.</p><pre><code>"foo" + + "bar"
==&gt; "foo" + (+"bar")
==&gt; "foo" + NaN
==&gt; "fooNaN"</code></pre><p><code>==</code> operator triggers numeric conversion, string <code>'true'</code> is converted to NaN, boolean <code>true</code> is converted to 1.</p><pre><code>'true' == true
==&gt; NaN == 1
==&gt; false
false == 'false'
==&gt; 0 == NaN
==&gt; false</code></pre><p><code>==</code> usually triggers numeric conversion, but it’s not the case with <code>null</code> . <code>null</code> equals to <code>null</code> or <code>undefined</code> only, and does not equal to anything else.</p><pre><code>null == ''
==&gt; false</code></pre><p><code>!!</code> operator converts both <code>'true'</code> and <code>'false'</code> strings to boolean <code>true</code>, since they are non-empty strings. Then, <code>==</code> just checks equality of two boolean <code>true's</code> without any coercion.</p><pre><code>!!"false" == !!"true"
==&gt; true == true
==&gt; true</code></pre><p><code>==</code> operator triggers a numeric conversion for an array. Array’s <code>valueOf()</code> method returns the array itself, and is ignored because it’s not a primitive. Array’s <code>toString()</code> converts <code>['x']</code> to just <code>'x'</code> string.</p><pre><code>['x'] == 'x'
==&gt; 'x' == 'x'
==&gt;  true</code></pre><p><code>+</code> operator triggers numeric conversion for <code>[]</code>. Array’s <code>valueOf()</code> method is ignored, because it returns array itself, which is non-primitive. Array’s <code>toString</code> returns an empty string.</p><p>On the the second step expression <code>'' + null + 1</code> is evaluated.</p><pre><code>[] + null + 1
==&gt;  '' + null + 1
==&gt;  'null' + 1
==&gt; 'null1'</code></pre><p>Logical <code>||</code> and <code>&amp;&amp;</code> operators coerce operands to boolean, but return original operands (not booleans). <code>0</code> is falsy, whereas <code>'0'</code> is truthy, because it’s a non-empty string. <code>{}</code> empty object is truthy as well.</p><pre><code>0 || "0" &amp;&amp; {}
==&gt;  (0 || "0") &amp;&amp; {}
==&gt; (false || true) &amp;&amp; true  // internally
==&gt; "0" &amp;&amp; {}
==&gt; true &amp;&amp; true       // internally
==&gt; {}</code></pre><p>No coercion is needed because both operands have same type. Since <code>==</code> checks for object identity (and not for object equality) and the two arrays are two different instances, the result is <code>false</code>.</p><pre><code>[1,2,3] == [1,2,3]
==&gt;  false</code></pre><p>All operands are non-primitive values, so <code>+</code> starts with the leftmost triggering numeric conversion. Both <code>Object’s</code> and <code>Array’s</code> <code>valueOf</code> method returns the object itself, so it’s ignored. <code>toString()</code> is used as a fallback. The trick here is that first <code>{}</code> is not considered as an object literal, but rather as a block declaration statement, so it’s ignored. Evaluation starts with next <code>+[]</code> expression, which is converted to an empty string via <code>toString()</code> method and then to <code>0</code> .</p><pre><code>{}+[]+{}+[1]
==&gt; +[]+{}+[1]
==&gt; 0 + {} + [1]
==&gt; 0 + '[object Object]' + [1]
==&gt; '0[object Object]' + [1]
==&gt; '0[object Object]' + '1'
==&gt; '0[object Object]1'</code></pre><p>This one is better explained step by step according to operator precedence.</p><pre><code>!+[]+[]+![]
==&gt; (!+[]) + [] + (![])
==&gt; !0 + [] + false
==&gt; true + [] + false
==&gt; true + '' + false
==&gt; 'truefalse'</code></pre><p><code>-</code> operator triggers numeric conversion for <code>Date</code>. <code>Date.valueOf()</code> returns number of milliseconds since Unix epoch.</p><pre><code>new Date(0) - 0
==&gt; 0 - 0
==&gt; 0</code></pre><p><code>+</code> operator triggers default conversion. Date assumes string conversion as a default one, so <code>toString()</code> method is used, rather than <code>valueOf()</code>.</p><pre><code>new Date(0) + 0
==&gt; 'Thu Jan 01 1970 02:00:00 GMT+0200 (EET)' + 0
==&gt; 'Thu Jan 01 1970 02:00:00 GMT+0200 (EET)0'</code></pre><h3 id="resources">Resources</h3><p>I really want to recommend the excellent book “<a href="https://leanpub.com/understandinges6" rel="noopener">Understanding ES6</a>” written by <a href="undefined" rel="noopener">Nicholas C. Zakas</a>. It’s a great ES6 learning resource, not too high-level, and does not dig into internals too much.</p><p>And here is a good book on ES5 only - <a href="http://speakingjs.com/" rel="noopener">SpeakingJS</a> written by <a href="undefined" rel="noopener">Axel Rauschmayer</a>.</p><p>(<strong>Russian</strong>) Современный учебник Javascript — <a href="https://learn.javascript.ru/" rel="noopener">https://learn.javascript.ru/</a>. Especially <a href="https://learn.javascript.ru/object-conversion" rel="noopener">these</a> <a href="https://learn.javascript.ru/types-conversion" rel="noopener">two</a> pages on type coercion.</p><p>JavaScript Comparison Table — <a href="https://dorey.github.io/JavaScript-Equality-Table/" rel="noopener">https://dorey.github.io/JavaScript-Equality-Table/</a></p><p>wtfjs — a little code blog about that language we love despite giving us so much to hate — <a href="https://wtfjs.com/" rel="noopener">https://wtfjs.com/</a></p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
