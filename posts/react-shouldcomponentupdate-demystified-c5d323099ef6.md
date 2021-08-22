---
card: "https://cdn-media-1.freecodecamp.org/images/1*_4NojzFjpzBM4vGMiAoYPw.jpeg"
tags: [React]
description: "While developing in React have you ever wondered when and why"
author: "Milad E. Fahmy"
title: "React shouldComponentUpdate demystified"
created: "2021-08-16T10:22:50+02:00"
modified: "2021-08-16T10:22:50+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-react tag-front-end-development tag-web-development tag-tech tag-javascript ">
<header class="post-full-header">
<h1 class="post-full-title">React shouldComponentUpdate demystified</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*_4NojzFjpzBM4vGMiAoYPw.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*_4NojzFjpzBM4vGMiAoYPw.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*_4NojzFjpzBM4vGMiAoYPw.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*_4NojzFjpzBM4vGMiAoYPw.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*_4NojzFjpzBM4vGMiAoYPw.jpeg" alt="React shouldComponentUpdate demystified">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>While developing in React have you ever wondered when and why a component’s <a href="https://facebook.github.io/react/docs/react-component.html#render" rel="noopener">render</a>() method is run? Or when to use less obvious lifecycle methods <a href="https://facebook.github.io/react/docs/react-component.html#shouldcomponentupdate" rel="noopener">shouldComponentUpdate</a>()?</p><p>If the answer is yes your app might have performance issues. Read through and you will be able to fix them easily.</p><p>It all comes down to how React works under the hood. React’s big promise is that it is blazing fast at rendering elements on a page.</p><p>To do this React keeps in memory two versions of the DOM:</p><ul><li>the version of the DOM currently displayed</li><li>the next version of the DOM to be displayed</li></ul><p>It compares the two and updates the displayed DOM with only the parts that have changed. This process is called <a href="https://facebook.github.io/react/docs/reconciliation.html" rel="noopener">tree reconciliation</a>. The root of the tree evaluated for reconciliation is a component which <a href="https://facebook.github.io/react/docs/components-and-props.html" rel="noopener">props</a> have changed.</p><p>Great. Now whether you planned for it or not, your web app follows the container/presentational components split to some extent. See <a href="https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0" rel="noopener">here</a> and <a href="https://medium.com/@learnreact/container-components-c0e67432e005" rel="noopener">here</a> for definitions. This means that each complex view in your app is made of a container component that holds the logic and has a lot of <a href="https://www.fullstackreact.com/30-days-of-react/day-11/" rel="noopener">display only components</a> as children.</p><p>This is a very good pattern. If you look closer though it means that any user interaction on the view will affect the container itself and trigger a render of it and all its children. Say you have a list of elements with a fancy display of text, image and an “Add to favourites” yellow star like button. The minimal model for a list element could be:</p><pre><code class="language-js">product = {
imageUrl: '...',
title: '...',
isFavourite: false
}</code></pre><p>The list of favourites could come from another source of data. Regardless, your components organisation probably looks something like this:</p><pre><code class="language-js">&lt;Container&gt;
&lt;ListOfElements
elements={this.props.elements}
onElementChanged={this.props.onElementChanged}
/&gt;
&lt;/Container&gt;</code></pre><p>The handler is called upon user click and saves the info server side (or persist in a store or whatever) and triggers a change in this.props.elements.</p><p>The result of a single click triggers the render of the container and of all the rows in the list just to update one checkbox.</p><p>This is where shouldComponentUpdate() comes into play. You can tell React not to render rows that do not need to be using this method.</p><pre><code class="language-js">class ListItem extends Component {
shouldComponentUpdate(nextProps, nextState) {
return nextProps.isFavourite != this.props.isFavourite;
}
...
}</code></pre><p>Here is a concrete case: on a marketplace app project we had a products management view for the sellers. The list had a “load more as the user scrolls down” pattern and an inline item actions “show/hide” to set visibility of each product. Everything was fine when sellers where managing &lt;100 products in their dashboard. Then a given seller started to enter and advertise more than 300 products …</p><p>There was a lag of ~600ms before the UI updated after a user clicked the “enable/disable” icon. The lag was definitely visible by the end user. Using the <a href="https://developers.google.com/web/tools/chrome-devtools/rendering-tools/" rel="noopener">Chrome profiler</a> we saw that it took React ~2ms to render a single row. Times 300 … we got up to 600ms. We added the shouldComponentUpdate() checks for the proper conditions. The render time after user click got under 10ms …</p><p><strong>I have put together a small project that allows reproducing this case <a href="https://github.com/jpdelima/react-should-component-update-demystified" rel="noopener">here</a>. Run it and read the code comments to see the magic happen.</strong></p><h3 id="warning-for-redux-users">Warning for Redux users</h3><p>The problem described above may happen more often if you are using <a href="https://github.com/reactjs/react-redux" rel="noopener">Redux</a> and <a href="https://github.com/reactjs/reselect" rel="noopener">reselect</a> (or similar “store based” action pipelines libraries).</p><p>With Redux and reselect you push actions to the store and you plug listeners to store changes, a.k.a. selectors. Selectors are globally available in the application and on a large application, it is pretty easy for many components to map to the same selectors. Changes to the store may trigger props changes and thus renders that are completely irrelevant for some components.</p><p>Here is the confusing advice: <strong>do not use </strong>shouldComponentUpdate() to prevent renders in such cases. The logic inside shouldComponentUpdate should only look at what is relevant to the component. It should never anticipate the contexts the component is used in. The reason is just that your code would quickly become unmaintainable.</p><p>If you have this kind of problems it means your store structure is wrong or selectors are not specific enough. You need to get to a new modelling round.</p><p>I recommend <a href="https://github.com/react-boilerplate/react-boilerplate" rel="noopener">this awesome boilerplate</a> guidelines. It promotes store encapsulation per high-level container with a global area for the key data structures that span across the whole application. This is a pretty safe approach to avoid store modelling mistakes.</p><p><strong>Thanks for reading! If you liked it please hit the clap button below. It helps other people see the story.</strong></p>
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
