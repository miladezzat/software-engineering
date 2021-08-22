---
card: "https://cdn-media-1.freecodecamp.org/images/1*Q_Tuv1uGF5i5opPCuZrh0A.png"
tags: [Jenkins]
description: by Ashish Gaikwad
author: "Milad E. Fahmy"
title: "Steps you should take to build a healthy Angular project"
created: "2021-08-15T19:50:35+02:00"
modified: "2021-08-15T19:50:35+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-jenkins tag-angular tag-javascript tag-tech tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">Steps you should take to build a healthy Angular project</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*Q_Tuv1uGF5i5opPCuZrh0A.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*Q_Tuv1uGF5i5opPCuZrh0A.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*Q_Tuv1uGF5i5opPCuZrh0A.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*Q_Tuv1uGF5i5opPCuZrh0A.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*Q_Tuv1uGF5i5opPCuZrh0A.png" alt="Steps you should take to build a healthy Angular project">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Ashish Gaikwad</p>
<h1 id="steps-you-should-take-to-build-a-healthy-angular-project">Steps you should take to build a healthy Angular project</h1>
<h4 id="create-your-angular-fitbit-with-jenkins-sonarqube">Create your “Angular Fitbit” with Jenkins + SonarQube</h4>
<p>Just like the recent introduction of wearables to track our health, the software industry has long followed the practice of monitoring the health of software projects. The most common processes applied are unit tests, integration tests, continuous integration, and code coverage.</p>
<p>I recently struggled a bit in trying to setup the above mentioned processes for our project, so I wrote this post to document my experience. Since TypeScript is the default language for Angular 2 projects, existing JS setups do not work.</p>
<h3 id="getting-started">Getting started</h3>
<p>Here are the steps to setup a Jenkins CI environment for Angular projects with code coverage using SonarQube on a headless Linux server:</p>
<ul>
<li>Download <a href="https://jenkins.io/" rel="noopener">Jenkins</a> and set it up on your build server. Make sure you have Java installed on it, as it is required by Jenkins. <strong>Note</strong>: Jenkins’ default configuration runs with <code>jenkins</code> user, so you might need to set <code>JAVA_HOME</code> for the <code>jenkins</code> user.</li>
<li>Once Jenkins is setup, install or make sure you have the following plugins installed from the manage plugins menu:</li>
</ul>
<figcaption><a href="http://wiki.jenkins-ci.org/display/JENKINS/Git+Plugin" rel="noopener" target="_blank" title=""><strong>Git plugin</strong></a><strong> for repo configuration</strong></figcaption>
</figure>
<figcaption><a href="http://wiki.jenkins-ci.org/display/JENKINS/NodeJS+Plugin" rel="noopener" target="_blank" title=""><strong>NodeJs Plugin</strong></a><strong> for running npm commands and scripts</strong></figcaption>
</figure>
<figcaption><a href="http://redirect.sonarsource.com/plugins/jenkins.html" rel="noopener" target="_blank" title=""><strong>SonarQube scanner</strong></a><strong> for test report analysis and publishing.</strong></figcaption>
</figure>
<ul>
<li>Make Git, Node, and SonarQube scanner available to Jenkins. This can be done from the <strong>Global Tool Configuration</strong> menu in the <strong>Manage Jenkins</strong> menu. You can either chose to install automatically or provide the installation path for these tools. For example:</li>
</ul>
<figcaption>Providing the path for local installation.</figcaption>
</figure>
<ul>
<li>Lastly, make Jenkins aware of the SonarQube server installation from the <strong>Configure</strong> menu in <strong>Manage Jenkins</strong>. For example:</li>
</ul>
<figcaption>SonarQube Server url configuration in Jenkins</figcaption>
</figure>
<p>Download <a href="https://www.sonarqube.org/" rel="noopener">SonarQube</a> and set it up on your server. It is usually a simple package extraction on all platforms.</p>
<p>To enable Typescript support in SonarQube, we will use the <a href="https://github.com/Pablissimo/SonarTsPlugin" rel="noopener"><strong>SonarTsPlugin</strong></a> since SonarQube doesn’t yet have a default plugin for Typescript. Simply download the jar from the <a href="https://github.com/Pablissimo/SonarTsPlugin/releases" rel="noopener">releases page </a>of the plugin and place it in your SonarQube installations <code><strong>bin</strong></code> folder. Restart Jenkins once. That is all.</p>
<p>In the Angular projects <code><strong>karma.conf.js</strong></code> file, change/add to the <code>browsers</code> section <code>ChromeHeadless</code>.</p>
<p>Example: <code><strong>browsers:['ChromeHeadless']</strong></code> . From version 60 onwards <a href="https://developers.google.com/web/updates/2017/04/headless-chrome" rel="noopener">Google Chrome supports headless</a> mode on Windows as well. So you can continue to use this setting on local machine as well, in case you work on a Windows machine in an enterprise environment (as I do). I personally prefer the headless mode only for the 1–2 seconds that it saves me.</p>
<p>Add the following to the <code><strong>scripts</strong></code> section in <code><strong>package.json</strong></code> file.</p>
<figcaption>NPM command for test followed by build</figcaption>
</figure>
<p>The above command makes sure that the build is <strong>only triggered if all the tests are successful</strong>. The <code><strong>--cc</strong></code> flag is a short code for <code><strong>--code-coverage</strong></code>. This flag will produce the projects coverage report in a new folder named <code><strong>coverage</strong></code> within the project directory. The report file is named <code><strong>lcov.info</strong></code>.</p>
<p>The default configuration uses Istanbul reporter to show the code coverage report. To publish this coverage report to SonarQube server, the Jenkins SonarQube scanner plugin requires a configuration which can be added as a <code><strong>sonar-project.properties</strong></code> file to the project or within the Jenkins project configuration. Example properties file:</p>
<figcaption>Sample sonar-project.properties file.</figcaption>
</figure>
<h3 id="configuration">Configuration</h3>
<p>With the above steps done, the project configuration in Jenkins is fairly simple.</p>
<p>First create a new configuration using <strong>New Item</strong> menu and then a <strong>Freestyle project</strong>.</p>
<p>Next in the <strong>Source Code Management</strong> section enable <strong>Git</strong> and setup the projects repo URL:</p>
<figcaption>Repo setup in Jenkins project configuration.</figcaption>
</figure>
<p>In the <strong>Build Environment</strong> section, enable the checkbox for providing the node and npm environment to the build configuration.</p>
<figcaption>Provide node and npm to current build.</figcaption>
</figure>
<p>Then in the <strong>Build</strong> sectionn add two build steps. First <strong>Execute Shell</strong> and second <strong>Execute SonarQube Scanner</strong>.</p>
<p>The shell step is to run the <code><strong>cibuild</strong></code> npm script and the latter to trigger the coverage report analysis. As mentioned above, the sonar properties can be set in the build configuration as well. Example build configuration:</p>
<figcaption>Build section with npm and sonar analysis</figcaption>
</figure>
<p>That is all. Now a build can be triggered using the <strong>Build Now</strong> menu on the projects home page.</p>
<blockquote><em>The build log will show the test results, the build logs, and the publish log to SonarQube server. It is ideal to setup remote triggers or web hooks to trigger the project build. This will ensure the stability of the project whenever there is a change in the repo.</em></blockquote>
<p>Finally, on visiting the SonarQube server, the project details should be visible with all the metrics captured from code coverage report. Example:</p>
<figcaption>Sonar Projects Dashboard.</figcaption>
</figure>
<p>This is only the first step towards creating a healthier code base. The Jenkins build can be further enhanced to create a pipeline build for better control and granular modifications.</p>
<p><em>Originally published at <a href="https://medium.com/@ashishgkwd/angular-fitbit-jenkins-sonarqube-829cc6201469" rel="noopener">medium.com</a> on September 16, 2017.</em></p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
