---
card: "/images/default.jpg"
tags: [Technology]
description: "Project 1 from JavaScript Algos and DS Certification."
author: "Milad E. Fahmy"
title: "A Walkthrough of the FreeCodeCamp Palindrome Checker Project"
created: "2021-08-16T11:28:31+02:00"
modified: "2021-08-16T11:28:31+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-technology tag-javascript tag-algorithms tag-data-structures tag-coding-interview tag-interviewing tag-freecodecamp ">
<header class="post-full-header">
<h1 class="post-full-title">A Walkthrough of the FreeCodeCamp Palindrome Checker Project</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2019/09/Palindrome-Checker-thumbnail.png 300w,
/news/content/images/size/w600/2019/09/Palindrome-Checker-thumbnail.png 600w,
/news/content/images/size/w1000/2019/09/Palindrome-Checker-thumbnail.png 1000w,
/news/content/images/size/w2000/2019/09/Palindrome-Checker-thumbnail.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2019/09/Palindrome-Checker-thumbnail.png" alt="A Walkthrough of the FreeCodeCamp Palindrome Checker Project">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>This is the blog version of my walkthrough. If you prefer video <a href="https://youtu.be/XV5OCibNpLI">here is the YouTube video link</a>.</p>
<h2 id="thechallenge">The Challenge</h2>
<p><img src="https://www.freecodecamp.org/news/content/images/2019/09/project-1-intro-screenshot.png" alt="project-1-intro-screenshot"></p>
<p>Write a function called <code>palindrome</code> that takes a string, <code>str</code>. If <code>str</code> is a palindrome, return <code>true</code>, otherwise return <code>false</code>.</p>
<h2 id="whatisapalindrome">What Is a Palindrome?</h2>
<p>A palindrome is a word that reads the same forwards and backwards. Some examples are</p>
<ul>
<li>Eye</li>
<li>Racecar</li>
<li>A Man, A Plan, A Canal – Panama!</li>
</ul>
<p>Whether you read these left-to-right or right-to-left, you get the same sequence of characters. <strong>We’ll be ignoring punctuation like commas, periods, question marks, exclamation points, and casing.</strong></p>
<h2 id="step0stepawayfromthecode">Step 0 - Step Away from the Code</h2>
<p>I like keeping this mind during any interview or problem I have to solve at work. Rushing into the code first is usually a losing strategy, because now you have to consider syntax while trying to solve the problem in your head.</p>
<blockquote>
<p>Code should come last</p>
</blockquote>
<p>Don't let your nerves get the better of you. Instead of frantically hacking at a solution and elevating your blood pressure, take a deep breath and try to write it out on a whiteboard or in a notebook.</p>
<p>Once you've thought out a solution, the code comes easy. All the hard work happens in your mind and notes, not on the keyboard.</p>
<h2 id="step1equalizeallcasing">Step 1 - Equalize All Casing</h2>
<p>A palindrome is valid whether or not its casing reads the same forwards or backwards. So "Racecar" is valid even though it's technically spelt "racecaR" backwards.</p>
<p>To safeguard us against any casing issues, I'll add a comment saying we'll lowercase everything.</p>
<p>Here's my code so far (notice I wrote no real code yet).</p>
<pre><code class="language-js">function palindrome(str) {
// 1) Lowercase the input
}
palindrome("eye");
</code></pre>
<h2 id="step2stripnonalphanumericcharacters">Step 2 - Strip Non-Alphanumeric Characters</h2>
<p>Just like the casing scenario, a palindrome is valid even if the punctuation and spaces aren't consistent back and forth.</p>
<p>For example "A Man, A Plan, A Canal – Panama!" is valid because we examine it without any marks or spaces. If you do that and lowercase everything, it becomes this.</p>
<pre><code class="language-js">"A Man, A Plan, A Canal – Panama!"
// lowercase everything
// strip out non-alphanumeric characters
"amanaplanacanalpanama"
</code></pre>
<p>Which reads the same forwards and backwards.</p>
<h3 id="whatdoesalphanumericmean">What does alphanumeric mean?</h3>
<p>It means "letters and numbers", so anything from a-z and 0-9 is an alphanumeric character. In order to properly examine our input non-alphanumeric characters (spaces, punctuation, etc) must go.</p>
<p>Here's our updated pseudocode.</p>
<pre><code class="language-js">function palindrome(str) {
// 1) Lowercase the input
// 2) Strip out non-alphanumeric characters
}
palindrome("eye");
</code></pre>
<h2 id="step3comparestringtoitsreverse">Step 3 - Compare String to Its Reverse</h2>
<p>Once our string's properly cleaned up, we can flip it around and see if it reads the same.</p>
<p>I'm thinking a comparison along these lines</p>
<pre><code class="language-js">return string === reversedString
</code></pre>
<p>I'm using triple equals (<code>===</code>) for comparison in JavaScript. If the two strings are identical, it's a palindrome and we return <code>true</code>! If not we return <code>false</code>.</p>
<p>Here's our updated pseudocode.</p>
<pre><code class="language-js">function palindrome(str) {
// 1) Lowercase the input
// 2) Strip out non-alphanumeric characters
// 3) return string === reversedString
}
palindrome("eye");
</code></pre>
<h2 id="executingstep1lowercase">Executing Step 1 - Lowercase</h2>
<p>This is the easiest step. If you are unsure how to lowercase something in JavaScript, a quick Google search should lead to the <code>toLowerCase</code> method.</p>
<p>This is a method available on all string, so we can use it to lowercase our input before doing anything else.</p>
<p>I'll store the lowercase version in a variable called <code>alphanumericOnly</code> because we're eventually going to remove alphanumeric characters too.</p>
<pre><code class="language-js">function palindrome(str) {
// 1) Lowercase the input
const alphanumericOnly = str.toLowerCase();
// 2) Strip out non-alphanumeric characters
// 3) return string === reversedString
}
palindrome("eye");
</code></pre>
<h2 id="executingstep2alphanumericonly">Executing Step 2 - Alphanumeric Only</h2>
<p>We'll have to dive a bit deeper here, as this is the toughest step. How exactly are we going to purify a string of its non-alphanumeric characters?</p>
<h3 id="thematchmethod">The .match method</h3>
<p>Just like <code>toLowerCase</code> all strings support a method called <code>match</code>. It takes a parameter indicating what character(s) you'd like to look for in a given string.</p>
<p>Let's use my name as an example.</p>
<pre><code class="language-js">myName = 'yazeed';
myName.match('e');
// ["e", index: 3, input: "yazeed", groups: undefined]
</code></pre>
<p>As you can see <code>.match</code> returns an array with some information. The part we care about is the first element, <code>'e'</code>. That's the match we found in the string <code>'yazeed'</code>.</p>
<p>But my name has two e's! How do we match the other one?</p>
<h3 id="regularexpressionsregex">Regular Expressions (Regex)</h3>
<p>The <code>.match</code> method's first parameter can instead be a <em>regular expression</em>.</p>
<blockquote>
<p>Regular Expression - A sequence of characters that define a search pattern. Also known as "Regex".</p>
</blockquote>
<p>Instead of quotation marks for a string, put your parameter between forward slashes.</p>
<pre><code class="language-js">myName = 'yazeed';
myName.match(/e/);
// ["e", index: 3, input: "yazeed", groups: undefined]
</code></pre>
<p>We get the same result so who cares? Well check this out, regex allows us to add <em>flags</em>.</p>
<blockquote>
<p>Regex Flag - An indicator that tells Regex to do something special.</p>
</blockquote>
<pre><code class="language-js">myName = 'yazeed';
myName.match(/e/g);
// ^^ Notice the little g now ^^
// ["e", "e"]
</code></pre>
<p>We got back all the e's! If you try an a or z, you get an array of just one match. Makes sense.</p>
<pre><code class="language-js">myName.match(/a/g);
// ["a"]
myName.match(/z/g);
// ["z"]
</code></pre>
<h3 id="findingallalphanumericcharacters">Finding all alphanumeric characters</h3>
<p>So regex not only matches patterns, but it can match <em>many</em> of the same kind of pattern! This sounds perfect for our algorithm's next step.</p>
<p>If you Google a bit, this may be the regex you find for matching all alphanumeric characters.</p>
<pre><code class="language-js">/[a-z0-9]/g
</code></pre>
<p>You're looking at the definition of <em>alphanumeric</em>. This regex can be broken into 3 parts.</p>
<ol>
<li>A character set <code>[]</code> - match any character between these brackets. <img src="https://www.freecodecamp.org/news/content/images/2019/09/character-sets.png" alt="character-sets"></li>
<li><code>a-z</code> - match all lowercase letters <img src="https://www.freecodecamp.org/news/content/images/2019/09/a-z.png" alt="a-z"></li>
<li><code>0-9</code> - match all numbers <img src="https://www.freecodecamp.org/news/content/images/2019/09/0-9.png" alt="0-9"></li>
</ol>
<p>Running it on <code>myName</code> returns an array of every letter.</p>
<pre><code class="language-js">myName = 'yazeed';
myName.match(/[a-z0-9]/g);
// ["y", "a", "z", "e", "e", "d"]
</code></pre>
<p>Let's try it with one of the project's test cases. How about this crazy one they expect to be a palindrome?</p>
<pre><code class="language-js">crazyInput = '0_0 (: /-\ :) 0-0';
crazyInput.match(/[a-z0-9]/g);
// ["0", "0", "0", "0"]
</code></pre>
<p>Wow without the crazy characters it's just four zeroes. Yep that's a palindrome! I'll update our code.</p>
<pre><code class="language-js">function palindrome(str) {
const alphanumericOnly = str
// 1) Lowercase the input
.toLowerCase()
// 2) Strip out non-alphanumeric characters
.match(/[a-z0-9]/g);
// 3) return string === reversedString
}
palindrome("eye");
</code></pre>
<h2 id="executingstep3comparestringtoitsreverse">Executing Step 3 - Compare String to Its Reverse</h2>
<p>Remember that <code>.match</code> returns an <em>array</em> of matches. How can we use that array to compare our cleaned up string to its reversed self?</p>
<h3 id="arrayreverse">Array.reverse</h3>
<p>The <code>reverse</code> method, true to its name, reverses an array's elements.</p>
<pre><code class="language-js">[1, 2, 3].reverse();
// [3, 2, 1]
</code></pre>
<p>This looks pretty useful! After matching all alphanumeric characters, we can flip that array and see if everything still lines up.</p>
<p>But comparing arrays isn't as straightforward as comparing strings, so how can we turn that array of matches back into a string?</p>
<h3 id="arrayjoin">Array.join</h3>
<p>The <code>join</code> method stitches your array's elements together into a string, optionally taking a <em>separator</em>.</p>
<p>The separator is the first parameter, you don't need to supply it. It'll basically "stringify" your array.</p>
<pre><code class="language-js">[1, 2, 3].join();
// "1,2,3"
</code></pre>
<p>If you do supply it, the separator goes in between each element.</p>
<pre><code class="language-js">[1, 2, 3].join('my separator');
// "1my separator2my separator3"
[1, 2, 3].join(',');
// "1,2,3"
[1, 2, 3].join(', ');
// "1, 2, 3"
[1, 2, 3].join('sandwich');
// "1sandwich2sandwich3"
</code></pre>
<p>Let's see how this would fit into our algorithm.</p>
<pre><code class="language-js">'Ra_Ce_Ca_r   -_-'
.toLowerCase()
.match(/[a-z0-9]/g)
.join('');
// "racecar"
</code></pre>
<p>See how doing all that simply recreates the original string without punctuation or mixed casing?</p>
<p>What if we reverse it?</p>
<pre><code class="language-js">'Ra_Ce_Ca_r   -_-'
.toLowerCase()
.match(/[a-z0-9]/g)
// flip it around
.reverse()
.join('');
// "racecar"
</code></pre>
<p>That's a palindrome! My name would not be a palindrome.</p>
<pre><code class="language-js">'yazeed'
.toLowerCase()
.match(/[a-z0-9]/g)
// flip it around
.reverse()
.join('');
// "deezay"
</code></pre>
<p>Seems we have our solution. Let's see the final code.</p>
<h2 id="thefinalcode">The Final Code</h2>
<pre><code class="language-js">function palindrome(str) {
const alphanumericOnly = str
// 1) Lowercase the input
.toLowerCase()
// 2) Strip out non-alphanumeric characters
.match(/[a-z0-9]/g);
// 3) return string === reversedString
return alphanumericOnly.join('') ===
alphanumericOnly.reverse().join('');
}
palindrome("eye");
</code></pre>
<p>Input this and run the tests, and we're good!</p>
<p><img src="https://www.freecodecamp.org/news/content/images/2019/09/all-tests-passed.png" alt="all-tests-passed"></p>
<h2 id="summary">Summary</h2>
<ol>
<li>Lowercase input via <code>str.toLowerCase()</code>;</li>
<li>Match all alphanumeric characters using a regular expression via <code>str.match(/[a-z0-9]/g)</code>.</li>
<li>Use <code>Array.reverse</code> and <code>Array.join</code> on the alphanumeric matches to compare the original against its reversed self. If they're identical we get back <code>true</code>, otherwise we get back <code>false</code>!</li>
</ol>
<h2 id="thanksforreading">Thanks for reading</h2>
<p>If you'd like a video with even more detail, <a href="https://youtu.be/XV5OCibNpLI">here's the YouTube version again</a>!</p>
<p>For more content like this, check out <a href="https://yazeedb.com">https://yazeedb.com</a>. And please let me know what else you'd like to see! <a href="https://twitter.com/yazeedBee">My DMs are open on Twitter.</a></p>
<p>Until next time!</p>
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
