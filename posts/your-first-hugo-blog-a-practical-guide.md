---
card: "/images/default.jpg"
tags: [Hugo]
description: "Hugo is a great tool to use if you want to start a blog."
author: "Milad E. Fahmy"
title: "How to Create Your First Hugo Blog: a Practical Guide"
created: "2021-08-20T13:33:02+02:00"
modified: "2021-08-20T13:33:02+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-hugo tag-blog tag-technical-writing ">
<header class="post-full-header">
<h1 class="post-full-title">How to Create Your First Hugo Blog: a Practical Guide</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/01/Screen-Shot-2020-01-03-at-20.05.40.png 300w,
/news/content/images/size/w600/2020/01/Screen-Shot-2020-01-03-at-20.05.40.png 600w,
/news/content/images/size/w1000/2020/01/Screen-Shot-2020-01-03-at-20.05.40.png 1000w,
/news/content/images/size/w2000/2020/01/Screen-Shot-2020-01-03-at-20.05.40.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/01/Screen-Shot-2020-01-03-at-20.05.40.png" alt="How to Create Your First Hugo Blog: a Practical Guide">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Hugo is a great tool to use if you want to start a blog.</p><p>I use Hugo myself for my blog, <a href="https://flaviocopes.com/">flaviocopes.com</a>, and I've been using it for more than two years. I have a few reasons for loving Hugo.</p><p>First of all, it is <strong>simple</strong>, <strong>boring</strong>, <strong>flexible</strong>, and <strong>fast</strong>.</p><p>The main reason is that it is <strong>simple</strong>. There’s not much you have to learn to get started.</p><p>You write content in Markdown, a format that lets me use my favorite editor (Bear) to write posts.</p><p>Hugo is <strong>boring</strong>. Don’t get me wrong, this is a very positive thing. As a developer I am tempted to tweak things here and there all the time. There’s no fancy technology underlying Hugo. It’s built using Go, one of the languages I love the most, but that does not mean I want to dive into the internals of Hugo and change how it works.</p><p>And it does not surface any cool or next-generation stuff like many JavaScript frameworks tend to do.</p><p>Hence it is boring, which gives me a lot of time to do what is really useful when working on a blog: <strong>writing content</strong>. I focus on the content, not on the content container.</p><p>That said, Hugo is pretty darn <strong>flexible</strong>. I started my own blog with an open source theme, then changed it completely over time. Sometimes I want to do things in my website that are out of the scope of a simple blog, and Hugo allows me to create those things.</p><p>Finally, another reason I love Hugo is that it is <strong>fast</strong>. Why? First, it has Go at the core, which is known to be a very fast language. And in the Go ecosystem, there’s no concept of 100 megabytes dependencies. Things are made to be as fast as possible. Plus, Hugo does not need to do some of the fancy stuff that is needed when using fancy technology. This is a by-product of being boring.</p><p>Anyway, enough with words.</p><p>Hugo is amazing, especially if you are a developer and you’re willing to write in Markdown. Non-tech people might just refuse to use Markdown, and it’s perfectly understandable.</p><p>Also, you have to be prepared for a Git-centric workflow to make things really click.</p><p>This is the process for writing a blog: </p><ul><li>write a post using Markdown, </li><li>then commit your changes to a Git repository, most commonly on GitHub, </li><li>and then some glue technology deploys the changes on the server that hosts the site.</li></ul><h2 id="hosting-a-hugo-website">Hosting a Hugo website</h2><p>A Hugo blog is completely <strong>static</strong>. This means you don’t need to host your own server, or use a special service for it.</p><p>Netlify, Now and GitHub Pages are three great places where you can host a Hugo blog, for free.</p><p>The only cost is the one you have to sustain for the domain name. I can’t stress enough the importance of having your own domain name. No <code>.github.io</code> or <code>.netlify.com</code> or <code>.now.sh</code> sites, please.</p><p>My own Hugo sites are hosted on Netlify.</p><h2 id="choose-a-domain">Choose a domain</h2><p>Put your blog under your own domain. Pick one. Use your own name. And use <code>.com</code> or <code>.blog</code>. Don’t try to be clever by using a localized domain - for example, don’t use <code>.io</code>. <code>.com</code> just gives a better impression and it’s reusable for all your future projects, not just to host your blog. I picked that one.</p><p>Oh and if you have an old domain lying around, just use that. Why? The older your domain is, the better.</p><p>Note on subdomains: every subdomain, to Google, is a different website. So if your domain is <code>flaviocopes.com</code>, and you create your blog in <code>blog.flaviocopes.com</code>, then that’s a completely new website to Google, and it will have its own ranking separate from the main domain.</p><p>My suggestion is to avoid subdomains completely.</p><h2 id="install-hugo">Install Hugo</h2><p>To install Hugo on macOS, from your terminal run</p><pre><code class="language-bash">brew install hugo
</code></pre><p><em><em>The <code>brew</code> command does not exist on your Mac? Check the <a href="https://flaviocopes.com/homebrew/">Homebrew guide</a></em>.</em></p><p>For Windows and Linux, check the <a href="https://gohugo.io/getting-started/installing/">official installation guide</a>.</p><h2 id="create-a-hugo-site">Create a Hugo site</h2><p>Once Hugo is installed, you can create a Hugo site by running</p><pre><code class="language-bash">hugo new site myblog
title = "My blog"
theme = "ghostwriter"
[Params]
mainSections = ["post"]
intro = true
headline = "My headline"
description = "My description"
github = "https://github.com/XXX"
twitter = "https://twitter.com/XXX"
email = "XXX@example.com"
opengraph = true
shareTwitter = true
dateFormat = "Mon, Jan 2, 2006"
[Permalinks]
post = "/:filename/"
</code></pre><p>You can freely customize the information in this file later.</p><p>Now from the command line, run:</p><pre><code class="language-bash">hugo serve
.site-title a, .button-square {
background: black;
}
a {
color: black;
}
&lt;/style&gt;
"scripts": {
"build": "hugo"
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
