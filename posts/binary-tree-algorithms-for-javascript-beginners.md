---
card: "/images/default.jpg"
tags: [Algorithms]
description: "I recently had the chance to teach high school students how to code. There are not that many beginner-friendly tutorials on algorithms coded in JavaScript which is the language they were learning. So I decided to make one."
author: "Milad E. Fahmy"
title: "Binary Search Tree Algorithms for JavaScript Beginners"
created: "2021-08-15T19:15:51+02:00"
modified: "2021-08-15T19:15:51+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-algorithms tag-interview-questions tag-binary-search tag-javascript ">
<header class="post-full-header">
<h1 class="post-full-title">Binary Search Tree Algorithms for JavaScript Beginners</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2021/07/binarytree.png 300w,
/news/content/images/size/w600/2021/07/binarytree.png 600w,
/news/content/images/size/w1000/2021/07/binarytree.png 1000w,
/news/content/images/size/w2000/2021/07/binarytree.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2021/07/binarytree.png" alt="Binary Search Tree Algorithms for JavaScript Beginners">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>I recently had the chance to teach high school students how to code. There are not that many beginner-friendly tutorials on algorithms coded in JavaScript which is the language they were learning. So I decided to make one.</p>
<p>In this article, I will try my best to explain some core algorithms you should learn before a coding interview.</p>
<p>If you are not familiar with the concept of a binary tree, I encourage you to check out the <a href="https://en.wikipedia.org/wiki/Binary_tree">wikipedia</a> page. If you fully master those basic algorithms, you will have an easier time solving more complex problems.</p>
<h2 id="what-is-a-binary-search-tree-bst-">What is a Binary Search Tree (BST)?</h2>
<p>Commonly found in coding interviews, BST is a tree-like data structure with a single root at the very top. They are a great way to store numeric values as their ordered nature allows for fast search and lookups. </p>
<p>Compared to a normal tree, BST has the following properties:</p>
<ul>
<li>every left child has a smaller value than its parent</li>
<li>every right child has a larger value than its parent</li>
<li>every node can contain from 0 to 2 children.</li>
</ul>
<p>The following diagram should clarify things a bit more. </p>
<h2 id="definition-of-a-binary-tree-node">Definition of a Binary Tree Node</h2>
<figcaption>A binary search tree</figcaption>
</figure>
<p>We usually define a Binary Tree Node with the following function in Javascript:</p>
this.val = val
this.left = left
this.right = right
}
</code></pre>
<h2 id="binary-tree-basic-traversals-inorder-postorder-preorder-">Binary Tree Basic Traversals (Inorder, Postorder, Preorder)</h2>
<p>The first thing to know is how to loop through each node of the BST. This allows us to perform a function on all nodes of our BST. For example, if we want to find a value <code>x</code> in our BST, we'd need the nodes. </p>
<p>There are three main ways of doing this. Luckily, they share common themes.</p>
<h3 id="inorder-traversal">Inorder traversal</h3>
<p>A recursive algorithm is the easiest way to get started with binary tree inorder traversal. The idea is as follows:</p>
<ul>
<li>If the node is null, do nothing – else, recursively call the function on the node's left child.</li>
<li>Then, do some operation on the node after traversing though all left children. Our current node is guaranteed to be the leftest node.</li>
<li>Finally, call the function on node.right.</li>
</ul>
<p>The Inorder algorithm traverses the tree nodes from left, to mid, to right. </p>
* @param {TreeNode} root
*/
const inorder = (root) =&gt; {
const nodes = []
if (root) {
inorder(root.left)
nodes.push(root.val)
inorder(root.right)
}
return nodes
}
// for our example tree, this returns [1,2,3,4,5,6]
</code></pre>
<h3 id="postorder-traversal">Postorder traversal</h3>
<p>A recursive algorithm is the easiest way to get started with the postorder traversal.</p>
<ul>
<li>If the node is null, do nothing – else, recursively call the function on the node's left child.</li>
<li>When there are no more left children, call the function on node.right.</li>
<li>Finally, do some operation on the node.</li>
</ul>
<p>Postorder traversal visits the tree nodes from left, to right, to mid. </p>
* @param {TreeNode} root
*/
const postorder = (root) =&gt; {
const nodes = []
if (root) {
postorder(root.left)
postorder(root.right)
nodes.push(root.val)
}
return nodes
}
// for our example tree, this returns [1,3,2,6,5,4]
</code></pre>
<h3 id="preorder-traversal">Preorder traversal</h3>
<p>A recursive algorithm is the easiest way to get started with the preorder traversal.</p>
<ul>
<li>If the node is null, do nothing – else, do some operation on the node.</li>
<li>Traverse to the left child of the node and repeat.</li>
<li>Traverse to the right child of node and repeat.</li>
</ul>
<p>Postorder traversal visits the tree nodes from mid, to left, to right. </p>
* @param {TreeNode} root
*/
const preorder = (root) =&gt; {
const nodes = []
if (root) {
nodes.push(root.val)
preorder(root.left)
preorder(root.right)
}
return nodes
}
// for our example tree, this returns [4,2,1,3,5,6]
</code></pre>
<h2 id="what-is-an-is-valid-binary-search-tree">What is an Is Valid Binary Search Tree?</h2>
<p>A valid binary search tree (BST) has ALL left children with values less than the parent node, and ALL right children with values greater than the parent node.</p>
<p>To verify if a tree is a valid binary search tree:</p>
<ul>
<li>Define the min and max value the current node can have</li>
<li>If a node's value is not within those bounds, return false</li>
<li>Recursively validate the node's left children, with the max bound set to the node's value</li>
<li>Recursively validate the node's right children, with the min bound set to the node's value</li>
</ul>
* @param {TreeNode} root
*/
const isValidBST = (root) =&gt; {
const helper = (node, min, max) =&gt; {
if (!node) return true
if (node.val &lt;= min || node.val &gt;= max) return false
return helper(node.left, min, node.val) &amp;&amp; helper(node.right, node.val, max)
}
return helper(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER)
}
</code></pre>
<h2 id="how-to-find-binary-tree-max-depth">How to Find Binary Tree Max Depth</h2>
<p>Here, the algorithm is attempting to find the height/depth of our BST. In other words, we are looking at how many 'levels' a BST contains.</p>
<ul>
<li>If the node is null, we return 0 as it does not add any depth</li>
<li>Else we add + 1 to our current depth (we traversed one level)</li>
<li>Recursively calculate the depth of node's children and return the maximum sum between node.left and node.right</li>
</ul>
* @param {TreeNode} root
*/
const maxDepth = function(root) {
const calc = (node) =&gt; {
if (!node) return 0
return Math.max(1 + calc(node.left), 1 + calc(node.right))
}
return calc(root)
};
</code></pre>
<h2 id="how-to-find-the-lowest-common-ancestor-between-two-tree-nodes">How to Find the Lowest Common Ancestor Between Two Tree Nodes</h2>
<p>Let's bump up the difficulty. How do we find the common ancestor between two tree nodes in our binary tree? Let's look at some examples.</p>
<figcaption>A binary search tree</figcaption>
</figure>
<p>In this tree, the lowest common ancestor of 3 and 1 is 2. The LCA of 3 and 2 is 2. The LCA of 6 and 1 and 6 is 4. </p>
<p>See the pattern here? The LCA between two tree nodes is either one of the nodes itself (the case of 3 and 2), or a parent node where the first child is found somewhere in its left subtree, and the second child somewhere in its right subtree.</p>
<p>The algorithm to find the lowest common ancestor (LCA) between two tree nodes p and q is as follows:</p>
<ul>
<li>Verify if p or q is found in the left subtree or right subtree</li>
<li>Then, verify if the current node is p or q</li>
<li>If one of p or q is found in the left or right subtree, and one of p or q is the node itself, we have found the LCA</li>
<li>If both p and q are found in the the left or right subtree, we have found the LCA</li>
</ul>
* @param {TreeNode} root
* @param {TreeNode} p
* @param {TreeNode} q
*/
const lowestCommonAncestor = function(root, p, q) {
let lca = null
const isCommonPath = (node) =&gt; {
if (!node) return false
var isLeft = isCommonPath(node.left)
var isRight = isCommonPath(node.right)
var isMid = node == p || node == q
if (isMid &amp;&amp; isLeft || isMid &amp;&amp; isRight || isLeft &amp;&amp; isRight) {
lca = node
}
return isLeft || isRight || isMid
}
isCommonPath(root)
return lca
};
</code></pre>
<h2 id="wrapping-up">Wrapping Up</h2>
<p>In summary, we have learned how to traverse, verify, and calculate the depth of a BST. </p>
<p>These algorithms are often asked about in coding interviews. It is important to understand them before practicing more advanced BST applications, like finding the LCA of two nodes.</p>
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
