---
card: "https://cdn-media-1.freecodecamp.org/images/1*0I74xPQNi5ngVIpsTxsLhg.jpeg"
tags: [Web Development]
description: "Sometimes a dynamic single-page app is overkill. You just nee"
author: "Milad E. Fahmy"
title: "How to leverage your React skills with static site generator Gatsby.js"
created: "2021-08-16T10:09:49+02:00"
modified: "2021-08-16T10:09:49+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-web-development tag-react tag-gatsbyjs tag-javascript tag-software-engineering ">
<header class="post-full-header">
<h1 class="post-full-title">How to leverage your React skills with static site generator Gatsby.js</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*0I74xPQNi5ngVIpsTxsLhg.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*0I74xPQNi5ngVIpsTxsLhg.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*0I74xPQNi5ngVIpsTxsLhg.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*0I74xPQNi5ngVIpsTxsLhg.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*0I74xPQNi5ngVIpsTxsLhg.jpeg" alt="How to leverage your React skills with static site generator Gatsby.js">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
gatsby new site-name
gatsby develop</code></pre><p>Gatsby takes care of everything, just like <code>create-react-app</code>. You’ve got hot reloading out of the box. When you’ve finished and are ready to send the bad boy off to your hosting provider, it’s just <code>gatsby build</code> and send that static content anywhere you want.</p><h4 id="starter-libraries">Starter Libraries</h4><p>Another great thing about the community is the large number of <a href="https://www.gatsbyjs.org/starters/?v=2" rel="noopener">starter libraries</a> available so that you don’t have to begin each project from square one. If you know you want a blog, or a powerpoint-like presentation site, or even something that comes with design baked in, Gatsby can send you down that path quickly and efficiently.</p><p>(Make sure you pick a starter that is based on version 2 of Gatsby! I learned this one the hard way: upgrading was not pleasant.)</p><h3 id="the-code">The code</h3><p>So let’s take a look at what Gatsby project code looks like.</p><h4 id="layouts-index-js">layouts/index.js</h4><p>We start where the app starts: our <code>components/layout.js</code>. Here’s what mine looks like, after I delete some starter loading code I don’t particularly need or want:</p><pre><code>import React from 'react'
import '../assets/scss/main.scss'
import Header from '../components/Header'
import Footer from '../components/Footer'
class Template extends React.Component {
render() {
return (
&lt;div className='body'&gt;
&lt;Header/&gt;
{this.props.children}
&lt;Footer/&gt;
&lt;/div&gt;
)
}
}
export default Template;</code></pre><p>By convention we will wrap any page in this <code>Template</code> component. If we need different templates, of course we may use them wherever we like.</p><p>(Note: Gatsby v1 automatically grabbed code from your <code>layouts/index.js</code> and applied it to all pages. Gatsby v2 expects you to manage your layouts manually.)</p><p>We need to import our stylesheet. And look — we can use Sass! You’ll need to add <code>node-sass</code> and <code>gatsby-plugin-sass</code>, but otherwise write your sass, import it at the top of your site and be happy.</p><h4 id="pages-index-js">pages/index.js</h4><p><code>pages/index.js</code> is where our app really “starts”.</p><p>Here’s the whole component for my site. I …ed the texts to shorten things, but otherwise I left everything here so you can see that Gatsby code looks <em>exactly</em> like React code, because it is.</p><pre><code class="language-js">import React from 'react'
import me from '../assets/images/main/me.png'
import Helmet from 'react-helmet'
import Template from '../components/layout'
import Photography from '../components/Photography'
import Miscellaneous from '../components/Miscellaneous'
class IndexPage extends React.Component {
state = {}
ChevronLink = () =&gt; [...]
render() {
const { showMiscellaneous, showPhotography } = this.state
return (
&lt;Template&gt;
&lt;div&gt;
&lt;Helmet&gt;
&lt;meta charSet="utf-8"/&gt;
&lt;title&gt;Amber Wilkie, Software Engineer&lt;/title&gt;
&lt;/Helmet&gt;
&lt;section id="aboutMe" className="main style1"&gt;
&lt;div className="grid-wrapper"&gt;
&lt;div className="col-6"&gt;
&lt;header className="major"&gt;
&lt;h2&gt;About Me&lt;/h2&gt;
&lt;/header&gt;
&lt;p&gt;Hi, it's me...&lt;/p&gt;
&lt;div className='about-me-links' &gt;
&lt;a href='http://www.medium.com/@heyamberwilkie'&gt;Tech Blog&lt;/a&gt;
{this.ChevronLink('showPhotography', 'Photography')}
{this.ChevronLink('showMiscellaneous', 'Etc')}
&lt;/div&gt;
&lt;/div&gt;
&lt;div className="col-6"&gt;
&lt;span className="image fit"&gt;
&lt;img src={me} alt="Amber near Dresden, Germany"/&gt;
&lt;/span&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/section&gt;
{showPhotography &amp;&amp; &lt;Photography /&gt;}
{showMiscellaneous &amp;&amp; &lt;Miscellaneous/&gt;}
&lt;/div&gt;
&lt;/Template&gt;
)
}
}
export default IndexPage;</code></pre><p>Everything is pretty basic React stuff here: some spans that toggle sections of the site, imports/exports, you know this stuff. The only thing you might pay attention to is that we must import and then reference imported elements. I can’t “link” a local image: at build time, those references are generated dynamically. If you want to reference any of your assets, you’ll need to import them.</p><h3 id="data-fetching">Data fetching</h3><p>The most interesting component in my site is <code>Photography</code> . Again, I’ve removed some code and …ed others to make room for the important bits.</p><pre><code class="language-js">import React, { Component } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { CSSTransition } from 'react-transition-group'
import { travelDescriptions } from '../utilities/constants'
class Photography extends Component {
state = {
currentImage: this.props.data.Images.edges[0].node,
imageIndex: 0,
}
changeImage = () =&gt; [...]
render() {
const { currentImage } = this.state
const imageSizes = currentImage.childImageSharp.sizes
const imageName = currentImage.name
return (
&lt;section id="photography" className="main style2"&gt;
&lt;div className="grid-wrapper"&gt;
&lt;div className='col-3'&gt;
&lt;header className="major"&gt;
&lt;h2&gt;Photography&lt;/h2&gt;
&lt;/header&gt;
&lt;CSSTransition&gt;
[... photo descriptions ...]
&lt;/CSSTransition&gt;
&lt;/div&gt;
&lt;div className="col-9 image-holder"&gt;
&lt;div key={imageName}&gt;
&lt;div className='left' onClick={() =&gt; this.changeImage(-1)}/&gt;
&lt;Img
title={imageName}
alt={imageName}
sizes={imageSizes}
className="border-radius"
/&gt;
&lt;div className='right' onClick={() =&gt; this.changeImage(1)}/&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/section&gt;
)
}
}
const query = graphql`
query imagesQuery {
Images: allFile(
sort: {order: ASC, fields: [absolutePath]}
filter: {relativePath: {regex: "/travel/"}}
) {
edges {
node {
relativePath
name
childImageSharp {
sizes(maxWidth: 1500) {
...GatsbyImageSharpSizes
}
}
}
}
}
}
`
export default () =&gt; &lt;StaticQuery
query={query}
render={data =&gt; &lt;Photography data={data}/&gt;}
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
