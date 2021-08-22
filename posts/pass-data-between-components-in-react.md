---
card: "/images/default.jpg"
tags: [React]
description: "If you re trying to implement CRUD operations using API endpo"
author: "Milad E. Fahmy"
title: "How to Pass Data and Events Between Components in React"
created: "2021-08-16T10:03:38+02:00"
modified: "2021-08-16T10:03:38+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-react tag-web-development tag-components tag-crud ">
<header class="post-full-header">
<h1 class="post-full-title">How to Pass Data and Events Between Components in React</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2021/05/Colorful-Animal-Crossing-Icons-Icon-Set-2.png 300w,
/news/content/images/size/w600/2021/05/Colorful-Animal-Crossing-Icons-Icon-Set-2.png 600w,
/news/content/images/size/w1000/2021/05/Colorful-Animal-Crossing-Icons-Icon-Set-2.png 1000w,
/news/content/images/size/w2000/2021/05/Colorful-Animal-Crossing-Icons-Icon-Set-2.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2021/05/Colorful-Animal-Crossing-Icons-Icon-Set-2.png" alt="How to Pass Data and Events Between Components in React">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
export default function Parent() {
return (
&lt;div&gt;
&lt;/div&gt;
)
}
export default function Child() {
return (
&lt;div&gt;
&lt;/div&gt;
)
}
import Child from './Child';
export default function Parent() {
return (
&lt;div&gt;
&lt;Child/&gt;
&lt;/div&gt;
)
}</code></pre><figcaption>Call the Child Component in the Parent Component</figcaption></figure><p>Then you'll create a function and a button to trigger that function. Also, you'll create a state using the <em>useState </em>Hook to manage the data.</p><pre><code>import React from 'react'
import Child from './Child';
import { Button } from 'semantic-ui-react';
import { useState } from 'react';
import './App.css';
export default function Parent() {
const [data, setData] = useState('');
const parentToChild = () =&gt; {
setData("This is data from Parent Component to the Child Component.");
}
return (
&lt;div className="App"&gt;
&lt;Child/&gt;
&lt;div&gt;
&lt;Button primary onClick={() =&gt; parentToChild()}&gt;Click Parent&lt;/Button&gt;
&lt;/div&gt;
&lt;/div&gt;
)
}
export default function Child({parentToChild}) {
return (
&lt;div&gt;
{parentToChild}
&lt;/div&gt;
)
export default class Child extends Component {
render() {
return (
&lt;div&gt;
{this.props.parentToChild}
&lt;/div&gt;
)
}
import Child from './Child';
import { Button } from 'semantic-ui-react';
import { useState } from 'react';
import './App.css';
export default function Parent() {
const [data, setData] = useState('');
const parentToChild = () =&gt; {
setData("This is data from Parent Component to the Child Component.");
}
return (
&lt;div className="App"&gt;
&lt;Child parentToChild={data}/&gt;
&lt;div className="child"&gt;
&lt;Button primary onClick={() =&gt; parentToChild()}&gt;Click Parent&lt;/Button&gt;
&lt;/div&gt;
&lt;/div&gt;
)
const childToParent = () =&gt; {
import { Button } from 'semantic-ui-react';
export default function Child({childToParent}) {
const data = "This is data from Child Component to the Parent Component."
return (
&lt;div&gt;
&lt;Button primary onClick={() =&gt; childToParent(data)}&gt;Click Child&lt;/Button&gt;
&lt;/div&gt;
)
import { useState } from 'react';
import Child from './Child';
function Parent() {
const [data, setData] = useState('');
const childToParent = (childdata) =&gt; {
setData(childdata);
}
return (
&lt;div className="App"&gt;
&lt;div&gt;
&lt;Child/&gt;
&lt;/div&gt;
&lt;/div&gt;
);
}
export default Parent;
import { useState } from 'react';
import Child from './Child';
function Parent() {
const [data, setData] = useState('');
const childToParent = (childdata) =&gt; {
setData(childdata);
}
return (
&lt;div className="App"&gt;
{data}
&lt;div&gt;
&lt;Child childToParent={childToParent}/&gt;
&lt;/div&gt;
&lt;/div&gt;
);
}
import Child from './Child';
function Parent() {
const childToParent = () =&gt; {
alert("This is an alert from the Child Component")
}
return (
&lt;div className="App"&gt;
&lt;div className="child"&gt;
&lt;Child childToParent={childToParent}/&gt;
&lt;/div&gt;
&lt;/div&gt;
);
}
import { Button } from 'semantic-ui-react';
export default function Child({childToParent}) {
return (
&lt;div&gt;
&lt;Button primary onClick={() =&gt; childToParent()}&gt;Click Child&lt;/Button&gt;
&lt;/div&gt;
)
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
