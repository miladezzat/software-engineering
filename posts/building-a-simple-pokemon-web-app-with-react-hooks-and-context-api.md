---
card: "/images/default.jpg"
tags: [JavaScript]
description: "After seven years of full stack development using Ruby, Pytho"
author: "Milad E. Fahmy"
title: "How to Build a Simple Pokémon Web App with React Hooks and the Context API"
created: "2021-08-16T10:05:12+02:00"
modified: "2021-08-16T10:05:12+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-react tag-web-development tag-react-hooks tag-front-end-development ">
<header class="post-full-header">
<h1 class="post-full-title">How to Build a Simple Pokémon Web App with React Hooks and the Context API</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/04/ash.gif 300w,
/news/content/images/size/w600/2020/04/ash.gif 600w,
/news/content/images/size/w1000/2020/04/ash.gif 1000w,
/news/content/images/size/w2000/2020/04/ash.gif 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/04/ash.gif" alt="How to Build a Simple Pokémon Web App with React Hooks and the Context API">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>After seven years of full stack development using Ruby, Python, and vanilla JavaScript, these days I mostly work with JavaScript, Typescript, React, and Redux.</p><p>The JavaScript community is great and moves really fast. Tons of things are created "overnight", usually figuratively, but sometimes literally. All this makes it is really difficult to keep up to date.</p><p>I always feel like I'm late to the JavaScript party. And I want to be there, even though I don't really like parties.</p><p>Just one year of working with React and Redux and I felt like I needed to learn new things like Hooks and the Context API to manage state. After reading some articles about it I wanted to try these concepts, so I created a simple project as a laboratory to experiment with those things.</p><p>Since I was a little boy, I've been passionate about Pokémon. It was always fun playing the games on the Game Boy and conquering all the Leagues. Now as a developer, I want to play around with the <a href="https://pokeapi.co/">Pokémon API</a>.</p><p>I decided to build a simple web page where I could share data among different parts of the page. The page would have three main sections:</p><ul><li>A box with a list of all existing pokémon</li><li>A box with a list of all captured pokémon</li><li>A box with input to add new pokémon to the list</li></ul><p>And each box would have the following behavior or actions:</p><ul><li>For each pokémon in the first box, I can capture them and send to the second box</li><li>For each pokémon in the second box, I can release them and send to the first box</li><li>As a game god, I'm able to create pokémon by filling in the input and sending them to the first box</li></ul><p>So all the features I wanted to implement were clear – lists and actions. </p><h2 id="listing-pok-mon">Listing Pokémon</h2><p>The basic feature I wanted to build first was listing pokémon. So for an array of objects, I wanted to list and show the <code>name</code> attribute of each object.</p><p>I started with the first box: the existing pokémon.</p><p>At first I thought I don't need the Pokémon API – I could just mock the list and see if it works. With <code>useState</code>, I can declare my component state and use it.</p><p>We define it with a default value of a mock pokémon list, just to test it:</p><pre><code class="language-javascript">const [pokemons] = useState([
{ id: 1, name: 'Bulbasaur' },
{ id: 2, name: 'Charmander' },
{ id: 3, name: 'Squirtle' }
]);
</code></pre><p>Here we have a list of three pokémon objects. The <code>useState</code> hook provides a pair of items: the current state and a function to let you update this created state.</p><p>Now with the pokémon's state, we can map it and render the name of each one.</p><pre><code class="language-javascript">{pokemons.map((pokemon) =&gt; &lt;p&gt;{pokemon.name}&lt;/p&gt;)}
</code></pre><p>It is just a map returning each pokémon's name in a paragraph tag.</p><p>This is the whole component implemented:</p><pre><code class="language-javascript">import React, { useState } from 'react';
const PokemonsList = () =&gt; {
const [pokemons] = useState([
{ id: 1, name: 'Bulbasaur' },
{ id: 2, name: 'Charmander' },
{ id: 3, name: 'Squirtle' }
]);
return (
&lt;div className="pokemons-list"&gt;
&lt;h2&gt;Pokemons List&lt;/h2&gt;
{pokemons.map((pokemon) =&gt;
&lt;div key={`${pokemon.id}-${pokemon.name}`}&gt;
&lt;p&gt;{pokemon.id}&lt;/p&gt;
&lt;p&gt;{pokemon.name}&lt;/p&gt;
&lt;/div&gt;)}
&lt;/div&gt;
)
}
export default PokemonsList;
</code></pre><p>Just a little tweak here:</p><ul><li>I added the <code>key</code> in a combination of the pokémon's <code>id</code> and <code>name</code></li><li>And I also rendered a paragraph for the <code>id</code> attribute (I was just testing it. But we will remove it later.)</li></ul><p>Great! Now we have the first list up and running.</p><p>I want to make this same implementation but now for the captured pokémon. But for the captured pokémon, I first want to create an empty list because when the "game" starts, I won't have any captured pokémon, right? Right!</p><pre><code class="language-javascript">const [pokemons] = useState([]);
</code></pre><p>That's it, really simple!</p><p>The whole component looks similar to the other:</p><pre><code class="language-javascript">import React, { useState } from 'react';
const CapturedPokemons = () =&gt; {
const [pokemons] = useState([]);
return (
&lt;div className="pokedex"&gt;
&lt;h2&gt;Captured Pokemons&lt;/h2&gt;
{pokemons.map((pokemon) =&gt;
&lt;div key={`${pokemon.id}-${pokemon.name}`}&gt;
&lt;p&gt;{pokemon.id}&lt;/p&gt;
&lt;p&gt;{pokemon.name}&lt;/p&gt;
&lt;/div&gt;)}
&lt;/div&gt;
)
}
export default CapturedPokemons;
</code></pre><p>Here we use <code>map</code>, but as the array is empty, it doesn't render anything.</p><p>Now that I have the two main components, I can use them together in the <code>App</code> component:</p><pre><code class="language-javascript">import React from 'react';
import './App.css';
import PokemonsList from './PokemonsList';
import Pokedex from './Pokedex';
const App = () =&gt; (
&lt;div className="App"&gt;
&lt;PokemonsList /&gt;
&lt;Pokedex /&gt;
&lt;/div&gt;
);
export default App;
</code></pre><h2 id="capturing-and-releasing">Capturing and Releasing</h2><p>This is the second part of our app where we can capture and release pokémon. So let's go over the expected behavior.</p><p>For each pokémon in the list of available pokémon, I want to enable an action to capture them. The capture action will remove them from the list where they were and add them to the list of captured pokémon.</p><p>The release action will have similar behavior. But instead of moving from the available list to the captured list, it will be the reverse. We will move them from the captured list to the available list.</p><p>So both boxes need to share data to be able to add pokémon to the other list. How do we do this as they are different components in the app? Let's talk about the React Context API.</p><p>The Context API was designed to make global data for a defined tree of React components. As the data is global, we can share it among components in this defined tree. So let's use it to share our simple Pokemon data between the two boxes.</p><p>Mental Note: "Context is primarily used when some data needs to be accessible by many components at different nesting levels." - React Docs.</p><p>Using the API, we simply create a new context like this:</p><pre><code class="language-javascript">import { createContext } from 'react';
const PokemonContext = createContext();
</code></pre><p>Now, with the <code>PokemonContext</code>, we can use its provider. It will work as a component wrapper of a tree of components. It provides global data to these components and enables them to subscribe to any changes related to this context. It looks like this:</p><pre><code class="language-javascript">&lt;PokemonContext.Provider value={/* some value */}&gt;
</code></pre><p>The <code>value</code> prop is just a value that this context provides the wrapped components. What should we provide to the available and the captured lists?</p><ul><li><code>pokemons</code>: to list in the available list</li><li><code>capturedPokemons</code>: to list in the captured list</li><li><code>setPokemons</code>: to be able to update the available list</li><li><code>setCapturedPokemons</code>: to be able to update the captured list</li></ul><p>As I mentioned before in the <code>useState</code> part, this hook always provides a pair: the state and a function to update this state. This function handles and updates the context state. In other words, they are the <code>setPokemons</code> and <code>setCapturedPokemons</code>. How?</p><pre><code class="language-javascript">const [pokemons, setPokemons] = useState([
{ id: 1, name: 'Bulbasaur' },
{ id: 2, name: 'Charmander' },
{ id: 3, name: 'Squirtle' }
]);
</code></pre><p>Now we have the <code>setPokemons</code>.</p><pre><code class="language-javascript">const [capturedPokemons, setCapturedPokemons] = useState([]);
</code></pre><p>And now we also have the <code>setCapturedPokemons</code>.</p><p>With all these values in hand, we can now pass them to the provider's <code>value</code> prop.</p><pre><code class="language-javascript">import React, { createContext, useState } from 'react';
export const PokemonContext = createContext();
export const PokemonProvider = (props) =&gt; {
const [pokemons, setPokemons] = useState([
{ id: 1, name: 'Bulbasaur' },
{ id: 2, name: 'Charmander' },
{ id: 3, name: 'Squirtle' }
]);
const [capturedPokemons, setCapturedPokemons] = useState([]);
const providerValue = {
pokemons,
setPokemons,
capturedPokemons,
setCapturedPokemons
};
return (
&lt;PokemonContext.Provider value={providerValue}&gt;
{props.children}
&lt;/PokemonContext.Provider&gt;
)
};
</code></pre><p>I created a <code>PokemonProvider</code> to wrap all this data and the APIs to create the context and return the context provider with the defined value.</p><p>But how do we provide all this data and APIs to the component? We need to do two main things:</p><ul><li>Wrap the components into this context provider</li><li>Use the context in each component</li></ul><p>Let's wrap them first:</p><pre><code class="language-javascript">const App = () =&gt; (
&lt;PokemonProvider&gt;
&lt;div className="App"&gt;
&lt;PokemonsList /&gt;
&lt;Pokedex /&gt;
&lt;/div&gt;
&lt;/PokemonProvider&gt;
);
</code></pre><p>And we use the context by using the <code>useContext</code> and passing the created <code>PokemonContext</code>. Like this:</p><pre><code class="language-javascript">import { useContext } from 'react';
import { PokemonContext } from './PokemonContext';
useContext(PokemonContext); // returns the context provider value we created
</code></pre><p>We want to be able to catch the available pokémon, so it would be useful to have the <code>setCapturedPokemons</code> function API update the captured pokémon. </p><p>As each pokémon is captured, we need to remove it from the available list. <code>setPokemons</code> is also needed here. And to update each list, we need the current data. So basically we need everything from the context provider.</p><p>We need to build a button with an action to capture the pokémon:</p><ul><li><code>&lt;button&gt;</code> tag with an <code>onClick</code> calling the <code>capture</code> function and passing the pokémon</li></ul><pre><code class="language-javascript">&lt;button onClick={capture(pokemon)}&gt;+&lt;/button&gt;
</code></pre><ul><li>The <code>capture</code> function will update the <code>pokemons</code> and the <code>capturedPokemons</code> lists</li></ul><pre><code class="language-javascript">const capture = (pokemon) =&gt; (event) =&gt; {
// update captured pokemons list
// update available pokemons list
};
</code></pre><p>To update the <code>capturedPokemons</code>, we can just call the <code>setCapturedPokemons</code> function with the current <code>capturedPokemons</code> and the pokémon to be captured.</p><pre><code class="language-javascript">setCapturedPokemons([...capturedPokemons, pokemon]);
</code></pre><p>And to update the <code>pokemons</code> list, just filter the pokémon that will be captured.</p><pre><code class="language-javascript">setPokemons(removePokemonFromList(pokemon));
</code></pre><p><code>removePokemonFromList</code> is just a simple function to filter the pokémon by removing the captured pokémon.</p><pre><code class="language-javascript">const removePokemonFromList = (removedPokemon) =&gt;
pokemons.filter((pokemon) =&gt; pokemon !== removedPokemon)
</code></pre><p>How does the component look now?</p><pre><code class="language-javascript">import React, { useContext } from 'react';
import { PokemonContext } from './PokemonContext';
export const PokemonsList = () =&gt; {
const {
pokemons,
setPokemons,
capturedPokemons,
setCapturedPokemons
} = useContext(PokemonContext);
const removePokemonFromList = (removedPokemon) =&gt;
pokemons.filter(pokemon =&gt; pokemon !== removedPokemon);
const capture = (pokemon) =&gt; () =&gt; {
setCapturedPokemons([...capturedPokemons, pokemon]);
setPokemons(removePokemonFromList(pokemon));
};
return (
&lt;div className="pokemons-list"&gt;
&lt;h2&gt;Pokemons List&lt;/h2&gt;
{pokemons.map((pokemon) =&gt;
&lt;div key={`${pokemon.id}-${pokemon.name}`}&gt;
&lt;div&gt;
&lt;span&gt;{pokemon.name}&lt;/span&gt;
&lt;button onClick={capture(pokemon)}&gt;+&lt;/button&gt;
&lt;/div&gt;
&lt;/div&gt;)}
&lt;/div&gt;
);
};
export default PokemonsList;
</code></pre><p>It will look very similar to the captured pokémon component. Instead of <code>capture</code>, it will be a <code>release</code> function:</p><pre><code class="language-javascript">import React, { useContext } from 'react';
import { PokemonContext } from './PokemonContext';
const CapturedPokemons = () =&gt; {
const {
pokemons,
setPokemons,
capturedPokemons,
setCapturedPokemons,
} = useContext(PokemonContext);
const releasePokemon = (releasedPokemon) =&gt;
capturedPokemons.filter((pokemon) =&gt; pokemon !== releasedPokemon);
const release = (pokemon) =&gt; () =&gt; {
setCapturedPokemons(releasePokemon(pokemon));
setPokemons([...pokemons, pokemon]);
};
return (
&lt;div className="captured-pokemons"&gt;
&lt;h2&gt;CapturedPokemons&lt;/h2&gt;
{capturedPokemons.map((pokemon) =&gt;
&lt;div key={`${pokemon.id}-${pokemon.name}`}&gt;
&lt;div&gt;
&lt;span&gt;{pokemon.name}&lt;/span&gt;
&lt;button onClick={release(pokemon)}&gt;-&lt;/button&gt;
&lt;/div&gt;
&lt;/div&gt;)}
&lt;/div&gt;
);
};
export default CapturedPokemons;
</code></pre><h2 id="reducing-complexity">Reducing complexity</h2><p>Now we use the <code>useState</code> hook, the Context API, and the context provider <code>useContext</code>. And more importantly, we can share data between pokémon boxes.</p><p>Another way to manage the state is by using <code>useReducer</code> as an alternative to <code>useState</code>.</p><p>The reducer lifecycle works like this: <code>useReducer</code> provides a <code>dispatch</code> function. With this function, we can dispatch an <code>action</code> inside a component. The <code>reducer</code> receives the action and the state. It understands the type of action, handles the data, and return a new state. Now, the new state can be used in the component.</p><p>As an exercise and to have a better understanding of this hook, I tried to replace <code>useState</code> with it.</p><p><code>useState</code> was inside the <code>PokemonProvider</code>. We can redefine the initial state for the available and the captured pokémon in this data structure:</p><pre><code class="language-javascript">const defaultState = {
pokemons: [
{ id: 1, name: 'Bulbasaur' },
{ id: 2, name: 'Charmander' },
{ id: 3, name: 'Squirtle' }
],
capturedPokemons: []
};
</code></pre><p>And pass this value to <code>useReducer</code>:</p><pre><code class="language-javascript">const [state, dispatch] = useReducer(pokemonReducer, defaultState);
</code></pre><p><code>useReducer</code> receives two parameters: the reducer and the initial state. Let's build the <code>pokemonReducer</code> now.</p><p>The reducer receives the current state and the action that was dispatched.</p><pre><code class="language-javascript">const pokemonReducer = (state, action) =&gt; // returns the new state based on the action type
</code></pre><p>Here we get the action type and return a new state. The action is an object. It looks like this:</p><pre><code class="language-javascript">{ type: 'AN_ACTION_TYPE' }
</code></pre><p>But could also be bigger:</p><pre><code class="language-javascript">{
type: 'AN_ACTION_TYPE',
pokemon: {
name: 'Pikachu'
}
}
</code></pre><p>In this case, we'll pass a pokémon to the action object. Let's pause for a minute and think about what we want to do inside the reducer.</p><p>Here, we usually update data and handle actions. Actions are dispatched, so actions are behavior. And the behaviors from our app are <em>capture</em> and <em>release</em>! These are the actions we need to handle here.</p><p>This is what our reducer will look like:</p><pre><code class="language-javascript">const pokemonReducer = (state, action) =&gt; {
switch (action.type) {
case 'CAPTURE':
// handle capture and return new state
case 'RELEASE':
// handle release and return new state
default:
return state;
}
};
</code></pre><p>If our action type is <code>CAPTURE</code>, we handle it in one way. If our action type is <code>RELEASE</code>, we handle it another way. If the action type doesn't match any of these types, just return the current state.</p><p>When we capture the pokémon, we need to update both lists: remove the pokémon from the available list and add it to the captured list. This state is what we need to return from the reducer.</p><pre><code class="language-javascript">const getPokemonsList = (pokemons, capturedPokemon) =&gt;
pokemons.filter(pokemon =&gt; pokemon !== capturedPokemon)
const capturePokemon = (pokemon, state) =&gt; ({
pokemons: getPokemonsList(state.pokemons, pokemon),
capturedPokemons: [...state.capturedPokemons, pokemon]
});
</code></pre><p>The <code>capturePokemon</code> function just returns the updated lists. The <code>getPokemonsList</code> removes the captured pokémon from the available list.</p><p>And we use this new function in the reducer:</p><pre><code class="language-javascript">const pokemonReducer = (state, action) =&gt; {
switch (action.type) {
case 'CAPTURE':
return capturePokemon(action.pokemon, state);
case 'RELEASE':
// handle release and return new state
default:
return state;
}
};
</code></pre><p>Now the <code>release</code> function!</p><pre><code class="language-javascript">const getCapturedPokemons = (capturedPokemons, releasedPokemon) =&gt;
capturedPokemons.filter(pokemon =&gt; pokemon !== releasedPokemon)
const releasePokemon = (releasedPokemon, state) =&gt; ({
pokemons: [...state.pokemons, releasedPokemon],
capturedPokemons: getCapturedPokemons(state.capturedPokemons, releasedPokemon)
});
</code></pre><p>The <code>getCapturedPokemons</code> remove the released pokémon from the captured list. The <code>releasePokemon</code> function returns the updated lists.</p><p>Our reducer looks like this now:</p><pre><code class="language-javascript">const pokemonReducer = (state, action) =&gt; {
switch (action.type) {
case 'CAPTURE':
return capturePokemon(action.pokemon, state);
case 'RELEASE':
return releasePokemon(action.pokemon, state);
default:
return state;
}
};
</code></pre><p>Just one minor refactor: action types! These are strings and we can extract them into a constant and provide for the dispatcher.</p><pre><code class="language-javascript">export const CAPTURE = 'CAPTURE';
export const RELEASE = 'RELEASE';
</code></pre><p>And the reducer:</p><pre><code class="language-javascript">const pokemonReducer = (state, action) =&gt; {
switch (action.type) {
case CAPTURE:
return capturePokemon(action.pokemon, state);
case RELEASE:
return releasePokemon(action.pokemon, state);
default:
return state;
}
};
</code></pre><p>The entire reducer file looks like this:</p><pre><code class="language-javascript">export const CAPTURE = 'CAPTURE';
export const RELEASE = 'RELEASE';
const getCapturedPokemons = (capturedPokemons, releasedPokemon) =&gt;
capturedPokemons.filter(pokemon =&gt; pokemon !== releasedPokemon)
const releasePokemon = (releasedPokemon, state) =&gt; ({
pokemons: [...state.pokemons, releasedPokemon],
capturedPokemons: getCapturedPokemons(state.capturedPokemons, releasedPokemon)
});
const getPokemonsList = (pokemons, capturedPokemon) =&gt;
pokemons.filter(pokemon =&gt; pokemon !== capturedPokemon)
const capturePokemon = (pokemon, state) =&gt; ({
pokemons: getPokemonsList(state.pokemons, pokemon),
capturedPokemons: [...state.capturedPokemons, pokemon]
});
export const pokemonReducer = (state, action) =&gt; {
switch (action.type) {
case CAPTURE:
return capturePokemon(action.pokemon, state);
case RELEASE:
return releasePokemon(action.pokemon, state);
default:
return state;
}
};
</code></pre><p>As the reducer is now implemented, we can import it into our provider and use it in the <code>useReducer</code> hook.</p><pre><code class="language-javascript">const [state, dispatch] = useReducer(pokemonReducer, defaultState);
</code></pre><p>As we are inside the <code>PokemonProvider</code>, we want to provide some value to the consuming components: the capture and release actions.</p><p>These functions just need to dispatch the correct action type and pass the pokémon to the reducer.</p><ul><li>The <code>capture</code> function: it receives the pokémon and returns a new function that dispatches an action with the type <code>CAPTURE</code> and the captured pokémon.</li></ul><pre><code class="language-javascript">const capture = (pokemon) =&gt; () =&gt; {
dispatch({ type: CAPTURE, pokemon });
};
</code></pre><ul><li>The <code>release</code> function: it receives the pokémon and returns a new function that dispatches an action with the type <code>RELEASE</code> and the released pokémon.</li></ul><pre><code class="language-javascript">const release = (pokemon) =&gt; () =&gt; {
dispatch({ type: RELEASE, pokemon });
};
</code></pre><p>Now with the state and the actions implemented, we can provide these values to the consuming components. Just update the provider value prop.</p><pre><code class="language-javascript">const { pokemons, capturedPokemons } = state;
const providerValue = {
pokemons,
capturedPokemons,
release,
capture
};
&lt;PokemonContext.Provider value={providerValue}&gt;
{props.children}
&lt;/PokemonContext.Provider&gt;
</code></pre><p>Great! Now back to the component. Let's use these new actions. All the capture and release logics are encapsulated in our provider and reducer. Our component is pretty clean now. The <code>useContext</code> will look like this:</p><pre><code class="language-javascript">const { pokemons, capture } = useContext(PokemonContext);
</code></pre><p>And the whole component:</p><pre><code class="language-javascript">import React, { useContext } from 'react';
import { PokemonContext } from './PokemonContext';
const PokemonsList = () =&gt; {
const { pokemons, capture } = useContext(PokemonContext);
return (
&lt;div className="pokemons-list"&gt;
&lt;h2&gt;Pokemons List&lt;/h2&gt;
{pokemons.map((pokemon) =&gt;
&lt;div key={`${pokemon.id}-${pokemon.name}`}&gt;
&lt;span&gt;{pokemon.name}&lt;/span&gt;
&lt;button onClick={capture(pokemon)}&gt;+&lt;/button&gt;
&lt;/div&gt;)}
&lt;/div&gt;
)
};
export default PokemonsList;
</code></pre><p>For the captured pokémon component, it will look the very similar to the <code>useContext</code>:</p><pre><code class="language-javascript">const { capturedPokemons, release } = useContext(PokemonContext);
</code></pre><p>And the whole component:</p><pre><code class="language-javascript">import React, { useContext } from 'react';
import { PokemonContext } from './PokemonContext';
const Pokedex = () =&gt; {
const { capturedPokemons, release } = useContext(PokemonContext);
return (
&lt;div className="pokedex"&gt;
&lt;h2&gt;Pokedex&lt;/h2&gt;
{capturedPokemons.map((pokemon) =&gt;
&lt;div key={`${pokemon.id}-${pokemon.name}`}&gt;
&lt;span&gt;{pokemon.name}&lt;/span&gt;
&lt;button onClick={release(pokemon)}&gt;-&lt;/button&gt;
&lt;/div&gt;)}
&lt;/div&gt;
)
};
export default Pokedex;
</code></pre><p>No logic. Just UI. Very clean.</p><h2 id="pok-mon-god-the-creator">Pokémon God – The Creator</h2><p>Now that we have the communication between the two lists, I want to build a third box. This will how we create new pokémon. But it is just a simple input and submit button. </p><p>When we add a pokémon's name into the input and press the button, it will dispatch an action to add this pokémon to the available list.</p><p>As we need to access the available list to update it, we need to share the state. So our component will be wrapped by our <code>PokemonProvider</code> together with the other components.</p><pre><code class="language-javascript">const App = () =&gt; (
&lt;PokemonProvider&gt;
&lt;div className="main"&gt;
&lt;PokemonsList /&gt;
&lt;Pokedex /&gt;
&lt;/div&gt;
&lt;PokemonForm /&gt;
&lt;/PokemonProvider&gt;
);
</code></pre><p>Let's build the <code>PokemonForm</code> component now. The form is pretty straightforward:</p><pre><code class="language-javascript">&lt;form onSubmit={handleFormSubmit}&gt;
&lt;input type="text" placeholder="pokemon name" onChange={handleNameOnChange} /&gt;
&lt;input type="submit" value="Add" /&gt;
&lt;/form&gt;
</code></pre><p>We have a form, an input, and a button. To sum up, we also have a function to handle the form submit and another function to handle the input on change.</p><p>The <code>handleNameOnChange</code> will be called every time the user types or removes a character. I wanted to build a local state, a representation of the pokemon name. With this state, we can use it to dispatch when submitting the form.</p><p>As we want to try hooks, we will use <code>useState</code> to handle this local state.</p><pre><code class="language-javascript">const [pokemonName, setPokemonName] = useState();
const handleNameOnChange = (e) =&gt; setPokemonName(e.target.value);
</code></pre><p>We use the <code>setPokemonName</code> to update the <code>pokemonName</code> every time the user interacts with the input.</p><p>And the <code>handleFormSubmit</code> is a function to dispatch the new pokémon to be added to the available list.</p><pre><code class="language-javascript">const handleFormSubmit = (e) =&gt; {
e.preventDefault();
addPokemon({
id: generateID(),
name: pokemonName
});
};
</code></pre><p><code>addPokemon</code> is the API we will build later. It receives the pokémon's id and name. The name is the local state we defined, <code>pokemonName</code>.</p><p><code>generateID</code> is just a simple function I built to generate a random number. It looks like this:</p><pre><code class="language-javascript">export const generateID = () =&gt; {
const a = Math
.random()
.toString(36)
.substring(2, 15)
const b = Math
.random()
.toString(36)
.substring(2, 15)
return a + b;
};
</code></pre><p><code>addPokemon</code> will be provided by the context API we build. That way, this function can receive the new pokémon and add to the available list. It looks like this:</p><pre><code class="language-javascript">const addPokemon = (pokemon) =&gt; {
dispatch({ type: ADD_POKEMON, pokemon });
};
</code></pre><p>It will dispatch this action type <code>ADD_POKEMON</code> and also pass the pokémon.</p><p>In our reducer, we add the case for the <code>ADD_POKEMON</code> and handle the state to add the new pokémon to state.</p><pre><code class="language-javascript">const pokemonReducer = (state, action) =&gt; {
switch (action.type) {
case CAPTURE:
return capturePokemon(action.pokemon, state);
case RELEASE:
return releasePokemon(action.pokemon, state);
case ADD_POKEMON:
return addPokemon(action.pokemon, state);
default:
return state;
}
};
</code></pre><p>And the <code>addPokemon</code> function will be:</p><pre><code class="language-javascript">const addPokemon = (pokemon, state) =&gt; ({
pokemons: [...state.pokemons, pokemon],
capturedPokemons: state.capturedPokemons
});
</code></pre><p>Another approach is to destructure the state and change only the pokémon's attribute, like this:</p><pre><code class="language-javascript">const addPokemon = (pokemon, state) =&gt; ({
...state,
pokemons: [...state.pokemons, pokemon],
});
</code></pre><p>Back to our component, we just need to make sure the <code>useContext</code> provides the <code>addPokemon</code> dispatch API based on the <code>PokemonContext</code>:</p><pre><code class="language-javascript">const { addPokemon } = useContext(PokemonContext);
</code></pre><p>And the whole component looks like this:</p><pre><code class="language-javascript">import React, { useContext, useState } from 'react';
import { PokemonContext } from './PokemonContext';
import { generateID } from './utils';
const PokemonForm = () =&gt; {
const [pokemonName, setPokemonName] = useState();
const { addPokemon } = useContext(PokemonContext);
const handleNameOnChange = (e) =&gt; setPokemonName(e.target.value);
const handleFormSubmit = (e) =&gt; {
e.preventDefault();
addPokemon({
id: generateID(),
name: pokemonName
});
};
return (
&lt;form onSubmit={handleFormSubmit}&gt;
&lt;input type="text" placeholder="pokemon name" onChange={handleNameOnChange} /&gt;
&lt;input type="submit" value="Add" /&gt;
&lt;/form&gt;
);
};
export default PokemonForm;
</code></pre><p>Now we have the available pokémon list, the captured pokémon list, and the third box to create new pokémon.</p><h2 id="pok-mon-effects">Pokémon Effects</h2><p>Now that we have our app almost complete, we can replace the mocked pokémon list with a list of pokémon from the PokéAPI.</p><p>So, inside the function component, we can't do any side effects like logging or subscriptions. This is why the <code>useEffect</code> hook exists. With this hook, we can fetch pokémon (a side-effect), and add to the list.</p><p>Fetching from the PokéAPI looks like this:</p><pre><code class="language-javascript">const url = "https://pokeapi.co/api/v2/pokemon";
const response = await fetch(url);
const data = await response.json();
data.results; // [{ name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' }, ...]
</code></pre><p>The <code>results</code> attribute is the list of fetched pokémon. With this data, we will be able to add them to the pokémon list.</p><p>Let's get the request code inside <code>useEffect</code>:</p><pre><code class="language-javascript">useEffect(() =&gt; {
const fetchPokemons = async () =&gt; {
const response = await fetch(url);
const data = await response.json();
data.results; // update the pokemons list with this data
};
fetchPokemons();
}, []);
</code></pre><p>To be able to use <code>async-await</code>, we need to create a function and call it later. The empty array is a parameter to make sure <code>useEffect</code> knows the dependencies it will look up to re-run.</p><p>The default behavior is to run the effect of every completed render. If we add a dependency to this list, <code>useEffect</code> will only re-run when the dependency changes, instead of running in all completed renders.</p><p>Now that we've fetched the pokémon, we need to update the list. It's an action, a new behavior. We need to use the dispatch again, implement a new type in the reducer, and update the state in the context provider.</p><p>In <code>PokemonContext</code>, we created the <code>addPokemons</code> function to provide an API to the consuming component using it.</p><pre><code class="language-javascript">const addPokemons = (pokemons) =&gt; {
dispatch({ type: ADD_POKEMONS, pokemons });
};
</code></pre><p>It receives pokémon and dispatches a new action: <code>ADD_POKEMONS</code>.</p><p>In the reducer, we add this new type, expect the pokémon, and call a function to add the pokémon to the available list state.</p><pre><code class="language-javascript">const pokemonReducer = (state, action) =&gt; {
switch (action.type) {
case CAPTURE:
return capturePokemon(action.pokemon, state);
case RELEASE:
return releasePokemon(action.pokemon, state);
case ADD_POKEMON:
return addPokemon(action.pokemon, state);
case ADD_POKEMONS:
return addPokemons(action.pokemons, state);
default:
return state;
}
};
</code></pre><p>The <code>addPokemons</code> function just adds the pokémon to the list:</p><pre><code class="language-javascript">const addPokemons = (pokemons, state) =&gt; ({
pokemons: pokemons,
capturedPokemons: state.capturedPokemons
});
</code></pre><p>We can refactor this by using state destructuring and the object property value shorthand:</p><pre><code class="language-javascript">const addPokemons = (pokemons, state) =&gt; ({
...state,
pokemons,
});
</code></pre><p>As we provide this function API to the consuming component now, we can use the <code>useContext</code> to get it.</p><pre><code class="language-javascript">const { addPokemons } = useContext(PokemonContext);
</code></pre><p>The whole component looks like this:</p><pre><code class="language-javascript">import React, { useContext, useEffect } from 'react';
import { PokemonContext } from './PokemonContext';
const url = "https://pokeapi.co/api/v2/pokemon";
export const PokemonsList = () =&gt; {
const { state, capture, addPokemons } = useContext(PokemonContext);
useEffect(() =&gt; {
const fetchPokemons = async () =&gt; {
const response = await fetch(url);
const data = await response.json();
addPokemons(data.results);
};
fetchPokemons();
}, [addPokemons]);
return (
&lt;div className="pokemons-list"&gt;
&lt;h2&gt;Pokemons List&lt;/h2&gt;
{state.pokemons.map((pokemon) =&gt;
&lt;div key={pokemon.name}&gt;
&lt;div&gt;
&lt;span&gt;{pokemon.name}&lt;/span&gt;
&lt;button onClick={capture(pokemon)}&gt;+&lt;/button&gt;
&lt;/div&gt;
&lt;/div&gt;)}
&lt;/div&gt;
);
};
export default PokemonsList;
</code></pre><h2 id="wrapping-up">Wrapping up</h2><p>This was my attempt to share what I learned while trying to use hooks in a mini side project.</p><p>We learned how to handle local state with <code>useState</code>, building a global state with the Context API, how to rewrite and replace <code>useState</code> with <code>useReducer</code>, and how to do side-effects within <code>useEffect</code>.</p><p>Disclaimer: this was just an experimental project for learning purposes. I may not have used best practices for hooks or made them scalable for big projects.</p><p>I hope this was good reading! Keep learning and coding!</p><p>You can other articles like this <a href="https://leandrotk.github.io/tk/2020/04/react-hooks-context-api-and-pokemons/index.html"></a><a href="https://leandrotk.github.io/tk/2020/03/closure-currying-and-cool-abstractions/index.html">on my blog</a>.</p><p>My <a href="https://twitter.com/leandrotk_">Twitter</a> and <a href="https://github.com/leandrotk">Github</a>.</p><h2 id="resources">Resources</h2><ul><li><a href="https://reactjs.org/docs/context.html">React Docs: Context</a></li><li><a href="https://reactjs.org/docs/hooks-reference.html">React Docs: Hooks</a></li><li><a href="https://github.com/leandrotk/pokehooks-labs">Pokemon Hooks side-project: source code</a></li><li><a href="https://alterclass.io/?ref=5ec57f513c1321001703dcd2">Learn React by building an App</a></li></ul>
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
