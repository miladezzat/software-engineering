---
card: "https://cdn-media-1.freecodecamp.org/images/1*aOUY9bnxHsfHrZgyDz8_XA.jpeg"
tags: [Programming]
description: "You don’t realize the value of a debugger until you’re stuck "
author: "Milad E. Fahmy"
title: "How to hack together a graphical Python debugger"
created: "2021-08-16T15:43:04+02:00"
modified: "2021-08-16T15:43:04+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-programming tag-python tag-tutorial tag-technology tag-software-development ">
<header class="post-full-header">
<h1 class="post-full-title">How to hack together a graphical Python debugger</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*aOUY9bnxHsfHrZgyDz8_XA.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*aOUY9bnxHsfHrZgyDz8_XA.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*aOUY9bnxHsfHrZgyDz8_XA.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*aOUY9bnxHsfHrZgyDz8_XA.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*aOUY9bnxHsfHrZgyDz8_XA.jpeg" alt="How to hack together a graphical Python debugger">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<h4 id="zero-to-debugging-in-15-mins">Zero-to-Debugging in 15 mins</h4><p>You don’t realize the value of a debugger until you’re stuck working on a hard-to-visualize problem. But once you fire up a development environment with decent debugging capabilities, you’ll never look back.</p><p>Want to know where you’re at in code execution? What’s taking so long? Just pause it and check.</p><p>Wonder what value is assigned to that variable? Mouse over it.</p><p>Want to skip a bunch of code and continue running from a different section? Go for it.</p><p>Sometimes <code>print(variable_name)</code> is just not enough to give you an idea of what’s going on with your project. This is when a good debugger can help you figuring things out.</p><p>Python already gives you a built-in debugger in the form of <em>pdb </em>(a command line tool). But thanks to Python’s awesome community, there are a more options that feature graphical interfaces. And there are a ton of Integrated Developer Environments (IDEs) that work with Python, such as <a href="https://www.jetbrains.com/pycharm/" rel="noopener">JetBrain’s PyCharm</a>, <a href="https://wingware.com/" rel="noopener">Wingare’s WingIDE</a>, and even <a href="https://beta.visualstudio.com/vs/community/" rel="noopener">Microsoft’s Visual Studio Community</a>.</p><p>But you’re not here to hear how one debugger is better than another, or which one is prettier, or more elegant. You’re here to learn how simple it is to write a python debugger that steps through your code. That gives you a glimpse into Python’s internals.</p><p>I’m going to show you how you can build one, and in doing so scratch an itch I’ve had for a long time.</p><p>Now let’s get to it.</p><h3 id="a-quick-primer-on-how-python-code-is-organized-and-processed">A quick primer on how Python code is organized and processed</h3><p>Contrary to popular belief, Python is actually a compiled language. When you execute code, your module is run through a compiler that spits out <em>bytecode </em>which is cached as <em>.pyc</em> or <em>__pycache__</em> files. The bytecode itself is what later is executed line by line.</p><p>In fact, the actual CPython code that runs a program is nothing more than a gigantic switch case statement running in a loop. It’s an if-else statement that looks at an instruction’s bytecode, then dispositions it based on what that operation is intended to do.</p><p>The executable bytecode instructions are internally referenced as<strong><em> </em></strong><em>code objects</em>, and the <em>dis </em>and <em>inspect </em>modules are used to produce or interpret them. These are immutable structures, that although referenced by other objects — like functions — do not contain any references themselves.</p><p>You can easily look at the bytecode that represents any given source through <code>dis.dis()</code>. Just give it a try with a random function or class. It’s a neat little exercise that’ll help you visualize what’s going on. The output will look something like this:</p><pre><code class="language-python">&gt;&gt;&gt; def sample(a, b):
...     x = a + b
...     y = x * 2
...     print('Sample: ' + str(y))
...
&gt;&gt;&gt; import dis
&gt;&gt;&gt; dis.dis(sample)
2 0 LOAD_FAST                0 (a)
3 LOAD_FAST                1 (b)
6 BINARY_ADD
7 STORE_FAST               2 (x)
310 LOAD_FAST                2 (x)
13 LOAD_CONST               1 (2)
16 BINARY_MULTIPLY
17 STORE_FAST               3 (y)
420 LOAD_GLOBAL              0 (print)
23 LOAD_CONST               2 ('Sample: ')
26 LOAD_GLOBAL              1 (str)
29 LOAD_FAST                3 (y)
32 CALL_FUNCTION            1 (1 positional, 0 keyword pair)
35 BINARY_ADD
36 CALL_FUNCTION            1 (1 positional, 0 keyword pair)
39 POP_TOP
40 LOAD_CONST               0 (None)
43 RETURN_VALUE</code></pre><p>Notice that each line in bytecode references its respective position in source code on the left column, and that it’s not a one-to-one relationship. There could be multiple smaller — one could even say atomic — operations that makeup a higher level instruction.</p><p>A <em>frame object</em> in python is what represents an execution frame. It contains a reference to the code object that’s currently executing, the local variables that it’s running with, the global names (variables) that are available and references to any related frames (like the parent that spawned it).</p><p>There are lot more details about these objects to discuss here, but hopefully this is enough to wet your appetite. You won’t need much more for the purposes of our debugger, though you should check out the Diving Deeper section for links on where to look next.</p><h3 id="enter-the-sys-module">Enter the sys module</h3><p>Python provides a number of utilities in its standard library through the <em>sys </em>module. Not only are there things like <em>sys.path </em>to get the python path or <em>sys.platform </em>to help find details about the OS in which you are running, but there’s also <code>sys.settrace()</code> and <code>sys.setprofile()</code> to help write language tools.</p><p>Yes, you read that right. Python already has built-in hooks to help analyze code and interact with program execution. The <code>sys.settrace()</code> function will allow you to run a callback whenever execution advances to a new frame object and gives us a reference to it, which in turn provides the code object you’re working with.</p><p>For a quick example of how this looks, let’s reuse the function from earlier:</p><pre><code class="language-py">def sample(a, b):
x = a + b
y = x * 2
print('Sample: ' + str(y))</code></pre><p>Assuming that every time a new frame is executed, you want a callback that prints the code object and line number its executing, you can define it as:</p><pre><code class="language-py">def trace_calls(frame, event, arg):
if frame.f_code.co_name == "sample":
print(frame.f_code)</code></pre><p>Now it’s simply a matter of setting it as our trace callback:</p><pre><code class="language-py">sys.settrace(trace_calls)</code></pre><p>And executing <em>sample(3,2)</em> should produce</p><pre><code>$ python debugger.py
&lt;code object sample at 0x0000000000B46C90, file “.\test.py”, line 123&gt;
Sample: 10</code></pre><p>You need the if-statement to filter out function calls. Otherwise you’ll see a whole bunch of things that you don’t care about, especially when printing to the screen. Try it.</p><p>The code and frame objects have quite a few fields to describe what they represent. These include things like the file being executed, the function, variable names, arguments, line numbers, and the list goes on. They are fundamental to the execution of any python code and you can go through the language documentation for more details.</p><h3 id="what-if-you-want-to-debug-every-line">What if you want to debug every line?</h3><p>The trace mechanism will set subsequent callbacks depending on the return value of the first callback. Returning <em>None</em> means that you’re finished, while returning another function effectively sets it as the trace function inside that frame.</p><p>Here’s what this looks like:</p><pre><code>5    def sample(a, b):
6  x = a + b
7  y = x * 2
8  print('Sample: ' + str(y))
9
10   def trace_calls(frame, event, arg):
11 if frame.f_code.co_name == "sample":
12     print(frame.f_code)
13     return trace_lines
14 return
15
16   def trace_lines(frame, event, arg):
17 print(frame.f_lineno)</code></pre><p>Now, if you execute the same code as before, you can see it print the line numbers as you progress through it:</p><pre><code>$ python .\test.py
&lt;code object sample at 0x00000000006D4DB0, file ".\test.py", line 5&gt;
6
7
8
Sample: 10
8</code></pre><h3 id="putting-a-user-interface-in-front-of-it">Putting a user interface in front of it</h3><p>Using the <a href="https://github.com/tryexceptpass/sofi" rel="noopener"><em>sofi</em></a><em> </em>python module, you can easily produce a web application that directly interacts with our python code.</p><p>Here’s what you would do:</p><ol><li>Show the file, function name and line number being executed.</li><li>Show the code for the current frame with a pointer identifying the line.</li><li>Show the value of the local variables.</li><li>Provide step-by-step execution, meaning you have to block before executing a line until the user clicks a button.</li><li>Add step-over functionality.</li><li>Add a step-out mechanism.</li><li>Provide a method of stopping execution.</li></ol><p>From the UI perspective, #1, #2 and #3 can all be handled through a Bootstrap <em>Panel</em> where #1 is the title, and #2 and #3 are part of the body wrapped in <em>samp </em>tags to show proper spacing.</p><p>Since the interface will essentially block waiting for user input, and the debugger waits for stop / go commands, it’s a good idea to separate those event loops using our old friend <em>multiprocessing</em>. You can then implement one <em>queue</em> to send debug commands to one process, and a different application queue for UI updates in the other.</p><p>Through multiprocessing queues, it’s easy to block the debugger waiting for user commands at the <em>trace_lines</em> function using the<em> .get()</em> method.</p><p>If the command is given to move to the next line of code (#4), everything stays the same, while stepping out (#6) will change the return value back to the <em>trace_calls </em>function — effectively removing further calls into <em>trace_lines —</em> and stop (#7) will raise a custom exception that will abort execution.</p><pre><code class="language-py"># Block until you receive a debug command
cmd = trace_lines.debugq.get()
if cmd == 'step':
# continue stepping through lines, return this callback
return trace_lines
elif cmd == 'stop':
# Stop execution
raise StopExecution()
elif cmd == 'over':
# step out or over code, so point to trace_calls
return trace_calls
class StopExecution(Exception):
"""Custom exception used to abort code execution"""
pass</code></pre><p>Step-over functionality (#5) is implemented at the <em>trace_calls </em>level by never returning the trace_lines callback.</p><pre><code class="language-py">cmd = trace_lines.debugq.get()
if cmd == 'step':
return trace_lines
elif cmd == 'over':
return</code></pre><p>Yes, I attached the queue objects as properties of the trace functions to simplify passing things around. Functions being objects is a great idea, though you shouldn’t abuse it either.</p><p>Now it’s just a matter of setting up the widgets for displaying data and the buttons for controlling flow.</p><p>You can pull out the source code from the code object of the executing frame using the inspect module.</p><pre><code>source = inspect.getsourcelines(frame.f_code)[0]</code></pre><p>Now it’s a matter of formatting it line by line into <em>div </em>and <em>samp </em>tags, adding an indicator of a different color to the current line (available through <code>f_lineno</code><em> </em>and <code>co_firstline</code>) and sticking that into a <em>panel</em> widget’s body, along with the string representation of the frame’s locals (which is a simple dictionary anyway):</p><pre><code class="language-py">def formatsource(source, firstline, currentline):
for index, item  in enumerate(source):
# Create a div for each line to better control format
div = Div()
# Extremly simplified tab index check to add blank space
if item[0:1] == '\t' or item[0:1] == ' ':
div.style ='margin-left:15px;'
# If this currently executing this line, add a red mark
if index == lineno - firstlineno:
div.addelement(Bold('&gt; ', style="color:red"))
# Add the formatted code to the div
div.addelement(Sample(item.replace("\n", "")))
# Output the html that represents that div
source[index] = str(div)
return "".join(source)</code></pre><p>Only thing left to do is register a few event callbacks for button clicks that control execution flow by adding their respective commands to the debug queue. You do this inside a <em>load </em>event handler which triggers after the initial content finishes loading</p><pre><code class="language-py">@asyncio.coroutine
def load(event):
"""Called when the initial html finishes loading"""
# Start the debug process
debugprocess.start()
# Register click functions
app.register('click', step, selector="#code-next-button")
app.register('click', stop, selector="#code-stop-button")
app.register('click', over, selector="#code-over-button")
# Make sure the display updates
yield from display()
@asyncio.coroutine
def step(event):
debugq.put("step")
# Make sure the display updates
yield from display()
@asyncio.coroutine
def stop(event):
debugq.put("stop")
@asyncio.coroutine
def over(event):
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
