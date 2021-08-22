---
card: "https://cdn-media-1.freecodecamp.org/images/1*iuSKK3d30UFIb_vNPdftjQ.jpeg"
tags: [JavaScript]
description: by Andreas Remdt
author: "Milad E. Fahmy"
title: "How to create email chips in pure React"
created: "2021-08-15T19:34:40+02:00"
modified: "2021-08-15T19:34:40+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-tech tag-react tag-front-end-development tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">How to create email chips in pure React</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*iuSKK3d30UFIb_vNPdftjQ.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*iuSKK3d30UFIb_vNPdftjQ.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*iuSKK3d30UFIb_vNPdftjQ.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*iuSKK3d30UFIb_vNPdftjQ.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*iuSKK3d30UFIb_vNPdftjQ.jpeg" alt="How to create email chips in pure React">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Andreas Remdt</p>
<h1 id="how-to-create-email-chips-in-pure-react">How to create email chips in pure React</h1>
<figcaption>As it turns out, chips can also be found on your computer’s mainboard. Photo by <a href="https://unsplash.com/photos/FO7JIlwjOtU?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText" rel="noopener" target="_blank" title="">Alexandre Debiève</a> on <a href="https://unsplash.com/search/photos/chip?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText" rel="noopener" target="_blank" title="">Unsplash</a>.</figcaption>
</figure>
<p>Imagine that you, the good-looking developer (yes, I’m talking to you!), want to build an invitation form where users can add one or more email addresses to a list and send a message to all of them.</p>
<p>Thinking about how this could be solved the best way possible, I looked at what Google does in their Gmail application. In the “New Message” overlay you can enter an email address and press “Return”, “Tab” or a comma to add it to the list of recipients. You can even paste a bunch of email addresses and the app will go ahead and parse and add them to your list. Pretty neat, isn’t it?</p>
<figcaption>Entering some emails into Gmail will add them as chips.</figcaption>
</figure>
<p>These visual components are commonly called <strong>Chips</strong> or <strong>Badges</strong> and can be found in frameworks like <a href="https://materializecss.com/chips.html" rel="noopener">Materialize</a>, <a href="https://getbootstrap.com/docs/4.0/components/badge/" rel="noopener">Bootstrap</a> or <a href="https://material-ui.com/demos/chips/" rel="noopener">Material UI</a>.</p>
<h3 id="what-we-will-be-building">What We Will be Building</h3>
<p>In this tutorial, I want to build such a feature in pure React, without the use of any other library or framework. We’ll create an input field which only accepts email addresses. The user can type them one by one or paste a bunch of them, which will create the chips as you can see and try in the example below:</p>
<figcaption>Don’t be shy, go ahead and enter your email address.</figcaption>
</figure>
<p><strong>Disclaimer: </strong>there are already various <a href="https://react-select.com/" rel="noopener">npm packages</a> out there that do the same job, however, I like to implement such small features from scratch as I don’t enjoy depending on (sometimes huge) 3rd party scripts. Also, it’s a good exercise to practice your React skills.</p>
<h3 id="scaffolding-the-project">Scaffolding the Project</h3>
<p>Since we don’t need anything special to get started, let’s just use <a href="https://facebook.github.io/create-react-app/" rel="noopener">create-react-app</a>. In case you haven’t installed it on your computer already, open your terminal and enter <code>npm install -g create-react-app</code>.</p>
<p>After the command has run, <em>create-react-app</em> should be installed (if you get an error during installation, you might need to run it with administrator privileges: <code>sudo npm install -g create-react-app</code>) and ready for use.</p>
<p>Go into your workspace and type <code>create-react-app chips</code>. In my case, I’m going to name my folder <code>chips</code>, but you can choose whatever name you prefer.</p>
<p><em>create-react-app</em> will go ahead and do its thing, installing all the dependencies that we need to get started. After this has been done, you can type <code>cd chips</code> to go into our newly created directory and <code>npm start</code> to boot up the development server. If everything went well, you should be greeted by the default React App screen.</p>
<figcaption>Seeing this screen means that you have successfully set up your project scaffolding. Let’s dive right into the code!</figcaption>
</figure>
<h3 id="project-organization">Project Organization</h3>
<p>In our <code>chips</code> directory we have a bunch of folders and files that were created for our convenience. We’ll be working in <code>src/App.js</code> for the most time, so open this file in your favorite code editor.</p>
<p>Delete all the code that you see inside of <code>App.js</code>. Next, let’s add a basic React class component:</p><pre><code class="language-jsx">import React from 'react';
class App extends React.Component {
render() {
return &lt;p&gt;Hello World&lt;/p&gt;;
}
}</code></pre>
<p>After saving <code>App.js</code>, you should see your browser refreshing automatically. The once dark page with the React logo is gone, instead, we have the simple text “Hello World” put onto the screen. Great start!</p>
<h3 id="the-input-field-and-state">The Input Field and State</h3>
<p>As the next step, we’ll replace the not-so-useful “Hello World” text in our JSX with something more suited: an input element.</p><pre><code class="language-js">return (
&lt;input
placeholder="Type or paste email addresses and press `Enter`"
value={this.state.value}
onChange={this.handleChange}
/&gt;
);</code></pre>
<p>We now have an HTML input element with a <code>placeholder</code> attribute, which will show as long as the user hasn’t entered anything.</p>
<p>Below the <code>placeholder</code> attribute you’ll notice something that’s quite common in the React world, known as a <a href="https://reactjs.org/docs/forms.html#controlled-components" rel="noopener">Controlled Component</a>. Normally, HTML form elements like <code>input</code> or <code>textarea</code> have their own state, which we can read and write with DOM methods like <code>document.getElementById('input').value</code>.</p>
<p>Using Controlled Components, the idea is that our React component’s state is the single source of through, meaning that the inputs value and our state are synced.</p>
<p>This allows us to manipulate the entered data <em>on the fly</em> and to add certain functionality that we’ll need later on.</p>
<p>If you would save and run this in your browser, you’d see the error message <code>TypeError: Cannot read property 'value' of null</code>. If you look at the code snippet it makes sense, because we are trying to access <code>value</code> from <code>this.state</code>, but we haven’t set up the state yet, nor do we have the <code>handleChange</code> method to control our state. Let’s add them.</p><pre><code class="language-jsx">class App extends React.Component {
state = {
value: ''
}
handleChange = (evt) =&gt; {
this.setState({
value: evt.target.value
});
};
render() { ... }
}</code></pre>
<p>First, we initialize a <a href="https://reactjs.org/docs/state-and-lifecycle.html#adding-local-state-to-a-class" rel="noopener">state object</a> which contains an empty <code>value</code> property. Below that, we define the method <code>handleChange</code> which is going to be called each time the <a href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event" rel="noopener">change event</a> on the input element is fired. <code>handleChange</code> then runs and updates the state using <code>setState</code>.</p>
<p><code>evt.target.value</code> is nothing React provides us with; it comes out of the box with JavaScript. <code>evt.target</code> is the input that we typed in, <code>value</code> is the entered value (how surprising).</p>
<p>Go ahead and try it out: in your browser you should be able to type something into the input. What you don’t see is that behind the scenes, your typed in data is synced with the state of your React component. Such magic!</p>
<h3 id="adding-emails-as-chips">Adding Emails as Chips</h3>
<p>The next step is to enable the user to add emails to a list by pressing “Return”, “Tab” or the comma key on their keyboard. Before we can do such a thing, we need a list (or rather array) in our state to where we can add emails:</p><pre><code class="language-js">state = {
value: '',
emails: []
}</code></pre>
<p>Now that we have an array to work with, we need to react (pun intended) on users pressing these special keys. The best way to do so is the <a href="https://developer.mozilla.org/en-US/docs/Web/Events/keydown" rel="noopener">keydown event</a>:</p><pre><code class="language-jsx">return (
&lt;input
placeholder="Type or paste email addresses and press `Enter`"
value={this.state.value}
onChange={this.handleChange}
onKeyDown={this.handleKeyDown}
/&gt;
);</code></pre>
<p>Notice how I added the <code>onKeyDown</code> event listener, which refers to the following method:</p><pre><code class="language-jsx">handleKeyDown = (evt) =&gt; {
if (['Enter', 'Tab', ','].includes(evt.key)) {
evt.preventDefault();
var email = this.state.value.trim();
if (email) {
this.setState({
emails: [...this.state.emails, email],
value: ''
});
}
}
};</code></pre>
<p>Wow, there’s so much going on here, right? Don’t worry, let’s go through the changes step by step:</p>
<ol>
<li><code>if (['Enter', 'Tab', ','].includes(evt.key))</code> is where the magic begins: inside this condition, we check if the pressed key (<code>evt.key</code>) is one of our triggers. I have created an array with these three keys (you could easily add another key like “Space”). Using the <code><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes" rel="noopener">includes</a></code> method we check if our pressed key part of the array. That said, if a user presses “Tab” then <code>evt.key</code> would be <code>Tab</code> which exists inside the array, therefore the condition is true.</li>
<li>If the condition is true, we’ll prevent the default from happening. Normally, by pressing the “Tab” key while being inside of an input element, you would focus on another element on the page or the browser (<a href="https://www.nngroup.com/articles/keyboard-accessibility/" rel="noopener">keyboard navigation</a>), meaning that we’d leave our current input. But using <code>evt.preventDefault()</code>, you can override the default browser behavior.</li>
<li>Below, we save the input that we have got so far. <code>this.state.value</code> always contains what the user has typed in, that’s what our <code>handleChange</code> method is for. Using <code><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim" rel="noopener">trim</a></code> just allows us to remove whitespace before or after the input.</li>
<li>Next, we check if the user has actually entered some data. If not, we don’t want to do anything.</li>
<li>However, if <code>email</code> actually contains some data (which could really be anything as of right now), we append it into the <code>emails</code> array in our state.</li>
<li>At last, we reset the <code>value</code> property in our state, which means that our input field will be cleared and the user can start typing a new email address (if he wants to). That’s the beauty of controlled components!</li>
</ol>
<p>You might wonder what <code>[...this.state.emails, email]</code> does, right? Well, it’s a quite new JavaScript feature called s<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax" rel="noopener">pread syntax</a>. The 3 dots mean that we extract all of the emails from <code>this.state.emails</code>. Now that we have them extracted, we can merge them together with our new <code>email</code> into a new array. Finally, we override our current <code>emails</code> property by assigning the newly created array to it. If you want to read more about this technique and why we can’t use <code>array.push()</code>, have a look at this <a href="https://stackoverflow.com/questions/26253351/correct-modification-of-state-arrays-in-reactjs" rel="noopener">Stack Overflow thread</a>.</p>
<p>Go ahead and try it out. Enter something into the input field and press any of our 3 triggers. Wait, nothing fancy happens you say? Well, that’s kind of expected, because although we add each input to our emails array we really don’t do anything with it, do we? Time to print them out:</p><pre><code class="language-jsx">return (
&lt;React.Fragment&gt;
{this.state.emails.map(email =&gt; &lt;div key={email}&gt;{email}&lt;/div&gt;)}
&lt;input
placeholder="Type or paste email addresses and press `Enter`"
value={this.state.value}
onChange={this.handleChange}
onKeyDown={this.handleKeyDown}
/&gt;
&lt;/React.Fragment&gt;
);</code></pre>
<p>If you look at the JSX above you’ll see that I have wrapped our entire output with a <a href="https://reactjs.org/docs/fragments.html" rel="noopener">React fragment</a> and put an expression above the input field.</p>
<p>The fragment is so that I don’t have to render an unnecessary HTML element into the DOM.</p>
<p>The expression on line 3 is another <a href="https://reactjs.org/docs/lists-and-keys.html" rel="noopener">typical React pattern</a> that you will find in almost all applications: in here, we loop (or map, to be more concise) over the <code>emails</code> array from our state and output a <code>div</code> for every single item. The <code>div</code> has the email address as text content (and don’t forget the <code>key</code> prop, or else React will be mad at you).</p>
<p>Let’s see what we have achieved so far:</p>
<figcaption>Isn’t that the greatest app of all times?</figcaption>
</figure>
<h3 id="removing-emails-from-the-list">Removing Emails from the List</h3>
<p>That’s great and all, but what if you added someone that — let’s say you don’t really like? We need a feature to remove already added emails from the list!</p><pre><code class="language-jsx">{this.state.emails.map(email =&gt; (
&lt;div key={email}&gt;
{email}
&lt;button
type="button"
onClick={() =&gt;  this.handleDelete(email)}
&gt;
&amp;times;
&lt;/button&gt;
&lt;/div&gt;
))}</code></pre>
<p>Look at the code above. Remember when we added the JSX to loop over all emails and print them out? This is the same code block, but now I have added a button inside our <code>div</code> that has a <a href="https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event" rel="noopener">click event</a> listener. This listener is going to call <code>handleDelete</code> as soon as a user presses the button.</p>
<p>Notice how this function call is different, though. It’s actually an arrow function that gets called and in return calls the <code>handleDelete</code> method with a parameter, in this case, our email.</p>
<p>This is a different approach from what you have seen so far, where we just did something like <code>onChange={this.handleChange}</code>. The reason is that this time, we need to pass the email that the user wants to get rid of into our method as a parameter, otherwise we wouldn’t be able to know which email to delete. If you want to know more details, <a href="https://medium.freecodecamp.org/reactjs-pass-parameters-to-event-handlers-ca1f5c422b9" rel="noopener">this article</a> has you covered.</p>
<p>Let’s implement the <code>handleDelete</code> method:</p><pre><code class="language-jsx">handleDelete = (toBeRemoved) =&gt; {
this.setState({
emails: this.state.emails.filter(email =&gt; email !== toBeRemoved)
});
};</code></pre>
<p>All we do in here is to set our state again, but this time we filter out the email address that was passed as a parameter. The <code><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter" rel="noopener">filter</a></code> method in JavaScript comes quite handy in cases like this.</p>
<p>We don’t have to use the weird spread syntax that you saw earlier (<code>[...array1, newItem]</code>), because <code>filter</code> returns a new array which doesn’t include the value that we just filtered out. We can then set this new array as our <code>emails</code> list.</p>
<figcaption>Deletion is now part of our component.</figcaption>
</figure>
<h3 id="making-it-pretty">Making it pretty</h3>
<p>If you are like me, you might be cringing right now about the amount of unstyled content. Let’s make this bad boy pretty:</p><pre><code class="language-jsx">return (
&lt;main className="wrapper"&gt;
{this.state.emails.map(email =&gt; (
&lt;div className="email-chip" key={email}&gt;
{email}
&lt;button
type="button"
className="button"
onClick={() =&gt;  this.handleDelete(email)}
&gt;
&amp;times;
&lt;/button&gt;
&lt;/div&gt;
))}
&lt;input
className="input"
placeholder="Type or paste email addresses and press `Enter`"
value={this.state.value}
onChange={this.handleChange}
onKeyDown={this.handleKeyDown}
/&gt;
&lt;/main&gt;
);</code></pre>
<ol>
<li>The first thing you’ll notice is that I have replaced the <code>React.Fragment</code> with <code>&lt;main className="wrappe</code>r"&gt;. This is just for styling purposes, I want to center the wrapper on my page.</li>
<li>I also have added some classes to the input, button and chips itself, which will receive a nice styling from our CSS file.</li>
<li>On top of the file, below <code>import React from 'react'</code>, I have added another import: <code>import './app.css'</code>. If you have used <em>create-react-app</em>, you’ll most likely find a <code>App.css</code> in your <code>src</code> directory. I have just renamed mine to a lowercase app.css and imported it.</li>
</ol>
<p>You can <a href="https://codesandbox.io/embed/ypyxr11109" rel="noopener">find the CSS here</a>, I won’t show it in this place as it would add too much bloat to this already long article.</p>
<p>Let’s have a look at what our app looks like now:</p>
<figcaption>Isn’t that a thing of beauty?</figcaption>
</figure>
<h3 id="validation">Validation</h3>
<p>Our component is taking shape, but you might begin to wonder what will happen if a user enters some gibberish instead of an actual email address, right? RIGHT?</p>
<p>Currently, our component accepts all kinds of input, which we should fix as the next step. Let’s add an <code>isValid</code> method first:</p><pre><code class="language-jsx">isValid(email) {
var error = null;
if (!this.isEmail(email)) {
error = `${email} is not a valid email address.`;
}
if (this.isInList(email)) {
error = `${email} has already been added.`;
}
if (error) {
this.setState({ error });
return false;
}
return true;
}</code></pre>
<p>The <code>isValid</code> method receives a single parameter, which is the input (in the best case an email address) that we want to validate. It initializes an <code>error</code> variable with <code>null</code>, meaning that we don’t have any errors yet.</p>
<p>We then see 2 if-conditions. The first one is checking if the value is a valid email utilizing the <code>isEmail</code> method:</p><pre><code class="language-js">isEmail(email) {
return /[\w\d\.-]+@[\w\d\.-]+\.[\w\d\.-]+/.test(email);
}</code></pre>
<p>In here, we receive a single parameter which should, but might not be the email that we want to add. Using a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions" rel="noopener">regular expression</a> and the <code><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test" rel="noopener">test</a></code> method, we check if it’s actually a valid email address.</p>
<p><strong>Disclaimer:</strong> I don’t guarantee that provided regular expression is the best one for validating emails. This is a difficult topic and there are many different variations out there, also things <a href="https://stackoverflow.com/questions/201323/how-to-validate-an-email-address-using-a-regular-expression" rel="noopener">can get pretty complicated</a>. But I’ll stick to this one, as it does the job.</p>
<p>The second method <code>isInList</code> also receives a single parameter (the email) and checks if it has already been added to our <code>emails</code> array in the state. Again, the awesome <code><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes" rel="noopener">includes</a></code> method is used:</p><pre><code class="language-js">isInList(email) {
return this.state.items.includes(email);
}</code></pre>
<p>All that our <code>isValid</code> method does is to use the other two methods to check if the given value is a valid email address and not yet part of our list. If neither of those conditions is true, we don’t set any error message and return <code>true</code>.</p>
<p>Otherwise, if one of these conditions is actually truthy, meaning that the email is invalid or already in the list, we set an error message and return <code>false</code>. The error lives on our component state, so we need to add the property it:</p><pre><code class="language-jsx">class App extends React.Component {
state = {
value: '',
emails: [],
error: null
}
// ...
}</code></pre>
<p>Notice that the error property is initialized with <code>null</code>, because when we initially load the app there’s no error, of course.</p>
<p>Two things are still missing: in our <code>handleKeyDown</code> method we need to actually use the <code>isValid</code> method. And we should display the error to the user, otherwise having an error message in the first place would be rather pointless.</p><pre><code class="language-jsx">handleKeyDown = (evt) =&gt; {
if (['Enter', 'Tab', ','].includes(evt.key)) {
evt.preventDefault();
var email = this.state.value.trim();
if (email &amp;&amp; this.isValid(email)) {
this.setState({
emails: [...this.state.emails, email],
value: ''
});
}
}
};</code></pre>
<p>Remember the <code>handleKeyDown</code> method? I sure hope you do, because you need to change it in order to get validation. On line 7, notice that I have added <code>&amp;&amp; this.isValid(email)</code> inside the condition. This means that we are now using our validation, passing it the value that the user has typed in. Only if <code>email</code> has an actual value <strong>and</strong> it’s a valid email address we continue by setting the state.</p>
<p>The last part of the puzzle is to show the error message to the user.</p><pre><code class="language-jsx">return (
&lt;main className="wrapper"&gt;
{this.state.emails.map(email =&gt; (
// Hidden...
))}
&lt;input
className={'input' + (this.state.error &amp;&amp; ' has-error')}
placeholder="Type or paste email addresses and press `Enter`"
value={this.state.value}
onChange={this.handleChange}
onKeyDown={this.handleKeyDown}
/&gt;
{this.state.error &amp;&amp;
&lt;p className="error"&gt;{this.state.error}&lt;/p&gt;}
&lt;/main&gt;
);</code></pre>
<p>Two things have changed:</p>
<ol>
<li>Below the <code>input</code>, we <a href="https://reactjs.org/docs/conditional-rendering.html" rel="noopener">conditionally render</a> a paragraph with our error message as text content.</li>
<li>The <code>className</code> of our input is no longer a simple string, but a JSX expression which appends <code>has-error</code> to the class name if <code>error</code> is true. This is useful to give our input some custom styling if it’s invalid.</li>
</ol>
<p>Go ahead and try the result in your browser. Try to enter an invalid email address or one that already is part of the list. You should see that the error message is displayed below the input.</p>
<p>There’s one issue though: if you made the error message appear, it will stay forever, even if you add a valid email address afterward. We need to reset the error after the user starts typing again:</p><pre><code class="language-jsx">handleChange = (evt) =&gt; {
this.setState({
value: evt.target.value,
error: null
});
};</code></pre>
<p>Our <code>handleChange</code> method is the best place to do so! It gets called each time the user changes the input’s value, meaning that we can set the error to <code>null</code> again. If the user didn’t learn his lesson and tries to add an invalid email address again, then… well, the error message will re-appear.</p>
<figcaption>No more invalid data!</figcaption>
</figure>
<h3 id="handling-pasting-from-the-clipboard">Handling Pasting from the Clipboard</h3>
<p>Our little component has grown quite a bit and became somewhat useful, but one important feature is still missing: pasting in email addresses from the clipboard.</p>
<p>This one can be rather interesting because users might want to copy a bunch of email addresses from their mail app and paste them all at once. Different mail apps, however, have different formats. If you copy a bunch of emails from the Apple Mail app, for example, it looks like this:</p><pre><code>To: John Doe &lt;john.doe@gmail.com&gt; Cc: Jane Doe &lt;jane.doe@gmail.com&gt;</code></pre>
<p>Your app might handle it differently. So, how do we parse these strings to only get the part we want?</p><pre><code class="language-jsx">handlePaste = (evt) =&gt; {
evt.preventDefault();
var paste = evt.clipboardData.getData('text');
var emails = paste.match(/[\w\d\.-]+@[\w\d\.-]+\.[\w\d\.-]+/g);
if (emails) {
var toBeAdded = emails.filter(email =&gt; !this.isInList(email));
this.setState({
emails: [...this.state.emails, ...toBeAdded]
});
}
};</code></pre>
<p>The above method is a lot to digest, so let’s dive right in.</p>
<ol>
<li>On line 2, we prevent the default, meaning that the text is not actually pasted into the input field. We’ll process it on our own.</li>
<li>On line 4, we get the clipboard data that the user was about to paste using the <a href="https://developer.mozilla.org/en-US/docs/Web/API/ClipboardEvent/clipboardData" rel="noopener">Clipboard API</a>. <code>paste</code> is a string.</li>
<li>Below, on line 5, we use the <code><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match" rel="noopener">match</a></code> method to apply a regex on our clipboard data. The <code>match</code> method will look through our entire string and get all parts that match with our regular expression (it’s the same one we used for the validation part). The result is an array of matches or <code>undefined</code> if nothing matched.</li>
<li>On line 7, we check if there are any actual emails. If so, we will filter them on line 8 to exclude emails that are already in our list. <code>filter</code> is our friend, once again. The variable <code>toBeAdded</code> should now be an array with emails that are not part of our list yet. Notice how we nicely reused our <code>isInList</code> method.</li>
<li>On line 10, we use the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax" rel="noopener">spread syntax</a> again to merge our current <code>emails</code> array with the newly created <code>toBeAdded</code> array.</li>
</ol>
<p>Notice how we didn’t validate the emails using <code>isEmail</code>. This step is implicitly done because we relied on the same regular expression to get all valid email addresses. If a user pasted an invalid email address, it would never make it.</p>
<p>All that’s missing is the connection between our input and the <code>handlePaste</code> method:</p><pre><code class="language-jsx">&lt;input
className={'input' + (this.state.error &amp;&amp; ' has-error'}
placeholder="Type or paste email addresses and press `Enter`"
value={this.state.value}
onChange={this.handleChange}
onKeyDown={this.handleKeyDown}
onPaste={this.handlePaste}
/&gt;</code></pre>
<p>Thankfully, the <a href="https://developer.mozilla.org/en-US/docs/Web/API/Element/paste_event" rel="noopener">paste event</a> has you covered.</p>
<h3 id="conclusion">Conclusion</h3>
<p>There you have it, our finished component that accepts multiple email addresses and even lets you paste them in.</p>
<figcaption>The finished component.</figcaption>
</figure>
<p>Of course, if you could add more features and improvements, here are a few examples:</p>
<ul>
<li>If a user enters an email address but doesn’t press “Enter” or “Tab”, what should happen? You could attach a <a href="https://developer.mozilla.org/en-US/docs/Web/API/Element/blur_event" rel="noopener">blur event</a> to the input that tries to validate and add the content if the user clicks on something else on the page, like a submit button.</li>
<li>You could make the chips clickable so that a user could select them to edit the email address.</li>
<li>Accessibility could surely be improved, making it easier for screen readers to understand.</li>
</ul>
<p>I hope you enjoyed this tutorial, feel free to tell me your suggestions or feedback. Happy coding!</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
