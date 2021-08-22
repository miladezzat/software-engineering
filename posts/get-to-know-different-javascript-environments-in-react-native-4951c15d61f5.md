---
card: "https://cdn-media-1.freecodecamp.org/images/0*O9VH0AoEkPaiexMT"
tags: [JavaScript]
description: by Khoa Pham
author: "Milad E. Fahmy"
title: "Get to know different JavaScript environments in React Native"
created: "2021-08-15T19:36:38+02:00"
modified: "2021-08-15T19:36:38+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-react-native tag-chrome tag-tech tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">Get to know different JavaScript environments in React Native</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/0*O9VH0AoEkPaiexMT 300w,
https://cdn-media-1.freecodecamp.org/images/0*O9VH0AoEkPaiexMT 600w,
https://cdn-media-1.freecodecamp.org/images/0*O9VH0AoEkPaiexMT 1000w,
https://cdn-media-1.freecodecamp.org/images/0*O9VH0AoEkPaiexMT 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/0*O9VH0AoEkPaiexMT" alt="Get to know different JavaScript environments in React Native">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Khoa Pham</p>
<h1 id="get-to-know-different-javascript-environments-in-react-native">Get to know different JavaScript environments in React Native</h1>
<figcaption>Source: <a href="https://www.sportdiver.com/secret-to-diving-with-blue-whales-in-sri-lanka" rel="noopener" target="_blank" title="">Sport Diver</a></figcaption>
</figure>
<p>React Native can be very easy to <a href="https://facebook.github.io/react-native/docs/getting-started.html" rel="noopener">get started</a> with, and then at some point problems occur and we need to dive deep into it.</p>
<p>The other day we had a strange bug that was only occurring in production build, and in iOS only. A long backtrace in the app revealed that it was due to <code>Date</code> constructor failure.</p><pre><code>const date = new Date("2019-01-18 12:00:00")</code></pre>
<p>This returns the correct <code>Date</code> object in debug mode, but yields <code>Invalid Date</code> in release. What’s special about <code>Date</code> constructor? Here I’m using react native 0.57.5 and no <code>Date</code> libraries.</p>
<h3 id="date-constructor">Date constructor</h3>
<p>The best resource for learning Javascript is via Mozilla web docs, and entering <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date" rel="noopener">Date</a>:</p>
<blockquote>Creates a JavaScript <code><strong>Date</strong></code> instance that represents a single moment in time. <code>Date</code> objects use a <a href="http://pubs.opengroup.org/onlinepubs/9699919799/basedefs/V1_chap04.html#tag_04_16" rel="noopener">Unix Time Stamp</a>, an integer value that is the number of milliseconds since 1 January 1970 UTC.</blockquote>
<p>Pay attention to how Date can be constructed by dateString:</p>
<blockquote><code>dateString</code>String value representing a date. The string should be in a format recognized by the <code><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse" rel="noopener">Date.parse()</a></code> method (<a href="http://tools.ietf.org/html/rfc2822#page-14" rel="noopener">IETF-compliant RFC 2822 timestamps</a> and also a <a href="http://www.ecma-international.org/ecma-262/5.1/#sec-15.9.1.15" rel="noopener">version of ISO8601</a>).</blockquote>
<p>So <code>Date</code> constructor uses static method <code>Date.parse</code> under the hood. This has very specific requirement about the format of date string that it supports</p>
<blockquote>The standard string representation of a date time string is a simplification of the ISO 8601 calendar date extended format (see <a href="https://tc39.github.io/ecma262/#sec-date-time-string-format" rel="noopener">Date Time String Format</a> section in the ECMAScript specification for more details). For example, <code>"2011-10-10"</code> (date-only form), <code>"2011-10-10T14:48:00"</code> (date-time form), or <code>"2011-10-10T14:48:00.000+09:00"</code> (date-time form with milliseconds and time zone) can be passed and will be parsed. When the time zone offset is absent, date-only forms are interpreted as a UTC time and date-time forms are interpreted as local time.</blockquote>
<blockquote>The ECMAScript specification states: If the String does not conform to the standard format the function may fall back to any implementation–specific heuristics or implementation–specific parsing algorithm. Unrecognizable strings or dates containing illegal element values in ISO formatted strings shall cause <code>Date.parse()</code> to return <code><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN" rel="noopener">NaN</a></code>.</blockquote>
<p>The reason that we get Invalid Date in iOS must be because the code was run in two different JavaScript environments and they somehow have different implementation of the Date parsing function.</p>
<h3 id="javascript-environment">JavaScript Environment</h3>
<p>React Native guide has a dedicated section about <a href="https://facebook.github.io/react-native/docs/javascript-environment" rel="noopener">JavaScript environments</a>.</p>
<p>When using React Native, you’re going to be running your JavaScript code in two environments:</p>
<ul>
<li>In most cases, React Native will use <a href="http://trac.webkit.org/wiki/JavaScriptCore" rel="noopener">JavaScriptCore</a>, the JavaScript engine that powers Safari. Note that on iOS, JavaScriptCore does not use JIT due to the absence of writable executable memory in iOS apps.</li>
<li>When using Chrome debugging, all JavaScript code runs within Chrome itself, communicating with native code via WebSockets. Chrome uses <a href="https://code.google.com/p/v8/" rel="noopener">V8</a> as its JavaScript engine.</li>
</ul>
<p>While both environments are very similar, you may end up hitting some inconsistencies. We’re likely going to experiment with other JavaScript engines in the future, so it’s best to avoid relying on specifics of any runtime.</p>
<p>React Native also uses Babel and some polyfills to have some nice syntax transformers, so some of the code that we write may not be necessarily supported natively by <code>JavascriptCore</code>.</p>
<p>Now it is clear that while we debug our app via Chrome debugger, it works because V8 engine handles that. Now try turning off Remote JS Debugging: we can see that the above Date constructor fails, which means it is using <code>JavascriptCore</code>.</p>
<p>To confirm this issue, let’s run our app in Xcode and go to the Safari app on MacOS to enter Development menu. Select the active Simulator and choose JSContext on the current iOS app. Remember to turn off Remote JS Debugging so that the app uses JavascriptCore:</p>
<p>Now open the Console in Safari dev tools, and we should have access to JavascriptCore inside our app. Try running the above <code>Date</code> constructor to confirm that it fails:</p>
<h3 id="what-are-legit-date-string-formats">What are legit date string formats?</h3>
<p>Since 2016, <a href="https://webkit.org/blog/6756/es6-feature-complete/" rel="noopener">JavascriptCore</a> supports most ES6 features:</p>
<blockquote>As of <a href="https://trac.webkit.org/changeset/202125" rel="noopener">r202125</a>, JavaScriptCore supports all of the new features in the <a href="https://tc39.github.io/ecma262/#sec-integerindexedelementget" rel="noopener">ECMAScript 6 (ES6) language specification</a></blockquote>
<p>And it was fully confirmed a year later in <a href="https://webkit.org/blog/7536/jsc-loves-es6/" rel="noopener">JSC ? ES6</a></p>
<blockquote><a href="http://www.ecma-international.org/ecma-262/6.0/" rel="noopener">ES2015</a> (also known as ES6), the version of the JavaScript specification ratified in 2015, is a huge improvement to the language’s expressive power thanks to features like <a href="http://www.2ality.com/2015/02/es6-classes-final.html" rel="noopener">classes</a>, <a href="https://hacks.mozilla.org/2015/04/es6-in-depth-iterators-and-the-for-of-loop/" rel="noopener">for-of</a>, <a href="http://www.2ality.com/2015/01/es6-destructuring.html" rel="noopener">destructuring</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator" rel="noopener">spread</a>, <a href="http://www.2ality.com/2015/06/tail-call-optimization.html" rel="noopener">tail calls</a>, and <a href="http://kangax.github.io/compat-table/es6/" rel="noopener">much more</a></blockquote>
<blockquote>WebKit’s JavaScript implementation, called JSC (JavaScriptCore), <a href="https://webkit.org/blog/6756/es6-feature-complete/" rel="noopener">implements all of ES6</a></blockquote>
<p>For more details about JavaScript features supported by different JavaScript engines, visit this <a href="https://kangax.github.io/compat-table/es6/" rel="noopener">ECMAScript comparison table</a>.</p>
<p>Now for the date string format, from <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse" rel="noopener">Date.parse</a>, let’s visit ECMAScript 2015 specification to see what it says about <a href="https://www.ecma-international.org/ecma-262/6.0/#sec-date-time-string-format" rel="noopener">date string format</a>:</p>
<p>ECMAScript defines a string interchange format for date-times based upon a simplification of the ISO 8601 Extended Format. The format is as follows: <code><strong>YYYY-MM-DDTHH:mm:ss.sss<em>Z</em></strong></code></p>
<p>Where the fields are as follows:</p>
<p><code><strong>"T"</strong></code> appears literally in the string, to indicate the beginning of the time element.</p>
<p>So <code>JavascriptCore</code> requires <code>T</code> specifier and V8 can work without it. The fix for now is to always include that T specifier. This way we always follow ECMAScript standards to make sure it works across different JavaScript environments.</p><pre><code>const date = new Date("2019-01-18 12:00:00".replace(' ', 'T'))</code></pre>
<p>And now it returns correct <code>Date</code> object. There may be difference between JavascriptCore on iOS and macOS, and among different iOS versions. The lesson learned here is that we should always test our app thoroughly in production and on devices to make sure it works as expected.</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
