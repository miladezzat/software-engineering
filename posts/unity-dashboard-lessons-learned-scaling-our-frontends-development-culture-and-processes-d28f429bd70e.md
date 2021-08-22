---
card: "https://cdn-media-1.freecodecamp.org/images/1*rUtnJRnd_CvejLsYapq3-g.jpeg"
tags: [JavaScript]
description: by Maciej Gurban
author: "Milad E. Fahmy"
title: "Unity Dashboard — lessons learned scaling our frontends, development culture and processes"
created: "2021-08-15T19:36:10+02:00"
modified: "2021-08-15T19:36:10+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-scaling tag-tech tag-productivity tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">Unity Dashboard — lessons learned scaling our frontends, development culture and processes</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*rUtnJRnd_CvejLsYapq3-g.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*rUtnJRnd_CvejLsYapq3-g.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*rUtnJRnd_CvejLsYapq3-g.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*rUtnJRnd_CvejLsYapq3-g.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*rUtnJRnd_CvejLsYapq3-g.jpeg" alt="Unity Dashboard — lessons learned scaling our frontends, development culture and processes">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Maciej Gurban</p>
<h1 id="unity-dashboard-lessons-learned-scaling-our-frontends-development-culture-and-processes">Unity Dashboard — lessons learned scaling our frontends, development culture, and processes</h1>
<p>At Unity, we’ve recently set out to improve our Dashboards — an undertaking which dramatically changed not only our frontend tech stack, but also the ways we work and collaborate.</p>
<p>We’ve developed best practices and tooling to help us scale our frontend architecture, build products with great UX and performance, and to ship new features sooner.</p>
<p>This article gathers these practices and aims to provide as much reasoning behind each decision as possible. But first, some context.</p>
<h3 id="the-legacy">The Legacy</h3>
<p>Looking at the number of engineers, Unity more than quadrupled its headcount in the last 4 years. As the company grew both organically and through acquisitions, its product offering grew as well. While the products developed originally at Unity were largely uniform in terms of tech and design language, the newly acquired ones naturally were not.</p>
<p>As a result we had multiple visually distinct dashboards which worked and behaved differently and which shared no common navigational elements. This resulted in poor user experience and frustrated users. In the very literal sense, the state of frontends of our products was costing us revenue.</p>
<p>After analyzing the portfolio of our products, we’ve elicited three distinct sections Unity Dashboard would be split into: Develop, Operate and Acquire , each satisfying a different business need and meant for different customer groups, thus containing feature sets largely independent from each other.</p>
<p>This new structure, and the introduction of common navigational elements aimed to solve the first major issue our users were facing — where to find the information and configuration options they’re looking for, and while it all looked good on paper, the journey how to get there were far from obvious.</p>
<h4 id="considerations">Considerations</h4>
<p>Many of our developers were very excited about the possibility of moving to React and its more modern tech stack. As these solutions had been battle tested in large applications, and had their best practices and conventions mostly ironed out, things looked very promising.</p>
<p>Nevertheless, what our developers knew best and what most of our actively developed applications were written in was AngularJS. Deciding to start migrating everything in one go would have been a disaster waiting to happen. Instead we set out to test our assumptions on a much smaller scale first.</p>
<p>Perhaps the most disjointed group of products we’ve had were the <strong>Monetization dashboards</strong>. These projects, which would eventually end up under the umbrella of the <strong>Operate dashboard,</strong> were vastly different in almost any way possible: technologies used, approach to UI/UX, development practices, coding conventions — you name it.</p>
<p>Here’s what the situation roughly looked like:</p>
<figcaption>State of our dashboards in April 2018. Projects using Angular vs those using React.</figcaption>
</figure>
<p>After some brainstorming we identified the main areas which we’d need to work on to bring all the products together:</p>
<h4 id="1-a-single-product">1. A single product</h4>
<p>We needed these dashboards (split across multiple applications, domains and tech stacks) to:</p>
<ul>
<li>Feel like a single product (no full page redirects as the user navigates through pages of all the different applications)</li>
<li>Have a consistent look and feel</li>
<li>Include common navigational elements are always visible and look the same, no matter which part of the dashboard the user is visiting</li>
</ul>
<h4 id="2-legacy-support">2. Legacy support</h4>
<p>While we did have a clean slate when it comes to the technology choice of our new frontend solution, we had to accommodate for the legacy projects which needed to be integrated into the new system. A solution, which didn’t involve big refactoring efforts, and which wouldn’t stop feature development, or drag for months without end in sight.</p>
<h4 id="3-practices-and-tooling">3. Practices and tooling</h4>
<p>While nearly all the teams used AngularJS, different tools were being used to address the same set of challenges. Different test runners and assertion libraries, state management solutions or lack thereof, jQuery vs native browser selectors, SASS vs LESS, charting libraries etc.</p>
<h4 id="4-developer-productivity">4. Developer productivity</h4>
<p>Since every team had their own solution to developing, testing and building their application, the development environment was often riddled with bugs, manual steps, and inefficiencies.</p>
<p>Additionally, many of our teams work in locations separated by a 10 hour difference (Helsinki, Finland and San Francisco), which makes efficient decision-making on any shared pieces a real challenge.</p>
<h3 id="the-new">The New</h3>
<p>Our main areas of focus were to:</p>
<ol>
<li>Encourage and preserve agile ways of working in our teams, and to let the teams be largely independent from one another</li>
<li>Leverage and develop common tooling and conventions as much as possible, to document them, and make them easily accessible and usable</li>
</ol>
<p>We believed that achieving these the goals would significantly improve our time to market and developer productivity. For that to happen, we required a solution which would:</p>
<ul>
<li><strong>Build product features with better user experience</strong></li>
<li><strong>Improve code quality</strong></li>
<li><strong>Allow for better collaboration</strong> without blocking anybody’s work progress in the process.</li>
</ul>
<p>We also wanted to encourage and ease-in the move to a modern tech stack to make our developers more satisfied with their work, and to over time move away from our antiquated frameworks and tooling.</p>
<p>The ever-evolving result of our work is a React-based SPA built inside a monorepository where all the pages and bigger features get built into largely independent code bundles loaded on demand, and which can be developed and deployed by multiple teams at the same time.</p>
<p>As a means of sandboxing all the legacy applications but still displaying them in the context of the same new application, we load them inside an iframe from within which they can communicate with the main SPA using a message bus implemented using the <code><a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage" rel="noopener">postMessage()</a></code> API.</p>
<h3 id="the-monorepository">The monorepository</h3>
<p>Here’s the directory structure we started out with:</p><pre><code>/src   /components  /scenes    /foo      /components      package.json      foo.js    /bar      /components      package.json      bar.js package.json index.js</code></pre>
<p>The <code>package.json</code> in the root directory contains a set of <code>devDependencies </code>responsible for development, test and build environment of the whole application, but also contains <code>dependencies</code> of the core of the application (more on that a bit later).</p>
<p>All the larger UI chunks are referred to as <em>scenes</em>. Each <em>scene</em> contains a <code>package.json</code> where <code>dependencies</code> used by that scene’s components are defined. This makes two things possible:</p>
<ol>
<li><strong>Deployment updates only the files which have changed</strong><br>The build step compiles separate vendor and app bundles for each scene, naming each using a hash which will change only when contents of the file have changed. This means our users only download files which have changed since their last visit, and nothing more.</li>
<li><strong>Scenes are loaded only when needed</strong><br>We load all scenes asynchronously and on demand which drastically improves the load times of the whole application. The “on demand” here usually means visiting a specific route, or performing a UI action which performs a <a href="https://github.com/tc39/proposal-dynamic-import" rel="noopener">dynamic module import</a>.</li>
</ol>
<p>Here’s how such setup looks in practice (simplified for readability):</p><pre><code>// In src/routes.jsconst FooLoader = AsyncLoadComponent( () =&gt; import(‘src/scenes/foo/foo’), GenericPagePreloader,);</code></pre><pre><code>&lt;Route path=”/foo” component={FooLoader) /&gt;</code></pre><pre><code>// In src/scenes/foo/foo.js&lt;React.Suspense fallback={GenericPagePreloader}&gt; &lt;Component /&gt;&lt;/React.Suspense&gt;</code></pre>
<p>The <code>AsyncLoadComponent</code> is a thin wrapper around <code><a href="https://reactjs.org/docs/code-splitting.html#reactlazy" rel="noopener">React.lazy()</a></code>, additionally accepting a preloader component, the same one passed through fallback to <code><a href="https://reactjs.org/docs/code-splitting.html#suspense" rel="noopener">React.Suspense()</a></code>, and a delay after which the preloader should be rendered if the scene hasn’t finished loading.</p>
<p>This is useful when making sure our users see the same preloader without any interruption or flash of content from the moment a scene is requested to the moment when all of its files have been downloaded, all of the critical API requests have completed, and the component has finished rendering.</p>
<h3 id="component-tiers">Component tiers</h3>
<p>As each application grows, its directory structure and abstractions evolve along with it. After roughly half a year of building and moving features to the new codebase, having a single <em>components</em> directory proved insufficient.<br>We needed our directory structure to inform us about:</p>
<ul>
<li>Have the components been developed to be generic, or are they meant only for a specific use-case?</li>
<li>Are they generic enough to be used across all the application, or should they used only in the certain contexts?</li>
<li>Who’s responsible for and most knowledgable about the code?</li>
</ul>
<p>Based on that we’ve defined the following <strong>Component Tiers</strong>:</p>
<h4 id="1-application-specific-src-app-">1. Application-specific (src/app)</h4>
<p>Single-use components which cater to specific use-cases within this application, and which are not meant to be re-used or extracted to the component library (routes, footer, page header etc.).</p>
<h4 id="2-generic-src-components-">2. Generic (src/components)</h4>
<p>Generic multi-purpose components to be used all across the application and its scenes. Once we’ve arrived at a stable API for these components, they could be moved into the common component library (more on that below)</p>
<h4 id="3-components-of-a-single-scene-src-scenes-my-scene-components-">3. Components of a single scene (src/scenes/my-scene/components)</h4>
<p>Components developed with a specific use case in mind; not meant to be used in any other scenes. For cases when a component from one scene needs to be used in another one, we’d use:</p>
<h4 id="4-multi-scene-components-src-scenes-components-my-feature-">4. Multi-scene components (src/scenes/components/my-feature)</h4>
<p>Components used across multiples scenes, but not meant to be generic enough to be used anywhere else. To illustrate why simply moving them to <code>src/components</code> isn’t good enough:</p>
<p>Imagine that so far you’ve had a single scene which contained components used to build some rather specific data charts. Your team is now building a second scene which will use different data for the charts, but visually the two will look pretty much the same.</p>
<p>Importing components from one scene into another would break the encapsulation of the scene and would mean that we can no longer be certain whether changes made to a single scene’s components only affect that one scene.</p>
<p>For this purpose, any component or group of components, roughly referred to as a feature, would be placed in <code>src/scenes/components</code> from where it can be imported and used by any other team, however:</p>
<p>Whenever a team would like to start using scene components which another team developed, the best practice would be to reach out to that team first to figure out whether the use case you intend these components for can safely be supported in the future. Giving a heads up to the team who originally developed the code will prevent shipping broken features in the future when code you’ve taken into use inevitably gets changed in ways you didn’t expect (because of course, how could you!), and which might not always be caught by the unit tests.</p>
<h4 id="5-common-library">5. Common library</h4>
<p>Components which we’ve battle-tested in production and want to extract to our shared component library, used by other dashboard teams at Unity.</p>
<h3 id="ode-to-shared-dependencies">Ode to shared dependencies</h3>
<p>While it would be very convenient to be able to build and deploy every piece of our application in a fully isolated environment, certain dependencies — both external libraries and internal application code — are simply going to be used all across the codebase. Things like React itself, Redux and all redux-related logic, common navigational components etc.</p>
<h4 id="rolling-out-the-changes">Rolling out the changes</h4>
<p>At the moment, fully encapsulating the scenes isn’t practical and in many cases simply impossible. It would take either shipping many dependencies multiple times over and in the process slowing down pages loads, or building abstractions meant to make certain libraries work in aways they’ve not been designed to.</p>
<p>As the web development and its ecosystem evolves though, the libraries seem to become more and more standalone and encapsulated, which we hope in the future will mean little to no shared dependencies, and true isolation between all the modules.</p>
<blockquote>Perhaps the biggest drawback of authoring large-scale applications is performing code changes and dependency updates without breaking something in the process</blockquote>
<p>Using a monorepository makes it possible (though not mandatory) to roll out changes and updates to the code in more gradual and safe manner — if a change causes issues, these issues will only affect a small part of the application, not the whole system.</p>
<p>And while for some the ability to perform updates on multiple unrelated areas of the codebase at the same time would come off as a benefit, the reality of having multiple teams working on the same codebase and not knowing all the other teams’ features thoroughly means that a great deal of caution is needed when building the application scaffolding and taking measures to minimize the risk of breakage.</p>
<h4 id="how-to-avoid-breaking-things">How to avoid breaking things</h4>
<p>Perhaps the most fundamental strategy which helps us to do so, other than scene isolation, is having a <strong>high unit test coverage</strong>.</p>
<ol>
<li><strong>Testing</strong></li>
</ol>
<p>The unit tests aren’t of course everything — many mature products on even a moderate scale do after all invest in suites of integration and e2e tests which do a better job at verifying whether the application works as expected overall. However, as the number of features grows so does the maintenance cost and time needed to run them — a cost which cannot always be justified for less crucial but still important features.</p>
<p><strong>Some lessons we’ve learned from various testing strategies:</strong></p>
<ul>
<li>Try to unit test as much of the code as possible, especially: conditional logic, data transformations and function calls</li>
<li>Invest in and leverage integration tests to their full extent before deciding to write any e2e tests. The initial cost of integration tests is much higher, but pales in comparison to the price of upkeep of an e2e suite</li>
<li>Try not to over-react by starting to write e2e tests for things that weren’t caught by unit or integration tests. Sometimes, the processes or tooling are at fault</li>
<li>Let test cases explain UI behavior rather than implementation details</li>
<li>Automated tests cannot fully replace manual testing</li>
</ul>
<p><strong>2. Minimize the surface of shared code</strong></p>
<p>Aside from testing, code re-used across the whole application is kept to a reasonable minimum. One of the most useful strategies so far has been to move the most commonly used components and code to a shared component library, from where they are used as dependencies in scenes which need them. This allows us to roll out most of the changes progressively, on a per team- or page-basis.</p>
<p><strong>3. Accountability</strong></p>
<p>Last but not least, a huge factor in multiple teams being able to collaborate within the same codebase comes from encouraging and having <strong>developers take personal responsibility and accountability for the product</strong>, instead of offloading the responsibility for properly testing that everything works to Q.A., testers or automation.</p>
<p>This carries over to code reviews as well. Making sure each change is carefully reviewed is harder than it might seem on the surface. As team works closely together, a healthy degree of trust is developed between its members. This trust however, can sometimes translate into people being less diligent about changes made by the more experienced or otherwise trustworthy developers.</p>
<p>To encourage diligence, we emphasize that <strong>the author of the PR and the reviewer are equally responsible for ensuring everything works</strong>.</p>
<h3 id="component-library">Component library</h3>
<p>To achieve the same look and feel across all the pages of our dashboards, we’ve developed a component library. What stands in our approach, is that new components are almost never developed within that library.</p>
<p>Every component, after being developed within the dashboard’s codebase, is taken into use in a bunch of features within that codebase first. Usually after a few weeks we begin to feel more confident that the component could be moved over, given that:</p>
<ul>
<li>The API is flexible enough to support the foreseeable use-cases</li>
<li>The component has been tested in a variety of contexts</li>
<li>The performance, responsiveness, and UX are all accounted for</li>
</ul>
<p>This process follows the <a href="https://blog.codinghorror.com/rule-of-three/" rel="noopener">Rule of Three</a> and aims to help us <strong>release only components which are truly reusable</strong> and have been taken into use in a variety of contexts before being moved to our common library.</p>
<p>Some of the examples of the components we’d move over would include: footer, page header, side and top navigation elements, layout building blocks, banners, powered-up versions of buttons, typography elements etc.</p>
<p>In the early days, the component library used to be located in the same codebase as the application itself. We’ve since then extracted it to a separate repository to make the development process more democratized for other teams at Unity — important when driving for its adoption.</p>
<h4 id="modular-component-design">Modular component design</h4>
<p>For the longest time, building reusable components meant dealing with multiple challenges, many of which often didn’t have good solutions:</p>
<ul>
<li>How to easily import the component along with its styles, and only that</li>
<li>How to override default styles without selector specificity wars</li>
<li>In bigger components consisting of multiple smaller ones, how to override the styling of the smaller component</li>
</ul>
<p>Our dashboard, as well as our component library heavily depend on and utilize <a href="https://material-ui.com/" rel="noopener">Material UI</a>. What’s uniquely compelling in Material UI’s styling solution is the potential brought by <a href="https://cssinjs.org" rel="noopener">JSS</a> and their <a href="https://medium.com/seek-blog/a-unified-styling-language-d0c208de2660" rel="noopener">Unified Styling Language</a> (well worth the read), which make it possible to develop UIs <em>encapsulated by design</em> like in the case of <a href="https://github.com/css-modules/css-modules" rel="noopener">CSS Modules</a>, and solve of the above mentioned issues in a stride.</p>
<p>This differs significantly from approaches like <a href="http://getbem.com/" rel="noopener">BEM</a> which provide <em>encapsulation by convention</em> which tend to be less extensible and less encapsulated.</p>
<h3 id="living-styleguide">Living styleguide</h3>
<p>A component library wouldn’t be complete without a way to showcase the components it contains and being able to see the components as they change throughout the releases.</p>
<p>We’ve had pretty good experience with <a href="https://storybook.js.org/" rel="noopener">Storybook</a> which was ridiculously easy to setup and get started with, but after some time we realized a more robust and end-to-end solution was needed. Pretty close to what <a href="https://react-styleguidist.js.org/" rel="noopener">Styleguidist</a> offers, but more tailored to our needs.</p>
<h4 id="existing-design-docs">Existing design docs</h4>
<p>The documentation serving as the main source of information about the latest design specification was located in Confluence, where designers kept an up-to-date specification for each component using screenshots illustrating permitted use-cases, states and variations the component could be in, listed best practices, as well as details like dimensions, used colors etc. Following that approach we’ve faced a number of challenges:</p>
<ul>
<li><strong>Material design specification keeps evolving</strong> and because of that we oftentimes found ourselves either spending time on updating all the screenshots and guidelines, or let our design guidelines become outdated</li>
<li><strong>Figuring out which is more correct: implementation or specification</strong> wasn’t always an easy task. Because we’ve been publishing Storybook demos of every component and for every library version, we could see what and how changed. We couldn’t do the same for the design spec.</li>
<li><strong>Screenshots and videos can only communicate as much</strong>. To provide components of high quality and which can be used by multiple teams it’s necessary to review whether each component works in all resolutions, is bug-free and has good UX — this was difficult without having the designer sit literally next to you to see the implementation demo being shown on the screen</li>
</ul>
<h3 id="component-documentation-app">Component documentation app</h3>
<p>Our documentation app aims to provide the means of efficient collaboration between designers and engineers to make it simpler and less time-consuming for both parties to document, review and develop components. To be more specific, we needed to:</p>
<ul>
<li><strong>Have a single point of reference showcasing the components</strong>, how<strong> </strong>should they look, behave, and be used — provided for every release — replacing detailed descriptions with live demos</li>
<li><strong>Make it as easy for designers and developers to collaborate</strong> on components and their docs and do so before the components are released — without the need of sharing videos, screenshots, or being physically in the same location</li>
<li><strong>Separate the designs into what we plan to do vs what has been done</strong></li>
</ul>
<p>Similarly like before, each release of the component library causes a new version of the living styleguide to be published. This time over however, there are a few differences:</p>
<ol>
<li><strong>Designers contribute to component documentation directly</strong> by editing documentation files through the Github UI, committing changes to the latest release.</li>
<li><strong>Component demos as WYSIWYG</strong> — the same code you see as an example of how to implement the component is used to render the demo, including any intermediate file imports, variable declarations etc. As an added bonus, components wrapped in <code>withStyles()</code> are displayed correctly (<a href="https://github.com/storybooks/storybook/issues/3851" rel="noopener">issue</a> present in Storybook at the moment).</li>
<li><strong>Changes to the docs and the code are almost instantly visible</strong> without checking out the branch locally and starting the documentation app — the app is rebuilt and published on and for every commit.</li>
</ol>
<h3 id="development-experience">Development experience</h3>
<p>One of the main goals of code reviews is making sure that each change is carefully reviewed, considered and tested before being merged and deployed.</p>
<p>To make this task as obstacle-free as possible we’ve developed a <strong>Preview Server</strong> capable of creating a new build of our application every time a PR is created or updated.</p>
<figcaption>A comment containing version links gets added to every PR and is updated on every pushed change</figcaption>
</figure>
<p>Our designers, product managers and engineers can test each change before merging it in, in both staging and production environments and within minutes of making the change.</p>
<figcaption>Browsing production version of the application before merging the PR</figcaption>
</figure>
<h3 id="closing-words">Closing words</h3>
<p>It’s been nearly a year since we’ve undertaken to consolidate our dashboards. We’ve spent that time learning how to grow a large but healthy software project, how to get better at collaboration and communication, and how to raise the quality bar for ourselves.</p>
<p>We scaled a frontend project not only in terms of lines of code, but also in terms of number of engineers who work within its codebase — a number which quadrupled since the beginning.</p>
<figcaption>Code frequency from the beginning of project’s existence until now</figcaption>
</figure>
<p>We did a 180 degree change in dealing with time differences between our teams, moving away from a model where our teams worked in full isolation to one where close collaboration and communication are an everyday occurrence.</p>
<p>While we still have a long road ahead to ensure we can scale our approach to more teams and to bigger challenges, we’ve noticed a number of improvements already:</p>
<ul>
<li><strong>Roadmap and work visibility</strong><br>Due to having one place where all the work is happening, the progress gets tracked, and all the issues are gathered in</li>
<li><strong>Development velocity and time-to-market</strong><br>New features can be created in large part from already existing and well-tested components — easily findable through our documentation app</li>
<li><strong>Code quality &amp; test coverage</strong><br>When building new things, a solution to a similar problem usually already exists and is at a hand’s reach, along with examples how to test it</li>
<li><strong>Overall quality &amp; UX</strong><br>Testing features and ensuring their quality is now easier than ever, as designers, product managers and other stakeholders can test each change on their own machine, with their own accounts and data sets</li>
</ul>
<p>Naturally, along the way we’ve encountered a number of challenges which we need to solve, or which will need solving in the future:</p>
<ul>
<li><strong>Build &amp; CI performance</strong><br>As the numbers of dependencies, build bundles, and tests grow, as does the time needed to do a deployment. In the future, we’ll need to develop tooling to help us only build, test and deploy the pieces which changed.</li>
<li><strong>Development culture</strong><br>To build healthy software, we need to continuously work on healthy ways of communicating and exchanging ideas, and text-based communications make this task more difficult. We’re working to address this issue through a series regular leadership training sessions and embracing a more open-source ways of working, as well as organizing a few get together sessions per year for the teams to meet each other face to face.</li>
<li><strong>Breakage isolation &amp; updates</strong><br>As the number of features and pages grows, we’ll need a more robust way of isolating our application modules to prevent damage from spreading for when things go wrong. This could be achieved by versioning all the shared code (redux logic, src/components), or in extreme cases producing standalone builds of certain features.</li>
</ul>
<h4 id="state-then-now-and-in-the-future">State then, now and in the future</h4>
<p>The migration has involved moving away from AngularJS to React. Here’s how the situation changed over the past year:</p>
<figcaption>April 2018</figcaption>
</figure>
<figcaption>February 2019</figcaption>
</figure>
<figcaption>Where we hope our dashboards will be by the end of 2019</figcaption>
</figure>
<p>It’s a wrap! Thank you for reading! You can find me on LinkedIn <a href="https://www.linkedin.com/in/maciejgurban/" rel="noopener">here</a>.</p>
<p>If working on similar challenges sounds interesting to you, we’re always looking for talented engineers to join our teams <a href="https://careers.unity.com/" rel="noopener">all around the world</a>.</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
