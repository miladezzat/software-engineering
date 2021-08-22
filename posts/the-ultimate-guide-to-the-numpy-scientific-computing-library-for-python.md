---
card: "/images/default.jpg"
tags: [Numpy]
description: "NumPy (pronounced  numb pie ) is one of the most important pa"
author: "Milad E. Fahmy"
title: "The Ultimate Guide to the NumPy Package for Scientific Computing in Python"
created: "2021-08-16T15:36:09+02:00"
modified: "2021-08-16T15:36:09+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-numpy tag-python ">
<header class="post-full-header">
<h1 class="post-full-title">The Ultimate Guide to the NumPy Package for Scientific Computing in Python</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/07/numpy.png 300w,
/news/content/images/size/w600/2020/07/numpy.png 600w,
/news/content/images/size/w1000/2020/07/numpy.png 1000w,
/news/content/images/size/w2000/2020/07/numpy.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/07/numpy.png" alt="The Ultimate Guide to the NumPy Package for Scientific Computing in Python">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>NumPy (pronounced "numb pie") is one of the most important packages to grasp when you’re starting to <a href="https://courses.nickmccullum.com/courses/enroll/python-for-finance/">learn Python</a>.</p><p>The package is known for a very useful data structure called the NumPy array. NumPy also allows Python developers to quickly perform a wide variety of numerical computations.</p><p>This tutorial will teach you the fundamentals of NumPy that you can use to build numerical Python applications today.</p><h2 id="table-of-contents"><strong>Table of Contents</strong></h2><p>You can skip to a specific section of this NumPy tutorial using the table of contents below:</p><ul><li><a href="#introduction-to-numpy">Introduction to NumPy</a></li><li><a href="#numpy-arrays">NumPy Arrays</a></li><li><a href="#numpy-methods-and-operations">NumPy Methods and Operations</a></li><li><a href="#numpy-indexing-and-assignment">NumPy Indexing and Assignment</a></li><li><a href="#final-thoughts-special-offer">Final Thoughts &amp; Special Offer</a></li></ul><h2 id="introduction-to-numpy"><strong>Introduction to NumPy</strong></h2><p>In this section, we will introduce the <a href="https://nickmccullum.com/advanced-python/numpy/">NumPy library</a> in Python.</p><h3 id="what-is-numpy"><strong>What is NumPy?</strong></h3><p>NumPy is a Python library for scientific computing. NumPy stand for Numerical Python. Here is the official description of the library from <a href="https://numpy.org/">its website</a>:</p><p><em><em>“NumPy is the fundamental package for scientific computing with Python. It contains among other things:</em></em></p><ul><li><em><em>a powerful N-dimensional array object</em></em></li><li><em><em>sophisticated (broadcasting) functions</em></em></li><li><em><em>tools for integrating C/C++ and Fortran code</em></em></li><li><em><em>useful linear algebra, Fourier transform, and random number capabilities</em></em></li></ul><p><em><em>Besides its obvious scientific uses, NumPy can also be used as an efficient multi-dimensional container of generic data. Arbitrary data-types can be defined. This allows NumPy to seamlessly and speedily integrate with a wide variety of databases.</em></em></p><p><em><em>NumPy is licensed under the <a href="https://numpy.org/license.html#license">BSD license</a>, enabling reuse with few restrictions.”</em></em></p><p>NumPy is such an important Python library that there are other libraries (including pandas) that are built entirely on NumPy.</p><h3 id="the-main-benefit-of-numpy"><strong>The Main Benefit of NumPy</strong></h3><p>The main benefit of NumPy is that it allows for extremely fast data generation and handling. NumPy has its own built-in data structure called an <code>array</code> which is similar to the normal Python <code>list</code>, but can store and operate on data much more efficiently.</p><h3 id="what-we-will-learn-about-numpy"><strong>What We Will Learn About NumPy</strong></h3><p>Advanced Python practitioners will spend much more time working with pandas than they spend working with NumPy. Still, given that pandas is built on NumPy, it is important to understand the most important aspects of the NumPy library.</p><p>Over the next several sections, we will cover the following information about the NumPy library:</p><ul><li>NumPy Arrays</li><li>NumPy Indexing and Assignment</li><li>NumPy Methods and Operations</li></ul><h3 id="moving-on"><strong>Moving On</strong></h3><p>Let’s move on to learning about NumPy arrays, the core data structure that every NumPy practitioner must be familiar with.</p><h2 id="numpy-arrays"><strong>NumPy Arrays</strong></h2><p>In this section, we will be learning about <a href="https://nickmccullum.com/advanced-python/numpy-arrays/">NumPy arrays</a>.</p><h3 id="what-are-numpy-arrays"><strong>What Are NumPy Arrays?</strong></h3><p>NumPy arrays are the main way to store data using the NumPy library. They are similar to normal lists in Python, but have the advantage of being faster and having more built-in methods.</p><p>NumPy arrays are created by calling the <code>array()</code> method from the NumPy library. Within the method, you should pass in a list.</p><p>An example of a basic NumPy array is shown below. Note that while I run the <code>import numpy as np</code> statement at the start of this code block, it will be excluded from the other code blocks in this section for brevity’s sake.</p><pre><code>import numpy as np
sample_list = [1, 2, 3]
np.array(sample_list)
</code></pre><p>The last line of that code block will result in an output that looks like this.</p><pre><code>array([1,2,3])
</code></pre><p>The <code>array()</code> wrapper indicates that this is no longer a normal Python list. Instead, it is a NumPy array.</p><h3 id="the-two-different-types-of-numpy-arrays"><strong>The Two Different Types of NumPy Arrays</strong></h3><p>There are two different types of NumPy arrays: vectors and matrices.</p><p>Vectors are one-dimensional NumPy arrays, and look like this:</p><pre><code>my_vector = np.array(['this', 'is', 'a', 'vector'])
</code></pre><p>Matrices are two-dimensional arrays and are created by passing a list of lists into the <code>np.array()</code> method. An example is below.</p><pre><code>my_matrix = [[1, 2, 3],[4, 5, 6],[7, 8, 9]]
np.array(my_matrix)
</code></pre><p>You can also expand NumPy arrays to deal with three-, four-, five-, six- or higher-dimensional arrays, but they are rare and largely outside the scope of this course (after all, this is a course on Python programming, not linear algebra).</p><h3 id="numpy-arrays-built-in-methods"><strong>NumPy Arrays: Built-In Methods</strong></h3><p>NumPy arrays come with a number of useful built-in methods. We will spend the rest of this section discussing these methods in detail.</p><h4 id="how-to-get-a-range-of-numbers-in-python-using-numpy"><strong>How To Get A Range Of Numbers in Python Using NumPy</strong></h4><p>NumPy has a useful method called <code>arange</code> that takes in two numbers and gives you an array of integers that are greater than or equal to (<code>&gt;=</code>) the first number and less than (<code>&lt;</code>) the second number.</p><p>An example of the <code>arange</code> method is below.</p><pre><code>np.arange(0,5)
#Returns array([0, 1, 2, 3, 4])
</code></pre><p>You can also include a third variable in the <code>arange</code> method that provides a step-size for the function to return. Passing in <code>2</code> as the third variable will return every 2nd number in the range, passing in <code>5</code> as the third variable will return every 5th number in the range, and so on.</p><p>An example of using the third variable in the <code>arange</code> method is below.</p><pre><code>np.arange(1,11,2)
#Returns array([1, 3, 5, 7, 9])
</code></pre><h3 id="how-to-generates-ones-and-zeros-in-python-using-numpy"><strong>How To Generates Ones and Zeros in Python Using NumPy</strong></h3><p>While programming, you will from time to time need to create arrays of ones or zeros. NumPy has built-in methods that allow you to do either of these.</p><p>We can create arrays of zeros using NumPy’s <code>zeros</code> method. You pass in the number of integers you’d like to create as the argument of the function. An example is below.</p><pre><code>np.zeros(4)
#Returns array([0, 0, 0, 0])
</code></pre><p>You can also do something similar using three-dimensional arrays. For example, <code>np.zeros(5, 5)</code> creates a 5x5 matrix that contains all zeros.</p><p>We can create arrays of ones using a similar method named <code>ones</code>. An example is below.</p><pre><code>np.ones(5)
#Returns array([1, 1, 1, 1, 1])
</code></pre><h4 id="how-to-evenly-divide-a-range-of-numbers-in-python-using-numpy"><strong>How To Evenly Divide A Range Of Numbers In Python Using NumPy</strong></h4><p>There are many situations in which you have a range of numbers and you would like to equally divide that range of numbers into intervals. NumPy’s <code>linspace</code> method is designed to solve this problem. <code>linspace</code> takes in three arguments:</p><ol><li>The start of the interval</li><li>The end of the interval</li><li>The number of subintervals that you’d like the interval to be divided into</li></ol><p>An example of the <code>linspace</code> method is below.</p><pre><code>np.linspace(0, 1, 10)
#Returns array([0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0])
</code></pre><h4 id="how-to-create-an-identity-matrix-in-python-using-numpy"><strong>How To Create An Identity Matrix In Python Using NumPy</strong></h4><p>Anyone who has studied linear algebra will be familiar with the concept of an ‘identity matrix’, which is a square matrix whose diagonal values are all <code>1</code>. NumPy has a built-in function that takes in one argument for building identity matrices. The function is <code>eye</code>.</p><p>Examples are below:</p><pre><code>np.eye(1)
#Returns a 1x1 identity matrix
np.eye(2)
#Returns a 2x2 identity matrix
np.eye(50)
#Returns a 50x50 identity matrix
</code></pre><h4 id="how-to-create-random-numbers-in-python-using-numpy"><strong>How To Create Random Numbers in Python Using NumPy</strong></h4><p>NumPy has a number of methods built-in that allow you to create arrays of random numbers. Each of these methods starts with <code>random</code>. A few examples are below:</p><pre><code>np.random.rand(sample_size)
#Returns a sample of random numbers between 0 and 1.
#Sample size can either be one integer (for a one-dimensional array) or two integers separated by commas (for a two-dimensional array).
np.random.randn(sample_size)
#Returns a sample of random numbers between 0 and 1, following the normal distribution.
#Sample size can either be one integer (for a one-dimensional array) or two integers separated by commas (for a two-dimensional array).
np.random.randint(low, high, sample_size)
#Returns a sample of integers that are greater than or equal to 'low' and less than 'high'
</code></pre><h4 id="how-to-reshape-numpy-arrays"><strong>How To Reshape NumPy Arrays</strong></h4><p>It is very common to take an array with certain dimensions and transform that array into a different shape. For example, you might have a one-dimensional array with 10 elements and want to switch it to a 2x5 two-dimensional array.</p><p>An example is below:</p><pre><code>arr = np.array([0,1,2,3,4,5])
arr.reshape(2,3)
</code></pre><p>The output of this operation is:</p><pre><code>array([[0, 1, 2],
[3, 4, 5]])
</code></pre><p>Note that in order to use the <code>reshape</code> method, the original array must have the same number of elements as the array that you’re trying to reshape it into.</p><p>If you’re curious about the current shape of a NumPy array, you can determine its shape using NumPy’s <code>shape</code> attribute. Using our previous <code>arr</code> variable structure, an example of how to call the <code>shape</code> attribute is below:</p><pre><code>arr = np.array([0,1,2,3,4,5])
arr.shape
#Returns (6,) - note that there is no second element since it is a one-dimensional array
arr = arr.reshape(2,3)
arr.shape
#Returns (2,3)
</code></pre><p>You can also combine the <code>reshape</code> method with the <code>shape</code> attribute on one line like this:</p><pre><code>arr.reshape(2,3).shape
#Returns (2,3)
</code></pre><h4 id="how-to-find-the-maximum-and-minimum-value-of-a-numpy-array"><strong>How To Find The Maximum and Minimum Value Of A NumPy Array</strong></h4><p>To conclude this section, let’s learn about four useful methods for identifying the maximum and minimum values within a NumPy array. We’ll be working with this array:</p><pre><code>simple_array = [1, 2, 3, 4]
</code></pre><p>We can use the <code>max</code> method to find the maximum value of a NumPy array. An example is below.</p><pre><code>simple_array.max()
#Returns 4
</code></pre><p>We can also use the <code>argmax</code> method to find the index of the maximum value within a NumPy array. This is useful for when you want to find the location of the maximum value but you do not necessarily care what its value is.</p><p>An example is below.</p><pre><code>simple_array.argmax()
#Returns 3
</code></pre><p>Similarly, we can use the <code>min</code> and <code>argmin</code> methods to find the value and index of the minimum value within a NumPy array.</p><pre><code>simple_array.min()
#Returns 1
simple_array.argmin()
#Returns 0
</code></pre><h3 id="moving-on-1"><strong>Moving On</strong></h3><p>In this section, we discussed various attributes and methods of NumPy arrays. We will follow up by working through some NumPy array practice problems in the next section.</p><h2 id="numpy-methods-and-operations"><strong>NumPy Methods and Operations</strong></h2><p>In this section, we will be working through <a href="https://nickmccullum.com/advanced-python/numpy-methods-operations/">various operations included in the NumPy library.</a></p><p>Throughout this section, we will be assuming that the <code>import numpy as np</code> command has already been run.</p><h3 id="the-array-used-in-this-section"><strong>The Array Used In This Section</strong></h3><p>For this section, I will be working with an array of length 4 created using <code>np.arange</code> in all of the examples.</p><p>If you’d like to compare my array with the outputs used in this section, here is how I created and printed the array:</p><pre><code>arr = np.arange(4)
arr
</code></pre><p>The array values are below.</p><pre><code>array([0, 1, 2, 3])
</code></pre><h3 id="how-to-perform-arithmetic-in-python-using-number"><strong>How To Perform Arithmetic In Python Using Number</strong></h3><p>NumPy makes it very easy to perform arithmetic with arrays. You can either perform arithmetic using the array and a single number, or you can perform arithmetic between two NumPy arrays.</p><p>We explore each of the major mathematical operations below.</p><h4 id="addition"><strong>Addition</strong></h4><p>When adding a single number to a NumPy array, that number is added to each element in the array. An example is below:</p><pre><code>2 + arr
#Returns array([2, 3, 4, 5])
</code></pre><p>You can add two NumPy arrays using the <code>+</code> operator. The arrays are added on an element-by-element basis (meaning the first elements are added together, the second elements are added together, and so on).</p><p>An example is below.</p><pre><code>arr + arr
#Returns array([0, 2, 4, 6])
</code></pre><h4 id="subtraction"><strong>Subtraction</strong></h4><p>Like addition, subtraction is performed on an element-by-element basis for NumPy arrays. You can find example for both a single number and another NumPy array below.</p><pre><code>arr - 10
#Returns array([-10,  -9,  -8,  -7])
arr - arr
#Returns array([0, 0, 0, 0])
</code></pre><h4 id="multiplication"><strong>Multiplication</strong></h4><p>Multiplication is also performed on an element-by-element basis for both single numbers and NumPy arrays.</p><p>Two examples are below.</p><pre><code>6 * arr
#Returns array([ 0,  6, 12, 18])
arr * arr
#Returns array([0, 1, 4, 9])
</code></pre><h4 id="division"><strong>Division</strong></h4><p>By this point, you’re probably not surprised to learn that division performed on NumPy arrays is done on an element-by-element basis. An example of dividing <code>arr</code> by a single number is below:</p><pre><code>arr / 2
#Returns array([0. , 0.5, 1. , 1.5])
</code></pre><p>Division does have one notable exception compared to the other mathematical operations we have seen in this section. Since we cannot divide by zero, doing so will cause the corresponding field to be populated by a <code>nan</code> value, which is Python shorthand for “Not A Number”. Jupyter Notebook will also print a warning that looks like this:</p><pre><code>RuntimeWarning: invalid value encountered in true_divide
</code></pre><p>An example of dividing by zero is with a NumPy array is shown below.</p><pre><code>arr / arr
#Returns array([nan,  1.,  1.,  1.])
</code></pre><p>We will learn how to deal with <code>nan</code> values in more detail later in this course.</p><h3 id="complex-operations-in-numpy-arrays"><strong>Complex Operations in NumPy Arrays</strong></h3><p>Many operations cannot simply be performed by applying the normal syntax to a NumPy array. In this section, we will explore several mathematical operations that have built-in methods in the NumPy library.</p><h4 id="how-to-calculate-square-roots-using-numpy"><strong>How To Calculate Square Roots Using NumPy</strong></h4><p>You can calculate the square root of every element in an array using the <code>np.sqrt</code> method:</p><pre><code>np.sqrt(arr)
#Returns array([0., 1., 1.41421356, 1.73205081])
</code></pre><p>Many other examples are below (note that you will not be tested on these, but it is still useful to see the capabilities of NumPy):</p><pre><code>np.exp(arr)
#Returns e^element for every element in the array
np.sin(arr)
#Calculate the trigonometric sine of every value in the array
np.cos(arr)
#Calculate the trigonometric cosine of every value in the array
np.log(arr)
#Calculate the base-ten logarithm of every value in the array
</code></pre><h3 id="moving-on-2"><strong>Moving On</strong></h3><p>In this section, we explored the various methods and operations available in the NumPy Python library. We will text your knowledge of these concepts in the practice problems presented next.</p><h2 id="numpy-indexing-and-assignment"><strong>NumPy Indexing and Assignment</strong></h2><p>In this section, we will explore <a href="https://nickmccullum.com/advanced-python/numpy-indexing-assignment/">indexing and assignment in NumPy arrays.</a></p><h3 id="the-array-i-ll-be-using-in-this-section"><strong>The Array I’ll Be Using In This Section</strong></h3><p>As before, I will be using a specific array through this section. This time it will be generated using the <code>np.random.rand</code> method. Here’s how I generated the array:</p><pre><code>arr = np.random.rand(5)
</code></pre><p>Here is the actual array:</p><pre><code>array([0.69292946, 0.9365295 , 0.65682359, 0.72770856, 0.83268616])
</code></pre><p>To make this array easier to look at, I will round every element of the array to 2 decimal places using NumPy’s <code>round</code> method:</p><pre><code>arr = np.round(arr, 2)
</code></pre><p>Here’s the new array:</p><pre><code>array([0.69, 0.94, 0.66, 0.73, 0.83])
</code></pre><h3 id="how-to-return-a-specific-element-from-a-numpy-array"><strong>How To Return A Specific Element From A NumPy Array</strong></h3><p>We can select (and return) a specific element from a NumPy array in the same way that we could using a normal Python list: using square brackets.</p><p>An example is below:</p><pre><code>arr[0]
#Returns 0.69
</code></pre><p>We can also reference multiple elements of a NumPy array using the colon operator. For example, the index <code>[2:]</code> selects every element from index 2 onwards. The index <code>[:3]</code> selects every element up to and excluding index 3. The index <code>[2:4]</code> returns every element from index 2 to index 4, excluding index 4. The higher endpoint is always excluded.</p><p>A few example of indexing using the colon operator are below.</p><pre><code>arr[:]
#Returns the entire array: array([0.69, 0.94, 0.66, 0.73, 0.83])
arr[1:]
#Returns array([0.94, 0.66, 0.73, 0.83])
arr[1:4]
#Returns array([0.94, 0.66, 0.73])
</code></pre><h3 id="element-assignment-in-numpy-arrays"><strong>Element Assignment in NumPy Arrays</strong></h3><p>We can assign new values to an element of a NumPy array using the <code>=</code> operator, just like regular python lists. A few examples are below (note that this is all one code block, which means that the element assignments are carried forward from step to step).</p><pre><code>array([0.12, 0.94, 0.66, 0.73, 0.83])
arr
#Returns array([0.12, 0.94, 0.66, 0.73, 0.83])
arr[:] = 0
arr
#Returns array([0., 0., 0., 0., 0.])
arr[2:5] = 0.5
arr
#Returns array([0. , 0. , 0.5, 0.5, 0.5])
</code></pre><h3 id="array-referencing-in-numpy"><strong>Array Referencing in NumPy</strong></h3><p>NumPy makes use of a concept called ‘array referencing’ which is a very common source of confusion for people that are new to the library.</p><p>To understand array referencing, let’s first consider an example:</p><pre><code>
new_array = np.array([6, 7, 8, 9])
second_new_array = new_array[0:2]
second_new_array
#Returns array([6, 7])
second_new_array[1] = 4
second_new_array
#Returns array([6, 4]), as expected
new_array
#Returns array([6, 4, 8, 9])
#which is DIFFERENT from its original value of array([6, 7, 8, 9])
#What the heck?
</code></pre><p>As you can see, modifying <code>second_new_array</code> also changed the value of <code>new_array</code>.</p><p>Why is this?</p><p>By default, NumPy does not create a copy of an array when you reference the original array variable using the <code>=</code> assignment operator. Instead, it simply points the new variable to the old variable, which allows the second variable to make modification to the original variable - even if this is not your intention.</p><p>This may seem bizarre, but it does have a logical explanation. The purpose of array referencing is to conserve computing power. When working with large data sets, you would quickly run out of RAM if you created a new array every time you wanted to work with a slice of the array.</p><p>Fortunately, there is a workaround to array referencing. You can use the <code>copy</code> method to explicitly copy a NumPy array.</p><p>An example of this is below.</p><pre><code>array_to_copy = np.array([1, 2, 3])
copied_array = array_to_copy.copy()
array_to_copy
#Returns array([1, 2, 3])
copied_array
#Returns array([1, 2, 3])
</code></pre><p>As you can see below, making modifications to the copied array does not alter the original.</p><pre><code>copied_array[0] = 9
copied_array
#Returns array([9, 2, 3])
array_to_copy
#Returns array([1, 2, 3])
</code></pre><p>So far in the section, we have only explored how to reference one-dimensional NumPy arrays. We will now explore the indexing of two-dimensional arrays.</p><h3 id="indexing-two-dimensional-numpy-arrays"><strong>Indexing Two-Dimensional NumPy Arrays</strong></h3><p>To start, let’s create a two-dimensional NumPy array named <code>mat</code>:</p><pre><code>mat = np.array([[5, 10, 15],[20, 25, 30],[35, 40, 45]])
mat
"""
Returns:
array([[ 5, 10, 15],
[20, 25, 30],
[35, 40, 45]])
"""
</code></pre><p>There are two ways to index a two-dimensional NumPy array:</p><ul><li><code>mat[row, col]</code></li><li><code>mat[row][col]</code></li></ul><p>I personally prefer to index using the <code>mat[row][col]</code> nomenclature because it is easier to visualize in a step-by-step fashion. For example:</p><pre><code>#First, let's get the first row:
mat[0]
#Next, let's get the last element of the first row:
mat[0][-1]
</code></pre><p>You can also generate sub-matrices from a two-dimensional NumPy array using this notation:</p><pre><code>mat[1:][:2]
"""
Returns:
array([[20, 25, 30],
[35, 40, 45]])
"""
</code></pre><p>Array referencing also applies to two-dimensional arrays in NumPy, so be sure to use the <code>copy</code> method if you want to avoid inadvertently modifying an original array after saving a slice of it into a new variable name.</p><h3 id="conditional-selection-using-numpy-arrays"><strong>Conditional Selection Using NumPy Arrays</strong></h3><p>NumPy arrays support a feature called <code>conditional selection</code>, which allows you to generate a new array of boolean values that state whether each element within the array satisfies a particular <code>if</code> statement.</p><p>An example of this is below (I also re-created our original <code>arr</code> variable since its been awhile since we’ve seen it):</p><pre><code>arr = np.array([0.69, 0.94, 0.66, 0.73, 0.83])
arr &gt; 0.7
#Returns array([False,  True, False,  True,  True])
</code></pre><p>You can also generate a new array of values that satisfy this condition by passing the condition into the square brackets (just like we do for indexing).</p><p>An example of this is below:</p><pre><code>arr[arr &gt; 0.7]
#Returns array([0.94, 0.73, 0.83])
</code></pre><p>Conditional selection can become significantly more complex than this. We will explore more examples in this section’s associated practice problems.</p><h3 id="moving-on-3"><strong>Moving On</strong></h3><p>In this section, we explored NumPy array indexing and assignment in thorough detail. We will solidify your knowledge of these concepts further by working through a batch of practice problems in the next section.</p><h2 id="final-thoughts-special-offer">Final Thoughts &amp; Special Offer</h2><p>Thanks for reading this article on NumPy, which is one of my favorite Python packages and a must-know library for every Python developer.</p><p><strong>This tutorial is an excerpt from my course</strong> <strong><a href="https://courses.nickmccullum.com/courses/enroll/python-for-finance/">Python For Finance and Data Science</a>. If you're interested in learning more core Python skills, the course is 50% off for the first 50 freeCodeCamp readers that sign up - <a href="https://courses.nickmccullum.com/courses/enroll/python-for-finance/">click here to get your discounted course now</a>!</strong></p>
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
