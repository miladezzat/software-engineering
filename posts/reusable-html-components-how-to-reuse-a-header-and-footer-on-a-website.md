---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c986b740569d1a4ca19f5.jpg"
tags: [HTML]
description: "Imagine you re building a site for a client, a small mom-and-"
author: "Milad E. Fahmy"
title: "Reusable HTML Components – How to Reuse a Header and Footer on a Website"
created: "2021-08-15T22:49:08+02:00"
modified: "2021-08-15T22:49:08+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-html tag-components tag-javascript tag-html5 ">
<header class="post-full-header">
<h1 class="post-full-title">Reusable HTML Components – How to Reuse a Header and Footer on a Website</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c986b740569d1a4ca19f5.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c986b740569d1a4ca19f5.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c986b740569d1a4ca19f5.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c986b740569d1a4ca19f5.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c986b740569d1a4ca19f5.jpg" alt="Reusable HTML Components – How to Reuse a Header and Footer on a Website">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
&lt;html&gt;
&lt;head&gt;
&lt;link href="styles.css" rel="stylesheet" type="text/css" /&gt;
&lt;script src="index.js" type="text/javascript" defer&gt;&lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;template id="welcome-msg"&gt;
&lt;h1&gt;Hello, World!&lt;/h1&gt;
&lt;p&gt;And all who inhabit it&lt;/p&gt;
&lt;/template&gt;
&lt;/body&gt;
&lt;html&gt;
document.body.appendChild(template.content);
&lt;html&gt;
&lt;head&gt;
&lt;link href="styles.css" rel="stylesheet" type="text/css" /&gt;
&lt;script src="index.js" type="text/javascript" defer&gt;&lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;/body&gt;
&lt;html&gt;
template.innerHTML = `
&lt;h1&gt;Hello, World!&lt;/h1&gt;
&lt;p&gt;And all who inhabit it&lt;/p&gt;
`
document.body.appendChild(template.content);
</code></pre><figcaption>index.js</figcaption></figure><p>Now that everything's in the JavaScript file, you don't need to create a <code>&lt;template&gt;</code> element – you could just as easily create a <code>&lt;div&gt;</code> or <code>&lt;span&gt;</code>.</p><p>However, <code>&lt;template&gt;</code> elements can be paired with a <code>&lt;slot&gt;</code> element, which allows you to do things like change the text for elements within the <code>&lt;template&gt;</code>. It's a bit outside the scope of this tutorial, so you can read more about <code>&lt;slot&gt;</code> elements <a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_templates_and_slots#Adding_flexibility_with_slots">over on MDN</a>.</p><h2 id="how-to-create-custom-elements">How to create custom elements</h2><p>One thing you might have noticed with HTML templates is that it can be tricky to insert your code in the right place. The earlier welcome message example was just appended to the page.</p><p>If there was content already on the page, say, a banner image, the welcome message would appear below it.</p><p>As a custom element, your welcome message might look like this:</p><pre><code class="language-html">&lt;welcome-message&gt;&lt;/welcome-message&gt;
&lt;html&gt;
&lt;head&gt;
&lt;link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA==" crossorigin="anonymous" /&gt;
&lt;link href="styles.css" rel="stylesheet" type="text/css" /&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;main&gt;
&lt;!-- Your page's content --&gt;
&lt;/main&gt;
&lt;/body&gt;
&lt;html&gt;
margin: 0;
padding: 0;
box-sizing: border-box;
}
html, body {
height: 100%;
}
body {
color: #333;
font-family: sans-serif;
display: flex;
flex-direction: column;
}
main {
flex: 1 0 auto;
}
constructor() {
super();
}
}
constructor() {
super();
}
}
customElements.define('header-component', Header);
constructor() {
super();
}
connectedCallback() {
this.innerHTML = `
&lt;style&gt;
nav {
height: 40px;
display: flex;
align-items: center;
justify-content: center;
background-color:  #0a0a23;
}
ul li {
list-style: none;
display: inline;
}
a {
font-weight: 700;
margin: 0 25px;
color: #fff;
text-decoration: none;
}
a:hover {
padding-bottom: 5px;
box-shadow: inset 0 -2px 0 0 #fff;
}
&lt;/style&gt;
&lt;header&gt;
&lt;nav&gt;
&lt;ul&gt;
&lt;li&gt;&lt;a href="about.html"&gt;About&lt;/a&gt;&lt;/li&gt;
&lt;li&gt;&lt;a href="work.html"&gt;Work&lt;/a&gt;&lt;/li&gt;
&lt;li&gt;&lt;a href="contact.html"&gt;Contact&lt;/a&gt;&lt;/li&gt;
&lt;/ul&gt;
&lt;/nav&gt;
&lt;/header&gt;
`;
}
}
customElements.define('header-component', Header);
&lt;html&gt;
&lt;head&gt;
&lt;link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA==" crossorigin="anonymous" /&gt;
&lt;link href="styles.css" rel="stylesheet" type="text/css" /&gt;
&lt;script src="components/header.js" type="text/javascript" defer&gt;&lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;header-component&gt;&lt;/header-component&gt;
&lt;main&gt;
&lt;!-- Your page's content --&gt;
&lt;/main&gt;
&lt;/body&gt;
&lt;html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA==" crossorigin="anonymous" /&gt;
&lt;link href="styles.css" rel="stylesheet" type="text/css" /&gt;
&lt;script src="components/header.js" type="text/javascript" defer&gt;&lt;/script&gt;
&lt;script src="components/footer.js" type="text/javascript" defer&gt;&lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;header-component&gt;&lt;/header-component&gt;
&lt;main&gt;
&lt;!-- Your page's content --&gt;
&lt;/main&gt;
&lt;footer-component&gt;&lt;/footer-component&gt;
&lt;/body&gt;
&lt;html&gt;
constructor() {
super();
}
connectedCallback() {
this.innerHTML = `
&lt;style&gt;
footer {
height: 60px;
padding: 0 10px;
list-style: none;
display: flex;
justify-content: space-between;
align-items: center;
background-color: #dfdfe2;
}
ul li {
list-style: none;
display: inline;
}
a {
margin: 0 15px;
color: inherit;
text-decoration: none;
}
a:hover {
padding-bottom: 5px;
box-shadow: inset 0 -2px 0 0 #333;
}
.social-row {
font-size: 20px;
}
.social-row li a {
margin: 0 15px;
}
&lt;/style&gt;
&lt;footer&gt;
&lt;ul&gt;
&lt;li&gt;&lt;a href="about.html"&gt;About&lt;/a&gt;&lt;/li&gt;
&lt;li&gt;&lt;a href="work.html"&gt;Work&lt;/a&gt;&lt;/li&gt;
&lt;li&gt;&lt;a href="contact.html"&gt;Contact&lt;/a&gt;&lt;/li&gt;
&lt;/ul&gt;
&lt;ul class="social-row"&gt;
&lt;li&gt;&lt;a href="https://github.com/my-github-profile"&gt;&lt;i class="fab fa-github"&gt;&lt;/i&gt;&lt;/a&gt;&lt;/li&gt;
&lt;li&gt;&lt;a href="https://twitter.com/my-twitter-profile"&gt;&lt;i class="fab fa-twitter"&gt;&lt;/i&gt;&lt;/a&gt;&lt;/li&gt;
&lt;li&gt;&lt;a href="https://www.linkedin.com/in/my-linkedin-profile"&gt;&lt;i class="fab fa-linkedin"&gt;&lt;/i&gt;&lt;/a&gt;&lt;/li&gt;
&lt;/ul&gt;
&lt;/footer&gt;
`;
}
}
customElements.define('footer-component', Footer);
headerTemplate.innerHTML = `
&lt;style&gt;
nav {
height: 40px;
display: flex;
align-items: center;
justify-content: center;
background-color:  #0a0a23;
}
ul li {
list-style: none;
display: inline;
}
a {
font-weight: 700;
margin: 0 25px;
color: #fff;
text-decoration: none;
}
a:hover {
padding-bottom: 5px;
box-shadow: inset 0 -2px 0 0 #fff;
}
&lt;/style&gt;
&lt;header&gt;
&lt;nav&gt;
&lt;ul&gt;
&lt;li&gt;&lt;a href="about.html"&gt;About&lt;/a&gt;&lt;/li&gt;
&lt;li&gt;&lt;a href="work.html"&gt;Work&lt;/a&gt;&lt;/li&gt;
&lt;li&gt;&lt;a href="contact.html"&gt;Contact&lt;/a&gt;&lt;/li&gt;
&lt;/ul&gt;
&lt;/nav&gt;
&lt;/header&gt;
`;
class Header extends HTMLElement {
constructor() {
super();
}
connectedCallback() {
}
}
customElements.define('header-component', Header);
class Header extends HTMLElement {
constructor() {
super();
}
connectedCallback() {
const shadowRoot = this.attachShadow({ mode: 'closed' });
}
}
customElements.define('header-component', Header);
class Header extends HTMLElement {
constructor() {
super();
}
connectedCallback() {
const shadowRoot = this.attachShadow({ mode: 'closed' });
shadowRoot.appendChild(headerTemplate.content);
}
}
customElements.define('header-component', Header);
&lt;html&gt;
&lt;head&gt;
&lt;link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA==" crossorigin="anonymous" /&gt;
&lt;link href="styles.css" rel="stylesheet" type="text/css" /&gt;
&lt;script src="components/header.js" type="text/javascript" defer&gt;&lt;/script&gt;
&lt;script src="components/footer.js" type="text/javascript" defer&gt;&lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;header-component&gt;&lt;/header-component&gt;
&lt;main&gt;
&lt;!-- Your page's content --&gt;
&lt;/main&gt;
&lt;footer-component&gt;&lt;/footer-component&gt;
&lt;/body&gt;
&lt;html&gt;
margin: 0;
padding: 0;
box-sizing: border-box;
}
html, body {
height: 100%;
}
body {
color: #333;
font-family: sans-serif;
display: flex;
flex-direction: column;
}
main {
flex: 1 0 auto;
}
headerTemplate.innerHTML = `
&lt;style&gt;
nav {
height: 40px;
display: flex;
align-items: center;
justify-content: center;
background-color:  #0a0a23;
}
ul li {
list-style: none;
display: inline;
}
a {
font-weight: 700;
margin: 0 25px;
color: #fff;
text-decoration: none;
}
a:hover {
padding-bottom: 5px;
box-shadow: inset 0 -2px 0 0 #fff;
}
&lt;/style&gt;
&lt;header&gt;
&lt;nav&gt;
&lt;ul&gt;
&lt;li&gt;&lt;a href="about.html"&gt;About&lt;/a&gt;&lt;/li&gt;
&lt;li&gt;&lt;a href="work.html"&gt;Work&lt;/a&gt;&lt;/li&gt;
&lt;li&gt;&lt;a href="contact.html"&gt;Contact&lt;/a&gt;&lt;/li&gt;
&lt;/ul&gt;
&lt;/nav&gt;
&lt;/header&gt;
`;
class Header extends HTMLElement {
constructor() {
super();
}
connectedCallback() {
const shadowRoot = this.attachShadow({ mode: 'closed' });
shadowRoot.appendChild(headerTemplate.content);
}
}
customElements.define('header-component', Header);
footerTemplate.innerHTML = `
&lt;style&gt;
footer {
height: 60px;
padding: 0 10px;
list-style: none;
display: flex;
flex-shrink: 0;
justify-content: space-between;
align-items: center;
background-color: #dfdfe2;
}
ul li {
list-style: none;
display: inline;
}
a {
margin: 0 15px;
color: inherit;
text-decoration: none;
}
a:hover {
padding-bottom: 5px;
box-shadow: inset 0 -2px 0 0 #333;
}
.social-row {
font-size: 20px;
}
.social-row li a {
margin: 0 15px;
}
&lt;/style&gt;
&lt;footer&gt;
&lt;ul&gt;
&lt;li&gt;&lt;a href="about.html"&gt;About&lt;/a&gt;&lt;/li&gt;
&lt;li&gt;&lt;a href="work.html"&gt;Work&lt;/a&gt;&lt;/li&gt;
&lt;li&gt;&lt;a href="contact.html"&gt;Contact&lt;/a&gt;&lt;/li&gt;
&lt;/ul&gt;
&lt;ul class="social-row"&gt;
&lt;li&gt;&lt;a href="https://github.com/my-github-profile"&gt;&lt;i class="fab fa-github"&gt;&lt;/i&gt;&lt;/a&gt;&lt;/li&gt;
&lt;li&gt;&lt;a href="https://twitter.com/my-twitter-profile"&gt;&lt;i class="fab fa-twitter"&gt;&lt;/i&gt;&lt;/a&gt;&lt;/li&gt;
&lt;li&gt;&lt;a href="https://www.linkedin.com/in/my-linkedin-profile"&gt;&lt;i class="fab fa-linkedin"&gt;&lt;/i&gt;&lt;/a&gt;&lt;/li&gt;
&lt;/ul&gt;
&lt;/footer&gt;
`;
class Footer extends HTMLElement {
constructor() {
super();
}
connectedCallback() {
const shadowRoot = this.attachShadow({ mode: 'closed' });
shadowRoot.appendChild(footerTemplate.content);
}
}
customElements.define('footer-component', Footer);
</code></pre><figcaption>components/footer.js</figcaption></figure><h2 id="in-closing">In closing</h2><p>We've covered a lot here, and you might have already decided just to use React or Handlebars.js instead.</p><p>Those are both great options!</p><p>Still, for a smaller project where you'll only need a few reusable components, a whole library or templating language might be overkill.</p><p>Hopefully now you have the confidence to create your own reusable HTML components. Now get out there and create something great (and reusable).</p>
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
