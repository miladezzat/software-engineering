---
card: "/images/default.jpg"
tags: [CSS in JS]
description: CSS-in-JS is all the rage. But is it really the best option?
author: "Milad E. Fahmy"
title: "You Don't Need CSS-in-JS: Why (and When) I Use Stylesheets Instead"
created: "2021-08-15T19:33:05+02:00"
modified: "2021-08-15T19:33:05+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-css-in-js tag-css tag-styled-components tag-javascript tag-sass ">
<header class="post-full-header">
<h1 class="post-full-title">You Don't Need CSS-in-JS: Why (and When) I Use Stylesheets Instead</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2019/08/you-dont-need-css-in-js.jpg 300w,
/news/content/images/size/w600/2019/08/you-dont-need-css-in-js.jpg 600w,
/news/content/images/size/w1000/2019/08/you-dont-need-css-in-js.jpg 1000w,
/news/content/images/size/w2000/2019/08/you-dont-need-css-in-js.jpg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2019/08/you-dont-need-css-in-js.jpg" alt="You Don't Need CSS-in-JS: Why (and When) I Use Stylesheets Instead">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>CSS-in-JS is all the rage. But is it really the best option?</p>
<h2 id="solving-problems-you-don-t-need-to-solve">Solving problems you don’t need to solve</h2>
<p>Don’t get me wrong, CSS-in-JS is a great solution, but it’s for a problem most people don’t have. Maintaining your components in a very siloed approach absolutely helps things like:</p>
<ul>
<li>Unintentional side effects of cascading styles</li>
<li>Helping teams organize their rules</li>
<li>Avoiding stepping on each other’s toes while developing</li>
</ul>
<p>But those really only become problems with large teams with many developers and a vast library of components.</p>
<h2 id="so-what-do-you-want-me-to-use">So what do you want me to use?</h2>
<p>To start from a slightly higher point of view, you can get in the habit of a few basic ideas:</p>
<ul>
<li>Set and follow some basic rules for writing</li>
<li>Use tooling or set standards for organization</li>
<li>Developing with methodologies like <a href="http://getbem.com/" rel="noopener">BEM</a></li>
</ul>
<p>This will eliminate any of those concerns on a smaller project (or large) and can actually make life easier.</p>
<h2 id="what-css-in-js-is-good-at-">What CSS-in-JS is good at…</h2>
<h3 id="helping-large-teams-preserve-sanity">Helping large teams preserve sanity</h3>
<p>Part of why this solution exists is because very large teams have a hard time avoiding conflicts when they have a huge library to deal with. Being able to have your component and anything that impacts it in one compartmentalized area helps people avoid stepping on each other’s feet and potentially rolling out tweaks that unintentionally cascade throughout the app. This is great but more likely than not, you’re 1 of a few (or alone) working on a small app. If you and your team aren’t communicating about some basic rules and standards, I’d argue you have bigger problems.</p>
<h3 id="kind-of-eliminates-the-need-to-learn-css-kind-of-">Kind of eliminates the need to learn CSS (kind of)</h3>
<p>Some developers mock CSS saying it’s not real code, others are scared about it’s magic (don’t be, embrace it). Only having to worry about a few rules in one component helps put people’s mind at ease knowing it’s just a little more JS that changes how it looks a bit.</p>
<h2 id="what-can-both-do">What can both do?</h2>
<figcaption>CSS pointing at CSS</figcaption>
</figure>
<h3 id="hot-module-reloading-hmr-">Hot Module Reloading (HMR)</h3>
<p>Though some say an advantage to CSS-in-JS is HMR, you’ll find this works fine with stylesheets. Sometimes it actually works a little nicer if you’re working on a component that requires a rerender such as those with a network request as a dependency, where the CSS changes won’t force that rerender.</p>
<h3 id="variables-global-settings">Variables, Global Settings</h3>
<p>If someone is making an argument that CSS can’t do that, it’s because they haven’t been paying attention for a while. Not only does Sass provide this, <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties" rel="noopener">it's native to modern browsers</a>.</p>
<h3 id="encapsulation">Encapsulation</h3>
<p>Yes, you don’t need JS to do this. Add a class name to the top-level element of the component or page, nest all styles inside, and you have your encapsulation.</p><pre><code class="language-css">.page-about {
.header {
background-color: red;
}
}
.navigation {
.button {
background-color: blue;
}
}</code></pre>
<h3 id="linting">Linting</h3>
<p><a href="https://stylelint.io/" rel="noopener">https://stylelint.io/</a></p>
<h3 id="a-lot-more">A lot more</h3>
<p>Honestly, there’s probably a lot more that both do similarly that you just don’t realize.</p>
<h2 id="what-stylesheets-and-sass-do-better-">What stylesheets and SASS do better…</h2>
<h3 id="rule-sharing-and-configuration">Rule sharing and configuration</h3>
<p>SASS allows you to configure variables, custom functions, and mixins that take your CSS development to the next level.</p>
<p>Ignoring the bad selector names:</p><pre><code class="language-css">// settings.scss
$color-ultraviolet: #5F4B8B;
// colbys-styles.scss
@import "settings";
.colbys-text-color {
color: $color-ultraviolet
}
.colbys-background-color {
background-color: $color-ultraviolet
}</code></pre>
<p>While the syntax and configuration of this are arguably easier than setting up a bunch of object configurations in JS, this greatly allows you to provide consistent visual experiences and DRY up your code.</p>
<h3 id="responsive-design">Responsive design</h3>
<p>One of the many things that add to the role of a good front end engineer is paying attention to how the project will look across multiple devices and sizes. Overall, UX is everyone’s job. Developing with a responsive-first mindset not only makes that process easier, it helps build a better product.</p>
<p>Trying to make your components responsive in JS means more Javascript and more event listeners. Not only does this add complexity, it hits performance. We can do this much easier with media queries baked right into CSS.</p><pre><code class="language-css">.colbys-sidebar {
width: 100%;
}
// NO EVENT LISTENERS
@media (min-width: 1024px) {
.colbys-sidebar {
width: 25%;
}
}</code></pre>
<p>Instead of having to throttle the event listeners, making sure your event listeners unregister on unmount, and just dealing with organizing that all in “the react way”, media queries trigger on-demand and will flip your styles as needed in a more consistent manner.</p>
<h3 id="less-complexity-of-your-components">Less complexity of your components</h3>
<p>Being able to focus on the functionality and the rendered output allows you to avoid pulling in libraries or complex methods to essentially patch CSS into your JS, not to mention the JS hack or two or three that you’re using to get it working in the first place.</p><pre><code class="language-jsx">// This is an exaggeration
const styles = {
color: blue;
}
if ( whos_favorite === 'Colby' || whos_favorite === 'Lord Commander' ) {
styles.color = 'ultraviolet';
} else if ( whos_favorite === 'The Gary' ) {
styles.color = 'red';
} else if ( whos_favorite === 'Mooncake' ) {
styles.color = 'green';
} else if ( whos_favorite === 'HUE' ) {
styles.color = 'blue';
} else if ( whos_favorite === 'KVN' ) {
styles.color = 'yellow';
}
&lt;MyCompnent styles={styles} /&gt;</code></pre>
<h3 id="performance">Performance</h3>
<p><a href="https://medium.com/@addyosmani/the-cost-of-javascript-in-2018-7d8950fbb5d4">Less Javascript is always a win</a>. It’s less your browser has to load, less your browser has to compile, which will ultimately translate to quicker page speed. When the browser loads a page, it tries to optimize the HTML and CSS as much as possible. Yes, you probably are loading more CSS upfront, but more JS is very costly and also is more likely to <a href="https://developers.google.com/web/fundamentals/performance/rendering/" rel="noopener">force a full rerender</a>;</p>
<p>A lot of the little magic bits you do with Javascript can be done with some pretty powerful CSS animation methods, just browse Codepen a bit or check out something like <a href="http://animista.net/" rel="noopener">Animista</a>.</p>
<p>I don’t actually have any numbers on this aside <a href="https://blog.primehammer.com/the-performance-of-styled-react-components/" rel="noopener">from a few good notes</a> and some <a href="https://github.com/A-gambit/CSS-IN-JS-Benchmarks" rel="noopener">CSS-in-JS benchmarks</a>. <em>Has anyone done the legwork on this?</em></p>
<h2 id="at-the-end-of-the-day-do-what-s-effective">At the end of the day, do what’s effective</h2>
<p><strong>Everyone has a personal preference, everyone is productive in a different way.</strong> Do what’s best for you, do what’s best for your team, and avoid treating what other developers say as dogmatic rights and wrongs.</p>
<p>If you’re a lone developer on a project and want to practice CSS-in-JS to get used to it for when you’re on a big team, go for it! If you’re on a huge, huge team at Facebook and want to use stylesheets, well you might run into issues if everyone’s not following the same guidelines, but do what’s best for you and your team.</p>
<p>The only way you can figure that out is with experience and experimentation. Play with both solutions and figure out why YOU think one is better than the other. You never know where you’ll end up after landing that gig at Google or your new startup in your garage.</p>
<p style="margin: 0;">
<a href="https://twitter.com/colbyfayock" style="display: block;">
</a>
</p>
<ul style="display:flex;justify-content:center;list-style:none;padding:0;margin: .5em 0 0;font-size: .8em;">
<li style="margin: 0 .6em;padding: 0;">
<a href="https://twitter.com/colbyfayock" style="text-decoration: none;">? Follow Me On Twitter</a>
</li>
<li style="margin: 0 .6em;padding: 0;">
<a href="https://youtube.com/colbyfayock" style="text-decoration: none;">?️ Subscribe To My Youtube</a>
</li>
<li style="margin: 0 .6em;padding: 0;">
<a href="https://www.colbyfayock.com/newsletter/" style="text-decoration: none;">✉️ Sign Up For My Newsletter</a>
</li>
</ul>
</div>
<p><em>Originally published at <a href="https://www.colbyfayock.com/2019/07/you-dont-need-css-in-js-why-i-use-stylesheets">https://www.colbyfayock.com/2019/07/you-dont-need-css-in-js-why-i-use-stylesheets</a>.</em></p>
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
