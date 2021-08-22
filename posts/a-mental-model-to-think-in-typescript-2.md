---
card: "/images/default.jpg"
tags: [Typescript]
description: "One day I came across this tweet from Lari Mazza:"
author: "Milad E. Fahmy"
title: "TypeScript Types Explained – A Mental Model to Help You Think in Types"
created: "2021-08-16T10:04:52+02:00"
modified: "2021-08-16T10:04:52+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-typescript tag-javascript tag-web-development tag-software-development tag-software-engineering tag-compilers tag-programming-languages tag-functional-programming ">
<header class="post-full-header">
<h1 class="post-full-title">TypeScript Types Explained – A Mental Model to Help You Think in Types</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/07/cover.jpg 300w,
/news/content/images/size/w600/2020/07/cover.jpg 600w,
/news/content/images/size/w1000/2020/07/cover.jpg 1000w,
/news/content/images/size/w2000/2020/07/cover.jpg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/07/cover.jpg" alt="TypeScript Types Explained – A Mental Model to Help You Think in Types">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
title: 'Some product',
price: 100.00,
};
</code></pre><p>But now with a list of products:</p><pre><code class="language-typescript">const products = [
{
title: 'Product 1',
price: 100.00,
},
{
title: 'Product 2',
price: 25.00,
},
{
title: 'Product 3',
price: 300.00,
}
];
</code></pre><p>Ok! Now we want a function to sum all the products prices.</p><pre><code class="language-typescript">function sumAllPrices(products) {
return products.reduce((sum, product) =&gt; sum + product.price, 0);
};
sumAllPrices(products); // 425
</code></pre><p>Just receive the products as the argument and reduce all product prices. JavaScript works just fine. But while building this function you start to think about the data and how to handle it properly.</p><p>The first part: products as an argument. Here you just think: "well, we're receiving a list of some objects". Yeah, in our heads the products are a list. This is why we can think of using the <code>reduce</code> method. It is a method from the <code>Array</code> prototype.</p><p>Then we can think about the object in detail. We know that the product object has a <code>price</code> property. And this property is a number. This is why we can do <code>product.price</code> and sum with the accumulator.</p><p>Recapping:</p><ul><li><code>products</code> is a list of objects.</li><li>As a list, we can use the <code>reduce</code> method, as this method is a member of the <code>Array</code> prototype.</li><li>The <code>produce</code> object has some properties. One of them is the <code>price</code>, which is a number.</li><li>As a number property, we can use it to sum with the reduce accumulator.</li><li>We wanted to return a number, the sum of all products prices.</li></ul><p>We are always thinking of data types, we just need to add the type annotations to make it more explicit and ask the compiler for help. Our memory is limited and the compilers are here to help us, humans.</p><p>The type system will not only make our data more consistent, but it can also provide autocompletion for data types. It knows the types, so it can show the members for the data. We will take a look at this idea later. Here I just wanted to show that we think in types in our heads.</p><h2 id="simples-types-simple-uses">Simples Types &amp; Simple Uses</h2><p>So we are ready to use some strongly typed programming languages like TypeScript. We simply need to explicitly add type annotations to our data structures. It's simple, right? </p><p>But sometimes it's not that easy (usually it's not easy when you come from dynamically typed languages. You feel unproductive. It feels like a battle against types). The idea here is to make this learning curve smoother and more fun.</p><p>Here we will see many examples of how to use types in TypeScript. We'll start with easy and silly examples and progressively make it more complex while designing the mental model to think in types.</p><p>As in JavaScript, TypeScript also has basic data types like <code>number</code>, <code>string</code>, <code>boolean</code>, <code>null</code>, etc. You can find all the basic data types in the <a href="https://www.typescriptlang.org/docs/handbook/basic-types.html">TypeScript Docs</a>.</p><p>With these units of data, we can make our programs more useful. To be more practical, let's get a simple example. A <code>sum</code> function.</p><p>How does it work in JavaScript?</p><pre><code class="language-typescript">function sum(a, b) {
return a + b;
}
</code></pre><p>Everything ok? Good.</p><p>Now let's use it:</p><pre><code class="language-typescript">sum(1, 2); // 3
sum(2, 2); // 4
sum(0, 'string'); // '0string'   WTF!
</code></pre><p>The first two calls are what we expect to happen in our system. But JavaScript is very flexible, it lets us provide any value to this function. </p><p>The last call is bizarre. We can call with a string, but it will return an unexpected result. It doesn't break in development, but it will result in strange behavior in runtime.</p><p>What do we want? We want to add some constraints to the function. It will only be able to receive numbers. That way, we narrow the possibility of having unexpected behaviors. And the function return type is also a number.</p><pre><code class="language-typescript">function sum(a: number, b: number): number {
return a + b;
}
</code></pre><p>Great! It was very simple. Let's call again.</p><pre><code class="language-typescript">sum(1, 2); // 3
sum(2, 2); // 4
sum(0, 'string'); // Argument of type '"string"' is not assignable to parameter of type 'number'.
</code></pre><p>As we type annotate our function, we provide information to the compiler to see if everything is correct. It will follow the constraints we added to the function.</p><p>So the first two calls are the same as in JavaScript. It will return the correct calculation. But in the last one we have an error in compile time. This is important. The error now happens in compile time and prevents us from shipping incorrect code to production. It says that the <code>string</code> type is not part of the set of values in the <code>number</code> type universe.</p><p>For basic types, we just need to add a colon followed by the type definition.</p><pre><code class="language-typescript">const isTypescript: boolean = true;
const age: number = 24;
const username: string = 'tk';
</code></pre><p>Now let's increase the challenge. Remember the product object code we wrote in JavaScript? Let's implement it again, but now with the TypeScript mindset.</p><p>Just to remember what we are talking about:</p><pre><code class="language-typescript">const product = {
title: 'Some product',
price: 100.00,
};
</code></pre><p>This is the product value. It has a <code>title</code> as <code>string</code> and the <code>price</code> as <code>number</code>. For now, this is what we need to know.</p><p>The object type would be something like this:</p><pre><code class="language-typescript">{ title: string, price: number }
</code></pre><p>And we use this type to annotate our function:</p><pre><code class="language-typescript">const product: { title: string, price: number } = {
title: 'Some product',
price: 100.00,
};
</code></pre><p>With this type, the compiler will know how to handle inconsistent data:</p><pre><code class="language-typescript">const wrongProduct: { title: string, price: number } = {
title: 100.00, // Type 'number' is not assignable to type 'string'.
price: 'Some product', // Type 'string' is not assignable to type 'number'.
};
</code></pre><p>Here it breaks down into two different properties:</p><ul><li>The <code>title</code> is a <code>string</code> and should not receive a <code>number</code>.</li><li>The <code>price</code> is a <code>number</code> and should not receive a <code>string</code>.</li></ul><p>The compiler helps us to catch type errors like that.</p><p>We could improve this type annotation by using a concept called <code>Type Aliases</code>. It's a way to create a new name for a specific type.</p><p>In our case, the product type could be:</p><pre><code class="language-typescript">type Product = {
title: string;
price: number;
};
const product: Product = {
title: 'Some product',
price: 100.00,
};
</code></pre><p>It's better to visualize the type, add semantics, and maybe reuse in our system.</p><p>Now that we have this product type, we can use it to type the products list. The syntax looks like this: <code>MyType[]</code>. In our case, <code>Product[]</code>.</p><pre><code class="language-typescript">const products: Product[] = [
{
title: 'Product 1',
price: 100.00,
},
{
title: 'Product 2',
price: 25.00,
},
{
title: 'Product 3',
price: 300.00,
}
];
</code></pre><p>Now the function <code>sumAllPrices</code>. It will receive the product and return a number, the sum of all product prices.</p><pre><code class="language-typescript">function sumAllPrices(products: Product[]): number {
return products.reduce((sum, product) =&gt; sum + product.price, 0);
};
</code></pre><p>This is very interesting. As we typed the product, when we write <code>product.</code>, it will show the possible properties we can use. In the product type case, it will show the properties <code>price</code> and <code>title</code>.</p><pre><code class="language-typescript">sumAllPrices(products); // 425
sumAllPrices([]); // 0
sumAllPrices([{ title: 'Test', willFail: true }]); // Type '{ title: string; willFail: true; }' is not assignable to type 'Product'.
</code></pre><p>Passing the <code>products</code> will result in the value <code>425</code>. An empty list will result in the value <code>0</code>. And if we pass an object with a different structure - TypeScript has a structural type system and we will dig deep into this topic later - the compiler will throw a type error telling that the structure is not part of the <code>Product</code> type.</p><h2 id="structural-typing">Structural Typing</h2><p>Structural typing is a type of type compatibility. It's a way to understand the compatibility between types based on its structure: features, members, properties. Some languages have type compatibility based on the names of the types, and it's called nominal typing.</p><p>For example, in Java, even if different types have the same structure, it will throw a compile error because we are using a different type to instantiate and define a new instance.</p><pre><code class="language-typescript">class Person {
String name;
}
class Client {
String name;
}
Client c = new Person();  // compiler throws an error
Client c = new Client();  // OK!
</code></pre><p>In nominal type systems, the relevant part of a type is the name, not the structure.</p><p>TypeScript, on another hand, verifies the structural compatibility to allow or not specific data. Its type system is based on structural typing.</p><p>The same code implementation that crashes in Java, would work in TypeScript.</p><pre><code class="language-typescript">class Person {
name: string;
}
class Client {
name: string;
}
const c1: Client = new Person(); // OK!
const c2: Client = new Client(); // OK!
</code></pre><p>We want to use the <code>Client</code> type, and it has the property <code>name</code>, to point to the <code>Person</code> type. It also has the property type. So TypeScript will understand that both types have the same shape.</p><p>But it is not only about classes, but it works for any other "object".</p><pre><code class="language-typescript">const c3: Client = {
name: 'TK'
};
</code></pre><p>This code compiles too because we have the same structure here. The TypeScript type system doesn't care about if it is a class, or an object literal if it has the same members, it will be flexible and compile.</p><p>But now we will add a third type: the <code>Customer</code>.</p><pre><code class="language-typescript">class Customer {
name: string;
age: number;
};
</code></pre><p>It not only has the <code>name</code> property, but also the <code>age</code>. What would happen if we instantiate a <code>Client</code> instance in a constant of type <code>Customer</code>?</p><pre><code class="language-typescript">const c4: Customer = new Client();
</code></pre><p>The compiler will not accept that. We want to use the <code>Customer</code>, that has <code>name</code> and <code>age</code>. But we are instantiating the <code>Client</code> that has only the <code>name</code> property. So it doesn't have the same shape. It will cause an error:</p><pre><code class="language-bash">Property 'age' is missing in type 'Client' but required in type 'Customer'.
</code></pre><p>The other way around would work because we want <code>Client</code>, and <code>Customer</code> has all the properties (<code>name</code>) from <code>Client</code>.</p><pre><code class="language-typescript">const c5: Client = new Customer();
</code></pre><p>It works fine!</p><p>We can go on for enums, object literals, and any other type, but the idea here is to understand that the structure of the type is the relevant part.</p><h2 id="runtime-and-compile-time">Runtime and Compile time</h2><p>This is a much more complex topic in programming language theory, but I wanted to give some examples to distinguish runtime from compile time.</p><p>Basically, the runtime is the execution time of a program. Imagine your backend receiving data from a frontend form page, handling this data, and saving it. Or when your frontend is requesting data from a server to render a list of <s>Pokemons</s> products.</p><p>Compile time is basically when the compiler is executing operations in the source code to satisfy the programming language's requirements. It can include type checking as an operation, for example. </p><p>Compile time errors in TypeScript, for example, are very related to the code that we wrote before:</p><ul><li>When the type is missing property: <code>Property 'age' is missing in type 'Client' but required in type 'Customer'.</code></li><li>When the type doesn't match: <code>Type '{ title: string; willFail: true; }' is not assignable to type 'Product'.</code></li></ul><p>Let's see some examples to have a better understanding.</p><p>I want to write a function to get the index of a part of the passed programming language.</p><pre><code class="language-typescript">function getIndexOf(language, part) {
return language.indexOf(part);
}
</code></pre><p>It receives the <code>language</code> and the <code>part</code> that we will look for to get the index.</p><pre><code class="language-typescript">getIndexOf('Typescript', 'script'); // 4
getIndexOf(42, 'script'); // Uncaught TypeError: language.indexOf is not a function at getIndexOf
</code></pre><p>When passing a string, it works fine. But passing a number, we got a runtime error <code>Uncaught TypeError</code>. Because a number doesn't have an <code>indexOf</code> function, so we can't really use it.</p><p>But if we give type information to the compiler, in compile time, it will throw an error before running the code.</p><pre><code class="language-typescript">function getIndexOf(language: string, part: string): number {
return language.indexOf(part);
}
</code></pre><p>Now our program knows that it will need to receive two strings and return a number. The compiler can use this information to throw errors when we get a type error... before runtime.</p><pre><code class="language-typescript">getIndexOf('Typescript', 'script'); // 4
getIndexOf(42, 'script'); // Argument of type '42' is not assignable to parameter of type 'string'.
number: number;
expirationDate: Date;
secutiryCode: number;
};
type DebitCard = {
number: number;
expirationDate: Date;
secutiryCode: number;
};
type PaymentMethod = CreditCard | DebitCard;
</code></pre><p>These types are in the <em>Type space</em>, so it only works in compile time. After type checking this function, the compiler removes all the types.</p><p>If you add these types in the TypeScript Playground, the output will be only a strict definition <code>"use strict";</code>.</p><p>The idea here is to really understand that the types live in the <em>Type space</em> and will not be available in the runtime. So in our function, it won't be possible to do this:</p><pre><code class="language-typescript">const purchase = (paymentMethod: PaymentMethod) =&gt; {
if (paymentMethod instanceof CreditCard) {
} else {
}
}
number: 2093,
expirationDate: new Date(),
secutiryCode: 101
};
</code></pre><p>The compiler will type check it and do all the magic and then it transpiles the TypeScript code to JavaScript. And we have this:</p><pre><code class="language-typescript">const creditCard = {
number: 2093,
expirationDate: new Date(,
secutiryCode: 101
};
</code></pre><p>The same object, but now only with the value and without the type.</p><h2 id="constraints-type-narrowing">Constraints &amp; Type Narrowing</h2><p>When we restrict what we can do, it’s easier to understand what we can do.</p><p>We use types as constraints to limit the bugs in your program. To understand this concept, I'm stealing an example from Lauren Tan's talk about Type Systems.</p><pre><code class="language-typescript">const half = x =&gt; x / 2;
</code></pre><p>How many ways does this function can fail? Imagine a number of possible inputs:</p><pre><code class="language-typescript">[
null,
undefined,
0,
'0',
'TK',
{ username: 'tk' },
[42, 3.14],
(a, b) =&gt; a + b,
]
</code></pre><p>And what are the results for input:</p><pre><code class="language-typescript">half(null); // 0
half(undefined); // NaN
half(0); // 0
half('0'); // 0
half('TK'); // NaN
half({ username: 'tk' }); // NaN
half([42, 3.14]); // NaN
half((a, b) =&gt; a + b); // NaN
</code></pre><p>We have different and unexpected results here. Here it's clear that we want a number as the <code>half</code> function, do the calculation, and great, it's done! But sometimes we don't control the input or the codebase is big, or new/unfamiliar, and we're able to make these little mistakes.</p><p>The idea of adding constraints to our code is to narrow the possibilities of a range of types. In this case, we want to limit the input type to a <code>number</code> type. It's the only type that we care about to do the half calculation. With type narrowing, we again give type information to the compiler.</p><pre><code class="language-typescript">const half = (x: number) =&gt; x / 2;
</code></pre><p>And with this new information, if we call the function with the test cases again, we have different results:</p><pre><code class="language-typescript">half(null); // Argument of type 'null' is not assignable to parameter of type 'number'.
half(undefined); // Argument of type 'undefined' is not assignable to parameter of type 'number'.(
half(0); // 0
half('0'); // Argument of type '"0"' is not assignable to parameter of type 'number'.
half('TK'); // Argument of type '"TK"' is not assignable to parameter of type 'number'.
half({ username: 'tk' }); // Argument of type '{ username: string; }' is not assignable to parameter of type 'number'.
half([42, 3.14]); // Argument of type 'number[]' is not assignable to parameter of type 'number'.
half((a, b) =&gt; a + b); // Argument of type '(a: any, b: any) =&gt; any' is not assignable to parameter of type 'number'.
</code></pre><p>Basically the compiler will tell us that only the number type, in this case, the <code>0</code> value, is a valid input, it will compile, and allow to run the code. We narrow the input type and allow only the value we really want for this function.</p><p>But are other ways to narrow the types in TypeScript. Imagine we have a function that receives a parameter that can be either a string or a number.</p><pre><code class="language-typescript">type StringOrNumber = string | number;
function stringOrNumber(value: StringOrNumber) {}
</code></pre><p>In the function body, the compiler won't know which methods or properties we can use for this type. Is it a string or number? We only know about the value in runtime. But we can narrow the type using the <code>typeof</code>:</p><pre><code class="language-typescript">function stringOrNumber(value: StringOrNumber) {
if (typeof value === 'string') {
// value.
// your ide will show you the possible methods from the string type
// (parameter) value: string
value
}
if (typeof value === 'number') {
// value.
// your ide will show you the possible methods from the number type
// (parameter) value: number
value
}
}
</code></pre><p>With an <code>if</code> statement and the <code>typeof</code>, we can give more information to the compiler. Now it will know the specific type for each <code>if</code> body.</p><p>The IDE knows what to show for the specific type. In runtime, when the value is a string, it will go to the first <code>if</code> statement, and the compiler will infer that the type is a string: <code>(parameter) value: string</code>.</p><p>When the value is a number, it will go to the second <code>if</code> statement and the compiler will infer that a type is a number: <code>(parameter) value: number</code>.</p><p>The <code>if</code> statement can be a helper to the compiler.</p><p>Another example is when we have an optional property in an object, but in a function, we need to return a value based on this optional value.</p><p>Imagine we have this type:</p><pre><code class="language-typescript">type User = {
name: string;
address: {
street: string;
complement?: string;
}
};
</code></pre><p>It's a simple <code>User</code> type. Let's focus on the <code>complement</code> property. It's optional (take a closer look at the <code>?</code> symbol), which means that it can be a <code>string</code> or <code>undefined</code>.</p><p>Now we want to build a function to receive the user and get the length of the address complement. What about this?</p><pre><code class="language-typescript">function getComplementLength(user: User): number {
return user.address.complement.length;
// (property) complement?: string | undefined
// Object is possibly 'undefined'.
}
</code></pre><p>As we see earlier, the <code>complement</code> can be a <code>string</code> or <code>undefined</code>. <code>undefined</code> doesn't really have a property called <code>length</code>:</p><pre><code class="language-typescript">Uncaught TypeError: Cannot read property 'length' of undefined
</code></pre><p>We could make something like:</p><pre><code class="language-typescript">function getComplementLength(user: User) {
return user.address.complement?.length;
}
</code></pre><p>If the <code>complement</code> has a string value, we can call <code>length</code>, otherwise, it will return <code>undefined</code>. </p><p>So this function has two possible return types: <code>number | undefined</code>. But we want to ensure that we only return <code>number</code>. So we use a <code>if</code> or a ternary condition to narrow the type. It will only call <code>.length</code> when it has real value (or when it is not <code>undefined</code>).</p><pre><code class="language-typescript">function getComplementLength(user: User): number {
return user.address.complement
? user.address.complement.length
: 0;
}
</code></pre><p>If it is <code>undefined</code>, we return the minimum length: <code>0</code>. Now we can use the function with the right type design with and without the complement. Without compile and runtime errors.</p><pre><code class="language-typescript">getComplementLength({
name: 'TK',
address: {
street: 'Shinjuku Avenue'
}
}); // 0
getComplementLength({
name: 'TK',
address: {
street: 'Shinjuku Avenue',
complement: 'A complement'
}
}); // 12
</code></pre><p>We'll get <code>0</code> from the first function call and <code>12</code> from the second call.</p><p>With this <code>if</code> concept, we can also use other helpers to do the same thing. We could use the <code>in</code> operator to verify a property from an object, a <code>Array.isArray</code> to verify an array, or the <code>instanceof</code> for any other class type.</p><p>We could also use more advanced concepts like assertion function or type guards, but I'll leave these concepts to future posts.</p><p>One thing that I want to dig deep in this <em>Constraints</em> topic is immutability.</p><p>In JavaScript and TypeScript, we have the idea of mutable objects. If you define value in a variable, we can reassign it with another value later.</p><pre><code class="language-typescript">let email = 'harry.potter@mail.com';
email // 'harry.potter@mail.com'
email = 'hermione.granger@mail.com';
email // 'hermione.granger@mail.com'
</code></pre><p>Now imagine you have a list of numbers. And you want to use a function to sum all of its numbers. The function looks like this:</p><pre><code class="language-typescript">function sumNumbers(numbers: number[]) {
let sum = 0;
let num = numbers.pop();
while (num !== undefined) {
sum += num;
num = numbers.pop();
}
return sum;
}
</code></pre><p>You call the function passing your list and get the result. It works just fine.</p><pre><code class="language-typescript">const list = [1, 2, 3, 4];
sumNumbers(list); // 10
</code></pre><p>But what happened to your list? Did the function mutate it entirely?</p><pre><code class="language-typescript">list; // []
</code></pre><p>If we use the list, it's empty now. The <code>pop</code> in the <code>sumNumbers</code> function is a "mutate" function. It gets the references and removes the item from them. It's not a copy, it's the real reference.</p><p>In runtime, we can use other functions or ways to do the same thing: using reduce, do a for loop without the need to <code>pop</code> items from the array.</p><p>But using TypeScript, we can provide immutability in compile time. If you are not using types, it's possible to use a type assertion <code>as const</code>. Imagine this:</p><pre><code class="language-typescript">const author = {
name: 'Walter Isaacson',
email: 'walter.isaacson@mail.com',
books: [
{
title: 'Leonardo Da Vinci',
price: 50.00,
}
]
};
author.books.push({
title: 'Steve Jobs',
price: 10.00
});
</code></pre><p>Just an author object and then we add a new book to this author. The <code>push</code> method updates the book's array reference. It's a "mutate" method. Let's see if you use the const assertion <code>as const</code>:</p><pre><code class="language-typescript">const author = {
name: 'Walter Isaacson',
email: 'walter.isaacson@mail.com',
books: [
{
title: 'Leonardo Da Vinci',
price: 50.00,
}
]
} as const;
author.books.push({
title: 'Steve Jobs',
price: 10.00
});
// Property 'push' does not exist on type
// 'readonly [{ readonly title: "Leonardo Da Vinci"; readonly price: 50; }]'
</code></pre><p>The compiler won't compile. It gets an error on the author's object. It's is now readonly, and as a readonly object, it has no method called <code>push</code> (or any "mutate" method). </p><p>We added a constraint to the author's object. Before it was a specific type (with all the "mutate" methods), and now we narrowed the type to be almost the same, but without the "mutate" methods. Type narrowing.</p><p>To continue, let's add types to this object. The <code>book</code> and the <code>author</code>:</p><pre><code class="language-typescript">type Book = {
title: string;
price: number;
};
type Author = {
name: string;
email: string;
books: Book[];
};
</code></pre><p>Add the type to the author object:</p><pre><code class="language-typescript">const author: Author = {
name: 'Walter Isaacson',
email: 'walter.isaacson@mail.com',
books: [
{
title: 'Leonardo Da Vinci',
price: 50.00,
}
]
};
</code></pre><p>Add the type to a new book object:</p><pre><code class="language-typescript">const book: Book = {
title: 'Steve Jobs',
price: 30
};
</code></pre><p>And now we can add the new book to the author:</p><pre><code class="language-typescript">author.name = 'TK';
author.books.push(book);
</code></pre><p>It works just fine!</p><p>I want to show another way to add immutability in compile time. TypeScript has a utility type called <code>Readonly</code>.</p><p>You can add the <code>readonly</code> for each property in an object. Something like this:</p><pre><code class="language-typescript">type Book = {
readonly title: string;
readonly price: number;
};
</code></pre><p>But it can be very repetitive. So we can use the <code>Readonly</code> utility to add the <code>readonly</code> to all properties of an object:</p><pre><code class="language-typescript">type Book = Readonly&lt;{
title: string;
price: number;
}&gt;;
</code></pre><p>One thing to keep in mind is that it doesn't add the readonly for nested properties. For example, if we add the <code>Readonly</code> to the <code>Author</code> type, it won't add the <code>readonly</code> to the <code>Book</code> type too.</p><pre><code class="language-typescript">type Author = Readonly&lt;{
name: string;
email: string;
books: Book[];
}&gt;;
</code></pre><p>All the properties from the author can't be reassigned, but you can mutate the <code>books</code> list here (<code>push</code>, <code>pop</code>, ...) because the <code>Book[]</code> is not readonly. Let's see it.</p><pre><code class="language-typescript">const author: Author = {
name: 'Walter Isaacson',
email: 'walter.isaacson@mail.com',
books: [
{
title: 'Leonardo Da Vinci',
price: 50.00,
}
]
};
const book: Book = {
title: 'Steve Jobs',
price: 30
};
author.books.push(book);
author.books;
/* =&gt;
*
* [
*   {
*     title: 'Leonardo Da Vinci',
*     price: 50.00,
*   },
*   {
*    title: 'Steve Jobs',
*    price: 30
*   }
* ]
*
*/
</code></pre><p>The <code>push</code> will work just fine.</p><p>So, how do we enforce a readonly to the <code>books</code>? We need to make sure that the array is a readonly type. We can use the <code>Readonly</code>, or use another utility from TypeScript called <code>ReadonlyArray</code>. Let's see the two ways to do it.</p><p>With <code>Readonly</code>:</p><pre><code class="language-typescript">type Author = Readonly&lt;{
name: string;
email: string;
books: Readonly&lt;Book[]&gt;;
}&gt;;
</code></pre><p>With <code>ReadonlyArray</code>:</p><pre><code class="language-typescript">type Author = Readonly&lt;{
name: string;
email: string;
books: ReadonlyArray&lt;Book&gt;;
}&gt;;
</code></pre><p>For me, both work great! But in my opinion, <code>ReadonlyArray</code> is more semantic and I also feel it is less verbose (not that the <code>Readonly</code> with an array is).</p><p>What happened if we try to mutate the author object now?</p><pre><code class="language-typescript">author.name = 'TK'; // Cannot assign to 'name' because it is a read-only property.
author.books.push(book); // Property 'push' does not exist on type 'readonly [{ readonly title: "Leonardo Da Vinci"; readonly price: 50; }]'.
</code></pre><p>Great! Now we can catch mutable operations in compile time. This is a way to use the concept of adding constraints to our types to make sure they only do what is really needed.</p><h2 id="semantics-readability">Semantics &amp; Readability</h2><p>At first, I felt that TypeScript could be very verbose because of the types and make the code much more complex than it should be. And it actually can. Strive for simplicity is the goal and it is difficult at the same time.</p><p>This idea is very related to clean code and how we can write code to be human-readable and maintainable. TypeScript is no different. Most of the cases, we don't need super complex types. Let the simple types do the work.</p><p>Another thing that I find very useful is semantic of types.</p><p>Imagine you need to add a string to the <code>sessionStorage</code> to save it in the browser. Your function looks like this:</p><pre><code class="language-typescript">function saveMyString(value: string): any {
sessionStorage.myString = value;
}
</code></pre><p>You add a type annotation to the string input and as you don't know about the returning type, you probably add a <code>any</code> type.</p><p>But what's the real meaning behind this returning type? Is it returning anything?</p><p>It just saves the string to the <code>sessionStorage</code>. It doesn't return anything. The <code>void</code> type was what you're looking for. As TypeScript docs says: <code>the absence of having any type at all</code>.</p><pre><code class="language-typescript">function saveMyString(value: string): void {
sessionStorage.myString = value;
}
</code></pre><p>Great, the meaning of the type is correct now. The correctness is very important in a type system. It's a way to model our data, but also help maintain systems for future developers. Even if the developer is ... you!</p><p>Before we were talking about verbose code. And we can improve a lot of our code by using TypeScript type inference.</p><p>For some code, we don't need to explicitly add type annotation. The TypeScript compiler will understand and infer it implicitly. For example:</p><pre><code class="language-typescript">const num: number = 1;
</code></pre><p>This code is redundant. We can just let the compiler infers it like this:</p><pre><code class="language-typescript">const num = 1;
</code></pre><p>In our example earlier, we add the annotation <code>void</code> to the <code>saveMyString</code> function. But as the function doesn't return any value, the compiler will infer that the returning type is <code>void</code> implicitly.</p><p>When I learned this, I thought with myself. But one of the biggest advantages of using TypeScript (or any other type system / static type language) is types as documentation. If we let the compiler infer most of the types, we won't have the documentation we want.</p><p>But if you hover over the TypeScript code in your editor (at least VS Code works like that), you can see the type information and relevant documentation.</p><p>Let's see other examples of redundant code and make the code less verbose and let the compiler works for us.</p><pre><code class="language-typescript">function sum(a: number, b: number): number {
return a + b;
};
</code></pre><p>We don't need the returning type <code>number</code>, because the compiler knows that a <code>number</code> + another <code>number</code> is equal to a <code>number</code> type, and it is the returning type. It can be:</p><pre><code class="language-typescript">function sum(a: number, b: number) {
return a + b;
};
</code></pre><p>Implicit code, but with documentation, and the compiler does the work.</p><p>Type inference works for methods too:</p><pre><code class="language-typescript">function squareAll(numbers: number[]): number[] {
return numbers.map(number =&gt; number * number);
};
</code></pre><p>This function gets a list of numbers and makes every number a squared value. The returning type is <code>number[]</code>, even though the result of a map is always a list, and as we have a list of numbers, it will always be a list of numbers. So we let the compiler infers this too:</p><pre><code class="language-typescript">function squareAll(numbers: number[]) {
return numbers.map(number =&gt; number * number);
};
</code></pre><p>This works the same way for objects too.</p><pre><code class="language-typescript">const person: { name: string, age: number } = {
name: 'TK',
age: 24
};
</code></pre><p>A person object with a string name and a number age. But as we are assigning these values, the compiler can infer these types.</p><pre><code class="language-typescript">const person = {
name: 'TK',
age: 24
};
</code></pre><p>If you hover the <code>person</code>, you get this:</p><pre><code class="language-typescript">const person: {
name: string;
age: number;
}
</code></pre><p>The types are documented here.</p><p>Another benefit of type inference is that we can easily refactor our code. It's a simple example, but good to illustrate the refactoring process. Let's get the <code>sum</code> function again.</p><pre><code class="language-typescript">function sum(a: number, b: number): number {
return a + b;
};
</code></pre><p>Instead of returning the sum number, we want to return <code>"Sum: {a + b}"</code>. So for <code>a = 1</code> and <code>b = 2</code>, we have the resulting string as <code>"Sum: 3"</code>.</p><pre><code class="language-typescript">function sum(a: number, b: number): string {
return `Sum: ${a + b}`;
};
sum(1, 2); // Sum: 3
</code></pre><p>Great! But now letting the compiler infers this.</p><pre><code class="language-typescript">// function sum(a: number, b: number): number
function sum(a: number, b: number) {
return a + b;
};
// function sum(a: number, b: number): string
function sum(a: number, b: number) {
return `Sum: ${a + b}`;
};
</code></pre><p>We just need to modify the returning value and the type inference will work. No need to think about the returning type. This is a small example, but for more complex functions, it would work too.</p><p>Back to the readability part, we can use <code>Enum</code>. A utility that defines a set of named constants. It's a way to give more meaning to the data in your application.</p><p>In your node app or a frontend app, you possibly do some fetching to request data. You commonly use a fetch object to perform a request and sometimes you need to pass the accept headers.</p><pre><code class="language-typescript">fetch('/pokemons', {
headers: {
Accept: 'application/json'
}
});
fetch('/harry-potter/spells', {
headers: {
Accept: 'application/json'
}
});
</code></pre><p>It's good, but we can also use an enum to separate this accept string in a constant and reuse.</p><pre><code class="language-typescript">enum MediaTypes {
JSON = 'application/json'
}
fetch('/pokemons', {
headers: {
Accept: MediaTypes.JSON
}
});
fetch('/harry-potter/spells', {
headers: {
Accept: MediaTypes.JSON
}
});
</code></pre><p>And we are able to add more data related to the <code>MediaTypes</code> like <code>PDF</code>:</p><pre><code class="language-typescript">enum MediaTypes {
JSON = 'application/json',
PDF = 'application/pdf'
}
</code></pre><p>With <code>Enum</code>, we can encapsulate data into a meaningful block of code.</p><p>Recently, I was implementing a "state" React component. It's basically a component that renders an empty state or an error state based on the request response.</p><p>The UI for the empty and the error states were very similar. Only the title and the description text and the image icon were different. So I thought: "I have two ways in my mind to implement this: do the logic outside the component and pass all the information needed or pass a 'state type' and let the component render the correct icon and messages."</p><p>So I built an enum:</p><pre><code class="language-typescript">export enum StateTypes {
Empty = 'Empty',
Error = 'Error'
};
</code></pre><p>And I could just pass this data to the component as the <code>type</code>:</p><pre><code class="language-typescript">import ComponentState, { StateTypes } from './ComponentState';
&lt;ComponentState type={StateTypes.Empty} /&gt;
&lt;ComponentState type={StateTypes.Error} /&gt;
</code></pre><p>In the component, it had a state object with all the information related to the <code>title</code>, <code>description</code>, and <code>icon</code>.</p><pre><code class="language-typescript">const stateInfo = {
Empty: {
title: messages.emptyTitle,
description: messages.emptyDescription,
icon: EmptyIcon,
},
Error: {
title: messages.errorTitle,
description: messages.errorDescription,
icon: ErrorIcon,
},
};
</code></pre><p>So I could just receive the type based on the enum and use this <code>stateInfo</code> object with the <code>State</code> component from our design system:</p><pre><code class="language-typescript">export const ComponentState = ({ type }) =&gt; (
&lt;State
title={stateInfo[type].title}
subtitle={stateInfo[type].subtitle}
icon={stateInfo[type].icon}
/&gt;
);
</code></pre><p>This is a way to use an enum to encapsulate important data into a meaningful block of code in your application.</p><p>Another cool feature from TypeScript is optional properties. When we have properties from an object that can be a real value or undefined, we use an optional property to be explicitly that the property can be or not be there. The syntax for this is a simple <code>?</code> operator in the object property. Imagine this function:</p><pre><code class="language-typescript">function sumAll(a: number, b: number, c: number) {
return a + b + c;
}
</code></pre><p>But now the <code>c</code> value is optional:</p><pre><code class="language-typescript">function sumAll(a: number, b: number, c?: number) {
return a + b + c;
}
</code></pre><p>We add the <code>?</code> after <code>c</code>. But now we have a compiler error saying:</p><pre><code class="language-typescript">(parameter) c: number | undefined
Object is possibly 'undefined'.
</code></pre><p>We can't sum an <code>undefined</code> value (well, actually in JavaScript we can, but we receive a <code>NaN</code> value).</p><p>We need to ensure that the <code>c</code> exists. Type narrowing!</p><pre><code class="language-typescript">function sumAll(a: number, b: number, c?: number) {
if (c) {
return a + b + c;
}
return a + b;
}
</code></pre><p>If the <code>c</code> exists, it will be a <code>number</code> and we can sum all. If not, sum only the <code>a</code> and <code>b</code> values.</p><p>An interesting part of this optional property is that it is a <code>undefined</code> not <code>null</code>. This is why we do this, we get a compile error:</p><pre><code class="language-typescript">let number = null;
sumAll(1, 2, number);
// Argument of type 'null' is not assignable to parameter of type 'number | undefined'.
</code></pre><p>As the <code>?</code> operator doesn't handle the <code>null</code> value, choose to use the <code>undefined</code> type in your application and so you can still use the optional property and make the types consistent. We can use it like this:</p><pre><code class="language-typescript">let value: number | undefined;
sumAll(1, 2, value); // 3
</code></pre><p>If you add a default value to the parameter, you won't need the <code>?</code> operator. Actually, the compiler will say that the <code>Parameter cannot have question mark and initializer</code>.</p><pre><code class="language-typescript">function sumAll(a: number, b: number, c: number = 3) {
return a + b + c;
}
</code></pre><p>Optional properties not only works on variables and parameters, but also in objects.</p><p>An API response is a good example of type definition and optional property together. In API responses, data can be optional. Sometimes the API sends, sometimes it has no value.</p><p>How we model our types is really important for an application. If an optional property is defined as a required type, we can make our application breaks in runtime. But if we design the types correctly, we have the possible errors in compile time.</p><p>Imagine we are fetching a user data and this is the way we modeled the response type:</p><pre><code class="language-typescript">type UserResponse = {
name: string;
email: string;
username: string;
age: number;
isActive: boolean;
};
</code></pre><p>But in reality, the email is optional for the user. The API endpoint could return or not. But the <code>UserResponse</code> type we built treat it as a required property.</p><p>After fetching the user data, we want to see if the user email matches with a specific domain.</p><pre><code class="language-typescript">function matchDomain(email: string) {
return email.endsWith(domain);
}
</code></pre><p>As the <code>email</code> property is required in the <code>UserResponse</code> type, the <code>email</code> parameter will also be required in the <code>matchDomain</code> function.</p><p>This is the runtime we can get if the <code>email</code> is <code>undefined</code>:</p><pre><code class="language-typescript">// Uncaught TypeError: Cannot read property 'endsWith' of undefined
</code></pre><p>But what would happen if we modeled the <code>UserResponse</code> correctly?</p><pre><code class="language-typescript">type UserResponse = {
name: string;
email?: string;
username: string;
age: number;
isActive: boolean;
};
</code></pre><p>Now the <code>email</code> is possibly <code>undefined</code> and it is explicit.</p><p>But if we still keep the function <code>matchDomain</code> the same way, we get a compile error:</p><pre><code class="language-typescript">// Argument of type 'undefined' is not assignable to parameter of type 'string'.
</code></pre><p>And this is great! Now we can fix the <code>email</code> parameter in this function using the <code>?</code> operator:</p><pre><code class="language-typescript">function matchDomain(email?: string) {
return email.endsWith('email.com');
}
</code></pre><p>But now we get a compile error when running <code>email.endsWith</code>, because it could be <code>undefined</code> too:</p><pre><code class="language-typescript">// (parameter) email: string | undefined
// Object is possibly 'undefined'.
</code></pre><p>Type narrowing! We use an if block to return a <code>false</code> when the <code>email</code> is <code>undefined</code>. And run <code>endsWith</code> method only if the <code>email</code> is really a string:</p><pre><code class="language-typescript">function matchDomain(email?: string) {
if (!email) return false;
return email.endsWith('email.com');
}
</code></pre><p>It's pretty nice when we can get runtime errors in compile time. Better to code than debugging after we ship in production, isn't it?</p><h2 id="type-composition">Type composition</h2><p>Type composition is very useful when trying to reuse existing types for new places of the codebase. We don't need to rewrite new types, we can create a new type by composing existing ones.</p><p>One example of composition I always have to handle using Redux or the <code>useReducer</code> hook from React is the idea of "reducers". A reducer can always receive a number of different actions.</p><p>In this context, actions are objects with at least a <code>type</code> property. It looks like this:</p><pre><code class="language-typescript">enum ActionTypes {
FETCH = 'FETCH'
}
type FetchAction = {
type: typeof ActionTypes.FETCH;
};
const fetchAction: FetchAction = {
type: ActionTypes.FETCH
};
</code></pre><p>A <code>fetchAction</code> has a type <code>FetchAction</code> that has a property type that is a typeof <code>FETCH</code>.</p><p>But a reducer can receive other actions too. For example a submit action:</p><pre><code class="language-typescript">enum ActionTypes {
FETCH = 'FETCH',
SUBMIT = 'SUBMIT'
}
type SubmitAction = {
type: typeof ActionTypes.SUBMIT;
};
const submitAction: SubmitAction = {
type: ActionTypes.SUBMIT
};
</code></pre><p>For a specific container, we can compose all these actions into just one type and use it for the reducer parameter type.</p><p>It would look like this:</p><pre><code class="language-typescript">type Actions = FetchAction | SubmitAction;
function reducer(state, action: Actions) {
switch (action.type) {
case ActionTypes.FETCH:
// fetching action
case ActionTypes.SUBMIT:
// submiting action
}
}
</code></pre><p>All the possible actions are the <code>Actions</code> type. And we use a union type to "join" all action types. The action in the reducer can have the <code>FetchAction</code> or the <code>SubmitAction</code>.</p><p>As a Potterhead, I couldn't miss a Harry Potter example. I want to build a simple function to choose a Hogwarts House based on the person trait. Let's start with the houses first.</p><pre><code class="language-typescript">type House = {
name: string;
traits: string[];
}
const gryffindor: House = {
name: 'Gryffindor',
traits: ['courage', 'bravery']
};
const slytherin: House = {
name: 'Slytherin',
traits: ['ambition', 'leadership']
};
const ravenclaw: House = {
name: 'Ravenclaw',
traits: ['intelligence', 'learning']
};
const hufflepuff: House = {
name: 'Hufflepuff',
traits: ['hard work', 'patience']
};
const houses: House[] = [
gryffindor,
slytherin,
ravenclaw,
hufflepuff
];
</code></pre><p>I want to keep it simple, so the <code>House</code> type has only the <code>name</code> and the <code>traits</code>, a list of possible traits from people related to the house.</p><p>And then, I create each house and added all of them to the <code>houses</code> list.</p><p>Great! Now I'll build the <code>Person</code> type. A person can be a witch or a muggle.</p><pre><code class="language-typescript">type Witch = {
name: string;
trait: string;
magicFamily: string;
}
type Muggle = {
name: string;
trait: string;
email: string;
}
</code></pre><p>And this is the part we combine these two different types using the union type:</p><pre><code class="language-typescript">type Person = Muggle | Witch;
</code></pre><p>Using the intersection type, the <code>Person</code> type has all properties from <code>Muggle</code> or all from &nbsp;<code>Witch</code>.</p><p>So now, if I create a <code>Muggle</code>, I need just the name, the trait, and the email:</p><pre><code class="language-typescript">const hermione: Muggle = {
name: 'Hermione Granger',
trait: 'bravery',
email: 'hermione@mail.com'
};
</code></pre><p>If I create a <code>Witch</code>, I need the name, the trait, and the magic family name:</p><pre><code class="language-typescript">const harry: Witch = {
name: 'Harry Potter',
trait: 'courage',
magicFamily: 'Potter'
};
</code></pre><p>And if I create a <code>Person</code>, I need at least the <code>name</code> and the <code>trait</code> properties from <code>Muggle</code> and <code>Witch</code>:</p><pre><code class="language-typescript">const tk: Person = {
name: 'TK',
email: 'tk@mail.com',
trait: 'learning',
magicFamily: 'Kinoshita'
};
</code></pre><p>The <code>chooseHouse</code> is very simple. We just pas the houses and the person. Based on the person trait, the function will return the chosen house:</p><pre><code class="language-typescript">function chooseHouse(houses: House[], person: Person) {
return houses.find((house) =&gt; house.traits.includes(person.trait))
}
</code></pre><p>And applying all the people we created:</p><pre><code class="language-typescript">chooseHouse(houses, harry); // { name: 'Gryffindor', traits: ['courage', 'bravery'] }
chooseHouse(houses, hermione); // { name: 'Gryffindor', traits: ['courage', 'bravery'] }
chooseHouse(houses, tk); // { name: 'Ravenclaw', traits: ['intelligence', 'learning'] }
</code></pre><p>Nice!</p><p>The intersection type is a bit different, but it can also be used to combine existing types.</p><p>When I was implementing a web app to <a href="https://github.com/leandrotk/ux-studies">apply my studies on UX</a>, I needed to create a prop type for the Image component.</p><p>I had the type <code>ImageUrl</code> from the product type:</p><pre><code class="language-typescript">type ImageUrl = {
imageUrl: string;
};
</code></pre><p>And the <code>ImageAttr</code> to represent all the attributes for the image:</p><pre><code class="language-typescript">type ImageAttr = {
imageAlt: string;
width?: string
};
</code></pre><p>But the props expected all this information in the component. Intersection type for the rescue!</p><pre><code class="language-typescript">type ImageProps = ImageUrl &amp; ImageAttr;
</code></pre><p>Simple as that. So now, the component needs all these properties. The type looks like this:</p><pre><code class="language-typescript">type ImageProps = {
imageUrl: string;
imageAlt: string;
width?: string
};
</code></pre><p>And we can use this type this way:</p><pre><code class="language-typescript">const imageProps: ImageProps = {
imageUrl: 'www.image.com',
imageAlt: 'an image',
};
const imagePropsWithWidth: ImageProps = {
imageUrl: 'www.image.com',
imageAlt: 'an image',
width: '100%'
};
</code></pre><p>Nice! One more concept to reuse and compose types.</p><p>I also find the <code>Pick</code> type very interesting and useful. We have other <a href="https://leandrotk.github.io/tk/2020/05/typescript-learnings-interesting-types/index.html">interesting types</a> that we could write here, but the idea here is to understand that we can compose type and there is no limit to reuse types. If you're interested in study other types, take a look at this post I wrote: <a href="https://leandrotk.github.io/tk/2020/05/typescript-learnings-interesting-types/index.html">TypeScript Learnings: Interesting Types</a>.</p><h2 id="tooling">Tooling</h2><p>When you <code>npm install typescript</code>, you don't just get the compiler, you get the language service API, a standalone server called tsserver that editors can run to provide autocompletion, go-to, and other cool features.</p><p>These features are what some people from the TypeScript team call developer productivity tools like smart errors when type checking and IntelliSense (code completion, hover info, signature information). We look at these features throughout the whole article, but I want to make a special topic to talk about it.</p><p>The TypeScript type checker is powerful in the sense that it can infer types and provide information to some possible issues. Example: It inferred that the city is a string. And the <code>uppercase</code> is used the wrong way. As it knows it is a string, it also tries to find a possible method that the engineer is looking for.</p><pre><code class="language-typescript">const city = 'Tokyo';
city.toUppercase();
// Property 'toUppercase' does not exist on type
// 'string'. Did you mean 'toUpperCase'?
</code></pre><p>In this case, the compiler is really smart, because it finds exatcly what we wanted.</p><p>It also works for objects:</p><pre><code class="language-typescript">const people = [
{ name: 'TK', age: 24 },
{ name: 'Kaio', age: 12 },
{ name: 'Kazumi', age: 31 },
];
for (const person of people) {
console.log(person.agi);
// Property 'agi' does not exist on type '{ name: string; age: number; }'
}
</code></pre><p>With the static types, the tooling can provide a great developer experience with code completion, hover info to show defined types, and signature information for methods and other data.</p><p>If you type: <code>'TK'.</code>, the editor will show all the possible methods for the string object. The compiler knows it is a string. And it knows the methods from the <code>String</code> prototype. But it also provides the method signature. This is very interesting because we don't necessarily need to go to the docs. The "docs" is already in our code editor.</p><p>It's an awesome experience while coding.</p><p>The type definition "on hover" is another thing that we saw earlier in this article. Let the compiler infer the types implicitly and you won't lose the type documentation. Using the hover in the object, the IDE or editor will always be able to show the type definition.</p><p>Another interesting thing is that TypeScript will not only flag what could go wrong on runtime, but it also helps to find code that doesn't do what you intend.</p><p>Imagine we have a function to open a snackbar if it is still closed. It would verify the status of the snackbar. If it is closed, just call another function to open it.</p><pre><code class="language-typescript">const buildSnackbar = (status: SnackbarStatus) =&gt; {
if (status.isClosed) {
openSnackbar();
}
};
</code></pre><p>And the type information for this snackbar is:</p><pre><code class="language-typescript">type SnackbarStatus = {
isClosed: boolean;
};
</code></pre><p>What happens if I call this function like this:</p><pre><code class="language-typescript">buildSnackbar({ isclosed: true });
</code></pre><p>It won't break in runtime, because the <code>status</code> object has no <code>isClosed</code> attribute and the <code>undefined</code> object is a <code>falsy</code> value, so it will skip the if condition and not call the <code>openSnackbar</code> function. No runtime error. But probably it will behavior different than the expected.</p><p>In TypeScript, the compiler will give some hints to make it works properly. First it will show this error:</p><pre><code class="language-typescript">// Argument of type '{ isclosed: boolean; }' is not assignable to
// parameter of type 'SnackbarStatus'.
</code></pre><p><code>isclosed</code> with downcased <code>C</code> is not assignable to the type. It's not defined there. This is the first hint to make you correct your code.</p><p>The second is even better:</p><pre><code class="language-typescript">// Object literal may only specify known properties,
// but 'isclosed' does not exist in type 'SnackbarStatus'.
// Did you mean to write 'isClosed'?
</code></pre><p>It tells exactly what you probably need to do: rename the <code>isclosed</code> to <code>isClosed</code>.</p><p>We can talk a lot of things about the tooling about I think this is the main part.</p><p>My suggestion to learn more about this is to just code in TypeScript and "have a conversation" with the compiler. Read the errors. Play with the hover. See the autocompletion. Understand the method signatures. It's really a productive way to code.</p><h2 id="tips-learnings">Tips &amp; Learnings</h2><p>As the article is coming to an end, I want to just add some final thoughts, learnings, and tips to help you in your journey learning TypeScript or just applying it in your projects.</p><ul><li>Really read the type error: this will help you better understand the issue and the types.</li><li><code>strictNullChecks</code> and <code>noImplicitAny</code> can be very helpful in finding bugs. Enable this as soon as possible in your project. Use <code>strictNullChecks</code> to prevent “undefined is not an object”-style runtime errors. Use <code>noImplicitAny</code> to type the source code to give more type information for the compiler.</li><li>Together with the compiler's configurations, I always recommend being very precise about your types. Mainly with the values that occur only in runtime like an API response. Correctness is important to catch as many bugs as possible in compile time.</li><li>Understand the difference between runtime and compile time: types only affect in compile type. It runs the type checker and then compiles to JavaScript. The JavaScript source code doesn't use any type of references or type operations.</li><li>Learn about utility types. We talked more specifically about the <code>Readonly</code> in the immutability in compile time, but TypeScript has a box of helpers like <code>Required</code>, <code>Pick</code>, and many more.</li><li>If possible, prefer letting the compiler infers the types for you. Most of the types and returning types are redundant. The TypeScript compiler is very smart in this area. If not possible, you can always add type annotations. And leave the type assertions as the last option.</li><li>As you're writing code, take a look at the tooling. The design of the tooling provided in an IDE is amazing. The IntelliSense and type checking provide a really good experience.</li></ul><p>This post was originally published at <a href="https://leandrotk.github.io/tk/2020/07/a-mental-model-to-think-in-typescript/index.html">TK's blog</a>. And you can find more content like this in my blog at <a href="https://leandrotk.github.io/tk/">https://leandrotk.github.io/tk</a>.</p><p>You can also follow me on <a href="https://twitter.com/leandrotk_">Twitter</a> and <a href="https://github.com/leandrotk">GitHub</a>.</p><h1 id="resources">Resources</h1><p>I compiled (pun very much intended!) a bunch of resources to help you learn more about programming languages, type systems, and the type mental model.</p><p>Also, if you found the examples on this post useful, I added all of them this repository: <a href="https://github.com/leandrotk/thinking-in-types">Thinking in Types</a>. So you can fork and play with it.</p><h3 id="type-systems">Type Systems</h3><ul><li><a href="https://www.typescriptlang.org/docs/handbook/type-compatibility.html">Type Compatibility</a></li><li><a href="https://medium.com/@thejameskyle/type-systems-structural-vs-nominal-typing-explained-56511dd969f4">Type Systems: Structural vs. Nominal typing explained</a></li><li><a href="https://yakovfain.com/2018/07/11/learning-typescript-structural-vs-nominal-typing-system/">Learning TypeScript: Structural vs nominal typing systems</a></li><li><a href="https://www.youtube.com/watch?v=GqmsQeSzMdw&amp;feature=youtu.be">Constraints Liberate, Liberties Constrain — Runar Bjarnason</a></li><li><a href="https://www.no.lol/2019-12-27-type-narrowing/">Type Narrowing in TypeScript</a></li><li><a href="https://2ality.com/2020/06/type-guards-assertion-functions-typescript.html">TypeScript: narrowing types via type guards and assertion functions</a></li><li><a href="https://leandrotk.github.io/tk/2020/05/typescript-learnings-interesting-types/index.html">TypeScript Learnings: Interesting Types</a></li></ul><h3 id="tooling-developer-experience">Tooling &amp; Developer Experience</h3><ul><li><a href="https://www.youtube.com/watch?v=fnTEZk-oECM">Advanced TypeScript tooling at scale</a></li><li><a href="https://www.youtube.com/watch?v=4C4wCGcsiT0">Type Systems &amp; Props Design</a></li><li><a href="https://www.youtube.com/watch?v=wSdV1M7n4gQ">Anders Hejlsberg on Modern Compiler Construction</a></li><li><a href="https://www.youtube.com/watch?v=f6TCB61fDwY">TypeScript Compiler explained by the Author Anders Hejlsberg</a></li></ul><h3 id="compile-time-vs-runtime">Compile time vs Runtime</h3><ul><li><a href="https://stackoverflow.com/questions/846103/runtime-vs-compile-time">Compile time vs Runtime</a></li><li><a href="https://stackoverflow.com/questions/9471837/what-is-the-difference-between-run-time-error-and-compiler-error">Compile error vs Runtime error</a></li><li><a href="https://stackoverflow.com/a/51132333/3159162">Value space and Type space</a></li><li><a href="https://www.typescriptlang.org/play">A playground tool to play with TypeScript and see the JavaScript output</a></li></ul><h3 id="best-practices">Best Practices</h3><ul><li><a href="https://engineering.zalando.com/posts/2019/02/typescript-best-practices.html">TypeScript Best Practices</a></li><li><a href="https://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html">Do's and Don'ts for General Types</a></li></ul><h3 id="books">Books</h3><ul><li><a href="https://www.goodreads.com/book/show/48920810-programming-with-types">Programming with Types Book</a></li><li><a href="https://www.goodreads.com/book/show/48570456-effective-typescript">Effective TypeScript: 62 Specific Ways to Improve Your TypeScript Book</a></li><li><a href="https://thinkingwithtypes.com/">Thinking with Types</a></li></ul>
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
