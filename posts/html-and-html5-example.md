---
card: "/images/default.jpg"
tags: [HTML]
description: "HTML provides the structure of websites. Here are some exampl"
author: "Milad E. Fahmy"
title: "The Best HTML Examples and HTML5 Examples"
created: "2021-08-15T22:50:10+02:00"
modified: "2021-08-15T22:50:10+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-html tag-html5 ">
<header class="post-full-header">
<h1 class="post-full-title">The Best HTML Examples and HTML5 Examples</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/01/html-examples.jpeg 300w,
/news/content/images/size/w600/2020/01/html-examples.jpeg 600w,
/news/content/images/size/w1000/2020/01/html-examples.jpeg 1000w,
/news/content/images/size/w2000/2020/01/html-examples.jpeg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/01/html-examples.jpeg" alt="The Best HTML Examples and HTML5 Examples">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>HTML provides the structure of websites. Here are some examples of how to use HTML syntax to build websites, including some examples of newer HTML5 features.</p><h2 id="the-a-href-attribute-example"><strong>The A Href Attribute Example</strong></h2><p>The <code>&lt;a href&gt;</code> attribute refers to a destination provided by a link. The <code>a</code> (anchor) tag is dead without the <code>&lt;href&gt;</code> attribute. Sometimes in your workflow, you don’t want a live link or you won’t know the link destination yet. In this case, it’s useful to set the <code>href</code> attribute to <code>"#"</code> to create a dead link. The <code>href</code>attribute can be used to link to local files or files on the internet.</p><p>For instance:</p><pre><code class="language-html">&lt;html&gt;
&lt;head&gt;
&lt;title&gt;Href Attribute Example&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;h1&gt;Href Attribute Example&lt;/h1&gt;
&lt;p&gt;
&lt;a href="https://www.freecodecamp.org/contribute/"&gt;The freeCodeCamp Contribution Page&lt;/a&gt; shows you how and where you can contribute to freeCodeCamp's community and growth.
&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre><p>The <code>&lt;a href&gt;</code> attribute is supported by all browsers.</p><h4 id="more-attributes-"><strong>More attributes:</strong></h4><p><code>hreflang</code> : Specifies the language of the linked resource. <code>target</code> : Specifies the context in which the linked resource will open. <code>title</code> : Defines the title of a link, which appears to the user as a tooltip.</p><h3 id="examples"><strong>Examples</strong></h3><pre><code class="language-html">&lt;a href="#"&gt;This is a dead link&lt;/a&gt;
&lt;a href="https://www.freecodecamp.org"&gt;This is a live link to freeCodeCamp&lt;/a&gt;
&lt;a href="https://html.com/attributes/a-href/"&gt;more with a href attribute&lt;/a&gt;</code></pre><h3 id="in-page-anchors"><strong>In-page anchors</strong></h3><p>It’s also possible to set an anchor to certain place of the page. To do this you should first place a tab at location on the page with tag <a>and necessary attribute “name” with any keyword description in it, like this:</a></p><pre><code class="language-html">&lt;a name="top"&gt;&lt;/a&gt;</code></pre><p><a>Any description between tags is not required. After that you can place a link leading to this anchor at any palce on same page. To do this you should use tag with necessary attribute “href” with symbol # (sharp) and key-word description of the anchor, like this:</a></p><pre><code class="language-html">&lt;a href="#top"&gt;Go to Top&lt;/a&gt;</code></pre><h3 id="image-links"><strong><strong>Image Links</strong></strong></h3><p>The <code>&lt;a href="#"&gt;</code> may also be applied to images and other HTML elements.</p><h3 id="example"><strong><strong>Example</strong></strong></h3><pre><code class="language-html">&lt;a href="#"&gt;
&lt;img itemprop="image" style="height: 90px;" src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."&gt;
&lt;body background="https://assets.digitalocean.com/blog/static/hacktoberfest-is-back/hero.png"&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre><h2 id="body-background-attribute-is-depreciated"><strong>body-background attribute is depreciated</strong></h2><p>the body-background attribute been deprecated in HTML5. The correct way to style the <code>&lt;body&gt;</code> tag is with CSS.</p><p>There are several CSS properties used for setting the background of an element. These can be used on to set the background of an entire page.</p><h2 id="the-body-bgcolor-attribute-example"><strong>The Body Bgcolor Attribute Example</strong></h2><p>The <code>&lt;body bgcolor&gt;</code> attribute assigns a background color for an HTML document.</p><p><strong><strong>Syntax</strong></strong>:</p><p><code>&lt;body bgcolor="color"&gt;</code> The color value can be either a color name (like, <code>purple</code>) or a hex value (like, <code>#af0000</code>).</p><p>To add a background color to a webpage you can use the <code>&lt;body bgcolor="######"&gt;</code> attribute. It specifies a color for the HTML document to display.</p><p><strong><strong>For example:</strong></strong></p><pre><code class="language-html">&lt;html&gt;
&lt;head&gt;
&lt;title&gt;Body bgcolor Attribute example&lt;/title&gt;
&lt;/head&gt;
&lt;body bgcolor="#afafaf"&gt;
&lt;h1&gt;This webpage has colored background.&lt;/h1&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre><p>You can change the color by replacing ###### with a hexadecimal value. For simple colors you can also use the word, such as “red” or “black”.</p><p>All major browsers support the <code>&lt;body bgcolor&gt;</code> attribute.</p><p><em>Note:</em></p><ul><li>HTML 5 does not support the <code>&lt;body bgcolor&gt;</code> attribute. Use CSS for this purpose. How? By using the following code: <code>&lt;body style="background-color: color"&gt;</code> Of course, you can also do it in a separate document instead of an inline method.</li><li>Do not use RGB value in <code>&lt;body bgcolor&gt;</code> attribute because <code>rgb()</code> is for CSS only, that is, it will not work in HTML.</li></ul><h2 id="the-div-align-attribute-example"><strong>The Div Align Attribute Example</strong></h2><p>The <code>&lt;div align=""&gt;</code> attribute is used for aligning the text in a div tag to The Left, Right, center or justify.</p><p>For instance:</p><pre><code class="language-html">&lt;html&gt;
&lt;head&gt;
&lt;title&gt;Div Align Attribbute&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;div align="left"&gt;
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
labore et dolore magna aliqua.
&lt;/div&gt;
&lt;div align="right"&gt;
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
labore et dolore magna aliqua.
&lt;/div&gt;
&lt;div align="center"&gt;
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
labore et dolore magna aliqua.
&lt;/div&gt;
&lt;div align="justify"&gt;
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
labore et dolore magna aliqua.
&lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><h2 id="important-"><strong>Important!</strong></h2><p>This attribute is no longer supported in html5. css is the way to go.</p><p>The Div Align attribute can be used to horizontally align the contents within a div. In the below example, the text will be centered within the div.</p><pre><code class="language-html">&lt;div align="center"&gt;
This Text Will Be Centered
&lt;/div&gt;</code></pre><p>**This attribute is not supported in HTML5 and <a href="https://github.com/freeCodeCamp/guides/blob/f50b7370be514b2a03ee707cd0f0febe2bb713ae/src/pages/css/text-align/index.md">CSS Text Align</a> should be used instead</p><h2 id="the-font-color-attribute-example"><strong>The Font Color Attribute Example</strong></h2><p>This attribute is used to set a color to the text enclosed in a <code>&lt;font&gt;</code> tag.</p><h3 id="important--1">Important:</h3><p>This attribute is not supported in HTML5. Instead, this <a href="https://guide.freecodecamp.org/css/colors">freeCodeCamp article</a> specifies a CSS method, which can be used.</p><h3 id="note-">Note:</h3><p>A color can also be specified using a 'hex code' or an 'rgb code', instead of using a name.</p><h3 id="example-">Example:</h3><ol><li>Color name attribute</li></ol><pre><code class="language-html">&lt;html&gt;
&lt;body&gt;
&lt;font color="green"&gt;Font color example using color attribute&lt;/font&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><p>Hex code attribute</p><pre><code class="language-html">&lt;html&gt;
&lt;body&gt;
&lt;font color="#00FF00"&gt;Font color example using color attribute&lt;/font&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><p>RGB attribute</p><pre><code class="language-html">&lt;html&gt;
&lt;body&gt;
&lt;font color="rgb(0,255,0)"&gt;Font color example using color attribute&lt;/font&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><h2 id="the-font-size-attribute-example"><strong>The Font Size Attribute Example</strong></h2><p>This attribute specifies the font size as either a numeric or relative value. Numeric values range from <code>1</code> to <code>7</code>with <code>1</code> being the smallest and <code>3</code> the default. It can also be defined using a relative value, like <code>+2</code> or <code>-3</code>, which set it relative to the value of the size attribute of the <code>&lt;basefont&gt;</code> element, or relative to <code>3</code>, the default value, if none does exist.</p><p>Syntax:</p><p><code>&lt;font size="number"&gt;</code></p><p>Example:</p><pre><code class="language-html">&lt;html&gt;
&lt;body&gt;
&lt;font size="6"&gt;This is some text!&lt;/font&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre><p>Note : <code>The size attribute of &lt;font&gt; is not supported in HTML5. Use CSS instead.</code></p><h2 id="the-img-align-attribute-example"><strong>The Img Align Attribute Example</strong></h2><p>The align attribute of an image specifies where the image should be aligned according to the surrounding element.</p><p>Attribute Values:<br>right - Align image to the right left - Align image to the left<br>top - Align image to the top<br>bottom - Align image to the bottom<br>middle - Align image to the middle</p><p>For example:</p><pre><code class="language-html">&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
&lt;title&gt;Img Align Attribute&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;p&gt;
This is an example. &lt;img src="image.png" alt="Image" align="middle" /&gt; More text right here
&lt;img src="image.png" alt="Image" width="100" /&gt;
&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><p>We can also align in right if we want:</p><pre><code class="language-html">&lt;p&gt;This is another example&lt;img src="image.png" alt="Image" align="right" /&gt;&lt;/p&gt;
</code></pre><p><strong><strong>Please note the align attribute is not supported in HTML5, and you should use CSS instead. However, it is still supported by all the major browsers.</strong></strong></p><h2 id="the-img-width-attribute"><strong>The Img Width Attribute</strong></h2><p>The HTML ‘width’ attribute refers to the width of an image. The value in the quotations is the amount of pixels.</p><p>For example, if you already have a link to an image set up via the <code>src</code> attribute you can add the width attribute like so:</p><pre><code class="language-html">&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
&lt;title&gt;Img Width Attribute&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;img src="image.png" alt="Image" width="100" /&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><p>In the code snippet above there is an image tag and the image is set to a width of 100 pixels. <code>width="100"</code></p><h2 id="the-img-src-attribute-example"><strong>The Img Src Attribute Example</strong></h2><p>The <code>&lt;img src&gt;</code> attribute refers to the source of the image you want to display. The <code>img</code> tag will not display an image without the <code>src</code> attribute. However, if you set the source to the location of the image, you can display any image.</p><p>There is an image of the freeCodeCamp Logo located at <code>https://avatars0.githubusercontent.com/u/9892522?v=4&amp;s=400</code></p><p>You can set that as the image using the <code>src</code> attribute.</p><pre><code class="language-html">&lt;html&gt;
&lt;head&gt;
&lt;title&gt;Img Src Attribute Example&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;img src="https://avatars0.githubusercontent.com/u/9892522?v=4&amp;s=400" /&gt;
&lt;/body&gt;
&lt;/html&gt;
&lt;!-- example for a less-than sign (&lt;) --&gt;
&amp;lt;</code></pre><p>Or</p><pre><code class="language-html">&lt;!-- &amp;#[entity_number]; --&gt;
&lt;!-- example for a less-than sign (&lt;) --&gt;
&amp;#60;</code></pre><h2 id="reference-guide"><strong>Reference Guide</strong></h2><p>This is by no means an exhaustive list but the links below will be able to give you more entities if the ones below do not work for your needs. Happy Coding :bowtie:</p><pre><code>Character	Entity Name	Entity Number	Description
&amp;#32;	Space
!		&amp;#33;	Exclamation mark
”		&amp;#34;	Quotation mark
#		&amp;#35;	Number sign
$		&amp;#36;	Dollar sign
¢	&amp;cent;	&amp;#162;	Cent sign
€	&amp;euro;	&amp;#8364;	Euro sign
£	&amp;pound;	&amp;#163;	GBP sign
¥	&amp;yen;	&amp;#165;	Yen sign
%		&amp;#37;	Percent sign
&amp;	&amp;amp;	&amp;#38;	Ampersand
’		&amp;#39;	Apostrophe
(		&amp;#40;	Opening/Left Parenthesis
)		&amp;#41;	Closing/Right Parenthesis
*		&amp;#42;	Asterisk
+		&amp;#43;	Plus sign
,		&amp;#44;	Comma
-		&amp;#45;	Hyphen
.		&amp;#46;	Period
/		&amp;#47;	Slash
©	&amp;copy;	&amp;#169;	Copyright
®	&amp;reg;	&amp;#174;	Registered Trademark
”	&amp;quot;	&amp;#34;	double quotation mark
&gt;	&amp;gt;	&amp;#62;	Greater-than sign
&lt;	&amp;lt;	&amp;#60;	Less-than sign
•	&amp;bull;	&amp;#8226	Bullet point</code></pre><h2 id="html-form-example"><strong>HTML Form Example</strong></h2><p>Basically, forms are used to collect data entered by a user, which are then sent to the server for further processing. They can be used for different kinds of user inputs, such as name, email etc.</p><p>Form contains control elements which are wrapped around <code>&lt;form&gt;&lt;/form&gt;</code> tags, like <code>input</code>, which can have types like:</p><ul><li><code>text</code></li><li><code>email</code></li><li><code>password</code></li><li><code>checkbox</code></li><li><code>radio</code></li><li><code>submit</code></li><li><code>range</code></li><li><code>search</code></li><li><code>date</code></li><li><code>time</code></li><li><code>week</code></li><li><code>color</code></li><li><code>datalist</code></li></ul><p>Code example:</p><pre><code class="language-html">&lt;form&gt;
&lt;label for="username"&gt;Username:&lt;/label&gt;
&lt;input type="text" name="username" id="username" /&gt;
&lt;label for="password"&gt;Password:&lt;/label&gt;
&lt;input type="password" name="password" id="password" /&gt;
&lt;input type="radio" name="gender" value="male" /&gt;Male&lt;br /&gt;
&lt;input type="radio" name="gender" value="female" /&gt;Female&lt;br /&gt;
&lt;input type="radio" name="gender" value="other" /&gt;Other
&lt;input list="Options" /&gt;
&lt;datalist id="Options"&gt;
&lt;option value="Option1"&gt;&lt;/option&gt;
&lt;option value="Option2"&gt;&lt;/option&gt;
&lt;option value="Option3"&gt;&lt;/option&gt;
&lt;/datalist&gt;
&lt;input type="submit" value="Submit" /&gt;
&lt;input type="color" /&gt;
&lt;input type="checkbox" name="correct" value="correct" /&gt;Correct
&lt;/form&gt;
</code></pre><p>If the form method is not defined then it will default to “GET”.</p><p>The form tag can also have an attribute named “target” which specifies where the link will open. It can open in the browser tab, a frame, or in the current window.</p><p>The action attribute defines the action to be performed when the form is submitted. Normally, the form data is sent to a web page at the Script URL when the user clicks on the submit button. If the action attribute is omitted, the action is set to the current page.</p><h2 id="html5-audio-example"><strong>HTML5 Audio Example</strong></h2><p>Before HTML5, audio files had to be played in a browser using a plug-in like Adobe Flash. The HTML</p><p>The following code snippet adds an audio file with the filename <code>tutorial.ogg</code> or <code>tutorial.mp3</code>. Theelement indicates alternative audio files which the browser may choose from. The browser will utilize the first recognized format.</p><h4 id="example-1"><strong>Example 1</strong></h4><pre><code class="language-html">&lt;audio controls&gt;
&lt;source src="tutorial.ogg" type="audio/ogg" /&gt;
&lt;source src="tutorial.mp3" type="audio/mpeg" /&gt;
Your browser does not support the audio element.
&lt;/audio&gt;
</code></pre><h4 id="example-2"><strong>Example 2</strong></h4><pre><code class="language-html">&lt;audio src="https://s3.amazonaws.com/freecodecamp/simonSound1.mp3" controls loop autoplay&gt;&lt;/audio&gt;
&lt;section&gt;
&lt;article&gt;
&lt;figure&gt;
&lt;img /&gt;
&lt;figcaption&gt;&lt;/figcaption&gt;
&lt;/figure&gt;
&lt;/article&gt;
&lt;/section&gt;
&lt;footer&gt;&lt;/footer&gt;
</code></pre><p>Whilst this second block of code uses non-semantic elements:</p><pre><code class="language-text">&lt;div id="header"&gt;&lt;/div&gt;
&lt;div class="section"&gt;
&lt;div class="article"&gt;
&lt;div class="figure"&gt;
&lt;img /&gt;
&lt;div class="figcaption"&gt;&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;div id="footer"&gt;&lt;/div&gt;
</code></pre><p>First, it is much <strong><strong>easier to read</strong></strong>. This is probably the first thing you will notice when looking at the first block of code using semantic elements. This is a small example, but as a programmer you can be reading through hundreds or thousands of lines of code. The easier it is to read and understand that code, the easier it makes your job.</p><p>It has <strong><strong>greater accessibility</strong></strong>. You are not the only one that finds semantic elements easier to understand. Search engines and assistive technologies (like screen readers for users with a sight impairment) are also able to better understand the context and content of your website, meaning a better experience for your users.</p><p>Overall, semantic elements also lead to more <strong><strong>consistent code</strong></strong>. When creating a header using non-semantic elements, different programmers might write this as <code>&lt;div class="header"&gt;</code>, <code>&lt;div id="header"&gt;</code>, <code>&lt;div class="head"&gt;</code>, or simply <code>&lt;div&gt;</code>. There are so many ways that you can create a header element, and they all depend on the personal preference of the programmer. By creating a standard semantic element, it makes it easier for everyone.</p><p>Since October 2014, HTML4 got upgraded to HTML5, along with some new “semantic” elements. To this day, some of us might still be confused as to why so many different elements that doesn’t seem to show any major changes.</p><h4 id="section-and-article"><strong><code>&lt;section&gt;</code> and <code>&lt;article&gt;</code></strong></h4><p>“What’s the difference?”, you may ask. Both these elements are used for sectioning a content, and yes, they can definitely be used interchangeably. It’s a matter of in which situation. HTML4 offered only one type of container element, which is <code>&lt;div&gt;</code>. While this is still used in HTML5, HTML5 provided us with <code>&lt;section&gt;</code>and <code>&lt;article&gt;</code> in a way to replace <code>&lt;div&gt;</code>.</p><p>The <code>&lt;section&gt;</code> and <code>&lt;article&gt;</code> elements are conceptually similar and interchangeable. To decide which of these you should choose, take note of the following:</p><ol><li>An article is intended to be independently distributable or reusable.</li><li>A section is a thematic grouping of content.</li></ol><pre><code class="language-html">&lt;section&gt;
&lt;p&gt;Top Stories&lt;/p&gt;
&lt;section&gt;
&lt;p&gt;News&lt;/p&gt;
&lt;article&gt;Story 1&lt;/article&gt;
&lt;article&gt;Story 2&lt;/article&gt;
&lt;article&gt;Story 3&lt;/article&gt;
&lt;/section&gt;
&lt;section&gt;
&lt;p&gt;Sport&lt;/p&gt;
&lt;article&gt;Story 1&lt;/article&gt;
&lt;article&gt;Story 2&lt;/article&gt;
&lt;article&gt;Story 3&lt;/article&gt;
&lt;/section&gt;
&lt;/section&gt;
</code></pre><h4 id="header-and-hgroup"><strong><code>&lt;header&gt;</code> and <code>&lt;hgroup&gt;</code></strong></h4><p>The <code>&lt;header&gt;</code> element is generally found at the top of a document, a section, or an article and usually contains the main heading and some navigation and search tools.</p><pre><code class="language-html">&lt;header&gt;
&lt;h1&gt;Company A&lt;/h1&gt;
&lt;ul&gt;
&lt;li&gt;&lt;a href="/home"&gt;Home&lt;/a&gt;&lt;/li&gt;
&lt;li&gt;&lt;a href="/about"&gt;About&lt;/a&gt;&lt;/li&gt;
&lt;li&gt;&lt;a href="/contact"&gt;Contact us&lt;/a&gt;&lt;/li&gt;
&lt;/ul&gt;
&lt;form target="/search"&gt;
&lt;input name="q" type="search" /&gt;
&lt;input type="submit" /&gt;
&lt;/form&gt;
&lt;/header&gt;
</code></pre><p>The <code>&lt;hgroup&gt;</code> element should be used where you want a main heading with one or more subheadings.</p><pre><code class="language-html">&lt;hgroup&gt;
&lt;h1&gt;Heading 1&lt;/h1&gt;
&lt;h2&gt;Subheading 1&lt;/h2&gt;
&lt;h2&gt;Subheading 2&lt;/h2&gt;
&lt;/hgroup&gt;
</code></pre><p>REMEMBER, that the <code>&lt;header&gt;</code> element can contain any content, but the <code>&lt;hgroup&gt;</code> element can only contain other headers, that is <code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code> and including <code>&lt;hgroup&gt;</code>.</p><h4 id="aside"><strong><code>&lt;aside&gt;</code></strong></h4><p>The <code>&lt;aside&gt;</code> element is intended for content that is not part of the flow of the text in which it appears, however still related in some way. This of <code>&lt;aside&gt;</code> as a sidebar to your main content.</p><pre><code class="language-html">&lt;aside&gt;
&lt;p&gt;
This is a sidebar, for example a terminology definition or a short background to a historical
figure.
&lt;/p&gt;
&lt;/aside&gt;
</code></pre><p>Before HTML5, our menus were created with <code>&lt;ul&gt;</code>’s and <code>&lt;li&gt;</code>’s. Now, together with these, we can separate our menu items with a <code>&lt;nav&gt;</code>, for navigation between your pages. You can have any number of <code>&lt;nav&gt;</code> elements on a page, for example, its common to have global navigation across the top (in the <code>&lt;header&gt;</code>) and local navigation in a sidebar (in an <code>&lt;aside&gt;</code> element).</p><pre><code class="language-html">&lt;nav&gt;
&lt;ul&gt;
&lt;li&gt;&lt;a href="/home"&gt;Home&lt;/a&gt;&lt;/li&gt;
&lt;li&gt;&lt;a href="/about"&gt;About&lt;/a&gt;&lt;/li&gt;
&lt;li&gt;&lt;a href="/contact"&gt;Contact us&lt;/a&gt;&lt;/li&gt;
&lt;/ul&gt;
&lt;/nav&gt;
</code></pre><h4 id="footer"><strong><code>&lt;footer&gt;</code></strong></h4><p>If there is a <code>&lt;header&gt;</code> there must be a <code>&lt;footer&gt;</code>. A <code>&lt;footer&gt;</code> is generally found at the bottom of a document, a section, or an article. Just like the <code>&lt;header&gt;</code> the content is generally metainformation, such as author details, legal information, and/or links to related information. It is also valid to include <code>&lt;section&gt;</code>elements within a footer.</p><pre><code class="language-html">&lt;footer&gt;&amp;copy;Company A&lt;/footer&gt;</code></pre><h4 id="small"><strong><code>&lt;small&gt;</code></strong></h4><p>The <code>&lt;small&gt;</code> element often appears within a <code>&lt;footer&gt;</code> or <code>&lt;aside&gt;</code> element which would usually contain copyright information or legal disclaimers, and other such fine print. However, this is not intended to make the text smaller. It is just describing its content, not prescribing presentation.</p><pre><code class="language-html">&lt;footer&gt;&lt;small&gt;&amp;copy;Company A&lt;/small&gt; Date&lt;/footer&gt;</code></pre><h4 id="time"><strong><code>&lt;time&gt;</code></strong></h4><p>The <code>&lt;time&gt;</code> element allows an unambiguous ISO 8601 date to be attached to a human-readable version of that date.</p><pre><code class="language-html">&lt;time datetime="2017-10-31T11:21:00+02:00"&gt;Tuesday, 31 October 2017&lt;/time&gt;</code></pre><p>Why bother with <code>&lt;time&gt;</code>? While humans can read time that can disambiguate through context in the normal way, the computers can read the ISO 8601 date and see the date, time, and the time zone.</p><h4 id="figure-and-figcaption"><strong><code>&lt;figure&gt;</code> and <code>&lt;figcaption&gt;</code></strong></h4><p><code>&lt;figure&gt;</code> is for wrapping your image content around it, and <code>&lt;figcaption&gt;</code> is to caption your image.</p><pre><code class="language-html">&lt;figure&gt;
&lt;img src="https://en.wikipedia.org/wiki/File:Shadow_of_Mordor_cover_art.jpg" alt="Shadow of Mordor" /&gt;
&lt;figcaption&gt;Cover art for Middle-earth: Shadow of Mordor&lt;/figcaption&gt;
&lt;/figure&gt;</code></pre><h2 id="html5-video-example"><strong>HTML5 Video Example</strong></h2><p>Before HTML5, in order to have a video play in a webpage you would need to use a plugin, like Adobe Flash Player. With the introduction of HTML5, you can now place it directly into the page itself. The HTML</p><p>To embed video file into web page, just add this code snippet and change the src of audio file.</p><pre><code class="language-html">&lt;video controls&gt;
&lt;source src="tutorial.ogg" type="video /ogg" /&gt;
&lt;source src="tutorial.mp4" type="video /mpeg" /&gt;
Your browser does not support the video element. Kindly,update it to latest version.
&lt;/video&gt;
</code></pre><p>The controls attribute includes video controls, similar to play, pause, and volume.</p><p>This feature is supported by all modern/updated browsers. However, not all support the same video file format. My recommendation for a wide range of compatibilty is MP4, as it is the most widely accepted format. There are also two other formats (WebM and Ogg) that are supported in Chrome, Firefox, and Opera.</p><p>The element enables you to indicate alternative video files which the browser may choose from. The browser will utilize the first recognize format. In HTML5, there are 3 supported video formats: MP4, WebM, and Ogg.</p><p>The text between the &nbsp;tags will only be displayed in browsers that do not support the</p><p>There are several different elements of the video tag, many of these explanations are based on Mozilla’s web docs (linked below). There are even more if you click the link at the bottom.</p><h4 id="autoplay"><strong>autoplay</strong></h4><p>“autoplay” can be set to either true or false. You set it to true by adding it into the tag, if it is not present in the tag it is set to false. If set to true, the video will begin playing as soon as enough of the video has buffered for it to be able to play. Many people find autoplaying videos as disruptive or annoying so use this feature sparingly. Also note, that some mobile browsers, such as Safari for iOS, ignore this attribute.</p><pre><code class="language-html">&lt;video autoplay&gt;
&lt;source src="video.mp4" type="video/mp4" /&gt;
&lt;/video&gt;
</code></pre><h4 id="poster"><strong>poster</strong></h4><p>The “poster” attribute is the image that shows on the video until the user clicks to play it.</p><pre><code class="language-html">&lt;video poster="poster.png"&gt;
&lt;source src="video.mp4" type="video/mp4" /&gt;
&lt;/video&gt;
</code></pre><h4 id="controls"><strong>controls</strong></h4><p>The “controls” attribute can be set to true or false and will handle whether controls such as the play/pause button or volume slider appear. You set it to true by adding it into the tag, if it is not present in the tag it is set to false.</p><pre><code class="language-html">&lt;video controls&gt;
&lt;source src="video.mp4" type="video/mp4" /&gt;
&lt;/video&gt;
</code></pre><p>There are many more attributes that can be added that are optional to customize the videoplayer in the page. To learn more, click on the links below.</p><h2 id="html5-web-storage-example"><strong>HTML5 Web Storage Example</strong></h2><p>Web storage allows web applications to store up to 5MB of information in browser storage per origin (per domain and protocol).</p><h3 id="types-of-web-storage"><strong>Types of Web Storage</strong></h3><p>There are two objects for storing data on the client:</p><p><code>window.localStorage</code>: stores data with no expiration date and lives until removed.</p><pre><code class="language-javascript">// Store Item
localStorage.setItem("foo", "bar");
// Get Item
localStorage.getItem("foo"); //returns "bar"</code></pre><p><code>window.sessionStorage</code>: stores data for one session, where data is lost when the browser / browser tab is closed.</p><pre><code class="language-javascript">// Store Item
sessionStorage.setItem("foo", "bar");
// Get Item
sessionStorage.getItem("foo"); //returns "bar"</code></pre><p>Since the current implementation only supports string-to-string mappings, you need to serialize and de-serialize other data structures.</p><p>You can do so using JSON.stringify() and JSON.parse().</p><p>For e.g. for the given JSON</p><pre><code class="language-text">var jsonObject = { 'one': 1, 'two': 2, 'three': 3 };</code></pre><p>We first convert the JSON object to string and save in the local storage:</p><pre><code class="language-text">localStorage.setItem('jsonObjectString', JSON.stringify(jsonObject));</code></pre><p>To get the JSON object from the string stored in local storage:</p><pre><code class="language-text">var jsonObject = JSON.parse(localStorage.getItem('jsonObjectString'));</code></pre><h2 id="mailto-links-example">Mailto Links Example</h2><p>A mailto link is a kind of hyperlink (<code>&lt;a href=""&gt;&lt;/a&gt;</code>) with special parameters that lets you specify additional recipients, a subject line, and/or a body text.</p><h3 id="the-basic-syntax-with-a-recipient-is-"><strong>The basic syntax with a recipient is:</strong></h3><pre><code class="language-html">&lt;a href="mailto:friend@something.com"&gt;Some text&lt;/a&gt;</code></pre><h3 id="more-customization-"><strong>More customization!</strong></h3><h4 id="adding-a-subject-to-that-mail-"><strong>Adding a subject to that mail:</strong></h4><p>If you want to add a specific subject to that mail, be careful to add <code>%20</code> or <code>+</code> everywhere there’s a space in the subject line. An easy way to ensure that it is properly formatted is to use a <a href="https://meyerweb.com/eric/tools/dencoder/">URL Decoder / Encoder</a>.</p><h4 id="adding-body-text-"><strong>Adding body text:</strong></h4><p>Similarly, you can add a specific message in the body portion of the email: Again, spaces have to be replaced by <code>%20</code> or <code>+</code>. After the subject paramater, any additional parameter must be preceded by <code>&amp;</code></p><p>Example: Say you want users to send an email to their friends about their progress at Free Code Camp:</p><p>Address: empty</p><p>Subject: Great news</p><p>Body: I am becoming a developer</p><p>Your html link now:</p><pre><code class="language-html">&lt;a href="mailto:?subject=Great%20news&amp;body=I%20am%20becoming%20a%20developer"&gt;Send mail!&lt;/a&gt;</code></pre><p>Here, we’ve left mailto empty (<code>mailto:?</code>). This will open the user’s email client and the user will add the recipient address themselves.</p><h4 id="adding-more-recipients-"><strong>Adding more recipients:</strong></h4><p>In the same manner, you can add CC and bcc parameters. Separate each address by a comma!</p><p>Additional parameters must be preceded by <code>&amp;</code>.</p><pre><code class="language-html">&lt;a href="mailto:firstfriend@something.com?subject=Great%20news&amp;cc=secondfriend@something.com,thirdfriend@something.com&amp;bcc=fourthfriend@something.com"&gt;Send mail!&lt;/a&gt;</code></pre><h2 id="thank-you-for-using-this-html-reference-happy-coding-">Thank you for using this HTML reference. Happy coding!</h2>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
