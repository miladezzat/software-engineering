---
card: "https://cdn-media-1.freecodecamp.org/images/1*XlDCO_6ml5lRCbxJZnkzow.jpeg"
tags: [JavaScript]
description: by Diego Haz
author: "Milad E. Fahmy"
title: "React's new context API: toggle between local and global state"
created: "2021-08-15T19:46:51+02:00"
modified: "2021-08-15T19:46:51+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-react tag-tech tag-software-development tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">React's new context API: toggle between local and global state</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*XlDCO_6ml5lRCbxJZnkzow.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*XlDCO_6ml5lRCbxJZnkzow.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*XlDCO_6ml5lRCbxJZnkzow.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*XlDCO_6ml5lRCbxJZnkzow.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*XlDCO_6ml5lRCbxJZnkzow.jpeg" alt="React's new context API: toggle between local and global state">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Diego Haz</p>
<h1 id="react-s-new-context-api-toggle-between-local-and-global-state">React's new context API: toggle between local and global state</h1>
<p>Consider a component that handles a visibility state and passes it down to its children via <a href="https://reactjs.org/docs/render-props.html" rel="noopener">render props</a>:</p><pre><code>const PopoverContainer = () =&gt; (  &lt;VisibilityContainer&gt;    {({ toggle, hidden }) =&gt; (      &lt;div&gt;        &lt;button onClick={toggle}&gt;PopoverButton&lt;/button&amp;gt;        &lt;div hidden={hidden}&gt;PopoverContent&lt;/div&gt;      &lt;/div&gt;    )}  &lt;/VisibilityContainer&gt;);</code></pre>
<p>What would you think about being able to make that state <strong>global</strong> by just changing a <code>context</code> property on the component?</p><pre><code>const PopoverButton = () =&gt; (  &lt;VisibilityContainer context="popover1"&gt;    {({ toggle }) =&gt; (      &lt;button onClick={toggle}&gt;PopoverButton&lt;/button&gt;    )}  &lt;/VisibilityContainer&gt;);</code></pre><pre><code>const PopoverContent = () =&gt; (  &lt;VisibilityContainer context="popover1"&gt;    {({ hidden }) =&gt; (      &amp;lt;div hidden={hidden}&gt;PopoverContent&lt;/div&gt;    )}  &lt;/VisibilityContainer&gt;);</code></pre>
<p>That's what we're going to achieve in this article.</p>
<h3 id="context-and-state">Context and State</h3>
<p>First, before talking about <strong>context</strong> and <strong>state</strong> in React, let me give you some <strong>context</strong> on the <strong>state</strong> of this topic (!).</p>
<p>Some months ago I published <a href="https://github.com/diegohaz/reas" rel="noopener">reas</a>, an experimental UI toolkit powered by React and <a href="https://www.styled-components.com" rel="noopener">styled-components</a>.</p>
<p>Besides components themselves, I wanted to provide helpers to handle their state. The approach I took at that time was to export some <a href="https://reactjs.org/docs/higher-order-components.html" rel="noopener">high-order components</a> (HOCs), such as <code>withPopoverContainer</code>, so as to control the visibility state of a <code>Popover</code> component. Take a look at this example:</p><pre><code>import { Popover, withPopoverContainer } from "reas";</code></pre><pre><code>const MyComponent = ({ toggle, visible }) =&gt; (  &lt;div&gt;    &lt;button onClick={toggle}&gt;Toggle&lt;/button&gt;    &lt;Popover visible={visible}&gt;Popover&lt;/Popover&gt;  &lt;/div&gt;);</code></pre><pre><code>export default withPopoverContainer(MyComponent);</code></pre>
<p>But HOCs have some problems, such as name collision. What if another HOC or a parent component passes its own <code>toggle</code> prop to <code>MyComponent</code>? Things will certainly break.</p>
<p>Even before that, inspired by <a href="undefined" rel="noopener">Michael Jackson</a> and his <a href="https://www.youtube.com/watch?v=BcVAq3YFiuc" rel="noopener">great talk</a>, the React community started to adopt <a href="https://reactjs.org/docs/render-props.html" rel="noopener">render props</a> over HOCs.</p>
<p>Also, React v16.3.0 introduced a new <a href="https://reactjs.org/docs/context.html" rel="noopener">context API</a>, replacing the <a href="https://reactjs.org/docs/legacy-context.html" rel="noopener">old unstable one</a>, using render props.</p>
<p>I've learned to look at all that stuff that gets hyped up, especially the stuff brought up by the JavaScript community, with a critical eye. This keeps my mind sane and prevents me from having to refactor my code every single day with cool new libraries.</p>
<p>Finally, I posted a <a href="https://twitter.com/diegohaz/status/978335493023821824" rel="noopener">tweet</a> asking people which they prefer: render props or HOCs. All comments were favorable to render props, which eventually made me turn all HOCs in <a href="https://github.com/diegohaz/reas" rel="noopener">reas</a> into components with render props:</p><pre><code>import { Popover } from "reas";</code></pre><pre><code>const MyComponent = () =&gt; (  &lt;Popover.Container&gt;    {({ toggle, visible }) =&gt; (      &lt;div&gt;        &lt;button onClick={toggle}&gt;Toggle&amp;lt;/button&amp;gt;        &lt;Popover visible={visible}&gt;Popover&lt;/Popover&gt;      &lt;/div&gt;    )}  &lt;/Popover.Container&gt;);</code></pre><pre><code>export default MyComponent;</code></pre>
<p><code>Popover.Container</code> was a regular React component class with a <code>toggle</code> method using <code>this.setState</code> to change <code>this.state.visible</code>. Simple as that.</p>
<p>It was good and worked pretty well. However, in one of my projects I had a <code>button</code> that was supposed to control the <code>Popover</code> component placed in a completely different path in the React tree.</p>
<p>I either needed to have some sort of global state manager like <a href="https://redux.js.org/" rel="noopener">Redux</a>, or I needed to move <code>Popover.Container</code> up in the tree in a common parent and pass the props down until they touched both <code>button</code> and <code>Popover</code> . But this sounded like a terrible idea.</p>
<p>Also, setting up Redux and rewriting all the logic I already had with <code>this.setState</code> into actions and reducers just to have that functionality would be an awful job.</p>
<p>I think this imminent need of shared state is one of the reasons why people <a href="http://wiki.c2.com/?PrematureOptimization" rel="noopener">prematurely optimize</a> their apps. That is, setting up all the libraries they <strong>might </strong>need up front, which includes a global state management library.</p>
<p>React's new context API comes in handy to solve this issue. I wanted to keep using regular React local state and only scale up to global state when needed, without needing to rewrite my state logic. That's why I built <a href="https://github.com/diegohaz/constate" rel="noopener">constate</a>.</p>
<h3 id="constate">Constate</h3>
<p>Let's see how <code>PopoverContainer</code> would look with <a href="https://github.com/diegohaz/constate" rel="noopener">constate</a>:</p><pre><code>import React from "react";import { Container } from "constate";</code></pre><pre><code>const PopoverContainer = props =&gt; (  &lt;Container    initialState={{ visible: false }}    actions={{      toggle: () =&gt; state =&gt;; ({ visible: !state.visible })    }}    {...props}  /&gt;);</code></pre><pre><code>export default PopoverContainer;</code></pre>
<p>Now we can wrap our component with <code>PopoverContainer</code> so as to have access to <code>visible</code> and <code>toggle</code> members already passed by <code>Container</code> to the <code>children</code> function as an argument.</p>
<p>Also, note that we are passing all props received from <code>PopoverContainer</code> to <code>Container</code>. This means that we can compose it to create a new derived state component, such as <code>AdvancedPopoverContainer</code>, with new <code>initialState</code> and <code>actions</code>.</p>
<h4 id="under-the-hood">Under the hood</h4>
<p>If you're like me, and you like to know how things were implemented under the hood, you're probably thinking about how <code>Container</code> was implemented. So, let's recreate a simple <code>Container</code> component:</p><pre><code>import React from "react";</code></pre><pre><code>class Container extends React.Component {  state = this.props.initialState;</code></pre><pre><code>  render() {    return this.props.children({      ...this.state,      ...mapStateToActions(...)    });  }}</code></pre><pre><code>export default Container;</code></pre>
<p><code><a href="https://github.com/diegohaz/constate/blob/93b7b5b469be4521784b51380f49e6589c3e56b9/src/utils.js#L1-L8" rel="noopener">mapStateToActions</a></code> is a utility function that passes state to each member of <code>actions</code>. That's what makes it possible to define our <code>toggle</code> function like this:</p><pre><code>const actions = {  toggle: () =&amp;gt; state =&gt; ({ visible: !state.visible})};</code></pre>
<p>Our goal, however, is to be able to use the same <code>PopoverContainer</code> as a global state. With <a href="https://github.com/diegohaz/constate" rel="noopener">constate</a> we just need to pass a <code>context</code> prop to <code>Container</code>:</p><pre><code>&lt;PopoverContainer context="popover1"&gt;  {({ toggle }) =&gt; (    &lt;button onClick={toggle}&gt;PopoverToggle&lt;/button&gt;  )}&lt;/PopoverContainer&gt;</code></pre>
<p>Now, every <code>Container</code> with <code>context="popover1"</code> will share the same state.</p>
<p>Of course, you're curious about how <code>Container</code> handles that <code>context</code> prop. So here you go:</p><pre><code>import React from "react";import Consumer from "./Consumer";</code></pre><pre><code>class Container extends React.Component {  state = this.props.initialState;</code></pre><pre><code>  render() {    if (this.props.context) {      return &lt;Consumer {...this.props} /&gt;;    }</code></pre><pre><code>    return this.props.children({      ...this.state,      ...mapStateToActions(...)    });  }}</code></pre><pre><code>export default Container;</code></pre>
<p>Ok, I'm sorry. Those four added lines don't tell you much. To create <code>Consumer</code>, we need to understand how to deal with the new React Context API.</p>
<h4 id="react-context">React Context</h4>
<p>We can break the new React Context API into three parts: <code>Context</code>, <code>Provider</code> and <code>Consumer</code>.</p>
<p>Let's create the context:</p><pre><code>import React from "react";</code></pre><pre><code>const Context = React.createContext();</code></pre><pre><code>export default Context;</code></pre>
<p>Then, we create our <code>Provider</code>, which uses <code>Context.Provider</code> and passes <code>state</code> and <code>setState</code> down:</p><pre><code>import React from "react";import Context from "./Context";</code></pre><pre><code>class Provider extends React.Component {  handleSetState = fn =&gt; {    this.setState(state =&gt; ({      state: fn(state.state)    }));  };</code></pre><pre><code>  state = {    state: this.props.initialState,    setState: this.handleSetState  };</code></pre><pre><code>  render() {    return (      &lt;Context.Provider value={this.state}&gt;        {this.props.children}      &lt;/Context.Provider&gt;    );  }}</code></pre><pre><code>export default Provider;</code></pre>
<p>It can be a little tricky. We can't simply pass <code>{ state, setState }</code> as a literal object to <code>Context.Provider</code>'s <code>value</code> since it would recreate that object on every render. Learn more <a href="https://github.com/diegohaz/constate/issues/2" rel="noopener">here</a>.</p>
<p>Finally, our <code>Consumer</code> needs to use <code>Context.Consumer</code> to access <code>state</code> and <code>setState</code> passed by <code>Provider</code>:</p><pre><code>import React from "react";import Context from "./Context";</code></pre><pre><code>const Consumer = ({ context, children, actions }) =&gt; (  &lt;Context.Consumer&gt;    {({ state, setState }) =&amp;gt; children({      ...state[context],      ...mapContextToActions(...)    })}  &lt;/Context.Consumer&gt;);</code></pre><pre><code>export default Consumer;</code></pre>
<p><code><a href="https://github.com/diegohaz/constate/blob/93b7b5b469be4521784b51380f49e6589c3e56b9/src/Consumer.js#L27-L35" rel="noopener">mapContextToActions</a></code> is similar to <code>mapStateToActions</code>. The difference is that the former maps <code>state[context]</code> instead of just <code>state</code>.</p>
<p>The final step is to wrap our app with <code>Provider</code>:</p><pre><code>import React from "react";import ReactDOM from "react-dom";import Provider from "./Provider";</code></pre><pre><code>const App = () =&gt; (  &lt;Provider&gt;    ...  &amp;lt;/Provider&gt;);</code></pre><pre><code>ReactDOM.render(&lt;App /&gt;, document.getElementById("root"));</code></pre>
<p>Finally, we have rewritten <a href="https://github.com/diegohaz/constate" rel="noopener">constate</a>. Now you can use <code>Container</code> component to switch between local and global state with ease.</p>
<h3 id="conclusion">Conclusion</h3>
<p>You might be thinking that starting a project with something like <a href="https://github.com/diegohaz/constate" rel="noopener">constate</a> could also be a premature optimization. And you're probably right. You should stick with <code>this.setState</code> without abstractions as long as you can.</p>
<p>However, not all <em>premature optimizations are the root of all evil</em>. You should find a good balance between simplicity and scalability. That is, you should pursue simple implementations, specially if you're building small applications. But, if you're planning to grow, you should look for simple implementations that are also easy to scale.</p>
<h3 id="thank-you-for-reading-this-">Thank you for reading this!</h3>
<p>If you like it and find it useful, here are some things you can do to show your support:</p>
<ul>
<li>Hit the clap ? button on this article a few times (up to 50)</li>
<li>Give a star ⭐️ on GitHub: <a href="https://github.com/diegohaz/constate" rel="noopener">https://github.com/diegohaz/constate</a></li>
<li>Follow me on GitHub: <a href="https://github.com/diegohaz" rel="noopener">https://github.com/diegohaz</a></li>
<li>Follow me on Twitter: <a href="https://twitter.com/diegohaz" rel="noopener">https://twitter.com/diegohaz</a></li>
</ul>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
