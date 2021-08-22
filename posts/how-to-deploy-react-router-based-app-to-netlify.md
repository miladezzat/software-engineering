---
card: "/images/default.jpg"
tags: [React]
description: In this article, we'll learn the most popular ways of deployi
author: "Milad E. Fahmy"
title: "How to Deploy a React Router-Based Application to Netlify"
created: "2021-08-15T19:26:33+02:00"
modified: "2021-08-15T19:26:33+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-react tag-javascript tag-react-router tag-netlify ">
<header class="post-full-header">
<h1 class="post-full-title">How to Deploy a React Router-Based Application to Netlify</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2021/04/routing.jpg 300w,
/news/content/images/size/w600/2021/04/routing.jpg 600w,
/news/content/images/size/w1000/2021/04/routing.jpg 1000w,
/news/content/images/size/w2000/2021/04/routing.jpg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2021/04/routing.jpg" alt="How to Deploy a React Router-Based Application to Netlify">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>In this article, we'll learn the most popular ways of deploying a React app to Netlify. We'll also learn the configuration changes you'll need to make to deploy a Routing-based React app.</p>
<p>The thing I love about <a href="https://www.netlify.com/">Netlify</a> is that it provides a lot of useful features<br>for free such as:</p>
<ul>
<li>A way to deploy a static website within seconds</li>
<li>Continuous deployment, which means when you connect your Github/Gitlab/Bitbucket repository, it automatically triggers deployment when new commits are pushed to the repository</li>
<li>Assurance that your website never goes down, even during new deployments</li>
<li>Allows you to easily rollback to any previous working version of your site with a single click</li>
<li>Lets you quickly preview any of the previously deployed versions of the app</li>
<li>Change the domain or subdomain of your site instantly </li>
</ul>
<p>and much more.</p>
<p>So let's see how to deploy a React app to Netlify.</p>
<blockquote>Want to learn Redux from the absolute beginning and build a food ordering app from scratch? Check out the <a href="https://master-redux.yogeshchavan.dev/">Mastering Redux</a> course.</blockquote>
<h2 id="drag-and-drop-the-build-folder-in-netlify">Drag and Drop the Build Folder in Netlify</h2>
<p>The fastest and easy way to deploy a React application is just to drag and drop the build folder in Netlify.</p>
<p>To create a build folder, just execute the <code>npm run build</code> or <code>yarn build</code> command from the command line from your project folder.</p>
<p>Once the build folder is created, you just need to drop the folder in the drop area under the <code>sites</code> menu, as shown below:</p>
<h2 id="how-to-deploy-an-app-to-netlify-from-a-github-repository">How to Deploy an App to Netlify from a GitHub Repository</h2>
<p>This is my favorite way of deploying applications on Netlify.</p>
<p>Because whenever you push any changes to the GitHub repository, it will automatically be deployed to Netlify. You can also see all deployed versions and easily roll back to any previously working version of code with just a single click.</p>
<p>If you already have a repository pushed to GitHub, then you just need to connect it.</p>
<p>Login to your Netlify account. In the dashboard, click on the <code>New site from Git</code> button.</p>
<p>Click on the <code>GitHub</code> button to connect your GitHub repository.</p>
<p>It will open a new tab. Make sure the popup is enabled in your browser.</p>
<p>Search for the GitHub repository in the <code>Search repos</code> search box. If your repository is not getting displayed then click on the <code>Configure the Netlify app on GitHub</code> button at the bottom of the page.</p>
<p>Once clicked, scroll down on the page and click on the <code>Select repositories</code> dropdown and search for your repository and click on the <code>Save</code> button.</p>
<p>You will be redirected to the previous page showing all the available repositories.</p>
<p>Search for the repository you want to deploy. For this article, I have selected the <a href="https://github.com/myogeshchavan97/react-book-management-app">react-book-management-app</a> repository which we created in my <a href="/news/react-crud-app-how-to-create-a-book-management-app-from-scratch/">previous article</a>.</p>
<p>Once you select the repository, you will see the following screen:</p>
<p>For this application, we don't need to change anything.</p>
<p>Your <code>Build command</code> and <code>Publish directory</code> will be automatically populated. Make sure to enter these fields if you have a different command in <code>package.json</code> to build your app or those fields are not auto-populated. </p>
<p>Now, click on the <code>Deploy site</code> button. Once clicked, you will see the <code>Site deploy in progress</code> message.</p>
<p>You'll have to wait a little bit while it's deploying. Once deployment is completed, you will see the following screen:</p>
<p>Open the link in the new tab and you will see your application deployed live.</p>
<p>Awesome! Now, if you make any changes in the source code and push that change to GitHub, Netlify will detect that change and re-deploy your application with your latest changes.</p>
<p>If you check the application, you will see that the application works just fine with the navigation and you're able to add/edit/delete a book.</p>
<p><strong>But there is one issue. </strong>If you directly access the <code>/add</code> route or refresh the <code>/add</code> route page, you will get a page not found error as shown below:</p>
<p>You will get the same error if you try to refresh the edit page route.</p>
<p>This is because when we access any route on our local machine, React Router handles the routing. But when we deploy the application on any server, directly accessing the route will send the request to the server itself (Netlify in our case).</p>
<p>But as there is no <code>/add</code> route handler on the server-side, you will see a page not found error. But Netlify provides a way to fix this.</p>
<p>Create a new file with the name <code>_redirects</code> inside the <code>public</code> folder of our project and add the following contents inside it:</p><pre><code class="language-js">/* /index.html 200
</code></pre>
<p>Here, we're telling Netlify to redirect all the routes to the <code>index.html</code> file. </p>
<p>The <code>index.html</code> file contains our entire React app code. It gets generated inside the <code>build</code> folder when the <code>yarn build</code> command is executed by Netlify while deploying the app.</p>
<p>And as routing is handled by our React app which is contained in the <code>index.html</code> file, our application will work without a page not found issue.</p>
<p>Now, push the changes to the GitHub repository so Netlify will deploy the app again with these changes.</p>
<p>And once deployed, if you check the deployed application, you will see that the application works fine and we don't get a page not found error.</p>
<p>That's it! We're all done with deploying our application to Netlify.</p>
<h2 id="how-to-easily-change-a-site-name-in-netlify">How to Easily Change a Site Name in Netlify</h2>
<p>If you check the name of the deployed site you will see that it's not easy to remember, especially if you have lot of applications deployed. But Netlify provides a way to easily change that.</p>
<p>Click on the <code>Site settings</code> button displayed on the <code>Site overview</code> section.</p>
<p>Then click on the <code>Change site name</code> button and enter a new name. Click on the <code>Save</code> button, and now you can access your application with the changed name.</p>
<blockquote>I usually like to give the same name as the repository name so it's easy to find a particular application if you have a lot of deployed applications on Netlify.</blockquote>
<p>If you want to know how to deploy React + Node.js application to production, check out <a href="https://dev.to/myogeshchavan97/how-to-deploy-react-node-js-application-to-heroku-4jb4">this article</a>.</p>
<h3 id="thanks-for-reading-">Thanks for reading!</h3>
<p>You can find the complete GitHub source code along with this redirection change in <a href="https://github.com/myogeshchavan97/netlify-react-book-management-app">this repository</a>.</p>
<p><strong>You can see the live demo of the deployed application <a href="https://react-book-management-app.netlify.app/">here</a>.</strong></p>
<p>Want to learn all ES6+ features in detail including let and const, promises, various promise methods, array and object destructuring, arrow functions, async/await, import and export and a whole lot more from scratch?</p>
<p>Check out my <a href="https://modernjavascript.yogeshchavan.dev/">Mastering Modern JavaScript</a> book. This book covers all the pre-requisites for learning React and helps you to become better at JavaScript and React.</p>
<blockquote>Check out free preview contents of the book <a href="/news/learn-modern-javascript/">here</a>.</blockquote>
<p>Also, you can check out my <strong>free</strong> <a href="https://yogeshchavan1.podia.com/react-router-introduction">Introduction to React Router</a> course to learn React Router from scratch.</p>
<p>Want to stay up to date with regular content regarding JavaScript, React, Node.js? <a href="https://www.linkedin.com/in/yogesh-chavan97/">Follow me on LinkedIn</a>.</p>
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
