---
card: "/images/default.jpg"
tags: [JavaScript]
description: In JavaScript, we use objects to store multiple values as a c
author: "Milad E. Fahmy"
title: "JavaScript Object Destructuring, Spread Syntax, and the Rest Parameter – A Practical Guide"
created: "2021-08-15T19:27:16+02:00"
modified: "2021-08-15T19:27:16+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript ">
<header class="post-full-header">
<h1 class="post-full-title">JavaScript Object Destructuring, Spread Syntax, and the Rest Parameter – A Practical Guide</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2021/02/freeCodeCamp-Cover-1.png 300w,
/news/content/images/size/w600/2021/02/freeCodeCamp-Cover-1.png 600w,
/news/content/images/size/w1000/2021/02/freeCodeCamp-Cover-1.png 1000w,
/news/content/images/size/w2000/2021/02/freeCodeCamp-Cover-1.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2021/02/freeCodeCamp-Cover-1.png" alt="JavaScript Object Destructuring, Spread Syntax, and the Rest Parameter – A Practical Guide">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>In JavaScript, we use objects to store multiple values as a complex data structure. There are hardly any JavaScript applications that do not deal with objects. </p>
<p>Web developers commonly extract values from an object property to use further in programming logic. With ES6, JavaScript introduced <code>object destructuring</code> to make it easy to create variables from an object's properties.</p>
<p>In this article, we will learn about <code>object destructuring</code> by going through many practical examples. We will also learn how to use the <code>spread syntax</code> and the <code>rest parameter</code>. I hope you enjoy it.</p>
<h1 id="object-destructuring-in-javascript">Object Destructuring in JavaScript</h1>
<p>We create objects with curly braces <code>{…}</code> and a list of properties. A property is a key-value pair where the key must be a string or a symbol, and the value can be of any type, including another object.</p><pre><code class="language-js">const user = {
'name': 'Alex',
'address': '15th Park Avenue',
'age': 43
}</code></pre>
<p>Here we have created a user object with three properties: name, address, and age. The real need in programming is to extract these property values and assign them to a variable. </p>
<p>For example, if we want to get the value of the <code>name</code> and <code>age</code> properties from the <code>user</code> object, we can do this: </p><pre><code class="language-js">let name = user.name;
let age = user.age;
console.log(name, age);</code></pre>
<p>This is undoubtedly a bit more typing. We have to explicitly mention the <code>name</code> and <code>age</code> property with the <code>user</code> object in dot(.) notation, then declare variables accordingly and assign them. </p>
<p>We can simplify this process using the new <code>object destructuring</code> syntax introduced in ES6.</p>
<blockquote>JavaScript Object Destructuring is the syntax for extracting values from an object property and assigning them to a variable. The destructuring is also possible for JavaScript Arrays.</blockquote>
<p>By default, the object key name becomes the variable that holds the respective value. So no extra code is required to create another variable for value assignment. Let's see how this works with examples.</p>
<h2 id="basic-object-destructuring-example">Basic Object Destructuring Example </h2>
<p>Let's take the same <code>user</code> object that we referred to above.</p><pre><code class="language-js">const user = {
'name': 'Alex',
'address': '15th Park Avenue',
'age': 43
}
</code></pre>
<p>The expression to extract the <code>name</code> property value using object destructuring is the following:</p><pre><code class="language-js">const { name } = user;
console.log(name); // Output, Alex</code></pre>
<p>As you see, on the left side of the expression, we pick the object property key (<code>name</code> in this case) and place it inside the <code>{}</code>. It also becomes the variable name to hold the property value. </p>
<p>The right side of the expression is the actual object that extracts the value. We also mention the keywords, <code>const</code>, <code>let</code> and so on to specify the variable's scope.</p>
<p>So, how do we extract values from more than one object property? Simple – we keep adding the object keys inside the <code>{}</code> with commas separating them. In the example below, we destructure both the <code>name</code> and <code>age</code> properties from the <code>user</code> object.</p><pre><code class="language-js">const user = {
'name': 'Alex',
'address': '15th Park Avenue',
'age': 43
}
const { name, age } = user;
console.log(name, age); // Output, Alex 43
</code></pre>
<h2 id="variable-declaration-rule">Variable Declaration Rule</h2>
<p>The keywords let and const are significant in object destructuring syntax. Consider the example below where we have omitted the let or const keyword. It will end up in the error, <code>Uncaught SyntaxError: Unexpected token '='</code>.</p><pre><code class="language-js">const user = {
'name': 'Alex',
'address': '15th Park Avenue',
'age': 43
}
{ name  } = user // Uncaught SyntaxError: Unexpected token '='</code></pre>
<p>What if we declare the variable in advance and then try to destructure the same name's key from the object? Nope, not much luck here either. It is still syntactically incorrect.</p><pre><code class="language-js">let name;
{ name  } = user; // Uncaught SyntaxError: Unexpected token '='</code></pre>
<p>In this case, the correct syntax is to put the destructuring expression inside parenthesis (<code>(...)</code>).</p>
<blockquote>Please note that the parenthesis are required when you want to omit the let or const keyword in the destructuring expression itself.</blockquote><pre><code class="language-js">let name;
({ name  } = user);
console.log(name); // Output, Alex</code></pre>
<h2 id="add-a-new-variable-default-value">Add a New Variable &amp; Default Value</h2>
<p>We can add a new variable while destructuring and add a default value to it. In the example below, the <code>salary</code> variable is non-existent in the <code>user</code> object. But we can add it in the destructuring expression and add a default value to it.</p><pre><code class="language-js">const user = {
'name': 'Alex',
'address': '15th Park Avenue',
'age': 43
}
const { name, age, salary=123455 } = user;
console.log(name, age, salary); // Output, Alex 43 123455</code></pre>
<p>The alternative way to do the above is this:</p><pre><code class="language-js">let salary = user.salary ? user.salary : 123455;</code></pre>
<p>There is a considerable advantage to the flexibility of adding a variable with a default value. The default value of this new variable is not necessarily going to be any constant value always. We can compute the value of it from other destructured property values.</p>
<p>Let's take a <code>user</code> object with two properties, <code>first_name</code> and <code>last_name</code>. We can now compute the value of a non-existent <code>full_name</code> using these two properties.</p><pre><code class="language-js">const user = {
'first_name': 'Alex',
'last_name': 'Brandos',
}
const { first_name, last_name, full_name=`${first_name} ${last_name}` } = user;
console.log(full_name); // Output, Alex Brandos</code></pre>
<p>Isn't that elegant and useful!</p>
<h2 id="add-aliases">Add Aliases</h2>
<p>You can give an alias name to your destructured variables. It comes in very handy if you want to reduce the chances of variable name conflicts. </p>
<p>In the example below, we have specified an alias name for the property <code>address</code> as <code>permanentAddress</code>.</p><pre><code class="language-js">const user = {
'name': 'Alex',
'address': '15th Park Avenue',
'age': 43
}
const { address: permanentAddress } = user;
console.log(permanentAddress); // 15th Park Avenue</code></pre>
<p>Please note, an attempt to access the variable <code>address</code> here will result in this error:</p>
<h2 id="nested-object-destructuring">Nested Object Destructuring</h2>
<p>An object can be nested. This means that the value of an object property can be another object, and so on. </p>
<p>Let's consider the <code>user</code> object below. It has a property called <code>department</code> with the value as another object. But let's not stop here! The <code>department</code> has a property with the key <code>address</code> whose value is another object. Quite a real-life scenario, isn't it?</p><pre><code class="language-js">const user = {
'name': 'Alex',
'address': '15th Park Avenue',
'age': 43,
'department':{
'name': 'Sales',
'Shift': 'Morning',
'address': {
'city': 'Bangalore',
'street': '7th Residency Rd',
'zip': 560001
}
}
}</code></pre>
<p>How do we extract the value of the <code>department</code> property? Ok, it should be straight-forward by now.</p><pre><code class="language-js">const { department } = user;</code></pre>
<p>And here's the output when you log <code>department</code>:</p>
<p>But, let's go one more nested level down. How do we extract the value of the <code>address</code> property of the <code>department</code>? Now, this may sound a bit tricky. However, if you apply the same <code>object destructuring</code> principles, you'll see that it's similar.</p><pre><code class="language-js">const { department: { address } } = user;</code></pre>
<p>Here's the output when you log <code>address</code>:</p>
<p>In this case, <code>department</code> is the key we focus on and we destructure the <code>address</code> value from it. Notice the <code>{}</code> around the keys you want to destructure. </p>
<p>Now it's time to take it to the next level. How do we extract the value of <code>city</code> from the department's address? Same principle again!</p><pre><code class="language-js">const { department: { address: { city } } } = user; </code></pre>
<p>The output when you log <code>city</code> is "Bangalore".</p>
<p>It can go any level nested down. </p>
<blockquote>The rule of thumb is to start with the top-level and go down in the hierarchy until you reach the value you want to extract.</blockquote>
<h2 id="dynamic-name-property">Dynamic Name Property</h2>
<p>Many times you may not know the property name (key) of an object while destructuring it. Consider this example. We have a <code>user</code> object:</p><pre><code class="language-js">
const user = {
'name': 'Alex',
'address': '15th Park Avenue',
'age': 43
}
</code></pre>
<p>Now the method <code>getValue(key)</code> takes a property key name and should return the value of it.</p><pre><code class="language-js">getValue('name') // Should return Alex
getValue('age') // Should return 43</code></pre>
<p>So, how do we write the definition of the <code>getValue(key)</code> method using the destructuring syntax? </p>
<p>Well, the syntax is very much the same as creating aliases. As we don't know the <code>key</code> name to hard-code in the destructuring syntax, we have to enclose it with square brackets (<code>[...]</code>).</p><pre><code class="language-js">const getValue = key =&gt; {
const { [key]: returnValue } = user;
return returnValue;
}</code></pre>
<h2 id="destructure-to-the-function-parameter">Destructure to the Function Parameter</h2>
<p>This one is my favorites, and it practically reduces lots of unnecessary code. You may want just a couple of specific property values to pass as a parameter to the function definition, not the entire object. Use object destructuring to function parameter in this case.</p>
<p>Let's take the <code>user</code> object example once again.</p><pre><code class="language-js">
const user = {
'name': 'Alex',
'address': '15th Park Avenue',
'age': 43
}</code></pre>
<p>Suppose we need a function to return a string using the user's name and age. Say something like <code>Alex is 43 year(s) old!</code> is the return value when we call this:</p><pre><code class="language-js">logDetails(user); </code></pre>
<p>We can simply use destructuring here to pass the <code>name</code> and <code>age</code> values, respectively, to the function definition. There is no need to pass the entire <code>user</code> object and then extract the values from it one by one. Please have a look:</p><pre><code class="language-js">function logDetails({name, age}) {
console.log(`${name} is ${age} year(s) old!`)
}
</code></pre>
<h2 id="destructure-function-return-value">Destructure Function Return Value</h2>
<p>When a function returns an object and you are interested in specific property values, use destructuring straight away. Here is an example:</p><pre><code class="language-js">
const getUser = () =&gt; {
return{
'name': 'Alex',
'address': '15th Park Avenue',
'age': 43
}
}
const { name, age } = getUser();
console.log(name, age); // Alex 43
</code></pre>
<p> It is similar to the basic object destructuring we saw in the beginning.</p>
<h2 id="destructure-in-loops">Destructure in Loops</h2>
<p>You can use object destructuring with the <code>for-of</code> loop. Let's take an array of user objects like this:</p><pre><code class="language-js">
const users = [
{
'name': 'Alex',
'address': '15th Park Avenue',
'age': 43
},
{
'name': 'Bob',
'address': 'Canada',
'age': 53
},
{
'name': 'Carl',
'address': 'Bangalore',
'age': 26
}
];</code></pre>
<p>We can extract the property values with object destructuring using the <code>for-of</code> loop.</p><pre><code class="language-js">for(let { name, age } of users) {
console.log(`${name} is ${age} years old!`);
}</code></pre>
<p>This is the output:</p>
<h2 id="the-console-object">The <code>Console</code> object</h2>
<p>In JavaScript, <code>console</code> is a built-in object supported by all browsers. If you have noticed, the <code>console</code> object has many properties and methods, and some are very popular, like <code>console.log()</code>.</p>
<p>Using the destructuring object syntax, we can simplify the uses of these methods and properties in our code. How about this?</p><pre><code class="language-js">const { log, warn, error } = console;
log('I log into the browser console');
warn('I am a warning');
error('I am an error');</code></pre>
<h1 id="spread-syntax-in-javascript">Spread Syntax in JavaScript</h1>
<p>The Spread Syntax (also known as the Spread Operator) is another excellent feature of ES6. As the name indicates, it takes an iterable (like an array) and expands (spreads) it into individual elements. </p>
<p>We can also expand objects using the spread syntax and copy its <code>enumerable</code> properties to a new object. </p>
<p>Spread syntax helps us clone an object with the most straightforward syntax using the curly braces and three dots <code>{...}</code>.</p><pre><code class="language-js">const clone_some_object = {...some_object}</code></pre>
<p>With spread syntax we can clone, update, and merge objects in an <code>immutable</code> way. The immutability helps reduce any accidental or unintentional changes to the original (Source) object.</p>
<blockquote>The Object Destructuring and Spread syntaxes are not the same thing in JavaScript.</blockquote>
<h2 id="create-a-clone-of-an-object">Create a Clone of an Object</h2>
<p>We can create a cloned instance of an object using the spread syntax like this:</p><pre><code class="language-js">
const user = {
'name': 'Alex',
'address': '15th Park Avenue',
'age': 43
}
const clone = {...user} // Output, {name: "Alex", address: "15th Park Avenue", age: 43}
clone === user; // Output, false
</code></pre>
<p>You can alternatively use <code>object.assign()</code> to create a clone of an object. However, the spread syntax is much more precise and much shorter.</p>
<blockquote>The spread syntax performs a shallow copy of the object. This means that none of the nested object instances are cloned.</blockquote>
<h2 id="add-properties-to-objects">Add Properties to Objects</h2>
<p>We can add a new property (key-value pair) to the object using the <code>spread syntax</code>. Note that the actual object never gets changed. The new property gets added to the cloned object.</p>
<p>In the example below, we are adding a new property (<code>salary</code>) using the spread syntax.</p><pre><code class="language-js">
const user = {
'name': 'Alex',
'address': '15th Park Avenue',
'age': 43
}
// Add a new property salary
const updatedUser = {...user, salary:12345}; // {name: "Alex", address: "15th Park Avenue", age: 43, salary: 12345}
// Original object is unchanged
console.log(user); // {name: "Alex", address: "15th Park Avenue", age: 43}
</code></pre>
<h2 id="update-properties">Update Properties</h2>
<p>We can also update an existing property value using the spread syntax. Like the add operation, the update takes place on the object's cloned instance, not on the actual object.</p>
<p>In the example below, we are updating the value of the <code>age</code> property:</p><pre><code class="language-js">
const user = {
'name': 'Alex',
'address': '15th Park Avenue',
'age': 43
}
const updatedUser = {...user, age:56}; // {name: "Alex", address: "15th Park Avenue", age: 56}
console.log(user); // {name: "Alex", address: "15th Park Avenue", age: 43}
</code></pre>
<h2 id="update-nested-objects">Update Nested Objects</h2>
<p>As we have seen, updating an object with the spread syntax is easy, and it doesn't mutate the original object. However, it can be a bit tricky when you try to update a nested object using the spread syntax. Let's understand it with an example.</p>
<p>We have a <code>user</code> object with a property <code>department</code>. The value of the <code>department</code> property is an object which has another nested object with its <code>address</code> property.</p><pre><code class="language-js">
const user = {
'name': 'Alex',
'address': '15th Park Avenue',
'age': 43,
'department':{
'name': 'Sales',
'Shift': 'Morning',
'address': {
'city': 'Bangalore',
'street': '7th Residency Rd',
'zip': 560001
}
}
}
</code></pre>
<p>Now, how can we add a new property called, <code>number</code> with a value of, say, <code>7</code> for the <code>department</code> object? Well, we might try out the following code to achieve it (but that would be a mistake):</p><pre><code class="language-js">const updated = {
...user,
department: {'number': 7}
}
console.log(updated);</code></pre>
<p>As you execute it, you will realize that the code will replace the entire department object with the new value as, <code>{'number': 7}</code>. This is not what we wanted!</p>
<p>How do we fix that? We need to spread the properties of the nested object as well as add/update it. Here is the correct syntax that will add a new property <code>number</code> with the value <code>7</code> to the <code>department</code> object without replacing its value:</p><pre><code class="language-js">const updated = {
...user,
department: {
...user.department,
'number': 7
}
};
console.log(updated);</code></pre>
<p>The output is the following:</p>
<h2 id="combine-or-merge-two-objects">Combine (or Merge) two Objects</h2>
<p>The last practical use of the spread syntax in JavaScript objects is to combine or merge two objects. obj_1 and obj_2 can be merged together using the following syntax:</p><pre><code class="language-js">const merged = {...obj_1, ...obj_2};</code></pre>
<p>Note that this way of merging performs a <code>shallow merge</code>. This means that if there is a common property between both the objects, the property value of obj_2 will replace the property value of obj_1 in the merged object.</p>
<p>Let's take the <code>user</code> and <code>department</code> objects to combine (or merge) them together.</p><pre><code class="language-js">
const user = {
'name': 'Alex',
'address': '15th Park Avenue',
'age': 43
}
const department = {
'id': '001',
'Shift': 'Morning'
}
</code></pre>
<p>Merge the objects using the spread syntax, like this:</p><pre><code class="language-js">const completeDetails = {...user, ...department};
console.log(completeDetails);</code></pre>
<p>The output will be the following:</p>
<p>If we change the <code>department</code> object like this:</p><pre><code class="language-js">const department = {
'name': 'Sales',
'Shift': 'Morning'
}</code></pre>
<p>Now try to combine them and observe the combined object output:</p><pre><code class="language-js">const completeDetails = {...user, ...department};
console.log(completeDetails);</code></pre>
<p>The output will be:</p>
<p>The <code>name</code> property value of the <code>user</code> object is replaced by the <code>name</code> property value of the <code>department</code> object in the merged object output. So be careful of using it this way. </p>
<p>As of now, you need to implement the <code>deep-merge</code> of objects by yourself or make use of a library like <code>lodash</code> to accomplish it.</p>
<h1 id="the-rest-parameter-in-javascript">The Rest Parameter in JavaScript</h1>
<p>The <code>Rest</code> parameter is kind of opposite to the <code>spread</code> syntax. While spread syntax helps expand or spread elements and properties, the rest parameter helps collect them together. </p>
<p>In the case of objects, the rest parameter is mostly used with destructuring syntax to consolidate the remaining properties in a new object you're working with.</p>
<p>Let's look at an example of the following <code>user</code> object:</p><pre><code class="language-js">
const user = {
'name': 'Alex',
'address': '15th Park Avenue',
'age': 43
}
</code></pre>
<p>We know how to destructure the <code>age</code> property to create a variable and assign the value of it. How about creating another object at the same time with the remaining properties of the <code>user</code> object? Here you go:</p><pre><code class="language-js">
const {age, ...rest} = user;
console.log(age, rest);</code></pre>
<p>The output will be:</p>
<p>In the output we see that the <code>age</code> value is <code>43</code>. The <code>rest parameter</code> consolidated the rest of the <code>user</code> object properties, <code>name</code> and <code>address</code>, in a separate object.</p>
<h1 id="in-summary">In Summary</h1>
<p>To summarize,</p>
<ul>
<li>Object destructuring is new syntax introduced in ES6. It helps create variables by extracting the object's properties in a much simpler way.</li>
<li>If you are working with (or planning to use) a framework/library like <code>angular</code>, <code>react</code>, or <code>vue</code>, you will be using a lot of object destructuring syntax.</li>
<li>Object destructuring and Spread syntax are not the same thing.</li>
<li><code>Spread</code> syntax (also known as the Spread Operator) is used to copy the enumerable properties of an object to create a clone of it. We can also update an object or merge with another object using the spread syntax.</li>
<li>The <code>Rest</code> parameter is kind of the opposite of the <code>Spread</code> syntax. It helps to consolidate (or collect) the remaining object properties into a new object while destructuring is done.</li>
</ul>
<h2 id="before-we-go">Before we go</h2>
<p>I hope you've found this article insightful, and that it helps you start using these concepts more effectively. Let's connect. You will find me active on <a href="https://twitter.com/tapasadhikary">Twitter (@tapasadhikary)</a>. Please feel free to give a follow.</p>
<p>You can find all the source code examples used in this article in my GitHub repository - <a href="https://github.com/atapas/js-tips-tricks/blob/master/object-destructuring.js">js-tips-tricks</a>. Are you interested in doing some hands-on coding based on what we have learned so far? Please have a <a href="https://github.com/atapas/js-tips-tricks/blob/master/quiz-od.js">look at the quiz here</a>, and you may find it interesting.</p>
<p>You may also like these articles:</p>
<ul>
<li><a href="/news/learn-something-new-every-day-as-a-software-developer/">How to Learn Something New Every Day as a Software Developer</a></li>
<li><a href="https://blog.greenroots.info/how-to-find-blog-content-ideas-effortlessly-ckghrjv5200o7rhs1ewn40102">How to find blog content ideas effortlessly?</a></li>
<li><a href="https://blog.greenroots.info/why-do-you-need-to-do-side-projects-as-a-developer-ckhn5m5km05teajs1fvjd7u5f">Why do you need to do Side Projects as A Developer?</a></li>
<li><a href="https://blog.greenroots.info/16-side-project-github-repositories-you-may-find-useful-ckk50hic406quhls1dui2d6sd">16 side project GitHub repositories you may find useful</a></li>
</ul>
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
