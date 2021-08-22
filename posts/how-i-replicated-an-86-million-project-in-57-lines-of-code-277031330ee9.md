---
card: "https://cdn-media-1.freecodecamp.org/images/1*BU46LufhEIhxIt_BUyPaRQ.jpeg"
tags: [Open Source]
description: by Tait Brown
author: "Milad E. Fahmy"
title: "How I replicated an $86 million project in 57 lines of code"
created: "2021-08-15T19:50:49+02:00"
modified: "2021-08-15T19:50:49+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-open-source tag-javascript tag-hackathons tag-cloud-computing tag-tech ">
<header class="post-full-header">
<h1 class="post-full-title">How I replicated an $86 million project in 57 lines of code</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*BU46LufhEIhxIt_BUyPaRQ.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*BU46LufhEIhxIt_BUyPaRQ.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*BU46LufhEIhxIt_BUyPaRQ.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*BU46LufhEIhxIt_BUyPaRQ.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*BU46LufhEIhxIt_BUyPaRQ.jpeg" alt="How I replicated an $86 million project in 57 lines of code">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Tait Brown</p>
<h1 id="how-i-replicated-an-86-million-project-in-57-lines-of-code"><strong>How I replicated an $86 million project in 57 lines of code</strong></h1>
<h4 id="when-an-experiment-with-existing-open-source-technology-does-a-good-enough-job">When an experiment with existing open source technology does a “good enough” job</h4>
<p>The Victoria Police are the primary law enforcement agency of Victoria, Australia. With over 16,000 vehicles stolen in Victoria this past year — at a cost of about $170 million — the police department is experimenting with a variety of technology-driven solutions to crackdown on car theft. They call this system BlueNet.</p>
<p>To help prevent fraudulent sales of stolen vehicles, there is already a VicRoads <a href="https://www.vicroads.vic.gov.au/registration/buy-sell-or-transfer-a-vehicle/buy-a-vehicle/check-vehicle-registration/vehicle-registration-enquiry" rel="noopener">web-based service</a> for checking the status of vehicle registrations. The department has also invested in a stationary license plate scanner — a fixed tripod camera which scans passing traffic to automatically identify stolen vehicles.</p>
<p>Don’t ask me why, but one afternoon I had the desire to prototype a vehicle-mounted license plate scanner that would automatically notify you if a vehicle had been stolen or was unregistered. Understanding that these individual components existed, I wondered how difficult it would be to wire them together.</p>
<p>But it was after a bit of googling that I discovered the Victoria Police had recently undergone a trial of a similar device, and the estimated cost of roll out was somewhere in the vicinity of $86,000,000. One astute commenter pointed out that the $86M cost to fit out 220 vehicles comes in at a rather thirsty <strong>$390,909 per vehicle</strong>.</p>
<p>Surely we can do a bit better than that.</p>
<figcaption>Existing stationary license plate recognition systems</figcaption>
</figure>
<h3 id="the-success-criteria">The Success Criteria</h3>
<p>Before getting started, I outlined a few key requirements for product design.</p>
<h4 id="requirement-1-the-image-processing-must-be-performed-locally"><strong><em>Requirement #1: The image processing must be performed locally</em></strong></h4>
<p>Streaming live video to a central processing warehouse seemed the least efficient approach to solving this problem. Besides the whopping bill for data traffic, you’re also introducing network latency into a process which may already be quite slow.</p>
<p>Although a centralized machine learning algorithm is only going to get more accurate over time, I wanted to learn if an local on-device implementation would be “good enough”.</p>
<h4 id="requirement-2-it-must-work-with-low-quality-images"><strong><em>Requirement #2: It must work with low quality images</em></strong></h4>
<p>Since I don’t have a Raspberry Pi camera or USB webcam, so I’ll be using dashcam footage — it’s readily available and an ideal source of sample data. As an added bonus, dashcam video represents the overall quality of footage you’d expect from vehicle mounted cameras.</p>
<h4 id="requirement-3-it-needs-to-be-built-using-open-source-technology"><strong><em>Requirement #3: It needs to be built using open source technology</em></strong></h4>
<p>Relying upon a proprietary software means you’ll get stung every time you request a change or enhancement — and the stinging will continue for every request made thereafter. Using open source technology is a no-brainer.</p>
<h3 id="my-solution"><strong>My solution</strong></h3>
<p>At a high level, my solution takes an image from a dashcam video, pumps it through an open source license plate recognition system installed locally on the device, queries the registration check service, and then returns the results for display.</p>
<p>The data returned to the device installed in the law enforcement vehicle includes the vehicle’s make and model (which it only uses to verify whether the plates have been stolen), the registration status, and any notifications of the vehicle being reported stolen.</p>
<p>If that sounds rather simple, it’s because it really is. For example, the image processing can all be handled by the <em>openalpr</em> library.</p>
<p>This is really all that’s involved to recognize the characters on a license plate:</p>
<blockquote><strong>A Minor Caveat</strong><br>Public access to the VicRoads APIs is not available, so license plate checks occur via web scraping for this prototype. While generally frowned upon — this is a proof of concept and I’m not slamming anyone’s servers.</blockquote>
<p>Here’s what the dirtiness of my proof-of-concept scraping looks like:</p>
<h3 id="results">Results</h3>
<p>I must say I was pleasantly surprised.</p>
<p>I expected the open source license plate recognition to be pretty rubbish. Additionally, the image recognition algorithms are probably not optimised for Australian license plates.</p>
<p>The solution was able to recognise license plates in a wide field of view.</p>
<figcaption>Annotations added for effect. Number plate identified despite reflections and lens distortion.</figcaption>
</figure>
<p>Although, the solution would occasionally have issues with particular letters.</p>
<figcaption>Incorrect reading of plate, mistook the M for an H</figcaption>
</figure>
<p>But … the solution would eventually get them correct.</p>
<figcaption>A few frames later, the M is correctly identified and at a higher confidence rating</figcaption>
</figure>
<p>As you can see in the above two images, processing the image a couple of frames later jumped from a confidence rating of 87% to a hair over 91%.</p>
<p>I’m confident, pardon the pun, that the accuracy could be improved by increasing the sample rate, and then sorting by the highest confidence rating. Alternatively a threshold could be set that only accepts a confidence of greater than 90% before going on to validate the registration number.</p>
<p>Those are very straight forward code-first fixes, and don’t preclude the training of the license plate recognition software with a local data set.</p>
<h4 id="the-86-000-000-question">The $86,000,000 Question</h4>
<p>To be fair, I have absolutely no clue what the $86M figure includes — nor can I speak to the accuracy of my open source tool with no localized training vs. the pilot BlueNet system.</p>
<p>I would expect part of that budget includes the replacement of several legacy databases and software applications to support the high frequency, low latency querying of license plates several times per second, per vehicle.</p>
<p>On the other hand, the cost of ~$391k per vehicle seems pretty rich — especially if the BlueNet isn’t particularly accurate and there are no large scale IT projects to decommission or upgrade dependent systems.</p>
<h4 id="future-applications">Future Applications</h4>
<p>While it’s easy to get caught up in the Orwellian nature of an “always on” network of license plate snitchers, there are many positive applications of this technology. Imagine a passive system scanning fellow motorists for an abductors car that automatically alerts authorities and family members to their current location and direction.</p>
<p>Teslas vehicles are already brimming with cameras and sensors with the ability to receive OTA updates — imagine turning these into a fleet of virtual good samaritans. Ubers and Lyft drivers could also be outfitted with these devices to dramatically increase the coverage area.</p>
<p>Using open source technology and existing components, it seems possible to offer a solution that provides a much higher rate of return — for an investment much less than $86M.</p>
<p><strong>Part 2</strong> — I’ve published an update, in which I test with my own footage and catch an unregistered vehicle, over here:</p>
<p><a href="https://medium.freecodecamp.org/remember-that-86-million-license-plate-scanner-i-replicated-heres-what-happened-next-9f3c64e8f22b" rel="noopener"><strong>Remember that $86 million license plate scanner I replicated? Here’s what happened next.</strong></a><br><a href="https://medium.freecodecamp.org/remember-that-86-million-license-plate-scanner-i-replicated-heres-what-happened-next-9f3c64e8f22b" rel="noopener"><em>Successes, failures, and catching one very naughty driver</em>medium.freecodecamp.org</a></p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
