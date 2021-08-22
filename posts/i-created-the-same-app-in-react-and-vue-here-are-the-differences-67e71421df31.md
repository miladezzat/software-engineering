---
card: "https://cdn-media-1.freecodecamp.org/images/1*mJ-qdNqldpgae2U5oS0qDg.png"
tags: [JavaScript]
description: by Sunil Sandhu
author: "Milad E. Fahmy"
title: "I created the same app in React and Vue. Here are the differences."
created: "2021-08-15T19:42:28+02:00"
modified: "2021-08-15T19:42:28+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-react tag-vuejs tag-programming tag-tech ">
<header class="post-full-header">
<h1 class="post-full-title">I created the same app in React and Vue. Here are the differences.</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*mJ-qdNqldpgae2U5oS0qDg.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*mJ-qdNqldpgae2U5oS0qDg.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*mJ-qdNqldpgae2U5oS0qDg.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*mJ-qdNqldpgae2U5oS0qDg.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*mJ-qdNqldpgae2U5oS0qDg.png" alt="I created the same app in React and Vue. Here are the differences.">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Sunil Sandhu</p>
<h1 id="i-created-the-same-app-in-react-and-vue-here-are-the-differences-">I created the same app in React and Vue. Here are the differences.</h1>
<p>Having used <strong>Vue</strong> at my current workplace, I had a fairly solid understanding of how it all worked. I was, however, curious to know what the grass was like on the other side of the fence — the grass in this scenario being React.</p>
<p>I’d read the React docs and watched a few tutorial videos and, while they were great and all, what I really wanted to know was how different <strong>React</strong> was from <strong>Vue</strong>.</p>
<p>By “different”, I didn’t mean things such as whether they both had <strong>virtual DOMS</strong> or how they went about rendering pages. I wanted someone to take the time to explain the code and to tell me what was going on! I wanted to find an article that took the time to explain these differences so that someone new to either <strong>Vue</strong> or <strong>React</strong> (or Web Development as a whole) could gain a better understanding of the differences between the two.</p>
<p>But I couldn’t find anything that tackled this. So I came to the realisation that I’d have to go ahead and build this myself in order to see the similarities and differences. In doing so, I thought I’d document the whole process so that an article on this would finally exist.</p>
<figcaption>Who wore it better?</figcaption>
</figure>
<p>I decided to try and build a fairly standard To Do App that allows a user to add and delete items from the list. Both apps were built using the default<strong> CLIs</strong> (<strong>create-react-app</strong> for <strong>React</strong>, and <strong>vue-cli </strong>for <strong>Vue</strong>). <em>CLI stands for Command Line Interface by the way</em>. ?</p>
<h4 id="anyway-this-intro-is-already-longer-than-i-d-anticipated-so-let-s-start-by-having-a-quick-look-at-how-the-two-apps-look-">Anyway, this intro is already longer than I’d anticipated. So let’s start by having a quick look at how the two apps look:</h4>
<figcaption>Vue vs React: The Irresistible Force meets The Immovable Object</figcaption>
</figure>
<p>The CSS code for both apps is exactly the same, but there are differences in where these are located. With that in mind, let’s next have a look at the file structure of both apps:</p>
<figcaption>Who wore it better?</figcaption>
</figure>
<p>You’ll see that their structures are almost identical as well. The only difference here is that the React app has three CSS files, whereas the Vue app doesn’t have any. This is because, in create-react-app, <strong>a React component will have an accompanying file to hold its styles, whereas the Vue CLI adopts an all-encompassing approach where the styles are declared inside the actual component file</strong>.</p>
<p>Ultimately, they both achieve the same thing, and there is nothing to say that you can’t go ahead and structure your CSS differently in React or Vue. It really comes down to personal preference — you’ll hear plenty of discussion from the dev community over how CSS should be structured. For now, we’ll just follow the structure laid out in both CLIs.</p>
<p>But before we go any further, let’s take a quick look at what a typical Vue component and React component look like:</p>
<figcaption>Vue on the left. React on the right</figcaption>
</figure>
<p>Now that’s out of the way, let’s get into the nitty gritty detail!</p>
<h3 id="how-do-we-mutate-data">How do we mutate data?</h3>
<p>But first, what do we even mean by “mutate data”? Sounds a bit technical, doesn’t it? It basically just means changing the data that we have stored. So if we wanted to change the value of a person’s name from John to Mark, we would be ‘mutating the data’.</p>
<p>This is where a key difference between React and Vue lies. <strong>While Vue essentially creates a data object, where data can freely be updated, React creates a state object, where a little more legwork is required to carry out updates</strong>.</p>
<p>Now React implements the extra legwork with good reason, and we’ll get into that in a little bit. But first, let’s take a look at the <strong>data</strong> object from Vue and the <strong>state</strong> object from React:</p>
<figcaption>Vue data object on the left. React state object on the right.</figcaption>
</figure>
<p>So you can see that we have passed the same data into both, but they’re simply labelled differently. So passing initial data into our components is very, very similar. But as we’ve mentioned, how we go about changing this data differs between the frameworks.</p>
<p>Let’s say that we have a data element called <code><strong>name: ‘Sunil’</strong></code>.</p>
<p>In Vue, we reference this by calling<strong> <code>this.name</code></strong>. We can also go about updating this by calling <code><strong>this.name</strong> <strong>= ‘John’</strong></code>. This would change my name to John. I’m not sure how I feel about being called John, but hey ho, things happen! ?</p>
<p>In React, we would reference the same piece of data by calling <code><strong>this.state.name</strong></code>. Now the key difference here is that we cannot simply write <code><strong>this.state.name</strong> = ‘John’</code>, because React has restrictions in place to prevent this kind of easy, care-free mutation-making. So in React, we would write something along the lines of <code><strong>this.setState({name: ‘John’})</strong></code>.</p>
<p>While this essentially does the same thing as we achieved in Vue, the extra bit of writing is there because Vue essentially combines its own version of setState by default whenever a piece of data gets updated.</p>
<p>So in short, <strong>React requires setState and then the updated data inside of it, whereas Vue makes an assumption that you’d want to do this if you were updating values inside the data object</strong>.</p>
<p>Why does React even bother with this, and why is setState even needed? Let’s hand this over to <a href="https://medium.com/@revanth0212" rel="noopener">Revanth Kumar</a> for an explanation:</p>
<blockquote>“This is because React wants to re-run certain life cycle hooks, [such as] componentWillReceiveProps, shouldComponentUpdate, componentWillUpdate, render, componentDidUpdate, whenever state changes. It would know that the state has changed when you call the setState function. If you directly mutated state, React would have to do a lot more work to keep track of changes and what lifecycle hooks to run etc. So to make it simple React uses setState.”</blockquote>
<figcaption>Bean knew best</figcaption>
</figure>
<p>Now that we have mutations out of the way, let’s get into the nitty gritty by looking at how we would go about adding new items to both of our To Do Apps.</p>
<h3 id="how-do-we-create-new-to-do-items">How do we create new To Do Items?</h3>
<h4 id="react-">React:</h4><pre><code class="language-jsx">createNewToDoItem = () =&gt; {
this.setState( ({ list, todo }) =&gt; ({
list: [
...list,
{
todo
}
],
todo: ''
})
);
};</code></pre>
<h4 id="how-did-react-do-that">How did React do that?</h4>
<p>In React, our input field has a attribute on it called <strong>value. </strong>This value gets automatically updated through the use of a couple of functions that tie together to create something that closely resembles <strong>two-way binding</strong> (if you’ve never heard of this before, there’s a more detailed explanation in the <em>How did Vue do that </em>section after this). We create this form of two-way binding by having an additional <strong>onChange event listener </strong>attached to the <strong>input</strong> field.</p>
<p>Let’s quickly take a look at the <strong>input </strong>field so that you can see what is going on:</p><pre><code class="language-jsx">&lt;input type="text"
value={this.state.todo}
onChange={this.handleInput}/&gt;</code></pre>
<p>The handleInput function is run whenever the value of the input field changes. It updates the <strong>todo</strong> that sits inside the state object by setting it to whatever is in the input field. This function looks as such:</p><pre><code class="language-jsx">handleInput = e =&gt; {
this.setState({
todo: e.target.value
});
};</code></pre>
<p>Now, whenever a user presses the <strong>+ </strong>button on the page to add a new item, the <code><strong>createNewToDoItem</strong></code><strong> </strong>function essentially runs this.setState and passes it a function.</p>
<p>This function takes two parameters, the first being the entire <code><strong>list</strong></code><strong> </strong>array from the state object, the second being the <code><strong>todo</strong></code><strong> </strong>(which gets updated by the <code><strong>handleInput</strong></code> function). The function then returns a new object, which contains the entire <code><strong>list</strong></code> from before and then adds <code><strong>todo</strong></code><strong> </strong>at the end of it. The entire list is added through the use of a spread operator (Google this if you’ve not seen this before — it’s ES6 syntax).</p>
<p>Finally, we set <code><strong>todo</strong></code><strong> </strong>to an empty string, which automatically updates the <strong>value</strong> inside the <strong>input</strong> field.</p>
<h4 id="vue-">Vue:</h4><pre><code class="language-js">createNewToDoItem() {
this.list.push(
{
'todo': this.todo
}
);
this.todo = '';
}</code></pre>
<h4 id="how-did-vue-do-that">How did Vue do that?</h4>
<p>In Vue, our <strong>input</strong> field has a handle on it called <strong>v-model</strong>. This allows us to do something known as <strong>two-way binding</strong>. Let’s just quickly look at our input field, then we’ll explain what is going on:</p><pre><code class="language-js">&lt;input type="text" v-model="todo"/&gt;</code></pre>
<p>V-Model ties the input of this field to a key we have in our data object called toDoItem. When the page loads, we have <code><strong>toDoItem</strong></code> set to an empty string, as such: <code><strong>todo: ‘’</strong></code>. If this had some data already in there, such as <code><strong>todo: ‘add some text here’</strong></code>, our input field would load with <em>add some text here</em> already inside the input field.</p>
<p>Anyway, going back to having it as an empty string, whatever text we type inside the input field gets bound to the value for <code><strong>todo</strong></code>. This is effectively two-way binding (the input field can update the data object and the data object can update the input field).</p>
<p>So looking back at the <code><strong>createNewToDoItem()</strong></code><strong> </strong>code block from earlier, we see that we push the contents of <code><strong>todo</strong></code><strong> </strong>into the <code><strong>list</strong></code><strong> </strong>array<strong> </strong>and then update <code><strong>todo</strong></code><strong> </strong>to an empty string.</p>
<h3 id="how-do-we-delete-from-the-list">How do we delete from the list?</h3>
<h4 id="react--1">React:</h4><pre><code class="language-jsx">deleteItem = indexToDelete =&gt; {
this.setState(({ list }) =&gt; ({
list: list.filter((toDo, index) =&gt; index !== indexToDelete)
}));
};</code></pre>
<h4 id="how-did-react-do-that-1">How did React do that?</h4>
<p>So whilst the deleteItem function is located inside <strong>ToDo.js</strong>, I was very easily able to make reference to it inside <strong>ToDoItem.js </strong>by firstly passing the <code><strong>deleteItem()</strong></code><strong> </strong>function as a prop on <code><strong>&lt;ToDoIte</strong></code>m/&gt; as such:</p><pre><code class="language-jsx">&lt;ToDoItem deleteItem={this.deleteItem.bind(this, key)}/&gt;</code></pre>
<p>This passes the function down to make it accessible to the child. You’ll see here that we’re also binding <code><strong>this</strong></code> as well as passing the key parameter, as the key is what the function is going to use to differentiate between which <strong>ToDoItem</strong> we’re attempting to delete when clicked. Then, inside the <strong>ToDoItem</strong> component, we do the following:</p><pre><code class="language-jsx">&lt;div className=”ToDoItem-Delete” onClick={this.props.deleteItem}&gt;-&lt;/div&gt;</code></pre>
<p>All I had to do to reference a function that sat inside the parent component was to reference <code><strong>this.props.deleteItem</strong></code>.</p>
<h4 id="vue--1">Vue:</h4><pre><code class="language-js">onDeleteItem(todo){
this.list = this.list.filter(item =&gt; item !== todo);
}</code></pre>
<h4 id="how-did-vue-do-that-1">How did Vue do that?</h4>
<p>A slightly different approach is required in Vue. We essentially have to do three things here:</p>
<p>Firstly, on the element we want to call the function:</p><pre><code class="language-js">&lt;div class=”ToDoItem-Delete” @click=”deleteItem(todo)”&gt;-&lt;/div&gt;</code></pre>
<p>Then we have to create an emit function as a method inside the child component (in this case, <strong>ToDoItem.vue</strong>), which looks like this:</p><pre><code class="language-js">deleteItem(todo) {
this.$emit('delete', todo)
}</code></pre>
<p>Along with this, you’ll notice that we actually reference a <strong>function</strong> when we add<strong> ToDoItem.vue </strong>inside of <strong>ToDo.vue</strong>:</p><pre><code class="language-js">&lt;ToDoItem v-for="todo in list"
:todo="todo"
@delete="onDeleteItem" // &lt;-- this :)
:key="todo.id" /&gt;</code></pre>
<p>This is what is known as a <strong>custom event-listener</strong>. It listens out for any occasion where an emit is triggered with the string of <code>‘delete’</code>. If it hears this, it triggers a function called <code><strong>onDeleteItem</strong></code>. This function sits inside of <strong>ToDo.vue, </strong>rather than <strong>ToDoItem.vue</strong>. As we discussed earlier, it simply filters the <code><strong>todo</strong></code><strong> array</strong> inside<strong> </strong>the <code><strong>data</strong></code><strong> object</strong> to remove the item that was clicked on.</p>
<p>It’s also worth noting here that in the Vue example, I could have simply written the <code><strong>$emit</strong></code> part inside of the <code><strong>@click</strong></code> listener, as such:</p><pre><code class="language-js">&lt;div class=”ToDoItem-Delete” @click=”$emit(‘delete’, todo)”&gt;-&lt;/div&gt;</code></pre>
<p>This would have reduced the number of steps down from 3 to 2, and this is simply down to personal preference.</p>
<p>In short, <strong>child components in React will have access to parent functions via</strong> <code><strong>this.props</strong></code> (providing you are passing props down, which is fairly standard practice — you’ll come across this loads of times in other React examples). In Vue, on the other hand,<strong> you have to emit events from the child that will usually be collected inside the parent component</strong>.</p>
<h3 id="how-do-we-pass-event-listeners">How do we pass event listeners?</h3>
<h4 id="react--2">React:</h4>
<p>Event listeners for simple things such as click events are straightforward. Here is an example of how we created a click event for a button that creates a new ToDo item:</p><pre><code class="language-jsx">&lt;div className=”ToDo-Add” onClick={this.createNewToDoItem}&gt;+&lt;/div&gt;.</code></pre>
<p>Super easy here, and pretty much looks like how we would handle an in-line <code>onClick</code> with vanilla JS. As mentioned in the Vue section, it took a little bit longer to set up an event listener to handle whenever the enter button was pressed. This essentially required an <code>onKeyPress</code> event to be handled by the input tag, as such:</p><pre><code class="language-jsx">&lt;input type=”text” onKeyPress={this.handleKeyPress}/&gt;.</code></pre>
<p>This function essentially triggered the <code><strong>createNewToDoItem</strong></code> function whenever it recognised that the ‘enter’ key had been pressed, as such:</p><pre><code>handleKeyPress = (e) =&gt; {
if (e.key === ‘Enter’) {
this.createNewToDoItem();
}
};</code></pre>
<h4 id="vue--2">Vue:</h4>
<p>In Vue it is super straight-forward. We simply use the <strong>@</strong> symbol, and then the type of event-listener we want to do. So for example, to add a click event listener, we could write the following:</p><pre><code class="language-js">&lt;div class=”ToDo-Add” @click=”createNewToDoItem()”&gt;+&lt;/div&gt;</code></pre>
<p>Note: <code><strong>@click</strong> </code>is actually shorthand for writing <code><strong>v-on:click</strong></code>. The cool thing with Vue event listeners is that there are also a bunch of things that you can chain on to them, such as <code>.once</code>, which prevents the event listener from being triggered more than once. There are also a bunch of shortcuts when it comes to writing specific event listeners for handling key strokes.</p>
<p>I found that it took quite a bit longer to create an event listener in React to create new ToDo items whenever the enter button was pressed. In Vue, I was able to simply write:</p><pre><code class="language-js">&lt;input type=”text” v-on:keyup.enter=”createNewToDoItem”/&gt;</code></pre>
<h4 id="how-do-we-pass-data-through-to-a-child-component">How do we pass data through to a child component?</h4>
<h4 id="react--3">React:</h4>
<p>In React, we pass props onto the child component at the point where it is created. Such as:</p><pre><code class="language-jsx">&lt;ToDoItem key={key} item={todo} /&gt;</code></pre>
<p>Here we see two props passed to the <strong>ToDoItem</strong> component. From this point on, we can now reference them in the child component via <code><strong>this.props</strong></code>. So to access the <code><strong>item.todo</strong></code> prop, we simply call <code><strong>this.props.item</strong></code>.</p>
<h4 id="vue--3">Vue:</h4>
<p>In Vue, we pass props onto the child component at the point where it is created. Such as:</p><pre><code class="language-js">&lt;ToDoItem v-for="todo in list"
:todo="todo"
:key="todo.id"
@delete="onDeleteItem" /&gt;</code></pre>
<p>Once this is done, we then pass them into the props array in the child component, as such: <code><strong>props: [ ‘todo’ ]</strong></code>. These can then be referenced in the child by their name — so in our case, <code><strong>‘todo</strong>’</code>.</p>
<h3 id="how-do-we-emit-data-back-to-a-parent-component">How do we emit data back to a parent component?</h3>
<h4 id="react--4">React:</h4>
<p>We firstly pass the function down to the child component by referencing it as a prop in the place where we call the child component. We then add the call to function on the child by whatever means, such as an <code><strong>onClick</strong></code>, by referencing <code><strong>this.props.whateverTheFunctionIsCalled</strong></code>. This will then trigger the function that sits in the parent component.</p>
<p>We can see an example of this entire process in the section<em> ‘How do we delete from the list’.</em></p>
<h4 id="vue--4">Vue:</h4>
<p>In our child component, we simply write a function that emits a value back to the parent function. In our parent component, we write a function that listens for when that value is emitted, which can then trigger a function call. We can see an example of this entire process in the section <em>‘How do we delete from the list’.</em></p>
<h3 id="and-there-we-have-it-">And there we have it! ?</h3>
<p>We’ve looked at how we add, remove and change data, pass data in the form of props from parent to child, and send data from the child to the parent in the form of event listeners.</p>
<p>There are, of course, lots of other little differences and quirks between React and Vue, but hopefully the contents of this article has helped to serve as a bit of a foundation for understanding how both frameworks handle stuff ?</p>
<p>If you found this useful, please share on social media and comment!</p>
<h4 id="github-links-to-both-apps-">Github links to both apps:</h4>
<p>Vue ToDo: <a href="https://github.com/sunil-sandhu/vue-todo" rel="noopener">https://github.com/sunil-sandhu/vue-todo</a></p>
<p>React ToDo: <a href="https://github.com/sunil-sandhu/react-todo" rel="noopener">https://github.com/sunil-sandhu/react-todo</a></p>
<p><strong>This is a syndicated repost for freeCodeCamp in collaboration with <a href="https://medium.com/javascript-in-plain-english" rel="noopener">Javascript In Plain English</a>. The original version of this article can be found <a href="https://medium.com/javascript-in-plain-english/i-created-the-exact-same-app-in-react-and-vue-here-are-the-differences-e9a1ae8077fd" rel="noopener">here</a>.</strong></p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
