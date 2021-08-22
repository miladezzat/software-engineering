---
card: "/images/default.jpg"
tags: [Jamstack]
description: According to Mathias Biilmann, the CEO & Co-founder of Netlif
author: "Milad E. Fahmy"
title: "How to Create an Image Gallery Using Gatsby and Cloudinary"
created: "2021-08-15T19:28:18+02:00"
modified: "2021-08-15T19:28:18+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-jamstack tag-gatsby tag-javascript tag-react ">
<header class="post-full-header">
<h1 class="post-full-title">How to Create an Image Gallery Using Gatsby and Cloudinary</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/10/cover_1.png 300w,
/news/content/images/size/w600/2020/10/cover_1.png 600w,
/news/content/images/size/w1000/2020/10/cover_1.png 1000w,
/news/content/images/size/w2000/2020/10/cover_1.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/10/cover_1.png" alt="How to Create an Image Gallery Using Gatsby and Cloudinary">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>According to Mathias Biilmann, the CEO &amp; Co-founder of Netlify,"The <code>JAMstack</code> is a modern web development architecture based on client-side JavaScript, reusable APIs, and prebuilt Markup."</p>
<p>The key aspects of a <a href="https://blog.greenroots.info/jamstack-for-all-an-introduction-cke2fxc5800jvabs15lhn4a9x">JAMstack</a> application are the following:</p>
<ul>
<li>The entire app runs on a <strong><strong>CDN (or ADN)</strong></strong>. CDN stands for Content Delivery Network and an ADN is an Application Delivery Network.</li>
<li>Everything is in <strong><strong>Git</strong></strong>.</li>
<li><strong><strong>Automated builds</strong></strong> run with a workflow when developers push the code.</li>
<li>There's <strong><strong>Automatic deployment</strong></strong> of the pre-built markup to the CDN/ADN.</li>
<li>It's practically <strong><strong>Serverless</strong></strong>. To put it more clearly, we do not maintain any server-side applications but rather make use of already existing services (like email, media, database, search, and so on).</li>
</ul>
<p>And here's a fun fact: Many of the features that once required a custom back-end can now be done entirely on the front-end.</p>
<p>In this article, we will learn how to build a <a href="https://blog.greenroots.info/jamstack-for-all-an-introduction-cke2fxc5800jvabs15lhn4a9x">JAMstack</a> application that has:</p>
<ul>
<li>an API service to serve media files,</li>
<li>and a <a href="https://blog.greenroots.info/what-is-a-static-site-generator-and-how-to-select-one-cke9xtx5g006p58s11dzg2j16">Static Site Generator(SSG)</a> to create the pre-built markup.</li>
</ul>
<p>And finally we'll deploy it over a CDN.</p>
<h2 id="so-what-are-we-building-today"><strong>So, what are we building today?</strong></h2>
<p>We will build an image gallery. I love movies, so I have decided to create an image gallery of my favorite actors. I have a fun name for it to: <code>imaginary</code>.</p>
<p>We will use a media management service called <a href="https://cloudinary.com/">Cloudinary</a> to host and manage our images. It also provides developer APIs to upload and fetch media such as images, videos, and so on</p>
<p>We will use a framework called <a href="https://www.gatsbyjs.com/">Gatsby</a> to build the front-end of the image gallery. <code>Gatsby</code> is a React-based open-source framework for creating websites and apps.</p>
<p>Finally, we will learn how to deploy the app to a CDN with an automatic build and deploy process. We will use <a href="https://www.netlify.com/">Netlify CDN</a> for this.</p>
<p>At the end of the article, our <code>imaginary</code> app will look like this:</p>
<figcaption>Image Gallery app - Final Look</figcaption>
</figure>
<h2 id="tl-dr"><strong>TL;DR</strong></h2>
<p>We will learn things with a step-by-step approach in this article. If you want to jump into the source code or demonstration sooner, here are links to them.</p>
<ul>
<li>You can access the image gallery demo from here: <a href="http://imaginary.netlify.app/">http://imaginary.netlify.app/</a></li>
<li>All the source code used in this article is in my GitHub repo. Feel free to follow it, as I keep updating the source code frequently. If you liked the work, please support it with a star. <a href="https://github.com/atapas/imaginary/tree/1-freecodecamp-poc">https://github.com/atapas/imaginary/tree/1-freecodecamp-poc</a></li>
</ul>
<p>Now let's get started.</p>
<h2 id="how-to-set-up-cloudinary"><strong>How to Set Up Cloudinary</strong></h2>
<p>First, <a href="https://cloudinary.com/users/register/free">create an account</a> with <code>Cloudinary</code>. A free plan is more than enough for our image gallery application.</p>
<p>Login using your account credentials to get to the <code>Cloudinary</code> dashboard. Please note down the <code>Cloud name</code>, <code>API Key</code> and, <code>API Secret</code> as we'll need them in our application.</p>
<p>Next, upload the images of your choice to use them in the <code>image gallery</code>. You can create a folder and call it whatever you want. In my case, I have named it <code>artists</code> and uploaded the images into it.</p>
<p>Note that we'll use this folder name later when we integrate <code>Cloudinary</code> with <code>Gatsby</code>.</p>
<p>Please select each of the images and add a <code>Title</code> and <code>Description</code>. We will use these two bits of meta information as image captions and alt-text, respectively, in our image gallery.</p>
<p>That's all. Please do not share the API secret and the key with anyone. Let's now go through the required setup for <code>Gatsby</code>.</p>
<h2 id="how-to-set-up-gatsby"><strong>How to Set Up Gatsby</strong></h2>
<p>A <code>gatsby</code>-based project needs <code>node.js</code> to work. Make sure you have Node.js installed. You can download and install <code>node.js</code> from <a href="https://nodejs.org/en/download/">here</a>.</p>
<p>A successful install will show the Node version using this command:</p><pre><code class="language-shell">node -v</code></pre>
<h3 id="create-a-project-directory"><strong>Create a project directory</strong></h3>
<p>Create a project directory to organize the source code. Let's create a directory with the name <code>imaginary</code>.</p><pre><code class="language-shell">mkdir imaginary
cd imaginary</code></pre>
<h3 id="initialize-the-project"><strong>Initialize the project</strong></h3>
<p>There are plenty of <a href="https://www.gatsbyjs.com/starters/">starter projects</a> to create a <code>gatsby</code> app. While the starter projects simplify many complexities, at the same time they may be a bit overwhelming for a simple app like ours.</p>
<p>Keeping that in mind, we will initialize a simple <code>gatsby</code> project by ourselves.</p>
<p>Open a command prompt and type the following command to initialize a Node.js supported project:</p><pre><code class="language-shell">npm init -y</code></pre>
<h3 id="gatsby-install-and-initial-setup"><strong>Gatsby: Install and initial setup</strong></h3>
<p>Install the <code>gatsby-cli</code> tool globally. This tool will help us work with the Gatsby environment.</p><pre><code class="language-shell"> npm install -g gatsby-cli</code></pre>
<p>Install the Gatsby, React, and ReactDOM dependencies. You can either use the <code>npm install</code> command as above or the <code>yarn add</code> command if you have yarn installed.</p><pre><code class="language-shell"> yarn add gatsby react react-dom</code></pre>
<p>Let's also add a <code>.gitignore</code> file with the following content:</p><pre><code class="language-shell">.cache
public
node_modules
*.env</code></pre>
<p>You can optionally create a README.md and LICENSE file. At this stage, our project should have these folders and files:</p>
<p><code>Gatsby</code> projects need a special configuration file called <code>gatsby-config.js</code>. At this time, we will need an empty file. Create a file named <code>gatsby-config.js</code> with the following content:</p><pre><code class="language-js"> module.exports = {
// keep it empty
}</code></pre>
<p>Now it is time to create our first page with <code>Gatsby</code>. Create a folder named <code>src</code> at the root of the project folder. Create a sub-folder named <code>pages</code> under <code>src</code>. Create a file named <code>index.js</code> under <code>src/pages</code> with the following content:</p><pre><code class="language-js">import React from 'react';
export default () =&gt; {
return (
&lt;&gt;
&lt;h1&gt;Images to load here...&lt;/h1&gt;
&lt;/&gt;
)
}</code></pre>
<p>At this stage, our project files and folders should look like this:</p>
<h3 id="let-s-run-it"><strong>Let's run it</strong></h3>
<p>Try the following command in the command prompt to run the app locally:</p><pre><code class="language-shell">gatsby develop</code></pre>
<p>By default, a <code>gatsby</code> app runs on the <code>8000</code> port number. Open your favorite browser and access the app @ <a href="http://localhost:8000/">http://localhost:8000</a>.</p>
<p>You should see it running like you see in the screen-shot below:</p>
<p>That's all. Now, we've gotten both <code>Cloudinary</code> and <code>Gatsby</code> successfully set up. It's time to bring them together.</p>
<h2 id="cloudinary-gatsby-the-getting-together-story"><strong>Cloudinary &amp; Gatsby, the getting together story</strong></h2>
<p>The <code>Gatsby</code> framework has huge community support and there are many plug-ins to satisfy critical needs. In early 2020, the <code>Cloudinary</code> team <a href="https://cloudinary.com/blog/introducing_cloudinary_s_gatsby_plugins">introduced two super cool Gatsby plugins</a> to the dev community:</p>
<ul>
<li><a href="https://www.npmjs.com/package/gatsby-source-cloudinary"><code>Gatsby-Source-Cloudinary</code></a> - Helps in fetching the stored images at the build time from Cloudinary to a Gatsby app/site.</li>
<li><a href="https://www.npmjs.com/package/gatsby-transformer-cloudinary"><code>Gatsby-Transformer-Cloudinary</code></a> - Helps in uploading the local images from a Gatsby app/site to Cloudinary.</li>
</ul>
<p>As we are only interested in fetching the images to the image gallery here, we will just install the <code>gatsby-source-cloudinary</code> plug-in.</p>
<p>We will also install a utility package called <code>dotenv</code> to handle the environment variables (Secret Key, API key, and so on) locally.</p>
<p>Let's install them. Open a command prompt and use the following command:</p><pre><code class="language-shell">yarn add dotenv gatsby-source-cloudinary</code></pre>
<p>Now, follow these steps to fetch the images into our app.</p>
<ol>
<li>Create a <code>.env</code> file at the root of the project folder and add the following content to it. Please note that the values in the <code>key-value</code> pairs are available in the <code>Cloudinary</code> dashboard as we have seen before.</li>
</ol><pre><code class="language-shell">CLOUDINARY_CLOUD_NAME=&lt;YOUR_CLOUDINARY_NAME&gt;
CLOUDINARY_API_KEY=&lt;YOUR_CLOUDINARY_API_KEY&gt;
CLOUDINARY_API_SECRET=&lt;YOUR_CLOUDINARY_API_SECRET&gt;</code></pre>
<p>2. &nbsp; Edit the <code>gatby-config.js</code> file to add the following content:</p><pre><code class="language-js">
require('dotenv').config();
module.exports = {
plugins:[
{
resolve: `gatsby-source-cloudinary`,
options: {
cloudName: process.env.CLOUDINARY_CLOUD_NAME,
apiKey: process.env.CLOUDINARY_API_KEY,
apiSecret: process.env.CLOUDINARY_API_SECRET,
resourceType: `image`,
prefix: `artists/` ,
context: true,
tags: true,
maxResults: 50
}
}
]
}</code></pre>
<p>There are a few things going on here. We are telling <code>gatsby</code> to use the <code>gatsby-source-cloudinary</code> plug-in with a few parameters.</p>
<p>The parameters <code>cloudName</code>, <code>apiKey</code> and <code>apiSecret</code> are fetched from the <code>.env</code> file using the <code>dotenv</code> package. We also specify the <code>resourceType</code> value as <code>image</code> as we are not interested in fetching other types of media.</p>
<p>The <code>prefix</code> parameter value should be the same as the image folder name in Cloudinary.</p>
<p>We specify <code>context</code> and <code>tags</code> as true to fetch the contextual metadata and tag information of an image. We also set the <code>maxResults</code> as 50 so that we do not get constrained with the default value of 10.</p>
<p>3. &nbsp; Next, create a folder called <code>components</code> under <code>src</code> and create a file called <code>Gallery.js</code> inside it. <code>Gatsby</code> uses <code>graphQL</code> to query the data from various sources like markdown, JSON, and Excel.<br><br>In our case, we will use <code>Cludinary</code> as a source to query the images using the &nbsp;<code>gatsby-source-cloudinary</code> plug-in configured already.</p>
<p>4. &nbsp; Now edit the <code>Gallery.js</code> file and add the following content:</p><pre><code class="language-js">
import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
const Gallery = () =&gt; {
const data = useStaticQuery(
graphql`
query CloudinaryImage {
allCloudinaryMedia {
edges {
node {
secure_url
context {
custom {
alt
caption
}
}
resource_type
}
}
}
}`
);
const images = data.allCloudinaryMedia.edges;
return (
&lt;div className="container"&gt;
{images.map((image, index) =&gt; (
&lt;figure className="wave" key={`${index}-image`}&gt;
&lt;img
src={image.node.secure_url}
alt={image.node.context.custom.alt} &gt;
&lt;/img&gt;
&lt;figcaption&gt;{image.node.context.custom.caption}&lt;/figcaption&gt;
&lt;/figure&gt;
))
}
&lt;/div&gt;
)
};
export default Gallery;</code></pre>
<p>As we see above, we use a <code>graphQL</code> query to fetch the source image paths and the context information. We use the information to loop through and add the images with a caption.</p>
<p>5. &nbsp; The next step is to edit the <code>index.js</code> file to import the <code>Gallery.js</code> file and use it.</p><pre><code class="language-js">import React from 'react';
import Gallery from '../components/Gallery';
export default () =&gt; {
return (
&lt;&gt;
&lt;Gallery /&gt;
&lt;/&gt;
)
}</code></pre>
<p>If you are running the <code>gatsby develop</code> already, please stop it and run it again. Access the app again in the browser. You should see the app with all the images fetched from <code>Cloudinary</code>.</p>
<p>But wait, it doesn't look as elegant as was promised. We have to do some <code>css</code> work here.</p>
<p>Create a file called <code>gallery.css</code> under the folder <code>src\components</code> and add the following content in it:</p><pre><code class="language-css">body {
background: #000000 url("https://res.cloudinary.com/atapas/image/upload/v1602214656/misc/6284_n48wtw.jpg") repeat-x center top;
color: #FFFFFF;
}
.container {
margin-top: 55px;
}
.wave {
float: left;
margin: 20px;
animation: wave
ease-in-out
1s
infinite
alternate;
transform-origin: center -20px;
}
.wave:hover {
animation-play-state: paused;
}
.wave img {
border: 5px solid #f8f8f8;
display: block;
width: 200px;
height: 250px;
background-color: #000;
}
.wave figcaption {
text-align: center;
}
.wave:after{
content: '';
position: absolute;
width: 20px;
height: 20px;
border: 1.5px solid #ffffff;
top: -10px;
left: 50%;
z-index: 0;
border-bottom: none;
border-right: none;
transform: rotate(45deg);
}
.wave:before{
content: '';
position: absolute;
top: -23px;
left: 50%;
display: block;
height: 44px;
width: 47px;
background-image: url(https://res.cloudinary.com/atapas/image/upload/v1602212639/misc/screw-head_oglfcu.png);
background-size: 20px 20px;
background-repeat: no-repeat;
z-index: 16;
}
@keyframes wave {
0% { transform: rotate(3deg); }
100% { transform: rotate(-3deg); }
}</code></pre>
<p>6. &nbsp;Import the <code>gallery.css</code> file into the <code>Gallery.js</code> file as</p><pre><code class="language-js">import './gallery.css';</code></pre>
<p>That's all. You should see the app looking much better than before as if the images are hanging from a wall with animation in them.</p>
<h2 id="let-s-deploy-the-app"><strong>Let's Deploy the App</strong></h2>
<p>The last step is to deploy the app publicly so that we show it off.</p>
<p>First, create a repository in GitHub and push the source code. Then create an account with <a href="https://www.netlify.com/">Netlify</a> to login.</p>
<p>Follow these simple steps to deploy your app to the Netlify CDN with built-in CI/CD support.</p>
<ul>
<li>Create a new site from Git</li>
<li>Authenticate to your <code>Github</code> account and select the image gallery project. In my case, the project name is <code>imaginary</code>.</li>
<li>In the next step, provide information about the build command as <code>gatsby build</code> and publish the directory as <code>public/</code>.</li>
<li>Next click on the <code>Site settings</code> to tell <code>netlify</code> about the <code>Cloudinary</code> cloud name, secret key, API key, and so on.</li>
<li>Browse to the <code>Environment</code> option and click on the <code>Edit variables</code> button.</li>
<li>Add three variables as shown below with the values shown in your <code>Cloudinary</code> dashboard.</li>
<li>Browse to the <code>Deploys</code> option and trigger a fresh deploy.</li>
<li>You can change the site name to something that meets your needs. In my case, it is <a href="https://imaginary.netlify.app/">https://imaginary.netlify.app/</a>:</li>
</ul>
<figcaption>New site from Git</figcaption>
</figure>
<figcaption>Create a new site</figcaption>
</figure>
<figcaption>Parameters for the site</figcaption>
</figure>
<figcaption>Site settings</figcaption>
</figure>
<figcaption>Add environment variables</figcaption>
</figure>
<figcaption>Add all of them</figcaption>
</figure>
<figcaption>Trigger a fresh deploy</figcaption>
</figure>
<figcaption>Optionally to change the site name</figcaption>
</figure>
<p>Now we're done. We have the app up and running publicly.</p>
<h2 id="in-summary"><strong><strong><strong>In Summary</strong></strong></strong></h2>
<p>Hope you enjoyed reading this article. In a future article we will see how to use the other gatsby-cloudinary plug-in to upload an image to the <code>Cloudinary</code> server to add to our image gallery.</p>
<p>You may also like these articles:</p>
<ul>
<li><a href="https://blog.greenroots.info/i-made-a-photo-gallery-with-css-animation-heres-what-i-learned-ckfzbk6v903ea2xs14l1942f7">I made a photo gallery with CSS animation. Here’s what I learned.</a></li>
<li><a href="https://blog.greenroots.info/jamstack-for-all-an-introduction-cke2fxc5800jvabs15lhn4a9x">JAMstack for All: An Introduction</a></li>
<li><a href="https://blog.greenroots.info/what-is-a-static-site-generator-and-how-to-select-one-cke9xtx5g006p58s11dzg2j16">What is a Static Site Generator and how to select one?</a></li>
</ul>
<p>If this article was useful, please share it so others can read it as well. You can @ me on Twitter (<a href="https://twitter.com/tapasadhikary">@tapasadhikary</a>) with comments, or feel free to follow me.</p>
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
