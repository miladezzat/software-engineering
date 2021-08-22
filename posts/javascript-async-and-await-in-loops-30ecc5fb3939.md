---
card: "https://cdn-media-1.freecodecamp.org/images/1*p2upvpYKRT0-qtTP61LOYg.gif"
tags: [JavaScript]
description: Basic async and await is simple. Things get a bit more compli
author: "Milad E. Fahmy"
title: "JavaScript async and await in loops"
created: "2021-08-15T19:33:52+02:00"
modified: "2021-08-15T19:33:52+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript ">
<header class="post-full-header">
<h1 class="post-full-title">JavaScript async and await in loops</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*p2upvpYKRT0-qtTP61LOYg.gif 300w,
https://cdn-media-1.freecodecamp.org/images/1*p2upvpYKRT0-qtTP61LOYg.gif 600w,
https://cdn-media-1.freecodecamp.org/images/1*p2upvpYKRT0-qtTP61LOYg.gif 1000w,
https://cdn-media-1.freecodecamp.org/images/1*p2upvpYKRT0-qtTP61LOYg.gif 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*p2upvpYKRT0-qtTP61LOYg.gif" alt="JavaScript async and await in loops">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Basic <code>async</code> and <code>await</code> is simple. Things get a bit more complicated when you try to use <code>await</code> in loops.</p>
<p>In this article, I want to share some gotchas to watch out for if you intend to use <code>await</code> in loops.</p>
<h3 id="before-you-begin"><strong>Before you begin</strong></h3>
<p>I'm going to assume you know how to use <code>async</code> and <code>await</code>. If you don't, read the <a href="https://zellwk.com/blog/async-await" rel="noopener">previous article</a> to familiarize yourself before continuing.</p>
<h3 id="preparing-an-example"><strong>Preparing an example</strong></h3>
<p>For this article, let's say you want to get the number of fruits from a fruit basket.</p><pre><code>const fruitBasket = {
apple: 27,
grape: 0,
pear: 14
};</code></pre>
<p>You want to get the number of each fruit from the fruitBasket. To get the number of a fruit, you can use a <code>getNumFruit</code> function.</p><pre><code>const getNumFruit = fruit =&gt; {
return fruitBasket[fruit];
};
const numApples = getNumFruit(“apple”);
console.log(numApples); // 27</code></pre>
<p>Now, let's say <code>fruitBasket</code> lives on a remote server. Accessing it takes one second. We can mock this one-second delay with a timeout. (Please refer to the <a href="https://zellwk.com/blog/async-await" rel="noopener">previous article</a> if you have problems understanding the timeout code).</p><pre><code>const sleep = ms =&gt; {
return new Promise(resolve =&gt; setTimeout(resolve, ms));
};
const getNumFruit = fruit =&gt; {
return sleep(1000).then(v =&gt; fruitBasket[fruit]);
};
getNumFruit(“apple”).then(num =&gt; console.log(num)); // 27</code></pre>
<p>Finally, let's say you want to use <code>await</code> and <code>getNumFruit</code> to get the number of each fruit in asynchronous function.</p><pre><code>const control = async _ =&gt; {
console.log(“Start”);
const numApples = await getNumFruit(“apple”);
console.log(numApples);
const numGrapes = await getNumFruit(“grape”);
console.log(numGrapes);
const numPears = await getNumFruit(“pear”);
console.log(numPears);
console.log(“End”);
};</code></pre>
<figcaption>Console shows ‘Start’. One second later, it logs 27. Another second later, it logs 0. One more second later, it logs 14, and ‘End’</figcaption>
</figure>
<p>With this, we can begin looking at <code>await</code> in loops.</p>
<h3 id="await-in-a-for-loop"><strong>Await in a for loop</strong></h3>
<p>Let's say we have an array of fruits we want to get from the fruit basket.</p><pre><code>const fruitsToGet = [“apple”, “grape”, “pear”];</code></pre>
<p>We are going to loop through this array.</p><pre><code>const forLoop = async _ =&gt; {
console.log(“Start”);
for (let index = 0; index &lt; fruitsToGet.length; index++) {
// Get num of each fruit
}
console.log(“End”);
};</code></pre>
<p>In the for-loop, we will use <code>getNumFruit</code> to get the number of each fruit. We'll also log the number into the console.</p>
<p>Since <code>getNumFruit</code> returns a promise, we can <code>await</code> the resolved value before logging it.</p><pre><code>const forLoop = async _ =&gt; {
console.log(“Start”);
for (let index = 0; index &lt; fruitsToGet.length; index++) {
const fruit = fruitsToGet[index];
const numFruit = await getNumFruit(fruit);
console.log(numFruit);
}
console.log(“End”);
};</code></pre>
<p>When you use <code>await</code>, you expect JavaScript to pause execution until the awaited promise gets resolved. This means <code>await</code>s in a for-loop should get executed in series.</p>
<p>The result is what you'd expect.</p><pre><code>“Start”;
“Apple: 27”;
“Grape: 0”;
“Pear: 14”;
“End”;</code></pre>
<figcaption>Console shows ‘Start’. One second later, it logs 27. Another second later, it logs 0. One more second later, it logs 14, and ‘End’</figcaption>
</figure>
<p>This behavior works with most loops (like <code>while</code> and <code>for-of</code> loops)...</p>
<p>But it won't work with loops that require a callback. Examples of such loops that require a fallback include <code>forEach</code>, <code>map</code>, <code>filter</code>, and <code>reduce</code>. We'll look at how <code>await</code> affects <code>forEach</code>, <code>map</code>, and <code>filter</code> in the next few sections.</p>
<h3 id="await-in-a-foreach-loop"><strong>Await in a forEach loop</strong></h3>
<p>We'll do the same thing as we did in the for-loop example. First, let's loop through the array of fruits.</p><pre><code>const forEachLoop = _ =&gt; {
console.log(“Start”);
fruitsToGet.forEach(fruit =&gt; {
// Send a promise for each fruit
});
console.log(“End”);
};</code></pre>
<p>Next, we'll try to get the number of fruits with <code>getNumFruit</code>. (Notice the <code>async</code> keyword in the callback function. We need this <code>async</code> keyword because <code>await</code> is in the callback function).</p><pre><code>const forEachLoop = _ =&gt; {
console.log(“Start”);
fruitsToGet.forEach(async fruit =&gt; {
const numFruit = await getNumFruit(fruit);
console.log(numFruit);
});
console.log(“End”);
};</code></pre>
<p>You might expect the console to look like this:</p><pre><code>“Start”;
“27”;
“0”;
“14”;
“End”;</code></pre>
<p>But the actual result is different. JavaScript proceeds to call <code>console.log('End') </code>before the promises in the forEach loop gets resolved.</p>
<p>The console logs in this order:</p><pre><code>‘Start’
‘End’
‘27’
‘0’
‘14’</code></pre>
<figcaption>Console logs ‘Start’ and ‘End’ immediately. One second later, it logs 27, 0, and 14.</figcaption>
</figure>
<p>JavaScript does this because <code>forEach</code> is not promise-aware. It cannot support <code>async</code> and <code>await</code>. You <em>_cannot_</em> use <code>await</code> in <code>forEach</code>.</p>
<h3 id="await-with-map"><strong>Await with map</strong></h3>
<p>If you use <code>await</code> in a <code>map</code>, <code>map</code> will always return an array of promise. This is because asynchronous functions always return promises.</p><pre><code>const mapLoop = async _ =&gt; {
console.log(“Start”);
const numFruits = await fruitsToGet.map(async fruit =&gt; {
const numFruit = await getNumFruit(fruit);
return numFruit;
});
console.log(numFruits);
console.log(“End”);
};
“Start”;
“[Promise, Promise, Promise]”;
“End”;</code></pre>
<figcaption>Console logs ‘<code>Start</code>’, ‘[Promise, Promise, Promise]’, and ‘End’ immediately</figcaption>
</figure>
<p>Since <code>map</code> always return promises (if you use <code>await</code>), you have to wait for the array of promises to get resolved. You can do this with<code> await Promise.all(arrayOfPromises)</code>.</p><pre><code>const mapLoop = async _ =&gt; {
console.log(“Start”);
const promises = fruitsToGet.map(async fruit =&gt; {
const numFruit = await getNumFruit(fruit);
return numFruit;
});
const numFruits = await Promise.all(promises);
console.log(numFruits);
console.log(“End”);
};</code></pre>
<p>Here's what you get:</p><pre><code>“Start”;
“[27, 0, 14]”;
“End”;</code></pre>
<figcaption>Console logs ‘Start’. One second later, it logs ‘[27, 0, 14] and ‘End’</figcaption>
</figure>
<p>You can manipulate the value you return in your promises if you wish to. The resolved values will be the values you return.</p><pre><code>const mapLoop = async _ =&gt; {
// …
const promises = fruitsToGet.map(async fruit =&gt; {
const numFruit = await getNumFruit(fruit);
// Adds onn fruits before returning
return numFruit + 100;
});
// …
};
“Start”;
“[127, 100, 114]”;
“End”;</code></pre>
<h3 id="await-with-filter"><strong>Await with filter</strong></h3>
<p>When you use <code>filter</code>, you want to filter an array with a specific result. Let's say you want to create an array with more than 20 fruits.</p>
<p>If you use <code>filter</code> normally (without await), you'll use it like this:</p><pre><code>// Filter if there’s no await
const filterLoop = _ =&gt; {
console.log(‘Start’)
const moreThan20 = await fruitsToGet.filter(fruit =&gt; {
const numFruit = fruitBasket[fruit]
return numFruit &gt; 20
})
console.log(moreThan20)
console.log(‘End’)
}</code></pre>
<p>You would expect <code>moreThan20</code> to contain only apples because there are 27 apples, but there are 0 grapes and 14 pears.</p><pre><code>“Start”[“apple”];
(“End”);</code></pre>
<p><code>await</code> in <code>filter</code> doesn't work the same way. In fact, it doesn't work at all. You get the unfiltered array back...</p><pre><code>const filterLoop = _ =&gt; {
console.log(‘Start’)
const moreThan20 = await fruitsToGet.filter(async fruit =&gt; {
const numFruit = getNumFruit(fruit)
return numFruit &gt; 20
})
console.log(moreThan20)
console.log(‘End’)
}
“Start”[(“apple”, “grape”, “pear”)];
(“End”);</code></pre>
<figcaption>Console loggs ‘Start’, ‘[‘apple’, ‘grape’, ‘pear’]’, and ‘End’ immediately</figcaption>
</figure>
<p>Here's why it happens.</p>
<p>When you use <code>await</code> in a <code>filter</code> callback, the callback always a promise. Since promises are always truthy, everything item in the array passes the filter. Writing <code>await</code> in a <code>filter</code> is like writing this code:</p><pre><code>// Everything passes the filter…
const filtered = array.filter(true);</code></pre>
<p>There are three steps to use <code>await</code> and <code>filter</code> properly:</p>
<p>1. Use <code>map</code> to return an array promises</p>
<p>2. <code>await</code> the array of promises</p>
<p>3. <code>filter</code> the resolved values</p><pre><code>const filterLoop = async _ =&gt; {
console.log(“Start”);
const promises = await fruitsToGet.map(fruit =&gt; getNumFruit(fruit));
const numFruits = await Promise.all(promises);
const moreThan20 = fruitsToGet.filter((fruit, index) =&gt; {
const numFruit = numFruits[index];
return numFruit &gt; 20;
});
console.log(moreThan20);
console.log(“End”);
};
Start[“apple”];
End;</code></pre>
<figcaption>Console shows ‘Start’. One second later, console logs ‘[‘apple’]’ and ‘End’</figcaption>
</figure>
<h3 id="await-with-reduce"><strong>Await with reduce</strong></h3>
<p>For this case, let's say you want to find out the total number of fruits in the fruitBastet. Normally, you can use <code>reduce</code> to loop through an array and sum the number up.</p><pre><code>// Reduce if there’s no await
const reduceLoop = _ =&gt; {
console.log(“Start”);
const sum = fruitsToGet.reduce((sum, fruit) =&gt; {
const numFruit = fruitBasket[fruit];
return sum + numFruit;
}, 0);
console.log(sum);
console.log(“End”);
};</code></pre>
<p>You'll get a total of 41 fruits. (27 + 0 + 14 = 41).</p><pre><code>“Start”;
“41”;
“End”;</code></pre>
<figcaption>Console logs ‘Start’, ‘41’, and ‘End’ immediately</figcaption>
</figure>
<p>When you use <code>await</code> with reduce, the results get extremely messy.</p><pre><code>// Reduce if we await getNumFruit
const reduceLoop = async _ =&gt; {
console.log(“Start”);
const sum = await fruitsToGet.reduce(async (sum, fruit) =&gt; {
const numFruit = await getNumFruit(fruit);
return sum + numFruit;
}, 0);
console.log(sum);
console.log(“End”);
};
“Start”;
“[object Promise]14”;
“End”;</code></pre>
<figcaption>Console logs ‘Start’. One second later, it logs ‘[object Promise]14’ and ‘End’</figcaption>
</figure>
<p>What?! <code>[object Promise]14</code>?!</p>
<p>Dissecting this is interesting.</p>
<ul>
<li>In the first iteration, <code>sum</code> is <code>0</code>. <code>numFruit</code> is 27 (the resolved value from <code>getNumFruit(‘apple’)</code>). <code>0 + 27 </code>is 27.</li>
<li>In the second iteration, <code>sum</code> is a promise. (Why? Because asynchronous functions always return promises!) <code>numFruit</code> is 0. A promise cannot be added to an object normally, so the JavaScript converts it to <code>[object Promise]</code> string. <code>[object Promise] + 0 </code>is <code>[object Promise]0</code></li>
<li>In the third iteration, <code>sum</code> is also a promise. <code>numFruit</code> is <code>14</code>. <code>[object Promise] + 14</code> is <code>[object Promise]14</code>.</li>
</ul>
<p>Mystery solved!</p>
<p>This means, you can use <code>await</code> in a <code>reduce</code> callback, but you have to remember to <code>await</code> the accumulator first!</p><pre><code>const reduceLoop = async _ =&gt; {
console.log(“Start”);
const sum = await fruitsToGet.reduce(async (promisedSum, fruit) =&gt; {
const sum = await promisedSum;
const numFruit = await getNumFruit(fruit);
return sum + numFruit;
}, 0);
console.log(sum);
console.log(“End”);
};
“Start”;
“41”;
“End”;</code></pre>
<figcaption>Console logs ‘Start’. Three seconds later, it logs ‘41’ and ‘End’</figcaption>
</figure>
<p>But... as you can see from the gif, it takes pretty long to <code>await</code> everything. This happens because <code>reduceLoop</code> needs to wait for the <code>promisedSum</code> to be completed for each iteration.</p>
<p>There's a way to speed up the reduce loop. (I found out about this thanks to <a href="https://twitter.com/timkevinoxley" rel="noopener">Tim Oxley</a>. If you <code>await getNumFruits(</code>) first before <code>await promisedSum</code>, the <code>reduceLoop</code> takes only one second to complete:</p><pre><code>const reduceLoop = async _ =&gt; {
console.log(“Start”);
const sum = await fruitsToGet.reduce(async (promisedSum, fruit) =&gt; {
// Heavy-lifting comes first.
// This triggers all three getNumFruit promises before waiting for the next iteration of the loop.
const numFruit = await getNumFruit(fruit);
const sum = await promisedSum;
return sum + numFruit;
}, 0);
console.log(sum);
console.log(“End”);
};</code></pre>
<figcaption>Console logs ‘Start’. One second later, it logs ‘41’ and ‘End’</figcaption>
</figure>
<p>This works because <code>reduce</code> can fire all three <code>getNumFruit</code> promises before waiting for the next iteration of the loop. However, this method is slightly confusing since you have to be careful of the order you <code>await</code> things.</p>
<p>The simplest (and most efficient way) to use <code>await</code> in reduce is to:</p>
<p>1. Use <code>map</code> to return an array promises</p>
<p>2. <code>await</code> the array of promises</p>
<p>3. <code>reduce</code> the resolved values</p><pre><code>const reduceLoop = async _ =&gt; {
console.log(“Start”);
const promises = fruitsToGet.map(getNumFruit);
const numFruits = await Promise.all(promises);
const sum = numFruits.reduce((sum, fruit) =&gt; sum + fruit);
console.log(sum);
console.log(“End”);
};</code></pre>
<p>This version is simple to read and understand, and takes one second to calculate the total number of fruits.</p>
<figcaption>Console logs ‘Start’. One second later, it logs ‘41’ and ‘End’</figcaption>
</figure>
<h3 id="key-takeaways"><strong>Key Takeaways</strong></h3>
<p>1. If you want to execute <code>await</code> calls in series, use a <code>for-loop</code> (or any loop without a callback).</p>
<p>2. Don't ever use <code>await</code> with <code>forEach</code>. Use a <code>for-loop</code> (or any loop without a callback) instead.</p>
<p>3. Don't <code>await</code> inside <code>filter</code> and <code>reduce</code>. Always <code>await</code> an array of promises with <code>map</code>, then <code>filter</code> or <code>reduce</code> accordingly.</p>
<p>This article was originally posted on <a href="https://zellwk.com/blog/async-await-in-loops/" rel="noopener"><em>my blog</em></a><em>. </em><br>Sign up for my<a href="https://zellwk.com/" rel="noopener"> newsletter</a> if you want more articles to help you become a better frontend developer.</p>
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
