---
card: "/images/default.jpg"
tags: [React]
description: React is a super-awesome front-end library that you can use t
author: "Milad E. Fahmy"
title: "How to Build a Weather Application with React and React Hooks"
created: "2021-08-15T19:26:58+02:00"
modified: "2021-08-15T19:26:58+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-react tag-react-hooks tag-javascript ">
<header class="post-full-header">
<h1 class="post-full-title">How to Build a Weather Application with React and React Hooks</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2021/03/Pink-Cute-Chic-Vintage-90s-Virtual-Trivia-Quiz-Presentations--39-.png 300w,
/news/content/images/size/w600/2021/03/Pink-Cute-Chic-Vintage-90s-Virtual-Trivia-Quiz-Presentations--39-.png 600w,
/news/content/images/size/w1000/2021/03/Pink-Cute-Chic-Vintage-90s-Virtual-Trivia-Quiz-Presentations--39-.png 1000w,
/news/content/images/size/w2000/2021/03/Pink-Cute-Chic-Vintage-90s-Virtual-Trivia-Quiz-Presentations--39-.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2021/03/Pink-Cute-Chic-Vintage-90s-Virtual-Trivia-Quiz-Presentations--39-.png" alt="How to Build a Weather Application with React and React Hooks">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>React is a super-awesome front-end library that you can use to build user interfaces.</p>
<p>One of the best things about React is that the components we create are encapsulated. In other words, they can't be seen. </p>
<p>Let's learn more about how all this works by building a weather application using React.</p>
<h2 id="how-to-install-node-and-npm">How to Install Node and npm</h2>
<p>To build our React application, we need a run-time environment called Node. It is mainly used to execute JavaScript code.</p>
<p>To download it, go to <a href="https://nodejs.org/en/">https://nodejs.org/en/</a>.</p>
<p>You'll also need <strong>npm</strong>, which is a package manager built on Node. You can use it to install packages for your JavaScript apps. Fortunately it comes with Node, so you don't need to download it separately.</p>
<p>Once both of them are finished, open your terminal or command prompt and type <code>node -v</code>. This checks which version of Node you have.</p>
<h2 id="how-to-create-a-react-app">How to Create a React App</h2>
<p>To create our react application, type <strong><code>npx create-react-app &lt;Your app name&gt;</code></strong><em><strong> </strong></em>in your terminal, or <strong><code>npx create-react-app my-weather-app</code></strong> in this case.</p>
<p>You'll see that the packages are being installed.</p>
<p>Once the packages are done, go into the project folder and type <strong><code>npm start</code></strong>.</p>
<p>You'll see the default React template, like this:</p>
<figcaption>The default React Boilerplate Template</figcaption>
</figure>
<figcaption>App.js</figcaption>
</figure>
<p>We don't need all of this right now. So, let's clear out some code.</p>
<p>In your <strong>app.js</strong> file, clear everything inside the <code>div</code> tag. Remove the logo import.</p>
<p>You will receive a blank screen on the output once you have done that.</p>
<figcaption>App.js after cleanup</figcaption>
</figure>
<h2 id="how-to-install-the-packages-we-need">How to Install the Packages We Need</h2>
<p>To make this application more attractive, we need some external packages. So, let's install them.</p>
<p>We need the <a href="https://react.semantic-ui.com/usage/">Semantic React UI</a> library. To install it, type the following command in the terminal:</p><pre><code class="language-bash">npm install semantic-ui-react semantic-ui-css</code></pre>
<p>Once it has been installed, open <strong>index.js</strong> and import the library. Just copy and paste the following command in your <strong>index.js</strong> file:</p><pre><code>import 'semantic-ui-css/semantic.min.css'</code></pre>
<p>We also need <a href="https://momentjs.com/">moment.js</a> to format our time. Install it using the following command:</p><pre><code>npm install moment --save</code></pre>
<p>You can check your package.json file to keep track of all the installed packages. </p>
<figcaption>package.json</figcaption>
</figure>
<p>Here, you can see all the packages you have so far.</p>
<h2 id="how-to-create-our-weather-application">How to Create Our Weather Application</h2>
<p>To make our weather application work, we need OpenWeatherMap, a third-party API that'll let us fetch the weather data.</p>
<p>Go to <a href="https://home.openweathermap.org/users/sign_up">https://home.openweathermap.org/users/sign_up</a> and create your own account.</p>
<p>After you are done, click on the API option on the Navigation bar. You'll see different options like Current Weather Data, Hourly 4 hour forecasts, 16 day forecasts, and others. These are API endpoints that you'll need to fetch the data.</p>
<p>You also need an API key to call these APIs. To get your API key, click on your username in the top right corner, and then on "my API keys".</p>
<p>Create an API key if it doesn't already exist.</p>
<p>In your main app folder, create a file called <strong>.env.</strong></p>
<p>This is an environment variable file that will contain all your API endpoints and keys.</p><pre><code>REACT_APP_API_URL = 'https://api.openweathermap.org/data/2.5'
REACT_APP_API_KEY = Paste your API key here.
REACT_APP_ICON_URL = 'https://openweathermap.org/img/w'</code></pre>
<p>Paste your copied API key in the REACT_APP_API_KEY variable.</p>
<h2 id="how-to-use-react-hooks">How to Use React Hooks</h2>
<p>React Hooks lets us use and manage state in our functional components.</p>
<p>We will use the <code>useState</code> hook and the <code>useEffect</code> hook. Let's import them at the top.</p><pre><code>import React, { useEffect, useState } from "react";</code></pre>
<p>Let's create two states. One is for latitude and another is for longitude.</p><pre><code>const [lat, setLat] = useState([]);
const [long, setLong] = useState([]);</code></pre>
<p>Now, create the <code>useEffect</code> function. Its goal is to load the functions when the application is loaded and reloaded.</p><pre><code>useEffect(() =&gt; {
navigator.geolocation.getCurrentPosition(function(position) {
setLat(position.coords.latitude);
setLong(position.coords.longitude);
});
console.log("Latitude is:", lat)
console.log("Longitude is:", long)
}, [lat, long]);</code></pre>
<p>We get our latitude and longitude using <code>navigator.geolocation</code> and we use <strong>setLong</strong><em><strong> </strong></em>and <strong>setLat</strong><em><strong> </strong></em>to set our longitude and latitude states. </p>
import React, { useEffect, useState } from "react";
export default function App() {
const [lat, setLat] = useState([]);
const [long, setLong] = useState([]);
useEffect(() =&gt; {
navigator.geolocation.getCurrentPosition(function(position) {
setLat(position.coords.latitude);
setLong(position.coords.longitude);
});
console.log("Latitude is:", lat)
console.log("Longitude is:", long)
}, [lat, long]);
return (
&lt;div className="App"&gt;
&lt;/div&gt;
);
}
</code></pre>
<figcaption>app.js</figcaption>
</figure>
<p>This is how our app.js file looks like now. You can check the console for the latitude and longitude values.</p>
Longitude is: 85.12761069999999</code></pre>
<figcaption>Our latitude and longitude</figcaption>
</figure>
<h2 id="how-to-get-our-current-location-using-latitude-and-longitude-">How to Get Our Current Location Using Latitude and Longitude.</h2>
<p>Let's create another function <strong>getWeather</strong> that will fetch the weather data from the Weather API, based on our latitude and longitude.</p>
<p>In this function, we are using a fetch call to get the data from the API. The <strong>process.env.REACT_APP_API_URL</strong> gets your API address<strong> </strong>and <strong>process.env.REACT_APP_API_KEY </strong>gets your API Key from the<strong> .env </strong>file. The lat and long are the latitude and longitude that we got previously.</p>
<p>And then we convert the data into <strong>JSON </strong>format.</p>
<p>In the next step, we use <strong>setData </strong>to store our result into the <strong>data </strong>object.</p><pre><code>await fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&amp;lon=${long}&amp;units=metric&amp;APPID=${process.env.REACT_APP_API_KEY}`)
.then(res =&gt; res.json())
.then(result =&gt; {
setData(result)
console.log(result);
});</code></pre>
<p>And we log the data in the console.</p>
<p>Here, you can see all the weather data based on our Latitude and Longitude.</p>
<p>Here is our new app.js file that fetches the weather data based on Longitude and Latitude:</p>
import React, { useEffect, useState } from "react";
import Weather from './components/weather';
export default function App() {
const [lat, setLat] = useState([]);
const [long, setLong] = useState([]);
const [data, setData] = useState([]);
useEffect(() =&gt; {
const fetchData = async () =&gt; {
navigator.geolocation.getCurrentPosition(function(position) {
setLat(position.coords.latitude);
setLong(position.coords.longitude);
});
await fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&amp;lon=${long}&amp;units=metric&amp;APPID=${process.env.REACT_APP_API_KEY}`)
.then(res =&gt; res.json())
.then(result =&gt; {
setData(result)
console.log(result);
});
}
fetchData();
}, [lat,long])
return (
&lt;div className="App"&gt;
&lt;/div&gt;
);
}
</code></pre>
<figcaption>app.js</figcaption>
</figure>
<h3 id="how-to-create-the-weather-components">How to Create the Weather Components</h3>
<p>Let's create our weather components where we will display our weather data.</p>
<p>In your src folder, create a folder called <strong>components</strong>, and in that folder, create a file called <strong>weather.js.</strong></p>
<p>Now, let's call our weather component in our main <strong>app.js</strong> file.</p>
import React, { useEffect, useState } from "react";
import Weather from './components/weather';
export default function App() {
const [lat, setLat] = useState([]);
const [long, setLong] = useState([]);
const [data, setData] = useState([]);
useEffect(() =&gt; {
const fetchData = async () =&gt; {
navigator.geolocation.getCurrentPosition(function(position) {
setLat(position.coords.latitude);
setLong(position.coords.longitude);
});
await fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&amp;lon=${long}&amp;units=metric&amp;APPID=${process.env.REACT_APP_API_KEY}`)
.then(res =&gt; res.json())
.then(result =&gt; {
setData(result)
console.log(result);
});
}
fetchData();
}, [lat,long])
return (
&lt;div className="App"&gt;
{(typeof data.main != 'undefined') ? (
&lt;Weather weatherData={data}/&gt;
): (
&lt;div&gt;&lt;/div&gt;
)}
&lt;/div&gt;
);
}
</code></pre>
<figcaption>Importing Weather Component in app.js file</figcaption>
</figure>
<p>You can see that I've included a check in the return statement. If the type of data we are getting is undefined, it will show us an empty div. And since the fetch data is an async function, it's mandatory to include this check. It loads the function after all other functions are done executing. So, if you remove this check, you will get an error.</p>
<p>This is because our application renders the return statement before the API call is made, and there is nothing to show in that case so it throws an undefined error.</p>
<p>To learn more about async/await, check out <a href="/news/async-await-in-javascript/">this article</a>.</p>
<h3 id="how-to-create-our-weather-body">How to Create our Weather Body</h3>
<p>For this part, we are going to use the Semantic UI library to design our interface.</p>
import './styles.css';
import { Card } from 'semantic-ui-react'
const CardExampleCard = ({weatherData}) =&gt; (
&lt;Card&gt;
&lt;Card.Content&gt;
&lt;Card.Header className="header"&gt;{weatherData.name}&lt;/Card.Header&gt;
&lt;/Card.Content&gt;
&lt;/Card&gt;
)
export default CardExampleCard;</code></pre>
<figcaption>Weather.js</figcaption>
</figure>
<p>But the question is, how do we get data from our app.js to the weather.js component?</p>
<p>The answer is simple. We can use props in React to send data from a parent component to a child component. In our case, our parent component is app.js and our child component is weather.js.</p>
<p>And to do that, just add the props in the component in <strong>app.js.</strong></p><pre><code>&lt;Weather weatherData={data}/&gt;</code></pre>
<p>Here, we are passing the data with the props name as weatherData. And we will receive the weatherData props in <strong>Weather.js.</strong></p><pre><code>import React from 'react';
import './styles.css';
import { Card } from 'semantic-ui-react'
const CardExampleCard = ({weatherData}) =&gt; (
&lt;Card&gt;
&lt;Card.Content&gt;
&lt;Card.Header className="header"&gt;{weatherData.name}&lt;/Card.Header&gt;
&lt;/Card.Content&gt;
&lt;/Card&gt;
)
export default CardExampleCard;</code></pre>
<p>You can see we get the name of the city according to the location.</p>
<p>Similarly, we can add more fields to our weather component.</p><pre><code>import React from 'react';
import './styles.css';
import { Card } from 'semantic-ui-react'
const CardExampleCard = ({weatherData}) =&gt; (
&lt;Card&gt;
&lt;Card.Content&gt;
&lt;Card.Header className="header"&gt;City Name: {weatherData.name}&lt;/Card.Header&gt;
&lt;p&gt;Temprature: {weatherData.main.temp}&lt;/p&gt;
&lt;p&gt;Sunrise: {weatherData.sys.sunrise}&lt;/p&gt;
&lt;p&gt;Sunset: {weatherData.sys.sunset}&lt;/p&gt;
&lt;p&gt;Description: {weatherData.weather[0].description}&lt;/p&gt;
&lt;/Card.Content&gt;
&lt;/Card&gt;
)
export default CardExampleCard;</code></pre>
<p>We can get the Temperature, Sunrise, Sunset, and Description from the API.</p>
<p>You can add any other fields you want, like Humdity, Windspeed, Visibility, and more.</p>
<h3 id="how-to-format-the-data-and-add-today-s-day-and-date">How to Format the Data and Add Today's Day and Date</h3>
<p>Let's format the data so that it's easy to understand. We will add some more fields.</p>
<p>To start, add the unit of temperature. You can do this by adding <strong>&amp;deg;C</strong> after the temperature.</p>
<p>Also, let's change sunrise and sunset to local time.</p><pre><code>import React from 'react';
import './styles.css';
import { Card } from 'semantic-ui-react'
const CardExampleCard = ({weatherData}) =&gt; (
&lt;Card&gt;
&lt;Card.Content&gt;
&lt;Card.Header className="header"&gt;City Name: {weatherData.name}&lt;/Card.Header&gt;
&lt;p&gt;Temprature: {weatherData.main.temp} &amp;deg;C&lt;/p&gt;
&lt;p&gt;Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('en-IN')}&lt;/p&gt;
&lt;p&gt;Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-IN')}&lt;/p&gt;
&lt;p&gt;Description: {weatherData.weather[0].main}&lt;/p&gt;
&lt;p&gt;Humidity: {weatherData.main.humidity} %&lt;/p&gt;
&lt;/Card.Content&gt;
&lt;/Card&gt;
)
export default CardExampleCard;</code></pre>
<p>Now, let's add today's day and date using <strong>moment.js.</strong></p>
&lt;p&gt;Day: {moment().format('dddd')}&lt;/p&gt;
&lt;p&gt;Date: {moment().format('LL')}&lt;/p&gt;</code></pre>
<figcaption>Using moment.js</figcaption>
</figure>
<p>We import the <strong>moment </strong>package at the top and display today's day and date respectively. The great thing about this package is that it automatically updates the date and the day.</p>
<p>This is how our <strong>weather.js</strong> look like now:</p>
import './styles.css';
import { Card } from 'semantic-ui-react';
import moment from 'moment';
const CardExampleCard = ({weatherData}) =&gt; (
&lt;Card&gt;
&lt;Card.Content&gt;
&lt;Card.Header className="header"&gt;City Name: {weatherData.name}&lt;/Card.Header&gt;
&lt;p&gt;Temprature: {weatherData.main.temp} &amp;deg;C&lt;/p&gt;
&lt;p&gt;Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('en-IN')}&lt;/p&gt;
&lt;p&gt;Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-IN')}&lt;/p&gt;
&lt;p&gt;Description: {weatherData.weather[0].main}&lt;/p&gt;
&lt;p&gt;Humidity: {weatherData.main.humidity} %&lt;/p&gt;
&lt;p&gt;Day: {moment().format('dddd')}&lt;/p&gt;
&lt;p&gt;Date: {moment().format('LL')}&lt;/p&gt;
&lt;/Card.Content&gt;
&lt;/Card&gt;
)
export default CardExampleCard;</code></pre>
<figcaption>weather.js</figcaption>
</figure>
<p>And the above is our output. </p>
<h2 id="let-s-do-some-styling">Let's Do Some Styling</h2>
<p>Now that we have all our data, let's style them to make it more attractive.</p>
import './styles.css';
import moment from 'moment';
const CardExampleCard = ({weatherData}) =&gt; (
&lt;div className="main"&gt;
&lt;p className="header"&gt;{weatherData.name}&lt;/p&gt;
&lt;div&gt;
&lt;p className="day"&gt;Day: {moment().format('dddd')}&lt;/p&gt;
&lt;/div&gt;
&lt;div&gt;
&lt;p className="temp"&gt;Temprature: {weatherData.main.temp} &amp;deg;C&lt;/p&gt;
&lt;/div&gt;
&lt;/div&gt;
)
export default CardExampleCard;</code></pre>
<figcaption>weather.js</figcaption>
</figure>
.main{
width: 700px;
border-radius: 15px;
background-color: #01579b;
}
.header{
background-color: #424242;
color: whitesmoke;
padding: 10px;
font-size: 28px;
border-radius: 15px;
font-family: 'Recursive', sans-serif;
}
.day{
padding: 15px;
color: whitesmoke;
font-family: 'Recursive', sans-serif;
font-size: 24px;
font-weight: 600;
}
.temp{
padding: 15px;
color: whitesmoke;
font-family: 'Recursive', sans-serif;
font-size: 18px;
}</code></pre>
<figcaption>styles.css</figcaption>
</figure>
<p>This is how our app looks now.</p>
<p>Let's use <strong>flexbox</strong> to arrange the data column-wise.</p><pre><code>&lt;div className="flex"&gt;
&lt;p className="day"&gt;Day: {moment().format('dddd')}&lt;/p&gt;
&lt;/div&gt;
&lt;div className="flex"&gt;
&lt;p className="temp"&gt;Temprature: {weatherData.main.temp} &amp;deg;C&lt;/p&gt;
&lt;/div&gt;</code></pre>
<p>Name the divs as 'flex' and add the following property in <strong><em>styles.css.</em></strong></p><pre><code>.flex{
display: flex;
justify-content: space-between;
}</code></pre>
<p>Our weather.js will now look something like this.</p><pre><code>import React from 'react';
import './styles.css';
import moment from 'moment';
const CardExampleCard = ({weatherData}) =&gt; (
&lt;div className="main"&gt;
&lt;p className="header"&gt;{weatherData.name}&lt;/p&gt;
&lt;div className="flex"&gt;
&lt;p className="day"&gt;Day: {moment().format('dddd')}&lt;/p&gt;
&lt;p className="day"&gt;{moment().format('LL')}&lt;/p&gt;
&lt;/div&gt;
&lt;div className="flex"&gt;
&lt;p className="temp"&gt;Temprature: {weatherData.main.temp} &amp;deg;C&lt;/p&gt;
&lt;p className="temp"&gt;Humidity: {weatherData.main.humidity} %&lt;/p&gt;
&lt;/div&gt;
&lt;/div&gt;
)
export default CardExampleCard;</code></pre>
<p>Similarly, add the remaining fields.</p>
import './styles.css';
import moment from 'moment';
const WeatherCard = ({weatherData}) =&gt; (
&lt;div className="main"&gt;
&lt;p className="header"&gt;{weatherData.name}&lt;/p&gt;
&lt;div className="flex"&gt;
&lt;p className="day"&gt;{moment().format('dddd')}, &lt;span&gt;{moment().format('LL')}&lt;/span&gt;&lt;/p&gt;
&lt;p className="description"&gt;{weatherData.weather[0].main}&lt;/p&gt;
&lt;/div&gt;
&lt;div className="flex"&gt;
&lt;p className="temp"&gt;Temprature: {weatherData.main.temp} &amp;deg;C&lt;/p&gt;
&lt;p className="temp"&gt;Humidity: {weatherData.main.humidity} %&lt;/p&gt;
&lt;/div&gt;
&lt;div className="flex"&gt;
&lt;p className="sunrise-sunset"&gt;Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('en-IN')}&lt;/p&gt;
&lt;p className="sunrise-sunset"&gt;Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-IN')}&lt;/p&gt;
&lt;/div&gt;
&lt;/div&gt;
)
export default WeatherCard;</code></pre>
<figcaption>weather.js</figcaption>
</figure>
.main{
width: 700px;
border-radius: 20px;
background-color: #01579b;
}
.top{
height: 60px;
background-color: #424242;
color: whitesmoke;
padding: 10px;
border-radius: 20px 20px 0 0;
font-family: 'Recursive', sans-serif;
display: flex;
justify-content: space-between;
}
.header{
background-color: #424242;
color: whitesmoke;
margin: 10px 0px 0px 10px;
font-size: 25px;
border-radius: 20px 20px 0 0;
font-family: 'Recursive', sans-serif;
}
.day{
padding: 15px;
color: whitesmoke;
font-family: 'Recursive', sans-serif;
font-size: 24px;
font-weight: 600;
}
.temp{
padding: 15px;
color: whitesmoke;
font-family: 'Recursive', sans-serif;
font-size: 18px;
}
.flex{
display: flex;
justify-content: space-between;
}
.sunrise-sunset{
padding: 15px;
color: whitesmoke;
font-family: 'Recursive', sans-serif;
font-size: 16px;
}
.description{
padding: 15px;
color: whitesmoke;
font-family: 'Recursive', sans-serif;
font-size: 24px;
font-weight: 600;
}</code></pre>
<figcaption>styles.css</figcaption>
</figure>
<p>This is how our application looks now:</p>
<h3 id="how-to-add-a-refresh-button-">How to Add a Refresh Button.</h3>
<p>Let's add a refresh button at the top of our page.</p>
import './styles.css';
import moment from 'moment';
import { Button } from 'semantic-ui-react';
const refresh = () =&gt; {
window.location.reload();
}
const WeatherCard = ({weatherData}) =&gt; (
&lt;div className="main"&gt;
&lt;div className="top"&gt;
&lt;p className="header"&gt;{weatherData.name}&lt;/p&gt;
&lt;Button className="button" inverted color='blue' circular icon='refresh' onClick={refresh} /&gt;
&lt;/div&gt;
&lt;div className="flex"&gt;
&lt;p className="day"&gt;{moment().format('dddd')}, &lt;span&gt;{moment().format('LL')}&lt;/span&gt;&lt;/p&gt;
&lt;p className="description"&gt;{weatherData.weather[0].main}&lt;/p&gt;
&lt;/div&gt;
&lt;div className="flex"&gt;
&lt;p className="temp"&gt;Temprature: {weatherData.main.temp} &amp;deg;C&lt;/p&gt;
&lt;p className="temp"&gt;Humidity: {weatherData.main.humidity} %&lt;/p&gt;
&lt;/div&gt;
&lt;div className="flex"&gt;
&lt;p className="sunrise-sunset"&gt;Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('en-IN')}&lt;/p&gt;
&lt;p className="sunrise-sunset"&gt;Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-IN')}&lt;/p&gt;
&lt;/div&gt;
&lt;/div&gt;
)
export default WeatherCard;</code></pre>
<figcaption>weather.js</figcaption>
</figure>
width: 35px;
height: 35px;
}</code></pre>
<figcaption>styles.css</figcaption>
</figure>
<p>You can see a button that will trigger the refresh function. When you push it, it will refresh the page.</p>
<h3 id="how-to-add-a-loader-when-our-application-is-loading-">How to Add a Loader When Our Application is Loading.</h3>
<p>Let's add a loader to make the app even more amazing.</p>
<p>Import Loader from Semantic UI and add it in the return function, where we check for undefined data. </p>
&lt;div className="App"&gt;
{(typeof data.main != 'undefined') ? (
&lt;Weather weatherData={data}/&gt;
): (
&lt;div&gt;
&lt;Dimmer active&gt;
&lt;Loader&gt;Loading..&lt;/Loader&gt;
&lt;/Dimmer&gt;
&lt;/div&gt;
)}
&lt;/div&gt;</code></pre>
<figcaption>app.js</figcaption>
</figure>
<h2 id="let-s-recap-what-we-ve-done">Let's Recap What We've Done</h2>
<p>We have created a React application that shows the current weather based on your location.</p>
<p>Let's go through everything we have done so far.</p>
<h3 id="we-learned-about-state-and-props">We Learned about State and Props</h3>
<p>State and Props are very powerful features in React. They are used to manage data and control its flow within different components. </p>
<p>In our application, we are managing the state which the state of the application. For example, the name of the city, the temperature, the date, humidity, and all. They vary from user to user, depending on their location. </p>
<p>Props, on the other hand, are used to pass data between components. We are getting the data in our <strong>app.js</strong> file, but we are reading it in <strong>weather.js.<em> </em></strong>Remember, props can only be used to pass data from the parent component to the child component.</p>
<h3 id="we-used-react-hooks">We Used React Hooks</h3>
<p>If you have used class components, then you must know about life-cycle methods. If not, they are the methods that are called when our page renders or re-renders. But we can't use life-cycle methods in functional components, as they are specially built for class components. </p>
<p>So, React Hooks is the alternative. We have used two hooks in our application. One is useState, used to manage the state of the application. The other is the useEffect, which loads when the page is rendered or loaded.</p>
<h3 id="we-tried-out-semantic-ui">We Tried Out Semantic UI </h3>
<p>Semantic UI is a library for React which has predefined awesome components.</p>
<p>That's all, folks. You can add more features to the app, like a five-day forecast, icons, and more.</p>
<p>You can <a href="https://github.com/nishant-666/React-weather">find the code on Github</a> if you want to experiment further.</p>
<p>You can also <a href="https://youtu.be/Y1wKWIRNthQ">watch this tutorial on my YouTube channel</a> if you'd like.</p>
<blockquote>Try and experiment, happy learning. </blockquote>
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
