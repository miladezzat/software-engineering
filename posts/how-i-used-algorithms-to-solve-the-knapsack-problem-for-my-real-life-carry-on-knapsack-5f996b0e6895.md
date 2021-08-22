---
card: "https://cdn-media-1.freecodecamp.org/images/1*Vu-yZ0y22GkbnJ0K3zregw.png"
tags: [Programming]
description: "I’m a nomad and live out of one carry-on bag. This means that"
author: "Milad E. Fahmy"
title: "How I used algorithms to solve the knapsack problem for my real-life carry-on knapsack"
created: "2021-08-15T23:48:10+02:00"
modified: "2021-08-15T23:48:10+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-programming tag-algorithms tag-coding tag-golang tag-tech ">
<header class="post-full-header">
<h1 class="post-full-title">How I used algorithms to solve the knapsack problem for my real-life carry-on knapsack</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*Vu-yZ0y22GkbnJ0K3zregw.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*Vu-yZ0y22GkbnJ0K3zregw.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*Vu-yZ0y22GkbnJ0K3zregw.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*Vu-yZ0y22GkbnJ0K3zregw.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*Vu-yZ0y22GkbnJ0K3zregw.png" alt="How I used algorithms to solve the knapsack problem for my real-life carry-on knapsack">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
import (
"fmt"
"io/ioutil"
)
func check(e error) {
if e != nil {
panic(e)
}
}
func readItems(path string) {
dat, err := ioutil.ReadFile(path)
check(err)
fmt.Print(string(dat))
}</code></pre><p>The <code>ReadFile()</code> function takes a file path and returns the file’s contents and an error (<code>nil</code> if the call is successful) so we’ve also created a <code>check()</code> function to handle any errors that might be returned. In a real-world application, we probably would want to do something more sophisticated than <code>panic</code>, but that’s not important right now.</p><h4 id="creating-a-struct">Creating a struct</h4><p>Now that we’ve got our data, we should probably do something with it. Since we’re working with real-life items and a real-life bag, let’s create some types to represent them and make it easier to conceptualize our program. A <code>struct</code> in Go is a typed collection of fields. Here are our two types:</p><pre><code class="language-go">type item struct {
name    string
worth, weight int
}
type bag struct {
bagWeight, currItemsWeight, maxItemsWeight, totalWeight int
items                                             []item
}</code></pre><p>It is helpful to use field names that are very descriptive. You can see that the structs are set up just as we’ve described the things they represent. An <code>item</code> has a <code>name</code> (string), and a <code>worth</code> and <code>weight</code> (integers). A <code>bag</code> has several fields of type <code>int</code> representing its attributes, and also has the ability to hold <code>items</code>, represented in the struct as a slice of <code>item</code> type thingamabobbers.</p><h4 id="parsing-and-storing-our-data">Parsing and storing our data</h4><p>Several comprehensive Go packages exist that we could use to parse our CSV data… but where’s the fun in that? Let’s go basic with some string splitting and a for loop. Here’s our updated <code>readItems()</code> function:</p><pre><code class="language-go">func readItems(path string) []item {
dat, err := ioutil.ReadFile(path)
check(err)
lines := strings.Split(string(dat), "\n")
itemList := make([]item, 0)
for i, v := range lines {
if i == 0 {
continue
}
s := strings.Split(v, ",")
newItemWorth, _ := strconv.Atoi(s[1])
newItemWeight, _ := strconv.Atoi(s[2])
newItem := item{name: s[0], worth: newItemWorth, weight: newItemWeight}
itemList = append(itemList, newItem)
}
return itemList
}</code></pre><p>Using <code>strings.Split</code>, we split our <code>dat</code> on newlines. We then create an empty <code>itemList</code> to hold our items.</p><p>In our for loop, we skip the first line of our CSV file (the headers) then iterate over each line. We use <code>strconv.Atoi</code> (read “A to i”) to convert the values for each item’s worth and weight into integers. We then create a <code>newItem</code> with these field values and append it to the <code>itemList</code>. Finally, we return <code>itemList</code>.</p><p>Here’s what our set up looks like so far:</p><pre><code class="language-go">package main
import (
"io/ioutil"
"strconv"
"strings"
)
type item struct {
name    string
worth, weight int
}
type bag struct {
bagWeight, currItemsWeight, maxItemsWeight, totalWeight, totalWorth int
items                                                         []item
}
func check(e error) {
if e != nil {
panic(e)
}
}
func readItems(path string) []item {
dat, err := ioutil.ReadFile(path)
check(err)
lines := strings.Split(string(dat), "\n")
itemList := make([]item, 0)
for i, v := range lines {
if i == 0 {
continue // skip the headers on the first line
}
s := strings.Split(v, ",")
newItemWorth, _ := strconv.Atoi(s[1])
newItemWeight, _ := strconv.Atoi(s[2])
newItem := item{name: s[0], worth: newItemWorth, weight: newItemWeight}
itemList = append(itemList, newItem)
}
return itemList
}</code></pre><p>Now that we’ve got our data structures set up, let’s get packing (?) on the first approach.</p><h3 id="greedy-algorithm">Greedy algorithm</h3><p>A greedy algorithm is the most straightforward approach to solving the knapsack problem, in that it is a one-pass algorithm that constructs a single final solution. At each stage of the problem, the greedy algorithm picks the option that is locally optimal, meaning it looks like the most suitable option right now. It does not revise its previous choices as it progresses through our data set.</p><h4 id="building-our-greedy-algorithm">Building our greedy algorithm</h4><p>The steps of the algorithm we’ll use to solve our knapsack problem are:</p><ol><li>Sort items by worth, in descending order.</li><li>Start with the highest worth item. Put items into the bag until the next item on the list cannot fit.</li><li>Try to fill any remaining capacity with the next item on the list that can fit.</li></ol><p>If you read my <a href="https://victoria.dev/verbose/how-to-code-a-satellite-algorithm-and-cook-paella-from-scratch/">article about solving problems and making paella</a>, you’ll know that I always start by figuring out what the next most important question is. In this case, there are three main operations we need to figure out how to do:</p><ul><li>Sort items by worth.</li><li>Put an item in the bag.</li><li>Check to see if the bag is full.</li></ul><p>The first one is just a docs lookup away. Here’s how we sort a slice in Go:</p><pre><code class="language-go">sort.Slice(is, func(i, j int) bool {
return is[i].worth &gt; is[j].worth
})</code></pre><p>The <code>sort.Slice()</code> function orders our items according to the less function we provide. In this case, it will order the highest worth items before the lowest worth items.</p><p>Given that we don’t want to put an item in the bag if it doesn’t fit, we’ll complete the last two tasks in reverse. First, we’ll check to see if the item fits. If so, it goes in the bag.</p><pre><code class="language-go">func (b *bag) addItem(i item) error {
if b.currItemsWeight+i.weight &lt;= b.maxItemsWeight {
b.currItemsWeight += i.weight
b.items = append(b.items, i)
return nil
}
return errors.New("could not fit item")
}</code></pre><p>Notice the <code>*</code> in our first line there. That indicates that <code>bag</code> is a pointer receiver (as opposed to a value receiver). It’s a concept that can be slightly confusing if you’re new to Go. Here are <a href="https://github.com/golang/go/wiki/CodeReviewComments#receiver-type" rel="noopener">some things to consider</a> that might help you decide when to use a value receiver and when to use a pointer receiver. For the purposes of our <code>addItem()</code> function, this case applies:</p><blockquote><em>If the method needs to mutate the receiver, the receiver must be a pointer.</em></blockquote><p>Our use of a pointer receiver tells our function we want to operate on <em>this specific bag in particular</em>, not a new bag. It’s important because without it, every item would always fit in a newly created bag! A little detail like this can make the difference between code that works and code that keeps you up until 4am chugging Red Bull and muttering to yourself. (Go to bed on time even if your code doesn’t work — you’ll thank me later.)</p><p>Now that we’ve got our components, let’s put together our greedy algorithm:</p><pre><code class="language-go">func greedy(is []item, b bag) {
sort.Slice(is, func(i, j int) bool {
return is[i].worth &gt; is[j].worth
})
for i := range is {
b.addItem(is[i])
}
b.totalWeight = b.bagWeight + b.currItemsWeight
for _, v := range b.items {
b.totalWorth += v.worth
}
}</code></pre><p>Then in our <code>main()</code> function, we’ll create our bag, read in our data, and call our greedy algorithm. Here’s what it looks like, all set up and ready to go:</p><pre><code class="language-go">func main() {
minaal := bag{bagWeight: 1415, currItemsWeight: 0, maxItemsWeight: 5585}
itemList := readItems("objects.csv")
greedy(itemList, minaal)
for i := range matrix {
matrix[i] = make([]int, capacity+1) // columns representing grams of weight
}</code></pre><p>We’ve padded the rows and columns by <code>1</code> so that the indicies match the item and weight numbers.</p><p>Now that we’ve created our matrix, we’ll fill it by looping over the rows and the columns:</p><pre><code class="language-go">// loop through table rows
for i := 1; i &lt;= numItems; i++ {
// loop through table columns
for w := 1; w &lt;= capacity; w++ {
// do stuff in each element
}
}</code></pre><p>Then for each element, we’ll calculate the worth value to ascribe to it. We do this with code that represents the following process:</p><p>If the item at the index matching the current row fits within the weight capacity represented by the current column, take the maximum of either:</p><ul><li>The total worth of the items already in the bag or,</li><li>The total worth of all the items in the bag except the item at the previous row index, plus the new item’s worth.</li></ul><p>In other words, as our algorithm considers one of the items, we’re asking it to decide whether this item added to the bag would produce a higher total worth than the last item it added to the bag, at the bag’s current total weight. If this current item is a better choice, put it in — if not, leave it out.</p><p>Here’s the code that accomplishes this:</p><pre><code class="language-go">// if weight of item matching this index can fit at the current capacity column...
if is[i-1].weight &lt;= w {
// worth of this subset without this item
valueOne := float64(matrix[i-1][w])
// worth of this subset without the previous item, and this item instead
valueTwo := float64(is[i-1].worth + matrix[i-1][w-is[i-1].weight])
// take maximum of either valueOne or valueTwo
matrix[i][w] = int(math.Max(valueOne, valueTwo))
// if the new worth is not more, carry over the previous worth
} else {
matrix[i][w] = matrix[i-1][w]
if i &lt;= 0 || w &lt;= 0 {
return
}
pick := matrix[i][w]
if pick != matrix[i-1][w] {
b.addItem(is[i-1])
checkItem(b, i-1, w-is[i-1].weight, is, matrix)
} else {
checkItem(b, i-1, w, is, matrix)
}
}</code></pre><p>Our <code>checkItem()</code> function calls itself if the condition we described in step 4 is true. If step 3 is true, it also calls itself, but with different arguments.</p><p>Recursive functions require a base case. In this example, we want the function to stop once we run out of values of worth to compare. Thus our base case is when either <code>i</code> or <code>w</code> are <code>0</code>.</p><p>Here’s how the dynamic programming approach looks when it’s all put together:</p><pre><code class="language-go">func checkItem(b *bag, i int, w int, is []item, matrix [][]int) {
if i &lt;= 0 || w &lt;= 0 {
return
}
pick := matrix[i][w]
if pick != matrix[i-1][w] {
b.addItem(is[i-1])
checkItem(b, i-1, w-is[i-1].weight, is, matrix)
} else {
checkItem(b, i-1, w, is, matrix)
}
}
func dynamic(is []item, b *bag) *bag {
numItems := len(is)    // number of items in knapsack
capacity := b.maxItemsWeight // capacity of knapsack
// create the empty matrix
matrix := make([][]int, numItems+1) // rows representing items
for i := range matrix {
matrix[i] = make([]int, capacity+1) // columns representing grams of weight
}
// loop through table rows
for i := 1; i &lt;= numItems; i++ {
// loop through table columns
for w := 1; w &lt;= capacity; w++ {
// if weight of item matching this index can fit at the current capacity column...
if is[i-1].weight &lt;= w {
// worth of this subset without this item
valueOne := float64(matrix[i-1][w])
// worth of this subset without the previous item, and this item instead
valueTwo := float64(is[i-1].worth + matrix[i-1][w-is[i-1].weight])
// take maximum of either valueOne or valueTwo
matrix[i][w] = int(math.Max(valueOne, valueTwo))
// if the new worth is not more, carry over the previous worth
} else {
matrix[i][w] = matrix[i-1][w]
}
}
}
checkItem(b, numItems, capacity, is, matrix)
// add other statistics to the bag
b.totalWorth = matrix[numItems][capacity]
b.totalWeight = b.bagWeight + b.currItemsWeight
return b
for i := range itemList {
j := rand.Intn(i + 1)
itemList[i], itemList[j] = itemList[j], itemList[i]
}</code></pre><p>Of course I then realized that Go 1.10 now has a built-in shuffle. It works precisely the same way and looks like this:</p><pre><code class="language-go">rand.Shuffle(len(itemList), func(i, j int) {
itemList[i], itemList[j] = itemList[j], itemList[i]
import (
"testing"
)
func Benchmark_greedy(b *testing.B) {
itemList := readItems("objects.csv")
for i := 0; i &lt; b.N; i++ {
minaal := bag{bagWeight: 1415, currItemsWeight: 0, maxItemsWeight: 5585}
greedy(itemList, minaal)
}
}
func Benchmark_dynamic(b *testing.B) {
itemList := readItems("objects.csv")
for i := 0; i &lt; b.N; i++ {
minaal := bag{bagWeight: 1415, currItemsWeight: 0, maxItemsWeight: 5585}
dynamic(itemList, &amp;minaal)
}
}</code></pre><p>We can run <code>go test -bench=. -benchmem</code> to see these results:</p><pre><code class="language-sh">Benchmark_greedy-4 1000000              1619 ns/op            2128 B/op          9 allocs/op
Benchmark_dynamic-4   1000           1545322 ns/op         2020332 B/op         49 allocs/op
</code></pre><h4 id="greedy-algorithm-performance">Greedy algorithm performance</h4><p>After running the greedy algorithm 1,000,000 times, the speed of the algorithm was reliably measured to be 0.001619 milliseconds (translation: very fast). It required 2128 Bytes or 2-ish kilobytes of memory and 9 distinct memory allocations per iteration.</p><h4 id="dynamic-programming-performance">Dynamic programming performance</h4><p>The dynamic programming algorithm was run 1,000 times. Its speed was measured to be 1.545322 milliseconds or 0.001545322 seconds (translation: still pretty fast). It required 2,020,332 Bytes or 2-ish Megabytes, and 49 distinct memory allocations per iteration.</p><h3 id="the-verdict">The verdict</h3><p>Part of choosing the right approach to solving any programming problem is taking into account the size of the input data set. In this case, it’s a small one. In this scenario, a one-pass greedy algorithm will always be faster and less resource-needy than dynamic programming, simply because it has fewer steps. Our greedy algorithm was almost two orders of magnitude faster and less memory-hungry than our dynamic programming algorithm.</p><p>Not having those extra steps, however, means that getting the best possible solution from the greedy algorithm is unlikely.</p><p>It’s clear that the dynamic programming algorithm gave us better numbers: a lower weight, and higher overall worth.</p><h4 id="greedy-algorithm-1">Greedy algorithm</h4><ul><li>Total weight: 6987g</li><li>Total worth: 716</li></ul><h4 id="dynamic-programming-1">Dynamic programming</h4><ul><li>Total weight: 6955g</li><li>Total worth: 757</li></ul><p>Where dynamic programming on small data sets lacks in performance, it makes up in optimization. The question then becomes whether that additional optimization is worth the performance cost.</p><p>“Better,” of course, is a subjective judgement. If speed and low resource usage is our success metric, then the greedy algorithm is clearly better. If the total worth of items in the bag is our success metric, then dynamic programming is clearly better.</p><p>However, our scenario is a practical one, and only one of these algorithm designs returned an answer I’d choose. In optimizing for the overall greatest possible total worth of the items in the bag, the dynamic programming algorithm left out my highest-worth, but also heaviest, item: my laptop. The chargers and cables, Roost stand, and keyboard that were included aren’t much use without it.</p><h3 id="better-algorithm-design">Better algorithm design</h3><p>There’s a simple way to alter the dynamic programming approach so that the laptop is always included: we can modify the data so that the worth of the laptop is greater than the sum of the worth of all the other items. (Try it out!)</p><p>Perhaps in re-designing the dynamic programming algorithm to be more practical, we might choose another success metric that better reflects an item’s importance, instead of a subjective worth value. There are many possible metrics we can use to represent the value of an item. Here are a few examples of a good proxy:</p><ul><li>Amount of time spent using the item</li><li>Initial cost of purchasing the item</li><li>Cost of replacement if the item were lost today</li><li>Dollar value of the product of using the item</li></ul><p>By the same token, the greedy algorithm’s results might be improved with the use of one of these alternate metrics.</p><p>On top of choosing an appropriate approach to solving the knapsack problem in general, it is helpful to design our algorithm in a way that translates the practicalities of a scenario into code.</p><p>There are many considerations for better algorithm design beyond the scope of this introductory post that I plan to cover (some of) in later articles. A future algorithm may very well decide my bag’s contents on the next trip, but we’re not quite there yet. Stay tuned!</p><p><em>Thanks for reading! I hope this article has given you a better idea of how these two common approaches work. If you’d like to learn more about how I live out of one carry-on bag, check out my nomad blog at <a href="https://heronebag.com/" rel="noopener">herOneBag.com</a>.</em></p><p><em>Have a really great day. :)</em></p>
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
