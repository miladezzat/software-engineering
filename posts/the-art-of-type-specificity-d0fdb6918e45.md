---
card: "https://cdn-media-1.freecodecamp.org/images/1*KpUxhS8eOuejt0oaNggepQ.jpeg"
tags: [Programming]
description: Do more specific definitions result in less flexibility?
author: "Milad E. Fahmy"
title: "How to Master the Art of Type Specificity"
created: "2021-08-15T19:50:16+02:00"
modified: "2021-08-15T19:50:16+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-programming tag-database tag-javascript tag-best-practices tag-tech ">
<header class="post-full-header">
<h1 class="post-full-title">How to Master the Art of Type Specificity</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*KpUxhS8eOuejt0oaNggepQ.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*KpUxhS8eOuejt0oaNggepQ.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*KpUxhS8eOuejt0oaNggepQ.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*KpUxhS8eOuejt0oaNggepQ.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*KpUxhS8eOuejt0oaNggepQ.jpeg" alt="How to Master the Art of Type Specificity">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p><em>Do more specific definitions result in less flexibility?</em></p>
<p>In this post I will try to avoid the debate about <strong>strong/static</strong> vs. <strong>weak/dynamic</strong> types (what more could possibly be said?), or even <strong>schema</strong> vs. <strong>schema less</strong> data structures. Instead, I want to focus on the degree of granularity of type definitions: what are the effects and trade-offs?</p>
<p>On the one end of the spectrum, very generic definitions encompass <strong>potential</strong> properties and behavior of objects. On the other end, you have a rich hierarchy of types, of which some are only subtly different from some other.</p>
<p>I will touch upon duck typing, SQL table-per-type (TPT) and table-per-type-hierarchy (TPH) concepts, and parameterized APIs.</p>
<p>When you think of generic types you might think of the Document Object Model (DOM), schemaless XML or YAML, literal objects in JavaScript, or NoSQL database documents. These are broadly generic, in that there are minimal constraints on structure, relations, and content.</p>
<p>Instead, let’s discuss user-defined types. They may or may not be enforced by the program language or a schema, but there will be constraints, assumed or otherwise, in the code that deals with them. Let’s use <strong>Vehicle </strong>as an analogy.</p>
<h3 id="vehicle">Vehicle</h3>
<p>A vehicle is a broad concept. Even if we confine discussion to wheeled vehicles, that covers everything from tricycles to semi-trucks. Could you encompass the spectrum of properties and behaviors of those tricycles, cars, and semis in one type? Yeah, you <strong>could</strong>. Clearly, that’s going to present some problems when handling Vehicle instances in the program code.</p>
<h4 id="the-vehicle-type">The Vehicle Type</h4>
<p>Possible properties and methods of a Vehicle:</p>
<ul>
<li>tires<br>* number<br>* type [pneumatic, other]</li>
<li>seats<br>* number<br>* padded [boolean]</li>
<li>steering [wheel, handlebars]</li>
<li>engine <br>* type [none, gas, diesel]<br>* number of cylinders [only if type is gas or diesel]</li>
<li>drive()</li>
<li>fuel()</li>
<li>lights[on|high|off]</li>
</ul>
<p>With even this minimal set of properties, the Vehicle type covers a huge domain and presents some challenges, data integrity being one of them. If my Vehicle is a trike, I don’t have an engine. If I don’t have an engine, the property <code>number of cylinders<em><em> </em></em></code>is meaningless. If I have a trike with no engine, but <code>number of cylinders &gt; 0</code>, is that an error?</p>
<p>I can fuel a car or truck, but not a tricycle. What happens if <code>fuel()</code> is called on a tricycle instance? Throw an Error? It is possible that some application logic is confused, but can the request be handled gracefully as a no-op?</p>
<p>The one perceived advantage to Vehicle is that it is flexible. If we instead split up Vehicle into subclasses <strong>MotorVehicle</strong> and <strong>PedalVehicle</strong>, we might put the following in MotorVehicle but not PedalVehicle:</p>
<ul>
<li>steering [wheel]</li>
<li>engine <br>* type [gas, diesel]<br>* number of cylinders</li>
<li>fuel()</li>
<li>lights[on|high|off]</li>
</ul>
<p>This seemingly makes sense. It is conceivable, though, that a tricycle has lights. It may not have an gas or diesel engine (not a kid’s trike, anyway), but it <em>could</em> have an electric engine. If these cases arise, then there’s some refactoring to do.</p>
<p>In some languages or data management systems, you can define interfaces, and compose concrete types that fulfill those interfaces. So, you might have IEnginedVehicle, which might have related interfaces IElectricVehicle and InternalCumbustionVehicle (which in turn might be broken down into IGasVehicle and IDieselVehicle).</p>
<p>Interfaces are cheap to define, and good at annotation concepts, but they’re not a complete solution. Some interfaces can be incompatible with others: can a truck be both an ice cream truck and a pizza delivery truck? I suppose, if you want cold pizza or warm ice cream.</p>
<p>Aside from that, more specificity boxes you in, and requires you to have some foreknowledge of the all types of vehicles you will encounter.</p>
<p>It’s the <strong>exceptions</strong> that are going to get you as time marches on.</p>
<p>For this reason, especially when the domain is broad and in flux, it can be tempting to define vehicle entities less specifically, initially. You want to be open to anything that comes down the pike (pardon the pun).</p>
<h4 id="coding-against-generic-types">Coding against generic types</h4>
<p>On the coding side, there can be no assumptions about what Vehicle is. You must check every property for existence. Methods that exist may be meaningless for the specific entity that is represented by Vehicle. Your best bet is to have your code assume nothing. That makes testing a challenge, though. How can you possibly encompass all reasonable Vehicle configurations in your tests?</p>
<p>On the other hand, you have a pretty flexible system; that is, if no assumptions creep into your code (more about this in “<strong>Why a duck</strong>?”).</p>
<p>Too much specificity requires constant adjustments to the type model, including decisions of what the taxonomy of inheritance is, what property goes at what level, and potential difficulty in changes to the model when they affect not just code at the data layer, but the presentation layer as well. If you get it way wrong (due to rushed analysis), you have a lot of continuous rework.</p>
<h4 id="types-and-their-properties">Types and their properties</h4>
<p>If you buy a <a href="https://mcphee.com/products/super-awesome-surprise-box" rel="noopener">grab box of stuff</a> from an online novelty store, you can expect a box. You have a vague idea of what it contains, but you won’t know until you open it and sort out each item one-by-one. The burden is on you, the client, and there are limited assumptions you can make (one might hope for a rubber chicken, but no guarantee!).</p>
<p>A first aid kit has a narrower range of possibilities as to what it contains. It’s a more specific type of object, and you can make assumptions as to its content and proceed accordingly. It’s going to contain gauze and bandages. It will have antiseptic, and probably pain relievers. For stuff that it <strong>might</strong> contain, you at least have a better idea what to look for.</p>
<h3 id="why-a-duck">Why a duck?</h3>
<p>Duck typing operates by incidence rather than declaration. Program logic revolves around interrogation of an object: “By the way, do you have property A? Do you have method B?…”.</p>
<p>Actions are performed based on responses to the interrogation. If it walks like a duck, quacks like a duck and has feathers, then it is probably a duck. Logic that is based on duck typing really doesn’t care, duck or no, because it assumes nothing; it operates on what it finds.</p>
<p>Yet assumptions will creep into any software logic that thinks it’s getting what it expects. Perhaps as much as 50% of software maintenance involves fixing incorrect assumptions or refining the ones that are there.</p>
<h4 id="duck-typing-and-the-first-responder"><strong>Duck typing and the first responder</strong></h4>
<p>Say I have a fire in my kitchen and call an emergency number. The first responder has a badge, helmet, and arrives in a vehicle with siren and flashing lights. Yay! The fireman! My house is saved. I command, pointing to the kitchen: “Put out that fire!”</p>
<p>The policeman looks at me quizzically.</p>
<p>I did all my duck typing interrogation, but reached the wrong assumption. Maybe the city recently decided policemen should respond to fire alarms if nearby, to aid the firemen.</p>
<p>I now have to add to my list of questions: “Do you put out fires?”</p>
<h4 id="of-properties-discriminators-and-named-types">Of properties, discriminators, and named types</h4>
<p>Duck typing is extremely flexible, but your code must deal with each object as if it could be anything. Instead of interrogating all properties, though, you can add a special <strong>discriminator</strong> property that identifies the type of object your code is receiving. One interrogation, and you're off to the races. Of course, the object has to have the correct discriminator value.</p>
<p>A named type is less likely to cause you problems, as types are assigned at object creation. In a weakly typed language, such as Javascript, things may not be as they seem, but you’re somewhat safer assuming.</p>
<p>Still, discriminators or types don’t really address the problem of specificity. The good old Object type doesn’t say much about its instances. It is a type, it does make some guarantees, but doesn’t do much by itself.</p>
<p>You can pass an object literal to a method, but the method must either 1) assume what it is getting, or 2) be prepared to find out.</p>
<p>Maintaining code that handles generic types can be an exercise in aggravation: while you can see what the client code <em>might </em>do, to know what it <em>will </em>do requires the specifics of the data it is handling.</p>
<p>A debugger helps, but if your breakpoint is buried far down in the call stack, or is in response to a callback, good luck! You may have some heavy excavating to do to know how you got where you are, logic-wise.</p>
<h3 id="table-per-type-and-table-per-type-hierarchy">Table-per-Type and Table-per-Type-Hierarchy</h3>
<p>Relational databases run into this issue as well. If a table represents a type of thing, <a href="http://blog.devart.com/table-per-type-vs-table-per-hierarchy-inheritance.html" rel="noopener">are all rows in the table type-homogenous</a>? Or could each row reflect a more specific type, and the table represents a supertype of those things?</p>
<p>In the first case (table-per-type, or TPT), each column in each row is guaranteed to contain a valid value (NULL may be valid). Your code can anticipate query results that are consistent in their uniformity.</p>
<p>In the second case, some columns or column values may be valid for some types (rows) but not for others. This is table-per-type-hierarchy, or TPH.</p>
<p>A TPH table is a loosely defined type. The integrity of column values in each row is up to program logic. If I have a table called Vehicle containing data for all vehicles in my domain, then the column “oil weight” isn’t going to be applicable for rows representing tricycles.</p>
<p>The burden is now on the client code to understand the various possible types of vehicles in the Vehicle table, and perform logic accordingly. This is very similar to the case of a duck typed object, where properties may or may not be applicable for each instance of the generic type.</p>
<h3 id="schema-anyone">Schema, anyone?</h3>
<p>Does a schema (or other type system) take care of this problem? Well, no. As just shown, a TPH schema in a relational database can represent a super-type entity, but the rows may each define more specific entities. A discriminator column value can help sort out the subtype of each row, but it has to be checked in program logic.</p>
<p>The main benefit of using TPH is avoiding a huge schema with many tables, and lessening the number of joins required to pull together data for a type instance. There are always trade-offs to any approach.</p>
<h3 id="parameter-lists-and-options">Parameter lists and options</h3>
<p>Method parameters are another issue. The most common case is where parameter type is defined by order of occurrence:</p><pre><code class="language-js">function circle(int x, int y, double radius){…}</code></pre>
<p>or</p><pre><code class="language-js">function circle(Position xy, double radius){…}</code></pre>
<p>Arguments defined this way are locked-in: you can’t pass a boolean to radius, for instance. In JavaScript, there are no typed parameters, so most functions assume the type based on order of occurrence.</p>
<p>Not only is the type of parameter known (by declaration) or assumed (by convention), the number of parameters dictates how the method is called.</p>
<p>I always feel a slight annoyance whenever I want to dump some formatted JSON to the console, and have to type <code>JSON.stringify(obj, <strong>null</strong>, 4)</code>. That second argument, which is seldom used, is for the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify" rel="noopener">replacer</a> parameter.</p>
<h4 id="options"><strong>Options</strong></h4>
<p>In JavaScript, you can pass an object literal as an argument, and this is often used as a named parameter list. Named parameters are more flexible than an argument list, and for more complex methods they can be very useful.</p><pre><code class="language-js">function circle(options) {
const {x, y, radius, ...rest} = options;
if (rest.linewidth) {...}
if (rest.fillColor) {...}
...
}</code></pre>
<p>Flexible, yes, but a lot of interrogation. Plus, the arguments <code>x, y</code>, and <code>radius</code> are assumed to be there. Best practice seems to be to mix the type-specific parameter list with the more “generic” object literal:</p><pre><code class="language-js">function circle(x, y, radius, options){...}</code></pre>
<p>Where options is typically understood to refer to an <a href="https://lodash.com/docs/4.17.4#debounce" rel="noopener">object whose properties are documented</a>.</p>
<h3 id="what-to-do">What to do?</h3>
<p>Few practices in software are wholly good or bad (GOTO being the exception[<a href="http://echochamber.me/viewtopic.php?t=43199" rel="noopener">?</a>]). A rigid, type-rich system will no doubt prevent some coding errors, even if those types are not strongly enforced by the language or database. Code that uses specific types is more readable.</p>
<p>On the other hand, a stringent type hierarchy represents metadata that has to be maintained, and oftentimes the client knows what it is requesting and knows what it will receive. Dotting every “i” and crossing every “t” just for the sake of data transfer between two internal methods at times seems like bookkeeping work.</p>
<p>There is no right answer, and most programmers use types of varying (or no) specificity. A lot depends on the domain. If you’re writing code for a financial system, it would seem you’d want a rich and rigid set of type definitions; however, I understand some financial systems are <a href="https://en.wikipedia.org/wiki/MUMPS#Current_users_of_MUMPS_applications" rel="noopener">written in MUMPS</a>, so what do I know?</p>
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
