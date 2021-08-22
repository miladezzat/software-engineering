---
card: "https://cdn-media-1.freecodecamp.org/images/1*ETy_5fhvpirGCwJgZXwuRw.jpeg"
tags: [Testing]
description: "by JonLuca De Caro"
author: "Milad E. Fahmy"
title: "A Beginner’s Guide to Testing: Error Handling Edge Cases"
created: "2021-08-15T23:48:21+02:00"
modified: "2021-08-15T23:48:21+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-testing tag-computer-science tag-programming tag-coding tag-tech ">
<header class="post-full-header">
<h1 class="post-full-title">A Beginner’s Guide to Testing: Error Handling Edge Cases</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*ETy_5fhvpirGCwJgZXwuRw.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*ETy_5fhvpirGCwJgZXwuRw.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*ETy_5fhvpirGCwJgZXwuRw.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*ETy_5fhvpirGCwJgZXwuRw.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*ETy_5fhvpirGCwJgZXwuRw.jpeg" alt="A Beginner’s Guide to Testing: Error Handling Edge Cases">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by JonLuca De Caro</p><p>When building complex pieces of software, regardless of language, you start to notice a pattern in your testing habits. The same similar-looking issues will arise across different platforms or projects. Regardless of whether you’re building another simple to-do list demo for a talk or architecting a comprehensive back-end for a PaaS startup, the same generic patterns begin to emerge.</p><p>There are six cases that should be tested that will shine a light on a surprising number of issues. These are not meant to be comprehensive, or a complete test suite of their own. Rather, they’re an easy-to-remember subset of common testing paradigms that can apply to any language, framework, or environment.</p><p>These cases are immediately useful in two aspects of daily coding routines: debugging specific issues as they arise, and in the creation of the testing suite for a code base. They are intended to be generic, abstract forms of testing that will shine a light on some of the most common issues junior developers face.</p><p>These will only be useful in a roundabout way in functional programming. Functional programming circumvents many of the simplest types of bugs outlined below. Either way, it’s useful to keep these sort of abstract boundary cases in mind, as they provide a guard rail against bad practices in code.</p><p>The six tests are as follows:</p><ul><li>Zero</li><li>One</li><li>Two</li><li>Two to max-1</li><li>max</li><li>max+1</li></ul><p>Even though these are boundary cases, their value is in what they represent. While ensuring that your tests cover all functionality of your program, you should keep your tests simple with as a little flair as possible.</p><h3 id="zero">Zero</h3><p>Zero is used to signify any form of null input, whether that’s undefined, null, an empty array, or simply the actual number 0. Arguably the most common and simple form of bug is referencing a Zero value, and it always bears testing. Simply test a function, endpoint, or upload with a Zero input, and verify that it behaves as expected.</p><h3 id="one">One</h3><p>One, like Zero, is the most basic form of the genericized single test. The function gets tested with the first valid, normal input. This is most useful for regression testing. In future iterations of the code, this test will quickly indicate if the program (or process) is operating as expected.</p><p>One testing gives you a baseline for success, whether that’s a successful authentication on an admin endpoint, a valid file upload, or a correct array modification.</p><h3 id="two">Two</h3><p>Two is not simply about testing array index 2, or whether your algorithm works with 2 inputs. It also encompasses what happens when you run the same code twice.</p><p>If someone were to make a DELETE HTTP request twice in a row to the same resource, what happens? If the sort function with a custom comparator gets called twice in a row, does it behave as expected?</p><p>Two is an interesting number, because it’s the first time in which valid code that works when called once can show side effects on repeated executions. Take a small change to the functions we’ve tested above.</p><p>It comes down to modifications of state, and understanding the behavior of a function. If all we have is the function name then this code behaves precisely as anticipated. You have a variable called 0, you call the function setVarToOne, and then you assert that it’s equal to one.</p><p>On first, glance, this behaved exactly as expected. However, testing it with the idea of Two in mind would highlight deeper issues with the code. You’d test it by calling it twice, and asserting that in both cases, mVar is equal to 1.</p><h3 id="two-to-max-1">Two to max-1</h3><p>Two to max-1 is the sanity check. It’s very similar to the One test, but there’s a subtle difference. This should be an <strong>average</strong> use case — not the simplest or most straightforward, or the easiest to read. Just an average use case that perhaps isn’t particularly simple, but that’s fairly <strong>common</strong><em>.</em></p><h3 id="max">Max</h3><p>Max is fairly straightforward: it simply tests the limits of your application, especially around defined max constants.</p><p>If you have a simple linked list implementation, you might imagine that you have a seemingly infinite number of allowed inserts. In reality, there is an upper limit — whether that’s INT_MAX, the number of file descriptors your OS can have open, or simply the amount of memory or disk space allocated for your program.</p><p>Under some circumstances, Max might seem like an impossible test because there is no known max for whatever you’re testing. It’s goal in these cases, however, is of another nature: to stress test your application.</p><p>For instance, it’s possible that a certain piece of user-submitted data gets reduced and passed through functions until it reaches a loop you’ve defined. If this data is, say, INT_MAX, it might take a non-negligible amount of time for your code to complete. Worse, it might throw your code into a non-halting state. These can be subtle issues that only arise once your code goes into production, so it’s important to catch them during the testing phase.</p><h3 id="max-1">Max+1</h3><p>Max+1 is a test that is mostly used to verify the standards or rules put in place by the programmer. This involves testing anything to its theoretical limit + epsilon.</p><p>This could manifest as an array out of bounds problem, an off by one error, an integer overflow error, or any other sort of problem that happens when you reach the boundaries of your function or program.</p><p>If you have a max file upload size of 2mb, try uploading a file that’s 2mb+1b in size. If you have a limit on the number of entries in a user catalog, make sure that the verification is happening both client side <strong>and</strong><em> </em>server side.</p><h3 id="conclusion">Conclusion</h3><p>As mentioned above, this isn’t a complete picture of what your debugging or testing routines should be. This simply provides a solid, generic baseline that should transcend any specific testing suite or framework.</p><p>The tests are commonly seen as boundary or edge cases, but they can rear their ugly head in places that aren’t immediately obvious.</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
