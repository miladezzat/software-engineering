---
card: "https://cdn-media-1.freecodecamp.org/images/1*oYtXYYF7F0cBuv2SWm78xA.jpeg"
tags: [Tech]
description: by Léna Faure
author: "Milad E. Fahmy"
title: "The developer’s workflow in practice — how we built our MVP in 30 days"
created: "2021-08-15T19:50:12+02:00"
modified: "2021-08-15T19:50:12+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-tech tag-programming tag-javascript tag-development tag-startup ">
<header class="post-full-header">
<h1 class="post-full-title">The developer’s workflow in practice — how we built our MVP in 30 days</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*oYtXYYF7F0cBuv2SWm78xA.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*oYtXYYF7F0cBuv2SWm78xA.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*oYtXYYF7F0cBuv2SWm78xA.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*oYtXYYF7F0cBuv2SWm78xA.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*oYtXYYF7F0cBuv2SWm78xA.jpeg" alt="The developer’s workflow in practice — how we built our MVP in 30 days">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Léna Faure</p>
<h1 id="the-developer-s-workflow-in-practice-how-we-built-our-mvp-in-30-days">The developer’s workflow in practice — how we built our MVP in 30 days</h1>
<figcaption>Photo by <a href="https://unsplash.com/photos/zPfn8ap8hTY?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText" rel="noopener" target="_blank" title="">Michał Grosicki</a> on <a href="https://unsplash.com/?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText" rel="noopener" target="_blank" title="">Unsplash</a></figcaption>
</figure>
<p>As a web developer, I often get to start projects from scratch and make decisions for a bunch of elements, from the technical stack to the final look &amp; feel of the app.</p>
<p>Especially when the stakes behind a project are high, this process can be overwhelming.</p>
<p>I want to share our experience of one month into the City of Paris Startups Program, and the steps our team took to achieve a first operating version of the app.</p>
<p>Some context first: <a href="http://alloanim.futur.paris/" rel="noopener">AlloAnim</a> is a web app designed to help the City of Paris find available after-school staff instantly.</p>
<figcaption>Our current Homepage for the first Sprint — Inspired from AirBnb while working on a new UI — Credit Sophie Robichon / Mairie de Paris</figcaption>
</figure>
<p>The goal is to have after-school employees create and update their profile and availabilities as often as possible. This will allow the City of Paris to have direct access to a real-time updated database of available staff.</p>
<p>Our team is made of two people. One is Product Owner, Christian Bockarie. Christian was the person who identified the pain-point while working as a City of Paris school staff.</p>
<p>The other is a developer (yours truly), responsible for building the full-stack app within a 5 months period.</p>
<p>Our headquarters are at the open innovation community lab <a href="undefined" rel="noopener">La Paillasse</a>. We work alongside the Startup <em>ViteUnLieu</em>, that helps organizations easily find conference rooms in Paris, with <a href="undefined" rel="noopener">Jean Karinthi</a> as Product Owner and <a href="undefined" rel="noopener">Christophe Robillard</a> as Lead Developer.</p>
<p>The stack we chose is Ruby on Rails for the back end and ‘vanilla’ (plain, no frameworks) JavaScript on the front end.</p>
<p>We want to integrate React as soon as possible, but for the prototyping phase we are sticking with good old JavaScript.</p>
<p>So how did we create a working product from scratch in one month? Here are the main steps we took to ship this first version successfully.</p>
<h3 id="1-embrace-the-agile-spirit">1. Embrace the Agile Spirit</h3>
<p>We worked with a coach for two days to learn the basics of <a href="https://en.wikipedia.org/wiki/Agile_software_development" rel="noopener">Agile development</a>.</p>
<p>The main take-away of Agile is that you have to work in very close collaboration with your final users. The goal is to iterate over every version of your app based on the feedback they provide.</p>
<p>This way you are less likely to build something that people don’t need, don’t like, or don’t know how to use.</p>
<h3 id="2-quickly-meet-with-users-in-real-life">2. Quickly meet with users in real-life</h3>
<p>Christian managed to quickly get us a decisive meeting with the head of after-school staff in an elementary school.</p>
<p>We engaged in a meaningful conversation about how she currently handled her staffing problem. We learned what functionality she would absolutely need to have in our upcoming web tool.</p>
<figcaption>Credit Sophie Robichon / Mairie de Paris</figcaption>
</figure>
<p>The pain-point and need for our product proved to be definitely real. This was enough to get us started on a Minimum Viable Product (MVP). This is a product version with the necessary functionalities to be the first usable version of our product.</p>
<h3 id="3-write-user-stories">3. Write User Stories</h3>
<p>User stories are a way for a non-technical Product Owner and a Developer to perfectly understand each other on what needs to happen for the app to fill its purpose.</p>
<p>They are written on the model: “As a &lt; type of user &gt;, I can &lt; some goal &gt; (so that &lt; some reason &gt;).”</p>
<p>So an example of one of our simple user stories was: “As a member of after-school staff, I can create a profile with my personal information”.</p>
<p>User stories fit together to form a Story Map, which is the global visual plan for building the app over time.</p>
<p>The development cycle of the product is then sliced into sprints.</p>
<p>Each sprint contains a given number of user stories that will be coded into functionalities.</p>
<p>Our first sprint typically contains all the user stories that are needed for a usable Minimum Viable Product.</p>
<p>The Story Map and the content of the sprints are free to change at each iteration of the product. This usually coincides with a feedback session with users.</p>
<p>As users give feedback on the developed functionalities, the User Stories evolve and adapt to match the actual use of the app.</p>
<h3 id="4-set-up-an-agile-workflow">4. Set up an Agile workflow</h3>
<p>I was lucky enough to work alongside the other startup’s talented developer <a href="undefined" rel="noopener">Christophe Robillard</a>, who gained an impressive experience with Agile workflows and developer productivity from his previous experience in <a href="https://beta.gouv.fr/" rel="noopener">Government Startups Program</a>.</p>
<h4 id="daily-stand-up-meetings">Daily Stand-Up Meetings</h4>
<p>Taken from the Scrum methodology, the daily stand-up is a standing meeting held on each day of a sprint. We talk to each other every beginning of the day for 5–15 minutes. We stand if we are physically together, or talk on the phone if we work remotely.</p>
<p>It helps set the context for the coming day’s work and commit to the tasks that have to be tackled next.</p>
<h4 id="dev-backlog">Dev Backlog</h4>
<figcaption>Our task board for the first sprint</figcaption>
</figure>
<p>You can easily recreate this task board on the <a href="https://about.gitlab.com/features/issueboard/" rel="noopener">Gitlab issue board</a> or on <a href="https://waffle.io/" rel="noopener">Waffle.io</a> for a digital alternative.</p>
<h4 id="bi-weekly-meetings-between-startups">Bi-weekly meetings between Startups</h4>
<p>To make the meeting efficient and to-the-point, the strategy Christophe shared with us is the following:</p>
<ul>
<li>Set a maximum time for the meeting (30 minutes to 1 hour)</li>
<li>Write a sticky note for each subject that will be discussed and talk about only one sticky note subject at a time</li>
<li>Set a 5 minute timer for each sticky note discussion<br>If the discussion exceeds 5 minutes, decide between the team if it is worth resetting the timer for an additional 5 minutes.</li>
</ul>
<figcaption>Christophe provided us with some timeless knowledge on Agile, Lean Startup and Clean Code</figcaption>
</figure>
<h3 id="5-get-inspiration-from-well-designed-websites-and-share-a-moodboard">5. Get inspiration from well-designed websites and share a moodboard</h3>
<p>This is one of my favorite parts at the beginning of a project — seeking inspiration for UX and UI from other web apps, some of which I use very often.</p>
<p>I am always amazed at the creativity and cleverness of the teams behind some of the tools I use. For example, I was inspired by the onboarding process of <a href="https://hired.com/signup?utm_source=breaz&amp;utm_medium=referral" rel="noopener">breaz.io</a>. I also admired the way <a href="https://www.drivy.com/" rel="noopener">drivy.com</a> allows users to select a bunch of cars first, then send one message to every owner once the selection is made.</p>
<p>Here, I’ll present some of the tools that usually help me get started and visualize the app’s interfaces.</p>
<h4 id="dribbble">Dribbble</h4>
<p>The search functionality on <a href="https://dribbble.com/" rel="noopener">Dribbble</a> lets you pick the creative brain of great designers who showcase their work.</p>
<h4 id="moodboard">Moodboard</h4>
<p><a href="http://www.gomoodboard.com/" rel="noopener">Moodboard</a> lets you collect, share and comment on designs with your team. This lets everyone get a taste of the inspiration for the website’s interface:</p>
<h4 id="adobe-color">Adobe Color</h4>
<p><a href="https://color.adobe.com" rel="noopener">Adobe Color</a> is the perfect source of inspiration for harmonious palettes. The ‘Explore’ feature lets you browse thousands of inspiring color themes:</p>
<h3 id="6-create-the-first-rails-version-of-the-app">6. Create the first Rails version of the App</h3>
<p>We set up our models and database with Ruby on Rails and SQLite. We used the ‘Devise’ gem for the authentication system.</p>
<p>I usually develop the front end and back end at the same time. This means I try to work on the design and responsiveness of each functionality as soon as it is born.</p>
<p>This never fails to produce some kind of ‘wow!’ effect when presenting the first demos. This first impression can be a decisive factor when users are adopting a product.</p>
<p>Some developers prefer to focus on the back end first. Once they get everything in working order, they go back over it for cosmetics further along. However, I find it easier to work on both simultaneously.</p>
<p>In our app, the main object is the user. We have quite a road ahead of us to refine the onboarding system and find incentives for the user to return to the app often.</p>
<p>For now, the sign up process is basic and simply has the key information for the MVP to work.</p>
<p>Below are some screenshots of the MVP in action!</p>
<p><strong>Signing up:</strong></p>
<figcaption>Signing Up</figcaption>
</figure>
<p><strong>Looking for staff:</strong></p>
<figcaption>Looking for available staff</figcaption>
</figure>
<p>The app requires a weekly calendar for the after-school staff to fill in their available time slots. However, I couldn’t find a Rails gem or JavaScript plugin that matched the particular requirements of the MVP.</p>
<p>So I set out to build a full Javascript weekly availability scheduler, and then integrate it in the Rails app. <a href="https://github.com/lenafaure/javascript-weekly-scheduler" rel="noopener">You can find the JavaScript code here if you are interested</a>.</p>
<p><strong>Version 0 (Display weeks):</strong></p>
<p><strong>Version 1 (Add specific time-slots and responsive behavior):</strong></p>
<p><strong>Version 2 (Integrate in the Rails App — Profile page):</strong></p>
<h3 id="7-deploy-the-live-app">7. Deploy the Live App</h3>
<p>The final step is to make the app live. I found <a href="https://www.heroku.com/" rel="noopener"><strong>Heroku</strong></a><strong> </strong>made hosting it a breeze. Deployment is free, and directions are very simple and available directly on the platform.</p>
<figcaption>Heroku deployment instructions</figcaption>
</figure>
<h3 id="8-iterate">8. Iterate</h3>
<p>Finally, it is time to meet the users again, and present them the work you have done during the sprint.</p>
<p>We usually have 3-week sprints. This gives us time to actually code enough functionalities to have something of substance to discuss. It also lets our club of users breathe between meetings.</p>
<p>During the meeting, we listen to the users’ feedback and discuss the app’s functionalities with them.</p>
<p>Then, we go back to the task board to plan the next sprint… Until next time!</p>
<h3 id="conclusion">Conclusion</h3>
<p>Sticky notes are life. Nothing good in the world would happen without them.</p>
<p>That’s it for now! We are well into our second sprint and moving sticky notes with stupendous agility.</p>
<p>Any tools you use for your own process and would care to share with us are most welcome!</p>
<p><strong>Edit: </strong><a href="http://alloanim.futur.paris/" rel="noopener">AlloAnim</a> prototype has successfully launched and is now being tested and used daily by the City of Paris staff.</p>
<p>You can find the <a href="https://gitlab.com/startups-ville-paris/animexpress" rel="noopener">Open Source Code here</a>, and a full demo of the app below:</p>
<p><em>The <a href="https://twitter.com/hashtag/startupdeville?src=hash" rel="noopener">#<strong>startupdeville</strong></a> program is a City of Paris initiative, powered by public agents who have identified a clear pain point while working on the field.</em></p>
<p><em>After a selection process and a one-month acceleration, a two-person team (Product Owner + Developer) builds a web app to validate the need for this new service and its adoption by the target users.</em></p>
<p>If you enjoyed this piece, please show your love and clap so others can find it! Feel free to<a href="https://twitter.com/lenafaure" rel="noopener"> follow me on Twitter</a>, as well as the <a href="https://twitter.com/hashtag/startupdeville?src=hash" rel="noopener">#startupdeville</a> team members, <a href="https://twitter.com/BockarieChrist" rel="noopener">Christian Bockarie</a>, <a href="https://twitter.com/JeanKarinthi" rel="noopener">Jean Karinthi</a> and <a href="https://twitter.com/krichtof" rel="noopener">Christophe Robillard</a></p>
<p>— Léna Faure</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
