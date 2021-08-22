---
card: "/images/default.jpg"
tags: [Automation]
description: "What if I told you that you could automatically create docume"
author: "Milad E. Fahmy"
title: "How to Create Documentation from Your Python Tests"
created: "2021-08-16T15:35:34+02:00"
modified: "2021-08-16T15:35:34+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-automation tag-documentation tag-python tag-testing ">
<header class="post-full-header">
<h1 class="post-full-title">How to Create Documentation from Your Python Tests</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/09/docs-from_tests_example_graph.png 300w,
/news/content/images/size/w600/2020/09/docs-from_tests_example_graph.png 600w,
/news/content/images/size/w1000/2020/09/docs-from_tests_example_graph.png 1000w,
/news/content/images/size/w2000/2020/09/docs-from_tests_example_graph.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/09/docs-from_tests_example_graph.png" alt="How to Create Documentation from Your Python Tests">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>What if I told you that you could automatically create documentation from your existing tests that would always be up to date? </p><p>And what if it could be in markdown format, so it would be committed along with the rest of your code, and be shown on GitLab / GitHub?</p><p>Sounds pretty cool, right? Let's see how it's done.</p><h3 id="context">Context</h3><p>People like <a href="https://c4model.com/">Simon Brown</a> do a great job of convincing me that I don't have enough documentation for my projects. And that the documentation should be up to date, and show concise information at a variety of levels of abstraction. </p><p>I would love to work on a code base with documentation like that.</p><h2 id="the-problem-with-documentation">The Problem with Documentation</h2><p>I have read a good number of <a href="https://www.goodreads.com/book/show/44144493-fundamentals-of-software-architecture">books</a> and articles about software architecture and related things. But I have never been able to summon up enough energy, or enough political capital, to be able to create documentation to this standard. Let alone keep it up to date.</p><p>So, for my situation at least, I need a way of creating and updating documentation automatically. </p><p>I would also like to store the diagrams "as code", so that they can be checked in to the repository. This way, changes to them can be easily seen and discussed in pull requests and other code reviews.</p><p>There are many <a href="https://structurizr.com/help/code">tools</a> that can generate build time dependency diagrams from code, and I have used quite a few of them. </p><p>But the problem seems to be that these diagrams always look like spaghetti, even when the code is good. And they are complex to set up. </p><p>It seems to be very hard to get the level of detail right. There is no way to show related code in logical groups for high level diagrams. There is also no way to pick out code relationships that are specific to a particular context for low level diagrams. </p><p>They also give you no information about the run time relationships of the code, which is usually a bigger issue than the design time relationships.</p><h2 id="a-solution">A solution</h2><p>To capture run time relationships, generating diagrams from running code is the only option. And we already have plenty of code that is executed regularly, in the form of tests.</p><p>Repositories should already have a good suite of tests (unit, integration and end to end, for example), and each test should be relatively short and simple. </p><p>These tests should already embody logical groupings of code, and sensible levels of abstraction. So they are an excellent candidate for generating documentation.</p><p>The solution involves instrumenting the code imported by a test. This instrumented code then keeps a record of the run time call hierarchy, and is able to write the results as a <a href="https://mermaid-js.github.io/mermaid/#/">Mermaid markdown diagram</a> (tecnhically a <a href="http://agilemodeling.com/artifacts/sequenceDiagram.htm">sequence diagram</a>).</p><p>The code below (<a href="https://github.com/resgroup/docs-from-tests/blob/master/tests/test_hello_world.py">a test from the python package</a>) shows how it works. </p><p>For each existing test you create a "wrapper" test, which is responsible for initialising the call hierarchy and saving the diagram. If you have a lot of tests you might want to introduce a <a href="https://realpython.com/primer-on-python-decorators/">decorator</a> to save repetition.</p><pre><code class="language-python">from docs_from_tests.instrument_call_hierarchy import instrument_and_import_package, instrument_and_import_module, initialise_call_hierarchy, finalise_call_hierarchy
from samples.hello_world_combiner import HelloWorldCombiner
# you can instrument entire packages / folders at once like this
instrument_and_import_package(os.path.join(Path(__file__).parent.absolute(), '..', 'samples'), 'samples')
# You can instrument individual modules like this
# instrument_and_import_module('tests.blah')
# this is a wrapper around the test that also outputs the documentation / sequence diagram
def test_hello_world():
# the initialises the recording of the call hierarchy
initialise_call_hierarchy('start')
# This runs the actual test
_test_hello_world()
# this finalises the call hierarchy and returns the root
root_call = finalise_call_hierarchy()
# this returns a sequence diagram of the call hierarchy
sequence_diagram = root_call.sequence_diagram(
show_private_functions=False,
excluded_functions=[
'HelloWorldCombiner.__init__',
]
)
# this writes out the markdown to disk
sequence_diagram_filename = os.path.join(os.path.dirname(__file__), '..', 'doc', 'top-level-sequence-diagram.md')
Path(sequence_diagram_filename).write_text(sequence_diagram)
# this is the original / source test
def _test_hello_world():
assert HelloWorldCombiner().combine() == 'Hello world'
</code></pre><p>Running <code>pytest</code> on this code will result in the test being run, and the <a href="https://github.com/resgroup/docs-from-tests/blob/master/doc/top-level-sequence-diagram.md">markdown "diagram as code"</a> (below) being created in the doc directory:</p><pre><code>sequenceDiagram
start-&gt;&gt;HelloWorldCombiner.combine: calls x1
HelloWorldCombiner.combine-&gt;&gt;hello: calls x1
hello--&gt;&gt;HelloWorldCombiner.combine: returns str
HelloWorldCombiner.combine-&gt;&gt;world: calls x1
world--&gt;&gt;HelloWorldCombiner.combine: returns str
HelloWorldCombiner.combine--&gt;&gt;start: returns str
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
