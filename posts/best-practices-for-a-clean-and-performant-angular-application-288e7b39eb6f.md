---
card: "https://cdn-media-1.freecodecamp.org/images/0*q3-4kypImPD0VDPg.jpg"
tags: [JavaScript]
description: by Vamsi Vempati
author: "Milad E. Fahmy"
title: "Best practices for a clean and performant Angular application"
created: "2021-08-15T19:41:23+02:00"
modified: "2021-08-15T19:41:23+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-angular tag-programming tag-typescript tag-tech ">
<header class="post-full-header">
<h1 class="post-full-title">Best practices for a clean and performant Angular application</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/0*q3-4kypImPD0VDPg.jpg 300w,
https://cdn-media-1.freecodecamp.org/images/0*q3-4kypImPD0VDPg.jpg 600w,
https://cdn-media-1.freecodecamp.org/images/0*q3-4kypImPD0VDPg.jpg 1000w,
https://cdn-media-1.freecodecamp.org/images/0*q3-4kypImPD0VDPg.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/0*q3-4kypImPD0VDPg.jpg" alt="Best practices for a clean and performant Angular application">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Vamsi Vempati</p>
<h1 id="best-practices-for-a-clean-and-performant-angular-application">Best practices for a clean and performant Angular application</h1>
<p>I have been working on a large scale Angular application at <a href="https://trademe.nz" rel="noopener">Trade Me</a>, New Zealand for a couple of years now. Over the past few years, our team has been refining our application both in terms of coding standards and performance to make it be in its best possible state.</p>
<p>This article outlines the practices we use in our application and is related to Angular, Typescript, RxJs and @ngrx/store. We’ll also go through some general coding guidelines to help make the application cleaner.</p>
<h4 id="1-trackby"><strong>1) trackBy</strong></h4>
<p>When using <code>ngFor</code> to loop over an array in templates, use it with a <code>trackBy</code> function which will return an unique identifier for each item.</p>
<p><strong>Why?</strong></p>
<p>When an array changes, Angular re-renders the whole DOM tree. But if you use <code>trackBy</code>, Angular will know which element has changed and will only make DOM changes for that particular element.</p>
<p>For a detailed explanation on this, please refer to <a href="https://netbasal.com/angular-2-improve-performance-with-trackby-cc147b5104e5" rel="noopener">this article</a> by <a href="undefined" rel="noopener">Netanel Basal</a>.</p>
<p><strong>Before</strong></p><pre><code class="language-ts">&lt;li *ngFor="let item of items;"&gt;{{ item }}&lt;/li&gt;</code></pre>
<p><strong>After</strong></p><pre><code class="language-ts">// in the template
&lt;li *ngFor="let item of items; trackBy: trackByFn"&gt;{{ item }}&lt;/li&gt;
// in the component
trackByFn(index, item) {
return item.id; // unique id corresponding to the item
}</code></pre>
<h4 id="2-const-vs-let"><strong>2) const vs let</strong></h4>
<p>When declaring variables, use const when the value is not going to be reassigned.</p>
<p><strong>Why?</strong></p>
<p>Using <code>let</code> and <code>const</code> where appropriate makes the intention of the declarations clearer. It will also help in identifying issues when a value is reassigned to a constant accidentally by throwing a compile time error. It also helps improve the readability of the code.</p>
<p><strong>Before</strong></p><pre><code class="language-ts">let car = 'ludicrous car';
let myCar = `My ${car}`;
let yourCar = `Your ${car};
if (iHaveMoreThanOneCar) {
myCar = `${myCar}s`;
}
if (youHaveMoreThanOneCar) {
yourCar = `${youCar}s`;
}</code></pre>
<p><strong>After</strong></p><pre><code class="language-ts">// the value of car is not reassigned, so we can make it a const
const car = 'ludicrous car';
let myCar = `My ${car}`;
let yourCar = `Your ${car};
if (iHaveMoreThanOneCar) {
myCar = `${myCar}s`;
}
if (youHaveMoreThanOneCar) {
yourCar = `${youCar}s`;
}</code></pre>
<h4 id="3-pipeable-operators">3) Pipeable operators</h4>
<p>Use pipeable operators when using RxJs operators.</p>
<p><strong>Why?</strong></p>
<p>Pipeable operators are tree-shakeable meaning only the code we need to execute will be included when they are imported.</p>
<p>This also makes it easy to identify unused operators in the files.</p>
<p><em>Note:</em> This needs Angular version 5.5+.</p>
<p><strong>Before</strong></p><pre><code class="language-ts">import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
iAmAnObservable
.map(value =&gt; value.item)
.take(1);</code></pre>
<p><strong>After</strong></p><pre><code class="language-ts">import { map, take } from 'rxjs/operators';
iAmAnObservable
.pipe(
map(value =&gt; value.item),
take(1)
);</code></pre>
<h4 id="4-isolate-api-hacks">4) Isolate API hacks</h4>
<p>Not all APIs are bullet proof — sometimes we need to add some logic in the code to make up for bugs in the APIs. Instead of having the hacks in components where they are needed, it is better to isolate them in one place — like in a service and use the service from the component.</p>
<p><strong>Why?</strong></p>
<p>This helps keep the hacks “closer to the API”, so as close to where the network request is made as possible. This way, less of your code is dealing with the un-hacked code. Also, it is one place where all the hacks live and it is easier to find them. When fixing the bugs in the APIs, it is easier to look for them in one file rather than looking for the hacks that could be spread across the codebase.</p>
<p>You can also create custom tags like API_FIX similar to TODO and tag the fixes with it so it is easier to find.</p>
<h4 id="5-subscribe-in-template">5) Subscribe in template</h4>
<p>Avoid subscribing to observables from components and instead subscribe to the observables from the template.</p>
<p><strong>Why?</strong></p>
<p><code>async</code> pipes unsubscribe themselves automatically and it makes the code simpler by eliminating the need to manually manage subscriptions. It also reduces the risk of accidentally forgetting to unsubscribe a subscription in the component, which would cause a memory leak. This risk can also be mitigated by using a lint rule to detect unsubscribed observables.</p>
<p>This also stops components from being stateful and introducing bugs where the data gets mutated outside of the subscription.</p>
<p><strong>Before</strong></p><pre><code>// // template
&lt;p&gt;{{ textToDisplay }}&lt;/p&gt;
// component
iAmAnObservable
.pipe(
map(value =&gt; value.item),
takeUntil(this._destroyed$)
)
.subscribe(item =&gt; this.textToDisplay = item);</code></pre>
<p><strong>After</strong></p><pre><code class="language-ts">// template
&lt;p&gt;{{ textToDisplay$ | async }}&lt;/p&gt;
// component
this.textToDisplay$ = iAmAnObservable
.pipe(
map(value =&gt; value.item)
);</code></pre>
<h4 id="6-clean-up-subscriptions"><strong>6) Clean up subscriptions</strong></h4>
<p>When subscribing to observables, always make sure you unsubscribe from them appropriately by using operators like <code>take</code>, <code>takeUntil</code>, etc.</p>
<p><strong>Why?</strong></p>
<p>Failing to unsubscribe from observables will lead to unwanted memory leaks as the observable stream is left open, potentially even after a component has been destroyed / the user has navigated to another page.</p>
<p>Even better, make a lint rule for detecting observables that are not unsubscribed.</p>
<p><strong>Before</strong></p><pre><code>iAmAnObservable
.pipe(
map(value =&gt; value.item)
)
.subscribe(item =&gt; this.textToDisplay = item);</code></pre>
<p><strong>After</strong></p>
<p>Using <code>takeUntil</code> when you want to listen to the changes until another observable emits a value:</p><pre><code>private _destroyed$ = new Subject();
public ngOnInit (): void {
iAmAnObservable
.pipe(
map(value =&gt; value.item)
// We want to listen to iAmAnObservable until the component is destroyed,
takeUntil(this._destroyed$)
)
.subscribe(item =&gt; this.textToDisplay = item);
}
public ngOnDestroy (): void {
this._destroyed$.next();
this._destroyed$.complete();
}</code></pre>
<p>Using a private subject like this is a pattern to manage unsubscribing many observables in the component.</p>
<p>Using <code>take</code> when you want only the first value emitted by the observable:</p><pre><code class="language-ts">iAmAnObservable
.pipe(
map(value =&gt; value.item),
take(1),
takeUntil(this._destroyed$)
)
.subscribe(item =&gt; this.textToDisplay = item);</code></pre>
<p>Note the usage of <code>takeUntil</code> with <code>take</code> here. This is to avoid memory leaks caused when the subscription hasn’t received a value before the component got destroyed. Without <code>takeUntil</code> here, the subscription would still hang around until it gets the first value, but since the component has already gotten destroyed, it will never get a value — leading to a memory leak.</p>
<h4 id="7-use-appropriate-operators">7) Use appropriate operators</h4>
<p>When using flattening operators with your observables, use the appropriate operator for the situation.</p>
<p><em>switchMap:</em> when you want to ignore the previous emissions when there is a new emission</p>
<p><em>mergeMap:</em> when you want to concurrently handle all the emissions</p>
<p><em>concatMap:</em> when you want to handle the emissions one after the other as they are emitted</p>
<p><em>exhaustMap: </em>when you want to cancel all the new emissions while processing a previous emisssion</p>
<p>For a more detailed explanation on this, please refer to <a href="https://blog.angularindepth.com/switchmap-bugs-b6de69155524" rel="noopener">this</a> article by <a href="undefined" rel="noopener">Nicholas Jamieson</a>.</p>
<p><strong>Why?</strong></p>
<p>Using a single operator when possible instead of chaining together multiple other operators to achieve the same effect can cause less code to be shipped to the user. Using the wrong operators can lead to unwanted behaviour, as different operators handle observables in different ways.</p>
<h4 id="8-lazy-load">8) Lazy load</h4>
<p>When possible, try to lazy load the modules in your Angular application. Lazy loading is when you load something only when it is used, for example, loading a component only when it is to be seen.</p>
<p><strong>Why?</strong></p>
<p>This will reduce the size of the application to be loaded and can improve the application boot time by not loading the modules that are not used.</p>
<p><strong>Before</strong></p><pre><code>// app.routing.ts
{ path: 'not-lazy-loaded', component: NotLazyLoadedComponent }</code></pre>
<p><strong>After</strong></p><pre><code class="language-ts">// app.routing.ts
{
path: 'lazy-load',
loadChildren: 'lazy-load.module#LazyLoadModule'
}
// lazy-load.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LazyLoadComponent }   from './lazy-load.component';
@NgModule({
imports: [
CommonModule,
RouterModule.forChild([
{
path: '',
component: LazyLoadComponent
}
])
],
declarations: [
LazyLoadComponent
]
})
export class LazyModule {}</code></pre>
<h4 id="9-avoid-having-subscriptions-inside-subscriptions">9) Avoid having subscriptions inside subscriptions</h4>
<p>Sometimes you may want values from more than one observable to perform an action. In this case, avoid subscribing to one observable in the subscribe block of another observable. Instead, use appropriate chaining operators. Chaining operators run on observables from the operator before them. Some chaining operators are: <code>withLatestFrom</code>, <code>combineLatest</code>, etc.</p>
<p><strong>Before</strong></p><pre><code>firstObservable$.pipe(
take(1)
)
.subscribe(firstValue =&gt; {
secondObservable$.pipe(
take(1)
)
.subscribe(secondValue =&gt; {
console.log(`Combined values are: ${firstValue} &amp; ${secondValue}`);
});
});</code></pre>
<p><strong>After</strong></p><pre><code class="language-ts">firstObservable$.pipe(
withLatestFrom(secondObservable$),
first()
)
.subscribe(([firstValue, secondValue]) =&gt; {
console.log(`Combined values are: ${firstValue} &amp; ${secondValue}`);
});</code></pre>
<p><strong>Why?</strong></p>
<p><em>Code smell/readability/complexity</em>: Not using RxJs to its full extent, suggests developer is not familiar with the RxJs API surface area.</p>
<p><em>Performance</em>: If the observables are cold, it will subscribe to firstObservable, wait for it to complete, THEN start the second observable’s work. If these were network requests it would show as synchronous/waterfall.</p>
<h4 id="10-avoid-any-type-everything-">10) Avoid any; type everything;</h4>
<p>Always declare variables or constants with a type other than <code>any</code>.</p>
<p><strong>Why?</strong></p>
<p>When declaring variables or constants in Typescript without a typing, the typing of the variable/constant will be deduced by the value that gets assigned to it. This will cause unintended problems. One classic example is:</p><pre><code>const x = 1;
const y = 'a';
const z = x + y;
console.log(`Value of z is: ${z}`
// Output
Value of z is 1a</code></pre>
<p>This can cause unwanted problems when you expect y to be a number too. These problems can be avoided by typing the variables appropriately.</p><pre><code>const x: number = 1;
const y: number = 'a';
const z: number = x + y;
// This will give a compile error saying:
Type '"a"' is not assignable to type 'number'.
const y:number</code></pre>
<p>This way, we can avoid bugs caused by missing types.</p>
<p>Another advantage of having good typings in your application is that it makes refactoring easier and safer.</p>
<p>Consider this example:</p><pre><code>public ngOnInit (): void {
let myFlashObject = {
name: 'My cool name',
age: 'My cool age',
loc: 'My cool location'
}
this.processObject(myFlashObject);
}
public processObject(myObject: any): void {
console.log(`Name: ${myObject.name}`);
console.log(`Age: ${myObject.age}`);
console.log(`Location: ${myObject.loc}`);
}
// Output
Name: My cool name
Age: My cool age
Location: My cool location</code></pre>
<p>Let us say, we want to rename the property <code>loc</code> to <code>location</code> in <code>myFlashObject</code>:</p><pre><code>public ngOnInit (): void {
let myFlashObject = {
name: 'My cool name',
age: 'My cool age',
location: 'My cool location'
}
this.processObject(myFlashObject);
}
public processObject(myObject: any): void {
console.log(`Name: ${myObject.name}`);
console.log(`Age: ${myObject.age}`);
console.log(`Location: ${myObject.loc}`);
}
// Output
Name: My cool name
Age: My cool age
Location: undefined</code></pre>
<p>If we do not have a typing on <code>myFlashObject</code>, it thinks that the property <code>loc</code> on <code>myFlashObject</code> is just undefined rather than that it is not a valid property.</p>
<p>If we had a typing for <code>myFlashObject</code>, we would get a nice compile time error as shown below:</p><pre><code>type FlashObject = {
name: string,
age: string,
location: string
}
public ngOnInit (): void {
let myFlashObject: FlashObject = {
name: 'My cool name',
age: 'My cool age',
// Compilation error
Type '{ name: string; age: string; loc: string; }' is not assignable to type 'FlashObjectType'.
Object literal may only specify known properties, and 'loc' does not exist in type 'FlashObjectType'.
loc: 'My cool location'
}
this.processObject(myFlashObject);
}
public processObject(myObject: FlashObject): void {
console.log(`Name: ${myObject.name}`);
console.log(`Age: ${myObject.age}`)
// Compilation error
Property 'loc' does not exist on type 'FlashObjectType'.
console.log(`Location: ${myObject.loc}`);
}</code></pre>
<p>If you are starting a new project, it is worth setting <code>strict:true</code> in the <code>tsconfig.json</code> file to enable all strict type checking options.</p>
<h4 id="11-make-use-of-lint-rules">11) Make use of lint rules</h4>
<p><code><a href="https://palantir.github.io/tslint/" rel="noopener">tslint</a></code> has various options built in already like <code><a href="https://palantir.github.io/tslint/rules/no-any" rel="noopener">no-any</a></code>, <code><a href="https://palantir.github.io/tslint/rules/no-magic-numbers" rel="noopener">no-magic-numbers</a></code>, <code><a href="https://palantir.github.io/tslint/rules/no-console" rel="noopener">no-console</a></code>, etc that you can configure in your <code>tslint.json</code> to enforce certain rules in your code base.</p>
<p><strong>Why?</strong></p>
<p>Having lint rules in place means that you will get a nice error when you are doing something that you should not be. This will enforce consistency in your application and readability. Please refer <a href="https://palantir.github.io/tslint/rules/" rel="noopener">here</a> for more rules that you can configure.</p>
<p>Some lint rules even come with fixes to resolve the lint error. If you want to configure your own custom lint rule, you can do that too. Please refer to <a href="https://medium.com/@phenomnominal/custom-typescript-lint-rules-with-tsquery-and-tslint-144184b6ff2d" rel="noopener">this article</a> by <a href="undefined" rel="noopener">Craig Spence</a> on how to write your own custom lint rules using <a href="https://github.com/phenomnomnominal/tsquery" rel="noopener">TSQuery</a>.</p>
<p><strong>Before</strong></p><pre><code>public ngOnInit (): void {
console.log('I am a naughty console log message');
console.warn('I am a naughty console warning message');
console.error('I am a naughty console error message');
}
// Output
No errors, prints the below on console window:
I am a naughty console message
I am a naughty console warning message
I am a naughty console error message</code></pre>
<p><strong>After</strong></p><pre><code>// tslint.json
{
"rules": {
.......
"no-console": [
true,
"log",    // no console.log allowed
"warn"    // no console.warn allowed
]
}
}
// ..component.ts
public ngOnInit (): void {
console.log('I am a naughty console log message');
console.warn('I am a naughty console warning message');
console.error('I am a naughty console error message');
}
// Output
Lint errors for console.log and console.warn statements and no error for console.error as it is not mentioned in the config
Calls to 'console.log' are not allowed.
Calls to 'console.warn' are not allowed.</code></pre>
<h4 id="12-small-reusable-components">12) Small reusable components</h4>
<p>Extract the pieces that can be reused in a component and make it a new one. Make the component as dumb as possible, as this will make it work in more scenarios. Making a component dumb means that the component does not have any special logic in it and operates purely based on the inputs and outputs provided to it.</p>
<p>As a general rule, the last child in the component tree will be the dumbest of all.</p>
<p><strong>Why?</strong></p>
<p>Reusable components reduce duplication of code therefore making it easier to maintain and make changes.</p>
<p>Dumb components are simpler, so they are less likely to have bugs. Dumb components make you think harder about the public component API, and help sniff out mixed concerns.</p>
<h4 id="13-components-should-only-deal-with-display-logic">13) Components should only deal with display logic</h4>
<p>Avoid having any logic other than display logic in your component whenever you can and make the component deal only with the display logic.</p>
<p><strong>Why?</strong></p>
<p>Components are designed for presentational purposes and control what the view should do. Any business logic should be extracted into its own methods/services where appropriate, separating business logic from view logic.</p>
<p>Business logic is usually easier to unit test when extracted out to a service, and can be reused by any other components that need the same business logic applied.</p>
<h4 id="14-avoid-long-methods">14) Avoid long methods</h4>
<p>Long methods generally indicate that they are doing too many things. Try to use the Single Responsibility Principle. The method itself as a whole might be doing one thing, but inside it, there are a few other operations that could be happening. We can extract those methods into their own method and make them do one thing each and use them instead.</p>
<p><strong>Why?</strong></p>
<p>Long methods are hard to read, understand and maintain. They are also prone to bugs, as changing one thing might affect a lot of other things in that method. They also make refactoring (which is a key thing in any application) difficult.</p>
<p>This is sometimes measured as “<a href="https://en.wikipedia.org/wiki/Cyclomatic_complexity" rel="noopener">cyclomatic complexity</a>”. There are also some <a href="https://www.npmjs.com/package/tslint-sonarts" rel="noopener">TSLint rules</a> to detect cyclomatic/cognitive complexity, which you could use in your project to avoid bugs and detect code smells and maintainability issues.</p>
<h4 id="15-dry">15) DRY</h4>
<p>Do not Repeat Yourself. Make sure you do not have the same code copied into different places in the codebase. Extract the repeating code and use it in place of the repeated code.</p>
<p><strong>Why?</strong></p>
<p>Having the same code in multiple places means that if we want to make a change to the logic in that code, we have to do it in multiple places. This makes it difficult to maintain and also is prone to bugs where we could miss updating it in all occurrences. It takes longer to make changes to the logic and testing it is a lengthy process as well.</p>
<p>In those cases, extract the repeating code and use it instead. This means only one place to change and one thing to test. Having less duplicate code shipped to users means the application will be faster.</p>
<h4 id="16-add-caching-mechanisms">16) Add caching mechanisms</h4>
<p>When making API calls, responses from some of them do not change often. In those cases, you can add a caching mechanism and store the value from the API. When another request to the same API is made, check if there is a value for it in the cache and if so, use it. Otherwise, make the API call and cache the result.</p>
<p>If the values change but not frequently, you can introduce a cache time where you can check when it was last cached and decide whether or not to call the API.</p>
<p><strong>Why?</strong></p>
<p>Having a caching mechanism means avoiding unwanted API calls. By only making the API calls when required and avoiding duplication, the speed of the application improves as we do not have to wait for the network. It also means we do not download the same information over and over again.</p>
<h4 id="17-avoid-logic-in-templates">17) Avoid logic in templates</h4>
<p>If you have any sort of logic in your templates, even if it is a simple <code>&amp;&amp;</code> clause, it is good to extract it out into its component.</p>
<p><strong>Why?</strong></p>
<p>Having logic in the template means that it is not possible to unit test it and therefore it is more prone to bugs when changing template code.</p>
<p><strong>Before</strong></p><pre><code>// template
&lt;p *ngIf="role==='developer'"&gt; Status: Developer &lt;/p&gt;
// component
public ngOnInit (): void {
this.role = 'developer';
}</code></pre>
<p><strong>After</strong></p><pre><code class="language-ts">// template
&lt;p *ngIf="showDeveloperStatus"&gt; Status: Developer &lt;/p&gt;
// component
public ngOnInit (): void {
this.role = 'developer';
this.showDeveloperStatus = true;
}</code></pre>
<h4 id="18-strings-should-be-safe">18) Strings should be safe</h4>
<p>If you have a variable of type string that can have only a set of values, instead of declaring it as a string type, you can declare the list of possible values as the type.</p>
<p><strong>Why?</strong></p>
<p>By declaring the type of the variable appropriately, we can avoid bugs while writing the code during compile time rather than during runtime.</p>
<p><strong>Before</strong></p><pre><code>private myStringValue: string;
if (itShouldHaveFirstValue) {
myStringValue = 'First';
} else {
myStringValue = 'Second'
}</code></pre>
<p><strong>After</strong></p><pre><code class="language-ts">private myStringValue: 'First' | 'Second';
if (itShouldHaveFirstValue) {
myStringValue = 'First';
} else {
myStringValue = 'Other'
}
// This will give the below error
Type '"Other"' is not assignable to type '"First" | "Second"'
(property) AppComponent.myValue: "First" | "Second"</code></pre>
<h3 id="bigger-picture"><strong>Bigger picture</strong></h3>
<h4 id="state-management">State Management</h4>
<p>Consider using <a href="https://github.com/ngrx/platform" rel="noopener">@ngrx/store</a> for maintaining the state of your application and <a href="https://github.com/ngrx/effects" rel="noopener">@ngrx/effects</a> as the side effect model for store. State changes are described by the actions and the changes are done by pure functions called reducers.</p>
<p><strong>Why?</strong></p>
<p><em>@ngrx/store</em> isolates all state related logic in one place and makes it consistent across the application. It also has memoization mechanism in place when accessing the information in the store leading to a more performant application. <em>@ngrx/store </em>combined with the change detection strategy of Angular leads to a faster application.</p>
<h4 id="immutable-state">Immutable state</h4>
<p>When using <em>@ngrx/store</em>, consider using <a href="https://github.com/brandonroberts/ngrx-store-freeze" rel="noopener">ngrx-store-freeze</a> to make the state immutable. <em>ngrx-store-freeze</em> prevents the state from being mutated by throwing an exception. This avoids accidental mutation of the state leading to unwanted consequences.</p>
<p><strong>Why?</strong></p>
<p>Mutating state in components leads to the app behaving inconsistently depending on the order components are loaded. It breaks the mental model of the redux pattern. Changes can end up overridden if the store state changes and re-emits. Separation of concerns — components are view layer, they should not know how to change state.</p>
<h4 id="jest">Jest</h4>
<p><a href="https://jestjs.io/" rel="noopener">Jest</a> is Facebook’s unit testing framework for JavaScript. It makes unit testing faster by parallelising test runs across the code base. With its watch mode, only the tests related to the changes made are run, which makes the feedback loop for testing way shorter. Jest<em> </em>also provides code coverage of the tests and is supported on VS Code and Webstorm.</p>
<p>You could use a <a href="https://github.com/thymikee/jest-preset-angular" rel="noopener">preset</a> for Jest that will do most of the heavy lifting for you when setting up Jest in your project.</p>
<h4 id="karma">Karma</h4>
<p><a href="https://karma-runner.github.io/2.0/index.html" rel="noopener">Karma</a> is a test runner developed by AngularJS team. It requires a real browser/DOM to run the tests. It can also run on different browsers. Jest doesn’t need chrome headless/phantomjs to run the tests and it runs in pure Node.</p>
<h4 id="universal">Universal</h4>
<p>If you haven’t made your app a <em>Universal</em> app, now is a good time to do it. <a href="https://angular.io/guide/universal" rel="noopener">Angular Universal</a> lets you run your Angular application on the server and does server-side rendering (SSR) which serves up static pre-rendered html pages. This makes the app super fast as it shows content on the screen almost instantly, without having to wait for JS bundles to load and parse, or for Angular to bootstrap.</p>
<p>It is also SEO friendly, as Angular Universal generates static content and makes it easier for the web crawlers to index the application and make it searchable without executing JavaScript.</p>
<p><strong>Why?</strong></p>
<p>Universal improves the performance of your application drastically. We recently updated our application to do server side rendering and the site load time went from several seconds to tens of milliseconds!!</p>
<p>It also allows your site to correctly show up in social media preview snippets. The first meaningful paint is really fast and makes content visible to the users without any unwanted delays.</p>
<h3 id="conclusion">Conclusion</h3>
<p>Building applications is a constant journey, and there’s always room to improve things. This list of optimisations is a good place to start, and applying these patterns consistently will make your team happy. Your users will also love you for the nice experience with your less buggy and performant application.</p>
<p><em>Thank you for reading! If you enjoyed this article, please feel free to </em>? <em>and help others find it. Please do not hesitate to share your thoughts in the comments section below. Follow me on <a href="https://medium.com/@vamsivempati">Medium</a> or <a href="https://twitter.com/_VamsiVempati_">Twitter</a> for more articles. Happy coding folks!! ?</em> ☕️</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
