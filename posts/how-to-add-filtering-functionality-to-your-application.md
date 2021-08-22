---
card: "/images/default.jpg"
tags: [JavaScript]
description: Suppose you have an application where you want to filter the
author: "Milad E. Fahmy"
title: "How to Add Filtering Functionality to Your Applications"
created: "2021-08-15T19:27:10+02:00"
modified: "2021-08-15T19:27:10+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-react ">
<header class="post-full-header">
<h1 class="post-full-title">How to Add Filtering Functionality to Your Applications</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2021/02/filtering.jpeg 300w,
/news/content/images/size/w600/2021/02/filtering.jpeg 600w,
/news/content/images/size/w1000/2021/02/filtering.jpeg 1000w,
/news/content/images/size/w2000/2021/02/filtering.jpeg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2021/02/filtering.jpeg" alt="How to Add Filtering Functionality to Your Applications">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Suppose you have an application where you want to filter the data based on some criteria like <code>size</code>, <code>color</code>, <code>price</code>, and so on.</p>
<p>In this article, we will see how you can do that.</p>
<p>So let's get started.</p>
<h2 id="initial-setup">Initial Setup</h2>
<p>Let's say we have the following list of products:</p><pre><code class="language-js">const products = [
{ name: 'Macbook Air', price: '180000', ram: 16 },
{ name: 'Samsung Galaxy M21', price: '13999', ram: 4 },
{ name: 'Redmi Note 9', price: '11999', ram: 4 },
{ name: 'OnePlus 8T 5G', price: '45999', ram: 12 }
];</code></pre>
<p>and for filtering, we have two dropdowns – one for sorting by various criteria like <code>price</code> and <code>ram</code>, and the other dropdown is for the order of sorting like <code>descending</code> or <code>ascending</code> as shown below:</p><pre><code class="language-html">&lt;div class="filters"&gt;
&lt;div&gt;
Sort By:
&lt;select class="sort-by"&gt;
&lt;option value=""&gt;Select one&lt;/option&gt;
&lt;option value="price"&gt;Price&lt;/option&gt;
&lt;option value="ram"&gt;Ram&lt;/option&gt;
&lt;/select&gt;
&lt;/div&gt;
&lt;div&gt;
Sort Order:
&lt;select class="sort-order"&gt;
&lt;option value=""&gt;Select one&lt;/option&gt;
&lt;option value="asc"&gt;Ascending&lt;/option&gt;
&lt;option value="desc"&gt;Descending&lt;/option&gt;
&lt;/select&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;div class="products"&gt;&lt;/div&gt;</code></pre>
<h2 id="how-to-display-products-on-the-ui">How to Display Products on the UI</h2>
<p>Let's add a <code>displayProducts</code> function which will display the products on the UI.</p><pre><code class="language-js">const container = document.querySelector(".products");
const displayProducts = (products) =&gt; {
let result = "";
products.forEach(({ name, price, ram }) =&gt; {
result += `
&lt;div class="product"&gt;
&lt;div&gt;&lt;strong&gt;Name:&lt;/strong&gt;&lt;span&gt;${name}&lt;/span&gt;&lt;/div&gt;
&lt;div&gt;&lt;strong&gt;Price:&lt;/strong&gt;&lt;span&gt;${price}&lt;/div&gt;
&lt;div&gt;&lt;strong&gt;Ram:&lt;/strong&gt;&lt;span&gt;${ram} GB&lt;/div&gt;
&lt;/div&gt;
`;
});
container.innerHTML = result;
};
displayProducts(products);</code></pre>
<p>The <code>displayProducts</code> function in the above code loops through the <code>products</code> array using the array <code>forEach</code> method. It generates HTML that'll be displayed using ES6 template literal syntax and inserts it inside the <code>products</code> div.</p>
<p>As we're passing the array of objects to the <code>displayProducts</code> function, we're using ES6 destructuring syntax for the <code>forEach</code> loop callback function to get <code>name</code>, <code>price</code>, and <code>ram</code>.</p>
<p>Here's a <a href="https://codepen.io/myogeshchavan97/pen/LYZaaqQ">Code Pen Demo</a>.</p>
<p>Your initial screen will look like this:</p>
<h2 id="how-to-add-the-filtering-functionality">How to Add the Filtering Functionality</h2>
<p>Now, let's add the filtering functionality.</p>
<p>To handle an onchange event of the <code>Sort By</code> dropdown, we will add an event handler for that.</p><pre><code class="language-js">sortByDropdown.addEventListener('change', () =&gt; {
// some code
};</code></pre>
<p>We have already defined the reference of all the required elements at the top in the above Code Pen as shown below:</p><pre><code class="language-js">const sortByDropdown = document.querySelector(".sort-by");
const sortOrderDropdown = document.querySelector(".sort-order");
const container = document.querySelector(".products");</code></pre>
<p>Now, let's add the sorting logic:</p><pre><code class="language-js">sortByDropdown.addEventListener("change", () =&gt; {
const sortByValue = sortByDropdown.value; // price or ram value
const sortOrderValue = sortOrderDropdown.value; // asc or desc value
const sorted =
sortOrderValue === "desc"
? descendingSort(sortByValue)
: ascendingSort(sortByValue);
displayProducts(sorted);
});</code></pre>
<p>Here, we're checking the value of the second dropdown. If it's <code>desc</code>, we're calling the <code>descendingSort</code> function (which we're yet to define). Otherwise we're calling the <code>ascendingSort</code> function by passing the first dropdown value whether to sort by <code>price</code> or <code>ram</code>.</p>
<p>Then we're passing that result to the <code>displayProducts</code> function so it will update the UI with that sorted products.</p>
<h2 id="how-to-add-sorting-functionality">How to Add Sorting Functionality</h2>
<p>Now, let's add the <code>descendingSort</code> and <code>ascendingSort</code> functions.</p><pre><code class="language-js">const ascendingSort = (sortByValue) =&gt; {
return products.sort((a, b) =&gt; {
if (a[sortByValue] &lt; b[sortByValue]) return -1;
if (a[sortByValue] &gt; b[sortByValue]) return 1;
return 0;
});
};
const descendingSort = (sortByValue) =&gt; {
return products.sort((a, b) =&gt; {
if (a[sortByValue] &lt; b[sortByValue]) return 1;
if (a[sortByValue] &gt; b[sortByValue]) return -1;
return 0;
});
};</code></pre>
<p>Here, we're using the comparator function for the array sort function.</p>
<p>As you know, if we have an object like this:</p><pre><code class="language-js">const product = { name: 'Macbook Air', price: '180000', ram: 16 };</code></pre>
<p>then we can access its properties in two ways:</p>
<ol>
<li>using <code>product.name</code></li>
<li>using <code>product['name']</code></li>
</ol>
<p>As we're having a dynamic value of <code>sortByValue</code> variable, we're using the 2nd way inside the <code>sort</code> function to get the product value (<code>a[sortByValue]</code> or <code>b[sortByValue]</code>).</p>
<h3 id="how-sorting-in-ascending-order-works">How sorting in ascending order works</h3>
<ul>
<li>If the first value to be compared is alphabetically before the second value, a negative value is returned.</li>
<li>If the first value to be compared is alphabetically after the second value, a positive value is returned.</li>
<li>If the first and second values are equal, zero is returned, which will automatically sort the array in ascending order.</li>
</ul>
<h3 id="how-sorting-in-descending-order-works">How sorting in descending order works</h3>
<ul>
<li>If the first value to be compared is alphabetically before the second value, a positive value is returned.</li>
<li>If the first value to be compared is alphabetically after the second value, a negative value is returned.</li>
<li>If the first and second values are equal, zero is returned, which will automatically sort the array in descending order.</li>
</ul>
<blockquote>If you're not familiar with how sorting works for the comparator function, check out <a href="https://levelup.gitconnected.com/array-sort-method-and-its-gotchas-5859ece92e8d?source=friends_link&amp;sk=ad7f5a1b2a301517367783dc543ed908">this article</a> to better understand everything about sorting in JavaScript.</blockquote>
<p>Now, we want to trigger the sorting functionality when we change the sort order dropdown. So let's add an event handler for that also.</p><pre><code class="language-js">sortOrderDropdown.addEventListener("change", () =&gt; {
const event = new Event("change");
const sortByValue = sortByDropdown.value;
if (sortByValue) {
sortByDropdown.dispatchEvent(event);
}
});</code></pre>
<p>Here, we have added the <code>if</code> condition because we don't want to sort the products when the sort by dropdown is not selected.</p>
<p>Here's a <a href="https://codepen.io/myogeshchavan97/pen/vYKPPwV">Code Pen Demo</a>.</p>
<p>Check out the below working functionality demo:</p>
<h2 id="how-to-use-lodash-to-simplify-the-sorting-code">How to Use Lodash to Simplify the Sorting Code</h2>
<p>If you don't want to write your own sorting logic, you can use the <code>orderBy</code> method provided by <a href="https://lodash.com/">lodash</a> which is a very popular utility library.</p>
<blockquote>If you're not familiar with lodash and the powerful functions provided by the library check out <a href="https://levelup.gitconnected.com/extremely-useful-lodash-methods-b38f121fea7e?source=friends_link&amp;sk=558db260b096e7592e02bd328982c0a4">this article</a> for an introduction to its various useful methods.</blockquote>
<p>Let's add the <code>orderBy</code> method on change of the sort by dropdown like this:</p><pre><code class="language-js">sortByDropdown.addEventListener("change", () =&gt; {
const sortByValue = sortByDropdown.value; // price or ram value
const sortOrderValue = sortOrderDropdown.value; // asc or desc value
const sorted = _.orderBy(products, [sortByValue], sortOrderValue);
displayProducts(sorted);
});</code></pre>
<p>and remove both the <code>ascendingSort</code> and <code>descendingSort</code> functions.</p>
<p>For the <code>orderBy</code> method, we have provided</p>
<ul>
<li>the array to sort as the first parameter</li>
<li>the property from the object based on which we need to sort (<code>price</code> or <code>ram</code>) as the second parameter</li>
<li>the sort order (<code>asc</code> or <code>desc</code>) as the third parameter</li>
</ul>
<p>Here's a <a href="https://codepen.io/myogeshchavan97/pen/MWexdJP?editors=0010">Code Pen Demo</a>.</p>
<p>With this <code>orderBy</code> method of lodash, the functionality works exactly the same as before. The only thing is that we don't have to write the sorting logic.</p>
<h3 id="thanks-for-reading-"><strong>Thanks for reading!</strong></h3>
<p>Want to learn all ES6+ features in detail including <code>let</code> and <code>const</code>, promises, various promise methods, array and object destructuring, arrow functions, async/await, import and export and a whole lot more?</p>
<p>Check out my <a href="https://modernjavascript.yogeshchavan.dev/?coupon=LA1HR55">Mastering Modern JavaScript</a> book. This book covers all the pre-requisites for learning React and helps you to become better at JavaScript and React.</p>
<p>Also, check out my <strong>free</strong> <a href="https://yogeshchavan1.podia.com/react-router-introduction">Introduction to React Router</a> course to learn React Router from scratch.</p>
<p><strong><strong>Want to stay up to date with regular content regarding JavaScript, React, Node.js? <a href="https://www.linkedin.com/in/yogesh-chavan97/">Follow me on LinkedIn</a>.</strong></strong></p>
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
