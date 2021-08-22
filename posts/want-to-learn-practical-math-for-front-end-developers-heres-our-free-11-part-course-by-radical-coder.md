---
card: "/images/default.jpg"
tags: [Math]
description: Are you looking to become a more effective developer by impro
author: "Milad E. Fahmy"
title: "Here's a Free Course to Help Front End Developers Learn Math"
created: "2021-08-15T19:29:43+02:00"
modified: "2021-08-15T19:29:43+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-math tag-css tag-javascript tag-scrimba ">
<header class="post-full-header">
<h1 class="post-full-title">Here's a Free Course to Help Front End Developers Learn Math</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/04/Screenshot-2020-04-23-at-16.49.35.png 300w,
/news/content/images/size/w600/2020/04/Screenshot-2020-04-23-at-16.49.35.png 600w,
/news/content/images/size/w1000/2020/04/Screenshot-2020-04-23-at-16.49.35.png 1000w,
/news/content/images/size/w2000/2020/04/Screenshot-2020-04-23-at-16.49.35.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/04/Screenshot-2020-04-23-at-16.49.35.png" alt="Here's a Free Course to Help Front End Developers Learn Math">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Are you looking to become a more effective developer by improving your fundamental math skills without reaching for NASA-level calculations? Look no further!</p>
<p>At Scrimba, we're are really excited to announce our new course <a href="https://scrimba.com/course/gpracticalmath">'Practical Math for Front-End Developers'</a>, which offers exactly that. In the course we build 3 projects:</p>
<ol>
<li>A Shopping Cart, where we generate a list of products, calculate the total price of the products and apply a tax rate.</li>
<li>A Weekly Schedule, where we introduce the <code>Date</code> object, perform layout manipulation and learn about the <code>reduce</code> function.</li>
<li>A Monthly Expense Sheet, which brings together everything we've learned and gives us a few handy tips and tricks.</li>
</ol>
<p>This course is brought to you by Ryan Gonyon, who has his own <a href="https://www.google.com/url?q=https://www.twitch.tv/radicalcoder&amp;sa=D&amp;ust=1585686482555000&amp;usg=AFQjCNHoQP_okALIk85y1YojlBM-DwEiHw">Twitch</a> and <a href="https://www.google.com/url?q=https://www.youtube.com/channel/UC2J1l95xB98Fd-v9xGkxHIg&amp;sa=D&amp;ust=1585686482556000&amp;usg=AFQjCNGzqdwTLYFINOKqnrb4a0XgwxY_DA">YouTube</a> channels.</p>
<p>With 5 years of Web Dev experience, a B.S. in Computer Science, and experience tutoring K-12 and University-level math, Ryan is the perfect tutor for this course. Head over to <a href="https://scrimba.com/playlist/pzKyeuP?utm_source=fcc&amp;utm_medium=referral&amp;utm_campaign=gpracticalmath_launch_article">Scrimba</a> to see what he has in store!</p>
<h1 id="applayoutandcsscalcintroduction">App Layout and CSS calc() Introduction</h1>
<p><a href="https://scrimba.com/p/pzKyeuP/c73zJGtp?utm_source=fcc&amp;utm_medium=referral&amp;utm_campaign=gpracticalmath_launch_article"><img src="https://dev-to-uploads.s3.amazonaws.com/i/6ox8mhsqz51nnxda6q0t.png" alt="Site header, main and footer"></a><br>
<em>Click the image to access the course.</em>
</p>
<p>In this screencast, Ryan shows us how to build the outer shell of our applications by correctly sizing the <code>&lt;header&gt;</code>, <code>&lt;footer&gt;</code> and <code>&lt;main&gt;</code> tags with CSS variables and the <code>calc()</code> function.</p>
<p>We use <code>overflow-y: auto</code>; to ensure that the contents of the <code>&lt;main&gt;</code> tag do not extend over the footer.</p>
<pre><code class="language-css">* {
--headerFontSize: 2rem;
--headerPadding: 0.5rem;
--footerFontSize: 1rem;
--footerPadding: 1rem;
}
header {
font-size: var(--headerFontSize);
padding: var(--headerPadding);
}
main {
font-size: 1.5rem;
height: calc(
100vh - var(--headerFontSize) - (2 * var(--headerPadding)) - var(
--footerFontSize
) - (2 * var(--footerPadding))
);
overflow-y: auto;
}
footer {
font-size: var(--footerFontSize);
padding: var(--footerPadding);
}
</code></pre>
<h1 id="therollfunction">The roll() Function</h1>
<p>At some point during your front-end journey, it will be useful to generate random data to test your layouts. The <code>roll()</code> function does exactly that. This cast also shows us how to use JavaScript's <code>Math</code> module and <code>random()</code> function.</p>
<pre><code class="language-js">function roll(min, max, floatFlag) {
let r = Math.random() * (max - min) + min;
return floatFlag ? r : Math.floor(r);
}
</code></pre>
<h1 id="shoppingcartgeneratedatabuildlayout">Shopping Cart - Generate Data / Build Layout</h1>
<p><a href="https://scrimba.com/p/pzKyeuP/cn4kQnUK?utm_source=fcc&amp;utm_medium=referral&amp;utm_campaign=gpracticalmath_launch_article"><img src="https://dev-to-uploads.s3.amazonaws.com/i/bd17qggr11kjt0mwjsib.png" alt="Finished Shopping Cart layout"></a><br>
<em>Click the image to access the course.</em>
</p>
<p>Now we start building our first project, the Shopping Cart, using our newly written <code>roll()</code> function to generate prices. This shows us how much time we save using our new knowledge!</p>
<pre><code class="language-js">let products = [...Array(5)].map((_, i) =&gt; {
return {
index: i,
title: possibleProducts[roll(0, possibleProducts.length)],
price: roll(1, 10, 1).toFixed(2),
count: roll(1, 6),
};
});
</code></pre>
<h1 id="shoppingcartcalculatetotalapplytaxrate">Shopping Cart - Calculate Total / Apply Tax Rate</h1>
<p>In this screencast, we learn how to use <code>.reduce</code> to calculate the total price of the cart</p>
<pre><code class="language-js">let cartTotal = products
.reduce(function (accumulator, product) {
console.log(accumulator, product);
return accumulator + parseFloat(product.price) * product.count;
}, 0)
.toFixed(2);
</code></pre>
<p>We also see how to use <code>roll()</code> to generate a random tax rate and apply it.</p>
<pre><code class="language-js">let taxRate = roll(5, 9, 1).toFixed(1);
</code></pre>
<p>Along the way, we practise parsing float values and rounding them to a specified number after a decimal point.</p>
<h1 id="shoppingcartbonuschallengeweights">Shopping Cart (Bonus Challenge) - Weights</h1>
<p>As a bonus challenge in this cast, we randomly generate the weight of each item in our shopping cart and calculate the total weight at the checkout. In the real world, this could be used to estimate the shipping cost for the buyer.</p>
<p>No spoilers here, so if you want to see the solution you'll have to click through <a href="https://scrimba.com/p/pzKyeuP/ce99mQsa?utm_source=fcc&amp;utm_medium=referral&amp;utm_campaign=gpracticalmath_launch_article">to the course.</a> ?</p>
<h1 id="abriefexplorationofcssshapes">A Brief Exploration of CSS Shapes</h1>
<p><a href="https://scrimba.com/p/pzKyeuP/cGmWKMfR?utm_source=fcc&amp;utm_medium=referral&amp;utm_campaign=gpracticalmath_launch_article"><img src="https://dev-to-uploads.s3.amazonaws.com/i/afroa8rcp6hv0g24aej2.png" alt="Rendered shapes built with CSS"></a><br>
<em>Click the image to access the course.</em>
</p>
<p>In this cast, we learn how to create a square, a circle, a diamond and a triangle with CSS shapes.</p>
<pre><code class="language-css">.triangle {
height: 0;
width: 0;
border-left: 5.5rem solid transparent;
border-right: 5.5rem solid transparent;
border-bottom: 5.5rem solid black;
margin: 1rem;
position: relative;
}
.triangle:after {
content: "";
position: absolute;
height: 0;
width: 0;
border-left: 4.5rem solid transparent;
border-right: 4.5rem solid transparent;
border-bottom: 4.5rem solid red;
left: -4.5rem;
top: 0.6rem;
}
</code></pre>
<h1 id="weeklyscheduleusingdatetobuildweekgeneratingtasks">Weekly Schedule - Using Date() to Build Week / Generating Tasks</h1>
<p>In this cast, we start work on our Weekly Schedule app. First up, we learn about JavaScript's <code>Date</code> object.</p>
<pre><code class="language-js">function getNextDay(day) {
let nextDay = new Date(day);
nextDay.setDate(day.getDate() + 1);
return nextDay;
}
</code></pre>
<p>Next, we look at using the <code>roll()</code> function to test the layout and produce a list of tasks. Take a look <a href="https://scrimba.com/p/pzKyeuP/c2KKPGh6?utm_source=fcc&amp;utm_medium=referral&amp;utm_campaign=gpracticalmath_launch_article">at the course</a> to see how it works</p>
<h1 id="weeklyschedulebuildlayoutdisplaydata">Weekly Schedule - Build Layout / Display Data</h1>
<p><a href="https://scrimba.com/p/pzKyeuP/caZZyNA9?utm_source=fcc&amp;utm_medium=referral&amp;utm_campaign=gpracticalmath_launch_article"><img src="https://dev-to-uploads.s3.amazonaws.com/i/uezalgp2o5marghv69gs.png" alt="Weekly Schedule app"></a><br>
<em>Click the image to access the course.</em>
</p>
<p>In this cast, Ryan shows us how to use the <code>calc()</code> function to display the data generated in the previous cast.</p>
<pre><code class="language-css">--mainHeight: calc(
100vh - var(--headerFontSize) - (2 * var(--headerPadding)) - var(
--footerFontSize
) - (2 * var(--footerPadding))
);
</code></pre>
<p>We also learn how to cross out completed tasks (<a href="https://scrimba.com/p/pzKyeuP/caZZyNA9?utm_source=fcc&amp;utm_medium=referral&amp;utm_campaign=gpracticalmath_launch_article">click through</a> to find out how.) The result is a clean, functional app that we can use in everyday life.</p>
<h1 id="monthlyexpensesheetgenerateanddisplaymonth">Monthly Expense Sheet - Generate and Display Month</h1>
<p><a href="https://scrimba.com/p/pzKyeuP/cD44VpTW?utm_source=fcc&amp;utm_medium=referral&amp;utm_campaign=gpracticalmath_launch_article"><img src="https://dev-to-uploads.s3.amazonaws.com/i/a6you8qo65mq9smjyhrv.png" alt="Grid display"></a><br>
<em>Click the image to access the course.</em>
</p>
<p>Next, use the concepts from the previous casts to build something more complex - our expenses tracker. In this project we generate data, display months and draw up a grid.</p>
<pre><code class="language-js">function displayMonth(month) {
// &lt;div class="day"&gt;3&lt;/div&gt;
let monthHtml = month.reduce(function (accumulator, day) {
return accumulator + `&lt;div class="day"&gt;${day.date.getDate()}&lt;/div&gt;`;
}, "");
document.getElementById("MonthlyExpenses").innerHTML = monthHtml;
}
</code></pre>
<h1 id="monthlyexpensesheetgeneratedisplayandtrackexpenses">Monthly Expense Sheet - Generate, Display, and Track Expenses</h1>
<p><a href="https://scrimba.com/p/pzKyeuP/cD4weyhd?utm_source=fcc&amp;utm_medium=referral&amp;utm_campaign=gpracticalmath_launch_article"><img src="https://dev-to-uploads.s3.amazonaws.com/i/kb2kp4o9k4p6mwlvi0hl.png" alt="Monthly Expense Sheet app"></a><br>
<em>Click the image to access the course.</em>
</p>
<p>In the final cast, we perform budget calculations by writing functions to track our expenses, rent and utility bills. We then display the expenditures alongside the remaining available budget.</p>
<pre><code class="language-js">function displayMonth(month, budget, netValue) {
let monthHtml =
`&lt;div class="monthly-summary"&gt;
Budget: \$${budget.toFixed(2)} | Net Value: \$${netValue.toFixed(2)}
&lt;/div&gt;` +
month.reduce(function (accumulator, day) {
return accumulator + `&lt;div class="day"&gt;${day.date.getDate()}&lt;/div&gt;`;
}, "");
document.getElementById("MonthlyExpenses").innerHTML = monthHtml;
}
</code></pre>
<h1 id="conclusion">Conclusion</h1>
<p>Well done for finishing this course, I really hope you have learned some useful tips and tricks that you can apply in your future coding adventures!</p>
<p>Happy learning ;)</p>
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
