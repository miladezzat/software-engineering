---
card: "https://cdn-media-1.freecodecamp.org/images/1*XB8rYOUoHDLtQHz470IDQw.jpeg"
tags: [React]
description: "This is going to be a thorough step-by-step guide for buildin"
author: "Milad E. Fahmy"
title: "Build a chat app with React, TypeScript and Socket.io"
created: "2021-08-16T10:06:30+02:00"
modified: "2021-08-16T10:06:30+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-react tag-typescript tag-chat tag-web-development tag-software-development ">
<header class="post-full-header">
<h1 class="post-full-title">Build a chat app with React, TypeScript and Socket.io</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*XB8rYOUoHDLtQHz470IDQw.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*XB8rYOUoHDLtQHz470IDQw.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*XB8rYOUoHDLtQHz470IDQw.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*XB8rYOUoHDLtQHz470IDQw.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*XB8rYOUoHDLtQHz470IDQw.jpeg" alt="Build a chat app with React, TypeScript and Socket.io">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
import ChatArea from '../../ChatArea/ChatArea';
// We can have just this:
import createSagaMiddleware from 'redux-saga'
import reducer from './reducers'
import mySaga from './sagas'
// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
// mount it on the Store
const store = createStore(
reducer,
applyMiddleware(sagaMiddleware)
)</code></pre><p>But in our case it would be like this:</p><pre><code>import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import socketReducer from './socket/reducer';
import messageReducer from './message/reducer';
import socketMiddleware from './socket/middleware';
const rootReducer = combineReducers({
socketState: socketReducer,
messageState: messageReducer
});
// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const index = {
...createStore(rootReducer, composeEnhancers(applyMiddleware(socketMiddleware)))
};
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
