---
card: "https://cdn-media-1.freecodecamp.org/images/1*yq7TPrTheULIcxwfTD96SA.png"
tags: [React]
description: "Angular and React are both great frameworks/libraries. Angula"
author: "Milad E. Fahmy"
title: "How to convert an AngularJS 1.x app to a React app — one component at a time."
created: "2021-08-16T10:17:54+02:00"
modified: "2021-08-16T10:17:54+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-react tag-programming tag-web-development tag-javascript tag-tech ">
<header class="post-full-header">
<h1 class="post-full-title">How to convert an AngularJS 1.x app to a React app — one component at a time.</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*yq7TPrTheULIcxwfTD96SA.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*yq7TPrTheULIcxwfTD96SA.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*yq7TPrTheULIcxwfTD96SA.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*yq7TPrTheULIcxwfTD96SA.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*yq7TPrTheULIcxwfTD96SA.png" alt="How to convert an AngularJS 1.x app to a React app — one component at a time.">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Angular and React are both great frameworks/libraries. Angular provides a defined structure of MVC (Model, View, Controller). React provides a lightweight rendering mechanism based on state change. Often times, developers will have an application with legacy code in AngularJS but they’ll want to build new features in ReactJS.</p><p>Although it is possible to retire an AngularJS application and build a ReactJS application from scratch, it isn’t a workable solution for large scale applications. In such situations, it is easier to build a React component in isolation and import it into Angular.</p><p>In this post, I will help you create a React component in an Angular app using <code>react2angular</code>.</p><h3 id="plan-out-the-app">Plan out the app</h3><p>Here is what we are going to do —</p><p><strong>Given</strong>: An Angular app that renders name of a city and its top sights.</p><p><strong>Goal</strong>: Add a React component to the Angular app. The React component will display a featured image of a sight.</p><p><strong>Plan</strong>: We are going to create a React component, pass in <code>imageUrl</code> through <code>props</code>, and display the image as a React component.</p><p>Let’s get started!</p><h3 id="step-0-have-an-angular-app">Step 0: Have an Angular app</h3><p>For the purpose of this article, let’s keep the complexity of the Angular app simple. I am planning a Euro trip in 2018, hence my Angular app is essentially a bucket-list of places I would like to visit.</p><p>Here is what our dataset <code>bucketlist</code> looks like:</p><pre><code class="language-js">const bucketlist = [{
city: 'Venice',
position: 3,
sites: ['Grand Canal', 'Bridge of Sighs', 'Piazza San Marco'],
img: 'https://unsplash.com/photos/ryC3SVUeRgY',
}, {
city: 'Paris',
position: 2,
sites: ['Eiffel Tower', 'The Louvre', 'Notre-Dame de Paris'],
img: 'https://unsplash.com/photos/R5scocnOOdM',
}, {
city: 'Santorini',
position: 1,
sites: ['Imerovigli', 'Akrotiri', 'Santorini Arts Factory'],
img: 'https://unsplash.com/photos/hmXtDtmM5r0',
}];</code></pre><p>This is what <code>angularComponent.js</code> looks like:</p><pre><code class="language-js">function AngularComponentCtrl() {
var ctrl = this;
ctrl.bucketlist = bucketlist;
};
angular.module(’demoApp’).component(’angularComponent’, {
templateUrl: 'angularComponent.html’,
controller: AngularComponentCtrl
});</code></pre><p>and this is <code>angularComponent.html</code>:</p><pre><code class="language-html">&lt;div ng-repeat="item in $ctrl.bucketlist" ng-sort="item.position"&gt;
&lt;h2&gt;{{item.city}}&lt;/h2&gt;
&lt;p&gt; I want to see &lt;span ng-repeat="sight in item.sights"&gt;{{sight}}           &lt;/p&gt;&lt;/span&gt;
class RenderImage extends Component {
render() {
const imageUrl = this.props.imageUrl;
return (
&lt;div&gt;
&lt;img src={imageUrl} alt=""/&gt;
&lt;/div&gt;
);
}
}</code></pre><h3 id="step-3-pass-in-props">Step 3: Pass in props</h3><p>Remember in <code>Step 2</code> we assumed we have an image available via <code>props</code>. We are going to populate <code>props</code> now. You can pass in dependencies to a React component using <code>props</code>. Keep in mind that none of your Angular dependencies are available to the React component. Think of it this way — the React component is like a container connected to the Angular app. If you need the container to inherit information from parent, you will need to explicitly wire it in through <code>props</code>.</p><p>So, to pass in dependencies, we will add a component <code>renderImage</code> in angular and pass in <code>imageUrl</code> as a parameter:</p><pre><code class="language-js"> angular.module(’demoApp’, [])
.component(’renderImage’, react2angular(RenderImage,[’imageUrl’]));</code></pre><h3 id="step-4-include-in-angular-template">Step 4: Include in angular template</h3><p>Now you can simply import this component in the Angular app like any other component:</p><pre><code class="language-html">&lt;div ng-repeat="item in $ctrl.bucketlist"&gt;
&lt;h2&gt;{{item.city}}&lt;/h2&gt;
&lt;p&gt; I want to see &lt;span ng-repeat="site in item.sites"&gt;{{site}}&lt;/span&gt;
&lt;render-image image-url={{item.img}}&gt;&lt;/render-image&gt;
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
