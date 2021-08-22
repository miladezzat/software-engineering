---
card: "/images/default.jpg"
tags: [Reactjs]
description: If you want to learn the basics of React in the time it takes
author: "Milad E. Fahmy"
title: "Learn React Basics in 10 Minutes"
created: "2021-08-15T19:30:24+02:00"
modified: "2021-08-15T19:30:24+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-reactjs tag-javascript tag-components tag-state-management ">
<header class="post-full-header">
<h1 class="post-full-title">Learn React Basics in 10 Minutes</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/03/intro-to-react.jpg 300w,
/news/content/images/size/w600/2020/03/intro-to-react.jpg 600w,
/news/content/images/size/w1000/2020/03/intro-to-react.jpg 1000w,
/news/content/images/size/w2000/2020/03/intro-to-react.jpg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/03/intro-to-react.jpg" alt="Learn React Basics in 10 Minutes">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>If you want to learn the basics of React in the time it takes you to drink a cup of coffee, this post is for you.</p>
<p>This article aims to provide a beginner-friendly introduction to React, what it is, and why we need it. It assumes you have some understanding of <a href="https://1000mileworld.com/learn-javascript-6-golden-knowledge-nuggets-for-beginners/">basic JavaScript</a>.</p>
<p>We will discuss some of its basic concepts and go over what you can build with React.</p>
<p>We will also discuss some code, but the overall goal is to gain an intuitive understanding of what React is all about so that you get comfortable with the basics.</p>
<h2>What is React?</h2>
<p>Developed by Facebook in 2011, React has quickly become one of the most widely used JavaScript libraries. According to <a href="https://research.hackerrank.com/developer-skills/2018/">HackerRank</a>, 30% of employers look for developers who know React but only about half of the applicants actually have the required knowledge.</p>
<p>Clearly, React is in high demand in the job market.</p>
<p>So what exactly is React?</p>
<p>React is an efficient and flexible JavaScript library for building user interfaces (and React itself is written using JavaScript). It breaks down complex UIs into small, isolated code called “components”. By using these components, React only concerns itself with what you see on the front page of a website.</p>
<figcaption>A calculator app that can be split into React components.</figcaption>
</figure>
<p>Components are independent and reusable. They can either be JavaScript functions or classes. Either way, they both return a piece of code that represents part of a web page.</p>
<p>Here’s an example of a function component that renders a <code>&lt;h2&gt;</code> element onto the page:</p>
return &lt;h2&gt;Hi, my name is Joe!&lt;/h2&gt;;
}</code></pre>
<p>And here is a class component doing the same rendering:</p>
render() {
return &lt;h2&gt;Hi again from Joe!&lt;/h2&gt;;
}
}</code></pre>
<p>Using a class component takes slightly more effort in that you have to extend React.Component (part of the React library) while a function component is mostly plain JavaScript. However, class components provide certain critical functionalities that function components lack (see <a href="https://medium.com/@Zwenza/functional-vs-class-components-in-react-231e3fbd7108">Functional vs Class-Components in React</a>).</p>
<p>You may have noticed that there is a strange mixture of HTML and JavaScript inside each component. React actually uses a language called JSX that allows HTML to be mixed with JavaScript.</p>
<p>Not only can you use JSX to return pre-defined HTML elements, you can also create your own. For example, instead of rendering <code>&lt;h2&gt;</code> elements directly in the class component, you can render the functional component which returns the same thing:</p>
render() {
return &lt;Name /&gt;;
}
}</code></pre>
<p>Note the self-closing ‘/&gt;’ of the component.</p>
<p>The power of React starts to become more evident as you can imagine rendering many simple components to form a more complex one.</p>
<p>To build a page, we can call these components in a certain order, use the results they return, and display them to the user.</p>
<h2>Why Choose React Over Vanilla JavaScript?</h2>
<p>Being able to break down complex UIs through the use of components gives React an edge over vanilla JavaScript (plain JS without any external libraries or frameworks). But what else can React do that places it in such high demand among employers?</p>
<p>Let’s take a look at the differences between how React and vanilla JS handle things.</p>
<p>In the previous section, we discussed how React uses components to render UIs. We did not delve into what was happening on the HTML side of things. It may be surprising to learn that the HTML code that pairs with React is really simple:</p>
<p>It is usually just a <code>&lt;div&gt;</code> element with an id that serves as a container for a React app. When React renders its components, it will look for this id to render to. The page is empty before this rendering.</p>
<p>Vanilla JS, on the other hand, defines the initial UI right in the HTML.</p>
<p>In addition, vanilla JS takes care of functionality while HTML takes care of displaying content (markup).</p>
<p>In the earlier days of the web, the separation of functionality and markup sounded logical as apps were simpler. However, as complexity grew so did the headaches of maintaining large pieces of JS code.</p>
<p>JS code that updates a piece of HTML can be spread across several files, and developers may have a hard time keeping track of where the code came from. They have to keep things straight in their heads of all the interactions between the code that resides in different files.</p>
<p>React sorts the code into components, where each component maintains all the code needed to both display and update the UI.</p>
<p>Updating the UI requires updating the DOM, or document object model (see <a href="https://1000mileworld.com/dom-manipulation-using-javascript/">DOM Manipulation Using JavaScript</a>). This is where React truly shines.</p>
<p>If you want to access the DOM in vanilla JS, you have to first find it before it can be used. React stores the data in regular JS variables and maintains its own <em>virtual </em>DOM.</p>
<p>If you want to then update the DOM in vanilla JS, you have to locate the appropriate node and then manually append or remove elements. React automatically updates the UI based on the application state, which we will discuss in more detail in the next section.</p>
<p>So the primary reason why we may want to use React over vanilla JS can be summarized in one word: simplicity.</p>
<p>With vanilla JS, it’s easy to get lost in a maze of DOM searches and updates. React forces you to break down your app into components which produces more maintainable code.</p>
<p>Thus, for complex apps you will definitely want to learn React.</p>
<h2>Basic React Concepts</h2>
<p>We have already discussed how React uses components to break down complex UIs and JSX to render those components.</p>
<p>In this section we will talk about some more fundamental concepts of React.</p>
<h3>State</h3>
<p>As mentioned previously, React updates the UI based on the application state. This state is actually stored as a property of a React class component:</p>
state = {
value: 0
};
}</code></pre>
<p>Suppose we have a counter and 2 buttons that either increment or decrement. The value of the counter is rendered onto the page through JSX.</p>
<p>The display counter value is based on the state and we change the state by clicking one of the buttons. Vanilla JS treats a button click as an event and so does React. When such an event occurs, we will call functions that either increment or decrement the counter based on the button clicked. These functions have the code that changes the component state.</p>
<p>Here’s an example of such a counter:</p>
state = {
value: 0
};
handleIncrement= () =&gt; {
this.setState(state =&gt; {
value: state.value + 1
});
};
handleDecrement= () =&gt; {
this.setState(state =&gt; {
value: state.value - 1
});
};
render() {
return (
&lt;div&gt;
&lt;h2&gt;{this.state.value}&lt;/h2&gt;
&lt;button onClick={this.handleDecrement}&gt;Decrement&lt;/button&gt;
&lt;button onClick={this.handleIncrement}&gt;Increment&lt;/button&gt;
&lt;/div&gt;
);
}
};
</code></pre>
<p>We updated the state by calling <code>setState</code> in each of the functions handling a button click. The counter displayed on the page will update in real time. Thus, React gets its name because it <em>reacts</em> to state changes.</p>
<p>In short, React automatically monitors every component state for changes and updates the DOM appropriately.</p>
<h3>Props</h3>
<p>We can use props (short for "properties") to allow components to talk to each other.</p>
<p>Suppose the counter in our previous example represents the quantity of a product a customer wishes to purchase. The store wants to place a limit of 2 products purchased per customer. At checkout, we want to display an appropriate message if the customer tries to purchase more than 2.</p>
<p>Here’s how we may do it with props:</p>
let message;
if(props.number&gt;2){
message = ‘You’re limited to purchasing 2 max!’;
}else{
message = ‘All’s good.’;
}
return(
&lt;p&gt;message&lt;/p&gt;
);
};
class Timer extends React.Component {
state = {
quantity: 0
}
//...code for handling button clicking, updating state, etc.
render(){
return(
&lt;Display number = {this.state.quantity} /&gt;
//...code for other components
);
}
};</code></pre>
<p><br>We create a functional component called <code>Display</code> and pass props as a parameter. When we render this component, we pass to it number as an attribute set to the quantity of the product a customer wants to purchase. This is similar to setting an attribute of an HTML tag. We call this value with <code>props.number</code> in <code>Display</code> to determine what message to return.</p>
<h3>Component Lifecycle</h3>
<p>As React updates the DOM based on component states, special methods called lifecycle methods exist to provide opportunities to perform actions at specific points in the lifecycle of a component.</p>
<p>They allow you to catch components at a certain point in time to call appropriate functions. These points of time can be before components are rendered, after they are updated, etc. You may want to explore a <a href="/news/how-to-understand-a-components-lifecycle-methods-in-reactjs-e1a609840630/">component’s lifecycle methods</a>.</p>
<p>To see lifecycle methods in action, you can check out this <a href="https://codepen.io/1000mileworld/full/qBEwRvK">Pomodoro Clock</a> I made.</p>
<p>The clock timer is initially set to the session length. When the session timer counts down to zero, the timer needs to switch to the break length and start counting down from there.</p>
<p>Since the timer is a component, I used the lifecycle method <code>componentDidUpdate</code> within my main class component to handle any changes with <code>handleChange()</code>:</p>
this.handleChange();
}</code></pre>
<p>You can think of lifecycle methods as adding event listeners in vanilla JS to a React component.</p>
<h2>What Can You Build with React?</h2>
<p>So now you have a basic understanding of React, what can you build with it?</p>
<p>We already mentioned in the beginning of this post that Facebook developed React in 2011, so naturally the Facebook platform is based on React. Other famous apps that either completely or partially use React include Instagram, Netflix, and Whatsapp.</p>
<p>But as beginners of React, we are not looking to immediately build the next Facebook so here’s a list of <a href="https://medium.com/@dtkatz/10-react-starter-project-ideas-to-get-you-coding-5b35782e1831">10 React Starter Project Ideas to Get You Coding</a>.</p>
<p>If you want to learn more about web development and check out some examples of beginner-friendly React projects, visit my blog at <a href="https://www.1000mileworld.com/">1000 Mile World</a>.</p>
<p>Thanks for reading and happy coding!</p>
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
