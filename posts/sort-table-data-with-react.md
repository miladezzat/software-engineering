---
card: "/images/default.jpg"
tags: [Reactjs]
description: "Often when you have a table with information you d want to be"
author: "Milad E. Fahmy"
title: "How to sort table data with React"
created: "2021-08-15T22:50:18+02:00"
modified: "2021-08-15T22:50:18+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-reactjs tag-javascript tag-html tag-css ">
<header class="post-full-header">
<h1 class="post-full-title">How to sort table data with React</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2019/07/sort-table-data-with-react.png 300w,
/news/content/images/size/w600/2019/07/sort-table-data-with-react.png 600w,
/news/content/images/size/w1000/2019/07/sort-table-data-with-react.png 1000w,
/news/content/images/size/w2000/2019/07/sort-table-data-with-react.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2019/07/sort-table-data-with-react.png" alt="How to sort table data with React">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>In this tutorial we're going to see how to do exactly that using ReactJS.</p>
<p>Here's what we're going to build:</p>
<h2 id="prerequisites">Prerequisites</h2>
<p>Before we move on, let's see the things that we're going to use in this tutorial:</p>
<ol>
<li><a href="https://fontawesome.com">FontAwesome</a> - for icons</li>
<li><a href="https://foundation.zurb.com/">Foundation</a> - for general styling. We're using this especially for the table styling as we don't want to get distracted by the styling in this tutorial</li>
<li><a href="https://reactjs.org">ReactJS</a> - please <strong>note</strong> that I'm not going to explain the basics of React in this tutorial. By continuing I'm assuming that you worked with it before (although the things that we're going to do aren't hard at all ?)</li>
<li>The data - as mentioned above, we'll get a list of the top 10 billionaires in the world plus their net worth</li>
</ol>
<h2 id="thedata">The Data</h2>
<p>We're going to create an array with objects containing the name of the billionaires and their net worth in billion USD:</p>
<pre><code class="language-js">const tableData = [
{
name: 'Amancio Ortega',
net_worth: 62.7
},
{
name: 'Bernard Arnault',
net_worth: 76
},
{
name: 'Bill Gates',
net_worth: 96.5
},
{
name: 'Carlos Sim Helu',
net_worth: 64
},
{
name: 'Jeff Bezos',
net_worth: 131
},
{
name: 'Larry Ellison',
net_worth: 58
},
{
name: 'Larry Page',
net_worth: 50.8
},
{
name: 'Mark Zuckerberg',
net_worth: 62.3
},
{
name: 'Michael Bloomberg',
net_worth: 55.5
},
{
name: 'Warren Buffet',
net_worth: 82.5
}
];
</code></pre>
<h2 id="theappcomponent">The App component</h2>
<p>This component will the be main one which will be generated on the page. It only has some text + the <code>&lt;Table /&gt;</code> component and it's passing down to it the <code>tableData</code> we declared above.</p>
<pre><code class="language-js">const App = () =&gt; (
&lt;div className='text-center'&gt;
&lt;h4&gt;A list of top 10 richest billionaires.&lt;/h4&gt;
&lt;p&gt;
Click on the icon next to "Net Worth" to see the sorting functionality
&lt;/p&gt;
&lt;Table data={tableData} /&gt;
&lt;small&gt;
* Data gathered from{' '}
&lt;a
href='https://www.theweek.co.uk/people/57553/top-billionaires-who-richest-person-world'
target='_blank'&gt;
theweek.co.uk
&lt;/a&gt;
&lt;/small&gt;
&lt;/div&gt;
);
ReactDOM.render(&lt;App /&gt;, document.getElementById('app'));
</code></pre>
<p>Now that all of that is out of the way, we can focus on what's important ?:</p>
<h2 id="thetablecomponent">The Table component</h2>
<p>It'll be a class component as we need to use the state in it, but first let's focus on the <code>render</code> method. We'll <code>map</code> over the <code>data</code> that's coming from the parent component and we'll create a table row (<code>tr</code>) for every data in the array. Alongside that we have a basic table structure (<code>table &gt; thead + tbody</code>).</p>
<pre><code class="language-js">class Table extends React.Component {
render() {
const { data } = this.props;
return (
data.length &gt; 0 &amp;&amp; (
&lt;table className='text-left'&gt;
&lt;thead&gt;
&lt;tr&gt;
&lt;th&gt;Name&lt;/th&gt;
&lt;th&gt;Net Worth&lt;/th&gt;
&lt;/tr&gt;
&lt;/thead&gt;
&lt;tbody&gt;
{data.map(p =&gt; (
&lt;tr&gt;
&lt;td&gt;{p.name}&lt;/td&gt;
&lt;td&gt;${p.net_worth}b&lt;/td&gt;
&lt;/tr&gt;
))}
&lt;/tbody&gt;
&lt;/table&gt;
)
);
}
}
</code></pre>
<p>Next, the sorting...</p>
<p>We're going to have 3 types of sorts: <code>'default'</code>, <code>'up'</code> (ascending), <code>'down'</code> (descending). These types will be changed with the aid of a button which will have a FontAwesome icon depending which sort type is currently active. Let's create an object which will give us the necessary information:</p>
<pre><code class="language-js">const sortTypes = {
up: {
class: 'sort-up',
fn: (a, b) =&gt; a.net_worth - b.net_worth
},
down: {
class: 'sort-down',
fn: (a, b) =&gt; b.net_worth - a.net_worth
},
default: {
class: 'sort',
fn: (a, b) =&gt; a
}
};
</code></pre>
<p>As you can see, we have two props for each type of sorts:</p>
<ol>
<li><code>class</code> - this will be used by the icon in the button as we'll see which state is currently active</li>
<li><code>fn</code> - this will be the <code>function</code> that we'll use to sort the items in the array before we display it in the table. Basically we're comparing the <code>net_worth</code> property of the objects</li>
</ol>
<p>Great so far! ?</p>
<p>We also need to add a <code>currentSort</code> state to the <code>Table</code> component which will keep track of the active sort type and finally, we'll have an <code>onSortChange</code> method which will be called every time the sort button will be clicked and it will change the <code>currentSort</code> value.</p>
<p>A lot of words ?, but let's see the code and I bet you'll understand ?:</p>
<pre><code class="language-js">class Table extends React.Component {
// declaring the default state
state = {
currentSort: 'default'
};
// method called every time the sort button is clicked
// it will change the currentSort value to the next one
onSortChange = () =&gt; {
const { currentSort } = this.state;
let nextSort;
if (currentSort === 'down') nextSort = 'up';
else if (currentSort === 'up') nextSort = 'default';
else if (currentSort === 'default') nextSort = 'down';
this.setState({
currentSort: nextSort
});
};
render() {
const { data } = this.props;
const { currentSort } = this.state;
return (
data.length &gt; 0 &amp;&amp; (
&lt;table className='text-left'&gt;
&lt;thead&gt;
&lt;tr&gt;
&lt;th&gt;Name&lt;/th&gt;
&lt;th&gt;
Net Worth
&lt;button onClick={this.onSortChange}&gt;
&lt;i className={`fas fa-${sortTypes[currentSort].class}`} /&gt;
&lt;/button&gt;
&lt;/th&gt;
&lt;/tr&gt;
&lt;/thead&gt;
&lt;tbody&gt;
{[...data].sort(sortTypes[currentSort].fn).map(p =&gt; (
&lt;tr&gt;
&lt;td&gt;{p.name}&lt;/td&gt;
&lt;td&gt;${p.net_worth}b&lt;/td&gt;
&lt;/tr&gt;
))}
&lt;/tbody&gt;
&lt;/table&gt;
)
);
}
}
</code></pre>
<p>Notice that we're not changing the original <code>data</code> array, but we're creating another array with the <code>...</code> (spread) operator, and then we're using the <code>fn</code> given by the <code>sortTypes</code> object to sort the array accordingly.</p>
<h2 id="conclusion">Conclusion</h2>
<p>That's pretty much it! Now you know how to sort a table based on the values in a column. Congratulations!</p>
<p>Happy Coding!</p>
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
