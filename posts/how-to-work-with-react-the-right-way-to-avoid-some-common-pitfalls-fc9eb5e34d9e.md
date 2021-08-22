---
card: "https://cdn-media-1.freecodecamp.org/images/1*s5pDmyXqPnXV0sNmgGCIxw.jpeg"
tags: [React]
description: "One thing I hear quite often is “Let’s go for Redux” in our n"
author: "Milad E. Fahmy"
title: "How to work with React the right way to avoid some common pitfalls"
created: "2021-08-16T11:39:46+02:00"
modified: "2021-08-16T11:39:46+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-react tag-javascript tag-technology tag-programming tag-productivity ">
<header class="post-full-header">
<h1 class="post-full-title">How to work with React the right way to avoid some common pitfalls</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*s5pDmyXqPnXV0sNmgGCIxw.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*s5pDmyXqPnXV0sNmgGCIxw.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*s5pDmyXqPnXV0sNmgGCIxw.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*s5pDmyXqPnXV0sNmgGCIxw.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*s5pDmyXqPnXV0sNmgGCIxw.jpeg" alt="How to work with React the right way to avoid some common pitfalls">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
import ReactDOM from 'react-dom'
import axios from 'axios'
class RandomUser extends React.Component {
state = {user: null}
_isMounted = false
handleButtonClick = async () =&gt; {
const response = await axios.get('https://randomuser.me/api/')
if (this._isMounted) {
this.setState({ user: response.data })
}
}
componentDidMount() {
this._isMounted = true
}
componentWillUnmount() {
this._isMounted = false
}
render() {
return (
&lt;div&gt;
&lt;button onClick={this.handleButtonClick}&gt;Click Me&lt;/button&gt;
&lt;pre&gt;{JSON.stringify(this.state.user, null, 2)}&lt;/pre&gt;
&lt;/div&gt;
)
}
}
</code></pre>
var mySignal = myController.signal;
var downloadBtn = document.querySelector('.download');
var abortBtn = document.querySelector('.abort');
downloadBtn.addEventListener('click', fetchVideo);
abortBtn.addEventListener('click', function() {
myController.abort();
console.log('Download aborted');
});
function fetchVideo() {
...
fetch(url, { signal: mySignal }).then(function(response) {
...
}).catch(function(e) {
reports.textContent = 'Download error: ' + e.message;
})
}
</code></pre>
import axios from 'axios';
class Example extends Component {
signal = axios.CancelToken.source();
state = {
isLoading: false,
user: {},
}
componentDidMount() {
this.onLoadUser();
}
componentWillUnmount() {
this.signal.cancel('Api is being canceled');
}
onLoadUser = async () =&gt; {
try {
this.setState({ isLoading: true });
const response = await axios.get('https://randomuser.me/api/', {
cancelToken: this.signal.token,
})
this.setState({ user: response.data, isLoading: true });
} catch (err) {
if (axios.isCancel(err)) {
console.log('Error: ', err.message); // =&gt; prints: Api is being canceled
} else {
this.setState({ isLoading: false });
}
}
}
render() {
return (
&lt;div&gt;
&lt;pre&gt;{JSON.stringify(this.state.user, null, 2)}&lt;/pre&gt;
&lt;/div&gt;
)
}
}
</code></pre>
import axios from 'axios';
// API
import { onLoadUser } from './UserAPI';
class Example extends Component {
signal = axios.CancelToken.source();
state = {
isLoading: false,
user: {},
}
componentDidMount() {
this.onLoadUser();
}
componentWillUnmount() {
this.signal.cancel('Api is being canceled');
}
onLoadUser = async () =&gt; {
try {
this.setState({ isLoading: true });
const data = await onLoadUser(this.signal.token);
this.setState({ user: data, isLoading: true });
} catch (error) {
if (axios.isCancel(err)) {
console.log('Error: ', err.message); // =&gt; prints: Api is being canceled
} else {
this.setState({ isLoading: false });
}
}
}
render() {
return (
&lt;div&gt;
&lt;pre&gt;{JSON.stringify(this.state.user, null, 2)}&lt;/pre&gt;
&lt;/div&gt;
)
}
};
}
</code></pre>
try {
const { data } = await axios.get('https://randomuser.me/api/', {
cancelToken: myCancelToken,
})
return data;
} catch (error) {
throw error;
}
};
</code></pre>
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
