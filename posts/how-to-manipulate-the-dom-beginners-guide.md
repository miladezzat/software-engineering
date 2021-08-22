---
card: "https://cdn-media-2.freecodecamp.org/w1280/6001cc5998be260817e4a4bd.jpg"
tags: [JavaScript]
description: Okay, so I assume you have heard of the almighty DOM — that’s
author: "Milad E. Fahmy"
title: "How to Manipulate the DOM - the Ultimate Beginner's Guide"
created: "2021-08-15T19:27:32+02:00"
modified: "2021-08-15T19:27:32+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-dom tag-beginners-guide ">
<header class="post-full-header">
<h1 class="post-full-title">How to Manipulate the DOM - the Ultimate Beginner's Guide</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/6001cc5998be260817e4a4bd.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/6001cc5998be260817e4a4bd.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/6001cc5998be260817e4a4bd.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/6001cc5998be260817e4a4bd.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/6001cc5998be260817e4a4bd.jpg" alt="How to Manipulate the DOM - the Ultimate Beginner's Guide">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Okay, so I assume you have heard of the almighty DOM — that’s why you are here, right? If you are finding it difficult, I can assure you that after reading this article, you will feel comfortable enough with the whole&nbsp;DOM manipulation thing.</p>
<p>But please before I start, permit me to share with you my little story on how I got to know about the DOM (its a funny story).</p>
<h2 id="howilearnedaboutthedom">How I learned about the DOM</h2>
<p>A few months into my web development career, I was still learning the good old HTML and CSS. I mistakenly stumbled upon a DOM course on w3schools. The first example they had was one with a light bulb and two buttons.</p>
<p>The onclick of one of the buttons would "switch on" the light bulb and the onclick of the second button would "switch off" the light bulb. I was literally blown away.</p>
<p>How could a button on a website switch on a light bulb? How!?</p>
<p>I even twitted about it. Then I found out that they were just changing the source attribute (src) of the images. I was heart broken, but regardless that little experience made me fall in love with the DOM. It made me want to know more.</p>
<p>And in this article I'm going to walk you through it. I promise that if you stick with me until the end and practice all that I write about, the whole DOM thing won't be an issue for you ever again. So are you ready? Ok Allons-y (let's go!).</p>
<blockquote>
<p>To make this easier to understand, I have grouped everything into the following sections below.</p>
</blockquote>
<ul>
<li>Definition of the DOM and Basic concepts</li>
<li>How to Select Elements in the DOM</li>
<li>How to Traverse and Move Around the DOM</li>
<li>How to Manipulate Elements in the DOM</li>
<li>General Styling</li>
<li>Event handling in the DOM</li>
</ul>
<p>So grab a coffee or anything you like and relax as I walk you through each section.</p>
<p><img src="https://media.giphy.com/media/ceeFbVxiZzMBi/source.gif" alt="vvv-1"></p>
<h2 id="definitionofthedomandbasicconcepts">Definition of the DOM and Basic concepts</h2>
<h3 id="whatisthedom">What is the DOM?</h3>
<p>The DOM stands for Document Object Model. It can simply be understood as a tree of nodes created by the browser. Each of these nodes has its own properties and methods which can be manipulated using JavaScript.</p>
<p>The ability to manipulate the DOM is one of the most unique and useful abilities of JavaScript.</p>
<p>The image below gives a visual representation of what the DOM tree looks like.</p>
<p><img src="https://www.freecodecamp.org/news/content/images/2021/01/images.png" alt="images"></p>
<p>Here we have the document object. This is the core/foundation of the DOM. To perform any form of DOM manipulation, you have to access the document object first.</p>
<p>Next we have the <code>html</code> root element which is a child of the document object.</p>
<p>Next on the line are the <code>body</code> and <code>head</code> elements which are siblings to each other and children of the <code>html</code> element.</p>
<p>Under the head element we have the title element which you can agree is the child of the head element and parent to the text node - “my text”.</p>
<p>Directly under the body element we have two elements (<code>a</code> tag and <code>h1</code> tag) which are siblings to each other and children of the body element.</p>
<p>Finally the <code>href</code> attribute and the text node - “my link” - are children of the <code>a</code> tag. Exactly the same way the text node, “My header”, is a child of the <code>h1</code> element.</p>
<p>This might seem a little confusing if you are an absolute beginner, but trust me - it always gets better (with practice of course).</p>
<h2 id="howtoselectelementsinthedom">How to Select Elements in the DOM</h2>
<p>In order to be able to manipulate an element in the DOM, you have to select that particular element. Luckily for us we have 4 major ways of selecting elements.</p>
<h3 id="howtoselectdomelementswiththegetelementbyidmethod">How to Select DOM Elements with the getElementById Method</h3>
<p>The most common way to access an HTML element is to use the&nbsp;id&nbsp;of the element.</p>
<p>In the example below the&nbsp;<code>getElementById()</code>&nbsp;method used&nbsp;id="master"&nbsp;to find the element</p>
&lt;script&gt;
const masterEl = document.getElementById('master')
console.log(masterEl) //&lt;p id="master"&gt;i love javascript&lt;/p&gt;
&lt;/script&gt;</code></pre>
<p>The&nbsp;id&nbsp;is case-sensitive. For example, the&nbsp;'master'&nbsp;and&nbsp;'Master'&nbsp;are totally different ids.</p>
<p>Once you have selected an element, you can&nbsp;add styles to the element, manipulate its&nbsp;attributes, and traverse to&nbsp;parent&nbsp;and&nbsp;child elements.</p>
<h3 id="howtoselectdomelementswiththegetelementsbyclassnamemethod">How to Select DOM Elements with the getElementsByClassName() Method</h3>
<p>This method returns a collection of all elements in the document with the specified class name.</p>
<p>For example, our HTML page below contains three elements with class="master2", and I selected the button with the id of 'btn'.</p>
<p>If you click the button it would select all the elements with a class name of "master2" and change the innerHTML of the 3rd element.</p>
&lt;p class="master2"&gt;i love react&lt;/p&gt;
&lt;h1 class="master2"&gt;i want a job&lt;/h1&gt;
&lt;button id="btn"&gt;click me&lt;/button&gt;
&lt;script&gt;
const btn = document.getElementById('btn')
btn.addEventListener('click', function master(){
var master = document.getElementsByClassName("master2");
master[2].innerHTML = 'i need a job';
})
&lt;/script&gt;</code></pre>
<p>Before the button is clicked, this is what you see:</p>
<p>After the button is clicked, you see:</p>
<blockquote>
<p>I know I used <code>addEventListener()</code> which I have yet to explain, but stick with me. It's definitely part of what I will explain to you below :)</p>
</blockquote>
<h3 id="howtoselectdomelementswiththegetelementsbytagnamemethod">How to Select DOM elements with the&nbsp;getElementsByTagName() Method</h3>
<p>This method accepts a tag name and returns all the elements of the specified tag name in the order which they appear in the document.</p>
<p>The following code illustrates the syntax of <code>getElementsByTagName()</code> by getting all the <code>p</code> elements on the page and changing the content of the second element.</p>
&lt;p&gt;Atom&lt;/p&gt;
&lt;p&gt;Sublime text&lt;/p&gt;
&lt;button id="btn"&gt;click me&lt;/button&gt;
&lt;script&gt;
const btn = document.getElementById('btn')
btn.addEventListener('click', function master(){
let master = document.getElementsByTagName('p');
let masterEl = master[1].innerHTML = 'Code editors';
console.log(masterEl) //Code editors
})
//&lt;p&gt;Atom&lt;/p&gt; changes to &lt;p&gt;Code editors&lt;/p&gt;
&lt;/script&gt;</code></pre>
<h3 id="howtoselectdomelementswithcssselectors">How to Select DOM Elements with CSS Selectors</h3>
<h4 id="queryselector">.querySelector()</h4>
<p>This returns the first value that matches the selector it’s given. This method can accept all CSS style selectors, allowing it to select by tag, class, or ID.</p>
&lt;script&gt;
const master = document.querySelector("#master")
&lt;/script&gt;</code></pre>
<p>This method above takes one argument, which is a CSS selector, and returns the first element that matches the selector.</p>
<h4 id="queryselectorall">.querySelectorAll()</h4>
<p>This works similar to above which returns a node list collection of all matching elements.</p>
&lt;p class="master"&gt;Vue&lt;/p&gt;
&lt;p class="master"&gt;Angular&lt;/p&gt;
&lt;script&gt;
const master = document.querySelectorAll(".master")
console.log(master[1])  //&lt;p class="master"&gt;Vue&lt;/p&gt;
&lt;/script&gt;</code></pre>
<h3 id="summary-of-how-to-select-dom-elements">Summary of How to Select DOM Elements</h3>
<p>When you need to select a DOM element, you have four different options to choose from, four different ways of doing a particular thing (selecting an element(s)).</p>
<p>So if you don't remember the first, you use the second. And if by chance you don't remember both you still have options 3 and 4. Is it just me or does JavaScript make our lives easier? :)</p>
<p>My personal recommendation is to stick to option 1 or option 4a (queryselector with an Id). From your early days of learning HTML you likely understood that elements shouldn't have the same id, that is the id is a unique identifier of an element within the document. </p>
<p>With that in mind, selecting an element with its id is a "safe bet" because you wouldn't get to apply same "manipulation" to different elements (unless perhaps that's what you want to achieve - then be my guest, feel free to use other options). </p>
<h2 id="howtotraversethedocument">How to Traverse the Document</h2>
<p>At this stage you'll hopefully agree with me that everything in an HTML document is a node. Also the text inside HTML elements are text nodes.</p>
<p>With the HTML DOM, you can navigate the node tree and access nodes in the tree using node relationships we talked about earlier (parent, child(ren), sibling(s) etc).</p>
<blockquote>
<p>New nodes can be created, and all nodes can be modified or deleted.</p>
</blockquote>
<h3 id="alittlereview">A little review</h3>
<ul>
<li>Every node has exactly one parent, except the top node (which has no parent).</li>
<li>A node can have a more than one child.</li>
<li>Siblings (brothers or sisters) are nodes with the same parent.</li>
</ul>
<p>In this section, we are going to see how to get the parent element, siblings of an element, and children of an element. I will be using the following node properties to achieve these things:</p>
<ul>
<li>parentNode</li>
<li>childrenNodes</li>
<li>firstElementChild</li>
<li>lastElementChild</li>
<li>nextElementSibling</li>
<li>previousElementSibling</li>
</ul>
<p>Also I will be using only this HTML page below to show you how we use each of these node properties. And from section 4 above I will be showing you how to manipulate the DOM.</p>
<p>That is the objective of this article - to know how to manipulate the DOM. It doesn't really matter if you know how to select elements and traverse the DOM if you don't know how to manipulate it. It's important to know how to add CSS styling, create and append elements, set innerHTML and handle events.</p>
<p>That's the juice of this article so please stay with me. Let's continue.</p>
&lt;div id="firstchild"&gt;i am a first child&lt;/div&gt;
&lt;p id="secondchild"&gt;i am the second child&lt;/p&gt;
&lt;h4&gt;i am alive&lt;/h4&gt;
&lt;h1&gt;hello world&lt;/h1&gt;
&lt;p&gt;i am the last child&lt;/p&gt;
&lt;/div&gt;
const parent = document.getElementById('parent').lastElementChild
console.log(parent) //&lt;p&gt;i am the last child&lt;/p&gt;
const parent2 = document.getElementById('parent').children[3]
console.log(parent2) //&lt;h1&gt;hello world&lt;/h1&gt;
const secondchild = document.getElementById('secondchild')
console.log(secondchild) //&lt;p id="secondchild"&gt;i am the second child&lt;/p&gt;
console.log(secondchild.parentNode) //&lt;div id="parent"&gt;...&lt;/div&gt;
console.log(secondchild.nextElementSibling) //&lt;h4&gt;i am alive&lt;/h4&gt;
console.log(secondchild.previousElementSibling) //&lt;div id="firstchild"&gt;i am a first child&lt;/div&gt;</code></pre>
<h2 id="howtomanipulateelementsinthedom">How to Manipulate Elements in the DOM</h2>
<p>In this section we are going to look at:</p>
<ul>
<li>How to create elements</li>
<li>How to set the innerHTML/ text content of an element</li>
<li>How to append an element</li>
<li>How to insert one element before another</li>
<li>How to replace a child element</li>
<li>How to remove a child element</li>
</ul>
&lt;div id="parent"&gt;
&lt;div id="firstchild"&gt;i am a first child&lt;/div&gt;
&lt;p id="secondchild"&gt;i am the second child&lt;/p&gt;
&lt;h4&gt;i am alive&lt;/h4&gt;
&lt;h1&gt;hello world&lt;/h1&gt;
&lt;p&gt;i am the last child&lt;/p&gt;
&lt;/div&gt;
</code></pre>
<h3 id="howtocreateelements">How to Create Elements</h3>
<p>The code above shows a parent element with 5 children elements. Let's assume we want to add another <code>div</code> tag with JavaScript. We would definitely have to create a new element with the <code>createElement()</code> method, like this:</p>
console.log(createEl) //&lt;div&gt;&lt;/div&gt;</code></pre>
<h3 id="howtosetinnerhtml">How to Set innerHTML</h3>
<p>We have successfully created a <code>div</code> tag, but currently it does not have any text node. We are going to use the <code>.innerHTML()</code> property to add its text node.</p>
console.log(createEl) //&lt;div&gt;​i am a frontend developer​&lt;/div&gt;​
</code></pre>
<h3 id="howtoappendanelement">How to Append an Element</h3>
<p>What we have achieved so far is creating an element and inserting its text node. But this created element is not part of the DOM tree yet.</p>
<p>So now, I am going to show you how to append it to that HTML page in this section. Building on the code above:</p>
const innerhtml = createEl.innerHTML = 'i am a frontend developer'
const parentEl = document.getElementById('parent')
parentEl.appendChild(createEl)
console.log(parentEl)
</code></pre>
<h3 id="howtoinsertoneelementbeforeanother">How to Insert One Element Before Another</h3>
<p>If you noticed from the console log image above, the appended child <code>div</code> tag was added at the bottom automatically.</p>
<p>What if for some reason you want to append it anywhere of your choice? Maybe before the first element or before the fourth element. I am here to tell you that it is very much possible. In the code below we are going to add it before the current first element.</p>
<p>We are going to be using the <code>insertBefore()</code> JavaScript method which accepts two parameters, the <code>newNode</code> and the <code>existingNode</code> in this order =&gt; <code>document.insertBefore(newNode, existingNode)</code>.</p>
const firstchildEl = document.getElementById('firstchild')
const createEl = document.createElement('div')
const innerhtml = createEl.innerHTML = 'i am a frontend developer'
parentEl.insertBefore(createEl, firstchildEl)
console.log(parentEl)
</code></pre>
<h3 id="howtoreplaceachildelement">How to Replace a Child Element</h3>
<p>We are going to be using the <code>replaceChild()</code> JavaScript method which accepts two parameters to replace our first element with the newly created one. It works in this order =&gt; <code>document.replaceChild(newNode, existingNode)</code>.</p>
const parentEl = document.getElementById('parent')
const createEl = document.createElement('div')
const innerhtml = createEl.innerHTML = 'i am a frontend developer'
parentEl.replaceChild(createEl, firstchildEl)
console.log(parentEl)
</code></pre>
<h3 id="howtoremoveachildelement">How to Remove a Child Element</h3>
<p>We are going to be using the <code>removeChild()</code> JavaScript method which accepts just one parameter ()that is the element you want to remove, which in this case is our original first element. It works in this order =&gt; <code>document.removeChild(element)</code></p>
const parentEl = document.getElementById('parent')
parentEl.removeChild(firstchildEl)
console.log(parentEl)</code></pre>
<h2 id="howtoaddstylingwithcss">How to Add Styling with CSS</h2>
<p>From the previous examples, we saw how to create an element and append it to the specified parent element.</p>
<p>Therefore, for an element to have a style we have to add a CSS class to it. In this case we'll do it with JavaScript.</p>
<p>I am not only going to show you how to add a class. I will also show you how to remove a class and how to also toggle between classes.</p>
<p>Don't worry, it's not difficult. I am here to walk you through all of it.</p>
<h3 id="howtoaddacssclass">How to Add a CSS Class</h3>
<p>Currently we have a normal HTML button with an id of "master" but without any style applied to it. See the image below:</p>
<p><img src="https://www.freecodecamp.org/news/content/images/2021/01/ttt.png" alt="ttt"></p>
<p>The first thing we are going to do is create the CSS style for the button.</p>
<p>Next, in our JavaScript I will add an event listener to the button so that, when you click it, JavaScript automatically adds the CSS style with a class of "button".</p><pre><code class="language-javascript"> &lt;style&gt;
body{
background-color: hotpink;
display: flex;
align-items: center;
}
.button{
background-color: blueviolet;
width: 200px;
border: none;
font-size: 2rem;
padding: 0.5rem;
border-radius: 5px;
cursor: pointer;
}
&lt;/style&gt;
&lt;button id="master"&gt;Click me&lt;/button&gt;
const buttonEl = document.getElementById('master')
buttonEl.addEventListener('click', addFunction)
function addFunction(){
buttonEl.classList.add('button')
}</code></pre>
<p>After the button is clicked, you'll see the below. Beautiful right?</p>
<h3 id="howtoremoveaclass">How to Remove a Class</h3>
<p>Still using the same example above, we are going to remove the CSS style, this time around with <code>classList.remove()</code> in JavaScript. You probably already guessed what would happen, right?</p>
<p>Exactly, the button will go back to its default state.</p>
const buttonEl = document.getElementById('master')
buttonEl.addEventListener('click', addFunction)
function addFunction(){
buttonEl.classList.remove('button')
}
</code></pre>
<h3 id="howtotoggleaclass">How to Toggle a Class</h3>
<p>Let's say you don't want to remove the CSS style completely. You want a way to toggle between the styled and unstyled button.</p>
<p>The <code>classList.toggle()</code> JavaScript method gives you that ability.</p>
<p>The <code>classList.toggle()</code> method is typically used in most social media platforms like Twitter. It allows you to like a post with a button and unlike it with that same button whenever you want.</p>
<p>So JavaScript checks if our button has the CSS class.</p>
<p>If it has the class and you click the button, it REMOVES it. If it doesn't have the class and you click the button, it ADDS it.</p>
const buttonEl = document.getElementById('master')
buttonEl.addEventListener('click', addFunction)
function addFunction(){
buttonEl.classList.toggle('button')
}
</code></pre>
<h1 id="eventhandling">Event handling</h1>
<h3 id="whatarehtmlevents">What are HTML events?</h3>
<p>HTML events are "things" that happen to HTML elements like the click of a button, input in a text area, and so on. When an event occurs like the ones above, you can write JavaScript code which we call an event handler that will be executed.</p>
<p>These event handlers are JavaScript functions. So when an event occurs on an element, the handler function is executed.</p>
<h3 id="eventlisteners">Event listeners</h3>
<p>So far we have been making use of event listeners in basically every example above. This should show how important event listeners are in manipulating the DOM.</p>
<p>To add an event listener to an element or any DOM object, we need a method which is <code>addEventListener()</code>. This method is preferred to the old one where we include the event to be handled in the html markup.</p>
<p>With this the JavaScript is separated from the html markup which makes it cleaner and more readable.</p>
<p>I like the idea of separate JS, separate CSS, and so on, so if you are like me you would like this event listener.</p>
<p>An event listener accepts 3 parameters.</p>
<ul>
<li>The first one is the type of event, like "click" and so on.</li>
<li>The second parameter is the function to be executed.</li>
<li>The third parameter is a boolean value specifying whether to use event bubbling or event capturing. <strong>This parameter is optional.</strong></li>
</ul>
<blockquote>
<p>You can add many event handlers to one element.</p>
</blockquote>
<blockquote>
<p>You can also add many event handlers of the same type to one element, like two "click" events.</p>
</blockquote>
<h2 id="conclusion">Conclusion</h2>
<p>Knowing how to manipulate the DOM with JavaScript is very important. It's not something you can decide not to know.</p>
<p>If you understand the examples/illustrations I've given above, you might be able to build <strong>little</strong> JS projects. I can not over-emphasize the importance of building projects if you want to be a good developer.</p>
<p><img src="https://media.giphy.com/media/mVJ5xyiYkC3Vm/source.gif" alt="kkk-1"></p>
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
