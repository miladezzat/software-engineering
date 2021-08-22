---
card: "https://cdn-media-1.freecodecamp.org/images/1*TtrtAMfn2PATB_nD8YpeAA.png"
tags: [Angular]
description: "by Shlomi Levi"
author: "Milad E. Fahmy"
title: "48 answers on StackOverflow to the most popular Angular questions"
created: "2021-08-16T10:16:23+02:00"
modified: "2021-08-16T10:16:23+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-angular tag-stackoverflow tag-web-development tag-tech tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">48 answers on StackOverflow to the most popular Angular questions</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*TtrtAMfn2PATB_nD8YpeAA.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*TtrtAMfn2PATB_nD8YpeAA.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*TtrtAMfn2PATB_nD8YpeAA.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*TtrtAMfn2PATB_nD8YpeAA.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*TtrtAMfn2PATB_nD8YpeAA.png" alt="48 answers on StackOverflow to the most popular Angular questions">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
constructor(){
//called first time before the ngOnInit()
}
ngOnInit(){
//called after the constructor and called  after the first ngOnChanges()
}
}</code></pre><p><code>Implement this interface to execute custom initialization logic after your directive's data-bound properties have been initialized. ngOnInit is called right after the directive's data-bound properties have been checked for the first time, and before any of its children have been checked. It is invoked only once when the directive is instantiated.</code></p><p>Mostly we use <code>ngOnInit</code> for all the initialization/declaration and avoid stuff to work in the constructor. The constructor should only be used to initialize class members but shouldn't do actual "work".</p><p>So you should use <code>constructor()</code> to setup Dependency Injection and not much else. ngOnInit() is better place to "start" - it's where/when components' bindings are resolved.</p><p>For more information refer here:</p><ul><li><a href="https://angular.io/api/core/OnInit" rel="noopener">https://angular.io/api/core/OnInit</a></li><li><a href="https://stackoverflow.com/a/35846307/5043867" rel="noopener">Angular 2 Component Constructor Vs OnInit</a></li></ul><p><a href="https://stackoverflow.com/questions/35763730" rel="noopener"><strong>Source</strong></a><br><strong><a href="#599b" rel="noopener">Top</a></strong></p><h3 id="can-t-bind-to-ngmodel-since-it-isn-t-a-known-property-of-input-">Can’t bind to ‘ngModel’ since it isn’t a known property of ‘input’</h3><blockquote>442+ points <em>? 2</em>46,901+ viewed <br><em><strong><a href="https://stackoverflow.com/users/3433751/anthony-breneli%C3%A8re">abreneliere</a> asked,</strong></em></blockquote><p>I’ve got the following error when launching my Angular app, even if the component is not displayed.</p><p>I have to comment out the so that my app works.</p><pre><code class="language-bash">zone.js:461 Unhandled Promise rejection: Template parse errors:
Can't bind to 'ngModel' since it isn't a known property of 'input'. ("
&lt;div&gt;
&lt;label&gt;Created:&lt;/label&gt;
&lt;input  type="text" [ERROR -&gt;][(ngModel)]="test" placeholder="foo" /&gt;
&lt;/div&gt;
&lt;/div&gt;"): InterventionDetails@4:28 ; Zone: &lt;root&gt; ; Task: Promise.then ; Value:</code></pre><p>I’m looking at the Hero plucker but I don’t see any difference.</p><p>Here is the component file:</p><pre><code class="language-js">import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Intervention } from '../../model/intervention';
@Component({
selector: 'intervention-details',
templateUrl: 'app/intervention/details/intervention.details.html',
styleUrls: ['app/intervention/details/intervention.details.css']
})
export class InterventionDetails
{
@Input() intervention: Intervention;
public test : string = "toto";
}</code></pre><blockquote><a href="https://stackoverflow.com/users/3433751" rel="noopener"><strong><em>abreneliere</em></strong></a><strong><em> answered, (674+ points)</em></strong></blockquote><p>Yes that’s it, in the app.module.ts, I just added :</p><pre><code class="language-js">import { FormsModule } from '@angular/forms';
[...]
@NgModule({
imports: [
[...]
FormsModule
],
[...]
})</code></pre><p><a href="https://stackoverflow.com/questions/38892771" rel="noopener"><strong>Source</strong></a><br><strong><a href="#599b" rel="noopener">Top</a></strong></p><h3 id="angular-html-binding">Angular HTML binding</h3><blockquote>385+ points <em>? 2</em>27,115+ viewed <br><em><strong><a href="https://stackoverflow.com/users/3433751/anthony-breneli%C3%A8re">Aviad P.</a> asked,</strong></em></blockquote><p>I am writing an Angular application, and I have an HTML response I want to display. How do I do that? If I simply use the binding syntax <code>{{myVal}}</code> it encodes all HTML characters (of course).</p><p>I need somehow to bind the inner html of a div to the variable value.</p><blockquote><a href="https://stackoverflow.com/users/427763" rel="noopener"><strong><em>prolink007</em></strong></a><strong><em> answered, (691+ points)</em></strong></blockquote><p>The correct syntax is now the following:</p><pre><code class="language-html">&lt;div [innerHTML]="theHtmlString"&gt;&lt;/div&gt;</code></pre><p>Working in <code>5.2.6</code></p><p><a href="https://angular.io/docs/ts/latest/guide/template-syntax.html#!#property-binding-or-interpolation-" rel="noopener">Documentation Reference</a></p><p><a href="https://stackoverflow.com/questions/31548311" rel="noopener"><strong>Source</strong></a><br><strong><a href="#599b" rel="noopener">Top</a></strong></p><h3 id="angular-rxjs-when-should-i-unsubscribe-from-subscription-">Angular/RxJs When should I unsubscribe from `Subscription`</h3><blockquote>320+ points <em>? 6</em>9,606+ viewed <br><em><strong><a href="https://stackoverflow.com/users/1429493/sergey-tihon">Sergey Tihon</a> asked,</strong></em></blockquote><p>When should I store the <code>Subscription</code> instances and invoke <code>unsubscribe()</code> during the NgOnDestroy lifecycle and when can I simply ignore them?</p><p>Saving all subscriptions introduces a lot of mess into component code.</p><p><a href="https://angular.io/docs/ts/latest/guide/server-communication.html" rel="noopener">HTTP Client Guide</a> ignore subscriptions like this:</p><pre><code class="language-js">getHeroes() {
this.heroService.getHeroes()
.subscribe(
heroes =&gt; this.heroes = heroes,
error =&gt;  this.errorMessage = &lt;any&gt;error);
}</code></pre><p>In the same time <a href="https://angular.io/docs/ts/latest/guide/router.html" rel="noopener">Route &amp; Navigation Guide</a> says that:</p><p><code>Eventually, we'll navigate somewhere else. The router will remove this component from the DOM and destroy it. We need to clean up after ourselves before that happens. Specifically, we must unsubscribe before Angular destroys the component. Failure to do so could create a memory leak.</code></p><p><code>We unsubscribe from our Observable in the ngOnDestroy method.</code></p><pre><code class="language-js">private sub: any;
ngOnInit() {
this.sub = this.route.params.subscribe(params =&gt; {
let id = +params['id']; // (+) converts string 'id' to a number
this.service.getHero(id).then(hero =&gt; this.hero = hero);
});
}
ngOnDestroy() {
this.sub.unsubscribe();
}</code></pre><blockquote><a href="https://stackoverflow.com/users/939634" rel="noopener"><strong><em>seangwright</em></strong></a><strong><em> answered, (508+ points)</em></strong></blockquote><h4 id="-edit-3-the-official-solution-2017-04-09-">— — Edit 3 — The ‘Official’ Solution (2017/04/09)</h4><p>I spoke with Ward Bell about this question at NGConf (I even showed him this answer which he said was correct) but he told me the docs team for Angular had a solution to this question that is unpublished (though they are working on getting it approved). He also told me I could update my SO answer with the forthcoming official recommendation.</p><p>The solution we should all use going forward is to add a <code>private ngUnsubscribe: Subject = new Subject();</code> field to all components that have <code>.subscribe()</code> calls to <code>Observable</code>s within their class code.</p><p>We then call <code>this.ngUnsubscribe.next(); this.ngUnsubscribe.complete();</code> in our <code>ngOnDestroy()</code> methods.</p><p>The secret sauce (as noted already by <a href="https://stackoverflow.com/a/42695571/939634" rel="noopener">@metamaker</a>) is to call <code>.takeUntil(this.ngUnsubscribe)</code> before each of our <code>.subscribe()</code> calls which will guarantee all subscriptions will be cleaned up when the component is destroyed.</p><p>Example:</p><pre><code class="language-js">import { Component, OnDestroy, OnInit } from '@angular/core';
import 'rxjs/add/operator/takeUntil';
// import { takeUntil } from 'rxjs/operators'; // for rxjs ^5.5.0 lettable operators
import { Subject } from 'rxjs/Subject';
import { MyThingService } from '../my-thing.service';
@Component({
selector: 'my-thing',
templateUrl: './my-thing.component.html'
})
export class MyThingComponent implements OnDestroy, OnInit {
private ngUnsubscribe: Subject = new Subject();
constructor(
private myThingService: MyThingService,
) { }
ngOnInit() {
this.myThingService.getThings()
.takeUntil(this.ngUnsubscribe)
.subscribe(things =&gt; console.log(things));
/* if using lettable operators in rxjs ^5.5.0
this.myThingService.getThings()
.pipe(takeUntil(this.ngUnsubscribe))
.subscribe(things =&gt; console.log(things));
*/
this.myThingService.getOtherThings()
.takeUntil(this.ngUnsubscribe)
.subscribe(things =&gt; console.log(things));
}
ngOnDestroy() {
this.ngUnsubscribe.next();
this.ngUnsubscribe.complete();
}
}</code></pre><h4 id="-edit-2-2016-12-28-">— — Edit 2 (2016/12/28)</h4><p><strong>Source 5</strong></p><p>The Angular tutorial, the Routing chapter now states the following: “The Router manages the observables it provides and localizes the subscriptions. The subscriptions are cleaned up when the component is destroyed, protecting against memory leaks, so we don’t need to unsubscribe from the route params Observable.” — <a href="https://stackoverflow.com/questions/38008334/angular2-rxjs-when-should-i-unsubscribe-from-subscription/41177163?noredirect=1#comment69909721_41177163" rel="noopener">Mark Rajcok</a></p><p>Here’s a <a href="https://github.com/angular/angular.io/issues/3003#issuecomment-268429065" rel="noopener">discussion</a> on the Github issues for the Angular docs regarding Router Observables where Ward Bell mentions that clarification for all of this is in the works.</p><h4 id="-edit-1">— — Edit 1</h4><p><strong>Source 4</strong></p><p>In this <a href="https://youtu.be/WWR9nxVx1ec?t=20m32s" rel="noopener">video from NgEurope</a> Rob Wormald also says you do not need to unsubscribe from Router Observables. He also mentions the <code>http</code> service and <code>ActivatedRoute.params</code> in this <a href="https://youtu.be/VLGCCpOWFFw?t=33m37s" rel="noopener">video from November 2016</a>.</p><h4 id="-original-answer">— — Original Answer</h4><p><strong>TLDR:</strong></p><p>For this question there are (2) kinds of <code>Observables</code> - <strong>finite</strong> value and <strong>infinite</strong> value.</p><p><code>http</code> <code>Observables</code> produce <strong>finite</strong> (1) values and something like a DOM <code>event listener</code> <code>Observables</code> produce <strong>infinite</strong> values.</p><p>If you manually call <code>subscribe</code> (not using async pipe), then <code>unsubscribe</code> from <strong>infinite</strong> <code>Observables</code>.</p><p>Don’t worry about <strong>finite</strong> ones, <code>RxJs</code> will take care of them.</p><p><strong>Source 1</strong></p><p>I tracked down an answer from Rob Wormald in Angular’s Gitter <a href="https://gitter.im/angular/angular?at=5681e8fa3c68940269251fa5" rel="noopener">here</a>.</p><p>He states (i reorganized for clarity and emphasis is mine)</p><p><code>if it's <strong>a single-value-sequence</strong> (like an http request) the <strong>manual cleanup is unnecessary</strong> (assuming you subscribe in the controller manually)</code></p><p><code>i should say "if it's a <strong>sequence that completes</strong>" (of which single value sequences, a la http, are one)</code></p><p><code><strong>if it's an infinite sequence</strong>, <strong>you should unsubscribe</strong> which the async pipe does for you</code></p><p>Also he mentions in this <a href="https://youtu.be/UHI0AzD_WfY?t=26m42s" rel="noopener">youtube video</a> on Observables that <code>they clean up after themselves</code>... in the context of Observables that <code>complete</code> (like Promises, which always complete because they are always producing 1 value and ending - we never worried about unsubscribing from Promises to make sure they clean up <code>xhr</code> event listeners, right?).</p><p><strong>Source 2</strong></p><p>Also in the <a href="https://angular-2-training-book.rangle.io/handout/observables/disposing_subscriptions_and_releasing_resources.html" rel="noopener">Rangle guide to Angular 2</a> it reads</p><p><code>In most cases we will not need to explicitly call the unsubscribe method unless we want to cancel early or our Observable has a longer lifespan than our subscription. The default behavior of Observable operators is to dispose of the subscription as soon as .complete() or .error() messages are published. Keep in mind that RxJS was designed to be used in a "fire and forget" fashion most of the time.</code></p><p>When does the phrase <code>our Observable has a longer lifespan than our subscription</code> apply?</p><p>It applies when a subscription is created inside a component which is destroyed before (or not ‘long’ before) the <code>Observable</code> completes.</p><p>I read this as meaning if we subscribe to an <code>http</code> request or an observable that emits 10 values and our component is destroyed before that <code>http</code> request returns or the 10 values have been emitted, we are still ok!</p><p>When the request does return or the 10th value is finally emitted the <code>Observable</code> will complete and all resources will be cleaned up.</p><p><strong>Source 3</strong></p><p>If we look at <a href="https://angular-2-training-book.rangle.io/handout/routing/routeparams.html" rel="noopener">this example</a> from the same Rangle guide we can see that the <code>Subscription</code> to <code>route.params</code> does require an <code>unsubscribe()</code> because we don't know when those <code>params</code> will stop changing (emitting new values).</p><p>The component could be destroyed by navigating away in which case the route params will likely still be changing (they could technically change until the app ends) and the resources allocated in subscription would still be allocated because there hasn’t been a <code>completion</code>.</p><p><a href="https://stackoverflow.com/questions/38008334" rel="noopener"><strong>Source</strong></a><br><strong><a href="#599b" rel="noopener">Top</a></strong></p><h3 id="how-can-i-select-an-element-in-a-component-template">How can I select an element in a component template?</h3><blockquote>263+ points <em>? 2</em>65,966+ viewed <br><em><strong><a href="https://stackoverflow.com/users/2748475/aman-gupta">Aman Gupta</a> asked,</strong></em></blockquote><p>Does anybody know how to get hold of an element defined in a component template? Polymer makes it really easy with the <code>$</code> and <code>$$</code>.</p><p>I was just wondering how to go about it in Angular.</p><p>Take the example from the tutorial:</p><pre><code class="language-js">import {Component} from '@angular/core'
@Component({
selector:'display'
template:`
&lt;input #myname(input)="updateName(myname.value)"/&gt;
&lt;p&gt;My name : {{myName}}&lt;/p&gt;
`
})
export class DisplayComponent {
myName: string = "Aman";
updateName(input: String) {
this.myName = input;
}
}</code></pre><p>How do I catch hold of a reference of the <code>p</code> or <code>input</code> element from within the class definition?</p><blockquote><a href="https://stackoverflow.com/users/1413538" rel="noopener"><strong><em>Brocco</em></strong></a><strong><em> answered, (149+ points)</em></strong></blockquote><p>You can get a handle to the DOM element via <code>ElementRef</code> by injecting it into your component's constructor:</p><pre><code class="language-js">constructor(myElement: ElementRef) { ... }</code></pre><p>Docs: <a href="https://angular.io/docs/ts/latest/api/core/index/ElementRef-class.html" rel="noopener">https://angular.io/docs/ts/latest/api/core/index/ElementRef-class.html</a></p><p><a href="https://stackoverflow.com/questions/32693061" rel="noopener"><strong>Source</strong></a><br><strong><a href="#599b" rel="noopener">Top</a></strong></p><h3 id="what-is-the-equivalent-of-ngshow-and-nghide-in-angular">What is the equivalent of ngShow and ngHide in Angular?</h3><blockquote>261+ points <em>? 2</em>06,651+ viewed <br><strong><a href="https://stackoverflow.com/users/2870735/mihai-r%C4%83ducanu">Mihai Răducanu</a> </strong><em><strong>asked,</strong></em></blockquote><p>I have a number of elements that I want to be visible under certain conditions.</p><p>In AngularJS I would write</p><pre><code class="language-html">&lt;div ng-show="myVar"&gt;stuff&lt;/div&gt;</code></pre><p>How can I do this in Angular?</p><blockquote><a href="https://stackoverflow.com/users/217408" rel="noopener"><strong><em>Günter Zöchbauer</em></strong></a><strong><em> answered, (445+ points)</em></strong></blockquote><p>Just bind to the <code>hidden</code> property</p><pre><code class="language-html">[hidden]="!myVar"</code></pre><p>See also</p><ul><li><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/hidden" rel="noopener">https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/hidden</a></li></ul><p><strong>issues</strong></p><p><code>hidden</code> has some issues though because it can conflict with CSS for the <code>display</code> property.</p><p>See how <code>some</code> in <a href="https://plnkr.co/edit/SO3c3UUT3LBvhNAeriCz?p=preview" rel="noopener"><strong>Plunker example</strong></a> doesn't get hidden because it has a style</p><pre><code class="language-css">:host {display: block;}</code></pre><p>set. (This might behave differently in other browsers — I tested with Chrome 50)</p><p><strong>workaround</strong></p><p>You can fix it by adding</p><pre><code class="language-css">[hidden] { display: none !important;}</code></pre><p>To a global style in <code>index.html</code>.</p><p><strong>another pitfall</strong></p><pre><code class="language-html">hidden="false"
hidden="{{false}}"
hidden="{{isHidden}}" // isHidden = false;</code></pre><p>are the same as</p><pre><code class="language-html">hidden="true"</code></pre><p>and will not show the element.</p><p><code>hidden="false"</code> will assign the string <code>"false"</code> which is considered truthy.<br>Only the value <code>false</code> or removing the attribute will actually make the element visible.</p><p>Using <code>{{}}</code> also converts the expression to a string and won't work as expected.</p><p>Only binding with <code>[]</code> will work as expected because this <code>false</code> is assigned as <code>false</code> instead of <code>"false"</code>.</p><p><code><strong>*ngIf</strong></code><strong> vs <code>[hidden]</code></strong></p><p><code>*ngIf</code> effectively removes its content from the DOM while <code>[hidden]</code> modifies the <code>display</code> property and only instructs the browser to not show the content but the DOM still contains it.</p><p><a href="https://stackoverflow.com/questions/35578083" rel="noopener"><strong>Source</strong></a><br><strong><a href="#599b" rel="noopener">Top</a></strong></p><h3 id="how-to-bundle-an-angular-app-for-production">How to bundle an Angular app for production</h3><blockquote>258+ points <em>? 1</em>11,603+ viewed <br><em><strong><a href="https://stackoverflow.com/users/4155124/pat-m">Pat M</a> asked,</strong></em></blockquote><p>I would like to track and update in this thread the latest best (and hopefully the simplest) method to bundle Angular (version 2, 4, …) for production on a live web server.</p><p>Please include the Angular version within answers so we can track better when it moves to later releases.</p><blockquote><a href="https://stackoverflow.com/users/1630604" rel="noopener"><strong><em>Nicolas Henneaux</em></strong></a><strong><em> answered, (267+ points)</em></strong></blockquote><h4 id="2-x-4-x-5-x-typescript-with-angular-cli"><code>2.x, 4.x, 5.x</code> (TypeScript) with Angular CLI</h4><h4 id="onetime-setup">OneTime Setup</h4><ul><li><code>npm install -g @angular/cli</code></li><li><code>ng new projectFolder</code> creates a new application</li></ul><h4 id="bundling-step">Bundling Step</h4><ul><li><code>ng build --prod</code> (run in command line when directory is <code>projectFolder</code>)</li><li><em>flag <code>prod</code> bundle for production (see the <a href="https://github.com/angular/angular-cli/wiki/build#--dev-vs---prod-builds" rel="noopener">Angular documentation</a> for the list of option included with the production flag).</em></li><li>Compress using <a href="https://en.wikipedia.org/wiki/Brotli" rel="noopener">Brotli compression</a> the resources using the following command<code>for i in dist/*; do brotli $i; done</code></li></ul><p><em>bundles are generated by default to <strong>projectFolder/dist/</strong></em></p><h4 id="output">Output</h4><p><em>Sizes with Angular <code>5.2.8</code> with CLI <code>1.7.2</code></em></p><ul><li><code>dist/main.[hash].bundle.js</code> Your application bundled [ size: 151 KB for new Angular CLI application empty, <strong>36 KB</strong> compressed].</li><li><code>dist/polyfill.[hash].bundle.js</code> the polyfill dependencies (@angular, RxJS...) bundled [ size: 58 KB for new Angular CLI application empty, <strong>17 KB</strong> compressed].</li><li><code>dist/index.html</code> entry point of your application.</li><li><code>dist/inline.[hash].bundle.js</code> webpack loader</li><li><code>dist/style.[hash].bundle.css</code> the style definitions</li><li><code>dist/assets</code> resources copied from the Angular CLI assets configuration</li></ul><h4 id="deployment">Deployment</h4><p>You can get a preview of your application using the <code>ng serve --prod</code> command that starts a local HTTP server such that the application with production files is accessible using <a href="http://localhost:4200" rel="noopener">http://localhost:4200</a>.</p><p>For a production usage, you have to deploy all the files from the <code>dist</code> folder in the HTTP server of your choice.</p><p><a href="https://stackoverflow.com/questions/37631098" rel="noopener"><strong>Source</strong></a><br><strong><a href="#599b" rel="noopener">Top</a></strong></p><h3 id="behaviorsubject-vs-observable">BehaviorSubject vs Observable?</h3><blockquote>250+ points <em>? 1</em>22,248+ viewed <br><em><strong><a href="https://stackoverflow.com/users/6620551/kevin-mark">Kevin Mark</a> asked,</strong></em></blockquote><p>I’m looking into Angular RxJs patterns and I don’t understand the difference between a BehaviorSubject and an Observable.</p><p>From my understanding, a BehaviorSubject is a value that can change over time (can be subscribed to and subscribers can receive updated results). This seems to be the exact same purpose of an Observable.</p><p>When would you use an Observable vs a BehaviorSubject? Are there benefits to using a BehaviorSubject over an Observable or vice versa?</p><blockquote><a href="https://stackoverflow.com/users/3070452" rel="noopener"><strong><em>Shantanu Bhadoria</em></strong></a><strong><em> answered, (425+ points)</em></strong></blockquote><p>BehaviorSubject is a type of subject, a subject is a special type of observable so you can subscribe to messages like any other observable. The unique features of BehaviorSubject are:</p><ul><li>It needs an initial value as it must always return a value on subscription even if it hasn’t received a <code>next()</code></li><li>Upon subscription it returns the last value of the subject. A regular observable only triggers when it receives an <code>onnext</code></li><li>at any point you can retrieve the last value of the subject in a non-observable code using the <code>getValue()</code> method.</li></ul><p>Unique features of a subject compared to an observable are:</p><ul><li>It is an observer in addition to being an observable so you can also send values to a subject in addition to subscribing to it.</li></ul><p>In addition you can get an observable from behavior subject using the <code>asobservable()</code> method on BehaviorSubject.</p><p>Observable is a Generic, and BehaviorSubject is technically a sub-type of Observable because BehaviorSubject is an observable with specific qualities.</p><p>Example with BehaviorSubject:</p><pre><code class="language-js">// Behavior Subject
// a is an initial value. if there is a subscription
// after this, it would get "a" value immediately
let bSubject = new BehaviorSubject("a");
bSubject.next("b");
bSubject.subscribe((value) =&gt; {
console.log("Subscription got", value); // Subscription got b,
// ^ This would not happen
// for a generic observable
// or generic subject by default
});
bSubject.next("c"); // Subscription got c
bSubject.next("d"); // Subscription got d</code></pre><p>Example 2 with regular subject:</p><pre><code class="language-js">// Regular Subject
let subject = new Subject();
subject.next("b");
subject.subscribe((value) =&gt; {
console.log("Subscription got", value); // Subscription wont get
// anything at this point
});
subject.next("c"); // Subscription got c
subject.next("d"); // Subscription got d</code></pre><p>An observable can be created from both Subject and BehaviorSubject using <code>subject.asobservable()</code>. Only difference being you can't send values to an observable using <code>next()</code> method.</p><p>In Angular services, I would use BehaviorSubject for a data service as a angular service often initializes before component and behavior subject ensures that the component consuming the service receives the last updated data even if there are no new updates since the component’s subscription to this data.</p><p><a href="https://stackoverflow.com/questions/39494058" rel="noopener"><strong>Source</strong></a><br><strong><a href="#599b" rel="noopener">Top</a></strong></p><h3 id="-directive-v-s-component-in-angular">@Directive v/s @Component in Angular</h3><blockquote>239+ points <em>? 6</em>1,582+ viewed <br><em><a href="https://stackoverflow.com/users/4917853/prasanjit-dey"><strong>Prasanjit Dey</strong></a><strong> asked,</strong></em></blockquote><p>What is the difference between <code>@Component</code> and <code>@Directive</code> in Angular? Both of them seem to do the same task and have the same attributes.</p><p>What are the use cases and when to prefer one over another?</p><blockquote><a href="https://stackoverflow.com/users/1771017" rel="noopener"><strong><em>jaker</em></strong></a><strong><em> answered, (327+ points)</em></strong></blockquote><p><strong>A @Component requires a view whereas a @Directive does not.</strong></p><h3 id="directives">Directives</h3><p>I liken a @Directive to an Angular 1.0 directive with the option <code>restrict: 'A'</code> (Directives aren't limited to attribute usage.) Directives add behaviour to an existing DOM element or an existing component instance. One example use case for a directive would be to log a click on an element.</p><pre><code class="language-js">import {Directive} from '@angular/core';
@Directive({
selector: "[logOnClick]",
hostListeners: {
'click': 'onClick()',
},
})
class LogOnClick {
constructor() {}
onClick() { console.log('Element clicked!'); }
@Component({
template: `
&lt;div&gt;
&lt;h1&gt;{{name}}&lt;/h1&gt;
&lt;p&gt;{{city}}&lt;/p&gt;
&lt;/div&gt;
`
})
class ContactCard {
@Input() name: string
@Input() city: string
constructor() {}
import {Hall} from "./hall";
import {Http} from "angular2/http";
@Injectable()
export class HallService {
public http:Http;
public static PATH:string = 'app/backend/'
constructor(http:Http) {
this.http=http;
}
getHalls() {
return this.http.get(HallService.PATH + 'hall.json').map((res:Response) =&gt; res.json());
}
}</code></pre><p>And in the <code>HallListComponent</code> I call the <code>getHalls</code> method from the service:</p><pre><code class="language-js">export class HallListComponent implements OnInit {
public halls:Hall[];
public _selectedId:number;
constructor(private _router:Router,
private _routeParams:RouteParams,
private _service:HallService) {
this._selectedId = +_routeParams.get('id');
}
ngOnInit() {
this._service.getHalls().subscribe((halls:Hall[])=&gt;{
this.halls=halls;
});
}
}</code></pre><p>However, I got an exception:</p><p><code>TypeError: this.http.get(...).map is not a function in [null]</code></p><h4 id="hall-center-component">hall-center.component</h4><pre><code class="language-js">import {Component} from "angular2/core";
import {RouterOutlet} from "angular2/router";
import {HallService} from "./hall.service";
import {RouteConfig} from "angular2/router";
import {HallListComponent} from "./hall-list.component";
import {HallDetailComponent} from "./hall-detail.component";
@Component({
template:`
&lt;h2&gt;my app&lt;/h2&gt;
&lt;router-outlet&gt;&lt;/router-outlet&gt;
`,
directives: [RouterOutlet],
providers: [HallService]
})
@RouteConfig([
{path: '/',   name: 'HallCenter', component:HallListComponent, useAsDefault:true},
{path: '/hall-list', name: 'HallList', component:HallListComponent}
])
export class HallCenterComponent{}</code></pre><h4 id="app-component">app.component</h4><pre><code class="language-js">import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from "angular2/router";
import {RouteConfig} from "angular2/router";
import {HallCenterComponent} from "./hall/hall-center.component";
@Component({
selector: 'my-app',
template: `
&lt;h1&gt;Examenopdracht Factory&lt;/h1&gt;
&lt;a [routerLink]="['HallCenter']"&gt;Hall overview&lt;/a&gt;
&lt;router-outlet&gt;&lt;/router-outlet&gt;
`,
directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
{path: '/hall-center/...', name:'HallCenter',component:HallCenterComponent,useAsDefault:true}
])
export class AppComponent { }</code></pre><h4 id="tsconfig-json">tsconfig.json</h4><pre><code class="language-json">{
"compilerOptions": {
"target": "ES5",
"module": "system",
"moduleResolution": "node",
"sourceMap": true,
"emitDecoratorMetadata": true,
"experimentalDecorators": true,
"removeComments": false,
"noImplicitAny": false
},
"exclude": [
"node_modules"
]
}</code></pre><blockquote><a href="https://stackoverflow.com/users/1873365" rel="noopener"><strong><em>Thierry Templier</em></strong></a><strong><em> answered, (416+ points)</em></strong></blockquote><p>I think that you need to import this:</p><pre><code class="language-js">import 'rxjs/add/operator/map'</code></pre><p>Or more generally this if you want to have more methods for observables. <strong>WARNING: This will import all 50+ operators and add them to your application, thus affecting your bundle size and load times.</strong></p><pre><code class="language-js">import 'rxjs/Rx';</code></pre><p>See <a href="https://github.com/angular/angular/issues/5632#issuecomment-167026172" rel="noopener">this issue</a> for more details.</p><p><a href="https://stackoverflow.com/questions/34515173" rel="noopener"><strong>Source</strong></a><br><strong><a href="#599b" rel="noopener">Top</a></strong></p><h3 id="how-to-use-jquery-with-angular">How to use jQuery with Angular?</h3><blockquote>233+ points <em>? 2</em>46,869+ viewed <br><em><strong><a href="https://stackoverflow.com/users/2398523/waog">Waog </a>asked,</strong></em></blockquote><p>Can anyone tell me, how to use <strong>jQuery</strong> with <strong>Angular</strong>?</p><pre><code class="language-js">class MyComponent {
constructor() {
// how to query the DOM element from here?
}
}</code></pre><p>I’m aware there are workarounds like manipulating the <em>class</em> or <em>id</em> of the DOM element upfront, but I’m hoping for a cleaner way of doing it.</p><blockquote><a href="https://stackoverflow.com/users/2881743" rel="noopener"><strong><em>werenskjold</em></strong></a><strong><em> answered, (258+ points)</em></strong></blockquote><p>Using jQuery from Angular2 is a breeze compared to ng1. If you are using TypeScript you could first reference jQuery typescript definition.</p><pre><code class="language-bash">tsd install jquery --save
or
typings install dt~jquery --global --save</code></pre><p>TypescriptDefinitions are not required since you could just use <code>any</code> as the type for <code>$</code> or <code>jQuery</code></p><p>In your angular component you should reference a DOM element from the template using <code>@ViewChild()</code> After the view has been initialized you can use the <code>nativeElement</code> property of this object and pass to jQuery.</p><p>Declaring <code>$</code> (or <code>jQuery</code>) as JQueryStatic will give you a typed reference to jQuery.</p><pre><code class="language-ts">import {bootstrap}    from '@angular/platform-browser-dynamic';
import {Component, ViewChild, ElementRef, AfterViewInit} from '@angular/core';
declare var $:JQueryStatic;
@Component({
selector: 'ng-chosen',
template: `&lt;select #selectElem&gt;
&lt;option *ngFor="#item of items" [value]="item" [selected]="item === selectedValue"&gt;{{item}} option&lt;/option&gt;
&lt;/select&gt;
&lt;h4&gt; {{selectedValue}}&lt;/h4&gt;`
})
export class NgChosenComponent implements AfterViewInit {
@ViewChild('selectElem') el:ElementRef;
items = ['First', 'Second', 'Third'];
selectedValue = 'Second';
ngAfterViewInit() {
$(this.el.nativeElement)
.chosen()
.on('change', (e, args) =&gt; {
this.selectedValue = args.selected;
});
}
}
bootstrap(NgChosenComponent);</code></pre><p>This example is available on plunker: <a href="http://plnkr.co/edit/Nq9LnK?p=preview" rel="noopener">http://plnkr.co/edit/Nq9LnK?p=preview</a></p><p>tslint will complain about <code>chosen</code> not being a property on $, to fix this you can add a definition to the JQuery interface in your custom *.d.ts file</p><pre><code class="language-js">interface JQuery {
chosen(options?:any):JQuery;
}</code></pre><p><a href="https://stackoverflow.com/questions/30623825" rel="noopener"><strong>Source</strong></a><br><strong><a href="#599b" rel="noopener">Top</a></strong></p><h3 id="angular-exception-no-provider-for-http">Angular EXCEPTION: No provider for Http</h3><blockquote>230+ points <em>? 1</em>42,976+ viewed <br><em><strong><a href="https://stackoverflow.com/users/516389/daniel">daniel</a> asked,</strong></em></blockquote><p>I am getting the <code>EXCEPTION: No provider for Http!</code> in my Angular app. What am I doing wrong?</p><pre><code class="language-ts">import {Http, Headers} from 'angular2/http';
import {Injectable} from 'angular2/core'
@Component({
selector: 'greetings-ac-app2',
providers: [],
templateUrl: 'app/greetings-ac2.html',
directives: [NgFor, NgModel, NgIf, FORM_DIRECTIVES],
pipes: []
})
export class GreetingsAcApp2 {
private str:any;
constructor(http: Http) {
this.str = {str:'test'};
http.post('http://localhost:18937/account/registeruiduser/',
JSON.stringify(this.str),
{
headers: new Headers({
'Content-Type': 'application/json'
})
});</code></pre><blockquote><a href="https://stackoverflow.com/users/2083492" rel="noopener"><strong><em>Philip Miglinci</em></strong></a><strong><em> answered, (381+ points)</em></strong></blockquote><p>Import the HttpModule</p><pre><code class="language-ts">import { HttpModule } from '@angular/http';
@NgModule({
imports: [ BrowserModule, HttpModule ],
providers: [],
declarations: [ AppComponent ],
bootstrap: [ AppComponent ]
})
export default class AppModule { }
&lt;div class="form-group"&gt;
&lt;label for="name"&gt;Name&lt;/label&gt;
&lt;input type="text" name="name" required&gt;
&lt;/div&gt;
&lt;button type="submit" class="btn btn-default"&gt;Submit&lt;/button&gt;
&lt;/form&gt;</code></pre><p>The controller:</p><pre><code class="language-ts">import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { Task } from './task';
@Component({
selector: 'task-add',
templateUrl: 'app/task-add.component.html'
})
export class TaskAddComponent {
newTaskForm: FormGroup;
constructor(fb: FormBuilder)
{
this.newTaskForm = fb.group({
name: ["", Validators.required]
});
}
createNewTask()
{
console.log(this.newTaskForm.value)
}
}</code></pre><p>The ngModule:</p><pre><code class="language-ts">import { NgModule }from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { routing }  from './app.routing';
import { AppComponent }  from './app.component';
import { TaskService } from './task.service'
@NgModule({
imports: [
BrowserModule,
routing,
FormsModule
],
declarations: [ AppComponent ],
providers: [
TaskService
],
bootstrap: [ AppComponent ]
})
export class AppModule { }</code></pre><p><strong>THE QUESTION:</strong></p><p>Why am I getting that error?</p><p>Am I missing something?</p><blockquote><a href="https://stackoverflow.com/users/6677986" rel="noopener"><strong><em>Stefan Svrkota</em></strong></a><strong><em> answered, (465+ points)</em></strong></blockquote><p><strong>RC5 FIX</strong></p><p>You need to <code>import { REACTIVE_FORM_DIRECTIVES } from '@angular/forms'</code> in your controller and add it to <code>directives</code> in <code>@Component</code>. That will fix the problem.</p><p>After you fix that, you will probably get another error because you didn’t add <code>formControlName="name"</code> to your input in form.</p><p><strong>RC6/RC7/Final release FIX</strong></p><p>To fix this error, you just need to import <code>ReactiveFormsModule</code> from <code>@angular/forms</code> in your module. Here's the example of a basic module with <code>ReactiveFormsModule</code> import:</p><pre><code class="language-ts">import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
@NgModule({
imports: [
BrowserModule,
FormsModule,
ReactiveFormsModule
],
declarations: [
AppComponent
],
bootstrap: [AppComponent]
})
export class AppModule { }</code></pre><p>To explain further, <code>formGroup</code> is a selector for directive named <code>FormGroupDirective</code> that is a part of <code>ReactiveFormsModule</code>, hence the need to import it. It is used to bind an existing <code>FormGroup</code> to a DOM element. You can read more about it on <a href="https://angular.io/docs/ts/latest/api/forms/index/FormGroupDirective-directive.html" rel="noopener">Angular's official docs page</a>.</p><p><a href="https://stackoverflow.com/questions/39152071" rel="noopener"><strong>Source</strong></a><br><strong><a href="#599b" rel="noopener">Top</a></strong></p><h3 id="angular-di-error-exception-can-t-resolve-all-parameters">Angular DI Error — EXCEPTION: Can’t resolve all parameters</h3><blockquote>221+ points <em>? 1</em>42,497+ viewed <br><em><strong><a href="https://stackoverflow.com/users/4321757/keith-otto">Keith Otto</a> asked,</strong></em></blockquote><p>I’ve built a basic app in Angular, but I have encountered a strange issue where I cannot inject a service into one of my components. It injects fine into any of the three other components I have created however.</p><p>For starters, this is the service:</p><pre><code class="language-ts">import { Injectable } from '@angular/core';
@Injectable()
export class MobileService {
screenWidth: number;
screenHeight: number;
constructor() {
this.screenWidth = window.outerWidth;
this.screenHeight = window.outerHeight;
window.addEventListener("resize", this.onWindowResize.bind(this) )
}
onWindowResize(ev: Event) {
var win = (ev.currentTarget as Window);
this.screenWidth = win.outerWidth;
this.screenHeight = win.outerHeight;
}
}</code></pre><p>And the component that it refuses to work with:</p><pre><code class="language-ts">import { Component, } from '@angular/core';
import { NgClass } from '@angular/common';
import { ROUTER_DIRECTIVES } from '@angular/router';
import {MobileService} from '../';
@Component({
moduleId: module.id,
selector: 'pm-header',
templateUrl: 'header.component.html',
styleUrls: ['header.component.css'],
directives: [ROUTER_DIRECTIVES, NgClass],
})
export class HeaderComponent {
mobileNav: boolean = false;
constructor(public ms: MobileService) {
console.log(ms);
}
}</code></pre><p>The error I get in the browser console is this:</p><p><code>EXCEPTION: Can't resolve all parameters for HeaderComponent: (?).</code></p><p>I have the service in the bootstrap function so it has a provider. And I seem to be able to inject it into the constructor of any of my other components without issue.</p><blockquote><a href="https://stackoverflow.com/users/217408" rel="noopener"><strong><em>Günter Zöchbauer</em></strong></a><strong><em> answered, (272+ points)</em></strong></blockquote><p>Import it from the file where it is declared directly instead of the barrel.</p><p>I don’t know what exactly causes the issue but I saw it mentioned several times (probably some kind of circular dependency).</p><p>It should also be fixable by changing the order of the exports in the barrel (don’t know details, but was mentioned as well)</p><p><a href="https://stackoverflow.com/questions/37997824" rel="noopener"><strong>Source</strong></a><br><strong><a href="#599b" rel="noopener">Top</a></strong></p><h3 id="angular-set-headers-for-every-request">Angular — Set headers for every request</h3><blockquote>209+ points <em>? 2</em>05,557+ viewed <br><em><strong><a href="https://stackoverflow.com/users/4135178/avijit-gupta">Avijit Gupta</a> asked,</strong></em></blockquote><p>I need to set some Authorization headers after the user has logged in, for every subsequent request.</p><p>To set headers for a particular request,</p><pre><code class="language-ts">import {Headers} from 'angular2/http';
var headers = new Headers();
headers.append(headerName, value);
// HTTP POST using these headers
this.http.post(url, data, {
headers: headers
})
// do something with the response</code></pre><p><a href="https://auth0.com/blog/2015/10/15/angular-2-series-part-3-using-http/" rel="noopener">Reference</a></p><p>But it would be not be feasible to manually set request headers for every request in this way.</p><p>How do I set the headers set once the user has logged in, and also remove those headers on logout?</p><blockquote><a href="https://stackoverflow.com/users/1873365" rel="noopener"><strong><em>Thierry Templier</em></strong></a><strong><em> answered, (283+ points)</em></strong></blockquote><p>To answer, you question you could provide a service that wraps the original <code>Http</code> object from Angular. Something like described below.</p><pre><code class="language-ts">import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
@Injectable()
export class HttpClient {
constructor(private http: Http) {}
createAuthorizationHeader(headers: Headers) {
headers.append('Authorization', 'Basic ' +
btoa('username:password'));
}
get(url) {
let headers = new Headers();
this.createAuthorizationHeader(headers);
return this.http.get(url, {
headers: headers
});
}
post(url, data) {
let headers = new Headers();
this.createAuthorizationHeader(headers);
return this.http.post(url, data, {
headers: headers
});
}
}</code></pre><p>And instead of injecting the <code>Http</code> object you could inject this one (<code>HttpClient</code>).</p><pre><code class="language-ts">import { HttpClient } from './http-client';
export class MyComponent {
// Notice we inject "our" HttpClient here, naming it Http so it's easier
constructor(http: HttpClient) {
this.http = httpClient;
}
handleSomething() {
this.http.post(url, data).subscribe(result =&gt; {
// console.log( result );
});
}
}</code></pre><p>I also think that something could be done using multi providers for the <code>Http</code> class by providing your own class extending the <code>Http</code> one... See this link: <a href="http://blog.thoughtram.io/angular2/2015/11/23/multi-providers-in-angular-2.html" rel="noopener">http://blog.thoughtram.io/angular2/2015/11/23/multi-providers-in-angular-2.html</a>.</p><p><a href="https://stackoverflow.com/questions/34464108" rel="noopener"><strong>Source</strong></a><br><strong><a href="#599b" rel="noopener">Top</a></strong></p><h3 id="how-to-use-ngif-else-in-angular">How to use *ngIf else in Angular?</h3><blockquote>205+ points <em>? 2</em>03,768+ viewed <br><em><a href="https://stackoverflow.com/users/5486494/kawli-norman"><strong>kawli norman</strong></a><strong> asked,</strong></em></blockquote><p>I’m using Angular and I want to use <code>*ngIf else</code> (available since version 4) in this example:</p><pre><code>&lt;div *ngIf="isValid"&gt;
content here ...
&lt;/div&gt;
&lt;div *ngIf="!isValid"&gt;
other content here...
&lt;/div&gt;</code></pre><p>How can I acheive the same behavior with <code>ngIf else</code> ?</p><blockquote><a href="https://stackoverflow.com/users/7273246" rel="noopener"><strong><em>Bougarfaoui El houcine</em></strong></a><strong><em> answered, (384+ points)</em></strong></blockquote><p><strong>Angular 4 and 5</strong>:</p><p>using <code>else</code> :</p><pre><code class="language-html">&lt;div *ngIf="isValid;else other_content"&gt;
content here ...
&lt;/div&gt;
&lt;ng-template #other_content&gt;other content here...&lt;/ng-template&gt;</code></pre><p>you can also use <code>then else</code> :</p><pre><code class="language-html">&lt;div *ngIf="isValid;then content else other_content"&gt;here is ignored&lt;/div&gt;
&lt;ng-template #content&gt;content here...&lt;/ng-template&gt;
&lt;ng-template #other_content&gt;other content here...&lt;/ng-template&gt;</code></pre><p>or <code>then</code> alone :</p><pre><code class="language-html">&lt;div *ngIf="isValid;then content"&gt;&lt;/div&gt;
&lt;ng-template #content&gt;content here...&lt;/ng-template&gt;</code></pre><p><strong>Demo :</strong></p><p><a href="https://plnkr.co/edit/XD5vLvmwTApcaHJ66Is1" rel="noopener"><strong>Plunker</strong></a></p><p><strong>Details:</strong></p><p><code>&lt;ng-template&gt;</code> : is Angular’s own implementation of the <code>&lt;template&gt;</code> tag which is <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template">according to MDN</a> :</p><p><code>The HTML &lt;template&gt; element is a mechanism for holding client-side content that is not to be rendered when a page is loaded but may subsequently be instantiated during runtime using JavaS</code>cript.</p><p><a href="https://stackoverflow.com/questions/43006550" rel="noopener"><strong>Source</strong></a><br><strong><a href="#599b" rel="noopener">Top</a></strong></p><h3 id="angular-no-provider-for-nameservice">Angular no provider for NameService</h3><blockquote>196+ points <em>? 1</em>86,526+ viewed <br><em><strong><a href="https://stackoverflow.com/users/2667885/m-svrcek">M.Svrcek</a> asked,</strong></em></blockquote><p>I’ve got problem with loading class into Angular component. I’m trying to solve for long time, even tried to add it to single file. What I have is:</p><p><strong>Application.ts</strong></p><pre><code class="language-ts">/// &lt;reference path="../typings/angular2/angular2.d.ts" /&gt;
import {Component,View,bootstrap,NgFor} from "angular2/angular2";
import {NameService} from "./services/NameService";
@Component({
selector:'my-app',
injectables: [NameService]
})
@View({
template:'&lt;h1&gt;Hi {{name}}&lt;/h1&gt;' +
'&lt;p&gt;Friends&lt;/p&gt;' +
'&lt;ul&gt;' +
'   &lt;li *ng-for="#name of names"&gt;{{name}}&lt;/li&gt;' +
'&lt;/ul&gt;',
directives:[NgFor]
})
class MyAppComponent
{
name:string;
names:Array&lt;string&gt;;
constructor(nameService:NameService)
{
this.name = 'Michal';
this.names = nameService.getNames();
}
}
bootstrap(MyAppComponent);</code></pre><p><strong>services/NameService.ts</strong></p><pre><code class="language-ts">export class NameService {
names: Array&lt;string&gt;;
constructor() {
this.names = ["Alice", "Aarav", "Martín", "Shannon", "Ariana", "Kai"];
}
getNames()
{
return this.names;
}
}</code></pre><p>All the time I’m getting error message saying “No provider for NameService” …</p><p>Can someone help me spot that small issue with my code?</p><blockquote><a href="https://stackoverflow.com/users/46194" rel="noopener"><strong><em>Klas Mellbourn</em></strong></a><strong><em> answered, (309+ points)</em></strong></blockquote><p>You have to use <code>providers</code> instead of <code>injectables</code></p><pre><code class="language-ts">@Component({
selector: 'my-app',
providers: [NameService]
})</code></pre><p><a href="https://github.com/Mellbourn/angular2-step-by-step-guide" rel="noopener">Complete code sample here</a>.</p><p><a href="https://stackoverflow.com/questions/30580083" rel="noopener"><strong>Source</strong></a><br><strong><a href="#599b" rel="noopener">Top</a></strong></p><h3 id="binding-select-element-to-object-in-angular">Binding select element to object in Angular</h3><blockquote>194+ points <em>? 1</em>97,048+ viewed <br><em><a href="https://stackoverflow.com/users/372296/rharris"><strong>RHarris</strong></a><strong> asked,</strong></em></blockquote><p>I’m new to Angular and trying to get up to speed with the new way of doing things.</p><p>I’d like to bind a select element to a list of objects — which is easy enough:</p><pre><code class="language-ts">@Component({
selector: 'myApp',
template: `&lt;h1&gt;My Application&lt;/h1&gt;
&lt;select [(ngModel)]="selectedValue"&gt;
&lt;option *ngFor="#c of countries" value="c.id"&gt;{{c.name}}&lt;/option&gt;
&lt;/select&gt;`
})
export class AppComponent{
countries = [
{id: 1, name: "United States"},
{id: 2, name: "Australia"}
{id: 3, name: "Canada"}
{id: 4, name: "Brazil"}
{id: 5, name: "England"}
];
selectedValue = null;
}</code></pre><p>In this case, it appears that selectedValue would be a number — the id of the selected item.</p><p>However, I’d actually like to bind to the country object itself so that selectedValue is the object rather than just the id. I tried changing the value of the option like so:</p><pre><code class="language-ts">&lt;option *ngFor="#c of countries" value="c"&gt;{{c.name}}&lt;;/option&gt;</code></pre><p>but this does not seem to work. It seems to place an object in my selectedValue — but not the object that I’m expecting. You can <a href="http://plnkr.co/edit/HGRGv33EFwxDsSnELofk?p=preview" rel="noopener">see this in my Plunker example</a>.</p><p>I also tried binding to the change event so that I could set the object myself based on the selected id; however, it appears that the change event fires before the bound ngModel is updated — meaning I don’t have access to the newly selected value at that point.</p><p>Is there a clean way to bind a select element to an object with Angular 2?</p><blockquote><a href="https://stackoverflow.com/users/217408" rel="noopener"><strong><em>Günter Zöchbauer</em></strong></a><strong><em> answered, (361+ points)</em></strong></blockquote><pre><code class="language-ts">&lt;h1&gt;My Application&lt;/h1&gt;
&lt;select [(ngModel)]="selectedValue"&gt;
&lt;option *ngFor="let c of countries" [ngValue]="c"&gt;{{c.name}}&lt;/option&gt;
&lt;/select&gt;</code></pre><p><a href="https://plnkr.co/edit/njGlIV?p=preview" rel="noopener"><strong>Plunker example</strong></a></p><p>NOTE: you can use <code>[ngValue]="c"</code> instead of <code>[ngValue]="c.id"</code> where c is the complete country object.</p><p><code>[value]="..."</code> only supports string values<br><code>[ngValue]="..."</code> supports any type</p><p><strong>update</strong></p><p>If the <code>value</code> is an object, the preselected instance needs to be identical with one of the values.</p><p>See also the recently added custom comparison <a href="https://github.com/angular/angular/issues/13268" rel="noopener">https://github.com/angular/angular/issues/13268</a> <strong>available since 4.0.0-beta.7</strong></p><pre><code class="language-ts">&lt;select [compareWith]="compareFn" ...</code></pre><p>Take care of if you want to access <code>this</code> within <code>compareFn</code>.</p><pre><code class="language-ts">compareFn = this._compareFn.bind(this);
// or
// compareFn = (a, b) =&gt; this._compareFn(a, b);
_comareFn((a, b) {
if(this.x ...) {
...
}</code></pre><p><a href="https://stackoverflow.com/questions/35945001" rel="noopener"><strong>Source</strong></a><br><strong><a href="#599b" rel="noopener">Top</a></strong></p><h3 id="what-is-difference-between-declarations-providers-and-import-in-ngmodule">What is difference between declarations, providers and import in NgModule</h3><blockquote>188+ points <em>? 5</em>5,432+ viewed <br><em><a href="https://stackoverflow.com/users/2822252/ramesh-papaganti"><strong>Ramesh Papaganti</strong></a><strong> asked,</strong></em></blockquote><p>I am trying to understand Angular (sometimes called Angular2+), then I came across @Module</p><ol><li>Imports</li><li>Declarations</li><li>Providers</li></ol><p>Following <a href="https://angular.io/guide/quickstart" rel="noopener">Angularjs-2 quick start</a></p><blockquote><a href="https://stackoverflow.com/users/217408" rel="noopener"><strong><em>Günter Zöchbauer</em></strong></a><strong><em> answered, (277+ points)</em></strong></blockquote><p><strong>Angular Concepts</strong></p><ul><li><code>imports</code> makes the exported declarations of other modules available in the current module</li><li><code>declarations</code> are to make directives (including components and pipes) from the current module available to other directives in the current module. Selectors of directives, components or pipes are only matched against the HTML if they are declared or imported.</li><li><code>providers</code> are to make services and values known to DI. They are added to the root scope and they are injected to other services or directives that have them as dependency.</li></ul><p>A special case for <code>providers</code> are lazy loaded modules that get their own child injector. <code>providers</code> of a lazy loaded module are only provided to this lazy loaded module by default (not the whole application as it is with other modules).</p><p>For more details about modules see also <a href="https://angular.io/docs/ts/latest/guide/ngmodule.html" rel="noopener">https://angular.io/docs/ts/latest/guide/ngmodule.html</a></p><ul><li><code>exports</code> makes the components, directives, and pipes available in modules that add this module to <code>imports</code>. <code>exports</code> can also be used to re-export modules such as CommonModule and FormsModule, which is often done in shared modules.</li><li><code>entryComponents</code> registers components for offline compilation so that they can be used with <code>ViewContainerRef.createComponent()</code>. Components used in router configurations are added implicitly.</li></ul><p><strong>TypeScript (ES2015) imports</strong></p><p><code>import ... from 'foo/bar'</code> (which <a href="https://stackoverflow.com/a/38158884/1175496" rel="noopener">may resolve to an <code>index.ts</code></a>) are for TypeScript imports. You need these whenever you use an identifier in a typescript file that is declared in another typescript file.</p><p>Angular’s <code>@NgModule()</code> <code>imports</code> and TypeScript <code>import</code> are <em>entirely different concepts</em>.</p><p>See also <a href="https://blog.jdriven.com/2017/06/typescript-and-es6-import-syntax/" rel="noopener">jDriven — TypeScript and ES6 import syntax</a></p><p><code>Most of them are actually plain ECMAScript 2015 (ES6) module syntax that TypeScript uses as well.</code></p><p><a href="https://stackoverflow.com/questions/39062930" rel="noopener"><strong>Source</strong></a><br><strong><a href="#599b" rel="noopener">Top</a></strong></p><h3 id="in-angular-how-do-you-determine-the-active-route">In Angular, how do you determine the active route?</h3><blockquote>187+ points <em>? 1</em>00,870+ viewed <br><em><a href="https://stackoverflow.com/users/1480995/michael-oryl"><strong>Michael Oryl</strong></a><strong> asked,</strong></em></blockquote><p><strong>NOTE:</strong> <em>There are many different answers here, and most have been valid at one time or another. The fact is that what works has changed a number of times as the Angular team has changed its Router. The Router 3.0 version that will eventually be <strong>the</strong> router in Angular breaks many of these solutions, but offers a very simple solution of its own. As of RC.3, the preferred solution is to use <code>[routerLinkActive]</code> as shown in <a href="https://stackoverflow.com/a/37947435/1480995" rel="noopener">this answer</a>.</em></p><p>In an Angular application (current in the 2.0.0-beta.0 release as I write this), how do you determine what the currently active route is?</p><p>I’m working on an app that uses Bootstrap 4 and I need a way to mark navigation links/buttons as active when their associated component is being shown in a <code>&lt;router-outp</code>ut&gt; tag.</p><p>I realize that I could maintain the state myself when one of the buttons is clicked upon, but that wouldn’t cover the case of having multiple paths into the same route (say a main navigation menu as well as a local menu in the main component).</p><p>Any suggestions or links would be appreciated. Thanks.</p><blockquote><a href="https://stackoverflow.com/users/974981" rel="noopener"><strong><em>jessepinho</em></strong></a><strong><em> answered, (229+ points)</em></strong></blockquote><p>With the new <a href="https://github.com/angular/vladivostok" rel="noopener">Angular router</a>, you can add a <code>[routerLinkActive]="['your-class-name']"</code> attribute to all your links:</p><pre><code>&lt;a [routerLink]="['/home']" [routerLinkActive]="['is-active']"&gt;Home&lt;/a&gt;</code></pre><p>Or the simplified non-array format if only one class is needed:</p><pre><code>&lt;a [routerLink]="['/home']" [routerLinkActive]="'is-active'"&gt;Home&lt;/a&gt;</code></pre><p>See the <a href="https://github.com/angular/angular/blob/ae75e3640a2d9eb1e897a0771d92b976c5a42c75/modules/%40angular/router/src/directives/router_link_active.ts" rel="noopener">poorly documented <code>routerLinkActive</code> directive</a> for more info. (I mostly figured this out via trial-and-error.)</p><p>UPDATE: Better documentation for the <code>routerLinkActive</code> directive can now be found <a href="https://angular.io/docs/ts/latest/api/router/index/RouterLinkActive-directive.html" rel="noopener">here</a>. (Thanks to @Victor Hugo Arango A. in the comments below.)</p><p><a href="https://stackoverflow.com/questions/34323480" rel="noopener"><strong>Source</strong></a><br><strong><a href="#599b" rel="noopener">Top</a></strong></p><h3 id="angular-cli-sass-options">Angular CLI SASS options</h3><blockquote>187+ points <em>? 1</em>06,289+ viewed <br><em><a href="https://stackoverflow.com/users/2109585/jdillon522"><strong>JDillon522</strong></a><strong> asked,</strong></em></blockquote><p>I’m new to Angular and I’m coming from the Ember community. Trying to use the new Angular-CLI based off of Ember-CLI.</p><p>I need to know the best way to handle SASS in a new Angular project. I tried using the <code><a href="https://github.com/aexmachina/ember-cli-sass" rel="noopener">ember-cli-sass</a></code> repo to see if it would play along since a number of core components of the Angular-CLI are run off of Ember-CLI modules.</p><p>It didnt work but than again not sure if I just misconfigured something.</p><p>Also, what is the best way to organize styles in a new Angular project? It would be nice to have the sass file in the same folder as the component.</p><blockquote><a href="https://stackoverflow.com/users/6265549" rel="noopener"><strong><em>Mertcan Diken</em></strong></a><strong><em> answered, (323+ points)</em></strong></blockquote><p>When you are creating your project with angular cli try this:</p><pre><code class="language-bash">ng new My_New_Project --style=sass</code></pre><p>This generating all your components with predifined sass files.</p><p>If you want scss syntax create your project with :</p><pre><code class="language-bash">ng new My_New_Project --style=scss</code></pre><p>If you are changing your existing style in your project</p><pre><code class="language-bash">ng set defaults.styleExt scss</code></pre><p>Cli handles the rest of it.</p><p><a href="https://stackoverflow.com/questions/36220256" rel="noopener"><strong>Source</strong></a><br><strong><a href="#599b" rel="noopener">Top</a></strong></p><h3 id="triggering-change-detection-manually-in-angular">Triggering change detection manually in Angular</h3><blockquote>186+ points <em>? 1</em>02,556+ viewed <br><em><a href="https://stackoverflow.com/users/515279/jz87"><strong>jz87</strong></a><strong> asked,</strong></em></blockquote><p>I’m writing an Angular component that has a property <code>Mode(): string</code>. I would like to be able to set this property programmatically not in response to any event. The problem is that in the absence of a browser event, a template binding <code>{{Mode}}</code> doesn't update. Is there a way to trigger this change detection manually?</p><blockquote><a href="https://stackoverflow.com/users/215945" rel="noopener"><strong><em>Mark Rajcok</em></strong></a><strong><em> answered, (345+ points)</em></strong></blockquote><p>Try one of these:</p><ul><li><code><a href="https://angular.io/docs/ts/latest/api/core/index/ApplicationRef-class.html#!#tick-anchor" rel="noopener">ApplicationRef.tick()</a></code> - similar to AngularJS's <code>$rootScope.$digest()</code> -- i.e., check the full component tree</li><li><code><a href="https://angular.io/docs/ts/latest/api/core/index/NgZone-class.html#!#run-anchor" rel="noopener">NgZone.run(callback)</a></code> - similar to <code>$rootScope.$apply(callback)</code> -- i.e., evaluate the callback function inside the Angular zone. I think, but I'm not sure, that this ends up checking the full component tree after executing the callback function.</li><li><code><a href="https://angular.io/docs/ts/latest/api/core/index/ChangeDetectorRef-class.html#!#detectChanges-anchor" rel="noopener">ChangeDetectorRef.detectChanges()</a></code> - similar to <code>$scope.$digest()</code> -- i.e., check only this component and its children</li></ul><p>You can inject <code>ApplicationRef</code>, <code>NgZone</code>, or <code>ChangeDetectorRef</code> into your component.</p><p><a href="https://stackoverflow.com/questions/34827334" rel="noopener"><strong>Source</strong></a><br><strong><a href="#599b" rel="noopener">Top</a></strong></p><h3 id="angular-and-typescript-can-t-find-names">Angular and Typescript: Can’t find names</h3><blockquote>184+ points <em>? 1</em>81,472+ viewed <br><em><a href="https://stackoverflow.com/users/4997649/user233232"><strong>user233232</strong></a><strong> asked,</strong></em></blockquote><p>I am using Angular (version 2) with TypeScript (version 1.6) and when I compile the code I get these errors:</p><pre><code class="language-bash">Error TS2304: Cannot find name 'Map'.
node_modules/angular2/src/core/change_detection/parser/locals.d.ts(4,42): Error TS2304: Cannot find name 'Map'.
node_modules/angular2/src/core/facade/collection.d.ts(1,25): Error TS2304: Cannot find name 'MapConstructor'.
node_modules/angular2/src/core/facade/collection.d.ts(2,25): Error TS2304: Cannot find name 'SetConstructor'.
node_modules/angular2/src/core/facade/collection.d.ts(4,27): Error TS2304: Cannot find name 'Map'.
node_modules/angular2/src/core/facade/collection.d.ts(4,39): Error TS2304: Cannot find name 'Map'.
node_modules/angular2/src/core/facade/collection.d.ts(7,9): Error TS2304: Cannot find name 'Map'.
node_modules/angular2/src/core/facade/collection.d.ts(8,30): Error TS2304: Cannot find name 'Map'.
node_modules/angular2/src/core/facade/collection.d.ts(11,43): Error TS2304: Cannot find name 'Map'.
node_modules/angular2/src/core/facade/collection.d.ts(12,27): Error TS2304: Cannot find name 'Map'.
node_modules/angular2/src/core/facade/collection.d.ts(14,23): Error TS2304: Cannot find name 'Map'.
node_modules/angular2/src/core/facade/collection.d.ts(15,25): Error TS2304: Cannot find name 'Map'.
node_modules/angular2/src/core/facade/collection.d.ts(94,41): Error TS2304: Cannot find name 'Set'.
node_modules/angular2/src/core/facade/collection.d.ts(95,22): Error TS2304: Cannot find name 'Set'.
node_modules/angular2/src/core/facade/collection.d.ts(96,25): Error TS2304: Cannot find name 'Set'.
node_modules/angular2/src/core/facade/lang.d.ts(1,22): Error TS2304: Cannot find name 'BrowserNodeGlobal'.
node_modules/angular2/src/core/facade/lang.d.ts(33,59): Error TS2304: Cannot find name 'Map'.
node_modules/angular2/src/core/facade/promise.d.ts(1,10): Error TS2304: Cannot find name 'Promise'.
node_modules/angular2/src/core/facade/promise.d.ts(3,14): Error TS2304: Cannot find name 'Promise'.
node_modules/angular2/src/core/facade/promise.d.ts(8,32): Error TS2304: Cannot find name 'Promise'.
node_modules/angular2/src/core/facade/promise.d.ts(9,38): Error TS2304: Cannot find name 'Promise'.
node_modules/angular2/src/core/facade/promise.d.ts(10,35): Error TS2304: Cannot find name 'Promise'.
node_modules/angular2/src/core/facade/promise.d.ts(10,93): Error TS2304: Cannot find name 'Promise'.
node_modules/angular2/src/core/facade/promise.d.ts(11,34): Error TS2304: Cannot find name 'Promise'.
node_modules/angular2/src/core/facade/promise.d.ts(12,32): Error TS2304: Cannot find name 'Promise'.
node_modules/angular2/src/core/facade/promise.d.ts(12,149): Error TS2304: Cannot find name 'Promise'.
node_modules/angular2/src/core/facade/promise.d.ts(13,43): Error TS2304: Cannot find name 'Promise'.
node_modules/angular2/src/core/linker/element_injector.d.ts(72,32): Error TS2304: Cannot find name 'Map'.
node_modules/angular2/src/core/linker/element_injector.d.ts(74,17): Error TS2304: Cannot find name 'Map'.
node_modules/angular2/src/core/linker/element_injector.d.ts(78,184): Error TS2304: Cannot find name 'Map'.
node_modules/angular2/src/core/linker/element_injector.d.ts(83,182): Error TS2304: Cannot find name 'Map'.
node_modules/angular2/src/core/linker/element_injector.d.ts(107,37): Error TS2304: Cannot find name 'Map'.
node_modules/angular2/src/core/linker/proto_view_factory.d.ts(27,146): Error TS2304: Cannot find name 'Map'.
node_modules/angular2/src/core/linker/view.d.ts(52,144): Error TS2304: Cannot find name 'Map'.
node_modules/angular2/src/core/linker/view.d.ts(76,79): Error TS2304: Cannot find name 'Map'.
node_modules/angular2/src/core/linker/view.d.ts(77,73): Error TS2304: Cannot find name 'Map'.
node_modules/angular2/src/core/linker/view.d.ts(94,31): Error TS2304: Cannot find name 'Map'.
node_modules/angular2/src/core/linker/view.d.ts(97,18): Error TS2304: Cannot find name 'Map'.
node_modules/angular2/src/core/linker/view.d.ts(100,24): Error TS2304: Cannot find name 'Map'.
node_modules/angular2/src/core/linker/view.d.ts(103,142): Error TS2304: Cannot find name 'Map'.
node_modules/angular2/src/core/linker/view.d.ts(104,160): Error TS2304: Cannot find name 'Map'.
node_modules/angular2/src/core/render/api.d.ts(281,74): Error TS2304: Cannot find name 'Map'.
node_modules/angular2/src/core/zone/ng_zone.d.ts(1,37): Error TS2304: Cannot find name 'Zone'.</code></pre><p>This is the code:</p><pre><code class="language-ts">import 'reflect-metadata';
import {bootstrap, Component, CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/core';
@Component({
selector: 'my-app',
template: '&lt;input type="text" [(ng-model)]="title" /&gt;&lt;h1&gt;{{title}}&lt;/h1&gt;',
directives: [ CORE_DIRECTIVES ]
})
class AppComponent {
title :string;
constructor() {
this.title = 'hello angular 2';
}
}
bootstrap(AppComponent);</code></pre><blockquote><a href="https://stackoverflow.com/users/390330" rel="noopener"><strong><em>basarat</em></strong></a><strong><em> answered, (50+ points)</em></strong></blockquote><p>A known issue: <a href="https://github.com/angular/angular/issues/4902" rel="noopener">https://github.com/angular/angular/issues/4902</a></p><p>Core reason: the <code>.d.ts</code> file implicitly included by TypeScript varies with the compile target, so one needs to have more ambient declarations when targeting <code>es5</code> even if things are actually present in the runtimes (e.g. chrome). More on <code><a href="https://basarat.gitbooks.io/typescript/content/docs/types/lib.d.ts.html" rel="noopener">lib.d.ts</a></code></p><p><a href="https://stackoverflow.com/questions/33332394" rel="noopener"><strong>Source</strong></a><br><strong><a href="#599b" rel="noopener">Top</a></strong></p><h3 id="angular-what-is-the-meanings-of-module-id-in-component">Angular — What is the meanings of module.id in component?</h3><blockquote>181+ points <em>? 5</em>4,337+ viewed <br><em><a href="https://stackoverflow.com/users/2837412/nishchit-dhanani"><strong>Nishchit Dhanani</strong></a><strong> asked,</strong></em></blockquote><p>In an Angular app, I have seen that <code>@Component</code> has property <code>moduleId</code>. What does it mean?</p><p>And when <code>module.id</code> is not defined anywhere, the app still works. How can it still work?</p><pre><code class="language-ts">@Component({
moduleId: module.id,
selector: 'ng-app',
templateUrl: 'app.component.html',
styleUrls: ['app.component.css'],
directives: [AppComponent]
});</code></pre><blockquote><a href="https://stackoverflow.com/users/2837412" rel="noopener"><strong><em>Nishchit Dhanani</em></strong></a><strong><em> answered, (145+ points)</em></strong></blockquote><p>The beta release of Angular (since vesion 2-alpha.51) supports relative assets for components, like <strong>templateUrl</strong> and <strong>styleUrls</strong> in the <code>@Component</code> decorator.</p><p><code>module.id</code> works when using CommonJS. You don't need to worry about how it works.</p><p><code><strong>Remember</strong>: setting moduleId: module.id in the @Component decorator is the key here. If you don't have that then Angular 2 will be looking for your files at the root level.</code></p><p>Source from <a href="http://schwarty.com/2015/12/22/angular2-relative-paths-for-templateurl-and-styleurls/" rel="noopener">Justin Schwartzenberger’s post</a>, thanks to <a href="https://stackoverflow.com/users/5043867/pardeep-jain" rel="noopener">@Pradeep Jain</a></p><p><strong>Update on 16 Sep 2016:</strong></p><p><code>If you are using <strong>webpack</strong> for bundling then you don't need module.id in decorator. Webpack plugins auto handle (add it) module.id in final bundle</code></p><p><a href="https://stackoverflow.com/questions/37178192" rel="noopener"><strong>Source</strong></a><br><strong><a href="#599b" rel="noopener">Top</a></strong></p><h3 id="how-can-i-get-new-selection-in-select-in-angular-2">How can I get new selection in “select” in Angular 2?</h3><blockquote>175+ points <em>? 2</em>03,064+ viewed <br><em><a href="https://stackoverflow.com/users/2000548/hongbo-miao"><strong>Hongbo Miao</strong></a><strong> asked,</strong></em></blockquote><p>I am using Angular 2 (TypeScript).</p><p>I want to do something for new selection, but what I got in onChange() is always last selection. How can I get new selection?</p><pre><code class="language-ts">&lt;select [(ngModel)]="selectedDevice" (change)="onChange($event)"&gt;
&lt;option *ngFor="#i of devices"&gt;{{i}}&lt;/option&gt;
&lt;/select&gt;
onChange($event) {
console.log(this.selectedDevice);
// I want to do something here for new selectedDevice, but what I
// got here is always last selection, not the one I just select.
}</code></pre><blockquote><a href="https://stackoverflow.com/users/215945" rel="noopener"><strong><em>Mark Rajcok</em></strong></a><strong><em> answered, (370+ points)</em></strong></blockquote><p>If you don’t need two-way data-binding:</p><pre><code class="language-ts">&lt;select (change)="onChange($event.target.value)"&gt;
&lt;option *ngFor="let i of devices"&gt;{{i}}&lt;/option&gt;
&lt;/select&gt;
onChange(deviceValue) {
console.log(deviceValue);
}</code></pre><p>For two-way data-binding, separate the event and property bindings:</p><pre><code class="language-ts">&lt;select [ngModel]="selectedDevice" (ngModelChange)="onChange($event)" name="sel2"&gt;
&lt;option [value]="i" *ngFor="let i of devices"&gt;{{i}}&lt;/option&gt;
&lt;/select&gt;
export class AppComponent {
devices = 'one two three'.split(' ');
selectedDevice = 'two';
onChange(newValue) {
console.log(newValue);
this.selectedDevice = newValue;
// ... do other stuff here ...
}</code></pre><p>If <code>devices</code> is array of objects, bind to <code>ngValue</code> instead of <code>value</code>:</p><pre><code class="language-ts">&lt;select [ngModel]="selectedDeviceObj" (ngModelChange)="onChangeObj($event)" name="sel3"&gt;
&lt;option [ngValue]="i" *ngFor="let i of deviceObjects"&gt;{{i.name}}&lt;/option&gt;
&lt;/select&gt;
{{selectedDeviceObj | json}}
export class AppComponent {
deviceObjects = [{name: 1}, {name: 2}, {name: 3}];
selectedDeviceObj = this.deviceObjects[1];
onChangeObj(newObj) {
console.log(newObj);
this.selectedDeviceObj = newObj;
// ... do other stuff here ...
}
}</code></pre><p><a href="http://plnkr.co/edit/VbJUBkqAlS8UPVgh4bqV?p=preview" rel="noopener">Plunker</a> — does not use <code>&lt;form&gt;</code><br><a href="http://plnkr.co/edit/pv5j4b1NFyTGFkxHUSga?p=preview">Plunker</a> - uses <code>&lt;form&gt;</code> and uses the new forms API</p><p><a href="https://stackoverflow.com/questions/33700266" rel="noopener"><strong>Source</strong></a><br><strong><a href="#599b" rel="noopener">Top</a></strong></p><h3 id="angular-exception-can-t-bind-to-ngforin-since-it-isn-t-a-known-native-property">Angular exception: Can’t bind to ‘ngForIn’ since it isn’t a known native property</h3><blockquote>172+ points <em>? 4</em>8,252+ viewed <br><em><a href="https://stackoverflow.com/users/215945/mark-rajcok"><strong>Mark Rajcok</strong></a><strong> asked,</strong></em></blockquote><p>What am I doing wrong?</p><pre><code class="language-ts">import {bootstrap, Component} from 'angular2/angular2'
@Component({
selector: 'conf-talks',
template: `&lt;div *ngFor="let talk in talks"&gt;
{{talk.title}} by {{talk.speaker}}
&lt;p&gt;{{talk.description}}
&lt;/div&gt;`
})
class ConfTalks {
talks = [ {title: 't1', speaker: 'Brian', description: 'talk 1'},
{title: 't2', speaker: 'Julie', description: 'talk 2'}];
}
@Component({
selector: 'my-app',
directives: [ConfTalks],
template: '&lt;conf-talks&gt;&lt;/conf-talks&gt;'
})
class App {}
bootstrap(App, [])</code></pre><p>The error is</p><pre><code class="language-bash">EXCEPTION: Template parse errors:
Can't bind to 'ngForIn' since it isn't a known native property
("&lt;div [ERROR -&gt;]*ngFor="let talk in talks"&gt;</code></pre><blockquote><a href="https://stackoverflow.com/users/215945" rel="noopener"><strong><em>Mark Rajcok</em></strong></a><strong><em> answered, (403+ points)</em></strong></blockquote><p>Since this is at least the third time I’ve wasted more than 5 min on this problem I figured I’d post the Q &amp; A. I hope it helps someone else down the road… probably me!</p><p>I typed <code>in</code> instead of <code>of</code> in the ngFor expression.</p><p><strong>Befor 2-beta.17</strong>, it should be:</p><pre><code>&lt;div *ngFor="#talk of talks"&gt;</code></pre><p><em>As of beta.17, use the <code>let</code> syntax instead of <code>#</code>. See the UPDATE further down for more info.</em></p><p>Note that the ngFor syntax “desugars” into the following:</p><pre><code class="language-ts">&lt;template ngFor #talk [ngForOf]="talks"&gt;
&lt;div&gt;...&lt;/div&gt;
&lt;/template&gt;</code></pre><p>If we use <code>in</code> instead, it turns into</p><pre><code class="language-ts">&lt;template ngFor #talk [ngForIn]="talks"&gt;
&lt;div&gt;...&lt;/div&gt;
&lt;/template&gt;</code></pre><p>Since <code>ngForIn</code> isn't an attribute directive with an input property of the same name (like <code>ngIf</code>), Angular then tries to see if it is a (known native) property of the <code>template</code> element, and it isn't, hence the error.</p><p><strong>UPDATE</strong> — as of 2-beta.17, use the <code>let</code> syntax instead of <code>#</code>. This updates to the following:</p><pre><code>&lt;div *ngFor="let talk of talks"&gt;</code></pre><p>Note that the ngFor syntax “desugars” into the following:</p><pre><code class="language-ts">&lt;template ngFor let-talk [ngForOf]="talks"&gt;
&lt;div&gt;...&lt;/div&gt;
&lt;/template&gt;</code></pre><p>If we use <code>in</code> instead, it turns into</p><pre><code class="language-ts">&lt;template ngFor let-talk [ngForIn]="talks"&gt;
&lt;div&gt;...&lt;/div&gt;
&lt;/template&gt;</code></pre><p><a href="https://stackoverflow.com/questions/34561168" rel="noopener"><strong>Source</strong></a><br><strong><a href="#599b" rel="noopener">Top</a></strong></p><h3 id="-ngif-and-ngfor-on-same-element-causing-error">*ngIf and *ngFor on same element causing error</h3><blockquote>171+ points <em>? 8</em>5,728+ viewed <br><em><strong><a href="https://stackoverflow.com/users/1128290/garethdn">garethdn</a> asked,</strong></em></blockquote><p>I’m having a problem with trying to use Angular’s <code>*ngFor</code> and <code>*ngIf</code> on the same element.</p><p>When trying to loop through the collection in the <code>*ngFor</code>, the collection is seen as <code>null</code> and consequently fails when trying to access its properties in the template.</p><pre><code class="language-ts">@Component({
selector: 'shell',
template: `
&lt;h3&gt;Shell&lt;/h3&gt;&lt;button (click)="toggle()"&gt;Toggle!&lt;/button&gt;
&lt;div *ngIf="show" *ngFor="let thing of stuff"&gt;
{{log(thing)}}
&lt;span&gt;{{thing.name}}&lt;/span&gt;
&lt;/div&gt;
`
})
export class ShellComponent implements OnInit {
public stuff:any[] = [];
public show:boolean = false;
constructor() {}
ngOnInit() {
this.stuff = [
{ name: 'abc', id: 1 },
{ name: 'huo', id: 2 },
{ name: 'bar', id: 3 },
{ name: 'foo', id: 4 },
{ name: 'thing', id: 5 },
{ name: 'other', id: 6 },
]
}
toggle() {
this.show = !this.show;
}
log(thing) {
console.log(thing);
}
}</code></pre><p>I know the easy solution is to move the <code>*ngIf</code> up a level but for scenarios like looping over list items in a <code>ul</code>, I'd end up with either an empty <code>li</code> if the collection is empty, or my <code>li</code>s wrapped in redundant container elements.</p><p>Example at this <a href="http://plnkr.co/edit/C5tZ8mD3iWczVvWkWycH?p=preview" rel="noopener">plnkr</a>.</p><p>Note the console error:</p><p><code>EXCEPTION: TypeError: Cannot read property 'name' of null in [{{thing.name}} in ShellComponent@5:12]</code></p><p>Am I doing something wrong or is this a bug?</p><blockquote><a href="https://stackoverflow.com/users/217408" rel="noopener"><strong><em>Günter Zöchbauer</em></strong></a><strong><em> answered, (284+ points)</em></strong></blockquote><p>Angular2 doesn’t support more than one structural directive on the same element.<br>As a workaround use the <code><strong>&lt;ng-container&gt;</strong></code> element that allows you to use separate elements for each structural directive, but <strong>it is not stamped to the DOM</strong>.</p><pre><code class="language-ts">&lt;ng-container *ngIf="show"&gt;
&lt;div *ngFor="let thing of stuff"&gt;
{{log(thing)}}
&lt;span&gt;{{thing.name}}&lt;/span&gt;
&lt;/div&gt;
&lt;/ng-container&gt;</code></pre><p><code>&lt;ng-template&gt;</code> (<code>&lt;template&gt;</code> before Angular4) allows to do the same but with a different syntax which is confusing and no longer recommended</p><pre><code class="language-ts">&lt;ng-template [ngIf]="show"&gt;
&lt;div *ngFor="let thing of stuff"&gt;
{{log(thing)}}
&lt;span&gt;{{thing.name}}&lt;/span&gt;
&lt;/div&gt;
&lt;/ng-template&gt;</code></pre><p><a href="https://stackoverflow.com/questions/34657821" rel="noopener"><strong>Source</strong></a><br><strong><a href="#599b" rel="noopener">Top</a></strong></p><h3 id="what-is-the-angular-equivalent-to-an-angularjs-watch">What is the Angular equivalent to an AngularJS $watch?</h3><blockquote>169+ points <em>? 9</em>5,029+ viewed <br><em><a href="https://stackoverflow.com/users/1716567/erwin"><strong>Erwin</strong></a><strong> asked,</strong></em></blockquote><p>In AngularJS you were able to specify watchers to observe changes in scope variables using the <code>$watch</code> function of the <code>$scope</code>. What is the equivalent of watching for variable changes (in, for example, component variables) in Angular?</p><blockquote><a href="https://stackoverflow.com/users/215945" rel="noopener"><strong><em>Mark Rajcok</em></strong></a><strong><em> answered, (226+ points)</em></strong></blockquote><p>In Angular 2, change detection is automatic… <code>$scope.$watch()</code> and <code>$scope.$digest()</code> R.I.P.</p><p>Unfortunately, the Change Detection section of the dev guide is not written yet (there is a placeholder near the bottom of the <a href="https://angular.io/docs/ts/latest/guide/architecture.html" rel="noopener">Architecture Overview</a> page, in section “The Other Stuff”).</p><p>Here’s my understanding of how change detection works:</p><ul><li>Zone.js “monkey patches the world” — it intercepts all of the asynchronous APIs in the browser (when Angular runs). This is why we can use <code>setTimeout()</code> inside our components rather than something like <code>$timeout</code>... because <code>setTimeout()</code> is monkey patched.</li><li>Angular builds and maintains a tree of “change detectors”. There is one such change detector (class) per component/directive. (You can get access to this object by injecting <code><a href="https://angular.io/docs/ts/latest/api/core/index/ChangeDetectorRef-class.html" rel="noopener">ChangeDetectorRef</a></code>.) These change detectors are created when Angular creates components. They keep track of the state of all of your bindings, for dirty checking. These are, in a sense, similar to the automatic <code>$watches()</code> that Angular 1 would set up for <code>{{}}</code> template bindings.<br>Unlike Angular 1, the change detection graph is a directed tree and cannot have cycles (this makes Angular 2 much more performant, as we'll see below).</li><li>When an event fires (inside the Angular zone), the code we wrote (the event handler callback) runs. It can update whatever data it wants to — the shared application model/state and/or the component’s view state.</li><li>After that, because of the hooks Zone.js added, it then runs Angular’s change detection algorithm. By default (i.e., if you are not using the <code>onPush</code> change detection strategy on any of your components), every component in the tree is examined once (TTL=1)... from the top, in depth-first order. (Well, if you're in dev mode, change detection runs twice (TTL=2). See <a href="https://angular.io/docs/ts/latest/api/core/index/ApplicationRef-class.html#!#tick-anchor" rel="noopener">ApplicationRef.tick()</a> for more about this.) It performs dirty checking on all of your bindings, using those change detector objects.</li><li>Lifecycle hooks are called as part of change detection. <br>If the component data you want to watch is a primitive input property (String, boolean, number), you can implement <code>ngOnChanges()</code> to be notified of changes. <br>If the input property is a reference type (object, array, etc.), but the reference didn't change (e.g., you added an item to an existing array), you'll need to implement <code>ngDoCheck()</code> (see <a href="https://stackoverflow.com/a/34298708/215945" rel="noopener">this SO answer</a> for more on this). <br>You should only change the component's properties and/or properties of descendant components (because of the single tree walk implementation -- i.e., unidirectional data flow). Here's <a href="http://plnkr.co/edit/XWBSvE0NoQlRuOsXuOm0?p=preview" rel="noopener">a plunker</a> that violates that. Stateful pipes can also <a href="https://stackoverflow.com/questions/34456430/ngfor-doesnt-update-data-with-pipe-in-angular2/34497504#34497504" rel="noopener">trip you up</a> here.</li><li>For any binding changes that are found, the Components are updated, and then the DOM is updated. Change detection is now finished.</li><li>The browser notices the DOM changes and updates the screen.</li></ul><p>Other references to learn more:</p><ul><li><a href="https://blog.angularindepth.com/angulars-digest-is-reborn-in-the-newer-version-of-angular-718a961ebd3e" rel="noopener">Angular’s $digest is reborn in the newer version of Angular</a> — explains how the ideas from AngularJS are mapped to Angular</li><li><a href="https://blog.angularindepth.com/everything-you-need-to-know-about-change-detection-in-angular-8006c51d206f" rel="noopener">Everything you need to know about change detection in Angular</a> — explains in great detail how change detection works under the hood</li><li><a href="http://blog.thoughtram.io/angular/2016/02/22/angular-2-change-detection-explained.html" rel="noopener">Change Detection Explained</a> — Thoughtram blog Feb 22, 2016 — probably the best reference out there</li><li>Savkin’s <a href="https://www.youtube.com/watch?v=jvKGQSFQf10" rel="noopener">Change Detection Reinvented</a> video — definitely watch this one</li><li><a href="http://blog.jhades.org/how-does-angular-2-change-detection-really-work/" rel="noopener">How does Angular 2 Change Detection Really Work?</a>- jhade’s blog Feb 24, 2016</li><li><a href="https://www.youtube.com/watch?v=3IqtmUscE_U" rel="noopener">Brian’s video</a> and <a href="https://www.youtube.com/watch?v=V9Bbp6Hh2YE" rel="noopener">Miško’s video</a> about Zone.js. Brian’s is about Zone.js. Miško’s is about how Angular 2 uses Zone.js to implement change detection. He also talks about change detection in general, and a little bit about <code>onPush</code>.</li><li>Victor Savkins blog posts: <a href="http://victorsavkin.com/post/110170125256/change-detection-in-angular-2" rel="noopener">Change Detection in Angular 2</a>, <a href="http://victorsavkin.com/post/114168430846/two-phases-of-angular-2-applications" rel="noopener">Two phases of Angular 2 applications</a>, <a href="http://victorsavkin.com/post/110170125256/change-detection-in-angular-2" rel="noopener">Angular, Immutability and Encapsulation</a>. He covers a lot of ground quickly, but he can be terse at times, and you’re left scratching your head, wondering about the missing pieces.</li><li><a href="https://docs.google.com/document/d/1QKTbyVNPyRW-otJJVauON4TFMHpl0zNBPkJcTcfPJWg/edit" rel="noopener">Ultra Fast Change Detection</a> (Google doc) — very technical, very terse, but it describes/sketches the ChangeDetection classes that get built as part of the tree</li></ul><p><a href="https://stackoverflow.com/questions/34569094" rel="noopener"><strong>Source</strong></a><br><strong><a href="#599b" rel="noopener">Top</a></strong></p><h3 id="importing-lodash-into-angular2-typescript-application">Importing lodash into angular2 + typescript application</h3><blockquote>167+ points <em>? 1</em>04,431+ viewed <br><em><a href="https://stackoverflow.com/users/1854793/davy"><strong>Davy</strong></a><strong> asked,</strong></em></blockquote><p>I am having a hard time trying to get the lodash modules imported. I’ve setup my project using npm+gulp, and keep hitting the same wall. I’ve tried the regular lodash, but also lodash-es.</p><p>The lodash npm package: (has an index.js file in the package root folder)</p><pre><code class="language-ts">import * as _ from 'lodash';</code></pre><p>Results in:</p><pre><code>error TS2307: Cannot find module 'lodash'.</code></pre><p>The lodash-es npm package: (has a defaut export in lodash.js i the package root folder)</p><pre><code>import * as _ from 'lodash-es/lodash';</code></pre><p>Results in:</p><pre><code>error TS2307: Cannot find module 'lodash-es'.</code></pre><p>Both the gulp task and webstorm report the same issue.</p><p>Funny fact, this returns no error:</p><pre><code class="language-ts">import 'lodash-es/lodash';</code></pre><p>… but of course there is no “_” …</p><p>My tsconfig.json file:</p><pre><code class="language-json">{
"compilerOptions": {
"target": "es5",
"module": "system",
"moduleResolution": "node",
"sourceMap": true,
"emitDecoratorMetadata": true,
"experimentalDecorators": true,
"removeComments": false,
"noImplicitAny": false
},
"exclude": [
"node_modules"
]
}</code></pre><p>My gulpfile.js:</p><pre><code class="language-json">var gulp = require('gulp'),
ts = require('gulp-typescript'),
uglify = require('gulp-uglify'),
sourcemaps = require('gulp-sourcemaps'),
tsPath = 'app/**/*.ts';
gulp.task('ts', function () {
var tscConfig = require('./tsconfig.json');
gulp.src([tsPath])
.pipe(sourcemaps.init())
.pipe(ts(tscConfig.compilerOptions))
.pipe(sourcemaps.write('./../js'));
});
gulp.task('watch', function() {
gulp.watch([tsPath], ['ts']);
});
gulp.task('default', ['ts', 'watch']);</code></pre><p>If i understand correctly, moduleResolution:’node’ in my tsconfig should point the import statements to the node_modules folder, where lodash and lodash-es are installed. I’ve also tried lots of different ways to import: absolute paths, relative paths, but nothing seems to work. Any ideas?</p><p>If necessary i can provide a small zip file to illustrate the problem.</p><blockquote><a href="https://stackoverflow.com/users/544130" rel="noopener"><strong><em>Taytay</em></strong></a><strong><em> answered, (293+ points)</em></strong></blockquote><p>Here is how to do this as of Typescript 2.0: (tsd and typings are being deprecated in favor of the following):</p><pre><code class="language-bash">$ npm install --save lodash
# This is the new bit here:
$ npm install --save @types/lodash</code></pre><p>Then, in your .ts file:</p><p>Either:</p><pre><code class="language-ts">import * as _ from "lodash";</code></pre><p>Or (as suggested by @Naitik):</p><pre><code class="language-ts">import _ from "lodash";</code></pre><p>I’m not positive what the difference is. We use and prefer the first syntax. However, some report that the first syntax doesn’t work for them, and someone else has commented that the latter syntax is incompatible with lazy loaded webpack modules. YMMV.</p><p>Edit on Feb 27th, 2017:</p><p>According to @Koert below, <code>import * as _ from "lodash";</code> is the only working syntax as of Typescript 2.2.1, lodash 4.17.4, and @types/lodash 4.14.53. He says that the other suggested import syntax gives the error "has no default export".</p><p><a href="https://stackoverflow.com/questions/34660265" rel="noopener"><strong>Source</strong></a><br><strong><a href="#599b" rel="noopener">Top</a></strong></p><h3 id="how-to-detect-a-route-change-in-angular">How to detect a route change in Angular?</h3><blockquote>160+ points <em>? 1</em>08,593+ viewed <br><em><a href="https://stackoverflow.com/users/1590389/angularm"><strong>AngularM</strong></a><strong> asked,</strong></em></blockquote><p>I am looking to detect a route change in my <code>AppComponent</code>.</p><p>Thereafter I will check the global user token to see if he is logged in. Then I can redirect the user if he is not logged in.</p><blockquote><a href="https://stackoverflow.com/users/1048274" rel="noopener"><strong><em>Ludohen</em></strong></a><strong><em> answered, (223+ points)</em></strong></blockquote><p>In Angular 2 you can <code>subscribe</code> (Rx event) to a Router instance. So you can do things like</p><pre><code class="language-ts">class MyClass {
constructor(private router: Router) {
router.subscribe((val) =&gt; /*whatever*/)
}
}</code></pre><p><strong>Edit</strong> (since rc.1)</p><pre><code class="language-ts">class MyClass {
constructor(private router: Router) {
router.changes.subscribe((val) =&gt; /*whatever*/)
}
}</code></pre><p><strong>Edit 2</strong> (since 2.0.0)</p><p>see also : <a href="https://angular.io/api/router/RouterEvent" rel="noopener">Router.events doc</a></p><pre><code class="language-ts">class MyClass {
constructor(private router: Router) {
router.events.subscribe((val) =&gt; {
// see also
console.log(val instanceof NavigationEnd)
});
}
}</code></pre><p><a href="https://stackoverflow.com/questions/33520043" rel="noopener"><strong>Source</strong></a><br><strong><a href="#599b" rel="noopener">Top</a></strong></p><h3 id="global-events-in-angular">Global Events in Angular</h3><blockquote>157+ points <em>? 8</em>3,980+ viewed <br><em><a href="https://stackoverflow.com/users/3368477/skovmand"><strong>skovmand</strong></a><strong> asked,</strong></em></blockquote><p>Is there no equivalent to <code>$scope.emit()</code> or <code>$scope.broadcast()</code> in Angular?</p><p>I know the <code>EventEmitter</code> functionality, but as far as I understand that will just emit an event to the parent HTML element.</p><p>What if I need to communicate between fx. siblings or between a component in the root of the DOM and an element nested several levels deep?</p><blockquote><a href="https://stackoverflow.com/users/3661630" rel="noopener"><strong><em>pixelbits</em></strong></a><strong><em> answered, (304+ points)</em></strong></blockquote><p>There is no equivalent to <code>$scope.emit()</code> or <code>$scope.broadcast()</code> from AngularJS. EventEmitter inside of a component comes close, but as you mentioned, it will only emit an event to the immediate parent component.</p><p>In Angular, there are other alternatives which I’ll try to explain below.</p><p>@Input() bindings allows the application model to be connected in a directed object graph (root to leaves). The default behavior of a component’s change detector strategy is to propagate all changes to an application model for all bindings from any connected component.</p><p>Aside: There are two types of models: View Models and Application Models. An application model is connected through @Input() bindings. A view model is a just a component property (not decorated with @Input()) which is bound in the component’s template.</p><p>To answer your questions:</p><p>What if I need to communicate between sibling components?</p><ol><li><strong>Shared Application Model</strong>: Siblings can communicate through a shared application model (just like angular 1). For example, when one sibling makes a change to a model, the other sibling that has bindings to the same model is automatically updated.</li><li><strong>Component Events</strong>: Child components can emit an event to the parent component using @Output() bindings. The parent component can handle the event, and manipulate the application model or it’s own view model. Changes to the Application Model are automatically propagated to all components that directly or indirectly bind to the same model.</li><li><strong>Service Events</strong>: Components can subscribe to service events. For example, two sibling components can subscribe to the same service event and respond by modifying their respective models. More on this below.</li></ol><p>How can I communicate between a Root component and a component nested several levels deep?</p><ol><li><strong>Shared Application Model</strong>: The application model can be passed from the Root component down to deeply nested sub-components through @Input() bindings. Changes to a model from any component will automatically propagate to all components that share the same model.</li><li><strong>Service Events</strong>: You can also move the EventEmitter to a shared service, which allows any component to inject the service and subscribe to the event. That way, a Root component can call a service method (typically mutating the model), which in turn emits an event. Several layers down, a grand-child component which has also injected the service and subscribed to the same event, can handle it. Any event handler that changes a shared Application Model, will automatically propagate to all components that depend on it. This is probably the closest equivalent to <code>$scope.broadcast()</code> from Angular 1. The next section describes this idea in more detail.</li></ol><p><strong>Example of an Observable Service that uses Service Events to Propagate Changes</strong></p><p>Here is an example of an observable service that uses service events to propagate changes. When a TodoItem is added, the service emits an event notifying its component subscribers.</p><pre><code class="language-ts">export class TodoItem {
constructor(public name: string, public done: boolean) {
}
}
export class TodoService {
public itemAdded$: EventEmitter&lt;TodoItem&gt;;
private todoList: TodoItem[] = [];
constructor() {
this.itemAdded$ = new EventEmitter();
}
public list(): TodoItem[] {
return this.todoList;
}
public add(item: TodoItem): void {
this.todoList.push(item);
this.itemAdded$.emit(item);
}
}</code></pre><p>Here is how a root component would subscribe to the event:</p><pre><code class="language-ts">export class RootComponent {
private addedItem: TodoItem;
constructor(todoService: TodoService) {
todoService.itemAdded$.subscribe(item =&gt; this.onItemAdded(item));
}
private onItemAdded(item: TodoItem): void {
// do something with added item
this.addedItem = item;
}
}</code></pre><p>A child component nested several levels deep would subscribe to the event in the same way:</p><pre><code class="language-ts">export class GrandChildComponent {
private addedItem: TodoItem;
constructor(todoService: TodoService) {
todoService.itemAdded$.subscribe(item =&gt; this.onItemAdded(item));
}
private onItemAdded(item: TodoItem): void {
// do something with added item
this.addedItem = item;
}
}</code></pre><p>Here is the component that calls the service to trigger the event (it can reside anywhere in the component tree):</p><pre><code class="language-ts">@Component({
selector: 'todo-list',
template: `
&lt;ul&gt;
&lt;li *ngFor="#item of model"&gt; {{ item.name }}
&lt;/li&gt;
&lt;/ul&gt;
&lt;br /&gt;
Add Item &lt;input type="text" #txt /&gt; &lt;button (click)="add(txt.value); txt.value='';"&gt;Add&lt;/button&gt;
`
})
export class TriggeringComponent{
private model: TodoItem[];
constructor(private todoService: TodoService) {
this.model = todoService.list();
}
add(value: string) {
this.todoService.add(new TodoItem(value, false));
}
}</code></pre><p>Reference: <a href="http://victorsavkin.com/post/110170125256/change-detection-in-angular-2" rel="noopener">Change Detection in Angular</a></p><p><a href="https://stackoverflow.com/questions/34700438" rel="noopener"><strong>Source</strong></a><br><strong><a href="#599b" rel="noopener">Top</a></strong></p><h3 id="what-are-differences-between-systemjs-and-webpack">What are differences between SystemJS and Webpack?</h3><blockquote>155+ points <em>? 6</em>0,183+ viewed <br><em><a href="https://stackoverflow.com/users/2516399/smartmouse"><strong>smartmouse</strong></a><strong> asked,</strong></em></blockquote><p>I’m creating my first Angular application and I would figure out what is the role of the module loaders. Why we need them? I tried to search and search on Google and I can’t understand why we need to install one of them to run our application?</p><p>Couldn’t it be enough to just use <code>import</code> to load stuff from node modules?</p><p>I have followed <a href="https://angular.io/docs/ts/latest/quickstart.html#!#systemjs" rel="noopener">this tutorial</a> (that uses SystemJS) and it makes me to use <code>systemjs.config.js</code> file:</p><pre><code class="language-js">/**
* System configuration for Angular samples
* Adjust as necessary for your application needs.
*/
(function(global) {
// map tells the System loader where to look for things
var map = {
'app':                  'transpiled', // 'dist',
'@angular':             'node_modules/@angular',
'angular2-in-memory-web-api': 'node_modules/angular2-in-memory-web-api',
'rxjs':                 'node_modules/rxjs'
};
// packages tells the System loader how to load when no filename and/or no extension
var packages = {
'app':                  { main: 'main.js',  defaultExtension: 'js' },
'rxjs':                 { defaultExtension: 'js' },
'angular2-in-memory-web-api': { main: 'index.js', defaultExtension: 'js' },
};
var ngPackageNames = [
'common',
'compiler',
'core',
'forms',
'http',
'platform-browser',
'platform-browser-dynamic',
'router',
'router-deprecated',
'upgrade',
];
// Individual files (~300 requests):
function packIndex(pkgName) {
packages['@angular/'+pkgName] = { main: 'index.js', defaultExtension: 'js' };
}
// Bundled (~40 requests):
function packUmd(pkgName) {
packages['@angular/'+pkgName] = { main: '/bundles/' + pkgName + '.umd.js', defaultExtension: 'js' };
}
// Most environments should use UMD; some (Karma) need the individual index files
var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;
// Add package entries for angular packages
ngPackageNames.forEach(setPackageConfig);
var config = {
map: map,
packages: packages
};
System.config(config);
})(this);</code></pre><p>Why we need this configuration file?<br>Why we need SystemJS (or WebPack or others)?<br>Finally, in your opinion what is the better?</p><blockquote><a href="https://stackoverflow.com/users/1873365" rel="noopener"><strong><em>Thierry Templier</em></strong></a><strong><em> answered, (97+ points)</em></strong></blockquote><p>If you go to the SystemJS Github page, you will see the description of the tool:</p><p><code>Universal dynamic module loader - loads ES6 modules, AMD, CommonJS and global scripts in the browser and NodeJS.</code></p><p>Because you use modules in TypeScript or ES6, you need a module loader. In the case of SystemJS, the <code>systemjs.config.js</code> allows us to configure the way in which module names are matched with their corresponding files.</p><p>This configuration file (and SystemJS) is necessary if you explicitly use it to import the main module of your application:</p><pre><code class="language-html">&lt;script&gt;
System.import('app').catch(function(err){ console.error(err); });
&lt;/script&gt;</code></pre><p>When using TypeScript, and configuring the compiler to the <code>commonjs</code> module, the compiler creates code that is no longer based on SystemJS. In this example, the typescript compiler config file would appear like this:</p><pre><code class="language-json">{
"compilerOptions": {
"target": "es5",
"module": "commonjs", // &lt;------
"moduleResolution": "node",
"sourceMap": true,
"emitDecoratorMetadata": true,
"experimentalDecorators": true,
"removeComments": false,
"noImplicitAny": false
}
}</code></pre><p>Webpack is a flexible module bundler. This means that it goes further and doesn’t only handle modules but also provides a way to package your application (concat files, uglify files, …). It also provides a dev server with load reload for development</p><p>SystemJS and Webpack are different but with SystemJS, you still have work to do (with <a href="http://gulpjs.com/" rel="noopener">Gulp</a> or <a href="https://github.com/systemjs/builder" rel="noopener">SystemJS builder</a> for example) to package your Angular2 application for production.</p><p><a href="https://stackoverflow.com/questions/38263406" rel="noopener"><strong>Source</strong></a><br><strong><a href="#599b" rel="noopener">Top</a></strong></p><h3 id="angular-can-t-find-promise-map-set-and-iterator">Angular: Can’t find Promise, Map, Set and Iterator</h3><blockquote>154+ points <em>? 9</em>0,201+ viewed <br><em><a href="https://stackoverflow.com/users/806963/stav-alfi"><strong>Stav Alfi</strong></a><strong> asked,</strong></em></blockquote><p>After installing Angular, the Typescript compiler keep getting some errors about not finding <code>Promise</code>, <code>Map</code>, <code>Set</code> and <code>Iterator</code>.</p><p>Until now I ignored them but now I need <code>Promise</code> so my code can work.</p><pre><code class="language-ts">import {Component} from 'angular2/core';
@Component({
selector: 'greeting-cmp',
template: `&lt;div&gt;{{ asyncGreeting | async}}&lt;/div&gt;`
})
export class GreetingCmp {
asyncGreeting: Promise&lt;string&gt; = new Promise(resolve =&gt; {
// after 1 second, the promise will resolve
window.setTimeout(() =&gt; resolve('hello'), 1000);
});
}
Additional information:
npm -v is 2.14.12
node -v is v4.3.1
typescript v is 1.6</code></pre><p><strong>The errors:</strong></p><pre><code class="language-bash">................ERROS OF MY CODE.................
C:\Users\armyTik\Desktop\angular2\greeting_cmp.ts
Error:(7, 20) TS2304: Cannot find name 'Promise'.
Error:(7, 42) TS2304: Cannot find name 'Promise'.
.........................................
C:\Users\armyTik\Desktop\angular2\node_modules\angular2\platform\browser.d.ts
Error:(77, 90) TS2304: Cannot find name 'Promise'.
C:\Users\armyTik\Desktop\angular2\node_modules\angular2\src\core\application_ref.d.ts
Error:(83, 60) TS2304: Cannot find name 'Promise'.
Error:(83, 146) TS2304: Cannot find name 'Promise'.
Error:(96, 51) TS2304: Cannot find name 'Promise'.
Error:(96, 147) TS2304: Cannot find name 'Promise'.
Error:(133, 90) TS2304: Cannot find name 'Promise'.
Error:(171, 81) TS2304: Cannot find name 'Promise'.
C:\Users\armyTik\Desktop\angular2\node_modules\angular2\src\core\change_detection\parser\locals.d.ts
Error:(3, 14) TS2304: Cannot find name 'Map'.
Error:(4, 42) TS2304: Cannot find name 'Map'.
C:\Users\armyTik\Desktop\angular2\node_modules\angular2\src\core\debug\debug_node.d.ts
Error:(14, 13) TS2304: Cannot find name 'Map'.
Error:(24, 17) TS2304: Cannot find name 'Map'.
Error:(25, 17) TS2304: Cannot find name 'Map'.
C:\Users\armyTik\Desktop\angular2\node_modules\angular2\src\core\di\provider.d.ts
Error:(436, 103) TS2304: Cannot find name 'Map'.
Error:(436, 135) TS2304: Cannot find name 'Map'.
C:\Users\armyTik\Desktop\angular2\node_modules\angular2\src\core\linker\compiler.d.ts
Error:(12, 50) TS2304: Cannot find name 'Promise'.
Error:(16, 41) TS2304: Cannot find name 'Promise'.
C:\Users\armyTik\Desktop\angular2\node_modules\angular2\src\core\linker\dynamic_component_loader.d.ts
Error:(108, 136) TS2304: Cannot find name 'Promise'.
Error:(156, 150) TS2304: Cannot find name 'Promise'.
Error:(197, 128) TS2304: Cannot find name 'Promise'.
Error:(203, 127) TS2304: Cannot find name 'Promise'.
Error:(204, 141) TS2304: Cannot find name 'Promise'.
Error:(205, 119) TS2304: Cannot find name 'Promise'.
C:\Users\armyTik\Desktop\angular2\node_modules\angular2\src\core\render\api.d.ts
Error:(13, 13) TS2304: Cannot find name 'Map'.
Error:(14, 84) TS2304: Cannot find name 'Map'.
C:\Users\armyTik\Desktop\angular2\node_modules\angular2\src\facade\async.d.ts
Error:(27, 33) TS2304: Cannot find name 'Promise'.
Error:(28, 45) TS2304: Cannot find name 'Promise'.
C:\Users\armyTik\Desktop\angular2\node_modules\angular2\src\facade\collection.d.ts
Error:(1, 25) TS2304: Cannot find name 'MapConstructor'.
Error:(2, 25) TS2304: Cannot find name 'SetConstructor'.
Error:(4, 27) TS2304: Cannot find name 'Map'.
Error:(4, 39) TS2304: Cannot find name 'Map'.
Error:(7, 9) TS2304: Cannot find name 'Map'.
Error:(8, 30) TS2304: Cannot find name 'Map'.
Error:(11, 43) TS2304: Cannot find name 'Map'.
Error:(12, 27) TS2304: Cannot find name 'Map'.
Error:(14, 23) TS2304: Cannot find name 'Map'.
Error:(15, 25) TS2304: Cannot find name 'Map'.
Error:(95, 41) TS2304: Cannot find name 'Set'.
Error:(96, 22) TS2304: Cannot find name 'Set'.
Error:(97, 25) TS2304: Cannot find name 'Set'.
C:\Users\armyTik\Desktop\angular2\node_modules\angular2\src\facade\lang.d.ts
Error:(13, 17) TS2304: Cannot find name 'Map'.
Error:(14, 17) TS2304: Cannot find name 'Set'.
Error:(78, 59) TS2304: Cannot find name 'Map'.
C:\Users\armyTik\Desktop\angular2\node_modules\angular2\src\facade\promise.d.ts
Error:(2, 14) TS2304: Cannot find name 'Promise'.
Error:(7, 32) TS2304: Cannot find name 'Promise'.
Error:(8, 38) TS2304: Cannot find name 'Promise'.
Error:(9, 35) TS2304: Cannot find name 'Promise'.
Error:(9, 93) TS2304: Cannot find name 'Promise'.
Error:(10, 34) TS2304: Cannot find name 'Promise'.
Error:(11, 32) TS2304: Cannot find name 'Promise'.
Error:(11, 149) TS2304: Cannot find name 'Promise'.
Error:(12, 43) TS2304: Cannot find name 'Promise'.
C:\Users\armyTik\Desktop\angular2\node_modules\angular2\src\http\headers.d.ts
Error:(43, 59) TS2304: Cannot find name 'Map'.
C:\Users\armyTik\Desktop\angular2\node_modules\angular2\src\http\url_search_params.d.ts
Error:(11, 16) TS2304: Cannot find name 'Map'.
C:\Users\armyTik\Desktop\angular2\node_modules\angular2\src\platform\browser\browser_adapter.d.ts
Error:(75, 33) TS2304: Cannot find name 'Map'.
C:\Users\armyTik\Desktop\angular2\node_modules\angular2\src\platform\dom\dom_adapter.d.ts
Error:(85, 42) TS2304: Cannot find name 'Map'.
C:\Users\armyTik\Desktop\angular2\node_modules\rxjs\CoreOperators.d.ts
Error:(35, 67) TS2304: Cannot find name 'Promise'.
Error:(50, 66) TS2304: Cannot find name 'Promise'.
Error:(89, 67) TS2304: Cannot find name 'Promise'.
Error:(94, 38) TS2304: Cannot find name 'Promise'.
Error:(94, 50) TS2304: Cannot find name 'Promise'.
C:\Users\armyTik\Desktop\angular2\node_modules\rxjs\Observable.d.ts
Error:(46, 62) TS2304: Cannot find name 'Promise'.
Error:(47, 42) TS2304: Cannot find name 'Iterator'.
Error:(103, 74) TS2304: Cannot find name 'Promise'.
Error:(103, 84) TS2304: Cannot find name 'Promise'.
Error:(143, 66) TS2304: Cannot find name 'Promise'.
Error:(158, 65) TS2304: Cannot find name 'Promise'.
Error:(201, 66) TS2304: Cannot find name 'Promise'.
Error:(206, 38) TS2304: Cannot find name 'Promise'.
Error:(206, 50) TS2304: Cannot find name 'Promise'.
C:\Users\armyTik\Desktop\angular2\node_modules\rxjs\observable\ForkJoinObservable.d.ts
Error:(6, 50) TS2304: Cannot find name 'Promise'.
Error:(7, 58) TS2304: Cannot find name 'Promise'.
C:\Users\armyTik\Desktop\angular2\node_modules\rxjs\observable\FromObservable.d.ts
Error:(7, 38) TS2304: Cannot find name 'Promise'.
Error:(7, 51) TS2304: Cannot find name 'Iterator'.
C:\Users\armyTik\Desktop\angular2\node_modules\rxjs\observable\PromiseObservable.d.ts
Error:(9, 31) TS2304: Cannot find name 'Promise'.
Error:(10, 26) TS2304: Cannot find name 'Promise'.</code></pre><blockquote><a href="https://stackoverflow.com/users/1949099" rel="noopener"><strong><em>Kris Hollenbeck</em></strong></a><strong><em> answered, (162+ points)</em></strong></blockquote><h4 id="angular-rc4-angular-2-0-0-with-typescript-2-0-0">Angular RC4 — Angular ^2.0.0 with Typescript 2.0.0</h4><p><em>Updated 9/19/2016</em></p><p>To get this to work with typescript 2.0.0, I did the following.</p><p><code>npm install --save-dev @types/core-js</code></p><p><strong>tsconfig.json</strong></p><pre><code class="language-json">"compilerOptions": {
"declaration": false,
"emitDecoratorMetadata": true,
"experimentalDecorators": true,
"mapRoot": "./",
"module": "es6",
"moduleResolution": "node",
"noEmitOnError": true,
"noImplicitAny": false,
"outDir": "../dist/out-tsc",
"sourceMap": true,
"target": "es5",
"typeRoots": [
"../node_modules/@types"
],
"types": [
"core-js"
]
}</code></pre><p><strong>More about @types with typescript 2.0.0.</strong></p><ol><li><a href="https://blogs.msdn.microsoft.com/typescript/2016/06/15/the-future-of-declaration-files/" rel="noopener">https://blogs.msdn.microsoft.com/typescript/2016/06/15/the-future-of-declaration-files/</a></li><li><a href="https://www.npmjs.com/~types" rel="noopener">https://www.npmjs.com/~types</a></li></ol><p>Install Example:</p><pre><code>npm install --save-dev @types/core-js</code></pre><p><strong>Duplicate Identifier errors</strong></p><p>This is most likely because duplicate ecmascript 6 typings are already being imported from somewhere else most likely an old es6-shim.</p><p>Double check <code>typings.d.ts</code> make sure there are no references to <code>es6</code>. Remove any reference to <code>es6</code> from your typings directory if you have one.</p><p><strong>For Example:</strong></p><p>This will conflict with <code>types:['core-js']</code> in typings.json.</p><pre><code class="language-json">{
"globalDependencies": {
"core-js": "registry:dt/core-js#0.0.0+20160602141332"
// es6-shim will also conflict
}
}</code></pre><p>Including <code>core-js</code> in the types array in <code>tsconfig.json</code> should be the only place it is imported from.</p><p><strong>Angular CLI 1.0.0-beta.30</strong></p><p>If you are using the Angular-CLI, remove the lib array in <code>typings.json</code>. This seems to conflict with declaring core-js in types.</p><pre><code class="language-json">"compilerOptions" : {
...
// removed "lib": ["es6", dom"],
...
},
(response) =&gt; this.onGetForecastResult(response.json()),
(error) =&gt; this.onGetForecastError(error.json()),
() =&gt; this.onGetForecastComplete()
);</code></pre><p>Now my StaticSettings.BASE_URL is something like a url with no query string like: <a href="http://atsomeplace.com/" rel="noopener">http://atsomeplace.com/</a> but I want it to be <a href="http://atsomeplace.com/?var1=val1&amp;var2=val2" rel="noopener">http://atsomeplace.com/?var1=val1&amp;var2=val2</a></p><p>Where var1, and var2 fit on my Http request object? I want to add them like an object.</p><pre><code class="language-json">{
query: {
var1: val1,
var2: val2
}
}</code></pre><p>and then just the Http module do the job to parse it into URL query string.</p><blockquote><a href="https://stackoverflow.com/users/5152732" rel="noopener"><strong><em>toskv</em></strong></a><strong><em> answered, (216+ points)</em></strong></blockquote><p>The <a href="https://angular.io/api/common/http/HttpClient" rel="noopener"><strong>HttpClient</strong></a> methods allow you to set the <strong>params</strong> in it’s options.</p><p>You can configure it by importing the <a href="https://angular.io/api/common/http" rel="noopener"><strong>HttpClientModule</strong></a> from the @angular/common/http package.</p><pre><code class="language-ts">import {HttpClientModule} from '@angular/common/http';
@NgModule({
imports: [ BrowserModule, HttpClientModule ],
declarations: [ App ],
bootstrap: [ App ]
})
export class AppModule {}</code></pre><p>After that you can inject the <strong>HttpClient</strong> and use it to do the request.</p><pre><code class="language-ts">import {HttpClient} from '@angular/common/http'</code></pre><pre><code class="language-ts">import {HttpClient} from '@angular/common/http'
@Component({
selector: 'my-app',
template: `
&lt;div&gt;
&lt;h2&gt;Hello {{name}}&lt;/h2&gt;
&lt;/div&gt;
`,
})
export class App {
name:string;
constructor(private httpClient: HttpClient) {
this.httpClient.get('/url', {
params: {
appid: 'id1234',
cnt: '5'
},
observe: 'response'
})
.toPromise()
.then(response =&gt; {
console.log(response);
})
.catch(console.log);
}
}</code></pre><p>You can find a working example <a href="https://plnkr.co/edit/G4mczOLOHfVYKpuaWee3?p=preview" rel="noopener">here</a>.</p><p>For angular versions prior to version 4 you can do the same using the <strong>Http</strong> service.</p><p>The <strong>Http.get</strong> method takes an object that implements <a href="https://angular.io/docs/ts/latest/api/http/index/RequestOptionsArgs-interface.html" rel="noopener">RequestOptionsArgs</a> as a second parameter.</p><p>The <strong>search</strong> field of that object can be used to set a string or a <a href="https://angular.io/docs/ts/latest/api/http/index/URLSearchParams-class.html" rel="noopener">URLSearchParams</a> object.</p><p>An example:</p><pre><code class="language-ts">// Parameters obj-
let params: URLSearchParams = new URLSearchParams();
params.set('appid', StaticSettings.API_KEY);
params.set('cnt', days.toString());
//Http request-
return this.http.get(StaticSettings.BASE_URL, {
search: params
}).subscribe(
(response) =&gt; this.onGetForecastResult(response.json()),
(error) =&gt; this.onGetForecastError(error.json()),
() =&gt; this.onGetForecastComplete()
);</code></pre><p>The documentation for the <strong>Http</strong> class has more details. It can be found <a href="https://angular.io/docs/ts/latest/api/http/index/Http-class.html" rel="noopener">here</a> and an working example <a href="https://plnkr.co/edit/pKdztZBHr0wr1YLmmI8P?p=preview" rel="noopener">here</a>.</p><p><a href="https://stackoverflow.com/questions/34475523" rel="noopener"><strong>Source</strong></a><br><strong><a href="#599b" rel="noopener">Top</a></strong></p><h3 id="how-do-you-deploy-angular-apps">How do you deploy Angular apps?</h3><blockquote>153+ points <em>? 8</em>9,991+ viewed <br><em><a href="https://stackoverflow.com/users/1362355/joseph-girgis"><strong>Joseph Assem Sobhy</strong></a><strong> asked,</strong></em></blockquote><p>How do you deploy Angular apps once they reach the production phase?</p><p>All the guides I’ve seen so far (even on <a href="https://angular.io/" rel="noopener">angular.io</a>) are counting on a lite-server for serving and browserSync to reflect changes — but when you finish with development, how can you publish the app?</p><p>Do I import all the compiled <code>.js</code> files on the <code>index.html</code> page or do I minify them using gulp? Will they work? Do I need SystemJS at all in the production version?</p><blockquote><a href="https://stackoverflow.com/users/1035889" rel="noopener"><strong><em>Amid</em></strong></a><strong><em> answered, (74+ points)</em></strong></blockquote><p>You are actually here touching two questions in one. First one is how to host your application. And as @toskv mentioned its really too broad question to be answered and depends on numerous different things. Second one is more specific — how do you prepare the deployment version of the application. You have several options here:</p><ol><li>Deploy as it is. Just that — no minification, concatenation, name mangling etc. Transpile all your ts project, copy all your resulting js/css/… sources + dependencies to the hosting server and your are good to go.</li><li>Deploy using special bundling tools. Like webpack or systemjs builder. They come with all possibilities that are lacking in #1. You can pack all your app code into just couple of js/css/… files that you reference in your html. Systemjs buider even allows you to get rid of need to include systemjs as part of your deployment package.</li></ol><p>Yes you will most likely need to deploy systemjs and bunch of other external libraries as part of your package. And yes you will be able to bundle them into just couple of js files you reference from your html page. You do not have to reference all your compiled js files from the page though — systemjs as a module loader will take care of that.</p><p>I know it sounds muddy — to help get you started with the #2 here are two really good sample applications:</p><p>SystemJS builder: <a href="https://github.com/mgechev/angular2-seed" rel="noopener">angular2 seed</a></p><p>WebPack: <a href="https://github.com/AngularClass/angular2-webpack-starter" rel="noopener">angular2 webpack starter</a></p><p>Look how they do it — and hopefully this will help you to find your way of bundling apps you make.</p><p><a href="https://stackoverflow.com/questions/35539622" rel="noopener"><strong>Source</strong></a><br><strong><a href="#599b" rel="noopener">Top</a></strong></p><h3 id="ngfor-with-index-as-value-in-attribute">ngFor with index as value in attribute</h3><blockquote>149+ points <em>? 1</em>95,294+ viewed <br><em><a href="https://stackoverflow.com/users/1175327/vivendi"><strong>Vivendi</strong></a><strong> asked,</strong></em></blockquote><p>I have a simple <code>ngFor</code> loop which also keeps track of the current <code>index</code>. I want to store that <code>index</code> value in an attribute so I can print it. But I can't figure out how this works.</p><p>I basically have this:</p><pre><code class="language-ts">&lt;ul *ngFor="#item of items; #i = index" data-index="#i"&gt;
&lt;li&gt;{{item}}&lt;/li&gt;
&lt;/ul&gt;</code></pre><p>I want to store the value of <code>#i</code> in the attribute <code>data-index</code>. I tried several methods but none of them worked.</p><p>I have a demo here: <a href="http://plnkr.co/edit/EXpOKAEIFlI9QwuRcZqp?p=preview" rel="noopener">http://plnkr.co/edit/EXpOKAEIFlI9QwuRcZqp?p=preview</a></p><p>How can I store the <code>index</code> value in the <code>data-index</code> attribute?</p><blockquote><a href="https://stackoverflow.com/users/1873365" rel="noopener"><strong><em>Thierry Templier</em></strong></a><strong><em> answered, (284+ points)</em></strong></blockquote><p>I would use this syntax to set the index value into an attribute of the HTML element:</p><pre><code class="language-ts">&lt;ul&gt;
&lt;li *ngFor="#item of items; #i = index" [attr.data-index]="i"&gt;
{{item}}
&lt;/li&gt;
&lt;/ul&gt;</code></pre><p>Here is the updated plunkr: <a href="http://plnkr.co/edit/LiCeyKGUapS5JKkRWnUJ?p=preview" rel="noopener">http://plnkr.co/edit/LiCeyKGUapS5JKkRWnUJ?p=preview</a>.</p><p><strong>Update for recent angular 2 releases</strong> You have to use <code>let</code> to declare the value rather than <code>#</code>.</p><pre><code class="language-ts">&lt;ul&gt;
&lt;li *ngFor="let item of items; let i = index" [attr.data-index]="i"&gt;
{{item}}
&lt;/li&gt;
&lt;/ul&gt;</code></pre><p><a href="https://stackoverflow.com/questions/35405618" rel="noopener"><strong>Source</strong></a><br><strong><a href="#599b" rel="noopener">Top</a></strong></p><h3 id="define-global-constants-in-angular-2">Define global constants in Angular 2</h3><blockquote>149+ points <em>? 1</em>28,101+ viewed <br><em><a href="https://stackoverflow.com/users/2946773/andrefeijo"><strong>AndreFeijo</strong></a><strong> asked,</strong></em></blockquote><p>In Angular 1.x you can define constants like this:</p><pre><code class="language-ts">angular.module('mainApp.config', [])
.constant('API_ENDPOINT', 'http://127.0.0.1:6666/api/')</code></pre><p>What would be the equivalent in Angular2 (with Typescript)? I just don’t want to repeat the API base url over and over again in all my services.</p><blockquote><a href="https://stackoverflow.com/users/2946773" rel="noopener"><strong><em>AndreFeijo</em></strong></a><strong><em> answered, (159+ points)</em></strong></blockquote><p><strong>Below changes works for me on Angular 2 final version:</strong></p><pre><code class="language-ts">export class AppSettings {
public static API_ENDPOINT='http://127.0.0.1:6666/api/';
}</code></pre><p><strong>And then in the service:</strong></p><pre><code class="language-ts">import {Http} from 'angular2/http';
import {Message} from '../models/message';
import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {AppSettings} from '../appSettings';
import 'rxjs/add/operator/map';
@Injectable()
export class MessageService {
constructor(private http: Http) { }
getMessages(): Observable&lt;Message[]&gt; {
return this.http.get(AppSettings.API_ENDPOINT+'/messages')
.map(response =&gt; response.json())
.map((messages: Object[]) =&gt; {
return messages.map(message =&gt; this.parseData(message));
});
}
private parseData(data): Message {
return new Message(data);
}
}</code></pre><p><a href="https://stackoverflow.com/questions/34986922" rel="noopener"><strong>Source</strong></a><br><strong><a href="#599b" rel="noopener">Top</a></strong></p><h3 id="angular-use-pipes-in-services-and-components">Angular — Use pipes in services and components</h3><blockquote>148+ points <em>? 7</em>5,716+ viewed <br><em><a href="https://stackoverflow.com/users/4602586/posix-compliant"><strong>POSIX-compliant</strong></a><strong> asked,</strong></em></blockquote><p>In AngularJS, I am able to use filters (pipes) inside of services and controllers using syntax similar to this:</p><pre><code class="language-ts">$filter('date')(myDate, 'yyyy-MM-dd');</code></pre><p>Is it possible to use pipes in services/components like this in Angular?</p><blockquote><a href="https://stackoverflow.com/users/971121" rel="noopener"><strong><em>cexbrayat</em></strong></a><strong><em> answered, (271+ points)</em></strong></blockquote><p>As usual in Angular, you can rely on dependency injection:</p><pre><code class="language-ts">import { DatePipe } from '@angular/common';
class MyService {
constructor(private datePipe: DatePipe) {}
transformDate(date) {
this.datePipe.transform(myDate, 'yyyy-MM-dd');
}
}</code></pre><p>Add <code>DatePipe</code> to your providers list in your module; if you forget to do this you'll get an error <code>no provider for DatePipe</code>:</p><pre><code>providers: [DatePipe,...]</code></pre><p>Be warned though that the <code>DatePipe</code> was relying on the Intl API until version 5, which is not supported by all browsers (check the <a href="http://kangax.github.io/compat-table/esintl/" rel="noopener">compatibility table</a>).</p><p>If you’re using older Angular versions, you should add the <code>Intl</code> polyfill to your project to avoid any problem. See this <a href="https://stackoverflow.com/questions/35017800/ionic-2-using-angular-2-pipe-breaks-on-ios-cant-find-variable-intl/35018352#35018352" rel="noopener">related question</a> for a more detailed answer.</p><p><a href="https://stackoverflow.com/questions/35144821" rel="noopener"><strong>Source</strong></a><br><strong><a href="#599b" rel="noopener">Top</a></strong></p><h3 id="angular2-exception-can-t-bind-to-routerlink-since-it-isn-t-a-known-native-property">Angular2 Exception: Can’t bind to ‘routerLink’ since it isn’t a known native property</h3><blockquote>144+ points <em>? 8</em>3,326+ viewed <br><em><a href="https://stackoverflow.com/users/1798547/lester-burnham"><strong>Lester Burnham</strong></a><strong> asked,</strong></em></blockquote><p>Obviously the beta for Angular2 is newer than new, so there’s not much information out there, but I am trying to do what I think is some fairly basic routing.</p><p>Hacking about with the quick-start code and other snippets from the <a href="https://angular.io" rel="noopener">https://angular.io</a> website has resulted in the following file structure:</p><pre><code>angular-testapp/
app/
app.component.ts
boot.ts
routing-test.component.ts
index.html</code></pre><p>With the files being populated as follows:</p><p><strong>index.html</strong></p><pre><code class="language-html">&lt;html&gt;
&lt;head&gt;
&lt;base href="/"&gt;
&lt;title&gt;Angular 2 QuickStart&lt;/title&gt;
&lt;link href="../css/bootstrap.css" rel="stylesheet"&gt;
&lt;!-- 1. Load libraries --&gt;
&lt;script src="node_modules/angular2/bundles/angular2-polyfills.js"&gt;&lt;/script&gt;
&lt;script src="node_modules/systemjs/dist/system.src.js"&gt;&lt;/script&gt;
&lt;script src="node_modules/rxjs/bundles/Rx.js"&gt;&lt;/script&gt;
&lt;script src="node_modules/angular2/bundles/angular2.dev.js"&gt;&lt;/script&gt;
&lt;script src="node_modules/angular2/bundles/router.dev.js"&gt;&lt;/script&gt;
&lt;!-- 2. Configure SystemJS --&gt;
&lt;script&gt;
System.config({
packages: {
app: {
format: 'register',
defaultExtension: 'js'
}
}
});
System.import('app/boot')
.then(null, console.error.bind(console));
&lt;/script&gt;
&lt;/head&gt;
&lt;!-- 3. Display the application --&gt;
&lt;body&gt;
&lt;my-app&gt;Loading...&lt;/my-app&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre><p><strong>boot.ts</strong></p><pre><code class="language-ts">import {bootstrap}    from 'angular2/platform/browser'
import {ROUTER_PROVIDERS} from 'angular2/router';
import {AppComponent} from './app.component'
bootstrap(AppComponent, [
ROUTER_PROVIDERS
]);</code></pre><p><strong>app.component.ts</strong></p><pre><code class="language-ts">import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {RoutingTestComponent} from './routing-test.component';
@Component({
selector: 'my-app',
template: `
&lt;h1&gt;Component Router&lt;/h1&gt;
&lt;a [routerLink]="['RoutingTest']"&gt;Routing Test&lt;/a&gt;
&lt;router-outlet&gt;&lt;/router-outlet&gt;
`
})
@RouteConfig([
{path:'/routing-test', name: 'RoutingTest', component: RoutingTestComponent, useAsDefault: true},
])
export class AppComponent { }</code></pre><p><strong>routing-test.component.ts</strong></p><pre><code class="language-ts">import {Component} from 'angular2/core';
import {Router} from 'angular2/router';
@Component({
template: `
&lt;h2&gt;Routing Test&lt;/h2&gt;
&lt;p&gt;Interesting stuff goes here!&lt;/p&gt;
`
})
export class RoutingTestComponent { }</code></pre><p>Attempting to run this code produces the error:</p><pre><code class="language-bash">EXCEPTION: Template parse errors:
Can't bind to 'routerLink' since it isn't a known native property ("
&lt;h1&gt;Component Router&lt;/h1&gt;
&lt;a [ERROR -&gt;][routerLink]="['RoutingTest']"&gt;Routing Test&lt;/a&gt;
&lt;router-outlet&gt;&lt;/router-outlet&gt;
"): AppComponent@2:11</code></pre><p>I found a vaguely related issue here; <a href="https://stackoverflow.com/questions/34304115/router-link-directives-broken-after-upgrading-to-angular2-0-0-beta-0" rel="noopener">router-link directives broken after upgrading to angular2.0.0-beta.0</a>. However, the “working example” in one of the answers is based on pre-beta code — which may well still work, but I would like to know why the code I have created is not working.</p><p>Any pointers would be gratefully received!</p><blockquote><a href="https://stackoverflow.com/users/217408" rel="noopener"><strong><em>Günter Zöchbauer</em></strong></a><strong><em> answered, (220+ points)</em></strong></blockquote><p><strong>&gt;=R</strong>C.5</p><p>import the <code>RouterModule</code> See also <a href="https://angular.io/docs/ts/latest/guide/router.html" rel="noopener">https://angular.io/docs/ts/latest/guide/router.html</a></p><pre><code class="language-ts">@NgModule({
imports: [RouterModule],
...
})</code></pre><p><strong>&gt;=R</strong>C.2</p><p><strong>app.routes.ts</strong></p><pre><code class="language-ts">import { provideRouter, RouterConfig } from '@angular/router';
export const routes: RouterConfig = [
...
];
export const APP_ROUTER_PROVIDERS = [provideRouter(routes)];</code></pre><p><strong>main.ts</strong></p><pre><code>import { bootstrap } from '@angular/platform-browser-dynamic';
import { APP_ROUTER_PROVIDERS } from './app.routes';
bootstrap(AppComponent, [APP_ROUTER_PROVIDERS]);</code></pre><p><strong>&lt;=RC.1</strong></p><p>Your code is missing</p><pre><code class="language-ts">@Component({
...
directives: [ROUTER_DIRECTIVES],
...)}</code></pre><p>You can’t use directives like <code>routerLink</code> or <code>router-outlet</code> without making them known to your component.</p><p>While directive names were changed to be case-sensitive in Angular2, elements still use <code>-</code> in the name like <code>&lt;router-outl</code>et&gt; to be compatible with the web-components spec which requ<code>i</code>re a - in the name of custom elements.</p><p><strong>register globally</strong></p><p>To make <code>ROUTER_DIRECTIVES</code> globally available, add this provider to <code>bootstrap(...)</code>:</p><pre><code>provide(PLATFORM_DIRECTIVES, {useValue: [ROUTER_DIRECTIVES], multi: true})</code></pre><p>then it’s no longer necessary to add <code>ROUTER_DIRECTIVES</code> to each component.</p><p><a href="https://stackoverflow.com/questions/34317044" rel="noopener"><strong>Source</strong></a><br><strong><a href="#599b" rel="noopener">Top</a></strong></p><h3 id="angular-2-dynamic-tabs-with-user-click-chosen-components">Angular 2 dynamic tabs with user-click chosen components</h3><blockquote>143+ points <em>? 8</em>0,735+ viewed <br><em><a href="https://stackoverflow.com/users/2951897/cuel"><strong>Cuel</strong></a><strong> asked,</strong></em></blockquote><p>I’m trying to setup a tab system that allows for components to register themselves (with a title). The first tab is like an inbox, there’s plenty of actions/link items to choose from for the users, and each of these clicks should be able to instantiate a new component, on click. The actions / links comes in from JSON.</p><p>The instantiated component will then register itself as a new tab.</p><p>I’m not sure if this is the ‘best’ approach? Sofar the only guides I’ve seen are for static tabs, which doesn’t help.</p><p>So far I’ve only got the tabs service which is bootstrapped in main to persist throughout the app, looks ~something like this.</p><pre><code class="language-ts">export interface ITab { title: string; }
@Injectable()
export class TabsService {
private tabs = new Set&lt;ITab&gt;();
addTab(title: string): ITab {
let tab: ITab = { title };
this.tabs.add(tab);
return tab;
}
removeTab(tab: ITab) {
this.tabs.delete(tab);
}
}</code></pre><p>Questions:</p><p>1) How can I have a dynamic list in the inbox that creates new (different) tabs? I am sort of guessing the DynamicComponentBuilder would be used?</p><p>2) How can the components created from the inbox (on click) register themselves as tabs and also be shown? I’m guessing ng-content but I can’t find much info on how to use it</p><p>Edit: Try to clarify</p><p>Think of the inbox as a mail inbox, items are fetched as JSON and displays several items. Once one of the items is clicked, a new tab is created with that items action ‘type’. The type is then a component</p><p>Edit2: Image</p><p><a href="http://i.imgur.com/yzfMOXJ.png" rel="noopener">http://i.imgur.com/yzfMOXJ.png</a></p><blockquote><a href="https://stackoverflow.com/users/217408" rel="noopener"><strong><em>Günter Zöchbauer</em></strong></a><strong><em> answered, (190+ points)</em></strong></blockquote><p><strong>update</strong></p><p><a href="https://stackblitz.com/edit/angular-ygz3jg" rel="noopener"><strong>Angular 5 StackBlitz example</strong></a></p><p><strong>update</strong></p><p><code>ngComponentOutlet</code> was added to 4.0.0-beta.3</p><p><strong>update</strong></p><p>There is a <code>NgComponentOutlet</code> work in progress that does something similar <a href="https://github.com/angular/angular/pull/11235" rel="noopener">https://github.com/angular/angular/pull/11235</a></p><p><strong>RC.7</strong></p><p><a href="http://plnkr.co/edit/UGzoPTCHlXKWrn4p8gd1?p=preview" rel="noopener"><strong>Plunker example RC.7</strong></a></p><pre><code class="language-ts">// Helper component to add dynamic components
@Component({
selector: 'dcl-wrapper',
template: `&lt;div #target&gt;&lt;/div&gt;`
})
export class DclWrapper {
@ViewChild('target', {read: ViewContainerRef}) target: ViewContainerRef;
@Input() type: Type&lt;Component&gt;;
cmpRef: ComponentRef&lt;Component&gt;;
private isViewInitialized:boolean = false;
constructor(private componentFactoryResolver: ComponentFactoryResolver, private compiler: Compiler) {}
updateComponent() {
if(!this.isViewInitialized) {
return;
}
if(this.cmpRef) {
// when the `type` input changes we destroy a previously
// created component before creating the new one
this.cmpRef.destroy();
}
let factory = this.componentFactoryResolver.resolveComponentFactory(this.type);
this.cmpRef = this.target.createComponent(factory)
// to access the created instance use
// this.compRef.instance.someProperty = 'someValue';
// this.compRef.instance.someOutput.subscribe(val =&gt; doSomething());
}
ngOnChanges() {
this.updateComponent();
}
ngAfterViewInit() {
this.isViewInitialized = true;
this.updateComponent();
}
ngOnDestroy() {
if(this.cmpRef) {
this.cmpRef.destroy();
}
}
}</code></pre><p>Usage example</p><pre><code class="language-ts">// Use dcl-wrapper component
@Component({
selector: 'my-tabs',
template: `
&lt;h2&gt;Tabs&lt;/h2&gt;
&lt;div *ngFor="let tab of tabs"&gt;
&lt;dcl-wrapper [type]="tab"&gt;&lt;/dcl-wrapper&gt;
&lt;/div&gt;
`
})
export class Tabs {
@Input() tabs;
}
@Component({
selector: 'my-app',
template: `
&lt;h2&gt;Hello {{name}}&lt;/h2&gt;
&lt;my-tabs [tabs]="types"&gt;&lt;/my-tabs&gt;
`
})
export class App {
// The list of components to create tabs from
types = [C3, C1, C2, C3, C3, C1, C1];
}
@NgModule({
imports: [ BrowserModule ],
declarations: [ App, DclWrapper, Tabs, C1, C2, C3],
entryComponents: [C1, C2, C3],
bootstrap: [ App ]
})
export class AppModule {}</code></pre><p>See also <a href="https://angular.io/docs/ts/latest/cookbook/dynamic-component-loader.html" rel="noopener">angular.io DYNAMIC COMPONENT LOADER</a></p><p><strong>older versions</strong> <strong>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</strong></p><p>This changed again in Angular2 RC.5</p><p>I will update the example below but it’s the last day before vacation.</p><p>This <a href="http://plnkr.co/edit/3dzkMVXe4AGSRhk11TXG?p=preview" rel="noopener">Plunker example</a> demonstrates how to dynamically create components in RC.5</p><p><strong>Update — use <a href="https://angular.io/docs/ts/latest/api/core/index/ViewContainerRef-class.html" rel="noopener">ViewContainerRef</a>.createComponent()</strong></p><p>Because <code>DynamicComponentLoader</code> is deprecated, the approach needs to be update again.</p><pre><code class="language-ts">@Component({
selector: 'dcl-wrapper',
template: `&lt;div #target&gt;&lt;/div&gt;`
})
export class DclWrapper {
@ViewChild('target', {read: ViewContainerRef}) target;
@Input() type;
cmpRef:ComponentRef;
private isViewInitialized:boolean = false;
constructor(private resolver: ComponentResolver) {}
updateComponent() {
if(!this.isViewInitialized) {
return;
}
if(this.cmpRef) {
this.cmpRef.destroy();
}
this.resolver.resolveComponent(this.type).then((factory:ComponentFactory&lt;any&gt;) =&gt; {
this.cmpRef = this.target.createComponent(factory)
// to access the created instance use
// this.compRef.instance.someProperty = 'someValue';
// this.compRef.instance.someOutput.subscribe(val =&gt; doSomething());
});
}
ngOnChanges() {
this.updateComponent();
}
ngAfterViewInit() {
this.isViewInitialized = true;
this.updateComponent();
}
ngOnDestroy() {
if(this.cmpRef) {
this.cmpRef.destroy();
}
}
}</code></pre><p><a href="http://plnkr.co/edit/GJTLrnQdRDBvZenX59PZ?p=preview" rel="noopener"><strong>Plunker example RC.4</strong></a><br><a href="https://plnkr.co/edit/PpgMvS?p=preview" rel="noopener"><strong>Plunker example beta.17</strong></a></p><p><strong>Update — use loadNextToLocation</strong></p><pre><code class="language-ts">export class DclWrapper {
@ViewChild('target', {read: ViewContainerRef}) target;
@Input() type;
cmpRef:ComponentRef;
private isViewInitialized:boolean = false;
constructor(private dcl:DynamicComponentLoader) {}
updateComponent() {
// should be executed every time `type` changes but not before `ngAfterViewInit()` was called
// to have `target` initialized
if(!this.isViewInitialized) {
return;
}
if(this.cmpRef) {
this.cmpRef.destroy();
}
this.dcl.loadNextToLocation(this.type, this.target).then((cmpRef) =&gt; {
this.cmpRef = cmpRef;
});
}
ngOnChanges() {
this.updateComponent();
}
ngAfterViewInit() {
this.isViewInitialized = true;
this.updateComponent();
}
ngOnDestroy() {
if(this.cmpRef) {
this.cmpRef.destroy();
}
}
}</code></pre><p><a href="https://plnkr.co/edit/kc2Bgg?p=preview" rel="noopener"><strong>Plunker example beta.17</strong></a></p><p><strong>original</strong></p><p>Not entirely sure from your question what your requirements are but I think this should do what you want.</p><p>The <code>Tabs</code> component gets an array of types passed and it creates "tabs" for each item in the array.</p><pre><code class="language-ts">@Component({
selector: 'dcl-wrapper',
template: `&lt;div #target&gt;&lt;/div&gt;`
})
export class DclWrapper {
constructor(private elRef:ElementRef, private dcl:DynamicComponentLoader) {}
@Input() type;
ngOnChanges() {
if(this.cmpRef) {
this.cmpRef.dispose();
}
this.dcl.loadIntoLocation(this.type, this.elRef, 'target').then((cmpRef) =&gt; {
this.cmpRef = cmpRef;
});
}
}
@Component({
selector: 'c1',
template: `&lt;h2&gt;c1&lt;/h2&gt;`
})
export class C1 {
}
@Component({
selector: 'c2',
template: `&lt;h2&gt;c2&lt;/h2&gt;`
})
export class C2 {
}
@Component({
selector: 'c3',
template: `&lt;h2&gt;c3&lt;/h2&gt;`
})
export class C3 {
}
@Component({
selector: 'my-tabs',
directives: [DclWrapper],
template: `
&lt;h2&gt;Tabs&lt;/h2&gt;
&lt;div *ngFor="let tab of tabs"&gt;
&lt;dcl-wrapper [type]="tab"&gt;&lt;/dcl-wrapper&gt;
&lt;/div&gt;
`
})
export class Tabs {
@Input() tabs;
}
@Component({
selector: 'my-app',
directives: [Tabs]
template: `
&lt;h2&gt;Hello {{name}}&lt;/h2&gt;
&lt;my-tabs [tabs]="types"&gt;&lt;/my-tabs&gt;
`
})
export class App {
types = [C3, C1, C2, C3, C3, C1, C1];
}</code></pre><p><a href="https://plnkr.co/edit/kc2Bgg?p=preview" rel="noopener"><strong>Plunker example beta.15</strong></a> (not based on your Plunker)</p><p>There is also a way to pass data along that can be passed to the dynamically created component like (<code>someData</code> would need to be passed like <code>type</code>)</p><pre><code class="language-ts">this.dcl.loadIntoLocation(this.type, this.elRef, 'target').then((cmpRef) =&gt; {
cmpRef.instance.someProperty = someData;
this.cmpRef = cmpRef;
});</code></pre><p>There is also some support to use dependency injection with shared services.</p><p>For more details see <a href="https://angular.io/docs/ts/latest/cookbook/dynamic-component-loader.html" rel="noopener">https://angular.io/docs/ts/latest/cookbook/dynamic-component-loader.html</a></p><p><a href="https://stackoverflow.com/questions/36325212" rel="noopener"><strong>Source</strong></a><br><strong><a href="#599b" rel="noopener">Top</a></strong></p><h3 id="delegation-eventemitter-or-observable-in-angular">Delegation: EventEmitter or Observable in Angular</h3><blockquote>141+ points <em>? 7</em>8,505+ viewed <br><em><a href="https://stackoverflow.com/users/1066899/the-critic"><strong>the_critic</strong></a><strong> asked,</strong></em></blockquote><p>I am trying to implement something like a delegation pattern in Angular. When the user clicks on a <code>nav-item</code>, I would like to call a function which then emits an event which should in turn be handled by some other component listening for the event.</p><p>Here is the scenario: I have a <code>Navigation</code> component:</p><pre><code class="language-ts">import {Component, Output, EventEmitter} from 'angular2/core';
@Component({
// other properties left out for brevity
events : ['navchange'],
template:`
&lt;div class="nav-item" (click)="selectedNavItem(1)"&gt;&lt;/div&gt;
`
})
export class Navigation {
@Output() navchange: EventEmitter&lt;number&gt; = new EventEmitter();
selectedNavItem(item: number) {
console.log('selected nav item ' + item);
this.navchange.emit(item)
}
}</code></pre><p>Here is the observing component:</p><pre><code class="language-ts">export class ObservingComponent {
// How do I observe the event ?
// &lt;----------Observe/Register Event ?--------&gt;
public selectedNavItem(item: number) {
console.log('item index changed!');
}
}</code></pre><p>The key question is, how do I make the observing component observe the event in question ?</p><blockquote><a href="https://stackoverflow.com/users/215945" rel="noopener"><strong><em>Mark Rajcok</em></strong></a><strong><em> answered, (306+ points)</em></strong></blockquote><p><strong>Update 2016–06–27:</strong> instead of using Observables, use either</p><ul><li>a BehaviorSubject, as recommended by @Abdulrahman in a comment, or</li><li>a ReplaySubject, as recommended by @Jason Goemaat in a comment</li></ul><p>A <a href="http://reactivex.io/rxjs/manual/overview.html#subject" rel="noopener">Subject</a> is both an Observable (so we can <code>subscribe()</code> to it) and an Observer (so we can call <code>next()</code> on it to emit a new value). We exploit this feature. A Subject allows values to be multicast to many Observers. We don't exploit this feature (we only have one Observer).</p><p><a href="http://reactivex.io/rxjs/manual/overview.html#behaviorsubject" rel="noopener">BehaviorSubject</a> is a variant of Subject. It has the notion of “the current value”. We exploit this: whenever we create an ObservingComponent, it gets the current navigation item value from the BehaviorSubject automatically.</p><p>The code below and the <a href="http://plnkr.co/edit/XqwwUM44NQEpxQVFFxNW?p=preview" rel="noopener">plunker</a> use BehaviorSubject.</p><p><a href="http://reactivex.io/rxjs/manual/overview.html#replaysubject" rel="noopener">ReplaySubject</a> is another variant of Subject. If you want to wait until a value is actually produced, use <code>ReplaySubject(1)</code>. Whereas a BehaviorSubject requires an initial value (which will be provided immediately), ReplaySubject does not. ReplaySubject will always provide the most recent value, but since it does not have a required initial value, the service can do some async operation before returning it's first value. It will still fire immediately on subsequent calls with the most recent value. If you just want one value, use <code>first()</code> on the subscription. You do not have to unsubscribe if you use <code>first()</code>.</p><pre><code class="language-ts">import {Injectable}from '@angular/core'
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
@Injectable()
export class NavService {
// Observable navItem source
private _navItemSource = new BehaviorSubject&lt;number&gt;(0);
// Observable navItem stream
navItem$ = this._navItemSource.asObservable();
// service command
changeNav(number) {
this._navItemSource.next(number);
}
}
import {Component}    from '@angular/core';
import {NavService}   from './nav.service';
import {Subscription} from 'rxjs/Subscription';
@Component({
selector: 'obs-comp',
template: `obs component, item: {{item}}`
})
export class ObservingComponent {
item: number;
subscription:Subscription;
constructor(private _navService:NavService) {}
ngOnInit() {
this.subscription = this._navService.navItem$
.subscribe(item =&gt; this.item = item)
}
ngOnDestroy() {
// prevent memory leak when component is destroyed
this.subscription.unsubscribe();
}
}
@Component({
selector: 'my-nav',
template:`
&lt;div class="nav-item" (click)="selectedNavItem(1)"&gt;nav 1 (click me)&lt;/div&gt;
&lt;div class="nav-item" (click)="selectedNavItem(2)"&gt;nav 2 (click me)&lt;/div&gt;`
})
export class Navigation {
item = 1;
constructor(private _navService:NavService) {}
selectedNavItem(item: number) {
console.log('selected nav item ' + item);
this._navService.changeNav(item);
}
}</code></pre><p><a href="http://plnkr.co/edit/XqwwUM44NQEpxQVFFxNW?p=preview" rel="noopener">Plunker</a></p><p><strong>Original answer that uses an Observable:</strong> (it requires more code and logic than using a BehaviorSubject, so I don’t recommend it, but it may be instructive)</p><p>So, here’s an implementation that uses an Observable <a href="https://stackoverflow.com/a/34402436/215945" rel="noopener">instead of an EventEmitter</a>. Unlike my EventEmitter implementation, this implementation also stores the currently selected <code>navItem</code> in the service, so that when an observing component is created, it can retrieve the current value via API call <code>navItem()</code>, and then be notified of changes via the <code>navChange$</code> Observable.</p><pre><code class="language-ts">import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/share';
import {Observer} from 'rxjs/Observer';
export class NavService {
private _navItem = 0;
navChange$: Observable&lt;number&gt;;
private _observer: Observer;
constructor() {
this.navChange$ = new Observable(observer =&gt;
this._observer = observer).share();
// share() allows multiple subscribers
}
changeNav(number) {
this._navItem = number;
this._observer.next(number);
}
navItem() {
return this._navItem;
}
}
@Component({
selector: 'obs-comp',
template: `obs component, item: {{item}}`
})
export class ObservingComponent {
item: number;
subscription: any;
constructor(private _navService:NavService) {}
ngOnInit() {
this.item = this._navService.navItem();
this.subscription = this._navService.navChange$.subscribe(
item =&gt; this.selectedNavItem(item));
}
selectedNavItem(item: number) {
this.item = item;
}
ngOnDestroy() {
this.subscription.unsubscribe();
}
}
@Component({
selector: 'my-nav',
template:`
&lt;div class="nav-item" (click)="selectedNavItem(1)"&gt;nav 1 (click me)&lt;/div&gt;
&lt;div class="nav-item" (click)="selectedNavItem(2)"&gt;nav 2 (click me)&lt;/div&gt;
`,
})
export class Navigation {
item:number;
constructor(private _navService:NavService) {}
selectedNavItem(item: number) {
console.log('selected nav item ' + item);
this._navService.changeNav(item);
}
}</code></pre><p><a href="http://plnkr.co/edit/vL76b0UjrAav3Ao7kF4W?p=preview" rel="noopener">Plunker</a></p><p>See also the <a href="https://angular.io/docs/ts/latest/cookbook/component-communication.html#!#bidirectional-service" rel="noopener">Component Interaction Cookbook example</a>, which uses a <code>Subject</code> in addition to observables. Although the example is "parent and children communication," the same technique is applicable for unrelated components.</p><p><a href="https://stackoverflow.com/questions/34376854" rel="noopener"><strong>Source</strong></a><br><strong><a href="#599b" rel="noopener">Top</a></strong></p><h3 id="how-to-add-bootstrap-to-an-angular-cli-project">How to add bootstrap to an angular-cli project</h3><blockquote>140+ points <em>? 1</em>66,741+ viewed <br><em><a href="https://stackoverflow.com/users/811865/jerome"><strong>Jerome</strong></a><strong> asked,</strong></em></blockquote><p>We want to use bootstrap 4 (4.0.0-alpha.2) in our app generated with angular-cli 1.0.0-beta.5 (w/ node v6.1.0).</p><p>After getting bootstrap and its dependencies with npm, our first approach consisted in adding them in <code>angular-cli-build.js</code>:</p><pre><code class="language-js">'bootstrap/dist/**/*.min.+(js|css)',
'jquery/dist/jquery.min.+(js|map)',
'tether/dist/**/*.min.+(js|css)',</code></pre><p>and import them in our <code>index.html</code></p><pre><code class="language-html">&lt;script src="vendor/jquery/dist/jquery.min.js"&gt;&lt;/script&gt;
&lt;script src="vendor/tether/dist/js/tether.min.js"&gt;&lt;/script&gt;
&lt;link rel="stylesheet" type="text/css" href="vendor/bootstrap/dist/css/bootstrap.min.css"&gt;
&lt;script src="vendor/bootstrap/dist/js/bootstrap.min.js"&gt;&lt;/script&gt;</code></pre><p>This worked fine with <code>ng serve</code> but as soon as we produced a build with <code>-prod</code> flag all these dependencies disappeared from <code>dist/vendor</code> (surprise !).</p><p><strong>How we are intended to handle such scenario (i.e. loading bootstrap scripts) in a project generated with angular-cli ?</strong></p><p>We had the following thoughts but we don’t really know which way to go…</p><ul><li>use a CDN ? but we would rather serve these files to guarantee that they will be available</li><li>copy dependencies to <code>dist/vendor</code> after our <code>ng build -prod</code> ? But that seems like something angular-cli should provide since it 'takes care' of the build part ?</li><li>adding jquery, bootstrap and tether in src/system-config.ts and somehow pull them into our bundle in main.ts ? But that seemed wrong considering that we are not going to explicitly use them in our application’s code (unlike moment.js or something like lodash, for example)</li></ul><blockquote><a href="https://stackoverflow.com/users/1417742" rel="noopener"><strong><em>pd farhad</em></strong></a><strong><em> answered, (202+ points)</em></strong></blockquote><p>**IMPORTANT UPDATE: ng2-bootstrap is now replaced by <a href="https://github.com/valor-software/ngx-bootstrap" rel="noopener">ngx-bootstrap</a> **</p><p>ngx-bootstrap supports both angular 3 and 4.</p><p><strong>Update :</strong> <code><strong>1.0.0-beta.11-webpack</strong></code><strong> or above versions</strong></p><p>First of all check your angular-cli version with the following command in the terminal: <code>ng -v</code></p><p>If your angular-cli version is greater than <code>1.0.0-beta.11-webpack</code> then you should follow these steps:</p><ol><li>install <strong>ngx-bootstrap</strong> and <strong>bootstrap:</strong><br><code>npm install ngx-bootstrap bootstrap --save</code></li></ol><p>This line installs bootstrap 3 nowadays, but can install bootstrap 4 in future. Keep in mind ngx-bootstrap supports both versions.</p><ol><li>open <strong>src/app/app.module.ts</strong> and add<br><code>import { AlertModule } from 'ngx-bootstrap'; ... @NgModule({ ... imports: [AlertModule.forRoot(), ... ], ... })</code></li><li>open <strong>angular-cli.json</strong> and insert a new entry into the styles array<br><code>"styles": [ "styles.css", "../node_modules/bootstrap/dist/css/bootstrap.min.css" ],</code></li><li>open <strong>src/app/app.component.html</strong> and add<br><code>&lt;alert type="success"&gt;hello&amp;l</code>t;/alert&gt;</li></ol><p><strong>1.0.0-beta.10 or below versions:</strong></p><p>And, if your angular-cli version is 1.0.0-beta.10 or below versions then you can use below steps.</p><p>First go to the project directory and type</p><pre><code>npm install ngx-bootstrap --save</code></pre><p>then open your <strong>angular-cli-build.js</strong> and add this line</p><pre><code class="language-js">vendorNpmFiles: [
..................
'ngx-bootstrap/**/*.js',
....................
]</code></pre><p>now open your <strong>src/system-config.ts</strong>, write</p><pre><code class="language-ts">const map:any = {
..................
'ngx-bootstrap': 'vendor/ngx-bootstrap',
....................
}</code></pre><p>and</p><pre><code class="language-ts">const packages: any = {
'ngx-bootstrap': {
format: 'cjs',
defaultExtension: 'js',
main: 'ngx-bootstrap.js'
}
};</code></pre><p><a href="https://stackoverflow.com/questions/37649164" rel="noopener"><strong>Source</strong></a><br><strong><a href="#599b" rel="noopener">Top</a></strong></p><h3 id="access-key-and-value-of-object-using-ngfor">access key and value of object using *ngFor</h3><blockquote>136+ points <em>? 1</em>39,816+ viewed <br><em><a href="https://stackoverflow.com/users/5043867/pardeep-jain"><strong>Pardeep Jain</strong></a><strong> asked,</strong></em></blockquote><p>Bit confused about how to get <code>Key and Value</code> of object in angular2 while usng *ngFor for iteration over object. i know in angular 1.x there is syntax like</p><pre><code class="language-ts">ng-repeat="(key, value) in demo"</code></pre><p>but in angular2 i don’t know i tired the same but did’t get successful. i have tried the below code but did’t run please tell me where i am doing wrong.</p><pre><code class="language-ts">&lt;ul&gt;
&lt;li *ngFor='#key of demo'&gt;{{key}}&lt;/li&gt;
&lt;/ul&gt;
demo = {
'key1': [{'key11':'value11'}, {'key12':'value12'}],
'key2': [{'key21':'value21'}, {'key22':'value22'}],
}</code></pre><p>here is plnkr where i have tried the same : <a href="http://plnkr.co/edit/mIj619FncOpfdwrR0KeG?p=preview" rel="noopener">http://plnkr.co/edit/mIj619FncOpfdwrR0KeG?p=preview</a></p><p>I want to get <code>key1</code> and <code>key2</code> dynamically using *ngFor. How to get it? i searched a lot found idea of using pipe but how to use i dont know. is there any inbuild pipe for doing same in angular2 ?</p><blockquote><a href="https://stackoverflow.com/users/1873365" rel="noopener"><strong><em>Thierry Templier</em></strong></a><strong><em> answered, (134+ points)</em></strong></blockquote><p>You could create a custom pipe to return the list of key for each element. Something like that:</p><pre><code class="language-ts">import { PipeTransform, Pipe } from '@angular/core';
@Pipe({name: 'keys'})
export class KeysPipe implements PipeTransform {
transform(value, args:string[]) : any {
let keys = [];
for (let key in value) {
keys.push(key);
}
return keys;
}
}</code></pre><p>and use it like that:</p><pre><code class="language-ts">&lt;tr *ngFor="let c of content"&gt;
&lt;td *ngFor="let key of c | keys"&gt;{{key}}: {{c[key]}}&lt;/td&gt;
&lt;/tr&gt;</code></pre><p><strong>Edit</strong></p><p>You could also return an entry containing both key and value:</p><pre><code class="language-ts">@Pipe({name: 'keys'})
export class KeysPipe implements PipeTransform {
transform(value, args:string[]) : any {
let keys = [];
for (let key in value) {
keys.push({key: key, value: value[key]});
}
return keys;
}
}</code></pre><p>and use it like that:</p><pre><code class="language-ts">&lt;span *ngFor="let entry of content | keys"&gt;
Key: {{entry.key}}, value: {{entry.value}}
&lt;/span&gt;</code></pre><p><a href="https://stackoverflow.com/questions/35534959" rel="noopener"><strong>Source</strong></a><br><strong><a href="#599b" rel="noopener">Top</a></strong></p><h3 id="angular-exception-can-t-bind-to-ngfor-since-it-isn-t-a-known-native-property">Angular exception: Can’t bind to ‘ngFor’ since it isn’t a known native property</h3><blockquote>134+ points <em>? 6</em>3,054+ viewed <br><em><a href="https://stackoverflow.com/users/215945/mark-rajcok"><strong>Mark Rajcok</strong></a><strong> asked,</strong></em></blockquote><p>What am I doing wrong?</p><pre><code class="language-ts">import {bootstrap, Component} from 'angular2/angular2'
@Component({
selector: 'conf-talks',
template: `&lt;div *ngFor="talk of talks"&gt;
{{talk.title}} by {{talk.speaker}}
&lt;p&gt;{{talk.description}}
&lt;/div&gt;`
})
class ConfTalks {
talks = [ {title: 't1', speaker: 'Brian', description: 'talk 1'},
{title: 't2', speaker: 'Julie', description: 'talk 2'}];
}
@Component({
selector: 'my-app',
directives: [ConfTalks],
template: '&lt;conf-talks&gt;&lt;/conf-talks&gt;'
})
class App {}
bootstrap(App, [])</code></pre><p>The error is</p><pre><code class="language-bash">EXCEPTION: Template parse errors:
Can't bind to 'ngFor' since it isn't a known native property
("&lt;div [ERROR -&gt;]*ngFor="talk of talks"&gt;</code></pre><blockquote><a href="https://stackoverflow.com/users/215945" rel="noopener"><strong><em>Mark Rajcok</em></strong></a><strong><em> answered, (325+ points)</em></strong></blockquote><p>I missed <code>let</code> in front of <code>talk</code>:</p><pre><code class="language-ts">&lt;div *ngFor="let talk of talks"&gt;</code></pre><p>Note that <a href="https://github.com/angular/angular/blob/master/CHANGELOG.md#200-beta17-2016-04-28" rel="noopener">as of beta.17</a> usage of <code>#...</code> to declare local variables inside of structural directives like NgFor is deprecated. Use <code>let</code> instead. <br><code>&lt;div *ngFor="#talk of talk</code>s"&gt; now be<code>comes &lt;div *ngFor="let talk o</code>f talks"&gt;</p><p>Original answer:</p><p>I missed <code>#</code> in front of <code>talk</code>:</p><pre><code class="language-ts">&lt;div *ngFor="#talk of talks"&gt;</code></pre><p>It is so easy to forget that <code>#</code>. I wish the Angular exception error message would instead say:<br><code>you forgot that # again</code>.</p><p><a href="https://stackoverflow.com/questions/34012291" rel="noopener"><strong>Source</strong></a><br><strong><a href="#599b" rel="noopener">Top</a></strong></p><h3 id="how-to-add-font-awesome-to-angular-2-cli-project">How to add font-awesome to Angular 2 + CLI project</h3><blockquote>132+ points <em>? 7</em>1,934+ viewed <br><em><a href="https://stackoverflow.com/users/1394625/nik"><strong>Nik</strong></a><strong> asked,</strong></em></blockquote><p>I’m using Angular 2+ and Angular CLI.</p><p>How do I add font-awesome to my project?</p><blockquote><a href="https://stackoverflow.com/users/5904566" rel="noopener"><strong><em>AIon</em></strong></a><strong><em> answered, (285+ points)</em></strong></blockquote><p>After Angular 2.0 final release, <strong>the structure of the Angular2 CLI project has been changed</strong> — you don’t need any vendor files, no system.js — only webpack. So you do:</p><ol><li><code>npm install font-awesome --save</code></li><li>In the angular-cli.json file locate the <code>styles[]</code> array and add font-awesome references directory here, like below: <br><code>“apps”: [ { “root”: “src”, “outDir”: “dist”, …. “styles”: [ “styles.css”, “../node_modules/bootstrap/dist/css/bootstrap.css”, “../node_modules/font-awesome/css/font-awesome.css” // -here webpack will automatically build a link css element out of this!? ], … } ] ]</code></li><li>Place some font-awesome icons in any html file you want: <br><code>&lt;i class=”fa fa-american-sign-language-interpreting fa-5x” aria-hidden=”true”&gt; &lt;/i&gt;</code></li><li>Run <code>ng build</code> and <code>ng serve</code> again - because the watchers are only for the src folder and angular-cli.json is not observed for changes.</li><li>Enjoy your awesome icons!</li></ol><p><a href="https://stackoverflow.com/questions/38796541" rel="noopener"><strong>Source</strong></a><br><strong><a href="#599b" rel="noopener">Top</a></strong></p><h3 id="difference-between-http-and-httpclient-in-angular-4">Difference between HTTP and HTTPClient in angular 4?</h3><blockquote>130+ points <em>? 4</em>7,082+ viewed <br><em><a href="https://stackoverflow.com/users/3551590/aiyoub-amini"><strong>Aioub Amini</strong></a><strong> asked,</strong></em></blockquote><p>I want to know which one to use to build a mock web service to test the Angular program?</p><blockquote><a href="https://stackoverflow.com/users/2545680" rel="noopener"><strong><em>AngularInDepth.com</em></strong></a><strong><em> answered, (208+ points)</em></strong></blockquote><p>Use the <code>HttpClient</code> class from <code>HttpClientModule</code> if you're using Angular 4.3.x and above:</p><pre><code class="language-ts">import { HttpClientModule } from '@angular/common/http';
@NgModule({
imports: [
BrowserModule,
HttpClientModule
],
...
class MyService() {
constructor(http: HttpClient) {...}</code></pre><p>It’s an upgraded version of <code>http</code> from <code>@angular/http</code> module with the following improvements:</p><ul><li>Interceptors allow middleware logic to be inserted into the pipeline</li><li>Immutable request/response objects</li><li>Progress events for both request upload and response download</li></ul><p>You can read about how it works in <a href="https://blog.angularindepth.com/insiders-guide-into-interceptors-and-httpclient-mechanics-in-angular-103fbdb397bf" rel="noopener">Insider’s guide into interceptors and HttpClient mechanics in Angular</a>.</p><ul><li>Typed, synchronous response body access, including support for JSON body types</li><li>JSON is an assumed default and no longer needs to be explicitly parsed</li><li>Post-request verification &amp; flush based testing framework</li></ul><p>Going forward the old http client will be deprecated. Here are the links to the <a href="https://github.com/angular/angular/commit/37797e2" rel="noopener">commit message</a> and <a href="https://angular.io/guide/http" rel="noopener">the official docs</a>.</p><p>Also pay attention that old http was injected using <code>Http</code> class token instead of the new <code>HttpClient</code>:</p><pre><code class="language-ts">import { HttpModule } from '@angular/http';
@NgModule({
imports: [
BrowserModule,
HttpModule
],
...
class MyService() {
constructor(http: Http) {...}</code></pre><p>Also, new <code>HttpClient</code> seem to require <code>tslib</code> in runtime, so you have to install it <code>npm i tslib</code> and update <code>system.config.js</code> if you're using <code>SystemJS</code>:</p><pre><code class="language-ts">map: {
...
'tslib': 'npm:tslib/tslib.js',</code></pre><p>And you need to add another mapping if you use SystemJS:</p><pre><code>'@angular/common/http': 'npm:@angular/common/bundles/common-http.umd.js',</code></pre><p><a href="https://stackoverflow.com/questions/45129790" rel="noopener"><strong>Source</strong></a><br><strong><a href="#599b" rel="noopener">Top</a></strong></p><p><strong>That’s all for today. if you found this article helpful please help me to share it. </strong>? ? ?</p><p><strong>Follow me on <a href="http://medium.com/wizardnet972" rel="noopener">Medium </a>or <a href="https://twitter.com/wizardnet972" rel="noopener">Twitter </a>to read more about angular, webpack, typescript, nodejs and javascript! ? ? ?</strong></p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
