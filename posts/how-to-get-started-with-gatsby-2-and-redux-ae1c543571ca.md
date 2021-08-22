---
card: "https://cdn-media-1.freecodecamp.org/images/1*KSVHAT4_AtBt2UpjrJNMBg.jpeg"
tags: [React]
description: "by Carl-Johan Kihl"
author: "Milad E. Fahmy"
title: "How to get started with Gatsby 2 and Redux"
created: "2021-08-16T10:07:53+02:00"
modified: "2021-08-16T10:07:53+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-react tag-redux tag-javascript tag-web-development tag-tech ">
<header class="post-full-header">
<h1 class="post-full-title">How to get started with Gatsby 2 and Redux</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*KSVHAT4_AtBt2UpjrJNMBg.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*KSVHAT4_AtBt2UpjrJNMBg.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*KSVHAT4_AtBt2UpjrJNMBg.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*KSVHAT4_AtBt2UpjrJNMBg.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*KSVHAT4_AtBt2UpjrJNMBg.jpeg" alt="How to get started with Gatsby 2 and Redux">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
isDarkMode: false,
};</code></pre><p>Add the action creator (to toggle <strong><strong>darkMode</strong></strong> on and off):</p><pre><code class="language-js">const TOGGLE_DARKMODE = 'TOGGLE_DARKMODE';
export const toggleDarkMode = isDarkMode =&gt; ({
type: TOGGLE_DARKMODE, isDarkMode
});</code></pre><p>Add the reducer:</p><pre><code class="language-js">export default (state = initialState, action) =&gt; {
switch (action.type) {
case TOGGLE_DARKMODE:
return { ...state, isDarkMode: action.isDarkMode };
default:
return state;
}
import app from './app';
import { Provider } from 'react-redux';
import { createStore as reduxCreateStore } from 'redux';
import rootReducer from '.';
const createStore = () =&gt; reduxCreateStore(rootReducer);
export default ({ element }) =&gt; (
&lt;Provider store={createStore()}&gt;{element}&lt;/Provider&gt;
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
