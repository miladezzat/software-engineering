---
card: "/images/default.jpg"
tags: [Web Development]
description: "In this article, I ll talk about what ChakraUI is and why you"
author: "Milad E. Fahmy"
title: "Why You Should Start Using Chakra UI"
created: "2021-08-16T10:03:49+02:00"
modified: "2021-08-16T10:03:49+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-web-development tag-front-end-development tag-accessibility ">
<header class="post-full-header">
<h1 class="post-full-title">Why You Should Start Using Chakra UI</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2021/05/Why-should-you-start-using--5-.png 300w,
/news/content/images/size/w600/2021/05/Why-should-you-start-using--5-.png 600w,
/news/content/images/size/w1000/2021/05/Why-should-you-start-using--5-.png 1000w,
/news/content/images/size/w2000/2021/05/Why-should-you-start-using--5-.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2021/05/Why-should-you-start-using--5-.png" alt="Why You Should Start Using Chakra UI">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Chakra UI is a component-based library. It's made up of basic building blocks that can help you build the front-end of your web application.</p>
<p>It is customizable and reusable, and most importantly it supports ReactJs, along with some other libraries too.</p>
<p>Here's what we'll cover in this article:</p>
<p>Have you ever struggled with whether to focus more on the back-end or front-end of your project? Well believe me, both are equally important.</p>
<p>I started using Chakra UI because I wanted to focus on my back-end code more than being stuck on "How to center a div element?".</p>
<p>Chakra UI is extremely simple to use, especially when you are familiar with how to use ReactJs components.</p>
<p>Inside your respective directory, install ChakraUI using Yarn or NPM</p>
<p><code>yarn add @chakra-ui/react @emotion/react@^11 @emotion/styled@^11 framer-motion@^4</code></p>
<p><code>npm i @chakra-ui/react @emotion/react@^11 @emotion/styled@^11 framer-motion@^4</code></p>
<p>For ChakraUI to get initialised you first need to add <code>&lt;ChakraProvider&gt;</code> in your <code>index.js</code> file.</p>
<pre><code class="language-js">import React from "react"
// 1. import `ChakraProvider` component
import { ChakraProvider } from "@chakra-ui/react"
function App({ Component }) {
// 2. Use at the root of your app
return (
&lt;ChakraProvider&gt;
&lt;Component /&gt;
&lt;/ChakraProvider&gt;
)
}
</code></pre>
<p>Go to <code>pages/_app.js</code> and add the following lines of code:</p>
<pre><code class="language-js">import { ChakraProvider } from "@chakra-ui/react"
function MyApp({ Component, pageProps }) {
return (
&lt;ChakraProvider&gt;
&lt;Component {...pageProps} /&gt;
&lt;/ChakraProvider&gt;
)
}
export default MyApp
</code></pre>
<p>(Source: <a href="https://chakra-ui.com/docs/getting-started">Chakra UI Docs</a>)</p>
<p>You can refer the documentation to checkout ChakraUI’s support for other libraries: <a href="https://chakra-ui.com/docs/getting-started">https://chakra-ui.com/docs/getting-started</a></p>
</blockquote>
<h3 id="styleprops">Style Props</h3>
<p>Chakra UI supports Reactjs, and every component is customizable using the Style props. They map to almost all necessary CSS properties that are available.</p>
<p>For example, for <code>margin-top</code> in CSS, you would write it as<br>
<code>&lt;Text mt={8} &gt;</code>. This will set a top margin of <code>8px</code> on the selected element.</p>
<p>Chakra UI is inspired by TailwindCSS's color palette, so you can find all your favorite colors!</p>
<h3 id="howtooverridechakrauisdefaulttheme">How to override ChakraUI's default theme</h3>
<p>You can override Chakra UI's default theme and create your own theme with the colors of your choice. You can do this using Chakra UI’s CSS variables.</p>
<pre><code class="language-js">// 1. Import `extendTheme`
import { extendTheme } from "@chakra-ui/react"
// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
colors: {
brand: {
100: "#f7fafc",
// ...
900: "#1a202c",
},
},
})
// 4. Now you can use these colors in your components
function Usage() {
return &lt;Box bg="brand.100"&gt;Welcome&lt;/Box&gt;
}
</code></pre>
<p>(Source: <a href="https://chakra-ui.com/docs/theming/customize-theme">Chakra Ui Docs</a>)</p>
<p>For more information on overriding the ChakraUI default theme, visit the Chakra UI docs at <a href="https://chakra-ui.com/docs/theming/customize-theme">https://chakra-ui.com/docs/theming/customize-theme</a></p>
</blockquote>
<h3 id="responsivestyles">Responsive styles</h3>
<p>How about responsiveness? The biggest headache, for me at least. I don't enjoy this part, but with Chakra UI, it’s no longer a huge pain.</p>
<p>For example, consider the line of code below:</p>
</code></pre>
<p>(Source: <a href="https://chakra-ui.com/docs/features/style-props">Chakra UI Docs</a>)</p>
<p>Now we can override this in many ways, one of which is easier to understand – using the object syntax.</p>
This is responsive text
&lt;/Text&gt;
</code></pre>
<p>(Source: <a href="https://chakra-ui.com/docs/features/style-props">Chakra UI Docs</a>)</p>
<p>You might have noticed that Chakra UI strictly follows the ReactJs syntax for defining inline styles by capitalizing the second word (that is <code>fontSize</code>) as in the CSS property <code>font-size</code> for its style props too.</p>
<blockquote>
<p>For more information on Responsive styles visit the ChakraUI docs at<br>
<a href="https://chakra-ui.com/docs/features/responsive-styles">https://chakra-ui.com/docs/features/responsive-styles</a></p>
</blockquote>
<h3 id="stackcomponent">Stack Component</h3>
<p>Another commonly-used feature which I used to dislike in CSS is the <code>flex</code> property. It's a bit confusing to grasp how the property works.</p>
<p>Well it’s my honor to say here – “Chakra UI to the rescue🚀!”</p>
<p>I'd like to introduce you to the Stack component.</p>
<p>Stack is a simple layout component which you can use to stack elements, vertically and horizontally.</p>
<p>So there is Stack, HStack (short hand for Horizontal Stack), and VStack (short hand for Vertical stack). You might have guessed it right by now, but HStack will stack the elements horizontally and VStack will do the same layout vertically – but most importantly with zero CSS.</p>
<blockquote>
<p>For more information on the Stack component, visit the Chakra UI Docs at<br>
<a href="https://chakra-ui.com/docs/layout/stack">https://chakra-ui.com/docs/layout/stack</a>.</p>
</blockquote>
<p><img src="https://www.freecodecamp.org/news/content/images/2021/05/score-2.JPG" alt="score-2"></p>
<p>When you're finally ready to deploy a web application, you should first run it through Google Lighthouse.</p>
<p>Google Lighthouse is an automation tool that is in-built on your Chrome developer tools. It helps you run audits on your web applications, and determines a score based on their performance, accessibility, progressive web apps, SEO, and much more.</p>
<p>The word we want to look out for here is Accessibility.</p>
<h3 id="whatiswebaccessibility">What is Web Accessibility?</h3>
<p>As a developer, it’s our responsibility to make the web acessible for everyone, and Google is taking this matter very seriously.</p>
<p>When websites are properly designed, it helps everyone. Proper design means that, for example, screen readers should be able to properly read out the elements on your page to a user. These principles are reflected in the the Web Accessibility Initiative (WAI).</p>
<p>Good accessibility doesn't just benefit people with disabilities. It's also helpful to users with smartphones, smart TVs, screens of all sizes, older people who might not see their screens very well, users with color blindness, and people using slow internet connections.</p>
<p>For more information on WAI you can visit their official site at<br>
<a href="https://www.w3.org/WAI/">https://www.w3.org/WAI/</a>.</p>
<h3 id="whatdoeschakrauihavetodowithaccessibility">What does ChakraUI have to do with accessibility?</h3>
<p>ChakraUI follows all the standards laid down by WAI for all its components. So all you have to do is add the <code>Aria-label</code> property to the Chakra component.</p>
<p>This is just what Chakra does behind-the-scenes to help you during the development process.</p>
<h3 id="butwhydowehavetofollowwaianywayswhatifwedont">But why do we have to follow WAI anyways? What if we don’t?</h3>
<p>As I said, Google is takes accessibility very seriously. As a result, the search engine will rank your page based partly on your accessibility score. That’s why Lighthouse has dedicated audits for accessibility.</p>
<p>Dark mode is ever more popular these days, and ChakraUI makes it easy to use.</p>
<p>Let's say that you're in a React project with the below <code>index.js</code> file:</p>
<pre><code class="language-js">import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import { ChakraProvider } from '@chakra-ui/react'
ReactDOM.render(
&lt;ChakraProvider&gt;
&lt;App /&gt;
&lt;/ChakraProvider&gt;,
document.getElementById('root')
)
</code></pre>
import ReactDOM from 'react-dom'
import App from './components/App'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
ReactDOM.render(
&lt;ChakraProvider&gt;
&lt;ColorModeScript initialColorMode="light" /&gt;
&lt;App /&gt;
&lt;/ChakraProvider&gt;,
document.getElementById('root')
)
</code></pre>
<code>npm i react-icons</code></p>
<p>Import two React icons:</p>
<pre><code class="language-js">import { FaMoon, FaSun } from 'react-icons/fa'
</code></pre>
<p>Import the following ChakraUI component and <code>useColorMode</code> hook and initialise the hook.</p>
<pre><code class="language-js">import {IconButton, useColorMode } from '@chakra-ui/react
const { colorMode, toggleColorMode } = useColorMode()
</code></pre>
<p>The hook is similar to the <code>useState</code> hook, except that <code>toggleColorMode</code> will set the theme of the site to dark or light mode globally, while <code>colorMode</code> will store the value "light" or "dark".</p>
icon={colorMode === 'light' ? &lt;FaSun /&gt; : &lt;FaMoon /&gt;}
isRound="true"
size="lg"
alignSelf="flex-end"
onClick={toggleColorMode}
/&gt;
</code></pre>
<p>Chakra UI has helped me boost my development process to another level. It's very flexible, the documentation is great, and there are a lot of pre-built templates to help you speed up the process.</p>
<p>Two of the templates I want to call out are <a href="https://choc-ui.tech/">Choc UI</a> and <a href="https://chakra-templates.dev/">Chakra-Templates</a>.</p>
<p>Chakra UI also has a very active community on <a href="https://discord.com/invite/dQHfcWF">Discord</a>.</p>
<p>If you did like this article, share it with your co-workers.<br>
I tweet about my development journey as a Self-taught developer, so hit me up on <a href="https://twitter.com/BrodasGeo">Twitter</a>.</p>
<p>Until then, have an amazing week!</p>
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
