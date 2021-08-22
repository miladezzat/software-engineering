---
card: "https://cdn-media-1.freecodecamp.org/images/1*IwwZN7qurglWUXNLYR35QQ.jpeg"
tags: [JavaScript]
description: Let’s explore the fun, counter-intuitive world of combinatori
author: "Milad E. Fahmy"
title: "Combinatorial explosions explained with ice cream: how to add a little and get a lot"
created: "2021-08-15T19:53:14+02:00"
modified: "2021-08-15T19:53:14+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-data-structures tag-nosql tag-mathematics tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">Combinatorial explosions explained with ice cream: how to add a little and get a lot</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*IwwZN7qurglWUXNLYR35QQ.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*IwwZN7qurglWUXNLYR35QQ.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*IwwZN7qurglWUXNLYR35QQ.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*IwwZN7qurglWUXNLYR35QQ.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*IwwZN7qurglWUXNLYR35QQ.jpeg" alt="Combinatorial explosions explained with ice cream: how to add a little and get a lot">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Let’s explore the fun, counter-intuitive world of combinatorics.</p>
<p>Combining values to form sets of distinct combinations can be a tricky thing. Even if you ignore order, the number of possible sets grows alarmingly.</p>
<p>For an array of two values [1, 2], you can generate:</p>
<ul>
<li>[] (empty set)</li>
<li>[1]</li>
<li>[2]</li>
<li>[1,2] (or [2,1])</li>
</ul>
<p>If repeats are allowed ([2, 2] for example), the increase is even greater. As the number of input values increase, the number of corresponding output sets <a href="http://www.intmath.com/counting-probability/4-combinations.php" rel="noopener">shoots through the roof</a>!</p>
<figcaption><a href="http://www.torbair.com/blog/2015/12/26/4mvxoio4tc8j28reqsbz449tlab4ss" rel="noopener" target="_blank" title="">Combinatorial Explosion</a>, indeed</figcaption>
</figure>
<p>Let’s call the input values <strong>items</strong> and each combination of those values a <strong>choice</strong>. Furthermore, let’s allow for multiple items, each with distinct choices. A good working example would be a menu. We’ll simulate the menu of <strong>Ye Olde Ice Cream Shoppe</strong>, which offers its customers combinations of ice cream, toppings, and syrup flavors.</p>
<p>The ice cream flavors are: <strong>CHOCOLATE, STRAWBERRY, VANILLA</strong></p>
<p>Toppings:<strong> pineapple, strawberry, coconut flakes, pecans</strong></p>
<p>Syrups: <strong>chocolate, marshmallow, butterscotch, maple</strong></p>
<p>There are some constraints on the choices: customers can choose any <strong>two </strong>ice creams, <strong>two </strong>toppings, and <strong>one </strong>syrup. Ice cream and topping choices are exclusive, meaning that I can’t choose pineapple + pineapple, for instance. The customer may choose to have no toppings and no syrup, but must choose at least one ice cream. With these constraints, the rate of increase is exponential, of the order 2 to the nth power, which is considerably less than if order was significant and duplicates allowed.</p>
<h4 id="palatability">Palatability</h4>
<p><strong>Ye Olde Ice Cream Shoppe </strong>is actually quite modern in its approach to business, and is developing an artificial intelligence expert system to judge which combinations of ice cream, topping, and syrup are palatable. Servers will be shown a warning on their registers when a customer chooses an unpalatable selection. The servers are then instructed to double check with the customer that their order is correct.</p>
<h3 id="step-1-building-the-data">Step 1: Building the Data</h3>
<p>Code for this article can be found <a href="https://github.com/JeffML/Combinatorics" rel="noopener">here</a>. I will assume you’re familiar with JavaScript and Node.js. A working knowledge of Lodash (or Underscore) is helpful. The code uses a map/reduce database for storage.</p>
<p>The first step will be to create a database of all ice cream, topping, and syrup combinations. The inputs will be as follows:</p>
iceCream: {min: 1, max: 2, values: ["CHOCOLATE", "STRAWBERRY", "VANILLA"]},
topping: {min: 0, max: 2, values: ["pineapple", "strawberry", "coconut flakes", "pecans"]},
syrup: {min:0, max: 1, values: ["chocolate", "marshmallow", "butterscotch", "maple"]}
}</code></pre>
<figcaption>menu.js: Ice cream values are capitalized so that CHOCOLATE ice cream is distinguishable form chocolate syrup</figcaption>
</figure>
<p>With this data, I can write a <a href="https://github.com/JeffML/Combinatorics/blob/master/Combinator.js" rel="noopener">Combinator</a> function that takes each menu item and generates all possible permitted combinations. Each combination is stored as an array. For example, ice cream combinations would look like:</p><pre><code class="language-js">[ [ ‘CHOCOLATE’, ‘STRAWBERRY’ ],
[ ‘CHOCOLATE’, ‘VANILLA’ ],
[ ‘CHOCOLATE’ ],
[ ‘STRAWBERRY’, ‘VANILLA’ ],
[ ‘STRAWBERRY’ ],
[ ‘VANILLA’ ] ]</code></pre>
<p>Once the combinations of ice cream, toppings, and syrups are determined, all that’s left is to iterate each item combination with the others:</p>
_.each(iceCreamChoices, function(ic) {
_.each(toppingChoices, function(tp) {
_.each(syrupChoices, function(sy) {
allChoices.push([ic,tp,sy]);
})
})
})</code></pre>
<figcaption>buildChoices.js</figcaption>
</figure>
<p>This yields a combination of ice cream(s), topping(s), and syrup, like:</p><pre><code class="language-js">[ [ 'VANILLA' ], [ 'coconut flakes', 'pecans' ], [] ],
[ [ 'VANILLA' ], [ 'coconut flakes' ], [ 'chocolate' ] ],
[ [ 'VANILLA' ], [ 'coconut flakes' ], [ 'marshmallow' ] ],...</code></pre>
<p>The choices shown translate as:</p>
<ul>
<li>Vanilla ice cream with coconut flakes and pecans, no syrup</li>
<li>Vanilla ice cream with coconut flakes and chocolate syrup</li>
<li>Vanilla ice cream with coconut flakes and marshmallow syrup</li>
</ul>
<p>Even with just a few restricted menu items, the number of permitted choices is 330!</p>
<h3 id="step-2-storing-the-data">Step 2: Storing the Data</h3>
<p>With every combination of orderable items now determined, further work can be done. The AI system for determining palatable choice combinations is turning out to be complex and won’t be embedded in the registers’ operating system. Instead, an AJAX request will be made to a server housing the AI program. The inputs will be the customer’s menu choices, and the output will rate the palatability of those choices as one of: <strong>[ugh, meh, tasty, sublime].</strong> A palatability rating of <strong>ugh</strong> triggers the aforesaid warning.</p>
<p>We need a fast response to the request, so the palatability ratings will be cached in a database. Given the nature of exponential increase, this could evolve to become a Big Data problem if more item choices are added to the menu in the future.</p>
<p>Let’s say it is decided to store choice combinations and ratings in a NoSQL database. Using <a href="https://pouchdb.com/guides/" rel="noopener">PouchDB, </a>each choice and palatability value are stored as JSON documents. A <a href="https://pouchdb.com/guides/queries.html" rel="noopener"><em>secondary index</em></a> (a.k.a. <em>view</em>) with each choice as a key will allow us to quickly look up the palatability rating. Instead of pushing the data into an <strong>allChoices</strong> array as shown above in <a href="https://gist.github.com/JeffML/c0f9c7c02272da7c57604bd685910cd2" rel="noopener">buildChoices.js</a>, I can push JSON documents to the database for storage.</p>
<p>Proceeding naively, I can make a couple of changes in Step1.js to arrive at Step2.js: first of all, I need to install PouchDB via npm, then require it. Then, I create a NoSQL database called <strong>choices</strong>.</p><pre><code class="language-js">var PouchDB = require('pouchdb');
var db = new PouchDB('choices');</code></pre>
<p>Now, each choice is posted to the choices database:</p>
_.each(iceCreamChoices, function(ic) {
_.each(toppingChoices, function(tp) {
_.each(syrupChoices, function(sy) {
//allChoices.push([ic,tp,sy]);
db.post({choice: [ic,tp,sy]}, function(err, doc){
if (err) console.error(err);
else console.log(`stored ${++count}`);
});
})
})
});
console.log('done??');</code></pre>
<figcaption>pouchPost.js</figcaption>
</figure>
<p>This works! Sort of. As can be inferred by the callback parameter to <strong>db.post</strong>, that operation is asynchronous. What we see in the log is:</p><pre><code class="language-bash">&gt;node Step2.js
done??
stored 1
stored 2
stored 3
...</code></pre>
<p>So the code says it’s done before even record 1 has been stored. This will be a problem if I have further processing to do against the database and all the records aren’t there yet.</p>
<h3 id="step-3-fixing-and-refining">Step 3: Fixing and Refining</h3>
<p>There’s also a more subtle problem: potential resource exhaustion. If the database limits the number of concurrent connections, a large number of simultaneous post requests may result in connection timeouts.</p>
<p>For <a href="https://github.com/JeffML/Combinatorics/blob/master/Step3.js" rel="noopener">Step3.js</a>, I did a bit of bug fixing, reformatting and refactoring of what was written in Step2.js. One bug was that each run added more and more records to the database, duplicating what was there before. The solution was to destroy the existing database, re-create it, and then run the main program:</p><pre><code class="language-js">// remove old
db.destroy(null, function () {
db = new PouchDB('choices');
run();
});</code></pre>
<p>Next was to add a running count of documents stored and post requests in process so that the program: 1) knows when the last document is stored; 2) allows only five posts to proceed at any one time. The run() method looks like this now (with some omissions):</p>
var menu = { //...
}
var iceCreamChoices = new Combinator({ //...
});
var toppingChoices = new Combinator({ //...
});
var syrupChoices = new Combinator({ //...
});
var count = 0;
var total = iceCreamChoices.length * toppingChoices.length * syrupChoices.length;
var postCount = 0;
var postCountMax = 5;
_.each(iceCreamChoices, function (ic) {
_.each(toppingChoices, function (tp) {
_.each(syrupChoices, function (sy) {
var si = setInterval(() =&gt; {
if (postCount &lt; postCountMax) {
clearInterval(si);
postChoice(ic, tp, sy);
}
}, 10);
})
})
});
function postChoice(ic, tp, sy) {
++postCount;
db.post({
choice: [ic, tp, sy]
}, function (err, doc) {
--postCount;
done(err);
});
}
function done(err) {
if (err) {
console.error(err);
process.exit(1);
}
console.log(`stored ${++count}`);
if (count === total) {
console.log('done');
}
}
}</code></pre>
<figcaption>run.js</figcaption>
</figure>
<p>The main changes to note are that:</p>
<ol>
<li>A <strong>postCount </strong>tracks how many posts are outstanding</li>
<li>An interval timer checks the <strong>postCount </strong>and will post and exit when post slots are available</li>
<li>a <strong>done()</strong> handler is called when all choices are stored</li>
</ol>
<h3 id="step-4-adding-palatability">Step 4: Adding Palatability</h3>
<p>With all possible menu choices in place, we can now have the AI determine the palatability of each. The AI is just a mock at the moment, which assigns random values to each document record in PouchDB. Those values will be stored in the database by updating each document with a taste rating.</p>
var PouchDB = require('pouchdb');
var db = new PouchDB('choices');
db.allDocs({
include_docs: true
})
.then(docs =&gt; {
_.each(docs.rows, r =&gt; {
r.doc.taste = palatability();
db.put(r.doc);
});
});
function palatability() {
var scale = Math.round(Math.random() * 10);
var taste;
switch (true) {
// this switch is a horrible hack;  don't ever do this ;-P
case (scale &lt; 2):
taste = "ugh";
break;
case (scale &lt; 5):
taste = "meh";
break;
case (scale &lt; 8):
taste = "tasty";
break;
default:
taste = "sublime";
break;
}
return taste;
}</code></pre>
<figcaption>palatability.js</figcaption>
</figure>
<p>Just to verify that we stored things correctly, we can dump the docs in the database to the console:</p><pre><code class="language-js">db.allDocs({
include_docs: true
})
.then(docs =&gt; {
_.each(docs.rows, r =&gt; {
console.log(r.doc.choice, r.doc.taste)
});
});
//output looks like:
/*
[ [ 'STRAWBERRY' ], [ 'coconut flakes' ], [ 'maple' ] ] 'sublime'
[ [ 'CHOCOLATE' ], [ 'pecans' ], [ 'chocolate' ] ] 'tasty'
[ [ 'CHOCOLATE', 'STRAWBERRY' ], [], [ 'chocolate' ] ] 'sublime'
[ [ 'VANILLA' ], [], [ 'marshmallow' ] ] 'meh'
[ [ 'CHOCOLATE', 'STRAWBERRY' ],
[ 'pineapple' ],
[ 'marshmallow' ] ] 'meh'
*/</code></pre>
<h3 id="step-5-looking-up-palatability">Step 5: Looking Up Palatability</h3>
<p>The documents are in the database, but now there needs to be a way to determine what the palatability is for a customer’s choices. This is done by defining a view, which is a function that returns a key for each document, along with a value. What should the key be?</p>
<p>I could use r.doc.choice as the key, but arrays have an order and that order might change if the menu items defined in Step 1 were later rearranged. The key is just an identifier of the choice selection and doesn’t carry an semantic meaning of its own. What should work is to:</p>
<ul>
<li>flatten each r.doc.choice array,</li>
<li>order the elements alphabetically, then</li>
<li>concatenate them together</li>
<li>result is a key</li>
</ul>
<p>If more choices are added in the future, though, the key length might be over the limit allowed by the database. Instead of using the key as constructed, a hash the key could be used as the real key. A SHA256 hash in hex is 64 characters long, and the likelihood of a hash collision, even for a quadrillion choices, is essentially zero. Writing the hash function for choices is easy, using the Node.js <strong>crypto </strong>module and a Lodash chain:</p>
const _ = require('lodash')
function hash(choice) {
var str = _.chain(choice)
.flatten()
.sortBy()
.join('|')
.value();
return crypto.createHmac('sha256', 'old ice cream')
.update(str)
.digest('hex');
}
module.exports = hash;</code></pre>
<figcaption>hashChoices.js</figcaption>
</figure>
<p>Adding the hash to our existing documents is a simple matter of iterating through each database document, computing its hash, and updating the document with a key value:</p>
const hash = require('./hash');
const PouchDB = require('pouchdb');
const db = new PouchDB('choices');
db.allDocs({
include_docs: true
})
.then(docs =&gt; {
_.each(docs.rows, r =&gt; {
r.doc.key = hash(r.doc.choice);
db.put(r.doc);
});
})
.catch(e =&gt; {
console.error(e)
});</code></pre>
<figcaption>addHashKey.js</figcaption>
</figure>
<p>Next, a database view is built using the document key field as an index; I’ll call it <strong>choice</strong>.</p>
const db = new PouchDB('choices');
// doc that defines the view
var ddoc = {
_id: '_design/choice',
views: {
by_key: {
map: function (doc) {
emit(doc.key, doc.taste);
}.toString()
}
}
};
// remove any existing view, then add new one:
db.get(ddoc._id)
.then(doc =&gt; {
return db.remove(doc);
})
.then(() =&gt; {
db.put(ddoc)
.catch(function (err) {
console.error(err);
});
});</code></pre>
<figcaption>view.js</figcaption>
</figure>
<p>For any document key (hash of choice array), I can find its taste via the view <strong>choice. </strong>Now everything is in place to determine whether a customer’s choice is <strong>ugh, meh, tasty,</strong> or <strong>sublime</strong>. To test this, we make some random choices and see if we can find the taste:</p>
[['VANILLA'], ['coconut flakes', 'pecans'], ['marshmallow']],
[['CHOCOLATE'], ['pecans'], ['chocolate']],
[['STRAWBERRY', 'VANILLA'], ['pineapple', 'coconut flakes'], ['marshmallow']],
[['STRAWBERRY'], ['pecans'], ['maple']],
[['VANILLA'], ['coconut flakes', 'pineapple'], ['chocolate']],
[['CHOCOLATE, STRAWBERRY'], ['pineapple', 'pecans'], ['butterscotch']],
];
const keys = _.map(choices, c =&gt; {
return hash(c);
});
db.query('choice/by_key', {
keys: keys,
include_docs: false,
}, function (err, result) {
if (err) {
return console.error(err);
}
_.each(result.rows, (r, i) =&gt; {
console.log(`${choices[i]} tastes ${r.value}`);
})
});</code></pre>
<figcaption>test.js</figcaption>
</figure>
<p>The results are:</p><pre><code class="language-bash">=&gt; node test
VANILLA,coconut flakes,pecans,marshmallow tastes ugh
CHOCOLATE,pecans,chocolate tastes sublime
STRAWBERRY,VANILLA,pineapple,coconut flakes,marshmallow tastes tasty
STRAWBERRY,pecans,maple tastes meh
VANILLA,coconut flakes,pineapple,chocolate tastes sublime</code></pre>
<p>That’s it! All that’s left is to write client software that submits choices via AJAX and gets a taste (palatability) value back. If it’s <strong>ugh</strong>, then up comes a warning on the register.</p>
<p><em>In a subsequent post, I refine the algorithm used above. <a href="https://medium.com/@jefflowery/recursive-generator-f8bc30e5e412#.wa7sl6bt7" rel="noopener">Check it out</a>!</em></p>
<h3 id="references">References</h3>
<p><a href="http://www.torbair.com/blog/2015/12/26/4mvxoio4tc8j28reqsbz449tlab4ss" rel="noopener"><strong>Exponential Growth Isn't Cool. Combinatorial Explosion Is.</strong></a><br><a href="http://www.torbair.com/blog/2015/12/26/4mvxoio4tc8j28reqsbz449tlab4ss" rel="noopener"><em>So much of the tech industry is obsessed with exponential growth. Anything linear is dying, or has been dead for years…</em></a><br><a href="http://www.torbair.com/blog/2015/12/26/4mvxoio4tc8j28reqsbz449tlab4ss" rel="noopener">www.torbair.com</a><br></p>
<p><a href="https://www.mathsisfun.com/combinatorics/combinations-permutations-calculator.html" rel="noopener"><strong>Combinations and Permutations Calculator</strong></a><br><a href="https://www.mathsisfun.com/combinatorics/combinations-permutations-calculator.html" rel="noopener"><em>Find out how many different ways you can choose items. For an in-depth explanation of the formulas please visit…</em></a><br><a href="https://www.mathsisfun.com/combinatorics/combinations-permutations-calculator.html" rel="noopener">www.mathsisfun.com</a></p>
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
