---
card: "/images/default.jpg"
tags: [Angular]
description: Approximately a year ago, I have implemented the first e2e te
author: "Milad E. Fahmy"
title: "What could go wrong? How to handle errors in Angular"
created: "2021-08-15T19:33:28+02:00"
modified: "2021-08-15T19:33:28+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-angular tag-typescript tag-error-handling tag-error tag-javascript ">
<header class="post-full-header">
<h1 class="post-full-title">What could go wrong? How to handle errors in Angular</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2019/07/Screenshot-2019-07-01-at-11.01.20.png 300w,
/news/content/images/size/w600/2019/07/Screenshot-2019-07-01-at-11.01.20.png 600w,
/news/content/images/size/w1000/2019/07/Screenshot-2019-07-01-at-11.01.20.png 1000w,
/news/content/images/size/w2000/2019/07/Screenshot-2019-07-01-at-11.01.20.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2019/07/Screenshot-2019-07-01-at-11.01.20.png" alt="What could go wrong? How to handle errors in Angular">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Approximately a year ago, I have implemented the first e2e tests on a project. It was a rather big application using JAVA SpringBoot on the back-end and Angular on the front-end. We used Protractor as a testing tool, which uses Selenium. In the front-end code there was a service, which had an error handler method. When that method was called, a modal dialog popped up and the user could see the details of the errors and the stack-trace.</p>
<p>The problem was that while it has tracked every error that happened on the back-end, the front-end failed silently. <em>TypeErrors</em>, <em>ReferenceErrors</em> and other uncaught exceptions were logged only to the console. When something went wrong during e2e test runs the screenshot, which was taken when the test step has failed, has shown absolutely nothing. Have fun debugging that!</p>
<p>Luckily Angular has a built-in way of handling errors and it is extremely easy to use. We just have to create our own service, which implements Angular's <em>ErrorHandler</em> interface:</p>
@Injectable({
providedIn: 'root'
})
export class ErrorHandlerService implements ErrorHandler{
constructor() {}
handleError(error: any) {
// Implement your own way of handling errors
}
}
</code></pre>
<p>While we could easily provide our service in our <em>AppModule</em>, it might be a good idea to provide this service in a separate module. This way we could create our own library and use it in our future projects as well:</p>
import {ErrorHandler, ModuleWithProviders, NgModule} from '@angular/core';
import {ErrorHandlerComponent} from './components/error-handler.component';
import {FullscreenOverlayContainer, OverlayContainer, OverlayModule} from '@angular/cdk/overlay';
import {ErrorHandlerService} from './error-handler.service';
import {A11yModule} from '@angular/cdk/a11y';
@NgModule({
declarations: [ErrorHandlerComponent],
imports: [CommonModule, OverlayModule, A11yModule],
entryComponents: [ErrorHandlerComponent]
})
export class ErrorHandlerModule {
public static forRoot(): ModuleWithProviders {
return {
ngModule: ErrorHandlerModule,
providers: [
{provide: ErrorHandler, useClass: ErrorHandlerService},
{provide: OverlayContainer, useClass: FullscreenOverlayContainer},
]
};
}
}
</code></pre>
<p>We used the <em>Angular CLI</em> for generating the <em>ErrorHandlerModule</em>, so we already have a component generated, which can be our modal dialog's content. In order for us to be able to put it inside an Angular CDK overlay, it needs to be an entryComponent. That is why we have put it into the <em>ErrorHandlerModule</em>'s entryComponents array.</p>
<p>We also added some imports. <em>OverlayModule</em> and <em>A11yModule</em> comes from the CDK module. They are needed for creating our overlay and to trap focus when our error dialog is opened. As you can see, we provide <em>OverlayContainer</em> using the <em>FullscreenOverlayContainer</em> class because if an error occurs, we want to restrict our users' interactions to our error modal. If we don't have a fullscreen backdrop, the users might be able to interact with the application and cause further errors. Let's add our newly created module to our <em>AppModule</em>:</p>
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MainComponent} from './main/main.component';
import {ErrorHandlerModule} from '@btapai/ng-error-handler';
import {HttpClientModule} from '@angular/common/http';
@NgModule({
declarations: [ AppComponent, MainComponent ],
imports: [
BrowserModule,
HttpClientModule,
ErrorHandlerModule.forRoot(),
AppRoutingModule,
],
bootstrap: [AppComponent]
})
export class AppModule {
}
</code></pre>
<p>Now that we have our `ErrorHandlerService` in place, we can start implementing the logic. We are going to create a modal dialog, which displays the error in a clean, readable way. This dialog will have an overlay/backdrop and it will be dynamically placed into the DOM with the help of the Angular CDK. Let's install it:</p>
</code></pre>
<p>According to the <a href="https://material.angular.io/cdk/overlay/overview">documentation</a>, the <em>Overlay</em> component needs some pre-built css files. Now if we would use Angular Material in our project it wouldn't be necessary, but that is not always the case. Let's import the overlay css in our <em>styles.css</em> file. Note, that if you already use Angular Material in your app, you don't need to import this css.</p>
</code></pre>
<p>Let's use our <em>handleError</em> method to create our modal dialog. It is important to know, that the <em>ErrorHandler</em> service is part of the application initialisation phase of Angular. In order to avoid a rather nasty <a href="https://stackoverflow.com/a/39767492">cyclic dependency error</a>, we use the injector as its only constructor parameter. We use Angular's dependency injection system when the actual method is called. Let's import the overlay from the CDK and attach our <em>ErrorHandlerComponent</em> into the DOM:</p>
@Injectable({
providedIn: 'root'
})
export class ErrorHandlerService implements ErrorHandler {
constructor(private injector: Injector) {}
handleError(error: any) {
const overlay: Overlay = this.injector.get(Overlay);
const overlayRef: OverlayRef = overlay.create();
const ErrorHandlerPortal: ComponentPortal&lt;ErrorHandlerComponent&gt; = new ComponentPortal(ErrorHandlerComponent);
const compRef: ComponentRef&lt;ErrorHandlerComponent&gt; = overlayRef.attach(ErrorHandlerPortal);
}
}
</code></pre>
<p>Let's turn our attention towards our error handler modal. A pretty simple working solution would be displaying the error message and the stacktrace. Let's also add a 'dismiss' button to the bottom.</p>
export const ERROR_INJECTOR_TOKEN: InjectionToken&lt;any&gt; = new InjectionToken('ErrorInjectorToken');
@Component({
selector: 'btp-error-handler',
// TODO: template will be implemented later
template: `${error.message}&lt;br&gt;&lt;button (click)="dismiss()"&gt;DISMISS&lt;/button&gt;`
styleUrls: ['./error-handler.component.css'],
})
export class ErrorHandlerComponent {
private isVisible = new Subject();
dismiss$: Observable&lt;{}&gt; = this.isVisible.asObservable();
constructor(@Inject(ERROR_INJECTOR_TOKEN) public error) {
}
dismiss() {
this.isVisible.next();
this.isVisible.complete();
}
}
</code></pre>
<p>As you can see, the component itself is pretty simple. We are going to use two rather important directives in the template, to make the dialog accessible. The first one is the <em>cdkTrapFocus</em> which will trap the focus when the dialog is rendered. This means that the user cannot focus elements behind our modal dialog. The second directive is the <em>cdkTrapFocusAutoCapture</em> which will automatically focus the first focusable element inside our focus trap. Also, it will automatically restore the focus to the previously focused element, when our dialog is closed.</p>
<p>In order to be able to display the error's properties, we need to inject it using the constructor. For that, we need our own <em>injectionToken</em>. We also created a rather simple logic for emitting a dismiss event using a subject and the <em>dismiss$</em> property. Let's connect this with our <em>handleError</em> method in our service and do some refactoring.</p>
export const DEFAULT_OVERLAY_CONFIG: OverlayConfig = {
hasBackdrop: true,
};
@Injectable({
providedIn: 'root'
})
export class ErrorHandlerService implements ErrorHandler {
private overlay: Overlay;
constructor(private injector: Injector) {
this.overlay = this.injector.get(Overlay);
}
handleError(error: any): void {
const overlayRef = this.overlay.create(DEFAULT_OVERLAY_CONFIG);
this.attachPortal(overlayRef, error).subscribe(() =&gt; {
overlayRef.dispose();
});
}
private attachPortal(overlayRef: OverlayRef, error: any): Observable&lt;{}&gt; {
const ErrorHandlerPortal: ComponentPortal&lt;ErrorHandlerComponent&gt; = new ComponentPortal(
ErrorHandlerComponent,
null,
this.createInjector(error)
);
const compRef: ComponentRef&lt;ErrorHandlerComponent&gt; = overlayRef.attach(ErrorHandlerPortal);
return compRef.instance.dismiss$;
}
private createInjector(error: any): PortalInjector {
const injectorTokens = new WeakMap&lt;any, any&gt;([
[ERROR_INJECTOR_TOKEN, error]
]);
return new PortalInjector(this.injector, injectorTokens);
}
}
</code></pre>
<p>Let's focus on providing the error as an injected parameter first. As you can see, the <em>ComponentPortal</em> class expects one must-have parameter, which is the component itself. The second parameter is a <em>ViewContainerRef</em> which would have an effect of the component's logical place of the component tree. The third parameter is our <em>createInejctor</em> method. As you can see it returns a new <em>PortalInjector</em> instance. Let's take a quick look at its underlying implementation:</p>
constructor(
private _parentInjector: Injector,
private _customTokens: WeakMap&lt;any, any&gt;) { }
get(token: any, notFoundValue?: any): any {
const value = this._customTokens.get(token);
if (typeof value !== 'undefined') {
return value;
}
return this._parentInjector.get&lt;any&gt;(token, notFoundValue);
}
}
</code></pre>
<p>As you can see, it expects an <em>Injector</em> as a first parameter and a WeakMap for custom tokens. We did exactly that using our <em>ERROR_INJECTOR_TOKEN</em> which is associated with our error itself. The created <em>PortalInjector</em> is used for the proper instantiation of our <em>ErrorHandlerComponent</em>, it will make sure that the error itself will be present in the component.</p>
<p>At last, our <em>attachPortal</em> method returns the recently instantiated component's <em>dismiss$</em> property. We subscribe to it, and when it changes we call the <em>.dispose()</em> on our <em>overlayRef</em>. And our error modal dialog is dismissed. Note, that we also call complete on our subject inside the component, therefore, we don't need to unsubscribe from it.</p>
<hr>
<p>Now, this is excellent for errors that are thrown when there's an issue in the clinet side code. But we are creating web applications and we use API endpoints. So what happens when a REST endpint gives back an error?</p>
<p>We can handle every error in its own service, but do we really want to? If everything is alright errors won't be thrown. If there are specific requirements, for example to handle <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/418">418 status code</a><em> </em>with a flying unicorn you could implement its handler in its service. But when we face rather common errors, like 404 or 503 we might want to display that in this same error dialog.</p>
<p>Let's just quickly gather what happens when an <em>HttpErrorResponse</em> is thrown. It is going to happen async, so probably we are going to face some change detection issues. This error type has different properties than a simple error, therefore, we might need a sanitiser method. Now let's get into it by creating a rather simple interface for the <em>SanitisedError</em>:</p>
message: string;
details: string[];
}
</code></pre>
<p>Let's create a template for our <em>ErrorHandlerComponent</em>:</p>
@Component({
selector: 'btp-error-handler',
template: `
&lt;section cdkTrapFocus [cdkTrapFocusAutoCapture]="true" class="btp-error-handler__container"&gt;
&lt;h2&gt;Error&lt;/h2&gt;
&lt;p&gt;{{error.message}}&lt;/p&gt;
&lt;div class="btp-error-handler__scrollable"&gt;
&lt;ng-container *ngFor="let detail of error.details"&gt;
&lt;div&gt;{{detail}}&lt;/div&gt;
&lt;/ng-container&gt;
&lt;/div&gt;
&lt;button class="btp-error-handler__dismiss button red" (click)="dismiss()"&gt;DISMISS&lt;/button&gt;
&lt;/section&gt;`,
styleUrls: ['./error-handler.component.css'],
})
export class ErrorHandlerComponent implements OnInit {
// ...
}
</code></pre>
<p>We wrapped the whole modal into a <em>&lt;section&gt;</em> and we added the <em>cdkTrapFocus</em> directive to it. This directive will prevent the user from navigating in the DOM behind our overlay/modal. The <em>[cdkTrapFocusAutoCapture]="true"</em> makes sure that the dismiss button is focused immediately. When the modal is closed the previously focused element will get back the focus. We simply display the error message and the details using <em>*ngFor</em>. Let's jump back into our <em>ErrorHandlerService</em>:</p>
@Injectable({
providedIn: 'root'
})
export class ErrorHandlerService implements ErrorHandler {
// Constructor
handleError(error: any): void {
const sanitised = this.sanitiseError(error);
const ngZone = this.injector.get(NgZone);
const overlayRef = this.overlay.create(DEFAULT_OVERLAY_CONFIG);
ngZone.run(() =&gt; {
this.attachPortal(overlayRef, sanitised).subscribe(() =&gt; {
overlayRef.dispose();
});
});
}
// ...
private sanitiseError(error: Error | HttpErrorResponse): SanitizedError {
const sanitisedError: SanitizedError = {
message: error.message,
details: []
};
if (error instanceof Error) {
sanitisedError.details.push(error.stack);
} else if (error instanceof HttpErrorResponse) {
sanitisedError.details = Object.keys(error)
.map((key: string) =&gt; `${key}: ${error[key]}`);
} else {
sanitisedError.details.push(JSON.stringify(error));
}
return sanitisedError;
}
// ...
}
</code></pre>
<p>With a rather simple <em>sanitiseError</em> method we create an object which is based on our previously defined interface. We check for error types and populate the data accordingly. The more interesting part is using the injector to get <em>ngZone</em>. When an error happens asynchronously, it usually happens outside change detection. We wrap our <em>attachPortal</em> with <em>ngZone.run(/* ... */)</em>, so when an <em>HttpErrorResponse</em> is caught, it is rendered properly in our modal.</p>
<p>While the current state works nicely, it still lacks customisation. We use the Overlay from the CDK module, so exposing an injection token for custom configurations would be nice. Another important shortcoming of this module is that when this module is used, another module can't be used for error handling. For example, integrating Sentry would require you to implement a similar, but lightweight ErrorHandler module. In order to be able to use both, we should implement the possibility of using hooks inside our error handler. First, let's create our <em>InjectionToken</em> and our default configuration:</p>
import {DEFAULT_OVERLAY_CONFIG} from './constants/error-handler.constants';
import {ErrorHandlerConfig} from './interfaces/error-handler.interfaces';
export const DEFAULT_ERROR_HANDLER_CONFIG: ErrorHandlerConfig = {
overlayConfig: DEFAULT_OVERLAY_CONFIG,
errorHandlerHooks: []
};
export const ERROR_HANDLER_CONFIG: InjectionToken&lt;ErrorHandlerConfig&gt; = new InjectionToken('btp-eh-conf');
</code></pre>
<p>Then provide it with our module, using our existing <em>forRoot</em> method:</p>
declarations: [ErrorHandlerComponent],
imports: [CommonModule, OverlayModule, A11yModule],
entryComponents: [ErrorHandlerComponent]
})
export class ErrorHandlerModule {
public static forRoot(): ModuleWithProviders {
return {
ngModule: ErrorHandlerModule,
providers: [
{provide: ErrorHandler, useClass: ErrorHandlerService},
{provide: OverlayContainer, useClass: FullscreenOverlayContainer},
{provide: ERROR_HANDLER_CONFIG, useValue: DEFAULT_ERROR_HANDLER_CONFIG}
]
};
}
}
</code></pre>
<p>Then integrate this config handling into our <em>ErrorHandlerService</em> as well:</p>
@Injectable({
providedIn: 'root'
})
export class ErrorHandlerService implements ErrorHandler {
// ...
handleError(error: any): void {
const sanitised = this.sanitiseError(error);
const {overlayConfig, errorHandlerHooks} = this.injector.get(ERROR_HANDLER_CONFIG);
const ngZone = this.injector.get(NgZone);
this.runHooks(errorHandlerHooks, error);
const overlayRef = this.createOverlayReference(overlayConfig);
ngZone.run(() =&gt; {
this.attachPortal(overlayRef, sanitised).subscribe(() =&gt; {
overlayRef.dispose();
});
});
}
// ...
private runHooks(errorHandlerHooks: Array&lt;(error: any) =&gt; void&gt; = [], error): void {
errorHandlerHooks.forEach((hook) =&gt; hook(error));
}
private createOverlayReference(overlayConfig: OverlayConfig): OverlayRef {
const overlaySettings: OverlayConfig = {...DEFAULT_OVERLAY_CONFIG, ...overlayConfig};
return this.overlay.create(overlaySettings);
}
// ...
}
</code></pre>
<p>And we are almost ready. Let's integrate a third-party error handler hook into our application:</p>
const CustomErrorHandlerConfig: ErrorHandlerConfig = {
errorHandlerHooks: [
ThirdPartyErrorLogger.logErrorMessage,
LoadingIndicatorControl.stopLoadingIndicator,
]
};
@NgModule({
declarations: [
AppComponent,
MainComponent
],
imports: [
BrowserModule,
HttpClientModule,
ErrorHandlerModule.forRoot(),
AppRoutingModule,
],
providers: [
{provide: ERROR_HANDLER_CONFIG, useValue: CustomErrorHandlerConfig}
],
bootstrap: [AppComponent]
})
export class AppModule {
}
</code></pre>
<p>As you can see, handling errors is an extremely important part of software development, but it can also be fun.</p>
<p>Thank you very much for reading this blog post. If you prefer reading code, please check out my <a href="https://github.com/TapaiBalazs/angular-reusables">ng-reusables git repository</a>. You can also try out the implementation using this <a href="https://www.npmjs.com/package/@btapai/ng-error-handler">npm package</a>.</p>
<p>You can also follow me on <a href="https://twitter.com/TapaiBalazs">Twitter</a> or <a href="https://github.com/TapaiBalazs">GitHub</a>.</p>
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
