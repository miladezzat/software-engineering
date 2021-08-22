---
card: "/images/default.jpg"
tags: [Web Design]
description: "In this article, I m going to show you how to theme your webs"
author: "Milad E. Fahmy"
title: "What is Website Theming? How to Use CSS Custom Properties and Gatsby.js to Customize Your Site"
created: "2021-08-16T10:03:29+02:00"
modified: "2021-08-16T10:03:29+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-web-design tag-themes tag-css-properties tag-css tag-gatsby tag-web-development ">
<header class="post-full-header">
<h1 class="post-full-title">What is Website Theming? How to Use CSS Custom Properties and Gatsby.js to Customize Your Site</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2021/06/theming-website-preview-1-1.jpg 300w,
/news/content/images/size/w600/2021/06/theming-website-preview-1-1.jpg 600w,
/news/content/images/size/w1000/2021/06/theming-website-preview-1-1.jpg 1000w,
/news/content/images/size/w2000/2021/06/theming-website-preview-1-1.jpg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2021/06/theming-website-preview-1-1.jpg" alt="What is Website Theming? How to Use CSS Custom Properties and Gatsby.js to Customize Your Site">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
--font-size: 20px;
--background: red;
}
</code></pre><p>In the example above, <code>[data-theme="default"]</code> is our theme, while all the CSS custom properties inside are the theme properties. You get the idea, right?</p><p>Here’s a tip: your theme properties don’t have to be just CSS custom properties. They can also be any valid CSS properties that you want to apply to a specific theme. </p><p>Before we move forward, let’s first understand what CSS custom properties are</p><h3 id="what-are-css-custom-properties-also-known-as-css-variables-">What are CSS Custom Properties (also known as CSS variables)?</h3><p>CSS custom properties are entities which hold values that you can reuse throughout an entire site or document.</p><p>For the sake of this tutorial we are not going to cover CSS custom properties in depth. You can <a href="/news/css-customs-properties-cheatsheet-c86778541f7d/">read more about custom properties here</a>.</p><p>Also there are a lot of great tutorials out there that cover CSS custom properties and how to use them for theming, so we’ll leave the theory to those other articles.</p><p>For a strategic guide on how to use CSS custom properties for theming check out this awesome article: <a href="https://www.smashingmagazine.com/2018/05/css-custom-properties-strategy-guide/">A Strategy Guide To CSS Custom Properties</a>.</p><p>Although we are not covering CSS custom properties in depth, I want to point out a few reasons why CSS custom properties are ideal for website theming:</p><ul><li>They are reusable – you can use them throughout your CSS</li><li>They reduce the complexity of our code, since you no longer need to create different stylesheet to achieve a theme-able website</li><li>They are available at runtime, which means you can update their value in the browser, via JavaScript, with immediate results.</li></ul><h2 id="how-to-set-up-theme-properties-in-gatsby-js">How to Set Up Theme Properties in Gatsby.js</h2><p>Of course you can hard code theme properties directly inside your CSS file like any other CSS properties. But having to scroll up a few lines of your CSS code anytime you want to make a few changes to your themes sounds tedious, right?</p><p><a href="https://mxb.dev/about/">Max Böck</a> in his article <a href="https://mxb.dev/blog/color-theme-switcher/">“Color Theme Switcher”</a> advises defining our themes in a central location.</p><p>Having a central location (file) where you can easily access and manage your themes sounds like an interesting idea. And this is the kind of thing Gatsby was made for.</p><p>Quoting the Gatsby docs:</p><blockquote>“A core feature of Gatsby.js is it’s ability to load data from anywhere.”</blockquote><p>This means you can source data from a JSON file which will be available at build time. When you import this data you can then iterate over it with the <code>Array.map</code> method and render it in a React component.</p><h3 id="how-to-store-theme-properties">How to Store Theme Properties</h3><p>In your Gatsby project folder, create a directory called content if it doesn't already exists. Then add a new file called <code>themes.json</code> with the following content:</p><pre><code class="language-json">[
{
"id": "default",
"colors": {
"primary-color": "#0250bb",
"text": "#20123a",
"text-alt": "#42425a",
"border": "#ededf0",
"background": "#ffffff",
"background-alt": "#f9f9fa",
"color-scheme": "light"
}
},
{
"id": "dark",
"colors": {
"primary-color": "#7f5af0",
"text": "#fffffe",
"text-alt": "#94a1b2",
"border": "#010101",
"background": "#16161a",
"background-alt": "#242629",
"color-scheme": "dark"
}
},
{
"id": "warm",
"colors": {
"primary-color": "#ff8e3c",
"text": "#0d0d0d",
"text-alt": "#2a2a2a",
"background": "#eff0f3",
"background-alt": "#fff",
"border": "rgba(0,0,0,.1)",
"color-scheme": "light"
}
},
// Add other themes here
]
</code></pre><p>Each theme gets an <code>id</code>, a set of theme properties, and a CSS <code>color-scheme</code> property.</p><p>Here’s a tip – we use the CSS <code>color-scheme</code> property to tell which color scheme (light/dark) our webpage should be rendered in. For a better understanding of <code>color-scheme</code> please refer to this <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/color-scheme">color scheme</a> guide.</p><h3 id="how-to-transform-theme-properties-to-css-custom-properties">How to Transform Theme Properties to CSS Custom Properties</h3><p>Right now, the color themes stored in our <code>content/themes.json</code> files are just raw <strong>data</strong>. They need to be transformed into CSS custom properties before they can actually do anything meaningful.</p><blockquote><strong>Data</strong> is a collection of facts, such as numbers, <strong>words</strong>, measurements, observations or just descriptions of things.</blockquote><p>We are going to need our CSS custom properties to be dynamically generated and added as an inline <code>&lt;style&gt;</code> to the <code>&lt;head&gt;</code> of all our site pages.</p><p>You need to install two important plugins for this tutorial: react-helmet, a document head manager for React, and gatsby-plugin-react-helmet to allow server rendering of data that's added with React Helmet.</p><p>Install these plugins with this command:</p><pre><code>npm installl gatsby-plugin-react-helmet react-helmet
</code></pre><p>To use these plugins you need to add it to the plugin array in your gatsby-config.js file located at the root of the project directory:</p><pre><code>plugins: [gatsby-plugin-react-helmet]
</code></pre><p>Since you are going to use React helmet on all your pages, it makes sense to use it in your <code>Layout.js</code> file. In your <code>layout.js</code> file add the following code:</p><pre><code class="language-js">import React from "react"
import { Helmet } from "react-helmet"
import themes from "../../content/themes.json"
// other imports
export default function Layout({ children }) {
function colors(theme) {
return `
--primary-color: ${theme.colors["primary-color"]};
--text: ${theme.colors["text"]};
--text-alt: ${theme.colors["text-alt"]};
--background: ${theme.colors["background"]};
--background-alt: ${theme.colors["background-alt"]};
--border: ${theme.colors["border"]};
--shadow: ${theme.colors["shadow"]};
color-scheme: ${theme.colors["color-scheme"]};
`
}
return (
&lt;&gt;
&lt;Helmet&gt;
// other head meta tags
&lt;style type="text/css"&gt;{`
${themes
.map(theme =&gt; {
if (theme.id === "default") {
return `
:root {
${colors(theme)}
}
`
} else if (theme.id === "dark") {
return `
@media (prefers-color-scheme: dark) {
${colors(theme)}
}
`
}
})
.join("")}
${themes
.map(theme =&gt; {
return `
[data-theme="${theme.id}"] {
${colors(theme)}
}
`
})
.join("")}
`}
&lt;/style&gt;
&lt;/Helmet&gt;
&lt;Header /&gt;
&lt;main id="main"&gt;{children}&lt;/main&gt;
&lt;Footer /&gt;
&lt;/&gt;
)
}
</code></pre><p>Let's break this down a bit.</p><p>First, the themes and react-helmet are imported from <code>content/themes.json</code> and React respectively:</p><pre><code class="language-js">import React from "react"
import { Helmet } from "react-helmet"
import themes from "../../content/themes.json"
// other imports
export default function Layout({ children }) {
return (
)
}
</code></pre><p>It creates a function which will transform our themes to CSS custom properties:</p><pre><code class="language-js">function colors(theme) {
return `
--primary-color: ${theme.colors["primary-color"]};
--text: ${theme.colors["text"]};
--text-alt: ${theme.colors["text-alt"]};
--background: ${theme.colors["background"]};
--background-alt: ${theme.colors["background-alt"]};
--border: ${theme.colors["border"]};
--shadow: ${theme.colors["shadow"]};
color-scheme: ${theme.colors["color-scheme"]};
`
}
</code></pre><p>Inside our <code>&lt;Helmet&gt;</code> we add a <code>&lt;style&gt;</code> tag to our document’s head.</p><p>Here’s a tip – if you need to add a style to the document’s head, you have to render the style as a string within curly braces.</p><p>In the first <code>Array.map</code> method, we check if there’s a theme with <code>id</code> equal to <code>default</code>. If there is, we set it as our default color scheme in the <code>:root{}</code>. We also check if there’s a theme with <code>id</code> &nbsp;equal to <code>dark</code>. If there is, we use it when the <code>prefers-color-scheme</code> of the user is dark:</p><pre><code class="language-js">${themes
.map(theme =&gt; {
if (theme.id === "default") {
return `
:root {
${colors(theme)}
}
`
} else if (theme.id === "dark") {
return `
@media (prefers-color-scheme: dark) {
${colors(theme)}
}
`
}
})
.join("")}
</code></pre><p>In the last <code>Array.map</code> method, we iterate over our themes and each theme gets a <code>[data-theme=""]</code> attribute selector:</p><pre><code class="language-js"> ${themes
.map(theme =&gt; {
return `
[data-theme="${theme.id}"] {
${colors(theme)}
}
`
})
.join("")}
import themes from "../../content/theme.json"
const Theme = () =&gt; {
return (
&lt;div className="theme"&gt;
&lt;div className="theme-close text-right"&gt;
&lt;button&gt;x&lt;/button&gt;
&lt;/div&gt;
&lt;div className="theme-wrapper__inner"&gt;
&lt;div className="theme-header text-center"&gt;
&lt;strong className="theme-title"&gt;Select Theme&lt;/strong&gt;
&lt;p&gt;
Please Note that Changes made here will affect other pages across
the entire site.
&lt;/p&gt;
&lt;/div&gt;
&lt;div className="theme-content"&gt;
&lt;ul className="schemes"&gt;
{theme.map(data =&gt; {
return (
&lt;li className="scheme"&gt;
&lt;button
className="scheme-btn js-scheme-btn"
aria-label={`${data.id}`}
name="scheme"
value={`${data.id}`}
style={{ backgroundColor: `${data.colors["background"]}` }}
&gt;&lt;/button&gt;
&lt;/li&gt;
)
})}
&lt;/ul&gt;
&lt;/div&gt;
&lt;div className="theme-content"&gt;
&lt;div className="theme-range"&gt;
&lt;label htmlFor="font" title={state.font}&gt;
&lt;span className="text-xsmall"&gt;Aa&lt;/span&gt;
&lt;input
type="range"
name="font"
min="10"
max="20"
step="2"
className="theme-range__slider"
/&gt;
&lt;span className="text-large"&gt;Aa&lt;/span&gt;
&lt;/label&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
)
}
export default Theme
</code></pre><p>Let’s break down this code a bit so we know what's going on.</p><p>First we import our themes from content/themes.js and iterate over it with a <code>Array.map</code> method. For each theme, I created a button with a background color equal to its <code>background-color</code> with a value equal to its <code>id</code>.</p><pre><code class="language-html">&lt;ul className="schemes"&gt;
{theme.map(data =&gt; {
return (
&lt;li className="scheme"&gt;
&lt;button
className="scheme-btn js-scheme-btn"
aria-label={`${data.id}`}
name="scheme"
value={`${data.id}`}
style={{ backgroundColor: `${data.colors["background"]}` }}
&gt;&lt;/button&gt;
&lt;/li&gt;
)
})}
&lt;/ul&gt;
</code></pre><p>To change the font size of our text, I also added an <code>input</code> field of type <code>range</code> with a <code>min</code> value of <code>10px</code> and <code>max</code> value of <code>20px</code>.</p><pre><code class="language-html">&lt;input
type="range"
name="font"
min="10"
max="20"
step="2"
className="theme-range__slider"
/&gt;
const Theme = () =&gt; {
return (
)
}
</code></pre><p>We use React <a href="https://reactjs.org/docs/hooks-reference.html#lazy-initial-state">Lazy Initialization</a>, which lets us pass a function to <code>useState()</code> that we'll use during the initial render.</p><p>Quoting the React docs:</p><blockquote>"If the initial state is the result of an expensive calculation, you may provide a function instead, which will be executed only in the initial render."</blockquote><pre><code class="language-js">import React, { useState} from "react"
import themes from "../../content/theme.json"
const Theme = () =&gt; {
const [state, setState] = useState(() =&gt; {
const localVal =
typeof window !== "undefined" &amp;&amp; window.localStorage.getItem("theme")
let obj = {
font: 15,
scheme: "default",
}
return localVal !== null ? JSON.parse(localVal) : obj
})
return (
)
}
export default Theme
</code></pre><p>In our case, we’re using it to check for the value in <code>localStorage()</code>. If the value exists, will use that as our initial value. Otherwise, will use the default <code>obj</code>.</p><p>We’re checking if the window object exists <code>(typeof window !== “undefined”)</code> because at build time the window’s object does not exist. If you run <code>gatsby build</code> without checking if the windows object exists or not, you’ll get an error that looks like this:</p><p><code>WebpackError: ReferenceError: localStorage is not defined</code></p><h3 id="how-to-update-the-state">How to Update the State</h3><p>The next step is to have an <code>onClick</code> and <code>onChange</code> eventListener update our state. For that we are going to create a function:</p><pre><code class="language-js">import React, { useState} from "react"
import themes from "../../content/theme.json"
const Theme = () =&gt; {
const [state, setState] = useState(() =&gt; {
const localVal =
typeof window !== "undefined" &amp;&amp; window.localStorage.getItem("theme")
let obj = {
font: 15,
scheme: "default",
}
return localVal !== null ? JSON.parse(localVal) : obj
})
// the update function
const update = e =&gt; {
const { name, value } = e.target
setState(prevState =&gt; ({
...prevState,
[name]: value,
}))
}
return (
)
}
</code></pre><p>We passed in a Object as an initial value for our <code>useState</code> because we can update multiple states with one <code>useState</code> hook. We now need to set the update function on our UI:</p><pre><code class="language-js">...
{theme.map(data =&gt; {
return (
&lt;li className="scheme"&gt;
&lt;button
onClick={update} // set the update function to an Onclick event
className="scheme-btn js-scheme-btn"
aria-label={`${data.id}`}
name="scheme"
value={`${data.id}`}
style={{ backgroundColor: `${data.colors["background"]}` }}
&gt;&lt;/button&gt;
&lt;/li&gt;
)
})}
&lt;input
type="range"
name="font"
min="10"
max="20"
step="2"
className="theme-range__slider"
onChange={update} // set the update function to an Onchange event
value={state.font}
/&gt;
</code></pre><h3 id="how-to-persist-our-changes-in-localstorage">How to Persist Our Changes In LocalStorage</h3><p>The final step is to make sure we update <code>localStorage</code> and our website with the current values from our state whenever the state value changes. For that we’ll use the <code>useEffect</code> Hook, which lets us <strong>run some code after React has updated the DOM.</strong></p><pre><code class="language-js">import React, { useState} from "react"
import themes from "../../content/theme.json"
const Theme = () =&gt; {
const [state, setState] = useState(() =&gt; {
const localVal =
typeof window !== "undefined" &amp;&amp; window.localStorage.getItem("theme")
let obj = {
font: 15,
scheme: "default",
}
return localVal !== null ? JSON.parse(localVal) : obj
})
const update = e =&gt; {
const { name, value } = e.target
setState(prevState =&gt; ({
...prevState,
[name]: value,
}))
}
// persisting state to localStorage
useEffect(() =&gt; {
window.localStorage.setItem("theme", JSON.stringify(state))
let root = document.documentElement
root.setAttribute("data-theme", state.scheme)
root.style.setProperty("--font-size", `${state.font}px`)
}, [state])
return (
)
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
