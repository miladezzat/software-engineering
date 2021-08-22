---
card: "https://cdn-media-1.freecodecamp.org/images/0*XavhDgkHntuMq9Ib"
tags: [Android]
description: "Linear, Relative, Constraint, Table, Frame and so on and so f"
author: "Milad E. Fahmy"
title: "How to make sense of the many Android layouts"
created: "2021-08-15T23:46:32+02:00"
modified: "2021-08-15T23:46:32+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-android tag-tech tag-ui tag-coding tag-development ">
<header class="post-full-header">
<h1 class="post-full-title">How to make sense of the many Android layouts</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/0*XavhDgkHntuMq9Ib 300w,
https://cdn-media-1.freecodecamp.org/images/0*XavhDgkHntuMq9Ib 600w,
https://cdn-media-1.freecodecamp.org/images/0*XavhDgkHntuMq9Ib 1000w,
https://cdn-media-1.freecodecamp.org/images/0*XavhDgkHntuMq9Ib 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/0*XavhDgkHntuMq9Ib" alt="How to make sense of the many Android layouts">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
&lt;LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
xmlns:app="http://schemas.android.com/apk/res-auto"
xmlns:tools="http://schemas.android.com/tools"
android:layout_width="match_parent"
android:layout_height="match_parent"
tools:context=".MainActivity"&gt;
&lt;TextView
android:layout_width="wrap_content"
android:layout_height="wrap_content"
android:text="Hello"
/&gt;
&lt;TextView
android:layout_width="wrap_content"
android:layout_height="wrap_content"
android:text="World!"
/&gt;
&lt;LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
xmlns:app="http://schemas.android.com/apk/res-auto"
xmlns:tools="http://schemas.android.com/tools"
android:layout_width="match_parent"
android:layout_height="match_parent"
android:layout_weight="4"  // &lt;-- We added a total weight for our layout (4)
tools:context=".MainActivity"&gt;
&lt;TextView
android:layout_width="wrap_content"
android:layout_height="wrap_content"
android:layout_weight="3"   // &lt;-- Will have a weight of 3 out of 4 (3/4)
android:text="Hello" /&gt;
&lt;TextView
android:layout_width="wrap_content"
android:layout_height="wrap_content"
android:text="World!"
android:layout_weight="1"   // &lt;-- Will have a weight of 1 out of 4 (1/4)
/&gt;
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
