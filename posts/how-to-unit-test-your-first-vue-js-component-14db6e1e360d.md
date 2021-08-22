---
card: "https://cdn-media-1.freecodecamp.org/images/1*HJnhZfsUqdgWcAMIlbqp-w.png"
tags: [JavaScript]
description: by Sarah Dayan
author: "Milad E. Fahmy"
title: "How to unit test your first Vue.js component"
created: "2021-08-15T19:41:15+02:00"
modified: "2021-08-15T19:41:15+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-vuejs tag-unit-testing tag-tech tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">How to unit test your first Vue.js component</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*HJnhZfsUqdgWcAMIlbqp-w.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*HJnhZfsUqdgWcAMIlbqp-w.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*HJnhZfsUqdgWcAMIlbqp-w.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*HJnhZfsUqdgWcAMIlbqp-w.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*HJnhZfsUqdgWcAMIlbqp-w.png" alt="How to unit test your first Vue.js component">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Sarah Dayan</p>
<p>In <a href="https://frontstuff.io/build-your-first-vue-js-component" rel="noopener"><strong>Build Your First Vue.js Component</strong></a> we made a star rating component. We’ve covered many fundamental concepts to help you create more complex Vue.js components.</p>
<p>Yet, there’s one crucial point you need to build bulletproof components you can use in production: <strong>unit testing</strong>.</p>
<h3 id="why-unit-test-a-component">Why unit test a component?</h3>
<p>Unit tests are a <strong>crucial</strong> part of continuous integration. They make your code a lot more reliable by focusing on small, isolated entities and making sure these always behave as expected. You can confidently iterate on your project without fear of breaking things.</p>
<p><strong>Unit tests aren’t limited to scripts.</strong> Anything we can test in isolation is unit testable, as long as you respect a few good practices. These practices include single-responsibility, predictability, and loose coupling.</p>
<p>As reusable entities of our app, <strong>Vue.js components are great candidates for unit testing</strong>. We’ll test the one we made as a single unit with various inputs and user interactions, and make sure it always behaves as we expect.</p>
<h3 id="before-we-start">Before we start</h3>
<p>A few things have changed since the <a href="https://frontstuff.io/build-your-first-vue-js-component" rel="noopener">initial tutorial</a>. <a href="https://cli.vuejs.org/" rel="noopener">Vue CLI 3</a> was released. <a href="https://vue-test-utils.vuejs.org/" rel="noopener">Vue Test Utils</a> — the official Vue.js unit testing utility library — has matured to beta version. In the first tutorial, we used <a href="https://github.com/vuejs-templates/webpack-simple" rel="noopener">webpack-simple</a>, a prototyping template that doesn’t include testing features. For these reasons, the simplest thing to do is to wipe the slate clean and migrate the project from the tutorial to a more recent Vue.js install.</p>
<p>I re-created the project from the first tutorial so you can download it directly from <a href="https://github.com/sarahdayan/star-rating-vue-js-tutorial" rel="noopener">GitHub</a>. Then, navigate to the unzipped directory and install dependencies.</p>
<p><strong>Note:</strong> make sure you install <a href="https://nodejs.org/" rel="noopener">Node.js</a> before going further:</p><pre><code>cd path/to/my/project npm install</code></pre>
<p>Then, run the project:</p><pre><code>npm run serve</code></pre>
<h3 id="vue-test-utils-and-jest">Vue Test Utils and Jest</h3>
<p>For this tutorial, we’ll use <a href="https://vue-test-utils.vuejs.org/" rel="noopener">Vue Test Utils</a>, the official Vue.js testing toolkit, along with <a href="https://jestjs.io/" rel="noopener">Jest</a>, a JavaScript test runner backed by Facebook.</p>
<p>Vue Test Utils lets you mount Vue components in isolation and simulate user interactions. It has all the necessary utilities to test single-file components, including those using Vue Router or Vuex.</p>
<p>Jest is a full-featured test runner that requires almost no configuration. It also provides a built-in assertion library.</p>
<p>Vue CLI 3 (which I used to generate the <a href="https://github.com/sarahdayan/star-rating-vue-js-tutorial" rel="noopener">boilerplate</a>) allows you to pick your favorite test runner, and sets it up for you. If you want to use another test runner (like <a href="https://mochajs.org/" rel="noopener">Mocha</a>), install <a href="https://cli.vuejs.org/" rel="noopener">Vue CLI 3</a> and generate your own starter project. Then you can migrate the source files from <a href="https://github.com/sarahdayan/star-rating-vue-js-tutorial" rel="noopener">my boilerplate</a> right in it.</p>
<h3 id="what-should-we-test">What should we test?</h3>
<p>A common approach of unit testing is to <strong>only focus on the public API</strong> (aka black box testing). By overlooking implementation details, you’re allowing internals to change without having to adapt tests. After all, what you want to do is <strong>make sure your public API won’t break</strong>. What happens under the hood is indirectly tested, but all that matters is for the public API to remain reliable.</p>
<p>This is also the official recommendation from the <a href="https://vue-test-utils.vuejs.org/guides/#common-tips" rel="noopener">Vue Test Utils guides</a>. Therefore, we’ll only test what we can access from the outside of the component:</p>
<ul>
<li>user interactions</li>
<li>props changes</li>
</ul>
<p>We won’t directly test computed properties, methods, or hooks. These will be implicitly tested by testing the public interface.</p>
<h3 id="setting-up-a-spec-file">Setting up a spec file</h3>
<p>Like with regular tests, each component has a spec file which describes all tests we want to run.</p>
<p>Specs are JavaScript files. By convention, they have the same name as the components they’re testing, plus a <code>.spec</code> suffix.</p>
<p>Go ahead and create a <code>test/unit/Rating.spec.js</code> file:</p><pre><code>// Rating.spec.js</code></pre><pre><code>import { shallowMount } from '@vue/test-utils'import Rating from '@/components/Rating'</code></pre><pre><code>describe('Rating', () =&gt; {  // your tests go here})</code></pre>
<p>We’ve imported our <code>Rating</code> component and <code>shallowMount</code>. The latter is a Vue Test Utils function which lets us mount our component without mounting its children.</p>
<p>The <code>describe</code> function call wraps all the test we’re about to write — it describes our <strong>testing suite</strong>. It has its own scope, and can itself wrap other nested suites.</p>
<p>Enough said, <strong>let’s start writing tests</strong>.</p>
<h3 id="identifying-testing-scenarios">Identifying testing scenarios</h3>
<p>When we look at <code>Rating</code> from the outside, we can see it does the following:</p>
<ul>
<li>it renders a list of stars which is equal to the value of the <code>maxStars</code> prop the user passes</li>
<li>it adds an <code>active</code> class to each star whose index is lower than or equal to the <code>stars</code> prop the user passes</li>
<li>it toggles the <code>active</code> class on a star when the user clicks it and removes it on the next stars</li>
<li>it toggles the icons <code>star</code> and <code>star-o</code> when the user clicks a star</li>
<li>it renders a counter if the user sets the <code>hasCounter</code> prop to <code>true</code>, hides it if they set it to <code>false</code>, and displays text saying how many stars of the maximum number of stars are currently active.</li>
</ul>
<p>Notice we’re only looking at what the component does from the outside. We don’t care that clicking a star executes the <code>rate</code> method, or that the internal <code>stars</code> data property changes. We could rename these, but this shouldn’t break our tests.</p>
<h3 id="our-first-test">Our first test</h3>
<p>Let’s write our first test. We first need to manually mount our component with <code>shallowMount</code>, and store it in a variable on which we’ll perform assertions. We can also pass props through the <code>propsData</code> attribute, as an object.</p>
<p>The mounted component is an object which comes with a handful of useful utility methods:</p><pre><code>describe('Rating', () =&gt; {  const wrapper = shallowMount(Rating, {    propsData: {      maxStars: 6,      grade: 3    }  })  it('renders a list of stars with class `active` equal to prop.grade', () =&gt; {    // our assertion goes here  })})</code></pre>
<p>Then, we can write our first assertion:</p><pre><code>it('renders a list of stars with class `active` equal to prop.grade', () =&gt; {  expect(wrapper.findAll('.active').length).toEqual(3)})</code></pre>
<p>Let’s analyze what’s happening here. First, we’re using Jest’s <code><a href="https://jestjs.io/docs/en/expect#expectvalue" rel="noopener">expect</a></code> function, which takes the value we want to test as an argument. In our case, we call the <code><a href="https://vue-test-utils.vuejs.org/api/wrapper/#findall-selector" rel="noopener">findAll</a></code> method on our <code>wrapper</code> to fetch all elements with an <code>active</code> class. This returns a <code><a href="https://vue-test-utils.vuejs.org/api/wrapper-array/" rel="noopener">WrapperArray</a></code>, which is an object that contains an array of <code><a href="https://vue-test-utils.vuejs.org/api/wrapper/" rel="noopener">Wrappers</a></code>.</p>
<p>A <code>WrapperArray</code> has two properties: <code>wrappers</code> (the contained <code>Wrappers</code>) and <code>length</code> (the number of <code>Wrappers</code>). The latter is what we need to have the expected number of stars.</p>
<p>The <code>expect</code> function also returns an object on which we can call methods to test the passed value. These methods are called <strong>matchers</strong>. Here, we use the <code>toEqual</code> matcher and pass it the expected value as in arguments. The method returns a boolean, which is what a test expects to either pass or fail.</p>
<p>To summarize, here we say we expect the total amount of elements with the class <code>active</code> we find in our wrapper to be equal to 3 (the value we assigned to the <code>grade</code> prop).</p>
<p>In your terminal, run your test:</p><pre><code>npm run test:unit</code></pre>
<p>You should see it pass ?</p>
<p>Time to write some more.</p>
<h3 id="simulating-user-input">Simulating user input</h3>
<p>Vue Test Utils makes it easy to simulate what real users end up doing in production. In our case, users can click on stars to toggle them. We can fake this in our tests with the <code>trigger</code> method, and dispatch all kinds of events.</p><pre><code>it('adds `active` class on an inactive star when the user clicks it', () =&gt; {  const fourthStar = wrapper.findAll('.star').at(3)  fourthStar.trigger('click')  expect(fourthStar.classes()).toContain('active')})</code></pre>
<p>Here, we first get our fourth star with <code>findAll</code> and <code><a href="https://vue-test-utils.vuejs.org/api/wrapper-array/#at-index" rel="noopener">at</a></code>, which returns a <code>Wrapper</code> from a <code>WrapperArray</code> at the passed index (zero-based numbering). Then, we simulate the <code>click</code> event on it — we’re mimicking the action from a user who would click or tap the fourth star.</p>
<p>Since we set the <code>grade</code> prop to 3, the fourth star should be inactive before we click, therefore the click event should make it active. In our code, this is represented by a class <code>active</code> which we append on stars only when they’re activated. We test it by calling the <code><a href="https://vue-test-utils.vuejs.org/api/wrapper/#classes-classname" rel="noopener">classes</a></code> method on the star, which returns its class names as an array of strings. Then, we use the <code><a href="https://jestjs.io/docs/en/expect#tocontainitem" rel="noopener">toContain</a></code> matcher to make sure the <code>active</code> class is here.</p>
<h4 id="setup-and-teardown">Setup and teardown</h4>
<p>Since we’ve triggered a click on our component, we’ve mutated its state. The problem is that we’re using that same component for all our tests. What happens if we change the order of our tests, and move this one to first position? Then the second test would fail.</p>
<p>You don’t want to rely on brittle things like order when it comes to tests. A test suite should be robust, and existing tests should ideally not change unless you’re breaking the API.</p>
<p>We want to make sure we always have a predictable wrapper to perform assertions on. We can achieve this with setup and teardown functions. These are helpers which let us initialize things before we run tests, and clean up afterward.</p>
<p>In our case, a way of doing it could be to create our wrapper before each test and destroy it afterwards.</p><pre><code>let wrapper = null</code></pre><pre><code>beforeEach(() =&gt; {  wrapper = shallowMount(Rating, {    propsData: {      maxStars: 6,      grade: 3    }  })})</code></pre><pre><code>afterEach(() =&gt; {  wrapper.destroy()})</code></pre><pre><code>describe('Rating', () =&gt; {  // we remove the `const wrapper = …` expression  // …}</code></pre>
<p>As their names suggest, <code><a href="https://jestjs.io/docs/en/api#beforeeachfn-timeout" rel="noopener">beforeEach</a></code> and <code><a href="https://jestjs.io/docs/en/api#aftereachfn-timeout" rel="noopener">afterEach</a></code> run before and after each test, respectively. This way we can be 100% sure we’re using a fresh wrapper whenever we run a new test.</p>
<h3 id="special-identifiers-for-tests">Special identifiers for tests</h3>
<p>It’s never a good idea to mix selectors for styling and other purposes, such as test hooks.</p>
<p>What if you change the tag name or the class?</p>
<p>What if you don’t have a specific identifier on an element you want to test such as, in our case, the counter?</p>
<p>You don’t want to pollute your production code with classes which would be useless there. It would be much better to have dedicated hooks for tests, such as a dedicated data attribute, <strong>but only during tests</strong>. This way a mess isn’t left in the final build.</p>
<p>One way to handle this is to create a <a href="https://vuejs.org/v2/guide/custom-directive.html" rel="noopener">custom Vue directive</a>.</p>
<p>The Vue instance has a <code>directive</code> method which takes two arguments — a <strong>name</strong>, and an <strong>object of functions</strong> for each <a href="https://vuejs.org/v2/guide/custom-directive.html#Hook-Functions" rel="noopener">hook of the component lifecycle</a> when injected in the DOM. You can also pass a single function if you don’t care about a specific hook.</p>
<p>Let’s create a new directory called <code>directives</code> in <code>src/</code>, and add a <code>test.js</code> file. We’ll export the function we want to pass in our directive.</p><pre><code>// test.js</code></pre><pre><code>export default (el, binding) =&gt; {  // do stuff}</code></pre>
<p>A directive hook can take <a href="https://vuejs.org/v2/guide/custom-directive.html#Directive-Hook-Arguments" rel="noopener">several arguments</a> and, in our case, we only need the first two: <code>el</code> and <code>binding</code>. The <code>el</code> argument refers to the element the directive is bound to. The <code>binding</code> argument is an object which contains the data we passed in the directive. This way we can manipulate the element as we like.</p><pre><code>export default (el, binding) =&gt; {  Object.keys(binding.value).forEach(value =&gt; {    el.setAttribute(`data-test-${value}`, binding.value[value])  })}</code></pre>
<p>We’re passing an object to our directive, so we can generate data attributes starting with <code>data-test-</code>. In the handler function, we iterate over each property of <code>binding</code>, and we set a data attribute — based on the name and value — on our element.</p>
<p>Now we need to register our directive so we can use it. We can do it globally but, in our case, we’re only going to register it locally — right in our <code>Rating.vue</code> component.</p><pre><code>&lt;script&gt;import Test from '@/directives/test.js'</code></pre><pre><code>export default {  // …  directives: { Test },  // …}&lt;/script&gt;</code></pre>
<p>Our directive is now accessible under the <code>v-test</code> name. Try setting the following directive on the counter:</p><pre><code>&lt;span v-test="{ id: 'counter' }" v-if="hasCounter"&gt;  {{ stars }} of {{ maxStars }}&lt;/span&gt;</code></pre>
<p>Now inspect the HTML in your browser with the developer tools. Your counter should look like this:</p><pre><code>&lt;span data-test-id="counter"&gt;2 of 5&lt;/span&gt;</code></pre>
<p>Great, it works! Now, we don’t need this either in dev mode nor when we build the project. The sole purpose of this data attribute is to be able to target elements during tests, so we only want to set it up when we run them. For this, we can use the <code>NODE_ENV</code> environment variable provided by Webpack, the module bundler powering our project.</p>
<p>When we run tests, <code>NODE_ENV</code> is set to <code>'test'</code>. Therefore, we can use it to determine when to set the test attributes or not.</p><pre><code>export default (el, binding) =&gt; {  if (process.env.NODE_ENV === 'test') {    Object.keys(binding.value).forEach(value =&gt; {      el.setAttribute(`data-test-${value}`, binding.value[value])    })  }}</code></pre>
<p>Refresh your app in the browser and inspect the counter again: <strong>the data attribute is gone</strong>.</p>
<p>Now we can use the <code>v-test</code> directive for all elements we need to target. Let’s take our test from earlier:</p><pre><code>it('adds `active` class on an inactive star when the user clicks it', () =&gt; {  const fourthStar = wrapper.findAll('[data-test-id="star"]').at(3)  fourthStar.trigger('click')  expect(fourthStar.classes()).toContain('active')})</code></pre>
<p>We’ve replaced the <code>.star</code> selector with <code>[data-test-id="star"]</code>, which allows us to change classes for presentation purposes without breaking tests. We get one of the benefits of the <a href="https://en.wikipedia.org/wiki/Single_responsibility_principle" rel="noopener">single-responsibility principle</a> and loose <a href="https://en.wikipedia.org/wiki/Coupling_(computer_programming)" rel="noopener">coupling</a> — when your abstractions only have a single reason to change, you avoid all kinds of pesky side-effects.</p>
<h3 id="should-we-also-use-these-hooks-for-the-classes-we-test">Should we also use these hooks for the classes we test?</h3>
<p>After setting this directive to target elements to test, you may be wondering if you should also use them to replace the classes we actively look for. Let’s look at the assertion from our first test:</p><pre><code>expect(wrapper.findAll('.active').length).toEqual(3)</code></pre>
<p>Should we use <code>v-test</code> on the elements with the <code>active</code> class, and replace the selector in the assertion? <strong>Great question</strong>.</p>
<p>Unit tests are all about testing one thing at a time. The first argument of the <code>it</code> function is a string, with which we describe what we’re doing <strong>from a consumer perspective</strong>.</p>
<p>The test that wraps our assertion says <code>renders a list of stars with class active equal to prop.grade.</code> This is what the consumer expects. When they pass a number to the <code>grade</code> property, they expect to retrieve an <strong>equal number</strong> of active or selected stars. Yet, in our component’s logic, the <code>active</code> class is precisely what we use to define this trait. We assign it depending on a specific condition, so we can visually differentiate active stars from the others. Here, the presence of this specific class is exactly what we want to test.</p>
<p>So, when deciding whether you should use a selector you already have or set a <code>v-test</code> directive, ask yourself the question: <strong>what am I testing, and does using this selector makes sense for a business logic perspective?</strong></p>
<h3 id="how-is-it-different-from-functional-or-end-to-end-tests">How is it different from functional or end-to-end tests?</h3>
<p>At first, it might look odd to unit test components. Why would you unit test UI and user interactions? Isn’t that what functional tests are here for?</p>
<p>There is a fundamental yet subtle difference to make between testing a component’s public API — aka from a <strong>consumer</strong> perspective — and testing a component from a <strong>user</strong> perspective. First, let’s underline something important: <strong>we’re testing well-defined JavaScript functions, not pieces of UI</strong>.</p>
<p>When you look at a single-file component it’s easy to forget the component compiles into a JavaScript function. We’re not testing the underlying Vue mechanism which, from this function, causes UI-oriented side-effects like injecting HTML in the DOM. That’s what Vue’s own tests already take care of. In our case, our component is no different from any other function: <strong>it accepts input and returns an output</strong>. These causes and consequences are what we’re testing, and nothing else.</p>
<p>What’s confusing is that our tests look a bit different from regular unit tests. Usually, we write things like:</p><pre><code>expect(add(3)(4)).toEqual(7)</code></pre>
<p>There’s no debate here. Input and output of data, that’s all we care about. With components, we’re expecting things to render visually. We’re traversing a virtual DOM and testing for the presence of nodes. That’s also what you do with functional or end-to-end tests, with tools like <a href="https://www.seleniumhq.org/" rel="noopener">Selenium</a> or <a href="https://www.cypress.io/" rel="noopener">Cypress.io</a>. So how does that differ?</p>
<p>You need not to confuse <strong>what</strong> we’re doing to fetch the data we want to test and the actual <strong>purpose</strong> of the test. <strong>With unit tests, we’re testing isolated behaviors. With functional or end-to-end tests, we’re testing scenarios</strong>.</p>
<p>A unit test makes sure a <strong>unit</strong> of the program behaves as expected. It’s addressed to the <strong>consumer</strong> of the component — the programmer who uses the component in their software. A functional test ensures a <strong>feature</strong> or a <strong>workflow</strong> behaves as expected, from a <strong>user</strong> perspective — the final user, who consumes the full software.</p>
<h3 id="going-further">Going further</h3>
<p>I won’t go into the detail of each test, because they all share a similar structure. You can find the <a href="https://github.com/sarahdayan/star-rating-vue-js-tutorial/blob/tests/tests/unit/Rating.spec.js" rel="noopener">full spec file on GitHub</a>, and I strongly recommend you try to implement them yourself first. Software testing is an art as much as it is a science, and requires twice as much practice as it requires theory.</p>
<p>Don’t worry if you didn’t get everything, or if you struggle with writing your first tests: <strong>testing is notoriously hard</strong>. Also, if you have a question, don’t hesitate to hit me up on <a href="https://twitter.com/frontstuff_io" rel="noopener">Twitter</a>!</p>
<p>Originally published at <a href="https://frontstuff.io/unit-test-your-first-vuejs-component" rel="noopener">frontstuff.io</a>.</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
