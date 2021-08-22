---
card: "https://cdn-media-1.freecodecamp.org/images/1*bOWJPYtqtG_SsaHUsplcOg.jpeg"
tags: [JavaScript]
description: I had a problem. Before I tell you about this problem, be war
author: "Milad E. Fahmy"
title: "When you create software to learn programming, your most important user is you"
created: "2021-08-15T19:47:16+02:00"
modified: "2021-08-15T19:47:16+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-programming tag-humor tag-self-improvement tag-tech ">
<header class="post-full-header">
<h1 class="post-full-title">When you create software to learn programming, your most important user is you</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*bOWJPYtqtG_SsaHUsplcOg.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*bOWJPYtqtG_SsaHUsplcOg.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*bOWJPYtqtG_SsaHUsplcOg.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*bOWJPYtqtG_SsaHUsplcOg.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*bOWJPYtqtG_SsaHUsplcOg.jpeg" alt="When you create software to learn programming, your most important user is you">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>I had a problem. Before I tell you about this problem, be warned — you will get emotional if you keep reading. Your heart will break for me. There will be weeping, so much weeping. You will be tempted to start a GoFundMe page to help ease my burden.</p>
<p>OK, here it is. Ready? Grab a tissue.</p>
<p><strong>I have so many sneakers that I can’t remember all the pairs I own.</strong> Tragic, but true. The Red Cross has already declared this an international emergency.</p>
<p>Alright, alright — this is not a real problem. Well, maybe it’s the first-worldliest of first-world problems. Anyway, I’m not here to justify my obsession with retro sneakers (nostalgia, basketball fanatic, extra-feet syndrome). I’m here to explain why I created a web application to address this hyper-specific, undoubtedly trivial, quasi-problem-like situation that affects nobody but me.</p>
<figcaption>I can neither confirm nor deny that I built a shelf in my basement just for (some of) my sneakers.</figcaption>
</figure>
<p>I <a href="https://medium.freecodecamp.org/make-your-hobby-harder-programming-is-difficult-thats-why-you-should-learn-it-e4627aee41a1" rel="noopener">began to learn JavaScript</a> over a year ago as a hobby. I enjoy reading programming books, doing tutorials, and watching coding videos. Most of all, however, I like building things.</p>
<blockquote>I have one rule for every software project I start. The end result must be something I will actually use.</blockquote>
<p>Like anyone else, I sometimes need motivation to keep plugging away at a task when it becomes frustrating. Why am I sitting here debugging this code, in my free time, when I could be doing something far easier, like watching TV or drooling over <a href="https://www.instagram.com/p/BgpdPGvgK5h/?taken-by=nicekicks" rel="noopener">Air Maxes on Instagram</a>?</p>
<p>Sure, I’ve been tempted to quit on a personal software project. There would be no consequences. Nobody would care. Yet I never have. I’ve finished every project I’ve started (all three!) because I know that, eventually, after much head-scratching and Googling and <em>sotto voce</em> cursing, each app I create will be useful — to at least one person. And that person is … Barbra Streisand. Sorry, typo. And that person is … me.</p>
<figcaption>Sneakerhead family photo.</figcaption>
</figure>
<p>Which brings us back to shoes. Some sneaker collectors stock but don’t rock. Not me. I’m the <a href="http://onthedm.com/style/five-types-of-sneakerheads/" rel="noopener">type of sneakerhead</a> who wears all his shoes. On occasion, though, I’ve opened a long-sitting box to find myself looking at a pair of kicks that I not only hadn’t worn but had escaped my memory altogether.</p>
<blockquote>Seeing those poor sneakers just sitting there — neglected, unworn, unloved — caused me much anguish. Surely, no man has suffered such insufferable suffering.</blockquote>
<p>But save your sympathy, dear reader, and dry those eyes. For I have righted this horrible wrong, using nothing more than JavaScript and my wee, tiny brain. And Node. And Angular. And MongoDB. And Heroku. Stack Overflow also helped. And Git. And YouTube. Plus this computer-connecting thingy called “enterknit” or something.</p>
<figcaption>He who is first shall be last, and he who is last shall be first. Eventually. My collection is much larger than this demo. I mean, can you even imagine owning only six pairs of sneakers? What am I, a caveman?</figcaption>
</figure>
<p>I created a very simple web application I called Collection Tracker (<a href="https://cryptic-reef-56444.herokuapp.com/demo" rel="noopener">click here to try a demo</a>). It allows me to enter my sneaker collection into a database and browse a grid of images. Each morning, I open the application in Chrome (on my phone), I pick the pair I want to wear (on my feet), I press the “wear today” button (with my finger), and that day’s date is added to the database entry for those shoes (by digital magic).</p>
<p>The picture of that pair then drops to the last position of the last page of images. So when I open Collection Tracker, I first see pictures of the sneakers that have been sitting on my shelf the longest. No more neglected Nikes. No more abandoned ASICS. No more shunned Skechers. (Haha — Skechers. As if. Friends don’t let friends wear Skechers.)</p>
<figcaption>This is just a test. I wouldn’t wear a pair four times in the same month. I have a reputation to uphold.</figcaption>
</figure>
<p>Could I have just downloaded an existing app to my phone to organize my sneaker collection? Yes, of course. But you know what? Using this app is much more fun for me because I made it. It’s silly, but I really do look forward to pressing that “wear today” button every morning. Because I know it will call a function in my program, and that function will generate an HTTP request to Node, and Node will tell MongoDB to update my database, and that day’s date will be pushed into an array somewhere out there in the cloud.</p>
<blockquote>There is something so rewarding about using the software you created from scratch. It’s not just text on GitHub. It’s not just part of a portfolio. It’s part of your life.</blockquote>
<p>I also still use the first web application I made, called <a href="http://www.first-and-last.com/" rel="noopener">First and Last</a>, which I described in <a href="https://medium.freecodecamp.org/write-better-sentences-and-do-javascript-crud-with-mean-while-mostly-avoiding-acronyms-fe17905bcec5" rel="noopener">a previous post for freeCodeCamp</a>. It allows users to enter the first and last sentences of books into a database. I intended it to be a learning resource for other writers who, like me, enjoy improving their craft by studying the work of great authors. For months after I deployed it, though, I was the only person using this app, as you can see from the GIF below.</p>
<figcaption>These sentences were added by me, and by me, and by me, and also by … me.</figcaption>
</figure>
<p>Sure, it would be great if other people were interested in my project, but, again, I was fine with being the only user. Just as I enjoy using my sneaker-tracking app, I look forward to finishing a book so I can enter its first and last sentences into my database. Then I click back to the homepage and watch the number indicating the collection size increase by one. They say you should enjoy the little things in life, and this is indeed a little, but enjoyable, thing.</p>
<figcaption>I have to read only 667 more books to reach quadruple digits.</figcaption>
</figure>
<p>Then, one day, I noticed something when I visited First and Last. Someone had entered a pair of sentences — and that someone wasn’t me! In fact, that someone was … Barbra Streisand. Again, I apologize. The Barbra Streisand key on my keyboard appears to be stuck. Let’s try that again.</p>
<p>In fact, that someone was … another human being (I presume). Since then, about 100 people have registered and logged into my app, and some have made contributions, which I really appreciate. Turns out that when you build something for yourself, it’s possible that other people will stumble upon it and use it as well.</p>
<figcaption>Hello other humans! Thanks for the sentences.</figcaption>
</figure>
<p>One of the most fun parts of learning programming, if not the most fun part, is creating new things that actually do something. First, you had a blank screen on a text editor. Then you wrote some code. Then you had software — it may not be elegant or sophisticated or efficient, but it works. It performs the tasks you wanted it to perform. Maybe you’ll end up being the only person who ever uses that software. So what.</p>
<blockquote>If it’s useful to you, it’s useful.</blockquote>
<p>You may not have saved the world, or made any money, or attracted many users, but you made something from nothing. You learned a lot and created a tool that makes your life a little more convenient, or a little more fun. You added something of value to the universe — limited value, perhaps, but value nonetheless. The only code guaranteed to be useless is the code you don’t write.</p>
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
