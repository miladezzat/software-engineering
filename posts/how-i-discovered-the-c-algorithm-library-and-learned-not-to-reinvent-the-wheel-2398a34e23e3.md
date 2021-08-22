---
card: "https://s3.amazonaws.com/cdn-media-1.freecodecamp.org/ghost/2019/05/1_dKpcV4KXSuBhWQLUsNm1gA-1.jpeg"
tags: [Tech]
description: "The other day out of curiosity, I looked into the C++ algorit"
author: "Milad E. Fahmy"
title: "How I discovered the C++ algorithm library and learned not to reinvent the wheel"
created: "2021-08-16T11:30:46+02:00"
modified: "2021-08-16T11:30:46+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-tech tag-programming tag-algorithms tag-coding tag-technology ">
<header class="post-full-header">
<h1 class="post-full-title">How I discovered the C++ algorithm library and learned not to reinvent the wheel</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://s3.amazonaws.com/cdn-media-1.freecodecamp.org/ghost/2019/05/1_dKpcV4KXSuBhWQLUsNm1gA-1.jpeg 300w,
https://s3.amazonaws.com/cdn-media-1.freecodecamp.org/ghost/2019/05/1_dKpcV4KXSuBhWQLUsNm1gA-1.jpeg 600w,
https://s3.amazonaws.com/cdn-media-1.freecodecamp.org/ghost/2019/05/1_dKpcV4KXSuBhWQLUsNm1gA-1.jpeg 1000w,
https://s3.amazonaws.com/cdn-media-1.freecodecamp.org/ghost/2019/05/1_dKpcV4KXSuBhWQLUsNm1gA-1.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://s3.amazonaws.com/cdn-media-1.freecodecamp.org/ghost/2019/05/1_dKpcV4KXSuBhWQLUsNm1gA-1.jpeg" alt="How I discovered the C++ algorithm library and learned not to reinvent the wheel">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>The other day out of curiosity, I looked into the C++ algorithm library. And found out quite a good number of cool features!</p><p>This literally amazed me.</p><p>Why? I mean I have mostly written C++ throughout my university life. And it was particularly because of my love-hate relationship with <a href="https://en.wikipedia.org/wiki/Competitive_programming" rel="noopener">competitive programming</a>.</p><p>And very unfortunately, I had never really taken advantage of this amazing library C++ has offered us.</p><p>Gosh I felt so naïve!</p><p>So I decided it was time to stop being naive and get to know the usefulness of C++ algorithms — at least at a higher level. And as an old man once said, <em>sharing knowledge is power — </em>so here I am.</p><p><strong><strong><em>Disclaimer</em></strong></strong><em>: I have heavily used features from C++11 and beyond. If you are not quite familiar with newer editions of the language, the code snippets I have provided here might seem a bit clumsy. On the other hand, the library we discuss here is far more self-sufficient and elegant than anything I have written below. Feel free to find mistakes and point them out. And also, I could not really consider many of C++17 additions in this post, as most of its features are yet to be brought into life in GCC.</em></p><p>So without further ado, let’s begin!</p><ol><li><code><strong><strong>all_of any_of none_of</strong></strong></code></li></ol><p>These functions simply look for whether <code><strong><strong>all</strong></strong></code><em>, </em><code><strong><strong>any</strong></strong></code><em> </em>or <code><strong><strong>none</strong></strong></code><em> </em>of the elements of a container follows some specific property defined by you. Check the example below:</p><pre><code class="language-c++">std::vector&lt;int&gt; collection = {3, 6, 12, 6, 9, 12};
// Are all numbers divisible by 3?
bool divby3 = std::all_of(begin(collection), end(collection), [](int x) {
return x % 3 == 0;
});
// divby3 equals true, because all numbers are divisible by 3
// Is any number divisible by 2?
bool divby2 = std::any_of(begin(collection), end(collection), [](int x) {
return x % 2 == 0;
});
// divby2 equals true because 6, 12 divisible by 2
// Is no number divisible by 6?
bool divby6 = std::none_of(begin(collection), end(collection), [](int x) {
return x % 6 == 0;
});
// divby6 equals false because 6, 12 divisible by 6</code></pre><p>Notice how in the example, the <em>specific property</em> is passed as a lambda function.</p><p>So <code><strong><strong>all_of, any_of, none_of</strong></strong></code> look for some specific property in your <code><strong><strong>collection</strong></strong></code>. These functions are pretty much self explanatory on what they are supposed to do. Along with the introduction of <strong><strong>lambdas </strong></strong>in C++11, they are pretty handy to use.</p><p>2. <code><strong><strong>for_each</strong></strong></code></p><p>I have always been so accustomed to using age-old <code><strong><strong>for</strong></strong></code> loop that this cute thing never crossed my sight. Basically, <code><strong><strong>for_each</strong></strong></code> applies a function to a range of a container.</p><pre><code class="language-c++">std::vector&lt;int&gt; collection = {2,4,4,1,1,3,9};
// notice that we pass x as reference!
std::for_each(begin(collection), end(collection), [] (int &amp;x) {
x += 26;
});</code></pre><p>If you are a JavaScript developer, the above code should ring a bell.</p><p>3. <code><strong><strong>count count_if</strong></strong></code></p><p>Pretty much like the functions described in the beginning, <code><strong><strong>count</strong></strong></code> and <code><strong><strong>count_if</strong></strong></code> both look for specific properties in your given collection of data.</p><pre><code>std::vector&lt;int&gt; collection={1, 9, 9, 4, 2, 6};
// How many 9s are there in collection?
int nines = std::count(begin(collection), end(collection), 9);
// How many elements of the collection are even?
int evens = std::count_if(begin(collection), end(collection), [](int x) {
return x % 2 == 0;
});
// nines equals 2, evens equals 3</code></pre><p>And a result, you receive the <strong><strong>count</strong></strong> that matches your given value, or has the given property that you provide in the form of a lambda function.</p><p>4. <code><strong><strong>find_if</strong></strong></code></p><p>Say you want to find the first element in your collection satisfying a particular property. You can use <code><strong><strong>find_if</strong></strong></code>.</p><pre><code class="language-c++">std::vector&lt;int&gt; collection = {1, 2, 0, 5, 0, 3, 4};
// itr contains the iterator to the first element following the specific property
auto itr = std::find_if(begin(collection), end(collection), [](int x) {
return x % 2==0; // the property
int counter=0;
// notice that we are capturing counter by reference
std::generate(begin(collection), end(collection), [&amp;]() {
return counter++;
});
// collection gets replaced by values starting from 0
// modified collection = {0,1,2,3,4,5,6}</code></pre><p>In the above example, notice that we are actually changing our collection <em>in-place</em>. And the generator here is the lambda function we provided.</p><p>6. <code><strong><strong>shuffle</strong></strong></code></p><p>From the standard of C++17, <code><strong><strong>random_shuffle</strong></strong></code><strong><strong> </strong></strong>has been removed. Now we prefer <code><strong><strong>shuffle</strong></strong></code> which is more effective, given that it takes advantage of the header <code><strong><strong>random</strong></strong></code>.</p><pre><code class="language-c++">std::vector&lt;int&gt; collection = {1, 2, 13, 5, 12, 3, 4};
std::random_device rd;
std::mt19937 rand_gen(rd());
std::shuffle(begin(collection), end(collection), rand_gen);</code></pre><p>Note that we are using <a href="https://en.wikipedia.org/wiki/Mersenne_Twister" rel="noopener">Mersenne Twister</a>, a pseudo-random number generator introduced in C++11.</p><p>Random number generators have become far more mature in C++ with the introduction of <code><strong><strong>random</strong></strong></code><strong><strong> </strong></strong>library and inclusion of better methods.</p><p>7. <code><strong><strong>nth_element</strong></strong></code></p><p>This function is quite useful, given that it has an interesting complexity.</p><p>Say you want to know the <em>n-th </em>element of your collection if it was sorted, but you do not want to sort the collection to make an <strong><strong><em>O(n log(n))</em></strong></strong><em> </em>operation.</p><p>What would you do?</p><p>Then <code><strong><strong>nth_element</strong></strong></code> is your friend. It finds the desired element in <strong><strong><em>O(n)</em></strong></strong><em>.</em></p><pre><code class="language-c++">std::vector&lt;int&gt; collection = {1, 2, 13, 5, 12, 3, 4};
auto median_pos = collection.begin() + collection.size() / 2;
std::nth_element(begin(collection), median_pos, end(collection));
// note that the original vector will be changed due to the operations
// done by nth_element</code></pre><p>Interestingly, <code><strong><strong>nth_element</strong></strong></code> may or may not make your collection sorted. It will just do whatever order it takes to find the n-th element. Here is an interesting discussion on <a href="https://stackoverflow.com/questions/10352442/whats-the-practical-difference-between-stdnth-element-and-stdsort" rel="noopener">StackOverflow</a>.</p><p>And also, you can always add your own comparison function (like we added lambdas in previous examples) to make it more effective.</p><p>8. <code><strong><strong>equal_range</strong></strong></code></p><p>So let’s say you have a sorted collection of integers. You want to find the range in which all the elements have a specific value. For example:</p><pre><code class="language-c++">// sorted collection
std::vector&lt;int&gt; collection={1, 2, 5, 5, 5, 6, 9, 12};
// we are looking for a range where all elements equal to 5
auto range = std::equal_range(begin(collection), end(collection), 5);
// the required range is printed like this
std::cout &lt;&lt; (range.first - begin(collection)) &lt;&lt; " " &lt;&lt;
(range.second - begin(collection)) &lt;&lt; std::endl;</code></pre><p>In this code, we are looking for a <strong><strong>range</strong></strong> in the <code><strong><strong>vector</strong></strong></code> that holds all <code><strong><strong>5</strong></strong></code>. The answer is <code><strong><strong>(2~4)</strong></strong></code>.</p><p>Of course we can use this function for our own custom property. You need to ensure that the property you have aligns with the order of the data. See <a href="https://en.cppreference.com/w/cpp/algorithm/equal_range" rel="noopener">this article for reference</a>.</p><p>Finally, <code><strong><strong>lower_bound</strong></strong></code> and <code><strong><strong>upper_bound</strong></strong></code> both can help you to achieve the same that you achieved using <code><strong><strong>equal_range</strong></strong></code>.</p><p>9. <code><strong><strong>merge inplace_merge</strong></strong></code></p><p>Imagine you have two sorted collections (what a fun thing to imagine, right?), you want to merge them, and you also want the merged collection to remain sorted. How would you do that?</p><p>You can just add the second collection to the first one and sort the result again which adds an extra <strong><strong>O(log(n))</strong></strong><em> </em>factor. Instead of that, we can just use <code><strong><strong>merge</strong></strong></code>.</p><pre><code class="language-c++">std::vector&lt;int&gt; c1 = {1, 2, 5, 5, 5, 6, 9, 12};
std::vector&lt;int&gt; c2 = {2, 4, 4, 5, 7, 15};
std::vector&lt;int&gt; result; // contains merged elements
std::merge(begin(c1), end(c1), begin(c2), end(c2), std::back_inserter(result));
// result = {1, 2, 2, 4, 4, 5, 5, 5, 5, 6, 7, 9, 12, 15}</code></pre><p>On the other hand, do you remember when implementing <em>merge sort, </em>we need to merge two sides of our array? <code><strong><strong>inplace_merge</strong></strong></code> can be conveniently used for that.</p><p>Look at this tiny <em>merge sort </em>based on the example given in <a href="https://en.cppreference.com/w/cpp/algorithm/inplace_merge" rel="noopener">cppreference</a>:</p><pre><code class="language-c++">void merge_sort(auto l, auto r)
{
if(r - l &gt; 1)
{
auto mid = l+(r-l)/2;
merge_sort(l, mid);
merge_sort(mid, r);
std::inplace_merge(l, mid, r);
}
}
std::vector&lt;int&gt; collection = {2, 4, 4, 1, 1, 3, 9};
// out.first contains the minimum element, out.second is the maximum one
auto out = std::minmax(a, b);
std::vector&lt;int&gt; collection = {6, 5, 3, 2, 1, 4, 6, 7};
auto result = std::minmax_element(begin(collection), end(collection));
// you can also add compare function as the third argument
// (result.first - collection.begin()) is the index of the minimum element
// (result.second - collection.begin()) is the index of the maximum element</code></pre><p>11. <code><strong><strong>accumulate partial_sum</strong></strong></code></p><p><code><strong><strong>accumulate</strong></strong></code> does what it says, it <em>accumulates </em>values of your collection in the given range, using the initial value and a binary operation function. See for yourself:</p><pre><code class="language-c++">std::vector&lt;int&gt; collection = {6, 5, 3, 2, 1, 4, 6, 7};
// Note that we are providing 0 as the initial value, as it should be.
// std::plus&lt;int&gt;() tells that the function should do sums
int sum = std::accumulate(begin(collection), end(collection), 0, std::plus&lt;int&gt;());
// What would happen if initial value was 0 instead of 1 in this call?
int prod = std::accumulate(begin(collection), end(collection), 1, std::multiplies&lt;int&gt;());
// You can also use your custom binary operation.
int custom = std::accumulate(begin(collection), end(collection), 0, [](int x, int y) {
return x+y;
});</code></pre><p>So how is the value of <code><strong><strong>custom</strong></strong></code> calculated?</p><p>At the beginning, accumulate takes the initial value (0) to the argument <code><strong><strong>x</strong></strong></code>, the first value in the collection (6) to argument <code><strong><strong>y</strong></strong></code>, does the operation, then assigns it to the accumulated value. In the second call, it passes the accumulated value to <code><strong><strong>x</strong></strong></code> and the next element in the collection to <code><strong><strong>y</strong></strong></code>, and thus proceeds.</p><p><code><strong><strong>partial_sum</strong></strong></code> does things much like accumulate, but it also keeps the result of first <code><strong><strong>n</strong></strong></code><em> </em>terms in a destination container.</p><pre><code class="language-c++">std::vector&lt;int&gt; collection = {6, 5, 3, 2, 1, 4, 6, 7};
std::vector&lt;int&gt; sums, mults;
// contains the partial sum of collection in result
std::partial_sum(begin(collection), end(collection), std::back_inserter(sums));
// contains the partial product
std::partial_sum(begin(collection), end(collection), std::back_inserter(mults), std::multiplies&lt;int&gt;());</code></pre><p>And of course as you expected, you can use your own custom operation.</p><p>12. <code><strong><strong>adjacent_difference</strong></strong></code></p><p>You want to find the adjacent differences in your values, you can simply use this function.</p><pre><code class="language-c++">std::vector&lt;int&gt; collection = {6, 5, 3, 2, 1, 4, 6, 7};
std::vector&lt;int&gt; diffs;
std::adjacent_difference(begin(collection), end(collection), std::back_inserter(diffs));
// The first element of diffs will be same as the first element of collection</code></pre><p>Pretty simple, right?</p><p>But it can do much more. Look at this:</p><pre><code class="language-c++">std::vector&lt;int&gt; fibs(10, 1);
std::adjacent_difference(begin(fibs), end(fibs) - 1, begin(fibs) + 1, std::plus&lt;&gt;{});</code></pre><p>What do these two lines do? They find the first 10 Fibonacci numbers! Do you see how? ?</p><hr><p>So that was it for today. Thanks for reading! I hope you learned something new.</p><p>I would definitely like to bring some new stuff for ya’ll again in near future.</p><p>Cheers!</p>
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
