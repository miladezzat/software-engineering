---
card: "https://cdn-media-1.freecodecamp.org/images/1*WHhLDFPAo2DnMjPoSXV3sw.png"
tags: [JavaScript]
description: "by Asif Norzai"
author: "Milad E. Fahmy"
title: "Let s learn about Set and its unique functionality in JavaScript ?"
created: "2021-08-16T10:11:47+02:00"
modified: "2021-08-16T10:11:47+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-web-development tag-learning tag-programming tag-tech ">
<header class="post-full-header">
<h1 class="post-full-title">Let's learn about Set and its unique functionality in JavaScript ?</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*WHhLDFPAo2DnMjPoSXV3sw.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*WHhLDFPAo2DnMjPoSXV3sw.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*WHhLDFPAo2DnMjPoSXV3sw.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*WHhLDFPAo2DnMjPoSXV3sw.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*WHhLDFPAo2DnMjPoSXV3sw.png" alt="Let's learn about Set and its unique functionality in JavaScript ?">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
const newSet1 = new Set();
const newSet2 = new Set(null);
newSet.add("C");
newSet.add(1);
newSet.add("C");
// chain add functionality
newSet.add("H").add("C");
newSet.forEach(el =&gt; {
console.log(el);
// expected output: C
// expected output: 1
// expected output: H
});</code></pre><p><code><strong>has</strong></code><strong> </strong>checks to see if the value that you pass in exists in the <code>newSet</code> const. If the value does exist, it will return the Boolean <code>true</code>, and it’ll return <code>false</code> if it doesn’t</p><pre><code class="language-js">const newSet = new Set(["A", 2, "B", 4, "C"]);
console.log(newSet.has("A"));
// expected output: true
console.log(newSet.has(4));
// expected output: true
console.log(newSet.has(5));
// expected output: false</code></pre><p><code><strong>clear</strong></code><strong> </strong>&amp; <code><strong>delete</strong></code><strong> </strong>are two of the most important functionalities of <code>Set</code> if you want to either remove all entries or delete a specific value.</p><pre><code class="language-js">const newSet = new Set(["A", 2, "B", 4, "C"]);
newSet.delete("C");
// expected output: true
newSet.delete("C");
// expected output: false
newSet.size
// expected output: 4
newSet.clear();
// expected output: undefined
newSet.size
// expected output: 0</code></pre><p><code><strong>keys</strong></code><strong> </strong>and<strong> <code>values</code> </strong>both have the same functionality, which is weird if you think about how they behave with JS objects. They both return an <code>iterator</code> object. This means you can access the <code>.next()</code> method on it to get its value.</p><pre><code class="language-js">const newSet = new Set(null);
newSet.add("Apples");
newSet.add(12);
let iterator = newSet.keys();  // same as newSet.values();
console.log(iterator.next().value);
// expected output: Apples
console.log(iterator.next().value);
// expected output: 12
console.log(iterator.next().value);
// expected output: undefined</code></pre><h3 id="bring-it-all-together"><strong>Bring it all together</strong></h3><p>Let’s create a simple function for a hacker party. The function adds users to the list only if they have the approval of an admin. So you have to have an admin’s name with your entry, which is secret (not in this article, though). At the end of the program, it will say who is invited.</p><pre><code class="language-js">// The Admins
const allowedAdminUsers = new Set(["Naimat", "Ismat", "Azad"]);
// An empty Set, stored in memory
const finalList = new Set();
// A function to add users to permission list
const addUsers = ({user, admin}) =&gt; {
// Check to see if the admin is the admin
// list and that the user isn't already in the set
if(allowedAdminUsers.has(admin) &amp;&amp; !finalList.has(user)) {
// Return the users list at the end
return finalList.add(user);
}
// Console.log this message if the if the condition doesn't pass
console.log(`user ${user} is already in the list or isn't allowed`);
};
// Add some entries
addUsers({user: "Asep", admin: "Naimat"});
addUsers({user: "John", admin: "Ismat"});
// Lets add John again and this time that inner function console error will be shown
addUsers({user: "John", admin: "Azad"});
const inviationList = [...finalList].map(user =&gt;
`${user} is invited`);
console.log(inviationList);
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
