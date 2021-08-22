---
card: "/images/default.jpg"
tags: [JavaScript]
description: "A couple years back I wrote a short article on building a res"
author: "Milad E. Fahmy"
title: "How to Build a Responsive and Dynamic Progress Bar with HTML, CSS, and JavaScript"
created: "2021-08-16T10:04:37+02:00"
modified: "2021-08-16T10:04:37+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-web-development tag-vue tag-html tag-css ">
<header class="post-full-header">
<h1 class="post-full-title">How to Build a Responsive and Dynamic Progress Bar with HTML, CSS, and JavaScript</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/09/Screen-Shot-2020-09-12-at-2.35.47-PM.png 300w,
/news/content/images/size/w600/2020/09/Screen-Shot-2020-09-12-at-2.35.47-PM.png 600w,
/news/content/images/size/w1000/2020/09/Screen-Shot-2020-09-12-at-2.35.47-PM.png 1000w,
/news/content/images/size/w2000/2020/09/Screen-Shot-2020-09-12-at-2.35.47-PM.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/09/Screen-Shot-2020-09-12-at-2.35.47-PM.png" alt="How to Build a Responsive and Dynamic Progress Bar with HTML, CSS, and JavaScript">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>A couple years back I wrote a short <a href="https://medium.com/@beyondborders/building-a-responsive-progress-bar-ea5a0ecabe91">article</a> on building a responsive progress bar. My techniques have developed since then, and so an update is in order. </p><p>The biggest change is that pseudo-elements (before, after) are no longer required. Now the CSS is more straightforward, the DOM is easier to read, and it’s much more dynamic. </p><p>So let’s try this again.</p><p>Our goal is to build a simple and effective responsive progress bar that does the following:</p><ul><li>Has four steps to completion.</li><li>Each step has a <code>default</code>, <code>active</code>, and <code>complete</code> state.</li><li>Can progress from step to step until completion.</li></ul><p><a href="https://codepen.io/lookininward/pen/LYpxPPo" rel="noopener">Check out the CodePen here for a live example.</a></p><h2 id="the-html">The HTML</h2><p>To reduce redundancy and increase reusability, we track all state in a Vue component. In the DOM, this dynamically generates any number of required steps.</p><p><strong>Note</strong>: <em>Native JavaScript (ECMAScript) or any other framework can accomplish this. The use of Vue is for demonstrative purposes.</em></p><p>The progress bar uses basic markup. There is:</p><ul><li>a container with computed classes based on the current step: <code>progressClasses</code></li><li>a static background track: <code>progress__bg</code></li><li>a loop that iterates through each step and applies <code>stepClasses</code> based on the current step.</li></ul><p>Each step has:</p><ul><li>a <code>progress__indicator</code> that contains a check icon that’s visible if the step is complete.</li><li>a <code>progress__label</code> that contains the label text for that step.</li></ul><pre><code class="language-html vue">&lt;div
id="app"
:class="progressClasses"
&gt;
&lt;div class="progress__bg"&gt;&lt;/div&gt;
&lt;template v-for="(step, index) in steps"&gt;
&lt;div :class="stepClasses(index)"&gt;
&lt;div class="progress__indicator"&gt;
&lt;i class="fa fa-check"&gt;&lt;/i&gt;
&lt;/div&gt;
&lt;div class="progress__label"&gt;
{{step.label}}
&lt;/div&gt;
&lt;/div&gt;
&lt;/template&gt;
&lt;div class="progress__actions"&gt;
&lt;div
class="btn"
v-on:click="nextStep(false)"
&gt;
Back
&lt;/div&gt;
&lt;div
class="btn"
v-on:click="nextStep"
&gt;
Next
&lt;/div&gt;
&lt;div&gt;
Step:
{{currentStep ? currentStep.label : "Start"}}
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
</code></pre><p>For simplicity, the <code>progress__actions</code> which control the direction of travel are nested within the progress bar itself.</p><h2 id="the-css-scss-">The CSS (SCSS)</h2><p>This is where we do the heavy lifting. The classes defined here will be applied dynamically by the JS based on the current step.</p><p>First, let’s select some colours to work with:</p><pre><code class="language-scss">$gray:  #E5E5E5;
$gray2: #808080;
$blue:  #2183DD;
$green: #009900;
$white: #FFFFFF;</code></pre><p>Now define the <code>.progress</code> class: the container that holds the progress bar's contents together.</p><pre><code class="language-scss">.progress {
position: absolute;
top: 15vh;
width: 0%;
height: 10px;
background-color: $blue;
transition: width .2s;
}</code></pre><p>Our progress bar needs a <code>.progress__bg</code> that the progress steps will run over like a track. This will be grey, covered over by the coloured bar as it advances to the next step.</p><pre><code class="language-scss">.progress__bg {
position: absolute;
width: 100vw;
height: 10px;
background-color: $gray;
z-index: -1;
}</code></pre><p>Each <code>.progress__step</code> contains the round step that will highlight and fill as the progress bar advances.</p><pre><code class="language-scss">.progress__step {
position: absolute;
top: -8px;
left: 0;
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
@for $i from 1 through 5 {
&amp;.progress__step--#{$i} {
left: calc(#{$i * 20}vw - 9px);
}
}
}</code></pre><p>It also contains the round <code>.progress__indicator</code> and label text <code>.progress__label</code>. Their default styles are defined outside of the <code>.progress__step</code>.</p><pre><code class="language-scss">.progress__indicator {
width: 25px;
height: 25px;
border: 2px solid $gray2;
border-radius: 50%;
background-color: $white;
margin-bottom: 10px;
.fa {
display: none;
font-size: 16px;
color: $white;
}
}
.progress__label {
position: absolute;
top: 40px;
}</code></pre><p>Let’s now continue to nest inside <code>.progress__step</code> again and define the step in its <strong>active</strong> state.</p><pre><code class="language-scss">&amp;.progress__step--active {
color: $blue;
font-weight: 600;
}</code></pre><p>Next, define the step in its <strong>complete</strong> state. <strong>Note</strong>: the default styles for <code>.progress__indicator</code> and <code>.progress__label</code> are overwritten when in the complete state.</p><pre><code class="language-scss">&amp;.progress__step--complete {
.progress__indicator {
background-color: $green;
border-color: $blue;
color: $white;
display: flex;
align-items: center;
justify-content: center;
}
.progress__indicator .fa {
display: block;
}
.progress__label {
font-weight: 600;
color: $green;
}
}</code></pre><h2 id="the-javascript">The JavaScript</h2><p>As mentioned earlier, this will differ based on how you implement the step logic, the larger context it’s implemented in, what frameworks and patterns you use, and so on. </p><p>This example uses a Vue component to demonstrate:</p><ul><li>calculation of classes for the progress bar based on the current state.</li><li>calculation of classes for each step based on the current state.</li></ul><pre><code class="language-javascript vue">var app = new Vue({
el: '#app',
data: {
currentStep: null,
steps: [
{"label": "one"},
{"label": "two"},
{"label": "three"},
{"label": "complete"}
]
},
methods: {
nextStep(next=true) {
const steps = this.steps
const currentStep = this.currentStep
const currentIndex = steps.indexOf(currentStep)
// handle back
if (!next) {
if (currentStep &amp;&amp; currentStep.label === 'complete') {
return this.currentStep = steps[steps.length - 1]
}
if (steps[currentIndex - 1]) {
return this.currentStep = steps[currentIndex - 1]
}
return this.currentStep = { "label": "start" }
}
// handle next
if (this.currentStep &amp;&amp; this.currentStep.label === 'complete') {
return this.currentStep = { "label": "start" }
}
if (steps[currentIndex + 1]) {
return this.currentStep = steps[currentIndex + 1]
}
this.currentStep = { "label": "complete" }
},
stepClasses(index) {
let result = `progress__step progress__step--${index + 1} `
if (this.currentStep &amp;&amp; this.currentStep.label === 'complete' ||
index &lt; this.steps.indexOf(this.currentStep)) {
return result += 'progress__step--complete'
}
if (index === this.steps.indexOf(this.currentStep)) {
return result += 'progress__step--active'
}
return result
}
},
computed: {
progressClasses() {
let result = 'progress '
if (this.currentStep &amp;&amp; this.currentStep.label === 'complete') {
return result += 'progress--complete'
}
return result += `progress--${this.steps.indexOf(this.currentStep) + 1}`
}
}
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
