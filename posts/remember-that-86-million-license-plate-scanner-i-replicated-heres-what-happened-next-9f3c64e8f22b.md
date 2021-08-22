---
card: "https://cdn-media-1.freecodecamp.org/images/1*HwbifravoUSXmONi7UUemg.jpeg"
tags: [Tech]
description: by Tait Brown
author: "Milad E. Fahmy"
title: "Remember the $86 million license plate scanner I replicated? I caught someone with it."
created: "2021-08-15T19:50:12+02:00"
modified: "2021-08-15T19:50:12+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-tech tag-javascript tag-machine-learning tag-startup tag-politics ">
<header class="post-full-header">
<h1 class="post-full-title">Remember the $86 million license plate scanner I replicated? I caught someone with it.</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*HwbifravoUSXmONi7UUemg.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*HwbifravoUSXmONi7UUemg.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*HwbifravoUSXmONi7UUemg.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*HwbifravoUSXmONi7UUemg.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*HwbifravoUSXmONi7UUemg.jpeg" alt="Remember the $86 million license plate scanner I replicated? I caught someone with it.">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Tait Brown</p>
<figcaption><strong>Canceled driver caught in action.</strong></figcaption>
</figure>
<h1 id="remember-the-86-million-license-plate-scanner-i-replicated-i-caught-someone-with-it-">Remember the $86 million license plate scanner I replicated? I caught someone with it.</h1>
<p>A few weeks ago, I published what I thought at the time was a fairly innocuous article: <a href="https://medium.freecodecamp.org/how-i-replicated-an-86-million-project-in-57-lines-of-code-277031330ee9" rel="noopener">How I replicated an $86 million project in 57 lines of code</a>.</p>
<p>I’ll admit — it was a rather click-bait claim. I was essentially saying that I’d reproduced the same license plate scanning and validating technology that the police in Victoria, Australia had just paid $86 million for.</p>
<p>Since then, the reactions have been overwhelming. My article received over 100,000 hits in the first day, and at last glance sits somewhere around 450,000. I’ve been invited to speak on local radio talk shows and at a conference in California. I think someone may have misread Victoria, AU as Victoria, BC.</p>
<p>Although I politely declined these offers, I have met for coffee with various local developers and big name firms alike. It’s been incredibly exciting.</p>
<p>Most readers saw it for what it was: a proof of concept to spark discussion about the use of open source technology, government spending, and one man’s desire to build cool stuff from his couch.</p>
<p>Pedants have pointed out the lack of training, support, and usual enterprise IT cost padders, but it’s not worth anyone’s time exploring these. I’d rather spend this post looking at my results and how others can go about shoring up their own accuracy.</p>
<p>Before we get too deep into the results, I’d like to go over one thing that I feel was lost in the <a href="https://medium.freecodecamp.org/how-i-replicated-an-86-million-project-in-57-lines-of-code-277031330ee9" rel="noopener">original post</a>. The concept for this project started completely separate from the $86 million BlueNet project. It was by no means an attempt to knock it off.</p>
<p>It started with the nagging thought that since <a href="https://opencv.org/" rel="noopener">OpenCV</a> exists and the VicRoads website has license plate checks, there must be a way to combine the two or use something better.</p>
<p>It was only when I began my write-up that I stumbled upon BlueNet. While discovering BlueNet and its price tag gave me a great editorial angle, with the code already written. There were bound to be some inconsistencies between the projects.</p>
<p>I also believe part of the reason this blew up was the convenient timing of a report on <a href="http://www.abc.net.au/news/2017-08-28/federal-governments-$10bn-bill-rivals-newstart-cost/8849562" rel="noopener">wasteful government IT spending in Australia</a>. The Federal Government’s IT bill has shot up from $5.9 billion to $10 billion, and it delivered dubious value for that blow out. Media researchers who contacted me were quick to link the two, but this is not something I am quick to encourage.</p>
<h4 id="a-disclaimer"><strong>A Disclaimer</strong></h4>
<p>In the spirit of transparency, I must declare something that was also missing from the original post. My previous employer delivered smaller (less than $1 million) IT projects for Victoria Police and other state bodies. As a result, I’ve undergone police checks and completed the forms required to become a VicPol contractor.</p>
<p>This may imply I have an axe to grind or have some specific insider knowledge, but instead I am proud of the projects we delivered. They were both on time and on budget.</p>
<h3 id="visualizing-the-results">Visualizing the Results</h3>
<p>The following is a video representation of my results, composited in After Effects for a bit of fun. I recorded various test footage, and this was the most successful clip.</p>
<p>I will go into detail about ideal camera setups, detection regions, and more after the video. It will help you better understand what made this iPhone video I took from through the windscreen a better video than a Contour HD angled out the side window.</p>
<h3 id="an-ethical-dilemma">An Ethical Dilemma</h3>
<p>If you saw the hero graphic of this article or watched the video above, you may have noticed a very interesting development: <strong>I caught someone</strong>.</p>
<p>Specifically, I caught someone driving a vehicle with a canceled registration from 2016. This could have happened for many reasons, the most innocent of which is a dodgy resale practice.</p>
<p>Occasionally, when the private sale of a vehicle is not done by the book, the buyer and seller may not complete an official transfer of registration. This saves the buyer hundreds of dollars, but the vehicle is still registered to the seller. It’s not unheard of for a seller to then cancel the registration and receive an ad hoc refund of remaining months, also worth hundreds of dollars.</p>
<p>Alternatively, the driver of the vehicle could well be the criminal we suspect that they are.</p>
<p>So, although I jokingly named the project plate-snitch when I set it up on my computer, I’m now faced with the conundrum of whether to report what I saw.</p>
<p>Ultimately, the driver was detected using a prototype of a police-only device. But driving on a 2016 registration (canceled, not expired) is a very deliberate move. Hmm.</p>
<h3 id="back-to-the-results">Back to the Results</h3>
<p>Of the many reactions to my article, a significant amount were quite literal and dubious. Since I said I <em>replicated</em> the software, they asserted that I must have a support center, warranties, and training manuals. One even attempted to replicate my results and hit the inevitable roadblocks of image quality and source material.</p>
<p>Because of this, some implied that I cherry-picked my source images. To that I can only say, “Well, duh.”</p>
<p>When I built my initial proof of concept (again, focusing on validating an idea, not replicating BlueNet), I used a small sample set of less than ten images. Since camera setup is one of, if not <em>the most,</em> important factors in <a href="http://www.theiacp.org/ALPR" rel="noopener">ALPR, </a>I selected them for ideal characteristics that enhance recognition.</p>
<p>At the end of the day, it is very simple to take a fragile proof of concept and break it. The true innovation and challenge comes from taking a proof of concept, and <em>making it work</em>. Throughout my professional career, many senior developers have told me that things can’t be done or at least can’t be done in a timely manner. Sometimes they were right. Often, they were just risk averse.</p>
<blockquote>“Nothing is impossible until it is proven to be.”</blockquote>
<p>Many people bastardize this quote, and you may have seen or heard one of it’s incarnations before. To me, it neatly summarizes a healthy development mindset, in which spiking and validating ideas is almost mandatory to understanding them.</p>
<h3 id="optimal-alpr-camera-setups">Optimal ALPR Camera Setups</h3>
<p>This project is so exciting and different for me because it has a clear success metric — whether the software recognizes the plate. This can only happen with a combination of hardware, software, and networking solutions. After posting my original article, people who sell ALPR cameras quickly offered advice.</p>
<h4 id="optical-zoom">Optical Zoom</h4>
<p>The most obvious solution in hindsight is the use of an <a href="https://www.digitaltrends.com/photography/digital-cameras-digital-zoom-vs-optical-zoom/" rel="noopener">optical zoom</a>. Though I explore other important factors below, none lead to such a sheer increase in recognition as this. In general, professional ALPR solutions are offset at an angle, trained on where the license plate will be, and zoomed into the area to maximize clarity.</p>
<p>This means the <strong>more zoom, more pixels to play with</strong>.</p>
<p>All the cameras I had at my disposal were of a fixed lens. They included:</p>
<ul>
<li>A Contour HD action camera. These came out in 2009, and I use mine to record my cycling commute and to replay each week’s near death experience.</li>
<li>A Fujifilm X100S (famously a fixed prime lens)</li>
<li>My iPhone 6+</li>
</ul>
<p>The featured test run was recorded on my phone. My only method of replicating an optical zoom was using an app to record at 3K instead of 1080p, and then digitally zooming and cropping. Again, more pixels to play with.</p>
<h4 id="angle-positioning">Angle &amp; Positioning</h4>
<p>The viewing angle of 30<strong>°</strong> is often referenced as the standard for ideal plate recognition. This is incredibly important when you learn that BlueNet uses an array of cameras. It also makes sense when you consider what a front facing camera would generally see — not very much.</p>
<figcaption>What a front facing ALPR camera sees — not much.</figcaption>
</figure>
<p>If I had to guess I’d say a mostly forward-facing array would be the ideal setup. It would consist of a single camera pointed dead center as above, two off-center at 30<strong>°</strong> each side, and a single rear-facing camera. The value in having most of the cameras pointed forward would come from the increased reaction time if the vehicle is traveling in the opposite direction. This would allow a quicker scan, process, and U-turn than if the rear facing cameras picked up a suspect vehicle already ten meters past the police vehicle.</p>
<figcaption>A four camera array would need to be angled similar to this. Icons from <a href="http://www.freepik.com/" rel="noopener" target="_blank" title="">Freepik</a>.</figcaption>
</figure>
<h4 id="a-gymbal">A Gymbal</h4>
<p>When compositing the video, I thought about stabilizing the footage. Instead I opted to show the bumpy ride for what it was. What you saw was me holding my phone near the windscreen while my wife drove. Check out that rigorous scientific method.</p>
<figcaption>Any production-ready version of a vehicle-mounted ALPR needs some form of stabilisation. Not a hand.</figcaption>
</figure>
<h3 id="other-important-factors">Other Important Factors</h3>
<h4 id="frame-rate">Frame Rate</h4>
<p>Both the attempt to replicate my project and my recordings since then explored the same misconception that ALPR sampling frame rate may be linked to success. In my experience, this did nothing but waste cycles. Instead, what is incredibly important is the shutter speed creating clean, crisp footage that feeds well into the algorithm.</p>
<p>But I was also testing fairly low-speed footage. At most, two vehicles passing each other in a 60km/h zone created a 120km/h <a href="http://www.mathwords.com/d/differential.htm" rel="noopener">differential</a>. BlueNet, on the other hand, can work up to an alleged 200km/h.</p>
<p>As a way of solving this, a colleague suggested object detection and out-of-band processing. Identify a vehicle and draw a bounding box. Wait for it to come into the ideal recognition angle and zoom. Then shoot a burst of photos for asynchronous processing.</p>
<p>I looked into using OpenCV (node-opencv) for object recognition, but I found something simpler like face detection, taking anywhere from 600–800ms. Not only less than ideal for my use, but pretty poor in general.</p>
<p>Hype-train <a href="https://www.tensorflow.org/" rel="noopener">TensorFlow</a> comes to the rescue. Able to run on-device, there are examples of <a href="https://github.com/MarvinTeichmann/KittiBox" rel="noopener">projects</a> identifying multiple vehicles per frame at an astounding 27.7fps. <a href="https://github.com/balancap/SDC-Vehicle-Detection" rel="noopener">This version</a> could even expose speed estimations. Legally worthless, but perhaps useful in every day policing (no fps benchmark in readme).</p>
<p>To better explain how high-performance vehicle recognition could couple with slower ALPR techniques, I created another video in After Effects. I imagine that the two working hand-in-hand would look something like this:</p>
<h4 id="frame-rate-vs-shutter-speed">Frame Rate vs Shutter Speed</h4>
<p>A different manifestation of <em>frame rate</em> is largely influenced upon shutter speed, and more specifically, the <em>rolling shutter</em> issues that plague early or low end digital movie recorders. The following is a snapshot from some Contour HD footage. You can see at only 60km/h the rolling shutter issue makes the footage more or less unusable from an ALPR point of view.</p>
<figcaption>Rolling shutter issues on a Contour HD @ 60km/h.</figcaption>
</figure>
<p>Adjusting frame rate on both the Contour HD and my iPhone did not result in noticeably less distortion. In theory, a higher shutter speed should produce clearer and crisper images. They’d become increasingly important if you were to chase the 200km/h BlueNet benchmark. Less blur and less rolling shutter distortion would ideally lead to a better read.</p>
<h4 id="open-alpr-version">Open ALPR Version</h4>
<p>One of the more interesting discoveries was that the node-<a href="https://github.com/openalpr/openalpr" rel="noopener">openalpr</a> version I was using is both out-of-date and not nearly as powerful as their proprietary solution. While an open source requirement was certainly a factor, it was amazing how accurately the cloud version could successfully read frames that I couldn’t even identify a plate on.</p>
<h4 id="alpr-country-training-data">ALPR Country Training Data</h4>
<p>I also found that the main node-openalpr package defaults to US country processing with no way of overriding it. You have to pull down someone else’s fork which allows you to then provide an extra country parameter.</p>
<figcaption>Slimline Australian plates need their own separate country detection to regular Australian plates?</figcaption>
</figure>
<p>But this doesn’t always help. Using the default US algorithm I was able to produce the most results. Specifying the Australian data set actually halved the number of successful plate reads, and it only managed to find one or two that the US algorithm couldn’t. Providing the separate “Australian Wide Plate” set again halved the count and introduced a single extra plate.</p>
<p>There is clearly a lot to be desired when it comes to Australian-based data sets for ALPR, and I think that the sheer number of plate styles available in Victoria is a contributing factor.</p>
<figcaption>Good luck with that.</figcaption>
</figure>
<h4 id="planar-warps">Planar Warps</h4>
<p>Open ALPR comes with one particular tool to reduce the impact of distortion from both the camera angle and rolling shutter issues. Planar warp refers to a method in which coordinates are passed to the library to skew, translate, and rotate an image until it closely resembles a straight-on plate.</p>
<p>In my limited testing experience, I wasn’t able to find a planar warp that worked at all speeds. When you consider rolling shutter, it makes sense that the distortion grows relative to vehicle speed. I would imagine feeding accelerometer or GPS speed data as a coefficient might work. Or, you know, get a camera that isn’t completely rubbish.</p>
<figcaption>The planar warp tool provided with Open ALPR</figcaption>
</figure>
<h3 id="what-others-are-doing-in-the-industry">What others are doing in the industry</h3>
<p>Numerous readers reached out after the last post to share their own experiences and ideas. Perhaps one of the more interesting solutions shared with me was by <a href="https://www.auror.co/" rel="noopener">Auror</a> in New Zealand.</p>
<p>They employ fixed ALPR cameras in petrol stations to report on people stealing petrol. This in itself is not particularly new and revolutionary. But when coupled with their network, they can automatically raise an alert when known offenders have returned, or are targeting petrol stations in the area.</p>
<p>Independent developers in Israel, South Africa, and Argentina have shown interest in building their own hacked-together versions of BlueNet. Some will probably fare better than others, as places like Israel use a seven digit license plates with no alphabet characters.</p>
<h3 id="key-takeaways">Key Takeaways</h3>
<p>There is simply too much that I’ve learned in the last few weeks of dabbling to fit into one post. While there have been plenty of detractors, I really do appreciate the support and knowledge that has been sent my way.</p>
<p>There are a lot of challenges you will face in trying to build your own ALPR solution, but thankfully a lot of them are solved problems.</p>
<p>To put things in perspective, I’m a designer and front end developer. I’ve spent about ten hours now on footage and code, another eight on video production, and at least another ten on write-ups alone. I’ve achieved what I have by standing on the shoulders of giants. I’m installing libraries built by intelligent people and have leveraged advice from people who sell these cameras for a living.</p>
<p>The $86 million question still remains — if you can build a half-arsed solution that does an okay job by standing on the shoulders of giants, how much more money should you pour in to do a really <em>really</em> good job?</p>
<p>My solution is not even in the same solar system as the 99.999% accurate scanner that some internet commenters seem to expect. But then again, BlueNet only has to meet a 95% accuracy target.</p>
<p>So if $1 million gets you to 80% accuracy, and maybe $10 million gets you to 90% accuracy — when do you stop spending? Furthermore, considering that the technology has proven commercial applications here in Oceania, how much more taxpayer money should be poured into a proprietary, close-sourced solution when local startups could benefit? Australia is supposed to be an “innovation nation” after all.</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
