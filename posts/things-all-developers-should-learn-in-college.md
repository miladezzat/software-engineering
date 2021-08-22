---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9ca173740569d1a4ca4ea7.jpg"
tags: [JavaScript]
description: Source
author: "Milad E. Fahmy"
title: "Things All Developers Should Learn In College"
created: "2021-08-15T19:33:18+02:00"
modified: "2021-08-15T19:33:18+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-beginner tag-college tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">Things All Developers Should Learn In College</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9ca173740569d1a4ca4ea7.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9ca173740569d1a4ca4ea7.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9ca173740569d1a4ca4ea7.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9ca173740569d1a4ca4ea7.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9ca173740569d1a4ca4ea7.jpg" alt="Things All Developers Should Learn In College">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<hr>
<h2 id="forget-about-lines-of-code">Forget About "Lines of Code"</h2>
<p> <a href="https://images.techhive.com/images/article/2015/09/historic_loc-chart-100615917-large.idge.jpg">Source</a></p>
<p>As a developer, you'll hear a lot of crazy, unbelievable theories about what "lines of code" signify. Believe none of them. Lines of code is a ridiculous metric to base decisions on. In very rare cases it tells you something, in all the other cases, it tells you nothing. Using lines of code to make decisions is like rating book quality by number of pages.</p>
<p>Some might make the case that the fewer the lines of code there are in an application, the easier it is to read. This is only partially true, my metrics for readable code are:</p>
<ul>
<li>Code should be consistent</li>
<li>Code should be self descriptive</li>
<li>Code should be well documented</li>
<li>Code should utilize stable modern features</li>
<li>Code shouldn't be unnecessarily complex</li>
<li>Code shouldn't be un-performant (don't write intentionally slow code)</li>
</ul>
<p>The moment reducing the number of lines of code interferes with any of those, it becomes a problem. In practice, it will almost always interfere and thus is nearly always a problem. But here's the thing, if you strive to meet the above criteria, your code will be the perfect number of lines, <strong>no need for counting.</strong></p>
<h2 id="there-are-no-good-or-bad-languages">There Are No "Good" or "Bad" Languages</h2>
<p><em>														</em><a href="https://stackoverflow.blog/wp-content/uploads/2017/10/languages-1-900x675.png"><em>Except for php, just kidding</em></a></p>
<p>I see people say stuff like this, all the time:</p>
<blockquote>C is better than X, because performance</blockquote>
<p>|</p>
<blockquote>Python is better than X, because conciseness</blockquote>
<p>|</p>
<blockquote>Haskell is better than X, because aliens</blockquote>
<p>The notion, that a language comparison could be reduced down to a single sentence is almost insulting. They're languages, not Pokemon.</p>
<p>Don't get me wrong, there are definitely differences between languages. It's just that, there are very few "unusable" languages (although there are many outdated/dead languages). Each language brings it's own unique set of tradeoffs. In that regard, languages are similar to tools in a toolbox. A screwdriver can do what a hammer can't, but would you ever say a screwdriver is better than a hammer?</p>
<p>obviously the hammer is better</p>
<p>Before I talk about how I evaluate languages, I want to make something very clear. <strong>There are very few cases where the language choice actually matters.</strong> There are things you can obviously not do in some languages. If you write frontend code, you don't get a language choice. But in general, language choice is usually one of the least important issues for a project.</p>
<p>Here are the core aspects (ordered), that I believe should dictate your choice of language (these are it's Pokemon stats)</p>
<ul>
<li>Density of available online resources (StackOverflow density)</li>
<li>Development Velocity (vroom vroom)</li>
<li>Bug proneness (eeek)</li>
<li>Quality and breadth of package ecosystem (yea npm, it says quality)</li>
<li>Performance characteristics (more dots)</li>
<li>Hirability (sorry COBOL)</li>
</ul>
<p>There are also some strong couplings that are out of your hands. If you're working in data science, you realistically need to use Python, R or Scala (maybe Java). If it's a hobby project, use whatever will make you happiest. There's only one non-negotiable rule I have. I refuse to use languages that don't have most of the problems I will encounter, directly solved on StackOverflow. It's not that I can't solve it, it's just not worth the time.</p>
<h2 id="reading-other-people-s-code-is-hard">Reading Other People's Code is Hard</h2>
<p> <a href="http://www.sph.as/why-bible-reading-can-be-hard-for-kids-and-what-to-do-about-it/">Source</a></p>
<p>Reading other peoples code is difficult. Robert C. Martin talks about this in "Clean Code":</p>
<p>Indeed, the ratio of time spent reading versus writing is well over 10 to 1. We are constantly reading old code as part of the effort to write new code. ...[Therefore,] making it easy to read makes it easier to write.</p>
<p>For a long time, I assumed that I just sucked at reading other peoples code. Over time, I realized that it's something almost every programmer struggles with on a daily basis. Reading other people's code almost feels like reading a foreign language. Even if you're comfortable with the programming language choice of the writer, you still have to adjust to differing styles and architecture choices. This also assumes that the author wrote consistent and reliable code, which can be hit or miss. This is a really difficult one to overcome. There are a few things I've found helped a LOT.</p>
<p>Reviewing other peoples code will improve your code reading skills immensely. In the past two years, I've reviewed quite a few Github PR's. With each PR, I feel slightly more comfortable reading other peoples code. Github PR's are especially great for these reasons</p>
<ul>
<li>Can be practiced anytime, just find an open source project that you feel like you want to contribute to.</li>
<li>Practice reading in a scoped context (driving feature or bug of PR).</li>
<li>Attention to detail required, which will force you to evaluate each line.</li>
</ul>
<p>The second hack which can help you read other peoples code is a bit more unique. It's a technique I came up with, and it's really reduced the amount of time it takes for me to feel comfortable in a foreign codebase. After looking at the style of the code I want to read, I first open up vi and starting writing code in the style used by the project. When you write code in the new style, it will also improve your reading skills. The style will feel less foreign, as you've actually experienced it. Even if I'm just browsing a random project on Github, I'll quickly do this. Try it out.</p>
<h2 id="you-ll-never-write-perfect-code">You'll Never Write "Perfect" Code</h2>
<p> <a href="https://www.youtube.com/watch?v=WPoQfKQlOjg">Source</a></p>
<p>I was a "lone wolf" developer for 4 years before I started working on a team. For most of that time, I just had this assumption that every programmer in the industry wrote perfect code. I figured it was just a matter of time and effort before I also wrote "perfect" code.<br>It's something I used to feel really anxious about. Once I joined a team, it quickly became clear that no one was writing "perfect" code. But the code going into the system was almost always "perfect", what gives? The answer, code reviews.</p>
<p>I work with a team of really brilliant engineers. These are some of the most competent, confident programmers money can buy. Every single member of our team (including me) would have a full blown panic-attack if someone ever suggested committing un-reviewed code. Even if you think you're the next Bill Gates, you will make mistakes. I'm not even talking logical mistakes, I'm talking typos, missing characters. Things that your brain tunes out and will never pick up on. Things you need another set of eyes for.</p>
<p>Strive to work with others that are attentive to detail and willing to criticize your work. Hearing criticism is difficult at first, but it's the only consistent way to improve. Do your best to not become defensive during a code review, and never take any comments personally. You're not your code.</p>
<p>When I'm reviewing someone else's code, I just Google search every choice they make and see if it differs from strong popular opinion. Often times, looking at the same problem with a "beginners mind", can catch things the person would have never gone back and looked at.</p>
<h2 id="working-as-a-programmer-doesn-t-mean-8-hours-of-programming-a-day">Working as a Programmer Doesn't Mean 8 Hours of Programming a Day</h2>
<p>This is a very common question, but people never seem to give a clear answer.</p>
<p><strong>Very few people are writing code for more than 4 hours a day</strong></p>
<p>People who disagree with this are either the exception to the rule or work at companies that should treat them better. Programming is a mentally draining, focus intensive task. It's entirely unreasonable to expect anyone to write code for 8 hours a day, 5 days a week. There will be rare cases where you need to meet a deadline or pull a little extra for a stretch, but those are few and far between. When I say "rare", I mean almost never. Do not tolerate a workplace that abuses you and makes you work overtime due to poor planning/under-hiring.</p>
<p>For the record, it's not even in your companies best interest for you to work 8 hours a day. Your boss might think that's the case, but it's shortsighted and ignores the longterm implications, on productivity and mental health.</p>
<p>I highly recommend taking regular breaks during the day, and exercising (even if only briefly). The benefits of exercise on mental fatigue are well documented. I've personally found that exercise especially helps if I'm having trouble focusing.</p>
<h2 id="conclusion">Conclusion</h2>
<p>These are a few of the things I wish they were teaching at university instead of pure theory. In the process of writing this, I came up with a ton of other items but those will have to come in the next post!</p>
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
