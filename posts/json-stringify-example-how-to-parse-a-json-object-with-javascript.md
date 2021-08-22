---
card: "/images/default.jpg"
tags: [JavaScript]
description: JSON, or JavaScript Object Notation, is all around us. If you
author: "Milad E. Fahmy"
title: "JSON Stringify Example – How to Parse a JSON Object with JS"
created: "2021-08-15T19:27:41+02:00"
modified: "2021-08-15T19:27:41+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-json ">
<header class="post-full-header">
<h1 class="post-full-title">JSON Stringify Example – How to Parse a JSON Object with JS</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2021/06/602358380a2838549dcc2554.jpg 300w,
/news/content/images/size/w600/2021/06/602358380a2838549dcc2554.jpg 600w,
/news/content/images/size/w1000/2021/06/602358380a2838549dcc2554.jpg 1000w,
/news/content/images/size/w2000/2021/06/602358380a2838549dcc2554.jpg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2021/06/602358380a2838549dcc2554.jpg" alt="JSON Stringify Example – How to Parse a JSON Object with JS">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>JSON, or JavaScript Object Notation, is all around us. If you've ever used a web app, there's a very good chance that it used JSON to structure, store, and transmit data between its servers and your device.</p>
<p>In this article, we'll briefly go over the differences between JSON and JavaScript, then jump into different ways to parse JSON with JavaScript in the browser and in Node.js projects.</p>
<h2 id="differences-between-json-and-javascript">Differences between JSON and JavaScript</h2>
<p>While JSON looks like regular JavaScript, it's better to think of JSON as a data format, similar to a text file. It just so happens that JSON is inspired by JavaScript syntax, which is why they look so similar.</p>
<p>Let's take a look at JSON objects and JSON arrays and compare them to their JavaScript counterparts.</p>
<h3 id="json-objects-vs-javascript-object-literals">JSON objects vs JavaScript Object Literals</h3>
<p>First, here's a JSON object:</p>
"name": "Jane Doe",
"favorite-game": "Stardew Valley",
"subscriber": false
}
</code></pre>
<figcaption>jane-profile.json</figcaption>
</figure>
<p>The main difference between a JSON object and a regular JavaScript object – also called an object literal – comes down to the quotation marks. All the keys and string type values in a JSON object have to be wrapped in double quotation marks (<code>"</code>).</p>
<p>JavaScript object literals are a bit more flexible. With object literals, you don't need to wrap keys and strings in double quotation marks. Instead, you could use single quotation marks (<code>'</code>), or not use any type of quotation mark for the keys.</p>
<p>Here's what the code above might look like as a JavaScript object literal:</p><pre><code class="language-js">const profile = {
name: 'Jane Doe',
'favorite-game': 'Stardew Valley',
subscriber: false
}
</code></pre>
<p>Note that the key <code>'favorite-game'</code> is wrapped in single quotes. With object literals, you'll need to wrap keys where the words are separated by dashes (<code>-</code>) in quotes.</p>
<p>If you'd like to avoid quotation marks, you could rewrite the key to use camel case (<code>favoriteGame</code>) or separate the words with an underscore (<code>favorite_game</code>) instead.</p>
<h3 id="json-arrays-vs-javascript-arrays">JSON arrays vs JavaScript arrays</h3>
<p>JSON arrays work pretty much the same way as arrays in JavaScript, and can contain strings, booleans, numbers, and other JSON objects. For example:</p>
{
"name": "Jane Doe",
"favorite-game": "Stardew Valley",
"subscriber": false
},
{
"name": "John Doe",
"favorite-game": "Dragon Quest XI",
"subscriber": true
}
]
</code></pre>
<figcaption>profiles.json</figcaption>
</figure>
<p>Here's what that might look like in plain JavaScript:</p><pre><code class="language-js">const profiles = [
{
name: 'Jane Doe',
'favorite-game': 'Stardew Valley',
subscriber: false
},
{
name: 'John Doe',
'favorite-game': 'Dragon Quest XI',
subscriber: true
}
];
</code></pre>
<h2 id="json-as-a-string">JSON as a string</h2>
<p>You might be wondering, if there are JSON objects and arrays, couldn't you use it in your program like a regular JavaScript object literal or array?</p>
<p>The reason why you can't do this is that JSON is really just a string.</p>
<p>For example, when you write JSON in a separate file like with <code>jane-profile.json</code> or <code>profiles.json</code> above, that file actually contains text in the form of a JSON object or array, which happens to look like JavaScript.</p>
<p>And if you make a request to an API, it'll return something like this:</p><pre><code>{"name":"Jane Doe","favorite-game":"Stardew Valley","subscriber":false}</code></pre>
<p>Just like with text files, if you want to use JSON in your project, you'll need to parse or change it into something your programming language can understand. For instance, parsing a JSON object in Python will create a dictionary.</p>
<p>With that understanding, let's look at different ways to parse JSON in JavaScript.</p>
<h2 id="how-to-parse-json-in-the-browser">How to parse JSON in the browser</h2>
<p>If you're working with JSON in the browser, you're probably receiving or sending data through an API.</p>
<p>Let's take a look at a couple of examples.</p>
<h3 id="how-to-parse-json-with-fetch">How to parse JSON with <code>fetch</code></h3>
<p>The easiest way to get data from an API is with <code>fetch</code>, which includes the <code>.json()</code> method to parse JSON responses into a usable JavaScript object literal or array automagically.</p>
<p>Here's some code that uses <code>fetch</code> to make a <code>GET</code> request for a developer-themed joke from the free <a href="https://api.chucknorris.io/">Chuck Norris Jokes API</a>:</p><pre><code class="language-js">fetch('https://api.chucknorris.io/jokes/random?category=dev')
.then(res =&gt; res.json()) // the .json() method parses the JSON response into a JS object literal
.then(data =&gt; console.log(data));
</code></pre>
<p>If you run that code in the browser, you'll see something like this logged to the console:</p><pre><code class="language-js">{
"categories": ["dev"],
"created_at": "2020-01-05 13:42:19.324003",
"icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
"id": "elgv2wkvt8ioag6xywykbq",
"updated_at": "2020-01-05 13:42:19.324003",
"url": "https://api.chucknorris.io/jokes/elgv2wkvt8ioag6xywykbq",
"value": "Chuck Norris's keyboard doesn't have a Ctrl key because nothing controls Chuck Norris."
}
</code></pre>
<p>While that looks like a JSON object, it's really a JavaScript object literal, and you can use it freely in your program.</p>
<h3 id="how-to-stringify-json-with-json-stringify-">How to stringify JSON with <code>JSON.stringify()</code></h3>
<p>But what if you want to send data to an API?</p>
<p>For instance, say you'd like to send a Chuck Norris joke to the Chuck Norris Jokes API so other people can read it later.</p>
<p>First, you'd write your joke as a JS object literal:</p><pre><code class="language-js">const newJoke = {
categories: ['dev'],
value: "Chuck Norris's keyboard is made up entirely of Cmd keys because Chuck Norris is always in command."
};
</code></pre>
<p>Then, since you're sending data to an API, you'd need to turn your <code>newJoke</code> object literal into a JSON string.</p>
<p>Fortunately, JavaScript includes a super helpful method to do just that – <code>JSON.stringify()</code>:</p><pre><code class="language-js">const newJoke = {
categories: ['dev'],
value: "Chuck Norris's keyboard is made up entirely of Cmd keys because Chuck Norris is always in command."
};
console.log(JSON.stringify(newJoke)); // {"categories":["dev"],"value":"Chuck Norris's keyboard is made up entirely of Cmd keys because Chuck Norris is always in command."}
console.log(typeof JSON.stringify(newJoke)); // string
</code></pre>
<p>While we're converting an object literal into a JSON string in this example, <code>JSON.stringify()</code> also works with arrays.</p>
<p>Finally, you'd just need to send your JSON stringified joke back to the API with a <code>POST</code> request.</p>
<p>Note that the Chuck Norris Jokes API doesn't actually have this feature. But if it did, here's what the code might look like:</p><pre><code class="language-js">const newJoke = {
categories: ['dev'],
value: "Chuck Norris's keyboard is made up entirely of Cmd keys because Chuck Norris is always in command."
};
fetch('https://api.chucknorris.io/jokes/submit', { // fake API endpoint
method: 'POST',
headers: {
'Content-Type': 'application/json',
},
body: JSON.stringify(newJoke), // turn the JS object literal into a JSON string
})
.then(res =&gt; res.json())
.then(data =&gt; console.log(data))
.catch(err =&gt; {
console.error(err);
});</code></pre>
<p>And just like that, you've parsed incoming JSON with <code>fetch</code> and used <code>JSON.stringify()</code> to convert a JS object literal into a JSON string.</p>
<h3 id="how-to-work-with-local-json-files-in-the-browser">How to work with local JSON files in the browser</h3>
<p>Unfortunately, it's not possible (or advisable) to load a local JSON file in the browser.</p>
<p><code>fetch</code> will throw an error if you try to load a local file. For example, say you have a JSON file with some jokes:</p>
{
"categories": ["dev"],
"created_at": "2020-01-05 13:42:19.324003",
"icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
"id": "elgv2wkvt8ioag6xywykbq",
"updated_at": "2020-01-05 13:42:19.324003",
"url": "https://api.chucknorris.io/jokes/elgv2wkvt8ioag6xywykbq",
"value": "Chuck Norris's keyboard doesn't have a Ctrl key because nothing controls Chuck Norris."
},
{
"categories": ["dev"],
"created_at": "2020-01-05 13:42:19.324003",
"icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
"id": "ae-78cogr-cb6x9hluwqtw",
"updated_at": "2020-01-05 13:42:19.324003",
"url": "https://api.chucknorris.io/jokes/ae-78cogr-cb6x9hluwqtw",
"value": "There is no Esc key on Chuck Norris' keyboard, because no one escapes Chuck Norris."
}
]
</code></pre>
<figcaption>jokes.json</figcaption>
</figure>
<p>And you want to parse it and create a list of jokes on a simple HTML page.</p>
<p>If you create a page with the following and open it in your browser:</p>
&lt;html&gt;
&lt;head&gt;
&lt;meta charset="utf-8" /&gt;
&lt;meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" /&gt;
&lt;meta name="viewport" content="width=device-width" /&gt;
&lt;title&gt;Fetch Local JSON&lt;/title&gt;
&lt;/head&gt;
&lt;script&gt;
fetch("./jokes.json", { mode: "no-cors" }) // disable CORS because path does not contain http(s)
.then((res) =&gt; res.json())
.then((data) =&gt; console.log(data));
&lt;/script&gt;
&lt;/html&gt;
</code></pre>
<figcaption>index.html</figcaption>
</figure>
<p>You'll see this in the console:</p><pre><code>Fetch API cannot load file://&lt;path&gt;/jokes.json. URL scheme "file" is not supported
</code></pre>
<p>By default, browsers don't allow access to local files for security reasons. This is a good thing, and you shouldn't try to work around this behavior.</p>
<p>Instead, the best thing to do is to convert the local JSON file into JavaScript. Fortunately, this is pretty easy since JSON syntax is so similar to JavaScript.</p>
<p>All you need to do is create a new file and declare your JSON as a variable:</p>
{
"categories": ["dev"],
"created_at": "2020-01-05 13:42:19.324003",
"icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
"id": "elgv2wkvt8ioag6xywykbq",
"updated_at": "2020-01-05 13:42:19.324003",
"url": "https://api.chucknorris.io/jokes/elgv2wkvt8ioag6xywykbq",
"value": "Chuck Norris's keyboard doesn't have a Ctrl key because nothing controls Chuck Norris."
},
{
"categories": ["dev"],
"created_at": "2020-01-05 13:42:19.324003",
"icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
"id": "ae-78cogr-cb6x9hluwqtw",
"updated_at": "2020-01-05 13:42:19.324003",
"url": "https://api.chucknorris.io/jokes/ae-78cogr-cb6x9hluwqtw",
"value": "There is no Esc key on Chuck Norris' keyboard, because no one escapes Chuck Norris."
}
]
</code></pre>
<figcaption>jokes.js</figcaption>
</figure>
<p>And add it to your page as a separate script:</p><pre><code class="language-html">&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;meta charset="utf-8" /&gt;
&lt;meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" /&gt;
&lt;meta name="viewport" content="width=device-width" /&gt;
&lt;title&gt;Fetch Local JSON&lt;/title&gt;
&lt;/head&gt;
&lt;script src="jokes.js"&gt;&lt;/script&gt;
&lt;script&gt;
console.log(jokes);
&lt;/script&gt;
&lt;/html&gt;
</code></pre>
<p>You'll be able to use the <code>jokes</code> array freely in your code.</p>
<p>You could also use JavaScript <code><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules">modules</a></code> to do the same thing, but that's a bit outside the scope of this article.</p>
<p>But what if you want to work with local JSON files and have Node.js installed? Let's take a look at how to do that now.</p>
<h2 id="how-to-parse-json-in-node-js">How to parse JSON in Node.js</h2>
<p>Node.js is a JavaScript runtime that allows you to run JavaScript outside of the browser. You can read all about <a href="/news/the-definitive-node-js-handbook-6912378afc6e/">Node.js here</a>.</p>
<p>Whether you use Node.js to run code locally on your computer, or to run entire web applications on a server, it's good to know how to work with JSON.</p>
<p>For the following examples, we'll use the same <code>jokes.json</code> file:</p>
{
"categories": ["dev"],
"created_at": "2020-01-05 13:42:19.324003",
"icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
"id": "elgv2wkvt8ioag6xywykbq",
"updated_at": "2020-01-05 13:42:19.324003",
"url": "https://api.chucknorris.io/jokes/elgv2wkvt8ioag6xywykbq",
"value": "Chuck Norris's keyboard doesn't have a Ctrl key because nothing controls Chuck Norris."
},
{
"categories": ["dev"],
"created_at": "2020-01-05 13:42:19.324003",
"icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
"id": "ae-78cogr-cb6x9hluwqtw",
"updated_at": "2020-01-05 13:42:19.324003",
"url": "https://api.chucknorris.io/jokes/ae-78cogr-cb6x9hluwqtw",
"value": "There is no Esc key on Chuck Norris' keyboard, because no one escapes Chuck Norris."
}
]
</code></pre>
<figcaption>jokes.json</figcaption>
</figure>
<h3 id="how-to-parse-a-json-file-with-require-">How to parse a JSON file with <code>require()</code></h3>
<p>Let's start with the easiest method.</p>
<p>If you have a local JSON file, all you need to do is use <code>require()</code> to load it like any other Node.js module:</p><pre><code class="language-js">const jokes = require('./jokes.json');
</code></pre>
<p>The JSON file will be parsed for you automatically and you can start using it in your project:</p><pre><code class="language-js">const jokes = require('./jokes.json');
console.log(jokes[0].value); // "Chuck Norris's keyboard doesn't have a Ctrl key because nothing controls Chuck Norris."
</code></pre>
<p>Note that this is synchronous, meaning that your program will stop until it parses the entire file before continuing. Really large JSON files can cause your program to slow down, so just be careful with that.</p>
<p>Also, because parsing JSON this way loads the entire thing into memory, it's better to use this method for static JSON files. If the JSON file changes while your program is running, you won't have access to those changes until you restart your program and parse the updated JSON file.</p>
<h3 id="how-to-parse-a-json-file-with-fs-readfilesync-and-json-parse-">How to parse a JSON file with <code>fs.readFileSync(</code>) and <code>JSON.parse()</code></h3>
<p>This is the more traditional way (for lack of a better term) to parse JSON files in Node.js projects – read the file with <code>fs</code> (file system) module, then parse with <code>JSON.parse()</code>.</p>
<p>Let's see how to do this with the <code>fs.readFileSync()</code> method. First, add the <code>fs</code> module to your project:</p><pre><code class="language-js">const fs = require('fs');
</code></pre>
<p>Then, create a new variable to store the output of the <code>jokes.json</code> file and set it equal to <code>fs.readFileSync()</code>:</p><pre><code class="language-js">const fs = require('fs');
const jokesFile = fs.readFileSync();
</code></pre>
<p><code>fs.readFileSync()</code> takes a couple of arguments. The first is the path to the file you want to read:</p><pre><code class="language-js">const fs = require('fs');
const jokesFile = fs.readFileSync('./jokes.json');
</code></pre>
<p>But if you log <code>jokesFile</code> to the console now, you'd see something like this:</p><pre><code>&lt;Buffer 5b 0a 20 20 7b 0a 20 20 20 20 22 63 61 74 65 67 6f 72 69 65 73 22 3a 20 5b 22 64 65 76 22 5d 2c 0a 20 20 20 20 22 63 72 65 61 74 65 64 5f 61 74 22 3a ... 788 more bytes&gt;</code></pre>
<p>That just means that the <code>fs</code> module is reading the file, but it doesn't know the encoding or format the file is in. <code>fs</code> can be used to load pretty much any file, and not just text-based ones like JSON, so we need to tell it how the file is encoded.</p>
<p>For text-based files, the encoding is usually <code>utf8</code>:</p><pre><code class="language-js">const fs = require('fs');
const jokesFile = fs.readFileSync('./jokes.json', 'utf8');
</code></pre>
<p>Now if you log <code>jokesFile</code> to the console, you'll see the contents of the file.</p>
<p>But so far we're just reading the file, and it's still a string. We'll need to use another method to parse <code>jokesFile</code> into a usable JavaScript object or array.</p>
<p>To do that, we'll use <code>JSON.parse()</code>:</p><pre><code class="language-js">const fs = require('fs');
const jokesFile = fs.readFileSync('./jokes.json', 'utf8');
const jokes = JSON.parse(jokesFile);
console.log(jokes[0].value); // "Chuck Norris's keyboard doesn't have a Ctrl key because nothing controls Chuck Norris."
</code></pre>
<p>As the name suggests, <code>JSON.parse()</code> takes a JSON string and parses it into a JavaScript object literal or array.</p>
<p>Like with the <code>require</code> method above, <code>fs.readFileSync()</code> is a synchronous method, meaning it could cause your program to slow down if it's reading a large file, JSON or otherwise.</p>
<p>Also, it only reads the file once and loads it into memory. If the file changes, you'll need to read the file again at some point. To make things easier, you might want to create a simple function to read files.</p>
<p>Here's what that might look like:</p><pre><code class="language-js">const fs = require('fs');
const readFile = path =&gt; fs.readFileSync(path, 'utf8');
const jokesFile1 = readFile('./jokes.json');
const jokes1 = JSON.parse(jokesFile1);
console.log(jokes1[0].value); // "Chuck Norris's keyboard doesn't have a Ctrl key because nothing controls Chuck Norris."
// the jokes.json file changes at some point
const jokesFile2 = readFile('./jokes.json');
const jokes2 = JSON.parse(jokesFile2);
console.log(jokes2[0].value); // "Chuck Norris's keyboard is made up entirely of Cmd keys because Chuck Norris is always in command."</code></pre>
<h3 id="how-to-parse-json-with-fs-readfile-and-json-parse-">How to parse JSON with <code>fs.readFile(</code>) and <code>JSON.parse()</code></h3>
<p>The <code>fs.readFile()</code> method is very similar to <code>fs.readFileSync()</code>, except that it works asynchronously. This is great if you have a large file to read and you don't want it to hold up the rest of your code.</p>
<p>Here's a basic example:</p><pre><code class="language-js">const fs = require('fs');
fs.readFile('./jokes.json', 'utf8');</code></pre>
<p>So far this looks similar to what we did with <code>fs.readFileSync()</code>, except we're not assigning it to a variable like <code>jokesFile</code>. Because it's asynchronous, any code after <code>fs.readFile()</code> it will run before it's finished reading the file.</p>
<p>Instead, we'll use a callback function and parse the JSON inside it:</p><pre><code class="language-js">const fs = require('fs');
fs.readFile('./jokes.json', 'utf8', (err, data) =&gt; {
if (err) console.error(err);
const jokes = JSON.parse(data);
console.log(jokes[0].value);
});
console.log("This will run first!");</code></pre>
<p>Which prints the following to the console:</p><pre><code>This will run first
Chuck Norris's keyboard doesn't have a Ctrl key because nothing controls Chuck Norris.
</code></pre>
<p>Like with <code>fs.readFileSync()</code>, <code>fs.readFile()</code> loads the file into memory, meaning you'll need to read the file again if it changes.</p>
<p>Also, even though <code>fs.readFile()</code> is asynchronous, it eventually loads the entire file it's reading into memory. If you have a massive file, it may be better to look into <a href="/news/node-js-streams-everything-you-need-to-know-c9141306be93/">Node.js streams</a> instead.</p>
<h3 id="how-to-stringify-json-with-json-stringify-in-node-js">How to stringify JSON with <code>JSON.stringify()</code> in Node.js</h3>
<p>Finally, if you're parsing JSON with Node.js, there's a good chance that you'll need to return JSON at some point, maybe as an API response.</p>
<p>Luckily, this works the same way as in the browser – just use <code>JSON.stringify()</code> to convert JavaScript object literals or arrays into a JSON string:</p><pre><code class="language-js">const newJoke = {
categories: ['dev'],
value: "Chuck Norris's keyboard is made up entirely of Cmd keys because Chuck Norris is always in command."
};
console.log(JSON.stringify(newJoke)); // {"categories":["dev"],"value":"Chuck Norris's keyboard is made up entirely of Cmd keys because Chuck Norris is always in command."}
</code></pre>
<p>And that's it! We've covered just about everything you need to know about working with JSON in the browser and in Node.js projects.</p>
<p>Now get out there and parse or stringify JSON to your heart's content.</p>
<p>Did I miss something? How do you parse JSON in your projects? Let me know over on <a href="https://twitter.com/kriskoishigawa">Twitter</a>.</p>
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
