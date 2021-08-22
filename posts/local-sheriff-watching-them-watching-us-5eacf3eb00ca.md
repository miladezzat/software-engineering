---
card: "https://cdn-media-1.freecodecamp.org/images/1*S5zyXVDrpVR24gnN9Vs0Tg.jpeg"
tags: [JavaScript]
description: by Konark Modi
author: "Milad E. Fahmy"
title: "How to protect your information with Local Sheriff"
created: "2021-08-15T19:34:19+02:00"
modified: "2021-08-15T19:34:19+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-privacy tag-security tag-big-data tag-tech ">
<header class="post-full-header">
<h1 class="post-full-title">How to protect your information with Local Sheriff</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*S5zyXVDrpVR24gnN9Vs0Tg.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*S5zyXVDrpVR24gnN9Vs0Tg.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*S5zyXVDrpVR24gnN9Vs0Tg.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*S5zyXVDrpVR24gnN9Vs0Tg.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*S5zyXVDrpVR24gnN9Vs0Tg.jpeg" alt="How to protect your information with Local Sheriff">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Konark Modi</p>
<h1 id="how-to-protect-your-information-with-local-sheriff">How to protect your information with Local Sheriff</h1>
<h4 id="watching-them-watching-us">Watching them watching us</h4>
<h3 id="what-is-a-telltale-url"><strong>What is a TellTale URL ?</strong></h3>
<p>A URL is the most commonly tracked piece of information. The innocent choice to structure a URL based on page content can make it easier to learn a users’ browsing history, address, health information or more sensitive details. They contain sensitive information or can lead to a page which contains sensitive information.</p>
<p>We call such URLs as TellTaleURLs.</p>
<p>Let’s take a look at some examples of such URLs.</p>
<h3 id="example-1-"><strong>EXAMPLE #1:</strong></h3>
<p><strong>Website</strong>: <em>donate.mozilla.org (Fixed)</em></p>
<p>After you have finished the payment process on <em>donate.mozilla.org</em>, you are redirected to a “thank you” page. If you look carefully at the URL shown in the below screenshot, it contains some private information like <em>email, country, amount, payment method.</em></p>
<figcaption>PII in URL on donate.mozilla.org</figcaption>
</figure>
<p>Now because this page loads some resources from third-parties and the URL is not sanitised, the same information is also shared with those third-parties via referrer and as a value inside payload sent to the third-parties.</p>
<figcaption>URL with PII shared when fonts being loaded from Google Apis.</figcaption>
</figure>
<p>In this particular case, there were 7 third-parties with whom this information was shared.</p>
<p>Mozilla was prompt to fix these issues, more details can be found here: <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=1516699" rel="noopener"><em>https://bugzilla.mozilla.org/show_bug.cgi?id=1516699</em></a></p>
<h3 id="example-2-">EXAMPLE #2:</h3>
<p><strong>Website</strong>: trainline.eu, <em>JustFly.com (Last checked: Aug’18)</em></p>
<p>Once you finish a purchase like train tickets / flight tickets, you receive an email which has a link to manage your booking. Most of the time, when you click on the link, you are shown the booking details - without having to enter any more details like booking code, username/password.</p>
<p>This means that the URL itself contains some token which is unique to the user and provides access to the users’ booking.</p>
<p>It so happens that these URLs are also shared with third-parties, giving these third-parties <a href="https://medium.freecodecamp.org/how-airlines-dont-care-about-your-privacy-case-study-emirates-com-6271b3b8474b" rel="noopener">highly sensitive data</a> and <a href="https://cliqz.com/en/magazine/lufthansa-data-leak-what-a-single-url-can-reveal-about-you" rel="noopener">access to your bookings</a>.</p>
<figcaption>JustFly.com leaking bookingID to 10 third-party domains</figcaption>
</figure>
<figcaption>trainline.eu sharing booking token with 17 third-party domains.</figcaption>
</figure>
<figcaption>URL with token being shared via Ref and inside the payload.</figcaption>
</figure>
<h3 id="example-3-">EXAMPLE #3:</h3>
<p><strong>Website</strong>: <em>foodora.de, grubhub.com (Last checked: Aug’18)</em></p>
<p>One of the pre-requisites to order food online is entering the address where you want the food to be delivered.</p>
<p>Some popular food delivery websites, convert the address to fine latitude-longitude values and add them to the URL.</p>
<p>The URL is also shared with third-parties, potentially leaking where the user lives.</p>
<figcaption>Foodora leaking address details to 15 third-party domains.</figcaption>
</figure>
<blockquote>To be clear, it’s not just these websites that suffer from such leaks. This problem exists everywhere - it’s a default situation, not a rarity. We’ve seen it with Lufthansa, Spotify, Flixbus, Emirates, and even with medical providers.</blockquote>
<h3 id="risks-of-telltale-urls-">Risks of TellTale URLs:</h3>
<ul>
<li>Websites are carelessly leaking sensitive information to plethora of third-parties.</li>
<li>Most often without users’ consent.</li>
<li>More dangerously: Most websites are not aware of these leaks while implementing third-party services.</li>
</ul>
<h3 id="are-these-problems-hard-to-fix">Are these problems hard to fix?</h3>
<p>As a Software Engineer who has worked for some of the largest eCommerce companies, I understand the need to use third party services for optimising and enhancing not only the Digital Product but also how users interact with the product.</p>
<p>It is not the usage of third party services that is of concern in this case but the implementation of these services. Owners should always have the control of their website and what the website shares with third party services.</p>
<p>It is this control that needs to be exercised to limit the leakage of User information.</p>
<p>It is not a mammoth task, it is just a matter of commitment to preserving the basic right to privacy.</p>
<p>For example:</p>
<ol>
<li>Private pages should have <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta" rel="noopener">noindex meta tags</a>.</li>
<li>Limit the presence of third-party services on private pages.</li>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy" rel="noopener">Referrer-Policy</a> on pages with sensitive data.</li>
<li>Implement CSP and SRI. Even with a huge footprint of third-party services <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP" rel="noopener">CSP</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity" rel="noopener">SRI</a> are not enabled on majority of the websites.</li>
</ol>
<h3 id="introducing-local-sheriff-">Introducing Local Sheriff:</h3>
<p>Given that such information leakage is dangerous to both users and the organisations, then why is it a wide-spread problem?</p>
<p>One big reason that these issues exist is lack of awareness.</p>
<p>A good starting point for websites is to see what information is being leaked or detect presence of TellTaleURLs.</p>
<p>But in order to find out if the same is happening with the websites you maintain or visit, you need to learn some tools to inspect network traffic, understand first-party — third-party relationship and then make sure you have these tools open during the transaction process.</p>
<p>To help bridge this gap, we wanted to build a tool with the following guidelines:</p>
<ul>
<li>Easy to install.</li>
<li>Monitors and stores all data being exchanged between websites and third-parties — Locally on the user machine.</li>
<li>Helps identify the users which companies are tracking them on the internet.</li>
<li>Interface to search information being leaked to third-parties.</li>
</ul>
<p>Given the above guidelines, browser extension seemed like a reasonable choice. After you install Local-Sheriff, in the background:</p>
<ol>
<li>Using the WebRequest API, it monitors interaction between first-party and third-party.</li>
<li>Classifies what URL is first-party and third-party.</li>
<li>Ships with a copy of database from <a href="https://whotracks.me/" rel="noopener">WhoTracksMe</a>. To map which domain belongs to which company.</li>
</ol>
<p>4. Provides an interface you can search for values that you think are private to you and see which websites leak it to which third-parties. Eg: name, email, address, date of birth, cookie etc.</p>
<h3 id="revisiting-example-1">Revisiting EXAMPLE #1</h3>
<p><strong>Website: </strong><em>donate.mozilla.org</em></p>
<ul>
<li>The user has Local-Sheriff installed and donates to mozilla.org.</li>
</ul>
<figcaption>PII in URL on donate.mozilla.org</figcaption>
</figure>
<ul>
<li>Clicks on the icon to open search interface.</li>
</ul>
<figcaption>Local sheriff icon.</figcaption>
</figure>
<ul>
<li>Enters emailID used on the website donate.mozilla.org.</li>
</ul>
<figcaption>Search interface Local-Sheriff</figcaption>
</figure>
<p>It can be seen that email address used at the time of donation was shared with <strong>~7 third-party domains.</strong></p>
<p>You can try it yourselves by installing it:</p>
<ul>
<li><strong>Firefox: </strong><a href="https://addons.mozilla.org/de/firefox/addon/local-sheriff/" rel="noopener">https://addons.mozilla.org/de/firefox/addon/local-sheriff/</a></li>
<li><strong>Chrome: </strong><a href="https://chrome.google.com/webstore/detail/local-sheriff/ckmkiloofgfalfdhcfdllaaacpjjejeg" rel="noopener">https://chrome.google.com/webstore/detail/local-sheriff/ckmkiloofgfalfdhcfdllaaacpjjejeg</a></li>
</ul>
<p><strong>Resources:</strong></p>
<ul>
<li><strong>More details</strong>: <a href="https://www.ghacks.net/2018/08/12/local-sheriff-reveals-if-sites-leak-personal-information-with-third-parties/" rel="noopener"><em>https://www.ghacks.net/2018/08/12/local-sheriff-reveals-if-sites-leak-personal-information-with-third-parties/</em></a></li>
<li><strong>Source Code</strong>: <a href="https://github.com/cliqz-oss/local-sheriff" rel="noopener"><em>https://github.com/cliqz-oss/local-sheriff</em></a></li>
<li><strong>Conferences:</strong> <a href="https://www.defcon.org/html/defcon-26/dc-26-demolabs.html" rel="noopener"><em>Defcon 26 Demo Labs</em></a><em> , <a href="https://fosdem.org/2019/schedule/event/web_extensions_exposing_privacy_leaks/" rel="noopener">FOSDEM 2019</a></em></li>
<li><strong>Code:</strong> <a href="https://github.com/cliqz-oss/local-sheriff" rel="noopener">https://github.com/cliqz-oss/local-sheriff</a></li>
<li><strong>Chrome store:</strong> <a href="https://chrome.google.com/webstore/detail/local-sheriff/ckmkiloofgfalfdhcfdllaaacpjjejeg" rel="noopener">https://chrome.google.com/webstore/detail/local-sheriff/ckmkiloofgfalfdhcfdllaaacpjjejeg</a></li>
</ul>
<p>Thanks for reading and sharing ! :)</p>
<p>If you liked this story, feel free to ??? a few times (Up to 50 times. Seriously).</p>
<p>Happy Hacking !</p>
<p><a href="https://twitter.com/konarkmodi" rel="noopener">- Konark Modi</a></p>
<p><strong><em>Credits:</em></strong></p>
<ul>
<li><em>Special thanks to <a href="https://twitter.com/Pythux" rel="noopener">Remi</a> , <a href="https://twitter.com/Pi_Modi" rel="noopener">Pallavi</a> for reviewing this post :)</em></li>
<li><em>Title “Watching them watching us “ comes from a joint talk between Local Sheriff and <a href="https://trackula.org/en/" rel="noopener">Trackula</a> at FOSDEM 2019.</em></li>
</ul>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
