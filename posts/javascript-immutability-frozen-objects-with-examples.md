---
card: "/images/default.jpg"
tags: [JavaScript]
description: "In JavaScript, we use an Object to store multiple values as a complex data structure. You create an object with a pair of curly braces {}."
author: "Milad E. Fahmy"
title: "JavaScript Immutability – Frozen Objects in JS Explained with Examples"
created: "2021-08-15T19:15:58+02:00"
modified: "2021-08-15T19:15:58+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-immutability tag-object ">
<header class="post-full-header">
<h1 class="post-full-title">JavaScript Immutability – Frozen Objects in JS Explained with Examples</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2021/07/freeCodeCamp-Cover-5.png 300w,
/news/content/images/size/w600/2021/07/freeCodeCamp-Cover-5.png 600w,
/news/content/images/size/w1000/2021/07/freeCodeCamp-Cover-5.png 1000w,
/news/content/images/size/w2000/2021/07/freeCodeCamp-Cover-5.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2021/07/freeCodeCamp-Cover-5.png" alt="JavaScript Immutability – Frozen Objects in JS Explained with Examples">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>In JavaScript, we use an <code>Object</code> to store multiple values as a complex data structure. You create an object with a pair of curly braces <code>{}</code>. </p>
<p>An object can have one or more properties. Each of the properties is a key-value pair separated by a <code>colon(:)</code>. The key must be a string or JavaScript symbol type. The value can be of any type, including another object.</p>
<p>With that explanation of an object, let's create one to see how it works:</p><pre><code class="language-js">const user = {
'name': 'Bob',
'age': 27
}</code></pre>
<p>Here we have created an object with two properties (name, age) and their respective values. We have created a variable called <code>user</code> with the <code>const</code> keyword and we've assigned the object to it as a value.</p>
<p>By default, objects are <code>mutable</code>. This means once they're created, you can add a new property to them, modify the value of an existing property, or delete a property.</p>
<p>In my early years of programming, I found the terms <code>mutable</code> and <code>immutable</code> very confusing. Let me try explaining it in simple English. </p>
<p>Mutable is something you can change. Immutable is just the opposite of that. So, <code>mutability</code> is the ability to change over time. <code>Immutability</code> means something is unchanging over time.</p>
<p>There could be situations where you may not want an object to change programmatically. Therefore you'll want to make it immutable. </p>
<p>When an object is immutable, you can't add a new property to it, modify it, or delete an existing property. There is no way even to extend it. </p>
<p>This is what a <code>Frozen Object</code> is, which we'll learn about, practice with, and understand in this article.</p>
<p>I discussed frozen objects in a Twitter thread recently. Please feel free to have a look. This article will expand on the thread with more details and examples.</p>
<blockquote class="twitter-tweet" data-width="550">
<p lang="en" dir="ltr">Do you use a frozen object in JavaScript? There are some practical uses of it.<br><br>A Thread<br>🧵 👇<a href="https://twitter.com/hashtag/DEVCommunity?src=hash&amp;ref_src=twsrc%5Etfw">#DEVCommunity</a> <a href="https://twitter.com/hashtag/100DaysOfCode?src=hash&amp;ref_src=twsrc%5Etfw">#100DaysOfCode</a> <a href="https://twitter.com/hashtag/DEVCommunityIN?src=hash&amp;ref_src=twsrc%5Etfw">#DEVCommunityIN</a> <a href="https://twitter.com/hashtag/DEVCommunityNG?src=hash&amp;ref_src=twsrc%5Etfw">#DEVCommunityNG</a> <a href="https://twitter.com/hashtag/javascript?src=hash&amp;ref_src=twsrc%5Etfw">#javascript</a></p>— Tapas Adhikary (@tapasadhikary) <a href="https://twitter.com/tapasadhikary/status/1416995389169971200?ref_src=twsrc%5Etfw">July 19, 2021</a>
</blockquote>
</figure>
<h1 id="how-to-create-a-frozen-object-in-javascript">How to Create a Frozen Object in JavaScript</h1>
<p>You can freeze (make immutable) an object using the function <code>Object.freeze(obj)</code>. The object passed to the <code>freeze</code> method will become immutable. The <code>freeze()</code> method also returns the same object.</p>
<p>Let's create an object of supported languages:</p><pre><code class="language-js">const supportedLanguages = {
'af': 'Afrikaans',
'bn': 'Bengali',
'de': 'German',
'en': 'English',
'fr': 'French'
}
</code></pre>
<p>If you don't want this object to change after it is created, just use the <code>freeze</code> method to make it immutable.</p><pre><code class="language-js">const frozenSupportedLanguages = Object.freeze(supportedLanguages);
// The supportedLanguages and frozenSupportedLanguages are same
frozenSupportedLanguages === supportedLanguages; // returns true
</code></pre>
<p>Now let's try changing either of the objects and see what happens:</p><pre><code class="language-js">// Add a new property
supportedLanguages['kn'] = 'Kannada';
// Modify an existing property
supportedLanguages["af"] = 'something else';
// Delete a property
delete supportedLanguages.bn; // returns false
// log the object to the console
console.log(supportedLanguages); // Unchanged =&gt; {af: "Afrikaans", bn: "Bengali", en: "English", fr: "French"}
</code></pre>
<p>You'll get errors when you try changing a frozen object (immutable object) in the JavaScript <code>strict</code> environment.</p>
<h1 id="hold-on-doesn-t-the-const-keyword-do-the-same-thing">Hold On – doesn't the <code>const</code> keyword do the same thing?</h1>
<p>Ah, not quite. The <code>const</code> keyword and <code>Object.freeze()</code> are not the same things. When you assign an object to a variable created with the const keyword, you can not reassign another value. However, you can modify the assigned objects in whatever way you want.</p>
<p>Let's understand the difference with an example. This time, we will take the same <code>supportedLanguages</code> object but will not freeze it.</p><pre><code class="language-js">const supportedLanguages = {
'af': 'Afrikaans',
'bn': 'Bengali',
'de': 'German',
'en': 'English',
'fr': 'French'
}</code></pre>
<p>Now you can modify it like this:</p><pre><code class="language-js">// Add a new property
supportedLanguages['kn'] = 'Kannada';
// Modify an existing property
supportedLanguages["af"] = 'something else';
// Delete a property
delete supportedLanguages.bn; // returns true
// log the object to the console
console.log(supportedLanguages);</code></pre>
<p>Now the <code>supportedLanguages</code> object is changed to the following:</p>
<p>So, this change is allowed. But if you try to assign a new object to the <code>supportedLanguages</code> variable:</p><pre><code class="language-js">supportedLanguages = {'id': 'Indonesian'};</code></pre>
<p>You will get this error:</p>
<p>I hope the difference is clear now – it's also a frequently asked interview question.</p>
<h1 id="why-do-we-need-frozen-objects-in-javascript">Why Do We Need Frozen Objects in JavaScript?</h1>
<p>Again, we need frozen objects when we need immutability. In object-oriented programming, it is common to have APIs that we can not extend or modify outside the current context. </p>
<p>Do you remember the <code>final</code> keyword in Java? Or how in the Kotlin programming language, lists are immutable by default? Trying to mutate them at run time causes errors. Immutability is an essential concept to use in functional programming.</p>
<p>Immutability is often important in the JavaScript programming language as well. You may want a configuration object to be immutable, a fixed set of supported language for your applications, or anything else that you don't want to change at the run time.</p>
<h1 id="you-can-freeze-an-array-too">You Can Freeze an Array, Too</h1>
<p>In JavaScript, <code>Arrays</code> are objects under the hood. So you can also apply <code>Object.freeze()</code>to arrays to make them immutable.</p>
<p>Let's take an array of human senses:</p><pre><code class="language-js">const senses = ['touch', 'sight', 'hearing', 'smell', 'taste'];</code></pre>
<p>We can now make it immutable like this:</p><pre><code class="language-js">Object.freeze(senses);</code></pre>
<p>Now, try to push an element to that array. It's not possible.</p><pre><code class="language-js">senses.push('walking');</code></pre>
<p>The output will be the following error:</p>
<p>Try to remove an element from the array:</p><pre><code class="language-js">senses.pop();</code></pre>
<p>You'll get this error:</p>
<p>Please notice the error in both the cases. It clearly says, the add and delete property is not allowed as the underlying object is not extensible.</p>
<h1 id="object-freeze-is-shallow">Object Freeze is Shallow</h1>
<p>A JavaScript object property can have another object as its value. It can go to a deeper level down. </p>
<p>When we freeze an object, it is a <code>shallow</code> freeze. This means that only the top-level properties are frozen. If any of the property's values are another object, that inner object is not frozen. You can still make changes to it.</p>
<p>Let's understand this with the example of a configuration object:</p><pre><code class="language-js">const config = {
'db': 'postgresql',
'host': 'acme-ind.com',
'password': 'fake-password',
'port': 512,
'admin': {
'name': 'Tapas',
'rights': ['create', 'update', 'delete']
}
}</code></pre>
<p>The config object has properties like db, host, password, and port with simple string types values. However, the admin property has an object as the value. Now, let's freeze the config object.</p><pre><code class="language-js">Object.freeze(config);</code></pre>
<p>Now, let's try to change the db name.</p><pre><code class="language-js">config.db = 'redis';</code></pre>
<p>It is not allowed as the object is frozen. However, you can do this:</p><pre><code class="language-js">config.admin.name = 'atapas';</code></pre>
<p>Here we have changed the property of the nested object. As the object freezing is shallow in nature, it is not going to stop us from changing the nested object. So, if you log the object in the console, this is what you'll get:</p>
<h1 id="how-to-deep-freeze-an-object-in-javascript">How to Deep Freeze an Object in JavaScript</h1>
<p>But how do you deep freeze an object if you need or want to? You may want to freeze all the properties of the object to the deepest level possible, right? We can do that using recursion.</p>
<p>In<strong> </strong>programming,<strong> </strong>recursion is a methodology that uses a procedure, function, or algorithm to call itself. <a href="/news/understanding-recursion-in-programming/">Check out this article</a> for an in-depth understanding.</p>
<p>So, we can iterate through every property and recursively apply the freeze method to everything. It will make sure that the nested objects are also frozen. </p>
<p>To do that, you can write a simple function like this:</p><pre><code class="language-js">const deepFreeze = obj =&gt; {
Object.keys(obj).forEach(prop =&gt; {
if (typeof obj[prop] === 'object') deepFreeze(obj[prop]);
});
return Object.freeze(obj);
};
deepFreeze(config);</code></pre>
<h1 id="what-s-the-diffecrence-between-freeze-seal-and-preventextentions-">What's the Diffecrence Between freeze(), seal(), and preventExtentions()?</h1>
<p>With Object.freeze we achieve full immutability. But there are two other methods that provide object immutability, only partially.</p>
<ul>
<li><code>Object.seal</code> – We can not add a new property or delete existing properties of an object sealed with this method. But we can still update the value of existing properties.</li>
<li><code>Object.preventExtensions</code> – This method prevents new property creation. But you can update and delete existing properties.</li>
</ul>
<p>Here is a table to compare them:</p>
<table>
<thead>
<tr>
<th></th>
<th>Create</th>
<th>Read</th>
<th>Update</th>
<th>Delete</th>
</tr>
</thead>
<tbody>
<tr>
<td>freeze</td>
<td>❌</td>
<td>✔️</td>
<td>❌</td>
<td>❌</td>
</tr>
<tr>
<td>seal</td>
<td>❌</td>
<td>✔️</td>
<td>✔️</td>
<td>❌</td>
</tr>
<tr>
<td>preventExtensions</td>
<td>❌</td>
<td>✔️</td>
<td>✔️</td>
<td>✔️</td>
</tr>
</tbody>
</table>
<p></p>
<h1 id="how-to-unfreeze-a-frozen-object">How to UnFreeze a Frozen Object</h1>
<p>There is no straightforward ways to unfreeze a frozen object in JavaScript. </p>
<p>You can probably simulate an unfreeze by making a copy of the object maintaining the prototype. </p>
<p><a href="https://www.npmjs.com/package/object-unfreeze">Here is an NPM</a> package that does the same with a shallow copy.</p>
<h1 id="in-summary">In Summary</h1>
<p>To Summarize,</p>
<ul>
<li>We can freeze an object to make it immutable.</li>
<li>You use the method <code>Object.freeze</code> to freeze an object.</li>
<li>You can not create a new property, modify or delete an existing property, or extend the object when a freeze is applied.</li>
<li>Declaring a variable with the <code>const</code> keyword with an object value is not same as freezing the object.</li>
<li>You can freeze an array using the same <code>freeze</code> method.</li>
<li>The freeze method does a shallow freeze. Use recursion to do a deep freeze.</li>
<li>The <code>seal()</code> and <code>preventExtentions()</code> methods provide partial immutability.</li>
<li>Unfreezing is not supported in the language (yet).</li>
</ul>
<h1 id="before-we-end-">Before We End...</h1>
<p>That's all for now. I hope you've found this article insightful, and that it helps you understand object immutability more clearly.</p>
<p>Let's connect. You will find me active on <a href="https://twitter.com/tapasadhikary">Twitter (@tapasadhikary)</a>. Feel free to give a follow. I've also started sharing knowledge using my <a href="https://youtube.com/c/TapasAdhikary?sub_confirmation=1">YouTube channel</a>, so you can check it out, too.</p>
<p>You may also like these articles:</p>
<ul>
<li><a href="/news/the-javascript-array-handbook/">The JavaScript Array Handbook – JS Array Methods Explained with Examples</a></li>
<li><a href="https://blog.greenroots.info/a-practical-guide-to-object-destructuring-in-javascript">A practical guide to object destructuring in JavaScript</a></li>
<li><a href="https://blog.greenroots.info/javascript-equality-comparison-with-and-objectis">JavaScript: Equality comparison with ==, === and Object.is</a></li>
<li><a href="https://blog.greenroots.info/how-not-to-use-git-in-practice-ten-git-usages-you-should-know-to-avoid">How NOT to use Git in Practice. Ten Git usages, you should know to avoid.</a></li>
</ul>
<p></p>
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
