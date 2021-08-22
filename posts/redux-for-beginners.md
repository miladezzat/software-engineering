---
card: "/images/default.jpg"
tags: [React]
description: Redux can be confusing for beginner React developers to under
author: "Milad E. Fahmy"
title: "Redux for Beginners – Learn Redux Basics with Code Examples"
created: "2021-08-15T19:26:19+02:00"
modified: "2021-08-15T19:26:19+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-react tag-javascript tag-redux ">
<header class="post-full-header">
<h1 class="post-full-title">Redux for Beginners – Learn Redux Basics with Code Examples</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2021/05/pexels-philipp-birmes-830891.jpg 300w,
/news/content/images/size/w600/2021/05/pexels-philipp-birmes-830891.jpg 600w,
/news/content/images/size/w1000/2021/05/pexels-philipp-birmes-830891.jpg 1000w,
/news/content/images/size/w2000/2021/05/pexels-philipp-birmes-830891.jpg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2021/05/pexels-philipp-birmes-830891.jpg" alt="Redux for Beginners – Learn Redux Basics with Code Examples">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Redux can be confusing for beginner React developers to understand. There are a lot of concepts you need to know to use it properly, like reducers, actions, store, pure functions, immutability, and much more.</p>
<p>But every React developer should know the basics of how to work with Redux, since industry projects often use Redux to manage larger projects.</p>
<p>So in this article, we'll explore the basics of Redux and how to use it.</p>
<p>Here's a preview of the app which we'll be building in this article. It's a great project you can add to your portfolio and resume.</p>
<h2 id="what-is-redux">What Is Redux?</h2>
<p>Redux is a state management library that helps you better manage state in your applications.</p>
<p>The Redux library is not specific to React. It's a library that you can use in any other library or framework like Angular, Vue, and even vanilla JavaScript.</p>
<p>But developers mostly use Redux when working with React.</p>
<p>Redux provides a single store that you can use to manage a large amount of data.</p>
<h2 id="how-to-get-started-with-redux">How to Get Started with Redux</h2>
<p>Let's create a new React project so we can learn Redux basics.</p>
<p>Execute the following command in the terminal/command prompt to create a new React project using create-react-app:</p><pre><code class="language-js">npx create-react-app redux-demo
</code></pre>
<blockquote><code>npx</code> in this case allows us to use the <code>create-react-app</code> npm package to create a new React project without installing it on our local machine.</blockquote>
<p>Once you've created the project, delete all the files from the <code>src</code> folder and create a new file <code>index.js</code> inside the <code>src</code> folder.</p>
<p>Now open the terminal again and execute the following command from the <code>redux-demo</code> folder:</p><pre><code class="language-js">npm install redux@4.1.0
</code></pre>
<p>The above command will install the Redux library with version <code>4.1.0</code> to use in your project (which is the latest version at the time of writing this article).</p>
<h2 id="how-to-create-the-redux-store">How to Create the Redux Store</h2>
<p>In Redux, you use the store to manage and track the data that's changing in the application.</p>
<p>To create a store, we need to import the <code>createStore</code> function like this:</p><pre><code class="language-js">import { createStore } from 'redux';
</code></pre>
<p>The <code>createStore</code> function accepts three arguments:</p>
<ul>
<li>the first argument is a function that is normally known as a reducer (required)</li>
<li>the second argument is the initial value of the state (optional)</li>
<li>the third argument is an enhancer where we can pass middleware, if any (optional)</li>
</ul>
<p>Take a look at the below code:</p><pre><code class="language-js">import { createStore } from 'redux';
const reducer = (state, action) =&gt; {
console.log('reducer called');
return state;
};
const store = createStore(reducer, 0);
</code></pre>
<p>Here, we've first defined a reducer function using ES6 arrow function syntax. You can use the normal function instead of the arrow function if you want.</p>
<p>Inside the reducer function, we're logging some text to the console and then returning the value of the state from the function.</p>
<p>Then we pass that reducer function to the <code>createStore</code> function as the first argument and <code>0</code> as the initial value of the state as the second argument.</p>
<p>The <code>createStore</code> function returns a store that we can use to manage the application data.</p>
<p>The reducer function receives state and action as the parameters.</p>
<p>The initial value of the state which we passed as <code>0</code> for the <code>createStore</code> function is automatically passed as the value of the <code>state</code> parameter.</p>
<p>But it's a much more common practice to initialize the state inside the reducer itself rather than passing it as a second argument to the <code>createStore</code> function like this:</p><pre><code class="language-js">import { createStore } from 'redux';
const reducer = (state = 0, action) =&gt; {
console.log('reducer called');
return state;
};
const store = createStore(reducer);
</code></pre>
<p>Here, we're using ES6 default parameter syntax for initializing the state parameter to value <code>0</code>.</p>
<p>Once the store is created, we can use the <code>subscribe</code> method provided by the store to subscribe to the changes in the store as shown below:</p><pre><code class="language-js">store.subscribe(() =&gt; {
console.log('current state', store.getState());
});
</code></pre>
<p>Here, using the <code>subscribe</code> function, we're registering a callback function that will be called once the store is changed.</p>
<p>And inside the callback function, we're calling the <code>store.getState</code> method to get the current value of the state.</p>
<p>Now, open the <code>src/index.js</code> file and add the following contents inside it:</p><pre><code class="language-js">import { createStore } from 'redux';
const reducer = (state = 0, action) =&gt; {
console.log('reducer called');
return state;
};
const store = createStore(reducer);
store.subscribe(() =&gt; {
console.log('current state', store.getState());
});
</code></pre>
<p>Now, if you run the application by executing the <code>npm start</code> command from the terminal and access <a href="http://localhost:3000/">http://localhost:3000/</a>, you will see the <code>reducer called</code> message printed in the console.</p>
<p>This is because the reducer gets called immediately once we pass it to the <code>createStore</code> function.</p>
<h2 id="how-to-change-the-store">How to Change the Store</h2>
<p>Now we're done with creating the store. But the store is not much use to us right now. This is because the store is connected using the reducer function, but we have not added any code inside the reducer to manage the store. So let's do that.</p>
<p><strong>The only way to change the store is by dispatching actions.</strong></p>
<p>An action is an object sent to the store like this:</p><pre><code class="language-js">store.dispatch({
type: 'INCREMENT'
})
</code></pre>
<p>Here, we're calling the dispatch function available on the <code>store</code> to send an action with the type <code>INCREMENT</code> to the store.</p>
<p>The dispatch function takes an object as a parameter which is known as an action.</p>
<p>The action must have a <code>type</code> property as shown above. If you don't pass the <code>type</code> property then you will get an error.</p>
<blockquote>It's a common practice and recommended to specify the <code>type</code> value in uppercase.</blockquote>
<p>The type can be any operation you want to perform, like <code>ADD_USER</code>, <code>DELETE_RECORD</code>, <code>GET_USERS</code> and so on.</p>
<p>If you have multiple words, you can separate them with underscores like this <code>{ type: 'INCREMENT_NUMBER' }</code>.</p>
<p>Now, open the <code>index.js</code> file and replace its contents with the following code:</p><pre><code class="language-js">import { createStore } from 'redux';
const reducer = (state = 0, action) =&gt; {
if (action.type === 'INCREMENT') {
return state + 1;
} else if (action.type === 'DECREMENT') {
return state - 1;
}
return state;
};
const store = createStore(reducer);
store.subscribe(() =&gt; {
console.log('current state', store.getState());
});
store.dispatch({
type: 'INCREMENT'
});
store.dispatch({
type: 'INCREMENT'
});
store.dispatch({
type: 'DECREMENT'
});
</code></pre>
<p>Now, if you run the application by executing the <code>npm start</code> command from the terminal, you will see the following logs printed in the console:</p>
<p>As you can see, for every action dispatched to the store, the store gets changed. So we're able to see the different values of the state in the console.</p>
<p>In the above code, our reducer function looks like this:</p><pre><code class="language-js">const reducer = (state = 0, action) =&gt; {
if (action.type === 'INCREMENT') {
return state + 1;
} else if (action.type === 'DECREMENT') {
return state - 1;
}
return state;
};
</code></pre>
<p>Whenever we call the <code>store.dispatch</code> function, the reducer function will be called. Whatever is returned from the reducer will become the new value of the store.</p>
<p>So the first time we dispatch an action to the store like this:</p><pre><code class="language-js">store.dispatch({
type: 'INCREMENT'
});
</code></pre>
<p>the first if condition inside the reducer function will be executed. It will increment the <code>state</code> value to <code>1</code> which was initially initialized to <code>0</code> using ES6 default parameter syntax. Then it will be returned from the reducer function.</p>
<p><strong>Note that we're using the value of the <code>state</code> to calculate the new value and we're not modifying the original <code>state</code> value like this:</strong></p><pre><code class="language-js">if (action.type === 'INCREMENT') {
state = state + 1;
return state;
}
</code></pre>
<p>So the above code is not correct, because in the reducer we should not modify the original state. Doing so will create issues in your application and so it's not recommended.</p>
<p>And because we've added the <code>store.subscribe</code> function in the <code>index.js</code> file, we get notified about the changing store as we can see the logs in the console.</p>
<p>So when we again call the dispatch with type <code>INCREMENT</code>, the first if condition will be executed again. So it'll add 1 to the previous state value which was 1, and the final state value will become 2.</p>
<p>Then we're dispatching the <code>DECREMENT</code> action to the store like this:</p><pre><code class="language-js">store.dispatch({
type: 'DECREMENT'
});
</code></pre>
<p>which will execute the else condition inside the reducer and it will decrement the state value by 1 (so 2 - 1 &nbsp;will become 1).</p>
<p>Note that, inside the reducer, we're also returning state at the end. So if none of the condition matches, the default previous state will be returned from the function.</p>
<p>It's a common practice to use a switch statement inside the reducer instead of the if-else condition like this:</p><pre><code class="language-js">const reducer = (state = 0, action) =&gt; {
switch (action.type) {
case 'INCREMENT':
return state + 1;
case 'DECREMENT':
return state - 1;
default:
return state;
}
};
</code></pre>
<p>In addition to the type, we can also pass extra information as a part of the action.</p>
<p>Replace the contents of the <code>index.js</code> file with the following code:</p><pre><code class="language-js">import { createStore } from 'redux';
const reducer = (state = 0, action) =&gt; {
switch (action.type) {
case 'INCREMENT':
return state + action.payload;
case 'DECREMENT':
return state - action.payload;
default:
return state;
}
};
const store = createStore(reducer);
store.subscribe(() =&gt; {
console.log('current state', store.getState());
});
store.dispatch({
type: 'INCREMENT',
payload: 1
});
store.dispatch({
type: 'INCREMENT',
payload: 5
});
store.dispatch({
type: 'DECREMENT',
payload: 2
});
</code></pre>
<p>Now, if you run the application by executing the <code>npm start</code> command from the terminal, you will see the following logs printed in the console:</p>
<p>Here, while dispatching an action to the store, we're passing a <code>payload</code> with some value which we're using inside the reducer to increment or decrement the store value.</p>
<p>Here, we've used <code>payload</code> as a property name but you can name it whatever you want.</p>
<p>Our reducer function looks like this now:</p><pre><code class="language-js">const reducer = (state = 0, action) =&gt; {
switch (action.type) {
case 'INCREMENT':
return state + action.payload;
case 'DECREMENT':
return state - action.payload;
default:
return state;
}
};
</code></pre>
<p>So when we dispatch actions with type <code>INCREMENT</code> like this:</p><pre><code class="language-js">store.dispatch({
type: 'INCREMENT',
payload: 1
});
store.dispatch({
type: 'INCREMENT',
payload: 5
});
</code></pre>
<p>the following code from the reducer will be executed:</p><pre><code class="language-js">return state + action.payload;
</code></pre>
<p>This will first add 1 and then 5 to the previous value of the state, so we go from 1 to 6. And because of the <code>DECREMENT</code> action type:</p><pre><code class="language-js">store.dispatch({
type: 'DECREMENT',
payload: 2
});
</code></pre>
<p>we go from 6 to 4. So the final value of the store will become 4.</p>
<p>Here's a <a href="https://codesandbox.io/s/goofy-hooks-y1w9s?file=/src/index.js">Code Sandbox Demo</a>.</p>
<h2 id="thanks-for-reading-">Thanks for reading!</h2>
<p>This was a quick introduction to Redux from my <a href="https://master-redux.yogeshchavan.dev/">Mastering Redux</a> course. If you want to learn Redux in detail and build a complete food ordering app, you can check it out.</p>
<p>In the course, you will learn:</p>
<ul>
<li>Basic and advanced Redux</li>
<li>How to manage the complex state of array and objects</li>
<li>How to use multiple reducers to manage complex redux state</li>
<li>How to debug a Redux application</li>
<li>How to use Redux in React using the react-redux library to make your app reactive.</li>
<li>How to use the redux-thunk library to handle async API calls </li>
</ul>
<p>and much more.</p>
<p>Finally we'll build a complete <a href="https://www.youtube.com/watch?v=izSw74H08Bc">food ordering app</a> from scratch with stripe integration for accepting payments and deploy it to production.</p>
<p>You can get the course for just $12 instead of the original price of $19 along with the free copy of my popular <a href="https://modernjavascript.yogeshchavan.dev/">Mastering Modern JavaScript</a> book if you purchase by 19th May, 2021.</p>
<p>Want to stay up to date with regular content regarding JavaScript, React, Node.js? <a href="https://www.linkedin.com/in/yogesh-chavan97/">Follow me on LinkedIn</a>.</p>
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
