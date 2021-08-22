---
card: "/images/default.jpg"
tags: [Python]
description: "Welcome! In this article, you will learn how to work with the"
author: "Milad E. Fahmy"
title: "The @property Decorator in Python: Its Use Cases, Advantages, and Syntax"
created: "2021-08-16T15:38:14+02:00"
modified: "2021-08-16T15:38:14+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-python tag-object-oriented-programming tag-property tag-python-properties ">
<header class="post-full-header">
<h1 class="post-full-title">The @property Decorator in Python: Its Use Cases, Advantages, and Syntax</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2019/12/property-v2-HD.png 300w,
/news/content/images/size/w600/2019/12/property-v2-HD.png 600w,
/news/content/images/size/w1000/2019/12/property-v2-HD.png 1000w,
/news/content/images/size/w2000/2019/12/property-v2-HD.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2019/12/property-v2-HD.png" alt="The @property Decorator in Python: Its Use Cases, Advantages, and Syntax">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<h2 id="-meet-properties">🔹 Meet Properties</h2><p>Welcome! In this article, you will learn how to work with the <code>@property</code> decorator in Python. </p><p><strong>You will learn:</strong></p><ul><li>The advantages of working with properties in Python.</li><li>The basics of decorator functions: what they are and how they are related to @property.</li><li>How you can use @property to define getters, setters, and deleters.</li></ul><h3 id="1-advantages-of-properties-in-python">1️⃣ Advantages of Properties in Python</h3><p>Let's start with a little bit of context. <strong>Why</strong> would you use properties in Python?</p><p>Properties can be considered the "Pythonic" way of working with attributes because:</p><ul><li>The syntax used to define properties is very concise and readable.</li><li>You can access instance attributes exactly as if they were public attributes while using the "magic" of intermediaries (getters and setters) to validate new values and to avoid accessing or modifying the data directly.</li><li>By using @property, you can "reuse" the name of a property to avoid creating new names for the getters, setters, and deleters.</li></ul><p><strong>These advantages make properties a really awesome tool to help you write more concise and readable code. </strong>?</p><h3 id="2-intro-to-decorators">2️⃣ Intro to <strong>Decorators</strong></h3><p>A <strong>decorator function</strong> is basically a function that adds new functionality to a function that is passed as argument. Using a decorator function is like adding chocolate sprinkles to an ice cream ?. It lets us add new functionality to an existing function without modifying it. </p><p>In the example below, you can see what a typical decorator function looks like in Python:</p><pre><code class="language-python">def decorator(f):
def new_function():
print("Extra Functionality")
f()
return new_function
@decorator
def initial_function():
print("Initial Functionality")
initial_function()</code></pre><p><strong>Let's analyze these elements in detail:</strong></p><ul><li>We first find the decorator function <code>def decorator(f)</code> (the sprinkles ✨) that takes a function <code>f</code> as an argument. </li></ul><pre><code class="language-python">def decorator(f):
def new_function():
print("Extra Functionality")
f()
return new_function</code></pre><ul><li>This decorator function has an nested function, <code>new_function</code> . Notice how <code>f</code> is called inside <code>new_function</code> to achieve the same functionality while adding new functionality before the function call (we could also add new functionality after the function call).</li><li>The decorator function itself returns the nested function <code>new_function</code>.</li><li>Then (below), we find the function that will be <em>decorated </em>(the ice cream ?) <code>initial_function</code>. Notice the very peculiar syntax (<code>@decorator</code>) above the function header. </li></ul><pre><code class="language-python">@decorator
def initial_function():
print("Initial Functionality")
initial_function()</code></pre><p>If we run the code, we see this output:</p><pre><code class="language-python">Extra Functionality
Initial Functionality</code></pre><p>Notice how the decorator function runs even if we are only calling <code>initial_function()</code>. This is the magic of adding @decorator ?. </p><p><strong>💡Note:</strong> In general, we would write <code>@&lt;decorator_function_name&gt;</code>, replacing the name of the decorator function after the @ symbol.</p><p><strong>I know you may be asking: how is this related to the @property?</strong> The @property is a built-in decorator for the <a href="https://docs.python.org/3/library/functions.html#property">property()</a> function in Python. It is used to give "special" functionality to certain methods to make them act as getters, setters, or deleters when we define properties in a class. </p><p>Now that you are familiar with decorators, let's see a real scenario of the use of @property!</p><h2 id="-real-world-scenario-property">🔸 Real-World Scenario: @property</h2><p>Let's say that this class is part of your program. You are modeling a house with a <code>House</code> class (at the moment, the class only has a <em>price </em>instance attribute defined):</p><pre><code class="language-python">class House:
def __init__(self, price):
self.price = price</code></pre><p>This instance attribute is public because its name doesn't have a leading underscore. Since the attribute is currently public, it is very likely that you and other developers in your team accessed and modified the attribute <strong>directly </strong>in other parts of the program using dot notation, like this:</p><pre><code># Access value
obj.price
# Modify value
obj.price = 40000</code></pre><p>💡 <strong>Tip:</strong> <em>obj</em> represents a variable that references an instance of <code>House</code>. </p><p>So far everything is working great, right? <strong>But</strong> <strong>let's say that you are asked to make this attribute protected (non-public) and validate the new value before assigning it</strong>. Specifically, you need to check if the value is a positive float. How would you do that? Let's see.</p><h3 id="changing-your-code">Changing your Code</h3><p>At this point, if you decide to add getters and setters, you and your team will probably panic ?. This is because each line of code that accesses or modifies the value of the attribute will have to be modified to call the getter or setter, respectively. Otherwise, the code will break ⚠️.</p><pre><code class="language-python"># Changed from obj.price
obj.get_price()
# Changed from obj.price = 40000
obj.set_price(40000)</code></pre><p><strong>But... Properties come to the rescue!</strong> With <code>@property</code>, you and your team will not need to modify any of those lines because you will able to add getters and setters "behind the scenes" without affecting the syntax that you used to access or modify the attribute when it was public. </p><p>Awesome, right? &nbsp;</p><h2 id="-property-syntax-and-logic">🔹 @property: Syntax and Logic</h2><p>If you decide to use <code>@property</code>, your class will look like the example below:</p><pre><code class="language-python">class House:
def __init__(self, price):
self._price = price
@property
def price(self):
return self._price
@price.setter
def price(self, new_price):
if new_price &gt; 0 and isinstance(new_price, float):
self._price = new_price
else:
print("Please enter a valid price")
@price.deleter
def price(self):
del self._price</code></pre><p>Specifically, you can define <strong>three methods</strong> for a property: </p><ul><li>A <strong>getter</strong> - to access the value of the attribute.</li><li>A <strong>setter</strong> - to set the value of the attribute.</li><li>A <strong>deleter </strong>- to delete the instance attribute.</li></ul><p><strong>Price is now "Protected"</strong><br>Please note that the <em>price </em>attribute is now considered "protected" because we added a leading underscore to its name in <code>self._price</code>:</p><pre><code class="language-python">self._price = price</code></pre><p>In Python, <a href="https://www.python.org/dev/peps/pep-0008/#method-names-and-instance-variables">by convention</a>, when you add a leading underscore to a name, you are telling other developers that it should not be accessed or modified directly outside of the class. It should only be accessed through intermediaries (getters and setters) if they are available. </p><h3 id="-getter">🔸 Getter</h3><p>Here we have the getter method:</p><pre><code class="language-python">@property
def price(self):
return self._price</code></pre><p>Notice the syntax:</p><ul><li><code>@property</code> - Used to indicate that we are going to define a property. Notice how this immediately improves readability because we can clearly see the purpose of this method. </li><li><code>def price(self)</code> - The header. Notice how the getter is named exactly like the property that we are defining: <em>price</em>. This is the name that we will use to access and modify the attribute outside of the class. The method only takes one formal parameter, self, which is a reference to the instance.</li><li><code>return self._price</code> - This line is exactly what you would expect in a regular getter. The value of the protected attribute is returned. </li></ul><p>Here is an example of the use of the getter method:</p><pre><code class="language-python">&gt;&gt;&gt; house = House(50000.0) # Create instance
&gt;&gt;&gt; house.price      # Access value
50000.0</code></pre><p>Notice how we access the <em>price </em>attribute as if it were a public attribute. We are not changing the syntax at all, but we are actually using the getter as an intermediary to avoid accessing the data directly.</p><h3 id="-setter">🔹 Setter</h3><p>Now we have the setter method:</p><pre><code class="language-python">@price.setter
def price(self, new_price):
if new_price &gt; 0 and isinstance(new_price, float):
self._price = new_price
else:
print("Please enter a valid price")</code></pre><p>Notice the syntax:</p><ul><li><code>@price.setter</code> - Used to indicate that this is the <em>setter </em>method for the <em>price </em>property. Notice that we are <strong>not </strong>using <em>@<strong>property</strong>.setter</em>, we are using <em>@<strong>price</strong>.setter</em>. The name of the property is included before <em>.setter</em>.</li><li><code>def price(self, new_price):</code> - The header and the list of parameters. Notice how the name of the property is used as the name of the setter. We also have a second formal parameter (<em>new_price</em>), which is the new value that will be assigned to the <em>price </em>attribute (if it is valid).</li><li>Finally, we have the body of the setter where we <strong>validate </strong>the argument to check if it is a positive float and then, if the argument is valid, we update the value of the attribute. If the value is not valid, a descriptive message is printed. You can choose how to handle invalid values according the needs of your program.</li></ul><p>This is an example of the use of the setter method with @property:</p><pre><code class="language-Python">&gt;&gt;&gt; house = House(50000.0)  # Create instance
&gt;&gt;&gt; house.price = 45000.0   # Update value
&gt;&gt;&gt; house.price       # Access value
45000.0</code></pre><p>Notice how we are not changing the syntax, but now we are using an intermediary (the setter) to validate the argument before assigning it. The new value (45000.0) is passed as an argument to the setter : </p><pre><code>house.price = 45000.0</code></pre><p>If we try to assign an invalid value, we see the descriptive message. We can also check that the value was not updated:</p><pre><code class="language-python">&gt;&gt;&gt; house = House(50000.0)
&gt;&gt;&gt; house.price = -50
Please enter a valid price
&gt;&gt;&gt; house.price
50000.0</code></pre><p>💡 <strong>Tip:</strong> This proves that the setter method is working as an intermediary. It is being called "behind the scenes" when we try to update the value, so the descriptive message is displayed when the value is not valid. </p><h3 id="-deleter">🔸 Deleter</h3><p>Finally, we have the deleter method:</p><pre><code class="language-python">@price.deleter
def price(self):
del self._price</code></pre><p>Notice the syntax:</p><ul><li><code>@price.deleter</code> - Used to indicate that this is the <em>deleter </em>method for the <em>price </em>property. Notice that this line is very similar to @price.setter, but now we are defining the deleter method, so we write @price.<strong>deleter</strong>.</li><li><code>def price(self):</code> - The header. This method only has one formal parameter defined, self.</li><li><code>del self._price</code> - The body, where we delete the instance attribute.</li></ul><p>💡 <strong>Tip:</strong> Notice that the name of the property is "reused" for all three methods.</p><p>This is an example of the use of the deleter method with @property:</p><pre><code class="language-python"># Create instance
&gt;&gt;&gt; house = House(50000.0)
# The instance attribute exists
&gt;&gt;&gt; house.price
50000.0
# Delete the instance attribute
&gt;&gt;&gt; del house.price
# The instance attribute doesn't exist
&gt;&gt;&gt; house.price
Traceback (most recent call last):
File "&lt;pyshell#35&gt;", line 1, in &lt;module&gt;
house.price
File "&lt;pyshell#20&gt;", line 8, in price
return self._price
AttributeError: 'House' object has no attribute '_price'</code></pre><p>The instance attribute was deleted successfully ?. When we try to access it again, an error is thrown because the attribute doesn't exist anymore.</p><h3 id="-some-final-tips">🔹 Some final Tips </h3><p>You don't necessarily have to define all three methods for every property. You can define read-only properties by only including a getter method. You could also choose to define a getter and setter without a deleter. </p><p>If you think that an attribute should only be set when the instance is created or that it should only be modified internally within the class, you can omit the setter. </p><p>You can choose which methods to include depending on the context that you are working with.</p><h2 id="-in-summary">🔸 In Summary</h2><ul><li>You can define properties with the @property syntax, which is more compact and readable.</li><li>@property can be considered the "pythonic" way of defining getters, setters, and deleters.</li><li>By defining properties, you can change the internal implementation of a class without affecting the program, so you can add getters, setters, and deleters that act as intermediaries "behind the scenes" to avoid accessing or modifying the data directly.</li></ul><p><strong>I really hope you liked my article and found it helpful.</strong> To learn more about Properties and Object Oriented Programming in Python, <a href="https://www.udemy.com/course/python-object-oriented-programming-oop/?referralCode=69EAFFB4805866B8CC31">check out my online course</a>, which includes 6+ hours of video lectures, coding exercises, and mini projects.</p>
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
