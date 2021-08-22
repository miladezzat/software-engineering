---
card: "/images/default.jpg"
tags: [Jamstack]
description: When interacting with a backend, a JAMstack app can do everyt
author: "Milad E. Fahmy"
title: "How to Build Authenticated Serverless JAMstack Apps with Gatsby and Netlify"
created: "2021-08-15T19:32:47+02:00"
modified: "2021-08-15T19:32:47+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-jamstack tag-javascript tag-gatsby tag-netlify tag-reactjs ">
<header class="post-full-header">
<h1 class="post-full-title">How to Build Authenticated Serverless JAMstack Apps with Gatsby and Netlify</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2019/09/D1dQf4uWkAAAwkD.jpg 300w,
/news/content/images/size/w600/2019/09/D1dQf4uWkAAAwkD.jpg 600w,
/news/content/images/size/w1000/2019/09/D1dQf4uWkAAAwkD.jpg 1000w,
/news/content/images/size/w2000/2019/09/D1dQf4uWkAAAwkD.jpg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2019/09/D1dQf4uWkAAAwkD.jpg" alt="How to Build Authenticated Serverless JAMstack Apps with Gatsby and Netlify">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>When interacting with a backend, a JAMstack app can do everything a mobile app can do, without the tyranny of the app store. This is a fundamental insight that goes as deep as the fight for a more open, secure, decoupled, faster web.</p>
<p>Static site generators (SSGs) are traditionally used to generate markup HTML for static sites, and even <a href="https://css-tricks.com/lets-build-a-jamstack-e-commerce-store-with-netlify-functions/">e-commerce sites</a>, but the modern generation of JavaScript SSGs are enabling full-blown, blazing fast web apps. Gatsby uses JavaScript to rehydrate Markup into a fully dynamic React app - which means you can use APIs to do all sorts of dynamic functionality!</p>
<p>Let's see how we can incrementally add functionality to a Gatsby static site with Netlify Functions, and then add authentication with Netlify Identity to create a proper Gatsby app. We'll gradually build up to <a href="https://github.com/sw-yx/jamstack-hackathon-starter/">a full working demo</a> with:</p>
<ul>
<li>??Dynamic Clientside Pages in Gatsby</li>
<li>?Serverless Functions (with Netlify Dev)</li>
<li>??‍♂️Hide API Secrets from being exposed to Frontend</li>
<li>?Authentication (with Netlify Identity)</li>
<li>?Protected Routes</li>
<li>?Authenticated Serverless Functions (why not!)</li>
<li>?External Provider login with GitHub, Bitbucket, Google, etc.</li>
</ul>
<h2 id="notyourparentsstaticsitegenerator">Not Your Parent's Static Site Generator</h2>
<p>Why would you use something like Gatsby over Jekyll or Hugo or one of the <a href="https://www.staticgen.com/">hundreds of Static Site Generators</a> out there? <a href="https://www.gatsbyjs.org/blog/2018-2-27-why-i-upgraded-my-website-to-gatsbyjs-from-jekyll/">There are many reasons</a>, but one of the unique selling points is how Gatsby helps you build <a href="https://www.gatsbyjs.org/docs/progressive-web-app/#progressive-web-app">"Static Progressive Web Apps"</a> with React.</p>
<p><a href="https://www.gatsbyjs.org/docs/production-app/#dom-hydration">Gatsby's ability to rehydrate</a> (what a delicious word!) the DOM means you can do incredibly dynamic things with JavaScript and React that would be much harder with legacy SSG's.</p>
<p>Let's say you have a typical static Gatsby site, like <a href="https://www.gatsbyjs.org/starters/gatsby-starter-default">gatsby-starter-default</a>. You can <code>npm run build</code> it, and it spits out a bunch of HTML files. Great! I can host that for free!</p>
<p>Now imagine your client comes to you and asks you to add some custom logic that needs to be executed on the server:</p>
<ul>
<li>Maybe you have third party API secrets you don't want to expose to your user.</li>
<li>Maybe you need <a href="https://alligator.io/nodejs/solve-cors-once-and-for-all-netlify-dev/">a serverside proxy to get around CORS issues</a>.</li>
<li>Maybe you need to ping a database to check your inventory.</li>
</ul>
<p><strong>Oh no! Now you have to rewrite everything and move to a Digital Ocean droplet!</strong></p>
<p>I'm kidding. No, you don't have to rewrite everything.</p>
<p>The beauty of serverless functions is that it is incrementally adoptable - <strong>your site grows with your needs</strong> - and with JavaScript you can rerender entire sections of your site based on live API data. Of course, the more you do this, the more resource intensive (in terms of bandwidth and computation) it can be, so there is a performance tradeoff. <strong>Your site should be as dynamic as you need it to be, but no more.</strong> Gatsby is perfect for this.</p>
<h2 id="usingnetlifydevtoaddserverlessfunctions">Using Netlify Dev to add Serverless Functions</h2>
<p><a href="https://www.netlify.com/docs/functions/?utm_source=blog&amp;utm_medium=freecodecamp&amp;utm_campaign=devex">Netlify Functions</a> are a great low configuration solution for adding serverless functionality to your Gatsby site.</p>
<p>We'll assume you have a Gatsby site ready to go already, preferably linked to a Git remote like GitHub. If you don't have one, fork and download <a href="https://app.netlify.com/start/deploy?repository=https://github.com/gatsbyjs/gatsby-starter-default">gatsby-starter-default</a>. Let's walk through the steps to add Netlify Functions:</p>
<ol>
<li><strong>Install Netlify CLI and login</strong>:</li>
</ol>
<pre><code class="language-bash">npm i -g netlify-cli
netlify login # to link your free Netlify account
</code></pre>
<p>Pretty straightforward.</p>
<ol start="2">
<li><strong>Create your Netlify instance for your Gatsby site</strong>:</li>
</ol>
<pre><code class="language-bash">netlify init
</code></pre>
<p>You will be prompted for a "build command", which for Gatsby is <code>yarn build</code>, and a "publish directory", which for Gatsby is <code>public</code>. You can also save this in a <a href="https://www.netlify.com/docs/netlify-toml-reference/?utm_source=blog&amp;utm_medium=freecodecamp&amp;utm_campaign=devex">netlify.toml config file</a>, or the CLI will create it for you:</p>
<pre><code class="language-toml:title=netlify.toml">[build]
command = "yarn build"
functions = "functions"
publish = "public"
</code></pre>
<p>As you can see in the above example, We'll also specify where we'll save our functions to the creatively named <code>functions</code> folder.</p>
<ol start="3">
<li><strong>Create your first Netlify Function</strong>: Netlify CLI has a <a href="https://github.com/netlify/cli/tree/master/src/functions-templates/js">set of templates</a> available to help you get started writing serverless functions. Just run:</li>
</ol>
<pre><code class="language-bash">netlify functions:create # ntl functions:create also works
</code></pre>
<p>You'll be presented with an autocomplete list. We'll pick the <code>token-hider</code> example for now. Once you select it, the CLI will copy out the necessary files, and install the necessary <code>axios</code> dependencies.</p>
<p>Notice that <code>token-hider.js</code> includes this line:</p>
<pre><code class="language-js">const { API_SECRET = "shiba" } = process.env
</code></pre>
<p>This is meant to simulate API secrets that you don't want to expose to the frontend. You can set these as <a href="https://www.netlify.com/docs/continuous-deployment/?utm_source=blog&amp;utm_medium=freecodecamp&amp;utm_campaign=devex#environment-variables">build environment variables</a> on your site's Netlify Dashboard. You can name them whatever you like, and for the purposes of our demo we've provided a default, but of course feel free to modify this code however you like. It's Just JavaScript™!</p>
<ol start="4">
<li><strong>Make sure function dependencies are installed with <code>netlify-lambda</code></strong> (Optional but Recommended)</li>
</ol>
<p>Notice that your function comes with its own <code>package.json</code> and <code>node_modules</code>. This means each function can have their own independently managed dependencies, but you also need to make sure these dependencies are installed when you deploy or when someone else clones your repo. You can either check them into git (ugh!), or write a bash script to do this installation. But don't worry, there's a simple utility to automate this:</p>
<pre><code class="language-bash">yarn add -D netlify-lambda
</code></pre>
<p>And add a postinstall script in <code>package.json</code> (this isn't Netlify specific, it is part of <a href="https://docs.npmjs.com/misc/scripts#description">how npm works</a>):</p>
<pre><code class="language-js">  "scripts": {
"postinstall": "netlify-lambda install"
},
</code></pre>
<ol start="5">
<li><strong>Fire up Gatsby and Functions with Netlify Dev</strong></li>
</ol>
<p><a href="https://www.netlify.com/blog/2019/04/09/netlify-dev-our-entire-platform-right-on-your-laptop/?utm_source=blog&amp;utm_medium=freecodecamp&amp;utm_campaign=devex">Netlify Dev</a> is the local proxy server embedded in the CLI that we will use to develop our Functions alongside our Gatsby app. You can start it like so:</p>
<pre><code class="language-bash">netlify dev # or ntl dev
</code></pre>
<p>Your Gatsby app will now be accessible at <code>http://localhost:8888</code> and your function will be accessible at <code>http://localhost:8888/.netlify/function/token-hider</code>. Check it out in your browser!</p>
<p>How are both the Gatsby dev server and the Netlify Functions server both available on the same local port? How come the API_SECRET you set on the Netlify side is available in local development? The rough mental image you should have looks <a href="https://github.com/netlify/cli/blob/master/docs/netlify-dev.md">something like this</a>:</p>
<p><img src="https://www.freecodecamp.org/news/content/images/2019/09/ASCCII-ART.png" alt="ASCCII-ART"></p>
<p>You can hit your Netlify Function from anywhere in your Gatsby app! For example, in any event handler or lifecycle method, insert:</p>
<pre><code class="language-js">fetch("/.netlify/functions/token-hider")
.then(response =&gt; response.json())
.then(console.log)
</code></pre>
<p>and watch a list of dog images pop up in your console. If you are new to React, I highly recommend <a href="https://reactjs.org/docs/handling-events.html">reading through the React docs</a> to understand where and how to insert event handlers so you can, for example, <a href="https://reactjs.org/docs/handling-events.html">respond to a button click</a>.</p>
<h2 id="addingauthentication">Adding Authentication</h2>
<p>So, yes, your site can now be more dynamic than any static site: It can hit any database or API. You can hide API tokens from prying eyes. It runs rings around CORS (by the way, you can also use <a href="https://www.netlify.com/docs/redirects/?utm_source=blog&amp;utm_medium=freecodecamp&amp;utm_campaign=devex">Netlify Redirects</a> for that). But its not an <em>app</em> app. Yet!</p>
<p>The key thing about web apps (and, let's face it, the key thing users really pay for) is they all have some concept of <code>user</code>, and that brings with it all manner of complication from security to state management to <a href="https://www.netlify.com/docs/visitor-access-control/?utm_source=blog&amp;utm_medium=freecodecamp&amp;utm_campaign=devex#role-based-access-controls-with-jwt-tokens">role-based access control</a>. Entire routes need to be guarded by authentication, and sensitive content shielded from Gatsby's static generation. Sometimes there are things you -don't- want Google's spiders to see!</p>
<p>It's a different tier of concern, which makes it hard to write about in the same article as a typical Gatsby tutorial. But we're here to make apps, so let's bring it on!</p>
<h2 id="addingnetlifyidentityandauthenticatedpagestogatsby">Adding Netlify Identity and Authenticated Pages to Gatsby</h2>
<ol>
<li><strong>Enable Netlify Identity</strong>: Netlify Identity doesn't come enabled by default. You'll have to head to your site admin (eg <code>https://app.netlify.com/sites/YOUR_AWESOME_SITE/identity</code>) to turn it on. <a href="https://www.netlify.com/docs/identity/?utm_source=blog&amp;utm_medium=freecodecamp&amp;utm_campaign=devex">Read the docs</a> for further info on what you can do, for example add Facebook or Google social sign-on!</li>
<li><strong>Install dependencies</strong>: <code>npm install gatsby-plugin-netlify-identity react-netlify-identity-widget  @reach/dialog @reach/tabs @reach/visually-hidden gatsby-plugin-create-client-paths</code></li>
<li><strong>Configure Gatsby</strong>: for dynamic-ness!</li>
</ol>
<pre><code class="language-jsx:title=gatsby-config.js">// gatsby-config.js
module.exports = {
plugins: [
{
resolve: `gatsby-plugin-create-client-paths`,
options: { prefixes: [`/app/*`] },
},
{
resolve: `gatsby-plugin-netlify-identity`,
options: {
url: "https://YOUR_AWESOME_SITE_INSTANCE_HERE.netlify.com",
},
},
],
}
</code></pre>
<p>This sets up everything under the <code>/app</code> route to be dynamic on the clientside, which means you can put it behind an authentication wall.</p>
<ol start="4">
<li><strong>Add the login widget</strong>: <a href="https://github.com/netlify/netlify-identity-widget"><code>netlify-identity-widget</code></a> is a framework-agnostic overlay that ships with a nice signup/login UI. However it is a 60kb package, so there is a 6kb alternative that simply assumes you're using React: <code>react-netlify-identity-widget</code>.</li>
</ol>
<p>The widget is implemented as an accessible modal with <code>@reach/dialog</code>, so you need to put it somewhere in your app:</p>
<pre><code class="language-jsx:title=src/app/login.js">// src/app/login.js
import React from "react"
import { navigate } from "gatsby"
import { IdentityModal } from "react-netlify-identity-widget"
import "react-netlify-identity-widget/styles.css" // delete if you want to bring your own CSS
export default function Login() {
const [dialog, setDialog] = React.useState(false)
return (
&lt;div&gt;
&lt;h1&gt;Log in&lt;/h1&gt;
&lt;button onClick={() =&gt; setDialog(true)}&gt;log in&lt;/button&gt;
&lt;IdentityModal
showDialog={dialog}
onCloseDialog={() =&gt; setDialog(false)}
onLogin={user =&gt; navigate("/app/profile")}
onSignup={user =&gt; navigate("/app/profile")}
/&gt;
&lt;/div&gt;
)
}
</code></pre>
<p><code>react-netlify-identity-widget</code> uses React Context, so it normally requires adding a Provider, but <code>gatsby-plugin-netlify-identity</code> already did that for you (that's its whole purpose!).</p>
<p>As you might expect, you can use that Context in the rest of your app. <code>react-netlify-identity-widget</code> exports a <a href="https://kentcdodds.com/blog/how-to-use-react-context-effectively">Custom Consumer Hook</a> called <code>useIdentityContext</code>, which helps do some runtime checks and makes TypeScript typing easier by removing an <code>undefined</code> check.</p>
<p><code>useIdentityContext</code> returns an <code>identity</code> object, and <a href="https://github.com/sw-yx/react-netlify-identity#user-content-usage">you can see the plethora of data and methods it exposes to you on the docs</a>. Let's use them to implement a <code>NavBar</code> component!</p>
<pre><code class="language-jsx:title=src/app/components/NavBar.js">// src/app/components/NavBar.js
import React from "react"
import { Link, navigate } from "gatsby"
import { useIdentityContext } from "react-netlify-identity-widget"
export default function NavBar() {
const { user, isLoggedIn, logoutUser } = useIdentityContext()
let message = isLoggedIn
? `Hello, ${user.user_metadata &amp;&amp; user.user_metadata.full_name}`
: "You are not logged in"
const handleClick = async event =&gt; {
event.preventDefault()
await logoutUser()
navigate(`/app/login`)
}
return (
&lt;div&gt;
&lt;span&gt;{message}&lt;/span&gt;
&lt;nav&gt;
&lt;span&gt;Navigate the app: &lt;/span&gt;
&lt;Link to="/app/"&gt;Main&lt;/Link&gt;
&lt;Link to="/app/profile"&gt;Profile&lt;/Link&gt;
{isLoggedIn ? (&lt;a href="/" onClick={handleClick}&gt;Logout&lt;/a&gt;) : (&lt;Link to="/app/login"&gt;Login&lt;/Link&gt;)}
&lt;/nav&gt;
&lt;/div&gt;
)
}
</code></pre>
<ol start="5">
<li><strong>Write the rest of your app</strong>: Because of our configuration in <code>gatsby-plugin-create-client-paths</code>, any sub paths in <code>src/pages/app</code> will be exempt from Gatsby static generation. To keep the dividing line between app and site crystal clear, I like to have all my dynamic Gatsby code in a dedicated <code>app</code> folder. This means you can use <code>@reach/router</code> with <code>react-netlify-identity-widget</code> to write a standard dynamic React app with private, authenticated routes. Here's some sample code to give you an idea of how to hook them up:</li>
</ol>
<pre><code class="language-jsx:title=src/app/app.js">// src/app/app.js
import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/layout"
import NavBar from "./components/NavBar"
import Profile from "./profile"
import Main from "./main"
import Login from "./login"
import { useIdentityContext } from "react-netlify-identity-widget"
import { navigate } from "gatsby"
function PrivateRoute(props) {
const { isLoggedIn } = useIdentityContext()
const { component: Component, location, ...rest } = props
React.useEffect(
() =&gt; {
if (!isLoggedIn &amp;&amp; location.pathname !== `/app/login`) {
// If the user is not logged in, redirect to the login page.
navigate(`/app/login`)
}
},
[isLoggedIn, location]
)
return isLoggedIn ? &lt;Component {...rest} /&gt; : null
}
function PublicRoute(props) {
return &lt;div&gt;{props.children}&lt;/div&gt;
}
export default function App() {
return (
&lt;Layout&gt;
&lt;NavBar /&gt;
&lt;Router&gt;
&lt;PrivateRoute path="/app/profile" component={Profile} /&gt;
&lt;PublicRoute path="/app"&gt;
&lt;PrivateRoute path="/" component={Main} /&gt;
&lt;Login path="/login" /&gt;
&lt;/PublicRoute&gt;
&lt;/Router&gt;
&lt;/Layout&gt;
)
}
</code></pre>
<p>Phew that was a lot! but you should have a solid starting point for your app now :)</p>
<h2 id="bonuspointsauthenticatednetlifyfunctions">Bonus points: Authenticated Netlify Functions ?</h2>
<p>Just like <a href="https://en.wikipedia.org/wiki/The_Prestige_(film)">every magic act has a pledge, a turn, and a prestige</a>, I have one last tidbit for you. <a href="https://stackoverflow.com/questions/50277192/react-security-concerns-restricted-pages-in-app">Nothing on the client-side is safe</a>. Although you can send along Netlify Identity user ID's to your Netlify Function endpoints for authenticated access from your Gatsby App (for example in the body of a POST request), you'll never be truly sure if that flow is secure either from malicious users or snooping.</p>
<p>The best way to do authenticated actions inside serverless functions is to do it from <strong>inside</strong> the context of the function itself. Fortunately, <a href="https://www.netlify.com/docs/functions/?utm_source=blog&amp;utm_medium=freecodecamp&amp;utm_campaign=devex#identity-and-functions">Netlify Identity and Functions work seamlessly together</a>. All you have to do is to send along the user's <a href="https://jwt.io/">JWT</a> when hitting your endpoint:</p>
<pre><code class="language-js">// in your gatsby app
const { user } = useIdentityContext()
// in an event handler
fetch("/.netlify/functions/auth-hello", {
headers: {
Accept: "application/json",
"Content-Type": "application/json",
Authorization: "Bearer " + user.token.access_token, // like this
},
}).then(/* etc */)
</code></pre>
<p>If even this is too much boilerplate, you can even use the fetch wrapper that ships with the <code>identity</code> object:</p>
<pre><code class="language-js">// in your gatsby app
const { authedFetch } = useIdentityContext()
// in an event handler
authedFetch("/.netlify/functions/auth-hello").then(/* etc */)
</code></pre>
<p>And then inside your Netlify function, you can now check the <code>user</code> object or pass it on to your end API or database:</p>
<pre><code class="language-js">module.exports = { handler }
async function handler(event, context) {
if (context.clientContext) {
const { user } = context.clientContext
// you can get actual user metadata you can use!
return {
statusCode: 200,
body: JSON.stringify({
msg: "super secret info only available to authenticated users",
user,
})
}
} else {
return {
statusCode: 401,
body: JSON.stringify({
msg:
"Error: No authentication detected! Note that netlify-lambda doesn't locally emulate Netlify Identity.",
}),
}
}
}
</code></pre>
<h2 id="gatsbynetlifyperfectforyournexthackathon">Gatsby + Netlify - Perfect for your next Hackathon</h2>
<p>As you can see, it's a few steps to turn your static Gatsby sites into dynamic, authenticated, fully serverless apps with Netlify's free tools. This makes Gatsby a perfect tool for your next app. If you're at a hackathon, short on time, or just like to see a full working demo, check any of the following links.</p>
<ul>
<li><strong>Code:</strong> <a href="https://github.com/sw-yx/jamstack-hackathon-starter">https://github.com/sw-yx/jamstack-hackathon-starter</a></li>
<li><strong>Starter:</strong> <a href="https://www.gatsbyjs.org/starters/jamstack-hackathon-starter">https://www.gatsbyjs.org/starters/jamstack-hackathon-starter</a></li>
<li><strong>Live Demo:</strong> <a href="https://jamstack-hackathon-starter.netlify.com/">https://jamstack-hackathon-starter.netlify.com/</a></li>
</ul>
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
