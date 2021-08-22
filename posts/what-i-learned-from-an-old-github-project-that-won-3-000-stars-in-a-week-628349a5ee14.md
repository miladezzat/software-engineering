---
card: "https://cdn-media-1.freecodecamp.org/images/0*RJ3529egn26oSMl4.png"
tags: [Open Source]
description: by TOAST UI
author: "Milad E. Fahmy"
title: "What I learned from an old GitHub project that won 3,000 Stars in a Week"
created: "2021-08-15T19:48:05+02:00"
modified: "2021-08-15T19:48:05+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-open-source tag-programming tag-javascript tag-github tag-tech ">
<header class="post-full-header">
<h1 class="post-full-title">What I learned from an old GitHub project that won 3,000 Stars in a Week</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/0*RJ3529egn26oSMl4.png 300w,
https://cdn-media-1.freecodecamp.org/images/0*RJ3529egn26oSMl4.png 600w,
https://cdn-media-1.freecodecamp.org/images/0*RJ3529egn26oSMl4.png 1000w,
https://cdn-media-1.freecodecamp.org/images/0*RJ3529egn26oSMl4.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/0*RJ3529egn26oSMl4.png" alt="What I learned from an old GitHub project that won 3,000 Stars in a Week">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by TOAST UI</p>
<h1 id="what-i-learned-from-an-old-github-project-that-won-3-000-stars-in-a-week">What I learned from an old GitHub project that won 3,000 Stars in a Week</h1>
<figcaption>Hooray! 5,000 Stars!</figcaption>
</figure>
<h3 id="a-lonely-open-source">A Lonely Open Source</h3>
<p>We have been developing a <a href="https://github.com/nhnent/tui.editor" rel="noopener">Markdown WYSIWYG Editor</a> project for three years, with its first commit in March 2015. I went to work on December 30, 2017 to release version 1.0 and publish it to <a href="https://www.npmjs.com/package/tui-editor" rel="noopener">npm</a>.</p>
<p>At that time, the repository was as quiet as the air in the office at the end of the year. An issue posted once in several months, and it seemed to try to say “This project is open source.” It received exactly 160 GitHub stars over three years, and a pull request was hard to expect.</p>
<p>No surprise. Even from <a href="https://github.com/google" rel="noopener">Google</a> and <a href="https://github.com/facebook" rel="noopener">Facebook</a>, there are open source projects that have no contributors. I guess some of you may have experienced disappointment as your precious open source went to nothing but the void. Moreover, we are used to using <a href="https://github.com/" rel="noopener">GitHub</a> as our free Git repository. Aren’t we?</p>
<p>As of release 1.0, I wanted more people to know about this project. I believed this project was worth more than what it looked like at that point. I did a few things to accomplish that, and as a result it got 2,000 stars in 4 days and 3,000 stars in a week! Now It has over 5,500 stars and full issues and pull requests. It happened in only one month.</p>
<figcaption>Yes. I tried to record everything that seemed important. ? </figcaption>
</figure>
<p>I wrote this article to share my experience over the last month. I will also show you the numbers I recorded when possible. I hope it can help you to make your open source project full of contributors.</p>
<h3 id="a-good-readme-file-earns-stars">A good README file earns stars</h3>
<p>Despite the nearly three years we had been developing our editor, no one seemed interested in it. It was inevitable, as the documents were poor.</p>
<p>Even for a washing machine, you will want to read the manual once. You should provide even more documents for your project.</p>
<p>The README file describes the essence of the project. The DEMO shows it is ready to use. Examples should be the first step in various requirements. Tutorials should help anyone get started.</p>
<p>If you miss any of these documents, users will give up on your project. Pushing out source code doesn’t make your project an open source project.</p>
<p>Among the documents, the README plays the most important role. It is not enough just to list several documents. You, I, and most developers are lazy. Most visitors will simply scroll down about twice on the README and leave if they are not interested. So, the README file should provide the reason why developers want your project.</p>
<figcaption>TOAST UI Editor README.md for 0.14.0 and 1.0.0</figcaption>
</figure>
<p>Let’s see what difference updating the README file brought. GitHub Stars are actually nothing but bookmarks for visitors. But the number of GitHub stars tells you how much visitors are interested in your project.</p>
<p>The tables below are the number of stars and unique visitors I recorded before and after I published the TOAST UI Editor 1.0.</p>
<p>There were no features added or design refreshes. There were only updates to the documents — mostly in the README file — and some refactoring. The following numbers resulted entirely from changes in the README file.</p>
<figcaption>Number of Unique Visitors and Stars. Documents update on 12/30/2017</figcaption>
</figure>
<figcaption>Star/UV is almost 5x after updating README</figcaption>
</figure>
<p>It would’ve been better if we had a record from the start of the project. But I just recorded the numbers to check on trends. I can’t help this at this point. So, let’s just look at the numbers, and I’ll leave it to your gut feeling.</p>
<p>Before updating the README file, about 4% of all visitors gave a star. Surprisingly, after updating the README file, about 20% of all visitors gave a star. By updating the README file, this project received almost <strong>five times more stars</strong> from visitors!</p>
<p>Everyone says that the README file is important. But who knew it would make such a huge difference? I was also surprised to see this. If you want to have contributors on a project, you should write a nice attractive README file more than anything else.</p>
<p>You can easily find articles about how to write a nice README file on Google. It is also a good idea to study the READMEs in other projects listed on <a href="https://github.com/matiassingers/awesome-readme" rel="noopener">Awesome Readme</a>.</p>
<h3 id="spread-the-word-around-the-community">Spread the word around the community</h3>
<p>Our project had about ten visitors a day. If you worked hard on your documents, it is time to let people know about your project.</p>
<p>Of course, it would be best if someone else spread the word about your project instead of you. But you have to start it yourself. If your project is not linked from anywhere, it won’t be shown in Google searches. Nobody would know that your project exists.</p>
<h4 id="talk-about-your-project-every-chance-you-have"><strong>Talk about your project every chance you have</strong></h4>
<p>Answer the questions on <a href="https://stackoverflow.com/" rel="noopener">StackOverflow</a> and <a href="https://www.quora.com/" rel="noopener">Quora</a>. Talk to people in <a href="https://www.facebook.com/groups/" rel="noopener">Facebook Groups</a>. Submit a link to <a href="https://news.ycombinator.com/" rel="noopener">HackerNews</a> and <a href="https://www.reddit.com/" rel="noopener">Reddit</a>. And ask <a href="http://javascriptweekly.com/issues/368" rel="noopener">Newsletters</a> to post your project.</p>
<figcaption>Tell them what your project is.</figcaption>
</figure>
<p>You can also ask communities to help you with your project, as well as tell them about your project.</p>
<p>But, do not spam them blindly. Communities and the media have different personalities. Spamming your project without understanding each community may cause your posting to be deleted or simply ignored. In the worst case, you may be banned from those communities, or your project may get a bad reputation.</p>
<p>Be active in each community to understand them. Knowing communities is not just good for PR. What you learn from them will help your projects, too.</p>
<p>One day a salesman told me:</p>
<blockquote>“Engaging your customers in your work is the best way to get loyal customers.”</blockquote>
<p>I agree one hundred percent on this. And I think we should do the same for our work.</p>
<p>As I updated the README file, I asked them to review the document. And thankfully, two people sent a pull request after reviewing the new README. I’m sure the two of them are more interested in our project than any other visitors. I bet they also hit a star on our project.</p>
<figcaption>Thank you guys ? </figcaption>
</figure>
<h3 id="learn-github-explore">Learn GitHub Explore</h3>
<p>GitHub is the best place to get your contributors. If your project is on GitHub, don’t look too far away, and learn more about it first. At the top of GitHub, you can always find a menu that follows you around with a cute Octocat. The <a href="https://github.com/explore" rel="noopener">Explore</a> is what we should pay attention to. The page shows developers useful and interesting open-source projects.</p>
<p>Explore gives you an opportunity to showcase your project to <a href="https://octoverse.github.com/" rel="noopener">24 million GitHub users</a>. That’s why you should maintain your open source project on GitHub.</p>
<p>Other services are also great, so don’t get me wrong. I have been using BitBucket for a very long time to manage personal projects privately. GitLab also has really nice features that sometimes work better for me than GitHub’s in recent years. However, open source projects must be maintained on GitHub to get visitors from Explore.</p>
<figcaption>GitHub Explore Trending &amp; Topics</figcaption>
</figure>
<p>Take a look at what kind of project there are, discover what are the good parts of those projects, and how the current trend is going. If you haven’t seen the Explore page yet, it’s time to check it out. Here you can learn what you need to do to make your project better.</p>
<p>When you open this page, you will see the <a href="https://github.com/collections" rel="noopener">Collections</a>, <a href="https://github.com/topics" rel="noopener">Topics</a>, and <a href="https://github.com/trending" rel="noopener">Trending</a> tabs — each of those list nice open source projects. Among them, we will look into Trending and Topics. We can’t help with the Collections, as it is curated by GitHub.</p>
<h3 id="visitor-incentives-from-github-trending">Visitor Incentives from GitHub Trending</h3>
<p>The Trending section in the Explore Main page shows projects that received the highest number of stars that week in all languages. Getting up there would be really hard.</p>
<figcaption>Trending Main 1st with 4,761 stars this week. You’ll need luck to take this place.</figcaption>
</figure>
<p>But you don’t have to give up. Narrow the language and date range, then look at the projects in the lower ranks. There will be a realistic number which your project can also reach.</p>
<figcaption>Trending Today JavaScript 25th with 63 stars today. You can do this too.</figcaption>
</figure>
<p>Focus on visitors within certain days to get on the list by bringing in every community you are in. If you can collect enough stars, your project can be on the Trending list, too. The number of stars you get depends on your project language, day of week, and so on.</p>
<p>If you released a new project or added features to the project, it is the perfect time to put it out there. Don’t be disappointed even if your project is listed low. Your project will still get additional visitors. Think of the Trending section as incentive for visitors based on your rank.</p>
<figcaption>Unique Visitors on Jan. 10, Jan. 11</figcaption>
</figure>
<p>The chart above is a breakdown of visitors at GitHub Insight after I spread the word in various communities on January 10. Referring Sites in GitHub Insight gives values from a two week period, so you need to make some calculations to get the numbers you want.</p>
<p>On January 10 — Day One — almost all visitors came from my own communities. Luckily, a small GitHub.com part in the chart shows that our editor was on the Trending list. The next day, on January 11, GitHub was already bringing in half the traffic. It is good incentive to be on the Trending list.</p>
<figcaption>Unique Visitors on Jan. 12.</figcaption>
</figure>
<p>The next day, on January 12, the editor was recorded as the #1 Trending Today in all languages. Most of the visitors came from GitHub. From this day on, visitors coming in from the posts I wrote myself decreased considerably. On the other hand, as visibility increased, visitors were appearing from unexpected referrers.</p>
<figcaption>Unique Visitors on Jan. 13.</figcaption>
</figure>
<p>The following day, January 13, most visitors came from GitHub. The editor recorded 2,000 stars on this day, <strong>four days</strong> after it was posted on the communities. Although the growth has decreased since then, a month later, the <a href="https://github.com/trending?since=monthly" rel="noopener">Trending for This Month</a> is still bringing in new visitors.</p>
<h3 id="steady-visitors-from-github-topics">Steady visitors from GitHub Topics</h3>
<p>Topics show projects in the order of the number of stars in a topic.</p>
<p>This means once your project has enough stars to be listed on a Topic, it can still get visitors through the Topic, even if your project is unlisted from Trending.</p>
<p>There are not as many visitors from the Topic list as from Trending. But it is still worth it.</p>
<figcaption>Project Topics in Repository Page</figcaption>
</figure>
<p>I saw many projects that have no Topics. Look at the image above to see where you can set up Topics in your project. You can set up any Topics you want.</p>
<p>However, GitHub manages a list named <a href="https://github.com/topics" rel="noopener">Featured Topics</a>. Therefore, it is better to choose the relevant topics from the Featured Topics to get more visitors.</p>
<figcaption>GitHub Explore All Featured Topics &amp; Popular Topics</figcaption>
</figure>
<p>In addition, the number of stars needed to be listed on top varies significantly depending on the topics.</p>
<p>Take the JavaScript Topic as an example. There is dinosaur-sized project like FreeCodeCamp (hello guys ?), BootStrap, React, Vue and so on. This makes it about 100 times harder to get your project on this list.</p>
<figcaption>GitHub Explore JavaScript Topic. Your project will never beat freeCodeCamp. ? </figcaption>
</figure>
<p>Our editor is ranked 10th in the Markdown Topic with 5.4k stars. Take a look at the Topics and choose topics those are not too competitive.</p>
<h3 id="the-best-single-line-for-your-project-description">The best single line for your project description</h3>
<figcaption>Project Description in Repository Page</figcaption>
</figure>
<p>Let’s find the description in the image above again. What is the project description for your project? I had written the description of our editor as a long version of the title (this is a bad idea). Have you come up with your line? Then let’s look at the next image.</p>
<figcaption>A Project on Trending &amp; Topics List</figcaption>
</figure>
<p>This is what the our project looks like on Trending and Topics. Try to look at it from the point of view of visitors. There is an organization, a name, contributor pictures, and so on. The only useful information there to determine whether to click or not is the description.</p>
<p>The description should be the best single line to describe your project.</p>
<h3 id="final-word">Final word</h3>
<p>Write documents. Be active in communities. Utilize GitHub’s tools.</p>
<p>The tips I share in this article will help you make your project better as an open source (in addition to getting more stars).</p>
<p>But those tips alone can’t make your project popular without the value of your project itself. I hope this article helps you to find the contributors your project deserves.</p>
<p>I’ve had the chance to write this article because the former maintainers (<a href="https://github.com/shiren" rel="noopener">Shiren</a>, <a href="https://github.com/junghwan-park" rel="noopener">JungHwan</a>) who did a great job for this project. I believe this project already had the value that it has today. And the tips in this article helped us achieve the rest.</p>
<p>Last month I had a truly special experience as a developer. I would like to thank the <a href="https://github.com/nhnent?q=tui" rel="noopener">TOAST UI family</a> and the <a href="https://dooray.com/" rel="noopener">Dooray! Team</a> for all your support!</p>
<p>If you are interested in the <a href="https://github.com/nhnent/tui.editor" rel="noopener">TOAST UI Editor</a>, I recommend that you try <a href="https://dooray.com/" rel="noopener">Dooray!</a> too. It comes with the editor and is free for less than 100 collaborators. Let the TOAST UI Editor be with you ?</p>
<p><a href="https://dooray.com/" rel="noopener"><strong>Pleasure to work together, Dooray!</strong></a><br><a href="https://dooray.com/" rel="noopener"><em>Mail, Issue tracker, and Chat, anyone can easily post their task and collaborate with guests as well as project members.</em>dooray.com</a><a href="https://github.com/nhnent/tui.editor" rel="noopener"><strong>nhnent/tui.editor</strong></a><br><a href="https://github.com/nhnent/tui.editor" rel="noopener"><em>tui.editor — ?? Markdown WYSIWYG Editor. GFM Standard + Chart &amp; UML Extensible.gi</em>thub.com</a></p>
<p>Originally posted at <a href="http://meetup.toast.com/posts/141" rel="noopener">Toast Meetup</a> written by <a href="undefined" rel="noopener">KyuWoo Choi ?</a></p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
