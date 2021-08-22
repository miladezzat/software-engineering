---
card: "https://cdn-media-1.freecodecamp.org/images/1*WeWOBZy6N7cXkq4inS7FVA.jpeg"
tags: [Programming]
description: "When you first learn to code, it’s common to learn arrays as "
author: "Milad E. Fahmy"
title: "Everything you need to know about tree data structures"
created: "2021-08-16T15:42:10+02:00"
modified: "2021-08-16T15:42:10+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-programming tag-algorithms tag-coding tag-python tag-technology ">
<header class="post-full-header">
<h1 class="post-full-title">Everything you need to know about tree data structures</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*WeWOBZy6N7cXkq4inS7FVA.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*WeWOBZy6N7cXkq4inS7FVA.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*WeWOBZy6N7cXkq4inS7FVA.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*WeWOBZy6N7cXkq4inS7FVA.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*WeWOBZy6N7cXkq4inS7FVA.jpeg" alt="Everything you need to know about tree data structures">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
def __init__(self, value):
self.value = value
self.left_child = None
self.right_child = None</code></pre><p>Here it is. Our <code>binary tree</code> class.</p><p>When we instantiate an object, we pass the <code>value</code> (the data of the node) as a parameter. Look at the <code>left_child</code> and the <code>right_child</code>. Both are set to <code>None</code>.</p><p>Why?</p><p>Because when we create our <code>node</code>, it doesn’t have any children. We just have the <code>node data</code>.</p><p>Let’s test it:</p><pre><code class="language-py">tree = BinaryTree('a')
print(tree.value) # a
print(tree.left_child) # None
if self.left_child == None:
self.left_child = BinaryTree(value)
else:
new_node = BinaryTree(value)
new_node.left_child = self.left_child
self.left_child = new_node</code></pre><p>Again, if the current node doesn’t have a <code>left child</code>, we just create a new node and set it to the current node’s <code>left_child</code>. Or else we create a new node and put it in the current <code>left child</code>’s place. Allocate this <code>left child node</code> to the new node’s <code>left child</code>.</p><p>And we do the same thing to insert a <code>right child node</code>.</p><pre><code class="language-py">def insert_right(self, value):
if self.right_child == None:
self.right_child = BinaryTree(value)
else:
new_node = BinaryTree(value)
new_node.right_child = self.right_child
a_node.insert_left('b')
a_node.insert_right('c')
b_node = a_node.left_child
b_node.insert_right('d')
c_node = a_node.right_child
c_node.insert_left('e')
c_node.insert_right('f')
d_node = b_node.right_child
e_node = c_node.left_child
f_node = c_node.right_child
print(a_node.value) # a
print(b_node.value) # b
print(c_node.value) # c
print(d_node.value) # d
print(e_node.value) # e
print(self.value)
if self.left_child:
self.left_child.pre_order()
if self.right_child:
if self.left_child:
self.left_child.in_order()
print(self.value)
if self.right_child:
if self.left_child:
self.left_child.post_order()
if self.right_child:
self.right_child.post_order()
queue = Queue()
queue.put(self)
while not queue.empty():
current_node = queue.get()
print(current_node.value)
if current_node.left_child:
queue.put(current_node.left_child)
if current_node.right_child:
def __init__(self, value):
self.value = value
self.left_child = None
self.right_child = None
def insert_node(self, value):
if value &lt;= self.value and self.left_child:
self.left_child.insert_node(value)
elif value &lt;= self.value:
self.left_child = BinarySearchTree(value)
elif value &gt; self.value and self.right_child:
self.right_child.insert_node(value)
else:
def __init__(self, value):
self.value = value
self.left_child = None
self.right_child = None
def find_node(self, value):
if value &lt; self.value and self.left_child:
return self.left_child.find_node(value)
if value &gt; self.value and self.right_child:
return self.right_child.find_node(value)
return value == self.value</code></pre><p>Let’s beak down the code:</p><ul><li>Lines 8 and 9 fall under rule #1.</li><li>Lines 10 and 11 fall under rule #2.</li><li>Line 13 falls under rule #3.</li></ul><p>How do we test it?</p><p>Let’s create our <code>Binary Search Tree </code>by initializing the <code>root</code> <code>node</code> with the value 15.</p><pre><code class="language-py">bst = BinarySearchTree(15)</code></pre><p>And now we will insert many new <code>nodes</code>.</p><pre><code class="language-py">bst.insert_node(10)
bst.insert_node(8)
bst.insert_node(12)
bst.insert_node(20)
bst.insert_node(17)
bst.insert_node(25)
bst.insert_node(19)</code></pre><p>For each inserted <code>node</code> , we will test if our <code>find_node</code> method really works.</p><pre><code class="language-py">print(bst.find_node(15)) # True
print(bst.find_node(10)) # True
print(bst.find_node(8)) # True
print(bst.find_node(12)) # True
print(bst.find_node(20)) # True
print(bst.find_node(17)) # True
print(bst.find_node(25)) # True
print(bst.find_node(19)) # True</code></pre><p>Yeah, it works for these given values! Let’s test for a value that doesn’t exist in our <code>Binary Search Tree</code>.</p><pre><code class="language-py">print(bst.find_node(0)) # False</code></pre><p>Oh yeah.</p><p>Our search is done.</p><h4 id="deletion-removing-and-organizing">Deletion: removing and organizing</h4><p>Deletion is a more complex algorithm because we need to handle different cases. For a given value, we need to remove the <code>node</code> with this value. Imagine the following scenarios for this <code>node</code> : it has no <code>children</code>, has a single <code>child</code>, or has two <code>children</code>.</p><ul><li><strong>Scenario #1</strong>: A <code>node</code> with no <code>children</code> (<code>leaf</code> <code>node</code>).</li></ul><pre><code class="language-py">#  |50|                              |50|
#/      \                           /    \
#    |30|     |70|   (DELETE 20) ---&gt;   |30|   |70|
#   /    \                          \
# |20|   |40|                       |40|</code></pre><p>If the <code>node</code> we want to delete has no children, we simply delete it. The algorithm doesn’t need to reorganize the <code>tree</code>.</p><ul><li><strong>Scenario #2</strong>: A <code>node</code> with just one child (<code>left</code> or <code>right</code> child).</li></ul><pre><code class="language-py">#        |50|                              |50|
#/      \                           /    \
#    |30|     |70|   (DELETE 30) ---&gt;   |20|   |70|
#   /
# |20|</code></pre><p>In this case, our algorithm needs to make the parent of the <code>node</code> point to the <code>child</code> node. If the <code>node</code> is the <code>left child</code>, we make the parent of the <code>left child</code> point to the <code>child</code>. If the <code>node</code> is the <code>right child</code> of its parent, we make the parent of the <code>right child</code> point to the <code>child</code>.</p><ul><li><strong>Scenario #3</strong>: A <code>node</code> with two children.</li></ul><pre><code class="language-py">#  |50|                              |50|
#/      \                           /    \
#    |30|     |70|   (DELETE 30) ---&gt;   |40|   |70|
#   /    \                       /
# |20|   |40|                  |20|</code></pre><p>When the <code>node</code> has 2 children, we need to find the <code>node</code> with the minimum value, starting from the <code>node</code>’s<code>right child</code>. We will put this <code>node</code> with minimum value in the place of the <code>node</code> we want to remove.</p><p>It’s time to code.</p><pre><code class="language-py">def remove_node(self, value, parent):
if value &lt; self.value and self.left_child:
return self.left_child.remove_node(value, self)
elif value &lt; self.value:
return False
elif value &gt; self.value and self.right_child:
return self.right_child.remove_node(value, self)
elif value &gt; self.value:
return False
else:
if self.left_child is None and self.right_child is None and self == parent.left_child:
parent.left_child = None
self.clear_node()
elif self.left_child is None and self.right_child is None and self == parent.right_child:
parent.right_child = None
self.clear_node()
elif self.left_child and self.right_child is None and self == parent.left_child:
parent.left_child = self.left_child
self.clear_node()
elif self.left_child and self.right_child is None and self == parent.right_child:
parent.right_child = self.left_child
self.clear_node()
elif self.right_child and self.left_child is None and self == parent.left_child:
parent.left_child = self.right_child
self.clear_node()
elif self.right_child and self.left_child is None and self == parent.right_child:
parent.right_child = self.right_child
self.clear_node()
else:
self.value = self.right_child.find_minimum_value()
self.right_child.remove_node(self.value, self)
return True</code></pre><ol><li><strong>First</strong>: Note the parameters <code>value</code> and <code>parent</code>. We want to find the <code>node</code>that has this <code>value</code> , and the <code>node</code>’s parent is important to the removal of the <code>node</code>.</li><li><strong>Second</strong>: Note the returning value. Our algorithm will return a boolean value. It returns <code>True</code> if it finds the <code>node</code> and removes it. Otherwise it will return <code>False</code>.</li><li><strong>From line 2 to line 9</strong>: We start searching for the <code>node</code> that has the <code>value</code>that we are looking for. If the <code>value</code> is smaller than the <code>current nodevalue</code> , we go to the <code>left subtree</code>, recursively (if, and only if, the <code>current node</code> has a <code>left child</code>). If the <code>value</code> is greater, go to the <code>right subtree</code>, recursively.</li><li><strong>Line 10</strong>: We start to think about the <code>remove</code> algorithm.</li><li><strong>From line 11 to line 13</strong>: We cover the <code>node</code> with no <code>children</code> , and it is the <code>left child</code> from its <code>parent</code>. We remove the <code>node</code> by setting the <code>parent</code>’s <code>left child</code> to <code>None</code>.</li><li><strong>Lines 14 and 15</strong>: We cover the <code>node</code> with no <code>children</code> , and it is the <code>right child</code> from it’s <code>parent</code>. We remove the <code>node</code> by setting the <code>parent</code>’s <code>right child</code> to <code>None</code>.</li><li><strong>Clear node method</strong>: I will show the <code>clear_node</code> code below. It sets the nodes <code>left child , right child</code>, and its <code>value</code> to <code>None</code>.</li><li><strong>From line 16 to line 18</strong>: We cover the <code>node</code> with just one <code>child</code> (<code>left child</code>), and it is the <code>left child</code> from it’s <code>parent</code>. We set the <code>parent</code>'s <code>left child</code> to the <code>node</code>’s <code>left child</code> (the only child it has).</li><li><strong>From line 19 to line 21</strong>: We cover the <code>node</code> with just one <code>child</code> (<code>left child</code>), and it is the <code>right child</code> from its <code>parent</code>. We set the <code>parent</code>'s <code>right child</code> to the <code>node</code>’s <code>left child</code> (the only child it has).</li><li><strong>From line 22 to line 24</strong>: We cover the <code>node</code> with just one <code>child</code> (<code>right child</code>), and it is the <code>left child</code> from its <code>parent</code>. We set the <code>parent</code>'s <code>left child</code> to the <code>node</code>’s <code>right child</code> (the only child it has).</li><li><strong>From line 25 to line 27</strong>: We cover the <code>node</code> with just one <code>child</code> (<code>right child</code>) , and it is the <code>right child</code> from its <code>parent</code>. We set the <code>parent</code>'s <code>right child</code> to the <code>node</code>’s <code>right child</code> (the only child it has).</li><li><strong>From line 28 to line 30</strong>: We cover the <code>node</code> with both <code>left</code> and <code>right</code>children. We get the <code>node</code> with the smallest <code>value</code> (the code is shown below) and set it to the <code>value</code> of the <code>current node</code> . Finish it by removing the smallest <code>node</code>.</li><li><strong>Line 32</strong>: If we find the <code>node</code> we are looking for, it needs to return <code>True</code>. From line 11 to line 31, we handle this case. So just return <code>True</code> and that’s it.</li></ol><ul><li>To use the <code>clear_node</code> method: set the <code>None</code> value to all three attributes — (<code>value</code>, <code>left_child</code>, and <code>right_child</code>)</li></ul><pre><code class="language-py">def clear_node(self):
self.value = None
self.left_child = None
self.right_child = None</code></pre><ul><li>To use the <code>find_minimum_value</code> method: go way down to the left. If we can’t find anymore nodes, we found the smallest one.</li></ul><pre><code class="language-py">def find_minimum_value(self):
if self.left_child:
return self.left_child.find_minimum_value()
else:
return self.value</code></pre><p>Now let’s test it.</p><p>We will use this <code>tree</code> to test our <code>remove_node</code> algorithm.</p><pre><code class="language-py">#        |15|
#/      \
#    |10|     |20|
#   /    \    /    \
# |8|   |12| |17| |25|
#        \
#        |19|</code></pre><p>Let’s remove the <code>node</code> with the <code>value</code> 8. It’s a <code>node</code> with no child.</p><pre><code class="language-py">print(bst.remove_node(8, None)) # True
bst.pre_order_traversal()
#     |15|
#   /\
# |10|     |20|
#    \    /    \
#   |12| |17| |25|
#    \
#    |19|</code></pre><p>Now let’s remove the <code>node</code> with the <code>value</code> 17. It’s a <code>node</code> with just one child.</p><pre><code class="language-py">print(bst.remove_node(17, None)) # True
bst.pre_order_traversal()
#  |15|
#/      \
#    |10|     |20|
# \    /    \
#|12| |19| |25|</code></pre><p>Finally, we will remove a <code>node</code> with two children. This is the <code>root</code> of our <code>tree</code>.</p><pre><code class="language-py">print(bst.remove_node(15, None)) # True
bst.pre_order_traversal()
#  |19|
#/      \
#    |10|     |20|
#  \        \
#  |12|     |25|</code></pre><p>The tests are now done. :)</p><h3 id="that-s-all-for-now-">That’s all for now!</h3><p>We learned a lot here.</p><p>Congrats on finishing this dense content. It’s really tough to understand a concept that we do not know. But you did it. :)</p><p>This is one more step forward in my journey to learning and mastering algorithms and data structures. You can see the documentation of my complete journey here on my <a href="https://medium.com/the-renaissance-developer" rel="noopener"><strong>Renaissance Developer publication</strong></a>.</p><p>Have fun, keep learning and coding.</p><p>My <a href="https://twitter.com/LeandroTk_" rel="noopener">Twitter</a> &amp; <a href="https://github.com/LeandroTk" rel="noopener">Github</a>. ☺</p><h3 id="additional-resources">Additional resources</h3><ul><li><a href="https://www.youtube.com/watch?v=qH6yxkw0u78&amp;index=25&amp;list=PL2_aWCzGMAwI3W_JlcBbtYTwiQSsOTa6P" rel="noopener">Introduction to Tree Data Structure by <strong>mycodeschool</strong></a></li><li><a href="https://en.wikipedia.org/wiki/Tree_(data_structure)" rel="noopener">Tree by <strong>Wikipedia</strong></a></li><li><a href="https://medium.com/basecs/how-to-not-be-stumped-by-trees-5f36208f68a7" rel="noopener">How To Not Be Stumped By Trees by the talented Vaidehi Joshi</a></li><li><a href="http://www.cs.jhu.edu/~cohen/CS226/Lectures/Trees.pdf" rel="noopener">Intro to Trees, Lecture by Professor <strong>Jonathan Cohen</strong></a></li><li><a href="http://people.cs.ksu.edu/~schmidt/300s05/Lectures/Week7b.html" rel="noopener">Intro to Trees, Lecture by Professor<strong> David Schmidt</strong></a></li><li><a href="http://www.cs.cmu.edu/~clo/www/CMU/DataStructures/Lessons/lesson4_1.htm" rel="noopener">Intro to Trees, Lecture by Professor <strong>Victor Adamchik</strong></a></li><li><a href="https://www.youtube.com/watch?v=oSWTXtMglKE" rel="noopener">Trees with <strong>Gayle Laakmann McDowell</strong></a></li><li><a href="https://github.com/leandrotk/algorithms/blob/master/computer_science/data_structures/binary_tree/binary_tree.py" rel="noopener">Binary Tree Implementation</a> and <a href="https://github.com/leandrotk/algorithms/blob/master/computer_science/data_structures/binary_tree/test_binary_tree.py" rel="noopener">Tests</a> by <a href="/news/all-you-need-to-know-about-tree-data-structures-bceacb85490c/undefined" rel="noopener"><strong>TK</strong></a></li><li><a href="https://www.coursera.org/learn/data-structures" rel="noopener">Coursera Course: Data Structures by <strong>University of California, San Diego</strong></a></li><li><a href="https://www.coursera.org/learn/data-structures-optimizing-performance" rel="noopener">Coursera Course: Data Structures and Performance by <strong>University of California, San Diego</strong></a></li><li><a href="https://www.youtube.com/playlist?list=PLTxllHdfUq4d-DE16EDkpeb8Z68DU7Z_Q" rel="noopener">Binary Search Tree concepts and Implementation by <strong>Paul Programming</strong></a></li><li><a href="https://github.com/leandrotk/algorithms/blob/master/computer_science/data_structures/binary_search_tree_without_node/binary_search_tree.py" rel="noopener">Binary Search Tree Implementation</a> and <a href="https://github.com/leandrotk/algorithms/blob/master/computer_science/data_structures/binary_search_tree_without_node/test_binary_search_tree.py" rel="noopener">Tests</a> by <a href="/news/all-you-need-to-know-about-tree-data-structures-bceacb85490c/undefined" rel="noopener"><strong>TK</strong></a></li><li><a href="https://en.wikipedia.org/wiki/Tree_traversal" rel="noopener">Tree Traversal by <strong>Wikipedia</strong></a></li><li><a href="http://www.geeksforgeeks.org/binary-search-tree-set-2-delete/" rel="noopener">Binary Search Tree Remove Node Algorithm by <strong>GeeksforGeeks</strong></a></li><li><a href="http://www.algolist.net/Data_structures/Binary_search_tree/Removal" rel="noopener">Binary Search Tree </a>Remove Node Algorithm by <strong>Algolist</strong></li><li><a href="/news/learning-python-from-zero-to-hero-120ea540b567/">Learning Python From Zero to Hero</a></li></ul>
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
