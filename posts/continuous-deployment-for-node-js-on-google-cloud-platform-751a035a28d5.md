---
card: "https://cdn-media-1.freecodecamp.org/images/1*PsecxPuZQn0kVxC04OPU8Q.jpeg"
tags: [Nodejs]
description: by Gautam Arora
author: "Milad E. Fahmy"
title: "Continuous Deployment for Node.js on the Google Cloud Platform"
created: "2021-08-15T19:42:45+02:00"
modified: "2021-08-15T19:42:45+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-nodejs tag-google-cloud-platform tag-javascript tag-continuous-integration tag-tech ">
<header class="post-full-header">
<h1 class="post-full-title">Continuous Deployment for Node.js on the Google Cloud Platform</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*PsecxPuZQn0kVxC04OPU8Q.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*PsecxPuZQn0kVxC04OPU8Q.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*PsecxPuZQn0kVxC04OPU8Q.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*PsecxPuZQn0kVxC04OPU8Q.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*PsecxPuZQn0kVxC04OPU8Q.jpeg" alt="Continuous Deployment for Node.js on the Google Cloud Platform">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Gautam Arora</p>
<h1 id="continuous-deployment-for-node-js-on-the-google-cloud-platform">Continuous Deployment for Node.js on the Google Cloud Platform</h1>
<figcaption>Photo by <a href="https://unsplash.com/photos/hjEesK4KSDs?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText" rel="noopener" target="_blank" title="">Axel Ahoi</a> on <a href="https://unsplash.com/search/photos/shipping?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText" rel="noopener" target="_blank" title="">Unsplash</a></figcaption>
</figure>
<p><a href="https://cloud.google.com/" rel="noopener">Google Cloud Platform (GCP)</a> provides a host of options for <a href="https://nodejs.org/en/" rel="noopener">Node</a> developers to easily deploy our apps. Want a managed hosting solution like Heroku? <a href="https://cloud.google.com/appengine/" rel="noopener">App Engine</a>, check! Want to host a containerized app? <a href="https://cloud.google.com/kubernetes-engine/" rel="noopener">Kubernetes Engine</a>, check! Want to deploy serverless app? <a href="https://cloud.google.com/functions/" rel="noopener">Cloud Functions</a>, check!</p>
<p>Recently at work, I’ve been enjoying using our <a href="https://technology.condenast.com/story/departures-building-a-docker-container-based-deployment-platform-at-conde-nast" rel="noopener">in-house continuous deployment service</a> that quickly builds, tests, and deploys new commits pushed to GitHub. So when I read about Google’s new <a href="https://techcrunch.com/2018/07/24/google-announces-cloud-build-its-new-continuous-integration-continuous-delivery-platform/" rel="noopener">Cloud Build</a> service, I wanted to take it for a spin and see if I could recreate a similar seamless deployment experience for myself. Further, in a conversation with <a href="https://twitter.com/fhinkel" rel="noopener">Fransizka</a> from the Google Cloud team, she identified this as an area where a tutorial would be helpful. So here we go…</p>
<h3 id="but-wait-what-is-cloud-build">But wait, what is Cloud Build?</h3>
<p>Cloud Build is a managed build service in GCP that can pull code from a variety of sources, run a series of build steps to create a build image for the application, and then deploy this image to a fleet of servers.</p>
<p>Cloud Build works well with Google’s own source code repository, Bit Bucket or GitHub. It can create a build image using a Docker configuration file (<code>Dockerfile</code>) or Cloud Build’s own configuration file (<code>cloudconfig.yaml</code>). It can deploy applications (and APIs) to App Engine, Kubernetes Engine, and Cloud Functions. A really cool feature is Build Triggers. These can be setup to watch for a new commit in the code repository and trigger a new build and deploy.</p>
<h4 id="before-we-jump-into-the-deep-end-">Before we jump into the deep end…</h4>
<p>This post shares the detailed steps and code to setup the continuous deployment for Node apps on GCP. It assumes that you’re familiar with developing simple Node applications, working with the command line, and have some high level understanding of deploying apps to cloud services like Heroku, AWS, Azure or GCP.</p>
<p>For each of the sections, a companion GitHub code repository is provided for you to follow along. Don’t sweat it though — feel free to skim over the article to learn about the high level ideas, and you can bookmark it and come to it later if you plan to set this up. The real fun of having a setup like this is that you get to deploy applications quickly.</p>
<h3 id="continuous-deployment-for-app-engine-standard">Continuous Deployment for App Engine Standard</h3>
<p>Deploying a Node app to App Engine is quite simple. Create a new project in Google Cloud Console, add an <code>app.yaml</code> configuration file in our code directory (which describes the node runtime we want to use — I’ve used Node 8), and run <code>gcloud app deploy</code> on our terminal — and done!</p>
<p>If you want to try this out for yourself, here are a couple of resources:</p>
<ul>
<li><a href="https://github.com/gautamarora/gae-node-hello-world" rel="noopener">Sample App for App Engine</a></li>
<li><a href="https://cloud.google.com/appengine/docs/standard/nodejs/quickstart" rel="noopener">Quickstart Guide for Node on App Engine</a></li>
</ul>
<p>So, what we’ve done so far by following the quickstart guide above:</p>
<ol>
<li>Created a new project in Google Cloud Console</li>
<li>Deployed our Node app to App Engine using <em>gcloud app deploy</em></li>
</ol>
<p>….now how can we automate setup such that code changes get deployed automatically on push to GitHub?</p>
<p>Here is what we need to do:</p>
<ol>
<li>Put our code on GitHub</li>
</ol>
<ul>
<li>Head over to GitHub to create a new repository</li>
<li>Then follow the instructions to push code from your machine to GitHub</li>
</ul>
<p>2. Enable Cloud Build</p>
<ul>
<li><a href="https://console.cloud.google.com/flows/enableapi?apiid=cloudbuild.googleapis.com&amp;redirect=https://cloud.google.com/cloud-build/docs/quickstart-gcloud&amp;_ga=2.113783623.-1976915987.1533866140" rel="noopener">Enable the Cloud Build API</a> for our project</li>
<li><a href="https://console.cloud.google.com/flows/enableapi?apiid=appengine.googleapis.com&amp;_ga=2.114826311.-1976915987.1533866140" rel="noopener">Enable the App Engine API</a> for for our project.</li>
<li>Grant App Engine IAM to Cloud Build Service account by going to the <a href="https://console.cloud.google.com/iam-admin/iam" rel="noopener">IAM page</a>, find this service account <code>&lt;project-id&gt;@cloudbuild.gserviceaccou</code>nt.com, edit it and give it the App Engine Admin role.</li>
</ul>
<p>3. Create a <a href="https://cloud.google.com/cloud-build/docs/build-config" rel="noopener">Cloud Build configuration file</a></p>
<ul>
<li>Create a new file <code>cloudbuild.yaml</code> that looks like this:</li>
</ul><pre><code>steps:- name: 'gcr.io/cloud-builders/npm'  args: ['install']- name: 'gcr.io/cloud-builders/npm'  args: ['test']- name: "gcr.io/cloud-builders/gcloud"  args: ["app", "deploy"]timeout: "1600s"</code></pre>
<p>This configuration has three build steps (each line starting with a hyphen is a build step) that will run <code>npm install</code>, then <code>npm test</code> and if all looks good then deploy our code to App Engine.</p>
<p>Each build step is just like a command we run on our machine. But in this case, since this file is in yaml and each step is split over 2 lines of name and args, it can look like a bit of a mind-bender.</p>
<p>Let’s try this: for the line starting with “name”, read its last word and then read the values in the “args” line. I hope this file makes more sense now!</p>
<p>4. Run a Build manually (optional, just for verification)</p>
<ul>
<li>We can now deploy our application from our machine using Cloud Build</li>
<li>Run the cloud build command on your terminal: <code>gcloud builds submit — config cloudbuild.yaml .</code>This command starts a build on Cloud Build using the configuration file we created above.</li>
<li>Head over to the <a href="https://console.cloud.google.com/cloud-build/builds" rel="noopener">Cloud Builds page</a> to see the build being kicked off.</li>
<li>Wait for the build to end, and then test out your Node application using the App Engine URL for this app.</li>
<li>You can make changes to your Node app and call this command again and to start more builds if you would like.</li>
</ul>
<p>5. Create a Build Trigger</p>
<ul>
<li>Head over to the <a href="https://console.cloud.google.com/cloud-build/triggers" rel="noopener">Cloud Build Triggers page</a> and select Create Trigger</li>
<li>On the Build Trigger setup page, choose GitHub as the Source Code Repository. This will require you to authorize GCP to access your GitHub repositories, which you will need to approve. Once done, select the GitHub repository for your Node app that you had pushed to GitHub earlier.</li>
<li>Create a trigger named <code>continuous deployment</code>, and for the trigger type choose Branch with regex for branch name as <code>master</code>. This will ensure that the builds, test, and deploy will only run for push to the master branch and not any branch.</li>
<li>For the build configuration file, select <code>cloudbuild.yaml</code></li>
<li>Now click the Build Trigger button</li>
</ul>
<p>6. Run a Build automatically by pushing a commit to GitHub</p>
<ul>
<li>With our build trigger created, make a simple commit to your node application, like change “Hello, World!” to “Hello, GCP!” and commit and push this code to GitHub</li>
<li>Head back the the <a href="https://console.cloud.google.com/cloud-build/builds" rel="noopener">Cloud Builds page</a> and you will notice that a build was automatically triggered (if it isn’t, give it a few more seconds or click the refresh button on the page)</li>
<li>Once the build is complete and you see a green check, you can visit your application using its App Engine URL and see that your changes are now live!</li>
</ul>
<p>Here is a screenshot for builds being triggered through a GitHub push for our app:</p>
<p>Too good to be true?? Run this last step a few times times to test it out a few more times. Our first application now gets deployed to App Engine on every commit to master ?</p>
<figcaption>Photo by <a href="https://unsplash.com/photos/g5FyZvIzUS4?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText" rel="noopener" target="_blank" title="">Willian Justen de Vasconcellos</a> on <a href="https://unsplash.com/search/photos/shipping?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText" rel="noopener" target="_blank" title="">Unsplash</a></figcaption>
</figure>
<h3 id="continuous-deployment-for-kubernetes-engine">Continuous Deployment for Kubernetes Engine</h3>
<p>Great, so we’ve setup our application to deploy to App Engine on GitHub push, but what if we wanted the same setup for our containerized applications? Let’s give it a spin!</p>
<p>At a high level, deploying a Node app to Kubernetes engine has two main tasks. First, get our app ready: Containerize the application with Docker, build it, and push the Docker image to Google Container Registry. Then, setup things on the GCP end: create a Kubernetes Cluster, create a Deployment with your application image, and then create a Service to allow access to your running application.</p>
<p>If you want to try this out for yourself, here are a few resources:</p>
<ul>
<li><a href="https://github.com/gautamarora/gke-node-hello-world" rel="noopener">Sample App for Kubernetes Engine</a></li>
<li><a href="https://nodejs.org/en/docs/guides/nodejs-docker-webapp/" rel="noopener">Containerize a Node App with Docker</a></li>
<li><a href="https://github.com/gautamarora/gke-node-hello-world/blob/master/DEPLOY.md#deploy-a-containerized-hello-world-application-to-kubernetes-engine" rel="noopener">Deploy a Containerized Hello World App to Kubernetes Engine</a></li>
</ul>
<p>So, what we’ve done so far by using the guides above:</p>
<ol>
<li>Created another new project in Google Cloud Console</li>
<li>Created a Kubernetes Cluster, Deployment, and Service</li>
<li>Deployed our Containerized Node app to Kubernetes Engine using <em>kubectl</em></li>
</ol>
<p>…but what we want is an continuous deployment setup such that a new commit kicks off a build and deployment.</p>
<p>Here is what we need to do:</p>
<ol>
<li>Put our code on GitHub</li>
</ol>
<ul>
<li>We will follow the same steps as we did in the section earlier on App Engine. Create a new repository and push code from our machine to GitHub.</li>
</ul>
<p>2. Enable Cloud Build</p>
<ul>
<li><a href="https://console.cloud.google.com/flows/enableapi?apiid=cloudbuild.googleapis.com&amp;redirect=https://cloud.google.com/cloud-build/docs/quickstart-gcloud&amp;_ga=2.113783623.-1976915987.1533866140" rel="noopener">Enable the Cloud Build API</a> for our project</li>
<li><a href="https://console.cloud.google.com/flows/enableapi?apiid=container.googleapis.com&amp;_ga=2.147807223.-1976915987.1533866140" rel="noopener">Enable the Kubernetes Engine API</a> for our project</li>
<li>Grant Kubernetes Engine IAM to Cloud Service account by going to the I<a href="https://console.cloud.google.com/iam-admin/iam" rel="noopener">AM page</a> for this service account <code>&lt;project-id&gt;@cloudbuild.gserviceaccou</code>nt.com, edit it, and give it the Kubernetes Engine Admin role</li>
</ul>
<p>3. Create a Cloud Build Configuration file</p>
<ul>
<li>Create a new file <code>cloudbuild.yaml</code> that looks like this:</li>
</ul><pre><code>steps:- name: 'gcr.io/cloud-builders/npm'  args: ['install']- name: 'gcr.io/cloud-builders/npm'  args: ['test']- name: 'gcr.io/cloud-builders/docker'  args: ["build", "-t", "gcr.io/$PROJECT_ID/my-image:$REVISION_ID", "."]- name: 'gcr.io/cloud-builders/docker'  args: ["push", "gcr.io/$PROJECT_ID/image:$REVISION_ID"]- name: 'gcr.io/cloud-builders/kubectl' args: - 'set' - 'image' - 'deployment/my-deployment' - 'my-container=gcr.io/$PROJECT_ID/image:$REVISION_ID' env: - 'CLOUDSDK_COMPUTE_ZONE=us-east1-b' - 'CLOUDSDK_CONTAINER_CLUSTER=my-cluster'</code></pre>
<p>This configuration has five build steps that will run <code>npm install</code> and then <code>npm test</code> to make sure our application works, then it will create a Docker image and push to GCR and then deploy our application to our Kubernetes cluster. The values <code><em>my-cluster, my-deployment and my-container</em></code> in this file refer to resources in the Kubernetes cluster we have created (as per the guide we followed above). <code><em>$REVISION_ID</em></code> is a variable value that Cloud Build injects into the configuration based on GitHub commit that triggers this build.</p>
<p>4. Run a Build manually (optional, for verification)</p>
<ul>
<li>We can now deploy our application from our machine using Cloud Build</li>
<li>Run the cloud build command on your terminal: <code>gcloud builds submit — config cloudbuild.yaml --substitutions=REVISION_ID=1 .</code></li>
</ul>
<p>We’re also passing the revision id in this command, since we are manually running this build vs it being triggered by GitHub.</p>
<ul>
<li>Head over to the <a href="https://console.cloud.google.com/cloud-build/builds" rel="noopener">Cloud Builds page</a> to see the build in action.</li>
<li>At the end of the build, you can test out your Node application using the Kubernetes Service URL</li>
<li>You can make changes to your Node app and call this command again to kickoff more builds if you would like</li>
</ul>
<p>5. Create a Build Trigger</p>
<ul>
<li>The steps for setting this up are the same as that from the section above for App Engine. Go to <a href="https://console.cloud.google.com/cloud-build/triggers" rel="noopener">Cloud Build Triggers page</a> for this project, select the right GitHub repository, create a trigger called <code>continuous deployment</code> just for the <code>master</code> branch and you’re done.</li>
<li>Run a Build automatically by pushing to GitHub</li>
<li>This is also the same as the section above for App Engine — make a change, add, commit and push to GitHub which will kickoff a build that you can see on your <a href="https://console.cloud.google.com/cloud-build/builds" rel="noopener">Cloud Builds</a> page. Once the builds completes, you will be able to see the updated app using the Kubernetes Service URL.</li>
</ul>
<p>Here is a screenshot for a build being triggered through a GitHub push for our app:</p>
<p>The steps in this section were pretty much the same as the App Engine section. The main differences were that we had to containerize our application with Docker, spin up our Kubernetes cluster, and then have a Cloud Build configuration with just a few more steps.</p>
<p>But at its core, Cloud Build and its Build Triggers work pretty much the same and give us a seamless deployment experience. Our second application now gets deployed to Kubernetes Engine on every commit to master ??</p>
<figcaption>Photo by <a href="https://unsplash.com/photos/Esq0ovRY-Zs?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText" rel="noopener" target="_blank" title="">Maximilian Weisbecker</a> on <a href="https://unsplash.com/?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText" rel="noopener" target="_blank" title="">Unsplash</a></figcaption>
</figure>
<h3 id="continuous-deployment-for-cloud-functions">Continuous Deployment for Cloud Functions</h3>
<p>Sure, App Engine and Kubernetes Engine are great, but how about automated deployments for our Serverless app? I mean, having no servers to manage at all is really the best, right? Let’s do this!</p>
<p>Deploying a Node app to Cloud functions will require us to create a new project. No configuration files are needed, and once GCloud functions deploy on our terminal, our functions are deployed!</p>
<p>If you want to try this out for yourself, here are the resources you will need:</p>
<ul>
<li><a href="https://github.com/gautamarora/gae-node-hello-world" rel="noopener">Sample App for Cloud Functions</a></li>
<li><a href="https://cloud.google.com/functions/docs/quickstart" rel="noopener">Quickstart Guide for Node on Cloud Functions</a></li>
<li><a href="https://cloud.google.com/functions/docs/emulator" rel="noopener">Locally Testing Cloud Functions using Node emulator</a></li>
</ul>
<p>If you’ve been following along, you can probably already picture what steps we need to do:</p>
<ol>
<li>Put our code on GitHub</li>
</ol>
<ul>
<li>We already know how to do this</li>
</ul>
<p>2. Enable Cloud Build</p>
<ul>
<li><a href="https://console.cloud.google.com/flows/enableapi?apiid=cloudbuild.googleapis.com&amp;redirect=https://cloud.google.com/cloud-build/docs/quickstart-gcloud&amp;_ga=2.113783623.-1976915987.1533866140" rel="noopener">Enable the Cloud Build API</a> for our project</li>
<li><a href="https://console.cloud.google.com/flows/enableapi?apiid=cloudfunctions&amp;_ga=2.84807769.-1976915987.1533866140" rel="noopener">Enable the Cloud Functions API</a> for our project.</li>
<li>Grant Cloud Functions IAM to Cloud Build Service account by going to the <a href="https://console.cloud.google.com/iam-admin/iam" rel="noopener">IAM page</a>, find this service account <code>&lt;project-id&gt;@cloudbuild.gserviceaccou</code>nt.com, edit it and give it the Project Editor role.</li>
</ul>
<p>3. Create a Cloud Build Configuration file</p>
<ul>
<li>Create a new file <code>cloudbuild.yaml</code> that looks like this:</li>
</ul><pre><code>steps:- name: 'gcr.io/cloud-builders/npm'  args: ['install']- name: 'gcr.io/cloud-builders/npm'  args: ['test']- name: 'gcr.io/cloud-builders/gcloud' args: - beta - functions - deploy - helloWorld - -- source=. - -- runtime=nodejs8 - -- trigger-http</code></pre>
<p>Similar to the App Engine configuration, this configuration has 3 steps to install. Then test the build, and if all is good, then deploy it to Cloud Functions.</p>
<p>4. Run the Build manually (optional, for verification)</p>
<ul>
<li>We can now deploy our function from our machine using Cloud Build</li>
<li>Run this in your terminal: <code>gcloud builds submit — config cloudbuild.yaml .</code></li>
<li>Head over to the <a href="https://console.cloud.google.com/cloud-build/builds" rel="noopener">Cloud Builds page</a> to see the build in action.</li>
<li>At the end of the build, you can test out your serverless app using the Cloud Function URL</li>
</ul>
<p>5. Create a Build Trigger</p>
<ul>
<li>The steps for setting this up are the same as that from the section above for App Engine and Kubernetes Engine. Go to <a href="https://console.cloud.google.com/cloud-build/triggers" rel="noopener">Cloud Build Triggers page</a> for this project, select the right GitHub repository, create a trigger called <code>continuous deployment</code> just for the <code>master</code> branch, and you’re done.</li>
</ul>
<p>6. Run a Build automatically by pushing to GitHub</p>
<ul>
<li>This is also the same as the section above for App Engine &amp; Kubernetes Engine: make a change, add, commit and push to GitHub, which will kickoff a build that you can see on your <a href="https://console.cloud.google.com/cloud-build/builds" rel="noopener">Cloud Builds</a> page. Once the build completes, you will be able to see the updated app using the Cloud Functions URL</li>
</ul>
<p>Here is a screenshot for build being triggered through a GitHub push for our sample app:</p>
<p>Cloud Functions were super easy to setup with automated builds and makes the “code → build → test → push → deploy” workflow really really fast! Our third application now gets deployed to Cloud functions on every commit to master ???</p>
<figcaption>Photo by <a href="https://unsplash.com/photos/kAjrml-a8R0?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText" rel="noopener" target="_blank" title="">Jassim Vailoces</a> on <a href="https://unsplash.com/search/photos/shipping?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText" rel="noopener" target="_blank" title="">Unsplash</a></figcaption>
</figure>
<h3 id="wrapping-up">Wrapping Up</h3>
<p>Phew! We covered a lot of ground in this post. If this was your first time trying out GCP for Node, hopefully you got to see how easy and straightforward it is to try out the various options. If you were most eager to understand how to setup continuous deployment for apps on GCP, I hope you weren’t disappointed either!</p>
<p>Before you go, I just wanted to make sure that you didn’t miss the fact that all the sections had a sample app: <a href="https://github.com/gautamarora/gae-node-hello-world" rel="noopener">Hello World for App Engine</a>, <a href="https://github.com/gautamarora/gke-node-hello-world" rel="noopener">Hello World for Kubernetes Engine</a> and <a href="https://github.com/gautamarora/gcf-node-hello-world" rel="noopener">Hello World for Cloud Functions</a>.</p>
<p>That’s it for now! Let’s go ship some code! ?</p>
<p>Thanks for following along. If you have any questions or want to report any mistakes in this post, do leave a comment.</p>
<p>If you found this article helpful, don’t be shy to ?</p>
<p>And you can <a href="http://twitter.com/gautam" rel="noopener">follow me on Twitter here.</a></p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
