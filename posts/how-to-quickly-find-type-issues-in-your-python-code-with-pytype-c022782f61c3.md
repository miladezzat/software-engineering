---
card: "/images/default.jpg"
tags: [Python]
description: "TL;DR — If you’re working on a large Python project or just l"
author: "Milad E. Fahmy"
title: "How to quickly find type-issues in your Python code with Pytype"
created: "2021-08-16T15:39:14+02:00"
modified: "2021-08-16T15:39:14+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-python tag-software-development tag-coding tag-tech tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">How to quickly find type-issues in your Python code with Pytype</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2019/08/python-1.jpeg 300w,
/news/content/images/size/w600/2019/08/python-1.jpeg 600w,
/news/content/images/size/w1000/2019/08/python-1.jpeg 1000w,
/news/content/images/size/w2000/2019/08/python-1.jpeg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2019/08/python-1.jpeg" alt="How to quickly find type-issues in your Python code with Pytype">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
def GetUsername(email_address):
match = re.match(r'([^@]+)@example\.com', email_address)
return match.group(1)</code></pre><p>Pretty straightforward. It extracts the part of an email address before the @ using a regular expression, and returns it. Did you notice the bug?</p><p>Let’s see what happens when we use <code>pytype</code> to check it:</p><pre><code class="language-py">% pytype get_username.py
Analyzing 1 sources with 0 dependencies
File "/.../get_username.py",
line 5, in GetUsername: No attribute 'group' on None [attribute-error]
In Optional[Match[str]]</code></pre><p>Pytype tells us that <code>group</code> is not a valid function call on <code>match</code>. Oh! <code>re.match()</code> returns <code>None</code> when no match is found. Indeed, in these cases <code>match.group(1)</code> will throw an exception.</p><p>Let’s fix the bug, by having the function return None for an invalid email address:</p><pre><code class="language-py">import re
def GetUsername(email_address):
match = re.match(r'([^@]+)@example\.com', email_address)
if match is None:
return None
return match.group(1)  # &lt;-- Here, match can't be None</code></pre><p>Now, when we re-run <code>pytype</code>, the error is gone. Pytype infers that if the code after the <strong>if </strong>gets executed, match is guaranteed not to be <code>None</code>.</p><h3 id="example-2-validation-of-type-annotations">Example #2: Validation of type annotations</h3><p>In Python 3, you can type-annotate (<a href="https://www.python.org/dev/peps/pep-0484" rel="noopener">PEP 484</a>) your code to help type-checking tools <strong>and other developers </strong>understand your intention. Pytype is able to alert when your type annotations have mistakes:</p><pre><code class="language-py">import re
from typing import Match
def GetEmailMatch(email) -&gt; Match:
return re.match(r'([^@]+)@example\.com', email)</code></pre><p>Let’s use <code>pytype</code> to check this code snippet:</p><pre><code class="language-py">% pytype example.py
Analyzing 1 sources with 0 dependencies
File "/.../example.py", line 5, in GetEmailMatch:
bad option in return type [bad-return-type]
Expected: Match
Actually returned: None</code></pre><p>Pytype is telling us that <code>GetEmailMatch</code> might return <code>None</code>, but we annotated its return type as <code>Match</code>. To fix this, we can use the <code>Optional</code> type annotation from the typing module:</p><pre><code class="language-py">import re
from typing import Match, Optional
def GetEmailMatch(email) -&gt; Optional[Match]:
return re.match(r'([^@]+)@example\.com', email)</code></pre><p><code>Optional</code> means that the return value can be a <code>Match</code> object or <code>None</code>.</p><h3 id="example-3-merging-back-inferred-type-information">Example #3: Merging back inferred type information</h3><p>To help you adopt type annotations, Pytype can add them into the code for you. Let’s look at this code snippet:</p><pre><code class="language-py">import re
def GetEmailMatch(email):
return re.match(r'([^@]+)@example\.com', email)
def GetUsername(email_address):
match = GetEmailMatch(email_address)
if match is None:
return None
return match.group(1)</code></pre><p>To add type annotations to this code, we first run <code>pytype</code> on the file. <code>pytype</code> saves the inferred type information into a <code>.pyi</code> file. Then, we can run <code>merge-pyi</code> to merge the type annotations back into the code:</p><pre><code>% pytype email.py
% merge-pyi -i email.py pytype_output/email.pyi</code></pre><p>And voilà!</p><pre><code class="language-py">import re
from typing import Match
from typing import Optional
def GetEmailMatch(email) -&gt; Optional[Match[str]]:
return re.match(r'([^@]+)@example\.com', email)
def GetUsername(email_address) -&gt; Optional[str]:
match = GetEmailMatch(email_address)
if match is None:
return None
return match.group(1)</code></pre><p>The type annotations, including <code>import</code> statements, are now in the source file.</p><p>For more usage examples and installation instructions, please visit <a href="https://github.com/google/pytype" rel="noopener">Pytype on GitHub</a>.</p><p>Thanks for reading!</p>
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
