---
card: "/images/default.jpg"
tags: [JavaScript]
description: There's no one right way to style your React components. It a
author: "Milad E. Fahmy"
title: "React Styled Components: Inline Styles + 3 Other CSS Styling Approaches (with examples)"
created: "2021-08-15T19:30:28+02:00"
modified: "2021-08-15T19:30:28+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-react tag-css ">
<header class="post-full-header">
<h1 class="post-full-title">React Styled Components: Inline Styles + 3 Other CSS Styling Approaches (with examples)</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/03/brush-painting-color-paint-102127.jpg 300w,
/news/content/images/size/w600/2020/03/brush-painting-color-paint-102127.jpg 600w,
/news/content/images/size/w1000/2020/03/brush-painting-color-paint-102127.jpg 1000w,
/news/content/images/size/w2000/2020/03/brush-painting-color-paint-102127.jpg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/03/brush-painting-color-paint-102127.jpg" alt="React Styled Components: Inline Styles + 3 Other CSS Styling Approaches (with examples)">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>There's no one right way to style your React components. It all depends on how complex your front-end application is, and which approach you're the most comfortable with.</p>
<p>There are four different ways to style React application, and in this post you will learn about them all. Let’s start with inline styling.</p>
<h1 id="inline-styling">Inline Styling</h1>
<p>React components are composed of JSX elements. But just because you’re not writing regular HTML elements doesn’t mean you can’t use the old inline style method. </p>
<p>The only difference with JSX is that inline styles must be written as an object instead of a string.</p>
<p>Here is a simple example:</p><pre><code class="language-JavaScript">import React from "react";
export default function App() {
return (
&lt;h1 style={{ color: "red" }}&gt;Hello World&lt;/h1&gt;
);
}</code></pre>
<p>In the style attribute above, the first set of curly brackets will tell your JSX parser that the content between the brackets is JavaScript (and not a string). The second set of curly bracket will initialize a JavaScript object.</p>
<p>Style property names that have more than one word are written in camelCase instead of using the traditional hyphenated style. For example, the usual <code>text-align</code> property must be written as <code>textAlign</code> in JSX:</p><pre><code class="language-JavaScript">import React from "react";
export default function App() {
return (
&lt;h1 style={{ textAlign: "center" }}&gt;Hello World&lt;/h1&gt;
);
}</code></pre>
<p>Because the style attribute is an object, you can also separate the style by writing it as a constant. This way, you can reuse it on other elements as needed:</p><pre><code class="language-JavaScript">import React from "react";
const pStyle = {
fontSize: '16px',
color: 'blue'
}
export default function App() {
return (
&lt;p style={pStyle}&gt;The weather is sunny with a small chance of rain today.&lt;/p&gt;
);
}</code></pre>
<p>If you need to extend your paragraph style further down the line, you can use the object spread operator. This will let you add inline styles to your already-declared style object:</p><pre><code class="language-JavaScript">import React from "react";
const pStyle = {
fontSize: "16px",
color: "blue"
};
export default function App() {
return (
&lt;&gt;
&lt;p style={pStyle}&gt;
The weather is sunny with a small chance of rain today.
&lt;/p&gt;
&lt;p style={{ ...pStyle, color: "green", textAlign: "right" }}&gt;
When you go to work, don't forget to bring your umbrella with you!
&lt;/p&gt;
&lt;/&gt;
);
}
</code></pre>
<p>Inline styles are the most basic example of a CSS in JS styling technique.</p>
<p>One of the benefits in using the inline style approach is that you will have a simple component-focused styling technique. By using an object for styling, you can extend your style by spreading the object. Then you can add more style properties to it if you want.</p>
<p>But in a big and complex project where you have a hundreds of React components to manage, this might not be the best choice for you.</p>
<p>You can’t specify pseudo-classes using inline styles. That means <code>:hover</code>, <code>:focus</code>, <code>:active</code>, or <code>:visited</code> go out the window rather than the component.</p>
<p>Also, you can’t specify media queries for responsive styling. Let’s consider another way to style your React app.</p>
<h2 id="css-stylesheets">CSS Stylesheets</h2>
<p>When you build a React application using <code>create-react-app</code>, you will automatically use webpack to handle asset importing and processing. </p>
<p>The great thing about webpack is that, since it handles your assets, you can also use the JavaScript <code>import</code> syntax to import a <code>.css</code> file to your JavaScript file. You can then use the CSS class name in JSX elements that you want to style, like this:</p><pre><code class="language-css">.paragraph-text {
font-size: 16px;
color: 'blue';
}</code></pre><pre><code class="language-JavaScript">import React, { Component } from 'react';
import './style.css';
export default function App() {
return (
&lt;&gt;
&lt;p className="paragraph-text"&gt;
The weather is sunny with a small chance of rain today.
&lt;/p&gt;
&lt;/&gt;
);
}</code></pre>
<p>This way, the CSS will be separated from your JavaScript files, and you can just write CSS syntax just as usual.</p>
<p>You can even include a CSS framework such as <a href="https://create-react-app.dev/docs/adding-bootstrap/" rel="noreferrer nofollow noopener">Bootstrap</a> in your React app using this approach. All you need to is import the CSS file into your root component.</p>
<p>This method will enable you to use all of the CSS features, including pseudo-classes and media queries. But the drawback of using a stylesheet is that your style won’t be localized to your component. </p>
<p>All CSS selectors have the same global scope. This means one selector can have unwanted side effects, and break other visual elements of your app.</p>
<p>Just like inline styles, using stylesheets still leaves you with the problem of maintaining and updating CSS in a big project.</p>
<h1 id="css-modules">CSS Modules</h1>
<p><a href="https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/" rel="noreferrer nofollow noopener">A CSS module</a> is a regular CSS file with all of its class and animation names scoped locally by default.</p>
<p>Each React component will have its own CSS file, and you need to import the required CSS files into your component.</p>
<p>In order to let React know you’re using CSS modules, name your CSS file using the <code>[name].module.css</code> convention.</p>
<p>Here is an example:</p><pre><code class="language-css">.BlueParagraph {
color: blue;
text-align: left;
}
.GreenParagraph {
color: green;
text-align: right;
}</code></pre><pre><code class="language-JavaScript">import React from "react";
import styles from "./App.module.css";
export default function App() {
return (
&lt;&gt;
&lt;p className={styles.BlueParagraph}&gt;
The weather is sunny with a small chance of rain today.
&lt;/p&gt;
&lt;p className={styles.GreenParagraph}&gt;
When you go to work, don't forget to bring your umbrella with you!
&lt;/p&gt;
&lt;/&gt;
);
} </code></pre>
<p>When you build your app, webpack will automatically look for CSS files that have the <code>.module.css</code> name. Webpack will take those class names and map them to a new, generated localized name.</p>
<p>Here is the sandbox for the above example. If you inspect the blue paragraph, you’ll see that the element class is transformed into <code>_src_App_module__BlueParagraph</code>.</p>
<p>CSS Modules ensures that your CSS syntax is scoped locally. </p>
<p>Another advantage of using CSS Modules is that you can compose a new class by inheriting from other classes that you’ve written. This way, you’ll be able to reuse CSS code that you’ve written previously, like this:</p><pre><code class="language-css">.MediumParagraph {
font-size: 20px;
}
.BlueParagraph {
composes: MediumParagraph;
color: blue;
text-align: left;
}
.GreenParagraph {
composes: MediumParagraph;
color: green;
text-align: right;
}</code></pre>
<p>Finally, in order to write normal style with a global scope, you can use the <code>:global</code> selector in front of your class name:</p><pre><code class="language-css">:global .HeaderParagraph {
font-size: 30px;
text-transform: uppercase;
}</code></pre>
<p>You can then reference the global scoped style like a normal class in your JS file:</p><pre><code class="language-html">&lt;p className="HeaderParagraph"&gt;Weather Forecast&lt;/p&gt;</code></pre>
<h1 id="styled-components">Styled Components</h1>
<p>Styled Components is a library designed for React and React Native. It combines both the CSS in JS and the CSS Modules methods for styling your components.</p>
<p>Let me show you an example:</p><pre><code class="language-JavaScript">import React from "react";
import styled from "styled-components";
// Create a Title component that'll render an &lt;h1&gt; tag with some styles
const Title = styled.h1`
font-size: 1.5em;
text-align: center;
color: palevioletred;
`;
export default function App() {
return &lt;Title&gt;Hello World!&lt;/Title&gt;;
}</code></pre>
<p>When you write your style, you’re actually creating a React component with your style attached to it. The funny looking syntax of <code>styled.h1</code> followed by backtick is made possible by utilizing JavaScript’s tagged template literals. </p>
<p>Styled Components were created to tackle the following problems:</p>
<ul>
<li><strong>Automatic critical CSS</strong>: Styled-components keep track of which components are rendered on a page, and injects their styles and nothing else automatically. Combined with code splitting, this means your users load the least amount of code necessary.</li>
<li><strong>No class name bugs</strong>: Styled-components generate unique class names for your styles. You never have to worry about duplication, overlap, or misspellings.</li>
<li><strong>Easier deletion of CSS</strong>: It can be hard to know whether a class name is already used somewhere in your codebase. Styled-components makes it obvious, as every bit of styling is tied to a specific component. If the component is unused (which tooling can detect) and gets deleted, all of its styles get deleted with it.</li>
<li><strong>Simple dynamic styling</strong>: Adapting the styling of a component based on its props or a global theme is simple and intuitive, without you having to manually manage dozens of classes.</li>
<li><strong>Painless maintenance</strong>: You never have to hunt across different files to find the styling affecting your component, so maintenance is a piece of cake no matter how big your codebase is.</li>
<li><strong>Automatic vendor prefixing</strong>: Write your CSS to the current standard and let styled-components handle the rest.</li>
</ul>
<p>You get all of these benefits while still writing the same CSS you know and love – just bound to individual components.</p>
<p>If you’d like to learn more about styled components, you can visit the <a href="https://styled-components.com/docs" rel="noreferrer nofollow noopener">documentation</a> and see more examples.</p>
<h1 id="conclusion">Conclusion</h1>
<p>Many developers still debate the best way to style a React application. There are both benefits and drawbacks in writing CSS in a non-traditional way.</p>
<p>For a long time, separating your CSS file and HTML file was regarded as the best practice, even though it caused a lot of problems.</p>
<p>But today, you have the choice of writing component-focused CSS. This way, your styling will take advantage of React’s modularity and reusability. You are now able to write more enduring and scalable CSS.</p>
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
