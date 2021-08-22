---
card: "/images/default.jpg"
tags: [JavaScript]
description: Bookmarklets are browser bookmarks that execute JavaScript in
author: "Milad E. Fahmy"
title: "What are Bookmarklets? How to Use JavaScript to Make a Bookmarklet in Chromium and Firefox"
created: "2021-08-15T19:26:07+02:00"
modified: "2021-08-15T19:26:07+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-chrome tag-firefox tag-automation tag-productivity ">
<header class="post-full-header">
<h1 class="post-full-title">What are Bookmarklets? How to Use JavaScript to Make a Bookmarklet in Chromium and Firefox</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2021/06/cover-defectivefox-o-1.png 300w,
/news/content/images/size/w600/2021/06/cover-defectivefox-o-1.png 600w,
/news/content/images/size/w1000/2021/06/cover-defectivefox-o-1.png 1000w,
/news/content/images/size/w2000/2021/06/cover-defectivefox-o-1.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2021/06/cover-defectivefox-o-1.png" alt="What are Bookmarklets? How to Use JavaScript to Make a Bookmarklet in Chromium and Firefox">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p><a href="https://en.wikipedia.org/wiki/Bookmarklet">Bookmarklets</a> are browser bookmarks that execute JavaScript instead of opening a webpage. They're also known as bookmark applets, favlets, or JavaScript bookmarks.</p>
<p>Bookmarklets are natively available in all major browsers, including Mozilla Firefox and Chromium-based browsers like Chrome or Brave.</p>
<h2 id="scripting-with-javascript">Scripting with JavaScript</h2>
<p>Learning how to write scripts provides many benefits, namely the huge time-savings from automating repetitive or tedious tasks.</p>
<p>If you aren't a developer, the idea of learning to code might be intimidating, however scripting doesn't require software engineering knowledge or design patterns. The goal isn't to make scalable software, but rather to automate specialized or trivial tasks.</p>
<p>Regardless of profession, even if you've never written code before, consider what you do in your browser. If you ever feel what you do is repetitive or robotic, consider the possibility of delegating the task to an actual robot.</p>
<h2 id="use-cases-for-bookmarklets">Use Cases for Bookmarklets</h2>
<p>With bookmarklets, you can manipulate the current page as the function will have the context of the current tab. This means you can:</p>
<ul>
<li>Click buttons virtually</li>
<li>Modify the content</li>
<li>Use the content of the page to open a new page</li>
<li>Remove elements from the page</li>
</ul>
<p>You can also make bookmarks that don't utilize the context at all, such as conditionally opening a URL, or generating HTML for a new tab.</p>
<p>You'll find some bookmarklets I made for this article in <a href="#example-bookmarklets">Example Bookmarklets</a>. They're just for demonstration, but should make the capabilities and implementations apparent.</p>
<h2 id="how-to-create-bookmarklets">How to Create Bookmarklets</h2>
<p>Creating a bookmarklet is almost identical to creating a regular bookmark. The only difference is that you'll write JavaScript in the URL field instead of an HTTP/HTTPS URL.</p>
<h3 id="navigate-to-the-bookmark-menu">Navigate to the Bookmark Menu</h3>
<h4 id="mozilla-firefox">Mozilla Firefox</h4>
<p>Either in your bookmarks bar, or in the Bookmarks sidebar (<code>CTRL</code> + <code>B</code>), you can right-click, then click "Add Bookmark...":</p>
<h4 id="chromium">Chromium</h4>
<p>You can right-click your bookmarks bar, then click "Add page...". Alternatively, you can go to your Bookmarks manager, then right-click and click "Add new bookmark":</p>
<h2 id="how-to-write-a-bookmarklet">How to Write a Bookmarklet</h2>
<p>In the URL field of the bookmark modal, write a JavaScript function in the following format.</p><pre><code class="language-js">javascript: (() =&gt; {
// Your code here!
})();</code></pre>
<p><code>javascript:</code> is the URL's protocol. This indicates that the browser should execute the bookmark as JavaScript.</p>
<p><code>(() =&gt; { })</code> defines an anonymous function (lambda). You should write the code you want to execute between the curly braces.</p>
<p><code>();</code> will execute the anonymous function you just created.</p>
alert('Hello, World!');
})();</code></pre>
<figcaption>"Hello, World!" as a browser bookmarklet.</figcaption>
</figure>
<p>You can also make it generate HTML and open it as an HTML document:</p><pre><code class="language-js">javascript: (() =&gt; {
return '&lt;h1 style="color: white; background-color: black;"&gt;Hello, World!&lt;/h1&gt;';
})();</code></pre>
<h3 id="spacing-for-bookmarklets">Spacing for Bookmarklets</h3>
<p>Most browsers don't allow a multiline input field in the bookmark URL, so you'll usually have to make strict use of curly braces (<code>{</code> and <code>}</code>) and semi-colons (<code>;</code>) when writing bookmarklets. This is especially important when scoping conditional constructs (<code>if</code>/<code>for</code>/<code>while</code>).</p>
<p>Other than this, spacing doesn't matter. Don't be afraid to have a lot of code in one line because that's all you've got:</p>
<figcaption>Example of a JavaScript function written in one line.</figcaption>
</figure>
<p>If your script is complex, it'll be easier to maintain your bookmarklet in a code editor like <a href="https://code.visualstudio.com/">Visual Studio Code</a>. You can copy and paste it over to your browser when it's ready.</p>
<h3 id="how-to-interact-with-websites">How to Interact with Websites</h3>
<p>The most common thing you'd do with bookmarklets is manipulating or interacting with websites you have open.</p>
<h4 id="the-global-document-object">The Global Document Object</h4>
<p>As the bookmarklet has the context of the page you're on, you have access to the <code><a href="https://developer.mozilla.org/en-US/docs/Web/API/Document">document</a></code> object. </p>
<p>The ideal functions for selecting elements for our use case are:</p>
<ul>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector"><code>querySelector</code></a> to select a single element by CSS selector.</li>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll"><code>querySelectorAll</code></a> to select all matching elements by CSS selector.</li>
<li><code><a href="https://developer.mozilla.org/en-US/docs/Web/API/Document/evaluate">evaluate</a></code> to select all matching elements by XPath.</li>
</ul>
<p>There are other functions like <code><a href="https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById">getElementById</a></code> and <code><a href="https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName">getElementsByClassName</a></code>, but we want to avoid false-positives, so we'll always make a strict selection using multiple element attributes.</p>
<h4 id="css-selectors-and-xpath">CSS Selectors and XPath</h4>
<p>If you're only selecting elements based on element names, IDs, classes, and other attributes, using a CSS selector will be simple and efficient.</p>
<p>CSS selectors are used to select elements in HTML documents to apply styles. If you're familiar with web development or CSS in general, then you already know how to use CSS selectors. (More Info: <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors">MDN</a>, <a href="/news/css-selectors-cheat-sheet/">freeCodeCamp</a>)</p>
<p>If you need to match the text content of an element as well, then you'll have to use XPath instead.</p>
<p>XPath is used to traverse XML documents, it provides all the capabilities of CSS selectors and more, including comparing the content of elements or using a regular expression to match it. (More Info: <a href="https://developer.mozilla.org/en-US/docs/Web/XPath">MDN</a>, <a href="https://en.wikipedia.org/wiki/XPath">Wikipedia</a>)</p>
<h4 id="how-to-select-elements-from-the-webpage">How to Select Elements from the Webpage</h4>
<p>One of the most common uses for bookmarklets is manipulating webpages. To interact with, manipulate, or remove elements from the page, you'll always have to select the elements first.</p>
<ol>
<li>First open the browser development tools by pressing <code>F12</code>, or <code>CTRL</code> + <code>SHIFT</code> + <code>I</code>.</li>
<li>Click the <a href="https://developer.mozilla.org/en-US/docs/Tools/Page_Inspector">Inspector</a>/<a href="https://developer.chrome.com/docs/devtools/dom/">Elements</a> tab, which displays the full HTML document of the page you have open.</li>
<li>Use the element selector tool (<code>CTRL</code> + <code>SHIFT</code> + <code>C</code>) and click on the element you want to interact with. The document viewer will scroll to the element you clicked in the HTML document. You'll see the element ID, classes, and attributes.</li>
<li>Check if you're on the correct element. Elements can be nested where it's easier to navigate to it manually in the HTML. For example, you may have clicked an <code>svg</code> element, but actually needed the <code>button</code> or <code>div</code> it was inside of.</li>
<li>Define a CSS selector or XPath that matches everything you want, you might want to make it more strict than necessary to avoid potential false-positives.</li>
</ol>
<p>For example, suppose I wanted to dismiss all topic suggestions on Twitter because they're annoying. Here is how a clickable element to dismiss a topic looks like.</p>
<figcaption>Twitter topic suggestions, with an X button to mark it as "Not interested".</figcaption>
</figure><pre><code class="language-html">&lt;div aria-label="Dismiss" role="button" tabindex="0" class="..."&gt;
&lt;!-- The parent div element has the click listener. --&gt;
&lt;div class="..."&gt;
&lt;svg viewBox="0 0 24 24" aria-hidden="true" class="..."&gt;
&lt;!-- The actual X icon. --&gt;
&lt;/svg&gt;
&lt;/div&gt;
&lt;/div&gt;</code></pre>
<p>An appropriate selector is <code>div[aria-label=Dismiss][role=button]</code>.</p>
<p>We need to use the <code>querySelectorAll</code> function from <a href="#the-global-document-object">The Global Document Object</a>, then call the <code><a href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/click">click</a></code> method to simulate a click.</p>
<p>A bookmarklet can be implemented to select every dismiss button, and trigger a click event to all of them with a 250ms interval.</p>
const selector = 'div[aria-label=Dismiss][role=button]';
const topics = document.querySelectorAll(selector);
for (let i = 0; i &lt; topics.length; i++) {
let topic = topics[i];
setTimeout(() =&gt; topic.click(), i * 250);
}
})();</code></pre>
<figcaption>Mark all suggested topics on Twitter as "Not interested".</figcaption>
</figure>
<h2 id="how-to-redistribute-bookmarklets">How to Redistribute Bookmarklets</h2>
<p>To "install" a bookmarklet, users create a bookmark on their browser and copy and paste the code to it.</p>
<p>This can be inconvenient, so it's common to link bookmarklets when sharing. This is as simple as putting it in the <code>href</code> attribute of your link anchor.</p><pre><code class="language-html">&lt;a href="javascript: (() =&gt; {   alert('Hello, World!'); })();"&gt;
Hello, World!
&lt;/a&gt;</code></pre>
<p>Now users can right-click and "Bookmark Link", or drag it to the bookmarks bar for easy access.</p>
<p>Clicking the link on the web page will execute the script immediately. Ensure it's not going to obstruct what a user is trying to achieve on your site if they accidentally click it.</p>
<p>For example, the following link will display an alert with "<a href="javascript: (() => {   alert('Hello, World!'); })();">Hello, World!</a>".</p>
<h3 id="user-content-and-content-security-policy-bypass">User Content and Content Security Policy Bypass</h3>
<p>If you run a service that allows user-generated content to contain custom HTML, it's important to sanitize link anchors (<code>a</code>).</p>
<p>The bookmarklet is executing like code in the developer tools console, and bypasses the configured <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP">Content Security Policy</a> (CSP).</p>
<p>The "Hello, World!" link can just as easily send data to another server, including the input of form fields, or cookies.</p>
<p>As a service provider, it's important to be wary that users can exploit this to share malicious code on your platform. If their link anchor is running on a page under your domain, it can access sensitive information on the page and <code><a href="https://developer.mozilla.org/en-US/docs/web/api/document/cookie">document.cookies</a></code>.</p>
<p>You can try it yourself in a sandbox environment:</p><pre><code class="language-html">&lt;a href="javascript: (() =&gt; {   alert(document.cookie); })();"&gt;
EvilScript
&lt;/a&gt;</code></pre>
<h3 id="only-run-code-you-trust">Only Run Code You Trust</h3>
<p>As a user, it's important to note that any code can be malicious, only click or add bookmarklets where at least one of the following are true:</p>
<ul>
<li>It came from a reputable source.</li>
<li>You know JavaScript, and you reviewed what it does.</li>
<li>Someone you trust knows JavaScript, and they reviewed it for you.</li>
</ul>
<h2 id="privacy-and-security">Privacy and Security</h2>
<p>Bookmarklets can be handy, but we also have <a href="https://en.wikipedia.org/wiki/Browser_extension">web extensions</a> and <a href="https://en.wikipedia.org/wiki/Userscript">user scripts</a> too. What makes them different?</p>
<p>Web extensions are incredibly user-friendly and flexible. Bookmarklets can't block network requests, update content as the page changes, or manage tabs.</p>
<p>However, there're some benefits to using bookmarklets over anything else, namely for privacy and security.</p>
<p>An extension that modifies the font on all pages must get permission to access all data on all web pages. On Firefox and Chrome, this includes all input and password fields. (More Info: <a href="https://support.mozilla.org/kb/permission-request-messages-firefox-extensions#w_access-your-data-for-all-websites">Mozilla</a>, <a href="https://developer.chrome.com/docs/extensions/mv3/permission_warnings/#permissions_with_warnings">Google</a>)</p>
<p>In contrast, a bookmarklet only has access to the page for the very moment it's executing, and only when manually triggered by the user.</p>
<p>This results in less risk of malware, a rogue employee can't push a malicious update, and data won't silently get sent to other servers.</p>
<p>The Chrome Web Store has previously had several malicious extensions which had to be taken down. Some of which had millions of installations before being removed. (<a href="https://en.wikipedia.org/wiki/Chrome_Web_Store#Malware">More Info</a>)</p>
<h2 id="example-bookmarklets">Example Bookmarklets</h2>
<p>Here's a list of bookmarklet ideas, along with the code that implements it. You can copy and paste them into new bookmarks to try them out.</p>
const documentHTML = document.documentElement.outerHTML;
const matches = documentHTML.matchAll(/[\w.+=~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*/g);
const flatMatches = Array.from(matches).map((item) =&gt; item[0]);
const uniqueMatches = Array.from(new Set(flatMatches));
if (uniqueMatches.length &gt; 0) {
const result = uniqueMatches.join('\n');
alert(result);
} else {
alert('No emails found!');
}
})();</code></pre>
<figcaption>Collect all email addresses on the current page, and display them in an alert.</figcaption>
</figure>
const xpath = "//a [contains(., 'Jobs') or contains(., 'Careers') or contains(., 'Hiring')]";
const elements = document.evaluate(xpath, document);
const element = elements.iterateNext();
if (element) {
element.click();
} else {
alert('No links for jobs found!');
}
})();</code></pre>
<figcaption>Find a "Jobs", "Careers" or "Hiring" link in the page, and click it.</figcaption>
</figure>
const allElements = document.querySelectorAll('*');
for (let element of allElements) {
element.style.fontFamily = 'Comic Sans MS';
}
})();</code></pre>
<figcaption>Set the font of all text on the current page to "Comic Sans MS".</figcaption>
</figure>
const destination = "https://www.freecodecamp.org/";
const alternate = "https://tenor.com/Y6jj.gif";
const date = new Date();
const hours = date.getHours();
if (hours &lt; 3 || hours &gt;= 6) {
window.open(destination);
} else {
window.open(alternate);
}
})();</code></pre>
<figcaption>Open freeCodeCamp, but open a GIF instead if it's between 03:00 and 06:00.</figcaption>
</figure>
<p>Thank you for reading! Now go forth and create your own bookmarklets.</p>
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
