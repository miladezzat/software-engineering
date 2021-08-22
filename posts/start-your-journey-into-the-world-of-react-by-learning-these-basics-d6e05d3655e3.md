---
card: "https://cdn-media-1.freecodecamp.org/images/1*PPCTtJ-CMUajEz20YS7d1g.jpeg"
tags: [JavaScript]
description: "Today I am going to highlight the basics of the world of Reac"
author: "Milad E. Fahmy"
title: "Learn React.js Basics - For Beginners"
created: "2021-08-16T10:07:45+02:00"
modified: "2021-08-16T10:07:45+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-reactjs tag-web-development tag-tech tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">Learn React.js Basics - For Beginners</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*PPCTtJ-CMUajEz20YS7d1g.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*PPCTtJ-CMUajEz20YS7d1g.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*PPCTtJ-CMUajEz20YS7d1g.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*PPCTtJ-CMUajEz20YS7d1g.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*PPCTtJ-CMUajEz20YS7d1g.jpeg" alt="Learn React.js Basics - For Beginners">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
render() {
return (
&lt;span className='customSize'&gt;My First Component&lt;/span&gt;
);
}
}</code></pre><pre><code>class FirstComponent extends React.Component {
render() {
return (
React.createElement('span',{className: 'customSize'},                            'My First Component')
);
}
}</code></pre><p>In the first example, the render function looks like it’s returning HTML code but this is JSX. The <strong>first example is a JSX version of the second one</strong>. JSX is a JavaScript extension that gives your JS code an HTML look.</p><p>If you look at the second example, React.createElement is used for creating a react element to represent the react component. The second argument can be null or empty if no props or attributes are needed for the element. The third argument defines what should be inside of it (like any other React element, say &lt;image&gt;, with attribute ‘src’).</p><p>If you look at the above two blocks of code, you will find the first one more familiar as it gives an HTML feel. JSX also increases code readability. Let’s have a look at another example, without JSX and with JSX to get a feel for the code readability.</p><p><strong>ReactJS without JSX:</strong></p><pre><code>React.createElement("div", null,
React.createElement("img", {src: "image.jpg", alt: "Random photo"}),
React.createElement("h3", null, "Hello React"));</code></pre><p><strong>ReactJS with JSX version:</strong></p><pre><code>&lt;div&gt;
&lt;img src="image.jpg" alt="Random photo" /&gt;
&lt;h3&amp;gt;Hello React&lt;/h3&gt;
&lt;/div&gt;</code></pre><p>By looking at the above example, you can understand what I was saying regarding code readability. How easy it is to read code with JSX, right? I think this is enough on JSX and I hope now you are able to better understand the power of JSX in the React world.</p><p><strong>Note — </strong><em>Browsers are not able to read JSX. So, we have to transpile it to JavaScript using JSX transformers (say babel) so that the browser can understand.</em></p><p>Now we know what JSX is. But I would like you to go to the previous picture where I wrote that React is all about components. It is component driven. As components are the building blocks of React, let’s explore them.</p><h3 id="reactjs-heart-components">ReactJS Heart - Components</h3><p>Well, you might have come across the below code of how to create components during your research on React:</p><pre><code>class MyStatefulComponent extends React.Component {
state = {
title: ''
}
componentDidMount() {
console.log('Component mounted')
}
render() {
return &lt;div&gt;{this.props.name}&lt;/div&gt;;
}
class MyContainerComponent extends React.Component {
state={
text : 'Submit'
}
render() {
return (
&lt;ButtonView btnText={this.state.text}/&gt;
)
}
&lt;div&gt;
&lt;button className="btn btn-info btn-lg"&gt;{btnText}&lt;/button&gt;              &lt;/div&gt;
)</code></pre><figcaption>(button.presentation.js file)</figcaption></figure><p>Like the above way (using props — ‘btnText’), you can separate the logical part from the presentational part. The other feature of props is that they are read only, i.e. they are immutable. They are not going to modify inside the component in which they are passed. The data flow is also unidirectional — which gives us one way data binding (unlike Angular).</p><p>But, there might be cases where we want to change the data (like in some event by the user and so on). Hence, for this case, ‘State’ comes into the React market. Let’s dive into it.</p><h3 id="state">State</h3><p>As I told you, props are immutable whereas state is for mutable data — that is data that will change in response to certain events. So, if you want to change your data value, then store it in the state. State are objects that store your component’s data. To give a better picture of how state is defined and how to use it, here is an example:</p><pre><code>class LoginContainer extends React.Component {
constructor(props) {
super(props);
this.state = {
userName: "",
};
}
onFilluserName = event =&gt; {
this.setState({
userName: event.target.value,
});
}
render() {
return (
&lt;div&gt;
&lt;input value={this.state.userName} onChange=          {this.onFilluserName}
&lt;/div&gt;
);
}
}</code></pre><p>You can see from the above example that state represents objects where your component’s data are stored. They are initialized inside a constructor. You can access the state using ‘this.state’. This is the way of using state for rendering your data in your component.</p><p>But, I told you that the thing which makes state the heart of your components is its mutable behaviour. Yes, now the point comes as to how we can change the state’s property. The answer is using ‘this.setState’ (please have a look at the above example). Using this.setState, we have changed our data value when the user types.</p><p>In short, props and state are both sources of data, but their usage and behaviour is different. Whenever there is a case where your data may change, use ‘state’ for that — else ‘prop’ is good choice.</p><p>That’s all about the basics of the React world. I hope you have a better understanding of the basics.</p><p>There is a very important part of a class component that I haven’t discussed: lifecycle methods. Yes, lifecycle methods are another critical part of ReactJS, but what they are and why they’re important will be in my next article!</p><p>Thanks for reading.</p>
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
