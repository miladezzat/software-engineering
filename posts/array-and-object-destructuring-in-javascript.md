---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c9bc8740569d1a4ca2de5.jpg"
tags: [JavaScript]
description: The destructuring assignment is a cool feature that came alon
author: "Milad E. Fahmy"
title: "How to Use Array and Object Destructuring in JavaScript"
created: "2021-08-15T19:30:12+02:00"
modified: "2021-08-15T19:30:12+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript ">
<header class="post-full-header">
<h1 class="post-full-title">How to Use Array and Object Destructuring in JavaScript</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c9bc8740569d1a4ca2de5.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9bc8740569d1a4ca2de5.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9bc8740569d1a4ca2de5.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9bc8740569d1a4ca2de5.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c9bc8740569d1a4ca2de5.jpg" alt="How to Use Array and Object Destructuring in JavaScript">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>The destructuring assignment is a cool feature that came along with ES6. Destructuring is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables. That is, we can extract data from arrays and objects and assign them to variables. </p>
<p>Why is this necessary?</p>
<p>Imagine we want extract data from an array. Previously, how would this be done?</p><pre><code class="language-javascript">let introduction = ["Hello", "I" , "am", "Sarah"];
let greeting = introduction[0];
let name = introduction[3];
console.log(greeting);//"Hello"
console.log(name);//"Sarah"
</code></pre>
<p>We can see that when we want to extract data from an array, we have to do the same thing over and over again. </p>
<p>The ES6 destucturing assignment makes it easier to extract this data. How is this so? First, we will discuss the destructuring assignment with arrays. Then we will move on to object destructuring. </p>
<p>Let's get started.</p>
<h2 id="basic-array-destructuring">Basic Array Destructuring</h2>
<p>If we want to extract data from arrays, it's quite simple using the destructuring assignment. </p>
<p>Let's refer to our first example for arrays. Instead of going through that repetitive process, we'd do this:</p><pre><code class="language-javascript">let introduction = ["Hello", "I" , "am", "Sarah"];
let [greeting, pronoun] = introduction;
console.log(greeting);//"Hello"
console.log(pronoun);//"I"
</code></pre>
<p>We can also do this with the same result.</p><pre><code class="language-javascript">let [greeting, pronoun] = ["Hello", "I" , "am", "Sarah"];
console.log(greeting);//"Hello"
console.log(pronoun);//"I"</code></pre>
<h3 id="declaring-variables-before-assignment">Declaring Variables before Assignment</h3>
<p>Variables can be declared before being assigned like this:</p><pre><code class="language-javascript">
let greeting, pronoun;
[greeting, pronoun] = ["Hello", "I" , "am", "Sarah"];
console.log(greeting);//"Hello"
console.log(pronoun);//"I"
</code></pre>
<p>Notice that the variables are set from left to right. So the first variable gets the first item in the array, the second variable gets the second variable in the array, and so on.</p>
<h3 id="skipping-items-in-an-array">Skipping Items in an Array</h3>
<p>What if we want to get the first and last item on our array instead of the first and second item, and we want to assign only two variables? This can also be done. Look at the example below:</p><pre><code class="language-javascript">let [greeting,,,name] = ["Hello", "I" , "am", "Sarah"];
console.log(greeting);//"Hello"
console.log(name);//"Sarah"
</code></pre>
<p>What just happened? </p>
<p>Look at the array on the left side of the variable assignment. Notice that instead of having just one comma, we have three. The comma separator is used to skip values in an array. So if you want to skip an item in an array, just use a comma.</p>
<p>Let's do another one. Let's skip the first and third item on the list. How would we do this?</p><pre><code class="language-javascript">let [,pronoun,,name] = ["Hello", "I" , "am", "Sarah"];
console.log(pronoun);//"I"
console.log(name);//"Sarah"
</code></pre>
<p>So the comma separator does the magic. So if we want to skip all items, we just do this:</p><pre><code class="language-javascript">let [,,,,] = ["Hello", "I" , "am", "Sarah"];
</code></pre>
<h3 id="assigning-the-rest-of-an-array">Assigning the rest of an array</h3>
<p>What if we want to assign some of the array to variables and the rest of the items in an array to a particular variable? In that case, we would do this:</p><pre><code class="language-javascript">let [greeting,...intro] = ["Hello", "I" , "am", "Sarah"];
console.log(greeting);//"Hello"
console.log(intro);//["I", "am", "Sarah"]
</code></pre>
<p>Using this pattern, you can unpack and assign the remaining part of an array to a variable.</p>
<h3 id="destructuring-assignment-with-functions">Destructuring Assignment with Functions</h3>
<p>We can also extract data from an array returned from a function. Let's say we have a function that returns an array like the example below:</p><pre><code class="language-javascript">function getArray() {
return ["Hello", "I" , "am", "Sarah"];
}
let [greeting,pronoun] = getArray();
console.log(greeting);//"Hello"
console.log(pronoun);//"I"
</code></pre>
<p>We get the same results.</p>
<h3 id="using-default-values">Using Default Values</h3>
<p>Default values can be assigned to the variables just in case the value extracted from the array is <code>undefined</code>:</p><pre><code class="language-javascript">let [greeting = "hi",name = "Sarah"] = ["hello"];
console.log(greeting);//"Hello"
console.log(name);//"Sarah"
</code></pre>
<p>So <code>name</code> falls back to "Sarah" because it is not defined in the array.</p>
<h3 id="swapping-values-using-the-destructuring-assignment">Swapping Values using the Destructuring Assignment</h3>
<p>One more thing. We can use the destructuring assignment to swap the values of variables:</p><pre><code class="language-javascript">let a = 3;
let b = 6;
[a,b] = [b,a];
console.log(a);//6
console.log(b);//3
</code></pre>
<p>Next, let's move on to Object Destructuring.</p>
<h2 id="object-destructuring">Object Destructuring</h2>
<p>First, let's see why there is a need for object destructuring. </p>
<p>Say we want to extract data from an object and assign to new variables. Prior to ES6, how would this be done?</p><pre><code class="language-javascript">let person = {name: "Sarah", country: "Nigeria", job: "Developer"};
let name = person.name;
let country = person.country;
let job = person.job;
console.log(name);//"Sarah"
console.log(country);//"Nigeria"
console.log(job);//Developer"
</code></pre>
<p>See how tedious it is to extract all the data. We have to repeatedly do the same thing. ES6 destructuring really saves the day. Let's jump right into it.</p>
<h3 id="basic-object-destructuring">Basic Object Destructuring</h3>
<p>Let's repeat the above example with ES6. Instead of assigning values one by one, we can use the object on the left to extract the data:</p><pre><code class="language-javascript">
let person = {name: "Sarah", country: "Nigeria", job: "Developer"};
let {name, country, job} = person;
console.log(name);//"Sarah"
console.log(country);//"Nigeria"
console.log(job);//Developer"
</code></pre>
<p>You'll get the same results. It is also valid to assign variables to an object that haven't been declared:</p><pre><code class="language-javascript">let {name, country, job} = {name: "Sarah", country: "Nigeria", job: "Developer"};
console.log(name);//"Sarah"
console.log(country);//"Nigeria"
console.log(job);//Developer"
</code></pre>
<h3 id="variables-declared-before-being-assigned">Variables declared before being assigned</h3>
<p>Variables in objects can be declared before being assigned with destructuring. Let's try that:</p><pre><code class="language-javascript">let person = {name: "Sarah", country: "Nigeria", job: "Developer"};
let name, country, job;
{name, country, job} = person;
console.log(name);// Error : "Unexpected token ="
</code></pre>
<p>Wait, what just happened?! Oh, we forgot to add <code>()</code> before the curly brackets.</p>
<p>The <code>( )</code> around the assignment statement is required syntax when using the object literal destructuring assignment without a declaration. This is because the <code>{}</code> on the left hand side is considered a block and not an object literal. So here's how to do this the right way:</p><pre><code class="language-javascript">let person = {name: "Sarah", country: "Nigeria", job: "Developer"};
let name, country, job;
({name, country, job} = person);
console.log(name);//"Sarah"
console.log(job);//"Developer"
</code></pre>
<p>It is also important to note that when using this syntax, the <code>()</code> should be preceded by a semicolon. Otherwise it might be used to execute a function from the previous line.</p>
<p>Note that the variables in the object on the left hand side should have the same name as a property key in the object <code>person</code>. If the names are different, we'll get <code>undefined</code>:</p><pre><code class="language-javascript">let person = {name: "Sarah", country: "Nigeria", job: "Developer"};
let {name, friends, job} = person;
console.log(name);//"Sarah"
console.log(friends);//undefined
</code></pre>
<p>But if we want to use a new variable name, well, we can.</p>
<h3 id="using-a-new-variable-name">Using a new Variable Name</h3>
<p>If we want to assign values of an object to a new variable instead of using the name of the property, we can do this:</p><pre><code class="language-javascript">let person = {name: "Sarah", country: "Nigeria", job: "Developer"};
let {name: foo, job: bar} = person;
console.log(foo);//"Sarah"
console.log(bar);//"Developer"
</code></pre>
<p>So the values extracted are passed to the new variables <code>foo</code> and <code>bar</code>.</p>
<h3 id="using-default-values-1">Using Default Values</h3>
<p>Default values can also be used in object destructuring, just in case a variable is <code>undefined</code> in an object it wants to extract data from:</p><pre><code class="language-javascript">let person = {name: "Sarah", country: "Nigeria", job: "Developer"};
let {name = "myName", friend = "Annie"} = person;
console.log(name);//"Sarah"
console.log(friend);//"Annie"
</code></pre>
<p>So if the value is not undefined, the variable stores the value extracted from the object as in the case of <code>name</code>. Otherwise, it used the default value as it did for <code>friend</code>.</p>
<p>We can also set default values when we assign values to a new variable:</p><pre><code class="language-javascript">let person = {name: "Sarah", country: "Nigeria", job: "Developer"};
let {name:foo = "myName", friend: bar = "Annie"} = person;
console.log(foo);//"Sarah"
console.log(bar);//"Annie"
</code></pre>
<p>So &nbsp;<code>name</code> was extracted from <code>person</code> and assigned to a different variable. <code>friend</code>, on the other hand, was <code>undefined</code> in <code>person</code>, so the new variable <code>bar</code> &nbsp;was assigned the default value.</p>
<h3 id="computed-property-name">Computed Property Name</h3>
<p>Computed property name is another object literal feature that also works for destructuring. You can specify the name of a property via an expression if you put it in square brackets:</p><pre><code class="language-javascript">let prop = "name";
let {[prop] : foo} = {name: "Sarah", country: "Nigeria", job: "Developer"};
console.log(foo);//"Sarah"
</code></pre>
<h3 id="combining-arrays-with-objects">Combining Arrays with Objects</h3>
<p>Arrays can also be used with objects in object destructuring:</p><pre><code class="language-javascript">let person = {name: "Sarah", country: "Nigeria", friends: ["Annie", "Becky"]};
let {name:foo, friends: bar} = person;
console.log(foo);//"Sarah"
console.log(bar);//["Annie", "Becky"]
</code></pre>
<h3 id="nesting-in-object-destructuring">Nesting in Object Destructuring</h3>
<p>Objects can also be nested when destructuring:</p><pre><code class="language-javascript">let person = {
name: "Sarah",
place: {
country: "Nigeria",
city: "Lagos" },
friends : ["Annie", "Becky"]
};
let {name:foo,
place: {
country : bar,
city : x}
} = person;
console.log(foo);//"Sarah"
console.log(bar);//"Nigeria"
</code></pre>
<h3 id="rest-in-object-destructuring">Rest in Object Destructuring</h3>
<p>The rest syntax can also be used to pick up property keys that are not already picked up by the destructuring pattern. Those keys and their values are copied into a new object:</p><pre><code class="language-javascript">let person = {name: "Sarah", country: "Nigeria", job: "Developer" friends: ["Annie", "Becky"]};
let {name, friends, ...others} = person;
console.log(name);//"Sarah"
console.log(friends);//["Annie", "Becky"]
console.log(others);// {country: "Nigeria", job: "Developer"}
</code></pre>
<p>Here, the remaining properties whose keys where not part of the variable names listed were assigned to the variable <code>others</code>. The rest syntax here is <code>...others</code>. <code>others</code> can be renamed to whatever variable you want.</p>
<p>One last thing – let's see how Object Destructing can be used in functions.</p>
<h3 id="object-destructuring-and-functions">Object Destructuring and Functions</h3>
<p>Object Destructuring can be used to assign parameters to functions:</p><pre><code class="language-javascript">function person({name: x, job: y} = {}) {
console.log(x);
}
person({name: "Michelle"});//"Michelle"
person();//undefined
person(friend);//Error : friend is not defined
</code></pre>
<p>Notice the <code>{}</code> on the right hand side of the parameters object. It makes it possible for us to call the function without passing any arguments. That is why we got <code>undefined</code>. If we remove it, we'll get an error message.</p>
<p>We can also assign default values to the parameters:</p><pre><code class="language-javascript">function person({name: x = "Sarah", job: y = "Developer"} = {}) {
console.log(x);
}
person({name});//"Sarah"
</code></pre>
<p>We can do a whole lot of things with Array and Object Destructuring as we have seen in the examples above.</p>
<p>Thank you for reading. :)</p>
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
