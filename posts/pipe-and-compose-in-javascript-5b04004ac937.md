---
card: "https://cdn-media-1.freecodecamp.org/images/1*FKEc-DbmFn54VPLQmCOLRA.jpeg"
tags: [JavaScript]
description: "Functional programming’s been quite the eye-opening journey f"
author: "Milad E. Fahmy"
title: "A quick introduction to pipe() and compose() in JavaScript"
created: "2021-08-16T11:47:46+02:00"
modified: "2021-08-16T11:47:46+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-functional-programming tag-composition tag-technology tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">A quick introduction to pipe() and compose() in JavaScript</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*FKEc-DbmFn54VPLQmCOLRA.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*FKEc-DbmFn54VPLQmCOLRA.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*FKEc-DbmFn54VPLQmCOLRA.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*FKEc-DbmFn54VPLQmCOLRA.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*FKEc-DbmFn54VPLQmCOLRA.jpeg" alt="A quick introduction to pipe() and compose() in JavaScript">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p><a href="http://ramdajs.com/">Ramda’s</a> been my go-to FP library because of how much easier it makes functional programming in JavaScript. I highly recommend it.</p>
<h3 id="pipe">Pipe</h3>
<p>The concept of <code>pipe</code> is simple — it combines <code>n</code> functions. It’s a pipe flowing left-to-right, calling each function with the output of the last one.</p>
<p>Let’s write a function that returns someone’s <code>name</code>.</p>
<pre><code class="language-js">getName = (person) =&gt; person.name;
getName({ name: 'Buckethead' });
// 'Buckethead'
</code></pre>
<p>Let’s write a function that uppercases strings.</p>
<pre><code class="language-js">uppercase = (string) =&gt; string.toUpperCase();
uppercase('Buckethead');
// 'BUCKETHEAD'
</code></pre>
<p>So if we wanted to get and capitalize <code>person</code>'s name, we could do this:</p>
<pre><code class="language-js">name = getName({ name: 'Buckethead' });
uppercase(name);
// 'BUCKETHEAD'
</code></pre>
<p>That’s fine but let’s eliminate that intermediate variable <code>name</code>.</p>
<pre><code class="language-js">uppercase(getName({ name: 'Buckethead' }));
</code></pre>
<p>Better, but I’m not fond of that nesting. It can get too crowded. What if we want to add a function that gets the first 6 characters of a string?</p>
<pre><code class="language-js">get6Characters = (string) =&gt; string.substring(0, 6);
get6Characters('Buckethead');
// 'Bucket'
</code></pre>
<p>Resulting in:</p>
<pre><code class="language-js">get6Characters(uppercase(getName({ name: 'Buckethead' })));
// 'BUCKET';
</code></pre>
<p>Let’s get really crazy and add a function to reverse strings.</p>
<pre><code class="language-js">reverse = (string) =&gt;
string
.split('')
.reverse()
.join('');
reverse('Buckethead');
// 'daehtekcuB'
</code></pre>
<p>Now we have:</p>
<pre><code class="language-js">reverse(get6Characters(uppercase(getName({ name: 'Buckethead' }))));
// 'TEKCUB'
</code></pre>
<p>It can get a bit…much.</p>
<h3 id="pipetotherescue">Pipe to the rescue!</h3>
<p>Instead of jamming functions within functions or creating a bunch of intermediate variables, let’s <code>pipe</code> all the things!</p>
<pre><code class="language-js">pipe(
getName,
uppercase,
get6Characters,
reverse
)({ name: 'Buckethead' });
// 'TEKCUB'
</code></pre>
<p>Pure art. It’s like a todo list!</p>
<p>Let’s step through it.</p>
<p>For demo purposes, I’ll use a <code>pipe</code> implementation from one of <a href="https://medium.com/@_ericelliott">Eric Elliott</a>’s <a href="https://medium.com/javascript-scene/reduce-composing-software-fe22f0c39a1d">functional programming articles</a>.</p>
<pre><code class="language-js">pipe = (...fns) =&gt; (x) =&gt; fns.reduce((v, f) =&gt; f(v), x);
</code></pre>
<p>I love this little one-liner.</p>
<p>Using <em>rest</em> parameters, <a href="https://medium.com/@yazeedb/how-do-javascript-rest-parameters-actually-work-227726e16cc8">see my article on that</a>, we can pipe <code>n</code> functions. Each function takes the output of the previous one and it’s all <em>reduced</em> ? to a single value.</p>
<p>And you can use it just like we did above.</p>
<pre><code class="language-js">pipe(
getName,
uppercase,
get6Characters,
reverse
)({ name: 'Buckethead' });
// 'TEKCUB'
</code></pre>
<p>I’ll expand <code>pipe</code> and add some debugger statements, and we’ll go line by line.</p>
<pre><code class="language-js">pipe = (...functions) =&gt; (value) =&gt; {
debugger;
return functions.reduce((currentValue, currentFunction) =&gt; {
debugger;
return currentFunction(currentValue);
}, value);
};
</code></pre>
<p><img src="https://cdn-media-1.freecodecamp.org/images/1*jqrKgVeO-raAUJjuN-adug.png" alt=""></p>
<p>Call <code>pipe</code> with our example and let the wonders unfold.</p>
<p><img src="https://cdn-media-1.freecodecamp.org/images/1*rqi22p06rTtc2m0k1yHrRw.png" alt=""></p>
<p>Check out the local variables. <code>functions</code> is an array of the 4 functions, and <code>value</code> is <code>{ name: 'Buckethead' }</code>.</p>
<p>Since we used <em>rest</em> parameters, <code>pipe</code> allows any number of functions to be used. It’ll just loop and call each one.</p>
<p><img src="https://cdn-media-1.freecodecamp.org/images/1*UjM5plW8s--8chfQQg3cMg.png" alt=""></p>
<p>On the next debugger, we’re inside <code>reduce</code>. This is where <code>currentValue</code> is passed to <code>currentFunction</code> and returned.</p>
<p>We see the result is <code>'Buckethead'</code> because <code>currentFunction</code> returns the <code>.name</code> property of any object. That will be returned in <code>reduce</code>, meaning it becomes the new <code>currentValue</code> next time. Let’s hit the next debugger and see.</p>
<p><img src="https://cdn-media-1.freecodecamp.org/images/1*sEcE5tBFSpCzJZrKz8mmEQ.png" alt=""></p>
<p>Now <code>currentValue</code> is <code>‘Buckethead’</code> because that’s what got returned last time. <code>currentFunction</code> is <code>uppercase</code>, so <code>'BUCKETHEAD'</code> will be the next <code>currentValue</code>.</p>
<p><img src="https://cdn-media-1.freecodecamp.org/images/1*Va6taGFU8dSyhz1wLVMWMQ.png" alt=""></p>
<p>The same idea, pluck <code>‘BUCKETHEAD’</code>'s first 6 characters and hand them off to the next function.</p>
<p><img src="https://cdn-media-1.freecodecamp.org/images/1*YaI1oxsZW5qZZUC146DYoQ.png" alt=""></p>
<p><code>reverse(‘.aedi emaS’)</code></p>
<p><img src="https://cdn-media-1.freecodecamp.org/images/1*moIMQxr82r2Z8IuXwuZfKQ.png" alt=""></p>
<p>And you’re done!</p>
<h3 id="whataboutcompose">What about compose()?</h3>
<p>It’s just <code>pipe</code> in the other direction.</p>
<p>So if you wanted the same result as our <code>pipe</code> above, you’d do the opposite.</p>
<pre><code class="language-js">compose(
reverse,
get6Characters,
uppercase,
getName
)({ name: 'Buckethead' });
</code></pre>
<p>Notice how <code>getName</code> is last in the chain and <code>reverse</code> is first?</p>
<p>Here’s a quick implementation of <code>compose</code>, again courtesy of the Magical <a href="https://medium.com/@_ericelliott">Eric Elliott</a>, from <a href="https://medium.com/javascript-scene/reduce-composing-software-fe22f0c39a1d">the same article</a>.</p>
<pre><code class="language-js">compose = (...fns) =&gt; (x) =&gt; fns.reduceRight((v, f) =&gt; f(v), x);
</code></pre>
<p>I’ll leave expanding this function with <code>debugger</code>s as an exercise to you. Play around with it, use it, appreciate it. And most importantly, have fun!</p>
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
