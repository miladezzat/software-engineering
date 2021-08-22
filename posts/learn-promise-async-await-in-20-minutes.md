---
card: "/images/default.jpg"
tags: [JavaScript]
description: On the web, many things tend to be time-consuming – if you qu
author: "Milad E. Fahmy"
title: "How to Learn JavaScript Promises and Async/Await in 20 Minutes"
created: "2021-08-15T19:27:55+02:00"
modified: "2021-08-15T19:27:55+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-promises tag-asyncawait tag-projects ">
<header class="post-full-header">
<h1 class="post-full-title">How to Learn JavaScript Promises and Async/Await in 20 Minutes</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/11/maxresdefault.jpg 300w,
/news/content/images/size/w600/2020/11/maxresdefault.jpg 600w,
/news/content/images/size/w1000/2020/11/maxresdefault.jpg 1000w,
/news/content/images/size/w2000/2020/11/maxresdefault.jpg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/11/maxresdefault.jpg" alt="How to Learn JavaScript Promises and Async/Await in 20 Minutes">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>On the web, many things tend to be time-consuming – if you query an API, it can take a while to receive a response. Therefore, asynchronous programming is an essential skill for developers.</p>
<p>When working with asynchronous operations in JavaScript, we often hear the term <code>Promise</code>. But it can be tricky to understand how they work and how to use them.</p>
<p>Unlike many traditional coding tutorials, in this tutorial we'll learn by doing. We'll complete four tasks by the end of the article:</p>
<ul>
<li>Task 1: Promise basics explained using my birthday</li>
<li>Task 2: Build a guessing game</li>
<li>Task 3: Fetch country info from an API</li>
<li>Task 4: Fetch a country's neighboring countries</li>
</ul>
<p>If you want to follow along, be sure to download the resources here: <a href="https://bit.ly/3m4bjWI">https://bit.ly/3m4bjWI</a></p>
<h2 id="task-1-promise-basics-explained-using-my-birthday">Task 1: Promise basics explained using my birthday</h2>
<p>My friend Kayo promises to make a cake for my birthday in two weeks.</p>
<p>If everything goes well and Kayo doesn't get sick, we'll have a certain number of cakes. (Cakes are a countable in this tutorial 😆). Otherwise, if Kayo gets sick, we'll have no cakes.</p>
<p>Either way, we're still going to have a party.</p>
<p>For this first task, we'll translate this story into code. First, let's create a function that returns a <code>Promise</code>:</p><pre><code class="language-js">const onMyBirthday = (isKayoSick) =&gt; {
return new Promise((resolve, reject) =&gt; {
setTimeout(() =&gt; {
if (!isKayoSick) {
resolve(2);
} else {
reject(new Error("I am sad"));
}
}, 2000);
});
};</code></pre>
<p>In JavaScript, we can create a new <code>Promise</code> with <code>new Promise()</code>, which takes in a function as an argument: <code>(resolve, reject) =&gt; {}</code>. </p>
<p>In this function, <code>resolve</code> and <code>reject</code> are callback functions that are provided by default in JavaScript.</p>
<p>Let's take a closer look at the code above.</p>
<p>When we run the <code>onMyBirthday</code> function, after <code>2000ms</code>:</p>
<ul>
<li>If Kayo is not sick, then we run <code>resolve</code> with <code>2</code> as the argument</li>
<li>If Kayo is sick then we run <code>reject</code> with <code>new Error("I am sad")</code> as the argument. Even though you can pass anything to <code>reject</code> as an argument, it's recommended to pass it an <code>Error</code> object.</li>
</ul>
<p>Now, because <code>onMyBirthday()</code> returns a <code>Promise</code>, we have access to the <code>then</code>, <code>catch</code>, and <code>finally</code> methods. </p>
<p>And we also have access to the arguments that were passed into <code>resolve</code> and <code>reject</code> earlier within <code>then</code> and <code>catch</code>.</p>
<p>Let's take a closer look at the code.</p>
<p>If Kayo is not sick:</p><pre><code class="language-js">onMyBirthday(false)
.then((result) =&gt; {
console.log(`I have ${result} cakes`); // In the console: I have 2 cakes
})
.catch((error) =&gt; {
console.log(error); // Does not run
})
.finally(() =&gt; {
console.log("Party"); // Shows in the console no matter what: Party
});
</code></pre>
<p>If Kayo is sick:</p><pre><code class="language-js">onMyBirthday(true)
.then((result) =&gt; {
console.log(`I have ${result} cakes`); // does not run
})
.catch((error) =&gt; {
console.log(error); // in console: Error: I am sad
})
.finally(() =&gt; {
console.log("Party"); // Shows in the console no matter what: Party
});
</code></pre>
<p>Alright, so by now, I hope you get the basic idea of <code>Promise</code>. Let's move onto task 2.</p>
<h2 id="task-2-build-a-guessing-game">Task 2: Build a guessing game</h2>
<p>The requirements:</p>
<ul>
<li>User story: A user can enter a number</li>
<li>User story: The system picks a random number from 1 to 6</li>
<li>User story: If the user's number is equal to a random number, give the user 2 points</li>
<li>User story: If the user's number is different than the random number by 1,<br>give the user 1 point. Otherwise, give the user 0 points</li>
<li>User story: The user can play the game as long as they want to</li>
</ul>
<p>For the first 4 user stories, let's create an <code>enterNumber</code> function and return a <code>Promise</code>:</p><pre><code class="language-js">const enterNumber = () =&gt; {
return new Promise((resolve, reject) =&gt; {
// Let's start from here
});
};</code></pre>
<p>The first thing we need to do is to ask for a number from user and pick a random number between 1 and 6:</p><pre><code class="language-js">const enterNumber = () =&gt; {
return new Promise((resolve, reject) =&gt; {
const userNumber = Number(window.prompt("Enter a number (1 - 6):")); // Ask the user to enter a number
const randomNumber = Math.floor(Math.random() * 6 + 1); // Pick a random number between 1 and 6
});
};
</code></pre>
<p>Now, <code>userNumber</code> can enter a value, that is not a number. If so, let's call the <code>reject</code> function with an error:</p><pre><code class="language-js">const enterNumber = () =&gt; {
return new Promise((resolve, reject) =&gt; {
const userNumber = Number(window.prompt("Enter a number (1 - 6):")); // Ask user to enter a number
const randomNumber = Math.floor(Math.random() * 6 + 1); // Pick a random number between 1 and 6
if (isNaN(userNumber)) {
reject(new Error("Wrong Input Type")); // If the user enters a value that is not a number, run reject with an error
}
});
};
</code></pre>
<p>The next thing we want to do is to check if the <code>userNumber</code> is equal to <code>randomNumber</code>, if so, we want give user 2 points and we can run the <code>resolve</code> function passing an object <code>{ points: 2, randomNumber }</code>. Notice here that we also want to know the <code>randomNumber</code> when the Promise is resolved</p>
<p>If the <code>userNumber</code> is different than <code>randomNumber</code> by one, then we give the user 1 point. Otherwise, we give the user 0 points:</p><pre><code class="language-js">return new Promise((resolve, reject) =&gt; {
const userNumber = Number(window.prompt("Enter a number (1 - 6):")); // Ask the user to enter a number
const randomNumber = Math.floor(Math.random() * 6 + 1); // Pick a random number between 1 and 6
if (isNaN(userNumber)) {
reject(new Error("Wrong Input Type")); // If the user enters a value that is not a number, run reject with an error
}
if (userNumber === randomNumber) {
// If the user's number matches the random number, return 2 points
resolve({
points: 2,
randomNumber,
});
} else if (
userNumber === randomNumber - 1 ||
userNumber === randomNumber + 1
) {
// If the user's number is different than the random number by 1, return 1 point
resolve({
points: 1,
randomNumber,
});
} else {
// Else return 0 points
resolve({
points: 0,
randomNumber,
});
}
});</code></pre>
<p>Alright, let's also create another function to ask if the user wants to continue the game:</p><pre><code class="language-js">const continueGame = () =&gt; {
return new Promise((resolve) =&gt; {
if (window.confirm("Do you want to continue?")) { // Ask if the user want to continue the game with a confirm modal
resolve(true);
} else {
resolve(false);
}
});
};
</code></pre>
<p>Notice here that we create a <code>Promise</code>, but it does not use the <code>reject</code> callback. This is totally fine.</p>
<p>Now let's create a function to handle the guess:</p><pre><code class="language-js">const handleGuess = () =&gt; {
enterNumber() // This returns a Promise
.then((result) =&gt; {
alert(`Dice: ${result.randomNumber}: you got ${result.points} points`); // When resolve is run, we get the points and the random number
// Let's ask the user if they want to continue the game
continueGame().then((result) =&gt; {
if (result) {
handleGuess(); // If yes, we run handleGuess again
} else {
alert("Game ends"); // If no, we show an alert
}
});
})
.catch((error) =&gt; alert(error));
};
handleGuess(); // Run handleGuess function
</code></pre>
<p>Here when we call <code>handleGuess</code>, <code>enterNumber()</code> now returns a <code>Promise</code>:</p>
<ul>
<li>If the <code>Promise</code> is resolved, we call the <code>then</code> method and show an alert message. We also ask if the user wants to continue.</li>
<li>If the <code>Promise</code> is rejected, we show an alert message with the error.</li>
</ul>
<p>As you can see, the code is quite difficult to read.</p>
<p>Let's refactor the <code>handleGuess</code> function a bit using the <code>async/await</code> syntax:</p><pre><code class="language-js">const handleGuess = async () =&gt; {
try {
const result = await enterNumber(); // Instead of the then method, we can get the result directly by just putting await before the promise
alert(`Dice: ${result.randomNumber}: you got ${result.points} points`);
const isContinuing = await continueGame();
if (isContinuing) {
handleGuess();
} else {
alert("Game ends");
}
} catch (error) { // Instead of catch method, we can use the try, catch syntax
alert(error);
}
};
</code></pre>
<p>You can see that we created an <code>async</code> function by putting <code>async</code> before the brackets. Then in the <code>async</code> function:</p>
<ul>
<li>Instead of the <code>then</code> method, we can get the results directly just by putting <code>await</code> before the promise</li>
<li>Instead of the <code>catch</code> method, we can use the <code>try, catch</code> syntax</li>
</ul>
<p>Here's all the code for this task again for your reference:</p><pre><code class="language-js">const enterNumber = () =&gt; {
return new Promise((resolve, reject) =&gt; {
const userNumber = Number(window.prompt("Enter a number (1 - 6):")); // Ask the user to enter a number
const randomNumber = Math.floor(Math.random() * 6 + 1); // Pick a random number between 1 and 6
if (isNaN(userNumber)) {
reject(new Error("Wrong Input Type")); // If the user enters a value that is not a number, run reject with an error
}
if (userNumber === randomNumber) { // If the user's number matches the random number, return 2 points
resolve({
points: 2,
randomNumber,
});
} else if (
userNumber === randomNumber - 1 ||
userNumber === randomNumber + 1
) { // If the user's number is different than the random number by 1, return 1 point
resolve({
points: 1,
randomNumber,
});
} else { // Else return 0 points
resolve({
points: 0,
randomNumber,
});
}
});
};
const continueGame = () =&gt; {
return new Promise((resolve) =&gt; {
if (window.confirm("Do you want to continue?")) { // Ask if the user want to continue the game with a confirm modal
resolve(true);
} else {
resolve(false);
}
});
};
const handleGuess = async () =&gt; {
try {
const result = await enterNumber(); // Instead of the then method, we can get the result directly by just putting await before the promise
alert(`Dice: ${result.randomNumber}: you got ${result.points} points`);
const isContinuing = await continueGame();
if (isContinuing) {
handleGuess();
} else {
alert("Game ends");
}
} catch (error) { // Instead of catch method, we can use the try, catch syntax
alert(error);
}
};
handleGuess(); // Run handleGuess function
</code></pre>
<p>Alright, we are done with the second task. Let's move on to the third one.</p>
<h2 id="task-3-fetch-country-info-from-an-api">Task 3: Fetch country info from <a href="https://restcountries.eu/">an API</a></h2>
<p>You'll see <code>Promises</code> used a lot when fetching data from an API.</p>
<p>If you open <a href="https://restcountries.eu/rest/v2/alpha/col">https://restcountries.eu/rest/v2/alpha/col</a> in a new browser, you will see the country data in JSON format.<br><br>By using the <a href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch">Fetch API</a>, we can fetch the data by:</p><pre><code class="language-js">const fetchData = async () =&gt; {
const res = await fetch("https://restcountries.eu/rest/v2/alpha/col"); // fetch() returns a promise, so we need to wait for it
const country = await res.json(); // res is now only an HTTP response, so we need to call res.json()
console.log(country); // Columbia's data will be logged to the dev console
};
fetchData();
</code></pre>
<p>Now that we have the country data we want, let's move onto the last task.</p>
<h2 id="task-4-fetch-a-country-s-neighboring-countries">Task 4: Fetch a country's neighboring countries</h2>
<p>If you open task 4, you will see that we have a <code>fetchCountry</code> function, that fetches the data from the endpoint: <code>https://restcountries.eu/rest/v2/alpha/${alpha3Code}</code> where <code>alpha3code</code> is the code of the country.<br><br>You also see that it will catch any <code>error</code> that might happen when getting the data.</p><pre><code class="language-js">// Task 4: get the neigher countries of Columbia
const fetchCountry = async (alpha3Code) =&gt; {
try {
const res = await fetch(
`https://restcountries.eu/rest/v2/alpha/${alpha3Code}`
);
const data = await res.json();
return data;
} catch (error) {
console.log(error);
}
};
</code></pre>
<p>Let's create a <code>fetchCountryAndNeighbors</code> function and fetch Columbia's information by passing <code>col</code> as the <code>alpha3code</code>.</p><pre><code class="language-js">const fetchCountryAndNeighbors = async () =&gt; {
const columbia = await fetchCountry("col");
console.log(columbia);
};
fetchCountryAndNeighbors();
</code></pre>
<p>Now, if you look in your console, you can see an object look like this:</p>
<p>In the object, there is a <code>border</code> property which is a list of <code>alpha3codes</code> for Columbia's neighboring countries.</p>
<p>Now if we try to get the neighboring countries by:</p><pre><code class="language-js">  const neighbors =
columbia.borders.map((border) =&gt; fetchCountry(border));
</code></pre>
<p>Then, <code>neighbors</code> will be an array of <code>Promise</code> objects.</p>
<p>When working with an array of promises, we need to use <code>Promise.all</code>:</p><pre><code class="language-js">const fetchCountryAndNeigbors = async () =&gt; {
const columbia = await fetchCountry("col");
const neighbors = await Promise.all(
columbia.borders.map((border) =&gt; fetchCountry(border))
);
console.log(neighbors);
};
fetchCountryAndNeigbors();
</code></pre>
<p>In the <code>console</code>, we should be able to see list of country objects.</p>
<p>Here's all the code for task 4 again for your reference:</p><pre><code class="language-js">const fetchCountry = async (alpha3Code) =&gt; {
try {
const res = await fetch(
`https://restcountries.eu/rest/v2/alpha/${alpha3Code}`
);
const data = await res.json();
return data;
} catch (error) {
console.log(error);
}
};
const fetchCountryAndNeigbors = async () =&gt; {
const columbia = await fetchCountry("col");
const neighbors = await Promise.all(
columbia.borders.map((border) =&gt; fetchCountry(border))
);
console.log(neighbors);
};
fetchCountryAndNeigbors();
</code></pre>
<h2 id="conclusion">Conclusion</h2>
<p>After completing these 4 tasks, you can see that <code>Promise</code> is useful when it comes to asynchronous actions or things that are not happening at the same time.</p>
<p>You can see this in practice in one of my tutorials, where we build an application from scratch with React and Next.js:</p>
<h2 id="__________-about-me-__________">__________ 🐣 About me __________</h2>
<ul>
<li>I am the founder of <a href="https://devchallenges.io/">DevChallenges</a></li>
<li>Subscribe to my <a href="https://www.youtube.com/channel/UCmSmLukBF--YrKZ2g4akYAQ?sub_confirmation=1">YouTube Channel</a></li>
<li>Follow me on <a href="https://twitter.com/thunghiemdinh">Twitter</a></li>
<li>Join <a href="https://discord.com/invite/3R6vFeM">Discord</a></li>
</ul>
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
