---
card: "https://cdn-media-1.freecodecamp.org/images/1*_drMYY_IEgboMS4RhvC-lQ.png"
tags: [JavaScript]
description: "In this article, we are going to explore the lifecycle method"
author: "Milad E. Fahmy"
title: "How to understand a component’s lifecycle methods in ReactJS"
created: "2021-08-16T10:07:29+02:00"
modified: "2021-08-16T10:07:29+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-reactjs tag-lifecycle-methods tag-web-development tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">How to understand a component’s lifecycle methods in ReactJS</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*_drMYY_IEgboMS4RhvC-lQ.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*_drMYY_IEgboMS4RhvC-lQ.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*_drMYY_IEgboMS4RhvC-lQ.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*_drMYY_IEgboMS4RhvC-lQ.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*_drMYY_IEgboMS4RhvC-lQ.png" alt="How to understand a component’s lifecycle methods in ReactJS">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>In this article, we are going to explore the lifecycle methods of ReactJS. But, before moving ahead to React’s different lifecycle methods, we should understand what it is.</p><p>As we know, everything in this world follows a cycle (say humans or trees). We are born, grow, and then die. Almost everything follows this cycle in its life, and React components do as well. Components are created (mounted on the DOM), grow by updating, and then die (unmount on DOM). This is referred to as<strong> a component lifecycle.</strong></p><p>There are different lifecycle methods that React provides at different phases of a component’s life. React automatically calls the responsible method according to the phase in which the component is. These methods give us better control over our component and we can manipulate them using these methods.</p><p>At present, we know what lifecycle methods are and why they are important. So what are these different methods? Let’s have a look into them.</p><h3 id="lifecycle-methods">Lifecycle Methods</h3><p>A component’s lifecycle is broadly classified into four parts:</p><ul><li><strong>initialization</strong></li><li><strong>mounting</strong></li><li><strong>updating, and</strong></li><li><strong>unmounting</strong>.</li></ul><p>Let’s discuss the different lifecycle methods that are available at these different phases (i.e., initialization, mounting, updating &amp; unmounting).</p><h4 id="initialization"><strong>Initialization</strong></h4><p>This is the phase in which the component is going to start its journey by setting up the state (see below) and the props. This is usually done inside the constructor method (see below to understand the initialization phase better).</p><pre><code>class Initialize extends React.Component {
constructor(props)
{
// Calling the constructor of
// Parent Class React.Component
super(props);
// initialization process
this.state = {
date : new Date(),
clickedStatus: false
};
}</code></pre><h4 id="mounting"><strong>Mounting</strong></h4><p>The name is self-explanatory. Mounting is the phase in which our React component mounts on the DOM (i.e., is created and inserted into the DOM).</p><p>This phase comes onto the scene after the initialization phase is completed. In this phase, our component renders the first time. The methods that are available in this phase are:</p><p><strong>1. componentWillMount()</strong></p><p>This method is called just before a component mounts on the DOM or the render method is called. After this method, the component gets mounted.</p><p>Note: You should not make API calls or any data changes using this.setstate in this method because it is called before the render method. So, nothing can be done with the DOM (i.e. updating the data with API response) as it has not been mounted. Hence, we can’t update the state with the API response.</p><p><strong>2. componentDidMount()</strong></p><p>This method is called after the component gets mounted on the DOM. Like componentWillMount, it is called once in a lifecycle. Before the execution of this method, the render method is called (i.e., we can access the DOM). We can make API calls and update the state with the API response.</p><p>Have a look to understand these mounting methods:</p><pre><code>class LifeCycle extends React.Component {
componentWillMount() {
console.log('Component will mount!')
}
componentDidMount() {
console.log('Component did mount!')
this.getList();
}
getList=()=&gt;{
/*** method to make api call***
}
render() {
return (
&lt;div&gt;
&lt;h3&gt;Hello mounting methods!&lt;/h3&gt;
&lt;/div&gt;
);
}
}</code></pre><h4 id="updating"><strong>Updating</strong></h4><p>This is the third phase through which our component passes. After the mounting phase where the component has been created, the update phase comes into the scene. This is where component’s state changes and hence, re-rendering takes place.</p><p>In this phase, the data of the component (state &amp; props) updates in response to user events like clicking, typing and so on. This results in the re-rendering of the component. The methods that are available in this phase are:</p><ol><li><strong>shouldComponentUpdate()</strong></li></ol><p>This method determines whether the component should be updated or not. By default, it returns true. But at some point, if you want to re-render the component on some condition, then shouldComponentUpdate method is the right place.</p><p>Suppose, for example, you want to only re-render your component when there is a change in prop — then utilize the power of this method. It receives arguments like nextProps and nextState which help us decide whether to re-render by doing a comparison with the current prop value.</p><p><strong>2. componentWillUpdate()</strong></p><p>Like other methods, its name is also self-explanatory. It is called before the re-rendering of the component takes place. It is called once after the ‘<strong>shouldComponentUpdate</strong>’ method. If you want to perform some calculation before re-rendering of the component and after updating the state and prop, then this is the best place to do it. Like the ‘shouldComponentUpdate’ method, it also receives arguments like nextProps and nextState.</p><p><strong>3. ComponentDidUpdate()</strong></p><p>This method is called just after the re-rendering of the component. After the new (updated) component gets updated on the DOM, the ‘<strong>componentDidUpdate</strong>’ method is executed. This method receives arguments like prevProps and prevState.</p><p>Have a look to understand the updating methods better:</p><pre><code>class LifeCycle extends React.Component {
constructor(props)
{
super(props);
this.state = {
date : new Date(),
clickedStatus: false,
list:[]
};
}
componentWillMount() {
console.log('Component will mount!')
}
componentDidMount() {
console.log('Component did mount!')
this.getList();
}
getList=()=&gt;{
/*** method to make api call***
fetch('https://api.mydomain.com')
.then(response =&gt; response.json())
.then(data =&gt; this.setState({ list:data }));
}
shouldComponentUpdate(nextProps, nextState){
return this.state.list!==nextState.list
}
componentWillUpdate(nextProps, nextState) {
console.log('Component will update!');
}
componentDidUpdate(prevProps, prevState) {
console.log('Component did update!')
}
render() {
return (
&lt;div&gt;
&lt;h3&gt;Hello Mounting Lifecycle Methods!&lt;/h3&gt;
&lt;/div&gt;
);
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
