---
card: "https://cdn-media-1.freecodecamp.org/images/1*AEjU4WgW-clHPyokVbdcVg.jpeg"
tags: [JavaScript]
description: "Data Driven Documents (D3.js) is a JavaScript library used to"
author: "Milad E. Fahmy"
title: "How to get started with D3 and React"
created: "2021-08-15T23:32:48+02:00"
modified: "2021-08-15T23:32:48+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-react tag-front-end-development tag-data-science tag-tech ">
<header class="post-full-header">
<h1 class="post-full-title">How to get started with D3 and React</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*AEjU4WgW-clHPyokVbdcVg.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*AEjU4WgW-clHPyokVbdcVg.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*AEjU4WgW-clHPyokVbdcVg.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*AEjU4WgW-clHPyokVbdcVg.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*AEjU4WgW-clHPyokVbdcVg.jpeg" alt="How to get started with D3 and React">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Data Driven Documents (D3.js) is a JavaScript library used to create visualizations of data using HTML, CSS, and SVG. It does this by binding data to the DOM (Document Object Model) and its elements and allowing them to transform when the data changes.</p><p>For example, let’s say we want to create a pie chart of amounts of books in every genre in a library. We have some data which we update every time a librarian enters a new book. We store it in the application state, in a variable called “books”.</p><pre><code class="language-js">const [books, setBooks] = useState(initialBooks)
const initialBooks = [
{
name: "Harry Potter and the Philosophers Stone",
author: "J. K. Rowling",
genre: "fantasy"
},{
name: "The Pedagogy of Freedom",
author: "Bell hooks",
genre: "non-fiction"
},{
name: "Harry Potter and the Chamber of Secrets",
author: "J. K. Rowling",
genre: "fantasy"
},{
name: "Gilgamesh",
author: "Derrek Hines",
genre: "poetry"
}
]</code></pre><p>Right now we could create a chart that has 50% of fantasy, 25% of non-fiction and 25% of poetry. When the librarian adds a new book to the database, the data changes, and your graft shifts. Let’s say we add “50 vegan dishes”.</p><pre><code class="language-js">setBooks(books.concat(
{
name: "50 vegan dishes",
author: "Antti Leppänen",
genre: "non-fiction"
}
))</code></pre><p>When this data changes, our D3 graph updates the DOM to match the new data. We now have 40% fantasy, 40% non-fiction, and 20% poetry. D3 makes manipulating the website DOM easy. This means that you can use it to create, update and delete elements in the page structure.</p><p>If you want to follow along with this example, you can use <a href="https://github.com/facebook/create-react-app" rel="noopener">Create React App</a> to create a simple React web app. If React is still unfamiliar to you, you can <a href="https://reactjs.org/tutorial/tutorial.html" rel="noopener">check out this tutorial</a> from the React documentation.</p><ol><li>Create a new app, called my-d4-app <code>npx create-react-app my-d3-app</code>. Change directory into the created folder by using <code>cd my-d3-app</code>.</li><li>Install D3 by running <code>npm install d3 --save</code> .</li><li>Import D3 to App.js by adding <code>import * as d3 from d3</code> . You need to use import * (“import everything”) since D3 has no default exported module.</li></ol><h4 id="selecting-dom-elements">Selecting DOM elements</h4><p>D3 makes manipulating the DOM easy. For example, let’s try to change all <code>&lt;p&amp;g</code>t;&lt;/p&gt; -elements to have an inline style setting the color to blue.</p><p><code>d3.selectAll("p").style("color", "blue")</code></p><p>The <code>.selectAll()</code>-method allows us to select all elements of a specific type. We can also use <code>.select()</code> to select individual nodes.</p><p>The React library also manipulates the DOM. This means we have to make a little extra effort to get it to work together with D3. Luckily React already has a solution for allowing targeting and updating DOM elements. To do this, React uses references.</p><p>Let’s create a <code>&lt;div&gt;</code>-element and add a reference to it, and then use the reference to pick it up with D3.</p><pre><code class="language-js">d3.select(this.refs.myDiv).style(“background-color”, “blue”)
render(&lt;div ref=”myDiv”&gt;&lt;/div&gt;)</code></pre><h4 id="appending-elements-to-the-dom">Appending elements to the DOM</h4><p>Once you have selected the element you want to manipulate, you can start appending more elements to it. For example, imagine we have a <code>&lt;ol ref="myList"&gt;</code>. We can use D3 to append a new list item element, containing the text “bananas”.</p><pre><code class="language-js">d3.select(this.refs.myList)
.append("li")
.text("bananas")</code></pre><h4 id="using-data-to-create">Using data to create</h4><p>You can make D3 aware of your data by selecting DOM elements and attaching the data to them using <code>.data()</code>. D3 has a method called <code>.enter()</code>, which is often used for working with data. It signifies that these data elements need to be added to the DOM. Enters counterpart, <code>.exit()</code> , is used to signify those elements that no longer exist in the data but do exist in the DOM. We can use it to remove those elements together with remove, as in <code>.exit().remove()</code>.</p><p>Let’s take a look at an example.</p><pre><code class="language-js">import React, { component } from 'react'
import * as d3 from 'd3'
class App extends Component {
const temperatureData = [ 8, 5, 13, 9, 12 ]
d3.select(this.refs.temperatures)
.selectAll("h2")
.data(temperatureData)
.enter()
.append("h2")
.text("New Temperature")
render(&lt;div ref="temperatures"&gt;&lt;/div&gt;)
}
export default App</code></pre><p>This reads “D3, select the element with reference ‘temperatures’. Then, attach temperatureData to it’s <code>&lt;h2&gt;</code>-elements. For the parts of data which aren’t represented in the DOM yet, append new <code>&lt;h2&gt;</code>-element with the text “New Temperature”.</p><p>Wait, now it says “New temperature” over and over again! What if we want to display the actual datapoint value?</p><h4 id="properties-as-functions">Properties as functions</h4><p>In D3, styles, attributes and other element properties can be set using functions. Let’s refactor the code above to use a function that sets the texts of the <code>&lt;</code>h2&gt;-elements to the datapoint value they represent.</p><pre><code class="language-js">d3.select(this.refs.temperatures)
.selectAll("h2")
.data(temperatureData)
.enter()
.append("h2")
.text((datapoint) =&gt; datapoint + " degrees")</code></pre><p>We can use an arrow function to take the datapoint value and return the value added to “ degrees”. Functions in properties allow us to get creative with the elements. In this example from the <a href="https://d3js.org/" rel="noopener">D3 documentation</a>, a paragraph is given a random color using a function to set the elements style property.</p><pre><code class="language-js">d3.selectAll("p")
.style("color", function() {
return "hsl(" + Math.random() * 360 + ",100%,50%)";
}
);</code></pre><p>You can also use conditionals, just as in any function. Let’s say we want to set the style of an element of our temperature list based on the data.</p><pre><code class="language-js">d3.select(this.refs.temperatures)
.selectAll("h2")
.data(temperatureData)
.enter()
.append("h2")
.text((datapoint) =&gt; `${datapoint} degrees`)
.style((datapoint) =&gt; {
if (datapoint &gt; 10) {
return "red"
} else { return "blue" }
}) </code></pre><p>However, adding inline styles is a tedious job, and we would like to use classes and ids instead so that we could set the styles in our CSS. To set attributes like classes and ids, we use <code>.attr()</code>. The code above could be refactored to <code>.attr("class", (datapoint) =&gt; { datapoint &gt; 10 ? "highTemperature" : "lowTemperature" }</code>.</p><h4 id="animating-with-transitions">Animating with transitions</h4><p>Finally, D3 makes animating transitions easy. We could change text color to red.</p><pre><code class="language-js">d3.select(this.ref.descr)
.transition()
.style("background-color", "red");
render(&lt;p ref="descr"&gt;&lt;/p&gt;)</code></pre><p>We can modify the animation to happen after 1 second using <code>.duration(1000)</code>. We can also use functions together with transitions. For example, we can make our elements to appear in a staggered transition. The following example from the D3 documentation makes circles appear one at a time, using a <code>delay()</code> function that takes <code>dataPoint</code> and <code>iteration</code> as parameters, and returns the iteration multiplied by 10. Iteration refers to the position of the datapoint in the list of data.</p><pre><code class="language-js">d3.selectAll("circle").transition()
.duration(750)
.delay(function(dataPoint, iteration) =&gt; iteration * 10)
.attr("r", (dataPoint) =&gt; Math.sqrt(d * scale))</code></pre><h4 id="our-first-chart">Our first chart</h4><p>Let’s create a new component. Create a new file, called <code>BarChart.js</code>. Modify App.js to look like this.</p><pre><code class="language-js">import React from React
import BarChart from './BarChart'
const App = () =&gt; {
return ( &lt;BarChart /&gt; )
}</code></pre><p>Paste the following boilerplate into <code>BarChart.js</code>. Call <code>npm start</code> to start the app.</p><pre><code class="language-js">import React, { Component } from 'react'
import * as d3 from 'd3'
class BarChart extends Component {
componentDidMount() {
const data = [ 2, 4, 2, 6, 8 ]
this.drawBarChart(data)
}
drawBarChart(data)  {}
render() { return &lt;div ref="canvas"&gt;&lt;/div&gt; }
}
export default BarChart</code></pre><p>We have a set of dummy data, which we pass to the drawing function as a parameter. From now on, we’ll be working inside <code>drawBarChart()</code>. First, select the <code>div</code> with the reference <code>canvas</code>. Inside <code>drawBarChart()</code>, we append a <code>svg</code> element inside the <code>div</code> we referenced. We set the <code>svg</code> to have a with of 600, a height of 400 and a black border. You should see this empty box appear on the page.</p><pre><code class="language-js">const svgCanvas = d3.select(this.refs.canvas)
.append(“svg”)
.attr(“width”, 600)
.attr(“height”, 400)
.data(data).enter()
.append(“rect”)
.attr(“width”, 40)
.attr(“height”, (datapoint) =&gt; datapoint * 20)
const canvasHeight = 400
const canvasWidth = 600
const scale = 20
const svgCanvas = d3.select(this.refs.canvas)
.append(“svg”)
.attr(“width”, canvasWidth)
.attr(“height”, canvasHeight)
.style(“border”, “1px solid black”)
svgCanvas.selectAll(“rect”)
.data(data).enter()
.append(“rect”)
.attr(“width”, 40)
.attr(“height”, (datapoint) =&gt; datapoint * scale)
.attr(“fill”, “orange”)
.attr(“x”, (datapoint, iteration) =&gt; iteration * 45)
.attr(“y”, (datapoint) =&gt; canvasHeight — datapoint * scale)
.data(data).enter()
.append(“text”)
.attr(“x”, (dataPoint, i) =&gt; i * 45 + 10)
.attr(“y”, (dataPoint, i) =&gt; canvasHeight - dataPoint * scale - 10)
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
