---
card: "https://cdn-media-1.freecodecamp.org/images/1*-QMWv7Bv0N6QOcSUCeBu-Q.png"
tags: [JavaScript]
description: by Adam Wattis
author: "Milad E. Fahmy"
title: "How to create a prototype in record time with the Material Theme Plugin for Sketch and Vuetify.js"
created: "2021-08-15T19:44:52+02:00"
modified: "2021-08-15T19:44:52+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-vuejs tag-material-design tag-prototyping tag-tech ">
<header class="post-full-header">
<h1 class="post-full-title">How to create a prototype in record time with the Material Theme Plugin for Sketch and Vuetify.js</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*-QMWv7Bv0N6QOcSUCeBu-Q.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*-QMWv7Bv0N6QOcSUCeBu-Q.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*-QMWv7Bv0N6QOcSUCeBu-Q.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*-QMWv7Bv0N6QOcSUCeBu-Q.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*-QMWv7Bv0N6QOcSUCeBu-Q.png" alt="How to create a prototype in record time with the Material Theme Plugin for Sketch and Vuetify.js">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Adam Wattis</p>
<h1 id="how-to-create-a-prototype-in-record-time-with-the-material-theme-plugin-for-sketch-and-vuetify-js">How to create a prototype in record time with the Material Theme Plugin for Sketch and Vuetify.js</h1>
<p>When developing an MVP (Minimum Viable Product), you intend to go from idea to prototype as fast as possible. The faster you can prototype your idea, the faster you are able to iterate upon it.</p>
<p>As you’re moving from abstract idea to working prototype, you usually don’t want to spend a lot of time creating a custom design when you should be focusing on the functionality of the application. To solve this issue, we use frameworks like Bootstrap to quickly achieve a structured layout with a UI that looks “pretty good” without too much effort.</p>
<p>What we really want to achieve, in terms of design, is to <strong>rapidly</strong> create a UI that is <strong>recognizable</strong> and <strong>coherent.</strong></p>
<p>I’m about to show you a super fast way of going from abstract idea, to design, to working prototype with Material Design. Material Design is Google’s open source design system that they use for all their applications. This makes it recognizable because it is intuitive and easy to navigate, and most people are familiar with it already. If you haven’t already, you should definitely check out what <a href="https://material.io/" rel="noopener">Material design</a> is all about.</p>
<p>By using the Material Design Plugin for Sketch, we’ll create our own customizable Material Design system. This will include a great set of components that will allow us to quickly create coherent designs for our prototype app. The app we’ll make is a simple reminders app.</p>
<p>We will use front-end framework Vue.js together with the Material Design component library Vuetify.js to realize our app designs. Lets get to it!</p>
<h3 id="creating-the-design-system">Creating the design system</h3>
<p><a href="https://material.io/tools/theme-editor/" rel="noopener">Download</a> this plugin for Sketch. Once installed, simply go to Plugins &gt; Material &gt; Open Theme Editor to see the Material Design Theme Editor. Click “Create New Theme”, and we choose to begin with the Baseline theme.</p>
<p>We are now presented with our Material Design system of Sketch components.</p>
<figcaption>Your component library.</figcaption>
</figure>
<p>In the Theme Editor, you may change the primary and secondary color, change the font, change the shape of elements’ corners, and include custom icons. For this example, we will change none of these and just stick with the defaults.</p>
<p>We have now created our design system. As you can see, it says that the document is a <strong>library</strong>. This means that any changes you make to this Sketch file will affect your mock-ups and update all your designs with those changes. How great is that?</p>
<p>Before we continue, we will also install the Sketch Material plugin, which will add some modules that we’ll soon use.</p>
<h3 id="mock-ups"><strong>Mock-ups</strong></h3>
<p>Let’s start by opening a new Sketch document then creating a new iPhone artboard and saving it as <strong>MaterialReminders.sketch</strong>. This is where we’ll create our designs for our application. But first, lets explore the rich component library that is at our disposal.</p>
<p>Under <strong>Insert &gt; Symb</strong>ols you should see the component library we just created.</p>
<figcaption>Explore all the components in our library and imagine the possibilities!</figcaption>
</figure>
<p>Just so many components! We can now begin to create our designs. But first we must break down what functionality we want this reminders app to have. We’re keeping it simple and only adding the ability to:</p>
<ul>
<li>Add a new reminder</li>
<li>Delete a reminder</li>
<li>Check off a reminder from your todo list</li>
<li>Uncheck a reminder from your completed list</li>
</ul>
<p>Fantastic, let’s speed things up and begin dropping some components into our first iPhone artboard.</p>
<p>We start with a top navbar. Drop it in and place it then size it to fit the screen. We’ll have to change the first icon to an “Icon / Add / Filled” for the Menu Icon and change icon color to white. Then change all the other icons to none, since we wont be needing them. We also change the headline to Reminders.</p>
<figcaption>Customizing for your needs becomes super easy with symbol overrides.</figcaption>
</figure>
<p>We’ll now start dropping in some dummy reminders. We’ll create our reminders like a list, so let’s find a suitable component. We’ll use “List / Single Line / Indent / Body 2”.</p>
<p>Now we will center the list object, take away the bottom divider, set the text to “Chores”, and lastly change the icon to “Icon / Checked Circle / Outlined”.</p>
<p>Add a title by inserting a text field, then using the Plugins &gt; Sketch Material &gt; Typography module to change the style to Subhead.</p>
<figcaption>When selecting a text field and going to the Typography module you can click on a style to apply it.</figcaption>
</figure>
<p>It’s beginning to look pretty good so far! But we are now faced with a problem. We want to also include list controls to the <em>right</em> in each list object, because we want to add a delete button there. But the devs over at Google did not include any override for that in the Sketch component. No worries though, we’ll fix this by going into our library file and adding our icon to the symbol, thus updating it throughout our project.</p>
<p>Go to the library and find the list component we used in the Material Components page. Then, double click it to go to its symbol. Click the icon to the left so that it is in focus, then copy paste and move it over to the right. Done deal.</p>
<p>When we switch back over to our project, we can now see that in the the top right corner it says “Library Updates Available”.</p>
<figcaption>Changes have been detected in the library. You may choose to update your designs with these new changes.</figcaption>
</figure>
<p>Now we should be able to change the right hand icon to “Icon / Close / Filled” which will be the button to remove a reminder completely from the list.</p>
<p>To create a list of reminders, we simply copy paste a bunch more list objects, change their text, then change the title that we added to Todo.</p>
<figcaption>Todo list is complete.</figcaption>
</figure>
<p>Then we copy paste that entire list to create the Completed list. On this new list, you must change the title to “Completed”, then change all the icons to the left to be filled instead of outlined.</p>
<figcaption>Select all the list items to change the icons to them all at the same time.</figcaption>
</figure>
<p>Were almost done with our mock-ups. To speed things along, I just changed our artboard color to #FAFAFA and added a “Shadow / 00dp” behind each of my lists.</p>
<figcaption>Completed mock-up.</figcaption>
</figure>
<p>This mock-up view is now complete. The next one we need to create is the dialogue that appears when you press the add button.</p>
<p>We begin by copy pasting the artboard we’ve been working on to create an exact copy. Then, we use the Dialogue and Form modules under “Plugins / Sketch Material” to create a dialogue and a form separately. These are then combined and a opaque box is placed behind. I switched out the transparent action button in the dialogue to a primary colored button.</p>
<p>We are now done with Sketch. Of course, we could add more features and expand our mock-ups even more, but we will keep it simple for now. The next step is to write the code that will become our app!</p>
<h3 id="vue-with-vuetify">Vue with Vuetify</h3>
<p>Now to the fun part — coding. We will be using Vue.js which is a front-end UI library written in JavaScript. It’s really easy to learn, and checking out their <a href="https://vuejs.org/v2/guide/" rel="noopener">website</a> would be a first step. To implement Material Design, we’ll use the <a href="https://vuetifyjs.com/en/getting-started/quick-start" rel="noopener">Vuetify.js</a> component library which includes a bunch of Vue components along with a grid system to easily organize your layout.</p>
<p>We start by simply copy pasting the example markup that’s on the Vuetify starter page. Let’s look at what this does for us.</p>
<p>When looking at HTML, start from the outside and work you way inwards.</p>
<p>We have our <code>&lt;head&gt;</code>&lt;/h<code>ead&gt; and &amp;</code>lt;body&gt;&lt;/bo<code>dy&gt; tags. </code>Inside the &amp;l<code>t;head</code>&gt;&lt;/head&gt; tag we have &lt;lin<code>k&gt; tags that</code> will pull in the required vuetify.min.css file and Google Fonts.</p>
<p>In the <code>&lt;body&gt;&amp;</code>lt;/body&gt;<code>; we have a</code> &lt;div&gt;&lt;/div&gt; and within that we have some Vuetify <code>components, for</code> exam<code>ple &lt;v-app&gt;&lt;/v</code>-app&gt; and &lt;v-content&gt;&lt;/v-content&gt;, which are signified by the “v-” in their names.</p>
<p>Further down you have two <code>&lt;script&gt;&lt;</code>;/script&gt; tags that import the Vue.js and Vuetify.js modules into our page.</p>
<p>Lastly, after the import statements, there is a third <code>&lt;script&gt;&lt;</code>;/script&gt; tag which cr<code>eates</code> a new Vue() instance. This is where we will write all our JavaScript code.</p>
<p>We can see that the instance is hooking into <code>‘#app’</code> which is the ID of the <code>&lt;div&gt;</code>&lt;/div&gt; tag in our HTML. This lets our Vue instance know where to inject our UI.</p>
<p>Inside of the <code>&lt;v-content&gt;&lt;/v</code>-content&gt; tag we will soon place all our Vuetify components. But first we will save what we have for now as index.html, and then open the file in our browser, where we should be presented with “Hello world”.</p>
<p>We continue by looking up what HTML we need for the top navbar component in the Vuetify documentation. The tag we’re looking for is <code>&lt;v-toolbar app&gt;&lt;/v</code>-toolbar&gt; . We’ll also ha<code>ve to add a &lt;</code>;v-btn&gt;&lt;/v-btn&gt; inside this navbar so that we can press it to display the dialogue to add new reminders.</p>
<p>In this button we’ll also add a <code>@click=</code> event which will set <code>addModal</code> to <code>true</code> which will bring up the dialogue modal. We add this in between the <code>&lt;v-content&gt;&lt;/v</code>-content&gt; tags:</p><pre><code>&lt;v-toolbar app color="primary"&gt;  &lt;v-btn color="primary darken-1" icon @click="addModal = true"&gt;    &lt;v-icon&gt;add&lt;/v-icon&gt;  &lt;/v-btn&gt;  &lt;v-toolbar-title&gt;    Reminders  &lt;/v-toolbar-title&gt;&lt;/v-toolbar&gt;</code></pre>
<p>After saving the changes to your document, you should end up with something like this when you refresh your index.html page in your browser:</p>
<p>Don’t worry that the dialogue does not yet work — we must first add the functionality for it inside our <code>Vue()</code> instance. We do this by adding the following to our instance right after the <code>el: '#app'</code> but separated by a comma:</p><pre><code>el: '#app',data: {  addModal: false,  newTask: ''}</code></pre>
<p>The <strong>data</strong> object is where we will store our application state. With this tweak, our dialogue should now work. Save and refresh the page.</p>
<p>Now whenever you click to open your dialogue modal, the internal state in <code>data: {}</code> is set to <code>addModal: true</code>, which then displays the modal. Similarly, whenever you write a message in the dialogue’s text input, it will be saved in <code>newTask</code> since the <code>&lt;v-text-field&gt;&lt;/v-te</code>xt-field&gt; is bound to<code> it thro</code>ugh v-model=.</p>
<p>We’ll now add the code for the <code>add</code> function that will save whatever is inside <code>newTask</code> to our soon-to-be list of reminders. This function must be located inside the <strong>methods</strong> object, which we’ll add after our <code>data: {},</code> object in the Vue instance.</p>
<p>The function will look like this:</p><pre><code>add() {  if (this.newTask !== '') {    this.tasks.unshift({text: this.newTask, completed: false})    this.addModal = false    this.newTask = ''  }}</code></pre>
<p>After enclosing the function inside the <code>method: {}</code> object, the code should now look like this:</p><pre><code>new Vue({  el: '#app',  data: {    addModal: false,    newTask: '',    },  methods: {    add() {      if (this.newTask !== '') {        this.tasks.unshift({text: this.newTask, completed: false})        this.addModal = false        this.newTask = ''      }    }  }});</code></pre>
<p>When the <code>add()</code> function fires, it will add our task from <code>newTask</code> to our not-yet created tasks list unless it’s empty. It will then close the dialogue by setting <code>this.addModal = false</code> and set the <code>newTask</code> to empty again.</p>
<p>Let’s create our task list so that we can begin entering some reminders. Inside the <code>data</code> object, place this code:</p><pre><code>tasks: [   // Some dummy data   {    text: 'Chores',    completed: false   },   {    text: 'More chores',    completed: false   }]</code></pre>
<p>These will be our dummy reminders. As you can see, we have a <code>completed</code> key that is set to either <code>true</code> or <code>false</code> so that we can differentiate between the tasks that are completed and those which are not. This also means that we can’t simply display our <code>tasks</code> list as it is in our UI, because then we would be displaying completed and non-completed tasks together.</p>
<p>The way we’ll solve this is with <strong>computed properties. </strong>They work by constantly watching for changes in your application and returning a computed value based on the changes.</p>
<p>We need two computed properties: one for the <code>todo</code> list and one for the <code>done</code> list that will each separate incomplete and completed tasks. We add <code>computed: {}</code> after our <code>methods: {},</code> and drop in <code>todo: function() {}</code> and <code>done: function() {}</code> computed properties. The <code>todo</code> function will <code>return this.tasks.filter(function(task) {return !task.completed})</code> and the <code>done</code> function will return the opposite by removing the <code>!</code> (which means “not”) in front of <code>task.completed</code> . The code should look like this:</p><pre><code>computed: {  done: function() {   return this.tasks.filter(function(task) {return task.completed})  },  todo: function() {   return this.tasks.filter(function(task) {return !task.completed})  }}</code></pre>
<p>We’re now ready to render our two lists in our UI. This is going to be quite a bit of markup, but don’t worry, we’ll walk through it together. We’re going to replace <code>&lt;v-container&gt;Hello world&lt;/v-c</code>ontainer&gt; by selecting it and then pasting in the following in its place:</p><pre><code>&lt;v-container grid-list-md&gt;  &lt;v-layout row wrap&gt;    &lt;v-flex xs12&gt;      &lt;v-list&gt;        &lt;v-subheader&gt;Tasks to do&lt;/v-subheader&gt;        &lt;v-list-tile v-for="task in todo"&gt;          &lt;v-list-tile-action&gt;            &lt;v-btn icon ripple @click="complete(task)"&gt;              &lt;v-icon v-if="task.completed"&gt;check_circle&lt;/v-icon&gt;              &lt;v-icon v-else&gt;check_circle_outline&lt;/v-icon&gt;            &lt;/v-btn&gt;            &lt;/v-list-tile-action&gt;          &lt;v-list-tile-title&gt;            {{task.text}}          &lt;/v-list-tile-title&gt;          &lt;v-list-tile-action&gt;            &lt;v-btn icon ripple @click="remove(task)"&gt;              &lt;v-icon color="grey lighten-1"&gt;cancel&lt;/v-icon&gt;            &lt;/v-btn&gt;          &lt;/v-list-tile-action&gt;        &lt;/v-list-tile&gt;      &lt;/v-list&gt;    &lt;/v-flex&gt;              &lt;v-flex xs12&gt;      &lt;;v-list&gt;        &lt;v-subheader&gt;Completed tasks&lt;/v-subheader&gt;        &lt;v-list-tile v-for="task in done"&gt;          &lt;v-list-tile-action&gt;            &lt;v-btn icon ripple @click="complete(task)"&gt;              &lt;v-icon v-if="task.completed"&gt;check_circle&lt;/v-icon&gt;              &lt;v-icon v-else&gt;check_circle_outline&lt;/v-icon&gt;            &lt;/v-btn&gt;            &lt;/v-list-tile-action&gt;          &lt;v-list-tile-title&gt;            {{task.text}}          &lt;/v-list-tile-title&gt;          &lt;v-list-tile-action&gt;            &lt;v-btn icon ripple @click="remove(task)"&gt;              &lt;v-icon color="grey lighten-1"&gt;cancel&lt;/v-icon&gt;            &lt;/v-btn&gt;          &lt;/v-list-tile-action&gt;        &lt;/v-list-tile&gt;      &lt;/v-list&gt;    &lt;/v-flex&gt;  &lt;/v-layout&gt;&lt;/v-container&gt;</code></pre>
<p>To begin with, we add <code>grid-list-md</code> to our container. Then we add <code>&lt;v-layout row wrap&gt;&lt;/</code>v-lay<code>out&gt; and &lt;v-fl</code>ex xs12&gt;&lt;/f<code>lex&gt; and add o</code>ur two &lt;v-<code>list&gt;&lt;/v-list&gt; tag</code>s with a &lt;v-subheader&gt;&lt;/v-subheader&gt; in each. This creates our basic layout in form of two lists.</p>
<p>Then, we will add <code>&lt;v-list-tile v-for="task in todo"&gt;&lt;/v-l</code>ist-tile&gt;<code>; wher</code>e the v-for= statement iterates t<code>hrou</code>gh each task in o<code>ur c</code>omputed todo property. Same thing g<code>oes </code>for the done property. As we iterate through each list we will render each list item. Each item will <code>display t</code>he task.text and will have two buttons: one for tri<code>ggering th</code>e complete() function and one to <code>trigger </code>the remove() function.</p>
<p>Let’s continue by writing these inside of our <code>method</code> object.</p><pre><code>complete(task) {  task.completed ? task.completed = false : task.completed = true},remove(task) {  this.tasks = this.tasks.filter(function(x){return x !== task})},</code></pre>
<p>The <code>complete</code> function body contains a ternary operator which will toggle the complete button on each reminder. Whenever <code>task.completed</code> is set to <code>true</code> on a reminder, the entire UI will update and move this reminder to the “Completed” list.</p>
<p>You should now have a real working prototype of our reminder application!</p>
<h3 id="final-thoughts">Final thoughts</h3>
<p>In this article, I was not trying to show how to specifically build a useless reminders app with limited functionality (although that is exactly what I did). Rather, that you can use these tools that I have presented to you to very rapidly build a collection of mock-ups and then, with minimal setup, create a real, working prototype from these designs.</p>
<p>With this in place you can now tweak your component library, build out your designs, and then quickly implement them in code as you go along.</p>
<p>You can find the finished Sketch file and code <a href="https://github.com/adamwattis/MaterialReminders" rel="noopener">here</a>. I also strongly recommend diving deeper into the tools I’ve talked about to fully realize their potential.</p>
<p>Hope you enjoyed this article and that you find it useful. Comment if you have any questions or let me know what you thought of it.</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
