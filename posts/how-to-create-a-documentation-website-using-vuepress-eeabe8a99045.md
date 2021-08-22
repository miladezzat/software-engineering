---
card: "https://cdn-media-1.freecodecamp.org/images/0*X9CAsPdZZiLOM0Jm"
tags: [JavaScript]
description: "Creating documentation website for your newest project can be"
author: "Milad E. Fahmy"
title: "How to create a documentation website using VuePress"
created: "2021-08-16T10:09:50+02:00"
modified: "2021-08-16T10:09:50+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-vuejs tag-web-development tag-documentation tag-tech ">
<header class="post-full-header">
<h1 class="post-full-title">How to create a documentation website using VuePress</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/0*X9CAsPdZZiLOM0Jm 300w,
https://cdn-media-1.freecodecamp.org/images/0*X9CAsPdZZiLOM0Jm 600w,
https://cdn-media-1.freecodecamp.org/images/0*X9CAsPdZZiLOM0Jm 1000w,
https://cdn-media-1.freecodecamp.org/images/0*X9CAsPdZZiLOM0Jm 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/0*X9CAsPdZZiLOM0Jm" alt="How to create a documentation website using VuePress">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
|-- README.md
|-- .vuepress
|-- config.js</code></pre><p>Now we will create a Javascript object which we can use for specifying our configurations. In it we will specify a title and a description:</p><pre><code class="language-js">module.exports = {
title: 'Hello VuePress',
description: 'Just playing around'
}</code></pre><p>If you take a look at the website now, you should see that it has a header with a title in it. If you inspect the website using the developer-tools you should see a <em>meta description tag</em> in the header.</p><h3 id="default-theme">Default theme</h3><p>As mentioned at the beginning of the article, VuePress comes with a default theme for things like the homepage, navbar, sidebar and many more.</p><p>The default theme has a classic documentation site look (at least to me) and is really helpful for providing a starting point for your website’s style.</p><p>You can get the default theme from the <a href="https://vuepress.vuejs.org/theme/default-theme-config.html#homepage" rel="noopener">VuePress documentation</a>.</p><p>For styling the homepage, YAML front matter is used, and the only thing we need to do is to copy and paste it into our root README.md file.</p><p>So now our root README.md file looks something like:</p><pre><code class="language-md">---
home: true
heroImage: https://vuepress.vuejs.org/hero.png
actionText: Get Started →
actionLink: /guide/
features:
- title: Simplicity First
details: Minimal setup with markdown-centered project structure helps you focus on writing.
- title: Vue-Powered
details: Enjoy the dev experience of Vue + webpack, use Vue components in markdown, and develop custom themes with Vue.
- title: Performant
details: VuePress generates pre-rendered static HTML for each page, and runs as an SPA once a page is loaded.
footer: MIT Licensed | Copyright © 2018-present Evan You
---
title: 'Hello VuePress',
description: 'Just playing around',
themeConfig: {
nav: [
{ text: 'Home', link: '/' },
{ text: 'Guide', link: '/guide/' },
{ text: 'External', link: 'https://google.com' },
]
}
|-- README.md
|-- .vuepress
|-- config.js
|-- guide
|-- README.md</code></pre><p>As the content of the README.md file, we will just enter some headlines and lorem ipsum text.</p><pre><code class="language-md"># Guide
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
## This is awesome
title: 'Hello VuePress',
description: 'Just playing around',
themeConfig: {
nav: [
{ text: 'Home', link: '/' },
{ text: 'Guide', link: '/guide/' },
{ text: 'External', link: 'https://google.com' },
],
sidebar: 'auto'
}
More Informations about our awesome project</code></pre><p>If you take a look at the sidebar again you see that nothing changed. So the auto setting doesn’t work for additional markdown files. For this we need to change our sidebar code as follows:</p><pre><code class="language-js">module.exports = {
title: 'Hello VuePress',
description: 'Just playing around',
themeConfig: {
nav: [
{ text: 'Home', link: '/' },
{ text: 'Guide', link: '/guide/' },
{ text: 'External', link: 'https://google.com' },
],
sidebar: {
'/guide/': [
'',
'More Informations'
]
}
}
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
