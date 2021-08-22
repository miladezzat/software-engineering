---
card: "https://cdn-media-1.freecodecamp.org/images/0*WBakKAUjwhRyaoyu"
tags: [JavaScript]
description: by Al-amin Nowshad
author: "Milad E. Fahmy"
title: "How to build a CLI tool in NodeJS ?"
created: "2021-08-15T19:35:45+02:00"
modified: "2021-08-15T19:35:45+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-software-development tag-nodejs tag-tech tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">How to build a CLI tool in NodeJS ?</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/0*WBakKAUjwhRyaoyu 300w,
https://cdn-media-1.freecodecamp.org/images/0*WBakKAUjwhRyaoyu 600w,
https://cdn-media-1.freecodecamp.org/images/0*WBakKAUjwhRyaoyu 1000w,
https://cdn-media-1.freecodecamp.org/images/0*WBakKAUjwhRyaoyu 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/0*WBakKAUjwhRyaoyu" alt="How to build a CLI tool in NodeJS ?">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Al-amin Nowshad</p>
<h1 id="how-to-build-a-cli-tool-in-nodejs">How to build a CLI tool in NodeJS ?</h1>
<figcaption>Photo by <a href="https://unsplash.com/@markusspiske?utm_source=medium&amp;utm_medium=referral" rel="noopener" target="_blank" title="">Markus Spiske</a> on <a href="https://unsplash.com?utm_source=medium&amp;utm_medium=referral" rel="noopener" target="_blank" title="">Unsplash</a></figcaption>
</figure>
<p>As developers, we kind of live with CLI tools. From <code>git</code> to <code>cloud shells</code> — we are using these tools everywhere. So, it’s time to make your own. We’ll use Heroku’s great oclif framework in the process.</p>
<h3 id="what-s-oclif">What’s oclif?</h3>
<p>It’s an open <strong>framework</strong> to build CLI tools quickly, and it’s provided by the well-known <strong>Heroku</strong>.</p>
<h3 id="what-s-gonna-be-built">What’s gonna be built?</h3>
<p>We’ll make a todo list command that can have four actions:</p>
<ul>
<li>Add a new task</li>
<li>View all tasks</li>
<li>Update task</li>
<li>Remove a task</li>
</ul>
<h3 id="initialize-our-project">Initialize our project</h3>
<p>Oclif can generate two types of projects —</p>
<ol>
<li>Projects that have one command.</li>
<li>Projects that might have multiple commands, including nested ones.</li>
</ol>
<p>In this article, we’re gonna need a multiple commands project, so let’s generate it:</p><pre><code>npx oclif multi todocli</code></pre>
<p>Running this command and following the instructions will initialize a fresh project named <code>todocli</code> inside the current directory.</p>
<p>Now, let’s go inside the directory and run help:</p><pre><code>cd todocli &amp;&amp; ./bin/run --help</code></pre>
<p>This will print the results below:</p><pre><code>&gt; USAGE       $ todocli [COMMAND]    COMMANDS    hello       help   display help for todocli</code></pre>
<p>This shows available commands and their documentation.</p>
<h3 id="project-structure">Project Structure</h3>
<p>Inside <code>src</code> directory we can find a directory named <code>commands</code>. This directory holds all the commands with their relative file names. For example, if we have a command <code>hello</code> we’ll have a file named <code>hello.js</code> inside this directory and the command will work without any more setup. Let’s remove <code>hello.js</code> as we won’t be needing it.</p>
<h3 id="setup-database">Setup database</h3>
<p>To store our tasks we need a storage system. For simplicity, we’ll use <a href="https://github.com/typicode/lowdb" rel="noopener">lowdb</a> which is a pretty simple <strong>json</strong> file storage system. Sweet for this project ?</p>
<p>Let’s install it:</p><pre><code>npm install lowdb --save</code></pre>
<p>Let’s create a <code>db.json</code> file inside our project root directory. This file will hold our data. Then we need to install <a href="https://github.com/typicode/lowdb" rel="noopener">lowdb</a>. Now, we’ll create a file called <code>db.js</code> inside the <code>src</code> directory. This file will hold our database stuff.</p>
<p>Here, we’re simply loading the required library and file at first, then defining an empty todos array as our base collection (it’s like a table if you’re thinking like SQL databases).</p>
<h3 id="adding-tasks">Adding tasks</h3>
<p>oclif provides us with a smooth command generation functionality. Let’s run the following:</p><pre><code>oclif command add</code></pre>
<p>This will create a file named <code>add.js</code> inside <code>src/commands</code> directory. Let’s replace that file’s content with the code below:</p>
<p>The file has a few key components:</p>
<ul>
<li>a run function that executes the main functionality of this command,</li>
<li>a description, that’s the documentation for the command, and</li>
<li>flags, which describes the flags passed to the command.</li>
</ul>
<p>Here, we have a flag named <code>task</code> which has a <code>string</code> type. We can run the command</p><pre><code>./bin/run add --task="welcome task"</code></pre>
<p>This command will add a task to our database and print the response of that operation.</p>
<h3 id="showing-tasks">Showing tasks</h3>
<p>Here inside <code>show.js</code> , we’re showing all the tasks in ascending order. We’ve added a little color with <code>chalkjs</code> to give our command results a better look.</p>
<h3 id="updating-tasks">Updating Tasks</h3>
<p>For simplicity, we’re now just setting tasks as <code>done</code> for our update part. We’ve to just passed the task’s <code>id</code> as a <code>flag</code> .</p><pre><code>./bin/run update --id=1</code></pre>
<p>This will set the <code>done = true</code> for the task with <code>id = 1</code> .</p>
<h3 id="removing-tasks">Removing tasks</h3>
<p>Removing is pretty straightforward: we pass <code>id</code> as a flag, and then remove the related task from our database.</p>
<h3 id="almost-done-">Almost Done!</h3>
<p>And just like that, we’ve made our very simple <code>todocli</code>. Now if we want to use it like any other normal CLI tool or let our friends use it, we need to make it an npm package. So actually let’s publish it on npm.</p>
<h3 id="build-and-publish-to-npm">Build and Publish to npm</h3>
<p>First of all, make sure you have a npm account. Then you need to login running the command</p><pre><code>npm login</code></pre>
<p>Then inside the project directory run</p><pre><code>npm run prepack</code></pre>
<p>This will pack the project and make it npm-ready with a generated readme from the descriptions and flags.</p>
<p>Now, publish it on npm:</p><pre><code>npm publish</code></pre>
<p>If everything goes well, then the module has been published on npm successfully. If it doesn’t work, check the project name and version.</p>
<p>Now, we can use it like any other npm tool with the global installation:</p><pre><code>npm install -g todocli</code></pre>
<p>And then anyone can just use these commands anytime, almost anywhere ?</p><pre><code>&gt; todocli add --task="Great task!!!"&gt; todocli show&gt; todocli update --id=1&gt; todocli remove --id=1</code></pre>
<p>If you’ve come this far following the whole article, congratulations ? You are awesome. Now, you can do a little task:</p>
<h4 id="task">Task</h4>
<p>The id assigning of the tasks is not a proper one, can you fix it? Let me know how you solve it in the response section.</p>
<p>Good luck, and thanks for reading :)</p>
<p>oclif : <a href="https://oclif.io" rel="noopener">https://oclif.io</a></p>
<p>lowdb: <a href="https://github.com/typicode/lowdb" rel="noopener">https://github.com/typicode/lowdb</a></p>
<p>chalk: <a href="https://github.com/chalk/chalk" rel="noopener">https://github.com/chalk/chalk</a></p>
<p>todocli: <a href="https://www.npmjs.com/package/todocli-frombd" rel="noopener">https://www.npmjs.com/package/todocli-frombd</a></p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
