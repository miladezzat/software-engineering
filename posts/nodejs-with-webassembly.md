---
card: "/images/default.jpg"
tags: [Node]
author: "Milad E. Fahmy"
title: "Node.js with WebAssembly"
created: "2021-08-20T13:41:01+02:00"
modified: "2021-08-20T13:41:01+02:00"
---
<div id="___gatsby"><div style="outline:none" tabindex="-1" id="gatsby-focus-wrapper"><div class="layout-container"><main class="grid-container"><article class="article-reader"><h1 class="article-reader__headline">Node.js with WebAssembly</h1><div><p>WebAssembly is a high-performance assembly-like language that can be compiled from a myriad of languages including C/C++, Rust, and AssemblyScript. As of right now, it is supported by Chrome, Firefox, Safari, Edge, and Node.js!</p><p>The WebAssembly specification details two file formats, a binary format called a WebAssembly Module with a <code class="language-text">.wasm</code> extension and corresponding text representation called WebAssembly Text format with a <code class="language-text">.wat</code> extension.</p><h2 id="key-concepts" style="position:relative"><a href="#key-concepts" aria-label="key concepts permalink" class="autolink-headers before"><svg aria-hidden="true" height="20" version="1.1" viewBox="0 0 16 16" width="20"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Key Concepts</h2><ul><li>Module - A compiled WebAssembly binary, ie a <code class="language-text">.wasm</code> file.</li><li>Memory - A resizable ArrayBuffer.</li><li>Table - A resizable typed array of references not stored in Memory.</li><li>Instance - An instantiation of a Module with its' Memory, Table, and variables.</li></ul><p>In order to use WebAssembly, you need a <code class="language-text">.wasm</code> binary file and a set of APIs to communicate with WebAssembly. Node.js provides the necessary APIs via the global <code class="language-text">WebAssembly</code> object.</p><pre class="prism-code language-js"><div class="shell-box-top"><span>JS</span><button type="button">copy</button></div><div class="token-line"><span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token known-class-name class-name">WebAssembly</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token plain"></span></div><div class="token-line"><span class="token plain"></span><span class="token comment">/*</span></div><div class="token-line"><span class="token comment">Object [WebAssembly] {</span></div><div class="token-line"><span class="token comment">  compile: [Function: compile],</span></div><div class="token-line"><span class="token comment">  validate: [Function: validate],</span></div><div class="token-line"><span class="token comment">  instantiate: [Function: instantiate]</span></div><div class="token-line"><span class="token comment">}</span></div><div class="token-line"><span class="token comment">*/</span><span class="token plain"></span></div><div class="token-line"><span class="token plain">
</span></div></pre><h2 id="generating-webassembly-modules" style="position:relative"><a href="#generating-webassembly-modules" aria-label="generating webassembly modules permalink" class="autolink-headers before"><svg aria-hidden="true" height="20" version="1.1" viewBox="0 0 16 16" width="20"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Generating WebAssembly Modules</h2><p>There are multiple methods available to generate WebAssembly binary files including:</p><ul><li>Writing WebAssembly (<code class="language-text">.wat</code>) by hand and converting to binary format using tools such as <a href="https://github.com/webassembly/wabt">wabt</a></li><li>Using <a href="https://emscripten.org/">emscripten</a> with a C/C++ application</li><li>Using <a href="https://rustwasm.github.io/wasm-pack/book/">wasm-pack</a> with a Rust application</li><li>Using <a href="https://www.assemblyscript.org/">AssemblyScript</a> if you prefer a TypeScript-like experience</li></ul><blockquote><p>Some of these tools generate not only the binary file, but the JavaScript "glue" code and corresponding HTML files to run in the browser.</p></blockquote><h2 id="how-to-use-it" style="position:relative"><a href="#how-to-use-it" aria-label="how to use it permalink" class="autolink-headers before"><svg aria-hidden="true" height="20" version="1.1" viewBox="0 0 16 16" width="20"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>How to use it</h2><p>Once you have a WebAssembly module, you can use the Node.js <code class="language-text">WebAssembly</code> object to instantiate it.</p><pre class="prism-code language-js"><div class="shell-box-top"><span>JS</span><button type="button">copy</button></div><div class="token-line"><span class="token comment">// Assume add.wasm file exists that contains a single function adding 2 provided arguments</span><span class="token plain"></span></div><div class="token-line"><span class="token plain"></span><span class="token keyword">const</span><span class="token plain"> fs </span><span class="token operator">=</span><span class="token plain"> </span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'fs'</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token plain"></span></div><div class="token-line"><span class="token plain"></span><span class="token keyword">const</span><span class="token plain"> wasmBuffer </span><span class="token operator">=</span><span class="token plain"> fs</span><span class="token punctuation">.</span><span class="token method function property-access">readFileSync</span><span class="token punctuation">(</span><span class="token string">'/path/to/add.wasm'</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token plain"></span></div><div class="token-line"><span class="token plain"></span><span class="token known-class-name class-name">WebAssembly</span><span class="token punctuation">.</span><span class="token method function property-access">instantiate</span><span class="token punctuation">(</span><span class="token plain">wasmBuffer</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token method function property-access">then</span><span class="token punctuation">(</span><span class="token parameter">wasmModule</span><span class="token plain"> </span><span class="token arrow operator">=&gt;</span><span class="token plain"> </span><span class="token punctuation">{</span><span class="token plain"></span></div><div class="token-line"><span class="token plain">  </span><span class="token comment">// Exported function live under instance.exports</span><span class="token plain"></span></div><div class="token-line"><span class="token plain">  </span><span class="token keyword">const</span><span class="token plain"> add </span><span class="token operator">=</span><span class="token plain"> wasmModule</span><span class="token punctuation">.</span><span class="token property-access">instance</span><span class="token punctuation">.</span><span class="token property-access">exports</span><span class="token punctuation">.</span><span class="token property-access">add</span><span class="token punctuation">;</span><span class="token plain"></span></div><div class="token-line"><span class="token plain">  </span><span class="token keyword">const</span><span class="token plain"> sum </span><span class="token operator">=</span><span class="token plain"> </span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token plain"> </span><span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token plain"></span></div><div class="token-line"><span class="token plain">  </span><span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token plain">sum</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token plain"> </span><span class="token comment">// Outputs: 11</span><span class="token plain"></span></div><div class="token-line"><span class="token plain"></span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token plain"></span></div><div class="token-line"><span class="token plain">
</span></div></pre><h2 id="interacting-with-the-os" style="position:relative"><a href="#interacting-with-the-os" aria-label="interacting with the os permalink" class="autolink-headers before"><svg aria-hidden="true" height="20" version="1.1" viewBox="0 0 16 16" width="20"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Interacting with the OS</h2><p>WebAssembly modules cannot directly access OS functionality on its own. A third-party tool <a href="https://docs.wasmtime.dev/">Wasmtime</a> can be used to access this functionality. <code class="language-text">Wasmtime</code> utilizes the <a href="https://wasi.dev/">WASI</a> API to access the OS functionality.</p><h2 id="resources" style="position:relative"><a href="#resources" aria-label="resources permalink" class="autolink-headers before"><svg aria-hidden="true" height="20" version="1.1" viewBox="0 0 16 16" width="20"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Resources</h2><ul><li><a href="https://webassembly.org/">General WebAssembly Information</a></li><li><a href="https://developer.mozilla.org/en-US/docs/WebAssembly">MDN Docs</a></li><li><a href="https://webassembly.github.io/spec/core/text/index.html">Write WebAssembly by hand</a></li></ul></div></article></main></div></div><div id="gatsby-announcer" style="position:absolute;top:0;width:1px;height:1px;padding:0;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border:0" aria-live="assertive" aria-atomic="true"></div></div>