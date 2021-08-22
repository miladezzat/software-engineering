---
card: "https://cdn-media-1.freecodecamp.org/images/1*6qHAynt7vd0MQr7Yut0LVA.png"
tags: [JavaScript]
description: by Kangze Huang
author: "Milad E. Fahmy"
title: "Sending emails with Amazon SES"
created: "2021-08-15T19:52:49+02:00"
modified: "2021-08-15T19:52:49+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-nodejs tag-aws tag-startups tag-email-marketing ">
<header class="post-full-header">
<h1 class="post-full-title">Sending emails with Amazon SES</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*6qHAynt7vd0MQr7Yut0LVA.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*6qHAynt7vd0MQr7Yut0LVA.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*6qHAynt7vd0MQr7Yut0LVA.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*6qHAynt7vd0MQr7Yut0LVA.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*6qHAynt7vd0MQr7Yut0LVA.png" alt="Sending emails with Amazon SES">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Kangze Huang</p>
<h1 id="sending-emails-with-amazon-ses">Sending emails with Amazon SES</h1>
<h4 id="the-complete-aws-web-boilerplate-tutorial-3">The Complete AWS Web Boilerplate — Tutorial 3</h4>
<h3 id="table-of-contents">Table of Contents</h3>
<blockquote><strong>Part 0:</strong> <a href="https://medium.com/@kangzeroo/the-complete-aws-web-boilerplate-d0ca89d1691f#.3eqpvcjsy" rel="noopener">Introduction to the Complete AWS Web Boilerplate</a></blockquote>
<blockquote><strong>Part 1:</strong> <a href="https://medium.com/@kangzeroo/user-management-with-aws-cognito-1-3-initial-setup-a1a692a657b3#.cbkz7b2jp" rel="noopener">User Authentication with AWS Cognito</a> (3 parts)</blockquote>
<blockquote><strong>Part 2:</strong> <a href="https://medium.com/@kangzeroo/amazon-s3-cloud-file-storage-for-performance-and-cost-savings-8f38d7769619#.l9so2hk00" rel="noopener">Saving File Storage Costs with Amazon S3</a> (1 part)</blockquote>
<blockquote><strong>Part 3:</strong> <a href="https://medium.com/@kangzeroo/sending-emails-with-amazon-ses-7617e83327b6#.5nhcrr609" rel="noopener">Sending Emails with Amazon SES</a> (1 part)</blockquote>
<blockquote>Part 4: Manage Users and Permissions with AWS IAM <strong>[Coming Soon]</strong></blockquote>
<blockquote>Part 5: Cloud Server Hosting with AWS EC2 and ELB<strong>[Coming Soon]</strong></blockquote>
<blockquote>Part 6: The MongoDB Killer: AWS DynamoDB <strong>[Coming Soon]</strong></blockquote>
<blockquote>Part 7: Painless SQL Scaling using AWS RDS <strong>[Coming Soon]</strong></blockquote>
<blockquote>Part 8: Serverless Architecture with Amazon Lambda <strong>[Coming Soon]</strong></blockquote>
<p>Download the Github <a href="https://github.com/kangzeroo/Kangzeroos-Complete-AWS-Web-Boilerplate/tree/SES" rel="noopener">here</a>.</p>
<h3 id="setup">Setup</h3>
<p>Sending emails with Amazon SES is really straightforward. Let’s start at the set-up. Go to Amazon SES and click <strong>Email Addresses</strong> in the sidebar. Then click <strong>Verify a New Email Address</strong> and enter an email you want to use for messaging in the app.</p>
<p>Now go to your email provider and click the verification link. After verifying, go back to Amazon SES <strong>Email Addresses</strong> tab. You should now see your email verified.</p>
<p>This was necessary for 2 reasons. First is that we need an email for sending a message, and the second is because we are in a sandbox environment. A sandbox environment means you can only send and receive emails from verified addresses, and prevents you from spamming people. This is all the set-up we need for this boilerplate.</p>
<p>If you want be able to send emails to any email address, you need to make a written request to Amazon to graduate from the sandbox environment. To do this, navigate to the top-right hand corner at <strong>Support </strong>&amp;<strong>gt; Support Cen</strong>ter.</p>
<p>At this next screen, click <code>Create case</code>.</p>
<p>This is a straightforward form, but we’ll briefly explain. Select <strong>Service Limit Increase</strong> and set the <strong>Limit Type</strong> to <strong>SES Sending Limits</strong>. Now create 2 requests, one where <strong>Limit</strong> is <strong>Desired Daily Sending Quota</strong> (how many emails can be sent in one day), and the other where <strong>Limit</strong> is <strong>Desired Maximum Send Rate</strong>. Set the <strong>New limit value </strong>to the amount that you need. Finally, optionally set the Mail Type as it increases you odds of approval. Use transactional if your emails are generated as a request of a user’s activity. There are others available for other use cases.</p>
<p>The rest of the request is easy. Make sure you agree to comply with the Terms of Service, and you have a process to handle <a href="http://docs.aws.amazon.com/ses/latest/DeveloperGuide/best-practices-bounces-complaints.html" rel="noopener">bounces and complaints</a> (for when users mark your email as spam). Finally, give a brief explanation of your use case.</p>
<p>Submit your code and you should get an email from Amazon with the results of your service increase request. Once approved, your app can send messages to any email.</p>
<h3 id="the-code">The Code</h3>
<p>We’re ready to dig into the code! Go to <code>App/src/api/aws/aws_ses.js</code> where the bulk of the code resides. Let’s take a look at the main function <code>sendAWSEmail()</code>:</p><pre><code>export function sendAWSEmail(email, message){ const ses = new AWS.SES({  region: 'us-east-1' }) const p = new Promise((res, rej)=&gt;{  if(!email|| message){   rej('Missing user email or message content')  }else{   const params = createInquiryParamsConfig(email, message)   // console.log('Sending email with attached params!')   AWS.config.credentials.refresh(function(){    // console.log(AWS.config.credentials)    ses.sendEmail(params, function(err, data) {      if(err){        // console.log(err, err.stack); // an error occurred        rej(err)      }else{       // console.log(data);           // successful response     res('Success! Email sent')      }    })   })  } }) return p}</code></pre>
<p>This is extremely straightforward. We receive two arguments, an email to send to, and a message to be sent. The first thing we do in this function is instantiate the AWS SES object for interacting with AWS by simply passing in the region. Next we check if there is a recipient email and a message. If both are provided, then we can actually send the email.</p>
<p>Assuming we have both a recipient email and message, we will create a <code>params</code> object for AWS SES to read for all the info &amp; options necessary. This <code>params</code> object is created with <code>createInquiryParamsConfig()</code>. Before we dive into that rabbit hole, let’s just quickly finish up explaining the rest of <code>sendAWSEmail()</code>. We refresh AWS Cognito user’s credentials (that we set with AWS Cognito, explained in my <a href="https://medium.com/@kangzeroo/user-management-with-aws-cognito-1-3-initial-setup-a1a692a657b3#.ykdx6xqx2" rel="noopener">other tutorial</a>) and call <code>ses.sendEmail</code> with <code>params</code> and a response callback passed in. Reject the promise if there is an error, and resolve with a success message if there is no error. <code>ses.sendEmail</code> is the only AWS function we will use, and everything else is we need is determined in <code>params</code>.</p>
<p>Now let’s see how to make <code>params</code> with <code>createInquiryParamsConfig()</code>.</p><pre><code>function createInquiryParamsConfig(email, message){ const params = {   Destination: {      BccAddresses: [],     CcAddresses: [],     ToAddresses: [ email ]   },   Message: {      Body: {        Html: {         Data: generateHTMLInquiryEmail(landlordEmail, message),         Charset: 'UTF-8'       }     },     Subject: {        Data: 'Kangzeroos Boilerplate says hi ' + email,       Charset: 'UTF-8'     }   },   Source: 'yourApp@gmail.com',    ReplyToAddresses: [ 'yourApp@gmail.com' ],   ReturnPath: 'yourApp@gmail.com' } return params}</code></pre>
<p>Pretty straightforward, we pass in <code>email</code> and <code>message</code>, and return a big javascript object. All the values you see here are necessary, but you can add a ton of other optional configurations too. The function we must pay attention to is <code>generateHTMLInquiryEmail()</code>. Let’s look at that.</p><pre><code>function generateHTMLInquiryEmail(email, message){ return `  &lt;!DOCTYPE html&gt;  &lt;html&gt;    &lt;head&gt;      &lt;meta charset='UTF-8' /&gt;      &lt;title&gt;title&lt;/title&gt;    &lt;/head&gt;    &lt;body&gt;     &lt;table border='0' cellpadding='0' cellspacing='0' height='100%' width='100%' id='bodyTable'&gt;      &lt;tr&gt;          &lt;td align='center' valign='top'&gt;              &lt;table border='0' cellpadding='20' cellspacing='0' width='600' id='emailContainer'&gt;                  &lt;tr style='background-color:#99ccff;'&gt;                      &lt;td align='center' valign='top'&gt;                          &lt;table border='0' cellpadding='20' cellspacing='0' width='100%' id='emailBody'&gt;                              &lt;tr&gt;                                  &lt;td align='center' valign='top' style='color:#337ab7;'&gt;                                      &lt;h3&gt;${message}&lt;/h3&gt;                                  &lt;/td&gt;                              &lt;/tr&gt;                          &lt;/table&gt;                      &lt;/td&gt;                  &lt;/tr&gt;                  &lt;tr style='background-color:#74a9d8;'&gt;                      &lt;td align='center' valign='top'&gt;                          &lt;table border='0' cellpadding='20' cellspacing='0' width='100%' id='emailReply'&gt;                              &lt;tr style='font-size: 1.2rem'&gt;                                  &lt;td align='center' valign='top'&gt;                                      &lt;span style='color:#286090; font-weight:bold;'&gt;Send From:&lt;/span&gt; &lt;br/&gt; ${email}                                  &lt;/td&gt;                              &lt;/tr&gt;                          &lt;/table&gt;                      &lt;/td&gt;                  &lt;/tr&gt;              &lt;/table&gt;          &lt;/td&gt;      &lt;/tr&gt;      &lt;/table&gt;    &lt;/body&gt;  &lt;/html&gt; `}</code></pre>
<p>All we are doing here is creating an HTML file and passing in the <code>email</code> and <code>message</code> to create a custom email. We use ES6 string literals to add in string variables with <code>${ }</code> like so: <code>&lt;h3&gt;${message</code>}&lt;/h3&gt;.</p>
<p>And that’s it! You can use whatever front end code you want, simply pass in an <code>email</code> and <code>message</code> to <code>sendAWSEmail()</code>. Just remember <code>sendAWSEmail()</code> returns a promise, so you will have to handle that accordingly. If you don’t know how to handle promises, check out my <a href="https://medium.com/@kangzeroo/quick-story-about-javascript-promises-31b4e76ed0cd#.sty9l0ncx" rel="noopener">other tutorial here</a>.</p>
<p>See you next time!</p>
<h3 id="table-of-contents-1">Table of Contents</h3>
<blockquote><strong>Part 0:</strong> <a href="https://medium.com/@kangzeroo/the-complete-aws-web-boilerplate-d0ca89d1691f#.3eqpvcjsy" rel="noopener">Introduction to the Complete AWS Web Boilerplate</a></blockquote>
<blockquote><strong>Part 1:</strong> <a href="https://medium.com/@kangzeroo/user-management-with-aws-cognito-1-3-initial-setup-a1a692a657b3#.cbkz7b2jp" rel="noopener">User Authentication with AWS Cognito</a> (3 parts)</blockquote>
<blockquote><strong>Part 2:</strong> <a href="https://medium.com/@kangzeroo/amazon-s3-cloud-file-storage-for-performance-and-cost-savings-8f38d7769619#.l9so2hk00" rel="noopener">Saving File Storage Costs with Amazon S3</a> (1 part)</blockquote>
<blockquote><strong>Part 3:</strong> <a href="https://medium.com/@kangzeroo/sending-emails-with-amazon-ses-7617e83327b6#.5nhcrr609" rel="noopener">Sending Emails with Amazon SES</a> (1 part)</blockquote>
<blockquote>Part 4: Manage Users and Permissions with AWS IAM <strong>[Coming Soon]</strong></blockquote>
<blockquote>Part 5: Cloud Server Hosting with AWS EC2 and ELB<strong>[Coming Soon]</strong></blockquote>
<blockquote>Part 6: The MongoDB Killer: AWS DynamoDB <strong>[Coming Soon]</strong></blockquote>
<blockquote>Part 7: Painless SQL Scaling using AWS RDS <strong>[Coming Soon]</strong></blockquote>
<blockquote>Part 8: Serverless Architecture with Amazon Lambda <strong>[Coming Soon]</strong></blockquote>
<p>This method was partially used in the deployment of <a href="http://renthero.ca" rel="noopener">renthero.ca</a></p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
