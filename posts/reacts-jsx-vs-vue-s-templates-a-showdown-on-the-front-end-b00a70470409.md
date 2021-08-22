---
card: "https://cdn-media-1.freecodecamp.org/images/1*QH4RGlNwXUFnJSytytvb6A.jpeg"
tags: [JavaScript]
description: "React.js and Vue.js are two of the most popular JavaScript li"
author: "Milad E. Fahmy"
title: "React’s JSX vs Vue’s templates: a showdown on the front end"
created: "2021-08-16T10:25:08+02:00"
modified: "2021-08-16T10:25:08+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-react tag-vuejs tag-web-development tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">React’s JSX vs Vue’s templates: a showdown on the front end</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*QH4RGlNwXUFnJSytytvb6A.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*QH4RGlNwXUFnJSytytvb6A.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*QH4RGlNwXUFnJSytytvb6A.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*QH4RGlNwXUFnJSytytvb6A.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*QH4RGlNwXUFnJSytytvb6A.jpeg" alt="React’s JSX vs Vue’s templates: a showdown on the front end">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>React.js and Vue.js are two of the most popular JavaScript libraries on the planet. They're both powerful and relatively easy to pick up and use.</p><p>Both React and Vue:</p><ul><li>use a virtual DOM</li><li>provide reactive view components</li><li>maintain a focus on one aspect of development. In this case, the view.</li></ul><p>With so many similarities, you might assume that they’re both different versions of the same thing.</p><p>Well there’s one major difference between these two libraries: how they empower you the developer to create your view components, and in turn, your application.</p><p>React uses JSX, a term coined by the React team, to render content onto the DOM. So what is JSX? Basically, JSX is a JavaScript render function that helps you insert your HTML right into your JavaScript code.</p><p>Vue takes a different approach and uses HTML-like templates. Using Vue templates is like using JSX in that they’re both created using JavaScript. The main difference is that JSX functions are never used in the actual HTML file, while Vue templates are.</p><h3 id="react-jsx"><strong>React JSX</strong></h3><p>Let’s take a deeper look into how JSX works. Assume that you have a list of names that you want to display onto the DOM. A list of new hires that your company recently made.</p><p>If you were using plain HTML, you would first need to create an index.html file. Then you would add the following lines of code.</p><pre><code class="language-html">&lt;ul&gt;
&lt;li&gt; John &lt;/li&gt;
&lt;li&gt; Sarah &lt;/li&gt;
&lt;li&gt; Kevin &lt;/li&gt;
&lt;li&gt; Alice &lt;/li&gt;
&lt;ul&gt;</code></pre><p>Nothing spectacular here, just plain HTML code.</p><p>So how would you do the same thing using JSX? The first step would be to create another index.html file. But instead of adding the full HTML like you did before, you’ll only add a simple <code>div</code> element. This <code>div</code> will be the container element where all your React code will be rendered.</p><p>The <code>div</code> will need to have a unique ID so that React knows where to find it. Facebook tends to favor the root keyword, so let’s stick with that.</p><pre><code>&lt;div id=root&gt;&lt;/div&gt;</code></pre><p>Now, onto the most important step. Creating the JavaScript file that will hold all the React code. Call this one app.js.</p><p>So now that you have all that out of the way, onto the main event. Displaying all the new hires to the Dom using JSX</p><p>You would first need to create an array with the names of the new hires.</p><pre><code>const names = [‘John’, ‘Sarah’, ‘Kevin’, ‘Alice’];</code></pre><p>From there you would need to create a React element that will dynamically render the entire list of names. This without you having to manually display each one.</p><pre><code class="language-js">const displayNewHires = (
&lt;ul&gt;
{names.map(name =&gt; &lt;li&gt;{name}&lt;/li&gt; )}
&lt;/ul&gt;
);</code></pre><p>The key thing to note here is that you are not having to create individual <code>&lt;</code>li&gt; elements. You only need describe how you want them to look once and React will handle the rest. That is quite a powerful thing. While you only have a few names, imagine having a list of hundreds of thousands! You can see how this would be a much better approach. Especially i<code>f th</code>e &lt;li&gt; elements are more complex than the ones used here.</p><p>The last bit of code that is needed to render the content to the screen is the main ReactDom render function.</p><pre><code class="language-js">ReactDOM.render(
displayNewHires,
document.getElementById(‘root’)
);</code></pre><p>Here you are telling React to render the content of <code>displayNewHires</code> inside the <code>div</code> with an element of root.</p><p>This is what your final React code should look like:</p><pre><code class="language-js">const names = [‘John’, ‘Sarah’, ‘Kevin’, ‘Alice’];
const displayNewHires = (
&lt;ul&gt;
{names.map(name =&gt; &lt;li&gt;{name}&lt;/li&gt; )}
&lt;/ul&gt;
);
ReactDOM.render(
displayNewHires,
document.getElementById(‘root’)
);</code></pre><p>One key thing to keep in mind here is that this is all React code. This means that it will all compile down to plain old JavaScript. Here’s what it would ultimately look like:</p><pre><code class="language-js">‘use strict’;
var names = [‘John’, ‘Sarah’, ‘Kevin’, ‘Alice’];
var displayNewHires = React.createElement(
‘ul’,
null,
names.map(function (name) {
return React.createElement(
‘li’,
null,
name
);
})
);
ReactDOM.render(displayNewHires, document.getElementById(‘root’));</code></pre><p>That’s all there is to it. You now have a simple React application that will display a list of names. Nothing to write home about, but it should give you a glimpse of what React is capable of.</p><h3 id="vue-js-templates"><strong>Vue.js Templates</strong></h3><p>In keeping with the last example, you will once again create a simple application that will display a list of names onto the browser.</p><p>The first thing that you need to do is create another empty index.html file. Inside that file, you will then create another empty <code>div</code> with an id of root. Keep in mind though, that root is only a personal preference. You can call the id whatever you like. You only need to make sure that it matches up later on when you sync the html to your JavaScript code.</p><p>This div will function like it does in React. It will tell the JavaScript library, in this case Vue, where to look in the DOM when it wants to start making changes.</p><p>Once that’s done, you’re going to create a JavaScript file that will house all the Vue code. Call it app.js, to stay consistent.</p><p>So now that you have your files ready to go, let’s get into how Vue displays element onto the browser.</p><p>Vue uses a template-like approach when it comes to manipulating the DOM. This means that your HTML file will not only have an empty <code>div</code>, like in React. You’re actually going to write a good part of your code in your HTML file.</p><p>To give you a better idea, think back on what it takes to create a list of name using plain HTML. A <code>&lt;</code><strong>u</strong>l&gt; element with<code> som</code>e &lt;li&gt; elements inside. In Vue, you are going to do almost the exact same thing, with only a few changes added in.</p><p>Create a <code>&lt;</code>ul&gt; element.</p><pre><code class="language-html">&lt;ul&gt;
&lt;/ul&gt;</code></pre><p>Now add one empty <code>&lt;</code>li&gt; element insid<code>e th</code>e &lt;ul&gt; element.</p><pre><code class="language-html">&lt;ul&gt;
&lt;li&gt;
&lt;/li&gt;
&lt;/ul&gt;</code></pre><p>Nothing new yet. Change that by adding a directive, a custom Vue attribute, to your <code>&lt;<strong>l</strong>i&gt;</code> element.</p><pre><code class="language-html">&lt;ul&gt;
&lt;li v-for=’name in listOfNames’&gt;
&lt;/li&gt;
&lt;/ul&gt;</code></pre><p>A directive is Vue’s way of adding JavaScript functionality straight into the HTML. They all start with v- and are followed by descriptive names that give you an idea of what they are doing. In this case, it’s a for loop. For every name in your list of names, <code>listOfNames</code>, you want to copy this <code>&lt;</code><strong>l</strong>i&gt; element and replace it with <code>a ne</code>w &lt;li&gt; element with a name from your list.</p><p>Now, the code only needs one final touch. Currently, it will display an <code>&lt;</code>li&gt; element for every name in your list, but you have not actually told it to display the actual name onto the browser. To fix that, you are going to insert some mustache like syntax inside<code> you</code><strong>r</strong> &lt;li&gt; element. Something you might have seen in some other JavaScript libraries.</p><pre><code class="language-html">&lt;ul&gt;
&lt;li v-for=’name in listOfNames’&gt;
{{name}}
&lt;/li&gt;
&lt;/ul&gt;</code></pre><p>Now the <code>&lt;</code><strong>l</strong>i&gt; element is complete. It will now display each item inside a list called listOfNames. Keep in mind that the<strong> word</strong> name is arbitrary. You could have call<strong>ed it</strong> item and it would have served the same purpose. All the keyword does is serve as a placeholder that will be used to iterate over the list.</p><p>The last thing that you need to do is create the data set and actually initialize Vue in your application.</p><p>To do so, you will need to create a new Vue instance. Instantiate it by assigning it to a variable called app.</p><pre><code>let app = new Vue({
});</code></pre><p>Now, the object is going to take in a few parameters. The first one being the most important, the <code>el</code> (element) parameter that tells Vue where to start adding things to the DOM. Just like you did with your React example.</p><pre><code class="language-js">let app = new Vue({
el:’#root’,
});</code></pre><p>The final step is to add the data to the Vue application. In Vue, all the data passed into the application will be done so as a parameter to the Vue instance. Also, each Vue instance can only have one parameter of each kind. While there are quite a few, you only need to focus on two for this example, <code>el</code> and <code>data</code>.</p><pre><code class="language-js">let app = new Vue({
el:’#root’,
data: {
listOfNames: [‘Kevin’, ‘John’, ‘Sarah’, ‘Alice’]
}
});</code></pre><p>The data object will accept an array called <code>listOfNames</code>. Now whenever you want to use that dataset in your application, you only need to call it using a directive. Simple, right?</p><p>Here’s the final application:</p><h4 id="html"><strong>HTML</strong></h4><pre><code class="language-html">&lt;div id=”root”&gt;
&lt;ul&gt;
&lt;li v-for=’name in listOfNames’&gt;
{{name}}
&lt;/li&gt;
&lt;/ul&gt;
&lt;/div&gt;</code></pre><h4 id="javascript"><strong>JavaScript</strong></h4><pre><code class="language-js">new Vue({
el:”#root”,
data: {
listOfNames: [‘Kevin’, ‘John’, ‘Sarah’, ‘Alice’]
}
});</code></pre><h3 id="conclusion"><strong>Conclusion</strong></h3><p>You know now how to create two simple applications using both React and Vue. They both offer a robust amount of features, though Vue tends to be the easier to use. Also, keep in mind that Vue allows the use of JSX, though it is not the preferred method of implementation.</p><p>Either way, these are two powerful libraries and you can’t go wrong using either one.</p><p>If you want to learn more about web development check out my website at <a href="https://juanmvega.com">juanmvega.com</a> for videos and articles on the latest JavaScript standards and frameworks!</p>
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
