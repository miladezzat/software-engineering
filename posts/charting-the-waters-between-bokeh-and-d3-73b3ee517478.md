---
card: "https://cdn-media-1.freecodecamp.org/images/1*WQF5AwtvsAmBFFB1BcRDvg.png"
tags: [JavaScript]
description: by Mandi Cai
author: "Milad E. Fahmy"
title: "Charting the waters: between Bokeh and D3"
created: "2021-08-15T19:49:11+02:00"
modified: "2021-08-15T19:49:11+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-data-visualization tag-libraries tag-front-end-development tag-tech ">
<header class="post-full-header">
<h1 class="post-full-title">Charting the waters: between Bokeh and D3</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*WQF5AwtvsAmBFFB1BcRDvg.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*WQF5AwtvsAmBFFB1BcRDvg.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*WQF5AwtvsAmBFFB1BcRDvg.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*WQF5AwtvsAmBFFB1BcRDvg.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*WQF5AwtvsAmBFFB1BcRDvg.png" alt="Charting the waters: between Bokeh and D3">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Mandi Cai</p>
<h1 id="charting-the-waters-between-bokeh-and-d3">Charting the waters: between Bokeh and D3</h1>
<h3 id="introduction"><strong>Introduction</strong></h3>
<p>There comes a time in the life of a budding “low-key but also high-key trying to become a front-end designer and developer” when they must enter the world of charting libraries.</p>
<figcaption>Navigating *uncharted* waters</figcaption>
</figure>
<p>Charting libraries produce data-driven visualizations. They are the reason you can quickly grasp trends in life expectancy on <a href="http://fivethirtyeight.com/" rel="noopener">FiveThirtyEight</a> or gauge the national sentiment about an upcoming presidential election (yikes) on <a href="https://www.nytimes.com/" rel="noopener">The New York Times</a>.</p>
<p>Think about the charts that you can create within <a href="https://www.google.com/sheets/about/" rel="noopener">Google Sheets</a>, except now you have direct viewing and editing rights to the library that drives those <a href="https://developers.google.com/chart/" rel="noopener">charts</a>. You are the master of these low level building blocks constituting a “chart”.</p>
<p>Several charting libraries are written in JavaScript, a language that is more familiar to web developers than most, which makes learning them a less daunting feat. When executed correctly, charting libraries have the power to drive home a powerful message <em>and</em> give you the opportunity to view serious visual candy.</p>
<p>Recently, our team was tasked with creating an interface that needed to integrate a charting library in order to fulfill the goal. As a result, we had to decide on a library that satisfied our specific use cases. If you weigh your needs correctly and choose a library that somehow satisfies all of them, life is golden.</p>
<p>However, libraries are never a one-size-fits-all kind of deal. More often than not, your initial assumption that a library is the perfect match will be incorrect because of unforeseen obstacles that pop up.</p>
<figcaption>When nothing was working</figcaption>
</figure>
<p>Perhaps you’re thinking: “What are those options?”, “ How did you approach choosing an option?” or “Why did you feel stupid?” (refers to the Slack message above).</p>
<p>This article will describe our process of choosing a charting library among the myriad of JavaScript charting libraries that are currently available, the critical decision of switching between two charting libraries (<a href="https://bokeh.pydata.org/en/latest/docs/dev_guide/bokehjs.html" rel="noopener">Bokeh</a> and <a href="https://d3js.org/" rel="noopener">D3.js</a>), and the pros and cons of each one. For me, this was “uncharted” territory, and if you feel the same way about charting libraries or data visualization in general, you’ll feel better after reading this.</p>
<p>Let’s begin!</p>
<h3 id="why-we-tried-bokeh-first">Why We Tried Bokeh First</h3>
<p>Our needs fell into two camps: <strong>speed</strong> and<strong> interactivity</strong>. Because we were handling larger quantities of data, our visualization had to be able to update at lightning speed (or at least at a speed that had no perceivable lag).</p>
<p>Our application also needed to have the desired interactivity that we envisioned for the user. In an ideal scenario, the library would already include some of these interactive functions that we could easily throw in, instead of having to write them from scratch.</p>
<p>Enter <a href="https://bokeh.pydata.org/en/latest/" rel="noopener">Bokeh</a>.</p>
<h4 id="about-bokeh"><strong>About Bokeh</strong></h4>
<p>Bokeh is a library primarily intended for creation of visualizations in the browser from large or streaming datasets. You create these visualizations using Python. Then Bokeh’s <a href="https://bokeh.pydata.org/en/latest/docs/dev_guide/bokehjs.html" rel="noopener">JavaScript API</a> takes in your Python script and renders the plots or charts in addition to handling the UI interactions in the browser.</p>
<p>You can also choose to use the Bokeh Server to handle streaming of your data. In the Bokeh 0.12.13 <a href="https://bokeh.pydata.org/en/latest/docs/user_guide/server.html" rel="noopener">documentation</a>, it states: “This capability to synchronize between python and the browser is the main purpose of the Bokeh Server.”</p>
<figcaption><a href="https://bokeh.pydata.org/en/latest/_images/bokeh_serve.svg" rel="noopener" target="_blank" title="">Source image</a></figcaption>
</figure>
<h4 id="advantages"><strong>Advantages</strong></h4>
<p>Bokeh is magical for a lot of reasons. It renders first using WebGL with a HTML5 Canvas fallback, provides several built-in tools to interact with charts, handles egregiously large data sets, and ultimately, creates something that can go on the web immediately.</p>
<p>The ability to navigate between Python and JavaScript is also incredibly powerful for charting because Python allows you to tap into useful data structure and data analysis tools, while JavaScript translates the manipulated data into browser-friendly visualizations.</p>
<h4 id="disadvantages"><strong>Disadvantages</strong></h4>
<p>One drawback to Bokeh, however, is that it is limited in the degree of interactivity that a visualization can have. Bokeh enables you to “chart” in the more conventional sense— it offers a 2-D, grid-like canvas with axes as the baseline. And that’s okay, because often that’s what the user needs and wants. Experienced Bokeh users can make really beautiful things (see examples <a href="https://bokeh.pydata.org/en/latest/docs/gallery/lorenz.html" rel="noopener">here</a>).</p>
<p>But if I wanted to make a visualization that went outside of the conventional characteristics of a chart, such as simulating forces between atoms and dragging the atoms around, I don’t know how I would accomplish that in Bokeh.</p>
<p>Bokeh is also intended for development in Python, not JavaScript. Below are examples of barcharts in Bokeh using Python. It’s super simple and clean.</p>
<p><em>Bokeh Barchart using Python (via Jupyter Notebook)</em></p>
<p>Before beginning to use Bokeh, we made the conscious decision to script in JavaScript instead of Python because our entire web application was and is built on a JavaScript framework. None of the Bokeh documentation is in JavaScript (it is in Python, as you would expect), and attempting to get under the JavaScript hood proved difficult.</p>
<p>If you are working with low-level glyphs, it is true that anything possible in Python is possible in JavaScript with Bokeh. <strong>However, if you are just starting to learn both languages like I was, translating syntax between the two is not intuitive.</strong></p>
<p>In addition, there are limitations to the high-level JavaScript <code>Bokeh.Charts</code> and <code>Bokeh.Plotting</code> APIs — some are deprecated, others make it really hard for you to change features of the plot. The examples below are my attempts at creating Bokeh plots in JavaScript.</p>
<p><em>Bokeh Low-level Barchart using Javascript</em></p>
<p><em>Bokeh High-level Barchart using Bokeh.Charts Javascript API</em></p>
<p>More on developing in JavaScript with Bokeh <a href="https://bokeh.pydata.org/en/latest/docs/user_guide/bokehjs.html" rel="noopener">here</a>. As you can you see, JavaScript with Bokeh’s library loses the simpler lines of code that we observed when developing with Python. I think it took around an hour of fiddling in the console to add a white outline to the bars and a title in my high-level chart, which reiterates my struggle of navigating outside the boundaries of the <code>Bokeh.Charts</code> JavaScript API when you want to change visual details of the chart.</p>
<p>Finally, there’s <strong>more documentation and active usage of other charting libraries</strong>, like <a href="https://d3js.org/" rel="noopener">D3.js</a> or <a href="https://threejs.org/" rel="noopener">three.js</a>, compared to Bokeh. With more active contributors and users of a library comes a<strong> </strong>higher probability of finding the solution you need to fix a specific bug.</p>
<figcaption><strong>61,501 </strong>results for D3 on Stack Overflow</figcaption>
</figure>
<figcaption><strong>24,126</strong> results for three.js on Stack Overflow</figcaption>
</figure>
<figcaption><strong>3,405</strong> results for Bokeh on Stack Overflow</figcaption>
</figure>
<p>— — — — — — — — — — — — — — — — — — — — — — — — — — — — — — —</p>
<h3 id="why-we-switched-to-d3">Why We Switched to D3</h3>
<p>So we were stuck. We had reached the point of “this library suits our needs sort of but it’s a pain to continue making things in JavaScript and maybe we’re going to hit the ceiling one day when we realize we need something that isn’t available in Bokeh right now.” Cool.</p>
<p>Enter <a href="https://d3js.org/" rel="noopener">D3</a>.</p>
<p>Our initial concern with D3 was that it would render our visualizations too slowly, given past experiences with rendering SVG’s in the browser with larger quantities of data. We also knew that the learning curve for D3 was significantly higher than Bokeh’s learning curve.</p>
<p>But we were still optimistic given D3’s popularity, the infinite amount of beautifully documented D3 applications, and our “Get Sh*t Done” attitude … so we decided to give it a try anyway.</p>
<figcaption>Get Shit Done by <a href="https://dribbble.com/shots/1685729-Get-Shit-Done" rel="noopener" target="_blank" title="">Tyler Somers</a></figcaption>
</figure>
<h4 id="about-d3"><strong>About D3</strong></h4>
<p>D3.js is a JavaScript library that emphasizes data-binding. It gives you the unique power to generate elements in the DOM and bind datum/data to elements simultaneously. With a completely data-driven library, you can add elements dynamically when adding or removing data points and transition between data sets. D3 also lends more control over the aesthetic and interactivity of the final result, which means you can get away with creating the most <a href="https://mviz.omid.al/" rel="noopener">bizarre/wonderful visualizations</a>.</p>
<h4 id="advantages-1"><strong>Advantages</strong></h4>
<p>To our surprise, the D3 visualizations we created with our datasets were very buttery. We quickly realized that D3 is structured specifically for quick rendering, despite the massive arrays we were passing in to the library.</p>
<p>Instead of passing in data points one by one and generating the respective SVG, which can be quite tedious, D3 allows you to bind your entire data set to your SVG’s before they exist. The SVG’s are then generated rapid-fire and associated with their respective data point all in one go.</p>
<p>It’s like a chef in the kitchen that receives a list of orders at once and can prep the food in an order that omits unnecessary wait time, rather than always waiting to receive the next order after preparing one dish.</p>
<figcaption>Visualization of data binding to DOM elements from Mike Bostock’s <a href="https://bost.ocks.org/mike/selection/" rel="noopener" target="_blank" title="">explanation on D3 selections</a></figcaption>
</figure>
<p>The best part about D3 is that it offers ample opportunity for smooth interactions and transitions between data sets. Because our ultimate goal was and is to empower the user, we wanted to create a visualization that would invite an individual to engage with it.</p>
<p>D3 is also meant for JavaScript development. There would be no more “digging underneath the hood” of the JavaScript API as we were doing with Bokeh. The barchart example I created using BokehJS previously in this article is shown below using the D3 library.</p>
<p><em>D3 Barchart</em></p>
<p>Yes, there are more complex lines of code compared the code required for a Bokeh chart. It took more time and energy to pick up. But you have complete control over <em>every</em> small detail of your chart, and it’s all documented somewhere online (probably via the creator, <a href="https://bl.ocks.org/mbostock" rel="noopener">Mike Bostock</a>). That’s pretty great.</p>
<p>Lastly, there has been extensive usage of D3 in recent years to visualize the <a href="http://fivethirtyeight.com/features/election-update-women-are-defeating-donald-trump/" rel="noopener">2017 US elections</a>, <a href="http://www.therefugeeproject.org/" rel="noopener">the movement of refugee populations</a>, <a href="https://hi.stamen.com/visualizing-infant-vaccination-rates-for-the-world-health-organization-d484789505b1" rel="noopener">infant vaccination rates for WHO</a>, and countless other trends and stories. As a result, D3 has garnered a <strong>significant</strong> amount of exposure and attention, which leads to more active users and new ways to use the library every day.</p>
<p>When choosing a library for the long haul and keeping in mind that your teammates will also need to learn it eventually, it is absolutely crucial to consider the library’s current and future community of contributors. A library with a continuously thriving community is ideal, and D3 seems to foster that type of community.</p>
<h4 id="disadvantages-1"><strong>Disadvantages</strong></h4>
<p>The initial learning curve is higher for D3 compared to Bokeh, assuming you’re developing in Python with Bokeh. JavaScript is more verbose than Python. However, if like us you were planning on developing in JavaScript, it’s worth trudging through the D3 tutorials.</p>
<p>It is <strong>hard</strong> understanding how selections work, what .enter() and .exit() even mean, and the <em>magic</em> that just happens with one simple line of code (.transition() anybody?). BUT — once you’ve wrapped your head around D3’s unique structure of assuming things exist before they exist, the possibilities are endless.</p>
<p>Ultimately, the benefits of D3 outweighed the effort and time of learning it, and we had a hunch that switching to D3 would be a good long-term investment.</p>
<h3 id="conclusion">Conclusion</h3>
<p>So there you have it! We are still actively using and learning D3 as we integrate the library into our application and our team. Though just because we are moving forward with D3 does not mean that we won’t use Bokeh for a different application in the future. There are pros and cons to every charting library, and it’s important to reflect constantly to determine whether you should continue with your current library or start exploring other options.</p>
<p>Before choosing a charting library, know your specific needs and don’t be afraid to dive headfirst into the uncharted waters of charting libraries with those needs in mind. If something does not work the first time around, try something new that seems promising.</p>
<p>It’s about exploring, documenting, and checking back in with yourself and your teammates to continue evolving the project in productive ways.</p>
<p>Onward!</p>
<figcaption>Source <a href="https://www.xkcd.com/688/" rel="noopener" target="_blank" title="">here</a></figcaption>
</figure>
<p>If you have any comments, corrections, suggestions, or just want to talk, feel free to e-mail me at mandicai@gmail.com. You can find some of my work at <a href="http://mandilicai.com/" rel="noopener">http://mandilicai.com/</a>.</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
