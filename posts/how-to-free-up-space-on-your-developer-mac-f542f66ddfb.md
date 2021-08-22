---
card: "https://cdn-media-1.freecodecamp.org/images/1*iNNdLGh5TORjiWIHp5l0Ng.png"
tags: [Git]
description: I love cleaning software? PLZ! Remove duplicates, find old OS
author: "Milad E. Fahmy"
title: "How to free up space on your developer Mac"
created: "2021-08-15T19:37:59+02:00"
modified: "2021-08-15T19:37:59+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-git tag-javascript tag-tech tag-productivity tag-mac ">
<header class="post-full-header">
<h1 class="post-full-title">How to free up space on your developer Mac</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*iNNdLGh5TORjiWIHp5l0Ng.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*iNNdLGh5TORjiWIHp5l0Ng.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*iNNdLGh5TORjiWIHp5l0Ng.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*iNNdLGh5TORjiWIHp5l0Ng.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*iNNdLGh5TORjiWIHp5l0Ng.png" alt="How to free up space on your developer Mac">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<h4 id="clean-up-your-dev-environment-you-filthy-animal-">Clean up your dev environment you filthy animal!</h4>
<p>I<strong> </strong>love cleaning software? PLZ! Remove duplicates, find old OS cruft etc. But it never cleans a development machine as I can. </p>
<p>Sure, for general maintenance, nothing beats <a href="https://macpaw.com/cleanmymac" rel="noopener">CleanMyMac</a>. But once a year, developers should run through a few manual commands, because auto-cleaners won’t know how to take care of a developer machine.</p>
<p>Before we start, let’s look at how much “Free Space” you’re starting with:</p>
<p>Mine is reporting 132.2 GB before cleaning. Time to get started!</p>
<h3 id="mac-homebrew-users">Mac Homebrew Users</h3>
<p>This one usually shaves off hundreds of megs of data. Update, upgrade, and then clean up those files you’re not going to use.</p>
<p><strong>Update then remove old formulae and their folders:</strong></p><pre><code>brew update &amp;&amp; brew upgrade &amp;&amp; brew cleanup</code></pre>
<p>You might have used <code>brew prune</code> in the past, but that has been deprecated. Cleanup handles this for you!</p>
<h4 id="general-brew-maintenance">General Brew Maintenance</h4>
<p>Brew is a complicated system, and no one knows it better than the maintainers. So you can run <code>brew doctor</code> and get some additional chores you could take care of to have it run properly.</p>
<h3 id="git-users">Git Users</h3>
<p>Git is great, but it’s not hard to leave a bunch of merged branches laying around on your local machine! Those branches aren’t useful anymore, and sometimes make naming conflicts for future branches.</p>
<p><strong>You can remove all the merged branches from a single project with this command:</strong></p><pre><code>git branch --merged master | grep -v "\* master" | xargs -n 1 git branch -d</code></pre>
<p>WOW, what a mouthful for only one project! Let’s make it worse. ?</p>
<p><strong>This code will CD into all folders in the current working directory, and then run the command to clean merged branches for each!</strong></p><pre><code>for d in */; do cd $d; echo WORKING ON $d; git branch --merged master | grep -v "\* master" | xargs -n 1 git branch -d; cd ..; done</code></pre>
<h3 id="javascript-developers">JavaScript Developers</h3>
<h4 id="delete-old-node_modules-embedded-in-projects">Delete OLD `node_modules` embedded in projects</h4>
<p>The following command finds all <code>node_modules</code> folders older than 120 days and removes them. This does mean you will have to <code>npm i</code> or <code>yarn</code> again in those older projects.<em> This is usually a huge cleanup!</em></p>
<p><strong>Removes all <code>node_modules</code> folders older than 4 months:</strong></p><pre><code>find . -name "node_modules" -type d -mtime +120 | xargs rm -rf</code></pre>
<p>If you’re feeling quite aggressive, you can just clear out ALL <code>node_modules</code> folders and re-install as needed, by removing the <code>mtime</code> flag.</p>
<p><strong>Removes all <code>node_modules</code> folders:</strong></p><pre><code>find . -name "node_modules" -type d | xargs rm -rf</code></pre>
<h4 id="remove-old-versions-of-node">Remove old versions of Node</h4>
<p>Remove old versions of Node. This varies depending on your Node manager. I use ’n’ so it’s easy for me. Consult uninstall for your specific version manager.</p>
<blockquote><strong>Using <code>n</code>?</strong></blockquote>
<blockquote>List all versions of node + your installed ones with <code>n ls</code> and then remove any with <code>n rm &lt;versi</code>on&gt;.</blockquote>
<blockquote><strong>Using <code>nvm</code>?</strong></blockquote>
<blockquote>List your installed versions with <code>nvm ls</code> and then remove any with <code>nvm uninstall &lt;versi</code>on&gt;.</blockquote>
<blockquote><strong>Using <code>asdf</code>?</strong></blockquote>
<blockquote>List your installed versions with <code>asdf list nodejs</code> and then remove any with <code>asdf uninstall nodejs &lt;versi</code>on&gt;.</blockquote>
<h3 id="ruby-developers">Ruby Developers</h3>
<p>Clean up old versions of Gems with the <code>cleanup</code> command. If you’re worried, you can see the results first with “dryrun”.</p><pre><code>gem cleanup --dryrun</code></pre>
<p>Then when you are confident, you can remove the “dryrun” param and run it for real.</p><pre><code>gem cleanup</code></pre>
<h4 id="remove-old-versions-of-ruby">Remove old versions of Ruby</h4>
<p>This depends specifically on your Ruby version manager. We’ll do two popular versions to help you out.</p>
<blockquote><strong>Using <code>rbenv</code>?</strong></blockquote>
<blockquote>List your installed versions with <code>rbenv versions</code> and then remove any with <code>rbenv uninstall &lt;versi</code>on&gt;.</blockquote>
<blockquote><strong>Using <code>rvm</code>?</strong></blockquote>
<blockquote>List your installed versions with <code>rvm list</code> and then remove any with <code>rvm uninstall &lt;versi</code>on&gt;.</blockquote>
<h3 id="xcode-developers">Xcode Developers</h3>
<p>Xcode loves to cache things all over your machine, and some of these are hundreds of megs. Time to clean them up, and if you need to rebuild them again, no worries!</p>
<p><strong>Clean up CocoaPod caches:</strong></p><pre><code>rm -rf "${HOME}/Library/Caches/CocoaPods"</code></pre>
<p><strong>Delete old Xcode Simulators:</strong></p><pre><code>xcrun simctl delete unavailable</code></pre>
<p><strong>Clean up various archives, logs, and derived data folders:</strong></p><pre><code>rm -rf ~/Library/Developer/Xcode/Archives
rm -rf ~/Library/Developer/Xcode/DerivedData
rm -rf ~~/Library/Developer/Xcode/iOS Device Logs/</code></pre>
<p>Check out your connected device info in <code>~/Library/Developer/Xcode/iOS Device Logs/</code> and delete anything for old iOS devices you’ve connected.</p>
<h3 id="docker">Docker</h3>
<p>You can remove all volumes not used by at least one container. Because… why would you want those?!</p>
<p>This might be huge or it might remove nothing. Worth a run right!?</p>
<p><strong>Remove unused local volumes</strong></p><pre><code>docker volume prune</code></pre>
<h3 id="results-">RESULTS?!</h3>
<p>Don’t forget to empty your trash and check on how we did!</p>
<blockquote>30 GIGS! pulled off my machine! How about you?</blockquote>
<p>Your success is probably vastly different, but I’d love to know. Comment or <a href="https://twitter.com/GantLaborde?lang=en" rel="noopener">tweet at me</a> your results, and any other developer spots you recommend we clean! I’ll be happy to add your advice to the article.</p>
<hr>
<p><a href="undefined" rel="noopener">Gant Laborde</a> is Chief Technology Strategist at <a href="http://infinite.red" rel="noopener">Infinite Red</a>, published author, adjunct professor, worldwide public speaker, and a mad scientist in training. Clap/follow/<a href="https://twitter.com/GantLaborde" rel="noopener">tweet</a> or visit him <a href="http://gantlaborde.com/" rel="noopener">at a conference</a>.</p>
<p><a href="https://shift.infinite.red/5-things-that-suck-about-remote-work-506b98dd38f9" rel="noopener"><strong>5 Things that Suck about Remote Work</strong></a><br><a href="https://shift.infinite.red/5-things-that-suck-about-remote-work-506b98dd38f9" rel="noopener"><em>The Pitfalls of Remote Work + Proposed Solutions</em>shift.infinite.red</a><a href="https://shift.infinite.red/react-native-vs-native-ccac6f05346a" rel="noopener"><strong>React Native vs. Native</strong></a><br><a href="https://shift.infinite.red/react-native-vs-native-ccac6f05346a" rel="noopener"><em>Should I learn React Native or Native?</em>shift.infinite.red</a></p>
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
