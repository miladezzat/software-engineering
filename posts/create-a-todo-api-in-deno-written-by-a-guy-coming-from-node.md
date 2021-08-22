---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c9ab6740569d1a4ca273d.jpg"
tags: [deno]
description: I am a JavaScript/Node developer who secretly likes (actually
author: "Milad E. Fahmy"
title: "How to Create a Todo API in Deno and Oak"
created: "2021-08-15T19:29:38+02:00"
modified: "2021-08-15T19:29:38+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-deno tag-javascript tag-typescript tag-rest-api tag-middleware tag-2020 tag-code ">
<header class="post-full-header">
<h1 class="post-full-title">How to Create a Todo API in Deno and Oak</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c9ab6740569d1a4ca273d.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9ab6740569d1a4ca273d.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9ab6740569d1a4ca273d.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9ab6740569d1a4ca273d.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c9ab6740569d1a4ca273d.jpg" alt="How to Create a Todo API in Deno and Oak">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>I am a JavaScript/Node developer who secretly likes (actually, loves and adores) Deno. I have been a huge fan of Deno ever since it was announced and I've been wanting to play with it. </p>
<p>This tutorial focuses on creating a set of REST APIs for a Todo application. Keep in mind that I did not touch on the database here – I will cover that <a href="/news/how-to-use-mysql-in-deno-oak/">in another article</a>.</p>
<p>At any point if you feel lost or want to check a reference, here is the entire source code of this tutorial: <strong><a href="https://github.com/adeelibr/deno-playground/tree/master/chapter_1:oak">Chapter 1: Oak</a>.</strong></p>
<figcaption>Photo by <a href="https://unsplash.com/@bernardtheclerk?utm_source=ghost&amp;utm_medium=referral&amp;utm_campaign=api-credit">Bernard de Clerk</a> / <a href="https://unsplash.com/?utm_source=ghost&amp;utm_medium=referral&amp;utm_campaign=api-credit">Unsplash</a></figcaption>
</figure>
<h3 id="things-we-will-cover">Things we will cover</h3>
<ul>
<li>Create a basic server</li>
<li>Create 5 APIs (routes/controller)</li>
<li> Create a middleware to log API requests as they are made in the console</li>
<li>Create a not found (404) middleware when the user tries to access an unknown API</li>
</ul>
<h3 id="what-will-we-need">What will we need</h3>
<ul>
<li>An installed version of Deno (don't worry I'll walk you through it)</li>
<li>A tiny bit of knowledge of Typescript</li>
<li>Would be awesome if you have worked with Node/Express before (don't worry if you haven't — this tutorial is very basic)</li>
</ul>
<h2 id="let-s-get-started">Let's get started</h2>
<p>First things first let's install Deno. I am on a Mac computer so I am using brew. Simply open your terminal and type:</p><pre><code>$ brew install deno</code></pre>
<p>But if you are using a different operating system, just head over to <a href="https://deno.land/#installation"><strong>deno.land installation</strong></a><strong>. </strong>They have a lot of ways you can easily install it on your machine.</p>
<p>Once you have it installed, close the terminal, open a new one, and type:</p><pre><code>$ deno --version</code></pre>
<p>It should output something like this:</p>
<figcaption>running command "deno --version" to see which version of deno is installed</figcaption>
</figure>
<p>Awesome! With this we are almost done with 10% of this tutorial. </p>
<p>Let's move ahead and create the backend API for our Todo app.</p>
<h3 id="setting-up-the-project">Setting up the project</h3>
<p>Before you move on, here is the entire source code of this tutorial: <strong><a href="https://github.com/adeelibr/deno-playground/tree/master/chapter_1:oak">Chapter 1: Oak</a>.</strong></p>
<p>Let's get started:</p>
<ul>
<li>Create a new folder and call it <strong>chapter_1:oak</strong> (but you can call it anything you want)</li>
<li>Once you create a folder simply <code>cd</code> into your new project. Create a file called <strong>server.ts<em> </em></strong>and write the following code in it:</li>
</ul><pre><code class="language-server.ts">import { Application } from "https://deno.land/x/oak/mod.ts";
const app = new Application();
const port: number = 8080;
console.log('running on port ', port);
await app.listen({ port });</code></pre>
<p>Let's run this file. Open your terminal and in your project root folder type:</p><pre><code>$ deno run --allow-net server.ts</code></pre>
<p>I will talk about what the <code>--allow-net</code> flag does, but for now just bear with me ?.</p>
<p>You should get something like this:</p>
<p>What we have done so far is create a server which listens on port 8080. It doesn't do much right now besides being able to run on port 8080.</p>
<p>If you have used JavaScript before, one thing you might have noticed is we are importing packages in a different way. We have to do something like:</p><pre><code>import { Application } from "https://deno.land/x/oak/mod.ts";
</code></pre>
<p>When you run <code>deno run ---allow-net &lt;file_name&gt;</code> in your terminal, Deno will look at all your imports and install them locally in your machine if they are not there. </p>
<p>The first time you run this it will go to this URL <code>https://deno.land/x/oak/mod.ts</code> and install the <code>oak</code> package. Oak is basically a Deno framework for writing API's. It will put it somewhere locally in your cache.</p>
<p>In the next line we do this:</p><pre><code>const app = new Application();
</code></pre>
<p>This creates a new instance of our application, and it will be the basis of everything as you progress further in this tutorial. You can add routes to the application instance, attach middleware like API logging, write a 404 not found, and so on.</p>
<p>Then we write:</p><pre><code>const port: number = 8080;
// const port = 8080; // =&gt; can also be written like this</code></pre>
<p>Both are the same and do the same thing. The only difference is writing <code>const port: number = 8080</code> tells Typescript that <code>port</code> variable is of type number.</p>
<p>If you were to write <code>const port: number = "8080"</code>, this would throw an error in your terminal, as port is of type <code>number</code>. But we are trying to assign it a <code>string</code> of value "8080". </p>
<p>If you want to learn more about different types of types (pun intended) check out this very easy and basic guide on <a href="https://www.typescriptlang.org/docs/handbook/basic-types.html"><strong>Basic types by Typescript</strong></a>. Just give it a quick glance for 2-3 minutes and head back here.</p>
<p>And in the end we have:</p><pre><code>console.log('running on port ', port);
await app.listen({ port });</code></pre>
<p>We simply console here the port number and tell Deno to listen to the port, which is 8080.</p>
<p>It isn't doing much right now. Let's make it do something basic like show a <em>JSON</em> message in your browser when you go to http:localhost:8080<em>.</em></p>
<p>Add the following to your <strong>server.ts </strong>file:</p><pre><code class="language-server.ts">import { Application, Router } from "https://deno.land/x/oak/mod.ts";
const app = new Application();
const port: number = 8080;
const router = new Router();
router.get("/", ({ response }: { response: any }) =&gt; {
response.body = {
message: "hello world",
};
});
app.use(router.routes());
app.use(router.allowedMethods());
console.log('running on port ', port);
await app.listen({ port });</code></pre>
<p>The new thing added here is that we are now also importing <code>Router</code> along with <code>Application</code> from <code>oak</code> in line 1.</p>
<p>Next what we do is:</p><pre><code>const router = new Router();
router.get("/", ({ response }: { response: any }) =&gt; {
response.body = {
message: "hello world",
};
});
app.use(router.routes());
app.use(router.allowedMethods());</code></pre>
<p>We create a new router instance by doing <code>const router = new Router()</code> and then we create a new route called <code>/</code> which is of type <code>get</code>.</p>
<p>Let's break this down:</p><pre><code>router.get("/", ({ response }: { response: any }) =&gt; {
response.body = {
message: "hello world",
};
});</code></pre>
<p><code>router.get</code> takes 2 parameters. The first is route which we have set to <code>/</code> and the second is function. The function itself takes an argument which is an object. What I am doing here is <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment">destructuring</a> the object and getting only <code>response</code>.</p>
<p>Next I am type checking <code>response</code> similar to how I did <code>const port: number = 8080;</code>. All I am doing is <code>{ response }: { response: any }</code> which is telling TypeScript here that the <code>response</code> which I have destructed can be of type <code>any</code>.</p>
<p><code>any</code> helps you avoid type checking in TypeScript. You can read more about it <a href="https://www.typescriptlang.org/docs/handbook/basic-types.html#any">here</a>.</p>
<p>Then all I am doing is taking that <code>response</code> object and setting <code>response.body.message = "hello world";</code>.</p><pre><code>response.body = {
message: "hello world",
};</code></pre>
<p>Last but not least, we just add these two lines:</p><pre><code>app.use(router.routes());
app.use(router.allowedMethods());</code></pre>
<p>This tells Deno to include all routes by our router (currently we only have one) and the next line tells Deno to allow all methods for this route(s) like <code>GET, POST, PUT, DELETE</code>.</p>
<p>And now we are done. ✅ Let's run this and see what we have:</p><pre><code>$ deno run --allow-net server.ts</code></pre>
<p>The <code>---allow-net</code> property tells Deno that this app gives the user the permission to access its content via the port opened up.</p>
<p>Now open your favorite browser and go to <code>http://localhost:8080</code>. You will see something like this:</p>
<figcaption>Result of running localhost:8080 on your browser</figcaption>
</figure>
<p>Honestly the hardest part is done. Conceptually we are 60% there.</p>
<figcaption>Master Yoda approves</figcaption>
</figure>
<p>Awesome.</p>
<p>Just one last thing before we start with our Todo API. Let's replace:</p><pre><code>console.log('running on port ', port);
await app.listen({ port });</code></pre>
<p>with:</p><pre><code class="language-server.ts">app.addEventListener("listen", ({ secure, hostname, port }) =&gt; {
const protocol = secure ? "https://" : "http://";
const url = `${protocol}${hostname ?? "localhost"}:${port}`;
console.log(`Listening on: ${port}`);
});
await app.listen({ port });</code></pre>
<p>The code we had before was not very accurate, because we were simply console logging a message and then waiting for the app to start listening on a port.</p>
<p>With the later version we wait for the app to start listening on <code>port</code> and we can listen by adding an event listener to our <code>app</code> instance with the following: <code>app<em>.addEventListener</em>("listen", ({ secure, hostname, port }) =&gt; {}</code>. </p>
<p>The first param is the event we want to listen for (which is <code>listen</code> ?) and then the second param is an object which we destruct to <code>{ secure, hostname, port }</code>. Secure is a boolean, hostname is a string, and port is a number.</p>
<p>Now when we start our app, it will only console the message once the app actually starts listening on port.</p>
<p>We can just go one step ahead and make it more colorful. Let's add a new module to the top of the file in <code>server.ts</code>:</p><pre><code>import { green, yellow } from "https://deno.land/std@0.53.0/fmt/colors.ts";
</code></pre>
<p>And then inside our event listener method we can replace:</p><pre><code>console.log(`Listening on: ${port}`);
</code></pre>
<p>with:</p><pre><code>console.log(`${yellow("Listening on:")} ${green(url)}`);</code></pre>
<p>Now when we do:</p><pre><code>$ deno run --allow-net server.ts</code></pre>
<p>it will show this in our console:</p>
<figcaption>Cool, now we have a colourful console.</figcaption>
</figure>
<p>If you get stuck anywhere you can simply go to the source code of this tutorial <a href="https://github.com/adeelibr/deno-playground/tree/master/chapter_1:oak"><strong>here</strong></a>.</p>
<p>Let's create our Todo API's routes next.</p>
<ul>
<li>Create a new folder in your root folder called <code>routes</code> and inside that folder create a file called <code>todo.ts</code></li>
<li>At the same time in your root folder create a new folder called <code>controllers</code> and inside that folder create a file called <code>todo.ts</code></li>
</ul>
<p>Let's first touch the <code>controllers/todo.ts</code> file:</p><pre><code class="language-controllers/todo.ts">export default {
getAllTodos: () =&gt; {},
createTodo: async () =&gt; {},
getTodoById: () =&gt; {},
updateTodoById: async () =&gt; {},
deleteTodoById: () =&gt; {},
};</code></pre>
<p>We are simply exporting an object here with some named functions which are empty (for now).</p>
<p>Next go inside your file <code>routes/todo.ts</code> and type this:</p><pre><code class="language-routes/todo.ts">import { Router } from "https://deno.land/x/oak/mod.ts";
const router = new Router();
// controller
import todoController from "../controllers/todo.ts";
router
.get("/todos", todoController.getAllTodos)
.post("/todos", todoController.createTodo)
.get("/todos/:id", todoController.getTodoById)
.put("/todos/:id", todoController.updateTodoById)
.delete("/todos/:id", todoController.deleteTodoById);
export default router;</code></pre>
<p>This might look familiar to people who have worked with Node and Express. </p>
<p>All we are doing here is importing <code>Route</code> from <code>oak</code> and then setting up a new instance of Router by doing <code>const router = new Router();</code>.</p>
<p>Next we import our controllers by doing:</p><pre><code>import todoController from "../controllers/todo.ts";
</code></pre>
<p>One thing to notice here in Deno is every time we import a local file in our Deno project we have to provide the file extension. This is because Deno doesn't know whether the file being imported is a <code>.js</code> or <code>.ts</code> file.</p>
<p>Moving forward we simply set all of our routes according to REST conventions:</p><pre><code class="language-routes/todo.ts">router
.get("/todos", todoController.getAllTodos)
.post("/todos", todoController.createTodo)
.get("/todos/:id", todoController.getTodoById)
.put("/todos/:id", todoController.updateTodoById)
.delete("/todos/:id", todoController.deleteTodoById);</code></pre>
<p>The code above will translate to our API definition like this:</p>
<table>
<thead>
<tr>
<th>TYPE</th>
<th>API ROUTE</th>
<th></th>
<th></th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<td>GET</td>
<td>/todos</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>GET</td>
<td>/todos/:id</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>POST</td>
<td>/todos</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>PUT</td>
<td>/todos/:id</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>DELETE</td>
<td>/todos/:id</td>
<td></td>
<td></td>
<td></td>
</tr>
</tbody>
</table>
<p>and at the end we simply export our router by doing <code><em>export</em> <em>default</em> router;</code>.</p>
<p>We are done with creating our routes structure. (Now, each route doesn't do anything because our controllers are empty, we will add functionality to them in a bit.)</p>
<p>Here's the last piece of the puzzle before we start adding functionality to each route controller. We need to attach this <code>router</code> to our <code>app</code> instance.</p>
<p>So head over to <code>server.ts</code> file and do the following:</p>
<ul>
<li>Add this to the very top:</li>
</ul><pre><code>// routes
import todoRouter from "./routes/todo.ts";</code></pre>
<ul>
<li>Remove this piece of code:</li>
</ul><pre><code>const router = new Router();
router.get("/", ({ response }: { response: any }) =&gt; {
response.body = {
message: "hello world",
};
});
app.use(router.routes());
app.use(router.allowedMethods());</code></pre>
<ul>
<li>Replace it with:</li>
</ul><pre><code>app.use(todoRouter.routes());
app.use(todoRouter.allowedMethods());</code></pre>
<p>This is it – we are done. Your <code>server.ts</code> file should look like this now:</p><pre><code class="language-server.ts">import { Application } from "https://deno.land/x/oak/mod.ts";
import { green, yellow } from "https://deno.land/std@0.53.0/fmt/colors.ts";
// routes
import todoRouter from "./routes/todo.ts";
const app = new Application();
const port: number = 8080;
app.use(todoRouter.routes());
app.use(todoRouter.allowedMethods());
app.addEventListener("listen", ({ secure, hostname, port }) =&gt; {
const protocol = secure ? "https://" : "http://";
const url = `${protocol}${hostname ?? "localhost"}:${port}`;
console.log(
`${yellow("Listening on:")} ${green(url)}`,
);
});
await app.listen({ port });
</code></pre>
<p>If you got stuck anywhere while following this, simple head over to the source code of this tutorial <strong><a href="https://github.com/adeelibr/deno-playground/tree/master/chapter_1:oak">here</a>.</strong></p>
<p>Awesome, now we have our routes with no functionality at the moment. So let's add that functionality in our controllers.</p>
<p>But before we do that we have to create 2 more (tiny) files.</p>
<ul>
<li>In your root folder create a new folder called <code>interfaces</code> and inside that folder create a file called <code>Todo.ts</code> (make sure Todo is capitalized, as it won't give any syntax error here if you don't – these are just conventions.)</li>
<li>Also in your root folder create a new folder called <code>stubs</code> and inside that folder create a file called <code>todos.ts</code></li>
</ul>
<p>Let's create an interface in our <code>interfaces/Todo.ts</code> file. Simply add the following code:</p><pre><code class="language-interfaces/Todo.ts">export default interface Todo {
id: string,
todo: string,
isCompleted: boolean,
}</code></pre>
<p>What is an interface?</p>
<p>One of the core things in TypeScript is checking the shape that value has. Similar to <code>const port: number = 8080</code> or <code>{ response }: { response : any }</code>, we can also type check an object. </p>
<p>In TypeScript, interfaces fill the role of naming these types, and are a powerful way of <strong>defining contracts within</strong> your code as well as <strong>contracts with code outside</strong> of your project. </p>
<p>Here is an another example of an interface:</p><pre><code class="language-ts">// We have an interface
interface LabeledValue {
label: string;
}
// the arg passed to this function labeledObj is
// of type LabeledValue (interface)
function printLabel(labeledObj: LabeledValue) {
console.log(labeledObj.label);
}
let myObj = {label: "Size 10 Object"};
printLabel(myObj);</code></pre>
<p>Hopefully this example gives you a bit more insight into interfaces. If you want more detailed information check out the docs on <a href="https://www.typescriptlang.org/docs/handbook/interfaces.html">interfaces here</a>.</p>
<p>Now that our interface is ready, let's mock some data (since we don't have an actual database for this tutorial).</p>
<p>Let's create a mock list of todos first in our <code>stubs/todos.ts</code> file. Simply add the following:</p><pre><code class="language-stubs/todos.ts">import { v4 } from "https://deno.land/std/uuid/mod.ts";
// interface
import Todo from '../interfaces/Todo.ts';
let todos: Todo[] = [
{
id: v4.generate(),
todo: 'walk dog',
isCompleted: true,
},
{
id: v4.generate(),
todo: 'eat food',
isCompleted: false,
},
];
export default todos;</code></pre>
<ul>
<li>Two things to notice here: we add a new package and use its method <code>v4</code> by doing <code><em>import</em> { v4 } <em>from</em> "https://deno.land/std/uuid/mod.ts";</code>. Then every time we use <code>v4.generate()</code> it will create a new random string of <code>id</code>.<br><br>The <code>id</code> can not be a <code>number</code>, only a <code>string</code> because in our <code>Todo</code> interface we have defined <code>id</code> as a string.</li>
<li>The other thing to focus on here is <code>let<em> todos</em>:<em> Todo</em>[]<em> </em>=<em> </em>[]</code>. This basically tells Deno that our todos array is of type <code>Todo</code> (which is awesome, our compiler now <em>automagically</em> knows that each item in our array can only have <code>{<strong>id</strong>: <em>string</em>, <strong>todo</strong>: <em>string</em> &amp; <strong>isCompleted</strong>: <em>boolean</em>}</code> it will not accept any other key).</li>
</ul>
<p>If you want to learn more about <code>interfaces</code> in TypeScript check out this amazing detailed documentation on interfaces <strong><a href="https://www.typescriptlang.org/docs/handbook/interfaces.html">here</a>.</strong></p>
<p>Awesome. If you have come this far, give yourself a pat on the back. Good job everyone.</p>
<figcaption>The Rock appreciates all the effort you are doing</figcaption>
</figure>
<h2 id="let-s-work-on-our-controllers">Let's work on our controllers</h2>
<p>In your file <code>controllers/todo.ts</code>:</p><pre><code class="language-controllers/todos.ts">export default {
getAllTodos: () =&gt; {},
createTodo: async () =&gt; {},
getTodoById: () =&gt; {},
updateTodoById: async () =&gt; {},
deleteTodoById: () =&gt; {},
};
</code></pre>
<p>Let's write the controller for <code>getAllTodos</code>:</p><pre><code class="language-controllers/todos.ts">// stubs
import todos from "../stubs/todos.ts";
export default {
/**
* @description Get all todos
* @route GET /todos
*/
getAllTodos: ({ response }: { response: any }) =&gt; {
response.status = 200;
response.body = {
success: true,
data: todos,
};
},
createTodo: async () =&gt; {},
getTodoById: () =&gt; {},
updateTodoById: async () =&gt; {},
deleteTodoById: () =&gt; {},
};
</code></pre>
<p>Before I begin on this block of code, let me explain that every controller has an argument – let's call it <code>context</code>.</p>
<p>So we can deconstruct <code><em>getAllTodos</em>: (context) =&gt; {}</code> to:</p><pre><code>getAllTodos: ({ request, response, params }) =&gt; {}</code></pre>
<p>And since we are using <code>typescript</code> we have to add type checking to all of these variables:</p><pre><code>getAllTodos: (
{ request, response, params }: {
request: any,
response: any,
params: { id: string },
},
) =&gt; {}</code></pre>
<p>So we have added type checks to all 3 <code>{ request, response, params }</code></p>
<ul>
<li><code>request</code> is what the user sends us (information like headers and JSON data)</li>
<li><code>response</code> is what we send the user back in the API response</li>
<li><code>params</code> is what we define in our router routes, that is:</li>
</ul><pre><code class="language-ts">.get("/todos/:id", ({ params}: { params: { id: string } }) =&gt; {})</code></pre>
<p>So the <code>:id</code> in <code>/todos/:id</code> is the param. Params are a way to get information from the URL. In this example we know that we have an <code>/:id</code> . So when the user tries to access this API (that is, <code>/todos/756</code>) <strong>756</strong> is basically the <strong>:id </strong>param. Since it is in the URL we know it is of type <code>string</code>.</p>
<p>Now that we have our basic definitions defined let's get back to our todos controller:</p><pre><code class="language-controllers/todos.ts">// stubs
import todos from "../stubs/todos.ts";
export default {
/**
* @description Get all todos
* @route GET /todos
*/
getAllTodos: ({ response }: { response: any }) =&gt; {
response.status = 200;
response.body = {
success: true,
data: todos,
};
},
createTodo: async () =&gt; {},
getTodoById: () =&gt; {},
updateTodoById: async () =&gt; {},
deleteTodoById: () =&gt; {},
};
</code></pre>
<p>For <code>getAllTodos</code> we only need <code>response</code> . If you remember, <code>response</code> is what is needed to send data back to the user.</p>
<p>For people coming from a Node and Express background, one big thing that is different here is that we don't need to <code>return</code> the response object. Deno does this for us automatically.</p>
<p>All we have to do is set <code>response.status</code> which in this case is <code>200</code>.</p>
<p>More on response statuses <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Status"><strong>here</strong></a><strong>.</strong></p>
<p>The other thing we set is the <code>response.body</code> which in this case is an object:</p><pre><code class="language-ts">{
success: true,
data: todos
}</code></pre>
<p>I will go ahead and run my server:</p><pre><code>$ deno run --allow-net server.ts</code></pre>
<blockquote><strong>Revision:</strong> The <code>---allow-net</code> property tells Deno that this app gives the user permission to access its content via the port opened up.</blockquote>
<p>Once your server is running, you can access the <code>GET /todos</code> API. I am using <code>postman</code> which is a Google Chrome extension and can be downloaded <a href="https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop//%40">here</a>.</p>
<p>You can use whatever rest client you like. I like using <code>postman</code> because I think it is very easy.</p>
<p>In Postman, open up a new tab. Set the request to type <code>GET</code> and in the <code>URL</code> bar type <code>http://localhost:8080/todos</code>. Hit <code>Send</code> and this is what you see:</p>
<figcaption>GET /todos API response</figcaption>
</figure>
<p>Cool! 1 API done, 4 more to go. ??</p>
<p>If you feel stuck anywhere just have sneak peak at the source code directly <a href="https://github.com/adeelibr/deno-playground/tree/master/chapter_1:oak"><strong>here</strong></a><strong>.</strong></p>
<p>Let's move on to our next controller:</p><pre><code class="language-controllers/todos.ts">import { v4 } from "https://deno.land/std/uuid/mod.ts";
// interfaces
import Todo from "../interfaces/Todo.ts";
// stubs
import todos from "../stubs/todos.ts";
export default {
getAllTodos: () =&gt; {},
/**
* @description Add a new todo
* @route POST /todos
*/
createTodo: async (
{ request, response }: { request: any; response: any },
) =&gt; {
const body = await request.body();
if (!request.hasBody) {
response.status = 400;
response.body = {
success: false,
message: "No data provided",
};
return;
}
// if everything is fine then perform
// operation and return todos with the
// new data added.
let newTodo: Todo = {
id: v4.generate(),
todo: body.value.todo,
isCompleted: false,
};
let data = [...todos, newTodo];
response.body = {
success: true,
data,
};
},
getTodoById: () =&gt; {},
updateTodoById: async () =&gt; {},
deleteTodoById: () =&gt; {},
};
</code></pre>
<p>Since we are going to be adding a new Todo to our list, I have imported 2 modules in the controller file.</p>
<ul>
<li><code>import { v4 } from `<a href="https://deno.land/std/uuid/mod.ts">https://deno.land/std/uuid/mod.ts</a>`;</code> this will be used to create a new unique one for the todo being created</li>
<li><code>import Todo from "../interfaces/Todo.ts";</code> this will be used to ensure that the new todo that is being created follows the same structure.</li>
</ul>
<p>Our <code>createTodo</code> controller is <code>async</code> meaning there are some promises used inside the controller. </p>
<p>Let's break it into smaller parts:</p><pre><code class="language-ts">const body = await request.body();
if (!request.hasBody) {
response.status = 400;
response.body = {
success: false,
message: "No data provided",
};
return;
}</code></pre>
<p>First we get the content of the JSON body that the user has sent us. Then we use <code>oak's</code> built-in method called <code>request.hasBody</code> to check if the user has even sent any content. If not then we can do <code>if (!request<em>.</em>hasBody) {}</code> inside this <code>if</code> block. </p>
<p>We set the status to <code>400</code> (400 means that the user did something they were not suppose to do) and the body is set to <code>{success: false, message: "no data provided }</code>. Then we simple add <code>return;</code> to ensure that no further code below is executed.</p>
<p>Next we do this:</p><pre><code>// if everything is fine then perform
// operation and return todos with the
// new data added.
let newTodo: Todo = {
id: v4.generate(),
todo: body.value.todo,
isCompleted: false,
};
let data = [...todos, newTodo];
response.body = {
success: true,
data,
};</code></pre>
<p>We create a new todo by doing this:</p><pre><code>let newTodo: Todo = {
id: v4.generate(),
todo: body.value.todo,
isCompleted: false,
};</code></pre>
<p><code>let newTodo: Todo = {}</code> ensures that <code>newTodo</code> follows the same structure as the rest of the todos. We then assign a random id by using <code>v4.generate()</code>, set todo to <code>body.value.todo</code> and <code>isCompleted</code> to &nbsp;<code>false</code>.</p>
<p>The thing to notice here is all the data the user sends us we can access from <code>body.value</code> in <code>oak</code>.</p>
<p>Next we do the following:</p><pre><code>let data = [...todos, newTodo];
response.body = {
success: true,
data,
};</code></pre>
<p>Append the <code>newTodo</code> to our current list of todos and simply set the body to <code>{success: true &amp; data: data</code>.</p>
<p>And we are done ✅ with this controller as well.</p>
<p>Let's restart our server:</p><pre><code>$ deno run --allow-net server.ts</code></pre>
<p>In my postman, I open up a new tab. Set the request to <code>POST</code> type and in the <code>URL</code> bar type <code>http://localhost:8080/todos</code>. Then hit <code>Send</code> and this is what you see:</p>
<figcaption>I send an empty request and get a 400 status error code along with an error message</figcaption>
</figure>
<p>Then I send some content in the body of the request payload and try again:</p>
<figcaption>Awesome, POST /todos with body content { todo: "eat a lamma" } is success &amp; we can see content appended to our current todo list&nbsp;</figcaption>
</figure>
<p>Cool, we can see that our API is working as expected.</p>
<p>Two APIs down, three more to go. </p>
<p>We are almost there. Most of the hard work is done. ☺️ ? ? ?</p>
<p>Let's move on to our third API:</p><pre><code class="language-controllers/todos.ts">import { v4 } from "https://deno.land/std/uuid/mod.ts";
// interfaces
import Todo from "../interfaces/Todo.ts";
// stubs
import todos from "../stubs/todos.ts";
export default {
getAllTodos: () =&gt; {},
createTodo: async () =&gt; {},
/**
* @description Get todo by id
* @route GET todos/:id
*/
getTodoById: (
{ params, response }: { params: { id: string }; response: any },
) =&gt; {
const todo: Todo | undefined = todos.find((t) =&gt; {
return t.id === params.id;
});
if (!todo) {
response.status = 404;
response.body = {
success: false,
message: "No todo found",
};
return;
}
// If todo is found
response.status = 200;
response.body = {
success: true,
data: todo,
};
},
updateTodoById: async () =&gt; {},
deleteTodoById: () =&gt; {},
};
</code></pre>
<p>Let's talk about our controller for <code>GET todos/:id</code>. This will get us a todo by ID.</p>
<p>Let's break this down into smaller parts and discuss it:</p><pre><code>const todo: Todo | undefined = todos.find((t) =&gt; t.id === params.id);
if (!todo) {
response.status = 404;
response.body = {
success: false,
message: "No todo found",
};
return;
}</code></pre>
<p>In the first part we set a new <code>const todo</code> and set its type to either <code>Todo</code> or <code>undefined</code>. So <code>todo</code> will either be an object with the <code>Todo</code> interface shape or it will be <code>undefined</code> – it can not be anything else.</p>
<p>We then <code><em>todos.find</em>((<em>t</em>)<em> </em>=&gt;<em> t.id </em>===<em> params.id</em>);</code> use <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find">Array.find()</a> to find the <code>todo</code> with the id provided in <code>params.id</code>. If it matches we get a <code>Todo</code> with shape <code>todo</code>, otherwise <code>undefined</code>.</p>
<p>If <code>todo</code> is undefined, it means that this <code>if</code> block will run:</p><pre><code>if (!todo) {
response.status = 404;
response.body = {
success: false,
message: "No todo found",
};
return;
}</code></pre>
<p>Here we simply set the status to <code>404</code> which means <code>not found</code> along with our standard failure response or <code>{ status, message }</code></p>
<p>Cool, right? ?</p>
<p>Next we simply do this:</p><pre><code>// If todo is found
response.status = 200;
response.body = {
success: true,
data: todo,
};</code></pre>
<p>Set a <code>200</code> success response and in our response body we set <code>success: true &amp; data: todo</code>.</p>
<p>Let's run this in our postman.</p>
<p>Let's restart our server:</p><pre><code>$ deno run --allow-net server.ts</code></pre>
<p>In my postman, I open up a new tab. Set the request to <code>GET</code> type and in the <code>URL</code> bar type <code>http://localhost:8080/todos/:id</code>, then hit <code>Send</code>.</p>
<p>Since we are generating ID's randomly, first get all todos by hitting theget all todos API. Then from any todo get one of its ID to test this newly created API.<br>Every time you restart this Deno application, new ID's will be generated.</p>
<p>Let's go:</p>
<figcaption>404 status, no record found case</figcaption>
</figure>
<figcaption>Provided it a known ID and it returned the todo associated with that ID along with status 200</figcaption>
</figure>
<p>If you need to reference the original source code of this tutorial go <a href="https://github.com/adeelibr/deno-playground/tree/master/chapter_1:oak"><strong>here</strong></a>.</p>
<p>Great, 3 APIs done, 2 more to go.</p><pre><code class="language-controllers/todos.ts">import { v4 } from "https://deno.land/std/uuid/mod.ts";
// interfaces
import Todo from "../interfaces/Todo.ts";
// stubs
import todos from "../stubs/todos.ts";
export default {
getAllTodos: () =&gt; {},
createTodo: async () =&gt; {},
getTodoById: () =&gt; {},
/**
* @description Update todo by id
* @route PUT todos/:id
*/
updateTodoById: async (
{ params, request, response }: {
params: { id: string },
request: any,
response: any,
},
) =&gt; {
const todo: Todo | undefined = todos.find((t) =&gt; t.id === params.id);
if (!todo) {
response.status = 404;
response.body = {
success: false,
message: "No todo found",
};
return;
}
// if todo found then update todo
const body = await request.body();
const updatedData: { todo?: string; isCompleted?: boolean } = body.value;
let newTodos = todos.map((t) =&gt; {
return t.id === params.id ? { ...t, ...updatedData } : t;
});
response.status = 200;
response.body = {
success: true,
data: newTodos,
};
},
deleteTodoById: () =&gt; {},
};
</code></pre>
<p>Let's talk about our controller for <code>PUT todos/:id</code>. This will update a todo by ID.</p>
<p>Let's break this down into smaller bits:</p><pre><code>const todo: Todo | undefined = todos.find((t) =&gt; t.id === params.id);
if (!todo) {
response.status = 404;
response.body = {
success: false,
message: "No todo found",
};
return;
}</code></pre>
<p>This is something we did exactly the same with the previous controller as well, so I won't go into much detail here.</p>
<p>Pro tip here: You can if you want make this piece of code a generic code block and then use it in both controllers.</p>
<p>Next we do this:</p><pre><code>// if todo found then update todo
const body = await request.body();
const updatedData: { todo?: string; isCompleted?: boolean } = body.value;
let newTodos = todos.map((t) =&gt; {
return t.id === params.id ? { ...t, ...updatedData } : t;
});
response.status = 200;
response.body = {
success: true,
data: newTodos,
};</code></pre>
<p>The piece of code I want to talk about here is the following:</p><pre><code>const updatedData: { todo?: string; isCompleted?: boolean } = body.value;
let newTodos = todos.map((t) =&gt; {
return t.id === params.id ? { ...t, ...updatedData } : t;
});</code></pre>
<p>First we do <code>const updatedData = body.value</code> and then add type checking to <code>updatedData</code> like the following:</p><pre><code>updatedData: { todo?: string; isCompleted?: boolean }</code></pre>
<p>This piece of code is telling TS that <code>updatedData</code> is an object which can <code>have/not have</code> <em>todo: string and</em> also can <code>have/not have</code> <em>isCompleted: boolean.</em></p>
<p>Then we simply map over all todos like this:</p><pre><code>let newTodos = todos.map((t) =&gt; {
return t.id === params.id ? { ...t, ...updatedData } : t;
});</code></pre>
<p>And where <code>params.id</code> match with <code>t.id</code> we simply append everything to that object we get from the user.</p>
<p>We are done with this API as well. </p>
<p>Let's restart our server:</p><pre><code>$ deno run --allow-net server.ts</code></pre>
<p>Open up a new tab in Postman. Set the request to <code>PUT</code> and in the <code>URL</code> bar type in <code>http://localhost:8080/todos/:id</code>, then hit <code>Send</code>:</p>
<p>Since we are generating ID's randomly, &nbsp;first get all todos by hitting get all todos API. Then from any todo get one of its ID to test this newly created API.<br>Every time you restart this Deno application, new ID's will be generated.</p>
<figcaption>404 status returned and no todo found error message given</figcaption>
</figure>
<figcaption>Provided a known ID, updated todo content in body. It returned the updated todo along with all the other todos</figcaption>
</figure>
<p>This is amazing – four APIs done and just one more to go.</p><pre><code class="language-controllers/todos.ts">import { v4 } from "https://deno.land/std/uuid/mod.ts";
// interfaces
import Todo from "../interfaces/Todo.ts";
// stubs
import todos from "../stubs/todos.ts";
export default {
getAllTodos: () =&gt; {},
createTodo: async () =&gt; {},
getTodoById: () =&gt; {},
updateTodoById: async () =&gt; {},
/**
* @description Delete todo by id
* @route DELETE todos/:id
*/
deleteTodoById: (
{ params, response }: { params: { id: string }; response: any },
) =&gt; {
const allTodos = todos.filter((t) =&gt; t.id !== params.id);
// remove the todo w.r.t id and return
// remaining todos
response.status = 200;
response.body = {
success: true,
data: allTodos,
};
},
};
</code></pre>
<p>Let's talk about our controller for <code>Delete todos/:id</code> this will delete a todo by ID.</p>
<p>We simply run a filter on all todos:</p><pre><code>const allTodos = todos.filter((t) =&gt; t.id !== params.id);
</code></pre>
<p>Remove the <code>todo.id</code> that matches with <code>params.id</code> and return the rest.</p>
<p>Then we do this:</p><pre><code>// remove the todo w.r.t id and return
// remaining todos
response.status = 200;
response.body = {
success: true,
data: allTodos,
};</code></pre>
<p>Simply return all the todos left which do not have the same todo.id.</p>
<p>Let's restart our server:</p><pre><code>$ deno run --allow-net server.ts</code></pre>
<p>Open up a new tab in Postman. This time set the request to <code>DELETE</code> and in the <code>URL</code> bar type <code>http://localhost:8080/todos/:id</code> and hit <code>Send</code>.</p>
<p>Since we are generating ID's randomly, &nbsp;first get all todos by hitting get all todos API. Then from any todo get one of its ID to test this newly created API.<br>Every time you restart this Deno application, new ID's will be generated.</p>
<p>With this we are all done with all five APIs.</p>
<hr>
<p>Now we only have two things remaining:</p>
<ul>
<li>Add a not found route middleware so that when the user tries to access an unknown route it gives an error.</li>
<li>Add a logger API that consoles the response time it took to return data from one API endpoint.</li>
</ul>
<h2 id="creating-a-route-middleware-for-routes-that-aren-t-found">Creating a route middleware for routes that aren't found</h2>
<p>In your root folder create a new folder called <code>middlewares</code>. Inside that folder create a file called <code>notFound.ts</code> and inside this file add this code:</p><pre><code class="language-middlwares/notFound.ts">export default ({ response }: { response: any }) =&gt; {
response.status = 404;
response.body = {
success: false,
message: "404 - Not found.",
};
};
</code></pre>
<p>Here we aren't doing anything new – it is very similar to our controllers structure. Just returning a status <code>404</code> (which means not found) along with a JSON object for <code>{ success, message }</code>.</p>
<p>Next go in your <code>server.ts</code> file and add the following content:</p>
<ul>
<li>Add this import somewhere at the top:</li>
</ul><pre><code class="language-server.ts">// not found
import notFound from './middlewares/notFound.ts';</code></pre>
<ul>
<li>And then just below your <code>app.use(todoRouter.allowedMethods())</code> add this line like this:</li>
</ul><pre><code class="language-server.ts">app.use(todoRouter.routes());
app.use(todoRouter.allowedMethods());
// 404 page
app.use(notFound);</code></pre>
<p>The order of execution is important here: every time we try to access an API end point it will first match/check routes from our <code>todoRouter</code>. If none are found, it will then execute <code>app<em>.use</em>(notFound);</code>. </p>
<p>Let's see if this works.</p>
<p>Restart the server:</p><pre><code>$ deno run --allow-net server.ts</code></pre>
<p>Open up a new tab in Postman. Set the request to <code>GET</code> and in the <code>URL</code> bar type <code>http://localhost:8080/something-unknown</code>, then hit <code>Send</code>.</p>
<p>So we now have a route middleware that we put at the end of our routes in <code>server.ts</code> as <code>app<em>.use</em>(notFound);</code>. If no route matches this middleware it will execute and return a <code>404</code> status code (which means not found). Then we simply send a response message like always which is <code>{success, message}</code>.</p>
<p><strong>Pro tip:</strong> We have decided that <code>{success, message}</code> is what we return in failed scenarios and <code>{success, data}</code> is what we return to user in success scenarios. So we can even make these to object/shapes as interfaces and add them to our project to ensure consistency and safe type checking.</p>
<p>Cool, now we are done with one of our middlewares – let's add the other middleware for logging our APIs in the console.</p>
<p><strong>Reminder:</strong> If you get stuck anywhere you can use the <a href="https://github.com/adeelibr/deno-playground/tree/master/chapter_1:oak">source code here</a>.</p>
<h2 id="logging-apis-in-console">Logging APIs in console</h2>
<p>In your <code>middlewares</code> folder create a new file called <code>logger.ts</code> and enter the following code:</p><pre><code class="language-middlewares/logger.ts">import {
green,
cyan,
white,
bgRed,
} from "https://deno.land/std@0.53.0/fmt/colors.ts";
const X_RESPONSE_TIME: string = "X-Response-Time";
export default {
logger: async (
{ response, request }: { response: any, request: any },
next: Function,
) =&gt; {
await next();
const responseTime = response.headers.get(X_RESPONSE_TIME);
console.log(`${green(request.method)} ${cyan(request.url.pathname)}`);
console.log(`${bgRed(white(String(responseTime)))}`);
},
responseTime: async (
{ response }: { response: any },
next: Function,
) =&gt; {
const start = Date.now();
await next();
const ms: number = Date.now() - start;
response.headers.set(X_RESPONSE_TIME, `${ms}ms`)
},
};
</code></pre>
<p>In your <code>server.ts</code> file add this code:</p>
<ul>
<li>Import this somewhere at the top:</li>
</ul><pre><code class="language-server.ts">// logger
import logger from './middlewares/logger.ts';</code></pre>
<ul>
<li>Just above your <code>todoRouter</code> code add these middlewares like this:</li>
</ul><pre><code>// order of execution is important;
app.use(logger.logger);
app.use(logger.responseTime);
app.use(todoRouter.routes());
app.use(todoRouter.allowedMethods());</code></pre>
<p>Now let's discuss what we just did.</p>
<p>Let's talk about the <code>logger.ts</code> file and break it down into bits:</p><pre><code class="language-ts">import {
green,
cyan,
white,
bgRed,
} from "https://deno.land/std@0.53.0/fmt/colors.ts";</code></pre>
<p>I am importing some console colors and console background colors that I want to use in API logging.</p>
<p>This is similar to what we did in our <code>eventListener</code> in our <code>server.ts</code> file. We will use colors in our console to log API requests.</p>
<p>Next I set <code>const X_RESPONSE_TIME: string = "X-Response-Time";</code>. This is the header we will inject in our API requests as they come into our server. I am calling this <code><code>X_RESPONSE_TIME</code></code> and its value is <code><code>X-Response-Time</code></code>. I will demonstrate its usage in a bit.</p>
<p>Next we simply export an object like this:</p><pre><code class="language-middlewares/logger.ts">export default {
logger: async ({ response, request }, next) {}
responseTime: async ({ response }, next) {}
};</code></pre>
<p>And then we simply use it inside our <code>server.ts</code> file like this:</p><pre><code class="language-server.ts">// order of execution is important;
app.use(logger.logger);
app.use(logger.responseTime);</code></pre>
<p>Let's now discuss what is happening in our logger middleware code and discuss it execution style using <code>next()</code>:</p>
<figcaption>Execution of order of logging middleware when GET /todos API is called.</figcaption>
</figure>
<p>The only difference here and in the controllers we had before is the use of the <code>next()</code> function. This functions helps us jump from one controller to the other as shown in the image below.</p>
<p>So in:</p><pre><code class="language-middlewares/logger.ts">export default {
logger: async (
{ response, request }: { response: any, request: any },
next: Function,
) =&gt; {
await next();
const responseTime = response.headers.get(X_RESPONSE_TIME);
console.log(`${green(request.method)} ${cyan(request.url.pathname)}`);
console.log(`${bgRed(white(String(responseTime)))}`);
},
responseTime: async (
{ response }: { response: any },
next: Function,
) =&gt; {
const start = Date.now();
await next();
const ms: number = Date.now() - start;
response.headers.set(X_RESPONSE_TIME, `${ms}ms`)
},
};</code></pre>
<p>Keep in mind that this is what we have in our <code>server.ts</code> file:</p><pre><code class="language-server.ts">// order of execution is important;
app.use(logger.logger);
app.use(logger.responseTime);
app.use(todoRouter.routes());
app.use(todoRouter.allowedMethods());</code></pre>
<p>The order of execution is as follows:</p>
<ul>
<li>logger.logger middleware</li>
<li>logger.responseTime middleware</li>
<li>todoRouter controller (whatever path is called by the user, for the purpose of explanation I am assuming that the user called <code>GET /todos</code> API to get all todos.)</li>
</ul>
<p>So it will first execute logger.logger middleware which is this:</p><pre><code class="language-middlewares/logger.ts">logger: async (
{ response, request }: { response: any, request: any },
next: Function,
) =&gt; {
await next();
const responseTime = response.headers.get(X_RESPONSE_TIME);
console.log(`${green(request.method)} ${cyan(request.url.pathname)}`);
console.log(`${bgRed(white(String(responseTime)))}`);
},</code></pre>
<p>It will come inside this function and immediately as it reads <code>await next()</code> it quickly jumps to the next middleware which is <code>responseTime</code>:</p>
<figcaption>Sharing the image above again for revision.</figcaption>
</figure>
<p>Inside <code>responseTime</code>, it only executes two lines which are (look at execution order 2 in image above):</p><pre><code class="language-middlewares/logger.ts">const start = Date.now();
await next();</code></pre>
<p>before jumping to the <code>getAllTodos</code> controller. Once it goes inside <code>getAllTodos</code> it will run the entire code inside that controller. </p>
<p>Since in that controller we are not using <code>next()</code> it will simply return the flow of logic back to <code>responseTime</code> controller. There it will run the following:</p><pre><code class="language-middlewares/logger.ts">const ms: number = Date.now() - start;
response.headers.set(X_RESPONSE_TIME, `${ms}ms`)</code></pre>
<p>Now keeping in perspective of the order of execution which is <code>2, 3, 4</code> (look at the image above).</p>
<p>This is what happens:</p>
<ul>
<li>We capture the data in <code>ms</code> by doing <code>const</code><em><code> start </code></em><code>=</code><em><code> Date.now</code></em><code>();</code>. Then we immediately call <code>next()</code> which goes to <code>getAllTodos</code> controller and runs the entire code. Then it comes back in the <code>responseTime</code> controller.</li>
<li>We then subtract that <code>start</code> date with whatever the date is at that moment by doing <code>const<em> ms</em>:<em> number </em>=<em> Date.now</em>()<em> </em>-<em> start</em>;</code> <code>ms</code>. Here it will return a number which is basically the difference in milliseconds that will tell us all the time it took Deno to execute our <code>getAllTodos</code> controller.</li>
</ul>
<p>Sharing the image once again for review:</p>
<ul>
<li>Next we simply set headers in our <code>response</code> like this:</li>
</ul><pre><code>response.headers.set(X_RESPONSE_TIME, `${ms}ms`)</code></pre>
<p>Which just sets the header value <code>X-Response-Time</code> to the milliseconds it took Deno to execute our API.</p>
<ul>
<li>Then from execution order <code>4</code> we move back to execution order <code>5</code> (have a look at the image above for reference).</li>
</ul>
<p>Here we simply do:</p><pre><code class="language-middlwares/logger.ts">const responseTime = response.headers.get(X_RESPONSE_TIME);
console.log(`${green(request.method)} ${cyan(request.url.pathname)}`);
console.log(`${bgRed(white(String(responseTime)))}`);</code></pre>
<ul>
<li>We get the time we passed in the <code><code>X-Response-Time</code></code></li>
<li>Then we take that time and simply console it colourfully in the console.</li>
</ul>
<p><code>request.method</code> tells us the method used to call our API, that is &nbsp;<code>GET, PUT etc</code> while <code>request.url.pathname</code> will tell the API which path the user used i.e, <code>/todos</code></p>
<p>Let's see if this works.</p>
<p>Restart the server:</p><pre><code>$ deno run --allow-net server.ts</code></pre>
<p>Open up a new tab in Postman. Set the request to <code>GET</code>, type in <code>http://localhost:8080/todos</code>, and hit <code>Send</code>.</p>
<p>Hit the API a couple of times in Postman. Then when you go back to the console, you should see something like this:</p>
<figcaption>API being logged in our console</figcaption>
</figure>
<p>This is it – we are done.</p>
<p>If you still feel stuck, take a look at the entire source code for this tutorial here: <a href="https://github.com/adeelibr/deno-playground/tree/master/chapter_1:oak">github.com/adeelibr/deno-playground/tree/master/chapter_1:oak</a></p>
<p>I hope that you found this article useful and that it was able to help you learn something today.</p>
<p>If you liked it, please do share it on social media. If you want to have a discussion about it, reach out to me on <a href="https://twitter.com/adeelibr">Twitter</a>.</p>
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
