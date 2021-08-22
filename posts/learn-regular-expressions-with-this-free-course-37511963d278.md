---
card: "https://cdn-media-1.freecodecamp.org/images/1*Sg2Vdih6v1wDWRPtgnX0DA.png"
tags: [Software Development]
description: by Beau Carnes
author: "Milad E. Fahmy"
title: "Learn Regular Expressions with this free course"
created: "2021-08-15T19:38:11+02:00"
modified: "2021-08-15T19:38:11+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-software-development tag-programming tag-javascript tag-software tag-regex ">
<header class="post-full-header">
<h1 class="post-full-title">Learn Regular Expressions with this free course</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*Sg2Vdih6v1wDWRPtgnX0DA.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*Sg2Vdih6v1wDWRPtgnX0DA.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*Sg2Vdih6v1wDWRPtgnX0DA.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*Sg2Vdih6v1wDWRPtgnX0DA.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*Sg2Vdih6v1wDWRPtgnX0DA.png" alt="Learn Regular Expressions with this free course">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Beau Carnes</p>
<h1 id="learn-regular-expressions-with-this-free-course">Learn Regular Expressions with this free course</h1>
<blockquote>“Some people, when confronted with a problem, think ‘I know, I’ll use regular expressions.’ Now they have two problems.” <em>-Jamie Zawinski</em></blockquote>
<p>For some people, using regular expressions can be a problem. But it doesn’t have to be a problem for you. This article is a full course on Regular Expressions.</p>
<h3 id="1-introduction">1. Introduction</h3>
<p>Regular Expressions, or just RegEx, are used in almost all programming languages to define a search pattern that can be used to search for things in a string.</p>
<p>I’ve developed a <a href="https://scrimba.com/g/gregularexpressions" rel="noopener">free, full video course</a> on Scrimba.com to teach the basics of regular expressions.</p>
<p>This article contains the course in written form. But if you would prefer to watch the video version with interactive lessons, you can check it out on <a href="https://scrimba.com/g/gregularexpressions" rel="noopener">Scrimba</a>. The sections in this article correspond to the sections in the Scimba course.</p>
<p>This course follows along with the <a href="https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/regular-expressions" rel="noopener">RegEx</a> curriculum at freeCodeCamp.org. You can check that out for coding challenges and to earn a certificate.</p>
<p>These lessons focus on using RegEx in JavaScript, but the principles apply in many other programming languages you might choose to use. If you don’t already know basic JavaScript, it could be helpful if you cover it a bit first. I also have a basic JavaScript course that you can access on <a href="https://scrimba.com/p/pPgdYTV/cEv4Lh6" rel="noopener">Scrimba</a> and on the <a href="https://www.youtube.com/watch?v=PkZNo7MFNFg" rel="noopener">freeCodeCamp.org YouTube channel</a>.</p>
<p>So let’s get started! You’ll be saving the day in no time. ?</p>
<figcaption>From <a href="https://xkcd.com/208/" rel="noopener" target="_blank" title="">https://xkcd.com/208/</a></figcaption>
</figure>
<h3 id="2-using-the-test-method">2. Using the Test Method</h3>
<p>To match parts of strings using RegEx, we need to create patterns that help you to do that matching. We can indicate that something is a RegEx pattern by putting the pattern between slashes <code>/</code>, like so <code>/pattern-we-want-to-match/</code>.</p>
<p>Let’s look at an example:</p><pre><code>// We want to check the following sentencelet sentence = "The dog chased the cat."</code></pre><pre><code>// and this is the pattern we want to match.let regex = /the/</code></pre>
<p>Notice how we use <code>/the/</code> to indicate that we are looking for “the” in our <code>sentence</code>.</p>
<p>We can use RegEx <code>test()</code> method to tell if a pattern is present in a string or not.</p><pre><code>// String we want to testlet myString = "Hello, World!";</code></pre><pre><code>// Pattern we want to findlet myRegex = /Hello/;</code></pre><pre><code>// result is now truelet result = myRegex.test(myString);</code></pre>
<h3 id="3-match-literal-strings">3. Match Literal Strings</h3>
<p>Let’s now find Waldo.</p><pre><code>let waldoIsHiding = "Somewhere Waldo is hiding in this text.";let waldoRegex = /Waldo/;</code></pre><pre><code>// test() returns true, so result is now also truelet result = waldoRegex.test(waldoIsHiding);</code></pre>
<p>Note that in this example <code>waldoRegex</code> is case sensitive, so if we were to write <code>/waldo/</code> with a lowercase ‘w’, then our <code>result</code> would be false.</p>
<h3 id="4-match-a-literal-string-with-different-possibilities">4. Match a Literal String with Different Possibilities</h3>
<p>RegEx also has <code>OR</code> operator which is <code>|</code> character.</p><pre><code>let petString = "James has a pet cat.";</code></pre><pre><code>// We can now try to find if either of the words are in the sentencelet petRegex = /dog|cat|bird|fish/;</code></pre><pre><code>let result = petRegex.test(petString);</code></pre>
<h3 id="5-ignore-case-while-matching">5. Ignore Case While Matching</h3>
<p>So far, we have looked at patterns when the case of the letters mattered. How can we make our RegEx patterns to be case insensitive?</p>
<p>To ignore case we can do it by adding the <code>i</code> flag at the end of a pattern, like so <code>/some-pattern/i</code>.</p><pre><code>let myString = "freeCodeCamp";</code></pre><pre><code>// We ignore case by using 'i' flaglet fccRegex = /freecodecamp/i;</code></pre><pre><code>// result is truelet result = fccRegex.test(myString);</code></pre>
<h3 id="6-extract-matches">6. Extract Matches</h3>
<p>When we want to extract the matched value we can use <code>match()</code> method.</p><pre><code>let extractStr = "Extract the word 'coding' from this string.";</code></pre><pre><code>let codingRegex = /coding/;</code></pre><pre><code>let result = extractStr.match(codingRegex);</code></pre><pre><code>console.log(result);</code></pre><pre><code>// Terminal will show: // &gt; ["coding"]</code></pre>
<h3 id="7-find-more-than-the-first-match">7. Find More Than the First Match</h3>
<p>Now when we know how to extract one value and it’s also possible to extract multiple values using the<code>g</code> flag</p><pre><code>let testStr = "Repeat, Repeat, Repeat";</code></pre><pre><code>let ourRegex = /Repeat/g;</code></pre><pre><code>testStr.match(ourRegex); // returns ["Repeat", "Repeat", "Repeat"]</code></pre>
<p>We can also combine the<code>g</code> flag with the<code>i</code> flag, to extract multiple matches and ignore casing.</p><pre><code>let twinkleStar = "Twinkle, twinkle, little star";</code></pre><pre><code>let starRegex = /twinkle/ig;// writing /twinkle/gi would have the same result.</code></pre><pre><code>let result = twinkleStar.match(starRegex);</code></pre><pre><code>console.log(result);</code></pre><pre><code>// Terminal will show: // &amp;gt; ["Twinkle", "twinkle"]</code></pre>
<h3 id="9-match-single-character-with-multiple-possibilities">9. Match Single Character with Multiple Possibilities</h3>
<p>Matching any character is nice, but what if we want to restrict the matching to a predefined set of characters? We can do by using <code>[]</code> inside our RegEx.</p>
<p>If we have <code>/b[aiu]g/</code>, it means that we can match ‘bag’, ‘big’ and ‘bug’.</p>
<p>If we want to extract all the vowels from a sentence, this is how we can do it using RegEx.</p><pre><code>let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";</code></pre><pre><code>let vowelRegex = /[aeiou]/ig;</code></pre><pre><code>let result = quoteSample.match(vowelRegex);</code></pre>
<h3 id="10-match-letters-of-the-alphabet">10. Match Letters of the Alphabet</h3>
<p>But what if we want to match a range of letters? Sure, let’s do that.</p><pre><code>let quoteSample = "The quick brown fox jumps over the lazy dog.";</code></pre><pre><code>// We can match all the letters from 'a' to 'z', ignoring casing. let alphabetRegex = /[a-z]/ig;</code></pre><pre><code>let result = quoteSample.match(alphabetRegex);</code></pre>
<h3 id="11-match-numbers-and-letters-of-the-alphabet">11. Match Numbers and Letters of the Alphabet</h3>
<p>Letters are good, but what if we also want numbers?</p><pre><code>let quoteSample = "Blueberry 3.141592653s are delicious.";</code></pre><pre><code>// match numbers between 2 and 6 (both inclusive), // and letters between 'h' and 's'. let myRegex = /[2-6h-s]/ig;</code></pre><pre><code>let result = quoteSample.match(myRegex);</code></pre>
<h3 id="12-match-single-characters-not-specified">12. Match Single Characters Not Specified</h3>
<p>Sometimes it’s easier to specify characters that you don’t want to watch. These are called ‘Negated Characters’ and in RegEx you can do it by using <code>^</code>.</p><pre><code>let quoteSample = "3 blind mice.";</code></pre><pre><code>// Match everything that is not a number or a vowel. let myRegex = /[^0-9aeiou]/ig;</code></pre><pre><code>let result = quoteSample.match(myRegex);// Returns [" ", "b", "l", "n", "d", " ", "m", "c", "."]</code></pre>
<h3 id="13-match-characters-that-occur-one-or-more-times">13. Match Characters that Occur One or More Times</h3>
<p>If you want to match a characters that occurs one or more times, you can use <code>+</code>.</p><pre><code>let difficultSpelling = "Mississippi";</code></pre><pre><code>let myRegex = /s+/g;</code></pre><pre><code>let result = difficultSpelling.match(myRegex);// Returns ["ss", "ss"]</code></pre>
<h3 id="14-match-characters-that-occur-zero-or-more-times">14. Match Characters that Occur Zero or More Times</h3>
<p>There is also a <code>*</code> RegEx quantifier. This one matches even 0 occurrences of a character. Why might this be useful? Most of the time it’s usually in combination with other characters. Let’s look at an example.</p><pre><code>let soccerWord = "gooooooooal!";</code></pre><pre><code>let gPhrase = "gut feeling";</code></pre><pre><code>let oPhrase = "over the moon";</code></pre><pre><code>// We are trying to match 'g', 'go', 'goo', 'gooo' and so on. let goRegex = /go*/;</code></pre><pre><code>soccerWord.match(goRegex); // Returns ["goooooooo"]</code></pre><pre><code>gPhrase.match(goRegex); // Returns ["g"]</code></pre><pre><code>oPhrase.match(goRegex); // Returns null</code></pre>
<h3 id="15-find-characters-with-lazy-matching">15. Find Characters with Lazy Matching</h3>
<p>Sometimes your pattern matches can have more than one outcome. For example, let’s say I’m looking for a pattern in a word <code>titanic</code> and my matched values must begin with a ‘t’ and end with an ‘i’. My possible results are ‘titani’ and ‘ti’.</p>
<p>This is why RegEx has a concepts of ‘Greedy Match’ and ‘Lazy Match’.</p>
<p>Greedy match finds <em>the</em> <em>longest possible match</em> of the string that fits the RegEx pattern, this is a default RegEx match:</p><pre><code>let string = "titanic";</code></pre><pre><code>let regex = /t[a-z]*i/;</code></pre><pre><code>string.match(regex);// Returns ["titani"]</code></pre>
<p>Lazy match finds <em>the</em> <em>shortest possible match</em> of the string that fits the RegEx pattern and to use it we need to use <code>?</code>:</p><pre><code>let string = "titanic";</code></pre><pre><code>let regex = /t[a-z]*?i/;</code></pre><pre><code>string.match(regex);// Returns ["ti"]</code></pre>
<h3 id="16-find-one-or-more-criminals-in-a-hunt">16. Find One or More Criminals in a Hunt</h3>
<p>Now let’s have a look at a RegEx challenge. We need to find all the criminals (‘C’) in a crowd. We know that they always stay together and you need to need to write a RegEx that would find them.</p><pre><code>let crowd = 'P1P2P3P4P5P6CCCP7P8P9';</code></pre><pre><code>let reCriminals = /./; // Change this line</code></pre><pre><code>let matchedCriminals = crowd.match(reCriminals);</code></pre>
<p>You can find me walking through <a href="https://scrimba.com/p/peyvVAN/c3nEpta" rel="noopener">the solution in this Scrimba cast</a>.</p>
<h3 id="17-match-beginning-string-patterns">17. Match Beginning String Patterns</h3>
<p>RegEx also allows you to match patterns that are only at the beginning of a string. We’ve already talked about <code>^</code> creating a negating set. We can use the same symbol to find a match <em>only</em> at the beginning of a string.</p><pre><code>let calAndRicky = "Cal and Ricky both like racing.";</code></pre><pre><code>// Match 'Cal' only if it's at the beginning of a string. let calRegex = /^Cal/;</code></pre><pre><code>let result = calRegex.test(calAndRicky); // Returns true</code></pre><pre><code>let rickyAndCal = "Ricky and Cal both like racing.";</code></pre><pre><code>let result = calRegex.test(rickyAndCal); // Returns false</code></pre>
<h3 id="18-match-ending-string-patterns">18. Match Ending String Patterns</h3>
<p>What about matching a pattern at the end of a string? We can use <code>$</code> for that.</p><pre><code>let caboose = "The last car on a train is the caboose";</code></pre><pre><code>// Match 'caboose' if it's at the end of a string.let lastRegex = /caboose$/;</code></pre><pre><code>let result = lastRegex.test(caboose); // Returns true</code></pre>
<h3 id="19-match-all-letters-and-numbers">19. Match All Letters and Numbers</h3>
<p>Earlier in parts 10 and 11 I showed you how we can match ranges of letters and numbers. If I asked you to write a RegEx that matches all the letters and numbers and ignore their cases you probably would have written something like <code>/[a-z0-9]/gi</code> and that’s exactly right. But it’s a bit too long.</p>
<p>RegEx has something called <em>‘Shorthand Character Classes’</em>, which is basically a shorthand for common RegEx expression. For matching all letters and numbers we can use <code>\w</code> and we also get underscore <code>_</code> matched as a bonus.</p><pre><code>let quoteSample = "The five boxing wizards jump quickly.";</code></pre><pre><code>// Same as /[a-z0-9_]/gi to match a-z (ignore case), 0-9 and _let alphabetRegexV2 = /\w/g;</code></pre><pre><code>// The length of all the characters in a string// excluding spaces and the period. let result = quoteSample.match(alphabetRegexV2).length;</code></pre><pre><code>// Returns 31</code></pre>
<h3 id="20-match-everything-but-letters-and-numbers">20. Match Everything But Letters and Numbers</h3>
<p>If we want to do the opposite and match everything that is not a letter or a number (also exclude underscore <code>_</code>), we can use <code>\W</code></p><pre><code>let quoteSample = "The five boxing wizards jump quickly.";</code></pre><pre><code>// Match spaces and the periodlet nonAlphabetRegex = /\W/g;</code></pre><pre><code>let result = quoteSample.match(nonAlphabetRegex).length;</code></pre><pre><code>// Returns 6</code></pre>
<h3 id="21-match-all-numbers">21. Match All Numbers</h3>
<p>Ok, what about if you want only numbers? Is there a shorthand character class for that? Sure, it’s <code>\d</code>.</p><pre><code>let numString = "Your sandwich will be $5.00";</code></pre><pre><code>// Match all the numberslet numRegex = /\d/g;</code></pre><pre><code>let result = numString.match(numRegex).length; // Returns 3</code></pre>
<h3 id="22-match-all-non-numbers">22. Match All Non-Numbers</h3>
<p>Would you like the opposite and match all the non-numbers? Use <code>\D</code></p><pre><code>let numString = "Your sandwich will be $5.00";</code></pre><pre><code>// Match everything that is not a numberlet noNumRegex = /\D/g;</code></pre><pre><code>let result = numString.match(noNumRegex).length; // Returns 24</code></pre>
<h3 id="23-restrict-possible-usernames">23. Restrict Possible Usernames</h3>
<p>So far so good! Well done for making it this far. RegEx can be tricky as it’s not the most easily readable way to code. Let’s now look at a very real-life example and make a username validator. In this case you have 3 requirements:</p>
<ul>
<li>If there are numbers, they must be at the end.</li>
<li>Letters can be lowercase and uppercase.</li>
<li>At least two characters long. Two-letter names can’t have numbers.</li>
</ul>
<p>Try to solve this on your own and if you find it difficult or just want to check the answer, <a href="https://scrimba.com/p/peyvVAN/cmb6nf9" rel="noopener">check out my solution.</a></p>
<h3 id="24-match-whitespace">24. Match Whitespace</h3>
<p>Can we match all the whitespaces? Of course, we can use a shorthand for that too and it’s <code>\s</code></p><pre><code>let sample = "Whitespace is important in separating words";</code></pre><pre><code>// Match all the whitespaceslet countWhiteSpace = /\s/g;</code></pre><pre><code>let result = sample.match(countWhiteSpace);</code></pre><pre><code>// Returns [" ", " ", " ", " ", " "]</code></pre>
<h3 id="25-match-non-whitespace-characters">25. Match Non-Whitespace Characters</h3>
<p>Can you guess how to match all non-whitespace characters? Well done, it’s <code>\S</code>!</p><pre><code>let sample = "Whitespace is important in separating words";</code></pre><pre><code>// Match all non-whitespace characterslet countWhiteSpace = /\S/g;</code></pre><pre><code>let result = sample.match(countWhiteSpace);</code></pre>
<h3 id="26-specify-upper-and-lower-number-of-matches">26. Specify Upper and Lower Number of Matches</h3>
<p>You can specify the lower and upper number of pattern matches with <em>‘Quantity Specifiers’. </em>They can be used with <code>{}</code> syntax, for example <code>{3,6}</code>, where <code>3</code> is the lower bound and <code>6</code> is the upper bound to be matched.</p><pre><code>let ohStr = "Ohhh no";</code></pre><pre><code>// We want to match 'Oh's that have 3-6 'h' characters in it. let ohRegex = /Oh{3,6} no/;</code></pre><pre><code>let result = ohRegex.test(ohStr); // Returns true</code></pre>
<h3 id="27-specify-only-the-lower-number-of-matches">27. Specify Only the Lower Number of Matches</h3>
<p>When we want to specify only the lower bound, we can do it by omitting the upper bound, for example to match at least three characters we can write <code>{3,}</code>. Notice that we still need a comma, even when we don’t specify the upper limit.</p><pre><code>let haStr = "Hazzzzah";</code></pre><pre><code>// Match a pattern that contains at least for 'z' characterslet haRegex = /z{4,}/;</code></pre><pre><code>let result = haRegex.test(haStr); // Returns true</code></pre>
<h3 id="28-specify-exact-number-of-matches">28. Specify Exact Number of Matches</h3>
<p>In the previous section I mentioned that we need a comma in <code>{3,}</code> when we specify only the lower bound. The reason is when you write <code>{3}</code> without a comma, it means that you are looking to match exactly 3 characters.</p><pre><code>let timStr = "Timmmmber";</code></pre><pre><code>// let timRegex = /Tim{4}ber/;</code></pre><pre><code>let result = timRegex.test(timStr); // Returns true</code></pre>
<h3 id="29-check-for-all-or-none">29. Check for All or None</h3>
<p>There are times when you might want to specify a possible existence of a character in your pattern. When a letter or a number is optional and we would use <code>?</code> for that.</p><pre><code>// We want to match both British and American English spellings // of the word 'favourite'</code></pre><pre><code>let favWord_US = "favorite";let favWord_GB = "favourite";</code></pre><pre><code>// We match both 'favorite' and 'favourite' // by specifying that 'u' character is optionallet favRegex = /favou?rite/; // Change this line</code></pre><pre><code>let result1 = favRegex.test(favWord_US); // Returns truelet result2 = favRegex.test(favWord_GB); // Returns true</code></pre>
<h3 id="30-positive-and-negative-lookahead">30. Positive and Negative Lookahead</h3>
<p>‘<em>Lookaheads</em>’ are patterns that tell your JS to lookahead to check for patterns further along. They are useful when you’re trying to search for multiple patterns in the same strings. There 2 types of lookaheads — positive and negative.</p>
<p>Positive lookahead uses <code>?=</code> syntax</p><pre><code>let quit = "qu";</code></pre><pre><code>// We match 'q' only if it has 'u' after it. let quRegex= /q(?=u)/;</code></pre><pre><code>quit.match(quRegex); // Returns ["q"]</code></pre>
<p>Negative lookahead uses <code>?!</code> syntax</p><pre><code>let noquit = "qt";</code></pre><pre><code>// We match 'q' only if there is no 'u' after it. let qRegex = /q(?!u)/;</code></pre><pre><code>noquit.match(qRegex); // Returns ["q"]</code></pre>
<h3 id="31-reuse-patterns-using-capture-groups">31. Reuse Patterns Using Capture Groups</h3>
<p>Let’s imagine we need to capture a repeating pattern.</p><pre><code>let repeatStr = "regex regex";</code></pre><pre><code>// We want to match letters followed by space and then letterslet repeatRegex = /(\w+)\s(\w+)/;</code></pre><pre><code>repeatRegex.test(repeatStr); // Returns true</code></pre>
<p>Instead of repeating <code>(\w+)</code> at the end we can tell RegEx to repeat the pattern, by using <code>\1</code>. So the same as above can be written again as:</p><pre><code>let repeatStr = "regex regex";</code></pre><pre><code>let repeatRegex = /(\w+)\s\1)/;</code></pre><pre><code>repeatRegex.test(repeatStr); // Returns true</code></pre>
<h3 id="32-use-capture-groups-to-search-and-replace">32. Use Capture Groups to Search and Replace</h3>
<p>When we find a match, it’s sometimes handy to replaced it with something else. We can use <code>replace()</code> method for that.</p><pre><code>let wrongText = "The sky is silver.";</code></pre><pre><code>let silverRegex = /silver/;</code></pre><pre><code>wrongText.replace(silverRegex, "blue");</code></pre><pre><code>// Returns "The sky is blue."</code></pre>
<h3 id="33-remove-whitespace-from-start-and-end">33. Remove Whitespace from Start and End</h3>
<p>Here’s a little challenge for you. Write a RegEx that would remove any whitespace around the string.</p><pre><code>let hello = "   Hello, World!  ";</code></pre><pre><code>let wsRegex = /change/; // Change this line</code></pre><pre><code>let result = hello; // Change this line</code></pre>
<p>If you get stuck or just want to check my solution, feel free to have a look at <a href="https://scrimba.com/p/peyvVAN/cZVvkH7" rel="noopener">the Scrimba cast where I solve this challenge</a>.</p>
<h3 id="34-conclusion">34. Conclusion</h3>
<p>Congratulations! You have finished this course! If you’d like to keep learning more, feel free to checkout <a href="https://www.youtube.com/playlist?list=PLWKjhJtqVAbleDe3_ZA8h3AO2rXar-q2V" rel="noopener">this YouTube playlist</a>, that has a lot of JavaScript projects you can create.</p>
<p>Keep learning and thanks for reading!</p>
<p>You are now ready to play regex golf. ?</p>
<figcaption>From <a href="https://xkcd.com/1313/" rel="noopener" target="_blank" title="">https://xkcd.com/1313/</a></figcaption>
</figure>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
