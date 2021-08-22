---
card: "/images/default.jpg"
tags: [Dom]
description: "When I started out as a web developer, people often threw aro"
author: "Milad E. Fahmy"
title: "The DOM Explained for Beginners – How the Document Object Model Works"
created: "2021-08-16T10:03:47+02:00"
modified: "2021-08-16T10:03:47+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-dom tag-document-object-model tag-javascript tag-web-development ">
<header class="post-full-header">
<h1 class="post-full-title">The DOM Explained for Beginners – How the Document Object Model Works</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2021/05/DOM--1-.png 300w,
/news/content/images/size/w600/2021/05/DOM--1-.png 600w,
/news/content/images/size/w1000/2021/05/DOM--1-.png 1000w,
/news/content/images/size/w2000/2021/05/DOM--1-.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2021/05/DOM--1-.png" alt="The DOM Explained for Beginners – How the Document Object Model Works">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
&lt;form name=”LoginFrm” action=”login.php” method=”post”&gt;‌‌Username
&lt;input type=”text” name=”txtUsername” size=”15”/&gt; &lt;br/&gt;‌‌Password
&lt;input type=”password” name=”numPassword” size=”15”/&gt; &lt;br/&gt;‌‌
&lt;input type=”submit” value=”Log In” /&gt;‌‌
&lt;/form&gt;‌‌
&lt;p&gt; New user? &lt;a href=”register.php”&gt; Register here&lt;/a&gt;
&lt;a href=”lostPassword.php”&gt; Retrieve password &lt;/a&gt;
&lt;/p&gt;</code></pre><pre><code class="language-js">var username = document.LoginFrm.txtUsername.value //Gets the username input </code></pre><p>Alright. That's the HTML a login form. You can access all of these elements in JavaScript with the set of properties and methods the DOM API provides. But what are those methods?</p><p>In addition to the property and method included in the code snippet, let's take a look at some of the other popular ones:</p><h3 id="the-queryselectorall-method">The querySelectorAll() method</h3><p>You use this method to access one or more elements from the DOM that matches one or more CSS selectors:</p><pre><code class="language-html">&lt;div&gt; first div &lt;/div&gt;
&lt;p&gt; first paragraph &lt;/p&gt;
&lt;div&gt; second div &lt;/p&gt;
&lt;p&gt; second paragraph &lt;/p&gt;
&lt;div&gt; another div &lt;/div&gt;</code></pre><pre><code class="language-js">var paragraphs = document.querySelectorAll( 'p' );
paragraphs.forEach(paragraph =&gt; paragraph.display = 'none')</code></pre><h3 id="the-createelement-method">The createElement() method</h3><p>You use this method to create a specified element and insert it into the DOM:</p><pre><code class="language-html">&lt;div&gt;first div&lt;/div&gt;
&lt;p&gt; first paragraph&lt;/p&gt;
&lt;div&gt;second div&lt;/div&gt;
&lt;p&gt;second paragraph&lt;/p&gt;
&lt;div&gt;another div&lt;/div&gt;</code></pre><pre><code class="language-js">var thirdParagraph = document.createElement('p');</code></pre><h3 id="the-getelementbyid-method">The getElementById() method</h3><p>You use this method to get an element from the document by its unique id attribute:</p><pre><code class="language-html">&lt;div id='first'&gt; first div &lt;/div&gt;
&lt;p&gt; first paragraph&lt;/p&gt;
&lt;div&gt;second div&lt;/div&gt;
&lt;p&gt; second paragraph&lt;/p&gt;
&lt;div&gt;another div&lt;/div&gt; </code></pre><pre><code class="language-js">var firstDiv = getElementById("first")</code></pre><h3 id="the-getelementsbytagname-method">The getElementsByTagname() method</h3><p>You use this method to access one or more elements by their HTML tag name:</p><pre><code class="language-html">&lt;div&gt; first div &lt;/div&gt;
&lt;p&gt; first paragraph&lt;/p&gt;
&lt;div&gt; second div&lt;/div&gt;
&lt;p&gt;second paragraph&lt;/p&gt;
&lt;div&gt;another div&lt;/div&gt;</code></pre><pre><code class="language-js">divs = document.getElementByTagname("div");</code></pre><h3 id="the-appendchild-element">The appendChild() element</h3><p>You use this element to access one or more elements by their HTML tag name.</p><p>It adds an element as the last child to the HTML element that invokes this method.</p><p>The child to be inserted can be either a newly created element or an already existing one. If it already exists, it will be moved from its previous position to the position of the last child.</p><pre><code class="language-html">&lt;div
&lt;h2&gt;Mangoes&lt;/h1&gt;
&lt;/div&gt;</code></pre><pre><code class="language-js">var p = document.createElement( 'p' );
var h2 = document.querySelector( 'h2' );
var div = document.querySelector( 'div' );
h1.textContent = 'Mangoes are great...'
div.appendChild('p');</code></pre><h3 id="the-innerhtml-property">The innerHTML property</h3><p>You use this property to access the text content of an element.</p><h3 id="the-addeventlistener-property">The addEventListener() property</h3><p>This property attaches an event listener to your element.</p><p>It takes a callback which will run when that event is triggered.</p><pre><code class="language-html">&lt;button&gt;Click to submit&lt;/button&gt;‌‌</code></pre><pre><code class="language-js">var btn = document.querySelector( 'button' );‌‌
btn.addEventListener( 'click' ,foo);‌‌
function foo() { alert( 'submitted!' );
btn.innerHTML = '';
}</code></pre><h3 id="the-replacechild-property">The replaceChild() property</h3><p>This property replaces one child element with another new or existing child element. If it already exists, it will be moved from its previous position to the position of the last child.</p><pre><code class="language-html">&lt;div&gt;‌‌
&lt;h1&gt;Mangoes‌&lt;/h1&gt;‌
&lt;/div&gt;</code></pre><pre><code class="language-js">var h2 = document.createElement( 'h2' );‌‌
var h1 = document.querySelector( 'h1' );‌‌
var div = document.querySelector( 'div' );‌‌
h2.textContent = 'Apple';‌‌
div.insertBefore(h1, h2);</code></pre><h3 id="the-setattribute-method">The setAttribute() method</h3><p>You use this method to set or change the value of an element's attribute.</p><p>Suppose we have an attribute “id” containing the value “favourite.”‌‌ But we want to change the value to “worst” Here's how you can do that with code:</p><pre><code class="language-html">&lt;div&gt;‌‌
&lt;h1 id='favourite'&gt;Mangoes‌‌&lt;/h1&gt;
&lt;/div&gt;</code></pre><pre><code class="language-js">var h1 = document.querySelector( 'h1' );
h1.setAttribute(div, 'worst');</code></pre><h3 id="the-node-method">The node method</h3><p>Every element in an HTML page is known as a node.</p><p>You can access any element by using the following properties with the node object:</p><ul><li><code>node.childNodes</code> – accesses the child nodes of a selected parent‌‌</li><li><code>node.firstChild</code> – accesses the first child of a selected parent‌‌</li><li><code>node.lastChild</code> – accesses the last child of a selected parent.‌‌</li><li><code>node.parentNode</code> – accesses the parent of a selected child node.‌‌</li><li><code>node.nextSibling</code> – accesses the next consecutive element (sibling) of a selected element.‌‌</li><li><code>node.previousSibling</code> – accesses the previous element (sibling) of a selected element</li></ul><pre><code class="language-html">&lt;ul id-“list”&gt;‌‌
&lt;li&gt;&lt;a href= ”about.html”‌‌class = ”list_one”&gt; About‌‌&lt;/a&gt;&lt;/li&gt;‌‌
&lt;li&gt;&lt;a href= ”policy.html”&gt; Policy‌‌&lt;/a&gt;&lt;/ li&gt;‌‌
&lt;li&gt;&lt;a href= ”map.html”&gt; Map‌‌&lt;/a&gt;&lt;/ li&gt;‌‌
&lt;li&gt;&lt;a href= ”Refund.html”&gt; Refund‌‌&lt;/a&gt;&lt;/li&gt;‌‌
&lt;/ul&gt;</code></pre><pre><code class="language-js">var list = document.getElementsById( “site-list” )‌‌
var firstItem = list‌‌.childNodes[0].childNodes[0];</code></pre><h2 id="summary">Summary</h2><p>The DOM is a top down representation of all the elements that make up a web page. It's the interface through which your script interacts with your HTML.</p><p>There are many properties and methods which you can use to get information about the DOM and manipulate it.</p><p>That's all for this article. I hope you learnt something worthwhile.</p><p>If you liked it, you can buy me some coffee <a href="https://ubahthebuilder.tech">here</a>.</p><p>Thank you and see you soon.</p>
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
