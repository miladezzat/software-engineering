---
card: "/images/default.jpg"
tags: [JavaScript]
description: Frameworks like React, Vue, and Angular all help developers c
author: "Milad E. Fahmy"
title: "What is Storybook and How Can I Use It to Create a Component Library in React?"
created: "2021-08-15T19:29:22+02:00"
modified: "2021-08-15T19:29:22+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-create-react-app tag-react tag-reactjs tag-storybook tag-framework tag-components tag-libraries tag-developer-tools tag-design-tools tag-tools ">
<header class="post-full-header">
<h1 class="post-full-title">What is Storybook and How Can I Use It to Create a Component Library in React?</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/06/storybook.jpg 300w,
/news/content/images/size/w600/2020/06/storybook.jpg 600w,
/news/content/images/size/w1000/2020/06/storybook.jpg 1000w,
/news/content/images/size/w2000/2020/06/storybook.jpg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/06/storybook.jpg" alt="What is Storybook and How Can I Use It to Create a Component Library in React?">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Frameworks like React, Vue, and Angular all help developers create modular systems using components, but that doesn't usually include a good way to see them all from a higher point of view. </p>
<p>So how can we use Storybook to build libraries and design systems that self-document as we build them?</p>
<ul>
<li><a href="#what-is-storybook">What is Storybook?</a></li>
<li><a href="#what-are-we-going-to-build">What are we going to build?</a></li>
<li><a href="#step-0-bootstrapping-an-app">Step 0: Bootstrapping an app</a></li>
<li><a href="#step-1-installing-storybook">Step 1: Installing Storybook</a></li>
<li><a href="#step-2-creating-a-new-button">Step 2: Creating a new button</a></li>
<li><a href="#step-3-using-our-new-button-component">Step 3: Using our new Button component</a></li>
<li><a href="#repeat-creating-a-new-header-component">Repeat: Creating a new Header component</a></li>
<li><a href="#more-storybook-features">More Storybook features</a></li>
</ul>
<h2 id="what-is-storybook">What is Storybook?</h2>
<p><a href="https://storybook.js.org/">Storybook</a> is a JavaScript tool that allows developers to create organized UI systems making both the building process and documentation more efficient and easier to use.</p>
</figure>
<p>Once you build out a component, Storybook lets you create a "story" file where you can then import your component and create various use case examples in an iFramed sandbox using that component.</p>
<p>This provides an organized and focused environment to build new components and work on existing ones.</p>
<h2 id="what-are-we-going-to-build">What are we going to build?</h2>
<p>We're going to bootstrap a new <a href="https://reactjs.org/">React JS</a> app using <a href="https://reactjs.org/docs/create-a-new-react-app.html">Create React App</a>.</p>
<p>Inside that app, we're going to install Storybook and create a few new components that will help us learn how to create new components that we can work on in a story and then use it in a React app.</p>
<h2 id="step-0-bootstrapping-an-app">Step 0: Bootstrapping an app</h2>
<p>To get started, we're going to start from scratch with <a href="https://reactjs.org/docs/create-a-new-react-app.html">Create React App</a>. This will help us focus on getting productive in Storybook rather than walking through integrating it into a current app.</p>
<p>That said, if you're already working with an app created using Create React App that's not ejected, you should be able to still follow on with Part 1 and beyond just the same!</p>
<p>So let's get started by navigating to where we want to create our new app and run the Create React App command:</p><pre><code class="language-shell">npx create-react-app my-storybook
</code></pre>
<p><em>Note: feel free to replace <code>my-storybook</code> with the directory name of your choice.</em></p>
<figcaption>Bootstrapping with Create React App</figcaption>
</figure>
<p>Once that's finished running, you can navigate to the directory:</p><pre><code class="language-shell">cd my-storybook
</code></pre>
<p>And we're ready to go!</p>
<h2 id="step-1-installing-storybook">Step 1: Installing Storybook</h2>
<p>Storybook luckily makes it really easy to get started with a standard installation of React. Particularly with Create React App, Storybook automatically detects that we're using an app created using CRA and installs the dependencies and scaffolds everything for us.</p>
<h3 id="initializing-storybook">Initializing Storybook</h3>
<p>To get started installing Storybook, run:</p><pre><code class="language-shell">npx -p @storybook/cli sb init
</code></pre>
<figcaption>Initializing Storybook in a React app</figcaption>
</figure>
<p>If you aren't using Create React App or it didn't work, you can check out their <a href="https://storybook.js.org/docs/guides/guide-react/">available guides in their docs</a>.</p>
<p>After that's finished, all of our Storybook dependencies should be installed.</p>
<figcaption>Finished installing Storybook</figcaption>
</figure>
<h3 id="starting-up-storybook">Starting up Storybook</h3>
<p>So now we're ready to get moving! Finally, run:</p><pre><code class="language-shell">yarn storybook
# or
npm run storybook
</code></pre>
<p>And once everything finishes loading, Storybook will open a new tab in your browser and you should now see a welcome message inside of your new Storybook dashboard!</p>
<figcaption>Storybook welcome page</figcaption>
</figure>
<p><a href="https://github.com/colbyfayock/my-storybook/commit/3e994096384e31cb540150c9f14f41758ef3a746">Follow along with the commit!</a></p>
<h2 id="step-2-creating-a-new-button">Step 2: Creating a new button</h2>
<p>If you took a second to poke around the dashboard, you might have noticed that it comes pre-loaded with a Button that's available as a demo.</p>
<figcaption>Storybook demo button</figcaption>
</figure>
<p>You should also notice if you click the button, you actually see an action print out inside of the Actions tab at the bottom. This shows the event that's captured from the button click.</p>
<p>It's simple, but this is great to get a nice feel about what to expect in storybook. The only issue is, this is meant purely for demonstration purposes, so let's build our own button to replace it.</p>
<h3 id="creating-a-new-button-component">Creating a new Button component</h3>
<p>To get started, let's first create a few directories:</p>
<ul>
<li>Under <code>src</code>, create a new folder called <code>components</code></li>
<li>Under <code>components</code>, create a new folder called <code>Button</code></li>
</ul>
<p>Once you create those folders, create a new file called <code>index.js</code> inside of your <code>src/components/Button</code> folder and inside add:</p><pre><code class="language-js">// Inside src/components/Button/index.js
export { default } from './Button';
</code></pre>
<p>This will import the next file we created called <code>Button.js</code> which will allow us to more easily import our files with <code>src/components/Button</code> instead of <code>/src/components/Button/Button</code>.</p>
<p>Next, let's create <code>Button.js</code> right next to our <code>index.js</code> file with the following content:</p><pre><code class="language-js">// Inside src/components/Button/Button.js
import React from 'react';
const Button = ({ children, ...rest }) =&gt; {
return (
&lt;button className="button" {...rest}&gt;
{ children }
&lt;/button&gt;
)
}
export default Button;
</code></pre>
<p>Here, we're creating a new component called Button that adds a class of <code>button</code> to the element and passes through the <code>children</code>. We're a additionally <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment">destructuring</a> the rest of the props into the <code>rest</code> variable and <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax">spreading</a> that value into the <code>&lt;button&gt;</code> element.</p>
<p>If you've followed along, your files should now look like this:</p>
<figcaption>Button component in React</figcaption>
</figure>
<h3 id="using-our-new-button-component">Using our new Button component</h3>
<p>So now that we have our Button component, let's use it!</p>
<p>Open up the file <code>src/stories/1-Button.stories.js</code> and replace the line that's importing <code>Button</code> with:</p>
<figcaption>Updating the Button Storybook story</figcaption>
</figure>
<p>And once you hit save, you can open back up your browser tab with your Storybook dashboard, and you can now see a button that looks mostly similar, but it uses the browser's default styles for the <code>&lt;button&gt;</code> element. You'll even notice that if you click it, the event will still be logged under the Actions tab.</p>
<h3 id="styling-our-button-component">Styling our Button component</h3>
<p>Finally, we probably don't want to use the browser default styles, so let's make it look nice.</p>
<p>In our <code>src/components/Button</code> directory, add a new file <code>Button.css</code> and add the following content:</p><pre><code class="language-css">/* Inside src/components/Button/Button.css */
.button {
color: white;
font-weight: bold;
background-color: blueviolet;
border: none;
padding: .8em 1em;
border-radius: .2rem;
}
</code></pre>
<p>This applies a few styles to our <code>.button</code> class like adding a background color and changing the font color to white.</p>
<p>But if you open Storybook, you'll notice it didn't do anything. To use it, we need to import it into our component.</p>
<p>Inside <code>src/components/Button/Button.js</code> add the following at the top under the React import:</p><pre><code class="language-js">import './Button.css';
</code></pre>
<p>And once you save that and open up your browser, you should now see our new button with our updated styles!</p>
<figcaption>New Button in Storybook</figcaption>
</figure>
<p><a href="https://github.com/colbyfayock/my-storybook/commit/e71e0e9e666adee0455b0b69118053c2f551ab68">Follow along with the commit!</a></p>
<h2 id="step-3-using-our-new-button-component">Step 3: Using our new Button component</h2>
<p>The ultimate goal of our component is to use it right? So let's add it to our app.</p>
<h3 id="switching-over-to-the-react-app">Switching over to the React app</h3>
<p>First we'll need to either start our React app in a new terminal tab or kill the Storybook process and start the React process there. To start the React app using Create React App, run:</p><pre><code class="language-shell">yarn start
# or
npm run start
</code></pre>
<p>Once that loads, we should have our standard Create React App if you're following along with me:</p>
<figcaption>New Create React App</figcaption>
</figure>
<h3 id="importing-and-using-the-new-button">Importing and using the new button</h3>
<p>Next, inside of <code>src/App.js</code>, let's import our new Button at the top of the page:</p><pre><code class="language-js">import Button from './components/Button';
</code></pre>
<p>With Button imported, we can use it. Here, we can simply add it anywhere we want in the page. I'm going to replace the Learn React link with:</p><pre><code class="language-jsx">&lt;p&gt;
&lt;Button&gt;Hello, Storybook!&lt;/Button&gt;
&lt;/p&gt;
</code></pre>
<p>And if we save and reload the page, we should now see our Button on the page!</p>
<figcaption>New Button in Create React App</figcaption>
</figure>
<p><a href="https://github.com/colbyfayock/my-storybook/commit/e6071aae5be281101d486c4cc7664bf6cacb4028">Follow along with the commit</a></p>
<h2 id="repeat-creating-a-new-header-component">Repeat: Creating a new Header component</h2>
<p>The great thing about Storybook and React (or any of the supported frameworks) is that this process scales to as many components as you want.</p>
<p>So let's build another component!</p>
<h3 id="creating-our-header-component">Creating our Header component</h3>
<p>Similar to our Button, let's start off by creating the set of directories and files that give us our component.</p>
<p>Since we already did this once, I'm going to provide the code without walking through what's going on.</p>
<p>Let's start off by spinning back up our Storybook server with:</p><pre><code>yarn storybook
# or
npm run storybook
</code></pre>
<p>Create a <code>Header</code> directory inside the <code>src/components</code> directory.</p>
<p>Create an <code>index.js</code> file inside of <code>src/components/Header</code> with the following content:</p><pre><code class="language-js">// In src/components/Header/index.js
export { default } from './Header';
</code></pre>
<p>Create a <code>Header.js</code> file inside of <code>src/components/Header</code> with the following content:</p><pre><code class="language-jsx">// In src/components/Header/Header.js
import React from 'react';
import './Header.css';
const Header = ({ children }) =&gt; {
return (
&lt;h2 className="header"&gt;
{ children }
&lt;/h2&gt;
)
}
export default Header;
</code></pre>
<p>Create a <code>Header.css</code> file inside of <code>src/components/Header</code> with the following content:</p><pre><code class="language-css">/* In src/components/Header/Header.css */
.header {
font-family: sans-serif;
font-size: 2.5em;
color: blueviolet;
border-bottom: solid 5px aqua;
padding-bottom: .2em;
box-shadow: 0 5px 0 blueviolet;
}
</code></pre>
<p>Now if you notice, if you try to open up Storybook, again, nothing will happen. This time we need to create a new story file.</p>
<h3 id="creating-a-new-story-file">Creating a new Story file</h3>
<p>Inside <code>src/stories</code>, add a new file called <code>2-Header.stories.js</code>:</p><pre><code class="language-jsx">// Inside src/stories/2-Header.stories.js
import React from 'react';
import Header from '../components/Header';
export default {
title: 'Header',
component: Header,
};
export const Text = () =&gt; &lt;Header&gt;Hello Header&lt;/Header&gt;;
</code></pre>
<p>Here's a breakdown of our story file:</p>
<ul>
<li>First, we import our component – this is pretty standard any time we want to use it</li>
<li>The first thing we export is a <code>default</code> object. With Storybook, it expects the default export to be the configuration of our story, so here we provide it with a title and we pass in the component that we're using for this story</li>
<li>The second and last thing we export is the <code>Text</code> constant. With Storybook, any non-default export will be considered a variation that will get nested under the title that you provide in the default export</li>
</ul>
<p>And if you save this file and open up your Storybook dashboard in the browser, you should now see the new header!</p>
<figcaption>New Header component in Storybook</figcaption>
</figure>
<h3 id="using-the-header-component">Using the Header component</h3>
<p>Using our component is just the same as our Button component, so inside of <code>src/App.js</code>, let's add our Header.</p>
<p>After starting your React server, first import our new Header:</p><pre><code class="language-js">// In src/App.js
import Header from './components/Header';
</code></pre>
<p>Then add it to the top of the page:</p><pre><code class="language-jsx">// In src/App.js
&lt;Header&gt;My App&lt;/Header&gt;
</code></pre>
<p>And if you open the page, we'll see our new Header!</p>
<figcaption>Create React App with new Header and Button components</figcaption>
</figure>
<p><a href="https://github.com/colbyfayock/my-storybook/commit/e1c59eccaf5f4146a2fe039dca8874609d615194">Follow along with the commit!</a></p>
<h2 id="adding-more-components">Adding more components</h2>
<p>As you've noticed with our second Repeat step – adding a new component is pretty much the same process for any type of component we want to add. Once we have it in our library, we can develop it in a focused environment and then import it to our app to use.</p>
<p>You can now use this to manage your library of components and better maintain an entire system for your project!</p>
<h2 id="more-storybook-features">More Storybook features</h2>
<p>Storybook doesn't stop with just adding components, it provides the ability to configure <a href="https://storybook.js.org/addons/">Addons</a> that enhance the core capabilities opening up a lot of possibilities.</p>
<p>Here are some of my favorites...</p>
<h3 id="story-source">Story Source</h3>
<p>When building a component system, the hope is that people can easily use these components. But if you don't have documentation, someone would have to open up the file or try to find another use example.</p>
<p>Instead, <a href="https://github.com/storybookjs/storybook/tree/master/addons/storysource">Story Source</a> shows the code source of the story file you created allowing someone browsing your Storybook dashboard to get an example right along with the component output!</p>
<figcaption>Storybook Story Source demo</figcaption>
</figure>
<h3 id="storyshots">Storyshots</h3>
<p>If you're a fan of automated testing, you might have heard of using <a href="https://jestjs.io/">Jest</a> or another tool for adding snapshot testing to your app.</p>
<p><a href="https://github.com/storybookjs/storybook/tree/master/addons/storyshots/storyshots-core">StoryShots</a> is a way to easily add Jest snapshot testing to your component system. It creates snapshots based off of the stories you create so you can make sure that your components aren't fundamentally changing (or breaking) during development.</p>
<figcaption>Snapshot example with StoryShots</figcaption>
</figure>
<h2 id="what-s-your-favorite-part-of-storybook">What's your favorite part of Storybook?</h2>
<p><a href="https://twitter.com/colbyfayock">Share with me on Twitter!</a></p>
<h2 id="continue-the-conversation-">Continue the conversation!</h2>
<blockquote class="twitter-tweet">
<p lang="en" dir="ltr">.<a href="https://twitter.com/storybookjs?ref_src=twsrc%5Etfw">@storybookjs</a> is an awseome tool to manage a library of components for your project’s design system ?<br><br>It makes it fun to create and update components in a focused env ?‍?<br><br>I walk through what Storybook is and how to get started ?<a href="https://twitter.com/hashtag/webdev?src=hash&amp;ref_src=twsrc%5Etfw">#webdev</a> <a href="https://twitter.com/hashtag/100DaysOfCode?src=hash&amp;ref_src=twsrc%5Etfw">#100DaysOfCode</a><a href="https://t.co/4TLFlmp4Df">https://t.co/4TLFlmp4Df</a></p>— Colby Fayock (@colbyfayock) <a href="https://twitter.com/colbyfayock/status/1270392710260719616?ref_src=twsrc%5Etfw">June 9, 2020</a>
</blockquote>
</figure>
<p style="margin: 0;">
<a href="https://twitter.com/colbyfayock" style="display: block;">
</a>
</p>
<ul style="display:flex;justify-content:center;list-style:none;padding:0;margin: .5em 0 0;font-size: .8em;">
<li style="margin: 0 .6em;padding: 0;">
<a href="https://twitter.com/colbyfayock" style="text-decoration: none;">? Follow Me On Twitter</a>
</li>
<li style="margin: 0 .6em;padding: 0;">
<a href="https://youtube.com/colbyfayock" style="text-decoration: none;">?️ Subscribe To My Youtube</a>
</li>
<li style="margin: 0 .6em;padding: 0;">
<a href="https://www.colbyfayock.com/newsletter/" style="text-decoration: none;">✉️ Sign Up For My Newsletter</a>
</li>
</ul>
</div>
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
