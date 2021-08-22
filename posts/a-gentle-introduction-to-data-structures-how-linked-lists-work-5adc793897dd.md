---
card: "https://cdn-media-1.freecodecamp.org/images/1*a75WWf1cQX8wcKN0nEYMJQ.jpeg"
tags: [Data Structures]
description: by Michael Olorunnisola
author: "Milad E. Fahmy"
title: "A Gentle Introduction to Data Structures: How Linked Lists Work"
created: "2021-08-15T19:54:04+02:00"
modified: "2021-08-15T19:54:04+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-data-structures tag-programming tag-computer-science tag-javascript tag-tech ">
<header class="post-full-header">
<h1 class="post-full-title">A Gentle Introduction to Data Structures: How Linked Lists Work</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*a75WWf1cQX8wcKN0nEYMJQ.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*a75WWf1cQX8wcKN0nEYMJQ.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*a75WWf1cQX8wcKN0nEYMJQ.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*a75WWf1cQX8wcKN0nEYMJQ.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*a75WWf1cQX8wcKN0nEYMJQ.jpeg" alt="A Gentle Introduction to Data Structures: How Linked Lists Work">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Michael Olorunnisola</p>
<h1 id="a-gentle-introduction-to-data-structures-how-linked-lists-work">A Gentle Introduction to Data Structures: How Linked Lists Work</h1>
<figcaption><a href="https://www.pinterest.com/annschool/steam-rube-goldberg-machines/" rel="noopener" target="_blank" title="">Pinterest</a></figcaption>
</figure>
<p>Have you ever built a Rube Goldberg Machine? If not, maybe you’ve built an elaborate line of dominoes?</p>
<p>Okay, maybe you weren’t as nerdy of a kid as I was. So be it. For those of you who have had the pleasure to do any of the above, you’ve already grasped the essence of today’s data structure: linked lists!</p>
<h3 id="how-linked-lists-work"><strong>How linked lists work</strong></h3>
<p>The simplest form of linked lists — a <em>singly linked list — </em>is a series of nodes where each individual node contains both a value and a pointer to the next node in the list.</p>
<p>Additions (<strong>Add</strong>) grow the list by adding items to the end of the list.</p>
<p>Removals (<strong>Remove) </strong>will always remove from a given position in the list.</p>
<p>Search (<strong>Contains</strong>) will search the list for a value.</p>
<p><strong>Example use cases:</strong></p>
<ul>
<li>Storing values in a hash table to prevent collisions (more on this in a few posts)</li>
<li>Remaking the amazing race!</li>
</ul>
<p>Let’s keep this article nice and light by working on a tool that the CBS network can use to plan out their next amazing race TV show.</p>
<p>As you go through this, I want you to keep asking yourself: “How are linked lists any different from arrays? How are they similar?”</p>
<p>Let’s get started.</p>
<p>First, you need to create the representation of our linked list:</p><pre><code>class LinkedList{  constructor(){    this._head = null;    this._tail = null;    this._length = 0;  }</code></pre><pre><code>  size(){    return this._length;  }}</code></pre>
<p>To keep track of the starting point and end point of the race, you create the head and tail properties.</p>
<p>Then, to make sure you don’t make the race too long or too short for the season, you create a length property and size method. This way, you can always keep track of exactly how long the race is.</p>
<p>Now that you have a way to store the race list, you should create a way to add to this list. The question is, what are you adding specifically?</p>
<p>Remember, a linked list is a series of nodes where each node has a value and a pointer to the next node in the list. Knowing this, you realize a node is just an object with a value and next property.</p>
<p>Since you’re going to be creating a new node every time you add to the list, you decide to create a constructor that makes it easier to create a new node for every value that’s added to your list.</p><pre><code>class Node{  constructor(value){    this.value = value;    this.next = null;  }}</code></pre>
<p>Having this constructor available lets you create your add method.</p><pre><code>class Node {  constructor(value) {    this.value = value;    this.next = null;  }}</code></pre><pre><code>class LinkedList {   constructor() {    this._head = null;    this._tail = null;    this._length = 0;  }    add(value) {    let node = new Node(value);         //we create our node    if(!this._head &amp;&amp; !this._tail){     //If it's the first node      this._head = node;                //1st node is head &amp; tail      this._tail = node;    }else{    this._tail.next = node;             //add node to the back    this._tail = this._tail.next;       //reset tail to last node    }    this._length++;  }    size() {    return this._length;  }}</code></pre><pre><code>const AmazingRace = new LinkedList();AmazingRace.add("Colombo, Sri Lanka");AmazingRace.add("Lagos, Nigeria");AmazingRace.add("Surat, India");AmazingRace.add("Suzhou, China");</code></pre>
<p>Now that you’ve added this method, you will be able to add a bunch of locations to your Amazing Race list. This is how it’ll look. Note that I’ve added some extra white space to make it easier to understand.</p><pre><code>{ _head:    { value: 'Colombo, Sri Lanka',     next: { value: 'Lagos, Nigeria',              next: { value: 'Surat, India',                     next: { value: 'Suzhou, China',                             next: null                            }                   }           }    },  _tail: { value: 'Suzhou, China', next: null },  _length: 4 }</code></pre>
<p>Okay, so now that you’ve created this list and a way to add, you realize that you want some help adding locations to this list because you have Decidophobia (yep, it’s a <a href="https://en.wikipedia.org/wiki/Decidophobia" rel="noopener">thing</a>).</p>
<p>You decide to share it with your co-worker, Kent, asking him to add a few more places. The only problem is, when you give it to him, you don’t tell him which places you’ve already added. Unfortunately, you’ve forgotten, too, after suffering amnesia brought on from decision anxiety.</p>
<p>Of course he could just run <em>console.log(AmazingRace)</em> and read through what the console outputs. But Kent’s a lazy programmer and needs a way to check whether something exists so he can prevent duplicates. With that in mind, you build out a <strong>contains</strong> method to check for existing values.</p><pre><code>class Node {  constructor(value) {    this.value = value;    this.next = null;  }}class LinkedList {   constructor() {    this._head = null;    this._tail = null;    this._length = 0;  }    add(value) {    let node = new Node(value);             if(!this._head &amp;&amp; !this._tail){           this._head = node;                      this._tail = this._head;    }else{    this._tail.next = node;                 this._tail = this._tail.next;           }    this._length++;  }    contains(value){    let node = this._head;    while(node){      if(node.value === value){        return true;      }      node = node.next;    }    return false;  }    size() {    return this._length;  }  }</code></pre><pre><code>const AmazingRace = new LinkedList();AmazingRace.add("Colombo, Sri Lanka");AmazingRace.add("Lagos, Nigeria");AmazingRace.add("Surat, India");AmazingRace.add("Suzhou, China");</code></pre><pre><code>//Kent's check</code></pre><pre><code>AmazingRace.contains('Suzhou, China'); //trueAmazingRace.contains('Hanoi, Vietnam'); //falseAmazingRace.add('Hanoi, Vietnam');AmazingRace.contains('Seattle, Washington'); //falseAmazingRace.add('Seattle, Washington');AmazingRace.contains('North Pole'); // falseAmazingRace.add('North Pole');</code></pre>
<p>Awesome, now Kent has a way to check values before adding them, to avoid duplicates.</p>
<p>As an aside, you might be wondering why you didn’t just use the contains method in the add method to prevent duplicate additions? When you’re implementing a linked list — or any data structure, for that matter — you could theoretically add whatever additional functionality you want.</p>
<p>You can even go in and change native methods on existing structures. Try the below out in a REPL:</p><pre><code>Array.prototype.push = () =&gt; { return 'cat';}</code></pre><pre><code>let arr = [];arr.push('eggs'); // returns 'cat';</code></pre>
<p>The reason why we don’t do either of these things is because of <a href="http://www.ecma-international.org/ecma-262/7.0/index.html#sec-array.prototype.push" rel="noopener">agreed-upon standards</a>. Essentially, developers have an expectation of how certain methods should work.</p>
<p>Since our linked list class isn’t native to JavaScript, we have more freedom in implementing it, but there are still basic expectations of how data structures such as these should function. Linked lists don’t inherently store unique values. But they do have methods like <strong>contains</strong> that allow us to pre-check and maintain uniqueness in our list.</p>
<p>Kent gets back to you with his list of destinations, but some of them are questionable. For example, the North Pole might not be the best Amazing Race destination.</p>
<p>So you decide to build out a method to be able to remove a node. It’s important to remember that once you remove the node, you unlink the list, and will have to re-link what came before and after the removed node.</p><pre><code>class Node {  constructor(value) {    this.value = value;    this.next = null;  }}class LinkedList {   constructor() {    this._head = null;    this._tail = null;    this._length = 0;  }    add(value) {    let node = new Node(value);             if(!this._head &amp;&amp; !this._tail){           this._head = node;                      this._tail = this._head;    }else{    this._tail.next = node;                 this._tail = this._tail.next;           }    this._length++;  }    remove(value) {    if(this.contains(value)){          // see if our value exists      let current = this._head;           // begin at start of list      let previous = this._head;        while(current){                   // check each node          if(current.value === value){            if(this._head === current){   // if it's the head              this._head = this._head.next;  // reset the head              this._length--;              // update the length              return;                      // break out of the loop            }            if(this._tail === current){   // if it's the tail node              this._tail = previous;       // make sure to reset it            }            previous.next = current.next;  // unlink (see img below)            this._length--;            // update the length            return;                    // break out of           }          previous = current;          // look at the next node          current = current.next;      // ^^        }     }    }      contains(value){    let node = this._head;    while(node){      if(node.value === value){        return true;      }      node = node.next;    }    return false;  }    size() {    return this._length;  }  }</code></pre><pre><code>const AmazingRace = new LinkedList();AmazingRace.add("Colombo, Sri Lanka");AmazingRace.add("Lagos, Nigeria");AmazingRace.add("Surat, India");AmazingRace.add("Suzhou, China");AmazingRace.add('Hanoi, Vietnam');AmazingRace.add('Seattle, Washington');AmazingRace.add('North Pole');</code></pre><pre><code>//Kent's check</code></pre><pre><code>AmazingRace.remove('North Pole');</code></pre>
<p>There’s a lot of code in that <strong>remove</strong> function up there. Essentially it boils down to the following:</p>
<ol>
<li>if the value exists in the list…</li>
<li>iterate over the linked list, keeping track of the previous and current node</li>
<li>then, if there’s a match →</li>
</ol>
<p>4A . if it’s the head</p>
<ul>
<li>reset the head to the next node in the list</li>
<li>update the length</li>
<li>break out of the loop</li>
</ul>
<p>4B. if it’s the tail</p>
<ul>
<li>reset the tail to the previous node in the list</li>
<li>unlink the node by resetting the pointers as seen below</li>
</ul>
<figcaption><a href="https://www.google.com/url?sa=i&amp;rct=j&amp;q=&amp;esrc=s&amp;source=images&amp;cd=&amp;cad=rja&amp;uact=8&amp;ved=0ahUKEwjauKOv46rQAhULfiYKHdgFDWYQjhwIBQ&amp;url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FLinked_list&amp;psig=AFQjCNHXY1FhqqxQeG8hKywNnnpfCnVNpw&amp;ust=1479299805807482" rel="noopener" target="_blank" title="">Wikipedia</a></figcaption>
</figure>
<p>4C. If it’s not a match → <em>continue iterating</em></p>
<ul>
<li>make the next node current</li>
<li>make the current node previous</li>
</ul>
<p>One last thing to note: you may have realized that you didn’t actually delete the node. You just removed the references to it. Well, that’s OK because once all references to an object are removed, the garbage collector helps us remove it from memory. You can read up on the garbage collection <a href="http://docstore.mik.ua/orelly/webprog/jscript/ch11_03.htm" rel="noopener">here</a>.</p>
<p>With the remove method now implemented, you can run this little piece of code below to make sure contestants don’t freeze to death, or accidentally bother Santa as he’s prepping for this year’s festivities.</p><pre><code>AmazingRace.remove('North Pole');</code></pre>
<p>You’ve done it! You’ve created a simple implementation of a linked list. And you can grow the list by adding items, and shrink it by removing items — all based on the item’s value.</p>
<p>See if you can add you can expand the linked list to allow you to insert values at the beginning, end, or any point in between.</p>
<p>You have all you need to implement those methods. The names and arguments for these methods should look a little like this:</p><pre><code>addHead(value) {</code></pre><pre><code>}</code></pre><pre><code>insertAfter(target, value){</code></pre><pre><code>}</code></pre>
<p>Feel free to share your implementations in the comments below ?</p>
<h3 id="a-time-complexity-analysis-on-the-queue-methods"><strong>A time complexity analysis on the queue methods</strong></h3>
<p>Here’s the code again:</p><pre><code>class LinkedList {   constructor() {    this._head = null;    this._tail = null;    this._length = 0;  }    add(value) {    let node = new Node(value);             if(!this._head &amp;&amp; !this._tail){           this._head = node;                      this._tail = this._head;    }else{    this._tail.next = node;                 this._tail = this._tail.next;           }    this._length++;  }    remove(value) {    if(this.contains(value)){                let current = this._head;              let previous = this._head;        while(current){                   if(current.value === value){            if(this._head === current){               this._head = this._head.next;              this._length--;                            return;                                  }            if(this._tail === current){               this._tail = previous;                }            previous.next = current.next;            this._length--;                        return;                              }          previous = current;                    current = current.next;              }     }    }     contains(value){    let node = this._head;    while(node){      if(node.value === value){        return true;      }      node = node.next;    }    return false;  }    size() {    return this._length;  }</code></pre><pre><code>// To Be Implemented</code></pre><pre><code>addHead(value) {</code></pre><pre><code>}</code></pre><pre><code>insertAfter(target, value){</code></pre><pre><code>}</code></pre>
<p><strong>Add </strong>is <strong>O(1):</strong> Since you always know the last item in the list thanks to tail property, you don’t have to iterate over the list.</p>
<p><strong>Remove </strong>is <strong>O(n): </strong>In the worst case scenario you’re going to have to iterate over the entire list to find the value to be removed. Great part though is the actual removal of the node is O(1) because you’re just resetting pointers.</p>
<p><strong>Contains </strong>is <strong>O(n):</strong> You have to iterate over the entire list to check if the value exists in your list.</p>
<p><strong>addHead </strong>is <strong>O(1): </strong>Similar to our add method above, we always know the position of the head, so no iteration necessary.</p>
<p><strong>insertAfter </strong>is<strong> O(n)</strong>: Similar to our Remove method above, you’ll have to iterate over the entire list to find the target node that your value should be inserted after. Likewise, the actual insertion is O(1) because you’re just resetting pointers.</p>
<h3 id="linked-list-vs-array">Linked List vs Array?</h3>
<p>Why would you use a linked list instead of an arrays? Arrays technically allow you to do all of the things linked lists do, such as additions, insertions, and removals. Also, all these methods are already readily available to us in JavaScript.</p>
<p>Well, the biggest difference comes in the insertions and removals. Since arrays are indexed, when you perform an insertion or removal in the middle of the array, you have to reset the position of all following values to their new indices.</p>
<p>Imagine inserting into the start or middle of an array 100,000 values long! Insertions and removals like this are extremely expensive. Because of this, linked lists are often preferred for large data sets that are often shifted around.</p>
<p>On the other hand, arrays are great when it comes to finding items (random access) since they are indexed. If you know the position of an item, you can access it in O(1) time via <em>array[position]</em>.</p>
<p>Linked lists always require you to iterate over the linked lists sequentially. Given this, arrays are usually preferred for either smaller data sets, or data sets that aren’t shifted around as often.</p>
<h3 id="time-for-a-quick-recap">Time for a quick recap</h3>
<p>Linked Lists:</p>
<ol>
<li>have a tail and head property to track the ends of the list</li>
<li>have an add, addHead, insertAfter, and remove method to manage the contents of your list</li>
<li>have a length property to track how long your linked list is</li>
</ol>
<h3 id="further-reading">Further Reading</h3>
<p>There are also the doubly-linked list and circular-linked list data structures. You can read about them <a href="https://en.wikipedia.org/wiki/Linked_list#Linked_lists_vs._dynamic_arrays" rel="noopener">on Wikipedia</a>.</p>
<p>Also, here’s a solid, quick <a href="http://www.codingeek.com/data-structure/linked-list-types-explanation/" rel="noopener">overview</a> by Vivek Kumar.</p>
<p>Finally, Ian Elliot wrote a <a href="http://www.i-programmer.info/programming/javascript/5328-javascript-data-structures-the-linked-list.html?start=1" rel="noopener">walk-through</a> that helps you implementing all of the methods. But see if you can implement <strong>addHead()</strong> and <strong>insertAfter()</strong> for your linked list before peeking at this ?</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
