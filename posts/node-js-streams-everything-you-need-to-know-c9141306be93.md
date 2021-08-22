---
card: "https://cdn-media-1.freecodecamp.org/images/1*SGJw31T5Q9Zfsk24l2yirg.gif"
tags: [Nodejs]
description: "Node.js streams have a reputation for being hard to work with"
author: "Milad E. Fahmy"
title: "Node.js Streams: Everything you need to know"
created: "2021-08-16T10:23:51+02:00"
modified: "2021-08-16T10:23:51+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-nodejs tag-web-development tag-javascript tag-software-development tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">Node.js Streams: Everything you need to know</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*SGJw31T5Q9Zfsk24l2yirg.gif 300w,
https://cdn-media-1.freecodecamp.org/images/1*SGJw31T5Q9Zfsk24l2yirg.gif 600w,
https://cdn-media-1.freecodecamp.org/images/1*SGJw31T5Q9Zfsk24l2yirg.gif 1000w,
https://cdn-media-1.freecodecamp.org/images/1*SGJw31T5Q9Zfsk24l2yirg.gif 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*SGJw31T5Q9Zfsk24l2yirg.gif" alt="Node.js Streams: Everything you need to know">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
const wc = ... // A stream for the wc input
const file = fs.createWriteStream('./big.file');
for(let i=0; i&lt;= 1e6; i++) {
file.write('Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n');
}
file.end();</code></pre><p>Look what I used to create that big file. A writable stream!</p><p>The <code>fs</code> module can be used to read from and write to files using a stream interface. In the example above, we’re writing to that <code>big.file</code> through a writable stream 1 million lines with a loop.</p><p>Running the script above generates a file that’s about ~400 MB.</p><p>Here’s a simple Node web server designed to exclusively serve the <code>big.file</code>:</p><pre><code class="language-js">const fs = require('fs');
const server = require('http').createServer();
server.on('request', (req, res) =&gt; {
fs.readFile('./big.file', (err, data) =&gt; {
if (err) throw err;
res.end(data);
});
});
const server = require('http').createServer();
server.on('request', (req, res) =&gt; {
const src = fs.createReadStream('./big.file');
src.pipe(res);
});
.pipe(transformStream1)
.pipe(transformStream2)
.pipe(finalWrtitableDest)</code></pre><p>The <code>pipe</code> method returns the destination stream, which enabled us to do the chaining above. For streams <code>a</code> (readable), <code>b</code> and <code>c</code> (duplex), and <code>d</code> (writable), we can:</p><pre><code class="language-js">a.pipe(b).pipe(c).pipe(d)
# Which is equivalent to:
a.pipe(b)
b.pipe(c)
c.pipe(d)
# Which, in Linux, is equivalent to:
$ a | b | c | d</code></pre><p>The <code>pipe</code> method is the easiest way to consume streams. It’s generally recommended to either use the <code>pipe</code> method or consume streams with events, but avoid mixing these two. Usually when you’re using the <code>pipe</code> method you don’t need to use events, but if you need to consume the streams in more custom ways, events would be the way to go.</p><h4 id="stream-events">Stream events</h4><p>Beside reading from a readable stream source and writing to a writable destination, the <code>pipe</code> method automatically manages a few things along the way. For example, it handles errors, end-of-files, and the cases when one stream is slower or faster than the other.</p><p>However, streams can also be consumed with events directly. Here’s the simplified event-equivalent code of what the <code>pipe</code> method mainly does to read and write data:</p><pre><code class="language-js"># readable.pipe(writable)
readable.on('data', (chunk) =&gt; {
writable.write(chunk);
});
readable.on('end', () =&gt; {
writable.end();
}</code></pre><p>However, I prefer the simpler constructor approach. We just create an object from the <code>Writable</code> constructor and pass it a number of options. The only required option is a <code>write</code> function which exposes the chunk of data to be written.</p><pre><code class="language-js">const { Writable } = require('stream');
const outStream = new Writable({
write(chunk, encoding, callback) {
console.log(chunk.toString());
callback();
}
});
process.stdin.pipe(outStream);</code></pre><p>This write method takes three arguments.</p><ul><li>The <strong>chunk</strong> is usually a buffer unless we configure the stream differently.</li><li>The <strong>encoding</strong> argument is needed in that case, but usually we can ignore it.</li><li>The <strong>callback</strong> is a function that we need to call after we’re done processing the data chunk. It’s what signals whether the write was successful or not. To signal a failure, call the callback with an error object.</li></ul><p>In <code>outStream</code>, we simply <code>console.log</code> the chunk as a string and call the <code>callback</code> after that without an error to indicate success. This is a very simple and probably not so useful <em>echo</em> stream. It will echo back anything it receives.</p><p>To consume this stream, we can simply use it with <code>process.stdin</code>, which is a readable stream, so we can just pipe <code>process.stdin</code> into our <code>outStream</code>.</p><p>When we run the code above, anything we type into <code>process.stdin</code> will be echoed back using the <code>outStream</code> <code>console.log</code> line.</p><p>This is not a very useful stream to implement because it’s actually already implemented and built-in. This is very much equivalent to <code>process.stdout</code>. We can just pipe <code>stdin</code> into <code>stdout</code> and we’ll get the exact same echo feature with this single line:</p><pre><code class="language-js">process.stdin.pipe(process.stdout);</code></pre><h4 id="implement-a-readable-stream">Implement a Readable Stream</h4><p>To implement a readable stream, we require the <code>Readable</code> interface, and construct an object from it, and implement a <code>read()</code> method in the stream’s configuration parameter:</p><pre><code class="language-js">const { Readable } = require('stream');
const inStream = new Readable({
read() {}
});</code></pre><p>There is a simple way to implement readable streams. We can just directly <code>push</code> the data that we want the consumers to consume.</p><pre><code class="language-js">const { Readable } = require('stream');
const inStream = new Readable({
read() {}
});
inStream.push('ABCDEFGHIJKLM');
inStream.push('NOPQRSTUVWXYZ');
inStream.push(null); // No more data
inStream.pipe(process.stdout);</code></pre><p>When we <code>push</code> a <code>null</code> object, that means we want to signal that the stream does not have any more data.</p><p>To consume this simple readable stream, we can simply pipe it into the writable stream <code>process.stdout</code>.</p><p>When we run the code above, we’ll be reading all the data from <code>inStream</code> and echoing it to the standard out. Very simple, but also not very efficient.</p><p>We’re basically pushing all the data in the stream <em>before</em> piping it to <code>process.stdout</code>. The much better way is to push data <em>on demand</em>, when a consumer asks for it. We can do that by implementing the <code>read()</code> method in the configuration object:</p><pre><code class="language-js">const inStream = new Readable({
read(size) {
// there is a demand on the data... Someone wants to read it.
}
});</code></pre><p>When the read method is called on a readable stream, the implementation can push partial data to the queue. For example, we can push one letter at a time, starting with character code 65 (which represents A), and incrementing that on every push:</p><pre><code class="language-js">const inStream = new Readable({
read(size) {
this.push(String.fromCharCode(this.currentCharCode++));
if (this.currentCharCode &gt; 90) {
this.push(null);
}
}
});
inStream.currentCharCode = 65;
inStream.pipe(process.stdout);</code></pre><p>While the consumer is reading a readable stream, the <code>read</code> method will continue to fire, and we’ll push more letters. We need to stop this cycle somewhere, and that’s why an if statement to push null when the currentCharCode is greater than 90 (which represents Z).</p><p>This code is equivalent to the simpler one we started with but now we’re pushing data on demand when the consumer asks for it. You should always do that.</p><h4 id="implementing-duplex-transform-streams">Implementing Duplex/Transform Streams</h4><p>With Duplex streams, we can implement both readable and writable streams with the same object. It’s as if we inherit from both interfaces.</p><p>Here’s an example duplex stream that combines the two writable and readable examples implemented above:</p><pre><code class="language-js">const { Duplex } = require('stream');
const inoutStream = new Duplex({
write(chunk, encoding, callback) {
console.log(chunk.toString());
callback();
},
read(size) {
this.push(String.fromCharCode(this.currentCharCode++));
if (this.currentCharCode &gt; 90) {
this.push(null);
}
}
});
inoutStream.currentCharCode = 65;
process.stdin.pipe(inoutStream).pipe(process.stdout);</code></pre><p>By combining the methods, we can use this duplex stream to read the letters from A to Z and we can also use it for its echo feature. We pipe the readable <code>stdin</code> stream into this duplex stream to use the echo feature and we pipe the duplex stream itself into the writable <code>stdout</code> stream to see the letters A through Z.</p><p>It’s important to understand that the readable and writable sides of a duplex stream operate completely independently from one another. This is merely a grouping of two features into an object.</p><p>A transform stream is the more interesting duplex stream because its output is computed from its input.</p><p>For a transform stream, we don’t have to implement the <code>read</code> or <code>write</code> methods, we only need to implement a <code>transform</code> method, which combines both of them. It has the signature of the <code>write</code> method and we can use it to <code>push</code> data as well.</p><p>Here’s a simple transform stream which echoes back anything you type into it after transforming it to upper case format:</p><pre><code class="language-js">const { Transform } = require('stream');
const upperCaseTr = new Transform({
transform(chunk, encoding, callback) {
this.push(chunk.toString().toUpperCase());
callback();
}
});
process.stdin.pipe(upperCaseTr).pipe(process.stdout);</code></pre><p>In this transform stream, which we’re consuming exactly like the previous duplex stream example, we only implemented a <code>transform()</code> method. In that method, we convert the <code>chunk</code> into its upper case version and then <code>push</code> that version as the readable part.</p><h4 id="streams-object-mode">Streams Object Mode</h4><p>By default, streams expect Buffer/String values. There is an <code>objectMode</code> flag that we can set to have the stream accept any JavaScript object.</p><p>Here’s a simple example to demonstrate that. The following combination of transform streams makes for a feature to map a string of comma-separated values into a JavaScript object. So <code>“a,b,c,d”</code> becomes <code>{a: b, c: d}</code>.</p><pre><code class="language-js">const { Transform } = require('stream');
const commaSplitter = new Transform({
readableObjectMode: true,
transform(chunk, encoding, callback) {
this.push(chunk.toString().trim().split(','));
callback();
}
});
const arrayToObject = new Transform({
readableObjectMode: true,
writableObjectMode: true,
transform(chunk, encoding, callback) {
const obj = {};
for(let i=0; i &lt; chunk.length; i+=2) {
obj[chunk[i]] = chunk[i+1];
}
this.push(obj);
callback();
}
});
const objectToString = new Transform({
writableObjectMode: true,
transform(chunk, encoding, callback) {
this.push(JSON.stringify(chunk) + '\n');
callback();
}
});
process.stdin
.pipe(commaSplitter)
.pipe(arrayToObject)
.pipe(objectToString)
const zlib = require('zlib');
const file = process.argv[2];
fs.createReadStream(file)
.pipe(zlib.createGzip())
.pipe(fs.createWriteStream(file + '.gz'));</code></pre><p>You can use this script to gzip any file you pass as the argument. We’re piping a readable stream for that file into the zlib built-in transform stream and then into a writable stream for the new gzipped file. Simple.</p><p>The cool thing about using pipes is that we can actually combine them with events if we need to. Say, for example, I want the user to see a progress indicator while the script is working and a “Done” message when the script is done. Since the <code>pipe</code> method returns the destination stream, we can chain the registration of events handlers as well:</p><pre><code class="language-js">const fs = require('fs');
const zlib = require('zlib');
const file = process.argv[2];
fs.createReadStream(file)
.pipe(zlib.createGzip())
.on('data', () =&gt; process.stdout.write('.'))
.pipe(fs.createWriteStream(file + '.zz'))
.on('finish', () =&gt; console.log('Done'));</code></pre><p>So with the <code>pipe</code> method, we get to easily consume streams, but we can still further customize our interaction with those streams using events where needed.</p><p>What’s great about the <code>pipe</code> method though is that we can use it to <em>compose</em> our program piece by piece, in a much readable way. For example, instead of listening to the <code>data</code> event above, we can simply create a transform stream to report progress, and replace the <code>.on()</code> call with another <code>.pipe()</code> call:</p><pre><code class="language-js">const fs = require('fs');
const zlib = require('zlib');
const file = process.argv[2];
const { Transform } = require('stream');
const reportProgress = new Transform({
transform(chunk, encoding, callback) {
process.stdout.write('.');
callback(null, chunk);
}
});
fs.createReadStream(file)
.pipe(zlib.createGzip())
.pipe(reportProgress)
.pipe(fs.createWriteStream(file + '.zz'))
.on('finish', () =&gt; console.log('Done'));</code></pre><p>This <code>reportProgress</code> stream is a simple pass-through stream, but it reports the progress to standard out as well. Note how I used the second argument in the <code>callback()</code> function to push the data inside the <code>transform()</code> method. This is equivalent to pushing the data first.</p><p>The applications of combining streams are endless. For example, if we need to encrypt the file before or after we gzip it, all we need to do is pipe another transform stream in that exact order that we needed. We can use Node’s <code>crypto</code> module for that:</p><pre><code class="language-js">const crypto = require('crypto');
// ...
fs.createReadStream(file)
.pipe(zlib.createGzip())
.pipe(crypto.createCipher('aes192', 'a_secret'))
.pipe(reportProgress)
.pipe(fs.createWriteStream(file + '.zz'))
.on('finish', () =&gt; console.log('Done'));</code></pre><p>The script above compresses and then encrypts the passed file and only those who have the secret can use the outputted file. We can’t unzip this file with the normal unzip utilities because it’s encrypted.</p><p>To actually be able to unzip anything zipped with the script above, we need to use the opposite streams for crypto and zlib in a reverse order, which is simple:</p><pre><code class="language-js">fs.createReadStream(file)
.pipe(crypto.createDecipher('aes192', 'a_secret'))
.pipe(zlib.createGunzip())
.pipe(reportProgress)
.pipe(fs.createWriteStream(file.slice(0, -3)))
.on('finish', () =&gt; console.log('Done'));</code></pre><p>Assuming the passed file is the compressed version, the code above will create a read stream from that, pipe it into the crypto <code>createDecipher()</code> stream (using the same secret), pipe the output of that into the zlib <code>createGunzip()</code> stream, and then write things out back to a file without the extension part.</p><p>That’s all I have for this topic. Thanks for reading! Until next time!</p><p>Learning React or Node? Checkout my books:</p><ul><li><a href="http://amzn.to/2peYJZj" rel="noopener">Learn React.js by Building Games</a></li><li><a href="http://amzn.to/2FYfYru" rel="noopener">Node.js Beyond the Basics</a></li></ul>
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
