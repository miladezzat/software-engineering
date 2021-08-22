---
card: "https://cdn-media-1.freecodecamp.org/images/1*dV21xe33QsG6bUWnA5hATg.png"
tags: [Nodejs]
description: "by Mohammed Ajmal Siddiqui"
author: "Milad E. Fahmy"
title: "Introduction to NPM Scripts"
created: "2021-08-16T11:47:35+02:00"
modified: "2021-08-16T11:47:35+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-nodejs tag-npm tag-web-development tag-npm-scripts tag-technology ">
<header class="post-full-header">
<h1 class="post-full-title">Introduction to NPM Scripts</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*dV21xe33QsG6bUWnA5hATg.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*dV21xe33QsG6bUWnA5hATg.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*dV21xe33QsG6bUWnA5hATg.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*dV21xe33QsG6bUWnA5hATg.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*dV21xe33QsG6bUWnA5hATg.png" alt="Introduction to NPM Scripts">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
"name": "super-cool-package",
"version": "1.0.0",
"scripts": {
...
},
"dependencies": {
...
}
"devDependencies": {
...
}
}</code></pre><p>If you’ve been working with NodeJS and NPM, you will be familiar with the package.json file. Notice the <code>scripts</code> object in the file. This is where our NPM scripts will go. NPM scripts are written as usual JSON key-value pairs where the key is the name of the script and the value contains the script you want to execute.</p><p>Here’s perhaps the most popular NPM script (and it’s also a special kind of script):</p><pre><code class="language-json">"scripts": {
"start": "node index.js",
...
}</code></pre><p>You’ve probably seen this tons of times in your package.json files. And you probably know that you can type <code>npm start</code> to execute the script. But this example illustrates the first important aspect of NPM scripts — they are simply terminal commands. They run in the shell of the OS on which they’re executed. So it might be bash for Linux and cmd.exe for Windows.</p><p>At this point, you might be rather unimpressed. But keep reading to see how powerful NPM scripts really are.</p><h3 id="custom-scripts">Custom Scripts</h3><p>The script we just saw is one of the “special” NPM scripts. You can execute it by simply typing <code>npm start</code>. These are scripts with names that NPM recognizes and attaches special meaning to. For example, you can write a script called <code>prepublish</code>. NPM will execute the script before your package is packed and published, and also when you run <code>npm install</code> locally without any arguments. More on such scripts <a href="https://docs.npmjs.com/misc/scripts" rel="noopener">here</a>.</p><p>But NPM also let’s you define your own custom scripts. This is where the power of NPM scripts starts to show itself.</p><p>Let’s look at a super basic custom NPM script that outputs “hello world” to the console. Add this to the scripts object of your package.json file:</p><pre><code>"say-hello": "echo 'Hello World'"</code></pre><p>The scripts object in your package.json file should look like this:</p><pre><code class="language-json">...
"scripts": {
"start": "node index.js",
"say-hello": "echo 'Hello World!'"
}</code></pre><p>Now try running <code>npm say-hello</code>. Doesn’t work? This is because custom NPM scripts must be preceded by either <code>run-script</code> or <code>run</code> for them to be executed correctly. Try running <code>npm run-script say-hello</code> or <code>npm run say-hello</code>. The console says, “Hello World!”! We’ve written our first NPM script!</p><p>Here’s a quick tip — in order to prevent the default NPM logs from outputting to the console when you execute a script, add the <code>--silent</code> flag. This is what your command would look like:</p><pre><code>npm run --silent say-hello</code></pre><h3 id="calling-npm-scripts-within-other-npm-scripts">Calling NPM Scripts Within Other NPM Scripts</h3><p>One downside of using NPM scripts shows up when your script is fairly complex (and long). This problem is compounded by the fact that the JSON spec does not support comments. There are a few ways around this problem. One way is to divide your script into small single-purpose scripts and then call them within other NPM scripts. The way to call an NPM script within another is straightforward. Modify your <code>scripts</code> object so that it looks like this:</p><pre><code class="language-json">"scripts": {
"say-hello": "echo 'Hello World'",
"awesome-npm": "npm run say-hello &amp;&amp; echo 'echo NPM is awesome!'"
}</code></pre><p>Since NPM scripts execute in the shell, calling <code>npm run say-hello</code> within another NPM script is almost intuitive.</p><blockquote>For those of you who are not very comfortable with terminal commands, the <code><em>&amp;&amp;</em></code>in the script is used to delimit two commands. Thus, the second command executes after the successful execution of the first command.</blockquote><p>Now when you run <code>npm run awesome-npm</code>, the say-hello script executes first, outputting “Hello World” to the console, followed by the part of the script after the <code>&amp;&amp;</code>, which outputs “NPM is awesome!”</p><p>Here’s a use case where this might be useful. Suppose you’re automating the build process of your application. Let’s say you’re using Webpack as a bundler and your distribution code goes into a directory called “dist”.</p><p>You might start with cleaning the directory. This can be done by either deleting its contents or deleting the directory itself and then making it again. Let’s go with the latter approach. Your command might look something like this:</p><pre><code>rm -r dist &amp;&amp; mkdir dist</code></pre><blockquote>Note that this uses bash commands. You will learn how to write cross-platform NPM scripts later in this article.</blockquote><p>After this, you might invoke the bundler by executing the <code>webpack</code> command.</p><p>You can execute these commands in succession by using the <code>&amp;&amp;</code>operator. However, for the sake of demonstration and modularity, let’s split this into two NPM scripts that call each other.</p><p>Here’s what the scripts object would look like in this use case:</p><pre><code class="language-json">"scripts": {
...
"clean": "rm -r dist &amp;&amp; mkdir dist",
"build": "npm run clean &amp;&amp; webpack"
}</code></pre><p>There you have it! How to split a more complex task into smaller NPM scripts.</p><h3 id="calling-shell-and-node-scripts">Calling Shell and Node Scripts</h3><p>At times, you may have to write scripts far more complex than ones that can be achieved in 2–3 commands. When this situation arises, one solution is to write bash or JS scripts (or scripts in any scripting language you like) and call them from NPM scripts.</p><p>Let’s quickly write a bash script that says hello to you. Create a file called <code>hello.sh</code> in your root directory and paste this code in it:</p><pre><code class="language-bash">#!/usr/bin/env bash
# filename: hello.sh
echo "What's your name?"
read name
echo "Hello there, $name!"</code></pre><p>It’s a simple script that echoes your name back to you. Now modify the <code>package.json</code> file so that the <code>scripts</code> object has this line of code:</p><pre><code class="language-json">"bash-hello": "bash hello.sh"</code></pre><p>Now, when you run <code>npm run bash-hello</code>, it asks you for your name and then says hello to you! Brilliant.</p><p>You can do the same thing with JS scripts run using node. An advantage of this approach is that this script will be platform independent since it uses node to run. Here’s a slightly more complex JS script to add two integers received as command line arguments (put this in a file named add.js):</p><pre><code class="language-js">// add.js
// adds two integers received as command line arguments
function add(a, b) {
return parseInt(a) + parseInt(b);
}
if(!process.argv[2] || !process.argv[3]) {
console.log('Insufficient number of arguments! Give two numbers please!');
} else {
console.log('The sum of', process.argv[2], 'and', process.argv[3], 'is', add(process.argv[2], process.argv[3]));
}</code></pre><blockquote>The process.argv object contains the command line arguments given to the script. The first two elements, <code><em>process.argv[0]</em></code> and <code><em>process.argv[1]</em></code>, are reserved by node. Thus <code><em>process.argv[2]</em></code> and <code><em>process.argv[3]</em></code> let you access the command line arguments.</blockquote><p>Now add this line to the <code>scripts</code> object of the <code>package.json</code> file:</p><pre><code class="language-json">"js-add": "node add.js"</code></pre><p>Finally, run the script as an npm script by giving it two numbers as command line arguments:</p><pre><code>npm run js-add 2 3</code></pre><p>And viola! The output is</p><pre><code>The sum of 2 and 3 is 5</code></pre><p>Brilliant! Now we’re capable of writing much more powerful scripts and leveraging the power of other scripting languages.</p><h3 id="pre-and-post-hooks">Pre and Post Hooks</h3><p>Remember how we talked about a special npm script called <code>prepublish</code> that runs before you publish your package? Such a functionality can be achieved with custom scripts too. We’ve discussed one way to do this in the previous section. We can chain commands using the <code>&amp;&amp;</code>operator, so if you wanted to run script-1 before script-2, you would write:</p><pre><code class="language-json">"script-2": "npm run script-1 &amp;&amp; echo 'I am script-2'"</code></pre><p>However, this makes our scripts a little dirty. This is because the core functionality of the script is reflected only in the second part of the command (after the <code>&amp;&amp;</code> ). One way to write clean scripts is to use pre and post hooks.</p><p>Pre and post hooks are exactly what they sound like — they let you execute scripts before and after you call a particular script. All you have to do is define new scripts with the same name as your main script. Yet these are prefixed with “pre” or “post” depending on whether the script is executed before the main script or after it.</p><p>Let’s look at our <code>say-hello</code> script again. Say we want to execute the command <code>echo 'I run before say-hello'</code> before <code>say-hello</code> and <code>echo 'I run after say-hello'</code> after say-hello. This is what your scripts object would look like:</p><pre><code class="language-json">"scripts": {
"say-hello": "echo 'Hello World'",
"presay-hello": "echo 'I run before say-hello'",
"postsay-hello": "echo 'I run after say-hello'"
}</code></pre><p>The “pre” and “post” before the script names tell npm to execute these before and after the script called <code>say-hello</code> respectively.</p><p>Now, when you run <code>npm run say-hello</code>, the output of all three scripts shows up in order! How cool is that?</p><p>Since all three scripts output to the console and the NPM logs clutter the output, I prefer using the <code>-silent</code> flag while running these. So your command would look like this:</p><pre><code>npm run --silent say-hello</code></pre><p>And here’s the output:</p><pre><code>I run before say-hello
Hello World
I run after say-hello</code></pre><p>There you have it!</p><p>Let’s apply this knowledge to our build script example. Modify your <code>package.json</code> file so that it looks like this:</p><pre><code class="language-json">"scripts": {
...
"clean": "rm -r dist &amp;&amp; mkdir dist",
"prebuild": "npm run clean"
"build": "webpack"
}</code></pre><p>Now our scripts look much cleaner. When you run <code>npm run build</code>, <code>prebuild</code>is called because of the “pre” hook, which calls <code>clean</code>, which cleans up our dist directory for us. Sweet!</p><h3 id="making-our-scripts-cross-platform">Making Our Scripts Cross-Platform</h3><p>There is one drawback of writing terminal/shell commands in our scripts. This is the fact that shell commands make our scripts platform dependently. This is perhaps what draws our attention to tools like Gulp and Grunt. If your script is written for Unix systems, chances are, it won’t work on Windows, and vice versa.</p><p>The first time I used NPM scripts, which called other bash/batch scripts, I thought of writing two scripts per task. One for Unix and one for the Windows command line. This approach may work in use cases where the scripts aren’t that complex and there aren’t many scripts. However, it quickly becomes clear that they are not a good solution to the problem. Some of the reasons behind this are:</p><ul><li>You have another thing to keep track of that distracts you from your primary task of working on the application. Instead, you end up working in the development environment.</li><li>You’re writing redundant code — the scripts you write are very similar and accomplish the same task. You’re essentially rewriting code. This violates one of the fundamental principles of coding — DRY: Don’t Repeat Yourself.</li></ul><p>So how do we get around this? There are three approaches that you may use:</p><ol><li><strong>Use commands that run cross-platform:</strong> Many useful commands are common to Unix and Windows. If your scripts are simple, consider using those.</li><li><strong>Use node packages:</strong> You can use node packages like <a href="https://www.npmjs.com/package/rimraf" rel="noopener">rimraf</a> or <a href="https://www.npmjs.com/package/cross-env" rel="noopener">cross-env</a> instead of shell commands. And obviously, you can use these packages in JS files if your script is large and complex.</li><li><strong>Use ShellJS:</strong> <a href="https://www.npmjs.com/package/shelljs" rel="noopener">ShellJS</a> is an npm package that runs Unix commands via Node. So this gives you the power to run Unix commands on all platforms, including Windows.</li></ol><blockquote>The above approaches were taken from <a href="https://medium.freecodecamp.org/why-i-left-gulp-and-grunt-for-npm-scripts-3d6853dd22b8" rel="noopener">this brilliant article</a> by <a href="/news/introduction-to-npm-scripts-1dbb2ae01633/undefined" rel="noopener">Cory House</a> about why he left Grunt and Gulp for NPM scripts. The article details many things not covered in this series and concludes with a list of excellent resources. I would definitely recommend that you read it to further your understanding of NPM scripts.</blockquote><h3 id="a-few-use-cases-for-npm-scripts">A Few Use Cases for NPM Scripts</h3><p>Finally, there is a lot that you can do with NPM scripts. Some use cases are:</p><ul><li>Minification/Uglification of CSS/JavaScript</li><li>Automating the build process</li><li>Linting your code</li><li>Compressing images</li><li>Automatically injecting changes with BrowserSync</li></ul><p>And a lot more. To learn about how to automate the above-mentioned tasks using NPM scripts, check out <a href="https://css-tricks.com/why-npm-scripts/" rel="noopener">this brilliant article</a> on the topic.</p><h3 id="bonus-commander-for-creating-cli-applications-using-nodejs">Bonus: Commander for Creating CLI Applications Using NodeJS</h3><p>While we’re discussing NPM scripts and the CLI, I’d like to quickly tell you about a really cool package called commander. Commander allows you to create your own CLI applications. This isn’t really related to NPM scripts, but it’s a cool piece of technology to know. Check out the <a href="https://www.npmjs.com/package/commander" rel="noopener">commander docs here</a> or try one of these tutorials:</p><ul><li><a href="https://scotch.io/tutorials/build-an-interactive-command-line-application-with-nodejs" rel="noopener">Build An Interactive Command-Line Application with Node.js — Scotch.io</a></li><li><a href="https://medium.freecodecamp.org/writing-command-line-applications-in-nodejs-2cf8327eee2" rel="noopener">Writing Command Line Applications in NodeJS — freeCodeCamp</a></li></ul><h3 id="concluding-words">Concluding Words</h3><p>That is all for this article on using NPM scripts. I hope you’ve gained some insight on how you can integrate these into your own projects. This article is by no means an in-depth tutorial on NPM scripts. Hence I’d recommend you learn further both from other resources and from actually using NPM scripts in your own projects.</p><p>Also, do connect with me on <a href="https://github.com/ajmalsiddiqui/" rel="noopener">GitHub</a> and <a href="https://www.linkedin.com/in/ajmal-siddiqui/" rel="noopener">LinkedIn</a>.</p><p><em>Happy Coding! :)</em></p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
