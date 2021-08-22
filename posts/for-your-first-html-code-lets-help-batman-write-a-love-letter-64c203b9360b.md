---
card: "https://cdn-media-1.freecodecamp.org/images/1*kZxbQJTdb4jn_frfqpRg9g.jpeg"
tags: [Web Development]
description: "by Kunal"
author: "Milad E. Fahmy"
title: "For your first HTML code, let’s help Batman write a love letter"
created: "2021-08-16T10:17:45+02:00"
modified: "2021-08-16T10:17:45+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-web-development tag-html tag-css tag-programming tag-tech ">
<header class="post-full-header">
<h1 class="post-full-title">For your first HTML code, let’s help Batman write a love letter</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*kZxbQJTdb4jn_frfqpRg9g.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*kZxbQJTdb4jn_frfqpRg9g.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*kZxbQJTdb4jn_frfqpRg9g.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*kZxbQJTdb4jn_frfqpRg9g.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*kZxbQJTdb4jn_frfqpRg9g.jpeg" alt="For your first HTML code, let’s help Batman write a love letter">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
After all the battles we fought together, after all the difficult times we saw together, after all the good and bad moments we've been through, I think it's time I let you know how I feel about you.
&lt;/p&gt;</code></pre><p>We set the “width” property to 550px separated by a colon “:” and ended by a semicolon “;”.</p><p>Also, notice how we put the <code>&lt;p&gt;</code> and <code>&lt;/p&gt;</code> in separate lines and the text content indented with one tab. Styling your code like this makes it more readable.</p><h3 id="lists-in-html">Lists in HTML</h3><p>Next, Batman wants to list some of the virtues of the person that he admires, like this:</p><p>“ You complete my darkness with your light. I love:<br>- the way you see good in the worst things<br>- the way you handle emotionally difficult situations<br>- the way you look at Justice<br>I have learned a lot from you. You have occupied a special place in my heart over time.”</p><p>This looks simple.</p><p>Let’s go ahead and copy the required text below the <code>&lt;/</code>p&gt;:</p><pre><code class="language-html">&lt;p style="width:550px;"&gt;
After all the battles we faught together, after all the difficult times we saw together, after all the good and bad moments we've been through, I think it's time I let you know how I feel about you.
&lt;/p&gt;
&lt;p style="width:550px;"&gt;
You complete my darkness with your light. I love:
- the way you see good in the worse
- the way you handle emotionally difficult situations
- the way you look at Justice
I have learned a lot from you. You have occupied a special place in my heart over the time.
After all the battles we faught together, after all the difficult times we saw together, after all the good and bad moments we've been through, I think it's time I let you know how I feel about you.
&lt;/p&gt;
&lt;p style="width:550px;"&gt;
You complete my darkness with your light. I love: &lt;br&gt;
- the way you see good in the worse &lt;br&gt;
- the way you handle emotionally difficult situations &lt;br&gt;
- the way you look at Justice &lt;br&gt;
I have learned a lot from you. You have occupied a special place in my heart over the time.
After all the battles we faught together, after all the difficult times we saw together, after all the good and bad moments we've been through, I think it's time I let you know how I feel about you.
&lt;/p&gt;
&lt;p style="width:550px;"&gt;
You complete my darkness with your light. I love:
&lt;ul&gt;
&lt;li&gt;the way you see good in the worse&lt;/li&gt;
&lt;li&gt;the way you handle emotionally difficult situations&lt;/li&gt;
&lt;li&gt;the way you look at Justice&lt;/li&gt;
&lt;/ul&gt;
I have learned a lot from you. You have occupied a special place in my heart over the time.
After all the battles we faught together, after all the difficult times we saw together, after all the good and bad moments we've been through, I think it's time I let you know how I feel about you.
&lt;/p&gt;
&lt;p style="width:550px;"&gt;
You complete my darkness with your light. I love:
&lt;/p&gt;
&lt;ul style="width:550px;"&gt;
&lt;li&gt;the way you see good in the worse&lt;/li&gt;
&lt;li&gt;the way you handle emotionally difficult situations&lt;/li&gt;
&lt;li&gt;the way you look at Justice&lt;/li&gt;
&lt;/ul&gt;
&lt;p style="width:550px;"&gt;
I have learned a lot from you. You have occupied a special place in my heart over the time.
&lt;/p&gt;</code></pre><p>Save and reload.</p><p>Notice that this time we defined the width of the “ul” element also. That’s because we have now moved our “ul” element out of the “p” element.</p><p>Defining the width of all the elements of our letter can become cumbersome. We have a specific element for this purpose: the “div” element. A “div” element is a generic container which is used to group content so it can be easily styled.</p><p>Let’s wrap our entire letter with a div element and give width:550px to that div element:</p><pre><code class="language-hsml">&lt;div style="width:550px;"&gt;
&lt;p&gt;
After all the battles we faught together, after all the difficult times we saw together, after all the good and bad moments we've been through, I think it's time I let you know how I feel about you.
&lt;/p&gt;
&lt;p&gt;
You complete my darkness with your light. I love:
&lt;/p&gt;
&lt;ul&gt;
&lt;li&gt;the way you see good in the worse&lt;/li&gt;
&lt;li&gt;the way you handle emotionally difficult situations&lt;/li&gt;
&lt;li&gt;the way you look at Justice&lt;/li&gt;
&lt;/ul&gt;
&lt;p&gt;
I have learned a lot from you. You have occupied a special place in my heart over the time.
&lt;/p&gt;
&lt;h1&gt;Bat Letter&lt;/h1&gt;
&lt;p&gt;
After all the battles we faught together, after all the difficult times we saw together, after all the good and bad moments we've been through, I think it's time I let you know how I feel about you.
&lt;/p&gt;
&lt;h2&gt;You are the light of my life&lt;/h2&gt;
&lt;p&gt;
You complete my darkness with your light. I love:
&lt;/p&gt;
&lt;ul&gt;
&lt;li&gt;the way you see good in the worse&lt;/li&gt;
&lt;li&gt;the way you handle emotionally difficult situations&lt;/li&gt;
&lt;li&gt;the way you look at Justice&lt;/li&gt;
&lt;/ul&gt;
&lt;p&gt;
I have learned a lot from you. You have occupied a special place in my heart over the time.
&lt;/p&gt;
&lt;h1&gt;Bat Letter&lt;/h1&gt;
&lt;img src="bat-logo.jpeg"&gt;
&lt;p&gt;
After all the battles we faught together, after all the difficult times we saw together, after all the good and bad moments we've been through, I think it's time I let you know how I feel about you.
&lt;/p&gt;
&lt;h2&gt;You are the light of my life&lt;/h2&gt;
&lt;p&gt;
You complete my darkness with your light. I love:
&lt;/p&gt;
&lt;ul&gt;
&lt;li&gt;the way you see good in the worse&lt;/li&gt;
&lt;li&gt;the way you handle emotionally difficult situations&lt;/li&gt;
&lt;li&gt;the way you look at Justice&lt;/li&gt;
&lt;/ul&gt;
&lt;p&gt;
I have learned a lot from you. You have occupied a special place in my heart over the time.
&lt;/p&gt;
&lt;h1&gt;Bat Letter&lt;/h1&gt;
&lt;img src="bat-logo.jpeg" style="width:100%"&gt;
&lt;p&gt;
After all the battles we faught together, after all the difficult times we saw together, after all the good and bad moments we've been through, I think it's time I let you know how I feel about you.
&lt;/p&gt;
&lt;h2&gt;You are the light of my life&lt;/h2&gt;
&lt;p&gt;
You complete my darkness with your light. I love:
&lt;/p&gt;
&lt;ul&gt;
&lt;li&gt;the way you see good in the worse&lt;/li&gt;
&lt;li&gt;the way you handle emotionally difficult situations&lt;/li&gt;
&lt;li&gt;the way you look at Justice&lt;/li&gt;
&lt;/ul&gt;
&lt;p&gt;
I have learned a lot from you. You have occupied a special place in my heart over the time.
&lt;/p&gt;
&lt;h1&gt;Bat Letter&lt;/h1&gt;
&lt;img src="bat-logo.jpeg" style="width:100%"&gt;
&lt;p&gt;
After all the battles we faught together, after all the difficult times we saw together, after all the good and bad moments we've been through, I think it's time I let you know how I feel about you.
&lt;/p&gt;
&lt;h2&gt;You are the light of my life&lt;/h2&gt;
&lt;p&gt;
You complete my darkness with your light. I love:
&lt;/p&gt;
&lt;ul&gt;
&lt;li&gt;the way you see good in the worse&lt;/li&gt;
&lt;li&gt;the way you handle emotionally difficult situations&lt;/li&gt;
&lt;li&gt;the way you look at Justice&lt;/li&gt;
&lt;/ul&gt;
&lt;p&gt;
I have learned a lot from you. You have occupied a special place in my heart over the time.
&lt;/p&gt;
&lt;h2&gt;I have a confession to make&lt;/h2&gt;
&lt;p&gt;
It feels like my chest does have a heart. You make my heart beat. Your smile brings smile on my face, your pain brings pain to my heart.
&lt;/p&gt;
&lt;p&gt;
I don't show my emotions, but I think this man behind the mask is falling for you.
&lt;/p&gt;
&lt;p&gt;I love you Superman.&lt;/p&gt;
&lt;p&gt;
Your not-so-secret-lover, &lt;br&gt;
Batman
&lt;/p&gt;
&lt;/div&gt;</code></pre><p>The letter is almost done, and Batman wants just two more changes. Batman wants the word “does” in the first sentence of the confession paragraph to be italic, and the sentence “I love you Superman” to be in bold.</p><p>We use <code>&lt;em&gt;</code> and <code>&lt;strong&gt;</code> to display text in italic and bold. Let’s update these changes:</p><pre><code class="language-html">&lt;div style="width:550px;"&gt;
&lt;h1&gt;Bat Letter&lt;/h1&gt;
&lt;img src="bat-logo.jpeg" style="width:100%"&gt;
&lt;p&gt;
After all the battles we faught together, after all the difficult times we saw together, after all the good and bad moments we've been through, I think it's time I let you know how I feel about you.
&lt;/p&gt;
&lt;h2&gt;You are the light of my life&lt;/h2&gt;
&lt;p&gt;
You complete my darkness with your light. I love:
&lt;/p&gt;
&lt;ul&gt;
&lt;li&gt;the way you see good in the worse&lt;/li&gt;
&lt;li&gt;the way you handle emotionally difficult situations&lt;/li&gt;
&lt;li&gt;the way you look at Justice&lt;/li&gt;
&lt;/ul&gt;
&lt;p&gt;
I have learned a lot from you. You have occupied a special place in my heart over the time.
&lt;/p&gt;
&lt;h2&gt;I have a confession to make&lt;/h2&gt;
&lt;p&gt;
It feels like my chest &lt;em&gt;does&lt;/em&gt; have a heart. You make my heart beat. Your smile brings smile on my face, your pain brings pain to my heart.
&lt;/p&gt;
&lt;p&gt;
I don't show my emotions, but I think this man behind the mask is falling for you.
&lt;/p&gt;
&lt;p&gt;&lt;strong&gt;I love you Superman.&lt;/strong&gt;&lt;/p&gt;
&lt;p&gt;
Your not-so-secret-lover, &lt;br&gt;
Batman
&lt;/p&gt;
width:550px;
}</code></pre><p>In embedded styling, the styles we write are separate from the elements. So we need a way to relate the element and its style. The first word “div” does exactly that. It lets the browser know that whatever style is inside the curly braces <code>{…}</code> belongs to the “div” element. Since this phrase determines which element to apply the style to, it’s called a selector.</p><p>The way we write style remains same: property(width) and value(550px) separated by a colon(:) and ended by a semicolon(;).</p><p>Let’s remove inline style from our “div” and “img” element and write it inside the <code>&lt;style&gt;</code> element:</p><pre><code class="language-html">&lt;style&gt;
div{
width:550px;
}
img{
width:100%;
}
&lt;/style&gt;
&lt;div&gt;
&lt;h1&gt;Bat Letter&lt;/h1&gt;
&lt;img src="bat-logo.jpeg"&gt;
&lt;p&gt;
After all the battles we faught together, after all the difficult times we saw together, after all the good and bad moments we've been through, I think it's time I let you know how I feel about you.
&lt;/p&gt;
&lt;h2&gt;You are the light of my life&lt;/h2&gt;
&lt;p&gt;
You complete my darkness with your light. I love:
&lt;/p&gt;
&lt;ul&gt;
&lt;li&gt;the way you see good in the worse&lt;/li&gt;
&lt;li&gt;the way you handle emotionally difficult situations&lt;/li&gt;
&lt;li&gt;the way you look at Justice&lt;/li&gt;
&lt;/ul&gt;
&lt;p&gt;
I have learned a lot from you. You have occupied a special place in my heart over the time.
&lt;/p&gt;
&lt;h2&gt;I have a confession to make&lt;/h2&gt;
&lt;p&gt;
It feels like my chest &lt;em&gt;does&lt;/em&gt; have a heart. You make my heart beat. Your smile brings smile on my face, your pain brings pain to my heart.
&lt;/p&gt;
&lt;p&gt;
I don't show my emotions, but I think this man behind the mask is falling for you.
&lt;/p&gt;
&lt;p&gt;&lt;strong&gt;I love you Superman.&lt;/strong&gt;&lt;/p&gt;
&lt;p&gt;
Your not-so-secret-lover, &lt;br&gt;
Batman
&lt;/p&gt;
&lt;/div&gt;</code></pre><p>Save and refresh, and the result should remain the same.</p><p>There is one big problem though — what if there is more than one “div” and “img” element in our HTML file? The styles that we defined for div and img inside the “style” element will apply to every div and img on the page.</p><p>If you add another div in your code in the future, then that div will also become 550px wide. We don’t want that.</p><p>We want to apply our styles to the specific div and img that we are using right now. To do this, we need to give our div and img element unique ids. Here’s how you can give an id to an element using its “id” attribute:</p><pre><code>&lt;div id="letter-container"&gt;</code></pre><p>and here’s how to use this id in our embedded style as a selector:</p><pre><code class="language-css">#letter-container{
...
}</code></pre><p>Notice the “#” symbol. It indicates that it is an id, and the styles inside {…} should apply to the element with that specific id only.</p><p>Let’s apply this to our code:</p><pre><code class="language-html">&lt;style&gt;
#letter-container{
width:550px;
}
#header-bat-logo{
width:100%;
}
&lt;/style&gt;
&lt;div id="letter-container"&gt;
&lt;h1&gt;Bat Letter&lt;/h1&gt;
&lt;img id="header-bat-logo" src="bat-logo.jpeg"&gt;
&lt;p&gt;
After all the battles we faught together, after all the difficult times we saw together, after all the good and bad moments we've been through, I think it's time I let you know how I feel about you.
&lt;/p&gt;
&lt;h2&gt;You are the light of my life&lt;/h2&gt;
&lt;p&gt;
You complete my darkness with your light. I love:
&lt;/p&gt;
&lt;ul&gt;
&lt;li&gt;the way you see good in the worse&lt;/li&gt;
&lt;li&gt;the way you handle emotionally difficult situations&lt;/li&gt;
&lt;li&gt;the way you look at Justice&lt;/li&gt;
&lt;/ul&gt;
&lt;p&gt;
I have learned a lot from you. You have occupied a special place in my heart over the time.
&lt;/p&gt;
&lt;h2&gt;I have a confession to make&lt;/h2&gt;
&lt;p&gt;
It feels like my chest &lt;em&gt;does&lt;/em&gt; have a heart. You make my heart beat. Your smile brings smile on my face, your pain brings pain to my heart.
&lt;/p&gt;
&lt;p&gt;
I don't show my emotions, but I think this man behind the mask is falling for you.
&lt;/p&gt;
&lt;p&gt;&lt;strong&gt;I love you Superman.&lt;/strong&gt;&lt;/p&gt;
&lt;p&gt;
Your not-so-secret-lover, &lt;br&gt;
Batman
&lt;/p&gt;
&lt;/div&gt;</code></pre><p>Our HTML is ready with embedded styling.</p><p>However, you can see that as we include more styles, the &lt;style&gt;&lt;/style&gt; will get bigger. This can quickly clutter our main html file. So let’s go one step further and use linked styling by copying the content inside our style tag to a new file.</p><p>Create a new file in the project root directory and save it as style.css:</p><pre><code class="language-css">#letter-container{
width:550px;
}
#header-bat-logo{
width:100%;
}</code></pre><p>We don’t need to write <code>&lt;style&gt;</code> and <code>&lt;/style&gt;</code> in our CSS file.</p><p>We need to link our newly created CSS file to our HTML file using the <code>&lt;link&gt;</code> tag in our html file. Here’s how we can do that:</p><pre><code class="language-html">&lt;link rel="stylesheet" type="text/css" href="style.css"&gt;</code></pre><p>We use the link element to include external resources inside your HTML document. It is mostly used to link Stylesheets. The three attributes that we are using are:</p><ul><li>rel: Relation. What relationship the linked file has to the document. The file with the .css extension is called a stylesheet, and so we keep rel=“stylesheet”.</li><li>type: the Type of the linked file; it’s “text/css” for a CSS file.</li><li>href: Hypertext Reference. Location of the linked file.</li></ul><p>There is no &lt;/link&gt; at the end of the link element. So, &lt;link&gt; is also a self-closing tag.</p><pre><code class="language-html">&lt;link rel="gf" type="cute" href="girl.next.door"&gt;</code></pre><p>If only getting a Girlfriend was so easy :D</p><p>Nah, that’s not gonna happen, let’s move on.</p><p>Here’s the content of our loveletter.html:</p><pre><code class="language-html">&lt;link rel="stylesheet" type="text/css" href="style.css"&gt;
&lt;div id="letter-container"&gt;
&lt;h1&gt;Bat Letter&lt;/h1&gt;
&lt;img id="header-bat-logo" src="bat-logo.jpeg"&gt;
&lt;p&gt;
After all the battles we faught together, after all the difficult times we saw together, after all the good and bad moments we've been through, I think it's time I let you know how I feel about you.
&lt;/p&gt;
&lt;h2&gt;You are the light of my life&lt;/h2&gt;
&lt;p&gt;
You complete my darkness with your light. I love:
&lt;/p&gt;
&lt;ul&gt;
&lt;li&gt;the way you see good in the worse&lt;/li&gt;
&lt;li&gt;the way you handle emotionally difficult situations&lt;/li&gt;
&lt;li&gt;the way you look at Justice&lt;/li&gt;
&lt;/ul&gt;
&lt;p&gt;
I have learned a lot from you. You have occupied a special place in my heart over the time.
&lt;/p&gt;
&lt;h2&gt;I have a confession to make&lt;/h2&gt;
&lt;p&gt;
It feels like my chest &lt;em&gt;does&lt;/em&gt; have a heart. You make my heart beat. Your smile brings smile on my face, your pain brings pain to my heart.
&lt;/p&gt;
&lt;p&gt;
I don't show my emotions, but I think this man behind the mask is falling for you.
&lt;/p&gt;
&lt;p&gt;&lt;strong&gt;I love you Superman.&lt;/strong&gt;&lt;/p&gt;
&lt;p&gt;
Your not-so-secret-lover, &lt;br&gt;
Batman
&lt;/p&gt;
&lt;/div&gt;</code></pre><p>and our style.css:</p><pre><code class="language-css">#letter-container{
width:550px;
}
#header-bat-logo{
width:100%;
}</code></pre><p>Save both the files and refresh, and your output in the browser should remain the same.</p><h3 id="a-few-formalities">A Few Formalities</h3><p>Our love letter is almost ready to deliver to Batman, but there are a few formal pieces remaining.</p><p>Like any other programming language, HTML has also gone through many versions since its birth year(1990). The current version of HTML is HTML5.</p><p>So, how would the browser know which version of HTML you are using to code your page? To tell the browser that you are using HTML5, you need to include <code>&lt;!DOCTYPE html&gt;</code> at top of the page. For older versions of HTML, this line used to be different, but you don’t need to learn that because we don’t use them anymore.</p><p>Also, in previous HTML versions, we used to encapsulate the entire document inside <code>&lt;html&gt;&lt;/html&gt;</code> tag. The entire file was divided into two major sections: Head, inside <code>&lt;head&gt;&lt;/head&gt;</code>, and Body, inside <code>&lt;body&gt;&lt;/body&gt;</code>. This is not required in HTML5, but we still do this for compatibility reasons. Let’s update our code with <code>&lt;Doctype&gt;</code>, <code>&lt;html&gt;</code>, <code>&lt;head&gt;</code> and <code>&lt;body&gt;</code>:</p><pre><code class="language-html">&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;link rel="stylesheet" type="text/css" href="style.css"&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;div id="letter-container"&gt;
&lt;h1&gt;Bat Letter&lt;/h1&gt;
&lt;img id="header-bat-logo" src="bat-logo.jpeg"&gt;
&lt;p&gt;
After all the battles we faught together, after all the difficult times we saw together, after all the good and bad moments we've been through, I think it's time I let you know how I feel about you.
&lt;/p&gt;
&lt;h2&gt;You are the light of my life&lt;/h2&gt;
&lt;p&gt;
You complete my darkness with your light. I love:
&lt;/p&gt;
&lt;ul&gt;
&lt;li&gt;the way you see good in the worse&lt;/li&gt;
&lt;li&gt;the way you handle emotionally difficult situations&lt;/li&gt;
&lt;li&gt;the way you look at Justice&lt;/li&gt;
&lt;/ul&gt;
&lt;p&gt;
I have learned a lot from you. You have occupied a special place in my heart over the time.
&lt;/p&gt;
&lt;h2&gt;I have a confession to make&lt;/h2&gt;
&lt;p&gt;
It feels like my chest &lt;em&gt;does&lt;/em&gt; have a heart. You make my heart beat. Your smile brings smile on my face, your pain brings pain to my heart.
&lt;/p&gt;
&lt;p&gt;
I don't show my emotions, but I think this man behind the mask is falling for you.
&lt;/p&gt;
&lt;p&gt;&lt;strong&gt;I love you Superman.&lt;/strong&gt;&lt;/p&gt;
&lt;p&gt;
Your not-so-secret-lover, &lt;br&gt;
Batman
&lt;/p&gt;
&lt;/div&gt;
&lt;/body&gt;
&lt;html&gt;
&lt;head&gt;
&lt;title&gt;Bat Letter&lt;/title&gt;
&lt;link rel="stylesheet" type="text/css" href="style.css"&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;div id="letter-container"&gt;
&lt;h1&gt;Bat Letter&lt;/h1&gt;
&lt;img id="header-bat-logo" src="bat-logo.jpeg"&gt;
&lt;p&gt;
After all the battles we faught together, after all the difficult times we saw together, after all the good and bad moments we've been through, I think it's time I let you know how I feel about you.
&lt;/p&gt;
&lt;h2&gt;You are the light of my life&lt;/h2&gt;
&lt;p&gt;
You complete my darkness with your light. I love:
&lt;/p&gt;
&lt;ul&gt;
&lt;li&gt;the way you see good in the worse&lt;/li&gt;
&lt;li&gt;the way you handle emotionally difficult situations&lt;/li&gt;
&lt;li&gt;the way you look at Justice&lt;/li&gt;
&lt;/ul&gt;
&lt;p&gt;
I have learned a lot from you. You have occupied a special place in my heart over the time.
&lt;/p&gt;
&lt;h2&gt;I have a confession to make&lt;/h2&gt;
&lt;p&gt;
It feels like my chest &lt;em&gt;does&lt;/em&gt; have a heart. You make my heart beat. Your smile brings smile on my face, your pain brings pain to my heart.
&lt;/p&gt;
&lt;p&gt;
I don't show my emotions, but I think this man behind the mask is falling for you.
&lt;/p&gt;
&lt;p&gt;&lt;strong&gt;I love you Superman.&lt;/strong&gt;&lt;/p&gt;
&lt;p&gt;
Your not-so-secret-lover, &lt;br&gt;
Batman
&lt;/p&gt;
&lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
