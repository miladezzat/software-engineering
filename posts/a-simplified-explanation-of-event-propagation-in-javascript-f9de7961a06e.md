---
card: "https://cdn-media-1.freecodecamp.org/images/1*l9va7pNhLirT_nYfPWFt6w.jpeg"
tags: [Web Development]
description: "Imagine this scenario: You are building a list of users. You’"
author: "Milad E. Fahmy"
title: "A simplified explanation of event propagation in JavaScript."
created: "2021-08-16T14:41:16+02:00"
modified: "2021-08-16T14:41:16+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-web-development tag-tech tag-education tag-life-lessons tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">A simplified explanation of event propagation in JavaScript.</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*l9va7pNhLirT_nYfPWFt6w.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*l9va7pNhLirT_nYfPWFt6w.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*l9va7pNhLirT_nYfPWFt6w.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*l9va7pNhLirT_nYfPWFt6w.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*l9va7pNhLirT_nYfPWFt6w.jpeg" alt="A simplified explanation of event propagation in JavaScript.">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Imagine this scenario: <br>You are building a list of users. You’re displaying their names, favorite colors, and emails. When you click on a user (one row in the table), you want it to take you to the user record. Except for when you click on email, then it should pop up an email dialog.</p><p>You might write some code like this (we’re using a table here because it’s easy to understand — though of course we might use something much more complicated in our project):</p><pre><code class="language-html">&lt;Table&gt;
&lt;thead&gt;
&lt;tr&gt;
&lt;th&gt;Name&lt;/th&gt;
&lt;th&gt;Colors&lt;/th&gt;
&lt;th&gt;Email&lt;/th&gt;
&lt;/tr&gt;
&lt;/thead&gt;
&lt;tbody&gt;
&lt;tr&gt;
&lt;td&gt;Susie&lt;/td&gt;
&lt;td&gt;Blue, Red&lt;/td&gt;
&lt;td&gt;susie@hello.com&lt;/td&gt;
&lt;/tr&gt;
&lt;/tbody&gt;
e.stopPropagation()
// talk to my API, set the record as "done" or not
}
&lt;span onClick={this.handleCheck}&gt;[]&lt;/span&gt;</code></pre><p>That <code>e.stopPropagation()</code> halts this “bubbling” of events “up” through the DOM. We stop all of the other events in the stack. Awesome!</p><p>So my whole row gets to behave as it should, and this one little checkbox can have a special functionality.</p><h4 id="preventdefault-vs-stoppropagation"><code>preventDefault</code> vs. <code>stopPropagation</code></h4><p>You may be thinking: why not just use <code>e.preventDefault()</code>? That is indeed the first thing I tried, but there simply is no default behavior for a span (unlike a form, whose default submit behavior will refresh the page).</p><h3 id="cut-and-paste-example">Cut-and-paste example</h3><p>I write a lot of React, so I’m giving an example in React. But this would work the same in plain old HTML and JavaScript, using whatever method you’ve got to add event listeners:</p><pre><code class="language-html">&lt;div onClick={() =&gt; console.log('outer div')}&gt;
&lt;div onClick={() =&gt; console.log('middle div')}&gt;
&lt;div onClick={() =&gt; console.log('innermost div')}&gt;
Click me!
&lt;/div&gt;
&lt;/div&gt;
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
