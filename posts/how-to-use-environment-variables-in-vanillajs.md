---
card: "/images/default.jpg"
tags: [JavaScript]
description: In this article, you will learn about environment variables i
author: "Milad E. Fahmy"
title: "How to Use Environment Variables in VanillaJS"
created: "2021-08-15T19:26:12+02:00"
modified: "2021-08-15T19:26:12+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-vanilla tag-nodejs ">
<header class="post-full-header">
<h1 class="post-full-title">How to Use Environment Variables in VanillaJS</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2021/05/nguy-n-phuc-6ZO3rE6OLew-unsplash.jpg 300w,
/news/content/images/size/w600/2021/05/nguy-n-phuc-6ZO3rE6OLew-unsplash.jpg 600w,
/news/content/images/size/w1000/2021/05/nguy-n-phuc-6ZO3rE6OLew-unsplash.jpg 1000w,
/news/content/images/size/w2000/2021/05/nguy-n-phuc-6ZO3rE6OLew-unsplash.jpg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2021/05/nguy-n-phuc-6ZO3rE6OLew-unsplash.jpg" alt="How to Use Environment Variables in VanillaJS">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>In this article, you will learn about environment variables in Vanilla JavaScript. You'll also learn how to serve API keys to your application through the Netlify build command.</p>
<h2 id="what-are-javascript-environment-variables">What are JavaScript environment variables?</h2>
<p>Environment variables are very common when you're using JavaScript frameworks like React or Vue for creating frontend user interfaces or NodeJS on the server side. </p>
<p>The whole point (or at least, the way I understand it) of environment variables is that they give you the flexibility to set conditions for how you want the application or software to behave in different modes – development and production.</p>
<p>You create these conditions when the UI/frontend of the software gets to interact with an API or a backend server that requires a method of authentication before providing the results of the action (like an API call). The most common method involves provisioning an API key before you can complete a request.</p>
<p>If you've tried getting data from an API before, you have to supply this API key so that the request for data can be successful. This involves adding an <code>Authorization</code> header to the API call.</p>
<p>Take a look at a typical fetch request and its authorization header below.</p><pre><code class="language-js">const apiCall = () =&gt; {
fetch(url, {
headers: {
Authorization: `bearer ${private_api_key}`
}
})
.then(res =&gt; res.json())
.then(data =&gt; console.log(data))
.catch(err =&gt; JSON.stingify(err))
}</code></pre>
<p>Environment variables store variables, as the name implies. The values or things that get assigned to these variables could be API keys that you need to perform certain requests or operations. </p>
<p>To create an environment variable, all you need to do is create a new file called .env in the root folder of the project you're working on. Then you can begin to add all the variables that you do not want to reveal to anyone. </p>
<p>The <code>.gitignore</code> file holds the list of files that Git shouldn't track, and the <code>.env</code> file will be in this file.</p>
<h2 id="how-to-use-env-files-in-vanillajs">How to Use .env Files in VanillaJS</h2>
<p>You use environment variables in the back-end of an application. Now, you're probably like "but I can create a <code>.env</code> file in a React app". </p>
<p>The truth is, you're quite right – but React has been bootstrapped in such a way that Node.js is included in it. This means that you need to use the Node package manager to perform certain operations.</p>
<p>You can also create a .env file when you're using VanillaJS, but you wouldn't be able to access the process.env global variable that Node provides at runtime. Node treats the <code>.env</code> file as an object, so it has the ability to do this: <code>process.env.env_variable</code>.</p><pre><code class="language-js">const env = {
env_variable: "bgrtyaqQtyfadV0F08BHGvfsgskl",
topic_id: "F08BHGvfsgsklgrtyaqQtyfadV0F08"
}
console.log(process.env.env_variable)
// prints bgrtyaqQtyfadV0F08BHGvfsgskl to the console</code></pre>
<p>You use VanillaJS on the client-side, so it's not really feasible to create a <code>.env</code> and use environment variables. This is because you can't use the process.env global variable Node provides (to get access to the variables created inside the <code>.env</code> file) in the browser. </p>
<p>So how then can you actually use environment variables? Hmm...especially since you can't use environment variables while writing client-side JavaScript (I mean VanillaJS). </p>
<p>The npm package called <a href="https://npmjs.org/dotenv">dotenv</a> provides one solution because it has an access to the Node global variable <code>process.env</code>.</p>
<p>Once you have the package installed, a <code>node_modules</code> it'll automatically create a folder accompanied with two files, <code>package.json</code> and <code>package-lock.json</code>. These hold the details of the application. </p>
<p>But as soon as you use it, JavaScript will throw an error saying that <code>require</code> is not defined:</p><pre><code class="language-js">require("dotenv").config()
const apiCall = () =&gt; {
fetch(url, {
headers: {
Authorization: `bearer ${process.env.env_variable}`
}
})
.then(res =&gt; res.json())
.then(data =&gt; console.log(data))
.catch(err =&gt; JSON.stingify(err))
}</code></pre>
<p>This error happens because <code>require</code> is not in the <code>node_module</code> or list of packages that'd make the <code>dotenv</code> package function. </p>
<p>In a nutshell, <code>dotenv</code> needs <code>require</code> to function. You can get <code>require</code> from <a href="https://requirejs.org/">RequireJS</a>, but that's another hassle there. You would have to read through the docs on how to apply the scripts that would make Node's global variable available on the client-side.</p>
<h2 id="why-go-through-all-that-hassle">Why go through all that hassle?</h2>
<p>Really. Why?</p>
<p>Folks typically use public APIs either for a personal project or to mess around with some concepts that they haven't quite gotten the hang of. </p>
<p>Most times, these APIs do not require the use of private (API) keys for one authentication or the other. This is common when you're dealing with endpoints that allow only the <code>GET</code> method of fetching data.</p>
<p>APIs like GitHub's or Twitter's require the use of api_keys to authenticate the user before they allow the request to go through. The GitHub GraphQL API, for instance, requires an access token for a successful API call. But the access token has some quirks, one of which is the ability to perform 5000 requests in an hour. </p>
<p>You can never commit this access token into the Git workflow of your project. If you do commit it, GitHub will delete it for security reasons. This is where it becomes an issue that VanillaJS can't hold environment variables. </p>
<p>The access token provided by GitHub (that eventually gets deleted once it is committed into the workflow) will not allow the application to function in <code>production</code> mode. It'd work perfectly fine in <code>development</code> – but once it is deleted, and the repository/project is deployed to Netlify, then Netlify can't access the keys again.</p>
<h2 id="how-do-you-resolve-this-issue">How do you resolve this issue?</h2>
<p>Netlify has a "build and deploy" settings tab. This allows you to alter how the continuous deployment process takes place with your projects or repositories on GitHub. </p>
<p>You can decide to stop all the concurrent automatic builds once Netlify detects a push to the <code>master</code> or <code>main</code> branch, deactivate all builds until the project is done completely on development mode, and many more features that I can't remember.</p>
<p>But, that's not the focus of this article. What we're concerned about is how to use the GitHub access token locally (by ensuring that it doesn't get into the commit history) and then allow Netlify to have access to it, in <code>production</code>.</p>
<p>The image below shows the "build and deploy" tab on Netlify.<br> </p>
<p>Notice the build command input field? Using the code snippet below:</p><pre><code class="language-bash">cd js &amp;&amp; echo -e "const TOKEN = 'api-token';\n\nexport default TOKEN;" &gt; config.js</code></pre>
<p>the command above will simply inject a new file called, <code>config.js</code> inside the <code>js</code> folder during the build process. This gives Netlify access to your API key (access token). </p>
<p>If there is no <code>js</code> folder in your project, that is you have all files in the root folder of the project, you can simply add <code>echo -e "const TOKEN = 'api-token';\n\nexport default TOKEN;" &gt; config.js</code> as the build command.</p><pre><code class="language-js">const TOKEN = 'api-token';
export default TOKEN;</code></pre>
<p>To make sure you're able to use the ES6 <code>import</code> statement in the JavaScript file, you need to add the <code>type="module"</code> attribute in the script tag</p><pre><code class="language-html">&lt;script src="./index.js" type="module"&gt;&lt;/script&gt;</code></pre>
<h2 id="conclusion">Conclusion</h2>
<p>This might not seem like the best practice or method for using environment variables. This is because your API key might still be visible to anyone who views or visits your app on the internet when they open the devtools on their favourite browser. </p>
<p>But it helped me bypass the issue of GitHub deleting these keys which will in turn stop the application from working in <code>production</code>. </p>
<p>You should only consider this method when you're using an API that, when your API key is revealed, won't cause much harm when it is used by a third party.</p>
<p>Thank you for reading this article. I hope it helps. ;)<br></p>
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
