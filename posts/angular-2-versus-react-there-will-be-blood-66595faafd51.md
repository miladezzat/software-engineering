---
card: "https://cdn-media-1.freecodecamp.org/images/1*MRPl_SNuRGJchb6eOAnkSA.jpeg"
tags: [JavaScript]
description: Angular 2 has reached Beta and appears poised to become the h
author: "Milad E. Fahmy"
title: "Angular 2 versus React: There Will Be Blood"
created: "2021-08-15T19:56:01+02:00"
modified: "2021-08-15T19:56:01+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-angularjs tag-react tag-tech tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">Angular 2 versus React: There Will Be Blood</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*MRPl_SNuRGJchb6eOAnkSA.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*MRPl_SNuRGJchb6eOAnkSA.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*MRPl_SNuRGJchb6eOAnkSA.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*MRPl_SNuRGJchb6eOAnkSA.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*MRPl_SNuRGJchb6eOAnkSA.jpeg" alt="Angular 2 versus React: There Will Be Blood">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p><a href="https://angular.io" rel="noopener">Angular 2 has reached Beta</a> and appears poised to become the hot new framework of 2016. It’s time for a showdown. Let’s see how it stacks up against 2015’s darling: <a href="https://facebook.github.io/react/" rel="noopener">React</a>.</p>
<p><strong>Disclaimer: </strong>I enjoyed working in Angular 1 but switched to React in 2015. I’ve published Pluralsight courses on <a href="https://www.pluralsight.com/courses/react-flux-building-applications" rel="noopener">React and Flux</a> and <a href="https://app.pluralsight.com/library/courses/react-flux-building-applications" rel="noopener">React and Redux in ES6</a> (<a href="http://app.pluralsight.com/signup" rel="noopener">free trial</a>). So<strong> yes, I’m biased. But I’m attacking both sides.</strong></p>
<p>Alright, let’s do this. There will be blood.</p>
<figcaption>Photo credit: <a href="https://twitter.com/jwcarroll" rel="noopener" target="_blank" title="">@jwcarrol</a></figcaption>
</figure>
<h3 id="you-re-comparing-apples-and-orangutans-">You’re Comparing Apples and Orangutans!</h3>
<p>Sigh. Yes, Angular is a framework, React is a library. Some say this difference makes comparing them illogical. Not at all!</p>
<blockquote>Choosing between Angular and React is like choosing between buying an off-the-shelf computer and building your own with off-the-shelf parts.</blockquote>
<p>This post considers the merits of these two approaches. I compare React’s syntax and component model to Angular’s syntax and component model. This is like comparing an off-the-shelf computer’s CPU to a raw CPU. Apples to apples.</p>
<h3 id="angular-2-advantages">Angular 2 Advantages</h3>
<p>Let’s start by considering Angular 2’s advantages over React.</p>
<h4 id="low-decision-fatigue"><strong>Low Decision Fatigue</strong></h4>
<p>Since Angular is a framework, it provides significantly more opinions and functionality out of the box. With React, you typically pull a number of other libraries off the shelf to build a real app. You’ll likely want libraries for routing, enforcing unidirectional flows, web API calls, testing, dependency management, and so on. The number of decisions is pretty overwhelming. This is why React has so many starter kits (I’ve <a href="https://github.com/coryhouse/react-flux-starter-kit" rel="noopener">published</a> <a href="https://github.com/coryhouse/react-slingshot" rel="noopener">two</a>).</p>
<p>Angular offers more opinions out of the box, which helps you get started more quickly without feeling intimidated by decisions. This enforced consistency also helps new hires feel at home more quickly and makes switching developers between teams more practical.</p>
<p>I admire how the Angular core team has embraced TypeScript, which leads to the next advantage…</p>
<h4 id="typescript-clear-path">TypeScript = Clear Path</h4>
<p>Sure, TypeScript isn’t loved by all, but Angular 2’s opinionated take on which flavor of JavaScript to use is a big win. React examples across the web are frustratingly inconsistent — it’s presented in ES5 and ES6 in roughly equal numbers, and it currently offers <a href="http://jamesknelson.com/should-i-use-react-createclass-es6-classes-or-stateless-functional-components/" rel="noopener">three different ways to declare components</a>. This creates confusion for newcomers. (Angular also embraces decorators instead of extends — many would consider this a plus as well).</p>
<p>While Angular 2 doesn’t require TypeScript, the Angular core team certainly embraces it and defaults to using TypeScript in documentation. This means related examples and open source projects are more likely to feel familiar and consistent. Angular already provides <a href="https://angular.io/docs/ts/latest/quickstart.html" rel="noopener">clear examples that show how to utilize the TypeScript compiler</a>. (though admittedly, <a href="http://angularjs.blogspot.com/2015/09/angular-2-survey-results.html" rel="noopener">not everyone is embracing TypeScript</a> yet, but I suspect shortly after launch it’ll become the de facto standard). This consistency should help avoid the confusion and decision overload that comes with getting started with React.</p>
<h4 id="reduced-churn">Reduced Churn</h4>
<p>2015 was the year of <a href="https://medium.com/@ericclemmons/javascript-fatigue-48d4011b6fc4#.559iqxb39" rel="noopener">JavaScript fatigue</a>. Although React itself is expected to be quite stable with <a href="https://facebook.github.io/react/blog/" rel="noopener">version 15 coming soon</a>, React’s ecosystem has churned at a rapid pace, particularly around the <a href="https://github.com/kriasoft/react-starter-kit/issues/22" rel="noopener">long list of Flux flavors</a> and <a href="https://github.com/rackt/react-router" rel="noopener">routing</a>. So anything you write in React today may feel out of date or require breaking changes in the future if you lean on one of many related libraries.</p>
<p>In contrast, Angular 2 is a careful, methodical reinvention of a mature, comprehensive framework. So Angular is less likely to churn in painful ways after release. And as a full framework, when you choose Angular, you can trust a single team to make careful decisions about the future. In React, it’s your responsibility to herd a bunch of disparate, fast-moving, open-source libraries into a comprehensive whole that plays well together. It’s time-consuming, frustrating, and a never-ending job.</p>
<h4 id="broad-tooling-support"><strong>Broad Tooling Support</strong></h4>
<p>As you’ll see below, I consider React’s JSX a big win. However, you need to select tooling that supports JSX. React has become so popular that tooling support is rarely a problem today, but new tooling such as IDEs and linters are unlikely to support JSX on day one. Angular 2’s templates store markup in a string or in separate HTML files, so it doesn’t require special tooling support (though it appears tooling to intelligently parse Angular’s string templates is on the way).</p>
<h4 id="web-component-friendly">Web Component Friendly</h4>
<p>Angular 2’s design embraces the web component’s standard. Sheesh, I’m embarrassed I forgot to mention this initially — I recently published a <a href="https://www.pluralsight.com/courses/web-components-shadow-dom" rel="noopener">course on web components</a>! In short, the components that you build in Angular 2 should be much easier to convert into plain, native web components than React’s components. Sure, <a href="http://jonrimmer.github.io/are-we-componentized-yet/" rel="noopener">browser support is still weak</a>, but this could be a big win in the long-term.</p>
<p>Angular’s approach comes with its own set of gotchas, which is a good segue for discussing React’s advantages…</p>
<h3 id="react-advantages">React Advantages</h3>
<p>Alright, let’s consider what sets React apart.</p>
<h4 id="jsx"><strong>JSX</strong></h4>
<p>JSX is an HTML-like syntax that compiles down to JavaScript. Markup and code are composed in the same file. This means code completion gives you a hand as you type references to your component’s functions and variables. In contrast, Angular’s string-based templates come with the usual downsides: No code coloring in many editors, limited code completion support, and run-time failures. You’d normally expect poor error messaging as well, but the Angular team <a href="https://github.com/angular/angular/issues/4417" rel="noopener">created their own HTML parser to fix that</a>. (Bravo!)</p>
<p>If you don’t like Angular string-based templates, you can move the templates to a separate file, but then you’re back to what I call “the old days:” wiring the two files together in your head, with no code completion support or compile-time checking to assist. That doesn’t seem like a big deal until you’ve enjoyed life in React. Composing components in a single <strong><em>compile-time checked</em></strong> file is one of the big reasons JSX is so special.</p>
<figcaption>Contrasting how Angular 2 and React handle a missing closing tag</figcaption>
</figure>
<p>For more on why JSX is such a big win, see <a href="https://medium.com/@housecor/react-s-jsx-the-other-side-of-the-coin-2ace7ab62b98#.5007n49wq" rel="noopener">JSX: The Other Side of the Coin</a>.</p>
<h4 id="react-fails-fast-and-explicitly"><strong>React Fails Fast and Explicitly</strong></h4>
<p>When you make a typo in React’s JSX, it won’t compile. That’s a beautiful thing. It means you know immediately exactly which line has an error. It tells you immediately when you forget to close a tag or reference a property that doesn’t exist. In fact, <strong>the JSX compiler</strong> <strong>specifies the line number where the typo occurred</strong>. This behavior radically speeds development.</p>
<p>In contrast, when you mistype a variable reference in Angular 2, nothing happens at all. <strong>Angular 2 fails quietly at run time instead of compile-time</strong>. It fails <em>slowly</em>. I load the app and wonder why my data isn’t displaying. Not fun.</p>
<h4 id="react-is-javascript-centric"><strong>React is JavaScript-Centric</strong></h4>
<p>Here it is. This is the fundamental difference between React and Angular. <strong>Unfortunately, Angular 2 remains HTML-centric rather than JavaScript-centric</strong>. Angular 2 failed to solve its most fundamental design problem:</p>
<blockquote>Angular 2 continues to put “JS” into HTML. React puts “HTML” into JS.</blockquote>
<p>I can’t emphasize the impact of this schism enough. It fundamentally impacts the development experience. Angular’s HTML-centric design remains its greatest weakness. As I cover in “<a href="https://medium.com/@housecor/react-s-jsx-the-other-side-of-the-coin-2ace7ab62b98#.jqh5kkxlk" rel="noopener">JSX: The Other Side of the Coin</a>”, JavaScript is far more powerful than HTML. Thus, <strong>it’s more logical to enhance JavaScript to support markup than to enhance HTML to support logic</strong>. HTML and JavaScript need to be glued together somehow, and React’s JavaScript-centric approach is fundamentally superior to Angular, Ember, and Knockout’s HTML-centric approach.</p>
<p>Here’s why…</p>
<h4 id="react-s-javascript-centric-design-simplicity">React’s JavaScript-centric design = simplicity</h4>
<p>Angular 2 continues Angular 1’s approach of trying to make HTML more powerful. So you have to utilize Angular 2's unique syntax for simple tasks like looping and conditionals. For example, Angular 2 offers both one and two way binding via two syntaxes that are unfortunately quite different:</p><pre><code class="language-js">{{myVar}} //One-way binding
ngModel="myVar" //Two-way binding</code></pre>
<p>In React, binding markup doesn’t change based on this decision (it’s handled elsewhere, as I’d argue it should be). In either case, it looks like this:</p><pre><code class="language-js">{myVar}</code></pre>
<p>Angular 2 supports inline master templates using this syntax:</p><pre><code class="language-js">&lt;ul&gt;
&lt;li *ngFor="#hero of heroes"&gt;
{{hero.name}}
&lt;/li&gt;
&lt;/ul&gt;</code></pre>
<p>The above snippet loops over an array of heroes. I have multiple concerns:</p>
<ul>
<li>Declaring a “master template” via a preceeding asterisk is cryptic.</li>
<li>The pound sign in front of hero declares a local template variable. This key concept looks like needless noise (if preferred, you can use `var`).</li>
<li>The ngFor adds looping semantics to HTML via an Angular-specific attribute.</li>
</ul>
<p>Contrast Angular 2’s syntax above with React’s pure JS*: (admittedly the key property below is React-specific)</p><pre><code class="language-js">&lt;ul&gt;
{ heroes.map(hero =&gt;
&lt;li key={hero.id}&gt;{hero.name}&lt;/li&gt;
)}
&lt;/ul&gt;</code></pre>
<p>Since JS supports looping natively, React’s JSX can simply leverage all the power of JS for such things and do much more with map, filter, etc.</p>
<p>Just read the <a href="https://angular.io/docs/ts/latest/guide/cheatsheet.html" rel="noopener">Angular 2 Cheat Sheet</a>. That’s not HTML. That’s not JavaScript. It’s <strong><em>Angular</em></strong>.</p>
<blockquote><strong>To read Angular: </strong>Learn a long list of Angular-specific syntax.<br><br>To read React: Learn JavaScript.</blockquote>
<p>React is unique in its syntactic and conceptual simplicity. Consider iterating in today’s popular JS frameworks/libraries:</p><pre><code>Ember: {{# each}}
Angular 1: ng-repeat
Angular 2: ngFor
Knockout: data-bind=”foreach”
React: JUST USE JS. :)</code></pre>
<p>All except React use framework specific replacements for something that is native and trivial in JavaScript: <strong>a loop</strong>. That’s the beauty of React. It embraces the power of JavaScript to handle markup, so no odd new syntax is required.</p>
<p>Angular 2’s syntactic oddities continue with click binding:</p><pre><code class="language-js">(click)=”onSelect(hero)"</code></pre>
<p>In contrast, React again uses plain ‘ol JavaScript:</p><pre><code class="language-js">onClick={this.onSelect.bind(this, hero)}</code></pre>
<p>And since React includes a synthetic event system (as does Angular 2), you don’t have to worry about the performance implications of declaring event handlers inline like this.</p>
<p>Why fill your head with a framework’s unique syntax if you don’t have to? Why not simply embrace the power of JS?</p>
<h4 id="luxurious-development-experience">Luxurious Development Experience</h4>
<p>JSX’s code completion support, compile-time checks, and rich error messaging already create an excellent development experience that saves both typing and time. But combine all that with hot reloading with time travel and you have a rapid development experience like no other.</p>
<h4 id="size-concerns">Size Concerns</h4>
<p>Here’s the sizes of some popular frameworks and libraries, minified (<a href="https://gist.github.com/Restuta/cda69e50a853aa64912d" rel="noopener">source</a>):</p>
<p><strong>Angular 2:</strong> 566k (766k with RxJS)<br><strong>Ember: </strong>435k<br><strong><a href="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js" rel="noopener">Angular 1</a>:</strong> 143k<br><strong>React + Redux:</strong> 139k</p>
<p><strong>Edit</strong>: Sorry, I had incorrect numbers earlier that were for simple ToDoMVC apps instead of the raw frameworks. Also, the Angular 2 number is expected to drop for the final release. The sizes listed are for the framework, minified, in the browser (no gzip is factored in here).</p>
<p>To make a real comparison, I built Angular 2’s Tour of Heroes app in both Angular 2 and React (I used the new <a href="https://github.com/coryhouse/react-slingshot" rel="noopener">React Slingshot</a> starter kit). The result?</p>
<p><a href="https://github.com/coryhouse/angular-2-tour-of-heroes/tree/master" rel="noopener"><strong>Angular 2</strong></a><strong>: </strong>764k minified<br><a href="https://github.com/coryhouse/react-tour-of-heroes" rel="noopener"><strong>React + Redux</strong></a><strong>:</strong> 151k minified</p>
<p>So <strong>Angular 2 is currently over four times the size of a React + Redux app of comparable simplicity</strong>. (Again, Angular 2 is expected to lose some weight before the final release).</p>
<p>Now that said, I admit that concerns about the size of frameworks may be overblown:</p>
<blockquote>Large apps tend to have a minimum of several hundred kilobytes of code — often more — whether they’re built with a framework or not. Developers need abstractions to build complex software, and whether they come from a framework or are hand-written, they negatively impact the performance of apps.<br><br>Even if you were to eliminate frameworks entirely, many apps would still have hundreds of kilobytes of JavaScript. — Tom Dale in <a href="http://tomdale.net/2015/11/javascript-frameworks-and-mobile-performance/" rel="noopener">JavaScript Frameworks and Mobile Performance</a></blockquote>
<p>Tom is right. Frameworks like Angular and Ember are bigger because they offer many more features out of the box.</p>
<p>However, my concern is this: many apps don’t need everything these large frameworks put in the box. In a world that’s increasingly embracing microservices, microapps, and <a href="http://www.npmjs.com" rel="noopener">single-responsibility packages</a>, <strong>React gives you the power to “right-size” your application by carefully selecting only what is necessary</strong>. In a world with <a href="http://www.modulecounts.com" rel="noopener">over 200,000 npm modules</a>, that’s a powerful place to be.</p>
<h4 id="react-embraces-the-unix-philosophy-">React Embraces <a href="https://en.wikipedia.org/wiki/Unix_philosophy" rel="noopener">the Unix Philosophy</a>.</h4>
<p>React is a library. It’s precisely the opposite philosophy of large, comprehensive frameworks like Angular and Ember. So when you select React, you’re free to choose modern best-of-breed libraries that solve your problem best. JavaScript moves fast, and React allows you to swap out small pieces of your application for better libraries instead of waiting around and hoping your framework will innovate.</p>
<p>Unix has stood the test of time. Here’s why:</p>
<blockquote>The philosophy of small, composable, single-purpose tools never goes out of style.</blockquote>
<p>React is a focused, composable, single-purpose tool used by <a href="https://github.com/facebook/react/wiki/Sites-Using-React" rel="noopener">many of the largest websites in the world</a>. That bodes well for its future (That said, Angular is <a href="https://www.madewithangular.com/#/" rel="noopener">used by many big names</a> too).</p>
<h4 id="showdown-summary">Showdown Summary</h4>
<p>Angular 2 is a huge improvement over version 1. The new component model is simpler to grasp than v1’s directives, it supports isomorphic/universal rendering, and it uses a virtual DOM offering 3–10x improvements in performance. These changes make Angular 2 very competitive with React. There’s no denying that its full-featured, opinionated nature offers some clear benefits by reducing “JavaScript fatigue”.</p>
<p>However, Angular 2’s size and syntax give me pause. Angular’s commitment to HTML-centric design makes it complex compared to React’s simpler JavaScript-centric model. In React, you don’t learn framework-specific HTML shims like ngWhatever. You spend your time writing plain ‘ol JavaScript. That’s the future I believe in.</p>
<p>Comments? Chime in on <a href="https://www.reddit.com/r/javascript/comments/3zbo90/angular_2_versus_react_there_will_be_blood/" rel="noopener">Reddit</a> or <a href="https://news.ycombinator.com/item?id=10836236" rel="noopener">Hacker News</a>.</p>
<p><strong><em>Cory House</em></strong> is the author of “<a href="https://www.pluralsight.com/courses/react-flux-building-applications" rel="noopener">Building Applications with React and Flux</a>”, “<a href="https://www.google.com/url?sa=t&amp;rct=j&amp;q=&amp;esrc=s&amp;source=web&amp;cd=1&amp;cad=rja&amp;uact=8&amp;ved=0ahUKEwiK1pXx89nJAhUujoMKHeuWAEUQFggcMAA&amp;url=https%3A%2F%2Fwww.pluralsight.com%2Fcourses%2Fwriting-clean-code-humans&amp;usg=AFQjCNEBfkBoN-IgCn_1jFUqWDAUIxcmAw&amp;sig2=Ub9Wup4k4mrw_ffPgYu3tA" rel="noopener">Clean Code: Writing Code for Humans</a>” and multiple other courses on Pluralsight. He is a Software Architect at VinSolutions and <a href="http://www.bitnative.com/training/" rel="noopener">trains software developers internationally</a> on software practices like front-end development and clean coding. Cory is a Microsoft MVP, Telerik Developer Expert, and founder of <a href="http://www.outlierdeveloper.com" rel="noopener">outlierdeveloper.com</a>.</p>
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
