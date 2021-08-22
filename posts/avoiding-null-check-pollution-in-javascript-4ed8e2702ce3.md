---
card: "https://cdn-media-1.freecodecamp.org/images/1*uJIvAC_iHveiJ5BEse6YMA.jpeg"
tags: [JavaScript]
description: by Konstantin Blokhin
author: "Milad E. Fahmy"
title: "How to avoid null check pollution in JavaScript: use Optionals"
created: "2021-08-15T19:37:19+02:00"
modified: "2021-08-15T19:37:19+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-clean-code tag-nodejs tag-tech tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">How to avoid null check pollution in JavaScript: use Optionals</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*uJIvAC_iHveiJ5BEse6YMA.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*uJIvAC_iHveiJ5BEse6YMA.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*uJIvAC_iHveiJ5BEse6YMA.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*uJIvAC_iHveiJ5BEse6YMA.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*uJIvAC_iHveiJ5BEse6YMA.jpeg" alt="How to avoid null check pollution in JavaScript: use Optionals">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Konstantin Blokhin</p>
<h1 id="how-to-avoid-null-check-pollution-in-javascript-use-optionals">How to avoid null check pollution in JavaScript: use Optionals</h1>
<figcaption><a href="https://dribbble.com/shots/2634230" rel="noopener" target="_blank" title="">Wash your code!</a> by <a href="https://dribbble.com/charliechauvin" rel="noopener" target="_blank" title=""><em>Charlie Chauvin</em></a></figcaption>
</figure>
<p>I’ve been using JavaScript for the past few years and have been enjoying it in general. But it lacks some cool features from other languages. For instance, there is no built-in safe navigation and no means to avoid null checks. The code gets polluted with boilerplate conditional branches. It’s error-prone and less readable.</p>
<p>What’s wrong with null checks, you might ask?</p>
<p>First of all, the inventor of the null reference, <a href="http://en.wikipedia.org/wiki/Tony_Hoare" rel="noopener">Tony Hoare</a>, <a href="https://www.infoq.com/presentations/Null-References-The-Billion-Dollar-Mistake-Tony-Hoare" rel="noopener">called</a> it a <strong>billion-dollar mistake:</strong></p>
<blockquote>But I couldn’t resist the temptation to put in a null reference, simply because it was so easy to implement. This has led to innumerable errors, vulnerabilities, and system crashes, which have probably caused a billion dollars of pain and damage in the last forty years<strong>.</strong></blockquote>
<p>JavaScript is no different. How many times have you encountered <code>TypeError: Cannot read property 'bar' of null</code> error? To avoid these, developers always have to <strong>keep this null possibility in mind. </strong>And they would rather concentrate on the real thing like application-specific logic.</p>
<p>Next, you actually have to introduce new conditional branches into your code. And generally you don’t wanna have lots of them, since <code><strong>if</strong></code><strong> statements tend to decrease overall readability of the code.</strong> Take the <a href="http://wiki.c2.com/?ArrowAntiPattern" rel="noopener">arrow anti-pattern</a> as an extreme example. Moreover, these statements are almost meaningless in terms of your domain or business logic.</p>
<p>I like one of the ways of solving that problem, explained <a href="http://michaelfeathers.silvrback.com/converting-queries-to-commands" rel="noopener">here</a> by Michael Feathers — the “commands instead of queries” approach. And he also develops this idea and <a href="https://www.youtube.com/watch?v=AnZ0uTOerUI" rel="noopener">talks</a> about the benefits of unconditional code in general.</p>
<p>Basically, instead of querying a piece of data and checking if it’s there for further processing, we just express our intention and let module internals decide whether or not the action should be taken.</p>
<p>Let’s say we want to fetch a user and their friends’ favourite books for recommendation. The code could be like:</p>
<p>So, I’d rather have some module to encapsulate the checking logic. Therefore, we just tell it what to do with an active user:</p>
<p>The code is more focused on the business logic now. And we can reuse it to perform other actions with an active user without the burden of null checks.</p>
<p>But the given solution is a bit too specific. Besides, we still have a null check in our controller or some other place where we use the function.</p>
<p>A more general approach is required. What we need is a special data type, a container for nullable values — such as the <a href="https://docs.oracle.com/javase/9/docs/api/java/util/Optional.html" rel="noopener">Optional</a> class in Java, for example. Point is, any actions, given to the container, will be executed only on a non-empty containing value.</p>
<p>There are some JS libraries (like <a href="https://github.com/JasonStorey/Optional.js" rel="noopener">Optional.js</a>), implementing almost the same interface as Java Optional. But they don’t take into account the asynchronous nature of JS and don’t work with Promises.</p>
<p>And most of the time when the absence of a value is possible, we actually have to deal with promises and async functions. For instance, take external resource requests like database queries and API calls.</p>
<p>That’s when <a href="https://github.com/treble-snake/async-optional" rel="noopener">AsyncOptional</a> comes to the rescue. So, <strong>it’s a container for an optional value of asynchronous nature</strong>. <em>Optional</em> means that the value may be present or absent. Both <code>null</code> and <code>undefined</code> are considered absent.</p>
<p>As soon as we want to tell the program what to do with a non-empty value, the factory method is called “with”:</p><pre><code>const withUser = AsyncOptional.with(user);</code></pre>
<p>Then we could do some processing, as it’s shown in the example below. Once we’re done and want to fix the result somewhere, one of terminal methods should be used.</p>
<p>For instance, when we don’t need to react on an empty value:</p>
<p>We can also specify what to do in case of the absence of the value in this natural-language-like way:</p>
<p>Between factory and terminal method calls, there can be any processing logic, described in the <a href="https://github.com/treble-snake/async-optional#transform-it" rel="noopener">readme</a>. It’s guaranteed that no action will be taken upon an empty value.</p>
<p>Some of the actions you can use to process the value:</p>
<p>So let’s take a final look at our example:</p>
<p>So, how is it better compared with the initial one?</p>
<p>I believe the answer is — it’s way <strong>more clean and readable,</strong> and readability is the essence of good code.</p>
<p>First, we got rid of null-checking conditional branches, so we can focus on the important thing — which is the business logic of the system.</p>
<p>Next, we eliminated the possibility of having null pointer exceptions here. This means we don’t have to keep the nullability of the value in mind, which is one less way to introduce bugs.</p>
<p>Another case the library can come in handy is in a “default value” situation. Let’s say we have some kind of form for a user to fill, and among other fields there is fruit selection. The user can choose an orange, apple or nothing.</p>
<p>So the output is:</p><pre><code>conditionalChooseFruit(‘Joe’);// =&gt; You chose nothing, Joe.</code></pre><pre><code>conditionalChooseFruit(‘Joe’, {notFruit: ‘x’});// =&gt; You chose nothing, Joe.</code></pre><pre><code>conditionalChooseFruit(‘Joe’, {fruit: 1});// =&gt; You chose apple, Joe.</code></pre><pre><code>conditionalChooseFruit(‘Joe’, {fruit: 11});// =&gt; You chose a wrong gardener to mess with, Joe.</code></pre>
<p>For me, this method looks a bit messy even with the help of async/await and reversed conditions. The business logic gets blurred by conditional branches.</p>
<p>And with AsyncOptional it can be rewritten in a more straightforward way:</p>
<p>Isn’t that more readable?</p>
<p>So, the <a href="https://github.com/treble-snake/async-optional" rel="noopener">AsyncOptional</a> library could help you to:</p>
<ul>
<li>write code you may find more readable, maintainable, clean and nice-looking;</li>
<li>avoid null-related <code>TypeErrors</code> better, thus increasing the stability of your system;</li>
<li>work with Promises and asynchronous functions in the same clean manner (and it works with synchronous ones too).</li>
</ul>
<p><em>If you’ve liked the examples, please feel free to explore the <a href="https://github.com/treble-snake/async-optional#about" rel="noopener">Readme</a> file in the <a href="https://github.com/treble-snake/async-optional" rel="noopener">GitHub</a> repo or even check out the complete <a href="https://github.com/treble-snake/async-optional/blob/master/docs/APIDOC.md" rel="noopener">API Docs</a>. I even dare to suggest you could install the <a href="https://www.npmjs.com/package/async-optional" rel="noopener">package via npm</a>. :) I would also appreciate any feedback.</em></p>
<p><a href="https://www.npmjs.com/package/async-optional" rel="noopener"><strong>async-optional</strong></a><br><a href="https://www.npmjs.com/package/async-optional" rel="noopener"><em>Optional implementation with async support</em>www.npmjs.com</a></p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
