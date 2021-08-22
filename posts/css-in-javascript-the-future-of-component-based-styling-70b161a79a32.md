---
card: "https://cdn-media-1.freecodecamp.org/images/1*yVKDbwtvfoakj3RZ9g8ARQ.png"
tags: [CSS]
description: By adopting inline styles, we can get all of the programmatic
author: "Milad E. Fahmy"
title: "CSS in JavaScript: The future of component-based styling"
created: "2021-08-15T19:52:25+02:00"
modified: "2021-08-15T19:52:25+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-css tag-tech tag-javascript tag-ux tag-design ">
<header class="post-full-header">
<h1 class="post-full-title">CSS in JavaScript: The future of component-based styling</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*yVKDbwtvfoakj3RZ9g8ARQ.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*yVKDbwtvfoakj3RZ9g8ARQ.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*yVKDbwtvfoakj3RZ9g8ARQ.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*yVKDbwtvfoakj3RZ9g8ARQ.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*yVKDbwtvfoakj3RZ9g8ARQ.png" alt="CSS in JavaScript: The future of component-based styling">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>By adopting inline styles, we can get all of the programmatic affordances of JavaScript.<strong> </strong>This gives us the benefits of something like a CSS pre-processor (variables, mixins, and functions). It also solves a lot of the problems that CSS has, such as global namespacing and styling conflicts.</p>
<p>For a deep dive into the problems that CSS in JavaScript solves, check out the famous presentation: <a href="https://speakerdeck.com/vjeux/react-css-in-js" rel="noopener">React CSS in JS</a>. For a case study on the performance improvements you get from Aphrodite, you can read <a href="http://engineering.khanacademy.org/posts/aphrodite-inline-css.htm" rel="noopener">Inline CSS at Khan Academy: Aphrodite</a>. If you want to learn more about CSS in JavaScript best practices, check out <a href="https://github.com/airbnb/javascript/tree/master/css-in-javascript" rel="noopener">Airbnb’s styleguide</a>.</p>
<p>In addition we’ll be using inline JavaScript styles to build components to address some of the fundamentals of design I covered in one of my previous articles: <a href="https://medium.freecodecamp.com/before-you-can-master-design-you-must-first-master-the-fundamentals-1981a2af1fda" rel="noopener">Before you can master design, you must first master the fundamentals</a>.</p>
<h3 id="a-motivating-example">A motivating example</h3>
<p>Let’s start off with a simple example: creating and styling a button.</p>
<p>Normally the component and its associated styles would go in the same file: <code>Button</code> and <code>ButtonStyles</code>. This is because they fall under the same concern: the view. However, for this example, I broke up the code into multiple gists to make it more digestible.</p>
<p>Here’s the button component:</p>
<p>This is nothing unexpected — just a stateless React component. Where Aphrodite comes into play is in the <code>className</code> property. The function <code>css</code> takes in a <code>styles</code> object and converts it into css. The <code>styles</code> object is created with Aphrodite’s <code>StyleSheet.create({ ... })</code> function. You can see the output of <code>StyleSheet.create({ ... })</code> with this <a href="https://output.jsbin.com/qoseye?" rel="noopener">Aphrodite playground</a>.</p>
<p><strong>Here is the button stylesheet:</strong></p>
<p>One of the benefits of Aphrodite is that migration is straightforward and the learning curve is low. Properties like <code>border-radius</code> become <code>borderRadius</code> and values become strings. Pseudo-selectors, media queries, and font definitions all work. In addition, vendor prefixes are added automatically.</p>
<p><strong>Here is the result:</strong></p>
<figcaption><a href="https://twitter.com/JonathanZWhite" rel="noopener" target="_blank" title="">One of the benefits of Aphrodite is that migration is straightforward and the learning curve is low.</a></figcaption>
</figure>
<p>With this example in mind, <strong>let’s take a look at how we can use Aphrodite to build a basic visual design system</strong>, focusing on the following design fundamentals: typography and spacing.</p>
<h3 id="fundamental-1-typography">Fundamental №1 —Typography</h3>
<p>Let’s start off with typography, a fundamental basis for design. <strong>The first step is to define typography constants</strong>. And unlike Sass or Less, constants for Aphrodite can go in a JavaScript or JSON file.</p>
<h4 id="define-typography-constants">Define typography constants</h4>
<p>When creating constants, <strong>use semantic names for your variables</strong>. For example, instead of naming one of your font-sizes <code>h2</code>, use a name like <code>displayLarge</code> that describes its <em>role</em>. Similarly, for font-weights, instead of naming one of your weights <code>600</code>, give it a name like <code>semibold</code> to describe its <em>effect</em>.</p>
<p>It’s important to get the values right for variables like font-sizes and line-heights. This is because they directly affect the vertical rhythm within a design. Vertical rhythm is a concept that helps you achieve consistent spacing between elements.</p>
<p>For more on vertical rhythm, you can read this article: <a href="https://zellwk.com/blog/why-vertical-rhythms/" rel="noopener">Why is Vertical Rhythm an Important Typography Practice?</a></p>
<figcaption><a href="https://drewish.com/tools/vertical-rhythm/" rel="noopener" target="_blank" title="">Use a calculator to determine line-heights</a></figcaption>
</figure>
<p>There is a science behind choosing the values for your line-heights and font-sizes. We can use mathematic ratios to generate a set of potential sizes candidates. A few weeks ago, I wrote an article detailing the methodology: <a href="https://medium.freecodecamp.com/typography-can-make-your-design-or-break-it-7be710aadcfe" rel="noopener">Typography can make or break your design: a process for choosing type</a>. For determining font-sizes, you use <a href="http://www.modularscale.com/" rel="noopener">Modular Scale</a>. For determining line-heights, you can use this <a href="https://drewish.com/tools/vertical-rhythm/" rel="noopener">vertical rhythm calculator</a>.</p>
<h4 id="define-a-heading-component">Define a heading component</h4>
<p>After defining our typography constants, the next step is to create a component to consume the values. <strong>The goal of the component is to enforce consistency in design and implementation for headings across the codebase.</strong></p>
<p>The <code>Heading</code> component is a stateless function that takes in a tag as a property and returns the tag with its associated style. This is possible because we defined the tag mappings earlier in the constants file.</p>
<p>At the bottom of the component file, we define our <code>styles</code> object. This is where we use the typography constants.</p>
<p>And this is how the <code>Heading</code> component would be used:</p>
<p>With this approach, <strong>we reduce unexpected variability in our type system</strong>. We avoid the pitfall of a hundred different font sizes by removing the need for global styles and standardizing headings across the codebase. In addition, this approach we took to building the <code>Heading</code> component can be applied to building a <code>Text</code> component for body copy.</p>
<h3 id="fundamental-2-spacing">Fundamental №2 — Spacing</h3>
<p><strong>Spacing controls both vertical and horizontal rhythm in design</strong>. That makes spacing pivotal to establishing a visual design system. Just like in the typography section, the first step to address spacing is to define spacing constants.</p>
<h4 id="define-spacing-constants">Define spacing constants</h4>
<p>When defining spacing constants for the margins between elements, we can adopt a mathematic approach. Using a <code>spacingFactor</code> constant, we can generate a set of distances based on a common factor. <strong>This approach ensures that we have logical and consistent spacing between elements.</strong></p>
<p>The example above uses a linear scale, one to thirteen. However, experiment with different scales and ratios. Designs require different scales based on their purpose, their audience, and the devices they target. As an example,<strong> here are the first six computed distances using the golden ratio</strong> with a <code>spacingFactor</code> of eight.</p><pre><code>Golden Ratio (1:1.618)</code></pre><pre><code>8.0 x (1.618 ^ 0) = 8.0008.0 x (1.618 ^ 1) = 12.948.0 x (1.618 ^ 2) = 20.948.0 x (1.618 ^ 3) = 33.898.0 x (1.618 ^ 4) = 54.828.0 x (1.618 ^ 5) = 88.71</code></pre>
<p>This is what the spacing scale would look like in code. I added a helper function to handle the computation and round off the output to its nearest pixel value.</p>
<p>After defining our spacing constants, we can use them to add margins to elements in our design. <strong>One approach we can take is to import the spacing constants and consume them in components</strong>.</p>
<p>For example, let’s add a <code>marginBottom</code> to the <code>Button</code> component.</p>
<p>This works in most scenarios. However, what happens if we want to change the <code>marginBottom</code> property of the button based on where the button is place?</p>
<p>One way to achieve variable margins is to override the margin style from the consuming parent component. An alternative approach is to <strong>create a </strong><code>Spacing</code> <strong>component to control the vertical margins on elements</strong>.</p>
<p>Using this approach, we can remove the responsibility of setting margins out of the child component and into the parent component. <strong>This way, the child component becomes layout agnostic, not requiring any knowledge of where to place itself in relation to other elements.</strong></p>
<p>Also you may have noticed that the examples only use <code>marginBottom</code>. This is because <strong>defining all your vertical margins in one direction allows you avoid collapsing margins and keep track of the vertical rhythm of your design</strong>. You can read more on this in Harry Robert’s article, <a href="https://csswizardry.com/2012/06/single-direction-margin-declarations/" rel="noopener">Single-direction margin declarations</a>.</p>
<p>On a final note, you can also use the spacing constants you defined as padding.</p>
<p>By using using the same spacing constants for both margins and padding, you can achieve more visual consistency in your design.</p>
<p>Here’s what the result might look like:</p>
<figcaption><a href="https://twitter.com/JonathanZWhite" rel="noopener" target="_blank" title="">By using spacing constants for your margins and padding, you can achieve more visual consistency.</a></figcaption>
</figure>
<p>Now that you have a grasp of CSS in JavaScript, go out and experiment. Try incorporating inline JavaScript styles into your next project. I think <strong>you’ll appreciate being able to work in a single context to handle all of your styling and view concerns</strong>.</p>
<p>On the topic of CSS and JavaScript, what are some new developments that you’re excited about? Personally I’m excited about async/await. Leave me a note or send me a <a href="https://twitter.com/jonathanzwhite" rel="noopener">tweet</a> on Twitter.</p>
<p>You can follow me on <a href="https://twitter.com/JonathanZWhite" rel="noopener">Twitter</a>, where I post non-sensical ramblings about design, front-end development, and virtual reality.</p>
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
