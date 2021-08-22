---
card: "/images/default.jpg"
tags: [JavaScript]
description: This tutorial will help you to understand how the built-in Ja
author: "Milad E. Fahmy"
title: "JavaScript setTimeout() – How to Set a Timer in JavaScript or Sleep for N Seconds"
created: "2021-08-15T19:26:31+02:00"
modified: "2021-08-15T19:26:31+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript ">
<header class="post-full-header">
<h1 class="post-full-title">JavaScript setTimeout() – How to Set a Timer in JavaScript or Sleep for N Seconds</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2021/04/set-timeout.png 300w,
/news/content/images/size/w600/2021/04/set-timeout.png 600w,
/news/content/images/size/w1000/2021/04/set-timeout.png 1000w,
/news/content/images/size/w2000/2021/04/set-timeout.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2021/04/set-timeout.png" alt="JavaScript setTimeout() – How to Set a Timer in JavaScript or Sleep for N Seconds">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>This tutorial will help you to understand how the built-in JavaScript method &nbsp;<code>setTimeout()</code> works with intuitive code examples.</p>
<h2 id="how-to-use-settimeout-in-javascript">How to Use setTimeout() in JavaScript</h2>
<p>The <code>setTimeout()</code> method allows you to execute a piece of code after a certain amount of time has passed. You can think of the method as a way to set a timer to run JavaScript code at a certain time.</p>
<p>For example, the code below will print "Hello World" to the JavaScript console after 2 seconds have passed:</p>
console.log("Hello World");
}, 2000);
console.log("setTimeout() example...");</code></pre>
<figcaption>setTimeout() method example</figcaption>
</figure>
<p>The code above will first print "setTimeout() example..." to the console, and then print "Hello World" once two seconds have passed since the code has been executed by JavaScript.</p>
<p>The <code>setTimeout()</code> method syntax is as follows:</p>
<figcaption>setTimeout() method syntax</figcaption>
</figure>
<p>The first parameter of the <code>setTimeout()</code> method is a JavaScript <code>function</code> that you want to execute. You can write the <code>function</code> directly when passing it, or you can also refer to a named function as shown below:</p>
console.log("Hello World");
}
setTimeout(greeting);</code></pre>
<figcaption>setTimeout() method using named function as its argument</figcaption>
</figure>
<p>Next, you can pass the <code>milliseconds</code> parameter, which will be the amount of time JavaScript will wait before executing the code. </p>
<p>One second is equal to one thousand milliseconds, so if you want to wait for 3 seconds, you need to pass <code>3000</code> as the second argument:</p>
console.log("Hello World");
}
setTimeout(greeting, 3000);</code></pre>
<figcaption>setTimeout() method sleeping for 3 seconds</figcaption>
</figure>
<p>If you omit the second parameter, then <code>setTimeout()</code> will immediately execute the passed <code>function</code> without waiting at all.</p>
<p>Finally, you can also pass additional parameters to the <code>setTimeout()</code> method that you can use inside the <code>function</code> as follows:</p>
console.log(`Hello, my name is ${name}`);
console.log(`I'm a ${role}`);
}
setTimeout(greeting, 3000, "Nathan", "Software developer");</code></pre>
<figcaption>setTimeout() with additional parameters for the function</figcaption>
</figure>
<p>Now you may be thinking, "why not just pass the parameters directly to the function?"</p>
<p>This is because if you pass the parameters directly like this:</p><pre><code class="language-js">setTimeout(greeting("Nathan", "Software developer"), 3000);</code></pre>
<p>Then JavaScript will immediately execute the <code>function</code> without waiting, because you're passing a <em>function call</em> and not a <em>function reference</em> as the first parameter. </p>
<p>This is why if you need to pass any parameters to the function, you need to pass them from the <code>setTimeout()</code> method.</p>
<p>But honestly, I never found the need to pass additional parameters to the <code>setTimeout()</code> method in my role as a Software Developer, so don't worry about it 😉</p>
<h2 id="how-to-cancel-the-settimeout-method">How to Cancel the setTimeout Method</h2>
<p>You can also prevent the <code>setTimeout()</code> method from executing the <code>function</code> by using the <code>clearTimeout()</code> method.</p>
<p>The <code>clearTimeout()</code> method requires the <code>id</code> returned by <code>setTimeout()</code> to know which <code>setTimeout()</code> method to cancel:</p>
<figcaption>clearTimeout() syntax</figcaption>
</figure>
<p>Here's an example of the <code>clearTimeout()</code> method in action:</p>
console.log("Hello World");
}, 2000);
clearTimeout(timeoutId);
console.log(`Timeout ID ${timeoutId} has been cleared`);</code></pre>
<figcaption>clearTimeout() method in action</figcaption>
</figure>
<p>If you have multiple <code>setTimeout()</code> methods, then you need to save the IDs returned by each method call and then call <code>clearTimeout()</code> method as many times as needed to clear them all.</p>
<h2 id="conclusion">Conclusion</h2>
<p>The JavaScript <code>setTimeout()</code> method is a built-in method that allows you to time the execution of a certain <code>function</code> . You need to pass the amount of time to wait for in <code>milliseconds</code> , which means to wait for one second, you need to pass one thousand <code>milliseconds</code>.</p>
<p>To cancel a <code>setTimeout()</code> method from running, you need to use the <code>clearTimeout()</code> method, passing the ID value returned when you call the <code>setTimeout()</code> method.</p>
<h2 id="thanks-for-reading-this-tutorial"><strong><strong><strong>Thanks for reading this tutorial</strong></strong></strong></h2>
<p>If you want to learn more about JavaScript, you may want to check out my site at sebhastian.com, where I have published <a href="https://sebhastian.com/javascript-tutorials/">over 100 tutorials about programming with JavaScript</a>, all using easy-to-understand explanations and code examples.</p>
<p>The tutorials include String manipulation, Date manipulation, Array and Object methods, JavaScript algorithm solutions, and many more.</p>
<h2></h2>
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
