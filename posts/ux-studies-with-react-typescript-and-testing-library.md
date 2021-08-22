---
card: "/images/default.jpg"
tags: [React Hooks]
description: "I m always willing to learn, no matter how much I know. As a "
author: "Milad E. Fahmy"
title: "How to Create a Great User Experience with React, TypeScript, and the React Testing Library"
created: "2021-08-16T10:04:55+02:00"
modified: "2021-08-16T10:04:55+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-react-hooks tag-typescript tag-javascript tag-web-development tag-react-testing-library tag-automation-testing tag-reactjs ">
<header class="post-full-header">
<h1 class="post-full-title">How to Create a Great User Experience with React, TypeScript, and the React Testing Library</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/06/cover-2.jpg 300w,
/news/content/images/size/w600/2020/06/cover-2.jpg 600w,
/news/content/images/size/w1000/2020/06/cover-2.jpg 1000w,
/news/content/images/size/w2000/2020/06/cover-2.jpg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/06/cover-2.jpg" alt="How to Create a Great User Experience with React, TypeScript, and the React Testing Library">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>I'm always willing to learn, no matter how much I know. As a software engineer, my thirst for knowledge has increased a lot. I know that I have a lot of things to learn daily.</p><p>But before I could learn more, I wanted to master the fundamentals. To make myself a better developer, I wanted to understand more about how to create great product experiences.</p><p>This post is my attempt to illustrate a Proof of Concept (PoC) I built to try out some ideas.</p><p>I had some topics in mind for this project. It needed to:</p><ul><li>Use high-quality software</li><li>Provide a great user experience</li></ul><p>When I say high-quality software, this can mean so many different things. But I wanted to focus on three parts:</p><ul><li>Clean Code: Strive to write human-readable code that is easy to read and simple to maintain. Separate responsibility for functions and components.</li><li>Good test coverage: It's actually not about coverage. It's about tests that cover important parts of components' behavior without knowing too much about implementation details.</li><li>Consistent state management: I wanted to build with software that enables the app to have consistent data. Predictability is important.</li></ul><p>User experience was the main focus of this PoC. The software and techniques would be the foundation that enabled a good experience for users.</p><p>To make the state consistent, I wanted a type system. So I chose TypeScript. This was my first time using Typescript with React. This project also allowed me to build custom hooks and test it properly.</p><h2 id="setting-up-the-project">Setting up the project</h2><p>I came across this library called <a href="https://github.com/jaredpalmer/tsdx">tsdx</a> that sets up all the Typescript configuration for you. It's mainly used to build packages. Since this was a simple side project, I didn't mind giving it a try.</p><p>After installing it, I chose the React template and I was ready to code. But before the fun part, I wanted to set up the test configuration too. I used the <a href="https://github.com/testing-library/react-testing-library">React Testing Library</a> as the main library together with <a href="https://github.com/testing-library/jest-dom">jest-dom</a> to provide some awesome custom methods (I really like the <code>toBeInTheDocument</code> matcher).</p><p>With all that installed, I overwrote the jest config by adding a new <code>jest.config.js</code>:</p><pre><code class="language-typescript">module.exports = {
verbose: true,
setupFilesAfterEnv: ["./setupTests.ts"],
};
</code></pre><p>And a <code>setupTests.ts</code> to import everything I needed.</p><pre><code class="language-typescript">import "@testing-library/jest-dom";
</code></pre><p>In this case, I just had the <code>jest-dom</code> library to import. That way, I didn't need to import this package in my test files. Now it worked out of the box.</p><p>To test this installation and configuration, I built a simple component:</p><pre><code class="language-typescript">export const Thing = () =&gt; &lt;h1&gt;I'm TK&lt;/h1&gt;;
</code></pre><p>In my test, I wanted to render it and see if it was in the DOM.</p><pre><code class="language-typescript">import React from 'react';
import { render } from '@testing-library/react';
import { Thing } from '../index';
describe('Thing', () =&gt; {
it('renders the correct text in the document', () =&gt; {
const { getByText } = render(&lt;Thing /&gt;);
expect(getByText("I'm TK")).toBeInTheDocument();
});
});
</code></pre><p>Now we are ready for the next step.</p><h2 id="configuring-routes">Configuring routes</h2><p>Here I wanted to have only two routes for now. The home page and the search page - even though I'll do nothing about the home page.</p><p>For this project, I'm using the <code>react-router-dom</code> library to handle all things router-related. It's simple, easy, and fun to work with.</p><p>After installing it, I added the router components in the <code>app.typescript</code>.</p><pre><code class="language-typescript">import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
export const App = () =&gt; (
&lt;Router&gt;
&lt;Switch&gt;
&lt;Route path="/search"&gt;
&lt;h1&gt;It's the search!&lt;/h1&gt;
&lt;/Route&gt;
&lt;Route path="/"&gt;
&lt;h1&gt;It's Home&lt;/h1&gt;
&lt;/Route&gt;
&lt;/Switch&gt;
&lt;/Router&gt;
);
</code></pre><p>Now if we enter the <code>localhost:1234</code>, we see the title <code>It's Home</code>. Go to the <code>localhost:1234/search</code>, and we'll see the text <code>It's the search!</code>.</p><p>Before we continue to start implementing our search page, I wanted to build a simple menu to switch between home and search pages without manipulating the URL. For this project, I'm using <a href="https://material-ui.com/">Material UI</a> to build the UI foundation.</p><p>For now, we are just installing the <code>@material-ui/core</code>.</p><p>To build the menu, we have the button to open the menu options. In this case they're the "home" and "search" options. </p><p>But to build a better component abstraction, I prefer to hide the content (link and label) for the menu items and make the <code>Menu</code> component receive this data as a prop. This way, the menu doesn't know about the items, it will just iterate through the items list and render them.</p><p>It looks like this:</p><pre><code class="language-typescript">import React, { Fragment, useState, MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import MuiMenu from '@material-ui/core/Menu';
import MuiMenuItem from '@material-ui/core/MenuItem';
import { MenuItem } from '../../types/MenuItem';
type MenuPropsType = { menuItems: MenuItem[] };
export const Menu = ({ menuItems }: MenuPropsType) =&gt; {
const [anchorEl, setAnchorEl] = useState&lt;null | HTMLElement&gt;(null);
const handleClick = (event: MouseEvent&lt;HTMLButtonElement&gt;): void =&gt; {
setAnchorEl(event.currentTarget);
};
const handleClose = (): void =&gt; {
setAnchorEl(null);
};
return (
&lt;Fragment&gt;
&lt;Button aria-controls="menu" aria-haspopup="true" onClick={handleClick}&gt;
Open Menu
&lt;/Button&gt;
&lt;MuiMenu
id="simple-menu"
anchorEl={anchorEl}
keepMounted
open={Boolean(anchorEl)}
onClose={handleClose}
&gt;
{menuItems.map((item: MenuItem) =&gt; (
&lt;Link to={item.linkTo} onClick={handleClose} key={item.key}&gt;
&lt;MuiMenuItem&gt;{item.label}&lt;/MuiMenuItem&gt;
&lt;/Link&gt;
))}
&lt;/MuiMenu&gt;
&lt;/Fragment&gt;
);
};
export default Menu;
</code></pre><p>Don't panic! I know it is a huge block of code, but it is pretty simple. the <code>Fragment</code> wrap the <code>Button</code> and <code>MuiMenu</code> (<code>Mui</code> stands for Material UI. I needed to rename the component because the component I'm building is also called menu).</p><p>It receives the <code>menuItems</code> as a prop and maps through it to build the menu item wrapped by the <code>Link</code> component. Link is a component from react-router to link to a given URL.</p><p>The menu behavior is also simple: we bind the <code>handleClick</code> function to the button's <code>onClick</code>. That way, we can change <code>anchorEl</code> when the button is triggered (or clicked if you prefer). The <code>anchorEl</code> is just a component state that represents the Mui menu element to open the menu switch. So it will open the menu items to let the user chooses one of those.</p><p>Now, how do we use this component?</p><pre><code class="language-typescript">import { Menu } from './components/Menu';
import { MenuItem } from './types/MenuItem';
const menuItems: MenuItem[] = [
{
linkTo: '/',
label: 'Home',
key: 'link-to-home',
},
{
linkTo: '/search',
label: 'Search',
key: 'link-to-search',
},
];
&lt;Menu menuItems={menuItems} /&gt;
</code></pre><p>The <code>menuItems</code> is a list of objects. The object has the correct contract expected by the <code>Menu</code> component. The type <code>MenuItem</code> ensures that the contract is correct. It is just a Typescript <code>type</code>:</p><pre><code class="language-typescript">export type MenuItem = {
linkTo: string;
label: string;
key: string;
};
</code></pre><h2 id="search">Search</h2><p>Now we are ready to build the search page with all the products and a great experience. But before building the list of products, I wanted to create a fetch function to handle the request for products. As I don't have an API of products yet, I can just mock the fetch request.</p><p>At first, I just built the fetching with <code>useEffect</code> in the <code>Search</code> component. The idea would look like this:</p><pre><code class="language-typescript">import React, { useState, useEffect } from 'react';
import { getProducts } from 'api';
export const Search = () =&gt; {
const [products, setProducts] = useState([]);
const [isLoading, setIsLoading] = useState(false);
const [hasError, setHasError] = useState(false);
useEffect(() =&gt; {
const fetchProducts = async () =&gt; {
try {
setIsLoading(true);
const fetchedProducts = await getProducts();
setIsLoading(false);
setProducts(fetchedProducts);
} catch (error) {
setIsLoading(false);
setHasError(true);
}
};
fetchProducts();
}, []);
};
</code></pre><p>I have:</p><ul><li><code>products</code> initialized as an empty array</li><li><code>isLoading</code> initialized as false</li><li><code>hasError</code> initialized as false</li><li>The <code>fetchProducts</code> is an async function that calls <code>getProducts</code> from the <code>api</code> module. As we don't have a proper API for products yet, this <code>getProducts</code> would return a mock data.</li><li>When the <code>fetchProducts</code> is executed, we set the <code>isLoading</code> to true, fetch the products, and then set the <code>isLoading</code> to false, because the fetching finished, and the set the fetched products into <code>products</code> to be used in the component.</li><li>If it gets any error in the fetching, we catch them, set the <code>isLoading</code> to false, and the <code>hasError</code> to true. In this context, the component will know that we had an error while fetching and can handle this case.</li><li>Everything is encapsulated into a <code>useEffect</code> because we are doing a side effect here.</li></ul><p>To handle all the state logic (when to update each part for the specific context), we can extract it to a simple reducer.</p><pre><code class="language-typescript">import { State, FetchActionType, FetchAction } from './types';
export const fetchReducer = (state: State, action: FetchAction): State =&gt; {
switch (action.type) {
case FetchActionType.FETCH_INIT:
return {
...state,
isLoading: true,
hasError: false,
};
case FetchActionType.FETCH_SUCCESS:
return {
...state,
hasError: false,
isLoading: false,
data: action.payload,
};
case FetchActionType.FETCH_ERROR:
return {
...state,
hasError: true,
isLoading: false,
};
default:
return state;
}
};
</code></pre><p>The idea here is to separate each action type and handle each state update. So the <code>fetchReducer</code> will receive the state and the action and it will return a new state. This part is interesting because it gets the current state and then returns a new state, but we keep the state contract by using the <code>State</code> type.</p><p>And for each action type, we will update the state the right way.</p><ul><li><code>FETCH_INIT</code>: <code>isLoading</code> is true and <code>hasError</code> is false.</li><li><code>FETCH_SUCCESS</code>: <code>hasError</code> is false, <code>isLoading</code> is false, and the data (products) is updated.</li><li><code>FETCH_ERROR</code>: <code>hasError</code> is true and <code>isLoading</code> is false.</li></ul><p>In case it doesn't match any action type, just return the current state.</p><p>The <code>FetchActionType</code> is a simple Typescript enum:</p><pre><code class="language-typescript">export enum FetchActionType {
FETCH_INIT = 'FETCH_INIT',
FETCH_SUCCESS = 'FETCH_SUCCESS',
FETCH_ERROR = 'FETCH_ERROR',
}
</code></pre><p>And the <code>State</code> is just a simple type:</p><pre><code class="language-typescript">export type ProductType = {
name: string;
price: number;
imageUrl: string;
description: string;
isShippingFree: boolean;
discount: number;
};
export type Data = ProductType[];
export type State = {
isLoading: boolean;
hasError: boolean;
data: Data;
};
</code></pre><p>With this new reducer, now we can <code>useReducer</code> in our fetch. We pass the new reducer and the initial state to it:</p><pre><code class="language-typescript">const initialState: State = {
isLoading: false,
hasError: false,
data: fakeData,
};
const [state, dispatch] = useReducer(fetchReducer, initialState);
useEffect(() =&gt; {
const fetchAPI = async () =&gt; {
dispatch({ type: FetchActionType.FETCH_INIT });
try {
const payload = await fetchProducts();
dispatch({
type: FetchActionType.FETCH_SUCCESS,
payload,
});
} catch (error) {
dispatch({ type: FetchActionType.FETCH_ERROR });
}
};
fetchAPI();
}, []);
</code></pre><p>The <code>initialState</code> has the same contract type. And we pass it to the <code>useReducer</code> together with the <code>fetchReducer</code> we just built. The <code>useReducer</code> provides the state and a function called <code>dispatch</code> to call actions to update our state.</p><ul><li>State fetching: dispatch <code>FETCH_INIT</code></li><li>Finished fetch: dispatch <code>FETCH_SUCCESS</code> with the products payload</li><li>Get an error while fetching: dispatch <code>FETCH_ERROR</code></li></ul><p>This abstraction got very big and can be very verbose in our component. We could extract it as a separate hook called <code>useProductFetchAPI</code>.</p><pre><code class="language-typescript">export const useProductFetchAPI = (): State =&gt; {
const initialState: State = {
isLoading: false,
hasError: false,
data: fakeData,
};
const [state, dispatch] = useReducer(fetchReducer, initialState);
useEffect(() =&gt; {
const fetchAPI = async () =&gt; {
dispatch({ type: FetchActionType.FETCH_INIT });
try {
const payload = await fetchProducts();
dispatch({
type: FetchActionType.FETCH_SUCCESS,
payload,
});
} catch (error) {
dispatch({ type: FetchActionType.FETCH_ERROR });
}
};
fetchAPI();
}, []);
return state;
};
</code></pre><p>It is just a function that wraps our fetch operation. Now, in the <code>Search</code> component, we can import and call it.</p><pre><code>export const Search = () =&gt; {
const { isLoading, hasError, data }: State = useProductFetchAPI();
};
</code></pre><p>We have all the API: <code>isLoading</code>, <code>hasError</code>, and <code>data</code> to use in our component. With this API, we can render a loading spinner or a skeleton based on the <code>isLoading</code> data. We can render an error message based on the <code>hasError</code> value. Or just render the list of products using the <code>data</code>.</p><p>Before starting implementing our products list, I want to stop and add tests for our custom hook. We have two parts to test here: the reducer and the custom hook.</p><p>The reducer is easier as it is just a pure function. It receives value, process, and returns a new value. No side-effect. Everything deterministic.</p><p>To cover all the possibilities of this reducer, I created three contexts: <code>FETCH_INIT</code>, <code>FETCH_SUCCESS</code>, and <code>FETCH_ERROR</code> actions.</p><p>Before implementing anything, I set up the initial data to work with.</p><pre><code class="language-typescript">const initialData: Data = [];
const initialState: State = {
isLoading: false,
hasError: false,
data: initialData,
};
</code></pre><p>Now I can pass this initial state for the reducer together with the specific action I want to cover. For this first test, I wanted to cover the <code>FETCH_INIT</code> action:</p><pre><code class="language-typescript">describe('when dispatch FETCH_INIT action', () =&gt; {
it('returns the isLoading as true without any error', () =&gt; {
const action: FetchAction = {
type: FetchActionType.FETCH_INIT,
};
expect(fetchReducer(initialState, action)).toEqual({
isLoading: true,
hasError: false,
data: initialData,
});
});
});
</code></pre><p>It's pretty simple. It receives the initial state and the action, and we expect the proper return value: the new state with the <code>isLoading</code> as <code>true</code>.</p><p>The <code>FETCH_ERROR</code> is pretty similar:</p><pre><code class="language-typescript">describe('when dispatch FETCH_ERROR action', () =&gt; {
it('returns the isLoading as true without any error', () =&gt; {
const action: FetchAction = {
type: FetchActionType.FETCH_ERROR,
};
expect(fetchReducer(initialState, action)).toEqual({
isLoading: false,
hasError: true,
data: [],
});
});
});
</code></pre><p>But we pass a different action and expect the <code>hasError</code> to be <code>true</code>.</p><p>The <code>FETCH_SUCCESS</code> is a bit complex as we just need to build a new state and add it to the payload attribute in the action.</p><pre><code class="language-typescript">describe('when dispatch FETCH_SUCCESS action', () =&gt; {
it('returns the the API data', () =&gt; {
const product: ProductType = {
name: 'iPhone',
price: 3500,
imageUrl: 'image-url.png',
description: 'Apple mobile phone',
isShippingFree: true,
discount: 0,
};
const action: FetchAction = {
type: FetchActionType.FETCH_SUCCESS,
payload: [product],
};
expect(fetchReducer(initialState, action)).toEqual({
isLoading: false,
hasError: false,
data: [product],
});
});
});
</code></pre><p>But nothing too complex here. The new data is there. A list of products. In this case, just one, the iPhone product.</p><p>The second test will cover the custom hook we built. In these tests, I wrote three contexts: a time-out request, a failed network request, and a success request.</p><p>Here, as I'm using <code>axios</code> to fetch data (when I have an API to fetch the data, I will use it properly), I'm using <code>axios-mock-adapter</code> to mock each context for our tests.</p><p>The set up first: Initializing our data and set up an axios mock.</p><pre><code class="language-typescript">const mock: MockAdapter = new MockAdapter(axios);
const url: string = '/search';
const initialData: Data = [];
</code></pre><p>We start implementing a test for the timeout request:</p><pre><code class="language-typescript">it('handles error on timed-out api request', async () =&gt; {
mock.onGet(url).timeout();
const { result, waitForNextUpdate } = renderHook(() =&gt;
useProductFetchAPI(url, initialData)
);
await waitForNextUpdate();
const { isLoading, hasError, data }: State = result.current;
expect(isLoading).toEqual(false);
expect(hasError).toEqual(true);
expect(data).toEqual(initialData);
});
</code></pre><p>We set up the mock to return a timeout. The test calls the <code>useProductFetchAPI</code>, wait for an update, and then we can get the state. The <code>isLoading</code> is false, the <code>data</code> is still the same (an empty list), and the <code>hasError</code> is now true as expected.</p><p>The network request is pretty much the same behavior. The only difference is that the mock will have a network error instead of a timeout.</p><pre><code class="language-typescript">it('handles error on failed network api request', async () =&gt; {
mock.onGet(url).networkError();
const { result, waitForNextUpdate } = renderHook(() =&gt;
useFetchAPI(url, initialData)
);
await waitForNextUpdate();
const { isLoading, hasError, data }: State = result.current;
expect(isLoading).toEqual(false);
expect(hasError).toEqual(true);
expect(data).toEqual(initialData);
});
</code></pre><p>And for the success case, we need to create a product object to use it as a request-response data. We also expect the <code>data</code> to be a list of this product object. The <code>hasError</code> and the <code>isLoading</code> are false in this case.</p><pre><code class="language-typescript">it('gets and updates data from the api request', async () =&gt; {
const product: ProductType = {
name: 'iPhone',
price: 3500,
imageUrl: 'image-url.png',
description: 'Apple mobile phone',
isShippingFree: true,
discount: 0,
};
const mockedResponseData: Data = [product];
mock.onGet(url).reply(200, mockedResponseData);
const { result, waitForNextUpdate } = renderHook(() =&gt;
useFetchAPI(url, initialData)
);
await waitForNextUpdate();
const { isLoading, hasError, data }: State = result.current;
expect(isLoading).toEqual(false);
expect(hasError).toEqual(false);
expect(data).toEqual([product]);
});
&lt;Box&gt;
&lt;Image /&gt;
&lt;TitleDescription/&gt;
&lt;Price /&gt;
&lt;Tag /&gt;
&lt;/Box&gt;
);
</code></pre><p>To build the product, we will need to build each component that is inside it.</p><p>But before start building the product component, I want to show the <code>JSON</code> data that the fake API will return for us.</p><pre><code class="language-typescript">{
imageUrl: 'a-url-for-tokyo-tower.png',
name: 'Tokyo Tower',
description: 'Some description here',
price: 45,
discount: 20,
isShippingFree: true,
}
</code></pre><p>This data is passed from the <code>Search</code> component to the <code>ProductList</code> component:</p><pre><code class="language-typescript">export const Search = () =&gt; {
const { isLoading, hasError, data }: State = useProductFetchAPI();
if (hasError) {
return &lt;h2&gt;Error&lt;/h2&gt;;
}
return &lt;ProductList products={data} isLoading={isLoading} /&gt;;
};
</code></pre><p>As I'm using Typescript, I can enforce the static types for the component props. In this case, I have the prop <code>products</code> and the <code>isLoading</code>.</p><p>I built a <code>ProductListPropsType</code> type to handle the product list props.</p><pre><code class="language-typescript">type ProductListPropsType = {
products: ProductType[];
isLoading: boolean;
};
</code></pre><p>And the <code>ProductType</code> is a simple type representing the product:</p><pre><code class="language-typescript">export type ProductType = {
name: string;
price: number;
imageUrl: string;
description: string;
isShippingFree: boolean;
discount: number;
};
</code></pre><p>To build the ProductList, I'll use the <code>Grid</code> component from Material UI. First, we have a grid container and then, for each product, we will render a grid item.</p><pre><code class="language-typescript">export const ProductList = ({ products, isLoading }: ProductListPropsType) =&gt; (
&lt;Grid container spacing={3}&gt;
{products.map(product =&gt; (
&lt;Grid
item
xs={6}
md={3}
key={`grid-${product.name}-${product.description}-${product.price}`}
&gt;
&lt;Product
key={`product-${product.name}-${product.description}-${product.price}`}
imageUrl={product.imageUrl}
name={product.name}
description={product.description}
price={product.price}
discount={product.discount}
isShippingFree={product.isShippingFree}
isLoading={isLoading}
/&gt;
&lt;/Grid&gt;
))}
&lt;/Grid&gt;
);
</code></pre><p>The <code>Grid</code> item will display 2 items per row for mobile as we use the value <code>6</code> for each column. And for the desktop version, it will render 4 items per row.</p><p>We iterate through the <code>products</code> list and render the <code>Product</code> component passing all the data it will need.</p><p>Now we can focus on building the <code>Product</code> component.</p><p>Let's start with the easiest one: the <code>Tag</code>. We will pass three data to this component. <code>label</code>, <code>isVisible</code>, and <code>isLoading</code>. When it is not visible, we just return <code>null</code> to don't render it. If it is loading, we will render a <code>Skeleton</code> component from Material UI. But after loading it, we render the tag info with the <code>Free Shipping</code> label.</p><pre><code class="language-typescript">export const Tag = ({ label, isVisible, isLoading }: TagProps) =&gt; {
if (!isVisible) return null;
if (isLoading) {
return (
&lt;Skeleton width="110px" height="40px" data-testid="tag-skeleton-loader" /&gt;
);
}
return (
&lt;Box mt={1} data-testid="tag-label-wrapper"&gt;
&lt;span style={tabStyle}&gt;{label}&lt;/span&gt;
&lt;/Box&gt;
);
};
</code></pre><p>The <code>TagProps</code> is a simple type:</p><pre><code class="language-typescript">type TagProps = {
label: string;
isVisible: boolean;
isLoading: boolean;
};
</code></pre><p>I'm also using an object to style the <code>span</code>:</p><pre><code class="language-typescript">const tabStyle = {
padding: '4px 8px',
backgroundColor: '#f2f3fe',
color: '#87a7ff',
borderRadius: '4px',
};
</code></pre><p>I also wanted to build tests for this component trying to think of its behavior:</p><ul><li>when it's not visible: the tag will not be in the document.</li></ul><pre><code class="language-typescript">describe('when is not visible', () =&gt; {
it('does not render anything', () =&gt; {
const { queryByTestId } = render(
&lt;Tag label="a label" isVisible={false} isLoading={false} /&gt;
);
expect(queryByTestId('tag-label-wrapper')).not.toBeInTheDocument();
});
});
</code></pre><ul><li>when it's loading: the skeleton will be in the document.</li></ul><pre><code class="language-typescript">describe('when is loading', () =&gt; {
it('renders the tag label', () =&gt; {
const { queryByTestId } = render(
&lt;Tag label="a label" isVisible isLoading /&gt;
);
expect(queryByTestId('tag-skeleton-loader')).toBeInTheDocument();
});
});
</code></pre><ul><li>when it's ready to render: the tag will be in the document.</li></ul><pre><code class="language-typescript">describe('when is visible and not loading', () =&gt; {
it('renders the tag label', () =&gt; {
render(&lt;Tag label="a label" isVisible isLoading={false} /&gt;);
expect(screen.getByText('a label')).toBeInTheDocument();
});
});
</code></pre><ul><li>bonus point: accessibility. I also built an automated test to cover accessibility violations using <code>jest-axe</code>.</li></ul><pre><code class="language-typescript">it('has no accessibility violations', async () =&gt; {
const { container } = render(
&lt;Tag label="a label" isVisible isLoading={false} /&gt;
);
const results = await axe(container);
expect(results).toHaveNoViolations();
});
</code></pre><p>We are ready to implement another component: the <code>TitleDescription</code>. It will work almost similar to the <code>Tag</code> component. It receives some props: <code>name</code>, <code>description</code>, and <code>isLoading</code>.</p><p>As we have the <code>Product</code> type with the type definition for the <code>name</code> and the <code>description</code>, I wanted to reuse it. I tried different things - and you can <a href="https://leandrotk.github.io/tk/2020/05/typescript-learnings-interesting-types/index.html">take a look here for more details</a> - and I found the <code>Pick</code> type. With that, I could get the <code>name</code> and the <code>description</code> from the <code>ProductType</code>:</p><pre><code class="language-typescript">type TitleDescriptionType = Pick&lt;ProductType, 'name' | 'description'&gt;;
</code></pre><p>With this new type, I could create the <code>TitleDescriptionPropsType</code> for the component:</p><pre><code class="language-typescript">type TitleDescriptionPropsType = TitleDescriptionType &amp; {
isLoading: boolean;
};
</code></pre><p>Now working inside the component, If the <code>isLoading</code> is true, the component renders the proper skeleton component before it renders the actual title and description texts.</p><pre><code class="language-typescript">if (isLoading) {
return (
&lt;Fragment&gt;
&lt;Skeleton
width="60%"
height="24px"
data-testid="name-skeleton-loader"
/&gt;
&lt;Skeleton
style={descriptionSkeletonStyle}
height="20px"
data-testid="description-skeleton-loader"
/&gt;
&lt;/Fragment&gt;
);
}
</code></pre><p>If the component is not loading anymore, we render the title and description texts. Here we use the <code>Typography</code> component.</p><pre><code class="language-typescript">return (
&lt;Fragment&gt;
&lt;Typography data-testid="product-name"&gt;{name}&lt;/Typography&gt;
&lt;Typography
data-testid="product-description"
color="textSecondary"
variant="body2"
style={descriptionStyle}
&gt;
{description}
&lt;/Typography&gt;
&lt;/Fragment&gt;
);
</code></pre><p>For the tests, we want three things:</p><ul><li>when it is loading, the component renders the skeletons</li><li>when it is not loading anymore, the component renders the texts</li><li>make sure the component doesn't violate the accessibility</li></ul><p>We will use the same idea we use for the <code>Tag</code> tests: see if it in the document or not based on the state.</p><p>When it is loading, we want to see if the skeleton is in the document, but the title and description texts are not.</p><pre><code class="language-typescript">describe('when is loading', () =&gt; {
it('does not render anything', () =&gt; {
const { queryByTestId } = render(
&lt;TitleDescription
name={product.name}
description={product.description}
isLoading
/&gt;
);
expect(queryByTestId('name-skeleton-loader')).toBeInTheDocument();
expect(queryByTestId('description-skeleton-loader')).toBeInTheDocument();
expect(queryByTestId('product-name')).not.toBeInTheDocument();
expect(queryByTestId('product-description')).not.toBeInTheDocument();
});
});
</code></pre><p>When it is not loading anymore, it renders the texts in the DOM:</p><pre><code class="language-typescript">describe('when finished loading', () =&gt; {
it('renders the product name and description', () =&gt; {
render(
&lt;TitleDescription
name={product.name}
description={product.description}
isLoading={false}
/&gt;
);
expect(screen.getByText(product.name)).toBeInTheDocument();
expect(screen.getByText(product.description)).toBeInTheDocument();
});
});
</code></pre><p>And a simple test to cover accessibility issues:</p><pre><code class="language-typescript">it('has no accessibility violations', async () =&gt; {
const { container } = render(
&lt;TitleDescription
name={product.name}
description={product.description}
isLoading={false}
/&gt;
);
const results = await axe(container);
expect(results).toHaveNoViolations();
});
</code></pre><p>The next component is the <code>Price</code>. In this component we will provide a skeleton when it is still loading as we did in the other component, and add three different components here:</p><ul><li><code>PriceWithDiscount</code>: we apply the discount into the original price and render it</li><li><code>OriginalPrice</code>: it just renders the product price</li><li><code>Discount</code>: it renders the discount percentage when the product has a discount</li></ul><p>But before I start implementing these components, I wanted to structure the data to be used. The <code>price</code> and the <code>discount</code> values are numbers. So let's build a function called <code>getPriceInfo</code> that receives the <code>price</code> and the <code>discount</code> and it will return this data:</p><pre><code class="language-typescript">{
priceWithDiscount,
originalPrice,
discountOff,
hasDiscount,
};
</code></pre><p>With this type contract:</p><pre><code class="language-typescript">type PriceInfoType = {
priceWithDiscount: string;
originalPrice: string;
discountOff: string;
hasDiscount: boolean;
};
</code></pre><p>In this function, it will get the <code>discount</code> and transform it into a <code>boolean</code>, then apply the <code>discount</code> to build the <code>priceWithDiscount</code>, use the <code>hasDiscount</code> to build the discount percentage, and build the <code>originalPrice</code> with the dollar sign:</p><pre><code class="language-typescript">export const applyDiscount = (price: number, discount: number): number =&gt;
price - (price * discount) / 100;
export const getPriceInfo = (
price: number,
discount: number
): PriceInfoType =&gt; {
const hasDiscount: boolean = Boolean(discount);
const priceWithDiscount: string = hasDiscount
? `$${applyDiscount(price, discount)}`
: `$${price}`;
const originalPrice: string = `$${price}`;
const discountOff: string = hasDiscount ? `${discount}% OFF` : '';
return {
priceWithDiscount,
originalPrice,
discountOff,
hasDiscount,
};
};
</code></pre><p>Here I also built an <code>applytDiscount</code> function to extract the discount calculation.</p><p>I added some tests to cover these functions. As they are pure functions, we just need to pass some values and expect new data.</p><p>Test for the <code>applyDiscount</code>:</p><pre><code class="language-typescript">describe('applyDiscount', () =&gt; {
it('applies 20% discount in the price', () =&gt; {
expect(applyDiscount(100, 20)).toEqual(80);
});
it('applies 95% discount in the price', () =&gt; {
expect(applyDiscount(100, 95)).toEqual(5);
});
});
</code></pre><p>Test for the <code>getPriceInfo</code>:</p><pre><code class="language-typescript">describe('getPriceInfo', () =&gt; {
describe('with discount', () =&gt; {
it('returns the correct price info', () =&gt; {
expect(getPriceInfo(100, 20)).toMatchObject({
priceWithDiscount: '$80',
originalPrice: '$100',
discountOff: '20% OFF',
hasDiscount: true,
});
});
});
describe('without discount', () =&gt; {
it('returns the correct price info', () =&gt; {
expect(getPriceInfo(100, 0)).toMatchObject({
priceWithDiscount: '$100',
originalPrice: '$100',
discountOff: '',
hasDiscount: false,
});
});
});
});
</code></pre><p>Now we can use the <code>getPriceInfo</code> in the <code>Price</code> components to get this structure data and pass down for the other components like this:</p><pre><code class="language-typescript">export const Price = ({ price, discount, isLoading }: PricePropsType) =&gt; {
if (isLoading) {
return (
&lt;Skeleton width="80%" height="18px" data-testid="price-skeleton-loader" /&gt;
);
}
const {
priceWithDiscount,
originalPrice,
discountOff,
hasDiscount,
}: PriceInfoType = getPriceInfo(price, discount);
return (
&lt;Fragment&gt;
&lt;PriceWithDiscount price={priceWithDiscount} /&gt;
&lt;OriginalPrice hasDiscount={hasDiscount} price={originalPrice} /&gt;
&lt;Discount hasDiscount={hasDiscount} discountOff={discountOff} /&gt;
&lt;/Fragment&gt;
);
};
</code></pre><p>As we talked earlier, when it is loading, we just render the <code>Skeleton</code> component. When it finishes the loading, it will build the structured data and render the price info. Let's build each component now!</p><p>Let's start with the <code>OriginalPrice</code>. We just need to pass the <code>price</code> as a prop and it renders with the <code>Typography</code> component.</p><pre><code class="language-typescript">type OriginalPricePropsType = {
price: string;
};
export const OriginalPrice = ({ price }: OriginalPricePropsType) =&gt; (
&lt;Typography display="inline" style={originalPriceStyle} color="textSecondary"&gt;
{price}
&lt;/Typography&gt;
);
</code></pre><p>Very simple! Let's add a test now.</p><p>Just pass a price and see it if was rendered in the DOM:</p><pre><code class="language-typescript">it('shows the price', () =&gt; {
const price = '$200';
render(&lt;OriginalPrice price={price} /&gt;);
expect(screen.getByText(price)).toBeInTheDocument();
});
</code></pre><p>I also added a test to cover accessibility issues:</p><pre><code class="language-typescript">it('has no accessibility violations', async () =&gt; {
const { container } = render(&lt;OriginalPrice price="$200" /&gt;);
const results = await axe(container);
expect(results).toHaveNoViolations();
});
</code></pre><p>The <code>PriceWithDiscount</code> component has a very similar implementation, but we pass the <code>hasDiscount</code> boolean to render this price or not. If it has a discount, render the price with the discount. Otherwise, it won't render anything.</p><pre><code class="language-typescript">type PricePropsType = {
hasDiscount: boolean;
price: string;
};
</code></pre><p>The props type has the <code>hasDiscount</code> and the <code>price</code>. And the component just renders things based on the <code>hasDiscount</code> value.</p><pre><code class="language-typescript">export const PriceWithDiscount = ({ price, hasDiscount }: PricePropsType) =&gt; {
if (!hasDiscount) {
return null;
}
return (
&lt;Typography display="inline" style={priceWithDiscountStyle}&gt;
{price}
&lt;/Typography&gt;
);
};
</code></pre><p>The tests will cover this logic when it has or doesn't have the discount. If it hasn't the discount, the prices will not be rendered.</p><pre><code class="language-typescript">describe('when the product has no discount', () =&gt; {
it('shows nothing', () =&gt; {
const { queryByTestId } = render(
&lt;PriceWithDiscount hasDiscount={false} price="" /&gt;
);
expect(queryByTestId('discount-off-label')).not.toBeInTheDocument();
});
});
</code></pre><p>If it has the discount, it will be the rendered in the DOM:</p><pre><code class="language-typescript">describe('when the product has a discount', () =&gt; {
it('shows the price', () =&gt; {
const price = '$200';
render(&lt;PriceWithDiscount hasDiscount price={price} /&gt;);
expect(screen.getByText(price)).toBeInTheDocument();
});
});
</code></pre><p>And as always, a test to cover accessibility violations:</p><pre><code class="language-typescript">it('has no accessibility violations', async () =&gt; {
const { container } = render(
&lt;PriceWithDiscount hasDiscount price="$200" /&gt;
);
const results = await axe(container);
expect(results).toHaveNoViolations();
});
</code></pre><p>The <code>Discount</code> component is pretty much the same as the <code>PriceWithDiscount</code>. Render the discount tag if the product has a discount:</p><pre><code class="language-typescript">type DiscountPropsType = {
hasDiscount: boolean;
discountOff: string;
};
export const Discount = ({ hasDiscount, discountOff }: DiscountPropsType) =&gt; {
if (!hasDiscount) {
return null;
}
return (
&lt;Typography
display="inline"
color="secondary"
data-testid="discount-off-label"
&gt;
{discountOff}
&lt;/Typography&gt;
);
};
</code></pre><p>And all the tests we did for the other component, we do the same thing for the <code>Discount</code> component:</p><pre><code class="language-typescript">describe('Discount', () =&gt; {
describe('when the product has a discount', () =&gt; {
it('shows the discount label', () =&gt; {
const discountOff = '20% OFF';
render(&lt;Discount hasDiscount discountOff={discountOff} /&gt;);
expect(screen.getByText(discountOff)).toBeInTheDocument();
});
});
describe('when the product has no discount', () =&gt; {
it('shows nothing', () =&gt; {
const { queryByTestId } = render(
&lt;Discount hasDiscount={false} discountOff="" /&gt;
);
expect(queryByTestId('discount-off-label')).not.toBeInTheDocument();
});
});
it('has no accessibility violations', async () =&gt; {
const { container } = render(
&lt;Discount hasDiscount discountOff="20% OFF" /&gt;
);
const results = await axe(container);
expect(results).toHaveNoViolations();
});
});
</code></pre><p>Now we will build an <code>Image</code> component. This component has the basic skeleton as any other component we've built. If it is loading, wait to render the image source and render the skeleton instead. When it finishes the loading, we will render the image, but only if the component is in the intersection of the browser window.</p><p>What does it mean? When you are on a website on your mobile device, you'll probably see the first 4 products. They will render the skeleton and then the image. But below these 4 products, as you're not seeing any of them, it doesn't matter if we are rendering them or not. And we can choose to not render them. Not for now. But on-demand. When you are scrolling, if the product's image is at the intersection of the browser window, we start rendering the image source.</p><p>That way we gain performance by speeding up the page load time and reduce the cost by requesting images on demand.</p><p>We will use the Intersection Observer API to download images on demand. But before writing any code about this technology, let's start building our component with the image and the skeleton view.</p><p>Image props will have this object:</p><pre><code class="language-typescript">{
imageUrl,
imageAlt,
width,
isLoading,
imageWrapperStyle,
imageStyle,
}
</code></pre><p>The <code>imageUrl</code>, <code>imageAlt</code>, and the <code>isLoading</code> props are passed by the product component. The <code>width</code> is an attribute for the skeleton and the image tag. The <code>imageWrapperStyle</code> and the <code>imageStyle</code> are props that have a default value in the image component. We'll talk about this later.</p><p>Let's add a type for this props:</p><pre><code class="language-typescript">type ImageUrlType = Pick&lt;ProductType, 'imageUrl'&gt;;
type ImageAttrType = { imageAlt: string; width: string };
type ImageStateType = { isLoading: boolean };
type ImageStyleType = {
imageWrapperStyle: CSSProperties;
imageStyle: CSSProperties;
};
export type ImagePropsType = ImageUrlType &amp;
ImageAttrType &amp;
ImageStateType &amp;
ImageStyleType;
</code></pre><p>The idea here is to give meaning for the types and then compose everything. We can get the <code>imageUrl</code> from the <code>ProductType</code>. The attribute type will have the <code>imageAlt</code> and the <code>width</code>. The image state has the <code>isLoading</code> state. And the image style has some <code>CSSProperties</code>.</p><p>At first, the component would like this:</p><pre><code class="language-typescript">export const Image = ({
imageUrl,
imageAlt,
width,
isLoading,
imageWrapperStyle,
imageStyle,
}: ImagePropsType) =&gt; {
if (isLoading) {
&lt;Skeleton
variant="rect"
width={width}
data-testid="image-skeleton-loader"
/&gt;
}
return (
&lt;img
src={imageUrl}
alt={imageAlt}
width={width}
style={imageStyle}
/&gt;
);
};
</code></pre><p>Let's build the code to make the intersection observer works.</p><p>The idea of the intersection observer is to receive a target to be observed and a callback function that is executed whenever the observed target enters or exits the viewport. So the implementation would be very simple:</p><pre><code class="language-typescript">const observer: IntersectionObserver = new IntersectionObserver(
onIntersect,
options
);
observer.observe(target);
</code></pre><p>Instantiate the <code>IntersectionObserver</code> class by passing an options object and the callback function. The <code>observer</code> will observe the <code>target</code> element.</p><p>As it is an effect in the DOM, we can wrap this into a <code>useEffect</code>.</p><pre><code class="language-typescript">useEffect(() =&gt; {
const observer: IntersectionObserver = new IntersectionObserver(
onIntersect,
options
);
observer.observe(target);
return () =&gt; {
observer.unobserve(target);
};
}, [target]);
</code></pre><p>Using <code>useEffect</code>, we have two different things here: the dependency array and the returning function. We pass the <code>target</code> as the dependency function to make sure that we will re-run the effect if the <code>target</code> changes. And the returning function is a cleanup function. React performs the cleanup when the component unmounts, so it will clean up the effect before running another effect for every render.</p><p>In this cleanup function, we just stop observing the <code>target</code> element.</p><p>When the component starts rendering, the <code>target</code> reference is not set yet, so we need to have a guard to not observe an <code>undefined</code> target.</p><pre><code class="language-typescript">useEffect(() =&gt; {
if (!target) {
return;
}
const observer: IntersectionObserver = new IntersectionObserver(
onIntersect,
options
);
observer.observe(target);
return () =&gt; {
observer.unobserve(target);
};
}, [target]);
</code></pre><p>Instead of using this effect in our component, we could build a custom hook to receive the target, some options to customize the configuration, and it would provide a boolean telling if the target is at the intersection of the viewport or not.</p><pre><code class="language-typescript">export type TargetType = Element | HTMLDivElement | undefined;
export type IntersectionStatus = {
isIntersecting: boolean;
};
const defaultOptions: IntersectionObserverInit = {
rootMargin: '0px',
threshold: 0.1,
};
export const useIntersectionObserver = (
target: TargetType,
options: IntersectionObserverInit = defaultOptions
): IntersectionStatus =&gt; {
const [isIntersecting, setIsIntersecting] = useState(false);
useEffect(() =&gt; {
if (!target) {
return;
}
const onIntersect = ([entry]: IntersectionObserverEntry[]) =&gt; {
setIsIntersecting(entry.isIntersecting);
if (entry.isIntersecting) {
observer.unobserve(target);
}
};
const observer: IntersectionObserver = new IntersectionObserver(
onIntersect,
options
);
observer.observe(target);
return () =&gt; {
observer.unobserve(target);
};
}, [target]);
return { isIntersecting };
};
</code></pre><p>In our callback function, we just set if the entry target is intersecting the viewport or not. The <code>setIsIntersecting</code> is a setter from the <code>useState</code> hook we define at the top of our custom hook.</p><p>It is initialized as <code>false</code> but will update to <code>true</code> if it is intersecting the viewport.</p><p>With this new information in the component, we can render the image or not. If it is intersecting, we can render the image. If not, just render a skeleton until the user gets to the viewport intersection of the product image.</p><p>How does it look in practice?</p><p>First we define the wrapper reference using <code>useState</code>:</p><pre><code class="language-typescript">const [wrapperRef, setWrapperRef] = useState&lt;HTMLDivElement&gt;();
</code></pre><p>It start as <code>undefined</code>. Then build a wrapper callback to set the element node:</p><pre><code class="language-typescript">const wrapperCallback = useCallback(node =&gt; {
setWrapperRef(node);
}, []);
</code></pre><p>With that, we can use it to get the wrapper reference by using a <code>ref</code> prop in our <code>div</code>.</p><pre><code class="language-typescript">&lt;div ref={wrapperCallback}&gt;
</code></pre><p>After setting the <code>wrapperRef</code>, we can pass it as the <code>target</code> for our <code>useIntersectionObserver</code> and expect a <code>isIntersecting</code> status as a result:</p><pre><code class="language-typescript">const { isIntersecting }: IntersectionStatus = useIntersectionObserver(wrapperRef);
</code></pre><p>With this new value, we can build a boolean value to know if we render the skeleton or the product image.</p><pre><code class="language-typescript">const showImageSkeleton: boolean = isLoading || !isIntersecting;
</code></pre><p>So now we can render the appropriate node to the DOM.</p><pre><code class="language-typescript">&lt;div ref={wrapperCallback} style={imageWrapperStyle}&gt;
{showImageSkeleton ? (
&lt;Skeleton
variant="rect"
width={width}
height={imageWrapperStyle.height}
style={skeletonStyle}
data-testid="image-skeleton-loader"
/&gt;
) : (
&lt;img
src={imageUrl}
alt={imageAlt}
width={width}
/&gt;
)}
&lt;/div&gt;
</code></pre><p>The full component looks like this:</p><pre><code class="language-typescript">export const Image = ({
imageUrl,
imageAlt,
width,
isLoading,
imageWrapperStyle,
}: ImagePropsType) =&gt; {
const [wrapperRef, setWrapperRef] = useState&lt;HTMLDivElement&gt;();
const wrapperCallback = useCallback(node =&gt; {
setWrapperRef(node);
}, []);
const { isIntersecting }: IntersectionStatus = useIntersectionObserver(wrapperRef);
const showImageSkeleton: boolean = isLoading || !isIntersecting;
return (
&lt;div ref={wrapperCallback} style={imageWrapperStyle}&gt;
{showImageSkeleton ? (
&lt;Skeleton
variant="rect"
width={width}
height={imageWrapperStyle.height}
style={skeletonStyle}
data-testid="image-skeleton-loader"
/&gt;
) : (
&lt;img
src={imageUrl}
alt={imageAlt}
width={width}
/&gt;
)}
&lt;/div&gt;
);
};
</code></pre><p>Great, now the loading on-demand works well. But I want to build a slightly better experience. The idea here is to have two different sizes of the same image. The low-quality image is requested and we make it visible, but blur while the high-quality image is requested in the background. When the high-quality image finally finishes loading, we transition from the low-quality to the high-quality image with an ease-in/ease-out transition to make it a smooth experience.</p><p>Let's build this logic. We could build this into the component, but we could also extract this logic into a custom hook.</p><pre><code class="language-typescript">export const useImageOnLoad = (): ImageOnLoadType =&gt; {
const [isLoaded, setIsLoaded] = useState(false);
const handleImageOnLoad = () =&gt; setIsLoaded(true);
const imageVisibility: CSSProperties = {
visibility: isLoaded ? 'hidden' : 'visible',
filter: 'blur(10px)',
transition: 'visibility 0ms ease-out 500ms',
};
const imageOpactity: CSSProperties = {
opacity: isLoaded ? 1 : 0,
transition: 'opacity 500ms ease-in 0ms',
};
return { handleImageOnLoad, imageVisibility, imageOpactity };
};
</code></pre><p>This hook just provides some data and behavior for the component. The <code>handleImageOnLoad</code> we talked earlier, the <code>imageVisibility</code> to make the low-quality image visible or not, and the <code>imageOpactity</code> to make the transition from transparent to opaque, that way we make it visible after loading it.</p><p>The <code>isLoaded</code> is a simple boolean to handle the visibility of the images. Another small detail is the <code>filter: 'blur(10px)'</code> to make the low-quality-image blur and then slowly focusing while transitioning from the low-quality image to the high-quality image.</p><p>With this new hook, we just import it, and call inside the component:</p><pre><code class="language-typescript">const {
handleImageOnLoad,
imageVisibility,
imageOpactity,
}: ImageOnLoadType = useImageOnLoad();
</code></pre><p>And start using the data and behavior we built.</p><pre><code class="language-typescript">&lt;Fragment&gt;
&lt;img
src={thumbUrl}
alt={imageAlt}
width={width}
style={{ ...imageStyle, ...imageVisibility }}
/&gt;
&lt;img
onLoad={handleImageOnLoad}
src={imageUrl}
alt={imageAlt}
width={width}
style={{ ...imageStyle, ...imageOpactity }}
/&gt;
&lt;/Fragment&gt;
<source src="https://raw.githubusercontent.com/leandrotk/tk/master/2020/06/ux-studies-with-react-typescript-and-testing-library/assets/loading-japan.mp4" type="video/mp4">
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
