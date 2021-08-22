---
card: "https://cdn-media-1.freecodecamp.org/images/1*AdGD1-LO1avzx5hNJFQoZQ.png"
tags: [JavaScript]
description: Angular has come out with some amazing new features in versio
author: "Milad E. Fahmy"
title: "Angular 6 and its new features — explained in three minutes"
created: "2021-08-15T19:45:40+02:00"
modified: "2021-08-15T19:45:40+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-angular6 tag-angular tag-programming tag-tech ">
<header class="post-full-header">
<h1 class="post-full-title">Angular 6 and its new features — explained in three minutes</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*AdGD1-LO1avzx5hNJFQoZQ.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*AdGD1-LO1avzx5hNJFQoZQ.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*AdGD1-LO1avzx5hNJFQoZQ.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*AdGD1-LO1avzx5hNJFQoZQ.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*AdGD1-LO1avzx5hNJFQoZQ.png" alt="Angular 6 and its new features — explained in three minutes">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p><a href="https://angular.io" rel="noopener">Angular</a> has come out with some amazing new features in <a href="https://angular.io/" rel="noopener">version 6.0.0</a>, especially in Angular-cli. Now, with Angular 6, you can easily update your old packages, create native web elements using Angular Elements, and many other things. Let’s take a look!</p>
<h3 id="ng-add">ng add</h3>
<p><code><strong>ng add</strong></code> is a new command in Angular-cli that helps you install and download new packages in your angular apps. It works the same as npm, but it doesn’t replace it.</p>
<h3 id="ng-update">ng update</h3>
<p><code><strong>ng update</strong></code> is a new Angular-cli command too. It’s used to update and upgrade your packages. It’s really helpful, for example, when you want to upgrade from Angular 5 to Angular 6, or any other package in your Angular app.</p>
<h3 id="declaring-the-providers-inside-the-service-itself">Declaring the providers inside the service itself</h3>
<p>Before this update, you had to the declare the providers array in <code><strong>app.module.ts</strong></code></p>
<p>Now with Angular 6, you can provide your service inside the supervisor itself by putting the <code><strong>providedIn:root</strong> </code>property within the "<code><strong>@injectable" </strong></code><strong>decorator.</strong></p>
<h3 id="use-ng-template-instead-of-template-directive">Use ng-template instead of template directive</h3>
<p>You can use<code><strong> ng-template</strong></code> to render the HTML instead of the <code><strong>template</strong></code> tag in the new version of Angular. <code><strong>ng-template</strong></code> is an Angular element, and it works when it is used with a <a href="https://angular.io/guide/structural-directives" rel="noopener">structural directive</a> such as <code><strong>*ngFor</strong></code> and <code><strong>*ngIf</strong></code></p>
<h3 id="angular-elements">Angular elements</h3>
<p>Angular 6 introduced us to Angular elements. You’re able to render your Angular elements as native web elements, and they’re interpreted as trusted HTML elements.</p>
<p>You can add Angular elements by running the command below:</p>
<p>Import <code><strong>createCustomElement</strong></code> in your component.</p>
<p>Then create your customized element!</p>
<p><code><strong>MyElemComponent.ts</strong></code></p>
<p>The result:</p>
<p><strong>Note: </strong>you have to implement the <code><strong>DomSanitizer</strong></code> method from <code>@angular/platform-browser</code> to make your custom element a trusted HTML tag .</p>
<p>You can learn more about Angular elements <a href="https://angular.io/guide/elements" rel="noopener">here</a></p>
<h3 id="upgrading-to-rxjs-6-0-0">Upgrading to RxJS 6.0.0</h3>
<p>Angular 6 uses the latest version of Rxjs library. Now you can enjoy the newest features of RxJS 6 in your Angular app :)</p>
<h3 id="wrapping-up">Wrapping Up</h3>
<p>Angular itself doesn’t have many groundbreaking changes in the Angular core, but Angular-cli is really exciting. The Angular team is focusing more on performance, building PWAs easily, providing a good environment to work in which to work with Angular in an easy way.</p>
<p>You can find me on <a href="https://twitter.com/SaidHYN" rel="noopener">Twitter</a>.</p>
<p></p>
<blockquote>By the way, I’ve recently worked with a strong group of software engineers for one of my mobile applications. The organization was great, and the product was delivered very quickly, much faster than other firms and freelancers I’ve worked with, and I think I can honestly recommend them for other projects out there. Shoot me an email if you want to get in touch — <a href="mailto:said@devsdata.com">said@devsdata.com</a>.</blockquote>
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
