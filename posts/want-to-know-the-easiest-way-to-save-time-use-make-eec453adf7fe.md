---
card: "https://cdn-media-1.freecodecamp.org/images/0*tag_5co_wBrmCdD3"
tags: [Technology]
description: "People have always looked for ways to make their work easier."
author: "Milad E. Fahmy"
title: "Want to know the easiest way to save time? Use  make !"
created: "2021-08-16T11:35:32+02:00"
modified: "2021-08-16T11:35:32+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-technology tag-productivity tag-programming tag-devops tag-software-development ">
<header class="post-full-header">
<h1 class="post-full-title">Want to know the easiest way to save time? Use `make`!</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/0*tag_5co_wBrmCdD3 300w,
https://cdn-media-1.freecodecamp.org/images/0*tag_5co_wBrmCdD3 600w,
https://cdn-media-1.freecodecamp.org/images/0*tag_5co_wBrmCdD3 1000w,
https://cdn-media-1.freecodecamp.org/images/0*tag_5co_wBrmCdD3 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/0*tag_5co_wBrmCdD3" alt="Want to know the easiest way to save time? Use `make`!">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>People have always looked for ways to make their work easier. It is a matter of debate whether using tools and automation are distinct human features. Or do we share them with other species? The fact is that we try to outsource our most mundane tasks to the machines. And that’s great!</p><h3 id="why-automate">Why automate?</h3><p>Repetition often leads to boredom and fatigue. Boredom is the first step toward burnout, while fatigue is one of the major sources of mistakes. Since we don’t want our colleagues (or ourselves) to burn out as much as we don’t want to make costly mistakes, we try to automate our everyday tasks.</p><p>There seems to be a proliferation of software dedicated to the automation of common tasks. In the Node.JS ecosystem alone, there are (or used to be) solutions like Bower, Yeoman, Grunt, Gulp, and NPM scripts.</p><p>But there is a good standard UNIX tool. By standard I mean it actually has robust documentation, that many forgot. Or never learned? I’m talking about <code>make</code>. More accurately, this article focuses on GNU make. It’s available on macOS, Windows, Linux and most other operating systems.</p><p><code>make</code> is so standard you already have it installed. Type make in a command line and check yourself. This piece of software came out in 1977, which means it’s pretty much battle-tested. Is it quirky? Yup, even for the ’70s standard. But it does its job well and this is all we want from it.</p><h3 id="isn-t-make-for-c-c-code">Isn’t Make for C/C++ code?</h3><p>When you read about <code>make</code> you probably recall that there used to be such a tool to build C/C++ projects back then. It went like this <code>./configure &amp;&amp; make &amp;&amp; make install</code>. Yes, we are talking about exactly the same tool. And frankly, it’s not limited to compiling C/C++ code. To be honest, it can’t even compile the code.</p><p>Pretty much all <code>make</code> understands is files. It knows whether a file exists or not and which file is more recent. The other half of its power lies in maintaining a dependency graph. Not much, but those two features are what constitute its power.</p><p>In order for <code>make</code> to actually do anything, you write a set of recipes. Each recipe consists of a target, zero or more dependencies and zero or more rules. Targets are files that you want to obtain. Dependencies are files needed to create or update the targets. The set of rules describes the process of transforming dependencies into targets. For example imagine you want to automate installation on Node.js packages:</p><pre><code>node_modules: package.json
npm install</code></pre><p>This means the <strong>file</strong> <code>node_modules</code> (yes, directories are files too) can be derived from the <strong>file</strong> <code>package.json</code> by running the <code>npm install</code> rule. Still with me?</p><p>Now, those dependencies can be other targets as well. This means we can chain different set of rules and create pipelines. For example making test results directory dependent on build directory, build directory dependent on <code>node_modules</code> directory and <code>node_modules</code> dependent on <code>package.json</code>. Heck, we can even create <code>package.json</code> dynamically making it a target of another rule.Remember when I mentioned <code>make</code> keeps track of which file is more recent? This is what actually saves us time. You see, without this feature, each time we run <code>make test</code> (following the example above) we would have to run the whole chain from the beginning (<code>npm install</code>, build, then test). But if nothing changed why install packages once again? Why build? Why run tests?</p><p>This is where <code>make</code> really shines. While figuring out the order of the jobs it checks the timestamps of targets and dependencies. It follows the rule <strong>only</strong> if</p><ul><li>one or more of dependencies is more recent than the target, and</li><li>the target does not exist.</li></ul><p>One thing! As <code>make test</code> won’t be actually creating a file named <code>test</code> we need to add this target as a dependency of a <code>.PHONY</code> target. That’s another convention. Like this:</p><pre><code>.PHONY: test
test: build
npm test
build: node_modules
npm build
node_modules: package.json
.stamps:
@mkdir -p $@
.stamps/git-hooks.installed: | .stamps
# This checks whether git-hooks is an executable and installs it with
# Homebrew/Linuxbrew is possible.
@if ! command -v git-hooks &gt;/dev/null 2&gt;&amp;1; then \
if command -v brew &gt;/dev/null 2&gt;&amp;1; then \
brew install git-hooks; \
else \
echo "You have to install https://github.com/icefox/git-hooks"; \
exit 1; \
fi; \
fi
@touch $@
.git/hooks.old: | .stamps/git-hooks.installed
git hooks --install
dev: | .git/hooks.old
all: webapp
.stamps: Makefile
@mkdir -p $@
third-party/top_secret.xml:
# WEB_USER and WEB_AUTH_TOKEN are variables that should contain credentials
# required to obtain the file.
@curl -u "$(WEB_USER):$(WEB_AUTH_TOKEN)" https://example.com/downloads/this_is_a_secret.xml -L -o $@
webapp: .stamps/webapp.stamp
.stamps/webapp.stamp: .stamps webapp/Dockerfile third-party/top_secret.xml $(WEBAPP_SOURCES)
docker build -t example/webapp -f webapp/Dockerfile webapp
@touch $@
.PHONY: all webapp</code></pre><p>Since we cannot use the actual file created by Docker (because images have tight permissions), we do the second best thing. We create an empty file that indicates we have successfully run <code>docker build</code> at one point in time.</p><p>A common convention for such files calls them “stamps”. Our Docker image stamp depends obviously on <code>Dockerfile</code>, on source files and on another target, which runs <code>curl</code> to fetch the file obtaining credentials from environment variables.</p><p>Since we don’t want to print our credentials to the output we prefix the command with <code>@</code>. This means the rule itself is not printed to the screen. The output of the rule, however, isn’t silenced. Keep that in mind if any of the programs you want to run have a tendency of logging sensitive information to stdout or stderr.</p><p>Ok, we can set up git hooks and we can build some Docker images. Why not let developers create their own environments in the cloud and deploy to them?</p><pre><code># We include the previous Makefile so we can build the image
include previous.mk
.stamps/webapp_pushed.stamp: .stamps/webapp.stamp
docker push example/webapp
@touch $@
infrastructure: $(INFRASTRUCTURE_SOURCES)
cd deployment/terraform &amp;&amp; terraform apply
deploy: all infrastructure
cd deployment &amp;&amp; ansible-playbook -i inventories/hosts deploy.yml
.PHONY: infrastructure deploy</code></pre><p>The actual Infrastructure as Code and Configuration Management is out of the scope of this article. Let me tell you that <code>terraform apply</code> manages cloud resources and <code>ansible-playbook</code> performs configuration on remote machines. You probably know what <code>docker push</code> does. In short, it pushes the local image to Docker Hub (or any other registry) so you could access it from anywhere. At this point, I’m sure you can figure out what the above snippet does.</p><h3 id="so-who-s-this-tool-for">So, Who’s This Tool For?</h3><p>Even though DevOps is rising in hype recently, there is still a lot of separation between the Dev and the Ops. Some tools are used solely by Dev, some solely by Ops. There is a bit of common ground, but how far it reaches depends on any given team.</p><p>Development package management, source code layout, coding guidelines are all the realms of Dev. Infrastructure as Code, Configuration Management, and orchestration are toys for the Ops. The build system and Continuous Integration pipeline might be split between the two or it might belong to either party. Can you see how the common ground is stretched thin?</p><p><code>make</code> changes things, allowing for broader collaboration. Since it serves the purposes of both Dev and Ops, it is a common ground. Everyone speaks its language and everyone can contribute. But because it is so easy to use even when you want to do complex things (as in our example above) the true power of DevOps is given to the hands of every person on the team. Everyone can run <code>make test</code> and everyone can modify its rules and dependencies. Everyone could run <code>make infrastructure</code> and provision a nice cluster for development or for production. After all, they are documented in the same code!</p><p>Of course, when there’s a common ground it’s good to make sure whose responsible for which part. The last thing you want is people from Dev and Ops overwriting each other’s work! But great teamwork always relies on great communication, so this could happen with or without <code>make</code>.</p><p>So it doesn’t matter if you use any of the trendy technologies associated with DevOps. You may not need and not want any Docker, Cloud, Terraform or Travis. You can write desktop applications, for what its worth, and a carefully written <code>Makefile</code> would still be a DevOps enabler.</p>
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
