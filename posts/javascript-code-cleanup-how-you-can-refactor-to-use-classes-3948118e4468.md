---
card: "https://cdn-media-1.freecodecamp.org/images/1*vBiTug8cUn6ARgwJeSZv1Q.jpeg"
tags: [JavaScript]
description: In smaller React projects, keeping all of your component meth
author: "Milad E. Fahmy"
title: "JavaScript code cleanup: how you can refactor to use Classes"
created: "2021-08-15T19:44:37+02:00"
modified: "2021-08-15T19:44:37+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-react tag-programming tag-front-end-development tag-tech ">
<header class="post-full-header">
<h1 class="post-full-title">JavaScript code cleanup: how you can refactor to use Classes</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*vBiTug8cUn6ARgwJeSZv1Q.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*vBiTug8cUn6ARgwJeSZv1Q.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*vBiTug8cUn6ARgwJeSZv1Q.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*vBiTug8cUn6ARgwJeSZv1Q.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*vBiTug8cUn6ARgwJeSZv1Q.jpeg" alt="JavaScript code cleanup: how you can refactor to use Classes">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>In smaller React projects, keeping all of your component methods in the components themselves works well. In medium-sized projects, you may find yourself wishing you could get those methods out of your components and into a “helper”. Here, I’ll show you how to use a Class (instead of exporting individual functions and variables) to organize your code.</p>
<p><strong>Note</strong>: I work in React so that’s the example we’ll discuss here.</p>
<h3 id="typical-refactor">Typical refactor</h3>
<p>In a typical refactor, you’d take a function on the component and move it to another helper.</p>
<p>From:</p><pre><code class="language-js">const MyComponent = () =&gt; {
const someFunction = () =&gt; 'Hey, I am text'
return (
&lt;div&gt;
{someFunction()}
&lt;/div&gt;
)
}</code></pre>
<p>To:</p><pre><code class="language-js">import { someFunction } from 'functionHelper.js'
const MyComponent = () =&gt; {
return (
&lt;div&gt;
{someFunction()}
&lt;/div&gt;
)
}</code></pre>
<p>and</p><pre><code>export const someFunction = () =&gt; 'Hey, I am text'</code></pre>
<p>This example is really silly, but you see where we’re going:</p>
<ol>
<li>Take your functions and copy them over to a separate file</li>
<li>Import them and call them as normal.</li>
</ol>
<p>When things get complicated, though, you’ll have to pass in a bunch of stuff to those functions — objects, functions for manipulating state, and so on. Today I ran into a problem where I wanted to extract three functions out of a component and they all required the same inputs (a <code>resource</code> and a function to update the <code>resource</code>). There’s got to be a better way…</p>
<h3 id="refactoring-with-a-class">Refactoring with a class</h3>
<p>I made a big demo for this post. You can see the code <a href="https://github.com/AmberWilkie/class-demo" rel="noopener">on Github</a>. The initial commit shows all of the functionality inside the main component (<code>App.js</code>) and the subsequent commits refactor the code to use a class.</p>
<p>You can run this yourself and do whatever you want to it. Remember to <code>yarn install</code>.</p>
<p>We start with a component that “fetches” an object (mimicking the way we might do this from an API) with certain attributes on it: repeat (number of boxes), side (height and width), text, color. We then have a number of ways we manipulate the view — changing the color, updating the text, and so on. After each change, we display a message.</p>
<p>For instance, here’s our change width and height method:</p><pre><code class="language-js">changeSide = side =&gt; {
const obj = {...this.state.obj, side}
this.fetchObject(obj);
this.setState({ message: `You changed the sides to ${side} pixels!` });
}</code></pre>
<p>We might have a number of other methods that require similar actions — or perhaps very different methods. We might start thinking about extracting this code to a helper. Then we would create a different method to call the <code>setState</code> action and we’d have to pass it, <code>this.fetchObject</code>, the object in state, and the <code>side</code> we are getting as an argument to the method. If we have several similar methods, that’s a whole lot of passing parameters and maybe it’s not actually that helpful (or readable).</p>
<p>Instead we can use a class, complete with a constructor method:</p><pre><code class="language-js">export default class ObjectManipulator {
constructor( { object, fetchObject, markResettable, updateMessage, updateStateValue } ) {
this.fetchObject = fetchObject;
this.markResettable = markResettable;
this.updateMessage = updateMessage;
this.updateStateValue = updateStateValue;
}
changeSide = ( object, side ) =&gt; {
const newObject = { ...object, side };
this.fetchObject(newObject);
this.updateMessage(`You changed the sides to ${side} pixels!`);
this.markResettable();
this.updateStateValue('side', side);
};
};</code></pre>
<p>This allows us to create an object whose functions we may call inside of our main component:</p><pre><code class="language-js">const manipulator = new ObjectManipulator({
object,
fetchObject: this.fetchObject,
markResettable: this.markResettable,
updateMessage: this.updateMessage,
updateStateValue: this.updateStateValue,
});</code></pre>
<p>This creates an object <code>manipulator</code> — an instance of our <code>ObjectManipulator</code> class. When we call <code>manipulator.changeSide(object, '800')</code> it will run the <code>changeSide</code> method we define above. There’s no need to pass in <code>updateMessage</code> or any of the other methods — we pick them up from the constructor, when we created the instance.</p>
<p>You can imagine that this becomes really useful if we have a lot of these methods to deal with. In my case, I needed to call <code>.then(res =&gt; myFunction(r</code>es) after everything I was trying to extract. Defini<code>ng myFunct</code>ion on the class instance instead of passing it to each function saved me a lot of code.</p>
<h3 id="keeping-everything-organized">Keeping everything organized</h3>
<p>This method of organization can be really helpful to keep everything in its place. For instance, I have an array of colors that I map over to get the color buttons you see in the example. By moving this constant into the <code>ObjectManipulator</code>, I can make sure it doesn’t clash with any other <code>colors</code> in the rest of my app:</p><pre><code class="language-js">export default class ObjectManipulator {
[...]
colors = ['blue', 'red', 'orange', 'aquamarine', 'green', 'gray', 'magenta'];
};</code></pre>
<p>I can use <code>manipulator.colors</code> to grab the right colors for this page, whereas there might be a global <code>colors</code> constant that is used for something else.</p>
<h3 id="references">References</h3>
<p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes" rel="noopener">Good old Mozilla Class docs</a></p>
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
