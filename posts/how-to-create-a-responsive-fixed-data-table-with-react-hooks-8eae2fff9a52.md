---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9ca76f740569d1a4ca772f.jpg"
tags: [React]
description: "One of my projects uses a library called Fixed-Data-Table-2 ("
author: "Milad E. Fahmy"
title: "How to create a responsive Fixed-Data-Table with React Hooks"
created: "2021-08-16T11:34:42+02:00"
modified: "2021-08-16T11:34:42+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-react tag-tech tag-technology tag-functional-programming tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">How to create a responsive Fixed-Data-Table with React Hooks</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9ca76f740569d1a4ca772f.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9ca76f740569d1a4ca772f.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9ca76f740569d1a4ca772f.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9ca76f740569d1a4ca772f.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9ca76f740569d1a4ca772f.jpg" alt="How to create a responsive Fixed-Data-Table with React Hooks">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Their documentation <a href="https://schrodinger.github.io/fixed-data-table-2/example-responsive.html">demonstrates a responsive table</a> that resizes based on the browser’s width and height.</p>
<p><img src="https://cdn-media-1.freecodecamp.org/images/1*0fuT32J4E_8xiHjivI9q5A.png" alt=""></p>
<p>I thought it’d be cool to share this example using React Hooks.</p>
<h3 id="whatarereacthooks">What are React Hooks?</h3>
<p>They’re functions that give you React features like state and lifecycle hooks without ES6 classes.</p>
<p>Some benefits are</p>
<ul>
<li>isolating stateful logic, making it easier to test</li>
<li>sharing stateful logic without render props or higher-order components</li>
<li>separating your app’s concerns based on logic, not lifecycle hooks</li>
<li>avoiding ES6 classes, because they’re quirky, <strong>not actually classes</strong>, and trip up even experienced JavaScript developers</li>
</ul>
<p>For more detail see <a href="https://reactjs.org/docs/hooks-intro.html">React’s official Hooks intro</a>.</p>
<h4 id="warningdontuseinproduction">WARNING: Don’t use in production!</h4>
<p>At the time of this writing, <strong>Hooks are in alpha. Their API can change at any time.</strong></p>
<p>I recommend you experiment, have fun, and use Hooks in your side projects, but not in production code until they’re stable.</p>
<h3 id="thegoal">The goal</h3>
<p><img src="https://cdn-media-1.freecodecamp.org/images/1*Eb3EXmna0JSVlnUfp4GIBg.png" alt=""></p>
<p>We’ll be building a responsive Fixed-Data-Table. It won’t be too narrow or too wide for our page, it’ll fit just right!</p>
<h3 id="setup">Setup</h3>
<p>Here are the <a href="https://github.com/yazeedb/Responsive-FDT2-Hooks/">GitHub</a> and <a href="https://codesandbox.io/s/1vpm1z193j">CodeSandbox</a> links.</p>
<pre><code>git clone https://github.com/yazeedb/Responsive-FDT2-Hooks/
cd Responsive-FDT2-Hooks
npm install
</code></pre>
<p>The <code>master</code> branch has the finished project, so checkout the <code>start</code> branch if you wish to follow along.</p>
<p><code>git checkout start</code></p>
<p>And run the project.</p>
<p><code>npm start</code></p>
<p>The app should be running on <code>localhost:3000</code>. Let’s start coding.</p>
<h4 id="importingtablestyles">Importing table styles</h4>
<p>First you’ll want to import FDT2’s stylesheet in <code>index.js</code>, so your table doesn’t look whacky.</p>
<p><img src="https://cdn-media-1.freecodecamp.org/images/1*NeHwi_fxuf7Ojhd4edJ4cg.png" alt=""></p>
<h4 id="generatingfakedata">Generating fake data</h4>
<p>Our table needs data, right? Create a file in <code>src</code> folder called <code>getData.js</code>.</p>
<p>We’ll use the awesome <a href="https://www.npmjs.com/package/faker">faker.js</a> library to generate our data. It already came with your <code>npm install</code>.</p>
<p>Here’s the source if you want to copy/paste.</p>
<pre><code class="language-js">import faker from 'faker';
const createFakeRowData = () =&gt; ({
firstName: faker.name.firstName(),
lastName: faker.name.lastName(),
email: faker.internet.email(),
city: faker.address.city(),
salary: faker.random
.number({
min: 50000,
max: 500000
})
.toLocaleString('en-US', {
style: 'currency',
currency: 'USD'
})
});
export default () =&gt; Array.from({ length: 2000 }, createFakeRowData);
</code></pre>
<p><code>createFakeRowData</code> returns an object with a full name, email, city, and salary in US dollars.</p>
<p>Our exported function returns 2000 of them.</p>
<h3 id="theunresponsivetable">The unresponsive table</h3>
<p>We have our data, let’s code up the table now.</p>
<p>At the top of <code>index.js</code>, import our data and FDT2 components.</p>
<pre><code class="language-jsx">import { Table, Column, Cell } from 'fixed-data-table-2';
import getData from './getData';
</code></pre>
<p>And use them like so.</p>
<pre><code class="language-jsx">function App() {
const data = getData();
return (
&lt;div className="App"&gt;
&lt;Table
rowHeight={50}
rowsCount={data.length}
headerHeight={50}
width={1000}
height={500}
&gt;
&lt;Column
columnKey="firstName"
header={&lt;Cell&gt;First Name&lt;/Cell&gt;}
width={130}
cell={({ rowIndex, columnKey }) =&gt; {
return &lt;Cell&gt;{data[rowIndex][columnKey]}&lt;/Cell&gt;;
}}
/&gt;
&lt;Column
columnKey="lastName"
header={&lt;Cell&gt;Last Name&lt;/Cell&gt;}
width={130}
cell={({ rowIndex, columnKey }) =&gt; {
return &lt;Cell&gt;{data[rowIndex][columnKey]}&lt;/Cell&gt;;
}}
/&gt;
&lt;Column
columnKey="email"
header={&lt;Cell&gt;Email&lt;/Cell&gt;}
width={320}
cell={({ rowIndex, columnKey }) =&gt; {
return &lt;Cell&gt;{data[rowIndex][columnKey]}&lt;/Cell&gt;;
}}
/&gt;
&lt;Column
columnKey="city"
header={&lt;Cell&gt;City&lt;/Cell&gt;}
width={180}
cell={({ rowIndex, columnKey }) =&gt; {
return &lt;Cell&gt;{data[rowIndex][columnKey]}&lt;/Cell&gt;;
}}
/&gt;
&lt;Column
columnKey="salary"
header={&lt;Cell&gt;Salary&lt;/Cell&gt;}
width={180}
cell={({ rowIndex, columnKey }) =&gt; {
return &lt;Cell&gt;{data[rowIndex][columnKey]}&lt;/Cell&gt;;
}}
/&gt;
&lt;/Table&gt;
&lt;/div&gt;
);
}
</code></pre>
<p>We configure the table with our data and create a <code>Column</code> for each field we want displayed.</p>
<p><code>getData</code> objects contain a first/last name, email, city, and salary, so we need a column for each.</p>
<p>Our UI is now looking like this.</p>
<p><img src="https://cdn-media-1.freecodecamp.org/images/1*s8ekNyjl6FPxzeZnlprF2g.png" alt=""></p>
<p>Try resizing your browser window, you’ll notice it isn’t responsive at all. It’s either too big or too small for your viewport and can leave excess space.</p>
<h3 id="escapetotheimpure">Escape to the impure</h3>
<p>As we’ve learned, React’s declarative nature lets you write your UI using pure, deterministic, and easily testable functions.</p>
<p><strong>The same input should always return the same output.</strong></p>
<p>However, we sometimes need to visit the “impure” world, for DOM manipulation, adding events such as listeners, subscriptions, and timers.</p>
<h4 id="hocsandrenderprops">HOCS and render props</h4>
<p>Render props and higher-order components (HOCS) are the standard solution, but have some tradeoffs that Hooks are now trying to solve.</p>
<h3 id="usinghooks">Using Hooks</h3>
<p>Hooks are the new escape hatch to use imperative code. In our case, getting the window size is the effect we’re after.</p>
<p>Create a new file called <code>useWindowSize.js</code>.</p>
<p>We’ll need two things to achieve this:</p>
<ol>
<li>Listen to the window’s <code>resize</code> event, so we’re notified of when it changes</li>
<li>Save the width/height to share with our table</li>
</ol>
<p>Two hooks can help:</p>
<ol>
<li><code>useEffect</code></li>
<li><code>useState</code></li>
</ol>
<h4 id="useeffect">useEffect</h4>
<p>This will likely replace your <code>componentDidMount</code>, <code>componentDidUpdate</code>, and <code>componentWillUnmount</code> lifecycle hooks once it’s stabilized.</p>
<p><code>useEffect</code>'s perfect for most initialization logic and reading the DOM.</p>
<p>It’s where we’ll set up our window <code>resize</code> event listeners.</p>
<p>For more detail, see <a href="https://reactjs.org/docs/hooks-reference.html#useeffect">the official docs</a>.</p>
<h4 id="usestate"><code>useState</code></h4>
<p>Super simple, this Hook returns a stateful value and a function to update it. Once we capture the window’s width/height, we’ll have <code>useState</code> track it.</p>
<h3 id="writingourcustomhook">Writing our custom <em>Hook</em></h3>
<p>According to <a href="https://reactjs.org/docs/hooks-custom.html#extracting-a-custom-hook">the official docs</a>:</p>
<blockquote>
<p><strong>A custom Hook is a JavaScript function whose name starts with ”use” and that may call other Hooks.</strong></p>
</blockquote>
<p>Our custom hook will be called <code>useWindowSize</code>, and it’ll call the <code>useState</code> and <code>useEffect</code> hooks.</p>
<p>This Hook’s mainly from <a href="https://medium.com/@gabe_ragland">Gabe Ragland</a>’s <code>useWindowSize</code> on <a href="https://gist.github.com/gragland/4e3d9b1c934a18dc76f585350f97e321">useHooks.com</a>.</p>
<pre><code class="language-jsx">// `useWindowSize.js`
import { useState, useEffect } from 'react';
export default () =&gt; {
const getSize = () =&gt; {
return {
width: window.innerWidth,
height: window.innerHeight
};
};
const [windowSize, setWindowSize] = useState(getSize);
useEffect(() =&gt; {
const handleResize = () =&gt; {
setWindowSize(getSize());
};
window.addEventListener('resize', handleResize);
return () =&gt; {
window.removeEventListener('resize', handleResize);
};
}, []);
return windowSize;
};
</code></pre>
<p>Let’s break this down.</p>
<h4 id="gettingthewindowsize">Getting the window size</h4>
<pre><code class="language-js">const getSize = () =&gt; {
return {
width: window.innerWidth,
height: window.innerHeight
};
};
</code></pre>
<p><code>getSize</code> simply returns the window’s <code>innerWidth</code> and <code>innerHeight</code>.</p>
<h4 id="initializingusestate">Initializing useState</h4>
<pre><code class="language-js">const [windowSize, setWindowSize] = useState(getSize);
</code></pre>
<p><code>useState</code> can take an initial value or a function that returns a value.</p>
<p>In this case we want the window’s dimensions to start, so <code>getSize</code> is the perfect initializer.</p>
<p><code>useState</code> then returns an array, the first index is the value and the second index is the updater function.</p>
<h4 id="configuringuseeffect">Configuring useEffect</h4>
<pre><code class="language-js">useEffect(() =&gt; {
const handleResize = () =&gt; {
setWindowSize(getSize());
};
window.addEventListener('resize', handleResize);
return () =&gt; {
window.removeEventListener('resize', handleResize);
};
}, []);
</code></pre>
<p><code>useEffect</code> takes a function that will run your desired effect.</p>
<p>Whenever the window size changes, <code>handleResize</code> sets the state by giving <code>setWindowSize</code> the latest width/height.</p>
<p><strong>Cleanup Logic</strong></p>
<p>Our effect function then returns a <strong>new function</strong>, which <code>useEffect</code> recognizes as cleanup logic.</p>
<pre><code class="language-js">return () =&gt; {
window.removeEventListener('resize', handleResize);
};
</code></pre>
<p>When we leave the page or somehow unmount our component, this cleanup function runs and removes the <code>resize</code> event listener. This helps prevent memory leaks.</p>
<p><strong>useEffect’s Second Argument</strong></p>
<p><code>useEffect</code>'s first argument is the function handling our logic, but we also gave it a second argument: an empty array.</p>
<pre><code class="language-js">useEffect(() =&gt; { ... }, []); // empty array
</code></pre>
<p><strong>Why an empty array?</strong></p>
<p><code>useEffect</code>'s second argument is an array of values to watch over. If any of those values change <code>useEffect</code> runs again.</p>
<p>We’re just setting/removing event listeners, which only needs to happen once.</p>
<p>An empty array is how we communicate “just run once” to <code>useEffect</code>.</p>
<blockquote>
<p>Empty array = no values ever change = just run once</p>
</blockquote>
<h4 id="returnwindowsize">Return windowSize</h4>
<p>Now that our effect’s set up, just return <code>windowSize</code>. As the browser’s resized, <code>windowSize</code> will be updated.</p>
<p><img src="https://cdn-media-1.freecodecamp.org/images/1*g-8DAewSVWqhldzO1uYguw.png" alt=""></p>
<h3 id="usingourcustomhook">Using our custom Hook</h3>
<p>Time to throw our Hook at Fixed-Data-Table2!</p>
<p>Back in <code>index.js</code>, go ahead and import <code>useWindowSize</code>.</p>
<p><img src="https://cdn-media-1.freecodecamp.org/images/1*LlF4n8uG10zDXDLWP3ti4A.png" alt=""></p>
<p>And use it like so.</p>
<p><img src="https://cdn-media-1.freecodecamp.org/images/1*X8Fl8ZHN1RN9rIKnhng5Ug.png" alt=""></p>
<p>For fun you can <code>console.log(windowSize)</code> and watch it update in real-time.</p>
<p><img src="https://cdn-media-1.freecodecamp.org/images/1*lU6qV0tPmuM1zxrRjxT3gQ.gif" alt=""></p>
<p>Cool, we get back an object of the window’s <code>width</code> and <code>height</code>!</p>
<p>Instead of hardcoding our table’s width and height, we can use our Hook’s exposed state.</p>
<p><img src="https://cdn-media-1.freecodecamp.org/images/1*ufGH_7yvDH8IvdZA3JuOyA.png" alt=""></p>
<p>Now your table should adjust to the window’s dimensions.</p>
<p><img src="https://cdn-media-1.freecodecamp.org/images/1*jwBuYI8qvS6NZjeL8-8m9g.gif" alt=""></p>
<p>I hope you enjoyed this tutorial!</p>
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
