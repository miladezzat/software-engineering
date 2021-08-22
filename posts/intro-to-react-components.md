---
card: "/images/default.jpg"
tags: [React]
description: HTML is the language of the web, but creating entire websites
author: "Milad E. Fahmy"
title: "Why You Should Use React Components Instead of HTML"
created: "2021-08-15T19:26:55+02:00"
modified: "2021-08-15T19:26:55+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-react tag-components tag-javascript tag-jsx ">
<header class="post-full-header">
<h1 class="post-full-title">Why You Should Use React Components Instead of HTML</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2021/03/still-using-html-start-using-react-components.png 300w,
/news/content/images/size/w600/2021/03/still-using-html-start-using-react-components.png 600w,
/news/content/images/size/w1000/2021/03/still-using-html-start-using-react-components.png 1000w,
/news/content/images/size/w2000/2021/03/still-using-html-start-using-react-components.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2021/03/still-using-html-start-using-react-components.png" alt="Why You Should Use React Components Instead of HTML">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>HTML is the language of the web, but creating entire websites with HTML alone can be repetitive and hard to manage.</p>
<p>In this article, we're going to see how to use the JavaScript library React as a way to add convenience and reusability to our websites.</p>
<p>React is a powerful tool for any developer who knows HTML and wants to build more organized and dynamic websites, faster.</p>
<p>Let's get started!</p>
<blockquote>Want the complete guide to become a professional React developer from start to finish? Check out <a href="https://reactbootcamp.com">The React Bootcamp</a>. </blockquote>
<h2 id="why-should-i-use-react-instead-of-html">Why should I use React instead of HTML?</h2>
<p>React arrived in 2013 as a better way to build web apps with JavaScript. It's often referred to as a library for building UIs, short for "user interfaces". </p>
<p>What makes React such a desirable library to learn is that <em>it doesn't replace HTML.</em></p>
<p>It takes advantage of HTML's popularity and strength as the most popular programming language, by letting you use a very similar syntax to HTML to build interfaces and add dynamic features to it using JavaScript.</p>
<h2 id="how-to-build-a-user-interface-with-html">How to build a user interface with HTML</h2>
<p>In light of React's versatility, we can recreate any site or user interface that we see on the web.</p>
<p>For this lesson, let's remake part of an app that you likely use every day—Google Search.</p>
<p>This may seem ambitious if you are brand new to React, but it requires a knowledge of only two simple concepts: HTML and basic JavaScript functions.</p>
<p>What's the way to build out a user interface without knowing React or even JavaScript?</p>
<p>By using HTML elements as part of a simple HTML document.</p>
<p>Here's how we would show the first three results that come up when you search for "reactjs" in Google.</p><pre><code class="language-html">&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;title&gt;reactjs Search Results&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;section&gt;
&lt;div&gt;
&lt;a href="https://reactjs.org"
&gt;React - A JavaScript Library for Building User Interfaces&lt;/a
&gt;
&lt;div&gt;
&lt;h3&gt;reactjs.org&lt;/h3&gt;
&lt;/div&gt;
&lt;div&gt;
React makes it painless to create interactive UIs.
&lt;/div&gt;
&lt;/div&gt;
&lt;div&gt;
&lt;a href="https://en.wikipedia.org/wiki/React_(web_framework)"
&gt;React (web framework) - Wikipedia&lt;/a
&gt;
&lt;div&gt;
&lt;h3&gt;https://en.wikipedia.org › wiki › React_(web_framework)&lt;/h3&gt;
&lt;/div&gt;
&lt;div&gt;
React is a JavaScript library for building user interfaces.
&lt;/div&gt;
&lt;/div&gt;
&lt;div&gt;
&lt;a href="https://twitter.com/reactjs?lang=en"
&gt;React (@reactjs) | Twitter&lt;/a
&gt;
&lt;div&gt;
&lt;h3&gt;https://twitter.com › reactjs&lt;/h3&gt;
&lt;/div&gt;
&lt;div&gt;
The latest Tweets from React (@reactjs).
&lt;/div&gt;
&lt;/div&gt;
&lt;/section&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre>
<p>Using static HTML alone would be fine if we only needed to show a few links.</p>
<p>But how could we display 100s or 1000s of links this way, all with different data, as a search engine might need to do?</p>
<p>What's a better, that is, a simpler and more extensible way of writing this?</p>
<p>HTML alone is not going to be the answer. We'll need a way of making our site more dynamic to display as many links as we need.</p>
<p>When it comes to adding behavior to a site, we need JavaScript. And since our goal is to build great apps with JavaScript, we know to use React.</p>
<h2 id="how-to-upgrade-any-html-site-to-a-react-app">How to upgrade any HTML site to a React app</h2>
<p>Let's turn our static HTML into a dynamic React app.</p>
<p>Sounds difficult? It's simpler than you think.</p>
<p>We can build a React app out of a single HTML document. All we have to do is bring React in with the following external scripts.*</p><pre><code class="language-html">&lt;script src="https://unpkg.com/react@16/umd/react.development.js"&gt;&lt;/script&gt;
&lt;script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"&gt;&lt;/script&gt;
&lt;script src="https://unpkg.com/babel-standalone@6.26.0/babel.js"&gt;&lt;/script&gt;
</code></pre>
<p>The first is for building our React app, and the second is for displaying, or rendering the React app in the browser.</p>
<p>The first is <strong>React</strong>, the second <strong>ReactDOM</strong>.</p>
<p>The third script is to bring in a tool called <strong>Babel</strong>. We'll touch on what that does in a bit.</p>
<p>Here's what our code looks like at this point:</p><pre><code class="language-html">&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;title&gt;reactjs Search Results&lt;/title&gt;
&lt;script src="https://unpkg.com/react@16/umd/react.development.js"&gt;&lt;/script&gt;
&lt;script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"&gt;&lt;/script&gt;
&lt;script src="https://unpkg.com/babel-standalone@6.26.0/babel.js"&gt;&lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;!-- our script must have type="text/babel" for Babel to work --&gt;
&lt;script type="text/babel"&gt;
// React code will go here
&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre>
<p>... and it's almost a React app.</p>
<p>Note that we have a script where we can write our React code, but no HTML.</p>
<p>Let's fix that.</p>
<h2 id="how-to-create-and-render-our-react-app">How to create and render our React app</h2>
<p>Every React app must have what's known as an entry point.</p>
<p>The <strong>entry point</strong> is an HTML element where we insert our React application into the page.</p>
<p>The conventional entry point is a div with the id of root (<code>&lt;div id="root"&gt;&lt;/div&gt;</code>).</p>
<p>We'll add that, then use the <code>render()</code> function from ReactDOM to do the work of rendering the app.</p>
<p>The first is the app itself, meaning our HTML from before, and the second must reference our entry point. We can create that reference by saying <code>document.getElementById('root')</code>.</p>
<p>So now we have everything we need to run our React app:</p><pre><code class="language-html">&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;title&gt;reactjs Search Results&lt;/title&gt;
&lt;script src="https://unpkg.com/react@16/umd/react.development.js"&gt;&lt;/script&gt;
&lt;script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"&gt;&lt;/script&gt;
&lt;script src="https://unpkg.com/babel-standalone@6.26.0/babel.js"&gt;&lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;div id="root"&gt;
&lt;/div&gt;
&lt;!-- our script must have type="text/babel" for Babel to work --&gt;
&lt;script type="text/babel"&gt;
ReactDOM.render(
&lt;section&gt;
&lt;div&gt;
&lt;a href="https://reactjs.org"
&gt;React - A JavaScript Library for Building User Interfaces&lt;/a
&gt;
&lt;div&gt;
&lt;h3&gt;reactjs.org&lt;/h3&gt;
&lt;/div&gt;
&lt;div&gt;
React makes it painless to create interactive UIs.
&lt;/div&gt;
&lt;/div&gt;
&lt;div&gt;
&lt;a href="https://en.wikipedia.org/wiki/React_(web_framework)"&gt;React (web framework) - Wikipedia&lt;/a&gt;
&lt;div&gt;
&lt;h3&gt;https://en.wikipedia.org › wiki › React_(web_framework)&lt;/h3&gt;
&lt;/div&gt;
&lt;div&gt;
React is a JavaScript library for building user interfaces.
&lt;/div&gt;
&lt;/div&gt;
&lt;div&gt;
&lt;a href="https://twitter.com/reactjs?lang=en"&gt;React (@reactjs) | Twitter&lt;/a&gt;
&lt;div&gt;
&lt;h3&gt;https://twitter.com › reactjs&lt;/h3&gt;
&lt;/div&gt;
&lt;div&gt;
The latest Tweets from React (@reactjs).
&lt;/div&gt;
&lt;/div&gt;
&lt;/section&gt;, document.getElementById('root'))
&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
<p>And if we look at our result, it works like before. Perfect!</p>
<p>Now let's use React to improve our site by dynamically displaying our links.</p>
<h2 id="how-to-make-html-reusable-with-react-components">How to make HTML reusable with React components</h2>
<p>If we examine our HTML structure, each link consists of the same parts. Each has a URL, a title, a shorter URL, and an excerpt. For each link, we have to repeat the same HTML elements again and again.</p>
<p>In programming, if you're having to repeat yourself a great deal, it's likely a sign that your code can be simplified and shortened in some way. As programmers, we always strive to repeat ourselves as little as possible.</p>
<p>We try to write code that is DRY, where you "don't repeat yourself."</p>
<p>React is, at core, JavaScript plus some features to help us build apps.</p>
<p>And since we're working with JavaScript, what is a JavaScript feature that allows us to create or output something as many times as we like?</p>
<p>A function. </p>
<p>Let's create one here, and we'll call it Link.</p><pre><code class="language-js">function Link() {
// create link HTML output
}
</code></pre>
<p>The reason being that we want this function to return or output a link's HTML every time we call it.</p>
<p>To do that, let's return our first link's HTML:</p><pre><code class="language-js">function Link() {
return (
&lt;div&gt;
&lt;a href="https://reactjs.org"&gt;
React - A JavaScript Library for Building User Interfaces
&lt;/a&gt;
&lt;div&gt;
&lt;h3&gt;reactjs.org&lt;/h3&gt;
&lt;/div&gt;
&lt;div&gt;React makes it painless to create interactive UIs.&lt;/div&gt;
&lt;/div&gt;
);
}
</code></pre>
<p>So now let's use it to display each link it returns.</p>
<p>To do so, instead of calling it like <code>Link()</code>, in React, we can write it like it was an HTML element <code>&lt;Link /&gt;</code>.</p>
<p>If you've seen this for the first time it might bend your brain a little bit.</p>
<p>Here we are using HTML syntax, but we are calling a JavaScript function! You'll get comfortable with it as you see this more often.</p>
<p>(Also, did you notice that we didn't have to use an opening and closing tag, like it was a normal HTML element? More about that in a minute.)</p>
<p><strong>How does React convert HTML-looking syntax into JavaScript?</strong></p>
<p>It does so with the help of a special tool called Babel, the third script we added. You can see how it works in action here:</p>
<p>What's happening?</p>
<p>Babel, a JavaScript tool called a compiler, converts ("compiles") this code that looks like HTML into valid JavaScript.</p>
<h2 id="what-is-this-html-like-syntax-jsx">What is this HTML-like syntax? JSX</h2>
<p>This HTML, which is in fact JavaScript, is called <strong>JSX</strong>, which stands for "JavaScript XML."</p>
<p>XML, if you're not familiar, is a slightly stricter way of writing HTML.</p>
<p>Stricter means that we need to use a closing forward slash for elements with one tag. For example: <code>&lt;input&gt;</code> in HTML as valid JSX is <code>&lt;input /&gt;</code>.</p>
<p>So to reiterate, JSX is <em>not</em> valid JavaScript code.</p>
<p>Meaning, you couldn't put JSX in a browser and expect it to work. We need both a compiler, like Babel, to convert it into valid JavaScript, and then React to use that created JavaScript.</p>
<p>So now to use our custom Link element, we remove all three of the links' HTML and replace them with three Links, like so:</p><pre><code class="language-html">&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;title&gt;reactjs Search Results&lt;/title&gt;
&lt;script src="https://unpkg.com/react@16/umd/react.development.js"&gt;&lt;/script&gt;
&lt;script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"&gt;&lt;/script&gt;
&lt;script src="https://unpkg.com/babel-standalone@6.26.0/babel.js"&gt;&lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;div id="root"&gt;&lt;/div&gt;
&lt;script type="text/babel"&gt;
ReactDOM.render(
&lt;section&gt;
&lt;Link /&gt;
&lt;Link /&gt;
&lt;Link /&gt;
&lt;/section&gt;,
document.getElementById("root")
);
&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre>
<p>And if we look at our result, we do indeed have three links.</p>
<p>This is the power of React: it takes the reusability of JavaScript functions, but allows us to use them like they were HTML.</p>
<p>We refer to these custom elements made with JavaScript as <strong>components</strong>.</p>
<p>So we've gained a great deal of readability here by using components. We don't have any confusion about what we're looking at if we've named our components well. No need to read through a ton of HTML elements to see what the app displays.</p>
<p>We see immediately that we have three custom links.</p>
<h2 id="the-anatomy-of-a-function-component">The anatomy of a function component</h2>
<p>Now that we know how components operate, let's take a second look at our Link function component:</p>
<p>Our code may look pretty straightforward, but there are a few subtle things you should take note of here:</p><pre><code class="language-js">function Link() {
return (
&lt;div&gt;
&lt;a href="https://reactjs.org"&gt;
React - A JavaScript Library for Building User Interfaces
&lt;/a&gt;
&lt;div&gt;
&lt;h3&gt;reactjs.org&lt;/h3&gt;
&lt;/div&gt;
&lt;div&gt;React makes it painless to create interactive UIs.&lt;/div&gt;
&lt;/div&gt;
);
}
</code></pre>
<p>The function component name is capitalized: Link instead of link. This is a required naming convention for React components. We use a capitalized name to distinguish components from normal functions. Note that functions which return JSX are not the same as normal JavaScript functions.</p>
<p>Notice how the JSX we are returning has a set of parentheses around it. As you are first writing your React code, it's easy to forget these parentheses, which will result in an error. Wrap your JSX in parentheses if it span more than one line.</p>
<p>Finally, our Link function returns some JSX. Every React component must return either JSX elements or other React components. And yes, React components can return other components.</p>
<p>So since React components can return other React components, we can make an App component.</p>
<p>This App component will contain our entire set or <strong>tree of components</strong> and will show of what our app consists.</p>
<p>And with an App component, this makes our render method much easier to read:</p><pre><code class="language-html">&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
...
&lt;/head&gt;
&lt;body&gt;
&lt;div id="root"&gt;&lt;/div&gt;
&lt;script type="text/babel"&gt;
function Link() {
return (
&lt;div&gt;
&lt;a href="https://reactjs.org"&gt;
React - A JavaScript Library for Building User Interfaces
&lt;/a&gt;
&lt;div&gt;
&lt;h3&gt;reactjs.org&lt;/h3&gt;
&lt;/div&gt;
&lt;div&gt;React makes it painless to create interactive UIs.&lt;/div&gt;
&lt;/div&gt;
);
}
function App() {
return (
&lt;section&gt;
&lt;Link /&gt;
&lt;Link /&gt;
&lt;Link /&gt;
&lt;/section&gt;
);
}
ReactDOM.render(&lt;App /&gt;, document.getElementById("root"));
&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
<p>We see from this code that React components have a hierarchy or order like HTML elements. As a result, we can refer to different parts of our component tree as either <strong>parents</strong> or <strong>children</strong>.</p>
<p>In this case, for example, to each rendered Link component, App is the parent. To App, all three Links are its children.</p>
<p>Note that whenever we render or return JSX, there can only be one parent component. But a parent component can have as many child components (as well as elements) as needed.</p>
<p>When we look at the output of our code, you've likely noticed the following problem:</p>
<p>We have three instances of the same link! That's because we are using the same data for each link we create. Yet we know each link has different data—a different title, URL, short URL, and excerpt.</p>
<p>So how do we pass in unique data to our components?</p>
<h2 id="how-to-pass-dynamic-data-to-components-props">How to pass dynamic data to components: Props</h2>
<p>If we wanted to pass some title text to a normal JavaScript function we would do so like this:</p><pre><code class="language-js">Link("Our link title here");
</code></pre>
<p>But how to we do pass data to <strong>function components</strong>?</p>
<p>Normal HTML elements accept data in the form of attributes. But unlike HTML attributes, attributes aren't recognized on React components. The data doesn't stay on the component itself. Where do they go?</p>
<p>As arguments to the function component. Again, this is something we're familiar with since we know the basics of functions.</p>
<p>We know that functions output data using <code>return</code> and accept data with <em>arguments</em>.</p>
<p>If we had an HTML element, say a div with an attribute called "title", this code would be invalid. HTML doesn't have a title attributes for any of its elements:</p><pre><code class="language-html">&lt;div title="Our link title here"&gt;&lt;/div&gt;
</code></pre>
<p>But if we created this title "attribute" on our Link component:</p><pre><code class="language-html">&lt;link title="Our link title here" /&gt;
</code></pre>
<p>This is valid. And since we wrote title like an attribute on our component, it is passed to the Link function as an argument called "title".</p>
<p>In code we can think of it like this:</p><pre><code class="language-js">const linkData = { title: "Our link title here" };
Link(linkData);
</code></pre>
<p>Notice that the linkData argument is an object.</p>
<p>React collects and organizes the data passed to a given component as a single object.</p>
<p>The name for data passed to a component, such as title, is <strong>props</strong>.</p>
<p>All prop values exist within the function component itself on a props object.</p>
<p>And since our goal is to use our title prop within our Link component, we can write the following:</p><pre><code class="language-js">function Link(props) {
return &lt;a&gt;{props.title}&lt;/a&gt;;
}
</code></pre>
<p>We use the curly braces <code>{}</code> syntax to insert the title prop from props.title wherever we want. And the same applies to any other prop passed down to a component.</p>
<p>These curly braces allow us to insert or interpolate dynamic values wherever we need.</p>
<p>Now we have everything we need to fix our links. For each of the Link components, we need to pass down their title, URL, short URL, and excerpt as individual props:</p><pre><code class="language-html">&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;title&gt;reactjs Search Results&lt;/title&gt;
&lt;script src="https://unpkg.com/react@16/umd/react.development.js"&gt;&lt;/script&gt;
&lt;script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"&gt;&lt;/script&gt;
&lt;script src="https://unpkg.com/babel-standalone@6.26.0/babel.js"&gt;&lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;div id="root"&gt;&lt;/div&gt;
&lt;script type="text/babel"&gt;
function Link(props) {
return (
&lt;div&gt;
&lt;a href={props.url}&gt;{props.title}&lt;/a&gt;
&lt;div&gt;
&lt;h3&gt;{props.shortUrl}&lt;/h3&gt;
&lt;/div&gt;
&lt;div&gt;{props.excerpt}&lt;/div&gt;
&lt;/div&gt;
);
}
function App() {
return (
&lt;section&gt;
&lt;Link
title="React - A JavaScript Library for Building User Interfaces"
url="https://reactjs.org"
// props consisting of two or more words must be written in camelcase
shortUrl="reactjs.org"
excerpt="React makes it painless to create interactive UIs."
/&gt;
&lt;Link
title="React (web framework) - Wikipedia"
url="https://en.wikipedia.org/wiki/React_(web_framework)"
shortUrl="en.wikipedia.org › wiki › React_(web_framework)"
excerpt="React is a JavaScript library for building user interfaces."
/&gt;
&lt;Link
title="React (@reactjs) | Twitter"
url="https://twitter.com/reactjs"
shortUrl="twitter.com › reactjs"
excerpt="The latest Tweets from React (@reactjs)."
/&gt;
&lt;/section&gt;
);
}
ReactDOM.render(&lt;App /&gt;, document.getElementById("root"));
&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre>
<p>Looking at our output, we still get the same result.</p>
<p>But there was a bit of a trade-off here. Through props, we were able to make our Link component much more readable.</p>
<p>Now we can make any Link based off of whatever (valid) prop data we give it.</p>
<p>But now you can see that our App component got a lot bigger by providing the prop values immediately on each Link.</p>
<p><em>Isn't there a way that we can move all this data somewhere else?</em></p>
<h2 id="how-to-separate-the-data-from-the-interface">How to separate the data from the interface</h2>
<p>Let's move our data out of the component tree and put it somewhere more convenient, but still use the data as needed.</p>
<p>To do that we'll make an array of objects with the link data to pass down to the Link components through props.</p>
<p>This allows us to put our data wherever we want, in another JavaScript file even. The benefit is that it doesn't clutter up our components anymore.</p><pre><code class="language-html">&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
...
&lt;/head&gt;
&lt;body&gt;
&lt;div id="root"&gt;&lt;/div&gt;
&lt;script type="text/babel"&gt;
const linkData = [
{
title: "React - A JavaScript Library for Building User Interfaces",
url: "https://reactjs.org",
shortUrl: "reactjs.org",
excerpt: "React makes it painless to create interactive UIs."
},
{
title: "React (web framework) - Wikipedia",
url: "https://en.wikipedia.org/wiki/React_(web_framework)",
shortUrl: "en.wikipedia.org › wiki › React_(web_framework)",
excerpt: "React is a JavaScript library for building user interfaces."
},
{
title: "React (@reactjs) | Twitter",
url: "https://twitter.com/reactjs",
shortUrl: "twitter.com › reactjs",
excerpt: "The latest Tweets from React (@reactjs)."
}
];
function Link(props) {
return (
&lt;div&gt;
&lt;a href={props.url}&gt;{props.title}&lt;/a&gt;
&lt;div&gt;
&lt;h3&gt;{props.shortUrl}&lt;/h3&gt;
&lt;/div&gt;
&lt;div&gt;{props.excerpt}&lt;/div&gt;
&lt;/div&gt;
);
}
function App() {
return (
&lt;section&gt;
&lt;Link title="" url="" shortUrl="" excerpt="" /&gt;
&lt;Link title="" url="" shortUrl="" excerpt="" /&gt;
&lt;Link title="" url="" shortUrl="" excerpt="" /&gt;
&lt;/section&gt;
);
}
ReactDOM.render(&lt;App /&gt;, document.getElementById("root"));
&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre>
<p>Now how do we display each Link with its data using the linkData array?</p>
<p>If you've worked with arrays before, to get each element we loop or iterate over the array. Here, for each loop, we can pass the props data down to the Link component again.</p>
<p>This pattern is a very common one in React. So much so that there is a special array method that we can use to perform this iteration, called .map(). It is not the same as the map method in regular JavaScript—it is for working with JSX and components alone.</p><pre><code class="language-html">&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
...
&lt;/head&gt;
&lt;body&gt;
&lt;div id="root"&gt;&lt;/div&gt;
&lt;script type="text/babel"&gt;
const linkData = [
{
title: "React - A JavaScript Library for Building User Interfaces",
url: "https://reactjs.org",
shortUrl: "reactjs.org",
excerpt: "React makes it painless to create interactive UIs."
},
{
title: "React (web framework) - Wikipedia",
url: "https://en.wikipedia.org/wiki/React_(web_framework)",
shortUrl: "en.wikipedia.org › wiki › React_(web_framework)",
excerpt: "React is a JavaScript library for building user interfaces."
},
{
title: "React (@reactjs) | Twitter",
url: "https://twitter.com/reactjs",
shortUrl: "twitter.com › reactjs",
excerpt: "The latest Tweets from React (@reactjs)."
}
];
function Link(props) {
return (
&lt;div&gt;
&lt;a href={props.url}&gt;{props.title}&lt;/a&gt;
&lt;div&gt;
&lt;h3&gt;{props.shortUrl}&lt;/h3&gt;
&lt;/div&gt;
&lt;div&gt;{props.excerpt}&lt;/div&gt;
&lt;/div&gt;
);
}
function App() {
return (
&lt;section&gt;
{linkData.map(function(link) {
return (
&lt;Link
key={link.url}
title={link.title}
url={link.url}
shortUrl={link.shortUrl}
excerpt={link.excerpt}
/&gt;
);
})}
&lt;/section&gt;
);
}
ReactDOM.render(&lt;App /&gt;, document.getElementById("root"));
&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
<p>By moving our data out of the UI and displaying each link using .map(), we have a far simpler React app that can accept as many links as we choose.</p>
<p>Finally, note in our code that where we are mapping over our linkData, the entire expression is surrounded by our curly braces. Be aware that JSX allows us to insert any valid JavaScript expression between curly braces.</p>
<h2 id="how-to-build-apps-the-react-way">How to build apps the "React" way</h2>
<p>What was the point of covering these various patterns?</p>
<p>Not only to cover the basics of JSX and how React combines HTML and JavaScript, but also to show you how React developers think.</p>
<p>How do you think like a React developer? By knowing how to break down your UI into reusable components.</p>
<p>When a React developer plans out an application they want to make, they start by identifying all individual parts of the app and seeing what parts can be made into reusable components. </p>
<p>We do that by seeing if each part has the same visual (HTML) structures and accept the same or very similar sets of data (through props).</p>
<p>Now to come full circle, let's take a new look at the starting UI that we wanted to recreate at the beginning. </p>
<p>If we were to look at this like a React developer, it might look something like this:</p>
<p>The better you get with using components, the faster you'll be able to build your own websites and applications with ease.</p>
<h2 id="enjoythispostjointhereactbootcamp">Enjoy this post? Join The React Bootcamp</h2>
<p><strong><a href="http://bit.ly/join-react-bootcamp">The React Bootcamp</a></strong> takes everything you should know about learning React and bundles it into one comprehensive package, including videos, cheatsheets, plus special bonuses.</p>
<p>Gain the insider information hundreds of developers have already used to master React, find their dream jobs, and take control of their future:</p>
<p><a href="http://bit.ly/join-react-bootcamp"><img src="https://reedbarger.nyc3.digitaloceanspaces.com/react-bootcamp-banner.png" alt="The React Bootcamp"></a><br>
<em>Click here to be notified when it opens</em>
</p>
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
