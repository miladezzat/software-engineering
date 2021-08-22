---
card: "/images/default.jpg"
tags: [Redux]
description: Redux is a predictable state container for JavaScript apps. I
author: "Milad E. Fahmy"
title: "How to Use Redux in Your React TypeScript App"
created: "2021-08-15T19:28:34+02:00"
modified: "2021-08-15T19:28:34+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-redux tag-react tag-typescript tag-javascript ">
<header class="post-full-header">
<h1 class="post-full-title">How to Use Redux in Your React TypeScript App</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/09/cover.png 300w,
/news/content/images/size/w600/2020/09/cover.png 600w,
/news/content/images/size/w1000/2020/09/cover.png 1000w,
/news/content/images/size/w2000/2020/09/cover.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/09/cover.png" alt="How to Use Redux in Your React TypeScript App">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Redux is a predictable state container for JavaScript apps. It's a popular library for managing state in React apps. </p>
<p>Redux can offer a better developer experience when you use it along with TypeScript. TypeScript is a superset of JavaScript that type-checks code to make it robust and understandable.</p>
<p>In this guide, I will show you how to use Redux in your React TypeScript project by building an app that allows you to add, delete, and show articles.</p>
<p><em>Let's dive in.</em></p>
<ul>
<li><a href="#prerequisites">Prerequisites</a></li>
<li><a href="#setting-up">Setting up</a></li>
<li><a href="#create-the-types">Create the types</a></li>
<li><a href="#create-the-action-types">Create the action types</a></li>
<li><a href="#create-the-action-creators">Create the action creators</a></li>
<li><a href="#create-a-reducer">Create a reducer</a></li>
<li><a href="#create-a-store">Create a store</a></li>
<li><a href="#create-the-components">Create the components</a></li>
</ul>
<h2 id="prerequisites">Prerequisites</h2>
<p>This tutorial assumes that you have at least a basic understanding of React, Redux, and TypeScript. </p>
<p>So, if you're not familiar with these technologies, first try to read this <a href="https://www.ibrahima-ndaw.com/blog/a-practical-guide-to-typescript/">practical guide to TypeScript</a> or <a href="https://www.ibrahima-ndaw.com/blog/7-steps-to-understand-react-redux/">this React Redux tutorial</a>. Otherwise, let's get started.</p>
<h2 id="setting-up-the-project">Setting up the project</h2>
<p>To use Redux and TypeScript, we need to create a new React app.</p>
<p>To do so, let's open the CLI (command-line interface) and execute this command:</p><pre><code class="language-shell">  npx create-react-app my-app --template typescript
</code></pre>
<p>Next, let's structure the project as follows:</p><pre><code>├── src
|  ├── components
|  |  ├── AddArticle.tsx
|  |  └── Article.tsx
|  ├── store
|  |  ├── actionCreators.ts
|  |  ├── actionTypes.ts
|  |  └── reducer.ts
|  ├── type.d.ts
|  ├── App.test.tsx
|  ├── App.tsx
|  ├── index.css
|  ├── index.tsx
|  ├── react-app-env.d.ts
|  └── setupTests.ts
├── tsconfig.json
├── package.json
└── yarn.lock
</code></pre>
<p>The file structure of the project is quite simple. However, there are two things to note:</p>
<ul>
<li>The <code>store</code> folder that contains files related to React Redux.</li>
<li>The <code>type.d.ts</code> file that holds the TypeScript types, which can be used now in other files without importing.</li>
</ul>
<p>That said, we can now install Redux and create our very first store.</p>
<p>So, let's open the project and run the following command:</p><pre><code class="language-shell">  yarn add redux react-redux redux-thunk
</code></pre>
<p>Or when using <code>npm</code></p><pre><code class="language-shell">  npm install redux react-redux redux-thunk
</code></pre>
<p>We also have to install their types as development dependencies to help TypeScript understand the libraries.</p>
<p>So, let's execute this command again on the CLI.</p><pre><code class="language-shell">  yarn add -D @types/redux @types/react-redux @types/redux-thunk
</code></pre>
<p>Or for <code>npm</code>:</p><pre><code class="language-shell">  npm install -D @types/redux @types/react-redux @types/redux-thunk
</code></pre>
<p>Great! With this step forward, we can now create the TypeScript types for the project in the next section.</p>
<h2 id="create-the-types">Create the types</h2>
<p>TypeScript types allows you to set types for your variables, function parameters, and so on.</p>
<ul>
<li>type.d.ts</li>
</ul><pre><code class="language-ts">interface IArticle {
id: number
title: string
body: string
}
type ArticleState = {
articles: IArticle[]
}
type ArticleAction = {
type: string
article: IArticle
}
type DispatchType = (args: ArticleAction) =&gt; ArticleAction
</code></pre>
<p>Here, we start by declaring the interface <code>IArticle</code> which reflects the shape of a given article. </p>
<p>Then, we have <code>ArticleState</code>, <code>ArticleAction</code>, and <code>DispatchType</code> that will serve as types for, respectively, the state object, the action creators, and the dispatch function provided by Redux.</p>
<p>That said, we now have the necessary types to start using React Redux. Let's create the action types.</p>
<h2 id="create-the-action-types">Create the action types</h2>
<ul>
<li>store/actionTypes.ts</li>
</ul><pre><code class="language-ts">export const ADD_ARTICLE = "ADD_ARTICLE"
export const REMOVE_ARTICLE = "REMOVE_ARTICLE"
</code></pre>
<p>We need two action types for the Redux store. One for adding articles and another for deleting.</p>
<h2 id="create-the-action-creators">Create the action creators</h2>
<ul>
<li>store/actionCreators.ts</li>
</ul><pre><code class="language-ts">import * as actionTypes from "./actionTypes"
export function addArticle(article: IArticle) {
const action: ArticleAction = {
type: actionTypes.ADD_ARTICLE,
article,
}
return simulateHttpRequest(action)
}
export function removeArticle(article: IArticle) {
const action: ArticleAction = {
type: actionTypes.REMOVE_ARTICLE,
article,
}
return simulateHttpRequest(action)
}
export function simulateHttpRequest(action: ArticleAction) {
return (dispatch: DispatchType) =&gt; {
setTimeout(() =&gt; {
dispatch(action)
}, 500)
}
}
</code></pre>
<p>In this tutorial, I will simulate the HTTP request by delaying it for 0.5 seconds. But, feel free to use a real server if you want to.</p>
<p>Here, the function <code>addArticle</code> will dispatch an action for adding a new article, and the method <code>removeArticle</code> will do the opposite. So delete the object passed in as an argument.</p>
<h2 id="create-a-reducer">Create a reducer</h2>
<p>A reducer is a pure function that receives the state of the store and an action as parameters and then returns the updated state.</p>
<ul>
<li>store/reducer.ts</li>
</ul><pre><code class="language-ts">import * as actionTypes from "./actionTypes"
const initialState: ArticleState = {
articles: [
{
id: 1,
title: "post 1",
body:
"Quisque cursus, metus vitae pharetra Nam libero tempore, cum soluta nobis est eligendi",
},
{
id: 2,
title: "post 2",
body:
"Harum quidem rerum facilis est et expedita distinctio quas molestias excepturi sint",
},
],
}
</code></pre>
<p>As you can see here, we declare an initial state to have some articles to show when the page loads. The state object needs to match the type <code>ArticleState</code> - otherwise, TypeScript will throw an error.</p>
<ul>
<li>store/reducer.ts</li>
</ul><pre><code class="language-ts">const reducer = (
state: ArticleState = initialState,
action: ArticleAction
): ArticleState =&gt; {
switch (action.type) {
case actionTypes.ADD_ARTICLE:
const newArticle: IArticle = {
id: Math.random(), // not really unique
title: action.article.title,
body: action.article.body,
}
return {
...state,
articles: state.articles.concat(newArticle),
}
case actionTypes.REMOVE_ARTICLE:
const updatedArticles: IArticle[] = state.articles.filter(
article =&gt; article.id !== action.article.id
)
return {
...state,
articles: updatedArticles,
}
}
return state
}
export default reducer
</code></pre>
<p>Next, we have the <code>reducer</code> function that expects the previous state and an action to be able to update the store. Here, we have two actions: one for adding and another for deleting.</p>
<p>With that in place, we can now handle the state with the reducer. Let's now create a store for the project.</p>
<h2 id="create-a-store">Create a store</h2>
<p>A Redux store is where your app's state lives.</p>
<ul>
<li>index.tsx</li>
</ul><pre><code class="language-tsx">import * as React from "react"
import { render } from "react-dom"
import { createStore, applyMiddleware, Store } from "redux"
import { Provider } from "react-redux"
import thunk from "redux-thunk"
import App from "./App"
import reducer from "./store/reducer"
const store: Store&lt;ArticleState, ArticleAction&gt; &amp; {
dispatch: DispatchType
} = createStore(reducer, applyMiddleware(thunk))
const rootElement = document.getElementById("root")
render(
&lt;Provider store={store}&gt;
&lt;App /&gt;
&lt;/Provider&gt;,
rootElement
)
</code></pre>
<p>As you can see, we import the reducer function and then pass it as an argument to the method <code>createStore</code> in order to create a new Redux store. The <code>redux-thunk</code> middleware needs to be proceeded as a second parameter as well to the method to be able to handle asynchronous code.</p>
<p>Next, we connect React to Redux by providing the <code>store</code> object as props to the <code>Provider</code> component.</p>
<p>We can now use Redux in this project and access the store. So, let's create the components to get and manipulate the data.</p>
<h2 id="create-the-components">Create the components</h2>
<ul>
<li>components/AddArticle.tsx</li>
</ul><pre><code class="language-tsx">import * as React from "react"
type Props = {
saveArticle: (article: IArticle | any) =&gt; void
}
export const AddArticle: React.FC&lt;Props&gt; = ({ saveArticle }) =&gt; {
const [article, setArticle] = React.useState&lt;IArticle | {}&gt;()
const handleArticleData = (e: React.FormEvent&lt;HTMLInputElement&gt;) =&gt; {
setArticle({
...article,
[e.currentTarget.id]: e.currentTarget.value,
})
}
const addNewArticle = (e: React.FormEvent) =&gt; {
e.preventDefault()
saveArticle(article)
}
return (
&lt;form onSubmit={addNewArticle} className="Add-article"&gt;
&lt;input
type="text"
id="title"
placeholder="Title"
onChange={handleArticleData}
/&gt;
&lt;input
type="text"
id="body"
placeholder="Description"
onChange={handleArticleData}
/&gt;
&lt;button disabled={article === undefined ? true : false}&gt;
Add article
&lt;/button&gt;
&lt;/form&gt;
)
}
</code></pre>
<p>To add a new article, we will be using this form component. It receives the function <code>saveArticle</code> as a parameter, which allows adding a new article to the store. </p>
<p>The article object should follow the type <code>IArticle</code> to make TypeScript happy.</p>
<ul>
<li>components/Article.tsx</li>
</ul><pre><code class="language-tsx">import * as React from "react"
import { Dispatch } from "redux"
import { useDispatch } from "react-redux"
type Props = {
article: IArticle
removeArticle: (article: IArticle) =&gt; void
}
export const Article: React.FC&lt;Props&gt; = ({ article, removeArticle }) =&gt; {
const dispatch: Dispatch&lt;any&gt; = useDispatch()
const deleteArticle = React.useCallback(
(article: IArticle) =&gt; dispatch(removeArticle(article)),
[dispatch, removeArticle]
)
return (
&lt;div className="Article"&gt;
&lt;div&gt;
&lt;h1&gt;{article.title}&lt;/h1&gt;
&lt;p&gt;{article.body}&lt;/p&gt;
&lt;/div&gt;
&lt;button onClick={() =&gt; deleteArticle(article)}&gt;Delete&lt;/button&gt;
&lt;/div&gt;
)
}
</code></pre>
<p>The <code>Article</code> component shows an article object.</p>
<p>The function <code>removeArticle</code> has to dispatch to access the store and hence delete a given article. That's the reason we use the <code>useDispatch</code> hook here, which lets Redux complete the removing action.</p>
<p>Next, the use of <code>useCallback</code> helps to avoid unnecessary re-rendering by memoizing values as dependencies.</p>
<p>We finally have the components we need to add and show the articles. Let's now add the last piece to the puzzle by using them in the <code>App.tsx</code> file.</p>
<ul>
<li>App.tsx</li>
</ul><pre><code class="language-tsx">import * as React from "react"
import { useSelector, shallowEqual, useDispatch } from "react-redux"
import "./styles.css"
import { Article } from "./components/Article"
import { AddArticle } from "./components/AddArticle"
import { addArticle, removeArticle } from "./store/actionCreators"
import { Dispatch } from "redux"
const App: React.FC = () =&gt; {
const articles: readonly IArticle[] = useSelector(
(state: ArticleState) =&gt; state.articles,
shallowEqual
)
const dispatch: Dispatch&lt;any&gt; = useDispatch()
const saveArticle = React.useCallback(
(article: IArticle) =&gt; dispatch(addArticle(article)),
[dispatch]
)
return (
&lt;main&gt;
&lt;h1&gt;My Articles&lt;/h1&gt;
&lt;AddArticle saveArticle={saveArticle} /&gt;
{articles.map((article: IArticle) =&gt; (
&lt;Article
key={article.id}
article={article}
removeArticle={removeArticle}
/&gt;
))}
&lt;/main&gt;
)
}
export default App
</code></pre>
<p>The <code>useSelector</code> hook enables access to the state of the store. Here, we pass <code>shallowEqual</code> as a second argument to the method to tell to Redux to use shallow equality when checking for changes.</p>
<p>Next, we rely on <code>useDispatch</code> to dispatch an action for adding articles in the store. Finally, we loop through the array of articles and pass each to the <code>Article</code> component to show it.</p>
<p>With that, we can now browse to the root of the project and then execute this command:</p><pre><code class="language-shell">  yarn start
</code></pre>
<p>Or for <code>npm</code>:</p><pre><code class="language-shell">  npm start
</code></pre>
<p>If you open <code>http://localhost:3000/</code> in the browser, you should see this:</p>
<p>Great! Our app looks good. With this, we have now finished using Redux in a React TypeScript app.</p>
<p>You can find the finished project <a href="https://codesandbox.io/s/react-redux-typescript-oc4hi">in this CodeSandbox</a>.</p>
<p>You can find other great content like this on <a href="https://www.ibrahima-ndaw.com">my blog</a> or follow me <a href="https://twitter.com/ibrahima92_">on Twitter</a> to get notified.</p>
<p>Thanks for reading.</p>
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
