---
card: "/images/default.jpg"
tags: [Reactjs]
description: React.js is one of the most widely used JavaScript libraries
author: "Milad E. Fahmy"
title: "React.js for Beginners — Props and State Explained"
created: "2021-08-15T19:30:44+02:00"
modified: "2021-08-15T19:30:44+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-reactjs tag-javascript ">
<header class="post-full-header">
<h1 class="post-full-title">React.js for Beginners — Props and State Explained</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2021/06/Ekran-Resmi-2019-11-18-18.08.13.png 300w,
/news/content/images/size/w600/2021/06/Ekran-Resmi-2019-11-18-18.08.13.png 600w,
/news/content/images/size/w1000/2021/06/Ekran-Resmi-2019-11-18-18.08.13.png 1000w,
/news/content/images/size/w2000/2021/06/Ekran-Resmi-2019-11-18-18.08.13.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2021/06/Ekran-Resmi-2019-11-18-18.08.13.png" alt="React.js for Beginners — Props and State Explained">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>React.js is one of the most widely used JavaScript libraries that every front-end developer should know. Understanding what props and state are and the differences between them is a big step towards learning React.</p>
<p>In this blog post, I will explain what props and state are, and I will also clarify some of the most asked questions about them:</p>
<ul>
<li>What are props?</li>
<li>How do you pass data with props?</li>
<li>What is state?</li>
<li>How do you update a component’s state?</li>
<li>What happens when state changes?</li>
<li>Can I use state in every component?</li>
<li>What are the differences between props and state?</li>
</ul>
<blockquote>If you’re a complete beginner to React, I have a tutorial series about <a href="https://www.youtube.com/watch?v=nvhwG0Yk1AM&amp;list=PLaz1hMFq311wfHYvJbcDpbms36jKpzFk9">React for beginners.</a></blockquote>
<h2 id="what-are-props">What are props?</h2>
<p>Props is short for properties and they are used to pass data between React components. React’s data flow between components is uni-directional (from parent to child only).</p>
<h3 id="how-do-you-pass-data-with-props">How do you pass data with props?</h3>
<p>Here is an example of how data can be passed by using props:</p><pre><code class="language-javascript">class ParentComponent extends Component {
render() {
return (
&lt;ChildComponent name="First Child" /&gt;
);
}
}
const ChildComponent = (props) =&gt; {
return &lt;p&gt;{props.name}&lt;/p&gt;;
};</code></pre>
<p>Firstly, we need to define/get some data from the parent component and assign it to a child component’s “prop” attribute.</p><pre><code class="language-javascript">&lt;ChildComponent name="First Child" /&gt;
</code></pre>
<p>“Name” is a defined prop here and contains text data. Then we can pass data with props like we’re giving an argument to a function:</p><pre><code class="language-javascript">const ChildComponent = (props) =&gt; {
// statements
};</code></pre>
<p>And finally, we use dot notation to access the prop data and render it:</p><pre><code class="language-javascript">return &lt;p&gt;{props.name}&lt;/p&gt;;</code></pre>
<p><strong>You can also watch my video to see how to use props:</strong></p>
<h2 id="what-is-state">What is state?</h2>
<p>React has another special built-in object called state, which allows components to create and manage their own data. So unlike props, components cannot pass data with state, but they can create and manage it internally.</p>
<p>Here is an example showing how to use state:</p><pre><code class="language-javascript">class Test extends React.Component {
constructor() {
this.state = {
id: 1,
name: "test"
};
}
render() {
return (
&lt;div&gt;
&lt;p&gt;{this.state.id}&lt;/p&gt;
&lt;p&gt;{this.state.name}&lt;/p&gt;
&lt;/div&gt;
);
}
}</code></pre>
<h3 id="how-do-you-update-a-component-s-state">How do you update a component’s state?</h3>
<p>State should not be modified directly, but it can be modified with a special method called <code>setState( )</code>.</p><pre><code class="language-javascript">this.state.id = “2020”; // wrong
this.setState({         // correct
id: "2020"
});</code></pre>
<h3 id="what-happens-when-state-changes">What happens when state changes?</h3>
<p>OK, why must we use <code>setState( )</code>? Why do we even need the state object itself? If you’re asking these questions, don't worry – you’ll understand state soon :) Let me answer.</p>
<p>A change in the state happens based on user-input, triggering an event, and so on. Also, React components (with state) are rendered based on the data in the state. State holds the initial information.</p>
<p>So when state changes, React gets informed and immediately re-renders the DOM – <strong>not the whole DOM, but only the component with the updated state. </strong>This is one of the reasons why React is fast.</p>
<p>And how does React get notified? You guessed it: with <code>setState( )</code>. The <code>setState( )</code> method triggers the re-rendering process for the updated parts. React gets informed, knows which part(s) to change, and does it quickly without re-rendering the whole DOM.</p>
<p>In summary, there are 2 important points we need to pay attention to when using state:</p>
<ul>
<li>State shouldn’t be modified directly – the <code>setState( )</code> should be used</li>
<li>State affects the performance of your app, and therefore it shouldn’t be used unnecessarily</li>
</ul>
<h3 id="can-i-use-state-in-every-component">Can I use state in every component?</h3>
<p>Another important question you might ask about state is where exactly we can use it. In the early days, state could only be used in <strong>class components</strong>, not in functional components.</p>
<p>That’s why functional components were also known as stateless components. However, after the introduction of <strong>React Hooks</strong>, state can now be used both in class and functional components.</p>
<p>If your project is not using React Hooks, then you can only use state in class components.</p>
<h3 id="what-are-the-differences-between-props-and-state">What are the differences between props and state?</h3>
<p>Finally, let’s recap and see the main differences between props and state:</p>
<ul>
<li>Components receive data from outside with props, whereas they can create and manage their own data with state</li>
<li>Props are used to pass data, whereas state is for managing data</li>
<li>Data from props is read-only, and cannot be modified by a component that is receiving it from outside</li>
<li>State data can be modified by its own component, but is private (cannot be accessed from outside)</li>
<li>Props can only be passed from parent component to child (unidirectional flow)</li>
<li>Modifying state should happen with the <code>setState ( )</code> method</li>
</ul>
<p>React.js is one today's of the most widely used JavaScript libraries that every front-end developer should know. </p>
<p>I hope this article helps you understand props and state. There are also other important things to cover about React, and I will keep writing about them later in my following articles.</p>
<p><strong>If you want to learn more about web development, feel free to </strong><a href="https://www.youtube.com/channel/UC1EgYPCvKCXFn8HlpoJwY3Q" rel="noopener"><strong>follow me on YouTube</strong></a><strong>!</strong></p>
<p>Thank you for reading!</p>
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
