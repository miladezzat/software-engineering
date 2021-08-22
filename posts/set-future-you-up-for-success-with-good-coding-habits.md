---
card: "/images/default.jpg"
tags: [Web Development]
description: "Think before you code. You have the power to make your future"
author: "Milad E. Fahmy"
title: "How to Set Your Future Self Up for Success with Good Coding Habits"
created: "2021-08-16T11:27:49+02:00"
modified: "2021-08-16T11:27:49+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-web-development tag-technology tag-tech tag-programming tag-self-improvement tag-self-awareness tag-100days100projects tag-self-development tag-code-quality tag-code tag-clean-code tag-code-review tag-learning-to-code tag-learn-to-code tag-fundamentals tag-habit-building tag-success tag-javascript ">
<header class="post-full-header">
<h1 class="post-full-title">How to Set Your Future Self Up for Success with Good Coding Habits</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/04/set-up-for-success.jpg 300w,
/news/content/images/size/w600/2020/04/set-up-for-success.jpg 600w,
/news/content/images/size/w1000/2020/04/set-up-for-success.jpg 1000w,
/news/content/images/size/w2000/2020/04/set-up-for-success.jpg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/04/set-up-for-success.jpg" alt="How to Set Your Future Self Up for Success with Good Coding Habits">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
const isFreezing = temperature &lt;= 32 ? true : false;
</code></pre><p>But sometimes this takes a toll on the readability of your code. While it might seem like it looks nice and super clean on one line, imagine that as that ternary gets more complex, someone will have to spend more time understanding what it means.</p><pre><code class="language-js">const minutes = 30;
const cookie = {
color: 'black'
};
const cookieStatus = minutes &gt; 20 ? cookie.color === 'black' ? 'burned' : 'done' : 'not done';
</code></pre><h3 id="what-can-we-do-better">What can we do better?</h3><p>Now I would imagine most of us can figure out what <code>cookieStatus</code> is in this example (spoilers: <code>burned</code>). But think about the time you spent figuring it out. Whether an extra 1s or 2s, it forces you to spend additional cognitive energy to read through the code.</p><p>On the other hand:</p><pre><code class="language-js">const minutes = 30;
const cookie = {
color: 'black'
};
let cookieStatus;
if ( minutes &lt;= 20 ) {
cookieStatus = 'not done';
} else if ( cookie.color === 'black' ) {
cookieStatus = 'burned';
} else {
cookieStatus = 'done';
}
</code></pre><p>No, it may not be as clean or clever as the 1-line ternary statement, but the next time you visit it, the less you'll have to think about what the answer is. </p><p>It's also going to make it that much easier for bugs to creep up and get past your code reviewers when all of your code changes are in a 1-line git diff.</p><p>And yes, this is a simple example. But imagine this in a real world scenario with important business logic where you could run into these situations frequently. &nbsp;</p><p>Say you need to add another condition – that ternary is just going to keep getting more complex! You're just making it more difficult to debug or extend, where the <code>if</code> statements can continue on in an easily readable way.</p><p>For what it's worth, ternaries and other shortcuts can be simple and effective in code, but don't abuse that effectiveness and end up making things more difficult.</p><h2 id="keeping-things-consistent">Keeping things consistent</h2><h3 id="what-is-the-challenge-1">What is the challenge?</h3><p>We all have our favorite way to code. Though I'd argue not including a semicolon at the end of your JavaScript is just completely wrong, you might prefer to write your code <s>the wrong way</s> without them.</p><pre><code class="language-jsx">// Jim's code style
function MyComponent() {
function handleOnClick() {
alert('Click!')
}
return (
&lt;button onClick={handleOnClick}&gt;My Button&lt;/button&gt;
)
}
// Creed's code style
const shouldMakeMoney = true;
function makeMoney() {
if ( shouldMakeMoney ) {
return noMoney;
}
return moreMoney;
}
* DOCUMENTATION
* Order Total &gt;= 25: Discount %10
* Order Total &gt;= 50: Discount %15
* Order Total &gt;= 100: Discount %20
* Order Total &gt;= 75: Free Shipping
*/
const orderSubTotal = 84.00;
let orderTotal = orderSubTotal;
// If the order total is under 75, apply shipping discount
if ( orderTotal &lt; 75 ) {
orderTotal = addShipping(orderTotal);
}
// If the order total reaches a threshold, apply given discount
if ( orderTotal &gt;= 100) {
orderTotal = applyDiscount(orderTotal, .2);
} else if ( orderTotal &gt;= 50 ) {
orderTotal = applyDiscount(orderTotal, .15);
} else if ( orderTotal &gt;= 25 ) {
orderTotal = applyDiscount(orderTotal, .1);
}
</code></pre><p>This is a minimal example, but we can see the difference between the rules at the top and how we apply them. The documentation should clearly explain what the rules are, but it shouldn't care about how those rules were implemented.</p><p>On the other hand, the comments might not care about what the rules are, but need to implement them in an efficient and logical way. We should be able to update the code with the business rules, such as changing the top level discount tier from $100 to $80, without having to rework the code.</p><p>But documentation is much more than business rules – it's providing a way for anyone to understand your work from a higher level. This could include anything from architectural diagrams to the theory behind your core algorithm.</p><p>While maybe code isn't the best place for details like this to live, it's really important information that can help instill confidence in your project and give others an opportunity to understand more about the work.</p><h2 id="creating-effective-pull-requests">Creating effective Pull Requests</h2><h3 id="what-is-the-challenge-4">What is the challenge?</h3><p>Pull requests (or merge requests) are a core part of any development team's project lifecycle. It provides a way to package and present your code in a consumable way for your peers to review and understand your work.</p><p>There's a lot that can go into a pull request from a single commit to the entirety of the next version of your website. That's a lot of context to expect someone to understand by reading through the commits alone.</p><h3 id="what-can-we-do-better-4">What can we do better?</h3><p>Pull requests don't need to be an art. There should be one primary goal of the preparation you put into it – providing context into your changes. At a minimum, it should answer the questions of "what" and "why".</p><p>We can even use tools like pull request templates to push us in the right direction. <a href="/news/why-you-should-write-merge-requests-like-youre-posting-to-instagram-765e32a3ec9c/">Define an outline</a> of what you want explained and chances are, people will follow that outline. This helps avoid the 1-line "closes [ticket]" description or even worse, an empty description.</p><p>With my projects, I hope to have a few questions answered before I dive into a code review:</p><ul><li>What is the change?</li><li>What does it impact?</li><li>How do I reproduce or test the change?</li></ul><p>Just a few details around the change set can provide much needed context for those reviewing your code. It's easy to look at code, but it's harder to understand it without knowing how it fits into the bigger picture.</p><h2 id="hardening-your-code-with-tests">Hardening your code with tests</h2><h3 id="what-is-the-challenge-5">What is the challenge?</h3><p>Tests are a way to ensure your code runs the same way each time. Being able to prove that the same input will always have the same output will help provide you and your team with a higher level of confidence that your application won't come crashing down with the next small change.</p><p>Without them, we're left with human error, where no matter how good your QA Engineer is (shoutout to my testers out there), something will always slip through. And that's not to say your tests will always catch every problem, but we can use the tools available to help prevent it.</p><h3 id="what-can-we-do-better-5">What can we do better?</h3><p>Where comments are a way of providing the context of how something works, test are a way to ensure they work. Providing test cases that are repeatable helps enforce that.</p><pre><code class="language-js">function applyDiscount(value, discount) {
const discountAmount = value * discount;
return value - discountAmount;
}
expect(applyDiscount(10, .1)).toEqual(.9);
expect(applyDiscount(532151235, .1054)).toEqual(476062494.831);
<p style="margin: 0;">
<a href="https://twitter.com/colbyfayock" style="display: block;">
</a>
</p>
<ul style="display:flex;justify-content:center;list-style:none;padding:0;margin: .5em 0 0;font-size: .8em;">
<li style="margin: 0 .6em;padding: 0;">
<a href="https://twitter.com/colbyfayock" style="text-decoration: none;">? Follow Me On Twitter</a>
</li>
<li style="margin: 0 .6em;padding: 0;">
<a href="https://youtube.com/colbyfayock" style="text-decoration: none;">?️ Subscribe To My Youtube</a>
</li>
<li style="margin: 0 .6em;padding: 0;">
<a href="https://www.colbyfayock.com/newsletter/" style="text-decoration: none;">✉️ Sign Up For My Newsletter</a>
</li>
</ul>
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
