---
card: "https://cdn-media-1.freecodecamp.org/images/1*C1932-kODhSC6ibR7kUxNA.jpeg"
tags: [JavaScript]
description: by Lachlan Young
author: "Milad E. Fahmy"
title: "How to do Apollo HOC mutations the right way"
created: "2021-08-15T19:39:38+02:00"
modified: "2021-08-15T19:39:38+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-graphql tag-apollo-client tag-tech tag-productivity ">
<header class="post-full-header">
<h1 class="post-full-title">How to do Apollo HOC mutations the right way</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*C1932-kODhSC6ibR7kUxNA.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*C1932-kODhSC6ibR7kUxNA.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*C1932-kODhSC6ibR7kUxNA.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*C1932-kODhSC6ibR7kUxNA.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*C1932-kODhSC6ibR7kUxNA.jpeg" alt="How to do Apollo HOC mutations the right way">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Lachlan Young</p>
<h1 id="how-to-do-apollo-hoc-mutations-the-right-way">How to do Apollo HOC mutations the right way</h1>
<figcaption>Expert Custom Graphics….</figcaption>
</figure>
<p>Chances are, like many people, you’re coming to Apollo and GraphQL from a REST API background. Yet as you begin to explore the working examples of this stack and the different ways to implement it, you will no doubt be tripped up on a multitude of differences, whether it’s Apollo’s Libraries, or the entire ‘get your data as you want it’ mentality around GraphQL and Apollo’s render components.</p>
<p>What I want to do in this article is help address two of the key issues when writing a mutation. This primarily targets HOC implementations, however it is more or less the same for the render components, tweaking object keys to props instead.</p>
<p>Specifically, we will be jumping straight into the optimisticResponse along with the update parameters of your HOC mutation. It is my hope that this will make you more aware of what options you have when it comes to implementing a mutation as a prop function.</p>
<p><strong>Important: </strong>If you are only just getting started with Apollo, I wholeheartedly implore you to implement their render components that they released around version 2.1. HOCs are soft deprecated and as such, are missing a lot of their documentation, as mentioned by a few people <a href="https://github.com/apollographql/apollo-client/issues/3253" rel="noopener">here</a>.</p>
<h3 id="optimistic-response">Optimistic Response</h3>
<p>optimisticResponse is the way we manage if our app is online or not along with the status of our requests to the DB.</p>
<p>If we mutate our database without a connection, the optimistic response allows it to exist with variables that we reasonably expect.</p>
<p><strong>For example</strong>, if we assume that we will add this user to the db:</p><pre><code>{    userId: 123,    firstName: "Lachlan",    lastName: "Young",    status: "Hungry"}</code></pre>
<p>We would want to update our user details with the above data. However, because of the way our mutations work (and this is specifically for HOCs but can be applied to Render components too), there is a lifecycle to the mutation, going from loading, to success/fail/can’t connect.</p>
<p>If at any point the mutation fails but does not error, your Apollo client knows that this was because of something other than a bad object. By this I mean it takes into account your offline status, the status of the request, and it will instead render that user to the user details component, because it assumes it is valid. Therefore your client is being optimistic.</p>
<p>When you connect to the internet again or reach your DB, it will update the response with the valid data. Inside of that response you can handle stuff like userId’s which you generate on the client, therefore updating my hardcoded id of 123, to a UUID.</p>
<p>If we weren’t online we could still see and interact with the request as expected and any changes would be queued to then mutate the server upon reconnecting.</p>
<p>That’s an optimistic response.</p>
<h3 id="update">Update</h3>
<p>As for how to handle the response from the database, you actually have access to a property called <strong>update</strong>, and for HOCs it looks like this:</p><pre><code>update: (proxy, { data: { myDetails } }) =&gt; {    try {        // Read the data from our cache for this query.        const data = proxy.readQuery({             query: gql`${GET_MY_DETAILS}`        });</code></pre><pre><code>        // Add our new request from the mutation to the end.        data.getMyDetails.push(myDetails);</code></pre><pre><code>        // Write our data back to the cache.        proxy.writeQuery({             query: gql`${GET_MY_DETAILS}`,            data        });    } catch (err) {        console.log('Error updating the cahche: ', err.message);    }}</code></pre>
<p>Essentially this comes after the optimisticResponse field in the mutation. It directly handles what happens after you receive a response, taking it from the top it has <code>proxy</code> and <code>data</code> as it’s two arguments. <code>Proxy</code> is quite literally our client, however for some configurations you may be better served referencing it as the cache. <code>Data</code> is the response from the mutation. I’ve deconstructed it, in this case, to explain the myDetails object further.</p>
<p><strong>myDetails</strong> consists of everything in the user object above, but the id will now be a valid UUID instead of 123. We then use the apolloClient’s methods for reading and writing and read the details we have saved in our cache. From there we add our new details and re-write them to the cache. This way after I navigate back to my details from the input page, my new details will instantly be available because they are the point of truth in the cache.</p>
<h3 id="additional-information">Additional Information</h3>
<p>As of writing this, all the render props documented <a href="https://www.apollographql.com/docs/react/api/react-apollo.html#mutation-props" rel="noopener">here</a>, or seen below for longevitiy, can be applied to your HOC mutation. As I mentioned in the introduction to this article, the HOC documentation has indeed been deprecated. However, the options given below can all be implemented as keys to the HOC object.</p>
<figcaption>Mutation Props <strong>4/12/2018</strong></figcaption>
</figure>
<p>Thank you very much for reading. You can usually see me floating around the Apollo Slack in either the #React-Apollo or #Apollo-Client channels. To register for the slack and get more specific advice, click <a href="https://www.apollographql.com/slack/" rel="noopener">here</a>.</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
