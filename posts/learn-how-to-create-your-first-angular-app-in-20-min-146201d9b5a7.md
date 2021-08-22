---
card: "https://cdn-media-1.freecodecamp.org/images/0*WzYWvtV9CbhkCorg."
tags: [JavaScript]
description: Angular is a JavaScript framework, created my Misko Hevery an
author: "Milad E. Fahmy"
title: "Learn how to create your first Angular app in 20 minutes"
created: "2021-08-15T19:47:53+02:00"
modified: "2021-08-15T19:47:53+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-front-end-development tag-tech tag-programming tag-angular2 ">
<header class="post-full-header">
<h1 class="post-full-title">Learn how to create your first Angular app in 20 minutes</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/0*WzYWvtV9CbhkCorg. 300w,
https://cdn-media-1.freecodecamp.org/images/0*WzYWvtV9CbhkCorg. 600w,
https://cdn-media-1.freecodecamp.org/images/0*WzYWvtV9CbhkCorg. 1000w,
https://cdn-media-1.freecodecamp.org/images/0*WzYWvtV9CbhkCorg. 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/0*WzYWvtV9CbhkCorg." alt="Learn how to create your first Angular app in 20 minutes">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Angular is a JavaScript framework, created my Misko Hevery and maintained by Google. It’s an MVC (Model View Vontroller). You can <a href="https://angular.io/" rel="noopener">visit the official page</a> to learn more about it.</p>
<p>Right now, the latest version of Angular is <strong>5.2.10. </strong>There is <a href="https://angularjs.org/" rel="noopener">first generation 1.</a>x and <a href="https://angular.io/" rel="noopener">second generation 2.x</a>, and the two generations are totally different in their structures and methods. Don’t worry if you feel confused about the version, because in this article we will be using the second generation 2.x</p>
<h4 id="table-of-contents"><strong>Table of contents</strong></h4>
<ul>
<li>Adding an item (learn how to submit a form in Angular )</li>
<li>Removing an item (learn how to add an event in Angular)</li>
<li>Angular animation (learn how animate the components )</li>
</ul>
<h3 id="prerequisites-">Prerequisites:</h3>
<ul>
<li><strong>Node.js</strong></li>
</ul>
<p>Check if node.js is installed in your computer. <a href="https://nodejs.org/en/download/package-manager/" rel="noopener">Learn more about installation</a>.</p>
<ul>
<li><strong>npm</strong></li>
</ul>
<p><strong>npm</strong> (node package manager) is installed with Node.js</p>
<p>Check the <strong>node.js</strong> version:</p><pre><code>node -v</code></pre>
<p><strong>npm:</strong></p><pre><code>npm -v</code></pre>
<p><strong>Angular-CLI</strong></p>
<p>You should have the latest version of Angular-CLI. Learn more about Angular CLI <a href="https://angular.io/guide/quickstart" rel="noopener"><strong>here</strong></a><strong>, </strong>and find the instructions for installation.</p>
<p>Install Angular-cli:</p><pre><code>npm install -g @angular/cli</code></pre>
<p>And finally, you should have:</p>
<ul>
<li>Basic knowledge of JavaScript</li>
<li>HTML and CSS fundamentals</li>
</ul>
<p>You don’t need to have any knowledge of Angular.</p>
<p>Now that we have the environment to run our Angular app, let’s get started!</p>
<h3 id="creating-our-first-app">Creating our first app</h3>
<p>We will use angular-cli to create and generate our components. It will generate services, router, components, and directives.</p>
<p>To create a new Angular project with Angular-cli, just run:</p><pre><code>ng new my-app</code></pre>
<p>The project will be generated automatically. Let’s create our to-do app!</p><pre><code>ng new todo-app</code></pre>
<p>Then, open the files in your text editor. I use Sublime text, but you can choose any editor.</p>
<p>Here’s what the app structure looks like:</p>
<p>Don’t worry if you are confused about the files. All of our work will be in the <strong>app </strong>folder. It contains five files:</p>
<blockquote>Note: Angular 2 uses<a href="https://www.typescriptlang.org/" rel="noopener"> <strong>TypeScript</strong></a>, in which files end with “<strong>.ts”</strong>extension.</blockquote>
<p>To make a nice interface for our app, we will use the <a href="http://getbootstrap.com/" rel="noopener">Bootstrap 4</a> Framework.</p>
<p>Include bootstrap<strong> cdn</strong> in <strong>index.html</strong>:</p><pre><code>&lt;link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"&gt;</code></pre>
<p>Run the app in your terminal:</p><pre><code>ng serve</code></pre>
<p>The app will run in <a href="http://localhost:4200/" rel="noopener">http://localhost:4200/</a></p>
<p>All is well ?!</p>
<p>Now let’s do some HTML structuring. We will use Bootstrap classes to create a simple form.</p>
<p><strong>app.component.html</strong>:</p><pre><code>&lt;div class="container"&gt; &lt;form&gt;  &lt;div class="form-group"&gt;  &lt;h1 class="text-center text-primary"&gt;Todo App&lt;/h1&gt;   &lt;div class="input-group-prepend"&gt;       &lt;input type="text" class="form-control" placeholder="Add Todo" name="todo"&gt;    &lt;span class="input-group-text"&gt;Add&lt;/span&gt;   &lt;/div&gt;  &lt;/div&gt; &lt;/form&gt;&lt;/div&gt;</code></pre>
<p>In <strong>app.component.css</strong>:</p><pre><code>body{ padding: 0; margin: 0;</code></pre><pre><code>}form{ max-width: 25em; margin: 1em auto;}</code></pre>
<p>To capture the input value in Angular 2, we can use the <strong>ngModel</strong> directive. You can insert a variable as an attribute inside the input element.</p>
<p>To create a variable as an attribute, use <strong>#</strong> followed by the variable’s name.</p><pre><code>&lt;input #myVariable type="text" name="text" ngModel&gt;</code></pre><pre><code>// get the value of the Variable&lt;p&gt;{{myVariable.value}}&lt;/p&gt;</code></pre>
<p>Now get the “todo” variable value:</p><pre><code>&lt;p&gt;{{todo.value}}&lt;/p&gt;</code></pre>
<p>All is well ?!</p>
<p>Now we have to store the value captured from the input. We can create an empty array in <strong>app.component.ts </strong>inside the AppComponent class:</p><pre><code>export class AppComponent {  todoArray=[] }</code></pre>
<p>Then we have to add a click event to our button that pushes the value captured into “<strong>todoArray</strong>”.</p>
<p><strong>app.component.html</strong>:</p><pre><code>&lt;span class="input-group-text" (click)="addTodo(todo.value)"&gt;Add&lt;/span&gt;</code></pre>
<p>In <strong>app.component.ts</strong>:</p><pre><code>export class AppComponent { todoArray=[]</code></pre><pre><code>addTodo(value){    this.todoArray.push(value)    console.log(this.todos)  } }</code></pre>
<blockquote>Use console.log(this.todoArray) to see Array value</blockquote>
<h4 id="fetch-data-from-todoarray-">Fetch data from “todoArray”</h4>
<p>Now we have to fetch data stored in “todosArray.” We will use the *<a href="https://angular.io/guide/structural-directives" rel="noopener"><strong>ngFor directive </strong></a>to loop through the array and extract the data.</p>
<p>app.component.html:</p><pre><code>&lt;div class="data"&gt;  &lt;ul class="list-instyled"&gt;   &lt;li *ngFor="let todo of todoArray"&gt;{{todo}}&lt;/li&gt;  &lt;/ul&gt;  &lt;/div&gt;</code></pre>
<p>After fetching data:</p>
<p>The data will now be fetched automatically when we click the add button.</p>
<h4 id="styling-the-app">Styling the app</h4>
<p>I like to use <a href="https://fonts.google.com" rel="noopener">Google-fonts</a> and <a href="https://material.io/icons/" rel="noopener">Material-icons</a>, which are free to use.</p>
<p>Include Google fonts inside <strong>app.component.css</strong>:</p><pre><code>/*Google fonts*/@import url('https://fonts.googleapis.com/css?family=Raleway');</code></pre>
<p>And Material-icons inside <strong>index.html</strong>:</p><pre><code>&lt;link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"&gt;</code></pre>
<p>After adding some styling to our app, it will look like this:</p>
<p>To use Material icons:</p><pre><code>&lt;i class="material-icons&gt;iconName&lt;/i&gt;</code></pre>
<p>Add “delete” and “add” icons in <strong>app.component.html</strong>:</p><pre><code>// put add icon inside "input-group-text" div</code></pre><pre><code>&lt;span class="input-group-text" (click)="addTodo(todo.value)"&gt;&lt;i class="material-icons"&gt;add&lt;/i&gt;&lt;/span&gt;</code></pre><pre><code>// and delete icon inside list item &lt;li *ngFor="let todo of todoArray"&gt;{{todo}}&lt;i class="material-icons"&gt;delete&lt;/i&gt;&lt;/li&gt;</code></pre>
<p>For styles in <strong>app.component.css</strong>:</p><pre><code>/*Google fonts*/@import url('https://fonts.googleapis.com/css?family=Raleway');</code></pre><pre><code>body{ padding: 0; margin: 0;</code></pre><pre><code>}form{ max-width: 30em; margin: 4em auto; position: relative; background: #f4f4f4; padding: 2em 3em;}form h1{    font-family: "Raleway";    color:#F97300; }form input[type=text]::placeholder{   font-family: "Raleway";   color:#666; }form .data{    margin-top: 1em;}form .data li{ background: #fff; border-left: 4px solid #F97300; padding: 1em; margin: 1em auto; color: #666; font-family: "Raleway";}form .data li i{    float: right;    color: #888;    cursor: pointer;}form .input-group-text{    background: #F97300;    border-radius: 50%;    width: 5em;    height: 5em;    padding: 1em 23px;    color: #fff;    position: absolute;    right: 13px;    top: 68px;    cursor: pointer;}form .input-group-text i{    font-size: 2em;}form .form-control{ height: 3em;    font-family: "Raleway";}form .form-control:focus{ box-shadow: 0;}</code></pre>
<p>Our app is almost done, but we need to add some features. A delete functionality should let users click a delete icon and delete an item. It would also be great to have the option to enter a new item with the return key, instead of clicking the add button.</p>
<p><strong>Deleting items</strong></p>
<p>To add the delete functionality, we will use the “splice” array method and a for loop. We will loop through “todoarray” and extract the item we want to delete.</p>
<p>Add a (click) event to delete icon and give it “todo” as parameter :</p><pre><code>&lt;li *ngFor="let todo of todoArray"&gt;{{todo}} &lt;i (click)="deleteItem(todo)" class="material-icons"&gt;delete&lt;/i&gt;&lt;/li&gt;</code></pre>
<p>In <strong>app.component.ts</strong>:</p><pre><code>/*delete item*/  deleteItem(){   console.log("delete item")  }</code></pre>
<p>When you click delete, this should show up in the console:</p>
<p>Now we have to loop through “todoArray” and splice the item we clicked.</p>
<p>In <strong>app.component.ts</strong>:</p><pre><code>/*delete item*/  deleteItem(todo){   for(let i=0 ;i&lt;= this.todoArray.length ;i++){    if(todo== this.todoArray[i]){     this.todoArray.splice(i,1)    }   }  }</code></pre>
<p>The result:</p>
<p>Awesome ?!!</p>
<h4 id="entering-to-add-items"><strong>Entering to add items</strong></h4>
<p>We can add a submit event to the form:</p><pre><code>(ngSubmit)="TodoSubmit()"</code></pre>
<p>We need to add the variable “#todoForm” to the form and give it “ngForm” as a value. In this case, we just have one field so we will just get a single value. If we have multiple fields, the submit event will return the values of all the fields in the form.</p>
<p><strong>app.component.html</strong></p><pre><code>&lt;form #todoForm= "ngForm" (ngSubmit)="todoSubmit(todoForm.value)"&gt;&lt;/form&gt;</code></pre>
<p>in<strong> app.component.ts</strong></p><pre><code>// submit Form  todoSubmit(value:any){ console.log(value)  }</code></pre>
<p>Check the console. It will return an object of values:</p>
<p>So now we have to push the returned value to “todoArray”:</p><pre><code>// submit Form  todoSubmit(value:any){     if(value!==""){    this.todoArray.push(value.todo)     //this.todoForm.reset()    }else{      alert('Field required **')    }      }</code></pre>
<p>Here we are ?. The value is inserted without needing to click the add button, just by clicking “enter”:</p>
<p>One more thing. To reset the the form after submitting, add the “resetForm()” build-in method to submit the event.</p><pre><code>&lt;form #todoForm= "ngForm" (ngSubmit)="todoSubmit(todoForm.value); todoForm.resetForm()" &gt;&lt;/form&gt;</code></pre>
<p>The form will reset after each submit now:</p>
<h4 id="adding-animations">Adding animations</h4>
<p>I like to add a little touch of animations. To add animation, import the animations components in your <strong>app.component.ts</strong>:</p><pre><code>import { Component,trigger,animate,style,transition,keyframes } from '@angular/core';</code></pre>
<p>Then add the animations property to “@component” decorator:</p><pre><code>@Component({  selector: 'app-root',  templateUrl: './app.component.html',  styleUrls: ['./app.component.css'],  animations:[   trigger("moveInLeft",[      transition("void=&gt; *",[style({transform:"translateX(300px)"}),        animate(200,keyframes([         style({transform:"translateX(300px)"}),         style({transform:"translateX(0)"})           ]))]),</code></pre><pre><code>transition("*=&gt;void",[style({transform:"translateX(0px)"}),        animate(100,keyframes([         style({transform:"translateX(0px)"}),         style({transform:"translateX(300px)"})           ]))])             ])</code></pre><pre><code>]})</code></pre>
<p>Now the items have a nice effect when they’re entered and deleted.</p>
<h3 id="all-the-code">All the code</h3>
<p><strong>app.component.ts</strong></p><pre><code>import { Component,trigger,animate,style,transition,keyframes } from '@angular/core';</code></pre><pre><code>@Component({  selector: 'app-root',  templateUrl: './app.component.html',  styleUrls: ['./app.component.css'],  animations:[   trigger("moveInLeft",[      transition("void=&gt; *",[style({transform:"translateX(300px)"}),        animate(200,keyframes([         style({transform:"translateX(300px)"}),         style({transform:"translateX(0)"})           ]))]),</code></pre><pre><code>transition("*=&gt;void",[style({transform:"translateX(0px)"}),        animate(100,keyframes([         style({transform:"translateX(0px)"}),         style({transform:"translateX(300px)"})           ]))])             ])</code></pre><pre><code>]})export class AppComponent {  todoArray=[];  todo;  //todoForm: new FormGroup()</code></pre><pre><code>addTodo(value){    if(value!==""){     this.todoArray.push(value)    //console.log(this.todos)   }else{    alert('Field required **')  }      }</code></pre><pre><code>/*delete item*/  deleteItem(todo){   for(let i=0 ;i&lt;= this.todoArray.length ;i++){    if(todo== this.todoArray[i]){     this.todoArray.splice(i,1)    }   }  }</code></pre><pre><code>// submit Form  todoSubmit(value:any){     if(value!==""){    this.todoArray.push(value.todo)     //this.todoForm.reset()    }else{      alert('Field required **')    }      } }</code></pre>
<p><strong>app.component.html</strong></p><pre><code>&lt;div class="container"&gt; &lt;form #todoForm= "ngForm"(submit)="todoSubmit(todoForm.value); todoForm.resetForm()" &gt;  &lt;div class="form-group"&gt;  &lt;h1 class="text-center "&gt;Todo App&lt;/h1&gt;   &lt;div class="input-group-prepend"&gt;       &lt;input type="text" #todo  class="form-control" placeholder="Add Todo" name="todo" ngModel&gt;    &lt;span class="input-group-text" (click)="addTodo(todo.value)"&gt;    &lt;i class="material-icons"&gt;add&lt;/i&gt;&lt;/span&gt;   &lt;/div&gt;  &lt;/div&gt;  &lt;div class="data"&gt;  &lt;ul class="list-unstyled"&gt;   &lt;li [@moveInLeft]  *ngFor="let todo of todoArray"&gt;{{todo}} &lt;i (click)="deleteItem(todo)" class="material-icons"&gt;delete&lt;/i&gt;&lt;/li&gt;  &lt;/ul&gt; &lt;/div&gt; &lt;/form&gt;&lt;/div&gt;</code></pre>
<p><strong>app.component.css</strong></p><pre><code>/*Google fonts*/@import url('https://fonts.googleapis.com/css?family=Raleway');</code></pre><pre><code>body{ padding: 0; margin: 0;</code></pre><pre><code>}form{ max-width: 30em; margin: 4em auto; position: relative;    background: #f4f4f4;    padding: 2em 3em;    overflow: hidden;}form h1{    font-family: "Raleway";    color:#F97300; }form input[type=text]::placeholder{   font-family: "Raleway";   color:#666; }form .data{    margin-top: 1em;}form .data li{ background: #fff; border-left: 4px solid #F97300; padding: 1em; margin: 1em auto; color: #666; font-family: "Raleway";}form .data li i{    float: right;    color: #888;    cursor: pointer;}form .input-group-text{    background: #F97300;    border-radius: 50%;    width: 5em;    height: 5em;    padding: 1em 23px;    color: #fff;    position: absolute;    right: 13px;    top: 68px;    cursor: pointer;}form .input-group-text i{    font-size: 2em;}form .form-control{ height: 3em;    font-family: "Raleway";}form .form-control:focus{ box-shadow: 0;}</code></pre>
<p>We are done ?. You can find the files and code on <a href="https://github.com/hayanisaid/Todo-app-in-Angular" rel="noopener">Github.</a></p>
<h4 id="see-the-demo"><a href="https://stackblitz.com/edit/todo-app-in-angular?file=index.html" rel="noopener">See the Demo</a></h4>
<h3 id="conclusion">Conclusion</h3>
<p>Angular is easier than you think. Angular is one of the best JavaScript libraries, and it has great support and a nice community. It also has tools that make working with Angular fast and easy, like Angular-cli.</p>
<p>Subscribe to this<a href="http://eepurl.com/dk9OJL" rel="noopener"> mail-list</a> to learn more about Angular.</p>
<p><a href="https://twitter.com/hayanisaid1995" rel="noopener"><strong>SaidHayani@ (@hayanisaid1995) | Twitter</strong></a><br><a href="https://twitter.com/hayanisaid1995" rel="noopener"><em>The latest Tweets from SaidHayani@ (@hayanisaid1995). #Web_Developer /#Frontend / #Back_end(#PHP &amp;…</em>twitter.com</a></p>
<p>Here are some of the best online courses to learn Angular for free:</p>
<p><strong>Angular 1.x</strong></p>
<ul>
<li>S<a href="https://www.codeschool.com/courses/shaping-up-with-angularjs" rel="noopener">haping with Angular</a></li>
<li><a href="http://www.learn-angular.org/" rel="noopener">Learn Angular</a></li>
</ul>
<p><strong>Angular 2.x </strong><em>(recommended)</em></p>
<ul>
<li><a href="https://coursetro.com/courses/8/Learn-Angular-2-Development-with-our-Free-Course" rel="noopener">learn Angular2 (coursetro</a>)</li>
<li><a href="https://www.youtube.com/playlist?list=PLC3y8-rFHvwg5gEu2KF4sbGvpUqMRSBSW" rel="noopener">YouTube playlist</a></li>
</ul>
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
