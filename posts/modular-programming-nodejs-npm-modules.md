---
card: "/images/default.jpg"
tags: [node.js]
description: "Modules are one of the fundamental features of Node.js."
author: "Milad E. Fahmy"
title: "How Modular Programming Works in Node.js"
created: "2021-08-16T10:04:25+02:00"
modified: "2021-08-16T10:04:25+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-node-js tag-node tag-javascript tag-npm tag-backend tag-web-development ">
<header class="post-full-header">
<h1 class="post-full-title">How Modular Programming Works in Node.js</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/11/alternateimg.png 300w,
/news/content/images/size/w600/2020/11/alternateimg.png 600w,
/news/content/images/size/w1000/2020/11/alternateimg.png 1000w,
/news/content/images/size/w2000/2020/11/alternateimg.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/11/alternateimg.png" alt="How Modular Programming Works in Node.js">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
const add = (a,b)=&gt;{
return a + b
}
module.exports = add
</code></pre><p>Here we export a function called <code>add</code> using <code>module.exports</code>. Then this function gets imported to a different file using the <code>require</code> method.</p><p>In Node, each file is referred to as a <code>module</code>, and <code>exports</code> is a property of the module Object.</p><p>We can now invoke the function in the different file, that is <code>main.js</code>, by passing the arguments as shown below.</p><pre><code class="language-js">//------ Main File[main.js] ----
const add = require('./calculate') //name of the desired file
const result = add(2,4)
console.log(result); //Output : 6
</code></pre><h3 id="how-to-import-an-object">How to import an object </h3><p>We can also export an entire object and access the different methods in it.</p><pre><code class="language-js">//---- Exported file [calculate.js]  ----
const add = {
result : (a,b)=&gt;{
return a + b
}
}
module.exports = add
</code></pre><p>We exported the object <code>add</code> and imported it to our main file using the <code>require</code> method.</p><p>We can now access the <code>result</code> method of the <code>add</code> object using the <code>.</code> dot operator:</p><pre><code class="language-JavaScript">//---- Main file[main.js] ----
const add = require('./calculate')
const result = add.result(5,8)
console.log(result) //Output : 13
</code></pre><p>Another way we can export the above object is by only exporting the method which we require rather than the entire object.</p><pre><code class="language-js">//---- Exported file [calculate.js]  ----
const add = {
result : (a,b)=&gt;{
return a + b
}
}
module.exports = add.result
</code></pre><p>As you can see, we are importing the <code>result</code> method in the <code>add</code> object. So this method can be directly invoked in the main file.</p><p>This is good practice if you don't need the entire object but only require some methods/functions of it. It also makes our code more secure.</p><pre><code class="language-JavaScript">//---- Main file[main.js] ----
const add = require('./calculate')
const result = add(5,8)
console.log(result) //Output : 13
</code></pre><h3 id="how-to-import-a-function-constructor-">How to import a Function Constructor: </h3><p>A function constructor is basically used to create a new instance of an object which possesses the same properties as that of the main object/function.</p><p>In the below case, we create a new instance of the 'Add' object using the <code>new</code> keyword. This process where we create an instance of an object is called 'instantiation'.</p><p>Then we export this instance using <code>module.exports</code>:</p><pre><code class="language-js">//---- Exported file [calculate.js]  ----
function Add (){
this.result = (a,b)=&gt;{
return a + b
}
}
module.exports = new Add()
</code></pre><p>Now we can import it into our main file and access the 'result' method inside it, to get our calculated value.</p><pre><code class="language-js">//---- Main file[main.js] ----
const add = require('./calculate2')
const result = add.result(1,3)
console.log(result); //Output : 4
</code></pre><p>This way we can export and import a function constructor.</p><p>There is another way we can do this, which is by creating our new instance in the main file rather than in the exported file as shown above <code>module.exports = new Add()</code>.</p><p>We'll see how this works when we export ES6 Classes which works similar to Function constructors.</p><h3 id="how-to-import-es6-classes">How to import ES6 Classes</h3><p><code>class</code> is a special type of function where the <code>class</code> keyword helps initialize it. It uses the <code>constructor</code> method to store the properties. </p><p>Now we are going to export the entire <code>class</code> using <code>module.exports</code>:</p><pre><code class="language-js">//---- Exported file [calculate.js]  ----
const Add = class{
constructor(a,b){
this.a = a;
this.b = b;
}
result(){
return this.a + this.b
}
}
module.exports = Add;
</code></pre><p>Now in our main file, we create a new instance using the <code>new</code> keyword and access the <code>result</code> method to get our calculated value.</p><pre><code class="language-js">
//---- Main file[main.js] ----
const add = require('./calculate')
const result = new add(2,5)
console.log(result.result()); //Output : 7
if (err) throw err
console.log(data);
})</code></pre><p>It will throw an error as <code>fs</code> is not defined. That is because the file system <code>fs</code> module is not available globally like the <code>console</code> module is.</p><pre><code class="language-powershell">ReferenceError: fs is not defined
at Object.&lt;anonymous&gt; (C:\Users\Sarvesh Kadam\Desktop\Training\blog\code snippets\Node Modular Pattern\main.js:3:1)
at Module._compile (internal/modules/cjs/loader.js:1256:30)
at Object.Module._extensions..js (internal/modules/cjs/loader.js:1277:10)
at Module.load (internal/modules/cjs/loader.js:1105:32)
at Function.Module._load (internal/modules/cjs/loader.js:967:14)
at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:60:12)
at internal/main/run_main_module.js:17:47
</code></pre><p>Therefore, we need to import all the data from the file system module using the <code>require()</code> function and store all that data in a variable <code>fs</code>.</p><pre><code class="language-js">const fs = require('fs')
fs.readFile('./file.txt','utf-8',(err,data)=&gt;{
if (err) throw err
console.log(data);
})</code></pre><p>Now you can name that variable anything. I named it <code>fs</code> for readability and it's the standard which most developers follow.</p><p>Using the <code>fs</code> variable we can access the <code>readFile()</code> method where we passed three arguments Those arguments are file path, character encoding <code>utf-8</code>, and the callback function to give an output.</p><p>You might ask why we're passing <code>utf-8</code> as our argument in the <code>readFile()</code>?</p><p>Because it encodes the value and gives the text as an output rather than giving a buffer as shown below:</p><p><code>&lt;Buffer 48 65 6c 6c 6f 20 57 6f 72 6c 64 21 21&gt;</code></p><p>The callback function, in turn, has two arguments: an error (<code>err</code>) and the actual content in the file (<code>data</code>). Then we print that <code>data</code> in the console.</p><pre><code class="language-powershell">//Output:
Hello World!
</code></pre><p>Once you run the above command, it will ask you for some data as shown below such as package name, version, and so on.</p><p>Much of this data can be kept as default as mentioned in the Round brackets <strong>()</strong>.<br>Also, the fields such as <code>author</code> and <code>license</code> are for the folks who created those NPM packages.</p><p>On the other hand, we are just importing and using them to create our own application.</p><pre><code class="language-powershell">package name: (code_npm) code_npm
version: (1.0.0) 1.0.0
description: npm demo
entry point: (index.js) index.js
test command: test
git repository:
keywords: npm test
author: Sarvesh
license: (ISC)
</code></pre><p>Once you enter all the fields, it will create a JSON file with values that have the above properties, and it'll ask you for confirmation like this:</p><pre><code class="language-powershell">Is this OK? (yes) yes
</code></pre><p>Once you've confirmed <code>yes</code> it will create a <code>package.json</code> file with all the data you entered as illustrated below:</p><pre><code class="language-json">{
"name": "code_npm",
"version": "1.0.0",
"description": "npm demo",
"main": "index.js",
"scripts": {
"test": "echo \"Error: no test specified\" &amp;&amp; exit 1"
},
"keywords": [
"npm",
"test"
],
"author": "Sarvesh",
"license": "ISC"
}
</code></pre><p>Also, you can see a <code>script</code> object that has a <code>test</code> property added. You can run it using the <code>npm test</code> command and it will give back the desired output like this:</p><pre><code class="language-powershell">"Error: no test specified"
</code></pre><p>Now instead of doing this elongated method of initializing NPM and entering the custom properties values, you can simply run the command:</p><pre><code class="language-powershell">npm init -y
</code></pre><p>You can also install any specific version you need of chalk by just adding <code>@version number</code> as shown below. Also instead of <code>install</code> you can simply put the short-hand <code>i</code> flag which stands for installation:</p><pre><code>npm i chalk@4.0.0
"chalk": "^4.0.0"
}
</code></pre><p>The <code>node_module</code> folder contains the packages folder and its dependency's folders. It gets modifies as and when the npm package gets installed.<br><br>The <code>package-lock.json</code> contains the code which makes NPM faster and more secure.</p><pre><code class="language-json">"chalk": {
"version": "4.0.0",
"resolved": "https://registry.npmjs.org/chalk/-/chalk-4.0.0.tgz",
"integrity": "sha512-N9oWFcegS0sFr9oh1oz2d7Npos6vNoWW9HvtCg5N1KRFpUhaAhvTv5Y58g880fZaEYSNm3qDz8SU1UrGvp+n7A==",
"requires": {
"ansi-styles": "^4.1.0",
"supports-color": "^7.1.0"
}
</code></pre><p>It mainly contains properties such as <code>version</code>, which is the semantic version number.<br><br>The <code>resolved</code> property is the directory or location from which the package was fetched. In this case it was fetched from <a href="https://www.npmjs.com/package/chalk">chalk</a>.<br><br>The <code>integrity</code> property is to make sure that we get the same code if we install the dependency again.<br><br>The <code>requires</code> object property represents the dependency of the <code>chalk</code> package.</p><p><strong>Note</strong>: Do not make any changes to these two files <code>node_modules</code> and <code>package-lock.json</code></p><h4 id="how-to-use-npm">How to Use NPM</h4><p>Now once we've installed chalk to our project, we can import it to our root project file using the <code>require()</code> method. Then we can store that module in a variable called <code>chalk</code>.</p><pre><code class="language-js">const chalk = require('chalk')
</code></pre><p>This global package will not affect our <code>package.json</code> in any way since it is not installed locally.</p><p>We have installed the <code>nodemon</code> package globally which is used for automatic restart of a Node application when file changes in the directory are observed.<br>You can refer to <a href="https://www.npmjs.com/package/nodemon">nodemon</a> for more information.</p><p>We can use the nodemon package by running the application using this command:</p><pre><code class="language-powershell">nodemon index.js
</code></pre><p>It works similarly to <code>node index.js</code>, except it keeps an eye on the file changes and it restarts the application once changes are detected.</p><pre><code class="language-powershell">[nodemon] 2.0.6
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node index.js`
Hello World
</code></pre><p><strong>Note</strong>: The <code>chalk</code> styling will probably not work when you used <code>nodemon</code>.</p><p>Finally, we will go through the <code>dev dependencies</code>. There are some NPM packages or modules which we won't need in our project's production environment, but only for our development requirements.</p><p>We can install these modules in our project using the <code>dev</code> flag as shown below:</p><pre><code class="language-powershell"> npm i nodemon --save-dev
</code></pre><p>It then creates a new property in the <code>package.json</code> called <code>devDependencies</code>:</p><pre><code class="language-json">"devDependencies": {
"nodemon": "^2.0.6"
}
</code></pre><h2 id="conclusion">Conclusion</h2><p>Using Node's Module Pattern, we can import from our own files by exporting them in form of functions, objects, function constructors, and ES6 classes.</p><p>And Node has its own set of Core (Native) Modules which we can use. Some of them are available globally, while some of them need to be imported locally in your project/folder.</p><p>NPM is a package manager that manages 3rd party open source code which we can use in our project. Before using NPM modules, you need to initialize NPM locally using <code>npm init</code> on your command line in the root of your project folder.</p><p>You can install any NPM package by using the command <code>npm i &lt;package name&gt;</code>. And you can install the NPM package globally using the <code>-g</code> flag. Also the package can be made development dependent using the <code>--save-dev</code> flag.</p><p>Thank you for reading! If you like this article, do reach out to me on <a href="https://twitter.com/kadamsarvesh10">Twitter</a> as I continue to document my learning.</p>
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
