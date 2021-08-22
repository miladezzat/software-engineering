---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c9d3a740569d1a4ca3699.jpg"
tags: [HTML]
description: "HTML elements can have attributes, which contain additional i"
author: "Milad E. Fahmy"
title: "HTML Attributes Explained"
created: "2021-08-15T22:49:44+02:00"
modified: "2021-08-15T22:49:44+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-html tag-toothbrush ">
<header class="post-full-header">
<h1 class="post-full-title">HTML Attributes Explained</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c9d3a740569d1a4ca3699.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9d3a740569d1a4ca3699.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9d3a740569d1a4ca3699.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9d3a740569d1a4ca3699.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c9d3a740569d1a4ca3699.jpg" alt="HTML Attributes Explained">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>HTML elements can have attributes, which contain additional information about the element.</p><p>HTML attributes generally come in name-value pairs, and always go in the opening tag of an element. The attribute name says what type of information you’re providing about the element, and the attribute value is the actual information.</p><p>For example, an anchor (<code>&lt;a&gt;</code>) element in an HTML document creates links to other pages, or other parts of the page. You use the <code>href</code> attribute in the opening <code>&lt;a&gt;</code> tag to tell the browser where the link sends a user.</p><p>Here’s an example of a link that sends users to freeCodeCamp’s home page:</p><pre><code class="language-html">&lt;a href="www.freecodecamp.org"&gt;Click here to go to freeCodeCamp!&lt;/a&gt;</code></pre><p>Notice that the attribute name (<code>href</code>) and value (“www.freeCodeCamp.org”) are separated with an equals sign, and quotes surround the value.</p><p>There are many different HTML attributes, but most of them only work on certain HTML elements. For example, the <code>href</code> attribute won’t work if it’s placed in an opening <code>&lt;h1&gt;</code> tag.</p><p>In the example above, the value supplied to the <code>href</code> attribute could be any valid link. However, some attributes only have a set of valid options you can use, or values need to be in a specific format. The <code>lang</code> attribute tells the browser the default language of the contents in an HTML element. The values for the <code>lang</code> attribute should use standard language or country codes, such as <code>en</code> for English, or <code>it</code> for Italian.</p><h2 id="boolean-attributes"><strong>Boolean Attributes</strong></h2><p>Some HTML attributes don’t need a value because they only have one option. These are called Boolean attributes. The presence of the attribute in a tag will apply it to that HTML element. However, it’s okay to write out the attribute name and set it equal to the one option of the value. In this case, the value is usually the same as the attribute name.</p><p>For example, the <code>&lt;input&gt;</code> element in a form can have a <code>required</code> attribute. This requires users to fill out that item before they can submit the form.</p><p>Here are examples that do the same thing:</p><pre><code class="language-html">&lt;input type="text" required &gt;
&lt;input type="text" required="required" &gt;</code></pre><p>You can read more about the &lt;a href&gt;, &lt;a target&gt;, &lt;script&gt; src, and roll attributes here:</p><h2 id="a-href-attribute"><a href="/news/the-a-href-attribute-explained/">&lt;a href&gt; Attribute</a></h2><h2 id="script-src-attribute"><strong><a href="/news/link-javascript-to-html-with-the-src/">&lt;script&gt; src Attribute</a></strong></h2><h2 id="roll-attribute"><a href="/news/html-role-attribute/">roll Attribute</a></h2><h2 id="a-target-attribute"><a href="/news/the-a-target-html-attribute-explained/">&lt;a target&gt; Attribute</a></h2><p></p><p>Now let's learn more about some other HTML attributes:</p><h2 id="p-align-attribute"><strong>P Align Attribute</strong></h2><h3 id="important"><strong>Important</strong></h3><p>This attribute is not supported in HTML5. It is recommended to use the <a href="https://guide.freecodecamp.org/css/text-align"><code>text-align</code> CSS property</a>.</p><p>To align the text inside a <code>&lt;p&gt;</code> tag, this attribute will help.</p><h3 id="syntax"><strong>Syntax</strong></h3><pre><code class="language-html">&lt;p align="position"&gt;Lorem Ipsum...&lt;/p&gt;</code></pre><h3 id="attributes"><strong>Attributes</strong></h3><ul><li><strong><strong>left</strong></strong> - Text aligns to the left</li><li><strong><strong>right</strong></strong> - Text aligns to the right</li><li><strong><strong>center</strong></strong> - Text aligns to the center</li><li><strong><strong>justify</strong></strong> - All lines of text have equal width</li></ul><h3 id="example"><strong>Example</strong></h3><pre><code class="language-html">&lt;html&gt;
&lt;body&gt;
&lt;p align="center"&gt;Paragraph align attribute example&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre><h2 id="img-src-attribute"><strong>Img Src Attribute</strong></h2><p>The <code>&lt;img src&gt;</code> attribute refers to the source of the image you want to display. The <code>img</code> tag will not display an image without the <code>src</code> attribute. However, if you set the source to the location of the image, you can display any image.</p><p>There is an image of the freeCodeCamp Logo located at <code>https://avatars0.githubusercontent.com/u/9892522?v=4&amp;s=400</code></p><p>You can set that as the image using the <code>src</code> attribute.</p><pre><code class="language-html">&lt;html&gt;
&lt;head&gt;
&lt;title&gt;Img Src Attribute Example&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;img src="https://avatars0.githubusercontent.com/u/9892522?v=4&amp;s=400"&gt;
&lt;/body&gt;
&lt;body&gt;
&lt;font size="6"&gt;This is some text!&lt;/font&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre><p>Note : <code>The size attribute of &lt;font&gt; is not supported in HTML5. Use CSS instead.</code></p><h2 id="font-color-attribute"><strong>Font Color Attribute</strong></h2><p>This attribute is used to set a color to the text enclosed in a <code>&lt;font&gt;</code> tag.</p><h3 id="syntax-"><strong>Syntax:</strong></h3><p>html</p><pre><code class="language-text">
### Important:
This attribute is not supported in HTML5. Instead, this [freeCodeCamp article](https://guide.freecodecamp.org/css/colors) specifies a CSS method, which can be used.
### Note:
A color can also be specified using a 'hex code' or an 'rgb code', instead of using a name.
### Example:
1. Color name attribute
```html
&lt;html&gt;
&lt;body&gt;
&lt;font color="green"&gt;Font color example using color attribute&lt;/font&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre><p>Hex code attribute</p><pre><code class="language-html">&lt;html&gt;
&lt;body&gt;
&lt;font color="#00FF00"&gt;Font color example using color attribute&lt;/font&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre><p>RGB attribute</p><pre><code class="language-html">&lt;html&gt;
&lt;body&gt;
&lt;font color="rgb(0,255,0)"&gt;Font color example using color attribute&lt;/font&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre><h2 id="autofocus-attribute"><strong>Autofocus Attribute </strong></h2><p>The <strong><strong>autofocus</strong></strong> attribute is a boolean attribute.</p><p>When present, it specifies that the element should automatically get input focus when the page loads.</p><p>Only one form element in a document can have the <strong><strong>autofocus</strong></strong> attribute. It cannot be applied to <code>&lt;input type="hidden"&gt;</code>.</p><h3 id="applies-to"><strong>Applies to</strong></h3><p>ElementAttribute<code>&lt;button&gt;</code>autofocus<code>&lt;input&gt;</code>autofocus<code>&lt;select&gt;</code>autofocus<code>&lt;textarea&gt;</code>autofocus</p><h3 id="example-1"><strong>Example</strong></h3><pre><code class="language-html">&lt;form&gt;
&lt;input type="text" name="fname" autofocus&gt;
&lt;input type="text" name="lname"&gt;
&lt;/form&gt;</code></pre><h3 id="compatibility"><strong>Compatibility</strong></h3><p>This is an HTML5 attribute.</p><h2 id="onclick-event-attribute"><strong>Onclick Event Attribute</strong></h2><p>When the element is clicked fires a event.</p><p>It works just like the <em>onclick method</em> or <code>addEventListener('click')</code> to the element.</p><pre><code class="language-html">&lt;element onclick="event"&gt;&lt;/element&gt;</code></pre><p><code>event</code> can be a JavaScript function or you can write raw JavaScript</p><h3 id="examples"><strong>Examples</strong></h3><p>Changing the color of a <code>&lt;p&gt;</code> element when clicked</p><pre><code class="language-html">&lt;p id="text" onclick="redify()"&gt;Change my color&lt;/p&gt;
&lt;script&gt;
function redify(){
let text = document.querySelector('#text');
text.style.color = "red";
}
&lt;/script&gt;</code></pre><p>Using raw JavaScript onclick attribute:</p><pre><code class="language-html">&lt;button onclick="alert('Hello')"&gt;Hello World&lt;/button&gt;</code></pre><h2 id="img-align-attribute"><strong>Img Align Attribute</strong></h2><p>The align attribute of an image specifies where the image should be aligned according to the surrounding element.</p><p>Attribute Values:<br>right - Align image to the right left - Align image to the left<br>top - Align image to the top<br>bottom - Align image to the bottom<br>middle - Align image to the middle</p><p>For example:</p><pre><code class="language-html">&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
&lt;title&gt;Img Align Attribute&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;p&gt;This is an example. &lt;img src="image.png" alt="Image" align="middle"&gt; More text right here
&lt;img src="image.png" alt="Image" width="100"/&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre><p>We can also align in right if we want:</p><pre><code class="language-html">&lt;p&gt;This is another example&lt;img src="image.png" alt="Image" align="right"&gt;&lt;/p&gt;</code></pre><p><strong><strong>Please note the align attribute is not supported in HTML5, and you should use CSS instead. However, it is still supported by all the major browsers.</strong></strong></p><h2 id="input-type-attribute"><strong>Input Type Attribute</strong></h2><p>The input type attribute specifies the type of the input the user should put in your form.</p><h3 id="text"><strong>text</strong></h3><p>One line of a text.</p><pre><code class="language-html">    &lt;form&gt;
&lt;label for="login"&gt;Login:&lt;/label&gt;
&lt;input type="text" name="login"&gt;
&lt;/form&gt;</code></pre><h3 id="password"><strong>password</strong></h3><p>One line of a text. Text is automatically displayed as a series of dots or asterisks (depends on the browser and OS).</p><pre><code class="language-html">    &lt;form&gt;
&lt;label for="password"&gt;Password:&lt;/label&gt;
&lt;input type="password" name="password"&gt;
&lt;/form&gt;</code></pre><h3 id="email"><strong>email</strong></h3><p>The HTML checks if the input matches the e-mail address format (something@something).</p><pre><code class="language-html">    &lt;form&gt;
&lt;label for="email"&gt;E-mail address:&lt;/label&gt;
&lt;input type="email" name="email"&gt;
&lt;/form&gt;</code></pre><h3 id="number"><strong>number</strong></h3><p>Allow only numeric input. You can also specify the min and max value allowed. The example below check that the input is number between 1 and 120.</p><pre><code class="language-html">    &lt;form&gt;
&lt;label for="age"&gt;Age:&lt;/label&gt;
&lt;input type="number" name="age" min="1" max="120"&gt;
&lt;/form&gt;</code></pre><h3 id="radio"><strong>radio</strong></h3><p>Only one option can be selected by the user. The group of radio buttons need to have the same name attribute. You can select automatically one option by using <code>checked</code> property (in example below the value Blue is selected).</p><pre><code class="language-html">    &lt;form&gt;
&lt;label&gt;&lt;input type="radio" name="color" value="red"&gt;Red&lt;/label&gt;
&lt;label&gt;&lt;input type="radio" name="color" value="green"&gt;Green&lt;/label&gt;
&lt;label&gt;&lt;input type="radio" name="color" value="blue" checked&gt;Blue&lt;/label&gt;
&lt;/form&gt;</code></pre><h3 id="checkbox"><strong>checkbox</strong></h3><p>User can select zero or more options from the group of checkboxes. You can use <code>checked</code> property here too for one or more options.</p><pre><code class="language-html">    &lt;form&gt;
&lt;label&gt;&lt;input type="checkbox" name="lang" value="english"&gt;english&lt;/label&gt;
&lt;label&gt;&lt;input type="checkbox" name="lang" value="spanish"&gt;spanish&lt;/label&gt;
&lt;label&gt;&lt;input type="checkbox" name="lang" value="french"&gt;french&lt;/label&gt;
&lt;/form&gt;</code></pre><h3 id="button"><strong>button</strong></h3><p>The input is displayed as button, the text which should be displayed in the button is in value attribute.</p><pre><code class="language-html">    &lt;form&gt;
&lt;input type="button" value="click here"&gt;
&lt;/form&gt;</code></pre><h3 id="submit"><strong>submit</strong></h3><p>Displays the submit button. The text which should be displayed in the button is in value attribute. After clicking on the button, the HTML do the validation and if it passes, the form is submitted.</p><pre><code class="language-html">    &lt;form&gt;
&lt;input type="submit" value="SUBMIT"&gt;
&lt;/form&gt;</code></pre><h3 id="reset"><strong>reset</strong></h3><p>Displays the reset button. The text which should be displayed in the button is in value attribute. After clicking on the button, all values from the form are deleted.</p><pre><code class="language-html">    &lt;form&gt;
&lt;input type="reset" value="CANCEL"&gt;
&lt;/form&gt;</code></pre><p>There are more types elements.</p><h2 id="other-html-attributes-">Other HTML Attributes:</h2><h3 id="script-src-attribute-1"><a href="/news/link-javascript-to-html-with-the-src/">&lt;script&gt; src attribute</a></h3><h3 id="roll-attribute-1"><a href="/news/html-role-attribute/">roll attribute</a></h3><h3 id="a-href-attribute-1"><a href="/news/the-a-href-attribute-explained/">&lt;a href&gt; attribute</a></h3><h3 id="a-target-attribute-1"><a href="/news/the-a-target-html-attribute-explained/">&lt;a target&gt; attribute</a></h3><p></p><p></p><h2></h2>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
