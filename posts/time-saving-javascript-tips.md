---
card: "/images/default.jpg"
tags: [JavaScript]
description: I've always wanted to create videos around my programming hob
author: "Milad E. Fahmy"
title: "5 JavaScript Tips That'll Help You Save Time"
created: "2021-08-15T19:27:57+02:00"
modified: "2021-08-15T19:27:57+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-tips tag-productivity tag-es6 ">
<header class="post-full-header">
<h1 class="post-full-title">5 JavaScript Tips That'll Help You Save Time</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/11/time-saving-javascript-tips.png 300w,
/news/content/images/size/w600/2020/11/time-saving-javascript-tips.png 600w,
/news/content/images/size/w1000/2020/11/time-saving-javascript-tips.png 1000w,
/news/content/images/size/w2000/2020/11/time-saving-javascript-tips.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/11/time-saving-javascript-tips.png" alt="5 JavaScript Tips That'll Help You Save Time">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>I've always wanted to create videos around my programming hobby. But I'm not a native English speaker, and I was scared to try.</p>
<p>But a few weeks ago, while I was preparing some JavaScript tips to start my YouTube journey, I wrote this list of time-saving tips. I hope they help you as they've helped me.</p>
<p>In this article, I'm going to share with you 5 useful JavaScript tips (are you ready to dive in? 😀).</p>
<p>And now, guess what? Some of these tips are on <a href="https://www.youtube.com/channel/UCSRuzHhjUaAnBb6_rmlr10g">my YouTube channel</a>📹! (here is <a href="https://www.youtube.com/playlist?list=PL-P9AMQZdy2aj3uLhjHagEsfTOrVqF7AR">the playlist</a>.</p>
<h2 id="objectdestructuring">Object Destructuring</h2>
<p>Destructuring is a feature that was introduced in ES6. It's one of the features you will use daily once you know how.</p>
<p>It helps you deal with three main issues:</p>
<ul>
<li><strong>Repetition.</strong> Every time you want to extract one object property and create a new variable, you create a new line.</li>
</ul>
<pre><code class="language-javascript">const user = {
firstName: "John",
lastName: "Doe",
password: "123",
};
// Wow... should we display
// John's password like that?
const firstName = user.firstName;
const lastName = user.lastName;
const password = user.password;
</code></pre>
<ul>
<li><strong>Accessibility.</strong> Each time you want to access an object property, you should write the path to it. (<strong>example:</strong> <code>user.firstName</code>, <code>user.family.sister</code>, and so on).</li>
<li><strong>Usage.</strong> As an example, when you create a new function, and you are only working with one property of an object.</li>
</ul>
<p>Now that you've seen what these three issues with objects are, how do you think you can solve them?</p>
<h3 id="howtosolvetherepetitionissue">How to Solve the Repetition Issue</h3>
<pre><code class="language-javascript">const user = {
firstName: "John",
lastName: "Doe",
password: "123",
};
const { firstName, lastName, password } = user;
console.log(firstName, lastName, password);
// Output: 'John', 'Doe', '123'
</code></pre>
<p>Destructuring is the process of extracting a property from an object by its key. By taking an existing key in your object, then placing it between two brackets (<code>{ firstName }</code>) you tell JavaScript:</p>
<p>"Hey JavaScript, I want to create a variable with the same name as my property. I want to create a variable <code>firstName</code> for the <code>firstName</code> property of my object."</p>
<blockquote>
<p><strong>Note:</strong> If you want to destructure an object, you should always use an existing key. Otherwise, it will not work.</p>
</blockquote>
<h3 id="howtosolvetheaccessibilityissue">How to Solve the Accessibility Issue</h3>
<pre><code class="language-javascript">const user = {
firstName: "John",
lastName: "Doe",
password: "123",
family: {
sister: {
firstName: "Maria",
},
},
};
// We access to the nested object `sister`
// and we extract the `firstName` property
const { firstName } = user.family.sister;
console.log(firstName);
// Output: 'Maria'
</code></pre>
<p>When you work with nested objects, it can become quite repetitive and wastes a lot of time accessing the same property many times.</p>
<p>Using destructuring, in one line only, you can reduce the property path to one variable.</p>
<h3 id="howtosolvetheusageissue">How to Solve the Usage Issue</h3>
<p>Now that you know how to destructure an object, let me show you how to extract properties directly in your function parameter definition.</p>
<p>If you know React, you're probably already familiar with it.</p>
<pre><code class="language-javascript">function getUserFirstName({ firstName }) {
return firstName;
}
const user = {
firstName: "John",
lastName: "Doe",
password: "123",
};
console.log(getUserFirstName(user));
// Output: 'John'
</code></pre>
<p>In the above example, we have a <code>getUserFirstName</code> function, and we know that it will only use one property of our object, <code>firstName</code>.</p>
<p>Rather than passing the whole object or creating a new variable, we can destructure the object's function parameters.</p>
<h2 id="howtomergeobjectsines6">How to Merge Objects in ES6</h2>
<p>In programming, you often have to tackle issues with data structures. Thanks to <a href="https://herewecode.io/blog/spread-operator-in-javascript/">the spread operator</a> introduced in ES6, object and array manipulations are more straightforward.</p>
<pre><code class="language-javascript">const user = {
firstName: "John",
lastName: "Doe",
password: "123",
};
const userJob = {
jobName: "Developer",
jobCountry: "France",
jobTimePerWeekInHour: "35",
};
</code></pre>
<p>Let's imagine that we have two objects:</p>
<ul>
<li><strong>User.</strong> An object defining general information about the user.</li>
<li><strong>UserJob.</strong> An object defining job information of the user.</li>
</ul>
<p>We want to create one object that only contains the properties of these two objects.</p>
<pre><code class="language-javascript">const user = {
firstName: "John",
lastName: "Doe",
password: "123",
};
const userJob = {
jobName: "Developer",
jobCountry: "France",
jobTimePerWeekInHour: "35",
};
const myNewUserObject = {
...user,
...userJob,
};
console.log(myNewUserObject);
// Output:
//{
//  firstName: 'John',
//  lastName: 'Doe',
//  password: '123',
//  jobName: 'Developer',
//  jobCountry: 'France',
//  jobTimePerWeekInHour: '35'
//}
</code></pre>
<p>Using the spread operator (<code>...</code>), we can extract all the properties of one object to another.</p>
<pre><code class="language-javascript">const user = {
firstName: "John",
lastName: "Doe",
password: "123",
};
const myNewUserObject = {
...user,
// We extract:
// - firstName
// - lastName
// - password
// and send them to
// a new object `{}`
};
</code></pre>
<h3 id="howtomergearrays">How to Merge Arrays</h3>
<pre><code class="language-javascript">const girlNames = ["Jessica", "Emma", "Amandine"];
const boyNames = ["John", "Terry", "Alexandre"];
const namesWithSpreadSyntax = [...girlNames, ...boyNames];
console.log(namesWithSpreadSyntax);
// Output: ['Jessica', 'Emma', 'Amandine', 'John', 'Terry', 'Alexandre']
</code></pre>
<p>Like objects, the spread operator (<code>...</code>) extracts all the elements from one array to another.</p>
<pre><code class="language-javascript">const girlNames = ["Jessica", "Emma", "Amandine"];
const newNewArray = [
...girlNames,
// We extract:
// - 'Jessica'
// - 'Emma'
// - 'Amandine'
// and send them to
// a new array `[]`
];
</code></pre>
<h3 id="howtoremovearrayduplicates">How to Remove Array Duplicates</h3>
<p>Because arrays are lists, you can have many items of the same value. If you want to remove duplicates in your array, you can follow one of the examples below.</p>
<p>One of them will be only one line thanks to ES6, but I let the "old" example in there so you can compare.</p>
<h4 id="howtoremovearrayduplicatestheoldway">How to remove array duplicates "the old way"</h4>
<pre><code class="language-javascript">const animals = ["owl", "frog", "canary", "duck", "duck", "goose", "owl"];
const uniqueAnimalsWithFilter = animals.filter(
// Parameters example: 'owl', 0, ['owl', 'frog', 'canary', 'duck', 'duck', 'goose', 'owl']
(animal, index, array) =&gt; array.indexOf(animal) == index
);
console.log(uniqueAnimalsWithSet);
// Output: ['owl', 'frog', 'canary', 'duck', 'goose']
</code></pre>
<p>In the above example, we want to clean the <code>animals</code> array by removing all duplicates.</p>
<p>We can do that by using the function <code>filter</code> with <code>indexOf</code> inside it.</p>
<p>The <code>filter</code> function takes all elements of the <code>animals</code> array (<code>animals.filter</code>). Then for each occurrence it provides:</p>
<ul>
<li>the current value (<strong>example:</strong> <code>duck</code>)</li>
<li>the index (<strong>example:</strong> 0)</li>
<li>the initial array (<strong>example:</strong> the <code>animals</code> array =&gt; <code>['owl', 'frog', 'canary', 'duck', 'duck', 'goose', 'owl']</code>)</li>
</ul>
<p>We will apply <code>indexOf</code> on the original array for each occurrence and give as a parameter the <code>animal</code> variable (the current value).</p>
<p><code>indexOf</code> will return the first index of the current value (<strong>example:</strong> for 'owl' the index is 0).</p>
<p>Then inside of the filter, we compare the value of <code>indexOf</code> to the current index. If it's the same, we return <code>true</code> otherwise <code>false</code>.</p>
<p><code>filter</code> will create a new array with only the elements where the returned value was <code>true</code>.</p>
<p>So, in our case: <code>['owl', 'frog', 'canary', 'duck', 'goose']</code>.</p>
<h3 id="howtoremovearrayduplicatesthenewway">How to remove array duplicates "the new way"</h3>
<p>Well, the "old way" is interesting to understand, but it's long and a bit hard. So let's check out the new way now:</p>
<pre><code class="language-javascript">const animals = ["owl", "frog", "canary", "duck", "duck", "goose", "owl"];
const uniqueAnimalsWithSet = [...new Set(animals)];
console.log(uniqueAnimalsWithSet);
// Output: ['owl', 'frog', 'canary', 'duck', 'goose']
</code></pre>
<p>Let's separate out the different steps:</p>
<pre><code class="language-javascript">// 1
const animals = ["owl", "frog", "canary", "duck", "duck", "goose", "owl"];
// 2
const animalsSet = new Set(animals);
console.log(animalsSet);
// Output: Set { 'owl', 'frog', 'canary', 'duck', 'goose' }
// 3
const uniqueAnimalsWithSet = [...animalsSet];
console.log(uniqueAnimalsWithSet);
// Output: ['owl', 'frog', 'canary', 'duck', 'goose']
</code></pre>
<p>We have an <code>animals</code> array, and we convert it into a <code>Set</code>, which is a special type of object in ES6.</p>
<p>The thing that's different about it is that it lets you create a collection of unique values.</p>
<blockquote>
<p><strong>Note:</strong> <code>Set</code> is a collection of unique values, but it's not an <code>Array</code>.</p>
</blockquote>
<p>Once we have our <code>Set</code> object with unique values, we need to convert it back to an array.</p>
<p>To do that, we use the spread operators to destructure it and send all the properties to a new <code>Array</code>.</p>
<p>Because the <code>Set</code> object has unique properties, our new array will also have unique values only.</p>
<h2 id="howtouseternaryoperators">How to Use Ternary Operators</h2>
<p>Have you already heard about a way to write small conditions in only one line?</p>
<p>If not, it's time to remove a lot of your <code>if</code> and <code>else</code> blocks and convert them to small ternary operations.</p>
<p>Let's look at an example with <code>console.log</code> to start. The idea is to check the value of a variable and conditionally display an output.</p>
<pre><code class="language-javascript">const colour = "blue";
if (colour === "blue") {
console.log(`It's blue!`);
} else {
console.log(`It's not blue!`);
}
</code></pre>
<p>This example is a typical case where you can use <a href="https://herewecode.io/blog/ternary-operator-in-javascript/">the ternary operator</a> to reduce these 5 <code>if</code> and <code>else</code> lines to only one!</p>
<p><strong>One line to rule them all!</strong></p>
<pre><code class="language-javascript">const colour = "blue";
colour === "blue" ? console.log(`It's blue!`) : console.log(`It's not blue!`);
// [condition] ? [if] : [else]
</code></pre>
<p>Ternary operators replace <code>if</code> and <code>else</code> for small conditions.</p>
<blockquote>
<p><strong>Note:</strong> It's not recommended to create complex conditions with ternary operators because it can reduce readability.</p>
</blockquote>
<p>Below is another example that uses ternary operators, but this time in the <code>return</code> of a function.</p>
<pre><code class="language-javascript">function sayHelloToAnne(name) {
return name === "Anne" ? "Hello, Anne!" : "It's not Anne!";
}
console.log(sayHelloToAnne("Anne"));
// Output: 'Hello, Anne!'
console.log(sayHelloToAnne("Gael"));
// Output: "It's not Anne!"
</code></pre>
<h2 id="wanttocontributehereshow">Want to Contribute? Here's How.</h2>
<p>You are welcome to contribute to this GitHub repository. Any contribution is appreciated, and it will help each of us improve our JavaScript skills.<br>
<a href="https://github.com/gael-thomas/javascript-awesome-tips">GitHub: JavaScript Awesome Tips</a>
</p>
<h2 id="conclusion">Conclusion</h2>
<p>I hope you learned some new things about JavaScript while reading this post.</p>
<p>If you want more content like this, you can <a href="https://twitter.com/gaelgthomas/">follow me on Twitter</a> where I tweet about web development, self-improvement, and my journey as a full stack developer!</p>
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
