---
card: "/images/default.jpg"
tags: [JavaScript]
description: "Last week I decided to take on a new challenge. I called it: "
author: "Milad E. Fahmy"
title: "How to Create a Random Meal Generator"
created: "2021-08-15T22:50:14+02:00"
modified: "2021-08-15T22:50:14+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-css tag-html tag-100days100projects ">
<header class="post-full-header">
<h1 class="post-full-title">How to Create a Random Meal Generator</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2019/09/random-meal-generator-1.png 300w,
/news/content/images/size/w600/2019/09/random-meal-generator-1.png 600w,
/news/content/images/size/w1000/2019/09/random-meal-generator-1.png 1000w,
/news/content/images/size/w2000/2019/09/random-meal-generator-1.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2019/09/random-meal-generator-1.png" alt="How to Create a Random Meal Generator">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>The purpose of the challenge is to create one project every single day. Think of it as a next step for the #100DaysOfCode challenge.</p>
<p>A project can be either:</p>
<ul>
<li>an app</li>
<li>a component</li>
<li>a website</li>
<li>a game</li>
<li>a library<br>
and so on...</li>
</ul>
<p>The programming language used is also not important, but I need to complete the project by 11:59 PM (my time), otherwise I'm "punishing" myself by giving away $5 for 5 people ($25 total) - first 5 people who point it out on Twitter that I missed the deadline. ?</p>
<p>If you want to join, you can read more about this challenge and the other variants it has <a href="https://www.florin-pop.com/blog/2019/09/100-days-100-projects">here</a>.</p>
<p><strong>Note</strong>: you don't have to give away $5 if you fail, just set some other "punishment" for yourself. Also, there are other variants with less days (<strong>7Days7Projects</strong> and <strong>30Days30Projects</strong>) if you don't feel like taking on the 100Days challenge.</p>
<hr>
<p>For the first project in the <a href="https://florin-pop.com/blog/2019/09/100-days-100-projects">#100Days100Projects</a> I thought about working with a public API in order to get some data that would be displayed in a webpage - an usual thing to do with an API.</p>
<p>For that I chose to use <a href="https://www.themealdb.com">TheMealDB</a>'s public API in order to get some random meals by pressing a button. Something straightforward! ?</p>
<p>Check out the live version of what we're going to build in this article over on <a href="https://codepen.io/FlorinPop17/full/WNeggor">CodePen</a>:</p>
<h2 id="thehtml">The HTML</h2>
<pre><code class="language-html">&lt;div class="container"&gt;
&lt;div class="row text-center"&gt;
&lt;h3&gt;
Feeling hungry?
&lt;/h3&gt;
&lt;h5&gt;Get a random meal by clicking below&lt;/h5&gt;
&lt;button class="button-primary" id="get_meal"&gt;Get Meal ?&lt;/button&gt;
&lt;/div&gt;
&lt;div id="meal" class="row meal"&gt;&lt;/div&gt;
&lt;/div&gt;
</code></pre>
<p>We have a little text, but the two most important parts are:</p>
<ul>
<li>the <code>#get_meal</code> button and</li>
<li>the <code>#meal</code> div</li>
</ul>
<p>We're going to use the <code>button</code> to make a request to the API. This will send back some data that we're going to put into the <code>#meal</code> div which acts as a container - in this case.</p>
<p>Usually after the HTML I'll go right into the CSS. But we don't yet have the entire markup as it will be populated in the <strong>JavaScript</strong> section, so that's what we're going to do next.</p>
<h2 id="thejavascript">The JavaScript</h2>
<p>As mentioned above, we need the <code>button</code> and that container <code>div</code>:</p>
<pre><code class="language-js">const get_meal_btn = document.getElementById('get_meal');
const meal_container = document.getElementById('meal');
</code></pre>
<p>Next, before we dive more into the code, let's see what the API is going to return. For that please open the following URL: <a href="https://www.themealdb.com/api/json/v1/1/random.php">https://www.themealdb.com/api/json/v1/1/random.php</a>.</p>
<p>As you can see from the URL, we are getting a <strong>random</strong> meal from this API (refresh to see the <em>randomness</em>). When we're making a <strong>GET</strong> request to that endpoint (like accessing it from the browser), it sends back a JSON response, which we can parse in order to retrieve the data we want.</p>
<p>The data looks something like this:</p>
<pre><code class="language-js">{
meals: [
{
idMeal: '52873',
strMeal: 'Beef Dumpling Stew',
strDrinkAlternate: null,
strCategory: 'Beef',
strArea: 'British',
strInstructions: 'Long description',
strMealThumb:
'https://www.themealdb.com/images/media/meals/uyqrrv1511553350.jpg',
strTags: 'Stew,Baking',
strYoutube: 'https://www.youtube.com/watch?v=6NgheY-r5t0',
strIngredient1: 'Olive Oil',
strIngredient2: 'Butter',
strIngredient3: 'Beef',
strIngredient4: 'Plain Flour',
strIngredient5: 'Garlic',
strIngredient6: 'Onions',
strIngredient7: 'Celery',
strIngredient8: 'Carrots',
strIngredient9: 'Leek',
strIngredient10: 'Swede',
strIngredient11: 'Red Wine',
strIngredient12: 'Beef Stock',
strIngredient13: 'Bay Leaf',
strIngredient14: 'Thyme',
strIngredient15: 'Parsley',
strIngredient16: 'Plain Flour',
strIngredient17: 'Baking Powder',
strIngredient18: 'Suet',
strIngredient19: 'Water',
strIngredient20: '',
strMeasure1: '2 tbs',
strMeasure2: '25g',
strMeasure3: '750g',
strMeasure4: '2 tblsp ',
strMeasure5: '2 cloves minced',
strMeasure6: '175g',
strMeasure7: '150g',
strMeasure8: '150g',
strMeasure9: '2 chopped',
strMeasure10: '200g',
strMeasure11: '150ml',
strMeasure12: '500g',
strMeasure13: '2',
strMeasure14: '3 tbs',
strMeasure15: '3 tblsp chopped',
strMeasure16: '125g',
strMeasure17: '1 tsp ',
strMeasure18: '60g',
strMeasure19: 'Splash',
strMeasure20: '',
strSource:
'https://www.bbc.co.uk/food/recipes/beefstewwithdumpling_87333',
dateModified: null
}
];
}
</code></pre>
<p>Basically we get back an array of <code>meals</code>, but with only one item in it - the randomly generated one. And this item has all the data we want to showcase in our little application. Things like:</p>
<ul>
<li>meal name (under <code>strMeal</code>)</li>
<li>meal caterogy (under <code>strCategory</code>)</li>
<li>meal image (under <code>strMealThumb</code>)</li>
<li>a youtube video with the recipe (under <code>strYoutube</code>)</li>
<li>the ingredients and the measures (under <code>strIngredientsX</code> and <code>strMeasureX</code> - X representing the nth ingredient and it's measure).This is a little bit awkward as I would expect here to have an array with this information, but they choose to add it as object props. On well... ? The important thing to note is that there are a maximum of 20 ingredients / measures, although they aren't all filled in - some of them might be empty so we need to account for that.</li>
</ul>
<p>Now that we have the button we're going to add an event listener for the <code>click</code> event. Inside we're going to make a request to the API:</p>
<pre><code class="language-js">get_meal_btn.addEventListener('click', () =&gt; {
fetch('https://www.themealdb.com/api/json/v1/1/random.php')
.then(res =&gt; res.json())
.then(res =&gt; {
createMeal(res.meals[0]);
})
.catch(e =&gt; {
console.warn(e);
});
});
</code></pre>
<p>We're using the <a href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API">fetch</a> API to do the request. We just have to pass in the url of the API we want to make a <strong>GET</strong> request to, and we're going to get back a promise.</p>
<p>Once this is resolved we have a response (<code>res</code>). This <code>res</code> isn't yet in the state we want it to be, so we're going to call the <code>.json()</code> method on it. Then finally we have the beautiful object. Yay! ?</p>
<p>As mentioned above, the API returns the <code>meals</code> array but only with an item in it. So we're going to pass that item (at index <code>0</code>) into our <code>createMeal</code> function, which we'll define next.</p>
<p>I'm going to paste the entire block of code below and we're going to go into detail afterwards, so hold on for a second. ?</p>
<pre><code class="language-js">const createMeal = meal =&gt; {
const ingredients = [];
// Get all ingredients from the object. Up to 20
for (let i = 1; i &lt;= 20; i++) {
if (meal[`strIngredient${i}`]) {
ingredients.push(
`${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`
);
} else {
// Stop if there are no more ingredients
break;
}
}
const newInnerHTML = `
&lt;div class="row"&gt;
&lt;div class="columns five"&gt;
&lt;img src="${meal.strMealThumb}" alt="Meal Image"&gt;
${
meal.strCategory
? `&lt;p&gt;&lt;strong&gt;Category:&lt;/strong&gt; ${meal.strCategory}&lt;/p&gt;`
: ''
}
${meal.strArea ? `&lt;p&gt;&lt;strong&gt;Area:&lt;/strong&gt; ${meal.strArea}&lt;/p&gt;` : ''}
${
meal.strTags
? `&lt;p&gt;&lt;strong&gt;Tags:&lt;/strong&gt; ${meal.strTags
.split(',')
.join(', ')}&lt;/p&gt;`
: ''
}
&lt;h5&gt;Ingredients:&lt;/h5&gt;
&lt;ul&gt;
${ingredients.map(ingredient =&gt; `&lt;li&gt;${ingredient}&lt;/li&gt;`).join('')}
&lt;/ul&gt;
&lt;/div&gt;
&lt;div class="columns seven"&gt;
&lt;h4&gt;${meal.strMeal}&lt;/h4&gt;
&lt;p&gt;${meal.strInstructions}&lt;/p&gt;
&lt;/div&gt;
&lt;/div&gt;
${
meal.strYoutube
? `
&lt;div class="row"&gt;
&lt;h5&gt;Video Recipe&lt;/h5&gt;
&lt;div class="videoWrapper"&gt;
&lt;iframe width="420" height="315"
src="https://www.youtube.com/embed/${meal.strYoutube.slice(-11)}"&gt;
&lt;/iframe&gt;
&lt;/div&gt;
&lt;/div&gt;`
: ''
}
`;
meal_container.innerHTML = newInnerHTML;
};
</code></pre>
<p>Basically the entire function's purpose is to get the JSON response, parse it, and transform it into an HTML component. For that we need to do a couple of things, as the data is not yet formated exactly the way we want it to be.</p>
<p>First, we're getting all the <strong>ingredients</strong> and their <strong>measures</strong>. As mentioned above there are a maximum of 20 ingredients, but they are separated into their own properties in the object like: <code>strIngredient1</code>, <code>strIngredient2</code>, etc... (I still don't know why they did that, but... ?).</p>
<p>So, we're creating a <code>for</code> loop which goes from <code>1</code> to <code>20</code> and checks if the <code>meal</code> has that corresponding <code>ingredient</code>-<code>measure</code> pair. If it does, we're putting it into the <code>ingredients</code> array. If there aren't any more ingredients we're stopping the for loop with a <code>break</code> condition.</p>
<p>Next, we're creating the <code>newInnerHTML</code> string which is going to hold the entire HTML markup. In it we are parsing the remaining properties that we want to be displayed.</p>
<p><strong>Note</strong> that some of the properties might not be available. So for that we're using the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator">ternary operator</a> to check if we have the data to display the corresponding tag. If we don't have it then we're returning an empty string and nothing will be displayed on the page. The <code>category</code> and the <code>area</code> are examples of these type of properties.</p>
<p>The tags are coming in a string divided by a comma like: <code>'tag1,tag2,tag3'</code>. So we need to <code>split</code> it by that comma, and <code>join</code> it back by a comma and a space as it looks nicer (<code>'tag1, tag2, tag3'</code> ❤️). Or at least for me does. ?</p>
<p>To show the <code>ingredients</code>, we're mapping over the array and we're creating an <code>&lt;li&gt;</code> for each ingredient/measure pair. At the end we're joining the array back to form a string. (This is something you would do in ReactJS but without the <code>join</code>ing part ?).</p>
<p>There is also a Youtube video <em>string</em> (maybe) which is returning the URL of the video. But in order for us to embed the video in the page we need to extract the video ID only. For that we're using <code>.slice(-11)</code> to get the last 11 characters of the string as this is where the ID is hiding ?.</p>
<p>And finally, we're setting this entire <code>newInnerHTML</code> to be the <code>meal_container</code>'s <code>innerHTML</code> -&gt; this will populate that div with all this information!</p>
<p>This entire process will repeat every time we're pressing the <code>Get Meal</code> button.</p>
<h2 id="thecss">The CSS</h2>
<p>The last part is to style it a little bit, right? ?</p>
<p>For the <strong>CSS</strong> I wanted to use something new so I tried out the <a href="http://getskeleton.com/">SkeletonCSS</a> library. It's useful if you have a small project and don't want to get overwhelmed with all those classes, as it only has a couple of them that take care of some basic styling (the button for example) and the responsive part.</p>
<pre><code class="language-css">@import url('https://fonts.googleapis.com/css?family=Muli&amp;display=swap');
* {
box-sizing: border-box;
}
body {
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 30px 0;
min-height: calc(100vh - 60px);
}
img {
max-width: 100%;
}
p {
margin-bottom: 5px;
}
h3 {
margin: 0;
}
h5 {
margin: 10px 0;
}
li {
margin-bottom: 0;
}
.meal {
margin: 20px 0;
}
.text-center {
text-align: center;
}
.videoWrapper {
position: relative;
padding-bottom: 56.25%;
padding-top: 25px;
height: 0;
}
.videoWrapper iframe {
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
}
</code></pre>
<p>You can see that the CSS is pretty simple. The only part that's worth mentioning is the <code>.videoWrapper</code> CSS declaration. This makes sure that the YouTube embed is responsive. (Got this from <a href="https://css-tricks.com/NetMag/FluidWidthVideo/Article-FluidWidthVideo.php">CSS-Tricks</a> - thanks guys! ?)</p>
<h2 id="conclusion">Conclusion</h2>
<p>And voilà! We're done! ?</p>
<p>You should now know how to use a public API to get some data which you can then insert on the page easily! Well done! ?</p>
<p><em>This is the first project I did for the <a href="https://florin-pop.com/blog/2019/09/100-days-100-projects">#100Days100Projects</a> challenge. You can check out what other projects I've built and what are the rules of the challenge (if you might want to join) by clicking <a href="https://florin-pop.com/blog/2019/09/100-days-100-projects">here</a>.</em></p>
<p>You can read more of my articles on <a href="https://florin-pop.com">www.florin-pop.com</a>.</p>
<p>Happy Coding! ?</p>
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
