---
card: "https://cdn-media-1.freecodecamp.org/images/1*7a8Qffxkg7WuePBZUebYSw.png"
tags: [Docker]
description: "by Kangze Huang"
author: "Milad E. Fahmy"
title: "Docker: Easy as build, run, done!"
created: "2021-08-16T10:26:48+02:00"
modified: "2021-08-16T10:26:48+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-docker tag-devops tag-programming tag-containers tag-web-development ">
<header class="post-full-header">
<h1 class="post-full-title">Docker: Easy as build, run, done!</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*7a8Qffxkg7WuePBZUebYSw.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*7a8Qffxkg7WuePBZUebYSw.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*7a8Qffxkg7WuePBZUebYSw.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*7a8Qffxkg7WuePBZUebYSw.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*7a8Qffxkg7WuePBZUebYSw.png" alt="Docker: Easy as build, run, done!">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
build.sh
run.sh</code></pre><p>Before we can use Docker, we must first install it. Below is the quick and simple way to install Docker, but if you want the full configuration checkout the <a href="https://docs.docker.com/engine/installation/linux/ubuntulinux/" rel="noopener">official docs</a>.</p><pre><code class="language-bash">$ sudo apt-get update
$ sudo apt-get install docker-engine
$ sudo service docker start
$ sudo docker run hello-world</code></pre><p>The last command checks if Docker is successfully running, and then exits. If all this works, you are ready to start Dockerizing!</p><h3 id="step-1-building-the-dockerfile">Step 1: Building the Dockerfile</h3><p>The first step is to configure the files required for Docker to build itself an image. Docker Images are simply blueprints of environments that you want to create while containers are the actual running and functional environments that your app will be executed in. In the root of our app directory, there is a folder called <code>App</code>. The web app itself resides in this <code>App</code> folder, whereas all the Docker-related stuff is outside. This is necessary as Docker will be containerizing everything inside <code>App</code>. So let’s make the first Docker file called <code>Dockerfile</code> (no file extension <code>Dockerfile.sh</code>, just <code>Dockerfile</code>) and walk through it line-by-line.</p><pre><code class="language-docker">FROM ubuntu
# ubuntu setup
RUN apt-get update -y
RUN apt-get upgrade -y
RUN apt-get install nodejs -y &amp;&amp; apt-get install npm -y
# install curl for n
RUN apt-get install curl -y
RUN apt-get install vim -y
# obtain latest stable version of node
RUN npm cache clean -f
RUN npm install -g n
RUN n stable
# setup working directory
# ADD /App /App
WORKDIR /App
RUN npm install
# expose port
EXPOSE 8080</code></pre><p>The first line is <code>FROM ubuntu</code>. The purpose of <code>Dockerfile</code> is to set up the OS and programs inside the OS, so it makes sense that the first line specifies which OS version to use. <code>ubuntu</code> here is referring to a specific image hosted on <a href="https://hub.docker.com/_/ubuntu/" rel="noopener">Docker Hub</a>, specifically the official Ubuntu OS Image.</p><pre><code class="language-docker"># ubuntu setup
RUN apt-get update -y
RUN apt-get upgrade -y
RUN apt-get install curl -y
RUN apt-get install vim -y</code></pre><p>The next set of lines is setup within Ubuntu. We want to check for Ubuntu updates with <code>RUN apt-get update -y</code> and upgrades with <code>RUN apt-get upgrade -y</code>… pretty standard stuff for setting up your environment. Also install curl <code>RUN apt-get install curl -y</code> and vim <code>RUN apt-get install vim -y</code>, both nice to have for general purposes.</p><pre><code class="language-docker"># obtain latest stable version of node
RUN apt-get install nodejs -y &amp;&amp; apt-get install npm -y
RUN npm cache clean -f
RUN npm install -g n
RUN n stable</code></pre><p>The next set of lines is setup specific to NodeJS. Since we want to be using ES6 features, we will need the latest version of NodeJS attained via the node module <code>n</code>. Install NodeJS and NPM with <code>RUN apt-get install nodejs -y &amp;&amp; apt-get install npm -y</code>. Then clean up npm to make way for <code>n</code> using <code>RUN npm cache clean -f</code>. Install <code>n</code> with <code>RUN npm install -g n</code>. And finally, we can run <code>n</code> (latest version of NodeJS) with <code>RUN n stable</code>.</p><p>NodeJS is for Javascript, but if you were working with other languages such as Python, you would install whatever programs you need to run your Python app.</p><pre><code class="language-docker"># setup working directory
ADD /App /App
WORKDIR /App
RUN npm install
# expose port
$ bash run.sh
$ exit</code></pre><p>That’s it! Docker: easy as build, run, done!</p><h3 id="bonus-cheatsheet">Bonus Cheatsheet</h3><p>Since this tutorial took a step-by-step approach to teaching Docker, I think it’s appropriate to leave you off with an overview of all the Docker commands you will need for general purpose use.</p><pre><code class="language-bash">$ docker images               // To view install images
$ docker rmi &lt;IMAGE_NAME&gt;     // To remove an installed image
$ docker ps -a                // To view all docker containers
$ docker stop &lt;CONTAINER_NAME&gt;// To stop a docker container
$ docker rm &lt;CONTAINER_NAME&gt;  // To remove a docker container
$ docker exec -it &lt;CONTAINER_NAME&gt; bash    // Execute into container and run bash
* If you want to see the log output from a docker container, omit the -d from run.sh</code></pre><blockquote>These methods were partially used in the deployment of <a href="http://renthero.ca" rel="noopener">renthero.ca</a></blockquote>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
