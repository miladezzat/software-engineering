---
card: "https://cdn-media-1.freecodecamp.org/images/1*YMYCdveLRLC9SI3ZYg8dBA.jpeg"
tags: [JavaScript]
description: We all probably know Array.map. It transforms an array of ele
author: "Milad E. Fahmy"
title: "How to implement map, filter, and reduce with recursion"
created: "2021-08-15T19:45:14+02:00"
modified: "2021-08-15T19:45:14+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-es6 tag-functional-programming tag-tech tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">How to implement map, filter, and reduce with recursion</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*YMYCdveLRLC9SI3ZYg8dBA.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*YMYCdveLRLC9SI3ZYg8dBA.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*YMYCdveLRLC9SI3ZYg8dBA.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*YMYCdveLRLC9SI3ZYg8dBA.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*YMYCdveLRLC9SI3ZYg8dBA.jpeg" alt="How to implement map, filter, and reduce with recursion">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<h3 id="arraymap">Array.map</h3>
<p>We all probably know <code>Array.map</code>. It transforms an array of elements according to a given function.</p>
<pre><code class="language-js">double = (x) =&gt; x * 2;
map(double, [1, 2, 3]);
// [2, 4, 6]
</code></pre>
<p>I’ve always seen it implemented along these lines:</p>
<pre><code class="language-js">map = (fn, arr) =&gt; {
const mappedArr = [];
for (let i = 0; i &lt; arr.length; i++) {
let mapped = fn(arr[i]);
mappedArr.push(mapped);
}
return mappedArr;
};
</code></pre>
<p><a href="https://youtu.be/XcS-LdEBUkE?t=4m16s">This video</a> exposed me to an alternative <code>Array.map</code> implementation. It’s from a 2014 JSConf — way before I jumped on the functional programming bandwagon.</p>
<p><strong>Edit:</strong> <a href="https://medium.com/@dadc">David Cizek</a> and <a href="https://medium.com/@steveb3210">Stephen Blackstone</a> kindly pointed out edge-cases and suboptimal performance regarding this <code>map</code> implementation. I wouldn’t advise anyone use this in a real app. My intention’s that we appreciate and learn from this thought-provoking, recursive approach. ?</p>
<p>The original example’s in CoffeeScript, here’s a JavaScript equivalent.</p>
<pre><code class="language-js">map = (fn, [head, ...tail]) =&gt;
head === undefined ? [] : [fn(head), ...map(fn, tail)];
</code></pre>
<p>You might use <a href="https://medium.com/@dadc">David Cizek</a>’s safer implementation instead.</p>
<pre><code class="language-js">map = (_fn_, [_head_, ..._tail_]) _=&gt;_ (
head === undefined &amp;&amp; tail.length &lt; 1
? []
: [fn(head), ...map(fn, tail)]
);
</code></pre>
<p>Using <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment">ES6's destructuring assignment</a>, we store the array’s first element into the variable <code>head</code>. Then we store <em>all the other</em> array elements into <code>tail</code>.</p>
<p>If <code>head</code> is <code>undefined</code>, that means we have an empty array, so just return an empty array. We’ve <em>mapped</em> nothing.</p>
<pre><code class="language-js">map(double, []);
// []
</code></pre>
<p>If <code>head</code> <em>is not</em> <code>undefined</code> we return a new array with <code>fn(head)</code> as the first element. We’ve now <em>mapped</em> the array’s first element. Alongside it is <code>map(fn, tail)</code> which calls <code>map</code> again, this time with one less element.</p>
<p>Since <code>map</code> returns an array, we use ES6’s <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax">spread syntax</a> to concatenate it with <code>[head]</code>.</p>
<p>Let’s step through this in the debugger. Paste this into your browser’s JavaScript console.</p>
<pre><code class="language-js">map = (fn, [head, ...tail]) =&gt; {
if (head === undefined) {
return [];
}
debugger;
return [fn(head), ...map(fn, tail)];
};
</code></pre>
<p>Now let’s <code>map(double, [1, 2, 3])</code>.</p>
<p><img src="https://cdn-media-1.freecodecamp.org/images/1*YB8D4_0XaIAGze7CKffX6A.png" alt=""></p>
<p>We see our local variables:</p>
<pre><code>head: 1
tail: [2, 3]
fn: double
</code></pre>
<p>We know <code>fn(head)</code> is <code>2</code>. That becomes the new array’s first element. Then we call <code>map</code> again with <code>fn</code> and the rest of the array’s elements: <code>tail</code>.</p>
<p>So before the initial <code>map</code> call even returns, we’ll keep calling <code>map</code> until the array’s been emptied out. Once the array’s empty, <code>head</code> will be <code>undefined</code>, allowing our base case to run and finish the whole process.</p>
<p><img src="https://cdn-media-1.freecodecamp.org/images/1*dowa0N9An5o2V0quqD72nA.png" alt=""></p>
<p>On the next run, <code>head</code> is <code>2</code> and <code>tail</code> is <code>[3]</code>.</p>
<p>Since <code>tail</code> isn’t empty yet, hit the next breakpoint to call <code>map</code> again.</p>
<p><img src="https://cdn-media-1.freecodecamp.org/images/1*IMm0-zX10Zs5GGqu9Yl1ow.png" alt=""></p>
<p><code>head</code> is <code>3</code>, and <code>tail</code> is an empty array. The next time this function runs, it’ll bail on line 3 and finally return the mapped array.</p>
<p>And here’s our end result:</p>
<p><img src="https://cdn-media-1.freecodecamp.org/images/1*m9PXMrrg9x9v013-Rl-UkQ.png" alt=""></p>
<h3 id="arrayfilter">Array.filter</h3>
<p><code>Array.filter</code> returns a new array based on the elements that satisfy a given predicate function.</p>
<pre><code class="language-js">isEven = (x) =&gt; x % 2 === 0;
filter(isEven, [1, 2, 3]);
// [2]
</code></pre>
<p>Consider this recursive solution:</p>
<pre><code class="language-js">filter = (pred, [head, ...tail]) =&gt;
head === undefined
? []
: pred(head)
? [head, ...filter(pred, tail)]
: [...filter(pred, tail)];
</code></pre>
<p>If <code>map</code> made sense, this'll be easy.</p>
<p>We’re still capturing the array’s first element in a variable called <code>head</code>, and the rest in a separate array called <code>tail</code>.</p>
<p>And with the same base case, if <code>head</code> is <code>undefined</code>, return an empty array and finish iterating.</p>
<p>But we have another conditional statement: only put <code>head</code> in the new array if <code>pred(head)</code> is <code>true</code>, because <code>filter</code> works by testing each element against a predicate function. Only when the predicate returns <code>true</code>, do we add that element to the new array.</p>
<p>If <code>pred(head)</code> doesn’t return <code>true</code>, just call <code>filter(pred, tail)</code> without <code>head</code>.</p>
<p>Let’s quickly expand and step through this in the Chrome console.</p>
<pre><code class="language-js">filter = (pred, [head, ...tail]) =&gt; {
if (head === undefined) return [];
if (pred(head)) {
debugger;
return [head, ...filter(pred, tail)];
}
debugger;
return [...filter(pred, tail)];
};
</code></pre>
<p>And look for numbers ≤ 10:</p>
<pre name="2060" id="2060" class="graf graf--pre graf-after--p">filter(x =&gt; x &lt;= 10, [1, 10, 20]);</pre>
<p><img src="https://cdn-media-1.freecodecamp.org/images/1*hGkyWV3T_hDb1Hnav_lmAg.png" alt=""></p>
<p>Since our array’s <code>[1, 10, 20]</code>, <code>head</code> is the first element, 1, and <code>tail</code> is an array of the rest: <code>[10, 20]</code>.</p>
<p>The predicate tests if <code>x</code> ≤ 10, so <code>pred(1)</code> returns <code>true</code>. That’s why we paused on line 4’s <code>debugger</code> statement.</p>
<p>Since the current <code>head</code> passed the test, it’s allowed entry into our filtered array. But we’re not done, so we call <code>filter</code> again with the same predicate, and now <code>tail</code>.</p>
<p>Move to the next <code>debugger</code>.</p>
<p><img src="https://cdn-media-1.freecodecamp.org/images/1*WESZIWb_dxhNNO-6-YJGuA.png" alt=""></p>
<p>We called <code>filter</code> with <code>[10, 20]</code> so <code>head</code> is now 10, and <code>tail</code> is <code>[20]</code>. So how does <code>tail</code> get smaller with each successive iteration?</p>
<p>We’re on line 4’s <code>debugger</code> once again because because 10 ≤ 10. Move to the next breakpoint.</p>
<p><img src="https://cdn-media-1.freecodecamp.org/images/1*1U9o0ejjyzTvfjeEypYIFA.png" alt=""></p>
<p><code>head</code>'s now 20 and <code>tail</code>'s empty.</p>
<p>Since 20 &gt; 10, <code>pred(head)</code> returns <code>false</code> and our filtered array won’t include it. We’ll call <code>filter</code> one more time without <code>head</code>.</p>
<p>This next time, however, <code>filter</code> will bail on line 2. <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Array_destructuring">Destructuring</a> an empty array gives you <code>undefined</code> variables. Continue past this breakpoint to get your return value.</p>
<p><img src="https://cdn-media-1.freecodecamp.org/images/1*2BdKSxNZwaGJ9Sc1VAWjXA.png" alt=""></p>
<p>That looks correct to me!</p>
<h3 id="arrayreduce">Array.reduce</h3>
<p>Last but not least, <code>Array.reduce</code> is great for boiling an array down to a single value.</p>
<p>Here’s my naive <code>reduce</code> implementation:</p>
<pre><code class="language-js">reduce = (fn, acc, arr) =&gt; {
for (let i = 0; i &lt; arr.length; i++) {
acc = fn(acc, arr[i]);
}
return acc;
};
</code></pre>
<p>And we can use it like this:</p>
<pre><code class="language-js">add = (x, y) =&gt; x + y;
reduce(add, 0, [1, 2, 3]); // 6
</code></pre>
<p>You’d get the same result with this recursive implementation:</p>
<pre><code class="language-js">reduce = (fn, acc, [head, ...tail]) =&gt;
head === undefined ? acc : reduce(fn, fn(acc, head), tail);
</code></pre>
<p>I find this one much easier to read than recursive <code>map</code> and <code>filter</code>.</p>
<p>Let’s step through this in the browser console. Here’s an expanded version with <code>debugger</code> statements:</p>
<pre><code class="language-js">reduce = (fn, acc, [head, ...tail]) =&gt; {
if (head === undefined) {
debugger;
return acc;
}
debugger;
return reduce(fn, fn(acc, head), tail);
};
</code></pre>
<p>Then we’ll call this in the console:</p>
<pre><code class="language-js">add = (x, y) =&gt; x + y;
reduce(add, 0, [1, 2, 3]);
</code></pre>
<p><img src="https://cdn-media-1.freecodecamp.org/images/1*2oPtNloFlI-0OZ1B3IZENA.png" alt=""></p>
<h4 id="round1">Round 1</h4>
<p>We see our local variables:</p>
<p><code>acc</code>: our initial value of <code>0</code></p>
<p><code>fn</code>: our <code>add</code> function</p>
<p><code>head</code>: the array’s first element, <code>1</code></p>
<p><code>tail</code>: the array’s other elements packed into a <em>separate</em> array, <code>[2, 3]</code></p>
<p>Since <code>head</code> isn’t <code>undefined</code> we’re going to recursively call <code>reduce</code>, <strong>passing along its required parameters</strong>:</p>
<p><code>fn</code>: Obviously the <code>add</code> function again ?</p>
<p><code>acc</code>: The result of calling <code>fn(acc, head)</code>. Since <code>acc</code> is <code>0</code>, and <code>head</code> is <code>1</code>, <code>add(0, 1)</code> returns <code>1</code>.</p>
<p><code>tail</code>: The array’s leftover elements. By always using tail, we keep cutting the array down until nothing’s left!</p>
<p>Move to the next <code>debugger</code>.</p>
<h4 id="round2">Round 2</h4>
<p><img src="https://cdn-media-1.freecodecamp.org/images/1*jYaNr_L9nJYw7N2uMMFsbQ.png" alt=""></p>
<p>Local variables:</p>
<p><code>acc</code>: Now it’s <code>1</code>, because we called <code>reduce</code> with <code>fn(acc, head)</code>, which was <code>add(0, 1)</code> at the time.</p>
<p><code>fn</code>: Still <code>add</code>!</p>
<p><code>head</code>: Remember how we passed the previous <code>tail</code> to <code>reduce</code>? Now that’s been destructured, with <code>head</code> representing its first element, <code>2</code>.</p>
<p><code>tail</code>: There’s only one element left, so <code>3</code>’s been packed into an array all by itself.</p>
<p>We know the next <code>reduce</code> call will take a function, accumulator, and array. We can evaluate the next set of parameters <strong>using the console</strong>.</p>
<p><img src="https://cdn-media-1.freecodecamp.org/images/1*TVD3RgN7v4FW_j8mIogckQ.png" alt=""></p>
<p>Expect these values on the next breakpoint.</p>
<h4 id="round3">Round 3</h4>
<p><img src="https://cdn-media-1.freecodecamp.org/images/1*YjHE_30_rjv8s4__FNdy3g.png" alt=""></p>
<p>Our local variables are as expected. <code>head</code>'s first and only element is <code>3</code>.</p>
<p>And our array only has one element left, <code>tail</code>'s empty! That means the next breakpoint will be our last.</p>
<p>Let’s quickly evaluate our future local variables:</p>
<p><img src="https://cdn-media-1.freecodecamp.org/images/1*agbXBbNDXSsqYRd6aYLD7w.png" alt=""></p>
<p>Move to the final breakpoint.</p>
<h4 id="round4">Round 4</h4>
<p><img src="https://cdn-media-1.freecodecamp.org/images/1*E0CAeH84AfH9JBdtposIBA.png" alt=""></p>
<p>Check it out, we paused on line 3 instead of line 6 this time! <code>head</code> is <code>undefined</code> so we’re returning the final, <code>6</code>! It’ll pop out if you move to the next breakpoint.</p>
<p><img src="https://cdn-media-1.freecodecamp.org/images/1*VBzXT1FLhUP0_iRPJ_QTFQ.png" alt=""><img src="https://cdn-media-1.freecodecamp.org/images/1*ApR1Nzk791drSLLBzcq2Xw.png" alt=""></p>
<p>Looks good to me! Thank you so much for reading this.</p>
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
