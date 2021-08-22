---
card: "https://cdn-media-1.freecodecamp.org/images/0*aZ3MaOUUJ11gKWAI"
tags: [JavaScript]
description: by Rohit Ramname
author: "Milad E. Fahmy"
title: "How to deploy your super cool Node app to Azure from GitHub"
created: "2021-08-15T19:41:36+02:00"
modified: "2021-08-15T19:41:36+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-github tag-tech tag-programming tag-nodejs ">
<header class="post-full-header">
<h1 class="post-full-title">How to deploy your super cool Node app to Azure from GitHub</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/0*aZ3MaOUUJ11gKWAI 300w,
https://cdn-media-1.freecodecamp.org/images/0*aZ3MaOUUJ11gKWAI 600w,
https://cdn-media-1.freecodecamp.org/images/0*aZ3MaOUUJ11gKWAI 1000w,
https://cdn-media-1.freecodecamp.org/images/0*aZ3MaOUUJ11gKWAI 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/0*aZ3MaOUUJ11gKWAI" alt="How to deploy your super cool Node app to Azure from GitHub">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Rohit Ramname</p>
<h1 id="how-to-deploy-your-super-cool-node-app-to-azure-from-github">How to deploy your super cool Node app to Azure from GitHub</h1>
<p>Are you a Nodejs developer who loves developing wonderful apps as a hobby but needs some place to show it off?</p>
<p>Are you a person fascinated by Azure and tempted to try it out?</p>
<p>Are you also that person overwhelmed by the configurations that Azure offers?</p>
<p>Well.. today I will be explaining a very simple way to get your app up and running on Azure in a few clicks.</p>
<blockquote>I had published an <a href="https://medium.freecodecamp.org/how-to-deploy-a-nodejs-app-to-heroku-from-github-without-installing-heroku-on-your-machine-433bec770efe" rel="noopener">article </a>about deploying a “cool node app“ to Heroku from Github for free. But now that we have decided to build a “super cool” Node app, we will use another hot cloud service in the market.</blockquote>
<p>Enough of chitchat…now let’s get to the business.</p>
<h3 id="step-1-create-that-super-cool-node-app"><strong>Step 1: Create that super cool Node app</strong></h3>
<p>Let’s create that super cool Node app first.</p>
<p>Create a folder on your local machine and give it a name (of your choice), say MySuperCoolApp.</p>
<p>Add a file with the name package.json and paste the below content. This file is basic information of our package. (This can also be created by typing command npm init and accepting all default settings.)</p><pre><code>{"name": "supercoolnodeapp","version": "1.0.0","description": "super node app ","main": "app.js","scripts": {"start": "node app.js"},"repository": {"type": "git","url": ""},"author": "","license": "ISC","bugs": {"url": ""},"homepage": ""}</code></pre>
<p>One very important change to notice is this line:</p><pre><code>"start": "node app.js"</code></pre>
<p><strong>After the deployment, Azure will run this command to start your application.</strong></p>
<p>Add a file, app.js, and paste the below code. This will be the starting point of our app.</p><pre><code>const http = require('http');</code></pre><pre><code>const port=process.env.PORT || 3000</code></pre><pre><code>const server = http.createServer((req, res) =&gt; {</code></pre><pre><code>res.statusCode = 200;</code></pre><pre><code>res.setHeader('Content-Type', 'text/html');</code></pre><pre><code>res.end('&lt;h1&gt;Hello World&lt;/h1&gt;');</code></pre><pre><code>});</code></pre><pre><code>server.listen(port,() =&gt; {</code></pre><pre><code>console.log(`Server running at port `+port);</code></pre><pre><code>});</code></pre>
<p>This code is opening a port on the local server and serving some HTML.</p>
<p>Please note the <strong>most important</strong> code block here:</p><pre><code>const port=process.env.PORT || 3000</code></pre>
<p>This is important when you want to deploy your application to the cloud. The application server is started on a random port on the cloud. If you hard code a port number, like in all Getting Started guides, and deploy to the cloud, the specific port number may not be available. The application will never start. So it’s better to get the port number assigned by the cloud instance and start the HTTP server.</p>
<p>Save the file and run the below command in the command prompt window (which is open inside the folder):</p><pre><code>node app.js</code></pre>
<p>With this, Node will start the server and show the below message:</p>
<p>Now, if we open <a href="http://localhost:3000/" rel="noopener">http://localhost:3000/</a> in the browser, we will see this:</p>
<p>Cool! We created a basic but super cool Nodejs app.</p>
<h3 id="step-2-push-to-github">STEP 2: Push to GitHub</h3>
<p>Now want to upload our code to GitHub. This way, we will be able to edit our code from anywhere and also deploy the committed changes to the cloud instantly.</p>
<p>Let’s create a Repository on <a href="https://github.com/" rel="noopener">GitHub</a> by clicking New Repository.</p>
<p>Give it a name, some description, and click Create repository:</p>
<p>GitHub will create a repository and give you some commands that you can run locally so that you can clone your local folder with your GitHub repository.</p>
<p>Open command prompt inside your app where the package.json file is located. In the command prompt, run the below commands in this sequence.</p>
<ol>
<li>Initialize the Git repository at the root level:</li>
</ol><pre><code>git init</code></pre>
<p>2. Add all the files to your local Git (staging). Notice the last dot:</p><pre><code>git add .</code></pre>
<p>3. Commit your changes to your local Git:</p><pre><code>git commit -m “first commit”</code></pre>
<p>4. Link to your GitHub repository. (Please change the URL to point to your repository.)</p><pre><code>git remote add origin https://github.com/rramname/MySuperCoolNodeApp.git</code></pre>
<p>5. And push your change:</p><pre><code>git push — set-upstream origin master</code></pre>
<p>You should see messages like below at the command prompt.</p>
<p>Now if you open GitHub and refresh the repository, you should be able to see the code.</p>
<h3 id="step-3-now-let-s-get-it-up-on-azure">STEP 3: Now, let’s get it up on Azure</h3>
<p>Open portal.azure.com and login with your credentials.</p>
<p>Click Create New Resource on the top left. Enter “web app” in the search box to get the required resource type and hit Enter.</p>
<p>Select Web App from the search results.</p>
<p>And click Create button.</p>
<p>We will be asked to provide some basic information for this App:</p>
<p>The first box is the name of your app. Which is super easy since its SuperCoolNodeApp :)</p>
<p>The second option is the subscription. I have registered for the “Pay As You Go” subscription since I have already consumed my free trial. You can select your Free Subscription plan here.</p>
<p>Next is the resource group. This is the logical grouping of your apps on Azure. You can create new for this app or use existing ones. I created a new one for this app as SuperCoolNodeApp.</p>
<p>Then, in the end, you will have to select the app service plan. I have created a free plan with the name Test Plan. You can create a new plan if you don’t already have one but make sure you select a Free Version. While selecting, Azure automatically selects S1 tier which is NOT FREE. Make sure you change it to free plan for the demo (Of course, if you want higher capabilities, processing powers etc, go for paid plans.)</p>
<p>Click <strong>Create.</strong></p>
<p>Azure will queue up your request for creating an App with the service plan that you chose and show you a small notification at the top. Creating an app should not take much longer. If you refresh your page in a minute or 2, you should be able to see the app and service plan that was created under all Resources.</p>
<p>Now, click on it to see the details of the app that we just created.</p>
<p>It shows the detail like the subscription the plan is running on, status as Running, Subscription ID, Location on the server that the app is hosted on “Central US” and some FTP details. But the most important thing here is the <strong>URL</strong>. That is going to be the URL of our application in the cloud.</p>
<p>Now let’s get it there….</p>
<blockquote>A little spoiler alert, :) In this section, we will configuring the deployment strategy for our application.</blockquote>
<p>Scroll down and click on Deployment Options.</p>
<p>Click on Configure required settings and select GitHub. It should show you the below screen.</p>
<p>Click Choose project. This should show you all the repositories on your GitHub account.</p>
<p>If you are doing this for the first time, you will have to provide Azure the authorization to access your GitHub account.</p>
<p>Here you will be selecting that MySuperCoolNodeApp that you pushed to GitHub.</p>
<p>Next, we can select the branch that we want to deploy from.</p>
<p>For now, I only have master so I am leaving the default one.</p>
<p>And that’s it. Click OK.</p>
<p>Azure will take care of deploying the app. It will even show you this little notification that Azure is on his way to do this job.</p>
<p>When it’s done (which really shouldn’t take that long), click on the Deployment options again. You should be able to see the last deployment.</p>
<p>If you click on the record, Azure will even show the log of the deployment event.</p>
<p>Cool. Now, if you open your app by going to the URL mentioned in the overview section <a href="https://supercoolnodeapp.azurewebsites.net/" rel="noopener">https://supercoolnodeapp.azurewebsites.net/</a>, you expect to see the Hello World message but instead you see the error below.</p>
<p>Huh… what is wrong? Logs show that the application was deployed, you don’t see any errors, but the app does not work. It’s a mystery.</p>
<p>There is one small setting that you need to do on the Azure portal to help Azure treat it as a Nodejs app and start it accordingly.</p>
<p>Open the Application Settings and scroll down to the Application Settings section and add the below entry.</p><pre><code>App setting name : WEBSITE_NODE_DEFAULT_VERSION</code></pre><pre><code>Value: 8.9.0</code></pre>
<p>It’s basically telling Azure to use this Node version and open the website.</p>
<p>Click Save at the top.</p>
<p>Now if you go to the URL <a href="https://supercoolnodeapp.azurewebsites.net/" rel="noopener">https://supercoolnodeapp.azurewebsites.net/</a></p>
<p>WOOHOO!!! There you go. We just got our super cool Node app up and running in Azure.</p>
<p>Congratulations!! Now every time you make any change to your app and push to GitHub, Azure will catch those and do the continuous deployment.</p>
<p>P.S : If you ever build an app cooler than mine :), then please do share.</p>
<p>If this article helped you , I love applause here and connects on twitter :)</p>
<blockquote>I only write about programming and technology on <a href="https://twitter.com/@rramname" rel="noopener">Twitter</a>.</blockquote>
<p>Have fun!!</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
