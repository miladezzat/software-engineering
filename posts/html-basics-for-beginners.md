---
card: "/images/default.jpg"
tags: [Web Development]
description: "If you want to build a website, the first language that you n"
author: "Milad E. Fahmy"
title: "Learn HTML Basics for Beginners in Just 15 Minutes"
created: "2021-08-16T10:04:14+02:00"
modified: "2021-08-16T10:04:14+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-web-development tag-html tag-beginners-guide ">
<header class="post-full-header">
<h1 class="post-full-title">Learn HTML Basics for Beginners in Just 15 Minutes</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2021/01/Ep10_html.png 300w,
/news/content/images/size/w600/2021/01/Ep10_html.png 600w,
/news/content/images/size/w1000/2021/01/Ep10_html.png 1000w,
/news/content/images/size/w2000/2021/01/Ep10_html.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2021/01/Ep10_html.png" alt="Learn HTML Basics for Beginners in Just 15 Minutes">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
&lt;h4&gt;My list:&lt;/h4&gt;
&lt;ul&gt;
&lt;li&gt;Apple&lt;/li&gt;
&lt;li&gt;Orange&lt;/li&gt;
&lt;li&gt;Banana&lt;/li&gt;
&lt;/ul&gt;
&lt;/div&gt;
</code></pre><p>These elements are used to organize the content into different sections. They are usually self-explanatory, for example, <code>&lt;header&gt;</code> usually represents a group of the introduction and navigation section, <code>&lt;nav&gt;</code> represents the section that contains navigation links, and so on.</p><h4 id="text-content">Text content</h4><pre><code class="language-html">  &lt;h1&gt; to &lt;h6&gt;, &lt;p&gt;, &lt;div&gt;, &lt;span&gt;, &lt;ul&gt;, &lt;ol&gt;, &lt;li&gt;
</code></pre><p>These elements are used to organize content or text blocks. They are important to accessibility and SEO. They tell the browser the purpose or structure of the content.</p><h4 id="forms">Forms</h4><pre><code class="language-html">  &lt;form&gt;, &lt;input&gt;, &lt;button&gt;, &lt;label&gt;, &lt;textarea&gt;
</code></pre><p>These elements can be used together to create forms that users can fill out and submit. Forms might be the trickiest part of HTML.</p><h4 id="images-and-links">Images and Links</h4><pre><code class="language-html">  &lt;img&gt;, &lt;a&gt;
</code></pre><p>These elements are used to insert an image or create a hyperlink.</p><h4 id="others">Others</h4><pre><code class="language-html">  &lt;br&gt;, &lt;hr&gt;
&lt;!-- &lt;p&gt;I am not showing.&lt;/p&gt; --&gt;
</code></pre><p>The purpose of comments is to include notes in the code to explain your logic or simply to organize your code. </p><p>HTML comments are wrapped in the special markers: <code>&lt;!-- and --&gt;</code> and they are ignored in the browser.</p><h2 id="how-to-use-html-entities">How to use HTML entities</h2><p>What if you want to show the text: <code>the &lt;p&gt; tag defines a paragraph.</code>, but the browser interprets <code>&lt;p&gt;</code> as an opening tag for a new element? In this case, we can use HTML entities like in the following example:</p><pre><code class="language-html">&lt;p&gt;the &lt;p&gt; tag defines a paragraph.&lt;/p&gt;
&lt;p&gt;the &amp;lt;p&amp;gt; define a paragraph.&lt;/p&gt;
</code></pre><h2 id="how-to-use-emoji-in-html">How to use emoji in HTML</h2><p>In the modern web, we can display emoji in HTML pretty easily, like this: 👻</p><pre><code class="language-html">&lt;p&gt;😀 Grinning Face.&lt;/p&gt;
&lt;p&gt;🎂&nbsp;Birthday&lt;/p&gt;
</code></pre><h2 id="common-beginner-mistakes-in-html">Common beginner mistakes in HTML</h2><h3 id="1-tags-element-names">1. Tags/Element names</h3><p>Tags/Element names are cAse-inSensitive. This means that they can be written in lowercase or uppercase, but it is recommended that you write everything in lowercase: <code>&lt;button&gt;</code> not <code>&lt;ButTon&gt;</code>.</p><h3 id="2-closing-tag">2. Closing tag</h3><p>Failing to include a closing tag is a common beginner error. Therefore, whenever you create an opening tag, immediately put in a closing tag.</p><h3 id="3-nesting">3. Nesting</h3><p>This is wrong:</p><pre><code class="language-html">&lt;div&gt;Div 1 &lt;span&gt; Span 2 &lt;/div&gt;&lt;/span&gt;
</code></pre><p>The tags have to open and close in a way that they are inside or outside one another.</p><h3 id="4-single-quotes-and-double-quotes">4. Single quotes and Double quotes</h3><p>This is wrong:</p><pre><code class="language-html">&lt;img src="https://images.unsplash.com/'&gt;
</code></pre><p>You cannot mix single quotes and double-quotes. You should always use double quotes and use HTML entities if needed.</p><h2 id="how-to-build-a-simple-website-with-html">How to build a simple website with HTML</h2><p>Individual HTML elements are not enough to create a website. So let's see what more we need to build a simple website from scratch.</p><h3 id="how-to-create-an-html-document">How to create an HTML document</h3><p>First, let's open <a href="https://code.visualstudio.com/">Visual Studio Code</a> (or your favorite code editor). In the folder of your choice, create a new file and name it index.html.</p><p>In the index.html file, type ! (exclamation mark) and press enter. You will see something like this:</p><pre><code class="language-html">&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
&lt;meta charset="UTF-8"&gt;
&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
&lt;title&gt;Document&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><p>This is the minimal code that an HTML document should have to make up a website. And here we have:</p><ol><li><code>&lt;!DOCTYPE html&gt;</code>: First we have Doctype. For some weird historical reason in HTML we have to include the doctype for everything to work correctly.</li><li><code>&lt;html lang="en"&gt;&lt;/html&gt;</code>: The <code>&lt;html&gt;</code> element wraps all the content on the page, also known as the root element. And we should always include the <code>lang</code> attribute to declare the language of the page.</li><li><code>&lt;head&gt;&lt;/head&gt;</code>: The <code>&lt;head&gt;</code> element is a container for everything you want to include, but not content that you show to your users.</li><li><code>&lt;meta charset="UTF-8" /&gt;</code>: The first meta element is used to set the character set to be UTF-8, which includes most characters from written languages.</li><li><code>&lt;meta name="viewport" content="width=device-width, initial-scale=1.0" /&gt;</code>: The second meta element specifies the browser viewport. This setting is for a mobile-optimized site.</li><li><code>&lt;title&gt;Document&lt;/title&gt;</code>: This is the <code>&lt;title&gt;</code> element. It sets the title of the page.</li><li> <code>&lt;body&gt;&lt;/body&gt;</code>: The <code>&lt;body&gt;</code> element contains all the content on the page.</li></ol><h3 id="how-to-build-a-pancake-recipe-page">How to build a pancake recipe page</h3><p>Alright, now that we have the starter code, let's build a pancake recipe page. We are going to use the content from this <a href="https://www.allrecipes.com/recipe/21014/good-old-fashioned-pancakes/">AllRecipes Page</a>.</p><p>First, let's give the <code>&lt;title&gt;</code> element content of the pancakes recipe. You will see the text on the web page tab change. In the <code>&lt;body&gt;</code> element, let's create 3 elements: <code>&lt;header&gt;</code>, <code>&lt;main&gt;</code> and <code>&lt;footer&gt;</code> representing 3 sections.</p><h4 id="1-build-the-header-section">1. Build the header section</h4><p>In the header, we want to have the logo and the navigation. Therefore, let's create a <code>div</code> with the content <code>ALL RECIPE</code> for the logo.</p><p>For the navigation, let's use the <code>&lt;nav&gt;</code> element. Within the <code>&lt;nav&gt;</code> element, we can use <code>&lt;ul&gt;</code> to create an unordered list. We want to have 3 <code>&lt;li&gt;</code> elements for 3 links: Ingredients, Steps, and Subscribe. The header code looks like this:</p><pre><code class="language-html">...
&lt;header&gt;
&lt;div&gt;ALL RECIPE&lt;/div&gt;
&lt;nav&gt;
&lt;ul&gt;
&lt;li&gt;&lt;a href="#ingredients"&gt;Ingredients&lt;/a&gt;&lt;/li&gt;
&lt;li&gt;&lt;a href="#steps"&gt;Steps&lt;/a&gt;&lt;/li&gt;
&lt;li&gt;&lt;a href="#subsribe"&gt;Subscribe&lt;/a&gt;&lt;/li&gt;
&lt;/ul&gt;
&lt;/nav&gt;
&lt;/header&gt;
...
</code></pre><h4 id="2-build-the-main-section">2. Build the Main Section</h4><p>In the main section, first, we want to have a title and an image. We can use <code>h1</code> for the title and <code>&lt;img&gt;</code> for the image (we can use an image from <a href="https://images.unsplash.com/">Unsplash</a> for free):</p><pre><code class="language-html">...
&lt;main&gt;
&lt;h1&gt;Good Old Fashioned Pancakes&lt;/h1&gt;
&lt;img
src="https://images.unsplash.com/photo-1575853121743-60c24f0a7502"
alt="pancake"
width="250"
/&gt;
&lt;/main&gt;
...
</code></pre><p>Next, we want to list all the ingredients. We can use <code>&lt;ol&gt;</code> to create an ordered list and <code>&lt;input type="checkbox" /&gt;</code> to create a checkbox.</p><p>But before that, we can use <code>&lt;h2&gt;</code> to start a new content block. We also want to add the <code>id</code> attribute for <code>&lt;h2&gt;</code> so that the link in the navigation knows where to go:</p><pre><code class="language-html">...
&lt;main&gt;
...
&lt;h2 id="ingredients"&gt;Ingredients&lt;/h2&gt;
&lt;ol&gt;
&lt;li&gt;&lt;input type="checkbox" /&gt; 1 ½ cups all-purpose flour&lt;/li&gt;
&lt;li&gt;&lt;input type="checkbox" /&gt; 3 ½ teaspoons baking powder&lt;/li&gt;
&lt;li&gt;&lt;input type="checkbox" /&gt; 1 teaspoon salt&lt;/li&gt;
&lt;li&gt;&lt;input type="checkbox" /&gt; 1 tablespoon white sugar&lt;/li&gt;
&lt;li&gt;&lt;input type="checkbox" /&gt; 1 ¼ cups milk&lt;/li&gt;
&lt;li&gt;&lt;input type="checkbox" /&gt; 1 egg&lt;/li&gt;
&lt;/ol&gt;
&lt;/main&gt;
...
</code></pre><p>After the ingredients, we want to list all the steps. We can use <code>&lt;h4&gt;</code> for the step heading and <code>&lt;p&gt;</code> for the step content:</p><pre><code class="language-html">...
&lt;main&gt;
...
&lt;h2 id="steps"&gt;Steps&lt;/h2&gt;
&lt;h4&gt;Step 1&lt;/h4&gt;
&lt;p&gt;
In a large bowl, sift together the flour, baking powder, salt and sugar.
Make a well in the center and pour in the milk, egg and melted butter;
mix until smooth.
&lt;/p&gt;
&lt;h4&gt;Step 2&lt;/h4&gt;
&lt;p&gt;
Heat a lightly oiled griddle or frying pan over medium-high heat. Pour
or scoop the batter onto the griddle, using approximately 1/4 cup for
each pancake. Brown on both sides and serve hot.
&lt;/p&gt;
&lt;/main&gt;
...
</code></pre><p>Alright, now that we are done with the main section, let's move on to the footer section.</p><h4 id="3-build-the-footer-section">3. Build the Footer Section</h4><p>In the footer, we want to have a subscribe form and copyright text.</p><p>For the subscribe form, we can use the <code>&lt;form&gt;</code> element. Inside it, we can have an <code>&lt;input type="text"&gt;</code> for text input and a <code>&lt;button&gt;</code> for the submit button.</p><p>For the copyright text, we can simply use a <code>&lt;div&gt;</code>. Notice here, we can use the HTML entity <code>$copy;</code> for the copyright symbol.</p><p>We can add <code>&lt;br&gt;</code> to add some space between the subscribe form and the copyright text:</p><pre><code class="language-html">...
&lt;footer&gt;
&lt;h6 id="subscribe"&gt;Subscribe&lt;/h6&gt;
&lt;form onsubmit="alert('Subscribed')"&gt;
&lt;input type="text" placeholder="Enter Email Address" /&gt;
&lt;button&gt;Submit&lt;/button&gt;
&lt;/form&gt;
&lt;br /&gt;
&lt;div&gt;&amp;copy; dakota kelly at Allrecipe.com&lt;/div&gt;
&lt;/footer&gt;
...
</code></pre><p>Alright now we are done! Here is the full code for reference:</p><pre><code class="language-html">&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
&lt;meta charset="UTF-8" /&gt;
&lt;meta name="viewport" content="width=device-width, initial-scale=1.0" /&gt;
&lt;title&gt;Pancake Recipe&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;header&gt;
&lt;div&gt;ALL RECIPE&lt;/div&gt;
&lt;nav&gt;
&lt;ul&gt;
&lt;li&gt;&lt;a href="#ingredients"&gt;Ingredients&lt;/a&gt;&lt;/li&gt;
&lt;li&gt;&lt;a href="#steps"&gt;Steps&lt;/a&gt;&lt;/li&gt;
&lt;li&gt;&lt;a href="#subsribe"&gt;Subscribe&lt;/a&gt;&lt;/li&gt;
&lt;/ul&gt;
&lt;/nav&gt;
&lt;/header&gt;
&lt;main&gt;
&lt;h1&gt;Good Old Fashioned Pancakes&lt;/h1&gt;
&lt;img
src="https://images.unsplash.com/photo-1575853121743-60c24f0a7502?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cGFuY2FrZXxlbnwwfHwwfA%3D%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=700&amp;q=60"
alt="pancake"
width="250"
/&gt;
&lt;h2 id="ingredients"&gt;Ingredients&lt;/h2&gt;
&lt;ol&gt;
&lt;li&gt;&lt;input type="checkbox" /&gt; 1 ½ cups all-purpose flour&lt;/li&gt;
&lt;li&gt;&lt;input type="checkbox" /&gt; 3 ½ teaspoons baking powder&lt;/li&gt;
&lt;li&gt;&lt;input type="checkbox" /&gt; 1 teaspoon salt&lt;/li&gt;
&lt;li&gt;&lt;input type="checkbox" /&gt; 1 tablespoon white sugar&lt;/li&gt;
&lt;li&gt;&lt;input type="checkbox" /&gt; 1 ¼ cups milk&lt;/li&gt;
&lt;li&gt;&lt;input type="checkbox" /&gt; 1 egg&lt;/li&gt;
&lt;/ol&gt;
&lt;h2 id="steps"&gt;Steps&lt;/h2&gt;
&lt;h4&gt;Step 1&lt;/h4&gt;
&lt;p&gt;
In a large bowl, sift together the flour, baking powder, salt and sugar.
Make a well in the center and pour in the milk, egg and melted butter;
mix until smooth.
&lt;/p&gt;
&lt;h4&gt;Step 2&lt;/h4&gt;
&lt;p&gt;
Heat a lightly oiled griddle or frying pan over medium-high heat. Pour
or scoop the batter onto the griddle, using approximately 1/4 cup for
each pancake. Brown on both sides and serve hot.
&lt;/p&gt;
&lt;/main&gt;
&lt;hr /&gt;
&lt;footer&gt;
&lt;h6 id="subscribe"&gt;Subscribe&lt;/h6&gt;
&lt;form onsubmit="alert('Subscribed')"&gt;
&lt;input type="text" placeholder="Enter Email Address" /&gt;
&lt;button&gt;Submit&lt;/button&gt;
&lt;/form&gt;
&lt;br /&gt;
&lt;div&gt;&amp;copy; dakota kelly at Allrecipe.com&lt;/div&gt;
&lt;/footer&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><h2 id="conclusion">Conclusion</h2><p>You can build a simple website with just HTML. But to be able to build beautiful and functional websites, you need to study CSS and JavaScript. </p><p>You can follow me on social media or Youtube for future updates on these topics. But meanwhile, you can check out the <a href="https://www.freecodecamp.org/learn">freeCodeCamp Curriculum</a> to practice HTML by solving small tasks. </p><p>Otherwise, stay happy coding and see you in future posts 👋.<br><br>__________ 🐣 About me __________</p><ul><li>I am the founder of <a href="https://devchallenges.io/">DevChallenges</a></li><li>Subscribe to <a href="https://www.youtube.com/c/thunghiem">my Channel</a></li><li>Follow <a href="https://twitter.com/thunghiemdinh">my Twitter</a></li><li>Join <a href="https://discord.com/invite/3R6vFeM">Discord</a></li></ul>
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
