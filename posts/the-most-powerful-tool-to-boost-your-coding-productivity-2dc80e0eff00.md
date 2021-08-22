---
card: "https://cdn-media-1.freecodecamp.org/images/1*UwAkIPzykbLNqOffgyvegw.gif"
tags: [JavaScript]
description: by Sam Williams
author: "Milad E. Fahmy"
title: "VS Code snippets: the most powerful tool to boost your coding productivity"
created: "2021-08-15T19:40:12+02:00"
modified: "2021-08-15T19:40:12+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-vscode tag-software-development tag-productivity tag-tech ">
<header class="post-full-header">
<h1 class="post-full-title">VS Code snippets: the most powerful tool to boost your coding productivity</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*UwAkIPzykbLNqOffgyvegw.gif 300w,
https://cdn-media-1.freecodecamp.org/images/1*UwAkIPzykbLNqOffgyvegw.gif 600w,
https://cdn-media-1.freecodecamp.org/images/1*UwAkIPzykbLNqOffgyvegw.gif 1000w,
https://cdn-media-1.freecodecamp.org/images/1*UwAkIPzykbLNqOffgyvegw.gif 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*UwAkIPzykbLNqOffgyvegw.gif" alt="VS Code snippets: the most powerful tool to boost your coding productivity">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Sam Williams</p>
<h1 id="vs-code-snippets-the-most-powerful-tool-to-boost-your-coding-productivity">VS Code snippets: the most powerful tool to boost your coding productivity</h1>
<h4 id="write-more-code-with-fewer-keystrokes">Write more code with fewer keystrokes</h4>
<figcaption>Photo by <a href="https://unsplash.com/@dlanor_s?utm_source=medium&amp;utm_medium=referral" rel="noopener" target="_blank" title="">Dlanor S</a> on <a href="https://unsplash.com?utm_source=medium&amp;utm_medium=referral" rel="noopener" target="_blank" title="">Unsplash</a></figcaption>
</figure>
<p>Everyone wants to be able to produce more code in fewer keystrokes. Arrow functions in JavaScript have become incredibly popular recently — and they only save you 6 characters!</p><pre><code>(function(){console.log('a')})() // 32 charachters(()=&gt;{console.log('a')})() // 26 charachters</code></pre>
<p>But there is a better way to save typing — and this article will show you the tool to do it.</p>
<h3 id="code-snippets">Code Snippets</h3>
<p>For years, people have used code snippets to save time — whether they are common functions, file structures or even templates for whole systems. This is not a new idea.</p>
<p>The problem with a lot of existing systems is that these snippets were often stored in text files or other file systems and needed to be manually copied and pasted into wherever they were needed.</p>
<p>This was great for large snippets of code. But one-liners were often quicker to type than to search for the file, copy it and paste it in.</p>
<p>The next step was tools such as TextExpander or AutoHotKeys, where special key sequences could be set up to paste code snippets into wherever you were typing. These are great and can save you loads of time… but we can take it one step further.</p>
<h3 id="vs-code-snippets">VS Code Snippets</h3>
<p>VS Code has a system that is more powerful than even TextExpander or AutoHotKeys. Its inbuilt code snippets can be configured to do much more than just pasting the code.</p>
<p>Before we talk about the fancy features, we’ll learn how to create a snippet.</p>
<p>In VS Code, press ctrl+shift+P to open the command palette and search for snippet. Selecting ‘Configure User Snippets’ presents you with a list of coding languages that you can create a snippet for. We’re going to go with JavaScript.</p>
<p>This opens the snippet editor. There is a comment showing you how to create a basic snippet, but we’re going to create our own.</p>
<p>This snippet is one that is <a href="https://medium.freecodecamp.org/my-favourite-line-of-code-53627668aab4" rel="noopener">my favourite line of code</a>. It’s a nice pattern for promise handling.</p><pre><code>const handle = prom =&gt; prom.then(res =&gt; [null, res]).catch(err =&gt; [err, null]);</code></pre>
<p>To create our snippet, we need to create a new key in the object. This key points to an object with a <code>prefix</code>, <code>body</code> and <code>description</code> .</p><pre><code>"insert handle function": {    "prefix": "",    "body": [],    "description": ""}</code></pre>
<p>The prefix is the text that we want to enter to trigger this snippet. You need to make sure that this is unique. Calling it <code>handle</code> would trigger the snippet every time you call the function so we can go with something like <code>promHandle</code> .</p>
<p>The body is an array of the lines in the snippet. If you have multiple lines of code then you’ll have multiple strings in the body array. The description is what will be shown when you see the suggestion in VS Code.</p>
<p>When all of this is completed you get something like this:</p><pre><code>"insert handlefunction": {    "prefix": "promHandle",    "body": [        "const handle = prom =&gt; prom.then(res =&gt; [null, res]).catch(err =&gt; [err, null]);"    ],    "description": "inserting a 'handle' function"}</code></pre>
<p>With your snippet file saved, when you start typing <code>promhandle</code> you get a new suggestion. Keying down to that shows the description of the snippet as well as the first line of the code.</p>
<p>Now you can save yourself hundreds of characters by creating your own snippets. But there are some even more powerful features!</p>
<h4 id="tab-insert-points">Tab Insert Points</h4>
<p>When you paste your snippets, there are usually bits of info that you need to add in. Whether it’s the naming a function or choosing the variables, you can set points in your code where you need to enter data. When you past these snippets you can tab between these insertion points.</p>
<p>To add an insert point, you just need to add <code>$1</code> for the first point, <code>$2</code> for the second and so on. This is really useful for functions where they expect an object.</p><pre><code>"sendMessage": {    "prefix": "sendMessage",    "body": [        "await botHelper.sendToUser({message$1, userID});"    ],    "description": "await sending a message using bot helper"},</code></pre>
<p>You can have multiple tab points spread throughout the code, meaning you can quickly and easily populate your snippet without having to click or arrow-key to each point.</p>
<h4 id="language-specific-snippets">Language-specific snippets</h4>
<p>When we first opened the snippet editor, we were presented with a list of languages. We chose JavaScript, but you could have chosen any of the other 44 languages. The great thing about VS Code snippets is that they can be locked to a specific file type.</p>
<p>If you are writing a HTML file, you won’t get all of your JavaScript or Python snippets. This also means you can have the same prefix produce different snippets based on the file type you’re currently working in! But don’t worry, you can still add global snippets if you want to be able to use them in any file type.</p>
<h4 id="locations-specific-snippets">Locations-specific snippets</h4>
<p>In a similar way to language specific snippets, you can also create folder specific snippets. This can be great when the same named function does a different thing in two different projects.</p>
<p>Just select <code>New Snippet file for '...'</code> when choosing your language.</p>
<h3 id="creating-more-snippets">Creating more snippets</h3>
<p>Now you know the powerful ways that VS Code snippets can improve your productivity, you probably want to make loads. Unfortunately, they can be frustrating to create. Luckily there are two solutions:</p>
<h4 id="snippet-generator">Snippet Generator</h4>
<p><a href="https://snippet-generator.app/" rel="noopener">Snippet Generator</a> is a site that lets you paste in some code and easily convert it into snippet format.</p>
<p>It’s really easy to use and lets you quickly create snippets that you can just copy and paste straight into your snippet files. It’ll work with any language and is completely free.</p>
<h4 id="snippet-extensions">Snippet Extensions</h4>
<p>If you use a framework, such as React or Angular, there are lots of snippets that you are going to want to create. Fortunately this is an issue that other people have had before so they have created libraries of common snippets for each framework.</p>
<p>Searching for <code>snippets</code> in the VS Code extension marketplace produces hundreds of results that you can install. Everything from React, Angular and Vue to ES6 JS, C# and PHP. These often have a full range of snippets to dramatically cut down you time spent typing.</p>
<p>The one disadvantage of these extensions is that you’ll have to learn what the prefixes (triggers) are, but you’ll quickly memorise the ones you use most.</p>
<p>Thanks for reading this post on increasing your coding productivity with VS Code Snippets. If you’ve learnt something then hit that clap ?button, and follow me for more tips, tricks and tutorials!</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
