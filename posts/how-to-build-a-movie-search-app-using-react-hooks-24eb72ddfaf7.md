---
card: "https://cdn-media-1.freecodecamp.org/images/1*D9VZ47bgutne4M7LBKmvWg.jpeg"
tags: [JavaScript]
description: "React hooks is finally here!!! And I know there has been a wh"
author: "Milad E. Fahmy"
title: "How to build a movie search app using React Hooks"
created: "2021-08-16T10:07:50+02:00"
modified: "2021-08-16T10:07:50+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-programming tag-web-development tag-reactjs tag-software-development ">
<header class="post-full-header">
<h1 class="post-full-title">How to build a movie search app using React Hooks</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*D9VZ47bgutne4M7LBKmvWg.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*D9VZ47bgutne4M7LBKmvWg.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*D9VZ47bgutne4M7LBKmvWg.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*D9VZ47bgutne4M7LBKmvWg.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*D9VZ47bgutne4M7LBKmvWg.jpeg" alt="How to build a movie search app using React Hooks">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
# if you haven't installed create-react-app then type the following
const Header = (props) =&gt; {
return (
&lt;header className="App-header"&gt;
&lt;h2&gt;{props.text}&lt;/h2&gt;
&lt;/header&gt;
);
};
export default Header;</code></pre><p>This component doesn’t require that much of an explanation — it’s basically a functional component that renders the <code>header</code> tag with the <code>text</code> props.</p><p>Let's not forget to update the import in our <code>index.js</code> file:</p><pre><code class="language-javascript">import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App'; // this changed
import * as serviceWorker from './serviceWorker';
ReactDOM.render(&lt;App /&gt;, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();</code></pre><p>And also update our <code>App.css</code> with these styles (not compulsory):</p><pre><code class="language-css">.App {
text-align: center;
}
.App-header {
background-color: #282c34;
height: 70px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-size: calc(10px + 2vmin);
color: white;
padding: 20px;
cursor: pointer;
}
.spinner {
height: 80px;
margin: auto;
}
.App-intro {
font-size: large;
}
/* new css for movie component */
* {
box-sizing: border-box;
}
.movies {
display: flex;
flex-wrap: wrap;
flex-direction: row;
}
.App-header h2 {
margin: 0;
}
.add-movies {
text-align: center;
}
.add-movies button {
font-size: 16px;
padding: 8px;
margin: 0 10px 30px 10px;
}
.movie {
padding: 5px 25px 10px 25px;
max-width: 25%;
}
.errorMessage {
margin: auto;
font-weight: bold;
color: rgb(161, 15, 15);
}
.search {
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;
margin-top: 10px;
}
input[type="submit"] {
padding: 5px;
background-color: transparent;
color: black;
border: 1px solid black;
width: 80px;
margin-left: 5px;
cursor: pointer;
}
input[type="submit"]:hover {
background-color: #282c34;
color: antiquewhite;
}
.search &gt; input[type="text"]{
width: 40%;
min-width: 170px;
}
@media screen and (min-width: 694px) and (max-width: 915px) {
.movie {
max-width: 33%;
}
}
@media screen and (min-width: 652px) and (max-width: 693px) {
.movie {
max-width: 50%;
}
}
@media screen and (max-width: 651px) {
.movie {
max-width: 100%;
margin: auto;
}
}</code></pre><p>Once we have that, the next thing is to create the <code>Movie</code> component. We will do that by creating a file called <code>Movie.js</code> and adding the following code:</p><pre><code class="language-javascript">import React from "react";
const DEFAULT_PLACEHOLDER_IMAGE =
"https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";
const Movie = ({ movie }) =&gt; {
const poster =
movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;
return (
&lt;div className="movie"&gt;
&lt;h2&gt;{movie.Title}&lt;/h2&gt;
&lt;div&gt;
&lt;img
width="200"
alt={`The movie titled: ${movie.Title}`}
src={poster}
/&gt;
&lt;/div&gt;
&lt;p&gt;({movie.Year})&lt;/p&gt;
&lt;/div&gt;
);
};
export default Movie;</code></pre><p>This requires more of an explanation, but it’s also just a presentational component (it doesn’t have any internal state) that renders the movie title, image, and year. The reason for the <code>DEFAULT_PLACEHOLDER_IMAGE</code> is because some movies retrieved from the API do not have images, so we will render a placeholder image instead of a broken link.</p><p>Now we will create the <code>Search</code> component. This part is exciting because in the past, in order to handle internal state, we would have to create a class component…but not anymore! Because with hooks we can have a functional component handle its own internal state. Let’s create a file named <code>Search.js</code> and in that file, we will add the following code:</p><pre><code class="language-javascript">import React, { useState } from "react";
const Search = (props) =&gt; {
const [searchValue, setSearchValue] = useState("");
const handleSearchInputChanges = (e) =&gt; {
setSearchValue(e.target.value);
}
const resetInputField = () =&gt; {
setSearchValue("")
}
const callSearchFunction = (e) =&gt; {
e.preventDefault();
props.search(searchValue);
resetInputField();
}
return (
&lt;form className="search"&gt;
&lt;input
value={searchValue}
onChange={handleSearchInputChanges}
type="text"
/&gt;
&lt;input onClick={callSearchFunction} type="submit" value="SEARCH" /&gt;
&lt;/form&gt;
);
}
export default Search;</code></pre><p>This is so exciting!!! I’m sure you’ve just seen the first hooks API that we are going to use, and it’s called <code>useState</code> . As the name implies, it lets us add React state to function components. The <code>useState</code> hook accepts one argument which is the initial state, and then it returns an array containing the current state (equivalent to <code>this.state</code> for class components) and a function to update it (equivalent to <code>this.setState</code> ).</p><p>In our case, we are passing our current state as the value for the search input field. When the onChange event is called, the <code>handleSearchInputChanges</code> function is called which calls the state update function with the new value. The <code>resetInputField</code> function basically called the state update function (<code>setSearchValue</code>) with an empty string in order to clear the input field. Check <a href="https://reactjs.org/docs/hooks-state.html" rel="noopener">this</a> out to know more about the <code>useState</code> API.</p><p>Finally, we will update the <code>App.js</code> file with the following code:</p><pre><code class="language-javascript">import React, { useState, useEffect } from "react";
import "../App.css";
import Header from "./Header";
import Movie from "./Movie";
import Search from "./Search";
const MOVIE_API_URL = "https://www.omdbapi.com/?s=man&amp;apikey=4a3b711b"; // you should replace this with yours
const App = () =&gt; {
const [loading, setLoading] = useState(true);
const [movies, setMovies] = useState([]);
const [errorMessage, setErrorMessage] = useState(null);
useEffect(() =&gt; {
fetch(MOVIE_API_URL)
.then(response =&gt; response.json())
.then(jsonResponse =&gt; {
setMovies(jsonResponse.Search);
setLoading(false);
});
}, []);
const search = searchValue =&gt; {
setLoading(true);
setErrorMessage(null);
fetch(`https://www.omdbapi.com/?s=${searchValue}&amp;apikey=4a3b711b`)
.then(response =&gt; response.json())
.then(jsonResponse =&gt; {
if (jsonResponse.Response === "True") {
setMovies(jsonResponse.Search);
setLoading(false);
} else {
setErrorMessage(jsonResponse.Error);
setLoading(false);
}
});
};
return (
&lt;div className="App"&gt;
&lt;Header text="HOOKED" /&gt;
&lt;Search search={search} /&gt;
&lt;p className="App-intro"&gt;Sharing a few of our favourite movies&lt;/p&gt;
&lt;div className="movies"&gt;
{loading &amp;&amp; !errorMessage ? (
&lt;span&gt;loading...&lt;/span&gt;
) : errorMessage ? (
&lt;div className="errorMessage"&gt;{errorMessage}&lt;/div&gt;
) : (
movies.map((movie, index) =&gt; (
&lt;Movie key={`${index}-${movie.Title}`} movie={movie} /&gt;
))
)}
&lt;/div&gt;
&lt;/div&gt;
);
};
export default App;</code></pre><p>Let’s go over the code: we are using 3 <code>useState</code> functions so yes, we can have multiple <code>useState</code> functions in one component. The first is used to handle the loading state (it renders a ‘loading…’ text when loading is set to true). The second is used to handle the movies array that is gotten from the server. And finally the third is used to handle any errors that might occur when making the API request.</p><p>And after that, we come across the second hooks API that we are using in the app: the <code>useEffect</code> hook. This hook basically lets you perform side effects in your function components. By side effects we mean things like data fetching, subscriptions, and manual DOM manipulations. The best part about this hook is this quote from the React official docs:</p><blockquote>If you’re familiar with React class lifecycle methods, you can think of <code>useEffect</code> Hook as <code>componentDidMount</code>, <code>componentDidUpdate</code>, and <code>componentWillUnmount</code> combined.</blockquote><p>This is because <code>useEffect</code> gets called after the first render (<code>componentDidMount</code>) and also after every update ( <code>componentDidUpdate</code> ).</p><p>I know you might be wondering how this is similar to <code>componentDidMount</code> if it gets called after every update. Well, it’s because of the <code>useEffect</code> function accepts two arguments, the function that you want to run and a second argument which is an array. In that array we just pass in a value that tells React to skip applying an effect if the value passed in hasn’t changed.</p><p>According to the docs, it’s similar to when we add a conditional statement in our <code>componentDidUpdate</code> :</p><pre><code class="language-javascript">
// for class components
componentDidUpdate(prevProps, prevState) {
if (prevState.count !== this.state.count) {
document.title = `You clicked ${this.state.count} times`;
}
}
// using hooks it will become
useEffect(() =&gt; {
document.title = `You clicked ${count} times`;
}, [count]); // Only re-run the effect if count changes</code></pre><p>In our case, we don’t have any value that changes, so we can pass in an empty array which tells React this effect should be called once.</p><p>As you can see, we have 3 <code>useState</code> functions that are somewhat related, and it should be possible for them to be combined in a way. Thankfully, the React team has us covered because they made a hook that helps with this — and that hook is called <code>useReducer</code> . Let’s convert our <code>App</code> component to use our new hook, so our <code>App.js</code> will now look like this:</p><pre><code class="language-javascript">import React, { useReducer, useEffect } from "react";
import "../App.css";
import Header from "./Header";
import Movie from "./Movie";
import Search from "./Search";
const MOVIE_API_URL = "https://www.omdbapi.com/?s=man&amp;apikey=4a3b711b";
const initialState = {
loading: true,
movies: [],
errorMessage: null
};
const reducer = (state, action) =&gt; {
switch (action.type) {
case "SEARCH_MOVIES_REQUEST":
return {
...state,
loading: true,
errorMessage: null
};
case "SEARCH_MOVIES_SUCCESS":
return {
...state,
loading: false,
movies: action.payload
};
case "SEARCH_MOVIES_FAILURE":
return {
...state,
loading: false,
errorMessage: action.error
};
default:
return state;
}
};
const App = () =&gt; {
const [state, dispatch] = useReducer(reducer, initialState);
useEffect(() =&gt; {
fetch(MOVIE_API_URL)
.then(response =&gt; response.json())
.then(jsonResponse =&gt; {
dispatch({
type: "SEARCH_MOVIES_SUCCESS",
payload: jsonResponse.Search
});
});
}, []);
const search = searchValue =&gt; {
dispatch({
type: "SEARCH_MOVIES_REQUEST"
});
fetch(`https://www.omdbapi.com/?s=${searchValue}&amp;apikey=4a3b711b`)
.then(response =&gt; response.json())
.then(jsonResponse =&gt; {
if (jsonResponse.Response === "True") {
dispatch({
type: "SEARCH_MOVIES_SUCCESS",
payload: jsonResponse.Search
});
} else {
dispatch({
type: "SEARCH_MOVIES_FAILURE",
error: jsonResponse.Error
});
}
});
};
const { movies, errorMessage, loading } = state;
return (
&lt;div className="App"&gt;
&lt;Header text="HOOKED" /&gt;
&lt;Search search={search} /&gt;
&lt;p className="App-intro"&gt;Sharing a few of our favourite movies&lt;/p&gt;
&lt;div className="movies"&gt;
{loading &amp;&amp; !errorMessage ? (
&lt;span&gt;loading... &lt;/span&gt;
) : errorMessage ? (
&lt;div className="errorMessage"&gt;{errorMessage}&lt;/div&gt;
) : (
movies.map((movie, index) =&gt; (
&lt;Movie key={`${index}-${movie.Title}`} movie={movie} /&gt;
))
)}
&lt;/div&gt;
&lt;/div&gt;
);
};
export default App;</code></pre><p>So, if all went well then we should see no change in the behavior of the app. Now let's go over how the <code>useReducer</code> hook works.</p><p>The hook takes 3 arguments, but for our use case we will be using only 2. A typical <code>useReducer</code> hook will look like this:</p><pre><code class="language-javascript">const [state, dispatch] = useReducer(
reducer,
initialState
);</code></pre><p>The <code>reducer</code> argument is similar to what we use in Redux, which looks like this:</p><pre><code class="language-javascript">const reducer = (state, action) =&gt; {
switch (action.type) {
case "SEARCH_MOVIES_REQUEST":
return {
...state,
loading: true,
errorMessage: null
};
case "SEARCH_MOVIES_SUCCESS":
return {
...state,
loading: false,
movies: action.payload
};
case "SEARCH_MOVIES_FAILURE":
return {
...state,
loading: false,
errorMessage: action.error
};
default:
return state;
}
};</code></pre><p>The reducer takes in the initialState and the action, so based on the action type, the reducer returns a new state object. For example, if the type of action that is dispatched is <code>SEARCH_MOVIES_REQUEST</code> , the state is updated with the new object where the value for <code>loading</code> is true and <code>errorMessage</code> is null.</p><p>Another thing to note is that in our <code>useEffect</code> , we are now dispatching an action with the payload as the movies array we are getting from the server. Also, in our <code>search</code> function, we are dispatching three different actions actually.</p><ul><li>One action is the <code>SEARCH_MOVIES_REQUEST</code> action which updates our state object, making <code>loading=true and errorMessage = null</code>.</li><li>If the request is successful then we dispatch another action with the type <code>SEARCH_MOVIES_SUCCESS </code>that updates our state object making <code>loading=false and movies = action.payload</code> where the payload is the movies array gotten from OMDB.</li><li>If there is an error, we will instead dispatch a different action with the type <code>SEARCH_MOVIES_FAILURE</code> that updates our state object making <code>loading=false and errorMessage = action.error</code> where the <code>action.error</code> is the error message gotten from the server.</li></ul><p>To know more about the <code>useReducer</code> hook you can check out the official <a href="https://reactjs.org/docs/hooks-reference.html#usereducer" rel="noopener">documentation</a>.</p><h4 id="wrapping-up">Wrapping up</h4><p>Wow!!! We’ve come a long way and I’m sure you are as excited as I am about the possibilities of hooks. For me personally, it is so much easier to introduce beginners to React, because I don’t need to explain how classes work or how <code>this</code> works, or how <code>bind</code> works in JS, which is awesome IMO.</p><p>We’ve only touched a few hooks in this tutorial, and we didn’t even cover features like creating our own custom <a href="https://reactjs.org/docs/hooks-custom.html" rel="noopener">hooks</a>. If you have some other use cases for hooks or you’ve implemented your own custom hook, please do drop a comment and join in on the excitement.</p><p>NOTE: This article is not related to the previous one about <a href="https://medium.freecodecamp.org/how-to-build-modern-applications-with-webpack-c81ccf6dd54f" rel="noopener">Webpack</a>, a subsequent article for that is already under construction ?.</p><p>This is the <a href="https://github.com/samie820/hooks-movie-app" rel="noopener">link</a> to the GitHub repo for this article.</p>
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
