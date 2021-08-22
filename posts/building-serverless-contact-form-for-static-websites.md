---
card: "/images/default.jpg"
tags: [Serverless]
description: "A few years ago AWS launched static hosting service S3, which"
author: "Milad E. Fahmy"
title: "Building Serverless Contact Form For Static Websites"
created: "2021-08-16T15:38:43+02:00"
modified: "2021-08-16T15:38:43+02:00"
---
Caleb George on&nbsp;"); background-size: 1px 1px; background-position: 0px calc(1em + 1px);"&gt;UnsplashIntroductionA few years ago AWS launched static hosting service S3, which was a paradigm shift for hosting static websites. The tech was crystal clear, all the"&gt;
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-serverless tag-python tag-serverless-framework ">
<header class="post-full-header">
<h1 class="post-full-title">Building Serverless Contact Form For Static Websites</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2019/07/1_lYvXrG9rcgLg42weUyOfyg.jpeg 300w,
/news/content/images/size/w600/2019/07/1_lYvXrG9rcgLg42weUyOfyg.jpeg 600w,
/news/content/images/size/w1000/2019/07/1_lYvXrG9rcgLg42weUyOfyg.jpeg 1000w,
/news/content/images/size/w2000/2019/07/1_lYvXrG9rcgLg42weUyOfyg.jpeg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2019/07/1_lYvXrG9rcgLg42weUyOfyg.jpeg" alt="Building Serverless Contact Form For Static Websites">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
provider:
name: aws
runtime: python2.7
functions:
hello:
handler: handler.hello</code></pre><p>The <code>provider</code> section defines everything related to the service provider, there are a lot more properties to configure it further you can take a look at them <a href="https://serverless.com/framework/docs/providers/aws/guide/serverless.yml/" rel="noopener">here</a>. In the auto-generated <code>serverless.yml</code> file, you need to add two important tags under the <code>provider</code> section, which are as follows:</p><pre><code>region: &lt;your-aws-region&gt;
profile: &lt;aws-username-with-programmatic-access&gt;</code></pre><p>The <code>functions</code> property is used to declare the serverless functions, you can declare multiple functions under this property. The above example declares a function called <code>hello</code> present in the <code>handler.py</code> file. Browse over to the <code>handler.py</code> file and you will find something like this:</p><pre><code>import json
def hello(event, context):
body = {
"message": "Go Serverless v1.0! Your function executedsuccessfully!",
"input": event
}
response = {
"statusCode": 200,
"body": json.dumps(body)
}
- Effect: "Allow"
Action:
- ses:SendEmail
- ses:SendRawEmail
Resource: "*"
- Effect: "Allow"
Action:
- dynamodb:Scan
- dynamodb:PutItem
Resource: "arn:aws:dynamodb:${opt:region, self:provider.region}:*:table/${self:provider.environment.DYNAMODB_TABLE}"</code></pre><p>In the <code>serverless.yml</code> we are allowing the Serverless functions to use <code>ses:SendEmail</code> and <code>dynamoDB:PutItem</code> actions among many others defined above.</p><p>Since Lambda runs serverless functions in the cloud, we need to define the functions somewhere. Functions are defined using the <code><strong><strong>functions</strong></strong></code> property. In our example application we have defined events attached to them.</p><pre><code>functions:
sendMail:
handler: handler.sendMail
description: Send Email using AWS SES Service
events:
- http:
path: sendMail
method: post
integration: lambda
cors: true
response:
headers:
"Access-Control-Allow_Origin": "'*'"
list:
handler: handler.list
description: List all the contact form submissions
events:
- http:
path: list
method: get
integration: lambda
cors: true
response:
headers:
"Access-Control-Allow_Origin": "'*'"</code></pre><p>Another great feature of Serverless Framework is that it will create an API in the AWS API Gateway and link it with relevant Lambda function. This is done using the <code>http</code> property defined in the <code>events</code> property.</p><h4 id="2-creating-resources">2. Creating Resources</h4><p>With Serverless Framework you create resources like a DynamoDB table as we have done here. This snippet of code is responsible for creating a DynamoDB table with the given configuration.</p><pre><code>resources:
Resources:
ContactFormDynamoDbTable:
Type: 'AWS::DynamoDB::Table'
DeletionPolicy: Retain
Properties:
AttributeDefinitions:
-
AttributeName: id
AttributeType: S
KeySchema:
-
AttributeName: id
KeyType: HASH
ProvisionedThroughput:
ReadCapacityUnits: 1
WriteCapacityUnits: 1
TableName: ${self:provider.environment.DYNAMODB_TABLE}</code></pre><h4 id="3-peek-into-the-serverless-functions">3. Peek into the Serverless functions</h4><p>The demo application is written in <strong><strong>python</strong></strong>, it uses <a href="https://github.com/boto/boto3" rel="noopener"><strong><strong>boto3</strong></strong></a> AWS SDK to send emails using SES and for performing read/write operations on DynamoDB.</p><p>The <code>sendMail</code> function is triggered when a <code>POST</code> request is received from the contact form on the <code>/sendMail</code> path. The <code>list</code> function is triggered by a <code>GET</code> request to <code>/list</code> path defined in the <code>serverless.yml</code> file.</p><hr><h3 id="building-the-application">Building the Application</h3><p>Now that you have set up and configured the Serverless Framework in your machine, it’s time to get things rolling.</p><h4 id="1-clone-the-application">1. Clone the application</h4><p>Let’s start by cloning the application from Github.</p><pre><code>$ git clone https://github.com/faizanbashir/python-ses-dynamodb-contactform
name: aws
runtime: python2.7
region: &lt;aws-region&gt;
profile: &lt;aws-user&gt;
...
environment:
SENDER_EMAIL: &lt;verified-email-address&gt;</code></pre><p>Awesome! with the configuration done you can turn your attention to deploying the application.</p><h4 id="4-deploying-to-aws">4. Deploying to AWS</h4><p>Everything in place now you can deploy application with a single command, ain’t that super cool.</p><pre><code>$ sls deploy -v</code></pre><p>It will take a minute or two to execute if you religiously followed this tutorial, at the end it will provide you a list of endpoints to use for calling our functions. It will look something like this:</p><pre><code>endpoints:
POST - https://xxx.execute-api.xx.amazonaws.com/development/sendMail
GET - https://xxxx.execute-api.xx.amazonaws.com/development/list</code></pre><h4 id="5-testing-the-endpoints">5. Testing the endpoints</h4><p>Now that we have the endpoints let’s test application to see if it’s working or not. The <code>/sendMail</code> endpoint expects input in JSON format.</p><pre><code>$ curl --header "Content-Type: application/json" \--request POST \--data '{"firstname": "John", "lastname": "Doe", "email": "john@doe.com", "message": "Hi there"}'\https://xxx.execute-api.xx.amazonaws.com/development/sendMail</code></pre><p>If the email is sent and the entry written to DynamoDB the request will exit with a response like this.</p><pre><code>&gt; "Email Sent!"</code></pre><p>Now, let’s test the <code>/list</code> endpoint in the same manner with the <code>GET</code> endpoint you got after deploying the application.</p><pre><code>$ curl https://xxxx.execute-api.xx.amazonaws.com/development/list</code></pre><p>The <code>/list</code> endpoint response will look something like this:</p><pre><code>&gt; {"body": [{"firstname": "John", "lastname": "Doe", "email": "john@doe.com", "updatedAt": 1529425349731, "message": "Hi there", "id": "f651c404-73dc-11e8-bf3e-be54be0b5d22", "createdAt": 1529425349731}], "statusCode": 200}</code></pre><h4 id="6-the-contact-form">6. The Contact Form</h4><p>With the Serverless functions working properly we can go ahead and integrate it into our static contact form. The static form code is in the <code>public</code> folder.</p><p>Open the <code>index.html</code> file in your favourite IDE and update the <code>URL</code> variable with the <code>/sendMail</code> endpoint and you are good to go.</p><pre><code>//Insert your lambda function URL here
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
