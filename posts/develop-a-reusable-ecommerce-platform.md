---
card: "/images/default.jpg"
tags: [Architecture]
description: "This is a story about my team’s hard work developing not a si"
author: "Milad E. Fahmy"
title: "How to Develop a Reusable eCommerce Platform"
created: "2021-08-16T10:04:18+02:00"
modified: "2021-08-16T10:04:18+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-architecture tag-ecommerce tag-graphql tag-web-development tag-software-development tag-teamwork ">
<header class="post-full-header">
<h1 class="post-full-title">How to Develop a Reusable eCommerce Platform</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/12/plants.jpg 300w,
/news/content/images/size/w600/2020/12/plants.jpg 600w,
/news/content/images/size/w1000/2020/12/plants.jpg 1000w,
/news/content/images/size/w2000/2020/12/plants.jpg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/12/plants.jpg" alt="How to Develop a Reusable eCommerce Platform">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<ul>
<li>Context of the project</li>
<li>The first MVP</li>
<li>Implementing GraphQL</li>
<li>Architecture and Tech Stack</li>
<li>The second MVP</li>
<li>Conclusion and lessons learned</li>
<li>Final thoughts</li>
</ul>
<h2 id="contextoftheproject">Context of the project</h2>
<p>The client we were developing the platform for was an eLearning company which was composed of 3 main sub-companies.</p>
<p>For the past few years, the sub-companies had been operating mostly independently. But now they were trying to create a standardized way of doing things, so they could grow together in the best way.</p>
<p>The project was an ambitious one. Creating an ecommerce platform that would work for all the sub-companies wasn’t easy to design or to implement. There were a large number of unsolved questions they had, which made it very hard to estimate.</p>
<p>To tackle this difficult challenge, we started from the bottom with one of the 3 sub-companies – let’s call it sub-company H. In fact, it wasn’t one of the main sub-companies, it was a sub-company from a sub-company.</p>
<p>To explain it better, if we name the 3 main sub-companies L, N, and P, then H was a sub-company of N.</p>
<p>Being a sub-sub-company didn’t mean the platform would be simpler to develop. It was quite the opposite, actually, given all the features proposed for the MVP.</p>
<p>Part of the product and order information came from another team’s domain, the Integrations team (I will call it team <em>In</em>). They communicated with <a href="https://www.swell.is/">Swell</a> and Klopotek, an ecommerce system where we stored the product's information along with the order’s status.</p>
<p>The discounts were also provided by team <em>In’s</em>, to which we had to subscribe and then calculate the final product price according to the user info and privileges before displaying it.</p>
<p>To make product content like images or descriptions accessible and customizable for the client we retrieved it through <a href="https://www.contentful.com/">Contentful</a>, a content platform where clients were able to manage it in an easy way.</p>
<p>We managed the payment with <a href="https://stripe.com/">Stripe</a>, a payments service, and then we communicated with team <em>In</em> to update the order status on Swell.</p>
<p>The service available for the user to authenticate should be agnostic to the owner and reusable on all sub-companies. It had to be provided by another team, yet in the end, we actually developed it ourselves.</p>
<p>And to put the icing on the cake, we also had to implement the user tracking with <a href="https://segment.com/">Segment</a>, a popular service to collect user events from web and mobile apps.</p>
<p>Here is a simple diagram of what I have been describing which might make it easier to understand. I have grouped the microservices architecture in just <em>Backend</em> and <em>Frontend</em> to keep it simple.</p>
<p>To accomplish our goals for the project, we had to <em>provide the frontend with a unique source of truth</em> of the product’s core information from the backend.</p>
<p>Therefore the only thing that we aimed to have different from one store’s frontend to another would be the designs and the content from Contentful.</p>
<p>Regarding these designs and their implementations on React, we planned to use a shared-components-library.</p>
<p>Therefore, what is GraphQL doing here and why did we decide to go for it?</p>
<p>Well, in case you don’t know how GraphQL works, essentially it lets you define a Schema with all the properties and queries that could be made to your product. Then it lets you serve it to the frontend to let it decide what to request without the backend having to create an endpoint for each of those requests (like in REST services).</p>
<p>To learn more about it, check out this tutorial <a href="https://www.ramonmorcillo.com/getting-started-with-graphql-and-nodejs/">I wrote to explain it</a>. It teaches you how to use it with Node.js. Also, <a href="https://graphql.org/learn/">their docs</a> are worth checking out.</p>
<p>This meant that each of the shops would request the data they needed from the product just by looking at the Schema, the source of truth.</p>
<p>Thanks to this fact we would not have to implement different sources of data  in the backend for each shop. This gave the frontend the power and responsibility (the first involves the second 🕷) to request the product data needed to display at each interface.</p>
<blockquote>
<p>With great power comes great responsibility.<br>
— Stan Lee</p>
</blockquote>
<p>Just to be clear, if we had decided to go with REST we would have needed to create different endpoints for each of the shops. Or we would have had to make the frontend retrieve all the product data in each shop and then decide which properties to display. This means it would've had to store unnecessary data in the frontend that would only add noise.</p>
<p>Or even worse, we would have had all the shops’ backend services deployed for each one of the frontend shops. This would've used unnecessary resources and increased the cost considerably.</p>
<p>Here is why we took this initial approach. The worst part, in my opinion, would've been the waste of time from maintaining and hardly refactoring all the mess that we would have created.</p>
<p>Furthermore, by making a single request on-demand, the payload was lighter, and therefore, the performance over the network was improved.</p>
<p>Anyway, as with every problem, there were other approaches we could've taken on the way to developing this project and its architecture. But at that moment this one seemed to us the best one.</p>
<h2 id="architectureandtechstack">Architecture and Tech Stack</h2>
<p>The microservices architecture mainly consisted of Node.js services hosted on Azure K8s clusters. Depending on their needs and the data they worked with, they did or didn't have a MongoDB, PostgreSQL, or Redis database associated.</p>
<p>The asynchronous communication between them was handled mainly with <a href="https://azure.microsoft.com/en-us/services/service-bus/">Azure Service Bus</a> topics and subscriptions through a publish/subscribe messaging communication model.</p>
<p>The main difference with common messaging queues is that you can have more than one receiver, so you do not have multiple queues to receive messages in more than one service.</p>
<p>We moved from Redux, used in previous projects, to the official <a href="https://reactjs.org/docs/context.html">Context API</a> to manage most of the state.</p>
<p>Here are the main services and their functionalities for the first MVP architecture:</p>
<ul>
<li><strong>shop-web-app:</strong> The client shop application.</li>
<li><strong>gateway-api-service:</strong> Proxy service to receive requests from the client and redirect them to the corresponding services.</li>
<li><strong>cms-api-service:</strong> Service to retrieve and serve the content from Contentful</li>
<li><strong>catalog-api-service:</strong> Service that subscribes to team In messages and persists the product core data to serve it later through GraphQL.</li>
<li><strong>orders-api-service.</strong> Service that handles all the payment business logic</li>
<li><strong>auth-api-service:</strong> Provisional service to implement the user authentication to be able to buy products.</li>
<li><strong>auth-web-app:</strong> The client for the auth service.</li>
<li><strong>integrations-ecommerce-api-service:</strong> service from the integrations domain that handles the payments. Although this service was not in our domain we developed it together to increase the delivery speed and free them from extra work.</li>
</ul>
<p>On the services, we used <a href="https://github.com/guidesmiths/systemic">Systemic</a>, a Node.js framework for minimal dependency injection that lets you create components and their dependencies in a system. Each component handles a separate object from the domain such as the routing, controller, services, database, and so on in an agnostic way from the others.</p>
<p><a href="https://www.apollographql.com/">Apollo</a> was our choice to implement GraphQL. It provided us with a data graph layer to easily connect both frontend and backend.</p>
<p>Again, to learn more about it check out <a href="https://www.apollographql.com/docs/">their docs</a> or <a href="https://www.ramonmorcillo.com/getting-started-with-graphql-and-nodejs/">this tutorial.</a></p>
<p>Finally, we hosted the code on <a href="https://github.com/">GitHub</a> to make use of features like Pull Requests to review our code properly before implementing it.</p>
<h2 id="thesecondmvp">The second MVP</h2>
<p>An MVP (Minimum Viable Product) is the first prototype you create and deliver in a project. This means that there is usually just one, and when you create it you start implementing new features on it.</p>
<p>So, why did we focus on a second MVP for the same project? Well, when we reached a “stable” version of the first one, the client realized that we needed to start with the main sub-company stores. They decided to stop the sub-sub-company H store development to focus on the development of the new ones.</p>
<p>This was mainly because to some services ended their support for the sub-companies in the coming months, meaning that their stores had to be developed first.</p>
<p>We decided to develop more than one store at the same time, which was a double-edged sword approach.</p>
<p>On one hand, we would see on the go how well the reusability aspect of our platform worked while refactoring it. We would also end up with more than one store in the end.</p>
<p>On the other hand, we would have to set up and maintain the environments and resources of multiple shops. Plus we would have to implement their designs which would slow us down, meaning we might not reach the deadline on time, again.</p>
<p>We saw this MVP as an opportunity to start over and improve our codebase. So we added TypesScript and Styled-Components to our React application.</p>
<p>I have to admit that I was very happy when we made these choices because I had been working with that stack on <a href="https://github.com/reymon359?tab=repositories&amp;q=&amp;type=source&amp;language=typescript">my own projects</a>. So now I was able to learn more and get even better at it.</p>
<p>Fortunateluy, we were able to reuse most of the code from the previous MVP for the React apps and the backend services. But not everything was a bed of roses.</p>
<p>Not all of us were used to working with this new stack and it slowed us down at the beginning. Furthermore, with the same stack, we started developing a React components library for all the platforms, which, even though it was planned for the first MVP, never saw the light.</p>
<p>By that time, the team in charge of the user authentication service started working on it so we stopped its development and just implemented it on the site.</p>
<p>In addition, we started the development of a products search service (<strong>search-api-service</strong>) with <a href="https://azure.microsoft.com/en-us/services/search/">Azure Cognitive Search</a>.</p>
<p>After all the changes mentioned above the architecture evolved this way.</p>
<p>As I am writing this, the platform isn’t finished yet. But it has been a great challenge to get where we are.</p>
<p>We have learned some valuable lessons that can be useful to others, not just about the stack and architecture described above but about the way we worked as a team.</p>
<h3 id="innovatethestack">Innovate the stack</h3>
<p>Working with new technologies can be risky and less comfortable than sticking with old and well-known ones. But innovation and adaptability is the right way to go so you don't get left behind in Software Development.</p>
<p>One of the most important points when you upgrade your stack or adopt a new one, apart from checking the proper way to do so following standards, is <em>being sure the team is comfortable working with it,</em>. Not just at the beginning, either, but during the whole process to make the transition easier.</p>
<h3 id="dontunderestimatepromiselessdelivermore">Don’t underestimate, promise less, deliver more</h3>
<p>We happily estimated the first MVP and agreed to deliver a great number of features. We ended up needing more time because of all the issues that appeared on the way and _had to learn to say “no” <em>sometimes.</em></p>
<p>On the second MVP, we didn’t estimate that far ahead in time and didn’t commit ourselves to features we weren’t sure we could deliver within the time expected.</p>
<p>Because of this, we were able to work less stressed, have a better mood, deliver better code, and improve the client's feelings about the project since they weren’t disappointed with the progress.</p>
<h3 id="teamworkinsidetheteam">Teamwork inside the team.</h3>
<p>We realized that the best way to progress and develop was to feel comfortable – not just with the technologies but, most importantly, our teammates. Some of the measures that improved our relationship and teamwork were:</p>
<h4 id="teamdemocracy">Team democracy.</h4>
<p>No matter the work we were doing at the moment, <em>all of us had the same voice and our opinion counted the same</em> when making a choice. This was key when we discussed the adoption of the new stack and the practices we would follow.</p>
<h4 id="reviewingcode">Reviewing code.</h4>
<p>Feedback is one of the best ways to improve not only the code itself but the way you write it too. That's why we decided to work with GitHub Pull Requests to implement most of the features.</p>
<p><em>Working with them not only improved our code base but also made us aware of how the features were being implemented in other areas, avoiding catchup meetings and helping us keep track of the full project scope</em>.</p>
<p>We refined this system little by little with features like a <a href="https://docs.github.com/en/free-pro-team@latest/github/administering-a-repository/about-required-reviews-for-pull-requests">minimum number of reviewers to merge them</a> or <a href="https://github.com/integrations/slack">subscribing to them through slack.</a></p>
<h4 id="helpingandaskingforhelp">Helping and asking for help.</h4>
<p>In my opinion, this one is a must. <em>The team must lose the fear of asking for help if they get stuck. At the same time, they must be willing to help others when they ask for it.</em></p>
<p>I am happy to say that we were able to reach this balance and our work improved in many ways. The next point, pairing, was key in losing the fear of asking for help and getting to know each other better.</p>
<h4 id="pairingasmuchaspossible">Pairing as much as possible.</h4>
<p>At this point in software development, the advantages of doing pair programming are quite well known. We paired not just to deliver the features in a faster and better way of doing things, but to learn from each other's way of coding.</p>
<p>Each week, we decided the pairing tasks and teammates to implement them. But if someone needed or wanted to pair, we just asked for it and moments after a teammate offered to help.</p>
<h4 id="payingattentiontofeedback">Paying attention to feedback.</h4>
<p>The sprint retrospectives were the perfect moment to review all the things that went well, those that went wrong, to propose changes, and to look forward to improvement. Therefore the more we shared our opinions the more issues we could approach and solve.</p>
<p>We were dependent on other teams' work – so having a good relationship with them was also an important point in our development process.</p>
<p><em>Communication was the key point: the more we communicated the more we improved,</em>. And thanks to this, our goal was to be one whole team. Here are some actions we followed in order to enhance this communication:</p>
<ul>
<li><strong>Have a private place just for us.</strong> We created a separate channel to talk about the progress and solve any questions or doubts as soon as possible without extra meetings.</li>
<li><strong>Quick meetings.</strong> A meeting once a week worked great to check the progress on the main issues. But we did not always wait for this one meeting, and had a quick call whenever an issue needed to be discussed.</li>
<li><strong>Stay updated on the overall progress.</strong> We had a teammate from our team attending their daily standups and one of them at ours who updated the rest of the team if needed.</li>
</ul>
<p>Here is some actual footage of us and the Integrations Team:</p>
<p>At the beginning of the first MVP, there were too many clues and too little communication to clarify them so we were blocked sometimes or had to set up time-wasting meetings for these issues.</p>
<p>The core of the problem, like most problems in life, was a lack of communication. So we solved it by increasing our communication, asking questions directly to the client, inviting them to retrospectives, daily standups, and other meetings even when they were not required.</p>
<p>This helped keep the client updated as much as possible. In the end, the more we communicated the more we made them feel part of the team, and the better we worked together.</p>
<h2 id="finalthoughts">Final thoughts</h2>
<p>I want to first thank my teammates. It has been a pleasure to work with them, starting each day eager to have fun together developing the project.</p>
<p>On the same level, thank you to the teammates from other teams who always gave a helping hand when requested.</p>
<p>I'm also thankful for the opportunity to participate in the full end-to-end implementation of the project from which I learned so much. I solved issues on Front, Back, and DevOps such as setting up environments, pipelines, messaging between services, persisting and retrieving data, serving it to the frontend, and implementing the interfaces to display it.</p>
<p>Finally, I am thankful for having the chance to work and get better at technologies that I was using on side-projects like GraphQL or TypeScript.</p>
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
