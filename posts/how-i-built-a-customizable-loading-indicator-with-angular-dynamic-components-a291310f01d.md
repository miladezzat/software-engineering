---
card: "https://cdn-media-1.freecodecamp.org/images/1*1yD1jhrSV5Kmd7Ee4OMxPg.jpeg"
tags: [JavaScript]
description: Recently, I wrote a blog post about creating a reusable loadi
author: "Milad E. Fahmy"
title: "How I built a customizable loading-indicator with Angular dynamic components"
created: "2021-08-15T19:34:10+02:00"
modified: "2021-08-15T19:34:10+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-tech tag-angular tag-front-end-development tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">How I built a customizable loading-indicator with Angular dynamic components</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*1yD1jhrSV5Kmd7Ee4OMxPg.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*1yD1jhrSV5Kmd7Ee4OMxPg.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*1yD1jhrSV5Kmd7Ee4OMxPg.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*1yD1jhrSV5Kmd7Ee4OMxPg.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*1yD1jhrSV5Kmd7Ee4OMxPg.jpeg" alt="How I built a customizable loading-indicator with Angular dynamic components">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Recently, I wrote a <a href="https://medium.com/@balazs.tapai1990/how-to-create-reusable-loading-indicator-for-angular-projects-d0a11f4631e0?source=friends_link&amp;sk=9022f72306ac9adf2aea163dfa15fb05" rel="noopener">blog post</a> about creating a reusable loading-indicator component for Angular projects. The next step is making the indicator part customizable. But how exactly do you insert your component into the overlay? That is where dynamic components can help us.</p>
<p><strong><em>Note: </em></strong><em>Since my previous blog post, I have refactored some parts of the library. Feel free to check out the <a href="https://github.com/TapaiBalazs/angular-reusables" rel="noopener">git repository</a>.</em></p>
<p>The use-case is that we have a really easy to use loading-indicator. By default, it has a spinner, and it can be triggered using the library’s decorator methods. However, our end user wants only “Loading…” displayed on the overlay. We can copy the logic and then replace the spinner with the text itself, but that would be rather redundant.</p>
<p>In order to be able to use dynamic components, first, we need a simple decorator implemented. This decorator makes it possible to inject our own component into the template.</p><pre><code class="language-typescript">import { Directive, ViewContainerRef } from '@angular/core';
@Directive({
selector: '[btpIndicatorHost]',
})
export class IndicatorHostDirective {
constructor(public viewContainerRef: ViewContainerRef) { }
}</code></pre>
<p>We have to add this directive to our library’s NgModule. Then replace the spinner component inside the loading-indicator template with the following:</p><pre><code class="language-html">&lt;btp-overlay&gt;
&lt;div class="btp-loading-indicator__container" [style.width]="indicatorSize" [style.height]="indicatorSize"&gt;
&lt;ng-template btpIndicatorHost&gt;&lt;/ng-template&gt;
&lt;/div&gt;
&lt;/btp-overlay&gt;</code></pre>
<p>Now that we have this template, we need to do 3 things in the loading-indicator component.</p>
<ol>
<li>Inject the ComponentFactoryResolver into the component.</li>
<li>Use the @ViewChild decorator to get our indicator-host.</li>
<li>Load the provided component.</li>
</ol><pre><code class="language-typescript">import {Component, ComponentFactoryResolver, ComponentRef, Inject, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {LOADING_INDICATOR_CONFIG} from '../loading-indicator.config';
import {LoadingIndicatorConfig} from '../interfaces/loading-indicator.interfaces';
import {IndicatorHostDirective} from '../directives/indicator-host.directive';
import {SpinnerComponent} from '../spinner/spinner.component';
import {DEFAULT_SIZE, INDICATOR_COLOR} from '../constants/indicator.constants';
@Component({
selector: 'btp-loading-indicator',
templateUrl: './loading-indicator.component.html',
styleUrls: ['./loading-indicator.component.css']
})
export class LoadingIndicatorComponent implements OnInit, OnDestroy {
@ViewChild(IndicatorHostDirective)
host: IndicatorHostDirective;
constructor(@Inject(LOADING_INDICATOR_CONFIG)
private config: LoadingIndicatorConfig,
private componentFactoryResolver: ComponentFactoryResolver) {
}
get indicatorSize(): string {
return `${this.config.size}px`;
}
ngOnInit(): void {
this.loadComponent();
}
ngOnDestroy(): void {
this.host.viewContainerRef.clear();
}
private loadComponent() {
const component = this.config.indicatorComponent || SpinnerComponent;
const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component as any);
const viewContainerRef = this.host.viewContainerRef;
viewContainerRef.clear();
const componentRef: ComponentRef&lt;any&gt; = viewContainerRef.createComponent(componentFactory);
componentRef.instance.color = this.config.color || INDICATOR_COLOR;
componentRef.instance.size = this.config.size || DEFAULT_SIZE;
}
}</code></pre>
<p>We need to load the component in the OnInit lifecycle hook. The OnInit hook runs after the first ngOnChanges(), and it is called only once. It is the ideal place to load a component dynamically into the DOM. We also need to clear the viewContainer reference during component destroy.</p><pre><code class="language-typescript">  ngOnInit(): void {
this.loadComponent();
}
ngOnDestroy(): void {
this.host.viewContainerRef.clear();
}</code></pre>
<p>Let’s examine our ‘loadComponent’ method a little bit further. We want to provide our custom components using our configuration logic. When a custom component is not provided in the config, our indicator will be the default spinner component.</p><pre><code class="language-typescript">  private loadComponent() {
const component = this.config.indicatorComponent || SpinnerComponent;
const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component as any);
const viewContainerRef = this.host.viewContainerRef;
viewContainerRef.clear();
const componentRef: ComponentRef&lt;any&gt; = viewContainerRef.createComponent(componentFactory);
componentRef.instance.color = this.config.color || INDICATOR_COLOR;
componentRef.instance.size = this.config.size || DEFAULT_SIZE;
}</code></pre>
<p>Then we use the componentFactoryResolver, to get the component’s factory. To be on the safe side, we clear our ViewContainerRef first. Then we create the component using the resolved factory, and we set our config values on the created instance.</p>
<p>Our end-user wants only a small text instead of a fancy spinner. A rather simple component would look like the following:</p><pre><code class="language-typescript">import {Component} from '@angular/core';
@Component({
selector: 'app-loading-message',
template: `&lt;h1&gt;Loading...&lt;/h1&gt;`,
styles: [``]
})
export class LoadingMessageComponent {
}</code></pre>
<p>We provide it in our app’s main module, where we set up and configure our library. Adding the component into the ‘entryComponents’ array makes it sure that its factory can be resolved during loading.</p>
<p>From now on, we can replace the indicator component in any of our Angular projects, without the hustle of reimplementing most of the logic over and over again.</p><pre><code class="language-typescript">@NgModule({
declarations: [AppComponent, LoadingMessageComponent],
imports: [
CommonModule,
AppRoutingModule,
LoadingIndicatorModule.forRoot(),
],
providers: [
{
provide: LOADING_INDICATOR_CONFIG,
useValue: {
indicatorComponent: LoadingMessageComponent
}
}
],
entryComponents: [LoadingMessageComponent]
})
export class AppModule {
}</code></pre>
<p><em>If you would like to learn more about Dynamic components, I recommend you to read: <a href="https://blog.angularindepth.com/here-is-what-you-need-to-know-about-dynamic-components-in-angular-ac1e96167f9e" rel="noopener">Here is what you need to know about dynamic components in Angular</a> by <a href="https://twitter.com/maxkoretskyi" rel="noopener"><strong>Max Koretskyi</strong></a></em></p>
<p>Thank you very much for reading this blog post. If you would like to try the above-mentioned lib out, you can find the package and instructions to install it <a href="https://www.npmjs.com/package/@btapai/ng-loading-indicator" rel="noopener">here</a>.</p>
<p><em>You can also follow me on <a href="https://twitter.com/TapaiBalazs" rel="noopener">Twitter</a> or <a href="https://github.com/TapaiBalazs" rel="noopener">GitHub</a>.</em></p>
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
