---
card: "/images/default.jpg"
tags: [JavaScript]
description: Eric Elliott’s exceptional Composing Software series is initi
author: "Milad E. Fahmy"
title: "Deeply Understand Currying in 7 Minutes"
created: "2021-08-15T19:33:25+02:00"
modified: "2021-08-15T19:33:25+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-functional-programming tag-react tag-ramda ">
<header class="post-full-header">
<h1 class="post-full-title">Deeply Understand Currying in 7 Minutes</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2019/07/snape-currying-in-7-minutes.jpeg 300w,
/news/content/images/size/w600/2019/07/snape-currying-in-7-minutes.jpeg 600w,
/news/content/images/size/w1000/2019/07/snape-currying-in-7-minutes.jpeg 1000w,
/news/content/images/size/w2000/2019/07/snape-currying-in-7-minutes.jpeg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2019/07/snape-currying-in-7-minutes.jpeg" alt="Deeply Understand Currying in 7 Minutes">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Eric Elliott’s exceptional <a href="https://medium.com/javascript-scene/the-rise-and-fall-and-rise-of-functional-programming-composable-software-c2d91b424c8c">Composing Software</a> series is initially what got me excited about functional programming. It's a must-read.</p>
<p>At one point in the series, he mentioned <em>currying</em>. Both computer science and mathematics agree on the definition:</p>
<blockquote>
<p>Currying turns multi-argument functions into unary (single argument) functions.</p>
</blockquote>
<p>Curried functions take many arguments <strong>one at a time</strong>. So if you have</p>
<pre><code class="language-js">greet = (greeting, first, last) =&gt; `${greeting}, ${first} ${last}`;
greet('Hello', 'Bruce', 'Wayne'); // Hello, Bruce Wayne
</code></pre>
<p>Properly currying <code>greet</code> gives you</p>
<pre><code class="language-js">curriedGreet = curry(greet);
curriedGreet('Hello')('Bruce')('Wayne'); // Hello, Bruce Wayne
</code></pre>
<p>This 3-argument function has been turned into three unary functions. As you supply one parameter, a new function pops out expecting the next one.</p>
<p><img src="https://www.freecodecamp.org/news/content/images/2019/07/dog-properly-currying-a-function-1.jpeg" alt="dog-properly-currying-a-function-1"></p>
<h2 id="properly">Properly?</h2>
<p>I say "properly currying" because some <code>curry</code> functions are more flexible in their usage. Currying's great in theory, but invoking a function for each argument gets tiring in JavaScript.</p>
<p><a href="https://ramdajs.com/">Ramda's</a> <code>curry</code> function lets you invoke <code>curriedGreet</code> like this:</p>
<pre><code class="language-js">// greet requires 3 params: (greeting, first, last)
// these all return a function looking for (first, last)
curriedGreet('Hello');
curriedGreet('Hello')();
curriedGreet()('Hello')()();
// these all return a function looking for (last)
curriedGreet('Hello')('Bruce');
curriedGreet('Hello', 'Bruce');
curriedGreet('Hello')()('Bruce')();
// these return a greeting, since all 3 params were honored
curriedGreet('Hello')('Bruce')('Wayne');
curriedGreet('Hello', 'Bruce', 'Wayne');
curriedGreet('Hello', 'Bruce')()()('Wayne');
</code></pre>
<p>Notice you can choose to give multiple arguments in a single shot. This implementation's more useful while writing code.</p>
<p>And as demonstrated above, you can invoke this function forever without parameters and it’ll always return a function that expects the remaining parameters.</p>
<h2 id="howsthispossible">How's This Possible?</h2>
<p>Mr. Elliot shared a <code>curry</code> implementation much like Ramda's. Here’s the code, or as he aptly called it, a magic spell:</p>
<pre><code class="language-js">const curry = (f, arr = []) =&gt; (...args) =&gt;
((a) =&gt; (a.length === f.length ? f(...a) : curry(f, a)))([...arr, ...args]);
</code></pre>
<h2 id="umm">Umm… ?</h2>
<p><img src="https://www.freecodecamp.org/news/content/images/2019/07/that-code-is-hard-to-read-cmm.jpeg" alt="that-code-is-hard-to-read-cmm"></p>
<p>Yeah, I know... It's incredibly concise, so let's refactor and appreciate it together.</p>
<h2 id="thisversionworksthesame">This Version Works the Same</h2>
<p>I've also sprinkled <code>debugger</code> statements to examine it in Chrome Developer Tools.</p>
<pre><code class="language-js">curry = (originalFunction, initialParams = []) =&gt; {
debugger;
return (...nextParams) =&gt; {
debugger;
const curriedFunction = (params) =&gt; {
debugger;
if (params.length === originalFunction.length) {
return originalFunction(...params);
}
return curry(originalFunction, params);
};
return curriedFunction([...initialParams, ...nextParams]);
};
};
</code></pre>
<p>Open your <a href="https://developers.google.com/web/tools/chrome-devtools/">Developer Tools</a> and follow along!</p>
<h2 id="letsdothis">Let's Do This!</h2>
<p>Paste <code>greet</code> and <code>curry</code> into your console. Then enter <code>curriedGreet = curry(greet)</code> and begin the madness.</p>
<h3 id="pauseonline2">Pause on line 2</h3>
<p><img src="https://cdn-media-1.freecodecamp.org/images/1*8_q3YkOu6fDzIEMY65lqUg.png" alt=""></p>
<p>Inspecting our two params we see <code>originalFunction</code> is <code>greet</code> and <code>initialParams</code> defaulted to an empty array because we didn’t supply it. Move to the next breakpoint and, oh wait… that’s it.</p>
<p>Yep! <code>curry(greet)</code> just returns a new function that expects 3 more parameters. Type <code>curriedGreet</code> in the console to see what I’m talking about.</p>
<p>When you’re done playing with that, let’s get a bit crazier and do<br>
<code>sayHello = curriedGreet('Hello')</code>.
</p>
<h3 id="pauseonline4">Pause on line 4</h3>
<p><img src="https://cdn-media-1.freecodecamp.org/images/1*FXCJQi5Numlbis5d_bGsjw.png" alt=""></p>
<p>Before moving on, type <code>originalFunction</code> and <code>initialParams</code> in your console. Notice we can still access those 2 parameters even though we’re in a completely new function? That’s because functions returned from parent functions enjoy their parent’s scope.</p>
<h4 id="reallifeinheritance">Real-life inheritance</h4>
<p>After a parent function passes on, they leave their parameters for their kids to&nbsp;use. Kind of like inheritance in the real life sense.</p>
<p><code>curry</code> was initially given <code>originalFunction</code> and <code>initialParams</code> and then returned a “child” function. Those 2 variables weren’t <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_Management">disposed of</a> yet because maybe that child needs them. If he doesn’t, <em>then</em> that scope gets cleaned up because when no one references you, that’s when you truly die.</p>
<h3 id="okbacktoline4">Ok, back to line 4…</h3>
<p><img src="https://cdn-media-1.freecodecamp.org/images/1*_TFVnxtqgisi1i0q_K3dUQ.png" alt=""></p>
<p>Inspect <code>nextParams</code> and see that it’s <code>['Hello']</code>…an array? But I thought we said <code>curriedGreet(‘Hello’)</code>&nbsp;, not <code>curriedGreet(['Hello'])</code>!</p>
<p>Correct: we invoked <code>curriedGreet</code> with <code>'Hello'</code>, but thanks to the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator#Rest_syntax_%28parameters%29">rest syntax</a>, we’ve <em>turned</em> <code>'Hello'</code> into <code>['Hello']</code>.</p>
<h3 id="ytho">Y THO?!</h3>
<p><code>curry</code> is a general function that can be supplied 1, 10, or 10,000,000 parameters, so it needs a way to reference all of them. Using the rest syntax like that captures every single parameter in one array, making <code>curry</code>'s job much easier.</p>
<p>Let’s jump to the next <code>debugger</code> statement.</p>
<h3 id="line6nowbutholdon">Line 6 now, but hold on.</h3>
<p>You may have noticed that line 12 actually ran before the <code>debugger</code> statement on line 6. If not, look closer. Our program defines a function called <code>curriedFunction</code> on line 5, uses it on line 12, and <em>then</em> we hit that <code>debugger</code> statement on line 6. And what’s <code>curriedFunction</code> invoked with?</p>
<pre><code class="language-js">[...initialParams, ...nextParams];
</code></pre>
<p>Yuuuup. Look at <code>params</code> on line 5 and you’ll see <code>['Hello']</code>. Both <code>initialParams</code> and <code>nextParams</code> were arrays, so we flattened and combined them into a single array using the handy <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator#Syntax">spread operator</a>.</p>
<p>Here’s where the good stuff happens.</p>
<p><img src="https://cdn-media-1.freecodecamp.org/images/1*pM31i2QVNxVUiqj9aZzVvg.png" alt=""></p>
<p>Line 7 says “If <code>params</code> and <code>originalFunction</code> are the same length, call <code>greet</code> with our params and we’re done.” Which reminds me…</p>
<h3 id="javascriptfunctionshavelengthstoo">JavaScript functions have lengths&nbsp;too</h3>
<p>This is how <code>curry</code> does its magic! This is how it decides whether or not to ask for more parameters.</p>
<p>In JavaScript, a function’s&nbsp;<code>.length</code> property tells you <em>how many arguments it expects</em>.</p>
<pre><code class="language-js">greet.length; // 3
iTakeOneParam = (a) =&gt; {};
iTakeTwoParams = (a, b) =&gt; {};
iTakeOneParam.length; // 1
iTakeTwoParams.length; // 2
</code></pre>
<p>If our provided and expected parameters match, we’re good, just hand them off to the original function and finish the job!</p>
<h3 id="thatsballer">That’s baller ?</h3>
<p>But in our case, the parameters and function length are <em>not</em> the same. We only provided <code>‘Hello’</code>, so <code>params.length</code> is 1, and <code>originalFunction.length</code> is 3 because <code>greet</code> expects 3 parameters: <code>greeting, first, last</code>.</p>
<h3 id="sowhathappensnext">So what happens&nbsp;next?</h3>
<p>Well since that <code>if</code> statement evaluates to <code>false</code>, the code will skip to line 10 and re-invoke our master <code>curry</code> function. It re-receives <code>greet</code> and this time, <code>'Hello'</code>, and begins the madness all over again.</p>
<p>That’s <a href="https://developer.mozilla.org/en-US/docs/Glossary/Recursion">recursion</a>, my friends.</p>
<p><code>curry</code> is essentially an infinite loop of self-calling, parameter-hungry functions that won’t rest until their guest is full. Hospitality at its finest.</p>
<p><img src="https://cdn-media-1.freecodecamp.org/images/1*AZKiupYSanV5iJSQWrtUwg.png" alt=""></p>
<h3 id="backatline2">Back at line 2</h3>
<p>Same parameters as before, except <code>initialParams</code> is <code>['Hello']</code> this time. Skip again to exit the cycle. Type our new variable into the console, <code>sayHello</code>. It’s another function, still expecting more parameters, but we’re getting warmer…</p>
<p>Let’s turn up the heat with <code>sayHelloToJohn = sayHello('John')</code>.</p>
<p>We’re inside line 4 again, and <code>nextParams</code> is <code>['John']</code>. Jump to the next debugger on line 6 and inspect <code>params</code>: it’s <code>['Hello', 'John']</code>! ?</p>
<p><img src="https://cdn-media-1.freecodecamp.org/images/1*pej6yZ-vGvA2T9LgIIc-vg.png" alt=""></p>
<h3 id="whywhywhy">Why, why,&nbsp;why?</h3>
<p>Because remember, line 12 says “Hey <code>curriedFunction</code>, he gave me <code>'Hello'</code> last time and <code>‘John’</code> this time. Take them both in this array <code>[...initialParams, ...nextParams]</code>.”</p>
<p><img src="https://cdn-media-1.freecodecamp.org/images/1*Ljvk2BMLxIsbJ09idgStdg.png" alt=""></p>
<p>Now <code>curriedFunction</code> again compares the <code>length</code> of these <code>params</code> to <code>originalFunction</code>, and since <code>2 &lt; 3</code> we move to line 10 and call <code>curry</code> once again! And of course, we pass along <code>greet</code> and our 2 params, <code>['Hello', 'John']</code></p>
<p><img src="https://cdn-media-1.freecodecamp.org/images/1*EYv9jdo2id8tynbTI5SXYQ.png" alt=""></p>
<p>We’re so close, let’s finish this and get the full greeting back!</p>
<p><code>sayHelloToJohnDoe = sayHelloToJohn('Doe')</code></p>
<p>I think we know what happens next.</p>
<p><img src="https://cdn-media-1.freecodecamp.org/images/1*tMJvls2j9eAjrCGykVN84g.png" alt=""><img src="https://cdn-media-1.freecodecamp.org/images/1*NHm1TMo8Tjk7jQVlGGa9zQ.png" alt=""><img src="https://cdn-media-1.freecodecamp.org/images/1*eTwjEYLKGCGJoqdP4Xe9hA.png" alt=""></p>
<h2 id="thedeedisdone">The Deed Is Done</h2>
<p><code>greet</code> got his parameters, <code>curry</code> stopped looping, and we’ve received our greeting: <code>Hello, John Doe</code>.</p>
<p>Play around with this function some more. Try supplying multiple or no parameters in one shot, get as crazy as you want. See how many times <code>curry</code> has to recurse before returning your expected output.</p>
<pre><code class="language-js">curriedGreet('Hello', 'John', 'Doe');
curriedGreet('Hello', 'John')('Doe');
curriedGreet()()('Hello')()('John')()()()()('Doe');
</code></pre>
<p>Many thanks to <a href="https://medium.com/@_ericelliott">Eric Elliott</a> for introducing this to me, and even more thanks to you for appreciating <code>curry</code> with me. Until next time!</p>
<p><em>For more content like this, check out <a href="https://yazeedb.com">yazeedb.com</a>!</em></p>
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
