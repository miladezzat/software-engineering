---
card: "https://cdn-media-1.freecodecamp.org/images/1*JPG9MEIETXS4prNXFzxifw.png"
tags: [Mobile]
description: by Rob Welan
author: "Milad E. Fahmy"
title: "How I Built My First Multi-Platform Mobile App using JavaScript and XDK"
created: "2021-08-15T19:56:06+02:00"
modified: "2021-08-15T19:56:06+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-mobile tag-apps-tag tag-javascript tag-tech tag-self-improvement ">
<header class="post-full-header">
<h1 class="post-full-title">How I Built My First Multi-Platform Mobile App using JavaScript and XDK</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*JPG9MEIETXS4prNXFzxifw.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*JPG9MEIETXS4prNXFzxifw.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*JPG9MEIETXS4prNXFzxifw.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*JPG9MEIETXS4prNXFzxifw.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*JPG9MEIETXS4prNXFzxifw.png" alt="How I Built My First Multi-Platform Mobile App using JavaScript and XDK">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Rob Welan</p>
<h1 id="how-i-built-my-first-multi-platform-mobile-app-using-javascript-and-xdk">How I Built My First Multi-Platform Mobile App using JavaScript and XDK</h1>
<p>I have to admit up-front: I have a over a decade of experience developing applications.</p>
<p>I’ve written applications largely for enterprise businesses. This meant that I used commercial software programs and proprietary programming languages — mainly driven by the policy of the organization I was developing for, employed by, or both.</p>
<p>In the meantime, open source languages grew up. And, whilst I had a smattering of JavaScript and CSS and HTML skills, my skills within these areas wasn’t good enough to migrate directly to a job in web development. Which I have recently chosen as a career option because:</p>
<ul>
<li>someone hid my cheese, so re-skilling became necessary</li>
<li>there’s a lot of people who want web sites and stuff like that</li>
<li>there is this promise of multi-platform app development for smart devices</li>
</ul>
<p>So, I started re-skilling. I chose <a href="http://www.freecodecamp.com" rel="noopener">Free Code Camp</a>, or, it eventually chose me. I’m honestly not sure which. The “how” I jumped into Free Code Camp’s waters is not important to this story. It is important background information though.</p>
<p>The other important piece to this story is that promise of multi-platform app development.</p>
<p>I’ve tried for two years, or maybe more, to locate a decent tool that lived up to the promise of multi-platform app development. I’m sure if I stuck with some of the tools I’ve tried in the past that maybe something useful could have come of it.</p>
<p>But, here’s the rub: I’m in a huge hurry. I don’t have time to learn. I really need a development tool that actually works out of the box with minimal effort. I guess I’m used to commercial products in that regard.</p>
<p>Back to Free Code Camp. All I’m going to say is, I got to the Ziplines. And I finished those. I’m also a little attention-deficit. Once I’d completed the Ziplines, I realized that: “Far out, I can build web-based apps now”. I was now proficient in open source languages: markups and scripting languages like HTML, CSS and JavaScript. And I needed a break from school by this stage.</p>
<p>So, I looked around again for tools that might live up to the promise of multi-platform application development. And, after a bit of try-and-flick, I reacquainted myself with Intel XDK (yeah, I had this installed on my machine for about 6 months or so, sitting idle). In fairness, my scripting skills were somewhat lacking when I first installed it way-back-when (despite my comprehensive understanding of VBA, object oriented coding and relational database integration).</p>
<p>Intel XDK had also improved a lot, and before I built my first app with it, I upgraded to the (then) current version.</p>
<p>So, why did I choose Intel XDK over its competitors. Over the years I’ve tested and thrown away around about ten different tools. Here’s a summary of my experiences:</p>
<ul>
<li>One competing product did not enable the end-user (me) to edit my own app. I could start building one, but then there was no known way to edit it. This isn’t a problem one expects — ever. You know, after a break, like, I don’t know, shutting my computer down so I could go to sleep, and then coming back the next day to continue building my app — but no way to access my work on my machine? Guess how long that development tool lasted on my machine… Yes, I looked for support. The answers I found disappointed me even more than not being able to edit my own code. Grrr…</li>
<li>Documentation: I tried another tool where the documentation was 12 or so months old (according to the published date). In that time, Cordova had moved light years past where that stale documentation was left. And, like so many things covered in dust, the instructions on how to use this particular tool I’m thinking of really wasn’t that relevant or useful. In the bin it went.</li>
<li>Other server-based tools kind of make me nervous. What happens if the server goes down or the responsible organisation goes bankrupt? How do I get my damn code back? I don’t like that much risk. The world turns too fast. Things fall off all the time. I don’t need for my IP to be flung off the world due to a poor choice of application hosts on my part. And server-only-based solutions tend to cost a lot more than I can afford. And who really owns the IP when the code I write is hosted on somebody else’s machine?</li>
</ul>
<h3 id="more-about-intel-xdk">More About Intel XDK</h3>
<p>When I played around with this version of Intel XDK, I found out, pleasantly, that I could get my app to run. First go. And it’s not a simple app — it uses geolocation in order to look up some stuff. And other trixy things. I knew in advance that I’d need some plugins. Playing around with PhoneGap earlier in the piece got me introduced to Cordova (PhoneGap used to be free, now owned by Adobe, not so free). This was months ago. Looking at Intel XDK suggested that some stuff could be done by Intel’s proprietary code, and maybe some would need to be handled by third-party plugins (by Cordova for example).</p>
<p>It turns out, when I started, that some of Intel’s proprietary code was in the process of becoming deprecated (but this wasn’t clear to me, the end-user, at the time). The bit of code I chose (on.device.ready — not it’s full name — because I forget that already) was on the way out.</p>
<p>I love Intel XDK — because it works — but, like many tools these days, the documentation does not keep up with the functionality. And it’s not that the documentation is necessarily far behind. In Intel XDK’s case, the documentation is comprehensive — and accurate (yay), but, a little hard to find (aww).</p>
<p>So, yeah, I’m trying to use this call, and my app is working-ish. And I can’t remember — did I upgrade to the next release and my app broke, or did my code simply not work perfectly and I also upgraded to the next release (yeah, Intel pump out an upgrade to Intel XDK about one to two times a month — try keeping up with that schedule as a sole trader).</p>
<p>In truth, I nearly gave up on Intel XDK. But, I thought: “Bugger this” (I’m Australian). And: “I’ve nearly finished this app. I’ll tough it out.” And so, I found some information indicating that the ‘on.device.ready’ call was not yet dead, but, it’s family of friends were dead and buried (deprecated, in capital blue letters). No point crying over loved ones. It’s time to change gears and aggressively move on.</p>
<p>So, I quickly learned about Cordova plugins, and how to use them in Intel XDK. Not that hard it turns out. In my first App, I’m using fairly well-used and well-known plugins.</p>
<p>And yeah, the good news is that once I’d figured out how to plugin Cordova plugins, I haven’t looked back.</p>
<p>So, here’s some short-cuts to building an app with Intel XDK. My pearls of wisdom to help you, the reader, to avoid the darker paths I took, and stay well in the light:</p>
<ul>
<li>I don’t care what app you’re trying to develop, tell Intel XDK to build a Cordova version. Just in case you need to use a plugin. And, yes, you’ll probably need StatusBar. Because iOS.</li>
<li>You’ll need, at a minimum, HTML and CSS skills. Plus some JavaScript in order to use the plugins properly. Yes, you can use JQuery instead if that’s your thing. How much JavaScript or JQuery depends on the app you’re building. You’ll need to be able to build web sites in order to use something like Intel XDK. You don’t know how to build a web site yet? Here’s the solution: join up to <a href="http://www.freecodecamp.com" rel="noopener">Free Code Camp</a>, and learn as far as and including the Ziplines. Once you’ve done that, you’re ready to play with Intel XDK. Yes you are.</li>
<li>For your first app, tell Intel XDK to build using one of their templates. This will give you some ready-made code, which will help short cut the “wait, now what?” part.</li>
<li>index.html: this is the first user interface that your App’s eventual end-user (customer) is presented with. Your knowledge of web site development that you acquired up-to-and-including the Free Code Camp Ziplines will help you figure out what to do with this file.</li>
<li>GitHub: you will want to follow the instructions for each plugin you use. To find your plugin’s documentation, Google “github cordova [plugin]”, where “[plugin]” is the name of the plugin you’re searching for. For example, the search “github cordova statusbar” should take you to the statusbar plugin pretty easily. The cordova plugin documentation on github is excellent.</li>
<li>StackOverflow: ask your “dumb” questions here. Don’t forget to search for answers to your question first. The vast community of mentors on StackOverflow make a particular effort to point out that your question has been asked (and answered) already.</li>
<li><a href="https://software.intel.com/en-us/forums/app-framework" rel="noopener">Intel XDK product forum</a>: ask your “dumb” Intel XDK specific questions here. The guys at Intel are your friends (happily). And the other developers using Intel XDK are also happy to help if they can.</li>
<li>Intel XDK builds three packages when building for Windows devices. I’m still trying to understand why it builds three, but I only need to upload one to the Windows store. Check the Intel XDK forums for the answer. I asked. <a href="https://software.intel.com/en-us/xdk/docs/xdk-doc-quick-links" rel="noopener">It’s documented now</a>. Not the complete answer. Just the answer you will need in order to continue. It’s enough.</li>
</ul>
<h3 id="keep-it-simple-stupid">Keep It Simple Stupid</h3>
<p>OK, here’s the basic advice that your Mum and Dad should have told you before you left home:</p>
<ul>
<li>create the least amount of code possible.</li>
<li>this includes asset files. My first app had too many CSS files and too many JS files. Seriously. The “aww, snap” that I was having with “on.device.ready” gave me an opportunity to consolidate my IP into fewer files and to throw away bits that weren’t actually used anywhere. It’s a best practise thing.</li>
<li>Use other people’s code (not in the plagiarism sense) — use the ready-made templates that Intel XDK provides to short cut the learning curve. At least for your very first app.</li>
<li>Stuck on a “how to”? Ask Google and you’ll find the answer in StackOverflow. Modify the learning for your purposes, and then move on to the next problem. You’ll know for next time.</li>
<li>Read books. Ha ha ha. Like I have the time. Seriously though. Find the time.</li>
<li>I’m still reading about the Swift programming language… It’s not even related. But it’s about code at least.</li>
<li>Use other people’s assets. For my first App, I found a CSS animation library, and a neat font library. I made sure my App attributed these libraries in the “About” information page of my App. Per the license conditions. And because it’s the right thing to do.</li>
</ul>
<h3 id="using-intel-xdk-to-create-your-first-app">Using Intel XDK to Create Your First App</h3>
<p>Download and install Intel XDK.</p>
<p>In Intel XDK:</p>
<ol>
<li>Click “Start a New Project”.</li>
<li>Choose “Templates” and then “Layouts and User Interfaces”.</li>
<li>Choose Tab View App (or you can choose another template type if you like). Tick “Use App Designer” (this will install some ready-made code to build from and start with — yay).</li>
<li>Click Continue.</li>
<li>In the Project Window, click the Upgrade to Cordova button.</li>
<li>When the project is created, add the following Cordova plugin (back at the project menu):<br>Statusbar</li>
</ol>
<p>The plugins you choose will depend entirely on what you’re building. The plugins help you use the features of the devices your app will run on. It’s likely you’ll need at least one. Because iOS.</p>
<h3 id="building-your-app">Building Your App</h3>
<p>Apart from Apple’s over-engineered requirements hoops (which frigging certificate do I need again?) and the “Windows choice of three packages”, the build process in itself is simple. Go to the Build tab. Upload your code, build your package, download your package.</p>
<p>I don’t know about you. I’m poor. I can test my iOS package. I can’t test my Android or my Windows packages. One day I hope to be able to test on more than one platform. Sorry test guinea pigs (ie. all my customers on Google and Windows devices).</p>
<p>For you, the Developer: the emulator in Intel XDK should be thought of as a guide only. You’ll figure it out. March on. Take no prisoners. This is no time to be frightened by the fear of: “what if it doesn’t work.” Have some faith. Be damned for trying. Don’t be damned for failing.</p>
<p>For Android, you’ll want to build using the “Crosswalk for Android” option. Two words as to why: “flex box”. If you need to know more, check the documentation. Flex box has a way of sneaking into every project (in my limited experience).</p>
<h3 id="what-can-t-i-help-you-with">What can’t I help you with?</h3>
<ul>
<li>Apple’s way of doing things is heavily over-engineered. You have to create your own certificate using a convoluted method. Everyone gets it wrong. At least once. Persevere.</li>
<li>Apple’s review period is long. About 7 days (that’s not a misprint, it takes days!). It’s a nail-biting first experience. What if the app is rejected? Will I know what to do if it is rejected? Why is it taking so long? Does that review status mean that Apple is going to review it or that I’m supposed to? Aaaargh! Is it ready yet? What’s going on? Oh, and the sleepless nights. And the minute-by-minute checking of the email. That never comes.</li>
<li>Google takes a few hours. The same App will be reviewed and deployed within 24 hours. Maybe a little longer. Less than 48. That said, if you write a monster complicated app, maybe longer.</li>
<li>Windows takes a few hours. And then about a day to become available for download in the Windows store. But, you’ll have no customers. So it’s a moot point. Build for Windows Phones anyway. It’ll round out your resumé.</li>
</ul>
<h3 id="what-am-i-doing-now">What Am I Doing Now?</h3>
<p>I’m building another App.</p>
<p><em>This story originally appeared on <a href="http://creatureoftech.com/" rel="noopener">creatureoftech.com</a>.</em></p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
