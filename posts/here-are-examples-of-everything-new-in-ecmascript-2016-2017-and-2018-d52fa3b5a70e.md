---
card: "https://cdn-media-1.freecodecamp.org/images/1*Z-9unq6Am3vekNOa5fD1xg.png"
tags: [JavaScript]
description: "by rajaraodv"
author: "Milad E. Fahmy"
title: "Here are examples of everything new in ECMAScript 2016, 2017, and 2018"
created: "2021-08-16T10:14:55+02:00"
modified: "2021-08-16T10:14:55+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-tech tag-programming tag-startup tag-web-development ">
<header class="post-full-header">
<h1 class="post-full-title">Here are examples of everything new in ECMAScript 2016, 2017, and 2018</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*Z-9unq6Am3vekNOa5fD1xg.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*Z-9unq6Am3vekNOa5fD1xg.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*Z-9unq6Am3vekNOa5fD1xg.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*Z-9unq6Am3vekNOa5fD1xg.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*Z-9unq6Am3vekNOa5fD1xg.png" alt="Here are examples of everything new in ECMAScript 2016, 2017, and 2018">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
'5'.padStart(10) // '   5'
'5'.padStart(10, '=*') //'=*=*=*=*=5'
'5'.padEnd(10) // '5   '
'?BMW': '10',
'?Tesla': '5',
'?Lamborghini': '0'
}
Object.entries(cars).map(([name, count]) =&gt; {
//padEnd appends ' -' until the name becomes 20 characters
//padStart prepends '0' until the count becomes 3 characters.
console.log(`${name.padEnd(20, ' -')} Count: ${count.padStart(3, '0')}`)
});
//Prints..
// ?BMW - - - - - - -  Count: 010
// ?Tesla - - - - - -  Count: 005
// ?Lamborghini - - -  Count: 000</code></pre><h4 id="3-3-padstart-and-padend-on-emojis-and-other-double-byte-chars">3.3 ⚠️ padStart and padEnd on Emojis and other double-byte chars</h4><p>Emojis and other double-byte chars are represented using multiple bytes of unicode. So padStart and padEnd might not work as expected!⚠️</p><p>For example: Let’s say we are trying to pad the string <code>heart</code> to reach <code>10</code> characters with the ❤️ emoji. The result will look like below:</p><pre><code class="language-js">//Notice that instead of 5 hearts, there are only 2 hearts and 1 heart that looks odd!
name: 'BMW',
price: 1000000,
set discount(x) {
this.d = x;
},
get discount() {
return this.d;
},
};
//Print details of Car object's 'discount' property
console.log(Object.getOwnPropertyDescriptor(Car, 'discount'));
//prints..
// {
//   get: [Function: get],
//   set: [Function: set],
//   enumerable: true,
//   configurable: true
// }
//Copy Car's properties to ElectricCar using Object.assign
const ElectricCar = Object.assign({}, Car);
//Print details of ElectricCar object's 'discount' property
console.log(Object.getOwnPropertyDescriptor(ElectricCar, 'discount'));
//prints..
// {
//   value: undefined,
//   writable: true,
//   enumerable: true,
//   configurable: true
// }
//⚠️Notice that getters and setters are missing in ElectricCar object for 'discount' property !??
//Copy Car's properties to ElectricCar2 using Object.defineProperties
//and extract Car's properties using Object.getOwnPropertyDescriptors
const ElectricCar2 = Object.defineProperties({}, Object.getOwnPropertyDescriptors(Car));
//Print details of ElectricCar2 object's 'discount' property
console.log(Object.getOwnPropertyDescriptor(ElectricCar2, 'discount'));
//prints..
// { get: [Function: get],  ??????
//   set: [Function: set],  ??????
//   enumerable: true,
//   configurable: true
// }
async function doubleAndAdd(a, b) {
try {
a = await doubleAfter1Sec(a);
b = await doubleAfter1Sec(b);
} catch (e) {
return NaN; //return something
}
return a + b;
}
//?Usage:
doubleAndAdd('one', 2).then(console.log); // NaN
doubleAndAdd(1, 2).then(console.log); // 6
function doubleAfter1Sec(param) {
return new Promise((resolve, reject) =&gt; {
setTimeout(function() {
let val = param * 2;
isNaN(val) ? reject(NaN) : resolve(val);
}, 1000);
});
//as each await expression is a Promise in itself
async function doubleAndAdd(a, b) {
a = await doubleAfter1Sec(a).catch(e =&gt; console.log('"a" is NaN')); // ?
b = await doubleAfter1Sec(b).catch(e =&gt; console.log('"b" is NaN')); // ?
if (!a || !b) {
return NaN;
}
return a + b;
}
//?Usage:
doubleAndAdd('one', 2).then(console.log); // NaN  and logs:  "a" is NaN
doubleAndAdd(1, 2).then(console.log); // 6
function doubleAfter1Sec(param) {
return new Promise((resolve, reject) =&gt; {
setTimeout(function() {
let val = param * 2;
isNaN(val) ? reject(NaN) : resolve(val);
}, 1000);
});
//since async / await returns a promise, we can catch the whole function's error
async function doubleAndAdd(a, b) {
a = await doubleAfter1Sec(a);
b = await doubleAfter1Sec(b);
return a + b;
}
//?Usage:
doubleAndAdd('one', 2)
.then(console.log)
.catch(console.log); // ???&lt;------- use "catch"
function doubleAfter1Sec(param) {
return new Promise((resolve, reject) =&gt; {
setTimeout(function() {
let val = param * 2;
isNaN(val) ? reject(NaN) : resolve(val);
}, 1000);
});
//In this example, greet calls timeGreet() to append Good //Morning/Afternoon/Evening depending on the time of the day.
function greet(hardCodedPartsArray, ...replacementPartsArray) {
console.log(hardCodedPartsArray); //[ 'Hello ', '!' ]
console.log(replacementPartsArray); //[ 'Raja' ]
let str = '';
hardCodedPartsArray.forEach((string, i) =&gt; {
if (i &lt; replacementPartsArray.length) {
str += `${string} ${replacementPartsArray[i] || ''}`;
} else {
str += `${string} ${timeGreet()}`; //&lt;-- append Good morning/afternoon/evening here
}
});
return str;
}
//?Usage:
const firstName = 'Raja';
const greetings = greet`Hello ${firstName}!`; //??&lt;-- Tagged literal
console.log(greetings); //'Hello  Raja! Good Morning!' ?
function timeGreet() {
const hr = new Date().getHours();
return hr &lt; 12
? 'Good Morning!'
: hr &lt; 18 ? 'Good Afternoon!' : 'Good Evening!';
}</code></pre><p>Now that we discussed what “Tagged” functions are, many people want to use this feature in different domains, like in Terminal for commands and HTTP requests for composing URIs, and so on.</p><h4 id="-the-problem-with-tagged-string-literal">⚠️The problem with Tagged String literal</h4><p>The problem is that ES2015 and ES2016 specs doesn’t allow using escape characters like “\u” (unicode), “\x”(hexadecimal) unless they look exactly like `\u00A9` or \u{2F804} or \xA9.</p><p>So if you have a Tagged function that internally uses some other domain’s rules (like Terminal’s rules), that may need to use <strong>\ubla123abla</strong> that doesn’t look like \u0049 or \u{@F804}, then you would get a syntax error.</p><p>In ES2018, the rules are relaxed to allow such seemingly invalid escape characters as long as the Tagged function returns the values in an object with a “cooked” property (where invalid characters are “undefined”), and then a “raw” property (with whatever you want).</p><pre><code class="language-js">function myTagFunc(str) {
return { "cooked": "undefined", "raw": str.raw[0] }
}
var str = myTagFunc `hi \ubla123abla`; //call myTagFunc
str // { cooked: "undefined", raw: "hi \\unicode" }</code></pre><h3 id="3-dotall-flag-for-regular-expression">3. “dotall” flag for Regular expression</h3><p>Currently in RegEx, although the dot(“.”) is supposed to match a single character, it doesn’t match new line characters like <code>\n \r \f etc</code>.</p><p>For example:</p><pre><code class="language-js">//Before
/first.second/.test('first\nsecond'); //false</code></pre><p>This enhancement makes it possible for the dot operator to match any single character. In order to ensure this doesn’t break anything, we need to use <code>\s</code> flag when we create the RegEx for this to work.</p><pre><code class="language-js">//ECMAScript 2018
/^\p{Script=Devanagari}+$/u.test('हिन्दी'); //true
/\p{Emoji}/u.test('❤️'); //true
//The following fails because yellow emojis don't need/have Emoji_Modifier!
/\p{Emoji}\p{Emoji_Modifier}/u.test('✌️'); //false
//The following matches an emoji character\p{Emoji} followed by \p{Emoji_Modifier}
/\p{Emoji}\p{Emoji_Modifier}/u.test('✌?'); //true
//Explaination:
//By default the victory emoji is yellow color.
//If we use a brown, black or other variations of the same emoji, they are considered
//as variations of the original Emoji and are represented using two unicode characters.
//One for the original emoji, followed by another unicode character for the color.
//
//So in the below example, although we only see a single brown victory emoji,
//it actually uses two unicode characters, one for the emoji and another
// for the brown color.
//
//In Unicode database, these colors have Emoji_Modifier property.
//So we need to use both \p{Emoji} and \p{Emoji_Modifier} to properly and
//completely match the brown emoji.
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
