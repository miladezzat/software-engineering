---
card: "https://cdn-media-1.freecodecamp.org/images/1*EB-8t3dR5qMQYNXyqgM2wQ.png"
tags: [Angular]
description: "by Nader Dabit"
author: "Milad E. Fahmy"
title: "How to use AWS Amplify and Angular to Build Cloud Enabled JavaScript Applications"
created: "2021-08-16T10:14:15+02:00"
modified: "2021-08-16T10:14:15+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-angular tag-javascript tag-graphql tag-serverless tag-web-development ">
<header class="post-full-header">
<h1 class="post-full-title">How to use AWS Amplify and Angular to Build Cloud Enabled JavaScript Applications</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*EB-8t3dR5qMQYNXyqgM2wQ.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*EB-8t3dR5qMQYNXyqgM2wQ.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*EB-8t3dR5qMQYNXyqgM2wQ.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*EB-8t3dR5qMQYNXyqgM2wQ.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*EB-8t3dR5qMQYNXyqgM2wQ.png" alt="How to use AWS Amplify and Angular to Build Cloud Enabled JavaScript Applications">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
$ npm install --save aws-amplify-angular</code></pre><h4 id="creating-a-new-aws-mobile-project">Creating a new AWS Mobile Project</h4><p>If you already have an AWS project you would like to use, you can skip this step. If not, you you will learn how we can use the AWS Mobile Hub to quickly get up and running with AWS services like Amazon Cognito for authentication, Amazon Pinpoint for analytics, AWS AppSync for managed GraphQL, and Amazon S3 for storage.</p><p>The next thing we need to do here is install the AWS Mobile CLI:</p><pre><code class="language-bash">npm i -g awsmobile-cli</code></pre><p>Next, we will need to configure the AWS Mobile CLI to use your preferred IAM credentials.</p><blockquote>If you are new to AWS and would like to see how to set this up for the first time, check out <a href="https://www.youtube.com/watch?v=MpugaNKtw3k" rel="noopener">this</a> video.</blockquote><pre><code class="language-bash">awsmobile configure</code></pre><p>Now, ourAWS Mobile CLI is ready to go and we can create a new project.</p><p>Let’s create a new project that has analytics, storage, and authentication enabled:</p><pre><code class="language-bash">awsmobile init
awsmobile user-signin enable
awsmobile user-files enable
awsmobile push</code></pre><p>After creating your backend, the configuration file is copied to <code>/awsmobilejs/#current-backe</code></p><h4 id="viewing-your-project-in-the-aws-console">Viewing your project in the AWS Console</h4><p>Now that you’ve created your project from the CLI, you can view your project in AWS Mobile hub by visiting <a href="https://console.aws.amazon.com/mobilehub/home?region=us-east-1" rel="noopener">https://console.aws.amazon.com/mobilehub/home</a> and clicking on the name of your project.</p><h3 id="working-in-angular">Working in Angular</h3><p>To import the configuration file to your Angular app, you will need to rename <code>aws_exports.js</code> to <code>aws_exports.ts</code>.</p><p>To import the configuration file to your Angular app, you will need to rename <code>aws_exports.js</code> to <code>aws_exports.ts</code>.</p><pre><code class="language-js">import Amplify from 'aws-amplify'
import awsmobile from './aws-exports'
Amplify.configure(aws_exports)</code></pre><p>When working with underlying <code>aws-js-sdk</code>, the “node” package should be included in <em>types</em> compiler option. Make sure that you edit the <code>tsconfig.app.json</code> file in your source file folder, e.g. <code><em>src/tsconfig.app.json</em></code>.</p><pre><code class="language-json">"compilerOptions": {
"types" : ["node"]
}</code></pre><h4 id="importing-amplify">Importing Amplify</h4><p>In your <a href="https://angular.io/guide/bootstrapping" rel="noopener">root module</a> <code>src/app/app.module.ts</code>, you can import AWS Amplify modules as following:</p><pre><code class="language-ts">import { AmplifyAngularModule, AmplifyService } from 'aws-amplify-angular'
@NgModule({
...
imports: [
...
AmplifyAngularModule
],
...
providers: [
...
AmplifyService
]
...
})</code></pre><blockquote>The service provider is optional. You can import the core categories normally i.e. <code>import { Analytics } from 'aws-amplify'</code> or create your own provider. The service provider does some work for you and exposes the categories as methods. The provider also manages and dispatches authentication state changes using observables which you can subscribe to within your components (see below).</blockquote><h4 id="using-the-aws-amplify-service">Using the AWS Amplify Service</h4><p>AmplifyService is a provider in your Angular app, and it provides AWS Amplify core categories through dependency injection.</p><p>To use <em>AmplifyService</em> with <a href="https://angular.io/guide/dependency-injection-in-action" rel="noopener">dependency injection</a>, inject it into the constructor of any component or service, anywhere in your application.</p><pre><code class="language-ts">import { AmplifyService } from 'aws-amplify-angular';
...
constructor(
public navCtrl:NavController,
public amplifyService: AmplifyService,
public modalCtrl: ModalController
) {
this.amplifyService = amplifyService;
}
...</code></pre><h4 id="using-aws-amplify-categories">Using AWS Amplify Categories</h4><p>You can access and work directly with AWS Amplify Categories via the built-in service provider:</p><pre><code class="language-ts">import { Component } from '@angular/core';
import { AmplifyService }  from 'aws-amplify-angular';
@Component({
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.css']
})
export class AppComponent {
constructor( public amplify:AmplifyService ) {
this.amplifyService = amplify;
/** now you can access category APIs:
* this.amplifyService.auth();          // AWS Amplify Auth
* this.amplifyService.analytics();     // AWS Amplify Analytics
* this.amplifyService.storage();       // AWS Amplify Storage
* this.amplifyService.api();           // AWS Amplify API
* this.amplifyService.cache();         // AWS Amplify Cache
* this.amplifyService.pubsub();        // AWS Amplify PubSub
**/
}
}</code></pre><h4 id="usage-example-subscribe-to-authentication-state-changes">Usage Example: Subscribe to Authentication State Changes</h4><p>Import AmplifyService into your component and listen for auth state changes:</p><pre><code class="language-ts">import { AmplifyService }  from 'aws-amplify-angular';
// ...
constructor( public amplifyService: AmplifyService ) {
this.amplifyService = amplifyService;
this.amplifyService.authStateChange$
.subscribe(authState =&gt; {
this.signedIn = authState.state === 'signedIn';
if (!authState.user) {
this.user = null;
} else {
this.user = authState.user;
this.greeting = "Hello " + this.user.username;
}
});
}</code></pre><h4 id="view-components">View Components</h4><p>AWS Amplify also provides components that you can use in your Angular view templates, including an authenticator component, a photo picker component, and an Amazon S3 album component.</p><p><strong>Authenticator</strong></p><p>Authenticator component creates an out-of-the-box signing/sign-up experience for your Angular app. To use Authenticator, just add the <code>amplify-authenticator</code> directive in your .html view:</p><pre><code class="language-ts">&lt;amplify-authenticator&gt;&lt;/amplify-authenticator&gt;</code></pre><p><strong>Photo Picker</strong></p><p>Photo Picker component will render a file upload control that will allow choosing a local image and uploading it to Amazon S3. Once an image is selected, a base64 encoded image preview will be displayed automatically.</p><p>To render photo picker in an Angular view, use the <em><code>amplify-photo-picker</code> </em>component:</p><pre><code class="language-ts">&lt;amplify-photo-picker
(picked)="onImagePicked($event)"
(loaded)="onImageLoaded($event)"&gt;
&lt;/amplify-photo-picker&gt;</code></pre><p>The component will emit two events:</p><ul><li><code>(picked)</code> - Emitted when an image is selected. The event will contain the <code>File</code> object which can be used for upload.</li><li><code>(loaded)</code> - Emitted when an image preview has been rendered and displayed.</li></ul><p><strong>Uploading an image</strong></p><p>Use <code>onImagePicked(event)</code> to upload your photo to Amazon S3 using AWS Amplify Storage category:</p><pre><code class="language-ts">onImagePicked( file ) {
let key = `pics/${file.name}`;
this.amplify.storage().put( key, file, {
'level': 'private',
'contentType': file.type
})
.then (result =&gt; console.log('uploaded: ', result))
.catch(err =&gt; console.log('upload error: ', err));
}</code></pre><h4 id="s3-album">S3 Album</h4><p>The Amazon S3 Album component displays a list of images from the connected S3 bucket.</p><p>To render the album, use the <code><em>amplify-s3-album</em></code> component in your Angular view:</p><pre><code class="language-ts">&lt;amplify-s3-album
path="pics" (selected)="onAlbumImageSelected($event)"
&gt;
&lt;/amplify-s3-album&gt;</code></pre><p><code>(selected)</code> event can be used to retrieve the URL of the clicked image on the list:</p><pre><code class="language-ts">onAlbumImageSelected( event ) {
window.open( event, '_blank' );
}</code></pre><p><strong>Custom Styles</strong></p><p>You can use custom styling for AWS Amplify components. Just import your custom <em>styles.css</em> that overrides the default styles which can be found in <code>/node_modules/aws-amplify-angular/theme.css</code>.</p><h3 id="conclusion">Conclusion</h3><p>AWS Amplify is open source and actively being developed, and we’d love any feedback and / or issues from customers or users to help us in our future roadmap.</p><p>Feel free to check out the docs <a href="https://aws.github.io/aws-amplify/" rel="noopener">here</a>, or the GitHub repo <a href="https://github.com/aws/aws-amplify" rel="noopener">here</a>.</p><p>My Name is <a href="https://twitter.com/dabit3" rel="noopener">Nader Dabit </a>. I am a Developer Advocate at <a href="https://aws.amazon.com/mobile/" rel="noopener">AWS Mobile</a> working with projects like <a href="https://aws.amazon.com/appsync/" rel="noopener">AWS AppSync</a> and <a href="https://aws.github.io/aws-amplify/?utm_source=blog&amp;utm_campaign=amplify_angular_medium_nader" rel="noopener">AWS Amplify</a>, and the founder of <a href="http://reactnative.training/" rel="noopener">React Native Training</a>.</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
