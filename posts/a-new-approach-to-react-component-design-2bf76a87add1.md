---
card: "https://cdn-media-1.freecodecamp.org/images/1*nFP5vJPVTEaimO8n4jPKgA.gif"
tags: [React]
description: by Austin Malerba
author: "Milad E. Fahmy"
title: "A New Approach to React Component Design"
created: "2021-08-15T19:39:27+02:00"
modified: "2021-08-15T19:39:27+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-react tag-design-patterns tag-javascript tag-tech tag-design ">
<header class="post-full-header">
<h1 class="post-full-title">A New Approach to React Component Design</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*nFP5vJPVTEaimO8n4jPKgA.gif 300w,
https://cdn-media-1.freecodecamp.org/images/1*nFP5vJPVTEaimO8n4jPKgA.gif 600w,
https://cdn-media-1.freecodecamp.org/images/1*nFP5vJPVTEaimO8n4jPKgA.gif 1000w,
https://cdn-media-1.freecodecamp.org/images/1*nFP5vJPVTEaimO8n4jPKgA.gif 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*nFP5vJPVTEaimO8n4jPKgA.gif" alt="A New Approach to React Component Design">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Austin Malerba</p>
<h1 id="a-new-approach-to-react-component-design">A New Approach to React Component Design</h1>
<p>In 2015, Dan Abramov wrote an article, <a href="https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0" rel="noopener">Presentational and Container Components</a>, that some React new-comers misconstrued as commandments. In fact, I myself stumbled upon the article and many others echoing its teachings and I thought, <em>this must be the best way to separate concerns amongst components</em>.</p>
<p>But, Dan Abramov himself later addressed the community for clinging to the design patterns he outlined.</p>
<p>In working with React for over a year now, I’ve stumbled into my own design patterns and here I will try to formalize them. Take these ideas with a grain of salt, they’re just my own observations that I have found constructive.</p>
<h3 id="escaping-the-dichotomy">Escaping the Dichotomy</h3>
<p>For a long time, components have been broadly classified as either smart or dumb, container or presentational, stateful or stateless, pure or impure. There’s a lot of terminology, but they all mean about the same thing. Smart components know how to tie together your application and dumb components just take in data to present to the end user. This is a useful distinction, but it’s really not how I find myself thinking while designing components.</p>
<p>The problem with the Container vs Presentational mindset is that it tries too hard to define component responsibilities in terms of state, logic, and other aspects of a component’s inner-workings.</p>
<p>Component design is better approached by deferring the implementation details and thinking in terms of <strong>component interfaces</strong>. It’s particularly important to think about what kind of <strong>customizations</strong> a component should allow and what kind of <strong>implicit and explicit dependencies</strong> a component should include.</p>
<h3 id="introducing-the-trichotomy">Introducing the Trichotomy</h3>
<p>Trichotomy? Is that even a word? I don’t know, but you get the idea. I’ve come to think of React components as falling into one of three bins.</p>
<h4 id="universal-components">Universal Components</h4>
<p>These are components that can be used <strong>many times in any application</strong>.</p>
<p>These components:</p>
<ul>
<li>Should be <strong>reusable</strong></li>
<li>Should be <strong>highly customizable</strong></li>
<li>Should <strong>not be aware of application-specific code</strong> including models, stores, services, etc.</li>
<li>Should <strong>minimize dependencies</strong> on third party libraries</li>
<li>Should rarely be used directly in your application</li>
<li>Should be used as <strong>building blocks for Global components</strong></li>
<li>May end with the “Base” suffix (eg. ButtonBase, ImageBase)</li>
</ul>
<p>These are foundational components that are application-agnostic and aren’t necessarily to be used directly in your View components because they are often too customizable. To use them directly in your View components would mean a lot of copying and pasting of the same boiler plate. You’d also risk developers abusing the components’ highly customizable nature in ways that create an inconsistent experience across your application.</p>
<h4 id="global-components">Global Components</h4>
<p>These are components that can be used <strong>many times in one application</strong>.</p>
<p>These components:</p>
<ul>
<li>Should be<strong> reusable</strong></li>
<li>Should be <strong>minimally customizable</strong></li>
<li>May use <strong>application-specific code</strong></li>
<li>Should <strong>implement Universal components</strong>, restricting their customizability</li>
<li>Should be used as <strong>building blocks for View components</strong></li>
<li>Often tie one-to-one with model instances (eg. DogListItem, CatCard)</li>
</ul>
<p>These components are reusable within your application but are not easily transferred to other applications because they depend on application logic. These are the building blocks for View components and other Global components.</p>
<p>They should be minimally customizable to ensure consistency across your application. Applications shouldn’t have thirty different button variations, but rather should have a handful of different button variations. This should be enforced by taking a highly customizable Universal ButtonBase component and baking into it styles and functionality in the form of a Global Button component. Global components often take another form as representations of domain model data.</p>
<h4 id="view-components">View Components</h4>
<p>These are components that are used <strong>only once in your application</strong>.</p>
<p>These components:</p>
<ul>
<li>Should <strong>not</strong> be concerned about reusability</li>
<li>Are likely to <strong>manage state</strong></li>
<li>Receive <strong>minimal props</strong></li>
<li>Should tie together Global components (and possibly Universal components)</li>
<li>Often <strong>resolve application routes</strong></li>
<li>Often maintain a dedicated plot of viewport real estate</li>
<li>Often have a high number of dependencies</li>
<li>Should be <strong>building blocks for your application</strong></li>
</ul>
<p>These are the highest level components of your application that glue together reusable components and even other Views. These will often be the components that resolve routes and may show in the form of page-level components. They are heavy in state and light in props. These are what Dan Abramov would consider container components.</p>
<h4 id="the-promisebutton">The PromiseButton</h4>
<p>Let’s take a look at the Universal and Global implementations of a promise button and see how they compare. A promise button acts like an ordinary button unless the onClick handler returns a promise. In the case of a returned promise, the button can conditionally render content based on the promise state.</p>
<p>Notice how the PromiseButtonBase allows us to control what to render at any point in the promise life-cycle, but the PromiseButton bakes in the teal PulseLoader during the pending state. Now any time we use the PromiseButton, we’re guaranteed a teal loading animation and we don’t have to worry about duplicating that code or providing an inconsistent loading experience by including multiple loading animations of multiple colors across our application. The PromiseButtonBase is customizable, but the PromiseButton is restrictive.</p>
<h4 id="directory-structure">Directory Structure</h4>
<p>The following illustrates how we might organize components following this pattern.</p><pre><code>App/
App.js
Views/
DogListView/
Global/
Models/
Dog/
DogListItem/
Image/
PromiseButton/
Universal/
ImageBase/
PromiseButtonBase/</code></pre>
<h4 id="component-dependencies">Component Dependencies</h4>
<p>Below illustrates how the above components depend on one another.</p><pre><code class="language-javascript">/* App.js */
import { DogListView } from './Views'
/* DogListView.js */
import { DogListItem } from 'App/Global/Models/Dog'
/* DogListItem.js */
import Image from '../../Image',
import PromiseButton from '../../PromiseButton'
/* Image.js */
import { ImageBase } from 'Universal'
/* PromiseButton.js */
import { PromiseButtonBase } from 'Universal'</code></pre>
<p>Our View component depends on a Global component and our Global components depend on other Global components as well as Universal components. This dependency flow will be pretty common. Notice also the use of absolute and relative imports. It’s nice to use relative imports when pulling in dependencies that reside within the same module. Also, it’s nice to use absolute imports when pulling in dependencies across modules or when your directory structure is deeply nested or frequently changing.</p>
<p>The problem with the Container vs Presentational model is that it tries too hard to define component responsibilities in terms of component inner-workings. The key takeaway is to view component design in terms of <strong>component interfaces</strong>. What matters less is the implementation that allows the component to satisfy its contract. It’s important to think about what kind of <strong>customizations</strong> a component should allow and what kind of <strong>implicit and explicit dependencies</strong> a component should include.</p>
<p>If you’ve found these thoughts helpful and would like to see more of my ideas, feel free to check out this <a href="https://github.com/malerba118/react-redux-template" rel="noopener">repo</a> which I use to maintain my thoughts and best practices for writing React/Redux apps.</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
