---
card: "/images/default.jpg"
tags: [JavaScript]
description: In JavaScript, a debounce function makes sure that your code
author: "Milad E. Fahmy"
title: "Debounce – How to Delay a Function in JavaScript (JS ES6 Example)"
created: "2021-08-15T19:27:33+02:00"
modified: "2021-08-15T19:27:33+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript ">
<header class="post-full-header">
<h1 class="post-full-title">Debounce – How to Delay a Function in JavaScript (JS ES6 Example)</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2021/01/teaser.jpg 300w,
/news/content/images/size/w600/2021/01/teaser.jpg 600w,
/news/content/images/size/w1000/2021/01/teaser.jpg 1000w,
/news/content/images/size/w2000/2021/01/teaser.jpg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2021/01/teaser.jpg" alt="Debounce – How to Delay a Function in JavaScript (JS ES6 Example)">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>In JavaScript, a debounce function makes sure that your code is only triggered once per user input. Search box suggestions, text-field auto-saves, and eliminating double-button clicks are all use cases for debounce. </p>
<p>In this tutorial, we'll learn how to create a debounce function in JavaScript.</p>
<h2 id="what-is-debounce">What is debounce?</h2>
<p>The term <strong>debounce</strong> comes from electronics. When you’re pressing a button, let’s say on your TV remote, the signal travels to the microchip of the remote so quickly that before you manage to release the button, it bounces, and the microchip registers your “click” multiple times.</p>
<p>To mitigate this, once a signal from the button is received, the microchip stops processing signals from the button for a few microseconds while it’s physically impossible for you to press it again.</p>
<h2 id="debounce-in-javascript">Debounce in JavaScript</h2>
<p>In JavaScript, the use case is similar. We want to trigger a function, but only once per use case. </p>
<p>Let's say that we want to show suggestions for a search query, but only after a visitor has finished typing it. </p>
<p>Or we want to save changes on a form, but only when the user is not actively working on those changes, as every "save" costs us a database trip. </p>
<p>And my favorite—some people got really used to Windows 95 and now double click everything 😁.</p>
<p>This is a simple implementation of the <em>debounce</em> function (<a href="https://codepen.io/ondrabus/pen/WNGaVZN">CodePen here</a>):</p>
let timer;
return (...args) =&gt; {
clearTimeout(timer);
timer = setTimeout(() =&gt; { func.apply(this, args); }, timeout);
};
}
function saveInput(){
console.log('Saving data');
}
const processChange = debounce(() =&gt; saveInput());
</code></pre>
<p>It can be used on an input:</p>
</code></pre>
<p>Or a button:</p>
</code></pre>
<p>Or a window event:</p>
</code></pre>
<p>And on other elements like a simple JS function.</p>
<p>So what’s happening here? The <code>debounce</code> is a special function that handles two tasks:</p>
<ul>
<li>Allocating a scope for the <em>timer</em> variable</li>
<li>Scheduling your function to be triggered at a specific time</li>
</ul>
<p>Let’s explain how this works in the first use case with text input. </p>
<p>When a visitor writes the first letter and releases the key, the <code>debounce</code> first resets the timer with <code>clearTimeout(timer)</code>. At this point, the step is not necessary as there is nothing scheduled yet. Then it schedules the provided function—<code>saveInput()</code>—to be invoked in 300 ms. </p>
<p>But let's say that the visitor keeps writing, so each key release triggers the <code>debounce</code> again. Every invocation needs to reset the timer, or, in other words, cancel the previous plans with <code>saveInput()</code>, and reschedule it for a new time—300 ms in the future. This goes on as long as the visitor keeps hitting the keys under 300 ms. </p>
<p>The last schedule won’t get cleared, so the <code>saveInput()</code> will finally be called.</p>
<h2 id="the-other-way-around-how-to-ignore-subsequent-events">The other way around—how to ignore subsequent events</h2>
<p>That’s good for triggering auto-save or displaying suggestions. But what about the use case with multiple clicks of a single button? We don’t want to wait for the last click, but rather register the first one and ignore the rest (<a href="https://codepen.io/ondrabus/pen/bGwmXjN">CodePen here</a>).</p>
let timer;
return (...args) =&gt; {
if (!timer) {
func.apply(this, args);
}
clearTimeout(timer);
timer = setTimeout(() =&gt; {
timer = undefined;
}, timeout);
};
}
</code></pre>
<p>Here we trigger the <code>saveInput()</code> function on the first <code>debounce_leading</code> call caused by the first button click. We schedule the timer destruction for 300 ms. Every subsequent button click within that timeframe will already have the timer defined and will only push the destruction 300 ms to the future.</p>
<h2 id="debounce-implementations-in-libraries">Debounce implementations in libraries</h2>
<p>In this article, I showed you how to implement a debounce function in JavaScript and use it to, well, debounce events triggered by website elements. </p>
<p>However, you don’t need to use your own implementation of <em>debounce</em> in your projects if you don’t want to. Widely used JS libraries already contain its implementation. Here are a few examples:</p>
<table style="border-spacing: 0; border-collapse: collapse;">
<tbody>
<tr>
<td style="padding: 4px; border: 1px solid black;"><em><strong>Library</strong></em></td>
<td style="padding: 4px; border: 1px solid black;"><em><strong>Example</strong></em></td>
</tr>
<tr>
<td style="padding: 4px; border: 1px solid black;"><a href="http://benalman.com/projects/jquery-throttle-debounce-plugin/">jQuery (via library)</a></td>
<td style="padding: 4px; border: 1px solid black;"><code>$.debounce(300, saveInput);</code></td>
</tr>
<tr>
<td style="padding: 4px; border: 1px solid black;"><a href="https://lodash.com/docs/4.17.15#debounce">Lodash</a></td>
<td style="padding: 4px; border: 1px solid black;"><code>_.debounce(saveInput, 300);</code></td>
</tr>
<tr>
<td style="padding: 4px; border: 1px solid black;"><a href="https://underscorejs.org/#debounce">Underscore</a></td>
<td style="padding: 4px; border: 1px solid black;"><code>_.debounce(saveInput, 300);</code></td>
</tr>
</tbody>
</table>
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
