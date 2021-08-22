---
card: "https://cdn-media-1.freecodecamp.org/images/0*gWsdm7w5PSZNR08L"
tags: [JavaScript]
description: "OAuth (Open Authorization) is an authorization protocol. A th"
author: "Milad E. Fahmy"
title: "A quick introduction to OAuth using Passport.js"
created: "2021-08-16T11:43:02+02:00"
modified: "2021-08-16T11:43:02+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-security tag-technology tag-programming tag-productivity ">
<header class="post-full-header">
<h1 class="post-full-title">A quick introduction to OAuth using Passport.js</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/0*gWsdm7w5PSZNR08L 300w,
https://cdn-media-1.freecodecamp.org/images/0*gWsdm7w5PSZNR08L 600w,
https://cdn-media-1.freecodecamp.org/images/0*gWsdm7w5PSZNR08L 1000w,
https://cdn-media-1.freecodecamp.org/images/0*gWsdm7w5PSZNR08L 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/0*gWsdm7w5PSZNR08L" alt="A quick introduction to OAuth using Passport.js">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<h3 id="what-is-oauth">What is OAuth?</h3><p>OAuth (Open Authorization) is an authorization protocol. A third party application can use it to access user data from a site (like Google or Twitter) without revealing their password. Sites like Quora, Medium, AirBnb and many others offer authentication using OAuth.</p><p>OAuth really makes our lives simpler by eliminating the need to remember the password of every account you create on almost any site. You just have to remember your OAuth provider’s main account password.</p><h3 id="what-is-passport-js">What is Passport.js?</h3><p><a href="http://www.passportjs.org/" rel="noopener">Passport</a> is a middleware which implements authentication on Express-based web applications. It provides over 500+ strategies. What are these strategies? Strategies are used to authenticate requests. Each strategy has its own npm package (such as <a href="https://www.npmjs.com/package/passport-twitter" rel="noopener">passport-twitter</a>, <a href="https://www.npmjs.com/package/passport-google-oauth20" rel="noopener">passport-google-oauth20</a>). A strategy must be configured before usage.</p><h3 id="why-use-passport-js">Why use Passport.js?</h3><p>Here are six reasons stating why you should use Passport:</p><ul><li>It is lightweight</li><li>Easily configurable</li><li>Supports persistent sessions</li><li>Offers OAuth</li><li>Provides separate modules for each strategy</li><li>Gives you the ability to implement custom strategies</li></ul><h3 id="let-s-build-something">Let’s build something</h3><p>To get started, we need to install passport from NPM:</p><pre><code>npm install passport </code></pre><p>We are going to build a simple app which grants the user access to a secret route only if they log in. I’m going to be using the <a href="https://www.npmjs.com/package/passport-google-oauth20" rel="noopener">passport-google-oauth20</a> strategy in this tutorial. Feel free to use any other strategy you prefer, but make sure to check the <a href="http://www.passportjs.org/packages/" rel="noopener">docs</a> to see how it is configured.</p><p>Before continuing, we need a clientID and clientSecret. To get one, head over to <a href="https://console.developers.google.com" rel="noopener">https://console.developers.google.com</a> and create a new project. Then go to Enable APIs and Services and enable the Google+ API. Select the API and click on create credentials.</p><p>Fill out the form and use the same callback URL on both the form and on your file. Make sure to read the comments on the code to figure out how everything fits together.</p><p><strong>app.js</strong></p><pre><code class="language-js">// Required dependencies
const express = require('express');
const app = express();
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const cookieSession = require('cookie-session');
// cookieSession config
app.use(cookieSession({
maxAge: 24 * 60 * 60 * 1000, // One day in milliseconds
keys: ['randomstringhere']
}));
app.use(passport.initialize()); // Used to initialize passport
app.use(passport.session()); // Used to persist login sessions
// Strategy config
passport.use(new GoogleStrategy({
clientID: 'YOUR_CLIENTID_HERE',
clientSecret: 'YOUR_CLIENT_SECRET_HERE',
callbackURL: 'http://localhost:8000/auth/google/callback'
},
(accessToken, refreshToken, profile, done) =&gt; {
done(null, profile); // passes the profile data to serializeUser
}
));
// Used to stuff a piece of information into a cookie
passport.serializeUser((user, done) =&gt; {
done(null, user);
});
// Used to decode the received cookie and persist session
passport.deserializeUser((user, done) =&gt; {
done(null, user);
});
// Middleware to check if the user is authenticated
function isUserAuthenticated(req, res, next) {
if (req.user) {
next();
} else {
res.send('You must login!');
}
}
// Routes
app.get('/', (req, res) =&gt; {
res.render('index.ejs');
});
// passport.authenticate middleware is used here to authenticate the request
app.get('/auth/google', passport.authenticate('google', {
scope: ['profile'] // Used to specify the required data
}));
// The middleware receives the data from Google and runs the function on Strategy config
app.get('/auth/google/callback', passport.authenticate('google'), (req, res) =&gt; {
res.redirect('/secret');
});
// Secret route
app.get('/secret', isUserAuthenticated, (req, res) =&gt; {
res.send('You have reached the secret route');
});
// Logout route
app.get('/logout', (req, res) =&gt; {
req.logout();
res.redirect('/');
});
app.listen(8000, () =&gt; {
console.log('Server Started!');
});
</code></pre><p><strong>index.ejs</strong></p><pre><code class="language-html">&lt;ul&gt;
&lt;li&gt;&lt;a href="/auth/google"&gt;Login&lt;/a&gt;&lt;/li&gt;
&lt;li&gt;&lt;a href="/secret"&gt;Secret&lt;/a&gt;&lt;/li&gt;
&lt;li&gt;&lt;a href="/logout"&gt;Logout&lt;/a&gt;&lt;/li&gt;
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
