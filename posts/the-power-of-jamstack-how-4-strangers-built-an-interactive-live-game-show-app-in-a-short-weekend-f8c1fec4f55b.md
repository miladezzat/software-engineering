---
card: "https://cdn-media-1.freecodecamp.org/images/1*9SP9vOKQCKZ6z_4klt6SUA.png"
tags: [GraphQL]
description: by Tadas Antanavicius
author: "Milad E. Fahmy"
title: "The power of JAMstack: How 4 strangers built an interactive live Game Show app in a short weekend"
created: "2021-08-15T19:39:57+02:00"
modified: "2021-08-15T19:39:57+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-graphql tag-react tag-hackathons tag-tech tag-javascript ">
<header class="post-full-header">
<h1 class="post-full-title">The power of JAMstack: How 4 strangers built an interactive live Game Show app in a short weekend</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*9SP9vOKQCKZ6z_4klt6SUA.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*9SP9vOKQCKZ6z_4klt6SUA.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*9SP9vOKQCKZ6z_4klt6SUA.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*9SP9vOKQCKZ6z_4klt6SUA.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*9SP9vOKQCKZ6z_4klt6SUA.png" alt="The power of JAMstack: How 4 strangers built an interactive live Game Show app in a short weekend">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Tadas Antanavicius</p>
<h1 id="the-power-of-jamstack-how-4-strangers-built-an-interactive-live-game-show-app-in-a-short-weekend">The power of JAMstack: How 4 strangers built an interactive live Game Show app in a short weekend</h1>
<h3 id="question-what-can-you-do-with-the-following">Question: What can you do with the following?</h3>
<ul>
<li>Saturday + Sunday</li>
<li>16 hours of brainstorm, design, and dev time</li>
<li>4 strangers<strong> </strong>who met at breakfast on Saturday morning</li>
<li>Hacking space, free food, and a slew of hackathon goodies from the organizers of the <a href="https://medium.freecodecamp.org/winners-from-the-2018-freecodecamp-jamstack-hackathon-at-github-2a39bd1db878" rel="noopener">freeCodeCamp/Netlify JAMstack 2018 Hackathon</a> hosted at GitHub</li>
</ul>
<h3 id="answer-a-functional-live-game-show-application-on-the-web-">Answer: A functional live “Game Show” application on the web.</h3>
<ul>
<li>Built on the backs of at least 18 significant free pieces of software (conservative estimate)</li>
<li>About 80 concurrent players in the live final demo</li>
<li>$4<strong> </strong>total expenses (for a domain name)</li>
<li>One $500 grand prize from among the 28 teams<strong> </strong>and hundreds of participants with submissions</li>
</ul>
<p>The final pitch for WITWorld by team Where In The World:</p>
<blockquote><em>“Game show” web application that presents curated photos of images from somewhere in the world to a live, participating audience. In each game, the audience is asked to pin the location where the photo was taken on a map. The closer a player is to the actual location, the higher on the leaderboard they place.</em></blockquote>
<p><a href="https://github.com/tadasant/where-in-the-world" rel="noopener">See the repository here.</a></p>
<p>The term “<strong>static site</strong>” comes with a lot of baggage. It feels like a relic of the early days of the internet, when static web pages were considered to “display the same information for all users, from all contexts” — phrasing that still sits on Wikipedia’s <a href="https://en.wikipedia.org/wiki/Static_web_page" rel="noopener">Static web page</a> entry as of this writing.</p>
<p>So when we say that the fundamental foundation of a <a href="https://jamstack.org/" rel="noopener">JAMstack</a> application is that it is centered around a static website, that’s sure to raise a lot of eyebrows. After all, the personalized, information-laden nature of today’s web seems to suggest that static web pages are non-starters.</p>
<p>That mindset has led to a proliferation of full stack developers. Bootcamps and curriculums all over preach the necessity of full stack skillsets like MERN (MongoDB, Express, React, and Node).</p>
<p>There’s certainly value to such an approach — but there <em>is</em> another way.</p>
<p>Enter JAMstack. Its mission: <strong>empower the front-end engineer</strong>.</p>
<p>Better performance. Higher security. Easy scaling. All with just JavaScript, API’s, and Markup.</p>
<p>The need to learn a full stack of technologies like MERN to be able to produce valuable, technical apps is no longer the only way. The vast majority of business use cases don’t need you re-inventing the wheel on the back-end. Authentication is a solved problem. Accepting payments is a solved problem. And so on: you can focus on becoming a CSS and JavaScript wizard to build your app and slap together tried, true, and secure API’s to fill in the gaps.</p>
<p>Every new API brings about a world of new use case possibilities — each more and more dynamic than the last.</p>
<p>And indeed, team Where In The World set out to showcase exactly those possibilities.</p>
<h3 id="showing-off-jamstack-and-showing-off-the-world">Showing off JAMstack, and showing off the world</h3>
<p>Yes, that’s our cheesy slogan for what WITWorld brings to the table.</p>
<p>As <a href="https://www.jeffappareti.com/" rel="noopener">Jeff</a>, <a href="https://twitter.com/TJVickOH" rel="noopener">Tyler</a>, <a href="https://twitter.com/GabeGreenfield" rel="noopener">Gabe</a>, and I met over breakfast (thank you, GitHub, for the bottomless supply of delicious goods), we spit-balled ideas for what we could work on.</p>
<blockquote><em>Here’s one. It’s one of those ideas that’s going to be either really good, or really, really bad. Do you guys know HQ Trivia? …</em></blockquote>
<p>Right after the post-breakfast keynote ended, Jeff whispered to us:</p>
<blockquote><em>Hey let’s call it “Where In The World”</em></blockquote>
<p>And we were off to the races.</p>
<h3 id="at-a-hackathon-you-re-building-to-demo">At a hackathon, you’re building to demo</h3>
<p>One of the best decisions we made early on was to pick our North Star, cut the fat, and focus singularly on one goal. That goal — as it should be in most every hackathon — was: let’s build the steps we need for the demo. Nothing more, nothing less.</p>
<p>That means this will not be a production-ready application. It means our API keys are hard-coded into our client side code. It means our app blows up if any one of the players decides to hit the “Back” button on their browser. The CSS spacing is off. Our color pallet was a week late for Halloween. Spaghetti, but it works? Shipped it.</p>
<p><a href="https://github.com/tadasant/where-in-the-world" rel="noopener">Our repository is publicly available</a>, but please, please don’t look at our code. It’s a mess and a half. The fact that our last commit came in at 5:56 PM when the code complete deadline was 6:00 PM says enough.</p>
<figcaption>Netlify’s painless webhook-based CI setup had this 5:56 PM commit live on <a href="https://witworld.live/" rel="noopener" target="_blank" title="">https://witworld.live/</a> a minute later</figcaption>
</figure>
<h3 id="with-jamstack-we-sit-on-the-shoulders-of-giants">With JAMstack, we sit on the shoulders of giants</h3>
<p>Early on, we had a rough idea for how WITWorld would technically come into being. It was clear that GraphQL subscriptions would have to be at the core of it: sockets were the best way to make a “live” web app, and GraphQL has neatly packaged the concept into a “subscription”.</p>
<p>Just one problem: none of us had ever written a GraphQL subscription before.</p>
<p><a href="https://hasura.io/" rel="noopener">Hasura</a> to the rescue.</p>
<p>Hasura provides “a GraphQL server and event triggers over a Postgres database in minutes” and was one of the hackathon’s sponsors.</p>
<p>Converting our app from the typical read-write push-pull model into realtime over web sockets was a simple matter, in the words of Hasura’s documentation:</p>
<blockquote><em>You can turn any query into a subscription by simply replacing <code>query</code> with <code>subscription</code> as the operation type.</em></blockquote>
<p>And a few lines of Apollo config to pop in Hasura’s convenient web socket endpoint.</p>
<p>That’s just one example. We experienced this simple “2 lines of code and XYZ major feature is ready to go” paradigm over and over again:</p>
<ul>
<li>Facebook’s <code><a href="https://github.com/facebook/create-react-app" rel="noopener">create-react-app</a></code> gave us a full, production-ready webapp scaffold with a few command line calls</li>
<li>Deploying that app to a worldwide CDN on <a href="https://www.netlify.com/" rel="noopener">Netlify</a> was a matter of clicking around a pretty UI</li>
<li>The combination of <a href="https://www.apollographql.com/" rel="noopener">Apollo</a> and the <a href="https://graphql.org/" rel="noopener">GraphQL</a> specs meant that a clear standard existed for every kind of data operation from the client side</li>
<li><code><a href="https://www.styled-components.com/" rel="noopener">styled-components</a></code> kept the (admittedly lacking amount of) CSS in our app easy-to-use and modular</li>
<li><a href="https://cloud.google.com/maps-platform/" rel="noopener">Google Maps API</a> meant we had an interactive world map integrated into our app after an hour of reading its docs</li>
<li><a href="https://www.netlify.com/docs/functions/" rel="noopener">Netlify’s Functions</a> — an abstraction over AWS Lambda — gave us a perfect place to centralize our “game master” operations, critical for a smooth demo</li>
</ul>
<p>Not to mention all the little FOSS npm libraries we used so that we didn’t spend too much time figuring out what latitude and longitude actually mean, among other pieces of glue.</p>
<p>Let’s not forget how much work has gone into modern browsers like Chrome and Firefox, or the people responsible for the Netlify-Slack webhooks that alerted us every time our build failed, or the industry-shifting presence of React itself. Even tools like Heroku<strong> </strong>that we touched for a single click to deploy a Hasura instance — it’s a testament to how impressive they are that they operate so smoothly with us hardly realizing their major role.</p>
<p>The best part: <strong>none of the above costs a single dollar to use</strong>. Not on the scale of a hackathon anyway.</p>
<h3 id="above-all-we-were-lucky">Above all, we were lucky</h3>
<figcaption>​ <em>(Left to right) Tadas, Gabe, Jeff, and Tyler. GitHub’s Octocat was evidently watching over us.</em></figcaption>
</figure>
<p>For the rest of the weekend, had any one of these scenarios not fallen our way, we probably wouldn’t be talking much about WITWorld today:</p>
<ul>
<li>2 minutes before we went up to present the final demo, Tyler discovered a bug in our presentation setup that would have kept running the same picture for every game. <br>A minute later, he had diagnosed and repaired it.</li>
<li>Our app was (is) full of security holes and bugs. <br>Someone could have wiped our database in two second during any of the demos.</li>
<li>We happened to pick a team name that starts with “W”. This meant we had the good fortune to do the judging interview last, and the final presentation last.<br>With the whole process being a time crunch, every minute of extra preparation was valuable.</li>
<li>Remember your randomly-selected college roommate? Probably a 50/50 chance it was a terrible experience. <br>And then there’s us: 4 strangers who miraculously survived the weekend without a single disagreement.</li>
<li>Our broad range of skills and abilities meant we never got stuck on any particular development problem for more than a short period of time before someone stepped in and quickly repaired issues they had at some point run into in their own line of work. <br>Hackathon projects are well known for blowing up because of some pesky bug that nobody can figure out for hours — we somehow dodged all of that.</li>
<li>We’d never tested our app with more than a handful of people before we got up on stage to handle 70+. <br>Our belief that Heroku could handle that many websocket connections on its free tier was blind faith.</li>
</ul>
<p>I could go on. The weekend was a roller coaster, and yet time and time again, things just fell into place.</p>
<h3 id="witworld-will-hang-around-as-an-open-source-project">WITWorld will hang around as an open source project</h3>
<p>As we don’t have concrete plans for the future of WITWorld, the immediate future will see us cleaning up the codebase, setting up an MIT license and some structured Issues, and pushing it to the point of being a reasonable public showcase of JAMstack technology.</p>
<p>Contributors of all skill levels are more than welcome! We’d love to keep you in the loop whether you want to contribute or just follow any progress. <a href="http://eepurl.com/dNYsno" rel="noopener">Join the mailing list</a>.</p>
<h3 id="jamstack-is-being-ushered-in-by-one-hell-of-a-community">JAMstack is being ushered in by one hell of a community</h3>
<p>In the early 2000’s, you needed to buy your own server rack space to put up a website. AWS and other cloud providers had turned that concept on its head by 2010.</p>
<p>Today, we’re in the next stage of that evolution: you don’t need a back-end or DevOps expert to spin up your next app idea. Netlify and the rest of the API economy are on track to have turned that leaf by 2020.</p>
<p>Huge thank-you’s go out to those involved with the hackathon:</p>
<ul>
<li>Benjamin Dunphy of <a href="https://www.realworldreact.com/" rel="noopener">Real World React</a> — hackathon organizer extraordinaire</li>
<li>Quincy Larson of <a href="https://www.freecodecamp.org/" rel="noopener">freeCodeCamp</a> — life of the party and humble freeCodeCamp empire-builder</li>
<li>Matt Biilman and Phil Hawksworth of <a href="https://www.netlify.com/" rel="noopener">Netlify</a> — bonus points for also running <a href="https://jamstackconf.com/" rel="noopener">JAMstack_conf</a></li>
<li>Brian Douglas of <a href="https://github.com/" rel="noopener">GitHub</a> — gracious host and provider of food</li>
<li>All the API sponsors: Hasura, Fauna, Formspree, Clarifai, and Pilon</li>
</ul>
<p>With many, many more people behind the scenes.</p>
<p>Events like this hackathon and the corresponding JAMstack_conf are just the beginning. We look forward to the bright future of the JAMstack community!</p>
<p>Big thank-you to Jeff Appareti, Gabe Greenfield, and Tyler Vick for reviewing drafts of this post. And being an awesome team to spend the weekend with.</p>
<p>This post was originally published on <a href="https://tadasant.com/blog/power-of-jamstack-live-game-show-application" rel="noopener">tadasant.com</a></p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
