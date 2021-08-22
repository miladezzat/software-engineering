---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c9e01740569d1a4ca3ad4.jpg"
tags: [Python]
description: "As a web developer, there will be a point when you need to cr"
author: "Milad E. Fahmy"
title: "SimpleHTTPServer Explained: How to Send Files Using Python"
created: "2021-08-16T15:37:40+02:00"
modified: "2021-08-16T15:37:40+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-python ">
<header class="post-full-header">
<h1 class="post-full-title">SimpleHTTPServer Explained: How to Send Files Using Python</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c9e01740569d1a4ca3ad4.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9e01740569d1a4ca3ad4.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9e01740569d1a4ca3ad4.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9e01740569d1a4ca3ad4.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c9e01740569d1a4ca3ad4.jpg" alt="SimpleHTTPServer Explained: How to Send Files Using Python">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>As a web developer, there will be a point when you need to create your own local web server. </p><p>Maybe it's because you'll be on a flight and want to work on your project, far from internet service. Or perhaps you just want a quick way to access files from another computer on your home network. </p><p>Whenever and however the need arises, setting up a local HTTP server is a useful skill to have.</p><h3 id="what-is-an-http-server">What is an HTTP server?</h3><p>Simply put, an HTTP server or web server is a process running on a machine that listens for incoming requests and serves web pages. </p><p>For example, when you type in <code>https://www.freecodecamp.org/news/</code> into your browser, there's a server somewhere listening for that request. In response, it sends back data so your browser can render the freeCodeCamp Developer News page.</p><p>Of course there's a lot more happening behind the scenes, but for the purposes of this tutorial, that's all you really need to know.</p><h3 id="how-to-set-up-a-local-http-server">How to set up a local HTTP server</h3><ol><li><a href="/news/best-python-tutorial/#installation">Install Python</a></li><li>Open your command prompt or terminal and run <code>python -V</code></li><li>Go to your project's directory with <code>cd</code> on *nix or MacOS systems or <code>CD</code> for Windows</li><li>Run the following commands to start a local HTTP server:</li></ol><pre><code># If python -V returned 2.X.X
python -m SimpleHTTPServer
# If python -V returned 3.X.X
python3 -m http.server
# Note that on Windows you may need to run python -m http.server instead of python3 -m http.server</code></pre><p>You'll notice that both commands look very different – one calls <code>SimpleHTTPServer</code> and the other <code>http.server</code>. This is just because the <code>SimpleHTTPServer</code> module was rolled into Python's <code>http.server</code> in Python 3. They both work the same way.</p><p>Now when you go to <a href="http://localhost:8000/"><code>http://localhost:8000/</code></a> you should see a list of all the files in your directory. Then you can just click on the HTML file you want to view.</p><p>Just keep in mind that <code>SimpleHTTPServer</code> and <code>http.server</code> are only for testing things locally. They only do very basic security checks and shouldn't be used in production.</p><h3 id="how-to-send-files-locally">How to send files locally</h3><p>To set up a sort of quick and dirty NAS (Network Attached Storage) system:</p><ol><li>Make sure both computers are connected through same network via LAN or WiFi</li><li>Open your command prompt or terminal and run <code>python -V</code> to make sure Python is installed</li><li>Go to the directory whose file you want to share by using cd (change directory) command.</li><li>Go to the directory with the file you want to share using <code>cd</code> on *nix or MacOS systems or <code>CD</code> for Windows</li><li>Start your HTTP server with either <code>python -m SimpleHTTPServer</code> or <code>python3 -m http.server</code></li><li>Open new terminal and type <code>ifconfig</code> on *nix or MacOS or <code>ipconfig</code> on Windows to find your IP address</li></ol><p>Now on the second computer or device:</p><ol><li>Open browser and type in the IP address of the first machine, along with port 8000: <code>http://[ip address]:8000</code></li></ol><p>A page will open showing all the files in the directory being shared from the first computer. If the page is taking too long to load, you may need to adjust the firewall settings on the first computer.</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
