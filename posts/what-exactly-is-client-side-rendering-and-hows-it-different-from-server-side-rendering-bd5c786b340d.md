---
card: "https://cdn-media-1.freecodecamp.org/images/1*ezyfYx8OjGnPbxDTlzV9Kg.jpeg"
tags: [JavaScript]
description: "Since the dawn of time, the conventional method for getting y"
author: "Milad E. Fahmy"
title: "Client-side vs. server-side rendering: why it’s not all black and white"
created: "2021-08-16T10:25:01+02:00"
modified: "2021-08-16T10:25:01+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-react tag-vuejs tag-web-development tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">Client-side vs. server-side rendering: why it’s not all black and white</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*ezyfYx8OjGnPbxDTlzV9Kg.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*ezyfYx8OjGnPbxDTlzV9Kg.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*ezyfYx8OjGnPbxDTlzV9Kg.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*ezyfYx8OjGnPbxDTlzV9Kg.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*ezyfYx8OjGnPbxDTlzV9Kg.jpeg" alt="Client-side vs. server-side rendering: why it’s not all black and white">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Since the dawn of time, the conventional method for getting your HTML up onto a screen was by using server-side rendering. It was the only way. You loaded up your .html pages on your server, then your server went and turned them into useful documents on your users’ browsers.</p><p>Server-side rendering worked great at the time too, since most webpages were mostly just for displaying static images and text, with little in the way of interactivity.</p><p>Fast-forward to today and that’s no longer the case. You could argue that websites these days are more like applications pretending to be websites. You can use them to send messages, update online information, shop, and so much more. The web is just a whole lot more advanced than it used to be.</p><p>So it makes sense that server-side rendering is slowly beginning to take a backseat to the ever-growing method of rendering webpages on the client side.</p><p>So which method is the better option? As with most things in development, it really depends on what you’re planning on doing with your website. You need to understand the pros and cons, then decide for yourself which route is best for you.</p><h3 id="how-server-side-rendering-works"><strong>How server-side rendering works</strong></h3><p>Server-side rendering is the most common method for displaying information onto the screen. It works by converting HTML files in the server into usable information for the browser.</p><p>Whenever you visit a website, your browser makes a request to the server that contains the contents of the website. The request usually only takes a few milliseconds, but that ultimately depends on a multitude of factors:</p><ul><li>Your internet speed</li><li>the location of the server</li><li>how many users are trying to access the site</li><li>and how optimized the website is, to name a few</li></ul><p>Once the request is done processing, your browser gets back the fully rendered HTML and displays it on the screen. If you then decide to visit a different page on the website, your browser will once again make another request for the new information. This will occur each and every time you visit a page that your browser does not have a cached version of.</p><p>It doesn’t matter if the new page only has a few items that are different than the current page, the browser will ask for the entire new page and will re-render everything from the ground up.</p><p>Take for example this HTML document that has been placed in an imaginary server with an HTTP address of <code>example.testsite.com</code>.</p><pre><code class="language-html">&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;meta charset="utf-8"&gt;
&lt;title&gt;Example Website&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;h1&gt;My Website&lt;/h1&gt;
&lt;p&gt;This is an example of my new website&lt;/p&gt;
&lt;a href="http://example.testsite.com/other.html."&gt;Link&lt;/a&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre><p>If you were to type the address of the example website into the URL of your imaginary browser, your imaginary browser would make a request to the server being used by that URL and expect a response of some text to render onto the browser. In this case, what you would visually see would be the title, the paragraph content and the link.</p><p>Now, assume that you wanted to click on the link from the rendered page which contains the following code.</p><pre><code class="language-html">&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;meta charset="utf-8"&gt;
&lt;title&gt;Example Website&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;h1&gt;My Website&lt;/h1&gt;
&lt;p&gt;This is an example of my new website&lt;/p&gt;
&lt;p&gt;This is some more content from the other.html&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre><p>The only difference between the previous page and this one is that this page does not have a link and instead has another paragraph. Logic would dictate that only the new content should be rendered and the rest should be left alone. Alas, that isn’t how server-side rendering works. What would actually happen would be that the entire new page would be rendered, and not just the new content.</p><p>While it might not seem like a big deal for these two examples, most websites are not this simple. Modern websites have hundreds of lines of code and are much more complex. Now imagine browsing a webpage and having to wait for each and every page to render when navigating the site. If you have ever visited a WordPress site, you have seen how slow they can be. This is one of the reasons why.</p><p>On the bright side, server-side rendering is great for SEO. Your content is present before you get it, so search engines are able to index it and crawl it just fine. Something that is not so with client-side rendering. At least not simply.</p><h3 id="how-client-side-rendering-works"><strong>How client-side rendering works</strong></h3><p>When developers talk about client-side rendering, they’re talking about rendering content in the browser using JavaScript. So instead of getting all of the content from the HTML document itself, you are getting a bare-bones HTML document with a JavaScript file that will render the rest of the site using the browser.</p><p>This is a relatively new approach to rendering websites, and it didn't really become popular until JavaScript libraries started incorporating it into their style of development. Some notable examples are Vue.js and React.js, which I’ve <a href="https://medium.freecodecamp.com/reacts-jsx-vs-vue-s-templates-a-showdown-on-the-front-end-b00a70470409#.ycvoyji7a" rel="noopener">written more about here</a>.</p><p>Going back to the previous website, <code>example.testsite.com</code>, assume that you now have an index.html file with the following lines of code.</p><pre><code class="language-html">&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;meta charset="utf-8"&gt;
&lt;title&gt;Example Website&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;div id="root"&gt;
&lt;app&gt;&lt;/app&gt;
&lt;/div&gt;
&lt;script src="https://vuejs.org"type="text/javascript"&gt;&lt;/script&gt;
&lt;script src="location/of/app.js"type="text/javascript"&gt;&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre><p>You can see right away that there are some major changes to the way the index.hmtl works when rendering using the client.</p><p>For starters, instead of having the content inside the HTML file, you have a container div with an id of root. You also have two script elements right above the closing body tag. One that will load the Vue.js JavaScript library and one that will load a file called app.js.</p><p>This is radically different than using server-side rendering because the server is now only responsible for loading the bare minus of the website. The main boilerplate. Everything else is handled by a client-side JavaScript library, in this case, Vue.js, and custom JavaScript code.</p><p>If you were to make a request to the URL with only the code above, you would get a blank screen. There is nothing to load since the actual content needs to be rendered using JavaScript.</p><p>To fix that, you would place the following lines of code into the app.js file.</p><pre><code class="language-js">var data = {
title:"My Website",
message:"This is an example of my new website"
}
Vue.component('app', {
template:
`
&lt;div&gt;
&lt;h1&gt;{{title}}&lt;/h1&gt;
&lt;p id="moreContent"&gt;{{message}}&lt;/p&gt;
&lt;a v-on:click='newContent'&gt;Link&lt;/a&gt;
&lt;/div&gt;
`,
data: function() {
return data;
},
methods:{
newContent: function(){
var node = document.createElement('p');
var textNode = document.createTextNode('This is some more content from the other.html');
node.appendChild(textNode);
document.getElementById('moreContent').appendChild(node);
}
}
})
new Vue({
el: '#root',
});</code></pre><p>Now if you visit the URL, you would see the same content as you did the server-side example. The key difference is that if you were to click on the link the page to load more content, the browser will not make another request to the server. You are rendering items with the browser, so it will instead use JavaScript to load the new content and Vue.js will make sure that only the new content is rendered. Everything else will be left alone.</p><p>This is much faster since you are only loading a very small section of the page to fetch the new content, instead of loading the entire page.</p><p>There are some trade offs with using client-side rendering, though. Since the content is not rendered until the page is loaded on the browser, SEO for the website will take a hit. There are ways to get around this, but it’s not as easy as it is with server-side rendering.</p><p>Another thing to keep in mind is that your website/application won’t be able to load until ALL of the JavaScript is downloaded to the browser. Which makes sense, since it contains all the content that will be needed. If your users are using slow internet connection, it could make their initial loading time a bit long.</p><h3 id="the-pros-and-cons-of-each-approach">The pros and cons of each approach</h3><p>So there you have it. Those are the main differences between server-side and client-side rendering. Only you the developer can decide which option is best for your website or application.</p><p>Below is a quick breakdown of the pros and cons for each approach:</p><h4 id="server-side-pros-">Server-side pros:</h4><ol><li>Search engines can crawl the site for better SEO.</li><li>The initial page load is faster.</li><li>Great for static sites.</li></ol><h4 id="server-side-cons-">Server-side cons:</h4><ol><li>Frequent server requests.</li><li>An overall slow page rendering.</li><li>Full page reloads.</li><li>Non-rich site interactions.</li></ol><h4 id="client-side-pros-">Client-side pros:</h4><ol><li>Rich site interactions</li><li>Fast website rendering after the initial load.</li><li>Great for web applications.</li><li>Robust selection of JavaScript libraries.</li></ol><h4 id="client-side-cons-">Client-side cons:</h4><ol><li>Low SEO if not implemented correctly.</li><li>Initial load might require more time.</li><li>In most cases, requires an external library.</li></ol><p>If you want to learn more about Vue.js, check out my website at <a href="https://juanmvega.com">juanmvega.com</a> for videos and articles!</p>
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
