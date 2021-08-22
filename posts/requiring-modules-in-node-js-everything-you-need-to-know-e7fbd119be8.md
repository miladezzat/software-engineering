---
card: "https://cdn-media-1.freecodecamp.org/images/1*AL0-iuggGnBLSvSVvt0Xzw.png"
tags: [JavaScript]
description: "Node uses two core modules for managing module dependencies:"
author: "Milad E. Fahmy"
title: "Requiring modules in Node.js: Everything you need to know"
created: "2021-08-16T10:24:51+02:00"
modified: "2021-08-16T10:24:51+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-nodejs tag-programming tag-web-development tag-software-development ">
<header class="post-full-header">
<h1 class="post-full-title">Requiring modules in Node.js: Everything you need to know</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*AL0-iuggGnBLSvSVvt0Xzw.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*AL0-iuggGnBLSvSVvt0Xzw.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*AL0-iuggGnBLSvSVvt0Xzw.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*AL0-iuggGnBLSvSVvt0Xzw.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*AL0-iuggGnBLSvSVvt0Xzw.png" alt="Requiring modules in Node.js: Everything you need to know">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<blockquote><strong>Update:</strong> This article is now part of my book “Node.js Beyond The Basics”.<br><br>Read the updated version of this content and more about Node at <a href="https://jscomplete.com/g/node-modules" rel="noopener"><strong>jscomplete.com/node-beyond-basics</strong></a>.</blockquote><p>Node uses two core modules for managing module dependencies:</p><ul><li>The <code>require</code> module, which appears to be available on the global scope — no need to <code>require('require')</code>.</li><li>The <code>module</code> module, which also appears to be available on the global scope — no need to <code>require('module')</code>.</li></ul><p>You can think of the <code>require</code> module as the command and the <code>module</code> module as the organizer of all required modules.</p><p>Requiring a module in Node isn’t that complicated of a concept.</p><pre><code class="language-js">const config = require('/path/to/file');</code></pre><p>The main object exported by the <code>require</code> module is a function (as used in the above example). When Node invokes that <code>require()</code> function with a local file path as the function’s only argument, Node goes through the following sequence of steps:</p><ul><li><strong>Resolving</strong>: To find the absolute path of the file.</li><li><strong>Loading</strong>: To determine the type of the file content.</li><li><strong>Wrapping</strong>: To give the file its private scope. This is what makes both the <code>require</code> and <code>module</code> objects local to every file we require.</li><li><strong>Evaluating</strong>: This is what the VM eventually does with the loaded code.</li><li><strong>Caching</strong>: So that when we require this file again, we don’t go over all the steps another time.</li></ul><p>In this article, I’ll attempt to explain with examples these different stages and how they affect the way we write modules in Node.</p><p>Let me first create a directory to host all the examples using my terminal:</p><pre><code class="language-bash">mkdir ~/learn-node &amp;&amp; cd ~/learn-node</code></pre><p>All the commands in the rest of this article will be run from within <code>~/learn-node</code>.</p><h4 id="resolving-a-local-path">Resolving a local path</h4><p>Let me introduce you to the <code>module</code> object. You can check it out in a simple REPL session:</p><pre><code class="language-bash">~/learn-node $ node
&gt; module
Module {
id: '&lt;repl&gt;',
exports: {},
parent: undefined,
filename: null,
loaded: false,
children: [],
paths: [ ... ] }</code></pre><p>Every module object gets an <code>id</code> property to identify it. This <code>id</code> is usually the full path to the file, but in a REPL session it’s simply <code>&lt;repl&gt;.</code></p><p>Node modules have a one-to-one relation with files on the file-system. We require a module by loading the content of a file into memory.</p><p>However, since Node allows many ways to require a file (for example, with a relative path or a pre-configured path), before we can load the content of a file into the memory we need to find the absolute location of that file.</p><p>When we require a <code>'find-me'</code> module, without specifying a path:</p><pre><code class="language-js">require('find-me');</code></pre><p>Node will look for <code>find-me.js</code> in all the paths specified by <code>module.paths</code> — in order.</p><pre><code class="language-bash">~/learn-node $ node
&gt; module.paths
[ '/Users/samer/learn-node/repl/node_modules',
'/Users/samer/learn-node/node_modules',
'/Users/samer/node_modules',
'/Users/node_modules',
'/node_modules',
'/Users/samer/.node_modules',
'/Users/samer/.node_libraries',
'/usr/local/Cellar/node/7.7.1/lib/node' ]</code></pre><p>The paths list is basically a list of node_modules directories under every directory from the current directory to the root directory. It also includes a few legacy directories whose use is not recommended.</p><p>If Node can’t find <code>find-me.js</code> in any of these paths, it will throw a “cannot find module error.”</p><pre><code class="language-bash">~/learn-node $ node
&gt; require('find-me')
Error: Cannot find module 'find-me'
at Function.Module._resolveFilename (module.js:470:15)
at Function.Module._load (module.js:418:25)
at Module.require (module.js:498:17)
at require (internal/module.js:20:19)
at repl:1:1
at ContextifyScript.Script.runInThisContext (vm.js:23:33)
at REPLServer.defaultEval (repl.js:336:29)
at bound (domain.js:280:14)
at REPLServer.runBound [as eval] (domain.js:293:12)
at REPLServer.onLine (repl.js:533:10)</code></pre><p>If you now create a local <code>node_modules</code> directory and put a <code>find-me.js</code> in there, the <code>require('find-me')</code> line will find it.</p><pre><code class="language-bash">~/learn-node $ mkdir node_modules
~/learn-node $ echo "console.log('I am not lost');" &gt; node_modules/find-me.js
~/learn-node $ node
&gt; require('find-me');
I am not lost
{}
&gt;</code></pre><p>If another <code>find-me.js</code> file existed in any of the other paths, for example, if we have a <code>node_modules</code> directory under the home directory and we have a different <code>find-me.js</code> file in there:</p><pre><code class="language-bash">$ mkdir ~/node_modules
$ echo "console.log('I am the root of all problems');" &gt; ~/node_modules/find-me.js</code></pre><p>When we <code>require('find-me')</code> from within the <code>learn-node</code> directory — which has its own <code>node_modules/find-me.js</code>, the <code>find-me.js</code> file under the home directory will not be loaded at all:</p><pre><code class="language-bash">~/learn-node $ node
&gt; require('find-me')
I am not lost
{}
&gt;</code></pre><p>If we remove the local <code>node_modules</code> directory under <code>~/learn-node</code> and try to require <code>find-me</code> one more time, the file under the home’s <code>node_modules</code> directory would be used:</p><pre><code class="language-bash">~/learn-node $ rm -r node_modules/
~/learn-node $ node
&gt; require('find-me')
I am the root of all problems
{}
&gt;</code></pre><h4 id="requiring-a-folder">Requiring a folder</h4><p>Modules don’t have to be files. We can also create a <code>find-me</code> folder under <code>node_modules</code> and place an <code>index.js</code> file in there. The same <code>require('find-me')</code> line will use that folder’s <code>index.js</code> file:</p><pre><code class="language-bash">~/learn-node $ mkdir -p node_modules/find-me
~/learn-node $ echo "console.log('Found again.');" &gt; node_modules/find-me/index.js
~/learn-node $ node
&gt; require('find-me');
Found again.
{}
&gt;</code></pre><p>Note how it ignored the home directory’s <code>node_modules</code> path again since we have a local one now.</p><p>An <code>index.js</code> file will be used by default when we require a folder, but we can control what file name to start with under the folder using the <code>main</code> property in <code>package.json</code>. For example, to make the <code>require('find-me')</code> line resolve to a different file under the <code>find-me</code> folder, all we need to do is add a <code>package.json</code> file in there and specify which file should be used to resolve this folder:</p><pre><code class="language-bash">~/learn-node $ echo "console.log('I rule');" &gt; node_modules/find-me/start.js
~/learn-node $ echo '{ "name": "find-me-folder", "main": "start.js" }' &gt; node_modules/find-me/package.json
~/learn-node $ node
&gt; require('find-me');
I rule
{}
&gt;</code></pre><h4 id="require-resolve">require.resolve</h4><p>If you want to only resolve the module and not execute it, you can use the <code>require.resolve</code> function. This behaves exactly the same as the main <code>require</code> function, but does not load the file. It will still throw an error if the file does not exist and it will return the full path to the file when found.</p><pre><code class="language-bash">&gt; require.resolve('find-me');
'/Users/samer/learn-node/node_modules/find-me/start.js'
&gt; require.resolve('not-there');
Error: Cannot find module 'not-there'
at Function.Module._resolveFilename (module.js:470:15)
at Function.resolve (internal/module.js:27:19)
at repl:1:9
at ContextifyScript.Script.runInThisContext (vm.js:23:33)
at REPLServer.defaultEval (repl.js:336:29)
at bound (domain.js:280:14)
at REPLServer.runBound [as eval] (domain.js:293:12)
at REPLServer.onLine (repl.js:533:10)
at emitOne (events.js:101:20)
at REPLServer.emit (events.js:191:7)
&gt;</code></pre><p>This can be used, for example, to check whether an optional package is installed or not and only use it when it’s available.</p><h4 id="relative-and-absolute-paths">Relative and absolute paths</h4><p>Besides resolving modules from within the <code>node_modules</code> directories, we can also place the module anywhere we want and require it with either relative paths (<code>./</code> and <code>../</code>) or with absolute paths starting with <code>/</code>.</p><p>If, for example, the <code>find-me.js</code> file was under a <code>lib</code> folder instead of the <code>node_modules</code> folder, we can require it with:</p><pre><code class="language-js">require('./lib/find-me');</code></pre><h4 id="parent-child-relation-between-files">Parent-child relation between files</h4><p>Create a <code>lib/util.js</code> file and add a <code>console.log</code> line there to identify it. Also, <code>console.log</code> the <code>module</code> object itself:</p><pre><code class="language-bash">~/learn-node $ mkdir lib
~/learn-node $ echo "console.log('In util', module);" &gt; lib/util.js</code></pre><p>Do the same for an <code>index.js</code> file, which is what we’ll be executing with the node command. Make this <code>index.js</code> file require <code>lib/util.js</code>:</p><pre><code class="language-bash">~/learn-node $ echo "console.log('In index', module); require('./lib/util');" &gt; index.js</code></pre><p>Now execute the <code>index.js</code> file with node:</p><pre><code class="language-bash">~/learn-node $ node index.js
In index Module {
id: '.',
exports: {},
parent: null,
filename: '/Users/samer/learn-node/index.js',
loaded: false,
children: [],
paths: [ ... ] }
In util Module {
id: '/Users/samer/learn-node/lib/util.js',
exports: {},
parent:
Module {
id: '.',
exports: {},
parent: null,
filename: '/Users/samer/learn-node/index.js',
loaded: false,
children: [ [Circular] ],
paths: [...] },
filename: '/Users/samer/learn-node/lib/util.js',
loaded: false,
children: [],
paths: [...] }</code></pre><p>Note how the main <code>index</code> module <code>(id: '.')</code> is now listed as the parent for the <code>lib/util</code> module. However, the <code>lib/util</code> module was not listed as a child of the <code>index</code> module. Instead, we have the <code>[Circular]</code> value there because this is a circular reference. If Node prints the <code>lib/util</code> module object, it will go into an infinite loop. That’s why it simply replaces the <code>lib/util</code> reference with <code>[Circular]</code>.</p><p>More importantly now, what happens if the <code>lib/util</code> module required the main <code>index</code> module? This is where we get into what’s known as the circular modular dependency, which is allowed in Node.</p><p>To understand it better, let’s first understand a few other concepts on the module object.</p><h4 id="exports-module-exports-and-synchronous-loading-of-modules">exports, module.exports, and synchronous loading of modules</h4><p>In any module, exports is a special object. If you’ve noticed above, every time we’ve printed a module object, it had an exports property which has been an empty object so far. We can add any attribute to this special exports object. For example, let’s export an id attribute for <code>index.js</code> and <code>lib/util.js</code>:</p><pre><code class="language-js">// Add the following line at the top of lib/util.js
exports.id = 'lib/util';
// Add the following line at the top of index.js
exports.id = 'index';</code></pre><p>When we now execute <code>index.js</code>, we’ll see these attributes as managed on each file’s <code>module</code> object:</p><pre><code class="language-bash">~/learn-node $ node index.js
In index Module {
id: '.',
exports: { id: 'index' },
loaded: false,
... }
In util Module {
id: '/Users/samer/learn-node/lib/util.js',
exports: { id: 'lib/util' },
parent:
Module {
id: '.',
exports: { id: 'index' },
loaded: false,
... },
loaded: false,
... }</code></pre><p>I’ve removed some attributes in the above output to keep it brief, but note how the <code>exports</code> object now has the attributes we defined in each module. You can put as many attributes as you want on that exports object, and you can actually change the whole object to be something else. For example, to change the exports object to be a function instead of an object, we do the following:</p><pre><code class="language-js">// Add the following line in index.js before the console.log
module.exports = function() {};</code></pre><p>When you run <code>index.js</code> now, you’ll see how the <code>exports</code> object is a function:</p><pre><code class="language-bash">~/learn-node $ node index.js
In index Module {
id: '.',
exports: [Function],
loaded: false,
... }</code></pre><p>Note how we did not do <code>exports = function() {}</code> to make the <code>exports</code> object into a function. We can’t actually do that because the <code>exports</code> variable inside each module is just a reference to <code>module.exports</code> which manages the exported properties. When we reassign the <code>exports</code> variable, that reference is lost and we would be introducing a new variable instead of changing the <code>module.exports</code> object.</p><p>The <code>module.exports</code> object in every module is what the <code>require</code> function returns when we require that module. For example, change the <code>require('./lib/util')</code> line in <code>index.js</code> into:</p><pre><code class="language-js">const UTIL = require('./lib/util');
console.log('UTIL:', UTIL);</code></pre><p>The above will capture the properties exported in <code>lib/util</code> into the <code>UTIL</code> constant. When we run <code>index.js</code> now, the very last line will output:</p><pre><code class="language-bash">UTIL: { id: 'lib/util' }</code></pre><p>Let’s also talk about the <code>loaded</code> attribute on every module. So far, every time we printed a module object, we saw a <code>loaded</code> attribute on that object with a value of <code>false</code>.</p><p>The <code>module</code> module uses the <code>loaded</code> attribute to track which modules have been loaded (true value) and which modules are still being loaded (false value). We can, for example, see the <code>index.js</code> module fully loaded if we print its <code>module</code> object on the next cycle of the event loop using a <code>setImmediate</code> call:</p><pre><code>// In index.js
setImmediate(() =&gt; {
console.log('The index.js module object is now loaded!', module)
});</code></pre><p>The output of that would be:</p><pre><code class="language-bash">The index.js module object is now loaded! Module {
id: '.',
exports: [Function],
parent: null,
filename: '/Users/samer/learn-node/index.js',
loaded: true,
children:
[ Module {
id: '/Users/samer/learn-node/lib/util.js',
exports: [Object],
parent: [Circular],
filename: '/Users/samer/learn-node/lib/util.js',
loaded: true,
children: [],
paths: [Object] } ],
paths:
[ '/Users/samer/learn-node/node_modules',
'/Users/samer/node_modules',
'/Users/node_modules',
'/node_modules' ] }</code></pre><p>Note how in this delayed <code>console.log</code> output both <code>lib/util.js</code> and <code>index.js</code> are fully loaded.</p><p>The <code>exports</code> object becomes complete when Node finishes loading the module (and labels it so). The whole process of requiring/loading a module is <em>synchronous.</em> That’s why we were able to see the modules fully loaded after one cycle of the event loop.</p><p>This also means that we cannot change the <code>exports</code> object asynchronously. We can’t, for example, do the following in any module:</p><pre><code class="language-js">fs.readFile('/etc/passwd', (err, data) =&gt; {
if (err) throw err;
exports.data = data; // Will not work.
});</code></pre><h4 id="circular-module-dependency">Circular module dependency</h4><p>Let’s now try to answer the important question about circular dependency in Node: What happens when module 1 requires module 2, and module 2 requires module 1?</p><p>To find out, let’s create the following two files under <code>lib/</code>, <code>module1.js</code> and <code>module2.js</code> and have them require each other:</p><pre><code class="language-js">// lib/module1.js
exports.a = 1;
require('./module2');
exports.b = 2;
exports.c = 3;
// lib/module2.js
const Module1 = require('./module1');
console.log('Module1 is partially loaded here', Module1);</code></pre><p>When we run <code>module1.js</code> we see the following:</p><pre><code class="language-bash">~/learn-node $ node lib/module1.js
Module1 is partially loaded here { a: 1 }</code></pre><p>We required <code>module2</code> before <code>module1</code> was fully loaded, and since <code>module2</code> required <code>module1</code> while it wasn’t fully loaded, what we get from the <code>exports</code> object at that point are all the properties exported prior to the circular dependency. Only the <code>a</code> property was reported because both <code>b</code> and <code>c</code> were exported after <code>module2</code> required and printed <code>module1</code>.</p><p>Node keeps this really simple. During the loading of a module, it builds the <code>exports</code> object. You can require the module before it’s done loading and you’ll just get a partial exports object with whatever was defined so far.</p><h4 id="json-and-c-c-addons">JSON and C/C++ addons</h4><p>We can natively require JSON files and C++ addon files with the require function. You don’t even need to specify a file extension to do so.</p><p>If a file extension was not specified, the first thing Node will try to resolve is a <code>.js</code> file. If it can’t find a <code>.js</code> file, it will try a <code>.json</code> file and it will parse the <code>.json</code> file if found as a JSON text file. After that, it will try to find a binary <code>.node</code> file. However, to remove ambiguity, you should probably specify a file extension when requiring anything other than <code>.js</code> files.</p><p>Requiring JSON files is useful if, for example, everything you need to manage in that file is some static configuration values, or some values that you periodically read from an external source. For example, if we had the following <code>config.json</code> file:</p><pre><code class="language-json">{
"host": "localhost",
"port": 8080
}</code></pre><p>We can require it directly like this:</p><pre><code>const { host, port } = require('./config');
console.log(`Server will run at http://${host}:${port}`);</code></pre><p>Running the above code will have this output:</p><pre><code class="language-bash">Server will run at http://localhost:8080</code></pre><p>If Node can’t find a <code>.js</code> or a <code>.json</code> file, it will look for a <code>.node</code> file and it would interpret the file as a compiled addon module.</p><p>The Node documentation site has a <a href="https://nodejs.org/api/addons.html#addons_hello_world" rel="noopener">sample addon file</a> which is written in C++. It’s a simple module that exposes a <code>hello()</code> function and the hello function outputs “world.”</p><p>You can use the <code>node-gyp</code> package to compile and build the <code>.cc</code> file into a <code>.node</code> file. You just need to configure a <a href="https://nodejs.org/api/addons.html#addons_building" rel="noopener">binding.gyp</a> file to tell <code>node-gyp</code> what to do.</p><p>Once you have the <code>addon.node</code> file (or whatever name you specify in <code>binding.gyp</code>) then you can natively require it just like any other module:</p><pre><code class="language-js">const addon = require('./addon');
exports = { id: 42 }; // This will not work.
module.exports = { id: 42 }; // This is ok.</code></pre><p>How exactly does this <code>exports</code> object, which appears to be global for every module, get defined as a reference on the <code>module</code> object?</p><p>Let me ask one more question before explaining Node’s wrapping process.</p><p>In a browser, when we declare a variable in a script like this:</p><pre><code>var answer = 42;</code></pre><p>That <code>answer</code> variable will be globally available in all scripts after the script that defined it.</p><p>This is not the case in Node. When we define a variable in one module, the other modules in the program will not have access to that variable. So how come variables in Node are magically scoped?</p><p>The answer is simple. Before compiling a module, Node wraps the module code in a function, which we can inspect using the <code>wrapper</code> property of the <code>module</code> module.</p><pre><code class="language-bash">~ $ node
&gt; require('module').wrapper
[ '(function (exports, require, module, __filename, __dirname) { ',
'\n});' ]
&gt;</code></pre><p>Node does not execute any code you write in a file directly. It executes this wrapper function which will have your code in its body. This is what keeps the top-level variables that are defined in any module scoped to that module.</p><p>This wrapper function has 5 arguments: <code>exports</code>, <code>require</code>, <code>module</code>, <code>__filename</code>, and <code>__dirname</code>. This is what makes them appear to look global when in fact they are specific to each module.</p><p>All of these arguments get their values when Node executes the wrapper function. <code>exports</code> is defined as a reference to <code>module.exports</code> prior to that. <code>require</code> and <code>module</code> are both specific to the function to be executed, and <code>__filename</code>/<code>__dirname</code> variables will contain the wrapped module’s absolute filename and directory path.</p><p>You can see this wrapping in action if you run a script with a problem on its first line:</p><pre><code class="language-bash">~/learn-node $ echo "euaohseu" &gt; bad.js
~/learn-node $ node bad.js
~/bad.js:1
(function (exports, require, module, __filename, __dirname) { euaohseu
^
ReferenceError: euaohseu is not defined</code></pre><p>Note how the first line of the script as reported above was the wrapper function, not the bad reference.</p><p>Moreover, since every module gets wrapped in a function, we can actually access that function’s arguments with the <code>arguments</code> keyword:</p><pre><code class="language-bash">~/learn-node $ echo "console.log(arguments)" &gt; index.js
~/learn-node $ node index.js
{ '0': {},
'1':
{ [Function: require]
resolve: [Function: resolve],
main:
Module {
id: '.',
exports: {},
parent: null,
filename: '/Users/samer/index.js',
loaded: false,
children: [],
paths: [Object] },
extensions: { ... },
cache: { '/Users/samer/index.js': [Object] } },
'2':
Module {
id: '.',
exports: {},
parent: null,
filename: '/Users/samer/index.js',
loaded: false,
children: [],
paths: [ ... ] },
'3': '/Users/samer/index.js',
'4': '/Users/samer' }</code></pre><p>The first argument is the <code>exports</code> object, which starts empty. Then we have the <code>require</code>/<code>module</code> objects, both of which are instances that are associated with the <code>index.js</code> file that we’re executing. They are not global variables. The last 2 arguments are the file’s path and its directory path.</p><p>The wrapping function’s return value is <code>module.exports</code>. Inside the wrapped function, we can use the <code>exports</code> object to change the properties of <code>module.exports</code>, but we can’t reassign exports itself because it’s just a reference.</p><p>What happens is roughly equivalent to:</p><pre><code class="language-js">function (require, module, __filename, __dirname) {
let exports = module.exports;
// Your Code...
return module.exports;
}</code></pre><p>If we change the whole <code>exports</code> object, it would no longer be a reference to <code>module.exports</code>. This is the way JavaScript reference objects work everywhere, not just in this context.</p><h4 id="the-require-object">The require object</h4><p>There is nothing special about <code>require</code>. It’s an object that acts mainly as a function that takes a module name or path and returns the <code>module.exports</code> object. We can simply override the <code>require</code> object with our own logic if we want to.</p><p>For example, maybe for testing purposes, we want every <code>require</code> call to be mocked by default and just return a fake object instead of the required module exports object. This simple reassignment of require will do the trick:</p><pre><code class="language-js">require = function() {
return { mocked: true };
}</code></pre><p>After doing the above reassignment of <code>require</code>, every <code>require('something') </code>call in the script will just return the mocked object.</p><p>The require object also has properties of its own. We’ve seen the <code>resolve</code> property, which is a function that performs only the resolving step of the require process. We’ve also seen <code>require.extensions</code> above.</p><p>There is also <code>require.main</code> which can be helpful to determine if the script is being required or run directly.</p><p>Say, for example, that we have this simple <code>printInFrame</code> function in <code>print-in-frame.js</code>:</p><pre><code class="language-js">// In print-in-frame.js
const printInFrame = (size, header) =&gt; {
console.log('*'.repeat(size));
console.log(header);
console.log('*'.repeat(size));
};</code></pre><p>The function takes a numeric argument <code>size</code> and a string argument <code>header</code> and it prints that header in a frame of stars controlled by the size we specify.</p><p>We want to use this file in two ways:</p><ol><li>From the command line directly like this:</li></ol><pre><code class="language-bash">~/learn-node $ node print-in-frame 8 Hello</code></pre><p>Passing 8 and Hello as command line arguments to print “Hello” in a frame of 8 stars.</p><p>2. With <code>require</code>. Assuming the required module will export the <code>printInFrame</code> function and we can just call it:</p><pre><code>const print = require('./print-in-frame');
print(5, 'Hey');</code></pre><p>To print the header “Hey” in a frame of 5 stars.</p><p>Those are two different usages. We need a way to determine if the file is being run as a stand-alone script or if it is being required by other scripts.</p><p>This is where we can use this simple if statement:</p><pre><code class="language-js">if (require.main === module) {
// The file is being executed directly (not with require)
}</code></pre><p>So we can use this condition to satisfy the usage requirements above by invoking the printInFrame function differently:</p><pre><code class="language-js">// In print-in-frame.js
const printInFrame = (size, header) =&gt; {
console.log('*'.repeat(size));
console.log(header);
console.log('*'.repeat(size));
};
if (require.main === module) {
printInFrame(process.argv[2], process.argv[3]);
} else {
module.exports = printInFrame;
require('./ascii-art') // will not show the header.</code></pre><p>The second require will not show the header because of modules’ caching. Node caches the first call and does not load the file on the second call.</p><p>We can see this cache by printing <code>require.cache</code> after the first require. The cache registry is simply an object that has a property for every required module. Those properties values are the <code>module</code> objects used for each module. We can simply delete a property from that <code>require.cache</code> object to invalidate that cache. If we do that, Node will re-load the module to re-cache it.</p><p>However, this is not the most efficient solution for this case. The simple solution is to wrap the log line in <code>ascii-art.js</code> with a function and export that function. This way, when we require the <code>ascii-art.js</code> file, we get a function that we can execute to invoke the log line every time:</p><pre><code class="language-js">require('./ascii-art')() // will show the header.
require('./ascii-art')() // will also show the header.</code></pre><p>That’s all I have for this topic. Thanks for reading. Until next time!</p><p>Learning React or Node? Checkout my books:</p><ul><li><a href="http://amzn.to/2peYJZj" rel="noopener">Learn React.js by Building Games</a></li><li><a href="http://amzn.to/2FYfYru" rel="noopener">Node.js Beyond the Basics</a></li></ul>
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
