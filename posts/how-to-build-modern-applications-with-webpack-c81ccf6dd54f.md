---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9ca69a740569d1a4ca716e.jpg"
tags: [JavaScript]
description: "How far can we get with Webpack’s default configuration?"
author: "Milad E. Fahmy"
title: "How to build modern applications with WEBPACK"
created: "2021-08-16T10:08:51+02:00"
modified: "2021-08-16T10:08:51+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-tech tag-programming tag-webpack tag-web-development ">
<header class="post-full-header">
<h1 class="post-full-title">How to build modern applications with WEBPACK</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9ca69a740569d1a4ca716e.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9ca69a740569d1a4ca716e.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9ca69a740569d1a4ca716e.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9ca69a740569d1a4ca716e.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9ca69a740569d1a4ca716e.jpg" alt="How to build modern applications with WEBPACK">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
&lt;head&gt;
&lt;title&gt;Todo App&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;div class="container"&gt;
&lt;p&gt;
&lt;label for="new-task"&gt;Add Item&lt;/label&gt;
&lt;input id="new-task" type="text"&gt;
&lt;button id="addTask"&gt;Add&lt;/button&gt;
&lt;/p&gt;
&lt;h3&gt;Todo&lt;/h3&gt;
&lt;ul id="tasks"&gt;
&lt;/ul&gt;
&lt;/div&gt;
&lt;script src="main.js"&gt;&lt;/script&gt;
&lt;/body&gt;
console.log("Delete Task...", e);
//Remove the parent list item from the ul
var listItem = e.target.parentNode;
var ul = listItem.parentNode;
ul.removeChild(listItem);
};
export default deleteTask;</code></pre><p>All that is going on in that file is we are creating the <code>deleteTask</code> function and then exporting it as a default export.</p><p>We can now implement the <code>addTask</code> function. In the <code>addTask.js</code> file add the following code:</p><pre><code class="language-javascript">import deleteTask from "./deleteTask";
const createNewTaskElement = function(taskString) {
const listItem = document.createElement("li");
const label = document.createElement("label");
const deleteButton = document.createElement("button");
deleteButton.innerText = "Delete";
deleteButton.className = "delete";
deleteButton.addEventListener("click", deleteTask);
label.innerText = taskString;
listItem.appendChild(label);
listItem.appendChild(deleteButton);
return listItem;
};
const addTask = function(e) {
const taskList = document.getElementById("tasks");
const task = document.getElementById("new-task");
if (task.value !== "") {
const newTaskItem = createNewTaskElement(task.value);
taskList.appendChild(newTaskItem);
task.value = "";
}
};
export default addTask;</code></pre><p>In this one, we first of all import the <code>deleteTask.js</code> file. By default, if no extension is specified in the import, webpack automatically assumes that it’s a <code>.js</code> file. Then we have the function that creates the list item containing the task that was entered in the form. The only thing to note is that we are attaching the delete function to the click handler of the delete button. Then we create the actual addTask function and export it.</p><p>We will then need to import our <code>addTask</code> function into <code>index.js</code> . Paste the code below into your <code>index.js</code> file:</p><pre><code class="language-javascript">import addTask from './addTask';
const addTaskButton = document.getElementById("addTask");
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
