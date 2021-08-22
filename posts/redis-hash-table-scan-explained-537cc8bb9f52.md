---
card: "https://cdn-media-1.freecodecamp.org/images/1*eUYhCqLYo_cQpMSQvelQOw.jpeg"
tags: [Redis]
description: "One of the big challenges for me as a software developer is r"
author: "Milad E. Fahmy"
title: "How the Redis Hash Table Scan Function Works"
created: "2021-08-15T23:46:17+02:00"
modified: "2021-08-15T23:46:17+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-redis tag-coding tag-software-development tag-database tag-tech ">
<header class="post-full-header">
<h1 class="post-full-title">How the Redis Hash Table Scan Function Works</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*eUYhCqLYo_cQpMSQvelQOw.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*eUYhCqLYo_cQpMSQvelQOw.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*eUYhCqLYo_cQpMSQvelQOw.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*eUYhCqLYo_cQpMSQvelQOw.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*eUYhCqLYo_cQpMSQvelQOw.jpeg" alt="How the Redis Hash Table Scan Function Works">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
unsigned long v,
dictScanFunction *fn,
dictScanBucketFunction* bucketfn,
void *privdata)
{
dictht *t0, *t1;
const dictEntry *de, *next;
unsigned long m0, m1;
if (dictSize(d) == 0) return 0;
// ...</code></pre><p>Things worth noting:</p><ul><li>The function accepts 5 parameters: <code>dict *d</code>, the dictionary to be scanned, <code>unsigned long v</code>, the cursor, and 3 other parameters that we’ll get into later.</li><li>The function returns the cursor value to be used in the next call to this function. If the function returns 0, it means that the scan is done.</li><li><code>if (dictSize(d) == 0) return 0;</code>. When the dictionary is empty the function returns 0 to indicate that the scan is done.</li></ul><h4 id="1-normal-scanning">1. Normal scanning</h4><p>The following code scans a bunch of elements:</p><pre><code class="language-c">if (!dictIsRehashing(d)) {
t0 = &amp;(d-&gt;ht[0]);
m0 = t0-&gt;sizemask;
/* Emit entries at cursor */
if (bucketfn) bucketfn(privdata, &amp;t0-&gt;table[v &amp; m0]);
de = t0-&gt;table[v &amp; m0];
while (de) {
next = de-&gt;next;
fn(privdata, de);
de = next;
}
/* Set unmasked bits so incrementing the reversed cursor
* operates on the masked bits */
v |= ~m0;
/* Increment the reverse cursor */
v = rev(v);
v++;
v = rev(v);
} else {
// ...</code></pre><p>Let’s go over it step-by-step. Let’s start with the first line below:</p><pre><code>if (!dictIsRehashing(d)) {
t0 = &amp;(d-&gt;ht[0]);
m0 = t0-&gt;sizemask;</code></pre><p>Rehashing is the process of spreading elements evenly across a table after it is resized. The dict.c hash table rehashes <em>incrementally</em>, which means that it doesn’t rehash the entire table at once, but little-by-little. Every operation done on the table, like add, delete, find, also performs a rehash step. This allows to keep the table available for operations during rehashing. Due to the way that rehashing is implemented, the function works differently during rehashing. We’ll start by looking at what happens when the table isn’t rehashing.</p><p>A pointer to the hash table is saved in the local variable <code>t0</code>, and its <strong>size mask</strong> is saved in <code>m0</code>. <strong>Size mask: </strong>dict.c hash tables are always <code>2^n</code> in size. For a given table size, the size mask is <code>2^n-1</code>, which is a binary number with its <code>n</code> least-significant bits set to 1. For example, for <code>n=4; 2^n-1 = 00001111</code>. For a given key, its location in the hash table will be the last <code>n</code> bits of the <strong>hash</strong> of the key. We’ll see this in action in a bit.</p><p>The dict.c hash table uses <a href="https://en.wikipedia.org/wiki/Open_addressing" rel="noopener">open addressing</a>. Every entry in the table is a linked-list of elements with conflicting hash value. This is called a <strong>bucket</strong>. In this next part, a <strong>bucket</strong> of elements is scanned:</p><pre><code>/* Emit entries at cursor */
if (bucketfn) bucketfn(privdata, &amp;t0-&gt;table[v &amp; m0]);
de = t0-&gt;table[v &amp; m0];
while (de) {
next = de-&gt;next;
fn(privdata, de);
de = next;
}</code></pre><p>Note the use of the <strong>size mask</strong>: <code>t0-&gt;table[v &amp; </code>m0<code>]</code>. v might be outside the indexable range of the tabl<code>e. v &amp;</code> m0 uses the size mask to keep only the la<code>s</code>t n digits <code>o</code>f v, and yields a valid index into the table.</p><p>You may have guessed by now what <code>bucketfn</code> is for. <code>bucketfn</code> is provided by the caller and is applied to each bucket of elements. It is also passed <code>privdata</code>, which is arbitrary data passed to <code>dictScan()</code> by the caller. In a similar fashion, <code>fn</code> is applied to all the entries in the bucket on-by-one. Note that a bucket may be empty, in which case its value is <code>NULL</code>.</p><p>OK, so we iterated over a bucket of elements. What’s next? We’re going to return the cursor value for the next call to <code>dictScan()</code>. This is done by incrementing the current cursor <code>v</code>, but with a twist! The cursor is first reversed, then incremented, and then reversed again:</p><pre><code>    /* Set unmasked bits so incrementing the reversed cursor
* operates on the masked bits */
v |= ~m0;
/* Increment the reverse cursor */
v = rev(v);
v++;
v = rev(v);</code></pre><p>First, <code>v |= ~m0</code> sets all the non-masked bits in <code>v</code> to 1. The effect is that when reversing <code>v</code> and incrementing, these bits will be effectively ignored. Then, <code>v</code> is reversed, incremented and reversed again. Let’s look at an example:</p><pre><code>Table size = 16 (n = 4, m0 = 16-1 = 00001111)
v = 00001000 (Current cursor)
v |= ~m0;    // v == 11111000  (~m0 = 11110000)
v = rev(v);  // v == 00011111
v++;   // v == 00100000
v = rev(v);  // v == 00000100</code></pre><p>After this bit-magic, <code>v</code> is returned.</p><p><strong>Why is the cursor reversed before it’s incremented?</strong> The table might grow between iterations. This guarantees that the cursor stays valid. When the table grows, additional bits are added to its size mask <strong>from the left</strong>. By incrementing the reversed number, we can expand the smaller table’s indices into the bigger one.</p><p>For example: Let’s say the old table’s size was 16 (size mask <code>00001111</code>) and cursor was <code>00001000</code>. When the table grows to 32 elements its size mask will be <code>00011111</code>. All the elements previously in the <code>00001000</code> slot will map to either <code>00001000</code>or <code>00011000</code> in the new table. These cursors are compatible with both smaller and larger tables!</p><h4 id="2-scanning-during-table-rehashing">2. Scanning during table rehashing</h4><p>The last part we need to understand is how the scan work while the table is rehashing. <strong>Incremental rehashing</strong> is implemented in dict.c by having two active tables at the same time. A second table is created when the hash table is resized. New items are added to the new table. On every rehash step elements from the old table are moved to the new table. When the old table becomes empty it is removed.</p><p>When performing a scan, both old and new tables are scanned for elements, starting from the <strong>smaller</strong> <strong>table</strong>. After the items in the smaller table are scanned, the <em>complementing items</em> from the larger table are scanned. Thus all the elements covered by the cursor <code>v</code> are scanned. Let’s see what this looks like. This is the entire code snippet, we’ll break it down below:</p><pre><code class="language-c">    } else {  // dictIsRehashing(d)
t0 = &amp;d-&gt;ht[0];
t1 = &amp;d-&gt;ht[1];
/* Make sure t0 is the smaller and t1 is the bigger table */
if (t0-&gt;size &gt; t1-&gt;size) {
t0 = &amp;d-&gt;ht[1];
t1 = &amp;d-&gt;ht[0];
}
m0 = t0-&gt;sizemask;
m1 = t1-&gt;sizemask;
/* Emit entries at cursor */
if (bucketfn) bucketfn(privdata, &amp;t0-&gt;table[v &amp; m0]);
de = t0-&gt;table[v &amp; m0];
while (de) {
next = de-&gt;next;
fn(privdata, de);
de = next;
}
/* Iterate over indices in larger table that are the expansion
* of the index pointed to by the cursor in the smaller table */
do {
/* Emit entries at cursor */
if (bucketfn) bucketfn(privdata, &amp;t1-&gt;table[v &amp; m1]);
de = t1-&gt;table[v &amp; m1];
while (de) {
next = de-&gt;next;
fn(privdata, de);
de = next;
}
/* Increment the reverse cursor not covered by the smaller mask.*/
v |= ~m1;
v = rev(v);
v++;
v = rev(v);
/* Continue while bits covered by mask difference is non-zero */
} while (v &amp; (m0 ^ m1));
}</code></pre><p>First of all, <code>t0</code> and <code>t1</code> are used to store the smaller and larger tables respectively, with <code>m0</code> and <code>m1</code> the size masks for each. Then the smaller table is scanned, just like we saw earlier.</p><p>Next, the cursor is used to index into the larger table, using the larger size mask <code>m1</code>: <code>de = t1-&gt;table[v &amp; m1]</code>. In the inner loop, the cursor is incremented to cover all the expansions of the smaller table’s index.</p><p>For example, if the index of the bucket in the smaller table was <code>0100</code>, and the larger table is twice as large, the indices covered in this loop will be <code>00100</code> and <code>10100</code>. The do-while’s condition prevents from incrementing the cursor beyond the range covered by the small table’s bucket: <code>while (v &amp; (m0 ^ m1));</code>. I’ll leave it to you to understand this last bit :)</p><p>That’s it! We’ve covered the entire hash table scan function. The only missing piece is the implementation of <code>rev(v)</code>, which is a general function to reverse the bits in a number. The implementation used in dict.c is particularly interesting as it achieves an O(log n) running time. I might cover it in a future post.</p><p>Thanks for reading! Many thanks to <a href="undefined" rel="noopener">Dvir Volk</a> for his inspiration and support! Thanks to <a href="undefined" rel="noopener">Jason Li</a> for his feedback that helped me correct an error in the post.</p>
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
