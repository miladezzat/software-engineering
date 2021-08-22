---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c9c8f740569d1a4ca32e4.jpg"
tags: [JSON]
description: The JSON.stringify() method converts a JSON-safe JavaScript v
author: "Milad E. Fahmy"
title: "JSON Object Examples: Stringify and Parse Methods Explained"
created: "2021-08-15T19:30:40+02:00"
modified: "2021-08-15T19:30:40+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-json tag-javascript tag-toothbrush ">
<header class="post-full-header">
<h1 class="post-full-title">JSON Object Examples: Stringify and Parse Methods Explained</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c9c8f740569d1a4ca32e4.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9c8f740569d1a4ca32e4.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9c8f740569d1a4ca32e4.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9c8f740569d1a4ca32e4.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c9c8f740569d1a4ca32e4.jpg" alt="JSON Object Examples: Stringify and Parse Methods Explained">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<h2 id="json-stringify"><strong>JSON Stringify</strong></h2>
<p>The <code>JSON.stringify()</code> method converts a <em>JSON-safe</em> JavaScript value to a JSON compliant string.</p>
<p>What are JSON-safe values one may ask! Let’s make a list of all JSON-unsafe values and anything that isn’t on the list can be considered JSON-safe.</p>
<h4 id="json-unsafe-values-"><strong>JSON-unsafe values:</strong></h4>
<ul>
<li><code>undefined</code></li>
<li><code>function(){}</code></li>
<li>(ES6+) <code>Symbol</code></li>
<li>An object with circular reference(s) in it</li>
</ul>
<h4 id="syntax"><strong>Syntax</strong></h4><pre><code class="language-javascript">  JSON.stringify( value [, replacer [, space]])</code></pre>
<p>In its simplest and most used form:</p><pre><code class="language-javascript">  JSON.stringify( value )</code></pre>
<h4 id="parameters"><strong>Parameters</strong></h4>
<p><code>value</code> : The JavaScript value to be ‘stringified’.</p>
<p><code>replacer</code> : (Optional) A function or an array which serves as a filter for properties of the value object to be included in the JSON string.</p>
<p><code>space</code> : (Optional) A numeric or string value to provide indentation to the JSON string. If a numeric value is provided, that many spaces (upto 10) act as indentaion at each level. If a string value is provided, that string (upto first 10 chracters) acts as indentation at each level.</p>
<h4 id="return-type"><strong>Return type</strong></h4>
<p>The return type of the method is: <code>string</code>.</p>
<h2 id="description"><strong>Description</strong></h2>
<p>The JSON-safe values are converted to their corresponding JSON string form. The JSON-unsafe values on the other hand return :</p>
<ul>
<li><code>undefined</code> if they are passed as values to the method</li>
<li><code>null</code> if they are passed as an array element</li>
<li>nothing if passed as properties on an object</li>
<li>throws an error if its an object with circular references(s) on it.</li>
</ul><pre><code class="language-javascript">  //JSON-safe values
JSON.stringify({});                  // '{}'
JSON.stringify(true);                // 'true'
JSON.stringify('foo');               // '"foo"'
JSON.stringify([1, 'false', false]); // '[1,"false",false]'
JSON.stringify({ x: 5 });            // '{"x":5}'
JSON.stringify(new Date(2006, 0, 2, 15, 4, 5))  // '"2006-01-02T15:04:05.000Z"'
//JSON-unsafe values passed as values to the method
JSON.stringify( undefined );					// undefined
JSON.stringify( function(){} );					// undefined
//JSON-unsafe values passed as array elements
JSON.stringify({ x: [10, undefined, function(){}, Symbol('')] });  // '{"x":[10,null,null,null]}'
//JSON-unsafe values passed as properties on a object
JSON.stringify({ x: undefined, y: Object, z: Symbol('') });  // '{}'
//JSON-unsafe object with circular reference on it
var o = { },
a = {
b: 42,
c: o,
d: function(){}
};
// create a circular reference inside `a`
o.e = a;
// would throw an error on the circular reference
// JSON.stringify( a );</code></pre>
<p><code>JSON.stringify(...)</code> behaves differently if an object passed to it has a <code>toJSON()</code> method defined on it. The return value from the <code>toJSON()</code> method will be serialized instead of the object itself.</p>
<p>This comes in exceptionally handy when an object contains any illegal JSON value.</p><pre><code class="language-javascript">   //JSON-unsafe values passed as properties on a object
var obj = { x: undefined, y: Object, z: Symbol('') };
//JSON.stringify(obj);  logs '{}'
obj.toJSON = function(){
return {
x:"undefined",
y: "Function",
z:"Symbol"
}
}
JSON.stringify(obj);  //"{"x":"undefined","y":"Function","z":"Symbol"}"
//JSON-unsafe object with circular reference on it
var o = { },
a = {
b: 42,
c: o,
d: function(){}
};
// create a circular reference inside `a`
o.e = a;
// would throw an error on the circular reference
// JSON.stringify( a );
// define a custom JSON value serialization
a.toJSON = function() {
// only include the `b` property for serialization
return { b: this.b };
};
JSON.stringify( a ); // "{"b":42}"</code></pre>
<h4 id="the-replacer"><strong>The <code>replacer</code></strong></h4>
<p>The <code>replacer</code>, as mentioned earlier, is a filter which indicates which properties are to be included in the JSON string. It can either be an array or a function. When an array, the replacer contains the string representations of only those properties which are to be included in the JSON string.</p><pre><code class="language-javascript">  var foo = {foundation: 'Mozilla', model: 'box', week: 45, transport: 'car', month: 7};
JSON.stringify(foo, ['week', 'month']);    // '{"week":45,"month":7}', only keep "week" and "month" properties</code></pre>
<p>If <code>replacer</code> is a function, it will be called once for the object itself, and then once for each property in the object, and each time is passed two arguments, <em>key</em> and <em>value</em>. To skip a <em>key</em> in the serialization, <code>undefined</code> should be returned. Otherwise, the <em>value</em> provided should be returned. If any of these <em>values</em> are objects themselves, the <code>replacer</code> function serializes them recursively as well.</p><pre><code class="language-javascript">  function replacer(key, value) {
// Filtering out properties
if (typeof value === 'string') {
return undefined;
}
return value;
}
var foo = {foundation: 'Mozilla', model: 'box', week: 45, transport: 'car', month: 7};
JSON.stringify(foo, replacer);  // '{"week":45,"month":7}'</code></pre>
<p>If an array is passed to <code>JSON.stringify()</code> and <code>replacer</code> returns <code>undefined</code> for any of its elements, the element’s value is replaced with <code>null</code>. <code>replacer</code> functions cannot remove values from an array.</p><pre><code class="language-javascript">  function replacer(key, value) {
// Filtering out properties
if (typeof value === 'string') {
return undefined;
}
return value;
}
var foo = ['Mozilla', 'box', 45, 'car', 7];
JSON.stringify(foo, replacer);  // "[null,null,45,null,7]"</code></pre>
<h4 id="the-space"><strong>The <code>space</code></strong></h4>
<p>The <code>space</code> parameter used for indentation makes the result of <code>JSON.stringify()</code> prettier.</p><pre><code class="language-javascript">  var a = {
b: 42,
c: "42",
d: [1,2,3]
};
JSON.stringify( a, null, 3 );
// "{
//    "b": 42,
//    "c": "42",
//    "d": [
//       1,
//       2,
//       3
//    ]
// }"
JSON.stringify( a, null, "-----" );
// "{
// -----"b": 42,
// -----"c": "42",
// -----"d": [
// ----------1,
// ----------2,
// ----------3
// -----]
// }"</code></pre>
<h2 id="json-parse"><strong>JSON Parse</strong></h2>
<p>The <code>JSON.parse()</code> method parses a string and construct a new object described by a string.</p>
<h3 id="syntax-">Syntax:</h3><pre><code class="language-javascript">    JSON.parse(text [, reviver])</code></pre>
<h3 id="parameters-">Parameters:</h3>
<p><code>text</code> The string to parse as JSON</p>
<p><code>reviver</code>(Optional) The function will receive <code>key</code> and <code>value</code> as arguments. This function can be used to transform the result value.</p>
<p>Here is an example on how to use <code>JSON.parse()</code>:</p><pre><code class="language-javascript">var data = '{"foo": "bar"}';
console.log(data.foo); // This will print `undefined` since `data` is of type string and has no property named as `foo`
// You can use JSON.parse to create a new JSON object from the given string
var convertedData = JSON.parse(data);
console.log(convertedData.foo); // This will print `bar</code></pre>
<p><a href="https://repl.it/MwgK/0" rel="nofollow">Repl.it Demo</a></p>
<p>Here is an example with <code>reviver</code>:</p><pre><code class="language-javascript">var data = '{"value": 5}';
var result = JSON.parse(data, function(key, value) {
if (typeof value === 'number') {
return value * 10;
}
return value;
});
// Original Data
console.log("Original Data:", data); // This will print Original Data: {"value": 5}
// Result after parsing
console.log("Parsed Result: ", result); // This will print Parsed Result:  { value: 50 }</code></pre>
<p>In the above example, all numeric values are being multiplied by <code>10</code> - <a href="https://repl.it/Mwfp/0" rel="nofollow">Repl.it Demo</a></p>
<h2 id="more-info-on-json-">More info on JSON:</h2>
<ul>
<li><a href="https://guide.freecodecamp.org/javascript/standard-objects/json/json-syntax">JSON syntax</a></li>
<li><a href="/news/how-to-turn-your-website-into-a-mobile-app-with-7-lines-of-json-631c9c9895f5/">Turn your website into a mobile app with 7 lines of JSON</a></li>
</ul>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
