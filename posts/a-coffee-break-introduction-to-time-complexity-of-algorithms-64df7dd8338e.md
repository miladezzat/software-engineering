---
card: "https://cdn-media-1.freecodecamp.org/images/1*_YsSsyFQ5sgS8F0kiZ1USA.png"
tags: [Programming]
description: "Just like writing your very first for loop, understanding tim"
author: "Milad E. Fahmy"
title: "A coffee-break introduction to time complexity of algorithms"
created: "2021-08-16T11:43:14+02:00"
modified: "2021-08-16T11:43:14+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-programming tag-algorithms tag-technology tag-tech tag-learning ">
<header class="post-full-header">
<h1 class="post-full-title">A coffee-break introduction to time complexity of algorithms</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*_YsSsyFQ5sgS8F0kiZ1USA.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*_YsSsyFQ5sgS8F0kiZ1USA.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*_YsSsyFQ5sgS8F0kiZ1USA.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*_YsSsyFQ5sgS8F0kiZ1USA.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*_YsSsyFQ5sgS8F0kiZ1USA.png" alt="A coffee-break introduction to time complexity of algorithms">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
return cupcakes[0]
for chip := 0; chip &lt;= bowlOfChips; chip++ {
// dip chip
}
}</code></pre><p>Here’s another example of code with time complexity of <em>O</em>(<em>n</em>):</p><pre><code class="language-js">func eatChips(bowlOfChips int) {
for chip := 0; chip &lt;= bowlOfChips; chip++ {
// double dip chip
}
for pizza := 0; pizza &lt;= pizzas; pizza++ {
// slice pizza
for slice := 0; slice &lt;= pizza; slice++ {
// eat slice of pizza
}
}
for pizzaBox := 0; pizzaBox &lt;= boxesDelivered; pizzaBox++ {
// open box
for pizza := 0; pizza &lt;= pizzaBox; pizza++ {
// slice pizza
for slice := 0; slice &lt;= pizza; slice++ {
// eat slice of pizza
}
}
}
if pies == 0 {
return pies
}
return eatPies(pies - 1)
import "fmt"
func takeCupcake(cupcakes []int) int {
fmt.Println("Have cupcake number",cupcakes[0])
return cupcakes[0]
}
func eatChips(bowlOfChips int) {
fmt.Println("Have some chips!")
for chip := 0; chip &lt;= bowlOfChips; chip++ {
// dip chip
}
fmt.Println("No more chips.")
}
func pizzaDelivery(boxesDelivered int) {
fmt.Println("Pizza is here!")
for pizzaBox := 0; pizzaBox &lt;= boxesDelivered; pizzaBox++ {
// open box
for pizza := 0; pizza &lt;= pizzaBox; pizza++ {
// slice pizza
for slice := 0; slice &lt;= pizza; slice++ {
// eat slice of pizza
}
}
}
fmt.Println("Pizza is gone.")
}
func eatPies(pies int) int {
if pies == 0 {
fmt.Println("Someone ate all the pies!")
return pies
}
fmt.Println("Eating pie...")
return eatPies(pies - 1)
}
func main() {
takeCupcake([]int{1, 2, 3})
eatChips(23)
pizzaDelivery(3)
eatPies(3)
fmt.Println("Food gone. Back to work!")
Have some chips!
No more chips.
Pizza is here!
Pizza is gone.
Eating pie...
Eating pie...
Eating pie...
Someone ate all the pies!
for scoop := 0; scoop &lt;= scoops; scoop++ {
// add instant coffee
}
}
func makeStrongCoffee(scoops int) {
for scoop := 0; scoop &lt;= 3*scoops; scoop++ {
// add instant coffee
}
}</code></pre><p>The first function makes a cup of coffee with the number of scoops we ask for. The second function also makes a cup of coffee, but it triples the number of scoops we ask for. To see an illustrative example, let’s ask both these functions for a cup of coffee with a million scoops.</p><p>Here’s the output of the Go test:</p><pre><code>Benchmark_makeCoffee-4    1000000000             0.29 ns/op
Benchmark_makeStrongCoffee-4    1000000000       0.86 ns/op</code></pre><p>Our first function, <code>makeCoffee</code>, completed in an average 0.29 nanoseconds. Our second function, <code>makeStrongCoffee</code>, completed in an average of 0.86 nanoseconds. While those may both seem like pretty small numbers, consider that the stronger coffee took nearly three times longer to make. This should make sense intuitively, since we asked it to triple the scoops. Big O notation alone wouldn’t tell you this, since the constant factor of the tripled scoops isn’t accounted for.</p><h3 id="improve-time-complexity-of-existing-code">Improve time complexity of existing code</h3><p>Becoming familiar with time complexity gives us the opportunity to write code, or refactor code, to be more efficient. To illustrate, I’ll give a concrete example of one way we can refactor a bit of code to improve its time complexity.</p><p>Let’s say a bunch of people at the office want some pie. Some people want pie more than others. The amount that everyone wants some pie is represented by an <code>int</code> &gt; 0:</p><pre><code>diners := []int{2, 88, 87, 16, 42, 10, 34, 1, 43, 56}</code></pre><p>Unfortunately, we’re bootstrapped and there are only three forks to go around. Since we’re a cooperative bunch, the three people who want pie the most will receive the forks to eat it with. Even though they’ve all agreed on this, no one seems to want to sort themselves out and line up in an orderly fashion, so we’ll have to make do with everybody jumbled about.</p><p>Without sorting the list of diners, return the three largest integers in the slice.</p><p>Here’s a function that solves this problem and has <em>O</em>(<em>n</em>2) time complexity:</p><pre><code class="language-js">func giveForks(diners []int) []int {
// make a slice to store diners who will receive forks
var withForks []int
// loop over three forks
for i := 1; i &lt;= 3; i++ {
// variables to keep track of the highest integer and where it is
var max, maxIndex int
// loop over the diners slice
for n := range diners {
// if this integer is higher than max, update max and maxIndex
if diners[n] &gt; max {
max = diners[n]
maxIndex = n
}
}
// remove the highest integer from the diners slice for the next loop
diners = append(diners[:maxIndex], diners[maxIndex+1:]...)
// keep track of who gets a fork
withForks = append(withForks, max)
}
return withForks
}</code></pre><p>This program works, and eventually returns diners <code>[88 87 56]</code>. Everyone gets a little impatient while it’s running though, since it takes rather a long time (about 120 nanoseconds) just to hand out three forks, and the pie’s getting cold. How could we improve it?</p><p>By thinking about our approach in a slightly different way, we can refactor this program to have <em>O</em>(<em>n</em>) time complexity:</p><pre><code class="language-js">func giveForks(diners []int) []int {
// make a slice to store diners who will receive forks
var withForks []int
// create variables for each fork
var first, second, third int
// loop over the diners
for i := range diners {
// assign the forks
if diners[i] &gt; first {
third = second
second = first
first = diners[i]
} else if diners[i] &gt; second {
third = second
second = diners[i]
} else if diners[i] &gt; third {
third = diners[i]
}
}
// list the final result of who gets a fork
withForks = append(withForks, first, second, third)
return withForks
}</code></pre><p>Here’s how the new program works:</p><p>Initially, diner <code>2</code> (the first in the list) is assigned the <code>first</code> fork. The other forks remain unassigned.</p><p>Then, diner <code>88</code> is assigned the first fork instead. Diner <code>2</code> gets the <code>second</code> one.</p><p>Diner <code>87</code> isn’t greater than <code>first</code> which is currently <code>88</code>, but it is greater than <code>2</code> who has the <code>second</code> fork. So, the <code>second</code> fork goes to <code>87</code>. Diner <code>2</code> gets the <code>third</code> fork.</p><p>Continuing in this violent and rapid fork exchange, diner <code>16</code> is then assigned the <code>third</code> fork instead of <code>2</code>, and so on.</p><p>We can add a print statement in the loop to see how the fork assignments play out:</p><pre><code>0 0 0
2 0 0
88 2 0
88 87 2
88 87 16
88 87 42
88 87 42
88 87 42
88 87 42
88 87 43
[88 87 56]</code></pre><p>This program is much faster, and the whole epic struggle for fork domination is over in 47 nanoseconds.</p><p>As you can see, with a little change in perspective and some refactoring, we’ve made this simple bit of code faster and more efficient.</p><p>Well, it looks like our fifteen minute coffee break is up! I hope I’ve given you a comprehensive introduction to calculating time complexity. Time to get back to work, hopefully applying your new knowledge to write more effective code! Or maybe just sound smart at your next office party. :)</p><h3 id="sources">Sources</h3><blockquote>“If I have seen further it is by standing on the shoulders of Giants.” –Isaac Newton, 1675</blockquote><ol><li>Antti Laaksonen. <a href="https://cses.fi/book.pdf" rel="noopener"><em>Competitive Programmer’s Handbook (pdf)</em></a><em>,</em> 2017</li><li>Wikipedia: <a href="https://en.wikipedia.org/wiki/Big_O_notation" rel="noopener">Big O notation</a></li><li>StackOverflow: <a href="https://stackoverflow.com/a/487278" rel="noopener">What is a plain English explanation of “Big O” notation?</a></li><li>Wikipedia: <a href="https://en.wikipedia.org/wiki/Polynomial" rel="noopener">Polynomial</a></li><li>Wikipedia: <a href="https://en.wikipedia.org/wiki/NP-completeness" rel="noopener">NP-completeness</a></li><li>Wikipedia: <a href="https://en.wikipedia.org/wiki/NP-hardness" rel="noopener">NP-hardness</a></li><li><a href="https://www.desmos.com/" rel="noopener">Desmos graph calculator</a></li></ol><p><em>Thanks for reading! If you found this post useful, please share it with someone else who might benefit from it too!</em></p>
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
