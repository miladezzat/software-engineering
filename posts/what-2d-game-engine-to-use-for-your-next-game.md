---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c9f9f740569d1a4ca4397.jpg"
tags: [Game Development]
description: A few weeks ago, I posted about my experience attempting to m
author: "Milad E. Fahmy"
title: "What 2D Game Engine to Use for Your Next Game"
created: "2021-08-15T19:32:20+02:00"
modified: "2021-08-15T19:32:20+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-game-development tag-react tag-unity tag-godot tag-construct-3 tag-game-maker-2 tag-phaser-3 tag-javascript tag-c ">
<header class="post-full-header">
<h1 class="post-full-title">What 2D Game Engine to Use for Your Next Game</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c9f9f740569d1a4ca4397.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9f9f740569d1a4ca4397.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9f9f740569d1a4ca4397.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9f9f740569d1a4ca4397.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c9f9f740569d1a4ca4397.jpg" alt="What 2D Game Engine to Use for Your Next Game">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>A few weeks ago, I <a href="/news/how-i-made-a-2d-prototype-in-different-game-engines/">posted about my experience</a> attempting to make a prototype in a bunch of different 2D game engines/frameworks to learn what makes them tick.</p>
<p>If you're shopping around for an engine for your next 2D game, this article will provide some things to consider that may help in your discernment process.</p>
<p>Do note that I'm not attempting to cover every 2D game engine out there; nor am I positioning one engine or framework over another. &nbsp;These recommendations are from my personal experience using different engines and frameworks for prototyping.</p>
<p>And if you'd prefer to watch rather than read, I've created a video version of this post (26 minute watch):</p>
<h2 id="react">React</h2>
<p>At first glance, you might be thinking, "<a href="https://reactjs.org/">React</a> is a front end framework for making interactive websites. It's not a game engine!" And you'd be mostly correct.</p>
<p>React doesn't provide native support for game development basics, like, for example, 2D physics, but it <em>does </em>handle state extremely well. &nbsp;If you're already a JavaScript developer and willing to pair React with something like <a href="https://boardgame.io/">boardgame.io</a> to make a simple 2D game, you could potentially get a prototype up and running pretty quickly.</p>
<p>For all other types of 2D games, you'll want to look elsewhere.</p>
<h2 id="unity">Unity</h2>
<p><a href="https://unity.com/">Unity</a> has made itself ubiquitous in the 2D and 3D game development spaces. I'd position it as an excellent 3D game engine, and a serviceable 2D one.</p>
<p>The Unity editor is fairly complex, with a lot of nested menus that take some time to wrap your head around (check out <a href="/news/take-a-tour-of-unity-2d/">this article</a> for a tour of its 2D features). &nbsp;If you don't already have a background in C#, which Unity uses for scripting, you'll want to brush up on it prior to learning Unity, as doing so will ease your overall learning curve.</p>
<p>Unity also does a lot of things the "hard way" when it comes to 2D game development, which doesn't <em>feel </em>native compared to other game engines. &nbsp;Creating a 2D game world in Unity, for example, feels like you're shoehorning a 2D plane into a large 3D space, and things like animation and pixel perfection are more clunky than in other 2D-specific engines.</p>
<p>You can make any type of 2D game with Unity if you're willing to wrestle with the editor and underlying 3D idiosyncrasies. It has extensive community support, and you'll find that working with C# is a delight. Additionally, Unity's Asset Store has all kinds of art and templates for you to download and purchase, but buyer beware: you might spend as much time rewriting someone else's code to fit your project as you would just starting from scratch.</p>
<p>Unity is, in general, free to use, but pricing becomes more complex if you want to use <em>everything </em>it has to offer (see <a href="https://store.unity.com/compare-plans">this page</a> for more details).</p>
<h2 id="godot">Godot</h2>
<p><a href="https://godotengine.org/">Godot</a> is a free and open source 2D and 3D game engine that supports GDScript, C#, and even C++ and Python if you're willing to do a lot of the heavy lifting to make them work. &nbsp;It supports a node-style workflow and is super lightweight.</p>
<p>If you're a) willing to invest in learning GDScript or b) already super good at C#, C++, or Python, you'll probably be fine in Godot, particularly if you like working with open source software. &nbsp;If not, you may get easily frustrated, as there isn't nearly as much support for C# or other languages as there is for GDScript. &nbsp;Still, Godot is a pleasant engine with which to work, and although it may not have the same pedigree and community support as something like Unity, if you're a self-starter you might feel well at home.</p>
<h2 id="construct-3">Construct 3</h2>
<p>If you just want to make 2D games and don't care about programming language or subscription fees, you'll find <a href="https://www.construct.net/en">Construct 3</a> to have everything you need to get a demo up and running, and quickly. &nbsp;All of your work will be done in a browser, using drag-and-drop tools (and custom JavaScript support if you need it).</p>
<p>Don't expect to have a meaningfully productive experience with Construct 3 for free, however. &nbsp;There's a simple demo that you can try out, but impactful game development with Construct 3 is locked behind a paywall, and a subscription at that.</p>
<h2 id="game-maker-studio-2">Game Maker Studio 2</h2>
<p><a href="https://www.yoyogames.com/gamemaker">Game Maker Studio 2</a> has a user-friendly editor that supports a proprietary language called, appropriately, Game Maker Language (GML), along with visual scripting. &nbsp;It also has a lot of tutorials, great community support, and an asset store (which comes with the same caveats as Unity's, above).</p>
<p>The general workflow of Game Maker Studio 2 and doing things like animating sprites, setting up your game world, and so on, are straightforward and intuitive. GML might not be your cup of tea if you're coming from another, more widely-used programming language, and I would <em>not </em>recommend it as your first introduction to learning how to code. &nbsp;It employs some of the basic concepts of programming, but not important details such as coding best practices or how to write clean code.</p>
<p>Additionally, you can try Game Maker Studio 2 with a free 30-day trial, but will need to pay to continue to use it after that time.</p>
<h2 id="phaser-3">Phaser 3</h2>
<p>If you want to code <em>everything </em>and learn a lot about the JavaScript ecosystem while doing it, check out <a href="http://phaser.io/">Phaser 3</a> (or wait for Phaser 4, which is <a href="https://madmimi.com/p/4f5f0f">on the way</a>).</p>
<p>Phaser is a lightweight and powerful JavaScript framework for making 2D games. &nbsp;Whereas Phaser 2 was extremely well-documented and had excellent community support, Phaser 3 is quite the opposite. &nbsp;There's good official documentation and a bunch of examples (without much context around them, it must be said), and a dreadfully small amount of tutorials.</p>
<p>Expect to build everything yourself, but if you're looking for ES6 or TypeScript support, or if you <em>really </em>want to polish your skills as a JavaScript developer, you'll be able to go a long way with Phaser 3.</p>
<p>In the interest of fairness, I should mention a two other 2D game engines that have been recommended to me since I started writing on the topic: <a href="https://love2d.org/">LÖVE 2D</a>, which uses Lua, and <a href="http://www.monogame.net/">MonoGame</a>, which supports C#. &nbsp;I haven't used either of them (or others, such as <a href="https://www.pygame.org/">PyGame</a>), and can't speak to their usefulness, but they may be worth checking out.</p>
<p>Let me know which 2D game engine you wind up using, and why!</p>
<p>If you enjoyed this article, please consider <a href="https://www.nightpathpub.com/">checking out my games and books</a>, <a href="https://www.youtube.com/msfarzan?sub_confirmation=1">subscribing to my YouTube channel</a>, or <a href="https://discord.gg/RF6k3nB">joining the <em>Entromancy </em>Discord</a>.</p>
<p><strong><strong>M. S. Farzan, Ph.D.</strong></strong> has written and worked for high-profile video game companies and editorial websites such as Electronic Arts, Perfect World Entertainment, Modus Games, and MMORPG.com, and has served as the Community Manager for games like <em><em><em><em>Dungeons &amp; Dragons Neverwinter</em></em></em></em> and <em><em><em><em>Mass Effect: Andromeda</em></em></em></em>. He is the Creative Director and Lead Game Designer of <em><em><em><em><a href="https://www.entromancy.com/rpg">Entromancy: A Cyberpunk Fantasy RPG</a></em></em></em></em> and author of <em><a href="http://nightpathpub.com/books">The Nightpath Trilogy</a></em>. Find M. S. Farzan on Twitter <a href="http://www.twitter.com/sominator" rel="noopener">@sominator</a>.</p>
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
