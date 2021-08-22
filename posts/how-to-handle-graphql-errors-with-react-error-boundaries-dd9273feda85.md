---
card: "https://cdn-media-1.freecodecamp.org/images/1*20J63XycbuDOp4NRTLKeMQ.jpeg"
tags: [React]
description: by Abi Noda
author: "Milad E. Fahmy"
title: "Custom error pages in React with GraphQL and Error Boundaries"
created: "2021-08-15T19:44:15+02:00"
modified: "2021-08-15T19:44:15+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-react tag-javascript tag-tech tag-graphql tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">Custom error pages in React with GraphQL and Error Boundaries</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*20J63XycbuDOp4NRTLKeMQ.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*20J63XycbuDOp4NRTLKeMQ.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*20J63XycbuDOp4NRTLKeMQ.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*20J63XycbuDOp4NRTLKeMQ.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*20J63XycbuDOp4NRTLKeMQ.jpeg" alt="Custom error pages in React with GraphQL and Error Boundaries">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Abi Noda</p>
<h1 id="custom-error-pages-in-react-with-graphql-and-error-boundaries">Custom error pages in React with GraphQL and Error Boundaries</h1>
<figcaption>GitHub’s awesome 500 error page</figcaption>
</figure>
<p><em>If you like this article please support me by checking out <a href="https://pullreminders.com/?utm_source=medium&amp;utm_medium=react-errors" rel="noopener"><strong>Pull Reminders</strong></a>, a Slack bot that sends your team automatic reminders for GitHub pull requests.</em></p>
<p>One challenge I recently ran into while working with GraphQL and React was how to handle errors. As developers, we’ve likely implemented default 500, 404, and 403 pages in server-rendered applications before, but figuring out how to do this with React and GraphQL is tricky.</p>
<p>In this post, I’ll talk about how our team approached this problem, the final solution we implemented, and interesting lessons from the GraphQL spec.</p>
<h3 id="background">Background</h3>
<p>The project I was working on was a fairly typical CRUD app built in React using GraphQL, <a href="https://www.apollographql.com/docs/react/" rel="noopener">Apollo Client</a>, and <a href="https://github.com/graphql/express-graphql" rel="noopener">express-graphQL</a>. We wanted to handle certain types of errors — for example, the server being down — by displaying a standard error page to the user.</p>
<p>Our initial challenge was figuring out the best way to communicate errors to the client. GraphQL doesn’t use HTTP status codes like 500, 400, and 403. Instead, responses contain an <code>errors</code> array with a list of things that went wrong (read more about <code>errors</code> in the <a href="http://facebook.github.io/graphql/June2018/#sec-Response-Format" rel="noopener">GraphQL spec</a>).</p>
<p>For example, here’s what our GraphQL response looked like when something broke on the server:</p>
<p>Since GraphQL error responses return HTTP status code 200, the only way to identify the kind of error was to inspect the <code>errors</code> array. This seemed like a poor approach because the error <code>message</code> property contained the exception thrown on the server. The <a href="http://facebook.github.io/graphql/June2018/#sec-Errors" rel="noopener">GraphQL spec</a> states that the value of <code>message</code> is intended for developers, but it does not specify whether the value should be a human-readable message or something designed to be programmatically handled:</p>
<blockquote>Every error must contain an entry with the key message with a string description of the error intended for the developer as a guide to understand and correct the error.</blockquote>
<h3 id="adding-error-codes-to-graphql-responses">Adding Error Codes to GraphQL Responses</h3>
<p>To solve for this, we added standardized error codes to our error objects, which could be used by clients to programmatically identify errors. This was inspired by how Stripe’s REST API returns string <a href="https://stripe.com/docs/error-codes" rel="noopener">error codes</a> in addition to human-readable messages.</p>
<p>We decided on three error codes to start: <code>authentication_error</code>, <code>resource_not_found</code>, and <code>server_error</code>.</p>
<p>To add these to our GraphQL responses, we passed our own <code>formatError</code> function to express-graphql that maps exceptions thrown on the server to standard codes which get added to the response. The GraphQL spec generally <a href="http://facebook.github.io/graphql/June2018/#example-fce18" rel="noopener">discourages adding properties to error objects</a>, but does allow for it by nesting those entries in a <code>extensions</code> object.</p>
<p>Our GraphQL response errors were then easy to classify:</p>
<p>While we developed our own way of adding codes to responses generated by <a href="https://github.com/graphql/express-graphql" rel="noopener">express-graphql</a>, apollo-server appears to offer <a href="https://www.apollographql.com/docs/apollo-server/v2/features/errors.html#Codes" rel="noopener">similar built-in behavior</a>.</p>
<h3 id="rendering-error-pages-with-react-error-boundaries">Rendering error pages with React Error Boundaries</h3>
<p>Once we figured out a good way of handling errors in our server, we turned our attention to the client.</p>
<p>By default, we wanted our app to display a global error page (for example, a page with the message “oops something went wrong”) whenever we encountered a <code>server_error</code>, <code>authorization_error</code>, or <code>authorization_not_found</code>. However, we also wanted the flexibility to be able to handle an error in a specific component if we wanted to.</p>
<p>For example, if a user was typing something into a search bar and something went wrong, we wanted to display an error message in-context, rather than flash over to an error page.</p>
<p>To achieve this, we first created a component called <code>GraphqlErrorHandler</code> that would sit between <code>apollo-client</code>’s <code>Query</code> and <code>Mutation</code> components and their children to be rendered out. This component checked for error codes in the response threw an exception if it identified a code we cared about:</p>
<p>To use the <code>GraphqlErrorHandler</code>, we wrapped apollo-client’s <code>Query</code> and <code>Mutation</code> components:</p>
<p>Our feature component then used our own <code>Query</code> component instead of directly accessing <code>react-apollo</code>:</p>
<p>Now that our React app was throwing exceptions when the server returned errors, we wanted to handle these exceptions and map them to the appropriate behavior.</p>
<p>Remember from earlier that our goal was to default to displaying global error pages (for example, a page with the message “oops something went wrong”), but still have the flexibility to handle an error locally within any component if we desired.</p>
<p>React <a href="https://reactjs.org/docs/error-boundaries.html" rel="noopener">error boundaries</a> provide a fantastic way of doing this. Error boundaries are React components that can catch JavaScript errors anywhere in their child component tree so you can handle them with custom behavior.</p>
<p>We created an error boundary called <code>GraphqlErrorBoundary</code> that would catch any server-related exceptions and display the appropriate error page:</p>
<p>We use the error boundary as a wrapper for all of our app’s components:</p>
<p>Error boundaries can be used deeper in the component tree if we want to handle errors in a component instead of rendering an error page.</p>
<p>For example, here’s what it’d look if we wanted custom error handling behavior in our component from earlier:</p>
<h3 id="wrap-up">Wrap-up</h3>
<p>GraphQL is still relatively new, and error handling is a common challenge that developers seem to be running into. By using standardized error codes in our GraphQL responses, we can communicate errors to clients in a useful and intuitive way. In our React apps, error boundaries provide a great way to standardize our app’s error handling behavior while still having flexibility when we need it.</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
