---
card: "https://cdn-media-1.freecodecamp.org/images/1*ZhP-Sh-b9W-Y4IeI84prkw.png"
tags: [Go]
description: by Ridham Tarpara
author: "Milad E. Fahmy"
title: "All you need to know about Go version 1.11"
created: "2021-08-15T19:42:29+02:00"
modified: "2021-08-15T19:42:29+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-go tag-webassembly tag-tech tag-programming tag-javascript ">
<header class="post-full-header">
<h1 class="post-full-title">All you need to know about Go version 1.11</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*ZhP-Sh-b9W-Y4IeI84prkw.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*ZhP-Sh-b9W-Y4IeI84prkw.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*ZhP-Sh-b9W-Y4IeI84prkw.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*ZhP-Sh-b9W-Y4IeI84prkw.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*ZhP-Sh-b9W-Y4IeI84prkw.png" alt="All you need to know about Go version 1.11">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Ridham Tarpara</p>
<h1 id="all-you-need-to-know-about-go-version-1-11">All you need to know about Go version 1.11</h1>
<p>Go 1.11 hit the ground on 24 August 2018. It introduces a few really needed tools and components such as versioned modules, WebAssembly support, and debugging improvements. It also brings some changes to core packages and performance/run-time.</p>
<p>As always, the release maintains the Go 1 <a href="https://golang.org/doc/go1compat.html" rel="noopener">promise of compatibility</a>. So almost all Go programs continue to compile and run as before with this update. There are no changes to the language specification.</p>
<p>Let’s take a look at what’s new.</p>
<h3 id="modules"><strong>Modules</strong></h3>
<p>Go 1.11 includes experimental support for Go modules, including a new module-aware <code>go get</code> command.</p>
<p>The quickest way to take advantage of the new module support is to check out your repository into a directory<strong> outside,</strong> create a go.mod file and run Go commands from within that file tree.</p>
<p>Let’s demo this. I am using the <a href="https://github.com/stretchr/testify" rel="noopener">testify-powerful and standard Go testing libraries</a>.</p>
<p>Let’s clone the testify repo in my favorite folder <code>~/proj/github</code> .</p><pre><code>$ git clone https://github.com/stretchr/testify ~/proj/github/testify$ cd ~/proj/github/testify</code></pre>
<p>Now, to use Go commands from here, you need to initialize this repo as a module with the following command:</p><pre><code>go mod init github.com/stretchr/testify</code></pre>
<p>Where <code>github.com/stretchr/testify</code> is the location you would generally put this repo, under the Go src folder.</p>
<p>This command will create a go.mod file in the root of the folder. In a project already using an existing dependency management tool like godep, glide, or dep, <code>go mod init</code> will also add require statements matching the existing configuration.</p>
<p>Now if you open the <code>go.mod</code> file, you can see the list of dependencies with the module name.</p><pre><code>$ vi go.mod</code></pre><pre><code>module github.com/stretchr/testify</code></pre><pre><code>require (    github.com/davecgh/go-spew v1.1.0    github.com/pmezard/go-difflib v1.0.0    github.com/stretchr/objx v0.1.0)</code></pre>
<p>As you’ll notice, these three are the dependencies of the testify. This is testify’s <code>Gopkg.toml</code> file:</p><pre><code>[prune] unused-packages = true non-go = true go-tests = true</code></pre><pre><code>[[constraint]] name = “github.com/davecgh/go-spew” version = “~1.1.0”</code></pre><pre><code>[[constraint]] name = “github.com/pmezard/go-difflib” version = “~1.0.0”</code></pre><pre><code>[[constraint]] name = “github.com/stretchr/objx” version = “~0.1.0”</code></pre>
<p>Now that the module has been initialized, you can use any Go command from this folder.</p><pre><code>╭─ ~/proj/github/testify  ‹master*› ╰─$ go build                               go: finding github.com/davecgh/go-spew v1.1.0go: finding github.com/pmezard/go-difflib v1.0.0go: finding github.com/stretchr/objx v0.1.0go: downloading github.com/davecgh/go-spew v1.1.0go: downloading github.com/pmezard/go-difflib v1.0.0go: downloading github.com/stretchr/objx v0.1.0</code></pre><pre><code>╭─ ~/proj/github/testify  ‹master*› ╰─$ go test PASSok   github.com/stretchr/testify 0.001s</code></pre>
<p>So with Go 1.11 and modules, you can write your Go modules <em>anywhere you like and you don’t need to maintain a copy</em> in<em> </em>a specific sub directory of your <code>$GOPATH</code>.</p>
<h3 id="webassembly">WebAssembly</h3>
<p>Go 1.11 adds an experimental port to WebAssembly.</p>
<blockquote>WebAssembly (abbreviated <em>Wasm</em>) is a binary instruction format for a stack-based virtual machine. Wasm is designed as a portable target for compilation of high-level languages like C/C++/Rust, enabling deployment on the web for client and server applications.</blockquote>
<p>Now we can run Go in the browser, and vice versa — we can run JavaScript in Go easily. Although this feature is in the experimental state, it’s still pretty useful.</p>
<p>This small example calls Go from the Web:</p>
<p><strong>wasm-exec.html</strong></p><pre><code>&lt;!doctype html&gt;&lt;!--Copyright 2018 The Go Authors. All rights reserved.Use of this source code is governed by a BSD-stylelicense that can be found in the LICENSE file.--&gt;&lt;html&gt;</code></pre><pre><code>&lt;head&gt;    &lt;meta charset="utf-8"&gt;    &lt;title&gt;Go wasm&lt;/title&gt;&lt;/head&gt;</code></pre><pre><code>&lt;body&gt;    &lt;script src="wasm_exec.js"&gt;&lt;/script&gt;    &lt;script&gt;        if (!WebAssembly.instantiateStreaming) { // polyfill            WebAssembly.instantiateStreaming = async (resp, importObject) =&gt; {                const source = await (await resp).arrayBuffer();                return await WebAssembly.instantiate(source, importObject);            };        }        const go = new Go();        let mod, inst;        WebAssembly.instantiateStreaming(fetch("test.wasm"), go.importObject).then((result) =&gt; {            mod = result.module;            inst = result.instance;            document.getElementById("runButton").disabled = false;        });        let printMessage // Our reference to the Go callback        let printMessageReceived // Our promise        let resolvePrintMessageReceived // Our promise resolver        function setPrintMessage(callback) {          printMessage = callback          resolvePrintMessageReceived()        }        async function run() {          console.clear()          // Create the Promise and store its resolve function          printMessageReceived = new Promise(resolve =&gt; {            resolvePrintMessageReceived = resolve          })          const run = go.run(inst) // Start the wasm binary          await printMessageReceived // Wait for the callback reception          printMessage('Hello Wasm!') // Invoke the callback          await run // Wait for the binary to terminate          inst = await WebAssembly.instantiate(mod, go.importObject) // reset instance        }    &lt;/script&gt;</code></pre><pre><code>&lt;button onClick="run();" id="runButton" disabled&gt;Run&lt;/button&gt;&lt;/body&gt;</code></pre><pre><code>&lt;/html&gt;</code></pre>
<p><strong>go-call.go</strong></p><pre><code>package main</code></pre><pre><code>import (  "fmt"  "syscall/js")</code></pre><pre><code>var done = make(chan struct{})</code></pre><pre><code>func main() {  callback := js.NewCallback(printMessage)  defer callback.Release() // To defer the callback releasing is a good practice  setPrintMessage := js.Global().Get("setPrintMessage")  setPrintMessage.Invoke(callback)  &lt;-done}</code></pre><pre><code>func printMessage(args []js.Value) {  message := args[0].String()  fmt.Println(message)  done &lt;- struct{}{} // Notify printMessage has been called}</code></pre>
<p>You can find more examples <a href="https://github.com/nlepage/golang-wasm/blob/master/examples" rel="noopener">here</a>. And here is a video on <a href="https://www.youtube.com/watch?v=4kBvvk2Bzis&amp;feature=youtu.be" rel="noopener">building a calculator with WebAssembly</a>.</p>
<h3 id="other-changes-to-consider"><strong>Other changes to consider</strong></h3>
<ul>
<li>Because Go module support assigns special meaning to the <code>@</code> symbol in command line operations, the <code>go</code>command now disallows the use of import paths containing <code>@</code> symbols.</li>
<li>With the new <code>runtime/trace</code> package's <a href="https://golang.org/pkg/runtime/trace/#hdr-User_annotation" rel="noopener">user annotation API</a>, users can record application-level information in execution traces and create groups of related goroutines. The <code>go</code> <code>tool</code> <code>trace</code> command visualizes this information in the trace view and the new user task/region analysis page.</li>
<li>The runtime now uses a sparse heap layout so there is no longer a limit to the size of the Go heap (previously, the limit was 512GiB). This also fixes rare “address space conflict” failures in mixed Go/C binaries or binaries compiled with <code>-race</code>.</li>
<li><a href="https://golang.org/pkg/time/" rel="noopener">time</a>: Parsing of timezones denoted by sign and offset is now supported. In previous versions, numeric timezone names (such as <code>+03</code>) were not considered valid, and only three-letter abbreviations (such as <code>MST</code>) were accepted when expecting a timezone name.</li>
<li><a href="https://golang.org/pkg/text/scanner/" rel="noopener">text/scanner</a>: The <code><a href="https://golang.org/pkg/text/scanner/#Scanner.Scan" rel="noopener">Scanner.Scan</a></code> method now returns the <code><a href="https://golang.org/pkg/text/scanner/#RawString" rel="noopener">RawString</a></code> token instead of <code><a href="https://golang.org/pkg/text/scanner/#String" rel="noopener">String</a></code> for raw string literals.</li>
<li>There are changes in <a href="https://golang.org/pkg/crypto/" rel="noopener">crypto</a>, <a href="https://golang.org/pkg/encoding/" rel="noopener">encoding</a>, <a href="https://golang.org/pkg/net/http/" rel="noopener">net/http</a>, <a href="https://golang.org/pkg/os/" rel="noopener">os</a>, <a href="https://golang.org/pkg/runtime/" rel="noopener">runtime</a>, <a href="https://golang.org/pkg/sync/" rel="noopener">sync</a>, <a href="https://golang.org/pkg/mime/" rel="noopener">mime</a> and few others which you can read about <a href="https://golang.org/doc/go1.11#library" rel="noopener">here</a>.</li>
</ul>
<p>If you enjoyed this article, spare me some claps — it means the world to the writer. Follow me if you want to read more articles about Go, JavaScript, Technology, and Startups.</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
