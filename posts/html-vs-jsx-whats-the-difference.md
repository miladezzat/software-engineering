---
card: "/images/default.jpg"
tags: [JSX]
description: Hypertext Markup Language (HTML) is the standard language for
author: "Milad E. Fahmy"
title: "HTML vs JSX – What's the Difference?"
created: "2021-08-15T19:26:20+02:00"
modified: "2021-08-15T19:26:20+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-jsx tag-html tag-javascript tag-react tag-beginners-guide ">
<header class="post-full-header">
<h1 class="post-full-title">HTML vs JSX – What's the Difference?</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2021/05/---.png 300w,
/news/content/images/size/w600/2021/05/---.png 600w,
/news/content/images/size/w1000/2021/05/---.png 1000w,
/news/content/images/size/w2000/2021/05/---.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2021/05/---.png" alt="HTML vs JSX – What's the Difference?">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<h2 id="htmlvsjsx">HTML vs JSX</h2>
<p>Hypertext Markup Language (HTML) is the standard language for documents that determine the structure of a web page.</p>
<p>HTML is a very important language in web development. Your code is either in HTML originally or compiles to it so browsers can read it.</p>
<p>JSX, on the other hand, means JavaScript Syntax Extension or JavaScript XML as some like to put it.</p>
<p>It was created as a syntactic sugar for <code>React.createElement()</code>. It is an extension of JavaScript that allows developers to write HTML right within JavaScript. So when you're writing JSX, technically you're writing JavaScript and HTML together.</p>
<p>Also, that means JavaScript's reserved keywords must be kept intact. And that is why the “for” attribute in HTML is “HTMLFor” in JSX, since "for" is one of the commonest JavaScript reserved keywords.</p>
<p>In terms of support by browsers, HTML is supported by all of them. JSX, on the other hand, was never really intended to be, so you need a compiler like Babel or Webpack to transpile JSX into the JavaScript that browsers understand.</p>
<h2 id="themaindifferencesbetweenhtmlandjsx">The Main Differences Between HTML and JSX</h2>
<h3 id="youneedtoreturnasingleparentelementinjsx">You need to return a single parent element in JSX</h3>
<p>One of the major differences between HTML and JSX is that in JSX, you must return a single parent element, or it won't compile.</p>
<p>A lot of devs use <code>&lt;div&gt;...&lt;/div&gt;</code>, but a better one that many people use is “fragment”, <code>&lt;&gt;...&lt;/&gt;</code> which makes the code more readable.</p>
<p>In HTML, you are free to do whatever you want as you don’t have to return a single parent element.</p>
<p><img src="https://www.freecodecamp.org/news/content/images/2021/05/jsx1.png" alt="jsx1"><br>
Here you can see that JSX is not compiling because there's no parent element.</p>
<p><img src="https://www.freecodecamp.org/news/content/images/2021/05/jsx2.png" alt="jsx2"><br>
And here JSX is compiling because there is a parent element (fragment).</p>
<h3 id="youcanimplementjsdirectlyinjsx">You can implement JS directly in JSX</h3>
<p>In JSX, it is possible to write JavaScript directly. You can do this by putting the JavaScript in curly braces <code>{...}</code>. Whereas in HTML, you need a script tag or an external JavaScript file to implement JavaScript:</p>
<pre><code class="language-javascript">const Article = () =&gt; {
return (
&lt;&gt;
&lt;div&gt;
&lt;p&gt;Hi campers&lt;/p&gt;
&lt;p&gt;How's coding going&lt;/p&gt;
&lt;p&gt;What is up?&lt;/p&gt;
{new Date().toDateString()}
&lt;br /&gt;
&lt;br /&gt;
{2 + 5} is seven in word
&lt;br /&gt;
&lt;/div&gt;
&lt;/&gt;
);
};
export default Article;
</code></pre>
<h3 id="alltagsselfcloseinjsx">All Tags Self-close in JSX</h3>
<p>Tags can self-close in JSX. That is, it is possible to have <code>&lt;div&gt;&lt;/div&gt;</code> as <code>&lt;div /&gt;</code> and <code>&lt;span&gt;&lt;/span&gt;</code> as <code>&lt;span /&gt;</code>. You don't want to do that, but its possible.</p>
<p>Self-closing tags in HTML can self-close without the slash before the right angle bracket, that is <code>&lt;br /&gt;</code> could work as <code>&lt;br&gt;</code>. But in JSX, you need to include the slash. This should bring something to mind – JSX heavily relies on HTML 4 syntax.</p>
<p><img src="https://www.freecodecamp.org/news/content/images/2021/05/jsx3.png" alt="jsx3"><br>
Here you can see that JSX is not compiling because there's no forward slash before the right angle bracket of the line break tag.</p>
<p><img src="https://www.freecodecamp.org/news/content/images/2021/05/jsx4.png" alt="jsx4"><br>
And here you can see that JSX is compiling because there is a forward slash in the line break tag.</p>
<h3 id="classnameandhtmlfornotclassandforinjsx">ClassName and HTMLFor, not class and for in JSX</h3>
<p>To define class names and for attributes in JSX, you don't do it as <code>class</code> or <code>for</code>, since both are reserved keywords in JavaScript.</p>
<p>You actually create class components with the <code>class</code> keyword. So, to define class names in JSX, you do it as "<code>className</code>" and for attributes for labels you write "<code>HTMLFor</code>":</p>
<pre><code class="language-javascript">const Article = () =&gt; {
return (
&lt;&gt;
&lt;div className="container"&gt;
&lt;p&gt;Hi campers&lt;/p&gt;
&lt;p&gt;How's coding going&lt;/p&gt;
&lt;p&gt;What is up?&lt;/p&gt;
{new Date().toDateString()}
&lt;br /&gt;
&lt;br /&gt;
{2 + 5} is seven in word
&lt;br /&gt;
&lt;form&gt;
&lt;label htmlFor="name"&gt;Name&lt;/label&gt;
&lt;input type="text" /&gt;
&lt;/form&gt;
&lt;/div&gt;
&lt;/&gt;
);
};
export default Article;
</code></pre>
<h3 id="writeallhtmlattributesincamelcaseinjsx">Write all HTML Attributes in camelCase in JSX</h3>
<p>You need to write all HTML attributes and event references in camelCase while writing JSX. So, <code>onclick</code> becomes <code>onClick</code>, <code>onmouseover</code> becomes <code>onMouseOver</code>, and so on:</p>
<pre><code class="language-javascript">const Article = () =&gt; {
const sayHI = () =&gt; {
alert("Hi Campers");
};
return (
&lt;&gt;
&lt;div className="container"&gt;
&lt;p&gt;Hi campers&lt;/p&gt;
&lt;p&gt;How's coding going&lt;/p&gt;
&lt;p&gt;What is up?&lt;/p&gt;
{new Date().toDateString()}
&lt;br /&gt;
&lt;br /&gt;
{2 + 5} is seven in word
&lt;br /&gt;
&lt;button onClick={sayHI}&gt;ALert Hi&lt;/button&gt;
&lt;/div&gt;
&lt;/&gt;
);
};
export default Article;
</code></pre>
<h3 id="writeinlinestylesasobjectsinjsx">Write Inline Styles as Objects in JSX</h3>
<p>And lastly, to define inline styles for JSX, you write it as an object, with the properties in camelCase, the values in quotes, and then you pass it inline to the JSX.</p>
<p>This means you have to open up a style attribute and use curly braces instead of quotes. This is opposed to HTML where you're free to define millions of styles right inside the opening tag without writing them as objects and putting them in quotes:</p>
<pre><code class="language-javascript">const Article = () =&gt; {
const inlineStyle = {
color: "#2ecc71",
fontSize: "26px",
};
return (
&lt;&gt;
&lt;div className="container"&gt;
&lt;p style={inlineStyle}&gt;Hi campers&lt;/p&gt;
&lt;p&gt;How's coding going&lt;/p&gt;
&lt;p&gt;What is up?&lt;/p&gt;
{new Date().toDateString()}
&lt;br /&gt;
&lt;br /&gt;
{2 + 5} is seven in word
&lt;br /&gt;
&lt;button onClick={sayHI}&gt;ALert Hi&lt;/button&gt;
&lt;/div&gt;
&lt;/&gt;
);
};
export default Article;
</code></pre>
<p>You can choose to write the object directly in the style attribute – that is, by opening up two curly braces and putting the properties and values inside.</p>
<p>But a cleaner way is to define the object outside of the JSX, and then pass it into the opening tag.</p>
<pre><code class="language-javascript">const Article = () =&gt; {
return (
&lt;&gt;
&lt;div className="container"&gt;
&lt;p style={{ color: "#2ecc71", fontSize: "26px" }}&gt;Hi campers&lt;/p&gt;
&lt;p&gt;How's coding going&lt;/p&gt;
&lt;p&gt;What is up?&lt;/p&gt;
{new Date().toDateString()}
&lt;br /&gt;
&lt;br /&gt;
{2 + 5} is seven in word
&lt;br /&gt;
&lt;/div&gt;
&lt;/&gt;
);
};
export default Article;
</code></pre>
<p>Note that you should not use inline styling in plain HTML – you don't want to ruin your website's SEO.</p>
<h2 id="thatsit">That's it!</h2>
<p>Thank you for reading. To connect with me, checkout my <a href="ksound22.github.io">portfolio</a>, or follow me on <a href="https://twitter.com/koladechris">Twitter</a>, where I spend most of my time tweeting and engaging in anything web development.</p>
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
