---
card: "/images/default.jpg"
tags: [React]
description: "In this beginner React tutorial, we re going to build a shopp"
author: "Milad E. Fahmy"
title: "How to Build a Shopping List Using React Hooks (w/ Starter Code and Video Walkthrough)"
created: "2021-08-16T10:04:32+02:00"
modified: "2021-08-16T10:04:32+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-react tag-react-hooks tag-web-development tag-projects ">
<header class="post-full-header">
<h1 class="post-full-title">How to Build a Shopping List Using React Hooks (w/ Starter Code and Video Walkthrough)</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/10/Copy-of-Build-a-Temperature-control-App--2-.png 300w,
/news/content/images/size/w600/2020/10/Copy-of-Build-a-Temperature-control-App--2-.png 600w,
/news/content/images/size/w1000/2020/10/Copy-of-Build-a-Temperature-control-App--2-.png 1000w,
/news/content/images/size/w2000/2020/10/Copy-of-Build-a-Temperature-control-App--2-.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/10/Copy-of-Build-a-Temperature-control-App--2-.png" alt="How to Build a Shopping List Using React Hooks (w/ Starter Code and Video Walkthrough)">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>In this beginner React tutorial, we're going to build a shopping app. We'll work with complex state objects, update parts of the state, and use existing state to calculate new state.</p>
<p>Check it out here:</p>
<p><img src="https://jschris.com/41168097024a0b0e7b306a91023114b8/project.gif" alt=""></p>
<h2 id="tryityourself">Try it yourself</h2>
<p>If you want to have a go yourself first, here are the scenarios (you can also grab the starter code below):</p>
<ul>
<li>The user should be able to add new items to the list, by typing into the input and clicking the "+" symbol</li>
<li>The user should be able to increase/decrease the quantities of a particular item</li>
<li>The total should show the total quantity for all the items in the list</li>
</ul>
<h2 id="videowalkthrough">Video walkthrough</h2>
<iframe width="560" height="315" src="https://www.youtube.com/embed/_N6LQd6Y2UY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
<h2 id="startercode">Starter Code</h2>
<p><a href="https://github.com/chrisblakely01/simple-shopping-list">Grab it over on GitHub here</a></p>
<h2 id="howtodisplayalistofitems">How to display a list of items</h2>
<p>The first thing we're going to do is display a list of items. If you working with the starter code, you'll see that I've added a state object:</p>
<pre><code class="language-jsx">const [items, setItems] = useState([]);
</code></pre>
<p>We're going to initialise this with an array of objects. We'll then use the map function to loop over this list and display the items.</p>
<p>Replace the above line with the following:</p>
<pre><code class="language-jsx">const [items, setItems] = useState([
{ itemName: 'item 1', quantity: 1, isSelected: false },
{ itemName: 'item 2', quantity: 3, isSelected: true },
{ itemName: 'item 3', quantity: 2, isSelected: false },
]);
</code></pre>
<p>You'll notice that each item in the array is an <strong>object</strong>. This object represents each item (or row) and holds the things we'll need to display:</p>
<ul>
<li>The item's name</li>
<li>The quantity</li>
<li>A flag which we'll use to display a "tick" or "empty circle"</li>
</ul>
<blockquote>
<p>The reason we put this list in state as an array is because the list will change. When we want to change the list, we just add things to or remove them from the array and React will automatically update the UI for us.</p>
</blockquote>
<p>Ok now we just have to add a map function to our JSX and loop over this array and display the properties on the UI.</p>
<p>Replace the <strong>item list div</strong> with the following:</p>
<pre><code class="language-jsx">&lt;div className='item-list'&gt;
{items.map((item, index) =&gt; (
&lt;div className='item-container'&gt;
&lt;div className='item-name'&gt;
{item.isSelected ? (
&lt;&gt;
&lt;FontAwesomeIcon icon={faCheckCircle} /&gt;
&lt;span className='completed'&gt;{item.itemName}&lt;/span&gt;
&lt;/&gt;
) : (
&lt;&gt;
&lt;FontAwesomeIcon icon={faCircle} /&gt;
&lt;span&gt;{item.itemName}&lt;/span&gt;
&lt;/&gt;
)}
&lt;/div&gt;
&lt;div className='quantity'&gt;
&lt;button&gt;
&lt;FontAwesomeIcon icon={faChevronLeft} /&gt;
&lt;/button&gt;
&lt;span&gt; {item.quantity} &lt;/span&gt;
&lt;button&gt;
&lt;FontAwesomeIcon icon={faChevronRight} /&gt;
&lt;/button&gt;
&lt;/div&gt;
&lt;/div&gt;
))}
&lt;/div&gt;
</code></pre>
<p>Let's walk through this.</p>
<ul>
<li>
<p>We've introduced the map function. It will loop over the items in the <strong>items</strong> array and display a bunch of JSX for each <strong>item</strong>. Remember, the map function gives us the <strong>current object it is currently on as a variable</strong> so we can access its properties.</p>
</li>
<li>
<p>We're using a ternary to check the <strong>item.isSelected</strong> variable. If the variable is true, we display a "tick" with a strikethrough. If the value is false, we display an "empty circle" along with the item name.</p>
</li>
<li>
<p>We're also displaying the quantity for that particular item.</p>
</li>
</ul>
<h2 id="howtostorewhattheusertypesinstate">How to store what the user types in state</h2>
<p>Now that we've got some items displaying, we'll let the user add some items to the list. It wouldn't be a very good shopping list if they couldn't add things to it!</p>
<p>You'll see in the starter code that I've included an input:</p>
<pre><code class="language-jsx">&lt;div className='add-item-box'&gt;
&lt;input className='add-item-input' placeholder='Add an item...' /&gt;
&lt;FontAwesomeIcon icon={faPlus} /&gt;
&lt;/div&gt;
</code></pre>
<p>At the moment this doesn't do very much. We need to give control to React so that we can easily work with the value the user typed.</p>
<p>To do this, we'll create a new state value to hold the value of what the user has typed, and we'll add an <strong>onChange event</strong> to change this value.</p>
<p>Add a new state object, and initialise it to an empty string:</p>
<pre><code class="language-jsx">const [inputValue, setInputValue] = useState('');
</code></pre>
<p>Now within the input, add a <strong>value</strong> and an <strong>onChange</strong> function like so:</p>
<pre><code class="language-jsx">&lt;input value={inputValue} onChange={(event) =&gt; setInputValue(event.target.value)} className='add-item-input' placeholder='Add an item...' /&gt;
</code></pre>
<p>Whenever the user types, the <strong>onChange</strong> event gets called. React passes in the <strong>event</strong> automatically for us, so we can get the value the user has typed from this.</p>
<p>We then take this value and call the <strong>setInputValue</strong> to set what the user has typed into state.</p>
<p>We then set the value of the input to be whatever value is stored in the <strong>inputValue</strong> state variable.</p>
<h2 id="howtoaddanewitemtothelist">How to add a new item to the list</h2>
<p>Now it makes sense to add the value the user has typed to the list. Since we know the current list, and we know the thing the user typed (we stuck everything in state!) all we have to do is mash these things together.</p>
<p>In order words, we're going to add the <strong>inputValue</strong> to the <strong>items</strong> array.</p>
<p>Start by creating a new function, which will get called when the user clicks the "+" icon:</p>
<pre><code class="language-jsx">const handleAddButtonClick = () =&gt; {
const newItem = {
itemName: inputValue,
quantity: 1,
isSelected: false,
};
const newItems = [...items, newItem];
setItems(newItems);
setInputValue('');
};
</code></pre>
<p>What does this is:</p>
<ul>
<li>
<p>Creates a new object called <strong>newItem</strong> which is what gets pushed to the array. We set the <strong>itemName</strong> to whatever the <strong>inputValue</strong> is, we default the <strong>quantity</strong> to <strong>1</strong>, and default the <strong>isSelected</strong> boolean to <strong>false</strong></p>
</li>
<li>
<p>Copies the existing array (we do this to avoid mutating state), and adds our <strong>newItem object</strong> to the end</p>
</li>
<li>
<p>Pushes the new array back into state</p>
</li>
<li>
<p>Finally, resets the <strong>inputValue</strong> to empty string so that the user can type and add more stuff</p>
</li>
</ul>
<p>Now that we've got a function, we just have to wire it up to our button:</p>
<pre><code class="language-jsx">&lt;FontAwesomeIcon icon={faPlus} onClick={() =&gt; handleAddButtonClick()} /&gt;
</code></pre>
<p>If you run the code, type stuff into the input, and click the "plus" icon, it should get added to the list. Woohooo!</p>
<h2 id="howtotoggleanitem">How to toggle an item</h2>
<p>Now we'll look at how we can toggle an item to indicate that it was selected. We know that each item in the array/list has an *<em>isSelected</em> variable, so all we have to do is update this when an item is clicked.</p>
<p>Create a new function like so:</p>
<pre><code class="language-jsx">const toggleComplete = (index) =&gt; {
const newItems = [...items];
newItems[index].isSelected = !newItems[index].isSelected;
setItems(newItems);
};
</code></pre>
<p>This takes an <strong>index</strong> as a parementer. The index is given to us by the map function, and indicates what <em>position</em> in the array we're currently on.</p>
<p>We then use this index to get the object from the array, and set the <strong>isSelected</strong> variable to the opposite of what it currently is.</p>
<p>We then put the updated items into state. This causes React to rerender the component and render either a "checked circle" or an "empty circle" for each item depending on the this flag (remember we wrote the ternery logic for this earlier).</p>
<p>To get this all to work we just need to call <strong>toggleComplete</strong> when the user clicks the circle:</p>
<p>Update the <strong>itemName</strong> div like so:</p>
<pre><code class="language-jsx">&lt;div className='item-name' onClick={() =&gt; toggleComplete(index)}&gt;
// ...other code
&lt;/div&gt;
</code></pre>
<p>Note we pass in the index which we get from the map function. This tells us the current position in the array we're currently on.</p>
<p>Run the code and you should be able to "select" and item. Success!</p>
<h2 id="howtoupdatethequantities">How to update the quantities</h2>
<p>We're going to take a similar approach to update the quantities. We'll start with the increase quantity. Add a function like so:</p>
<pre><code class="language-jsx">const handleQuantityIncrease = (index) =&gt; {
const newItems = [...items];
newItems[index].quantity++;
setItems(newItems);
};
</code></pre>
<p>You'll notice this is similar to the <strong>toggleComplete</strong> function:</p>
<ul>
<li>We use the index to get the item/object from the array</li>
<li>We increase the quantity</li>
<li>We put everything back into state</li>
</ul>
<p>Now we just need to update our button to call this function:</p>
<pre><code class="language-jsx">&lt;button&gt;
&lt;FontAwesomeIcon icon={faChevronRight} onClick={() =&gt; handleQuantityIncrease(index)} /&gt;
&lt;/button&gt;
</code></pre>
<p>Try this, and you should be able to click the "right chevron" and the quantity should go up.</p>
<p>Handling the <strong>decrease quantity</strong> will be similar again. Create a function like so:</p>
<pre><code class="language-jsx">const handleQuantityDecrease = (index) =&gt; {
const newItems = [...items];
newItems[index].quantity--;
setItems(newItems);
};
</code></pre>
<p>What we're doing:</p>
<ul>
<li>We use the index to get the item/object from the array</li>
<li>We decrese the quantity</li>
<li>We put everything back into state</li>
</ul>
<h2 id="howtocalculatethetotalquantity">How to calculate the total quantity</h2>
<p>Ok, our app is looking good. The last thing we need to do is update the total quantity at the bottom.</p>
<p>The first thing we're going to do is create a state value. This will be used to hold/display the total quantities:</p>
<pre><code class="language-jsx">const [totalItemCount, setTotalItemCount] = useState(6);
</code></pre>
<p>We'll default this to <strong>6</strong> as this is what the quantities in the initial list add up to.</p>
<p>Next we'll render this in our JSX:</p>
<pre><code class="language-jsx">&lt;div className='total'&gt;Total: {totalItemCount}&lt;/div&gt;
</code></pre>
<p>Everything will look the same so far. That's because we haven't written any logic to update the state yet. We'll create a new function:</p>
<pre><code class="language-jsx">const calculateTotal = () =&gt; {
const totalItemCount = items.reduce((total, item) =&gt; {
return total + item.quantity;
}, 0);
setTotalItemCount(totalItemCount);
};
</code></pre>
<p>This uses the <strong>reduce</strong> function to add up all the quantities in our items array.</p>
<p>Lastly, all we have to do is call this function whenever the user increases/decreases the quantity, or adds a new item. Update the respective functions like so:</p>
<pre><code class="language-jsx">	const handleAddButtonClick = () =&gt; {
// ...other code
calculateTotal();
};
const handleQuantityIncrease = (index) =&gt; {
// ...other code
calculateTotal();
};
const handleQuantityDecrease = (index) =&gt; {
// ...other code
calculateTotal();
};
</code></pre>
<p>Go ahead and try increasing/decreasing the quantities. You'll notice the total quantity changes as well!</p>
<h2 id="wantmoreprojectideas">Want more project ideas?</h2>
<p>Why not try building some React projects to boost your learning even further?</p>
<p>Every week I send out a new project for you to try a working example, starter code, and tips. <a href="https://subscribe.jschris.com">Subscribe to get this straight to your inbox!</a></p>
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
