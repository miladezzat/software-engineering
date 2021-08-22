---
card: "https://cdn-media-1.freecodecamp.org/images/1*Mx4X6zSgYa2nd2eF5LImvg.gif"
tags: [Security]
description: "You may have heard that there are 360 Million Reasons to Dest"
author: "Milad E. Fahmy"
title: "How to implement your first password-less login system"
created: "2021-08-16T10:27:50+02:00"
modified: "2021-08-16T10:27:50+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-security tag-web-development tag-programming tag-tech tag-startup ">
<header class="post-full-header">
<h1 class="post-full-title">How to implement your first password-less login system</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*Mx4X6zSgYa2nd2eF5LImvg.gif 300w,
https://cdn-media-1.freecodecamp.org/images/1*Mx4X6zSgYa2nd2eF5LImvg.gif 600w,
https://cdn-media-1.freecodecamp.org/images/1*Mx4X6zSgYa2nd2eF5LImvg.gif 1000w,
https://cdn-media-1.freecodecamp.org/images/1*Mx4X6zSgYa2nd2eF5LImvg.gif 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*Mx4X6zSgYa2nd2eF5LImvg.gif" alt="How to implement your first password-less login system">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
npm install --save passwordless
npm install --save passwordless-mongostore
npm install --save emailjs</code></pre><p>That installs the base requirements. You’ll also be using other crucial Node libraries, which you may already have installed for your project. If not, install these, too:</p><pre><code class="language-bash">npm install --save express-sessions
npm install --save body-parser
npm install --save cookie-parser</code></pre><p>Now, assuming you have a separate server.js and routes.js file, include the following in the top of the appropriate files. If you don’t have separate files, you can mush them all together and smother them in delicious spaghetti sauce:</p><p><strong>Note:</strong> Don't forget all the other modules you usually include! (Express, Mongo etc...)</p><pre><code class="language-javascript">// server.js
var cookieParser = require( 'cookie-parser' );
var expressSession = require( 'express-session' );
var passwordless = require( 'passwordless' );
var MongoStore = require( 'passwordless-mongostore' );
var email = require( 'emailjs' );
</code></pre><p></p><pre><code class="language-javascript">// routes.js
var bodyParser = require( 'body-parser' );
var urlencodedParser = bodyParser.urlencoded( { extended: false });
var passwordless = require( 'passwordless' );</code></pre><h4 id="set-up-delivery">Set up delivery</h4><p>Next, in the server.js file, we will include the code snippet that handles sending the authentication tokens to our users:</p><pre><code class="language-javascript">// server.js
var yourEmail = 'pollz.tokendelivery@outlook.com';
var yourPwd = process.env.OUTLOOK_PASSWORD;
var yourSmtp = 'smtp-mail.outlook.com';
var smtpServer  = email.server.connect({
user: yourEmail,
password: yourPwd,
timeout: 60000,
host: yourSmtp, tls: { ciphers: 'SSLv3' }
});
// MongoDB setup (given default can be used)
var pathToMongoDb = url;
// Path to be send via email
var host = 'https://pollz.herokuapp.com/';</code></pre><p>The above code is making some assumptions you need to know about.</p><p>Firstly, change the value of the <code>yourEmail</code> variable to the new address you set up.</p><p>Secondly, the <code>yourPwd</code> variable you see there doesn’t mean my password is the super-obscure <code>process.env.OUTLOOK_PASSWORD</code>, nor does it mean you should go ahead and just put your password in there.</p><p><code>process.env.***</code> is used to access <em>environment variables</em> in Node. Basically, you can hard code those variables in your local system in a <a href="https://www.npmjs.com/package/dotenv" rel="noopener"><code>dotenv</code></a> file, or in Heroku via the settings for your app, and then refer to them as above. This means you’re not committing sensitive information to public GitHub repositories for all to see. It’s a little outside the scope of this tutorial, but the fine manual can tell you more: <a href="https://nodejs.org/api/process.html#process_process_env" rel="noopener">process.env</a>.</p><p>The <code>pathToMongoDB</code> URL you see there is the same MongoDB path I use to connect to Mongo elsewhere in my app. If you’ve connected to Mongo, you can use the same url again.</p><p>Be sure to change the <code>host</code> URL to your own app’s URL.</p><h4 id="configure-passwordless">Configure Passwordless</h4><pre><code class="language-javascript">// server.js
// Setup of Passwordless
passwordless.init( new MongoStore( pathToMongoDb ));
passwordless.addDelivery(function(tokenToSend, uidToSend, recipient, callback) {
// Send out token
smtpServer.send({
text: `Hello!\nYou can now access your account here: ${host}?token=${tokenToSend}&amp;uid=${encodeURIComponent(uidToSend)}`,
from: yourEmail,
to: recipient,
subject: `Token for ${host}`,
attachment: [{
data: "&lt;html&gt;INSERT HTML STRING LINKING TO TOKEN&lt;/html&gt;",
alternative: true
}]
}, function( err, message ) {
if( err ) {
console.log( err );
}
callback( err );
});
});</code></pre><p>Scary code-block, right? But not complete gibberish, I hope.</p><p>There’s two things happening here:</p><ol><li>Initializing Passwordless, and setting a store for the tokens.</li><li>Adding a delivery mechanism and building what the email will contain.</li></ol><p>Read it closely and it should make sense. Beware that you include the appropriate number of closing parentheses and curly braces. I burned 45 minutes on that very issue last night on my latest app.<em> </em>Not kidding.</p><h4 id="get-your-middleware-in-place">Get your middleware in place</h4><p>Middleware is like underwear: forgetting it can lead to discomfort, but putting it on in the wrong order can lead to embarrassment.</p><p>You may already have included this more generic Express middleware, but if not, you need to:</p><pre><code class="language-javascript">// server.js
// Standard express setup
app.use( cookieParser() );
app.use( expressSession({
secret: 'quincylarsonisaprinceamongmen',
saveUninitialized: false,
resave: false,
cookie: { maxAge: 60*60*24*365*10 }
}));</code></pre><p>Then the particular middleware you need for passwordless can be included like this:</p><pre><code class="language-javascript">// server.js
// Passwordless middleware
app.use( passwordless.sessionSupport() );
app.use( passwordless.acceptToken( { successRedirect: '/' }));</code></pre><p>I put all this immediately after the Passwordless initialization snippets, and include the ‘standard’ middleware<strong> <em>before</em> </strong>the ‘passwordless’ middleware. <code>sessionSupport</code> depends on <code>expressSession</code>, so the order matters. Anything else leads to chafing.</p><h4 id="set-up-some-test-routes">Set up some test routes</h4><p>There are only a few essential routes. We need to let users log in and log out, and there needs to be a way to differentiate restricted pages from public pages for non-authenticated users.</p><p>Note: This portion assumes you have set up the Express Router for your app.</p><p><strong>Login:</strong></p><pre><code class="language-javascript">// routes.js
// GET /login
router.get( '/login', function( req, res ) {    res.render( 'login' ); });
// POST /sendtoken
router.post( '/sendtoken',  urlencodedParser,   passwordless.requestToken(
// Simply accept every user*
function( user, delivery, callback ) { callback( null, user );  }),
function( req, res ) {
res.render( 'pages/sent', { user: req.user });
}
);</code></pre><p>In the POST request above, we’re using the simplest and fastest mechanism for logging someone in. You are more likely to want to use the email address that is passed from the login form (we’ll see that in a minute) to look for the user in your database, or create a new one. You can see the more detailed method for that in the <a href="https://passwordless.net/getstarted" rel="noopener">Passwordless documentation</a>.</p><p>The POST request includes the <code>urlencodedParser</code> variable we set earlier. We do this so that we can read the form data, but we only apply it to this specific route. You can read more about this security consideration here: <a href="https://fosterelli.co/dangerous-use-of-express-body-parser.html" rel="noopener">Dangerous Use Of Body Parser</a>. A special thanks to <a href="http://crookedcode.com/" rel="noopener">Jeremy</a> for this tip!</p><p>Notice also in that POST request, the ‘sent’ page renders with a ‘user’ email address being passed in. This is accessible in the views templates and can be used and passed around as necessary. We’ll be using an EJS nav bar to demonstrate that soon.</p><p><strong>Logout:</strong></p><pre><code class="language-javascript">// routes.js
// GET logout
router.get( '/logout', passwordless.logout(), function( req, res ) {
res.redirect( '/' );
});</code></pre><p>You hopefully noticed that this simple GET request takes an extra argument nestled snugly between the URL endpoint and the callback function that processes the request. This ‘passwordless.logout()’ method does all the behind the scenes work necessary to promptly forget the user.</p><p><strong>Restricted pages:</strong></p><pre><code class="language-javascript">// routes.js
// GET restricted site
router.get( '/restricted',   passwordless.restricted({
failureRedirect: '/login'
}),  function( req, res ) {
res.render( 'pages/restricted' , { user: req.user });
});</code></pre><p>The format for restricted pages is pretty easy to parse, too. Similar to the logout pattern, we have the route, <code>/restricted</code>, followed by the <code>passwordless.restricted()</code> method, followed by the callback function that processes the HTTP request. The difference here is that <code>passwordless.restricted()</code> takes an object as an argument that specifies the endpoint we redirect to if the user is not authenticated.</p><h4 id="views">Views</h4><p>One of the most important views in this tutorial is the humble login page. Set it up how you like, but include this form to request the email address of your user:</p><pre><code class="language-html">&lt;!-- views/pages/login.ejs --&gt;
&lt;form action='/sendtoken' method='POST'&gt;
&lt;div class='input-field'&gt;
&lt;label for='user'&gt;Email&lt;/label&gt;
&lt;input name='user' type='email' aria-required='true'&gt;
&lt;/div&gt;
&lt;br&gt;
&lt;input type='submit' value='Login / Register'&gt;
&lt;/form&gt;</code></pre><p>We’re running out of time. Style it on your own dime.</p><p>It is important that you have included the <code>body-parser</code> middleware mentioned earlier in order for you to be able to handle the data POSTed from this form.</p><p>A final view worth looking at would be one that incorporates the authenticated user value we saw up in the routes section.</p><p>Here’s an example of a really simple nav bar that changes according to whether the user is authenticated or not:</p><pre><code class="language-html">&lt;!-- views/partials/navbar.ejs --&gt;
&lt;nav&gt;
&lt;ul&gt;
&lt;% if(user) { %&gt;
&lt;li&gt;Hi, &lt;%= user %&gt;! &lt;/li&gt;
&lt;li&gt;&lt;a href='/logout'&gt;(logout)&lt;/a&gt;&lt;/li&gt;
&lt;% } else { %&gt;
&lt;li&gt;&lt;a href='/login'&gt;Login&lt;/a&gt;&lt;/li&gt;
&lt;% } %&gt;
&lt;/ul&gt;
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
