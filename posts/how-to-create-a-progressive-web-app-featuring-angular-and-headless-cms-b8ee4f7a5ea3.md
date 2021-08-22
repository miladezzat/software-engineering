---
card: "https://cdn-media-1.freecodecamp.org/images/1*ZBkMjm06K3zeKAuXCL0mkg.png"
tags: [JavaScript]
description: by Ondrej Chrastina
author: "Milad E. Fahmy"
title: "How to create a progressive web app featuring Angular and headless CMS"
created: "2021-08-15T19:45:37+02:00"
modified: "2021-08-15T19:45:37+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-tech tag-programming tag-angular tag-progressive-web-app ">
<header class="post-full-header">
<h1 class="post-full-title">How to create a progressive web app featuring Angular and headless CMS</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*ZBkMjm06K3zeKAuXCL0mkg.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*ZBkMjm06K3zeKAuXCL0mkg.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*ZBkMjm06K3zeKAuXCL0mkg.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*ZBkMjm06K3zeKAuXCL0mkg.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*ZBkMjm06K3zeKAuXCL0mkg.png" alt="How to create a progressive web app featuring Angular and headless CMS">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Ondrej Chrastina</p>
<h1 id="how-to-create-a-progressive-web-app-featuring-angular-and-headless-cms">How to create a progressive web app featuring Angular and headless CMS</h1>
<p>Have you ever wondered how a headless Content Management System fits in with Progressive Web Apps?</p>
<p>I recently read my colleague <a href="undefined" rel="noopener">Bryan</a>’s <a href="https://hackernoon.com/creating-a-progressive-web-app-with-a-headless-cms-part-1-85ede9dba59b" rel="noopener">story</a> about Progressive Web Apps. The article talks about the implementation of a <a href="https://developers.google.com/web/progressive-web-apps" rel="noopener">Progressive Web App</a> (PWA) that lists interesting places stored in the headless CMS.</p>
<p>You could install this app on your device. It uses a service worker to cache the application and data about the points of interest. The application was written in plain JavaScript.</p>
<p>Having written a good share of JavaScript code, I wanted to expand on the concept using more complex frameworks.</p>
<p>I narrowed my choices down to three big players — React, Vue, and Angular. I chose to use Angular, because it has already support for service workers, and I wanted to use <a href="https://www.typescriptlang.org/" rel="noopener">TypeScript</a>.</p>
<p>Each step of this tutorial will be accompanied by a link to a GitHub commit. This way, you’ll always be able to see what the code looks like.</p>
<p>To run the app, just download or clone the commit and run <code>npm install</code> and <code>ng serve -o</code>. The whole code is stored in <a href="https://github.com/Kentico/cloud-sample-angular-pwa-app/commits/v1-introduction" rel="noopener">one of the branches</a>.</p>
<p>Let’s get to it!</p>
<h4 id="prerequisites">Prerequisites</h4>
<ul>
<li><a href="https://nodejs.org/en/download" rel="noopener">node.js</a> v8+</li>
<li><a href="https://www.npmjs.com/package/@angular/cli" rel="noopener">Angular CLI</a> v.1.7.4 installed as a global dependency via the npm package manager: <code>npm install -g @angular/cli</code></li>
</ul>
<h4 id="getting-started">Getting started</h4>
<p>First of all, generate a new project. You can easily generate all boilerplate code using the awesome Angular CLI tools. Just navigate to a folder and generate a ready-to-run code:</p><pre><code class="language-bash">ng new cloud-sample-angular-pwa-aps</code></pre>
<h4 id="boilerplate-configuration">Boilerplate configuration</h4>
<figcaption><a href="https://github.com/Kentico/cloud-sample-angular-pwa-app/commit/1857f253955e4abf0685222fa958d199648dd6ba" rel="noopener" target="_blank" title="">Configured boilerplate commit</a></figcaption>
</figure>
<p>There are a few steps to configure the boilerplate.</p>
<p>The generated code uses plain CSS by default. But, you might want to make your life easier with SCSS. To achieve this, perform these steps:</p>
<ol>
<li>Set <code>defaults.styleExt</code> value from <code>css</code>to <code>scss</code>in the<code>/.angular-cli.json</code>configuration file</li>
<li>Rename <code>styles.css</code> to <code>styles.scss</code></li>
<li>Rename <code>/src/app.component.css</code> to <code>/src/app.component.scss</code>and reflect this renaming in <code>app.component.ts</code> in the component declaration atribute’s <code>styleUrls</code> property value.</li>
</ol>
<h4 id="create-some-initial-content-for-the-app"><strong>Create some initial </strong>content<strong> for the app</strong></h4>
<ul>
<li>Global styles: <a href="https://github.com/Kentico/cloud-sample-angular-pwa-app/commit/1857f253955e4abf0685222fa958d199648dd6ba#diff-6a2256f44598ec970b4bd034962e011e" rel="noopener">/src/styles.scss</a></li>
<li>Component: <a href="https://github.com/Kentico/cloud-sample-angular-pwa-app/commit/1857f253955e4abf0685222fa958d199648dd6ba#diff-465e9f13ce23ec4a1e366935273fdbb6" rel="noopener">/src/app/app.component.html</a> and <a href="https://github.com/Kentico/cloud-sample-angular-pwa-app/commit/1857f253955e4abf0685222fa958d199648dd6ba#diff-f4c58ad626d121a4d36442d6696213eb" rel="noopener">/src/app/app.component.scss</a></li>
</ul>
<p>Lets have a look!</p>
<figcaption><em>Voila, </em>first run of the app.</figcaption>
</figure>
<p>Just run this command:</p><pre><code class="language-bash">ng serve -o</code></pre>
<h4 id="load-the-data">Load the data</h4>
<figcaption><a href="https://github.com/Kentico/cloud-sample-angular-pwa-app/commit/00072d54eda9023f6f9176fc6de3ed49b339b602" rel="noopener" target="_blank" title="">Data loading commit.</a></figcaption>
</figure>
<p>Let’s finally use the power of Angular. In this section, we will define an <a href="https://angular.io/guide/dependency-injection" rel="noopener">injectable</a> client that allows the app to get <a href="https://kenticocloud.com/" rel="noopener">Kentico Cloud</a> data. I will use the same data source as Bryan used in his article.</p>
<p>First of all, install <a href="https://github.com/Enngage/KenticoCloudDeliveryTypeScriptSDK" rel="noopener">Kentico Cloud Delivery SDK</a> via the following command:</p><pre><code class="language-bash">npm install -P kentico-cloud-delivery-typescript-sdk</code></pre>
<p>Then, create a client provider that will be used in dependency injection.</p>
<p>Create a new file in the <code>/src/app </code>folder and name it <code>delivery-client.provider.ts</code>. This <a href="https://angular.io/guide/dependency-injection#factory-providers" rel="noopener">provider</a> module needs to export an object defining the factory used to create our client. In the code below, you can see the ID of the project in Kentico Cloud where the data is stored.</p><pre><code class="language-ts">import { DeliveryClient, DeliveryClientConfig } from 'kentico-cloud-delivery-typescript-sdk';
export const DeliveryClientFactory = (): DeliveryClient =&gt; {
const projectId = '975bf280-fd91-488c-994c-2f04416e5ee3';
return new DeliveryClient(
new DeliveryClientConfig(projectId, [])
);
};
export const DeliveryClientProvider = {
provide: DeliveryClient,
useFactory: DeliveryClientFactory,
deps: []
};</code></pre>
<p>Next, edit <code>app.module.ts</code>. This is the place where you state which modules are loaded.</p><pre><code class="language-ts">...
import { DeliveryClientProvider } from './delivery-client.provider';
...
@NgModule({
...
providers: [DeliveryClientProvider]
...
})</code></pre>
<p>Now we are ready to use the client in the app component.</p>
<p>We will set up the <code>app.component.ts</code> to use the <code>DeliverClient</code> that is auto-magically injected as a parameter to the constructor. We’ll also subscribe the component to the client’s observable and we’ll define a corresponding observer action.</p><pre><code class="language-ts">import { Component, OnInit, OnDestroy } from '@angular/core';
import { DeliveryClient, ContentItem } from 'kentico-cloud-delivery-typescript-sdk';
import { Subscription } from 'rxjs/Subscription';
@Component({
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
dataSubscription: Subscription;
pointsOfInterest: ContentItem[];
constructor(private deliveryClient: DeliveryClient) { }
ngOnInit() {
this.dataSubscription = this.deliveryClient
.items&lt;ContentItem&gt;()
.type('point_of_interest')
.get()
.subscribe(response =&gt; {
this.pointsOfInterest = response.items;
});
}
ngOnDestroy(): void {
this.dataSubscription.unsubscribe();
}
}</code></pre>
<p>The last step is to display the data from CMS using the Angular <code>ngFor</code> directive to iterate through the items and render them.</p><pre><code class="language-html">&lt;header&gt;
&lt;h2&gt;Pack and Go&lt;/h2&gt;
&lt;/header&gt;
&lt;main class="main"&gt;
&lt;h2 class="title"&gt;{{poi.title.value}}&lt;/h2&gt;
&lt;div class="content" innerHTML="{{poi.description.value}}"&gt;&lt;/div&gt;
&lt;a class="map-link" target="_blank" href="http://maps.google.com/?ie=UTF8&amp;amp;hq=&amp;amp;ll={{poi.latitude__decimal_degrees_.value}},{{poi.longitude__decimal_degrees_.value}}&amp;amp;z=16"&gt;
Open the map
&lt;/a&gt;
&lt;/div&gt;
&lt;/main&gt;</code></pre>
<h4 id="allow-adding-a-shortcut-icon">Allow adding a shortcut icon</h4>
<p>Now, we’ll make the app capable of adding its icon to the desktop or start screen of the device.</p>
<p>This step is quite easy. It requires us to create a JSON file containing metadata about the app and link it from the <code>head</code> tag. The manifest file should point to multiple URLs of icons in various sizes.</p>
<p>We should also list the <code>manifest.json</code> file in an assets declaration in the <code>.angular-cli.json</code> configuration file.</p><pre><code class="language-json">{
...
apps: {
assets : [
...,
"manifest.json"
],
...
},
...
}</code></pre>
<p>But, more importantly, link to the <code>manifest.json</code> file from <code>index.html</code>.</p><pre><code class="language-html">&lt;link rel="manifest" href="manifest.json" /&gt;</code></pre>
<p>Finally, we’ll create the manifest itself, together with all the icon renditions. Take a look at the link below to see the result.</p>
<figcaption><a href="https://github.com/Kentico/cloud-sample-angular-pwa-app/commit/abb80401d8775c608b5e554e17da2f7ef1437a42" rel="noopener" target="_blank" title="">Commit link with the data.</a></figcaption>
</figure>
<h4 id="set-up-the-service-worker">Set up the service worker</h4>
<p>The concept of the service worker is what makes PWA apps revolutionary.</p>
<p>Service workers work as a proxy between the client and the internet. Depending on the actual configuration, the service worker can pre-cache the app skeleton (called the ‘app shell’) during the first load. This means that subsequent requests are blazing-fast. The service worker can also silently cache all other application data.</p>
<p>First of all, it is required to install the service worker module to the application.</p><pre><code class="language-bash">npm install -P @angular/service-worker</code></pre>
<p>Now enable the service worker in Angular in the <code>.angular-cli.json</code> configuration file.</p><pre><code class="language-json">{
...
apps: {
"serviceWorker": true,
...
},
...
}</code></pre>
<p>Now, let’s import the service worker module to our app using the <code>app.module.ts</code> file.</p><pre><code class="language-ts">...
import { ServiceWorkerModule } from '@angular/service-worker';
...
@NgModule({
...
imports: [
...
ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
],
...
})
˛...</code></pre>
<p>The last thing is to configure the caching strategies for the app shell and the data. First we need to create <code>ngsw-config.json</code> configuration file under the <code>/src</code> folder.</p>
<p>For the app shell, we’ll use the default set up described in the <a href="https://angular.io/guide/service-worker-getting-started#step-4-create-the-configuration-file-ngsw-configjson" rel="noopener">documentation</a>. This configuration will pre-fetch <code>index.html</code> , the <code>favicon.ico</code> , and the app shell, including the linked CSS and JavaScript bundles. Files in <code>/assets</code> folder are lazy-loaded.</p>
<p>Requests for the data from Kentico Cloud will use another caching strategy. We will define an API endpoint as a new <a href="https://angular.io/guide/service-worker-config#datagroups" rel="noopener">data group</a> and set the caching to use the <a href="https://angular.io/guide/service-worker-config#strategy" rel="noopener">freshness </a>strategy. In the commit link bellow, you can see the whole content of the configuration file.</p>
<figcaption><a href="https://github.com/Kentico/cloud-sample-angular-pwa-app/commit/6a5f2b3230f04901c51573124bafce4bd31672e4" rel="noopener" target="_blank" title="">Commit link</a></figcaption>
</figure>
<p>Now we are ready to install the app on the device. For instance, in Chrome in Android, you can do so by tapping the ellipsis glyph and choosing “Add to Home screen”.</p>
<p>All right, we’re done. Despite a quick and simple implementation, the app is quite powerful and fast. And we’re free to extend it in various ways, like importing the material design or font icons.</p>
<p>The PWA APIs also allow us to use cool native features such as:</p>
<ul>
<li>read device’s sensors</li>
<li>display push notifications</li>
<li>and use the device’s cameras.</li>
</ul>
<p>Our app could also sense when the device<strong> </strong>transitions from online to offline, and vice versa<strong>. </strong>We could also use the <a href="https://www.npmjs.com/package/kentico-cloud-model-generator-utility" rel="noopener">automatically generated, strongly-typed models of content items</a> from the CMS.</p>
<p>As you can see, creating a PWA in Angular is easy, yet allows us to extend the app much further.</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
