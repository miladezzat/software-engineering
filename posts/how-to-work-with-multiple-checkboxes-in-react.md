---
card: "/images/default.jpg"
tags: [React]
description: Handling multiple checkboxes in React is completely different
author: "Milad E. Fahmy"
title: "React Tutorial – How to Work with Multiple Checkboxes"
created: "2021-08-15T19:26:22+02:00"
modified: "2021-08-15T19:26:22+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-react tag-javascript ">
<header class="post-full-header">
<h1 class="post-full-title">React Tutorial – How to Work with Multiple Checkboxes</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2021/05/checkbox_selection.jpg 300w,
/news/content/images/size/w600/2021/05/checkbox_selection.jpg 600w,
/news/content/images/size/w1000/2021/05/checkbox_selection.jpg 1000w,
/news/content/images/size/w2000/2021/05/checkbox_selection.jpg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2021/05/checkbox_selection.jpg" alt="React Tutorial – How to Work with Multiple Checkboxes">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Handling multiple checkboxes in React is completely different from how you use regular HTML checkboxes.</p>
<p>So in this article, we'll see how to work with multiple checkboxes in React.</p>
<p>You will learn:</p>
<ul>
<li>How to use a checkbox as a Controlled Input in React</li>
<li>How to use the array map and reduce methods for complex calculation</li>
<li>How to create an array of a specific length pre-filled with some specific value</li>
</ul>
<p>and much more.</p>
<p>This article is a part of my <a href="https://master-redux.yogeshchavan.dev/">Mastering Redux</a> course. Here's a <a href="https://www.youtube.com/watch?v=izSw74H08Bc">preview of the app</a> we'll be building in the course.</p>
<p>So let's get started.</p>
<h2 id="how-to-work-with-single-checkbox">How to Work with Single Checkbox</h2>
<p>Let's start with single checkbox functionality before moving on to multiple checkboxes.</p>
<p>In this article, I will be using React Hooks syntax for creating components. So if you're not familiar with React Hooks, check out my <a href="https://levelup.gitconnected.com/an-introduction-to-react-hooks-50281fd961fe?source=friends_link&amp;sk=89baff89ec8bc637e7c13b7554904e54">Introduction to React Hooks</a> article.</p>
<p>Take a look at the below code:</p><pre><code class="language-js">&lt;div className="App"&gt;
Select your pizza topping:
&lt;div className="topping"&gt;
&lt;input type="checkbox" id="topping" name="topping" value="Paneer" /&gt;Paneer
&lt;/div&gt;
&lt;/div&gt;
</code></pre>
<p>Here's a <a href="https://codesandbox.io/s/young-snow-lzplh?file=/src/App.js">Code Sandbox Demo</a>.</p>
<p>In the above code, we've just declared a single checkbox which is similar to how we declare an HTML checkbox.</p>
<p>So we're able to easily check and uncheck the checkbox as shown below:</p>
<p>But to display on the screen whether it's checked or not, we need to convert it to Controlled Input.</p>
<p>In React, Controlled Input is managed by state, so the input value can be changed only by changing the state related to that input.</p>
<p>Take a look at the below code:</p><pre><code class="language-js">export default function App() {
const [isChecked, setIsChecked] = useState(false);
const handleOnChange = () =&gt; {
setIsChecked(!isChecked);
};
return (
&lt;div className="App"&gt;
Select your pizza topping:
&lt;div className="topping"&gt;
&lt;input
type="checkbox"
id="topping"
name="topping"
value="Paneer"
checked={isChecked}
onChange={handleOnChange}
/&gt;
Paneer
&lt;/div&gt;
&lt;div className="result"&gt;
Above checkbox is {isChecked ? "checked" : "un-checked"}.
&lt;/div&gt;
&lt;/div&gt;
);
}
</code></pre>
<p>Here's a <a href="https://codesandbox.io/s/dazzling-oskar-qcil8?file=/src/App.js">Code Sandbox Demo</a>.</p>
<p>In the above code, we've declared the <code>isChecked</code> state in the component with the initial value of <code>false</code> using the <code>useState</code> hook:</p><pre><code class="language-js">const [isChecked, setIsChecked] = useState(false);
</code></pre>
<p>Then for the input checkbox, we've given two extra props <code>checked</code> and <code>onChange</code> like this:</p><pre><code class="language-js">&lt;input
...
checked={isChecked}
onChange={handleOnChange}
/&gt;
</code></pre>
<p>Whenever we click on the checkbox the <code>handleOnChange</code> handler function will be called which we use to set the value of <code>isChecked</code> state.</p><pre><code class="language-js">const handleOnChange = () =&gt; {
setIsChecked(!isChecked);
};
</code></pre>
<p>So if the checkbox is checked, we're setting the <code>isChecked</code> value to <code>false</code>. But if the checkbox is unchecked, we're setting the value to <code>true</code> using <code>!isChecked</code>. Then we pass that value in the input checkbox for the prop <code>checked</code>.</p>
<p>This way the input checkbox becomes a controlled input whose value is managed by the state.</p>
<p>Note that in React, it's always recommended to use Controlled Input for input fields even if the code looks complicated. This guarantees that the input change happens inside only the <code>onChange</code> handler.</p>
<p>The state of the input will not be changed in any other way and you'll always get the correct and updated value of the state of the input.</p>
<p>Only in rare cases, you can use React ref to use the input in an uncontrolled way.</p>
<h2 id="how-to-handle-multiple-checkboxes">How to Handle Multiple Checkboxes</h2>
<p>Now, let's look at how you'll handle multiple checkboxes.</p>
<p>Take a look at <a href="https://codesandbox.io/s/mystifying-tu-xlpgb?file=/src/App.js">this Code Sandbox Demo</a>.</p>
<p>Here, we're displaying a list of toppings and their corresponding price. Based on which toppings are selected, we need to display the total amount.</p>
<p>Previously, with the single checkbox, we only had the <code>isChecked</code> state and we changed the state of the checkbox based on that.</p>
<p>But now we have a lot of checkboxes, so it's not practical to add multiple <code>useState</code> calls for each checkbox.</p>
<p>So let's declare an array in the state indicating the state of each checkbox.</p>
<p>To create an array equal to the length of the number of checkboxes, we can use the array <code>fill</code> method like this:</p><pre><code class="language-js">const [checkedState, setCheckedState] = useState(
new Array(toppings.length).fill(false)
);
</code></pre>
<p>Here, we've declared a state with an initial value as an array filled with the value <code>false</code>.</p>
<p>So if we have 5 toppings then the <code>checkedState</code> state array will contain 5 <code>false</code> values like this:</p><pre><code class="language-js">[false, false, false, false, false]
</code></pre>
<p>And once we check/uncheck the checkbox, we'll change the corresponding <code>false</code> to <code>true</code> and <code>true</code> to <code>false</code>.</p>
<p>Here's a final <a href="https://codesandbox.io/s/wild-silence-b8k2j?file=/src/App.js">Code Sandbox Demo</a>.</p>
<p>The complete <code>App.js</code> code looks like this:</p><pre><code class="language-js">import { useState } from "react";
import { toppings } from "./utils/toppings";
import "./styles.css";
const getFormattedPrice = (price) =&gt; `$${price.toFixed(2)}`;
export default function App() {
const [checkedState, setCheckedState] = useState(
new Array(toppings.length).fill(false)
);
const [total, setTotal] = useState(0);
const handleOnChange = (position) =&gt; {
const updatedCheckedState = checkedState.map((item, index) =&gt;
index === position ? !item : item
);
setCheckedState(updatedCheckedState);
const totalPrice = updatedCheckedState.reduce(
(sum, currentState, index) =&gt; {
if (currentState === true) {
return sum + toppings[index].price;
}
return sum;
},
0
);
setTotal(totalPrice);
};
return (
&lt;div className="App"&gt;
&lt;h3&gt;Select Toppings&lt;/h3&gt;
&lt;ul className="toppings-list"&gt;
{toppings.map(({ name, price }, index) =&gt; {
return (
&lt;li key={index}&gt;
&lt;div className="toppings-list-item"&gt;
&lt;div className="left-section"&gt;
&lt;input
type="checkbox"
id={`custom-checkbox-${index}`}
name={name}
value={name}
checked={checkedState[index]}
onChange={() =&gt; handleOnChange(index)}
/&gt;
&lt;label htmlFor={`custom-checkbox-${index}`}&gt;{name}&lt;/label&gt;
&lt;/div&gt;
&lt;div className="right-section"&gt;{getFormattedPrice(price)}&lt;/div&gt;
&lt;/div&gt;
&lt;/li&gt;
);
})}
&lt;li&gt;
&lt;div className="toppings-list-item"&gt;
&lt;div className="left-section"&gt;Total:&lt;/div&gt;
&lt;div className="right-section"&gt;{getFormattedPrice(total)}&lt;/div&gt;
&lt;/div&gt;
&lt;/li&gt;
&lt;/ul&gt;
&lt;/div&gt;
);
}
</code></pre>
<p>Let's understand what we're doing here.</p>
<p>We've declared the input checkbox as shown below:</p><pre><code class="language-js">&lt;input
type="checkbox"
id={`custom-checkbox-${index}`}
name={name}
value={name}
checked={checkedState[index]}
onChange={() =&gt; handleOnChange(index)}
/&gt;
</code></pre>
<p>Here, we've added a <code>checked</code> attribute with the corresponding value of <code>true</code> or <code>false</code> from the <code>checkedState</code> state. So each checkbox will have the correct value of its checked state.</p>
<p>We've also added an <code>onChange</code> handler and we're passing the <code>index</code> of the checkbox which is checked/un-checked to the <code>handleOnChange</code> method.</p>
<p>The <code>handleOnChange</code> handler method looks like this:</p><pre><code class="language-js">const handleOnChange = (position) =&gt; {
const updatedCheckedState = checkedState.map((item, index) =&gt;
index === position ? !item : item
);
setCheckedState(updatedCheckedState);
const totalPrice = updatedCheckedState.reduce(
(sum, currentState, index) =&gt; {
if (currentState === true) {
return sum + toppings[index].price;
}
return sum;
},
0
);
setTotal(totalPrice);
};
</code></pre>
<p>Here, we're first looping over the <code>checkedState</code> array using the array <code>map</code> method. If the value of the passed <code>position</code> parameter matches with the current <code>index</code>, then we reverse its value. Then, if the value is <code>true</code> it will be converted to <code>false</code> using <code>!item</code> and if the value is <code>false</code>, then it will be converted to <code>true</code>.</p>
<p>If the <code>index</code> does not match with the provided <code>position</code> parameter, then we're not reversing its value but we're just returning the value as it is.</p><pre><code class="language-js">const updatedCheckedState = checkedState.map((item, index) =&gt;
index === position ? !item : item
);
// the above code is the same as the below code
const updatedCheckedState = checkedState.map((item, index) =&gt; {
if (index === position) {
return !item;
} else {
return item;
}
});
</code></pre>
<p>I used the ternary operator <code>?:</code> because it makes the code shorter but you can use any array method.</p>
<p>If you're not familiar with how array methods like <code>map</code> or <code>reduce</code> work, then check out <a href="/news/complete-introduction-to-the-most-useful-javascript-array-methods/">this article</a> I wrote.</p>
<p>Next, we're setting the <code>checkedState</code> array to the <code>updatedCheckedState</code> array. This is important because if you don't update the <code>checkedState</code> state inside the <code>handleOnChange</code> handler, then you will not be able to check/uncheck the checkbox.</p>
<p>This is because we're using the <code>checkedState</code> value for the checkbox to determine if the checkbox is checked or not (as it's a controlled input as shown below):</p><pre><code class="language-js">&lt;input
type="checkbox"
...
checked={checkedState[index]}
onChange={() =&gt; handleOnChange(index)}
/&gt;
</code></pre>
<p>Note that we've created a separate <code>updatedCheckedState</code> variable and we're passing that variable to the <code>setCheckedState</code> function. We're using the <code>reduce</code> method on <code>updatedCheckedState</code> and not on the original <code>checkedState</code> array.</p>
<p>This is because, by default, the <code>setCheckedState</code> function used to update the state is asynchronous.</p>
<p>Just because you called the <code>setCheckedState</code> function does not guarantee that you will get the updated value of the <code>checkedState</code> array in the next line.</p>
<p>So we've created a separate variable and used that in the <code>reduce</code> method.</p>
<p>You can read <a href="/news/what-is-state-in-react-explained-with-examples/">this article</a> if you're not familiar with how state works in React.</p>
<p>Then to calculate the total price, we're using the array <code>reduce</code> method:</p><pre><code class="language-js">const totalPrice = updatedCheckedState.reduce(
(sum, currentState, index) =&gt; {
if (currentState === true) {
return sum + toppings[index].price;
}
return sum;
},
0
);
</code></pre>
<p>The array <code>reduce</code> method receives four parameters, of which we're using only three: <code>sum</code>, <code>currentState</code> and <code>index</code>. You can use different names if you want as they're just parameters.</p>
<p>We're also passing <code>0</code> as the initial value, which is also known as the <code>accumulator</code> value for the <code>sum</code> parameter.</p>
<p>Then inside the reduce function, we're checking if the current value of the <code>checkedState</code> array is <code>true</code> or not.</p>
<p>If it's <code>true</code>, that means the checkbox is checked so we're adding the value of the corresponding <code>price</code> using <code>sum + toppings[index].price</code>.</p>
<p>If the <code>checkedState</code> array value is <code>false</code>, then we're not adding its price but just returning the calculated previous value of <code>sum</code>.</p>
<p>Then we're setting that <code>totalPrice</code> value to the <code>total</code> state using <code>setTotal(totalPrice)</code></p>
<p>This way we're correctly able to calculate the total price for the selected toppings as you can see below.</p>
<p>Here's a <a href="https://b8k2j.csb.app/">Preview link</a> of the above Code Sandbox demo to try for yourself.</p>
<h3 id="thanks-for-reading-">Thanks for reading!</h3>
<p>Most developers struggle with understanding how Redux works. But every React developer should be aware of how to work with Redux, as industry projects mostly use Redux for managing larger projects.</p>
<p>So to make it easy for you, I have launched a <a href="https://master-redux.yogeshchavan.dev/">Mastering Redux</a> course.</p>
<p>In this course, you will learn Redux from the absolute beginning and you'll also build a complete <a href="https://www.youtube.com/watch?v=izSw74H08Bc">food ordering app</a> from scratch using Redux.</p>
<p>Click the below image to join the course and get the limited-time discount offer and also get my popular Mastering Modern JavaScript book for free.</p>
<p><strong>Want to stay up to date with regular content regarding JavaScript, React, Node.js? <a href="https://www.linkedin.com/in/yogesh-chavan97/">Follow me on LinkedIn</a>.</strong></p>
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
