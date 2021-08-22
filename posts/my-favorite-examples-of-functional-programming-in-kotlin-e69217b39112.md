---
card: "https://cdn-media-1.freecodecamp.org/images/0*X2-yHGibmWx5pAWN.jpg"
tags: [Kotlin]
description: "by Marcin Moskala"
author: "Milad E. Fahmy"
title: "My favorite examples of functional programming in Kotlin"
created: "2021-08-16T10:18:21+02:00"
modified: "2021-08-16T10:18:21+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-kotlin tag-programming tag-tech tag-web-development tag-coding ">
<header class="post-full-header">
<h1 class="post-full-title">My favorite examples of functional programming in Kotlin</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/0*X2-yHGibmWx5pAWN.jpg 300w,
https://cdn-media-1.freecodecamp.org/images/0*X2-yHGibmWx5pAWN.jpg 600w,
https://cdn-media-1.freecodecamp.org/images/0*X2-yHGibmWx5pAWN.jpg 1000w,
https://cdn-media-1.freecodecamp.org/images/0*X2-yHGibmWx5pAWN.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/0*X2-yHGibmWx5pAWN.jpg" alt="My favorite examples of functional programming in Kotlin">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
val name: String,
val surname: String,
val passing: Boolean,
val averageGrade: Double
)</code></pre><p>Now we can make the following processing to get a list of the best 10 students that match all criteria:</p><pre><code class="language-kotlin">students.filter { it.passing &amp;&amp; it.averageGrade &gt; 4.0 } // 1
.sortedBy { it.averageGrade } // 2
.take(10) // 3
.sortedWith(compareBy({ it.surname }, { it.name })) // 4</code></pre><ol><li>We get only students who are passing and with a grade point average of greater than 4.0.</li><li>We sort by the average grade.</li><li>We take first 10 students.</li><li>We sort students alphanumerically. The comparator compares surnames first, and if equal then it compares names.</li></ol><p>What if, instead of alphanumerical order, we need to keep students in the same order as they were before? What we can do is preserve the order using indexes:</p><pre><code class="language-kotlin">students.filter { it.passing &amp;&amp; it.averageGrade &gt; 4.0 }
.withIndex() // 1
.sortedBy { (i, s) -&gt; s.averageGrade } // 2
.take(10)
.sortedBy { (i, s) -&gt; i } // 3
val first = set.first()
val powersetOfRest = powerset(set.drop(1))
return powersetOfRest.map { it + first } + powersetOfRest
}</code></pre><p>The above declaration will not work correctly. The problem is with the empty set: <code>first</code> will throw an error when the set is empty. Here, the definition comes with a solution: powerset({}) = {{}}. When we fix it, we will have our algorithm ready:</p><pre><code class="language-kotlin">fun &lt;T&gt; powerset(set: Set&lt;T&gt;): Set&lt;Set&lt;T&gt;&gt; =
if (set.isEmpty()) setOf(emptySet())
else {
val powersetOfRest = powerset(set.drop(1))
powersetOfRest + powersetOfRest.map { it + set.first() }
if (set.isEmpty()) setOf(emptySet())
else powerset(set.drop(1))
.let { it+ it.map { it + set.first() }</code></pre><p>We can also define this function as an extension function to <code>Collection</code> so we can use this function as if it is the method of <code>Set</code> (<code>setOf(1,2,3).powerset()</code> instead of <code>powerset(setOf(1,2,3))</code>):</p><pre><code class="language-kotlin">fun &lt;T&gt; Collection&lt;T&gt;.powerset(): Set&lt;Set&lt;T&gt;&gt; =
if (isEmpty()) setOf(emptySet())
else drop(1)
.powerset()
.let { it+ it.map { it + first() }</code></pre><p>One big improvement is to make the <code>powerset</code> tail recursive. In the above implementation, the state of <code>powerset</code> is growing with every iteration (recurrent call), because the state of the previous iteration needs to be kept in the memory.</p><p>Instead, we could use an imperative loop or the <code>tailrec</code> modifier. We will use the second option to maintain the readability of the function. The <code>tailrec</code> modifier allows only a single recursive call in the last statement. This is how we can change our function to use it effectively:</p><pre><code class="language-kotlin">fun &lt;T&gt; Collection&lt;T&gt;.powerset(): Set&lt;Set&lt;T&gt;&gt; =
powerset(this, setOf(emptySet()))
private tailrec fun &lt;T&gt; powerset(left: Collection&lt;T&gt;, acc: Set&lt;Set&lt;T&gt;&gt;): Set&lt;Set&lt;T&gt;&gt; =
if (left.isEmpty()) acc
else powerset(left.drop(1), acc + acc.map { it + left.first() })</code></pre><p>The above implementation is part of the <a href="https://github.com/MarcinMoskala/KotlinDiscreteMathToolkit" rel="noopener">KotlinDiscreteMathToolkit</a> library, which defines a lot of other functions used in discrete math.</p><h3 id="quicksort">Quicksort</h3><p>Time for my favorite example. We’ll see how a difficult problem can be simplified and made highly readable using a functional programming style and tools.</p><p>We will implement the <a href="https://en.wikipedia.org/wiki/Quicksort" rel="noopener">Quicksort</a> algorithm. The algorithm is simple: we choose some element (pivot) and we distribute all other elements to the list with bigger and smaller elements than the pivot. Then we recursively sort these sub-arrays. Finally, we add the sorted list of smaller elements, the pivot, and the sorted list of bigger elements. For simplification, we will take the first element as a pivot. Here is the full implementation:</p><pre><code class="language-kotlin">fun &lt;T : Comparable&lt;T&gt;&gt; List&lt;T&gt;.quickSort(): List&lt;T&gt; =
if(size &lt; 2) this
else {
val pivot = first()
val (smaller, greater) = drop(1).partition { it &lt;= pivot}
smaller.quickSort() + pivot + greater.quickSort()
}
// Usage
listOf(100_000, 1_000_000, 10_000_000)
.asSequence()
.map { (1..it).map { r.nextInt(1000000000) } }
.forEach { list: List&lt;Int&gt; -&gt;
println("Java stdlib sorting of ${list.size} elements took ${measureTimeMillis { list.sorted() }}")
println("quickSort sorting of ${list.size} elements took ${measureTimeMillis { list.quickSort() }}")
}</code></pre><p>On my machine I got the following result:</p><p>Java stdlib sorting of 100000 elements took 83<br>quickSort sorting of 100000 elements took 163<br>Java stdlib sorting of 1000000 elements took 558<br>quickSort sorting of 1000000 elements took 859<br>Java stdlib sorting of 10000000 elements took 6182<br>quickSort sorting of 10000000 elements took 12133`</p><p>As we can see, the <code>quickSort</code><em> </em>function is generally 2 times slower. Even for huge lists. It has the same scalability. In normal cases, the difference will generally be between 0.1ms vs 0.2ms. Note that it is much simpler and more readable. This explains why in some cases we can use a function that’s a bit less optimized, but readable and simple.</p><p>If you are interested in Kotlin, check out <a href="https://blog.kotlin-academy.com/" rel="noopener">Kotlin Academy</a>. It is great publication and community dedicated for Kotlin. </p><p>I am also publishing great resources on my <a href="https://twitter.com/marcinmoskala" rel="noopener">Twitter</a>. To mention me there use <a href="https://twitter.com/marcinmoskala" rel="noopener">@marcinmoskala</a>. If you can use my help, remember that <a href="https://medium.com/@marcinmoskala/ive-just-opened-up-for-online-consultations-640349aaba55" rel="noopener">I am open for consultations</a>.</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
