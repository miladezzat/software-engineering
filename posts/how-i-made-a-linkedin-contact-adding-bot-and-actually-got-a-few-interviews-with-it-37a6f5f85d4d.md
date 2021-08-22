---
card: "https://cdn-media-1.freecodecamp.org/images/0*TAOB-11BmEzHS-1b"
tags: [JavaScript]
description: by YK Sugi
author: "Milad E. Fahmy"
title: "How I made a LinkedIn contact adding bot - and actually got a few interviews with it"
created: "2021-08-15T19:43:29+02:00"
modified: "2021-08-15T19:43:29+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-bots tag-software-development tag-career-advice tag-tech ">
<header class="post-full-header">
<h1 class="post-full-title">How I made a LinkedIn contact adding bot - and actually got a few interviews with it</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/0*TAOB-11BmEzHS-1b 300w,
https://cdn-media-1.freecodecamp.org/images/0*TAOB-11BmEzHS-1b 600w,
https://cdn-media-1.freecodecamp.org/images/0*TAOB-11BmEzHS-1b 1000w,
https://cdn-media-1.freecodecamp.org/images/0*TAOB-11BmEzHS-1b 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/0*TAOB-11BmEzHS-1b" alt="How I made a LinkedIn contact adding bot - and actually got a few interviews with it">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by YK Sugi</p>
<h1 id="how-i-made-a-linkedin-contact-adding-bot-and-automatically-got-a-few-interviews-with-it">How I made a LinkedIn contact adding bot - and automatically got a few interviews with it</h1>
<p>On LinkedIn, there’s a section that’s titled, “People you may know.” It’s under the <strong>My Network</strong> tab.</p>
<p>This is the page that suggests people you might want to connect with.</p>
<p>You can click these <strong>Connect</strong> buttons to send connection requests to the people in this list.</p>
<p>A few years ago, I found this page, and I started randomly adding people there. I would just click on the connect button on every single person I found on this page.</p>
<p>I just figured it might be useful to have a lot of connections on LinkedIn to get the kinds of jobs I wanted to get, for example, software engineer internships.</p>
<p>But after a while, it became a little bit cumbersome to keep clicking on these connect buttons manually.</p>
<p>So, I decided to make a little bot to click these buttons for me.</p>
<p>This is an article about how I made this bot, what happened as a result, and what I learned from it.</p>
<h3 id="how-i-made-the-bot">How I made the bot</h3>
<h4 id="the-tools-i-used">The tools I used</h4>
<p>I made this simple bot to add random people on LinkedIn with <strong>JavaScript</strong> and <a href="https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/" rel="noopener"><strong>Greasemonkey</strong></a>.</p>
<p>Greasemonkey is a Firefox add-on that helps you manage custom JavaScript code.</p>
<p>With it, you can set things up so that a certain set of code runs automatically when you open a certain URL.</p>
<p>You can also store some data in Greasemonkey. I used this feature to keep track of the number of people I added with this bot. That way, I was able to keep track of this number consistently even when I closed the browser or refreshed the page.</p>
<h4 id="the-code-i-used">The code I used</h4>
<p>Unfortunately, I did not keep the code I used to create my bot after I used it.</p>
<p>So, in this article, I’ll do my best to recreate it as closely as possible.</p>
<p>Initially, to create this bit of code, I used Google Chrome. Later, I switched to Firefox to use Greasemonkey, which I mentioned earlier. I chose to use Chrome initially just because I was more used to it.</p>
<p>Now, let’s together go through how I would recreate this code today. In this article, just to keep it simple, I’m only going to show you the core functionality of this bot - adding people. So, I’m going to skip the part about using Greasemonkey to store data persistently here.</p>
<p>Please let me know in the comments if you’d like me to cover that part in a separate article.</p>
<h4 id="step-0-javascript-basics">Step 0: JavaScript basics</h4>
<p>In case you’re not too familiar with JavaScript, let’s quickly go over some JavaScript basics here.</p>
<p>We’re going to use Google Chrome here, but you can use any browser you’d like to use.</p>
<p>First, open any website, let’s say, Google.com.</p>
<p>Then, you’ll need to open the browser’s JavaScript console there.</p>
<p>On Google Chrome, you can do it in a few different ways.</p>
<p>The way I usually do it is the following:</p>
<ul>
<li>Right click anywhere on the page.</li>
<li>Then, click <strong>Inspect</strong> out of the menu that’s popped up.</li>
</ul>
<ul>
<li>When you click it, a window like the following should show up.</li>
</ul>
<ul>
<li>Then, click the <strong>Console</strong> tab there to show the JavaScript console.</li>
<li>Once you click the <strong>Console</strong> tab, you should see the JavaScript console.</li>
</ul>
<p>This is where you can type in any JavaScript code to test it. You can use the code you enter to interact with the page that’s open in your browser.</p>
<p>For example, try typing in the following code in the console and press Enter.</p><pre><code>selected = document.querySelector('body');</code></pre>
<p>This selects the <strong>body</strong> tag in the page that’s open on the browser. Then, it assigns it to a new variable called <strong>selected</strong>.</p>
<p>In Chrome and Firefox, there is a shorthand for:</p><pre><code>selected = document.querySelector('body');</code></pre>
<p>Instead, you can just write:</p><pre><code>selected = $('body');</code></pre>
<p><a href="https://stackoverflow.com/questions/22244823/what-is-the-dollar-sign-in-javascript-if-not-jquery" rel="noopener">This code is equivalent to the one above.</a></p>
<p>I’m going to use this shorthand notation with the dollar sign throughout this article to keep our code short and simple.</p>
<p>Also, don’t worry about it if you don’t know the basics of HTML and JavaScript yet. I’ll try my best to write this article so it’s easy to understand even for beginners.</p>
<p>If you’re not interested in the code I’m going to show you, you can also just skip to the sections about what happened and what I learned from this experience at the end.</p>
<p>Now, let’s walk through our bot’s code, step by step.</p>
<h4 id="step-1-find-the-target-element">Step 1: Find the target element</h4>
<p>First, you’ll need to write the bit of code that finds the buttons that you want to click.</p>
<p>First, log in to LinkedIn. Then, go to the My Network tab. It’s currently at <a href="https://www.linkedin.com/mynetwork/" rel="noopener">https://www.linkedin.com/mynetwork/</a> (July, 2018).</p>
<p>You should be able to find the <strong>People you may know</strong> section there.</p>
<p>Then, on Chrome, right click on the “connect” button on one of the recommended people there. Then, click <strong>Inspect</strong>.</p>
<p>Once you do so, the element that you just clicked on will be highlighted in the developer window.</p>
<p>This is the HTML code that’s highlighted in blue here:</p><pre><code>&lt;span aria-hidden=”true”&gt;Connect&lt;/span&gt;</code></pre>
<p>This is a <strong>span</strong> tab that shows the text: <strong>Connect</strong>. What we really want to click on is not this one, but its parent element, which is a button.</p>
<p>You can find it right above the span element that we selected.</p>
<p>Let’s now examine this button element:</p><pre><code>&lt;button data-control-name=”invite” class=”button-secondary-small” data-ember-action=”” data-ember-action-1596=”1596" data-is-animating-click=”true”&gt; &lt;span aria-hidden=”true”&gt;Connect&lt;/span&gt; &lt;span class=”visually-hidden”&gt; Invite Azul Pinochet Barros to connect &lt;/span&gt;&lt;/button&gt;</code></pre>
<p>There’s a bunch of stuff here, but here’s the important part:</p><pre><code>&lt;button data-control-name=”invite” ...&gt; &lt;span aria-hidden=”true”&gt;Connect&lt;/span&gt; ...&lt;/button&gt;</code></pre>
<p>Basically, this is a button element whose attribute, <strong>data-control-name</strong>, is “invite”.</p>
<p>In our script, all we need to do is select elements like this and click them.</p>
<p>You can select these elements with this piece of code:</p><pre><code>selected = $(“button[data-control-name=invite]”);</code></pre>
<p>This reads as, select all the button elements whose data-control-name is “invite”.</p>
<blockquote><em>NOTE: It looks like LinkedIn’s website uses jQuery. So, the notation above is actually a jQuery selector, <a href="https://stackoverflow.com/questions/22244823/what-is-the-dollar-sign-in-javascript-if-not-jquery" rel="noopener">not a helper function defined by Chrome</a>. Confusingly, their behaviours are slightly different ?</em></blockquote>
<p>Anyway, once you run this code in your Chrome console, you should be able to see that the correct elements have been selected.</p>
<figcaption>This is how you can make sure that the correct elements have been selected.</figcaption>
</figure>
<p>Now, with this piece of code - <code>selected = $("button[data-control-name=invite]");</code> - your browser finds multiple button elements and puts them in an array. To pick the first one, you can just select the first element in this array like so:</p><pre><code>toClick = $("button[data-control-name=invite]")[0];</code></pre>
<p>Then, you can click it with this:</p><pre><code>toClick.click();</code></pre>
<p>If it goes through, you should see a confirmation window popping up.</p>
<figcaption>A confirmation window that shows up when you click one of the <strong><em>connect</em></strong> buttons</figcaption>
</figure>
<h4 id="step-2-loop-through-multiple-target-elements">Step 2: Loop through multiple target elements</h4>
<p>Now, the next step is to loop through multiple target elements to click so we can add multiple people.</p>
<p>After some experimentation, I realized that there’s a simpler way to select multiple buttons and loop through them than the one I showed earlier.</p>
<p>Here’s how I would do it.</p>
<p>First, use Inspect Element to analyze the structure of this page a bit more. Then, you should be able to see that the <strong>people you may know</strong><em> </em>is just an unordered list.</p>
<p>You should be able to find code that looks like this:</p>
<p>The parent element is a <code>ul</code> (unordered list) element. Its children are <code>li</code> (list item) elements.</p>
<p>By selecting these <code>li</code> elements instead of selecting the buttons directly, it actually becomes easier to go through multiple people.</p>
<p>We don’t need to add <code>[0]</code> at the end of this statement because the querySelector() function only returns one element.</p>
<p>Then, out of <code>firstLi</code>, you can select the button that we need to click like this:</p><pre><code>buttonToClick = firstLi.querySelector("button[data-control-name=invite]");</code></pre>
<p>This code should work, but it has several issues.</p>
<ol>
<li>We add people <em>really</em> fast with this, so it’s going to be hard to know what’s going on when you run this code.</li>
<li>We are not keeping track of how many people we’ve added.</li>
<li>We are assuming that <code>buttonToClick</code> is always the correct button to click. Sometimes this button has the text “Invite” instead of “Connect”. We don’t want to click on too many of those “Invite” buttons.</li>
</ol>
<h4 id="step-3-refine-our-code">Step 3: Refine our code</h4>
<p>I’ve fixed all of the issues I mentioned above and put together a relatively simple piece of code below.</p>
<p>If you examine this code carefully, you should be able to notice the couple of changes I’ve made:</p>
<ol>
<li>I’ve put our code into an <em>async </em>function called addPeople(). In this function, every time we add someone, we pause for 1 second with the sleep() function. More about this pattern <a href="https://stackoverflow.com/questions/951021/what-is-the-javascript-version-of-sleep" rel="noopener">here</a>.</li>
<li>I added a <code>count</code> variable to keep track of how many people we’ve added.</li>
<li>I added this if statement: <code>if (buttonToClick.innerText.includes("Connect"){...}</code>. This way, we can make sure that the button we’re clicking contains the word “Connect” inside it.</li>
</ol>
<p>With these changes, when I run this code, it looks like this:</p>
<h4 id="step-4-make-further-improvements-">Step 4: Make further improvements!</h4>
<p>On top of what I showed above, I had a few more functionalities when I actually used my bot to add a bunch of people on LinkedIn.</p>
<p>First of all, I used Greasemonkey, which I mentioned earlier, to keep track of the total number of people I’ve added.</p>
<p>Also, to avoid being detected as a bot by LinkedIn, I added a few things:</p>
<ol>
<li>I randomized the order in which I added people.</li>
<li>I randomized the amount of time I waited every time I added a new person.</li>
</ol>
<p>I’ll leave all of these as exercise problems for you to solve in case you’re interested in solving them ?</p>
<h3 id="what-happened">What happened</h3>
<p>With my script, I ended up adding 2000+ connections. Then, if I remember correctly, about 400 of them added me back.</p>
<p>As a result, I went from about 300 connections to 700+ connections within a week or so!</p>
<p>Then, after a while, I got banned by LinkedIn from adding any more people. I didn’t know that I could get banned! I was scared for a bit, but the ban lifted after 2 months or so.</p>
<p>More importantly, I was able to land a few interviews from those 400+ new connections. One of the interviews was with this company called Palantir.</p>
<p>Here’s a screenshot of the message I received from them:</p>
<h3 id="what-i-learned-from-this-experience">What I learned from this experience</h3>
<p>I thought what I was doing was pretty silly at the time, but I ended up learning a lot from this experience.</p>
<h4 id="takeaway-1">Takeaway #1</h4>
<p>First of all, through this experience, I realized that LinkedIn actually works for getting jobs. I was able to get a few job interviews with my bot, after all.</p>
<p>Then, after a while, I also realized that adding thousands of random people was not the most efficient way to use LinkedIn. With that kind of approach, you end up adding a lot of people you don’t need to add.</p>
<p>So, after that experience, I changed my approach to a more focused one.</p>
<p>With my new approach, I would only add recruiters of the companies I wanted to work at. Then, I would only send messages to the people who added me back.</p>
<p>It turned out to be a much more focused, effective strategy to use LinkedIn. With this new strategy, I was able to get a few more job interviews with multiple tech companies, including Yelp and Xamarin. This time, I didn’t have to add thousands of new connections to achieve this result ?</p>
<p>NOTE: I talk more about this strategy in <a href="https://medium.freecodecamp.org/here-are-4-best-ways-to-apply-for-software-engineer-jobs-and-exactly-how-to-use-them-a644a88b2241" rel="noopener">this article</a>, just in case you’re curious about it.</p>
<h4 id="takeaway-2">Takeaway #2</h4>
<p>Having fun is the best way to hone your programming skills!</p>
<p>Through this particular project, I was able to hone my JavaScript skills. What I learned included:</p>
<ul>
<li>How to set a timed interval between function executions</li>
<li>How to select certain HTML elements with JavaScript</li>
<li>How to store data locally with Greasemonkey</li>
</ul>
<p>I learned these things through this project, and it didn’t feel like studying at all because it was so much fun.</p>
<h4 id="takeaway-3">Takeaway #3</h4>
<p>From this experience, I’ve learned that it sometimes pays to do something weird. So, don’t be afraid of being a little bit mischievous and adventurous if you have any inclination to do so.</p>
<p>Even after this little experiment, I continued to do weird things for fun.</p>
<p>For example, when I was interning at Microsoft, I ran a little experiment where I “stole” a bunch of employee passwords. I did that by sending out a phishing email. It was supposed to be a huge give-away raffle with prizes like Xbox and Surface laptops. It was my hackathon project there.</p>
<p>I also started a <a href="https://www.youtube.com/csdojo" rel="noopener">programming-education YouTube channel</a>, and eventually decided to <a href="https://medium.freecodecamp.org/why-i-left-my-100-000-job-at-google-60b5cf4ebefe" rel="noopener">work on it full-time and quit my full-time software engineer job</a>.</p>
<p>Perhaps all of these things seemed a little bit weird to other people. But every time I went through each of these experiences, I learned something new, and I had tons of fun along the way. I would say the last one even made my career.</p>
<p>So again, don’t be afraid of trying something strange just for fun! You might learn something valuable along the way.</p>
<h4 id="okay-that-s-it-for-this-article-">Okay, that’s it for this article.</h4>
<p>This was supposed to be sort of a fun article, but I usually write about more serious stuff.</p>
<p>For example, I have articles about <a href="https://medium.freecodecamp.org/heres-the-resume-i-used-to-get-a-job-at-google-as-a-software-engineer-26516526f29a" rel="noopener">writing your software engineer resume</a>, <a href="https://medium.freecodecamp.org/here-are-4-best-ways-to-apply-for-software-engineer-jobs-and-exactly-how-to-use-them-a644a88b2241" rel="noopener">the best ways to apply for software engineer jobs</a>, and <a href="https://medium.freecodecamp.org/how-to-get-a-software-engineer-job-at-google-and-other-top-tech-companies-efa235a33a6d" rel="noopener">how to get a job at a top tech company</a>.</p>
<p>Feel free to check them out. They are all here on Medium.</p>
<p>Also, as always, if you have any questions about this or anything else, please feel free to let me know in a comment below or on <a href="https://www.instagram.com/ykdojo/" rel="noopener">Instagram</a> or <a href="https://twitter.com/ykdojo" rel="noopener">Twitter</a> (@ykdojo on both).</p>
<p>Thank you for reading this article!</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
