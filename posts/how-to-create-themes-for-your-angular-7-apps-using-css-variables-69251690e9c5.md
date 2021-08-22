---
card: "https://cdn-media-1.freecodecamp.org/images/0*_r2HnHAK7lak_Fee"
tags: [JavaScript]
description: In this post, we will build a super simple cryptocurrency lis
author: "Milad E. Fahmy"
title: "How to create themes for your Angular 7 apps using CSS Variables"
created: "2021-08-15T19:35:19+02:00"
modified: "2021-08-15T19:35:19+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-angular tag-css tag-tech tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">How to create themes for your Angular 7 apps using CSS Variables</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/0*_r2HnHAK7lak_Fee 300w,
https://cdn-media-1.freecodecamp.org/images/0*_r2HnHAK7lak_Fee 600w,
https://cdn-media-1.freecodecamp.org/images/0*_r2HnHAK7lak_Fee 1000w,
https://cdn-media-1.freecodecamp.org/images/0*_r2HnHAK7lak_Fee 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/0*_r2HnHAK7lak_Fee" alt="How to create themes for your Angular 7 apps using CSS Variables">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>In this post, we will build a super simple cryptocurrency listing app using Angular 7 and CSS variables.</p>
<h3 id="table-of-contents">Table of Contents</h3>
<ul>
<li><a href="#42d3" rel="noopener">Design</a></li>
<li><a href="#868f" rel="noopener">Project Setup</a></li>
<li><a href="#8b88" rel="noopener">Code</a></li>
<li><a href="#5106" rel="noopener">Conclusion, Repo, and Further Reading</a></li>
</ul>
<figcaption>What we’re aiming for</figcaption>
</figure>
<h3 id="design">Design</h3>
<p>Feel free to <a href="#868f" rel="noopener">skip this section</a> if you’re only here for the code.</p>
<p>I designed this simple app using <a href="https://www.figma.com/" rel="noopener">Figma</a>.</p>
<h4 id="color-scheme">Color Scheme</h4>
<p>Our color scheme is made up of <em>foreground</em>, <em>background</em>, <em>primary</em>, and <em>error </em>colors. Each color group has several lighter and darker variants of the base color.</p>
<p>For our light/dark themes, the foreground and background colors will simply swap.</p>
<h4 id="components">Components</h4>
<p>Next up is to create the components. Since our app is pretty small, we only have a couple of components.</p>
<p>The <em>nav </em>component, which will let our user toggle the theme.</p>
<p>The <em>tile </em>component which will display coin info.</p>
<p>Putting it all together, we get our target designs.</p>
<h4 id="project-setup">Project Setup</h4>
<p>We are going to scaffold our app using the Angular CLI. First, we need to install it.</p><pre><code>npm install -g @angular/cli</code></pre>
<p>Then create our app.</p><pre><code>ng new project-crypto</code></pre>
<p>And finally, generate a module to hold our theming logic.</p><pre><code>cd project-crypto </code></pre><pre><code>ng generate module theme </code></pre>
<h3 id="code">Code</h3>
<p>Alright, time for the good stuff.</p>
<h4 id="define-css-variables">Define CSS Variables</h4>
<p>Let’s start by defining out initial CSS variables. We can set them initially to reflect our light theme. Since we want our theme to be global, I have defined it using the <code>:root</code> selector, which will match the <code>html</code> element. You could use the <code>body</code> or some other high-level element here if you wish.</p><pre><code class="language-js">@import url("https://fonts.googleapis.com/css?family=PT+Sans:400,700");
@import url("https://fonts.googleapis.com/css?family=Inconsolata:400,700");
:root {
/* Colors */
--foreground-default: #08090a;
--foreground-secondary: #41474d;
--foreground-tertiary: #797c80;
--foreground-quaternary: #f4faff;
--foreground-light: #41474d;
--background-default: #f4faff;
--background-secondary: #a3b9cc;
--background-tertiary: #5c7d99;
--background-light: #ffffff;
--primary-default: #5dfdcb;
--primary-dark: #24b286;
--primary-light: #b2ffe7;
--error-default: #ef3e36;
--error-dark: #800600;
--error-light: #ffcecc;
/* Shadows */
--background-tertiary-shadow: 0 1px 3px 0 rgba(92, 125, 153, 0.5);
}
body {
background: var(--background-default);
}
html,
body {
margin: 0;
padding: 0;
font-family: "PT Sans", sans-serif;
}</code></pre>
<h4 id="define-the-themes">Define the themes</h4>
<p>Next, let’s define our themes in TypeScript. These will later be used to toggle the theme by an Angular service.</p>
<p>Under our newly created <code>theme</code> module, create a new file: <code>theme.ts</code></p><pre><code class="language-js">export interface Theme {
name: string;
properties: any;
}
export const light: Theme = {
name: "light",
properties: {
"--foreground-default": "#08090A",
"--foreground-secondary": "#41474D",
"--foreground-tertiary": "#797C80",
"--foreground-quaternary": "#F4FAFF",
"--foreground-light": "#41474D",
"--background-default": "#F4FAFF",
"--background-secondary": "#A3B9CC",
"--background-tertiary": "#5C7D99",
"--background-light": "#FFFFFF",
"--primary-default": "#5DFDCB",
"--primary-dark": "#24B286",
"--primary-light": "#B2FFE7",
"--error-default": "#EF3E36",
"--error-dark": "#800600",
"--error-light": "#FFCECC",
"--background-tertiary-shadow": "0 1px 3px 0 rgba(92, 125, 153, 0.5)"
}
};
export const dark: Theme = {
name: "dark",
properties: {
"--foreground-default": "#5C7D99",
"--foreground-secondary": "#A3B9CC",
"--foreground-tertiary": "#F4FAFF",
"--foreground-quaternary": "#E5E5E5",
"--foreground-light": "#FFFFFF",
"--background-default": "#797C80",
"--background-secondary": "#41474D",
"--background-tertiary": "#08090A",
"--background-light": "#41474D",
"--primary-default": "#5DFDCB",
"--primary-dark": "#24B286",
"--primary-light": "#B2FFE7",
"--error-default": "#EF3E36",
"--error-dark": "#800600",
"--error-light": "#FFCECC",
"--background-tertiary-shadow": "0 1px 3px 0 rgba(8, 9, 10, 0.5)"
}
};</code></pre>
<p>We can add as many themes as we like here. For now, let’s just stick with light and dark themes.</p>
<h4 id="create-the-theme-service">Create the theme service</h4>
<p>Our service will be responsible for: <strong>tracking the active theme</strong>, and <strong>updating the CSS variables</strong> based on the active theme.</p>
<p>We can use the CLI to generate our new service. Under <code>/src/app/theme</code> run</p><pre><code>ng generate service theme</code></pre><pre><code>import { Injectable } from "@angular/core";
import { Theme, light, dark } from "./theme";
@Injectable({
providedIn: "root"
})
export class ThemeService {
private active: Theme = light;
private availableThemes: Theme[] = [light, dark];
getAvailableThemes(): Theme[] {
return this.availableThemes;
}
getActiveTheme(): Theme {
return this.active;
}
isDarkTheme(): boolean {
return this.active.name === dark.name;
}
setDarkTheme(): void {
this.setActiveTheme(dark);
}
setLightTheme(): void {
this.setActiveTheme(light);
}
setActiveTheme(theme: Theme): void {
this.active = theme;
Object.keys(this.active.properties).forEach(property =&gt; {
document.documentElement.style.setProperty(
property,
this.active.properties[property]
);
});
}
}</code></pre>
<p>Some things to note here:</p>
<ol>
<li>We import our theme definitions that we just created, on line 2.</li>
<li>Lines 34–39 update our CSS variables defined in the theme. This is essentially where the magic is happening.</li>
<li>Since, in this example app, we only have two themes, I have added some convenience functions to set the theme to light and dark directly. You can use the <code>getAvailableThemes</code> and <code>setActiveTheme</code> functions to change the theme dynamically based on user input instead.</li>
</ol>
<h4 id="components-1">Components</h4>
<p>The hard work is done. Now we just need to put our building blocks together. Well, actually, first we need to create the building blocks ?. Let’s create the components.</p>
<p>We will start with the <strong>nav </strong>component. Again, we can use the Angular CLI to give us a head start.</p><pre><code>ng generate component nav</code></pre><pre><code class="language-js">import { Component, OnInit } from "@angular/core";
import {
faLightbulb as faSolidLightbulb,
faDollarSign,
IconDefinition
} from "@fortawesome/free-solid-svg-icons";
import { faLightbulb as faRegularLightbulb } from "@fortawesome/free-regular-svg-icons";
import { ThemeService } from "src/app/theme/theme.service";
@Component({
selector: "app-nav",
templateUrl: "./nav.component.html",
styleUrls: ["./nav.component.css"]
})
export class NavComponent implements OnInit {
faLightbulb: IconDefinition;
faDollarSign = faDollarSign;
constructor(
private themeService: ThemeService
) {}
ngOnInit() {
this.setLightbulb();
}
setLightbulb() {
if (this.themeService.isDarkTheme()) {
this.faLightbulb = faRegularLightbulb;
} else {
this.faLightbulb = faSolidLightbulb;
}
}
toggleTheme() {
if (this.themeService.isDarkTheme()) {
this.themeService.setLightTheme();
} else {
this.themeService.setDarkTheme();
}
this.setLightbulb();
}
}</code></pre>
<p><strong>Note: </strong>I have used Font Awesome for the icons on the nav bar. If you want to do the same, you will need to <a href="https://fontawesome.com/how-to-use/on-the-web/using-with/angular" rel="noopener">install Font Awesome for Angular</a>.</p>
<p>The logic for our nav component is pretty straight forward. We set our icon depending on the theme on initialization (line 22). Then we set up an event handler to toggle the theme. You can see it’s usage in the HTML below.</p><pre><code class="language-js">&lt;nav&gt;
&lt;fa-icon [icon]="faDollarSign"&gt;&lt;/fa-icon&gt;
&lt;h5 class="title secondary-font"&gt;ProjectCrypto&lt;/h5&gt;
&lt;fa-icon [icon]="faLightbulb" (click)="toggleTheme()"&gt;&lt;/fa-icon&gt;
&lt;/nav&gt;</code></pre><pre><code class="language-css">nav {
height: 4rem;
display: flex;
align-items: center;
padding-left: 1rem;
padding-right: 1rem;
background-color: var(--background-tertiary);
color: var(--foreground-quaternary);
font-size: 1rem;
}
nav .title {
margin-left: auto;
margin-right: auto;
}</code></pre>
<p>Notes on the nav component CSS:</p>
<ol>
<li>Line 7, and 8 are the important ones here. These are the two lines that use our previously defined CSS variables, and make this component themeable.</li>
</ol>
<p>Next, the <strong>tile </strong>component.</p><pre><code>&lt;div class="container"&gt;
&lt;h5 class="name"&gt;{{ name }}&lt;/h5&gt;
&lt;h5 class="price"&gt;
&lt;fa-icon [icon]="currencyIcon"&gt;&lt;/fa-icon&gt;
{{ price | number }}
&lt;/h5&gt;
&lt;fa-icon
[icon]="faHeart"
(click)="onToggleFavourite()"
class="favouriteIcon icon"
[ngClass]="{ isFavourite: isFavourite }"
&gt;&lt;/fa-icon&gt;
&lt;/div&gt;</code></pre><pre><code class="language-css">.container {
display: grid;
grid-template-columns: 0.5fr 1fr 0.5fr;
align-items: center;
border-radius: 0.5rem;
background: var(--background-light);
color: var(--foreground-tertiary);
padding-left: 0.5rem;
padding-right: 0.5rem;
margin-bottom: 1rem;
min-height: 8rem;
box-shadow: var(--background-tertiary-shadow);
}
.container .name {
justify-self: start;
}
.container .price {
justify-self: center;
}
.container .icon {
justify-self: end;
}
.favouriteIcon {
font-size: 1.5rem;
}
.isFavourite {
color: var(--primary-default);
}</code></pre>
<p>Notes:</p>
<ol>
<li>The TypeScript for our tile component doesn’t have any theming logic, so I have omitted it here.</li>
<li>Lines 6, 7, 12, and 32 are what enable our tile component to be themeable.</li>
</ol>
<h3 id="conclusion-repo-and-further-reading">Conclusion, Repo, and Further Reading</h3>
<p>And that’s it! You now have the components and theme created. You can add the components to your base app component to wire everything up with some test data.</p>
<p>You can find the repo <a href="https://github.com/stephan-mclean/project-crypto" rel="noopener">here</a>.</p>
<p>Learn more about CSS Variables <a href="https://medium.freecodecamp.org/everything-you-need-to-know-about-css-variables-c74d922ea855" rel="noopener">here</a>.</p>
<p>Thanks for reading!</p>
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
