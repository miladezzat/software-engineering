---
card: "https://cdn-media-1.freecodecamp.org/images/1*Y82L-83UqkmhWcROyY9wHA.png"
tags: [Python]
description: "A few months ago, I started a side project to learn Python an"
author: "Milad E. Fahmy"
title: "My open source Instagram bot got me 2,500 real followers for $5 in server costs"
created: "2021-08-16T15:42:43+02:00"
modified: "2021-08-16T15:42:43+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-python tag-instagram tag-javascript tag-social-media tag-tech ">
<header class="post-full-header">
<h1 class="post-full-title">My open source Instagram bot got me 2,500 real followers for $5 in server costs</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*Y82L-83UqkmhWcROyY9wHA.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*Y82L-83UqkmhWcROyY9wHA.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*Y82L-83UqkmhWcROyY9wHA.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*Y82L-83UqkmhWcROyY9wHA.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*Y82L-83UqkmhWcROyY9wHA.png" alt="My open source Instagram bot got me 2,500 real followers for $5 in server costs">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
Predicted  |  Actual
----------------------
762     |   766
775     |   767
788     |   773
801     |   805
814     |   827
827     |   836
840     |   856
853     |   879
866     |   874
<figcaption>Me in Iceland</figcaption></figure><h4 id="moving-from-digitalocean-to-a-35-raspberrypi-3">Moving from DigitalOcean to a 35$ RaspberryPi 3</h4><p>Since I wanted to be able to keep this experiment running for some more time, I thought about a way to pay once, then keep the service running basically forever.</p><p>A RaspberryPi3<strong> </strong>seemed like the perfect fit for it. It was small, powerful enough and cheap enough.</p><p>For ~35$ you can get a small unix computer upon which, with some tinkering, you can run Google Chrome.</p><p>With this guide: <a href="https://eltechs.com/run-google-chrome-on-raspberry-pi/" rel="noopener">How to run Google Chrome on RaspberryPi</a> and<strong> </strong>some time, I was able to install <a href="https://github.com/timgrossmann/InstaPy" rel="noopener">InstaPy</a> on my RaspberryPi and get it up and running.</p><p>This has more than just the advantage of cheaper service. When checking for bots, most services have a <strong>list of IP’s</strong> of data centers. <a href="https://www.digitalocean.com" rel="noopener">DigitalOcean</a> and other Infrastructure as a Service providers have dedicated IP’s which can be traced back to every datacenter.</p><p>A small computer like a the RaspberryPi runs in your home network, and has the same IP address as your computer or smartphone.</p><h4 id="the-infamous-robots-txt">The infamous robots.txt</h4><p>At the moment of wrapping this whole article up, I thought about not publishing it, because “automating” a site against it’s robot.txt — the document that tells bots what parts of the website the website owners would prefer they not scan.</p><p>For example, Facebook’s <em>robot.txt</em> starts with the following lines:</p><pre><code class="language-py"># Notice: Crawling Facebook is prohibited unless you have express written permission. See: http://www.facebook.com/apps/site_scraping_tos_terms.php</code></pre><p>A whole bunch of sites have them:</p><ul><li><a href="https://www.google.de/robots.txt" rel="noopener">Google</a></li><li><a href="https://www.amazon.de/robots.txt" rel="noopener">Amazon</a></li><li>Even a local branch office of the <a href="https://www.vbhnr.de/robots.txt" rel="noopener">Volksbank</a></li></ul><p>Interestingly, <a href="https://www.instagram.com/robots.txt/" rel="noopener">Instagram doesn’t have one</a> at all.</p><p>This is may contribute to my observation that there are a <em>lot</em> of bots on Instagram. Instagram itself doesn’t mind so much, since more bots mean more activity in the whole system.</p><p><strong>Edit: </strong>Some pointed out, that Instagram in fact <strong>does </strong>have a robots.txt. You can <a href="https://www.instagram.com/robots.txt" rel="noopener">check it out here</a>.</p><h3 id="conclusion">Conclusion</h3><p>As of writing this, I have ~2,800 followers. I plan to keep running my script until I either get banned from Instagram or rise to the highest heights.</p><p>No, seriously. I’m really interested seeing how far this can go.</p><p>Of course I’ll get back to you if there are some great breakthroughs or findings.</p><p>Up to now, I’ve only spent only $5 on renting a server. With the $50 coupon from GitHub’s “Student Backpack” I could let this run for another 5 months without investing a penny more. With the $35 RapsberryPi 3 probably forever.</p><p>If you’re into RaspberryPi’s, you could also just get one of the Model3’s and install all the necessary tools to let it run there for a one time cost of ~$35. That is what I did in the fourth month. If you’re interested check out <a href="https://eltechs.com/run-google-chrome-on-raspberry-pi/" rel="noopener">How to run Google Chrome on RaspberryPi</a>.</p><p>Also, I spend around $16 for the shipping of a giveaway I did when reaching 2,000 Followers.</p><p>So, without all the extra stuff, it would be only $5.<strong> </strong>If we’d include all the costs (including the ones I didn’t pay) I would’ve payed ~$100 to run it essentially forever.</p><blockquote>Note: If you want to get started with automation with python, definitely check out <a href="https://automatetheboringstuff.com" rel="noopener">“Automate the Boring Stuff”</a>!</blockquote><h3 id="who-can-use-it">Who can use it?</h3><p>Everyone. I’m serious. Even if you don’t want to bother with getting it up and running on a server, you can easily download the script and run it manually.</p><p>There are a lot of professional services that do exactly the same stuff that my script does. The only real difference is that they cost quite a lot of money (like FollowLiker for $100). Mine’s free.</p><h4 id="we-now-have-a-dedicated-repository-to-get-your-started-in-less-than-10-minutes-">We now have a dedicated repository to <a href="https://github.com/InstaPy/instapy-quickstart" rel="noopener">get your started in less than 10 minutes</a>!</h4><p>If you’re curious, check out the <a href="https://github.com/timgrossmann/InstaPy" rel="noopener">documentation on GitHub</a>.</p><p>And if you invest some more time, you can checkout my step-by-step guide on <a href="https://medium.com/@hoppy/how-to-test-or-scrape-javascript-rendered-websites-with-python-selenium-a-beginner-step-by-c137892216aa#.orbi45g0z" rel="noopener">how to setup a server for selenium automation</a>.</p><p>If you like what I did, consider following me on</p><p><a href="https://github.com/timgrossmann" rel="noopener">GitHub</a>, <a href="https://www.instagram.com/grossertim/" rel="noopener">Instagram</a>, <a href="https://www.youtube.com/channel/UC9_Bk9247GgJ3k9O7yxctFg" rel="noopener">YouTube</a> and <a href="https://twitter.com/@timigrossmann" rel="noopener">Twitter</a>. <a href="https://github.com/timgrossmann" rel="noopener">Be sure to star it on GitHub</a> :P</p><p>Thank you for reading. I’m curious about what you think so hit me with some comments. <br>You can also get in touch me directly <a href="mailto:contact.timgrossmann@gmail.com" rel="noopener">through email</a>.</p><blockquote>I’m going to do a half a year internship <strong>in Singapore starting starting from March 2019</strong>. I’d like to meet as many of you as possible. If you live in Singapore, please reach out. Would love to have a chat over coffee or lunch.</blockquote>
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
