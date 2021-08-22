---
card: "/images/default.jpg"
tags: [Typescript]
description: TypeScript is a superset that needs to compile to plain JavaS
author: "Milad E. Fahmy"
title: "A Practical Guide to TypeScript - How to Build a Pokedex App Using HTML, CSS, and TypeScript"
created: "2021-08-15T19:29:47+02:00"
modified: "2021-08-15T19:29:47+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-typescript tag-javascript ">
<header class="post-full-header">
<h1 class="post-full-title">A Practical Guide to TypeScript - How to Build a Pokedex App Using HTML, CSS, and TypeScript</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/05/cover-1.png 300w,
/news/content/images/size/w600/2020/05/cover-1.png 600w,
/news/content/images/size/w1000/2020/05/cover-1.png 1000w,
/news/content/images/size/w2000/2020/05/cover-1.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/05/cover-1.png" alt="A Practical Guide to TypeScript - How to Build a Pokedex App Using HTML, CSS, and TypeScript">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>TypeScript is a superset that needs to compile to plain JavaScript. It offers more control over your code since it uses type annotations, interfaces, classes, and static type checking to throw errors at compile-time. </p>
<p>TypeScript helps to enhance code quality and understandability, especially with a large codebase.</p>
<p>In this guide, I will lead you through TypeScript by first learning all the basics needed to start with this great language. Then we'll finish up by building an app from scratch using HTML, CSS, and TypeScript.</p>
<p><em>Let's dive in</em></p>
<ul>
<li><a href="#what-is-typescript">What is TypeScript?</a></li>
<li><a href="#setting-up-typescript">Setting up TypeScript</a></li>
<li><a href="#configuring-typescript-with-tsconfig">Configuring TypeScript with tsconfig</a></li>
<li><a href="#typescript-types">TypeScript Types</a></li>
<li><a href="#basic-typescript-types">Basic TypeScript Types</a></li>
<li><a href="#interfaces-and-type-aliases">Interfaces and Type aliases</a></li>
<li><a href="#build-a-pokedex-app-using-typescript">Build a Pokedex app using TypeScript</a></li>
<li><a href="#markup">Markup</a></li>
<li><a href="#fetch-and-display-data-using-typescript">Fetch and display data using TypeScript</a></li>
<li><a href="#compile-typescript-to-javascript">Compile TypeScript to JavaScript</a></li>
<li><a href="#resources">Resources</a></li>
</ul>
<h2 id="what-is-typescript">What is TypeScript?</h2>
<p>TypeScript is an object-oriented programming language developed and maintained by Microsoft. It's a superset of JavaScript, meaning that any valid JavaScript code will also run as expected in TypeScript. </p>
<p>TypeScript has all of the functionality of JavaScript as well as some additional features. It needs to be compiled to plain JavaScript during runtime, therefore you need a compiler to get back the JS Code.</p>
<p>TypeScript uses static typing, meaning that you can give a type to a variable during declaration. And it's something that can't be done with JavaScript because it's a dynamically typed language – it does not know the data type of a variable until it assigns a value to that variable at runtime.</p>
<p>Static type checking makes TypeScript great because it helps to throw an error at compile-time if the variable is unused or reassigned with a different type annotation. However, the error does not block the code from executing (and the JavaScript code will still be generated).</p>
<p>Static typing is optional in TypeScript. If no type is defined but the variable has a value, TypeScript will infer the value as type. And if the variable has no value, the type will be set to any by default.</p>
<p>Now, let's start using TypeScript in the next section to see it in action.</p>
<h2 id="setting-up-typescript">Setting up TypeScript</h2>
<p>As I said earlier, TypeScript needs to compile to plain JavaScript. So we need to use a tool to do the compilation. And to have access to that tool, you need to install TypeScript by running this command on the terminal.</p><pre><code class="language-shell">  yarn add -g typescript
</code></pre>
<p>Or if you are using npm:</p><pre><code class="language-shell">  npm install -g typescript
</code></pre>
<p>Note that here I use the <code>-g</code> flag to install TypeScript globally so that I can access it from anywhere.</p>
<p>By installing TypeScript, we have now access to the compiler, and we can compile our code to JavaScript. </p>
<p>Later we will dive into it and what it does, but for now let's add a configuration file to our project. It's not mandatory to add a config file - but for many cases, it's useful to have it since it allows us to define rulesets for the compiler.</p>
<h2 id="configuring-typescript-with-tsconfig">Configuring TypeScript with tsconfig</h2>
<p><code>tsconfig</code> is a JSON file that helps configure TypeScript. Having a config file is better since it helps control the behavior of the compiler. </p>
<p>To create the config file, you first need to create a new directory named <code>Pokedex</code> and browse into the root of the folder. Then, open it on the terminal or an IDE and run this command to generate a new TypeScript configuration file.</p><pre><code class="language-shell">  tsc --init
</code></pre>
<p>Once the file is generated, we can now explore it on an IDE.</p>
<ul>
<li><code>tsconfig.json</code></li>
</ul><pre><code class="language-js">{
"compilerOptions": {
"target": "es5",
"module": "commonjs",
"outDir": "public/js"
"rootDir": "src",
"strict": true,
"esModuleInterop": true
"forceConsistentCasingInFileNames": true
},
"include": ["src"]
}
</code></pre>
<p>This config file is much more verbose than what you see above – I removed the comments and unused values to make it easier to read. That said, we can now break down these values, explain each one, and see what it does.</p>
<p>target: it specifies the ECMAScript target version when compiling the TypeScript code. Here, we target <code>es5</code> to support all browsers, you can change it to ES6, ES3(it's the default if no target is specified), ES2020, etc.</p>
<p>module: it defines the module of the compiled code. The module can be Common JS, ES2015, ES2020, etc.</p>
<p>outDir: it specifies the output directory for the code compiled to JavaScript.</p>
<p>rootDir: it defines the location where the TypeScript files that need to be compiled are located.</p>
<p>include: it helps define which directory needs to be compiled. If you don't have that value, the compiler will take every <code>.ts</code> file and compile it to JavaScript even if an output directory is defined.</p>
<p>With that in place, we can now dive into one of the most important parts of TypeScript: the Types.</p>
<h2 id="typescript-types">TypeScript Types</h2>
<p>Types provide a way to enhance code quality, and they also make the code easier to understand since it defines the variable types. They are optional, and help define what a given variable should have as its value. They also allow the compiler to catch errors before runtime.</p>
<p>TypeScript has several types such as number, string, boolean, enum, void, null, undefined, any, never, array, and tuple. We won't see all types in this guide, but keep in mind that they exist.</p>
<p>Now, let's see some examples of basic Types.</p>
<h3 id="basic-typescript-types">Basic TypeScript Types</h3><pre><code class="language-js">let foo: string = "test"
let bar: number = 1
let baz: string[] = ["This", "is", "a", "Test"]
</code></pre>
<p>As you can see here, we have three variables with different types. <code>foo</code> expects a string, <code>bar</code>, a number, and <code>baz</code>, an array of a string. If they receive anything else besides the type declared, an error will be thrown by TypeScript.</p>
<p>You can also declare <code>baz</code> like this: <code>let baz: Array&lt;string&gt; = ["This", "is", "a", "Test"]</code>.</p>
<p>Now, let's try to reassign one of these variables and see how TypeScript behaves.</p><pre><code class="language-js">let foo: string = "test"
foo = 1
</code></pre><pre><code class="language-js">Type '1' is not assignable to type 'string'
</code></pre>
<p>TypeScript will throw an error because we have already declared <code>foo</code> to expect a string as value. And this error is caught at compile-time which makes TypeScript great and useful.</p>
<p>With TypeScript, types can be explicit like above, but they can be also implicit. It's better to explicitly define the type of a given value because it helps the compiler and the next developer who inherits the code. But you can also declare variables with an implicit type annotation.</p><pre><code class="language-js">let foo = "test"
let bar = 1
let baz = ["This", "is", "a", "Test"]
</code></pre>
<p>TypeScript will try here to infer as much as it can to give you type safety with less code. It will take the value and define it as a type for the variable. And nothing will change regarding errors.</p>
<p>Let's try to reassign these variables to see what will happen.</p><pre><code class="language-js">foo = 7
bar = "updated"
baz = [2, true, "a", 10]
</code></pre>
<p>TypeScript will catch the errors like before, even if variable types are declared implicitly.</p><pre><code class="language-js">Type '7' is not assignable to type 'string'.
Type '"updated"' is not assignable to type 'number'.
Type 'true' is not assignable to type 'string'.
</code></pre>
<p>When dealing with an object of several properties, it can be tricky and annoying to define the types. But luckily, TypeScript has something to help you along with that use-case. So, let's dive into TypeScript Interfaces and Type aliases in the next section.</p>
<h3 id="interfaces-and-type-aliases">Interfaces and Type aliases</h3>
<p>Interfaces and Type aliases help us define the shape of an object-like data structures. They seem like the same thing regarding their structure, but keep in mind that they are different.</p>
<p>However, the consensus amongst developers is to use <code>interface</code> whenever you can since it's in the default <code>tslint</code> ruleset.</p>
<p>Now, let's create an interface and a type alias in the next section to see them in action.</p><pre><code class="language-js">interface ITest {
id: number;
name?: string;
}
type TestType = {
id: number,
name?: string,
}
function myTest(args: ITest): string {
if (args.name) {
return `Hello ${args.name}`
}
return "Hello Word"
}
myTest({ id: 1 })
</code></pre>
<p>As you can see, the structure of an interface and a type alias looks like a JavaScript object. They have to define the form of given data with TypeScript.</p>
<p>Notice that here, I use an optional field <code>name</code> by adding a question mark (<code>?</code>). It lets us make the property <code>name</code> optional. That means if no value is passed to the property <code>name</code>, it will return <code>undefined</code> as its value.</p>
<p>Next, we use the interface <code>ITest</code> as a type for the argument received by the function <code>myTest</code>. And as with variables, functions can also be defined to return a specific type. And here, the return value must be a string otherwise an error will be thrown by TypeScript.</p>
<p>So far, we have covered all the basic knowledge needed to get started with TypeScript. Now, let's use it to build a Pokedex with HTML and CSS.</p>
<p><em>Let's dive in.</em></p>
<h2 id="build-a-pokedex-app-using-typescript">Build a Pokedex app using TypeScript</h2>
<p>The project we are going to build will fetch remote data from the <a href="https://pokeapi.co/">Pokemon API</a> and display each pokemon with TypeScript.</p>
<p>So, let's start by creating three new files in the root of the folder <code>Pokedex</code>: <code>index.html</code>, <code>style.css</code>, and <code>src/app.ts</code>. And for the configuration of TypeScript, we will use the same <code>tsconfig.json</code> file created earlier.</p>
<p>Now, let's move to the markup part and add some content to the HTML file.</p>
<h3 id="markup">Markup</h3>
<ul>
<li><code>index.html</code></li>
</ul><pre><code class="language-html">&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
&lt;meta charset="UTF-8" /&gt;
&lt;meta name="viewport" content="width=device-width, initial-scale=1.0" /&gt;
&lt;link rel="stylesheet" href="style.css" /&gt;
&lt;title&gt;TypeScript Pokedex&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;main&gt;
&lt;h1&gt;Typed Pokedex&lt;/h1&gt;
&lt;div id="app"&gt;&lt;/div&gt;
&lt;/main&gt;
&lt;script src="public/js/app.js"&gt;&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre>
<p>As you can see we have a relatively simple markup. There are two important things to retain though: </p>
<ul>
<li>the id <code>app</code> of the <code>div</code> tag that will be used to append the content using TypeScript, and </li>
<li>the <code>script</code> tag that points to the <code>public</code> folder and to be precise the JavaScript file that TypeScript will create for us during compile time.</li>
</ul>
<p>Besides, the CSS file is a bit long, so I won't cover it – I don't want to waste your time and do want to stay focused on TypeScript. That said, we can now dive into it and start fetching data from the API.</p>
<h3 id="fetch-and-display-data-using-typescript">Fetch and display data using TypeScript</h3>
<p>We start the TS part by selecting the id <code>app</code> which is the id of the div <code>tag</code>.</p>
<ul>
<li><code>src/app.ts</code></li>
</ul><pre><code class="language-js">const container: HTMLElement | any = document.getElementById("app")
const pokemons: number = 100
interface IPokemon {
id: number;
name: string;
image: string;
type: string;
}
</code></pre>
<p>Here, we have a type annotation that has not to be covered yet. This is a Union Type which allows having alternative types for a given variable. That means if <code>container</code> is not of type <code>HTMLElement</code>, TypeScript will check again if the value is equal to the type after the pipe (<code>|</code>) symbol and so forth because you can have multiple types.</p>
<p>Next, we have an interface <code>IPokemon</code> that defines the shape of a pokemon object which will be used next in the function responsible for displaying the content.</p>
<ul>
<li><code>src/app.ts</code></li>
</ul><pre><code class="language-js">const fetchData = (): void =&gt; {
for (let i = 1; i &lt;= pokemons; i++) {
getPokemon(i)
}
}
const getPokemon = async (id: number): Promise&lt;void&gt; =&gt; {
const data: Response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
const pokemon: any = await data.json()
const pokemonType: string = pokemon.types
.map((poke: any) =&gt; poke.type.name)
.join(", ")
const transformedPokemon = {
id: pokemon.id,
name: pokemon.name,
image: `${pokemon.sprites.front_default}`,
type: pokemonType,
}
showPokemon(transformedPokemon)
}
</code></pre>
<p>The function <code>fetchData</code> allows us to loop through the number of pokemon to retrieve and for each object call <code>getPokemon</code> with the pokemon number.</p>
<p>It may take time to fetch data, so we'll use an asynchronous function that returns a <code>Promise</code> of type <code>void</code>. This last means that the function won't return a value.</p>
<p>And once the data fetched, we can now create a new object <code>transformedPokemon</code> that mirrors the interface <code>IPokemon</code>, and then pass it as an argument to <code>showPokemon()</code>.</p>
<ul>
<li><code>src/app.ts</code></li>
</ul><pre><code class="language-js">const showPokemon = (pokemon: IPokemon): void =&gt; {
let output: string = `
&lt;/div&gt;
`
container.innerHTML += output
}
fetchData()
</code></pre>
<p>As you can see, the function <code>showPokemon</code> receives as a parameter the pokemon object of type <code>IPokemon</code> and returns <code>void</code> or no value to be precise. It will just append the content to the HTML file with the help of the id <code>container</code> (remember, it's the <code>div</code> tag).</p>
<p>Great! We have now done a lot, but something is still missing because the <code>index.html</code> file will display nothing if you try to launch it in the browser. This is because TypeScript needs to be compiled to plain JavaScript. So, let's do that in the next section.</p>
<h2 id="compile-typescript-to-javascript">Compile TypeScript to JavaScript</h2>
<p>Earlier in this tutorial, we installed the TypeScript compiler which allows compiling our TS code to JavaScript. And to do so, you need to browse into the root of the project and run the following command.</p><pre><code class="language-shell">  tsc
</code></pre>
<p>This command will compile every file with a <code>.ts</code> extension to JavaScript. And since we have a <code>tsconfig</code> file, the compiler will follow the defined rules and compile only the TS files located in the <code>src</code> folder and put the JS code into the <code>public</code> directory.</p>
<p>The compiler also allows compiling only a single file.</p><pre><code class="language-shell">  tsc myFile.ts
</code></pre>
<p>And if you do not specify a name after the TS file (<code>myFile.ts</code>), the compiled JS file will take the same name as the TS file.</p>
<p>If you want to not execute the command on every change, just add a <code>-w</code> flag to let the compiler keep watching for a change and recompile the code when needed.</p><pre><code class="language-shell">  tsc -w
</code></pre>
<p>And now if you launch the <code>index.html</code> file, you will see your Pokedex successfully rendered in the browser.</p>
<p>Great! We have now learned the basics of TypeScript by building a Pokedex app with HTML and CSS.</p>
<p>Preview the finished project <a href="https://codesandbox.io/s/typescript-pokedex-yluzs?file=/src/index.ts">here</a> or find the Source Code <a href="https://github.com/ibrahima92/pokedex-typescript">here</a>.</p>
<p>You can also find other great content like this on <a href="https://www.ibrahima-ndaw.com">my blog</a> or follow me <a href="https://twitter.com/ibrahima92_">on Twitter</a> to get notified when I write something new.</p>
<p>Thanks for reading.</p>
<h2 id="resources">Resources</h2>
<p>Here are some useful resources to dive deeper into TypeScript.</p>
<p><a href="https://www.typescriptlang.org/docs/handbook/basic-types.html">TypeScript Types</a></p>
<p><a href="https://www.typescriptlang.org/docs/handbook/compiler-options.html">TypeScript Compiler Options</a></p>
<p><a href="https://www.typescriptlang.org/docs/handbook/basic-types.html">TypeScript Handbook</a></p>
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
