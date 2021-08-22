---
card: "https://cdn-media-1.freecodecamp.org/images/1*apXhEl5f3wwTKH4fQYMExA.jpeg"
tags: [JavaScript]
description: "Animation is defined as the transition from an initial state "
author: "Milad E. Fahmy"
title: "How to use animation with Angular 6"
created: "2021-08-15T23:47:01+02:00"
modified: "2021-08-15T23:47:01+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-angularjs tag-tech tag-programming tag-coding ">
<header class="post-full-header">
<h1 class="post-full-title">How to use animation with Angular 6</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*apXhEl5f3wwTKH4fQYMExA.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*apXhEl5f3wwTKH4fQYMExA.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*apXhEl5f3wwTKH4fQYMExA.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*apXhEl5f3wwTKH4fQYMExA.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*apXhEl5f3wwTKH4fQYMExA.jpeg" alt="How to use animation with Angular 6">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
// other import definitions
@NgModule({ imports: [BrowserAnimationsModule // other imports]})</code></pre><h4 id="understanding-the-angular-animation-syntax"><strong>Understanding the Angular Animation Syntax</strong></h4><p>We will write our animation code inside the component’s metadata. The syntax for the animation is shown below:</p><pre><code class="language-ts">@Component({
// other component properties.
animations: [
trigger('triggerName'), [
state('stateName', style())
transition('stateChangeExpression', [Animation Steps])
]
]
})</code></pre><p>Here we will use a property called <code>animations</code>. This property will take an array as input. The array contains one or more “trigger”. Each trigger has a unique name and an implementation. The state and transitions for our animation need to be defined in the trigger implementation.</p><p>Each state function has a “stateName” defined to uniquely identify the state and a style function to show the style of the element in that state.</p><p>Each transition function has a <code>stateChangeExpression</code> defined to show the change of the state of an element and the corresponding array of animation steps to show how the transition will take place. We can include multiple trigger functions inside the animation property as comma separated values.</p><p>These functions trigger, and state and transition are defined in the <code>@angular/animations</code> module. Hence, we need to import this module in our component.</p><p>To apply animation on an element, we need to include the trigger name in the element definition. Include the trigger name followed by <code>@</code> symbol in the element tag. Refer to the sample code below:</p><pre><code class="language-ts">&lt;div @changeSize&gt;&lt;/div&gt;</code></pre><p>This will apply the trigger <code>changeSize</code> to the <code>&lt;d</code>iv&gt; element.</p><p>Let us create a few animations to get a better understanding of the Angular animation concepts.</p><h3 id="change-size-animation">Change Size Animation</h3><p>We will create an animation to change the size of a <code>&lt;d</code>iv&gt; element on a button click.</p><p>Open the <code>animationdemo.component.ts</code> file and add the following import definition:</p><pre><code>import { trigger, state, style, animate, transition } from '@angular/animations';</code></pre><p>Add the following animation property definition in the component metadata:</p><pre><code class="language-ts">animations: [
trigger('changeDivSize', [
state('initial', style({
backgroundColor: 'green',
width: '100px',
height: '100px'
})),
state('final', style({
backgroundColor: 'red',
width: '200px',
height: '200px'
})),
transition('initial=&gt;final', animate('1500ms')),
transition('final=&gt;initial', animate('1000ms'))
]),
]</code></pre><p>Here we have defined a trigger <code>changeDivSize</code> and two state functions inside the trigger. The element will be green in the “initial” state and will be red with an increased width and height in the “final” state.</p><p>We have defined transitions for the state change. Transition from “initial” state to “final” will take 1500ms and from “final” state to “initial” will take 1000ms.</p><p>To change the state of our element we will define a function in the class definition of our component. Include the following code in the <code>AnimationdemoComponent</code> class:</p><pre><code class="language-ts">currentState = 'initial';
changeState() {
this.currentState = this.currentState === 'initial' ? 'final' : 'initial';
}</code></pre><p>Here we have defined a <code>changeState</code> method which will switch the state of the element.</p><p>Open <code>animationdemo.component.html</code> file and add the following code:</p><pre><code class="language-ts">&lt;h3&gt;Change the div size&lt;/h3&gt;
&lt;button (click)="changeState()"&gt;Change Size&lt;/button&gt;
&lt;br /&gt;
&lt;div [@changeDivSize]=currentState&gt;&lt;/div&gt;
state('initial', style({
backgroundColor: 'green',
transform: 'scale(1)'
})),
state('final', style({
backgroundColor: 'red',
transform: 'scale(1.5)'
})),
transition('final=&gt;initial', animate('1000ms')),
transition('initial=&gt;final', animate('1500ms'))
]),</code></pre><p>Here, instead of defining the width and height property, we are using the transform property to change the size from all directions. The transition will occur when the state of the element is changed.</p><p>Add the following HTML code in the <code>app.component.html</code> file:</p><pre><code class="language-ts">&lt;h3&gt;Balloon Effect&lt;/h3&gt;
&lt;div (click)="changeState()"
style="width:100px;height:100px; border-radius: 100%; margin: 3rem; background-color: green"
[@balloonEffect]=currentState&gt;
list_order: number = 1;
addItem() {
var listitem = "ListItem " + this.list_order;
this.list_order++;
this.listItem.push(listitem);
}
removeItem() {
this.listItem.length -= 1;
}</code></pre><p>Add the following trigger definition in the animation property:</p><pre><code class="language-ts">trigger('fadeInOut', [
state('void', style({
opacity: 0
})),
transition('void &lt;=&gt; *', animate(1000)),
&lt;button (click)="addItem()"&gt;Add List&lt;/button&gt;
&lt;button (click)="removeItem()"&gt;Remove List&lt;/button&gt;
&lt;div style="width:200px; margin-left: 20px"&gt;
&lt;ul&gt;
&lt;li *ngFor="let list of listItem" [@fadeInOut]&gt;
{{list}}
&lt;/li&gt;
&lt;/ul&gt;
state('flyIn', style({ transform: 'translateX(0)' })),
transition(':enter', [
style({ transform: 'translateX(-100%)' }),
animate('0.5s 300ms ease-in')
]),
transition(':leave', [
animate('0.3s ease-out', style({ transform: 'translateX(100%)' }))
])
])</code></pre><p>Here we have defined the trigger <code>EnterLeave</code>. The ‘:enter’ transition will wait for 300ms and then run for 0.5s with an ease-in effect. Whereas the ‘:leave transition will run for 0.3s with an ease-out effect.</p><p>Add the following HTML code in the <code>app.component.html</code> file:</p><pre><code class="language-ts">&lt;h3&gt;Enter and Leave animation&lt;/h3&gt;
&lt;button (click)="addItem()"&gt;Add List&lt;/button&gt;
&lt;button (click)="removeItem()"&gt;Remove List&lt;/button&gt;
&lt;div style="width:200px; margin-left: 20px"&gt;
&lt;ul&gt;
&lt;li *ngFor="let list of listItem" [@EnterLeave]="'flyIn'"&gt;
{{list}}
&lt;/li&gt;
&lt;/ul&gt;
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
