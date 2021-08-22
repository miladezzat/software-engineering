---
card: "/images/default.jpg"
tags: [React]
description: In this tutorial you will create an app that generates dynami
author: "Milad E. Fahmy"
title: "Giphy API Tutorial – How to Generate Animated Text GIFs with ReactJS"
created: "2021-08-15T19:26:16+02:00"
modified: "2021-08-15T19:26:16+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-react tag-javascript tag-frontend tag-api tag-css tag-gif ">
<header class="post-full-header">
<h1 class="post-full-title">Giphy API Tutorial – How to Generate Animated Text GIFs with ReactJS</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2021/05/giphy-API-tutorial.png 300w,
/news/content/images/size/w600/2021/05/giphy-API-tutorial.png 600w,
/news/content/images/size/w1000/2021/05/giphy-API-tutorial.png 1000w,
/news/content/images/size/w2000/2021/05/giphy-API-tutorial.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2021/05/giphy-API-tutorial.png" alt="Giphy API Tutorial – How to Generate Animated Text GIFs with ReactJS">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>In this tutorial you will create an app that generates dynamic animated text using Giphy's API with ReactJS.</p>
<p>After that I'll go over some of the other API features Giphy provides that you can use to make other interesting projects.</p>
<p>You can find the <a href="https://github.com/renaissanceengineer/reactjs-giphy-api-tutorial">code for the tutorial here</a>.</p>
<h2 id="video-tutorial">Video Tutorial</h2>
<p>To see a preview of the finished product in action, you can watch the start of this video. If you prefer to follow a video tutorial instead of reading (or in addition to reading), you can also follow along for the rest of the video. </p>
<h2 id="getting-started">Getting Started</h2>
<p>To get started you'll need a basic development environment for ReactJS. I'll be using create-react-app as the starting project template. </p>
<p>Next you'll need to visit <a href="https://developers.giphy.com">Giphy's developers page</a> and create an account so you can get your API key. Once you've created your account you'll see a dashboard like this:</p>
<p>You need to click "create an App" and choose the SDK option for your app. Your dashboard will then present you with an API key you will use to make calls to the Giphy API. </p>
<h3 id="how-to-setup-the-app-file-and-folder">How to Setup the App File and Folder</h3>
<p>The structure for this tutorial will be standard for ReactJS projects. Inside the <code>src</code> directory, create a <code>components</code> directory and create two files, <code>Error.js</code> and <code>TextList.js</code> </p>
<p>You also need to create a <code>.env</code> file in the root of the project that you'll use to store your API key. Whatever you name your variable, you need to append REACT_APP in front of it, like this:</p>
<p><code>REACT_APP_GIPHY_KEY=apikeyhere</code></p>
<h3 id="install-giphy-js-fetch">Install Giphy JS-fetch</h3>
<p>The final thing you need to do is install Giphy's API helper library which you can do using the following command:</p>
<p><code>npm install @giphy/js-fetch-api</code></p>
<h2 id="giphy-api-call">Giphy API Call</h2>
<p>The first task in making this app is creating an input form to accept the text you want to generate from the Giphy API. You will then use that text input and send it as an API request. </p>
<p>Before displaying this response data, let's test it out by simply making the API request and then logging the response. Write the following code in your <code>App.js</code> file:</p><pre><code class="language-js">import { GiphyFetch } from '@giphy/js-fetch-api'
import {useState} from 'react'
import TextList from './components/TextList'
import Error from './components/Error'
import './App.css';
const giphy = new GiphyFetch(process.env.REACT_APP_GIPHY_KEY)
function App() {
const [text, setText] = useState('')
const [results, setResults] = useState([])
const [err, setErr] = useState(false)
const handleInput = (e) =&gt; {
setText(e.target.value)
}
const handleSubmit = (e) =&gt; {
if(text.length === 0) {
//set error state to true
setErr(true)
return
}
console.log(text)
const apiCall = async () =&gt; {
const res = await giphy.animate(text, {limit: 20})
console.log(res.data)
setResults(res.data)
}
apiCall()
setText('')
setErr(false)
}
return (
&lt;div className="App"&gt;
&lt;h1&gt;Animated Text Generator&lt;/h1&gt;
&lt;h3&gt;Type text into the form and hit submit&lt;/h3&gt;
&lt;input className='input-field' value={text} onChange={handleInput} /&gt;
&lt;button className='submit-btn' onClick={handleSubmit}&gt;Submit&lt;/button&gt;
&lt;/div&gt;
);
}
export default App;</code></pre>
<p>Let's take a look at what's happening in this code:</p>
<p><code>const giphy = new GiphyFetch(process.env.REACT_APP_GIPHY_KEY)</code> is where you use the Giphy helper library to create the object you'll use for interacting with the Giphy API. </p>
<p><code>process.env.REACT_APP_GIPHY_KEY</code> is how your API key is passed as an argument from the <code>.env</code> file. You can also pass your API key as a string, but you won't want to do this in production because somebody could steal and use your key.</p>
<p>Inside the main App component, you create three pieces of state using hooks. The 1st is <code>text</code> which will be what stores the user input. This is what will be passed to the API as an argument to generate text. </p>
<p><code>err</code> will be used to conditionally render an error later if the user attempts to submit an empty string. </p>
<p>And <code>results</code> is an empty array that will be used to store the results from the API response. </p>
<p>If you run the code and check your developer console, you should see that the Giphy API returned an array with 20 objects.</p>
<h2 id="how-to-display-the-data-with-react">How to Display the Data with React</h2>
<p>Now that the data is being properly stored in state, all you need to do is display that data with JSX. &nbsp;To handle that, we'll finish those two components we created earlier. </p>
<p>First we'll make a simple error component that can display a custom message. Place the following code into <code>Error.js</code> inside your components folder:</p><pre><code class="language-js">const Error = (props) =&gt; {
if(!props.isError) {
return null
}
return (
&lt;p className='error'&gt;{props.text}&lt;/p&gt;
)
}
export default Error</code></pre>
<p>The <code>Error</code> component is very simple. It takes the <code>err</code> state and a text string as props, and if the value is true it will render the text. If <code>err</code> is false, it returns null.</p>
<p>Next is the TextList component which will take the <code>results</code> state as props and then display the data in your app:</p><pre><code class="language-js">const TextList = (props) =&gt; {
const items = props.gifs.map((itemData) =&gt; {
return &lt;Item url={itemData.url} /&gt;;
});
return &lt;div className="text-container"&gt;{items}&lt;/div&gt;;
};
const Item = (props) =&gt; {
return (
&lt;div className="gif-item"&gt;
&lt;img src={props.url} /&gt;
&lt;/div&gt;
);
};
export default TextList;</code></pre>
<p>This component is a little more complicated, so here's what is happening:</p>
<p>The <code>Item</code> component accepts the URL value which is inside each value returned from the API. It uses this URL as the source for the image element.</p>
<p>The <code>results</code> state array from the App component is passed to the TextList component as <code>gifs</code>. The array is mapped over to generate all the <code>Item</code> components for all the results and assigned to the <code>items</code> variable and then returned inside a container div. We'll style this container later to create a grid layout.</p>
<h3 id="how-to-import-the-components-into-the-main-app">How to Import the Components into the Main App</h3>
<p>Now you just need to use those finished components in your JSX. The final code of your <code>App.js</code> file should look like this:</p><pre><code class="language-js">import TextList from './components/TextList'
import Error from './components/Error'
import { GiphyFetch } from '@giphy/js-fetch-api'
import {useState} from 'react'
import './App.css';
const giphy = new GiphyFetch(process.env.REACT_APP_GIPHY_KEY)
function App() {
const [text, setText] = useState('')
const [results, setResults] = useState([])
const [err, setErr] = useState(false)
const handleInput = (e) =&gt; {
setText(e.target.value)
}
const handleSubmit = (e) =&gt; {
if(text.length === 0) {
//set error state to true
setErr(true)
return
}
console.log(text)
const apiCall = async () =&gt; {
const res = await giphy.animate(text, {limit: 20})
setResults(res.data)
}
apiCall()
//change error state back to false
setText('')
setErr(false)
}
return (
&lt;div className="App"&gt;
&lt;h1&gt;Animated Text Generator&lt;/h1&gt;
&lt;h3&gt;Type text into the form and hit submit&lt;/h3&gt;
&lt;input className='input-field' value={text} onChange={handleInput} /&gt;
&lt;button className='submit-btn' onClick={handleSubmit}&gt;Submit&lt;/button&gt;
&lt;Error isError={err} text='need length longer than 0 for input'/&gt;
{results &amp;&amp; &lt;TextList gifs={results}  /&gt;}
&lt;/div&gt;
);
}
export default App;</code></pre>
<p>The only changes here are the bottom two lines added in the return statement:</p>
<p>The <code>Error</code> component is passed the <code>err</code> state and a <code>text</code> prop which will only be rendered if an error occurs. </p>
<p>In this app there is only one error condition in case the input is empty, but you could add additional checks with custom error messages as well.</p>
<p>Then we use conditional rendering with the <code>&amp;&amp;</code> logical operator. This causes the <code>TextList</code> component to render only if the results array is not empty, which means the API response returned successfully with our gifs.</p>
<p>If you run your code at this point, you should see an ugly but functional app. If you use the input field and click the submit button, the gifs should be returned and displayed in your app.</p>
<h2 id="how-to-add-styling-with-css">How to Add Styling with CSS</h2>
<p>The last thing to do is make the app look a little bit prettier. Feel free to customize any of these styles if you want to adjust how things look. Place this code into your <code>App.css</code> file:</p><pre><code class="language-css">.App {
text-align: center;
}
.error {
color: #b50000;
font-size: 20px;
font-weight: 500;
}
.input-field {
font-size: 20px;
vertical-align: middle;
transition: .5s;
border-width: 2px;
margin: 5px;
}
.input-field:focus {
box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
outline: none;
}
.input-field:hover {
box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}
.submit-btn {
background-color: rgb(19, 209, 235);
color: #fff;
padding: 6px 30px;
vertical-align: middle;
outline: none;
border: none;
font-size: 16px;
transition: .3s;
cursor: pointer;
}
.submit-btn:hover {
background-color: rgb(10, 130, 146);
}
.text-container {
display: flex;
flex-wrap: wrap;
justify-content: center;
}
.gif-item {
flex-basis: 19%;
}
img {
max-width: 100%;
}
@media screen and (max-width: 992px) {
.gif-item {
flex-basis: 31%;
}
}
@media screen and (max-width: 600px) {
.gif-item {
flex-basis: 48%;
}
}
</code></pre>
<p>Nothing crazy going on here with the CSS. Just some styling for the submit button and some box shadow for the input field. </p>
<p>There are also a few media queries for some responsive design that changes the column count depending on the screen size.</p>
<h2 id="other-giphy-api-features">Other Giphy API features</h2>
<p>The animated text API is just one feature available in the Giphy API. I'll go over a few other features that could be useful as part of a project or as a solo project.</p>
<h3 id="animated-emoji">Animated Emoji</h3>
<p>The Emoji endpoint is very straightforward in terms of use. It returns a bunch of animated emoji just like the animated text API you used above, except you don't need to pass any arguments to it. An example API call:</p>
<p><code>const data = await gf.emoji()</code></p>
<p>This endpoint could be useful if you are building a chat application and want to make it easy for users to use Emoji in their messages.</p>
<h3 id="pre-built-ui-components">Pre-Built UI components</h3>
<p>If you don't feel like messing around with a ton of custom code like we did in this tutorial, Giphy actually provides components for both ReactJS and regular JavaScript. </p>
<p>You can make a grid very similar to what we created in this tutorial with just a few lines of code:</p><pre><code class="language-js">import { Grid } from '@giphy/react-components'
import { GiphyFetch } from '@giphy/js-fetch-api'
// use @giphy/js-fetch-api to fetch gifs
// apply for a new Web SDK key. Use a separate key for every platform (Android, iOS, Web)
const gf = new GiphyFetch('your Web SDK key')
// fetch 10 gifs at a time as the user scrolls (offset is handled by the grid)
const fetchGifs = (offset: number) =&gt; gf.trending({ offset, limit: 10 })
// React Component
ReactDOM.render(&lt;Grid width={800} columns={3} gutter={6} fetchGifs={fetchGifs} /&gt;, target)</code></pre>
<p>You get some additional bonus features like automatic dynamic updates to fetch more content when users scroll to the bottom of the Grid. </p>
<p>You can choose between templates which handle almost everything or just a Grid component which gives you a little more control.</p>
<p>Here's an <a href="https://codesandbox.io/s/giphyreact-components-hbmcf?from-embed">interactive demo</a> provided by Giphy. </p>
<h3 id="trending-api">Trending API</h3>
<p>This endpoint returns a list of constantly updated content based on user engagement and what is currently popular on Giphy.</p>
<h3 id="search-api">Search API</h3>
<p>This endpoint is similar to the animated text endpoint, you just need to pass a search query as a parameter and you'll get an array of gifs that match.</p>
<p>There are many more API endpoints available. You can see the rest in <a href="https://developers.giphy.com/docs/api/endpoint">Giphy's API documentation</a>.</p>
<h2 id="conclusion">Conclusion</h2>
<p>That's it for this tutorial! I hope you found it interesting and you make some cool projects using the Giphy API.</p>
<p>If you are interested in a bunch of other cool APIs that you can use for making portfolio projects, you can check out this video as well which goes over 8 more APIs that I think are really cool.</p>
<p></p>
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
