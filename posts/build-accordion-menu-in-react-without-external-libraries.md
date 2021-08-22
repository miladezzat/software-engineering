---
card: "https://cdn-media-2.freecodecamp.org/w1280/604df0d628094f59be2558d6.jpg"
tags: [React]
description: There are many ways to use accordion menus, like displaying a
author: "Milad E. Fahmy"
title: "How to Build an Accordion Menu in React from Scratch – No External Libraries Required"
created: "2021-08-15T19:26:57+02:00"
modified: "2021-08-15T19:26:57+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-react tag-javascript ">
<header class="post-full-header">
<h1 class="post-full-title">How to Build an Accordion Menu in React from Scratch – No External Libraries Required</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/604df0d628094f59be2558d6.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/604df0d628094f59be2558d6.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/604df0d628094f59be2558d6.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/604df0d628094f59be2558d6.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/604df0d628094f59be2558d6.jpg" alt="How to Build an Accordion Menu in React from Scratch – No External Libraries Required">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>There are many ways to use accordion menus, like displaying a list of FAQs, showing various menus and submenus, displaying the locations of a particular company, and so on.</p>
<p>In this article, we'll see how to build an accordion menu in React completely from scratch, step-by-step, without using any external libraries.</p>
<p>We will be using React Hooks syntax for building this application in React. So if you're new to React Hooks, check out my <a href="https://levelup.gitconnected.com/an-introduction-to-react-hooks-50281fd961fe?source=friends_link&amp;sk=89baff89ec8bc637e7c13b7554904e54">Introduction to React Hooks</a> article to learn the basics of Hooks.</p>
<p><strong>You can see the live demo of the application <a href="https://react-accordion-demo.netlify.app/">here</a>.</strong></p>
<p>So let's get started.</p>
<h2 id="initial-project-setup">Initial Project Setup</h2>
<p>Create a new project using <code>create-react-app</code></p><pre><code class="language-javascript">npx create-react-app react-accordion-demo
</code></pre>
<p>Once the project is created, delete all files from the <code>src</code> folder and create <code>index.js</code>, <code>App.js</code>, and <code>styles.css</code> files inside the <code>src</code> folder. Also, create a new folder with the name <code>utils</code> inside the <code>src</code> folder.</p>
<p>Open the <code>styles.css</code> file and add the contents from <a href="https://github.com/myogeshchavan97/react-accordion-demo/blob/master/src/styles.css">here</a> inside it.</p>
<h2 id="how-to-create-the-initial-pages">How to Create the Initial Pages</h2>
<p>Open the <code>src/App.js</code> file and add the following content inside it:</p><pre><code class="language-jsx">import React from 'react';
const App = () =&gt; {
const accordionData = {
title: 'Section 1',
content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
laborum cupiditate possimus labore, hic temporibus velit dicta earum
suscipit commodi eum enim atque at? Et perspiciatis dolore iure
voluptatem.`
};
const { title, content } = accordionData;
return (
&lt;React.Fragment&gt;
&lt;h1&gt;React Accordion Demo&lt;/h1&gt;
&lt;div className="accordion"&gt;
&lt;div className="accordion-item"&gt;
&lt;div className="accordion-title"&gt;
&lt;div&gt;{title}&lt;/div&gt;
&lt;div&gt;+&lt;/div&gt;
&lt;/div&gt;
&lt;div className="accordion-content"&gt;{content}&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/React.Fragment&gt;
);
};
export default App;
</code></pre>
<p>Here, we use the <code>accordionData</code> object properties to display the accordion content.</p>
<p>For the <code>content</code> property we use ES6 template literal syntax (``) so we can spread the content across multiple lines, and we've used some dummy lorem ipsum text.</p>
<p>Now, open the <code>src/index.js</code> file and add the following content inside it:</p><pre><code class="language-jsx">import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles.css';
ReactDOM.render(&lt;App /&gt;, document.getElementById('root'));
</code></pre>
<p>Now, if you run the application using the <code>yarn start</code> command from the terminal, you will see the following screen:</p>
<h2 id="how-to-open-and-close-the-accordion-menu">How to Open and Close the Accordion Menu</h2>
<p>As you can see above, we display a single section as a part of the accordion. But by default, the accordion is expanded and we can't close it. So let's add functionality to open and close the accordion.</p>
<p>Add a new state inside the component as shown below:</p><pre><code class="language-js">const [isActive, setIsActive] = useState(false);
</code></pre>
<p>Here, we've defined the <code>isActive</code> state. Based on that, we'll hide or show the accordion content.</p>
<p>Also import the <code>useState</code> hook at the top of the file:</p><pre><code class="language-js">import React, { useState } from 'react';
</code></pre>
<p>Now, for the <code>div</code> with class <code>accordion-title</code>, add the <code>onClick</code> handler like this:</p><pre><code class="language-jsx">&lt;div className="accordion"&gt;
&lt;div className="accordion-item"&gt;
&lt;div
className="accordion-title"
onClick={() =&gt; setIsActive(!isActive)}
&gt;
&lt;div&gt;{title}&lt;/div&gt;
&lt;div&gt;{isActive ? '-' : '+'}&lt;/div&gt;
&lt;/div&gt;
{isActive &amp;&amp; &lt;div className="accordion-content"&gt;{content}&lt;/div&gt;}
&lt;/div&gt;
&lt;/div&gt;
</code></pre>
<p>Here, we're inverting the <code>isActive</code> state value when we click on the <code>accordion-title</code> div. If the value of <code>isActive</code> is <code>false</code>, we're setting it to <code>true</code> and vice-versa.</p>
<p>We're also showing the <code>+</code> or <code>-</code> sign depending on the value of <code>isActive</code> using the ternary operator.</p>
<p>And if the <code>isActive</code> state value is <code>true</code> then we're only showing the accordion content as shown below:</p><pre><code class="language-jsx">{isActive &amp;&amp; &lt;div className="accordion-content"&gt;{content}&lt;/div&gt;}
</code></pre>
<p>Now, if you check the application, you will see the following screen:</p>
<p>As you can see, initially, the accordion is closed. When we click on the title, the accordion opens and we can click on it again to close it.</p>
<h2 id="how-to-add-multiple-sections-in-accordion">How to add Multiple Sections in Accordion</h2>
<p>This works fine for a single section of the accordion. But if we have multiple sections, it will not be good to copy-paste the same JSX code again and again with different content.</p>
<p>So let's create a separate component to just display the accordion. Then based on the number of sections, we'll loop over the component to display multiple sections.</p>
<p>Create a new <code>Accordion.js</code> file inside the <code>src</code> folder and add the following contents inside it:</p><pre><code class="language-jsx">import React, { useState } from 'react';
const Accordion = ({ title, content }) =&gt; {
const [isActive, setIsActive] = useState(false);
return (
&lt;div className="accordion-item"&gt;
&lt;div className="accordion-title" onClick={() =&gt; setIsActive(!isActive)}&gt;
&lt;div&gt;{title}&lt;/div&gt;
&lt;div&gt;{isActive ? '-' : '+'}&lt;/div&gt;
&lt;/div&gt;
{isActive &amp;&amp; &lt;div className="accordion-content"&gt;{content}&lt;/div&gt;}
&lt;/div&gt;
);
};
export default Accordion;
</code></pre>
<p>Here, we've moved the state and <code>accordion-item</code> div from the <code>App.js</code> file into <code>Accordion.js</code>. We're passing the dynamic <code>title</code> and <code>content</code> props to the component using ES6 destructuring syntax like this:</p><pre><code class="language-js">const Accordion = ({ title, content }) =&gt; {
</code></pre>
<p>Now, open the <code>App.js</code> file and replace it with the following content:</p><pre><code class="language-jsx">import React from 'react';
import Accordion from './Accordion';
const App = () =&gt; {
const accordionData = [
{
title: 'Section 1',
content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
laborum cupiditate possimus labore, hic temporibus velit dicta earum
suscipit commodi eum enim atque at? Et perspiciatis dolore iure
voluptatem.`
},
{
title: 'Section 2',
content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
quaerat iure quos dolorum accusantium ducimus in illum vero commodi
pariatur? Impedit autem esse nostrum quasi, fugiat a aut error cumque
quidem maiores doloremque est numquam praesentium eos voluptatem amet!
Repudiandae, mollitia id reprehenderit a ab odit!`
},
{
title: 'Section 3',
content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
dolor ut sequi minus iste? Quas?`
}
];
return (
&lt;div&gt;
&lt;h1&gt;React Accordion Demo&lt;/h1&gt;
&lt;div className="accordion"&gt;
{accordionData.map(({ title, content }) =&gt; (
&lt;Accordion title={title} content={content} /&gt;
))}
&lt;/div&gt;
&lt;/div&gt;
);
};
export default App;
</code></pre>
<p>Here, we've converted the <code>accordionData</code> from an object to an array of objects. We're looping over it using the array map method, and passing the corresponding <code>title</code> and <code>content</code> to the <code>Accordion</code> component.</p>
<p>Now if you check the application, you will see that the three sections get displayed and we can open and close each section as shown below:</p>
<h2 id="how-to-refactor-the-code">How to Refactor the Code</h2>
<p>So as you can see, by just moving the accordion section out into a separate component and passing the dynamic content as props, we're successfully able to create a working version of an accordion from scratch.</p>
<p>It's a better practice to keep the static data in a separate file. So let's move the <code>accordionData</code> array to a different file and import it into <code>App.js</code>.</p>
<p>Create a new file called <code>content.js</code> inside the <code>utils</code> folder and add the following content inside it:</p><pre><code class="language-js">export const accordionData = [
{
title: 'Section 1',
content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
laborum cupiditate possimus labore, hic temporibus velit dicta earum
suscipit commodi eum enim atque at? Et perspiciatis dolore iure
voluptatem.`
},
{
title: 'Section 2',
content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
quaerat iure quos dolorum accusantium ducimus in illum vero commodi
pariatur? Impedit autem esse nostrum quasi, fugiat a aut error cumque
quidem maiores doloremque est numquam praesentium eos voluptatem amet!
Repudiandae, mollitia id reprehenderit a ab odit!`
},
{
title: 'Section 3',
content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
dolor ut sequi minus iste? Quas?`
}
];
</code></pre>
<p>Now, open <code>App.js</code> and replace it with the following content:</p><pre><code class="language-jsx">import React from 'react';
import Accordion from './Accordion';
import { accordionData } from './utils/content';
const App = () =&gt; {
return (
&lt;div&gt;
&lt;h1&gt;React Accordion Demo&lt;/h1&gt;
&lt;div className="accordion"&gt;
{accordionData.map(({ title, content }) =&gt; (
&lt;Accordion title={title} content={content} /&gt;
))}
&lt;/div&gt;
&lt;/div&gt;
);
};
export default App;
</code></pre>
<p>Here, we've just imported the static data from the external file and removed it from the <code>App.js</code> file.</p>
<p>So now the code looks clean and easy to understand and the functionality is working as before.</p>
<h2 id="closing-points">Closing points</h2>
<p>We're done building out the functionality of our app.</p>
<p><strong>You can find the complete GitHub source code for this application in <a href="https://github.com/myogeshchavan97/react-accordion-demo">this repository</a>.</strong></p>
<h3 id="thanks-for-reading-">Thanks for reading!</h3>
<p>Want to learn all ES6+ features in detail including let and const, promises, various promise methods, array and object destructuring, arrow functions, async/await, import and export and a whole lot more from scratch?</p>
<p>Check out my <a href="https://modernjavascript.yogeshchavan.dev/">Mastering Modern JavaScript</a> book. This book covers all the pre-requisites for learning React and helps you to become better at JavaScript and React.</p>
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
