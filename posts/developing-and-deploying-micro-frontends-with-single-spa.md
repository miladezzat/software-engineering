---
card: "/images/default.jpg"
tags: [Front End Development]
description: "Micro-frontends are the future of front end web development."
author: "Milad E. Fahmy"
title: "How to Develop and Deploy Micro-Frontends with Single-SPA"
created: "2021-08-16T10:04:48+02:00"
modified: "2021-08-16T10:04:48+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-front-end-development tag-heroku tag-travis-ci tag-architecture tag-javascript tag-web-development tag-react tag-aws ">
<header class="post-full-header">
<h1 class="post-full-title">How to Develop and Deploy Micro-Frontends with Single-SPA</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/07/single-spa-3.jpg 300w,
/news/content/images/size/w600/2020/07/single-spa-3.jpg 600w,
/news/content/images/size/w1000/2020/07/single-spa-3.jpg 1000w,
/news/content/images/size/w2000/2020/07/single-spa-3.jpg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/07/single-spa-3.jpg" alt="How to Develop and Deploy Micro-Frontends with Single-SPA">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
cd single-spa-demo
mkdir single-spa-demo-root-config
cd single-spa-demo-root-config
npx create-single-spa</code></pre><p>We’ll then follow the CLI prompts:</p><ol><li>Select “single spa root config”</li><li>Select “yarn” or “npm” (I chose “yarn”)</li><li>Enter an organization name (I used “thawkin3,” but it can be whatever you want)</li></ol><p>Great! Now, if you check out the <code>single-spa-demo-root-config</code> directory, you should see a skeleton root config app. We'll customize this in a bit, but first let's also use the CLI tool to create our other three micro-frontend apps.</p><h1 id="creating-the-micro-frontend-apps">Creating the Micro-Frontend Apps</h1><p>To generate our first micro-frontend app, the navbar, we’ll follow these steps:</p><pre><code class="language-bash">cd ..
mkdir single-spa-demo-nav
cd single-spa-demo-nav
npx create-single-spa</code></pre><p>We’ll then follow the CLI prompts:</p><ol><li>Select “single-spa application / parcel”</li><li>Select “react”</li><li>Select “yarn” or “npm” (I chose “yarn”)</li><li>Enter an organization name, the same one you used when creating the root config app (“thawkin3” in my case)</li><li>Enter a project name (I used “single-spa-demo-nav”)</li></ol><p>Now that we’ve created the navbar app, we can follow these same steps to create our two page apps. But, we’ll replace each place we see “single-spa-demo-nav” with “single-spa-demo-page-1” the first time through and then with “single-spa-demo-page-2” the second time through.</p><p>At this point we’ve generated all four apps that we need: one container app and three micro-frontend apps. Now it’s time to hook our apps together.</p><h1 id="registering-the-micro-frontend-apps-with-the-container-app">Registering the Micro-Frontend Apps with the Container App</h1><p>As stated before, one of the container app’s primary responsibilities is to coordinate when each app is “active” or not. In other words, it handles when each app should be shown or hidden. </p><p>To help the container app understand when each app should be shown, we provide it with what are called “activity functions.” Each app has an activity function that simply returns a boolean, true or false, for whether or not the app is currently active.</p><p>Inside the <code>single-spa-demo-root-config</code> directory, in the <code>activity-functions.js</code> file, we'll write the following activity functions for our three micro-frontend apps.</p><pre><code class="language-javascript">export function prefix(location, ...prefixes) {
return prefixes.some(
prefix =&gt; location.href.indexOf(`${location.origin}/${prefix}`) !== -1
);
}
export function nav() {
// The nav is always active
return true;
}
export function page1(location) {
return prefix(location, 'page1');
}
export function page2(location) {
return prefix(location, 'page2');
}</code></pre><p>Next, we need to register our three micro-frontend apps with single-spa. To do that, we use the <code>registerApplication</code> function. This function accepts a minimum of three arguments: the app name, a method to load the app, and an activity function to determine when the app is active.</p><p>Inside the <code>single-spa-demo-root-config</code> directory, in the <code>root-config.js</code> file, we'll add the following code to register our apps:</p><pre><code class="language-javascript">import { registerApplication, start } from "single-spa";
import * as isActive from "./activity-functions";
registerApplication(
"@thawkin3/single-spa-demo-nav",
() =&gt; System.import("@thawkin3/single-spa-demo-nav"),
isActive.nav
);
registerApplication(
"@thawkin3/single-spa-demo-page-1",
() =&gt; System.import("@thawkin3/single-spa-demo-page-1"),
isActive.page1
);
registerApplication(
"@thawkin3/single-spa-demo-page-2",
() =&gt; System.import("@thawkin3/single-spa-demo-page-2"),
isActive.page2
);
start();</code></pre><p>Now that we’ve set up the activity functions and registered our apps, the last step before we can get this running locally is to update the local import map inside the <code>index.ejs</code> file in the same directory. </p><p>We'll add the following code inside the <code>head</code> tag to specify where each app can be found when running locally:</p><pre><code class="language-javascript">&lt;% if (isLocal) { %&gt;
&lt;script type="systemjs-importmap"&gt;
{
"imports": {
"@thawkin3/root-config": "http://localhost:9000/root-config.js",
"@thawkin3/single-spa-demo-nav": "http://localhost:9001/thawkin3-single-spa-demo-nav.js",
"@thawkin3/single-spa-demo-page-1": "http://localhost:9002/thawkin3-single-spa-demo-page-1.js",
"@thawkin3/single-spa-demo-page-2": "http://localhost:9003/thawkin3-single-spa-demo-page-2.js"
}
}
&lt;/script&gt;
&lt;main&gt;
&lt;div id="page-1-container"&gt;&lt;/div&gt;
&lt;div id="page-2-container"&gt;&lt;/div&gt;
&lt;/main&gt;</code></pre><p>Then, in our <code>root-config.js</code> file where we've registered our apps, let's provide a fourth argument to each function call that includes the DOM element where we'd like to mount each app:</p><pre><code class="language-javascript">import { registerApplication, start } from "single-spa";
import * as isActive from "./activity-functions";
registerApplication(
"@thawkin3/single-spa-demo-nav",
() =&gt; System.import("@thawkin3/single-spa-demo-nav"),
isActive.nav,
{ domElement: document.getElementById('nav-container') }
);
registerApplication(
"@thawkin3/single-spa-demo-page-1",
() =&gt; System.import("@thawkin3/single-spa-demo-page-1"),
isActive.page1,
{ domElement: document.getElementById('page-1-container') }
);
registerApplication(
"@thawkin3/single-spa-demo-page-2",
() =&gt; System.import("@thawkin3/single-spa-demo-page-2"),
isActive.page2,
{ domElement: document.getElementById('page-2-container') }
);
start();</code></pre><p>Now, the apps will always be mounted to a specific and predictable location. Nice!</p><h3 id="styling-the-app">Styling the App</h3><p>Next, let’s style up our app a bit. Plain black text on a white background isn’t very interesting to look at.</p><p>In the <code>single-spa-demo-root-config</code> directory, in the <code>index.ejs</code> file again, we can add some basic styles for the whole app by pasting the following CSS at the bottom of the <code>head</code> tag:</p><pre><code class="language-HTML">&lt;style&gt;
body, html { margin: 0; padding: 0; font-size: 16px; font-family: Arial, Helvetica, sans-serif; height: 100%; }
body { display: flex; flex-direction: column; }
* { box-sizing: border-box; }
&lt;/style&gt;</code></pre><p>Next, we can style our navbar app by finding the <code>single-spa-demo-nav</code> directory, creating a <code>root.component.css</code> file, and adding the following CSS:</p><pre><code class="language-CSS">.nav {
display: flex;
flex-direction: row;
padding: 20px;
background: #000;
color: #fff;
}
.link {
margin-right: 20px;
color: #fff;
text-decoration: none;
}
.link:hover,
.link:focus {
color: #1098f7;
}</code></pre><p>We can then update the <code>root.component.js</code> file in the same directory to import the CSS file and apply those classes and styles to our HTML. We'll also change the navbar content to actually contain two links so we can navigate around the app by clicking the links instead of entering a new URL in the browser's address bar.</p><pre><code class="language-javascript">import React from "react";
import "./root.component.css";
export default function Root() {
return (
&lt;nav className="nav"&gt;
&lt;a href="/page1" className="link"&gt;
Page 1
&lt;/a&gt;
&lt;a href="/page2" className="link"&gt;
Page 2
&lt;/a&gt;
&lt;/nav&gt;
);
}</code></pre><p>We’ll follow a similar process for the page 1 and page 2 apps as well. We’ll create a <code>root.component.css</code> file for each app in their respective project directories and update the <code>root.component.js</code> files for both apps too.</p><p>For the page 1 app, the changes look like this:</p><pre><code class="language-CSS">.container1 {
background: #1098f7;
color: white;
padding: 20px;
display: flex;
align-items: center;
justify-content: center;
flex: 1;
font-size: 3rem;
}</code></pre><pre><code class="language-javascript">import React from "react";
import "./root.component.css";
export default function Root() {
return (
&lt;div className="container1"&gt;
&lt;p&gt;Page 1 App&lt;/p&gt;
&lt;/div&gt;
);
}</code></pre><p>And for the page 2 app, the changes look like this:</p><pre><code class="language-CSS">.container2 {
background: #9e4770;
color: white;
padding: 20px;
display: flex;
align-items: center;
justify-content: center;
flex: 1;
font-size: 3rem;
}</code></pre><pre><code class="language-javascript">import React from "react";
import "./root.component.css";
export default function Root() {
return (
&lt;div className="container2"&gt;
&lt;p&gt;Page 2 App&lt;/p&gt;
&lt;/div&gt;
);
}</code></pre><h3 id="adding-react-router">Adding React Router</h3><p>The last small change we’ll make is to add <a href="https://reacttraining.com/react-router/" rel="noopener nofollow">React Router</a> to our app. Right now the two links we’ve placed in the navbar are just normal anchor tags, so navigating from page to page causes a page refresh. Our app will feel much smoother if the navigation is handled client-side with React Router.</p><p>To use React Router, we’ll first need to install it. From the terminal, in the <code>single-spa-demo-nav</code> directory, we'll install React Router using yarn by entering <code>yarn add react-router-dom</code>. (Or if you're using npm, you can enter <code>npm install react-router-dom</code>.)</p><p>Then, in the <code>single-spa-demo-nav</code> directory in the <code>root.component.js</code> file, we'll replace our anchor tags with React Router's <code>Link</code> components like so:</p><pre><code class="language-javascript">import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import "./root.component.css";
export default function Root() {
return (
&lt;BrowserRouter&gt;
&lt;nav className="nav"&gt;
&lt;Link to="/page1" className="link"&gt;
Page 1
&lt;/Link&gt;
&lt;Link to="/page2" className="link"&gt;
Page 2
&lt;/Link&gt;
&lt;/nav&gt;
&lt;/BrowserRouter&gt;
);
&lt;CORSRule&gt;
&lt;AllowedOrigin&gt;*&lt;/AllowedOrigin&gt;
&lt;AllowedMethod&gt;GET&lt;/AllowedMethod&gt;
&lt;/CORSRule&gt;
node_js:
- node
script:
- yarn build
- echo "Commit sha - $TRAVIS_COMMIT"
- mkdir -p dist/@thawkin3/root-config/$TRAVIS_COMMIT
- mv dist/*.* dist/@thawkin3/root-config/$TRAVIS_COMMIT/
deploy:
provider: s3
access_key_id: "$AWS_ACCESS_KEY_ID"
secret_access_key: "$AWS_SECRET_ACCESS_KEY"
bucket: "single-spa-demo"
region: "us-west-2"
cache-control: "max-age=31536000"
acl: "public_read"
local_dir: dist
skip_cleanup: true
on:
</code></pre><p>Opening up that URL in the browser reveals an import map that looks like this:</p><pre><code class="language-JSON">{
"imports": {
"react": "https://cdn.jsdelivr.net/npm/react@16.13.1/umd/react.production.min.js",
"react-dom": "https://cdn.jsdelivr.net/npm/react-dom@16.13.1/umd/react-dom.production.min.js",
"single-spa": "https://cdn.jsdelivr.net/npm/single-spa@5.5.3/lib/system/single-spa.min.js",
"@react-mf/root-config": "https://react.microfrontends.app/root-config/e129469347bb89b7ff74bcbebb53cc0bb4f5e27f/react-mf-root-config.js",
"@react-mf/navbar": "https://react.microfrontends.app/navbar/631442f229de2401a1e7c7835dc7a56f7db606ea/react-mf-navbar.js",
"@react-mf/styleguide": "https://react.microfrontends.app/styleguide/f965d7d74e99f032c27ba464e55051ae519b05dd/react-mf-styleguide.js",
"@react-mf/people": "https://react.microfrontends.app/people/dd205282fbd60b09bb3a937180291f56e300d9db/react-mf-people.js",
"@react-mf/api": "https://react.microfrontends.app/api/2966a1ca7799753466b7f4834ed6b4f2283123c5/react-mf-api.js",
"@react-mf/planets": "https://react.microfrontends.app/planets/5f7fc62b71baeb7a0724d4d214565faedffd8f61/react-mf-planets.js",
"@react-mf/things": "https://react.microfrontends.app/things/7f209a1ed9ac9690835c57a3a8eb59c17114bb1d/react-mf-things.js",
"rxjs": "https://cdn.jsdelivr.net/npm/@esm-bundle/rxjs@6.5.5/system/rxjs.min.js",
"rxjs/operators": "https://cdn.jsdelivr.net/npm/@esm-bundle/rxjs@6.5.5/system/rxjs-operators.min.js"
}
}</code></pre><p>That import map was the default one provided as an example when we used the CLI to generate our container app. What we need to do now is replace this example import map with an import map that actually references the bundles we’re using.</p><p>So, using the original import map as a template, we can create a new file called <code>importmap.json</code>, place it <em><em>outside of our repos</em></em> and add JSON that looks like this:</p><pre><code class="language-JSON">{
"imports": {
"react": "https://cdn.jsdelivr.net/npm/react@16.13.0/umd/react.production.min.js",
"react-dom": "https://cdn.jsdelivr.net/npm/react-dom@16.13.0/umd/react-dom.production.min.js",
"single-spa": "https://cdn.jsdelivr.net/npm/single-spa@5.5.1/lib/system/single-spa.min.js",
"@thawkin3/root-config": "https://single-spa-demo.s3-us-west-2.amazonaws.com/%40thawkin3/root-config/179ba4f2ce4d517bf461bee986d1026c34967141/root-config.js",
"@thawkin3/single-spa-demo-nav": "https://single-spa-demo.s3-us-west-2.amazonaws.com/%40thawkin3/single-spa-demo-nav/f0e9d35392ea0da8385f6cd490d6c06577809f16/thawkin3-single-spa-demo-nav.js",
"@thawkin3/single-spa-demo-page-1": "https://single-spa-demo.s3-us-west-2.amazonaws.com/%40thawkin3/single-spa-demo-page-1/4fd417ee3faf575fcc29d17d874e52c15e6f0780/thawkin3-single-spa-demo-page-1.js",
"@thawkin3/single-spa-demo-page-2": "https://single-spa-demo.s3-us-west-2.amazonaws.com/%40thawkin3/single-spa-demo-page-2/8c58a825c1552aab823bcbd5bdd13faf2bd4f9dc/thawkin3-single-spa-demo-page-2.js"
}
</code></pre><h1 id="creating-a-production-server">Creating a Production Server</h1><p>We are getting closer to having something up and running in production! We’re going to host this demo on Heroku, so in order to do that, we’ll need to create a simple Node.js and <a href="https://expressjs.com/" rel="noopener nofollow">Express</a> server to serve our file.</p><p>First, in the <code>single-spa-demo-root-config</code> directory, we'll install express by running <code>yarn add express</code> (or <code>npm install express</code>). Next, we'll add a file called <code>server.js</code> that contains a small amount of code for starting up an express server and serving our main <code>index.html</code> file.</p><pre><code class="language-javascript">const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 5000;
express()
.use(express.static(path.join(__dirname, "dist")))
.get("*", (req, res) =&gt; {
res.sendFile("index.html", { root: "dist" });
})
.listen(PORT, () =&gt; console.log(`Listening on ${PORT}`));</code></pre><p>Finally, we’ll update the NPM scripts in our <code>package.json</code> file to differentiate between running the server in development mode and running the server in production mode.</p><pre><code class="language-JSON">"scripts": {
"build": "webpack --mode=production",
"lint": "eslint src",
"prettier": "prettier --write './**'",
"start:dev": "webpack-dev-server --mode=development --port 9000 --env.isLocal=true",
"start": "node server.js",
"test": "jest"
node_js:
- node
env:
global:
# include $HOME/.local/bin for `aws`
- PATH=$HOME/.local/bin:$PATH
before_install:
- pyenv global 3.7.1
- pip install -U pip
- pip install awscli
script:
- yarn build
- echo "Commit sha - $TRAVIS_COMMIT"
- mkdir -p dist/@thawkin3/root-config/$TRAVIS_COMMIT
- mv dist/*.* dist/@thawkin3/root-config/$TRAVIS_COMMIT/
deploy:
provider: s3
access_key_id: "$AWS_ACCESS_KEY_ID"
secret_access_key: "$AWS_SECRET_ACCESS_KEY"
bucket: "single-spa-demo"
region: "us-west-2"
cache-control: "max-age=31536000"
acl: "public_read"
local_dir: dist
skip_cleanup: true
on:
branch: master
after_deploy:
- chmod +x after_deploy.sh
- "./after_deploy.sh"</code></pre><p>The main changes here are adding a global environment variable, installing the AWS CLI, and adding an <code>after_deploy</code> script as part of the pipeline. This references an <code>after_deploy.sh</code> file that we need to create. The contents will be:</p><pre><code class="language-sh">echo "Downloading import map from S3"
aws s3 cp s3://single-spa-demo/@thawkin3/importmap.json importmap.json
echo "Updating import map to point to new version of @thawkin3/root-config"
node update-importmap.mjs
echo "Uploading new import map to S3"
aws s3 cp importmap.json s3://single-spa-demo/@thawkin3/importmap.json --cache-control 'public, must-revalidate, max-age=0' --acl 'public-read'
echo "Deployment successful"</code></pre><p>This file downloads the existing import map from S3, modifies it to reference the new build artifact, and then re-uploads the updated import map to S3. To handle the actual updating of the import map file’s contents, we use a custom script that we’ll add in a file called <code>update-importmap.mjs.</code></p><pre><code class="language-javascript">// Note that this file requires node@13.2.0 or higher (or the --experimental-modules flag)
import fs from "fs";
import path from "path";
import https from "https";
const importMapFilePath = path.resolve(process.cwd(), "importmap.json");
const importMap = JSON.parse(fs.readFileSync(importMapFilePath));
const url = `https://single-spa-demo.s3-us-west-2.amazonaws.com/%40thawkin3/root-config/${process.env.TRAVIS_COMMIT}/root-config.js`;
https
.get(url, res =&gt; {
// HTTP redirects (301, 302, etc) not currently supported, but could be added
if (res.statusCode &gt;= 200 &amp;&amp; res.statusCode &lt; 300) {
if (
res.headers["content-type"] &amp;&amp;
res.headers["content-type"].toLowerCase().trim() ===
"application/javascript"
) {
const moduleName = `@thawkin3/root-config`;
importMap.imports[moduleName] = url;
fs.writeFileSync(importMapFilePath, JSON.stringify(importMap, null, 2));
console.log(
`Updated import map for module ${moduleName}. New url is ${url}.`
);
} else {
urlNotDownloadable(
url,
Error(`Content-Type response header must be application/javascript`)
);
}
} else {
urlNotDownloadable(
url,
Error(`HTTP response status was ${res.statusCode}`)
);
}
})
.on("error", err =&gt; {
urlNotDownloadable(url, err);
});
function urlNotDownloadable(url, err) {
throw Error(
`Refusing to update import map - could not download javascript file at url ${url}. Error was '${err.message}'`
);
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
