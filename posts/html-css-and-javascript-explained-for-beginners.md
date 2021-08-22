---
card: "/images/default.jpg"
tags: [Web Development]
description: "If you are learning web development, you will come across terms like HTML, CSS, and JavaScript. These are often called the building blocks of the Web."
author: "Milad E. Fahmy"
title: "Learn Web Development Basics – HTML, CSS, and JavaScript Explained for Beginners"
created: "2021-08-15T19:15:53+02:00"
modified: "2021-08-15T19:15:53+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-web-development tag-beginners-guide tag-javascript tag-html tag-css ">
<header class="post-full-header">
<h1 class="post-full-title">Learn Web Development Basics – HTML, CSS, and JavaScript Explained for Beginners</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2021/08/HTMLCSS.png 300w,
/news/content/images/size/w600/2021/08/HTMLCSS.png 600w,
/news/content/images/size/w1000/2021/08/HTMLCSS.png 1000w,
/news/content/images/size/w2000/2021/08/HTMLCSS.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2021/08/HTMLCSS.png" alt="Learn Web Development Basics – HTML, CSS, and JavaScript Explained for Beginners">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>If you are learning web development, you will come across terms like HTML, CSS, and JavaScript. These are often called the building blocks of the Web. </p>
<p>These three tools dominate web development. Every library or tool seems to be centered around HTML, CSS, and JS. So if you want to become a web developer, you need to learn them well. </p>
<p>You'll also discover that websites are mostly built from these three languages.</p>
<p>But you're probably wondering what each one is and what it's really used for. What makes these languages so special and important? And what makes them so ubiquitous that you can’t help but see them in every tutorial and topic based on web development?</p>
<p>Well, now you need wonder no more. </p>
<p>In this article, I will explain the basics of what HTML, CSS, and JavaScript are, how they make the Web work, and what they do on their own.</p>
<h2 id="what-is-the-internet">What is the Internet?</h2>
<p>The internet is simply a network of computers that communicate with each other to send and receive data (information). </p>
<p>Each of these computers on the internet can be distinguished and located by a unique number called an <strong>IP Address.</strong> An IP Address looks something like this: <code>168.212.226.204</code> </p>
<h3 id="what-is-the-web">What is the Web?</h3>
<p>The Web is a subset of the internet. </p>
<p>Like every other computer network out there, the Web is made up of two main components: the web browser client and the web server.</p>
<p>The client requests the data and the server <strong>shares </strong>or <strong>serves </strong>its data. To achieve this, the two parties have to establish an agreement. That agreement is called the <strong>Application Programming Interface </strong>or in short, the <strong>API.</strong></p>
<p>But this data has to be arranged and formatted into a form that's understandable by end-users who have a wide range of technical experiences and abilities.</p>
<p>This is where HTML, CSS, JavaScript and the whole concept of web development come into play.</p>
<h2 id="what-is-html">What is HTML?</h2>
<p>HTML stands for <strong>Hyper Text Markup Language.</strong></p>
<p><a href="https://www.dictionary.com/browse/markup">Dictionary.com</a> defines a Markup as:</p>
<blockquote><em>a set of detailed instructions, usually written on a manuscript to be typeset, concerning style of type, makeup of pages, and the like.</em></blockquote>
<p>So you can think of HTML as the language used for creating detailed instructions concerning style, type, format, structure and the makeup of a web page before it gets printed (shown to you).</p>
<p>But in the context of web development, we can replace the term ‘printed’ with ‘rendered’ as a more accurate term.</p>
<p>HTML helps you structure your page into elements such as paragraphs, sections, headings, navigation bars, and so on. &nbsp;</p>
<p>To illustrate what a page looks like, let's create a basic HTML document:</p>
&lt;html lang="en"&gt;
&lt;head&gt;
&lt;meta charset="UTF-8"&gt;
&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
&lt;meta http-equiv="X-UA-Compatible" content="ie=edge"&gt;
&lt;link rel="stylesheet" href="./styles.css"&gt;
&lt;title&gt;Document&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;h1&gt;This is a first level heading in HTML. With CSS, I will turn this into red color&lt;/h1&gt;
&lt;h2&gt;This is a second level heading in HTML. With CSS, I will turn this into blue color&lt;/h2&gt;
&lt;h3&gt;This is a third level heading in HTML. With CSS, I will turn this into green color&lt;/h3&gt;
&lt;p&gt;This is a &lt;em&gt;paragragh&lt;/em&gt; As you can see, I placed an empahisis on the word "paragraph". Now, I will change also
the background color of the word "paragraph" to black, and its text color  to green, all with just CSS.&lt;/p&gt;
&lt;p&gt;The main essence of this tutorial is to:&lt;/p&gt;
&lt;ul&gt;
&lt;li&gt;Show you how to format a web document with HTML&lt;/li&gt;
&lt;li&gt;Show you how to design a web page with CSS&lt;/li&gt;
&lt;li&gt;Show you how to program a web document with JavaScript&lt;/li&gt;
&lt;/ul&gt;
&lt;p&gt;Next, I am going to add the following two numbers and display the result, all with JavaScript&lt;p/&gt;
&lt;p&gt;First number:&lt;span id= "firstNum"&gt;2&lt;/span&gt; &lt;br&gt;&lt;/p&gt;
&lt;p&gt;Second number: &lt;span id= "secondNum"&gt;7&lt;/span&gt; &lt;/p&gt;
&lt;p&gt;Therefore, the sum of the two of those numbers is: &lt;span id= "answer"&gt;(placeholder for the answer)&lt;/span&gt;&lt;/p&gt;
&lt;input type="button" id="sumButton" value="Click to add!"&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre>
<figcaption>index.html</figcaption>
</figure>
<p>This is how you can format and structure a document with just HTML. As you can see, this markup contains some web elements such as:</p>
<ul>
<li>Level 1 heading <code>h1</code></li>
<li>Level 2 heading <code>h2</code></li>
<li>Level 3 heading <code>h3</code></li>
<li>A paragraph &nbsp;<code>p</code></li>
<li>An unordered list with bullet points &nbsp;<code>ul</code> <code>li</code></li>
<li>A button input <code>input</code> </li>
<li>And the whole body of the page <code>body</code></li>
</ul>
<p>This is what that markup above renders on a web browser:</p>
<figcaption>localhost:3000/index.html</figcaption>
</figure>
<p>You can also add attributes to these elements which you can use to identify the elements and access them from other places in the site.</p>
<p>In our example, we set the <code>id</code> attributes to all of the three <code>span</code> elements. This will help us access them from our JavaScript as you will see later.</p>
<p>Think of this attribute the same way as your social media username. With this name, others can find you on social media. And someone can also refer to you or mention you with this name (you can get tagged in a post, and so on).</p>
<p>This page is very basic and unattractive, though. If you are building anything other than a demo, you will need to add some basic styling to make it more presentable. And we can do exactly that with CSS.</p>
<p>Want to learn more about HTML? You can <a href="https://www.freecodecamp.org/learn/responsive-web-design/">start with freeCodeCamp's Responsive Web Design certification</a> and this <a href="/news/html-crash-course/">brand new full HTML course from Beau Carnes</a>.</p>
<h2 id="what-is-css">What is CSS?</h2>
<p>While HTML is a <strong>markup language</strong> used to format/structure a web page, CSS is a <strong>design language</strong> that you use to make your web page look nice and presentable. </p>
<p>CSS stands for <strong>Cascading Style Sheets</strong>, and you use it to improve the appearance of a web page. By adding thoughtful CSS styles, you make your page more attractive and pleasant for the end user to view and use.</p>
<p>Imagine if human beings were just made to have skeletons and bare bones – how would that look? Not nice if you ask me. So CSS is like our skin, hair, and general physical appearance.</p>
<p>You can also use CSS to layout elements by positioning them in specified areas of your page.</p>
<p>To access these elements, you have to “select” them. You can select a single or multiple web elements and specify how you want them to look or be positioned.</p>
<p>The rules that govern this process are called <a href="/news/use-css-selectors-to-style-webpage/">CSS <strong>selectors</strong></a><strong>.</strong></p>
<p>With CSS you can set the colour and background of your elements, as well as the typeface, margins, spacing, padding and so much more.</p>
<p>If you remember our example HTML page, we had elements which were pretty self-explanatory. For example, I stated that I would change the color of the level one heading <code>h1</code> to red.</p>
<p>To illustrate how CSS works, I will be sharing the code which sets the background-color of the three levels of headers to red, blue, and green respectively:</p>
background-color: #ff0000;
}
h2 {
background-color: #0000FF;
}
h3 {
background-color: #00FF00;
}
em {
background-color: #000000;
color: #ffffff;
}</code></pre>
<figcaption>localhost:3000/styles.css</figcaption>
</figure>
<p>The above style, when applied, will change the appearance of our web page to this:</p>
<p>Cool, right?</p>
<p>We access each of the elements we want to work on by "selecting" them. The <code>h1</code> selects all level 1 headings in the page, the <code>h2</code> selects the level 2 elements, and so on. You can select any single HTML element you want and specify how you want it to look or be positioned.</p>
<p>Want to learn more about CSS? You can check out the <a href="https://www.freecodecamp.org/learn/responsive-web-design/">second part of freeCodeCamp's Responsive Web Design</a> certification to get started.</p>
<h2 id="what-is-javascript">What is JavaScript?</h2>
<p>Now, if HTML is the <strong>markup language</strong> and CSS is the <strong>design language</strong>, then JavaScript is the <strong>programming language.</strong></p>
<p>If you don’t know what programming is, think of certain actions you take in your daily life:</p>
<p>When you sense danger, you run. When you are hungry, you eat. When you are tired, you sleep. When you are cold, you look for warmth. When crossing a busy road, you calculate the distance of vehicles away from you.</p>
<p>Your brain has been programmed to react in a certain way or do certain things whenever something happens. In this same way, you can program your web page or individual elements to react a certain way and to do something when something else (an event) happens.</p>
<p>You can program actions, conditions, calculations, network requests, concurrent tasks and many other kinds of instructions.</p>
<p>You can access any elements through the <a href="/news/how-to-manipulate-the-dom-beginners-guide/">Document Object Model API (DOM)</a> and make them change however you want them to.</p>
<p>The DOM is a tree-like representation of the web page that gets loaded into the browser.</p>
<figcaption>Each element on the web page is represented on the DOM</figcaption>
</figure>
<p></p>
<p>Thanks to the DOM, we can use methods like <code>getElementById()</code> to access elements from our web page.</p>
<p>JavaScript allows you to make your webpage <strong>“think and act”</strong>, which is what programming is all about.</p>
<p>If you remember from our example HTML page, I mentioned that I was going to sum up the two numbers displayed on the page and then display the result in the place of the placeholder text. The calculation runs once the button gets clicked.</p>
<figcaption>Clicking the "Get the sum" button will display the sum of 2 and 7</figcaption>
</figure>
<p>This code illustrates how you can do calculations with JavaScript:</p><pre><code class="language-js">function displaySum() {
let firstNum = Number(document.getElementById('firstNum').innerHTML)
let secondNum = Number(document.getElementById('secondNum').innerHTML)
let total = firstNum + secondNum;
document.getElementById("answer").innerHTML = ` ${firstNum} + ${secondNum}, equals to ${total}` ;
}
document.getElementById('sumButton').addEventListener("click", displaySum);
</code></pre>
<p>Remember what I told you about HTML attributes and their uses? This code displays just that.</p>
<p>The <code>displaySum</code> is a function which gets both items from the web page, converts them to numbers (with the Number method), sums them up, and passes them in as inner values to another element.</p>
<p>The reason we were able to access these elements in our JavaScript was because we had set unique attributes on them, to help us identify them.</p>
<p>So thanks to this:</p><pre><code class="language-html">// id attribute has been set in all three
&lt;span id= "firstNum"&gt;2&lt;/span&gt; &lt;br&gt;
...&lt;span id= "secondNum"&gt;7&lt;/span&gt;
...... &lt;span id= "answer"&gt;(placeholder for the answer)&lt;/span&gt;</code></pre>
<p>We were able to do this:</p><pre><code class="language-js">//getElementById will get all HTML elements by a specific "id" attribute
...
let firstNum = Number(document.getElementById('firstNum').innerHTML)
let secondNum = Number(document.getElementById('secondNum').innerHTML)
let total = firstNum + secondNum;
document.getElementById("answer").innerHTML = ` ${firstNum} + ${secondNum}, equals to ${total}` ;
</code></pre>
<p>Finally, upon clicking the button, you will see the sum of the two numbers on the newly updated page:</p>
<figcaption>2 plus 7 is equals to 9</figcaption>
</figure>
<p>If you want to get started with JavaScript, you can check out freeCodeCamp's <a href="https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/">JavaScript Algorithms and Data Structures</a> certification. And you can use this <a href="/news/learn-javascript-full-course/">great Intro to JS course</a> to supplement your learning.</p>
<h2 id="how-to-put-html-css-and-javascript-together">How to Put HTML, CSS, and JavaScript Together</h2>
<p>Together, we use these three languages to format, design, and program web pages.</p>
<p>And when you link together some web pages with hyperlinks, along with all their assets like images, videos, and so on that are on the server computer, it gets rendered into a <strong>website</strong>.</p>
<p>This rendering typically happens on the front end, where the users can see what's being displayed and interact with it.</p>
<p>On the other hand, data, especially sensitive information like passwords, are stored and supplied from the back end part of the website. This is the part of a website which exists only on the server computer, and isn't displayed on the front-end browser. There, the user cannot see or readily access that information.</p>
<h2 id="wrapping-up">Wrapping Up</h2>
<p>As a web developer, the three main languages we use to build websites are HTML, CSS, and JavaScript.</p>
<p>JavaScript is the programming language, we use HTML to structure the site, and we use CSS to design and layout the web page.</p>
<p>These days, CSS has become more than just a design language, though. You can actually implement animations and smooth transitions with just CSS. </p>
<p>In fact, you can do some basic programming with CSS too. An example of this is when you use media queries, where you define different style rules for different kinds of screens (resolutions).</p>
<p>JavaScript has also grown beyond being used just in the browser as well. We now use it on the server thanks to <strong>Node.js</strong>.</p>
<p>But the basic fact remains: HTML, CSS, and JavaScript are the main languages of the Web.</p>
<p>So that's it. The languages of the Web explained in basic terms. I really hope you got something useful from this article.</p>
<p>To round off this article, I have something to share. I recently started a <strong>weekly coding challenge series</strong> aimed at teaching beginners how to program in JavaScript. Check it out on <a href="https://ubahthebuilder.tech/day-1-who-likes-it">my blog</a>. &nbsp;</p>
<p>Thank you for reading and see you soon.</p>
<blockquote><strong><strong>P/S</strong></strong>: If you are learning JavaScript, I created an eBook which teaches 50 topics in JavaScript with hand-drawn digital notes. <a href="https://ubahthebuilder.gumroad.com/l/js-50">Check it out here</a>.</blockquote>
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
