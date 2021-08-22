---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c9eb7740569d1a4ca3eaa.jpg"
tags: [Algorithms]
description: "This kind of algorithm looks at the problem of re-arranging a"
author: "Milad E. Fahmy"
title: "Search Algorithms Explained with Examples in Java, Python, and C++"
created: "2021-08-16T15:38:16+02:00"
modified: "2021-08-16T15:38:16+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-algorithms tag-python tag-java ">
<header class="post-full-header">
<h1 class="post-full-title">Search Algorithms Explained with Examples in Java, Python, and C++</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c9eb7740569d1a4ca3eaa.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9eb7740569d1a4ca3eaa.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9eb7740569d1a4ca3eaa.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9eb7740569d1a4ca3eaa.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c9eb7740569d1a4ca3eaa.jpg" alt="Search Algorithms Explained with Examples in Java, Python, and C++">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<h2 id="what-is-a-search-algorithm">What is a Search Algorithm?</h2><p>This kind of algorithm looks at the problem of re-arranging an array of items in ascending order. The two most classical examples of that is the binary search and the merge sort algorithm.</p><h2 id="exponential-search">Exponential Search</h2><p>Exponential Search, also known as finger search, searches for an element in a sorted array by jumping &nbsp;<code>2^i</code> elements in every iteration, where i represents the value of loop control variable, and then verifying if the search element is present between the last jump and the current jump.</p><h3 id="complexity-worst-case">Complexity Worst Case</h3><p>O(log(N)) Often confused because of the name, the algorithm is named so not because of the time complexity. The name arises as a result of the algorithm jumping elements with steps equal to exponents of 2</p><h3 id="steps">Steps</h3><ol><li>Jump the array &nbsp;<code>2^i</code> &nbsp;elements at a time searching for the condition &nbsp;<code>Array[2^(i-1)] &lt; valueWanted &lt; Array[2^i]</code> . If &nbsp;<code>2^i</code> &nbsp;is greater than the lenght of array, then set the upper bound to the length of the array.</li><li>Do a binary search between &nbsp;<code>Array[2^(i-1)]</code> &nbsp;and &nbsp;<code>Array[2^i]</code></li></ol><h1 id="code">Code</h1><pre><code>// C++ program to find an element x in a
// sorted array using Exponential search.
#include &lt;bits/stdc++.h&gt;
using namespace std;
int binarySearch(int arr[], int, int, int);
// Returns position of first ocurrence of
// x in array
int exponentialSearch(int arr[], int n, int x)
{
// If x is present at firt location itself
if (arr[0] == x)
return 0;
// Find range for binary search by
// repeated doubling
int i = 1;
while (i &lt; n &amp;&amp; arr[i] &lt;= x)
i = i*2;
//  Call binary search for the found range.
return binarySearch(arr, i/2, min(i, n), x);
}
// A recursive binary search function. It returns
// location of x in  given array arr[l..r] is
// present, otherwise -1
int binarySearch(int arr[], int l, int r, int x)
{
if (r &gt;= l)
{
int mid = l + (r - l)/2;
// If the element is present at the middle
// itself
if (arr[mid] == x)
return mid;
// If element is smaller than mid, then it
// can only be present n left subarray
if (arr[mid] &gt; x)
return binarySearch(arr, l, mid-1, x);
// Else the element can only be present
// in right subarray
return binarySearch(arr, mid+1, r, x);
}
// We reach here when element is not present
// in array
return -1;
}
int main(void)
{
int arr[] = {2, 3, 4, 10, 40};
int n = sizeof(arr)/ sizeof(arr[0]);
int x = 10;
int result = exponentialSearch(arr, n, x);
(result == -1)? printf("Element is not present in array")
: printf("Element is present at index %d", result);
return 0;
}
{
int len = (int)( sizeof(arr) / sizeof(arr[0]);
int *a = arr;
for(int i = 0; i &lt; len; i++)
{
if(*(a+i) == num) return i;
}
return -1;
}
</code></pre><h3 id="example-in-javascript">Example in JavaScript</h3><pre><code>function linearSearch(arr, item) {
// Go through all the elements of arr to look for item.
for (var i = 0; i &lt; arr.length; i++) {
if (arr[i] === item) { // Found it!
return i;
}
}
// Item not found in the array.
return null;
}
</code></pre><h3 id="example-in-ruby">Example in Ruby</h3><pre><code>def linear_search(target, array)
counter = 0
while counter &lt; array.length
if array[counter] == target
return counter
else
counter += 1
end
end
return nil
end
</code></pre><h3 id="example-in-c-">Example in C++</h3><pre><code>int linear_search(int arr[],int n,int num)
{
for(int i=0;i&lt;n;i++){
if(arr[i]==num)
return i;
}
// Item not found in the array
return -1;
}
</code></pre><h3 id="example-in-python">Example in Python</h3><pre><code>def linear_search(array, num):
for index, element in enumerate(array):
if element == num:
return index
return -1
</code></pre><h3 id="example-in-swift">Example in Swift</h3><pre><code>func linearSearch(for number: Int, in array: [Int]) -&gt; Int? {
for (index, value) in array.enumerated() {
if value == number { return index } // return the index of the number
}
return nil // the number was not found in the array
}
</code></pre><h3 id="example-in-java">Example in Java</h3><pre><code>int linearSearch(int[] arr, int element)
{
for(int i=0;i&lt;arr.length;i++)
{
if(arr[i] == element)
return i;
}
return -1;
}
</code></pre><h3 id="example-in-php">Example in PHP</h3><pre><code>function linear_search($arr=[],$num=0)
{
$n = count($arr);
for( $i=0; $i&lt;$n; $i++){
if($arr[$i] == $num)
return $i;
}
// Item not found in the array
return -1;
}
$arr = array(1,3,2,8,5,7,4,0);
print("Linear search result for 2: ");
echo linear_search($arr,2);
</code></pre><h3 id="global-linear-search">Global Linear Search</h3><p>What if you are searching the multiple occurrences of an element? For example you want to see how many 5’s are in an array.</p><p>Target = 5</p><p>Array = [ 1, 2, 3, 4, 5, 6, 5, 7, 8, 9, 5]</p><p>This array has 3 occurances of 5s and we want to return the indexes (where they are in the array) of all of them. This is called global linear search. You will need to adjust your code to return an array of the index points at which it finds the target element. When you find an index element that matches your target, the index point (counter) will be added in the results array. If it doesn’t match the code will continue to move on to the next element in the array by adding 1 to the counter.</p><pre><code>def global_linear_search(target, array)
counter = 0
results = []
while counter &lt; array.length
if array[counter] == target
results &lt;&lt; counter
counter += 1
else
counter += 1
end
end
if results.empty?
return nil
else
return results
end
end
</code></pre><p>Multiply by 2x:</p><pre><code>2^x = N
</code></pre><p>Now do the log2:</p><pre><code>log2(2^x)   = log2 N
x * log2(2) = log2 N
x * 1 = log2 N
if (low &gt; high) { // No more elements in the array.
return null;
}
// Find the middle of the array.
var mid = Math.ceil((low + high) / 2);
if (arr[mid] === item) { // Found the item!
return mid;
}
if (item &lt; arr[mid]) { // Item is in the half from low to mid-1.
return binarySearch(arr, item, low, mid-1);
}
else { // Item is in the half from mid+1 to high.
return binarySearch(arr, item, mid+1, high);
}
}
var numbers = [1,2,3,4,5,6,7];
print(binarySearch(numbers, 5, 0, numbers.length-1));
</code></pre><p>Here is another implementation in JavaScript:</p><pre><code>function binary_search(a, v) {
function search(low, high) {
if (low === high) {
return a[low] === v;
} else {
var mid = math_floor((low + high) / 2);
return (v === a[mid])
||
(v &lt; a[mid])
? search(low, mid - 1)
: search(mid + 1, high);
}
}
return search(0, array_length(a) - 1);
}
</code></pre><h3 id="ruby-implementation">Ruby implementation</h3><pre><code>def binary_search(target, array)
sorted_array = array.sort
low = 0
high = (sorted_array.length) - 1
while high &gt;= low
middle = (low + high) / 2
if target &gt; sorted_array[middle]
low = middle + 1
elsif target &lt; sorted_array[middle]
high = middle - 1
else
return middle
end
end
return nil
end
</code></pre><h3 id="example-in-c">Example in C</h3><pre><code>int binarySearch(int a[], int l, int r, int x) {
if (r &gt;= l){
int mid = (l + (r - l))/2;
if (a[mid] == x)
return mid;
if (arr[mid] &gt; x)
return binarySearch(arr, l, mid-1, x);
return binarySearch(arr, mid+1, r, x);
}
return -1;
}
</code></pre><h3 id="python-implementation">Python implementation</h3><pre><code>def binary_search(arr, l, r, target):
if r &gt;= l:
mid = (l + (r - l))/2
if arr[mid] == target:
return mid
elif arr[mid] &gt; target:
return binary_search(arr, l, mid-1, target)
else:
return binary_search(arr, mid+1, r, target)
else:
return -1
</code></pre><h3 id="example-in-c--1">Example in C++</h3><p>Recursive approach!</p><pre><code>// Recursive approach in C++
int binarySearch(int arr[], int start, int end, int x)
{
if (end &gt;= start)
{
int mid = (start + (end - start))/2;
if (arr[mid] == x)
return mid;
if (arr[mid] &gt; x)
return binarySearch(arr, start, mid-1, x);
return binarySearch(arr, mid+1, end, x);
}
return -1;
}
</code></pre><p>Iterative approach!</p><pre><code>int binarySearch(int arr[], int start, int end, int x)
{
while (start &lt;= end)
{
int mid = (start + (end - start))/2;
if (arr[mid] == x)
return mid;
if (arr[mid] &lt; x)
start = mid + 1;
else
end = mid - 1;
}
return -1;
}
</code></pre><h3 id="example-in-swift-1">Example in Swift</h3><pre><code>func binarySearch(for number: Int, in numbers: [Int]) -&gt; Int? {
var lowerBound = 0
var upperBound = numbers.count
while lowerBound &lt; upperBound {
let index = lowerBound + (upperBound - lowerBound) / 2
if numbers[index] == number {
return index // we found the given number at this index
} else if numbers[index] &lt; number {
lowerBound = index + 1
} else {
upperBound = index
}
}
return nil // the given number was not found
}
</code></pre><h3 id="example-in-java-1">Example in Java</h3><pre><code>// Iterative Approach in Java
int binarySearch(int[] arr, int start, int end, int element)
{
while(start &lt;= end)
{
int mid = start + ( end - start ) / 2;
if(arr[mid] == element)
return mid;
if(arr[mid] &lt; element)
start = mid+1;
else
end = mid-1;
}
return -1;
}
</code></pre><pre><code>// Recursive Approach in Java
int binarySearch(int[] arr, int start,int end , int element)
{
if (end &gt;= start)
{
int mid = start + ( end - start ) / 2;
if(arr[mid] ==  element)
return mid;
if(arr[mid] &lt; element)
return binarySearch( arr , mid + 1 , end , element );
else
return binarySearch( arr, start, mid - 1 , element);
}
return -1;
}
</code></pre>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
