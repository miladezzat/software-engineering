---
card: "/images/default.jpg"
tags: [HTML]
description: "Welcome! I wrote this book to help you quickly learn HTML and"
author: "Milad E. Fahmy"
title: "The HTML Handbook"
created: "2021-08-15T22:50:17+02:00"
modified: "2021-08-15T22:50:17+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-html tag-books ">
<header class="post-full-header">
<h1 class="post-full-title">The HTML Handbook</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2019/07/Screen-Shot-2019-07-21-at-11.20.52-1.png 300w,
/news/content/images/size/w600/2019/07/Screen-Shot-2019-07-21-at-11.20.52-1.png 600w,
/news/content/images/size/w1000/2019/07/Screen-Shot-2019-07-21-at-11.20.52-1.png 1000w,
/news/content/images/size/w2000/2019/07/Screen-Shot-2019-07-21-at-11.20.52-1.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2019/07/Screen-Shot-2019-07-21-at-11.20.52-1.png" alt="The HTML Handbook">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<h1 id="introduction">Introduction</h1><p>Welcome! I wrote this book to help you quickly learn HTML and get familiar with the advanced HTML topics.</p><p>HTML, a shorthand for Hyper Text Markup Language, is one of the most fundamental building blocks of the Web.</p><p>HTML was officially born in 1993 and since then it evolved into its current state, moving from simple text documents to powering rich Web Applications.</p><p>This handbook is aimed at a vast audience.</p><p>First, the beginner. I explain HTML from zero in a succinct but comprehensive way, so you can use this book to learn HTML from the basics.</p><p>Then, the professional. HTML is often considered like a secondary thing to learn. It might be given for granted.</p><p>Yet lots of things are obscure to many people. Me included. I wrote this handbook to help my understanding of the topic, because when I need to explain something, I better make sure I first know the thing inside out.</p><p>Even if you don't write HTML in your day to day work, knowing how HTML works can help save you some headaches when you need to understand it from time to time, for example while tweaking a web page.</p><p>You can reach me on Twitter <a href="https://twitter.com/flaviocopes">@flaviocopes</a>.</p><p>My website is <a href="https://flaviocopes.com/">flaviocopes.com</a>.</p><p><a href="https://flaviocopes.com/page/html-handbook/">Note: you can download a PDF / ePub / Mobi version of this book so you can read it offline.</a></p><h2 id="book-index"><strong><strong>Book Index</strong></strong></h2><ul><li><a href="#preface">Preface</a></li><li><a href="#html-basics">HTML Basics</a></li><li><a href="#the-document-heading">The document heading</a></li><li><a href="#the-document-body">The document body</a></li><li><a href="#tags-that-interact-with-text">Tags that interact with text</a></li><li><a href="#links">Links</a></li><li><a href="#container-tags-and-page-structure-html">Container tags and page structure HTML</a></li><li><a href="#forms">Forms</a></li><li><a href="#tables">Tables</a></li><li><a href="#multimedia-tags-audio-and-video">Multimedia tags: audio and video</a></li><li><a href="#iframes">iframes</a></li><li><a href="#images">Images</a></li><li><a href="#accessibility">Accessibility</a></li></ul><h1 id="preface">PREFACE</h1><p>HTML is the foundation of the marvel called the Web.</p><p>There is an incredible power underneath this rather simple and limited set of rules, which lets us -- developers, makers, designers, writers, and tinkerers -- craft documents, apps, and experiences for people all around the globe.</p><p>My first HTML book came out in 1997 and was called "HTML Unleashed". A big, lots-of-pages, long tome.</p><p>20+ years have passed, and HTML is still the foundation of the Web, with minimal changes from back then.</p><p>Sure, we got more semantic tags, presentational HTML is no longer a thing, and CSS has taken care of the design of things.</p><p>HTML's success is based on one thing: <strong><strong>simplicity</strong></strong>.</p><p>It resisted being hijacked into an XML dialect via XHTML, when eventually people realized that thing was way, way too complex.</p><p>It did so because of another feature it provides us: <strong><strong>forgiveness</strong></strong>. There are <em><em>some</em></em> rules, right, but after you learn those, you have a lot of freedom.</p><p>Browsers learned to be resilient and to always try to do their best when parsing and presenting HTML to the users.</p><p>And the whole Web platform did one thing right: it never broke backward compatibility. Pretty incredibly, we can go back to HTML documents written in 1991, and they look pretty much as they looked back then.</p><p>We even know what the first web page was. It's this: <a href="http://info.cern.ch/hypertext/WWW/TheProject.html">http://info.cern.ch/hypertext/WWW/TheProject.html</a></p><p>And you can see the source of the page, thanks to another big feature of the Web and HTML: <strong><strong>we can inspect the HTML of any web page</strong></strong>.</p><p>Don't take this for granted. I don't know any other platform that gives us this ability.</p><p>The exceptional Developer Tools built into any browser let us inspect and take inspiration from HTML written by anyone in the world.</p><p>If you are new to HTML this book aims to help you get started. If you are a seasoned Web Developer this book will improve your knowledge.</p><p>I learned so much while writing it, even though I've been working with the Web for 20+ years, and I'm sure you'll find something new, too.</p><p>Or you'll re-learn something old you forgot.</p><p>In any case, the goal of the book is to be useful to you, and I hope it succeeds.</p><h2 id="html-basics">HTML BASICS</h2><p>HTML is a standard defined by the <strong><strong>WHATWG</strong></strong>, an acronym for Web Hypertext Application Technology Working Group, an organization formed by people working on the most popular web browser. This means it's basically controlled by Google, Mozilla, Apple and Microsoft.</p><p>In the past the <strong><strong>W3C</strong></strong> (World Wide Web Consortium) was the organization in charge of creating the HTML standard.</p><p>The control informally moved from W3C to WHATWG when it became clear that the W3C push towards XHTML was not a good idea.</p><p>If you've never heard of XHTML, here's a short story. In the early 2000s, we all believed the future of the Web was XML (seriously). So HTML moved from being an SGML-based authoring language to an XML markup language.</p><p>It was a big change. We had to know, and respect, more rules. Stricter rules.</p><p>Eventually browser vendors realized this was not the right path for the Web, and they pushed back, creating what is now known as HTML5.</p><p>W3C did not really agree on giving up control of HTML, and for years we had 2 competing standards, each one aiming to be the official one. Eventually on 28 May 2019 it was made official by W3C that the "true" HTML version was the one published by WHATWG.</p><p>I mentioned HTML5. Let me explain this little story. I know, it's kind of confusing up to now, as with many things in life when many actors are involved, yet it's also fascinating.</p><p>We had <strong><strong>HTML version 1</strong></strong> in 1993. <a href="https://tools.ietf.org/html/rfc1983">Here's the original RFC</a>.</p><p><strong><strong>HTML 2</strong></strong> followed in 1995.</p><p>We got <strong><strong>HTML 3</strong></strong> in January 1997, and <strong><strong>HTML 4</strong></strong> in December 1997.</p><p>Busy times!</p><p>20+ years went by, we had this entire XHTML thing, and eventually we got to this HTML5 "thing", which is not really <em><em>just HTML</em></em> any more.</p><p>HTML5 is a term that now defines a whole set of technologies, which includes HTML but adds a lot of APIs and standards like WebGL, SVG and more.</p><p>The key thing to understand here is this: there is no such thing (any more) as an HTML version now. It's a living standard. Like CSS, which is called "3", but in reality is a bunch of independent modules developed separately. Like JavaScript, where we have one new edition each year, but nowadays, the only thing that matters is which individual features are implemented by the engine.</p><p>Yes we call it HTML5, but HTML4 is from 1997. That's a long time for anything, let alone for the web.</p><p>This is where the standard now "lives": <a href="https://html.spec.whatwg.org/multipage">https://html.spec.whatwg.org/multipage</a>.</p><p>HTML is the markup language we use to structure content that we consume on the Web.</p><p>HTML is served to the browser in different ways.</p><ul><li>It can be generated by a server-side application that builds it depending on the request or the session data, for example a Rails or Laravel or Django application.</li><li>It can be generated by a JavaScript client-side application that generates HTML on the fly.</li><li>In the simplest case, it can be stored in a file and served to the browser by a Web server.</li></ul><p>Let's dive into this last case. Although in practice it's probably the least popular way to generate HTML, it's still essential to know the basic building blocks.</p><p>By convention, an HTML file is saved with a <code>.html</code> or <code>.htm</code> extension.</p><p>Inside this file, we organize the content using <strong><strong>tags</strong></strong>.</p><p>Tags wrap the content, and each tag gives a special meaning to the text it wraps.</p><p>Let's make a few examples.</p><p>This HTML snippet creates a paragraph using the <code>p</code> tag:</p><pre><code class="language-html">&lt;p&gt;A paragraph of text&lt;/p&gt;
</code></pre><p>This HTML snippet creates a list of items using the <code>ul</code> tag, which means <em><em>unordered list</em></em>, and the <code>li</code>tags, which mean <em><em>list item</em></em>:</p><pre><code class="language-html">&lt;ul&gt;
&lt;li&gt;First item&lt;/li&gt;
&lt;li&gt;Second item&lt;/li&gt;
&lt;li&gt;Third item&lt;/li&gt;
&lt;/ul&gt;
</code></pre><p>When an HTML page is served by the browser, the tags are interpreted, and the browser renders the elements according to the rules that define their visual appearance.</p><p>Some of those rules are built-in, such as how a list renders or how a link is underlined in blue.</p><p>Some other rules are set by you with CSS.</p><p>HTML is not presentational. It's not concerned with how things <em><em>look</em></em>. Instead, it's concerned with what things <em><em>mean</em></em>.</p><p>It's up to the browser to determine how things look, with the directives defined by who builds the page, with the CSS language.</p><p>Now, those two examples I made are HTML snippets taken outside of a page context.</p><h3 id="html-page-structure"><strong><strong>HTML page structure</strong></strong></h3><p>Let's make an example of a proper HTML page.</p><p>Things start with the Document Type Declaration (aka <em><em>doctype</em></em>), a way to tell the browser this is an HTML page, and which version of HTML we are using.</p><p>Modern HTML uses this doctype:</p><pre><code class="language-html">&lt;!DOCTYPE html&gt;
</code></pre><p>Then we have the <code>html</code> element, which has an opening and closing tag:</p><pre><code class="language-html">&lt;!DOCTYPE html&gt;
&lt;html&gt;
...
&lt;/html&gt;
</code></pre><p>Most tags come in pairs with an opening tag and a closing tag. The closing tag is written the same as the opening tag, but with a <code>/</code>:</p><pre><code class="language-html">&lt;sometag&gt;some content&lt;/sometag&gt;
</code></pre><p>There are a few self-closing tags, which means they don't need a separate closing tag as they don't contain anything <em><em>in them</em></em>.</p><p>The <code>html</code> starting tag is used at the beginning of the document, right after the document type declaration.</p><p>The <code>html</code> ending tag is the last thing present in an HTML document.</p><p>Inside the <code>html</code> element we have 2 elements: <code>head</code> and <code>body</code>:</p><pre><code class="language-html">&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
...
&lt;/head&gt;
&lt;body&gt;
...
&lt;/body&gt;
&lt;/html&gt;
</code></pre><p>Inside <code>head</code> we will have tags that are essential to creating a web page, like the title, the metadata, and internal or external CSS and JavaScript. Mostly things that do not directly appear on the page, but only help the browser (or bots like the Google search bot) display it properly.</p><p>Inside <code>body</code> we will have the content of the page. The <strong><strong>visible stuff</strong></strong>.</p><h3 id="tags-vs-elements"><strong><strong>Tags vs elements</strong></strong></h3><p>I mentioned tags and elements. What's the difference?</p><p>Elements have a starting tag and a closing tag. In this example, we use the <code>p</code> starting and closing tags to create a <code>p</code> element:</p><pre><code class="language-html">&lt;p&gt;A paragraph of text&lt;/p&gt;
</code></pre><p>So, an element constitutes the whole <em><em>package</em></em>:</p><ul><li>starting tag</li><li>text content (and possibly other elements)</li><li>closing tag</li></ul><p>If an element has doesn't have a closing tag, it is only written with the starting tag, and it cannot contain any text content.</p><p>That said, I might use the tag or element term in the book meaning the same thing, except if I explicitly mention starting tag or ending tag.</p><h3 id="attributes"><strong><strong>Attributes</strong></strong></h3><p>The starting tag of an element can have special snippets of information we can attach, called <strong><strong>attributes</strong></strong>.</p><p>Attributes have the <code>key="value"</code> syntax:</p><pre><code class="language-html">&lt;p class="a-class"&gt;A paragraph of text&lt;/p&gt;
</code></pre><p>You can also use single quotes, but using double quotes in HTML is a nice convention.</p><p>We can have many of them:</p><pre><code class="language-html">&lt;p class="a-class" id="an-id"&gt;A paragraph of text&lt;/p&gt;
</code></pre><p>and some attributes are boolean, meaning you only need the key:</p><pre><code class="language-html">&lt;script defer src="file.js"&gt;&lt;/script&gt;
</code></pre><p>The <code>class</code> and <code>id</code> attributes are two of the most common you will find used.</p><p>They have a special meaning, and they are useful both in CSS and JavaScript.</p><p>The difference between the two is that an <code>id</code> is unique in the context of a web page; it cannot be duplicated.</p><p>Classes, on the other hand, can appear multiple times on multiple elements.</p><p>Plus, an <code>id</code> is just one value. <code>class</code> can hold multiple values, separated by a space:</p><pre><code class="language-html">&lt;p class="a-class another-class"&gt;A paragraph of text&lt;/p&gt;
</code></pre><p>It's common to use the dash <code>-</code> to separate words in a class value, but it's just a convention.</p><p>Those are just two of the possible attributes you can have. Some attributes are only used for one tag. They are highly specialized.</p><p>Other attributes can be used in a more general way. You just saw <code>id</code> and <code>class</code>, but we have other ones too, like <code>style</code> which can be used to insert inline CSS rules on an element.</p><h3 id="case-insensitive"><strong><strong>Case insensitive</strong></strong></h3><p>HTML is case insensitive. Tags can be written in all caps, or lowercase. In the early days, caps were the norm. Today lowercase is the norm. It is a convention.</p><p>You usually write like this:</p><pre><code class="language-html">&lt;p&gt;A paragraph of text&lt;/p&gt;
</code></pre><p>not like this:</p><pre><code class="language-html">&lt;P&gt;A paragraph of text&lt;/P&gt;
</code></pre><h3 id="white-space"><strong><strong>White space</strong></strong></h3><p>Pretty important. In HTML, even if you add multiple white spaces into a line, it's collapsed by the browser's CSS engine.</p><p>For example the rendering of this paragraph:</p><pre><code class="language-html">&lt;p&gt;A paragraph of text&lt;/p&gt;
</code></pre><p>is the same as this:</p><pre><code class="language-html">&lt;p&gt;  A paragraph of text&lt;/p&gt;
</code></pre><p>and the same as this:</p><pre><code class="language-html">&lt;p&gt;A paragraph
of
text          &lt;/p&gt;
</code></pre><p>&gt;<em> Using the <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/white-space">white-space CSS property</a> you can change how things behave. You can find more information on how CSS processes white space in the <a href="https://www.w3.org/TR/CSS2/text.html#white-space-model">CSS Spec</a></em></p><p>I typically favor</p><pre><code class="language-html">&lt;p&gt;A paragraph of text&lt;/p&gt;
</code></pre><p>or</p><pre><code class="language-html">&lt;p&gt;
A paragraph of text
&lt;/p&gt;
</code></pre><p>Nested tags should be indented with 2 or 4 characters, depending on your preference:</p><pre><code class="language-html">&lt;body&gt;
&lt;p&gt;
A paragraph of text
&lt;/p&gt;
&lt;ul&gt;
&lt;li&gt;A list item&lt;/li&gt;
&lt;/ul&gt;
&lt;/body&gt;
</code></pre><p>Note: this "white space is not relevant" feature means that if you want to add additional space, it can make you pretty mad. I suggest you use CSS to make more space when needed.</p><p>Note: in special cases, you can use the <code>&amp;nbsp;</code> HTML entity (an acronym that means <em><em>non-breaking space</em></em>) - more on HTML entities later on. I think this should not be abused. CSS is always preferred to alter the visual presentation.</p><h2 id="the-document-heading">THE DOCUMENT HEADING</h2><p>The <code>head</code> tag contains special tags that define the document properties.</p><p>It's always written before the <code>body</code> tag, right after the opening <code>html</code> tag:</p><pre><code class="language-html">&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
...
&lt;/head&gt;
...
&lt;/html&gt;
</code></pre><p>We never use attributes on this tag. And we don't write content in it.</p><p>It's just a container for other tags. Inside it we can have a wide variety of tags, depending on what you need to do:</p><ul><li><code>title</code></li><li><code>script</code></li><li><code>noscript</code></li><li><code>link</code></li><li><code>style</code></li><li><code>base</code></li><li><code>meta</code></li></ul><h3 id="the-title-tag"><strong><strong>The <code>title</code> tag</strong></strong></h3><p>The <code>title</code> tag determines the page title. The title is displayed in the browser, and it's especially important as it's one of the key factors for Search Engine Optimization (SEO).</p><h3 id="the-script-tag"><strong><strong>The <code>script</code> tag</strong></strong></h3><p>This tag is used to add JavaScript into the page.</p><p>You can include it inline, using an opening tag, the JavaScript code and then the closing tag:</p><pre><code class="language-html">&lt;script&gt;
..some JS
&lt;/script&gt;
</code></pre><p>Or you can load an external JavaScript file by using the <code>src</code> attribute:</p><pre><code class="language-html">&lt;script src="file.js"&gt;&lt;/script&gt;
</code></pre><p>The <code>type</code> attribute by default is set to <code>text/javascript</code>, so it's completely optional.</p><p>There is something pretty important to know about this tag.</p><p>Sometimes this tag is used at the bottom of the page, just before the closing <code>&lt;/body&gt;</code> tag. Why? For performance reasons.</p><p>Loading scripts by default blocks the rendering of the page until the script is parsed and loaded.</p><p>By putting it at the bottom of the page, the script is loaded and executed after the whole page is already parsed and loaded, giving a better experience to the user over keeping it in the <code>head</code> tag.</p><p>My opinion is that this is now bad practice. Let <code>script</code> live in the <code>head</code> tag.</p><p>In modern JavaScript we have an alternative this is more performant than keeping the script at the bottom of the page -- the <code>defer</code> attribute. This is an example that loads a <code>file.js</code> file, relative to the current URL:</p><pre><code class="language-html">&lt;script defer src="file.js"&gt;&lt;/script&gt;
</code></pre><p>This is the scenario that triggers the faster path to a fast-loading page, and fast-loading JavaScript.</p><p>Note: the <code>async</code> attribute is similar, but in my opinion a worse option than <code>defer</code>. I describe why, in more detail, on page <a href="https://flaviocopes.com/javascript-async-defer/">https://flaviocopes.com/javascript-async-defer/</a></p><h3 id="the-noscript-tag"><strong><strong>The <code>noscript</code> tag</strong></strong></h3><p>This tag is used to detect when scripts are disabled in the browser.</p><p>Note: users can choose to disable JavaScript scripts in the browser settings. Or the browser might not support them by default.</p><p>It is used differently depending on whether it's put in the document head or in the document body.</p><p>We're talking about the document head now, so let's first introduce this usage.</p><p>In this case, the <code>noscript</code> tag can only contain other tags:</p><ul><li><code>link</code> tags</li><li><code>style</code> tags</li><li><code>meta</code> tags</li></ul><p>to alter the resources served by the page, or the <code>meta</code> information, if scripts are disabled.</p><p>In this example I set an element with the <code>no-script-alert</code> class to display if scripts are disabled, as it was <code>display: none</code> by default:</p><pre><code class="language-html">&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
...
&lt;noscript&gt;
&lt;style&gt;
.no-script-alert {
display: block;
}
&lt;/style&gt;
&lt;/noscript&gt;
...
&lt;/head&gt;
...
&lt;/html&gt;
</code></pre><p>Let's solve the other case: if put in the body, it can contain content, like paragraphs and other tags, which are rendered in the UI.</p><h3 id="the-link-tag"><strong><strong>The <code>link</code> tag</strong></strong></h3><p>The <code>link</code> tag is used to set relationships between a document and other resources.</p><p>It's mainly used to link an external CSS file to be loaded.</p><p>This element has no closing tag.</p><p>Usage:</p><pre><code class="language-html">&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
...
&lt;link href="file.css" rel="stylesheet"&gt;
...
&lt;/head&gt;
...
&lt;/html&gt;
</code></pre><p>The <code>media</code> attribute allows the loading of different stylesheets depending on the device capabilities:</p><pre><code class="language-html">&lt;link href="file.css" media="screen" rel="stylesheet"&gt;
&lt;link href="print.css" media="print" rel="stylesheet"&gt;
</code></pre><p>We can also link to resources other than stylesheets.</p><p>For example we can associate an RSS feed using</p><pre><code class="language-html">&lt;link rel="alternate" type="application/rss+xml" href="/index.xml"&gt;
</code></pre><p>Or we can associate a favicon using:</p><pre><code class="language-html">&lt;link rel="apple-touch-icon" sizes="180x180" href="/assets/apple-touch-icon.png"&gt;
&lt;link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon-32x32.png"&gt;
&lt;link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon-16x16.png"&gt;
</code></pre><p>This tag <em><em>was</em></em> also used for multi-page content, to indicate the previous and next page using <code>rel="prev"</code> and <code>rel="next"</code>. Mostly for Google. As of 2019, <a href="https://twitter.com/googlewmc/status/1108726443251519489">Google announced it does not use this tag any more</a> because it can find the correct page structure without it.</p><h3 id="the-style-tag"><strong><strong>The <code>style</code> tag</strong></strong></h3><p>This tag can be used to add styles into the document, rather than loading an external stylesheet.</p><p>Usage:</p><pre><code class="language-html">&lt;style&gt;
.some-css {}
&lt;/style&gt;
</code></pre><p>As with the <code>link</code> tag, you can use the <code>media</code> attribute to use that CSS only on the specified medium:</p><pre><code class="language-html">&lt;style media="print"&gt;
.some-css {}
&lt;/style&gt;
</code></pre><h3 id="the-base-tag"><strong><strong>The <code>base</code> tag</strong></strong></h3><p>This tag is used to set a base URL for all relative URLs contained in the page.</p><pre><code class="language-html">&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
...
&lt;base href="https://flaviocopes.com/"&gt;
...
&lt;/head&gt;
...
&lt;/html&gt;
</code></pre><h3 id="the-meta-tag"><strong><strong>The <code>meta</code> tag</strong></strong></h3><p>Meta tags perform a variety of tasks and they are very, very important.</p><p>Especially for SEO.</p><p><code>meta</code> elements only have the starting tag.</p><p>The most basic one is the <code>description</code> meta tag:</p><pre><code class="language-html">&lt;meta name="description" content="A nice page"&gt;
</code></pre><p>This <em><em>might</em></em> be used by Google to generate the page description in its result pages, if it finds it better describes the page than the on-page content (don't ask me how).</p><p>The <code>charset</code> meta tag is used to set the page character encoding. <code>utf-8</code> in most cases:</p><pre><code class="language-html">&lt;meta charset="utf-8"&gt;
</code></pre><p>The <code>robots</code> meta tag instructs the Search Engine bots whether to index a page or not:</p><pre><code class="language-html">&lt;meta name="robots" content="noindex"&gt;
</code></pre><p>Or if they should follow links or not:</p><pre><code class="language-html">&lt;meta name="robots" content="nofollow"&gt;
</code></pre><p>You can set nofollow on individual links, too. This is how you can set <code>nofollow</code> globally.</p><p>You can combine them:</p><pre><code class="language-html">&lt;meta name="robots" content="noindex, nofollow"&gt;
</code></pre><p>The default behavior is <code>index, follow</code>.</p><p>You can use other properties, including <code>nosnippet</code>, <code>noarchive</code>, <code>noimageindex</code> and more.</p><p>You can also just tell Google instead of targeting <em><em>all</em></em> search engines:</p><pre><code class="language-html">&lt;meta name="googlebot" content="noindex, nofollow"&gt;
</code></pre><p>And other search engines might have their own meta tag, too.</p><p>Speaking of which, we can tell Google to disable some features. This prevents the translate functionality in the search engine results:</p><pre><code class="language-html">&lt;meta name="google" content="notranslate"&gt;
</code></pre><p>The <code>viewport</code> meta tag is used to tell the browser to set the page width based on the device width.</p><pre><code class="language-html">&lt;meta name="viewport" content="width=device-width, initial-scale=1"&gt;
</code></pre><p><a href="https://developer.mozilla.org/en-US/docs/Mozilla/Mobile/Viewport_meta_tag">See more about this tag</a>.</p><p>Another rather popular meta tag is the <code>http-equiv="refresh"</code> one. This line tells the browser to wait 3 seconds, then redirect to that other page:</p><pre><code class="language-html">&lt;meta http-equiv="refresh" content="3;url=http://flaviocopes.com/another-page"&gt;
</code></pre><p>Using 0 instead of 3 will redirect as soon as possible.</p><p>This is not a full reference; Other less-used meta tags exist.</p><p>After this document heading introduction, we can start diving into the document body.</p><h2 id="the-document-body">THE DOCUMENT BODY</h2><p>After the closing head tag, we can only have one thing in an HTML document: the <code>body</code> element.</p><pre><code class="language-html">&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
...
&lt;/head&gt;
&lt;body&gt;
...
&lt;/body&gt;
&lt;/html&gt;
</code></pre><p>Just like the <code>head</code> and <code>html</code> tags, we can only have one <code>body</code> tag in one page.</p><p>Inside the <code>body</code> tag we have all the tags that define the content of the page.</p><p>Technically, the start and ending tags are optional. But I consider it a good practice to add them. Just for clarity.</p><p>In the next chapters we'll define the variety of tags you can use inside the page body.</p><p>But before, we must introduce a difference between block elements and inline elements.</p><h2 id="block-elements-vs-inline-elements"><strong><strong>Block elements vs inline elements</strong></strong></h2><p>Visual elements, the ones defined in the page body, can be generally classified in 2 categories:</p><ul><li>block elements (<code>p</code>, <code>div</code>, heading elements, lists and list items, ...)</li><li>inline elements (<code>a</code>, <code>span</code>, <code>img</code>, ...)</li></ul><p>What is the difference?</p><p>Block elements, when positioned in the page, do not allow other elements next to them. To the left, or to the right.</p><p>Inline elements instead can sit next to other inline elements.</p><p>The difference also lies in the visual properties we can edit using CSS. We can alter the width/height, margin, padding and border of block elements. We can't do that for inline elements.</p><p>Note that using CSS we can change the default for each element, setting a <code>p</code> tag to be inline, for example, or a <code>span</code> to be a block element.</p><p>Another difference is that inline elements can be contained in block elements. The reverse is not true.</p><p>Some block elements can contain other block elements, but it depends. The <code>p</code> tag for example does not allow such option.</p><h1 id="tags-that-interact-with-text"><strong><strong>TAGS THAT INTERACT WITH TEXT</strong></strong></h1><h2 id="the-p-tag"><strong><strong>The <code>p</code> tag</strong></strong></h2><p>This tag defines a paragraph of text.</p><pre><code class="language-html">&lt;p&gt;Some text&lt;/p&gt;
</code></pre><p>It's a block element.</p><p>Inside it, we can add any inline element we like, like <code>span</code> or <code>a</code>.</p><p>We cannot add block elements.</p><p>We cannot nest a <code>p</code> element into another one.</p><p>By default browsers style a paragraph with a margin on top and at the bottom. <code>16px</code> in Chrome, but the exact value might vary between browsers.</p><p>This causes two consecutive paragraphs to be spaced, replicating what we think of a "paragraph" in printed text.</p><h2 id="the-span-tag"><strong><strong>The <code>span</code> tag</strong></strong></h2><p>This is an inline tag that can be used to create a section in a paragraph that can be targeted using CSS:</p><pre><code class="language-html">&lt;p&gt;A part of the text &lt;span&gt;and here another part&lt;/span&gt;&lt;/p&gt;
</code></pre><h2 id="the-br-tag"><strong><strong>The <code>br</code> tag</strong></strong></h2><p>This tag represents a line break. It's an inline element, and does not need a closing tag.</p><p>We use it to create a new line inside a <code>p</code> tag, without creating a new paragraph.</p><p>And compared to creating a new paragraph, it does not add additional spacing.</p><pre><code class="language-html">&lt;p&gt;Some text&lt;br&gt;A new line&lt;/p&gt;
font-family: monospace;
}
</code></pre><p>This tag is typically wrapped in a <code>pre</code> tag, because the <code>code</code> element ignores whitespace and line breaks. Like the <code>p</code> tag.</p><p>Chrome gives <code>pre</code> this default styling:</p><pre><code class="language-css">pre {
display: block;
font-family: monospace;
white-space: pre;
margin: 1em 0px;
}
</code></pre><p>which prevents white space collapsing and makes it a block element.</p><h2 id="lists"><strong><strong>Lists</strong></strong></h2><p>We have 3 types of lists:</p><ul><li>unordered lists</li><li>ordered lists</li><li>definition lists</li></ul><p>Unordered lists are created using the <code>ul</code> tag. Each item in the list is created with the <code>li</code> tag:</p><pre><code class="language-html">&lt;ul&gt;
&lt;li&gt;First&lt;/li&gt;
&lt;li&gt;Second&lt;/li&gt;
&lt;/ul&gt;
</code></pre><p>Ordered lists are similar, just made with the <code>ol</code> tag:</p><pre><code class="language-html">&lt;ol&gt;
&lt;li&gt;First&lt;/li&gt;
&lt;li&gt;Second&lt;/li&gt;
&lt;/ol&gt;
&lt;dt&gt;Flavio&lt;/dt&gt;
&lt;dd&gt;The name&lt;/dd&gt;
&lt;dt&gt;Copes&lt;/dt&gt;
&lt;dd&gt;The surname&lt;/dd&gt;
&lt;/dl&gt;
</code></pre><p>Between the starting and closing tag we have the link text.</p><p>The above example is an absolute URL. Links also work with relative URLs:</p><pre><code class="language-html">&lt;a href="/test"&gt;click here&lt;/a&gt;
</code></pre><p>In this case, when clicking the link the user is moved to the <code>/test</code> URL on the current origin.</p><p>Be careful with the <code>/</code> character. If omitted, instead of starting from the origin, the browser will just add the <code>test</code> string to the current URL.</p><p>Example, I'm on the page <code>https://flaviocopes.com/axios/</code> and I have these links:</p><ul><li><code>/test</code> once clicked brings me to <code>https://flaviocopes.com/test</code></li><li><code>test</code> once clicked brings me to <code>https://flaviocopes.com/axios/test</code></li></ul><p>Link tags can include other things inside them, not just text. For example, images:</p><pre><code class="language-html">&lt;a href="https://flaviocopes.com"&gt;
&lt;img src="test.jpg"&gt;
&lt;/a&gt;
</code></pre><p>or any other elements, except other <code>&lt;a&gt;</code> tags.</p><p>If you want to open the link in a new tab, you can use the <code>target</code> attribute:</p><pre><code class="language-html">&lt;a href="https://flaviocopes.com" target="_blank"&gt;open in new tab&lt;/a&gt;
</code></pre><h1 id="container-tags-and-page-structure-html"><strong><strong>CONTAINER TAGS AND PAGE STRUCTURE HTML</strong></strong></h1><h2 id="container-tags"><strong><strong>Container tags</strong></strong></h2><p>HTML provides a set of container tags. Those tags can contain an unspecified set of other tags.</p><p>We have:</p><ul><li><code>article</code></li><li><code>section</code></li><li><code>div</code></li></ul><p>and it can be confusing to understand the difference between them.</p><p>Let's see when to use each one of them.</p><h3 id="article"><strong><strong><code>article</code></strong></strong></h3><p>The article tag identifies a <em><em>thing</em></em> that can be independent from other <em><em>things</em></em> in a page.</p><p>For example a list of blog posts in the homepage.</p><p>Or a list of links.</p><pre><code class="language-html">&lt;div&gt;
&lt;article&gt;
&lt;h2&gt;A blog post&lt;/h2&gt;
&lt;a ...&gt;Read more&lt;/a&gt;
&lt;/article&gt;
&lt;article&gt;
&lt;h2&gt;Another blog post&lt;/h2&gt;
&lt;a ...&gt;Read more&lt;/a&gt;
&lt;/article&gt;
&lt;/div&gt;
</code></pre><p>We're not limited to lists: an article can be the main element in a page.</p><pre><code class="language-html">&lt;article&gt;
&lt;h2&gt;A blog post&lt;/h2&gt;
&lt;p&gt;Here is the content...&lt;/p&gt;
&lt;/article&gt;
</code></pre><p>Inside an <code>article</code> tag we should have a title (<code>h1</code>-<code>h6</code>) and</p><h3 id="section"><strong><strong><code>section</code></strong></strong></h3><p>Represents a section of a document. Each section has a heading tag (<code>h1</code>-<code>h6</code>), then the section <em><em>body</em></em>.</p><p>Example:</p><pre><code class="language-html">&lt;section&gt;
&lt;h2&gt;A section of the page&lt;/h2&gt;
&lt;p&gt;...&lt;/p&gt;
&lt;img ...&gt;
&lt;/section&gt;
</code></pre><p>It's useful to break a long article into different <strong><strong>sections</strong></strong>.</p><p>Shouldn't be used as a generic container element. <code>div</code> is made for this.</p><h3 id="div"><strong><strong><code>div</code></strong></strong></h3><p><code>div</code> is the generic container element:</p><pre><code class="language-html">&lt;div&gt;
...
&lt;/div&gt;
</code></pre><p>You often add a <code>class</code> or <code>id</code> attribute to this element, to allow it to be styled using CSS.</p><p>We use <code>div</code> in any place where we need a container but the existing tags are not suited.</p><h2 id="tags-related-to-page"><strong><strong>Tags related to page</strong></strong></h2><h3 id="nav"><strong><strong><code>nav</code></strong></strong></h3><p>This tag is used to create the markup that defines the page navigation. Into this we typically add an <code>ul</code>or <code>ol</code> list:</p><pre><code class="language-html">&lt;nav&gt;
&lt;ol&gt;
&lt;li&gt;&lt;a href="/"&gt;Home&lt;/a&gt;&lt;/li&gt;
&lt;li&gt;&lt;a href="/blog"&gt;Blog&lt;/a&gt;&lt;/li&gt;
&lt;/ol&gt;
&lt;/nav&gt;
</code></pre><h3 id="aside"><strong><strong><code>aside</code></strong></strong></h3><p>The <code>aside</code> tag is used to add a piece of content that is related to the main content.</p><p>A box where to add a quote, for example. Or a sidebar.</p><p>Example:</p><pre><code class="language-html">&lt;div&gt;
&lt;p&gt;some text..&lt;/p&gt;
&lt;aside&gt;
&lt;p&gt;A quote..&lt;/p&gt;
&lt;/aside&gt;
&lt;p&gt;other text...&lt;/p&gt;
&lt;/div&gt;
</code></pre><p>Using <code>aside</code> is a signal that the things it contains are not part of the regular flow of the section it lives into.</p><h3 id="header"><strong><strong><code>header</code></strong></strong></h3><p>The <code>header</code> tag represents a part of the page that is the introduction. It can for example contain one or more heading tag (<code>h1</code>-<code>h6</code>), the tagline for the article, an image.</p><pre><code class="language-html">&lt;article&gt;
&lt;header&gt;
&lt;h1&gt;Article title&lt;/h1&gt;
&lt;/header&gt;
...
&lt;/div&gt;
</code></pre><h3 id="main"><strong><strong><code>main</code></strong></strong></h3><p>The <code>main</code> tag represents the main part of a page:</p><pre><code class="language-html">&lt;body&gt;
....
&lt;main&gt;
&lt;p&gt;....&lt;/p&gt;
&lt;/main&gt;
&lt;/body&gt;
</code></pre><h3 id="footer"><strong><strong><code>footer</code></strong></strong></h3><p>The <code>footer</code> tag is used to determine the footer of an article, or the footer of the page:</p><pre><code class="language-html">&lt;article&gt;
....
&lt;footer&gt;
&lt;p&gt;Footer notes..&lt;/p&gt;
&lt;/footer&gt;
&lt;/div&gt;</code></pre><h1 id="forms"><strong><strong>FORMS</strong></strong></h1><p>Forms are the way you can interact with a page, or an app, built with Web technologies.</p><p>You have a set of controls, and when you submit the form, either with a click to a "submit" button or programmatically, the browser will send the data to the server.</p><p>By default this data sending causes the page to reload after the data is sent, but using JavaScript you can alter this behavior (not going to explain how in this book).</p><p>A form is created using the <code>form</code> tag:</p><pre><code class="language-html">&lt;form&gt;
...
&lt;/form&gt;
</code></pre><p>By default forms are submitted using the GET HTTP method. Which has its drawbacks, and usually you want to use POST.</p><p>You can set the form to use POST when submitted by using the <code>method</code> attribute:</p><pre><code class="language-html">&lt;form method="POST"&gt;
...
&lt;/form&gt;
</code></pre><p>The form is submitted, either using GET or POST, to the same URL where it resides.</p><p>So if the form is in the <code>https://flaviocopes.com/contacts</code> page, pressing the "submit" button will make a request to that same URL.</p><p>Which might result in nothing happening.</p><p>You need something server-side to handle the request, and typically you "listen" for those form submit events on a dedicated URL.</p><p>You can specify the URL via the <code>action</code> parameter:</p><pre><code class="language-html">&lt;form action="/new-contact" method="POST"&gt;
...
&lt;/form&gt;
</code></pre><p>This will cause the browser to submit the form data using POST to the <code>/new-contact</code> URL on the same origin.</p><p>If the origin (protocol + domain + port) is <code>https://flaviocopes.com</code> (port 80 is the default), this means the form data will be sent to <code>https://flaviocopes.com/new-contact</code>.</p><p>I talked about data. Which data?</p><p>Data is provided by users via the set of controls that are available on the Web platform:</p><ul><li>input boxes (single line text)</li><li>text areas (multiline text)</li><li>select boxes (choose one option from a drop-down menu)</li><li>radio buttons (choose one option from a list always visible)</li><li>checkboxes (choose zero, one or more option)</li><li>file uploads</li><li>and more!</li></ul><p>Let's introduce each one of them in the following form fields overview.</p><h2 id="the-input-tag"><strong><strong>The <code>input</code> tag</strong></strong></h2><p>The <code>input</code> field is one of the most widely used form elements. It's also a very versatile element, and it can completely change behavior based on the <code>type</code> attribute.</p><p>The default behavior is to be a single-line text input control:</p><pre><code class="language-html">&lt;input&gt;
</code></pre><p>Equivalent to using:</p><pre><code class="language-html">&lt;input type="text"&gt;
</code></pre><p>As with all the other fields that follow, you need to give the field a name in order for its content to be sent to the server when the form is submitted:</p><pre><code class="language-html">&lt;input type="text" name="username"&gt;
</code></pre><p>The <code>placeholder</code> attribute is used to have some text showing up, in light gray, when the field is empty. Useful to add a hint to the user for what to type in:</p><pre><code class="language-html">&lt;input type="text" name="username" placeholder="Your username"&gt;
</code></pre><h3 id="email"><strong><strong>Email</strong></strong></h3><p>Using <code>type="email"</code> will validate client-side (in the browser) an email for correctness (semantic correctness, not ensuring the email address is existing) before submitting.</p><pre><code class="language-html">&lt;input type="email" name="email" placeholder="Your email"&gt;
</code></pre><h3 id="password"><strong><strong>Password</strong></strong></h3><p>Using <code>type="password"</code> will make every key entered appear as an asterisk (*) or dot, useful for fields that host a password.</p><pre><code class="language-html">&lt;input type="password" name="password" placeholder="Your password"&gt;
</code></pre><h3 id="numbers"><strong><strong>Numbers</strong></strong></h3><p>You can have an input element accept only numbers:</p><pre><code class="language-html">&lt;input type="number" name="age" placeholder="Your age"&gt;
</code></pre><p>You can specify a minimum and maximum value accepted:</p><pre><code class="language-html">&lt;input type="number" name="age" placeholder="Your age" min="18" max="110"&gt;
</code></pre><p>The <code>step</code> attribute helps identify the steps between different values. For example this accepts a value between 10 and 50, at steps of 5:</p><pre><code class="language-html">&lt;input type="number" name="a-number"  min="10" max="50" step="5"&gt;
</code></pre><h3 id="hidden-field"><strong><strong>Hidden field</strong></strong></h3><p>Fields can be hidden from the user. They will still be sent to the server upon the form submit:</p><pre><code class="language-html">&lt;input type="hidden" name="some-hidden-field" value="some-value"&gt;
</code></pre><p>This is commonly used to store values like a CSRF token, used for security and user identification, or even to detect robots sending spam, using special techniques.</p><p>It can also just be used to identify a form and its action.</p><h3 id="setting-a-default-value"><strong><strong>Setting a default value</strong></strong></h3><p>All those fields accept a predefined value. If the user does not change it, this will be the value sent to the server:</p><pre><code class="language-html">&lt;input type="number" name="age" value="18"&gt;
</code></pre><p>If you set a placeholder, that value will appear if the user clears the input field value:</p><pre><code class="language-html">&lt;input type="number" name="age" placeholder="Your age" value="18"&gt;
</code></pre><h2 id="form-submit"><strong><strong>Form submit</strong></strong></h2><p>The <code>type="submit"</code> field is a button that, once pressed by the user, submits the form:</p><pre><code class="language-html">&lt;input type="submit"&gt;
</code></pre><p>The <code>value</code> attribute sets the text on the button, which if missing shows the "Submit" text:</p><pre><code class="language-html">&lt;input type="submit" value="Click me"&gt;
</code></pre><h2 id="form-validation"><strong><strong>Form validation</strong></strong></h2><p>Browsers provide client-side validation functionality to forms.</p><p>You can set fields as required, ensuring they are filled, and enforce a specific format for the input of each field.</p><p>Let's see both options.</p><h3 id="set-fields-as-required"><strong><strong>Set fields as required</strong></strong></h3><p>The <code>required</code> attribute helps you with validation. If the field is not set, client-side validation fails and the browser does not submit the form:</p><pre><code class="language-html">&lt;input type="text" name="username" required&gt;
</code></pre><h3 id="enforce-a-specific-format"><strong><strong>Enforce a specific format</strong></strong></h3><p>I described the <code>type="email"</code> field above. It automatically validates the email address according to a format set in the specification.</p><p>In the <code>type="number"</code> field, I mentioned the <code>min</code> and <code>max</code> attribute to limit values entered to an interval.</p><p>You can do more.</p><p>You can enforce a specific format on any field.</p><p>The <code>pattern</code> attribute gives you the ability to set a regular expression to validate the value against.</p><p>I recommend reading my Regular Expressions Guide at <a href="https://flaviocopes.com/javascript-regular-expressions/">flaviocopes.com/javascript-regular-expressions/</a>.</p><p>pattern="<a href="https://.%2A/">https://.*</a>"</p><pre><code class="language-html">&lt;input type="text" name="username" pattern="[a-zA-Z]{8}"&gt;
</code></pre><h2 id="other-fields"><strong><strong>Other fields</strong></strong></h2><h3 id="file-uploads"><strong><strong>File uploads</strong></strong></h3><p>You can load files from your local computer and send them to the server using a <code>type="file"</code> input element:</p><pre><code class="language-html">&lt;input type="file" name="secret-documents"&gt;
</code></pre><p>You can attach multiple files:</p><pre><code class="language-html">&lt;input type="file" name="secret-documents" multiple&gt;
</code></pre><p>You can specify one or more file types allowed using the <code>accept</code> attribute. This accepts images:</p><pre><code class="language-html">&lt;input type="file" name="secret-documents" accept="image/*"&gt;
</code></pre><p>You can use a specific MIME type, like <code>application/json</code> or set a file extension like <code>.pdf</code>. Or set multiple file extensions, like this:</p><pre><code class="language-html">&lt;input type="file" name="secret-documents" accept=".jpg, .jpeg, .png"&gt;
</code></pre><h3 id="buttons"><strong><strong>Buttons</strong></strong></h3><p>The <code>type="button"</code> input fields can be used to add additional buttons to the form, that are not submit buttons:</p><pre><code class="language-html">&lt;input type="button" value="Click me"&gt;
</code></pre><p>They are used to programmatically do something, using JavaScript.</p><p>There is a special field rendered as a button, whose special action is to clear the entire form and bring back the state of the fields to the initial one:</p><pre><code class="language-html">&lt;input type="reset"&gt;
</code></pre><h3 id="radio-buttons"><strong><strong>Radio buttons</strong></strong></h3><p>Radio buttons are used to create a set of choices, of which one is pressed and all the others are disabled.</p><p>The name comes from old car radios that had this kind of interface.</p><p>You define a set of <code>type="radio"</code> inputs, all with the same <code>name</code> attribute, and different <code>value</code>attribute:</p><pre><code class="language-html">&lt;input type="radio" name="color" value="yellow"&gt;
&lt;input type="radio" name="color" value="red"&gt;
&lt;input type="radio" name="color" value="blue"&gt;
</code></pre><p>Once the form is submitted, the <code>color</code> data property will have one single value.</p><p>There's always one element checked. The first item is the one checked by default.</p><p>You can set the value that's pre-selected using the <code>checked</code> attribute. You can use it only once per radio inputs group.</p><h3 id="checkboxes"><strong><strong>Checkboxes</strong></strong></h3><p>Similar to radio boxes, but they allow multiple values to be chosen, or none at all.</p><p>You define a set of <code>type="checkbox"</code> inputs, all with the same <code>name</code> attribute, and different <code>value</code>attribute:</p><pre><code class="language-html">&lt;input type="checkbox" name="color" value="yellow"&gt;
&lt;input type="checkbox" name="color" value="red"&gt;
&lt;input type="checkbox" name="color" value="blue"&gt;
</code></pre><p>All those checkboxes will be unchecked by default. Use the <code>checked</code> attribute to enable them on page load.</p><p>Since this input field allows multiple values, upon form submit the value(s) will be sent to the server as an array.</p><h3 id="date-and-time"><strong><strong>Date and time</strong></strong></h3><p>We have a few input types to accept date values.</p><p>The <code>type="date"</code> input field allows the user to enter a date, and shows a date picker if needed:</p><pre><code class="language-html">&lt;input type="date" name="birthday"&gt;
</code></pre><p>The <code>type="time"</code> input field allows the user to enter a time, and shows a time picker if needed:</p><pre><code class="language-html">&lt;input type="time" name="time-to-pickup"&gt;
</code></pre><p>The <code>type="month"</code> input field allows the user to enter a month and a year:</p><pre><code class="language-html">&lt;input type="month" name="choose-release-month"&gt;
</code></pre><p>The <code>type="week"</code> input field allows the user to enter a week and a year:</p><pre><code class="language-html">&lt;input type="week" name="choose-week"&gt;
</code></pre><p>All those fields allow to limit the range and the step between each value. I recommend checking MDN for the little details on their usage.</p><p>The <code>type="datetime-local"</code> field lets you choose a date and a time.</p><pre><code class="language-html">&lt;input type="datetime-local" name="date-and-time"&gt;
</code></pre><p>Here is a page to test them all: <a href="https://codepen.io/flaviocopes/pen/ZdWQPm">https://codepen.io/flaviocopes/pen/ZdWQPm</a></p><h3 id="color-picker"><strong><strong>Color picker</strong></strong></h3><p>You can let users pick a color using the <code>type="color"</code> element:</p><pre><code class="language-html">&lt;input type="color" name="car-color"&gt;
</code></pre><p>You set a default value using the <code>value</code> attribute:</p><pre><code class="language-html">&lt;input type="color" name="car-color" value="#000000"&gt;
</code></pre><p>The browser will take care of showing a color picker to the user.</p><h3 id="range"><strong><strong>Range</strong></strong></h3><p>This input element shows a slider element. People can use it to move from a starting value to an ending value:</p><pre><code class="language-html">&lt;input type="range" name="age" min="0" max="100" value="30"&gt;
</code></pre><p>You can provide an optional step:</p><pre><code class="language-html">&lt;input type="range" name="age" min="0" max="100" value="30" step="10"&gt;
</code></pre><h3 id="telephone"><strong><strong>Telephone</strong></strong></h3><p>The <code>type="tel"</code> input field is used to enter a phone number:</p><pre><code class="language-html">&lt;input type="tel" name="telephone-number"&gt;
</code></pre><p>The main selling point for using <code>tel</code> over <code>text</code> is on mobile, where the device can choose to show a numeric keyboard.</p><p>Specify a <code>pattern</code> attribute for additional validation:</p><pre><code class="language-html">&lt;input type="tel" pattern="[0-9]{3}-[0-9]{8}" name="telephone-number"&gt;
</code></pre><h3 id="url"><strong><strong>URL</strong></strong></h3><p>The <code>type="url"</code> field is used to enter a URL.</p><pre><code class="language-html">&lt;input type="url" name="website"&gt;
</code></pre><p>You can validate it using the <code>pattern</code> attribute:</p><pre><code class="language-html">&lt;input type="url" name="website"  pattern="https://.*"&gt;
</code></pre><h2 id="the-textarea-tag"><strong><strong>The <code>textarea</code> tag</strong></strong></h2><p>The <code>textarea</code> element allows users to enter multi-line text. Compared to <code>input</code>, it requires an ending tag:</p><pre><code class="language-html">&lt;textarea&gt;&lt;/textarea&gt;
</code></pre><p>You can set the dimensions using CSS, but also using the <code>rows</code> and <code>cols</code> attributes:</p><pre><code class="language-html">&lt;textarea rows="20" cols="10"&gt;&lt;/textarea&gt;
</code></pre><p>As with the other form tags, the <code>name</code> attribute determines the name in the data sent to the server:</p><pre><code class="language-html">&lt;textarea name="article"&gt;&lt;/textarea&gt;
</code></pre><h2 id="the-select-tag"><strong><strong>The <code>select</code> tag</strong></strong></h2><p>This tag is used to create a drop-down menu.</p><p>The user can choose one of the options available.</p><p>Each option is created using the <code>option</code> tag. You add a name to the select, and a value to each option:</p><pre><code class="language-html">&lt;select name="color"&gt;
&lt;option value="red"&gt;Red&lt;/option&gt;
&lt;option value="yellow"&gt;Yellow&lt;/option&gt;
&lt;/select&gt;
</code></pre><p>You can set an option disabled:</p><pre><code class="language-html">&lt;select name="color"&gt;
&lt;option value="red" disabled&gt;Red&lt;/option&gt;
&lt;option value="yellow"&gt;Yellow&lt;/option&gt;
&lt;/select&gt;
</code></pre><p>You can have one empty option:</p><pre><code class="language-html">&lt;select name="color"&gt;
&lt;option value=""&gt;None&lt;/option&gt;
&lt;option value="red"&gt;Red&lt;/option&gt;
&lt;option value="yellow"&gt;Yellow&lt;/option&gt;
&lt;/select&gt;
</code></pre><p>Options can be grouped using the <code>optgroup</code> tag. Each option group has a <code>label</code> attribute:</p><pre><code class="language-html">&lt;select name="color"&gt;
&lt;optgroup label="Primary"&gt;
&lt;option value="red"&gt;Red&lt;/option&gt;
&lt;option value="yellow"&gt;Yellow&lt;/option&gt;
&lt;option value="blue"&gt;Blue&lt;/option&gt;
&lt;/optgroup&gt;
&lt;optgroup label="Others"&gt;
&lt;option value="green"&gt;Green&lt;/option&gt;
&lt;option value="pink"&gt;Pink&lt;/option&gt;
&lt;/optgroup&gt;
&lt;/select&gt;
</code></pre><h1 id="tables"><strong><strong>TABLES</strong></strong></h1><p>In the early days of the web tables were a very important part of building layouts.</p><p>Later on they were replaced by CSS and its layout capabilities, and today we have powerful tools like CSS Flexbox and CSS Grid to build layouts. Tables are now used just for, guess what, building tables!</p><h3 id="the-table-tag"><strong><strong>The <code>table</code> tag</strong></strong></h3><p>You define a table using the <code>table</code> tag:</p><pre><code class="language-html">&lt;table&gt;
&lt;/table&gt;
</code></pre><p>Inside the table we'll define the data. We reason in terms of rows, which means we add rows into a table (not columns). We'll define columns inside a row.</p><h3 id="rows"><strong><strong>Rows</strong></strong></h3><p>A row is added using the <code>tr</code> tag, and that's the only thing we can add into a <code>table</code> element:</p><pre><code class="language-html">&lt;table&gt;
&lt;tr&gt;&lt;/tr&gt;
&lt;tr&gt;&lt;/tr&gt;
&lt;tr&gt;&lt;/tr&gt;
&lt;/table&gt;
&lt;tr&gt;
&lt;th&gt;Column 1&lt;/th&gt;
&lt;th&gt;Column 2&lt;/th&gt;
&lt;th&gt;Column 3&lt;/th&gt;
&lt;/tr&gt;
&lt;tr&gt;&lt;/tr&gt;
&lt;tr&gt;&lt;/tr&gt;
&lt;/table&gt;
</code></pre><h3 id="the-table-content"><strong><strong>The table content</strong></strong></h3><p>The content of the table is defined using <code>td</code> tags, inside the other <code>tr</code> elements:</p><pre><code class="language-html">&lt;table&gt;
&lt;tr&gt;
&lt;th&gt;Column 1&lt;/th&gt;
&lt;th&gt;Column 2&lt;/th&gt;
&lt;th&gt;Column 3&lt;/th&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;Row 1 Column 1&lt;/td&gt;
&lt;td&gt;Row 1 Column 2&lt;/td&gt;
&lt;td&gt;Row 1 Column 3&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;Row 2 Column 1&lt;/td&gt;
&lt;td&gt;Row 2 Column 2&lt;/td&gt;
&lt;td&gt;Row 2 Column 3&lt;/td&gt;
&lt;/tr&gt;
&lt;/table&gt;
padding: 10px;
border: 1px solid #333;
}
&lt;tr&gt;
&lt;th&gt;Column 1&lt;/th&gt;
&lt;th&gt;Column 2&lt;/th&gt;
&lt;th&gt;Column 3&lt;/th&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td colspan="2"&gt;Row 1 Columns 1-2&lt;/td&gt;
&lt;td&gt;Row 1 Column 3&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td colspan="3"&gt;Row 2 Columns 1-3&lt;/td&gt;
&lt;/tr&gt;
&lt;/table&gt;
&lt;tr&gt;
&lt;th&gt;Column 1&lt;/th&gt;
&lt;th&gt;Column 2&lt;/th&gt;
&lt;th&gt;Column 3&lt;/th&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td colspan="2" rowspan="2"&gt;Rows 1-2 Columns 1-2&lt;/td&gt;
&lt;td&gt;Row 1 Column 3&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;Row 2 Column 3&lt;/td&gt;
&lt;/tr&gt;
&lt;/table&gt;
&lt;tr&gt;
&lt;th&gt;&lt;/th&gt;
&lt;th&gt;Column 2&lt;/th&gt;
&lt;th&gt;Column 3&lt;/th&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;th&gt;Row 1&lt;/th&gt;
&lt;td&gt;Col 2&lt;/td&gt;
&lt;td&gt;Col 3&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;th&gt;Row 2&lt;/th&gt;
&lt;td&gt;Col 2&lt;/td&gt;
&lt;td&gt;Col 3&lt;/td&gt;
&lt;/tr&gt;
&lt;/table&gt;
&lt;thead&gt;
&lt;tr&gt;
&lt;th&gt;&lt;/th&gt;
&lt;th&gt;Column 2&lt;/th&gt;
&lt;th&gt;Column 3&lt;/th&gt;
&lt;/tr&gt;
&lt;/thead&gt;
&lt;tbody&gt;
&lt;tr&gt;
&lt;th&gt;Row 1&lt;/th&gt;
&lt;td&gt;Col 2&lt;/td&gt;
&lt;td&gt;Col 3&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;th&gt;Row 2&lt;/th&gt;
&lt;td&gt;Col 2&lt;/td&gt;
&lt;td&gt;Col 3&lt;/td&gt;
&lt;/tr&gt;
&lt;/tbody&gt;
&lt;tfoot&gt;
&lt;tr&gt;
&lt;td&gt;&lt;/td&gt;
&lt;td&gt;Footer of Col 1&lt;/td&gt;
&lt;td&gt;Footer of Col 2&lt;/td&gt;
&lt;/tr&gt;
&lt;/tfoot&gt;
&lt;/table&gt;
&lt;caption&gt;Dogs age&lt;/caption&gt;
&lt;tr&gt;
&lt;th&gt;Dog&lt;/th&gt;
&lt;th&gt;Age&lt;/th&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;Roger&lt;/td&gt;
&lt;td&gt;7&lt;/td&gt;
&lt;/tr&gt;
&lt;/table&gt;
</code></pre><h1 id="multimedia-tags-audio-and-video"><strong><strong>MULTIMEDIA TAGS: <code>AUDIO</code> AND <code>VIDEO</code></strong></strong></h1><p>In this section I want to show you the <code>audio</code> and <code>video</code> tags.</p><h2 id="the-audio-tag"><strong><strong>The <code>audio</code> tag</strong></strong></h2><p>This tag allows you to embed audio content in your HTML pages.</p><p>This element can stream audio, maybe using a microphone via <code>getUserMedia()</code>, or it can play an audio source which you reference using the <code>src</code> attribute:</p><pre><code class="language-html">&lt;audio src="file.mp3"&gt;
</code></pre><p>By default the browser does not show any controls for this element. Which means the audio will play only if set to autoplay (more on this later) and the user can't see how to stop it or control the volume or move through the track.</p><p>To show the built-in controls, you can add the <code>controls</code> attribute:</p><pre><code class="language-html">&lt;audio src="file.mp3" controls&gt;
</code></pre><p>Controls can have a custom skin.</p><p>You can specify the MIME type of the audio file using the <code>type</code> attribute. If not set, the browser will try to automatically determine it:</p><pre><code class="language-html">&lt;audio src="file.mp3" controls type="audio/mpeg"&gt;
</code></pre><p>An audio file by default does not play automatically. Add the <code>autoplay</code> attribute to play the audio automatically:</p><pre><code class="language-html">&lt;audio src="file.mp3" controls autoplay&gt;
</code></pre><p>Note: mobile browsers don't allow autoplay</p><p>The <code>loop</code> attribute restarts the audio playing at 0:00 if set; otherwise, if not present, the audio stops at the end of the file:</p><pre><code class="language-html">&lt;audio src="file.mp3" controls autoplay loop&gt;
</code></pre><p>You can also play an audio file muted using the <code>muted</code> attribute (not really sure what's the usefulness of this):</p><pre><code class="language-html">&lt;audio src="file.mp3" controls autoplay loop muted&gt;
</code></pre><p>Using JavaScript you can listen for various events happening on an <code>audio</code> element, the most basic of which are:</p><ul><li><code>play</code> when the file starts playing</li><li><code>pause</code> when the audio playing was paused</li><li><code>playing</code> when the audio is resumed from a pause</li><li><code>ended</code> when the end of the audio file was reached</li></ul><h2 id="the-video-tag"><strong><strong>The <code>video</code> tag</strong></strong></h2><p>This tag allows you to embed video content in your HTML pages.</p><p>This element can stream video, using a webcam via <code>getUserMedia()</code> or <strong><strong>WebRTC</strong></strong>, or it can play a video source which you reference using the <code>src</code> attribute:</p><pre><code class="language-html">&lt;video src="file.mp4"&gt;
</code></pre><p>By default the browser does not show any controls for this element, just the video.</p><p>Which means the video will play only if set to autoplay (more on this later) and the user can't see how to stop it, pause it, control the volume or skip to a specific position in the video.</p><p>To show the built-in controls, you can add the <code>controls</code> attribute:</p><pre><code class="language-html">&lt;video src="file.mp4" controls&gt;
</code></pre><p>Controls can have a custom skin.</p><p>You can specify the MIME type of the video file using the <code>type</code> attribute. If not set, the browser will try to automatically determine it:</p><pre><code class="language-html">&lt;video src="file.mp4" controls type="video/mp4"&gt;
</code></pre><p>A video file by default does not play automatically. Add the <code>autoplay</code> attribute to play the video automatically:</p><pre><code class="language-html">&lt;video src="file.mp4" controls autoplay&gt;
</code></pre><p>Some browsers also require the <code>muted</code> attribute to autoplay. The video autoplays only if muted:</p><pre><code class="language-html">&lt;audio src="file.mp3" controls autoplay muted&gt;
</code></pre><p>The <code>loop</code> attribute restarts the video playing at 0:00 if set; otherwise, if not present, the video stops at the end of the file:</p><pre><code class="language-html">&lt;video src="file.mp4" controls autoplay loop&gt;
</code></pre><p>You can set an image to be the poster image:</p><pre><code class="language-html">&lt;video src="file.mp4" poster="picture.png"&gt;
</code></pre><p>If not present, the browser will display the first frame of the video as soon as it's available.</p><p>You can set the <code>width</code> and <code>height</code> attributes to set the space that the element will take so that the browser can account for it and it does not change the layout when it's finally loaded. It takes a numeric value, expressed in pixels.</p><p>Using JavaScript you can listen for various events happening on an <code>video</code> element, the most basic of which are:</p><ul><li><code>play</code> when the file starts playing</li><li><code>pause</code> when the video was paused</li><li><code>playing</code> when the video is resumed from a pause</li><li><code>ended</code> when the end of the video file was reached</li></ul><h1 id="iframes"><strong><strong>IFRAMES</strong></strong></h1><p>The <code>iframe</code> tag allows us to embed content coming from other origins (other sites) into our web page.</p><p>Technically, an iframe creates a new nested browsing context. This means that anything in the iframe does not interfere with the parent page, and vice versa. JavaScript and CSS do not "leak" to/from iframes.</p><p>Many sites use iframes to perform various things. You might be familiar with Codepen, Glitch or other sites that allow you to code in one part of the page, and you see the result in a box. That's an iframe.</p><p>You create one this way:</p><pre><code class="language-html">&lt;iframe src="page.html"&gt;&lt;/iframe&gt;
</code></pre><p>You can load an absolute URL, too:</p><pre><code class="language-html">&lt;iframe src="https://site.com/page.html"&gt;&lt;/iframe&gt;
</code></pre><p>You can set a set of width and height parameters (or set them using CSS) otherwise the iframe will use the defaults, a 300x150 pixels box:</p><pre><code class="language-html">&lt;iframe src="page.html" width="800" height="400"&gt;&lt;/iframe&gt;
</code></pre><h2 id="srcdoc"><strong><strong>Srcdoc</strong></strong></h2><p>The <code>srcdoc</code> attribute lets you specify some inline HTML to show. It's an alternative to <code>src</code>, but recent and not supported in Edge 18 and lower, and in IE:</p><pre><code class="language-html">&lt;iframe srcdoc="&lt;p&gt;My dog is a good dog&lt;/p&gt;"&gt;&lt;/iframe&gt;
</code></pre><h2 id="sandbox"><strong><strong>Sandbox</strong></strong></h2><p>The <code>sandbox</code> attribute allows us to limit the operations allowed in the iframes.</p><p>If we omit it, everything is allowed:</p><pre><code class="language-html">&lt;iframe src="page.html"&gt;&lt;/iframe&gt;
</code></pre><p>If we set it to "", nothing is allowed:</p><pre><code class="language-html">&lt;iframe src="page.html" sandbox=""&gt;&lt;/iframe&gt;
</code></pre><p>We can select what to allow by adding options in the <code>sandbox</code> attribute. You can allow multiple ones by adding a space in between. Here's an incomplete list of the options you can use:</p><ul><li><code>allow-forms</code>: allow to submit forms</li><li><code>allow-modals</code> allow to open modals windows, including calling <code>alert()</code> in JavaScript</li><li><code>allow-orientation-lock</code> allow to lock the screen orientation</li><li><code>allow-popups</code> allow popups, using <code>window.open()</code> and <code>target="_blank"</code> links</li><li><code>allow-same-origin</code> treat the resource being loaded as same origin</li><li><code>allow-scripts</code> lets the loaded iframe run scripts (but not create popups).</li><li><code>allow-top-navigation</code> gives access to the iframe to the top level browsing context</li></ul><h2 id="allow"><strong><strong>Allow</strong></strong></h2><p>Currently experimental and only supported by Chromium-based browsers, this is the future of resource sharing between the parent window and the iframe.</p><p>It's similar to the <code>sandbox</code> attribute, but lets us allow specific features, including:</p><ul><li><code>accelerometer</code> gives access to the Sensors API Accelerometer interface</li><li><code>ambient-light-sensor</code> gives access to the Sensors API AmbientLightSensor interface</li><li><code>autoplay</code> allows to autoplay video and audio files</li><li><code>camera</code> allows to access the camera from the getUserMedia API</li><li><code>display-capture</code> allows to access the screen content using the getDisplayMedia API</li><li><code>fullscreen</code> allows to access fullscreen mode</li><li><code>geolocation</code> allows to access the Geolocation API</li><li><code>gyroscope</code> gives access to the Sensors API Gyroscope interface</li><li><code>magnetometer</code> gives access to the Sensors API Magnetometer interface</li><li><code>microphone</code> gives access to the device microphone using the getUserMedia API</li><li><code>midi</code> allows access to the Web MIDI API</li><li><code>payment</code> gives access to the Payment Request API</li><li><code>speaker</code> allows access to playing audio through the device speakers</li><li><code>usb</code> gives access to the WebUSB API.</li><li><code>vibrate</code> gives access to the Vibration API</li><li><code>vr</code> gives access to the WebVR API</li></ul><h2 id="referrer"><strong><strong>Referrer</strong></strong></h2><p>When loading an iframe, the browser sends it important information about who is loading it in the <code>Referer</code> header (notice the single <code>r</code>, a typo we must live with).</p><p>The misspelling of referrer originated in the original proposal by computer scientist Phillip Hallam-Baker to incorporate the field into the HTTP specification. The misspelling was set in stone by the time of its incorporation into the Request for Comments standards document RFC 1945</p><p>The <code>referrerpolicy</code> attribute lets us set the referrer to send to the iframe when loading it. The referrer is an HTTP header that lets the page know who is loading it. These are the allowed values:</p><ul><li><code>no-referrer-when-downgrade</code> it's the default, and does not send the referrer when the current page is loaded over HTTPS and the iframe loads on the HTTP protocol</li><li><code>no-referrer</code> does not send the referrer header</li><li><code>origin</code> the referrer is sent, and only contains the origin (port, protocol, domain), not the origin + path which is the default</li><li><code>origin-when-cross-origin</code> when loading from the same origin (port, protocol, domain) in the iframe, the referrer is sent in its complete form (origin + path). Otherwise only the origin is sent</li><li><code>same-origin</code> the referrer is sent only when loading from the same origin (port, protocol, domain) in the iframe</li><li><code>strict-origin</code> sends the origin as the referrer if the current page is loaded over HTTPS and the iframe also loads on the HTTPS protocol. Sends nothing if the iframe is loaded over HTTP</li><li><code>strict-origin-when-cross-origin</code> sends the origin + path as the referrer when working on the same origin. Sends the origin as the referrer if the current page is loaded over HTTPS and the iframe also loads on the HTTPS protocol. Sends nothing if the iframe is loaded over HTTP</li><li><code>unsafe-url</code>: sends the origin + path as the referrer even when loading resources from HTTP and the current page is loaded over HTTPS</li></ul><h1 id="images"><strong><strong>IMAGES</strong></strong></h1><p>Images can be displayed using the <code>img</code> tag.</p><p>This tag accepts a <code>src</code> attribute, which we use to set the image source:</p><pre><code class="language-html">&lt;img src="image.png"&gt;
</code></pre><p>We can use a wide set of images. The most common ones are PNG, JPEG, GIF, SVG and more recently WebP.</p><p>The HTML standard requires an <code>alt</code> attribute to be present, to describe the image. This is used by screen readers and also by search engine bots:</p><pre><code class="language-html">&lt;img src="dog.png" alt="A picture of a dog"&gt;
</code></pre><p>You can set the <code>width</code> and <code>height</code> attributes to set the space that the element will take, so that the browser can account for it and it does not change the layout when it's fully loaded. It takes a numeric value, expressed in pixels.</p><pre><code class="language-html">&lt;img src="dog.png" alt="A picture of a dog" width="300" height="200"&gt;
</code></pre><h2 id="the-figure-tag"><strong><strong>The <code>figure</code> tag</strong></strong></h2><p>The <code>figure</code> tag is often used along with the <code>img</code> tag.</p><p><code>figure</code> is a semantic tag often used when you want to display an image with a caption. You use it like this:</p><pre><code class="language-html">&lt;figure&gt;
&lt;img src="dog.png"
alt="A nice dog"&gt;
&lt;figcaption&gt;A nice dog&lt;/figcaption&gt;
&lt;/figure&gt;
</code></pre><p>The <code>figcaption</code> tag wraps the caption text.</p><h2 id="responsive-images-using-srcset"><strong><strong>Responsive images using <code>srcset</code></strong></strong></h2><p>The <code>srcset</code> attribute allows you to set responsive images that the browser can use depending on the pixel density or window width, according to your preferences. This way, it can only download the resources it needs to render the page, without downloading a bigger image if it's on a mobile device, for example.</p><p>Here's an example, where we give 4 additional images for 4 different screen sizes:</p><pre><code class="language-html">&lt;img src="dog.png"
alt="A picture of a dog"
srcset="dog-500.png 500w,
dog-800.png 800w,
dog-1000.png 1000w,
dog-1400.png 1400w"&gt;
</code></pre><p>In the <code>srcset</code> we use the <code>w</code> measure to indicate the window width.</p><p>Since we do so, we also need to use the <code>sizes</code> attribute:</p><pre><code class="language-html">&lt;img src="dog.png"
alt="A picture of a dog"
sizes="(max-width: 500px) 100vw, (max-width: 900px) 50vw, 800px"
srcset="dog-500.png 500w,
dog-800.png 800w,
dog-1000.png 1000w,
dog-1400.png 1400w"&gt;
</code></pre><p>In this example the <code>(max-width: 500px) 100vw, (max-width: 900px) 50vw, 800px</code> string in the <code>sizes</code> attribute describes the size of the image in relation to the viewport, with multiple conditions separated by a semicolon.</p><p>The media condition <code>max-width: 500px</code> sets the size of the image in correlation to the viewport width. In short, if the window size is &lt; 500px, it renders the image at 100% of the window size.</p><p>If the window size is bigger but &lt; <code>900px</code>, it renders the image at 50% of the window size.</p><p>And if even bigger, it renders the image at 800px.</p><p>The <code>vw</code> unit of measure can be new to you, and in short we can say that 1 <code>vw</code> is 1% of the window width, so <code>100vw</code> is 100% of the window width.</p><p>A useful website to generate the <code>srcset</code> and progressively smaller images is <a href="https://responsivebreakpoints.com/">https://responsivebreakpoints.com/</a>.</p><h2 id="the-picture-tag"><strong><strong>The <code>picture</code> tag</strong></strong></h2><p>HTML also gives us the <code>picture</code> tag, which does a very similar job to <code>srcset</code>, and the differences are very subtle.</p><p>You use <code>picture</code> when instead of just serving a smaller version of a file, you completely want to change it. Or serve a different image format.</p><p>The best use case I found is when serving a WebP image, which is a format still not widely supported. In the <code>picture</code> tag you specify a list of images, and they will be used in order, so in the next example, browsers that support WebP will use the first image, and fallback to JPG if not:</p><pre><code class="language-html">&lt;picture&gt;
&lt;source type="image/webp" srcset="image.webp"&gt;
&lt;img src="image.jpg" alt="An image"&gt;
&lt;/picture&gt;
</code></pre><p>The <code>source</code> tag defines one (or more) formats for the images. The <code>img</code> tag is the fallback in case the browser is very old and does not support the <code>picture</code> tag.</p><p>In the <code>source</code> tag inside <code>picture</code> you can add a <code>media</code> attribute to set media queries.</p><p>The example that follows kind of works like the above example with <code>srcset</code>:</p><pre><code class="language-html">&lt;picture&gt;
&lt;source media="(min-width: 500w)" srcset="dog-500.png" sizes="100vw"&gt;
&lt;source media="(min-width: 800w)" srcset="dog-800.png" sizes="100vw"&gt;
&lt;source media="(min-width: 1000w)" srcset="dog-1000.png"    sizes="800px"&gt;
&lt;source media="(min-width: 1400w)" srcset="dog-1400.png"    sizes="800px"&gt;
&lt;img src="dog.png" alt="A dog image"&gt;
&lt;/picture&gt;
</code></pre><p>But that's not its use case, because as you can see it's much more verbose.</p><p>The <code>picture</code> tag is recent but is now <a href="https://caniuse.com/#search=picture">supported</a> by all the major browsers except Opera Mini and IE (all versions).</p><h1 id="accessibility"><strong><strong>ACCESSIBILITY</strong></strong></h1><p>It's important we design our HTML with accessibility in mind.</p><p>Having accessible HTML means that people with disabilities can use the Web. There are totally blind or visually impaired users, people with hearing loss issues and a multitude of other different disabilities.</p><p>Unfortunately this topic does not take the importance it needs, and it doesn't seem as cool as others.</p><p>What if a person can't <em><em>see</em></em> your page, but still wants to consume its content? First, how do they do that? They can't use the mouse, they use something called a <strong><strong>screen reader</strong></strong>. You don't have to imagine that. You can try one now: Google provides the free <a href="https://chrome.google.com/webstore/detail/chromevox/kgejglhpjiefppelpmljglcjbhoiplfn/">ChromeVox Chrome Extension</a>. Accessibility must also take care of allowing tools to easily select elements or navigate through the pages.</p><p>Web pages and Web apps are not always built with accessibility as one of their first goals, and maybe version 1 is released not accessible but it's possible to make a web page accessible after the fact. Sooner is better, but it's never too late.</p><p>It's important and in my country, websites built by the government or other public organizations must be accessible.</p><p>What does this mean to make an HTML accessible? Let me illustrate the main things you need to think about.</p><p>Note: there are several other things to take care about, which might go in the CSS topic, like colors, contrast and fonts. Or <a href="https://css-tricks.com/accessible-svgs/">how to make SVG images accessible</a>. I don't talk about them here.</p><h2 id="use-semantic-html"><strong><strong>Use semantic HTML</strong></strong></h2><p>Semantic HTML is very important and it's one of the main things you need to take care of. Let me illustrate a few common scenarios.</p><p>It's important to use the correct structure for heading tags. The most important is <code>h1</code>, and you use higher numbers for less important ones, but all the same-level headings should have the same meaning (think about it like a tree structure)</p><pre><code class="language-js">h1
h2
h3
h2
h2
h3
h4
</code></pre><p>Use <code>strong</code> and <code>em</code> instead of <code>b</code> and <code>i</code>. Visually they look the same, but the first 2 have more meaning associated with them. <code>b</code> and <code>i</code> are more visual elements.</p><p>Lists are important. A screen reader can detect a list and provide an overview, then let the user choose to get into the list or not.</p><p>A table should have a <code>caption</code> tag that describes its content:</p><pre><code class="language-html">&lt;table&gt;
&lt;caption&gt;Dogs age&lt;/caption&gt;
&lt;tr&gt;
&lt;th&gt;Dog&lt;/th&gt;
&lt;th&gt;Age&lt;/th&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;Roger&lt;/td&gt;
&lt;td&gt;7&lt;/td&gt;
&lt;/tr&gt;
&lt;/table&gt;
</code></pre><h2 id="use-alt-attributes-for-images"><strong><strong>Use <code>alt</code> attributes for images</strong></strong></h2><p>All images must have an <code>alt</code> tag describing the image content. It's not just a good practice, it's required by the HTML standard and your HTML without it is not validated.</p><pre><code class="language-html">&lt;img src="dog.png" alt="picture of my dog"&gt;
</code></pre><p>It's also good for search engines, if that's an incentive for you to add it.</p><h2 id="use-the-role-attribute"><strong><strong>Use the <code>role</code> attribute</strong></strong></h2><p>The <code>role</code> attribute lets you assign specific roles to the various elements in your page.</p><p>You can assign lots of different roles: complementary, list, listitem, main, navigation, region, tab, alert, application, article, banner, button, cell, checkbox, contentinfo, dialog, document, feed, figure, form, grid, gridcell, heading, img, listbox, row, rowgroup, search, switch, table, tabpanel, textbox, timer.</p><p>It's a lot and for the full reference of each of them I give you <a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles">this MDN link</a>. But you don't need to assign a role to every element in the page. Screen readers can infer from the HTML tag in most cases. For example you don't need to add a role tag to semantic tags like <code>nav</code>, <code>button</code>, <code>form</code>.</p><p>Let's take the <code>nav</code> tag example. You can use it to define the page navigation like this:</p><pre><code class="language-html">&lt;nav&gt;
&lt;ul&gt;
&lt;li&gt;&lt;a href="/"&gt;Home&lt;/a&gt;&lt;/li&gt;
&lt;li&gt;&lt;a href="/blog"&gt;Blog&lt;/a&gt;&lt;/li&gt;
&lt;/ul&gt;
&lt;/nav&gt;
</code></pre><p>If you were <em><em>forced</em></em> to use a <code>div</code> tag instead of <code>nav</code>, you'd use the <code>navigation</code> role:</p><pre><code class="language-html">&lt;div role="navigation"&gt;
&lt;ul&gt;
&lt;li&gt;&lt;a href="/"&gt;Home&lt;/a&gt;&lt;/li&gt;
&lt;li&gt;&lt;a href="/blog"&gt;Blog&lt;/a&gt;&lt;/li&gt;
&lt;/ul&gt;
&lt;/div&gt;
</code></pre><p>So here you got a practical example: <code>role</code> is used to assign a meaningful value when the tag does not convey the meaning already.</p><h2 id="use-the-tabindex-attribute"><strong><strong>Use the <code>tabindex</code> attribute</strong></strong></h2><p>The <code>tabindex</code> attribute allows you to change the order of how pressing the Tab key selects "selectable" elements. By defaults only links and form elements are "selectable" by navigation using the Tab key (and you don't need to set <code>tabindex</code> on them).</p><p>Adding <code>tabindex="0"</code> makes an element selectable:</p><pre><code class="language-html">&lt;div tabindex="0"&gt;
...
&lt;/div&gt;
</code></pre><p>Using <code>tabindex="-1"</code> instead removes an element from this tab-based navigation, and it can be pretty useful.</p><h2 id="use-the-aria-attributes"><strong><strong>Use the <code>aria</code> attributes</strong></strong></h2><p>ARIA is an acronym that means Accessible Rich Internet Applications and defines semantics that can be applied to elements.</p><h3 id="aria-label"><strong><strong><code>aria-label</code></strong></strong></h3><p>This attribute is used to add a string to describe an element.</p><p>Example:</p><pre><code class="language-html">&lt;p aria-label="The description of the product"&gt;...&lt;/p&gt;
</code></pre><p>I use this attribute on my blog sidebar, where I have an input box for search without an explicit label, as it has a placeholder attribute.</p><h3 id="aria-labelledby"><strong><strong><code>aria-labelledby</code></strong></strong></h3><p>This attribute sets a correlation between the current element and the one that labels it.</p><p>If you know how an <code>input</code> element can be associated to a <code>label</code> element, that's similar.</p><p>We pass the item id that describes the current element.</p><p>Example:</p><pre><code class="language-html">&lt;h3 id="description"&gt;The description of the product&lt;/h3&gt;
&lt;p aria-labelledby="description"&gt;
...
&lt;/p&gt;
</code></pre><h3 id="aria-describedby"><strong><strong><code>aria-describedby</code></strong></strong></h3><p>This attribute lets us associate an element with another element that serves as description.</p><p>Example:</p><pre><code class="language-html">&lt;button aria-describedby="payNowDescription" &gt;Pay now&lt;/button&gt;
&lt;div id="payNowDescription"&gt;Clicking the button will send you to our Stripe form!&lt;/div&gt;
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
