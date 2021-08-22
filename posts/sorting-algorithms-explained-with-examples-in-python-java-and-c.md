---
card: "/images/default.jpg"
tags: [Algorithms]
description: "Sorting algorithms are a set of instructions that take an arr"
author: "Milad E. Fahmy"
title: "Sorting Algorithms Explained with Examples in Python, Java, and C++"
created: "2021-08-16T15:38:17+02:00"
modified: "2021-08-16T15:38:17+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-algorithms tag-python tag-java ">
<header class="post-full-header">
<h1 class="post-full-title">Sorting Algorithms Explained with Examples in Python, Java, and C++</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2021/06/5f9c9ede740569d1a4ca3f9d-1.jpg 300w,
/news/content/images/size/w600/2021/06/5f9c9ede740569d1a4ca3f9d-1.jpg 600w,
/news/content/images/size/w1000/2021/06/5f9c9ede740569d1a4ca3f9d-1.jpg 1000w,
/news/content/images/size/w2000/2021/06/5f9c9ede740569d1a4ca3f9d-1.jpg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2021/06/5f9c9ede740569d1a4ca3f9d-1.jpg" alt="Sorting Algorithms Explained with Examples in Python, Java, and C++">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<h2 id="what-is-a-sorting-algorithm">What is a Sorting Algorithm?</h2><p>Sorting algorithms are a set of instructions that take an array or list as an input and arrange the items into a particular order.</p><p>Sorts are most commonly in numerical or a form of alphabetical (called lexicographical) order, and can be in ascending (A-Z, 0-9) or descending (Z-A, 9-0) order.</p><h2 id="why-sorting-algorithms-are-important">Why Sorting Algorithms are Important</h2><p>Since sorting can often reduce the complexity of a problem, it is an important algorithm in Computer Science. These algorithms have direct applications in searching algorithms, database algorithms, divide and conquer methods, data structure algorithms, and many more.</p><h3 id="trade-offs-of-algorithms">Trade-Offs of Algorithms</h3><p>When using different algorithms some questions have to be asked. How big is the collection being sorted? How much memory is at disposal to be used? Does the collection need to grow? </p><p>The answers to these questions may determine what algorithm is going to work best for the situation. Some algorithms like merge sort may need a lot of space to run, while insertion sort is not always the fastest but it doesn't require many resources to run. </p><p>You should determine what the requirements of the system are and its limitations before deciding what algorithm to use.</p><h2 id="some-common-sorting-algorithms">Some Common Sorting Algorithms</h2><p>Some of the most common sorting algorithms are:</p><ul><li>Selection Sort</li><li>Bubble Sort</li><li>Insertion Sort</li><li>Merge Sort</li><li>Quick Sort</li><li>Heap Sort</li><li>Counting Sort</li><li>Radix Sort</li><li>Bucket Sort</li></ul><p>But before we get into each of these, let's learn a bit more about what makes classifies a sorting algorithm.</p><h3 id="classification-of-a-sorting-algorithm">Classification of a Sorting Algorithm</h3><p>Sorting algorithms can be categorized based on the following parameters:</p><ol><li>Based on Number of Swaps or Inversion This is the number of times the algorithm swaps elements to sort the input. &nbsp;<code>Selection Sort</code> &nbsp;requires the minimum number of swaps.</li><li>Based on Number of Comparisons This is the number of times the algorithm compares elements to sort the input. Using <a href="https://guide.freecodecamp.org/computer-science/notation/big-o-notation/">Big-O notation</a>, the sorting algorithm examples listed above require at least &nbsp;<code>O(nlogn)</code> comparisons in the best case and &nbsp;<code>O(n^2)</code> &nbsp;comparisons in the worst case for most of the outputs.</li><li>Based on Recursion or Non-Recursion Some sorting algorithms, such as &nbsp;<code>Quick Sort</code> , use recursive techniques to sort the input. Other sorting algorithms, such as &nbsp;<code>Selection Sort</code> &nbsp;or &nbsp;<code>Insertion Sort</code> , use non-recursive techniques. Finally, some sorting algorithm, such as &nbsp;<code>Merge Sort</code> , make use of both recursive as well as non-recursive techniques to sort the input.</li><li>Based on Stability Sorting algorithms are said to be &nbsp;<code>stable</code> &nbsp;if the algorithm maintains the relative order of elements with equal keys. In other words, two equivalent elements remain in the same order in the sorted output as they were in the input.</li><li><code>Insertion sort</code> , &nbsp;<code>Merge Sort</code> , and &nbsp;<code>Bubble Sort</code> &nbsp;are stable</li><li><code>Heap Sort</code> &nbsp;and &nbsp;<code>Quick Sort</code> &nbsp;are not stable</li><li>Based on Extra Space Requirement Sorting algorithms are said to be &nbsp;<code>in place</code> &nbsp;if they require a constant &nbsp;<code>O(1)</code> &nbsp;extra space for sorting.</li><li><code>Insertion sort</code> &nbsp;and &nbsp;<code>Quick-sort</code> &nbsp;are &nbsp;<code>in place</code> &nbsp;sort as we move the elements about the pivot and do not actually use a separate array which is NOT the case in merge sort where the size of the input must be allocated beforehand to store the output during the sort.</li><li><code>Merge Sort</code> &nbsp;is an example of &nbsp;<code>out place</code> &nbsp;sort as it require extra memory space for its operations.</li></ol><h3 id="best-possible-time-complexity-for-any-comparison-based-sorting">Best possible time complexity for any comparison based sorting</h3><p>Any comparison based sorting algorithm must make at least nLog2n comparisons to sort the input array, and Heapsort and merge sort are asymptotically optimal comparison sorts. This can be easily proved by drawing a decision tree diagram.</p><h2 id="bucket-sort">Bucket Sort</h2><p>Bucket Sort is a comparison sort algorithm that operates on elements by dividing them into different buckets and then sorting these buckets individually. Each bucket is sorted individually using a separate sorting algorithm or by applying the bucket sort algorithm recursively. </p><p>Bucket Sort is mainly useful when the input is uniformly distributed over a range.</p><h3 id="assume-you-have-the-following-problem-in-front-of-you">Assume you have the following problem in front of you</h3><p>You have been given a large array of floating point integers lying uniformly between the lower and upper bound. This array now needs to be sorted. </p><p>A simple way to solve this problem would be to use another sorting algorithm such as Merge sort, Heap Sort or Quick Sort. However, these algorithms guarantee a best case time complexity of O(NlogN). However, using bucket sort, the above task can be completed in O(N)time.</p><p>Let's have a closer look at it.</p><p>Consider that you need to create an array of lists, that is of buckets. Elements now need to be inserted into these buckets on the basis of their properties. Each of these buckets can then be sorted individually using Insertion Sort.</p><h3 id="pseudo-code-for-bucket-sort-">Pseudo Code for Bucket Sort:</h3><pre><code>void bucketSort(float[] a,int n)
{
for(each floating integer 'x' in n)
{
insert x into bucket[n*x];
}
for(each bucket)
{
sort(bucket);
}
}
</code></pre><h2 id="counting-sort">Counting Sort</h2><p>Counting Sort is a sorting technique based on keys between a specific range. It works by counting the number of objects having distinct key values (kind of hashing). Then doing some arithmetic to calculate the position of each object in the output sequence.</p><h3 id="example-">Example:</h3><pre><code>For simplicity, consider the data in the range 0 to 9.
Input data: 1, 4, 1, 2, 7, 5, 2
1) Take a count array to store the count of each unique object.
Index:     0  1  2  3  4  5  6  7  8  9
Count:     0  2  2  0  1  1  0  1  0  0
2) Modify the count array such that each element at each index
stores the sum of previous counts.
Index:     0  1  2  3  4  5  6  7  8  9
Count:     0  2  4  4  5  6  6  7  7  7
The modified count array indicates the position of each object in
the output sequence.
3) Output each object from the input sequence followed by
decreasing its count by 1.
Process the input data: 1, 4, 1, 2, 7, 5, 2. Position of 1 is 2.
Put data 1 at index 2 in output. Decrease count by 1 to place
next data 1 at an index 1 smaller than this index.
</code></pre><h3 id="properties">Properties</h3><ul><li>Space complexity: O(K)</li><li>Best case performance: O(n+K)</li><li>Average case performance: O(n+K)</li><li>Worst case performance: O(n+K)</li><li>Stable: Yes (K is the number of distinct elements in the array)</li></ul><h3 id="implementation-in-javascript">Implementation in JavaScript</h3><pre><code class="language-js">let numbers = [1, 4, 1, 2, 7, 5, 2];
let count = [];
let i, z = 0;
let max = Math.max(...numbers);
// initialize counter
for (i = 0; i &lt;= max; i++) {
count[i] = 0;
}
for (i=0; i &lt; numbers.length; i++) {
count[numbers[i]]++;
}
for (i = 0; i &lt;= max; i++) {
while (count[i]-- &gt; 0) {
numbers[z++] = i;
}
}
// output sorted array
for (i=0; i &lt; numbers.length; i++) {
console.log(numbers[i]);
}
</code></pre><h3 id="c-implementation">C++ Implementation</h3><pre><code class="language-cpp">#include &lt;iostream&gt;
void countSort(int upperBound, int lowerBound, std::vector&lt;int&gt; numbersToSort) //lower and upper bounds of numbers in vector
{
int range = upperBound - lowerBound;            //create a range large enough to get every number between the min and max
std::vector&lt;int&gt; counts (range);                //initialize of counts of the size of the range
std::fill(counts.begin(), counts.end(), 0);     //fill vector of zeros
for (int i = 0; i &lt; numbersToSort.size(); i++)
{
int index = numbersToSort[i] - lowerBound; //For example, if 5 is the lower bound and numbersToSort[i] is 5. index will be 0 and the       counts[index]+= 1;                         //count of 5 will be stored in counts[0]
}
std::cout &lt;&lt; counts &lt;&lt; std::endl;
}
</code></pre><h3 id="swift-implementation">Swift Implementation</h3><pre><code class="language-swift">func countingSort(_ array: [Int]) {
// Create an array to store the count of each element
let maxElement = array.max() ?? 0
var countArray = [Int](repeating: 0, count: Int(maxElement + 1))
for element in array {
countArray[element] += 1
}
var z = 0
var sortedArray = [Int](repeating: 0, count: array.count)
for index in 1 ..&lt; countArray.count {
//print index element required number of times
while countArray[index] &gt; 0 {
sortedArray[z] = index
z += 1
countArray[index] -= 1
}
}
print(sortedArray)
}
Here `key` will be compared with the previous elements.
In this case, `key` is compared with 8. since 8 &gt; 3, move the element 8
to the next position and insert `key` to the previous position.
Result: [ 3 8 5 1 4 2 ]
8 &gt; 5 //move 8 to 2nd index and insert 5 to the 1st index.
Result: [ 3 5 8 1 4 2 ]
8 &gt; 1     =&gt; [ 3 5 1 8 4 2 ]
5 &gt; 1     =&gt; [ 3 1 5 8 4 2 ]
3 &gt; 1     =&gt; [ 1 3 5 8 4 2 ]
Result: [ 1 3 5 8 4 2 ]
8 &gt; 4   =&gt; [ 1 3 5 4 8 2 ]
5 &gt; 4   =&gt; [ 1 3 4 5 8 2 ]
3 &gt; 4   ≠&gt;  stop
Result: [ 1 3 4 5 8 2 ]
8 &gt; 2   =&gt; [ 1 3 4 5 2 8 ]
5 &gt; 2   =&gt; [ 1 3 4 2 5 8 ]
4 &gt; 2   =&gt; [ 1 3 2 4 5 8 ]
3 &gt; 2   =&gt; [ 1 2 3 4 5 8 ]
1 &gt; 2   ≠&gt; stop
Result: [1 2 3 4 5 8]
for j = 1 to arr.length
key = arr[j]
i = j - 1
while i &gt; 0 and arr[i] &gt; key
arr[i+1] = arr[i]
i = i - 1
arr[i+1] = key
</code></pre><p>Here is a detailed implementation in JavaScript:</p><pre><code class="language-js">function insertion_sort(A) {
var len = array_length(A);
var i = 1;
while (i &lt; len) {
var x = A[i];
var j = i - 1;
while (j &gt;= 0 &amp;&amp; A[j] &gt; x) {
A[j + 1] = A[j];
j = j - 1;
}
A[j+1] = x;
i = i + 1;
}
}
</code></pre><p>A quick implementation in Swift is shown below:</p><pre><code class="language-swift">  var array = [8, 3, 5, 1, 4, 2]
func insertionSort(array:inout Array&lt;Int&gt;) -&gt; Array&lt;Int&gt;{
for j in 0..&lt;array.count {
let key = array[j]
var i = j-1
while (i &gt; 0 &amp;&amp; array[i] &gt; key){
array[i+1] = array[i]
i = i-1
}
array[i+1] = key
}
return array
}
</code></pre><p>The Java example is shown below:</p><pre><code class="language-java">public int[] insertionSort(int[] arr)
for (j = 1; j &lt; arr.length; j++) {
int key = arr[j]
int i = j - 1
while (i &gt; 0 and arr[i] &gt; key) {
arr[i+1] = arr[i]
i -= 1
}
arr[i+1] = key
}
return arr;
</code></pre><p>And in c....</p><pre><code class="language-c">void insertionSort(int arr[], int n)
{
int i, key, j;
for (i = 1; i &lt; n; i++)
{
key = arr[i];
j = i-1;
while (j &gt;= 0 &amp;&amp; arr[j] &gt; key)
{
arr[j+1] = arr[j];
j = j-1;
}
arr[j+1] = key;
}
}
</code></pre><h3 id="properties-">Properties:</h3><ul><li>Space Complexity: O(1)</li><li>Time Complexity: O(n), O(n* n), O(n* n) for Best, Average, Worst cases respectively.</li><li>Best Case: array is already sorted</li><li>Average Case: array is randomly sorted</li><li>Worst Case: array is reversely sorted.</li><li>Sorting In Place: Yes</li><li>Stable: Yes</li></ul><h2 id="heapsort">Heapsort</h2><p>Heapsort is an efficient sorting algorithm based on the use of max/min heaps. A heap is a tree-based data structure that satisfies the heap property – that is for a max heap, the key of any node is less than or equal to the key of its parent (if it has a parent). </p><p>This property can be leveraged to access the maximum element in the heap in O(logn) time using the maxHeapify method. We perform this operation n times, each time moving the maximum element in the heap to the top of the heap and extracting it from the heap and into a sorted array. Thus, after n iterations we will have a sorted version of the input array. </p><p>The algorithm is not an in-place algorithm and would require a heap data structure to be constructed first. The algorithm is also unstable, which means when comparing objects with same key, the original ordering would not be preserved. </p><p>This algorithm runs in O(nlogn) time and O(1) additional space [O(n) including the space required to store the input data] since all operations are performed entirely in-place.</p><p>The best, worst and average case time complexity of Heapsort is O(nlogn). Although heapsort has a better worse-case complexity than quicksort, a well-implemented quicksort runs faster in practice. This is a comparison-based algorithm so it can be used for non-numerical data sets insofar as some relation (heap property) can be defined over the elements.</p><p>An implementation in Java is as shown below :</p><pre><code class="language-java">import java.util.Arrays;
public class Heapsort {
public static void main(String[] args) {
//test array
Integer[] arr = {1, 4, 3, 2, 64, 3, 2, 4, 5, 5, 2, 12, 14, 5, 3, 0, -1};
String[] strarr = {"hope you find this helpful!", "wef", "rg", "q2rq2r", "avs", "erhijer0g", "ewofij", "gwe", "q", "random"};
arr = heapsort(arr);
strarr = heapsort(strarr);
System.out.println(Arrays.toString(arr));
System.out.println(Arrays.toString(strarr));
}
//O(nlogn) TIME, O(1) SPACE, NOT STABLE
public static &lt;E extends Comparable&lt;E&gt;&gt; E[] heapsort(E[] arr){
int heaplength = arr.length;
for(int i = arr.length/2; i&gt;0;i--){
arr = maxheapify(arr, i, heaplength);
}
for(int i=arr.length-1;i&gt;=0;i--){
E max = arr[0];
arr[0] = arr[i];
arr[i] = max;
heaplength--;
arr = maxheapify(arr, 1, heaplength);
}
return arr;
}
//Creates maxheap from array
public static &lt;E extends Comparable&lt;E&gt;&gt; E[] maxheapify(E[] arr, Integer node, Integer heaplength){
Integer left = node*2;
Integer right = node*2+1;
Integer largest = node;
if(left.compareTo(heaplength) &lt;=0 &amp;&amp; arr[left-1].compareTo(arr[node-1]) &gt;= 0){
largest = left;
}
if(right.compareTo(heaplength) &lt;= 0 &amp;&amp; arr[right-1].compareTo(arr[largest-1]) &gt;= 0){
largest = right;
}
if(largest != node){
E temp = arr[node-1];
arr[node-1] = arr[largest-1];
arr[largest-1] = temp;
maxheapify(arr, largest, heaplength);
}
return arr;
}
}
</code></pre><p>Implementation in C++</p><pre><code class="language-cpp">#include &lt;iostream&gt;
using namespace std;
void heapify(int arr[], int n, int i)
{
int largest = i;
int l = 2*i + 1;
int r = 2*i + 2;
if (l &lt; n &amp;&amp; arr[l] &gt; arr[largest])
largest = l;
if (r &lt; n &amp;&amp; arr[r] &gt; arr[largest])
largest = r;
if (largest != i)
{
swap(arr[i], arr[largest]);
heapify(arr, n, largest);
}
}
void heapSort(int arr[], int n)
{
for (int i = n / 2 - 1; i &gt;= 0; i--)
heapify(arr, n, i);
for (int i=n-1; i&gt;=0; i--)
{
swap(arr[0], arr[i]);
heapify(arr, i, 0);
}
}
void printArray(int arr[], int n)
{
for (int i=0; i&lt;n; ++i)
cout &lt;&lt; arr[i] &lt;&lt; " ";
cout &lt;&lt; "\n";
}
int main()
{
int arr[] = {12, 11, 13, 5, 6, 7};
int n = sizeof(arr)/sizeof(arr[0]);
heapSort(arr, n);
cout &lt;&lt; "Sorted array is \n";
printArray(arr, n);
}
</code></pre><h2 id="radix-sort">Radix Sort</h2><p>Prerequisite: Counting Sort</p><p>QuickSort, MergeSort, and HeapSort are comparison-based sorting algorithms. CountSort is not. It has the complexity of O(n+k), where k is the maximum element of the input array. So, if k is O(n), CountSort becomes linear sorting, which is better than comparison based sorting algorithms that have O(nlogn) time complexity. </p><p>The idea is to extend the CountSort algorithm to get a better time complexity when k goes O(n2). Here comes the idea of Radix Sort.</p><h3 id="the-algorithm-">The Algorithm:</h3><p>For each digit i where i varies from the least significant digit to the most significant digit of a number, sort input array using countsort algorithm according to ith digit. We used count sort because it is a stable sort.</p><p>Example: Assume the input array is:</p><p>10, 21, 17, 34, 44, 11, 654, 123</p><p>Based on the algorithm, we will sort the input array according to the one's digit (least significant digit).</p><p>0: 10<br>1: 21 11<br>2:<br>3: 123<br>4: 34 44 654<br>5:<br>6:<br>7: 17<br>8:<br>9:</p><p>So, the array becomes 10, 21, 11, 123, 24, 44, 654, 17. </p><p>Now, we'll sort according to the ten's digit:</p><p>0:<br>1: 10 11 17<br>2: 21 123<br>3: 34<br>4: 44<br>5: 654<br>6:<br>7:<br>8:<br>9:</p><p>Now, the array becomes : 10, 11, 17, 21, 123, 34, 44, 654.</p><p>Finally, we sort according to the hundred's digit (most significant digit):</p><p>0: 010 011 017 021 034 044<br>1: 123<br>2:<br>3:<br>4:<br>5:<br>6: 654<br>7:<br>8:<br>9:</p><p>The array becomes : 10, 11, 17, 21, 34, 44, 123, 654 which is sorted. This is how our algorithm works.</p><p>An implementation in C:</p><pre><code class="language-c">void countsort(int arr[],int n,int place){
int i,freq[range]={0};         //range for integers is 10 as digits range from 0-9
int output[n];
for(i=0;i&lt;n;i++)
freq[(arr[i]/place)%range]++;
for(i=1;i&lt;range;i++)
freq[i]+=freq[i-1];
for(i=n-1;i&gt;=0;i--){
output[freq[(arr[i]/place)%range]-1]=arr[i];
freq[(arr[i]/place)%range]--;
}
for(i=0;i&lt;n;i++)
arr[i]=output[i];
}
void radixsort(ll arr[],int n,int maxx){      //maxx is the maximum element in the array
int mul=1;
while(maxx){
countsort(arr,n,mul);
mul*=10;
maxx/=10;
}
}
</code></pre><h2 id="selection-sort">Selection Sort</h2><p>Selection Sort is one of the simplest sorting algorithms. This algorithm gets its name from the way it iterates through the array: it selects the current smallest element, and swaps it into place.</p><p>Here's how it works:</p><ol><li>Find the smallest element in the array and swap it with the first element.</li><li>Find the second smallest element and swap with with the second element in the array.</li><li>Find the third smallest element and swap wit with the third element in the array.</li><li>Repeat the process of finding the next smallest element and swapping it into the correct position until the entire array is sorted.</li></ol><p>But, how would you write the code for finding the index of the second smallest value in an array?</p><p>An easy way is to notice that the smallest value has already been swapped into index 0, so the problem reduces to finding the smallest element in the array starting at index 1.</p><p>Selection sort always takes the same number of key comparisons — N(N − 1)/2.</p><h3 id="implementation-in-c-c-">Implementation in C/C++</h3><p>The following C++ program contains an iterative as well as a recursive implementation of the Selection Sort algorithm. Both implementations are invoked in the &nbsp;<code>main()</code> &nbsp;function.</p><pre><code class="language-cpp">#include &lt;iostream&gt;
#include &lt;string&gt;
using namespace std;
template&lt;typename T, size_t n&gt;
void print_array(T const(&amp;arr)[n]) {
for (size_t i = 0; i &lt; n; i++)
std::cout &lt;&lt; arr[i] &lt;&lt; ' ';
cout &lt;&lt; "\n";
}
int minIndex(int a[], int i, int j) {
if (i == j)
return i;
int k = minIndex(a, i + 1, j);
return (a[i] &lt; a[k]) ? i : k;
}
void recurSelectionSort(int a[], int n, int index = 0) {
if (index == n)
return;
int k = minIndex(a, index, n - 1);
if (k != index)
swap(a[k], a[index]);
recurSelectionSort(a, n, index + 1);
}
void iterSelectionSort(int a[], int n) {
for (int i = 0; i &lt; n; i++)
{
int min_index = i;
int min_element = a[i];
for (int j = i + 1; j &lt; n; j++)
{
if (a[j] &lt; min_element)
{
min_element = a[j];
min_index = j;
}
}
swap(a[i], a[min_index]);
}
}
int main() {
int recurArr[6] = { 100,35, 500, 9, 67, 20 };
int iterArr[5] = { 25, 0, 500, 56, 98 };
cout &lt;&lt; "Recursive Selection Sort"  &lt;&lt; "\n";
print_array(recurArr); // 100 35 500 9 67 20
recurSelectionSort(recurArr, 6);
print_array(recurArr); // 9 20 35 67 100 500
cout &lt;&lt; "Iterative Selection Sort" &lt;&lt; "\n";
print_array(iterArr); // 25 0 500 56 98
iterSelectionSort(iterArr, 5);
print_array(iterArr); // 0 25 56 98 500
}
</code></pre><h3 id="implementation-in-javascript-1">Implementation in JavaScript</h3><pre><code class="language-js">function selection_sort(A) {
var len = A.length;
for (var i = 0; i &lt; len - 1; i = i + 1) {
var j_min = i;
for (var j = i + 1; j &lt; len; j = j + 1) {
if (A[j] &lt; A[j_min]) {
j_min = j;
} else {}
}
if (j_min !== i) {
swap(A, i, j_min);
} else {}
}
}
function swap(A, x, y) {
var temp = A[x];
A[x] = A[y];
A[y] = temp;
}
</code></pre><h3 id="implementation-in-python">Implementation in Python</h3><pre><code class="language-ps">def seletion_sort(arr):
if not arr:
return arr
for i in range(len(arr)):
min_i = i
for j in range(i + 1, len(arr)):
if arr[j] &lt; arr[min_i]:
min_i = j
arr[i], arr[min_i] = arr[min_i], arr[i]
</code></pre><h3 id="implementation-in-java">Implementation in Java</h3><pre><code class="language-java">public void selectionsort(int array[])
{
int n = array.length;      //method to find length of array
for (int i = 0; i &lt; n-1; i++)
{
int index = i;
int min = array[i];          // taking the min element as ith element of array
for (int j = i+1; j &lt; n; j++)
{
if (array[j] &lt; array[index])
{
index = j;
min = array[j];
}
}
int t = array[index];         //Interchange the places of the elements
array[index] = array[i];
array[i] = t;
}
}
</code></pre><h3 id="implementation-in-matlab">Implementation in MATLAB</h3><pre><code>function [sorted] = selectionSort(unsorted)
len = length(unsorted);
for i = 1:1:len
minInd = i;
for j = i+1:1:len
if unsorted(j) &lt; unsorted(minInd)
minInd = j;
end
end
unsorted([i minInd]) = unsorted([minInd i]);
end
sorted = unsorted;
end
</code></pre><h3 id="properties-1">Properties</h3><ul><li>Space Complexity: &nbsp;<strong>O(n)</strong></li><li>Time Complexity: &nbsp;<strong>O(n2)</strong></li><li>Sorting in Place: &nbsp;<strong>Yes</strong></li><li>Stable: &nbsp;<strong>No</strong></li></ul><h2 id="bubble-sort">Bubble Sort</h2><p>Just like the way bubbles rise from the bottom of a glass, <strong>bubble sort</strong> is a simple algorithm that sorts a list, allowing either lower or higher values to bubble up to the top. The algorithm traverses a list and compares adjacent values, swapping them if they are not in the correct order.</p><p>With a worst-case complexity of O(n^2), bubble sort is very slow compared to other sorting algorithms like quicksort. The upside is that it is one of the easiest sorting algorithms to understand and code from scratch. </p><p>From technical perspective, bubble sort is reasonable for sorting small-sized arrays or specially when executing sort algorithms on computers with remarkably limited memory resources.</p><h3 id="example--2">Example:</h3><h3 id="first-pass-through-the-list-">First pass through the list:</h3><ul><li>Starting with <code>[4, 2, 6, 3, 9]</code>, the algorithm compares the first two elements in the array, 4 and 2. It swaps them because 2 &lt; 4: <code>[2, 4, 6, 3, 9]</code></li><li>It compares the next two values, 4 and 6. As 4 &lt; 6, these are already in order, and the algorithm moves on: <code>[2, 4, 6, 3, 9]</code></li><li>The next two values are also swapped because 3 &lt; 6: <code>[2, 4, 3, 6, 9]</code></li><li>The last two values, 6 and 9, are already in order, so the algorithm does not swap them.</li></ul><h3 id="second-pass-through-the-list-">Second pass through the list:</h3><ul><li>2 &lt; 4, so there is no need to swap positions: <code>[2, 4, 3, 6, 9]</code></li><li>The algorithm swaps the next two values because 3 &lt; 4: <code>[2, 3, 4, 6, 9]</code></li><li>No swap as 4 &lt; 6: <code>[2, 3, 4, 6, 9]</code></li><li>Again, 6 &lt; 9, so no swap occurs: <code>[2, 3, 4, 6, 9]</code></li></ul><p>The list is already sorted, but the bubble sort algorithm doesn't realize this. Rather, it needs to complete an entire pass through the list without swapping any values to know the list is sorted.</p><h3 id="third-pass-through-the-list-">Third pass through the list:</h3><ul><li><code>[2, 4, 3, 6, 9]</code> =&gt; <code>[2, 4, 3, 6, 9]</code></li><li><code>[2, 4, 3, 6, 9]</code> =&gt; <code>[2, 4, 3, 6, 9]</code></li><li><code>[2, 4, 3, 6, 9]</code> =&gt; <code>[2, 4, 3, 6, 9]</code></li><li><code>[2, 4, 3, 6, 9]</code> =&gt; <code>[2, 4, 3, 6, 9]</code></li></ul><p>Clearly bubble sort is far from the most efficient sorting algorithm. Still, it's simple to wrap your head around and implement yourself. </p><h4 id="properties-2">Properties</h4><ul><li>Space complexity: O(1)</li><li>Best case performance: O(n)</li><li>Average case performance: O(n*n)</li><li>Worst case performance: O(n*n)</li><li>Stable: Yes</li></ul><h3 id="video-explanation">Video Explanation</h3><p><a href="https://www.youtube.com/watch?v=Jdtq5uKz-w4">Bubble sort algorithm</a></p><h3 id="example-in-javascript">Example in JavaScript</h3><pre><code class="language-js">let arr = [1, 4, 7, 45, 7,43, 44, 25, 6, 4, 6, 9],
sorted = false;
while(!sorted) {
sorted = true;
for(var i=0; i &lt; arr.length; i++) {
if(arr[i] &lt; arr[i-1]) {
let temp = arr[i];
arr[i] = arr[i-1];
arr[i-1] = temp;
sorted = false;
}
}
}
</code></pre><h3 id="example-in-java">Example in Java</h3><pre><code class="language-java">public class BubbleSort {
static void sort(int[] arr) {
int n = arr.length;
int temp = 0;
for(int i=0; i &lt; n; i++){
for(int x=1; x &lt; (n-i); x++){
if(arr[x-1] &gt; arr[x]){
temp = arr[x-1];
arr[x-1] = arr[x];
arr[x] = temp;
}
}
}
}
public static void main(String[] args) {
for(int i=0; i &lt; 15; i++){
int arr[i] = (int)(Math.random() * 100 + 1);
}
System.out.println("array before sorting\n");
for(int i=0; i &lt; arr.length; i++){
System.out.print(arr[i] + " ");
}
bubbleSort(arr);
System.out.println("\n array after sorting\n");
for(int i=0; i &lt; arr.length; i++){
System.out.print(arr[i] + " ");
}
}
}
</code></pre><h3 id="example-in-c-">Example in C++</h3><pre><code class="language-cpp">// Recursive Implementation
void bubblesort(int arr[], int n)
{
if(n==1)	//Initial Case
return;
bool swap_flag = false;
for(int i=0;i&lt;n-1;i++)	//After this pass the largest element will move to its desired location.
{
if(arr[i]&gt;arr[i+1])
{
int temp=arr[i];
arr[i]=arr[i+1];
arr[i+1]=temp;
swap_flag = true;
}
}
// IF no two elements were swapped in the loop, then return, as array is sorted
if(swap_flag == false)
return;
bubblesort(arr,n-1);	//Recursion for remaining array
}
</code></pre><h3 id="example-in-swift">Example in Swift</h3><pre><code class="language-swift">func bubbleSort(_ inputArray: [Int]) -&gt; [Int] {
guard inputArray.count &gt; 1 else { return inputArray } // make sure our input array has more than 1 element
var numbers = inputArray // function arguments are constant by default in Swift, so we make a copy
for i in 0..&lt;(numbers.count - 1) {
for j in 0..&lt;(numbers.count - i - 1) {
if numbers[j] &gt; numbers[j + 1] {
numbers.swapAt(j, j + 1)
}
}
}
return numbers // return the sorted array
}
</code></pre><h3 id="example-in-python">Example in Python</h3><pre><code class="language-py">def bubbleSort(arr):
n = len(arr)
for i in range(n):
for j in range(0, n-i-1):
if arr[j] &gt; arr[j+1] :
arr[j], arr[j+1] = arr[j+1], arr[j]
print(arr)
</code></pre><h3 id="example-in-php">Example in PHP</h3><pre><code class="language-php">function bubble_sort($arr) {
$size = count($arr)-1;
for ($i=0; $i&lt;$size; $i++) {
for ($j=0; $j&lt;$size-$i; $j++) {
$k = $j+1;
if ($arr[$k] &lt; $arr[$j]) {
// Swap elements at indices: $j, $k
list($arr[$j], $arr[$k]) = array($arr[$k], $arr[$j]);
}
}
}
return $arr;// return the sorted array
}
$arr = array(1,3,2,8,5,7,4,0);
print("Before sorting");
print_r($arr);
$arr = bubble_sort($arr);
print("After sorting by using bubble sort");
print_r($arr);
</code></pre><h3 id="example-in-c">Example in C</h3><pre><code class="language-c">#include &lt;stdio.h&gt;
int BubbleSort(int array[], int n);
int main(void) {
int arr[] = {10, 2, 3, 1, 4, 5, 8, 9, 7, 6};
BubbleSort(arr, 10);
for (int i = 0; i &lt; 10; i++) {
printf("%d", arr[i]);
}
return 0;
}
int BubbleSort(int array[], n)
{
for (int i = 0 ; i &lt; n - 1; i++)
{
for (int j = 0 ; j &lt; n - i - 1; j++)     //n is length of array
{
if (array[j] &gt; array[j+1])      // For decreasing order use
{
int swap   = array[j];
array[j]   = array[j+1];
array[j+1] = swap;
}
}
}
}
</code></pre><h2 id="quick-sort">Quick Sort</h2><p>Quick sort is an efficient divide and conquer sorting algorithm. Average case time complexity of Quick Sort is O(nlog(n)) with worst case time complexity being O(n^2) depending on the selection of the pivot element, which divides the current array into two sub arrays. </p><p>For instance, the time complexity of Quick Sort is approximately <code>O(nlog(n))</code> when the selection of pivot divides original array into two nearly equal sized sub arrays. </p><p>On the other hand, if the algorithm, which selects of pivot element of the input arrays, consistently outputs 2 sub arrays with a large difference in terms of array sizes, quick sort algorithm can achieve the worst case time complexity of O(n^2).</p><p>The steps involved in Quick Sort are:</p><ul><li>Choose an element to serve as a pivot, in this case, the last element of the array is the pivot.</li><li>Partitioning: Sort the array in such a manner that all elements less than the pivot are to the left, and all elements greater than the pivot are to the right.</li><li>Call Quicksort recursively, taking into account the previous pivot to properly subdivide the left and right arrays. (A more detailed explanation can be found in the comments below)</li></ul><h2 id="example-implementations-in-various-languages">Example Implementations in Various Languages</h2><h3 id="implementation-in-javascript-">Implementation in JavaScript:</h3><pre><code class="language-js">const arr = [6, 2, 5, 3, 8, 7, 1, 4];
const quickSort = (arr, start, end) =&gt; {
if(start &lt; end) {
// You can learn about how the pivot value is derived in the comments below
let pivot = partition(arr, start, end);
// Make sure to read the below comments to understand why pivot - 1 and pivot + 1 are used
// These are the recursive calls to quickSort
quickSort(arr, start, pivot - 1);
quickSort(arr, pivot + 1, end);
}
}
const partition = (arr, start, end) =&gt; {
let pivot = end;
// Set i to start - 1 so that it can access the first index in the event that the value at arr[0] is greater than arr[pivot]
// Succeeding comments will expound upon the above comment
let i = start - 1,
j = start;
// Increment j up to the index preceding the pivot
while (j &lt; pivot) {
// If the value is greater than the pivot increment j
if (arr[j] &gt; arr[pivot]) {
j++;
}
// When the value at arr[j] is less than the pivot:
// increment i (arr[i] will be a value greater than arr[pivot]) and swap the value at arr[i] and arr[j]
else {
i++;
swap(arr, j, i);
j++;
}
}
//The value at arr[i + 1] will be greater than the value of arr[pivot]
swap(arr, i + 1, pivot);
//You return i + 1, as the values to the left of it are less than arr[i+1], and values to the right are greater than arr[i + 1]
// As such, when the recursive quicksorts are called, the new sub arrays will not include this the previously used pivot value
return i + 1;
}
const swap = (arr, firstIndex, secondIndex) =&gt; {
let temp = arr[firstIndex];
arr[firstIndex] = arr[secondIndex];
arr[secondIndex] = temp;
}
quickSort(arr, 0, arr.length - 1);
console.log(arr);
</code></pre><h3 id="implementation-in-c">Implementation in C</h3><pre><code class="language-c">#include&lt;stdio.h&gt;
void swap(int* a, int* b)
{
int t = *a;
*a = *b;
*b = t;
}
int partition (int arr[], int low, int high)
{
int pivot = arr[high];
int i = (low - 1);
for (int j = low; j &lt;= high- 1; j++)
{
if (arr[j] &lt;= pivot)
{
i++;
swap(&amp;arr[i], &amp;arr[j]);
}
}
swap(&amp;arr[i + 1], &amp;arr[high]);
return (i + 1);
}
void quickSort(int arr[], int low, int high)
{
if (low &lt; high)
{
int pi = partition(arr, low, high);
quickSort(arr, low, pi - 1);
quickSort(arr, pi + 1, high);
}
}
void printArray(int arr[], int size)
{
int i;
for (i=0; i &lt; size; i++)
printf("%d ", arr[i]);
printf("n");
}
int main()
{
int arr[] = {10, 7, 8, 9, 1, 5};
int n = sizeof(arr)/sizeof(arr[0]);
quickSort(arr, 0, n-1);
printf("Sorted array: n");
printArray(arr, n);
return 0;
}
</code></pre><h3 id="implementation-in-python3">Implementation in Python3</h3><pre><code>import random
z=[random.randint(0,100) for i in range(0,20)]
def quicksort(z):
if(len(z)&gt;1):
piv=int(len(z)/2)
val=z[piv]
lft=[i for i in z if i&lt;val]
mid=[i for i in z if i==val]
rgt=[i for i in z if i&gt;val]
res=quicksort(lft)+mid+quicksort(rgt)
return res
else:
return z
ans1=quicksort(z)
print(ans1)
</code></pre><h3 id="implementation-in-matlab-1">Implementation in MATLAB</h3><pre><code>a = [9,4,7,3,8,5,1,6,2];
sorted = quicksort(a,1,length(a));
function [unsorted] =  quicksort(unsorted, low, high)
if low &lt; high
[pInd, unsorted] = partition(unsorted, low, high);
unsorted = quicksort(unsorted, low, pInd-1);
unsorted = quicksort(unsorted, pInd+1, high);
end
end
function [pInd, unsorted] = partition(unsorted, low, high)
i = low-1;
for j = low:1:high-1
if unsorted(j) &lt;= unsorted(high)
i = i+1;
unsorted([i,j]) = unsorted([j,i]);
end
end
unsorted([i+1,high]) = unsorted([high,i+1]);
pInd = i+1;
end
</code></pre><p>The space complexity of quick sort is &nbsp;<code>O(n)</code> . This is an improvement over other divide and conquer sorting algorithms, which take &nbsp;<code>O(nlong(n))</code> &nbsp;space. </p><p>Quick sort achieves this by changing the order of elements within the given array. Compare this with the <a href="https://guide.freecodecamp.org/algorithms/sorting-algorithms/merge-sort">merge sort</a> algorithm which creates 2 arrays, each length <code>n/2</code>, in each function call. </p><p>However there does exist the problem of this sorting algorithm being of time &nbsp;<code>O(n*n)</code> &nbsp;if the pivot is always kept at the middle. This can be overcomed by utilizing a random pivot</p><h3 id="complexity">Complexity</h3><p>Best, average, worst, memory: <strong> </strong>n log(n)n log(n)n 2log(n). It's not a stable algorithm, and quicksort is usually done in-place with O(log(n)) stack space.</p><p>The space complexity of quick sort is O(n). This is an improvement over other divide and conquer sorting algorithms, which take O(n log(n)) space.</p><h2 id="timsort">Timsort</h2><p>Timsort is a fast sorting algorithm working at stable O(N log(N)) complexity.</p><p>Timsort is a blend of Insertion Sort and Mergesort. This algorithm is implemented in Java’s Arrays.sort() as well as Python’s sorted() and sort(). The smaller parts are sorted using Insertion Sort and are later merged together using Mergesort.</p><p>A quick implementation in Python:</p><pre><code class="language-py">def binary_search(the_array, item, start, end):
if start == end:
if the_array[start] &gt; item:
return start
else:
return start + 1
if start &gt; end:
return start
mid = round((start + end)/ 2)
if the_array[mid] &lt; item:
return binary_search(the_array, item, mid + 1, end)
elif the_array[mid] &gt; item:
return binary_search(the_array, item, start, mid - 1)
else:
return mid
"""
Insertion sort that timsort uses if the array size is small or if
the size of the "run" is small
"""
def insertion_sort(the_array):
l = len(the_array)
for index in range(1, l):
value = the_array[index]
pos = binary_search(the_array, value, 0, index - 1)
the_array = the_array[:pos] + [value] + the_array[pos:index] + the_array[index+1:]
return the_array
def merge(left, right):
"""Takes two sorted lists and returns a single sorted list by comparing the
elements one at a time.
[1, 2, 3, 4, 5, 6]
"""
if not left:
return right
if not right:
return left
if left[0] &lt; right[0]:
return [left[0]] + merge(left[1:], right)
return [right[0]] + merge(left, right[1:])
def timsort(the_array):
runs, sorted_runs = [], []
length = len(the_array)
new_run = [the_array[0]]
# for every i in the range of 1 to length of array
for i in range(1, length):
# if i is at the end of the list
if i == length - 1:
new_run.append(the_array[i])
runs.append(new_run)
break
# if the i'th element of the array is less than the one before it
if the_array[i] &lt; the_array[i-1]:
# if new_run is set to None (NULL)
if not new_run:
runs.append([the_array[i]])
new_run.append(the_array[i])
else:
runs.append(new_run)
new_run = []
# else if its equal to or more than
else:
new_run.append(the_array[i])
# for every item in runs, append it using insertion sort
for item in runs:
sorted_runs.append(insertion_sort(item))
# for every run in sorted_runs, merge them
sorted_array = []
for run in sorted_runs:
sorted_array = merge(sorted_array, run)
print(sorted_array)
timsort([2, 3, 1, 5, 6, 7])
{
int i, j, k;
// Size of left sublist
int size_left = mid - left + 1;
// Size of right sublist
int size_right =  right - mid;
/* create temp arrays */
int Left[size_left], Right[size_right];
/* Copy data to temp arrays L[] and R[] */
for(i = 0; i &lt; size_left; i++)
{
Left[i] = array[left+i];
}
for(j = 0; j &lt; size_right; j++)
{
Right[j] = array[mid+1+j];
}
// Merge the temp arrays back into arr[left..right]
i = 0; // Initial index of left subarray
j = 0; // Initial index of right subarray
k = left; // Initial index of merged subarray
while (i &lt; size_left &amp;&amp; j &lt; size_right)
{
if (Left[i] &lt;= Right[j])
{
array[k] = Left[i];
i++;
}
else
{
array[k] = Right[j];
j++;
}
k++;
}
// Copy the remaining elements of Left[]
while (i &lt; size_left)
{
array[k] = Left[i];
i++;
k++;
}
// Copy the rest elements of R[]
while (j &lt; size_right)
{
array[k] = Right[j];
j++;
k++;
}
}
void mergeSort(int array[], int left, int right)
{
if(left &lt; right)
{
int mid = (left+right)/2;
// Sort first and second halves
mergeSort(array, left, mid);
mergeSort(array, mid+1, right);
// Finally merge them
merge(array, left, mid, right);
}
}</code></pre><h3 id="javascript-implementation"><strong>JavaScript Implementation</strong></h3><pre><code class="language-js">function mergeSort (arr) {
if (arr.length &lt; 2) return arr;
var mid = Math.floor(arr.length /2);
var subLeft = mergeSort(arr.slice(0,mid));
var subRight = mergeSort(arr.slice(mid));
return merge(subLeft, subRight);
}</code></pre><p>First we check the length of the array. If it is 1 then we simply return the array. This would be our base case. Else, we will find out the middle value and divide the array into two halves. We will now sort both of the halves with recursive calls to MergeSort function.</p><pre><code class="language-js">function merge (a,b) {
var result = [];
while (a.length &gt;0 &amp;&amp; b.length &gt;0)
result.push(a[0] &lt; b[0]? a.shift() : b.shift());
return result.concat(a.length? a : b);
}</code></pre><p>When we merge the two halfs, we store the result in an auxilliary array. We will compare the starting element of left array to the starting element of right array. Whichever is lesser will be pushed into the results array and we will remove it from there respective arrays using [shift() operator. If we still end up with values in either of left or right array, we would simply concatenate it in the end of the result. Here is the sorted result:</p><pre><code class="language-js">var test = [5,6,7,3,1,3,15];
console.log(mergeSort(test));
&gt;&gt; [1, 3, 3, 5, 6, 7, 15]</code></pre><h3 id="a-merge-sort-youtube-tutorial">A Merge Sort YouTube Tutorial</h3><p>Here's a good YouTube video that <a href="https://www.youtube.com/watch?v=TzeBrDU-JaY">walks through the topic in detail</a>.</p><h3 id="implementaion-in-js">Implementaion in JS</h3><pre><code class="language-js">const list = [23, 4, 42, 15, 16, 8, 3]
const mergeSort = (list) =&gt;{
if(list.length &lt;= 1) return list;
const middle = list.length / 2 ;
const left = list.slice(0, middle);
const right = list.slice(middle, list.length);
return merge(mergeSort(left), mergeSort(right));
}
const merge = (left, right) =&gt; {
var result = [];
while(left.length || right.length) {
if(left.length &amp;&amp; right.length) {
if(left[0] &lt; right[0]) {
result.push(left.shift())
} else {
result.push(right.shift())
}
} else if(left.length) {
result.push(left.shift())
} else {
result.push(right.shift())
}
}
return result;
}
console.log(mergeSort(list)) // [ 3, 4, 8, 15, 16, 23, 42 ]
</code></pre><h3 id="implementation-in-c-1">Implementation in C</h3><pre><code class="language-c">#include&lt;stdlib.h&gt;
#include&lt;stdio.h&gt;
void merge(int arr[], int l, int m, int r)
{
int i, j, k;
int n1 = m - l + 1;
int n2 =  r - m;
int L[n1], R[n2];
for (i = 0; i &lt; n1; i++)
L[i] = arr[l + i];
for (j = 0; j &lt; n2; j++)
R[j] = arr[m + 1+ j];
i = 0;
j = 0;
k = l;
while (i &lt; n1 &amp;&amp; j &lt; n2)
{
if (L[i] &lt;= R[j])
{
arr[k] = L[i];
i++;
}
else
{
arr[k] = R[j];
j++;
}
k++;
}
while (i &lt; n1)
{
arr[k] = L[i];
i++;
k++;
}
while (j &lt; n2)
{
arr[k] = R[j];
j++;
k++;
}
}
void mergeSort(int arr[], int l, int r)
{
if (l &lt; r)
{
int m = l+(r-l)/2;
mergeSort(arr, l, m);
mergeSort(arr, m+1, r);
merge(arr, l, m, r);
}
}
void printArray(int A[], int size)
{
int i;
for (i=0; i &lt; size; i++)
printf("%d ", A[i]);
printf("\n");
}
int main()
{
int arr[] = {12, 11, 13, 5, 6, 7};
int arr_size = sizeof(arr)/sizeof(arr[0]);
printf("Given array is \n");
printArray(arr, arr_size);
mergeSort(arr, 0, arr_size - 1);
printf("\nSorted array is \n");
printArray(arr, arr_size);
return 0;
</code></pre><h3 id="implementation-in-c-">Implementation in C++</h3><p>Let us consider array A = {2,5,7,8,9,12,13} and array B = {3,5,6,9,15} and we want array C to be in ascending order as well.</p><pre><code class="language-cpp">void mergesort(int A[],int size_a,int B[],int size_b,int C[])
{
int token_a,token_b,token_c;
for(token_a=0, token_b=0, token_c=0; token_a&lt;size_a &amp;&amp; token_b&lt;size_b; )
{
if(A[token_a]&lt;=B[token_b])
C[token_c++]=A[token_a++];
else
C[token_c++]=B[token_b++];
}
if(token_a&lt;size_a)
{
while(token_a&lt;size_a)
C[token_c++]=A[token_a++];
}
else
{
while(token_b&lt;size_b)
C[token_c++]=B[token_b++];
}
}
</code></pre><h3 id="implementation-in-python-1">Implementation in Python</h3><pre><code class="language-py">def merge(left,right,compare):
result = []
i,j = 0,0
while (i &lt; len(left) and j &lt; len(right)):
if compare(left[i],right[j]):
result.append(left[i])
i += 1
else:
result.append(right[j])
j += 1
while (i &lt; len(left)):
result.append(left[i])
i += 1
while (j &lt; len(right)):
result.append(right[j])
j += 1
return result
def merge_sort(arr, compare = lambda x, y: x &lt; y):
#Used lambda function to sort array in both(increasing and decresing) order.
#By default it sorts array in increasing order
if len(arr) &lt; 2:
return arr[:]
else:
middle = len(arr) // 2
left = merge_sort(arr[:middle], compare)
right = merge_sort(arr[middle:], compare)
return merge(left, right, compare)
arr = [2,1,4,5,3]
print(merge_sort(arr))
</code></pre><h3 id="implementation-in-java-1">Implementation in Java</h3><pre><code class="language-java">public class mergesort {
public static int[] mergesort(int[] arr,int lo,int hi) {
if(lo==hi) {
int[] ba=new int[1];
ba[0]=arr[lo];
return ba;
}
int mid=(lo+hi)/2;
int arr1[]=mergesort(arr,lo,mid);
int arr2[]=mergesort(arr,mid+1,hi);
return merge(arr1,arr2);
}
public static int[] merge(int[] arr1,int[] arr2) {
int i=0,j=0,k=0;
int n=arr1.length;
int m=arr2.length;
int[] arr3=new int[m+n];
while(i&lt;n &amp;&amp; j&lt;m) {
if(arr1[i]&lt;arr2[j]) {
arr3[k]=arr1[i];
i++;
}
else {
arr3[k]=arr2[j];
j++;
}
k++;
}
while(i&lt;n) {
arr3[k]=arr1[i];
i++;
k++;
}
while(j&lt;m) {
arr3[k]=arr2[j];
j++;
k++;
}
return arr3;
}
public static void main(String[] args) {
// TODO Auto-generated method stub
int arr[]= {2,9,8,3,6,4,10,7};
int[] so=mergesort(arr,0,arr.length-1);
for(int i=0;i&lt;arr.length;i++)
System.out.print(so[i]+" ");
}
}
</code></pre><h3 id="example-in-java-1">Example in Java</h3><pre><code class="language-java">public class mergesort {
public static int[] mergesort(int[] arr, int lo, int hi) {
if (lo == hi) {
int[] ba = new int[1];
ba[0] = arr[lo];
return ba;
}
int mid = (lo + hi) / 2;
int arr1[] = mergesort(arr, lo, mid);
int arr2[] = mergesort(arr, mid + 1, hi);
return merge(arr1, arr2);
}
public static int[] merge(int[] arr1, int[] arr2) {
int i = 0, j = 0, k = 0;
int n = arr1.length;
int m = arr2.length;
int[] arr3 = new int[m + n];
while (i &lt; n &amp;&amp; j &lt; m) {
if (arr1[i] &lt; arr2[j]) {
arr3[k] = arr1[i];
i++;
} else {
arr3[k] = arr2[j];
j++;
}
k++;
}
while (i &lt; n) {
arr3[k] = arr1[i];
i++;
k++;
}
while (j &lt; m) {
arr3[k] = arr2[j];
j++;
k++;
}
return arr3;
}
public static void main(String[] args) {
int arr[] = {2, 9, 8, 3, 6, 4, 10, 7};
int[] so = mergesort(arr, 0, arr.length - 1);
for (int i = 0; i &lt; arr.length; i++)
System.out.print(so[i] + " ");
}
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
