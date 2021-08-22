---
card: "https://cdn-media-1.freecodecamp.org/images/1*6g791iHSFVEe6yZqH9IlIA.jpeg"
tags: [JavaScript]
description: "Hooks have become a pretty powerful new feature of React. The"
author: "Milad E. Fahmy"
title: "How to destructure the fundamentals of React Hooks"
created: "2021-08-16T11:30:07+02:00"
modified: "2021-08-16T11:30:07+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-react tag-front-end-development tag-technology tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">How to destructure the fundamentals of React Hooks</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*6g791iHSFVEe6yZqH9IlIA.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*6g791iHSFVEe6yZqH9IlIA.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*6g791iHSFVEe6yZqH9IlIA.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*6g791iHSFVEe6yZqH9IlIA.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*6g791iHSFVEe6yZqH9IlIA.jpeg" alt="How to destructure the fundamentals of React Hooks">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Hooks have become a pretty powerful new feature of React. They can be intimidating if you’re not really sure what’s going on behind the scenes. The beauty is now being able to manage state in a simple (and reusable) manner within function components.</p><p>But why not use a class? Without getting too far away from the topic, functions provide a more straightforward way to write your components, guiding you to write in a cleaner and more reusable way. Bonus: it typically makes writing tests easier.</p><p>There’s <a href="https://github.com/rehooks/awesome-react-hooks" rel="noopener">a lot of use cases for hooks</a>, so I won’t dive into examples. It shouldn’t be too bad to get up to speed with a few quick lines. For the sake of this article, let’s assume browser cookies aren’t a thing and these are the edible type.</p><h3 id="diving-into-the-cookie-jar">Diving into the cookie jar</h3><p>Here we have <code>MyCookies</code>, a function component, which we can consider our cookie jar. Let's say we want to internally keep track of how many cookies we have in the jar. With the new hooks API, we can add a simple line using <code>useState</code> to handle the job.</p><pre><code class="language-js">const MyCookies = () =&gt; {
const [ cookies, setCookieCount ] = useState(0);
...
};</code></pre><h3 id="wait-how-do-we-get-cookies-out-of-that">Wait, how do we get cookies out of that?</h3><p>If you think the above is magic and are wondering how the values in the array are getting set, you’ll need to understand the basics of array destructuring.</p><p>While destructuring an object will use the same key wherever you try to pull it from, arrays destructure using the order of the items within the array.</p><pre><code class="language-js">const [ one, two ] = [ 1, 2 ];
console.log(one); // 1
console.log(two); // 2</code></pre><p>While the above seems like it’s naming them in a particular order, it’s not as shown below:</p><pre><code class="language-js">const [ two, one ] = [ 1, 2 ];
console.log(two); // 1
console.log(one); // 2</code></pre><p>Without going too far down the technical rabbit hole, <code>useState</code> is a function that returns an array that we're destructuring for use within our component.</p><p>What about the 0 inside the invocation of <code>useState</code> itself? That’s simply the initial value we’re setting the state instance to. In this case, we’ll sadly start off with 0 cookies.</p><h3 id="actually-use-state">Actually, use state</h3><p>Once we have our destructured <code>cookies</code> and the <code>setCookiesCount</code> function, we can start interacting with the component's local state like you might do using <code>setState</code> within a class component.</p><p>At render time, our <code>cookies</code> value will be that invocation of <code>useState</code>'s internal state value, similar to what you might see with <code>this.state</code>. To update that value, we can simply call <code>setCookiesCount</code>.</p><pre><code class="language-js">const MyCookies = () =&gt; {
const [ cookies, setCookieCount ] = useState(0);
return (
&lt;&gt;
&lt;h2&gt;Cookies: { cookies }&lt;/h2&gt;
&lt;button onClick={() =&gt; setCookieCount(cookies + 1)} &gt;
Add Cookie
&lt;/button&gt;
&lt;/&gt;
);
};</code></pre><p>If you’re more used to the class syntax, you might update state using <code>this.setState</code> looking something like this:</p><pre><code class="language-js">const MyCookies = () =&gt; {
const [ cookies, setCookieCount ] = useState(0);
useEffect(() =&gt; {
getCookieCount().then((count) =&gt; {
setCookieCount(count);
})
});
...
};</code></pre><h3 id="how-to-use-effects">How to use effects</h3><p>Often components need a way to create side effects that won’t necessarily interrupt the functional flow of a function component. Say we have the number of cookies we have saved on a server somewhere, we might want to fetch that count when the app loads.</p><pre><code class="language-js">const MyCookies = () =&gt; {
const [ cookies, setCookieCount ] = useState(0);
useEffect(() =&gt; {
getCookieCount().then((count) =&gt; {
setCookieCount(count);
})
}, []);
...
};</code></pre><p>After the component renders, everything inside of <code>useEffect</code> will run. Any side effects originating from <code>useEffect</code> will only occur after the render is complete. That said, once <code>useEffect</code> does run, we fire <code>getCookieCount</code> and use our previous <code>setCookieCount</code> function to update the state of the component.</p><h3 id="hold-up-there-s-something-wrong-">Hold up, there’s something wrong…</h3><p>There’s a gotcha in the code above though. That effect will run every time, essentially wiping out any new increments to our cookie value from our original Add Cookie button.</p><p>To get around this, we can set a 2nd argument to the <code>useEffect</code> function that allows us to let React know when to run it again. In our example above, setting that 2nd argument to an empty array will make it run only once.</p><pre><code class="language-js">const MyCookies = ({cookieType = 'chocolate'}) =&gt; {
const [ cookies, setCookieCount ] = useState(0);
useEffect(() =&gt; {
getCookieCount().then((count) =&gt; {
setCookieCount(count);
})
}, [ cookieType ]);
...
};</code></pre><p>In most cases though, you’ll want to pass an array of dependencies that, when changed, will cause <code>useEffect</code> to fire again. Say, for example, you're fetching the count of a specific cookie type and want to get the count again if that type changes.</p><pre><code class="language-js">import BasketContext from 'context';
const Basket = ({children}) =&gt; {
return (
&lt;BasketContext.Provider value={basketItems}&gt;
&lt;h1&gt;My Basket&lt;/h1&gt;
{ children }
&lt;/BasketContext.Provider&gt;
);
}
// MyCookies.js
const MyCookies = ({cookieType = 'chocolate'}) =&gt; {
const basketItems = useContext(BasketContext);
...
};</code></pre><p>In the above code, any time our prop <code>cookieType</code> changes, React knows that we depend on it for our effect, and will rerun that effect.</p><h3 id="trying-to-make-use-of-context">Trying to make use of context</h3><p>I’m not going to <a href="https://reactjs.org/docs/context.html" rel="noopener">go into the details of React’s context API</a> as that’s a little out of scope. However, if you’re familiar with it, the <code>useContext</code> hook lets you easily make use of your context from within your function component.In the above code, given our already created context, we can immediately “use” said context and collect the values passed into our context provider.</p><pre><code class="language-js">import BasketContext from 'context';
const Basket = ({children}) =&gt; {
return (
&lt;BasketContext.Provider value={basketItems}&gt;
&lt;h1&gt;My Basket&lt;/h1&gt;
{ children }
&lt;/BasketContext.Provider&gt;
);
}
// MyCookies.js
const MyCookies = ({cookieType = 'chocolate'}) =&gt; {
const basketItems = useContext(BasketContext);
...
};</code></pre><h3 id="cleaning-your-hooks">Cleaning your hooks</h3><p>What makes hooks even more powerful is combining and abstracting them DRYing up your code in a cleaner way. As a quick last example, we can take our cookie examples of <code>useState</code> and <code>useEffect</code> and abstract them into their own <code>use[Name]</code> function, effectively <a href="https://reactjs.org/docs/hooks-custom.html" rel="noopener">creating a custom hook</a>.</p><pre><code>// useCookies.js
function useCookies(initialCookieCount) {
const [ cookies, setCookieCount ] = useState(initialCookieCount);
useEffect(() =&gt; {
getCookieCount().then((count) =&gt; {
setCookieCount(count);
})
}, []);
function addCookie() {
setCookieCount(cookies + 1);
console.log('?');
}
function removeCookie() {
setCookieCount(cookies - 1);
console.log('?');
}
return {
cookies,
addCookie,
removeCookie
}
};
// MyCookies.js
const MyCookies = () =&gt; {
const { cookies, addCookie, removeCookie } = useCookies(0);
...
<p style="margin: 0;">
<a href="https://twitter.com/colbyfayock" style="display: block;">
</a>
</p>
<ul style="display:flex;justify-content:center;list-style:none;padding:0;margin: .5em 0 0;font-size: .8em;">
<li style="margin: 0 .6em;padding: 0;">
<a href="https://twitter.com/colbyfayock" style="text-decoration: none;">? Follow Me On Twitter</a>
</li>
<li style="margin: 0 .6em;padding: 0;">
<a href="https://youtube.com/colbyfayock" style="text-decoration: none;">?️ Subscribe To My Youtube</a>
</li>
<li style="margin: 0 .6em;padding: 0;">
<a href="https://www.colbyfayock.com/newsletter/" style="text-decoration: none;">✉️ Sign Up For My Newsletter</a>
</li>
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
