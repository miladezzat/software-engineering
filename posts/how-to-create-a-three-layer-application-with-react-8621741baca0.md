---
card: "https://cdn-media-1.freecodecamp.org/images/1*R1_hBuSvlzK6TlDt3aJM8A.jpeg"
tags: [JavaScript]
description: "Discover Functional JavaScript was named one of the best new "
author: "Milad E. Fahmy"
title: "How to create a three layer application with React"
created: "2021-08-16T11:35:24+02:00"
modified: "2021-08-16T11:35:24+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-technology tag-web-development tag-react tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">How to create a three layer application with React</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*R1_hBuSvlzK6TlDt3aJM8A.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*R1_hBuSvlzK6TlDt3aJM8A.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*R1_hBuSvlzK6TlDt3aJM8A.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*R1_hBuSvlzK6TlDt3aJM8A.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*R1_hBuSvlzK6TlDt3aJM8A.jpeg" alt="How to create a three layer application with React">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
constructor(props){
super(props);
this.search = this.search.bind(this);
this.handleChange = this.handleChange.bind(this);
this.state = { text: "" };
}
search(){
const query = Object.freeze({ text: this.state.text });
if(this.props.onSearch)
this.props.onSearch(query);
}
handleChange(event) {
this.setState({text: event.target.value});
}
render() {
return &lt;form&gt;
&lt;input onChange={this.handleChange} value={this.state.text} /&gt;
&lt;button onClick={this.search} type="button"&gt;Search&lt;/button&gt;
&lt;/form&gt;;
}
}</code></pre><h4 id="todolist">TodoList</h4><p><code>TodoList</code> gets the list of <code>todos</code> to render using a property. It sends the <code>todos</code>, one by one, to the <code>TodoListItem</code>.</p><p><code>TodoList</code> is a stateless functional component.</p><pre><code>export default function TodoList(props) {
function renderTodoItem(todo){
return &lt;TodoListItem todo={todo} key={todo.id}&gt;&lt;/TodoListItem&gt;;
}
return &lt;div className="todo-list"&gt;
&lt;ul&gt;
{ props.todos.map(renderTodoItem) }
&lt;/ul&gt;
&lt;/div&gt;;
}</code></pre><h4 id="todolistitem">TodoListItem</h4><p><code>TodoListItem</code> displays the <code>todo</code> received as a parameter. It is implemented as a stateless functional component.</p><pre><code>export default function TodoListItem(props){
return &lt;li&gt;
&lt;div&gt;{ props.todo.title}&lt;/div&gt;
&lt;div&gt;{ props.todo.userName }&lt;/div&gt;
&lt;/li&gt;;
}</code></pre><p>Read <a href="https://read.amazon.com/kp/embed?asin=B0846NRJYR&amp;preview=newtab&amp;linkCode=kpe&amp;ref_=cm_sw_r_kb_dp_o.hlEbDD02JB2" rel="noopener nofollow"><strong><strong>Functional Architecture with React and Redux</strong></strong></a> and learn how to build apps in function style.</p><p><a href="https://read.amazon.com/kp/embed?asin=B07PBQJYYG&amp;preview=newtab&amp;linkCode=kpe&amp;ref_=cm_sw_r_kb_dp_cm5KCbE5BDJGE&amp;source=post_page---------------------------"><strong><strong>Discover Functional JavaScript</strong></strong></a> was named one of the<strong><strong> </strong></strong><a href="https://bookauthority.org/books/new-functional-programming-books?t=7p46zt&amp;s=award&amp;book=1095338781&amp;source=post_page---------------------------"><strong><strong>best new Functional Programming books by BookAuthority</strong></strong></a><strong><strong>!</strong></strong></p><p><strong><strong>For more on applying functional programming techniques in React take a look at</strong></strong> <a href="https://read.amazon.com/kp/embed?asin=B07S1NLFTS&amp;preview=newtab&amp;linkCode=kpe&amp;ref_=cm_sw_r_kb_dp_Pko5CbA30383Y&amp;source=post_page---------------------------"><strong><strong>Functional React</strong></strong></a><strong><strong>.</strong></strong></p><p>You can find me on <a href="https://medium.com/@cristiansalcescu">Medium</a> and <a href="https://twitter.com/cristi_salcescu" rel="noopener nofollow nofollow noopener nofollow noopener nofollow noopener">Twitter</a>.</p>
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
