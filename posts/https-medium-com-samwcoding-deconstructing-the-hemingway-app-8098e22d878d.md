---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9ca1be740569d1a4ca5067.jpg"
tags: [JavaScript]
description: I’ve been using the Hemingway App to try to improve my posts.
author: "Milad E. Fahmy"
title: "How I reverse-engineered the Hemingway Editor - a popular writing app - and built my own from a beach in Thailand"
created: "2021-08-15T19:33:27+02:00"
modified: "2021-08-15T19:33:27+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-writing tag-tech tag-english tag-lessons-learned ">
<header class="post-full-header">
<h1 class="post-full-title">How I reverse-engineered the Hemingway Editor - a popular writing app - and built my own from a beach in Thailand</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9ca1be740569d1a4ca5067.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9ca1be740569d1a4ca5067.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9ca1be740569d1a4ca5067.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9ca1be740569d1a4ca5067.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9ca1be740569d1a4ca5067.jpg" alt="How I reverse-engineered the  Hemingway Editor - a popular writing app - and built my own from a beach in Thailand">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>I’ve been using the Hemingway App to try to improve my posts. At the same time I’ve been trying to find ideas for small projects. I came up with the idea of integrating a Hemingway style editor into a markdown editor. So I needed to find out how Hemingway worked!</p>
<figcaption>A screenshot of the Hemingway Editor</figcaption>
</figure>
<h3 id="getting-the-logic">Getting the Logic</h3>
<p>I had no idea how the app worked when I first started. It could have sent the text to a server to calculate the complexity of the writing, but I expected it to be calculated client side.</p>
<p>Opening developer tools in Chrome ( Control + Shift + I or F12 on Windows/Linux, Command + Option + I on Mac) and navigating to <em>Sources </em>provided the answers<em>.</em> There, I found the file I was looking for: <strong>hemingway3-web.js.</strong></p>
<figcaption>Minified file on the top, Formatted file on the bottom. What a difference it makes!</figcaption>
</figure>
<p>This code is in a minified form, which is a pain to read and understand. To solve this, I copied the file into VS Code and formatted the document (<em>Control</em>+ <em>Shift</em> + <em>I</em> for VS Code). This changes a 3-line file into a 4859-line file with everything formatted nicely.</p>
<h3 id="exploring-the-code">Exploring the Code</h3>
<p>I started to look through the file for anything that I could make sense of. The start of the file contained immediately invoked function expressions. I had little idea of what was happening.</p><pre><code class="language-js">!function(e) {
function t(r) {
if (n[r])
return n[r].exports;
var o = n[r] = {
exports: {},
id: r,
loaded: !1
};
...</code></pre>
<p>This continued for about 200 lines before I decided that I was probably reading the code to make the page run (React?). I started skimming through the rest of the code until I found something I could understand. (I missed quite a lot that I would later find through finding function calls and looking at the function definition).</p>
<p>The first bit of code I understood was all the way at line 3496!</p><pre><code>getTokens: function(e) {
var t = this.getAdverbs(e),
n = this.getQualifiers(e),
r = this.getPassiveVoices(e),
o = this.getComplexWords(e);
return [].concat(t, n, r, o).sort(function(e, t) {
return e.startIndex - t.startIndex
})
}</code></pre>
<p>And amazingly, all these functions were defined right below. Now I knew how the app defined adverbs, qualifiers, passive voice, and complex words. Some of them are very simple. The app checks each word against lists of qualifiers, complex words, and passive voice phrases. <code>this.getAdverbs </code>filters words based on whether they end in ‘ly’ and then checks whether it’s in the list of non-adverb words ending in ‘ly’.</p>
<p>The next bit of useful code was the implementation of highlighting words or sentences. In this code there is a line:</p><pre><code class="language-js">e.highlight.hardSentences += h</code></pre>
<p>‘hardSentences’ was something I could understand, something with meaning. I then searched the file for <code>hardSentences</code> and got 13 matches. This lead to a line that calculated the readability stats:</p><pre><code class="language-js">n.stats.readability === i.default.readability.hard &amp;&amp; (e.hardSentences += 1),
n.stats.readability === i.default.readability.veryHard &amp;&amp; (e.veryHardSentences += 1)</code></pre>
<p>Now I knew that there was a <code>readability</code> parameter in both <code>stats</code> and <code>i.default</code>. Searching the file, I got 40 matches. One of those matches was a <code>getReadabilityStyle</code> function, where they grade your writing.</p>
<p>There are three levels: normal, hard and very hard.</p><pre><code class="language-js">t = e.words;
n = e.readingLevel;
return t &lt; 14
? i.default.readability.normal
: n &gt;= 10 &amp;&amp; n &lt; 14
? i.default.readability.hard
: n &gt;= 14 ? i.default.readability.veryHard
: i.default.readability.normal;</code></pre>
<p>“Normal” is less than 14 words, “hard” is 10–14 words, and “very hard” is more than 14 words.</p>
<p>Now to find how to calculate the reading level.</p>
<p>I spent a while here trying to find any notion of how to calculate the reading level. I found it 4 lines above the <code>getReadabilityStyle</code> function.</p><pre><code class="language-js">e = letters in paragraph;
t = words in paragraph;
n = sentences in paragraph;
getReadingLevel: function(e, t, n) {
if (0 === t
0 === n) return 0;
var r = Math.round(4.71 * (e / t) + 0.5 * (t / n) - 21.43);
return r &lt;= 0 ? 0 : r;
}</code></pre>
<p>That means your score is 4.71 * average word length + 0.5 * average sentence length -21.43. That’s it. That is how Hemingway grades each of your sentences.</p>
<h3 id="other-interesting-things-i-found">Other Interesting Things I Found</h3>
<ul>
<li>The highlight commentary (information about your writing on the right hand side) is a big switch statement. Ternary statements are used to change the response based on how well you’ve written.</li>
<li>The grading goes up to 16 before it’s classed as “Post-Graduate” level.</li>
</ul>
<h3 id="what-i-m-going-to-do-with-this">What I’m going to do with this</h3>
<p>I am planning to make a basic website and apply what I’ve learned from deconstructing the Hemingway app. Nothing fancy, more as an exercise for implementing some logic. I’ve built a Markdown previewer before, so I might also try to create a writing application with the highlighting and scoring system.</p>
<h1 id="creating-my-own-hemingway-app">Creating My Own Hemingway App</h1>
<p>Having figured out how the Hemingway app works, I then decided to implement what I had learnt to make a much simplified version.</p>
<p>I wanted to make sure that I was keeping it basic, focusing on the logic more that the styling. I chose to go with a simple text box entry box.</p>
<h4 id="challenges">Challenges</h4>
<p>1. How to assure performance. Rescanning the whole document on every key press could be very computationally expensive. This could result in UX blocking which is obviously not what we want.</p>
<p>2. How to split up the text into paragraphs, sentences and words for highlighting.</p>
<h4 id="possible-solutions">Possible Solutions</h4>
<ul>
<li>Only rescan the paragraphs that change. Do this by counting the number of paragraphs and comparing that to the document before the change. Use this to find the paragraph that has changed or the new paragraph and only scan that one.</li>
<li>Have a button to scan the document. This massively reduces the calls of the scanning function.</li>
</ul>
<p>2. Use what I learnt from Hemingway — every paragraph is a &lt;p&gt; and any sentences or words that need highlighting are wrapped in an internal &lt;span&gt; with the necessary class.</p>
<h3 id="building-the-app">Building the App</h3>
<p>Recently I’ve read a lot of articles about building a Minimum Viable Product (MVP) so I decided that I would run this little project the same. This meant keeping everything simple. I decided to go with an input box, a button to scan and an output area.</p>
<p>This was all very easy to set up in my index.html file.</p><pre><code class="language-html">&lt;link rel=”stylesheet” href=”index.css”&gt;
&lt;title&gt;Fake Hemingway&lt;/title&gt;
&lt;div&gt;
&lt;h1&gt;Fake Hemingway&lt;/h1&gt;
&lt;textarea name=”” id=”text-area” rows=”10"&gt;&lt;/textarea&gt;
&lt;button onclick=”format()”&gt;Test Me&lt;/button&gt;
&lt;div id=”output”&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;script src=”index.js”&gt;&lt;/script&gt;</code></pre>
<p>Now to start on the interesting part. Now to get the Javascript working.</p>
<p>The first thing to do was to render the text from the text box into the output area. This involves finding the input text and setting the output’s inner html to that text.</p><pre><code class="language-js">function format() {
let inputArea = document.getElementById(“text-area”);
let text = inputArea.value;
let outputArea = document.getElementById(“output”);
outputArea.innerHTML = text;
}</code></pre>
<p>Next is getting the text split into paragraphs. This is accomplished by splitting the text by ‘\n’ and putting each of these into a &lt;p&gt; tag. To do this we can map over the array of paragraphs, putting them in between &lt;p&gt; tags. Using template strings makes doing this very easy.</p><pre><code class="language-js">let paragraphs = text.split(“\n”);
let inParagraphs = paragraphs.map(paragraph =&gt; `&lt;p&gt;${paragraph}&lt;/p&gt;`);
outputArea.innerHTML = inParagraphs.join(“ “);</code></pre>
<p>Whilst I was working though that, I was becoming annoyed having to copy and paste the test text into the text box. To solve this, I implemented an Immediately Invoked Function Expression (IIFE) to populate the text box when the web page renders.</p><pre><code class="language-js">(function start() {
let inputArea = document.getElementById(“text-area”);
let text = `The app highlights lengthy, …. compose something new.`;
inputArea.value = text;
})();</code></pre>
<p>Now the text box was pre-populated with the test text whenever you load or refresh the web page. Much simpler.</p>
<h3 id="highlighting">Highlighting</h3>
<p>Now that I was rendering the text well and I was testing on a consistent text, I had to work on the highlighting. The first type of highlighting I decided to tackle was the hard and very hard sentence highlighting.</p>
<p>The first stage of this is to loop over every paragraph and split them into an array of sentences. I did this using a `split()` function, splitting on every full stop with a space after it.</p><pre><code class="language-js">let sentences = paragraph.split(‘. ’);</code></pre>
<p>From Heminway I knew that I needed to calculate the number of words and level of each of the sentences. The level of the sentence is dependant on the average length of words and the average words per sentence. Here is how I calculated the number of words and the total words per sentence.</p><pre><code class="language-js">let words = sentence.split(“ “).length;
let letters = sentence.split(“ “).join(“”).length;</code></pre>
<p>Using these numbers, I could use the equation that I found in the Hemingway app.</p><pre><code class="language-js">let level = Math.round(4.71 * (letters / words) + 0.5 * words / sentences — 21.43);</code></pre>
<p>With the level and number of words for each of the sentences, set their difficulty level.</p><pre><code class="language-js">if (words &lt; 14) {
return sentence;
} else if (level &gt;= 10 &amp;&amp; level &lt; 14) {
return `&lt;span class=”hardSentence”&gt;${sentence}&lt;/span&gt;`;
} else if (level &gt;= 14) {
return `&lt;span class=”veryHardSentence”&gt;${sentence}&lt;/span&gt;`;
} else {
return sentence;
}</code></pre>
<p>This code says that if a sentence is longer than 14 words and has a level of 10 to 14 then its hard, if its longer than 14 words and has a level of 14 or up then its very hard. I used template strings again but include a class in the span tags. This is how I’m going to define the highlighting.</p>
<p>The CSS file is really simple; it just has each of the classes (adverb, passive, hardSentence) and sets their background colour. I took the exact colours from the Hemingway app.</p>
<p>Once the sentences have been returned, I join them all together to make each of the paragraphs.</p>
<p>At this point, I realised that there were a few problems in my code.</p>
<ul>
<li>There were no full stops. When I split the paragraphs into sentences, I had removed all of the full stops.</li>
<li>The numbers of letters in the sentence included the commas, dashes, colons and semi-colons.</li>
</ul>
<p>My first solution was very primitive but it worked. I used split(‘symbol’) and join(‘’) to remove the punctuation and then appended ‘.’ onto the end. Whist it worked, I searched for a better solution. Although I don’t have much experience using regex, I knew that it would be the best solution. After some Googling I found a much more elegant solution.</p><pre><code class="language-js">let cleanSentence = sent.replace(/[^a-z0–9. ]/gi, “”) + “.”;</code></pre>
<p>With this done, I had a partially working product.</p>
<figcaption>Hard sentence highlighting</figcaption>
</figure>
<p>The next thing I decided to tackle was the adverbs. To find an adverb, Hemingway just finds words that end in ‘ly’ and then checks that it isn’t on a list of non-adverb ‘ly’ words. It would be bad if ‘apply’ or ‘Italy’ were tagged as adverbs.</p>
<p>To find these words, I took the sentences and split them into an arary of words. I mapped over this array and used an IF statement.</p><pre><code class="language-js">if(word.match(/ly$/) &amp;&amp;, !lyWords[word] ){
return `&lt;span class=”adverb”&gt;${word}&lt;/span&gt;`;
} else {
return word
};</code></pre>
<p>Whist this worked most of the time, I found a few exceptions. If a word was followed by a punctuation mark then it didn’t match ending with ‘ly’. For example, “The crocodile glided elegantly; it’s prey unaware” would have the word ‘elegantly;’ in the array. To solve this I reused the <code>.replace(/^a-z0-9. ]/gi,””)</code> functionality to clean each of the words.</p>
<p>Another exception was if the word was capitalised, which was easily solved by calling <code>toLowerCase()</code>on the string.</p>
<figcaption>Adverbs working</figcaption>
</figure>
<p>Now I had a result that worked with adverbs and highlighting individual words. I then implemented a very similar method for complex and qualifying words. That was when I realised that I was no longer just looking for individual words, I was looking for phrases. I had to change my approach from checking if each word was in the list to seeing if the sentence contained each of the phrases.</p>
<p>To do this I used the <code>.indexOf()</code> function on the sentences. If there was an index of the word or phrase, I inserted an opening span tag at that index and then the closing span tag after the key length.</p><pre><code class="language-js">let qualifiers = getQualifyingWords();
let wordList = Object.keys(qualifiers);
wordList.forEach(key =&gt; {
let index = sentence.toLowerCase().indexOf(key);
if (index &gt;= 0) {
sentence =
sentence.slice(0, index) +
‘&lt;span class=”qualifier”&gt;’ +
sentence.slice(index, index + key.length) +
“&lt;/span&gt;” +
sentence.slice(index + key.length);
}
});</code></pre>
<p>With that working, it’s starting to look more and more like the Hemingway editor.</p>
<figcaption>Getting complex phrases and qualifiers working</figcaption>
</figure>
<p>The last piece of the highlighting puzzle to implement was the passive voice. Hemingway used a 30 line function to find all of the passive phrases. I chose to use most of the logic that Hemingway implemented, but order the process differently. They looked to find any words that were in a list (is, are, was, were, be, been, being) and then checked whether the next word ended in ‘ed’.</p>
<p>I looped though each of the words in a sentence and checked if they ended in ‘ed’. For every ‘ed’ word I found, I checked whether the previous word was in the list of pre-words. This seemed much simpler, but may be less performant.</p>
<p>With that working I had an app that highlighted everything I wanted. This is my MVP.</p>
<figcaption>All the highlighting working</figcaption>
</figure>
<h3 id="then-i-hit-a-problem">Then I hit a problem</h3>
<p>As I was writing this post I realised that there were two huge bugs in my code.</p><pre><code class="language-js">// from getQualifier and getComplex
let index = sentence.toLowerCase().indexOf(key);
// from getPassive
let index = words.indexOf(match);</code></pre>
<p>These will only ever find the first instance of the key or match. Here is an example of the results this code will produce.</p>
<figcaption>Code with bugs&nbsp;in</figcaption>
</figure>
<p>‘Perhaps’ and ‘been marked’ should have been highlighted twice each but they aren’t.</p>
<p>To fix the bug in getQualifier and getComplex, I decided to use recursion. I created a <code>findAndSpan </code>function which uses .<code>indexOf() </code>to find the first instance of the word or phrase. It splits the sentence into 3 parts: before the phrase, the phrase, after the phrase. The recursion works by passing the ‘after the phrase’ string back into the function. This will continue until there are no more instances of the phrase, where the string will just be passed back.</p><pre><code class="language-js">function findAndSpan(sentence, string, type) {
let index = sentence.toLowerCase().indexOf(key);
if (index &gt;= 0) {
sentence =
sentence.slice(0, index) +
`&lt;span class="${type}"&gt;` +
sentence.slice(index, index + key.length) +
"&lt;/span&gt;" +
findAndSpan(
sentence.slice(index + key.length),
key,
type);
}
return sentence;
}</code></pre>
<p>Something very similar had to be done for the passive voice. The recursion was in an almost identical pattern, passing the leftover array items instead of the leftover string. The result of the recursion call was spread into an array that was then returned. Now the app can deal with repeated adverbs, qualifiers, complex phrases and passive voice uses.</p>
<h3 id="statistics-counter">Statistics Counter</h3>
<p>The last thing that I wanted to get working was the nice line of boxes informing you on how many adverbs or complex words you’d used.</p>
<p>To store the data I created an object with keys for each of the parameters I wanted to count. I started by having this variable as a global variable but knew I would have to change that later.</p>
<p>Now I had to populate the values. This was done by incrementing the value every time it was found.</p><pre><code class="language-js">data.sentences += sentence.length
or
data.adverbs += 1</code></pre>
<p>The values needed to be reset every time the scan was run to make sure that values didn’t continuously increase.</p>
<p>With the values I needed, I had to get them rendering on the screen. I altered the structure of the html file so that the input box and output area were in a div on the left, leaving a right div for the counters. These counters are empty divs with an appropriate id and class as well as a ‘counter’ class.</p><pre><code class="language-html">&lt;div id=”adverb” class=”adverb counter”&gt;&lt;/div&gt;
&lt;div id=”passive” class=”passive counter”&gt;&lt;/div&gt;
&lt;div id=”complex” class=”complex counter”&gt;&lt;/div&gt;
&lt;div id=”hardSentence” class=”hardSentence counter”&gt;&lt;/div&gt;
&lt;div id=”veryHardSentence” class=”veryHardSentence counter”&gt;&lt;/div&gt;</code></pre>
<p>With these divs, I used document.querySelector to set the inner html for each of the counters using the data that had been collected. With a little bit of styling of the ‘counter’ class, the web app was complete. <a href="https://samwsoftware.github.io/Projects/hemingway/">Try it out here</a> or look at <a href="https://github.com/SamWSoftware/Projects/tree/master/hemingway">my code here.</a></p>
<figcaption>The completed app</figcaption>
</figure>
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
