---
card: "https://cdn-media-1.freecodecamp.org/images/1*e0mCbx2PuNysG54g0B1gRg.jpeg"
tags: [JavaScript]
description: "If you have been building web applications using an Express f"
author: "Milad E. Fahmy"
title: "How to make input validation simple and clean in your Express.js app"
created: "2021-08-16T10:11:06+02:00"
modified: "2021-08-16T10:11:06+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-expressjs tag-productivity tag-nodejs tag-web-development ">
<header class="post-full-header">
<h1 class="post-full-title">How to make input validation simple and clean in your Express.js app</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*e0mCbx2PuNysG54g0B1gRg.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*e0mCbx2PuNysG54g0B1gRg.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*e0mCbx2PuNysG54g0B1gRg.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*e0mCbx2PuNysG54g0B1gRg.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*e0mCbx2PuNysG54g0B1gRg.jpeg" alt="How to make input validation simple and clean in your Express.js app">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<blockquote>This tutorial requires prior knowledge of using the <a href="http://expressjs.com" rel="noopener">expressjs</a> framework</blockquote><h4 id="why-do-we-need-server-side-validation">Why do we need server-side validation?</h4><ul><li>Your client side validation is not enough and it may be subverted</li><li>More prone to <a href="https://en.wikipedia.org/wiki/Man-in-the-middle_attack" rel="noopener">Man in middle attacks</a>, and the server should never trust the client-side</li><li>A user can turn off client-side JavaScript validation and manipulate the data</li></ul><p>If you have been building web applications using an Express framework or any other Node.js framework, validation plays a crucial role in any web app which requires you to validate the request <code>body</code> <code>param</code> <code>query</code>.</p><p>Writing your own middleware function can be cumbersome if</p><ul><li>you want to move fast while maintaining the quality of code or</li><li>you want to avoid using <code><strong>if</strong> (<strong>req</strong>.body.head)</code> or <code><strong>if</strong> (<strong>req</strong>.params.isCool)</code> in your main controller function where you define business logic</li></ul><p>In this tutorial, you’ll learn how to validate input in an Express.js app using an open source and popular module called <a href="https://github.com/ctavan/express-validator" rel="noopener">express-validator</a>.</p><h3 id="introduction-to-express-validator">Introduction to express-validator</h3><p>The definition on Github says:</p><blockquote>express-validator is a set of <a href="http://expressjs.com/" rel="noopener">express.js</a> middlewares that wraps <a href="https://github.com/chriso/validator.js" rel="noopener">validator.js</a> validator and sanitizer functions.</blockquote><p>The module implements five important API’s:</p><ul><li>Check API</li><li>Filter API</li><li>Sanitization chain API</li><li>Validation chain API</li><li>Validation Result API</li></ul><p>Let's take a look at a basic user <code>route</code> without any validation module to create a user: <code>/route/user.js</code></p><pre><code class="language-js">/**
* @api {post} /api/user Create user
* @apiName Create new user
* @apiPermission admin
* @apiGroup User
*
* @apiParam  {String} [userName] username
* @apiParam  {String} [email] Email
* @apiParam  {String} [phone] Phone number
* @apiParam  {String} [status] Status
*
* @apiSuccess (200) {Object} mixed `User` object
*/
router.post('/', userController.createUser)</code></pre><p>Now in user controller <code>/controllers/user.js</code></p><pre><code class="language-js">const User = require('./models/user')
exports.createUser = (req, res, next) =&gt; {
/** Here you need to validate user input.
Let's say only Name and email are required field
*/
const { userName, email, phone, status } = req.body
if (userName &amp;&amp; email &amp;&amp;  isValidEmail(email)) {
// isValidEmail is some custom email function to validate email which you might need write on your own or use npm module
User.create({
userName,
email,
phone,
status,
})
.then(user =&gt; res.json(user))
.catch(next)
}
}</code></pre><p>The above code is just a basic example of validating fields on your own.</p><p>You can handle some validations in your user model using Mongoose. For best practices, we want to make sure validation happens before business logic.</p><p><a href="https://github.com/ctavan/express-validator" rel="noopener">express-validator</a> will take care of all these validations and the <a href="https://www.quora.com/What-does-it-mean-to-sanitize-a-field-How-is-that-related-to-escaping-as-in-entering-in-malicious-input-that-escapes-or-something" rel="noopener">sanitization</a> of inputs as well.</p><h4 id="installation"><strong>Installation</strong></h4><pre><code class="language-bash">npm install --save express-validator</code></pre><p>Include <strong>module</strong> in your main <code>server.js</code> file:</p><pre><code class="language-js">const express = require('express')
const bodyParser = require('body-parser')
const expressValidator = require('express-validator')
const app = express()
const router = express.Router()
app.use(bodyParser.json())
app.use(expressValidator())
app.use('/api', router)</code></pre><p>Now using <a href="https://github.com/ctavan/express-validator" rel="noopener">express-validator</a>, your <code>/routes/user.js</code> will be like this:</p><pre><code class="language-js">router.post(
'/',
userController.validate('createUser'),
userController.createUser,
)</code></pre><p>Here <code>userController.validate</code> is a middleware function which is explained below. It accepts the <code>method</code> name for which the validation will be used.</p><p>Let’s create a middleware function <code>validate()</code>in our<code>/controllers/user.js</code>:</p><pre><code class="language-js">const { body } = require('express-validator/check')
exports.validate = (method) =&gt; {
switch (method) {
case 'createUser': {
return [
body('userName', 'userName doesn't exists').exists(),
body('email', 'Invalid email').exists().isEmail(),
body('phone').optional().isInt(),
body('status').optional().isIn(['enabled', 'disabled'])
]
}
}
}</code></pre><p>Please refer to <a href="https://express-validator.github.io/docs/check-api.html" rel="noopener">this article</a> to know more about function definition and its use.</p><p>The <code>body</code> function will only validate <code>req.body</code> and takes two arguments. First is the <code>property name</code>. Second is your custom <code>message</code> that will be shown if validation fails. If you don’t provide a custom message, then the default message will be used.</p><p>As you can see, for a <code>required</code> field we are using the <code>.exists()</code> method. We are using <code>.optional()</code>for an <code>optional</code> field. Similarly <code>isEmail()</code> <code>isInt()</code> is used to validate <code>email</code> and <code>integer</code>.</p><p>If you want an input field to include only certain values, then you can use <code>.isIn([])</code>. This takes an <code>array</code> of values, and if you receive values other than the above, then an error will be thrown.</p><p>For example, the status field in the above code snippet can only have an <code>enabled</code> or <code>disabled</code> value. If you provide any value other than that, an error will be thrown.</p><p>In <code>/controllers/user.js</code> let’s write a<code><strong>createUser</strong></code> function where you can write business logic. It will be called after <code><strong>validate()</strong></code><strong> </strong>with the result of the validations.</p><pre><code class="language-js">const { validationResult } = require('express-validator/check');
exports.createUser = async (req, res, next) =&gt; {
try {
const errors = validationResult(req); // Finds the validation errors in this request and wraps them in an object with handy functions
if (!errors.isEmpty()) {
res.status(422).json({ errors: errors.array() });
return;
}
const { userName, email, phone, status } = req.body
const user = await User.create({
userName,
email,
phone,
status,
})
res.json(user)
} catch(err) {
return next(err)
}
}</code></pre><h4 id="if-you-are-wondering-what-is-validationresult-req-">If you are wondering what is validationResult(req)?</h4><p><strong><strong>This function</strong></strong> <strong><strong>finds the validation errors in this request and wraps them in an object with handy functions</strong></strong></p><p>Now whenever request includes invalid body params or <code>userName</code> field is missing in <code>req.body</code>, your server will respond like this:</p><pre><code class="language-js">{
"errors": [{
"location": "body",
"msg": "userName is required",
"param": "userName"
}]
}</code></pre><p>So if <code>userName</code> or <code>email</code> failed to satisfy the validation then each error returned by <code>.array()</code>method has the following format by default:</p><pre><code class="language-js">{
"msg": "The error message",
"param": "param name",
"value": "param value",
// Location of the param that generated this error.
// It's either body, query, params, cookies or headers.
"location": "body",
// nestedErrors only exist when using the oneOf function
"nestedErrors": [{ ... }]
}</code></pre><p>As you can see, this module really helps us take care of most of the validations on its own. It maintains code quality as well, and focuses mainly on business logic.</p><p>This was the introduction to input validation using the <strong>express-validator </strong>module and check out how to validate an array of the item and make your own custom validation in <a href="/news/how-to-perform-custom-validation-in-your-express-js-app-432eb423510f/">Part 2</a> of this series.</p><p>I have tried my best and hope I covered enough to explain it in detail so that you can get started.</p><p>If you encounter any problems, feel free to <em>get in <a href="https://101node.io" rel="noopener">touch</a> or comment below.</em><br>I would be happy to help :)</p><p>Follow <a href="/news/author/thatshailesh/">Shailesh Shekhawat</a> to get notified whenever I publish a new post.</p><p><em>Don’t hesitate to clap if you considered this a worthwhile read!</em></p><p><em>Originally published at <a href="https://101node.io/blog/how-to-validate-inputs-in-express-js-app/" rel="noopener">101node.io</a> on September 2, 2018.</em></p>
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
