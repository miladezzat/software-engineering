---
card: "https://cdn-media-1.freecodecamp.org/images/1*ypWl28F8NnBdxQaWIDm-YQ.jpeg"
tags: [JavaScript]
description: by Deepu K Sasidharan
author: "Milad E. Fahmy"
title: "Make your React components great with TypeScript mapped and conditional types"
created: "2021-08-15T19:40:06+02:00"
modified: "2021-08-15T19:40:06+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-typescript tag-react tag-tech tag-productivity ">
<header class="post-full-header">
<h1 class="post-full-title">Make your React components great with TypeScript mapped and conditional types</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*ypWl28F8NnBdxQaWIDm-YQ.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*ypWl28F8NnBdxQaWIDm-YQ.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*ypWl28F8NnBdxQaWIDm-YQ.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*ypWl28F8NnBdxQaWIDm-YQ.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*ypWl28F8NnBdxQaWIDm-YQ.jpeg" alt="Make your React components great with TypeScript mapped and conditional types">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Deepu K Sasidharan</p>
<h1 id="make-your-react-components-great-with-typescript-mapped-and-conditional-types">Make your React components great with TypeScript mapped and conditional types</h1>
<p>You’ve probably heard about TypeScript. You may have heard someone claiming how great type safety is.</p>
<p>TypeScript is great. As someone who hates transpiling his code, I would definitely do it with TypeScript if I had to. So much has been said about TypeScript, and there isn’t really anything new that I can add. But I do believe that type safety is not all about making your code ugly with type definitions everywhere. So how can we write type-safe code without having to litter type declarations everywhere?</p>
<p>Type inference and advanced features like derived and dynamic types are the answer. Editors and IDEs we use are smart enough to handle code with inferred type gracefully without us having to see the types all the time visually. (Of course, they all usually show you the type when you hover over an inferred type.)</p>
<p>TypeScript has a very good type inference. As a rule of thumb, you can always start without declaring the type for any variable and see if the compiler infers it. With modern editors like VSCode, you can see this immediately. So set your tsconfig to the strict mode. Then start declaring types when the compiler complains.</p>
<p>Additionally, TypeScript 2.1 and 2.8 introduced a bunch of cool lookup types. Now you can dynamically infer types using different techniques like Intersection types, Union types, Index types, mapped types and conditional types.</p>
<h3 id="index-types">Index types</h3>
<p>Index types enable us to check properties and types of an interface or type dynamically using the <code>keyof T</code> (<strong><strong>index type query operator) </strong></strong>and<code> T[K]</code>(<strong><strong>indexed access operator</strong></strong>). Let's take the below interface for example.</p><pre><code class="language-ts">interface Person {
name: string;
age: number;
address: string;
sayHi: (msg: string) =&gt; string;
}</code></pre>
<p>The <code>keyof T</code> operator gets a union type of all the key names of the type <code>T</code>and hence <code>keyof Person</code> will give us <code>'name' | 'age' | 'address' | sayHi'</code> as result.</p>
<p>The <code>T[K]</code> operator gets the type for the provided key. <code>Person['name']</code>will result in <code>string</code> and <code>Person[<em><em>keyof</em></em> Person]</code> will result in <code>string | number | ((msg: string) =&gt; string)</code>.</p>
<h3 id="mapped-types">Mapped types</h3>
<p>Let us see what mapped types are. Let us say we have the below interface for a Person.</p><pre><code class="language-ts">interface Person {
name: string;
age: number;
address: string;
sayHi: (msg: string) =&gt; string;
}</code></pre>
<p>Now in every project, it is almost always a common requirement to have variations of a certain interface. For example, let’s say we need a read-only version of the person as below.</p><pre><code class="language-ts">interface ReadonlyPerson {
readonly name: string;
readonly age: number;
readonly address: string;
readonly sayHi: (msg: string) =&gt; string;
}</code></pre>
<p>In this case, we would have to replicate the Person interface and we have to keep them in sync manually. This is where mapped types will come in handy, so let us use the builtin mapped type, <code>Readonly</code>, for this.</p><pre><code class="language-ts">type ReadonlyPerson  = Readonly&lt;Person&gt;</code></pre>
<p>If you hover over the <code>ReadonlyPerson</code> type you can see the inferred type as below.</p>
<figcaption>Inferred type view in VsCode</figcaption>
</figure>
<p>That is cool, right? Now we can create types from existing types and don’t have to worry about keeping them in sync. How does it work, what does <code>Readonly&lt;Person&gt;</code> do? Let’s take a look at the mapped type.</p><pre><code class="language-ts">type Readonly&lt;T&gt; = {
readonly [K in keyof T]: T[K];
}</code></pre>
<p>The <code>in</code> operator from TypeScript does the trick here. It maps all the declarations of the existing type into the new type. The <code>keyof</code> operator provides the keys from our type for the mapping. Let us build our own mapped type.</p>
<p>Let us say we need a read-only Person interface where all the fields are nullable as well. We can build a mapped type as below for that.</p><pre><code class="language-ts">type ReadonlyNullablePerson = {
readonly [P in keyof Person]: Person[P] | null;
}</code></pre>
<p>Let’s make it generic so that it can be used with any interface.</p><pre><code class="language-ts">type ReadonlyNullable&lt;T&gt; = {
readonly [K in keyof T]: T[K] | null;
}
type ReadonlyNullablePerson  = ReadonlyNullable&lt;Person&gt;</code></pre>
<p>TypeScript includes <code>Readonly&lt;T&gt;</code>, <code>Partial&lt;T&gt;</code>, <code>Pick&lt;T, K extends keyof T&gt;</code> and <code>Record&lt;K extends string, T&gt;</code> as built-in mapped types. Pick and Record can be used as below, check them in your editor to see what types they produce.</p><pre><code class="language-ts">type PersonMinimal = Pick&lt;Person, 'name' | 'age'&gt;
type RecordedPerson = Record&lt;'name' | 'address', string&gt;</code></pre>
<p>For every other use case, you can build your own mapped types.</p>
<h3 id="conditional-types">Conditional types</h3>
<blockquote>A conditional type selects one of two possible types based on a condition expressed as a type relationship test.</blockquote>
<p>Let us look at an example.</p><pre><code class="language-ts">type Foo&lt;T, U&gt; = T extends U ? string : boolean
interface Me {}
interface You extends Person {}
type FooBool = Foo&lt;Me, Person&gt; // will result in boolean
type FooString = Foo&lt;You, Person&gt; // will result in string</code></pre>
<p>The type dynamically inferred from <code>Foo&lt;T, U&gt;</code> will be either <code>string</code> or <code>boolean</code> depending on what the first generic is extended from.</p>
<p>Let us see how we can mix conditional types with mapped types to infer a new type from Person which only includes the non-function properties.</p><pre><code class="language-ts">type NonFunctionPropNames&lt;T&gt; = {
[K in keyof T]: T[K] extends Function ? never : K
}[keyof T];
type NonFunctionProps&lt;T&gt; = Pick&lt;T, NonFunctionPropNames&lt;T&gt;&gt;
type PersonProps = NonFunctionProps&lt;Person&gt;
// Produces the below type
// type PersonProps = {
//     name: string;
//     age: number;
//     address: string;
// }</code></pre>
<p>We first get all the non-function property names from the interface. Then use the <strong><strong>Pick</strong></strong> mapped type to pick those from the interface to form the new interface.</p>
<p>TypeScript provides following inbuilt conditional types:</p>
<ul>
<li><code>Exclude&lt;T, U&gt;</code> – Exclude from <code>T</code> those types that are assignable to <code>U</code>.</li>
<li><code>Extract&lt;T, U&gt;</code> – Extract from <code>T</code> those types that are assignable to <code>U</code>.</li>
<li><code>NonNullable&lt;T&gt;</code> – Exclude <code>null</code> and <code>undefined</code> from <code>T</code>.</li>
<li><code>ReturnType&lt;T&gt;</code> – Obtain the return type of a function type.</li>
<li><code>InstanceType&lt;T&gt;</code> – Obtain the instance type of a constructor function type.</li>
</ul>
<h3 id="let-us-put-it-into-use">Let us put it into use</h3>
<p>These advanced types become even more powerful when you combine them together. Let’s see some practical uses of this in React.</p>
<h4 id="react-component-and-redux-reducer-in-es6">React component and Redux reducer in ES6</h4>
<p>Let see a simple React component with a reducer written in ES6. Take a look at <strong><em>index.jsx</em></strong> in the below code sandbox:</p>
<p>As you can see, we use the prop-types library to define the component props. It is not the most efficient way, as it includes considerable overhead during development. It doesn’t provide full type safety anyway.</p>
<h4 id="react-component-and-redux-reducer-in-typescript">React component and Redux reducer in TypeScript</h4>
<p>Now let us convert this simple example to TypeScript so that it's type safe. Take a look at <strong><em>index.tsx</em></strong> in the below code sandbox:</p>
<p>As you can see, the code is more type-safe now. It is also much more verbose even without PropTypes library and all the type inference.</p>
<h4 id="react-component-and-redux-reducer-in-typescript-with-advanced-types">React component and Redux reducer in TypeScript with advanced types</h4>
<p>Now let us apply the advanced types that we learned to make this example less verbose and even more type safe. Take a look at <strong><em>index.tsx</em></strong> in the below code sandbox:</p>
<p>As you can see, we used <code>Readonly</code> and <code>ReturnType</code> mapping along with some other type inference techniques to write a more type-safe but less verbose version of the component.</p>
<h3 id="conclusion">Conclusion</h3>
<p>If you are using React with TypeScript, then these are some of the techniques you must apply. If you are considering a type system for React, then look no further than TypeScript. It has great features, great tooling, excellent IDE/Editor support and an awesome community.</p>
<p>I gave a talk on TypeScript for Devoxx 2018, and you can see the video and slides if you like here.</p>
<figcaption>“TypeScript: Why you should love it!” Video from Devoxx 2018</figcaption>
</figure>
</figure>
<p>Check out my book “<em>Full Stack Development with JHipster</em>” on <a href="https://www.amazon.com/Stack-Development-JHipster-Deepu-Sasidharan/dp/178847631X" rel="noopener">Amazon</a> and <a href="https://www.packtpub.com/application-development/full-stack-development-jhipster" rel="noopener">Packt</a> if you like to learn about Full stack development with an awesome stack.</p>
<p>If you like JHipster don’t forget to give it a star on <a href="https://github.com/jhipster/generator-jhipster" rel="noopener">Github</a>.</p>
<p>If you like this article, please leave some claps (Did you know that you can clap multiple times? ? )</p>
<p>You can follow me on <a href="https://twitter.com/deepu105" rel="noopener">Twitter</a> and <a href="https://www.linkedin.com/in/deepu05/" rel="noopener">LinkedIn</a>.</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
