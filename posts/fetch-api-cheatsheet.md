---
card: "/images/default.jpg"
tags: [API]
description: Almost every project needs to communicate with the outside wo
author: "Milad E. Fahmy"
title: "The Fetch API Cheatsheet: Nine of the Most Common API Requests"
created: "2021-08-15T19:28:01+02:00"
modified: "2021-08-15T19:28:01+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-api tag-cheatsheet tag-javascript ">
<header class="post-full-header">
<h1 class="post-full-title">The Fetch API Cheatsheet: Nine of the Most Common API Requests</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/11/cover-2.jpg 300w,
/news/content/images/size/w600/2020/11/cover-2.jpg 600w,
/news/content/images/size/w1000/2020/11/cover-2.jpg 1000w,
/news/content/images/size/w2000/2020/11/cover-2.jpg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/11/cover-2.jpg" alt="The Fetch API Cheatsheet: Nine of the Most Common API Requests">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Almost every project needs to communicate with the outside world. If youʼre working with JavaScript frameworks, you'll most likely use Fetch API to do that. </p>
<p>But when you're working with the API, do you remember the syntax by heart or do you need a little help?</p>
<p>I have written many articles about JavaScript and related things only to find myself later frequently (re)visiting them to refresh my memory or get some sample code that I know “is there somewhere.” </p>
<p>In this article, I aim to create another resource like that. I will list the 9 most common Fetch API requests. </p>
<p>Iʼm sure youʼve used them all many times. But wouldnʼt it be nice to avoid going through old projects to find the syntax of that specific request you used half a year ago? :)</p>
<h2 id="why-use-the-fetch-api">Why Use the Fetch API?</h2>
<p>Nowadays, we are spoiled by all the services providing nice SDKs that abstract away the actual API requests. We just ask for data using typical language constructs and donʼt care about the actual data exchange. </p>
<p>But what if thereʼs no SDK for your chosen platform? Or what if youʼre building both the server and the client? In these cases, you need to handle the requests on your own. This is how you can do it using the Fetch API.</p>
<h3 id="simple-get-request-with-the-fetch-api">Simple GET request with the Fetch API</h3>
.then(response =&gt; console.log(response));
</code></pre>
<h3 id="simple-post-request-with-the-fetch-api">Simple POST request with the Fetch API</h3>
method: 'post'
})
.then(response =&gt; console.log(response));
</code></pre>
<h3 id="get-with-an-authorization-token-bearer-in-the-fetch-api">GET with an authorization token (Bearer) in the Fetch API</h3>
headers: {
'Authorization': 'Basic {token}'
}
})
.then(response =&gt; console.log(response));
</code></pre>
<h3 id="get-with-querystring-data-in-the-fetch-api">GET with querystring data in the Fetch API</h3>
.then(response =&gt; console.log(response));
</code></pre>
<h3 id="get-with-cors-in-the-fetch-api">GET with CORS in the Fetch API</h3>
mode: 'cors'
})
.then(response =&gt; console.log(response));
</code></pre>
<h3 id="post-with-authorization-token-and-querystring-data-in-the-fetch-api">POST with authorization token and querystring data in the Fetch API</h3>
method: 'post',
headers: {
'Authorization': 'Bearer {token}'
}
})
.then(response =&gt; console.log(response));
</code></pre>
<h3 id="post-with-form-data-in-the-fetch-api">POST with form data in the Fetch API</h3>
formData.append('field1', 'value1');
formData.append('field2', 'value2');
fetch('{url}', {
method: 'post',
body: formData
})
.then(response =&gt; console.log(response));
</code></pre>
<h3 id="post-with-json-data-in-the-fetch-api">POST with JSON data in the Fetch API</h3>
method: 'post',
headers: {
'Content-Type': 'application/json'
},
body: JSON.stringify({
'field1': 'value1',
'field2': 'value2'
})
})
.then(response =&gt; console.log(response));
</code></pre>
<h3 id="post-with-json-data-and-cors-in-the-fetch-api">POST with JSON data and CORS in the Fetch API</h3>
method: 'post',
mode: 'cors',
headers: {
'Content-Type': 'application/json'
},
body: JSON.stringify({
'field1': 'value1',
'field2': 'value2'
})
})
.then(response =&gt; console.log(response));
</code></pre>
<h2 id="how-to-process-the-results-of-the-fetch-api-request">How to process the results of the Fetch API request</h2>
<p>The Fetch API returns a <em>Promise</em>. Thatʼs why Iʼm always using <code>.then()</code> and a callback function for processing the response:</p>
// process the response
}
</code></pre>
<p>But you can also await the result if youʼre in an async function:</p>
let data = await fetch(...);
// process the response
}
</code></pre>
<p>Now letʼs take a look at how we can extract the data from the response:</p>
<h3 id="how-to-check-the-status-code-of-the-fetch-api-response">How to check the status code of the Fetch API response</h3>
<p>When sending POST, PATCH, and PUT requests, we are typically interested in the return status code:</p>
.then(response =&gt; {
if (response.status == 200){
// all OK
} else {
console.log(response.statusText);
}
});
</code></pre>
<h3 id="how-to-get-a-simple-value-of-the-fetch-api-response">How to get a simple value of the Fetch API response</h3>
<p>Some API endpoints may send back an identifier of a new database record that was created using your data:</p>
fetch(...)
.then(response =&gt; response.text())
.then(id =&gt; {
userId = id;
console.log(userId)
});
</code></pre>
<h3 id="how-to-convert-json-data-of-the-fetch-api-response">How to convert JSON data of the Fetch API response</h3>
<p>But in most cases, youʼll receive JSON data in the response body:</p>
fetch(...)
.then(response =&gt; response.json())
.then(data =&gt; {
dataObj = data;
console.log(dataObj)
});
</code></pre>
<p>Keep in mind that you can access the data only after both Promises are resolved. This is sometimes a bit confusing, so I always prefer to use async methods and await the results:</p>
var dataObj;
const response = await fetch(...);
const data = await response.json();
dataObj = data;
console.log(dataObj);
}
</code></pre>
<h2 id="conclusion">Conclusion</h2>
<p>These samples should have you covered in most situations. </p>
<p>Is there something that I missed, a request you use on a daily basis? Or something else youʼre struggling with? Let me know on <a href="https://twitter.com/ondrabus">Twitter</a>, and Iʼll cover it in another article :-)</p>
<p>Oh, and you can get this cheatsheet in a <a href="https://ondrabus.com/fetch-api-cheatsheet">printable form too</a>.</p>
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
