---
card: "https://cdn-media-1.freecodecamp.org/images/1*GRUP3Ml4piJhZQ8EOHkFDA.jpeg"
tags: [JavaScript]
description: "by Cynthia Lee"
author: "Milad E. Fahmy"
title: "When (and why) you should use ES6 arrow functions — and when you shouldn’t"
created: "2021-08-15T23:47:55+02:00"
modified: "2021-08-15T23:47:55+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-tech tag-coding tag-programming tag-learning ">
<header class="post-full-header">
<h1 class="post-full-title">When (and why) you should use ES6 arrow functions — and when you shouldn’t</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*GRUP3Ml4piJhZQ8EOHkFDA.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*GRUP3Ml4piJhZQ8EOHkFDA.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*GRUP3Ml4piJhZQ8EOHkFDA.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*GRUP3Ml4piJhZQ8EOHkFDA.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*GRUP3Ml4piJhZQ8EOHkFDA.jpeg" alt="When (and why) you should use ES6 arrow functions — and when you shouldn’t">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
return params * 2
}
timesTwo(4);  // 8</code></pre><p>Now, here is the same function expressed as an arrow function:</p><pre><code class="language-js">var timesTwo = params =&gt; params * 2
if (cat === 'hungry') {
return 'Feed the cat';
} else {
return 'Do not feed the cat';
}
}</code></pre><h4 id="5-block-body-"><strong>5. “Block body”</strong></h4><p>If your function is in a block, you must also use the explicit <code>return</code> statement:</p><pre><code class="language-js">var addValues = (x, y) =&gt; {
return x + y
var obj = {
id: 42,
counter: function counter() {
setTimeout(function() {
console.log(this.id);
}.bind(this), 1000);
}
};</code></pre><p>In the ES5 example, <code>.bind(this)</code> is required to help pass the <code>this</code> context into the function. Otherwise, by default <code>this</code> would be undefined.</p><pre><code class="language-js">// ES6
var obj = {
id: 42,
counter: function counter() {
setTimeout(() =&gt; {
console.log(this.id);
}, 1000);
}
};</code></pre><p>ES6 arrow functions can’t be bound to a <code>this</code> keyword, so it will lexically go up a scope, and use the value of <code>this</code> in the scope in which it was defined.</p><h3 id="when-you-should-not-use-arrow-functions">When you should not use Arrow Functions</h3><p>After learning a little more about arrow functions, I hope you understand that they do not replace regular functions.</p><p>Here are some instances where you probably wouldn’t want to use them:</p><ol><li>Object methods</li></ol><p>When you call <code>cat.jumps</code>, the number of lives does not decrease. It is because <code>this</code> is not bound to anything, and will inherit the value of <code>this</code> from its parent scope.</p><pre><code class="language-js">var cat = {
lives: 9,
jumps: () =&gt; {
this.lives--;
}
}</code></pre><p>2. Callback functions with dynamic context</p><p>If you need your context to be dynamic, arrow functions are not the right choice. Take a look at this event handler below:</p><pre><code class="language-js">var button = document.getElementById('press');
button.addEventListener('click', () =&gt; {
this.classList.toggle('on');
});</code></pre><p>If we click the button, we would get a TypeError. It is because <code>this</code> is not bound to the button, but instead bound to its parent scope.</p><p>3. When it makes your code less readable</p><p>It is worth taking into consideration the variety of syntax we covered earlier. With regular functions, people know what to expect. With arrow functions, it may be hard to decipher what you are looking at straightaway.</p><h3 id="when-you-should-use-them">When you should use them</h3><p>Arrow functions shine best with anything that requires <code>this</code> to be bound to the context, and not the function itself.</p><p>Despite the fact that they are anonymous, I also like using them with methods such as <code>map</code> and <code>reduce</code>, because I think it makes my code more readable. To me, the pros outweigh the cons.</p><p>Thanks for reading my article, and share if you liked it! Check out my other articles like <a href="/news/how-i-built-my-pomodoro-clock-app-and-the-lessons-i-learned-along-the-way-51288983f5ee/">How I built my Pomodoro Clock app, and the lessons I learned along the way</a>, and <a href="/news/demystifying-javascripts-new-keyword-874df126184c/">Let’s demystify JavaScript’s ‘new’ keyword</a>.</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
