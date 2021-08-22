---
card: "/images/default.jpg"
tags: [JavaScript]
description: Alpine.js is a rugged, minimal framework for composing Javasc
author: "Milad E. Fahmy"
title: "Learn Alpine JS in this free interactive tutorial"
created: "2021-08-15T19:30:35+02:00"
modified: "2021-08-15T19:30:35+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-framework ">
<header class="post-full-header">
<h1 class="post-full-title">Learn Alpine JS in this free interactive tutorial</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/02/galpinejs.png 300w,
/news/content/images/size/w600/2020/02/galpinejs.png 600w,
/news/content/images/size/w1000/2020/02/galpinejs.png 1000w,
/news/content/images/size/w2000/2020/02/galpinejs.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/02/galpinejs.png" alt="Learn Alpine JS in this free interactive tutorial">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Alpine.js is a rugged, minimal framework for composing Javascript behavior in your markup. That's right, in your markup! </p>
<p>It allows you to write most of your JS inline in your HTML, making it easier to write declarative code (as opposed to procedural code). According to its creator Caleb Porzio, it aims to fill the void between vanilla JS (or jQuery) and large v-dom frameworks like Vue/React. </p>
<p>We at Scrimba definitely think it lives up to its promise, so we're happy to present you with a <a href="https://scrimba.com/g/galpinejs?utm_source=freecodecamp.org&amp;utm_medium=referral&amp;utm_campaign=galpinejs_launch_article">free one-hour course!</a> </p>
<blockquote class="twitter-tweet">
<p lang="en" dir="ltr">Course launch. Learn Alpine JS ? <br><br>Alpine JS is a neat &amp; minimal lib by <a href="https://twitter.com/calebporzio?ref_src=twsrc%5Etfw">@calebporzio</a> that aims to fill the void between vanilla JS (or jQuery) and large v-dom frameworks like Vue/React.<br><br>In this ? course, <a href="https://twitter.com/drehimself?ref_src=twsrc%5Etfw">@drehimself</a> gives you a one-hour introduction.<a href="https://t.co/podSDjMC4A">https://t.co/podSDjMC4A</a> <a href="https://t.co/CvCDVFuMaM">pic.twitter.com/CvCDVFuMaM</a></p>— Scrimba (@scrimba) <a href="https://twitter.com/scrimba/status/1231942780492165120?ref_src=twsrc%5Etfw">February 24, 2020</a>
</blockquote>
</figure>
<p>In it, you'll find a bunch of &nbsp;fun and interactive tutorials which embed your learning and give you the muscle memory you need to become a hotshot at Alpine.js.</p>
<p>Now let's have a look at how the course is structured!</p>
<h2 id="why-learn-alpine-js">Why learn Alpine.js?</h2>
<p>In the first lesson, the teacher Andre Madarang starts off by explaining why you should learn the library. Shortly speaking, Alpine.js works well when you need a small amount of JS, e.g. a few drop-downs or tabs. This means you get a bunch of power at a crazy small size with no need to NPM install.</p>
<p>Andre also gives you an introduction to himself. He is a full-stack developer and Youtuber who teaches web development concepts such as Laravel, Vue and Tailwind CSS. We're thrilled to have him onboard as a Scrimba teacher!</p>
<h2 id="installation-a-basic-alpine-component">Installation &amp; A Basic Alpine Component</h2>
<p>Installing Alpine.js is easy - you can use npm if you want, but Andre also shows us how to use a cdn and add it in a <code>script</code> tag - it's as simple as that!:</p><pre><code class="language-html">&lt;head&gt;
&lt;script
src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v1.9.8/dist/alpine.js"
defer
&gt;&lt;/script&gt;
&lt;/head&gt;
</code></pre>
<p>Now, it's time to create our first Alpine.js component! First, we define state using the <code>x-data</code> attribute. State is available within the scope of the <code>&lt;div&gt;</code> in which it is defined, so in the example below, both the <code>&lt;button&gt;</code> and the <code>&lt;h1&gt;</code> have access to state.</p>
<p>To use this state, we then use the <code>x-show</code> directive to show or hide the element and toggle the element on and off using <code>@</code>.</p><pre><code class="language-html">&lt;div x-data="{ isOpen: true }"&gt;
&lt;button @click=" isOpen = !isOpen"&gt;Toggle&lt;/button&gt;
&lt;h1 x-show="isOpen"&gt;index.html&lt;/h1&gt;
&lt;/div&gt;
</code></pre>
<h2 id="dropdown">Dropdown</h2>
<p>Now, we use our new-found knowledge of state to implement a dropdown.</p>
<p>We then see how to set events to close the dropdown by clicking off the dropdown or by pressing the escape key, using <code>@click.away</code> on the <code>&lt;ul&gt;</code> or <code>@keydown.escape</code> on the <code>&lt;button&gt;</code>.</p>
<h2 id="modals-and-x-ref">Modals and x-ref</h2>
<p>In this cast, Andre takes us through another example of how to use state to open and close a modal. Next, he introduces references, which allow us to add methods to particular elements in the click handler.</p>
<p>In this case, we focus the close button once the modal is open by adding a reference to the close button with an <code>x-ref</code> directive and then adding a method to the click handler.</p><pre><code class="language-html">&lt;button
class="bg-blue-700 text-white px-4 py-3 mt-4 text-sm rounded"
@click="isOpen = false"
x-ref="modalCloseButton"
&gt;&lt;/button&gt;
</code></pre><pre><code class="language-html">&lt;button
class="bg-blue-700 text-white px-4 py-3 mt-4 text-sm rounded"
@click="isOpen = true
$nextTick(() =&gt; $refs.modalCloseButton.focus())
"
&gt;&lt;/button&gt;
</code></pre>
<h2 id="sidebar">Sidebar</h2>
<p>Now it's time for some revision to help our new knowledge sink in. In this short cast, we add the functionality to toggle the visibility of a sidebar. This is a great way of embedding our learning and shows us another application of what we have learned.</p>
<h2 id="tabs">Tabs</h2>
<p>Next up, we build a set of tabs. This is more involved than our previous examples because we have to hold state for all the tabs, not just a boolean.</p>
<p>As usual, state is defined using the <code>x-data</code> directive on an HTML element which encapsulates all the required elements. We then set the default to <code>tab1</code> and set an event listener (which makes the tab active) for each one of the tabs.</p><pre><code class="language-html">&lt;li class="-mb-px mr-1"&gt;
&lt;a
class="inline-block rounded-t py-2 px-4 font-semibold hover:text-blue-800 bg-white text-blue-700 border-l border-t border-r"
href="#"
@click.prevent="tab = 'tab1'"
&gt;Tab 1&lt;/a
&gt;
&lt;/li&gt;
</code></pre>
<p>To change the contents section to the contents of the tab which has been clicked, we add <code>x-show</code> directives to the <code>&lt;div&gt;s</code> containing the contents:</p><pre><code class="language-html">&lt;div x-show="tab === 'tab1'"&gt;&lt;/div&gt;
</code></pre>
<p>Finally, Andre shows us how to apply the active tab styles with conditional class rendering.</p><pre><code class="language-css">:class="{ 'bg-white text-blue-700 border-l border-t border-r' : tab === 'tab1'
}" ;
</code></pre>
<h2 id="image-selection">Image Selection</h2>
<p>In this cast, Andre shows us how the skills we learned in the previous cast can be applied to a different UI experience - an image selector. Image selectors work in the same way as tabs, but with images instead of text.</p>
<p><a href="https://dev-to-uploads.s3.amazonaws.com/i/58dfy95mhhl1w0rtgfjt.png">Image selector</a></p>
<h2 id="scroll-detection">Scroll Detection</h2>
<p>Now, Andre shows us how to build a scroll detector which changes the background color as the user scrolls. To do this, we define some state which keeps track of whether the user has scrolled.</p><pre><code class="language-html">&lt;div x-data="{ atTop: true }"&gt;&lt;/div&gt;
</code></pre>
<p>Now, we add a scroll event listener on the window and some conditional class rendering on the <code>&lt;nav&gt;</code>.</p><pre><code class="language-html">&lt;nav
class="p-4 w-full fixed"
:class="{ 'bg-white shadow-md' : !atTop }"
@scroll.window="atTop = (window.pageYOffset &gt; 40) ? false : true"
&gt;
Top Nav goes here
&lt;/nav&gt;
</code></pre>
<h2 id="accordion-toggle-and-loops">Accordion Toggle and Loops</h2>
<p>In this section, we build an accordion toggle using loops. In our example, there are several FAQs with answers, and we want to toggle the visibility of the answers.</p>
<p>A great way of doing this without repeating code is to use loops. To do this, we store all our questions and answers in an array, loop over them, and then set the event listener on each iteration of the loop.</p>
<p><strong>Note:</strong> For this to work, our elements need to be wrapped in a <code>template</code> tag.</p><pre><code class="language-html">&lt;template x-for="faq in faqs" :key="faq.question"&gt;
&lt;div&gt;
&lt;button
class="w-full font-bold border-b border-gray-400 py-3 flex justify-between items-center mt-4"
@click="faq.isOpen = !faq.isOpen"
&gt;
&lt;div x-text="faq.question"&gt;&lt;/div&gt;
&lt;/button&gt;
&lt;div
class="text-gray-700 text-sm mt-2"
x-text="faq.answer"
x-show="faq.isOpen"
&gt;&lt;/div&gt;
&lt;/div&gt;
&lt;/template&gt;
</code></pre>
<h2 id="fetch-and-x-init">fetch and x-init</h2>
<p>Now, we see how we can make requests to an external API. This sounds intimidating but is easily broken down into four steps.</p>
<ul>
<li>Add state to hold the quotes:</li>
</ul><pre><code class="language-js">x - data = "{ quote:'' }";
</code></pre>
<ul>
<li>Give the app a quote to show upon initialization:</li>
</ul><pre><code class="language-js">x - init = "quote = 'Awesome quote'";
</code></pre>
<ul>
<li>Set the text in the <code>&lt;div&gt;</code> which displays the quote as the state: </li>
</ul>
<p>Use <code>fetch</code> to grab the quote from an external API:</p><pre><code class="language-js">x-init=" fetch('https://api.kanye.rest') .then(response =&gt; response.json()) .then(data =&gt; quote = data.quote) "</code></pre>
<p>Here's the full code block:</p><pre><code class="language-html">&lt;div
class="container mx-auto px-4"
x-data="{ quote:'' }"
x-init="
fetch('https://api.kanye.rest')
.then(response =&gt; response.json())
.then(data =&gt; quote = data.quote)
"
&gt;
&lt;div
class="flex items-center text-center justify-center h-screen text-2xl italic"
x-text='`"${quote}"`'
&gt;&lt;/div&gt;
&lt;/div&gt;
</code></pre>
<p>The UI looks like this:</p>
<h2 id="todo-app-and-x-model">Todo App and x-model</h2>
<p>In this cast, we learn how to build a mini to-do app. We need three pieces of state for this; one for keeping the to-dos in an array (<code>todos</code>), one to keep track of whether the user types in a new to-do (<code>todoTitle</code>) and one to keep track of the new to-do ID (<code>todoId</code>).</p>
<p>As we are using many pieces of state, we extract our function to a <code>&lt;script&gt;</code> tag to make things cleaner. The function returns an object which contains our state and our functions:</p><pre><code class="language-html">&lt;script&gt;
function todos() {
return {
todos: [
{
id: 1,
title: "Finish Alpine Screencast",
isComplete: false
}
],
todoTitle: "",
todoId: 2
};
}
&lt;/script&gt;
</code></pre>
<p>Now we loop over our to-dos to display the title we have stored in the array and conditionally add a line-through if the to-do is completed.</p><pre><code class="language-html">&lt;template x-for="todo in todos" :key="todo.id"&gt;
&lt;li class="flex items-center justify-between"&gt;
&lt;div
class="flex items-center"
:class="{ 'line-through' : todo.isComplete }"
&gt;
&lt;input type="checkbox" /&gt;
&lt;div class="ml-3" x-text="todo.title"&gt;&lt;/div&gt;
&lt;/div&gt;
&lt;button class="text-xl ml-2"&gt;&amp;times;&lt;/button&gt;
&lt;/li&gt;
&lt;/template&gt;
</code></pre>
<p>We now work on adding a to-do. First, we add an <code>x-model</code> directive to our <code>&lt;input&gt;</code> which syncs the <code>todoTitle</code> with whatever is typed into the <code>&lt;input&gt;</code>:</p><pre><code class="language-html">&lt;input
type="text"
class="shadow w-full px-2 py-2"
x-model="todoTitle"
@keydown.enter="addTodo()"
/&gt;
</code></pre>
<p>The function we want to run when a user types a new to-do is then added to our <code>&lt;script&gt;</code> tag.</p>
<p>We also use an <code>x-model</code> on the checkbox to allow the user to mark a to-do as complete.</p><pre><code class="language-html">&lt;input type="checkbox" x-model="todo.isComplete" /&gt;
</code></pre>
<h2 id="transitions-dropdown">Transitions: Dropdown</h2>
<p>Next up, Andre shows us some funky transitions which give our dropdown a crisp and professional finish using Tailwind CSS utility classes. These transitions give you fine-grained control over how your dropdown switches from hidden to visible, with options including opacity, duration, origin and others.</p><pre><code class="language-html">&lt;ul
x-show="isOpen"
@click.away="isOpen = false"
class="absolute font-normal bg-white shadow overflow-hidden rounded w-48 border mt-2 py-1 right-0 z-20"
x-transition:enter="transition transform origin-top-right ease-out duration-200"
x-transition:enter-start="opacity-0 scale-75"
x-transition:enter-end="opacity-100 scale-100"
x-transition:leave="transition transform origin-top-right ease-out duration-200"
x-transition:leave-start="opacity-100 scale-100"
x-transition:leave-end="opacity-0 scale-75"
&gt;&lt;/ul&gt;
</code></pre>
<h2 id="transitions-modal">Transitions: Modal</h2>
<p>Now it's time to put our new knowledge of transitions to the test by adding them to our modal. In the spirit of Scrimba, Andre gives us a chance to test out our new skills before showing us how he does it, so no spoilers here!</p>
<h2 id="transitions-sidebar">Transitions: Sidebar</h2>
<p>Finally, we add a nice, smooth transition for the sidebar we implemented earlier. Again, no spoilers, so you can go ahead and give it shot yourself when you watch the course.</p>
<h2 id="conclusion">Conclusion</h2>
<p>We've now taken a look at some use cases for Alpine.js and built a few examples where it might be a better choice than React or Vue. Hopefully you've learned something new about Alpine.js and will be putting your new skills to good use very soon.</p>
<p>If you haven't already, don't forget to check out the <a href="https://scrimba.com/g/galpinejs?utm_source=freecodecamp.org&amp;utm_medium=referral&amp;utm_campaign=galpinejs_launch_article">course over at Scrimba</a>.</p>
<p>In the meantime, happy Alpine coding! :)</p>
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
