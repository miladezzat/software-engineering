---
card: "https://cdn-media-1.freecodecamp.org/images/1*s3Fzn57ud8r82T56w9biWg.png"
tags: [JavaScript]
description: Imagine you have an e-commerce website and you’re allowing us
author: "Milad E. Fahmy"
title: "How to choose which validator to use: a comparison between Joi & express-validator"
created: "2021-08-15T19:34:08+02:00"
modified: "2021-08-15T19:34:08+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-nodejs tag-expressjs tag-tech tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">How to choose which validator to use: a comparison between Joi &amp; express-validator</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*s3Fzn57ud8r82T56w9biWg.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*s3Fzn57ud8r82T56w9biWg.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*s3Fzn57ud8r82T56w9biWg.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*s3Fzn57ud8r82T56w9biWg.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*s3Fzn57ud8r82T56w9biWg.png" alt="How to choose which validator to use: a comparison between Joi &amp; express-validator">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Imagine you have an e-commerce website and you’re allowing users to create accounts using their name and email. You want to make sure they sign up with real names, not something like cool_dud3.</p>
<p>That's where we use validation to validate inputs and make sure input data follows certain rules.</p>
<p>In the market, we already have a bunch of validation libraries, but I will compare two important validation libraries: <a href="https://github.com/hapijs/joi" rel="noopener">Joi</a> and <a href="https://github.com/express-validator/express-validator" rel="noopener">express-validator</a> for <strong>express.js based applications</strong>.</p>
<p>This comparison is useful when you have decided to use external input validation library for your application built on <strong>expressjs </strong>and are somewhat not sure which one to use.</p>
<h3 id="who-is-what">Who is what?</h3>
<h4 id="joi">Joi</h4>
<p>Joi allows you to create <em>blueprints</em> or <em>schemas</em> for JavaScript objects (an object that stores information) to ensure <em>validation</em> of key information.</p>
<h4 id="express-validator">Express-validator</h4>
<p><em>express-validator</em> is a set of <a href="http://expressjs.com/" rel="noopener">express.js</a> middlewares that wraps <a href="https://github.com/chriso/validator.js" rel="noopener">validator.js</a> validator and sanitizer functions.</p>
<p>So by definition, we can say that:</p>
<ul>
<li>Joi can be used for creating schemas (just like we use mongoose for creating NoSQL schemas) and you can use it with plain Javascript objects. It's like a plug n play library and is easy to use.</li>
<li>On the other hand, <em>express-validator </em>uses <a href="https://github.com/chriso/validator.js" rel="noopener">validator.js</a> to validate expressjs routes, and it's mainly built for express.js applications. This makes this library more niche and provides out of box custom validation and sanitization. Also, I find it easy to understand personally :)</li>
</ul>
<p>Too many methods and API's for doing certain validation in Joi might make you feel overwhelmed so you might end up closing the tab.</p>
<p>But I may be wrong — so let’s keep opinions aside and compare both libraries.</p>
<h3 id="instantiation">Instantiation</h3>
<h4 id="joi-1">Joi</h4>
<p>In<em> </em>Joi<em>, </em>you need to use <code><strong>Joi.object()</strong></code><strong> </strong>to instantiate a Joi schema object to work with.</p>
<p>All schemas require <code>Joi.object()</code>to process validation and other Joi features.</p>
<p>You need to separately read <code>req.body</code> , <code>req.params</code> , <code>req.query</code> to request body, params, and query.</p><pre><code class="language-js">const Joi = require('joi');
const schema = Joi.object().keys({
// validate fields here
})</code></pre>
<h4 id="express-validator-1">Express-validator</h4>
<p>You can just require <em>express-validator </em>and<em> </em>start using its methods. You don't need to read values from <code>req.body</code> , <code>req.params</code> , and <code>req.query</code> separately.</p>
<p>You just need to use the <code>param, query, body</code> methods below to validate inputs respectively as you can see here:</p><pre><code class="language-js">const {
param, query, cookies, header
body, validationResult } = require('express-validator/check')
app.post('/user', [
// validate fields here
], (req, res) =&gt; {
const errors = validationResult(req);
if (!errors.isEmpty()) {
return res.status(422).json({ errors: errors.array() });
}
}</code></pre>
<h4 id="field-is-required">Field is required</h4>
<p>Let’s take a very basic example where we want to make sure that a <code>username</code> should be required <code>string</code> and is <code>alphaNumeric</code> with <code>min</code> and <code>max</code> characters.</p>
<ul>
<li><strong>Joi:</strong></li>
</ul><pre><code class="language-js">const Joi = require('joi');
const schema = Joi.object().keys({
username: Joi.string().alphanum().min(3).max(30).required()
})
app.post('/user', (req, res, next) =&gt; {
const result = Joi.validate(req.body, schema)
if (result.error) {
return res.status(400).json({ error: result.error });
}
});</code></pre>
<ul>
<li><strong>Express-validator</strong></li>
</ul><pre><code class="language-js">const { body, validationResult } = require('express-validator/check')
app.post('/user', [
body('username')
.isString()
.isAlphanumeric()
.isLength({min: 3, max: 30})
.exists(),
], (req, res) =&gt; {
const errors = validationResult(req);
if (!errors.isEmpty()) {
return res.status(422).json({ errors: errors.array() });
}
}</code></pre>
<h3 id="sanitization">Sanitization</h3>
<p>Sanitization is basically checking input to make sure it's free of noise, for example, we all have used <code>.trim()</code> on string to remove spaces.</p>
<p>Or if you have faced a situation where a number is coming in as <code>"1"</code> so in those cases, we want to sanitize and convert the type during runtime.</p>
<p>Sadly, Joi doesn’t provide sanitization out of the box but <em>express-validator </em>does.</p>
<h4 id="example-converting-to-mongodb-s-objectid">Example: converting to MongoDB’s ObjectID</h4><pre><code class="language-js">const { sanitizeParam } = require('express-validator/filter');
app.post('/object/:id',
sanitizeParam('id')
.customSanitizer(value =&gt; {
return ObjectId(value);
}), (req, res) =&gt; {   // Handle the request });</code></pre>
<h3 id="custom-validation">Custom Validation</h3>
<h4 id="joi-extend-extension-">Joi: <strong>.extend(</strong><code>extension</code><strong>)</strong></h4>
<p>This creates a new Joi instance customized with the extension(s) you provide included.</p>
<p>The extension makes use of some common structures that need to be described first:</p>
<ul>
<li><code>value</code> - the value being processed by Joi.</li>
<li><code>state</code> - an object containing the current context of validation.</li>
<li><code>key</code> - the key of the current value.</li>
<li><code>path</code> - the full path of the current value.</li>
<li><code>parent</code> - the potential parent of the current value.</li>
<li><code>options</code> - options object provided through <code><a href="https://github.com/hapijs/joi/blob/master/API.md#anyoptionsoptions" rel="noopener">any().options()</a></code> or <code><a href="https://github.com/hapijs/joi/blob/master/API.md#validatevalue-schema-options-callback" rel="noopener">Joi.validate()</a></code>.</li>
</ul>
<h4 id="extension">Extension</h4>
<p><code>extension</code> can be:</p>
<ul>
<li>a single extension object</li>
<li>a factory function generating an extension object</li>
<li>or an array of those</li>
</ul>
<p>Extension objects use the following parameters:</p>
<ul>
<li><code>name</code> - name of the new type you are defining, this can be an existing type. Required.</li>
<li><code>base</code> - an existing Joi schema to base your type on. Defaults to <code>Joi.any()</code>.</li>
<li><code>coerce</code> - an optional function that runs before the base, usually serves when you want to coerce values of a different type than your base. It takes 3 arguments <code>value</code>, <code>state</code> and <code>options</code>.</li>
<li><code>pre</code> - an optional function that runs first in the validation chain, usually serves when you need to cast values. It takes 3 arguments <code>value</code>, <code>state</code> and <code>options</code>.</li>
<li><code>language</code> - an optional object to add error definitions. Every key will be prefixed by the type name.</li>
<li><code>describe</code> - an optional function taking the fully formed description to post-process it.</li>
<li><code>rules</code> - an optional array of rules to add.</li>
<li><code>name</code> - name of the new rule. Required.</li>
<li><code>params</code> - an optional object containing Joi schemas of each parameter ordered. You can also pass a single Joi schema as long as it is a <code>Joi.object()</code>. Of course some methods such as <code>pattern</code> or <code>rename</code> won't be useful or won't work at all in this given context.</li>
<li><code>setup</code> - an optional function that takes an object with the provided parameters to allow for internal manipulation of the schema when a rule is set. You can optionally return a new Joi schema that will be taken as the new schema instance. At least one of either <code>setup</code> or <code>validate</code> must be provided.</li>
<li><code>validate</code> - an optional function to validate values that takes 4 parameters <code>params</code>, <code>value</code>, <code>state</code> and <code>options</code>. At least one of <code>setup</code> or <code>validate</code> must be provided.</li>
<li><code>description</code> - an optional string or function taking the parameters as an argument to describe what the rule is doing.</li>
</ul>
<p><strong>Example</strong>:</p><pre><code class="language-js">joi.extend((joi) =&gt; ({
base: joi.object().keys({
name: joi.string(),
age: joi.number(),
adult: joi.bool().optional(),
}),
name: 'person',
language: {
adult: 'needs to be an adult',
},
rules: [
{
name: 'adult',
validate(params, value, state, options) {
if (!value.adult) {
// Generate an error, state and options need to be passed
return this.createError('person.adult', {}, state, options);
}
return value; // Everything is OK
}
}
]
})</code></pre>
<h4 id="express-validator-2">Express-validator</h4>
<p>A custom validator may be implemented by using the chain method <code><a href="https://express-validator.github.io/docs/validation-chain-api.html#customvalidator" rel="noopener">.custom()</a></code>. It takes a validator function.</p>
<p>Custom validators may return Promises to indicate an async validation (which will be awaited upon), or <code>throw</code> any value/reject a promise to <a href="https://express-validator.github.io/docs/custom-error-messages.html#custom-validator-level" rel="noopener">use a custom error message</a>.</p><pre><code class="language-js">const {
param, query, cookies, header
body, validationResult } = require('express-validator/check')
app.get('/user/:userId', [
param('userId')
.exists()
.isMongoId()
.custom(val =&gt; UserSchema.isValidUser(val)),
], (req, res) =&gt; {
const errors = validationResult(req);
if (!errors.isEmpty()) {
return res.status(422).json({ errors: errors.array() });
}
}</code></pre>
<h3 id="conditional-validation">Conditional Validation</h3>
<p><em>express-validator </em>does not support conditional validation as of now, but there is a PR for that already you can check <a href="https://github.com/express-validator/express-validator/pull/658" rel="noopener">https://github.com/express-validator/express-validator/pull/658</a></p>
<p>Let’s see how it works in Joi:</p>
<h4 id="any-when-condition-options-"><code>any.when(condition, options)</code></h4>
<p><code><strong>any:</strong></code><strong> </strong>Generates a schema object that matches any data type.</p><pre><code class="language-js">const schema = Joi.object({
a: Joi.any().valid('x'),
b: Joi.any()
}).when(
Joi.object({ b: Joi.exist() })
.unknown(), {
then: Joi.object({
a: Joi.valid('y')
}),
otherwise: Joi.object({
a: Joi.valid('z')
})
});</code></pre>
<h4 id="alternatives-when-condition-options-"><code>alternatives.when(condition, options)</code></h4>
<p>Adds a conditional alternative schema type, either based on another key (not the same as <code>any.when()</code>) value, or a schema peeking into the current value, where:</p>
<ul>
<li><code>condition</code> - the key name or <a href="https://github.com/hapijs/joi/blob/master/API.md#refkey-options" rel="noopener">reference</a>, or a schema.</li>
<li><code>options</code> - an object with:</li>
<li><code>is</code> - the required condition joi type. Forbidden when <code>condition</code> is a schema.</li>
<li><code>then</code> - the alternative schema type to try if the condition is true. Required if <code>otherwise</code> is missing.</li>
<li><code>otherwise</code> - the alternative schema type to try if the condition is false. Required if <code>then</code> is missing.</li>
</ul><pre><code class="language-js">const schema = Joi
.alternatives()
.when(Joi.object({ b: 5 }).unknown(), {
then: Joi.object({
a: Joi.string(),
b: Joi.any()
}),
otherwise: Joi.object({
a: Joi.number(),
b: Joi.any()
})
});</code></pre>
<h3 id="nested-validation">Nested Validation</h3>
<p>When you want to validate an array of objects/items or just object keys</p>
<p>Both libraries support nested validation</p>
<p>Now what about express-validator?</p>
const { check } = require('express-validator/check');
const { sanitize } = require('express-validator/filter');
const app = express();
app.use(express.json());
app.post('/addresses', [
check('addresses.*.postalCode').isPostalCode(),
sanitize('addresses.*.number').toInt()
],
(req, res) =&gt; {   // Handle the request });</code></pre>
<p><strong>Joi</strong></p><pre><code class="language-js">const schema = Joi.object().keys({
addresses: Joi.array().items(
Joi.object().keys({
postalCode: Joi.string().required(),
}),
)
});</code></pre>
<h3 id="custom-error-messages">Custom Error Messages</h3>
<h4 id="joi-2">Joi</h4>
<h4 id="any-error-err-options-"><code>any.error(err, [options])</code></h4>
<p>Overrides the default joi error with a custom error</p><pre><code class="language-js">let schema = Joi.string().error(new Error('Was REALLY expecting a string'));</code></pre>
<h4 id="express-validator-3">Express-validator</h4><pre><code class="language-js">const { check } = require('express-validator/check');
app.post('/user', [
// ...some other validations...
check('password')
.isLength({ min: 5 }).withMessage('must be at 5 chars long')
.matches(/\d/).withMessage('must contain a number')
],
(req, res) =&gt; {   // Handle the request somehow });</code></pre>
<h3 id="conclusion">Conclusion</h3>
<p>I covered the most important parts of both libraries and you can decide yourself which one you want to use. Please let me know in the comments below if I left out anything important in the comparison.</p>
<p>I hope you find it helpful when deciding the next input validation module for your express.js application.</p>
<p>I wrote an in-depth article on it here: <a href="https://medium.freecodecamp.org/how-to-make-input-validation-simple-and-clean-in-your-express-js-app-ea9b5ff5a8a7" rel="noopener">how to validate inputs</a>. Do check it out.</p>
<p><em>Don’t hesitate to clap if you considered this a worthwhile read!</em></p>
<p><em>Originally published at <a href="https://101node.io/blog/javascript-validators-comparison-using-joi-vs-express-validator/" rel="noopener">101node.io</a> on March 31, 2019.</em></p>
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
