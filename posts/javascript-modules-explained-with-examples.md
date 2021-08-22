---
card: "/images/default.jpg"
tags: [JavaScript]
description: "A module is a function or group of similar functions. They are grouped together within a file and contain the code to execute a specific task when called into a larger application."
author: "Milad E. Fahmy"
title: "JavaScript Modules – Explained with Examples"
created: "2021-08-15T19:15:57+02:00"
modified: "2021-08-15T19:15:57+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-modules tag-web-development ">
<header class="post-full-header">
<h1 class="post-full-title">JavaScript Modules – Explained with Examples</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2021/07/what-is-a-module.png 300w,
/news/content/images/size/w600/2021/07/what-is-a-module.png 600w,
/news/content/images/size/w1000/2021/07/what-is-a-module.png 1000w,
/news/content/images/size/w2000/2021/07/what-is-a-module.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2021/07/what-is-a-module.png" alt="JavaScript Modules – Explained with Examples">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>A module is a function or group of similar functions. They are grouped together within a file and contain the code to execute a specific task when called into a larger application.</p>
<p>You create modules to better organize and structure your codebase. You can use them to break down large programs into smaller, more manageable, and more independent chunks of code which carry out a single or a couple of related tasks.</p>
<p>Modules should be:</p>
<ol>
<li><strong>Independent/Self-contained:</strong> A module has to be as detached from other dependencies as possible.</li>
<li><strong>Specific:</strong> A module needs to be able to perform a single or a related group of tasks. The core essence of creating them in the first place is to create separate functionalities. One module, one (kind of) task.</li>
<li><strong>Reusable:</strong> A module has to be easy to integrate into various kinds of programs to perform its task.</li>
</ol>
<p>To better explain, let me give you an analogy:</p>
<p>Suppose we want to build a huge house from the ground up. All the tools we need to set up the building are all pilled up within just one room.</p>
<p>In such a situation, organizing the tools in the right way so we can start building would be difficult.</p>
<p>Instead of having the separate dependencies pilled up in just one room, we should instead organize each set of related tools and group them into different rooms. Each room is independent and self-contained with its tools solving specific tasks.</p>
<p>We could put up labels like: <strong>"these tools are for roofing",</strong> "<strong>these tools are for brick laying</strong>", "<strong>these tools are for foundation digging</strong>" and so on.</p>
<p>Whenever we want a tool to carry out a particular task, we know in which room exactly to find it. That way, everything is much more organized and locatable.</p>
<p>Also, say we are done building the house and then decide to build something different. We will still have at our disposal the same set of tools. This enforces the principle of <strong>reusability</strong>. Modules are reusable because they are self-contained.</p>
<h2 id="example-of-a-module">Example of a Module</h2>
<p>Now in the context of code, modules are very important.</p>
<p>Let's consider a simplified illustration of this with an e-commerce application which allows people and businesses to sell products online. This program will typically be composed of two or more unrelated tasks. For example, </p>
<ul>
<li>a program for creating an account, </li>
<li>a program to validate the information, </li>
<li>another program to process payments</li>
<li>another program to calculate the user ratings </li>
</ul>
<p>and so on.</p>
<p>Instead of having all of those unrelated programs together in one module/file, it is a better practice to create several files, or modules, for each of those tasks. In such a case, the modules become dependencies.</p>
<p>Then from the main app or program, you simply import/load the dependencies (i.e the modules you need) and execute them accordingly. As a result, your main app becomes cleaner and more minimal.</p>
<figcaption>main.js has been broken down into four modules</figcaption>
</figure>
<p>Assuming you need to process payments in some other application in the codebase, for example, it becomes very easy to reuse the same functionality. No need to copy and paste or code a new function from scratch.</p>
<h2 id="javascript-modules">JavaScript Modules</h2>
<p>A module in JavaScript is just a file containing related code.</p>
<p>In JavaScript, we use the <code>import</code> and <code>export</code> keywords to share and receive functionalities respectively across different modules.</p>
<ul>
<li>The <code>export</code> keyword is used to make a variable, function, class or object &nbsp;accessible to other modules. In other words, it becomes a public code.</li>
<li>The <code>import</code> keyword is used to bring in public code from another module.</li>
</ul>
<p>Let's look at a simple example of this:</p>
return 10 ** decimalPlaces;
}
function capitalize(word) {
return word[0].toUpperCase() + word.slice(1);
}
function roundToDecimalPlace(number, decimalPlaces = 2) {
const round = getPower(decimalPlaces);
return Math.round(number * round) / round;
}
export { capitalize, roundToDecimalPlace };</code></pre>
<figcaption>filepath/main.js</figcaption>
</figure>
<p>This module has three functions defined in it: </p>
<ul>
<li><code>getPower</code>: This function gets the power of a number</li>
<li><code>capitalize</code>: This function capitalizes the first letter in a word</li>
<li><code>roundToDecimalPlace</code>: This function rounds a given number to a specified number of decimal places.</li>
</ul>
<p>At the end of the file, you can see that two of the three functions were exported. In other words, they became public functions which could be used by any other script. </p>
<p>To export two functions out of the three, you use the <code>export</code> keyword, followed by an object containing the functions you want to make accessible. Once you do this, the functions can be accessed by any program within that codebase which require them. </p>
<p>Let's take a look at how we can use them:</p>
function displayTotal(name, total) {
return `${capitalize(name)}, your total cost is: ${roundToDecimalPlace(total)}`;
}
displayTotal('kingsley', 20.4444444);
// "Kingsley, your total cost is: 20.44"
export { displayTotal };</code></pre>
<figcaption>filepath/displayTotal.js</figcaption>
</figure>
<p>The <code>displayTotal.js</code> module does not have <code>capitalize()</code> and <code>roundToDecimalPlace()</code> but wants to use the capitalize and round-to-decimal-place functionality. So how did we bring it in? With <code>import</code>!</p>
<p>We did this by using the <code>import</code> keyword followed by the name of the functions we want to import from the module, which in our case are <code>capitalize</code> and <code>roundToDecimalPlace</code>.</p>
<p>What if you only wanted to import the <code>capitalize</code> function into your program?</p>
<p>Simple – import only <code>capitalize()</code>, like so:</p><pre><code class="language-js">import { capitalize } from './main';
function warn(name) {
return `I am warning you, ${capitalize(name)}!`;
}
warn('kingsley');
// I am warning you, Kingsley!
export { warn };</code></pre>
<blockquote>N/B: Understanding how file structuring works is very important when working with modules. In the above example, we are simply importing from a file which exists in the same directory, which is why we use the notation <code>'./import'</code>.</blockquote>
<p>If you want to import every public function from another module, use the asterisk <code>*</code> keyword:</p>
function warn(name) {
return `I am warning you, ${mainfunctions.capitalize(name)}!`;
}
warn('kingsley');
// I am warning you, Kingsley!
export { warn };</code></pre>
<figcaption>filepath/warn.js</figcaption>
</figure>
<blockquote><strong>TIP</strong>: If you're importing everything from a module, you should use the asterisk instead of explicitly spelling out all the functions one-by-one.</blockquote>
<p>You may have noticed the <code>as</code> keyword. We use this to import the public functions into a new object, which in our case is the <code>mainfunctions</code> object. We then access and call the functions we want to use in our program.</p>
<p>So far, we have only considered examples where the export happens at the end of the file. But you can equally export a function, variable, or class by registering the <code>export</code> keyword just in front of its definition, like so:</p>
return 10 ** decimalPlaces;
}
export function capitalize(word) {
return word[0].toUpperCase() + word.slice(1);
}
export function roundToDecimalPlace(number, decimalPlaces = 2) {
const round = getPower(decimalPlaces);
return Math.round(number * round) / round;
}</code></pre>
<figcaption>filepath/anothermain.js</figcaption>
</figure>
<p>If you compare this with the first example, you will notice this syntactic difference:</p>
<ul>
<li>In the first example, the <code>export</code> keyword was used to export two functions at the end of the script. In the above example, the <code>export</code> keyword is attached to both functions when they are being defined.</li>
</ul>
<p>However, they both deliver the same outcome: <code>capitalize</code> and <code>roundToDecimalPlace</code> will both get exported.</p>
<h2 id="default-exports">Default Exports</h2>
<p>If you want to export all three functions but intend to make one of them a default (perhaps because you are most likely to use that single function), you simply use the <code>default</code> keyword.</p>
<p>The default keyword makes importing a function easier. Let's consider the following example:</p>
return 10 ** decimalPlaces;
}
export default function capitalize(word) {
return word[0].toUpperCase() + word.slice(1);
}
export function roundToDecimalPlace(number, decimalPlaces = 2) {
const round = getPower(decimalPlaces);
return Math.round(number * round) / round;
}</code></pre>
<figcaption>filepath/default.js</figcaption>
</figure>
<p>As you can see, we have made <code>capitalize</code> our default function. This essentially means we have given it some sort of privilege.</p>
<p>Say we want to import the <code>capitalize</code> function from the module into another program. The syntax for that will be very similar, except you don't have to import the function into curly braces:</p>
function warn(name) {
return `I am warning you, ${capitalize(name)}!`;
}
warn('kingsley');
// I am warning you, Kingsley!
export { warn };</code></pre>
<figcaption>filepath/warndefault.js</figcaption>
</figure>
<p>If you want to import the default function along with any other functions, you mix the bare 'default' function with other functions in curly braces:</p>
function warn(name) {
return `I am warning you, ${capitalize(name)}!`;
}
warn('kingsley');
// I am warning you, Kingsley!
export { warn };</code></pre>
<figcaption>filepath/mixed.js</figcaption>
</figure>
<h2 id="wrapping-up">Wrapping Up</h2>
<p>Modules are independent and self-contained chunks of code. You create them by splitting up a larger program into logical parts or dependencies.</p>
<p>Modules should be independent, specialized, and reusable.</p>
<p>You use the <code>import</code> and <code>export</code> keywords to interchange functionalities between modules in JavaScript.</p>
<p>You use the <code>default</code> keyword to specify a function, object, variable, or class that you want to be a first-choice import.</p>
<p>With this, we have covered the basics of modules in JavaScript. </p>
<p>I hope you got something valuable from this article. I write programming-related articles every week on my <a href="https://ubahthebuilder.tech">personal blog</a> </p>
<p>Thank you for reading.</p>
<blockquote><strong>P/S</strong>: If you are learning JavaScript, I created an eBook which teaches 50 topics in JavaScript with hand-drawn digital notes. <a href="https://ubahthebuilder.gumroad.com/l/js-50">Check it out here</a>.</blockquote>
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
