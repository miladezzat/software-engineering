---
card: "https://cdn-media-1.freecodecamp.org/images/1*7F50Qc-ysFgy6tCjUyruTA.jpeg"
tags: [Programming]
description: Usually, the machine that executes our code has limited resou
author: "Milad E. Fahmy"
title: "Limiting concurrent operations in JavaScript"
created: "2021-08-15T19:42:26+02:00"
modified: "2021-08-15T19:42:26+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-programming tag-concurrency tag-javascript tag-tech tag-productivity ">
<header class="post-full-header">
<h1 class="post-full-title">Limiting concurrent operations in JavaScript</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*7F50Qc-ysFgy6tCjUyruTA.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*7F50Qc-ysFgy6tCjUyruTA.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*7F50Qc-ysFgy6tCjUyruTA.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*7F50Qc-ysFgy6tCjUyruTA.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*7F50Qc-ysFgy6tCjUyruTA.jpeg" alt="Limiting concurrent operations in JavaScript">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Usually, the machine that executes our code has limited resources. Doing everything at once might not only hurt, but can also hang our process and make it stop responding altogether.</p>
<p>When we want to crawl 100 websites, we should crawl, for example, 5 at once, so that we don’t take up all the available bandwidth. As soon as one website is crawled, the next one is ready to go.</p>
<p>Generally speaking, all “heavy” operations should be laid out in time. They should not be executed all-at-once, for better performance and to save resources.</p>
<h3 id="implementation">Implementation</h3>
<p>If you are familiar with my previous post about <a href="https://medium.freecodecamp.org/how-to-implement-promises-in-javascript-1ce2680a7f51" rel="noopener">implementing promises</a>, then you are going to notice many similarities.</p><pre><code class="language-typescript">class Concurrently&lt;T = any&gt; {
private tasksQueue: (() =&gt; Promise&lt;T&gt;)[] = [];
private tasksActiveCount: number = 0;
private tasksLimit: number;
public constructor(tasksLimit: number) {
if (tasksLimit &lt; 0) {
throw new Error('Limit cant be lower than 0.');
}
this.tasksLimit = tasksLimit;
}
private registerTask(handler) {
this.tasksQueue = [...this.tasksQueue, handler];
this.executeTasks();
}
private executeTasks() {
while (this.tasksQueue.length &amp;&amp; this.tasksActiveCount &lt; this.tasksLimit) {
const task = this.tasksQueue[0];
this.tasksQueue = this.tasksQueue.slice(1);
this.tasksActiveCount += 1;
task()
.then((result) =&gt; {
this.tasksActiveCount -= 1;
this.executeTasks();
return result;
})
.catch((err) =&gt; {
this.tasksActiveCount -= 1;
this.executeTasks();
throw err;
});
}
}
public task(handler: () =&gt; Promise&lt;T&gt;): Promise&lt;T&gt; {
return new Promise((resolve, reject) =&gt;
this.registerTask(() =&gt;
handler()
.then(resolve)
.catch(reject),
),
);
}
}
export default Concurrently;</code></pre>
<p>We register a given task by adding it to our <em>tasksQueue</em> and then we call <em>executeTasks</em>.</p>
<p>Now we execute as many tasks as our limit allows us — one by one. Each time adding 1 to our counter called <em>tasksActiveCount</em>.</p>
<p>When the executed task finishes, we remove 1 from <em>tasksActiveCount</em> and again call <em>executeTasks</em>.</p>
<p>Below we can see an example of how it works.</p>
<p>The limit is set to 3. The first two tasks are taking very long to process. We can see the third “slot” getting opened from time to time, allowing the next task in the queue to be executed.</p>
<p>Always there are three, no more, no less.</p>
<figcaption>Executing heavy and light tasks with the limit of 3.</figcaption>
</figure>
<p>You can see the code in the <a href="https://github.com/maciejcieslar/concurrently" rel="noopener">repository</a>.</p>
<p>Thank you very much for reading! Can you think of any other way of achieving the same effect? Share them down below.</p>
<p>If you have any questions or comments feel free to put them in the comment section below or send me a <a href="https://www.mcieslar.com/contact" rel="noopener">message</a>.</p>
<p>Check out my <a href="https://www.maciejcieslar.com/about/" rel="noopener">social media</a>!</p>
<p><a href="http://eepurl.com/dAKhxb" rel="noopener">Join my newsletter</a>!</p>
<p><em>Originally published at <a href="https://www.mcieslar.com/limiting-concurrent-operations-in-javascript" rel="noopener">www.mcieslar.com</a> on August 28, 2018.</em></p>
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
