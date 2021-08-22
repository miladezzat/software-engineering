---
card: "/images/default.jpg"
tags: [JavaScript]
description: "Update: Apparently you can get there from here! That is, if"
author: "Milad E. Fahmy"
title: "You can't get there from here: how Netlify Lambda and Firebase led me to a serverless dead end"
created: "2021-08-15T19:32:26+02:00"
modified: "2021-08-15T19:32:26+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-aws-lambda tag-netlify tag-firebase ">
<header class="post-full-header">
<h1 class="post-full-title">You can't get there from here: how Netlify Lambda and Firebase led me to a serverless dead end</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2019/10/randy-laybourne-Ens_NuuHVO4-unsplash.jpg 300w,
/news/content/images/size/w600/2019/10/randy-laybourne-Ens_NuuHVO4-unsplash.jpg 600w,
/news/content/images/size/w1000/2019/10/randy-laybourne-Ens_NuuHVO4-unsplash.jpg 1000w,
/news/content/images/size/w2000/2019/10/randy-laybourne-Ens_NuuHVO4-unsplash.jpg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2019/10/randy-laybourne-Ens_NuuHVO4-unsplash.jpg" alt="You can't get there from here: how Netlify Lambda and Firebase led me to a serverless dead end">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>[<strong>Update: </strong>Apparently you <em><strong>can</strong></em> get there from here! That is, if you use <code>firebase-admin</code> instead of <code>@google-cloud/firestore</code>. &nbsp;I'll have more on this in the future, but the gist of it is summarized <a href="https://github.com/arjunyel/firestore-apollo-graphql#graphql">here</a>.]</p>
<p><a href="/news/how-to-use-faunadb/">A while back</a> I was exploring <a href="https://www.netlify.com/blog/2019/09/10/announcing-the-faunadb-add-on-for-netlify/">Netlify's support for FaunaDB</a>: a NoSQL document-oriented database with some special features to <a href="https://fauna.com/blog/consistency-without-clocks-faunadb-transaction-protocol">handle transactions across dispersed database servers</a>. I decided to try it because it was a convenient choice, since there was <a href="https://github.com/netlify/netlify-faunadb-example">example code</a> I could start with. The example used <a href="https://docs.netlify.com/functions/overview/">lambda functions</a> as a frontend to the database.</p>
<p>I modified the original lambda functions to talk to the FaunaDB GraphQL API (instead of <a href="https://docs.fauna.com/fauna/current/api/fql/">FQL</a>). While <a href="/news/how-to-use-faunadb/">that worked</a>, in the end I felt Fauna's GraphQL support wasn't quite ripe yet, so I looked around for alternatives.</p>
<p>Eventually I settled on <a href="https://firebase.google.com/docs/firestore/rtdb-vs-firestore">Cloud Firestore</a>. I based this new project on the Fauna example, swapping out the <strong>faunadb</strong> module with <a href="https://www.npmjs.com/package/apollo-server-lambda">apollo-server-lambda</a>, so that I could write my own GraphQL API and resolvers. </p>
<p>One of the refinements <a href="https://github.com/netlify/netlify-lambda/issues/112">I had to make</a> was to push all my Netlify Function dependencies down to the /functions folder in my project (separate and at the same level as the /src folder that contains my React client). To do this, I ran <code>npm init</code> while inside the functions folder, moved a set of dependencies from the top-level package.json to the new /functions/package.json, added a <a href="https://github.com/netlify/netlify-lambda/issues/112#issuecomment-488644361">webpack.functions.js</a>, then ran <code>yarn install</code> to pull the packages into a new node_modules folder. </p>
<p>The result was this:</p>
<p>I'll talk about the subfolders later; the main thing to notice is that there's yarn files, plus package.json, a node_modules folder, a schema folder, and some .js files for testing.</p>
<p>The original project used <a href="https://github.com/netlify/netlify-lambda">netlify_lambda</a> to build, which uses webpack and babel. I ran into <a href="https://github.com/netlify/netlify-lambda/issues/183">some issues</a>, fixed them, then ran into them again later. </p>
<p>Frustrated, I decided to forego netlify-lambda and chose <a href="https://www.netlify.com/products/dev/">Netlify Dev</a> to build and deploy from the command line. The drawback was that I didn't have the ability to launch a local server, but I could deploy candidates to Netlify and test them without first checking source into github or deploying directly to production. </p>
<p>There were less moving parts since webpack and babel were no longer needed. When going this route, you probably set the environment variable <strong>AWS_LAMBDA_JS_RUNTIME</strong> to <strong>nodejs10.x</strong> in the <em>Build &amp; deploy</em> settings for your functions.</p>
<h1 id="things-are-not-always-as-they-seem">Things are not always as they seem</h1>
<p>More familiar with GraphQL clients and servers than with lambda functions in the cloud, I had some naive assumptions about how things got deployed in Netlify. I thought functions were more or less copied over and build scripts run on the server, where all would be happy and my functions would be callable via URLs. </p>
<p>This is not at all what happens.</p>
<p>When I started with netlify_lambda, it would use webpack to create a functions_build output file. My netlify.toml configuration had that as the <strong>functions</strong> location.</p><pre><code>[build]
functions = "functions-build"
# This will be run the site build
command = "yarn build"
# This is the directory is publishing to netlify's CDN
publish = "build"
</code></pre>
<p>When I switch to using <a href="https://www.netlify.com/products/dev/">Netlify Dev</a>, I dispensed with the output folder and just deployed the "unbundled" /<strong>functions</strong> source. That's not the end of the story, though.</p>
<h1 id="authentication-woes">Authentication woes</h1>
<p>In the FaunaDB project, authentication was through an environment variable whose value was a simple token. A similar mechanism is used by Firebase, but instead of a token, the variable value is a path to a credentials file that you generate through the FireBase console. The lambda functions create a Firebase instance, and that instance looks for the env variable to locate the credentials file for authentication.</p>
<p>It seems like no matter where I put that credentials file or what path I used, the Firebase client would fail to find it. In the course of my research I came across a mention of Netlify's <a href="https://github.com/netlify/zip-it-and-ship-it">zip-it-and-ship-it</a> utility, which other people with other problems recommended for bundling up functions in zip files.</p>
<p>I tried it, modifying the build process to call a NodeJS script that zipped up my functions to a <strong>functions-dist</strong> folder (changing the <strong>netlify.toml</strong> config to no point to that instead of the <strong>functions</strong> source folder). Although it didn't immediately fix my issues with the credentials file, I noticed some things.</p>
<p>I began to realize that as each lambda function .js file was bundled up into a zip file, it also contained its own <strong>node_modules</strong> folder. What's more, the node_modules folder was "customized" to contain only those dependencies explicitly required by each function.</p>
<h2 id="clever-but-not-clever-enough">Clever, but not clever enough</h2>
<p>It took some thinking, but I decided that if I added my .json file in a local project, then made it a dependency to each lambda function, it would be pulled in the node_modules folder. At that point, I would have a path:<em> </em><strong>./creds/mycred.json</strong>. Yay!</p>
<p>It didn't quite work--when I examined the zip files, the credential files were there in each zip archive, but the Firebase client still couldn't get to them. </p>
<p>I confessed my utter failure on the Netlify support forum, saying that I planned to join a commune to learn to weave <a href="https://www.twinoakshammocks.com/">hammocks</a>.</p>
<h1 id="help-">Help!</h1>
<figcaption>Photo by <a href="https://unsplash.com/@jonnysplsh?utm_source=ghost&amp;utm_medium=referral&amp;utm_campaign=api-credit">Jonny Caspari</a> / <a href="https://unsplash.com/?utm_source=ghost&amp;utm_medium=referral&amp;utm_campaign=api-credit">Unsplash</a></figcaption>
</figure>
<p>I must have evoked some pity, as Dennis from Netlify soon responded and let me know that lambda functions cannot actually access the file system. What I was attempting (loading credentials via a file path) was impossible. He suggested importing the file into each lambda .js (which I had already done). It doesn't appear, though, that the Firebase client allows you to pull in credentials via an import.</p>
<p>That aside, Dennis sort of hinted that perhaps this isn't really the approach I should take, anyway. He had a point. The only reason I went this route was because I was following one of Netlify's examples, but swapping out the <strong>faunadb</strong> package with <strong>apollo-server-lambda</strong> <em>might</em> just have added a lot more weight to the lambda functions; if so, it would likely have an affect on spin-up times during <a href="https://hackernoon.com/im-afraid-you-re-thinking-about-aws-lambda-cold-starts-all-wrong-7d907f278a4f">cold starts</a>.</p>
<h1 id="ditching-lambda-functions">Ditching lambda functions</h1>
<p>Lambda functions are <a href="https://hackernoon.com/developer-challenges-of-serverless-and-aws-lambda-8b8d5e299a34">not a solution for everything</a>. In my case, I only wanted a simple datastore with a GraphQL frontend, without exposing the GraphQL queries in the browser console. </p>
<p>I can achieve the same ends by having a Node process host both a React client and a GraphQL server. I'm (almost) certain I won't run into any file system access problems, and if so, I'll switch to<a href="https://cloud.google.com/docs/authentication/production"> another method of authentication</a>.</p>
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
