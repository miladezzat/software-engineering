---
card: "/images/default.jpg"
tags: [CSS]
description: "If you ve been around the internet lately, you ve most likely"
author: "Milad E. Fahmy"
title: "How to Use Pure CSS to Create a Beautiful Loading Animation for your App"
created: "2021-08-16T10:05:09+02:00"
modified: "2021-08-16T10:05:09+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-css tag-css3 tag-pure-css tag-html tag-html5 tag-web-development tag-web-design tag-web-applications tag-frontend tag-front-end tag-front-end-development tag-animation tag-animations tag-inspiration ">
<header class="post-full-header">
<h1 class="post-full-title">How to Use Pure CSS to Create a Beautiful Loading Animation for your App</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/05/loading-animation.jpg 300w,
/news/content/images/size/w600/2020/05/loading-animation.jpg 600w,
/news/content/images/size/w1000/2020/05/loading-animation.jpg 1000w,
/news/content/images/size/w2000/2020/05/loading-animation.jpg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/05/loading-animation.jpg" alt="How to Use Pure CSS to Create a Beautiful Loading Animation for your App">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
- index.html
- main.css
</code></pre><p><a href="https://github.com/colbyfayock/my-css-loading-animation-static/commit/9aa7925f7048fa1b73fef74d0d56380c29fc5d73">Follow along with the commit!</a></p><h3 id="step-2-starting-with-a-foundation-loading-class">Step 2: Starting with a foundation loading class</h3><p>For our foundation, let's create a new CSS class. Inside our CSS file, let's add:</p><pre><code class="language-css">.loading {
background: #eceff1;
}
</code></pre><p>With that class, let's add it to a few or all of our elements. I added it to a few paragraphs, headings, and lists.</p><pre><code class="language-html">&lt;p class="loading"&gt;For example...
color: transparent;
background: #eceff1;
}
margin-bottom: .5em;
}
color: transparent;
background: linear-gradient(100deg, #eceff1 30%, #f6f7f8 50%, #eceff1 70%);
}
0% {
background-position: 100% 50%;
}
100% {
background-position: 0 50%;
}
}
</code></pre><p>This rule when applied will change the background position from starting at 100% of the x-axis to 0% of the x-axis.</p><p>With the rule, we can add our <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations">animation</a> property to our <code>.loading</code> class:</p><pre><code class="language-css">.loading {
color: transparent;
background: linear-gradient(100deg, #eceff1 30%, #f6f7f8 50%, #eceff1 70%);
animation: loading 1.2s ease-in-out infinite;
}
color: transparent;
background: linear-gradient(100deg, #eceff1 30%, #f6f7f8 50%, #eceff1 70%);
background-size: 400%;
animation: loading 1.2s ease-in-out infinite;
}
# or
npm init next-app
yarn dev
# or
npm run dev
header: `So, how 'bout them Knicks?`,
intro: `What are their names? I'm Santa Claus! This opera's as lousy as it is brilliant! Your lyrics lack subtlety. You can't just have your characters announce how they feel. That makes me feel angry! Good news, everyone! I've taught the toaster to feel love!`,
list: [
`Yes! In your face, Gandhi!`,
`So I really am important? How I feel when I'm drunk is correct?`,
`Who are those horrible orange men?`
]
}</code></pre><p>To display that content, inside <code>&lt;main&gt;</code>, let's replace the content with:</p><pre><code class="language-jsx">&lt;main&gt;
&lt;h1&gt;{ content.header }&lt;/h1&gt;
&lt;p&gt;{ content.intro }&lt;/p&gt;
&lt;ul&gt;
{ content.list.map((item, i) =&gt; {
return (
&lt;li key={i}&gt;{ item }&lt;/li&gt;
)
})}
&lt;/ul&gt;
&lt;/main&gt;
</code></pre><p>Above our <code>content</code> object, let's add some state:</p><pre><code class="language-jsx">const [loadingState, updateLoadingState] = useState(true);
const [contentState, updateContentState] = useState({})
</code></pre><p>And in our content, we can update the instances to use that state:</p><pre><code class="language-jsx">&lt;h1&gt;{ contentState.header }&lt;/h1&gt;
&lt;p&gt;{ contentState.intro }&lt;/p&gt;
&lt;ul&gt;
{ contentState.list.map((item, i) =&gt; {
return (
&lt;li key={i}&gt;{ item }&lt;/li&gt;
)
})}
&lt;/ul&gt;
</code></pre><p>Once you save and load that, you'll first notice we get an error because our <code>list</code> property doesn't exist on our <code>contentState</code>, so we can first fix that:</p><pre><code class="language-jsx">{ Array.isArray(contentState.list) &amp;&amp; contentState.list.map((item, i) =&gt; {
return (
&lt;li key={i}&gt;{ item }&lt;/li&gt;
)
})}
</code></pre><p>And after that's ready, let's add our <code>setTimeout</code> inside of a <code>useEffect</code> hook to simulate our data loading. Add this under our <code>content</code> object:</p><pre><code class="language-jsx">useEffect(() =&gt; {
setTimeout(() =&gt; {
updateContentState(content);
updateLoadingState(false)
}, 2000);
}, [])
</code></pre><p>Once you save and open up your browser, you'll notice that for 2 seconds you don't have any content and then it loads in, basically simulating loading that data asynchronously.</p><p><a href="https://github.com/colbyfayock/my-css-loading-animation-dynamic/commit/f0cada8d696ffe3e983f5efc03dc9d75a2245fe1">Follow along with the commit!</a></p><h3 id="step-3-adding-our-loading-animation">Step 3: Adding our loading animation</h3><p>Now we can finally add our loading animation. So to do this, we're going to use our loading state we set up using <code>useState</code> and if the content is loading, add our <code>.loading</code> &nbsp;class to our elements.</p><p>Before we do that, instead of individually adding this class to each item in the DOM, it might make more sense to do so using CSS and adding the class to the parent, so let's do that first.</p><p>First, update the <code>.loading</code> class to target our elements:</p><pre><code class="language-css">.loading h1,
.loading p,
.loading li {
color: transparent;
background: linear-gradient(100deg, #eceff1 30%, #f6f7f8 50%, #eceff1 70%);
background-size: 400%;
animation: loading 1.2s ease-in-out infinite;
}
</code></pre><p>Then we can dynamically add our class to our <code>&lt;main&gt;</code> tag:</p><pre><code class="language-jsx">&lt;main className={loadingState ? 'loading' : ''}&gt;
header: 'Loading',
intro: 'Loading',
list: [
'Loading',
'Loading',
'Loading'
]
})
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
