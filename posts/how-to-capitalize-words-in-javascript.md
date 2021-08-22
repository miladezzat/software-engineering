---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c9905740569d1a4ca1d64.jpg"
tags: [JavaScript]
description: In this article, you are going to learn how to capitalize the
author: "Milad E. Fahmy"
title: "How to Capitalize the First Letter of Each Word in JavaScript – a JS Uppercase Tutorial"
created: "2021-08-15T19:28:39+02:00"
modified: "2021-08-15T19:28:39+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-arrays ">
<header class="post-full-header">
<h1 class="post-full-title">How to Capitalize the First Letter of Each Word in JavaScript – a JS Uppercase Tutorial</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c9905740569d1a4ca1d64.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9905740569d1a4ca1d64.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9905740569d1a4ca1d64.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9905740569d1a4ca1d64.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c9905740569d1a4ca1d64.jpg" alt="How to Capitalize the First Letter of Each Word in JavaScript – a JS Uppercase Tutorial">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>In this article, you are going to learn how to capitalize the first letter of any word in JavaScript. After that, you are going to capitalize the first letter of all words from a sentence.</p>
<p>The beautiful thing about programming is that there is no one universal solution to solve a problem. Therefore, in this article you are going to see multiple ways of solving the same problem.</p>
<h1 id="capitalize-the-first-letter-of-a-word">Capitalize the first letter of a word</h1>
<p>First of all, let's start with capitalizing the first letter of a single word. After you learn how to do this, we'll proceed to the next level – doing it on every word from a sentence. Here is an example:</p><pre><code class="language-js">const publication = "freeCodeCamp";
</code></pre>
<p>In JavaScript, we start counting from 0. For instance, if we have an array, the first position is 0, not 1. </p>
<p>Also, we can access each letter from a String in the same way that we access an element from an array. For instance, the first letter from the word "<em>freeCodeCamp</em>" is at position 0.</p>
<p>This means that we can get the letter <strong>f</strong> from <em>freeCodeCamp</em> by doing <code>publication[0]</code>. </p>
<p>In the same way, you can access other letters from the word. You can replace "0" with any number, as long as you do not exceed the word length. By exceeding the word length, I mean trying to do something like <code>publication[25</code>, which throws an error because there are only twelve letters in the word "freeCodeCamp".</p>
<h3 id="how-to-capitalize-the-first-letter">How to capitalize the first letter</h3>
<p>Now that we know how to access a letter from a word, let's capitalize it.</p>
<p>In JavaScript, we have a method called <code>toUpperCase()</code>, which we can call on strings, or words. As we can imply from the name, you call it on a string/word, and it is going to return the same thing but as an uppercase. </p>
<p>For instance:</p><pre><code class="language-js">const publication = "freeCodeCamp";
publication[0].toUpperCase();
</code></pre>
<p>Running the above code, you are going to get a capital <strong>F</strong> instead of f. To get the whole word back, we can do this:</p><pre><code class="language-js">const publication = "freeCodeCamp";
publication[0].toUpperCase() + publication.substring(1);
</code></pre>
<p>Now it concatenates "F" with "reeCodeCamp", which means we get back the word "FreeCodeCamp". That is all!</p>
<h3 id="let-s-recap">Let's recap</h3>
<p>To be sure things are clear, let's recap what we've learnt so far:</p>
<ul>
<li>In JavaScript, counting starts from 0.</li>
<li>We can access a letter from a string in the same way we access an element from an array - e.g. <code>string[index]</code>.</li>
<li>Do not use an index that exceeds the string length (use the length method - <code>string.length</code> - to find the range you can use).</li>
<li>Use the built-in method <code>toUpperCase()</code> on the letter you want to transform to uppercase.</li>
</ul>
<h1 id="capitalize-the-first-letter-of-each-word-from-a-string">Capitalize the first letter of each word from a string</h1>
<p>The next step is to take a sentence and capitalize every word from that sentence. Let's take the following sentence:</p><pre><code class="language-js">const mySentence = "freeCodeCamp is an awesome resource";
</code></pre>
<h3 id="split-it-into-words">Split it into words</h3>
<p>We have to capitalize the first letter from each word from the sentence <code>freeCodeCamp is an awesome resource</code>. </p>
<p>The first step we take is to split the sentence into an array of words. <strong>Why?</strong> So we can manipulate each word individually. We can do that as follows:</p><pre><code class="language-js">const mySentence = "freeCodeCamp is an awesome resource";
const words = mySentence.split(" ");
</code></pre>
<h3 id="iterate-over-each-word">Iterate over each word</h3>
<p>After we run the above code, the variable <code>words</code> is assigned an array with each word from the sentence. The array is as follows <code>["freeCodeCamp", "is", "an", "awesome", "resource"]</code>.</p><pre><code class="language-js">const mySentence = "freeCodeCamp is an awesome resource";
const words = mySentence.split(" ");
for (let i = 0; i &lt; words.length; i++) {
words[i] = words[i][0].toUpperCase() + words[i].substr(1);
}
</code></pre>
<p>Now the next step is to loop over the array of words and capitalize the first letter of each word. </p>
<p>In the above code, every word is taken separately. Then it capitalizes the first letter, and in the end, it concatenates the capitalized first letter with the rest of the string.</p>
<h3 id="join-the-words">Join the words</h3>
<p>What is the above code doing? It iterates over each word, and it replaces it with the uppercase of the first letter + the rest of the string. </p>
<p>If we take "freeCodeCamp" as an example, it looks like this <code>freeCodeCamp = F + reeCodeCamp</code>. </p>
<p>After it iterates over all the words, the <code>words</code> array is <code>["FreeCodeCamp", "Is", "An", "Awesome", "Resource"]</code>. However, we have an array, not a string, which is not what we want. </p>
<p>The last step is to join all the words to form a sentence. So, how do we do that?</p>
<p>In JavaScript, we have a method called <code>join</code>, which we can use to return an array as a string. The method takes a separator as an argument. That is, we specify what to add between words, for example a space.</p><pre><code class="language-js">const mySentence = "freeCodeCamp is an awesome resource";
const words = mySentence.split(" ");
for (let i = 0; i &lt; words.length; i++) {
words[i] = words[i][0].toUpperCase() + words[i].substr(1);
}
words.join(" ");
</code></pre>
<p>In the above code snippet, we can see the join method in action. We call it on the <code>words</code> array, and we specify the separator, which in our case is a space. </p>
<p>Therefore, <code>["FreeCodeCamp", "Is", "An", "Awesome", "Resource"]</code> becomes <code>FreeCodeCamp Is An Awesome Resource</code>.</p>
<h1 id="other-methods">Other methods</h1>
<p>In programming, usually, there are multiple ways of solving the same problem. So let's see another approach.</p><pre><code class="language-js">const mySentence = "freeCodeCamp is an awesome resource";
const words = mySentence.split(" ");
words.map((word) =&gt; {
return word[0].toUpperCase() + word.substring(1);
}).join(" ");
</code></pre>
<p><strong>What is the difference between the above solution and the initial solution?</strong> The two solutions are very similar, the difference being that in the second solution we are using the <code>map</code> function, whereas in the first solution we used a <code>for loop</code>.</p>
<p>Let's go even further, and try to do a <strong>one-liner</strong>. Be aware! One line solutions might look cool, but in the real world they are rarely used because it is challenging to understand them. Code readability always comes first.</p><pre><code class="language-js">const mySentence = "freeCodeCamp is an awesome resource";
const finalSentence = mySentence.replace(/(^\w{1})|(\s+\w{1})/g, letter =&gt; letter.toUpperCase());
</code></pre>
<p>The above code uses <strong>RegEx</strong> to transform the letters. The RegEx might look confusing, so let me explain what happens:</p>
<ul>
<li><code>^</code> matches the beginning of the string.</li>
<li><code>\w</code> matches any word character.</li>
<li><code>{1}</code> takes only the first character.</li>
<li>Thus, <code>^\w{1}</code> matches the first letter of the word.</li>
<li><code>|</code> works like the boolean <code>OR</code>. It matches the expression after and before the <code>|</code>.</li>
<li><code>\s+</code> matches any amount of whitespace between the words (for example spaces, tabs, or line breaks).</li>
</ul>
<p>Thus, with one line, we accomplished the same thing we accomplished in the above solutions. If you want to play around with the RegEx and to learn more, you can use <a href="https://regexr.com/">this website</a>.</p>
<h1 id="conclusion">Conclusion</h1>
<p>Congratulations, you learnt a new thing today! To recap, in this article, you learnt how to:</p>
<ul>
<li>access the characters from a string</li>
<li>capitalize the first letter of a word</li>
<li>split a string in an array of words</li>
<li>join back the words from an array to form a string</li>
<li>use RegEx to accomplish the same task</li>
</ul>
<p><em>If you like what I write, the chances are you would love what I email. Consider subscribing to my <a href="https://landing.mailerlite.com/webforms/landing/i4b6v1">mailing list</a>. If you're <strong>not a fan of newsletters</strong>, we can always keep in touch on <strong><a href="https://twitter.com/intent/follow?screen_name=catalinmpit">Twitter</a></strong>.</em></p>
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
