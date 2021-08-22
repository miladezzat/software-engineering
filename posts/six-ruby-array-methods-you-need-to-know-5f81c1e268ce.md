---
card: "https://cdn-media-1.freecodecamp.org/images/1*9AjPziZ4KGGEcq52iLMcPA.jpeg"
tags: [Ruby]
description: "Arrays are one of the fundamental structures of programming. "
author: "Milad E. Fahmy"
title: "Six Ruby array methods you need to know"
created: "2021-08-16T11:46:53+02:00"
modified: "2021-08-16T11:46:53+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-ruby tag-tutorial tag-programming tag-web-development tag-technology ">
<header class="post-full-header">
<h1 class="post-full-title">Six Ruby array methods you need to know</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*9AjPziZ4KGGEcq52iLMcPA.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*9AjPziZ4KGGEcq52iLMcPA.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*9AjPziZ4KGGEcq52iLMcPA.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*9AjPziZ4KGGEcq52iLMcPA.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*9AjPziZ4KGGEcq52iLMcPA.jpeg" alt="Six Ruby array methods you need to know">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Arrays are one of the fundamental structures of programming. Being able to quickly manipulate and read data out of them is vital to success in building stuff with computers. Here are six methods you can’t do without.</p><h3 id="map-each">Map/Each</h3><p>These two methods are very similar. They allow you to step through “each” item in an array and do something to it.</p><p>Check out some code:</p><pre><code class="language-ruby">array = [1, 2, 3]
effects = array.each{|x| # create record from x }
added = array.map{ |x| x + 2 }</code></pre><p>If we read from <code>added</code>, we’ll get <code>[3, 4, 5]</code>. If we read from <code>effects</code>, we’ll still get <code>[1, 2, 3]</code>. Here’s the difference between these two: <code>.map</code> will return a <strong>new</strong> modified array, whereas <code>.each</code> will return the original array.</p><h4 id="side-effects-in-map">Side effects in map</h4><p>If you’re used to functional programming, Ruby’s <code>.map</code> might seem very strange. Look at this example. I have a simple <code>Event</code> class in my project:</p><pre><code class="language-ruby"># we create an array of records
2.3.0 :025 &gt; array = [e, e2, e3]
=&gt; [#&lt;Event id: 1, name: nil&gt;, #&lt;Event id: 2, name: nil"&gt;, #&lt;Event id: 3, name: nil&gt;]
# so far so good
2.3.0 :026 &gt; new_array = array.map{|e| e.name = "a name"; e}
=&gt; [#&lt;Event id: 1, name: "a name"&gt;, #&lt;Event id: 2, name: "a name"&gt;, #&lt;Event id: 3, name: "a name"&gt;]
# uh-oh, that ain't right
2.3.0 :027 &gt; array
=&gt; [#&lt;Event id: 1, name: "a name"&gt;, #&lt;Event id: 2, name: "a name"&gt;, #&lt;Event id: 3, name: "a name"&gt;]</code></pre><p>We might expect that we are working with some kind of copy of our records in the array, but we are not. That is all just to say: be careful. You can easily create side effects in your <code>.map</code> functions.</p><p>Ok rest easy, that was the hard one. Smooth sailing from here on out.</p><h3 id="select">Select</h3><p><code>.select</code> allows you to “find” an element in an array. You have to give <code>.select</code> a function that returns true or false, so it knows whether or not to “keep” an array element.</p><pre><code>2.3.0 :028 &gt; array = ['hello', 'hi', 'goodbye']
2.3.0 :029 &gt; array.select{|word| word.length &gt; 3}
=&gt; ["hello", "goodbye"]</code></pre><p>A slightly more complex example, probably getting closer to how you’d actually use this. Let’s throw in <code>.map</code> at the end for good measure:</p><pre><code class="language-ruby">2.3.0 :030 &gt; valid_colors = ['red', 'green', 'blue']
2.3.0 :031 &gt; cars = [{type: 'porsche', color: 'red'}, {type: 'mustang', color: 'orange'}, {type: 'prius', color: 'blue'}]
2.3.0 :032 &gt; cars.select{ |car| valid_colors.include?(car[:color]) }.map{ |car| car[:type]}
=&gt; ["porsche", "prius"]</code></pre><p>Yes, folks, you can join these methods to wield unimaginable power. Ok, you can probably imagine it, but it’s still cool.</p><h4 id="even-cleaner-syntax-map-method-">Even cleaner syntax: .map(&amp;:method)</h4><p>If we had been working with car objects and not just a simple hash, we could have used a cleaner syntax. I’ll use a different example for brevity. Maybe we are preparing this list of cars to send out in an API and need to generate JSON. We can use the <code>.to_json</code> method:</p><pre><code class="language-ruby"># using regular map syntax
2.3.0 :047 &gt; cars.select{ |car| valid_colors.include?(car[:color]) }.map{|car| car.to_json}
=&gt; ["{\"type\":\"porsche\",\"color\":\"red\"}", "{\"type\":\"prius\",\"color\":\"blue\"}"]
# using the cleaner syntax
2.3.0 :046 &gt; cars.select{|car| valid_colors.include?(car[:color]) }.map(&amp;:to_json)
=&gt; ["{\"type\":\"porsche\",\"color\":\"red\"}", "{\"type\":\"prius\",\"color\":\"blue\"}"]</code></pre><h3 id="reject">Reject</h3><p>Reject is the yin to <code>.select</code>'s yang:</p><pre><code class="language-ruby">2.3.0 :048 &gt; cars.reject{|car| valid_colors.include?(car[:color]) }.map{|car| car[:type]}
=&gt; ["mustang"]</code></pre><p>Instead of <strong>selecting</strong> for the array items we want, we will <strong>reject</strong> everything that does not make our function return true. Remember that the <strong>function inside our reject</strong> is what determines if the array item will be returned or not — if it’s true, the item is returned, otherwise not.</p><h3 id="reduce-function reduce() { [native code] }1">Reduce</h3><p>Reduce has a more complex structure than our other array methods, but it’s generally used for pretty simple things in Ruby — mostly math stuff. We’ll take an array, then run a function on every item in that array. This time, we care about what is being returned from the <em>other array items</em>. Typically we are adding up a bunch of numbers:</p><pre><code class="language-ruby">2.3.0 :049 &gt; array = [1, 2, 3]
2.3.0 :050 &gt; array.reduce{|sum, x| sum + x}
=&gt; 6</code></pre><p>Note that we can work with strings in the same way:</p><pre><code class="language-ruby">2.3.0 :053 &gt; array = ['amber', 'scott', 'erica']
2.3.0 :054 &gt; array.reduce{|sum, name| sum + name}
=&gt; "amberscotterica"</code></pre><p>This might be helpful if we are looking at a bunch of work records. If we need to add up total hours worked, or if we want to find out the sum of all donations last month. One final note about <code>.reduce. </code>If you’re working with anything other than regular old numbers (or strings), you’ll need to include a starting value as an argument:</p><pre><code class="language-ruby">array = [{weekday: 'Monday', pay: 123}, {weekday: 'Tuedsay', pay: 244}]
array.reduce(0) {|sum, day| sum + day[:pay]}
=&gt; 367
array.reduce(100) {|sum, day| sum + day[:pay]}
=&gt; 467</code></pre><p>There are, of course, more advanced ways to use <code>.reduce</code> but this is plenty to get you started.</p><h3 id="join-function join() { [native code] }1">Join</h3><p>I’m throwing in <code>.join</code> as a bonus because it’s so dang useful. Let’s use our cars again:</p><pre><code class="language-ruby">2.3.0 :061 &gt; cars.map{|car| car[:type]}.join(', ')
=&gt; "porsche, mustang, prius"</code></pre><p><code>.join</code> is a lot like <code>.reduce</code> except it’s got a super-clean syntax. It takes one argument: a string that will be inserted between all array elements. <code>.join</code>creates one long string out of whatever you give it, even if your array is a bunch of non-string stuff:</p><pre><code class="language-ruby">2.3.0 :062 &gt; cars.join(', ')
=&gt; "{:type=&gt;\"porsche\", :color=&gt;\"red\"}, {:type=&gt;\"mustang\", :color=&gt;\"orange\"}, {:type=&gt;\"prius\", :color=&gt;\"blue\"}"
2.3.0 :065 &gt; events.join(', ')
=&gt; "#&lt;Event:0x007f9beef84a08&gt;, #&lt;Event:0x007f9bf0165e70&gt;, #&lt;Event:0x007f9beb5b9170&gt;"</code></pre><h3 id="why-not-just-throw-it-all-together">Why not just throw it all together</h3><p>Let’s use <strong>all</strong> of the array methods in this post together! Ten days of chores, and it’s random how long each will take. We want to know the total time we’ll spend on chores. This is assuming we slack off and ignore everything that takes longer than 15 minutes. Or put off until another day anything that can be done in less than 5:</p><pre><code class="language-ruby">days = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
days.map{|day| day.odd? ?
{task: 'dishes', minutes: Random.rand(20)} :
{task: 'sweep', minutes: Random.rand(20)}}
.select{|task| task[:minutes] &lt; 15}
.reject{|task| task[:minutes] &lt; 5}
.reduce(0) {|sum, task| sum + task[:minutes]}</code></pre><p>My answer is irrelevant because you’ll get different random minutes for your tasks to take. If any of this is fresh or confusing, fire up a Ruby console and give it a whirl.</p><p>PS: That <code>? :</code> business on <code>.map</code> is called a <code>ternary</code>. It’s just an if-else statement. I’m only using it here to be fancy and get everything on “one” line. You should avoid such a complicated ternary in your own code base.</p><p>See you next time!</p>
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
