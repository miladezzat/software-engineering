---
card: "/images/default.jpg"
tags: [Typescript]
description: TypeScript is the one of the tools people want to learn most,
author: "Milad E. Fahmy"
title: "The Definitive TypeScript Handbook"
created: "2021-08-15T19:33:20+02:00"
modified: "2021-08-15T19:33:20+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-typescript tag-javascript tag-programing tag-career ">
<header class="post-full-header">
<h1 class="post-full-title">The Definitive TypeScript Handbook</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2019/07/ts-1.png 300w,
/news/content/images/size/w600/2019/07/ts-1.png 600w,
/news/content/images/size/w1000/2019/07/ts-1.png 1000w,
/news/content/images/size/w2000/2019/07/ts-1.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2019/07/ts-1.png" alt="The Definitive TypeScript Handbook">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>TypeScript is the one of the tools people want to learn most, according to a <a href="https://insights.stackoverflow.com/survey/2019#most-loved-dreaded-and-wanted">Stack Overflow Survey</a> of 90,000 developers.</p>
<p>TypeScript has exploded in popularity, community size, and adoption over the past few years. Today, even <a href="https://github.com/facebook/jest/pull/7554#issuecomment-454358729">Facebook's Jest project from Facebook is moving to TypeScript</a>.</p>
<h1 id="what-is-typescript">What Is TypeScript?</h1>
<p>TypeScript is a statically-typed superset of JavaScript which aims to ease the development of large javascript applications. It is also knows as <em><em>JavaScript that scales</em></em>.</p>
<h2 id="why-use-typescript"><strong>Why use TypeScript?</strong></h2>
<p>JavaScript has evolved a lot over the past few years. It is the most versatile cross-platform language used for both client and server side. </p>
<p>But JavaScript was never meant for such large-scale application development. It is a dynamic language with no type system, meaning that a variable can have any type of value, such as a string or boolean. </p>
<p>Type systems increase code quality, readability and make it easier to maintain and refactor codebase. More importantly, errors can be caught at compile time rather than at run time.</p>
<p>Without a type system, it's difficult to scale JavaScript to build complex applications with large teams working on the same code.</p>
<p>TypeScript provides guarantees between different parts of the code on compile time. A compiler error typically tells you exactly where something went wrong and what exactly went wrong whereas a runtime error is accompanied by a stack trace that may be misleading and results on significant amount of time spent on debug work.</p>
<h2 id="typescript-pros"><strong>TypeScript pros</strong></h2>
<ol>
<li>Catch potential errors earlier in the development cycle.</li>
<li>Manage large codebases .</li>
<li>Easier refactoring.</li>
<li>Make it easier to work in teams — When contracts in the code are stronger it is easier for different developers to move in and out of the codebase without unintentionally breaking things.</li>
<li>Documentation — Types inform some sort of documentation that your future self and that other developers can follow.</li>
</ol>
<h2 id="typescript-cons">TypeScript cons</h2>
<ol>
<li>It’s something additional to learn — <em><em>It’s a tradeoff between short-term slowdown and long-term improvement in efficiency and maintenance.</em></em></li>
<li>Type errors can be inconsistent.</li>
<li>Configuration drastically changes its behaviour.</li>
</ol>
<h1 id="types">Types</h1>
<h2 id="boolean"><strong>Boolean</strong></h2><pre><code class="language-typescript">const isLoading: boolean = false;</code></pre>
<h2 id="number"><strong>Number</strong></h2><pre><code class="language-typescript">const decimal: number = 8;
const binary: number = 0b110;</code></pre>
<h2 id="string"><strong>String</strong></h2><pre><code class="language-typescript">const fruit: string = "orange";</code></pre>
<h2 id="array"><strong>Array</strong></h2>
<p>Array types can be written in one of the two following ways:</p><pre><code class="language-typescript">// Most common
let firstFivePrimes: number[] = [2, 3, 5, 7, 11];
// Less common. Uses generic types (more on that later)
let firstFivePrimes2: Array&lt;number&gt; = [2, 3, 5, 7, 11];</code></pre>
<h2 id="tuple"><strong>Tuple</strong></h2>
<p>Tuple types allow you to express an organised array where the type of a fixed number of elements is known. This means that you will get an error</p><pre><code class="language-typescript">let contact: [string, number] = ['John', 954683];
contact = ['Ana', 842903, 'extra argument']  /* Error!
Type '[string, number, string]' is not assignable to type '[string, number]'. */</code></pre>
<h2 id="any"><strong>Any</strong></h2>
<p><code>any</code> is compatible with any and all types in the type system, meaning that anything can be assigned to it and it can be assigned to anything. It gives you the power to opt-out of type checking.</p><pre><code class="language-typescript">let variable: any = 'a string';
variable = 5;
variable = false;
variable.someRandomMethod(); /* Okay,
someRandomMethod might exist at runtime. */</code></pre>
<h2 id="void"><strong>Void</strong></h2>
<p><code>void</code> is the absence of having any type at all. It is commonly used as the return type of a function that do not return a value.</p><pre><code class="language-typescript">function sayMyName(name: string): void {
console.log(name);
}
sayMyName('Heisenberg');</code></pre>
<h2 id="never"><strong>Never</strong></h2>
<p>The <code>never</code> type represents the type of values that never occur. For instance, <code>never</code> is the return type of a function which will always throw an exception or not reach its end point.</p><pre><code class="language-typescript">// throws an exception
function error(message: string): never {
throw new Error(message);
}
// unreachable end point
function continuousProcess(): never {
while (true) {
// ...
}
}</code></pre>
<h2 id="null-and-undefined"><strong>Null</strong> and <strong>Undefined</strong></h2>
<p>Both <code>undefined</code> and <code>null</code> actually have their own types named <code>undefined</code>and <code>null</code>, respectively. Much like <code>void</code>, they’re not extremely useful on their own but they become useful when used within union types <em><em>(more on that in a bit)</em></em></p><pre><code class="language-typescript">type someProp = string | null | undefined;</code></pre>
<h2 id="unknown"><strong>Unknown</strong></h2>
<p>TypeScript 3.0 introduces the unknown type which is the type-safe counterpart of <code>any</code>. Anything is assignable to <code>unknown</code>, but <code>unknown</code> isn’t assignable to anything but itself and <code>any.</code> No operations are permitted on an <code>unknown</code> without first asserting or narrowing to a more specific type.</p><pre><code class="language-typescript">type I1 = unknown &amp; null;    // null
type I2 = unknown &amp; string;  // string
type U1 = unknown | null;    // unknown
type U2 = unknown | string;  // unknown</code></pre>
<h2 id="type-alias"><strong>Type Alias</strong></h2>
<p>Type alias provides names for type annotations allowing you to use it in several places. They are created using the following syntax:</p><pre><code class="language-typescript">type Login = string;</code></pre>
<h2 id="union-type"><strong>Union Type</strong></h2>
<p>TypeScript allows us to use more than one data type for a property. This is called union type.</p><pre><code class="language-typescript">type Password = string | number;</code></pre>
<h2 id="intersection-type"><strong>Intersection Type</strong></h2>
<p>Intersection types are types that combine properties of all of the member types.</p><pre><code class="language-typescript">interface Person {
name: string;
age: number;
}
interface Worker {
companyId: string;
}
type Employee = Person &amp; Worker;
const bestOfTheMonth: Employee = {
name: 'Peter'
age: 39,
companyId: '123456'
</code></pre>
<h1 id="interface">Interface</h1>
<p>Interfaces are like a contract between you and the compiler in which you specify in a single named annotation exactly what properties to expect with its respective type annotations.<br><em><em>Side-note: Interfaces have zero runtime JS impact, it is used solely for type check</em></em>ing.</p>
<ul>
<li>You may declare <strong><strong>optional</strong></strong> <strong><strong>properties</strong></strong> marking those with an <code>?</code>, meaning that objects of the interface may or may not define these properties.</li>
<li>You may declare <strong><strong>read only</strong></strong> <strong><strong>properties</strong></strong>, meaning that once a property is assigned a value, it cannot be changed.</li>
</ul><pre><code class="language-typescript">interface ICircle {
readonly id: string;
center: {
x: number;
y: number;
},
radius: number;
color?: string;  // Optional property
}
const circle1: ICircle = {
id: '001',
center: { x: 0 },
radius: 8,
};  /* Error! Property 'y' is missing in type '{ x: number; }'
but required in type '{ x: number; y: number; }'. */
const circle2: ICircle = {
id: '002',
center: { x: 0, y: 0 },
radius: 8,
}  // Okay
circle2.color = '#666';  // Okay
circle2.id = '003';  /* Error!
Cannot assign to 'id' because it is a read-only property. */</code></pre>
<h2 id="extending-interfaces"><strong>Extending Interfaces</strong></h2>
<p>Interfaces can extend one or more interfaces. This makes writing interfaces flexible and reusable.</p><pre><code class="language-typescript">interface ICircleWithArea extends ICircle {
getArea: () =&gt; number;
}
const circle3: ICircleWithArea = {
id: '003',
center: { x: 0, y: 0 },
radius: 6,
color: '#fff',
getArea: function () {
return (this.radius ** 2) * Math.PI;
},
};</code></pre>
<h2 id="implementing-an-interface">Implementing an Interface</h2>
<p>A class implementing an interface needs to strictly conform to the structure of the interface.</p><pre><code class="language-typescript">interface IClock {
currentTime: Date;
setTime(d: Date): void;
}
class Clock implements IClock {
currentTime: Date = new Date();
setTime(d: Date) {
this.currentTime = d;
}
constructor(h: number, m: number) { }
}</code></pre>
<h1 id="enums"><strong>Enums</strong></h1>
<p>An <code>enum</code> (or enumeration) is a way to organise a collection of related values that can be numeric or string values.</p><pre><code class="language-typescript">enum CardSuit {
Clubs,
Diamonds,
Hearts,
Spades
}
is not assignable to type 'CardSuit'. */</code></pre>
<p>Under the hood, enums are number-based by default. <code>enum</code> values start from zero and increment by 1 for each member.</p>
<p>The JavaScript code generated by our previous example:</p><pre><code class="language-typescript">var CardSuit;
(function (CardSuit) {
CardSuit[CardSuit["Clubs"] = 0] = "Clubs";
CardSuit[CardSuit["Diamonds"] = 1] = "Diamonds";
CardSuit[CardSuit["Hearts"] = 2] = "Hearts";
CardSuit[CardSuit["Spades"] = 3] = "Spades";
})(CardSuit || (CardSuit = {}));
/**
* Which results in the following object:
* {
*   0: "Clubs",
*   1: "Diamonds",
*   2: "Hearts",
*   3: "Spades",
*   Clubs: 0,
*   Diamonds: 1,
*   Hearts: 2,
*   Spades: 3
* }
*/</code></pre>
<p>Alternatively enums can be initialised with string values which is a more readable approach.</p><pre><code class="language-typescript">enum SocialMedia {
Facebook = 'FACEBOOK',
Twitter = 'TWITTER',
Instagram = 'INSTAGRAM',
LinkedIn = 'LINKEDIN'
}</code></pre>
<h2 id="reverse-mapping">Reverse Mapping</h2>
<p><code>enum</code> supports reverse mapping which means we can access the value of a member and also a member name from its value.<br>Going back to our CardSuit example:</p><pre><code class="language-typescript">const clubsAsNumber: number = CardSuit.Clubs; // 3
const clubsAsString: string = CardSuit[0];    // 'Clubs'</code></pre>
<h1 id="functions"><strong>Functions</strong></h1>
<p>You can add types to each of the parameters and then to the function itself to add a return type.</p><pre><code class="language-typescript">function add(x: number, y: number): number {
return x + y;
}</code></pre>
<h2 id="function-overloads">Function Overloads</h2>
<p>TypeScript allows you to declare <em><em>function overloads</em></em>. Basically, you can have multiple functions with the same name but different parameter types and return type. Consider the following example:</p><pre><code class="language-typescript">function padding(a: number, b?: number, c?: number, d?: any) {
if (b === undefined &amp;&amp; c === undefined &amp;&amp; d === undefined) {
b = c = d = a;
}
else if (c === undefined &amp;&amp; d === undefined) {
c = a;
d = b;
}
return {
top: a,
right: b,
bottom: c,
left: d
};
}</code></pre>
<p>The meaning of each parameter changes based on how many parameters are passed into the function. Moreover, this function only expects one, two or four parameters. To create a function overload, you just declare the function header multiple times. The last function header is the one that is actually active <em><em>within</em></em> the function body but is not available to the outside world.</p><pre><code class="language-typescript">function padding(all: number);
function padding(topAndBottom: number, leftAndRight: number);
function padding(top: number, right: number, bottom: number, left: number);
function padding(a: number, b?: number, c?: number, d?: number) {
if (b === undefined &amp;&amp; c === undefined &amp;&amp; d === undefined) {
b = c = d = a;
}
else if (c === undefined &amp;&amp; d === undefined) {
c = a;
d = b;
}
return {
top: a,
right: b,
bottom: c,
left: d
};
}
padding(1);       // Okay
padding(1,1);     // Okay
padding(1,1,1,1); // Okay
padding(1,1,1);   /* Error! No overload expects 3 arguments, but
overloads do exist that expect either 2 or 4 arguments. */</code></pre>
<h1 id="classes"><strong>Classes</strong></h1>
<p>You can add types to properties and method’s arguments</p><pre><code class="language-typescript">class Greeter {
greeting: string;
constructor(message: string) {
this.greeting = message;
}
greet(name: string) {
return `Hi ${name}, ${this.greeting}`;
}
}</code></pre>
<h2 id="access-modifiers"><strong>Access Modifiers</strong></h2>
<p>Typescript supports <code>public</code>,<em><em> </em></em><code>private</code>,<em><em> </em></em><code>protected</code> modifiers, which determine the accessibility of a class member.</p>
<ul>
<li>A <code>public</code> member works the same as plain JavaScript members and is the default modifier.</li>
<li>A <code>private</code> member cannot be accessed from outside of its containing class.</li>
<li>A <code>protected</code> member differ from a private as it can also be accessed within deriving classes.</li>
| </ul><pre><code class="language-markdown"> | Accessible on | public | protected | private       |
| :----------------------------------------- | :-----------: | :----: | :-------: |
| class                                      |      yes      |  yes   |    yes    |
| class children                             |      yes      |  yes   |    no     |
| class instance                             |      yes      |   no   |    no     | </code></pre> |
<h2 id="readonly-modifier"><strong>Readonly modifier</strong></h2>
<p>A <code>readonly</code> property must be initialised at their declaration or in the constructor.</p><pre><code class="language-typescript">class Spider {
readonly name: string;
readonly numberOfLegs: number = 8;
constructor (theName: string) {
this.name = theName;
}
}</code></pre>
<h2 id="parameter-properties"><strong>Parameter properties</strong></h2>
<p><em><em>Parameter properties</em></em> lets you create and initialise a member in one place. They are declared by prefixing a constructor parameter with a modifier.</p><pre><code class="language-typescript">class Spider {
readonly numberOfLegs: number = 8;
constructor(readonly name: string) {
}
}</code></pre>
<h2 id="abstract"><strong>Abstract</strong></h2>
<p>The abstract keyword can be used both for classes and for abstract class methods.</p>
<ul>
<li><strong><strong>Abstract classes</strong></strong> cannot be directly instantiated. They are mainly for inheritance where the class which extends the abstract class must define all the abstract methods.</li>
<li><strong><strong>Abstract members</strong></strong> do not contain an implementation, thus cannot be directly accessed. These members must be implemented in child classes <em><em>(kinda like an interface)</em></em></li>
</ul>
<h1 id="type-assertion"><strong>Type Assertion</strong></h1>
<p>TypeScript allows you to override its inferred types in any way you want to. This is used when you have a better understanding of a variable type than the compiler on its own.</p><pre><code class="language-typescript">const friend = {};
friend.name = 'John';  // Error! Property 'name' does not exist on type '{}'
interface Person {
name: string;
age: number;
}
const person = {} as Person;
person.name = 'John';  // Okay</code></pre>
<p>Originally the syntax for type assertion was &lt;type&gt;</p><pre><code class="language-typescript">let person = &lt;Person&gt; {};</code></pre>
<p>But this created an ambiguity when used in JSX. Therefore it is recommended to use <code>as</code> instead.</p>
<p>Type assertion are usually used when migrating code from JavaScript and you may know a more accurate type of the variable than what is currently assigned. But assertion can be <strong><strong>considered harmful.</strong></strong></p>
<p>Let’s take a look at our Person interface from the previous example. Did you notice something wrong? If you noticed the missing property <strong><strong>age</strong></strong>, congratulations! The compiler might help you providing autocomplete for properties of Person but it will not complain if you miss any properties.</p>
<h1 id="type-inference"><strong>Type Inference</strong></h1>
<p>TypeScript infers types of variables when there is no explicit information available in the form of type annotations.</p><pre><code class="language-typescript">/**
* Variable definitinon
*/
let a = "some string";
let b = 1;
a = b;  // Error! Type 'number' is not assignable to type 'string'.
// In case of complex objects, TypeScript looks for the most common type
// to infer the type of the object.
const arr = [0, 1, false, true];  // (number | boolean)[]
/**
* Function return types
*/
function sum(x: number, y: number) {
return x + y;  // infer to return a number
}</code></pre>
<h1 id="type-compatibility"><strong>Type Compatibility</strong></h1>
<p>Type compatibility is based on structural typing, which relates types based solely on their members.</p>
<p>The basic rule for structural type is that <code>x</code> is compatible with <code>y</code> if <code>y</code> has at least the same members as <code>x</code>.</p><pre><code class="language-typescript">interface Person {
name: string;
}
let x: Person;  // Okay, despite not being an implementation of the Person interface
let y = { name: 'John', age: 20 };  // type { name: string; age: number }
x = y;
// Please note that x is still of type Person.
// In the following example, the compiler will show an error message as it does not
// expect the property age in Person but the result will be as expected:
console.log(x.age); // 20</code></pre>
<p>As <code>y</code> has a member <code>name: string</code>, it matched the required properties for the Person interface, meaning that <code>x</code> is a subtype of <code>y</code>. Thus, the assignment is allowed.</p>
<h2 id="functions-1"><em>Functions</em></h2>
<p><strong><strong>Number of arguments</strong></strong><br>In a function call you need to pass in at least enough arguments, meaning that extra arguments will not cause any errors.</p><pre><code class="language-typescript">function consoleName(person: Person) {
console.log(person.name);
}
consoleName({ name: 'John' });           // Okay
consoleName({ name: 'John', age: 20 });  // Extra argument still Okay</code></pre>
<p><strong><strong>Return type</strong></strong><br>The return type must contain at least enough data.</p><pre><code class="language-typescript">let x = () =&gt; ({name: 'John'});
let y = () =&gt; ({name: 'John', age: 20 });
x = y;  // OK
y = x;  /* Error! Property 'age' is missing in type '{ name: string; }'
but required in type '{ name: string; age: number; }' */</code></pre>
<h1 id="type-guard"><strong>Type Guard</strong></h1>
<p>Type Guards allow you to narrow down the type of an object within a conditional block.</p>
<h2 id="typeof"><strong>typeof</strong></h2>
<p>Using typeof in a conditional block, the compiler will know the type of a variable to be different. In the following example TypeScript understand that outside the conditional block, <code>x</code> might be a boolean and the function <code>toFixed</code> cannot be called on it.</p><pre><code class="language-typescript">function example(x: number | boolean) {
if (typeof x === 'number') {
return x.toFixed(2);
}
return x.toFixed(2); // Error! Property 'toFixed' does not exist on type 'boolean'.
}</code></pre>
<h2 id="instanceof"><strong>instanceof</strong></h2><pre><code class="language-typescript">class MyResponse {
header = 'header example';
result = 'result example';
// ...
}
class MyError {
header = 'header example';
message = 'message example';
// ...
}
function example(x: MyResponse | MyError) {
if (x instanceof MyResponse) {
console.log(x.message); // Error! Property 'message' does not exist on type 'MyResponse'.
console.log(x.result);  // Okay
} else {
// TypeScript knows this must be MyError
console.log(x.message); // Okay
console.log(x.result);  // Error! Property 'result' does not exist on type 'MyError'.
}
}</code></pre>
<h2 id="in"><strong>in</strong></h2>
<p>The <code>in</code> operator checks for the existence of a property on an object.</p><pre><code class="language-typescript">interface Person {
name: string;
age: number;
}
const person: Person = {
name: 'John',
age: 28,
};
const checkForName = 'name' in person; // true</code></pre>
<h1 id="literal-types"><strong>Literal Types</strong></h1>
<p>Literals are <em><em>exact</em></em> values that are JavaScript primitives. They can be combined in a type union to create useful abstractions.</p><pre><code class="language-typescript">type Orientation = 'landscape' | 'portrait';
function changeOrientation(x: Orientation) {
// ...
}
changeOrientation('portrait'); // Okay
changeOrientation('vertical'); /* Error! Argument of type '"vertical"' is not
assignable to parameter of type 'Orientation'. */</code></pre>
<h2 id="conditional-types"><strong>Conditional Types</strong></h2>
<p>A conditional type describes a type relationship test and selects one of two possible types, depending on the outcome of that test.</p><pre><code class="language-typescript">type X = A extends B ? C : D;</code></pre>
<p>This means that if type <code>A</code> is assignable to type <code>B</code>, then <code>X</code> is the same type as <code>C</code>. Otherwise <code>X</code> is the same as type <code>D;</code></p>
<h1 id="generic-types"><strong>Generic Types</strong></h1>
<p>Generic type is a type that must include or reference another type in order to be complete. It enforce meaningful constraints between various variables.<br>In the following example a function returns an array of whatever type you pass in.</p><pre><code class="language-typescript">function reverse&lt;T&gt;(items: T[]): T[] {
return items.reverse();
}
reverse([1, 2, 3]); // number[]
reverse([0, true]); // (number | boolean)[]</code></pre>
<h2 id="keyof"><strong>keyof</strong></h2>
<p>The <code>keyof</code> operator queries the set of keys for a given type.</p><pre><code class="language-typescript">interface Person {
name: string;
age: number;
}
type PersonKeys = keyof Person; // 'name' | 'age'</code></pre>
<h2 id="mapped-types"><strong>Mapped Types</strong></h2>
<p>Mapped Types allow you to create new types from existing ones by mapping over property types. Each property of the existing type is transformed according to a rule that you specify.</p>
<h2 id="partial"><strong>Partial</strong></h2><pre><code class="language-typescript">type Partial&lt;T&gt; = {
[P in keyof T]?: T[P];
}</code></pre>
<ul>
<li>The generic Partial type is defined with a single type parameter <code>T</code>.</li>
<li><code>keyof T </code>represents the union of all property names of <code>T</code> as string literal types.</li>
<li><code>[P in keyof T]?: T[P]</code> denotes that the type of each property <code>P</code> of type <code>T</code> should be optional and transformed to <code>T[P]</code>.</li>
<li><code>T[P]</code> represents the type of the property <code>P</code> of the type <code>T</code>.</li>
</ul>
<h2 id="readonly"><strong>Readonly</strong></h2>
<p>As we have covered in the Interface section, TypeScript allows you to create readonly properties. There is a <code>Readonly</code> type that takes a type <code>T</code> and sets all of its properties as readonly.</p><pre><code class="language-typescript">type Readonly&lt;T&gt; = {
readonly [P in keyof T]: T[P];
};</code></pre>
<h2 id="exclude"><strong>Exclude</strong></h2>
<p><code>Exclude</code> allows you to remove certain types from another type. <code>Exclude</code>from <code>T</code> anything that is assignable to <code>T</code>.</p><pre><code class="language-typescript">/**
* type Exclude&lt;T, U&gt; = T extends U ? never : T;
*/
type User = {
_id: number;
name: string;
email: string;
created: number;
};
type UserNoMeta = Exclude&lt;keyof User, '_id' | 'created'&gt;</code></pre>
<h2 id="pick"><strong>Pick</strong></h2>
<p><code>Pick</code> allows you to pick certain types from another type. <code>Pick</code> from <code>T</code>anything that is assignable to <code>T</code>.</p><pre><code class="language-typescript">/**
* type Pick&lt;T, K extends keyof T&gt; = {
*   [P in K]: T[P];
*  };
*/
type UserNoMeta = Pick&lt;User, 'name' | 'email'&gt;</code></pre>
<h2 id="infer"><em>infer</em></h2>
<p>You can use the <code>infer</code> keyword to infer a type variable within the <code>extends</code>clause of a conditional type. Such inferred type variable can only be used in the true branch of the conditional type.</p>
<h2 id="returntype"><strong>ReturnType</strong></h2>
<p>Gets the return type of a function.</p><pre><code class="language-typescript">/**
* Original TypeScript's ReturnType
* type ReturnType&lt;T extends (...args: any) =&gt; any&gt; = T extends (...args: any) =&gt; infer R ? R : any;
*/
type MyReturnType&lt;T&gt; = T extends (...args: any) =&gt; infer R ? R : any;
type TypeFromInfer = MyReturnType&lt;() =&gt; number&gt;;  // number
type TypeFromFallback = MyReturnType&lt;string&gt;;     // any</code></pre>
<p>Let’s break down <code>MyReturnType</code>:</p>
<ul>
<li>The return type of <code>T</code> is …</li>
<li>First of all, is <code>T</code> a function?</li>
<li>If so, then the type resolves to the inferred return type <code>R</code>.</li>
<li>Otherwise the type resolves to <code>any</code>.</li>
</ul>
<h1 id="references-useful-links">References &amp; Useful Links</h1>
<p><a href="https://basarat.gitbooks.io/typescript/">https://basarat.gitbooks.io/typescript/</a></p>
<p><a href="https://www.typescriptlang.org/docs/home.html">https://www.typescriptlang.org/docs/home.html</a></p>
<p><a href="https://www.tutorialsteacher.com/typescript">https://www.tutorialsteacher.com/typescript</a></p>
<p><a href="https://github.com/dzharii/awesome-typescript">https://github.com/dzharii/awesome-typescript</a></p>
<p><a href="https://github.com/typescript-cheatsheets/react-typescript-cheatsheet">https://github.com/typescript-cheatsheets/react-typescript-cheatsheet</a></p>
<hr>
<p>In order to study and give TypeScript a try I’ve build a simple CurrencyConverter app using TS and React-Native with hooks. You can check this project <a href="https://github.com/gustavoaz7/React-Native_Learning/tree/master/CurrencyConverter">here</a>.</p>
<p>Thanks and congratulations for reading up to this point! If you have any thoughts on this, feel free to leave a comment.</p>
<p>You can find me on <a href="https://twitter.com/intent/follow?screen_name=gustavoaz7_">Twitter</a>.</p>
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
