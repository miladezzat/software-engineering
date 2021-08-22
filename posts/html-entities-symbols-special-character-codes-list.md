---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c9ad4740569d1a4ca280b.jpg"
tags: [HTML]
description: "Most ASCII characters have a special code you can use in HTML"
author: "Milad E. Fahmy"
title: "HTML Entities – A List of HTML Space and other HTML Symbols and Special Character Codes"
created: "2021-08-15T22:49:20+02:00"
modified: "2021-08-15T22:49:20+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-html tag-reference ">
<header class="post-full-header">
<h1 class="post-full-title">HTML Entities – A List of HTML Space and other HTML Symbols and Special Character Codes</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c9ad4740569d1a4ca280b.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9ad4740569d1a4ca280b.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9ad4740569d1a4ca280b.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9ad4740569d1a4ca280b.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c9ad4740569d1a4ca280b.jpg" alt="HTML Entities – A List of HTML Space and other HTML Symbols and Special Character Codes">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Most ASCII characters have a special code you can use in HTML to make that character reliably appear.</p><p>These HTML Entities are particularly helpful for, say, manually inserting whitespace into your HTML.</p><p>Each of these codes starts with an ampersand and ends with a semicolon.</p><p>You can use these anywhere in your HTML to reliably create that character. It should render the same regardless of which language your users' browsers are set to.</p><p>Some of symbols these have easier-to-remember codes. For example, the Euro currency character (€) is <code>&amp;euro;</code> </p><p>Where possible, I've used these easier-to-remember codes instead of their numeric codes.</p><h2 id="how-to-use-the-nbsp-whitespace-character-code">How to Use the &amp;nbsp; whitespace character code</h2><p>For example, if you wanted to insert a whitespace character, you could do something like this:</p><pre><code class="language-html">&lt;span&gt;Superpower:&amp;nbsp;listening&lt;/span&gt;</code></pre><p>You can even insert several of these in a row to create make-shift text padding:</p><pre><code class="language-html">&lt;span&gt;Superpower:&amp;nbsp;&amp;nbsp;&amp;nbsp;listening&lt;/span&gt;</code></pre><h2 id="how-to-make-a-newline-in-hmtl-using-the-13-newline-character-code">How to Make a Newline in HMTL using the &amp;#13; newline character code</h2><p>If you wanted to force a newline:</p><pre><code class="language-html">&lt;p&gt;This is paragraph text and &amp;#13; woops there is a new line.&lt;/p&gt;</code></pre><p>And yes, you can use several of these back-to-back, too:</p><pre><code class="language-html">&lt;p&gt;This is paragraph text and &amp;#13;&amp;#13;&amp;#13; woops there are several new lines.&lt;/p&gt;</code></pre><h2 id="a-full-list-of-commonly-used-html-entity-character-codes">A Full List of Commonly-Used HTML Entity Character Codes</h2><p>Below is a nice ASCII-formatted table of the most commonly-used symbols and characters. It took me a while to assemble all of these get them looking good.</p><p>As a developer, when I search for these codes I often get results that are image-based. These are inaccessible to people with visual disabilities, and make it hard for everyone to copy-paste the codes.</p><p>So if you find this helpful, please link to it and share it with your friends so more people can benefit from it. ?</p><pre><code>
+----------+--------+-----------------------------+
|  &amp;code   | symbol |   description         |
+----------+--------+-----------------------------+
| &amp;#33;    | !| exclamation point           |
| &amp;#34;    | "| double quotation mark       |
| &amp;#35;    | #| hash symbol (octothorpe)    |
| &amp;#36;    | $| dollar sign                 |
| &amp;#37;    | %| percentate sign             |
| &amp;#38;    | &amp;| ampersand                   |
| &amp;#39;    | '| apostrophe                  |
| &amp;#40;    | (| left parenthesis            |
| &amp;#41;    | )| right parenthesis           |
| &amp;#42;    | *| asterisk                    |
| &amp;#43;    | +| plus sign                   |
| &amp;#44;    | ,| comma                       |
| &amp;#45;    | -| hyphen                      |
| &amp;#46;    | .| period                      |
| &amp;#47;    | /| forward slash               |
| &amp;#48;    | 0| the number 0                |
| &amp;#49;    | 1| the number 1                |
| &amp;#50;    | 2| the number 2                |
| &amp;#51;    | 3| the number 3                |
| &amp;#52;    | 4| the number 4                |
| &amp;#53;    | 5| the number 5                |
| &amp;#54;    | 6| the number 6                |
| &amp;#55;    | 7| the number 7                |
| &amp;#56;    | 8| the number 8                |
| &amp;#57;    | 9| the number 9                |
| &amp;#58;    | :| colon                       |
| &amp;#59;    | ;| semicolon                   |
| &amp;#60;    | &lt;| less-than symbol            |
| &amp;#61;    | =| equals symbol               |
| &amp;#62;    | &gt;| greater-than symbol         |
| &amp;#63;    | ?| question mark               |
| &amp;#64;    | @| at symbol                   |
| &amp;#65;    | A| uppercase A                 |
| &amp;#66;    | B| uppercase B                 |
| &amp;#67;    | C| uppercase C                 |
| &amp;#68;    | D| uppercase D                 |
| &amp;#69;    | E| uppercase E                 |
| &amp;#70;    | F| uppercase F                 |
| &amp;#71;    | G| uppercase G                 |
| &amp;#72;    | H| uppercase H                 |
| &amp;#73;    | I| uppercase I                 |
| &amp;#74;    | J| uppercase J                 |
| &amp;#75;    | K| uppercase K                 |
| &amp;#76;    | L| uppercase L                 |
| &amp;#77;    | M| uppercase M                 |
| &amp;#78;    | N| uppercase N                 |
| &amp;#79;    | O| uppercase O                 |
| &amp;#80;    | P| uppercase P                 |
| &amp;#81;    | Q| uppercase Q                 |
| &amp;#82;    | R| uppercase R                 |
| &amp;#83;    | S| uppercase S                 |
| &amp;#84;    | T| uppercase T                 |
| &amp;#85;    | U| uppercase U                 |
| &amp;#86;    | V| uppercase V                 |
| &amp;#87;    | W| uppercase W                 |
| &amp;#88;    | X| uppercase X                 |
| &amp;#89;    | Y| uppercase Y                 |
| &amp;#90;    | Z| uppercase Z                 |
| &amp;#91;    | [| left square bracket         |
| &amp;#92;    | \| backslash                   |
| &amp;#93;    | ]| right square bracket        |
| &amp;#94;    | ^| caret                       |
| &amp;#95;    | _| underscore                  |
| &amp;#96;    | `| backtick                    |
| &amp;#97;    | a| lowercase a                 |
| &amp;#98;    | b| lowercase b                 |
| &amp;#99;    | c| lowercase c                 |
| &amp;#100;   | d| lowercase d                 |
| &amp;#101;   | e| lowercase e                 |
| &amp;#102;   | f| lowercase f                 |
| &amp;#103;   | g| lowercase g                 |
| &amp;#104;   | h| lowercase h                 |
| &amp;#105;   | i| lowercase i                 |
| &amp;#106;   | j| lowercase j                 |
| &amp;#107;   | k| lowercase k                 |
| &amp;#108;   | l| lowercase l                 |
| &amp;#109;   | m| lowercase m                 |
| &amp;#110;   | n| lowercase n                 |
| &amp;#111;   | o| lowercase o                 |
| &amp;#112;   | p| lowercase p                 |
| &amp;#113;   | q| lowercase q                 |
| &amp;#114;   | r| lowercase r                 |
| &amp;#115;   | s| lowercase s                 |
| &amp;#116;   | t| lowercase t                 |
| &amp;#117;   | u| lowercase u                 |
| &amp;#118;   | v| lowercase v                 |
| &amp;#119;   | w| lowercase w                 |
| &amp;#120;   | x| lowercase x                 |
| &amp;#121;   | y| lowercase y                 |
| &amp;#122;   | z| lowercase z                 |
| &amp;#123;   | {| left curly brace            |
| &amp;#124;   | || vertical bar                |
| &amp;#125;   | }| right curly brace           |
| &amp;#126;   | ~| tilde                       |
| &amp;larr;   | ←| left arrow                  |
| &amp;uarr;   | ↑| up arrow                    |
| &amp;rarr;   | →| right arrow                 |
| &amp;darr;   | ↓| down arrow                  |
| &amp;harr;   | ↔| left-right arrow            |
| &amp;lArr;   | ⇐| left double arrow           |
| &amp;uArr;   | ⇑| up double arrow             |
| &amp;rArr;   | ⇒| right double arrow          |
| &amp;dArr;   | ⇓| down double arrow           |
| &amp;hArr;   | ⇔| left-right double arrow     |
| &amp;lsquo;  | ‘| left single smart quote     |
| &amp;rsquo;  | ’| right single smart quote    |
| &amp;ldquo;  | “| left double smart quote     |
| &amp;rdquo;  | ”| right double smart quote    |
| &amp;#8218;  | ‚| single low quotation mark   |
| &amp;#8222;  | „| double low quotation mark   |
| &amp;ndash;  | -| en dash                     |
| &amp;mdash;  | –| em dash                     |
| &amp;nbsp;   |  | nonbreaking space           |
| &amp;iexcl;  | ¡| inverted exclamation mark   |
| &amp;sect;   | §| section sign (used in law)  |
| &amp;brvbar; | ¦| broken vertical bar         |
| &amp;copy;   | ©| copyright symbol            |
| &amp;reg;    | ®| registered trademark symbol |
| &amp;#8482;  | ™| trademark sign              |
| &amp;cent;   | ¢| cent sign                   |
| &amp;pound;  | £| Pound Sterling sign         |
| &amp;yen;    | ¥| Yen sign                    |
| &amp;euro;   | €| Euro sign                   |
| &amp;plusmn; | ±| plus-or-minus sign          |
| &amp;micro;  | µ| micro symbol (mu)           |
| &amp;183;    | ·| middle dot character        |
| &amp;deg;    | °| degree sign                 |
| &amp;sup1;   | ¹| superscript one             |
| &amp;sup2;   | ²| superscript two (squared)   |
| &amp;sup3;   | ³| superscript three (cubed)   |
| &amp;para;   | ¶| paragraph sign              |
| &amp;middot; | ·| middle dot                  |
| &amp;frac14; | ¼| one quarter fraction        |
| &amp;frac12; | ½| one half fraction           |
| &amp;frac34; | ¾| three quarters fraction     |
| &amp;iquest; | ¿| inverted question mark      |
| &amp;#8224;  | †| dagger                      |
| &amp;#8225;  | ‡| double dagger               |
| &amp;#8226;  | •| bullet                      |
| &amp;#8230;  | …| ellipsis (three dots)       |
+----------+--------+-----------------------------+</code></pre>
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
