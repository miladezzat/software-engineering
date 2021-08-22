---
card: "/images/default.jpg"
tags: [MVP]
description: On June 29th, I shared the MVP of mentored.dev on Twitter–my
author: "Milad E. Fahmy"
title: "How I Built and Shipped My First MVP"
created: "2021-08-15T19:33:19+02:00"
modified: "2021-08-15T19:33:19+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-mvp tag-javascript tag-lessons-learned ">
<header class="post-full-header">
<h1 class="post-full-title">How I Built and Shipped My First MVP</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2019/07/Screen-Shot-2019-07-11-at-8.05.29-PM.png 300w,
/news/content/images/size/w600/2019/07/Screen-Shot-2019-07-11-at-8.05.29-PM.png 600w,
/news/content/images/size/w1000/2019/07/Screen-Shot-2019-07-11-at-8.05.29-PM.png 1000w,
/news/content/images/size/w2000/2019/07/Screen-Shot-2019-07-11-at-8.05.29-PM.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2019/07/Screen-Shot-2019-07-11-at-8.05.29-PM.png" alt="How I Built and Shipped My First MVP">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>On June 29th, I shared the MVP of <a href="https://mentored.dev">mentored.dev</a> on Twitter–my first "real" project that was bigger than anything I'd built before and something I was excited for other people to use. </p>
<blockquote class="twitter-tweet">
<p lang="en" dir="ltr">It's been a long 4 months building this and it's nowhere near complete but I think this is a good stopping point to share the MVP. <a href="https://t.co/LTNCqjb0BC">https://t.co/LTNCqjb0BC</a> - A "gamified" learning platform to help you become a web developer. <br><br>The first lesson? the basics of the command line ? <a href="https://t.co/wDjr4u83t0">https://t.co/wDjr4u83t0</a> <a href="https://t.co/L8cFNHODQI">pic.twitter.com/L8cFNHODQI</a></p>— JavaScript Joe (@jsjoeio) <a href="https://twitter.com/jsjoeio/status/1144994580200210432?ref_src=twsrc%5Etfw">June 29, 2019</a>
</blockquote>
</figure>
<p>After sharing this, I received some bits of positive feedback, including a shout-out in the <a href="https://t.co/7sCziRMC9f?amp=1">npm weekly newsletter</a>. </p>
<p>I thought I'd share the story behind the whole process.</p>
<h2 id="origin-of-the-idea">Origin of the Idea</h2>
<p>I can't remember when I first had the idea but a while back when I was introduced to <a href="https://www.twilio.com/quest">TwilioQuest</a>, I thought to myself, </p>
<blockquote>Wouldn't it be cool to build a "gamified" learning platform that taught you how to code?</blockquote>
<p>Like many other people, I have these ideas at random times throughout my life. I keep a list of these ideas in a <a href="https://trello.com/en-US">Trello</a> board called "IDEAS". Looking here, I can see I notated this on January 21st, 2019. </p>
<figcaption>Trello board with original idea from Jan. 21st</figcaption>
</figure>
<p>I knew a few things:</p>
<ul>
<li>I wanted it to be interactive</li>
<li>I wanted it to feel like a game</li>
<li>I wanted it to have quick exercises</li>
</ul>
<hr>
<h2 id="where-to-start">Where to Start?</h2>
<p>Around that same time, I was wrapping up a freelance project (porting a Jekyll theme to a Gatsby site) so I didn't feel like I was ready to start it just yet. Then, I had a conversation with <a href="https://twitter.com/signalnerve">@signalnerve</a> on Twitter that sparked my motivation:</p>
<figcaption>Screenshot of Twitter conversation that motivated me to start.</figcaption>
</figure>
<blockquote>Build a small app–a real MVP–validate your idea and then decide if you should keep building. </blockquote>
<p>So I thought, "What the heck, why not start it?"</p>
<hr>
<h2 id="march-2019">March 2019 </h2>
<p>I used a Gatsby/TypeScript starter to kickstart the first and pushed my <a href="https://github.com/jsjoeio/mentored.dev/commit/0e38821f30d1f6f1bca804315fe24ccd5d5baf05">first commit</a>. Originally, I named the repo "Life of Code" because that's what came to mind but later I renamed it after buying the mentored.dev domain. </p>
<h4 id="initial-wireframes">Initial Wireframes</h4>
<p>After creating the repo, I sketched up some elementary wireframes in <a href="https://figma.com">Figma</a></p>
<figcaption>Initial Wireframes in Figma</figcaption>
</figure>
<p>Once I had all this, I felt over the initial "where-do-I-begin-paralysis" and knew I needed to keep the momentum going. </p>
<h4 id="taking-input">Taking Input</h4>
<p>One of the first things I tried was asking for user input and showing that in a message. This would be useful for the dialog between the narrator and the user. </p>
<blockquote class="twitter-tweet">
<p lang="en" dir="ltr">It's slowly coming to life ?<br><br>Side project - a simple "gamified" learning platform POC<br><br>Nothing fancy yet, but planning to do the logic first, get the lesson in there, and then add styles, colors, animation, etc. to make it feel more fun <a href="https://t.co/qF8fVAiV8M">pic.twitter.com/qF8fVAiV8M</a></p>— JavaScript Joe (@jsjoeio) <a href="https://twitter.com/jsjoeio/status/1103860530605780998?ref_src=twsrc%5Etfw">March 8, 2019</a>
</blockquote>
</figure>
<h3 id="basic-dialog-working">Basic Dialog Working</h3>
<p>Even though it didn't look pretty, the logic for the dialog was working! This felt like a good milestone because most of the hard stuff was done. </p>
<blockquote class="twitter-tweet">
<p lang="en" dir="ltr">I finally got all the logic working in my side project ?<br><br>Next step, work on the design and the animations! <a href="https://t.co/mcfjmUlLdY">pic.twitter.com/mcfjmUlLdY</a></p>— JavaScript Joe (@jsjoeio) <a href="https://twitter.com/jsjoeio/status/1106779197614088192?ref_src=twsrc%5Etfw">March 16, 2019</a>
</blockquote>
</figure>
<h3 id="narrator-character-talking">Narrator Character Talking</h3>
<p>I struggled a lot figuring out the best way to get the narrator talking but after finding <code><a href="https://github.com/zeit/react-keyframes">react-keyframes</a></code>, I was able to figure out a solution. This was huge because previously I hadn't done much with animation.</p>
<blockquote class="twitter-tweet">
<p lang="en" dir="ltr">???<br><br>It's alive!!!! <a href="https://t.co/2zsJNVHdzr">pic.twitter.com/2zsJNVHdzr</a></p>— JavaScript Joe (@jsjoeio) <a href="https://twitter.com/jsjoeio/status/1107812366891180032?ref_src=twsrc%5Etfw">March 19, 2019</a>
</blockquote>
<figcaption>,</figcaption>
</figure>
<h3 id="getting-feedback-on-dialog">Getting Feedback on Dialog</h3>
<p>As stated earlier, I think it's important to get input from others. I don't know if Twitter is the best place to do it but fortunately for me, the people who responded to my request for feedback were kind.</p>
<blockquote class="twitter-tweet">
<p lang="en" dir="ltr">I'm the worst at making decisions when it comes to designs ?<br><br>Any thoughts on which option you prefer? Also open to suggestions <br><br>Arrows will either progress dialog forward or backward <a href="https://t.co/TTDp55DAJd">pic.twitter.com/TTDp55DAJd</a></p>— JavaScript Joe (@jsjoeio) <a href="https://twitter.com/jsjoeio/status/1108190126876680193?ref_src=twsrc%5Etfw">March 20, 2019</a>
</blockquote>
</figure>
<h3 id="migrating-to-typescript">Migrating to TypeScript</h3>
<p>I used a Gatsby-TypeScript starter for this project because I had been meaning to learn TS. However, up until this point, I wasn't actually using TS. The files just had .ts or .tsx endings.</p>
<p>Before the 30th, I had mentioned wanting to learn TS and <a href="https://twitter.com/TejasKumar_">@TejasKumar_</a> offered to teach me by migrating the mentored.dev codebase over to TS on a Google Hangouts livestream. This was one of the coolest moments of this project. And I learned a ton. </p>
<blockquote class="twitter-tweet">
<p lang="en" dir="ltr">Safe to say it was a huge successful ??<a href="https://twitter.com/TejasKumar_?ref_src=twsrc%5Etfw">@TejasKumar_</a> is a phenomenal teacher. He walked me through everything and we ended up migrating the majority of the codebase to @typescriptlang within about 3 hours ???<br><br>I am now a fan of TypeScript! <a href="https://t.co/OgbHd6rwmM">https://t.co/OgbHd6rwmM</a></p>— JavaScript Joe (@jsjoeio) <a href="https://twitter.com/jsjoeio/status/1112088320182370304?ref_src=twsrc%5Etfw">March 30, 2019</a>
</blockquote>
</figure>
<hr>
<h2 id="april-2019">April 2019 </h2>
<p>Next up after finishing the dialog part of the project, I decided to focus on the Dashboard - or the page after you logged in. I created a simple "Profile Card" that will eventually show your experience, any code-cash you have, etc.</p>
<blockquote class="twitter-tweet">
</blockquote>
</figure>
<h3 id="designing-the-dashboard">Designing the Dashboard</h3>
<p>In hindsight, I may have gotten ahead of myself here because I designed way more than I could implement in the MVP but at least it gave me an idea for the future. I first added it as hard-coded components but later commented out to maintain a healthy UX.</p>
<blockquote class="twitter-tweet">
<p lang="en" dir="ltr">Happy I made it this far tonight! ??<br><br>The dashboard area is done - the design at least, everything is hard-coded. <br><br>Next steps will be drawing a map (similar to a university map) where users will be able to click buildings to take courses/lessons ?<br><br>It's slowly coming to life! <a href="https://t.co/rtFzysR4tn">pic.twitter.com/rtFzysR4tn</a></p>— JavaScript Joe (@jsjoeio) <a href="https://twitter.com/jsjoeio/status/1114009915545141249?ref_src=twsrc%5Etfw">April 5, 2019</a>
</blockquote>
</figure>
<h3 id="designing-the-campus-map">Designing the Campus Map</h3>
<p>This took way longer than I thought. I wanted it to feel like a university campus but drew heavily from <a href="https://bulbapedia.bulbagarden.net/wiki/Pallet_Town">Pallet Town</a> in Pokemon. The completed version has more but at least I had something I could add to the Dashboard. I designed all of this in Figma and exported it as SVG. Working with SVGs in React has proven to be a delightful experience. </p>
<blockquote class="twitter-tweet">
<p lang="en" dir="ltr">Went to a coffee shop with <a href="https://twitter.com/BryanMierke?ref_src=twsrc%5Etfw">@BryanMierke</a> and <a href="https://twitter.com/tadscritch?ref_src=twsrc%5Etfw">@tadscritch</a> today - made some solid progress on the map design ?<br><br>Just need to add another building and maybe a fountain and a few bushes <a href="https://t.co/GNSQNxoOLZ">pic.twitter.com/GNSQNxoOLZ</a></p>— JavaScript Joe (@jsjoeio) <a href="https://twitter.com/jsjoeio/status/1114635991191396352?ref_src=twsrc%5Etfw">April 6, 2019</a>
</blockquote>
</figure>
<h3 id="adding-gameplay-music">Adding Gameplay Music</h3>
<p>I never realized how hard it is to create or find music for a game. I ended up finding this amazing sound artist named <a href="https://www.soundimage.org">Eric Matyas</a> who makes music and sounds royalty-free. I wanted the audio to start automatically (because that's how most games do it) but unfortunately that is <a href="https://a11yproject.com/posts/never-use-auto-play/">not accessible</a> so it does not auto-play. </p>
<p>However, if you turn it on at the start menu or when you're playing the game, it adds a nice touch.</p>
<blockquote class="twitter-tweet">
<p lang="en" dir="ltr">[Audio On]<br><br>Finally added a bit of sound to my game <br><br>There're a few weird bugs but for the most part, it's working! ? <a href="https://t.co/2BwMDHmcO9">pic.twitter.com/2BwMDHmcO9</a></p>— JavaScript Joe (@jsjoeio) <a href="https://twitter.com/jsjoeio/status/1115436705346019328?ref_src=twsrc%5Etfw">April 9, 2019</a>
</blockquote>
</figure>
<h3 id="changing-maps">Changing Maps</h3>
<p>This has to be my favorite feature I added–being able to change the map. At first, I had no idea how I was going to do this, then I thought, "why not just swap the map with another map?"</p>
<p>So that's exactly what I did and it worked! </p>
<p>I extracted the parts of the map that were clickable (like the buildings) and made it so they open up different maps. I don't know how well my solution will scale but hey, it's working right now and that's what matters. </p>
<blockquote class="twitter-tweet">
<p lang="en" dir="ltr">Made some good progress this evening! Added the ability to change the map when you click on a building ?<br><br>Next steps:<br>- inside building user can select a course/lesson<br>- overlay will show on top of everything with dialog lesson with professor <a href="https://t.co/Circb2VxKp">pic.twitter.com/Circb2VxKp</a></p>— JavaScript Joe (@jsjoeio) <a href="https://twitter.com/jsjoeio/status/1119834245013196801?ref_src=twsrc%5Etfw">April 21, 2019</a>
</blockquote>
</figure>
<h3 id="courses-page">Courses Page</h3>
<p>One of the other challenges I faced was figuring out where and how to show the courses (i.e. the dialog with the narrator).</p>
<p>Same thing–I struggled with this for a bit then decided, "Let's show it in an Overlay component!"</p>
<p>That ended up working out well. Again, I don't know if that will scale well but it works for now.</p>
<blockquote class="twitter-tweet">
<p lang="en" dir="ltr">After some time off, back to working on my side project ?<br><br>Put together a quick design and figured out how I'm going to show available courses <a href="https://t.co/Wer9thqgg7">pic.twitter.com/Wer9thqgg7</a></p>— JavaScript Joe (@jsjoeio) <a href="https://twitter.com/jsjoeio/status/1123063970468786176?ref_src=twsrc%5Etfw">April 30, 2019</a>
</blockquote>
</figure>
<hr>
<h2 id="may-2019">May 2019</h2>
<p>In May, I took a little bit of a break. I was getting married so I wanted to focus on prepping for that rather than my game. I still had ideas for things here and there but I didn't put in nearly as much time as March or April. </p>
<p>Even though it's difficult for me to take breaks and step away, I think it's healthy to go outside, change what you're doing, mediate, etc. As my mother always says, </p>
<blockquote>Everything in moderation. </blockquote>
<hr>
<h2 id="june-2019">June 2019</h2>
<p>Looking at the Dashboard I created, there was still so much left to do. </p>
<p>I felt overwhelmed.</p>
<p>"How am I going to finish all this?"</p>
<h3 id="a-realization-at-the-phoenix-reactjs-meetup">A Realization at the Phoenix ReactJS Meetup</h3>
<p>I hadn't been to the <a href="https://www.meetup.com/Phoenix-ReactJS/">Phoenix ReactJS Meetup</a> in a while. My two coworkers and I decided to go hear the lightning talks.</p>
<p>Before the talks, we were crowded around a table, chatting about our side projects. I said I wanted to finish the MVP for mentored.dev by the end of the year.</p>
<p>"How much more do you have to finish?" </p>
<p>"A decent amount. Everything on the Dashboard page is hard-coded at the moment."</p>
<p>"Drop all that. Finish the core features and ship it."</p>
<p>Those were the wise words from my coworkers. That's when I realized they were right. I decided to cut scope and implement two last features–the streak tracker and the lesson progress.</p>
<figcaption>Screenshot of the streak tracker</figcaption>
</figure>
<p> </p>
<figcaption>Screenshot of lesson progress</figcaption>
</figure>
<p>The streak tracker logic was buggy when I first implemented it and didn't work at all. I wasn't sure if I should only increment the streak after 24-48 hours, or just do it by the day, or what. It <a href="https://github.com/jsjoeio/mentored.dev/issues/93">seemed a lot more complicated</a> than it should have been.</p>
<p>I still don't know if I'm happy with the implementation. But again, it's out the door and the basic functionality works. </p>
<p>The lesson progress (completed - 1/3) is also rudimentary at best. Again, my focus was to get it out the door. I'll style it in the future. </p>
<h3 id="ship-it">Ship It</h3>
<p>June 29th. The big day.</p>
<blockquote class="twitter-tweet">
<p lang="en" dir="ltr">It's been a long 4 months building this and it's nowhere near complete but I think this is a good stopping point to share the MVP. <a href="https://t.co/LTNCqjb0BC">https://t.co/LTNCqjb0BC</a> - A "gamified" learning platform to help you become a web developer. <br><br>The first lesson? the basics of the command line ? <a href="https://t.co/wDjr4u83t0">https://t.co/wDjr4u83t0</a> <a href="https://t.co/L8cFNHODQI">pic.twitter.com/L8cFNHODQI</a></p>— JavaScript Joe (@jsjoeio) <a href="https://twitter.com/jsjoeio/status/1144994580200210432?ref_src=twsrc%5Etfw">June 29, 2019</a>
</blockquote>
</figure>
<p>As I say in the tweet thread, </p>
<blockquote>...It's nowhere near complete but I think this is a good stopping point to share the MVP.</blockquote>
<p>A while back, I read <em><a href="http://theleanstartup.com/">Lean Startup</a></em> by Eric Ries. One thing that always stuck with me was something he said along the lines of, "You should be embarrassed putting your product out there. That's when you know it's an MVP."</p>
<p>And that's how I felt! So much left to do. It's hard to even consider it a "game"–most real gamers probably wouldn't.</p>
<p>But that's the point–it helped lift a burden off my shoulders and step back to hear what people think.</p>
<p>Most people I've talked to think it's a good start and a neat concept. They're excited to see where it goes.</p>
<hr>
<h2 id="what-i-think-worked">What I Think Worked</h2>
<p>Reflecting on what helped me launch this MVP, a few things come to mind. </p>
<h3 id="accountability-friends-twitter-community">Accountability - Friends &amp; Twitter Community</h3>
<p>As we all know, it's very easy to silo yourself and work alone. This might work for some people and that's fine. But in my case, I think sharing this project with my coworkers held me more accountable than if I hadn't told anyone. Each week on Monday mornings, one of them would ask, "Hey Joe. Did you work on your game?"</p>
<p>Their interest and support meant a lot to me. They wanted to see it succeed as much as I did. That kept me going.</p>
<p>The other part that kept me accountable was sharing it with people on Twitter. Sometimes people would comment and other times they wouldn't. Either way, people were following along. A few would DM me asking how it was coming along.</p>
<p>By sharing it in public, I felt a bit of pressure (in a good way) to finish it.</p>
<h3 id="using-github-projects-issues-and-milestones">Using GitHub Projects, Issues, and Milestones</h3>
<p>I treated this project like we treat client/company applications at work. I didn't use sprints per se but I did keep a list of tasks in a <a href="https://github.com/jsjoeio/mentored.dev/projects/3">GitHub Project board</a> and then select a few and create a milestone. This made the work feel more achievable and less overwhelming. </p>
<p>I set up a staging environment at <a href="https://staging.mentored.dev">https://staging.mentored.dev</a> (thanks to <a href="https://www.netlify.com/">Netlify</a>, this was straightforward). Then, each issue I finished, I submitted a PR to merge into staging. I reviewed and merged myself (yes, a bit silly, but good practice). </p>
<p>Once a <a href="https://github.com/jsjoeio/mentored.dev/milestones?state=closed">milestone was complete</a>, I merged staging into master and created a new release. This process set me up for success. I kept milestones small (something I could finish in 1-3 weeks). </p>
<p>Having some type of project management in place for your side project I believe will help you reach the finish line sooner. </p>
<h3 id="cutting-scope">Cutting Scope</h3>
<p>I wouldn't have finished this MVP if I hadn't cut a lot of features. For instance, I really wanted to create a repository called "mentored-dev" after the user logged in and store the lesson progress there. But that was going to take more time than I anticipated so I cut it. </p>
<p>Instead, I store the progress in localstorage. Yes, it's short-term but again, I had to cut scope to ship. If I hadn't, I wouldn't have finished this phase of the project.</p>
<hr>
<h2 id="closing-thoughts">Closing Thoughts</h2>
<p>Overall, I feel thankful for all the support. I'm proud of the small project I built and the feedback I have received, so thank you. As for the next steps, I've already created the <a href="https://github.com/jsjoeio/mentored.dev/milestone/6">next milestone</a>. The main thing is to finish all the lessons for the basics of the command line and then share that to see what people think.</p>
<p>As far as actual features–I wouldn't promise anything but I'd love to add experience points (XP) which you accumulate based on your score in the lessons or how many times you take each lesson, how often you login, etc.</p>
<p>It would also be nice to give XP for doing things outside the game (i.e. writing a blog post, tweeting something you learned, contributing to open source, helping someone, etc). We'll see what happens though.</p>
<p>Thank you for listening to the journey. </p>
<p>###</p>
<p>If you enjoyed this article or found it interesting, please share it with others or let me know on <a href="https://twitter.com/jsjoeio">Twitter</a>.</p>
<p>To stay up to date on mentored.dev or other things I'm working on, I have a newsletter you can <a href="https://github.com/jsjoeio/mentored.dev/milestone/6">sign up for here</a>.</p>
<p>Happy coding! </p>
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
