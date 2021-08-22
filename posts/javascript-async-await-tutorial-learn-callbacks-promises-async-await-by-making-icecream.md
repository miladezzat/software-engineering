---
card: "/images/default.jpg"
tags: [JavaScript]
description: "Today we re going to build and run an ice cream shop and lear"
author: "Milad E. Fahmy"
title: "JavaScript Async/Await Tutorial – Learn Callbacks, Promises, and Async/Await in JS by Making Ice Cream 🍧🍨🍦"
created: "2021-08-16T10:03:42+02:00"
modified: "2021-08-16T10:03:42+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-asyncawait tag-asynchronous-programming tag-callbacks tag-promises tag-web-development ">
<header class="post-full-header">
<h1 class="post-full-title">JavaScript Async/Await Tutorial – Learn Callbacks, Promises, and Async/Await in JS by Making Ice Cream 🍧🍨🍦</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2021/05/FCC-Thumbnail--3-.png 300w,
/news/content/images/size/w600/2021/05/FCC-Thumbnail--3-.png 600w,
/news/content/images/size/w1000/2021/05/FCC-Thumbnail--3-.png 1000w,
/news/content/images/size/w2000/2021/05/FCC-Thumbnail--3-.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2021/05/FCC-Thumbnail--3-.png" alt="JavaScript Async/Await Tutorial – Learn Callbacks, Promises, and Async/Await in JS by Making Ice Cream 🍧🍨🍦">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
console.log(" eat ");
console.log(" Ice Cream ");
// This will be shown after 2 seconds
setTimeout(()=&gt;{
console.log("eat");
},2000)
console.log("Ice Cream")
Fruits : ["strawberry", "grapes", "banana", "apple"]
}
Fruits : ["strawberry", "grapes", "banana", "apple"],
liquid : ["water", "ice"],
holder : ["cone", "cup", "stick"],
toppings : ["chocolate", "peanuts"],
};
let production = () =&gt;{};
</code></pre><p>Now, let's establish a relationship between these two functions using a callback, like this: 👇</p><pre><code class="language-javascript">let order = (call_production) =&gt;{
call_production();
};
let production = () =&gt;{};
</code></pre><h3 id="let-s-do-a-small-test">Let's do a small test</h3><p>We'll use the <code>console.log()</code> function to conduct tests to clear up any doubts we might have regarding how we established the relationship between the two functions.</p><pre><code class="language-javascript">let order = (call_production) =&gt;{
console.log("Order placed. Please call production")
// function 👇 is being called
call_production();
};
let production = () =&gt;{
console.log("Production has started")
};
</code></pre><p>To run the test, we'll call the <strong><code>order</code></strong> function. And we'll add the second function named <code>production</code> as its argument.</p><pre><code class="language-javascript">// name 👇 of our second function
order(production);
let order = (fruit_name, call_production) =&gt;{
call_production();
};
// Function 2
let production = () =&gt;{};
// Trigger 👇
order("", production);
let order = (fruit_name, call_production) =&gt;{
setTimeout(function(){
console.log(`${stocks.Fruits[fruit_name]} was selected`)
// Order placed. Call production to start
call_production();
},2000)
};
// 2nd Function
let production = () =&gt;{
// blank for now
};
// Trigger 👇
order(0, production);
setTimeout(()=&gt;{
console.log("production has started")
},0000)
};
setTimeout(()=&gt;{
console.log("production has started")
setTimeout(()=&gt;{
console.log("The fruit has been chopped")
},2000)
},0000)
};
setTimeout(()=&gt;{
console.log("production has started")
setTimeout(()=&gt;{
console.log("The fruit has been chopped")
setTimeout(()=&gt;{
console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} Added`)
setTimeout(()=&gt;{
console.log("start the machine")
setTimeout(()=&gt;{
console.log(`Ice cream placed on ${stocks.holder[1]}`)
setTimeout(()=&gt;{
console.log(`${stocks.toppings[0]} as toppings`)
setTimeout(()=&gt;{
console.log("serve Ice cream")
},2000)
},3000)
},2000)
},1000)
},1000)
},2000)
},0000)
};
</code></pre><p>Now create a function named <code>order</code> and pass two arguments named <code>time, work</code>:</p><pre><code class="language-javascript">let order = ( time, work ) =&gt;{
}
</code></pre><p>Now, we're gonna make a promise to our customer, "We will serve you ice-cream" Like this -&gt;</p><pre><code class="language-javascript">let order = ( time, work ) =&gt;{
return new Promise( ( resolve, reject )=&gt;{ } )
}
</code></pre><p>Our promise has 2 parts:</p><ul><li>Resolved [ ice cream delivered ]</li><li>Rejected [ customer didn't get ice cream ]</li></ul><pre><code class="language-javascript">let order = ( time, work ) =&gt; {
return new Promise( ( resolve, reject )=&gt;{
if( is_shop_open ){
resolve( )
}
else{
reject( console.log("Our shop is closed") )
}
})
}
return new Promise( ( resolve, reject )=&gt;{
if( is_shop_open ){
setTimeout(()=&gt;{
// work is 👇 getting done here
resolve( work() )
// Setting 👇 time here for 1 work
}, time)
}
else{
reject( console.log("Our shop is closed") )
}
})
}
</code></pre><p>Now, we're gonna use our newly created function to start ice-cream production.</p><pre><code class="language-javascript">// Set 👇 time here
order( 2000, ()=&gt;console.log(`${stocks.Fruits[0]} was selected`))
//    pass a ☝️ function here to start working
.then(()=&gt;{
return order(0000,()=&gt;console.log('production has started'))
})
order(2000,()=&gt;console.log(`${stocks.Fruits[0]} was selected`))
// step 2
.then(()=&gt;{
return order(0000,()=&gt;console.log('production has started'))
})
// step 3
.then(()=&gt;{
return order(2000, ()=&gt;console.log("Fruit has been chopped"))
})
// step 4
.then(()=&gt;{
return order(1000, ()=&gt;console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`))
})
// step 5
.then(()=&gt;{
return order(1000, ()=&gt;console.log("start the machine"))
})
// step 6
.then(()=&gt;{
return order(2000, ()=&gt;console.log(`ice cream placed on ${stocks.holder[1]}`))
})
// step 7
.then(()=&gt;{
return order(3000, ()=&gt;console.log(`${stocks.toppings[0]} as toppings`))
})
// Step 8
.then(()=&gt;{
return order(2000, ()=&gt;console.log("Serve Ice Cream"))
})
</code></pre><p>Which means our shop is closed. We're not selling ice cream to our customers anymore.</p><p>To handle this, we use the <code>.catch</code> handler. Just like <code>.then</code>, it also returns a promise, but only when our original promise is rejected.</p><p>A small reminder here:</p><ul><li><code>.then</code> works when a promise is resolved</li><li><code>.catch</code> works when a promise is rejected</li></ul><p>Go down to the very bottom and write the following code:👇</p><p>Just remember that there should be nothing between your previous <code>.then</code> handler and the <code>.catch</code> handler.</p><pre><code class="language-javascript">.catch(()=&gt;{
console.log("Customer left")
})
console.log("end of day")
})
return new Promise( (resolve, reject) =&gt;{
// Write code here
} )
}
</code></pre><p>Now using async/await, we write one like this:</p><pre><code class="language-javascript">//👇 the magical keyword
async function order() {
// Write code here
}
return new Promise ((resolve, reject)=&gt;{
if(true){
resolve("promise is fulfilled")
}
else{
reject("error caught here")
}
})
}
kitchen()  // run the code
.then()    // next step
.then()    // next step
.catch()   // error caught here
.finally() // end of the promise [optional]
</code></pre><h3 id="async-await-in-js-try-catch">Async / Await in JS -&gt; try, catch</h3><p>When we're using async/await, we use this format:</p><pre><code class="language-javascript">//👇 Magical keyword
async function kitchen(){
try{
// Let's create a fake problem
await abc;
}
catch(error){
console.log("abc does not exist", error)
}
finally{
console.log("Runs code anyways")
}
}
kitchen()  // run the code
return new Promise((resolve,reject)=&gt;{
setTimeout(()=&gt;{
resolve( console.log("which topping would you love?") )
},3000)
})
}
</code></pre><p>Now, let's create our kitchen function with the async keyword first.</p><pre><code class="language-javascript">async function kitchen(){
console.log("A")
console.log("B")
console.log("C")
await toppings_choice()
console.log("D")
console.log("E")
}
// Trigger the function
kitchen();
</code></pre><p>Let's add other tasks below the <code>kitchen()</code> call.</p><pre><code class="language-javascript">console.log("doing the dishes")
console.log("cleaning the tables")
console.log("taking orders")
function time(ms) {
return new Promise( (resolve, reject) =&gt; {
if(is_shop_open){
setTimeout(resolve,ms);
}
else{
reject(console.log("Shop is closed"))
}
});
}
</code></pre><p>Now, let's create our kitchen:</p><pre><code class="language-javascript">async function kitchen(){
try{
// instruction here
}
catch(error){
// error management here
}
}
// Trigger
kitchen();
</code></pre><p>Let's give small instructions and test if our kitchen function is working or not:</p><pre><code class="language-javascript">async function kitchen(){
try{
// time taken to perform this 1 task
await time(2000)
console.log(`${stocks.Fruits[0]} was selected`)
}
catch(error){
console.log("Customer left", error)
}
finally{
console.log("Day ended, shop closed")
}
}
// Trigger
kitchen();
</code></pre><p>Now write the steps inside our <code>kitchen()</code> function: 👇</p><pre><code class="language-javascript">async function kitchen(){
try{
await time(2000)
console.log(`${stocks.Fruits[0]} was selected`)
await time(0000)
console.log("production has started")
await time(2000)
console.log("fruit has been chopped")
await time(1000)
console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`)
await time(1000)
console.log("start the machine")
await time(2000)
console.log(`ice cream placed on ${stocks.holder[1]}`)
await time(3000)
console.log(`${stocks.toppings[0]} as toppings`)
await time(2000)
console.log("Serve Ice Cream")
}
catch(error){
console.log("customer left")
}
}
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
