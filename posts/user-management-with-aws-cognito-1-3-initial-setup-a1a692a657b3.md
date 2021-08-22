---
card: "https://cdn-media-1.freecodecamp.org/images/1*ubdzj9K3MrbMb0Ep0UV3IA.png"
tags: [AWS]
description: by Kangze Huang
author: "Milad E. Fahmy"
title: "User Management with AWS Cognito — (1/3) Initial Setup"
created: "2021-08-15T19:53:41+02:00"
modified: "2021-08-15T19:53:41+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-aws tag-javascript tag-programming tag-tech tag-startup ">
<header class="post-full-header">
<h1 class="post-full-title">User Management with AWS Cognito — (1/3) Initial Setup</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*ubdzj9K3MrbMb0Ep0UV3IA.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*ubdzj9K3MrbMb0Ep0UV3IA.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*ubdzj9K3MrbMb0Ep0UV3IA.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*ubdzj9K3MrbMb0Ep0UV3IA.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*ubdzj9K3MrbMb0Ep0UV3IA.png" alt="User Management with AWS Cognito — (1/3) Initial Setup">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Kangze Huang</p>
<h1 id="user-management-with-aws-cognito-1-3-initial-setup">User Management with AWS Cognito — (1/3) Initial Setup</h1>
<h4 id="the-complete-aws-web-boilerplate-tutorial-1a">The Complete AWS Web Boilerplate — Tutorial 1A</h4>
<blockquote><a href="https://medium.com/@kangzeroo/the-complete-aws-web-boilerplate-d0ca89d1691f#.uw0npcszi" rel="noopener"><strong>Main Table of Contents Click Here</strong></a></blockquote>
<blockquote><strong>Part A:</strong> <a href="https://medium.com/@kangzeroo/user-management-with-aws-cognito-1-3-initial-setup-a1a692a657b3#.pgxyg8q8o" rel="noopener">Initial Setup</a></blockquote>
<blockquote><strong>Part B:</strong> <a href="https://medium.com/@kangzeroo/user-management-with-aws-cognito-2-3-the-core-functionality-ec15849618a4" rel="noopener">The Core Functionality</a></blockquote>
<blockquote><strong>Part C:</strong> <a href="https://medium.com/@kangzeroo/user-management-with-aws-cognito-3-3-last-steps-to-full-fledged-73f4a3a9f05e#.v3mg316u5" rel="noopener">Last Steps to Full Fledged</a></blockquote>
<p>Download the Github <a href="https://github.com/kangzeroo/Kangzeroos-AWS-Cognito-Boilerplate" rel="noopener">here</a>.</p>
<h3 id="introduction">Introduction</h3>
<p>Setting up user authentication can take ages, but it is an essential cornerstone of any production app. There are options out there such as AuthO and PassportJS, but they either have hard learning curves, require continual maintenance, or are vulnerable to programmer errors as they require self-setup. If only there was a hands-off, customizable, secure and highly scalable user management service on the cloud.</p>
<p>Introducing Amazon Cognito and Federated Identities. Cognito is the AWS solution for managing user profiles, and Federated Identities help keep track of your users across multiple logins. Integrated into the AWS ecosystem, AWS Cognito opens up a world of possibility for advanced front end development as Cognito+IAM roles give you selective secure access to other AWS services. Want to only allow S3 Bucket access to specific signed on users? Simply connect a Cognito login with an IAM role allowed access to the bucket, and now your bucket is secure! Best of all, the free tier gives you 50,000 monthly active users so you won’t have to worry about paying more until you’re ready to boom.</p>
<p>This boilerplate is a React-Redux web app that has the full features of AWS Cognito and Federated Identities pre-integrated. Use this boilerplate if you have an app that you want developed with a production-ready authentication service from the very beginning. Indeed this is a powerful launchpad for your next great idea.</p>
<p>Go to AWS Cognito on the AWS console to get started!</p>
<h3 id="initial-setup-cognito">Initial Setup — Cognito</h3>
<p>We will be setting up AWS Cognito, which is a custom login pool (such as login with email). Cognito IS NOT a login manager for any type of login (such as Facebook and Gmail), only for custom logins.</p>
<p>Let’s first make a user pool by clicking on “Manage your User Pools”. A user pool is a group of users that fulfill the same designation. If you were making an Uber clone, you would make 2 user pools — one for drivers and one for riders. For now, let just make 1 new user pool called “App_Users”. The setup screen should look like this:</p>
<figcaption>User Pool Name</figcaption>
</figure>
<p>We’re gonna walk through this process step by step, so enter the Pool name of “App_Users” and click “Step through settings”. The next step is “Attributes”, where we define the attributes that our “App_Users” will have.</p>
<figcaption>User Attributes</figcaption>
</figure>
<p>We now, we only want to have an email, password and “agentName”. The email is our unique identifier for a user and the password is a mandatory field (which is why you don’t see it in the list of standard attributes). We want users to be able to have a codename to go by, so let’s set up “agentName” is a custom attribute. We are only using “agentName” to show how to add custom attributes. Scroll down and you will see the option to add custom attributes.</p>
<figcaption>Custom Attributes</figcaption>
</figure>
<p>As of the date this tutorial was written, you cannot go back and change the custom attributes (even though AWS appears to be able to), so be sure to get this right the first time! If you need to change attributes, you will have to create a new user pool. Hopefully AWS fixes this issue soon. Anyways, moving on to account policies!</p>
<figcaption>Account Policies</figcaption>
</figure>
<p>So we can see here that our passwords can be enforced to require certain characters. Obviously requiring a mix of various character types would be more secure, but users often don’t like that. For a middle ground, lets just require the password to be 8+ characters in length, and include at least 1 number. We also want users to be able to sign themselves up. The other parts are not so important, so let’s move onto the next step: verifications.</p>
<figcaption>Account Verifications</figcaption>
</figure>
<p>This part is cool, we can easily integrate multi-factor authentication (MFA). This means users must sign up with an email as well as another form of authentication such as a phone number. A PIN would be sent to that phone number and the user would use it to verify their account. We won’t be using MFA in this tutorial, just email verification. Set MFA to “off” and check only “Email” as a verification method. We can leave the “AppUsers-SMS-Role” (IAM role) that has been filled in, as we won’t be using it but may use it in the future. Cognito uses that IAM role to be authorized to send SMS text messages used in MFA. Since we’re not using MFA, we can move on to: Message Customizations.</p>
<figcaption>Custom Account Messages</figcaption>
</figure>
<p>When users receive their account verification emails, we can specify what goes into that email. Here we have made a custom email and programmatically placed in the verification PIN represented as <code>{####}</code>. Unfortunately we can’t pass in other variables such as a verification link. To accomplish this, we would have to use a combination of AWS Lambda and AWS SES.</p>
<figcaption>Custom Account Messages</figcaption>
</figure>
<p>Scroll down the page in the Message Customizations step and we can add our own default FROM and REPLY-TO addresses. In order to do this, we need to verify an email in AWS SES, which is easy and super quick to set up. In a new tab, go to the AWS console homepage by clicking the orange cube at the top left hand. In the console homepage, search for SES (Simple Email Service). Click to go to the SES page, then click the Email Addresses link on the left menu.</p>
<p>Next click “Verify a New Address”, and enter the email you would like to verify.</p>
<p>Now login to your email and open the email from AWS. Click the link inside the email to verify, and you will be redirected to the AWS SES page again. You have successfully verified an email! That was easy.</p>
<p>Now that’s done, let’s return back to AWS Cognito and move on to: Tags.</p>
<figcaption>User Pool Tags</figcaption>
</figure>
<p>It is not mandatory to add tags to a user pool, but it is definitely useful for managing many AWS services. Let’s just add a tag for ‘AppName’ and set it to a value of ‘MyApp’. We can now move on to: Devices.</p>
<figcaption>Devices</figcaption>
</figure>
<p>We can opt to remember our user’s devices. I usually select “Always” because remembering user devices is both free and requires no coding on our part. The information is useful too, so why not? Next step: Apps.</p>
<figcaption>Apps</figcaption>
</figure>
<p>We want certain apps to have access to our user pool. These apps are not present anywhere else on the AWS ecosystem, which means when we create an “app”, it is a Cognito-only identifier. Apps are useful because we can have multiple apps accessing the same user pool (imagine an Uber clone app, and a complimentary Driving Test Practice App). We will set the refresh token to 30 days, which means each login attempt will return a refresh token that we can use for authentication instead of logging in every time. We un-click “Generate Client Secret” because we intend to log into our user pool from the front end instead of back end (ergo, we cannot keep secrets on the front end because that is insecure). Click “Create App” and then “Next Step” to move on to: Triggers.</p>
<figcaption>Triggers</figcaption>
</figure>
<p>We can trigger various actions in the user authentication and setup flow. Remember how we said we can create more complex account verification emails using AWS Lambda and AWS SES? This is where we would set that up. For the scope of this tutorial, we will not be using any AWS Lambda triggers. Let’s move on to the final step: Review.</p>
<figcaption>Review</figcaption>
</figure>
<p>Here we review all the setup configurations we have made. If you are sure about this info, click “Create Pool” and our Cognito User Pool will be generated!</p>
<p>Take note of the Pool Id <code>us-east-1_6i5p2Fwao</code> in the Pool details tab.</p>
<figcaption>Notice the Pool Id</figcaption>
</figure>
<p>And the App client id <code>5jr0qvudipsikhk2n1ltcq684b</code> in the Apps tab. We will need both of these in our client side app.</p>
<figcaption>Notice the App client id</figcaption>
</figure>
<p>Now that Cognito is set up, we can set up Federated Identities for multiple login providers. In this tutorial we do not cover the specifics of FB Login as it is not within in the scope of this tutorial series. However, integrating FB Login is super easy and we will show how it’s done in the below section.</p>
<h3 id="initial-setup-federated-identities">Initial Setup — Federated Identities</h3>
<p>Next we want to setup “Federated Identities”. If we have an app that allows multiple login providers (Amazon Cognito, Facebook, Gmail..etc) to the same user, we would use Federated Identities to centralize all these logins. In this tutorial, we will be using both our Amazon Cognito login, as well as a potential Facebook Login. Go to Federated Identities and begin the process to create a new identity pool. Give it an appropriate name.</p>
<p>Now expand the “Authentication providers” section and you will see the below screen. Under Cognito, we are going to add the Cognito User Pool that we just created. Copy and paste the User Pool ID and App Client ID that we made note of earlier.</p>
<p>And if we wanted Facebook login for the same user identity pool, we can go to the Facebook tab and simply enter our Facebook App ID. That’s all there is to it on the AWS console!</p>
<p>Save the identity pool and you will be redirected to the below screen where IAM roles are created to represent the Federated Identity Pool. The unauthenticated IAM role is for non-logged in users, and the authenticated version is for logged in users. We can grant these IAM roles permission to access other AWS resources like S3 buckets and such. That is how we achieve greater security by integrating our app throughout the AWS ecosystem. Continue to finish creating this Identity Pool.</p>
<p>You should now see the below screen after successfully creating the identity pool. You now only need to make note of 1 thing which is the Identity Pool ID (ie. <code>us-east-1:65bd1e7d-546c-4f8c-b1bc-9e3e571cfaa7</code>) which we will use later in our code. Great!</p>
<p>Exit everything and go back to the AWS Cognito main screen. If we enter the Cognito section or the Federated Identities section, we see that we have the 2 necessary pools set up. AWS Cognito and AWS Federated Identities are ready to go!</p>
<figcaption>AWS Cognito</figcaption>
</figure>
<figcaption>AWS Federated Identities</figcaption>
</figure>
<p>That’s all for set up! With these 2 pools we can integrate the rest of our code into Amazon’s complete authentication service and achieve top tier user management. That was way easier than custom OAuth+Passport.js! If you like what you’ve seen so far, keep reading! Remember that after you learn this once, it will be super easy in the future, so it is definitely worth the time investment. See you in the next section!</p>
<blockquote><a href="https://medium.com/@kangzeroo/the-complete-aws-web-boilerplate-d0ca89d1691f#.uw0npcszi" rel="noopener"><strong>Main Table of Contents Click Here</strong></a></blockquote>
<blockquote><strong>Part A:</strong> <a href="https://medium.com/@kangzeroo/user-management-with-aws-cognito-1-3-initial-setup-a1a692a657b3#.pgxyg8q8o" rel="noopener">Initial Setup</a></blockquote>
<blockquote><strong>Part B:</strong> <a href="https://medium.com/@kangzeroo/user-management-with-aws-cognito-2-3-the-core-functionality-ec15849618a4" rel="noopener">The Core Functionality</a></blockquote>
<blockquote><strong>Part C:</strong> <a href="https://medium.com/@kangzeroo/user-management-with-aws-cognito-3-3-last-steps-to-full-fledged-73f4a3a9f05e#.v3mg316u5" rel="noopener">Last Steps to Full Fledged</a></blockquote>
<blockquote>These methods were partially used in the deployment of <a href="http://renthero.ca" rel="noopener">renthero.ca</a></blockquote>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
