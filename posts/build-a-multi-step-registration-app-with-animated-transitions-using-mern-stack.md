---
card: "https://cdn-media-2.freecodecamp.org/w1280/6044ae70a7946308b76836e2.jpg"
tags: [React]
description: In this article, we will build an amazing Multi Step Registra
author: "Milad E. Fahmy"
title: "How to Build a Multi-Step Registration App with Animated Transitions Using the MERN Stack"
created: "2021-08-15T19:27:03+02:00"
modified: "2021-08-15T19:27:03+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-react tag-javascript tag-mongodb tag-express tag-node tag-full-stack tag-app-development ">
<header class="post-full-header">
<h1 class="post-full-title">How to Build a Multi-Step Registration App with Animated Transitions Using the MERN Stack</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/6044ae70a7946308b76836e2.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/6044ae70a7946308b76836e2.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/6044ae70a7946308b76836e2.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/6044ae70a7946308b76836e2.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/6044ae70a7946308b76836e2.jpg" alt="How to Build a Multi-Step Registration App with Animated Transitions Using the MERN Stack">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>In this article, we will build an amazing Multi Step Registration form with smooth animated transitions using the MERN stack (MongoDB, Express, React, and Node.js).</p>
<p>By building this App, you will learn a lot of concepts in React and Node.js including:</p>
<ul>
<li>How to manage data for multiple forms with validation for each field</li>
<li>How to retain values of forms data across routes</li>
<li>How to update progress indications for each registration step</li>
<li>How to load country-specific state and city from the API</li>
<li>How to create smooth sliding animations using a very popular framer-motion library</li>
<li>How to create Rest APIs using Express.js</li>
<li>How to implement login and registration functionality with MongoDB</li>
<li>How to store and validate passwords stored in encrypted form in MongoDB</li>
</ul>
<p>And much more.</p>
<p>We will be using React Hooks syntax for building this application in React. So if you're new to React Hooks, check out my <a href="https://levelup.gitconnected.com/an-introduction-to-react-hooks-50281fd961fe?source=friends_link&amp;sk=89baff89ec8bc637e7c13b7554904e54">Introduction to React Hooks</a> article to learn the basics of Hooks.</p>
<p>We will also be using a MongoDB database to store the registered user data, so make sure you install MongoDB locally by following instructions from <a href="https://levelup.gitconnected.com/how-to-install-mongodb-database-on-local-environment-19a8a76f1b92?source=friends_link&amp;sk=416b443bad1f86b292e4b72602cf5c9b">this article</a>.</p>
<p>Alright, let’s get started.</p>
<h2 id="initial-project-setup">Initial Project Setup</h2>
<p>Create a new project using <code>create-react-app</code>:</p><pre><code class="language-javascript">npx create-react-app multi-step-form-using-mern
</code></pre>
<p>Once you've created the project, delete all files from the <code>src</code> folder and create an <code>index.js</code> file and a <code>styles.scss</code> file inside the <code>src</code> folder. Also create <code>components</code>, <code>router</code>, &nbsp;and <code>utils</code> folders inside the <code>src</code> folder.</p>
<p>Install the necessary dependencies like this:</p><pre><code class="language-javascript">yarn add axios@0.21.1 bootstrap@4.6.0 react-bootstrap@1.5.0 country-state-city@2.0.0 framer-motion@3.7.0 node-sass@4.14.1 react-hook-form@6.15.4 react-router-dom@5.2.0 sweetalert2@10.15.5
</code></pre>
<p>Open your <code>styles.scss</code> file and add the contents from <a href="https://github.com/myogeshchavan97/multi-step-form-using-mern/blob/master/src/styles.scss">here</a> inside it.</p>
<p>We'll use SCSS syntax to write CSS. So if you're new to SCSS, check out <a href="https://medium.com/better-programming/an-introduction-to-sass-scss-fdbda159b40?source=friends_link&amp;sk=c0846e19ddb4f53919a6abaf29032d10">my article here</a> for an introduction to it.</p>
<h2 id="how-to-create-the-initial-pages">How to Create the Initial Pages</h2>
<p>Create a new file <code>Header.js</code> inside the <code>components</code> folder with the following content:</p><pre><code class="language-jsx">import React from 'react';
const Header = () =&gt; (
&lt;div&gt;
&lt;h1&gt;Multi Step Registration&lt;/h1&gt;
&lt;/div&gt;
);
export default Header;
</code></pre>
<p>Create a new file <code>FirstStep.js</code> inside the <code>components</code> folder with the following content:</p><pre><code class="language-jsx">import React from 'react';
const FirstStep = () =&gt; {
return (
&lt;div&gt;
First Step Form
&lt;/div&gt;
)
};
export default FirstStep;
</code></pre>
<p>Create a new file <code>AppRouter.js</code> inside the <code>router</code> folder with the following content:</p><pre><code class="language-jsx">import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import FirstStep from '../components/FirstStep';
import Header from '../components/Header';
const AppRouter = () =&gt; (
&lt;BrowserRouter&gt;
&lt;div className="container"&gt;
&lt;Header /&gt;
&lt;Switch&gt;
&lt;Route component={FirstStep} path="/" exact={true} /&gt;
&lt;/Switch&gt;
&lt;/div&gt;
&lt;/BrowserRouter&gt;
);
export default AppRouter;
</code></pre>
<p>In this file, initially, we have added a single route for the first step.</p>
<p>If you're new to React Router, check out my free <a href="https://yogeshchavan1.podia.com/react-router-introduction">Introduction to React Router</a> course.</p>
<p>Now, open the <code>src/index.js</code> file and add the following content inside it:</p><pre><code class="language-jsx">import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './router/AppRouter';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.scss';
ReactDOM.render(&lt;AppRouter /&gt;, document.getElementById('root'));
</code></pre>
<p>Start the application by running the <code>yarn start</code> command and you will see the following screen:</p>
<h2 id="how-to-add-progress-steps-in-the-header">How to Add Progress Steps in the Header</h2>
<p>Create a new file called <code>Progress.js</code> inside the <code>components</code> folder with the following content:</p><pre><code class="language-jsx">import React from 'react';
const Progress = () =&gt; {
return (
&lt;React.Fragment&gt;
&lt;div className="steps"&gt;
&lt;div className="step"&gt;
&lt;div&gt;1&lt;/div&gt;
&lt;div&gt;Step 1&lt;/div&gt;
&lt;/div&gt;
&lt;div className="step"&gt;
&lt;div&gt;2&lt;/div&gt;
&lt;div&gt;Step 2&lt;/div&gt;
&lt;/div&gt;
&lt;div className="step"&gt;
&lt;div&gt;3&lt;/div&gt;
&lt;div&gt;Step 3&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/React.Fragment&gt;
);
};
export default Progress;
</code></pre>
<p>and use it inside the <code>Header.js</code> file as shown below:</p><pre><code class="language-jsx">import React from 'react';
import Progress from './Progress';
const Header = () =&gt; (
&lt;div&gt;
&lt;h1&gt;Multi Step Registration&lt;/h1&gt;
&lt;Progress /&gt;
&lt;/div&gt;
);
export default Header;
</code></pre>
<p>Now, if you check the application, you will see the following screen:</p>
<h2 id="how-to-create-the-first-step-form">How to Create the First Step Form</h2>
<p>Open the <code>components/FirstStep.js</code> file and replace what's in there with the following contents:</p><pre><code class="language-jsx">import React from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button } from 'react-bootstrap';
const FirstStep = (props) =&gt; {
const { register, handleSubmit, errors } = useForm();
const onSubmit = (data) =&gt; {
console.log(data);
};
return (
&lt;Form className="input-form" onSubmit={handleSubmit(onSubmit)}&gt;
&lt;div className="col-md-6 offset-md-3"&gt;
&lt;Form.Group controlId="first_name"&gt;
&lt;Form.Label&gt;First Name&lt;/Form.Label&gt;
&lt;Form.Control
type="text"
name="first_name"
placeholder="Enter your first name"
autoComplete="off"
ref={register({
required: 'First name is required.',
pattern: {
value: /^[a-zA-Z]+$/,
message: 'First name should contain only characters.'
}
})}
className={`${errors.first_name ? 'input-error' : ''}`}
/&gt;
{errors.first_name &amp;&amp; (
&lt;p className="errorMsg"&gt;{errors.first_name.message}&lt;/p&gt;
)}
&lt;/Form.Group&gt;
&lt;Form.Group controlId="last_name"&gt;
&lt;Form.Label&gt;Last Name&lt;/Form.Label&gt;
&lt;Form.Control
type="text"
name="last_name"
placeholder="Enter your last name"
autoComplete="off"
ref={register({
required: 'Last name is required.',
pattern: {
value: /^[a-zA-Z]+$/,
message: 'Last name should contain only characters.'
}
})}
className={`${errors.last_name ? 'input-error' : ''}`}
/&gt;
{errors.last_name &amp;&amp; (
&lt;p className="errorMsg"&gt;{errors.last_name.message}&lt;/p&gt;
)}
&lt;/Form.Group&gt;
&lt;Button variant="primary" type="submit"&gt;
Next
&lt;/Button&gt;
&lt;/div&gt;
&lt;/Form&gt;
);
};
export default FirstStep;
</code></pre>
<p>Here, we're using a very popular <a href="https://react-hook-form.com/">react-hook-form</a> library to easily manage forms with validations.</p>
<p>React-hook-form makes it really easy to work with simple as well as complex forms, as we don't need to manage the state of each input field and its <code>onChange</code> handler ourselves. This makes the code cleaner and easier to understand.</p>
<p>Check out <a href="/news/build-forms-in-react-with-react-hook-form-library/">my article here</a> to learn about <code>react-hook-form</code> in detail.</p>
<p>As you can see in the above code, to use the <code>react-hook-form</code> library we need to first import and use the <code>useForm</code> hook.</p><pre><code class="language-jsx">  const { register, handleSubmit, errors } = useForm();
</code></pre>
<p>Here,</p>
<ul>
<li><code>register</code> is a function that we'll use as a <code>ref</code> provided by the <code>useForm</code> hook. We can assign it to each input field so that the <code>react-hook-form</code> can track the changes for the input field value</li>
<li><code>handleSubmit</code> is the function we can call when the form is submitted</li>
<li><code>errors</code> will contain the validation errors, if any</li>
</ul>
<p>In the above code, we have given a <code>ref</code> to each input field that we got from the <code>useForm</code> hook like this:</p><pre><code class="language-js">ref={register({
required: 'First name is required.',
pattern: {
value: /^[a-zA-Z]+$/,
message: 'First name should contain only characters.'
}
})}
</code></pre>
<p>Also, we added the <code>onSubmit</code> function which is passed to the <code>handleSubmit</code> function.</p><pre><code class="language-js">&lt;Form className="input-form" onSubmit={handleSubmit(onSubmit)}&gt;
</code></pre>
<p>Note that for each input field, we have given a unique <code>name</code> which is mandatory so <code>react-hook-form</code> can track the changing data.</p>
<p>When we submit the form, the <code>handleSubmit</code> function will handle the form submission. It will send the user entered data to the <code>onSubmit</code> function which we’re logging to the console.</p><pre><code class="language-js">const onSubmit = (data) =&gt; {
console.log(data);
};
</code></pre>
<p>If there are any errors, we'll display them like this:</p><pre><code class="language-js">{errors.first_name &amp;&amp; (
&lt;p className="errorMsg"&gt;{errors.first_name.message}&lt;/p&gt;
)}
</code></pre>
<p>The <code>errors</code> object will be automatically populated with the property name denoted by the <code>name</code> given to each input field (if there are any errors). <code>first_name</code> in the above case is the name given to the first input field.</p>
<p>Now, let's check the application's functionality:</p>
<p>As you can see, with very little code, we've added a responsive validation functionality to the form.</p>
<h2 id="how-to-create-the-second-step-form">How to Create the Second Step Form</h2>
<p>Now, create a new file <code>SecondStep.js</code> inside the <code>components</code> folder with the following content:</p><pre><code class="language-jsx">import React from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button } from 'react-bootstrap';
const SecondStep = (props) =&gt; {
const { register, handleSubmit, errors } = useForm();
const onSubmit = (data) =&gt; {
console.log(data);
};
return (
&lt;Form className="input-form" onSubmit={handleSubmit(onSubmit)}&gt;
&lt;div className="col-md-6 offset-md-3"&gt;
&lt;Form.Group controlId="first_name"&gt;
&lt;Form.Label&gt;Email&lt;/Form.Label&gt;
&lt;Form.Control
type="email"
name="user_email"
placeholder="Enter your email address"
autoComplete="off"
ref={register({
required: 'Email is required.',
pattern: {
value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
message: 'Email is not valid.'
}
})}
className={`${errors.user_email ? 'input-error' : ''}`}
/&gt;
{errors.user_email &amp;&amp; (
&lt;p className="errorMsg"&gt;{errors.user_email.message}&lt;/p&gt;
)}
&lt;/Form.Group&gt;
&lt;Form.Group controlId="password"&gt;
&lt;Form.Label&gt;Password&lt;/Form.Label&gt;
&lt;Form.Control
type="password"
name="user_password"
placeholder="Choose a password"
autoComplete="off"
ref={register({
required: 'Password is required.',
minLength: {
value: 6,
message: 'Password should have at-least 6 characters.'
}
})}
className={`${errors.user_password ? 'input-error' : ''}`}
/&gt;
{errors.user_password &amp;&amp; (
&lt;p className="errorMsg"&gt;{errors.user_password.message}&lt;/p&gt;
)}
&lt;/Form.Group&gt;
&lt;Button variant="primary" type="submit"&gt;
Next
&lt;/Button&gt;
&lt;/div&gt;
&lt;/Form&gt;
);
};
export default SecondStep;
</code></pre>
<p>Now, let's add another route in the <code>AppRouter.js</code> file for the <code>SecondStep</code> component.</p><pre><code class="language-jsx">import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import FirstStep from '../components/FirstStep';
import Header from '../components/Header';
import SecondStep from '../components/SecondStep';
const AppRouter = () =&gt; (
&lt;BrowserRouter&gt;
&lt;div className="container"&gt;
&lt;Header /&gt;
&lt;Switch&gt;
&lt;Route component={FirstStep} path="/" exact={true} /&gt;
&lt;Route component={SecondStep} path="/second" /&gt;
&lt;/Switch&gt;
&lt;/div&gt;
&lt;/BrowserRouter&gt;
);
export default AppRouter;
</code></pre>
<p>Also, import the <code>SecondStep</code> component at the top of the file as shown above.</p>
<p>Now, we've added a route for the second step, let's check the application by accessing the URL &nbsp;<a href="http://localhost:3000/second">http://localhost:3000/second</a>.</p>
<p>As you can see, the functionality is working fine, but we're directly accessing the <code>/second</code> route. Instead, let's add the code to programmatically redirect from step 1 to step 2.</p>
<p>When we provide any component for the <code>Route</code> inside the <code>BrowserRouter</code>, React Router automatically passes 3 props to that component, which are:</p>
<ul>
<li>history</li>
<li>location</li>
<li>match</li>
</ul>
<p>Out of these, the <code>history</code> object contains a <code>push</code> method that we can use to redirect from one component to another.</p>
<p>So open the <code>FirstStep.js</code> file and replace the <code>onSubmit</code> function with the following code:</p><pre><code class="language-js">const onSubmit = (data) =&gt; {
console.log(data);
props.history.push('/second');
};
</code></pre>
<p>Here, for the <code>push</code> method, we've provided the route to which we need to redirect.</p>
<p>As you can see, when we click on the <code>Next</code> button in the first step we're redirected to the second step.</p>
<p>Now, create a new file <code>constants.js</code> inside the <code>utils</code> folder with the following content:</p><pre><code class="language-js">export const BASE_API_URL = 'http://localhost:3030';
</code></pre>
<p>Here, we're specifying our backend API's URL so we don't need to specify it in every API call. We just need to use this constant when we need to make an API call.</p>
<p>Now, let's add another route in our <code>AppRouter.js</code> file for the <code>ThirdStep</code> component.</p><pre><code class="language-jsx">...
&lt;Switch&gt;
&lt;Route component={FirstStep} path="/" exact={true} /&gt;
&lt;Route component={SecondStep} path="/second" /&gt;
&lt;Route component={ThirdStep} path="/third" /&gt;
&lt;/Switch&gt;
...
</code></pre>
<h2 id="how-to-get-a-list-of-all-countries-from-the-api">How to Get a List of All Countries from the API</h2>
<p>Create a new file <code>ThirdStep.js</code> inside the <code>components</code> folder with the following content:</p><pre><code class="language-jsx">import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import csc from 'country-state-city';
import axios from 'axios';
import { BASE_API_URL } from '../utils/constants';
const ThirdStep = (props) =&gt; {
const [countries, setCountries] = useState([]);
const [states, setStates] = useState([]);
const [cities, setCities] = useState([]);
const [isLoading, setIsLoading] = useState(false);
const [selectedCountry, setSelectedCountry] = useState('');
const [selectedState, setSelectedState] = useState('');
const [selectedCity, setSelectedCity] = useState('');
useEffect(() =&gt; {
const getCountries = async () =&gt; {
try {
const result = await csc.getAllCountries();
console.log(result);
} catch (error) {}
};
getCountries();
}, []);
const handleSubmit = async (event) =&gt; {
event.preventDefault();
};
return (
&lt;Form className="input-form" onSubmit={handleSubmit}&gt;
&lt;div className="col-md-6 offset-md-3"&gt;&lt;/div&gt;
&lt;/Form&gt;
);
};
export default ThirdStep;
</code></pre>
<p>In this file, we're using a <a href="https://www.npmjs.com/package/country-state-city">country-state-city</a> npm library to get a list of available countries, cities, and states like this:</p><pre><code class="language-js">import csc from 'country-state-city';
</code></pre>
<p>Then in the component, we've defined some states:</p><pre><code class="language-js">const [countries, setCountries] = useState([]);
const [states, setStates] = useState([]);
const [cities, setCities] = useState([]);
const [isLoading, setIsLoading] = useState(false);
const [selectedCountry, setSelectedCountry] = useState('');
const [selectedState, setSelectedState] = useState('');
const [selectedCity, setSelectedCity] = useState('');
</code></pre>
<p>Here, <code>countries</code>, <code>states</code> and <code>cities</code> are declared in the state that will store the list of <code>countries</code>, <code>states</code> and <code>cities</code>, respectively, coming from the API.</p>
<p>We add another <code>isLoading</code> state to keep track of when the data is loading. <code>selectedCountry</code>, <code>selectedState</code> and <code>selectedCity</code> will contain the selected value when the user selects a particular dropdown value.</p>
<p>Then we've added a <code>useEffect</code> hook to make an API call to get the list of countries as shown below:</p><pre><code class="language-js">useEffect(() =&gt; {
...
const result = await csc.getAllCountries();
...
}, []);
</code></pre>
<p>Here, we're calling the <code>getAllCountries</code> method of the <code>country-state-city</code> library to get a list of available countries. &nbsp;</p>
<p>Note that we've passed an empty array <code>[]</code> as the second argument to the <code>useEffect</code> hook so the hook will be called only once when the component is mounted.</p>
<p>Now, open the <code>SecondStep.js</code> file and replace the <code>onSubmit</code> function with the following code:</p><pre><code class="language-js">const onSubmit = (data) =&gt; {
console.log(data);
props.history.push('/third');
};
</code></pre>
<p>Using this code, we can easily navigate to the <code>ThirdStep</code> component.</p>
<p>Now, let's check the application.</p>
<p>As you can see, on the component load, we're getting a list of available countries in an array of objects.</p>
<p>Each object contains an <code>isoCode</code> and <code>name</code> property that we can use in our code to display it on the screen.</p>
<p>So change the <code>useEffect</code> hook to the below code:</p><pre><code class="language-js">useEffect(() =&gt; {
const getCountries = async () =&gt; {
try {
setIsLoading(true);
const result = await csc.getAllCountries();
let allCountries = [];
allCountries = result?.map(({ isoCode, name }) =&gt; ({
isoCode,
name
}));
const [{ isoCode: firstCountry } = {}] = allCountries;
setCountries(allCountries);
setSelectedCountry(firstCountry);
setIsLoading(false);
} catch (error) {
setCountries([]);
setIsLoading(false);
}
};
getCountries();
}, []);
</code></pre>
<p>Here, we're first setting the <code>isLoading</code> flag to <code>true</code> to indicate that data is loading, which we will use soon.</p>
<p>Each object of the array contains many other properties like <code>phonecode</code>, <code>flag</code>, <code>currency</code> and so on, but we only want <code>isoCode</code> and <code>name</code>. So we're using the array map method to filter out only those properties, as shown below:</p><pre><code class="language-js">allCountries = result?.map(({ isoCode, name }) =&gt; ({
isoCode,
name
}));
</code></pre>
<p>Here, we're using the ES11 optional chaining operator which is denoted by the <code>?</code>. The code after the <code>?</code> will be executed only if the previous reference is not <code>undefined</code> or <code>null</code>. And as we're destructuring <code>isoCode</code> and <code>name</code>, we need the optional chaining operator.</p>
<p>The optional chaining operator is very useful in many scenarios. You can learn more about it in my <a href="https://modernjavascript.yogeshchavan.dev/">Mastering Modern JavaScript</a> book.</p>
<p>Now we have the following code:</p><pre><code class="language-js">const [{ isoCode: firstCountry } = {}] = allCountries;
setCountries(allCountries);
setSelectedCountry(firstCountry);
setIsLoading(false);
</code></pre>
<p>Let's understand what we're doing here.</p>
<p>Here, we've used object destructuring renaming with assignment syntax. We're destructuring the <code>isoCode</code> property from the first object of the <code>allCountries</code> array of objects and renaming the <code>isoCode</code> property to <code>firstCountry</code> just to identify that it's the first country from the list. </p>
<p>We're also assigning a default empty object so that if the <code>allCountries</code> array is empty we won't get an error.</p>
<p>In short, we are saying to take the <code>isoCode</code> property from the first object from the <code>allCountries</code> array of objects and rename it to <code>firstCountry</code> . </p>
<p>If the <code>firstCountry</code> property does not exist in the first object from the <code>allCountries</code> array, then assign a default value of empty object <code>{}</code> to the <code>firstCountry</code> variable.</p>
<p>Then we're updating the <code>selectedCountry</code> state value to the <code>firstCountry</code> value and <code>isLoading</code> state value to <code>false</code> using the below code:</p><pre><code class="language-js">setSelectedCountry(firstCountry);
setIsLoading(false);
</code></pre>
<p>Now, in the <code>ThirdStep.js</code> file, change the following code:</p><pre><code class="language-jsx">return (
&lt;Form className="input-form" onSubmit={handleSubmit}&gt;
&lt;div className="col-md-6 offset-md-3"&gt;&lt;/div&gt;
&lt;/Form&gt;
);
</code></pre>
<p>to this code:</p><pre><code class="language-jsx">return (
&lt;Form className="input-form" onSubmit={handleSubmit}&gt;
&lt;div className="col-md-6 offset-md-3"&gt;
&lt;Form.Group controlId="country"&gt;
{isLoading &amp;&amp; (
&lt;p className="loading"&gt;Loading countries. Please wait...&lt;/p&gt;
)}
&lt;Form.Label&gt;Country&lt;/Form.Label&gt;
&lt;Form.Control
as="select"
name="country"
value={selectedCountry}
onChange={(event) =&gt; setSelectedCountry(event.target.value)}
&gt;
{countries.map(({ isoCode, name }) =&gt; (
&lt;option value={isoCode} key={isoCode}&gt;
{name}
&lt;/option&gt;
))}
&lt;/Form.Control&gt;
&lt;/Form.Group&gt;
&lt;/div&gt;
&lt;/Form&gt;
);
</code></pre>
<p>We can see the list of countries populated in the dropdown.</p>
<p>Now, if you navigate to step 3, you will see the following screen:</p>
<p>As you can see, the country dropdown is correctly populated with all countries. On change of the dropdown value, the <code>selectedCountry</code> state also changes to the country code (<code>isoCode</code>) as you can see in the React dev tools.</p>
<h2 id="how-to-get-a-list-of-states-from-the-api">How to Get a List of States from the API</h2>
<p>Now, let's add the code for getting a list of states based on the selected country.</p>
<p>Add the following code after the first <code>useEffect</code> hook in the <code>ThirdStep.js</code> file.</p><pre><code class="language-js">useEffect(() =&gt; {
const getStates = async () =&gt; {
try {
const result = await csc.getStatesOfCountry(selectedCountry);
let allStates = [];
allStates = result?.map(({ isoCode, name }) =&gt; ({
isoCode,
name
}));
console.log({ allStates });
const [{ isoCode: firstState = '' } = {}] = allStates;
setCities([]);
setSelectedCity('');
setStates(allStates);
setSelectedState(firstState);
} catch (error) {
setStates([]);
setCities([]);
setSelectedCity('');
}
};
getStates();
}, [selectedCountry]);
</code></pre>
<p>Here, we're calling the <code>getStatesOfCountry</code> method from the <code>country-state-city</code> library by passing the <code>selectedCountry</code> as the parameter. Then based on the result of the API, we're updating the respective states as shown below:</p><pre><code class="language-js">setCities([]);
setSelectedCity('');
setStates(allStates);
setSelectedState(firstState);
</code></pre>
<p>All the country, state and city dropdowns are inter-related. If we're changing the country, we should update the state also, which we're doing in the above code.</p>
<p>Also, note that we've passed the <code>selectedCountry</code> as a second parameter to the <code>useEffect</code> hook in the dependencies array:</p><pre><code class="language-js">useEffect(() =&gt; {
...
}, [selectedCountry]);
</code></pre>
<p>So this effect will only run when the <code>selectedCountry</code> state changes. This means that once we change the country dropdown, we're making an API call to get the states related to only that country and then populating the state's dropdown values.</p>
<p>Now, add the following code after the first <code>Form.Group</code> closing tag that's after the country dropdown:</p><pre><code class="language-jsx">&lt;Form.Group controlId="state"&gt;
&lt;Form.Label&gt;State&lt;/Form.Label&gt;
&lt;Form.Control
as="select"
name="state"
value={selectedState}
onChange={(event) =&gt; setSelectedState(event.target.value)}
&gt;
{states.length &gt; 0 ? (
states.map(({ isoCode, name }) =&gt; (
&lt;option value={isoCode} key={isoCode}&gt;
{name}
&lt;/option&gt;
))
) : (
&lt;option value="" key=""&gt;
No state found
&lt;/option&gt;
)}
&lt;/Form.Control&gt;
&lt;/Form.Group&gt;
</code></pre>
<p>Here, we're displaying the state dropdown on the screen. If there are no states for the selected country, we show a <code>No state found</code> message because there are some countries that don't have any states.</p>
<p>Now, if you check the application, you will see the following screen:</p>
<p>As you can see above, when we change the country dropdown value, the state dropdown list is also updated based on the selected country.</p>
<h2 id="how-to-get-a-list-of-cities-from-the-api">How to Get a List of Cities from the API</h2>
<p>Now, let's populate the cities based on the country and state values.</p>
<p>Add another <code>useEffect</code> hook after the second hook as shown below:</p><pre><code class="language-js">useEffect(() =&gt; {
const getCities = async () =&gt; {
try {
const result = await csc.getCitiesOfState(
selectedCountry,
selectedState
);
let allCities = [];
allCities = result?.map(({ name }) =&gt; ({
name
}));
const [{ name: firstCity = '' } = {}] = allCities;
setCities(allCities);
setSelectedCity(firstCity);
} catch (error) {
setCities([]);
}
};
getCities();
}, [selectedState]);
</code></pre>
<p>Here, we're calling the <code>getCitiesOfState</code> method from the <code>country-state-city</code> library by passing the <code>selectedCountry</code> and <code>selectedState</code> as parameters. Based on the result of the API, we update the cities dropdown.</p>
<p>Now, add the following code after the second <code>Form.Group</code> closing tag that's after the state dropdown:</p><pre><code class="language-jsx">&lt;Form.Group controlId="city"&gt;
&lt;Form.Label&gt;City&lt;/Form.Label&gt;
&lt;Form.Control
as="select"
name="city"
value={selectedCity}
onChange={(event) =&gt; setSelectedCity(event.target.value)}
&gt;
{cities.length &gt; 0 ? (
cities.map(({ name }) =&gt; (
&lt;option value={name} key={name}&gt;
{name}
&lt;/option&gt;
))
) : (
&lt;option value=""&gt;No cities found&lt;/option&gt;
)}
&lt;/Form.Control&gt;
&lt;/Form.Group&gt;
</code></pre>
<p>Here, we're displaying the cities dropdown on the screen. If there are no cities for the selected state, we show a <code>No cities found</code> message because there are some states that don't have any cities.</p>
<p>Now, if you check the application, you will see the following screen:</p>
<p>As you can see above, on change of country and state, the corresponding list of cities is populated in the cities dropdown.</p>
<p>Also, add the <code>Register</code> button after the last <code>Form.Group</code> closing tag that's after the city dropdown:</p><pre><code class="language-jsx">&lt;Button variant="primary" type="submit"&gt;
Register
&lt;/Button&gt;
</code></pre>
<p>Now, your screen will look like this:</p>
<p>We're done creating screens for all the steps. Now let's get the step progress in the header working so it's clear which step we're currently on.</p>
<h2 id="how-to-add-a-progress-indicator-in-the-header">How to Add a Progress Indicator in the Header</h2>
<p>We're showing the <code>Progress</code> component inside the <code>Header</code> component, but the <code>Progress</code> component is not mentioned in any of the <code>Route</code>s in the <code>AppRouter.js</code> file. Also, <code>Header</code> isn't mentioned in the <code>Route</code>. </p>
<p>So by default, we don't have access to the <code>history</code>, <code>location</code> and <code>match</code> props in both the <code>Header</code> and <code>Progress</code> components to identify which route we're on.</p>
<p>But there is an easy way to fix this. React Router provides a <code>withRouter</code> component which we can use in the <code>Progress</code> component so we will get access to the <code>history</code>, <code>location</code> and <code>match</code> props.</p>
<p>Open the <code>Progress.js</code> file and add import the <code>withRouter</code> component at the top of the file:</p><pre><code class="language-js">import { withRouter } from 'react-router-dom';
</code></pre>
<p>and change the export statement from this code:</p><pre><code class="language-js">export default Progress;
</code></pre>
<p>to this code:</p><pre><code class="language-js">export default withRouter(Progress);
</code></pre>
<p>So when we pass the <code>Progress</code> component to the <code>withRouter</code> component we'll get access to the <code>history</code>, <code>location</code> and <code>match</code> props inside the <code>Progress</code> component.</p>
<p>Now, replace the <code>Progress</code> component with the following code:</p><pre><code class="language-jsx">const Progress = ({ location: { pathname } }) =&gt; {
const isFirstStep = pathname === '/';
const isSecondStep = pathname === '/second';
const isThirdStep = pathname === '/third';
return (
&lt;React.Fragment&gt;
&lt;div className="steps"&gt;
&lt;div className={`${isFirstStep ? 'step active' : 'step'}`}&gt;
&lt;div&gt;1&lt;/div&gt;
&lt;div&gt;
{isSecondStep || isThirdStep ? (
&lt;Link to="/"&gt;Step 1&lt;/Link&gt;
) : (
'Step 1'
)}
&lt;/div&gt;
&lt;/div&gt;
&lt;div className={`${isSecondStep ? 'step active' : 'step'}`}&gt;
&lt;div&gt;2&lt;/div&gt;
&lt;div&gt;{isThirdStep ? &lt;Link to="/second"&gt;Step 2&lt;/Link&gt; : 'Step 2'}&lt;/div&gt;
&lt;/div&gt;
&lt;div className={`${pathname === '/third' ? 'step active' : 'step'}`}&gt;
&lt;div&gt;3&lt;/div&gt;
&lt;div&gt;Step 3&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/React.Fragment&gt;
);
};
</code></pre>
<p>Here, in the first line, we're destructuring the <code>location</code> property from the <code>props</code> object and then the <code>pathname</code> property from the <code>location</code> property in a single line like this:</p><pre><code class="language-jsx">const Progress = ({ location: { pathname } }) =&gt; {
</code></pre>
<p>And based on which route we're on, we're adding the <code>active</code> class to each <code>step</code> div.</p>
<p>Also, import the <code>Link</code> component at the top of the file:</p><pre><code class="language-js">import { Link, withRouter } from 'react-router-dom';
</code></pre>
<p>Now, if you check the application, you will see the following screen:</p>
<p>As you can see, when we're on a particular step, that step number is shown as active in the progress bar with highlighted text. Then, as we navigate through the steps, the text of the previous steps is shown as a link so we can navigate back to any step to change any data.</p>
<h2 id="how-to-retain-entered-data-across-routes">How to Retain Entered Data Across Routes</h2>
<p>But you will notice that, when we go to step 1 by clicking the link from step 3, the data entered in step 1 is lost.</p>
<p>This is because when we go from one route to another route, React Router completely unmounts the previous route component and mounts the next route component connected to that route. This causes all state values to be lost.</p>
<p>So let's add a way to preserve the data that's been entered when navigating to the previous step.</p>
<p>As you know, only the components connected to the routes mentioned in the <code>AppRouter.js</code> file are mounted and unmounted on the route change. But the <code>AppRouter</code> component in our case is not unmounted even when the routes change.</p>
<p>This means that the best place to store the data entered by the user is in the <code>AppRouter</code> component.</p>
<p>Let's add the <code>user</code> state, &nbsp;<code>updateUser</code>, and <code>resetUser</code> functions inside the <code>AppRouter.js</code> file.</p><pre><code class="language-js">const [user, setUser] = useState({});
const updateUser = (data) =&gt; {
setUser((prevUser) =&gt; ({ ...prevUser, ...data }));
};
const resetUser = () =&gt; {
setUser({});
};
</code></pre>
<p>So we will store the user-entered data in each step in the <code>user</code> state that's an object.</p>
<p>In the <code>updateUser</code> function, we're passing data to update the <code>user</code> state. In the <code>updateUser</code> function, we're first spreading out the <code>user</code> object values using the <code>prevUser</code> variable and then spreading out the <code>data</code> object so the resulting object will be the merging of two objects.</p>
<p>To update the state, we use the updater syntax of state with implicit return syntax for the object.</p>
<p>So this code:</p><pre><code class="language-js">setUser((prevUser) =&gt; ({ ...prevUser, ...data }));
</code></pre>
<p>is the same as the below code:</p><pre><code class="language-js">setUser((prevUser) =&gt; {
return {
...prevUser,
...data
};
});
</code></pre>
<p>As you can see above, if we want to implicitly return an object from an arrow function, we can skip the return keyword and enclose the object in round brackets.</p>
<p>This will make the code shorter and will also help you avoid typing mistakes in your code. Because of this, you will find that most React code is written using implicit return syntax.</p>
<p>So if we're in step 1 then we will pass the <code>{first_name: 'Mike', last_name: 'Jordan' }</code> as <code>data</code> and add it to the <code>user</code> state.</p>
<p>Then in step 2, if we pass <code>{user_email: 'test@example.com', user_password: 'test@123'}</code> as the <code>data</code>, then the <code>updateUser</code> function will update the <code>user</code> as shown below:</p><pre><code class="language-js">const prevUser = { first_name: 'Mike', last_name: 'Jordan' };
const data = { user_email: 'test@example.com', user_password: 'test@123' };
const result = { ...prevUser, ...data };
console.log(result); // { first_name: 'Mike', last_name: 'Jordan', user_email: 'test@example.com', user_password: 'test@123' }
</code></pre>
<p>Now, we have created the <code>user</code> state and <code>updateUser</code> function. So we need to pass it to each route that is connected to the step so we can save the user-entered data by calling the <code>updateUser</code> function.</p>
<p>Our current routes in the <code>AppRouter.js</code> file look like this:</p><pre><code class="language-js">&lt;Switch&gt;
&lt;Route component={FirstStep} path="/" exact={true} /&gt;
&lt;Route component={SecondStep} path="/second" /&gt;
&lt;Route component={ThirdStep} path="/third" /&gt;
&lt;/Switch&gt;
</code></pre>
<p>So to pass the <code>user</code> and <code>updateUser</code> as props to the components connected to the route, we can't pass it like this:</p><pre><code class="language-js">&lt;Route component={FirstStep} path="/" exact={true} user={user} updateUser={updateUser} /&gt;
</code></pre>
<p>Because this way props will be passed to the <code>Route</code> and not to the <code>FirstStep</code> component. So we need to use the following syntax:</p><pre><code class="language-js">&lt;Route
render={(props) =&gt; (
&lt;FirstStep {...props} user={user} updateUser={updateUser} /&gt;
)}
path="/"
exact={true}
/&gt;
</code></pre>
<p>Here, we're using the render props pattern for passing props. This will correctly pass the props and will also not re-create the <code>FirstStep</code> component on every re-render.</p>
<p>You can check out my <a href="https://yogeshchavan1.podia.com/react-router-introduction">Introduction to React Router</a> course to learn more about why we need to use <code>render</code> instead of the <code>component</code> prop.</p>
<p>Now, after making this change for all the step-related routes, your routes will look like this:</p><pre><code class="language-jsx">&lt;BrowserRouter&gt;
&lt;div className="container"&gt;
&lt;Header /&gt;
&lt;Switch&gt;
&lt;Route
render={(props) =&gt; (
&lt;FirstStep {...props} user={user} updateUser={updateUser} /&gt;
)}
path="/"
exact={true}
/&gt;
&lt;Route
render={(props) =&gt; (
&lt;SecondStep {...props} user={user} updateUser={updateUser} /&gt;
)}
path="/second"
/&gt;
&lt;Route
render={(props) =&gt; (
&lt;ThirdStep {...props} user={user}  /&gt;
)}
path="/third"
/&gt;
&lt;/Switch&gt;
&lt;/div&gt;
&lt;/BrowserRouter&gt;
</code></pre>
<p>Note that we're not passing the <code>updateUser</code> prop to the <code>ThirdStep</code> component route, because when we submit the form from step 3, we will be saving all the data directly into the database.</p>
<p>If you want you can pass the <code>updateUser</code> function to the <code>ThirdStep</code> component and save it to the state by calling the <code>updateUser</code> function (but it's not necessary).</p>
<p>Now, let's use the <code>updateUser</code> function inside these components to save the data.</p>
<p>So open the <code>FirstStep.js</code> and <code>SecondStep.js</code> files and inside the <code>onSubmit</code> handler function, and add <code>props.updateUser(data)</code> as the first statement.</p><pre><code class="language-js">// FirstStep.js
const onSubmit = (data) =&gt; {
props.updateUser(data);
props.history.push('/second');
};
// SecondStep.js
const onSubmit = (data) =&gt; {
props.updateUser(data);
props.history.push('/third');
};
</code></pre>
<p>Now, if you check the application, you will see the following screen:</p>
<p>As you can see, initially the <code>AppRouter</code> component state is an empty object. But when we submit the form in each step, the state object gets updated with the user-entered data.</p>
<p>Now, let's use that data saved in the state and populate it in the respective input fields when we come back to the previous step from the next step.</p>
<p>As you know, we're using <code>react-hook-form</code> to manage the changing data of our forms in the <code>FirstStep</code> and <code>SecondStep</code> component using the <code>useForm</code> hook.</p>
<p>But the <code>useForm</code> hook also takes an optional parameter which we can use to persist the values across route changes.</p>
<p>So change the below code from the <code>FirstStep.js</code> file:</p><pre><code class="language-js">const { register, handleSubmit, errors } = useForm();
</code></pre>
<p>to this code:</p><pre><code class="language-js">const { user } = props;
const { register, handleSubmit, errors } = useForm({
defaultValues: {
first_name: user.first_name,
last_name: user.last_name
}
});
</code></pre>
<p>Here, we're destructuring the <code>user</code> prop from the props object which we're passing in the route of the <code>AppRouter.js</code> file. Then we're using the <code>defaultValues</code> property to set the value for each input field.</p>
<p>Just to remind you, <code>first_name </code> and <code>last_name</code> are the names given to the input fields in <code>FirstStep</code> component which react-hook-form uses to track changing data.</p>
<p>Now, if you check the application, you will see the following screen:</p>
<p>As you can see, when we come back from step 2 to step 1, the data entered in step 1 is not lost. This is because we're re-setting it with the data from the <code>user</code> state when the component is mounted again on route change.</p>
<p>Now, let's add some similar code in the <code>SecondStep.js</code> file also:</p><pre><code class="language-js">const { user } = props;
const { register, handleSubmit, errors } = useForm({
defaultValues: {
user_email: user.user_email,
user_password: user.user_password
}
});
</code></pre>
<p>If you check the application, you will see the following screen:</p>
<p>As you can see, when we come back from step 3 to step 2 or step 1, the data entered in step 1 and step 2 is not lost. So we have successfully preserved the data across steps.</p>
<h2 id="how-to-add-animated-transitions-to-the-app">How to Add Animated Transitions to the App</h2>
<p>Now, let's add a smooth sliding animation functionality to the app.</p>
<p>To add animation, we're using the very popular <a href="https://www.framer.com/motion/">framer motion</a> library.</p>
<p>Framer motion makes it easy to add animation using a declarative approach in the same way that React does things.</p>
<p>So let's add animation in the <code>FirstStep</code> component.</p>
<p>Open the <code>FirstStep.js</code> file and add the import statement for the framer motion library at the top of the file:</p><pre><code class="language-js">import { motion } from 'framer-motion';
</code></pre>
<p>To animate any element on the page, we need to prefix it with <code>motion</code> like this:</p><pre><code class="language-html">&lt;div&gt;Click here to animate it&lt;/div&gt;
// the above code will need to be converted to
&lt;motion.div&gt;Click here to animate it&lt;/motion.div&gt;
</code></pre>
<p>Using motion as a prefix will return a React component that has specific animating capabilities added so that we can pass props to that element.</p>
<p>So inside the <code>FirstStep.js</code> file, after adding the motion prefix to the following div:</p><pre><code class="language-html">&lt;div className="col-md-6 offset-md-3"&gt;
...
&lt;/div&gt;
</code></pre>
<p>it will look like this:</p><pre><code class="language-html">&lt;motion.div className="col-md-6 offset-md-3"&gt;
...
&lt;/motion.div&gt;
</code></pre>
<p>Once we add a motion prefix to it, we can provide extra props to that element like this:</p><pre><code class="language-html">&lt;motion.div
className="col-md-6 offset-md-3"
initial={{ x: '-100vw' }}
animate={{ x: 0 }}
&gt;
...
&lt;/motion.div&gt;
</code></pre>
<p>Here, we've provided an <code>initial</code> prop to specify the location from where the animation will begin. We want the entire form to be slid in from the left side so we provided the <code>x</code> value as <code>-100vw</code>. This means 100% viewport width from the left side. So the initial position of the form will be far left but not visible on the screen.</p>
<p>Then we provided the <code>animate</code> prop with an <code>x</code> value of <code>0</code> so the form will slide in from left and will come back to its original position on the page. If we provide a value of <code>10</code> for <code>x</code> then it will move to <code>10px</code> on the right side from its original position.</p>
<p>Now, your entire JSX code in the <code>FirstStep.js</code> file will look like this:</p><pre><code class="language-jsx">return (
&lt;Form className="input-form" onSubmit={handleSubmit(onSubmit)}&gt;
&lt;motion.div
className="col-md-6 offset-md-3"
initial={{ x: '-100vw' }}
animate={{ x: 0 }}
&gt;
&lt;Form.Group controlId="first_name"&gt;
&lt;Form.Label&gt;First Name&lt;/Form.Label&gt;
&lt;Form.Control
type="text"
name="first_name"
placeholder="Enter your first name"
autoComplete="off"
ref={register({
required: 'First name is required.',
pattern: {
value: /^[a-zA-Z]+$/,
message: 'First name should contain only characters.'
}
})}
className={`${errors.first_name ? 'input-error' : ''}`}
/&gt;
{errors.first_name &amp;&amp; (
&lt;p className="errorMsg"&gt;{errors.first_name.message}&lt;/p&gt;
)}
&lt;/Form.Group&gt;
&lt;Form.Group controlId="last_name"&gt;
&lt;Form.Label&gt;Last Name&lt;/Form.Label&gt;
&lt;Form.Control
type="text"
name="last_name"
placeholder="Enter your last name"
autoComplete="off"
ref={register({
required: 'Last name is required.',
pattern: {
value: /^[a-zA-Z]+$/,
message: 'Last name should contain only characters.'
}
})}
className={`${errors.last_name ? 'input-error' : ''}`}
/&gt;
{errors.last_name &amp;&amp; (
&lt;p className="errorMsg"&gt;{errors.last_name.message}&lt;/p&gt;
)}
&lt;/Form.Group&gt;
&lt;Button variant="primary" type="submit"&gt;
Next
&lt;/Button&gt;
&lt;/motion.div&gt;
&lt;/Form&gt;
);
</code></pre>
<p>Now, if you check the application, you will see the sliding animation on page load:</p>
<p>As you can see, the form slides in from the left side of the page but it does not yet look very smooth.</p>
<p>To make it a smooth animation, we can provide another <code>transition</code> prop in addition to the <code>initial</code> and <code>animate</code> props.</p><pre><code class="language-html">&lt;motion.div
className="col-md-6 offset-md-3"
initial={{ x: '-100vw' }}
animate={{ x: 0 }}
transition={{ stiffness: 150 }}
&gt;
...
&lt;/motion.div&gt;
</code></pre>
<p>Here, we've added a <code>transition</code> prop with value of <code>150</code> for <code>stiffness</code>. You can try changing the value from <code>150</code> to something else and check which one looks best to you. I will use <code>150</code> here.</p>
<p>Now, if you check the application, you will see a smooth sliding animation on page load:</p>
<p>Let's make the same animation changes in the <code>SecondStep.js</code> and <code>ThirdStep.js</code> files:</p><pre><code class="language-js">import { motion } from 'framer-motion';
...
&lt;motion.div
className="col-md-6 offset-md-3"
initial={{ x: '-100vw' }}
animate={{ x: 0 }}
transition={{ stiffness: 150 }}
&gt;
...
&lt;/motion.div&gt;
</code></pre>
<p>Now if you check the application, you will see a smooth sliding animation on page load for all 3 steps:</p>
<h2 id="how-to-setup-the-backend-with-node-js">How to Setup the Backend with Node.js</h2>
<p>We're done with all the basic functionality for the front-end. Now let's setup the backend server code so we can save the data entered in the form to MongoDB.</p>
<p>Create a new folder with the name <code>server</code> outside the <code>src</code> folder. Then create <code>models</code> and <code>routers</code> folders inside the <code>server</code> folder.</p>
<p>Now, execute the following command from the <code>server</code> folder from the terminal:</p><pre><code class="language-javascript">yarn init -y
</code></pre>
<p>This will create a <code>package.json</code> file inside the <code>server</code> folder so we can manage the dependencies.</p>
<p>Now, install the required dependencies by executing the following command from the <code>server</code> folder from terminal:</p><pre><code class="language-javascript">yarn add bcryptjs@2.4.3 cors@2.8.5 express@4.17.1 mongoose@5.11.18 nodemon@2.0.7
</code></pre>
<p>Next, create a new file with the name <code>.gitignore</code> inside the <code>server</code> folder and add the following line inside it so the <code>node_modules</code> folder will not be pushed to GitHub (if you decide to push your code to GitHub):</p><pre><code class="language-javascript">node_modules
</code></pre>
<p>Create a new file <code>db.js</code> inside the <code>server</code> folder with the following content:</p><pre><code class="language-js">const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/form-user', {
useNewUrlParser: true,
useCreateIndex: true,
useUnifiedTopology: true
});
</code></pre>
<p>Here, we're using the <code>mongoose</code> library to work with MongoDB. For the <code>mongoose.connect</code> method, we've provided a connection string with the <code>form-user</code> database as the name of the database.</p>
<p>You can give whatever name you want instead of <code>form-user</code>.</p>
<p>Now, create a new file with the name <code>index.js</code> inside the <code>server</code> folder and add the following contents inside it:</p><pre><code class="language-js">const express = require('express');
require('./db');
const app = express();
const PORT = process.env.PORT || 3030;
app.get('/', (req, res) =&gt; {
res.send('&lt;h2&gt;This is from index.js file&lt;/h2&gt;');
});
app.listen(PORT, () =&gt; {
console.log(`server started on port ${PORT}`);
});
</code></pre>
<p>Now, open the <code>server/package.json</code> file and add the <code>scripts</code> section inside it:</p><pre><code class="language-js">"scripts": {
"start": "nodemon index.js"
},
</code></pre>
<p>Here we're using the <code>nodemon</code> npm package that will restart the Express server if we make any changes in <code>index.js</code> or the files included in the <code>index.js</code> file. This way we don't have to manually restart the server on every change.</p>
<p>So your entire <code>package.json</code> file will look like this:</p><pre><code class="language-js">{
"name": "server",
"version": "1.0.0",
"main": "index.js",
"license": "MIT",
"scripts": {
"start": "nodemon index.js"
},
"dependencies": {
"bcryptjs": "2.4.3",
"cors": "2.8.5",
"express": "4.17.1",
"mongoose": "5.11.18",
"nodemon": "2.0.7"
}
}
</code></pre>
<p>Now, open another terminal and execute the <code>yarn start</code> command from inside the <code>server</code> folder.</p>
<p>If you access <a href="http://localhost:3030/">http://localhost:3030/</a>, you will see the following screen:</p>
<p>This shows that our Express server is correctly set up. Let's write Rest APIs to store the user registration data.</p>
<p>Create a new file called <code>user.js</code> inside the <code>server/models</code> folder with the following content:</p><pre><code class="language-js">const mongoose = require('mongoose');
const userSchema = mongoose.Schema(
{
first_name: {
type: String,
required: true,
trim: true
},
last_name: {
type: String,
required: true,
trim: true
},
user_email: {
type: String,
required: true,
trim: true,
validate(value) {
if (!value.match(/^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/)) {
throw new Error('Email is not valid.');
}
}
},
user_password: {
type: String,
required: true,
trim: true,
minlength: 6
},
country: {
type: String,
required: true,
trim: true
},
state: {
type: String,
trim: true
},
city: {
type: String,
trim: true
}
},
{
timestamps: true
}
);
const User = mongoose.model('User', userSchema);
module.exports = User;
</code></pre>
<p>Here, we've created a <code>User</code> schema to define the structure of the data stored in the <code>User</code> collection.</p>
<p>If you have never worked with the <code>mongoose</code> library then check out <a href="https://javascript.plainenglish.io/what-is-so-special-about-mongoose-library-when-working-with-mongodb-65096b97f8ae?source=friends_link&amp;sk=5c98c783bd200aa6ce59aa8b16e56f1f">this article</a> for an introduction.</p>
<h2 id="how-to-create-the-rest-apis">How to Create the REST APIs</h2>
<p>Create a new file called <code>user.js</code> inside the <code>routers</code> folder with the following content:</p><pre><code class="language-js">const express = require('express');
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const router = express.Router();
router.post('/register', async (req, res) =&gt; {
const { user_email, user_password } = req.body;
console.log('req.body', req.body);
let user = await User.findOne({ user_email });
if (user) {
return res.status(400).send('User with the provided email already exist.');
}
try {
user = new User(req.body);
user.user_password = await bcrypt.hash(user_password, 8);
await user.save();
res.status(201).send();
} catch (e) {
res.status(500).send('Something went wrong. Try again later.');
}
});
module.exports = router;
</code></pre>
<p>Here, we've created a post API for the <code>/register</code> route. We will be passing the data to this API in JSON format. The Express server makes it available inside the <code>req.body</code> object so we're destructuring the email and password value from it:</p><pre><code class="language-js">const { user_email, user_password } = req.body;
</code></pre>
<p>Then using the <code>findOne</code> method of the <code>User</code> model, we're first checking if there is any user with the provided email address.</p><pre><code class="language-js">let user = await User.findOne({ user_email });
</code></pre>
<p>If such a user exists, then we're returning an error back to the client (which is our React app).</p><pre><code class="language-js">return res.status(400).send('User with the provided email already exist.');
</code></pre>
<p>It's always good to specify the HTTP response code of the error while sending back the response.</p>
<p>You can find all HTTP status codes and their meanings on <a href="https://httpstatuses.com/">this website</a>.</p>
<p>Then we pass all the user data (like <code>first_name</code>, <code>last_name</code>, <code>user_email</code>, <code>users_password</code>, <code>country</code>, <code>state</code> and <code>city</code>) which is present in the <code>req.body</code> to the <code>User</code> constructor .</p>
<p>But we don't want to store the user-entered data into the database as it is. So we'll use the popular <a href="https://www.npmjs.com/package/bcryptjs">bcryptjs</a> npm library to hash the password before saving it to the database.</p><pre><code class="language-js">user.user_password = await bcrypt.hash(user_password, 8);
</code></pre>
<p>Check out <a href="https://javascript.plainenglish.io/how-to-create-a-strong-and-secure-password-in-nodejs-which-cannot-be-decrypted-24d046b24958?source=friends_link&amp;sk=87160d305a0b0cd97ec18d376a5d7765">my article here</a> to learn about <code>bcryptjs</code> in detail.</p>
<p>And once the password is hashed, we call the <code>save</code> method of the <code>User</code> model to save all the details along with hashed password into the MongoDB database.</p><pre><code class="language-js">await user.save();
</code></pre>
<p>Once we're done, we're sending back the response with the status code of <code>201</code> which describes that something has been created.</p><pre><code class="language-js">res.status(201).send();
</code></pre>
<p>Note that here we're not sending back any data – just a response saying that the request was successful and a new record was created.</p>
<p>Then at the end, we're exporting the express <code>router</code> so we can use it in the <code>index.js</code> file.</p>
<p>Now, open the <code>server/index.js</code> file and import the user router at the top of the file:</p><pre><code class="language-js">const userRouter = require('./routers/user');
</code></pre>
<p>As we're sending the data to register from React app to Node.js server in JSON format, we need to add the following code for the middleware:</p><pre><code class="language-js">app.use(express.json());
</code></pre>
<p>Also, after the <code>PORT</code> constant, add the following line of code:</p><pre><code class="language-js">app.use(userRouter);
</code></pre>
<p>So your entire <code>server/index.js</code> file will look like this:</p><pre><code class="language-js">const express = require('express');
const userRouter = require('./routers/user');
require('./db');
const app = express();
const PORT = process.env.PORT || 3030;
app.use(express.json());
app.use(userRouter);
app.get('/', (req, res) =&gt; {
res.send('&lt;h2&gt;This is from index.js file&lt;/h2&gt;');
});
app.listen(PORT, () =&gt; {
console.log(`server started on port ${PORT}`);
});
</code></pre>
<p>Here, we've provided <code>userRouter</code> as a middleware for the Express app so that we can make API requests to it.</p>
<p>It's always good to separate out each router in its own file and include it using the <code>app.use</code> method. This avoids making the code larger by writing it in a single file.</p>
<p>Now, start your local MongoDB database server by running <code>./mongod --dbpath=&lt;path_to_mongodb-data_folder&gt;</code> as explained in <a href="https://levelup.gitconnected.com/how-to-install-mongodb-database-on-local-environment-19a8a76f1b92?source=friends_link&amp;sk=416b443bad1f86b292e4b72602cf5c9b">this article</a> and keep it running.</p>
<p>And then restart the Express server by running <code>yarn start</code> from the <code>server</code> folder and keep it running.</p>
<p>Open another terminal and start the react app by running <code>yarn start</code> if you haven't already done it.</p>
<p>So now you will two separate terminals open – one for running the Express server app and another one running the React app as shown below:</p>
<p>Here, we're opening terminals inside VSCode. You can open the first terminal by going to the <code>Terminal -&gt; New Terminal</code> menu in VS Code. Then just click the <code>+</code> icon to open additional terminals.</p>
<h2 id="how-to-call-rest-apis-from-a-react-app">How to Call REST APIs from a React App</h2>
<p>Now, let's make the code changes in our React app to make the API call to our <code>/register</code> API.</p>
<p>Open the <code>ThirdStep.js</code> file and replace the <code>handleSubmit</code> method with the following code:</p><pre><code class="language-js">const handleSubmit = async (event) =&gt; {
event.preventDefault();
try {
const { user } = props;
const updatedData = {
country: countries.find(
(country) =&gt; country.isoCode === selectedCountry
)?.name,
state:
states.find((state) =&gt; state.isoCode === selectedState)?.name || '',
city: selectedCity
};
await axios.post(`${BASE_API_URL}/register`, {
...user,
...updatedData
});
} catch (error) {
if (error.response) {
console.log('error', error.response.data);
}
}
};
</code></pre>
<p>Here, once we submit the form in step 2, we call the <code>handleSubmit</code> method where we make an API call to our <code>/register</code> API:</p><pre><code class="language-js">await axios.post(`${BASE_API_URL}/register`, {
...user,
...updatedData
});
</code></pre>
<p>Here, we're passing the data to the <code>/register</code> API in the JSON format.</p>
<p>We store the country code in <code>selectedCountry</code> and the state code in <code>selectedState</code> state variables. These are denoted by <code>isoCode</code>, and we first use the array <code>find</code> method to find out the actual names related to that country and state code as shown below:</p><pre><code class="language-js">const updatedData = {
country: countries.find(
(country) =&gt; country.isoCode === selectedCountry
)?.name,
state:
states.find((state) =&gt; state.isoCode === selectedState)?.name || '',
city: selectedCity
};
</code></pre>
<p>Inside the <code>selectedCity</code> state variable we store the name so we don't need to use the filter method there.</p>
<p>If you want a quick refresher on the most widely used array methods (including array find method) check out my <a href="/news/complete-introduction-to-the-most-useful-javascript-array-methods/">article here</a>.</p>
<p>While using the <code>find</code> method for state, we've added the <code>||</code> condition. This is because if there is no available state for any selected country, then while accessing <code>?.name</code>, it might come as <code>undefined</code>. To avoid storing <code>undefined</code> in the database, we use the <code>||</code> operator to store an empty string <code>''</code> instead or <code>undefined</code>.</p>
<h2 id="how-to-test-rest-apis">How to Test REST APIs</h2>
<p>Now, let's check the application's functionality.</p>
<p>As you can see, when we try to submit the form in the step 3, we're getting a CORS (Cross-Origin Resource Sharing) error in the browser console.</p>
<p>This is because the browser does not allow us to access the data of an application running on another port – because we're running our React application on port 3000 and our Node.js application on port 3030.</p>
<p>This is for security reasons and violates cross-domain policies.</p>
<p>To fix this, we need to install the <a href="https://www.npmjs.com/package/cors">cors</a> npm package and use it in our <code>server/index.js</code> file so that the Node.js server will allow any application to access its APIs.</p>
<p>Don’t worry, we will see how we can use the Node.js APIs without using <code>cors</code> later in this article. We'll also avoid needing to run two separate terminals to start our React and Node.js server.</p>
<p>For now, open the <code>server/index.js</code> file &nbsp;and add the import for <code>cors</code> as shown below:</p><pre><code class="language-js">const cors = require('cors');
</code></pre>
<p>Note that we've already installed the <code>cors</code> npm package while creating the Express server earlier.</p>
<p>And add it as an Express middleware before the <code>app.use(userRouter)</code> statement like this:</p><pre><code class="language-js">app.use(express.json());
app.use(cors());
app.use(userRouter);
</code></pre>
<p>Now your <code>index.js</code> file will look like this:</p><pre><code class="language-js">const express = require('express');
const cors = require('cors');
const userRouter = require('./routers/user');
require('./db');
const app = express();
const PORT = process.env.PORT || 3030;
app.use(express.json());
app.use(cors());
app.use(userRouter);
app.get('/', (req, res) =&gt; {
res.send('&lt;h2&gt;This is from index.js file&lt;/h2&gt;');
});
app.listen(PORT, () =&gt; {
console.log(`server started on port ${PORT}`);
});
</code></pre>
<p>If you submit the form, you will see that the data has been correctly logged into the console:</p>
<p>And the data also gets saved into the database as shown below:</p>
<p>So now, we've successfully connected our front-end React app to the back-end Node.js app and saved the data to the database.</p>
<h2 id="how-to-show-the-registration-feedback-popup">How to Show the Registration Feedback Popup</h2>
<p>You might have noticed that we're not showing any indication that the data has been successfully saved to the database once we register the user. So let's do that now.</p>
<p>To show the success message, we'll use <a href="https://www.npmjs.com/package/sweetalert2">sweetalert2</a> which is a popular and customizable popup modal library.</p>
<p>Import it in the <code>ThirdStep.js</code> file as shown below:</p><pre><code class="language-js">import Swal from 'sweetalert2';
</code></pre>
<p>Inside the <code>handleSubmit</code> function, after the <code>axios.post</code> call, add the following code in the try block:</p><pre><code class="language-js">Swal.fire('Awesome!', "You're successfully registered!", 'success').then(
(result) =&gt; {
if (result.isConfirmed || result.isDismissed) {
props.history.push('/');
}
}
);
</code></pre>
<p>and in the catch block add the following code:</p><pre><code class="language-js">if (error.response) {
Swal.fire({
icon: 'error',
title: 'Oops...',
text: error.response.data
});
}
</code></pre>
<p>So your <code>handleSubmit</code> function will look like this now:</p><pre><code class="language-js">const handleSubmit = async (event) =&gt; {
event.preventDefault();
try {
const { user } = props;
const updatedData = {
country: countries.find(
(country) =&gt; country.isoCode === selectedCountry
)?.name,
state:
states.find((state) =&gt; state.isoCode === selectedState)?.name || '', // or condition added because selectedState might come as undefined
city: selectedCity
};
await axios.post(`${BASE_API_URL}/register`, {
...user,
...updatedData
});
Swal.fire('Awesome!', "You're successfully registered!", 'success').then(
(result) =&gt; {
if (result.isConfirmed || result.isDismissed) {
props.history.push('/');
}
}
);
} catch (error) {
if (error.response) {
Swal.fire({
icon: 'error',
title: 'Oops...',
text: error.response.data
});
console.log('error', error.response.data);
}
}
};
</code></pre>
<p>If you check the application, you will see the following screen:</p>
<p>As you can see, if the user with the email address already exists in the database then we show an error message from the catch block.</p>
<p>And if the user email does not exist in the database, then we see the success popup as you can see below:</p>
<p>If you check the code of the popup for success, it looks like this:</p><pre><code class="language-js">Swal.fire('Awesome!', "You're successfully registered!", 'success').then(
(result) =&gt; {
if (result.isConfirmed || result.isDismissed) {
props.history.push('/');
}
}
);
</code></pre>
<p>So if the user clicks on the <code>OK</code> &nbsp;button or clicks outside the popup modal, we redirect the user to step 1 using <code>props.history.push('/');</code>. But we also should clear the user-entered data from the input fields once the registration is successful. Let's do that now.</p>
<p>If you remember, we added a <code>resetUser</code> function inside the <code>AppRouter</code> component to clear the <code>user</code> state data.</p>
<p>Let's pass this function as a prop to the <code>ThirdStep</code> component. So your <code>ThirdStep</code> route will look like this:</p><pre><code class="language-js">&lt;Route
render={(props) =&gt; (
&lt;ThirdStep
{...props}
user={user}
updateUser={updateUser}
resetUser={resetUser}
/&gt;
)}
path="/third"
/&gt;
</code></pre>
<p>And inside the <code>handleSubmit</code> function of the <code>ThirdStep.js</code> file, before calling <code>props.history.push('/');</code> call the <code>resetUser</code> function like this:</p><pre><code class="language-js">Swal.fire('Awesome!', "You're successfully registered!", 'success').then(
(result) =&gt; {
if (result.isConfirmed || result.isDismissed) {
props.resetUser();
props.history.push('/');
}
}
);
</code></pre>
<p>Now, if you register a new user, you will see that after registration, you will be redirected to step 1 and all the input fields will also be cleared.</p>
<h2 id="how-to-add-login-functionality-to-the-app">How to Add Login Functionality to the App</h2>
<p>We have added the entire registration functionality for the front-end and back-end. Let's add login functionality so we can check if a user with a provided email and password already exists and then retrieve the details of that user.</p>
<p>Open the <code>routers/user.js</code> file and add the following code inside it before the <code>module.exports</code> statement:</p><pre><code class="language-js">router.post('/login', async (req, res) =&gt; {
try {
const user = await User.findOne({ user_email: req.body.user_email });
if (!user) {
return res.status(400).send('User with provided email does not exist.');
}
const isMatch = await bcrypt.compare(
req.body.user_password,
user.user_password
);
if (!isMatch) {
return res.status(400).send('Invalid credentials.');
}
const { user_password, ...rest } = user.toObject();
return res.send(rest);
} catch (error) {
return res.status(500).send('Something went wrong. Try again later.');
}
});
</code></pre>
<p>Here, we're first checking to see if the user with the provided email already exists using the <code>findOne</code> method. If no such user exists, then we return an error with a status code of <code>400</code>.</p>
<p>If there is a user with the provided email address then we use the <code>bcrypt.compare</code> method to compare the original non-hashed password with the hashed password. If the hashed password does not match with the password from the <code>user</code> object, then we return an error saying <code>Invalid credentials</code>.</p>
<p>But if the password matches, then we create a new <code>rest</code> object with all the <code>user</code> properties except the hashed password using the ES9 rest operator for objects:</p><pre><code class="language-js">const { user_password, ...rest } = user.toObject();
</code></pre>
<p>This is because we don't want to return back the hashed password for security reasons.</p>
<p>Then we will send back the <code>rest</code> object with the password removed back to the client (our React app).</p>
<p>Now that we've created the back-end API, let's integrate the front-end part for our login functionality.</p>
<p>Create a new file called <code>Login.js</code> inside the <code>components</code> folder with the following code:</p><pre><code class="language-jsx">import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { BASE_API_URL } from '../utils/constants';
const Login = () =&gt; {
const { register, handleSubmit, errors } = useForm();
const [successMessage, setSuccessMessage] = useState('');
const [errorMessage, setErrorMessage] = useState('');
const [userDetails, setUserDetails] = useState('');
const onSubmit = async (data) =&gt; {
console.log(data);
try {
const response = await axios.post(`${BASE_API_URL}/login`, data);
setSuccessMessage('User with the provided credentials found.');
setErrorMessage('');
setUserDetails(response.data);
} catch (error) {
console.log(error);
if (error.response) {
console.log('error', error.response.data);
setErrorMessage(error.response.data);
}
}
};
return (
&lt;Form className="input-form" onSubmit={handleSubmit(onSubmit)}&gt;
&lt;div className="col-md-6 offset-md-3"&gt;
{errorMessage ? (
&lt;p className="errorMsg login-error"&gt;{errorMessage}&lt;/p&gt;
) : (
&lt;div&gt;
&lt;p className="successMsg"&gt;{successMessage}&lt;/p&gt;
{userDetails &amp;&amp; (
&lt;div className="user-details"&gt;
&lt;p&gt;Following are the user details:&lt;/p&gt;
&lt;div&gt;First name: {userDetails.first_name}&lt;/div&gt;
&lt;div&gt;Last name: {userDetails.last_name}&lt;/div&gt;
&lt;div&gt;Email: {userDetails.user_email}&lt;/div&gt;
&lt;div&gt;Country: {userDetails.country}&lt;/div&gt;
&lt;div&gt;State: {userDetails.state}&lt;/div&gt;
&lt;div&gt;City: {userDetails.city}&lt;/div&gt;
&lt;/div&gt;
)}
&lt;/div&gt;
)}
&lt;Form.Group controlId="first_name"&gt;
&lt;Form.Label&gt;Email&lt;/Form.Label&gt;
&lt;Form.Control
type="email"
name="user_email"
placeholder="Enter your email address"
ref={register({
required: 'Email is required.',
pattern: {
value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
message: 'Email is not valid.'
}
})}
className={`${errors.user_email ? 'input-error' : ''}`}
/&gt;
{errors.user_email &amp;&amp; (
&lt;p className="errorMsg"&gt;{errors.user_email.message}&lt;/p&gt;
)}
&lt;/Form.Group&gt;
&lt;Form.Group controlId="password"&gt;
&lt;Form.Label&gt;Password&lt;/Form.Label&gt;
&lt;Form.Control
type="password"
name="user_password"
placeholder="Choose a password"
ref={register({
required: 'Password is required.',
minLength: {
value: 6,
message: 'Password should have at-least 6 characters.'
}
})}
className={`${errors.user_password ? 'input-error' : ''}`}
/&gt;
{errors.user_password &amp;&amp; (
&lt;p className="errorMsg"&gt;{errors.user_password.message}&lt;/p&gt;
)}
&lt;/Form.Group&gt;
&lt;Button variant="primary" type="submit"&gt;
Check Login
&lt;/Button&gt;
&lt;/div&gt;
&lt;/Form&gt;
);
};
export default Login;
</code></pre>
<p>Now, open the <code>AppRouter.js</code> file and add a route for Login at the end of all routes before the ending <code>Switch</code> tag like this:</p><pre><code class="language-jsx">&lt;BrowserRouter&gt;
...
&lt;Route component={Login} path="/login" /&gt;
&lt;/Switch&gt;
&lt;/div&gt;
&lt;/BrowserRouter&gt;
</code></pre>
<p>Also, include the <code>Login</code> component at the top:</p><pre><code class="language-js">import Login from '../components/Login';
</code></pre>
<p>Now, if you access <a href="http://localhost:3000/login">http://localhost:3000/login</a>, you will see the following screen:</p>
<p>Here, we actually don't need to show the steps in the header, so let's add a condition to hide them on the login page.</p>
<p>Open the <code>Progress.js</code> file and add another const variable like this:</p><pre><code class="language-js">const isLoginPage = pathname === '/login';
</code></pre>
<p>Then add a ternary operator condition before the start of the div with class <code>steps</code>:</p><pre><code class="language-jsx">&lt;React.Fragment&gt;
{!isLoginPage ? (
&lt;div className="steps"&gt;
...
&lt;/div&gt;
) : (
&lt;div&gt;&lt;/div&gt;
)}
&lt;/React.Fragment&gt;
</code></pre>
<p>If the page is not a login page, then we'll display the steps – otherwise we will display an empty div.</p>
<p>Note that we need to render an empty div if we don't have anything to render, because React will throw an error if we don't return any JSX from the component.</p>
<p>Your entire <code>Progress.js</code> file will look like this now:</p><pre><code class="language-jsx">import React from 'react';
import { Link, withRouter } from 'react-router-dom';
const Progress = ({ location: { pathname } }) =&gt; {
const isFirstStep = pathname === '/';
const isSecondStep = pathname === '/second';
const isThirdStep = pathname === '/third';
const isLoginPage = pathname === '/login';
return (
&lt;React.Fragment&gt;
{!isLoginPage ? (
&lt;div className="steps"&gt;
&lt;div className={`${isFirstStep ? 'step active' : 'step'}`}&gt;
&lt;div&gt;1&lt;/div&gt;
&lt;div&gt;
{isSecondStep || isThirdStep ? (
&lt;Link to="/"&gt;Step 1&lt;/Link&gt;
) : (
'Step 1'
)}
&lt;/div&gt;
&lt;/div&gt;
&lt;div className={`${isSecondStep ? 'step active' : 'step'}`}&gt;
&lt;div&gt;2&lt;/div&gt;
&lt;div&gt;
{isThirdStep ? &lt;Link to="/second"&gt;Step 2&lt;/Link&gt; : 'Step 2'}
&lt;/div&gt;
&lt;/div&gt;
&lt;div className={`${pathname === '/third' ? 'step active' : 'step'}`}&gt;
&lt;div&gt;3&lt;/div&gt;
&lt;div&gt;Step 3&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
) : (
&lt;div&gt;&lt;/div&gt;
)}
&lt;/React.Fragment&gt;
);
};
export default withRouter(Progress);
</code></pre>
<h2 id="how-to-test-the-login-functionality">How to Test the Login Functionality</h2>
<p>Now, if you check the login page, you will see the page without steps in the header. But the steps are still displayed for the other pages.</p>
<p>And if you enter the correct login credentials then you will get the details related to that user as shown below:</p>
<p>If the login credentials are invalid, you will see the error message as shown below:</p>
<p>If the email exists but the password does not match, then you will see the error message as shown below:</p>
<p>Now, let's understand the code from the <code>Login.js</code> file:</p><pre><code class="language-js">const onSubmit = async (data) =&gt; {
console.log(data);
try {
const response = await axios.post(`${BASE_API_URL}/login`, data);
setSuccessMessage('User with the provided credentials found.');
setErrorMessage('');
setUserDetails(response.data);
} catch (error) {
console.log(error);
if (error.response) {
console.log('error', error.response.data);
setErrorMessage(error.response.data);
}
}
};
</code></pre>
<p>In the <code>onSubmit</code> function, we're making an API call to the <code>/login</code> endpoint by passing the data entered in the login form.</p>
<p>If there is no error in the API response, we will set the <code>successMessage</code> state and set the <code>userDetails</code> state with the response from the API. Otherwise we will set the <code>errorMessage</code> state.</p>
<p>And in the JSX, if the <code>errorMessage</code> state is not empty, we'll display the error message otherwise display <code>successMessage</code> state value with the <code>userDetails</code> data:</p><pre><code class="language-jsx">{errorMessage ? (
&lt;p className="errorMsg login-error"&gt;{errorMessage}&lt;/p&gt;
) : (
&lt;div&gt;
&lt;p className="successMsg"&gt;{successMessage}&lt;/p&gt;
{userDetails &amp;&amp; (
&lt;div className="user-details"&gt;
&lt;p&gt;Following are the user details:&lt;/p&gt;
&lt;div&gt;First name: {userDetails.first_name}&lt;/div&gt;
&lt;div&gt;Last name: {userDetails.last_name}&lt;/div&gt;
&lt;div&gt;Email: {userDetails.user_email}&lt;/div&gt;
&lt;div&gt;Country: {userDetails.country}&lt;/div&gt;
&lt;div&gt;State: {userDetails.state}&lt;/div&gt;
&lt;div&gt;City: {userDetails.city}&lt;/div&gt;
&lt;/div&gt;
)}
&lt;/div&gt;
)}
</code></pre>
<p>Note that we have not provided a link for the login page on the screen because the application is meant to display multi-step form functionality. I have included the login page so you can get an idea of how to validate user login.</p>
<p>If you want, you can include the login page link in the header or directly access it using <a href="http://localhost:3000/login">http://localhost:3000/login</a>.</p>
<h2 id="how-to-setup-an-invalid-route-page">How to Setup an Invalid Route Page</h2>
<p>Now, we're done with the entire functionality of the App. Let's add some code so that if we enter any invalid route in the browser URL, the user will be redirected back to the home page.</p>
<p>Currently, if you access any invalid route like <a href="http://localhost:3000/contact">http://localhost:3000/contact</a>, you will see a blank page. But there is also no error in the console because there is no matching route in the list of routes inside the <code>AppRouter.js</code> file.</p>
<p>Open the <code>AppRouter.js</code> file, and after the login route enter another route as shown below:</p><pre><code class="language-jsx">  ...
&lt;Route component={Login} path="/login" /&gt;
&lt;Route render={() =&gt; &lt;Redirect to="/" /&gt;} /&gt;
&lt;/Switch&gt;
</code></pre>
<p>Here, we haven't provided any path to the <code>Route</code> component for the last Route. This means that if any of the above routes do not match, this last Route will be executed. This will redirect the user to the <code>/</code> Route which is the <code>FirstPage</code> component route.</p>
<p>Also, import the <code>Redirect</code> component from the <code>react-router-dom</code> at the top of the file:</p><pre><code class="language-js">import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
</code></pre>
<p>Note that you need to enter it as the last route only. This way if any of the above routes do not match, the last route will be executed and it will redirect to the home page.</p>
<p>Let's verify it now.</p>
<p>As you can see, for all invalid routes we're redirected to the home page which is the first step page.</p>
<h2 id="how-to-get-rid-of-the-cors-library">How to Get Rid of the CORS Library</h2>
<p>As you know, to run this application, we need to start our React app using the <code>yarn start</code> command in one terminal. We also need to execute the <code>yarn start</code> command from the <code>server</code> folder for the backend server. And finally, we also need to keep our MongoDB server running in the third terminal.</p>
<p>So let's remove the need to run two separate <code>yarn start</code> commands. This will also allow you to deploy your app on a single hosting provider.</p>
<p>If you remember, in the <code>server/index.js</code> file, we added the following code:</p><pre><code class="language-js">app.use(cors());
</code></pre>
<p>Adding this code allows any application to access our APIs – which is fine when working in a local environment. But it's not safe to allow everyone to access our APIs. So let's fix that.</p>
<p>Open the <code>server/index.js</code> file and add the below code just above the <code>app.use(express.json());</code> line:</p><pre><code class="language-js">app.use(express.static(path.join(__dirname, '..', 'build')));
</code></pre>
<p>Here, we're configuring our Express app to use the contents of the <code>build</code> folder as a starting point of our app.</p>
<p>The <code>build</code> folder will be created when we run the <code>yarn build</code> command for our React app.</p>
<p>As the <code>build</code> folder will be created outside the <code>server</code> folder, we're using <code>..</code> to come out of the <code>server</code> folder to access it.</p>
<p>Also, import the <code>path</code> Node package at the top of the file:</p><pre><code class="language-js">const path = require('path');
</code></pre>
<p>We don't need to install the <code>path</code> npm package, as it's added by default when we install Node.js on our system.</p>
<p>Now, you can remove the <code>cors</code> import and its use from the <code>server/index.js</code> file.</p>
<p>Your final <code>server/index.js</code> file will look like this:</p><pre><code class="language-js">const path = require('path');
const express = require('express');
const userRouter = require('./routers/user');
require('./db');
const app = express();
const PORT = process.env.PORT || 3030;
app.use(express.static(path.join(__dirname, '..', 'build')));
app.use(express.json());
app.use(userRouter);
app.get('/', (req, res) =&gt; {
res.send('&lt;h2&gt;This is from index.js file&lt;/h2&gt;');
});
app.listen(PORT, () =&gt; {
console.log(`server started on port ${PORT}`);
});
</code></pre>
<p>Now stop both the <code>yarn start</code> commands from both the terminals. Then, only in one terminal execute the <code>yarn build</code> command from inside the <code>multi-step-form-using-mern</code> folder which is our project folder.</p>
<p>The <code>yarn build</code> command will take some time to complete as it performs some optimizations. It should only be executed when we're done with all the app functionality and when we're ready to deploy the app to production.</p>
<p>Once the command completes successfully, you will see a <code>build</code> folder created as shown below:</p>
<p>The <code>build</code> folder contains our entire React app so you can use this <code>build</code> folder to deploy your app to production.</p>
<p>Now, open the <code>src/utils/constants.js</code> file and replace this code:</p><pre><code class="language-js">export const BASE_API_URL = 'http://localhost:3030';
</code></pre>
<p>with the below code:</p><pre><code class="language-js">export const BASE_API_URL = '';
</code></pre>
<p>Now, as we've created the <code>build</code> folder, navigate to <code>server</code> folder from the terminal and execute the <code>yarn start</code> command:</p>
<p>As you can see, the server has started on port <code>3030</code>. </p>
<p>So let's access our application at <a href="http://localhost:3030/">http://localhost:3030/</a>.</p>
<p>As you can see, we only need to run one <code>yarn start</code> command to start the Node.js Express server. The Node.js server renders our React app on port <code>3030</code> from the <code>build</code> folder. </p>
<p>So all our APIs are available now on <code>http://localhost:3030</code> such as <code>http://localhost:3030/register</code> and <code>http://localhost:3030/login</code>.</p>
<p>Therefore we have changed the <code>BASE_API_URL</code> value to just an empty string:</p><pre><code class="language-js">export const BASE_API_URL = '';
</code></pre>
<p>When we're already on <code>http://localhost:3030</code> we can make all our POST request APIs using just <code>/login</code> and <code>/register</code>.</p>
<p>So we only need one terminal to run the <code>yarn start</code> command and another terminal for starting the MongoDB service. This means that we can deploy our app on single hosting provider like <a href="https://www.heroku.com/">heroku</a> instead of deploying the React app on one hosting provider and the Node.js app on another hosting provider.</p>
<p>Note that if you make any changes to the React app's code, you will need to re-run the <code>yarn build</code> command from the project folder and then <code>yarn start</code> command from the <code>server</code> folder.</p>
<p>But there is one issue with this setup. If you directly go to any route apart from the <code>/</code> route like <code>/first</code>, <code>/second</code>, <code>/login</code> and so on, you will get an error as you'll see below:</p>
<p>This is because we’re starting the server from Express.js so the request will always go to the Express server (our Node server was created using Express) and there is no <code>/second</code> route for handling that on the Node side. So it gives us an error.</p>
<p>To fix this, open the <code>server/index.js</code> file and add the following code before the <code>app.listen</code> statement and after all other routes:</p><pre><code class="language-js">app.use((req, res, next) =&gt; {
res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
});
</code></pre>
<p>This code will act as a default route. If any of the previous routes do not match, this code will send back the <code>index.html</code> file from the <code>build</code> folder which is our React app.</p>
<p>And because the <code>/second</code> route is present in our React app, you will see the correct step 2 page.</p>
<p>If the entered route is not present on the Node.js app as well as in our React app, then the user will be redirected to the step 1 page (our home page) because of our last route in the <code>AppRouter.js</code> file.</p><pre><code class="language-js">&lt;Route render={() =&gt; &lt;Redirect to="/" /&gt;} /&gt;
</code></pre>
<p>At this point, your complete <code>server/index.js</code> file will look like this:</p><pre><code class="language-js">const path = require('path');
const express = require('express');
const userRouter = require('./routers/user');
require('./db');
const app = express();
const PORT = process.env.PORT || 3030;
app.use(express.static(path.join(__dirname, '..', 'build')));
app.use(express.json());
app.use(userRouter);
app.get('/', (req, res) =&gt; {
res.send('&lt;h2&gt;This is from index.js file&lt;/h2&gt;');
});
app.use((req, res, next) =&gt; {
res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
});
app.listen(PORT, () =&gt; {
console.log(`server started on port ${PORT}`);
});
</code></pre>
<p>And you will not get an error now:</p>
<p>If you want to learn in-depth about rendering React apps using Node.js, check out <a href="https://levelup.gitconnected.com/how-to-render-react-app-using-express-server-in-node-js-a428ec4dfe2b?source=friends_link&amp;sk=3f152ac7908f540b209f07f683b494cd">this article</a>.</p>
<p>Now we're done with both the front-end and back-end functionality as you can see below:</p>
<h2 id="closing-points"><strong>Closing points</strong></h2>
<p>We're done building out the functionality of the App.</p>
<p><strong>You can find the complete GitHub source code for this application in <a href="https://github.com/myogeshchavan97/multi-step-form-using-mern">this repository</a>.</strong></p>
<p>To take your skills further, you can improve the application by adding an extra validation at step 3 to check if the user has entered all the details in the form. This is important because you can directly visit the second step page of the form by using <a href="http://localhost:3030/second">http://localhost:3030/second</a> and proceed from there.</p>
<h3 id="thanks-for-reading-">Thanks for reading!</h3>
<p>Want to learn all ES6+ features in detail including let and const, promises, various promise methods, array and object destructuring, arrow functions, async/await, import and export and a whole lot more from scratch?</p>
<p>Check out my <a href="https://modernjavascript.yogeshchavan.dev/">Mastering Modern JavaScript</a> book. This book covers all the pre-requisites for learning React and helps you to become better at JavaScript and React.</p>
<p>Also, you can check out my free <a href="https://yogeshchavan1.podia.com/react-router-introduction">Introduction to React Router</a> course to learn React Router from scratch.</p>
<p>Want to stay up to date with regular content regarding JavaScript, React, and Node.js? <a href="https://www.linkedin.com/in/yogesh-chavan97/">Follow me on LinkedIn</a>.</p>
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
