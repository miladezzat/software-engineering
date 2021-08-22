---
card: "https://cdn-media-1.freecodecamp.org/images/1*hEbJvltnslRrdEzjWQ7Img.jpeg"
tags: [JavaScript]
description: Reusability. A word that has crossed my mind several times re
author: "Milad E. Fahmy"
title: "How to create a reusable loading-indicator for Angular projects"
created: "2021-08-15T19:34:51+02:00"
modified: "2021-08-15T19:34:51+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-typescript tag-angular tag-tech tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">How to create a reusable loading-indicator for Angular projects</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*hEbJvltnslRrdEzjWQ7Img.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*hEbJvltnslRrdEzjWQ7Img.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*hEbJvltnslRrdEzjWQ7Img.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*hEbJvltnslRrdEzjWQ7Img.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*hEbJvltnslRrdEzjWQ7Img.jpeg" alt="How to create a reusable loading-indicator for Angular projects">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p><strong>Reusability</strong>. A word that has crossed my mind several times recently, while working on an Angular project. I have decided to create my own Angular reusables and blog about the experience.</p>
<figcaption>Photo by <a href="https://unsplash.com/photos/XJXWbfSo2f0?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText" rel="noopener" target="_blank" title="">Luca Bravo</a> on <a href="https://unsplash.com/search/photos/front-end?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText" rel="noopener" target="_blank" title="">Unsplash</a></figcaption>
</figure>
<p>So, what exactly is a loading-indicator? Usually, it is a spinner of some sort with an overlay, which prevents user interactions. The UI is not clickable and focus is trapped. Therefore, the user cannot mutate the data or the application state accidentally by interacting with inputs behind the overlay.</p>
<p>After the loading stops, the overlay with the spinner is removed from the DOM and the previously focused element is focused again.</p>
<p>I started with the logic that would trigger the spinner. For that I used a simple BehaviorSubject and two decorator functions:</p><pre><code class="language-js">import {BehaviorSubject} from 'rxjs';
import {distinctUntilChanged} from 'rxjs/operators';
const indicatorSubject = new BehaviorSubject&lt;boolean&gt;(false);
export const isLoading$ = indicatorSubject.asObservable().pipe(distinctUntilChanged());
export function startLoadingIndicator(target: any, propertyKey: string | symbol, propertyDescriptor: PropertyDescriptor): any {
const original = propertyDescriptor.value;
propertyDescriptor.value = (...args) =&gt; {
indicatorSubject.next(true);
const result = original.call(target, ...args);
return result;
};
return propertyDescriptor;
}
export function stopLoadingIndicator(target: any, propertyKey: string, propertyDescriptor: PropertyDescriptor): any {
const original = propertyDescriptor.value;
propertyDescriptor.value = (...args) =&gt; {
indicatorSubject.next(false);
const result = original.call(target, ...args);
return result;
};
return propertyDescriptor;
}
</code></pre>
<p>This way, we don’t need an injectable service for triggering or stopping the spinner. The two simple decorator methods just call .next() on our BehaviorSubject. The isLoading$ variable is exported as an observable.</p>
<p>Let’s use it in our loading-indicator component.</p><pre><code class="language-js">get isLoading$(): Observable&lt;boolean&gt; {
return isLoading$;
}</code></pre>
<p>Now inside your template, you can use your isLoading$ getter with the async pipe to show/hide the whole overlay.</p><pre><code class="language-html">&lt;div class="btp-overlay" *ngIf="isLoading$ | async"&gt;
&lt;div class="btp-loading-indicator__container" [style.width]="indicatorSize" [style.height]="indicatorSize"&gt;
&lt;btp-spinner&gt;&lt;/btp-spinner&gt;
&lt;/div&gt;
&lt;/div&gt;</code></pre>
<p>As you can see I extracted the spinner into its own component, and I have done several other things. I added some logic for focus trapping and the ability to configure the size and color of the spinner using an InjectionToken.</p><pre><code class="language-js">import {LoadingIndicatorConfig} from './interfaces/loading-indicator.interfaces';
import {InjectionToken} from '@angular/core';
export const DEFAULT_CONFIG: LoadingIndicatorConfig = {
size: 160,
color: '#7B1FA2'
};
export const LOADING_INDICATOR_CONFIG: InjectionToken&lt;string&gt; = new InjectionToken('btp-li-conf');
</code></pre>
<p>Providing configuration objects using InjectionToken is a good way to provide configurable properties in the constructor.</p><pre><code class="language-js">  constructor(@Inject(LOADING_INDICATOR_CONFIG)
private config: LoadingIndicatorConfig) {
}</code></pre>
<p>Now we have to bundle everything up into a NgModule:</p><pre><code class="language-js">import {ModuleWithProviders, NgModule} from '@angular/core';
import {LoadingIndicatorComponent} from './loading-indicator/loading-indicator.component';
import {CommonModule} from '@angular/common';
import {SpinnerComponent} from './spinner/spinner.component';
import {DEFAULT_CONFIG, LOADING_INDICATOR_CONFIG} from './loading-indicator.config';
@NgModule({
declarations: [LoadingIndicatorComponent, SpinnerComponent],
imports: [
CommonModule
],
exports: [LoadingIndicatorComponent]
})
export class LoadingIndicatorModule {
static forRoot(): ModuleWithProviders {
return {
ngModule: LoadingIndicatorModule,
providers: [{provide: LOADING_INDICATOR_CONFIG, useValue: DEFAULT_CONFIG}]
};
}
}</code></pre>
<p>After building the library, and installing it into an Angular application, triggering the spinner becomes extremely easy using the two decorator methods.</p>
<p>First, we need to add the component to the proper place in the DOM. I usually put it to the app entry component, to the bottom of the template.</p><pre><code class="language-html">&lt;h1&gt;Loading indicator&lt;/h1&gt;
&lt;button data-test-id="cy-trigger-indicator" (click)="triggerLoadingIndicator()"&gt;START LOADING&lt;/button&gt;
&lt;btp-loading-indicator&gt;&lt;/btp-loading-indicator&gt;
</code></pre>
<p>As you can see, the triggerLoadingIndicator method is called when the button is clicked. That method is a decorated method:</p><pre><code class="language-js">  @startLoadingIndicator
triggerLoadingIndicator() {
setTimeout(this.triggerLoadingIndicatorStop.bind(this), 500);
}
@stopLoadingIndicator
triggerLoadingIndicatorStop() {
console.log('stopped');
}</code></pre>
<p>And that is it. Of course in a real application, one could use it to decorate requests and their respective response handlers. A quick tip: decorate your error handlers as well. :)</p>
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
