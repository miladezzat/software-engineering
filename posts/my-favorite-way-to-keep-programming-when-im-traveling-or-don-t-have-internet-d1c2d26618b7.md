---
card: "https://cdn-media-1.freecodecamp.org/images/0*5djL-YOSdGd_rK_x"
tags: [JavaScript]
description: "This is a short guide on sharpening your skills and keeping p"
author: "Milad E. Fahmy"
title: "My favorite way to keep programming when I’m traveling or don’t have internet"
created: "2021-08-16T10:10:11+02:00"
modified: "2021-08-16T10:10:11+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-personal-development tag-programming tag-web-development tag-tech ">
<header class="post-full-header">
<h1 class="post-full-title">My favorite way to keep programming when I’m traveling or don’t have internet</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/0*5djL-YOSdGd_rK_x 300w,
https://cdn-media-1.freecodecamp.org/images/0*5djL-YOSdGd_rK_x 600w,
https://cdn-media-1.freecodecamp.org/images/0*5djL-YOSdGd_rK_x 1000w,
https://cdn-media-1.freecodecamp.org/images/0*5djL-YOSdGd_rK_x 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/0*5djL-YOSdGd_rK_x" alt="My favorite way to keep programming when I’m traveling or don’t have internet">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>This is a short guide on sharpening your skills and keeping productive when in transit. And it doesn’t involve burying your face in a book.</p><h3 id="books-can-only-get-you-so-far">Books can only get you so far</h3><p>Now don’t get me wrong, I love a good programming book. Jon Duckett’s series on HTML, CSS, and JavaScript were the guiding beacons during my formative years as a Web Developer. Robert C Martin’s seminal tome Clean Code has its pages bent. It is misshapen through years of being wrung dry for each drop of information. Even Simon Holmes’ Getting MEAN, while now dated, had its time by my side in the local café. It was my companion as I created my first full-stack application.</p><p>With a little preparation, most of these books could’ve been used with no, or much more frighteningly, slow internet. Download the packages in advance. Get your local environments working. If the book’s comprehensive enough, you’ll likely make solid progress without needing Google, GitHub or StackOverflow.</p><p>On the flip-side, we as programmers thrive best when tasked with a challenge. Having an author walk us through solutions is nice, but it’s not enough. The best way for us to improve our problem-solving skills is to solve problems.</p><p>If you’re a professional programmer then you’re likely to be solving your fair share of problems on a day-to-day basis. If you’re a hobbyist then you might find pleasure from creating your own <a href="http://www.jsfuck.com/" rel="noopener">JSF**k</a> applications. Or even killing time by solving algorithm challenges online. It’s why sites like CodeWars or HackerRank are so popular.</p><p>The underlying problem with most of these, particularly the latter, is continuing when the internet breaks. Or without connection to begin with. Both are common scenarios as developers are becoming more nomadic. How do you kill time during your 12-hour flight from London to Shanghai, while still reaping the rewards gained from solving problems?</p><p>I have had the displeasure of being on such a long flight. There’s about enough space on said flight to prop your laptop on the foldout tray. Everything beyond that becomes a game of Tetris, trying to make your comfort and possessions fit in the limited space given to you on your budget flight. So you’ve got your laptop, headphones, jumper, snacks, and water all within arms reach? It’s starting to feel cramped, right? Try pulling out your 600 page 2-kilo programming book. Yeah, not gonna happen.</p><h3 id="the-silver-bullet">The silver bullet</h3><p>So how did I overcome this impediment? Well, I reimplemented the Lodash library.</p><p>Why did I choose a such an arbitrary task? There are many key reasons. Some I rationalized before taking on the challenge and others I discovered along the way. Here are some of the most notable:</p><ul><li>Each function feels like a miniature code challenge</li><li>The documentation is on a single HTML page, easy to download and view offline</li><li>It encourages looking inside the source code when stuck</li><li>It allows you to build your own suite of utility functions</li><li>It’s a library with no dependencies, which keeps things simple</li><li>You will get more familiar with your programming language of choice</li></ul><p>Let’s dive a bit more into each of these points.</p><h4 id="each-function-feels-like-a-code-challenge"><strong>Each function feels like a code challenge</strong></h4><p>As I mentioned earlier on, Codewars and HackerRack are two very popular programming challenge sites. For those unfamiliar, you’re given a programming task to complete within the built-in text-editor. When completed, you run your finished code against the curated suite of tests. The aim of the challenge is to get all tests passing.</p><p>It’s not difficult emulating this yourself. If anything, it’s a great way of improving your approach to TDD (test driven development). My general approach to reimplementing a function would be to stub out the method:</p><pre><code class="language-js">const concat = (arr, ...otherParams) =&gt; {
// if array is invalid throw error
// handle no input for second parameter
// add each item to a new array
// flatten 1 level if item is array
// return new array
};</code></pre><p>const concat = (arr, ...otherParams) =&gt; { &nbsp;// if array is invalid throw error &nbsp;// handle no input for second parameter &nbsp;// add each item to a new array &nbsp; &nbsp;// flatten 1 level if item is array &nbsp;// return new array};</p><p>The next step is to create my test suite with some assertions I’d expect my function to satisfy:</p><pre><code class="language-js">const concat = require('../concat');
describe('concat', () =&gt; {
it('should return the expect results with valid inputs', () =&gt; {
expect(concat([1, 2], [1], [2], 4939, 'DDD')).toEqual([1, 2, 1, 2, 4939, 'DDD']);
expect(concat([], null, 123)).toEqual([null, 123]);
});
it('should throw errors with invalid inputs', () =&gt; {
expect(() =&gt; concat(23, 23).toThrow(TypeError));
expect(() =&gt; concat([1, 2, 3], -1).toThrow(TypeError));
});
it('should correctly handle strange inputs', () =&gt; {
expect(concat([111], null, 'rum ham')).toEqual([111, null, 'rum ham']);
});
});</code></pre><p>Then I’d implement the code so the tests run successfully:</p><pre><code class="language-js">const { isValidArray } = require('../helpers');
const concat = (arr, ...otherParams) =&gt; {
if (!isValidArray(arr)) throw new Error('Argument is not a valid array');
if (otherParams.length === 0) return [];
const concatenatedArray = otherParams.reduce((acc, item) =&gt; {
if (isValidArray(item)) return [...acc, ...item];
return [...acc, item];
}, [...arr]);
return concatenatedArray
<pre><code class="language-js">branch(
test: (props: Object) =&gt; boolean,
left: HigherOrderComponent,
right: ?HigherOrderComponent
): HigherOrderComponent
</code></pre>
<p>Accepts a test function and two higher-order components. The test function is passed the props from the owner. If it returns true, the <code>left</code> higher-order component is applied to <code>BaseComponent</code>; otherwise, the <code>right</code> higher-order component is applied. If the <code>right</code> is not supplied, it will by default render the wrapped component.</p>
function concat() {
var length = arguments.length;
if (!length) {
return [];
}
var args = Array(length - 1),
array = arguments[0],
index = length;
while (index--) {
args[index - 1] = arguments[index];
}
return arrayPush(isArray(array) ? copyArray(array) : [array], baseFlatten(args, 1));
}</code></pre><p>You’ll learn new ways of achieving the same goals. Maybe their solutions are more efficient, maybe yours are. It’s still a great way to open your eyes to new paradigms and patterns.</p><h4 id="developing-your-own-utility-functions"><strong>Developing your own utility functions</strong></h4><p>Lodash gets a bad rep as a library that has a large footprint. Projects may need a small number of the utilities. We will still import the whole library as a dependency.</p><p>You could download the couple of functions that you use. Why not use the methods you spent 8 hours writing whilst flying over the Pacific Ocean? It might not be quite as robust. But you’ll always be reminded of your journey to Angular Fest Hawaii ’19 whenever you whip out your implementation of <code>_.memoize</code>.</p><h4 id="keep-things-simple"><strong>Keep things simple</strong></h4><p>Traveling’s draining and flying’s stressful. When feeling fatigued, any level of bureaucracy that sits in the way of any programming becomes a barrier. The idea is to choose a task that gets you coding with as little friction as possible.</p><p>I didn’t want to faff around with a bunch of random dependencies and messy vendor code when packed between two snorers on my overnight flight to Canada. It was a happy accident discovering that Lodash doesn’t rely on any external modules. The Lodash package itself is laid out simply. Each method has its own file, which may import a couple of base or utility methods.</p><h4 id="becoming-familiar-with-your-tools-of-choice"><strong>Becoming familiar with your tools of choice</strong></h4><p>If you’re reading this article, chances are you’re familiar with JavaScript. Like most other modern programming languages, JavaScript receives semi-regular updates. These updates give you access to some new features. Implementing a library might take you to corners of your chosen language that you’ve never been before. It happened to me.</p><p>In fact, I recently came across some of JavaScript’s newer <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects#Keyed_collections" rel="noopener">built-in objects</a>. I’d never used them in code before, so I made a conscious effort to integrate some of them into the utility methods I made:</p><pre><code class="language-js">const difference = (arr, ...otherArgs) =&gt; {
if (!isValidArray(arr)) throw new TypeError('First argument must be an array');
const combinedArguments = otherArgs.reduce((acc, item) =&gt; [...acc, ...item], [])
if (!isValidArray(combinedArguments)) throw new TypeError('2nd to nth arguments must be arrays');
const differenceSet = new Set([...arr]);
combinedArguments.forEach(item =&gt; {
if (differenceSet.has(item)) differenceSet.delete(item);
});
return [...differenceSet]
}</code></pre><p>Using <code>Set()</code> makes a lot of sense here. What separates it from a normal array is that only unique values can be stored. This means you can’t have any duplicate values inside of your set. This works well when trying to create a function that removes duplicate values.</p><p>Whether you’re a guitarist, a painter, or a molecular physicist, you’re not going to get far without familiarizing yourself with your guitar, or your paints, or your … molecules?</p><p>The same goes with being a programmer. Master your tools and actively seek gaps in your knowledge. Make a conscious effort to implement features that you haven’t come across before. Or use ones that you find intimidating. It’s one of the strongest ways to learn.</p><h3 id="conclusion"><strong>Conclusion</strong></h3><p>This isn’t the only way to stay productive when without internet, but it’s worked well for me. In fact, it’s something I recommend people do in the early stages of their programming careers.</p><p>I’d love to know if you’ve done something similar, or if you have your own ways of staying sharp without the internet. Let me know below!</p><p>Do you know any other packages that would lend themselves well to being rewritten?</p><h4 id="thanks-for-reading-">Thanks for reading!</h4><p>Knowledge sharing is one of the cornerstones of what makes the development community so great. Please don’t hesitate to comment your solutions.</p><p>If you’re interested in hosting me at a conference, meetup, or as a speaking guest for any engagement, then you can DM me on <a href="https://twitter.com/andricokaroulla?lang=en" rel="noopener">twitter</a>!</p><p>I hope this article taught you something new. I post regularly, so if you want to keep up to date with my latest releases then you can follow me. And remember, the longer you hold the clap button, the more claps you can give. ???</p><h4 id="you-can-also-check-out-my-other-articles-below-">You can also check out my other articles below:</h4><p><a href="https://codeburst.io/add-a-touch-of-suspense-to-your-web-app-with-react-lazy-374e66ee05af" rel="noopener"><em>Add a touch of Suspense to your web app with React.lazy()</em></a></p><p><a href="https://medium.com/@andricokaroulla/updated-for-apollo-v2-1-managing-local-state-with-apollo-d1882f2fbb7" rel="noopener"><em>How to use Apollo’s brand new Query components to manage local state</em></a></p><p><a href="https://codeburst.io/no-need-to-wait-for-the-holidays-start-decorating-now-67b9dabd60d7" rel="noopener"><em>No need to wait for the holidays, start Decorating now</em></a></p><p><a href="https://itnext.io/managing-local-state-with-apollo-client-3be522258645" rel="noopener"><em>Managing local state with Apollo and Higher Order Components</em></a></p><p><a href="https://medium.com/@andricokaroulla/the-react-conference-drinking-game-7a996bfbef3" rel="noopener"><em>The React Conference drinking game</em></a></p><p><a href="https://codeburst.io/develop-and-deploy-your-own-react-monorepo-app-in-under-2-hours-using-lerna-travis-and-now-2b140d647238" rel="noopener"><em>Develop and Deploy your own React monorepo app in under 2 hours, using Lerna, Travis and Now</em></a></p>
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
