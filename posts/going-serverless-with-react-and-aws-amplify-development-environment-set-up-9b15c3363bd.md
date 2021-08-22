---
card: "https://cdn-media-1.freecodecamp.org/images/0*B6_zkUG4Or9zIWwU"
tags: [AWS]
description: by Peter Mbanugo
author: "Milad E. Fahmy"
title: "Going serverless with React and AWS Amplify: Development Environment Set up"
created: "2021-08-15T19:38:09+02:00"
modified: "2021-08-15T19:38:09+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-aws tag-reactjs tag-javascript tag-serverless tag-tech ">
<header class="post-full-header">
<h1 class="post-full-title">Going serverless with React and AWS Amplify: Development Environment Set up</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/0*B6_zkUG4Or9zIWwU 300w,
https://cdn-media-1.freecodecamp.org/images/0*B6_zkUG4Or9zIWwU 600w,
https://cdn-media-1.freecodecamp.org/images/0*B6_zkUG4Or9zIWwU 1000w,
https://cdn-media-1.freecodecamp.org/images/0*B6_zkUG4Or9zIWwU 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/0*B6_zkUG4Or9zIWwU" alt="Going serverless with React and AWS Amplify: Development Environment Set up">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Peter Mbanugo</p>
<h1 id="going-serverless-with-react-and-aws-amplify-development-environment-set-up">Going serverless with React and AWS Amplify: Development Environment Set up</h1>
<figcaption>Photo by <a href="https://unsplash.com/@grohsfabian?utm_source=medium&amp;utm_medium=referral" rel="noopener" target="_blank" title="">Fabian Grohs</a> on <a href="https://unsplash.com?utm_source=medium&amp;utm_medium=referral" rel="noopener" target="_blank" title="">Unsplash</a></figcaption>
</figure>
<p>Serverless computing provides us with benefits such as reduced operation costs and development time. It allows us focus on our code to provide business value to the users without worrying about building and maintaining servers.</p>
<p>AWS is one of the many providers of serverless computing services. In this post, I’ll walk you through setting up your development environment to build on AWS. This will be a primer for future posts in this series.</p>
<p>According to <a href="https://en.wikipedia.org/wiki/Serverless_computing" rel="noopener">Wikipedia</a>, serverless computing is a cloud-computing execution model in which the cloud provider acts as the server, dynamically managing the allocation of machine resources. What this typically means is that you can single handedly build production-ready apps by focusing on coding the business logic, and leave off the task of provisioning servers, scaling or upgrading servers, and other functionalities to cloud providers or third-party service providers. You can utilise this to build nearly any type of application or backend service, and everything required to run and scale your application with high availability is handled for you.</p>
<p>This model of running applications provides us benefits such as reduced operational costs, reduced development time, and many more. If you’d like to read more about what serverless is and its benefits, checkout <a href="https://martinfowler.com/articles/serverless.html" rel="noopener">this article on serverless architecture</a>.</p>
<h3 id="what-am-i-going-to-learn-reading-this">What am I going to learn reading this?</h3>
<p>This post (and more to come in the near future) is intended to teach you how to build React applications utilising the serverless architecture and various <a href="https://aws.amazon.com/" rel="noopener">AWS</a> services. We will cover areas such as authentication, creating and consuming REST APIs, analytics, and hosting, all while utilising services from a single cloud provider. We will be working with <a href="https://aws-amplify.github.io/" rel="noopener">AWS Amplify</a>, which provides CLI tools and UI component to make it easy to build serverless applications on AWS.</p>
<p>In this post, I’ll walk you through setting up your development environment to build on AWS.</p>
<h3 id="getting-started-with-aws-amplify">Getting started with AWS Amplify</h3>
<p><a href="https://aws-amplify.github.io/" rel="noopener">AWS Amplify</a> is a library that provides you with tools to build serverless applications. With it, integrating various AWS services with your app can be done in few lines of code. You also get UI components to accelerate development.</p>
<p>To use any AWS services or the Amplify library, you’ll need an AWS account. If you don’t have one, you can <a href="https://portal.aws.amazon.com/billing/signup?redirect_url=https%3A%2F%2Faws.amazon.com%2Fregistration-confirmation" rel="noopener">sign up</a> now. Signing up gives you immediate access to the AWS free tier and there are no upfront charges.</p>
<h3 id="install-and-configure-the-amplify-cli">Install and configure the Amplify CLI</h3>
<p>The Amplify CLI is a tool that allows you create and configure AWS services for your application. Its purpose is to simplify mobile and web application development for you. The CLI uses <a href="https://aws.amazon.com/cloudformation/" rel="noopener">AWS CloudFormation</a> and nested stacks, which allows you to add or modify configurations locally before you push them for execution in the cloud.</p>
<p>You need Node.js (version 8.11 or greater) and npm (version 5 or greater) installed to use the CLI. If you don’t have them installed, visit the <a href="https://nodejs.org/en/download/" rel="noopener">Node.js download page</a>. Installing node will also give you npm, but if you have just node installed, you can also <a href="https://www.npmjs.com/get-npm" rel="noopener">download npm</a> separately.</p>
<p>Install the CLI by running <code>npm install -g @aws-amplify/cli</code> in the command line. Do not use yarn to install the CLI as it has known issues. Once the Amplify CLI is installed, you will have to configure it to specify the necessary AWS credentials and region. Follow the instruction below to configure the CLI.</p>
<ol>
<li>Open the command line and run the command <code>amplify configure</code>. This will open the AWS Console in your browser, and if you're not signed in, you'll need to sign in to your account.</li>
<li>When you’ve signed in, go back to the command line and press Enter.</li>
<li>You’ll be prompted to select an AWS region. Select one and press Enter.</li>
<li>Then you get the option to specify the username of a new AWS IAM (Identity and Access Management) user to use with the CLI. Enter a user name and press Enter. When you press enter, it opens your browser and takes you to the IAM dashboard in the AWS Console.</li>
<li>On the IAM dashboard you’re asked to create a new user. The username field is pre-populated with the username you entered in the console, and the <code>Programmatic Access</code> access type selected. Click <code>Next: Permissions</code> button to go to the next page.</li>
<li>Leave the default selected <code>Administrator Access</code> policy and click <code>Next: Review</code> button.</li>
<li>Click <code>Create User</code> button to create the user. When the user is created, you'll be given an <strong>Access Key ID</strong> and a <strong>Secret Access Key</strong>. Keep those information because you'll need it to set up the CLI.</li>
<li>Go back to the command line and press Enter.</li>
<li>It’ll prompt you for the <strong>Access Key ID</strong>. Copy and paste the value then press Enter.</li>
<li>Another prompt shows asking for the <strong>Secret Access Key</strong>. Copy and paste the value then press Enter.</li>
<li>Now you’ll be asked if you want to create or update the AWS profile in your local machine. We’ll be using default for this profile. Press Enter to select the default and create your AWS profile.</li>
</ol>
<h3 id="create-the-react-app">Create the React app</h3>
<p>Now that the Amplify CLI has been configured, we can begin creating the React app. We will bootstrap the React app with <a href="https://github.com/facebookincubator/create-react-app" rel="noopener">Create React App</a>. This allows us focus on writing code and not worry about setting up Babel and Webpack because they’ll preconfigured for us. To create the React project, run the following command:</p><pre><code>$ npx create-react-app serverless-react</code></pre>
<p>This creates a folder <code>serverless-react</code> with necessary files for a react app. Next thing to do is to initialise an Amplify project. To do this, follow the instructions below</p>
<ol>
<li>Switch directory to the project by running <code>cd serverless-react</code> in the command line</li>
<li>Run the command <code>amplify init</code>. This will prompt you to answer some questions.</li>
<li>Select your code editor and press Enter.</li>
<li>The next set of prompts presents you with questions to determine the type of app you’re building. Select JavaScript, then React, and then press Enter for the remaining prompts to use the default values.</li>
</ol>
<p>The <code>amplify init</code> command sets up deployment resources in the cloud with CloudFormation stacks, and prepares the project for Amplify. It pulls configuration details of the resources into the project directory. This configuration information will be used to add AWS services to the project and update service configuration. At the root of the project directory, you'll find a <code>.amplifyrc</code> file and a <strong>amplify</strong> folder. They contain CloudFormation configuration information for resources we'll be using.</p>
<p>The final bit we need to set up the project is to add the Amplify library to our project. The library provides us with modules and UI component that makes it easy to integrate AWS services in few lines of code. Run the following command to install it from npm.</p><pre><code>$ npm install -S aws-amplify &amp;&amp; npm install -S aws-amplify-react</code></pre>
<h3 id="that-s-a-wrap">That’s A Wrap</h3>
<p>Serverless computing provides us with benefits such as reduced operation costs and development time. It allows us focus on our code to provide business value to the users without worrying about building and maintaining servers.</p>
<p>AWS is one of the many providers of serverless computing services. It takes a couple of steps to configure and integrate these services, and AWS Amplify was built to make it easier to build serverless applications on AWS. It provides tools to create and configure services with a few commands, and library components to easily interact with those services from our code.</p>
<p>This is the first post in a series to introduce you to building serverless applications with AWS Amplify. We set up the Amplify CLI and created an Amplify project.</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
