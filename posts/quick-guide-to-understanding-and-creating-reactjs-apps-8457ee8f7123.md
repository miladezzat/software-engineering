---
card: "https://cdn-media-1.freecodecamp.org/images/0*XGhE7haLzzQeM1xo"
tags: [React]
description: "NodeJS is needed since the Libraries Required for React are d"
author: "Milad E. Fahmy"
title: "A quick guide to help you understand and create ReactJS apps"
created: "2021-08-16T11:38:43+02:00"
modified: "2021-08-16T11:38:43+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-react tag-web-development tag-front-end-development tag-javascript tag-technology ">
<header class="post-full-header">
<h1 class="post-full-title">A quick guide to help you understand and create ReactJS apps</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/0*XGhE7haLzzQeM1xo 300w,
https://cdn-media-1.freecodecamp.org/images/0*XGhE7haLzzQeM1xo 600w,
https://cdn-media-1.freecodecamp.org/images/0*XGhE7haLzzQeM1xo 1000w,
https://cdn-media-1.freecodecamp.org/images/0*XGhE7haLzzQeM1xo 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/0*XGhE7haLzzQeM1xo" alt="A quick guide to help you understand and create ReactJS apps">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<h3 id="this-post-is-divided-into-2-parts">This Post is divided into 2 parts</h3><ol><li>The First Part demonstrates how to create a simple React app using ‘create-react-app’ CLI and explains the project structure.</li><li>The Second Part explains an existing code that I have posted in Github. This code demonstrates the use of components, communication between components, making HTTP calls and React Bootstrap (bootstrap which is written for React).</li></ol><h3 id="part-1">Part 1</h3><h4 id="install-nodejs-if-not-already-present">Install NodeJS if not already present</h4><p>NodeJS is needed since the Libraries Required for React are downloaded using node package manager ( npm ). Refer to <a href="https://nodejs.org/en/" rel="noopener">https://nodejs.org/en/</a> to install NodeJS.</p><h4 id="install-create-react-app-node-package">Install create-react-app Node Package</h4><p><strong>create-react-app</strong> node package helps to set up a React project. Install create-react-app node package globally using the following command.</p><pre><code class="language-bash">npm install -g create-react-app</code></pre><h4 id="create-the-project">Create The Project</h4><p>The project can be created using <strong>create-react-app. </strong>Use the following command to create the project.</p><pre><code class="language-bash">npx create-react-app first-react-app</code></pre><p><strong>first-react-app</strong> is the name of the application. The above command creates a folder called <strong>first-react-app</strong> which is the project folder. In order to test if everything has been set up properly, go into the project folder and start the application using the following command.</p><pre><code class="language-bash">cd first-react-app
export default class FirstComponent extends Component {
constructor(props) {
super(props)
}
render() {
const element = (&lt;div&gt;Text from Element&lt;/div&gt;)
return (&lt;div className="comptext"&gt;
&lt;h3&gt;First Component&lt;/h3&gt;
{this.props.displaytext}
{element}
&lt;/div&gt;)
}
}</code></pre><ol><li>The Component name is <strong>FirstComponent</strong> which is denoted by the file name as well as in the statement <code>export default class FirstComponent extends Component</code></li><li>The <strong>props</strong> attribute in the constructor will contain all the parameters which are passed as input to this component.</li><li><strong>render():</strong> The return value of this function is rendered ( displayed ) on the screen. Whenever the render() function is called the Screen is rerendered. This is generally done automatically by the application. The code which looks very similar to html in this function is nothing but <strong>JSX.</strong></li></ol><h4 id="jsx">JSX</h4><p><strong>JSX </strong>looks very similar to HTML but has the full power of javascript. Here I will Explain the JSX code and what it is trying to do.</p><pre><code class="language-javascript">render() {
const element = (&lt;div&gt;Text from Element&lt;/div&gt;)
return (&lt;div className="comptext"&gt;
&lt;h3&gt;First Component&lt;/h3&gt;
{this.props.displaytext}
{element}
&lt;/div&gt;)
}</code></pre><p></p><p>The first line <code>const element = (&lt;div&gt;Text from Element&lt;/div&gt;)</code> Creates a div element and assigns it to a constant called element. This peculiar Syntax that you see is <strong>noth</strong>ing but JSX.</p><p>Inside the Return statement, you see the following code syntax.</p><pre><code class="language-html">&lt;div className="comptext"&gt;
&lt;h3&gt;First Component&lt;/h3&gt;
{this.props.displaytext}
{element}
&lt;/div&gt;</code></pre><p>Here <strong>className</strong> is used to point to a CSS class. <code>&lt;h3&gt;First Component&lt;/h3&gt;</code> is just normal html Syntax. <code>{this.props.displaytext}</code> is used to access an attribute called as displaytext from props ( so displaytext is passed as an input whenever this component is called ). Here <strong>displaytext </strong>is just a custom name that I have Given. <code>{element}</code> is the constant which was created, which in turn contains the div element.</p><h4 id="using-the-component">Using the Component</h4><p><strong>FirstComponent</strong> has been created but is not being used anywhere yet. Let's add <strong>FirstComponent</strong> to <strong>App</strong> Component. Here is the modified code for <strong>App.js</strong></p><pre><code class="language-javascript">import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FirstComponent from './FirstComponent'
class App extends Component {
render() {
return (
&lt;div className="App"&gt;
&lt;header className="App-header"&gt;
&lt;img src={logo} className="App-logo" alt="logo" /&gt;
&lt;h1 className="App-title"&gt;Welcome to React&lt;/h1&gt;
&lt;/header&gt;
&lt;p className="App-intro"&gt;
To get started, edit &lt;code&gt;src/App.js&lt;/code&gt; and save to reload.
&lt;/p&gt;
&lt;FirstComponent displaytext="First Component Data"/&gt;
&lt;/div&gt;
);
}
}
super(props)
this.state = {
selectedCustomer: 1
}
}</code></pre><p><strong>props</strong> were already explained. But here you also see <strong>this.state</strong>. Whenever state changes, the component is rerendered. Here <strong>state</strong> has one parameter called <strong>selectedCustomer</strong> which is to keep track of which customer is selected. If <strong>selectedCustomer</strong> changes then the <strong>component and its child components </strong>are rerendered. The Constructor is used only to set <strong>props</strong> and <strong>state.</strong> Also, <strong>props</strong> should <strong>never be edited</strong> inside a component.</p><p>The next thing you notice is the following code.</p><pre><code class="language-javascript">componentDidMount() {
this.getCustomerData();
}</code></pre><p><strong>componentDidMount()</strong> is a function which is called as soon the component is rendered. So this can be used to set some initial values as well as load data. Here it is calling a function called as <strong>getCustomerData()</strong></p><p>The next piece of code that you see is</p><pre><code class="language-javascript">getCustomerData() {
axios.get('assets/samplejson/customerlist.json').then(response =&gt; {
this.setState({customerList: response})
})
};</code></pre><p>This function <strong>getCustomerData()</strong> makes an HTTP call to read the sample json containing the list of customers from <strong>assets/samplejson/customerlist.json.</strong> On successfully getting a response, the state of the system is changed, by assigning the <strong>response</strong> to <strong>customerList.</strong> You may wonder why we never added customerList in the constructor. The reason is you can add parameters dynamically into State at any point in the code. The only requirement is that in the constructor at least an empty state has to be defined.</p><p>Here <strong>axios</strong> library is used to make the HTTP call. I have provided the Documentation for axios in the References section.</p><p>The next function is the <strong>render()</strong> function which returns what elements have to be rendered on screen. The main points of focus in the render function are</p><pre><code class="language-html">&lt;Button bsStyle="info" onClick={() =&gt; this.setState({selectedCustomer: customer.id})}&gt;
Click to View Details
&lt;/Button&gt;</code></pre><p>Every customer in the list has a button called as <strong>Click to View Details</strong>. The above code snippet tells that whenever the button is clicked, then change the state of <strong>selectedCustomer</strong> to the selected customers' id. Since the state changes here, the component and its child component will be rerendered.</p><p>The other code snippet which is important is</p><pre><code class="language-html">&lt;CustomerDetails val={this.state.selectedCustomer}/&gt;</code></pre><p>This snippet tells that <strong>CustomerDetails</strong> is a child component of <strong>Customers</strong> component and also passes the <strong>selectedCustomer</strong> id as an input to <strong>CustomerDetails</strong> component</p><h4 id="customerdetails-component">CustomerDetails Component</h4><p>This component displays the details of the selected Customer. Some important code snippets from this component will be explained here:</p><pre><code class="language-javascript">componentDidUpdate(prevProps) {
//get Customer Details only if props has changed
//(props is the input)
if (this.props.val !== prevProps.val) {
this.getCustomerDetails(this.props.val)
}
}</code></pre><p><strong>componentDidUpdate()</strong> function is called whenever the component is rerendered. Here we are calling <strong>getCustomerDetails()</strong> Function if the input to this component has changed when the component rerendered. The input passed to <strong>getCustomerDetails()</strong> function is <strong>this.props.val</strong>. <strong>this.props.val</strong> in turn, gets its value from <strong>Customers</strong> Component( selectedCustomer was passed as an input to this ). To know if the input has changed, the code snippet used is <code>this.props.val !== prevProps.val</code></p><pre><code class="language-javascript">getCustomerDetails(id) {
axios.get('assets/samplejson/customer' + id + '.json').then(response =&gt; {
this.setState({customerDetails: response})
})
};</code></pre><p><strong>getCustomerDetails()</strong> function makes an HTTP call to get the sample json which contains the customer details. The <strong>id</strong> parameter is used to know which customers details are required. <strong>id</strong> is nothing but <strong>this.props.val.</strong> When the response is successfully received the state of this component is changed by assigning <strong>response</strong> to <strong>customerDetails</strong>.</p><p>The <strong>render()</strong> function for this component is pretty straightforward and simple so will not be covering that here</p><h3 id="references">References</h3><p><strong>create-react-app:</strong> Refer to <a href="https://github.com/facebook/create-react-app" rel="noopener">https://github.com/facebook/create-react-app</a> to learn what all can be done using create-react-app</p><p><strong>ReactJS:</strong> Refer to <a href="https://reactjs.org/" rel="noopener">https://reactjs.org/</a> to understand the concepts of ReactJS. The documentation is very good.</p><p><strong>React Bootstrap:</strong> Refer to <a href="https://react-bootstrap.github.io/getting-started/introduction/" rel="noopener">https://react-bootstrap.github.io/getting-started/introduction/</a> to understand how to use React Bootstrap</p><p><strong>axios:</strong> Refer to <a href="https://www.npmjs.com/package/axios" rel="noopener">https://www.npmjs.com/package/axios</a> to know more about how to use axios library to make HTTP requests</p><h3 id="congrats-again">Congrats Again ?</h3><p>Now you know how to use components, how to communicate from a parent to a child component and also a little about rendering</p><p>The basic concepts have been covered in this post and hope this is helpful</p><h3 id="about-the-author">About the author</h3><p>I love technology and follow the advancements in technology. I also like helping others with any knowledge I have in the technology space.</p><p>Feel free to connect with me on my LinkdIn account <a href="https://www.linkedin.com/in/aditya1811/" rel="noopener">https://www.linkedin.com/in/aditya1811/</a></p><p>You can also follow me on twitter <a href="https://twitter.com/adityasridhar18" rel="noopener">https://twitter.com/adityasridhar18</a></p><p>My Website: <a href="https://adityasridhar.com/" rel="noopener">https://adityasridhar.com/</a></p><h3 id="other-relevant-posts-by-me">Other Relevant Posts by Me</h3><p><a href="https://medium.freecodecamp.org/quick-guide-to-understanding-and-creating-angular-6-apps-2f491dffca1c" rel="noopener">A Quick Guide to Help you Understand and Create Angular 6 Apps</a></p><p><a href="https://medium.freecodecamp.org/a-quick-introduction-to-vue-js-72937ee8880d" rel="noopener">A quick introduction to Vue.js</a></p>
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
