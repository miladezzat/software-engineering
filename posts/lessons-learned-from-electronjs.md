---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c9abd740569d1a4ca276a.jpg"
tags: [Electron]
description: In this article, I'll share how you can avoid some of the mis
author: "Milad E. Fahmy"
title: "Things I Wish I Knew Before Working with Electron.js"
created: "2021-08-15T19:29:39+02:00"
modified: "2021-08-15T19:29:39+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-electron tag-javascript tag-projects tag-lessons-learned ">
<header class="post-full-header">
<h1 class="post-full-title">Things I Wish I Knew Before Working with Electron.js</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c9abd740569d1a4ca276a.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9abd740569d1a4ca276a.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9abd740569d1a4ca276a.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9abd740569d1a4ca276a.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c9abd740569d1a4ca276a.jpg" alt="Things I Wish I Knew Before Working with Electron.js">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>In this article, I'll share how you can avoid some of the mistakes I made when learning about Electron.js ?‍♂️. I hope it helps!</p>
<p><strong>Note</strong>: This wont be a coding tutorial, but rather a discussion about my personal takeaways.</p>
<p>A couple of months back, I decided to focus more on building my side product, <a href="https://taggr.ai/"><em>taggr</em></a>. I was inspired to build it because of how many photos I have on my computer. </p>
<p>For those of us that keep a backup of their pictures, those collections often get so big and complex that they become a full-time job to manage. A mix of folders and sub-folders may contain instant messaging picture backups, hi-resolution pictures from your trip to Bali, your uncle's wedding, or last-year's bachelor party.</p>
<p>Always keeping such collections tidy is <strong>tedious</strong> (believe me, I have tried for years). It's also hard<strong> </strong>to discover the shots that you love the most, hidden deep within the folders. </p>
<p>So <a href="https://taggr.ai/"><em>taggr</em></a><em> </em>is a desktop app that solves that problem. It lets users <strong>rediscover</strong> their memories while keeping their <strong>privacy</strong>.</p>
<p>I am building <em><a href="https://taggr.ai/">taggr</a></em> as a cross-platform desktop application. Here I'll share some of the things I've learned about cross-platform app development with <a href="https://www.electronjs.org/" rel="noopener">Electron.js</a> that I wish I knew from the beginning. Let's get started!</p>
<h2 id="background">Background </h2>
<p>Before presenting my takeaways on this ongoing journey with Electron, I would like to give a little more background about myself and the requirements of <a href="https://taggr.ai/" rel="noopener"><em>taggr</em></a>.</p>
<p>Every developer comes from a different background, and so do the requirements of the applications they develop. </p>
<p>Contextualizing the choices I made for this project may help future developers select the right tools based on their needs and expertise (rather than what is hyped out there – GitHub ?, I am looking at you).</p>
<figcaption>JavaScript development in a nutshell. Source: <a href="https://giphy.com/gifs/train-hype-FY2ew2Zii9VOE" rel="noopener">giphy</a>.</figcaption>
</figure>
<p>As mentioned earlier, from the beginning I envisioned <a href="https://taggr.ai/" rel="noopener"><em>taggr</em></a> as a cross-platform application. The app would perform all the required pre-processing and machine-learning computations client-side due to the focus on privacy. </p>
<p>As a one-person show, I wanted to be able to write my app once and ship it to different systems without losing my sanity.</p>
<p>From my side, I am a front end engineer in love with the web and JavaScript. I previously worked with Java and C#, but I enjoy the flexibility that the web provides and its vibrant ecosystem. </p>
<p>Having experienced first hand the pain of using tools like <a href="https://wiki.eclipse.org/Rich_Client_Platform" rel="noopener">Eclipse RCP</a> to build client-side apps before, I knew I didn’t want to work with that tech again.</p>
<p>In short, my stack requirements for taggr boiled down to something like the following:</p>
<ul>
<li>It should provide <strong>cross-platform support,</strong> ideally at the framework level. ?</li>
<li>It should allow me to<strong> write the code once</strong>, and tweak for each platform if needed. ?️</li>
<li>It should enable <strong>access to machine-learning capabilities</strong>, regardless of the host environment, without specific runtimes to be installed. It should be painless to set up. ?</li>
<li>If feasible, it should <strong>use web technologies</strong>. It would be great to leverage my existing knowledge. ?</li>
</ul>
<p>As you can see, the requirements do not read as: <strong>I should use React with Redux, observables, and WebSockets</strong>. Those are lower-level implementation details, and they should be decided upon<em> when and if</em> the need arises. </p>
<p>Pick the right tool for the job rather than picking a stack from the beginning, disregarding the problems at hand.</p>
<p>So, after furious googling, I decided to give Electron a try. I hadn’t used that framework before, but I knew that many companies were using it successfully in products such as <a href="https://atom.io/" rel="noopener">Atom</a>, <a href="https://code.visualstudio.com/" rel="noopener">VS Code</a>, <a href="https://discord.com/" rel="noopener">Discord</a>, <a href="https://signal.org/#signal" rel="noopener">Signal</a>, <a href="https://slack.com/" rel="noopener">Slack</a> and more.</p>
<p>Open-source and with out-of-the-box compatibility with both the the JS and Node ecosystems (Electron is build using Chromium and Node), Electron.js was an attractive tool for the work at hand. </p>
<p>I won't go too much into detail regarding the rest of the stack, as I repeatedly changed core parts (persistence and view layers) when needed, and it falls out of the scope of this article. </p>
<p>However, I would like to mention <a href="https://www.tensorflow.org/js">Tensorflow.js</a>, which enables running training and deploying ML models directly in the browser (with WebGL) and Node (with C bindings), without installing specific runtimes for ML in the host.</p>
<p>So back to Electron – thinking it was perfect, the fun began. ??</p>
<p>Enough talk about the background. Let’s dive into the takeaways.</p>
<h2 id="1-start-small-and-slow-">1. Start small (and slow) ?</h2>
<p>This is not a new concept, but it's worth bringing up periodically. Just because there are a ton of awesome <a href="https://github.com/sindresorhus/awesome-electron#boilerplates" rel="noopener">starter projects</a> with Electron available, it doesn’t mean that you should pick one right away.</p>
<p><strong>Wait. What?</strong></p>
<blockquote>Slow is smooth, and smooth is fast. — Navy saying</blockquote>
<h3 id="with-convenience-comes-complexity">With convenience comes complexity</h3>
<p>While those starters include many useful integrations (Webpack, Babel, Vue, React, Angular, Express, Jest, Redux), they also have their issues. </p>
<p>As an Electron newbie, I decided to go for a lean template that included the basics for ‘creating, publishing, and installing Electron apps’ without the extra bells and whistles. Not even Webpack in the beginning.</p>
<p>I recommend starting with something similar to <a href="https://www.electronforge.io/">electron-forge</a> to get up and running quickly, You can<strong> </strong>set up your dependency graph and structure on top to learn the ropes of Electron. </p>
<p>When the issues come (and they will), you will be better off if you build your custom starter project rather than picking <a href="https://github.com/electron-react-boilerplate/electron-react-boilerplate/blob/master/package.json" rel="noopener">one</a> with +30 npm scripts and +180 dependencies to begin with.</p>
<p>That said, once you feel comfortable with Electron’s basis, feel free to step up the game with Webpack/React/Redux/TheNextHotFramework. I did it<strong> incrementally </strong>and when needed. Don’t add a realtime database to your todo app just because you read a cool article about it somewhere.</p>
<h2 id="2-mindfully-structure-your-app-">2. Mindfully structure your app ?‍♂️</h2>
<p>This one took a little longer to get right than I am happy to admit. ?</p>
<p>In the beginning, <strong>it may be tempting to mix up the UI and Backend code </strong>(file access, extended CPU operations), but things get complex quite fast. As my application grew in features, size, and complexity, maintaining one tangled UI+Backend codebase became more complicated and error-prone. Also, the coupling made it hard to test each part in isolation.</p>
<p>When building a desktop app that does more than an embedded webpage (DB access, file access, intensive CPU tasks…), I recommend <strong>slicing the app into modules</strong> and reducing the coupling. Unit testing becomes a breeze, and there is a clear path towards integration testing between the modules. For <a href="https://taggr.ai/" rel="noopener"><em>taggr</em></a><em>, </em>I loosely followed the structure proposed <a href="https://blog.axosoft.com/electron-things-to-know/" rel="noopener">here</a>.</p>
<p>On top of that, there is <strong>performance</strong>. The requirements and user expectations on this matter may vary wildly depending on the application that you are building. But blocking the main or render threads with expensive calls is never a good idea.</p>
<h2 id="3-design-with-the-threading-model-in-mind">3. Design with the threading model in mind ?</h2>
<p>I won’t go too much into detail here – I'm just mainly doubling down on what is awesomely explained in the <a href="https://www.electronjs.org/docs/tutorial/performance" rel="noopener">official docs</a>.</p>
<p>In the specific case of <a href="https://taggr.ai/" rel="noopener"><em>taggr</em></a>, there are many long-running CPU, GPU, and IO intensive operations. When executing those operations in Electron’s main or renderer thread, the FPS count dips from 60, making the UI feel sluggish.</p>
<p>Electron offers several alternatives to <strong>offload those operations from the main and renderer threads</strong>, such as <a href="https://developer.mozilla.org/en-US/docs/Web/API/Worker" rel="noopener">WebWorkers</a>, <a href="https://nodejs.org/api/worker_threads.html" rel="noopener">Node Worker Threads</a>, or <a href="https://www.electronjs.org/docs/api/browser-window" rel="noopener">BrowserWindow</a> instances. Each has its advantages and caveats, and the use case you face will determine which one is the best fit.</p>
<p>Regardless of which alternative you choose for offloading the operations out of the main and renderer threads (when needed), <strong>consider how the communication interface will be</strong>. It took me a while to come up with a interface I was satisfied with, as it heavily impacts how your application is structured and functions. I found helpfull to experiment with different approaches before picking one. </p>
<p>For example, if you think WebWorkers message passing interface may not be the easiest to debug around, give <a href="https://github.com/GoogleChromeLabs/comlink" rel="noopener">comlink</a> a try.</p>
<figcaption>Sponge Bob knows best. Source: <a href="https://giphy.com/embed/jV4wbvtJxdjnMriYmY" rel="noopener">giphy</a></figcaption>
</figure>
<h2 id="4-test-test-and-test-">4. Test ❌, test ❌, and test ✔️</h2>
<p>Old news, right? I wanted to add this as the last point, due to a couple of anecdotal ‘issues’ I recently faced. Strongly linked to the first and second points, building your custom starter project and making mistakes early on will save you precious debugging time further in the development.</p>
<p>If you followed my recommendations for splitting the app’s UI and Backend into modules with a clean interface between the two, setting up automated Unit and Integration tests should be easy. As the application matures, you may want to add support for <a href="https://www.electronjs.org/spectron" rel="noopener">e2e testing</a> too.</p>
<h3 id="gps-location-extraction-">GPS location extraction ?️</h3>
<p>Two days ago, while implementing the GPS location extraction feature for <a href="https://taggr.ai/" rel="noopener"><em>taggr</em></a><em>, </em>once the unit tests were green and the feature worked in development (with Webpack), I decided to try it in the production environment. </p>
<p>While the feature worked well in development, it failed miserably in production. The EXIF information from the pictures was read as binary and processed by a third-party library. While the binary information was correctly loaded in both environments (checked with <a href="https://www.lifewire.com/compare-two-text-files-linux-3861434" rel="noopener">diff</a>), the third party library failed when parsing such data in the production build. Excuse me, ??</p>
<p><strong>Solution</strong>: I found out that the encoding settings in the development and production environments set by Webpack were not the same. This caused the binary data to be parsed as UTF-8 in development but not in production. The issue was fixed by setting up the proper encoding headers in the HTML files loaded by Electron.</p>
<h3 id="funky-pictures">Funky pictures ?</h3>
<p>When manipulating and working with images, you may think that if a JPEG ‘just-works’ on your computer, it is a valid JPEG. <strong>Wrong</strong>.</p>
<p>While working with the Node image processing library <a href="https://sharp.pixelplumbing.com/" rel="noopener"><em>sharp</em></a>, resizing some JPEG images crashed the app. After looking closely, the cause was incorrect JPEG images generated by <a href="https://github.com/lovell/sharp/issues/1578" rel="noopener">Samsung firmware</a>. ?‍♂️</p>
<p><strong>Solution</strong>: setting up improved error boundaries in the app (ex. try-catch blocks), tweak the JPEG parsing module, and suspect of everything. ?️</p>
<h2 id="summary">Summary</h2>
<p>The Node and JavaScripts ecosystems are blooming, with many powerful tools being created and shared every day.</p>
<p>The amount of options makes it hard to choose a clear path to start building your new awesome Electron app. Regardless of your frameworks of choice, I would recommend focusing on the following:</p>
<ol>
<li><strong>Start small</strong> and add complexity incrementally.</li>
<li><strong>Mindfully structure your app</strong>, keeping backend, and UI concerns modularized.</li>
<li><strong>Design with the threading model in mind</strong>, even when building small apps.</li>
<li><strong>Test and test again</strong>, to catch most of the errors early on and save headaches.</li>
</ol>
<p>Thanks for sticking around until the end! ?</p>
<p><a href="https://taggr.ai/"><em>taggr</em></a> is a cross-platform desktop application that enables users to <strong>rediscover</strong> their digital <strong>memories</strong> while keeping their <strong>privacy</strong>. Open-alpha is coming soon to Linux, Windows, and Mac OS. So keep an eye on <a href="https://twitter.com/TaggrOfficial">Twitter</a> and <a href="https://www.instagram.com/taggrofficial/">Instagram</a>, where I post development updates, upcoming features, and news.</p>
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
