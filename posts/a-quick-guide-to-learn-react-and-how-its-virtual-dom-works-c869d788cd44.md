---
card: "https://cdn-media-1.freecodecamp.org/images/0*vQXljCx6DN_aNLWD.jpg"
tags: [Development]
description: "Do you want to learn React without crawling the documentation"
author: "Milad E. Fahmy"
title: "A quick guide to learn React and how its Virtual DOM works"
created: "2021-08-16T11:47:17+02:00"
modified: "2021-08-16T11:47:17+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-development tag-programming tag-web-development tag-javascript tag-technology ">
<header class="post-full-header">
<h1 class="post-full-title">A quick guide to learn React and how its Virtual DOM works</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/0*vQXljCx6DN_aNLWD.jpg 300w,
https://cdn-media-1.freecodecamp.org/images/0*vQXljCx6DN_aNLWD.jpg 600w,
https://cdn-media-1.freecodecamp.org/images/0*vQXljCx6DN_aNLWD.jpg 1000w,
https://cdn-media-1.freecodecamp.org/images/0*vQXljCx6DN_aNLWD.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/0*vQXljCx6DN_aNLWD.jpg" alt="A quick guide to learn React and how its Virtual DOM works">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<blockquote>This is part of my “React for beginners” series on introducing React, its core features and best practices to follow. More articles are coming!</blockquote><blockquote><a href="/news/how-to-bring-reactivity-into-react-with-states-exclude-redux-solution-4827d293dfc4/">Next article &gt;</a></blockquote><p>Do you want to learn React without crawling <a href="https://reactjs.org/docs/hello-world.html" rel="noopener">the documentation</a> (well written by the way)? You clicked on the right article.</p><p>We will learn how to run React with a single HTML file and then expose ourselves to a first snippet.</p><p>By the end, you will be able to explain these concepts: props, functional component, JSX, and Virtual DOM.</p><p>The goal is to make a watch which displays hours and minutes. React offers to architect our code with components. `Let’s create our watch component.</p><pre><code class="language-html">&lt;!-- Skipping all HTML5 boilerplate --&gt;
&lt;script src="https://unpkg.com/react@16.2.0/umd/react.development.js"&gt;&lt;/script&gt;
&lt;script src="https://unpkg.com/react-dom@16.2.0/umd/react-dom.development.js"&gt;&lt;/script&gt;
&lt;!-- For JSX support (with babel) --&gt;
&lt;script src="https://unpkg.com/babel-standalone@6.24.2/babel.min.js" charset="utf-8"&gt;&lt;/script&gt;
&lt;div id="app"&gt;&lt;/div&gt; &lt;!-- React mounting point--&gt;
&lt;script type="text/babel"&gt;
class Watch extends React.Component {
render() {
return &lt;div&gt;{this.props.hours}:{this.props.minutes}&lt;/div&gt;;
}
}
ReactDOM.render(&lt;Watch hours="9" minutes="15"/&gt;, document.getElementById('app'));
&lt;/script&gt;</code></pre><p>Ignore HTML boilerplate and script imports for dependencies (with <a href="https://unpkg.com/#/" rel="noopener">unpkg</a>, see <a href="https://raw.githubusercontent.com/reactjs/reactjs.org/master/static/html/single-file-example.html" rel="noopener">React example</a>). The few remaining lines are actually React code.</p><p>First, define the Watch component and its template. Then mount React into the DOM and ask to render a watch.</p><h3 id="inject-data-into-the-component">Inject data into the component</h3><p>Our watch is quite stupid, it displays the hours and minutes we provided to it.</p><p>You can try to play around and change the value for those properties (called <strong>props</strong> in React). It will always display what you asked for even if it’s not numbers.</p><p>This kind of React component with only a render function are <strong>functional component.</strong> They have a more concise syntax compared to classes.</p><pre><code class="language-js">const Watch = (props) =&gt;
&lt;div&gt;{props.hours}:{props.minutes}&lt;/div&gt;;
ReactDOM.render(&lt;Watch hours="Hello" minutes="World"/&gt;, document.getElementById('app'));</code></pre><p>Props are only data passed to a component, generally by a surrounding component. The component uses props for business logic and rendering.</p><p>But as soon as props do not belong to the component they are <strong>immutable</strong>. Thus, the component which provided the props is the only piece of code able to update props values.</p><p>Using props is pretty straightforward. Create a DOM node with your component name as the tag name. Then give it attributes named after props. Then the props will be available through <code>this.props</code> in the component.</p><h3 id="what-about-unquoted-html">What about unquoted HTML ?</h3><p>I was sure you will notice the unquoted HTML returned by the <code>render</code> function. This code is using JSX<strong> </strong>language, it’s a shorthand syntax to define HTML template in React components.</p><pre><code class="language-js">// Equivalent to JSX: &lt;Watch hours="9" minutes="15"/&gt;
React.createElement(Watch, {'hours': '9', 'minutes': '15'});</code></pre><p>Now you may want to avoid JSX to define the component’s template. Actually, JSX looks like <a href="https://en.wikipedia.org/wiki/Syntactic_sugar" rel="noopener">syntactic sugar</a>.</p><p>Take a look at the following snippet which shows both JSX and React syntax to build your opinion.</p><pre><code class="language-js">// Using JS with React.createElement
React.createElement('form', null,
React.createElement('div', {'className': 'form-group'},
React.createElement('label', {'htmlFor': 'email'}, 'Email address'),
React.createElement('input', {'type': 'email', 'id': 'email', 'className': 'form-control'}),
),
React.createElement('button', {'type': 'submit', 'className': 'btn btn-primary'}, 'Submit')
)
// Using JSX
&lt;form&gt;
&lt;div className="form-group"&gt;
&lt;label htmlFor="email"&gt;Email address&lt;/label&gt;
&lt;input type="email" id="email" className="form-control"/&gt;
&lt;/div&gt;
&lt;button type="submit" className="btn btn-primary"&gt;Submit&lt;/button&gt;
&lt;/form&gt;</code></pre><h3 id="going-further-with-the-virtual-dom">Going further with the Virtual DOM</h3><p>This last part is more complicated but very interesting. It will help you to understand how React is working under the hood.</p><p>Updating elements on a webpage (a node in the DOM tree) involves using the DOM API. It will repaint the page but it can be slow (see <a href="https://hashnode.com/post/the-one-thing-that-no-one-properly-explains-about-react-why-virtual-dom-cisczhfj41bmssp53mvfwmgrq" rel="noopener">this article</a> for why).</p><p>Many frameworks such as React and Vue.js get around this problem. They come up with a solution called the Virtual DOM.</p><pre><code class="language-json">{
"type":"div",
"props":{ "className":"form-group" },
"children":[
{
"type":"label",
"props":{ "htmlFor":"email" },
"children":[ "Email address"]
},
{
"type":"input",
"props":{ "type":"email", "id":"email", "className":"form-control"},
"children":[]
}
]
}</code></pre><p>The idea is simple. Reading and updating the DOM tree is very expensive. So make as few changes as possible and update as few nodes as possible.</p><p>Reducing calls to DOM API involves keeping DOM tree representation in memory. Since we are talking about JavaScript frameworks, choosing JSON sounds legitimate.</p><p>This approach immediately reflects changes in the Virtual DOM.</p><p>Besides, it gathers a few updates to apply later on the Real DOM at once (to avoid performance issues).</p><p>Do you remember <code>React.createElement</code> ? Actually, this function (called directly or through JSX) creates a new node in the Virtual DOM.</p><pre><code class="language-js">// React.createElement naive implementation (using ES6 features)
function createElement(type, props, ...children) {
return { type, props, children };
}</code></pre><p>To apply updates, the Virtual DOM core feature comes into play, the <a href="https://reactjs.org/docs/reconciliation.html" rel="noopener">reconciliation algorithm</a>.</p><p>Its job is to come up with the most optimized solution to resolve the difference between previous and current Virtual DOM state.</p><p>And then apply the new Virtual DOM to the real DOM.</p><h3 id="further-readings">Further readings</h3><p>This article goes far on React internal and Virtual DOM explanations. Still, it’s important to know a bit about how a framework works when using it.</p><p>If you want to learn how the Virtual DOM works in details, follow my reading recommendations. You can write your own Virtual DOM and <a href="http://www.html5rocks.com/en/tutorials/internals/howbrowserswork/" rel="noopener">learn about DOM rendering</a>.</p><blockquote><a href="https://medium.com/@deathmood/how-to-write-your-own-virtual-dom-ee74acc13060" rel="noopener"><strong>How to write your own Virtual DOM</strong></a>‌‌</blockquote><blockquote><a href="https://medium.com/@deathmood/how-to-write-your-own-virtual-dom-ee74acc13060" rel="noopener"><em>There are two things you need to know to build your own Virtual DOM. You do not even need to dive into React’s source…</em></a></blockquote><p>Thank you for reading. Sorry if this is too technical for your first step in React. But I hope now you are aware of what props, functional component, JSX, and Virtual DOM are.</p><p><strong>If you found this article useful, please click on the </strong>? <strong>button a few times to make others find the article and to show your support! ?</strong></p><p><strong>Don’t forget to follow me to get notified of my upcoming articles </strong>?</p><blockquote>This is part of my “React for beginners” series on introducing React, its core features and best practices to follow.</blockquote><blockquote><a href="/news/how-to-bring-reactivity-into-react-with-states-exclude-redux-solution-4827d293dfc4/">Next article &gt;</a></blockquote><h3 id="check-out-my-other-articles">Check out my <a href="https://medium.com/@jbardon/latest" rel="noopener">Other</a> Articles</h3><h4 id="-javascript">➥ JavaScript</h4><ul><li><a href="https://medium.freecodecamp.org/how-to-improve-your-javascript-skills-by-writing-your-own-web-development-framework-eed2226f190" rel="noopener">How to Improve Your JavaScript Skills by Writing Your Own Web Development Framework</a> ?</li><li><a href="https://medium.freecodecamp.org/common-mistakes-to-avoid-while-working-with-vue-js-10e0b130925b" rel="noopener">Common Mistakes to Avoid While Working with Vue.js</a></li></ul><h4 id="-tips-tricks">➥ Tips &amp; tricks</h4><ul><li><a href="https://medium.com/dailyjs/stop-painful-javascript-debug-and-embrace-intellij-with-source-map-6fe68eda8555" rel="noopener">Stop Painful JavaScript Debug and Embrace Intellij with Source Map</a></li><li><a href="https://medium.com/dailyjs/how-to-reduce-enormous-javascript-bundle-without-efforts-59fe37dd4acd" rel="noopener">How To Reduce Enormous JavaScript Bundles Without Effort</a></li></ul><p>Originally published at <a href="https://www.linkedin.com/pulse/intro-react-virtual-dom-jeremy-bardon" rel="noopener">www.linkedin.com</a> on February 6, 2018.</p>
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
