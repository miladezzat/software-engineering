---
card: "https://cdn-media-1.freecodecamp.org/images/1*sS6KcsjhHDEI1T0ka164Wg.jpeg"
tags: [JavaScript]
description: "Today many web apps are built using React, Angular, Vue, Embe"
author: "Milad E. Fahmy"
title: "How to handle environment-specific settings in your JavaScript apps"
created: "2021-08-16T11:45:25+02:00"
modified: "2021-08-16T11:45:25+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-web-development tag-technology tag-startup tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">How to handle environment-specific settings in your JavaScript apps</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*sS6KcsjhHDEI1T0ka164Wg.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*sS6KcsjhHDEI1T0ka164Wg.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*sS6KcsjhHDEI1T0ka164Wg.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*sS6KcsjhHDEI1T0ka164Wg.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*sS6KcsjhHDEI1T0ka164Wg.jpeg" alt="How to handle environment-specific settings in your JavaScript apps">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
</figure><h4 id="when-to-consider-it--3"><strong>When to consider it:</strong></h4><ul><li>You have the ability to configure the web server in all environments</li><li>You’re interested in implementing a caching layer between your UI and your API.</li><li>Your front-end web server can forward calls to your API server reliably and quickly. There is a performance cost to this approach, since your web server must pass requests on to another server.</li></ul><h4 id="side-note-"><strong>Side note</strong>:</h4><p>While we’re talking about proxies, another proxy approach worth mentioning is proxy middleware (this is a totally different approach than the reverse proxy discussed above).</p><p>With proxy middleware running on your local machine, requests are forwarded to a specified URL during development. For instance, if you’re a React developer, <a href="https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#proxying-api-requests-in-development" rel="noopener">create-react-app has proxy support built in</a>. It uses Webpack’s proxy middleware.</p><p>Here’s a <a href="https://medium.freecodecamp.org/how-to-make-create-react-app-work-with-a-node-backend-api-7c5c48acb1b0" rel="noopener">solid overview of the proxy approach</a> using React and Express.</p><p><strong>However</strong>: Proxy middleware only solves the base URL problem in development. So use one of the other techniques in this post to handle other environments such as QA and production.</p><h3 id="option-5-docker">Option 5: Docker</h3><p>With Docker you can deploy the UI and API as separate containers, but create a “LAN” that allows the containers to communicate as though they’re on the same network. This way, the base URLs don’t change in each environment. The containers run identically in all environments. And you can pass relevant environment variables into the containers in each environment. Look into Kubernetes or Docker Swarm for this approach.</p><h4 id="when-to-consider-it--4"><strong>When to consider it:</strong></h4><ul><li>You’re already invested in the Docker ecosystem.</li></ul><h3 id="option-6-environment-sniffing">Option 6: Environment Sniffing</h3><p>With this approach, you use code to “sniff” ?? the current environment, typically by looking at the URL. For example, if the URL is http://localhost, you know you’re in development.</p><p>The benefit of this approach is simplicity. Developers don’t need to configure anything on their machine and you don’t need to monkey with CI server or web server configurations either.</p><h4 id="when-to-consider-it--5"><strong>When to consider it</strong>:</h4><ul><li>You have a simple app that calls a small number of APIs.</li><li>You don’t have a CI-server.</li><li>Your company politics make it painful or impractical to implement the other options above.</li><li>You’re not concerned about people potentially finding the URLs to your non-production environment. (For security, your non-production environment shouldn’t be accessible outside your corporate LAN/VPN anyway).</li></ul><h3 id="option-7-custom-http-header">Option 7: Custom HTTP header</h3><p>Configure the front-end web server to provide a custom HTTP header that contains the relevant client URL for the environment. The downside of this approach is your app has to make an HTTP call to this API first to determine what the relevant base URLs are for all environments.</p><h4 id="when-to-consider-it--6"><strong>When to consider it:</strong></h4><ul><li>I don’t recommend this approach, since it requires your app to make a round trip HTTP call before it can actually begin fetching data. I prefer one of the other approaches above.</li></ul><h3 id="option-8-app-config-endpoint">Option 8: App Config Endpoint</h3><p>With this approach, your app calls the same “app config” API at the same URL, for all environments. Your app calls this API first. The API call returns the relevant base URL in each environment (as well as potentially including other environment-specific settings). With this approach, you can potentially pass along with other relevant environment-specific config data.</p><h4 id="when-to-consider-it--7"><strong>When to consider it</strong>:</h4><ul><li>I don’t recommend this approach either. It impacts load time, because the initial HTTP call to retrieve config data must complete before the app can actually get started retrieving desired data. Consider one of the other options above instead.</li></ul><h3 id="summary">Summary</h3><p>Create a build per environment via a CI server if you need true per-environment customization (#2 above). If you prefer deploying the same code to each environment, consider runtime configuration (#3 above) or a reverse proxy (#4 above).</p><p>Happy coding! ⌨️</p><p>Have other ways you handle this? Please chime in via the comments.</p><p><a href="https://twitter.com/housecor" rel="noopener">Cory House</a> is the author of <a href="http://pluralsight.com/author/cory-house" rel="noopener">multiple courses on JavaScript, React, clean code, .NET, and more on Pluralsight</a>. He is principal consultant at <a href="http://www.reactjsconsulting.com" rel="noopener">reactjsconsulting.com</a>, a Software Architect, Microsoft MVP, and trains software developers internationally on front-end development practices. Cory tweets about JavaScript and front-end development on Twitter as <a href="http://www.twitter.com/housecor" rel="noopener">@housecor</a>.</p>
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
