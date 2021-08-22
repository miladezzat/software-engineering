---
card: "https://cdn-media-1.freecodecamp.org/images/1*q8vHD5jcU_xZNqIgs-J-Pg.jpeg"
tags: [JavaScript]
description: by Leonardo Maldonado
author: "Milad E. Fahmy"
title: "What’s the Document Object Model, and why you should know how to use it."
created: "2021-08-15T19:40:34+02:00"
modified: "2021-08-15T19:40:34+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-dom tag-tech tag-programming tag-productivity ">
<header class="post-full-header">
<h1 class="post-full-title">What’s the Document Object Model, and why you should know how to use it.</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*q8vHD5jcU_xZNqIgs-J-Pg.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*q8vHD5jcU_xZNqIgs-J-Pg.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*q8vHD5jcU_xZNqIgs-J-Pg.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*q8vHD5jcU_xZNqIgs-J-Pg.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*q8vHD5jcU_xZNqIgs-J-Pg.jpeg" alt="What’s the Document Object Model, and why you should know how to use it.">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Leonardo Maldonado</p>
<h1 id="what-s-the-document-object-model-and-why-you-should-know-how-to-use-it-">What’s the Document Object Model, and why you should know how to use it.</h1>
<figcaption>The DOM explained by an easy way. Photo by <a href="https://unsplash.com/@remiyuan" rel="noopener" target="_blank" title="">Remi Yuan</a> on <a href="https://unsplash.com/photos/FEhYjpC1axQ" rel="noopener" target="_blank" title="">Unsplash</a></figcaption>
</figure>
<p>So, you’ve studied HTML, you’ve created your first tags, learned about CSS, made beautiful forms, amazing buttons, responsive pages and have started to show everyone how amazing all that was.</p>
<p>But then you decide that you want to take another step in your learning, and you’ve started wonder to yourself: “How can I add animation to my page? I wish that button made some animation on my page when I clicked it!”</p>
<p>Well, that’s where the DOM comes to solve your problem. You’ve probably heard a lot about it, but you might not know yet what is it and what problems it solves. So let’s dig in.</p>
<h3 id="so-what-s-the-dom">So, what’s the DOM?</h3>
<p>Do you know all those cool animations that you see around, that make you think to yourself, “Wow, I wish I could make something like that”? All of those animations are made by manipulating the DOM. I will now explain to you how to start manipulating it and making your websites look cooler.</p>
<p>The DOM (Document Object Model) is an interface that represents how your HTML and XML documents are read by the browser. It allows a language (JavaScript) to manipulate, structure, and style your website. After the browser reads your HTML document, it creates a representational tree called the Document Object Model and defines how that tree can be accessed.</p>
<h3 id="advantages">Advantages</h3>
<p>By manipulating the DOM, you have infinite possibilities. You can create applications that update the data of the page without needing a refresh. Also, you can create applications that are customizable by the user and then change the layout of the page without a refresh. You can drag, move, and delete elements.</p>
<p>As I said, you have infinite possibilities — you just need to use your creativity.</p>
<h3 id="representation-by-the-browser">Representation by the browser</h3>
<figcaption>The representational tree that the browser create after it read your document.</figcaption>
</figure>
<p>In the image above, we can see the representational tree and how it is created by the browser. In this example, we have four important elements that you’re gonna see a lot:</p>
<ol>
<li><strong>Document</strong>: It treats all the <em>HTML</em> documents.</li>
<li><strong>Elements</strong>: All the tags that are inside your <em>HTML</em> or <em>XML</em> turn into a DOM element.</li>
<li><strong>Text</strong>: All the tags’ content.</li>
<li><strong>Attributes</strong>: All the attributes from a specific <em>HTML</em> element. In the image, the attribute <em>class=”hero”</em> is an attribute from the <em>&lt;</em>p&gt; element.</li>
</ol>
<h3 id="manipulating-the-dom">Manipulating the DOM</h3>
<p>Now we’re getting to the best part: starting to manipulate the DOM. First, we’re gonna create an HTML element as an example to see some methods and how events work.</p><pre><code>&lt;!DOCTYPE html&gt;  &lt;html lang="pt-br"&gt;  &lt;head&gt;      &lt;meta charset="UTF-8"&gt;      &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;      &lt;meta http-equiv="X-UA-Compatible" content="ie=edge"&gt;      &lt;title&gt;Entendendo o DOM (Document Object Model)&lt;/title&gt;  &lt;/head&gt;  &lt;body&gt;      &lt;div class="container"&gt;          &lt;h1&gt;&lt;time&gt;00:00:00&lt;/time&gt;&lt;/h1&gt;          &lt;button id="start"&gt;Start&lt;/button&gt;          &lt;button id="stop"&gt;Stop&lt;/button&gt;          &lt;button id="reset"&gt;Reset&lt;/button&gt;      &lt;/div&gt;  &lt;/body&gt;  &lt;/html&gt;</code></pre>
<p>Very simple, right? Now we’re going to learn more about DOM methods: how to get our elements and start manipulating.</p>
<h3 id="methods">Methods</h3>
<p>The DOM has a lot of methods. They are the connection between our nodes (elements) and events, something that we’ll learn more about later. I’m gonna show you some of the most important methods and how they’re used. There are a lot more methods that I’m not going to show you here, but you can see all of them methods <a href="https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction" rel="noopener">here</a>.</p>
<h4 id="getelementbyid-">getElementById()</h4>
<p>This method returns the element that contains the name <em>id</em> passed. As we know, <em>id</em>’s should be unique, so it’s a very helpful method to get only the element you want.</p><pre><code>var myStart = document.getElementsById('start');</code></pre>
<p><strong>myStart</strong>: Our variable name that looks similar to our <em>id</em> passed.</p>
<p><strong>start</strong>: <em>id</em> passed. And in case we do not have any <em>id</em> with that specific name, it returns <em>null</em>.</p>
<h4 id="getelementsbyclassname-">getElementsByClassName()</h4>
<p>This method returns an <em>HTMLCollection</em> of all those elements containing the specific name <em>class</em> passed.</p><pre><code>var myContainer = document.getElementsByClassName('container');</code></pre>
<p><strong>myContainer</strong>: Our variable name that looks similar to our <em>class </em>passed.</p>
<p><strong>.container</strong>: our <em>class</em> passed. In case we do not have any <em>class </em>with that specific name, it returns <em>null</em>.</p>
<h4 id="getelementsbytagname-">getElementsByTagName()</h4>
<p>This works the same way as those methods above: it also returns an <em>HTMLCollection,</em> but this time with a single difference: it returns all those <em>elements</em> with the tag name passed.</p><pre><code>var buttons = document.getElementsByTagName('button');</code></pre>
<p><strong>buttons</strong>: Our variable name that looks similar to our <em>tag name </em>passed.</p>
<p><strong>button</strong>: <em>tag name</em> that we want to get.</p>
<h4 id="queryselector-">querySelector()</h4>
<p>It returns the first <em>element</em> that has the specific <em>CSS selector</em> passed. Just remember that the <em>selector</em> should follow the <em>CSS syntax</em>. In case you do not have any <em>selector</em>, it returns <em>null</em>.</p><pre><code>var resetButton = document.querySelector('#reset');</code></pre>
<p><strong>resetButton</strong>: Our variable name that looks similar to our <em>selector</em> passed.</p>
<p><strong>#reset</strong>: <em>selector</em> passed, and if you don’t have any <em>selector</em> that matches it returns <em>null</em>.</p>
<h4 id="queryselectorall-">querySelectorAll()</h4>
<p>Very similar to the <em>querySelector()</em> method, but with a single difference: it returns all the <em>elements</em> that match with the <em>CSS selector</em> passed. The <em>selector</em> should also follow the <em>CSS syntax</em>. In case you do not have any <em>selector</em>, it returns <em>null</em>.</p><pre><code>var myButtons = document.querySelector('#buttons');</code></pre>
<p><strong>myButtons</strong>: Our variable name that looks similar to our <em>selectors</em> passed.</p>
<p><strong>#buttons</strong>: <em>selector</em> passed, if you don’t have any <em>selector</em> that matches it returns <em>null</em>.</p>
<p>Those are some the most used DOM methods. There are several more methods that you can use, like the createElement(), which creates a new element in your HTML page, and setAttribute() that lets you set new attributes for elements HTML. You can explore them on your own.</p>
<p>Again, you can find all the methods <a href="https://developer.mozilla.org/en-US/docs/Web/API/Element" rel="noopener">here</a>, on the left side in <em>Methods</em>. I really recommend you take a look at some of the others because you might need one of them sometime soon.</p>
<p>Now, we’re going to learn about <strong>Events</strong> — after all without them we can’t make animations in our pages.</p>
<h3 id="events">Events</h3>
<p>The DOM elements have <em>methods</em>, as we just discussed, but they also have <em>events</em>. These events are responsible for make interactivity possible in our page. But here’s one thing that you might not know: <em>events </em>are also <em>methods</em>.</p>
<h4 id="click">click</h4>
<p>One of the most used events is the click event. When the user clicks on a specific element, it will realize some action.</p><pre><code>myStart.addEventListener('click', function(event) {</code></pre><pre><code>// Do something here.</code></pre><pre><code>}, false);</code></pre>
<p>The addEventListener() parameters are:</p>
<ol>
<li>The type of the event that you want (in this case ‘<em>click</em>’).</li>
<li>A callback function</li>
<li>The <em>useCapture</em> by default is false. It indicates whether or not you want to “capture” the event.</li>
</ol>
<h4 id="select">select</h4>
<p>This events is for when you want to <em>dispatch</em> something when a specific element is selected. In that case we’re gonna <em>dispatch</em> a simple <em>alert</em>.</p><pre><code>myStart.addEventListener('select', function(event) {</code></pre><pre><code>alert('Element selected!');</code></pre><pre><code>}, false);</code></pre>
<p>These are some of the most commonly used events. Of course, we have a lot of other events that you can use, like drag &amp; drop events — when a user starts to drag some element you can make some action, and when they drop that element you can make another action.</p>
<p>Now, we’re gonna see how we can traverse the DOM and use some properties.</p>
<h3 id="traversing-the-dom">Traversing the DOM</h3>
<p>You can traverse the DOM and use some properties that we’re gonna see now. With these properties, you can return elements, comments, text, and so on.</p>
<h4 id="-childnodes">.childNodes</h4>
<p>This property returns a <em>nodeList</em> of child <em>nodes</em> of the given element. It returns text, comments, and so on. So, when you want to use it, you should be careful.</p><pre><code>var container = document.querySelector('.container');</code></pre><pre><code>var getContainerChilds = container.childNodes;</code></pre>
<h4 id="-firstchild">.firstChild</h4>
<p>This property returns the first child of the given element.</p><pre><code>var container = document.querySelector('.container');</code></pre><pre><code>var getFirstChild = container.firstChild;</code></pre>
<h4 id="-nodename">.nodeName</h4>
<p>This property returns the name of the given element. In this case, we passed a <em>div</em>, so it will return “<em>div</em>”.</p><pre><code>var container = document.querySelector('.container');</code></pre><pre><code>var getName = container.nodeName;</code></pre>
<h4 id="-nodevalue">.nodeValue</h4>
<p>This property is specific for <strong>texts and comments</strong>, as it returns or sets the value of the current <em>node</em>. In this case, since we passed a div, it will return <em>null</em>.</p><pre><code>var container = document.querySelector('.container')</code></pre><pre><code>var getValue = container.nodeValue;</code></pre>
<h4 id="-nodetype">.nodeType</h4>
<p>This property returns the <strong>type</strong> of the given element. In this case, it returns “<em>1</em>”.</p><pre><code>var container = document.querySelector('.container')</code></pre><pre><code>var getValue = container.nodeType;</code></pre>
<p>But, what does “<em>1</em>” mean anyway? It is basically the <strong>nodeType</strong> of the given element. In this case, it is an <em>_ELEMENT_NODE_ </em>and returns null. If this were an attribute, it would be returned as “<em>2</em>” to us and the attribute value.</p>
<figcaption>A table containing all types of nodeTypes and the nodeName and nodeValue returned of each of them.</figcaption>
</figure>
<p>You can read more about <em>nodeTypes</em> <a href="https://www.w3schools.com/jsref/prop_node_nodetype.asp" rel="noopener">here</a>.</p>
<h3 id="elements">Elements</h3>
<p>These properties, instead of those above, return to us only <strong>elements</strong>. They are more often used and recommended because they can cause less confusion and are easier to understand.</p>
<h4 id="-parentnode">.parentNode</h4>
<p>This property returns the parent of the node given.</p><pre><code>var container = document.querySelector('.container')</code></pre><pre><code>var getParent = container.parentNode;</code></pre>
<h4 id="-firstelementchild">.firstElementChild</h4>
<p>Returns the first child element of the given element.</p><pre><code>var container = document.querySelector('.container')</code></pre><pre><code>var getValue = container.firstElementChild;</code></pre>
<h4 id="-lastelementchild">.lastElementChild</h4>
<p>Returns the last child element of the given element.</p><pre><code>var container = document.querySelector('.container')</code></pre><pre><code>var getValue = container.lastElementChild;</code></pre>
<p>These are some of the many properties that the DOM has. It’s very important for you to know the basics about the DOM, how it works, and its methods and properties, because some day you may need it.</p>
<h3 id="conclusion">Conclusion</h3>
<p>The DOM provides us with several important API's for creating fantastic and innovative applications. If you understand the basics of it you can create incredible things. If you want to read more about the DOM, you can click <a href="https://developer.mozilla.org/en-US/docs/Glossary/DOM" rel="noopener">here </a>and read all the MDN docs.</p>
<p>? F<a href="https://twitter.com/leonardomso" rel="noopener"><strong>ollow me on Twitter! </strong></a><br><strong>⭐</strong> F<a href="https://github.com/leonardomso" rel="noopener"><strong>ollow me on GitHub!</strong></a></p>
<p><em>I’m looking for a remote opportunity, so if have any I’d love to hear about it, so please contact me!</em></p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
