---
card: "https://cdn-media-1.freecodecamp.org/images/1*w8fFdZ3gAy7q1x_qOFB-gg.jpeg"
tags: [GraphQL]
description: GraphQL’s main benefit for frontend developers has always bee
author: "Milad E. Fahmy"
title: "A new approach to mocking GraphQL data"
created: "2021-08-15T19:39:21+02:00"
modified: "2021-08-15T19:39:21+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-graphql tag-javascript tag-react tag-testing tag-tech ">
<header class="post-full-header">
<h1 class="post-full-title">A new approach to mocking GraphQL data</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*w8fFdZ3gAy7q1x_qOFB-gg.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*w8fFdZ3gAy7q1x_qOFB-gg.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*w8fFdZ3gAy7q1x_qOFB-gg.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*w8fFdZ3gAy7q1x_qOFB-gg.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*w8fFdZ3gAy7q1x_qOFB-gg.jpeg" alt="A new approach to mocking GraphQL data">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<h4 id="how-we-power-react-component-tests-and-examples-at-stripe">How we power React component tests and examples at Stripe</h4>
<p>GraphQL’s main benefit for frontend developers has always been excellent tooling and developer experience. Chief among those is the ability to easily mock your data. API mocking is critical because it lets you write and test your components without having to run your whole app backend. You can even develop UI components based on a mocked schema when the backend implementation isn’t done yet, speeding up development.</p>
<p>In the last few months, the Dashboard Platform team at <a href="https://stripe.com/" rel="noopener">Stripe</a> has been integrating <a href="https://graphql.org/" rel="noopener">GraphQL</a> and <a href="https://www.apollographql.com/" rel="noopener">Apollo</a> for data fetching in the Stripe Dashboard. Our goal is to create a smooth and productive experience for product developers across the whole company. One of the most important aspects of that is making testing as easy as possible. In service of that outcome, we’ve come up with some new patterns that allow us to mock data with an extremely small amount of code.</p>
<p>I’ll tell you how we:</p>
<ol>
<li>mock GraphQL data for the whole schema</li>
<li>customize our mocks on a per-component basis</li>
<li>mock loading and error states with just one line of code</li>
<li>integrate these mocks into our Jest tests and component explorer</li>
</ol>
<p>Put together, these new tools allow us to render UI components that depend on GraphQL data in tests and examples, in all of the states that we need them, without writing code to handle specific requests and responses.</p>
<p>So let’s jump right in! We’ve included all of the code needed to follow along in this post. We welcome someone from the community publishing an <code>npm</code> package based on our approach.</p>
<p><em>Special thanks to my colleagues <a href="https://twitter.com/hellendag" rel="noopener">Isaac Hellendag</a>, Oliver Wong, and Jason Divock, who have contributed to these tools and this post.</em></p>
<figcaption>How we reduced our component testing boilerplate by eliminating per-request mocks and using a mocked schema.</figcaption>
</figure>
<h3 id="background-mocking-data-with-graphql-tools">Background: Mocking data with graphql-tools</h3>
<p>There’s a variety of tools out there that make it super easy to mock requests based on a GraphQL schema and queries.</p>
<p>There’s the original <a href="https://www.apollographql.com/docs/graphql-tools/mocking.html" rel="noopener">graphql-tools</a> library, the <a href="https://github.com/APIs-guru/graphql-faker" rel="noopener">graphql-faker</a> CLI, and now even <a href="https://www.apollographql.com/docs/apollo-server/features/mocking.html" rel="noopener">Apollo Server has mocking built in</a>. I’m partial to graphql-tools because it’s the easiest to customize.</p>
<p>Before getting into the new stuff I’m really excited about with per-component customization, I’ll show you the basic mocking setup.</p>
<p>Here’s how you can get a mocked schema up and running super quickly with graphql-tools:</p>
<p>This approach lets you generate any shape of fake data, just by providing a query. Here’s how we can wire our mocked schema up to our Apollo-powered components using <a href="https://www.apollographql.com/docs/link/links/schema.html" rel="noopener">apollo-link-schema</a> and Apollo Client:</p>
<p>Now, we can render a component with mocked data anywhere we want, for example in a Jest test, or a component explorer like Storybook. One nice thing is that <code>graphql-tools</code> allows us to pass in custom mocks for our schema on a per-type basis.</p>
<p>That lets us make sure that the data we get from our mocks looks somewhat real. The <code>faker</code> library is super useful here because it lets us get somewhat realistic data with low effort.</p>
<p>Unfortunately, having a mocked schema that returns realistic data isn’t quite enough for a complete mocking setup. Sometimes, you want to have a test or component example display a very specific situation, rather than generic mock data. You also need to make sure your component behaves properly when it gets empty strings, or a really long list, or a loading state or error. And that’s where things get really interesting.</p>
<h4 id="customizing-mocks-on-a-per-component-basis-with-a-mocking-provider">Customizing mocks on a per-component basis with a mocking provider</h4>
<p>After trying a lot of different approaches, we came up with a neat API that lets us use global mocks while customizing just the types and fields we need to for that particular test or example.</p>
<p>Here’s what it looks like:</p>
<p>This allows us to make sure that the component gets exactly two <code>todo</code> items, where the first is completed and the second is not. But here’s the best part — the rest of the data comes from the global mocks we have defined for the whole app! <strong>So we only have to specify the fields we care about for this particular example.</strong></p>
<p>That lets us get the best of both worlds — low effort, realistic global mocks, <strong>while maintaining</strong> the ability to get custom results to demonstrate specific situations on a per-instance basis. So how does it work?</p>
<p>We’ve implemented this via a mocking provider that merges the custom resolvers passed through its props with our global mock resolvers, like this:</p>
<p>It takes the custom resolvers you pass in, merges it with your global mocks, and then creates a new Apollo Client instance to be used by the component you are testing.</p>
<p>The most important function here is <code>mergeResolvers</code>, which allows us to merge our globally defined mocks which overrides a specific test case. It’s a little too long to fit into this blog post, but it’s about 50 lines of code: <a href="https://gist.github.com/hellendag/2aa9ad1f9b771f38802760c269bb1b76" rel="noopener">Check out the mergeResolvers function in my coworker Isaac’s Gist.</a></p>
<h3 id="mocking-loading-and-error-states-in-one-line-of-code">Mocking loading and error states in one line of code</h3>
<p>The system above gets us most of what we need, but it doesn’t have a good way to mock out stuff that’s not actual data — specifically, loading and error states. Thankfully, we can use a similar approach with Apollo Link to create special providers for those cases. For example, here’s a simple provider for mocking a loading state.</p>
<p>That’s right — it’s so small, it fits in a tweet. And here’s how you would use it:</p><pre><code class="language-jsx">&lt;LoadingProvider&gt;
&lt;TodoList /&gt;
&lt;/LoadingProvider&gt;</code></pre>
<p>Super simple! Awesome stuff. And error states are almost as easy.</p>
<p>You can use this in the same way, but you can also pass a customizable error:</p><pre><code class="language-jsx">&lt;ErrorProvider graphQLErrors={[{message: 'My error message'}]}&gt;
&lt;TodoList /&gt;
&lt;/ErrorProvider&gt;</code></pre>
<p>Armed with these three tools — the mocked schema provider with custom resolvers, the loading provider, and the error provider — you can achieve common mocking use cases in a very small amount of code.</p>
<p>For the more complex use cases, you can still use the built-in react-apollo <a href="https://www.apollographql.com/docs/guides/testing-react-components.html#MockedProvider" rel="noopener">MockedProvider</a>, which lets you specify totally custom request and response pairs.</p>
<h3 id="integrating-into-jest-tests-and-your-component-explorer">Integrating into Jest tests and your component explorer</h3>
<p>Now that we’ve got an easy way to mock data, loading states, and errors, we can easily integrate them into Jest or a component explorer. We have our own internal component explorer tool, but a commonly used one in the community is React Storybook.</p>
<p>Here’s what a simple Jest test looks like, using <code>mount</code> from <a href="https://github.com/airbnb/enzyme" rel="noopener">Enzyme</a> to render a React component and then check that its contents are what we expect.</p>
<p>And you can use these providers the same way when rendering a component example in Storybook or similar.</p>
<p>And that’s how we do it!</p>
<h3 id="conclusion">Conclusion</h3>
<p>We hope that bringing the power of GraphQL to developers at Stripe will make frontend development much more fun and productive, and this is just the beginning of the story. I’m excited to work with such an awesome team at Stripe!</p>
<p>We’re using our past experience working on frontend teams and technologies to come up with exciting approaches to improve data fetching and API-related tooling. I can’t wait to share more of what we’re working on over the next few months.</p>
<p>Please reach out to me <a href="https://twitter.com/stubailo" rel="noopener">on Twitter at @stubailo</a> if you decide to build a package based on this post, have some feedback, or want to chat about GraphQL and React!</p>
<p>Also, <strong>we’re hiring for many <a href="https://stripe.com/jobs#engineering" rel="noopener">different engineering roles</a> here at Stripe</strong>, so please apply if you want to help us build the economic infrastructure of the internet.</p>
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
