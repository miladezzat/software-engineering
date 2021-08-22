---
card: "/images/default.jpg"
tags: [CSS]
description: "CSS selectors are one of the most important parts of CSS. The"
author: "Milad E. Fahmy"
title: "How to Use CSS Selectors to Style Your Web Page"
created: "2021-08-16T10:03:45+02:00"
modified: "2021-08-16T10:03:45+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-css tag-web-design tag-html tag-web-development ">
<header class="post-full-header">
<h1 class="post-full-title">How to Use CSS Selectors to Style Your Web Page</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2021/05/CSS-Selectors.png 300w,
/news/content/images/size/w600/2021/05/CSS-Selectors.png 600w,
/news/content/images/size/w1000/2021/05/CSS-Selectors.png 1000w,
/news/content/images/size/w2000/2021/05/CSS-Selectors.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2021/05/CSS-Selectors.png" alt="How to Use CSS Selectors to Style Your Web Page">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>CSS selectors are one of the most important parts of CSS. They give you the ability to target HTML elements on your web page that you want to style.</p><p>Without CSS selectors, you wouldn't be able to style your page to look how you want.</p><p>Thankfully CSS selectors have been around for a while, and you can style elements on your however you want. </p><p>But if you to really want to unlock the power of CSS and create amazing elements, then you need to understand what you can do with CSS selectors. Namely, you need to understand the basic CSS selectors before you work your way up to the advanced CSS selectors.</p><p>This post will look into both. By the end, it will have you well on your way to unlocking the power of CSS selectors to create your own incredible elements. So let's get started by looking at what CSS selectors are.</p><h2 id="what-are-css-selectors">What are CSS Selectors?</h2><p>If you've written any CSS before, then you've likely seen a CSS selector. They are the first part of a CSS rule. You use CSS selectors to select the HTML elements you want to style.</p><p>In CSS, selectors are defined by the CSS selector specification. This means that each selector must be <a href="https://www.w3.org/TR/selectors-3/#selectors">supported</a> by the browser for it to actually work.</p><p>CSS selectors tend to be split into five different categories. This post is going to look at them in two key categories of basic and advanced. Below are the five categories.</p><ol><li>Simple selectors</li><li>Combinator selectors</li><li>Pseudo-class selectors</li><li>Pseudo-element selectors</li><li>Attribute selectors</li></ol><p>In order to get good at something you have to understand the basics so let's start there.</p><h1 id="basic-css-selectors">Basic CSS Selectors</h1><p>You've likely seen many types of CSS selectors – the fundamental CSS selectors that are enough to get you building stylish web pages. Let's look at each of the basic CSS selectors to ensure we understand what they do.</p><h2 id="css-element-type-selector">CSS Element (type) selector</h2><p>The CSS element selector selects HTML elements based on the element name. In HTML element names are things like <code>h1</code>, <code>p</code>, or semantic names like <code>article</code> or <code>footer</code>. Therefore, element selectors select all the HTML elements with the name you select.</p><p>Let's look a CSS selector example for element selectors:</p><pre><code class="language-css">/* selecting all h3 elements */
h3 {
text-align: center;
color: blue;
}
/* selecting all article elements */
article {
font-size: 14px;
line-height: 1.1px;
}
</code></pre><p>In the example above, we have selected all elements on the page that are of the type <code>h3</code> and <code>article</code> and applied styles to those elements.</p><p>Element selectors help you keep your code simple by applying the styling to all elements on a page of that type. This means you only have to keep track of your styles for those elements in one place.</p><h2 id="css-id-selector">CSS id selector</h2><p>The id selector selects the HTML elements that have an id attribute that matches the selector. As you cannot have more than one element with the same id in a HTML document, this selector allows you to select an individual element. This means that the styling on the selected element will be unique.</p><p>To select an element with a specific id, you use a <code>#</code> (hash) character followed by the id of the HTML element. In this case it would look something like this <code>#id-name</code>.</p><p>Let's look a CSS selector example for the id selector.</p><pre><code class="language-css">#projects-flex-container {
width: 90vw;
display: flex;
}
color: #badA55;
padding: 5px;
border-radius: 5px;
}
margin: 0;
padding: 0;
}
</code></pre><p>In the above example, it has zeroed out the margin and padding for the whole page by using the universal selector.</p><h1 id="how-to-group-css-selectors">How to Group CSS Selectors</h1><p>Before we get into the advanced CSS selectors, we need to quickly look at grouping CSS selectors. This is a common practice you will see out in the wild and it helps make your code clean and readable.</p><p>Grouping allows you to select multiple HTML elements at once and only state their style definitions once.</p><p>Let's look at an example of a grouping selector to explain.</p><pre><code class="language-css">h1 {
text-align: left;
letter-spacing: 3px;
color: #111111;
}
h2 {
text-align: left;
letter-spacing: 3px;
color: #111111;
}
h3 {
text-align: left;
letter-spacing: 3px;
color: #111111;
}
</code></pre><p>In the above CSS code we have three elements <code>h1</code>, <code>h2</code> and <code>h3</code> and each of these elements have the same style definitions. As a result we can clean up our code by grouping the selectors.</p><p>To group selectors we separate each selector with a <code>,</code> character (comma).</p><pre><code class="language-css">h1, h2, h3 {
text-align: left;
letter-spacing: 3px;
color: #111111;
}
</code></pre><p>Because their style definitions are the same, we now only have to write it once.</p><p>Note that grouping selectors can be used for all of the selectors mentioned in this article, meaning the selectors don't have to match. </p><p>We could group a class selector with an id selector if we want them to share style definitions. And we could group the style property and values that match and then define different definitions on each element. </p><p>Let's extend our example to understand this concept.</p><pre><code class="language-css">/*group the selectors and state definitions that are the same*/
h1, h2, h3 {
text-align: left;
letter-spacing: 3px;
color: #111111;
}
/*apply individual styles to selectors*/
h1 {
font-size: 72px;
}
h2 {
font-size: 48px;
}
h3 {
font-size: 32px;
}
</code></pre><p>Today we are going to look at the five most common attribute selectors. In order to understand these five attribute selectors, let's look at each of them with examples.</p><h3 id="present-attribute-selector">Present attribute selector</h3><p>This attribute selector finds any element based on where it includes an attribute.</p><p>Let's look at an example of a present selector to explain.</p><pre><code class="language-css">a[title] {
color: khaki;
background: grey;
}
</code></pre><p>In the example above, our present selector will find any <code>a</code> element that has a <code>title</code> attribute and apply the style definition to them. All other <code>a</code> elements that don't have a title attribute will not be styled as per above.</p><h3 id="equals-attribute-selector">Equals attribute selector</h3><p>This attribute selector finds an element with an exact match attribute value. To use this selector, you state the attribute name followed by an <code>=</code> (equals) to find the exact match of the value.</p><p>Let's look at an example of an equals selector to explain.</p><pre><code class="language-css">a[href="&lt;https://peterlunch.com/&gt;"] {
color: purple;
}
</code></pre><p>In the example above, the equals selector will find any <code>a</code> element that has an <code>href</code> attribute with the exact value of "<a href="https://peterlunch.com/">https://peterlunch.com/</a>".</p><h3 id="begins-with-attribute-selector">Begins with attribute selector</h3><p>This attribute selector finds any element that begins with a value you specify. To use this selector you state the attribute you are looking for, followed by the <code>^</code> and <code>=</code> characters and then the value you are looking to match.</p><p>Let's look at an example of a begins with selector to explain.</p><pre><code class="language-css">a[href^="https"] {
color: yellow;
text-decoration: none;
}
</code></pre><p>In the example above the begins with selector finds any <code>a</code> element that has an <code>href</code> attribute and that begins with "https".</p><h3 id="ends-with-attribute-selector">Ends with attribute selector</h3><p>Much like the begin with selector, this attribute selector does the opposite and finds any element that ends with a value you specify. </p><p>To use this selector you state the attribute you are looking for, followed by the <code>$</code> and <code>=</code> characters and then the value you are looking to match.</p><p>Let's look at an example of an ends with selector to explain.</p><pre><code class="language-css">img[src$="/blog-imgs"] {
border-radius: 4px;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</code></pre><p>In the above example the ends with selector finds any <code>img</code> element that has an <code>src</code> ending with "/blog-imgs". This is one I actually use for my website.</p><h3 id="contains-attribute-selector">Contains attribute selector</h3><p>This attribute selector finds any element that contains the value you are looking for somewhere in the attributes value. This means that the value must contain at least one occurrence of the value.</p><p>To use this selector you state the attribute you are looking for, followed by the <code>*</code> and <code>=</code> characters and then the value you are looking for an occurrence of.</p><p>Let's look at an example of a contains selector to explain.</p><pre><code class="language-css">a[href*="peterlunch"] {
color: green;
}
</code></pre><p>In the above example the contains attribute selector finds any <code>a</code> element that has an <code>href</code> that contains the value "peterlunch".</p><p>That's it for attribute selectors, let's move onto the next advanced CSS selector.</p><h2 id="combination-selectors">Combination selectors</h2><p>The next advanced CSS selectors are combination selectors. These selectors can combine more than one CSS selector. There are four types of combination selectors in CSS:</p><ol><li>Descendant selectors</li><li>Child selectors</li><li>Adjacent sibling selectors</li><li>General sibling selectors</li></ol><p>To understand how these selectors work, you must first understand that HTML follows a family tree hierarchy. This means that there is a parent element which can contain children, and the children can have children, and so on and so forth like a family tree.</p><pre><code class="language-html">&lt;div&gt; &lt;!--parent--&gt;
&lt;p&gt; &lt;!--div child--&gt;
&lt;article&gt; &lt;!--div child, parent to h1 &amp; p--&gt;
&lt;h1&gt;
&lt;p&gt;&lt;/p&gt;
&lt;/h1&gt;
&lt;/article&gt;
&lt;article&gt;
&lt;h1&gt;
&lt;p&gt;&lt;/p&gt;
&lt;p&gt;&lt;/p&gt;
&lt;/h1&gt;
&lt;/article&gt;
&lt;/div&gt;
</code></pre><p>In the example above, the <code>div</code> is the parent, its children are the <code>article</code> elements, and the articles are parents to the <code>h1</code> and <code>p</code> children.</p><p>With that knowledge front of mind, let's explore each of these combination selectors one by one with examples to understand how they work.</p><h3 id="descendant-combination-selector">Descendant combination selector</h3><p>The descendant combination selector matches all elements that are descendants of a specified element.</p><p>Let's look at an example of a descendant combination to explain.</p><pre><code class="language-css">div p {
line-height: 2em;
}
</code></pre><p>The above example selects all <code>p</code> elements inside of <code>div</code> elements.</p><h3 id="child-combination-selector">Child combination selector</h3><p>The child combination selector matches all elements that are children of a specific element. This is different to the descendant combination selector, as it only selects direct children of the parent element.</p><p>Child selectors are denoted with a <code>&gt;</code> character.</p><p>Let's look at an example of a child combination selector to explain.</p><pre><code class="language-css">div &gt; p {
color: aquamarine;
}
</code></pre><p>Referring to our HTML hierarchy example above, this selector will only find the first <code>p</code> tag and not the <code>p</code> tags within the <code>article</code> tags. It does this as they are not direct children of the parent <code>div</code> element.</p><h3 id="adjacent-sibling-combination-selector">Adjacent sibling combination selector</h3><p>Adjacent Sibling selectors are denoted using a <code>+</code> which separates two selectors and matches the second selector element only if it immediately follows the first element.</p><p>A good real world example of this is having the text that immediately follows an image to be styled like a caption.</p><pre><code class="language-css">img + p {
font-size: 10px;
color: grey;
font-style: italic;
}
</code></pre><p>In the example above, any <code>p</code> element that follows an image will be styled with the above definition.</p><h3 id="general-sibling-combination-selector">General sibling combination selector</h3><p>The general sibling selector selects any elements that are siblings of an element. General sibling selectors are denoted with a <code>~</code> character.</p><p>Let's look at an example of a general sibling selector to explain.</p><pre><code class="language-css">article ~ h1 {
font-weight: 900;
}
</code></pre><p>In the example above it selects all <code>h1</code> elements that are siblings of <code>article</code> elements.</p><h3 id="pseudo-selectors">Pseudo-selectors</h3><p>Pseudo-selectors fall into two buckets. The first is <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes">pseudo-class selectors</a> and the second is <a href="https://peterlunch.com/css-pseudo-elements/">pseudo-element selectors</a>. </p><p>These selectors are complex and have a lot of options. To understand them it is worth reading some separate posts on them as they are complex topics on their own. But, I'll briefly touch on both here.</p><p>Firstly pseudo-class selectors select elements based on a certain state. You might have seen things like <code>:hover</code> or <code>:active</code>. These are the states of elements on your page. You can select elements based on whether that element is in the specified state.</p><p>A quick example would be:</p><pre><code class="language-css">button:hover {
background: red;
}
</code></pre><p>In the example above, when a user hovers over a button the background color will change to red.</p><p>If you want to better understand pseudo-class selectors I encourage you to read <a href="/news/explained-css-pseudo-classes-cef3c3177361/">this post</a> by Nash Vail, who does a fantastic job of explaining them. </p><p>Next are pseudo-element selectors which I have written about <a href="https://peterlunch.com/css-pseudo-elements/">here</a>. These selectors select parts of an element. A part of an element might be the first letter of the element or the content before and after the element. </p><p>With pseudo-element selectors it is important to note that they use <code>::</code> (double colons) vs. <code>:</code> (single colons) like pseudo classes.</p><pre><code class="language-CSS">p {
width: 600px;
line-height: 1.5;
font-weight: 500;
}
p::first-letter {
color: white;
background-color: rgb(55, 97, 117);
border-radius: 3px;
box-shadow: 3px 3px 0 rgb(212, 173, 81);
font-size: 250%;
padding: 6px 3px;
margin-right: 6px;
float: left;
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
