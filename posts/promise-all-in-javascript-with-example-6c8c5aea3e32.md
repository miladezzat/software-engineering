---
card: "https://cdn-media-1.freecodecamp.org/images/1*oPnpG64cvwTL8DHiaYSFew.jpeg"
tags: [JavaScript]
description: "Promises in JavaScript are one of the powerful APIs that help"
author: "Milad E. Fahmy"
title: "All you need to know about Promise.all"
created: "2021-08-16T11:30:47+02:00"
modified: "2021-08-16T11:30:47+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-software-development tag-nodejs tag-web-development tag-technology ">
<header class="post-full-header">
<h1 class="post-full-title">All you need to know about Promise.all</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*oPnpG64cvwTL8DHiaYSFew.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*oPnpG64cvwTL8DHiaYSFew.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*oPnpG64cvwTL8DHiaYSFew.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*oPnpG64cvwTL8DHiaYSFew.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*oPnpG64cvwTL8DHiaYSFew.jpeg" alt="All you need to know about Promise.all">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Promises in JavaScript are one of the powerful APIs that help us to do Async operations.</p><p>Promise.all takes Async operations to the next new level as it helps you to aggregate a group of promises.</p><p>In other words, I can say that it helps you to do concurrent operations (sometimes for free).</p><h4 id="prerequisites-">Prerequisites:</h4><p>You have to know what is a <strong>Promise</strong> in JavaScript.</p><h4 id="what-is-promise-all">What is Promise.all?</h4><p>Promise.all is actually a promise that takes an array of promises as an input (an iterable). Then it gets resolved when all the promises get resolved or any one of them gets rejected.</p><p>For example, assume that you have ten promises (Async operation to perform a network call or a database connection). You have to know when all the promises get resolved or you have to wait till all the promises resolve. So you are passing all ten promises to Promise.all. Then, Promise.all itself as a promise will get resolved once all the ten promises get resolved or any of the ten promises get rejected with an error.</p><p><strong>Let’s see it in code:</strong></p><pre><code>Promise.all([Promise1, Promise2, Promise3])
.then(result) =&gt; {
console.log(result)
})
.catch(error =&gt; console.log(`Error in promises ${error}`))</code></pre><p>As you can see, we are passing an array to Promise.all. And when all three promises get resolved, Promise.all resolves and the output is consoled.</p><p><strong>Let’s see an example:</strong></p><pre><code class="language-js">// A simple promise that resolves after a given time
const timeOut = (t) =&gt; {
return new Promise((resolve, reject) =&gt; {
setTimeout(() =&gt; {
resolve(`Completed in ${t}`)
}, t)
})
}
// Resolving a normal promise.
timeOut(1000)
.then(result =&gt; console.log(result)) // Completed in 1000
// Promise.all
Promise.all([timeOut(1000), timeOut(2000)])
.then(result =&gt; console.log(result)) // ["Completed in 1000", "Completed in 2000"]</code></pre><p>In the above example, Promise.all resolves after 2000 ms and the output is consoled as an array.</p><p>One interesting thing about Promise.all is that the order of the promises is maintained. The first promise in the array will get resolved to the first element of the output array, the second promise will be a second element in the output array and so on.</p><p><strong>Let’s see another example:</strong></p><pre><code class="language-js">// A simple promise that resolves after a given time
const timeOut = (t) =&gt; {
return new Promise((resolve, reject) =&gt; {
setTimeout(() =&gt; {
resolve(`Completed in ${t}`)
}, t)
})
}
const durations = [1000, 2000, 3000]
const promises = []
durations.map((duration) =&gt; {
// In the below line, two things happen.
// 1. We are calling the async function (timeout()). So at this point the async function has started and enters the 'pending' state.
// 2. We are pushing the pending promise to an array.
promises.push(timeOut(duration))
})
console.log(promises) // [ Promise { "pending" }, Promise { "pending" }, Promise { "pending" } ]
// We are passing an array of pending promises to Promise.all
// Promise.all will wait till all the promises get resolves and then the same gets resolved.
Promise.all(promises)
.then(response =&gt; console.log(response)) // ["Completed in 1000", "Completed in 2000", "Completed in 3000"]
</code></pre><p>From the above example, it’s clear that Promise.all waits till all the promises resolve.</p><p>Let’s see what happens if any one of the promises are rejected.</p><pre><code class="language-js">// A simple promise that resolves after a given time
const timeOut = (t) =&gt; {
return new Promise((resolve, reject) =&gt; {
setTimeout(() =&gt; {
if (t === 2000) {
reject(`Rejected in ${t}`)
} else {
resolve(`Completed in ${t}`)
}
}, t)
})
}
const durations = [1000, 2000, 3000]
const promises = []
durations.map((duration) =&gt; {
promises.push(timeOut(duration))
})
// We are passing an array of pending promises to Promise.all
Promise.all(promises)
.then(response =&gt; console.log(response)) // Promise.all cannot be resolved, as one of the promises passed got rejected.
.catch(error =&gt; console.log(`Error in executing ${error}`)) // Promise.all throws an error.
</code></pre><p>As you can see, if one of the promises fails, then all the rest of the promises fail. Then Promise.all gets rejected.</p><p>For some use cases, you don’t need that. You need to execute all the promises even if some have failed, or maybe you can handle the failed promises later.</p><p>Let’s see how to handle that.</p><pre><code class="language-js">const durations = [1000, 2000, 3000]
promises = durations.map((duration) =&gt; {
return timeOut(duration).catch(e =&gt; e) // Handling the error for each promise.
})
Promise.all(promises)
.then(response =&gt; console.log(response)) // ["Completed in 1000", "Rejected in 2000", "Completed in 3000"]
.catch(error =&gt; console.log(`Error in executing ${error}`))
view raw</code></pre><h4 id="use-cases-of-promise-all">Use cases of Promise.all</h4><p>Assume that you have to perform a huge number of Async operations like sending bulk marketing emails to thousands of users.</p><p>Simple pseudo code would be:</p><pre><code>for (let i=0;i&lt;50000; i += 1) {
sendMailForUser(user[i]) // Async operation to send a email
}</code></pre><p>The above example is straightforward. But it’s not very performant. The stack will become too heavy and at one point of time, JavaScript will have a huge number of open HTTP connection which may kill the server.</p><p>A simple performant approach would be to do it in batches. Take first 500 users, trigger the mail and wait till all the HTTP connections are closed. And then take the next batch to process it and so on.</p><p>Let’s see an example:</p><pre><code class="language-js">// Async function to send mail to a list of users.
const sendMailForUsers = async (users) =&gt; {
const usersLength = users.length
for (let i = 0; i &lt; usersLength; i += 100) {
const requests = users.slice(i, i + 100).map((user) =&gt; { // The batch size is 100. We are processing in a set of 100 users.
return triggerMailForUser(user) // Async function to send the mail.
.catch(e =&gt; console.log(`Error in sending email for ${user} - ${e}`)) // Catch the error if something goes wrong. So that it won't block the loop.
})
// requests will have 100 or less pending promises.
// Promise.all will wait till all the promises got resolves and then take the next 100.
await Promise.all(requests)
.catch(e =&gt; console.log(`Error in sending email for the batch ${i} - ${e}`)) // Catch the error.
}
}
sendMailForUsers(userLists)</code></pre><p>Let’s consider another scenario: You have to build an API that gets information from multiple third-party APIs and aggregates all the responses from the APIs.</p><p>Promise.all is the perfect way of doing that. Let’s see how.</p><pre><code class="language-js">// Function to fetch Github info of a user.
const fetchGithubInfo = async (url) =&gt; {
console.log(`Fetching ${url}`)
const githubInfo = await axios(url) // API call to get user info from Github.
return {
name: githubInfo.data.name,
bio: githubInfo.data.bio,
repos: githubInfo.data.public_repos
}
}
// Iterates all users and returns their Github info.
const fetchUserInfo = async (names) =&gt; {
const requests = names.map((name) =&gt; {
const url = `https://api.github.com/users/${name}`
return fetchGithubInfo(url) // Async function that fetches the user info.
.then((a) =&gt; {
return a // Returns the user info.
})
})
return Promise.all(requests) // Waiting for all the requests to get resolved.
}
fetchUserInfo(['sindresorhus', 'yyx990803', 'gaearon'])
.then(a =&gt; console.log(JSON.stringify(a)))
/*
Output:
[{
"name": "Sindre Sorhus",
"bio": "Full-Time Open-Sourcerer ·· Maker ·· Into Swift and Node.js ",
"repos": 996
}, {
"name": "Evan You",
"bio": "Creator of @vuejs, previously @meteor &amp; @google",
"repos": 151
}, {
"name": "Dan Abramov",
"bio": "Working on @reactjs. Co-author of Redux and Create React App. Building tools for humans.",
"repos": 232
}]
*/
</code></pre><p>To conclude, Promise.all is the best way to aggregate a group of promises to a single promise. This is one of the ways of achieving concurrency in JavaScript.</p><p>Hope you liked this article. If you did, please clap and share it.</p><p>Even if you didn’t, that’s fine you can do it anyway :P</p>
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
