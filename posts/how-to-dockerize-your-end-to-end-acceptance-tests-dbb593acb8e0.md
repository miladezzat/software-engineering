---
card: "https://cdn-media-1.freecodecamp.org/images/1*p0ALhZOLfRFYBvosshCmjQ.png"
tags: [Docker]
description: "This article serves as a “how-to” guide for using Selenium Do"
author: "Milad E. Fahmy"
title: "How to Dockerize your End-to-End acceptance tests"
created: "2021-08-16T11:42:30+02:00"
modified: "2021-08-16T11:42:30+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-docker tag-testing tag-technology tag-programming tag-tech ">
<header class="post-full-header">
<h1 class="post-full-title">How to Dockerize your End-to-End acceptance tests</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*p0ALhZOLfRFYBvosshCmjQ.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*p0ALhZOLfRFYBvosshCmjQ.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*p0ALhZOLfRFYBvosshCmjQ.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*p0ALhZOLfRFYBvosshCmjQ.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*p0ALhZOLfRFYBvosshCmjQ.png" alt="How to Dockerize your End-to-End acceptance tests">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
|-- output/
|-- Dockerfile
|-- app.js
|-- docker-compose.yml
|-- package.json
|-- package-lock.json
|-- e2eTests/
|-- common_test.js
|-- docker.conf.js</code></pre><h4 id="dependencies">Dependencies</h4><p>First we will create our <a href="https://docs.nodejitsu.com/articles/getting-started/npm/what-is-the-file-package-json/" rel="noopener">package.json</a> with Express as a dependency and CodeceptJS and WebDriverIO as dev dependencies.</p><pre><code class="language-js">{
"name": "example-standalone-firefox",
"version": "1.0.0",
"description": "Example of Dockerizing E2E testing",
"scripts": {
"start": "node app.js",
"test:e2e": "codeceptjs run --steps --verbose --config=./e2eTests/docker.conf.js"
},
"dependencies": {
"express": "^4.16.3"
},
"devDependencies": {
"codeceptjs": "^1.2.0",
"webdriverio": "^4.12.0"
}
}</code></pre><p>We have also included two scripts, one to run the Express app we will add (<code>npm run start</code>), and one to run our CodeceptJS test (<code>npm run test:e2e</code>).</p><pre><code>codeceptjs run --steps --verbose --config=./e2eTests/docker.conf.js</code></pre><p><code>--steps</code> is great for showing output in the terminal as tests are running, while <code>--verbose</code> extends the level of detail even further. <code>--verbose</code> is likely not needed as standard, but is good for seeing how the example works. <code>--config</code> shows us the path to the backend configuration file, in this case kept in a separate <code>e2eTests</code> directory.</p><h4 id="our-app">Our app</h4><p>Next we need an app to test. For this we will run the Express “<a href="https://expressjs.com/en/starter/hello-world.html" rel="noopener">hello world</a>” app from <code>app.js</code>.</p><pre><code>const express = require('express');
const app = express();
app.get('/', (req, res) =&gt; res.send('Hello World!'));
const server = app.listen(3000, () =&gt; {
const port = server.address().port
console.log(`Example app listening on port ${port}`)
})</code></pre><p>You can view this using <code>npm run start</code> and then going to <code>localhost:3000</code> in your browser.</p><h4 id="test-configuration">Test configuration</h4><p>CodeceptJS requires two files, a configuration file and a test file. The test file is extremely simple: it tests that the app can be accessed, saves a screenshot, and checks that the text “Hello” can be seen on the page.</p><pre><code>Feature('Basic test');
Scenario('navigate to homepage', I =&gt; {
I.amOnPage('http://app:3000');
I.saveScreenshot('frontpageScreenshot.png');
I.see('Hello');
});</code></pre><p>The first indication that we will be using multiple Docker containers is shown here in the use of <code>app:3000</code> rather than <code>localhost:3000</code>. <code>localhost</code> can only be understood from within a single container. If a command is being run from another container (in this case by Firefox in our second Selenium container), then it needs a more definitive reference. We could use the first container’s IP address directly, but using the container’s name is much easier to read.</p><p>In this case, <code>app</code> will be the name of the container that is running the app, so we can use <code>app:3000</code>. Don’t worry if you don’t follow this yet, seeing how our <code>docker-compose.yml</code> is structured will help.</p><p>We also need a main <a href="https://codecept.io/configuration/" rel="noopener">configuration</a> file. This can be written in JSON or JS, but here we use JS. Let’s look at this:</p><pre><code>exports.config = {
tests: './*_test.js',    // how to know which files are test files
output: './output',// where to save screenshots
helpers: {
WebDriverIO: {         // which backend helper to use
url: 'http://app:3000',    // a base URL to start on
host: 'firefox-container', // identifying where selenium runs
browser: 'firefox',  // a series of config options
smartWait: 5000,
waitForTimeout: 10000,
desiredCapabilities: {  // for a demo app we do not want
acceptInsecureCerts: true,   to worry about SSL certs
}
},
},
name: 'codeceptjs-docker',
};</code></pre><h4 id="setting-up-docker">Setting up Docker</h4><p>Referring back to the diagram above in the “What we will produce” section, we can see that we will be using two Docker containers. They must be aware of each other and be able to communicate. One will contain our app and tests, and one a Selenium Server, GeckoDriver, and Firefox, so that we do not need Firefox installed on our local machine.</p><p><a href="https://docs.docker.com/compose/" rel="noopener">Docker Compose</a> is a tool for “defining and running multi-container Docker applications.” It starts Docker containers with the <a href="https://docs.docker.com/compose/reference/overview/" rel="noopener">command</a> <code>docker-compose up</code>, and stops them with <code>docker-compose down</code>. If a user defined Dockerfile is being used, <code>--build</code> is used to build it, either the first time <code>docker-compose up</code> is run, or if changes have been made to the Dockerfile. <code>docker-compose.yml</code> is the file that defines what the <code>up</code> command will do.</p><p>Our next step is to create this <code>docker-compose.yml</code>. It is heavily dependant on indentation.</p><pre><code>version: "2"  // which version of compose syntax you are using
services:
app:
container_name: app  // explicit so we can use this for app:3000
build: .       // a self defined Dockerfile, see below
ports:         // exposes port 3000 (where express runs)
- "3000:3000"         to other containers, and to our local
depends_on:       browser
- firefox-container
volumes:       // maps so changes to these can be seen
- ./e2eTests:/e2eTests
- ./package.json:/package.json
- ./package-lock.json:/package-lock.json
- ./.gitignore:/.gitignore
- ./app.js:/app.js
firefox-container:// we'll look at this below
container_name: firefox-container
image: selenium/standalone-firefox:3.12.0-americium
volumes:
- /dev/shm:/dev/shm
ports:
- "4444:4444"</code></pre><p>For our Selenium Server, drivers, and browser, we use a pre-defined image available from the public <a href="https://hub.docker.com/" rel="noopener">Docker Hub</a> called <a href="https://hub.docker.com/r/selenium/standalone-firefox/" rel="noopener">selenium/standalone-firefox</a>. We specify which version we want, 3.12.0-americium. If we did not specify this the latest image would be used by default (which is not a bad thing). As <a href="https://github.com/SeleniumHQ/docker-selenium#running-the-images" rel="noopener">advised</a>, we configure it to share the host’s memory to prevent the browser being run from crashing, and expose port 4444, the default Selenium port. We also map this to port 4444 on our local machine, allowing us to visit <code>localhost:4444/wd/hub/static/resource/hub.html</code> in our browser.</p><p>For our <code>app</code> container, we are not just using an image built by someone else, but are writing a Dockerfile to specify how our app is built. In the same way as the <code>selenium-firefox</code> container we expose a port, 3000 in this case, as that is where Express runs by default. By mapping this using <code>3000:3000</code> we are able to visit <code>localhost:3000</code> while the app is being run in Docker to see it in our local browser.</p><p>Our Dockerfile uses the public <code>node:carbon</code> image as a base, sets the working directory, copies some files from our local machine to the container, runs <code>npm install</code> so that the container has all needed dependencies, and then runs the <code>npm start</code> command we specified.</p><pre><code>FROM node:carbon
WORKDIR ./
COPY ./package.json ./package-lock.json ./app.js ./
RUN npm install
CMD [ "npm", "start" ]</code></pre><p>This means that when <code>docker-compose up --build</code> is run, it will follow these steps, resulting in our app being ready and running on port 3000.</p><p><strong>Note</strong>: The <code>--build</code> flag is only needed the first time <code>docker-compose up</code> is run, or if changes have been made to our Dockerfile or the steps executed within it. For example, if we added another dependency in our <code>package.json</code> then Docker would not know about it if we did not rebuild our image, as <code>npm install</code> is run within the Dockerfile.</p><h4 id="running-tests">Running tests</h4><p>We now have a simple app, tests written for it, and a Docker Compose configuration that will run both our app, a Selenium Server, and Firefox.</p><p>We can start all of these using <code>docker-compose up --build</code>.</p><p>To run commands <em>within </em>a running Docker container, <code>docker exec</code> can be used from another terminal window. The format is:</p><p><code>docker exex &lt;flags&gt; &lt;container_name&amp;g</code>t; &lt;command&gt;</p><p>The command we will use is:</p><p><code>docker exec <a href="https://docs.docker.com/engine/reference/commandline/exec/#options" rel="noopener">-it</a> app npm run test:e2e</code></p><p>We can now see our test running, and see each step as it is performed! From here we can extend what our test does, add additional tests (ending the filenames in <code>_test.js</code>), and use the same two commands to run them. No more setup is needed.</p><p>You now have an easily extensible E2E testing setup that can be relied on to run the same way no matter which machine it is run on. It was written with API commands that can be easily understood by both developers and non-developers. All that remains now is to decide which behaviour your app should be capable of, and test it!</p><h3 id="final-words">Final words</h3><p>SeleniumHQ also produces Docker <a href="https://github.com/SeleniumHQ/docker-selenium#standalone-chrome-and-firefox" rel="noopener">images for Chrome testing</a>, and images for using Selenium Grid for running multiple instances of Chrome and Firefox at one time.</p><p>CodeceptJS also has <a href="https://codecept.io/docker/" rel="noopener">instructions for running CodeceptJS in Docker</a>, so that it does not need to be specified as a dependency in your app.</p><p>A more technical, but still starter level description of how Docker works can be seen in the first section of the post I wrote titled <a href="https://medium.freecodecamp.org/amazon-ecs-terms-and-architecture-807d8c4960fd" rel="noopener"><em>A beginner’s guide to Amazon’s Elastic Container Service</em></a><em>.</em></p><p>Thanks for reading ?</p><p><em>Update:</em> <br>I recently wrote <a href="https://codeburst.io/customising-codeceptjs-e2e-tests-1a2bf5f32f51" rel="noopener">Customising CodeceptJS e2e tests</a> for anyone looking for next steps in testing complex applications.</p><h4 id="resources">Resources</h4><ul><li><a href="https://github.com/dominicfraser/CodeceptJSDockerExamples" rel="noopener">Github</a> of CodeceptJS Docker examples</li><li><a href="https://codecept.io/quickstart/" rel="noopener">CodeceptJS QuickStart guide</a></li><li><a href="https://www.youtube.com/watch?v=cDwNfAEo0lA" rel="noopener">Selenium WebDriver Architecture</a></li><li><a href="https://seleniumjava.com/2015/09/13/how-does-selenium-webdriver-work/" rel="noopener">Selenium WebDriver Flow</a></li></ul>
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
