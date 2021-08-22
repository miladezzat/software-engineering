---
card: "https://cdn-media-1.freecodecamp.org/images/0*DKOL70niXLTiAr5x"
tags: [JavaScript]
description: "Typescript is a typed superset of javascript which aims to ea"
author: "Milad E. Fahmy"
title: "A crash course in TypeScript"
created: "2021-08-16T10:06:25+02:00"
modified: "2021-08-16T10:06:25+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-typescript tag-web-development tag-software-development tag-coding ">
<header class="post-full-header">
<h1 class="post-full-title">A crash course in TypeScript</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/0*DKOL70niXLTiAr5x 300w,
https://cdn-media-1.freecodecamp.org/images/0*DKOL70niXLTiAr5x 600w,
https://cdn-media-1.freecodecamp.org/images/0*DKOL70niXLTiAr5x 1000w,
https://cdn-media-1.freecodecamp.org/images/0*DKOL70niXLTiAr5x 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/0*DKOL70niXLTiAr5x" alt="A crash course in TypeScript">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Typescript is a typed superset of javascript which aims to ease the development of large javascript applications. Typescript adds common concepts such as classes, generics, interfaces and static types and allows developers to use tools like static checking and code refactoring.</p><h3 id="why-care-about-typescript-">Why care about Typescript:</h3><p>Now the question remains why you should use Typescript in the first place. Here are some reasons why javascript developers should consider learning Typescript.</p><h4 id="static-typing-">Static typing:</h4><p>Javascript is dynamically typed which means that it doesn’t know the type of your variable until it instantiates it at run-time which can cause problems and errors in your projects. Typescript adds static type support to Javascript which takes care of bugs that are caused by false assumption of a variable type if you use it right. You still have full control over how strict you type your code or if you even use types at all.</p><h4 id="better-ide-support-">Better IDE support:</h4><p>One of the biggest advantages of Typescript over Javascript is the great IDE support which includes Intellisense, real-time information from the Typescript compiler, debugging and much more. There are also some great extensions to further boost your Typescript development experience.</p><h4 id="access-to-new-ecmascript-features-">Access to new ECMAScript features:</h4><p>Typescript gives you access to the newest ECMAScript feature and transcripts them to the ECMAScript targets of your choice. That means that you can develop your applications using the newest tools without needing to worry about browser support.</p><h3 id="when-should-you-use-it-">When should you use it:</h3><p>By now we should know why Typescript is useful and where it can improve our development experience. But it is not the solution to everything and certainly doesn’t prevent you from writing terrible code by itself. So let’s take a look at where you should definitely use Typescript.</p><h4 id="when-you-have-a-large-codebase-">When you have a large codebase:</h4><p>Typescript is a great addition to large codebase because it helps you prevent a lot of common errors. This especially applies if there are more developers working on a single project.</p><h4 id="when-you-and-your-team-already-know-statically-typed-languages-">When you and your team already know statically typed languages:</h4><p>Another obvious situation to use Typescript is when you and your team already know statically typed languages like Java and C# and don’t wanna change to writing Javascript.</p><h3 id="setup-">Setup:</h3><p>To setup typescript, we just need to install it with the npm package manager and create a new typescript file.</p><pre><code>npm install -g typescript</code></pre><p>After installing it we can continue looking at the syntax and features typescript provides us with.</p><h3 id="types-">Types:</h3><p>Now let’s take a look at which types are available to us in Typescript.</p><h4 id="number-">Number:</h4><p>All numbers in Typescript are floating point values. All of them get the number type including binary and hex values.</p><pre><code class="language-typescript">let num: number = 0.222;
let hex: number = 0xbeef;
let bin: number = 0b0010;</code></pre><h4 id="string-">String:</h4><p>As in other languages, Typescript uses the String Datatype to save textual data.</p><pre><code>let str: string = 'Hello World!';</code></pre><p>You can also use a multiline string and embed expressions by surrounding your String with backticks ``</p><pre><code class="language-js">let multiStr: string = `A simple
multiline string!`
let expression = 'A new expression'
let expressionStr: string = `Expression str: ${ expression }`</code></pre><h4 id="boolean-">Boolean:</h4><p>Typescript also supports the most basic datatype of all, the boolean, which can only be true or false.</p><pre><code class="language-js">let boolFalse: boolean = false;
let boolTrue: boolean = true;</code></pre><h3 id="assigning-types-">Assigning Types:</h3><p>Now that we have the basic datatypes down we can look at how you assign types in Typescript. Basically, you just need to write the type of your Variable after the name and a colon.</p><h4 id="single-type-">Single Type:</h4><p>Here is an example where we assign the String data type to our variable:</p><pre><code>let str: string = 'Hello World'</code></pre><p>This is the same with all data types.</p><h4 id="multiple-types-">Multiple Types:</h4><p>You can also assign multiple datatypes to your variables using the | operator.</p><pre><code class="language-js">let multitypeVar: string | number = 'String'
multitypeVar = 20</code></pre><p>Here we assign two types to our variable using the | operator. Now we can store String and Number in it.</p><h3 id="checking-types-">Checking Types:</h3><p>Now let’s look at how we can check if our variable has the right type. We have multiple options to do so but here I only show two of the most used.</p><h4 id="typeof-">Typeof:</h4><p>The <em>typeof </em>command only knows about basic datatypes. That means it can only check if the variable is one of the datatypes we defined above.</p><pre><code class="language-js">let str: string = 'Hello World!'
if(typeof str === number){
console.log('Str is a number')
} else {
console.log('Str is not a number')
}</code></pre><p>In this example, we create a String variable and use the <em>typeof </em>command to check if str is of type Number (which is always false). Then we print if it is a number or not.</p><h4 id="instanceof-">Instanceof:</h4><p>The instanceof operator is almost the same as the typeof except that it can also check for custom types that aren’t already defined by javascript.</p><pre><code class="language-js">class Human{
name: string;
constructor(data: string) {
this.name = data;
}
}
let human = new Human('Gabriel')
if(human instanceof Human){
console.log(`${human.name} is a human`)
}</code></pre><p>Here we create a custom type which we will discuss later on in this post and then create an instance of it. After that, we check if it really is a variable of type Human and print in the console if it is.</p><h3 id="type-assertions-">Type Assertions:</h3><p>Sometimes we will also need to cast our variables to a specific datatype. This often happens when you have assigned a general type like any and you want to use functions of the concrete type.</p><p>There are multiple options to go about this problem, but here I just share two of them.</p><h4 id="as-keyword-">As Keyword:</h4><p>We can easily cast our variable using the as keyword after the name of the variable and follow it up with the datatype.</p><pre><code class="language-js">let str: any = 'I am a String'
let strLength = (str as string).length</code></pre><p>Here we cast our str variable to String so we can use the length parameter. (Might even work without the cast if your TSLINT settings allow it)</p><h4 id="operator-">&lt;&gt; Operator:</h4><p>We can also use the &lt;&gt; operator which has exactly the same effect as the keyword with just a syntax difference.</p><pre><code class="language-js">let str: any = 'I am a String'
let strLength = (&lt;string&gt;str).length</code></pre><p>This code block has exactly the same functionality as the code block above. It only differs syntax-wise.</p><h3 id="arrays-">Arrays:</h3><p>Arrays in Typescript are Collections of the same objects and can be created in two different ways.</p><h4 id="creating-arrays">Creating Arrays</h4><p><strong>Using []:</strong></p><p>We can define an array of an object by writing the type followed by [] to denote that it is an array.</p><pre><code>let strings: string[] = ['Hello', 'World', '!']</code></pre><p>In this example, we create a String array which holds three different String values.</p><p><strong>Using the generic array type:</strong></p><p>We can also define an array using the generic type by writing Array&lt;Type&gt;.</p><pre><code>let numbers: Array&lt;number&gt; = [1, 2, 3, 4, 5]</code></pre><p>Here we create a number array which holds 5 different number values.</p><h4 id="multitype-arrays-">Multitype Arrays:</h4><p>Furthermore, we can also assign multiple types to a single array using the | operator.</p><pre><code>let stringsAndNumbers: (string | number)[] = ['Age', 20]</code></pre><p>In this example, we created an array which can hold string and number values.</p><h4 id="multidimensional-array-">Multidimensional Array:</h4><p>Typescript also lets us define multidimensional array which means that we can save an array in another array. We can create a multidimensional array by using multiple [] operators after another.</p><pre><code>let numbersArray: number[][] = [[1,2,3,4,5], [6,7,8,9,10]]</code></pre><p>Here we create an array which holds another number’s array.</p><h3 id="tupels-">Tupels:</h3><p>Tupels are basically like an array with one key difference. We can define what type of data can be stored in each position. That means that we can enforce types for indexes by enumerating them inside of squared brackets.</p><pre><code>let exampleTuple: [number, string] = [20, 'https://google.com'];</code></pre><p>In this example, we create a simple Tuple with a number on index 0 and a string on index 1. This means that it would throw an error if we try to place another datatype on this index.</p><p>Here is an example of an invalid tuple:</p><pre><code>const exampleTuple: [string, number] = [20, 'https://google.com'];</code></pre><h3 id="enums-">Enums:</h3><p>Enums in Typescript like in most other object-oriented programming languages allow us to define a set of named constants. Typescript also provides both numeric and string-based enums. Enums in Typescript are defined using the enum keyword.</p><h4 id="numeric-">Numeric:</h4><p>First, we will look at numeric enums where we match a key value to an index.</p><pre><code class="language-js">enum State{
Playing = 0,
Paused = 1,
Stopped = 2
}</code></pre><p>Above, we define a numeric enum where Playing is initialized with 0, Paused with 1 and so on.</p><pre><code class="language-js">enum State{
Playing,
Paused,
Stopped
}</code></pre><p>We could also leave the initializers empty and Typescript would automatically index it starting at zero.</p><h4 id="string--1">String:</h4><p>Defining a String enum in Typescript is pretty easy — we just need to initialize our values with Strings.</p><pre><code class="language-js">enum State{
Playing = 'PLAYING',
Paused = 'PAUSED',
Stopped = 'STOPPED'
}</code></pre><p>Here we define a String enum by initializing our States with Strings.</p><h3 id="objects-">Objects:</h3><p>An object in Typescript is an instance which contains a set of key-value pairs. These values can be variables, arrays or even functions. It’s also regarded as the Datatype that represents non-primitive types.</p><p>We can create objects by using curly braces.</p><pre><code class="language-js">const human = {
firstName: 'Frank',
age: 32,
height: 185
};</code></pre><p>Here we create a human object which has three different key-value pairs.</p><p>We can also add functions to our object:</p><pre><code class="language-js">const human = {
firstName: 'Frank',
age: 32,
height: 185,
greet: function(){
console.log("Greetings stranger!")
}
};</code></pre><h3 id="custom-types-">Custom Types:</h3><p>Typescript also lets us define custom types called alias that we easily reuse later. To create a custom type we just need to use the type keyword and define our type.</p><pre><code>type Human = {firstName: string, age: number, height: number}</code></pre><p>In this example, we define a custom type with the name of Human and three properties. Now let’s look at how we can create an object of this type.</p><pre><code>const human: Human = {firstName: ‘Franz’, age: 32, height: 185}</code></pre><p>Here we create an instance of our custom type and set the required properties.</p><h3 id="function-parameters-and-return-types-">Function Parameters and return Types:</h3><p>Typescript enables us to set the types for our function parameters and our return type. Now let’s look at the syntax for defining a function using Typescript.</p><pre><code class="language-js">function printState(state: State): void {
console.log(`The song state is ${state}`)
}
function add(num1: number, num2: number): number {
return num1 + num2
}</code></pre><p>Here we have two example functions which both have parameters with defined types. We also see that we define the return type after the closing parentheses.</p><p>Now we can call our function like in normal javascript but the compiler will check if we provide the function with the right parameters.</p><pre><code class="language-js">add(2, 5)
add(1) // Error to few parameters
add(5, '2') // Error the second argument must be type number</code></pre><h4 id="optional-properties-">Optional properties:</h4><p>Typescript also lets us define optional properties for our function. We can do so using the Elvis ? operator. Here is a simple example:</p><pre><code>function printName(firstName: string, lastName?: string) {
if (lastName)
console.log(`Firstname: ${firstName}, Lastname: ${lastName}`);
else console.log(`Firstname: ${firstName}`);
}</code></pre><p>In this example the lastName is an optional parameter which means that we will not get an error from the compiler when we don’t provide it calling the function.</p><pre><code>printName('Gabriel', 'Tanner')
printName('Gabriel')</code></pre><p>This means that both of these cases would be regarded as correct.</p><h4 id="default-values-">Default values:</h4><p>The second method we can use to make a property optional is by assigning it a default value. We can do so by assigning the value directly in the head of the function.</p><pre><code class="language-js">function printName(firstName: string, lastName: string = 'Tanner') {
console.log(`Firstname: ${firstName}, Lastname: ${lastName}`);
}</code></pre><p>In this example, we assigned a default value to the lastName which means that we don’t need to provide it every time we call the function.</p><h3 id="interfaces-">Interfaces:</h3><p>Interfaces in Typescript are used to define contracts with our code as well as code outside our project. Interfaces only contain the declarations of our methods and properties, but do not implement them. Implementing the methods and properties is the responsibility of the class that implements the interface.</p><p>Let’s look at an example to make these statements a bit clearer:</p><pre><code class="language-js">interface Person{
name: string
}
const person: Person = {name: 'Gabriel'}
const person2: Person = {names: 'Gabriel'} // is not assignable to type Person</code></pre><p>Here we create an interface with one property which needs to be implemented when we implement the interface. That’s why the second person variable will throw an error.</p><h4 id="optional-properties--1">Optional Properties:</h4><p>In Typescript, not all properties of an interface need to be required. Properties can also be set as optional by using the ? operator after the property name.</p><pre><code class="language-js">interface Person{
name: string
age?: number
}
const person: Person = {name: 'Frank', age: 28}
const person2: Person = {name: 'Gabriel'}</code></pre><p>Here we create an interface with one normal and one optional property which is defined by using the ? operator. That’s why we both person initializations are valid.</p><h4 id="read-only-properties-">Read-only Properties:</h4><p>Some properties of our interface should also only be modified when the object is first created. We can specify this functionality by putting the <em>readonly</em> keyword before our property name.</p><pre><code class="language-js">interface Person{
name: string
readonly id: number
age?: number
}
const person: Person = {name: 'Gabriel', id: 3127831827}
person.id = 200 // Cannot assign to id because it is readonly</code></pre><p>In this example, the id property is read-only and can’t be changed after the creation of an object.</p><h3 id="barrels-">Barrels:</h3><p>Barrels allow us to rollup several export modules in a single more convenient module.</p><p>We just need to create a new file which will export multiple modules of our project.</p><pre><code class="language-js">export * from './person';
export * from './animal';
export * from './human';</code></pre><p>After doing so we can import all those modules using a single convenient import statement.</p><pre><code>import { Person, Animal, Human } from 'index';</code></pre><h3 id="generics-">Generics:</h3><p>Generics allow us to create components that are compatible with a wide variety of types rather than a single one. This helps us make our component “open” and reusable.</p><p>Now you might be wondering why we don’t just use the any type to accept more than one single type for our component. Let’s look at an example to understand the situation better.</p><p>We want a simple dummy function which returns the parameter that was passed to it.</p><pre><code class="language-js">function dummyFun(arg: any): any {
return arg;
}</code></pre><p>While any is generic in the way that it accepts all types for the argument it has one big difference. We are losing the information about what type was passed and returned of the function.</p><p>So let’s take a look at how we can accept all types while still knowing the type it returns.</p><pre><code class="language-js">function dummyFun&lt;T&gt;(arg: T): T {
return arg
}</code></pre><p>Here we used the generic parameter T so we can capture the variable type and use it later. We also use it as our return parameter which allows us to see the corresponding type when we inspect the code.</p><p>For a more detailed explanation of generics, you can look at <a href="undefined" rel="noopener">Charly Poly</a>’s article about <a href="https://medium.com/@wittydeveloper/typescript-generics-and-overloads-999679d121cf" rel="noopener">Generics and overloads</a>.</p><h3 id="access-modifiers-">Access Modifiers:</h3><p>Access Modifiers control the accessibility of the member of our classes. Typescript support three access modifiers — public, private and protected.</p><h4 id="public-"><strong>Public:</strong></h4><p>Public members are available from anywhere without any restriction. This is also the standard modifier which means that you don’t need to prefix variables with the public keyword.</p><h4 id="private-"><strong>Private:</strong></h4><p>Private members can only be accessed in the class they are defined.</p><h4 id="protected-">Protected:</h4><p>Protected members can be accessed only within the class they are defined and every sub/child class.</p><h3 id="tslint-">TSLINT:</h3><p>TSLINT is the standard linter for Typescript and can help us write clean, maintainable and readable code. It can be customized with our own lint rules, configurations, and formatters.</p><h4 id="setup--1">Setup:</h4><p>First, we need to install typescript and tslint, we can do so locally or globally:</p><pre><code class="language-js">npm install tslint typescript --save-dev
npm install tslint typescript -g</code></pre><p>After that, we can use the TSLINT CLI to initialize TSLINT in our project.</p><pre><code>tslint --init</code></pre><p>Now that we have our <em>tslint.json</em> file we are ready to start configuring our rules.</p><h4 id="configuration-">Configuration:</h4><p>TSLINT allows use to configure our own rules and customize how our code should look like. By default the tslint.json file look like this and just uses the default rules.</p><pre><code class="language-js">{
"defaultSeverity": "error",
"extends": [
"tslint:recommended"
],
"jsRules": {},
"rules": {},
"rulesDirectory": []
}</code></pre><p>We can add other rules by putting them in the rules object.</p><pre><code class="language-js">"rules": {
"no-unnecessary-type-assertion": true,
"array-type": [true, "array"],
"no-double-space": true,
"no-var-keyword": true,
"semicolon": [true, "always", "ignore-bound-class-methods"]
},</code></pre><p>For an overview of all the available rules you can take a look at the <a href="https://palantir.github.io/tslint/rules/" rel="noopener">official documentation</a>.</p><h4 id="recommended-reading-">Recommended Reading:</h4><p><a href="https://medium.freecodecamp.org/an-introduction-to-the-javascript-dom-512463dd62ec" rel="noopener"><strong>An introduction to the JavaScript DOM</strong></a><br><a href="https://medium.freecodecamp.org/an-introduction-to-the-javascript-dom-512463dd62ec" rel="noopener"><em>The Javascript DOM (Document Object Model) is an interface that allows developers to manipulate the content, structure…</em>medium.freecodecamp.org</a></p><h3 id="conclusion">Conclusion</h3><p>You made it all the way until the end! Hope that this article helped you understand the basics of Typescript and how you can use it in your projects.</p><p>If you want to read more articles just like this one you can visit my <a href="https://gabrieltanner.org/">website</a> or start following my <a href="https://gabrieltanner.us20.list-manage.com/subscribe/post?u=9d67fc028348a0eb71318768e&amp;amp;id=6845ed3555">newsletter</a>.</p><p>If you have any questions or feedback, let me know in the comments down below.</p>
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
