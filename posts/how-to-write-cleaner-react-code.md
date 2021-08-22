---
card: "/images/default.jpg"
tags: [React]
description: As React developers, we all want to write cleaner code that i
author: "Milad E. Fahmy"
title: "How to Write Cleaner React Code"
created: "2021-08-15T19:26:44+02:00"
modified: "2021-08-15T19:26:44+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-react tag-clean-code tag-jsx tag-javascript ">
<header class="post-full-header">
<h1 class="post-full-title">How to Write Cleaner React Code</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2021/04/7-ways-to-write-clean-react-code.png 300w,
/news/content/images/size/w600/2021/04/7-ways-to-write-clean-react-code.png 600w,
/news/content/images/size/w1000/2021/04/7-ways-to-write-clean-react-code.png 1000w,
/news/content/images/size/w2000/2021/04/7-ways-to-write-clean-react-code.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2021/04/7-ways-to-write-clean-react-code.png" alt="How to Write Cleaner React Code">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>As React developers, we all want to write cleaner code that is simpler and easier to read. </p>
<p>In this guide, I've put together seven of the top ways that you can start writing cleaner React code today to make building React projects and reviewing your code much easier.</p>
<p>In general, learning how to write cleaner React code will make you a more valuable and overall happier React developer, so let's jump right in!</p>
<blockquote>Want the complete guide to writing clean React code from start to finish? Check out <a href="https://reactbootcamp.com">The React Bootcamp</a>.</blockquote>
<h2 id="1-make-use-of-jsx-shorthands">1. Make use of JSX shorthands</h2>
<p>How do you pass a value of true to a given prop? </p>
<p>In the example below, we're using the prop <code>showTitle</code> to display the title of our app within a Navbar component. </p><pre><code class="language-js">// src/App.js
export default function App() {
return (
&lt;main&gt;
&lt;Navbar showTitle={true} /&gt;
&lt;/main&gt;
);
}
function Navbar({ showTitle }) {
return (
&lt;div&gt;
{showTitle &amp;&amp; &lt;h1&gt;My Special App&lt;/h1&gt;}
&lt;/div&gt;
)
}</code></pre>
<p>Do we need to explicitly set <code>showTitle</code> to the Boolean <code>true</code>? We don't! A quick shorthand to remember is that any prop provided on a component has a default value of true. </p>
<p>So if we add the prop <code>showTitle</code> on Navbar, our title element will be shown:</p><pre><code class="language-js">// src/App.js
export default function App() {
return (
&lt;main&gt;
&lt;Navbar showTitle /&gt;
&lt;/main&gt;
);
}
function Navbar({ showTitle }) {
return (
&lt;div&gt;
{showTitle &amp;&amp; &lt;h1&gt;My Special App&lt;/h1&gt;} // title shown!
&lt;/div&gt;
)
}</code></pre>
<p>Another useful shorthand to remember involves passing string props. When you're passing a prop value that's a string, you don't need to wrap it in curly braces. </p>
<p>If we are setting the title of our Navbar, with the <code>title</code> prop, we can just include its value in double quotes:</p><pre><code class="language-js">// src/App.js
export default function App() {
return (
&lt;main&gt;
&lt;Navbar title="My Special App" /&gt;
&lt;/main&gt;
);
}
function Navbar({ title }) {
return (
&lt;div&gt;
&lt;h1&gt;{title}&lt;/h1&gt;
&lt;/div&gt;
)
}</code></pre>
<h2 id="2-move-unrelated-code-into-a-separate-component">2. Move unrelated code into a separate component</h2>
<p>Arguably the easiest and most important way to write cleaner React code is to get good at abstracting our code into separate React components. </p>
<p>Let's look at the example below. What is our code doing? </p>
<p>Our app is displaying a Navbar component. We are iterating over an array of posts with <code>.map()</code> and displaying their title on the page. </p><pre><code class="language-js">// src/App.js
export default function App() {
const posts = [
{
id: 1,
title: "How to Build YouTube with React"
},
{
id: 2,
title: "How to Write Your First React Hook"
}
];
return (
&lt;main&gt;
&lt;Navbar title="My Special App" /&gt;
&lt;ul&gt;
{posts.map(post =&gt; (
&lt;li key={post.id}&gt;
{post.title}
&lt;/li&gt;
))}
&lt;/ul&gt;
&lt;/main&gt;
);
}
function Navbar({ title }) {
return (
&lt;div&gt;
&lt;h1&gt;{title}&lt;/h1&gt;
&lt;/div&gt;
);
}
</code></pre>
<p>How can we make this cleaner? </p>
<p>Why don't we abstract the code that we're looping over – our posts – and display them in a separate component, which we'll call FeaturedPosts. </p>
<p>Let's do that and take a look at the result:</p><pre><code class="language-js">// src/App.js
export default function App() {
return (
&lt;main&gt;
&lt;Navbar title="My Special App" /&gt;
&lt;FeaturedPosts /&gt;
&lt;/main&gt;
);
}
function Navbar({ title }) {
return (
&lt;div&gt;
&lt;h1&gt;{title}&lt;/h1&gt;
&lt;/div&gt;
);
}
function FeaturedPosts() {
const posts = [
{
id: 1,
title: "How to Build YouTube with React"
},
{
id: 2,
title: "How to Write Your First React Hook"
}
];
return (
&lt;ul&gt;
{posts.map((post) =&gt; (
&lt;li key={post.id}&gt;{post.title}&lt;/li&gt;
))}
&lt;/ul&gt;
);
}
</code></pre>
<p>As you can see, we can now just look at our App component. By reading the names of the components within it, Navbar and FeaturedPosts, we see exactly what our app is displaying. </p>
<h2 id="3-create-separate-files-for-each-component">3. Create separate files for each component</h2>
<p>Going off of our previous example, we are including all of our components within a single file, the app.js file. </p>
<p>Similar to how we abstract code into separate components to make our app more readable, to make our application files more readable, we can put each component that we have into a separate file.</p>
<p>This, again, helps us separate concerns in our application. This means that each file is responsible for just one component and there's no confusion where a component comes from if we want to reuse it across our app:</p><pre><code class="language-js">// src/App.js
import Navbar from './components/Navbar.js';
import FeaturedPosts from './components/FeaturedPosts.js';
export default function App() {
return (
&lt;main&gt;
&lt;Navbar title="My Special App" /&gt;
&lt;FeaturedPosts /&gt;
&lt;/main&gt;
);
}</code></pre><pre><code class="language-js">// src/components/Navbar.js
export default function Navbar({ title }) {
return (
&lt;div&gt;
&lt;h1&gt;{title}&lt;/h1&gt;
&lt;/div&gt;
);
}</code></pre><pre><code class="language-js">// src/components/FeaturedPosts.js
export default function FeaturedPosts() {
const posts = [
{
id: 1,
title: "How to Build YouTube with React"
},
{
id: 2,
title: "How to Write Your First React Hook"
}
];
return (
&lt;ul&gt;
{posts.map((post) =&gt; (
&lt;li key={post.id}&gt;{post.title}&lt;/li&gt;
))}
&lt;/ul&gt;
);
}
</code></pre>
<p>Additionally, by including each individual component within its own file, we avoid one file becoming too bloated. We could easily see our app.js file becoming very large if we wanted to add all of our components into that file. </p>
<h2 id="4-move-shared-functionality-into-react-hooks">4. Move shared functionality into React hooks</h2>
<p>Taking a look at our FeaturedPosts component, let's say instead of displaying static posts data, we want to fetch our post data from an API. </p>
<p>We might do so with the fetch API. You can see the result below for that: </p><pre><code class="language-js">// src/components/FeaturedPosts.js
import React from 'react';
export default function FeaturedPosts() {
const [posts, setPosts] = React.useState([]);
React.useEffect(() =&gt; {
fetch('https://jsonplaceholder.typicode.com/posts')
.then(res =&gt; res.json())
.then(data =&gt; setPosts(data));
}, []);
return (
&lt;ul&gt;
{posts.map((post) =&gt; (
&lt;li key={post.id}&gt;{post.title}&lt;/li&gt;
))}
&lt;/ul&gt;
);
}</code></pre>
<p>However, what if we wanted to perform this request for data across multiple components? </p>
<p>Let's say in addition to a FeaturedPosts component we wanted to create a component called just Posts with the same data. We would have to copy the logic that we used to fetch our data and paste it within that component as well. </p>
<p>To avoid having to do that, why don't we just use a new React hook which we could call <code>useFetchPosts</code>:</p><pre><code class="language-js">// src/hooks/useFetchPosts.js
import React from 'react';
export default function useFetchPosts() {
const [posts, setPosts] = React.useState([]);
React.useEffect(() =&gt; {
fetch('https://jsonplaceholder.typicode.com/posts')
.then(res =&gt; res.json())
.then(data =&gt; setPosts(data));
}, []);
return posts;
}</code></pre>
<p>Once we've created this hook in a dedicated 'hooks' folder we can reuse it in whichever components we like, including our FeaturedPosts component:</p><pre><code class="language-js">// src/components/FeaturedPosts.js
import useFetchPosts from '../hooks/useFetchPosts.js';
export default function FeaturedPosts() {
const posts = useFetchPosts()
return (
&lt;ul&gt;
{posts.map((post) =&gt; (
&lt;li key={post.id}&gt;{post.title}&lt;/li&gt;
))}
&lt;/ul&gt;
);
}</code></pre>
<h2 id="5-remove-as-much-javascript-from-your-jsx-as-possible">5. Remove as much JavaScript from your JSX as possible</h2>
<p>Another very helpful, but often neglected way to clean up our components is to remove as much JavaScript from our JSX as possible. </p>
<p>Let's take a look at the example below:</p><pre><code class="language-js">// src/components/FeaturedPosts.js
import useFetchPosts from '../hooks/useFetchPosts.js';
export default function FeaturedPosts() {
const posts = useFetchPosts()
return (
&lt;ul&gt;
{posts.map((post) =&gt; (
&lt;li onClick={event =&gt; {
console.log(event.target, 'clicked!');
}} key={post.id}&gt;{post.title}&lt;/li&gt;
))}
&lt;/ul&gt;
);
}</code></pre>
<p>We're trying to handle a click event on one of our posts. You can see that our JSX becomes much harder to read. Given that our function is included as an inline function, it obscures the purpose of this component, as well as its related functions. </p>
<p>What can we do to fix this? We can extract the inline function, connected to the <code>onClick</code> into a separate handler, which we can give a an appropriate name like <code>handlePostClick</code>.</p>
<p>Once we do, our JSX becomes readable once again:</p><pre><code class="language-js">// src/components/FeaturedPosts.js
import useFetchPosts from '../hooks/useFetchPosts.js';
export default function FeaturedPosts() {
const posts = useFetchPosts()
function handlePostClick(event) {
console.log(event.target, 'clicked!');
}
return (
&lt;ul&gt;
{posts.map((post) =&gt; (
&lt;li onClick={handlePostClick} key={post.id}&gt;{post.title}&lt;/li&gt;
))}
&lt;/ul&gt;
);
}</code></pre>
<h2 id="6-format-inline-styles-for-less-bloated-code">6. Format inline styles for less bloated code</h2>
<p>A common pattern for React developers is to write inline styles in their JSX. But once again, this makes our code harder to read and harder to write additional JSX:</p><pre><code class="language-js">// src/App.js
export default function App() {
return (
&lt;main style={{ textAlign: 'center' }}&gt;
&lt;Navbar title="My Special App" /&gt;
&lt;/main&gt;
);
}
function Navbar({ title }) {
return (
&lt;div style={{ marginTop: '20px' }}&gt;
&lt;h1 style={{ fontWeight: 'bold' }}&gt;{title}&lt;/h1&gt;
&lt;/div&gt;
)
}</code></pre>
<p>We want to apply this concept of separation of concerns to our JSX styles by moving our inline styles into a CSS stylesheet, which we can import into whatever component we like. </p>
<p>An alternative way to rewrite your inline styles is by organizing them into objects. You can see what such a pattern would look like below:</p><pre><code class="language-js">// src/App.js
export default function App() {
const styles = {
main: { textAlign: "center" }
};
return (
&lt;main style={styles.main}&gt;
&lt;Navbar title="My Special App" /&gt;
&lt;/main&gt;
);
}
function Navbar({ title }) {
const styles = {
div: { marginTop: "20px" },
h1: { fontWeight: "bold" }
};
return (
&lt;div style={styles.div}&gt;
&lt;h1 style={styles.h1}&gt;{title}&lt;/h1&gt;
&lt;/div&gt;
);
}</code></pre>
<h2 id="7-reduce-prop-drilling-with-react-context">7. Reduce prop drilling with React context</h2>
<p>Another essential pattern to employ for your React projects (especially if you have common properties that you want to reuse across your components, and you find yourself writing lots of duplicate props) is to use React Context. </p>
<p>For example, if we wanted to share user data across multiple components, instead of multiple repeat props (a pattern called props drilling), we could use the context feature that's built into the React library. </p>
<p>In our case, if we wanted to reuse user data across our Navbar and FeaturedPosts components, all we would need to do is wrap our entire app in a provider component. </p>
<p>Next, we can pass the user data down on the value prop and consume that context in our individual components with the help of the <code>useContext</code> hook:</p><pre><code class="language-js">// src/App.js
import React from "react";
const UserContext = React.createContext();
export default function App() {
const user = { name: "Reed" };
return (
&lt;UserContext.Provider value={user}&gt;
&lt;main&gt;
&lt;Navbar title="My Special App" /&gt;
&lt;FeaturedPosts /&gt;
&lt;/main&gt;
&lt;/UserContext.Provider&gt;
);
}
// src/components/Navbar.js
function Navbar({ title }) {
const user = React.useContext(UserContext);
return (
&lt;div&gt;
&lt;h1&gt;{title}&lt;/h1&gt;
{user &amp;&amp; &lt;a href="/logout"&gt;Logout&lt;/a&gt;}
&lt;/div&gt;
);
}
// src/components/FeaturedPosts.js
function FeaturedPosts() {
const posts = useFetchPosts();
const user = React.useContext(UserContext);
if (user) return null;
return (
&lt;ul&gt;
{posts.map((post) =&gt; (
&lt;li key={post.id}&gt;{post.title}&lt;/li&gt;
))}
&lt;/ul&gt;
);
}</code></pre>
<h2 id="conclusion">Conclusion</h2>
<p>I hope you find this guide useful when you're trying to improve your own React code to make it cleaner, easier to read, and ultimately more enjoyable to create your React projects.</p>
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
