---
card: "/images/default.jpg"
tags: [JavaScript]
description: You've probably never heard of either Vulcan.js or Apollo Uni
author: "Milad E. Fahmy"
title: "A comparison between Vulcan and AUSK: how to use Node, React and GraphQL to their full potential"
created: "2021-08-15T19:32:36+02:00"
modified: "2021-08-15T19:32:36+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-graphql tag-vulcan-js tag-reactjs tag-apollo ">
<header class="post-full-header">
<h1 class="post-full-title">A comparison between Vulcan and AUSK: how to use Node, React and GraphQL to their full potential</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2019/10/sayan_ausk_vulcan_banner_1600.png 300w,
/news/content/images/size/w600/2019/10/sayan_ausk_vulcan_banner_1600.png 600w,
/news/content/images/size/w1000/2019/10/sayan_ausk_vulcan_banner_1600.png 1000w,
/news/content/images/size/w2000/2019/10/sayan_ausk_vulcan_banner_1600.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2019/10/sayan_ausk_vulcan_banner_1600.png" alt="A comparison between Vulcan and AUSK: how to use Node, React and GraphQL to their full potential">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<h2 id="the-nrg-stack-for-faster-development">The NRG stack for faster development</h2>
<p>You've probably never heard of either Vulcan.js or Apollo Universal Starter Kit – at least not yet.</p>
<p>But I am pretty sure you've heard about React, Node.js and GraphQL. Okay, that’s what we call an understatement: you’ve likely seen millions of tweets, blog articles, meetups and podcasts about those three and their magical powers.</p>
<figcaption>Sums up 2017-2020 in one tweet</figcaption>
</figure>
<p>There are a lot of good reasons why those technologies are praised by web developers. Yet, if you ever tried to write a modern full-stack JavaScript application from scratch, you may have noticed the amount of boilerplate it can produce.</p>
<p>This is especially annoying with generic features: setting up authentication, setting up the database, setting up the main App component, setting up the settings…</p>
<p>Both Vulcan.js and AUSK aim to make you a fast and efficient full-stack JavaScript developer. Both rely on a modular architecture, with React for the UI, Node for the backend, and Apollo graphQL for the client/server communication layer. Both provide tons of pre-coded modules so you can focus on valuable features.</p>
<p>However, they each take very different approaches to the problem, so I thought you might enjoy a comparison.</p>
<p>First of all let’s introduce the competitors.</p>
<p><em>Disclaimer: I am a contributor of Vulcan.js, however I used both of those technologies for my client’s projects so I’ll stay as objective as can be.</em></p>
<h2 id="apollo-universal-starter-kit">Apollo UNIVERSAL Starter Kit</h2>
<p>Okay, when they say universal, they mean UNIVERSAL. Have you ever seen a JavaScript boilerplate that includes a Scala server for big work? And a full React Native setup with Expo? They even close the eternal (and annoying) Angular versus React debate by supporting both.</p>
<figcaption>Technologies included in AUSK: Node, Scala, React, Angular and React Native, all tied by GraphQL. Kind of the Oscar ceremony of modern web development.</figcaption>
</figure>
<p>I don’t have much else to say. I mean, look again at this stack, that’s a web developer’s wildest dream! </p>
<p>I actually have something to add: it also includes Bootstrap and Ant Design as styling frameworks, Knex to connect to SQL database (MongoDB connection is not included but easily doable), and it’s written in TypeScript. All core features of a JS/GraphQL application are provided in the boilerplate (menu, auth, etc.)+ a few higher level modules that serve as examples.</p>
<p>Link: <a href="https://github.com/sysgears/apollo-universal-starter-kit" rel="noopener">https://github.com/sysgears/apollo-universal-starter-kit</a></p>
<h2 id="vulcan-beyond-universal-isomorphic">Vulcan: beyond universal, isomorphic</h2>
<p>Remember Meteor and Telescope? I know the JS ecosystem moves fast, but this golden era was like only 2 or 3 years ago.</p>
<p>Meteor was the first framework to fully exploit the combination of server-side and client-side JavaScript, by allowing to write isomorphic code that runs on both environment. Telescope was a Meteor boilerplate app meant to fully enjoy its package-oriented architecture.</p>
<p>Though still used in many professional apps and known by a whole lot of developers, Meteor is crippled by some technical limitations that prevents a wider usage: its webpack-incompatible build system, its package manager that is now surpassed by NPM, or its RAM-consuming real-time data exchange protocol.</p>
<p>And I am yet to discover a framework that makes devs half as productive as Meteor. But don’t worry, there’s now a serious contender. You get it : Vulcan !</p>
<p>The use of Apollo GraphQL and a rational package-oriented architecture allow Vulcan to overcome Meteor's limitations while enjoying the same advantages: fully modular architecture, declarative programming, isomorphism and so on.</p>
<p>Vulcan is meant to be the Rails of the JavaScript ecosystem. Easy to get started with but complete enough to write any app.</p>
<p><a href="http://:%20https://medium.com/dailyjs/write-less-code-ship-more-apps-how-vulcan-js-makes-me-an-efficient-developer-71c829c76417" rel="noopener">Check my previous article for a more complete description of Vulcan patterns targeting development speed</a>.</p>
<p>Link: <a href="http://vulcanjs.org/" rel="noopener">http://vulcanjs.org/</a></p>
<h2 id="-1-framework-vs-boilerplate">#1: Framework VS Boilerplate</h2>
<p>First major difference between these tools: AUSK is a boilerplate, while Vulcan is a framework. Where does the distinction lie, you may wonder?</p>
<h3 id="vulcan-a-framework">Vulcan, a framework</h3>
<p>A framework is meant to make you a more efficient developer on a daily basis by providing a specific set of functions and helpers. It is usually designed to stay separate from your app. You can update your app from time-to-time whenever a new version of the framework is published.</p>
<p>We usually distinguish frameworks and librairies based on the level of specialization. A framework usually allows delivering business-level features, while a library is a more specialized technical tool. But both mostly works the same.</p>
<p>The limitation with frameworks or libs is that you may feel lost when they abandon you. What do you do when the bug is not in your app, but in React or Apollo?</p>
<p>My rule of thumb is that when using a framework, you should be ready to contribute to its development, at least by opening issues whenever you encounter a bug.</p>
<h3 id="ausk-a-boilerplate">AUSK, a boilerplate</h3>
<p>A boilerplate is a well written piece of code with a fully working development environment. That’s all. With a boilerplate it’s harder to keep up with updates because the boilerplate code is not clearly separated from your app. Kind of like Create React App after you eject.</p>
<p>It usually provides only few custom methods. You will feel faster in the first month and you will benefit from a battle-tested architecture, but your cruise speed will end up being mostly the same than without a boilerplate.</p>
<p>A boilerplate is far more freedom than a framework but also less impact on your efficiency.</p>
<h2 id="-2-learning-curve">#2 Learning Curve</h2>
<h3 id="vulcan-graphql-made-easy">Vulcan: GraphQL made easy</h3>
<p>Vulcan can be a good way to get a first grasp of GraphQL because… you don’t need to actually write GraphQL. The framework generates the GraphQL schema and resolvers for you based on your data model. Using developer tools like GraphiQL or GraphQL Voyager, you can visualize and play around with the schema to get a grasp of how your features translate into GraphQL.</p>
<p>The second step is to understand the logic of Vulcan itself. A live tutorial is included in the “Vulcan Starter” app to help you in the process.</p>
<h3 id="ausk-for-purists">AUSK: for purists</h3>
<p>AUSK architecture is far closer to what Express developers are used to. Think of your canonical Express app, but with GraphQL installed and a package-based architecture. No surprises.</p>
<p>This also means that you’ll need to grasp the basics of GraphQL to use AUSK, in addition of course to Node, Express and React and whatever database you use (but the same goes for Vulcan). Luckily, it provides a few examples to help you in the process, including creating and listing data and even uploading files.</p>
<h3 id="conclusion-full-stack-devs-have-a-lot-to-master">Conclusion: Full-stack devs have a lot to master</h3>
<p>The JavaScript ecosystem is maturing more and more, which also means it is harder to learn and understand for beginners.</p>
<p>To fully enjoy those technologies, you’ll need at least some knowledge of modern JavaScript and React development.</p>
<p>Don’t expect to be fully productive at day one. That said, there are pleeenty of courses, free or paid, to learn modern full-stack JavaScript development. Studying AUSK and Vulcan can be an incredible source of inspiration.</p>
<h2 id="-3-development-speed">#3 Development speed</h2>
<h3 id="vulcan-automate-all-the-things">Vulcan: automate all the things</h3>
<p>When well used, <a href="/news/how-i-built-an-app-with-vulcan-js-in-four-days-6368814077b1/" rel="noopener">Vulcan is just incredibly fast at delivering features</a>. This is because it relies on automated generation a lot, so it can produces the most relevant parts of an app in a matter of hours as long as your data model is correctly defined.</p>
<p>This pattern is called declarative programming: you “declare” how your app works and let the framework do the job. It’s difficult to implement but can be extremely powerful.</p>
<h3 id="ausk-more-freedom">AUSK: more freedom</h3>
<p>Since AUSK is boilerplate-focused, it’s a bit tougher to add basic features as it’s a multi-step process:</p>
<ul>
<li>write your GraphQL schema</li>
<li>same for resolvers, mutations</li>
<li>same for your database model (using Knex or Mongoose)</li>
<li>same for your React components</li>
<li>…</li>
</ul>
<p>However,<strong> </strong>if you need to write a custom feature, it’s gonna be easier with AUSK than with Vulcan. So if you have very few data models but complex features, AUSK will be more efficient than Vulcan.</p>
<p>Hopefully there are ongoing work to make AUSK more declarative, through an innovative Domain Driven Design inspired schema system, <a href="https://github.com/sysgears/domain-schema" rel="noopener">domain-schema</a>.</p>
<h3 id="conclusion-select-the-right-tool-for-the-right-use-case">Conclusion: select the right tool for the right use case</h3>
<p>There’s no magical universal technology for full-stack JS development. The development speed with each framework depends a lot on the underlying use case. I tend to prefer Vulcan for data-oriented platforms and professional tools, and AUSK for B2C SaaS platforms that require more custom features.</p>
<h2 id="-4-community-support-and-maturity">#4 Community, support and maturity</h2>
<h3 id="vulcan-heir-of-meteor">Vulcan: heir of Meteor</h3>
<p>Vulcan is a framework from Sacha Greif, who is a long time Meteor developer and very invested in the JavaScript community (<a href="https://stateofjs.com/" rel="noopener">State of JS</a> and <a href="https://stateofcss.com/" rel="noopener">State of CSS</a> among other things).</p>
<p>There is an active Slack where beginners and other enthusiasts can quickly find answers to their questions.</p>
<h3 id="ausk-an-actively-maintained-project">AUSK: an actively maintained project</h3>
<p>AUSK is maintained by <a href="https://sysgears.com/" rel="noopener">SysGears</a>, in particular by Victor Vlasenko, the founder of the company.</p>
<p>The project is associated with Gitter. During my latest freelance mission with AUSK, Victor responded very quickly to my issues and questions. He even merged the Storybook support after I gave it a shot.</p>
<h3 id="conclusion-small-but-rich-communities">Conclusion: small but rich communities</h3>
<p>Both technologies are used in production in multiple projects, so they are already safe to use. The communities are growing actively and beginner-friendly.</p>
<p>If you need to build a team, don’t expect to find freelancers that precisely know those technologies, they are too specific. Instead focus on finding full-stack JavaScript developers who will be able to quickly learn them. Alternatively, you can go to the source and find true specialists among the <a href="http://slack.vulcanjs.org/" rel="noopener">Vulcan</a> or <a href="https://gitter.im/sysgears/apollo-fullstack-starter-kit" rel="noopener">AUSK</a> communities.</p>
<h2 id="-5-deployment">#5 Deployment</h2>
<p>Not much to compare, both frameworks allow deployment on platforms offering free services like Zeit Now and Heroku as well as deployment on your own custom server.</p>
<h2 id="-6-code-scalability-and-modular-patterns">#6 Code scalability and modular patterns</h2>
<h3 id="vulcan-share-efforts">Vulcan: share efforts</h3>
<p>One advantage of a framework is effort sharing. End usage is clearer, and thus allows us to integrate various optimizations within the framework itself.</p>
<p>Vulcan provides patterns like callbacks/hooks, enhancement and central registration to fully benefit from its package-oriented architecture. For example, we are able to add Material UI to an app, including SSR, without changing a single line of code in the Vulcan Core module.</p>
<p>More precisely, Vulcan provides different <code>register</code> methods for each data structure, like <code>registerComponent</code> , and also callbacks, like <code>router.wrapper</code> that allow to wrap the root <code>App</code> React component. You only need to import your file once at the package entry level ( <code>main</code> files).</p>
<h3 id="ausk-start-on-the-right-track-finish-by-yourself">AUSK: start on the right track, finish by yourself</h3>
<p>The modular architecture limits the temptation of writing spaghetti code. It favors code reuse across applications. Each package possesses an <code>index.ts</code> file that declares relevant middlewares, startup functions, graphQL functions shared with other modules.</p>
<p>The well-named <code>module</code> module provides classes for each environment to register a new module, like <code>ServerModule</code> and <code>ClientModule</code> . That’s the only module that is actually used directly at the app level.</p>
export default new ServerModule({
onAppCreate: [ callback1, callback2]
})
</code>
</pre>
<p>Internally all modules will be merged into one big module, that will eventually be used to create the app. For example, all <code>onAppCreate</code> callbacks will be run one after the other.</p>
<p>That’s a relatively clean pattern and a very smart architecture. I mean, even the module manager is a module, isn’t that beautiful?</p>
<p>But the rest is up to you. Nice, you’ll be able to optimize everything! So, are you going to loose couple your GraphQL resolvers and your Mongo database? Using which tools? How do you convert your GraphQL schema into Mongo projections? Are you going to write connectors, use DataLoader?</p>
<p>Here’s the point: writing a scalable app is hard. Very hard. If you want to learn, then good for you. I am very glad to use AUSK for this very reason, doing things by yourself is the best way to learn.</p>
<h3 id="conclusion-are-you-risk-averse">Conclusion: are you risk-averse?</h3>
<p>For both AUSK and Vulcan, code scalability means a modular architecture. Whenever code becomes too complex or unreadable, the solution is easy: cut it into smaller, simpler pieces.</p>
<p>Vulcan architecture is bolder, everything can be modular. This ambition comes at a risk, it may sometimes be difficult to get who registered what and when.</p>
<p>AUSK modular patterns are easier to read, but also a bit less powerful. It may for example be difficult to add complex global features without touching the core package code. Yet they are definitely sufficient for most use cases, you don’t have to be a modularity purist to write good apps.</p>
<h2 id="-6-mobile">#6 Mobile</h2>
<h3 id="vulcan-with-cordova">Vulcan: with Cordova</h3>
<p>Meteor, which Vulcan is based on, embeds Cordova. So your web app can be bundled as a mobile application with a single command line.</p>
<p>However Vulcan does not provide tools for native apps. Of course you can still create an independent React Native app and plug it to Vulcan. Improvements on the auth system (currently the last piece of Vulcan really relying on Meteor) are planned in the months to come to facilitate such connections.</p>
<h3 id="ausk-with-react-native">AUSK: with React Native</h3>
<p>Combining both a setup for “vanilla” React and React Native is one of the best features of AUSK. After all, it’s a Universal starter kit! I don’t do much mobile myself but it’s reassuring to be able to quickly create a native mobile app sharing the same server as my web interface.</p>
<h3 id="conclusion-ausk-is-better-at-mobile-first">Conclusion: AUSK is better at mobile-first</h3>
<p>AUSK will be more suited if you specifically need to write a mobile app. Nonetheless Vulcan allows to build a mobile app from your code in just one command-line, which is okay if the mobile version is more secondary to you.</p>
<h2 id="-7-change-the-ui-a-tough-issue">#7 Change the UI: a tough issue</h2>
<p>Creating a fullstack framework that allows instantaneous UI library change is a dream only achieved during the era of CSS. Remember those websites that allowed to switch &nbsp;theme by clicking on a single button?</p>
<figcaption>“What logo can we pick for our nice CSS-in-JS lib?” “I don’t know, kind of a badass warrior woman?” “Yeah it makes total sense” — creators of <a href="https://github.com/emotion-js/emotion">Emotion</a>, probably</figcaption>
</figure>
<p>Then the JS nations attacked. Using React components, it is very difficult to provide such a feature (except for trivial color changes), because style and design is now very tied to the underlying React/Angular/Vue components.</p>
<p>Each React UI lib has its own way to define a button, without even speaking about theming. That’s a problem for full-stack technologies like AUSK and Vulcan, because picking a styling framework is a matter of taste. They can’t just propose a definitive choice and force you to stick to it. Bootstrap is no longer at monopoly and each developer has their own favorite lib.</p>
<p>To tackle this issue, both have a similar approach. They wrote a canonical set of components with Bootstrap, then tried to allow the replacement of those components with another lib like Ant Design or Material UI.</p>
<p>It makes the code weird. For example, AUSK Button will take a <code>color</code> prop, because it is how Bootstrap work. If you switch to Ant Design, you will also need to use the color prop, even if Ant Design uses a <code>type</code> prop instead.</p>
<p>Since UI framework selection usually happens only once, being obligated to use a non-canonical set of props during all the developments seems a very high price for multiple UI framework support.</p>
<p>During development, I’d suggest to avoid using those pre-coded components for custom UI as much as possible. They are cool to build the example and generic features provided by the boilerplate/framework, but not that much when it comes to write the custom parts of your app.</p>
<p>Instead use the underlying components provided by Ant Design or Bootstrap or Material UI depending on your choice, and try to write your own UI lib. You could checkout Storybook to help you in the process, as it is included in both AUSK and Vulcan.</p>
<h2 id="-8-free-fight">#8 FREE FIGHT</h2>
<p>If I were to retain differentiating features specific to each of these technologies, they would be these.</p>
<h3 id="vulcan">Vulcan</h3>
<p>The schema system. To my best knowledge, &nbsp;no framework is able to generate the database structure, the server entry points, the client/server communication layer, and a production-ready frontend (forms, lists etc.) from a single JSON schema.</p>
<p>Vulcan.js can do that while using the latest JS technologies.</p>
<h3 id="ausk">AUSK</h3>
<p>I did not manage to pick only one, so my loved features of AUSK would be TypeScript and React Native.</p>
<p>There has been debates for a few years around the benefits of statically typed JavaScript, whether to prefer Flow or TypeScript… And TypeScript definitely won the fight. Working with TypeScript is possible in Vulcan but, due to the use of Meteor, is currently feels unnatural and compilation is slow. AUSK uses TypeScript as a default and that’s awesome.</p>
<p>And React Native… well, there are also<em> </em>debates whether using React to write mobile apps is relevant. You may choose to stick to a responsive web app, but at least you know everything is setup for you, given that configuring a dev env for React Native is not always an easy task.</p>
<hr>
<h2 id="so-have-you-made-your-choice">So, have you made your choice?</h2>
<p>There are so many points that should be taken into consideration like performance, security, DevOps, auth management… Picking the right tool to build your JavaScript app is certainly not an easy choice. I hope that this article gave you valuable insights to help you in this decision.</p>
<p>If you still feel hesitant, reach me out on Vulcan's Slack, I’d be glad to answer them :)</p>
<p>You can also direct any question on AUSK to Victor Vlasenko and his team at <a href="https://sysgears.com/" rel="noopener">SysGears</a>, and join <a href="http://slack.telescopeapp.org/" rel="noopener">Vulcan’s dedicated Slack</a> to access the Vulcan community.</p>
<p>My last advice will be that simple: give both Vulcan and AUSK a shot, they are worth your time!</p>
<p><em>Thanks to Sacha Greif and Victor Vlasenko for reviewing this article.</em></p>
<img src="https://www.freecodecamp.org/news/content/images/2019/10/Medium-follow-2019.png" alt="LBKE banner twitter">
</a>
<hr>
<p>I am the co-founder of the French company Lebrun Burel Knowledge Engineering (LBKE) —  <a href="https://www.lbke.fr" rel="noopener">https://www.lbke.fr</a></p>
<p><em>Always happy to talk about code, machine learning, innovation and entrepreneurship!</em></p>
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
