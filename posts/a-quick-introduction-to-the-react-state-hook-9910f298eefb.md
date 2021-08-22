---
card: "https://cdn-media-1.freecodecamp.org/images/0*aZznaKKUdQFDwl-1"
tags: [JavaScript]
description: by Jake Wiesler
author: "Milad E. Fahmy"
title: "A quick introduction to the React State Hook"
created: "2021-08-15T19:40:01+02:00"
modified: "2021-08-15T19:40:01+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-react tag-software-development tag-ui tag-tech ">
<header class="post-full-header">
<h1 class="post-full-title">A quick introduction to the React State Hook</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/0*aZznaKKUdQFDwl-1 300w,
https://cdn-media-1.freecodecamp.org/images/0*aZznaKKUdQFDwl-1 600w,
https://cdn-media-1.freecodecamp.org/images/0*aZznaKKUdQFDwl-1 1000w,
https://cdn-media-1.freecodecamp.org/images/0*aZznaKKUdQFDwl-1 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/0*aZznaKKUdQFDwl-1" alt="A quick introduction to the React State Hook">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Jake Wiesler</p>
<h1 id="a-quick-introduction-to-the-react-state-hook">A quick introduction to the React State Hook</h1>
<figcaption>“time lapse photography of tunnel” by <a href="https://unsplash.com/@cadop?utm_source=medium&amp;utm_medium=referral" rel="noopener" target="_blank" title="">Mathew Schwartz</a> on <a href="https://unsplash.com?utm_source=medium&amp;utm_medium=referral" rel="noopener" target="_blank" title="">Unsplash</a></figcaption>
</figure>
<p>The <a href="https://reactjs.org/docs/hooks-intro.html" rel="noopener">React Hooks</a> proposal comes with some <a href="https://reactjs.org/docs/hooks-reference.html" rel="noopener">built-in hooks</a> that focus on doing one thing, such as providing state or context to a function component. You can also use these as building blocks to create <a href="https://reactjs.org/docs/hooks-custom.html" rel="noopener">your own</a>.</p>
<p>In <a href="https://www.jakewiesler.com/blog/on-react-hooks" rel="noopener">a recent post</a>, I shared some personal thoughts on the hooks proposal. This post will be more technical, as I go further into detail on what I consider to be the most important hook: <code>useState</code>.</p>
<p>As of writing this, hooks are still an <strong>experimental proposal</strong>. Nothing in this post should be considered final. Please keep this in mind. There is currently an <a href="https://github.com/reactjs/rfcs/pull/68" rel="noopener">open RFC</a> where you can stay current on the proposal, and even voice your concerns if you have any.</p>
<p>Hooks are available in <code>v16.7.0-alpha</code> of React. I’ve set up a <a href="https://codesandbox.io/s/1z16jj9y24" rel="noopener">CodeSandbox</a> that will get you going quickly if you want to follow along with the example in this post.</p>
<h3 id="react-state-today">React state today</h3>
<p>If you want a stateful component in React, your only option at the moment is to write that component as a class. This has been a source of frustration for me. Often I will find myself spending a good chunk of mental energy contemplating whether or not I want to refactor a <em>perfectly acceptable</em> function component into a class merely to hold some state.</p>
<p>I’ll convince myself that avoiding such a refactor is in my best interests. Eventually I’ll find myself falling down a rabbit hole of state management strategies, libraries, and <em>“other solutions”</em>.</p>
<p>If things <em>really</em> go south, I’ll start asking if the component even <em>needs</em> state in the first place, as if it’s something that should be avoided.</p>
<p>It sounds excessive, and it probably is. But it’s happened. And if you’ve spent a significant amount of time working with React, you may have found yourself on this wild goose chase as well (or maybe it’s just me ?).</p>
<p><strong>Adding state to a component should feel natural, but it’s hard to feel natural when I’m writing a class.</strong></p>
<h3 id="enter-the-usestate-hook">Enter the <code>useState</code> hook</h3>
<p>With the <code>useState</code> hook, function components can now hold local state.</p>
<figcaption>Made with <a href="https://carbon.now.sh" rel="noopener" target="_blank" title="">carbon.now.sh</a></figcaption>
</figure>
<p><code>useState</code> is a function that accepts an initial state and returns an array with 2 items:</p>
<ol>
<li>The current state</li>
<li>A function that can be called to update the state</li>
</ol>
<p>Because of the way array destructuring works, we can name the items returned by <code>useState</code> anything we want. There is no constraint imposed on us by the API. As a convention, it seems that the React ecosystem is taking to the <code>[value, setValue]</code> syntax.</p>
<p>In the example above, <code>color</code> is the state value and is initialized to <code>'GREEN'</code>. The <code>setColor</code> function can be called to update that value.</p>
<p>Note that, unlike a class component, state in a function component <strong>does not</strong> need to be an object. Here it’s just a string.</p>
<p>Another important note is that the update function, in this case <code>setColor</code>, does not <em>merge</em> the new state with the current, but instead <em>overrides</em> it completely. This is different from how <code>this.setState</code> works in class components.</p>
<h3 id="updating-state">Updating state</h3>
<p>The value of <code>color</code> will be preserved between re-renders (more on this below), <em>unless</em> the <code>setColor</code> function is called with a new value:</p>
<figcaption>Made with <a href="https://carbon.now.sh" rel="noopener" target="_blank" title="">carbon.now.sh</a></figcaption>
</figure>
<p>When the button is clicked, the function <code>slow</code> will call <code>setColor</code> with a value of <code>'YELLOW'</code>. This will cause the <code>StreetLight</code> component to re-render. When it does, the <code>color</code> variable will be updated to <code>'YELLOW'</code>.</p>
<h4 id="wait-what">Wait, what?</h4>
<p>At first glance, you would think that every time <code>StreetLight</code> renders, it calls <code>useState</code> with a value of <code>'GREEN'</code>. So how can <code>color</code> be anything <em>but</em> green?</p>
<p>A logical question. Here are a few lines from the <a href="https://reactjs.org/docs/hooks-state.html#declaring-a-state-variable" rel="noopener">React docs</a> that may help <em>ease</em> you in to this concept:</p>
<blockquote>“Normally, variables ‘disappear’ when the function exits but state variables are preserved by React.”</blockquote>
<blockquote>“React will remember its current value between re-renders, and provide the most recent one to our function.”</blockquote>
<blockquote>“You might be wondering: why is <code><em>useState</em></code> not named <code><em>createState</em></code> instead? ‘Create’ wouldn’t be quite accurate because the state is only created the first time our component renders. During the next renders, <code><em>useState</em></code> gives us the current state.”</blockquote>
<h4 id="but-how">But how?</h4>
<p><strong>It’s not magic, it’s JavaScript!</strong></p>
<p>Put simply, React <a href="https://reactjs.org/docs/hooks-faq.html#how-does-react-associate-hook-calls-with-components" rel="noopener">keeps track</a> of calls to <code>useState</code> for each component internally. It will also create a mapping between the update function and the state value for which it updates.</p>
<p>The initial value passed to <code>useState</code> is returned on the first render, but from there React will return the correct value based on the mapping. It also uses the map to know which slice of state to mutate when the update function is called.</p>
<p>This may seem perplexing to you, and you’re not alone. I was baffled by how this could work as well. My confusion only increased when I found out that <a href="https://reactjs.org/docs/hooks-overview.html#declaring-multiple-state-variables" rel="noopener">you can have multiple calls</a> to <code>useState</code> in the same component:</p>
<figcaption>Made with <a href="https://carbon.now.sh" rel="noopener" target="_blank" title="">carbon.now.sh</a></figcaption>
</figure>
<p>Yes, you can do this to your heart’s content.</p>
<h3 id="how-does-react-keep-track-of-the-state">How does React keep track of the state?</h3>
<p>In order for all of this to work, React expects that you follow <a href="https://reactjs.org/docs/hooks-rules.html#explanation" rel="noopener">a few rules</a>:</p>
<ol>
<li>Only call hooks at the top level of a function</li>
<li>Only call hooks from function components and <a href="https://www.jakewiesler.com/blog/the-react-state-hook/#writing-a-custom-hook" rel="noopener">custom hooks</a></li>
</ol>
<p>React imposes these rules because it <a href="https://reactjs.org/docs/hooks-rules.html#explanation" rel="noopener">relies on the call order of hooks</a> to manage data properly. This may seem fickle at first, but these rules aren’t hard to follow. And quite frankly I can’t think of a scenario where you’d want to break them.</p>
<p>In order to internalize how React manages hooks in your components, I <em>highly</em> recommend reading <a href="https://medium.com/@ryardley/react-hooks-not-magic-just-arrays-cd4f1857236e" rel="noopener">this Medium post</a> by <a href="https://medium.com/@ryardley" rel="noopener">Rudi Yardley</a>. It was crucial in my learning process. ?</p>
<p>And here’s a <a href="https://gist.github.com/gaearon/62866046e396f4de9b4827eae861ff19" rel="noopener">psuedo-implementation</a> of how React manages hooks, originally posted by <a href="https://mobile.twitter.com/jamiebuilds/status/1055538414538223616" rel="noopener">jamiebuilds</a> on Twitter.</p>
<h3 id="wrapping-up">Wrapping up</h3>
<p>I consider <code>useState</code> to be a building block. You can use it <em>as-is</em> to provide state to your function components, or you can use it to abstract stateful logic out into <a href="https://reactjs.org/docs/hooks-custom.html" rel="noopener">custom hooks</a>!</p>
<p>I believe custom hooks are going to be the biggest superpower React developers will gain when <code>v16.7</code> lands, and <code>useState</code> is the foundation. The community is already sharing some <a href="https://github.com/rehooks/awesome-react-hooks" rel="noopener">awesome stuff</a> with custom hooks and this pattern will only grow exponentially.</p>
<p>I hope you found this article helpful. Please reach out to me on <a href="https://twitter.com/jakewies" rel="noopener">Twitter</a> if you have any questions, and as always, happy coding!</p>
<p><em>Originally published at <a href="https://www.jakewiesler.com/blog/the-react-state-hook/" rel="noopener">www.jakewiesler.com</a>.</em></p>
<p><em>Hey friend, thanks for reading! The name’s <a href="https://twitter.com/jakewies" rel="noopener">Jake</a>. I love building user interfaces and <a href="https://www.jakewiesler.com/" rel="noopener">write about it</a> every week. I also run a small newsletter called <a href="https://www.jakewiesler.com/mail" rel="noopener"><strong>Original Copy</strong></a><strong>.</strong> It’s a casual and lighthearted affair. If that sounds like your cup of tea, consider subscribing!</em></p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
