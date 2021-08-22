---
card: "/images/default.jpg"
tags: [React]
description: Animations delight users. And you’d think, by the sheer volum
author: "Milad E. Fahmy"
title: "How to build a reusable animation component using React Hooks"
created: "2021-08-15T19:33:16+02:00"
modified: "2021-08-15T19:33:16+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-react tag-react-hooks tag-animation tag-css tag-javascript ">
<header class="post-full-header">
<h1 class="post-full-title">How to build a reusable animation component using React Hooks</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2019/07/final-multiple-1.gif 300w,
/news/content/images/size/w600/2019/07/final-multiple-1.gif 600w,
/news/content/images/size/w1000/2019/07/final-multiple-1.gif 1000w,
/news/content/images/size/w2000/2019/07/final-multiple-1.gif 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2019/07/final-multiple-1.gif" alt="How to build a reusable animation component using React Hooks">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Animations delight users. And you’d think, by the sheer volume of articles, that React Hooks delight developers. But for me, fatigue was starting to creep into my opinions on Hooks. </p>
<p>But serendipity saved me. I found an example that was a good match for React Hooks, rather than just “the new way.” As you may have guessed by this article’s title, that example was an animation.</p>
<figcaption>my goal</figcaption>
</figure>
<p>Unfortunately, there are nuances to making this work. And my solution led me to a good use of React Hooks.</p>
<h2 id="what-are-we-going-to-do">What are We Going to Do?</h2>
<ul>
<li>start with a baseline example application</li>
<li>incrementally animate the <em>disappearing </em>of elements, highlighting some challenges</li>
<li>once we achieve the desired animation, we’ll refactor a reusable animation component</li>
<li>we’ll use this component to animate a sidebar and a navbar</li>
<li>and …. (you need to read / jump to the end)</li>
</ul>
<p>For the impatient, here is the <a href="https://github.com/csepulv/animated-visibility" rel="noopener">GitHub repo</a> for the code in this project. There are tags for each step. (See README for links and descriptions for each tag.)</p>
<h2 id="baseline">Baseline</h2>
<figcaption>no animation — items disappear to fast</figcaption>
</figure>
<p>The code for this is basic and the results are uninteresting. When a user clicks the &nbsp;<em>eye</em> icon button, we change the item’s <code>display</code> property.</p><pre><code class="language-js">function Box({ word }) {
const color = colors[Math.floor(Math.random() * 9)];
const [visible, setVisible] = useState(true);
function hideMe() {
setVisible(false);
}
let style = { borderColor: color, backgroundColor: color };
if (!visible) style.display = "none";
return (
&lt;div className="box" style={style}&gt;
{" "}
&lt;div className="center"&gt;{word}&lt;/div&gt;{" "}
&lt;button className="button bottom-corner" onClick={hideMe}&gt;
{" "}
&lt;i className="center far fa-eye fa-lg" /&gt;{" "}
&lt;/button&gt;{" "}
&lt;/div&gt;
);
}</code></pre>
<p>(Yes I am using hooks above, but this is not the interesting use of hooks.)</p>
<h2 id="adding-animation">Adding Animation</h2>
<p>Rather than build my own animation library, I looked for an animation library like <a href="https://daneden.github.io/animate.css/" rel="noopener"><em>animate.css</em></a><em>.</em> <a href="https://github.com/digital-flowers/react-animated-css" rel="noopener"><em>react-animated-css</em></a><em> </em>is nice library that provides a wrapper around <em>animate.css.</em></p>
<p><code>npm install --save react-animated-css</code></p>
<p>add <em>animate.css</em> to <code>index.html</code></p><pre><code>&lt;link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.css" /&gt;</code></pre>
<p>In the <code>Box</code> component above, we change it’s rendering to</p><pre><code class="language-javascript">return (
&lt;Animated animationIn="zoomIn" animationOut="zoomOut" isVisible={visible}&gt;
&lt;div className="box" style={style}&gt;
&lt;div className="center"&gt;{word}&lt;/div&gt;
&lt;button className="button bottom-corner" onClick={hideMe}&gt;
&lt;i className="center far fa-eye fa-lg" /&gt;
&lt;/button&gt;
&lt;/div&gt;
&lt;/Animated&gt;
);</code></pre>
<h3 id="not-quite-what-we-want">Not quite what we want</h3>
<p>But <em>animate.css</em> animates <code>opacity</code> and other CSS properties; you can’t do a CSS transition on the <code>display</code> property. So an invisible object remains and it takes up space in the document flow.</p>
<p>If you <a href="https://www.google.com/search?q=animate+css+display+none&amp;oq=animate+css+display" rel="noopener">google</a> a bit, you’ll find some solutions that suggest using a timer to set <code>display: none</code> at the end of the animation.</p>
<p>So we can add that,</p><pre><code class="language-javascript">function Box({ word }) {
const color = colors[Math.floor(Math.random() * 9)];
const [visible, setVisible] = useState(true);
const [fading, setFading] = useState(false);
function hideMe() {
setFading(true);
setTimeout(() =&gt; setVisible(false), 650);
}
let style = { borderColor: color, backgroundColor: color };
return (
&lt;Animated
animationIn="zoomIn"
animationOut="zoomOut"
isVisible={!fading}
style={visible ? null : { display: "none" }}
&gt;
&lt;div className="box" style={style}&gt;
&lt;div className="center"&gt;{word}&lt;/div&gt;
&lt;button className="button bottom-corner" onClick={hideMe}&gt;
&lt;i className="center far fa-eye fa-lg" /&gt;
&lt;/button&gt;
&lt;/div&gt;
&lt;/Animated&gt;
);
}</code></pre>
<p>(Note: The default animation duration is 1000ms. I use 650ms for the timeout, to minimize a stutter/pause before setting the <code>display</code> property. This is a matter of preference.)</p>
<p>And that will give us the desired effect.</p>
<figcaption>Yay!</figcaption>
</figure>
<h2 id="creating-a-reusable-component">Creating a Reusable Component</h2>
<p>We could stop here, but there are two issues (for me):</p>
<ol>
<li>I don’t want to copy/paste the <code>Animated</code> block, styles and functions to recreate this effect</li>
</ol>
<h3 id="class-component">Class Component</h3>
<p>We can create a traditional React class component to manage the state of animation: toggle visibility and set the timeout for the <code>display</code> CSS property.</p><pre><code class="language-javascript">class AnimatedVisibility extends Component {
constructor(props) {
super(props);
this.state = { noDisplay: false, visible: this.props.visible };
}
componentWillReceiveProps(nextProps, nextContext) {
if (!nextProps.visible) {
this.setState({ visible: false });
setTimeout(() =&gt; this.setState({ noDisplay: true }), 650);
}
}
render() {
return (
&lt;Animated
animationIn="zoomIn"
animationOut="zoomOut"
isVisible={this.state.visible}
style={this.state.noDisplay ? { display: "none" } : null}
&gt;
{this.props.children}
&lt;/Animated&gt;
);
}
}</code></pre>
<p>and then use it</p><pre><code class="language-javascript">function Box({ word }) {
const color = colors[Math.floor(Math.random() * 9)];
const [visible, setVisible] = useState(true);
function hideMe() {
setVisible(false);
}
let style = { borderColor: color, backgroundColor: color };
return (
&lt;AnimatedVisibility visible={visible}&gt;
&lt;div className="box" style={style}&gt;
&lt;div className="center"&gt;{word}&lt;/div&gt;
&lt;button className="button bottom-corner" onClick={hideMe}&gt;
&lt;i className="center far fa-eye fa-lg" /&gt;
&lt;/button&gt;
&lt;/div&gt;
&lt;/AnimatedVisibility&gt;
);
}</code></pre>
<p>This does create a reusable component, but it is a bit complicated. We can do better.</p>
<h2 id="react-hooks-and-useeffect">React Hooks and useEffect</h2>
<p><a href="https://reactjs.org/docs/hooks-intro.html" rel="noopener">React Hooks</a> are a new feature in React 16.8. They offer a simpler approach to lifecycle and state management in React components.</p>
<p>The <a href="https://reactjs.org/docs/hooks-effect.html" rel="noopener"><em>useEffect</em></a> hook provides an elegant replacement to our use of <code>componentWillReceiveProps</code>. The code is simpler and we can use a functional component again.</p><pre><code class="language-javascript">function AnimatedVisibility({ visible, children }) {
const [noDisplay, setNoDisplay] = useState(!visible);
useEffect(() =&gt; {
if (!visible) setTimeout(() =&gt; setNoDisplay(true), 650);
else setNoDisplay(false);
}, [visible]);
const style = noDisplay ? { display: "none" } : null;
return (
&lt;Animated
animationIn="zoomIn"
animationOut="zoomOut"
isVisible={visible}
style={style}
&gt;
{children}
&lt;/Animated&gt;
);
}</code></pre>
<p>There are some subtleties with the <em>useEffect</em> hook. It’s primarily for side effects: changing state, calling asynchronous functions, etc. In our case, it sets the internal <code>noDisplay</code> boolean based on the previous value of <code>visible.</code></p>
<p>By adding <code>visible</code> to the dependencies array for <code>useEffect</code>, our <code>useEffect</code> hook will only be called when the value of <code>visible</code> changes.</p>
<p>I think <em>useEffect</em> is a much better solution than the class component clutter. ?</p>
<h2 id="reusing-the-component-sidebars-and-navbars">Reusing the Component: Sidebars and Navbars</h2>
<p>Everyone loves a sidebars and navbars. So let’s add one of each.</p><pre><code class="language-javascript">function ToggleButton({ label, isOpen, onClick }) {
const icon = isOpen ? (
&lt;i className="fas fa-toggle-off fa-lg" /&gt;
) : (
&lt;i className="fas fa-toggle-on fa-lg" /&gt;
);
return (
&lt;button className="toggle" onClick={onClick}&gt;
{label} {icon}
&lt;/button&gt;
);
}
function Navbar({ open }) {
return (
&lt;AnimatedVisibility
visible={open}
animationIn="slideInDown"
animationOut="slideOutUp"
animationInDuration={300}
animationOutDuration={600}
&gt;
&lt;nav className="bar nav"&gt;
&lt;li&gt;Item 1&lt;/li&gt;
&lt;li&gt;Item 2&lt;/li&gt;
&lt;li&gt;Item 3&lt;/li&gt;
&lt;/nav&gt;
&lt;/AnimatedVisibility&gt;
);
}
function Sidebar({ open }) {
return (
&lt;AnimatedVisibility
visible={open}
animationIn="slideInLeft"
animationOut="slideOutLeft"
animationInDuration={500}
animationOutDuration={600}
className="on-top"
&gt;
&lt;div className="sidebar"&gt;
&lt;ul&gt;
&lt;li&gt;Item 1&lt;/li&gt;
&lt;li&gt;Item 2&lt;/li&gt;
&lt;li&gt;Item 3&lt;/li&gt;
&lt;/ul&gt;
&lt;/div&gt;
&lt;/AnimatedVisibility&gt;
);
}
function App() {
const [navIsOpen, setNavOpen] = useState(false);
const [sidebarIsOpen, setSidebarOpen] = useState(false);
function toggleNav() {
setNavOpen(!navIsOpen);
}
function toggleSidebar() {
setSidebarOpen(!sidebarIsOpen);
}
return (
&lt;Fragment&gt;
&lt;main className="main"&gt;
&lt;header className="bar header"&gt;
&lt;ToggleButton
label="Sidebar"
isOpen={sidebarIsOpen}
onClick={toggleSidebar}
/&gt;
&lt;ToggleButton label="Navbar" isOpen={navIsOpen} onClick={toggleNav} /&gt;
&lt;/header&gt;
&lt;Navbar open={navIsOpen} /&gt;
&lt;Boxes /&gt;
&lt;/main&gt;
&lt;Sidebar open={sidebarIsOpen} /&gt;
&lt;/Fragment&gt;
);
}
</code></pre>
<figcaption>reuse achieved</figcaption>
</figure>
<h2 id="but-we-re-not-done-">But We’re Not Done…</h2>
<p>We could stop here. But as with my earlier comments about <em>Separation of Concerns</em>, I’d prefer to avoid mixing the <code>AnimatedVisibility</code> component in the render method of the <code>Box</code>, <code>Sidebar</code> nor <code>Navbar</code>. (It is also a small amount of duplication.)</p>
<p>We can create an HOC. (In fact, I wrote an article about animations and HOCs, <a href="https://medium.com/free-code-camp/how-to-build-animated-microinteractions-in-react-aab1cb9fe7c8"><em>How to Build Animated Microinteractions in React</em></a><em>.</em>) But HOCs usually involve class components, because of the state management.</p>
<p>But with React Hooks, we can just compose the HOC (functional programming approach).</p><pre><code class="language-javascript">function AnimatedVisibility({
visible,
children,
animationOutDuration,
disappearOffset,
...rest
})
// ... same as before
}
function makeAnimated(
Component,
animationIn,
animationOut,
animationInDuration,
animationOutDuration,
disappearOffset
) {
return function({ open, className, ...props }) {
return (
&lt;AnimatedVisibility
visible={open}
animationIn={animationIn}
animationOut={animationOut}
animationInDuration={animationInDuration}
animationOutDuration={animationOutDuration}
disappearOffset={disappearOffset}
className={className}
&gt;
&lt;Component {...props} /&gt;
&lt;/AnimatedVisibility&gt;
);
};
}
export function makeAnimationSlideLeft(Component) {
return makeAnimated(Component, "slideInLeft", "slideOutLeft", 400, 500, 200);
}
export function makeAnimationSlideUpDown(Component) {
return makeAnimated(Component, "slideInDown", "slideOutUp", 400, 500, 200);
}
export default AnimatedVisibility</code></pre>
<p>and then use these function-based HOCs in <code>App.js</code></p><pre><code class="language-javascript">function Navbar() {
return (
&lt;nav className="bar nav"&gt;
&lt;li&gt;Item 1&lt;/li&gt;
&lt;li&gt;Item 2&lt;/li&gt;
&lt;li&gt;Item 3&lt;/li&gt;
&lt;/nav&gt;
);
}
function Sidebar() {
return (
&lt;div className="sidebar"&gt;
&lt;ul&gt;
&lt;li&gt;Item 1&lt;/li&gt;
&lt;li&gt;Item 2&lt;/li&gt;
&lt;li&gt;Item 3&lt;/li&gt;
&lt;/ul&gt;
&lt;/div&gt;
);
}
const AnimatedSidebar = makeAnimationSlideLeft(Sidebar);
const AnimatedNavbar = makeAnimationSlideUpDown(Navbar);
function App() {
const [navIsOpen, setNavOpen] = useState(false);
const [sidebarIsOpen, setSidebarOpen] = useState(false);
function toggleNav() {
setNavOpen(!navIsOpen);
}
function toggleSidebar() {
setSidebarOpen(!sidebarIsOpen);
}
return (
&lt;Fragment&gt;
&lt;main className="main"&gt;
&lt;header className="bar header"&gt;
&lt;ToggleButton
label="Sidebar"
isOpen={sidebarIsOpen}
onClick={toggleSidebar}
/&gt;
&lt;ToggleButton label="Navbar" isOpen={navIsOpen} onClick={toggleNav} /&gt;
&lt;/header&gt;
&lt;AnimatedNavbar open={navIsOpen} /&gt;
&lt;Boxes /&gt;
&lt;/main&gt;
&lt;AnimatedSidebar open={sidebarIsOpen} className="on-top"/&gt;
&lt;/Fragment&gt;
);
}</code></pre>
<p>At the risk of promoting my own work, I much prefer the clean resulting code.</p>
<p>Here is a sandbox of the final result.</p>
<h2 id="now-what">Now What?</h2>
<p>For simple animations, the approach I describe works well. For more complex cases, I would use libraries like <a href="https://github.com/chenglou/react-motion" rel="noopener"><em>react-motion</em></a><em>.</em></p>
<p>But separate from animations, React Hooks provide opportunities create readable and simple code. However, there is an adjustment in thinking. Hooks like <em>useEffect</em> are not a straight replacement for all lifecycle methods. You’ll need to study and experiment.</p>
<p>I suggest looking at sites like <a href="https://usehooks.com/" rel="noopener">useHooks.com</a> and libraries like <a href="https://github.com/streamich/react-use" rel="noopener"><em>react-use</em></a>, a collection of hooks for a variety of use cases.</p>
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
