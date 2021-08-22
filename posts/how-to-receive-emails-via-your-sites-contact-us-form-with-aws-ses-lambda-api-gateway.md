---
card: "https://cdn-media-2.freecodecamp.org/w1280/605b0cfb687d62084bf6bd50.jpg"
tags: [AWS]
description: "I was recently building a simple landing page website for a c"
author: "Milad E. Fahmy"
title: "How to Receive Emails from Your Site s  Contact Us  form Using AWS SES, Lambda, & API Gateway"
created: "2021-08-15T22:48:50+02:00"
modified: "2021-08-15T22:48:50+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-aws tag-aws-lambda tag-javascript tag-html tag-email ">
<header class="post-full-header">
<h1 class="post-full-title">How to Receive Emails from Your Site's "Contact Us" form Using AWS SES, Lambda, &amp; API Gateway</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/605b0cfb687d62084bf6bd50.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/605b0cfb687d62084bf6bd50.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/605b0cfb687d62084bf6bd50.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/605b0cfb687d62084bf6bd50.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/605b0cfb687d62084bf6bd50.jpg" alt="How to Receive Emails from Your Site's &quot;Contact Us&quot; form Using AWS SES, Lambda, &amp; API Gateway">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>I was recently building a simple landing page website for a client who wanted to receive emails through their website without sharing their email. </p><p>Honestly, I had never tried to implement that functionality myself before. I was always used to having a simple "Contact Us" button with an anchor tag and a <code>mailto</code> in the <em>href</em> attribute like this:</p><pre><code class="language-html">&lt;button&gt;
&lt;a href="mailto:myemail@example.com"&gt;Contact Me&lt;/a&gt;
&lt;/button&gt;
</code></pre><p>But this approach has two inconveniences:</p><ol><li>It forces both parties, the user who wants to send the message and the site owner who receives it, to share their emails with one another. While this is OK for some, it is not ideal for privacy-minded individuals.</li><li>For the site visitor, clicking the link forces them to open their default mail program on their device, and that can be frustrating. What if they're using a public computer? What if they're not logged in? What if they simply don't want to use their mail program? <br>Yes, technically they can just grab the recipient's email address and send the message via their browser or wherever they're logged in. But those are all extra steps and hurdles that can discourage users from sending their messages and the business might lose potential feedback or opportunities.</li></ol><p>For this reason, we chose to go with an email form from which the user can simply write in their message and click submit, sending an email to the site's owner without ever leaving the website.</p><p>A quick Google search shows that there are third party tools/widgets that you could embed in a website, but most of them are branded and require paid subscription for full customization. </p><p>And unless you are using a CMS like WordPress that has a built-in plugin that can do that, that's an inconvenient recurring cost. </p><p>I instead chose to code that feature myself so I would have full control.</p><p>For the purposes of this guide I will recreate the steps I took to implement that functionality using HTML and AWS services.</p><h2 id="the-html-form">The HTML Form</h2><p>I'll keep it super simple here and go with a basic HTML form with no CSS, just to test our desired functionality.</p><pre><code class="language-html">&lt;h2&gt;Contact Us&lt;/h2&gt;
&lt;form&gt;
&lt;label for="name"&gt;Name:&lt;/label&gt;
&lt;input name="name" type="text"/&gt;&lt;br/&gt;&lt;br/&gt;
&lt;label for="email"&gt;Email:&lt;/label&gt;
&lt;input name="email" type="email"/&gt;&lt;br/&gt;&lt;br/&gt;
&lt;label for="name"&gt;Message:&lt;/label&gt;
&lt;textarea name="message"&gt;&lt;/textarea&gt;&lt;br/&gt;&lt;br/&gt;
&lt;input type="submit"/&gt;
&lt;div&gt;
&lt;p id="result-text"&gt;&lt;/p&gt;
&lt;/div&gt;
&lt;/form&gt;
form.addEventListener('submit', event =&gt; {
// prevent the form submit from refreshing the page
event.preventDefault()
const { name, email, message } = event.target
console.log('Name: ', name.value)
console.log('email: ', email.value)
console.log('Message: ', message.value)
})
"Version": "2012-10-17",
"Statement": [
{
"Sid": "VisualEditor0",
"Effect": "Allow",
"Action": [
"ses:SendEmail",
"ses:SendRawEmail"
],
"Resource": "*"
}
]
}
const ses = new aws.SES({ region: "us-east-1" });
exports.handler = async function (event) {
console.log('EVENT: ', event)
const params = {
Destination: {
ToAddresses: ["your@email.com"],
},
Message: {
Body: {
Text: {
Data: `Hello from Lambda!`
},
},
Subject: { Data: `Message from AWS Lambda` },
},
Source: "your@email.com",
};
return ses.sendEmail(params).promise()
};
</code></pre><p>Notice that on line 2 we are using the AWS SDK and creating an SES instance. The reason I chose <strong>us-east-1</strong> as the region is because that's <em>where I registered &amp; verified my email</em>. Be sure to replace the email and use the AWS region where you registered your email.</p><p>Now to test this function, click on the "Deploy" button. Then click on the Test button —&gt; Configure test event which should open up a test configuration dialogue where you can create a new test event. &nbsp;</p><p>In the test event body editor, enter the following JSON which mimics what will eventually come from our browser request. Then click create.</p><pre><code class="language-json">{
"body": {
"senderName": "Namo",
"senderEmail": "namo@trains.com",
"message": "I love trains!"
}
}
const ses = new aws.SES({ region: "us-east-1" });
exports.handler = async function (event) {
console.log('EVENT: ', event)
// Extract the properties from the event body
const { senderEmail, senderName, message } = JSON.parse(event.body)
const params = {
Destination: {
ToAddresses: ["the.benhawy@gmail.com"],
},
// Interpolate the data in the strings to send
Message: {
Body: {
Text: {
Data: `You just got a message from ${senderName} - ${senderEmail}:
${message}`
},
},
Subject: { Data: `Message from ${senderName}` },
},
Source: "the.benhawy@gmail.com",
};
return ses.sendEmail(params).promise();
};
form.addEventListener("submit", (event) =&gt; {
// prevent the form submit from refreshing the page
event.preventDefault();
const { name, email, message } = event.target;
// Use your API endpoint URL you copied from the previous step
const endpoint =
"&lt;https://5ntvcwwmec.execute-api.us-east-1.amazonaws.com/default/sendContactEmail&gt;";
// We use JSON.stringify here so the data can be sent as a string via HTTP
const body = JSON.stringify({
senderName: name.value,
senderEmail: email.value,
message: message.value
});
const requestOptions = {
method: "POST",
body
};
fetch(endpoint, requestOptions)
.then((response) =&gt; {
if (!response.ok) throw new Error("Error in fetch");
return response.json();
})
.then((response) =&gt; {
document.getElementById("result-text").innerText =
"Email sent successfully!";
})
.catch((error) =&gt; {
document.getElementById("result-text").innerText =
"An unkown error occured.";
});
});
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
