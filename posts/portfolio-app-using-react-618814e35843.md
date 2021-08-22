---
card: "https://cdn-media-1.freecodecamp.org/images/1*7snm7ve4mLm3kwrPl0r2ig.png"
tags: [React]
description: "After my friends canceled our weekend plans, I was looking fo"
author: "Milad E. Fahmy"
title: "How to create your portfolio website using React.js"
created: "2021-08-16T10:07:11+02:00"
modified: "2021-08-16T10:07:11+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-react tag-javascript tag-web-development tag-tech tag-portfolio ">
<header class="post-full-header">
<h1 class="post-full-title">How to create your portfolio website using React.js</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*7snm7ve4mLm3kwrPl0r2ig.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*7snm7ve4mLm3kwrPl0r2ig.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*7snm7ve4mLm3kwrPl0r2ig.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*7snm7ve4mLm3kwrPl0r2ig.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*7snm7ve4mLm3kwrPl0r2ig.png" alt="How to create your portfolio website using React.js">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>After my friends canceled our weekend plans, I was looking for something to kill time. I finally ended up with a plan to create a portfolio website after going through my long pending list of ‘Wish-To-Do’<strong> </strong>things.</p><p>Many hours of searching for technologies and templates later, I ended up creating <a href="https://dhruv34788.github.io/me/" rel="noopener">this</a> website using React.js and deploying it using Github pages. You can find the code for the website <a href="https://github.com/Dhruv34788/me" rel="noopener">here</a> (It’s called a ‘<strong>web-app</strong>’ technically, but for this article, I will be referring to it as a ‘website’ … I hope that’s ok).</p><h2 id="what-you-will-learn">What you will learn</h2><ul><li>Some basic concepts of React.js</li><li>How to use create-react-app from an HTML website</li><li>How to deploy your portfolio website using ‘Github pages’</li></ul><h2 id="some-concepts-you-need-to-know-before-we-start-">Some concepts you need to know before we start ..</h2><blockquote><em>Note — feel free to skip this part if you are already familiar with basic concepts of React.js and React Components.</em><br><br>T<em>hese points will provide a very basic idea of the React world. I highly recommend you to study more about React from the <a href="https://reactjs.org/docs/getting-started.html" rel="noopener">documentation</a> and get hands-on with the help of <a href="https://www.freecodecamp.org/" rel="noopener">freeCodeCamp</a>.</em></blockquote><h3 id="what-is-react-js">What is React.js &gt;</h3><p>For now, it is enough to know that React.js is the JavaScript library used for building UI components. It was created by the engineers of Facebook and nowadays, it is rocking the JavaScript world..</p><h3 id="what-is-a-react-component">What is a React Component &gt;</h3><p>React lets you define components as a class or a function. You can provide optional inputs to the components called ‘<strong>props</strong>’.</p><p>Components let you split up the UI into <strong>independent</strong> sections like header, footer, and body. Each component will work independently so any individual component can be rendered independently into the <a href="https://reactjs.org/docs/react-dom.html" rel="noopener">ReactDOM</a>without affecting the whole page.</p><p>It also comes with <strong>‘lifecycle methods</strong>’ which let you define pieces of code you want to execute according to the state of the component like mounting, rendering, updating and un-mounting.</p><p>React components come with their own trade-offs. For example, we can reuse a component by exporting it to other components, but sometimes it gets confusing to handle multiple components talking and triggering renders for each other.</p><p>this is how a component would look like!</p><pre><code class="language-jsx">import React, { Component } from 'react'
export default class Component-name extends Component {
render() {
return (
&lt;div&gt;
{these code will be rendered into the DOM}
&lt;/div&gt;
)
}
├── README.md (description of the project for GitHUb)
├── node_modules (stores all dependent modules for the project)
├── package.json (stores all meta information of the prokect like dependencies,version,revisions etc.)
├── .gitignore (files declared here will be ignored while uploading to GitHub like node_modules
├── public (here you will store all images,JS,CSS files)
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src (our main code for app lies here)
├── {create component folder here}
├── App.css
├── App.js
├── App.test.js
├── index.css
├── index.js
├── logo.svg
&lt;div class="flexslider js-fullheight"&gt;
&lt;ul class="slides"&gt;
&lt;li style="background-image: url(images/img_bg_1.jpg);"&gt;
&lt;div class="overlay"&gt;&lt;/div&gt;
&lt;div class="container-fluid"&gt;
&lt;div class="row"&gt;
&lt;div class="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text"&gt;
&lt;div class="slider-text-inner js-fullheight"&gt;
&lt;div class="desc"&gt;
&lt;h1&gt;Hi! &lt;br&gt;I'm Jackson&lt;/h1&gt;
&lt;h2&gt;100% html5 bootstrap templates Made by &lt;a href="https://colorlib.com/" target="_blank"&gt;colorlib.com&lt;/a&gt;&lt;/h2&gt;
&lt;p&gt;&lt;a class="btn btn-primary btn-learn"&gt;Download CV &lt;em class="icon-download4"&gt;&lt;/em&gt;&lt;/a&gt;&lt;/p&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/li&gt;
&lt;li style="background-image: url(images/img_bg_2.jpg);"&gt;
&lt;div class="overlay"&gt;&lt;/div&gt;
&lt;div class="container-fluid"&gt;
&lt;div class="row"&gt;
&lt;div class="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text"&gt;
&lt;div class="slider-text-inner"&gt;
&lt;div class="desc"&gt;
&lt;h1&gt;I am &lt;br&gt;a Designer&lt;/h1&gt;
&lt;h2&gt;100% html5 bootstrap templates Made by &lt;a href="https://colorlib.com/" target="_blank"&gt;colorlib.com&lt;/a&gt;&lt;/h2&gt;
&lt;p&gt;&lt;a class="btn btn-primary btn-learn"&gt;View Portfolio &lt;em class="icon-briefcase3"&gt;&lt;/em&gt;&lt;/a&gt;&lt;/p&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/li&gt;
&lt;/ul&gt;
&lt;/div&gt;
export default class Home extends Component {
render() {
return (
&lt;div&gt;
&lt;section id="colorlib-hero" className="js-fullheight" data-section="home"&gt;
&lt;div className="flexslider js-fullheight"&gt;
&lt;ul className="slides"&gt;
&lt;li style={{backgroundImage: 'url(images/img_bg_1.jpg)'}}&gt;
&lt;div className="overlay" /&gt;
&lt;div className="container-fluid"&gt;
&lt;div className="row"&gt;
&lt;div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text"&gt;
&lt;div className="slider-text-inner js-fullheight"&gt;
&lt;div className="desc"&gt;
&lt;h1&gt;Hi! &lt;br /&gt;I'm Jackson&lt;/h1&gt;
&lt;h2&gt;100% html5 bootstrap templates Made by &lt;a href="https://colorlib.com/" target="_blank"&gt;colorlib.com&lt;/a&gt;&lt;/h2&gt;
&lt;p&gt;&lt;a className="btn btn-primary btn-learn"&gt;Download CV &lt;em className="icon-download4" /&gt;&lt;/a&gt;&lt;/p&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/li&gt;
&lt;li style={{backgroundImage: 'url(images/img_bg_2.jpg)'}}&gt;
&lt;div className="overlay" /&gt;
&lt;div className="container-fluid"&gt;
&lt;div className="row"&gt;
&lt;div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text"&gt;
&lt;div className="slider-text-inner"&gt;
&lt;div className="desc"&gt;
&lt;h1&gt;I am &lt;br /&gt;a Designer&lt;/h1&gt;
&lt;h2&gt;100% html5 bootstrap templates Made by &lt;a href="https://colorlib.com/" target="_blank"&gt;colorlib.com&lt;/a&gt;&lt;/h2&gt;
&lt;p&gt;&lt;a className="btn btn-primary btn-learn"&gt;View Portfolio &lt;em className="icon-briefcase3" /&gt;&lt;/a&gt;&lt;/p&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/li&gt;
&lt;/ul&gt;
&lt;/div&gt;
&lt;/section&gt;
&lt;/div&gt;
)
}
import './App.css';
import Sidebar from './components/sidebar'
import Introduction from './components/introduction'
import About from './components/about'
import Projects from './components/projects'
import Blog from './components/blog'
import Timeline from './components/timeline'
class App extends Component {
render() {
return (
&lt;div id="colorlib-page"&gt;
&lt;div id="container-wrap"&gt;
&lt;Sidebar&gt;&lt;/Sidebar&gt;
&lt;div id="colorlib-main"&gt;
&lt;Introduction&gt;&lt;/Introduction&gt;
&lt;About&gt;&lt;/About&gt;
&lt;Projects&gt;&lt;/Projects&gt;
&lt;Blog&gt;&lt;/Blog&gt;
&lt;Timeline&gt;&lt;/Timeline&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
);
}
}
"name": "portfolio-app",
"version": "0.1.0",
"private": true,
"homepage": "https://Dhruv34788.github.io/me",
"dependencies": {
"gh-pages": "^2.0.1",
"react": "^16.8.3",
"react-dom": "^16.8.3",
"react-scripts": "2.1.5",
"yarn": "^1.13.0"},
"scripts": {
"start": "react-scripts start",
"build": "react-scripts build",
"predeploy": "yarn run build",
"deploy": "gh-pages -d build",
"test": "react-scripts test",
"eject": "react-scripts eject"},
"eslintConfig": {
"extends": "react-app"},
"browserslist": [
"&gt;0.2%",
"not dead",
"not ie &lt;= 11",
"not op_mini all"
]
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
