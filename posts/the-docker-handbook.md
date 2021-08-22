---
card: "/images/default.jpg"
tags: [Docker]
description: The concept of containerization itself is pretty old. But the
author: "Milad E. Fahmy"
title: "The Docker Handbook – 2021 Edition"
created: "2021-08-15T19:27:26+02:00"
modified: "2021-08-15T19:27:26+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-docker tag-containerization tag-docker-containers tag-docker-compose tag-containers tag-javascript ">
<header class="post-full-header">
<h1 class="post-full-title">The Docker Handbook – 2021 Edition</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2021/02/docker-1280x612-2021.png 300w,
/news/content/images/size/w600/2021/02/docker-1280x612-2021.png 600w,
/news/content/images/size/w1000/2021/02/docker-1280x612-2021.png 1000w,
/news/content/images/size/w2000/2021/02/docker-1280x612-2021.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2021/02/docker-1280x612-2021.png" alt="The Docker Handbook – 2021 Edition">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>The concept of containerization itself is pretty old. But the emergence of the <a href="https://docs.docker.com/get-started/overview/#docker-engine" rel="noopener noreferrer">Docker Engine</a> in 2013 has made it much easier to containerize your applications.</p>
<p>According to the <a href="https://insights.stackoverflow.com/survey/2020#overview" rel="noopener noreferrer">Stack Overflow Developer Survey - 2020</a>, <a href="https://docker.com/" rel="noopener noreferrer">Docker</a> is the <a href="https://insights.stackoverflow.com/survey/2020#technology-most-loved-dreaded-and-wanted-platforms-wanted5" rel="noopener noreferrer">#1 most wanted platform</a>, <a href="https://insights.stackoverflow.com/survey/2020#technology-most-loved-dreaded-and-wanted-platforms-loved5" rel="noopener noreferrer">#2 most loved platform</a>, and also the <a href="https://insights.stackoverflow.com/survey/2020#technology-platforms" rel="noopener noreferrer">#3 most popular platform</a>.</p>
<p>As in-demand as it may be, getting started can seem a bit intimidating at first. So in this book, we'll be learning everything from the basics to a more intermediate level of containerization. After going through the entire book, you should be able to:</p>
<ul>
<li>Containerize (almost) any application</li>
<li>Upload custom Docker Images to online registries</li>
<li>Work with multiple containers using Docker Compose</li>
</ul>
<h2 id="prerequisites">Prerequisites</h2>
<ul>
<li>Familiarity with the Linux Terminal</li>
<li>Familiarity with JavaScript (some later projects use JavaScript)</li>
</ul>
<h2 id="table-of-contents">Table of Contents</h2>
<ul>
<li><a href="#introduction-to-containerization-and-docker">Introduction to Containerization and Docker</a></li>
<li><a href="#how-to-install-docker">How to Install Docker</a>
<ul>
<li><a href="#how-to-install-docker-on-macos">How to Install Docker on macOS</a></li>
<li><a href="#how-to-install-docker-on-windows">How to Install Docker on Windows</a></li>
<li><a href="#how-to-install-docker-on-linux">How to Install Docker on Linux</a></li>
</ul>
</li>
<li><a href="#hello-world-in-docker-intro-to-docker-basics">Hello World in Docker - Intro to Docker Basics</a>
<ul>
<li><a href="#what-is-a-container">What is a Container?</a></li>
<li><a href="#what-is-a-docker-image">What is a Docker Image?</a></li>
<li><a href="#what-is-a-docker-registry">What is a Docker Registry?</a></li>
<li><a href="#docker-architecture-overview">Docker Architecture Overview</a></li>
<li><a href="#the-full-picture">The Full Picture</a></li>
</ul>
</li>
<li><a href="#docker-container-manipulation-basics">Docker Container Manipulation Basics</a>
<ul>
<li><a href="#how-to-run-a-container">How to Run a Container</a></li>
<li><a href="#how-to-publish-a-port">How to Publish a Port</a></li>
<li><a href="#how-to-use-detached-mode">How to Use Detached Mode</a></li>
<li><a href="#how-to-list-containers">How to List Containers</a></li>
<li><a href="#how-to-name-or-rename-a-container">How to Name or Rename a Container</a></li>
<li><a href="#how-to-stop-or-kill-a-running-container">How to Stop or Kill a Running Container</a></li>
<li><a href="#how-to-restart-a-container">How to Restart a Container</a></li>
<li><a href="#how-to-create-a-container-without-running">How to Create a Container Without Running</a></li>
<li><a href="#how-to-remove-dangling-containers">How to Remove Dangling Containers</a></li>
<li><a href="#how-to-run-a-container-in-interactive-mode">How to Run a Container in Interactive Mode</a></li>
<li><a href="#how-to-execute-commands-inside-a-container">How to Execute Commands Inside a Container</a></li>
<li><a href="#how-to-work-with-executable-images">How to Work With Executable Images</a></li>
</ul>
</li>
<li><a href="#docker-image-manipulation-basics">Docker Image Manipulation Basics</a>
<ul>
<li><a href="#how-to-create-a-docker-image">How to Create a Docker Image</a></li>
<li><a href="#how-to-tag-docker-images">How to Tag Docker Images</a></li>
<li><a href="#how-to-list-and-remove-docker-images">How to List and Remove Docker Images</a></li>
<li><a href="#how-to-understand-the-many-layers-of-a-docker-image">How to Understand the Many Layers of a Docker Image</a></li>
<li><a href="#how-to-build-nginx-from-source">How to Build NGINX from Source</a></li>
<li><a href="#how-to-optimize-docker-images">How to Optimize Docker Images</a></li>
<li><a href="#embracing-alpine-linux">Embracing Alpine Linux</a></li>
<li><a href="#how-to-create-executable-docker-images">How to Create Executable Docker Images</a></li>
<li><a href="#how-to-share-your-docker-images-online">How to Share Your Docker Images Online</a></li>
</ul>
</li>
<li><a href="#how-to-containerize-a-javascript-application">How to Containerize a JavaScript Application</a>
<ul>
<li><a href="#how-to-write-the-development-dockerfile">How to Write the Development Dockerfile</a></li>
<li><a href="#how-to-work-with-bind-mounts-in-docker">How to Work With Bind Mounts in Docker</a></li>
<li><a href="#how-to-work-with-anonymous-volumes-in-docker">How to Work With Anonymous Volumes in Docker</a></li>
<li><a href="#how-to-perform-multi-staged-builds-in-docker">How to Perform Multi-Staged Builds in Docker</a></li>
<li><a href="#how-to-ignore-unnecessary-files">How to Ignore Unnecessary Files</a></li>
</ul>
</li>
<li><a href="#network-manipulation-basics-in-docker">Network Manipulation Basics in Docker</a>
<ul>
<li><a href="#docker-network-basics">Docker Network Basics</a></li>
<li><a href="#how-to-create-a-user-defined-bridge-in-docker">How to Create a User-Defined Bridge in Docker</a></li>
<li><a href="#how-to-attach-a-container-to-a-network-in-docker">How to Attach a Container to a Network in Docker</a></li>
<li><a href="#how-to-detach-containers-from-a-network-in-docker">How to Detach Containers from a Network in Docker</a></li>
<li><a href="#how-to-get-rid-of-networks-in-docker">How to Get Rid of Networks in Docker</a></li>
</ul>
</li>
<li><a href="#how-to-containerize-a-multi-container-javascript-application">How to Containerize a Multi-Container JavaScript Application</a>
<ul>
<li><a href="#how-to-run-the-database-server">How to Run the Database Server</a></li>
<li><a href="#how-to-work-with-named-volumes-in-docker">How to Work with Named Volumes in Docker</a></li>
<li><a href="#how-to-access-logs-from-a-container-in-docker">How to Access Logs from a Container in Docker</a></li>
<li><a href="#how-to-create-a-network-and-attaching-the-database-server-in-docker">How to Create a Network and Attaching the Database Server in Docker</a></li>
<li><a href="#how-to-write-the-dockerfile">How to Write the Dockerfile</a></li>
<li><a href="#how-to-execute-commands-in-a-running-container">How to Execute Commands in a Running Container</a></li>
<li><a href="#how-to-write-management-scripts-in-docker">How to Write Management Scripts in Docker</a></li>
</ul>
</li>
<li><a href="#how-to-compose-projects-using-docker-compose">How to Compose Projects Using Docker-Compose</a>
<ul>
<li><a href="#docker-compose-basics">Docker Compose Basics</a></li>
<li><a href="#how-to-start-services-in-docker-compose">How to Start Services in Docker Compose</a></li>
<li><a href="#how-to-list-services-in-docker-compose">How to List Services in Docker Compose</a></li>
<li><a href="#how-to-execute-commands-inside-a-running-service-in-docker-compose">How to Execute Commands Inside a Running Service in Docker Compose</a></li>
<li><a href="#how-to-access-logs-from-a-running-service-in-docker-compose">How to Access Logs from a Running Service in Docker Compose</a></li>
<li><a href="#how-to-stop-services-in-docker-compose">How to Stop Services in Docker Compose</a></li>
<li><a href="#how-to-compose-a-full-stack-application-in-docker-compose">How to Compose a Full-stack Application in Docker Compose</a></li>
</ul>
</li>
<li><a href="#conclusion">Conclusion</a></li>
</ul>
<h2 id="project-code">Project Code</h2>
<p>Code for the example projects can be found in the following repository:</p>
<div class="kg-bookmark-content">
<div class="kg-bookmark-title">fhsinchy/docker-handbook-projects</div>
<div class="kg-bookmark-description">Project codes used in “The Docker Handbook” :notebook: - fhsinchy/docker-handbook-projects</div>
<div class="kg-bookmark-metadata"><img class="kg-bookmark-icon" src="https://github.githubassets.com/favicons/favicon.svg"><span class="kg-bookmark-author">fhsinchy</span><span class="kg-bookmark-publisher">GitHub</span></div>
</div>
<div class="kg-bookmark-thumbnail"><img src="https://repository-images.githubusercontent.com/277878515/d76adb00-c391-11ea-8ecb-718db51373b2"></div>
</a>
<figcaption>spare a ⭐ to keep me motivated</figcaption>
</figure>
<p>You can find the complete code in the <code>completed</code> branch.</p>
<h2 id="contributions">Contributions</h2>
<p>This book is completely open-source and quality contributions are more than welcome. You can find the full content in the following repository:</p>
<div class="kg-bookmark-content">
<div class="kg-bookmark-title">fhsinchy/the-docker-handbook</div>
<div class="kg-bookmark-description">Open-source book on Docker. Contribute to fhsinchy/the-docker-handbook development by creating an account on GitHub.</div>
<div class="kg-bookmark-metadata"><img class="kg-bookmark-icon" src="https://github.githubassets.com/favicons/favicon.svg"><span class="kg-bookmark-author">fhsinchy</span><span class="kg-bookmark-publisher">GitHub</span></div>
</div>
<div class="kg-bookmark-thumbnail"><img src="https://avatars.githubusercontent.com/u/22444207?s=400&amp;v=4"></div>
</a>
<figcaption>spare a ⭐ to keep me motivated</figcaption>
</figure>
<p>I usually do my changes and updates on the GitBook version of the book first and then publish them on freeCodeCamp. You can find the always updated and often unstable version of the book at the following link:</p>
<div class="kg-bookmark-content">
<div class="kg-bookmark-title">The Docker Handbook</div>
<div class="kg-bookmark-description"></div>
<div class="kg-bookmark-metadata"><img class="kg-bookmark-icon" src="https://d1j8pt39hxlh3d.cloudfront.net/emoji/emojione/5.0/png/unicode/32/1f4d9.png"><span class="kg-bookmark-publisher">The Docker Handbook</span></div>
</div>
<div class="kg-bookmark-thumbnail"><img src="https://app.gitbook.com/share/space/thumbnail/-MD_PXBw_anEnk5G-Lck.png"></div>
</a>
<figcaption>don't forget to leave ⭐ on the repository</figcaption>
</figure>
<p>If you're looking for a frozen but stable version of the book, then freeCodeCamp will be the best place to go:</p>
<div class="kg-bookmark-content">
<div class="kg-bookmark-title">The Docker Handbook</div>
<div class="kg-bookmark-description">The concept of containerization itself is pretty old, but the emergence of the Docker Engine [https://docs.docker.com/get-started/overview/#docker-engine] in2013 has made it much easier to containerize your applications. According to the Stack Overflow Developer Survey - 2020[https://insights.stackoverflow.com/survey/2020#overview…</div>
<div class="kg-bookmark-metadata"><img class="kg-bookmark-icon" src="https://www.freecodecamp.org/news/favicon.png"><span class="kg-bookmark-author">Farhan Hasin Chowdhury</span><span class="kg-bookmark-publisher">freeCodeCamp.org</span></div>
</div>
<div class="kg-bookmark-thumbnail"><img src="https://www.freecodecamp.org/news/content/images/2020/07/docker-handbook-preview.png"></div>
</a>
<figcaption>sharing with others may help</figcaption>
</figure>
<p>Whichever version of the book you end up reading though, don't forget to let me know your opinion. Constructive criticism is always welcomed.</p>
<h2 id="introduction-to-containerization-and-docker">Introduction to Containerization and Docker</h2>
<p>According to <a href="https://www.ibm.com/cloud/learn/containerization#toc-what-is-co-r25Smlqq" rel="noopener noreferrer">IBM</a>, </p>
<blockquote>Containerization involves encapsulating or packaging up software code and all its dependencies so that it can run uniformly and consistently on any infrastructure.</blockquote>
<p>‌In other words, containerization lets you bundle up your software along with all its dependencies in a self-contained package so that it can be run without going through a troublesome setup process.</p>
<p>‌Let's consider a real life scenario here. Assume you have developed an awesome book management application that can store information regarding all the books you own, and can also serve the purpose of a book lending system for your friends.</p>
<p>‌If you make a list of the dependencies, that list may look as follows:</p>
<ul>
<li>Node.js</li>
<li>Express.js</li>
<li>SQLite3</li>
</ul>
<p>Well, theoretically this should be it. But practically there are some other things as well. Turns out <a href="https://nodejs.org/" rel="noopener noreferrer">Node.js</a> uses a build tool known as <code>node-gyp</code> for building native add-ons. And according to the <a href="https://github.com/nodejs/node-gyp#installation" rel="noopener noreferrer">installation instruction</a> in the <a href="https://github.com/nodejs/node-gyp" rel="noopener noreferrer">official repository</a>, this build tool requires Python 2 or 3 and a proper C/C++ compiler tool-chain. </p>
<p>Taking all these into account, the final list of dependencies is as follows:</p>
<ul>
<li>Node.js</li>
<li>Express.js</li>
<li>SQLite3</li>
<li>Python 2 or 3</li>
<li>C/C++ tool-chain</li>
</ul>
<p>Installing Python 2 or 3 is pretty straightforward regardless of the platform you're on. Setting up the C/C++ tool-chain is pretty easy on Linux, but on Windows and Mac it's a painful task. </p>
<p>On Windows, the C++ build tools package measures at gigabytes and takes quite some time to install. On a Mac, you can either install the gigantic <a href="https://developer.apple.com/xcode/" rel="noopener noreferrer">Xcode</a> application or the much smaller <a href="https://developer.apple.com/downloads/" rel="noopener noreferrer">Command Line Tools for Xcode</a> package. </p>
<p>Regardless of the one you install, it still may break on OS updates. In fact, the problem is so prevalent that there are <a href="https://github.com/nodejs/node-gyp/blob/master/macOS_Catalina.md" rel="noopener noreferrer">Installation notes for macOS Catalina</a> available on the official repository.</p>
<p>Let's assume that you've gone through all the hassle of setting up the dependencies and have started working on the project. Does that mean you're out of danger now? Of course not.</p>
<p>What if you have a teammate who uses Windows while you're using Linux. Now you have to consider the inconsistencies of how these two different operating systems handle paths. Or the fact that popular technologies like <a href="https://nginx.org/" rel="noopener noreferrer">nginx</a> are not well optimized to run on Windows. Some technologies like <a href="https://redis.io/" rel="noopener noreferrer">Redis</a> don't even come pre-built for Windows.</p>
<p>Even if you get through the entire development phase, what if the person responsible for managing the servers follows the wrong deployment procedure?</p>
<p>All these issues can be solved if only you could somehow:</p>
<ul>
<li>Develop and run the application inside an isolated environment (known as a container) that matches your final deployment environment.</li>
<li>Put your application inside a single file (known as an image) along with all its dependencies and necessary deployment configurations.</li>
<li>And share that image through a central server (known as a registry) that is accessible by anyone with proper authorization.</li>
</ul>
<p>Your teammates will then be able to download the image from the registry, run the application as it is within an isolated environment free from the platform specific inconsistencies, or even deploy directly on a server, since the image comes with all the proper production configurations.</p>
<p>That is the idea behind containerization: putting your applications inside a self-contained package, making it portable and reproducible across various environments.</p>
<p><strong>Now the question is "What role does Docker play here?"</strong></p>
<p>As I've already explained, containerization is an idea that solves a myriad of problems in software development by putting things into boxes. </p>
<p>This very idea has quite a few implementations. <a href="https://www.docker.com/" rel="noopener noreferrer">Docker</a> is such an implementation. It's an open-source containerization platform that allows you to containerize your applications, share them using public or private registries, and also to <a href="https://docs.docker.com/get-started/orchestration/" rel="noopener noreferrer">orchestrate</a> them.</p>
<p>Now, Docker is not the only containerization tool on the market, it's just the most popular one. Another containerization engine that I love is called <a href="https://podman.io/" rel="noopener noreferrer">Podman</a> developed by Red Hat. Other tools like <a href="https://github.com/GoogleContainerTools/kaniko" rel="noopener noreferrer">Kaniko</a> by Google, <a href="https://coreos.com/rkt/" rel="noopener noreferrer">rkt</a> by CoreOS are amazing, but they're not ready to be a drop-in replacement for Docker just yet.</p>
<p>Also, if you want a history lesson, you may read the amazing <a href="https://blog.aquasec.com/a-brief-history-of-containers-from-1970s-chroot-to-docker-2016" rel="noopener noreferrer">A Brief History of Containers: From the 1970s Till Now</a> which covers most of the major turning points for the technology.</p>
<h2 id="how-to-install-docker">How to Install Docker</h2>
<p>Installation of Docker varies greatly depending on the operating system you’re using. But it's universally simple across the board. </p>
<p>Docker runs flawlessly on all three major platforms, Mac, Windows, and Linux. Among the three, the installation process on Mac is the easiest, so we'll start there.</p>
<h3 id="how-to-install-docker-on-macos">How to Install Docker on macOS</h3>
<p>On a mac, all you have to do is navigate to the official <a href="https://www.docker.com/products/docker-desktop" rel="noopener noreferrer">download page</a> and click the <em>Download for Mac (stable)</em> button. </p>
<p>You’ll get a regular looking <em>Apple Disk Image</em> file and inside the file, there will be the application. All you have to do is drag the file and drop it in your Applications directory.</p>
<p>You can start Docker by simply double-clicking the application icon. Once the application starts, you'll see the Docker icon appear on your menu-bar.</p>
<p>Now, open up the terminal and execute <code>docker --version</code> and <code>docker-compose --version</code> to ensure the success of the installation.</p>
<h3 id="how-to-install-docker-on-windows">How to Install Docker on Windows</h3>
<p>On Windows, the procedure is almost the same, except there are a few extra steps that you’ll need to go through. The installation steps are as follows:</p>
<ol>
<li>Navigate to <a href="https://docs.microsoft.com/en-us/windows/wsl/install-win10" rel="noopener noreferrer">this site</a> and follow the instructions for installing WSL2 on Windows 10.</li>
<li>Then navigate to the official <a href="https://www.docker.com/products/docker-desktop" rel="noopener noreferrer">download page</a> and click the <em>Download for Windows (stable)</em> button.</li>
<li>Double-click the downloaded installer and go through the installation with the defaults.</li>
</ol>
<p>Once the installation is done, start <em>Docker Desktop</em> either from the start menu or your desktop. The docker icon should show up on your taskbar.</p>
<p>Now, open up Ubuntu or whatever distribution you've installed from Microsoft Store. Execute the <code>docker --version</code> and <code>docker-compose --version</code> commands to make sure that the installation was successful.</p>
<p>You can access Docker from your regular Command Prompt or PowerShell as well. It's just that I prefer using WSL2 over any other command line on Windows.</p>
<h3 id="how-to-install-docker-on-linux">How to Install Docker on Linux</h3>
<p>Installing Docker on Linux is a bit of a different process, and depending on the distribution you’re on, it may vary even more. But to be honest, the installation is just as easy (if not easier) as the other two platforms.</p>
<p>The Docker Desktop package on Windows or Mac is a collection of tools like <code>Docker Engine</code>, <code>Docker Compose</code>, <code>Docker Dashboard</code>, <code>Kubernetes</code> and a few other goodies. </p>
<p>On Linux however, you don’t get such a bundle. Instead you install all the necessary tools you need manually. Installation procedures for different distributions are as follows:</p>
<ul>
<li>If you’re on Ubuntu, you may follow the <a href="https://docs.docker.com/engine/install/ubuntu/">Install Docker Engine on Ubuntu</a> section from the official docs.</li>
<li>For other distributions, <em>installation per distro</em> guides are available on the official docs.
<ul>
<li><a href="https://docs.docker.com/engine/install/debian/">Install Docker Engine on Debian</a></li>
<li><a href="https://docs.docker.com/engine/install/fedora/">Install Docker Engine on Fedora</a></li>
<li><a href="https://docs.docker.com/engine/install/centos/">Install Docker Engine on CentOS</a></li>
</ul>
</li>
<li>If you’re on a distribution that is not listed in the docs, you may follow the <a href="https://docs.docker.com/engine/install/binaries/">Install Docker Engine from binaries</a> guide instead.</li>
<li>Regardless of the procedure you follow, you’ll have to go through some <a href="https://docs.docker.com/engine/install/linux-postinstall/">Post-installation steps for Linux</a> which are very important.</li>
<li>Once you’re done with the docker installation, you’ll have to install another tool named Docker Compose. You may follow the <a href="https://docs.docker.com/compose/install/">Install Docker Compose</a> guide from the official docs.</li>
</ul>
<p>Once the installation is done, open up the terminal and execute <code>docker --version</code> and <code>docker-compose --version</code> to ensure the success of the installation.</p>
<p>Although Docker performs quite well regardless of the platform you’re on, I prefer Linux over the others. Throughout the book, I’ll be switching between my <a href="https://releases.ubuntu.com/20.10/" rel="noopener noreferrer">Ubuntu 20.10</a> and <a href="https://fedoramagazine.org/announcing-fedora-33/" rel="noopener noreferrer">Fedora 33</a> workstations.</p>
<p>Another thing that I would like to clarify right from the get go, is that I won't be using any GUI tool for working with Docker throughout the entire book.</p>
<p>I'm aware of the nice GUI tools available for different platforms, but learning the common docker commands is one of the primary goals of this book.</p>
<h2 id="hello-world-in-docker-intro-to-docker-basics">Hello World in Docker – Intro to Docker Basics</h2>
<p>Now that you have Docker up and running on your machine, it's time for you to run your first container. Open up the terminal and run the following command:</p><pre><code>docker run hello-world
# Unable to find image 'hello-world:latest' locally
# latest: Pulling from library/hello-world
# 0e03bdcc26d7: Pull complete
# Digest: sha256:4cf9c47f86df71d48364001ede3a4fcd85ae80ce02ebad74156906caff5378bc
# Status: Downloaded newer image for hello-world:latest
#
# Hello from Docker!
# This message shows that your installation appears to be working correctly.
#
# To generate this message, Docker took the following steps:
#  1. The Docker client contacted the Docker daemon.
#  2. The Docker daemon pulled the "hello-world" image from the Docker Hub.
#     (amd64)
#  3. The Docker daemon created a new container from that image which runs the
#     executable that produces the output you are currently reading.
#  4. The Docker daemon streamed that output to the Docker client, which sent it
#     to your terminal.
#
# To try something more ambitious, you can run an Ubuntu container with:
#  $ docker run -it ubuntu bash
#
# Share images, automate workflows, and more with a free Docker ID:
#  https://hub.docker.com/
#
# For more examples and ideas, visit:
#  https://docs.docker.com/get-started/
</code></pre>
<p>The <a href="https://hub.docker.com/_/hello-world" rel="noopener noreferrer">hello-world</a> image is an example of minimal containerization with Docker. It has a single program compiled from a <a href="https://github.com/docker-library/hello-world/blob/master/hello.c" rel="noopener noreferrer">hello.c</a> file responsible for printing out the message you're seeing on your terminal.</p>
<p>Now in your terminal, you can use the <code>docker ps -a</code> command to have a look at all the containers that are currently running or have run in the past:</p><pre><code>docker ps -a
# CONTAINER ID        IMAGE               COMMAND             CREATED             STATUS                     PORTS               NAMES
# 128ec8ceab71        hello-world         "/hello"            14 seconds ago      Exited (0) 13 seconds ago                      exciting_chebyshev</code></pre>
<p>In the output, a container named <code>exciting_chebyshev</code> was run with the container id of <code>128ec8ceab71</code> using the <code>hello-world</code> image. It has <code>Exited (0) 13 seconds ago</code> where the <code>(0)</code> exit code means no error was produced during the runtime of the container.</p>
<p>Now in order to understand what just happened behind the scenes, you'll have to get familiar with the Docker Architecture and three very fundamental concepts of containerization in general, which are as follows:</p>
<ul>
<li><a href="/news/@fhsinchy/s/the-docker-handbook/~/drafts/-MS1b3opwENd_9qH1jTO/hello-world-in-docker#container">Container</a></li>
<li><a href="/news/@fhsinchy/s/the-docker-handbook/~/drafts/-MS1b3opwENd_9qH1jTO/hello-world-in-docker#image">Image</a></li>
<li><a href="/news/@fhsinchy/s/the-docker-handbook/~/drafts/-MS1b3opwENd_9qH1jTO/hello-world-in-docker#registry">Registry</a></li>
</ul>
<p>I've listed the three concepts in alphabetical order and will begin my explanations with the first one on the list.</p>
<h3 id="what-is-a-container">What is a Container?</h3>
<p>In the world of containerization, there can not be anything more fundamental than the concept of a container.</p>
<p>The official Docker <a href="https://www.docker.com/resources/what-container" rel="noopener noreferrer">resources</a> site says - </p>
<blockquote>A container is an abstraction at the application layer that packages code and dependencies together. Instead of virtualizing the entire physical machine, containers virtualize the host operating system only.</blockquote>
<p>You may consider containers to be the next generation of virtual machines. </p>
<p>Just like virtual machines, containers are completely isolated environments from the host system as well as from each other. They are also a lot lighter than the traditional virtual machine, so a large number of containers can be run simultaneously without affecting the performance of the host system.‌</p>
<p>Containers and virtual machines are actually different ways of virtualizing your physical hardware. The main difference between these two is the method of virtualization.</p>
<p>Virtual machines are usually created and managed by a program known as a hypervisor, like <a href="https://www.virtualbox.org/" rel="noopener noreferrer">Oracle VM VirtualBox</a>, <a href="https://www.vmware.com/" rel="noopener noreferrer">VMware Workstation</a>, <a href="https://www.linux-kvm.org/" rel="noopener noreferrer">KVM</a>, <a href="https://docs.microsoft.com/en-us/virtualization/hyper-v-on-windows/about/" rel="noopener noreferrer">Microsoft Hyper-V </a>and so on. This hypervisor program usually sits between the host operating system and the virtual machines to act as a medium of communication.</p>
<p>Each virtual machine comes with its own guest operating system which is just as heavy as the host operating system. </p>
<p>The application running inside a virtual machine communicates with the guest operating system, which talks to the hypervisor, which then in turn talks to the host operating system to allocate necessary resources from the physical infrastructure to the running application.</p>
<p>As you can see, there is a long chain of communication between applications running inside virtual machines and the physical infrastructure. The application running inside the virtual machine may take only a small amount of resources, but the guest operating system adds a noticeable overhead.</p>
<p>Unlike a virtual machine, a container does the job of virtualization in a smarter way. Instead of having a complete guest operating system inside a container, it just utilizes the host operating system via the container runtime while maintaining isolation – just like a traditional virtual machine.</p>
<p>The container runtime, that is Docker, sits between the containers and the host operating system<strong> </strong>instead of a hypervisor. The containers then communicate with the container runtime which then communicates with the host operating system to get necessary resources from the physical infrastructure. </p>
<p>As a result of eliminating the entire guest operating system layer, containers are much lighter and less resource-hogging than traditional virtual machines.</p>
<p>As a demonstration of the point, look at the following code block:</p><pre><code>uname -a
# Linux alpha-centauri 5.8.0-22-generic #23-Ubuntu SMP Fri Oct 9 00:34:40 UTC 2020 x86_64 x86_64 x86_64 GNU/Linux
docker run alpine uname -a
# Linux f08dbbe9199b 5.8.0-22-generic #23-Ubuntu SMP Fri Oct 9 00:34:40 UTC 2020 x86_64 Linux</code></pre>
<p>In the code block above, I have executed the <code>uname -a</code> command on my host operating system to print out the kernel details. Then on the next line I've executed the same command inside a container running <a href="https://alpinelinux.org/" rel="noopener noreferrer">Alpine Linux</a>. </p>
<p>As you can see in the output, the container is indeed using the kernel from my host operating system. This goes to prove the point that containers virtualize the host operating system instead of having an operating system of their own.</p>
<p>If you're on a Windows machine, you'll find out that all the containers use the WSL2 kernel. It happens because WSL2 acts as the back-end for Docker on Windows. On macOS the default back-end is a VM running on <a href="https://github.com/moby/hyperkit" rel="noopener noreferrer">HyperKit</a> hypervisor.</p>
<h3 id="what-is-a-docker-image">What is a Docker Image?</h3>
<p>Images are multi-layered self-contained files that act as the template for creating containers. They are like a frozen, read-only copy of a container. Images can be exchanged through registries.</p>
<p>In the past, different container engines had different image formats. But later on, the <a href="https://opencontainers.org/" rel="noopener noreferrer">Open Container Initiative (OCI)</a> defined a standard specification for container images which is complied by the major containerization engines out there. This means that an image built with Docker can be used with another runtime like Podman without any additional hassle.</p>
<p>Containers are just images in running state. When you obtain an image from the internet and run a container using that image, you essentially create another temporary writable layer on top of the previous read-only ones. </p>
<p>This concept will become a lot clearer in upcoming sections of this book. But for now, just keep in mind that images are multi-layered read-only files carrying your application in a desired state inside them.</p>
<h3 id="what-is-a-docker-registry">What is a Docker Registry?</h3>
<p>You've already learned about two very important pieces of the puzzle, <em>Containers</em> and <em>Images</em>. The final piece is the <em>Registry</em>. </p>
<p>An image registry is a centralized place where you can upload your images and can also download images created by others. <a href="https://hub.docker.com/" rel="noopener noreferrer">Docker Hub</a> is the default public registry for Docker. Another very popular image registry is <a href="https://quay.io/" rel="noopener noreferrer">Quay</a> by Red Hat. </p>
<p>Throughout this book I'll be using Docker Hub as my registry of choice.</p>
<p>You can share any number of public images on Docker Hub for free. People around the world will be able to download them and use them freely. Images that I've uploaded are available on my profile (<a href="https://hub.docker.com/u/fhsinchy" rel="noopener noreferrer">fhsinchy</a>) page.</p>
<p>Apart from Docker Hub or Quay, you can also create your own image registry for hosting private images. There is also a local registry that runs within your computer that caches images pulled from remote registries.</p>
<h3 id="docker-architecture-overview">Docker Architecture Overview</h3>
<p>Now that you've become familiar with most of the fundamental concepts regarding containerization and Docker, it's time for you to understand how Docker as a software was designed.</p>
<p>The engine consists of three major components:</p>
<ol>
<li><strong>Docker Daemon:</strong> The daemon (<code>dockerd</code>) is a process that keeps running in the background and waits for commands from the client. The daemon is capable of managing various Docker objects.</li>
<li><strong>Docker Client:</strong> The client &nbsp;(<code>docker</code>) is a command-line interface program mostly responsible for transporting commands issued by users.</li>
<li><strong>REST API:</strong> The REST API acts as a bridge between the daemon and the client. Any command issued using the client passes through the API to finally reach the daemon.</li>
</ol>
<p>According to the official <a href="https://docs.docker.com/get-started/overview/#docker-architecture" rel="noopener noreferrer">docs</a>, </p>
<blockquote>"Docker uses a client-server architecture. The Docker <em>client</em> talks to the Docker <em>daemon</em>, which does the heavy lifting of building, running, and distributing your Docker containers".</blockquote>
<p>You as a user will usually execute commands using the client component. The client then use the REST API to reach out to the long running daemon and get your work done.</p>
<h3 id="the-full-picture">The Full Picture</h3>
<p>Okay, enough talking. Now it's time for you to understand how all these pieces of the puzzle you just learned about work in harmony. Before I dive into the explanation of what really happens when you run the <code>docker run hello-world</code> command, let me show you a little diagram I've made:</p>
<p>This image is a slightly modified version of the one found in the official <a href="https://docs.docker.com/engine/images/architecture.svg" rel="noopener noreferrer">docs</a>. The events that occur when you execute the command are as follows:</p>
<ol>
<li>You execute <code>docker run hello-world</code> command where <code>hello-world</code> is the name of an image.</li>
<li>Docker client reaches out to the daemon, tells it to get the <code>hello-world</code> image and run a container from that.</li>
<li>Docker daemon looks for the image within your local repository and realizes that it's not there, resulting in the <code>Unable to find image 'hello-world:latest' locally</code> that's printed on your terminal.</li>
<li>The daemon then reaches out to the default public registry which is Docker Hub and pulls in the latest copy of the <code>hello-world</code> image, indicated by the <code>latest: Pulling from library/hello-world</code> line in your terminal.</li>
<li>Docker daemon then creates a new container from the freshly pulled image.</li>
<li>Finally Docker daemon runs the container created using the <code>hello-world</code> image outputting the wall of text on your terminal.</li>
</ol>
<p>It's the default behavior of Docker daemon to look for images in the hub that are not present locally. But once an image has been fetched, it'll stay in the local cache. So if you execute the command again, you won't see the following lines in the output:</p><pre><code>Unable to find image 'hello-world:latest' locally
latest: Pulling from library/hello-world
0e03bdcc26d7: Pull complete
Digest: sha256:d58e752213a51785838f9eed2b7a498ffa1cb3aa7f946dda11af39286c3db9a9
Status: Downloaded newer image for hello-world:latest</code></pre>
<p>If there is a newer version of the image available on the public registry, the daemon will fetch the image again. That <code>:latest</code> is a tag. Images usually have meaningful tags to indicate versions or builds. You'll learn about this in greater detail later on.</p>
<h2 id="docker-container-manipulation-basics">Docker Container Manipulation Basics</h2>
<p>In the previous sections, you've learned about the building blocks of Docker and have also run a container using the <code>docker run</code> command. </p>
<p>In this section, you'll be learning about container manipulation in a lot more detail. Container manipulation is one of the most common task you'll be performing every single day, so having a proper understanding of the various commands is crucial.</p>
<p>Keep in mind, though, that this is not an exhaustive list of all the commands you can execute on Docker. I'll be talking only about the most common ones. Anytime you want to learn more about the available commands, just visit the official <a href="https://docs.docker.com/engine/reference/commandline/container/" rel="noopener noreferrer">reference</a> for the Docker command-line.</p>
<h3 id="how-to-run-a-container">How to Run a Container</h3>
<p>Previously you've used <code>docker run</code> to create and start a container using the <code>hello-world</code> image. The generic syntax for this command is as follows:</p><pre><code>docker run &lt;image name&gt;</code></pre>
<p>Although this is a perfectly valid command, there is a better way of dispatching commands to the <code>docker</code> daemon. </p>
<p>Prior to version <code>1.13</code>, Docker had only the previously mentioned command syntax. Later on, the command-line was <a href="https://www.docker.com/blog/whats-new-in-docker-1-13/" rel="noopener noreferrer">restructured</a> to have the following syntax:</p><pre><code>docker &lt;object&gt; &lt;command&gt; &lt;options&gt;</code></pre>
<p>In this syntax:</p>
<ul>
<li><code>object</code> indicates the type of Docker object you'll be manipulating. This can be a <code>container</code>, <code>image</code>, <code>network</code> or <code>volume</code> object.</li>
<li><code>command</code> indicates the task to be carried out by the daemon, that is the <code>run</code> command.</li>
<li><code>options</code> can be any valid parameter that can override the default behavior of the command, like the <code>--publish</code> option for port mapping.</li>
</ul>
<p>Now, following this syntax, the <code>run</code> command can be written as follows:</p><pre><code>docker container run &lt;image name&gt;</code></pre>
<p>The <code>image name</code> can be of any image from an online registry or your local system. As an example, you can try to run a container using the <a href="https://hub.docker.com/r/fhsinchy/hello-dock" rel="noopener noreferrer">fhsinchy/hello-dock</a> image. This image contains a simple <a href="https://vuejs.org/" rel="noopener noreferrer">Vue.js</a> application that runs on port 80 inside the container. </p>
<p>To run a container using this image, execute following command on your terminal:</p><pre><code>docker container run --publish 8080:80 fhsinchy/hello-dock
# /docker-entrypoint.sh: /docker-entrypoint.d/ is not empty, will attempt to perform configuration
# /docker-entrypoint.sh: Looking for shell scripts in /docker-entrypoint.d/
# /docker-entrypoint.sh: Launching /docker-entrypoint.d/10-listen-on-ipv6-by-default.sh
# 10-listen-on-ipv6-by-default.sh: Getting the checksum of /etc/nginx/conf.d/default.conf
# 10-listen-on-ipv6-by-default.sh: Enabled listen on IPv6 in /etc/nginx/conf.d/default.conf
# /docker-entrypoint.sh: Launching /docker-entrypoint.d/20-envsubst-on-templates.sh
# /docker-entrypoint.sh: Configuration complete; ready for start up</code></pre>
<p>The command is pretty self-explanatory. The only portion that may require some explanation is the <code>--publish 8080:80</code> portion which will be explained in the next sub-section.</p>
<h3 id="how-to-publish-a-port">How to Publish a Port</h3>
<p>Containers are isolated environments. Your host system doesn't know anything about what's going on inside a container. Hence, applications running inside a container remain inaccessible from the outside.</p>
<p>To allow access from outside of a container, you must publish the appropriate port inside the container to a port on your local network. The common syntax for the <code>--publish</code> or <code>-p</code> option is as follows:</p><pre><code>--publish &lt;host port&gt;:&lt;container port&gt;</code></pre>
<p>When you wrote <code>--publish 8080:80</code> in the previous sub-section, it meant any request sent to port 8080 of your host system will be forwarded to port 80 inside the container‌.</p>
<p>Now to access the application on your browser, visit <code>http://127.0.0.1:8080</code>.</p>
<p>You can stop the container by simply hitting the <code>ctrl + c</code> key combination while the terminal window is in focus or closing off the terminal window completely.</p>
<h3 id="how-to-use-detached-mode">How to Use Detached Mode</h3>
<p>Another very popular option of the <code>run</code> command is the <code>--detach</code> or <code>-d</code> option. In the example above, in order for the container to keep running, you had to keep the terminal window open. Closing the terminal window also stopped the running container.</p>
<p>This is because, by default, containers run in the foreground and attach themselves to the terminal like any other normal program invoked from the terminal. </p>
<p>In order to override this behavior and keep a container running in background, you can include the <code>--detach</code> option with the <code>run</code> command as follows:</p><pre><code>docker container run --detach --publish 8080:80 fhsinchy/hello-dock
# 9f21cb77705810797c4b847dbd330d9c732ffddba14fb435470567a7a3f46cdc</code></pre>
<p>Unlike the previous example, you won't get a wall of text thrown at you this time. Instead what you'll get is the ID of the newly created container.</p>
<p>The order of the options you provide doesn't really matter. If you put the <code>--publish</code> option before the <code>--detach</code> option, it'll work just the same. One thing that you have to keep in mind in case of the <code>run</code> command is that the image name must come last. If you put anything after the image name then that'll be passed as an argument to the container entry-point (explained in the <a href="#executing-commands-inside-a-container">Executing Commands Inside a Container</a> sub-section) and may result in unexpected situations.</p>
<h3 id="how-to-list-containers">How to List Containers</h3>
<p>The <code>container ls</code> command can be used to list out containers that are currently running. To do so execute following command:</p><pre><code>docker container ls
# CONTAINER ID        IMAGE                 COMMAND                  CREATED             STATUS              PORTS                  NAMES
# 9f21cb777058        fhsinchy/hello-dock   "/docker-entrypoint.…"   5 seconds ago       Up 5 seconds        0.0.0.0:8080-&gt;80/tcp   gifted_sammet</code></pre>
<p>A container named <code>gifted_sammet</code> is running. It was created <code>5 seconds ago</code> and the status is <code>Up 5 seconds,</code> which indicates that the container has been running fine since its creation.</p>
<p>The <code>CONTAINER ID</code> is <code>9f21cb777058</code> which is the first 12 characters of the full container ID. The full container ID is <code>9f21cb77705810797c4b847dbd330d9c732ffddba14fb435470567a7a3f46cdc</code> which is 64 characters long. This full container ID was printed as the output of the <code>docker container run</code> command in the previous section.</p>
<p>Listed under the <code>PORTS</code> column, port 8080 from your local network is pointing towards port 80 inside the container. The name <code>gifted_sammet</code> is generated by Docker and can be something completely different in your computer.</p>
<p>The <code>container ls</code> command only lists the containers that are currently running on your system. In order to list out the containers that have run in the past you can use the <code>--all</code> or <code>-a</code> option.</p><pre><code>docker container ls --all
# CONTAINER ID        IMAGE                 COMMAND                  CREATED             STATUS                     PORTS                  NAMES
# 9f21cb777058        fhsinchy/hello-dock   "/docker-entrypoint.…"   2 minutes ago       Up 2 minutes               0.0.0.0:8080-&gt;80/tcp   gifted_sammet
# 6cf52771dde1        fhsinchy/hello-dock   "/docker-entrypoint.…"   3 minutes ago       Exited (0) 3 minutes ago                          reverent_torvalds
# 128ec8ceab71        hello-world           "/hello"                 4 minutes ago       Exited (0) 4 minutes ago                          exciting_chebyshev</code></pre>
<p>As you can see, the second container in the list <code>reverent_torvalds</code> was created earlier and has exited with the status code 0, which indicates that no error was produced during the runtime of the container.</p>
<h3 id="how-to-name-or-rename-a-container">How to Name or Rename a Container</h3>
<p>By default, every container has two identifiers. They are as follows:</p>
<ul>
<li><code>CONTAINER ID</code> - a random 64 character-long string.</li>
<li><code>NAME</code> - combination of two random words, joined with an underscore.</li>
</ul>
<p>Referring to a container based on these two random identifiers is kind of inconvenient. It would be great if the containers could be referred to using a name defined by you.</p>
<p>Naming a container can be achieved using the <code>--name</code> option. To run another container using the <code>fhsinchy/hello-dock</code> image with the name <code>hello-dock-container</code> you can execute the following command:</p><pre><code>docker container run --detach --publish 8888:80 --name hello-dock-container fhsinchy/hello-dock
# b1db06e400c4c5e81a93a64d30acc1bf821bed63af36cab5cdb95d25e114f5fb</code></pre>
<p>The 8080 port on local network is occupied by the <code>gifted_sammet</code> container (the container created in the previous sub-section). That's why you'll have to use a different port number, like 8888. Now to verify, run the <code>container ls</code> command:</p><pre><code>docker container ls
# CONTAINER ID        IMAGE                 COMMAND                  CREATED             STATUS              PORTS                  NAMES
# b1db06e400c4        fhsinchy/hello-dock   "/docker-entrypoint.…"   28 seconds ago      Up 26 seconds       0.0.0.0:8888-&gt;80/tcp   hello-dock-container
# 9f21cb777058        fhsinchy/hello-dock   "/docker-entrypoint.…"   4 minutes ago       Up 4 minutes        0.0.0.0:8080-&gt;80/tcp   gifted_sammet</code></pre>
<p>A new container with the name of <code>hello-dock-container</code> has been started.</p>
<p>You can even rename old containers using the <code>container rename</code> command. Syntax for the command is as follows:</p><pre><code>docker container rename &lt;container identifier&gt; &lt;new name&gt;</code></pre>
<p>To rename the <code>gifted_sammet</code> container to <code>hello-dock-container-2</code>, execute following command:</p><pre><code>docker container rename gifted_sammet hello-dock-container-2</code></pre>
<p>The command doesn't yield any output but you can verify that the changes have taken place using the <code>container ls</code> command. The <code>rename</code> command works for containers both in running state and stopped state.</p>
<h3 id="how-to-stop-or-kill-a-running-container">How to Stop or Kill a Running Container</h3>
<p>Containers running in the foreground can be stopped by simply closing the terminal window or hitting <code>ctrl + c</code>. Containers running in the background, however, can not be stopped in the same way.</p>
<p>There are two commands that deal with this task. The first one is the <code>container stop</code> command. Generic syntax for the command is as follows:</p><pre><code>docker container stop &lt;container identifier&gt;</code></pre>
<p>Where <code>container identifier</code> can either be the id or the name of the container. </p>
<p>I hope that you remember the container you started in the previous section. It's still running in the background. Get the identifier for that container using <code>docker container ls</code> (I'll be using <code>hello-dock-container</code> container for this demo). Now execute the following command to stop the container:</p><pre><code>docker container stop hello-dock-container
# hello-dock-container</code></pre>
<p>If you use the name as identifier, you'll get the name thrown back to you as output. The <code>stop</code> command shuts down a container gracefully by sending a <code>SIGTERM</code> signal. If the container doesn't stop within a certain period, a <code>SIGKILL</code> signal is sent which shuts down the container immediately.</p>
<p>In cases where you want to send a <code>SIGKILL</code> signal instead of a <code>SIGTERM</code> signal, you may use the <code>container kill</code> command instead. The <code>container kill</code> command follows the same syntax as the <code>stop</code> command.</p><pre><code>docker container kill hello-dock-container-2
# hello-dock-container-2</code></pre>
<h3 id="how-to-restart-a-container">How to Restart a Container</h3>
<p>When I say restart I mean two scenarios specifically. They are as follows:</p>
<ul>
<li>Restarting a container that has been previously stopped or killed.</li>
<li>Rebooting a running container.</li>
</ul>
<p>As you've already learned from a previous sub-section, stopped containers remain in your system. If you want you can restart them. The <code>container start</code> command can be used to start any stopped or killed container. The syntax of the command is as follows:</p><pre><code>docker container start &lt;container identifier&gt;</code></pre>
<p>You can get the list of all containers by executing the <code>container ls --all</code> command. Then look for the containers with <code>Exited</code> status.</p><pre><code>docker container ls --all
# CONTAINER ID        IMAGE                 COMMAND                  CREATED             STATUS                        PORTS               NAMES
# b1db06e400c4        fhsinchy/hello-dock   "/docker-entrypoint.…"   3 minutes ago       Exited (0) 47 seconds ago                         hello-dock-container
# 9f21cb777058        fhsinchy/hello-dock   "/docker-entrypoint.…"   7 minutes ago       Exited (137) 17 seconds ago                       hello-dock-container-2
# 6cf52771dde1        fhsinchy/hello-dock   "/docker-entrypoint.…"   7 minutes ago       Exited (0) 7 minutes ago                          reverent_torvalds
# 128ec8ceab71        hello-world           "/hello"                 9 minutes ago       Exited (0) 9 minutes ago                          exciting_chebyshev</code></pre>
<p>Now to restart the <code>hello-dock-container</code> container, you may execute the following command:</p><pre><code>docker container start hello-dock-container
# hello-dock-container</code></pre>
<p>Now you can ensure that the container is running by looking at the list of running containers using the <code>container ls</code> command. </p>
<p>The <code>container start</code> command starts any container in detached mode by default and retains any port configurations made previously. So if you visit <code>http://127.0.0.1:8080</code> now, you should be able to access the <code>hello-dock</code> application just like before.</p>
<p>Now, in scenarios where you would like to reboot a running container you may use the <code>container restart</code> command. The <code>container restart</code> command follows the exact syntax as the <code>container start</code> command.</p><pre><code>docker container restart hello-dock-container-2
# hello-dock-container-2</code></pre>
<p>The main difference between the two commands is that the <code>container restart</code> command attempts to stop the target container and then starts it back up again, whereas the start command just starts an already stopped container.</p>
<p>In case of a stopped container, both commands are exactly the same. But in case of a running container, you must use the <code>container restart</code> command.</p>
<h3 id="how-to-create-a-container-without-running">How to Create a Container Without Running</h3>
<p>So far in this section, you've started containers using the <code>container run</code> command which is in reality a combination of two separate commands. These commands are as follows:</p>
<ul>
<li><code>container create</code> command creates a container from a given image.</li>
<li><code>container start</code> command starts a container that has been already created.</li>
</ul>
<p>Now, to perform the demonstration shown in the <a href="#running-containers">Running Containers</a> section using these two commands, you can do something like the following:</p><pre><code>docker container create --publish 8080:80 fhsinchy/hello-dock
# 2e7ef5098bab92f4536eb9a372d9b99ed852a9a816c341127399f51a6d053856
docker container ls --all
# CONTAINER ID        IMAGE                 COMMAND                  CREATED             STATUS              PORTS               NAMES
# 2e7ef5098bab        fhsinchy/hello-dock   "/docker-entrypoint.…"   30 seconds ago      Created                                 hello-dock</code></pre>
<p>Evident by the output of the <code>container ls --all</code> command, a container with the name of <code>hello-dock</code> has been created using the <code>fhsinchy/hello-dock</code> image. The <code>STATUS</code> of the container is <code>Created</code> at the moment, and, given that it's not running, it won't be listed without the use of the <code>--all</code> option. </p>
<p>Once the container has been created, it can be started using the <code>container start</code> command.</p><pre><code>docker container start hello-dock
# hello-dock
docker container ls
# CONTAINER ID        IMAGE                 COMMAND                  CREATED              STATUS              PORTS                  NAMES
# 2e7ef5098bab        fhsinchy/hello-dock   "/docker-entrypoint.…"   About a minute ago   Up 29 seconds       0.0.0.0:8080-&gt;80/tcp   hello-dock</code></pre>
<p>The container <code>STATUS</code> has changed from <code>Created</code> to <code>Up 29 seconds</code> which indicates that the container is now in running state. The port configuration has also shown up in the <code>PORTS</code> column which was previously empty.‌</p>
<p>Although you can get away with the <code>container run</code> command for the majority of the scenarios, there will be some situations later on in the book that require you to use this <code>container create</code> command.</p>
<h3 id="how-to-remove-dangling-containers">How to Remove Dangling Containers</h3>
<p>As you've already seen, containers that have been stopped or killed remain in the system. These dangling containers can take up space or can conflict with newer containers.</p>
<p>In order to remove a stopped container you can use the <code>container rm</code> command. The generic syntax is as follows:</p><pre><code>docker container rm &lt;container identifier&gt;</code></pre>
<p>To find out which containers are not running, use the <code>container ls --all</code> command and look for containers with <code>Exited</code> status.</p><pre><code>docker container ls --all
# CONTAINER ID        IMAGE                 COMMAND                  CREATED             STATUS                      PORTS                  NAMES
# b1db06e400c4        fhsinchy/hello-dock   "/docker-entrypoint.…"   6 minutes ago       Up About a minute           0.0.0.0:8888-&gt;80/tcp   hello-dock-container
# 9f21cb777058        fhsinchy/hello-dock   "/docker-entrypoint.…"   10 minutes ago      Up About a minute           0.0.0.0:8080-&gt;80/tcp   hello-dock-container-2
# 6cf52771dde1        fhsinchy/hello-dock   "/docker-entrypoint.…"   10 minutes ago      Exited (0) 10 minutes ago                          reverent_torvalds
# 128ec8ceab71        hello-world           "/hello"                 12 minutes ago      Exited (0) 12 minutes ago                          exciting_chebyshev</code></pre>
<p>As can be seen in the output, the containers with ID <code>6cf52771dde1</code> and <code>128ec8ceab71</code> are not running. To remove the <code>6cf52771dde1</code> you can execute the following command:</p><pre><code>docker container rm 6cf52771dde1
# 6cf52771dde1</code></pre>
<p>You can check if the container was deleted or not by using the <code>container ls</code> command. You can also remove multiple containers at once by passing their identifiers one after another separated by spaces.</p>
<p>Or, instead of removing individual containers, if you want to remove all dangling containers at one go, you can use the <code>container prune</code> command.</p>
<p>You can check the container list using the <code>container ls --all</code> command to make sure that the dangling containers have been removed:</p><pre><code>docker container ls --all
# CONTAINER ID        IMAGE                 COMMAND                  CREATED             STATUS              PORTS                  NAMES
# b1db06e400c4        fhsinchy/hello-dock   "/docker-entrypoint.…"   8 minutes ago       Up 3 minutes        0.0.0.0:8888-&gt;80/tcp   hello-dock-container
# 9f21cb777058        fhsinchy/hello-dock   "/docker-entrypoint.…"   12 minutes ago      Up 3 minutes        0.0.0.0:8080-&gt;80/tcp   hello-dock-container-2</code></pre>
<p>If you are following the book exactly as written so far, you should only see the <code>hello-dock-container</code> and <code>hello-dock-container-2</code> in the list. I would suggest stopping and removing both containers before going on to the next section.</p>
<p>There is also the <code>--rm</code> option for the <code>container run</code> &nbsp;and <code>container start</code> commands which indicates that you want the containers removed as soon as they're stopped. To start another <code>hello-dock</code> container with the <code>--rm</code> option, execute the following command:</p><pre><code>docker container run --rm --detach --publish 8888:80 --name hello-dock-volatile fhsinchy/hello-dock
# 0d74e14091dc6262732bee226d95702c21894678efb4043663f7911c53fb79f3</code></pre>
<p>You can use the <code>container ls</code> command to verify that the container is running:</p><pre><code>docker container ls
# CONTAINER ID   IMAGE                 COMMAND                  CREATED              STATUS              PORTS                  NAMES
# 0d74e14091dc   fhsinchy/hello-dock   "/docker-entrypoint.…"   About a minute ago   Up About a minute   0.0.0.0:8888-&gt;80/tcp   hello-dock-volatile</code></pre>
<p>Now if you stop the container and then check again with the <code>container ls --all</code> command:</p><pre><code>docker container stop hello-dock-volatile
# hello-dock-volatile
docker container ls --all
# CONTAINER ID   IMAGE     COMMAND   CREATED   STATUS    PORTS     NAMES</code></pre>
<p>The container has been removed automatically. From now on I'll use the <code>--rm</code> option for most of the containers. I'll explicitly mention where it's not needed.</p>
<h3 id="how-to-run-a-container-in-interactive-mode">How to Run a Container in Interactive Mode</h3>
<p>So far you've only run containers created from either the <a href="https://hub.docker.com/_/hello-world" rel="noopener noreferrer">hello-world</a> image or the <a href="https://hub.docker.com/r/fhsinchy/hello-dock" rel="noopener noreferrer">fhsinchy/hello-dock</a> image. These images are made for executing simple programs that are not interactive.</p>
<p>Well, all images are not that simple. Images can encapsulate an entire Linux distribution inside them. </p>
<p>Popular distributions such as <a href="https://ubuntu.com/" rel="noopener noreferrer">Ubuntu</a>, <a href="https://fedora.org/" rel="noopener noreferrer">Fedora</a>, and <a href="https://debian.org/" rel="noopener noreferrer">Debian</a> all have official Docker images available in the hub. Programming languages such as <a href="https://hub.docker.com/_/python" rel="noopener noreferrer">python</a>, <a href="https://hub.docker.com/_/php" rel="noopener noreferrer">php</a>, <a href="https://hub.docker.com/_/golang" rel="noopener noreferrer">go</a> or run-times like <a href="https://hub.docker.com/_/node" rel="noopener noreferrer">node</a> and <a href="https://hub.docker.com/r/hayd/deno" rel="noopener noreferrer">deno</a> all have their official images.</p>
<p>These images do not just run some pre-configured program. These are instead configured to run a shell by default. In case of the operating system images it can be something like <code>sh</code> or <code>bash</code> and in case of the programming languages or run-times, it is usually their default language shell.</p>
<p>As you may have already learned from your previous experiences with computers, shells are interactive programs. An image configured to run such a program is an interactive image. These images require a special <code>-it</code> option to be passed in the <code>container run</code> command.</p>
<p>As an example, if you run a container using the <code>ubuntu</code> image by executing <code>docker container run ubuntu</code> you'll see nothing happens. But if you execute the same command with the <code>-it</code> option, you should land directly on bash inside the Ubuntu container.</p><pre><code>docker container run --rm -it ubuntu
# root@dbb1f56b9563:/# cat /etc/os-release
# NAME="Ubuntu"
# VERSION="20.04.1 LTS (Focal Fossa)"
# ID=ubuntu
# ID_LIKE=debian
# PRETTY_NAME="Ubuntu 20.04.1 LTS"
# VERSION_ID="20.04"
# HOME_URL="https://www.ubuntu.com/"
# SUPPORT_URL="https://help.ubuntu.com/"
# BUG_REPORT_URL="https://bugs.launchpad.net/ubuntu/"
# PRIVACY_POLICY_URL="https://www.ubuntu.com/legal/terms-and-policies/privacy-policy"
# VERSION_CODENAME=focal
# UBUNTU_CODENAME=focal</code></pre>
<p>As you can see from the output of the <code>cat /etc/os-release</code> command, I am indeed interacting with the bash running inside the Ubuntu container.</p>
<p>The <code>-it</code> option sets the stage for you to interact with any interactive program inside a container. This option is actually two separate options mashed together.</p>
<ul>
<li>The <code>-i</code> or <code>--interactive</code> option connects you to the input stream of the container, so that you can send inputs to bash.</li>
<li>The <code>-t</code> or <code>--tty</code> option makes sure that you get some good formatting and a native terminal-like experience by allocating a pseudo-tty.</li>
</ul>
<p>You need to use the <code>-it</code> option whenever you want to run a container in interactive mode. Another example can be running the <code>node</code> image as follows:</p><pre><code>docker container run -it node
# Welcome to Node.js v15.0.0.
# Type ".help" for more information.
# &gt; ['farhan', 'hasin', 'chowdhury'].map(name =&gt; name.toUpperCase())
# [ 'FARHAN', 'HASIN', 'CHOWDHURY' ]</code></pre>
<p>Any valid JavaScript code can be executed in the node shell. Instead of writing <code>-it</code> you can be more verbose by writing <code>--interactive --tty</code> separately.</p>
<h3 id="how-to-execute-commands-inside-a-container">How to Execute Commands Inside a Container</h3>
<p>In the <a href="/news/@fhsinchy/s/the-docker-handbook/~/drafts/-MS1b3opwENd_9qH1jTO/hello-world-in-docker">Hello World in Docker</a> section of this book, you've seen me executing a command inside an Alpine Linux container. It went something like this:</p><pre><code>docker run alpine uname -a
# Linux f08dbbe9199b 5.8.0-22-generic #23-Ubuntu SMP Fri Oct 9 00:34:40 UTC 2020 x86_64 Linux</code></pre>
<p>In this command, I've executed the <code>uname -a</code> command inside an Alpine Linux container. Scenarios like this (where all you want to do is to execute a certain command inside a certain container) are pretty common.</p>
<p>Assume that you want encode a string using the <code>base64</code> program. This is something that's available in almost any Linux or Unix based operating system (but not on Windows). </p>
<p>In this situation you can quickly spin up a container using images like <a href="https://hub.docker.com/_/busybox" rel="noopener noreferrer">busybox</a> and let it do the job.</p>
<p>The generic syntax for encoding a string using <code>base64</code> is as follows:</p><pre><code>echo -n my-secret | base64
# bXktc2VjcmV0</code></pre>
<p>And the generic syntax for passing a command to a container that is not running is as follows:</p><pre><code>docker container run &lt;image name&gt; &lt;command&gt;</code></pre>
<p>To perform the base64 encoding using the busybox image, you can execute the following command:</p><pre><code>docker container run --rm busybox sh -c "echo -n my-secret | base64
# bXktc2VjcmV0</code></pre>
<p>What happens here is that, in a <code>container run</code> command, whatever you pass after the image name gets passed to the default entry point of the image. </p>
<p>An entry point is like a gateway to the image. Most of the images except the executable images (explained in the <a href="/news/@fhsinchy/s/the-docker-handbook/~/drafts/-MS1b3opwENd_9qH1jTO/container-manipulation-basics#working-with-executable-images">Working With Executable Images</a> sub-section) use shell or <code>sh</code> as the default entry-point. So any valid shell command can be passed to them as arguments.</p>
<h3 id="how-to-work-with-executable-images">How to Work With Executable Images</h3>
<p>In the previous section, I briefly mentioned executable images. These images are designed to behave like executable programs.</p>
<p>Take for example my <a href="https://github.com/fhsinchy/rmbyext" rel="noopener noreferrer">rmbyext</a> project. This is a simple Python script capable of recursively deleting files of given extensions. To learn more about the project, you can checkout the repository:</p>
<div class="kg-bookmark-content">
<div class="kg-bookmark-title">fhsinchy/rmbyext</div>
<div class="kg-bookmark-description">Recursively removes all files with given extension(s). - fhsinchy/rmbyext</div>
<div class="kg-bookmark-metadata"><img class="kg-bookmark-icon" src="https://github.githubassets.com/favicons/favicon.svg"><span class="kg-bookmark-author">fhsinchy</span><span class="kg-bookmark-publisher">GitHub</span></div>
</div>
<div class="kg-bookmark-thumbnail"><img src="https://avatars.githubusercontent.com/u/22444207?s=400&amp;v=4"></div>
</a>
<figcaption>spare a ⭐ to keep me motivated</figcaption>
</figure>
<p>If you have both Git and Python installed, you can install this script by executing the following command:</p><pre><code>pip install git+https://github.com/fhsinchy/rmbyext.git#egg=rmbyext</code></pre>
<p>Assuming Python has been set up properly on your system, the script should be available anywhere through the terminal. The generic syntax for using this script is as follows:</p><pre><code>rmbyext &lt;file extension&gt;</code></pre>
<p>To test it out, open up your terminal inside an empty directory and create some files in it with different extensions. You can use the <code>touch</code> command to do so. Now, I have a directory on my computer with the following files:</p><pre><code>touch a.pdf b.pdf c.txt d.pdf e.txt
ls
# a.pdf  b.pdf  c.txt  d.pdf  e.txt</code></pre>
<p>To delete all the <code>pdf</code> files from this directory, you can execute the following command:</p><pre><code>rmbyext pdf
# Removing: PDF
# b.pdf
# a.pdf
# d.pdf</code></pre>
<p>An executable image for this program should be able to take extensions of files as arguments and delete them just like the <code>rmbyext</code> program did.</p>
<p>The <a href="https://hub.docker.com/r/fhsinchy/rmbyext" rel="noopener noreferrer">fhsinchy/rmbyext</a> image behaves in a similar manner. This image contains a copy of the <code>rmbyext</code> script and is configured to run the script on a directory <code>/zone</code> inside the container.</p>
<p>Now the problem is that containers are isolated from your local system, so the <code>rmbyext</code> program running inside the container doesn't have any access to your local file system. So, if somehow you can map the local directory containing the <code>pdf</code> files to the <code>/zone</code> directory inside the container, the files should be accessible to the container.</p>
<p>One way to grant a container direct access to your local file system is by using <a href="https://docs.docker.com/storage/bind-mounts/" rel="noopener noreferrer">bind mounts</a>. </p>
<p>A bind mount lets you form a two way data binding between the content of a local file system directory (source) and another directory inside a container (destination). This way any changes made in the destination directory will take effect on the source directory and vise versa.</p>
<p>Let's see a bind mount in action. To delete files using this image instead of the program itself, you can execute the following command:</p><pre><code>docker container run --rm -v $(pwd):/zone fhsinchy/rmbyext pdf
# Removing: PDF
# b.pdf
# a.pdf
# d.pdf</code></pre>
<p>As you may have already guessed by seeing the <code>-v $(pwd):/zone</code> part in the command, the &nbsp;<code>-v</code> or <code>--volume</code> option is used for creating a bind mount for a container. This option can take three fields separated by colons (<code>:</code>). The generic syntax for the option is as follows:</p><pre><code>--volume &lt;local file system directory absolute path&gt;:&lt;container file system directory absolute path&gt;:&lt;read write access&gt;</code></pre>
<p>The third field is optional but you must pass the absolute path of your local directory and the absolute path of the directory inside the container. </p>
<p>The source directory in my case is <code>/home/fhsinchy/the-zone</code>. Given that my terminal is opened inside the directory, <code>$(pwd)</code> will be replaced with <code>/home/fhsinchy/the-zone</code> which contains the previously mentioned <code>.pdf</code> and <code>.txt</code> files. </p>
<p>You can learn more about <a href="https://www.gnu.org/software/bash/manual/html_node/Command-Substitution.html" rel="noopener noreferrer">command substitution here</a> if you want to.</p>
<p>The <code>--volume</code> or <code>-v</code> option is valid for the <code>container run</code> as well as the <code>container create</code> commands. We'll explore volumes in greater detail in the upcoming sections so don't worry if you didn't understand them very well here.</p>
<p>The difference between a regular image and an executable one is that the entry-point for an executable image is set to a custom program instead of <code>sh</code>, in this case the <code>rmbyext</code> program. And as you've learned in the previous sub-section, anything you write after the image name in a <code>container run</code> command gets passed to the entry-point of the image.</p>
<p>So in the end the <code>docker container run --rm -v $(pwd):/zone fhsinchy/rmbyext pdf</code> command translates to <code>rmbyext pdf</code> inside the container. Executable images are not that common in the wild but can be very useful in certain cases.</p>
<h2 id="docker-image-manipulation-basics">Docker Image Manipulation Basics</h2>
<p>Now that you have a solid understanding of how to run containers using publicly available images, it's time for you to learn about creating your very own images.</p>
<p>In this section, you'll learn the fundamentals of creating images, running containers using them, and sharing them online.</p>
<p>I would suggest you to install <a href="https://code.visualstudio.com/" rel="noopener noreferrer">Visual Studio Code</a> with the official <a href="https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker" rel="noopener noreferrer">Docker Extension</a> from the marketplace. This will greatly help your development experience.</p>
<h3 id="how-to-create-a-docker-image">How to Create a Docker Image</h3>
<p>As I've already explained in the <a href="#image">Hello World in Docker</a> section, images are multi-layered self-contained files that act as the template for creating Docker containers. They are like a frozen, read-only copy of a container.</p>
<p>In order to create an image using one of your programs you must have a clear vision of what you want from the image. Take the official <a href="https://hub.docker.com/_/nginx" rel="noopener noreferrer">nginx</a> image, for example. You can start a container using this image simply by executing the following command:</p><pre><code>docker container run --rm --detach --name default-nginx --publish 8080:80 nginx
# b379ecd5b6b9ae27c144e4fa12bdc5d0635543666f75c14039eea8d5f38e3f56
docker container ls
# CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                  NAMES
# b379ecd5b6b9        nginx               "/docker-entrypoint.…"   8 seconds ago       Up 8 seconds        0.0.0.0:8080-&gt;80/tcp   default-nginx</code></pre>
<p>Now, if you visit <code>http://127.0.0.1:8080</code> in the browser, you'll see a default response page.</p>
<p>That's all nice and good, but what if you want to make a custom NGINX image which functions exactly like the official one, but that's built by you? That's a completely valid scenario to be honest. In fact, let's do that.‌</p>
<p>In order to make a custom NGINX image, you must have a clear picture of what the final state of the image will be. In my opinion the image should be as follows:</p>
<ul>
<li>The image should have NGINX pre-installed which can be done using a package manager or can be built from source.</li>
<li>The image should start NGINX automatically upon running.</li>
</ul>
<p>That's simple. If you've cloned the project repository linked in this book, go inside the project root and look for a directory named <code>custom-nginx</code> in there. </p>
<p>Now, create a new file named <code>Dockerfile</code> inside that directory. A <code>Dockerfile</code> is a collection of instructions that, once processed by the daemon, results in an image. Content for the <code>Dockerfile</code> is as follows:</p><pre><code class="language-Dockerfile">FROM ubuntu:latest
EXPOSE 80
RUN apt-get update &amp;&amp; \
apt-get install nginx -y &amp;&amp; \
apt-get clean &amp;&amp; rm -rf /var/lib/apt/lists/*
CMD ["nginx", "-g", "daemon off;"]</code></pre>
<p>Images are multi-layered files and in this file, each line (known as instructions) that you've written creates a layer for your image.</p>
<ul>
<li>Every valid <code>Dockerfile</code> starts with a <code>FROM</code> instruction. This instruction sets the base image for your resultant image. By setting <code>ubuntu:latest</code> as the base image here, you get all the goodness of Ubuntu already available in your custom image, so you can use things like the <code>apt-get</code> command for easy package installation.</li>
<li>The <code>EXPOSE</code> instruction is used to indicate the port that needs to be published. Using this instruction doesn't mean that you won't need to <code>--publish</code> the port. You'll still need to use the <code>--publish</code> option explicitly. This <code>EXPOSE</code> instruction works like a documentation for someone who's trying to run a container using your image. It also has some other uses that I won't be discussing here.</li>
<li>The <code>RUN</code> instruction in a <code>Dockerfile</code> executes a command inside the container shell. The <code>apt-get update &amp;&amp; apt-get install nginx -y</code> command checks for updated package versions and installs NGINX. The <code>apt-get clean &amp;&amp; rm -rf /var/lib/apt/lists/*</code> command is used for clearing the package cache because you don't want any unnecessary baggage in your image. These two commands are simple Ubuntu stuff, nothing fancy. The <code>RUN</code> instructions here are written in <code>shell</code> form. These can also be written in <code>exec</code> form. You can consult the <a href="https://docs.docker.com/engine/reference/builder/#run" rel="noopener noreferrer">official reference</a> for more information.</li>
<li>Finally the <code>CMD</code> instruction sets the default command for your image. This instruction is written in <code>exec</code> form here comprising of three separate parts. Here, <code>nginx</code> refers to the NGINX executable. The <code>-g</code> and <code>daemon off</code> are options for NGINX. Running NGINX as a single process inside containers is considered a best practice hence the usage of this option. The <code>CMD</code> instruction can also be written in <code>shell</code> form. You can consult the <a href="https://docs.docker.com/engine/reference/builder/#cmd" rel="noopener noreferrer">official reference</a> for more information.</li>
</ul>
<p>Now that you have a valid <code>Dockerfile</code> you can build an image out of it. Just like the container related commands, the image related commands can be issued using the following syntax:</p><pre><code>docker image &lt;command&gt; &lt;options&gt;</code></pre>
<p>To build an image using the <code>Dockerfile</code> you just wrote, open up your terminal inside the <code>custom-nginx</code> directory and execute the following command:</p><pre><code>docker image build .
# Sending build context to Docker daemon  3.584kB
# Step 1/4 : FROM ubuntu:latest
#  ---&gt; d70eaf7277ea
# Step 2/4 : EXPOSE 80
#  ---&gt; Running in 9eae86582ec7
# Removing intermediate container 9eae86582ec7
#  ---&gt; 8235bd799a56
# Step 3/4 : RUN apt-get update &amp;&amp;     apt-get install nginx -y &amp;&amp;     apt-get clean &amp;&amp; rm -rf /var/lib/apt/lists/*
#  ---&gt; Running in a44725cbb3fa
### LONG INSTALLATION STUFF GOES HERE ###
# Removing intermediate container a44725cbb3fa
#  ---&gt; 3066bd20292d
# Step 4/4 : CMD ["nginx", "-g", "daemon off;"]
#  ---&gt; Running in 4792e4691660
# Removing intermediate container 4792e4691660
#  ---&gt; 3199372aa3fc
# Successfully built 3199372aa3fc</code></pre>
<p>To perform an image build, the daemon needs two very specific pieces of information. These are the name of the <code>Dockerfile</code> and the build context. In the command issued above:</p>
<ul>
<li><code>docker image build</code> is the command for building the image. The daemon finds any file named <code>Dockerfile</code> within the context.</li>
<li>The <code>.</code> at the end sets the context for this build. The context means the directory accessible by the daemon during the build process.</li>
</ul>
<p>Now to run a container using this image, you can use the <code>container run</code> command coupled with the image ID that you received as the result of the build process. In my case the id is <code>3199372aa3fc</code> evident by the <code>Successfully built 3199372aa3fc</code> line in the previous code block.</p><pre><code>docker container run --rm --detach --name custom-nginx-packaged --publish 8080:80 3199372aa3fc
# ec09d4e1f70c903c3b954c8d7958421cdd1ae3d079b57f929e44131fbf8069a0
docker container ls
# CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                  NAMES
# ec09d4e1f70c        3199372aa3fc        "nginx -g 'daemon of…"   23 seconds ago      Up 22 seconds       0.0.0.0:8080-&gt;80/tcp   custom-nginx-packaged</code></pre>
<p>To verify, visit <code>http://127.0.0.1:8080</code> and you should see the default response page.</p>
<h3 id="how-to-tag-docker-images">How to Tag Docker Images</h3>
<p>Just like containers, you can assign custom identifiers to your images instead of relying on the randomly generated ID. In case of an image, it's called tagging instead of naming. The <code>--tag</code> or <code>-t</code> option is used in such cases. </p>
<p>Generic syntax for the option is as follows:</p><pre><code>--tag &lt;image repository&gt;:&lt;image tag&gt;</code></pre>
<p>The repository is usually known as the image name and the tag indicates a certain build or version. </p>
<p>Take the official <a href="https://hub.docker.com/_/mysql" rel="noopener noreferrer">mysql</a> image, for example. If you want to run a container using a specific version of MySQL, like 5.7, you can execute <code>docker container run mysql:5.7</code> where <code>mysql</code> is the image repository and <code>5.7</code> is the tag.</p>
<p>In order to tag your custom NGINX image with <code>custom-nginx:packaged</code> you can execute the following command:</p><pre><code>docker image build --tag custom-nginx:packaged .
# Sending build context to Docker daemon  1.055MB
# Step 1/4 : FROM ubuntu:latest
#  ---&gt; f63181f19b2f
# Step 2/4 : EXPOSE 80
#  ---&gt; Running in 53ab370b9efc
# Removing intermediate container 53ab370b9efc
#  ---&gt; 6d6460a74447
# Step 3/4 : RUN apt-get update &amp;&amp;     apt-get install nginx -y &amp;&amp;     apt-get clean &amp;&amp; rm -rf /var/lib/apt/lists/*
#  ---&gt; Running in b4951b6b48bb
### LONG INSTALLATION STUFF GOES HERE ###
# Removing intermediate container b4951b6b48bb
#  ---&gt; fdc6cdd8925a
# Step 4/4 : CMD ["nginx", "-g", "daemon off;"]
#  ---&gt; Running in 3bdbd2af4f0e
# Removing intermediate container 3bdbd2af4f0e
#  ---&gt; f8837621b99d
# Successfully built f8837621b99d
# Successfully tagged custom-nginx:packaged</code></pre>
<p>Nothing will change except the fact that you can now refer to your image as <code>custom-nginx:packaged</code> instead of some long random string.</p>
<p>In cases where you forgot to tag an image during build time, or maybe you want to change the tag, you can use the <code>image tag</code> command to do that:</p><pre><code>docker image tag &lt;image id&gt; &lt;image repository&gt;:&lt;image tag&gt;
## or ##
docker image tag &lt;image repository&gt;:&lt;image tag&gt; &lt;new image repository&gt;:&lt;new image tag&gt;</code></pre>
<h3 id="how-to-list-and-remove-docker-images">How to List and Remove Docker Images</h3>
<p>Just like the <code>container ls</code> command, you can use the <code>image ls</code> command to list all the images in your local system:</p><pre><code>docker image ls
# REPOSITORY     TAG        IMAGE ID       CREATED         SIZE
# &lt;none&gt;         &lt;none&gt;     3199372aa3fc   7 seconds ago   132MB
# custom-nginx   packaged   f8837621b99d   4 minutes ago   132MB</code></pre>
<p>Images listed here can be deleted using the <code>image rm</code> command. The generic syntax is as follows:</p><pre><code>docker image rm &lt;image identifier&gt;</code></pre>
<p>The identifier can be the image ID or image repository. If you use the repository, you'll have to identify the tag as well. To delete the <code>custom-nginx:packaged</code> image, you may execute the following command:</p><pre><code>docker image rm custom-nginx:packaged
# Untagged: custom-nginx:packaged
# Deleted: sha256:f8837621b99d3388a9e78d9ce49fbb773017f770eea80470fb85e0052beae242
# Deleted: sha256:fdc6cdd8925ac25b9e0ed1c8539f96ad89ba1b21793d061e2349b62dd517dadf
# Deleted: sha256:c20e4aa46615fe512a4133089a5cd66f9b7da76366c96548790d5bf865bd49c4
# Deleted: sha256:6d6460a744475a357a2b631a4098aa1862d04510f3625feb316358536fcd8641</code></pre>
<p>You can also use the <code>image prune</code> command to cleanup all un-tagged dangling images as follows:</p><pre><code>docker image prune --force
# Deleted Images:
# deleted: sha256:ba9558bdf2beda81b9acc652ce4931a85f0fc7f69dbc91b4efc4561ef7378aff
# deleted: sha256:ad9cc3ff27f0d192f8fa5fadebf813537e02e6ad472f6536847c4de183c02c81
# deleted: sha256:f1e9b82068d43c1bb04ff3e4f0085b9f8903a12b27196df7f1145aa9296c85e7
# deleted: sha256:ec16024aa036172544908ec4e5f842627d04ef99ee9b8d9aaa26b9c2a4b52baa
# Total reclaimed space: 59.19MB</code></pre>
<p>The <code>--force</code> or <code>-f</code> option skips any confirmation questions. You can also use the <code>--all</code> or <code>-a</code> option to remove all cached images in your local registry.</p>
<h3 id="how-to-understand-the-many-layers-of-a-docker-image">How to Understand the Many Layers of a Docker Image</h3>
<p>From the very beginning of this book, I've been saying that images are multi-layered files. In this sub-section I'll demonstrate the various layers of an image and how they play an important role in the build process of that image. </p>
<p>For this demonstration, I'll be using the <code>custom-nginx:packaged</code> image from the previous sub-section.</p>
<p>To visualize the many layers of an image, you can use the <code>image history</code> command. The various layers of the <code>custom-nginx:packaged</code> image can be visualized as follows:</p><pre><code>docker image history custom-nginx:packaged
# IMAGE               CREATED             CREATED BY                                      SIZE                COMMENT
# 7f16387f7307        5 minutes ago       /bin/sh -c #(nop)  CMD ["nginx" "-g" "daemon…   0B
# 587c805fe8df        5 minutes ago       /bin/sh -c apt-get update &amp;&amp;     apt-get ins…   60MB
# 6fe4e51e35c1        6 minutes ago       /bin/sh -c #(nop)  EXPOSE 80                    0B
# d70eaf7277ea        17 hours ago        /bin/sh -c #(nop)  CMD ["/bin/bash"]            0B
# &lt;missing&gt;           17 hours ago        /bin/sh -c mkdir -p /run/systemd &amp;&amp; echo 'do…   7B
# &lt;missing&gt;           17 hours ago        /bin/sh -c [ -z "$(apt-get indextargets)" ]     0B
# &lt;missing&gt;           17 hours ago        /bin/sh -c set -xe   &amp;&amp; echo '#!/bin/sh' &gt; /…   811B
# &lt;missing&gt;           17 hours ago        /bin/sh -c #(nop) ADD file:435d9776fdd3a1834…   72.9MB</code></pre>
<p>There are eight layers of this image. The upper most layer is the latest one and as you go down the layers get older. The upper most layer is the one that you usually use for running containers.</p>
<p>Now, let's have a closer look at the images beginning from image <code>d70eaf7277ea</code> down to <code>7f16387f7307</code>. I'll ignore the bottom four layers where the <code>IMAGE</code> is <code>&lt;missing&gt;</code> as they are not of our concern.</p>
<ul>
<li><code>d70eaf7277ea</code> was created by <code>/bin/sh -c #(nop) &nbsp;CMD ["/bin/bash"]</code> which indicates that the default shell inside Ubuntu has been loaded successfully.</li>
<li><code>6fe4e51e35c1</code> was created by <code>/bin/sh -c #(nop) &nbsp;EXPOSE 80</code> which was the second instruction in your code.</li>
<li><code>587c805fe8df</code> was created by <code>/bin/sh -c apt-get update &amp;&amp; apt-get install nginx -y &amp;&amp; apt-get clean &amp;&amp; rm -rf /var/lib/apt/lists/*</code> which was the third instruction in your code. You can also see that this image has a size of <code>60MB</code> given all necessary packages were installed during the execution of this instruction.</li>
<li>Finally the upper most layer <code>7f16387f7307</code> was created by <code>/bin/sh -c #(nop) &nbsp;CMD ["nginx", "-g", "daemon off;"]</code> which sets the default command for this image.</li>
</ul>
<p>As you can see, the image comprises of many read-only layers, each recording a new set of changes to the state triggered by certain instructions. When you start a container using an image, you get a new writable layer on top of the other layers.</p>
<p>This layering phenomenon that happens every time you work with Docker has been made possible by an amazing technical concept called a union file system. Here, union means union in set theory. According to <a href="https://en.wikipedia.org/wiki/UnionFS" rel="noopener noreferrer">Wikipedia</a> - </p>
<blockquote>It allows files and directories of separate file systems, known as branches, to be transparently overlaid, forming a single coherent file system. Contents of directories which have the same path within the merged branches will be seen together in a single merged directory, within the new, virtual filesystem.</blockquote>
<p>By utilizing this concept, Docker can avoid data duplication and can use previously created layers as a cache for later builds. This results in compact, efficient images that can be used everywhere.</p>
<h3 id="how-to-build-nginx-from-source">How to Build NGINX from Source</h3>
<p>In the previous sub-section, you learned about the <code>FROM</code>, <code>EXPOSE</code>, <code>RUN</code> and <code>CMD</code> instructions. In this sub-section you'll be learning a lot more about other instructions.</p>
<p>In this sub-section you'll again create a custom NGINX image. But the twist is that you'll be building NGINX from source instead of installing it using some package manager such as <code>apt-get</code> as in the previous example.</p>
<p>In order to build NGINX from source, you first need the source of NGINX. If you've cloned my projects repository you'll see a file named <code>nginx-1.19.2.tar.gz</code> inside the <code>custom-nginx</code> directory. You'll use this archive as the source for building NGINX.</p>
<p>Before diving into writing some code, let's plan out the process first. The image creation process this time can be done in seven steps. These are as follows:</p>
<ul>
<li>Get a good base image for building the application, like <a href="https://hub.docker.com/_/ubuntu" rel="noopener noreferrer">ubuntu</a>.</li>
<li>Install necessary build dependencies on the base image.</li>
<li>Copy the <code>nginx-1.19.2.tar.gz</code> file inside the image.</li>
<li>Extract the contents of the archive and get rid of it.</li>
<li>Configure the build, compile and install the program using the <code>make</code> tool.</li>
<li>Get rid of the extracted source code.</li>
<li>Run <code>nginx</code> executable.</li>
</ul>
<p>Now that you have a plan, let's begin by opening up old <code>Dockerfile</code> and updating its contents as follows:</p><pre><code>FROM ubuntu:latest
RUN apt-get update &amp;&amp; \
apt-get install build-essential\
libpcre3 \
libpcre3-dev \
zlib1g \
zlib1g-dev \
libssl1.1 \
libssl-dev \
-y &amp;&amp; \
apt-get clean &amp;&amp; rm -rf /var/lib/apt/lists/*
COPY nginx-1.19.2.tar.gz .
RUN tar -xvf nginx-1.19.2.tar.gz &amp;&amp; rm nginx-1.19.2.tar.gz
RUN cd nginx-1.19.2 &amp;&amp; \
./configure \
--sbin-path=/usr/bin/nginx \
--conf-path=/etc/nginx/nginx.conf \
--error-log-path=/var/log/nginx/error.log \
--http-log-path=/var/log/nginx/access.log \
--with-pcre \
--pid-path=/var/run/nginx.pid \
--with-http_ssl_module &amp;&amp; \
make &amp;&amp; make install
RUN rm -rf /nginx-1.19.2
CMD ["nginx", "-g", "daemon off;"]</code></pre>
<p>As you can see, the code inside the <code>Dockerfile</code> reflects the seven steps I talked about above.</p>
<ul>
<li>The <code>FROM</code> instruction sets Ubuntu as the base image making an ideal environment for building any application.</li>
<li>The <code>RUN</code> instruction installs standard packages necessary for building NGINX from source.</li>
<li>The <code>COPY</code> instruction here is something new. This instruction is responsible for copying the the <code>nginx-1.19.2.tar.gz</code> file inside the image. The generic syntax for the <code>COPY</code> instruction is <code>COPY &lt;source&gt; &lt;destination&gt;</code> where source is in your local filesystem and the destination is inside your image. The <code>.</code> as the destination means the working directory inside the image which is by default <code>/</code> unless set otherwise.</li>
<li>The second <code>RUN</code> instruction here extracts the contents from the archive using <code>tar</code> and gets rid of it afterwards.</li>
<li>The archive file contains a directory called <code>nginx-1.19.2</code> containing the source code. So on the next step, you'll have to <code>cd</code> inside that directory and perform the build process. You can read the <a href="https://itsfoss.com/install-software-from-source-code/" rel="noopener noreferrer">How to Install Software from Source Code… and Remove it Afterwards</a> article to learn more on the topic.</li>
<li>Once the build and installation is complete, you remove the <code>nginx-1.19.2</code> directory using <code>rm</code> command.</li>
<li>On the final step you start NGINX in single process mode just like you did before.</li>
</ul>
<p>Now to build an image using this code, execute the following command:</p><pre><code>docker image build --tag custom-nginx:built .
# Step 1/7 : FROM ubuntu:latest
#  ---&gt; d70eaf7277ea
# Step 2/7 : RUN apt-get update &amp;&amp;     apt-get install build-essential                    libpcre3                     libpcre3-dev                     zlib1g                     zlib1g-dev                     libssl-dev                     -y &amp;&amp;     apt-get clean &amp;&amp; rm -rf /var/lib/apt/lists/*
#  ---&gt; Running in 2d0aa912ea47
### LONG INSTALLATION STUFF GOES HERE ###
# Removing intermediate container 2d0aa912ea47
#  ---&gt; cbe1ced3da11
# Step 3/7 : COPY nginx-1.19.2.tar.gz .
#  ---&gt; 7202902edf3f
# Step 4/7 : RUN tar -xvf nginx-1.19.2.tar.gz &amp;&amp; rm nginx-1.19.2.tar.gz
---&gt; Running in 4a4a95643020
### LONG EXTRACTION STUFF GOES HERE ###
# Removing intermediate container 4a4a95643020
#  ---&gt; f9dec072d6d6
# Step 5/7 : RUN cd nginx-1.19.2 &amp;&amp;     ./configure         --sbin-path=/usr/bin/nginx         --conf-path=/etc/nginx/nginx.conf         --error-log-path=/var/log/nginx/error.log         --http-log-path=/var/log/nginx/access.log         --with-pcre         --pid-path=/var/run/nginx.pid         --with-http_ssl_module &amp;&amp;     make &amp;&amp; make install
#  ---&gt; Running in b07ba12f921e
### LONG CONFIGURATION AND BUILD STUFF GOES HERE ###
# Removing intermediate container b07ba12f921e
#  ---&gt; 5a877edafd8b
# Step 6/7 : RUN rm -rf /nginx-1.19.2
#  ---&gt; Running in 947e1d9ba828
# Removing intermediate container 947e1d9ba828
#  ---&gt; a7702dc7abb7
# Step 7/7 : CMD ["nginx", "-g", "daemon off;"]
#  ---&gt; Running in 3110c7fdbd57
# Removing intermediate container 3110c7fdbd57
#  ---&gt; eae55f7369d3
# Successfully built eae55f7369d3
# Successfully tagged custom-nginx:built</code></pre>
<p>This code is alright but there are some places where we can make improvements.</p>
<ul>
<li>Instead of hard coding the filename like <code>nginx-1.19.2.tar.gz</code>, you can create an argument using the <code>ARG</code> instruction. This way, you'll be able to change the version or filename by just changing the argument.</li>
<li>Instead of downloading the archive manually, you can let the daemon download the file during the build process. There is another instruction like <code>COPY</code> called the <code>ADD</code> instruction which is capable of adding files from the internet.</li>
</ul>
<p>Open up the <code>Dockerfile</code> file and update its content as follows:</p><pre><code class="language-Dockerfile">FROM ubuntu:latest
RUN apt-get update &amp;&amp; \
apt-get install build-essential\
libpcre3 \
libpcre3-dev \
zlib1g \
zlib1g-dev \
libssl1.1 \
libssl-dev \
-y &amp;&amp; \
apt-get clean &amp;&amp; rm -rf /var/lib/apt/lists/*
ARG FILENAME="nginx-1.19.2"
ARG EXTENSION="tar.gz"
ADD https://nginx.org/download/${FILENAME}.${EXTENSION} .
RUN tar -xvf ${FILENAME}.${EXTENSION} &amp;&amp; rm ${FILENAME}.${EXTENSION}
RUN cd ${FILENAME} &amp;&amp; \
./configure \
--sbin-path=/usr/bin/nginx \
--conf-path=/etc/nginx/nginx.conf \
--error-log-path=/var/log/nginx/error.log \
--http-log-path=/var/log/nginx/access.log \
--with-pcre \
--pid-path=/var/run/nginx.pid \
--with-http_ssl_module &amp;&amp; \
make &amp;&amp; make install
RUN rm -rf /${FILENAME}}
CMD ["nginx", "-g", "daemon off;"]</code></pre>
<p>The code is almost identical to the previous code block except for a new instruction called <code>ARG</code> on line 13, 14 and the usage of the <code>ADD</code> instruction on line 16. Explanation for the updated code is as follows:</p>
<ul>
<li>The <code>ARG</code> instruction lets you declare variables like in other languages. These variables or arguments can later be accessed using the <code>${argument name}</code> syntax. Here, I've put the filename <code>nginx-1.19.2</code> and the file extension <code>tar.gz</code> in two separate arguments. This way I can switch between newer versions of NGINX or the archive format by making a change in just one place. In the code above, I've added default values to the variables. Variable values can be passed as options of the <code>image build</code> command as well. You can consult the <a href="https://docs.docker.com/engine/reference/builder/#arg" rel="noopener noreferrer">official reference</a> for more details.</li>
<li>In the <code>ADD</code> instruction, I've formed the download URL dynamically using the arguments declared above. The <code>https://nginx.org/download/${FILENAME}.${EXTENSION}</code> line will result in something like <code>https://nginx.org/download/nginx-1.19.2.tar.gz</code> during the build process. You can change the file version or the extension by changing it in just one place thanks to the <code>ARG</code> instruction.</li>
<li>The <code>ADD</code> instruction doesn't extract files obtained from the internet by default, hence the usage of <code>tar</code> on line 18.</li>
</ul>
<p>The rest of the code is almost unchanged. You should be able to understand the usage of the arguments by yourself now. Finally let's try to build an image from this updated code.</p><pre><code>docker image build --tag custom-nginx:built .
# Step 1/9 : FROM ubuntu:latest
#  ---&gt; d70eaf7277ea
# Step 2/9 : RUN apt-get update &amp;&amp;     apt-get install build-essential                    libpcre3                     libpcre3-dev                     zlib1g                     zlib1g-dev                     libssl-dev                     -y &amp;&amp;     apt-get clean &amp;&amp; rm -rf /var/lib/apt/lists/*
#  ---&gt; cbe1ced3da11
### LONG INSTALLATION STUFF GOES HERE ###
# Step 3/9 : ARG FILENAME="nginx-1.19.2"
#  ---&gt; Running in 33b62a0e9ffb
# Removing intermediate container 33b62a0e9ffb
#  ---&gt; fafc0aceb9c8
# Step 4/9 : ARG EXTENSION="tar.gz"
#  ---&gt; Running in 5c32eeb1bb11
# Removing intermediate container 5c32eeb1bb11
#  ---&gt; 36efdf6efacc
# Step 5/9 : ADD https://nginx.org/download/${FILENAME}.${EXTENSION} .
# Downloading [==================================================&gt;]  1.049MB/1.049MB
#  ---&gt; dba252f8d609
# Step 6/9 : RUN tar -xvf ${FILENAME}.${EXTENSION} &amp;&amp; rm ${FILENAME}.${EXTENSION}
#  ---&gt; Running in 2f5b091b2125
### LONG EXTRACTION STUFF GOES HERE ###
# Removing intermediate container 2f5b091b2125
#  ---&gt; 2c9a325d74f1
# Step 7/9 : RUN cd ${FILENAME} &amp;&amp;     ./configure         --sbin-path=/usr/bin/nginx         --conf-path=/etc/nginx/nginx.conf         --error-log-path=/var/log/nginx/error.log         --http-log-path=/var/log/nginx/access.log         --with-pcre         --pid-path=/var/run/nginx.pid         --with-http_ssl_module &amp;&amp;     make &amp;&amp; make install
#  ---&gt; Running in 11cc82dd5186
### LONG CONFIGURATION AND BUILD STUFF GOES HERE ###
# Removing intermediate container 11cc82dd5186
#  ---&gt; 6c122e485ec8
# Step 8/9 : RUN rm -rf /${FILENAME}}
#  ---&gt; Running in 04102366960b
# Removing intermediate container 04102366960b
#  ---&gt; 6bfa35420a73
# Step 9/9 : CMD ["nginx", "-g", "daemon off;"]
#  ---&gt; Running in 63ee44b571bb
# Removing intermediate container 63ee44b571bb
#  ---&gt; 4ce79556db1b
# Successfully built 4ce79556db1b
# Successfully tagged custom-nginx:built</code></pre>
<p>Now you should be able to run a container using the <code>custom-nginx:built</code> image.</p><pre><code>docker container run --rm --detach --name custom-nginx-built --publish 8080:80 custom-nginx:built
# 90ccdbc0b598dddc4199451b2f30a942249d85a8ed21da3c8d14612f17eed0aa
docker container ls
# CONTAINER ID        IMAGE                COMMAND                  CREATED             STATUS              PORTS                  NAMES
# 90ccdbc0b598        custom-nginx:built   "nginx -g 'daemon of…"   2 minutes ago       Up 2 minutes        0.0.0.0:8080-&gt;80/tcp   custom-nginx-built</code></pre>
<p>A container using the <code>custom-nginx:built-v2</code> image has been successfully run. The container should be accessible at <code>http://127.0.0.1:8080</code> now.</p>
<p>And here is the trusty default response page from NGINX. You can visit the <a href="https://docs.docker.com/engine/reference/builder/" rel="noopener noreferrer">official reference</a> site to learn more about the available instructions.</p>
<h3 id="how-to-optimize-docker-images">How to Optimize Docker Images</h3>
<p>The image we built in the last sub-section is functional but very unoptimized. To prove my point let's have a look at the size of the image using the <code>image ls</code> command:</p><pre><code>docker image ls
# REPOSITORY         TAG       IMAGE ID       CREATED          SIZE
# custom-nginx       built     1f3aaf40bb54   16 minutes ago   343MB</code></pre>
<p>For an image containing only NGINX, that's too much. If you pull the official image and check its size, you'll see how small it is:</p><pre><code>docker image pull nginx:stable
# stable: Pulling from library/nginx
# a076a628af6f: Pull complete
# 45d7b5d3927d: Pull complete
# 5e326fece82e: Pull complete
# 30c386181b68: Pull complete
# b15158e9ebbe: Pull complete
# Digest: sha256:ebd0fd56eb30543a9195280eb81af2a9a8e6143496accd6a217c14b06acd1419
# Status: Downloaded newer image for nginx:stable
# docker.io/library/nginx:stable
docker image ls
# REPOSITORY         TAG       IMAGE ID       CREATED          SIZE
# custom-nginx       built     1f3aaf40bb54   25 minutes ago   343MB
# nginx              stable    b9e1dc12387a   11 days ago      133MB</code></pre>
<p>In order to find out the root cause, let's have a look at the <code>Dockerfile</code> first:</p><pre><code class="language-Dockerfile">FROM ubuntu:latest
RUN apt-get update &amp;&amp; \
apt-get install build-essential\
libpcre3 \
libpcre3-dev \
zlib1g \
zlib1g-dev \
libssl1.1 \
libssl-dev \
-y &amp;&amp; \
apt-get clean &amp;&amp; rm -rf /var/lib/apt/lists/*
ARG FILENAME="nginx-1.19.2"
ARG EXTENSION="tar.gz"
ADD https://nginx.org/download/${FILENAME}.${EXTENSION} .
RUN tar -xvf ${FILENAME}.${EXTENSION} &amp;&amp; rm ${FILENAME}.${EXTENSION}
RUN cd ${FILENAME} &amp;&amp; \
./configure \
--sbin-path=/usr/bin/nginx \
--conf-path=/etc/nginx/nginx.conf \
--error-log-path=/var/log/nginx/error.log \
--http-log-path=/var/log/nginx/access.log \
--with-pcre \
--pid-path=/var/run/nginx.pid \
--with-http_ssl_module &amp;&amp; \
make &amp;&amp; make install
RUN rm -rf /${FILENAME}}
CMD ["nginx", "-g", "daemon off;"]</code></pre>
<p>As you can see on line 3, the <code>RUN</code> instruction installs a lot of stuff. Although these packages are necessary for building NGINX from source, they are not necessary for running it. </p>
<p>Out of the 6 packages that we installed, only two are necessary for running NGINX. These are <code>libpcre3</code> and <code>zlib1g</code>. So a better idea would be to uninstall the other packages once the build process is done.</p>
<p>To do so, update your <code>Dockerfile</code> as follows:</p><pre><code class="language-Dockerfile">FROM ubuntu:latest
EXPOSE 80
ARG FILENAME="nginx-1.19.2"
ARG EXTENSION="tar.gz"
ADD https://nginx.org/download/${FILENAME}.${EXTENSION} .
RUN apt-get update &amp;&amp; \
apt-get install build-essential \
libpcre3 \
libpcre3-dev \
zlib1g \
zlib1g-dev \
libssl1.1 \
libssl-dev \
-y &amp;&amp; \
tar -xvf ${FILENAME}.${EXTENSION} &amp;&amp; rm ${FILENAME}.${EXTENSION} &amp;&amp; \
cd ${FILENAME} &amp;&amp; \
./configure \
--sbin-path=/usr/bin/nginx \
--conf-path=/etc/nginx/nginx.conf \
--error-log-path=/var/log/nginx/error.log \
--http-log-path=/var/log/nginx/access.log \
--with-pcre \
--pid-path=/var/run/nginx.pid \
--with-http_ssl_module &amp;&amp; \
make &amp;&amp; make install &amp;&amp; \
cd / &amp;&amp; rm -rfv /${FILENAME} &amp;&amp; \
apt-get remove build-essential \
libpcre3-dev \
zlib1g-dev \
libssl-dev \
-y &amp;&amp; \
apt-get autoremove -y &amp;&amp; \
apt-get clean &amp;&amp; rm -rf /var/lib/apt/lists/*
CMD ["nginx", "-g", "daemon off;"]</code></pre>
<p>As you can see, on line 10 a single <code>RUN</code> instruction is doing all the necessary heavy-lifting. The exact chain of events is as follows:</p>
<ul>
<li>From line 10 to line 17, all the necessary packages are being installed.</li>
<li>On line 18, the source code is being extracted and the downloaded archive gets removed.</li>
<li>From line 19 to line 28, NGINX is configured, built, and installed on the system.</li>
<li>On line 29, the extracted files from the downloaded archive get removed.</li>
<li>From line 30 to line 36, all the unnecessary packages are being uninstalled and cache cleared. The <code>libpcre3</code> and <code>zlib1g</code> packages are needed for running NGINX so we keep them.</li>
</ul>
<p>You may ask why am I doing so much work in a single <code>RUN</code> instruction instead of nicely splitting them into multiple instructions like we did previously. Well, splitting them up would be a mistake. </p>
<p>If you install packages and then remove them in separate <code>RUN</code> instructions, they'll live in separate layers of the image. Although the final image will not have the removed packages, their size will still be added to the final image since they exist in one of the layers consisting the image. So make sure you make these kind of changes on a single layer.</p>
<p>Let's build an image using this <code>Dockerfile</code> and see the differences.</p><pre><code>docker image build --tag custom-nginx:built .
# Sending build context to Docker daemon  1.057MB
# Step 1/7 : FROM ubuntu:latest
#  ---&gt; f63181f19b2f
# Step 2/7 : EXPOSE 80
#  ---&gt; Running in 006f39b75964
# Removing intermediate container 006f39b75964
#  ---&gt; 6943f7ef9376
# Step 3/7 : ARG FILENAME="nginx-1.19.2"
#  ---&gt; Running in ffaf89078594
# Removing intermediate container ffaf89078594
#  ---&gt; 91b5cdb6dabe
# Step 4/7 : ARG EXTENSION="tar.gz"
#  ---&gt; Running in d0f5188444b6
# Removing intermediate container d0f5188444b6
#  ---&gt; 9626f941ccb2
# Step 5/7 : ADD https://nginx.org/download/${FILENAME}.${EXTENSION} .
# Downloading [==================================================&gt;]  1.049MB/1.049MB
#  ---&gt; a8e8dcca1be8
# Step 6/7 : RUN apt-get update &amp;&amp;     apt-get install build-essential                     libpcre3                     libpcre3-dev                     zlib1g                     zlib1g-dev                     libssl-dev                     -y &amp;&amp;     tar -xvf ${FILENAME}.${EXTENSION} &amp;&amp; rm ${FILENAME}.${EXTENSION} &amp;&amp;     cd ${FILENAME} &amp;&amp;     ./configure         --sbin-path=/usr/bin/nginx         --conf-path=/etc/nginx/nginx.conf         --error-log-path=/var/log/nginx/error.log         --http-log-path=/var/log/nginx/access.log         --with-pcre         --pid-path=/var/run/nginx.pid         --with-http_ssl_module &amp;&amp;     make &amp;&amp; make install &amp;&amp;     cd / &amp;&amp; rm -rfv /${FILENAME} &amp;&amp;     apt-get remove build-essential                     libpcre3-dev                     zlib1g-dev                     libssl-dev                     -y &amp;&amp;     apt-get autoremove -y &amp;&amp;     apt-get clean &amp;&amp; rm -rf /var/lib/apt/lists/*
#  ---&gt; Running in e5675cad1260
### LONG INSTALLATION AND BUILD STUFF GOES HERE ###
# Removing intermediate container e5675cad1260
#  ---&gt; dc7e4161f975
# Step 7/7 : CMD ["nginx", "-g", "daemon off;"]
#  ---&gt; Running in b579e4600247
# Removing intermediate container b579e4600247
#  ---&gt; 512aa6a95a93
# Successfully built 512aa6a95a93
# Successfully tagged custom-nginx:built
docker image ls
# REPOSITORY         TAG       IMAGE ID       CREATED              SIZE
# custom-nginx       built     512aa6a95a93   About a minute ago   81.6MB
# nginx              stable    b9e1dc12387a   11 days ago          133MB</code></pre>
<p>As you can see, the image size has gone from being 343MB to 81.6MB. The official image is 133MB. This is a pretty optimized build, but we can go a bit further in the next sub-section.</p>
<h3 id="embracing-alpine-linux">Embracing Alpine Linux</h3>
<p>If you've been fiddling around with containers for some time now, you may have heard about something called <a href="https://alpinelinux.org/" rel="noopener noreferrer">Alpine Linux</a>. It's a full-featured <a href="https://en.wikipedia.org/wiki/Linux" rel="noopener noreferrer">Linux</a> distribution like <a href="https://ubuntu.com/" rel="noopener noreferrer">Ubuntu</a>, <a href="https://www.debian.org/" rel="noopener noreferrer">Debian</a> or <a href="https://getfedora.org/" rel="noopener noreferrer">Fedora</a>. </p>
<p>But the good thing about Alpine is that it's built around <code>musl</code> <code>libc</code> and <code>busybox</code> and is lightweight. Where the latest <a href="https://hub.docker.com/_/ubuntu" rel="noopener noreferrer">ubuntu</a> image weighs at around 28MB, <a href="https://hub.docker.com/_/alpine" rel="noopener noreferrer">alpine</a> is 2.8MB. </p>
<p>Apart from the lightweight nature, Alpine is also secure and is a much better fit for creating containers than the other distributions.</p>
<p>Although not as user friendly as the other commercial distributions, the transition to Alpine is still very simple. In this sub-section you'll learn about recreating the <code>custom-nginx</code> image using the Alpine image as its base.</p>
<p>Open up your <code>Dockerfile</code> and update its content as follows:</p><pre><code class="language-Dockerfile">FROM alpine:latest
EXPOSE 80
ARG FILENAME="nginx-1.19.2"
ARG EXTENSION="tar.gz"
ADD https://nginx.org/download/${FILENAME}.${EXTENSION} .
RUN apk add --no-cache pcre zlib &amp;&amp; \
apk add --no-cache \
--virtual .build-deps \
build-base \
pcre-dev \
zlib-dev \
openssl-dev &amp;&amp; \
tar -xvf ${FILENAME}.${EXTENSION} &amp;&amp; rm ${FILENAME}.${EXTENSION} &amp;&amp; \
cd ${FILENAME} &amp;&amp; \
./configure \
--sbin-path=/usr/bin/nginx \
--conf-path=/etc/nginx/nginx.conf \
--error-log-path=/var/log/nginx/error.log \
--http-log-path=/var/log/nginx/access.log \
--with-pcre \
--pid-path=/var/run/nginx.pid \
--with-http_ssl_module &amp;&amp; \
make &amp;&amp; make install &amp;&amp; \
cd / &amp;&amp; rm -rfv /${FILENAME} &amp;&amp; \
apk del .build-deps
CMD ["nginx", "-g", "daemon off;"]</code></pre>
<p>The code is almost identical except for a few changes. I'll be listing the changes and explaining them as I go:</p>
<ul>
<li>Instead of using <code>apt-get install</code> for installing packages, we use <code>apk add</code>. The <code>--no-cache</code> option means that the downloaded package won't be cached. Likewise we'll use <code>apk del</code> instead of <code>apt-get remove</code> to uninstall packages.</li>
<li>The <code>--virtual</code> option for the <code>apk add</code> command is used for bundling a bunch of packages into a single virtual package for easier management. Packages that are needed only for building the program are labeled as <code>.build-deps</code> which are then removed on line 29 by executing the <code>apk del .build-deps</code> command. You can learn more about <a href="https://docs.alpinelinux.org/user-handbook/0.1a/Working/apk.html#_virtuals" rel="noopener noreferrer">virtuals</a> in the official docs.</li>
<li>The package names are a bit different here. Usually every Linux distribution has its package repository available to everyone where you can search for packages. If you know the packages required for a certain task, then you can just head over to the designated repository for a distribution and search for it. You can <a href="https://pkgs.alpinelinux.org/packages">look up Alpine Linux packages here</a>.</li>
</ul>
<p>Now build a new image using this <code>Dockerfile</code> and see the difference in file size:</p><pre><code>docker image build --tag custom-nginx:built .
# Sending build context to Docker daemon  1.055MB
# Step 1/7 : FROM alpine:latest
#  ---&gt; 7731472c3f2a
# Step 2/7 : EXPOSE 80
#  ---&gt; Running in 8336cfaaa48d
# Removing intermediate container 8336cfaaa48d
#  ---&gt; d448a9049d01
# Step 3/7 : ARG FILENAME="nginx-1.19.2"
#  ---&gt; Running in bb8b2eae9d74
# Removing intermediate container bb8b2eae9d74
#  ---&gt; 87ca74f32fbe
# Step 4/7 : ARG EXTENSION="tar.gz"
#  ---&gt; Running in aa09627fe48c
# Removing intermediate container aa09627fe48c
#  ---&gt; 70cb557adb10
# Step 5/7 : ADD https://nginx.org/download/${FILENAME}.${EXTENSION} .
# Downloading [==================================================&gt;]  1.049MB/1.049MB
#  ---&gt; b9790ce0c4d6
# Step 6/7 : RUN apk add --no-cache pcre zlib &amp;&amp;     apk add --no-cache             --virtual .build-deps             build-base             pcre-dev             zlib-dev             openssl-dev &amp;&amp;     tar -xvf ${FILENAME}.${EXTENSION} &amp;&amp; rm ${FILENAME}.${EXTENSION} &amp;&amp;     cd ${FILENAME} &amp;&amp;     ./configure         --sbin-path=/usr/bin/nginx         --conf-path=/etc/nginx/nginx.conf         --error-log-path=/var/log/nginx/error.log         --http-log-path=/var/log/nginx/access.log         --with-pcre         --pid-path=/var/run/nginx.pid         --with-http_ssl_module &amp;&amp;     make &amp;&amp; make install &amp;&amp;     cd / &amp;&amp; rm -rfv /${FILENAME} &amp;&amp;     apk del .build-deps
#  ---&gt; Running in 0b301f64ffc1
### LONG INSTALLATION AND BUILD STUFF GOES HERE ###
# Removing intermediate container 0b301f64ffc1
#  ---&gt; dc7e4161f975
# Step 7/7 : CMD ["nginx", "-g", "daemon off;"]
#  ---&gt; Running in b579e4600247
# Removing intermediate container b579e4600247
#  ---&gt; 3e186a3c6830
# Successfully built 3e186a3c6830
# Successfully tagged custom-nginx:built
docker image ls
# REPOSITORY         TAG       IMAGE ID       CREATED         SIZE
# custom-nginx       built     3e186a3c6830   8 seconds ago   12.8MB</code></pre>
<p>Where the ubuntu version was 81.6MB, the alpine one has come down to 12.8MB which is a massive gain. Apart from the <code>apk</code> package manager, there are some other things that differ in Alpine from Ubuntu but they're not that big a deal. You can just search the internet whenever you get stuck.</p>
<h3 id="how-to-create-executable-docker-images">How to Create Executable Docker Images</h3>
<p>In the previous section you worked with the <a href="https://hub.docker.com/r/fhsinchy/rmbyext" rel="noopener noreferrer">fhsinchy/rmbyext</a> image. In this section you'll learn how to make such an executable image. </p>
<p>To begin with, open up the directory where you've cloned the repository that came with this book. The code for the <code>rmbyext</code> application resides inside the sub-directory with the same name.</p>
<p>Before you start working on the <code>Dockerfile</code> take a moment to plan out what the final output should be. In my opinion it should be like something like this:</p>
<ul>
<li>The image should have Python pre-installed.</li>
<li>It should contain a copy of my <code>rmbyext</code> script.</li>
<li>A working directory should be set where the script will be executed.</li>
<li>The <code>rmbyext</code> script should be set as the entry-point so the image can take extension names as arguments.</li>
</ul>
<p>To build the above mentioned image, take the following steps:</p>
<ul>
<li>Get a good base image for running Python scripts, like <a href="https://hub.docker.com/_/python" rel="noopener noreferrer">python</a>.</li>
<li>Set-up the working directory to an easily accessible directory.</li>
<li>Install Git so that the script can be installed from my GitHub repository.</li>
<li>Install the script using Git and pip.</li>
<li>Get rid of the build's unnecessary packages.</li>
<li>Set <code>rmbyext</code> as the entry-point for this image.</li>
</ul>
<p>Now create a new <code>Dockerfile</code> inside the <code>rmbyext</code> directory and put the following code in it:</p><pre><code class="language-Dockerfile">FROM python:3-alpine
WORKDIR /zone
RUN apk add --no-cache git &amp;&amp; \
pip install git+https://github.com/fhsinchy/rmbyext.git#egg=rmbyext &amp;&amp; \
apk del git
ENTRYPOINT [ "rmbyext" ]</code></pre>
<p>The explanation for the instructions in this file is as follows:</p>
<ul>
<li>The <code>FROM</code> instruction sets <a href="https://hub.docker.com/_/python" rel="noopener noreferrer">python</a> as the base image, making an ideal environment for running Python scripts. The <code>3-alpine</code> tag indicates that you want the Alpine variant of Python 3.</li>
<li>The <code>WORKDIR</code> instruction sets the default working directory to <code>/zone</code> here. The name of the working directory is completely random here. I found zone to be a fitting name, you may use anything you want.</li>
<li>Given the <code>rmbyext</code> script is installed from GitHub, <code>git</code> is an install time dependency. The <code>RUN</code> instruction on line 5 installs <code>git</code> then installs the <code>rmbyext</code> script using Git and pip. It also gets rid of <code>git</code> afterwards.</li>
<li>Finally on line 9, the <code>ENTRYPOINT</code> instruction sets the <code>rmbyext</code> script as the entry-point for this image.</li>
</ul>
<p>In this entire file, line 9 is the magic that turns this seemingly normal image into an executable one. Now to build the image you can execute following command:</p><pre><code>docker image build --tag rmbyext .
# Sending build context to Docker daemon  2.048kB
# Step 1/4 : FROM python:3-alpine
# 3-alpine: Pulling from library/python
# 801bfaa63ef2: Already exists
# 8723b2b92bec: Already exists
# 4e07029ccd64: Already exists
# 594990504179: Already exists
# 140d7fec7322: Already exists
# Digest: sha256:7492c1f615e3651629bd6c61777e9660caa3819cf3561a47d1d526dfeee02cf6
# Status: Downloaded newer image for python:3-alpine
#  ---&gt; d4d4f50f871a
# Step 2/4 : WORKDIR /zone
#  ---&gt; Running in 454374612a91
# Removing intermediate container 454374612a91
#  ---&gt; 7f7e49bc98d2
# Step 3/4 : RUN apk add --no-cache git &amp;&amp;     pip install git+https://github.com/fhsinchy/rmbyext.git#egg=rmbyext &amp;&amp;     apk del git
#  ---&gt; Running in 27e2e96dc95a
### LONG INSTALLATION STUFF GOES HERE ###
# Removing intermediate container 27e2e96dc95a
#  ---&gt; 3c7389432e36
# Step 4/4 : ENTRYPOINT [ "rmbyext" ]
#  ---&gt; Running in f239bbea1ca6
# Removing intermediate container f239bbea1ca6
#  ---&gt; 1746b0cedbc7
# Successfully built 1746b0cedbc7
# Successfully tagged rmbyext:latest
docker image ls
# REPOSITORY         TAG        IMAGE ID       CREATED         SIZE
# rmbyext            latest     1746b0cedbc7   4 minutes ago   50.9MB</code></pre>
<p>Here I haven't provided any tag after the image name, so the image has been tagged as <code>latest</code> by default. You should be able to run the image as you saw in the previous section. Remember to refer to the actual image name you've set, instead of <code>fhsinchy/rmbyext</code> here.</p>
<h3 id="how-to-share-your-docker-images-online">How to Share Your Docker Images Online</h3>
<p>Now that you know how to make images, it's time to share them with the world. Sharing images online is easy. All you need is an account at any of the online registries. I'll be using <a href="https://hub.docker.com/" rel="noopener noreferrer">Docker Hub</a> here. </p>
<p>Navigate to the <a href="https://hub.docker.com/signup" rel="noopener noreferrer">Sign Up</a> page and create a free account. A free account allows you to host unlimited public repositories and one private repository.</p>
<p>Once you've created the account, you'll have to sign in to it using the docker CLI. So open up your terminal and execute the following command to do so:</p><pre><code>docker login
# Login with your Docker ID to push and pull images from Docker Hub. If you don't have a Docker ID, head over to https://hub.docker.com to create one.
# Username: fhsinchy
# Password:
# WARNING! Your password will be stored unencrypted in /home/fhsinchy/.docker/config.json.
# Configure a credential helper to remove this warning. See
# https://docs.docker.com/engine/reference/commandline/login/#credentials-store
#
# Login Succeeded</code></pre>
<p>You'll be prompted for your username and password. If you input them properly, you should be logged in to your account successfully.</p>
<p>In order to share an image online, the image has to be tagged. You've already learned about tagging in a previous sub-section. Just to refresh your memory, the generic syntax for the <code>--tag</code> or <code>-t</code> option is as follows:</p><pre><code>--tag &lt;image repository&gt;:&lt;image tag&gt;</code></pre>
<p>As an example, let's share the <code>custom-nginx</code> image online. To do so, open up a new terminal window inside the <code>custom-nginx</code> project directory. </p>
<p>To share an image online, you'll have to tag it following the <code>&lt;docker hub username&gt;/&lt;image name&gt;:&lt;image tag&gt;</code> syntax. My username is <code>fhsinchy</code> so the command will look like this:</p><pre><code>docker image build --tag fhsinchy/custom-nginx:latest --file Dockerfile.built .
# Step 1/9 : FROM ubuntu:latest
#  ---&gt; d70eaf7277ea
# Step 2/9 : RUN apt-get update &amp;&amp;     apt-get install build-essential                    libpcre3                     libpcre3-dev                     zlib1g                     zlib1g-dev                     libssl-dev                     -y &amp;&amp;     apt-get clean &amp;&amp; rm -rf /var/lib/apt/lists/*
#  ---&gt; cbe1ced3da11
### LONG INSTALLATION STUFF GOES HERE ###
# Step 3/9 : ARG FILENAME="nginx-1.19.2"
#  ---&gt; Running in 33b62a0e9ffb
# Removing intermediate container 33b62a0e9ffb
#  ---&gt; fafc0aceb9c8
# Step 4/9 : ARG EXTENSION="tar.gz"
#  ---&gt; Running in 5c32eeb1bb11
# Removing intermediate container 5c32eeb1bb11
#  ---&gt; 36efdf6efacc
# Step 5/9 : ADD https://nginx.org/download/${FILENAME}.${EXTENSION} .
# Downloading [==================================================&gt;]  1.049MB/1.049MB
#  ---&gt; dba252f8d609
# Step 6/9 : RUN tar -xvf ${FILENAME}.${EXTENSION} &amp;&amp; rm ${FILENAME}.${EXTENSION}
#  ---&gt; Running in 2f5b091b2125
### LONG EXTRACTION STUFF GOES HERE ###
# Removing intermediate container 2f5b091b2125
#  ---&gt; 2c9a325d74f1
# Step 7/9 : RUN cd ${FILENAME} &amp;&amp;     ./configure         --sbin-path=/usr/bin/nginx         --conf-path=/etc/nginx/nginx.conf         --error-log-path=/var/log/nginx/error.log         --http-log-path=/var/log/nginx/access.log         --with-pcre         --pid-path=/var/run/nginx.pid         --with-http_ssl_module &amp;&amp;     make &amp;&amp; make install
#  ---&gt; Running in 11cc82dd5186
### LONG CONFIGURATION AND BUILD STUFF GOES HERE ###
# Removing intermediate container 11cc82dd5186
#  ---&gt; 6c122e485ec8
# Step 8/9 : RUN rm -rf /${FILENAME}}
#  ---&gt; Running in 04102366960b
# Removing intermediate container 04102366960b
#  ---&gt; 6bfa35420a73
# Step 9/9 : CMD ["nginx", "-g", "daemon off;"]
#  ---&gt; Running in 63ee44b571bb
# Removing intermediate container 63ee44b571bb
#  ---&gt; 4ce79556db1b
# Successfully built 4ce79556db1b
# Successfully tagged fhsinchy/custom-nginx:latest</code></pre>
<p>In this command the <code>fhsinchy/custom-nginx</code> is the image repository and <code>latest</code> is the tag. The image name can be anything you want and can not be changed once you've uploaded the image. The tag can be changed whenever you want and usually reflects the version of the software or different kind of builds.</p>
<p>Take the <code>node</code> image as an example. The <code>node:lts</code> image refers to the long term support version of Node.js whereas the <code>node:lts-alpine</code> version refers to the Node.js version built for Alpine Linux, which is much smaller than the regular one.</p>
<p>If you do not give the image any tag, it'll be automatically tagged as <code>latest</code>. But that doesn't mean that the <code>latest</code> tag will always refer to the latest version. If, for some reason, you explicitly tag an older version of the image as <code>latest</code>, then Docker will not make any extra effort to cross check that.</p>
<p>Once the image has been built, you can them upload it by executing the following command:</p><pre><code>docker image push &lt;image repository&gt;:&lt;image tag&gt;</code></pre>
<p>So in my case the command will be as follows:</p><pre><code>docker image push fhsinchy/custom-nginx:latest
# The push refers to repository [docker.io/fhsinchy/custom-nginx]
# 4352b1b1d9f5: Pushed
# a4518dd720bd: Pushed
# 1d756dc4e694: Pushed
# d7a7e2b6321a: Pushed
# f6253634dc78: Mounted from library/ubuntu
# 9069f84dbbe9: Mounted from library/ubuntu
# bacd3af13903: Mounted from library/ubuntu
# latest: digest: sha256:ffe93440256c9edb2ed67bf3bba3c204fec3a46a36ac53358899ce1a9eee497a size: 1788</code></pre>
<p>Depending on the image size, the upload may take some time. Once it's done you should able to find the image in your hub profile page.</p>
<h2 id="how-to-containerize-a-javascript-application">How to Containerize a JavaScript Application</h2>
<p>Now that you've got some idea of how to create images, it's time to work with something a bit more relevant. </p>
<p>In this sub-section, you'll be working with the source code of the <a href="https://hub.docker.com/r/fhsinchy/hello-dock" rel="noopener noreferrer">fhsinchy/hello-dock</a> image that you worked with on a previous section. In the process of containerizing this very simple application, you'll be introduced to volumes and multi-staged builds, two of the most important concepts in Docker.</p>
<h3 id="how-to-write-the-development-dockerfile">How to Write the Development Dockerfile</h3>
<p>To begin with, open up the directory where you've cloned the repository that came with this book. Code for the <code>hello-dock</code> application resides inside the sub-directory with the same name.</p>
<p>This is a very simple JavaScript project powered by the <a href="https://github.com/vitejs/vite" rel="noopener noreferrer">vitejs/vite</a> project. Don't worry though, you don't need to know JavaScript or vite in order to go through this sub-section. Having a basic understanding of <a href="https://nodejs.org/" rel="noopener noreferrer">Node.js</a> and <a href="https://www.npmjs.com/" rel="noopener noreferrer">npm</a> will suffice.</p>
<p>Just like any other project you've done in the previous sub-section, you'll begin by making a plan of how you want this application to run. In my opinion, the plan should be as follows:</p>
<ul>
<li>Get a good base image for running JavaScript applications, like <a href="https://hub.docker.com/_/node" rel="noopener noreferrer">node</a>.</li>
<li>Set the default working directory inside the image.</li>
<li>Copy the <code>package.json</code> file into the image.</li>
<li>Install necessary dependencies.</li>
<li>Copy the rest of the project files.</li>
<li>Start the <code>vite</code> development server by executing <code>npm run dev</code> command.</li>
</ul>
<p>This plan should always come from the developer of the application that you're containerizing. If you're the developer yourself, then you should already have a proper understanding of how this application needs to be run. </p>
<p>Now if you put the above mentioned plan inside <code>Dockerfile.dev</code>, the file should look like as follows:</p><pre><code class="language-Dockerfile">FROM node:lts-alpine
EXPOSE 3000
USER node
RUN mkdir -p /home/node/app
WORKDIR /home/node/app
COPY ./package.json .
RUN npm install
COPY . .
CMD [ "npm", "run", "dev" ]</code></pre>
<p>The explanation for this code is as follows:</p>
<ul>
<li>The <code>FROM</code> instruction here sets the official Node.js image as the base, giving you all the goodness of Node.js necessary to run any JavaScript application. The <code>lts-alpine</code> tag indicates that you want to use the Alpine variant, long term support version of the image. Available tags and necessary documentation for the image can be found on the <a href="https://hub.docker.com/_/node" rel="noopener noreferrer">node</a> hub page.</li>
<li>The <code>USER</code> instruction sets the default user for the image to <code>node</code>. By default Docker runs containers as the root user. But according to <a href="https://github.com/nodejs/docker-node/blob/master/docs/BestPractices.md" rel="noopener noreferrer">Docker and Node.js Best Practices</a> this can pose a security threat. So it's a better idea to run as a non-root user whenever possible. The node image comes with a non-root user named <code>node</code> which you can set as the default user using the <code>USER</code> instruction.</li>
<li>The <code>RUN mkdir -p /home/node/app</code> instruction creates a directory called <code>app</code> inside the home directory of the <code>node</code> user. The home directory for any non-root user in Linux is usually <code>/home/&lt;user name&gt;</code> by default.</li>
<li>Then the <code>WORKDIR</code> instruction sets the default working directory to the newly created <code>/home/node/app</code> directory. By default the working directory of any image is the root. You don't want any unnecessary files sprayed all over your root directory, do you? Hence you change the default working directory to something more sensible like <code>/home/node/app</code> or whatever you like. This working directory will be applicable to any subsequent <code>COPY</code>, <code>ADD</code>, <code>RUN</code> and <code>CMD</code> instructions.</li>
<li>The <code>COPY</code> instruction here copies the <code>package.json</code> file which contains information regarding all the necessary dependencies for this application. The <code>RUN</code> instruction executes the <code>npm install</code> command which is the default command for installing dependencies using a <code>package.json</code> file in Node.js projects. The <code>.</code> at the end represents the working directory.</li>
<li>The second <code>COPY</code> instruction copies the rest of the content from the current directory (<code>.</code>) of the host filesystem to the working directory (<code>.</code>) inside the image.</li>
<li>Finally, the <code>CMD</code> instruction here sets the default command for this image which is <code>npm run dev</code> written in <code>exec</code> form.</li>
<li>The <code>vite</code> development server by default runs on port <code>3000</code> , and adding an <code>EXPOSE</code> command seemed like a good idea, so there you go.</li>
</ul>
<p>Now, to build an image from this <code>Dockerfile.dev</code> you can execute the following command:</p><pre><code>docker image build --file Dockerfile.dev --tag hello-dock:dev .
# Step 1/7 : FROM node:lts
#  ---&gt; b90fa0d7cbd1
# Step 2/7 : EXPOSE 3000
#  ---&gt; Running in 722d639badc7
# Removing intermediate container 722d639badc7
#  ---&gt; e2a8aa88790e
# Step 3/7 : WORKDIR /app
#  ---&gt; Running in 998e254b4d22
# Removing intermediate container 998e254b4d22
#  ---&gt; 6bd4c42892a4
# Step 4/7 : COPY ./package.json .
#  ---&gt; 24fc5164a1dc
# Step 5/7 : RUN npm install
#  ---&gt; Running in 23b4de3f930b
### LONG INSTALLATION STUFF GOES HERE ###
# Removing intermediate container 23b4de3f930b
#  ---&gt; c17ecb19a210
# Step 6/7 : COPY . .
#  ---&gt; afb6d9a1bc76
# Step 7/7 : CMD [ "npm", "run", "dev" ]
#  ---&gt; Running in a7ff529c28fe
# Removing intermediate container a7ff529c28fe
#  ---&gt; 1792250adb79
# Successfully built 1792250adb79
# Successfully tagged hello-dock:dev</code></pre>
<p>Given the filename is not <code>Dockerfile</code> you have to explicitly pass the filename using the <code>--file</code> option. A container can be run using this image by executing the following command:</p><pre><code>docker container run \
--rm \
--detach \
--publish 3000:3000 \
--name hello-dock-dev \
hello-dock:dev
# 21b9b1499d195d85e81f0e8bce08f43a64b63d589c5f15cbbd0b9c0cb07ae268</code></pre>
<p>Now visit <code>http://127.0.0.1:3000</code> to see the <code>hello-dock</code> application in action.</p>
<p>Congratulations on running your first real-world application inside a container. The code you've just written is okay but there is one big issue with it and a few places where it can be improved. Let's begin with the issue first.</p>
<h3 id="how-to-work-with-bind-mounts-in-docker">How to Work With Bind Mounts in Docker</h3>
<p>If you've worked with any front-end JavaScript framework before, you should know that the development servers in these frameworks usually come with a hot reload feature. That is if you make a change in your code, the server will reload, automatically reflecting any changes you've made immediately.</p>
<p>But if you make any changes in your code right now, you'll see nothing happening to your application running in the browser. This is because you're making changes in the code that you have in your local file system but the application you're seeing in the browser resides inside the container file system.</p>
<p>To solve this issue, you can again make use of a <a href="https://docs.docker.com/storage/bind-mounts/" rel="noopener noreferrer">bind mount</a>. Using bind mounts, you can easily mount one of your local file system directories inside a container. Instead of making a copy of the local file system, the bind mount can reference the local file system directly from inside the container.</p>
<p>This way, any changes you make to your local source code will reflect immediately inside the container, &nbsp;triggering the hot reload feature of the <code>vite</code> development server. Changes made to the file system inside the container will be reflected on your local file system as well.</p>
<p>You've already learned in the <a href="#working-with-executable-images">Working With Executable Images</a> sub-section, bind mounts can be created using the <code>--volume</code> or <code>-v</code> option for the <code>container run</code> or <code>container start</code> commands. Just to remind you, the generic syntax is as follows:</p><pre><code>--volume &lt;local file system directory absolute path&gt;:&lt;container file system directory absolute path&gt;:&lt;read write access&gt;</code></pre>
<p>Stop your previously started <code>hello-dock-dev</code> container, and start a new container by executing the following command:</p><pre><code>docker container run \
--rm \
--publish 3000:3000 \
--name hello-dock-dev \
--volume $(pwd):/home/node/app \
hello-dock:dev
# sh: 1: vite: not found
# npm ERR! code ELIFECYCLE
# npm ERR! syscall spawn
# npm ERR! file sh
# npm ERR! errno ENOENT
# npm ERR! hello-dock@0.0.0 dev: `vite`
# npm ERR! spawn ENOENT
# npm ERR!
# npm ERR! Failed at the hello-dock@0.0.0 dev script.
# npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
# npm WARN Local package.json exists, but node_modules missing, did you mean to install?</code></pre>
<p>Keep in mind, I've omitted the <code>--detach</code> option and that's to demonstrate a very important point. As you can see, the application is not running at all now.</p>
<p>That's because although the usage of a volume solves the issue of hot reloads, it introduces another problem. If you have any previous experience with Node.js, you may know that the dependencies of a Node.js project live inside the <code>node_modules</code> directory on the project root.</p>
<p>Now that you're mounting the project root on your local file system as a volume inside the container, the content inside the container gets replaced along with the <code>node_modules</code> directory containing all the dependencies. This means that the <code>vite</code> package has gone missing.</p>
<h3 id="how-to-work-with-anonymous-volumes-in-docker">How to Work With Anonymous Volumes in Docker</h3>
<p>This problem can be solved using an anonymous volume. An anonymous volume is identical to a bind mount except that you don't need to specify the source directory here. The generic syntax for creating an anonymous volume is as follows:</p><pre><code>--volume &lt;container file system directory absolute path&gt;:&lt;read write access&gt;</code></pre>
<p>So the final command for starting the <code>hello-dock</code> container with both volumes should be as follows:</p><pre><code>docker container run \
--rm \
--detach \
--publish 3000:3000 \
--name hello-dock-dev \
--volume $(pwd):/home/node/app \
--volume /home/node/app/node_modules \
hello-dock:dev
# 53d1cfdb3ef148eb6370e338749836160f75f076d0fbec3c2a9b059a8992de8b</code></pre>
<p>Here, Docker will take the entire <code>node_modules</code> directory from inside the container and tuck it away in some other directory managed by the Docker daemon on your host file system and will mount that directory as <code>node_modules</code> inside the container.</p>
<h3 id="how-to-perform-multi-staged-builds-in-docker">How to Perform Multi-Staged Builds in Docker</h3>
<p>So far in this section, you've built an image for running a JavaScript application in development mode. Now if you want to build the image in production mode, some new challenges show up. </p>
<p>In development mode the <code>npm run serve</code> command starts a development server that serves the application to the user. That server not only serves the files but also provides the hot reload feature.</p>
<p>In production mode, the <code>npm run build</code> command compiles all your JavaScript code into some static HTML, CSS, and JavaScript files. To run these files you don't need node or any other runtime dependencies. All you need is a server like <code>nginx</code> for example.</p>
<p>To create an image where the application runs in production mode, you can take the following steps:</p>
<ul>
<li>Use <code>node</code> as the base image and build the application.</li>
<li>Install <code>nginx</code> inside the node image and use that to serve the static files.</li>
</ul>
<p>This approach is completely valid. But the problem is that the <code>node</code> image is big and most of the stuff it carries is unnecessary to serve your static files. A better approach to this scenario is as follows:</p>
<ul>
<li>Use <code>node</code> image as the base and build the application.</li>
<li>Copy the files created using the <code>node</code> image to an <code>nginx</code> image.</li>
</ul>
<p>This way your image only contains the files that are needed and becomes really handy. </p>
<p>This approach is a multi-staged build. To perform such a build, create a new <code>Dockerfile</code> inside your <code>hello-dock</code> project directory and put the following content in it:</p><pre><code class="language-Dockerfile">FROM node:lts-alpine as builder
WORKDIR /app
COPY ./package.json ./
RUN npm install
COPY . .
RUN npm run build
FROM nginx:stable-alpine
EXPOSE 80
COPY --from=builder /app/dist /usr/share/nginx/html</code></pre>
<p>As you can see the <code>Dockerfile</code> looks a lot like your previous ones with a few oddities. The explanation for this file is as follows:</p>
<ul>
<li>Line 1 starts the first stage of the build using <code>node:lts-alpine</code> as the base image. The <code>as builder</code> syntax assigns a name to this stage so that it can be referred to later on.</li>
<li>From line 3 to line 9, it's standard stuff that you've seen many times before. The <code>RUN npm run build</code> command actually compiles the entire application and tucks it inside <code>/app/dist</code> directory where <code>/app</code> is the working directory and <code>/dist</code> is the default output directory for <code>vite</code> applications.</li>
<li>Line 11 starts the second stage of the build using <code>nginx:stable-alpine</code> as the base image.</li>
<li>The NGINX server runs on port 80 by default so the line <code>EXPOSE 80</code> is added.</li>
<li>The last line is a <code>COPY</code> instruction. The <code>--from=builder</code> part indicates that you want to copy some files from the <code>builder</code> stage. After that it's a standard copy instruction where <code>/app/dist</code> is the source and <code>/usr/share/nginx/html</code> is the destination. The destination used here is the default site path for NGINX so any static file you put inside there will be automatically served.</li>
</ul>
<p>As you can see, the resulting image is a <code>nginx</code> base image containing only the files necessary for running the application. To build this image execute the following command:</p><pre><code>docker image build --tag hello-dock:prod .
# Step 1/9 : FROM node:lts-alpine as builder
#  ---&gt; 72aaced1868f
# Step 2/9 : WORKDIR /app
#  ---&gt; Running in e361c5c866dd
# Removing intermediate container e361c5c866dd
#  ---&gt; 241b4b97b34c
# Step 3/9 : COPY ./package.json ./
#  ---&gt; 6c594c5d2300
# Step 4/9 : RUN npm install
#  ---&gt; Running in 6dfabf0ee9f8
# npm WARN deprecated fsevents@2.1.3: Please update to v 2.2.x
#
# &gt; esbuild@0.8.29 postinstall /app/node_modules/esbuild
# &gt; node install.js
#
# npm notice created a lockfile as package-lock.json. You should commit this file.
# npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@~2.1.2 (node_modules/chokidar/node_modules/fsevents):
# npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@2.1.3: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})
# npm WARN hello-dock@0.0.0 No description
# npm WARN hello-dock@0.0.0 No repository field.
# npm WARN hello-dock@0.0.0 No license field.
#
# added 327 packages from 301 contributors and audited 329 packages in 35.971s
#
# 26 packages are looking for funding
#   run `npm fund` for details
#
# found 0 vulnerabilities
#
# Removing intermediate container 6dfabf0ee9f8
#  ---&gt; 21fd1b065314
# Step 5/9 : COPY . .
#  ---&gt; 43243f95bff7
# Step 6/9 : RUN npm run build
#  ---&gt; Running in 4d918cf18584
#
# &gt; hello-dock@0.0.0 build /app
# &gt; vite build
#
# - Building production bundle...
#
# [write] dist/index.html 0.39kb, brotli: 0.15kb
# [write] dist/_assets/docker-handbook-github.3adb4865.webp 12.32kb
# [write] dist/_assets/index.eabcae90.js 42.56kb, brotli: 15.40kb
# [write] dist/_assets/style.0637ccc5.css 0.16kb, brotli: 0.10kb
# - Building production bundle...
#
# Build completed in 1.71s.
#
# Removing intermediate container 4d918cf18584
#  ---&gt; 187fb3e82d0d
# Step 7/9 : EXPOSE 80
#  ---&gt; Running in b3aab5cf5975
# Removing intermediate container b3aab5cf5975
#  ---&gt; d6fcc058cfda
# Step 8/9 : FROM nginx:stable-alpine
# stable: Pulling from library/nginx
# 6ec7b7d162b2: Already exists
# 43876acb2da3: Pull complete
# 7a79edd1e27b: Pull complete
# eea03077c87e: Pull complete
# eba7631b45c5: Pull complete
# Digest: sha256:2eea9f5d6fff078ad6cc6c961ab11b8314efd91fb8480b5d054c7057a619e0c3
# Status: Downloaded newer image for nginx:stable
#  ---&gt; 05f64a802c26
# Step 9/9 : COPY --from=builder /app/dist /usr/share/nginx/html
#  ---&gt; 8c6dfc34a10d
# Successfully built 8c6dfc34a10d
# Successfully tagged hello-dock:prod</code></pre>
<p>Once the image has been built, you may run a new container by executing the following command:</p><pre><code>docker container run \
--rm \
--detach \
--name hello-dock-prod \
--publish 8080:80 \
hello-dock:prod
# 224aaba432bb09aca518fdd0365875895c2f5121eb668b2e7b2d5a99c019b953</code></pre>
<p>The running application should be available on <code>http://127.0.0.1:8080</code>:</p>
<p>Here you can see my <code>hello-dock</code> application in all its glory. Multi-staged builds can be very useful if you're building large applications with a lot of dependencies. If configured properly, images built in multiple stages can be very optimized and compact.</p>
<h3 id="how-to-ignore-unnecessary-files">How to Ignore Unnecessary Files</h3>
<p>If you've been working with <code>git</code> for some time now, you may know about the <code>.gitignore</code> files in projects. These contain a list of files and directories to be excluded from the repository. </p>
<p>Well, Docker has a similar concept. The <code>.dockerignore</code> file contains a list of files and directories to be excluded from image builds. You can find a pre-created <code>.dockerignore</code> file in the <code>hello-dock</code> directory.</p><pre><code class="language-.dockerignore">.git
*Dockerfile*
*docker-compose*
node_modules</code></pre>
<p>This <code>.dockerignore</code> file has to be in the build context. Files and directories mentioned here will be ignored by the <code>COPY</code> instruction. But if you do a bind mount, the <code>.dockerignore</code> file will have no effect. I've added <code>.dockerignore</code> files where necessary in the project repository.</p>
<h2 id="network-manipulation-basics-in-docker">Network Manipulation Basics in Docker</h2>
<p>So far in this book, you've only worked with single container projects. But in real life, the majority of projects that you'll have to work with will have more than one container. And to be honest, working with a bunch of containers can be a little difficult if you don't understand the nuances of container isolation. </p>
<p>So in this section of the book, you'll get familiar with basic networking with Docker and you'll work hands on with a small multi-container project.</p>
<p>Well you've already learned in the previous section that containers are isolated environments. Now consider a scenario where you have a <code>notes-api</code> application powered by <a href="https://expressjs.com/" rel="noopener noreferrer">Express.js</a> and a <a href="https://www.postgresql.org/" rel="noopener noreferrer">PostgreSQL</a> database server running in two separate containers.</p>
<p>These two containers are completely isolated from each other and are oblivious to each other's existence. <strong>So how do you connect the two? Won't that be a challenge?</strong>‌</p>
<p>You may think of two possible solutions to this problem. They are as follows:</p>
<ul>
<li>Accessing the database server using an exposed port.</li>
<li>Accessing the database server using its IP address and default port.</li>
</ul>
<p>The first one involves exposing a port from the <code>postgres</code> container and the <code>notes-api</code> will connect through that. Assume that the exposed port from the <code>postgres</code> container is 5432. Now if you try to connect to <code>127.0.0.1:5432</code> from inside the <code>notes-api</code> container, you'll find that the <code>notes-api</code> can't find the database server at all.</p>
<p>The reason is that when you're saying <code>127.0.0.1</code> inside the <code>notes-api</code> container, you're simply referring to the <code>localhost</code> of that container and that container only. The <code>postgres</code> server simply doesn't exist there. As a result the <code>notes-api</code> application failed to connect.</p>
<p>The second solution you may think of is finding the exact IP address of the <code>postgres</code> container using the <code>container inspect</code> command and using that with the port. Assuming the name of the <code>postgres</code> container is <code>notes-api-db-server</code> you can easily get the IP address by executing the following command:</p><pre><code>docker container inspect --format='{{range .NetworkSettings.Networks}} {{.IPAddress}} {{end}}' notes-api-db-server
#  172.17.0.2</code></pre>
<p>Now given that the default port for <code>postgres</code> is <code>5432</code>, you can very easily access the database server by connecting to <code>172.17.0.2:5432</code> from the <code>notes-api</code> container.</p>
<p>There are problems in this approach as well. Using IP addresses to refer to a container is not recommended. Also, if the container gets destroyed and recreated, the IP address may change. Keeping track of these changing IP addresses can be pretty hectic.</p>
<p>Now that I've dismissed the possible wrong answers to the original question, the correct answer is, <strong>you connect them by putting them under a user-defined bridge network.</strong></p>
<h3 id="docker-network-basics">Docker Network Basics</h3>
<p>A network in Docker is another logical object like a container and image. Just like the other two, there is a plethora of commands under the <code>docker network</code> group for manipulating networks. </p>
<p>To list out the networks in your system, execute the following command:</p><pre><code>docker network ls
# NETWORK ID     NAME      DRIVER    SCOPE
# c2e59f2b96bd   bridge    bridge    local
# 124dccee067f   host      host      local
# 506e3822bf1f   none      null      local</code></pre>
<p>You should see three networks in your system. Now look at the <code>DRIVER</code> column of the table here. These drivers are can be treated as the type of network. </p>
<p>By default, Docker has five networking drivers. They are as follows:</p>
<ul>
<li><code>bridge</code> - The default networking driver in Docker. This can be used when multiple containers are running in standard mode and need to communicate with each other.</li>
<li><code>host</code> - Removes the network isolation completely. Any container running under a <code>host</code> network is basically attached to the network of the host system.</li>
<li><code>none</code> - This driver disables networking for containers altogether. I haven't found any use-case for this yet.</li>
<li><code>overlay</code> - This is used for connecting multiple Docker daemons across computers and is out of the scope of this book.</li>
<li><code>macvlan</code> - Allows assignment of MAC addresses to containers, making them function like physical devices in a network.</li>
</ul>
<p>There are also third-party plugins that allow you to integrate Docker with specialized network stacks. Out of the five mentioned above, you'll only work with the <code>bridge</code> networking driver in this book.</p>
<h3 id="how-to-create-a-user-defined-bridge-in-docker">How to Create a User-Defined Bridge in Docker</h3>
<p>Before you start creating your own bridge, I would like to take some time to discuss the default bridge network that comes with Docker. Let's begin by listing all the networks on your system:</p><pre><code>docker network ls
# NETWORK ID     NAME      DRIVER    SCOPE
# c2e59f2b96bd   bridge    bridge    local
# 124dccee067f   host      host      local
# 506e3822bf1f   none      null      local</code></pre>
<p>As you can see, Docker comes with a default bridge network named <code>bridge</code>. Any container you run will be automatically attached to this bridge network:</p><pre><code>docker container run --rm --detach --name hello-dock --publish 8080:80 fhsinchy/hello-dock
# a37f723dad3ae793ce40f97eb6bb236761baa92d72a2c27c24fc7fda0756657d
docker network inspect --format='{{range .Containers}}{{.Name}}{{end}}' bridge
# hello-dock</code></pre>
<p>Containers attached to the default bridge network can communicate with each others using IP addresses which I have already discouraged in the previous sub-section.</p>
<p>A user-defined bridge, however, has some extra features over the default one. According to the official <a href="https://docs.docker.com/network/bridge/#differences-between-user-defined-bridges-and-the-default-bridge" rel="noopener noreferrer">docs</a> on this topic, some notable extra features are as follows:</p>
<ul>
<li><strong>User-defined bridges provide automatic DNS resolution between containers:</strong> This means containers attached to the same network can communicate with each others using the container name. So if you have two containers named <code>notes-api</code> and <code>notes-db</code> the API container will be able to connect to the database container using the <code>notes-db</code> name.</li>
<li><strong>User-defined bridges provide better isolation: </strong>All containers are attached to the default bridge network by default which can cause conflicts among them. Attaching containers to a user-defined bridge can ensure better isolation.</li>
<li><strong>Containers can be attached and detached from user-defined networks on the fly:</strong> During a container’s lifetime, you can connect or disconnect it from user-defined networks on the fly. To remove a container from the default bridge network, you need to stop the container and recreate it with different network options.</li>
</ul>
<p>Now that you've learned quite a lot about a user-defined network, it's time to create one for yourself. A network can be created using the <code>network create</code> command. The generic syntax for the command is as follows:</p><pre><code>docker network create &lt;network name&gt;</code></pre>
<p>To create a network with the name <code>skynet</code> execute the following command:</p><pre><code>docker network create skynet
# 7bd5f351aa892ac6ec15fed8619fc3bbb95a7dcdd58980c28304627c8f7eb070
docker network ls
# NETWORK ID     NAME     DRIVER    SCOPE
# be0cab667c4b   bridge   bridge    local
# 124dccee067f   host     host      local
# 506e3822bf1f   none     null      local
# 7bd5f351aa89   skynet   bridge    local</code></pre>
<p>As you can see a new network has been created with the given name. No container is currently attached to this network. In the next sub-section, you'll learn about attaching containers to a network.</p>
<h3 id="how-to-attach-a-container-to-a-network-in-docker">How to Attach a Container to a Network in Docker</h3>
<p>There are mostly two ways of attaching a container to a network. First, you can use the network connect command to attach a container to a network. The generic syntax for the command is as follows:</p><pre><code>docker network connect &lt;network identifier&gt; &lt;container identifier&gt;</code></pre>
<p>To connect the <code>hello-dock</code> container to the <code>skynet</code> network, you can execute the following command:</p><pre><code>docker network connect skynet hello-dock
docker network inspect --format='{{range .Containers}} {{.Name}} {{end}}' skynet
#  hello-dock
docker network inspect --format='{{range .Containers}} {{.Name}} {{end}}' bridge
#  hello-dock</code></pre>
<p>As you can see from the outputs of the two <code>network inspect</code> commands, the <code>hello-dock</code> container is now attached to both the <code>skynet</code> and the default <code>bridge</code> network.</p>
<p>The second way of attaching a container to a network is by using the <code>--network</code> option for the <code>container run</code> or <code>container create</code> commands. The generic syntax for the option is as follows:</p><pre><code>--network &lt;network identifier&gt;</code></pre>
<p>To run another <code>hello-dock</code> container attached to the same network, you can execute the following command:</p><pre><code>docker container run --network skynet --rm --name alpine-box -it alpine sh
# lands you into alpine linux shell
/ # ping hello-dock
# PING hello-dock (172.18.0.2): 56 data bytes
# 64 bytes from 172.18.0.2: seq=0 ttl=64 time=0.191 ms
# 64 bytes from 172.18.0.2: seq=1 ttl=64 time=0.103 ms
# 64 bytes from 172.18.0.2: seq=2 ttl=64 time=0.139 ms
# 64 bytes from 172.18.0.2: seq=3 ttl=64 time=0.142 ms
# 64 bytes from 172.18.0.2: seq=4 ttl=64 time=0.146 ms
# 64 bytes from 172.18.0.2: seq=5 ttl=64 time=0.095 ms
# 64 bytes from 172.18.0.2: seq=6 ttl=64 time=0.181 ms
# 64 bytes from 172.18.0.2: seq=7 ttl=64 time=0.138 ms
# 64 bytes from 172.18.0.2: seq=8 ttl=64 time=0.158 ms
# 64 bytes from 172.18.0.2: seq=9 ttl=64 time=0.137 ms
# 64 bytes from 172.18.0.2: seq=10 ttl=64 time=0.145 ms
# 64 bytes from 172.18.0.2: seq=11 ttl=64 time=0.138 ms
# 64 bytes from 172.18.0.2: seq=12 ttl=64 time=0.085 ms
--- hello-dock ping statistics ---
13 packets transmitted, 13 packets received, 0% packet loss
round-trip min/avg/max = 0.085/0.138/0.191 ms</code></pre>
<p>As you can see, running <code>ping hello-dock</code> from inside the <code>alpine-box</code> container works because both of the containers are under the same user-defined bridge network and automatic DNS resolution is working.</p>
<p>Keep in mind, though, that in order for the automatic DNS resolution to work you must assign custom names to the containers. Using the randomly generated name will not work.</p>
<h3 id="how-to-detach-containers-from-a-network-in-docker">How to Detach Containers from a Network in Docker</h3>
<p>In the previous sub-section you learned about attaching containers to a network. In this sub-section, you'll learn about how to detach them. </p>
<p>You can use the <code>network disconnect</code> command for this task. The generic syntax for the command is as follows:</p><pre><code>docker network disconnect &lt;network identifier&gt; &lt;container identifier&gt;</code></pre>
<p>To detach the <code>hello-dock</code> container from the <code>skynet</code> network, you can execute the following command:</p><pre><code>docker network disconnect skynet hello-dock</code></pre>
<p>Just like the <code>network connect</code> command, the <code>network disconnect</code> command doesn't give any output.</p>
<h3 id="how-to-get-rid-of-networks-in-docker">How to Get Rid of Networks in Docker</h3>
<p>Just like the other logical objects in Docker, networks can be removed using the <code>network rm</code> command. The generic syntax for the command is as follows:</p><pre><code>docker network rm &lt;network identifier&gt;</code></pre>
<p>To remove the <code>skynet</code> network from your system, you can execute the following command:</p><pre><code>docker network rm skynet</code></pre>
<p>You can also use the <code>network prune</code> command to remove any unused networks from your system. The command also has the <code>-f</code> or <code>--force</code> and <code>-a</code> or <code>--all</code> options.</p>
<h2 id="how-to-containerize-a-multi-container-javascript-application">How to Containerize a Multi-Container JavaScript Application</h2>
<p>Now that you've learned enough about networks in Docker, in this section you'll learn to containerize a full-fledged multi-container project. The project you'll be working with is a simple <code>notes-api</code> powered by Express.js and PostgreSQL.</p>
<p>In this project there are two containers in total that you'll have to connect using a network. Apart from this, you'll also learn about concepts like environment variables and named volumes. So without further ado, let's jump right in.</p>
<h3 id="how-to-run-the-database-server">How to Run the Database Server</h3>
<p>The database server in this project is a simple PostgreSQL server and uses the official <a href="https://hub.docker.com/_/postgres" rel="noopener noreferrer">postgres</a> image. </p>
<p>According to the official docs, in order to run a container with this image, you must provide the <code>POSTGRES_PASSWORD</code> environment variable. Apart from this one, I'll also provide a name for the default database using the <code>POSTGRES_DB</code> environment variable. PostgreSQL by default listens on port <code>5432</code>, so you need to publish that as well.</p>
<p>To run the database server you can execute the following command:</p><pre><code>docker container run \
--detach \
--name=notes-db \
--env POSTGRES_DB=notesdb \
--env POSTGRES_PASSWORD=secret \
--network=notes-api-network \
postgres:12
# a7b287d34d96c8e81a63949c57b83d7c1d71b5660c87f5172f074bd1606196dc
docker container ls
# CONTAINER ID   IMAGE         COMMAND                  CREATED              STATUS              PORTS      NAMES
# a7b287d34d96   postgres:12   "docker-entrypoint.s…"   About a minute ago   Up About a minute   5432/tcp   notes-db</code></pre>
<p>The <code>--env</code> option for the <code>container run</code> and <code>container create</code> commands can be used for providing environment variables to a container. As you can see, the database container has been created successfully and is running now.</p>
<p>Although the container is running, there is a small problem. Databases like PostgreSQL, MongoDB, and MySQL persist their data in a directory. PostgreSQL uses the <code>/var/lib/postgresql/data</code> directory inside the container to persist data. </p>
<p>Now what if the container gets destroyed for some reason? You'll lose all your data. To solve this problem, a named volume can be used.</p>
<h3 id="how-to-work-with-named-volumes-in-docker">How to Work with Named Volumes in Docker</h3>
<p>Previously you've worked with bind mounts and anonymous volumes. A named volume is very similar to an anonymous volume except that you can refer to a named volume using its name. </p>
<p>Volumes are also logical objects in Docker and can be manipulated using the command-line. The <code>volume create</code> command can be used for creating a named volume.</p>
<p>The generic syntax for the command is as follows:</p><pre><code>docker volume create &lt;volume name&gt;</code></pre>
<p>To create a volume named <code>notes-db-data</code> you can execute the following command:</p><pre><code>docker volume create notes-db-data
# notes-db-data
docker volume ls
# DRIVER    VOLUME NAME
# local     notes-db-data</code></pre>
<p>This volume can now be mounted to <code>/var/lib/postgresql/data</code> inside the <code>notes-db</code> container. To do so, stop and remove the <code>notes-db</code> container:</p><pre><code>docker container stop notes-db
# notes-db
docker container rm notes-db
# notes-db</code></pre>
<p>Now run a new container and assign the volume using the <code>--volume</code> or <code>-v</code> option.</p><pre><code>docker container run \
--detach \
--volume notes-db-data:/var/lib/postgresql/data \
--name=notes-db \
--env POSTGRES_DB=notesdb \
--env POSTGRES_PASSWORD=secret \
--network=notes-api-network \
postgres:12
# 37755e86d62794ed3e67c19d0cd1eba431e26ab56099b92a3456908c1d346791</code></pre>
<p>Now inspect the <code>notes-db</code> container to make sure that the mounting was successful:</p><pre><code>docker container inspect --format='{{range .Mounts}} {{ .Name }} {{end}}' notes-db
#  notes-db-data</code></pre>
<p>Now the data will safely be stored inside the <code>notes-db-data</code> volume and can be reused in the future. A bind mount can also be used instead of a named volume here, but I prefer a named volume in such scenarios.</p>
<h3 id="how-to-access-logs-from-a-container-in-docker">How to Access Logs from a Container in Docker</h3>
<p>In order to see the logs from a container, you can use the <code>container logs</code> command. The generic syntax for the command is as follows:</p><pre><code>docker container logs &lt;container identifier&gt;</code></pre>
<p>To access the logs from the <code>notes-db</code> container, you can execute the following command:</p><pre><code>docker container logs notes-db
# The files belonging to this database system will be owned by user "postgres".
# This user must also own the server process.
# The database cluster will be initialized with locale "en_US.utf8".
# The default database encoding has accordingly been set to "UTF8".
# The default text search configuration will be set to "english".
#
# Data page checksums are disabled.
#
# fixing permissions on existing directory /var/lib/postgresql/data ... ok
# creating subdirectories ... ok
# selecting dynamic shared memory implementation ... posix
# selecting default max_connections ... 100
# selecting default shared_buffers ... 128MB
# selecting default time zone ... Etc/UTC
# creating configuration files ... ok
# running bootstrap script ... ok
# performing post-bootstrap initialization ... ok
# syncing data to disk ... ok
#
#
# Success. You can now start the database server using:
#
#     pg_ctl -D /var/lib/postgresql/data -l logfile start
#
# initdb: warning: enabling "trust" authentication for local connections
# You can change this by editing pg_hba.conf or using the option -A, or
# --auth-local and --auth-host, the next time you run initdb.
# waiting for server to start....2021-01-25 13:39:21.613 UTC [47] LOG:  starting PostgreSQL 12.5 (Debian 12.5-1.pgdg100+1) on x86_64-pc-linux-gnu, compiled by gcc (Debian 8.3.0-6) 8.3.0, 64-bit
# 2021-01-25 13:39:21.621 UTC [47] LOG:  listening on Unix socket "/var/run/postgresql/.s.PGSQL.5432"
# 2021-01-25 13:39:21.675 UTC [48] LOG:  database system was shut down at 2021-01-25 13:39:21 UTC
# 2021-01-25 13:39:21.685 UTC [47] LOG:  database system is ready to accept connections
#  done
# server started
# CREATE DATABASE
#
#
# /usr/local/bin/docker-entrypoint.sh: ignoring /docker-entrypoint-initdb.d/*
#
# 2021-01-25 13:39:22.008 UTC [47] LOG:  received fast shutdown request
# waiting for server to shut down....2021-01-25 13:39:22.015 UTC [47] LOG:  aborting any active transactions
# 2021-01-25 13:39:22.017 UTC [47] LOG:  background worker "logical replication launcher" (PID 54) exited with exit code 1
# 2021-01-25 13:39:22.017 UTC [49] LOG:  shutting down
# 2021-01-25 13:39:22.056 UTC [47] LOG:  database system is shut down
#  done
# server stopped
#
# PostgreSQL init process complete; ready for start up.
#
# 2021-01-25 13:39:22.135 UTC [1] LOG:  starting PostgreSQL 12.5 (Debian 12.5-1.pgdg100+1) on x86_64-pc-linux-gnu, compiled by gcc (Debian 8.3.0-6) 8.3.0, 64-bit
# 2021-01-25 13:39:22.136 UTC [1] LOG:  listening on IPv4 address "0.0.0.0", port 5432
# 2021-01-25 13:39:22.136 UTC [1] LOG:  listening on IPv6 address "::", port 5432
# 2021-01-25 13:39:22.147 UTC [1] LOG:  listening on Unix socket "/var/run/postgresql/.s.PGSQL.5432"
# 2021-01-25 13:39:22.177 UTC [75] LOG:  database system was shut down at 2021-01-25 13:39:22 UTC
# 2021-01-25 13:39:22.190 UTC [1] LOG:  database system is ready to accept connections</code></pre>
<p>Evident by the text in line 57, the database is up and ready to accept connections from the outside. There is also the <code>--follow</code> or <code>-f</code> option for the command which lets you attach the console to the logs output and get a continuous stream of text.</p>
<h3 id="how-to-create-a-network-and-attaching-the-database-server-in-docker">How to Create a Network and Attaching the Database Server in Docker</h3>
<p>As you've learned in the previous section, the containers have to be attached to a user-defined bridge network in order to communicate with each other using container names. To do so, create a network named <code>notes-api-network</code> in your system:</p><pre><code>docker network create notes-api-network</code></pre>
<p>Now attach the <code>notes-db</code> container to this network by executing the following command:</p><pre><code>docker network connect notes-api-network notes-db</code></pre>
<h3 id="how-to-write-the-dockerfile">How to Write the Dockerfile</h3>
<p>Go to the directory where you've cloned the project code. Inside there, go inside the <code>notes-api/api</code> directory, and create a new <code>Dockerfile</code>. Put the following code in the file:</p><pre><code># stage one
FROM node:lts-alpine as builder
# install dependencies for node-gyp
RUN apk add --no-cache python make g++
WORKDIR /app
COPY ./package.json .
RUN npm install --only=prod
# stage two
FROM node:lts-alpine
EXPOSE 3000
ENV NODE_ENV=production
USER node
RUN mkdir -p /home/node/app
WORKDIR /home/node/app
COPY . .
COPY --from=builder /app/node_modules  /home/node/app/node_modules
CMD [ "node", "bin/www" ]</code></pre>
<p>This is a multi-staged build. The first stage is used for building and installing the dependencies using <code>node-gyp</code> and the second stage is for running the application. I'll go through the steps briefly:</p>
<ul>
<li>Stage 1 uses <code>node:lts-alpine</code> as its base and uses <code>builder</code> as the stage name.</li>
<li>On line 5, we install <code>python</code>, <code>make</code>, and <code>g++</code>. The <code>node-gyp</code> tool requires these three packages to run.</li>
<li>On line 7, we set <code>/app</code> directory as the <code>WORKDIR</code> .</li>
<li>On line 9 and 10, we copy the <code>package.json</code> file to the <code>WORKDIR</code> and install all the dependencies.</li>
<li>Stage 2 also uses <code>node-lts:alpine</code> as the base.</li>
<li>On line 16, we set the <code>NODE_ENV</code> environment variable to <code>production</code>. This is important for the API to run properly.</li>
<li>From line 18 to line 20, we set the default user to <code>node</code>, create the <code>/home/node/app</code> directory, and set that as the <code>WORKDIR</code>.</li>
<li>On line 22, we copy all the project files and on line 23 we copy the <code>node_modules</code> directory from the <code>builder</code> stage. This directory contains all the built dependencies necessary for running the application.</li>
<li>On line 25, we set the default command.</li>
</ul>
<p>To build an image from this <code>Dockerfile</code>, you can execute the following command:</p><pre><code>docker image build --tag notes-api .
# Sending build context to Docker daemon  37.38kB
# Step 1/14 : FROM node:lts-alpine as builder
#  ---&gt; 471e8b4eb0b2
# Step 2/14 : RUN apk add --no-cache python make g++
#  ---&gt; Running in 5f20a0ecc04b
# fetch http://dl-cdn.alpinelinux.org/alpine/v3.11/main/x86_64/APKINDEX.tar.gz
# fetch http://dl-cdn.alpinelinux.org/alpine/v3.11/community/x86_64/APKINDEX.tar.gz
# (1/21) Installing binutils (2.33.1-r0)
# (2/21) Installing gmp (6.1.2-r1)
# (3/21) Installing isl (0.18-r0)
# (4/21) Installing libgomp (9.3.0-r0)
# (5/21) Installing libatomic (9.3.0-r0)
# (6/21) Installing mpfr4 (4.0.2-r1)
# (7/21) Installing mpc1 (1.1.0-r1)
# (8/21) Installing gcc (9.3.0-r0)
# (9/21) Installing musl-dev (1.1.24-r3)
# (10/21) Installing libc-dev (0.7.2-r0)
# (11/21) Installing g++ (9.3.0-r0)
# (12/21) Installing make (4.2.1-r2)
# (13/21) Installing libbz2 (1.0.8-r1)
# (14/21) Installing expat (2.2.9-r1)
# (15/21) Installing libffi (3.2.1-r6)
# (16/21) Installing gdbm (1.13-r1)
# (17/21) Installing ncurses-terminfo-base (6.1_p20200118-r4)
# (18/21) Installing ncurses-libs (6.1_p20200118-r4)
# (19/21) Installing readline (8.0.1-r0)
# (20/21) Installing sqlite-libs (3.30.1-r2)
# (21/21) Installing python2 (2.7.18-r0)
# Executing busybox-1.31.1-r9.trigger
# OK: 212 MiB in 37 packages
# Removing intermediate container 5f20a0ecc04b
#  ---&gt; 637ca797d709
# Step 3/14 : WORKDIR /app
#  ---&gt; Running in 846361b57599
# Removing intermediate container 846361b57599
#  ---&gt; 3d58a482896e
# Step 4/14 : COPY ./package.json .
#  ---&gt; 11b387794039
# Step 5/14 : RUN npm install --only=prod
#  ---&gt; Running in 2e27e33f935d
#  added 269 packages from 220 contributors and audited 1137 packages in 140.322s
#
# 4 packages are looking for funding
#   run `npm fund` for details
#
# found 0 vulnerabilities
#
# Removing intermediate container 2e27e33f935d
#  ---&gt; eb7cb2cb0b20
# Step 6/14 : FROM node:lts-alpine
#  ---&gt; 471e8b4eb0b2
# Step 7/14 : EXPOSE 3000
#  ---&gt; Running in 4ea24f871747
# Removing intermediate container 4ea24f871747
#  ---&gt; 1f0206f2f050
# Step 8/14 : ENV NODE_ENV=production
#  ---&gt; Running in 5d40d6ac3b7e
# Removing intermediate container 5d40d6ac3b7e
#  ---&gt; 31f62da17929
# Step 9/14 : USER node
#  ---&gt; Running in 0963e1fb19a0
# Removing intermediate container 0963e1fb19a0
#  ---&gt; 0f4045152b1c
# Step 10/14 : RUN mkdir -p /home/node/app
#  ---&gt; Running in 0ac591b3adbd
# Removing intermediate container 0ac591b3adbd
#  ---&gt; 5908373dfc75
# Step 11/14 : WORKDIR /home/node/app
#  ---&gt; Running in 55253b62ff57
# Removing intermediate container 55253b62ff57
#  ---&gt; 2883cdb7c77a
# Step 12/14 : COPY . .
#  ---&gt; 8e60893a7142
# Step 13/14 : COPY --from=builder /app/node_modules  /home/node/app/node_modules
#  ---&gt; 27a85faa4342
# Step 14/14 : CMD [ "node", "bin/www" ]
#  ---&gt; Running in 349c8ca6dd3e
# Removing intermediate container 349c8ca6dd3e
#  ---&gt; 9ea100571585
# Successfully built 9ea100571585
# Successfully tagged notes-api:latest</code></pre>
<p>Before you run a container using this image, make sure the database container is running, and is attached to the <code>notes-api-network</code>.</p><pre><code>docker container inspect notes-db
# [
#     {
#         ...
#         "State": {
#             "Status": "running",
#             "Running": true,
#             "Paused": false,
#             "Restarting": false,
#             "OOMKilled": false,
#             "Dead": false,
#             "Pid": 11521,
#             "ExitCode": 0,
#             "Error": "",
#             "StartedAt": "2021-01-26T06:55:44.928510218Z",
#             "FinishedAt": "2021-01-25T14:19:31.316854657Z"
#         },
#         ...
#         "Mounts": [
#             {
#                 "Type": "volume",
#                 "Name": "notes-db-data",
#                 "Source": "/var/lib/docker/volumes/notes-db-data/_data",
#                 "Destination": "/var/lib/postgresql/data",
#                 "Driver": "local",
#                 "Mode": "z",
#                 "RW": true,
#                 "Propagation": ""
#             }
#         ],
#         ...
#         "NetworkSettings": {
#             ...
#             "Networks": {
#                 "bridge": {
#                     "IPAMConfig": null,
#                     "Links": null,
#                     "Aliases": null,
#                     "NetworkID": "e4c7ce50a5a2a49672155ff498597db336ecc2e3bbb6ee8baeebcf9fcfa0e1ab",
#                     "EndpointID": "2a2587f8285fa020878dd38bdc630cdfca0d769f76fc143d1b554237ce907371",
#                     "Gateway": "172.17.0.1",
#                     "IPAddress": "172.17.0.2",
#                     "IPPrefixLen": 16,
#                     "IPv6Gateway": "",
#                     "GlobalIPv6Address": "",
#                     "GlobalIPv6PrefixLen": 0,
#                     "MacAddress": "02:42:ac:11:00:02",
#                     "DriverOpts": null
#                 },
#                 "notes-api-network": {
#                     "IPAMConfig": {},
#                     "Links": null,
#                     "Aliases": [
#                         "37755e86d627"
#                     ],
#                     "NetworkID": "06579ad9f93d59fc3866ac628ed258dfac2ed7bc1a9cd6fe6e67220b15d203ea",
#                     "EndpointID": "5b8f8718ec9a5ec53e7a13cce3cb540fdf3556fb34242362a8da4cc08d37223c",
#                     "Gateway": "172.18.0.1",
#                     "IPAddress": "172.18.0.2",
#                     "IPPrefixLen": 16,
#                     "IPv6Gateway": "",
#                     "GlobalIPv6Address": "",
#                     "GlobalIPv6PrefixLen": 0,
#                     "MacAddress": "02:42:ac:12:00:02",
#                     "DriverOpts": {}
#                 }
#             }
#         }
#     }
# ]
</code></pre>
<p>I've shortened the output for easy viewing here. On my system, the <code>notes-db</code> container is running, uses the <code>notes-db-data</code> volume, and is attached to the <code>notes-api-network</code> bridge.</p>
<p>Once you're assured that everything is in place, you can run a new container by executing the following command:</p><pre><code>docker container run \
--detach \
--name=notes-api \
--env DB_HOST=notes-db \
--env DB_DATABASE=notesdb \
--env DB_PASSWORD=secret \
--publish=3000:3000 \
--network=notes-api-network \
notes-api
# f9ece420872de99a060b954e3c236cbb1e23d468feffa7fed1e06985d99fb919</code></pre>
<p>You should be able to understand this long command by yourself, so I'll go through the environment variables briefly. </p>
<p>The <code>notes-api</code> application requires three environment variables to be set. They are as follows:</p>
<ul>
<li><code>DB_HOST</code> - This is the host of the database server. Given that both the database server and the API are attached to the same user-defined bridge network, the database server can be refereed to using its container name which is <code>notes-db</code> in this case.</li>
<li><code>DB_DATABASE</code> - The database that this API will use. On <a href="/news/@fhsinchy/s/the-docker-handbook/~/drafts/-MS2MtB5zjVVjK3Ujaz4/containerizing-a-multi-container-javascript-application#running-the-database-server">Running the Database Server</a> we set the default database name to <code>notesdb</code> using the <code>POSTGRES_DB</code> environment variable. We'll use that here.</li>
<li><code>DB_PASSWORD</code> - Password for connecting to the database. This was also set on <a href="/news/@fhsinchy/s/the-docker-handbook/~/drafts/-MS2MtB5zjVVjK3Ujaz4/containerizing-a-multi-container-javascript-application#running-the-database-server">Running the Database Server</a> sub-section using the <code>POSTGRES_PASSWORD</code> environment variable.</li>
</ul>
<p>To check if the container is running properly or not, you can use the <code>container ls</code> command:</p><pre><code>docker container ls
# CONTAINER ID   IMAGE         COMMAND                  CREATED          STATUS          PORTS                    NAMES
# f9ece420872d   notes-api     "docker-entrypoint.s…"   12 minutes ago   Up 12 minutes   0.0.0.0:3000-&gt;3000/tcp   notes-api
# 37755e86d627   postgres:12   "docker-entrypoint.s…"   17 hours ago     Up 14 minutes   5432/tcp                 notes-db</code></pre>
<p>The container is running now. You can visit <code>http://127.0.0.1:3000/</code> to see the API in action.</p>
<p>The API has five routes in total that you can see inside the <code>/notes-api/api/api/routes/notes.js</code> file.</p>
<p>Although the container is running, there is one last thing that you'll have to do before you can start using it. You'll have to run the database migration necessary for setting up the database tables, and you can do that by executing <code>npm run db:migrate</code> command inside the container.</p>
<h3 id="how-to-execute-commands-in-a-running-container">How to Execute Commands in a Running Container</h3>
<p>You've already learned about executing commands in a stopped container. Another scenario is executing a command inside a running container.</p>
<p>For this, you'll have to use the <code>exec</code> command to execute a custom command inside a running container.</p>
<p>The generic syntax for the <code>exec</code> command is as follows:</p><pre><code>docker container exec &lt;container identifier&gt; &lt;command&gt;</code></pre>
<p>To execute <code>npm run db:migrate</code> inside the <code>notes-api</code> container, you can execute the following command:</p><pre><code>docker container exec notes-api npm run db:migrate
# &gt; notes-api@ db:migrate /home/node/app
# &gt; knex migrate:latest
#
# Using environment: production
# Batch 1 run: 1 migrations</code></pre>
<p>In cases where you want to run an interactive command inside a running container, you'll have to use the <code>-it</code> flag. As an example, if you want to access the shell running inside the <code>notes-api</code> container, you can execute following the command:</p><pre><code>docker container exec -it notes-api sh
# / # uname -a
# Linux b5b1367d6b31 5.10.9-201.fc33.x86_64 #1 SMP Wed Jan 20 16:56:23 UTC 2021 x86_64 Linux</code></pre>
<h3 id="how-to-write-management-scripts-in-docker">How to Write Management Scripts in Docker</h3>
<p>Managing a multi-container project along with the network and volumes and stuff means writing a lot of commands. To simplify the process, I usually have help from simple <a href="https://opensource.com/article/17/1/getting-started-shell-scripting" rel="noopener noreferrer">shell scripts</a> and a <a href="https://opensource.com/article/18/8/what-how-makefile" rel="noopener noreferrer">Makefile</a>. </p>
<p>You'll find four shell scripts in the <code>notes-api</code> directory. They are as follows:</p>
<ul>
<li><code>boot.sh</code> - Used for starting the containers if they already exist.</li>
<li><code>build.sh</code> - Creates and runs the containers. It also creates the images, volumes, and networks if necessary.</li>
<li><code>destroy.sh</code> - Removes all containers, volumes and networks associated with this project.</li>
<li><code>stop.sh</code> - Stops all running containers.</li>
</ul>
<p>There is also a <code>Makefile</code> that contains four targets named <code>start</code>, <code>stop</code>, <code>build</code> and <code>destroy</code>, each invoking the previously mentioned shell scripts.</p>
<p>If the container is in a running state in your system, executing <code>make stop</code> should stop all the containers. Executing <code>make destroy</code> should stop the containers and remove everything. Make sure you're running the scripts inside the <code>notes-api</code> directory:</p><pre><code>make destroy
# ./shutdown.sh
# stopping api container ---&gt;
# notes-api
# api container stopped ---&gt;
# stopping db container ---&gt;
# notes-db
# db container stopped ---&gt;
# shutdown script finished
# ./destroy.sh
# removing api container ---&gt;
# notes-api
# api container removed ---&gt;
# removing db container ---&gt;
# notes-db
# db container removed ---&gt;
# removing db data volume ---&gt;
# notes-db-data
# db data volume removed ---&gt;
# removing network ---&gt;
# notes-api-network
# network removed ---&gt;
# destroy script finished</code></pre>
<p>If you're getting a permission denied error, than execute <code>chmod +x</code> on the scripts:</p><pre><code>chmod +x boot.sh build.sh destroy.sh shutdown.sh</code></pre>
<p>I'm not going to explain these scripts because they're simple <code>if-else</code> statements along with some Docker commands that you've already seen many times. If you have some understanding of the Linux shell, you should be able to understand the scripts as well.</p>
<h2 id="how-to-compose-projects-using-docker-compose">How to Compose Projects Using Docker-Compose</h2>
<p>In the previous section, you've learned about managing a multi-container project and the difficulties of it. Instead of writing so many commands, there is an easier way to manage multi-container projects, a tool called <a href="https://docs.docker.com/compose/" rel="noopener noreferrer">Docker Compose</a>.</p>
<p>According to the Docker <a href="https://docs.docker.com/compose/" rel="noopener noreferrer">documentation</a> -</p>
<blockquote>Compose is a tool for defining and running multi-container Docker applications. With Compose, you use a YAML file to configure your application’s services. Then, with a single command, you create and start all the services from your configuration.</blockquote>
<p>Although Compose works in all environments, it's more focused on development and testing. Using Compose on a production environment is not recommended at all.</p>
<h3 id="docker-compose-basics">Docker Compose Basics</h3>
<p>Go the directory where you've cloned the repository that came with this book. Go inside the <code>notes-api/api</code> directory and create a <code>Dockerfile.dev</code> file. Put the following code in it:</p><pre><code class="language-Dockerfile"># stage one
FROM node:lts-alpine as builder
# install dependencies for node-gyp
RUN apk add --no-cache python make g++
WORKDIR /app
COPY ./package.json .
RUN npm install
# stage two
FROM node:lts-alpine
ENV NODE_ENV=development
USER node
RUN mkdir -p /home/node/app
WORKDIR /home/node/app
COPY . .
COPY --from=builder /app/node_modules /home/node/app/node_modules
CMD [ "./node_modules/.bin/nodemon", "--config", "nodemon.json", "bin/www" ]</code></pre>
<p>The code is almost identical to the <code>Dockerfile</code> that you worked with in the previous section. The three differences in this file are as follows:</p>
<ul>
<li>On line 10, we run <code>npm install</code> instead of <code>npm run install --only=prod</code> because we want the development dependencies also.</li>
<li>On line 15, we set the <code>NODE_ENV</code> environment variable to <code>development</code> instead of <code>production</code>.</li>
<li>On line 24, we use a tool called <a href="https://nodemon.io/" rel="noopener noreferrer">nodemon</a> to get the hot-reload feature for the API.</li>
</ul>
<p>You already know that this project has two containers:</p>
<ul>
<li><code>notes-db</code> - A database server powered by PostgreSQL.</li>
<li><code>notes-api</code> - A REST API powered by Express.js</li>
</ul>
<p>In the world of Compose, each container that makes up the application is known as a service. The first step in composing a multi-container project is to define these services.</p>
<p>Just like the Docker daemon uses a <code>Dockerfile</code> for building images, Docker Compose uses a <code>docker-compose.yaml</code> file to read service definitions from.</p>
<p>Head to the <code>notes-api</code> directory and create a new <code>docker-compose.yaml</code> file. Put the following code into the newly created file:</p><pre><code class="language-yaml">version: "3.8"
services:
db:
image: postgres:12
container_name: notes-db-dev
volumes:
- notes-db-dev-data:/var/lib/postgresql/data
environment:
POSTGRES_DB: notesdb
POSTGRES_PASSWORD: secret
api:
build:
context: ./api
dockerfile: Dockerfile.dev
image: notes-api:dev
container_name: notes-api-dev
environment:
DB_HOST: db ## same as the database service name
DB_DATABASE: notesdb
DB_PASSWORD: secret
volumes:
- /home/node/app/node_modules
- ./api:/home/node/app
ports:
- 3000:3000
volumes:
notes-db-dev-data:
name: notes-db-dev-data</code></pre>
<p>Every valid <code>docker-compose.yaml</code> file starts by defining the file version. At the time of writing, <code>3.8</code> is the latest version. You can look up the latest version <a href="https://docs.docker.com/compose/compose-file/" rel="noopener noreferrer">here</a>.</p>
<p>Blocks in an YAML file are defined by indentation. I will go through each of the blocks and will explain what they do.</p>
<ul>
<li>The <code>services</code> block holds the definitions for each of the services or containers in the application. <code>db</code> and <code>api</code> are the two services that comprise this project.</li>
<li>The <code>db</code> block defines a new service in the application and holds necessary information to start the container. Every service requires either a pre-built image or a <code>Dockerfile</code> to run a container. For the <code>db</code> service we're using the official PostgreSQL image.</li>
<li>Unlike the <code>db</code> service, a pre-built image for the <code>api</code> service doesn't exist. So we'll use the <code>Dockerfile.dev</code> file.</li>
<li>The <code>volumes</code> block defines any name volume needed by any of the services. At the time it only enlists <code>notes-db-dev-data</code> volume used by the <code>db</code> service.</li>
</ul>
<p>Now that have a high level overview of the <code>docker-compose.yaml</code> file, let's have a closer look at the individual services.</p>
<p>The definition code for the <code>db</code> service is as follows:</p><pre><code class="language-yaml">db:
image: postgres:12
container_name: notes-db-dev
volumes:
- db-data:/var/lib/postgresql/data
environment:
POSTGRES_DB: notesdb
POSTGRES_PASSWORD: secret</code></pre>
<ul>
<li>The <code>image</code> key holds the image repository and tag used for this container. We're using the <code>postgres:12</code> image for running the database container.</li>
<li>The <code>container_name</code> indicates the name of the container. By default containers are named following <code>&lt;project directory name&gt;_&lt;service name&gt;</code> syntax. You can override that using <code>container_name</code>.</li>
<li>The <code>volumes</code> array holds the volume mappings for the service and supports named volumes, anonymous volumes, and bind mounts. The syntax <code>&lt;source&gt;:&lt;destination&gt;</code> is identical to what you've seen before.</li>
<li>The <code>environment</code> map holds the values of the various environment variables needed for the service.</li>
</ul>
<p>Definition code for the <code>api</code> service is as follows:</p><pre><code class="language-yaml">api:
build:
context: ./api
dockerfile: Dockerfile.dev
image: notes-api:dev
container_name: notes-api-dev
environment:
DB_HOST: db ## same as the database service name
DB_DATABASE: notesdb
DB_PASSWORD: secret
volumes:
- /home/node/app/node_modules
- ./api:/home/node/app
ports:
- 3000:3000</code></pre>
<ul>
<li>The <code>api</code> service doesn't come with a pre-built image. Instead it has a build configuration. Under the <code>build</code> block we define the context and the name of the Dockerfile for building an image. You should have an understanding of context and Dockerfile by now so I won't spend time explaining those.</li>
<li>The <code>image</code> key holds the name of the image to be built. If not assigned, the image will be named following the <code>&lt;project directory name&gt;_&lt;service name&gt;</code> syntax.</li>
<li>Inside the <code>environment</code> map, the <code>DB_HOST</code> variable demonstrates a feature of Compose. That is, you can refer to another service in the same application by using its name. So the <code>db</code> here, will be replaced by the IP address of the <code>api</code> service container. The <code>DB_DATABASE</code> and <code>DB_PASSWORD</code> variables have to match up with <code>POSTGRES_DB</code> and <code>POSTGRES_PASSWORD</code> respectively from the <code>db</code> service definition.</li>
<li>In the <code>volumes</code> map, you can see an anonymous volume and a bind mount described. The syntax is identical to what you've seen in previous sections.</li>
<li>The <code>ports</code> map defines any port mapping. The syntax, <code>&lt;host port&gt;:&lt;container port&gt;</code> is identical to the <code>--publish</code> option you used before.</li>
</ul>
<p>Finally, the code for the <code>volumes</code> is as follows:</p><pre><code class="language-yaml">volumes:
db-data:
name: notes-db-dev-data</code></pre>
<p>Any named volume used in any of the services has to be defined here. If you don't define a name, the volume will be named following the <code>&lt;project directory name&gt;_&lt;volume key&gt;</code> and the key here is <code>db-data</code>. </p>
<p>You can learn about the different options for volume configuration in the official <a href="https://docs.docker.com/compose/compose-file/compose-file-v3/#volumes" rel="noopener noreferrer">docs</a>.</p>
<h3 id="how-to-start-services-in-docker-compose">How to Start Services in Docker Compose</h3>
<p>There are a few ways of starting services defined in a YAML file. The first command that you'll learn about is the <code>up</code> command. The <code>up</code> command builds any missing images, creates containers, and starts them in one go.</p>
<p>Before you execute the command, though, make sure you've opened your terminal in the same directory where the <code>docker-compose.yaml</code> file is. This is very important for every <code>docker-compose</code> command you execute.</p><pre><code>docker-compose --file docker-compose.yaml up --detach
# Creating network "notes-api_default" with the default driver
# Creating volume "notes-db-dev-data" with default driver
# Building api
# Sending build context to Docker daemon  37.38kB
#
# Step 1/13 : FROM node:lts-alpine as builder
#  ---&gt; 471e8b4eb0b2
# Step 2/13 : RUN apk add --no-cache python make g++
#  ---&gt; Running in 197056ec1964
### LONG INSTALLATION STUFF GOES HERE ###
# Removing intermediate container 197056ec1964
#  ---&gt; 6609935fe50b
# Step 3/13 : WORKDIR /app
#  ---&gt; Running in 17010f65c5e7
# Removing intermediate container 17010f65c5e7
#  ---&gt; b10d12e676ad
# Step 4/13 : COPY ./package.json .
#  ---&gt; 600d31d9362e
# Step 5/13 : RUN npm install
#  ---&gt; Running in a14afc8c0743
### LONG INSTALLATION STUFF GOES HERE ###
#  Removing intermediate container a14afc8c0743
#  ---&gt; 952d5d86e361
# Step 6/13 : FROM node:lts-alpine
#  ---&gt; 471e8b4eb0b2
# Step 7/13 : ENV NODE_ENV=development
#  ---&gt; Running in 0d5376a9e78a
# Removing intermediate container 0d5376a9e78a
#  ---&gt; 910c081ce5f5
# Step 8/13 : USER node
#  ---&gt; Running in cfaefceb1eff
# Removing intermediate container cfaefceb1eff
#  ---&gt; 1480176a1058
# Step 9/13 : RUN mkdir -p /home/node/app
#  ---&gt; Running in 3ae30e6fb8b8
# Removing intermediate container 3ae30e6fb8b8
#  ---&gt; c391cee4b92c
# Step 10/13 : WORKDIR /home/node/app
#  ---&gt; Running in 6aa27f6b50c1
# Removing intermediate container 6aa27f6b50c1
#  ---&gt; 761a7435dbca
# Step 11/13 : COPY . .
#  ---&gt; b5d5c5bdf3a6
# Step 12/13 : COPY --from=builder /app/node_modules /home/node/app/node_modules
#  ---&gt; 9e1a19960420
# Step 13/13 : CMD [ "./node_modules/.bin/nodemon", "--config", "nodemon.json", "bin/www" ]
#  ---&gt; Running in 5bdd62236994
# Removing intermediate container 5bdd62236994
#  ---&gt; 548e178f1386
# Successfully built 548e178f1386
# Successfully tagged notes-api:dev
# Creating notes-api-dev ... done
# Creating notes-db-dev  ... done</code></pre>
<p>The <code>--detach</code> or <code>-d</code> option here functions the same as the one you've seen before. The <code>--file</code> or <code>-f</code> option is only needed if the YAML file is not named <code>docker-compose.yaml</code> (but I've used here for demonstration purposes).</p>
<p>Apart from the the <code>up</code> command there is the <code>start</code> command. The main difference between these two is that the <code>start</code> command doesn't create missing containers, only starts existing containers. It's basically the same as the <code>container start</code> command.</p>
<p>The <code>--build</code> option for the <code>up</code> command forces a rebuild of the images. There are some other options for the <code>up</code> command that you can see in the official <a href="https://docs.docker.com/compose/reference/up/" rel="noopener noreferrer">docs</a>.</p>
<h3 id="how-to-list-services-in-docker-compose">How to List Services in Docker Compose</h3>
<p>Although service containers started by Compose can be listed using the <code>container ls</code> command, there is the <code>ps</code> command for listing containers defined in the YAML only.</p><pre><code>docker-compose ps
#     Name                   Command               State           Ports
# -------------------------------------------------------------------------------
# notes-api-dev   docker-entrypoint.sh ./nod ...   Up      0.0.0.0:3000-&gt;3000/tcp
# notes-db-dev    docker-entrypoint.sh postgres    Up      5432/tcp</code></pre>
<p>It's not as informative as the <code>container ls</code> output, but it's useful when you have tons of containers running simultaneously.</p>
<h3 id="how-to-execute-commands-inside-a-running-service-in-docker-compose">How to Execute Commands Inside a Running Service in Docker Compose</h3>
<p>I hope you remember from the previous section that you have to run some migration scripts to create the database tables for this API. </p>
<p>Just like the <code>container exec</code> command, there is an <code>exec</code> command for <code>docker-compose</code>. Generic syntax for the command is as follows:</p><pre><code>docker-compose exec &lt;service name&gt; &lt;command&gt;</code></pre>
<p>To execute the <code>npm run db:migrate</code> command inside the <code>api</code> service, you can execute the following command:</p><pre><code>docker-compose exec api npm run db:migrate
# &gt; notes-api@ db:migrate /home/node/app
# &gt; knex migrate:latest
#
# Using environment: development
# Batch 1 run: 1 migrations</code></pre>
<p>Unlike the <code>container exec</code> command, you don't need to pass the <code>-it</code> flag for interactive sessions. <code>docker-compose</code> does that automatically.</p>
<h3 id="how-to-access-logs-from-a-running-service-in-docker-compose">How to Access Logs from a Running Service in Docker Compose</h3>
<p>You can also use the <code>logs</code> command to retrieve logs from a running service. The generic syntax for the command is as follows:</p><pre><code>docker-compose logs &lt;service name&gt;</code></pre>
<p>To access the logs from the <code>api</code> service, execute the following command:</p><pre><code>docker-compose logs api
# Attaching to notes-api-dev
# notes-api-dev | [nodemon] 2.0.7
# notes-api-dev | [nodemon] reading config ./nodemon.json
# notes-api-dev | [nodemon] to restart at any time, enter `rs`
# notes-api-dev | [nodemon] or send SIGHUP to 1 to restart
# notes-api-dev | [nodemon] ignoring: *.test.js
# notes-api-dev | [nodemon] watching path(s): *.*
# notes-api-dev | [nodemon] watching extensions: js,mjs,json
# notes-api-dev | [nodemon] starting `node bin/www`
# notes-api-dev | [nodemon] forking
# notes-api-dev | [nodemon] child pid: 19
# notes-api-dev | [nodemon] watching 18 files
# notes-api-dev | app running -&gt; http://127.0.0.1:3000</code></pre>
<p>This is just a portion from the log output. You can kind of hook into the output stream of the service and get the logs in real-time by using the <code>-f</code> or <code>--follow</code> option. Any later log will show up instantly in the terminal as long as you don't exit by pressing <code>ctrl + c</code> or closing the window. The container will keep running even if you exit out of the log window.</p>
<h3 id="how-to-stop-services-in-docker-compose">How to Stop Services in Docker Compose</h3>
<p>To stop services, there are two approaches that you can take. The first one is the <code>down</code> command. The <code>down</code> command stops all running containers and removes them from the system. It also removes any networks:</p><pre><code>docker-compose down --volumes
# Stopping notes-api-dev ... done
# Stopping notes-db-dev  ... done
# Removing notes-api-dev ... done
# Removing notes-db-dev  ... done
# Removing network notes-api_default
# Removing volume notes-db-dev-data</code></pre>
<p>The <code>--volumes</code> option indicates that you want to remove any named volume(s) defined in the <code>volumes</code> block. You can learn about the additional options for the <code>down</code> command in the official <a href="https://docs.docker.com/compose/reference/down/" rel="noopener noreferrer">docs</a>.</p>
<p>Another command for stopping services is the <code>stop</code> command which functions identically to the <code>container stop</code> command. It stops all the containers for the application and keeps them. These containers can later be started with the <code>start</code> or <code>up</code> command.</p>
<h3 id="how-to-compose-a-full-stack-application-in-docker-compose">How to Compose a Full-stack Application in Docker Compose</h3>
<p>In this sub-section, we'll be adding a front-end to our notes API and turning it into a complete full-stack application. I won't be explaining any of the <code>Dockerfile.dev</code> files in this sub-section (except the one for the <code>nginx</code> service) as they are identical to some of the others you've already seen in previous sub-sections.‌</p>
<p>If you've cloned the project code repository, then go inside the <code>fullstack-notes-application</code> directory. Each directory inside the project root contains the code for each service and the corresponding <code>Dockerfile</code>.‌</p>
<p>Before we start with the <code>docker-compose.yaml</code> file let's look at a diagram of how the application is going to work:</p>
<p>Instead of accepting requests directly like we previously did, in this application all the requests will be first received by an NGINX (lets call it router) service. </p>
<p>The router will then see if the requested end-point has <code>/api</code> in it. If yes, the router will route the request to the back-end or if not, the router will route the request to the front-end.</p>
<p>You do this because when you run a front-end application it doesn't run inside a container. It runs on the browser, served from a container. As a result, Compose networking doesn't work as expected and the front-end application fails to find the <code>api</code> service.</p>
<p>NGINX, on the other hand, runs inside a container and can communicate with the different services across the entire application.</p>
<p>I will not get into the configuration of NGINX here. That topic is kinda out of the scope of this book. But if you want to have a look at it, go ahead and check out the <code>/notes-api/nginx/development.conf</code> and <code>/notes-api/nginx/production.conf</code> files. Code for the <code>/notes-api/nginx/Dockerfile.dev</code> is as follows:</p><pre><code>FROM nginx:stable-alpine
COPY ./development.conf /etc/nginx/conf.d/default.conf</code></pre>
<p>All it does is copy the configuration file to <code>/etc/nginx/conf.d/default.conf</code> inside the container.</p>
<p>Let's start writing the <code>docker-compose.yaml</code> file. Apart from the <code>api</code> and <code>db</code> services there will be the <code>client</code> and <code>nginx</code> services. There will also be some network definitions that I'll get into shortly.</p><pre><code class="language-yaml">version: "3.8"
services:
db:
image: postgres:12
container_name: notes-db-dev
volumes:
- db-data:/var/lib/postgresql/data
environment:
POSTGRES_DB: notesdb
POSTGRES_PASSWORD: secret
networks:
- backend
api:
build:
context: ./api
dockerfile: Dockerfile.dev
image: notes-api:dev
container_name: notes-api-dev
volumes:
- /home/node/app/node_modules
- ./api:/home/node/app
environment:
DB_HOST: db ## same as the database service name
DB_PORT: 5432
DB_USER: postgres
DB_DATABASE: notesdb
DB_PASSWORD: secret
networks:
- backend
client:
build:
context: ./client
dockerfile: Dockerfile.dev
image: notes-client:dev
container_name: notes-client-dev
volumes:
- /home/node/app/node_modules
- ./client:/home/node/app
networks:
- frontend
nginx:
build:
context: ./nginx
dockerfile: Dockerfile.dev
image: notes-router:dev
container_name: notes-router-dev
restart: unless-stopped
ports:
- 8080:80
networks:
- backend
- frontend
volumes:
db-data:
name: notes-db-dev-data
networks:
frontend:
name: fullstack-notes-application-network-frontend
driver: bridge
backend:
name: fullstack-notes-application-network-backend
driver: bridge
</code></pre>
<p>The file is almost identical to the previous one you worked with. The only thing that needs some explanation is the network configuration. The code for the <code>networks</code> block is as follows:</p><pre><code class="language-yaml">networks:
frontend:
name: fullstack-notes-application-network-frontend
driver: bridge
backend:
name: fullstack-notes-application-network-backend
driver: bridge</code></pre>
<p>I've defined two bridge networks. By default, Compose creates a bridge network and attaches all containers to that. In this project, however, I wanted proper network isolation. So I defined two networks, one for the front-end services and one for the back-end &nbsp;services.</p>
<p>I've also added <code>networks</code> block in each of the service definitions. This way the the <code>api</code> and <code>db</code> service will be attached to one network and the <code>client</code> service will be attached to a separate network. But the <code>nginx</code> service will be attached to both the networks so that it can perform as router between the front-end and back-end services.</p>
<p>Start all the services by executing the following command:</p><pre><code>docker-compose --file docker-compose.yaml up --detach
# Creating network "fullstack-notes-application-network-backend" with driver "bridge"
# Creating network "fullstack-notes-application-network-frontend" with driver "bridge"
# Creating volume "notes-db-dev-data" with default driver
# Building api
# Sending build context to Docker daemon  37.38kB
#
# Step 1/13 : FROM node:lts-alpine as builder
#  ---&gt; 471e8b4eb0b2
# Step 2/13 : RUN apk add --no-cache python make g++
#  ---&gt; Running in 8a4485388fd3
### LONG INSTALLATION STUFF GOES HERE ###
# Removing intermediate container 8a4485388fd3
#  ---&gt; 47fb1ab07cc0
# Step 3/13 : WORKDIR /app
#  ---&gt; Running in bc76cc41f1da
# Removing intermediate container bc76cc41f1da
#  ---&gt; 8c03fdb920f9
# Step 4/13 : COPY ./package.json .
#  ---&gt; a1d5715db999
# Step 5/13 : RUN npm install
#  ---&gt; Running in fabd33cc0986
### LONG INSTALLATION STUFF GOES HERE ###
# Removing intermediate container fabd33cc0986
#  ---&gt; e09913debbd1
# Step 6/13 : FROM node:lts-alpine
#  ---&gt; 471e8b4eb0b2
# Step 7/13 : ENV NODE_ENV=development
#  ---&gt; Using cache
#  ---&gt; b7c12361b3e5
# Step 8/13 : USER node
#  ---&gt; Using cache
#  ---&gt; f5ac66ca07a4
# Step 9/13 : RUN mkdir -p /home/node/app
#  ---&gt; Using cache
#  ---&gt; 60094b9a6183
# Step 10/13 : WORKDIR /home/node/app
#  ---&gt; Using cache
#  ---&gt; 316a252e6e3e
# Step 11/13 : COPY . .
#  ---&gt; Using cache
#  ---&gt; 3a083622b753
# Step 12/13 : COPY --from=builder /app/node_modules /home/node/app/node_modules
#  ---&gt; Using cache
#  ---&gt; 707979b3371c
# Step 13/13 : CMD [ "./node_modules/.bin/nodemon", "--config", "nodemon.json", "bin/www" ]
#  ---&gt; Using cache
#  ---&gt; f2da08a5f59b
# Successfully built f2da08a5f59b
# Successfully tagged notes-api:dev
# Building client
# Sending build context to Docker daemon  43.01kB
#
# Step 1/7 : FROM node:lts-alpine
#  ---&gt; 471e8b4eb0b2
# Step 2/7 : USER node
#  ---&gt; Using cache
#  ---&gt; 4be5fb31f862
# Step 3/7 : RUN mkdir -p /home/node/app
#  ---&gt; Using cache
#  ---&gt; 1fefc7412723
# Step 4/7 : WORKDIR /home/node/app
#  ---&gt; Using cache
#  ---&gt; d1470d878aa7
# Step 5/7 : COPY ./package.json .
#  ---&gt; Using cache
#  ---&gt; bbcc49475077
# Step 6/7 : RUN npm install
#  ---&gt; Using cache
#  ---&gt; 860a4a2af447
# Step 7/7 : CMD [ "npm", "run", "serve" ]
#  ---&gt; Using cache
#  ---&gt; 11db51d5bee7
# Successfully built 11db51d5bee7
# Successfully tagged notes-client:dev
# Building nginx
# Sending build context to Docker daemon   5.12kB
#
# Step 1/2 : FROM nginx:stable-alpine
#  ---&gt; f2343e2e2507
# Step 2/2 : COPY ./development.conf /etc/nginx/conf.d/default.conf
#  ---&gt; Using cache
#  ---&gt; 02a55d005a98
# Successfully built 02a55d005a98
# Successfully tagged notes-router:dev
# Creating notes-client-dev ... done
# Creating notes-api-dev    ... done
# Creating notes-router-dev ... done
# Creating notes-db-dev     ... done</code></pre>
<p>Now visit <code>http://localhost:8080</code> and voilà!</p>
<p>Try adding and deleting notes to see if the application works properly. The project also comes with shell scripts and a <code>Makefile</code>. Explore them to see how you can run this project without the help of <code>docker-compose</code> like you did in the previous section.</p>
<h2 id="conclusion">Conclusion</h2>
<p>I would like to thank you from the bottom of my heart for the time you've spent reading this book. I hope you've enjoyed it and have learned all the essentials of Docker.</p>
<p>Apart from this one, I've written full-length handbooks on other complicated topics available for free on <a href="/news/the-docker-handbook/freecodecamp.org/news/author/farhanhasin/">freeCodeCamp</a>.</p>
<p>These handbooks are part of my mission to simplify hard to understand technologies for everyone. Each of these handbooks takes a lot of time and effort to write.</p>
<p>If you've enjoyed my writing and want to keep me motivated, consider leaving starts on <a href="https://github.com/fhsinchy/">GitHub</a> and endorse me for relevant skills on <a href="https://www.linkedin.com/in/farhanhasin/">LinkedIn</a>. I also accept sponsorship so you may consider <a href="https://www.buymeacoffee.com/farhanhasin">buying me a coffee</a> if you want to.</p>
<p>I'm always open to suggestions and discussions on a <a href="https://linktr.ee/farhanhasin">number of platforms</a>. Follow me on <a href="https://twitter.com/frhnhsin">Twitter</a> or <a href="https://www.linkedin.com/in/farhanhasin/">LinkedIn</a> and hit me with direct messages.</p>
<p>In the end, consider sharing the resources with others, because </p>
<blockquote>Sharing knowledge is the most fundamental act of friendship. Because it is a way you can give something without loosing something. — Richard Stallman</blockquote>
<p>Till the next one, stay safe and keep learning.</p>
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
