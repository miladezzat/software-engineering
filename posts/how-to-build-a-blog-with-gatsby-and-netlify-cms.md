---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c984e740569d1a4ca1946.jpg"
tags: [Web Development]
description: "In this article, we are going to build a blog with Gatsby and"
author: "Milad E. Fahmy"
title: "How to Build a Blog with Gatsby and Netlify CMS – A Complete Guide"
created: "2021-08-16T10:04:33+02:00"
modified: "2021-08-16T10:04:33+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-web-development tag-blog tag-gatsby tag-netlify tag-cms ">
<header class="post-full-header">
<h1 class="post-full-title">How to Build a Blog with Gatsby and Netlify CMS – A Complete Guide</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c984e740569d1a4ca1946.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c984e740569d1a4ca1946.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c984e740569d1a4ca1946.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c984e740569d1a4ca1946.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c984e740569d1a4ca1946.jpg" alt="How to Build a Blog with Gatsby and Netlify CMS – A Complete Guide">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>In this article, we are going to build a blog with Gatsby and Netlify CMS. You will learn how to install Gatsby on your computer and use it to quickly develop a super fast blog site.</p><p>You are also going to learn how to add Netlify CMS to your site by creating and configuring files, then connecting the CMS to your site through user authentication. </p><p>And finally, you'll learn how to access the CMS admin so that you can write your first blog post.</p><p>The complete code for this project can be found <a href="https://github.com/mohammedasker/foodblog">here</a>.</p><p>Here's a brief introduction to these tools.</p><h2 id="what-is-gatsby">What is Gatsby?</h2><p><a href="https://www.gatsbyjs.com/">Gatsby</a> is a free and open-source framework based on React that helps you build fast websites and web apps. It is also a static site generator like Next.js, Hugo, and Jekyll.</p><p>It includes SEO (Search Engine Optimization), accessibility, and performance optimization from the get-go. This means that it will take you less time to build production-ready web apps than if you were building with React alone.</p><h2 id="what-is-netlify-cms">What is Netlify CMS?</h2><p><a href="https://www.netlifycms.org/">Netlify CMS</a> is a CMS (Content Management System) for static site generators. It is built by the same people who made <a href="https://www.netlify.com/">Netlify</a>. It allows you to create and edit content as if it was WordPress, but it's a much simpler and user-friendly interface.</p><p>The main benefit of Netlify CMS is you don't have to create markdown files every time you want to write a post. This is useful for content writers who don't want to deal with code, text editors, repositories, and anything to do with tech - they can just focus on writing articles.</p><p>Alright, without any further ado, let's start building the blog!</p><p><strong>But before we get going, a quick heads up</strong>: This guide requires prior knowledge of JavaScript and React. If you are not comfortable with these tools yet, I've linked the resources at the end of the article to help you brush up on those skills. </p><p>Even if you're new to those technologies, I tried to make this guide as simple as I was able so you can follow along.</p><h2 id="how-to-set-up-the-environment">How to set up the environment</h2><p>Before we can build Gatsby sites, we have to make sure that we have installed all the right software required for the blog.</p><h3 id="install-node-js">Install Node.js</h3><p>Node.js is an environment that can run JavaScript code outside of a web browser.</p><p>It is a tool that allows you to write backend server code instead of using other programming languages such as Python, Java, or PHP. Gatsby is built with Node.js and that's why we need to install it on our computer.</p><p>To install Node.js, go to the <a href="https://nodejs.org/en/download/">download page</a> and download it based on your operating system. </p><p>When you are done following the installation prompts, open the terminal and run <code>node -v</code> to check if it was installed correctly. Currently, the version should be 12.18.4 and above.</p><h3 id="install-git">Install Git</h3><p>Git is a free and open-source distributed version control system that helps you manage your coding projects efficiently. </p><p>Gatsby starter uses Git to download and install its required files and that's why you need to have Git on your computer.</p><p>To install Git, follow the instructions based on your operating system:</p><ul><li><a href="https://www.atlassian.com/git/tutorials/install-git#mac-os-x">Install Git on Mac OS</a></li><li><a href="https://www.atlassian.com/git/tutorials/install-git#windows">Install Git on Windows</a></li><li><a href="https://www.atlassian.com/git/tutorials/install-git#linux">Install Git on Linux</a></li></ul><h3 id="install-gatsby-cli">Install Gatsby CLI</h3><p>Gatsby CLI (Command Line Interface) is the tool that lets you build Gatsby-powered sites. By running this command, we can install any Gatsby sites and the plugins we want.</p><p>To install Gatsby CLI, open the terminal and run this command:</p><pre><code>npm install -g gatsby-cli
</code></pre><p>Once everything is set up successfully then we are ready to build our first Gatsby site.</p><h2 id="how-to-build-a-gatsby-site">How to build a Gatsby site</h2><p>In this guide, we're going to use the default Gatsby starter theme, but you're free to choose any themes on the <a href="https://www.gatsbyjs.com/starters/?v=2">Gatsby starter library</a>. I personally use the <a href="https://github.com/LekoArts/gatsby-starter-minimal-blog">Lekoart theme</a> because the design is minimalist and beautiful, and it has a dark mode.</p><p>In the terminal, run this command to install the new Gatsby blog:</p><pre><code>gatsby new foodblog https://github.com/gatsbyjs/gatsby-starter-blog
</code></pre><p><strong>Note for Windows users</strong>: If you encounter "Error: Command failed with exit code 1: yarnpkg" while creating Gatsby site, see <a href="https://github.com/gatsbyjs/gatsby/issues/26804">this page</a> to troubleshoot it. You may have to clean up dependencies of old yarn installations or follow the Gatsby on Windows instructions.</p><p>What's does this command line mean exactly? Let me explain.</p><ul><li><strong>new</strong> - This is the command line that creates a new Gatsby project</li><li><strong>foodblog</strong> - This is the name of the project. You can name it whatever you want here. I named this project <em>foodblog</em> as an example only.</li><li><strong>The URL</strong> (<a href="https://github.com/gatsbyjs/gatsby-starter-blog">https://github.com/gatsbyjs/gatsby-starter-blog</a>) - This URL specified points to a code repository that holds the starter code you want to use. In other words, I picked the theme for the project.</li></ul><p>Once the installation is complete, we'll run the <code>cd foodblog</code> command which will take us to the location of our project file.</p><pre><code>cd foodblog
</code></pre><p>Then we'll run <code>gatsby develop</code> that will start running on the local machine. Depending on the specs of your computer, it will take a little while before it is fully started.</p><pre><code>gatsby develop
├── src
├── static
├── .gitignore
├── .prettierrc
├── gatsby-browser.js
├── gatsby-config.js
├── gatsby-node.js
├── gatsby-ssr.js
├── LICENSE
├── package-lock.json
├── package.json
└── README.md
</code></pre><p>Do not worry about all these files — we are going to use very few of them here. </p><p>What we are looking for is the <code>static</code> folder. This is the folder where it will form the main structure of the Netlify CMS. </p><p>If your project does not have <code>Static</code> folder, then create the folder at the root directory of your project.</p><p>Inside the <code>static</code> folder, create an <code>admin</code> folder. Inside this folder, create two files <code>index.html</code> and <code>config.yml</code>:</p><pre><code>admin
├ index.html
└ config.yml
</code></pre><p>The first file, <code>index.html</code>, is the entry point to your CMS admin. This is where Netlify CMS lives. You don't need to do styling or anything as it is already done for you with the script tag in the example below:</p><pre><code class="language-html">&lt;!doctype html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;meta charset="utf-8" /&gt;
&lt;meta name="viewport" content="width=device-width, initial-scale=1.0" /&gt;
&lt;title&gt;Content Manager&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;script src="https://unpkg.com/netlify-cms@^2.0.0/dist/netlify-cms.js"&gt;&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><p>The second file, <code>config.yml</code>, is the main core of the Netlify CMS. It's going to be a bit complicated as we are going to write backend code. We'll talk more about it in the configuration section.</p><h3 id="how-to-configure-the-back-end">How to configure the back end</h3><p>In this guide, we are using Netlify for hosting and authentication and so the backend configuration process should be relatively straightforward. Add all the code snippets in this section to your <code>admin/config.yml</code> file.</p><p>We'll begin by adding the following codes:</p><pre><code class="language-yml">backend:
name: git-gateway
branch: master
</code></pre><p><strong>Heads up</strong>: This code above works for GitHub and GitLab repositories. If you're using Bitbucket to host your repository, follow these <a href="https://www.netlifycms.org/docs/bitbucket-backend/">instructions</a> instead.</p><p>The code we just wrote specifies your backend protocol and your publication branch (which is branch: master). Git Gateway is an open-source API that acts as a proxy between authenticated users of your site and your site repository. I'll explain more what this does in the authentication section.</p><p>Next up, we will write <code>media_folder: "images/uploads"</code>. This will allow you to add media files like photos directly to your CMS. Then you won't need to use a text editor to manually add media and all that.</p><pre><code class="language-yml">media_folder: "images/uploads"
</code></pre><p>Make sure you created a folder called <code>images</code> in the <code>admin</code> folder. Inside the <code>images</code> folder, create an <code>uploads</code> folder as this is the place where you'll host your images.</p><h3 id="configure-collections">Configure Collections</h3><p>The collections will define the structure for the different content types on your static site. As every site can be different, how you configure the collection's settings will differ from one site to another.</p><p>Let's just say your site has a blog, with the posts stored in <code>content/blog</code>, and files saved in a date-title format, like <code>2020-09-26-how-to-make-sandwiches-like-a-pro.md</code>. Each post begins with settings in the YAML-formatted front matter in this way:</p><pre><code class="language-md">---
layout: blog
title: "How to make sandwiches like a pro"
date: 2020-09-26 11:59:59
thumbnail: "/images/sandwich.jpg"
---
This is the post body where I write about how to make a sandwich so good that will impress Gordon Ramsay.
</code></pre><p>With this example above, this is how you will add <code>collections</code> settings to your Netlify CMS <code>config.yml</code> file:</p><pre><code class="language-yml">collections:
- name: "blog"
label: "Blog"
folder: "content/blog"
create: true
slug: "{{year}}-{{month}}-{{day}}-{{slug}}"
fields:
- {label: "Layout", name: "layout", widget: "hidden", default: "blog"}
- {label: "Title", name: "title", widget: "string"}
- {label: "Publish Date", name: "date", widget: "datetime"}
- {label: "Body", name: "body", widget: "markdown"}
</code></pre><p>Let's examine what each of these fields does:</p><ul><li><code>name</code>: &nbsp;This one is used in routes like /admin/collections/blog</li><li><code>label</code>: This one is used in the UI (User Interface). When you are in the admin page, you will see a big word "Blog" on the top of the screen. That big word "Blog" is the label.</li><li><code>folder</code>: This one points to the file path where your blog posts are stored.</li><li><code>create</code>: This one lets the user (you or whoever has admin access) create new documents (blog posts in this case) in these collections.</li><li><code>slug</code>: This one is the template for filenames. <code>{{year}}</code>, <code>{{month}}</code>, and <code>{{day}}</code> which are pulled from the post's date field or save date. <code>{{slug}}</code> is a URL-safe version of the post's title. By default it is <code>{{slug}}</code>.</li></ul><p>The fields are where you can customize the content editor (the page where you write the blog post). You can add stuff like ratings (1-5), featured images, meta descriptions, and so on.</p><p>For instance, in this particular code, we add curly braces <code>{}</code>. Inside them we write <code>label</code> with the value "Publish Date" which will be the label in the editor UI. </p><p>The <code>name</code> field is the name of the field in the front matter and we name it "date" since the purpose of this field is to enter the date input.</p><p>And lastly, the widget determines how the UI style will look and the type of data we can enter. In this case, we wrote <code>"datetime"</code> which means we can only enter the date and time.</p><pre><code class="language-yml">- {label: "Publish Date", name: "date", widget: "datetime"}
</code></pre><p>You can check the list right <a href="https://www.netlifycms.org/docs/widgets/">here</a> to see what exactly you can add. If you want, you can even create your own widgets, too. For the sake of brevity, we'll try to keep things simple here.</p><h3 id="enable-authentication">Enable Authentication</h3><p>At this point, we are nearly done with the installation and configuration of Netlify CMS. Now it's time to connect your Gatsby site to the CMS by enabling authentication. </p><p>We'll add some HTML code and then activate some features from Netlify. After that, you are on the way to creating your first blog post.</p><p>We are going to need a way to connect a front end interface to the backend so that we can handle authentication. To do that, add this HTML script tag to two files:</p><pre><code class="language-html">&lt;script src="https://identity.netlify.com/v1/netlify-identity-widget.js"&gt;&lt;/script&gt;
</code></pre><p>The first file to add this script tag is the <code>admin/index.html</code> file. Place it between the <code>&lt;head&gt;</code> tags. And the second file to add the tag is the <code>public/index.html</code> file. This one also goes in between the <code>&lt;head&gt;</code> tags.</p><p>When a user logs in with the Netlify Identity widget, an access token directs them to the site homepage. In order to complete the login and get back to the CMS, redirect the user back to the <code>/admin/</code> path.</p><p>To do this, add the following code before the closing <code>body</code> tag of the <code>public/index.html</code> file:</p><pre><code class="language-html">&lt;script&gt;
if (window.netlifyIdentity) {
window.netlifyIdentity.on("init", user =&gt; {
if (!user) {
window.netlifyIdentity.on("login", () =&gt; {
document.location.href = "/admin/";
});
}
});
}
&lt;/script&gt;
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
