---
card: "https://cdn-media-1.freecodecamp.org/images/1*FQnrGf3EajRiFzTH528w7w.png"
tags: [JavaScript]
description: by Julien Benchetrit
author: "Milad E. Fahmy"
title: "An Introduction to React in 2019 (For People Who Know Just Enough jQuery To Get By)"
created: "2021-08-15T19:38:14+02:00"
modified: "2021-08-15T19:38:14+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-react tag-jquery tag-tech tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">An Introduction to React in 2019 (For People Who Know Just Enough jQuery To Get By)</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*FQnrGf3EajRiFzTH528w7w.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*FQnrGf3EajRiFzTH528w7w.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*FQnrGf3EajRiFzTH528w7w.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*FQnrGf3EajRiFzTH528w7w.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*FQnrGf3EajRiFzTH528w7w.png" alt="An Introduction to React in 2019 (For People Who Know Just Enough jQuery To Get By)">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Julien Benchetrit</p>
<h1 id="an-introduction-to-react-in-2019-for-people-who-know-just-enough-jquery-to-get-by-">An Introduction to React in 2019 (For People Who Know Just Enough jQuery To Get By)</h1>
<p>Back in 2015, <a href="https://twitter.com/chibicode" rel="noopener">@chibicode</a>’s “<a href="https://chibicode.com/react-js-introduction-for-people-who-know-just-enough-jquery-to-get-by/" rel="noopener">React.js Introduction For People Who Know Just Enough jQuery To Get By</a>” was my first contact with React and the tutorial that demystified the whole thing for me.</p>
<p>It walks you through the fundamentals of React in a meticulous manner and is especially well-suited for anyone who comes from the world of jQuery.</p>
<p>Unfortunately, when trying to share it recently, I realized it was using React’s now obsolete <code>createClass</code> API and the images and embedded code samples weren’t loading anymore.</p>
<p>So with <a href="https://twitter.com/chibicode" rel="noopener">@chibicode</a>’s permission, I rewrote his article with the latest versions of React and JavaScript in mind and expanded upon some of the explanations.</p>
<p>Please note though that the vast majority of this tutorial is his work. I hope it will prove as useful to you as it did to me.</p>
<p>Without further ado, let’s learn us some React!</p>
<blockquote><strong>Small disclaimer:</strong> Some of the images are from <a href="https://twitter.com/chibicode" rel="noopener">@chibicode</a>’s original article and the code they show is slightly different from the code we use here. The images are for illustrative purposes only. Always refer to the written code samples.</blockquote>
<h4 id="target-audience-people-who-know-just-enough-jquery-to-get-by">Target Audience: People Who Know Just Enough jQuery to Get by</h4>
<p>Before I begin, I’d like to clarify who the target audience is.</p>
<p>Zed Shaw, the author of “<a href="https://learncodethehardway.org/" rel="noopener">Learn Code the Hard Way</a>” series, wrote an excellent blog post called <a href="https://zedshaw.com/2015/06/16/early-vs-beginning-coders/" rel="noopener">Early vs. Beginning Coders</a>. In his post, Zed criticizes programming educators who claim that their materials are for “beginners”, but in reality are incomprehensible for most “total” beginners.</p>
<p>I don’t want to make a similar mistake here. Of the people who have never tried out React, some are comfortable with frontend JS frameworks like <a href="http://backbonejs.org/" rel="noopener">Backbone</a>, <a href="https://emberjs.com/" rel="noopener">Ember</a> or <a href="https://angular.io/" rel="noopener">Angular</a>. Some know JavaScript pretty well. Some know just enough jQuery to get by. A tutorial that’s effective for one group may not be optimal for the other groups.</p>
<p>In this tutorial, I’m targeting the third group I mentioned: <strong>people who know just enough jQuery to get by</strong>. Examples of people who might fit in this category would be:</p>
<ul>
<li>Designers who can do basic coding in HTML/CSS/jQuery.</li>
<li>WordPress developers who know how to use jQuery plugins.</li>
<li>Beginning developers who have completed basic HTML/CSS/JS tutorials online.</li>
<li>Backend developers who rely on Bootstrap and basic jQuery for their frontend needs.</li>
<li>Anyone who does more copy-pasting than architecting when it comes to JavaScript.</li>
</ul>
<p><strong>If you’re comfortable with JavaScript or any of the frontend frameworks like Backbone/Ember/Angular, this tutorial is NOT for you</strong>, and you’ll be very frustrated with my writing style. There are tons of great tutorials you can learn from, including the <a href="https://reactjs.org/tutorial/tutorial.html" rel="noopener">official React tutorial</a>.</p>
<p>Also, <strong>if you already know React</strong>, you’ll be pretty upset with me as well because I’ll be talking mostly about <strong>state</strong> instead of immutability or components. However, I found that teaching state first is the best way for jQuery developers to see why React is superior.</p>
<p>Anyways, let’s get started!</p>
<h3 id="time-estimate-1-2-hours">Time Estimate: 1 ~ 2 hours</h3>
<p>If you go really fast (and copy-paste example code instead of typing), this tutorial should take a bit over an hour. If you take your time, it should take a little over 2 hours.</p>
<h4 id="if-you-re-stuck">If you’re stuck</h4>
<p>If you’re stuck or have questions, you can tweet the original author <a href="https://twitter.com/chibicode" rel="noopener">@chibicode</a> or me <a href="https://twitter.com/julienbenc" rel="noopener">@julienbenc</a>.</p>
<h3 id="overview-we-re-going-to-build-a-tweet-box-">Overview: We’re Going to Build a “Tweet Box”</h3>
<p>Many React tutorials begin by explaining how React works or why React is awesome. This tutorial does not.</p>
<p>Instead, we’ll get right to building a simple UI, alternating between jQuery implementations and React implementations, explaining the differences along the way. I believe that you’ll think more this way as opposed to just typing out examples.</p>
<p>The UI we’ll build will resemble the Tweet box that you find on <a href="https://twitter.com/" rel="noopener">Twitter</a>. It won’t be exactly like the real Tweet box but it’ll be pretty similar. Hopefully you’ll find this example to be practical.</p>
<h3 id="step-1-introduction-to-codepen-5-10-minutes-">Step 1: Introduction to CodePen (5–10 minutes)</h3>
<p>We’ll be using <a href="https://codepen.io/" rel="noopener">CodePen</a>, an online code editor which supports both jQuery and React code. You might be familiar with similar services like <a href="https://jsbin.com" rel="noopener">JSBin</a> or <a href="https://jsfiddle.net/" rel="noopener">JSFiddle</a> — they’re all pretty similar but I went with CodePen for easier embedding.</p>
<p>Here’s an example Pen:</p>
<p>Click “Run Pen” to see what happens when the code is run as well as the code itself (by clicking on the <code>HTML</code> button).</p>
<p>Next, click on “Edit on CodePen” to open the Pen in a new window.<strong> You can now modify the HTML on the top left </strong>— i.e. change the button’s text. You’ll see the changes appear in the bottom half of the window. That’s how CodePen works.</p>
<h4 id="create-a-codepen-account">Create a CodePen Account</h4>
<p>Unless you already have a CodePen account, <strong>head to <a href="https://codepen.io/" rel="noopener">https://codepen.io/</a></strong> to <strong>create an account</strong>. Click <strong>Sign Up</strong> to create your account.</p>
<p>After creating an account, you can <strong>fork</strong> public Pens to your account. More or less the same as forking a GitHub repository into your account.</p>
<p>Let’s try it. <strong>Open this next Pen in a new tab and click “Fork” in the top-right menu.</strong></p>
<p>Once you’re on the Pen, you can import popular open-source libraries. You do that by opening Settings and then heading to either the CSS or JavaScript tabs where you can then search for the library you want to add.</p>
<figcaption>CSS settings in CodePen</figcaption>
</figure>
<p><strong>Try doing the following in your forked Pen:</strong></p>
<ul>
<li>Add the latest Bootstrap from the CSS tab (the name will be “twitter-bootstrap”)</li>
<li>Add <code>btn btn-primary</code> classes on the <code>&lt;button&gt;</code> tag</li>
</ul>
<p>And the output becomes a little prettier:</p>
<h4 id="create-a-tweet-box">Create a Tweet Box</h4>
&lt;textarea class="form-control"&gt;&lt;/textarea&gt;
&lt;br/&gt;
&lt;button class="btn btn-primary"&gt;Tweet&lt;/button&gt;
&lt;/div&gt;
&lt;/div&gt;</code></pre>
<p>That’s it for the first step! Not too bad, eh?</p>
<h3 id="step-2-implement-the-first-feature-tweet-button-should-initially-be-disabled-5-minutes-">Step 2: Implement the First Feature — Tweet Button Should Initially Be Disabled (5 minutes)</h3>
<p>Now, time for some JS. We’ll first implement the following feature:</p>
<p><strong>Feature 1:</strong> the “Tweet” button should initially be disabled. When there’s at least one character in the text field, the “Tweet” button should be enabled.</p>
<p>Here’s the demo Pen. As you can see, the button is initially disabled. If you type something into the text box, the button becomes enabled.</p>
<p>To get this to work, you first need to add jQuery into the Pen. Do that inside the JavaScript tab in your Pen’s Settings. (If you’re having trouble with this step, check out CodePen’s <a href="https://blog.codepen.io/documentation/editor/using-javascript-libraries/" rel="noopener">official instructions</a>.) <strong>Once that’s done, go to the small JavaScript window and add the following jQuery code.</strong></p><pre><code class="language-js">// Initially disable the button
$("button").prop("disabled", true);
// When the value of the text area changes...
$("textarea").on("input", function() {
// If there's at least one character...
if ($(this).val().length &gt; 0) {
// Enable the button.
$("button").prop("disabled", false);
} else {
// Else, disable the button.
$("button").prop("disabled", true);
}
});</code></pre>
<h4 id="explanation">Explanation</h4>
<ul>
<li>I used the tag names <code>button</code> and <code>textarea</code> as selectors — no need to add IDs or classes for this example.</li>
<li>To enable/disable the button, use <code>$(...).prop("disabled", ...)</code>.</li>
<li>To listen for changes in <code>textarea</code>, use the <code>input</code> event which works on modern browsers.</li>
</ul>
<p><strong>Try it out</strong> by typing some text in the Tweet box and seeing the button’s enabled/disabled state change.</p>
<p>DO NOT PROCEED if this example was confusing to you — you might need to learn some more jQuery before moving onto React. There are lots of excellent learning resources like <a href="https://www.codecademy.com" rel="noopener">Codecademy</a>, <a href="https://teamtreehouse.com/" rel="noopener">Treehouse</a>, <a href="https://www.pluralsight.com/codeschool" rel="noopener">Code School</a>, and others.</p>
<p>Now that this feature is complete, we’ll try to re-implement the same thing using React. This will take several steps.</p>
<h3 id="step-3-the-tweet-box-using-react-5-10-minutes-">Step 3: The Tweet Box Using React (5–10 minutes)</h3>
<p>One of the first things you’ll notice in React is that <strong>you’ll be writing markup in JS, not in HTML</strong>.</p>
<p>Let me show you what I mean. Here’s the React code which displays the same Tweet box.</p>
<h4 id="warning-you-don-t-need-to-follow-along-yet-just-read-the-code-">WARNING! You don’t need to follow along yet — just read the code.</h4>
<p>Some observations:</p>
<ul>
<li>Inside <code>return (...)</code> is HTML-like code, not JavaScript. In React, you’ll write in a special syntax called JSX which lets you put HTML-like code inside JavaScript.</li>
<li>I say HTML-“like” because it’s not identical to HTML. Notice that it uses <code>className</code> instead of <code>class</code> — but it’s pretty similar, so you’ll learn it quickly.</li>
<li>Your browser does not understand JSX so, before the code can be run, it is automatically converted into browser-compatible JavaScript by a JS compiler (called Babel).</li>
<li>The HTML code inside <code>return (...)</code> is pretty much identical to the HTML code from step 1.</li>
<li>Look at the remaining HTML code in our Pen and you’ll see that there’s no markup besides <code>&lt;body&gt;&lt;div id="container"&gt;&amp;</code>lt;/div&gt;&lt;/body&gt;. This is what I<strong> meant when I said that in React you’ll be writing markup in JavaScrip</strong>t (JSX) and not in HTML.</li>
</ul>
<h4 id="frequently-asked-questions-answers">Frequently Asked Questions &amp; Answers</h4>
<p><strong>Question:</strong> What do <code>class TweetBox extends React.Component</code> and <code>ReactDOM.render</code> do? Do I need to understand them now? <br><strong>Answer:</strong> Don’t worry about it for now. Basically, the first declares a React component with a name (in this case, <code>TweetBox</code>). This then gets rendered in the DOM via <code>ReactDOM.render(&lt;TweetBox /&gt;, document.getElementById("contai</code>ner")) — meaning this component is added insid<code>e the &lt;div id="co</code>ntainer"&gt; tag. That’s all you need to know for now.</p>
<p><strong>Question:</strong> Do I need to do anything special to write JSX on my local machine?<br><strong>Answer:</strong> Yes, but that’s outside the scope of this tutorial — in short, you need to enable something called Babel compilation. All you need to do to write JSX on CodePen is to (1) add the React and ReactDOM libraries and (2) select “Babel” from the list of JavaScript Preprocessors in the JS settings window.</p>
<p><strong>Question:</strong> Isn’t it bad practice to write markup (HTML) and behavior (JS) in the same place?<br><strong>Answer: </strong>It might be bad practice for simple web pages but not necessarily so for large web applications. In large web applications, there will be hundreds of pieces of UI, each containing their own markup and behaviors. The code will be more manageable if the markup and behaviors are kept together for each piece of UI, as opposed to keeping “all markup” together and “all behaviors” together. And React is designed for developing large web applications. In fact, React is developed and used by Facebook, one of the largest web applications out there.</p>
<p>Next, I’ll show you how to write the above React code step-by-step.</p>
<h3 id="step-4-writing-your-first-react-code-5-10-minutes-">Step 4: Writing Your First React Code (5–10 minutes)</h3>
<p>Here’s a starter Pen. In it, I’ve imported Bootstrap (the CSS portion) and React. I also set the JavaScript Preprocessor to Babel so we can write classes and JSX.</p>
<p><strong>Please try to follow along. To begin, fork this Pen so you can edit and save as you go.</strong></p>
<p>Now you’re ready to write some React. <strong>Try to follow along and type the following JS code snippets</strong> into your Pen.</p><pre><code class="language-js">class TweetBox extends React.Component {
render() {
return null;
}
};</code></pre>
<p>This is the template for creating a piece of UI using React (in this case, a Tweet box). It’s just as essential as <code>$(selector).append('your HTML code or element')</code> in jQuery.</p>
<p>To actually construct the UI, we must write the <code>render()</code> method. For now, let’s keep it simple with just a single <code>div</code> tag.</p><pre><code class="language-js">class TweetBox extends React.Component {
render() {
return (
&lt;div&gt;
Hello World!
&lt;/div&gt;
);
}
};</code></pre>
<p>Like in the example above, <strong>put a pair of parenthesis after <code>return</code>, and write the markup inside.</strong></p>
<h4 id="jsx-gotchas">JSX Gotchas</h4>
<p>There’s one thing you need to remember with JSX — in <code>render()</code>, you must return only <strong>one</strong> outermost tag (or anything that can be considered a valid DOM node such as a string or a string).</p>
<p>This will work because it’s a string:</p><pre><code>return 'Hello World!';</code></pre>
<p>But the following won’t work because there’s no quotes or outermost tag around the text:</p><pre><code class="language-js">return (
Hello World!
);</code></pre>
<p>This also doesn’t work because there are two outer-most (<code>span</code>) tags inside <code>return (…)</code>:</p><pre><code class="language-js">return (
&lt;span&gt;
Hello
&lt;/span&gt;
&lt;span&gt;
World
&lt;/span&gt;
);</code></pre>
<p>For the above example, the workaround is to create an extra <code>div</code> tag to wrap the two <code>span</code> tags.</p><pre><code class="language-js">return (
&lt;div&gt;
&lt;span&gt;
Hello
&lt;/span&gt;
&lt;span&gt;
World
&lt;/span&gt;
&lt;/div&gt;
);</code></pre>
<p>We used a <code>div</code> here but in the most recent versions of React, you can use the Fragment feature to render multiple outermost tags. Like this:</p><pre><code class="language-js">return (
&lt;React.Fragment&gt;
&lt;span&gt;
Hello
&lt;/span&gt;
&lt;span&gt;
World
&lt;/span&gt;
&lt;/React.Fragment&gt;
);</code></pre>
<h4 id="attaching-the-ui-to-the-dom">Attaching the UI to the DOM</h4>
<p>Now we need to “attach” this UI to the DOM in order to see <code>Hello World</code>. To do this, <strong>add <code>ReactDOM.render()</code> underneath the code we just wrote:</strong></p><pre><code class="language-js">class TweetBox extends React.Component {
...
};
ReactDOM.render(
&lt;TweetBox /&gt;,
document.getElementById("container")
);</code></pre>
<p>(<strong>Note</strong>: an ellipsis (…) in the code snippet indicates code that has been omitted for clarity. In other words, don’t touch this part of the code and leave it as is.)</p>
<p><code>ReactDOM.render</code> takes two arguments. The first argument is the React component, which is <code>&lt;VariableName</code> /&gt;. The second argument is the DOM element where we want to render (in this <code>case, document.getElementById('conta</code>iner')). Put together, the above code render<code>s the Tw</code>eetBox UI i<code>nside &lt;div id="co</code>ntainer"&gt;.</p>
<p>Now, you should see <code>Hello World</code> appear in your Pen. Congratulations, you wrote and rendered your first React component!</p>
<h4 id="write-the-actual-html-for-the-tweet-box">Write the Actual HTML for the Tweet Box</h4>
<p>Now, instead of <code>Hello World</code>, we’ll implement the HTML for the Tweet Box. <strong>Swap the code inside <code>render()</code> with this:</strong></p><pre><code class="language-js">return (
&lt;textarea className="form-control" /&gt;
&lt;br /&gt;
&lt;button className="btn btn-primary"&gt;Tweet&lt;/button&gt;
&lt;/div&gt;
&lt;/div&gt;
);</code></pre>
<p>There are two things you need to watch out for:</p>
<ul>
<li><strong>Don’t use <code>class</code>.</strong> Instead, use <code>className</code>. It’s because JSX gets translated to JS and <code>class</code> is a reserved keyword in JS.</li>
<li><strong>If you use <code>&lt;</code>br&gt; inste<code>ad of</code> &lt;br/&gt;, you’ll g</strong>et an error. Make sure to close all tags. Same thing w<code>ith images: &lt;img src</code>="…" alt="…" /&gt;</li>
</ul>
<p>Everything else should be the same as the jQuery example from before.</p>
<p>If you typed this correctly, then you should see the Tweet box in your Pen. <strong>If nothing appears in the output, check your code very carefully to make sure there aren’t any typos.</strong></p>
<p>That’s it for this step! Here’s the Pen up to this part:</p>
<h3 id="step-5-re-implement-the-first-feature-tweet-button-should-initially-be-disabled-in-react-5-10-minutes-">Step 5: Re-implement the First Feature — Tweet Button Should Initially Be Disabled — in React (5–10 minutes)</h3>
<p>We’re going to re-implement with React the first feature we implemented using jQuery:</p>
<p><strong>Feature 1:</strong> The “Tweet” button should initially be disabled. When there’s at least one character in the text field, the “Tweet” button should be enabled.</p>
<p>Here’s the jQuery code we wrote:</p>
<p>Let’s see how we can do this in React.</p>
<p><strong>Start with your Pen from the previous step.</strong> (<strong>Tip:</strong> Since you won’t be touching HTML in React, <strong>you can minimize the HTML tab on CodePen </strong>to get more screen space. Same thing with the CSS tab.)</p>
<p><strong>First, let’s disable the button by adding <code>disabled</code> as an attribute.</strong></p><pre><code class="language-js">render() {
return (
...
&lt;button className="..." disabled&gt;Tweet&lt;/button&gt;
...
);
}</code></pre>
<p>In JSX, this is equivalent to writing <code>disabled={true}</code>.</p>
<p>The button should now be disabled. Note that in our jQuery implementation we wrote:</p><pre><code class="language-js">$("button").prop("disabled", true);</code></pre>
<p>to initially disable the button, but we could have instead modified the button tag like above.</p>
<p>Now, we need to enable the button when there’s at least one character in the text field.</p>
<h4 id="handle-change-event">Handle Change Event</h4>
<p>First, we need to listen for the user typing in the <code>textarea</code>. In our jQuery implementation, we wrote:</p><pre><code class="language-js">$("textarea").on("input", function() {
...
}</code></pre>
<p>In the React world, we write the event handler as a <strong>class method</strong>. Let’s call it <code>handleChange</code>:</p><pre><code class="language-js">class TweetBox extends React.Component {
handleChange = () =&gt; {
};
render() {
...
}
}</code></pre>
<blockquote>Note that we’re using an arrow function so that we can access the class’s context (<code>this</code>) without having to bind the function in the <code>constructor</code>. Explaining this in-depth is outside the scope of this tutorial but you will very likely learn about it in due time.</blockquote>
<p>Next, we call this handler when text is entered. To do so, <strong>modify the <code>textarea</code> tag in <code>render()</code> like this:</strong></p><pre><code class="language-html">&lt;textarea className="form-control" onChange={this.handleChange}&gt;
&lt;/textarea&gt;</code></pre>
<ul>
<li>We used the <code>input</code> event for jQuery but in React we use <code>onChange</code> — you’ll learn about how events differ in React’s JSX from the official React documentation so don’t worry too much for now.</li>
<li><strong>More importantly</strong>, we used curly brackets to include JavaScript code inside the HTML syntax part of JSX. In this case, we passed the handler <code>handleChange</code> and we prefixed it with <code>this</code> because it’s a class method.</li>
<li>If you’re used to jQuery, this might seem like bad practice but don’t worry. Again, in large applications, the code will be more manageable if the markup and behaviors are kept together for each piece of UI.</li>
</ul>
<p>To make sure that the handler is indeed being called, <strong>let’s add <code>console.log</code> inside <code>handleChange</code>:</strong></p><pre><code class="language-js">handleChange = (e) =&gt; {
console.log(e.target.value);
};</code></pre>
<p>The <code>event</code> object (nicknamed <code>e</code>) contains <code>target</code> which is the <code>textarea</code>. We get the <code>value</code> to output the current content of the <code>textarea</code>.</p>
<p><strong>In your Pen, open the <code>console</code> tab (with the button in the bottom left of the screen) to check the output. Then type something in the Tweet box.</strong></p>
<figcaption>The console button in CodePen</figcaption>
</figure>
<p>You can also try it out here (you’ll need to open the Pen in a new tab to see the <code>console</code> button):</p>
<p>That’s it for this step! We’ll finish this feature in the next step.</p>
<p><strong>NOTE: Close the <code>console</code> tab in CodePen when you’re done.</strong> We no longer need it.</p>
<h3 id="step-6-implementing-state-10-15-minutes-">Step 6: Implementing State (10–15 minutes)</h3>
<p>I’ll now explain one of the biggest differences between jQuery-style code and React-style code.</p>
<p>In jQuery, when some event happens, you usually modify the DOM directly (like we did earlier with <code>$("button").prop("disabled", true)</code>):</p>
<p>In React, <strong>you never modify the DOM directly.</strong> Instead, in an event handler, you modify something called <strong>the “component state”</strong>. And this is done by calling <code>this.setState</code>.</p>
<p>Then, every time the <code>state</code> is updated, <code><strong>render()</strong></code><strong> is called again.</strong> And <strong>inside <code>render()</code> you can access the state to tell React how you want the DOM to be modified.</strong></p>
<p>This is how you update the UI in response to an event. Yes it’s confusing at first so let me explain using code.</p>
<h4 id="writing-the-event-handler">Writing the Event Handler</h4>
<p><strong>Start with your Pen from the previous step.</strong> First, we need to <strong>initialize the state object. </strong>We can do that inside the class <code>constructor</code>.</p>
<p>What goes in the object? <strong>Let’s create a single key called <code>text</code></strong> and have it store whatever is inside the Tweet box.</p><pre><code class="language-js">class TweetBox extends React.Component {
constructor(props) {
super(props);
this.state = {
text: '',
};
}
handleChange = (e) =&gt; {...};
render() {...}
};</code></pre>
<blockquote>Don’t worry about why we’re calling <code>super(props)</code> at the top of our <code>constructor</code>. It’s an important step but not necessary to understand React for now.</blockquote>
<p><strong>Next, we’ll modify the event handler</strong> to set the state’s <code>text</code> field to whatever is currently in the <code>textarea</code>. To do this, <strong>we use a special method called <code>setState</code> and pass the updated key-value pair.</strong></p><pre><code class="language-js">handleChange = (e) =&gt; {
this.setState({ text: e.target.value });
};</code></pre>
<p>Now, let’s check that the state is correctly being set by writing some debug-only code in <code>render()</code>.</p>
<p>To do this, <strong>simply add <code>this.state.text</code> near the end of <code>render()</code> and use curly brackets </strong>to use JS code inside the HTML syntax part of JSX.</p><pre><code class="language-js">render() {
return (
...
{this.state.text}
&lt;/div&gt;
);
}</code></pre>
<p><strong>Now, try entering some text in the Tweet box.</strong> The same text should appear below the button.</p>
<p>You can try it out on the Pen below as well:</p>
<p>Now the previous diagram might make more sense to you:</p>
<h4 id="remove-the-debugging-code">Remove the Debugging Code</h4>
<p>Once you confirm that the state is correctly being set, <strong>remove the debugging code we just added:</strong></p><pre><code>{this.state.text}</code></pre>
<h4 id="enabling-disabling-the-button">Enabling/Disabling the Button</h4>
<p>Now that we can listen for text changes, the next step is to enable/disable the <code>button</code> depending on whether the <code>text</code> is empty or not.</p>
<p>Using the <code>state</code>, we can use this logic:</p>
<ul>
<li>If <code>this.state.text.length === 0</code>, the button should be disabled.</li>
</ul>
<p>To do this in React, <strong>add the <code>disabled</code> attribute and set its value as the output of <code>this.state.text.length === 0</code></strong>. Since this is JS code, you need to wrap it with <code>{}</code>.</p><pre><code class="language-html">&lt;button className="btn btn-primary" disabled={this.state.text.length === 0}&gt;Tweet&lt;/button&gt;</code></pre>
<p>If you write <code>disabled="true"</code> or <code>disabled="false"</code> in raw HTML it won’t work — in raw HTML, you need to add/remove the <code>disabled</code> attribute to enable the <code>button</code>. But React is <strong>not</strong> raw HTML — it does the following behind the scenes:</p>
<ul>
<li>If you write <code>disabled={true}</code> in JSX, it gets converted to just <code>&lt;button disabl</code>ed&gt; in HTML.</li>
<li>If you write <code>disabled={false}</code> in JSX, the <code>disabled</code> attribute is removed from the <code>button</code> tag in HTML.</li>
</ul>
<p>This works with other Boolean attributes like <code>checked</code>. (You can read more about this aspect of JSX <a href="https://reactjs.org/docs/dom-elements.html" rel="noopener">here</a>.)</p>
<p>The resulting Pen is below:</p>
<h4 id="reflections">Reflections</h4>
<p>Again, keep this difference between jQuery and React in mind before moving on to the next step:</p>
<ul>
<li>In jQuery, you write event handlers which <strong>modify the DOM</strong>.</li>
<li>In React, you write event handlers which <strong>modify the state</strong>. And you write <code>render()</code> to reflect the current state.</li>
</ul>
<h3 id="step-7-remaining-character-count-in-jquery-5-minutes-">Step 7: Remaining Character Count in jQuery (5 minutes)</h3>
<p>The next feature we’ll implement is the remaining character count.</p>
<p>Here’s the spec:</p>
<ul>
<li>The character count will display <code>280 — the length of the text</code>.</li>
</ul>
<p><strong>We’ll first implement this in jQuery, then in React.</strong></p>
<p>We’ll start with our previous jQuery implementation and put our React code on hold for now. <strong>Going forward, I will give you new code to start with at the beginning of each chapter</strong>, as we alternate between jQuery and React. That means after you’re done with each step, you can play with the code before moving to the next step.</p>
<p><strong>✔ Fork the Pen below</strong> to get started.</p>
<p>First, <strong>add the character count in HTML.</strong> Let’s set it inside a <code>span</code>:</p><pre><code class="language-js">&lt;textarea {...}&gt;&lt;/textarea&gt;&lt;br&gt;
&lt;span&gt;280&lt;/span&gt;
&lt;button {...}&gt;Tweet&lt;/button&gt;</code></pre>
<p>And <strong>inside the input handler in JS, add this code to update the character count:</strong></p><pre><code class="language-js">$("textarea").on("input", function() {
$("span").text(280 - $(this).val().length);
...
});</code></pre>
<p>That’s it! <strong>Try typing in the Tweet box</strong> and you’ll see the character count gets updated as you type. Here’s the Pen:</p>
<h3 id="step-8-remaining-character-count-in-react-5-minutes-">Step 8: Remaining Character Count in React (5 minutes)</h3>
<p>How about in React? You should try doing this on your own. Start with our previous React implementation.</p>
<p><strong>✔ Fork the Pen below</strong> to get started.</p>
<p>(<strong>Tip:</strong> Since you won’t be touching HTML in React, <strong>you can minimize the HTML tab on CodePen </strong>to get more screen space.)</p>
<p><strong>Hints:</strong></p>
<ul>
<li>No need to change the <code>constructor()</code> or <code>handleChange()</code> methods.</li>
<li>Use <code>this.state.text.length</code> in <code>render()</code>.</li>
</ul>
<h4 id="answer-">Answer:</h4>
<p>Add this code after <code>&lt;b</code>r/&gt; in<code> your re</code>nder():</p><pre><code class="language-html">&lt;span&gt;{280 - this.state.text.length}&lt;/span&gt;</code></pre>
<p>Here’s the Pen:</p>
<p>Too easy? Not sure why building UIs with React is so much better than jQuery? Well, the next step has more complexity and this is where React really starts to shine.</p>
<h3 id="step-9-the-add-photo-button-5-minutes-">Step 9: The “Add Photo” Button (5 minutes)</h3>
<p>For our next feature, we’ll add an “Add Photo” button to the Tweet Box. This is where things start to get tricky.</p>
<p>However, <strong>we won’t actually write the code to upload images.</strong> Instead, here’s what we’re going to do:</p>
<p>When you upload a photo on Twitter, it counts against the character limit. On my attempt, it decreased the number of remaining characters from 280 to 257.</p>
<blockquote>Yes, I know that Twitter no longer counts photos against the character limit but we’ll disregard that for this tutorial.</blockquote>
<p>Here’s the spec:</p>
<ul>
<li>Create an “Add Photo” button.</li>
<li>Clicking this button toggles an<strong> ON/OFF state.</strong></li>
<li>If the button is ON, it will say <code><strong>✓ Photo Added</strong></code> and the number of available characters decreases by 23.</li>
<li>Also, if the button is ON, <strong>even if there’s no text entered, the “Tweet” button remains enabled.</strong></li>
</ul>
<p>Here’s the demo CodePen. <strong>Try clicking the “Add Photo” button</strong> and see what happens to the character count and the Tweet button.</p>
<p>Let’s implement this with jQuery first.</p>
<h3 id="step-10-the-add-photo-button-in-jquery-15-20-minutes-">Step 10: The “Add Photo” Button in jQuery (15–20 minutes)</h3>
<p>Start with the latest version of our jQuery implementation.</p>
<p><strong>✔ Fork the Pen below</strong> to get started.</p>
<p>Earlier, we were attaching a handler to <code>$("button")</code> but this won’t work anymore if we have two buttons. <strong>So let’s modify the HTML like this:</strong></p><pre><code class="language-html">...
&lt;button class="js-tweet-button btn btn-primary" disabled&gt;Tweet&lt;/button&gt;
&lt;button class="js-add-photo-button btn btn-secondary"&gt;Add Photo&lt;/button&gt;
...</code></pre>
<p>Here are the changes:</p>
<ul>
<li><strong>Added the second button</strong> which says “Add Photo”.</li>
<li><strong>Added classes <code>js-tweet-button</code> and <code>js-add-photo-button</code> to each button.</strong> The class names are prefixed with <code>js-</code> to remember that they’re used only in JS and not in CSS.</li>
<li><strong>Added the initial <code>disabled</code> attribute to the Tweet button</strong> so we don’t have to do it in JS.</li>
</ul>
<p><strong>Next, rewrite the entire JS file like this:</strong></p><pre><code class="language-js">$("textarea").on("input", function() {
$("span").text(280 - $(this).val().length);
if ($(this).val().length &gt; 0) {
$(".js-tweet-button").prop("disabled", false);
} else {
$(".js-tweet-button").prop("disabled", true);
}
});</code></pre>
<p>Here are the changes:</p>
<ul>
<li><strong>(Important) Removed <code>$("button").prop("disabled", true);</code> from the first line</strong> because we added the <code>disabled</code> attribute directly to the Tweet button.</li>
<li><strong>Replaced <code>$("button")</code> with <code>$(".js-tweet-button")</code></strong> so it can be distinguished from <code>.js-add-photo-button</code>.</li>
</ul>
<h4 id="adding-the-button">Adding the Button</h4>
<p>Next, we’ll implement one of the features:</p>
<ul>
<li>Clicking the “Add Photo” button toggles the ON/OFF state. <strong>If it’s ON, the button will say <code>✓ Photo Added</code>.</strong></li>
</ul>
<p>To do this, <strong>let’s add this piece of code:</strong></p><pre><code class="language-js">$("textarea").on("input", function() {
...
});
$(".js-add-photo-button").on("click", function() {
if ($(this).hasClass("is-on")) {
$(this)
.removeClass("is-on")
.text("Add Photo");
} else {
$(this)
.addClass("is-on")
.text("✓ Photo Added");
}
});</code></pre>
<p>We use the class <code>is-on</code> to keep track of the state. <strong>Check to see that this works</strong> by clicking the “Add Photo” button multiple times and seeing the text alternate.</p>
<h4 id="decrement-character-count">Decrement Character Count</h4>
<p>Next, we’ll implement this feature:</p>
<ul>
<li>If the “Add Photo” button is ON, <strong>the number of available characters decreases by 23.</strong></li>
</ul>
<p>To do this, <strong>modify the click handler we just added like this.</strong></p><pre><code class="language-js">if ($(this).hasClass("is-on")) {
$(this)
.removeClass("is-on")
.text("Add Photo");
$("span").text(280 - $("textarea").val().length);
} else {
$(this)
.addClass("is-on")
.text("✓ Photo Added");
$("span").text(280 - 23 - $("textarea").val().length);
}</code></pre>
<p>We change the <code>span</code>’s content on every click. If the <code>button</code> is ON, we need to subtract the text length from <code>257</code> (i.e. <code>280 — 23</code>). We use <code>280 — 23</code> for clarity right now but, if we were building a production app, we should use constants instead.</p>
<p><strong>Check to see that this works</strong> by clicking the “Add Photo” button.</p>
<h4 id="fixing-the-input-handler">Fixing the Input Handler</h4>
<p>This isn’t complete however — <strong>if you have the “Add Photo” button ON and start typing in the <code>textarea</code>, the remaining character count goes out of sync.</strong></p>
<p>This happens because the handler for the <code>textarea</code> doesn’t take into account the status of the “Add Photo” button.</p>
<p>To fix this, <strong>we need to update the handler for <code>textarea</code> like this:</strong></p><pre><code class="language-js">$("textarea").on("input", function() {
if ($(".js-add-photo-button").hasClass("is-on")) {
$("span").text(280 - 23 - $(this).val().length);
} else {
$("span").text(280 - $(this).val().length);
}
if (...) {
...
}
});</code></pre>
<p><strong>Make sure that this works</strong> by turning on the “Add Photo” button and then typing some text.</p>
<h4 id="i-know-this-is-taking-some-time-">I know this is taking some time…</h4>
<p>But stick with it! The jQuery code here is <strong><em>supposed</em></strong> to be confusing so don’t worry!</p>
<h4 id="implement-the-last-feature">Implement the Last Feature</h4>
<p>The last feature we need to implement is this:</p>
<ul>
<li>If the “Add Photo” button is ON, <strong>even if there’s no text entered, the “Tweet” button remains enabled.</strong></li>
</ul>
<p>To do this, <strong>we need to modify the click handler of the “Add Photo” button:</strong></p><pre><code class="language-js">$(".js-add-photo-button").on("click", function() {
if ($(this).hasClass("is-on")) {
...
if ($("textarea").val().length === 0) {
$(".js-tweet-button").prop("disabled", true);
}
} else {
...
$(".js-tweet-button").prop("disabled", false);
}
});</code></pre>
<p>Here’s the explanation:</p>
<ul>
<li>If the “Add Photo” button is going from ON to OFF (<code>if</code> clause), we need to check if there’s no text entered and, if so, disable the “Tweet” button.</li>
<li>If the “Add Photo” button is going from OFF to ON (<code>else</code> clause), we always enable the “Tweet” button.</li>
</ul>
<h4 id="but-again-this-is-broken">But again, this is broken</h4>
<p>We’re not done yet. There’s a bug in the code right now. <strong>Try it out yourself by following these steps:</strong></p>
<ul>
<li>Turn on the “Add Photo” button.</li>
<li>Type some text.</li>
<li>Delete all of the text.</li>
<li>The “Tweet” button should still be enabled because the “Add Photo” button is ON, but this isn’t the case.</li>
</ul>
<p>This means that our input handler for <code>textarea</code> is missing some logic. To fix this, <strong>we need to add another condition to the <code>if</code> statement in the input handler.</strong></p><pre><code class="language-js">$("textarea").on("input", function() {
...
if ($(this).val().length &gt; 0 || $(".js-add-photo-button").hasClass("is-on")) {
...
} else {
...
}
});</code></pre>
<p>This is the explanation for this additional condition:</p>
<ul>
<li>When the text changes, <strong>if the text isn’t empty OR if the “Add Photo” button is ON</strong>, do not disable the “Tweet” button.</li>
</ul>
<p><strong>Try the above steps again</strong> and this time it will work as expected.</p>
<h3 id="step-11-reflection-on-the-jquery-code-why-so-confusing-5-minutes-">Step 11: Reflection on the jQuery Code — Why So Confusing? (5 minutes)</h3>
<p>Here’s the final HTML and JS code from the previous step:</p>
<p><strong>Take a look at the jQuery code once again.</strong> It’s very confusing. If you’re keeping the code as-is, you’ll probably need comments everywhere to remember how it works. There are also clear signs of code duplication but you’d have to think quite a bit before refactoring.</p>
<p>The question is: <strong>why did it get so ugly so fast?</strong></p>
<p>The answer has to do with the <strong>“jQuery style”</strong> of code we talked about previously. Recall this diagram:</p>
<p>Things are simple when there is only 1 event handler and 1 DOM element. However, as we just saw,<strong> if several event handlers are modifying several parts of the DOM, the code gets ugly and complicated.</strong></p>
<p>This is an example of what people mean when they say “spaghetti code”.</p>
<p>Imagine adding more features that could influence both the character limit and the “Tweet” button state. The code would become even harder to manage.</p>
<p>You can, in theory, mitigate this by refactoring into reusable functions. But you’d still have to think hard about it every time you add something new.</p>
<blockquote><strong>Note:</strong> Someone shared a <a href="https://pastebin.com/wbGZZs7U" rel="noopener">refactored version of the jQuery code</a> (for the original tutorial). Very clean. You’ll notice that the <code>update()</code> function takes care of most of the updates to the DOM based on its current “state”. The event listeners then run this function on every call.</blockquote>
<blockquote>In that way it’s similar to React’s <code>render</code>. However, there are still many downsides to this solution. For one, the absence of a real <code>state</code> object makes the logic more opaque. It also doesn’t allow you to break down your UI into multiple components and is likely to have performance issues as you continue adding to it.</blockquote>
<p>Now, let’s see what it’s like to do the same thing with React.</p>
<p><strong>Spoiler alert: It’s going to be much simpler.</strong></p>
<h3 id="step-12-the-add-photo-button-in-react-10-20-minutes-">Step 12: The “Add Photo” Button in React (10–20 minutes)</h3>
<p>Let’s start with our previous React implementation.</p>
<p><strong>✔ Fork the Pen below</strong> to get started.</p>
<h4 id="adding-the-button-1">Adding the Button</h4>
<p>First, let’s add the “Add Photo” button. <strong>Modify the JSX:</strong></p><pre><code class="language-html">&lt;button ...&gt;Tweet&lt;/button&gt;
&lt;button className="btn btn-secondary"&gt;
Add Photo
&lt;/button&gt;</code></pre>
<p>Now, let’s add a click handler to this button so that the text changes from <code>Add Photo</code> to <code>✓ Photo Added</code>. Recall the React way of writing code:</p>
<p>We will:</p>
<ol>
<li><strong>Create a state variable</strong> that keeps track of whether the “Add Photo” button is ON or OFF.</li>
<li><strong>Use the state</strong> in <code>render()</code> to decide whether to show <code>Add Photo</code> or <code>✓ Photo Added</code>.</li>
<li><strong>Update the state</strong> in the click handler.</li>
</ol>
<p>For (1), <strong>we’ll modify the initial state in the <code>constructor</code> </strong>by adding a key-value pair to keep track of whether the photo is added or not:</p><pre><code class="language-js">constructor(props) {
super(props);
this.state = {
text: '',
photoAdded: false,
};
}</code></pre>
<p>For (2), <strong>we’ll modify the JSX markup</strong> for the “Add Photo” button. We’ll have the button say “Photo Added” if <code>this.state.photoAdded</code> is true. We can just use a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator" rel="noopener">ternary operator</a> here:</p><pre><code class="language-html">&lt;button className="btn btn-secondary"&gt;
{this.state.photoAdded ? "✓ Photo Added" : "Add Photo" }
&lt;/button&gt;</code></pre>
<p>Finally, for (3), <strong>we’ll attach an event handler on JSX</strong> like we did for the <code>textarea</code>:</p><pre><code class="language-html">&lt;button className="btn btn-secondary" onClick={this.togglePhoto}&gt;
{this.state.photoAdded ? "✓ Photo Added" : "Add Photo" }
&lt;/button&gt;</code></pre>
<p>Notice that we’re using <code>onClick</code> instead of <code>onChange</code>. This is because we’re dealing with a <code>button</code> and not a <code>textarea</code> or an <code>input</code>.</p>
<p>We’ll also <strong>add a handler method which toggles the value of <code>this.state.photoAddded</code>:</strong></p><pre><code class="language-js">togglePhoto = () =&gt; {
this.setState((prevState) =&gt; ({ photoAdded: !prevState.photoAdded }));
}</code></pre>
<p>This time you’ll see that we’re passing a function to <code>this.setState</code>. This is necessary if you want to update your component state but need to use a value from the previous state. Why we do that is outside the scope of this tutorial but you can read about it in <a href="https://reactjs.org/docs/state-and-lifecycle.html#using-state-correctly" rel="noopener">this section</a> of the official React documentation.</p>
<p>Now, clicking on Add Photo should toggle the button text. <strong>Try it out yourself.</strong></p>
<h4 id="decrement-character-count-1">Decrement Character Count</h4>
<p>We’ll now implement the next feature:</p>
<ul>
<li>If the “Add Photo” button is ON, <strong>the number of available characters decreases by 23.</strong></li>
</ul>
<p>Currently, the number of available characters is displayed as follows in <code>render()</code>:</p><pre><code>&lt;span&gt;{280 - this.state.text.length}&lt;/span&gt;
</code></pre>
<p>This value will now also depend on <code>this.state.photoAdded</code> so we need an <code>if</code> and <code>else</code> here.</p>
<p>However, <strong>in JSX, you can’t write <code>if</code> or <code>else</code> inside <code>{ ... }</code></strong>. You could use a ternary expression (<code>a ? b : c</code>) like we did earlier but it would be pretty long and hard-to-read in this case.</p>
<p>Often the simplest solution in this situation is to refactor a conditional into a method. Let’s try it.</p>
<p><strong>First, modify the above code to use a class method, like this</strong>:</p><pre><code class="language-html">&lt;span&gt;{this.getRemainingChars()}&lt;/span&gt;
</code></pre>
<p><strong>And define the method like this:</strong></p><pre><code class="language-js">getRemainingChars = () =&gt; {
let chars = 280 - this.state.text.length;
if (this.state.photoAdded) chars = chars - 23;
return chars;
}</code></pre>
<p>Now, the remaining character count should update as expected when the “Add Photo” button is toggled.</p>
<p><strong>Question</strong>: In <code>render()</code>, why does <code>{this.getRemainingChars()}</code>have <code>()</code> but <code>{this.handleChange}</code> and <code>{this.togglePhoto}</code> don’t?</p>
<p>Good question. Let’s take a look at <code>render()</code> again:</p><pre><code class="language-js">render() {
return (
...
&lt;textarea className="..." onChange={this.handleChange}&gt;&lt;/textarea&gt;
...
&lt;span&gt;{this.getRemainingChars()}&lt;/span&gt;
...
&lt;button className="..." onClick={this.togglePhoto}&gt;
...
&lt;/button&gt;
...
);
}
</code></pre>
<p><strong>Answer</strong>:</p>
<ul>
<li>We’ve written the <code>getRemainingChars()</code> method to <strong>return a number</strong>. We need to get this number and put it inside <code>&lt;span&gt;&amp;</code>lt;/span&gt;, so<strong> we n</strong>eed<strong> </strong><code>to call the getRema</code>iningChars() meth<code>od</code> by using (). That’s <code>wh</code>y we<code> have () in getRema</code>iningChars().</li>
<li>On the other hand, <code>handleChange</code> and <code>togglePhoto</code> are <strong>event handlers</strong>. We want these methods to be called only when the user interacts with the UI (typing in the <code>textarea</code> or clicking a <code>button</code>). To do so, we need to write them without <code>()</code> in <code>render()</code> and assign them to attributes like <code>onChange</code> and <code>onClick</code>. React will take care of attaching the methods to the relevant event listeners for us.</li>
</ul>
<h4 id="the-tweet-button-s-status">The “Tweet” Button’s Status</h4>
<p>We have one more feature to implement:</p>
<ul>
<li>If the “Add Photo” button is ON, <strong>even if there’s no text entered, the “Tweet” button remains enabled.</strong></li>
</ul>
<p>This is actually really easy thanks to React. Previously, the Tweet button’s <code>disabled</code> option was set as:</p><pre><code class="language-html">&lt;button ... disabled={this.state.text.length === 0}&gt;...&lt;/button&gt;
</code></pre>
<p>In other words, previously the “Tweet” button was disabled if the text’s length was 0. <strong>Now, the “Tweet” button is disabled if</strong>:</p>
<ul>
<li>The text’s length is 0</li>
<li><strong>AND</strong></li>
<li>The “Add Photo” button is OFF.</li>
</ul>
<p>So the logic looks like this:</p><pre><code class="language-html">&lt;button ... disabled={this.state.text.length === 0 &amp;&amp; !this.state.photoAdded}&gt;...&lt;/button&gt;</code></pre>
<p>One way you can clarify the above code is by utilizing <code>getRemainingChars()</code>. If there are 280 characters remaining, that means that the <code>textarea</code> is empty and the “Add Photo” button is OFF so the “Tweet” button should be disabled.</p><pre><code class="language-html">&lt;button ... disabled={this.getRemainingChars() === 280}&gt;...&lt;/button&gt;</code></pre>
<p>This works but could break if, for example, you later refactor <code>getRemainingChars</code> so that it returns a string instead of a number. Instead, we can keep the previous logic and just move it to the top of the <code>render()</code>:</p><pre><code class="language-js">render() {
const isTweetButtonDisabled = this.state.text.length === 0 &amp;&amp; !this.state.photoAdded;
return (
...
&lt;button className="..." disabled={isTweetButtonDisabled}&gt;Tweet&lt;/button&gt;
...
);
}</code></pre>
<p>That’s it! Try toggling the “Add Photo” button and check that the “Tweet Button” is enabled/disabled correctly.</p>
<h4 id="we-re-done-">We’re Done!</h4>
<p>Here’s the resulting Pen:</p>
<h3 id="step-13-reflection-on-the-react-code-why-so-simple-5-minutes-">Step 13: Reflection on the React Code — Why So Simple? (5 minutes)</h3>
<p>The changes to accommodate the “Add Photo” button were minimal when using React. No refactor needed. Why is this the case?</p>
<p>Again, it has to do with React’s style of writing UI code. In React, event handlers modify the <code>state</code>, and whenever the state is modified, <strong>React automatically calls <code>render()</code> again to update the UI.</strong></p>
<p>In this particular example, the diagram now looks like this:</p>
<p>The <code>state</code> becomes an intermediary thing which sits in between the event handlers and <code>render()</code>:</p>
<ul>
<li>Event handlers don’t need to worry about which part of the DOM changes. They just need to set the <code>state</code>.</li>
<li>Similarly, when you write <code>render()</code>, all you need to worry about is what the current <code>state</code> is.</li>
</ul>
<h3 id="compare-with-jquery">Compare with jQuery</h3>
<p>You can imagine what would happen as the UI gets more features. Without the intermediary state, we’d have a tough time managing complexity. This is why you’d want to use React over jQuery for complex UIs.</p>
<p>Again, <strong>it’s possible</strong> to write clean jQuery code that doesn’t look like spaghetti code. <strong>But you have to come up with the code structure yourself</strong> and think about how to refactor every time you add a new feature. React provides you this structure and reduces your cognitive load.</p>
<blockquote>Note that the idea of separating the state from the rendering wasn’t invented with React. We’re just looking at it from the perspective of React.</blockquote>
<h3 id="step-14-the-final-feature-highlighting-overflown-characters-5-minutes-">Step 14: The Final Feature — Highlighting Overflown Characters (5 minutes)</h3>
<p>The last feature we’re going to implement is <strong>highlighting characters that are over the limit</strong>.</p>
<p>Unfortunately, <strong>we’re not going to highlight the actual text inside the Tweet box</strong> because that would require us to change <code>&lt;textar</code>ea&amp;<code>gt; to&lt;div contenteditabl</code>e="tr<code>ue"&gt; and con</code>tenteditable is a bit too complicated for illustrative purposes.</p>
<p>Instead, <strong>we’ll be displaying a Bootstrap alert box</strong> on top and indicate which characters need to be deleted, like this:</p>
<p><strong>To try it out, copy the following quote from the official React documentation:</strong></p>
<blockquote>React embraces the fact that rendering logic is inherently coupled with other UI logic: how events are handled, how the state changes over time, and how the data is prepared for display.</blockquote>
<blockquote>Instead of artificially separating technologies by putting markup and logic in separate files, React separates concerns with loosely coupled units called “components” that contain both.</blockquote>
<ul>
<li>It should show an alert box with the overflow characters highlighted in red.</li>
<li>It should also show 10 characters before the cutoff point, without any highlighting.</li>
</ul>
<p>If we were to implement this in jQuery, our code would become a lot messier. Notice in the diagram that we’ll be adding two more arrows for one new feature.</p>
<p><strong>So we’re not going to implement this in jQuery</strong>. We’ll just do it with React and call it a day. It’ll be pretty simple to do with React — just one extra arrow in the diagram:</p>
<h3 id="step-15-highlighting-overflow-characters-with-react-10-15-minutes-">Step 15: Highlighting Overflow Characters with React (10–15 minutes)</h3>
<p>Let’s start with our previous React implementation.</p>
<p><strong>✔ Fork the Pen below</strong> to get started.</p>
<p>We’ll do this step by step. First, <strong>we’ll display a simple alert with static text when you write past the limit.</strong></p>
<p>Since this will require a conditional, let’s write it in a separate method. <strong>Add <code>{this.renderOverflowAlert()}</code> above the <code>textarea</code>:</strong></p><pre><code class="language-js">{this.renderOverflowAlert()}
&lt;textarea ...&gt;&lt;/textarea&gt;</code></pre>
<p>Now, this method should return:</p>
<ul>
<li><strong>A div tag</strong> for the alert box if there are no more characters left.</li>
<li><strong>Nothing</strong> (i.e. empty string or NULL) otherwise.</li>
</ul>
<p>It turns out that in React, <strong>you can return JSX markup from a method and use this in any other method</strong>, everything will just work. In other words, you can do something like:</p><pre><code class="language-js">someMethod = () =&gt; {
return (
&lt;a href="#"&gt;Hello World&lt;/a&gt;
);
}
anotherMethod = () =&gt; {
return (
&lt;h1&gt;
{this.someMethod()}
&lt;/h1&gt;
);
}</code></pre>
<p>In <code>renderOverflowAlert</code>, we can return <code>( &lt;div&gt; ... &lt;/div&gt; )</code> &nbsp;in one case and nothing in<strong> the other. So our <code>renderOverflowAlert</code> method will loo</strong>k like this:</p><pre><code class="language-js">renderOverflowAlert = () =&gt; {
if (this.getRemainingChars() &lt; 0) {
return (
&lt;div className="alert alert-warning text-left"&gt;
&lt;strong&gt;Oops! Too Long:&lt;/strong&gt;
&lt;/div&gt;
);
}
return '';
};</code></pre>
<p>Notice that we’re checking <code>this.getRemainingChars()</code> to see if we need to show the alert or not.</p>
<p><strong>Try this out by typing 280+ characters (or 257+ characters with the “Add Photo” button ON). </strong>The alert should appear just as the character limit reaches -1.</p>
<h4 id="displaying-overflown-characters">Displaying Overflown Characters</h4>
<figcaption>(This should say 280 instead of 140 characters.)</figcaption>
</figure>
<p>Here’s a breakdown of the logic we want for the alert message:</p>
<ul>
<li>Between “Oops! Too Long:” and the actual text, there’s an empty single space followed by three dots. I used <code> </code> here because when writing markup in JSX, white spaces between tags get removed. (You can add them manually using <code>{' '}</code>.)</li>
<li>Then there are the 271st~280th (total of 10) characters of <code>this.state.text</code>.</li>
<li>Then there are the remaining characters highlighted in red.</li>
</ul>
<p><strong>Let’s write this in JSX. Inside the <code>if</code> clause of <code>overflowAlert</code>, we’ll create two variables: <code>beforeOverflowText</code> and <code>overflowText</code>. We’ll use <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring" rel="noopener">the substring method</a> on <code>this.state.text</code>.</strong></p><pre><code class="language-js">renderOverflowAlert = () =&gt; {
if (this.getRemainingChars() &lt; 0) {
const beforeOverflowText = this.state.text.substring(280 - 10, 280);
const overflowText = this.state.text.substring(280);
return (
&lt;div className="alert alert-warning text-left"&gt;
&lt;strong&gt;Oops! Too Long:&lt;/strong&gt;
&amp;nbsp; &amp;#8230;
{beforeOverflowText}
&lt;strong className="bg-danger text-light"&gt;{overflowText}&lt;/strong&gt;
&lt;/div&gt;
);
}
return '';
};</code></pre>
<ul>
<li>If you do <code>.substring(a, b)</code>, it will return the <code>(a + 1)-nth</code> until the <code>b-th</code> characters from the string.</li>
<li>If you do <code>.substring(a)</code>, it will return the <code>(a + 1)-nth</code> until the last characters from the string.</li>
<li>We use Bootstrap’s <code>bg-danger</code> class to highlight the text in red and <code>text-light</code> to make the text readable against the now-dark background.</li>
</ul>
<p>Copy paste the following text again and check that the part of the text after the first 280 characters is highlighted. We’re almost done!</p>
<blockquote>React embraces the fact that rendering logic is inherently coupled with other UI logic: how events are handled, how the state changes over time, and how the data is prepared for display.</blockquote>
<blockquote>Instead of artificially separating technologies by putting markup and logic in separate files, React separates concerns with loosely coupled units called “components” that contain both.</blockquote>
<h4 id="what-if-the-add-photo-button-is-on">What if the “Add Photo” button is ON?</h4>
<p>If the “Add Photo” button is ON then the character limit decreases by 23. <strong>So our <code>beforeOverflowText</code> and <code>overflowText</code> need to take that into account:</strong></p><pre><code class="language-js">renderOverflowAlert = () =&gt; {
if (this.getRemainingChars() &lt; 0) {
const imageLength = this.state.photoAdded ? 23 : 0;
const beforeOverflowText = this.state.text.substring(
280 - imageLength - 10,
280 - imageLength,
);
const overflowText = this.state.text.substring(280 - imageLength);
return (
&lt;div className="alert alert-warning text-left"&gt;
&lt;strong&gt;Oops! Too Long:&lt;/strong&gt;
&amp;nbsp; &amp;#8230;
{beforeOverflowText}
&lt;strong className="bg-danger text-light"&gt;{overflowText}&lt;/strong&gt;
&lt;/div&gt;
);
}
return '';
};</code></pre>
<p>Now, try toggling the “Add Photo” button while entering any text that’s longer than the limit. It should work as expected. Here’s the Pen:</p>
<p>That’s it! Again, you can see that the code changes were simple:</p>
<h3 id="step-16-what-s-next-5-minutes-">Step 16: What’s Next? (5 minutes)</h3>
<p>This concludes the tutorial. Hopefully you:</p>
<ul>
<li>understood the advantages of React’s component structure vs manually modifying the DOM with jQuery, and</li>
<li>learned how to write simple React components using JavaScript and JSX.</li>
</ul>
<h4 id="what-s-next"><strong>What’s next?</strong></h4>
<p>There are many ways to go from here.</p>
<p>One possibility would be to take a look at this short article called <a href="https://medium.freecodecamp.org/learning-react-roadmap-from-scratch-to-advanced-bff7735531b6" rel="noopener">How to Learn React — A roadmap from beginner to advanced</a>. It can help you decide how to best continue learning React.</p>
<p>I also highly recommend reading the following portions the official React documentation:</p>
<ul>
<li><a href="https://reactjs.org/docs/getting-started.html" rel="noopener">Getting started</a> which includes the React team’s recommended learning resources, and</li>
<li><a href="https://reactjs.org/docs/thinking-in-react.html" rel="noopener">Thinking in React</a> which will help you understand how to think about building components and applications with React.</li>
</ul>
<p>Before you leave though, I have an <strong>optional challenge</strong> for you!</p>
<p>If you feel comfortable enough with React already and want to write your own code, <strong>try to move <code>remainingChars</code> to the component’s <code>state</code>.</strong> Make sure it gets updated where necessary and use it in all the relevant places.</p>
<p><strong>Feel free to post the result as a Pen in the comments and I’ll be very happy to check it out!</strong></p>
<h4 id="thanks">Thanks</h4>
<p>Thanks a lot for reading this far! And above all thanks to <a href="https://twitter.com/chibicode" rel="noopener">@chibicode</a> for the huge amount of work he put into the first version of this tutorial! I hope this updated version does it justice.</p>
<p>I’m Julien. I work as a frontend engineer at <a href="https://healthy.io" rel="noopener">Healthy.io</a> and I help maintain <a href="https://github.com/react-boilerplate/react-boilerplate" rel="noopener">react-boilerplate</a> on GitHub. If you catch a mistake, want any clarifications or think I skipped something important, please let me know and I’ll make sure to fix it.</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
