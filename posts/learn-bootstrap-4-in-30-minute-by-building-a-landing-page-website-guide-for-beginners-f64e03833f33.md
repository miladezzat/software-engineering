---
card: "https://cdn-media-1.freecodecamp.org/images/1*1_a4TocueD3AqEpsDDv4bA.jpeg"
tags: [Web Development]
description: "by SaidHayani@"
author: "Milad E. Fahmy"
title: "Learn Bootstrap 4 in 30 minutes by building a landing page website"
created: "2021-08-16T10:17:07+02:00"
modified: "2021-08-16T10:17:07+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-web-development tag-bootstrap-4 tag-front-end tag-tech tag-design ">
<header class="post-full-header">
<h1 class="post-full-title">Learn Bootstrap 4 in 30 minutes by building a landing page website</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*1_a4TocueD3AqEpsDDv4bA.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*1_a4TocueD3AqEpsDDv4bA.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*1_a4TocueD3AqEpsDDv4bA.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*1_a4TocueD3AqEpsDDv4bA.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*1_a4TocueD3AqEpsDDv4bA.jpeg" alt="Learn Bootstrap 4 in 30 minutes by building a landing page website">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
col-md-2 // class used for medium devices like tablets
&lt;nav class="navbar navbar-expand-lg fixed-top "&gt;
&lt;a class="navbar-brand" href="#"&gt;Home&lt;/a&gt;
&lt;button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"&gt;
&lt;span class="navbar-toggler-icon"&gt;&lt;/span&gt;
&lt;/button&gt;
&lt;div class="collapse navbar-collapse " id="navbarSupportedContent"&gt;     &lt;ul class="navbar-nav mr-4"&gt;
&lt;li class="nav-item"&gt;
&lt;a class="nav-link" data-value="about" href="#"&gt;About&lt;/a&gt;  &lt;/li&gt;
&lt;li class="nav-item"&gt;
&lt;a class="nav-link " data-value="portfolio"href="#"&gt;Portfolio&lt;/a&gt;
&lt;/li&gt;
&lt;li class="nav-item"&gt;
&lt;a class="nav-link " data-value="blog" href="#"&gt;Blog&lt;/a&gt;   &lt;/li&gt;
&lt;li class="nav-item"&gt;
&lt;a class="nav-link " data-value="team" href="#"&gt;   Team&lt;/a&gt;       &lt;/li&gt;
&lt;li class="nav-item"&gt;
&lt;a class="nav-link " data-value="contact" href="#"&gt;Contact&lt;/a&gt; &lt;/li&gt;
&lt;/ul&gt;
.nav-link , .navbar-brand{ color: #f4f4f4; cursor: pointer;}
.nav-link{ margin-right: 1em !important;}
.nav-link:hover{ background: #f4f4f4; color: #f97300; }
.navbar-collapse{ justify-content: flex-end;}
.navbar-toggler{  background:#fff !important;}</code></pre><p>The new Bootstrap Grid is built with the Flexbox system, so for alignment, you have to use a Flexbox property. For example, to place the navbar menu on the right we need to add a <code>justify-content</code> property and set it to <code>flex-end</code>.</p><pre><code class="language-css">.navbar-collapse{
justify-content: flex-end;
}</code></pre><p>Add the <code>.fixed-top</code> class to the navbar to give it a fixed position.</p><p>To make the navbar background color light, add <code>.bg-light</code>. For a dark background, add <code>.bg-dark</code>, and for a light blue background, add <br><code>.bg-primary</code>.</p><p>Here’s how that should look:</p><pre><code class="language-css">.bg-dark{
background-color:#343a40!important
}
.bg-primary{
background-color:#007bff!important
}</code></pre><h3 id="header">Header</h3><pre><code class="language-html">&lt;header class="header"&gt;
&lt;/header&gt;</code></pre><p>Let’s try and create a layout for the header.</p><p>Here, we want to make sure the header takes up the window’s height so we are going to use a little <code>JQuery</code> code.</p><p>First, create a file named <code><strong>main.js</strong></code> and include it in the <code><strong>index.html</strong></code><strong><em> </em></strong>file<strong><em> </em></strong>before the closing <code>body</code> tag:</p><pre><code class="language-html">&lt;script type="text/javascript" src='js/main.js'&gt;&lt;/script&gt;</code></pre><p>In the <code>main.js</code><em> </em>file insert this a little code of JQuery<em>:</em></p><pre><code class="language-js">$(document).ready(function(){
$('.header').height($(window).height());
})</code></pre><p>It’d be pretty cool if we set a nice background image to the header:</p><pre><code class="language-css">/*header style*/
.header{
background-image: url('../images/headerback.jpg');
background-attachment: fixed;
background-size: cover;
background-position: center;
&lt;div class="overlay"&gt;&lt;/div&gt;
&lt;/header&gt;</code></pre><p>Then, add this to your <code><strong>main.css</strong></code> file:</p><pre><code class="language-css">.overlay{
position: absolute;
min-height: 100%;
min-width: 100%;
left: 0;
top: 0;
background: rgba(244, 244, 244, 0.79);
}</code></pre><p>Now we have to add a description inside the header.</p><p>To wrap our description we’re first going to create a <code>div</code> and give it a class <code>.container</code>.</p><p><code>.container</code> is a Bootstrap class that will help you to wrap your content and make your layout more responsive:</p><pre><code class="language-html">&lt;header class="header"&gt;
&lt;div class="overlay"&gt;&lt;/div&gt;
&lt;div class="container"&gt;
&lt;/div&gt;
&lt;/header&gt;</code></pre><p>Then, add another <code>div</code> which will contain the description.</p><pre><code class="language-html">&lt;div class="description "&gt;
&lt;h1&gt;    Hello ,Welcome To My official Website
&lt;p&gt;    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
&lt;/p&gt;
&lt;button class="btn btn-outline-secondary btn-lg"&gt;See more&lt;/button&gt;   &lt;/h1&gt;
&lt;/div&gt;</code></pre><p>We’ll give it a class of <code>.description</code> and add the <code>.text-center</code> class to make sure the content is placed in the center of the page.</p><h4 id="buttons">Buttons</h4><p>Add the class <code>.btn btn-outline-secondary</code> to the <code>button</code> element. there are many other Bootstrap classes for buttons.</p><p>Check some examples:</p><p><a href="https://codepen.io/Saidalmaghribi/embed/oEWgbw" rel="noopener"><strong>CodePen Embed — buttons in Bootstrap 4</strong></a><br><a href="https://codepen.io/Saidalmaghribi/embed/oEWgbw" rel="noopener"><em>Buttons Button primary Button default Button danger Button info Button warning Button dark Button success Buttons…</em>codepen.io</a></p><p>Here’s how the styling for the <code>.description</code> looks in the <code><strong>main.css</strong></code> file:</p><pre><code class="language-css">.description{
position: absolute;
top: 30%;
margin: auto;
padding: 2em;
}
.description h1{
color:#F97300 ;
}
.description p{
color:#666;
font-size: 20px;
width: 50%;
line-height: 1.5;
}
.description button{
border:1px  solid #F97300;
background:#F97300;
color:#fff;
// left side
&lt;div class="col-lg-4 col-md-4 col-sm-12"&gt;
&lt;img src="images/team-3.jpg" class="img-fluid"&gt;
&lt;span class="text-justify"&gt;S.Web Developer&lt;/span&gt;
&lt;/div&gt;
&lt;/div&gt;</code></pre><p>After adding the the HTML elements on the right-side, the structure of the code will look like this:</p><pre><code class="language-html">&lt;div class="row"&gt;
&lt;div class="col-lg-4 col-md-4 col-sm-12"&gt;
&lt;img src="images/team-3.jpg" class="img-fluid"&gt;
&lt;span class="text-justify"&gt;S.Web Developer&lt;/span&gt;
&lt;/div&gt;
&lt;div class="col-lg-8 col-md-8 col-sm-12 desc"&gt;
&lt;h3&gt;D.John&lt;/h3&gt;
&lt;p&gt;
ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
&lt;/p&gt;
&lt;/div&gt;
&lt;/div&gt;</code></pre><p>Here’s how I’ve made it look:</p><pre><code class="language-css">.about{
margin: 4em 0;
padding: 1em;
position: relative;
}
.about h1{
color:#F97300;
margin: 2em;
}
.about img{
height: 100%;
width: 100%;
border-radius: 50%
}
.about span{
display: block;
color: #888;
position: absolute;
left: 115px;
}
.about .desc{
padding: 2em;
border-left:4px solid #10828C;
}
.about .desc h3{
color: #10828C;
}
.about .desc p{
line-height:2;
color:#888;
&lt;div class="portfolio"&gt;
&lt;h1 class="text-center"&gt;Portfolio&lt;/h1&gt;
&lt;div class="container"&gt;
&lt;div class="row"&gt;
&lt;div class="col-lg-4 col-md-4 col-sm-12"&gt;
&lt;img src="images/portfolio/port13.png" class="img-fluid"&gt;
&lt;/div&gt;
&lt;div class="col-lg-4 col-md-4 col-sm-12"&gt;
&lt;img src="images/portfolio/port1.png" class="img-fluid"&gt;
&lt;/div&gt;
&lt;div class="col-lg-4 col-md-4 col-sm-12"&gt;
&lt;img src="images/portfolio/port6.png" class="img-fluid"&gt;
&lt;/div&gt;
&lt;div class="col-lg-4 col-md-4 col-sm-12"&gt;
&lt;img src="images/portfolio/port3.png" class="img-fluid"&gt;
&lt;/div&gt;
&lt;div class="col-lg-4 col-md-4 col-sm-12"&gt;
&lt;img src="images/portfolio/port11.png" class="img-fluid"&gt;
&lt;/div&gt;
&lt;div class="col-lg-4 col-md-4 col-sm-12"&gt;
&lt;img src="images/portfolio/electric.png" class="img-fluid"&gt;
&lt;/div&gt;
&lt;div class="col-lg-4 col-md-4 col-sm-12"&gt;
&lt;img src="images/portfolio/Classic.jpg" class="img-fluid"&gt;
&lt;/div&gt;
&lt;div class="col-lg-4 col-md-4 col-sm-12"&gt;
&lt;img src="images/portfolio/port1.png" class="img-fluid"&gt;
&lt;/div&gt;
&lt;div class="col-lg-4 col-md-4 col-sm-12"&gt;
&lt;img src="images/portfolio/port8.png" class="img-fluid"&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;</code></pre><p>Adding <code>.img-fluid</code> to each image to makes it responsive.</p><p>Each item in our gallery will take up 4 columns (remember, <code>col-md-4</code> for medium devices, <code>col-lg-4</code> for large devices). That’s equal to 33.33333%<strong> </strong>on large devices such desktops and large tablets, and 12 columns on a small device (like iPhone, mobile devices) will take up 100% of the container.</p><p>Let’s add some styling to our Gallery:</p><pre><code class="language-css">/*Portfolio*/
.portfolio{
margin: 4em 0;
position: relative;
}
.portfolio h1{
color:#F97300;
margin: 2em;
}
.portfolio img{
height: 15rem;
width: 100%;
margin: 1em;
&lt;div class="blog"&gt;
&lt;div class="container"&gt;
&lt;h1 class="text-center"&gt;Blog&lt;/h1&gt;
&lt;div class="row"&gt;
&lt;div class="col-md-4 col-lg-4 col-sm-12"&gt;
&lt;img src="images/posts/polit.jpg" class="img-fluid"&gt;
&lt;/div&gt;
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
&lt;/p&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;div class="col-md-4 col-lg-4 col-sm-12"&gt;
&lt;img src="images/posts/images.jpg" class="img-fluid"&gt;
&lt;/div&gt;
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
&lt;/p&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;div class="col-md-4 col-lg-4 col-sm-12"&gt;
&lt;img src="images/posts/imag2.jpg" class="img-fluid"&gt;
&lt;/div&gt;
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
&lt;/p&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
margin: 4em 0;
position: relative;
}
.blog h1{
color:#F97300;
margin: 2em;
}
box-shadow: 0 0 20px #ccc;
}
width: 100%;
height: 12em;
}
color:#F97300;
}
padding: 1em;
&lt;div class="team"&gt;
&lt;div class="container"&gt;
&lt;h1 class="text-center"&gt;Our Team&lt;/h1&gt;
&lt;div class="row"&gt;
&lt;div class="col-lg-3 col-md-3 col-sm-12 item"&gt;
&lt;img src="images/team-2.jpg" class="img-fluid" alt="team"&gt;
&lt;div class="des"&gt;
Sara
&lt;/div&gt;
&lt;span class="text-muted"&gt;Manager&lt;/span&gt;
&lt;/div&gt;
&lt;div class="col-lg-3 col-md-3 col-sm-12 item"&gt;
&lt;img src="images/team-3.jpg" class="img-fluid" alt="team"&gt;
&lt;div class="des"&gt;
Chris
&lt;/div&gt;
&lt;span class="text-muted"&gt;S.enginner&lt;/span&gt;
&lt;/div&gt;
&lt;div class="col-lg-3 col-md-3 col-sm-12 item"&gt;
&lt;img src="images/team-2.jpg" class="img-fluid" alt="team"&gt;
&lt;div class="des"&gt;
Layla
&lt;/div&gt;
&lt;span class="text-muted"&gt;Front End Developer&lt;/span&gt;
&lt;/div&gt;
&lt;div class="col-lg-3 col-md-3 col-sm-12 item"&gt;
&lt;img src="images/team-3.jpg" class="img-fluid" alt="team"&gt;
&lt;div class="des"&gt;
J.Jirard
&lt;/div&gt;
&lt;span class="text-muted"&gt;Team Manger&lt;/span&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;</code></pre><p>And let’s add some style:</p><pre><code class="language-css">.team{
margin: 4em 0;
position: relative;
}
.team h1{
color:#F97300;
margin: 2em;
}
.team .item{
position: relative;
}
.team .des{
background: #F97300;
color: #fff;
text-align: center;
border-bottom-left-radius: 93%;
transition:.3s ease-in-out;
height: 100%;
background:#f973007d;
position: absolute;
width: 89%;
padding: 5em;
top: 0;
border-bottom-left-radius: 0;
&lt;div class="contact-form"&gt;
&lt;div class="container"&gt;
&lt;form&gt;
&lt;div class="row"&gt;
&lt;div class="col-lg-4 col-md-4 col-sm-12"&gt;
&lt;h1&gt;Get in Touch&lt;/h1&gt;
&lt;/div&gt;
&lt;div class="col-lg-8 col-md-8 col-sm-12 right"&gt;
&lt;div class="form-group"&gt;
&lt;input type="text" class="form-control form-control-lg" placeholder="Your Name" name=""&gt;
&lt;/div&gt;
&lt;div class="form-group"&gt;
&lt;input type="email" class="form-control form-control-lg" placeholder="YourEmail@email.com" name="email"&gt;
&lt;/div&gt;
&lt;div class="form-group"&gt;
&lt;textarea class="form-control form-control-lg"&gt;
&lt;/textarea&gt;
&lt;/div&gt;
&lt;input type="submit" class="btn btn-secondary btn-block" value="Send" name=""&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/form&gt;
&lt;/div&gt;
&lt;/div&gt;</code></pre><p>Contact section’styles :</p><p><strong>main.css</strong></p><pre><code class="language-css">.contact-form{
margin: 6em 0;
position: relative;
}
.contact-form h1{
padding:2em 1px;
color: #F97300;
}
.contact-form .right{
max-width: 600px;
}
.contact-form .right .btn-secondary{
background:  #F97300;
color: #fff;
border:0;
}
.contact-form .right .form-control::placeholder{
color: #888;
font-size: 16px;
}</code></pre><h4 id="fonts">Fonts</h4><p>I think default fonts are ugly so we are going to use the Google Font API, and we’ll choose <strong>Raleway</strong> which is a nice font and appropriate to our template.</p><p>Add this link into your <code><strong>main.css</strong></code> file:</p><pre><code class="language-css">@import url('https://fonts.googleapis.com/css?family=Raleway');</code></pre><p>and set the global style to HTML and heading tags:</p><pre><code class="language-css">html,h1,h2,h3,h4,h5,h6,a{
font-family: "Raleway";
$("body,html").animate({
scrollTop:$("#" + $(this).data('value')).offset().top
},1000)
})</code></pre><p>and add a <code>data-value</code> attribute to each navbar link:</p><pre><code class="language-html">&lt;li class="nav-item"&gt;
&lt;a class="nav-link" data-value="about" href="#"&gt;About&lt;/a&gt;
&lt;/li&gt;
&lt;li class="nav-item"&gt;
&lt;a class="nav-link " data-value="portfolio" href="#"&gt;Portfolio&lt;/a&gt;
&lt;/li&gt;
&lt;li class="nav-item"&gt;
&lt;a class="nav-link " data-value="blog" href="#"&gt;Blog&lt;/a&gt;
&lt;/li&gt;
&lt;li class="nav-item"&gt;
&lt;a class="nav-link " data-value="team" href="#"&gt;
Team&lt;/a&gt;
&lt;/li&gt;
&lt;li class="nav-item"&gt;
&lt;a class="nav-link " data-value="contact" href="#"&gt;Contact&lt;/a&gt;
&lt;/li&gt;</code></pre><p>Set an <code>id</code> attribute to each section.</p><p><strong>Note</strong>: The <code>id</code> must be identical to the <code>data-value</code> attribute in the navbar link for the scroll to work:</p><pre><code class="language-html">&lt;div class="about" id="about"&gt;&lt;/div&gt;</code></pre><h3 id="wrap-up-and-conclusion">Wrap-up and Conclusion</h3><p>Bootstrap 4 is a great option for building your web application. It delivers high quality of UI elements and it’s easy to customize, integrate and use. It will also help you to include responsiveness in your website, therefore delivering a premium user experience to your users.</p><p>You will find the project’s files on <a href="https://github.com/hayanisaid/bootstrap4-website" rel="noopener">GitHub</a>.</p><blockquote>If you need some Bootstrap themes and templates you can check out <a href="https://bootstrapbay.sjv.io/DV1q2" rel="noopener">BootstrapBay</a>,they have some awesome products</blockquote><p>Check out my Bootstrap Class to learn Bootstrap 4:</p><p><a href="https://skl.sh/2LaD1ym" rel="noopener"><strong>Bootstrap 4 crash course: basic to advance | Said Hayani | Skillshare</strong></a><br><a href="https://skl.sh/2LaD1ym" rel="noopener"><em>In this class the you are going to learn bootstrap version 4, the CSS framework to build flexible templates and…</em>skl.sh</a></p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
