---
card: "/images/default.jpg"
tags: [React]
description: "When it comes to styling your React app, you have a ton of di"
author: "Milad E. Fahmy"
title: "How to Style Your React App – 5 Ways to Write CSS in 2021"
created: "2021-08-16T10:03:26+02:00"
modified: "2021-08-16T10:03:26+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-react tag-css tag-style tag-web-design tag-web-development ">
<header class="post-full-header">
<h1 class="post-full-title">How to Style Your React App – 5 Ways to Write CSS in 2021</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2021/07/how-to-style-react-apps.png 300w,
/news/content/images/size/w600/2021/07/how-to-style-react-apps.png 600w,
/news/content/images/size/w1000/2021/07/how-to-style-react-apps.png 1000w,
/news/content/images/size/w2000/2021/07/how-to-style-react-apps.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2021/07/how-to-style-react-apps.png" alt="How to Style Your React App – 5 Ways to Write CSS in 2021">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
return (
&lt;section
style={{
fontFamily: '-apple-system',
fontSize: "1rem",
fontWeight: 1.5,
lineHeight: 1.5,
color: "#292b2c",
backgroundColor: "#fff",
padding: "0 2em"
}}
&gt;
&lt;div
style={{
textAlign: "center",
maxWidth: "950px",
margin: "0 auto",
border: "1px solid #e6e6e6",
padding: "40px 25px",
marginTop: "50px"
}}
&gt;
&lt;img
src="https://randomuser.me/api/portraits/women/48.jpg"
alt="Tammy Stevens"
style={{
margin: "-90px auto 30px",
width: "100px",
borderRadius: "50%",
objectFit: "cover",
marginBottom: "0"
}}
/&gt;
&lt;div&gt;
&lt;p
style={{
lineHeight: 1.5,
fontWeight: 300,
marginBottom: "25px",
fontSize: "1.375rem"
}}
&gt;
This is one of the best developer blogs on the planet! I read it daily to improve my skills.
&lt;/p&gt;
&lt;/div&gt;
&lt;p
style={{
marginBottom: "0",
fontWeight: 600,
fontSize: "1rem"
}}
&gt;
Tammy Stevens
&lt;span style={{ fontWeight: 400 }}&gt; · Front End Developer&lt;/span&gt;
&lt;/p&gt;
&lt;/div&gt;
&lt;/section&gt;
);
}</code></pre><p>Despite a few quick benefits, inline styles are only an acceptable choice for very small applications. The difficulties with inline styles become apparent as your code base grows even slightly.</p><p>As the code example above shows, even a small component like this becomes very bulky if all the styles are inline.</p><p>One quick trick however is to put inline styles into reusable variables, which can be stored in a separate file:</p><pre><code class="language-js">const styles = {
section: {
fontFamily: "-apple-system",
fontSize: "1rem",
fontWeight: 1.5,
lineHeight: 1.5,
color: "#292b2c",
backgroundColor: "#fff",
padding: "0 2em"
},
wrapper: {
textAlign: "center",
maxWidth: "950px",
margin: "0 auto",
border: "1px solid #e6e6e6",
padding: "40px 25px",
marginTop: "50px"
},
avatar: {
margin: "-90px auto 30px",
width: "100px",
borderRadius: "50%",
objectFit: "cover",
marginBottom: "0"
},
quote: {
lineHeight: 1.5,
fontWeight: 300,
marginBottom: "25px",
fontSize: "1.375rem"
},
name: {
marginBottom: "0",
fontWeight: 600,
fontSize: "1rem"
},
position: { fontWeight: 400 }
};
export default function App() {
return (
&lt;section style={styles.section}&gt;
&lt;div style={styles.wrapper}&gt;
&lt;img
src="https://randomuser.me/api/portraits/women/48.jpg"
alt="Tammy Stevens"
style={styles.avatar}
/&gt;
&lt;div&gt;
&lt;p style={styles.quote}&gt;
This is one of the best developer blogs on the planet! I read it
daily to improve my skills.
&lt;/p&gt;
&lt;/div&gt;
&lt;p style={styles.name}&gt;
Tammy Stevens
&lt;span style={styles.position}&gt; · Front End Developer&lt;/span&gt;
&lt;/p&gt;
&lt;/div&gt;
&lt;/section&gt;
);
body {
font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
margin: 0;
font-size: 1rem;
font-weight: 1.5;
line-height: 1.5;
color: #292b2c;
background-color: #fff;
}
.testimonial {
margin: 0 auto;
padding: 0 2em;
}
.testimonial-wrapper {
text-align: center;
max-width: 950px;
margin: 0 auto;
border: 1px solid #e6e6e6;
padding: 40px 25px;
margin-top: 50px;
}
.testimonial-quote p {
line-height: 1.5;
font-weight: 300;
margin-bottom: 25px;
font-size: 1.375rem;
}
.testimonial-avatar {
margin: -90px auto 30px;
width: 100px;
border-radius: 50%;
object-fit: cover;
margin-bottom: 0;
}
.testimonial-name {
margin-bottom: 0;
font-weight: 600;
font-size: 1rem;
}
.testimonial-name span {
font-weight: 400;
}</code></pre><pre><code class="language-js">// src/App.js
import "./styles.css";
export default function App() {
return (
&lt;section className="testimonial"&gt;
&lt;div className="testimonial-wrapper"&gt;
&lt;img
className="testimonial-avatar"
src="https://randomuser.me/api/portraits/women/48.jpg"
alt="Tammy Stevens"
/&gt;
&lt;div className="testimonial-quote"&gt;
&lt;p&gt;
This is one of the best developer blogs on the planet! I read it daily to improve my skills.
&lt;/p&gt;
&lt;/div&gt;
&lt;p className="testimonial-name"&gt;
Tammy Stevens&lt;span&gt; · Front End Developer&lt;/span&gt;
&lt;/p&gt;
&lt;/div&gt;
&lt;/section&gt;
);
nav {
ul {
margin: 0;
padding: 0;
list-style: none;
}
li { display: inline-block; }
a {
display: block;
padding: 6px 12px;
text-decoration: none;
}
}</code></pre><p>Compare this with the same code written in a SASS stylesheet:</p><pre><code class="language-css">/* styles.sass */
nav
ul
margin: 0
padding: 0
list-style: none
li
display: inline-block
a
display: block
padding: 6px 12px
text-decoration: none
$font-stack: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
$text-color: #292b2c;
%font-basic {
font-size: 1rem;
}
body {
@extend %font-basic;
font-family: $font-stack;
color: $text-color;
margin: 0;
font-size: 1rem;
font-weight: 1.5;
line-height: 1.5;
background-color: #fff;
}
/* unchanged rules skipped */
.testimonial-name {
@extend %font-basic;
margin-bottom: 0;
font-weight: 600;
span {
font-weight: 400;
}
}</code></pre><p>These styles give us the following features: variables, extending styles and nested styles.</p><p><strong>Variables</strong>: You can use dynamic values by writing variables, just like in JavaScript, by declaring them with a <code>$</code> at the beginning.</p><p>There are two variables that can be used in multiple rules: <code>$font-stack</code>, <code>$text-color</code>.</p><p><strong>Extending / Inheritance</strong>: You can add onto style rules by extending them. To extend rules, you create your own selector which can be reused like a variable. The name of rules that you want to extend start with <code>%</code>.</p><p>The variable <code>%font-basic</code> is inherited by the rules <code>body</code> and <code>.testimonial-name</code>.</p><p><strong>Nesting</strong>: Instead of writing multiple rules that begin with the same selector, you can nest them.</p><p>In <code>.testimonial-name</code> , we use a nested selector to target the <code>span</code> element within it.</p><p>You can find a working version of a React application with SCSS <a href="https://codesandbox.io/s/react-and-scss-forked-2xeu0?file=/src/styles.scss">here</a>.</p><p>👍 Pros:</p><ul><li>Includes many dynamic CSS features like extending, nesting, and mixins</li><li>CSS styles can be written with much less boilerplate over plain CSS</li></ul><p>👎 Cons:</p><ul><li>Like plain CSS, styles are global and not scoped to any one component</li><li>CSS stylesheets is starting to include a number of features that SASS had exclusively, such as CSS variables (not necessarily a con, but worth noting)</li><li>SASS / SCSS often requires setup, such as installing the Node library <code>node-sass</code></li></ul><h2 id="css-modules">CSS Modules</h2><p>CSS modules are another slight alternative to something like CSS or SASS.</p><p>What is great about CSS modules is that they can be used with either normal CSS or SASS. Plus, if you are using Create React App you can start using CSS modules with no setup at all.</p><p>Here is our application written with CSS modules:</p><pre><code class="language-css">/* src/styles.module.css */
body {
font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
margin: 0;
font-size: 1rem;
font-weight: 1.5;
line-height: 1.5;
color: #292b2c;
background-color: #fff;
}
/* styles skipped */
.testimonial-name span {
font-weight: 400;
}</code></pre><pre><code class="language-js">import styles from './styles.module.css';
export default function App() {
return (
&lt;section className={styles.testimonial}&gt;
&lt;div className={styles['testimonial-wrapper']}&gt;
&lt;img
src="https://randomuser.me/api/portraits/women/48.jpg"
alt="Tammy Stevens"
className={styles['testimonial-avatar']}
/&gt;
&lt;div&gt;
&lt;p className={styles['testimonial-quote']}&gt;
This is one of the best developer blogs on the planet! I read it
daily to improve my skills.
&lt;/p&gt;
&lt;/div&gt;
&lt;p className={styles['testimonial-name']}&gt;
Tammy Stevens
&lt;span&gt; · Front End Developer&lt;/span&gt;
&lt;/p&gt;
&lt;/div&gt;
&lt;/section&gt;
);
}</code></pre><p>Our CSS file has the name <code>.module</code> in it before the extension <code>.css</code>. Any CSS module file must have the name "module" in it and end in the appropriate extension (if we are using CSS or SASS/SCSS).</p><p>What is interesting to note if we look at the code above is that CSS modules are written just like normal CSS, but are imported and used as if it were created as objects (inline styles).</p><p>The benefit of CSS modules is that it helps avoid our problem of class conflicts with normal CSS. The properties that we are referencing turn into unique classnames that cannot conflict with one another when our project is built.</p><p>Our generated HTML elements will look like this:</p><pre><code class="language-html">&lt;p class="_styles__testimonial-name_309571057"&gt;
Tammy Stevens
&lt;/p&gt;</code></pre><p>Plus, CSS modules solve the problem of global scope in CSS. As compared to our normal CSS stylesheets, CSS declared using modules to individual components will not cascade to child components.</p><p>Therefore, CSS modules are best to use over CSS and SASS to make sure classes don't conflict and to write predictable styles that only apply to one or another component.</p><p>👍 Pros:</p><ul><li>Styles are scoped to one or another component (unlike CSS / SASS)</li><li>Unique, generated classnames ensure no style conflict</li><li>Can use them immediately without setup in CRA projects</li><li>Can be used with SASS / CSS</li></ul><p>👎 Cons:</p><ul><li>Can be tricky to reference classnames</li><li>May be a learning curve to use CSS styles like object properties</li></ul><h2 id="css-in-js">CSS-in-JS</h2><p>Similar to how React allowed us to write HTML as JavaScript with JSX, CSS-in-JS has done something similar with CSS.</p><p>CSS-in-JS allows us to write CSS styles directly in our components' javascript (.js) files.</p><p>Not only does it allow you write CSS style rules without having to make a single .css file, but these styles are scoped to individual components.</p><p>In other words, you can add, change or remove CSS without any surprises. Changing one component's styles will not impact the styles of the rest of your application.</p><p>CSS-in-JS often makes use of a special type of JavaScript function called a tagged template literal. What's great about this is that we can still write plain CSS style rules directly in our JS!</p><p>Here's a quick example of a popular CSS-in-JS library, Styled Components:</p><pre><code class="language-js">import styled from "styled-components";
const Button = styled.button`
color: limegreen;
border: 2px solid limegreen;
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border-radius: 3px;
&amp;:hover {
opacity: 0.9;
}
`;
export default function App() {
return (
&lt;div&gt;
&lt;Button&gt;Click me&lt;/Button&gt;
&lt;/div&gt;
);
const Button = styled.button`
background: ${props =&gt; props.inverted ? "limegreen" : "white"};
color: ${props =&gt; props.inverted ? "white" : "limegreen"};
border: 2px solid limegreen;
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border-radius: 3px;
&amp;:hover {
opacity: 0.9;
}
`;
export default function App() {
return (
&lt;div&gt;
&lt;Button&gt;Click me&lt;/Button&gt;
&lt;Button inverted&gt;Click me&lt;/Button&gt;
&lt;/div&gt;
);
}
<p><strong><a href="http://bit.ly/join-react-bootcamp">The React Bootcamp</a></strong> takes everything you should know about learning React and bundles it into one comprehensive package, including videos, cheatsheets, plus special bonuses.</p>
<p>Gain the insider information <strong>100s</strong> of developers have already used to master React, find their dream jobs, and take control of their future:</p>
<p><a href="http://bit.ly/join-react-bootcamp"><img src="https://reedbarger.nyc3.digitaloceanspaces.com/react-bootcamp-banner.png" alt="The React Bootcamp"></a><br>
<em>Click here to be notified when it opens</em></p>
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
