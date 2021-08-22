---
card: "https://cdn-media-1.freecodecamp.org/images/1*9hd_8qR0CMZ8L0pVbFLjDw.png"
tags: [Ruby]
description: "Ruby is a beautiful programming language."
author: "Milad E. Fahmy"
title: "Idiomatic Ruby: writing beautiful code"
created: "2021-08-15T23:49:42+02:00"
modified: "2021-08-15T23:49:42+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-ruby tag-programming tag-coding tag-startup tag-tech ">
<header class="post-full-header">
<h1 class="post-full-title">Idiomatic Ruby: writing beautiful code</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*9hd_8qR0CMZ8L0pVbFLjDw.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*9hd_8qR0CMZ8L0pVbFLjDw.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*9hd_8qR0CMZ8L0pVbFLjDw.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*9hd_8qR0CMZ8L0pVbFLjDw.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*9hd_8qR0CMZ8L0pVbFLjDw.png" alt="Idiomatic Ruby: writing beautiful code">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Ruby is a beautiful programming language.</p><p>According to <a href="http://www.ruby-lang.org/en/" rel="noopener">Ruby</a>’s official web page, Ruby is a:</p><blockquote><strong>“</strong><em>dynamic, open source programming language with a focus on simplicity and productivity. It has an elegant syntax that is natural to read and easy to write.”</em></blockquote><p>Ruby was created by <a href="https://twitter.com/yukihiro_matz" rel="noopener">Yukihiro Matsumoto</a>, a Japanese software engineer. Since 2011, he has been the chief designer &amp; software engineer for Ruby at <a href="https://www.heroku.com/" rel="noopener">Heroku</a>.</p><p>Matsumoto has often said that he tries<strong> to make Ruby natural, not simple</strong>, in a way that mirrors life.</p><blockquote>“Ruby is simple in appearance, but is very complex inside, just like our human body” — Yukihiro Matsumoto</blockquote><p>I feel the same way about Ruby. It is a complex but very natural programming language, with a beautiful and intuitive syntax.</p><p>With more intuitive and faster code, we are able to build better software. In this post, I will show you how I express my thoughts (aka code) with Ruby, by using snippets of code.</p><h3 id="expressing-my-thoughts-with-array-methods">Expressing my thoughts with array methods</h3><h4 id="map-function map() { [native code] }1">Map</h4><p>Use the <strong>map</strong> method to simplify your code and get what you want.</p><p>The method<strong> map</strong> returns a new array with the results of running a block once for every element in enum.</p><p>Let’s try it:</p><pre><code class="language-rb">an_array.map { |element| element * element }</code></pre><p>Simple as that.</p><p>But when you begin coding with Ruby, it is easy to always use the <strong>each</strong> iterator.</p><p>The <strong>each</strong> iterator as shown below</p><pre><code class="language-rb">user_ids = []
users.each { |user| user_ids &lt;&lt; user.id }</code></pre><p>Can be simplified with <strong>map</strong> in a single beautiful line of code:</p><pre><code class="language-rb">user_ids = users.map { |user| user.id }</code></pre><p>Or even better (and faster):</p><pre><code class="language-rb">user_ids = users.map(&amp;:id)</code></pre><h4 id="select">Select</h4><p>And when you’re used to coding with <strong>map</strong>, sometimes your code can be like this:</p><pre><code class="language-rb">even_numbers = [1, 2, 3, 4, 5].map { |element| element if element.even? } # [ni, 2, nil, 4, nil]
even_numbers = even_numbers.compact # [2, 4]</code></pre><p>Using <strong>map</strong> to select only the even numbers will return the<em> </em><strong>nil</strong> object as well. Use the <strong>compact</strong> method to remove all <strong>nil</strong> objects.</p><p>And ta-da, you’ve selected all the even numbers.</p><p>Mission accomplished.</p><p>Come on, we can do better than this! Did you hear about the <strong>select</strong> method from enumerable module?</p><pre><code class="language-rb">[1, 2, 3, 4, 5].select { |element| element.even? }</code></pre><p>Just one line. Simple code. Easy to understand.</p><h4 id="bonus"><strong>Bonus</strong></h4><pre><code class="language-rb">[1, 2, 3, 4, 5].select(&amp;:even?)</code></pre><h4 id="sample">Sample</h4><p>Imagine that you need to get a random element from an array. You just started learning Ruby, so your first thought will be, “Let’s use the <strong>random</strong> method,” and that’s what happens:</p><pre><code class="language-rb">[1, 2, 3][rand(3)]</code></pre><p>Well, we can understand the code, but I’m not sure if it is good enough. And what if we use the <strong>shuffle</strong> method?</p><pre><code class="language-rb">[1, 2, 3].shuffle.first</code></pre><p>Hmm. I actually prefer to use <strong>shuffle</strong> over <strong>rand</strong>. But when I discovered the <strong>sample</strong> method, it made so much more sense:</p><pre><code class="language-rb">[1, 2, 3].sample</code></pre><p>Really, really simple.</p><p>Pretty natural and intuitive. We ask a <strong>sample</strong> from an array and the method returns it. Now I’m happy.</p><p>What about you?</p><h3 id="expressing-my-thoughts-with-ruby-syntax">Expressing my thoughts with Ruby syntax</h3><p>As I mentioned before, I love the way Ruby lets me code. It’s really natural for me. I’ll show parts of the beautiful Ruby syntax.</p><h4 id="implicit-return">Implicit return</h4><p>Any statement in Ruby returns the value of the last evaluated expression. A simple example is the <strong>getter </strong>method. We call a method and expect some value in return.</p><p>Let’s see:</p><pre><code class="language-rb">def get_user_ids(users)
return users.map(&amp;:id)
end</code></pre><p>But as we know, Ruby always returns the last evaluated expression. Why use the <strong>return</strong> statement?</p><p>After using Ruby for 3 years, I feel great using almost every method without the <strong>return</strong> statement.</p><pre><code class="language-rb">def get_user_ids(users)
users.map(&amp;:id)
end</code></pre><h4 id="multiple-assignments">Multiple assignments</h4><p>Ruby allows me to assign multiple variables at the same time. When you begin, you may be coding like this:</p><pre><code class="language-rb">def values
[1, 2, 3]
end
one   = values[0]
two   = values[1]
three = values[2]</code></pre><p>But why not assign multiple variables at the same time?</p><pre><code class="language-rb">def values
[1, 2, 3]
end
one, two, three = values</code></pre><p>Pretty awesome.</p><h4 id="methods-that-ask-questions-also-called-predicates-">Methods that ask questions (also called predicates)</h4><p>One feature that caught my attention when I was learning Ruby was the <strong>question mark (?)</strong> method, also called the <strong>predicates </strong>methods. It was weird to see at first, but now it makes so much sense. You can write code like this:</p><pre><code class="language-rb">movie.awesome # =&gt; true</code></pre><p>Ok… nothing wrong with that. But let’s use the question mark:</p><pre><code class="language-rb">movie.awesome? # =&gt; true</code></pre><p>This code is much more expressive, and I expect the method’s answer to return either a <strong>true</strong> or <strong>false</strong> value.</p><p>A method that I commonly use is <strong>any?</strong> It’s like asking an array if it has <strong>any</strong>thing inside it.</p><pre><code class="language-rb">[].any? # =&gt; false
[1, 2, 3].any? # =&gt; true</code></pre><h4 id="interpolation">Interpolation</h4><p>For me string interpolation is more intuitive than string concatenation. Period. Let’s see it in action.</p><p>An example of a string concatenation:</p><pre><code class="language-rb">programming_language = "Ruby"
programming_language + " is a beautiful programming_language" # =&gt; "Ruby is a beautiful programming_language"</code></pre><p>An example of a string interpolation:</p><pre><code class="language-rb">programming_language = "Ruby"
"#{programming_language} is a beautiful programming_language" # =&gt; "Ruby is a beautiful programming_language"</code></pre><p>I prefer string interpolation.</p><p>What do you think?</p><h4 id="the-if-statement">The if statement</h4><p>I like to use the <strong>if</strong> statement:</p><pre><code class="language-rb">def hey_ho?
true
end
puts "let’s go" if hey_ho?</code></pre><p>Pretty nice to code like that.</p><p>Feels really natural.</p><h4 id="the-try-method-with-rails-mode-on-">The try method (with Rails mode on)</h4><p>The <strong>try</strong> method invokes the method identified by the symbol, passing it any arguments and/or the block specified. This is similar to Ruby’s <strong>Object#send.</strong> Unlike that method, <strong>nil</strong> will be returned if the receiving object is a <strong>nil</strong> object or <strong>NilClass.</strong></p><p>Using <strong>if and unless</strong> condition statement:</p><pre><code class="language-rb">user.id unless user.nil?</code></pre><p>Using the <strong>try </strong>method:</p><pre><code class="language-rb">user.try(:id)</code></pre><p>Since Ruby 2.3, we can use Ruby’s safe navigation operator<strong> (&amp;.)</strong> instead of Rails <strong>try </strong>method.</p><pre><code class="language-rb">user&amp;.id</code></pre><h4 id="double-pipe-equals-memoization">Double pipe equals (<strong>||=) </strong>/ memoization</h4><p>This feature is so C-O-O-L. It’s like caching a value in a variable.</p><pre><code class="language-rb">some_variable ||= 10
puts some_variable # =&gt; 10
some_variable ||= 99
puts some_variable # =&gt; 10</code></pre><p>You don’t need to use the <strong>if</strong> statement ever. Just use double pipe equals <strong>(||=)</strong> and it’s done.</p><p>Simple and easy.</p><h4 id="class-static-method">Class static method</h4><p>One way I like to write Ruby classes is to define a <strong>static </strong>method (class method).</p><pre><code class="language-rb">GetSearchResult.call(params)</code></pre><p>Simple. Beautiful. Intuitive.</p><p>What happens in the background?</p><pre><code class="language-rb">class GetSearchResult
def self.call(params)
new(params).call
end
def initialize(params)
@params = params
end
def call
# ... your code here ...
end
end</code></pre><p>The <strong>self.call</strong> method initializes an instance, and this object calls the <strong>call </strong>method. <a href="https://github.com/collectiveidea/interactor" rel="noopener"><strong>Interactor design pattern</strong></a> uses it.</p><h4 id="getters-and-setters">Getters and setters</h4><p>For the same <strong>GetSearchResult</strong> class, if we want to use the params, we can use the @params</p><pre><code class="language-rb">class GetSearchResult
def self.call(params)
new(params).call
end
def initialize(params)
@params = params
end
def call
# ... your code here ...
@params # do something with @params
end
end</code></pre><p>We define a <strong>setter </strong>and <strong>getter:</strong></p><pre><code class="language-rb">class GetSearchResult
def self.call(params)
new(params).call
end
def initialize(params)
@params = params
end
def call
# ... your code here ...
params # do something with params method here
end
private
def params
@params
end
def params=(parameters)
@params = parameters
end
end</code></pre><p>Or we can define <strong>attr_reader</strong>, <strong>attr_writer,</strong> or <strong>attr_accessor</strong></p><pre><code class="language-rb">class GetSearchResult
attr_reader :param
def self.call(params)
new(params).call
end
def initialize(params)
@params = params
end
def call
# ... your code here ...
params # do something with params method here
end
end</code></pre><p>Nice.</p><p>We don’t need to define the <strong>getter</strong> and <strong>setter</strong> methods. The code just became simpler, just what we want.</p><h4 id="tap">Tap</h4><p>Imagine you want to define a <strong>create_user</strong> method. This method will instantiate, set the parameters, and save and return the user.</p><p>Let’s do it.</p><pre><code class="language-rb">def create_user(params)
user = User.new
user.id    = params[:id]
user.name  = params[:name]
user.email = params[:email]
# ...
user.save
user
end</code></pre><p>Simple. Nothing wrong here.</p><p>So now let’s implement it with the <strong>tap</strong> method</p><pre><code class="language-rb">def create_user(params)
User.new.tap do |user|
user.id    = params[:id]
user.name  = params[:name]
user.email = params[:email]
# ...
user.save
end
end</code></pre><p>You just need to worry about the user parameters, and the <strong>tap</strong> method will return the user object for you.</p><h3 id="that-s-it">That’s it</h3><p>We learned I write idiomatic Ruby by coding with</p><ul><li>array methods</li><li>syntax</li></ul><p>We also learned how Ruby is beautiful and intuitive, and runs even faster.</p><p>And that’s it, guys! I will be updating and including more details to my <a href="https://medium.com/@leandrotk_/" rel="noopener">blog</a>. The idea is to share great content, and the community helps to improve this post! ☺</p><p>I hope you guys appreciate the content and learned how to program beautiful code (and better software).</p><p>If you want a complete Ruby course, learn real-world coding skills and build projects, try <a href="https://onemonth.com/courses/ruby?mbsy=lG6tt&amp;mbsy_source=97541b09-e3ab-45d7-a9b1-dbc77028e008&amp;campaignid=33446&amp;discount_code=TKRuby1" rel="noopener"><strong><em>One Month Ruby Bootcamp</em></strong></a>. See you there ☺</p><p>This post appeared first <a href="https://medium.com/the-renaissance-developer/idiomatic-ruby-1b5fa1445098" rel="noopener"><strong>here</strong></a> on my <a href="https://medium.com/the-renaissance-developer" rel="noopener"><strong>Renaissance Developer publication</strong></a>.</p><p>Have fun, keep learning, and always keep coding!</p><p>My <a href="https://twitter.com/LeandroTk_" rel="noopener">Twitter</a> &amp; <a href="https://github.com/LeandroTk" rel="noopener">Github</a>. ☺</p>
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
