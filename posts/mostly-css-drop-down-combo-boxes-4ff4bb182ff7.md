---
card: "https://cdn-media-1.freecodecamp.org/images/1*LL8iCzq1GKLgtaP_Y_be7w.jpeg"
tags: [CSS]
description: "by David Piepgrass"
author: "Milad E. Fahmy"
title: "Line-by-line: advanced CSS tricks for click-to-open drop-down lists and menus"
created: "2021-08-16T10:11:46+02:00"
modified: "2021-08-16T10:11:46+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-css tag-web-development tag-coding tag-tech tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">Line-by-line: advanced CSS tricks for click-to-open drop-down lists and menus</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*LL8iCzq1GKLgtaP_Y_be7w.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*LL8iCzq1GKLgtaP_Y_be7w.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*LL8iCzq1GKLgtaP_Y_be7w.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*LL8iCzq1GKLgtaP_Y_be7w.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*LL8iCzq1GKLgtaP_Y_be7w.jpeg" alt="Line-by-line: advanced CSS tricks for click-to-open drop-down lists and menus">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
&lt;option&gt;Apple&lt;/option&gt;
&lt;option&gt;Banana&lt;/option&gt;
&lt;option&gt;Cherry&lt;/option&gt;
&lt;option&gt;Dewberry&lt;/option&gt;
&lt;div&gt;Simple combo box&lt;/div&gt;
&lt;div tabindex="-1" class="downarrow"&gt;&lt;/div&gt;
&lt;div&gt;
Contents of drop-down popup go here
&lt;/div&gt;
&lt;/div&gt;</code></pre><p>By default, the drop-down will only open when the down arrow (▾) is clicked. To make the box open when the top content is clicked, you need to add the <code>dropdown</code> class to the <code>combobox</code>, and add a <code>tabindex="0"</code> attribute to the first child:</p><pre><code class="language-html">&lt;div class="combobox dropdown"&gt;
&lt;div tabindex="0"&gt;Simple combo box&lt;/div&gt;
&lt;div tabindex="-1" class="downarrow"&gt;&lt;/div&gt;
&lt;div&gt;
Contents of drop-down popup go here
&lt;/div&gt;
&lt;/div&gt;</code></pre><p><strong><strong>Note:</strong></strong><code>tabindex="-1"</code> means “you can click to give it the focus, but you can’t focus it using Tab on the keyboard”. <code>tabindex="0"</code> means “you can focus it with a click or with the tab key, and the browser will choose the order in which different elements are focused by the Tab key.” Unlike a <code>&lt;select&gt;</code> element, the popup box won’t be able to go outside the browser window (this may be an intentional limitation of all user-defined content — if user-defined content could extend beyond the edge of the page area, there might be a security risk of web sites trying to confuse or trick users.)</p><p>As a bonus, you’ll be able to make a drop-down list that is <strong>not</strong> a combo box with the <code>dropdown</code> class alone:</p><pre><code class="language-html">&lt;div class="dropdown"&gt;
*** &lt;span tabindex="0"&gt;Dropdown menu&lt;/span&gt; ***
&lt;div&gt;
Contents of drop-down popup go here
&lt;/div&gt;
&lt;/div&gt;</code></pre><p>This is intended as a click-to-open drop-down menu (if you want a drop-down menu that opens on mouse hover instead of mouse click, there are already <a href="https://www.google.com/search?num=20&amp;q=pure+css+hover+menu" rel="noopener">many other tutorials</a> about that.)</p><p>In this case, the last element contains the drop-down content and all other children are always visible, but only elements with a <code>tabindex</code> attribute can be clicked to open the popup area.</p><p>You can safely edit the margin and border of a combo box and its children without messing up its behavior, except one thing: don’t let <code>padding-right</code> get too small because the ▾ down arrow is shown in the padding — its size should be at least <code>1em</code>.</p><h4 id="summary">Summary</h4><ul><li>The <code>combobox</code> class is for a combo box</li><li>The <code>dropdown</code> class is for menus and combo boxes that drop down when the top content is clicked (remember <code>tabindex="0"</code>)</li><li>The <code>downarrow</code> class adds the down-arrow icon (<code>tabindex="-1"</code> is required, because it cannot be added via CSS.)</li><li>The last child of <code>combobox</code> or <code>dropdown</code> is the dropdown content.</li></ul><p>And you can <a href="https://codepen.io/qwertie/pen/QBYMdZ" rel="noopener">preview the demo with source code</a>.</p><h3 id="css-features-we-will-need">CSS Features We Will Need</h3><p>We’ll need a <strong>lot</strong> of stuff for this. Here’s a list (feel free to skip and read later.)</p><h4 id="selectors">Selectors</h4><p><strong>Basic selectors:</strong> <br><code>.a</code> means “match elements with <code>class='a'</code>”.<br><code>A, B</code> means “match selector <code>A</code> or selector <code>B</code>”.<br><code>A B</code> means “match a <code>B</code> element that has an <code>A</code> element as an ancestor”.<br><code>A &gt; B</code> meaning "match a B element whose parent is an A element".</p><p><code><strong>:first-child</strong></code><strong> pseudo-selector:</strong><br><code>*:first-child</code> means “match any element as long as it is the first child of some parent element”.</p><p><strong><code>:last-child</code> pseudo-selector:</strong><br><code>*:last-child</code> means "match any element as long as it is the last child of another element". For example, <code>.combobox &gt; *:last-child</code> finds the last child of any element with <code>class="combobox"</code>.</p><p><code><strong>:empty</strong></code><strong> pseudo-selector:</strong><br><code>.downarrow:empty</code> means “match an element with <code>class="downarrow"</code> if it doesn’t have anything in it (not even plain text)”.</p><p><code><strong>:only-child</strong></code><strong> pseudo-selector:</strong><br><code>*:only-child</code> means “match any element if it is the only child of some other element”.</p><p><code><strong>:not</strong></code><strong> pseudo-selector:</strong><br><code>.dropdown:not(.sticky)</code> means “match an element with the <code>dropdown</code> class if it does not have the <code>sticky</code> class”.</p><p><code><strong>:focus</strong></code><strong> pseudo-selector:</strong><br><code>.downarrow:focus</code> means “match an element with the <code>downarrow</code> class if it has the <strong>focus</strong> because it has a <code>tabindex</code> and it was clicked with the mouse or selected with Tab”.</p><p><code><strong>:hover</strong></code><strong> pseudo-selector:</strong><br><code>.foo:hover</code> means “match an element with the <code>foo</code> class when the mouse pointer is on top of it”.</p><p><code>A ~ B</code> means “match <code>B</code> if an earlier sibling matched <code>A</code>”.</p><h4 id="styles">Styles</h4><p><strong>Basic styles:</strong><br>Make sure you understand the <a href="https://www.w3schools.com/css/css_boxmodel.asp" rel="noopener">box model</a> and its various associated styles (including <code>width</code>, <code>height</code>, <code>min-width </code>and <code>max-height</code>) before you continue. You should also know about other basic styles like <code>font-size</code>, <code>font-family</code>, <code>color</code>, and <code>background-color</code>.</p><p>You should also know about units, especially the <a href="https://css-tricks.com/the-lengths-of-css/" rel="noopener">most common units</a>:<br> <code>px</code>, <code>em</code>, <code>rem</code>, and <code>%</code>.</p><p><code><strong>box-sizing: border-box</strong></code><strong> style</strong><br>This means that the width and height of an element <a href="https://css-tricks.com/international-box-sizing-awareness-day/" rel="noopener">includes the padding and border</a>.</p><p><code><strong>display:</strong></code><strong> style</strong><br>We’ll be using <code>display: block</code>, which displays an element as a “block”, which is like a paragraph in that two adjacent blocks have line breaks between them.</p><p>We will also use <code>display: inline-block</code>, which displays an element <strong>inline</strong>, like an icon image within a paragraph, but still allows margins, borders and padding.</p><p>We will not explicitly use <code>display: inline</code>, which is used for elements that do not have margins, borders or padding and do not need line breaks between them (<code>&lt;b&gt;like this&lt;/b&gt;</code>).</p><p><a href="https://css-tricks.com/almanac/properties/d/display/" rel="noopener">Learn more</a> about display.</p><p><code><strong>position:</strong></code><strong> style</strong><br>In the combo box, we will see how this style is used to take elements out of the normal document flow.</p><p>Elements normally have a style of <code>position: static</code>, which just means “position it on the page normally”.</p><p><code>position: relative</code> is like <code>static</code>, except two things: first, the element can be shifted left, right, up or down without affecting any other elements.<br>However, the combo box doesn’t need this feature. The second effect of <code>relative</code> is to mark the element as “positioned”.</p><p>This matters because another position, <code>absolute</code>, positions an element relative to its nearest “positioned” ancestor. Specifically, the drop-down popup will use <code>position: absolute</code> in order to position itself relative to the top part of the combo box — therefore the combo box itself is marked <code>relative</code>.</p><p>Also, an <code>absolute</code> element doesn’t affect the positioning of other items on the page, not even its own parent element, and that’s just what we want for a popup box.</p><p><code><strong>left</strong></code><strong>, <code>top</code>, <code>right</code> and <code>bottom</code> styles</strong><br>These styles are used with <code>position: relative</code> and <code>position: absolute</code>, and they work a little differently for each one. More on that later.</p><p><a href="https://www.w3schools.com/css/css_positioning.asp" rel="noopener">Learn more</a> about positioning.</p><p><code><strong>outline:</strong></code> <strong>style</strong><br>Outline is an extra border drawn outside an element’s normal border. It is normally used to highlight an element, like to indicate it has been “selected” by a user. Because outlines are expected to be temporary, they don’t occupy space on the page — so adding an outline won’t push other elements out of the way.</p><p><code><strong>box-shadow:</strong></code> <strong>style</strong><br>Draws a shadow “under” the element (well, actually the shadow is drawn <strong>outside</strong> the element, which looks very strange if the element has no background). This will be handy for the drop-down popup!</p><p><code><strong>z-index:</strong></code> <strong>style</strong><br>This style changes the order in which an element is drawn by the browser. A <strong>higher</strong> z-index causes an element to be drawn <strong>later</strong> so that it appears to be above other things on the page.</p><p>We’ll need a large z-index for our drop-down popup so that it appears on top of everything else. The children of the popup will get a new “stacking context”, which basically means they will automatically be drawn on top of the popup, which is good.</p><p><a href="https://www.smashingmagazine.com/2009/09/the-z-index-css-property-a-comprehensive-look/" rel="noopener">Caution</a>: <code>z-index</code> only works on “positioned” elements.</p><p><code><strong>cursor:</strong></code> <strong>style</strong><br> Controls the mouse cursor’s <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/cursor" rel="noopener">appearance</a>.</p><p><code><strong>text-align:</strong></code> <strong>style</strong><br> Horizontal <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/text-align" rel="noopener">text justification</a> (<code>left</code>, <code>right</code> or <code>center</code>).</p><p><code><strong>pointer-events:</strong></code> <strong>style</strong><br>This style’s <code>none</code> setting makes an element “invisible” to <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/pointer-events" rel="noopener">mouse clicks</a>.</p><p><code><strong>transform:</strong></code> <strong>style</strong><br>Allows you to rotate, scale, skew, or translate a block (or inline-block) element. These <a href="https://www.w3schools.com/cssref/css3_pr_transform.asp" rel="noopener">transforms</a> are smart and affect mouse input also.</p><p>For example, you could rotate text 30 degrees and still select it with the mouse.</p><p><code><strong>transition:</strong></code> <strong>style</strong><br>Enables <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions" rel="noopener">animation</a> when styles change.</p><p><code>opacity:</code><strong> style</strong><br>A number between 0 and 1 controls how easy an element is to see: <br><code>1</code> is the normal value which makes an element fully visible<br><code>0</code> makes an element completely invisible. (Unlike <code>visibility: hidden</code> and <code>display: none</code>, the other ways of making something invisible, <code>opacity: 0</code> does not prevent the mouse from interacting with the element.)</p><p>In this article, we will use opacity for animation — by animating the transition between <code>opacity: 0</code> and <code>opacity: 1</code>, we can make an element fade in or out.</p><h4 id="pseudo-element">Pseudo-element</h4><p><code><strong>::before</strong></code> or <code><strong>::after</strong></code>: <br>Refers to a virtual element <strong>within</strong> an element previously selected, before or after its normal content.</p><p>For example if you write <code>p::before { content: "!" }</code> then <code>!</code> will appear at the beginning of every paragraph.</p><p>We can use <code>content</code> with <code>::before</code> or <code>::after</code> to draw the down arrow (▾).</p><h3 id="preparing-the-initial-appearance">Preparing the initial appearance</h3><p><code>.combobox</code> and <code>.dropdown</code> need to be <code>relative</code> so that the drop-down popup can be positioned relative to them. <code>display: inline-block</code> allows the combo box to have margins, padding and border. Unlike <code>display: block</code> it allows other things to appear on the same line (such as labels or other combo boxes.)</p><pre><code class="language-css">.combobox, .dropdown {
/* "relative" and "inline-block" (or just "block") are needed
here so that "absolute" works correctly in children */
position: relative;
display: inline-block;
}</code></pre><p>Combo boxes, but not drop-down lists, will have a built-in border:</p><pre><code class="language-css">.combobox {
border: 1px solid #999;
padding-right: 1.25em; /* leave room for ▾ */
}</code></pre><p>The color <code>#999</code> is slightly darker than the border on Chrome’s <code>&lt;select&gt;</code> element, and slightly lighter than FireFox's <code>&lt;select&gt;</code> element, so it doesn't look too much different than either of them.</p><h4 id="how-do-we-draw-the-little-down-arrow-">How do we draw the little down arrow (▾)?</h4><p>The difficulty here is controlling its height. The combo box might have content of an unpredictable size: small font, large font, one line or two lines. The arrow “button” needs to have the same height so that it works no matter where the user clicks on it — anywhere within the border should work.</p><p><strong>So, how can we make the arrow adapt to the height of its left sibling? </strong><br><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout" rel="noopener">CSS grid</a> can accomplish this straightforwardly, but it is not supported by all browsers. Perhaps <a href="https://stackoverflow.com/questions/29503227/how-to-make-flexbox-items-the-same-size" rel="noopener">Flexbox</a> could do the job too, but I decided to use an old trick for compatibility with older browsers: absolute positioning.</p><p>With absolute positioning, I can force the arrow to have the same height as its container.</p><p>The disadvantage of this approach is that the arrow will exist outside the normal flow of the document, so the browser won’t reserve any space for it. Instead, we will give the combo box some padding on the right side (<code>1.25em</code> above), and the arrow will live within the padding.</p><p>In absolute positioning mode, <code>top</code> aligns the top edge of an element relative to the top edge of its container: <code>top: 0</code> means the two top edges will be at the same location. Similarly <code>left: 0</code> aligns the left side of the element to the left side of the container, and so on.</p><p>Positive coordinates push the element “inward” relative to the container, so <code>top: 10px</code> means “put the top of the element 10px down from the top of the parent”, while <code>bottom: 10px</code> means “put the bottom of the element 10px up from the bottom of the parent.”</p><p>In this case we need <code>top: 0; bottom: 0; right: 0; width: 1.25em</code> to put the arrow on the right side, top-to-bottom.</p><pre><code class="language-css">.combobox &gt; .downarrow, .dropdown &gt; .downarrow {
display: block;     /* Allow margin/border/padding/size */
position: absolute; /* Outside normal flow */
top: 0;    /* Align top of downarrow with top edge of combobox */
bottom: 0; /* Align bottom of downarrow with bottom of combobox */
right: 0; /*Align right edge of downarrow with right of combobox*/
width: 1.25em;
cursor: default; /* Use arrow cursor instead of I-beam */
nav-index: -1; /* sets tabindex, nonfunctional in most browsers */
border-width: 0;  /* disable by default */
border-color: inherit;  /* copy parent border */
border-left: inherit;   /* copy parent border */
}</code></pre><p>Here, <code>display: block</code> and <code>display: inline-block</code> have the same effect, so I used the shorter one. I also disabled the I-beam mouse cursor normally shown over text (since the down arrow counts as text).</p><p>There is actually a way to set <code>tabindex</code> in CSS, it’s called <code>nav-index</code>. But most browsers don’t support it, so if you find that your combo box only works in Opera, you know why.</p><p>You must therefore add <code>tabindex="-1"</code> beside <code>class="downarrow"</code>.</p><p>This code disables the borders, with the caveat that the border color/style should be inherited from the parent element (the combo box) if other CSS increases <code>border-left-width</code>. You can use the <code>inherit</code> option on any attribute that doesn’t inherit from parent by default, by the way.</p><p>I decided there should be a left border if the popup won’t open when the left side is clicked. That way, the drop-down arrow looks like a button, subtly suggesting it can be clicked. Remember the plan: only <code>dropdown</code>, not <code>combobox</code> alone, will open when the left side is focused.</p><p>Therefore I will add a border when <code>combobox</code> alone is used:</p><pre><code class="language-css">.combobox:not(.dropdown) &gt; .downarrow {
border-left-width: 1px;
}</code></pre><p>Next, if the user has provided us with an empty <code>&lt;span class="downarrow"&gt;&lt;/span&gt;</code>, we need to magically add the missing down arrow character using <code>::before</code> (or <code>::after</code>) and <code>content</code>:</p><pre><code class="language-css">.downarrow:empty::before {
content: '▾';
}</code></pre><p>The down arrow needs to be centered within the <code>.downarrow</code> element, too. <code>text-align: center</code> will center the text horizontally, but vertical centering is tricky. <code>vertical-align: middle</code> doesn’t work, because it is designed to align <strong>inline</strong> elements <strong>with the surrounding text</strong>. What we want is to align our down arrow pseudo-element with the <strong>parent</strong> <code>.downarrow</code> container.</p><p>There’s a trick to it:</p><pre><code class="language-css">.downarrow::before, .downarrow &gt; *:only-child {
text-align: center; /* Center horizontally */
/* vertical centering trick */
position: relative; /* Allow the element to be shifted */
top: 50%;     /* Move down by 50% of container size */
transform: translateY(-50%); /* Move up by 50% of element size */
display: block;     /* `transform` requires block/inline-block */
}</code></pre><p>Remember that we add the <code>::before</code> content only if the <code>.downarrow</code> is empty. If the user has provided their own custom down arrow element, we still want to center it, hence the <code>.downarrow &gt; *:only-child</code> selector.</p><p>And if the combo box contains an <code>&lt;input&gt;</code> element, it shouldn’t have a border:</p><pre><code class="language-css">.combobox &gt; input {
border: 0 /* combo box already has a border */
}</code></pre><p>This next part is optional, but usually the first child of a combo box should have a width of 100% of its parent <code>.combobox</code> so that if the combo box is wider than its first child, the first child stretches to match. And in case the user constructed the combo box out of spans rather than divs (perhaps so it could be placed within a <code>&lt;p&gt;</code>), it may make sense to set the first child as <code>inline-block</code> so it can have padding and margins.</p><pre><code class="language-css">.combobox &gt; *:first-child {
width: 100%;
box-sizing: border-box; /* so 100% includes border &amp; padding */
display: inline-block;
}</code></pre><h3 id="preparing-the-drop-down-list">Preparing the drop-down list</h3><p>Initially we just want it hidden, so we can use <code>display: none</code>.</p><p>But in preparation for when it is visible, let’s set some other properties too. Start with <code>position: absolute</code> so it’s outside the normal document flow (remember that an <code>absolute</code> element is positioned relative to its nearest <code>relative</code> ancestor, which is <code>.combobox</code> or <code>.dropdown</code>). When displayed, it should have a border and a background, of course, and also a shadow underneath it.</p><p>Here you see <code>box-shadow: 1px 2px 4px 1px #4448</code>, which means “show a shadow 1px to the right of the element, 2px downward, blurred by 4px, and make the shadow 1px larger than the element itself, with a color of #4448”. We also need a nice big z-index so the popup will appear on top of everything else:</p><pre><code class="language-css">.dropdown &gt; *:last-child,
.combobox &gt; *:last-child {
display: none;    /* hidden by default */
position: absolute;     /* outside document flow */
left: 0;    /* Left side of popup = left side of parent */
top: 100%;  /* Top of popup = 100% below top of parent */
border: 1px solid #999; /* gray border */
background-color: #fff; /* white background */
box-shadow: 1px 2px 4px 1px #4448; /* shadow behind */
z-index: 9999;    /* draw on top of everything else */
min-width: 100%;  /* &gt;= 100% as wide as its container */
box-sizing: border-box; /* width includes border &amp; padding */
}</code></pre><p>Here I’ve used <code>left: 0</code> and <code>top: 100%</code> to position the popup correctly, but in this case it turns out that the <strong>default</strong> position of the popup is practically the same, so these styles aren’t really necessary.</p><p>To make the drop-down box visible, all we really need is <code>display: block</code>.</p><p><strong>But which selectors do we need to make that happen?</strong></p><pre><code class="language-css">??? {
display: block;
}</code></pre><p>Most obviously, the drop-down should be shown in these three cases.</p><ol><li>The user clicked the <code>.downarrow</code></li><li>The user clicked or tabbed to <code>.dropdown</code></li><li>The user clicked or tabbed to a child of <code>.dropdown</code></li></ol><p>The drop-down box is the last child, so we’ll need to combine the <code>*:last-child</code> selector with <code>:focus</code> to detect when one of the above things has been clicked or tabbed-to:</p><pre><code class="language-css">.combobox &gt; .downarrow:focus ~ *:last-child,
.dropdown:focus        &gt; *:last-child,
.dropdown &gt; *:focus    ~ *:last-child {
display: block;
}</code></pre><p>We’re not done yet, though. What if the user clicks a text box or a link inside the drop-down box? The click will cause the <code>.downarrow</code> or the <code>.dropdown</code> to lose the focus, causing the drop-down box to disappear instantly.</p><p>In the case of a link, the browser focuses the link when the mouse button goes down but it does not follow the link until the mouse button is released. So if the drop-down disappears instantly, any links in the drop-down cannot be followed!</p><p>To fix this, we should keep the box open whenever something within the <code>:last-child</code> has the focus:</p><pre><code class="language-css">.combobox &gt; .downarrow:focus ~ *:last-child,
.dropdown:focus &gt; *:last-child,
.dropdown &gt; *:focus ~ *:last-child,
.combobox &gt; *:last-child:focus-within,
.dropdown &gt; *:last-child:focus-within {
display: block;
}</code></pre><p><strong>Caution:</strong> This doesn’t work in Edge/IE (a workaround is described below).</p><p>If the down-arrow is clicked a second time, we should hide the drop-down box. This can be accomplished like so:</p><pre><code class="language-css">.downarrow:focus {
pointer-events: none; /* Causes second click to close */
}</code></pre><p>This causes the <code>.downarrow</code> to be invisible to mouse events when it has the focus, so that when you click it, you are actually clicking what is behind it (the <code>.combobox</code>). This causes it to lose the focus, which in turn causes the drop-down box to disappear.</p><p>We can do the same thing for <code>.dropdown</code>, so clicking the top area of a <code>.dropdown</code> again makes it disappear:</p><pre><code class="language-css">.dropdown &gt; *:not(:last-child):focus,
.downarrow:focus,
.dropdown:focus {
pointer-events: none; /* Causes second click to close */
}</code></pre><p>This mostly works. But if your top area contains a text box, there is a side effect since the text box won’t process mouse input normally. However, I have found that the text box is still usable.</p><p>In Firefox you can click and drag to select text if you start when the popup is closed, but it doesn’t work when the popup is open. In Edge it’s the opposite: you can click and drag to select text only when the popup is open. Either way, it’s <strong>basically</strong> usable since the user is likely to retry once if his input doesn’t work the first time.</p><p>Chrome’s behavior is… inconsistent. In any case, to get perfect behavior — where a click closes the box without causing the text box to lose focus — I think JavaScript is required.</p><h3 id="finishing-touches">Finishing touches</h3><p>The combo box should normally have a margin. But this seems optional, since <code>&lt;input&gt;</code> controls don’t have one by default:</p><pre><code class="language-css">.combobox {
margin: 5px;
}</code></pre><p>Let’s make this thing cooler by opening the box with animation.</p><p>The <code>transition</code> property is the easiest way to do animations. In fact, for our purposes, a simple command like <code>transition: 0.4s;</code> enables animations for all supported styles. But so far the only style we are changing is <code>display</code>, and changes to <code>display</code> cannot be animated.</p><p>So let’s try animating a transition from <code>opacity: 0</code> to <code>opacity: 1</code> by modifying our existing styles…</p><pre><code class="language-css">.dropdown &gt; *:last-child,
.combobox &gt; *:last-child {
display: none;
/*
... other styles same as before ...
*/
opacity: 0;
transition: 0.4s;
}
.combobox &gt; .downarrow:focus ~ *:last-child,
.dropdown:focus &gt; *:last-child,
.dropdown &gt; *:focus ~ *:last-child,
.combobox &gt; *:last-child:focus-within,
.dropdown &gt; *:last-child:focus-within {
display: block;
opacity: 1;
transition: 0.15s;
}</code></pre><p>The time on the transition controls how long it takes to <strong>enter</strong> the current state. So this code should mean “take 0.15 seconds to <strong>show</strong> and 0.4 seconds to <strong>hide</strong>.”</p><p>But <strong>the animation doesn’t work</strong>. It <a href="https://stackoverflow.com/questions/39304002/css-transition-disabled-by-displaynone" rel="noopener">turns out</a> that <code>display: hidden</code> blocks animations. Instead we need to use one of the <strong>other</strong> ways of hiding things. Another way to hide things is with <code>visibility: hidden</code>. Unfortunately, this partially blocks animations, too — the animation for showing the popup works, but the animation for hiding the popup doesn’t.</p><p>We can’t rely on <code>opacity: 0</code> <strong>by itself</strong> to hide an element, because the mouse can still interact with an element that has <code>opacity: 0</code>. However, we can fix this with <code>pointer-events: none</code>.</p><p>So the working fade-in and fade-out looks like this:</p><pre><code class="language-css">.dropdown &gt; *:last-child,
.combobox &gt; *:last-child {
display: block;
/*
... other styles same as before ...
*/
transition: 0.4s;
opacity: 0;
pointer-events: none;
}
.combobox &gt; .downarrow:focus ~ *:last-child,
.dropdown:focus &gt; *:last-child,
.dropdown &gt; *:focus ~ *:last-child,
.combobox &gt; *:last-child:focus-within,
.dropdown &gt; *:last-child:focus-within {
display: block;
transition: 0.15s;
opacity: 1;
pointer-events: auto;
}</code></pre><p>Another flourish we could add is to move the popup into position, like by animating <code>top</code>:</p><pre><code class="language-css">.dropdown &gt; *:last-child,
.combobox &gt; *:last-child {
display: block;
/*
... other styles same as before ...
*/
top: 0;
opacity: 0;
transition: 0.4s;
pointer-events: none;
}
.combobox &gt; .downarrow:focus ~ *:last-child,
.dropdown:focus &gt; *:last-child,
.dropdown &gt; *:focus ~ *:last-child,
.combobox &gt; *:last-child:focus-within,
.dropdown &gt; *:last-child:focus-within {
display: block;
top: 100%;
opacity: 1;
transition: 0.15s;
pointer-events: auto;
outline: 2px solid #48F8;
}</code></pre><p>Ideally we would have a focus rectangle for the combo box itself, like this:</p><pre><code class="language-css">.combobox:focus-within {
outline: 2px solid #48F;
}</code></pre><p>This works fine in Chrome. But in Firefox 61 the <code>outline</code> is expanded beyond the border to enclose the entire popup box also, which looks a little odd, especially if the popup box doesn’t have the same width as the top part. In Edge the outline doesn’t show up at all because Edge doesn’t support <code>:focus-within</code> (see below). So, what can we do instead?</p><p>I decided to use this:</p><pre><code class="language-css">.combobox &gt; *:not(:last-child):focus {
outline: 2px solid #48F8;
}</code></pre><p>This draws an outline around the focused child instead of the combo box itself. But this sometimes looks odd too, if the child is not the same size as the enclosing combo box. So I added transparency (<code>#48F8</code> instead of <code>#48F</code>) to make it less visible, and therefore less odd-looking in the worst case.</p><h4 id="stickiness">Stickiness</h4><p>The styles we have so far keep the box open only when something is focused. So if you click on plain text in the popup area, the popup closes. For the final version I expanded the list of reasons to keep the popup open to include a <code>sticky</code> style that will keep the drop-down open on mouse hover, so that clicking doesn’t close the box</p><pre><code class="language-css">.combobox &gt; .downarrow:focus ~ *:last-child,
.dropdown:focus &gt; *:last-child,
.dropdown &gt; *:focus ~ *:last-child,
.combobox &gt; *:last-child:focus-within,
.dropdown &gt; *:last-child:focus-within,
.combobox &gt; .sticky:last-child:hover,
.dropdown &gt; .sticky:last-child:hover {
display: block;
top: 100%;
opacity: 1;
transition: 0.15s;
pointer-events: auto;
}</code></pre><p>As I discussed earlier, glitches occur when the top area of a combo box contains a text box. To let you easily avoid this problem, I tweaked the existing CSS so that the <code>pointer-events: none</code> style is <strong>not</strong> applied if the <code>.dropdown</code> element also has the <code>sticky</code> class:</p><pre><code class="language-css">.dropdown:not(.sticky) &gt; *:not(:last-child):focus,
.downarrow:focus,
.dropdown:focus {
pointer-events: none; /* Causes second click to close */
}</code></pre><p>Finally, if a <code>.dropdown</code> list contains links, there is a small inconvenience. After clicking a link, the list will not close automatically since the link has the focus and we programmed the drop-down not to close when a child has the focus.</p><p>To avoid this I added support for a new <code>less-sticky</code> class. Like <code>sticky</code>, <code>less-sticky</code> keeps the popup open when the mouse hovers over it. Unlike <code>sticky</code>, <code>less-sticky</code> does not keep the popup open when a child has the focus.</p><p>So our new list of selectors is getting pretty long:</p><pre><code class="language-css">.combobox &gt; .downarrow:focus ~ *:last-child,
.dropdown:focus &gt; *:last-child,
.dropdown &gt; *:focus ~ *:last-child,
.combobox &gt; .sticky:last-child:hover,
.dropdown &gt; .sticky:last-child:hover,
.combobox &gt; .less-sticky:last-child:hover,
.dropdown &gt; .less-sticky:last-child:hover,
.combobox &gt; *:last-child:focus-within:not(.less-sticky),
.dropdown &gt; *:last-child:focus-within:not(.less-sticky) {
display: block;
opacity: 1;
transition: 0.15s;
pointer-events: auto;
top: 100%;
}</code></pre><p>And we’re not even done yet, because this is not compatible with Edge and Internet Explorer yet.</p><h3 id="edge-cases">Edge Cases</h3><p>Once I got my combo box working perfectly in Firefox and Chrome, I was dismayed to see it completely ugly and unusable in Edge. What went wrong?</p><p>First, the borders were gone because Edge and IE don’t support opacity on borders, as in <code>rgb(200,150,100,50)</code> or <code>#8888</code>. I had used <code>#8888</code> as the border. To make it work on Edge, I changed it to <code>#999</code>.</p><p>Another alternative is to offer a non-opaque border just for Edge:</p><pre><code class="language-css">border: 1px solid #888;  /* Edge/IE can't do border opacity */
border: 1px solid #8888; /* All other browsers */</code></pre><p>Second, click as I might — the down-dropping-divs just wouldn’t drop down!</p><p>In solving this issue, I learned something new — if a browser doesn’t understand a selector used in a CSS declaration, it will <strong>ignore the entire block</strong>.</p><p>For instance if you write <code>.x, .y, .z:unknown { margin:1em }</code>, then <code>x</code> and <code>y</code> won’t get margins simply because the browser doesn’t understand <code>unknown</code>.</p><p>It turned out that Edge doesn’t understand <code>:focus-within</code>, which is what allows the drop-down area to stay open when an <code>input</code> element deep within the drop-down area gets clicked. The problem was, I’d mixed supported and unsupported selectors together.</p><p>In order to make Edge work at all, I needed to repeat the whole block of “how-to-open-the-drop-down-list” styles separately for the selectors that use <code>:focus-within</code>, so that those selectors don’t stop the other selectors from working.</p><p>Then, as a workaround for the lack of <code>:focus-within</code>, I decided to attempt to <a href="https://stackoverflow.com/questions/43528940/how-to-detect-ie-and-edge-browsers-in-css" rel="noopener">detect Edge</a> and automatically keep any <code>.dropdown</code> list open when the mouse is <code>:hover</code>ing in that case. That way, it is still possible to use a focused element (such as an <code>a href</code> or an <code>input</code>) inside the drop-down area, although it will disappear early if the mouse moves off it.</p><p>The code for all this is as follows:</p><pre><code class="language-css">/* List of situations in which to show the dropdown list. */
.combobox &gt; .downarrow:focus ~ *:last-child,
.dropdown:focus &gt; *:last-child,
.dropdown &gt; *:focus ~ *:last-child,
.combobox &gt; .sticky:last-child:hover,
.dropdown &gt; .sticky:last-child:hover,
.combobox &gt; .less-sticky:last-child:hover,
.dropdown &gt; .less-sticky:last-child:hover,
.combobox &gt; *:last-child:focus:not(.less-sticky),
.dropdown &gt; *:last-child:focus:not(.less-sticky) {
display: block;
opacity: 1;
transition: 0.15s;
pointer-events: auto;
}
/* focus-within not supported by Edge/IE. Unsupported selectors
cause the entire block to be ignored, so we must repeat all
styles for focus-within separately. */
.combobox &gt; *:last-child:focus-within:not(.less-sticky),
.dropdown &gt; *:last-child:focus-within:not(.less-sticky) {
display: block;
opacity: 1;
transition: 0.15s;
pointer-events: auto;
}
/* detect Edge/IE and behave if though less-sticky is on for all
dropdowns (otherwise links won't be clickable) */
@supports (-ms-ime-align:auto) {
.dropdown &gt; *:last-child:hover {
display: block;
opacity: 1;
pointer-events: auto;
}
}
/* detect IE and do the same thing. */
@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
.dropdown &gt; *:last-child:hover {
display: block;
opacity: 1;
pointer-events: auto;
}
}</code></pre><p>Third, the <code>outline</code> style wasn’t working in Edge. Once again the problem was that Edge doesn’t support non-opaque outlines.</p><p>The solution is a special opaque style for Edge:</p><pre><code class="language-css">outline: 2px solid #8AF; /* Edge/IE can't do outline transparency */
outline: 2px solid #48F8;</code></pre><p>Fourth, I had placed two combo boxes within a <code>&lt;label&gt;</code> element, and attempting to open the second one always opens the first one instead. It turns out that in Edge, if you are using a mouse, you can only select the first input element within a label.</p><p>Fifth, the dropdown boxes didn’t have shadows. Once again this was because I used a non-opaque shadow, and once again Edge needed its own special CSS:</p><pre><code class="language-css">box-shadow: 1px 2px 4px 1px #666; /* Edge can't do shadow opacity */
box-shadow: 1px 2px 4px 1px #4448;</code></pre><p>Internet Explorer 11 has almost exactly the same limitations, so fixing Edge mostly fixed IE, except that a different browser detection technique was needed for IE than Edge.</p><h3 id="synchronizing-the-popup-with-the-top-area">Synchronizing the popup with the top area</h3><p>Unfortunately, CSS can’t do this for us. So in the final demo, JavaScript is used to update the top part of the combo box when the popup part changes. For instance, I used this jQuery-based code to update the top part of the color picker:</p><pre><code class="language-js">function parentComboBox(el) {
for (el = el.parentNode; el &amp;&amp;
Array.prototype.indexOf.call(el.classList, "combobox") &lt;= -1;)
el = el.parentNode;
return el;
}
$(".combobox .color").mousedown(function() {
var c = this.style.backgroundColor;
$(parentComboBox(this)).find(".color")[0].
style.backgroundColor = c;
});</code></pre><h3 id="final-version">Final version</h3><p><a href="https://codepen.io/qwertie/pen/QBYMdZ" rel="noopener">Click here</a> to view the demo with source code on CodePen.</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
