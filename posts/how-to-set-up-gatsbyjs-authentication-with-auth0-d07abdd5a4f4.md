---
card: "https://cdn-media-1.freecodecamp.org/images/1*vaizCYVmspYXc7W-Yavprw.png"
tags: [JavaScript]
description: by Michael Ozoemena
author: "Milad E. Fahmy"
title: "How to set up GatsbyJS authentication with Auth0"
created: "2021-08-15T19:36:19+02:00"
modified: "2021-08-15T19:36:19+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-gatsbyjs tag-auth0 tag-mongodb tag-authentication ">
<header class="post-full-header">
<h1 class="post-full-title">How to set up GatsbyJS authentication with Auth0</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*vaizCYVmspYXc7W-Yavprw.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*vaizCYVmspYXc7W-Yavprw.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*vaizCYVmspYXc7W-Yavprw.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*vaizCYVmspYXc7W-Yavprw.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*vaizCYVmspYXc7W-Yavprw.png" alt="How to set up GatsbyJS authentication with Auth0">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Michael Ozoemena</p>
<h1 id="how-to-set-up-gatsbyjs-authentication-with-auth0">How to set up GatsbyJS authentication with Auth0</h1>
<h4 id="tl-dr">TL;DR</h4>
<p>GatsbyJS is a framework that uses GraphQL and ReactJS to enable you to create feature-rich, super fast and dynamic web apps. It gives you the ability to consume data from virtually anywhere and use them in your app. In this tutorial, I’ll be showing you how to use Auth0 which is an authentication and authorization platform to add authentication to your GatsbyJS application and to your serverless function on Netlify.</p>
<p>I’ll assume you have at least a basic understanding of React, Node, and GraphQL.</p>
<p>Here’s <a href="https://github.com/THEozmic/micro-blog" rel="noopener">the Github Repository</a> if you want to take a look at the source code.</p>
<h4 id="enter-gatsbyjs-">Enter GatsbyJS.</h4>
<p>Created in 2015, <a href="https://www.gatsbyjs.com" rel="noopener">Gatsby</a> is a simple way to build a website with React. Today, Gatsby is known to be used to build websites like blogs, portfolio pages, and even e-commerce applications. Gatsby sites are known for being blazingly fast, and that is because when you build a website using Gatsby, it comes with tons of performance optimizations out-the-box, unlike some other frontend frameworks that leave you to figure out how to make your website more performant. Gatsby’s secret to being fast is in the fact that it follows the PRPL architectural pattern, which stands for:</p>
<ul>
<li><strong>Push</strong> critical resources for the initial URL route using <code>&lt;link prelo</code>ad&gt;and http/2.</li>
<li><strong>Render</strong> initial route.</li>
<li><strong>Pre-cache</strong> remaining routes.</li>
<li><strong>Lazy-load</strong> and create remaining routes on demand.</li>
</ul>
<p>It is a pattern developed by Google for structuring and serving Progressive Web Apps (PWAs), with an emphasis on the performance of app delivery and launch. You can <a href="https://developers.google.com/web/fundamentals/performance/prpl-pattern/" rel="noopener">read more about this pattern here</a>.</p>
<h4 id="what-is-auth0">What is Auth0?</h4>
<p><a href="https://auth0.com" rel="noopener">Auth0</a>, pronounced as “Auth Zero” is a robust authentication and authorization platform. It makes it super easy to do add things like user registration, password retrieval, sign in, social login, multi-factor authentication, enterprise login, single sign-on, and more, into your production application.</p>
<p>Auth0 pays close attention to the developer’s experience with their excellent blogs posts and robust and easy to understand documentation. With Auth0 you can make use of various identity standards:</p>
<ul>
<li><strong>OAuth 1</strong></li>
<li><strong>OAuth 2</strong></li>
<li><strong>Open ID Connect</strong></li>
<li><strong>JSON Web Tokens (JWT)</strong></li>
<li><strong>Security Assertion Markup Language (SAML)</strong></li>
<li><strong>WS-Federation</strong></li>
</ul>
<p>In this tutorial, we’ll focus on using a combination of <strong>JSON Web Tokens </strong>and Social logins with <strong>OAuth 2</strong>.</p>
<h4 id="serverless-functions-and-netlify-">Serverless Functions and Netlify.</h4>
<p>Netlify is a platform that lets you deploy your project without worrying about certain overheads like Continuous Deployment, HTTP Certs, and <a href="https://www.netlify.com/features/" rel="noopener">more</a>, created as a way to deploy and manage static websites that don’t have a backend.</p>
<p>Now, because not everyone wants to deploy a static website and there’s the need for support for a backend, Netlify added a feature called “Serverless functions” which are backends where you don’t have to worry about the server infrastructure.</p>
<p>Behind the scenes, Netlify functions stand between you and something called Amazon Web Services (AWS) Lambda which is where the real “serverless” happens, and it lives on Amazon’s AWS cloud platform. Netlify functions help simplify things for you, so you don’t have to deal directly with AWS and also be able to keep using all of Netlify’s other cool features like Continuous Deployment.</p>
<p>The word “serverless” doesn’t imply without a server; it means that you as a developer need not worry about the server infrastructure (physical and otherwise).</p>
<p>You can read more about <a href="https://www.netlify.com/" rel="noopener">Netlify</a> and their <a href="https://www.netlify.com/features/functions/" rel="noopener">Serverless Functions</a>.</p>
<h4 id="our-app-micro-blog-">Our App: Micro Blog.</h4>
<p>Our app is called “Micro Blog”. It’s a platform that allows users to create short, frequent posts. Each post contains some text content, username and profile image of the person making the post.</p>
<p>Anyone can open the web app and view posts of every other person, but to make a post themselves, they need to log in. The app supports social logins and an email login.</p>
<p>If you are already familiar with most of this stuff and want to see the code, you can head over to <a href="https://github.com/THEozmic/micro-blog" rel="noopener">the source code on Github</a>.</p>
<h4 id="building-the-front-end-">Building the Front-End.</h4>
<p>Our front-end is a GatsbyJS app, and that means the first thing we need to do is install the Gatsby CLI node package from npm.</p>
<p><strong>Note: </strong>Use node version “&gt;= 6.9.0 &lt;7.0.0 || &gt;= 8.9.0” else you get an error when you try to create a new Gatsby site, this is because of the dependency “css-loader@1.0.1”.</p><pre><code># install the Gatsby CLI globallynpm install -g gatsby-cli</code></pre><pre><code># create a new Gatsby site using the default startergatsby new micro-blog</code></pre>
<p>After the commands are done running, you should be able to enter into the directory called “micro-blog”, relative to where you executed the commands above.</p><pre><code>cd micro-blog</code></pre>
<p>When you take a look at the contents of this directory, you’ll find a ton of generated content. At this point, you can fire up your Gatsby site and see it working. To do that, in your terminal run this:</p><pre><code>gatsby develop</code></pre>
<p>This will start up your Gatsby site on <code><a href="http://localhost:8000/" rel="noopener">http://localhost:8000/</a></code>.</p>
<p>Next step is to add and modify content specific to our application.</p>
<p>We’ll start with <code>gatsby-config.js</code>. Replace the contents of the file with:</p>
<p>You might want to update the “&lt;YOUR NAME&gt;” author placeholder value.</p>
<p>This file contains your Gatsby app settings, stuff like your site metadata and plugins. It’s a pretty important file Gatsby looks for when you start up your app. Within the app, we can use GraphQL to query the contents of this file.</p>
<p>Up next, <code>src/components/header.js</code>:</p>
<p>This file is our shared header component. Now, a few things are going on here:</p>
<ul>
<li>We are importing some things from <code>gatsby</code> library: <code>Link</code> and <code>navigate</code>. <code>Link</code> is a React component used to link to other pages that are within your app like “/app/home”, while <code>navigate</code> is a function that accepts a URL and programmatically navigates the user to the specified URL.</li>
<li><code>isLoggedIn</code>, <code>logout</code>, and <code>getUserNickname</code> are methods that check if the user is logged in, log out the user, and get a logged in user’s nickname for display purposes, respectively.</li>
<li><code>Button</code> is a component that displays a button element for the user. It accepts several props that help us easily give the button varying looks.</li>
</ul>
<p>Here’s what <code>Button</code> looks like:</p>
<p>As you’ll see, we are going to be making use of <a href="https://emotion.sh/" rel="noopener">Styled Components</a> a lot and specifically <code>emotion</code>, which is one of the many supported CSS-in-JS packages for GatsbyJS.</p>
<p>Later, we will take a look at <code>src/services/auth.js</code>.</p>
<p>Next important file to look at is <code>/src/components/layout.js</code>:</p>
<p>This file is the wrapper file for our application. It includes the header, a footer, and renders children passed to it. We also see the imported <code>graphql</code> package from <code>gatsby</code> alongside <code>StaticQuery</code> component. <code>StaticQuery</code> accepts a <code>query</code> prop which is a GraphQL query. Whatever value resolved from the <code>query</code> is made available in the <code>StaticQuery</code> component’s render prop.</p>
<p>Taking a closer look at the query, we can see that it’s getting data from the <code>gatsby-config.js</code> file.</p>
<p>Our accompanying CSS <code>/src/components/layouts.css</code> stays almost the same with the generated one with the only difference being from line 8:</p><pre><code>body {</code></pre><pre><code>   margin: 0;</code></pre><pre><code>   background-color: #f2f9ff;</code></pre><pre><code>}</code></pre>
<p>Let’s leave the <code>/src/components</code> directory for now and take a look at <code>/src/pages/index.js</code> :</p>
<p>All files in <code>/src/pages/</code> become pages in your Gatsby App. For example, <code>index.js</code> becomes the homepage and <code>/src/pages/app/home.js</code> becomes <code><a href="http://yourdomain.com/app/home" rel="noopener">http://yourdomain.com/app/home</a></code>.</p>
<p>On our homepage, we want our users to see the recent posts and ask them to log in or sign up if they want to create a post.</p>
<p>To get our recent posts, we need <code>axios</code>, which is a promise-based library for making network requests in JavaScript. Install <code>axios</code> by running this in your terminal:</p><pre><code>npm install axios</code></pre>
<p>When our component mounts, we check if the user is logged in and we redirect them to <code>/app/home</code> because we don’t want them being on this page if they are logged in. Admittedly, this is a pretty naïve approach, and we could make use of “Protected Routes” instead. Using “Protected Routes” means that this component will not even get the chance to be mounted at all. Due to the small size of this project, I’ve decided not to make use of Protected Routes.</p>
<p>In case you want to implement Protected Routes in your Gatsby App, please refer to <a href="https://www.gatsbyjs.org/docs/authentication-tutorial/#creating-client-only-routes" rel="noopener">this guide</a> on the official Gatsby website.</p>
<p>We create a request to get the posts when our component mounts and then update the state with the returned data. Updating the state causes our component re-render the child<code>RecentPosts</code> component since it makes use of the said state.</p>
<p>Notice that the URI in the network request to fetch the posts data is an environment variable <code>process.env.API_URI</code>. These environment variables aren’t the typical environment variables you find in a Node app. To create these environment variables, you need two files in your Gatsby application root directory: <code>env.production</code> and <code>env.development</code>. These files will be automatically loaded by Gatsby in the appropriate environment when you start up your app.</p>
<p>As I mentioned earlier, these environment variables aren’t the same with your Node environment variables and what makes them different is that they aren’t private files that you typically exclude in your <code>.gitignore</code> file. You have to push these files when you want to deploy your app because GatsbyJS will need to read these files on startup.</p>
<p>Mine looks something like:</p><pre><code>AUTH0_DOMAIN=micro-blog.auth0.com</code></pre><pre><code>AUTH0_CLIENTID=cIovhIQvYOr6fk3yhDtKjB5EiIvLevxf</code></pre><pre><code>REDIRECT_URI='http://localhost:8000/callback'</code></pre><pre><code>API_URI='http://localhost:9000/.netlify/functions/'</code></pre>
<p>In production, it’s a bit different:</p><pre><code>AUTH0_DOMAIN=micro-blog.auth0.com</code></pre><pre><code>AUTH0_CLIENTID=cIovhIQvYOr6fk3yhDtKjB5EiIvLevxf</code></pre><pre><code>REDIRECT_URI='https://angry-shaw-7a81ce.netlify.com/callback'</code></pre><pre><code>API_URI='https://angry-shaw-7a81ce.netlify.com/.netlify/functions/'</code></pre>
<p>In order to get these values for your own app, you need to<a href="https://auth0.com/signup" rel="noopener"> create an Auth0 account</a> if you don’t already have one.</p>
<p>Note that you can use Auth0 for free with limited features.</p>
<p>After you’ve created an account, log in to your Auth0 <a href="https://manage.auth0.com/" rel="noopener">management dashboard</a> and create a new Auth0 Application. You can do that by clicking on the Applications menu item and then the <strong>Create Application</strong> button. You can update the application name from “My App” to whatever else you want to use. You can change this later if you wish. In my case, I use “Micro Blog”.</p>
<p>Next, you select “Single Page Web App” and click on <strong>Create</strong>. This will immediately create your application.</p>
<p>Once you are done with creating your application, you should navigate to “Settings”, there you will find your <code><strong>AUTH0_CLIENTID</strong></code><strong> </strong>and <code><strong>AUTH0_DOMAIN</strong></code><strong> </strong>values.</p>
<p><strong>Note:</strong> For your <code>.env.production</code>, you don’t have the <code><strong>REDIRECT_URI</strong></code><strong> </strong>and <code><strong>API_URI</strong></code><strong> </strong>at this point. Later on, after we create our Netlify app, we will get the application URL which we can then put in there appropriately.</p>
<p>Now, let’s take a look at <code>src/components/recentPosts.js</code>:</p>
<p>Again, here we make use of Styled Components. We also make use of a React lifecycle method <code>shouldComponentUpdate</code> to prevent unnecessary re-renders when the <code>RecentPosts</code> component is used in another component.</p>
<p>When a user clicks on the login button, we navigate the user to an Auth0 login page. After they have been authenticated, we redirect the user to a URL in our app called <code>/callback</code> where we check that the user has been logged in properly and then save their details in <code>localStorage</code>. Here’s what the <code>/callback</code> page looks like:</p>
<p>We call the <code>handleAuthentication</code> method which will get data from the URL, parse it, save the extracted data to <code>localStorage</code> and then call the <code>() =&gt; naviage('/app/hom</code>e') method to redirect the user to the main app.</p>
<p>Now, we take a look at the <code>/pages/app/home.js</code> page, where only logged in users can access:</p>
<p>There isn’t much that is new here. The only things I’d mention are:</p>
<ul>
<li>We create new posts in the <code>handlePostSubmit</code> method and in there, we make a regular <code>axios</code> call but with a <code>headers</code> option containing the JWT token “id_token”. We do that because, in our Serverless Function, we will be needing that value in the headers to authenticate a request, making sure that only a logged in user can create a new post and that the token saved on the client side is actually valid and not tampered with. This greatly improves the security and reliability of our app.</li>
<li>We redirect the user to <code>/</code> when they aren’t logged in properly and they manage to land on this page. We do that in the <code>componentDidMount</code> lifecycle method. Again, <a href="https://www.gatsbyjs.org/docs/authentication-tutorial/#creating-client-only-routes" rel="noopener">Protected Routes</a> are a better option in your production apps.</li>
</ul>
<p>Finally, we get to <code>/src/services/auth.js</code>. We have been using functions from this file throughout the app, it’s time to take a look at it:</p>
<p>In this file we use <code>auth0-js</code> a JavaScript library by Auth0 to handle the authentication parts of our app. Add it to your app by running this in your terminal:</p><pre><code>npm install auth0-js</code></pre>
<p>Next thing you see in this file is the creation of <code>isBrowser</code> which states if our file is currently being executed within the context of a browser. This is important because during the build process you might run into errors trying to call things like <code>window.localStorage</code>.</p>
<p>Let’s take a look at some of the methods in this file:</p>
<p>The <code>getUser</code> method gets the user details from the access token previously stored in the <code>localStorage</code>, after our user has been logged in. It uses the <code>getAccessToken</code> method to fetch the access token stored.</p>
<p>The <code>handleLogin</code> method is called when the user tries to log in. It redirects them to the Auth0 login page which in turn redirects the user to <code>/callback</code> once they’ve been logged in.</p>
<p>The <code>isLoggedIn</code> method checks that the JWT token “id_token” expiration date saved in <code>localStorage</code> as <code>expiresAt</code> hasn’t been exceeded, thereby invalidating the user’s session.</p>
<p>The <code>handleAuthentication</code> method is what you see being used in the <code>/callback</code> page. This method parses the URL hash and gets important values which we later save in <code>localStorage</code> in the <code>setSession</code> method.</p>
<p>Finally, the <code>logout</code> method logs the user out by deleting saved credentials. This works well but you could take it a step further by <a href="https://auth0.com/docs/api/authentication#logout" rel="noopener">calling an endpoint on Auth0</a> which will invalidate the session completely. I stopped here for the sake of this tutorial.</p>
<p>Finally, we update line 6 on <code>/src/components/seo.js</code>:</p><pre><code>const SEO = ({ description = null, lang = "eng", meta = [], keywords = [], title }) =&amp;gt; {</code></pre>
<p>Making it use an ES6 arrow function and default values.</p>
<h4 id="building-the-back-end-">Building the Back-End.</h4>
<p>Next, we are going to build an API to serve a list of posts and to collect new posts. They are serverless functions hosted on Netlify. Our API needs to do a few things:</p>
<ul>
<li>Have an endpoint to serve the list of posts: <code>/.netlify/functions/postsRead</code>.</li>
<li>Have an endpoint to collect new posts: <code>/.netlify/functions/postsCreate</code>.</li>
<li>Authenticate requests to create new posts using Auth0.</li>
</ul>
<p>To get started, we need to install a few npm packages:</p><pre><code>npm install netlify-lambda mongoose jwks-rsa jsonwebtoken dotenv</code></pre>
<p>Next step is to create a directory called <code>utils</code> in the root directory of our Gatsby App. Inside that directory is where our files that aren’t quite the API will live. One of such files is our <code>/utils/db.js</code> file:</p>
<p>In this file, we establish a connection to our MongoDB database.</p>
<p>Something missing here is our <code>.env</code> file (yes, a third one!). Mine looks something like this:</p><pre><code>DATABASE_PROD='mongodb://&lt;username&gt;:&lt;password&gt;@&lt;db_url&gt;'DATABASE_DEV='mongodb://localhost:27017/micro-blog'</code></pre>
<p>I use <a href="https://mlab.com" rel="noopener">mLab</a> to host my database online and I have <a href="https://www.mongodb.com/" rel="noopener">MongoDB</a> installed on my development machine. You can follow this <a href="https://docs.mongodb.com/v3.2/administration/install-community/" rel="noopener">guide to install MongoDB</a> on your development machine too.</p>
<p>The next file to focus on is <code>/utils/index.js</code>, this file contains some other methods we will make use of in our Netlify functions.</p>
<p>The first method <code>respondWith</code> is abstracting the logic of responding to requests that get to our Netlify functions. And the second method <code>verifyToken</code> is verifying that the tokens sent in the headers of requests are valid.</p>
<p>Finally, into the Netlify functions. Create a new directory in your application root called <code>functions</code> (or anything else you find appealing) and in that directory, create three files:</p>
<ul>
<li><code>postsCreate.js</code></li>
<li><code>postsRead.js</code></li>
<li><code>postsModel.js</code></li>
</ul>
<p>The first two files will hold our implementation for creating and reading posts while the last file will describe our Posts Database Schema.</p>
<p>Here’s what the <code>postsModel.js</code> looks like:</p>
<p>And <code>postsCreate.js</code>:</p>
<p>Lastly, <code>postsRead.js</code>:</p>
<p>Now, to run our functions locally, we first create a new script in our <code>package.json</code> file:</p><pre><code>"scripts": {// other scripts</code></pre><pre><code>"start:lambda": "NODE_ENV=development netlify-lambda serve functions"</code></pre><pre><code>}</code></pre>
<p>I use “serve functions” because the “functions” directory is where I put my Netlify functions, yours could be different.</p>
<p>After creating that script, we run it in our terminal:</p><pre><code>npm run start:lambda</code></pre>
<h4 id="deploying-the-app-"><strong>Deploying the App.</strong></h4>
<p>The last thing we will do is to deploy our app to Netlify and to do that we need to first create a file on our application root called <code>netlify.toml</code>. This file is a configuration file which Netlify will read while trying to build and deploy the app. Here’s what that file looks like:</p><pre><code>[build]  functions = "lambda"  Command = "npm run prod"</code></pre>
<p>The <code>functions = lambda</code> instructs Netlify put the built functions in a folder called “lambda”. And the <code>Command = "npm run prod"</code> specifies a script to run in order to build the entire app. This is pretty important because we need to build both our Gatsby App and our Netlify functions. Here’s what that script looks like in our <code>package.json</code>:</p><pre><code>"scripts": {</code></pre><pre><code>// previous scripts</code></pre><pre><code>"build:lambda": "netlify-lambda build functions",</code></pre><pre><code>"prod": "NODE_ENV=production npm run build; npm run build:lambda"</code></pre>
<p>Here, we first run <code>npm run build</code> which builds our Gatsby App and then run <code>npm run build:lambda</code> which builds our Netlify functions. Again, here I use “functions” because that is the name of the folder where I put my Netlify functions.</p>
<p>After doing all that, we create a new Github Repository and push our code there. <a href="https://app.netlify.com/signup" rel="noopener">Create a new Netlify account</a> if you don’t already have one. I prefer using the Github signup option in this case. When you are logged in, you click on the <strong>New site from Git </strong>button which will then take you through the process of creating a new Netlify app.</p>
<p>If during the process of creating a new Netlify app, you don’t find your repository in the list shown, be sure that you have given Netlify access to all your repositories or at least that repository in particular.</p>
<p>Before you deploy, click on the <strong>Show Advanced</strong> button and create a new variable called <code>DATABASE_PROD</code>, setting the value to what’s in your <code>.env</code> file. Remember that this file is excluded from your app in your <code>.gitignore</code> so there’s no way for your app to read this value unless you do this.</p>
<p>Also, add <code>public/</code> as the Publish directory since that is the directory where Gatsby builds and dumps the files.</p>
<p>Netlify will automatically handle deploying the Functions. After the app has been deployed, you should see the URL of your app on your dashboard.</p>
<p>And now that you have the app URL, you can update your <code>.env.production</code> file accordingly.</p>
<p>Thanks for reading!</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
