---
card: "https://cdn-media-1.freecodecamp.org/images/0*6-JxbwsPgUN6VvBZ.gif"
tags: [Web Development]
description: "Some of you might already know but for those who don’t, I’m s"
author: "Milad E. Fahmy"
title: "How to build a double slider sign-in and sign-up form"
created: "2021-08-16T10:07:30+02:00"
modified: "2021-08-16T10:07:30+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-web-development tag-web-design tag-coding tag-tech tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">How to build a double slider sign-in and sign-up form</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/0*6-JxbwsPgUN6VvBZ.gif 300w,
https://cdn-media-1.freecodecamp.org/images/0*6-JxbwsPgUN6VvBZ.gif 600w,
https://cdn-media-1.freecodecamp.org/images/0*6-JxbwsPgUN6VvBZ.gif 1000w,
https://cdn-media-1.freecodecamp.org/images/0*6-JxbwsPgUN6VvBZ.gif 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/0*6-JxbwsPgUN6VvBZ.gif" alt="How to build a double slider sign-in and sign-up form">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
&lt;div class="form-container sign-up-container"&gt;
&lt;!-- Sign Up form code goes here --&gt;
&lt;/div&gt;
&lt;div class="form-container sign-in-container"&gt;
&lt;!-- Sign In form code goes here --&gt;
&lt;/div&gt;
&lt;div class="overlay-container"&gt;
&lt;!-- The overlay code goes here --&gt;
&lt;/div&gt;
&lt;/div&gt;</code></pre><p>The main div has a class of <code>.container</code> and also an id of <code>container</code> because we want to target this element in the JavaScript (more on this below). ?</p><h4 id="the-sign-up-form"><strong>The Sign Up form</strong></h4><pre><code class="language-html">&lt;div class="form-container sign-up-container"&gt;
&lt;form action="#"&gt;
&lt;h1&gt;Create Account&lt;/h1&gt;
&lt;div class="social-container"&gt;
&lt;a href="#" class="social"&gt;&lt;i class="fab fa-facebook-f"&gt;&lt;/i&gt;&lt;/a&gt;
&lt;a href="#" class="social"&gt;&lt;i class="fab fa-google-plus-g"&gt;&lt;/i&gt;&lt;/a&gt;
&lt;a href="#" class="social"&gt;&lt;i class="fab fa-linkedin-in"&gt;&lt;/i&gt;&lt;/a&gt;
&lt;/div&gt;
&lt;span&gt;or use your email for registration&lt;/span&gt;
&lt;input type="text" placeholder="Name" /&gt;
&lt;input type="email" placeholder="Email" /&gt;
&lt;input type="password" placeholder="Password" /&gt;
&lt;button&gt;Sign Up&lt;/button&gt;
&lt;/form&gt;
&lt;/div&gt;</code></pre><h4 id="the-sign-in-form"><strong>The Sign In form</strong></h4><p>We also have a few classes on each div:</p><pre><code class="language-html">&lt;div class="form-container sign-in-container"&gt;
&lt;form action="#"&gt;
&lt;h1&gt;Sign in&lt;/h1&gt;
&lt;div class="social-container"&gt;
&lt;a href="#" class="social"&gt;&lt;i class="fab fa-facebook-f"&gt;&lt;/i&gt;&lt;/a&gt;
&lt;a href="#" class="social"&gt;&lt;i class="fab fa-google-plus-g"&gt;&lt;/i&gt;&lt;/a&gt;
&lt;a href="#" class="social"&gt;&lt;i class="fab fa-linkedin-in"&gt;&lt;/i&gt;&lt;/a&gt;
&lt;/div&gt;
&lt;span&gt;or use your account&lt;/span&gt;
&lt;input type="email" placeholder="Email" /&gt;
&lt;input type="password" placeholder="Password" /&gt;
&lt;a href="#"&gt;Forgot your password?&lt;/a&gt;
&lt;button&gt;Sign In&lt;/button&gt;
&lt;/form&gt;
&lt;/div&gt;</code></pre><ul><li>The <code>.form-container</code> class will contain the CSS which is duplicated for both the <code>.sign-in-container</code> and <code>.sign-up-container</code> classes;</li><li>the 2 different classes (mentioned above) will contain the CSS which is different.</li></ul><p>This way we avoid having to write the same CSS code twice and we use the power of being able to add multiple classes.</p><p>You might have also noticed that the <code>i</code> tags have some classes. These are because we are using <a href="http://fontawesome.io/" rel="noopener">FontAwesome</a> for the icons. Read more about them on their website.</p><h4 id="the-overlay-container"><strong>The overlay container</strong></h4><pre><code class="language-html">&lt;div class="overlay-container"&gt;
&lt;div class="overlay"&gt;
&lt;div class="overlay-panel overlay-left"&gt;
&lt;h1&gt;Welcome Back!&lt;/h1&gt;
&lt;p&gt;
To keep connected with us please login with your personal info
&lt;/p&gt;
&lt;button class="ghost" id="signIn"&gt;Sign In&lt;/button&gt;
&lt;/div&gt;
&lt;div class="overlay-panel overlay-right"&gt;
&lt;h1&gt;Hello, Friend!&lt;/h1&gt;
&lt;p&gt;Enter your personal details and start journey with us&lt;/p&gt;
&lt;button class="ghost" id="signUp"&gt;Sign Up&lt;/button&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;</code></pre><p>Same as above, we have a common class <code>.overlay-panel</code> and two different classes: <code>.overlay-left</code> and <code>.overlay-right</code>. Also, we have <code>id</code>s for the buttons as we're going to add an <strong>onClick</strong> <code>eventListener</code> for both of them in the <code>JavaScript</code>.</p><h3 id="the-javascript">The JavaScript</h3><p>Usually, we cover the CSS before the JS part, but this time it is easier to show and explain the JavaScript code first. It will help you understand the CSS we’re going to have later on.</p><pre><code class="language-js">const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');
signUpButton.addEventListener('click', () =&gt; {
container.classList.add('right-panel-active');
});
signInButton.addEventListener('click', () =&gt; {
container.classList.remove('right-panel-active');
});</code></pre><p>As explained above, we add the event listeners. When the buttons are clicked we <code>add</code> or <code>remove</code> the <code>.right-panel-active</code> class (not the best name for the class, but it’s the best I got at the moment ?). This class will be used to style the subcomponents differently as we have two screens.</p><h3 id="the-css">The CSS</h3><p>First, we have the base CSS for the basic components:</p><pre><code class="language-css">h1 {
font-weight: bold;
margin: 0;
}
p {
font-size: 14px;
font-weight: 100;
line-height: 20px;
letter-spacing: 0.5px;
margin: 20px 0 30px;
}
span {
font-size: 12px;
}
a {
color: #333;
font-size: 14px;
text-decoration: none;
margin: 15px 0;
}
button {
border-radius: 20px;
border: 1px solid #ff4b2b;
background-color: #ff4b2b;
color: #ffffff;
font-size: 12px;
font-weight: bold;
padding: 12px 45px;
letter-spacing: 1px;
text-transform: uppercase;
transition: transform 80ms ease-in;
}
button:active {
transform: scale(0.95);
}
button:focus {
outline: none;
}
button.ghost {
background-color: transparent;
border-color: #ffffff;
}
form {
background-color: #ffffff;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
padding: 0 50px;
height: 100%;
text-align: center;
}
input {
background-color: #eee;
border: none;
padding: 12px 15px;
margin: 8px 0;
width: 100%;
}
.social-container {
margin: 20px 0;
}
.social-container a {
border: 1px solid #dddddd;
border-radius: 50%;
display: inline-flex;
justify-content: center;
align-items: center;
margin: 0 5px;
height: 40px;
width: 40px;
}</code></pre><p>Few things to note here:</p><ol><li>We are styling the elements directly (h1, p, a). Usually, you wouldn’t do that as it might get mixed up with other styles, so it’s good to add a class to each of them. But for this example it’s working ok because we only have these elements on the page.</li><li>We have a little <code>transition</code> on the <code>button</code>. When it's clicked, the <em>active</em> state is triggered so we make it a little smaller. Nice and simple clicking effect ?!</li><li>The <code>form</code> is a <code>flex</code> container as we want to center everything within it, and it's easy to do that with <code>flexbox</code>. You'll see below that it's used a few more times.</li></ol><p>The <code>.container</code> CSS:</p><pre><code class="language-css">.container {
background-color: #ffffff;
border-radius: 10px;
box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
position: relative;
overflow: hidden;
width: 768px;
max-width: 100%;
min-height: 480px;
}</code></pre><ul><li><code>Relative</code> positioned because we'll have <code>absolute</code> positioned children elements (explained why, above).</li><li><code>Overflow</code> is set to <code>hidden</code> because we have set a <code>border-radius</code> and we don't want the child elements to break this radius and be displayed outside of the <code>.container</code>.</li></ul><p>Now for the fun part, the <code>.form-container</code> and related styles:</p><pre><code class="language-css">.form-container {
position: absolute;
top: 0;
height: 100%;
transition: all 0.6s ease-in-out;
}
.sign-in-container {
left: 0;
width: 50%;
z-index: 2;
}
.sign-up-container {
left: 0;
width: 50%;
opacity: 0;
z-index: 1;
}
.container.right-panel-active .sign-in-container {
transform: translateX(100%);
}
.container.right-panel-active .sign-up-container {
transform: translateX(100%);
opacity: 1;
z-index: 5;
animation: show 0.6s;
}
@keyframes show {
0%,
49.99% {
opacity: 0;
z-index: 1;
}
50%,
100% {
opacity: 1;
z-index: 5;
}
}</code></pre><p><strong>Note</strong> the following:</p><ol><li>The <code>animation</code> (<code>show</code>) which is responsible for changing the <code>z-index</code> of the <code>.form-container</code>s as discussed above. We go by having the z-index <strong>1</strong> from <code>0-49.99%</code> and having it at <strong>5</strong> from <code>50-100%</code>. These ranges are used because we want them to change fast.</li><li>We use the <code>.right-panel-active</code> class to move around the <code>.form-container</code>s when the buttons are clicked.</li></ol><p>And finally, the <code>.overlay-container</code> and related styles:</p><pre><code class="language-css">.overlay-container {
position: absolute;
top: 0;
left: 50%;
width: 50%;
height: 100%;
overflow: hidden;
transition: transform 0.6s ease-in-out;
z-index: 100;
}
.container.right-panel-active .overlay-container {
transform: translateX(-100%);
}
.overlay {
background: #ff416c;
background: -webkit-linear-gradient(to right, #ff4b2b, #ff416c);
background: linear-gradient(to right, #ff4b2b, #ff416c);
background-repeat: no-repeat;
background-size: cover;
background-position: 0 0;
color: #ffffff;
position: relative;
left: -100%;
height: 100%;
width: 200%;
transform: translateX(0);
transition: transform 0.6s ease-in-out;
}
.container.right-panel-active .overlay {
transform: translateX(50%);
}
.overlay-panel {
position: absolute;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
padding: 0 40px;
text-align: center;
top: 0;
height: 100%;
width: 50%;
transform: translateX(0);
transition: transform 0.6s ease-in-out;
}
.overlay-left {
transform: translateX(-20%);
}
.container.right-panel-active .overlay-left {
transform: translateX(0);
}
.overlay-right {
right: 0;
transform: translateX(0);
}
.container.right-panel-active .overlay-right {
transform: translateX(20%);
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
