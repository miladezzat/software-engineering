---
card: "https://cdn-media-1.freecodecamp.org/images/1*5GipOUpmtMBQf3pOTcJ1YQ.jpeg"
tags: [JavaScript]
description: "Note: As of React 16, componentWillReceiveProps() is deprecat"
author: "Milad E. Fahmy"
title: "How to force-refresh a React child component: the easy way"
created: "2021-08-16T10:14:21+02:00"
modified: "2021-08-16T10:14:21+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-react tag-web-development tag-programming tag-tutorial ">
<header class="post-full-header">
<h1 class="post-full-title">How to force-refresh a React child component: the easy way</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*5GipOUpmtMBQf3pOTcJ1YQ.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*5GipOUpmtMBQf3pOTcJ1YQ.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*5GipOUpmtMBQf3pOTcJ1YQ.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*5GipOUpmtMBQf3pOTcJ1YQ.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*5GipOUpmtMBQf3pOTcJ1YQ.jpeg" alt="How to force-refresh a React child component: the easy way">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
state = {
user: {}
}
componentDidMount() {
this.fetchUser().then(this.refreshUser)
}
setNewColor = color =&gt; {
this.updateUser({color}).then(this.refreshUser)
}
refreshUser = res =&gt; this.setState({user: res.data.user})
render() {
const { user } = this.state;
return (
&lt;div&gt;
User name: {user.name}
Pick color:
&lt;div&gt;
{colors.map(color =&gt;
&lt;div className={color}
onClick={() =&gt; this.setNewColor(color)} /&gt;)}
)}
&lt;/div&gt;
&lt;ShoeList id={user.id} /&gt;
&lt;/div&gt;
)
}
}</code></pre><p>Our <code>ShoeList</code> is just going to be a list of shoes, which we’ll fetch from the server with the user’s id:</p><pre><code class="language-jsx">const ShoeList extends Component {
state = {
shoes: []
}
componentDidMount() {
this.fetchShoes(this.props.id)
.then(this.refreshShoeList)
}
refreshShoeList = res =&gt; this.setState({ shoes: res.data.shoes })
render() {
// some list of shoes
}
}</code></pre><p>If we want the shoe component to grab the new list of shoes, we need to update the props we send to it. Otherwise it will see no need to refresh.</p><p>In fact, the way this is written, the <code>ShoeList</code> would never refresh, as we are not dependent on props for rendering. Let’s fix that.</p><h3 id="triggering-a-child-component-to-re-render">Triggering a child component to re-render</h3><p>To force the child component to re-render — and make a new API call — we’ll need to pass a prop that will change if the user’s color preference has changed.</p><p>To do this, we’ll add a method into <code>setNewColor</code>:</p><pre><code class="language-jsx">[...]
setNewColor = color =&gt; {
this.updateUser({color}).then(res =&gt; {
this.refreshUser(res);
this.refreshShoeList();
})
}
refreshShoeList = () =&gt;
this.setState({refreshShoeList: !this.state.refreshShoeList})
[...]
&lt;ShoeList id={user.id} refresh={refreshShoeList}</code></pre><p>This is a simple switch we can flip. I’ve kept things as simple as possible, but in production we’d want to make sure that the color we’re setting is different than the color we had before. Otherwise, there will be nothing to update.</p><p>Now in the <code>ShoeList</code>:</p><pre><code class="language-jsx">componentWillReceiveProps(props) {
const { refresh, id } = this.props;
if (props.refresh !== refresh) {
this.fetchShoes(id)
.then(this.refreshShoeList)
}
}</code></pre><p>If you pass only <code>refreshShoeList</code> and then toggle based on that boolean, the component will just update forever and ever and ever.</p><p>We need to make sure the switch has flipped only once — so we’ll just check that the props coming in are different than the props we had before. If they are different, we’ll make a new API call to get the new list of shoes.</p><p>And boom — our child component has been “forced” to update.</p><h4 id="componentwillreceiveprops">componentWillReceiveProps</h4><p>It’s worth taking just one more minute to review what’s going on in that last piece of code. In <code>componentWillReceiveProps</code> we have our only opportunity to view new props as they are coming in and compare them with previous props.</p><p>Here we can detect changes (like in <code>refresh</code>) and we can also make checks for new props (note, for instance, that <code>refresh</code> is initially <code>undefined</code>).</p><p>This React method is a very powerful way to manipulate and examine <code>props</code>.</p>
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
