---
card: "https://cdn-media-1.freecodecamp.org/images/1*hPLhe5cqPbyE8Hi4CGQMYg.png"
tags: [Reactjs]
description: by Rajesh Pillai
author: "Milad E. Fahmy"
title: "React.js: implement the drag and drop feature without using external libraries"
created: "2021-08-15T19:46:25+02:00"
modified: "2021-08-15T19:46:25+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-reactjs tag-programming tag-javascript tag-tech tag-tutorial ">
<header class="post-full-header">
<h1 class="post-full-title">React.js: implement the drag and drop feature without using external libraries</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*hPLhe5cqPbyE8Hi4CGQMYg.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*hPLhe5cqPbyE8Hi4CGQMYg.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*hPLhe5cqPbyE8Hi4CGQMYg.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*hPLhe5cqPbyE8Hi4CGQMYg.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*hPLhe5cqPbyE8Hi4CGQMYg.png" alt="React.js: implement the drag and drop feature without using external libraries">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Rajesh Pillai</p>
<h1 id="react-js-implement-the-drag-and-drop-feature-without-using-external-libraries">React.js: implement the drag and drop feature without using external libraries</h1>
<h4 id="get-into-the-details-of-implementing-drag-and-drop-features-in-react-from-scratch-">Get into the details of implementing drag and drop features in React from scratch.</h4>
<figcaption>So, easy even your dog can drag it :)</figcaption>
</figure>
<p>Let’s first see the result of what we will be building. I am trying out .gif — hopefully it works everywhere as expected. I’ve used <a href="https://discover.techsmith.com/camtasia-brand-desktop-features-logos-april/?gclid=EAIaIQobChMIn67LrPXp2gIVk7rACh0hjgr7EAAYASAAEgJWa_D_BwE" rel="noopener">Camtasia</a> with a personal license.</p>
<figcaption>Ignore the UI/Styles please!</figcaption>
</figure>
<p>The key learning points are to:</p>
<ol>
<li>make an element draggable by adding the “draggable” attribute</li>
<li>make an area droppable by implementing the “dragover” event</li>
<li>capture the drag data by implementing the “dragstart” event</li>
<li>capture the drop by implementing the “drop” event</li>
<li>implement the “drag” event that is fired as the element is being dragged</li>
<li>store the intermediate data in the dataTransfer object</li>
</ol>
<p>For visual learners, head over to the video below.</p>
<h3 id="step-1-create-the-root-app-for-the-demo">Step 1 — create the root app for the demo</h3>
<p>All the code for drag and drop will go into AppDragDropDemo.js component.</p><pre><code>import React from 'react';import ReactDOM from 'react-dom';import '.index.css';import AppDragDropDemo from './AppDragDropDemo';</code></pre><pre><code>ReactDOM.render(&lt;AppDragDropDemo /&gt;,     document.getElementById("root"));</code></pre>
<p>The entry point for the AppDragDropDemo looks like the code below.</p><pre><code>import React, { Component } from 'react';</code></pre><pre><code>export default class AppDragDropDemo extends Component {  render () {    return (      &lt;div className="container-drag"&gt;        DRAG &amp; DROP DEMO      &lt;/div&gt;    );  }}</code></pre>
<p>If you now run the application, you will be presented with this awesome screen (pun intended)</p>
<h3 id="step-2-create-the-state-object-to-store-some-tasks">Step 2 — create the state object to store some tasks</h3>
<p>Let’s create some tasks to simulate a simple application. What we intend to do is to drag and drop these tasks into different categories like <code>wip</code>, <code>complete</code> , and so on.</p><pre><code>export default class AppDragDropDemo extends Component {      state = {            tasks: [{name:"Learn Angular",             category:"wip",              bgcolor: "yellow"},                        {name:"React",              category:"wip",              bgcolor:"pink"},                        {name:"Vue",              category:"complete",              bgcolor:"skyblue"}                ]}</code></pre><pre><code>  render () {    return (      &lt;div className="container-drag"&gt;        DRAG &amp; DROP DEMO      &lt;/div&gt;    );  }}</code></pre>
<h3 id="step-3-organize-our-data-into-categories">Step 3 — organize our data into categories</h3>
<p>Let’s implement the below code in the render method, to group tasks into their respective categories, <code>wip</code> and <code>complete</code>. Feel free to add more categories and play with the code.</p>
<p>You can copy-paste the code above from the below snippet.</p><pre><code>render() {          var tasks = { wip: [],                 complete: []          }           this.state.tasks.forEach ((t) =&gt; {                   tasks[t.category].push(&lt;div       key={t.name}                           onDragStart={(e)=&gt;this.onDragStart(e, t.name)}                          draggable                          className="draggable"                          style={{backgroundColor: t.bgcolor}}&gt;                                {t.name}                    &lt;/div&gt;);          });</code></pre>
<p>In the above code, we are looping through all tasks and creating a div for every task item and storing it in the respective categories.</p>
<p>So, the <code>wip[]</code> contains all tasks in the wip category and <code>complete[]</code> contains all the completed tasks.</p>
<h3 id="step-4-make-the-task-item-draggable">Step 4 — make the task item draggable</h3>
<p>Add the draggable attribute to the &lt;div&gt; or any element to make an element draggable. Refer to the code block above for the text format of the code.</p>
<h3 id="step-5-create-a-droppable-container">Step 5 — create a droppable container</h3>
<p>To create a droppable container, implement the <code>dragover event</code>. Now, since we want to disable the default dragover event, we simple call the <code>event.preventDefault()</code> from the dragover event.</p>
<p>We will also render <code>{tasks.wip}</code> and <code>{tasks.complete}</code> in their corresponding div elements.</p>
<p>The output so far will look like the below figure.</p>
<h3 id="step-6-capture-the-state-of-the-element-being-dragged">Step 6 — capture the state of the element being dragged</h3>
<p>Let’s modify the code where we are creating the category for each task. Add an eventhandler <code>ondragstart</code> and pass the id/name or any information you need to persist while the drag/drop is happening.</p>
<p>I am using <code>name</code> as a unique value to identify the task. Feel free to use ID or whatever unique key you have.</p>
<p>Let’s now implement the <code>onDragStart</code> event handler.</p>
<p>In the onDragStart handler, we grab the parameter and store that within the dataTransfer object. (Don’t get confused by the parameter naming, as I guess I was in a different naming world while coding this :) .)</p>
<p><strong>IE note</strong>: this may not work with IE. For IE, the better practice is to give the format as the key as shown below.</p><pre><code>Instead of</code></pre><pre><code>ev.dataTransfer.setData("id", id)</code></pre><pre><code>USE</code></pre><pre><code>ev.dataTransfer.setData(“text/plain”,id)</code></pre>
<p>The above handler will ensure that the element being dragged is stored in the event object and is available for use when required. It may be required while dropping on a target.</p>
<p>Now if you run the application and drag the elements, the following logs will be output.</p>
<h3 id="step-7-handle-the-drop-event-">Step 7 — handle the drop event.</h3>
<p>Let’s open up the render method and add the <code>onDrop</code> event to the div with a className of <code>droppable</code>.</p>
<p>In the above code, we add the <code>drop</code> event handler, and pass the required category <code>complete</code> as an argument. This indicates we are dropping the element from the <code>wip</code> state to the <code>complete</code> state (category). Please feel free to change the names, as required.</p>
<p>Let’s now implement the <code>onDrop()</code> event handler.</p>
<p>Here’s the code you can copy/paste:</p><pre><code>onDrop = (ev, cat) =&gt; {         let id = ev.dataTransfer.getData("id");  let tasks = this.state.tasks.filter((task) =&gt; {      if (task.name == id) {               task.category = cat;                 }                     return task;          });           this.setState({                 ...this.state,                 tasks          });    }</code></pre>
<p>In the <code>onDrop</code> event handler, we grab the task being dragged by using getData method on the event’s dataTransfer object.</p>
<p>We then create a new tasks array by using the filter method, and change the category of the task being dragged.</p>
<p><code>setState()</code> will trigger render, and the tasks will be rendered in the right areas.</p>
<p><strong>IE note</strong>: To make it work in IE, use the below getData method.</p>
<p>Instead of</p>
<p><strong>var id = ev.dataTransfer.getData(“id”)</strong></p>
<p>use</p>
<p><strong>var id = ev.dataTransfer.getData(“text”)</strong></p>
<h3 id="step-8-to-implement-drop-from-complete-to-wip-add-the-ondrop-handler">Step 8 — to implement drop from “complete” to “wip,” add the onDrop handler</h3>
<p>The <code>onDrop()</code> handler remains the same as earlier.</p>
<p>Finally, run the code and marvel at your creation :) and have fun while coding.</p>
<p>You can grab the source code from <a href="https://github.com/rajeshpillai/youtube-react-components/blob/master/src/AppDragDropDemo.js" rel="noopener">here</a>.</p>
<p><strong>Note:</strong> for this to work cross browser, change the setData type to string.<br>for example, to set data, use <code><strong>ev.dataTransfer.setData(“text/plain”,id)</strong></code><strong>. </strong>To read data, use <code><strong>var id = ev.dataTransfer.getData(“text”)</strong></code></p>
<p>Since my aim was to demonstrate the core drag and drop features, the code has not been optimized for factors such as design and naming conventions.</p>
<p>Learn with me @Learner + Fullstack Coach (@rajeshpillai): <a href="https://twitter.com/rajeshpillai" rel="noopener">https://twitter.com/rajeshpillai</a></p>
<p>Promotion: Special 10$ coupon for Medium readers for my upcoming live <a href="https://www.udemy.com/reactjs-beyond-the-basics/?couponCode=MEDIUM_500" rel="noopener">ReactJS-Beyond the basics</a> course on Udemy in case you wish to support our open source curriculum <a href="https://codeburst.io/mastering-front-end-engineering-in-12-to-20-weeks-for-beginners-and-experienced-alike-6dc5172e3295" rel="noopener">Mastering frontend engineering in 12 to 20 weeks</a>.</p>
<p>Just published my early access course <a href="https://www.udemy.com/javascript-deep-dive-code-your-own-react-library/?couponCode=SOCIAL1000" rel="noopener">Javascript Deep Dive — Code your own React</a></p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
