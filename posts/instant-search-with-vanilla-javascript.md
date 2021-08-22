---
card: "/images/default.jpg"
tags: [JavaScript]
description: "Originally posted on www.florin-pop.com"
author: "Milad E. Fahmy"
title: "Instant Search with Vanilla JavaScript"
created: "2021-08-15T22:50:22+02:00"
modified: "2021-08-15T22:50:22+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-weeklycodingchallenge tag-html tag-css tag-search tag-instant-search ">
<header class="post-full-header">
<h1 class="post-full-title">Instant Search with Vanilla JavaScript</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2019/06/Week--15_-Instant-Search.png 300w,
/news/content/images/size/w600/2019/06/Week--15_-Instant-Search.png 600w,
/news/content/images/size/w1000/2019/06/Week--15_-Instant-Search.png 1000w,
/news/content/images/size/w2000/2019/06/Week--15_-Instant-Search.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2019/06/Week--15_-Instant-Search.png" alt="Instant Search with Vanilla JavaScript">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<h2 id="instantsearch">Instant Search</h2>
<p>We live in a fast world and we want everything to be FAST, including search results, this is why instant search functionality became pretty much a "must have" feature instead of a "nice to have" feature.</p>
<p>In this article we're going to build this <a href="https://codepen.io/FlorinPop17/full/qzNxGa/">feature</a>, but only using Vanilla JavaScript :smiley:.</p>
<p>Below is the Live Preview of what we are going to build in this article. Let's search through the Countries of the world to see their Population and Flag:</p>
<h2 id="thehtml">The HTML</h2>
<p>We'll need 2 things in our HTML:</p>
<ol>
<li>A <code>search</code> field</li>
<li>A <code>results</code> div where we'll display the search results</li>
</ol>
<pre><code class="language-html">&lt;input type="text" id="search" placeholder="Search for a Country" /&gt;
&lt;div id="results"&gt;&lt;/div&gt;
</code></pre>
<p>Usually we are going into the styling part next, but in this case considering that we don't yet have the entire markup (you'll see in a moment), we'll get to the JS part first. ?</p>
<h2 id="thejavascript">The JavaScript</h2>
<p>Let's make a plan before we actually type any code. The things that we need to do are:</p>
<ol>
<li>Gather a list of all the countries in the world</li>
<li>Display the list of countries</li>
<li>Update the results based on the search query</li>
</ol>
<p>Pretty awesome, eh? ?</p>
<h3 id="steponegettingthedata">Step one - getting the data</h3>
<p>I found a nice API we can use to get the list of countries we need. It is: <a href="https://restcountries.eu/">RestCountries.eu</a>.</p>
<p>We're going to use the built in <a href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API">Fetch API</a> in order to retrieve all the countries, and we're going to store them in a variable: <code>countries</code>.</p>
<pre><code class="language-js">let countries;
const fetchCountries = async () =&gt; {
countries = await fetch(
'https://restcountries.eu/rest/v2/all?fields=name;population;flag'
).then(res =&gt; res.json());
};
</code></pre>
<p>As you can see, we created an async function; You can read more about this <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function">here</a>.</p>
<p>Also, note that we only want 3 fields from the API (name, population and flag) so this is what we're going to get from the API by setting the <code>fields</code> query parameter.</p>
<h3 id="steptwodisplayingthedata">Step two - displaying the data</h3>
<p>Now, we need to create the structure of our list in order to display the data and for that we're going to create all the elements that we need (<code>ul</code>, <code>li</code>, headings, etc) inside of a function and we'll insert them into the <code>results</code> div we declared in our HTML.</p>
<p>We're also going to call our <code>fetchCountries</code> function here because we want to loop over the countries in order to create the corresponding elements:</p>
<pre><code class="language-js">const results = document.getElementById('results');
const showCountries = async () =&gt; {
// getting the data
await fetchCountries();
const ul = document.createElement('ul');
ul.classList.add('countries');
countries.forEach(country =&gt; {
// creating the structure
const li = document.createElement('li');
li.classList.add('country-item');
const country_flag = document.createElement('img');
// Setting the image source
country_flag.src = country.flag;
country_flag.classList.add('country-flag');
const country_name = document.createElement('h3');
country_name.innerText = country.name;
country_name.classList.add('country-name');
const country_info = document.createElement('div');
country_info.classList.add('country-info');
const country_population = document.createElement('h2');
country_population.innerText = numberWithCommas(country.population);
country_population.classList.add('country-population');
const country_popupation_text = document.createElement('h5');
country_popupation_text.innerText = 'Population';
country_popupation_text.classList.add('country-population-text');
country_info.appendChild(country_population);
country_info.appendChild(country_popupation_text);
li.appendChild(country_flag);
li.appendChild(country_name);
li.appendChild(country_info);
ul.appendChild(li);
});
results.appendChild(ul);
};
// display initial countries
showCountries();
// From StackOverflow https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
function numberWithCommas(x) {
return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
</code></pre>
<p>There is a "little" bit of code above, so let's break it down. ?</p>
<p>First, we have our list (<code>ul</code>) with the <code>li</code>s that are created in the <code>forEach</code> loop.</p>
<p>All the <code>li</code>s have three children:</p>
<ol>
<li>The flag - <code>img</code></li>
<li>The name of the country heading - <code>h3</code></li>
<li>A <code>div</code> which holds: (a) the <code>population</code> number - <code>h2</code> - and (b) The <code>'Population'</code> text - <code>h5</code></li>
</ol>
<p>We organized them in this manner because it'll be easier in the CSS to align everything using <strong>flexbox</strong>.</p>
<p>Alongside that, we added a <code>class</code> for each element because we want to style them individually in the CSS and then we used the <code>appendChild</code> to add these elements into the DOM at the end of the <code>forEach</code> function.</p>
<p>And lastly, we have a <code>numberWithComma</code> function from StackOverflow which will add a comma as a thousand separator for the <code>population</code> number.</p>
<h3 id="step3updatetheviewbasedonthesearchquery">Step 3 - update the view based on the search query</h3>
<p>In this final step we're going to get the search query from the <code>input</code> by attaching an <code>eventListener</code> on it, and we're going to modify our <code>showCountries</code> function so that it will <code>filter</code> out the values we don't want to be displayed. Let's see how we can do that:</p>
<pre><code class="language-js">const search_input = document.getElementById('search');
let search_term = '';
search_input.addEventListener('input', e =&gt; {
// saving the input value
search_term = e.target.value;
// re-displaying countries based on the new search_term
showCountries();
});
const showCountries = async () =&gt; {
// clear the results
results.innerHTML = '';
// see code above at Step 2.
countries
.filter(country =&gt;
country.name.toLowerCase().includes(search_term.toLowerCase())
)
.forEach(country =&gt; {
// see code above at Step 2.
});
// see code above at Step 2.
};
</code></pre>
<p>As you can see we added two new things in the <code>showCountries</code> function:</p>
<ol>
<li>We are clearing the previous <code>results</code> by setting the <code>innerHTML</code> to an empty string</li>
<li>We are filtering the <code>countries</code> by checking if the entered <code>search_term</code> is <code>included</code> in the <code>name</code> of the country, and we're also converting these two values <code>toLowerCase</code> as the user might type in upperCase letters and we still want to display the corresponding country</li>
</ol>
<h2 id="theentirejscode">The entire JS Code</h2>
<p>Below you can find the entire JS code in case you want to copy it:</p>
<pre><code class="language-js">const search_input = document.getElementById('search');
const results = document.getElementById('results');
let search_term = '';
let countries;
const fetchCountries = async () =&gt; {
countries = await fetch(
'https://restcountries.eu/rest/v2/all?fields=name;population;flag'
).then(res =&gt; res.json());
};
const showCountries = async () =&gt; {
results.innerHTML = '';
await fetchCountries();
const ul = document.createElement('ul');
ul.classList.add('countries');
countries
.filter(country =&gt;
country.name.toLowerCase().includes(search_term.toLowerCase())
)
.forEach(country =&gt; {
const li = document.createElement('li');
li.classList.add('country-item');
const country_flag = document.createElement('img');
country_flag.src = country.flag;
country_flag.classList.add('country-flag');
const country_name = document.createElement('h3');
country_name.innerText = country.name;
country_name.classList.add('country-name');
const country_info = document.createElement('div');
country_info.classList.add('country-info');
const country_population = document.createElement('h2');
country_population.innerText = numberWithCommas(country.population);
country_population.classList.add('country-population');
const country_popupation_text = document.createElement('h5');
country_popupation_text.innerText = 'Population';
country_popupation_text.classList.add('country-population-text');
country_info.appendChild(country_population);
country_info.appendChild(country_popupation_text);
li.appendChild(country_flag);
li.appendChild(country_name);
li.appendChild(country_info);
ul.appendChild(li);
});
results.appendChild(ul);
};
showCountries();
search_input.addEventListener('input', e =&gt; {
search_term = e.target.value;
showCountries();
});
// From StackOverflow https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
function numberWithCommas(x) {
return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
</code></pre>
<h2 id="thecss">The CSS</h2>
<p>Finally, let's add some styling to our little app:</p>
<pre><code class="language-css">@import url('https://fonts.googleapis.com/css?family=Roboto:300,500&amp;display=swap');
* {
box-sizing: border-box;
}
body {
background-image: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
font-family: 'Roboto', sans-serif;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
min-height: 100vh;
}
.countries {
padding: 0;
list-style-type: none;
width: 480px;
}
.country-item {
background-color: #fff;
border-radius: 3px;
box-shadow: 0 2px 3px rgba(0, 0, 0, 0.3);
display: flex;
justify-content: space-between;
align-items: center;
padding: 15px 10px;
margin: 10px 0;
}
.country-item:hover {
box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
}
.country-flag {
width: 40px;
}
.country-name {
flex: 2;
font-weight: normal;
letter-spacing: 0.5px;
margin: 0 5px;
text-align: center;
}
.country-info {
border-left: 1px solid #aaa;
color: #777;
padding: 0 15px;
flex: 1;
}
.country-population {
font-weight: 300;
line-height: 24px;
margin: 0;
margin-bottom: 12px;
}
.country-population-text {
font-weight: 300;
letter-spacing: 1px;
margin: 0;
text-transform: uppercase;
}
input {
font-family: 'Roboto', sans-serif;
border-radius: 3px;
border: 1px solid #ddd;
padding: 15px;
width: 480px;
}
</code></pre>
<p>Because it's nothing fancy I'm not going into details about the CSS, but if you have any questions regarding it feel free to contact me and I'll be happy to answer your questions! ?</p>
<h2 id="conclusion">Conclusion</h2>
<p>As mentioned above, this small app could probably be done much simpler with React, Vue or Angular, and you are free to do so if you want for your submission, but I wanted to play around with Vanilla JS and it was a fun experience for me! ?</p>
<p>As always, make sure you share what you're going to create!</p>
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
