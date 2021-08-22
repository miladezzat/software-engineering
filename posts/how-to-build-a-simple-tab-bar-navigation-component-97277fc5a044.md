---
card: "https://cdn-media-1.freecodecamp.org/images/0*E5R1ZESIMi18_upW.png"
tags: [Web Development]
description: "The theme for week #3 of my Weekly Coding Challenge is naviga"
author: "Milad E. Fahmy"
title: "How to build a simple tab bar navigation component"
created: "2021-08-16T10:07:12+02:00"
modified: "2021-08-16T10:07:12+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-web-development tag-css tag-javascript tag-programming tag-tech ">
<header class="post-full-header">
<h1 class="post-full-title">How to build a simple tab bar navigation component</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/0*E5R1ZESIMi18_upW.png 300w,
https://cdn-media-1.freecodecamp.org/images/0*E5R1ZESIMi18_upW.png 600w,
https://cdn-media-1.freecodecamp.org/images/0*E5R1ZESIMi18_upW.png 1000w,
https://cdn-media-1.freecodecamp.org/images/0*E5R1ZESIMi18_upW.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/0*E5R1ZESIMi18_upW.png" alt="How to build a simple tab bar navigation component">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
&lt;div class="tab active purple"&gt;
&lt;i class="fas fa-home"&gt;&lt;/i&gt;
&lt;p&gt;House&lt;/p&gt;
&lt;/div&gt;
&lt;div class="tab pink"&gt;
&lt;i class="far fa-heart"&gt;&lt;/i&gt;
&lt;p&gt;Likes&lt;/p&gt;
&lt;/div&gt;
&lt;div class="tab yellow"&gt;
&lt;i class="fas fa-search"&gt;&lt;/i&gt;
&lt;p&gt;Search&lt;/p&gt;
&lt;/div&gt;
&lt;div class="tab teal"&gt;
&lt;i class="far fa-user"&gt;&lt;/i&gt;
&lt;p&gt;Profile&lt;/p&gt;
&lt;/div&gt;
&lt;/div&gt;</code></pre><p>As you can see, each <code>.tab</code> has an icon (from <a href="https://fontawesome.con/" rel="noopener">FontAwesome</a>), the corresponding text, and some extra classes that will be used to give each tab specific <code>background-color</code> and <code>color</code> properties. Also the <code>.active</code> class, which will be used to style the active tab. Pretty basic, right? ?</p><h3 id="the-css">The CSS</h3><p>First, let’s style the <code>.tab-nav-container</code>:</p><p><strong>Note</strong>: we have a <code>fixed</code> width on the container as we don't want it to change its size when we change the active <code>.tab</code> since each tab might have a text that's either longer or shorter in size (e.g. Home (4 letters) vs Profile (6 letters)).</p><p>We are using <code>flexbox</code> to distribute the <code>.tab</code>s evenly inside the container. Other than that I believe that the CSS is pretty self-explanatory.</p><p>Next…the <code>.tab</code>'s styling:</p><pre><code class="language-css">.tab {
background-color: #ffffff;
border-radius: 50px;
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;
padding: 0 20px;
margin: 0 10px;
transition: background 0.4s linear;
}
.tab i {
font-size: 1.2em;
}
.tab p {
font-weight: bold;
overflow: hidden;
max-width: 0;
}
.tab.active p {
margin-left: 10px;
max-width: 200px;
transition: max-width 0.4s linear;
}
.tab.active.purple {
background-color: rgba(91, 55, 183, 0.2);
color: rgba(91, 55, 183, 1);
}
.tab.active.pink {
background-color: rgba(201, 55, 157, 0.2);
color: rgba(201, 55, 157, 1);
}
.tab.active.yellow {
background-color: rgba(230, 169, 25, 0.2);
color: rgba(230, 169, 25, 1);
}
.tab.active.teal {
background-color: rgba(28, 150, 162, 0.2);
color: rgba(28, 150, 162, 1);
}</code></pre><p>Few things to note here:</p><ol><li>In order to have a smooth transition when we change the <code>.active</code> tab, we are setting a <code>transition: background</code> property to the <code>.tab</code> class.</li><li>By default the <code>p</code> tag inside the <code>.tab</code> has a <code>max-width</code> of <code>0</code> and its <code>overflow</code> property set to <code>hidden</code>. This is because we only want to show the text only when the <code>.tab</code> is active.</li><li>We are using the custom color classes (<code>.purple</code>, <code>.pink</code>, etc) to have different colors in the tabs.</li></ol><p>Let’s make sure it looks good on mobile too:</p><pre><code class="language-css">@media (max-width: 450px) {
.tab-nav-container {
padding: 20px;
width: 350px;
}
.tab {
padding: 0 10px;
margin: 0;
}
.tab i {
font-size: 1em;
}
}</code></pre><p>As you can see, we are shrinking the <code>.tab-nav-container</code> when the max-width of the viewport is <code>450px</code> and we are also reducing the padding to make it look smaller.</p><h3 id="the-javascript">The JavaScript</h3><p>At the end, in JS we have to make sure that when the user clicks another <code>.tab</code> the <code>.active</code> class is added to it and removed from the previous active <code>.tab</code>:</p><pre><code class="language-css">// Get all the tabs
const tabs = document.querySelectorAll('.tab');
tabs.forEach(clickedTab =&gt; {
// Add onClick event listener on each tab
clickedTab.addEventListener('click', () =&gt; {
// Remove the active class from all the tabs (this acts as a "hard" reset)
tabs.forEach(tab =&gt; {
tab.classList.remove('active');
});
// Add the active class on the clicked tab
clickedTab.classList.add('active');
});
});</code></pre><h3 id="conclusion">Conclusion</h3><p>This kind of tab bar navigation is mostly used on mobile devices, so if you want to reuse it for a mobile app make sure that you position the container to the bottom of the screen (with <code>position: fixed</code>) and you recalculate the width to fill in the entire screen's width.</p><p>In the Codepen example, we’re also changing the background color of the body when another tab is clicked. This is just for visual purposes and it’s not exactly related to the Coding Theme of this week. But if you want to see how I did that, check out the JS code in the <a href="https://codepen.io/FlorinPop17/pen/qvyWxX" rel="noopener">pen</a> (just 2 extra lines of code).</p><h3 id="more-examples-for-this-coding-challenge">More examples for this Coding Challenge</h3><p>In a <a href="https://www.florin-pop.com/blog/2017/09/responsive-animated-navigation-menu" rel="noopener">previous</a> article, I demonstrated how to build a responsive navigation menu. You can check it out too if you want to build something like that.</p><p>Also if you haven’t, make sure you read the <a href="https://www.florin-pop.com/blog/2019/03/weekly-coding-challenge/" rel="noopener">Weekly Coding Challenge</a> “rules” if you want to participate in the Challenge! And why wouldn’t you? It’s a great way to improve your coding skills! ?</p><p>Happy coding! ?</p><p><em>Originally published at <a href="https://www.florin-pop.com/blog/2019/03/tab-bar-navigation/" rel="noopener">www.florin-pop.com</a>.</em></p>
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
