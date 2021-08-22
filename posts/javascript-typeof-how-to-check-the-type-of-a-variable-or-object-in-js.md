---
card: "/images/default.jpg"
tags: [JavaScript]
description: Data types and type checking are fundamental aspects of any p
author: "Milad E. Fahmy"
title: "JavaScript TypeOf – How to Check the Type of a Variable or Object in JS"
created: "2021-08-15T19:28:05+02:00"
modified: "2021-08-15T19:28:05+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-beginner ">
<header class="post-full-header">
<h1 class="post-full-title">JavaScript TypeOf – How to Check the Type of a Variable or Object in JS</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/11/cover.png 300w,
/news/content/images/size/w600/2020/11/cover.png 600w,
/news/content/images/size/w1000/2020/11/cover.png 1000w,
/news/content/images/size/w2000/2020/11/cover.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/11/cover.png" alt="JavaScript TypeOf – How to Check the Type of a Variable or Object in JS">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Data types and type checking are fundamental aspects of any programming language.</p>
<p>Many programming languages like Java have strict type checking. This means that if a variable is defined with a specific type it can contain a value of only that type.</p>
<p>JavaScript, however, is a loosely typed (or dynamically typed) language. This means that a variable can contain a value of any type. JavaScript code can execute like this:</p><pre><code class="language-js">let one = 1;
one = 'one';
one = true;
one = Boolean(true);
one = String('It is possible');
</code></pre>
<p>With this in mind, it is critical to know the type of a variable at any given time.</p>
<p>The type of a variable is determined by the type of the value assigned to it. JavaScript has a special operator called <code>typeof</code> which lets you get the type of any value.</p>
<p>In this article, we will learn how <code>typeof</code> is used, along with a few gotchas to watch out for.</p>
<h1 id="javascript-data-types"><strong>JavaScript Data Types</strong></h1>
<p>Let's take a quick look at JavaScript data types before we dig into the <code>typeof</code> operator.</p>
<p>In JavaScript, there are seven primitive types. A primitive is anything that is not an object. They are:</p>
<ol>
<li>String</li>
<li>Number</li>
<li>BigInt</li>
<li>Symbol</li>
<li>Boolean</li>
<li>undefined</li>
<li>null</li>
</ol>
<p>Everything else is an <code>object</code> – even including <code>array</code> and <code>function</code>. An object is a collection of key-value pairs.</p>
<h1 id="the-javascript-typeof-operator"><strong>The JavaScript typeof Operator</strong></h1>
<p>The <code>typeof</code> operator takes only one operand (a unary operator). It evaluates the type of the operand and returns the result as a string. Here is how you use it when you're evaluating the type of a number, 007.</p><pre><code class="language-js">typeof 007;  // returns 'number'
</code></pre>
<p>There is alternative syntax for the <code>typeof</code> operator where you can use it like a <code>function</code>:</p><pre><code class="language-js">typeof(operand)
</code></pre>
<p>This syntax is useful when you want to evaluate an expression rather than a single value. Here is an example of that:</p><pre><code class="language-js">typeof(typeof 007); // returns 'string'
</code></pre>
<p>In the above example, the expression <code>typeof 007</code> evaluates to the type number and returns the string 'number'. <code>typeof('number')</code> then results in <code>'string'</code>.</p>
<p>Let's look at another example to understand the importance of the parenthesis with the <code>typeof</code> operator.</p><pre><code class="language-js">typeof(999-3223); // returns, "number"</code></pre>
<p>If you omit the parenthesis, it will return, <code>NaN</code>(Not a Number):</p><pre><code class="language-js">typeof 999-3223; // returns, NaN</code></pre>
<p>This is because, first <code>typeof 999</code> will result in a string, "number". The expression <code>"number" - 32223</code> results in NaN as happens when you perform a subtraction operation between a string and number.</p>
<h3 id="javascript-typeof-examples"><strong>JavaScript typeof Examples</strong></h3>
<p>The following code snippet shows the type check result of various values using the <code>typeof</code> operator.</p><pre><code class="language-js">typeof 0;  //'number'
typeof +0;  //'number'
typeof -0;  //'number'
typeof Math.sqrt(2);  //'number'
typeof Infinity;  //'number'
typeof NaN;  //'number', even if it is Not a Number
typeof Number('100');  //'number', After successfully coerced to number
typeof Number('freeCodeCamp');  //'number', despite it can not be coerced to a number
typeof true;  //'boolean'
typeof false;  //'boolean'
typeof Boolean(0);  //'boolean'
typeof 12n;  //'bigint'
typeof '';  //'string'
typeof 'freeCodeCamp';  //'string'
typeof `freeCodeCamp is awesome`;  //'string'
typeof '100';  //'string'
typeof String(100); //'string'
typeof Symbol();  //'symbol'
typeof Symbol('freeCodeCamp');  //'symbol'
typeof {blog: 'freeCodeCamp', author: 'Tapas A'};  //'object';
typeof ['This', 'is', 101]; //'object'
typeof new Date();  //'object'
typeof Array(4);  //'object'
typeof new Boolean(true);  //'object';
typeof new Number(101);  //'object';
typeof new String('freeCodeCamp');  //'object';
typeof new Object;  //'object'
typeof alert;  //'function'
typeof function () {}; //'function'
typeof (() =&gt; {});  //'function' - an arrow function so, parenthesis is required
typeof Math.sqrt;  //'function'
let a;
typeof a;  //'undefined'
typeof b;  //'undefined'
typeof undefined;  //'undefined'
typeof null;  //'object'
</code></pre>
<p>The table below shows the type-check values of <code>typeof</code>:</p>
<table style="box-sizing: inherit; margin: 0.5em 0px 2.5em; padding: 0px; border: 0px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-variant-numeric: inherit; font-variant-east-asian: inherit; font-weight: 400; font-stretch: inherit; line-height: inherit; font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Open Sans&quot;, &quot;Helvetica Neue&quot;, sans-serif; font-size: 1.6rem; vertical-align: top; border-spacing: 0px; border-collapse: collapse; display: inline-block; overflow-x: auto; max-width: 100%; width: auto; white-space: nowrap; background: radial-gradient(at left center, rgba(0, 0, 0, 0.2) 0px, transparent 75%) 0px center / 10px 100% no-repeat scroll, radial-gradient(at right center, rgba(0, 0, 0, 0.2) 0px, transparent 75%) 100% center / 10px 100% scroll rgb(255, 255, 255); color: rgb(10, 10, 35); letter-spacing: normal; orphans: 2; text-align: start; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">
<thead style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 16px; vertical-align: baseline;">
<tr style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 16px; vertical-align: baseline;">
<th style="box-sizing: inherit; margin: 0px; padding: 6px 12px; border: 1px solid var(--gray10); font-style: inherit; font-variant: inherit; font-weight: 700; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 1.2rem; vertical-align: baseline; color: var(--gray85); letter-spacing: 0.2px; text-align: left; text-transform: uppercase; background-color: var(--gray10);"><strong style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: bold; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 12px; vertical-align: baseline; color: var(--gray85);">TYPE</strong></th>
<th style="box-sizing: inherit; margin: 0px; padding: 6px 12px; border: 1px solid var(--gray10); font-style: inherit; font-variant: inherit; font-weight: 700; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 1.2rem; vertical-align: baseline; color: var(--gray85); letter-spacing: 0.2px; text-align: center; text-transform: uppercase; background-color: var(--gray10);"><strong style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: bold; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 12px; vertical-align: baseline; color: var(--gray85);">RETURN VALUE OF TYPEOF</strong></th>
</tr>
</thead>
<tbody style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 16px; vertical-align: baseline;">
<tr style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 16px; vertical-align: baseline;">
<td style="box-sizing: inherit; margin: 0px; padding: 6px 12px; border: 1px solid var(--gray10); font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 16px; vertical-align: baseline; background-image: linear-gradient(90deg, rgb(255, 255, 255) 50%, rgba(255, 255, 255, 0)); background-size: 20px 100%; background-repeat: no-repeat;">String</td>
<td style="box-sizing: inherit; margin: 0px; padding: 6px 12px; border: 1px solid var(--gray10); font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 16px; vertical-align: baseline; background-image: linear-gradient(270deg, rgb(255, 255, 255) 50%, rgba(255, 255, 255, 0)); background-position: 100% 0px; background-size: 20px 100%; background-repeat: no-repeat; text-align: center;"><code style="box-sizing: inherit; margin: 0px; padding: 0px 5px 2px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: 400 !important; font-stretch: inherit; line-height: 1em; font-family: &quot;Roboto Mono&quot;, monospace; font-size: 0.8em; vertical-align: baseline; background: var(--gray15);">'string'</code></td>
</tr>
<tr style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 16px; vertical-align: baseline;">
<td style="box-sizing: inherit; margin: 0px; padding: 6px 12px; border: 1px solid var(--gray10); font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 16px; vertical-align: baseline; background-image: linear-gradient(90deg, rgb(255, 255, 255) 50%, rgba(255, 255, 255, 0)); background-size: 20px 100%; background-repeat: no-repeat;">Number</td>
<td style="box-sizing: inherit; margin: 0px; padding: 6px 12px; border: 1px solid var(--gray10); font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 16px; vertical-align: baseline; background-image: linear-gradient(270deg, rgb(255, 255, 255) 50%, rgba(255, 255, 255, 0)); background-position: 100% 0px; background-size: 20px 100%; background-repeat: no-repeat; text-align: center;"><code style="box-sizing: inherit; margin: 0px; padding: 0px 5px 2px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: 400 !important; font-stretch: inherit; line-height: 1em; font-family: &quot;Roboto Mono&quot;, monospace; font-size: 0.8em; vertical-align: baseline; background: var(--gray15);">'number'</code></td>
</tr>
<tr style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 16px; vertical-align: baseline;">
<td style="box-sizing: inherit; margin: 0px; padding: 6px 12px; border: 1px solid var(--gray10); font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 16px; vertical-align: baseline; background-image: linear-gradient(90deg, rgb(255, 255, 255) 50%, rgba(255, 255, 255, 0)); background-size: 20px 100%; background-repeat: no-repeat;">BigInt</td>
<td style="box-sizing: inherit; margin: 0px; padding: 6px 12px; border: 1px solid var(--gray10); font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 16px; vertical-align: baseline; background-image: linear-gradient(270deg, rgb(255, 255, 255) 50%, rgba(255, 255, 255, 0)); background-position: 100% 0px; background-size: 20px 100%; background-repeat: no-repeat; text-align: center;"><code style="box-sizing: inherit; margin: 0px; padding: 0px 5px 2px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: 400 !important; font-stretch: inherit; line-height: 1em; font-family: &quot;Roboto Mono&quot;, monospace; font-size: 0.8em; vertical-align: baseline; background: var(--gray15);">'bigint'</code></td>
</tr>
<tr style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 16px; vertical-align: baseline;">
<td style="box-sizing: inherit; margin: 0px; padding: 6px 12px; border: 1px solid var(--gray10); font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 16px; vertical-align: baseline; background-image: linear-gradient(90deg, rgb(255, 255, 255) 50%, rgba(255, 255, 255, 0)); background-size: 20px 100%; background-repeat: no-repeat;">Symbol</td>
<td style="box-sizing: inherit; margin: 0px; padding: 6px 12px; border: 1px solid var(--gray10); font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 16px; vertical-align: baseline; background-image: linear-gradient(270deg, rgb(255, 255, 255) 50%, rgba(255, 255, 255, 0)); background-position: 100% 0px; background-size: 20px 100%; background-repeat: no-repeat; text-align: center;"><code style="box-sizing: inherit; margin: 0px; padding: 0px 5px 2px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: 400 !important; font-stretch: inherit; line-height: 1em; font-family: &quot;Roboto Mono&quot;, monospace; font-size: 0.8em; vertical-align: baseline; background: var(--gray15);">'symbol'</code></td>
</tr>
<tr style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 16px; vertical-align: baseline;">
<td style="box-sizing: inherit; margin: 0px; padding: 6px 12px; border: 1px solid var(--gray10); font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 16px; vertical-align: baseline; background-image: linear-gradient(90deg, rgb(255, 255, 255) 50%, rgba(255, 255, 255, 0)); background-size: 20px 100%; background-repeat: no-repeat;">Boolean</td>
<td style="box-sizing: inherit; margin: 0px; padding: 6px 12px; border: 1px solid var(--gray10); font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 16px; vertical-align: baseline; background-image: linear-gradient(270deg, rgb(255, 255, 255) 50%, rgba(255, 255, 255, 0)); background-position: 100% 0px; background-size: 20px 100%; background-repeat: no-repeat; text-align: center;"><code style="box-sizing: inherit; margin: 0px; padding: 0px 5px 2px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: 400 !important; font-stretch: inherit; line-height: 1em; font-family: &quot;Roboto Mono&quot;, monospace; font-size: 0.8em; vertical-align: baseline; background: var(--gray15);">'boolean'</code></td>
</tr>
<tr style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 16px; vertical-align: baseline;">
<td style="box-sizing: inherit; margin: 0px; padding: 6px 12px; border: 1px solid var(--gray10); font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 16px; vertical-align: baseline; background-image: linear-gradient(90deg, rgb(255, 255, 255) 50%, rgba(255, 255, 255, 0)); background-size: 20px 100%; background-repeat: no-repeat;">undefined</td>
<td style="box-sizing: inherit; margin: 0px; padding: 6px 12px; border: 1px solid var(--gray10); font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 16px; vertical-align: baseline; background-image: linear-gradient(270deg, rgb(255, 255, 255) 50%, rgba(255, 255, 255, 0)); background-position: 100% 0px; background-size: 20px 100%; background-repeat: no-repeat; text-align: center;"><code style="box-sizing: inherit; margin: 0px; padding: 0px 5px 2px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: 400 !important; font-stretch: inherit; line-height: 1em; font-family: &quot;Roboto Mono&quot;, monospace; font-size: 0.8em; vertical-align: baseline; background: var(--gray15);">'undefined'</code></td>
</tr>
<tr style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 16px; vertical-align: baseline;">
<td style="box-sizing: inherit; margin: 0px; padding: 6px 12px; border: 1px solid var(--gray10); font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 16px; vertical-align: baseline; background-image: linear-gradient(90deg, rgb(255, 255, 255) 50%, rgba(255, 255, 255, 0)); background-size: 20px 100%; background-repeat: no-repeat;">Function object</td>
<td style="box-sizing: inherit; margin: 0px; padding: 6px 12px; border: 1px solid var(--gray10); font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 16px; vertical-align: baseline; background-image: linear-gradient(270deg, rgb(255, 255, 255) 50%, rgba(255, 255, 255, 0)); background-position: 100% 0px; background-size: 20px 100%; background-repeat: no-repeat; text-align: center;"><code style="box-sizing: inherit; margin: 0px; padding: 0px 5px 2px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: 400 !important; font-stretch: inherit; line-height: 1em; font-family: &quot;Roboto Mono&quot;, monospace; font-size: 0.8em; vertical-align: baseline; background: var(--gray15);">'function'</code></td>
</tr>
<tr style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 16px; vertical-align: baseline;">
<td style="box-sizing: inherit; margin: 0px; padding: 6px 12px; border: 1px solid var(--gray10); font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 16px; vertical-align: baseline; background-image: linear-gradient(90deg, rgb(255, 255, 255) 50%, rgba(255, 255, 255, 0)); background-size: 20px 100%; background-repeat: no-repeat;">null</td>
<td style="box-sizing: inherit; margin: 0px; padding: 6px 12px; border: 1px solid var(--gray10); font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 16px; vertical-align: baseline; background-image: linear-gradient(270deg, rgb(255, 255, 255) 50%, rgba(255, 255, 255, 0)); background-position: 100% 0px; background-size: 20px 100%; background-repeat: no-repeat; text-align: center;"><code style="box-sizing: inherit; margin: 0px; padding: 0px 5px 2px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: 400 !important; font-stretch: inherit; line-height: 1em; font-family: &quot;Roboto Mono&quot;, monospace; font-size: 0.8em; vertical-align: baseline; background: var(--gray15);">'object'</code>(see below!)</td>
</tr>
<tr style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 16px; vertical-align: baseline;">
<td style="box-sizing: inherit; margin: 0px; padding: 6px 12px; border: 1px solid var(--gray10); font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 16px; vertical-align: baseline; background-image: linear-gradient(90deg, rgb(255, 255, 255) 50%, rgba(255, 255, 255, 0)); background-size: 20px 100%; background-repeat: no-repeat;">Any other objects</td>
<td style="box-sizing: inherit; margin: 0px; padding: 6px 12px; border: 1px solid var(--gray10); font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 16px; vertical-align: baseline; background-image: linear-gradient(270deg, rgb(255, 255, 255) 50%, rgba(255, 255, 255, 0)); background-position: 100% 0px; background-size: 20px 100%; background-repeat: no-repeat; text-align: center;"><code style="box-sizing: inherit; margin: 0px; padding: 0px 5px 2px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: 400 !important; font-stretch: inherit; line-height: 1em; font-family: &quot;Roboto Mono&quot;, monospace; font-size: 0.8em; vertical-align: baseline; background: var(--gray15);">'object'</code></td>
</tr>
</tbody>
</table>
<h1 id="common-gotchas-with-typeof"><strong>Common Gotchas with <code>typeof</code></strong></h1>
<p>There are cases where the <code>typeof</code> operator may not return types you'd expect. This may cause confusion and errors. Here are a few cases.</p>
<h3 id="the-type-of-nan-is-a-number"><strong>The type of NaN is a number</strong></h3><pre><code class="language-js">typeof NaN;  //'number', even if it is Not a Number</code></pre>
<p>The <code>typeof NaN</code> is <code>'number'</code>. This is strange, as we shouldn't be detecting a <code>NaN</code> using <code>typeof</code>. There are better ways to deal with it. We will see them in a minute.</p>
<h3 id="the-type-of-null-is-the-object"><strong>The type of <code>null</code> is the object</strong></h3><pre><code class="language-js">  typeof null;  //'object'
</code></pre>
<p>In JavaScript, <code>typeof null</code> is an object which gives a wrong impression that, <code>null</code> is an object where it is a primitive value.</p>
<p>This result of <code>typeof null</code> is actually a bug in the language. There was an attempt made to fix it in past but it was rejected due to the backward compatibility issue.</p>
<h3 id="the-type-of-an-undeclared-variable-is-undefined"><strong>The type of an undeclared variable is undefined</strong></h3>
<p>Before ES6, a type check on an undeclared variable used to result in <code>'undefined'</code>. But this is not an error-safe way to deal with it.</p>
<p>With ES6 we can declare block-scoped variables with the <code>let</code> or <code>const</code> keywords. If you use them with the <code>typeof</code> operator before they are initialized, they will throw a <code>ReferenceError</code>.</p><pre><code class="language-js"> typeof cat; // ReferenceError
let cat = 'brownie'; </code></pre>
<h3 id="the-type-of-a-constructor-function-is-an-object"><strong>The type of a constructor function is an object</strong></h3>
<p>All constructor functions, except for the <code>Function</code> constructor, will always be <code>typeof</code> &nbsp;'object'.</p><pre><code class="language-js">typeof new String('freeCodeCamp'); //'object'</code></pre>
<p>This may lead to some confusion, as we expect it to be the actual type (in the above example, a <code>string</code> type).</p>
<h3 id="the-type-of-an-array-is-an-object"><strong>The type of an Array is an object</strong></h3>
<p>Though technically correct, this could be the most disappointing one. We want to differentiate between an Array and Object even if an Array is technically an Object in JavaScript.</p><pre><code class="language-js">typeof Array(4);  //'object'</code></pre>
<p>Fortunately there are ways to detect an Array correctly. We will see that soon.</p>
<h1 id="beyond-typeof-better-type-checking"><strong>Beyond <code>typeof</code> – Better Type Checking</strong></h1>
<p>Now that we've seen some of the limitations with the <code>typeof</code> operator, let's see how to fix them and do better type checking.</p>
<h3 id="how-to-detect-nan"><strong>How to Detect NaN</strong></h3>
<p>In JavaScript, NaN is a special value. The value NaN represents the result of an arithmetic expression that can't actually be represented. For example,</p><pre><code class="language-js">let result = 0/0;
console.log(result);  // returns, NaN
</code></pre>
<p>Also, if we perform any arithmetic operations with <code>NaN</code>, it will always result in a <code>NaN</code>.</p><pre><code class="language-js">console.log(NaN + 3); // returns, NaN
</code></pre>
<p>The type checking on NaN using the <code>typeof</code> operator doesn't help much as it returns the type as a <code>'number'</code>. JavaScript has a global function called <code>isNaN()</code> to detect if a result is NaN.</p><pre><code class="language-js">isNaN(0/0); // returns, true
</code></pre>
<p>But there is a problem here, too.</p><pre><code class="language-js">isNaN(undefined); // returns true for 'undefined'
</code></pre>
<p>In ES6, the method <code>isNaN()</code> is added to the global <code>Number</code> object. This method is much more reliable and so it's the preferred one.</p><pre><code class="language-js">Number.isNaN(0/0); // returns, true
Number.isNaN(undefined); // returns, false
</code></pre>
<p>Another interesting aspect of <code>NaN</code> is that it is the only JavaScript value that is never equal to any other values including itself. So this is another way to detect NaN for the environments where ES6 is not supported:</p><pre><code class="language-js">function isNaN (input) {
return input !== input;
}
</code></pre>
<h3 id="how-to-detect-null-in-javascript"><strong>How to Detect null in JavaScript</strong></h3>
<p>We have seen, detecting null using the <code>typeof</code> operator is confusing. The preferred way to check if something is null is by using the strict equality operator(<code>===</code>).</p><pre><code class="language-js">function isNull(input) {
return input === null;
}
</code></pre>
<p>Make sure not to use the <code>==</code> by mistake. Using the <code>==</code> in place of <code>===</code> will result in misleading type detection.</p>
<h3 id="how-to-detect-an-array-in-javascript"><strong>How to Detect an Array in JavaScript</strong></h3>
<p>From ES6 onwards, we can detect an array using the <code>Array.isArray</code> method.</p><pre><code class="language-js">Array.isArray([]); // returns true
Array.isArray({}); // returns false
</code></pre>
<p>Prior to ES6, we could use the <code>instanceof</code> operator to determine an Array:</p><pre><code class="language-js">function isArray(input) {
return input instanceof Array;
}
</code></pre>
<h1 id="a-generic-solution-to-type-checking-in-javascript"><strong>A Generic Solution to Type Checking in JavaScript</strong></h1>
<p>There is a way we can create a generic solution to type checking. Have a look at the method, <code>Object.prototype.toString</code>. This is very powerful and extremely useful for writing a utility method for type checking.</p>
<p>When <code>Object.prototype.toString</code> is invoked using <code>call()</code> or <code>apply()</code>, it returns the object type in the format: <code>[object Type]</code>. The <code>Type</code> part in the return value is the actual type.</p>
<p>Let's see how it works with some examples:</p><pre><code class="language-js">// returns '[object Array]'
Object.prototype.toString.call([]);
// returns '[object Date]'
Object.prototype.toString.call(new Date());
// returns '[object String]'
Object.prototype.toString.call(new String('freeCodeCamp'));
// returns '[object Boolean]'
Object.prototype.toString.call(new Boolean(true));
// returns '[object Null]'
Object.prototype.toString.call(null);
</code></pre>
<p>So this means that if we just take the return string and take out the <code>Type</code> part, we will have the actual type. Here is an attempt to do this:</p><pre><code class="language-js">function typeCheck(value) {
const return_value = Object.prototype.toString.call(value);
// we can also use regex to do this...
const type = return_value.substring(
return_value.indexOf(" ") + 1,
return_value.indexOf("]"));
return type.toLowerCase();
}
</code></pre>
<p>Now, we can use the <code>typeCheck</code> function to detect the types:</p><pre><code class="language-js">typeCheck([]); // 'array'
typeCheck(new Date()); // 'date'
typeCheck(new String('freeCodeCamp')); // 'string'
typeCheck(new Boolean(true)); // 'boolean'
typeCheck(null); // 'null'
</code></pre>
<h1 id="in-summary"><strong>In Summary</strong></h1>
<p>To Summarize what we've learned in this article:</p>
<ul>
<li>JavaScript type checking is not as strict as other programming languages.</li>
<li>Use the <code>typeof</code> operator for detecting types.</li>
<li>There are two variants of the <code>typeof</code> operator syntax: <code>typeof</code> and <code>typeof(expression)</code>.</li>
<li>The result of a <code>typeof</code> operator may be misleading at times. We need to rely on other available methods (<code>Number.isNaN</code>, &nbsp;<code>Array.isArry</code>, and so on) in those cases.</li>
<li>We can use <code>Object.prototype.toString</code> to create a generic type detection method.</li>
</ul>
<h1 id="before-we-end-"><strong>Before we end...</strong></h1>
<p>Thank you for reading this far! Let's connect. You can @ me on <a href="https://twitter.com/tapasadhikary">Twitter (@tapasadhikary)</a> with comments.</p>
<p>You may also like these other articles:</p>
<ul>
<li><a href="https://blog.greenroots.info/javascript-undefined-and-null-lets-talk-about-it-one-last-time-ckh64kmz807v848s15kdkg3dd">JavaScript undefined and null: Let's talk about it one last time!</a></li>
<li><a href="https://blog.greenroots.info/javascript-equality-comparison-with-and-objectis-ckdpt2ryk01vel9s186ft8cwl">JavaScript: Equality comparison with ==, === and Object.is</a></li>
<li><a href="/news/javascript-this-keyword-binding-rules/">The JavaScript `this` Keyword + 5 Key Binding Rules Explained for JS Beginners</a></li>
</ul>
<p>That's all for now. See you again with my next article soon. Until then, please take good care of yourself.</p>
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
