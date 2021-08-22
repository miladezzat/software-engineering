---
card: "https://cdn-media-1.freecodecamp.org/images/1*ILGYxH64agmcHBWHuF1FSA.jpeg"
tags: [CSS]
description: "by Ashwini Sheshagiri"
author: "Milad E. Fahmy"
title: "CSS Button Tutorial – How to Styling HTML Buttons with CSS"
created: "2021-08-16T10:17:15+02:00"
modified: "2021-08-16T10:17:15+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-css tag-web-development tag-tech tag-web-design tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">CSS Button Tutorial – How to Styling HTML Buttons with CSS</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*ILGYxH64agmcHBWHuF1FSA.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*ILGYxH64agmcHBWHuF1FSA.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*ILGYxH64agmcHBWHuF1FSA.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*ILGYxH64agmcHBWHuF1FSA.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*ILGYxH64agmcHBWHuF1FSA.jpeg" alt="CSS Button Tutorial – How to Styling HTML Buttons with CSS">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
background: #eb94d0;</code></pre><h4 id="then-create-the-gradients-">Then create the gradients:</h4><pre><code>background-image: -webkit-linear-gradient(top, #eb94d0, #2079b0);  background-image: -moz-linear-gradient(top, #eb94d0, #2079b0);  background-image: -ms-linear-gradient(top, #eb94d0, #2079b0);  background-image: -o-linear-gradient(top, #eb94d0, #2079b0);  background-image: linear-gradient(to bottom, #eb94d0, #2079b0);</code></pre><h4 id="then-give-the-curved-edge-for-the-button">Then give the curved edge for the button </h4><pre><code>-webkit-border-radius: 28;  -moz-border-radius: 28;  border-radius: 28px;
text-shadow: 3px 2px 1px #9daef5;  -webkit-box-shadow: 6px 5px 24px #666666;  -moz-box-shadow: 6px 5px 24px #666666;  box-shadow: 6px 5px 24px #666666;
font-family: Arial;  color: #fafafa;  font-size: 27px;  padding: 19px;  text-decoration: none;}</code></pre><h4 id="how-to-trigger-a-button-on-hover-event">How to Trigger a button on-hover event</h4><pre><code>.btn:hover {
background: #2079b0;
background-image: -webkit-linear-gradient(top, #2079b0, #eb94d0);
background-image: -moz-linear-gradient(top, #2079b0, #eb94d0);
background-image: -ms-linear-gradient(top, #2079b0, #eb94d0);
background-image: -o-linear-gradient(top, #2079b0, #eb94d0);
background-image: linear-gradient(to bottom, #2079b0, #eb94d0);
text-decoration: none;
color: white;
padding: 16px 32px;
text-align: center;
display: inline-block;
font-size: 16px;
margin: 4px 2px;
-webkit-transition-duration: 0.4s;
/* Safari */
transition-duration: 0.4s;
cursor: pointer;
text-decoration: none;
text-transform: uppercase;
}
.btn1 {
background-color: white;
color: black;
border: 2px solid #008CBA;
content: '\00bb';  /* CSS Entities. To use HTML Entities, use →*/
position: absolute;  opacity: 0;  top: 0;  right: -20px;  transition: 0.5s;}
.button:hover span {  padding-right: 25px;}
* {  font-family: 'Roboto', sans-serif;}
.container {  position: absolute;
top:50%;
left:50%;
margin-left: -65px;
margin-top: -20px;
width: 130px;
height: 40px;
text-align: center;
}
.btn {
color: #0099CC;
/* Text color */
background: transparent; /* Remove background color */
border: 2px solid #0099CC; /* Border thickness, line style, and color */
border-radius: 70px; /* Adds curve to border corners */
text-decoration: none;
text-transform: uppercase; /* Make letters uppercase */
border: none;
color: white;
padding: 16px 32px;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 16px;
margin: 4px 2px;
-webkit-transition-duration: 0.4s; /* Safari */
transition-duration: 0.4s;
cursor: pointer;}.btn1 {
background-color: white;
color: black;
border: 2px solid #008CBA;} .btn1:hover {
background-color: #008CBA;
color: white;
}
&amp;:active {    letter-spacing: 2px ;
}  &amp;:after {
content:"";  }}.onclic {
width: 10px !important;
height: 70px !important;
border-radius: 50% !important;
border-color:$gray;
border-width:4px;
font-size:0;
border-left-color: #008CBA;
animation: rotating 2s 0.25s linear infinite;
&amp;:hover {    color: dodgerblue;    background: white;  }}.validate {  content:"";
font-size:16px;
color: black;
background: dodgerblue;
border-radius: 50px;
&amp;:after {    font-family:'FontAwesome';    content:" done \f00c";  }
}
b {  outline:none;
height: 40px;
text-align: center;
width: 130px;
border-radius:100px;
background: #fff;
border: 2px solid #008CBA;
color: #008CBA;
letter-spacing:1px;
text-shadow:0;
font:{    size:12px;    weight:bold;  }
cursor: pointer;
transition: all 0.25s ease;
@keyframes rotating {  from {    transform: rotate(0deg);  }  to {    transform: rotate(360deg);  }
}.text:hover{  cursor: pointer;  color: #1565C0;}.main {  padding: 0px 0px 0px 0px;  margin: 0;  background-image: url("https://someimg");  text-align: center;  background-size: 100% !important;  background-repeat: no-repeat;  width: 900px;  height: 700px;  }
.icon-button {  background-color: white;  border-radius: 3.6rem;  cursor: pointer;  display: inline-block;  font-size: 2rem;  height: 3.6rem;  line-height: 3.6rem;  margin: 0 5px;  position: relative;  text-align: center;  -webkit-user-select: none;  -moz-user-select: none;  -ms-user-select: none;  user-select: none;  width: 3.6rem;}
.icon-button span {  border-radius: 0;  display: block;  height: 0;  left: 50%;  margin: 0;  position: absolute;  top: 50%;  -webkit-transition: all 0.3s;  -moz-transition: all 0.3s;  -o-transition: all 0.3s;  transition: all 0.3s;  width: 0;}.icon-button:hover span {  width: 3.6rem;  height: 3.6rem;  border-radius: 3.6rem;  margin: -1.8rem;}.twitter span {  background-color: #4099ff;}
/* Icons */.icon-button i {  background: none;  color: white;  height: 3.6rem;  left: 0;  line-height: 3.6rem;  position: absolute;  top: 0;  -webkit-transition: all 0.3s;  -moz-transition: all 0.3s;  -o-transition: all 0.3s;  transition: all 0.3s;  width: 3.6rem;  z-index: 10;}.icon-button .icon-twitter {  color: #4099ff;}
.icon-button:hover .icon-twitter {  color: white;}</code></pre><h3 id="conclusion">Conclusion</h3><p>In this tutorial, you’ve learned how to customize buttons using CSS and a bit of Javascript if you need the “after click” function. You can also use <a href="http://css3buttongenerator.com" rel="noopener">CSS3ButtonGenerator</a> to generate simple buttons. Feel free to ping me if you have any questions.</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
