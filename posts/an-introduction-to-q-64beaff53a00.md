---
card: "https://cdn-media-1.freecodecamp.org/images/0*urFjQNWX1O2TNzmM."
tags: [Programming]
description: "In this article, I’ll introduce you to Q# — the new programmi"
author: "Milad E. Fahmy"
title: "An introduction to Q# — Microsoft’s language for quantum computing"
created: "2021-08-16T11:44:36+02:00"
modified: "2021-08-16T11:44:36+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-programming tag-quantum-computing tag-microsoft tag-tech tag-technology ">
<header class="post-full-header">
<h1 class="post-full-title">An introduction to Q# — Microsoft’s language for quantum computing</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/0*urFjQNWX1O2TNzmM. 300w,
https://cdn-media-1.freecodecamp.org/images/0*urFjQNWX1O2TNzmM. 600w,
https://cdn-media-1.freecodecamp.org/images/0*urFjQNWX1O2TNzmM. 1000w,
https://cdn-media-1.freecodecamp.org/images/0*urFjQNWX1O2TNzmM. 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/0*urFjQNWX1O2TNzmM." alt="An introduction to Q# — Microsoft’s language for quantum computing">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
body {
mutable c = 0;
set c = a + b;
return (c);
}
}</code></pre><p>Here, we have an operation <code>AddInteger</code> which takes a tuple <code>(Int, Int)</code> as input. It returns an output of type <code>Int</code> after performing addition operations on input integers.</p><h4 id="function-type">Function Type</h4><p>A Q# Function is classical subroutine used within a Quantum algorithm and can only contain classical code (but no quantum operations). Similar to Q# operations, a function will also take a single value as input and returns a single value as output. Both of them can be a tuple. Functions cannot allocate qubits or call operations.</p><p>Let’s look at a sample function.</p><pre><code>function ProductNumber(a: Double, b: Double): Double {
mutable c = 0.0;
set c = a * b;
return (c);
}</code></pre><p>Here, we have defined a function <code>ProductNumber</code>, which takes a tuple <code>(Double, Double)</code> as input and returns an output of type <code>Double</code> after performing the product of input values. Also, notice that a <em>function</em> does not have a body section, as in the case of an <em>operation.</em></p><h3 id="expressions-in-q-">Expressions in Q#</h3><p>Let’s take a look at various expressions provided in Q#.</p><h4 id="numeric-expressions">Numeric Expressions</h4><p>There are two types of numeric expressions provided by Q#:</p><ul><li>Integer numbers: these are represented by Int</li><li>Floating point numbers: represented by Double</li></ul><p>To represent a hexadecimal integer, we use the “0x” prefix.</p><p>We can also perform binary operations on numeric expressions to form a new numeric expression. The type of the new expression will be <code>Double</code> if both input expressions are floating point numbers, or will be an <code>Int</code> if both are integers.</p><p>Apart from binary operations, the numeric expressions also support modulus, power, bitwise AND, bitwise OR, bitwise XOR, and bitwise complement operations.</p><h4 id="qubit-expressions">Qubit Expressions</h4><p>Qubit expressions are the symbols that are bound to qubit values or the elements of a qubit array. Q# does not provide any support for qubit literals.</p><h4 id="pauli-expressions">Pauli Expressions</h4><p>As we have discussed earlier, the primitive type <code>Pauli</code> can take four possible values: <code>PauliI</code>, <code>PauliX</code>, <code>PauliY</code> and <code>PauliZ</code>. These all are valid Pauli expressions. We can also create an array of Pauli types, and the array elements are considered as valid Pauli expressions.</p><p>The two possible result values <code>Zero</code> and <code>One</code> are valid Result expressions. One important point to note is that <code>One</code> is not the same as integer 1, and <code>Zero</code> is not same as integer 0. Also, there is no direct conversion between them.</p><p>This is in contrast to C# where, boolean <code>true</code> is considered the same as integer 1 and boolean <code>false</code> is considered the same as integer 0.</p><h4 id="range-expressions">Range Expressions</h4><p>A range expression is represented as <code>start..step..stop</code> where <code>start</code>, <code>step</code>, <code>stop</code> are all integers. The range expression can take values as <code>start</code>, <code>start+step</code>, <code>start+step+step</code> and so on until <code>stop</code> is passed.</p><p>If only <code>start</code> and <code>stop</code> are mentioned in a range expression, then it will take the value of the step as set to 1 implicitly.</p><p>Let’s understand this with the help of an example:</p><ul><li><code>1..3</code> — this indicates the range <code>1,2,3</code>. This gives <code>1</code>, <code>1+1</code>, <code>1+1+1</code></li><li><code>1..2..6</code> indicates the range <code>1,3,5</code>, or <code>1</code>, <code>1+2</code>,<code>1+2+2</code></li><li><code>8..-2..3</code> indicates the range <code>8,6,4</code> or <code>8</code>, <code>8+(-2)</code>, <code>8+(-2)+(-2)</code></li></ul><h4 id="array-expressions">Array Expressions</h4><p>In Q# an array can be represented as a set of element expressions separated by semicolons and enclosed within square brackets. Similar to C#, all elements of an array in Q# should have the same type.</p><p>So, <code>[1;2;3]</code> is a valid array, but <code>[1;2.5;Zero]</code> is an invalid array.</p><p>We can also use the ‘+’ operator to concatenate two arrays of the same type.</p><p>So, <code>[2;4;6] + [8;10;12]</code> will give <code>[2;4;6;8;10;12]</code> as output.</p><p>To find the length of an array, we use the <code>Length</code> built-in function.</p><p>As an example, if <code>myArr</code> is an integer array having 5 elements, then <code>Length(myArr</code>) will return <code>5</code> as the output.</p><h3 id="q-statements">Q# Statements</h3><p>Symbols in Q# can be mutable or immutable.</p><p>An immutable symbol cannot be changed after it has been bound. We use the let keyword to define and bind an immutable symbol.</p><p><code>let i=8;</code></p><p>This will bind the symbol <code>i</code> as an integer with value 8. If we try to reset the value of an immutable expression, we will get a compile time error.</p><p>Hence <code>set i=10;</code> will give an error in this case.</p><p>A mutable symbol value can be changed after it has been bound. We use the <code>mutable</code> keyword to define and bind a mutable symbol.</p><p><code>mutable i=8;</code></p><p>This will bind the symbol <code>i</code> as an integer with value 8.</p><p>To change the value of a mutable symbol, we use the <code>set</code> keyword:</p><p><code>set i=10;</code></p><p>This will update the value of variable <code>i</code> to 10</p><h4 id="for-loops">for-loops</h4><p>Q# allows a for-loop to iterate over an integer range. The for statement consists of the keyword <code>for</code>, followed by an identifier, the keyword <code>in</code>, a Range expression, and a statement block.</p><p>A range is specified by the first and last integers in the range, for example: <code>1..5</code> represents the range 1, 2, 3, 4, and 5. If a step other than +1 is needed, then three integers with .. between them are used.</p><p>So, <code>1..2..10</code> is the range 1, 3, 5, 7, and 9. The range is inclusive at both ends.</p><pre><code>for(num in 1..2..10)
{
//Do something
}</code></pre><p>As the name suggests, this loop will repeat until successful operation occurs. This loop is based on the quantum “repeat until success” pattern. It consists of the keyword <code>repeat</code> and its statement block, the keyword <code>until</code>, a Boolean expression, the keyword <code>fixup</code>, and its statement block .</p><p>The statement inside the repeat block is executed, and then the boolean condition is evaluated. If the boolean condition evaluates to true, then the loop terminates. Otherwise, the fixup block is executed and the loop repeats once again.</p><p>The fixup block is always required — even if there is no fixup to be done — in which case it will be empty.</p><pre><code>repeat {
//do something
}
until boolean condition
fixup {
// do something
}</code></pre><p>Q# supports if statements for conditional execution, similar to C#. The if statement consists of the keyword <code>if</code>, followed by a Boolean expression and the statement block. An if block may have an optional else block, which is represented by the keyword <code>else</code>.</p><pre><code>if (num % 2 == 0) {
return true;
} else {
return false;
}</code></pre><p>A conditional statement can consist of a series of if-elseif-else chains. The else-if clause is represented by the keyword <code>elif</code>.</p><pre><code>if (num == 1) {
//do something
}
elif(num == 2) {
//do something
}
else {
//do something
}</code></pre><h3 id="conclusion">Conclusion</h3><p>In this article, we have learned the basics of the Q# programming language. We also installed QDK and verified the Q# execution environment with Visual Studio 2017. Please post your valuable feedback in the comments section and stay tuned for more on Quantum Computing.</p><p>You can always refer to my previous articles <a href="http://ankitsharmablogs.com/" rel="noopener">here</a>.</p><p>You can also find this article at <a href="http://www.c-sharpcorner.com/article/an-introduction-to-q/" rel="noopener">C# Corner</a></p><p><em>Originally published at <a href="http://ankitsharmablogs.com/an-introduction-to-q/" rel="noopener">ankitsharmablogs.com</a> on Jan 16, 2018.</em></p>
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
