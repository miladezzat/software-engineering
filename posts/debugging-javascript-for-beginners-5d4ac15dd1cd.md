---
card: "https://cdn-media-1.freecodecamp.org/images/1*Tmt5zAQNLHt3GIELqHmFWw.jpeg"
tags: [JavaScript]
description: by Priyanka Garg
author: "Milad E. Fahmy"
title: "Debugging tips and tricks for JavaScript beginners"
created: "2021-08-15T19:35:14+02:00"
modified: "2021-08-15T19:35:14+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-debugging tag-beginner tag-tech tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">Debugging tips and tricks for JavaScript beginners</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*Tmt5zAQNLHt3GIELqHmFWw.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*Tmt5zAQNLHt3GIELqHmFWw.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*Tmt5zAQNLHt3GIELqHmFWw.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*Tmt5zAQNLHt3GIELqHmFWw.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*Tmt5zAQNLHt3GIELqHmFWw.jpeg" alt="Debugging tips and tricks for JavaScript beginners">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Priyanka Garg</p>
<p>My intended audience for this tutorial is beginner programmers. You’ll learn about frustration-free debugging with chrome dev tools.</p>
<p>Dear Beginner, a while ago, I was where you are! After a lot of struggles, I feel like I have come far in my learning journey. I am currently in the senior phase of an immersive bootcamp where I am building full stack applications.</p>
<p>Every day, I learn and stumble upon so many things, which I wished I knew before. This article is an attempt to share one such idea that will make your life easier.</p>
<p>As you must have learned, the best way to learn programming is by doing. Now, as you start practicing coding, sometimes (or most of the times) your code will not work; in other words, there will be a BUG in your code. And you may have already tried and learned some approaches to debugging. This article is not about any one debugging approach, but rather a setup to debug your code for programming practice.</p>
<p>If you are practicing on an online development environment, most probably you have a setup where you have an editor, a problem and a test suite that tests your program.</p>
<p>You have written code, and there are some bugs, and at some point, the errors thrown up by the test suite are not really helpful.</p>
<p>I won’t elaborate on how tedious debugging can become here — rather let me jump straight to some tips for beginners.</p>
<h3 id="the-problem">The problem</h3>
<p>As an example, I am writing a palindrome checker in FreeCodeCamp’s editor. My solution fails. In this case, we could use the test suite results to debug.</p>
<p>But let’s assume this test suite doesn’t give me great pointers to the exact error. (This may not be the ideal example in terms of a logical error. The point is you will come across problems where the test suite will not directly point to a logical error.)</p>
<h4 id="tip-use-the-console-of-developer-tools-"><strong>Tip:</strong> <strong>Use the console of developer tools.</strong></h4>
<p>I run the same code in the console with the failing test case, and I see it returns ‘undefined’. That means the code did not return any value. I can quickly see that I forgot to return ‘true ’ if the string was found to be a palindrome.</p>
<p>This was a very simple error. Most of the times you would have bugs that need you to examine your variables. One approach to check variables is to <strong><em>console.log(&lt;variable</em></strong>s&gt;) in the program.</p>
<p>However, I would suggest you use the <strong><em>dev tools debugger</em></strong> instead. In your program, you can specify the point where you want to start getting help from the debugger.</p>
<p>The debugger will show you all the variables in the call stack and let you step through function calls, which you will find very useful.</p>
<p>You will get the hang of using the debugger once you have used it a few times. Notice the arrows in the lower left box? These will let you control the program flow and show you the variables as they change.</p>
<p>Now let’s head for a trick.</p>
<h4 id="trick-make-a-personal-debugging-setup"><strong>Trick: Make a Personal Debugging Setup</strong></h4>
<p>As seen above, with debugger and console, we can identify the problems easily. However, if I want to run the corrected program again on the console with just one line of change, I would have to re-type it.</p>
<p>Even after that, I get an error:</p>
<p>This error is because I have used an arrow function, and cannot re-declare a <em>const.</em> This means that I would have to open a new tab and new console every time I change my code. Extra overhead, right?</p>
<p>Let's find a workaround. On your system, create a directory and cd into that directory.</p>
<p>Now create two files: index.js and index.html. Type the following HTML in index.html:</p>
<p>Now move your code from the console to index.js. Notice I have started the debugger on line 2 in the code.</p>
<p>Now run the index.html file in the browser. Open the developer tools or console (you may have to refresh to see the debugger). You can debug your code here.</p>
<p>Now every time you make a change to index.js you just hit refresh on this tab and the code reruns. No need to close and open tabs, no re-typing whole programs.</p>
<p>Keep the folder you just created handy. Whenever you need to try or debug a piece of code, pop that into index.js and experiment!!</p>
<h4 id="closing-thoughts">Closing thoughts</h4>
<p>If you already knew this, congratulations you wasted a valuable 4 minutes ;)</p>
<p>Finally, remember <em>to err is human! </em>Don’t worry about bugs — they will teach you the most valuable lessons of programming… and then ... <em>Oh! the places you’ll go…</em></p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
