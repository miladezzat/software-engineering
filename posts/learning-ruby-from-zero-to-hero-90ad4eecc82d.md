---
card: "https://cdn-media-1.freecodecamp.org/images/1*sZSVVtdP9TE3mUoGh4GoYA.png"
tags: [Programming]
description: "Why learn Ruby?"
author: "Milad E. Fahmy"
title: "Learning Ruby: From Zero to Hero"
created: "2021-08-16T11:49:30+02:00"
modified: "2021-08-16T11:49:30+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-programming tag-ruby tag-tech tag-startup tag-technology ">
<header class="post-full-header">
<h1 class="post-full-title">Learning Ruby: From Zero to Hero</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*sZSVVtdP9TE3mUoGh4GoYA.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*sZSVVtdP9TE3mUoGh4GoYA.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*sZSVVtdP9TE3mUoGh4GoYA.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*sZSVVtdP9TE3mUoGh4GoYA.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*sZSVVtdP9TE3mUoGh4GoYA.png" alt="Learning Ruby: From Zero to Hero">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<blockquote>“Ruby is simple in appearance, but is very complex inside, just like our human body.” — <a href="https://twitter.com/yukihiro_matz" rel="noopener">Matz</a>, creator of the Ruby programming language</blockquote><p>Why learn Ruby?</p><p>For me, the first reason is that it’s a beautiful language. It’s natural to code and it always expresses my thoughts.</p><p>The second — and main — reason is <em>Rails</em>: the same framework that Twitter, Basecamp, Airbnb, Github, and so many companies use.</p><h3 id="introduction-history">Introduction/History</h3><p>Ruby is “A dynamic, open source programming language with a focus on simplicity and productivity. It has an elegant syntax that is natural to read and easy to write.” — <a href="https://www.ruby-lang.org/" rel="noopener">ruby-lang.org</a></p><p>Let’s get started with some basics!</p><h3 id="variables">Variables</h3><p>You can think about a variable as a word that stores a value. Simple as that.</p><p>In Ruby it’s easy to define a variable and set a value to it. Imagine you want to store the number 1 in a variable called one. Let’s do it!</p><pre><code class="language-rb">one = 1</code></pre><p>How simple was that? You just assigned the value 1 to a variable called one.</p><pre><code class="language-rb">two = 2
some_number = 10000</code></pre><p>You can assign a value to whatever variable you want. In the example above, a <em>two</em> variable stores an integer of 2 and <em>some_number</em> stores 10,000.</p><p>Besides integers, we can also use booleans (true/false), strings, <a href="http://rubylearning.com/satishtalim/ruby_symbols.html" rel="noopener">symbols</a>, float, and other data types.</p><pre><code class="language-rb"># booleans
true_boolean = true
false_boolean = false
# string
my_name = "Leandro Tk"
# symbol
a_symbol = :my_symbol
# float
book_price = 15.80</code></pre><h3 id="conditional-statements-control-flow">Conditional Statements: Control Flow</h3><p>Conditional statements evaluate true or false. If something is true, it executes what’s inside the statement. For example:</p><pre><code class="language-rb">if true
puts "Hello Ruby If"
end
if 2 &gt; 1
puts "2 is greater than 1"
end</code></pre><p>2 is greater than 1, so the <em>puts</em> code is executed.</p><p>This else statement will be executed when the if expression is false:</p><pre><code class="language-rb">if 1 &gt; 2
puts "1 is greater than 2"
else
puts "1 is not greater than 2"
end</code></pre><p>1 is not greater than 2, so the code inside the else statement will be executed.</p><p>There’s also the elsif statement. You can use it like this:</p><pre><code class="language-rb">if 1 &gt; 2
puts "1 is greater than 2"
elsif 2 &gt; 1
puts "1 is not greater than 2"
else
puts "1 is equal to 2"
end</code></pre><p>One way I really like to write Ruby is to use an if statement after the code to be executed:</p><pre><code class="language-rb">def hey_ho?
true
end
puts "let’s go" if hey_ho?</code></pre><p>It is so beautiful and natural. It is idiomatic Ruby.</p><h3 id="looping-iterator">Looping/Iterator</h3><p>In Ruby we can iterate in so many different forms. I’ll talk about three iterators: while, for and each.</p><p>While looping: As long as the statement is true, the code inside the block will be executed. So this code will print the number from 1 to 10:</p><pre><code class="language-rb">num = 1
while num &lt;= 10
puts num
num += 1
end</code></pre><p>For looping: You pass the variable num to the block and the for statement will iterate it for you. This code will print the same as while code: from 1 to 10:</p><pre><code class="language-rb">for num in 1...10
puts num
end</code></pre><p>Each iterator: I really like the each iterator. For an array of values, it’ll iterate one by one, passing the variable to the block:</p><pre><code class="language-rb">[1, 2, 3, 4, 5].each do |num|
puts num
end</code></pre><p>You may be asking what the difference is between the each iterator and for looping. The main difference is that the each iterator only maintains the variable inside the iteration block, whereas for looping allows the variable to live on outside the block.</p><pre><code class="language-rb"># for vs each
# for looping
for num in 1...5
puts num
end
puts num # =&gt; 5
# each iterator
[1, 2, 3, 4, 5].each do |num|
puts num
end
print my_integers[0] # 5
print my_integers[1] # 7
print my_integers[4] # 4</code></pre><p>Imagine you want to store strings instead of integers, like a list of your relatives’ names. Mine would be something like this:</p><pre><code class="language-rb">relatives_names = [
"Toshiaki",
"Juliana",
"Yuji",
"Bruno",
"Kaio"
]
print relatives_names[4] # Kaio</code></pre><p>Works the same way as integers. Nice!</p><p>We just learned how array indices works. Now let’s add elements to the array data structure (items to the list).</p><p>The most common methods to add a new value to an array are push and &lt;&lt;.</p><p>Push is super simple! You just need to pass the element (The Effective Engineer) as the push parameter:</p><pre><code class="language-rb">bookshelf = []
bookshelf.push("The Effective Engineer")
bookshelf.push("The 4 hours work week")
print bookshelf[0] # The Effective Engineer
print bookshelf[1] # The 4 hours work week</code></pre><p>The &lt;&lt; method is just slightly different:</p><pre><code class="language-rb">bookshelf = []
bookshelf &lt;&lt; "Lean Startup"
bookshelf &lt;&lt; "Zero to One"
print bookshelf[0] # Lean Startup
print bookshelf[1] # Zero to One</code></pre><p>You may ask, “But it doesn’t use the dot notation like other methods do. How could it be a method?” Nice question! Writing this:</p><pre><code class="language-rb">bookshelf &lt;&lt; "Hooked"</code></pre><p>…is similar to writing this:</p><pre><code class="language-rb">bookshelf.&lt;&lt;("Hooked")</code></pre><p>Ruby is so great, huh?</p><p>Well, enough arrays. Let’s talk about another data structure.</p><h3 id="hash-key-value-data-structure-dictionary-collection">Hash: Key-Value Data Structure/Dictionary Collection</h3><p>We know that arrays are indexed with numbers. But what if we don’t want to use numbers as indices? Some data structures can use numeric, string, or other types of indices. The hash data structure is one of them.</p><p>Hash is a collection of key-value pairs. It looks like this:</p><pre><code class="language-rb">hash_example = {
"key1" =&gt; "value1",
"key2" =&gt; "value2",
"key3" =&gt; "value3"
}</code></pre><p>The key is the index pointing to the value. How do we access the hash value? Using the key!</p><p>Here’s a hash about me. My name, nickname, and nationality are the hash’s keys.</p><pre><code class="language-rb">hash_tk = {
"name" =&gt; "Leandro",
"nickname" =&gt; "Tk",
"nationality" =&gt; "Brazilian"
}
print "My name is #{hash_tk["name"]}" # My name is Leandro
print "But you can call me #{hash_tk["nickname"]}" # But you can call me Tk
print "And by the way I'm #{hash_tk["nationality"]}" # And by the way I'm Brazilian</code></pre><p>In the above example I printed a phrase about me using all the values stored in the hash.</p><p>Another cool thing about hashes is that we can use anything as the value. I’ll add the key “age” and my real integer age (24).</p><pre><code class="language-rb">hash_tk = {
"name" =&gt; "Leandro",
"nickname" =&gt; "Tk",
"nationality" =&gt; "Brazilian",
"age" =&gt; 24
}
print "My name is #{hash_tk["name"]}" # My name is Leandro
print "But you can call me #{hash_tk["nickname"]}" # But you can call me Tk
print "And by the way I'm #{hash_tk["age"]} and #{hash_tk["nationality"]}" # And by the way I'm 24 and Brazilian
</code></pre><p>Let’s learn how to add elements to a hash. The key pointing to a value is a big part of what hash is — and the same goes for when we want to add elements to it.</p><pre><code class="language-rb">hash_tk = {
"name" =&gt; "Leandro",
"nickname" =&gt; "Tk",
"nationality" =&gt; "Brazilian"
}
hash_tk["age"] = 24
print hash_tk # { "name" =&gt; "Leandro", "nickname" =&gt; "Tk", "nationality" =&gt; "Brazilian", "age" =&gt; 24 }
</code></pre><p>We just need to assign a value to a hash key. Nothing complicated here, right?</p><h3 id="iteration-looping-through-data-structures">Iteration: Looping Through Data Structures</h3><p>The array iteration is very simple. Ruby developers commonly use the each iterator. Let’s do it:</p><pre><code class="language-rb">bookshelf = [
"The Effective Engineer",
"The 4 hours work week",
"Zero to One",
"Lean Startup",
"Hooked"
]
bookshelf.each do |book|
puts book
end</code></pre><p>The each iterator works by passing array elements as parameters in the block. In the above example, we print each element.</p><p>For hash data structure, we can also use the each iterator by passing two parameters to the block: the key and the value. Here’s an example:</p><pre><code class="language-rb">hash = { "some_key" =&gt; "some_value" }
hash.each { |key, value| puts "#{key}: #{value}" } # some_key: some_value</code></pre><p>We named the two parameters as key and value, but it’s not necessary. We can name them anything:</p><pre><code class="language-rb">hash_tk = {
"name" =&gt; "Leandro",
"nickname" =&gt; "Tk",
"nationality" =&gt; "Brazilian",
"age" =&gt; 24
}
hash_tk.each do |attribute, value|
puts "#{attribute}: #{value}"
end</code></pre><p>You can see we used attribute as a parameter for the hash key and it works properly. Great!</p><h3 id="classes-objects">Classes &amp; Objects</h3><p>As an object oriented programming language, Ruby uses the concepts of class and object.</p><p>“Class” is a way to define objects. In the real world there are many objects of the same type. Like vehicles, dogs, bikes. Each vehicle has similar components (wheels, doors, engine).</p><p>“Objects” have two main characteristics: data and behavior. Vehicles have data like number of wheels and number of doors. They also have behavior like accelerating and stopping.</p><p>In object oriented programming we call data “attributes” and behavior “methods.”</p><p>Data = Attributes</p><p>Behavior = Methods</p><h3 id="ruby-object-oriented-programming-mode-on">Ruby Object Oriented Programming Mode: On</h3><p>Let’s understand Ruby syntax for classes:</p><pre><code class="language-rb">class Vehicle
end</code></pre><p>We define Vehicle with class statement and finish with end. Easy!</p><p>And objects are instances of a class. We create an instance by calling the .new method.</p><pre><code class="language-rb">vehicle = Vehicle.new</code></pre><p>Here <em>vehicle</em> is an object (or instance) of the class Vehicle.</p><p>Our vehicle class will have 4 attributes: Wheels, type of tank, seating capacity, and maximum velocity.</p><p>Let’s define our class Vehicle to receive data and instantiate it.</p><pre><code class="language-rb">class Vehicle
def initialize(number_of_wheels, type_of_tank, seating_capacity, maximum_velocity)
@number_of_wheels = number_of_wheels
@type_of_tank = type_of_tank
@seating_capacity = seating_capacity
@maximum_velocity = maximum_velocity
end
end</code></pre><p>We use the initialize method. We call it a constructor method so when we create the vehicle object, we can define its attributes.</p><p>Imagine that you love the Tesla Model S and want to create this kind of object. It has 4 wheels. Its tank type is electric energy. It has space for 5 seats and a maximum velocity is 250km/hour (155 mph). Let’s create the object tesla_model_s! :)</p><pre><code class="language-rb">tesla_model_s = Vehicle.new(4, 'electric', 5, 250)</code></pre><p>4 wheels + electric tank + 5 seats + 250km/hour maximum speed = tesla_model_s.</p><pre><code class="language-rb">tesla_model_s
# =&gt; &lt;Vehicle:0x0055d516903a08 @number_of_wheels=4, @type_of_tank="electric", @seating_capacity=5, @maximum_velocity=250&gt;
</code></pre><p>We’ve set the Tesla’s attributes. But how do we access them?</p><p>We send a message to the object asking about them. We call it a method. It’s the object’s behavior. Let’s implement it!</p><pre><code class="language-rb">class Vehicle
def initialize(number_of_wheels, type_of_tank, seating_capacity, maximum_velocity)
@number_of_wheels = number_of_wheels
@type_of_tank = type_of_tank
@seating_capacity = seating_capacity
@maximum_velocity = maximum_velocity
end
def number_of_wheels
@number_of_wheels
end
def set_number_of_wheels=(number)
@number_of_wheels = number
end
end</code></pre><p>This is an implementation of two methods: number_of_wheels and set_number_of_wheels. We call it “getter” and “setter.” First we get the attribute value, and second, we set a value for the attribute.</p><p>In Ruby, we can do that without methods using attr_reader, attr_writer and attr_accessor. Let’s see it with code!</p><ul><li>attr_reader: implements the getter method</li></ul><pre><code class="language-rb">class Vehicle
attr_reader :number_of_wheels
def initialize(number_of_wheels, type_of_tank, seating_capacity, maximum_velocity)
@number_of_wheels = number_of_wheels
@type_of_tank = type_of_tank
@seating_capacity = seating_capacity
@maximum_velocity = maximum_velocity
end
end
tesla_model_s = Vehicle.new(4, 'electric', 5, 250)
tesla_model_s.number_of_wheels # =&gt; 4</code></pre><ul><li>attr_writer: implements the setter method</li></ul><pre><code class="language-rb">class Vehicle
attr_writer :number_of_wheels
def initialize(number_of_wheels, type_of_tank, seating_capacity, maximum_velocity)
@number_of_wheels = number_of_wheels
@type_of_tank = type_of_tank
@seating_capacity = seating_capacity
@maximum_velocity = maximum_velocity
end
end
# number_of_wheels equals 4
tesla_model_s = Vehicle.new(4, 'electric', 5, 250)
tesla_model_s # =&gt; &lt;Vehicle:0x0055644f55b820 @number_of_wheels=4, @type_of_tank="electric", @seating_capacity=5, @maximum_velocity=250&gt;
# number_of_wheels equals 3
tesla_model_s.number_of_wheels = 3
tesla_model_s # =&gt; &lt;Vehicle:0x0055644f55b820 @number_of_wheels=3, @type_of_tank="electric", @seating_capacity=5, @maximum_velocity=250&gt;
</code></pre><ul><li>attr_accessor: implements both methods</li></ul><pre><code class="language-rb">class Vehicle
attr_accessor :number_of_wheels
def initialize(number_of_wheels, type_of_tank, seating_capacity, maximum_velocity)
@number_of_wheels = number_of_wheels
@type_of_tank = type_of_tank
@seating_capacity = seating_capacity
@maximum_velocity = maximum_velocity
end
end
# number_of_wheels equals 4
tesla_model_s = Vehicle.new(4, 'electric', 5, 250)
tesla_model_s.number_of_wheels # =&gt; 4
# number_of_wheels equals 3
tesla_model_s.number_of_wheels = 3
tesla_model_s.number_of_wheels # =&gt; 3</code></pre><p>So now we’ve learned how to get attribute values, implement the getter and setter methods, and use attr (reader, writer, and accessor).</p><p>We can also use methods to do other things — like a “make_noise” method. Let’s see it!</p><pre><code class="language-rb">class Vehicle
def initialize(number_of_wheels, type_of_tank, seating_capacity, maximum_velocity)
@number_of_wheels = number_of_wheels
@type_of_tank = type_of_tank
@seating_capacity = seating_capacity
@maximum_velocity = maximum_velocity
end
def make_noise
"VRRRRUUUUM"
end
end</code></pre><p>When we call this method, it just returns a string “VRRRRUUUUM”.</p><pre><code class="language-rb">v = Vehicle.new(4, 'gasoline', 5, 180)
v.make_noise # =&gt; "VRRRRUUUUM"</code></pre><h3 id="encapsulation-hiding-information">Encapsulation: Hiding Information</h3><p>Encapsulation is a way to restrict direct access to objects’ data and methods. At the same time it facilitates operation on that data (objects’ methods).</p><blockquote>Encapsulation can be used to hide data members and members function…Encapsulation means that the internal representation of an object is generally hidden from view outside of the object’s definition. <br> — <a href="https://en.wikipedia.org/wiki/Encapsulation_(computer_programming)" rel="noopener">Wikipedia</a></blockquote><p>So all internal representation of an object is hidden from the outside, only the object can interact with its internal data.</p><p>In Ruby we use methods to directly access data. Let’s see an example:</p><pre><code class="language-rb">class Person
def initialize(name, age)
@name = name
@age  = age
end
end</code></pre><p>We just implemented this Person class. And as we’ve learned, to create the object person, we use the new method and pass the parameters.</p><pre><code class="language-rb">tk = Person.new("Leandro Tk", 24)</code></pre><p>So I created me! :) The <a href="https://medium.com/@leandrotk_/" rel="noopener"><em>tk</em></a> object! Passing my name and my age. But how can I access this information? My first attempt is to call the name and age methods.</p><pre><code class="language-rb">tk.name
&gt; NoMethodError: undefined method `name' for #&lt;Person:0x0055a750f4c520 @name="Leandro Tk", @age=24&gt;</code></pre><p>We can’t do it! We didn’t implement the name (and the age) method.</p><p>Remember when I said “In Ruby we use methods to directly access data?” To access the tk name and age we need to implement those methods on our Person class.</p><pre><code class="language-rb">class Person
def initialize(name, age)
@name = name
@age  = age
end
def name
@name
end
def age
@age
end
end</code></pre><p>Now we can directly access this information. With encapsulation we can ensure that the object (tk in this case) is only allowed to access name and age. The internal representation of the object is hidden from the outside.</p><h3 id="inheritance-behaviors-and-characteristics">Inheritance: behaviors and characteristics</h3><p>Certain objects have something in common. Behavior and characteristics.</p><p>For example, I inherited some characteristics and behaviors from my father — like his eyes and hair. And behaviors like impatience and introversion.</p><p>In object oriented programming, classes can inherit common characteristics (data) and behavior (methods) from another class.</p><p>Let’s see another example and implement it in Ruby.</p><p>Imagine a car. Number of wheels, seating capacity and maximum velocity are all attributes of a car.</p><pre><code class="language-rb">class Car
attr_accessor :number_of_wheels, :seating_capacity, :maximum_velocity
def initialize(number_of_wheels, seating_capacity, maximum_velocity)
@number_of_wheels = number_of_wheels
@seating_capacity = seating_capacity
@maximum_velocity = maximum_velocity
end
end</code></pre><p>Our Car class implemented! :)</p><pre><code class="language-rb">my_car = Car.new(4, 5, 250)
my_car.number_of_wheels # 4
my_car.seating_capacity # 5
my_car.maximum_velocity # 250</code></pre><p>Instantiated, we can use all methods created! Nice!</p><p>In Ruby, we use the &lt; operator to show a class inherits from another. An ElectricCar class can inherit from our Car class.</p><pre><code class="language-rb">class ElectricCar &lt; Car
end</code></pre><p>Simple as that! We don’t need to implement the initialize method and any other method, because this class already has it (inherited from the Car class). Let’s prove it!</p><pre><code class="language-rb">tesla_model_s = ElectricCar.new(4, 5, 250)
tesla_model_s.number_of_wheels # 4
tesla_model_s.seating_capacity # 5
tesla_model_s.maximum_velocity # 250</code></pre><p>Beautiful!</p><h3 id="module-a-toolbox">Module: A Toolbox</h3><p>We can think of a module as a toolbox that contains a set of constants and methods.</p><p>An example of a Ruby module is Math. We can access the constant PI:</p><pre><code class="language-rb">Math::PI # &gt; 3.141592653589793 </code></pre><p>And the .sqrt method:</p><pre><code class="language-rb">Math.sqrt(9) # 3.0</code></pre><p>And we can implement our own module and use it in classes. We have a RunnerAthlete class:</p><pre><code class="language-rb">class RunnerAthlete
def initialize(name)
@name = name
end
end</code></pre><p>And implement a module Skill to have the average_speed method.</p><pre><code class="language-rb">module Skill
def average_speed
puts "My average speed is 20mph"
end
end</code></pre><p>How do we add the module to our classes so it has this behavior (average_speed method)? We just include it!</p><pre><code class="language-rb">class RunnerAthlete
include Skill
def initialize(name)
@name = name
end
end</code></pre><p>See the “include Skill”! And now we can use this method in our instance of RunnerAthlete class.</p><pre><code class="language-rub">mohamed = RunnerAthlete.new("Mohamed Farah")
mohamed.average_speed # "My average speed is 20mph"</code></pre><p>Yay! To finish modules, we need to understand the following:</p><ul><li>A module can have no instances.</li><li>A module can have no subclasses.</li><li>A module is defined by module…end.</li></ul><h3 id="wrapping-up-">Wrapping Up!</h3><p>We learned A LOT of things here!</p><ul><li>How Ruby variables work</li><li>How Ruby conditional statements work</li><li>How Ruby looping &amp; iterators work</li><li>Array: Collection | List</li><li>Hash: Key-Value Collection</li><li>How we can iterate through this data structures</li><li>Objects &amp; Classes</li><li>Attributes as objects’ data</li><li>Methods as objects’ behavior</li><li>Using Ruby getters and setters</li><li>Encapsulation: hiding information</li><li>Inheritance: behaviors and characteristics</li><li>Modules: a toolbox</li></ul><h3 id="that-s-it">That’s it</h3><p>Congrats! You completed this dense piece of content about Ruby! We learned a lot here. Hope you liked it.</p><p>Have fun, keep learning, and always keep coding!</p><p>My <a href="https://twitter.com/LeandroTk_" rel="noopener">Twitter</a> &amp; <a href="https://github.com/LeandroTk" rel="noopener">Github</a>. ☺</p>
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
