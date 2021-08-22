---
card: "https://cdn-media-1.freecodecamp.org/images/0*Nsp3DqX0_RyNxggv"
tags: [JavaScript]
description: by John Standish
author: "Milad E. Fahmy"
title: "How to speed up Node re-builds by leveraging docker multi-stage builds"
created: "2021-08-15T19:38:12+02:00"
modified: "2021-08-15T19:38:12+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-docker tag-react tag-productivity tag-tech ">
<header class="post-full-header">
<h1 class="post-full-title">How to speed up Node re-builds by leveraging docker multi-stage builds</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/0*Nsp3DqX0_RyNxggv 300w,
https://cdn-media-1.freecodecamp.org/images/0*Nsp3DqX0_RyNxggv 600w,
https://cdn-media-1.freecodecamp.org/images/0*Nsp3DqX0_RyNxggv 1000w,
https://cdn-media-1.freecodecamp.org/images/0*Nsp3DqX0_RyNxggv 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/0*Nsp3DqX0_RyNxggv" alt="How to speed up Node re-builds by leveraging docker multi-stage builds">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by John Standish</p>
<h1 id="how-to-speed-up-node-re-builds-by-leveraging-docker-multi-stage-builds">How to speed up Node re-builds by leveraging docker multi-stage builds</h1>
<figcaption>Photo by <a href="https://unsplash.com/@thanospal?utm_source=medium&amp;utm_medium=referral" rel="noopener" target="_blank" title="">Thanos Pal</a> on <a href="https://unsplash.com?utm_source=medium&amp;utm_medium=referral" rel="noopener" target="_blank" title="">Unsplash</a></figcaption>
</figure>
<p>Reinstalling <code>npm</code> dependencies can be a wasteful use of time and money. Depending on the size of your project, this can take several minutes. In my personal experience, I’ve seen <code>npm install</code> take upwards of 5 minutes. Now, if you have separate stages (Gate, CI, different environment branches) to your pipeline, this waiting time gets even worse. All jokes aside from the picture below, waiting is pricey!</p>
<figcaption><a href="https://www.reddit.com/r/ProgrammerHumor/comments/6s0wov/heaviest_objects_in_the_universe/" rel="noopener" target="_blank" title="">https://www.reddit.com/r/ProgrammerHumor/comments/6s0wov/heaviest_objects_in_the_universe/</a></figcaption>
</figure>
<h3 id="waste-is-expensive-very-expensive">Waste is expensive, very expensive</h3>
<h4 id="tl-dr">TL;DR</h4>
<p>It’s a significant amount of money (~<strong>$9,918/yr per developer</strong>) and time (18,792 minutes per year or 13.05 days per year) that’s wasted waiting for dependencies to install while our code goes through its pipeline. These numbers are an average of 4 check-ins per day. On the low end, waiting for the gate, it’s <strong>~$3,132/yr per developer</strong>. <em>See calculations below for where I got those numbers.</em></p>
<p>Let’s do some quick math to see why 5 minutes is a big problem. Assume you have a Gate, and a CI build for your 2 environments (Staging and Production). Each stage requires you to start a clean build.</p>
<p>So let’s add up how long we’re waiting for <code>npm install</code> to complete:</p>
<p>Build time: 1 minute<br>Gate: 5 minutes<br>Staging CI: 5 Minutes<br>Production CI: 5 Minutes<br><strong>NPM Wait Time: 15 minutes</strong><br><strong>Total Build Time: 18 minutes</strong></p>
<p>Okay, so 18 minutes doesn’t seem that bad. That’s a coffee break, and we all love coffee. But that 18 minutes is idle time, time waiting for something to go out the door.</p>
<p>Now let’s expand that math a bit and multiply by a small team (4 developers), and for fun, we’ll figure an average amount check-ins and an hourly rate. Time is money, right? The average amount of check-ins is what I’ve seen in my day job, and your numbers may vary.</p>
<p>Build Time: 3 minutes<br>NPM Wait Time: 15 minutes<br>Developers: 4<br>Avg. Check-Ins: 4<br>Hourly Rate: $30 (your hourly rate may be higher)</p>
<p><strong>Gate Wait Time: 96 minutes</strong> <strong>(Gate wait time X Developers X Avg Check-Ins)</strong><br><strong>Gate Cost: $48 (Gate Wait Time in hours x Hourly Rate)</strong><br><strong>Total Time: 288 minutes (Build and NPM time X Developers X Avg Check-Ins)</strong><br><strong>Cost: $144/day (Total Time in hours X Hourly Rate)</strong></p>
<p>So we’re looking $144/day of idle time, or $720/week, or <strong>$37,584/yr</strong>. And that’s waiting for our software to ship! On the low end, if we check-in our code and wait for the gate, that’s <strong>$12,528/yr</strong>. YIKES! The yearly cost was based on 261 American working days in a year (<a href="https://hr.uiowa.edu/payroll/2015-fiscal-year-payroll-calendar" rel="noopener">https://hr.uiowa.edu/payroll/2015-fiscal-year-payroll-calendar</a>)</p>
<h3 id="let-s-cache-and-build-this-thing-">Let’s cache and build this thing!</h3>
<h4 id="tl-dr-1">TL;DR</h4>
<p>Here are my instructions on how to run. <a href="https://github.com/jstandish/cached-node-module-build-example/blob/master/DOCKER_BUILD.md" rel="noopener">https://github.com/jstandish/cached-node-module-build-example/blob/master/DOCKER_BUILD.md</a></p>
<p>Alright, we’ve established that waiting for things is expensive. So as such, we should try and reduce how long we spend on <code>npm install</code> steps. We should only re-run <code>npm install</code> when the <code>package.json</code> file changes. By selectively running this we can significantly reduce the amount of time for new Gate/CI/CD builds from several minutes to less than a minute (depends on the size of your project).</p>
<h4 id="phase-1-create-a-cache-stage">Phase 1 — Create a cache stage</h4>
<p>Our first step will be to create a multi-stage <code>dockerfile</code>. This will allow us to copy in the <code>package.json</code> file and only run a certain stage if that file has changed.</p>
<h4 id="phase-2-create-a-build-stage">Phase 2 — Create a build stage</h4>
<p>The next step will be to create the next stage which will pipe a command to <code>npm</code>. This is done using the <code>ENTRYPOINT</code> statement in your <code>dockerfile</code>. This will execute the given command pipe in any arguments. We are using a docker image that has <code>Chromium</code> installed already; this will allow us to run Chrome Headless for our unit tests.</p>
<p>Here is the complete dockerfile:</p>
<h4 id="phase-3-build-the-image">Phase 3 — Build the image</h4>
<p>Now that we have our <code>dockerfile </code>set up, let’s build it. You will need to do this every time the files change, but the time required to copy your new files is trivial because docker will skip subsequent layers that haven’t changed. Woohoo!</p>
<p>This took about <strong>2</strong> <strong>minutes. </strong>But this could take longer depending on your internet connection, disk speed, CPU, etc.</p>
<p>Any build after our initial <code>docker build</code> will take less time because we will only re-run <code>npm install</code> if the package.json file has changed!</p>
<h4 id="phase-4-build-the-code-">Phase 4 — Build the code!</h4>
<p>So now let’s build our code inside the node-build-test image. We’ll specify a mount point so we can copy our build output to it. This will allow us to extract the compiled code from the dockerized environment! I am using a forked angular project as an example, but you can use this now for any project.</p>
<p>The build time took about 45 seconds. But that was compiling our code, not waiting for <code>npm install</code>. YES!</p>
<p>And we now have our compiled files!</p>
<h4 id="so-it-ll-only-be-45-seconds-for-all-subsequent-builds">So, it’ll only be 45 seconds for all subsequent builds?</h4>
<p>Yes! Because the <code>npm install</code> step is completely skipped, because the <code>package.json</code> file hasn’t changed, you’ll gain the benefits. If you change the <code>package.json</code>, you’ll incur the same time penalty you would have anyways.</p>
<h3 id="so-how-much-time-money-did-we-save">So how much time/money did we save?</h3>
<p>So let’s go back to our calculation that we did previously, and now subtract our <code>npm install</code> wait time. We’ll keep the build time in there because you can’t get away from that.</p>
<p>Build Time: 3 minute<br>Developers: 4<br>Avg. Check-Ins: 4<br>Hourly Rate: $30 (your hourly rate may be higher)</p>
<p><strong>Gate Time: 16 minutes</strong> <strong>(Gate wait time X Developers X Avg Check-Ins)</strong><br><strong>Gate Cost: $8 (Gate Wait Time in hours x Hourly Rate)</strong><br><strong>Total Time: 48 minutes (Build time X Developers X Avg Check-Ins x Environments)</strong><br><strong>Cost: $24/day (Total Time in hours X Hourly Rate)</strong></p>
<p>So let’s look at that over a day, week, and year.</p>
<p><strong>Day: $24</strong><br><strong>Week: $120</strong><br><strong>Year: $6,264</strong></p>
<h4 id="and-how-much-did-we-save-for-our-team-of-4-developers">And how much did we save for our team of 4 developers?</h4>
<p>The below is the format of (<strong>previous amount — new amount</strong>). And yes, it’s a lot of savings over the year!</p>
<p><strong>Day: ($144 - $24) = $120</strong><br><strong>Week: ($720 - $120) =$600</strong><br><strong>Year: ($37,584 </strong>- <strong>$6,264) = $31,320</strong></p>
<h3 id="conclusion">Conclusion</h3>
<p>I hope you have enjoyed seeing how utilizing a docker multi-stage build can save you a significant amount of time, as well as money. Docker multi-stage builds are very powerful and can enable you to ship and build faster.</p>
<p>If you want to play around with this, please clone my GitHub repository and have fun!</p>
<p><a href="https://github.com/jstandish/cached-node-module-build-example" rel="noopener">https://github.com/jstandish/cached-node-module-build-example</a></p>
<p>Thanks for reading!</p>
<p><a href="https://www.instagram.com/john.does.code" rel="noopener">https://www.instagram.com/john.does.code</a></p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
