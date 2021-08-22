---
card: "https://cdn-media-1.freecodecamp.org/images/0*WP3O7p7DkELIQIfs.png"
tags: [Web Development]
description: "These days I’ve been working on a new page for my website. I "
author: "Milad E. Fahmy"
title: "How to create a Timeline Component with React"
created: "2021-08-16T11:29:41+02:00"
modified: "2021-08-16T11:29:41+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-web-development tag-programming tag-javascript tag-react tag-technology ">
<header class="post-full-header">
<h1 class="post-full-title">How to create a Timeline Component with React</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/0*WP3O7p7DkELIQIfs.png 300w,
https://cdn-media-1.freecodecamp.org/images/0*WP3O7p7DkELIQIfs.png 600w,
https://cdn-media-1.freecodecamp.org/images/0*WP3O7p7DkELIQIfs.png 1000w,
https://cdn-media-1.freecodecamp.org/images/0*WP3O7p7DkELIQIfs.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/0*WP3O7p7DkELIQIfs.png" alt="How to create a Timeline Component with React">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>These days I’ve been working on a new page for my website. I wanted to have a <a href="https://www.florin-pop.com/timeline" rel="noopener">Timeline</a> to showcase some of my professional accomplishments over the years.</p><p>I did it for a couple of reasons:</p><ol><li>My future self will look back one day and say: “Wow… I remember the day when I did that! How happy I was to achieve that goal!” Our success is a journey, not a destination and I want to write down every goal that I achieve along the way</li><li>It might attract more clients (we’ll see how this goes ?)</li><li>In my opinion it is a different kind of portfolio. A unique portfolio, maybe? ?</li></ol><p>Nevertheless… Let’s build something now!</p><p>In the picture above you can see what we’re going to build today using React! Before we start let’s break down the steps we need to take:</p><ol><li>Create the <code>data</code> that we'll need</li><li>Create the <code>TimelineItem</code> component - each individual timeline entry</li><li>Create a <code>Timeline</code> container - it will take the <code>data</code> and pass it down to the <code>TimelineItem</code>s</li><li>Style everything</li></ol><h3 id="create-the-data">Create the data</h3><p>Before we move to actually create the React components we need to know exactly how the data is going to look so we can plan out the DOM structure.</p><p>For this Timeline app we’re going to need an <em>array</em> of objects. We will call this array: <code>timelineData</code>.</p><p>Let’s see how it might look:</p><pre><code class="language-js">[
{
text: 'Wrote my first blog post ever on Medium',
date: 'March 03 2017',
category: {
tag: 'medium',
color: '#018f69'
},
link: {
url:
'https://medium.com/@popflorin1705/javascript-coding-challenge-1-6d9c712963d2',
text: 'Read more'
}
},
{
// Another object with data
}
];</code></pre><p>The properties are pretty straightforward, right? I used similar data to what I have on my timeline page, so we can say that this is production ready! ?</p><p>Next, we’ll build the <code>TimelineItem</code> component. This will use the data from the object above:</p><h3 id="the-timelineitem-component">The TimelineItem component</h3><pre><code class="language-js">const TimelineItem = ({ data }) =&gt; (
&lt;div className="timeline-item"&gt;
&lt;div className="timeline-item-content"&gt;
&lt;span className="tag" style={{ background: data.category.color }}&gt;
{data.category.tag}
&lt;/span&gt;
&lt;time&gt;{data.date}&lt;/time&gt;
&lt;p&gt;{data.text}&lt;/p&gt;
{data.link &amp;&amp; (
&lt;a
href={data.link.url}
target="_blank"
rel="noopener noreferrer"
&gt;
{data.link.text}
&lt;/a&gt;
)}
&lt;span className="circle" /&gt;
&lt;/div&gt;
&lt;/div&gt;
);</code></pre><p>We have the following tags:</p><ol><li><code>.timeline-item</code> div - used as a wrapper. This div will have half the width of its parent's width (<code>50%</code>) and every other <code>.timeline-item</code> div will be placed to the <strong>right</strong> side using the <code>:nth-child(odd)</code> selector</li><li><code>.timeline-item-content</code> div - another wrapper (more on why we need this in the styling section)</li><li><code>.tag</code> span - this tag will have a custom background color depending on the category</li><li>the <code>time</code>/<code>date</code> and the <code>text</code></li><li><code>link</code> - we will need to check this to see if a <code>link</code> is provided because we might not always want to have one</li><li><code>.circle</code> span - this tag will be used to place a circle on the middle line/bar</li></ol><p><strong>Note</strong>: Everything will make much more sense when we get to the <strong>CSS</strong>/styling part, but before that let’s create the <code>Timeline</code> component:</p><h3 id="the-timeline-container">The Timeline container</h3><p>This component will basically <code>map</code> over the array and for each object it will create a <code>TimelineItem</code> component. We also add a small check to make sure that there is at least one element in the array:</p><pre><code class="language-js">import timelineData from '_path_to_file_';
const Timeline = () =&gt;
timelineData.length &gt; 0 &amp;&amp; (
&lt;div className="timeline-container"&gt;
{timelineData.map((data, idx) =&gt; (
&lt;TimelineItem data={data} key={idx} /&gt;
))}
&lt;/div&gt;
);</code></pre><p>As mentioned above, the <code>timelineData</code> is the array of objects containing all the required information. In my case I stored this array in a file and I imported it here, but you can take this from your own database or from an API endpoint, it's up to you.</p><h3 id="the-css">The CSS</h3><p><strong>Note:</strong> most of the wrappers will be <code>flexbox</code> containers because we can play around easier with their positioning.</p><p>Let's start with the <code>.timeline-container</code> CSS:</p><pre><code class="language-css">.timeline-container {
display: flex;
flex-direction: column;
position: relative;
margin: 40px 0;
}
.timeline-container::after {
background-color: #e17b77;
content: '';
position: absolute;
left: calc(50% - 2px);
width: 4px;
height: 100%;
display: flex;
justify-content: flex-end;
padding-right: 30px;
position: relative;
margin: 10px 0;
width: 50%;
}
.timeline-item:nth-child(odd) {
align-self: flex-end;
justify-content: flex-start;
padding-left: 30px;
padding-right: 0;
}</code></pre><p>The <strong>key</strong> to this is that we use the <code>:nth-child(odd)</code> selector and we set the <code>align-self</code> property to <code>flex-end</code> which means:“Go to the right as much as you can”!</p><p>Because these wrappers are <code>50%</code> in width, you can see that two of them take up the whole width. From now on, every time we want to style differently something in the <strong>right</strong> side, we'll have to use this approach.</p><p>Next, the <code>.timeline-item-content</code> wrapper:</p><pre><code class="language-css">.timeline-item-content {
box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
border-radius: 5px;
background-color: #fff;
display: flex;
flex-direction: column;
align-items: flex-end;
padding: 15px;
position: relative;
width: 400px;
max-width: 70%;
text-align: right;
}
.timeline-item-content::after {
content: ' ';
background-color: #fff;
box-shadow: 1px -1px 1px rgba(0, 0, 0, 0.2);
position: absolute;
right: -7.5px;
top: calc(50% - 7.5px);
transform: rotate(45deg);
width: 15px;
height: 15px;
}
.timeline-item:nth-child(odd) .timeline-item-content {
text-align: left;
align-items: flex-start;
}
.timeline-item:nth-child(odd) .timeline-item-content::after {
right: auto;
left: -7.5px;
box-shadow: -1px 1px 1px rgba(0, 0, 0, 0.2);
}</code></pre><p>We have a few things going on:</p><ol><li>This wrapper has a fixed <code>width</code> and also a <code>max-width</code>. This is because we want it to have some boundaries, meaning that if there are only a few words, we want the box to be at least <code>400px</code> wide, but if there is a lot of text, it shouldn't take up the full space (the <code>50%</code>from the <code>.timeline-item</code> wrapper) but the text should move on to the next line -&gt; this is the reason we used this second wrappe<code>r: .timeline-item-cont</code>ent</li><li>The <code>text-align</code> and <code>align-items</code> properties are used to push the inner elements to the left or to the right, depending on the parent</li><li>The small <strong>arrow</strong> that points to the middle line is given by the styles applied on the <code>::after</code> selector. Basically it is a box with a <code>box-shadow</code> applied on it that is rotated <code>45deg</code></li><li>As mentioned above, we style the <strong>right</strong> side by selecting the parent with the <code>:nth-child(odd)</code> selector</li></ol><p>Next up, all the inner elements:</p><pre><code class="language-css">.timeline-item-content .tag {
color: #fff;
font-size: 12px;
font-weight: bold;
top: 5px;
left: 5px;
letter-spacing: 1px;
padding: 5px;
position: absolute;
text-transform: uppercase;
}
.timeline-item:nth-child(odd) .timeline-item-content .tag {
left: auto;
right: 5px;
}
.timeline-item-content time {
color: #777;
font-size: 12px;
font-weight: bold;
}
.timeline-item-content p {
font-size: 16px;
line-height: 24px;
margin: 15px 0;
max-width: 250px;
}
.timeline-item-content a {
font-size: 14px;
font-weight: bold;
}
.timeline-item-content a::after {
content: ' ►';
font-size: 12px;
}
.timeline-item-content .circle {
background-color: #fff;
border: 3px solid #e17b77;
border-radius: 50%;
position: absolute;
top: calc(50% - 10px);
right: -40px;
width: 20px;
height: 20px;
z-index: 100;
}
.timeline-item:nth-child(odd) .timeline-item-content .circle {
right: auto;
left: -40px;
}</code></pre><p>Few things to note here:</p><ol><li>As you might have guessed, the <code>.tag</code> is positioned <code>absolute</code> because we want to keep it in the top left (or right) corner no matter what size is the box</li><li>We want to add a small caret <em>after</em> the <code>a</code> tag to highlight that it is a link</li><li>We create a <code>.circle</code> and position it on top of the middle line/bar directly in <em>front</em> of the arrow</li></ol><p>We’re almost done! ? The only thing that’s left to do is to add the CSS to make everything responsive across all screen sizes:</p><pre><code class="language-css">@media only screen and (max-width: 1023px) {
.timeline-item-content {
max-width: 100%;
}
}
@media only screen and (max-width: 767px) {
.timeline-item-content,
.timeline-item:nth-child(odd) .timeline-item-content {
padding: 15px 10px;
text-align: center;
align-items: center;
}
.timeline-item-content .tag {
width: calc(100% - 10px);
text-align: center;
}
.timeline-item-content time {
margin-top: 20px;
}
.timeline-item-content a {
text-decoration: underline;
}
.timeline-item-content a::after {
display: none;
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
