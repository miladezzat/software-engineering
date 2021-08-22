---
card: "/images/default.jpg"
tags: [JavaScript]
description: You can group related data together into a single data struct
author: "Milad E. Fahmy"
title: "JavaScript Object Keys Tutorial – How to Use a JS Key-Value Pair"
created: "2021-08-15T19:28:04+02:00"
modified: "2021-08-15T19:28:04+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-object ">
<header class="post-full-header">
<h1 class="post-full-title">JavaScript Object Keys Tutorial – How to Use a JS Key-Value Pair</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/11/objects.jpg 300w,
/news/content/images/size/w600/2020/11/objects.jpg 600w,
/news/content/images/size/w1000/2020/11/objects.jpg 1000w,
/news/content/images/size/w2000/2020/11/objects.jpg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/11/objects.jpg" alt="JavaScript Object Keys Tutorial – How to Use a JS Key-Value Pair">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>You can group related data together into a single data structure by using a JavaScript object, like this:</p>
height: "4 feet",
weight: "30 pounds",
color: "brown",
material: "wood",
};
</code></pre>
<p>An object contains properties, or key-value pairs. The <code>desk</code> object above has four properties. Each property has a name, which is also called a key, and a corresponding value. </p>
<p>For instance, the key <code>height</code><strong> </strong>has the value <code>"4 feet"</code>. Together, the key and value make up a single property. </p>
</code></pre>
<p>The <code>desk</code> object contains data about a desk. In fact, this is a reason why you’d use a JavaScript object: to store data. It’s also simple to retrieve the data that you store in an object. These aspects make objects very useful. </p>
<p>This article will get you up and running with JavaScript objects:</p>
<ul>
<li>how to create an object </li>
<li>how to store data in an object</li>
<li>and retrieve data from it.</li>
</ul>
<p>Let’s start by creating an object.</p>
<h1 id="how-to-create-an-object-in-javascript">How to Create an Object in JavaScript</h1>
<p>I'll create an object called <code>pizza</code> below, and add key-value pairs to it. </p>
topping: "cheese",
sauce: "marinara",
size: "small"
};
</code></pre>
<p>The keys are to the left of the colon<strong> <code>:</code></strong> and the values are to the right of it. Each key-value pair is a <code>property</code>. There are three properties in this example:</p>
<ul>
<li>The key <strong>topping</strong> has a value <strong>“cheese”</strong>.</li>
<li>The key <strong>sauce </strong>has a value<strong> “marinara”</strong>.</li>
<li>The key <strong>size </strong>has a value<strong> “small”</strong>.</li>
</ul>
<p>Each property is separated by a comma. All of the properties are wrapped in curly braces. </p>
<p>This is the basic object syntax. But there are a few rules to keep in mind when creating JavaScript objects.</p>
<h3 id="object-keys-in-javascript">Object Keys in JavaScript</h3>
<p>Each key in your JavaScript object must be a string, symbol, or number.</p>
<p>Take a close look at the example below. The key names <strong><code>1</code></strong> and <strong><code>2</code> </strong>are actually coerced into strings.</p>
1: "apple",
2: "oranges"
};
</code></pre>
<p>It’s a difference made clear when you print the object.</p>
//Result: { '1': 'apple', '2': 'oranges' }
</code></pre>
<p>There’s another rule to keep in mind about key names: if your key name contains spaces, you need to wrap it in quotes.</p>
<p>Take a look at the <code>programmer</code> object below. Notice the last key name, <code>"current project name"</code><strong> </strong>. This key name contains spaces so, I wrapped it in quotes.</p>
firstname: "Phil",
age: 21,
backendDeveloper: true,
languages: ["Python", "JavaScript", "Java", "C++"],
"current project name": "The Amazing App"
};
</code></pre>
<h3 id="object-values-in-javascript">Object Values in JavaScript</h3>
<p>A value, on the other hand, can be any data type, including an array, number, or boolean. The values in the above example contain these types: string, integer, boolean, and an array.</p>
<p>You can even use a function as a value, in which case it’s known as a method. <code>sounds()</code>, in the object below, is an example. </p>
type: "cat",
name: "kitty",
sounds() { console.log("meow meow") }
};
</code></pre>
<p>Now say you want to add or delete a key-value pair. Or you simply want to retrieve an object’s value.</p>
<p>You can do these things by using dot or bracket notation, which we’ll tackle next.</p>
<h1 id="how-dot-notation-and-bracket-notation-work-in-javascript">How Dot Notation and Bracket Notation Work in JavaScript</h1>
<p>Dot notation and bracket notation are two ways to access and use an object’s properties. You’ll probably find yourself reaching for dot notation more often, so we'll start with that.</p>
<h3 id="how-to-add-a-key-value-pair-with-dot-notation-in-javascript">How to Add a Key-Value Pair with Dot Notation in JavaScript</h3>
<p>I'll create an empty <code>book</code><strong> </strong>object below.</p>
</code></pre>
<p>To add a key-value pair using dot notation, use the syntax:</p>
<p><strong> </strong><code>objectName.keyName = value</code></p>
<p>This is the code to add the key (author) and value ("Jane Smith") to the <code>book</code> object: </p>
</code></pre>
<p>Here's a breakdown of the above code:</p>
<ul>
<li><code>book</code> is the object's name</li>
<li><code>.</code> (dot)</li>
<li><code>author</code> is the key name </li>
<li><code>=</code> (equals)</li>
<li><code>"Jane Smith"</code> is the value</li>
</ul>
<p>When I print the book object, I’ll see the newly added key-value pair.</p>
//Result: { author: 'Jane Smith' }
</code></pre>
<p>I’ll add another key-value pair to the <code>book</code> object.</p>
</code></pre>
<p>The <code>book</code> object now has two properties.</p>
//Result: { author: 'Jane Smith', publicationYear: 2006 }
</code></pre>
<h3 id="how-to-access-data-in-a-javascript-object-using-dot-notation">How to Access Data in a JavaScript Object Using Dot Notation</h3>
<p>You can also use dot notation on a key to <em>access</em> the related value. </p>
<p>Consider this <code>basketballPlayer</code><strong> </strong>object.</p>
name: "James",
averagePointsPerGame: 20,
height: "6 feet, 2 inches",
position: "shooting guard"
};
</code></pre>
<p>Say you want to retrieve the value “shooting guard.” This is the syntax to use: </p>
<p><code>objectName.keyName</code></p>
<p>Let's put this syntax to use to get and print the "shooting guard" value.</p>
//Result: shooting guard
</code></pre>
<p>Here's a breakdown of the above code:</p>
<ul>
<li><code>basketballPlayer</code> is the object's name</li>
<li><code>.</code> (dot)</li>
<li><code>position</code> is the key name</li>
</ul>
<p>This is another example.</p>
//Result: James
</code></pre>
<h3 id="how-to-delete-a-key-value-pair-in-javascript">How to Delete a Key-Value Pair in JavaScript</h3>
<p>To delete a key-value pair use the <code>delete</code> operator. This the syntax: </p>
<p><code>delete objectName.keyName</code></p>
<p>So to delete the <code>height</code><strong> </strong>key and its value from the <code>basketballPlayer</code> object, you’d write this code: </p>
</code></pre>
<p>As a result, the <code>basketballPlayer</code> object now has three key-value pairs.</p>
//Result: { name: 'James', averagePointsPerGame: 20, position: 'shooting guard' }
</code></pre>
<p>You’ll probably find yourself reaching for dot notation frequently, though there are certain requirements to be aware of.</p>
<p>When using dot notation, key names can’t contain spaces, hyphens, or start with a number.</p>
<p>For example, say I try to add a key that contains spaces using dot notation. I’ll get an error.</p>
//Results in an error
</code></pre>
<p>So dot notation won’t work in every situation. That’s why there’s another option: bracket notation.</p>
<h3 id="how-to-add-a-key-value-pair-using-bracket-notation-in-javascript">How to Add a Key-Value Pair Using Bracket Notation in JavaScript</h3>
<p>Just like dot notation, you can use bracket notation to add a key-value pair to an object. </p>
<p>Bracket notation offers more flexibility than dot notation. That’s because key names <em>can </em>include spaces and hyphens, and they can start with numbers.</p>
<p>I'll create an <code>employee</code><strong> </strong>object below.</p>
</code></pre>
<p>Now I want to add a key-value pair using bracket notation. This is the syntax: </p>
<p><code>objectName[“keyName”] = value</code></p>
<p>So this is how I’d add the key (occupation) and value (sales) to the employee object: </p>
</code></pre>
<p>Here's a breakdown of the above code:</p>
<ul>
<li><code>employee</code> is the object's name</li>
<li><code>"occupation"</code> is the key name </li>
<li><code>=</code> (equals)</li>
<li><code>"sales"</code> is the value</li>
</ul>
<p>Below are several more examples that use bracket notation's flexibility to add a variety of key-value pairs.</p>
employee["travels frequently"] = true;
//Add key name that starts with a number and includes a hyphen
employee["1st-territory"] = "Chicago";
//Add a key name that starts with a number
employee["25"] = "total customers";
</code></pre>
<p>When I print the <code>employee</code> object, it looks like this:</p>
'25': 'total customers',
occupation: 'sales',
'travels frequently': true,
'1st-territory': 'Chicago'
}
</code></pre>
<p>With this information in mind, we can add the “shooting percentage” key to the <code>basketballPlayer</code> object from above.</p>
name: "James",
averagePointsPerGame: 20,
height: "6 feet, 2 inches",
position: "shooting guard"
};
</code></pre>
<p>You may remember that dot notation left us with an error when we tried to add a key that included spaces.</p>
//Results in an error
</code></pre>
<p>But bracket notation leaves us error-free, as you can see here:</p>
</code></pre>
<p>This is the result when I print the object:</p>
name: 'James',
averagePointsPerGame: 20,
height: '6 feet, 2 inches',
position: 'shooting guard',
'shooting percentage': '75%'
}
</code></pre>
<h3 id="how-to-access-data-in-a-javascript-object-using-bracket-notation">How to Access Data in a JavaScript Object Using Bracket Notation</h3>
<p>You can also use bracket notation on a key to <em>access </em>the related value.</p>
<p>Recall the <code>animal</code> object from the start of the article.</p>
type: "cat",
name: "kitty",
sounds() { console.log("meow meow") }
};
</code></pre>
<p>Let's get the value associated with the key, <code>name</code>. To do this, wrap the key name quotes and put it in brackets. This is the syntax: </p>
<p><code>objectName[“keyName”]</code></p>
<p>Here's the code you'd write with bracket notation: <code>animal["name"];</code>. </p>
<p>This is a breakdown of the above code:</p>
<ul>
<li><code>animal</code> is the object's name</li>
<li><code>["name"]</code> is the key name enclosed in square brackets</li>
</ul>
<p>Here’s another example.</p>
//Result:
meow meow
undefined
</code></pre>
<p>Note that <code>sounds()</code><strong> </strong>is a method, which is why I added the parentheses at the end to invoke it.</p>
<p>This is how you’d invoke a method using dot notation.</p>
//Result:
meow meow
undefined
</code></pre>
<h1 id="javascript-object-methods">JavaScript Object Methods</h1>
<p>You know how to access specific properties. But what if you want <em>all </em>of the keys or <em>all</em> of the values from an object?</p>
<p>There are two methods that will give you the information you need.</p>
name: "Jessica",
age: 20,
milesPerWeek: 40,
race: "marathon"
};
</code></pre>
<p>Use the <code>Object.keys()</code> method to retrieve all of the key names from an object.</p>
<p>This is the syntax:</p>
<p><code>Object.keys(objectName)</code></p>
<p>We can use this method on the above <code>runner</code> object.</p>
</code></pre>
<p>If you print the result, you’ll get an array of the object’s keys.</p>
//Result: [ 'name', 'age', 'milesPerWeek', 'race' ]
</code></pre>
<p>Likewise, you can use the <code>Object.values()</code> method to get all of the values from an object. This is the syntax: </p>
<p><code>Object.values(objectName)</code></p>
<p>Now we'll get all of the values from the <code>runner</code> object.</p>
//Result: [ 'Jessica', 20, 40, 'marathon' ]
</code></pre>
<p>We’ve covered a lot of ground. Here’s a summary of the key ideas:</p>
<p><strong>Objects:</strong></p>
<ul>
<li>Use objects to store data as properties (key-value pairs).</li>
<li>Key names must be strings, symbols, or numbers.</li>
<li>Values can be any type.</li>
</ul>
<p><strong>Access object properties:</strong></p>
<ul>
<li>Dot notation: <code>objectName.keyName</code></li>
<li>Bracket notation: <code>objectName[“keyName”]</code></li>
</ul>
<p><strong>Delete a property:</strong></p>
<ul>
<li><code>delete objectName.keyName</code><br></li>
</ul>
<p>There’s a lot you can do with objects. And now you’ve got some of the basics so you can take advantage of this powerful JavaScript data type.<br></p>
<p><em><em><em><em><em><em><em><em>I write about learning to program, and the best ways to go about it on <a href="http://amymhaddad.com/" rel="noopener nofollow">amymhaddad.com</a>. </em></em></em></em>I </em></em>also <em><em>tweet about programming, learning, and productivity:<em><em><em><em> <a href="https://twitter.com/amymhaddad" rel="noopener nofollow">@amymhaddad</a></em></em></em></em></em></em></em>.</em></p>
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
