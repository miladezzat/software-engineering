---
card: "/images/default.jpg"
tags: [Game Development]
author: "Milad E. Fahmy"
title: "I attempted to make the same 2D game prototype in React, Unity, Godot, Construct, Game Maker, and Phaser. Here's what I found."
created: "2021-08-15T19:32:31+02:00"
modified: "2021-08-15T19:32:31+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-game-development tag-react tag-unity tag-godot tag-construct-3 tag-game-maker-2 tag-phaser-3 tag-javascript tag-c ">
<header class="post-full-header">
<h1 class="post-full-title">I attempted to make the same 2D game prototype in React, Unity, Godot, Construct, Game Maker, and Phaser. Here's what I found.</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2019/10/EntromancyHB_Logo_COLOR.jpg 300w,
/news/content/images/size/w600/2019/10/EntromancyHB_Logo_COLOR.jpg 600w,
/news/content/images/size/w1000/2019/10/EntromancyHB_Logo_COLOR.jpg 1000w,
/news/content/images/size/w2000/2019/10/EntromancyHB_Logo_COLOR.jpg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2019/10/EntromancyHB_Logo_COLOR.jpg" alt="I attempted to make the same 2D game prototype in React, Unity, Godot, Construct, Game Maker, and Phaser. Here's what I found.">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>I have some background in JavaScript and C#, and I set out as many do: by spending an inordinate amount of time in "what framework should I use" threads and reading documentation without actually making anything. </p>
<p>Flash forward many months, and I've now spent more time working in (and wrestling with) React, Unity, Godot, Construct 3, Game Maker Studio 2, and Phaser 3, in an attempt to understand what makes them tick.</p>
<p>Admittedly, I think I've spent <em><em>way more</em></em> time in each of them than necessary to make my little game, and I probably could have just stuck with the first one and blundered my way through the prototype. I'm hoping the below info will be helpful for anyone else who is shopping around for an engine or framework.</p>
<p>Bunch of caveats: I'm not attempting to sell one engine or framework over the others, and I'm also not suggesting that one or any of these frameworks will work for your game better than another. I'm also not comparing pricing, back end functionality, or platform deployment. So depending on your requirements, the below information might be of differing value to you.</p>
<p>You can also <strong><strong>skip to the bottom for the TL;DR.</strong></strong></p>
<h2 id="the-prototype">The Prototype</h2>
<p>Given these requirements, I explored the following frameworks and engines to see which one would be most suitable for making my game...instead of actually <em><em>making</em></em> the game (I'm happy to say that now that I've settled on a framework, I'm making a lot more progress). </p>
<p>You can access a playable version <a href="https://sominator.github.io/hacker-battles/" rel="noopener noreferrer">here</a>, and although the game is further along than the live prototype would suggest, this version is pretty stable (in Chrome at least).</p>
<h2 id="react">React</h2>
<p>This experience led me to check out <a href="https://boardgame.io/" rel="noopener noreferrer">boardgame.io</a>, which can work in tandem with React. But this ultimately required me to learn another framework on top of an existing framework, which was less than ideal for my purposes.</p>
<h2 id="unity">Unity</h2>
<p>My experience with Unity thus far has been a mixed bag. I really enjoy working in C#, and anything code-related has been a relatively pain-free experience. However, Unity is very specific about its implementation and can feel counter-intuitive at times.</p>
<p>The editor, on the other hand, is a bear to work with. To harness Unity's full potential, you need to spend a good long while wrestling with the UI to understand where everything is and how to use it. It's also desperately behind the times with 2D game development, clearly attempting to flatten a primarily 3D engine into a 2D plane, with mixed results.</p>
<p>To be fair, I quite enjoy working in the Unity editor, clunky as it is. But if you're looking for a 2D game engine, your quality of life will be a lot higher elsewhere (watch a video on Unity's animation system or achieving pixel perfection and you'll see what I mean). </p>
<p>Ultimately, Unity's handling of the 2D space is a bit more complex than I need for my prototype, but I will return to it for other types of games.</p>
<h2 id="godot">Godot </h2>
<p>My first thought upon encountering <a href="https://godotengine.org">Godot</a> was: "open source game engine that supports C#? Sign me up!" Then I downloaded it, worked through a couple of basic tutorials, and had it crash on build. Hurm.</p>
<p>Several Google searches, reinstalls, and hairs pulled later, I figured out it had something to do with my version of VS Build (I think?), which led me down a separate rabbit hole. I knew from experience that other engines - Unity chief among them - could cause game-breaking issues completely outside of your own code, but this was an annoying hurdle that likely colored the rest of my experience with Godot.</p>
<p>In terms of the editor, I quite liked Godot's node-based implementation, which I actually found counter-intuitive coming from Unity's prefabs, but eventually warmed to. I'd actually go as far as to say that its 2D functionality is <em><em>better</em></em> than Unity's, but it's missing the community, asset store (see sidebar above), and especially, the documentation that Unity has. If you're intending in working in C# with Godot, for example, be prepared to look for answers in the engine's custom GDScript and then translating them to C#.</p>
<p>I have heard, however, of people experiencing great success with Godot while using GDScript, so if you're willing to invest the time to learn it you might enjoy what Godot has to offer.</p>
<h2 id="construct-3">Construct 3 </h2>
<p>In the caveats that I listed above, I mentioned that I'm not including pricing as a point of discussion. Still, I feel like I need to bring it up with <a href="https://construct.net/">Construct 3</a>, as it turned out to be impactful in my experience. </p>
<p>Unlike the other game engines listed here, which are, for the most part, free to use (Game Maker Studio 2 has a 30-day free trial), the vast majority of Construct's functionality is behind a pay wall, and a subscription fee at that. Ugh.</p>
<p>I really, <em><em>really</em></em> like the cut of Construct's jib for simple 2D games. The editor feels a bit like an upgrade from MS Paint, but it handles sprite and object management really well, and is just plain easy to use. I don't love that it uses a "visual scripting" style, but they've recently added the feature of writing plain old JavaScript and it seems to more or less work.</p>
<h2 id="game-maker-studio-2">Game Maker Studio 2</h2>
<p>YoYo Games has clearly done a lot of work to make <a href="https://www.yoyogames.com/gamemaker">Game Maker Studio 2</a> accessible and easily navigable, and it shows. Of all of the engines that I've used for this project, I like the GMS editor the most. For a small project, it's easy to find your way around and go about your business. I suspect, however, that a larger project might get out of hand pretty quickly.</p>
<p>This might be influenced by Game Maker Studio's proprietary language, GML (although GMS 2 supports visual scripting, which I did not use). It works, but if you're coming to it from another OOP language (or, truly, any other widely used language), you might scratch your head at the implementation or figuring out how to do some things. If you're a beginner or willing to spend time figuring out how GMS <em><em>wants</em></em> you to use GML, you'll probably be fine.</p>
<p>I experienced some quirkiness with Game Maker Studio's drag-and-drop functionality - namely, mouse pointer detection upon dragging is a little wonky and requires some scaffolding to make work correctly. </p>
<p>I think - and this is totally personal preference and laziness on my part - that if GMS offered the ability to use another, non-proprietary programming language, I would spend the time to do more damage here. I'm all for leveling up multiple skills while working, whereas spending the time to become an expert in the GMS editor <em><em>and</em></em> GML without being able to easily apply that knowledge elsewhere doesn't seem worthwhile.</p>
<p>Still, it's a pretty workable 2D editor, and although the community support may not be on par with Unity's, it's still pretty good. &nbsp;Beware, also, that once your free trial is up, you'll have to pay to continue using Game Maker Studio 2.</p>
<h2 id="phaser-3">Phaser 3</h2>
<p><a href="/news/how-i-made-a-2d-prototype-in-different-game-engines/phaser%20io">Phaser</a> is a lightweight, open-source JavaScript game framework. There are some Phaser IDEs around, but if you're of the sort that wants to work primarily in code, you might wind up here, using Atom, Sublime, or your favorite editor.</p>
<p>Phaser 2 was and is widely used and well-documented with a ton of tutorials to draw upon. Phaser 3 is the opposite. It has a comparatively high learning curve for beginners, with a bunch of examples and not a lot of context around them. </p>
<p>A lot of the tutorials out there support Phaser 2, and while the learning is transferable, the code is not. Additionally, the devs <a href="https://madmimi.com/p/4f5f0f" rel="noopener noreferrer">recently announced that they'll be moving support to Phaser 4</a> (and TypeScript rather than ES6), which is not great if you've spent time working in Phaser 3.</p>
<p>If you're not a professional programmer (I'm not) and up-to-speed with ES6 classes and JavaScript best practices (I wasn't), you might become quickly frustrated with Phaser's lack of handholding and having to set up your own IDE and work flow (I was). </p>
<p>If you're a front end developer, you might like or be comfortable with hard coding pixel coordinates for everything, but sheesh, is this painstaking work. Additionally, if you're not up-to-speed on everything JavaScript, you'll most likely be searching for answers in non-Phaser circles and then applying them to your project, which has its own benefit, I suppose.</p>
<p>One other note in case it's not clear: Phaser 3 <em>does </em>have quite a bit of official documentation and examples, but it <em>doesn't </em>have the community or Stack Overflow answers that a lot of other game engines enjoy. If you run into an issue or can't figure something out, you'll have to figure out your own solution or post your question on the Phaser Discord server, which has been helpful in my experience.</p>
<h2 id="conclusion">Conclusion </h2>
<p>Given all of the above, the prototype I've stuck with and continue to iterate upon is the one I've built with Phaser 3. I realize that this may be anti-climactic, as Phaser isn't inherently "better" than the other frameworks and engines at 2D game development (except for, perhaps, React, which isn't trying to be a competitor in the digital game space).</p>
<p>Phaser does, however, seem to handle drag-and-drop and game loop management for <em><em>Hacker Battles</em></em> more smoothly, and for my purposes, that's important. I also enjoy that using Phaser is requiring me to invest more heavily in the JavaScript ecosystem(s) and communities, but I'm interested in doing that anyway so it feels like a bonus. </p>
<p>If you're more of the "what can I use to build something quickly and not care about the context in which the engine is situated" type, YMMV.</p>
<h2 id="tl-dr">TL;DR</h2>
<p><strong>React:</strong> great for front end development. Wouldn't use it for games, particularly drag-and-drop.</p>
<p><strong>Unity:</strong> you can make any type of 2D game if you're willing to wrestle with the editor and underlying 3D idiosyncrasies. Great community support, and C# is awesome. Asset store exists, but may not be useful for your purposes.</p>
<p><strong>Godot: </strong>open source and supports GDScript, C#, even C++ and Python if you're willing to do a lot of the heavy lifting. Good 2D implications but not nearly as much community support as something like Unity. Also, my experience was buggy.</p>
<p><strong>Construct 3:</strong> really easy to use, high barrier to entry because of the subscription paywall. Visual scripting may get on your nerves if you're looking to use or learn code, although there is now some JavaScript support.</p>
<p><strong>Game Maker Studio 2:</strong> user-friendly editor with good community support. GML or visual scripting might not be your cup of tea if you're coming from another more popular programming language, but hey, when in Rome. Also, requires payment after a 30-day free trial.</p>
<p><strong>Phaser 3:</strong> expect to code everything, and do a lot of searching to figure out how to make things work. It's working for me for this particular game and prototype, but Phaser 4 is on the way, so there's that.</p>
<p>I hope this post is useful in your own search and discernment process. I'd love to hear about your own experience(s), too, with any of these frameworks/engines or others!</p>
<p>If you enjoyed this article, please consider <a href="https://www.nightpathpub.com/">checking out my games and books</a>, <a href="https://www.youtube.com/msfarzan?sub_confirmation=1">subscribing to my YouTube channel</a>, or <a href="https://discord.gg/RF6k3nB">joining the <em>Entromancy </em>Discord</a>.</p>
<p><strong>M. S. Farzan, Ph.D.</strong> has written and worked for high-profile video game companies and editorial websites such as Electronic Arts, Perfect World Entertainment, Modus Games, and MMORPG.com, and has served as the Community Manager for games like <em><em>Dungeons &amp; Dragons Neverwinter</em></em> and <em><em>Mass Effect: Andromeda</em></em>. He is the Creative Director and Lead Game Designer of <em><em><a href="https://www.entromancy.com/rpg">Entromancy: A Cyberpunk Fantasy RPG</a></em></em> and author of <em><a href="http://nightpathpub.com/books">The Nightpath Trilogy</a></em>. Find M. S. Farzan on Twitter <a href="http://www.twitter.com/sominator" rel="noopener">@sominator</a>.</p>
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
