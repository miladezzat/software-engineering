---
card: "/images/default.jpg"
tags: [JavaScript]
description: Regular expressions, abbreviated as regex, or sometimes regex
author: "Milad E. Fahmy"
title: "JavaScript Regex Match Example – How to Use JS Replace on a String"
created: "2021-08-15T19:27:42+02:00"
modified: "2021-08-15T19:27:42+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-regex tag-regular-expressions ">
<header class="post-full-header">
<h1 class="post-full-title">JavaScript Regex Match Example – How to Use JS Replace on a String</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2021/06/6020e04e0a2838549dcc0c26-1.jpg 300w,
/news/content/images/size/w600/2021/06/6020e04e0a2838549dcc0c26-1.jpg 600w,
/news/content/images/size/w1000/2021/06/6020e04e0a2838549dcc0c26-1.jpg 1000w,
/news/content/images/size/w2000/2021/06/6020e04e0a2838549dcc0c26-1.jpg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2021/06/6020e04e0a2838549dcc0c26-1.jpg" alt="JavaScript Regex Match Example – How to Use JS Replace on a String">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Regular expressions, abbreviated as regex, or sometimes regexp, are one of those concepts that you probably know is really powerful and useful. But they can be daunting, especially for beginning programmers.</p>
<p>It doesn't have to be this way. JavaScript includes several helpful methods that make using regular expressions much more manageable. Of the included methods, the <code>.match()</code>, <code>.matchAll()</code>, and <code>.replace()</code> methods are probably the ones you'll use most often.</p>
<p>In this tutorial, we'll go over the ins and outs of those methods, and look at some reasons why you might use them over the other included JS methods </p>
<h2 id="a-quick-introduction-to-regular-expressions">A quick introduction to regular expressions</h2>
<p>According to MDN, regular expressions are "patterns used to match character combinations in strings".</p>
<p>These patterns can sometimes include special characters (<code>*</code>, <code>+</code>), assertions (<code>\W</code>, <code>^</code>), groups and ranges (<code>(abc)</code>, <code>[123]</code>), and other things that make regex so powerful but hard to grasp.</p>
<p>At its core, regex is all about finding patterns in strings – everything from testing a string for a single character to verifying that a telephone number is valid can be done with regular expressions.</p>
<p>If you're brand new to regex and would like some practice before reading on, check out our <a href="https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/using-the-test-method">interactive coding challenges</a>.</p>
<h2 id="how-to-use-the-match-method">How to use the <code>.match()</code> method</h2>
<p>So if regex is all about finding patterns in strings, you might be asking yourself what makes the <code>.match()</code> method so useful?</p>
<p>Unlike the <code>.test()</code> method which just returns <code>true</code> or <code>false</code>, <code>.match()</code> will actually return the match against the string you're testing. For example:</p><pre><code class="language-js">const csLewisQuote = 'We are what we believe we are.';
const regex1 = /are/;
const regex2 = /eat/;
csLewisQuote.match(regex1); // ["are", index: 3, input: "We are what we believe we are.", groups: undefined]
csLewisQuote.match(regex2); // null
</code></pre>
<p>This can be really helpful for some projects, especially if you want to extract and manipulate the data that you're matching without changing the original string.</p>
<p>If all you want to know is if a search pattern is found or not, use the <code>.test()</code> method – it's much faster.</p>
<p>There are two main return values you can expect from the <code>.match()</code> method:</p>
<ol>
<li>If there's a match, the <code>.match()</code> method will return an array with the match. We'll go into more detail about this in a bit.</li>
<li>If there isn't a match, the <code>.match()</code> method will return <code>null</code>.</li>
</ol>
<p>Some of you might have already noticed this, but if you look at the example above, <code>.match()</code> is only matching the first occurrence of the word "are".</p>
<p>A lot of times you'll want to know how often a pattern is matched against the string you're testing, so let's take a look at how to do that with <code>.match()</code>.</p>
<h3 id="different-matching-modes">Different matching modes</h3>
<p>If there's a match, the array that <code>.match()</code> returns had two different <em>modes</em>, for lack of a better term.</p>
<p>The first mode is when the global flag (<code>g</code>) isn't used, like in the example above:</p><pre><code class="language-js">const csLewisQuote = 'We are what we believe we are.';
const regex = /are/;
csLewisQuote.match(regex); // ["are", index: 3, input: "We are what we believe we are.", groups: undefined]
</code></pre>
<p>In this case, we <code>.match()</code> an array with the first match along with the index of the match in the original string, the original string itself, and any matching groups that were used.</p>
<p>But say you want to see how many times the word "are" occurs in a string. To do that, just add the global search flag to your regular expression:</p><pre><code class="language-js">const csLewisQuote = 'We are what we believe we are.';
const regex = /are/g;
csLewisQuote.match(regex); // ["are", "are"]
</code></pre>
<p>You won't get the other information included with the non-global mode, but you'll get an array with all the matches in the string you're testing.</p>
<h3 id="case-sensitivity">Case sensitivity</h3>
<p>An important thing to remember is that regex is case sensitive. For example, say you wanted to see how many times the word "we" occurs in your string:</p><pre><code class="language-js">const csLewisQuote = 'We are what we believe we are.';
const regex = /we/g;
csLewisQuote.match(regex); // ["we", "we"]
</code></pre>
<p>In this case, you're matching a lowercase "w" followed by a lowercase "e", which only occurs twice.</p>
<p>If you'd like all instances of the word "we" whether it's upper or lowercase, you have a couple of options.</p>
<p>First, you could use the <code>.toLowercase()</code> method on the string before testing it with the <code>.match()</code> method:</p><pre><code class="language-js">const csLewisQuote = 'We are what we believe we are.'.toLowerCase();
const regex = /we/g;
csLewisQuote.match(regex); // ["we", "we", "we"]
</code></pre>
<p>Or if you want to preserve the original case, you could add the case-insensitive search flag (<code>i</code>) to your regular expression:</p><pre><code class="language-js">const csLewisQuote = 'We are what we believe we are.';
const regex = /we/gi;
csLewisQuote.match(regex); // ["We", "we", "we"]
</code></pre>
<h2 id="the-new-matchall-method">The new <code>.matchAll()</code> method</h2>
<p>Now that you know all about the <code>.match()</code> method, it's worth pointing out that the <code>.matchAll()</code> method was recently introduced.</p>
<p>Unlike the <code>.match()</code> method which returns an array or <code>null</code>, <code>.matchAll()</code> requires the global search flag (<code>g</code>), and returns either an iterator or an empty array:</p><pre><code class="language-js">const csLewisQuote = 'We are what we believe we are.';
const regex1 = /we/gi;
const regex2 = /eat/gi;
[...csLewisQuote.matchAll(regex1)];
// [
//   ["We", index: 0, input: "We are what we believe we are.", groups: undefined],
//   ["we", index: 12, input: "We are what we believe we are.", groups: undefined]
//   ["we", index: 23, input: "We are what we believe we are.", groups: undefined]
// ]
[...csLewisQuote.matchAll(regex2)]; // []
</code></pre>
<p>While it seems like just a more complicated <code>.match()</code> method, the main advantage that <code>.matchAll()</code> offers is that it works better with capture groups.</p>
<p>Here's a simple example:</p>
const repeatRegex = /(\w+)\s\1/g;
csLewisRepeat.match(repeatRegex); // ["We We", "are are"]
</code></pre>
<figcaption><code>.match()</code></figcaption>
</figure>
const repeatRegex = /(\w+)\s\1/g;
[...repeatStr.matchAll(repeatRegex)];
// [
//   ["We We", "We", index: 0, input: "We We are are", groups: undefined],
//   ["are are", "are", index: 6, input: "We We are are", groups: undefined],
// ]
</code></pre>
<figcaption><code>.matchAll()</code></figcaption>
</figure>
<p>While that just barely scratches the surface, keep in mind that it's probably better to use <code>.matchAll()</code> if you're using the <code>g</code> flag and want all the extra information that <code>.match()</code> provides for a single match (index, the original string, and so on).</p>
<h2 id="how-to-use-the-replace-method">How to use the <code>.replace()</code> method</h2>
<p>So now that you know how to match patterns in strings, you'll probably want to do something useful with those matches.</p>
<p>One of the most common things you'll do once you find a matching pattern is replace that pattern with something else. For example, you might want to replace "paid" in "paidCodeCamp" with "free". Regex would be a good way to do that.</p>
<p>Since <code>.match()</code> and <code>.matchAll()</code> return information about the index for each matching pattern, depending on how you use it, you could use that to do some fancy string manipulation. But there's an easier way – by using the <code>.replace()</code> method.</p>
<p>With <code>.replace()</code>, all you need to do is pass it a string or regular expression you want to match as the first argument, and a string to replace that matched pattern with as the second argument:</p><pre><code class="language-js">const campString = 'paidCodeCamp';
const fCCString1 = campString.replace('paid', 'free');
const fCCString2 = campString.replace(/paid/, 'free');
console.log(campString); // "paidCodeCamp"
console.log(fCCString1); // "freeCodeCamp"
console.log(fCCString2); // "freeCodeCamp"
</code></pre>
<p>The best part is that <code>.replace()</code> returns a new string, and the original remains the same.</p>
<p>Similar to the <code>.match()</code> method, <code>.replace()</code> will only replace the first matched pattern it finds unless you use regex with the <code>g</code> flag:</p><pre><code class="language-js">const campString = 'paidCodeCamp is awesome. You should check out paidCodeCamp.';
const fCCString1 = campString.replace('paid', 'free');
const fCCString2 = campString.replace(/paid/g, 'free');
console.log(fCCString1); // "freeCodeCamp is awesome. You should check out paidCodeCamp."
console.log(fCCString2); // "freeCodeCamp is awesome. You should check out freeCodeCamp."
</code></pre>
<p>And similar to before, whether you pass a string or a regular expression as the first argument, it's important to remember that the matching pattern is case sensitive:</p><pre><code class="language-js">const campString = 'PaidCodeCamp is awesome. You should check out PaidCodeCamp.';
const fCCString1 = campString.replace('Paid', 'free');
const fCCString2 = campString.replace(/paid/gi, 'free');
console.log(fCCString1); // "freeCodeCamp is awesome. You should check out PaidCodeCamp."
console.log(fCCString2); // "freeCodeCamp is awesome. You should check out freeCodeCamp."
</code></pre>
<h2 id="how-to-use-the-replaceall-method">How to use the <code>.replaceAll()</code> method</h2>
<p>Just like how <code>.match()</code> has a newer <code>.matchAll()</code> method, <code>.replace()</code> has a newer <code>.replaceAll()</code> method.</p>
<p>The only real difference between <code>.replace()</code> and <code>.replaceAll()</code> is that you need to use the global search flag if you use a regular expression with <code>.replaceAll()</code>:</p><pre><code class="language-js">const campString = 'paidCodeCamp is awesome. You should check out paidCodeCamp.';
const fCCString1 = campString.replaceAll('paid', 'free');
const fCCString2 = campString.replaceAll(/paid/g, 'free');
console.log(fCCString1); // "freeCodeCamp is awesome. You should check out freeCodeCamp."
console.log(fCCString2); // "freeCodeCamp is awesome. You should check out freeCodeCamp."
</code></pre>
<p>The real benefit with <code>.replaceAll()</code> is that it's a bit more readable, and replaces all matched patterns when you pass it a string as the first argument.</p>
<p>That's it! Now you know the basics of matching and replacing parts of strings with regex and some built-in JS methods. These were pretty simple examples, but I hope it still showed how powerful even a little bit of regex can be.</p>
<p>Was this helpful? How do you use the <code>.match()</code>, <code>.matchAll()</code>, <code>.replace()</code>, and <code>.replaceAll()</code> methods? Let me know over on <a href="https://twitter.com/kriskoishigawa">Twitter</a>.</p>
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
