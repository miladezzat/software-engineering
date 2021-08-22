---
card: "https://cdn-media-1.freecodecamp.org/images/0*QphJEMJgj30s60_w"
tags: [JavaScript]
description: by Sarah Dayan
author: "Milad E. Fahmy"
title: "An introduction to test-driven development with Vue.js"
created: "2021-08-15T19:33:55+02:00"
modified: "2021-08-15T19:33:55+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-tdd tag-tech tag-api tag-vuejs ">
<header class="post-full-header">
<h1 class="post-full-title">An introduction to test-driven development with Vue.js</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/0*QphJEMJgj30s60_w 300w,
https://cdn-media-1.freecodecamp.org/images/0*QphJEMJgj30s60_w 600w,
https://cdn-media-1.freecodecamp.org/images/0*QphJEMJgj30s60_w 1000w,
https://cdn-media-1.freecodecamp.org/images/0*QphJEMJgj30s60_w 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/0*QphJEMJgj30s60_w" alt="An introduction to test-driven development with Vue.js">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Sarah Dayan</p>
<h1 id="an-introduction-to-test-driven-development-with-vue-js">An introduction to test-driven development with Vue.js</h1>
<figcaption>Photo by <a href="https://unsplash.com/@_louisreed?utm_source=medium&amp;utm_medium=referral" rel="noopener" target="_blank" title="">Louis Reed</a> on <a href="https://unsplash.com?utm_source=medium&amp;utm_medium=referral" rel="noopener" target="_blank" title="">Unsplash</a></figcaption>
</figure>
<p>Test-driven development (TDD) is a process where <strong>you write tests before you write the associated code</strong>. You first write a test that describes an expected behavior, and you run it, ensuring it fails. Then, you write the dumbest, most straightforward code you can to make the test pass. Finally, you refactor the code to make it right. And you repeat all the steps for each test until you’re done.</p>
<p>This approach has many advantages. First, <strong>it forces you to think before you code</strong>. It’s commonplace to rush into writing code before establishing what it should do. This practice leads to wasting time and writing complicated code. With TDD, any new piece of code requires a test first, so you have no choice but take the time to define what this code should do before you write it.</p>
<p>Secondly, <strong>it ensures you write unit tests</strong>. Starting with the code often leads to writing incomplete tests, or even no tests at all. Such a practice usually happens as a result of not having precise and exhaustive specs, which leads to spending more time coding than you should. Writing tests becomes a costly effort, which is easy to undermine once the production code is ready.</p>
<p><strong>Unit tests are critical to building robust code</strong>. Overlooking or rushing them increases chances of your code breaking in production at some point.</p>
<h3 id="why-do-tdd-for-components">Why do TDD for components?</h3>
<p><strong>Testing a component can be counter-intuitive</strong>. As we saw in <a href="https://frontstuff.io/unit-test-your-first-vuejs-component" rel="noopener">Unit Test Your First Vue.js Component</a>, it requires a mental shift to wrap your head around testing components versus testing plain scripts, knowing what to test, and understanding the line between unit tests and end-to-end.</p>
<p><strong>TDD makes all this easier</strong>. Instead of writing tests by examining all bits and pieces of a finished project and trying to guess what you should cover, you’re doing the opposite. You’re starting from actual specs, a list of things that the component should <em>do</em>, without caring about how it does it. This way, you’re ensuring that all you test is the public API, but you’re also guaranteeing you don’t forget anything.</p>
<p>In this tutorial, we’ll build <strong>a color picker</strong>. For every swatch, users can access the matching color code, either in hexadecimal, RGB, or HSL.</p>
<figcaption>Design inspired from <a href="https://dribbble.com/shots/2908891-Custom-Color-Picker-Exploration" rel="noopener" target="_blank" title="">Custom Color Picker Exploration</a> by <a href="https://dribbble.com/_ChrisCastillo" rel="noopener" target="_blank" title="">Chris Castillo</a></figcaption>
</figure>
<p>Despite its apparent simplicity, there are a bunch of small pieces of logic to test. They require some thinking before jumping into code.</p>
<p>In this article, we’ll deep dive into TDD. We’ll <a href="https://frontstuff.io/an-introduction-to-tdd-with-vuejs#write-down-your-specs" rel="noopener">put some specs together</a> before we write a single line of code. Then, we’ll <a href="https://frontstuff.io/an-introduction-to-tdd-with-vuejs#write-test-driven-code" rel="noopener">test every public feature</a> in a test-driven fashion. Finally, we’ll reflect on what we did and <a href="https://frontstuff.io/an-introduction-to-tdd-with-vuejs#afterthoughts" rel="noopener">see what we can learn from it</a>.</p>
<h3 id="before-we-start">Before we start</h3>
<p>This tutorial assumes you’ve already built something with Vue.js before, and written unit tests for it using <a href="https://vue-test-utils.vuejs.org/" rel="noopener">Vue Test Utils</a> and <a href="https://jestjs.io/" rel="noopener">Jest</a> (or a similar test runner). It won’t go deeper into the fundamentals, so make sure you get up to speed first. If you’re not there yet, I recommend you go over <a href="https://frontstuff.io/build-your-first-vue-js-component" rel="noopener">Build Your First Vue.js Component</a> and <a href="https://frontstuff.io/unit-test-your-first-vuejs-component" rel="noopener">Unit Test Your First Vue.js Component</a>.</p>
<p><strong><em>TL;DR:</em></strong> <em>this post goes in-depth in the how and why. It’s designed to help you understand every decision behind testing a real-world Vue.js component with TDD and teach you how to make design decisions for your future projects. If you want to understand the whole thought process, read on. Otherwise, you can go directly to the <a href="https://frontstuff.io/an-introduction-to-tdd-with-vuejs#afterthoughts" rel="noopener">afterthoughts</a> at the end, or look at the final code on <a href="https://github.com/sarahdayan/colorpicker-tdd-tutorial" rel="noopener">GitHub</a>.</em></p>
<h3 id="write-down-your-specs">Write down your specs</h3>
<p>Before you even write your first test, <strong>you should write down an overview of what the component should do</strong>. Having specs makes testing much more straightforward since you’re mostly rewriting each spec in the form of tests.</p>
<p>Let’s think about the different parts that compose our component, and what they should do.</p>
<p>First, we have a collection of <strong>color swatches</strong>. We want to be able to pass a list of custom colors and display as swatches in the component. The first one should be selected by default, and the end user can select a new one by clicking it.</p>
<p>Secondly, we have the <strong>color mode toggler</strong>. The end user should be able to switch between three modes: hexadecimal (default), RGB and HSL.</p>
<p>Finally, we have the <strong>color code output</strong>, where the end user can get the code for the currently selected color swatch. This code is a combination of the selected swatch and color mode. Thus, by default, it should display the first swatch as a hexadecimal value. When changing any of these, the code should update accordingly.</p>
<p>As you can see, we don’t go too deep into details; we don’t specify what the color mode labels should be, or what the active state looks like for the color swatches. We can make most of the small decisions on the fly, even when doing TDD. Yet, we’ve come <strong>from a simple definition of what the component should be, to a comprehensive set of specs to start from</strong>.</p>
<h3 id="write-test-driven-code">Write test-driven code</h3>
<p>First, you need to create a new Vue project with <a href="https://cli.vuejs.org/" rel="noopener">Vue CLI</a>. You can check <a href="https://frontstuff.io/build-your-first-vue-js-component" rel="noopener">Build Your First Vue.js Component</a> if you need a step by step guide.</p>
<p>During the scaffolding process, manually select features and make sure you check <strong>Unit testing</strong>. Pick Jest as your testing solution, and proceed until the project is created, dependencies are installed, and you’re ready to go.</p>
<p>We’ll need to use SVG files as components, so you also need to install the right loader for them. Install <a href="https://www.npmjs.com/package/vue-svg-loader" rel="noopener">vue-svg-loader</a> as a dev dependency, and add a rule for it in your <code>vue.config.js</code> file.</p><pre><code>// vue.config.js
module.exports = {
chainWebpack: config =&gt; {
const svgRule = config.module.rule('svg')
svgRule.uses.clear()
svgRule.use('vue-svg-loader').loader('vue-svg-loader')
}
}</code></pre>
<p>This loader doesn’t play well with Jest by default, which causes tests to throw. To fix it, create a <code>svgTransform.js</code> file <a href="https://vue-svg-loader.js.org/faq.html#how-to-use-this-loader-with-jest" rel="noopener">as documented on the website</a>, and edit your <code>jest.config.js</code> as follows:</p><pre><code>// svgTransform.js
const vueJest = require('vue-jest/lib/template-compiler')
module.exports = {
process(content) {
const { render } = vueJest({
content,
attrs: {
functional: false
}
})
return `module.exports = { render: ${render} }`
}
}
// jest.config.js
module.exports = {
// ...
transform: {
// ...
'.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
'^.+\\.svg$': '&lt;rootDir&gt;/svgTransform.js'
},
// ...
}</code></pre>
<p>Note that we’ve removed “svg” from the first regular expression (the one that gets transformed with <code>jest-transform-stub</code>). This way, we ensure SVGs get picked up by <code>svgTransform.js</code>.</p>
<p>Additionally, you need to install <a href="https://www.npmjs.com/package/color-convert" rel="noopener">color-convert</a> as a dependency. We’ll need it both in our code and in our tests later on.</p>
<p><strong>Don’t serve the project yet</strong>. We’re going to write tests and rely on them passing or not to move on. We don’t want to control whether what we build works by testing it visually in the browser, nor being distracted by how it looks.</p>
<p>Instead, open your project and create a new <code>ColorPicker.vue</code> single-file component in the <code>src/components/</code> directory. In <code>tests/unit/</code>, create its associated spec file.</p><pre><code>&lt;!-- ColorPicker.vue --&gt;
&lt;template&gt;
&lt;div&gt;&lt;/div&gt;
&lt;/template&gt;
&lt;script&gt;
export default {}
&lt;/script&gt;
&lt;style&gt;
&lt;/style&gt;
// ColorPicker.spec.js
import { shallowMount } from '@vue/test-utils'
import ColorPicker from '@/components/ColorPicker'
describe('ColorPicker', () =&gt; {
// let's do this!
})</code></pre>
<p>In your terminal, execute the following command to run tests:</p><pre><code>npm run test:unit --watchAll</code></pre>
<p>For now, you should get an error because you don’t yet have tests. Don’t worry though; we’ll fix this shortly ? Note the usage of the -<code>-watchAll </code>flag in the command: Jest is now watching your files. This way, you won’t have to re-run test by hand.</p>
<p>TDD goes in 3 stages:</p>
<ol>
<li><strong>Red</strong>: you write a test that describes an expected behavior, then you run it, ensuring it fails.</li>
<li><strong>Green</strong>: you write the dumbest, most straightforward code you can to make the test pass.</li>
<li><strong>Refactor</strong>: you refactor the code to make it right.</li>
</ol>
<h3 id="step-1-red">Step 1: Red</h3>
<p>Time to write our first test! We’ll start with the color swatches. For clarity, we’ll wrap all tests for each distinct element in their own suite, using a <code>describe</code> block.</p>
<p>First, we want to make sure that the component displays each color that we provide as an individual swatch. We would pass those as props, in the form of an array of hexadecimal strings. In the component, we would display the list as an unordered list, and assign the background color via a <code>style</code> attribute.</p><pre><code>import { shallowMount } from '@vue/test-utils'
import ColorPicker from '@/components/ColorPicker'
import convert from 'color-convert'
let wrapper = null
const propsData = {
swatches: ['e3342f', '3490dc', 'f6993f', '38c172', 'fff']
}
beforeEach(() =&gt; (wrapper = shallowMount(ColorPicker, { propsData })))
afterEach(() =&gt; wrapper.destroy())
describe('ColorPicker', () =&gt; {
describe('Swatches', () =&gt; {
test('displays each color as an individual swatch', () =&gt; {
const swatches = wrapper.findAll('.swatch')
propsData.swatches.forEach((swatch, index) =&gt; {
expect(swatches.at(index).attributes().style).toBe(
`background: rgb(${convert.hex.rgb(swatch).join(', ')})`
)
})
})
})
})</code></pre>
<p>We mounted our <code>ColorPicker</code> component and wrote a test that expects to find items with a background color matching the colors passed as props. <strong>This test is bound to fail</strong>: we currently have nothing in <code>ColorPicker.vue</code>. If you look at your terminal, you should have an error saying that no item exists at 0. This is great! <strong>We just passed the first step of TDD with flying colors.</strong></p>
<h3 id="step-2-green">Step 2: Green</h3>
<p>Our test is failing; we’re on the right track. Now, time to make it pass. We’re not much interested in writing working or smart code at this point, all we want is to make Jest happy. Right now, Vue Test Utils complains about the fact that we don’t event have no item at index 0.</p><pre><code>[vue-test-utils]: no item exists at 0</code></pre>
<p>The simplest thing we can do to make that error go away is to add an unordered list with a <code>swatch</code> class on the list item.</p><pre><code>&lt;template&gt;
&lt;div class="color-picker"&gt;
&lt;ul class="swatches"&gt;
&lt;li class="swatch"&gt;&lt;/li&gt;
&lt;/ul&gt;
&lt;/div&gt;
&lt;/template&gt;</code></pre>
<p>Jest still complains but the error has changed:</p><pre><code>Expected value to equal:
"background: rgb(227, 52, 47);"
Received:
undefined</code></pre>
<p>This makes sense; the list item doesn’t have a <code>style</code> attribute. The simplest thing we can do about it is to hardcode the <code>style</code> attribute. This isn’t what we want in the end, but, we aren’t concerned about it yet. What we want is <strong>for our test to go green</strong>.</p>
<p>We can therefore hardcode five list items with the expected style attributes:</p><pre><code>&lt;ul class="swatches"&gt;
&lt;li class="swatch" style="background: rgb(227, 52, 47);"&gt;&lt;/li&gt;
&lt;li class="swatch" style="background: rgb(52, 144, 220);"&gt;&lt;/li&gt;
&lt;li class="swatch" style="background: rgb(246, 153, 63);"&gt;&lt;/li&gt;
&lt;li class="swatch" style="background: rgb(56, 193, 114);"&gt;&lt;/li&gt;
&lt;li class="swatch" style="background: rgb(255, 255, 255);"&gt;&lt;/li&gt;
&lt;/ul&gt;</code></pre>
<p>The test should now pass.</p>
<h3 id="step-3-refactor">Step 3: Refactor</h3>
<p>At this stage, we want to rearrange our code to make it right, without breaking tests. In our case, we don’t want to keep the list items and their <code>style</code> attributes hardcoded. Instead, it would be better to receive swatches as a prop, iterate over them to generate the list items, and assign the colors as their background.</p><pre><code>&lt;template&gt;
&lt;div class="color-picker"&gt;
&lt;ul class="swatches"&gt;
&lt;li
:key="index"
v-for="(swatch, index) in swatches"
:style="{ background: `#${swatch}` }"
class="swatch"
&gt;&lt;/li&gt;
&lt;/ul&gt;
&lt;/div&gt;
&lt;/template&gt;
&lt;script&gt;
export default {
props: {
swatches: {
type: Array,
default() {
return []
}
}
}
}
&lt;/script&gt;</code></pre>
<p>When tests re-run, they should still pass ? This means w<strong>e’ve successfully refactored the code without affecting the output.</strong> Congratulations, you’ve just completed your first TDD cycle!</p>
<p>Now, before we go to the next test, let’s reflect a bit. You may be wondering:</p>
<blockquote>“Isn’t this a bit dumb? I knew the test would fail. Am I not wasting time by running it anyway, then hardcoding the right value, see the test pass, then make the code right? Can’t I go to the refactor step directly?”</blockquote>
<p>It’s understandable that you’re feeling confused by the process. Yet, try to look at things from a different angle: the point here isn’t to <em>prove</em> that the test doesn’t pass. We know it won’t. What we want to look at is what our test <em>expects</em>, make them happy in the simplest possible way, and finally write smarter code without breaking anything.</p>
<p>That’s the whole idea of test-driven development: we don’t write code to make things work, <strong>we write code to make tests pass</strong>. By reversing the relationship, we’re ensuring robust tests with a focus on the outcome.</p>
<h3 id="what-are-we-testing">What are we testing?</h3>
<p>Another question that may come to mind is <strong>how we’re deciding what to test</strong>. In <a href="https://frontstuff.io/unit-test-your-first-vuejs-component" rel="noopener">Unit Test Your First Vue.js Component</a>, we saw that we should only be testing the public API of our component, not the internal implementation. Strictly speaking, this means we should cover <strong>user interactions</strong> and <strong>props changes</strong>.</p>
<p>But is that all? For example, is it okay for the output HTML to break? Or for CSS class names to change? Are we sure nobody is relying on them? That you aren’t yourself?</p>
<p><strong>Tests should give you confidence that you aren’t shipping broken software.</strong> What people can do with your program shouldn’t stop working the way they expect it to work. It can mean different things depending on the project and use case.</p>
<p>For example, if you’re building this color panel as an open source component, your users are other developers who use it in their own projects. They’re likely relying on the class names you provide to style the component to their liking. <strong>The class names become a part of your public API because your users rely on them.</strong></p>
<p>In our case, we may not necessarily be making an open source component, but we have view logic that depends on specific class names. For instance, it’s important for active swatches to have an <code>active</code> class name, because we’ll rely on it to display a checkmark, in CSS. If someone changes this by accident, we want to know about it.</p>
<p>Testing scenarios for UI components highly depend on the use case and expectations. Whichever the case, what you need to ask yourself is <strong>do I care about this if it changes</strong>?</p>
<h3 id="next-tests">Next tests</h3>
<h4 id="testing-the-swatches">Testing the swatches</h4>
<p>Let’s move on to the next test. We expect the first swatch of the list to be the one that’s selected by default. From the outside, <strong>this is something that we want to ensure keeps on working the same way</strong>. Users could, for instance, rely on the active class name to style the component.</p><pre><code>test('sets the first swatch as the selected one by default', () =&gt; {
const firstSwatch = wrapper.find('.swatch')
expect(firstSwatch.classes()).toContain('active')
})</code></pre>
<p>This test, too, should fail, as list items currently don’t have any classes. We can easily make this pass by adding the class on the first list item.</p><pre><code>&lt;li
:key="index"
v-for="(swatch, index) in swatches"
:style="{ background: `#${swatch}` }"
class="swatch"
:class="{ 'active': index === 0 }"
&gt;&lt;/li&gt;</code></pre>
<p>The test now passes; however, we’ve hardcoded the logic into the template. We can refactor that by externalizing the index onto which the class applies. This way, we can change it later.</p><pre><code>&lt;template&gt;
&lt;!-- ... --&gt;
&lt;li
:key="index"
v-for="(swatch, index) in swatches"
:style="{ background: `#${swatch}` }"
class="swatch"
:class="{ active: index === activeSwatch }"
&gt;&lt;/li&gt;
&lt;!-- ... --&gt;
&lt;/template&gt;
export default {
// ...
data() {
return {
activeSwatch: 0
}
}
}</code></pre>
<p>This naturally leads us to our third test. We want to change the active swatch whenever the end user clicks it.</p><pre><code>test('makes the swatch active when clicked', () =&gt; {
const targetSwatch = wrapper.findAll('.swatch').at(2)
targetSwatch.trigger('click')
expect(targetSwatch.classes()).toContain('active')
})</code></pre>
<p>For now, nothing happens when we click a swatch. However, thanks to our previous refactor, we can make this test go green and even skip the refactor step.</p><pre><code>&lt;li
:key="index"
v-for="(swatch, index) in swatches"
:style="{ background: `#${swatch}` }"
class="swatch"
:class="{ active: index === activeSwatch }"
@click="activeSwatch = index"
&gt;&lt;/li&gt;</code></pre>
<p>This code makes the test pass and doesn’t even need a refactor. <strong>This is a fortunate side-effect of doing TDD</strong>: sometimes, the process leads to either writing new tests that either don’t need refactors, or even that pass right away.</p>
<p>Active swatches should show a checkmark. We’ll add it now <strong>without writing a test</strong>: instead, we’ll control their visibility via CSS later. This is alright since we’ve already tested how the <code>active</code> class applies.</p>
<p>First, create a <code>checkmark.svg</code> file in <code>src/assets/</code>.</p><pre><code>&lt;svg viewBox="0 0 448.8 448.8"&gt;
&lt;polygon points="142.8 323.9 35.7 216.8 0 252.5 142.8 395.3 448.8 89.3 413.1 53.6"/&gt;
&lt;/svg&gt;</code></pre>
<p>Then, import it in the component.</p><pre><code>import CheckIcon from '@/assets/check.svg'
export default {
// ...
components: { CheckIcon }
}</code></pre>
<p>Finally, add it inside the list items.</p><pre><code>&lt;li ... &gt;
&lt;check-icon /&gt;
&lt;/li&gt;</code></pre>
<p>Good! We can now move on to the next element of our component: <strong>the color mode</strong>.</p>
<h4 id="testing-the-color-mode">Testing the color mode</h4>
<p>Let’s now implement the color mode toggler. The end user should be able to switch between hexadecimal, RGB and HSL. We’re defining these modes internally, but we want to ensure they render correctly.</p>
<p>Instead of testing button labels, <strong>we’ll rely on class names</strong>. It makes our test more robust, as we can easily define a class name as part of our component’s contract. However, button labels should be able to change.</p>
<p>Now you may be tempted to check for these three specific modes, but that would make the test brittle. What if we change them? What if we add one, or remove one? That would still be the same logic, yet the test would fail, forcing us to go and edit it.</p>
<p>One solution could be to access the component’s data to iterate on the modes dynamically. Vue Test Utils lets us do that through the <a href="https://vue-test-utils.vuejs.org/api/wrapper/#properties" rel="noopener">vm</a> property, but again, this tightly couples our test with the internal implementation of the modes. If tomorrow, we decided to change the way we define modes, the test would break.</p>
<p>Another solution is to keep going with black box testing and only expect the class name to match a given <em>pattern</em>. We don’t care that it’s <code>color-mode-hex</code>, <code>color-mode-hsl</code> or <code>color-mode-xyz</code>, as long as it looks like what we expect from the outside. Jest lets us do that with regular expression matchers.</p><pre><code>// ...
describe('Color model', () =&gt; {
test('displays each mode as an individual button', () =&gt; {
const buttons = wrapper.findAll('.color-mode')
buttons.wrappers.forEach(button =&gt; {
expect(button.classes()).toEqual(
expect.arrayContaining([expect.stringMatching(/color-mode-\w{1,}/)])
)
})
})
})</code></pre>
<p>Here, we’re expecting elements with a class that follows the pattern “color-mode-“ + any word character (in ECMAScript, any character within <code>[a-zA-Z_0-9]</code>). We could add or remove any mode we want, and the test would still be valid.</p>
<p>Naturally, right now, the test should fail, as there are no buttons with class <code>color-mode</code> yet. We can make it pass by hardcoding them in the component.</p><pre><code>&lt;div class="color-modes"&gt;
&lt;button class="color-mode color-mode-hex"&gt;&lt;/button&gt;
&lt;button class="color-mode color-mode-rgb"&gt;&lt;/button&gt;
&lt;button class="color-mode color-mode-hsl"&gt;&lt;/button&gt;
&lt;/div&gt;</code></pre>
<p>We can now refactor this code by adding the modes as private data in our component and iterate over them.</p><pre><code>&lt;template&gt;
&lt;!-- ... --&gt;
&lt;div class="color-modes"&gt;
&lt;button
:key="index"
v-for="(mode, index) in colorModes"
class="color-mode"
:class="`color-mode-${mode}`"
&gt;{{ mode }}&lt;/button&gt;
&lt;/div&gt;
&lt;!-- ... --&gt;
&lt;/template&gt;
export default {
// ...
data() {
return {
activeSwatch: 0,
colorModes: ['hex', 'rgb', 'hsl']
}
}
}</code></pre>
<p>Good! Let’s move on.</p>
<p>As with the swatches, we want the first mode to be set as active. We can copy the test we wrote and adapt it to this new use case.</p><pre><code>test('sets the first mode as the selected one by default', () =&gt; {
const firstButton = wrapper.find('.color-mode')
expect(firstButton.classes()).toContain('active')
})</code></pre>
<p>We can make this test pass by manually adding the class on the first list item.</p><pre><code>&lt;button
:key="index"
v-for="(mode, index) in colorModes"
class="color-mode"
:class="[{ active: index === 0 }, `color-mode-${mode}`]"
&gt;{{ mode }}&lt;/button&gt;</code></pre>
<p>Finally, we can refactor by externalizing the index onto which the class applies.</p><pre><code>&lt;template&gt;
&lt;!-- ... --&gt;
&lt;button
:key="index"
v-for="(mode, index) in colorModes"
class="color-mode"
:class="[{ active: index === activeMode }, `color-mode-${mode}`]"
&gt;{{ mode }}&lt;/button&gt;
&lt;!-- ... --&gt;
&lt;/template&gt;
export default {
// ...
data() {
return {
activeSwatch: 0,
activeMode: 0,
colorModes: ['hex', 'rgb', 'hsl']
}
}
}</code></pre>
<p>We need to change the active mode whenever the end user clicks the associated button, as with the swatches.</p><pre><code>test('sets the color mode button as active when clicked', () =&gt; {
const targetButton = wrapper.findAll('.color-mode').at(2)
targetButton.trigger('click')
expect(targetButton.classes()).toContain('active')
})</code></pre>
<p>We can now add a <code>@click</code> directive as we did with the swatches, and make the test go green without having to refactor.</p><pre><code>&lt;button
:key="index"
v-for="(mode, index) in colorModes"
class="color-mode"
:class="[{ active: index === activeMode }, `color-mode-${mode}`]"
@click="activeMode = index"
&gt;{{ mode }}&lt;/button&gt;</code></pre>
<h4 id="testing-the-color-code">Testing the color code</h4>
<p>Now that we’re done testing the swatches and color code, we can move on to the third and final element of our color picker: <strong>the color code</strong>. What we display in there is a combination of the other two: the selected swatch defines the color we should display, and the selected mode determines how to display it.</p>
<p>First, we want to make sure we initially display the default swatch in the default mode. We have the information to build this since we’ve implemented the swatches and the color mode.</p>
<p>Let’s start with a (failing) test.</p><pre><code>describe('Color code', () =&gt; {
test('displays the default swatch in the default mode', () =&gt; {
expect(wrapper.find('.color-code').text()).toEqual('#e3342f')
})
})</code></pre>
<p>Now, let’s make this pass by hardcoding the expected result in the component.</p><pre><code>&lt;div class="color-code"&gt;#e3342f&lt;/div&gt;</code></pre>
<p>Good! Time to refactor. We have a raw color in hexadecimal mode, and we’re willing to output it in hexadecimal format. The only difference between our input and output values is that we want to prepend the latter with a hash character. The easiest way of doing so with Vue is via a <code>computed</code> property.</p><pre><code>&lt;template&gt;
&lt;!-- ... --&gt;
&lt;div class="color-code"&gt;{{ activeCode }}&lt;/div&gt;
&lt;!-- ... --&gt;
&lt;/template&gt;
export default {
// ...
computed: {
activeCode() {
return `#${this.swatches[this.activeSwatch]}`
}
}
}</code></pre>
<p>This should keep the test green. However, there’s an issue with this computed property: it only works for hexadecimal values. It should keep on working when we change the color, but not when we change the mode. We can verify this with another test.</p><pre><code>test('displays the code in the right mode when changing mode', () =&gt; {
wrapper.find('.color-mode-hsl').trigger('click')
expect(wrapper.find('.color-code').text()).toEqual('2°, 76%, 54%')
})</code></pre>
<p>Here, we’ve changed to HSL mode, but we’re still getting the hexadecimal output. We need to refactor our code so that our <code>activeCode</code> computed property is not only aware of the current color, but also the current color mode. One way we can achieve this is to create computed properties for each mode and proxy them through <code>activeCode</code> based on the selected mode.</p>
<p>First, we should simplify access to the current color and mode. Right now, we need to do an array lookup, which is repetitive and makes the code hard to read. We can use computed properties to wrap that logic.</p><pre><code>export default {
// ...
computed: {
// ...
activeColorValue() {
return this.swatches[this.activeSwatch]
},
activeModeValue() {
return this.colorModes[this.activeMode]
}
}
}</code></pre>
<p>As you can see, we’re not writing tests for these computed properties, as they aren’t part of our public API. We’ll use them later in our dedicated color mode computed properties, which themselves will be proxied in <code>activeCode</code>, which we’re testing in our “Color code” suite. <strong>All we care about is that the color code renders as expected</strong> so that the user can rely on them. How we get there are implementation details that we need to be able to change if need be.</p>
<p>We can now write our dedicated computed properties for each mode. We’ll map their name onto the ones in <code>colorModes</code>, so we can do an array lookup later in <code>activeCode</code> to return the right one.</p>
<p>For the hexadecimal output, we can externalize what we currently have in <code>activeCode</code> and refactor it using <code>activeColorValue</code>.</p><pre><code>export default {
// ...
computed: {
// ...
hex() {
return `#${this.activeColorValue}`
}
}
}</code></pre>
<p>Now, let’s modify <code>activeCode</code> so it proxies the right computed property depending on the active mode.</p><pre><code>export default {
// ...
computed: {
// ...
activeCode() {
return this[this.activeModeValue]
}
}
}</code></pre>
<p>This still shouldn’t make our latest test pass, since we haven’t written a computed property for it. However, our test that checks if the default mode renders correctly is still passing, which is a good sign we’re on the right track.</p>
<p>We now want to write a computed property that returns the color output in HSL mode. For this, we’ll use <code>color-convert</code>, an npm package that lets us convert colors in many different modes. We’ve already been using it in our tests, so we don’t have to reinstall it.</p><pre><code>import convert from 'color-convert'
export default {
// ...
computed: {
// ...
hsl() {
const hslColor = convert.hex.hsl(this.activeColorValue)
return `${hslColor[0]}°, ${hslColor[1]}%, ${hslColor[2]}%`
}
}
}</code></pre>
<p>Great, our test passes! We can now finish this up adding the missing RGB mode.</p>
<p>Yet, as you can see, we’re currently not testing the output of our color computed properties in isolation, but through other tests. To make things cleaner, we could decouple that logic from the component, import it as a dependency, and test it separately. This has several benefits:</p>
<ul>
<li>it keeps the component from growing every time we want to add a color mode,</li>
<li>it keeps domains separated: the component focuses on its own view logic, and the color modes utility takes care of testing each mode exhaustively.</li>
</ul>
<p>First, create a new <code>color.js</code> file in the <code>src/utils/</code> directory, and a matching spec file in <code>tests/unit/</code>.</p><pre><code>// color.spec.js
import { rgb, hex, hsl } from '@/utils/color'
// color.js
import convert from 'color-convert'
export const rgb = () =&gt; {}
export const hex = () =&gt; {}
export const hsl = () =&gt; {}</code></pre>
<p>We can use TDD to test those three functions and make sure they always return the expected value. We can extract the logic we had in our Vue component for the last two, and write the RGB function from scratch.</p>
<p>For the sake of brevity, we’ll cover all three tests at once, but the process remains the same.</p><pre><code>import { rgb, hex, hsl } from '@/utils/color'
const color = 'e3342f'
describe('color', () =&gt; {
test('returns the color into RGB notation', () =&gt; {
expect(rgb(color)).toBe('227, 52, 47')
})
test('returns the color into hexadecimal notation', () =&gt; {
expect(hex(color)).toBe('#e3342f')
})
test('returns the color into HSL notation', () =&gt; {
expect(hsl(color)).toBe('2°, 76%, 54%')
})
})</code></pre>
<p>We now have three failing tests. The first thing we can do is to return hardcoded values to go green.</p><pre><code>export const rgb = () =&gt; '227, 52, 47'
export const hex = () =&gt; '#e3342f'
export const hsl = () =&gt; '2°, 76%, 54%'</code></pre>
<p>Now, we can start refactoring by migrating the code from our Vue component.</p><pre><code>export const hex = () =&gt; `#${color}`
export const hsl = color =&gt; {
const hslColor = convert.hex.hsl(color)
return `${hslColor[0]}°, ${hslColor[1]}%, ${hslColor[2]}%`
}</code></pre>
<p>Finally, we can implement our <code>rgb</code> function.</p><pre><code>export const rgb = color =&gt; convert.hex.rgb(color).join(', ')</code></pre>
<p>All tests should stay green!</p>
<p>We can now use the <code>color</code> utilities in our Vue component and refactor it a bit. We no longer need to import <code>color-convert</code> in the component, nor do we need dedicated computed properties for each mode, or even for getting the active color and mode values. All we need to keep is <code>activeCode</code>, where we can store all the necessary logic.</p>
<p>This is a good example where doing black box testing helps us: we’ve been focusing on testing the public API; thus <strong>we can refactor the internals of our component without breaking the tests</strong>. Removing properties like <code>activeColorValue</code> or <code>hex</code> doesn’t matter, because we were never testing them directly.</p><pre><code>// ...
import { rgb, hex, hsl } from '@/utils/color'
const modes = { rgb, hex, hsl }
export default {
// ...
computed: {
activeCode() {
const activeColor = this.swatches[this.activeSwatch]
const activeMode = this.colorModes[this.activeMode]
return modes[activeMode](activeColor)
}
}
}</code></pre>
<p>We now have much terser code in our component, and better domain separation, while still respecting the component’s contract.</p>
<p>Finally, we can implement a missing test: the one that ensures the color code changes whenever we click a new swatch. This should already go green, but it’s still essential for us to write it, so we can know about it if it breaks.</p><pre><code>test('displays the code in the right color when changing color', () =&gt; {
wrapper
.findAll('.swatch')
.at(2)
.trigger('click')
expect(wrapper.find('.color-code').text()).toEqual('#f6993f')
})</code></pre>
<p>And we’re done! We just built a fully functional Vue component using TDD, without relying on browser output, <strong>and our tests are ready</strong>.</p>
<h3 id="visual-control">Visual control</h3>
<p>Now that our component is ready, we can see how it looks and play with it in the browser. This allows us to add the CSS and ensure we didn’t miss out on anything.</p>
<p>First, mount the component into the main <code>App.vue</code> file.</p><pre><code>&lt;!-- App.vue --&gt;
&lt;template&gt;
&lt;div id="app"&gt;
&lt;color-picker :swatches="['e3342f', '3490dc', 'f6993f', '38c172', 'fff']"/&gt;
&lt;/div&gt;
&lt;/template&gt;
&lt;script&gt;
import ColorPicker from '@/components/ColorPicker'
export default {
name: 'app',
components: {
ColorPicker
}
}
&lt;/script&gt;</code></pre>
<p>Then, run the app by executing the following script, and open it in your browser at <code><a href="http://localhost:8080/" rel="noopener">http://localhost:8080/</a></code>.</p><pre><code>npm run serve</code></pre>
<p>You should see your color picker! It doesn’t look like much for now, but it works. Try clicking colors and change the color mode; you should see the color code change.</p>
<p>To see the component with proper styling, add the following CSS between the <code>style</code> tags:</p><pre><code>.color-picker {
background-color: #fff;
border: 1px solid #dae4e9;
border-radius: 0.125rem;
box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
color: #596a73;
font-family: BlinkMacSystemFont, Helvetica Neue, sans-serif;
padding: 1rem;
}
.swatches {
color: #fff;
display: flex;
flex-wrap: wrap;
list-style: none;
margin: -0.25rem -0.25rem 0.75rem;
padding: 0;
}
.swatch {
border-radius: 0.125rem;
cursor: pointer;
height: 2rem;
margin: 0.25rem;
position: relative;
width: 2rem;
}
.swatch::after {
border-radius: 0.125rem;
bottom: 0;
box-shadow: inset 0 0 0 1px #dae4e9;
content: '';
display: block;
left: 0;
mix-blend-mode: multiply;
position: absolute;
right: 0;
top: 0;
}
.swatch svg {
display: none;
color: #fff;
fill: currentColor;
margin: 0.5rem;
}
.swatch.active svg {
display: block;
}
.color-modes {
display: flex;
font-size: 1rem;
letter-spacing: 0.05rem;
margin: 0 -0.25rem 0.75rem;
}
.color-mode {
background: none;
border: none;
color: #9babb4;
cursor: pointer;
display: block;
font-weight: 700;
margin: 0 0.25rem;
padding: 0;
text-transform: uppercase;
}
.color-mode.active {
color: #364349;
}
.color-code {
border: 1px solid #dae4e9;
border-radius: 0.125rem;
color: #364349;
text-transform: uppercase;
padding: 0.75rem;
}</code></pre>
<p>You should see something like this:</p>
<p>And we’re done!</p>
<h3 id="afterthoughts">Afterthoughts</h3>
<h4 id="how-can-we-improve-this">How can we improve this?</h4>
<p>For now, we have a robust test suite. Even though we don’t have 100% coverage, we can feel confident with our component going out in the wild, and evolving over time. There are still a couple of things we could improve though, depending on the use case.</p>
<p>First, you may notice that when clicking the white swatch, the checkmark doesn’t show up. That’s not a bug, rather a visual issue: the checkmark is there, but we can’t see it because it’s white on white. You could add a bit of logic to fix this: when a color is lighter than a certain threshold (let’s say 90%), you could add a <code>light</code> class on the swatch. This would then let you apply some specific CSS and make the checkmark dark.</p>
<p>Fortunately, you already have all you need: the <code>color-converter</code> package can help you determine whether a color is light (with the HSL utilities), and you already have a <code>color</code> utility module to store that logic and test it in isolation. To see what the finished code could look like, check out the project’s repository on <a href="https://github.com/sarahdayan/colorpicker-tdd-tutorial" rel="noopener">GitHub</a>.</p>
<p>We could also reinforce the suite by adding a few tests to make sure some expected classes are there. This doesn’t test actual logic, but would still be particularly useful if someone was relying on those class names to style the component from the outside. Again, everything depends on your use case: test what shouldn’t change without you knowing, don’t only add tests for the sake of it.</p>
<h4 id="what-did-we-learn">What did we learn?</h4>
<p>There are several lessons to learn from this TDD experiment. It brings a lot to the table but also highlights a few challenges that we should be aware of.</p>
<p>First, TDD is a <strong>fantastic way to write robust tests</strong>, not too many and not too few. Have you ever finished a component, moved on to tests and thought <em>“where do I even start?”</em>? Looking at finished code and figuring out what to test is hard. It’s tempting to get it done quickly, overlook some critical parts and end up with an incomplete test suite. Or you can adopt a defensive approach and test everything, risking to focus on implementation details and writing brittle tests.</p>
<p>Adopting TDD for developing UI components helps us focus on exactly what to test by <strong>defining, before writing any line of code, if this is part of the contract or not</strong>.</p>
<p>Secondly, <strong>TDD encourages refactors, leading to better software design</strong>. When you’re writing tests after coding, you’re usually no longer in a refactoring dynamic. You can fix your code if you find issues while testing, but at this stage, you’re most likely done with the implementation. <strong>This separation between writing code and writing test is where lies the issue.</strong></p>
<p>With TDD, <strong>you’re creating a deeper connection between code and tests, with a strong focus on making the public API reliable</strong>. Implementation comes right after you’ve guaranteed the outcome. This is why the <em>green</em> step is critical: you first need your test to pass, then ensure it never breaks. Instead of implementing your way to a working solution, you’re reversing the relationship, focusing on the contract first, and allowing the implementation to remain disposable. Because refactoring comes last, and you’ve established the contract, you now have mental space to make things right, clean some code, adopt a better design, or focus on performance.</p>
<p>It’s worth noting that <strong>TDD is much easier to follow with specs</strong>. When you already have a clear overview of everything the component should do, you can translate those specifications into tests. Some teams use frameworks like <a href="https://en.wikipedia.org/wiki/Acceptance_test%E2%80%93driven_development" rel="noopener">ATDD</a> (acceptance test–driven development), where the involved parties develop specifications from a business perspective. The final specs, or acceptance tests, are a perfect base to write tests following TDD.</p>
<p>On the other hand, going with TDD to test UI components can be difficult at first, and require some prior knowledge before diving into it. For starters, <strong>you need to have good knowledge of your testing libraries</strong> so that you can write reliable assertions. Look at the test we wrote with a regular expression: the syntax is not the most straightforward. If you don’t know the library well, it’s easy to write a test that fails for the wrong reasons, which would end up hindering the whole TDD process.</p>
<p>Similarly, you need to be aware of some details regarding the values you expect; otherwise, you could end up battling with your tests and doing some annoying back-and-forths. On that matter, UI components are more challenging than renderless libraries, because of the various ways the DOM specifications can be implemented.</p>
<p>Take the first test of our suite for example: we’re testing background colors. However, even though we’re passing hexadecimal colors, we’re expecting RGB return values. That’s because Jest uses <a href="https://github.com/jsdom/jsdom" rel="noopener">jsdom</a>, a Node.js implementation of the DOM and HTML standards. If we were running our tests in a specific browser, we might have a different return value. This can be tricky when you’re testing different engines. You may have to seek some more advanced conversion utilities or use environment variables to handle the various implementations.</p>
<h4 id="is-it-worth-it">Is it worth it?</h4>
<p>If you made it this far, you’ve probably realized that <strong>TDD demands time</strong>. This article itself is over 6,000 words! This can be a bit scary if you’re used to faster development cycles, and probably looks impossible if you’re often working under pressure. However, it’s important to bust the myth that TDD would somehow double development time for little return on investment, because this is entirely false.</p>
<p>Secondly, <strong>time spent on writing test-driven code is time you won’t spend fixing bugs</strong>.</p>
<p>Fixing bugs is far more costly than preventing them. If you’ve ever had to fix critical production bugs, you know this feels close to holding an open wound on a surgical patient with one hand, while trying to operate with the other one. In the desert. At night. With a Swiss Army knife. It’s messy, stressful, suboptimal, and bears high chances of screwing up something else in the process. If you want to preserve your sanity and the trust your end users have in your software, <strong>you want to avoid those situations at all costs</strong>.</p>
<p>Tests help you catch bugs before they make it to production, and TDD helps you write better tests. <strong>If you think you should test your software, then you should care about making these tests useful in the first place.</strong> Otherwise, the whole thing is only a waste of time.</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
