---
card: "https://cdn-media-1.freecodecamp.org/images/0*-M7kIz-f-VmOfAy6."
tags: [React]
description: by Ryan Yurkanin
author: "Milad E. Fahmy"
title: "How to use React and React-Sentinel to make responsive, dumb components"
created: "2021-08-15T19:46:23+02:00"
modified: "2021-08-15T19:46:23+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-react tag-animation tag-javascript tag-css tag-tech ">
<header class="post-full-header">
<h1 class="post-full-title">How to use React and React-Sentinel to make responsive, dumb components</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/0*-M7kIz-f-VmOfAy6. 300w,
https://cdn-media-1.freecodecamp.org/images/0*-M7kIz-f-VmOfAy6. 600w,
https://cdn-media-1.freecodecamp.org/images/0*-M7kIz-f-VmOfAy6. 1000w,
https://cdn-media-1.freecodecamp.org/images/0*-M7kIz-f-VmOfAy6. 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/0*-M7kIz-f-VmOfAy6." alt="How to use React and React-Sentinel to make responsive, dumb components">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Ryan Yurkanin</p>
<h1 id="how-to-use-react-and-react-sentinel-to-make-responsive-dumb-components">How to use React and React-Sentinel to make responsive, dumb components</h1>
<figcaption>Sometimes you just need a friend to stand guard! Photo by <a href="https://unsplash.com/@aldodlp?utm_source=medium&amp;utm_medium=referral" rel="noopener" target="_blank" title="">Aldo De La Paz</a> on <a href="https://unsplash.com?utm_source=medium&amp;utm_medium=referral" rel="noopener" target="_blank" title="">Unsplash</a></figcaption>
</figure>
<p><strong>tldr; Media Queries aren’t always enough. Element Queries are amazing, and you can black box them with a combination of render props, and something observing your element!</strong></p>
<h4 id="dealing-with-media-queries">Dealing with Media Queries</h4>
<p>If you’ve had to recreate a Responsive Design , then you know how awesome — but troublesome — <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries" rel="noopener">Media Queries</a> are.</p>
<p>Media Queries allow for CSS that only applies when size changes relative to viewport.</p>
<ol>
</ol>
<figcaption>… and now we are in CSS calc() hell. ? </figcaption>
</figure>
<p>At this point, I started questioning why I even got into developing in the first place</p>
<p>If you’re like me, though, you want to be able to bring it into not only the JavaScript ecosystem, but the React ecosystem as well. Can we make an intelligent, black-boxed, responsive container, and a dumb visual component?</p>
<p><strong>Yes</strong> we can.</p>
<h4 id="the-solution">The solution</h4>
<p>The beauty of this component is that it doesn’t know why it’s the size that it is. That’s up to whomever is using it to decide, which means this component can be reused in a number of layouts. Our goal is to<strong> keep it this way</strong>, while simultaneously making it awesome.</p>
<p>Let’s see how we can do that by bringing in <code>react-sentinel</code>, and creating a smart responsive container with it! ?</p>
<p>So what is <strong>actually</strong> going on here?</p>
<p><code>react-sentinel</code> works by taking a function, the <code>observe</code> prop, and calling it repeatedly in a performant <code>requestAnimationFrame</code> or <code>requestIdleCallback</code> loop.</p>
<p><code>requestAnimationFrame</code> loops at a speed that is determined by the browser. If someone is browsing on an older phone, the loop will happen less often. This gives the browser finer control and leads to a smoother experience!</p>
<p>If you want to learn more about <code>requestAnimationFrame</code> , I suggest reading <a href="https://medium.com/@bdc/gain-motion-superpowers-with-requestanimationframe-ecc6d5b0d9a4" rel="noopener"><strong>Gain Motion Superpowers with requestAnimationFrame</strong></a> by Benjamin De Cock! ?</p>
<p><code>Sentinel</code> takes the return value from those functions, and if it’s different from the previous return value, sets it as the <code>Sentinel</code> component’s local state. If it’s not different, then we stop right there and don’t update so we aren’t constantly re-rerendering! ?</p>
<h4 id="using-render-props">Using Render Props</h4>
<p>Now at this point you may be asking what good is setting <code>Sentinel</code> ’s local state? How are we going to get that? ?</p>
<p>My preferred way to do this is using Render Props.</p>
<p>Most know that you can pass in children to a component, and access them using <code>this.props.children</code>, but you could also pass in a function!</p><pre><code>&lt;MightHaveSecrets&gt;  {() =&gt; &lt;WantsSecrets /&gt;}&lt;/MightHaveSecrets&gt;</code></pre>
<p>Alright, that’s a thing. Why would anyone want to do that? ?</p>
<p>Because now, <strong>has secrets</strong> can pass it’s internal secrets as an argument to that function! It has no idea how you are actually going to use those secrets, which makes it super encapsulated.</p><pre><code>&lt;MightHaveSecrets&gt;  {secret =&gt; &lt;WantsSecrets emoji={ secret ? ? : ? } /&gt;}&lt;/MightHaveSecrets&gt;  </code></pre>
<p>All the <code>&lt;Sentinel</code> /&gt; component cares about is polling infinitely looking to update itself. Render Props allow any chunk of UI to interpret those updates as they see fit. Also it’s a lot more obvious where those values are coming from. ?</p>
<p>If you want to learn more about Render Props, I suggest taking a look at the React Documentation or reading this article by the person <a href="https://cdb.reacttraining.com/use-a-render-prop-50de598f11ce" rel="noopener">who first turned me onto them!</a></p>
<p>Now we have a smart component that translates the size of the element into simple props that <code>&lt;DumbCard</code> /&gt;can digest. It’s super easy to refactor and swap values, and you don’t have to worry about what layout it lives in, or what’s going on outside of its scope.</p>
<h4 id="wrapping-up">Wrapping up</h4>
<p>The cool thing about <code>react-sentinel</code> is that it doesn’t just solve the element queries problem. I’ve also used it to create a Smart Animation component, since it uses <code>requestAnimationframe</code> under the hood ?</p>
<p><a href="https://github.com/YurkaninRyan/react-sentinel" rel="noopener">Here</a> is where you can check out the code for <code>react-sentinel</code>, as well as some alternative solutions!</p>
<p>If you have any questions, or any topics that you’d like to see covered more in-depth feel free to hit me up! Thanks for reading and happy coding! ?</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
