---
card: "https://s3.amazonaws.com/cdn-media-1.freecodecamp.org/ghost/2019/05/1_pc1Xhd_TAV9H8u8b-ogLPw.png"
tags: [JavaScript]
description: By Fabian Hinsenkamp
author: "Milad E. Fahmy"
title: "Discover the power of closures in VueJS"
created: "2021-08-15T19:34:29+02:00"
modified: "2021-08-15T19:34:29+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-programming tag-vuejs tag-front-end-development tag-tech ">
<header class="post-full-header">
<h1 class="post-full-title">Discover the power of closures in VueJS</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://s3.amazonaws.com/cdn-media-1.freecodecamp.org/ghost/2019/05/1_pc1Xhd_TAV9H8u8b-ogLPw.png 300w,
https://s3.amazonaws.com/cdn-media-1.freecodecamp.org/ghost/2019/05/1_pc1Xhd_TAV9H8u8b-ogLPw.png 600w,
https://s3.amazonaws.com/cdn-media-1.freecodecamp.org/ghost/2019/05/1_pc1Xhd_TAV9H8u8b-ogLPw.png 1000w,
https://s3.amazonaws.com/cdn-media-1.freecodecamp.org/ghost/2019/05/1_pc1Xhd_TAV9H8u8b-ogLPw.png 2000w">
<img onerror="this.style.display='none'" src="https://s3.amazonaws.com/cdn-media-1.freecodecamp.org/ghost/2019/05/1_pc1Xhd_TAV9H8u8b-ogLPw.png" alt="Discover the power of closures in VueJS">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>By Fabian Hinsenkamp</p>
<p>Today’s frontend technology landscape requires engineers to know about a wide variety of technologies including frameworks, libraries and packages.</p>
<p>No wonder then that vanilla JavaScript skills and in-depth knowledge might start spreading thin. No matter if you are just learning JavaScript, refreshing your basic knowledge or preparing for job interviews → This tutorial is for you!</p>
<p>Here you will learn how powerful plain JavaScript closures are. Be aware, this tutorial comes with a challenge. ? It’s all about building an elegant Emoji Picker in VueJS and leveraging closures by using higher order functions.</p>
<p><strong><strong>Let’s dive right into it!</strong></strong></p>
<h3 id="function-scope">Function Scope</h3>
<p>Even though closures are one of the most powerful concepts in JavaScript, they are easily overlooked by many.</p>
<p>Nevertheless, knowing about closures is fundamental as they define which variables a function has access to during its execution. More precisely, closures define which scopes a function has access to starting from its own, through all parent scopes up to the global scope.</p>
<p>To really master closures, it’s essential to have a solid understanding of scopes first. You have probably already experienced the impact of scopes yourself. Every time you execute a function, a scope is created. Whenever you create variables within that function, these are only accessible from within the function itself.</p>
<p>At the time a function is completed (by reaching a <code>return</code> statement or <code>}</code> ) all these variables are destroyed. Next time you execute the function, the same procedure is applied.</p>
<p>Let’s look at the following example to illustrate the concept.</p><pre><code>function square(x){
const squaredX = x  x;
console.log(squaredX); // 25
return squaredX;
}
const squaredA = square(5);
console.log(squaredA); // 25
console.log(squaredX); // ReferenceError: squaredX is not defined</code></pre>
<p>Think about scopes as the temporary context only the code within that function has access to.</p>
<p>While scopes have a very limited lifetime, limited by the time a function execution needs to execute, in contrast a function’s closure is already created when a function is initially defined. It also will remain after the execution has been completed.</p>
<h3 id="closures">Closures</h3>
<p>As mentioned before, closures are responsible for defining which variables are accessible in the scope of a function execution. It’s essential to understand that closures do not provide copies of available variables but references to them. If you are not familiar with JavaScript’s references check out this <a href="https://codeburst.io/explaining-value-vs-reference-in-javascript-647a975e12a0" rel="noopener">article</a>.</p><pre><code>let globalString = 'A'
function hello(){
const localString = 'C'
console.log(globalString, localString);
}
hello(); // A C
globalString = "B";
hello(); // B C</code></pre>
<p>The example looks probably very familiar — it’s not anything special. This explains why we barely realise how powerful closures can be, as it’s very common to only define functions in the global scope.</p>
<p>However, when functions are defined within another function’s scope, closures enable powerful techniques and patterns. In an object-oriented architecture, closures offer a simple but efficient way to establish <strong><strong>data privacy</strong></strong>. In more functional architectures, closures are essential to <strong><strong>higher order functions</strong></strong> and <strong><strong>partial application</strong></strong> and <strong><strong>currying</strong></strong>, two more advanced programming techniques.</p>
<h3 id="higher-order-functions">Higher Order Functions</h3>
<p>A function that operates on other functions, either by taking them as arguments or by returning them, is called a <strong><strong>higher-order function</strong></strong>.</p><pre><code>function createMultiplier(multiplier){
return function(value){
return value  multiplier;
}
}
const multiplyBy2 = createMultiplier(2);
console.log(multiplyBy2(5)); //10</code></pre>
<p>Here we finally can experience the power of closures. Even though <code>createMultiplier</code> has been already successfully completed, we can still access its initial <code>multiplier</code> property.</p>
<p>This is possible as closures keep the reference of variables. These can even span over multiple scopes and do not get destroyed when the context terminates. That way, we can still access a specific instance of a local variable.</p>
<h3 id="data-privacy">Data Privacy</h3><pre><code>function privateVariables(){
let privateValue = 100;
return {
get: function(){
return privateValue;
}
}
}
console.log(privateVariables.get()); //100</code></pre>
<p>How come closures enable us to implement data privacy?</p>
<p>We can simply enclose variables and only allow functions within the containing (outer) function scope to access them.</p>
<p>You can’t get at the data from an outside scope except through the object’s privileged methods. This pattern also allows us to program to an interface and not the implementation itself.</p>
<h3 id="coding-challenge-emoji-tone-picker">Coding Challenge: Emoji Tone Picker</h3>
<p>Great, that’s all the theory we need for actually building something powerful in VueJS and leveraging the power of closures!</p>
<p>In fact, higher order functions are the most interesting use case, as we already have a data privacy concept in VueJS.</p>
<p>Basically, components already offer an interface through properties and the data object which isn’t accessible from outside.</p>
<p>It is a component to that allows the user to choose the skin tone based an a selection of all available tones, similar to the user experience known from texting on a smart phone.</p>
<p>Technically, you should try to create a component that receives a single emoji as props and uses higher order functions to create multiple click event handlers to select different tones.</p>
<p>You can check the <a href="https://codesandbox.io/s/pw940vx207?fontsize=14" rel="noopener">sandbox</a> for the code!</p>
<h3 id="hint">Hint</h3>
<p>Emojis can be stored as HTML hex codes in string values. The folded hands emoji is &amp;#x1F64F. To change the tone, attach a colour code to it. You can find the codes <a href="https://emojiterra.com/folded-hands/" rel="noopener">here</a>.</p>
<blockquote><em><em><em>&amp;#x1F64F + &amp;#x1F3FD = ??</em></em></em></blockquote>
<h3 id="building-challenge-extension">Building Challenge Extension</h3>
<p>You want to take it one step further, and really see if you mastered closures? Then pass multiple emojis and make it work so you can change the skin tone of multiple emojis one at a time. ?</p>
<h3 id="conclusion">Conclusion</h3>
<p>Closures are the reason why we can access variables of parent scopes while the related functions might have already terminated.</p>
<p>We can use this behaviour of JavaScript in VueJS to dynamically build methods based on dynamic arguments without polluting our components with a vast variety of variables and methods.</p>
<p>Thanks for reading ?</p>
<hr>
<p>Originally published on my blog at <a href="https://hinsencamp.com/article/closures-vue/" rel="noopener">https://hinsencamp.com</a>.</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
