---
card: "https://cdn-media-1.freecodecamp.org/images/1*rJr_bOm3mD5V8_C5JaPrsQ.jpeg"
tags: [JavaScript]
description: Let’s take a closer look at some of the patterns that are eme
author: "Milad E. Fahmy"
title: "Evolving Patterns in React"
created: "2021-08-15T19:48:30+02:00"
modified: "2021-08-15T19:48:30+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-react tag-design-patterns tag-programming tag-software-development ">
<header class="post-full-header">
<h1 class="post-full-title">Evolving Patterns in React</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*rJr_bOm3mD5V8_C5JaPrsQ.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*rJr_bOm3mD5V8_C5JaPrsQ.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*rJr_bOm3mD5V8_C5JaPrsQ.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*rJr_bOm3mD5V8_C5JaPrsQ.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*rJr_bOm3mD5V8_C5JaPrsQ.jpeg" alt="Evolving Patterns in React">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Let’s take a closer look at some of the patterns that are emerging in the React ecosystem. These patterns improve readability, code clarity, and push your code towards composition and reusability.</p>
<p>I started working with <a href="https://reactjs.org/" rel="noopener"><strong>React</strong></a> roughly about 3 years ago. At that time, there were no established practices from which to learn in order to leverage its capabilities.</p>
<p>It took about 2 years for the community to settle around a few ideas. We shifted from <code>React.createClass</code> to the ES6 <code>class</code> and pure functional components. We dropped mixins and <a href="https://reactjs.org/blog/2016/04/07/react-v15.html" rel="noopener">we simplified our APIs</a>.</p>
<p>Now as the community is larger than ever, we’re starting to see a couple of nice patterns <strong>evolving</strong>.</p>
<p>In order to understand these patterns you need a basic understanding of the <strong>React</strong> concepts and its ecosystem. Please note, however, that I will not cover them in this article.</p>
<p>So let’s begin!</p>
<h4 id="conditional-render">Conditional Render</h4>
<p>I’ve seen the following scenario in a lot of projects.</p>
<p>When people think of <strong>React</strong> and <strong>JSX</strong>, they still think in terms of <strong>HTML</strong> and <strong>JavaScript</strong>.</p>
<p>So the natural step is to <strong>separate</strong><em> </em>the conditional logic from the actual return code.</p><pre><code class="language-javascript">const condition = true;
const App = () =&gt; {
const innerContent = condition ? (
&lt;div&gt;
&lt;h2&gt;Show me&lt;/h2&gt;
&lt;p&gt;Description&lt;/p&gt;
&lt;/div&gt;
) : null;
return (
&lt;div&gt;
&lt;h1&gt;This is always visible&lt;/h1&gt;
{ innerContent }
&lt;/div&gt;
);
};</code></pre>
<p>This tends to get out of control, with multiple <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator" rel="noopener">ternaries</a> at the beginning of each <code>render</code> function. You constantly have to jump inside the function to understand when a certain element is rendered or not.</p>
<p>As an alternative, try the following pattern, where you benefit from the execution model of the language.</p><pre><code class="language-javascript">const condition = true;
const App = () =&gt; (
&lt;div&gt;
&lt;h1&gt;This is always visible&lt;/h1&gt;
{
condition &amp;&amp; (
&lt;div&gt;
&lt;h2&gt;Show me&lt;/h2&gt;
&lt;p&gt;Description&lt;/p&gt;
&lt;/div&gt;
)
}
&lt;/div&gt;
);</code></pre>
<p>If <code>condition</code> is false, the second operand of the <code>&amp;&amp;</code> operator is not evaluated. If it is true, the second operand —<strong> or the JSX we wish to render</strong> — is returned.</p>
<p>This allows us to <strong>mix</strong> UI logic with the actual UI elements in a <strong>declarative</strong> way!</p>
<p>Treat JSX like it’s an integral part of your code! After all, it’s just <strong>JavaScript</strong>.</p>
<h4 id="passing-down-props">Passing Down Props</h4>
<p>When your application grows, you have smaller components that act as containers for other components.</p>
<p>As this happens, you need to pass down a good chunk of props through a component. The component doesn’t need them, but its children do.</p>
<p>A good way of bypassing this is to use <strong>props destructuring</strong> together with <strong>JSX spread</strong>, as you can see here:</p><pre><code class="language-javascript">const Details = ( { name, language } ) =&gt; (
&lt;div&gt;
&lt;p&gt;{ name } works with { language }&lt;/p&gt;
&lt;/div&gt;
);
const Layout = ( { title, ...props } ) =&gt; (
&lt;div&gt;
&lt;h1&gt;{ title }&lt;/h1&gt;
&lt;Details { ...props } /&gt;
&lt;/div&gt;
);
const App = () =&gt; (
&lt;Layout
title="I'm here to stay"
language="JavaScript"
name="Alex"
/&gt;
);</code></pre>
<p>So now, you can change the props needed for <code>Details</code> and be sure that those props are not referenced in multiple components.</p>
<h4 id="destructuring-props">Destructuring Props</h4>
<p>An app changes over time, and so do your components. A component you wrote two years ago might be stateful, but now it can be transformed into a stateless one. The other way around also happens a lot of times!</p>
<p>Since we talked about props destructuring, here’s a good trick I use to make my life easier on the long run. You can destructure your props in a similar manner for both types of components, as you can see below:</p><pre><code class="language-javascript">const Details = ( { name, language } ) =&gt; (
&lt;div&gt;
&lt;p&gt;{ name } works with { language }&lt;/p&gt;
&lt;/div&gt;
);
class Details extends React.Component {
render() {
const { name, language } = this.props;
return (
&lt;div&gt;
&lt;p&gt;{ name } works with { language }&lt;/p&gt;
&lt;/div&gt;
)
}
}</code></pre>
<p>Notice that lines <code>2–4</code> and <code>11–13</code> are <strong>identical.</strong> Transforming components is much easier using this pattern. Also, you limit the usage of <code>this</code> inside the component.</p>
<h4 id="provider-pattern">Provider Pattern</h4>
<p>We looked at an example where props need to be sent down through another component. But what if you have to send it down 15 components?</p>
<p>Enter <a href="https://reactjs.org/docs/context.html" rel="noopener">React Context</a>!</p>
<p>This is not necessarily the most recommended feature of React, but it gets the job done when needed.</p>
<p>It was <a href="https://twitter.com/acdlite/status/956390180637650944" rel="noopener">recently announced</a> that the Context is getting a new API, which implements the <strong>provider pattern </strong>out of the box.</p>
<p>If you are using things like <a href="https://github.com/reactjs/react-redux" rel="noopener">React Redux</a> or <a href="https://github.com/apollographql/react-apollo" rel="noopener">Apollo</a>, you might be familiar with the pattern.</p>
<p>Seeing how it works with today’s API will help you understand the new API as well. You can play around with the following sandbox.</p>
<p>The top level component — called <strong>Provider </strong>— sets some values on the context. The child components — called <strong>Consumers</strong> — will grab those values from the context.</p>
<p>The current context syntax is a bit strange, but the upcoming version is implementing this exact pattern.</p>
<h4 id="high-order-components">High Order Components</h4>
<p>Let’s talk about reusability. Together with dropping the old <code>React.createElement()</code> factory, the React team also dropped the support for <a href="https://reactjs.org/blog/2016/07/13/mixins-considered-harmful.html" rel="noopener">mixins</a>. They were, at some point, the standard way of composing components through plain object composition.</p>
<p><a href="https://reactjs.org/docs/higher-order-components.html" rel="noopener">High Order Components</a> — HOCs from now on — went out to fill the need for reusing behavior across multiple components.</p>
<p>A HOC is a function that takes an input component and returns an <strong>enhanced/modified </strong>version of that component. You will find HOCs under different names, but I like to think of them as <strong>decorators</strong>.</p>
<p>If you are using Redux, you will recognize that the <code>connect</code> function is a HOC — takes your component and adds a bunch of <em>props</em> to it.</p>
<p>Let’s implement a basic HOC that can add props to existing components.</p><pre><code class="language-javascript">const withProps = ( newProps ) =&gt; ( WrappedComponent ) =&gt; {
const ModifiedComponent = ( ownProps ) =&gt; ( // the modified version of the component
&lt;WrappedComponent { ...ownProps } { ...newProps } /&gt; // original props + new props
);
return ModifiedComponent;
};
const Details = ( { name, title, language } ) =&gt; (
&lt;div&gt;
&lt;h1&gt;{ title }&lt;/h1&gt;
&lt;p&gt;{ name } works with { language }&lt;/p&gt;
&lt;/div&gt;
);
const newProps = { name: "Alex" }; // this is added by the hoc
const ModifiedDetails = withProps( newProps )( Details ); // hoc is curried for readability
const App = () =&gt; (
&lt;ModifiedDetails
title="I'm here to stay"
language="JavaScript"
/&gt;
);</code></pre>
<p>If you like functional programming, you will love working with high order components. <a href="https://github.com/acdlite/recompose" rel="noopener">Recompose</a> is a great package that gives you all these nice utility HOCs like <code><strong>withPro</strong>ps</code>, <code><strong>withContext</strong></code>, <code><strong>lifecycle</strong></code>, and so on.</p>
<p>Let’s have a look at a very useful example of <strong>reusing functionality</strong>.</p><pre><code class="language-javascript">function withAuthentication(WrappedComponent) {
const ModifiedComponent = (props) =&gt; {
if (!props.isAuthenticated) {
return &lt;Redirect to="/login" /&gt;;
}
return (&lt;WrappedComponent { ...props } /&gt;);
};
const mapStateToProps = (state) =&gt; ({
isAuthenticated: state.session.isAuthenticated
});
return connect(mapStateToProps)(ModifiedComponent);
}</code></pre>
<p>You can use <code>withAuthentication</code> when you want to render sensitive content inside a route. That content will only be available to logged-in users.</p>
<p>This is a <a href="https://en.wikipedia.org/wiki/Cross-cutting_concern" rel="noopener">cross-cutting concern</a> of your application implemented in a single place and reusable across the entire app.</p>
<p>However, there is a downside to HOCs. Each HOC will introduce an additional React Component in your DOM/vDOM structure. This can lead to potential performance problems as your application scales.</p>
<p>Some additional problems with HOCs are summarized in <a href="https://cdb.reacttraining.com/use-a-render-prop-50de598f11ce" rel="noopener">this great article</a> by <a href="https://twitter.com/mjackson" rel="noopener">Michael Jackson</a>. He advocates replacing HOCs with the pattern we’ll be talking about next.</p>
<h4 id="render-props">Render Props</h4>
<p>While it is true that <strong>render props</strong> and<strong> HOCs</strong> are interchangeable, I don’t favor one over another. Both patterns are used to improve reusability and code clarity.</p>
<p>The idea is that you <strong>yield</strong> the control of your render function to another component that then passes you back the control through a function prop.</p>
<p>Some people prefer to use a <strong>dynamic prop</strong> for this, some just use <code><strong>this.props.children</strong></code>.</p>
<p>I know, it’s still very confusing, but let’s see a simple example.</p><pre><code class="language-javascript">class ScrollPosition extends React.Component {
constructor( ) {
super( );
this.state = { position: 0 };
this.updatePosition = this.updatePosition.bind(this);
}
componentDidMount( ) {
window.addEventListener( "scroll", this.updatePosition );
}
updatePosition( ) {
this.setState( { position: window.pageYOffset } )
}
render( ) {
return this.props.children( this.state.position )
}
}
const App = () =&gt; (
&lt;div&gt;
&lt;ScrollPosition&gt;
{ ( position ) =&gt; (
&lt;div&gt;
&lt;h1&gt;Hello World&lt;/h1&gt;
&lt;p&gt;You are at { position }&lt;/p&gt;
&lt;/div&gt;
) }
&lt;/ScrollPosition&gt;
&lt;/div&gt;
);</code></pre>
<p>Here we are using <code>children</code> as the render prop. Inside the <code><em>&lt;ScrollPositi</em></code>on&gt; component we will send a function which receive<code>s the po</code>sition as a parameter.</p>
<p>Render props can be used in situations where you need some reusable logic <strong>inside</strong> the component and you don’t want to wrap your component in a HOC.</p>
<p><a href="https://github.com/chenglou/react-motion" rel="noopener">React-Motion</a> is one of the libraries that offer some great examples of using render props.</p>
<p>Finally, let’s look at how we can integrate <strong>async</strong> flows with render props. Here’s a nice example of creating a reusable<code> Fetch</code> component.</p>
<p>I’m sharing a sandbox link so you can play with it and see the results.</p>
<p>You can have <strong>multiple</strong> render props for the same component. With this pattern, you have endless possibilities of composing and reusing functionality.</p>
<p>What patterns do you use? Which of them would fit in this article? Drop me a message bellow or write your thoughts on <a href="https://twitter.com/alexnmoldovan" rel="noopener">Twitter</a>.</p>
<p>If you found this article useful, help me share it with the community!</p>
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
