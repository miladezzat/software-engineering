---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c9a86740569d1a4ca2622.jpg"
tags: [JavaScript]
description: If you are learning data structures, a linked list is one dat
author: "Milad E. Fahmy"
title: "How to Implement a Linked List in JavaScript"
created: "2021-08-15T19:29:27+02:00"
modified: "2021-08-15T19:29:27+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-algorithms tag-data-structures ">
<header class="post-full-header">
<h1 class="post-full-title">How to Implement a Linked List in JavaScript</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c9a86740569d1a4ca2622.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9a86740569d1a4ca2622.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9a86740569d1a4ca2622.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9a86740569d1a4ca2622.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c9a86740569d1a4ca2622.jpg" alt="How to Implement a Linked List in JavaScript">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>If you are learning data structures, a linked list is one data structure you should know. If you do not really understand it or how it is implemented in JavaScript, this article is here to help you. </p>
<p>In this article, we will discuss what a linked list is, how it is different from an array, and how to implement it in JavaScript. Let's get started.</p>
<h2 id="what-is-a-linked-list">What is a Linked List?</h2>
<p><br>A linked list is a linear data structure similar to an array. However, unlike arrays, elements are not stored in a particular memory location or index. Rather each element is a separate object that contains a pointer or a link to the next object in that list.</p>
<p>Each element (commonly called nodes) contains two items: the data stored and a link to the next node. The data can be any valid data type. You can see this illustrated in the diagram below.</p>
<p>The entry point to a linked list is called the head. The head is a reference to the first node in the linked list. The last node on the list points to null. If a list is empty, the head is a null reference.</p>
<p>In JavaScript, a linked list looks like this:</p><pre><code class="language-js">const list = {
head: {
value: 6
next: {
value: 10
next: {
value: 12
next: {
value: 3
next: null
}
}
}
}
}
};</code></pre>
<h2 id="an-advantage-of-linked-lists">An advantage of Linked Lists</h2>
<ul>
<li>Nodes can easily be removed or added from a linked list without reorganizing the entire data structure. This is one advantage it has over arrays.</li>
</ul>
<h2 id="disadvantages-of-linked-lists">Disadvantages of Linked Lists</h2>
<ul>
<li>Search operations are slow in linked lists. Unlike arrays, random access of data elements is not allowed. Nodes are accessed sequentially starting from the first node.</li>
<li>It uses more memory than arrays because of the storage of the pointers.</li>
</ul>
<h2 id="types-of-linked-lists">Types of Linked Lists</h2>
<p>There are three types of linked lists:</p>
<ul>
<li><strong>Singly Linked Lists</strong>: Each node contains only one pointer to the next node. This is what we have been talking about so far.</li>
<li><strong>Doubly Linked Lists</strong>: Each node contains two pointers, a pointer to the next node and a pointer to the previous node.</li>
<li><strong>Circular Linked Lists</strong>: Circular linked lists are a variation of a linked list in which the last node points to the first node or any other node before it, thereby forming a loop.</li>
</ul>
<h2 id="implementing-a-list-node-in-javascript">Implementing a List Node in JavaScript</h2>
<p>As stated earlier, a list node contains two items: the data and the pointer to the next node. We can implement a list node in JavaScript as follows:</p><pre><code class="language-js">class ListNode {
constructor(data) {
this.data = data
this.next = null
}
}</code></pre>
<h2 id="implementing-a-linked-list-in-javascript">Implementing a Linked List in JavaScript</h2>
<p>The code below shows the implementation of a linked list class with a constructor. Notice that if the head node is not passed, the head is initialised to null.</p><pre><code class="language-js">class LinkedList {
constructor(head = null) {
this.head = head
}
}</code></pre>
<h2 id="putting-it-all-together">Putting it all together</h2>
<p>Let's create a linked list with the class we just created. First, we create two list nodes, <code>node1</code> and <code>node2</code> and a pointer from node 1 to node 2.</p><pre><code class="language-js">let node1 = new ListNode(2)
let node2 = new ListNode(5)
node1.next = node2</code></pre>
<p>Next, we'll create a Linked list with the <code>node1</code>.</p><pre><code class="language-js">let list = new LinkedList(node1)</code></pre>
<p>Let's try to access the nodes in the list we just created.</p><pre><code class="language-js">console.log(list.head.next.data) //returns 5</code></pre>
<h2 id="some-linkedlist-methods">Some LinkedList methods</h2>
<p>Next up, we will implement four helper methods for the linked list. They are:</p>
<ol>
<li>size()</li>
<li>clear()</li>
<li>getLast()</li>
<li>getFirst()</li>
</ol>
<h3 id="1-size-">1. size()</h3>
<p>This method returns the number of nodes present in the linked list.</p><pre><code class="language-js">size() {
let count = 0;
let node = this.head;
while (node) {
count++;
node = node.next
}
return count;
}
</code></pre>
<h3 id="2-clear-">2. clear()</h3>
<p>This method empties out the list.</p><pre><code class="language-js">clear() {
this.head = null;
}</code></pre>
<h3 id="3-getlast-">3. getLast()</h3>
<p>This method returns the last node of the linked list.</p><pre><code class="language-js">getLast() {
let lastNode = this.head;
if (lastNode) {
while (lastNode.next) {
lastNode = lastNode.next
}
}
return lastNode
}</code></pre>
<h3 id="4-getfirst-">4. getFirst()</h3>
<p>This method returns the first node of the linked list.</p><pre><code class="language-js">getFirst() {
return this.head;
}</code></pre>
<h2 id="summary">Summary</h2>
<p>In this article, we discussed what a linked list is and how it can be implemented in JavaScript. We also discussed the different types of linked lists as well as their overall advantages and disadvantages.</p>
<p>I hope you enjoyed reading it.</p>
<p><em>Want to get notified when I publish a new article? <a href="https://mailchi.mp/69ea601a3f64/join-sarahs-mailing-list">Click here</a>.</em></p>
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
