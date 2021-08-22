---
card: "https://cdn-media-1.freecodecamp.org/images/1*gcZnkUqguix0zVi7Fsd3_Q.png"
tags: [JavaScript]
description: by Josh Wulf
author: "Milad E. Fahmy"
title: "How to modify Minecraft the easy way with TypeScript"
created: "2021-08-15T19:34:34+02:00"
modified: "2021-08-15T19:34:34+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-minecraft tag-typescript tag-tech tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">How to modify Minecraft the easy way with TypeScript</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*gcZnkUqguix0zVi7Fsd3_Q.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*gcZnkUqguix0zVi7Fsd3_Q.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*gcZnkUqguix0zVi7Fsd3_Q.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*gcZnkUqguix0zVi7Fsd3_Q.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*gcZnkUqguix0zVi7Fsd3_Q.png" alt="How to modify Minecraft the easy way with TypeScript">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Josh Wulf</p>
<h1 id="how-to-modify-minecraft-the-easy-way-with-typescript">How to modify Minecraft the easy way with TypeScript</h1>
<p>Usually, modifying Minecraft requires coding in Java, and a lot of scaffolding. Now you can write and share Minecraft mods using TypeScript/Javascript.</p>
<p><a href="https://scriptcraftjs.org/" rel="noopener">ScriptCraft</a> is an open source JavaScript Minecraft modding library, and we’ve written support for TypeScript, and a bunch of tooling to create a familiar developer experience for those coming from JavaScript land (including Yeoman and NPM).</p>
<p>In this article I’ll walk you through getting set up and building your first TypeScript Minecraft mod in under an hour — as little as 20 minutes, depending on your internet connection.</p>
<p>In this video (<a href="https://www.youtube.com/watch?v=RqohEXw9yvw" rel="noopener">click here</a> if the embed doesn’t work above) I show you how to write a basic Minecraft mod using TypeScript, and run it on your local computer with both a desktop and a mobile Minecraft server.</p>
<p>Below, I’ll walk you through the steps, with links to resources.</p>
<h3 id="prerequisites">Prerequisites</h3>
<p>You’ll need some software installed on your computer, to run the Minecraft server and the tools for writing your plugin. Install all of the four following:</p>
<ul>
<li><a href="https://www.docker.com/get-started" rel="noopener">Docker</a> — a containerisation solution.</li>
<li><a href="https://nodejs.org/en/" rel="noopener">Node.js </a>— a JavaScript execution engine and library.</li>
<li><a href="https://www.portainer.io/" rel="noopener">Portainer</a> — a web-based GUI for managing Docker containers.</li>
<li><a href="https://code.visualstudio.com/" rel="noopener">Visual Studio Code </a>— a code editor.</li>
</ul>
<h4 id="minecraft-client">Minecraft Client</h4>
<p>You need a Minecraft <em>client</em> to test your plugin.</p>
<p>Install at least one of the following:</p>
<ul>
<li><a href="https://www.minecraft.net/en-us/" rel="noopener">Minecraft </a>Java Edition — a desktop client, if you want to test against a Bukkit server.</li>
<li><a href="https://play.google.com/store/apps/details?id=com.mojang.minecraftpe" rel="noopener">Minecraft Pocket Edition</a> — a mobile client, if you want to test against a Nukkit server (phone/tablet/Xbox). If you use this, you can use <a href="https://mcpelauncher.readthedocs.io/en/latest/" rel="noopener">Minecraft Pocket Edition Bedrock Launcher</a> to run the mobile client on your computer.</li>
</ul>
<h3 id="installation">Installation</h3>
<p>Now that you have the prerequisites installed, it is time to install the tools for the server and for plugin development.</p>
<ol>
<li>Run the following command:</li>
</ol><pre><code>npm i -g smac yo generator-sma-plugin typescript</code></pre>
<p>This will install four things on your computer:</p>
<ul>
<li><code>smac</code>— <em>Scriptcraft Modular Architecture Controller, </em>a program that runs Minecraft Servers for your plugins.</li>
<li><code>yo</code> — <em>Yeoman</em>, a scaffolding tool.</li>
<li><code>generator-sma-plugin</code> — a Yeoman plugin for generating a new Minecraft plugin using the Scriptcraft Modular Architecture.</li>
<li><code>typescript</code> — the TypeScript transpiler, for converting TypeScript code into ES5 JavaScript that can run in Minecraft.</li>
</ul>
<h3 id="create-a-new-plugin">Create a new plugin</h3>
<p>Now that you have the toolset installed, create a new plugin by running this command:</p><pre><code>yo sma-plugin</code></pre>
<p>This starts the plugin wizard:</p><pre><code>➜ yo sma-plugin</code></pre><pre><code>     _-----_     ╭──────────────────────────╮    |       |    │      Welcome to the      │    |--(o)--|    │  Scriptcraft SMA Plugin  │   `---------´   │       generator by       │    ( _´U`_ )    │      Magikcraft.io!      │    /___A___\   /╰──────────────────────────╯     |  ~  |   __'.___.'__ ´   `  |° ´ Y `</code></pre><pre><code>? Your package name (workspace)</code></pre>
<p>There is only one question you need to answer here — the name of your plugin. The wizard will create a new folder with the name of the plugin, and place the files for the new plugin in it.</p>
<p>This screencast shows you the process:</p>
<p><a href="https://asciinema.org/a/242028" rel="noopener"><strong>Scaffold a Minecraft plugin using Magikcraft</strong></a><br><a href="https://asciinema.org/a/242028" rel="noopener"><em>Magikcraft.io allows you to write Minecraft plugins in TypeScript/JavaScript that will run on Desktop / Mobile.</em>asciinema.org</a></p>
<p>Once the wizard completes, it emits a message similar to this (I chose the name <code>my-sma-plugin</code> in this example):</p>
<h3 id="edit-your-new-plugin">Edit your new plugin</h3>
<p>Start Visual Studio Code and open the directory containing your new plugin.</p>
<p>Here is a description of the files in your new plugin:</p>
<ul>
<li><code>__tests__</code> — a directory containing unit tests for your plugin. These are run with Jasmine. Add more tests in here as you develop your plugin.</li>
<li><code>.vscode</code> — settings for Visual Studio code.</li>
<li><code>autoload</code> — any files in here are automatically executed when your plugin is enabled in the Minecraft server. Use this for initialisation tasks, registering event handlers, and so forth.</li>
<li><code>lib</code> — A place for you to put files that should not be automatically loaded (or that are required from your autoloaded files). If your plugin provides functionality to other plugins, then you export that via <code>lib/index.ts</code>.</li>
<li><code>node_modules</code> — modules from npm are installed here. You cannot use modules from npm that use V8 APIs (like fs or http). Many of the features that you need are provided by the <a href="https://github.com/walterhiggins/ScriptCraft" rel="noopener">Scriptcraft API </a>and by the <code><a href="https://github.com/Magikcraft/magikcraft-core" rel="noopener">@magikcraft/core</a></code><a href="https://github.com/Magikcraft/magikcraft-core" rel="noopener"> package.</a></li>
<li><code>.editorconfig</code> — settings for the editor.</li>
<li><code>.gitattributes</code> — settings for <code>git</code>.</li>
<li><code>.gitignore</code> — files to ignore for <code>git</code>.</li>
<li><code>.prettierrc</code> — settings for code formatting.</li>
<li><code>package-lock.json</code> —versions of installed dependencies.</li>
<li><code>package.json</code> —configuration for this plugin, including dependencies and scripts.</li>
<li><code>README.md</code> — instructions for developing and testing your plugin.</li>
<li><code>smac-nukkit.json</code> — a configuration for running a Nukkit server with your plugin loaded.</li>
<li><code>smac.json</code> — a configuration for running a Bukkit server with your plugin loaded.</li>
<li><code>tsconfig.json</code> — the TypeScript configuration for transpiling your plugin to JavaScript.</li>
</ul>
<p>Open <code>autoload/index.ts</code>:</p>
<p>This file is automatically executed when the plugin is loaded. Changes that you make here will be visible when you (re)load the plugin.</p>
<h3 id="start-a-development-server">Start a development server</h3>
<p>You can load your plugin in a development server. There are two servers that you can use — one for the desktop Java client, and the other for the mobile Pocket Edition client.</p>
<h4 id="start-the-desktop-server">Start the desktop server</h4>
<p>Run this to start a desktop server:</p><pre><code>npm run start:bukkit</code></pre>
<p>This will:</p>
<ol>
<li>Pull the Bukkit server image from Docker Hub.</li>
<li>Start the Bukkit server with your plugin loaded.</li>
<li>Start the TypeScript transpiler to transpile your code to ES5.</li>
</ol>
<p>You can now connect to the server with your desktop client. Click on <code>Multiplayer</code> then <code>Direct Connect</code>, then use the server address <code>127.0.0.1</code>:</p>
<h4 id="start-the-mobile-server">Start the mobile server</h4>
<p>Run this command to start a mobile server:</p><pre><code>npm run start:nukkit</code></pre>
<p>This will:</p>
<ol>
<li>Pull the Nukkit server image from Docker Hub.</li>
<li>Start the Nukkit server with your plugin loaded.</li>
<li>Start the TypeScript transpiler to transpile your code to ES5.</li>
</ol>
<p>You can now connect to the server with your pocket edition client. Click on <code>Play</code> then <code>Servers</code>, then add a server with the address <code>127.0.0.1</code>:</p>
<h3 id="reload-changes-to-your-plugin">Reload changes to your plugin</h3>
<p>As you change your plugin and save the changed TypeScript, it will automatically be transpiled to JavaScript.</p>
<p>To reload the changes in the development server, type the following in the server console:</p><pre><code>ts onrefresh()</code></pre>
<p>See the screencast below to see what this looks like.</p>
<h3 id="stop-the-server">Stop the server</h3>
<p>To stop the server, type this command at the server console:</p><pre><code>smac stop</code></pre>
<p>See the screencast below to see what it looks like when you run this command.</p>
<h3 id="screencast-start-reload-and-stop">Screencast: Start, Reload, and Stop</h3>
<p>This screencast shows you starting the desktop server, reloading the plugin code, and also stopping the development server.</p>
<p><a href="https://asciinema.org/a/242023" rel="noopener"><strong>Start a Magikcraft Development Server</strong></a><br><a href="https://asciinema.org/a/242023" rel="noopener"><em>Start a Magikcraft Development Server.</em>asciinema.org</a></p>
<h3 id="further-resources">Further Resources</h3>
<ul>
<li><a href="https://github.com/Magikcraft" rel="noopener">Magikcraft on GitHub</a></li>
<li><a href="https://www.youtube.com/channel/UC9cEOcTkQEyiKr2nCZDBYeg" rel="noopener">Magikcraft on YouTube</a></li>
<li><a href="https://github.com/Magikcraft/mct1" rel="noopener">MCT1 Source Code (Example Plugin)</a></li>
<li><a href="https://github.com/walterhiggins/ScriptCraft" rel="noopener">ScriptCraft on GitHub</a></li>
<li><a href="https://bukkit.magikcraft.io" rel="noopener">Bukkit API Docs</a></li>
</ul>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
