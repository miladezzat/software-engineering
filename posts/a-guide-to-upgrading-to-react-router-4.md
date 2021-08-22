---
card: "/images/default.jpg"
tags: [React]
description: Not long after I started working at my current position, the
author: "Milad E. Fahmy"
title: "How to upgrade to React Router 4"
created: "2021-08-15T19:33:09+02:00"
modified: "2021-08-15T19:33:09+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-react tag-react-router tag-react-router-4 tag-javascript ">
<header class="post-full-header">
<h1 class="post-full-title">How to upgrade to React Router 4</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2019/07/react-router-4-2.png 300w,
/news/content/images/size/w600/2019/07/react-router-4-2.png 600w,
/news/content/images/size/w1000/2019/07/react-router-4-2.png 1000w,
/news/content/images/size/w2000/2019/07/react-router-4-2.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2019/07/react-router-4-2.png" alt="How to upgrade to React Router 4">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Not long after I started working at my current position, the team realized that it would be necessary for us to upgrade to React 16 so we could use a new UI library we were keen on adopting. </p>
<p>To figure out how much time this upgrade would require, we looked at all of our current packages to see if they were compatible with React 16, and to see if we were still using unsupported or deprecated packages. </p>
<p>The beginnings of our code base had been built by developers who used whatever open source or third party library they wanted, without actually vetting them. Thus, we found that a lot of the packages were deprecated and needed to be replaced ASAP. </p>
<p>One of the biggest surprises for us was the deprecation of <code>react-router-redux</code>. We were using <code>react-router-redux</code> in conjunction with react-router v3. This led us to think critically about why we were using <code>redux</code> in our router in the first place. </p>
<p>Once we started to look into react router v4, we realized that the new features would pretty much eliminate any reason for us to use an additional library to connect our router and <code>redux</code>. So, that left us in the position to just upgrade from react router 3 to 4, and remove &nbsp;<code>react-router-redux</code> from our application.</p>
<p>So, I was tasked with upgrading our router to v4 after only being in the position and working with React for about 2 months. This was because upgrading from React Router 3 to React Router 4 sounded like it should be a trivial undertaking. But, as I quickly found out, it was a little bit more involved than I anticipated. </p>
<p>Looking through the <a href="https://reacttraining.com/react-router/web/guides/quick-start">documentation</a>, the <a href="https://github.com/ReactTraining/react-router/">GitHub repo</a>, and many, many Stack Overflow answers, I finally pieced together the steps for the upgrade and wanted to share my findings — especially to explain how and why certain changes are made.</p>
<p>The biggest change to note, from the creators of React Router, is that the upgrade from React Router 3 to React Router 4 is more than just updating a few libraries and features — it allows you to fundamentally change how your Router works. The creators of React Router wanted to go back to a simple Router, allowing the developer to customize it however they would like.</p>
<p>I’ve split up this guide into 5 different parts:</p>
<ol>
<li>Package</li>
<li>History</li>
<li>Route</li>
<li>Props</li>
<li>Redux Integration</li>
</ol>
<hr>
<h1 id="package">Package</h1>
<p>React &nbsp;Router v4 package structure changed such that it’s no longer necessary &nbsp;to install react-router — you have to install <code>react-router-dom</code> (and &nbsp;uninstall <code>react-router</code>), but you don’t lose anything since it re-exports &nbsp;all of <code>react-router</code>’s exports. This means you also have to update any &nbsp;<code>react-router</code> import statements to <code>react-router-dom</code>.</p>
<hr>
<h1 id="history">History</h1>
<p>History is an essential part of routing, allowing us to remember where we came from and where we are currently. History comes in many forms for react-router, and could take a while to explain. So, to keep this article on topic, I’ll simply recommend that you read through <a href="https://medium.com/@pshrmn/a-little-bit-of-history-f245306f48dd">this article</a> that explains history in relation to react router 4. This article should cover most cases of your usage of history.</p>
<hr>
<h1 id="route">Route</h1>
<p>React Router v3 allowed us to place all of our application routes in one file, which we’ll call router.js. However, React Router v4 allows you to &nbsp;place Routes in the components that they’re rendering. The idea here is to <em>dynamically route</em> the application — in other words, the routing takes place as the app is rendering.</p>
<p>However, &nbsp;if you have a decent-size legacy code base you’re working with, you probably won’t be making a change that big. Luckily, React Router v4 &nbsp;still allows you to place all the routes in a central file, which is how I’ll create all of our examples. There are, however, a few older components and features that will need replacing.</p>
<h2 id="indexroute">IndexRoute</h2>
<p>Previously, &nbsp;<code>IndexRoute</code> was used as a route for some default UI of a parent Route. But, in v4, <code>IndexRoute</code> is no longer used, since this functionality is &nbsp;now available in Route.</p>
<p>For providing default UI, multiple Routes that have the same path will let all of the associated components render:</p><pre><code>import { BrowserRouter as Router, Route } from 'react-router-dom';
&lt;Router&gt;
// example of our route components
&lt;Route path="/" component={Home} /&gt;
&lt;Route path="/" component={About} /&gt;
&lt;Route path="/" component={Contact} /&gt;
&lt;/Router&gt;</code></pre>
<p>So, all of the Components — <code>Home</code>, <code>About</code>, and <code>Contact</code> — will render. Because of this, you can no longer nest Routes, either.</p>
<p>Additionally, to allow for better matching without the use of <code>IndexRoute</code>, you can use the exact keyword.</p><pre><code class="language-JavaScript">import { BrowserRouter as Router, Route } from 'react-router-dom';
&lt;Router&gt;
// example of our route components
&lt;Route exact path="/" component={Home} /&gt;
&lt;Route path="/about" component={About} /&gt;
&lt;/Router&gt;</code></pre>
<h2 id="exclusive-routing">Exclusive Routing</h2>
<p>After adding in the exact keyword, <code>“something.com/about”</code> will be routed to &nbsp;when the router sees a path <code>“/about”</code>. But now what if you have another &nbsp;path, <code>“/about/team”</code>? As I stated before, the router will render anything &nbsp;that matches. So, the components associated with both <code>“/about”</code> and &nbsp;<code>“/about/team”</code> will render. If that’s what you intended, then that’s great! However, if this isn’t what you want, you may have to put a &nbsp;Switch around this group of Routes. This will allow the first path that &nbsp;matches the URL to render.</p><pre><code class="language-JavaScript">import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
&lt;Router&gt;
&lt;Switch&gt;
&lt;Route exact path ="/" component={Home} /&gt;
&lt;Route path="/about/team" component={Team} /&gt;
&lt;Route path="/about" component={About} /&gt;
&lt;/Switch&gt;
&lt;/Router&gt;</code></pre>
<p>Note &nbsp;that the keyword exact still has to appear for the Home component — &nbsp;otherwise it would match for the subsequent routes. Also note that we &nbsp;have to list <code>“/about/team”</code> before <code>“/about”</code> so the route goes to the <code>Team</code> component instead of the <code>About</code> component when it sees &nbsp;<code>“something.com/about/team”</code>. If it saw <code>“/about”</code> first, it would stop &nbsp;there and render the <code>About</code> component because Switch only renders the &nbsp;first component that matches.</p>
<h2 id="default-route">Default Route</h2>
<p>A default route, or a “catch all” route, commonly used for 404 pages, is the route you use when none of the routes match.</p>
<p>In React Router v3, a default <code>Route</code> was:</p>
<p><code>&lt;Route path=”*” component={NotFound} /&gt;</code></p>
<p>In React Router v4, the default <code>Route</code> was changed to:</p><pre><code>import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
&lt;Router&gt;
&lt;Switch&gt;
&lt;Route exact path ="/" component={Home} /&gt;
&lt;Route path="/about/team" component={Team} /&gt;
&lt;Route path="/about" component={About} /&gt;
&lt;Route component={NotFound} /&gt; // this is our default route
&lt;/Switch&gt;
&lt;/Router&gt;</code></pre>
<p>When &nbsp;you don’t include a path in a <code>Route</code>, the component will always render. &nbsp;So, as we discussed above, we can use <code>Switch</code> to get only one component &nbsp;to render, and then place the “catch all” route very last (so it doesn’t &nbsp;use that one before the <code>Router</code> gets a chance to check the rest of the &nbsp;paths), so something will always render even if the other paths don’t &nbsp;match.</p>
<h2 id="onenter">onEnter</h2>
<p>Previously, &nbsp;you could use <code>onEnter</code> to make sure the component of the <code>Route</code> has all &nbsp;of the information it needs or as a check (such as to make sure the user &nbsp;is authenticated) before the component rendered.</p>
<p>This &nbsp;feature has been deprecated because the new structure of Routes is that &nbsp;they should act like components, so you should take advantage of component lifecycle methods instead.</p>
<p>In React Router v3:</p>
<p><code>&lt;Route path=”/about” onEnter={fetchedInfo} component={Team}/&gt;</code></p>
<p>Becomes:</p>
&lt;Router&gt;
&lt;Switch&gt;
&lt;Route exact path ="/" component={Home} /&gt;
&lt;Route path="/about/team" component={Team} /&gt;
&lt;Route path="/about" component={About} /&gt;
&lt;Route component={NotFound} /&gt;
&lt;/Switch&gt;
&lt;/Router&gt;</code></pre>
<figcaption>router.js</figcaption>
</figure>
componentDidMount() {
this.props.fetchInfo();
}
...</code></pre>
<figcaption>Team.js</figcaption>
</figure>
<hr>
<h1 id="props">Props</h1>
<p>In &nbsp;React Router v4, the props passed through the router have changed, as &nbsp;did the way they are accessed. The Route now passes three props:</p>
<ul>
<li><code>history</code></li>
<li><code>location</code></li>
<li><code>match</code></li>
</ul>
<h2 id="history-1">history</h2>
<p><code>history</code> contains a lot of other properties and methods, so I won’t list all of &nbsp;them, but here is a selection that might be most commonly used:</p>
<ul>
<li><code>length</code>: number of entries in the history stack</li>
<li><code>location</code>: contains the same information as below</li>
<li><code>push(path, [state])</code>: pushes new entry on history stack</li>
<li><code>goBack()</code>: allows you to move the pointer on the history stack back 1 entry</li>
</ul>
<p>It’s &nbsp;important to note that <code>history</code> is mutable, and while it contains a <code>location</code> property, this instance of <code>location</code> shouldn’t be used since it &nbsp;could have been changed. Instead, you want to use the actual <code>location</code> prop discussed below.</p>
<h2 id="location">location</h2>
<p>The location has properties:</p>
<ul>
<li><code>pathname</code></li>
<li><code>search</code></li>
<li><code>hash</code></li>
<li><code>state</code></li>
</ul>
<p><code>location.search</code> is used to replace <code>location.query</code> and it must be parsed. I used &nbsp;<code>URLSearchParams</code> to parse it. So a URL such as &nbsp;<code>“https://something.com/about?string=’hello’”</code> would be parsed as such:</p>
const query = new URLSearchParams(this.props.location.search)
const string = query.get('string') // string = 'hello'
...</code></pre>
<figcaption>About.js</figcaption>
</figure>
<p>Additionally, &nbsp;the <code>state</code> property can be used to pass the <code>location</code>-specific <code>state</code> of components through props. So, if you wanted to pass some information &nbsp;from one component to another, you could use it like this:</p><pre><code>...
// To link to another component, we could do this:
&lt;Link to='/path/' /&gt;
// However, if we wanted to add state to the location, we could do this:
const location = {
pathname: '/path/',
state: { fromDashboard: true },
}
&lt;Link to={location} /&gt;
...</code></pre>
<p>So, once we get to the component rendered by that path, we’ll have access to <code>fromDashboard</code> from <code>location.state.fromDashboard</code>.</p>
<h2 id="match">match</h2>
<p><code>match</code> has the following properties:</p>
<ul>
<li><code>params</code>: &nbsp;gets the dynamic segments of the path from the URL — for example if the &nbsp;path is <code>“/about/:id”</code>, in the component, accessing &nbsp;<code>this.props.match.params</code> will give you the id in the URL</li>
<li><code>isExact</code>: true if the entire URL was matched</li>
<li><code>path</code>: the path in the routes that was matched</li>
<li><code>url</code>: the matched portion of the URL</li>
</ul>
<h1 id="redux-integration">Redux Integration</h1>
<p>As &nbsp;I addressed earlier, we found that in our case, we didn’t need to have an additional library to connect <code>redux</code> with our router, especially since our main use case for this — Blocked Updates — was covered by react &nbsp;router.</p>
<h2 id="blocked-updates">Blocked Updates</h2>
<p>In &nbsp;some cases, the app doesn’t update when the location changes. This is called a “Blocked Update”. This can happen if both of these conditions &nbsp;are met:</p>
<ol>
<li>The component is connected to Redux via <code>connect()(Component)</code>.</li>
<li>The component isn’t rendered by a <code>&lt;Route&gt;</code></li>
</ol>
<p>In these cases, I wrapped the component’s connect with <code>withRouter</code>.</p>
<p>This &nbsp;allowed the router information to follow the component when it gets linked to, so the app still updates when the Redux state changes.</p>
<hr>
<p>And that’s it!</p>
<p>This upgrade took me over a week — a few days of trying to figure out how to do it at all, and then another few days to start actually making changes. Upgrading to React Router 4 is a huge change not to be taken lightly, but it’ll make your router a lot more lightweight and easy to use.</p>
<p>Please don’t hesitate to comment/ask questions!</p>
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
