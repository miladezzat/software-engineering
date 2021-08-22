---
card: "https://cdn-media-1.freecodecamp.org/images/1*s2XVUr_QAwNKET1JPOZeEg.jpeg"
tags: [Web Development]
description: "CSS (Cascading Style Sheets) is what makes web pages look goo"
author: "Milad E. Fahmy"
title: "Learn CSS in 5 minutes - A tutorial for beginners"
created: "2021-08-16T10:13:59+02:00"
modified: "2021-08-16T10:13:59+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-web-development tag-css tag-tech tag-programming tag-web-design ">
<header class="post-full-header">
<h1 class="post-full-title">Learn CSS in 5 minutes - A tutorial for beginners</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*s2XVUr_QAwNKET1JPOZeEg.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*s2XVUr_QAwNKET1JPOZeEg.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*s2XVUr_QAwNKET1JPOZeEg.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*s2XVUr_QAwNKET1JPOZeEg.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*s2XVUr_QAwNKET1JPOZeEg.jpeg" alt="Learn CSS in 5 minutes - A tutorial for beginners">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
&lt;style&gt;
h1 {
color: blue;
}
&lt;/style&gt;
&lt;/head&gt;
</code></pre><p>In the style element, we can give the styling to our HTML elements by selecting the element(s) and provide styling attributes. Just like we applied the<code>color</code>property to the <code>h1</code> element above.</p><h4 id="3-external-css">3. External CSS</h4><p>The third and most recommended way to include CSS is using an external stylesheet. We create a stylesheet with a <code>.css</code> extension and include its link in the HTML document, like this:</p><pre><code class="language-html">&lt;head&gt;
&lt;link rel="stylesheet" href="style.css"&gt;
&lt;/head&gt;
</code></pre><p>In the code above, we have included the link of <code>style.css</code> file using the <code>link</code> element. We then write all of our CSS in a separate stylesheet called <code>style.css</code> so that it’s easily manageable.</p><pre><code class="language-css">h1 {
color: blue;
}
</code></pre><p>This stylesheet can also be imported into other <code>HTML</code> files, so this is great for reusability.</p><h3 id="css-selectors">CSS Selectors</h3><p>As we discussed earlier, CSS is a design language which is used to style HTML elements. And in order to style elements, you first have to select them. You’ve already seen a glimpse of how this works, but let’s dive a bit deeper into CSS selectors, and look at three different ways you can select HTML elements.</p><h4 id="1-element">1. Element</h4><p>The first way to select an HTML element is by simply using the name, which is what we did above. Let’s see how it works:</p><pre><code class="language-css">h1 {
font-size: 20px;
}
p {
color: green;
}
div {
margin: 10px;
}
</code></pre><p>The example above is almost self-explanatory. We are selecting different elements like <code>h1</code>, <code>p</code>, <code>div</code> and giving them different style attributes. The <code>font-size</code> controls the size of the text, <code>color</code> sets the text color, and <code>margin</code> adds spacing around the element.</p><h4 id="2-class">2. Class</h4><p>Another way of selecting HTML elements is by using the class attribute. In HTML, we can assign different classes to our elements. Each element can have multiple classes, and each class can also be applied to multiple elements as well.</p><p>Let’s see it in action:</p><pre><code class="language-html">&lt;div class='container'&gt;
&lt;h1&gt; This is heading &lt;/h1&gt;
&lt;/div&gt;
</code></pre><pre><code class="language-css">
.container {
margin: 10px;
}
</code></pre><p>In the code above, we have assigned the class of <code>container</code> to the div element. In the stylesheet, we select our class using <code>.className</code> format and giving it a <code>10px</code> margin.</p><h4 id="3-id">3. ID</h4><p>Like classes, we can also use IDs to select HTML elements and apply styling to them. The only difference between class and ID is that one ID can be assigned to only one HTML element.</p><pre><code class="language-html">&lt;div&gt;
&lt;p id='para1'&gt; This is a paragraph &lt;/p&gt;
&lt;/div&gt;
</code></pre><pre><code class="language-css">
#para1 {
color: green;
font-size: 16px;
}
</code></pre><p>The example above displays how we assign an ID to the paragraph element and later use the ID selector in the stylesheet to select the paragraph and apply the style to it.</p><h3 id="fonts-colors">Fonts &amp; Colors</h3><p>CSS provides us with literally hundreds of options for playing around with fonts and colors and making our HTML elements look pretty. We can choose from two types of font family names:</p><p><strong>1. Generic Family:</strong> a group of font families with a similar look (like ‘Serif’ or ‘Monospace’)</p><p><strong>2. Font Family:</strong> a specific font family (like ‘Times New Roman’ or ‘Arial’)</p><p>For colors, we can use predefined color names, or RGB, HEX, HSL, RGBA, HSLA values.</p><pre><code class="language-html">&lt;div class='container'&gt;
&lt;h1 class='heading1'&gt;
CSS is Coooooool!!!!
&lt;/h1&gt;
&lt;/div&gt;
</code></pre><pre><code class="language-css">.container {
width: 500px;
height: 100px;
background-color: lightcyan;
text-align: center;
}
.heading1 {
font-family: 'Courier New';
color: tomato;
}
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
