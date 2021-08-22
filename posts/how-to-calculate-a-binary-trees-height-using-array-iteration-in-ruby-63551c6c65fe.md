---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9ca73c740569d1a4ca75d1.jpg"
tags: [Programming]
description: "Data structures and algorithms are the heart and soul of comp"
author: "Milad E. Fahmy"
title: "How to calculate a Binary Tree’s height using array iteration in Ruby"
created: "2021-08-15T23:34:02+02:00"
modified: "2021-08-15T23:34:02+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-programming tag-algorithms tag-ruby tag-tech tag-data-science ">
<header class="post-full-header">
<h1 class="post-full-title">How to calculate a Binary Tree’s height using array iteration in Ruby</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9ca73c740569d1a4ca75d1.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9ca73c740569d1a4ca75d1.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9ca73c740569d1a4ca75d1.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9ca73c740569d1a4ca75d1.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9ca73c740569d1a4ca75d1.jpg" alt="How to calculate a Binary Tree’s height using array iteration in Ruby">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
:data  =&gt; 1,
:left_child  =&gt; [another_tree] || nil,
:right_child =&gt; [another_tree_again] || nil
child child
tree = [1, 7, 5, 2, 6, 0,  9, 3, 7, 5, 11, 0,   0,   4, 0]
i=5                i=11 i=12
element in question
(T0 here repeated)
total_height = 0 + [0,0].max = 0 (S5.2)</code></pre><p>But for the element at <code>i = 4</code>, the height is:</p><pre><code class="language-rb">                              left   right
child  child
tree = [1, 7, 5, 2, 6, 0,  9, 3, 7,   5,    11,     0, 0, 4, 0]
i=4               i=9  i=10
element
in question
total_height = 1 + [1,1].max = 2 (S5.3)</code></pre><p>In <code>S5.3</code> and <code>S5.4</code> above we just used visual inspection to compute the heights of the right and left children of the element in question. But this illustrates how our algorithm works. Now after computing for the <code>total_height</code> we simply:</p><p><strong>Step 6:</strong> Push <code>total_height</code> into <code>heights</code> — As I noted before, using the push method is more efficient, especially for large arrays.</p><pre><code class="language-rb">heights.push(total_height) (S6.1)</code></pre><p>Once we have iterated through all elements in the <code>tree</code> array, we will have an array <code>heights</code> composed of the heights of each sub tree in the binary tree. It should look like this:</p><pre><code class="language-rb">heights(after full iteration) = [0, 1, 0, 0, 1, 1, 1, 1, 2, 0, 2, 2, 3, 3, 4] (S6.2)</code></pre><p><strong>Step 7:</strong> Return height of the binary tree — If our goal is just find out the height of the mother tree (meaning from the root down to the lowest-rightmost node) then we simply:</p><pre><code class="language-rb">return heights[-1] (S7.1)
*Note if this is the last line in the method then the 'return' keyword is redundant (in Ruby at least)</code></pre><p>However, a lot of times we may be interested to compute for the heights of any of the sub trees. In that case we simply return the <code>heights</code> array itself and then anyone using the program can simply include any index to find the height of a specific branch in the tree.</p><p>The full method below:</p><pre><code class="language-rb">def binary_tree_height(tree_array)
#0 Declare a heights array which will store the heights of each sub tree
heights = []
#1 Iterate through the tree_array starting from last element down to first
(tree_array.length - 1).downto(0) do |i|
#2 For each element, find initial height
initial_height = tree_array[i] == 0 ? 0 : 1
# 3 Find height of left child
left_child_index = tree_array[2*i + 1].nil? ? nil : heights.length - i - 1 #index of left child's height in heights
left_child_height = left_child_index.nil? ? 0 : heights[left_child_index]
# 4 Find height of right child
right_child_index = tree_array[2*i + 2].nil? ? nil : left_child_index - 1 #index of right child's height in heights
right_child_height = right_child_index.nil? ? 0 : heights[right_child_index]
# 5 Find element's total height
total_height = initial_height + [left_child_height,right_child_height].max
# 6 Push total height to heights array
heights.push(total_height)
end
puts heights[-1]
end
</code></pre><p>Let’s test this algorithm out.</p><p>Let us suppose we run <code>binary_tree_height(tree).</code> Computing for the heights of <code>tree[14]</code> down to <code>tree[7]</code> is pretty straightforward (they will either be 0 or 1 since they are all at the lowest level of <code>tree</code>) so we won’t simulate them anymore here. We will assume we are already in that part of the iteration when <code>i</code> will be equal to 6. Therefore, at this juncture:</p><pre><code class="language-rb">i = 6 (F1)
tree[6] = 9 (F2)
heights = [0, 1, 0, 0, 1, 1, 1, 1] (heights.length at this point is 8) (F3)</code></pre><p>Now, we can see that <code>tree[6]</code> is equal to 9 (and not 0). Therefore:</p><pre><code>initial_height = 1 (F4)</code></pre><p>As promised, here is how I came up with the formula for the indices of the left and right children.</p><p>So I began with a <code>heights</code> array already filled with the heights of the lowest elements as shown in <code>F3</code>. Since I’m now working with <code>tree[6]</code> (which is 9) then its left and right children are <code>tree[13]</code> and <code>tree[14]</code>; whose corresponding heights are in <code>heights[1]</code> and <code>heights[0]</code>, respectively. If that’s not clear enough, we know we push starting from <code>tree[14]</code> — this will become <code>heights[0]</code>. We then compute for and push the height of <code>tree[13]</code> — this will be <code>heights[1]</code>. Relating the indices:</p><pre><code class="language-rb">index of left child in trees = 13
index of left child's height in heights = LEFT_INDEX =1
index of right child in trees = 14
index of right child's height in heights = RIGHT_INDEX = 0
current index of element in question = MOTHER_INDEX = 6
current length of heights array = LENGTH = 8
LEFT_INDEX = 1 = 8 - 6 - 1 = LENGTH - MOTHER_INDEX - 1
RIGHT_INDEX = 0 = 8 - 6 - 2 = LENGTH - MOTHER_INDEX - 2
(or simply LEFT_INDEX -1 ) (F5)</code></pre><p>We can now apply this logic to all elements, so then in code we compute for the height of <code>tree[6]</code> as follows:</p><pre><code class="language-rb">Computing for tree[6]'s left child's height:
from code at S3.4:
left_child_index = tree[2*i + 1].nil? ? nil : heights.length - i - 1
Since tree[2*6 + 1] = tree[13] = 4 is not nil then:
left_child_index = 8 - 6 - 1 = 1
from code at S3.5:
left_child_height = left_child_index.nil? ? 0 : heights[left_child_index]
So then:
left_child_height = heights[1] = 1</code></pre><p>Following the same for <code>tree[6]</code>’s right child’s height:</p><pre><code class="language-rb">from code at S4.1:
right_child_index = tree[2*i + 2].nil? nil : left_child_index - 1
Since tree[2*6 + 2] = tree[14] = 4 and is not nil:
right_child_index = left_child_index -1 = 1 -1 = 0 -&gt; !nil?
and from code at S4.2:
right_child_height = right_child_index.nil? ? 0 : heights[right_child_index]
Therefore: right_child_height = heights[0] = 0</code></pre><p>Now we can find the total height of <code>tree[6]</code>:</p><pre><code class="language-rb">total_height (tree[6]) = 1 + [1,0].max = 1 + 1 = 2</code></pre><p>We can then push this <code>total_height</code> into <code>heights</code>:</p><pre><code class="language-rb">heights.push(2), such that:</code></pre><pre><code class="language-rb">heights = [0, 1, 0, 0, 1, 1, 1, 1, 2]</code></pre><p>And the same thing goes on until we work on <code>tree[0]</code> and the final <code>heights </code>array should be:</p><pre><code class="language-rb">heights = [0, 1, 0, 0, 1, 1, 1, 1, 2, 0, 2, 2, 3, 3, 4]</code></pre><p>And returning <code>heights[-1]</code> (or <code>heights[heights.length -1]</code>, whichever we prefer), we determine that the height of <code>tree</code> is <strong>4</strong>. We can verify this visually in both figures 1 and 2 above.</p><p>It took us 7 steps to come up with the answer. With this size of <code>tree</code> array the operation took around 0.024 milliseconds to finish. It takes half the time (only 0.012 milliseconds) for the same thing to be accomplished using recursion.</p><p>As a preview on how to do this recursively, we can simply do something like:</p><pre><code class="language-rb">def tree_height_recursive(tree_array, index = 0)
return 0 if tree_array[index].nil? or tree_array[index] == 0
left_child_height = recursive_tree_height(tree_array, 2*index + 1)
right_child_height = recursive_tree_height(tree_array, 2*index +2)
total_height = 1 + [left_child_height, right_child_height].max
end</code></pre><p>We see that recursion probably will only take us at most 4 steps to do the same task. And it saves us half of the time and less resources used.</p><p>One secret for learning algorithms is hard work and practice. It also helps if you work collaboratively with others. I actually did the above not alone but with my coding partner. I <a href="https://hackernoon.com/how-five-weeks-of-remote-pair-programming-helped-me-build-strong-habits-e0493c9ba780" rel="noopener">previously wrote</a> about how learning this way is so much more productive and effective.</p><p>Here is my <a href="https://github.com/rvvergara/data-structures" rel="noopener">repository</a> on the different data structures and algorithms that I’ve worked on.</p><p><strong>Follow me</strong> on <a href="https://twitter.com/coachryanv" rel="noopener"><strong>Twitter</strong></a> | <a href="https://github.com/rvvergara" rel="noopener"><strong>Github</strong></a></p>
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
