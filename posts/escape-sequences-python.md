---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c9e3b740569d1a4ca3c0a.jpg"
tags: [Python]
description: "Escape sequences allow you to include special characters in s"
author: "Milad E. Fahmy"
title: "Escape Sequences in Python"
created: "2021-08-16T15:38:06+02:00"
modified: "2021-08-16T15:38:06+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-python tag-toothbrush ">
<header class="post-full-header">
<h1 class="post-full-title">Escape Sequences in Python</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c9e3b740569d1a4ca3c0a.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9e3b740569d1a4ca3c0a.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9e3b740569d1a4ca3c0a.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9e3b740569d1a4ca3c0a.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c9e3b740569d1a4ca3c0a.jpg" alt="Escape Sequences in Python">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>Escape sequences allow you to include special characters in strings. To do this, simply add a backslash (<code>\</code>) before the character you want to escape.</p><p>For example, imagine you initialized a string with single quotes:</p><pre><code class="language-py">s = 'Hey, whats up?'
print(s)</code></pre><p><strong>Output:</strong></p><pre><code class="language-sh">Hey, whats up?</code></pre><p>But if you include an apostrophe without escaping it, then you will get an error:</p><pre><code class="language-py">s = 'Hey, what's up?'
print(s)</code></pre><p><strong>Output:</strong></p><pre><code class="language-sh">  File "main.py", line 1
s = 'Hey, what's up?'
^
SyntaxError: invalid syntax</code></pre><p>To fix this, just escape the apostrophe:</p><pre><code class="language-py">s = 'Hey, what\'s up?'
print(s)</code></pre><p>To add newlines to your string, use <code>\n</code>:</p><pre><code>print("Multiline strings\ncan be created\nusing escape sequences.")</code></pre><p><strong>Output:</strong></p><pre><code>Multiline strings
can be created
using escape sequences.</code></pre><p>An important thing to remember is that, if you want to include a backslash character in a string, you will need to escape that. For example, if you want to print a directory path in Windows, you'll need to escape each backslash in the string:</p><pre><code class="language-py">print("C:\\Users\\Pat\\Desktop")</code></pre><p><strong>Output:</strong></p><pre><code>C:\Users\Pat\Desktop</code></pre><h2 id="raw-strings">Raw strings</h2><p>A <em>raw</em> string can be used by prefixing the string with <code>r</code> or <code>R</code>, which allows for backslashes to be included without the need to escape them. For example:</p><pre><code class="language-py">print(r"Backslashes \ don't need to be escaped in raw strings.")
</code></pre><p><strong>Output:</strong></p><pre><code>Backslashes \ don't need to be escaped in raw strings.</code></pre><p>But keep in mind that unescaped backslashes at the end of a raw string will cause and error:</p><pre><code>print(r"There's an unescaped backslash at the end of this string\")</code></pre><p><strong>Output:</strong></p><pre><code>  File "main.py", line 1
print(r"There's an unescaped backslash at the end of this string\")
^
<thead>
<tr>
<th>Escape Sequence</th>
<th>Meaning</th>
</tr>
</thead>
<tbody>
<tr>
<td>\</td>
<td>Backslash (<code>\</code>)</td>
</tr>
<tr>
<td>'</td>
<td>Single quote (<code>'</code>)</td>
</tr>
<tr>
<td>"</td>
<td>Double quote (<code>"</code>)</td>
</tr>
<tr>
<td>\n</td>
<td>ASCII Linefeed (adds newline)</td>
</tr>
<tr>
<td>\b</td>
<td>ASCII Backspace</td>
</tr>
</tbody>
</table>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
