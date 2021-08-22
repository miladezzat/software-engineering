---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c9ce7740569d1a4ca34cb.jpg"
tags: [HTML]
description: "Elements are the building blocks of HTML that describe the st"
author: "Milad E. Fahmy"
title: "HTML Elements Explained: What are HTML Tags and How Do You Use Them?"
created: "2021-08-15T22:49:43+02:00"
modified: "2021-08-15T22:49:43+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-html tag-html5 tag-toothbrush ">
<header class="post-full-header">
<h1 class="post-full-title">HTML Elements Explained: What are HTML Tags and How Do You Use Them?</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c9ce7740569d1a4ca34cb.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9ce7740569d1a4ca34cb.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9ce7740569d1a4ca34cb.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9ce7740569d1a4ca34cb.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c9ce7740569d1a4ca34cb.jpg" alt="HTML Elements Explained: What are HTML Tags and How Do You Use Them?">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<h2 id="what-are-html-elements">What are HTML Elements?</h2><p>Elements are the building blocks of HTML that describe the structure and content of a web page. They are the “Markup” part of HyperText Markup Language (HTML).</p><p>HTML syntax uses the angle brackets (”&lt;” and ”&gt;”) to hold the name of an HTML element. Elements usually have an opening tag and a closing tag, and give information about the content they contain. The difference between the two is that the closing tag has a forward slash.</p><p>Let's look at some specific examples of HTML tags.</p><h2 id="p-element">p Element</h2><p>The <code>&lt;p&gt;</code> tag stands for paragraph, which is the most common tag used to create lines of text inside an HTML document.</p><p>The use of the <code>&lt;p&gt;</code> is compatible with other tags, allowing to add hyperlinks (<code>&lt;a&gt;</code>) and bold (<code>&lt;strong&gt;</code>) text, among other things.</p><h3 id="example">Example</h3><pre><code class="language-html">&lt;html&gt;
&lt;head&gt;
&lt;title&gt;Paragraph example&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;p&gt;
This is a paragraph. It is the first of many.
&lt;/p&gt;
&lt;p&gt;
This is another paragraph. It will appear on a separate line.
&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><p>You can also nest an anchor element <code>&lt;a&gt;</code> within a paragraph.</p><h3 id="example-1">Example</h3><pre><code class="language-html">&lt;p&gt;Here's a &lt;a href="https://freecodecamp.org"&gt;link to freeCodeCamp&lt;/a&gt;.&lt;/p&gt;</code></pre><h2 id="heading-elements">Heading Elements</h2><p>There are six heading elements — <code>&lt;h1&gt;</code>, <code>&lt;h2&gt;</code>, <code>&lt;h3&gt;</code>, <code>&lt;h4&gt;</code>, <code>&lt;h5&gt;</code>, <code>&lt;h6&gt;</code>. </p><p>Heading elements are used to signify the importance of the content below them. The lower the number of the heading, the higher the importance. </p><p>For example, the <code>&lt;h1&gt;</code> element represents the main heading of the page, and there should only be one per page. This helps search engines understand the main topic of the page. <code>&lt;h2&gt;</code> elements have less importance, and should be below the higher level <code>&lt;h1&gt;</code> element.</p><h3 id="example-2">Example</h3><pre><code>&lt;h1&gt;This is main heading.&lt;/h1&gt;
&lt;h2&gt;This is subheading h2.&lt;/h2&gt;
&lt;h3&gt;This is subheading h3.&lt;/h3&gt;
&lt;h4&gt;This is subheading h4.&lt;/h4&gt;
&lt;h5&gt;This is subheading h5.&lt;/h5&gt;
&lt;h6&gt;This is subheading h6.&lt;/h6&gt;
</code></pre><h2 id="a-element">a Element</h2><p>The anchor (<code>&lt;a&gt;</code>) element creates a hyperlink to another page or file. In order to link to a different page or file the <code>&lt;a&gt;</code> tag must also contain a <code>href</code> attribute, which indicates the link's destination.</p><p>The text between the opening and closing <code>&lt;a&gt;</code> tags becomes the link. This text should be a meaningful description of the link destination, and not a generic phrase such as "Click here". This better enables users with screen readers to navigate among the various links on a page and understand what content each one will link to.</p><p>By default, a linked page is displayed in the current browser window unless another target is specified. The default link styles are as follows:</p><ul><li>An unvisited link is underlined and blue</li><li>A visited link is underlined and purple</li><li>An active link is underlined and red</li></ul><h3 id="examples">Examples</h3><pre><code class="language-html">  &lt;a href= "https://guide.freecodecamp.org/"&gt;freeCodeCamp&lt;/a&gt;
</code></pre><p>You can also create a link to another section on the same page:</p><pre><code class="language-html">  &lt;h1 id="top"&gt;&lt;/h1&gt;
&lt;a href= "#top"&gt;Go to top&lt;/a&gt;
</code></pre><p>An image can also be turned into a link by enclosing the <code>&lt;img&gt;</code> tag in an <code>&lt;a&gt;</code> tag:</p><pre><code class="language-html">  &lt;a href= "https://guide.freecodecamp.org/"&gt;&lt;img src="logo.svg"&gt;&lt;/a&gt;
</code></pre><h2 id="list-elements">List Elements</h2><p>There are two main types of lists in HTML: ordered (<code>&lt;ol&gt;</code>) and unordered (<code>&lt;ul&gt;</code>). All lists must contain one or more list elements (<code>&lt;li&gt;</code>).</p><h3 id="unordered-list">Unordered list</h3><p>The unordered list starts with <code>&lt;ul&gt;</code> tag and list items start with the <code>&lt;li&gt;</code> tag. In unordered lists all the list items marked with bullets by default.</p><pre><code>&lt;ul&gt;
&lt;li&gt;Item&lt;/li&gt;
&lt;li&gt;Item&lt;/li&gt;
&lt;li&gt;Item&lt;/li&gt;
&lt;/ul&gt;
</code></pre><p>Output:</p><ul><li>Item</li><li>Item</li><li>Item</li></ul><h3 id="ordered-list">Ordered list</h3><p>The ordered list starts with <code>&lt;ol&gt;</code> tag and list items start with the <code>&lt;li&gt;</code> tag. In ordered lists all the list items are marked with numbers.</p><pre><code>&lt;ol&gt;
&lt;li&gt;First Item&lt;/li&gt;
&lt;li&gt;Second Item&lt;/li&gt;
&lt;li&gt;Third Item&lt;/li&gt;
&lt;/ol&gt;
</code></pre><p>Output:</p><ol><li>First Item</li><li>Second Item</li><li>Third Item</li></ol><h2 id="em-element">em Element</h2><p>The <code>&lt;em&gt;</code> element is used to <em>emphasize</em> text in an HTML document. This can be done by wrapping the text you would like to be emphasized in an <code>&lt;em&gt;</code> tag and an <code>&lt;/em&gt;</code> tag respectively. Most browsers will render text wrapped in an <code>&lt;em&gt;</code> tag as italicized.</p><p>Note: The <code>&lt;em&gt;</code> tag should not be used to stylistically italicize text. The <code>&lt;em&gt;</code> tag is used to stress emphasis on text. Typically, CSS formatting is used to stylistically italicize text.</p><h3 id="example-3">Example</h3><pre><code>&lt;body&gt;
&lt;p&gt;
Text that requires emphasis should go &lt;em&gt;here&lt;/em&gt;.
&lt;/p&gt;
&lt;/body&gt;
</code></pre><h2 id="i-element">i Element</h2><p>The <code>&lt;i&gt;</code> element is used to denote text that is set apart from its surrounding text in some way. By default, text surrounded by <code>&lt;i&gt;</code> tags will be displayed in italic type.</p><p>In previous HTML specifications, the <code>&lt;i&gt;</code> tag was solely used to denote text to be italicized. In modern semantic HTML, however, tags such as <code>&lt;em&gt;</code> and <code>&lt;strong&gt;</code> should be used where appropriate. </p><p>You can use the <code>class</code> attribute of the <code>&lt;i&gt;</code> element to state why the text in the tags is different from the surrounding text. You may want to show that the text or phrase is from a different language:</p><pre><code class="language-html">&lt;p&gt;The French phrase &lt;i class="french"&gt;esprit de corps&lt;/i&gt; is often
used to describe a feeling of group cohesion and fellowship.&lt;/p&gt;
</code></pre><h2 id="strong-element">strong Element</h2><p>The <code>&lt;strong&gt;</code> element is used to denote text that is of strong importance or urgency. Most browsers will render text wrapped in an <code>&lt;strong&gt;</code> tag as bold.</p><p>Note: The <code>&lt;strong&gt;</code> tag should not be used to style the text as bold. Use CSS to do that.</p><h3 id="example-">Example:</h3><pre><code>&lt;body&gt;
&lt;p&gt;
&lt;strong&gt;This&lt;/strong&gt; is really important.
&lt;/p&gt;
&lt;/body&gt;
</code></pre><h2 id="img-element">img Element</h2><p>A simple HTML <code>&lt;img&gt;</code> element can be included in an HTML document like this:</p><pre><code class="language-html">&lt;img src="path/to/image/file" alt="this is a cool picture" title="Some descriptive text goes here"&gt;
</code></pre><p>Note that <code>&lt;img&gt;</code> elements are self-closing, and do not require a closing tag.</p><p><code>alt</code> tags provide alternate text for an image. One use of the <code>alt</code> tag is for visually impaired people using a screen reader; they can be read the <code>alt</code> tag of the image in order to understand the image's meaning.</p><p>The <code>title</code> attribute is optional and will provide additional information about the image. Most browsers display this information in a tooltip when the user hovers over it.</p><p>Note that the path to the image file can be either relative or absolute. Also, remember that the <code>img</code> element is self-closing, meaning that it does not close with the <code>&lt;/img&gt;</code> tag and instead closes with just a single <code>&gt;</code>.</p><h3 id="examples-1">Examples</h3><pre><code class="language-html">&lt;img src="https://example.com/image.png" alt="my picture" title="This is an example picture"&gt;
</code></pre><p>(This is assuming that the HTML file is at <a href="https://example.com/index.html">https://example.com/index.html</a>, so it's in the same folder as the image file)</p><p>is the same as:</p><pre><code class="language-html">&lt;img src="image.png" alt="my picture" title="This is an example picture"&gt;
</code></pre><p>Sometimes an <code>&lt;img&gt;</code> element will also use two other attributes to specify its size, <code>height</code> and <code>width</code>, as shown below:</p><pre><code class="language-html">&lt;img src="image.png" alt="my picture" width="650" height="400" /&gt;
</code></pre><p>The values are specified in pixels, but the size is usually specified in CSS rather than HTML.</p><h2 id="nav-element"><strong>nav Element</strong></h2><p>The <code>&lt;nav&gt;</code> element is intended for major block of navigation links. NOT all links of a document should be inside a <code>&lt;nav&gt;</code> element.</p><p>Browsers, such as screen readers for disabled users, can use this element to determine whether to omit the initial rendering of this content.</p><h3 id="example-4">Example</h3><pre><code class="language-html">&lt;nav class="menu"&gt;
&lt;ul&gt;
&lt;li&gt;&lt;a href="#"&gt;Home&lt;/a&gt;&lt;/li&gt;
&lt;li&gt;&lt;a href="#"&gt;About&lt;/a&gt;&lt;/li&gt;
&lt;li&gt;&lt;a href="#"&gt;Contact&lt;/a&gt;&lt;/li&gt;
&lt;/ul&gt;
&lt;/nav&gt;</code></pre><h2 id="header-element"><strong>header Element</strong></h2><p>The <code>&lt;header&gt;</code> tag is a container which is used for navigational links or introductory content. It may typically include heading elements, such as <code>&lt;h1&gt;</code>, <code>&lt;h2&gt;</code>, but may also include other elements such as a search form, logo, author information, and so on.</p><p>Although not required, the <code>&lt;header&gt;</code> tag is intended to contain the surrounding sections heading. It may also be used more than once in an HTML document. It is important to note that the <code>&lt;header&gt;</code> tag does not introduce a new section, but is simply the head of a section.</p><h3 id="example-5">Example</h3><pre><code class="language-html">&lt;article&gt;
&lt;header&gt;
&lt;h1&gt;Heading of Page&lt;/h1&gt;
&lt;/header&gt;
&lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit.&lt;/p&gt;
&lt;/article&gt;</code></pre><h2 id="textarea-element"><strong>textarea Element</strong></h2><p>The HTML textarea tag allows you to enter a box that will contain text for user feedback or interaction. In most cases, it is common to see the textarea used as part of a form.</p><p>Programmers use textarea tag to create multiline field for user input (useful especially in case when user should be able to put on the form longer text). Programmers may specify different attributes for textarea tags.</p><h3 id="example-6">Example</h3><pre><code class="language-html">    &lt;form&gt;
&lt;textarea name="comment" rows="8" cols="80" maxlength="500" placeholder="Enter your comment here..." required&gt;&lt;/textarea&gt;
&lt;/form&gt;</code></pre><p>Most common attributes: <code>row</code> and <code>cols</code> attributes determine the height and width of the textarea <code>placeholder</code> attribute specifies the text which is visible to the user, it helps the user to understand what data should be typed in <code>maxlength</code> attribute determines the maximum length of the text which can be typed in the textarea, user cannot submit more characters <code>required</code> attribute means that this field must be filled in before the form submission.</p><h2 id="label-element">label Element</h2><p>The <code>&lt;label&gt;</code> tag defines a label for an <code>&lt;input&gt;</code> element.</p><p>A label can be bound to an element either by using the “for” attribute, or by placing the element inside the <strong>element.</strong></p><h3 id="example-7">Example</h3><pre><code class="language-text">&lt;label for="id"&gt;Label&lt;/label&gt;
&lt;meta charset="UTF-8"&gt;
&lt;meta name="description" content="Short description of website content here"&gt;
&lt;meta name="keywords" content="HTML,CSS,XML,JavaScript"&gt;
&lt;meta name="author" content="Jane Smith"&gt;
&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
&lt;!-- HTML5 introduced a method to let web designers take control over the viewport, through the &lt;meta&gt; tag. The viewport is the user's visible area of a web page. A &lt;meta&gt; viewport element gives the browser instructions on how to control the page's dimensions and scaling. --&gt;
&lt;/head&gt;</code></pre><h2 id="div-element"><strong>div Element</strong></h2><p>The <code>&lt;div&gt;</code> tag is a generic container that defines a section in your HTML document. A <code>&lt;div&gt;</code> element is used to group sections of HTML elements together and format them with CSS. </p><p>A <code>&lt;div&gt;</code> is a block-level element. This means that it takes up its own line on the screen. Elements right after the <code>&lt;div&gt;</code> will be pushed down to the line below. For similar grouping and styling that is not block-level, but inline, you would use the <code>&lt;span&gt;</code> tag instead. The tag is used to group inline-elements in a document.</p><h3 id="example-9"><strong>Example</strong></h3><p>Here is an example of how to display a section in the same color:</p><pre><code class="language-html">&lt;div style="color:#ff0000"&gt;
&lt;h3&gt;my heading&lt;/h3&gt;
&lt;p&gt;my paragraph&lt;/p&gt;
&lt;/div&gt;</code></pre><h2 id="section-element">section Element</h2><p>The <code>&lt;section&gt;</code> element defines a section where there isn't a more specific semantic HTML element to represent it. Typically, a <code>&lt;section&gt;</code> element will include a heading element (<code>&lt;h1&gt;</code> - <code>&lt;h6&gt;</code>) as child element.</p><p>For example, a web page could be divided into various sections such as welcome, content and contact sections.</p><p>A <code>&lt;section&gt;</code> element should not be used in place of a <code>&lt;div&gt;</code> element if a generic container is needed. It should be used to define sections within an HTML page.</p><pre><code class="language-html">&lt;html&gt;
&lt;head&gt;
&lt;title&gt;Section Example&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;section&gt;
&lt;h1&gt;Heading&lt;/h1&gt;
&lt;p&gt;Bunch of awesome content&lt;/p&gt;
&lt;/section&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><h2 id="footer-element"><strong>footer Element</strong></h2><p>The <code>&lt;footer&gt;</code> tag denotes the footer of an HTML document or section. Typically, the footer contains information about the author, copyright information, contact information, and a sitemap. Any contact information inside of a <code>&lt;footer&gt;</code> tag should go inside an <code>&lt;address&gt;</code> tag.</p><h3 id="example-10"><strong>Example</strong></h3><pre><code class="language-html">&lt;html&gt;
&lt;head&gt;
&lt;title&gt;Paragraph example&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;footer&gt;
&lt;p&gt;&amp;copy; 2017 Joe Smith&lt;/p&gt;
&lt;/footer&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre><h2 id="audio-element"><strong>audio Element</strong></h2><p>The <code>&lt;audio&gt;</code> tag defines an audio element, that can be used to add audio media resource to an HTML document that will be played by native support for audio playback built into the browser rather than a browser plugin.</p><p>The audio tag currently supports three file formats OGG, MP3 and WAV which can be added to your html as follows.</p><h3 id="adding-an-ogg">Adding an OGG</h3><pre><code class="language-text">&lt;audio controls&gt;
&lt;source src="file.ogg" type="audio/ogg"&gt;
&lt;/audio&gt;</code></pre><h3 id="adding-an-mp3">Adding an MP3</h3><pre><code class="language-text">&lt;audio controls&gt;
&lt;source src="file.mp3" type="audio/mpeg"&gt;
&lt;/audio&gt;</code></pre><h3 id="adding-a-wav">Adding a WAV</h3><pre><code class="language-text">&lt;audio controls&gt;
&lt;source src="file.wav" type="audio/wav"&gt;
&lt;/audio&gt;</code></pre><p>It may contain one or more audio sources, represented using the src attribute or the source element.</p><h3 id="adding-multiple-audio-files">Adding Multiple Audio Files</h3><pre><code class="language-text">&lt;audio controls&gt;
&lt;source src="file-1.wav" type="audio/wav"&gt;
&lt;source src="file-2.ogg" type="audio/ogg"&gt;
&lt;source src="file-3.mp3" type="audio/mpeg"&gt;
frameborder="0" allowfullscreen&gt;&lt;/iframe&gt;</code></pre><p>Embedding Google Maps with an <code>&lt;iframe&gt;</code>:</p><pre><code class="language-html">&lt;iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d774386.2436462595!2d-74.53874786161381!3d40.69718109704434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2sau!4v1508405930424"
width="600" height="450" frameborder="0" style="border:0" allowfullscreen&gt;&lt;/iframe&gt;</code></pre><h3 id="alternative-text"><strong>Alternative Text</strong></h3><p>The content between the opening and closing <code>&lt;iframe&gt;</code> tags is used as alternative text, to be displayed if the viewer’s browser does not support iframes.</p><pre><code class="language-html">&lt;iframe width="560" height="315" src="https://www.youtube.com/embed/v8kFT4I31es" frameborder="0"&gt;
&lt;p&gt;Your browser does not support iframes.&lt;/p&gt;
&lt;/iframe&gt;</code></pre><h3 id="targeting-an-iframe-in-a-link"><strong>Targeting an iframe in a Link</strong></h3><p>Any anchor element can target the content of an <code>&lt;iframe&gt;</code> element. Rather than redirect the browser window to the linked webpage, it will redirect the <code>&lt;iframe&gt;</code>. For this to work, the <code>target</code> attribute of the <code>&lt;a&gt;</code> element must match the <code>name</code> attribute of the <code>&lt;iframe&gt;</code>.</p><pre><code class="language-html">&lt;iframe width="560" height="315" src="about:blank" frameborder="0" name="iframe-redir"&gt;&lt;/iframe&gt;
&lt;p&gt;&lt;a href="https://www.youtube.com/embed/v8kFT4I31es" target="iframe-redir"&gt;Redirect the Iframe&lt;/a&gt;&lt;/p&gt;</code></pre><p>This example will show a blank <code>&lt;iframe&gt;</code> initially, but when you click the link above it will redirect the <code>&lt;iframe&gt;</code> to show a YouTube video.</p><h3 id="javascript-and-iframes"><strong>JavaScript and iframes</strong></h3><p>Documents embedded in an <code>&lt;iframe&gt;</code> can run JavaScript within their own context (without affecting the parent webpage) as normal.</p><p>Any script interaction between the parent webpage and the content of the embedded <code>&lt;iframe&gt;</code> is subject to the same-origin policy. This means that if you load the content of the <code>&lt;iframe&gt;</code> from a different domain, the browser will block any attempt to access that content with JavaScript.</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
