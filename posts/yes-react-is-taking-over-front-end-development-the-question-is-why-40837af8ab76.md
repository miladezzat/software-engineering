---
card: "https://cdn-media-1.freecodecamp.org/images/1*3IUcek7o2S5aJnFAgtP5Gg.png"
tags: [React]
description: "Here are a few reasons why React has become so popular so qui"
author: "Milad E. Fahmy"
title: "Yes, React is taking over front-end development. The question is why."
created: "2021-08-16T10:24:36+02:00"
modified: "2021-08-16T10:24:36+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-react tag-javascript tag-programming tag-web-development tag-web-design ">
<header class="post-full-header">
<h1 class="post-full-title">Yes, React is taking over front-end development. The question is why.</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*3IUcek7o2S5aJnFAgtP5Gg.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*3IUcek7o2S5aJnFAgtP5Gg.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*3IUcek7o2S5aJnFAgtP5Gg.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*3IUcek7o2S5aJnFAgtP5Gg.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*3IUcek7o2S5aJnFAgtP5Gg.png" alt="Yes, React is taking over front-end development. The question is why.">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<blockquote><strong>Update:</strong> This article is now part of my book “React.js Beyond The Basics”.</blockquote><blockquote>Read the updated version of this content and more about React at <a href="https://jscomplete.com/g/why-react" rel="noopener"><strong><em>jscomplete.com/react-beyond-basics</em></strong></a><em>.</em></blockquote><p>Here are a few reasons why React has become so popular so quickly:</p><ul><li>Working with the DOM API is hard. React basically gives developers the ability to work with a virtual browser that is more friendly than the real browser. React’s virtual browser acts like an agent between the developer and the real browser.</li><li>React enables developers to declaratively describe their User Interfaces and model the state of those interfaces. This means instead of coming up with steps to describe transactions on interfaces, developers just describe the interfaces in terms of a final state (like a function). When transactions happen to that state, React takes care of updating the User Interfaces based on that.</li><li>React is just JavaScript, there is a very small API to learn, just a few functions and how to use them. After that, your JavaScript skills are what make you a better React developer. There are no barriers to entry. A JavaScript developer can become a productive React developer in a few hours.</li></ul><p>But there’s a lot more to it than just that. Let’s attempt to cover all the reasons behind React’s rising popularity. One reason is its Virtual DOM (React’s reconciliation algorithm). We’ll work through an example to show the actual practical value of having such an algorithm at your command.</p><p>React’s official definition states that it’s a <em>JavaScript library for building User Interfaces</em>. It’s important to understand the two different parts of this definition:</p><ol><li>React is a <em>JavaScript library</em>. It’s not a framework. It’s not a complete solution and we’ll often need to use more libraries with React to form any solution. React does not assume anything about the other parts in any full solution. It focuses on just one thing, and on doing that thing very well.</li><li>The thing that React does really well is the second part of the definition: <em>building User Interfaces</em>. A User Interface is anything we put in front of users to have them interact with a machine. User Interfaces are everywhere, from the simple buttons on a microwave to the dashboard of a space shuttle. If the device we’re trying to interface can understand JavaScript, we can use React to describe a User Interface for it.</li></ol><p>Since Web browsers understand JavaScript, we can use React to describe Web User Interfaces. I like to use the word <em>describe</em> here because that’s what <em>we</em> basically do with React, we just tell it what we want and React will build the actual User Interfaces, on our behalf, in the Web browser. Without React or similar libraries, we would need to manually build User Interfaces with native Web APIs and JavaScript.</p><p>When you hear the statement that “React is declarative,” this is exactly what it means, we describe User Interfaces with React and tell it what we want (not how to do it). React will take care of the “how” and translate our declarative descriptions (which we write in the React language) to actual User Interfaces in the browser. React shares this simple declarative power with HTML itself, but with React, we get to be declarative for HTML interfaces that represent dynamic data, not just static data.</p><p>React has three main design concepts that drive its popularity:</p><h4 id="1-the-use-of-reusable-composable-and-stateful-components">1 — The use of reusable, composable, and stateful components</h4><p>In React, we describe User Interfaces using components. You can think of components as simple functions (in any programming language). We call functions with some input and they give us some output. We can reuse functions as needed and compose bigger functions from smaller ones.</p><p>Components are exactly the same; we call their input “properties” and “state”, and a component output is a description of a User Interface (which is similar to HTML for browsers). We can reuse a single component in multiple User Interfaces, and components can contain other components.</p><p>Unlike pure functions however, a full React component can have a private state to hold data that may change over time.</p><h4 id="2-the-nature-of-reactive-updates">2 — The nature of reactive updates</h4><p>React’s name is the simple explanation for this concept. When the state of a component (the input) changes, the User Interface it represents (the output) changes as well. This change in the description of the User Interface has to be reflected in the device we’re working with.</p><p>In a browser, we need to regenerate the HTML views in the Document Object Model (DOM). With React, we do not need to worry about <em>how</em> to reflect these changes, or even manage <em>when</em> to take changes to the browser; React will simply <em>react</em> to the state changes and automatically update the DOM when needed.</p><h4 id="3-the-virtual-representation-of-views-in-memory">3 — The virtual representation of views in memory</h4><p>With React, we write HTML using JavaScript. We rely on the power of JavaScript to generate HTML that depends on some data, rather than enhancing HTML to make it work with that data. Enhancing HTML is what other JavaScript frameworks usually do. For example, Angular extends HTML with features like loops, conditionals, and others.</p><p>When we receive just the data from the server (in the background, with AJAX), we need something more than HTML to work with that data. It’s either using an enhanced HTML, or using the power of JavaScript itself to generate the HTML. Both approaches have advantages and disadvantages. React embraces the latter one, with the argument that the advantages are stronger than the disadvantages.</p><p>In fact, there is one major advantage that can make the case for this approach by itself; using JavaScript to render HTML makes it easy for React to keep a virtual representation of HTML in memory (which is commonly known as <em>The Virtual DOM</em>). React uses the Virtual DOM to render an HTML tree virtually first, and then, every time a state changes and we get a new HTML tree that needs to be taken to the browser’s DOM, instead of writing the whole new tree React will only write the difference between the new tree and the previous tree (since React has both trees in memory). This process is known as <em>Tree Reconciliation</em>, and I think, it is the best thing that has happened in Web Development since AJAX!</p><p>In the following example, we’ll focus on this last concept and see a simple practical example of the tree reconciliation process and the big difference it makes. We’ll write the same HTML example twice, first using native Web APIs and vanilla JavaScript, and then we’ll see how to describe the same HTML tree with React.</p><p>To purely focus on this last concept, we will not be using components, and we will mock a state change operation using a JavaScript timer. We are also not going to use JSX, although using JSX will make for a much simpler code. I use JSX all the time when I write React, but working with React API directly in this example will hopefully make you understand this concept much better.</p><h4 id="react-s-reconciliation-algorithm-example">React’s reconciliation algorithm example</h4><p>To follow along with this example, you need a browser and a code editor. You can actually use an online coding playground, but I’ll use local files and test them directly in a browser (we don’t need a web server):</p><p>We’ll start this example from scratch. Create a new directory, and launch your favorite editor there:</p><pre><code>mkdir react-democd react-demoatom .</code></pre><p>Create an <code>index.html</code> file in that directory, and put a standard HTML template in there. Include in that template a <code>script.js</code> file and put a <code>console.log</code> statement in that script to test that the include works:</p><pre><code class="language-html">&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;meta charset="utf-8"&gt;
&lt;title&gt;React Demo&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;script src="script.js"&gt;&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre><p>Open the <code>index.html</code> file in your browser and make sure you can see the empty template without problems, and that you can see in the Console dev-tools tab the <code>console.log</code> test message that you put in <code>script.js</code>:</p><pre><code>open index.html # On Mac
&lt;div class="demo"&gt;
Hello JS
&lt;/div&gt;
`;</code></pre><p>To control the content of this <code>div</code>, we can use the <code>innerHTML</code> setter call on the <code>div</code> element directly. We can use this call to supply any HTML template that we want inserted in the DOM. Let's insert a <code>div</code> element with a class of "demo" and the string "Hello JS" as its content:</p><pre><code class="language-js">jsContainer.innerHTML = `  &lt;div class="demo"&gt;    Hello JS  &lt;/div&gt;`;ReactDOM.render(
/* TODO: React's version of the HTML template */,
reactContainer
)</code></pre><p>Make sure this works in the browser. You should see the “Hello JS” line on the screen now.</p><p>This demo div is our User Interface so far. It’s a very simple one. We just output a text for the user to see.</p><p>Both <code>document.getElementById</code> and <code>element.innerHTML</code> are actually part of the native DOM Web API. We are communicating with the browser directly here using the supported APIs of the Web platform. When we write React code, however, we use the React API instead, and we let React communicate with the browser using the DOM Web API.</p><p>React acts like our <em>agent</em> for the browser, and we <em>mostly</em> need to communicate with just React, our agent, and not the browser itself. I say mostly because there are cases where we still need to communicate with the browser, but those are rare.</p><p>To create the exact same User Interface that we have so far but with React API this time, let’s create another <code>div</code> element and give it an id of <code>"react"</code>. In <code>index.html</code>, right under the <code>div#js</code> element, add:</p><pre><code>&lt;div id="react"&gt;&lt;/div&gt;</code></pre><p>Now, in <code>script.js</code>, create a new container constant for the new <code>div</code>:</p><pre><code>const reactContainer = document.getElementById("react");</code></pre><p>This container will be the only call we make to the native web API. ReactDOM needs this container to know where to host our application in the DOM.</p><p>With the react container identified, we can now use the ReactDOM library to <code>render</code> React's version of the HTML template to this container:</p><pre><code class="language-js">ReactDOM.render(
/* TODO: React's version of the HTML template */,
reactContainer
)</code></pre><p>What we’re going to do next is your first milestone in truly understanding the React library. Remember when I told you that with React we write HTML using JavaScript? This is exactly what we are going to do next.</p><p>To write our simple HTML User Interface, we are going to use JavaScript calls to React API, and by the end of the example you’ll have a better picture about the reason for doing so.</p><p>Instead of working with strings (as we did in the native JavaScript example above), in React, we work with <em>objects</em>. Any HTML string will be represented as an object using a <code>React.createElement</code> call (which is the core function in the React API).</p><p>Here’s the equivalent HTML User Interface we have so far with React:</p><pre><code>ReactDOM.render(
React.createElement(
"div",
{ className: "demo" },
"Hello React"
),
reactContainer
);</code></pre><p><code>React.createElement</code> has many arguments:</p><ul><li>The first argument is the HTML tag, which is <code>div</code> in our example.</li><li>The second argument is an object that represents any attributes we want this tag to have. To match the native JS example we used <code>{ className: "demo" }</code> which translates to <code>class="demo"</code>. Note how we used <code>className</code> instead of <code>class</code> in the attributes because with React it's all JavaScript that matches the Web API, not HTML itself.</li><li>The third argument is the content of the element. We’ve put a “Hello React” string in there.</li></ul><p>We can test this now. The browser should render both “Hello JS” and “Hello React”. Let’s style the demo divs as a box, using this CSS, just so that we can visually split the screen. In <code>index.html</code>:</p><pre><code>&lt;style media="screen"&gt;
.demo {
border: 1px solid #ccc;
margin: 1em;
padding: 1em;
}
&lt;div class="demo"&gt;
Hello JS
&lt;input /&gt;
&lt;/div&gt;
`;</code></pre><p>We can do the same with React by adding more arguments after the 3rd argument for <code>React.createElement</code>. To match what we did in the native JS example, we can add a 4th argument that is another <code>React.createElement</code> call that renders an <code>input</code> element (remember, every HTML element is an object):</p><pre><code class="language-js">ReactDOM.render(
React.createElement(
"div",
{ className: "demo" },
"Hello React",
React.createElement("input")
),
reactContainer
);</code></pre><p><em>At this point, if you’re questioning what we’re doing and thinking “this is complicating a simple process”, you are totally right! But there is a very good reason for what we’re doing. Keep reading.</em></p><p>Let’s also render a timestamp in both versions. In the JS version, let’s put the timestamp in a paragraph element. We can use a call to <code>new Date()</code> to display a simple timestamp:</p><pre><code class="language-js">jsContainer.innerHTML = `
&lt;div class="demo"&gt;
Hello JS
&lt;input /&gt;
&lt;p&gt;${new Date()}&lt;/p&gt;
&lt;/div&gt;
`;</code></pre><p>To do the same in React, we add a 5th argument to the top-level <code>div</code> element. This new 5th argument is another <code>React.createElement</code> call, this time using a <code>p</code> tag, with no attributes, and the <code>new Date()</code> string for content:</p><pre><code class="language-js">ReactDOM.render(
React.createElement(
"div",
{ className: "demo" },
"Hello React",
React.createElement("input"),
React.createElement(
"p",
null,
new Date().toString()
)
),
reactContainer
const reactContainer = document.getElementById("react");
const render = () =&gt; {
jsContainer.innerHTML = `
&lt;div class="demo"&gt;
Hello JS
&lt;input /&gt;
&lt;p&gt;${new Date()}&lt;/p&gt;
&lt;/div&gt;
`;
ReactDOM.render(
React.createElement(
"div",
{ className: "demo" },
"Hello React ",
React.createElement("input"),
React.createElement(
"p",
null,
new Date().toString()
)
),
reactContainer
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
