---
card: "/images/default.jpg"
tags: [Functional Programming]
description: "I started to work with Scala few months ago. One of the conce"
author: "Milad E. Fahmy"
title: "A survival guide to the Either monad in Scala"
created: "2021-08-15T23:46:21+02:00"
modified: "2021-08-15T23:46:21+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-functional-programming tag-scala tag-programming tag-tech tag-coding ">
<header class="post-full-header">
<h1 class="post-full-title">A survival guide to the Either monad in Scala</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2019/06/either.jpeg 300w,
/news/content/images/size/w600/2019/06/either.jpeg 600w,
/news/content/images/size/w1000/2019/06/either.jpeg 1000w,
/news/content/images/size/w2000/2019/06/either.jpeg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2019/06/either.jpeg" alt="A survival guide to the Either monad in Scala">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
</figure><p>Using implicit classes in Scala lets us extend the capabilities of another class.</p><p>In our case, we extend the capability of <code>List</code> and <code>Map</code> to automagically “extract” the <code>Either</code>. The implementation of the conversion is the same we defined before. The only difference is that now we make it generic. Isn’t Scala awesome?</p><p>Since this can be a useful utility class, I prepared for you a gist you can copy and paste with ease.</p><pre><code class="language-scala">object EitherConverter {
implicit class EitherList[E, A](le: List[Either[E, A]]){
def toEitherList: Either[E, List[A]] = {
def helper(list: List[Either[E, A]], acc: List[A]): Either[E, List[A]] = list match {
case Nil =&gt; Right(acc)
case x::xs =&gt; x match {
case Left(e) =&gt; Left(e)
case Right(v) =&gt; helper(xs, acc :+ v)
}
}
helper(le, Nil)
}
}
implicit class EitherMap[K, V, E](me: Map[K, Either[E, V]]) {
def toEitherMap: Either[E, Map[K, V]] = me.map{
case (k, Right(v)) =&gt; Right(k, v)
case (_, e) =&gt; e
}.toList.toEitherList.map(l =&gt; l.asInstanceOf[List[(K, V)]].toMap)
}
}</code></pre><h4 id="conclusion">Conclusion</h4><p>That’s all folks. I hope this short story may help you to better understand the <code>Either</code> monad.</p><p>Please note that my implementation is quite simple. I bet there are more complex and elegant ways to do the same thing. I’m a newbie in Scala and I like to <a href="https://en.wikipedia.org/wiki/KISS_principle" rel="noopener">KISS</a>, so I prefer readability over (elegant) complexity.</p><p>If you have a better solution, especially for the utility class, I will be happy to see it and learn something new! :-)</p>
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
