---
card: "/images/default.jpg"
tags: [React Hooks]
description: Custom React hooks are an essential tool that let you add spe
author: "Milad E. Fahmy"
title: "How to Build Your Own React Hooks: A Step-by-Step Guide"
created: "2021-08-15T19:27:05+02:00"
modified: "2021-08-15T19:27:05+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-react-hooks tag-react tag-javascript ">
<header class="post-full-header">
<h1 class="post-full-title">How to Build Your Own React Hooks: A Step-by-Step Guide</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2021/03/how-to-create-custom-react-hooks.png 300w,
/news/content/images/size/w600/2021/03/how-to-create-custom-react-hooks.png 600w,
/news/content/images/size/w1000/2021/03/how-to-create-custom-react-hooks.png 1000w,
/news/content/images/size/w2000/2021/03/how-to-create-custom-react-hooks.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2021/03/how-to-create-custom-react-hooks.png" alt="How to Build Your Own React Hooks: A Step-by-Step Guide">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Custom React hooks are an essential tool that let you add special, unique functionality to your React applications. </p>
<p>In many cases, if you want to add a certain feature to your application, you can simply install a third-party library that is made to solve your problem. But if such a library or hook doesn't exist, what do you do?</p>
<p>As a React developer, it's important to learn the process of creating custom hooks to solve problems or add missing features within your own React projects.</p>
<p>In this step-by-step guide, I will show you how to create your own custom React hooks by breaking down three hooks I've made for my own applications, along with what problems they were created to solve.</p>
<blockquote>Want to learn how to create custom React hooks as you build fun, real-world applications? Check out <a href="https://bit.ly/the-react-bootcamp"><strong>The React Bootcamp</strong></a>.</blockquote>
<h2 id="1-usecopytoclipboard-hook">1. useCopyToClipboard Hook</h2>
<p>On a past version of my website, <a href="https://reedbarger.com">reedbarger.com</a>, I allowed users to copy code from my articles with the help of a package called <code>react-copy-to-clipboard</code>.</p>
<p>A user just hovers over the snippet, clicks the clipboard button, and the code is added to their computer's clipboard to enable them to paste and use the code, wherever they like.</p>
<p>Instead of using a third party library, however, I wanted to recreate this functionality with my own custom React hook. As with every custom react hook I create, I put it a dedicated folder, usually called <code>utils</code> or <code>lib</code>, specifically for functions that I can reuse across my app.</p>
<p>We'll put this hook in a file called useCopyToClipboard.js and I'll make a function of the same name.</p>
<p>There are various ways that we can copy some text to the user's clipboard. I prefer to use a library for this, which makes the process more reliable, called <code>copy-to-clipboard</code>.</p>
<p>It exports a function, which we will call <code>copy</code>.</p><pre><code class="language-jsx">// utils/useCopyToClipboard.js
import React from "react";
import copy from "copy-to-clipboard";
export default function useCopyToClipboard() {}
</code></pre>
<p>Next we will create a function that will be used for copying whatever text wants to be added to the user's clipboard. We will call this function <code>handleCopy</code>.</p>
<h3 id="how-to-make-the-handlecopy-function">How to make the handleCopy function</h3>
<p>Within the function, we first need to make sure it only accepts data that is of type string or number. We will set up an <code>if-else</code> statement, which will make sure that the type is either the string or number. Else, we will log an error to the console that tells the user you cannot copy any other types.</p><pre><code class="language-jsx">import React from "react";
import copy from "copy-to-clipboard";
export default function useCopyToClipboard() {
const [isCopied, setCopied] = React.useState(false);
function handleCopy(text) {
if (typeof text === "string" || typeof text == "number") {
// copy
} else {
// don't copy
console.error(
`Cannot copy typeof ${typeof text} to clipboard, must be a string or number.`
);
}
}
}
</code></pre>
<p>Next we take the text and convert it to a string, which we will then pass to the <code>copy</code> function. From there, we return the <code>handleCopy</code> function from the hook to wherever we like in our application. </p>
<p>Generally, the <code>handleCopy</code> function will be connected to an <code>onClick</code> of a button.</p><pre><code class="language-jsx">import React from "react";
import copy from "copy-to-clipboard";
export default function useCopyToClipboard() {
function handleCopy(text) {
if (typeof text === "string" || typeof text == "number") {
copy(text.toString());
} else {
console.error(
`Cannot copy typeof ${typeof text} to clipboard, must be a string or number.`
);
}
}
return handleCopy;
}
</code></pre>
<p>Additionally, we want some state that represents whether the text was copied or not. To create that, we will call <code>useState</code> at the top of our hook and make a new state variable <code>isCopied</code>, where the setter will be called <code>setCopy</code>.</p>
<p>Initially this value will be false. If the text is successfully copied, we will set <code>copy</code> to true. Else, we will set it to false.</p>
<p>Finally, we will return <code>isCopied</code> from the hook within an array along with <code>handleCopy</code>.</p><pre><code class="language-jsx">import React from "react";
import copy from "copy-to-clipboard";
export default function useCopyToClipboard(resetInterval = null) {
const [isCopied, setCopied] = React.useState(false);
function handleCopy(text) {
if (typeof text === "string" || typeof text == "number") {
copy(text.toString());
setCopied(true);
} else {
setCopied(false);
console.error(
`Cannot copy typeof ${typeof text} to clipboard, must be a string or number.`
);
}
}
return [isCopied, handleCopy];
}
</code></pre>
<h3 id="how-to-use-usecopytoclipboard">How to use useCopyToClipboard</h3>
<p>We can now use <code>useCopyToClipboard</code> within any component that we like.</p>
<p>In my case I will use it with a copy button component which received the code for our code snippet.</p>
<p>To make this work, all we need to do is add an on click to the button. And in the return of a function called handle copy with the code asked to it as text. And once it's copied it's true. We can show a different icon indicating a copy was successful.</p><pre><code class="language-jsx">import React from "react";
import ClipboardIcon from "../svg/ClipboardIcon";
import SuccessIcon from "../svg/SuccessIcon";
import useCopyToClipboard from "../utils/useCopyToClipboard";
function CopyButton({ code }) {
const [isCopied, handleCopy] = useCopyToClipboard();
return (
&lt;button onClick={() =&gt; handleCopy(code)}&gt;
{isCopied ? &lt;SuccessIcon /&gt; : &lt;ClipboardIcon /&gt;}
&lt;/button&gt;
);
}
</code></pre>
<h3 id="how-to-add-a-reset-interval">How to add a reset interval</h3>
<p>There's one improvement we can make to our code. As we've currently written our hook, <code>isCopied</code> will always be true, meaning we will always see the success icon:</p>
<p>If we want to reset our state after a few seconds you can pass a time interval to <code>useCopyToClipboard</code>. Let's add that functionality.</p>
<p>Back in our hook, we can create a parameter called <code>resetInterval</code>, whose default value is <code>null</code>, which will ensure that the state will not reset if no argument is passed to it.</p>
<p>We will then add <code>useEffect</code> to say that if the text is copied and we have a reset interval, we will set <code>isCopied</code> back to false after that interval using a <code>setTimeout</code>.</p>
<p>Additionally, we need to clear that timeout if our component that the hook is being used in unmounts (meaning our state is no longer there to update).</p><pre><code class="language-jsx">import React from "react";
import copy from "copy-to-clipboard";
export default function useCopyToClipboard(resetInterval = null) {
const [isCopied, setCopied] = React.useState(false);
const handleCopy = React.useCallback((text) =&gt; {
if (typeof text === "string" || typeof text == "number") {
copy(text.toString());
setCopied(true);
} else {
setCopied(false);
console.error(
`Cannot copy typeof ${typeof text} to clipboard, must be a string or number.`
);
}
}, []);
React.useEffect(() =&gt; {
let timeout;
if (isCopied &amp;&amp; resetInterval) {
timeout = setTimeout(() =&gt; setCopied(false), resetInterval);
}
return () =&gt; {
clearTimeout(timeout);
};
}, [isCopied, resetInterval]);
return [isCopied, handleCopy];
}
</code></pre>
<p>Finally, the last improvement we can make is to wrap <code>handleCopy</code> in the <code>useCallback</code> hook in order to ensure that it will not be recreated every time there is a rerender.</p>
<h3 id="final-result">Final Result</h3>
<p>And with that, we have our final hook which allows the state to be reset after a given time interval. If we pass one to it, we should see a result like what we have below.</p><pre><code class="language-jsx">import React from "react";
import ClipboardIcon from "../svg/ClipboardIcon";
import SuccessIcon from "../svg/SuccessIcon";
import useCopyToClipboard from "../utils/useCopyToClipboard";
function CopyButton({ code }) {
// isCopied is reset after 3 second timeout
const [isCopied, handleCopy] = useCopyToClipboard(3000);
return (
&lt;button onClick={() =&gt; handleCopy(code)}&gt;
{isCopied ? &lt;SuccessIcon /&gt; : &lt;ClipboardIcon /&gt;}
&lt;/button&gt;
);
}
</code></pre>
<h2 id="2-usepagebottom-hook">2. usePageBottom Hook</h2>
<p>In React apps, sometimes it is important to know when your user has scrolled to the bottom of a page.</p>
<p>In apps where you have an infinite scroll, such as Instagram for example, once the user hits the bottom of the page, you need to fetch more posts.</p>
<p>Let’s take a look at how to create a usePageBottom hook ourselves for similar use cases like creating an infinite scroll.</p>
<p>We’ll begin by making a separate file, usePageBottom.js, in our utils folder and we'll add a function (hook) with the same name:</p><pre><code class="language-js">// utils/usePageBottom.js
import React from "react";
export default function usePageBottom() {}
</code></pre>
<p>Next, we’ll need to calculate when our user hits the bottom of the page. We can determine this with information from the <code>window</code>. In order to access this, we’re going to need to make sure our component that the hook is called within is mounted, so we’ll use the <code>useEffect</code> hook with an empty dependencies array.</p><pre><code class="language-js">// utils/usePageBottom.js
import React from "react";
export default function usePageBottom() {
React.useEffect(() =&gt; {}, []);
}
</code></pre>
<p>The user will have scrolled to the bottom of the page when the window’s <code>innerHeight</code> value plus the document’s <code>scrollTop</code> value is equal to the <code>offsetHeight</code>. If those two values are equal, the result will be true, and the user has scrolled to the bottom of the page:</p><pre><code class="language-js">// utils/usePageBottom.js
import React from "react";
export default function usePageBottom() {
React.useEffect(() =&gt; {
window.innerHeight + document.documentElement.scrollTop ===
document.documentElement.offsetHeight;
}, []);
}
</code></pre>
<p>We’ll store the result of this expression in a variable, <code>isBottom</code> and we’ll update a state variable called <code>bottom</code>, which we’ll ultimately return from our hook.</p><pre><code class="language-js">// utils/usePageBottom.js
import React from "react";
export default function usePageBottom() {
const [bottom, setBottom] = React.useState(false);
React.useEffect(() =&gt; {
const isBottom =
window.innerHeight + document.documentElement.scrollTop ===
document.documentElement.offsetHeight;
setBottom(isButton);
}, []);
return bottom;
}
</code></pre>
<p>Our code as is, however, won’t work. Why not?</p>
<p>The issue lies in the fact that we need to calculate <code>isBottom</code> whenever the user is scrolling. As a result, we need to listen for a scroll event with <code>window.addEventListener</code>. We can reevaluate this expression by creating a local function to be called whenever the user scrolls, called <code>handleScroll</code>.</p><pre><code class="language-js">// utils/usePageBottom.js
import React from "react";
export default function usePageBottom() {
const [bottom, setBottom] = React.useState(false);
React.useEffect(() =&gt; {
function handleScroll() {
const isBottom =
window.innerHeight + document.documentElement.scrollTop
=== document.documentElement.offsetHeight;
setBottom(isButton);
}
window.addEventListener("scroll", handleScroll);
}, []);
return bottom;
}
</code></pre>
<p>Finally, since we have an event listener that is updating state, we need to handle the event that our user navigates away from the page and our component is removed. We need to remove the scroll event listener that we added, so we don’t attempt to update a state variable that no longer exists.</p>
<p>We can do this by returning a function from <code>useEffect</code> along with <code>window.removeEventListener</code>, where we pass a reference to the same <code>handleScroll</code> function. And we’re done.</p><pre><code class="language-js">// utils/usePageBottom.js
import React from "react";
export default function usePageBottom() {
const [bottom, setBottom] = React.useState(false);
React.useEffect(() =&gt; {
function handleScroll() {
const isBottom =
window.innerHeight + document.documentElement.scrollTop
=== document.documentElement.offsetHeight;
setBottom(isButton);
}
window.addEventListener("scroll", handleScroll);
return () =&gt; {
window.removeEventListener("scroll", handleScroll);
};
}, []);
return bottom;
}
</code></pre>
<p>Now we can simply call this code in any function where we want to know whether we’ve hit the bottom of the page or not. </p>
<p>Within my Gatsby site, I have a header, and as I decrease the size of the page, I want to show fewer links.</p>
<p>To do this we could use a media query (CSS), or we could use a custom React hook to give us the current size of the page and hide or show the links in our JSX.</p>
<p>Previously, I was using a hook from the a library called <code>react-use</code>. Instead of bringing an entire third-party library, I decided to create my own hook that would provide the dimensions of the window, both the width and height. I called this hook <code>useWindowSize</code>.</p>
<h3 id="how-to-create-the-hook">How to create the hook</h3>
<p>First, we’ll create a new file .js in our utilities (utils) folder, the same name as the hook <code>useWindowSize</code>. I’ll import React (to use hooks) while exporting the custom hook.</p><pre><code class="language-js">// utils/useWindowSize.js
import React from "react";
export default function useWindowSize() {}
</code></pre>
<p>Now since I’m using this within a Gatsby site, which is server-rendered, I need to get the size of the window. But we may not have access to it because we’re on the server. </p>
<p>To check and make sure we’re not on the server, we can see if type of <code>window</code> is not equal to the string <code>undefined</code>.</p>
<p>In which case we can return to a default width and height for a browser, say, 1200 and 800 within an object:</p><pre><code class="language-js">// utils/useWindowSize.js
import React from "react";
export default function useWindowSize() {
if (typeof window !== "undefined") {
return { width: 1200, height: 800 };
}
}
</code></pre>
<h3 id="how-to-get-the-width-and-height-from-window">How to get the width and height from window</h3>
<p>And assuming we are on the client and can get the window, we can take the <code>useEffect</code> hook to perform a side effect by interacting with <code>window</code>. We’ll include an empty dependencies array to make sure the effect function is called only once the component (that this hook is called in) is mounted.</p>
<p>To find out the window width and height, we can add an event listener and listen for the <code>resize</code> event. And whenever the browser sizes changes, we can update a piece of state (created with <code>useState</code>), which we’ll call <code>windowSize</code>, and the setter to update it will be <code>setWindowSize</code>.</p><pre><code class="language-js">// utils/useWindowSize.js
import React from "react";
export default function useWindowSize() {
if (typeof window !== "undefined") {
return { width: 1200, height: 800 };
}
const [windowSize, setWindowSize] = React.useState();
React.useEffect(() =&gt; {
window.addEventListener("resize", () =&gt; {
setWindowSize({ width: window.innerWidth, height: window.innerHeight });
});
}, []);
}
</code></pre>
<p>When the window is resized, the callback will be called and the <code>windowSize</code> state will be updated with the current window dimensions. To get that, we set the width to <code>window.innerWidth</code>, and height to <code>window.innerHeight</code>.</p>
<h3 id="how-to-add-ssr-support">How to add SSR support</h3>
<p>However, the code as we have it here will not work. This is because a key rule of hooks is that they cannot be called conditionally. As a result, we cannot have a conditional above our <code>useState</code> or <code>useEffect</code> hook before they are called.</p>
<p>So to fix this, we’ll set the initial value of <code>useState</code> conditionally. We’ll create a variable called <code>isSSR</code>, which will perform the same check to see if the window is not equal to the string <code>undefined</code>.</p>
<p>And we’ll use a ternary to set the width and height by first checking to see if we’re on the server. If we are we’ll use the default value, and if not, we’ll use <code>window.innerWidth</code> and <code>window.innerHeight</code>.</p><pre><code class="language-js">// utils/useWindowSize.js
import React from "react";
export default function useWindowSize() {
// if (typeof window !== "undefined") {
// return { width: 1200, height: 800 };
// }
const isSSR = typeof window !== "undefined";
const [windowSize, setWindowSize] = React.useState({
width: isSSR ? 1200 : window.innerWidth,
height: isSSR ? 800 : window.innerHeight,
});
React.useEffect(() =&gt; {
window.addEventListener("resize", () =&gt; {
setWindowSize({ width: window.innerWidth, height: window.innerHeight });
});
}, []);
}
</code></pre>
<p>Then, finally, we need to think about when our components unmount. What do we need to do? We need to remove our resize listener.</p>
<h3 id="how-to-remove-the-resize-event-listener">How to remove the resize event listener</h3>
<p>You can do that by returning a function from useEffectand. We will remove the listener with <code>window.removeEventListener</code>.</p><pre><code class="language-js">// utils/useWindowSize.js
import React from "react";
export default function useWindowSize() {
// if (typeof window !== "undefined") {
// return { width: 1200, height: 800 };
// }
const isSSR = typeof window !== "undefined";
const [windowSize, setWindowSize] = React.useState({
width: isSSR ? 1200 : window.innerWidth,
height: isSSR ? 800 : window.innerHeight,
});
React.useEffect(() =&gt; {
window.addEventListener("resize", () =&gt; {
setWindowSize({ width: window.innerWidth, height: window.innerHeight });
});
return () =&gt; {
window.removeEventListener("resize", () =&gt; {
setWindowSize({ width: window.innerWidth, height: window.innerHeight });
});
};
}, []);
}
</code></pre>
<p>But we need a reference to the same function, not two different ones as we have here. To do that, we’ll create a shared callback function to both of the listeners called <code>changeWindowSize</code>.</p>
<p>And finally, at the end of the hook, we will return our <code>windowSize</code> state. And that’s it.</p><pre><code class="language-js">// utils/useWindowSize.js
import React from "react";
export default function useWindowSize() {
const isSSR = typeof window !== "undefined";
const [windowSize, setWindowSize] = React.useState({
width: isSSR ? 1200 : window.innerWidth,
height: isSSR ? 800 : window.innerHeight,
});
function changeWindowSize() {
setWindowSize({ width: window.innerWidth, height: window.innerHeight });
}
React.useEffect(() =&gt; {
window.addEventListener("resize", changeWindowSize);
return () =&gt; {
window.removeEventListener("resize", changeWindowSize);
};
}, []);
return windowSize;
}
</code></pre>
<h3 id="final-result-1">Final Result</h3>
<p>To use the hook, we just need to import it where we need it, call it, and use the width wherever we want to hide or show certain elements.</p>
<p>In my case, this is at the 500px mark. There, I want to hide all of the other links and only show the Join Now button, like you see in the example above:</p><pre><code class="language-jsx">// components/StickyHeader.js
import React from "react";
import useWindowSize from "../utils/useWindowSize";
function StickyHeader() {
const { width } = useWindowSize();
return (
&lt;div&gt;
{/* visible only when window greater than 500px */}
{width &gt; 500 &amp;&amp; (
&lt;&gt;
&lt;div onClick={onTestimonialsClick} role="button"&gt;
&lt;span&gt;Testimonials&lt;/span&gt;
&lt;/div&gt;
&lt;div onClick={onPriceClick} role="button"&gt;
&lt;span&gt;Price&lt;/span&gt;
&lt;/div&gt;
&lt;div&gt;
&lt;span onClick={onQuestionClick} role="button"&gt;
Question?
&lt;/span&gt;
&lt;/div&gt;
&lt;/&gt;
)}
{/* visible at any window size */}
&lt;div&gt;
&lt;span className="primary-button" onClick={onPriceClick} role="button"&gt;
Join Now
&lt;/span&gt;
&lt;/div&gt;
&lt;/div&gt;
);
}
</code></pre>
<p>This hook will work on any server-rendered React app, such as Gatsby and Next.js.</p>
<h2 id="3-usedevicedetect-hook">3. useDeviceDetect Hook</h2>
<p>I’m in the process of building a new landing page for a course of mine, and I experienced a very strange error on mobile devices. On desktop computers, the styles looked great.</p>
<p>But when I looked at on mobile, everything was out of place and broken.</p>
<p>I tracked the problem down to one library called <code>react-device-detect</code> which I was using to detect whether users had a mobile device or not. If so, I would remove the header.</p><pre><code class="language-jsx">// templates/course.js
import React from "react";
import { isMobile } from "react-device-detect";
function Course() {
return (
&lt;&gt;
&lt;SEO /&gt;
{!isMobile &amp;&amp; &lt;StickyHeader {...courseData} /&gt;}
{/* more components... */}
&lt;/&gt;
);
}
</code></pre>
<p>The problem was that this library doesn’t have support for server-side rendering, which is what Gatsby uses by default. So I needed to create my own solution to check when a user was on a mobile device. And for that, I decided to make a custom hook with the name <code>useDeviceDetect</code>.</p>
<h3 id="how-i-created-the-hook">How I created the Hook</h3>
<p>I created a separate file for this hook in my utils folder with the same name, useDeviceDetect.js. Since hooks are just shareable JavaScript functions, which leverage React hooks, I created a function called <code>useDeviceDetect</code> and imported React.</p><pre><code class="language-jsx">// utils/useDeviceDetect.js
import React from "react";
export default function useDeviceDetect() {}
</code></pre>
<h3 id="how-to-get-the-user-agent-from-window">How to get the user agent from window</h3>
<p>The way that we can make sure whether we can get information about the user’s device is through the userAgent property (located on the navigator property of window).</p>
<p>And since interacting with the window API as an API / external resource would be classed as a side effect, we need to get access to the user agent within the <code>useEffect</code> hook.</p><pre><code class="language-jsx">// utils/useDeviceDetect.js
import React from "react";
export default function useDeviceDetect() {
React.useEffect(() =&gt; {
console.log(`user's device is: ${window.navigator.userAgent}`);
// can also be written as 'navigator.userAgent'
}, []);
}
</code></pre>
<p>Once the component mounts, we can use <code>typeof navigator</code> to determine if we are on the client or server. If we’re on the server, we won’t have access to the window. <code>typeof navigator</code> will be equal to the string <code>undefined</code> since it’s not there. Otherwise, if we’re on the client, we’ll be able to get our user agent property.</p>
<p>We can express all this using a ternary to get the userAgent data:</p><pre><code class="language-jsx">// utils/useDeviceDetect.js
import React from "react";
export default function useDeviceDetect() {
React.useEffect(() =&gt; {
const userAgent =
typeof navigator === "undefined" ? "" : navigator.userAgent;
}, []);
}
</code></pre>
<h3 id="how-to-check-if-useragent-is-a-mobile-device">How to check if userAgent is a mobile device</h3>
<p><code>userAgent</code> is a string value which will be set to any one of the following device names if they are using a mobile device:</p>
<p>Android, BlackBerry, iPhone, iPad, iPod, Opera Mini, IEMobile, or WPDesktop.</p>
<p>All we have to do is take the string we get and use the <code>.match()</code> method with a regex to see whether it’s any one of these strings. We’ll store it in a local variable called <code>mobile</code>.</p>
<p>We’ll store the result in state with the useState hook, which we’ll give an initial value of false. For it, we’ll create a corresponding state variable <code>isMobile</code>, and the setter will be <code>setMobile</code>.</p><pre><code class="language-jsx">// utils/useDeviceDetect.js
import React from "react";
export default function useDeviceDetect() {
const [isMobile, setMobile] = React.useState(false);
React.useEffect(() =&gt; {
const userAgent =
typeof window.navigator === "undefined" ? "" : navigator.userAgent;
const mobile = Boolean(
userAgent.match(
/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
)
);
setMobile(mobile);
}, []);
}
</code></pre>
<p>So once we get the <code>mobile</code> value we will set it in state. Then finally we will return an object from the hook so we can add more values in the future if we want to choose to add more functionality to this hook.</p>
<p>Within the object, we’ll add <code>isMobile</code> as a property and value:</p><pre><code class="language-jsx">// utils/useDeviceDetect.js
import React from "react";
export default function useDeviceDetect() {
const [isMobile, setMobile] = React.useState(false);
React.useEffect(() =&gt; {
const userAgent =
typeof window.navigator === "undefined" ? "" : navigator.userAgent;
const mobile = Boolean(
userAgent.match(
/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
)
);
setMobile(mobile);
}, []);
return { isMobile };
}
</code></pre>
<h3 id="final-result-2">Final Result</h3>
<p>Back in the landing page we can execute the hook and simply get that property from the destructured object and use it where we need it.</p><pre><code class="language-jsx">// templates/course.js
import React from "react";
import useDeviceDetect from "../utils/useDeviceDetect";
function Course() {
const { isMobile } = useDeviceDetect();
return (
&lt;&gt;
&lt;SEO /&gt;
{!isMobile &amp;&amp; &lt;StickyHeader {...courseData} /&gt;}
{/* more components... */}
&lt;/&gt;
);
}
</code></pre>
<h2 id="conclusion">Conclusion</h2>
<p>As I've attempted to illustrate through each of these examples, custom React hooks can give us the tools to fix our own problems when third-party libraries fall short.</p>
<p>I hope that this guide has given you a better idea of when and how to create your own React hooks. Feel free to use any of these hooks and above code in your own projects and as the inspiration for your own custom React hooks.</p>
<h2 id="enjoythispostjointhereactbootcamp">Enjoy this post? Join The React Bootcamp</h2>
<p><strong><a href="http://bit.ly/join-react-bootcamp">The React Bootcamp</a></strong> takes everything you should know about learning React and bundles it into one comprehensive package, including videos, cheatsheets, plus special bonuses.</p>
<p>Gain the insider information hundreds of developers have already used to master React, find their dream jobs, and take control of their future:</p>
<p><a href="http://bit.ly/join-react-bootcamp"><img src="https://reedbarger.nyc3.digitaloceanspaces.com/react-bootcamp-banner.png" alt="The React Bootcamp"></a><br>
<em>Click here to be notified when it opens</em>
</p>
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
