---
card: "/images/default.jpg"
tags: [React Native]
description: Whether you're an Apple fan or not, you'll likely agree that
author: "Milad E. Fahmy"
title: "How to Design an iMessage-like Chat Bubble in React Native"
created: "2021-08-15T19:26:51+02:00"
modified: "2021-08-15T19:26:51+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-react-native tag-app-development tag-ui-design tag-chat tag-javascript ">
<header class="post-full-header">
<h1 class="post-full-title">How to Design an iMessage-like Chat Bubble in React Native</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2021/03/feature_image_freecodecamp-3.jpg 300w,
/news/content/images/size/w600/2021/03/feature_image_freecodecamp-3.jpg 600w,
/news/content/images/size/w1000/2021/03/feature_image_freecodecamp-3.jpg 1000w,
/news/content/images/size/w2000/2021/03/feature_image_freecodecamp-3.jpg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2021/03/feature_image_freecodecamp-3.jpg" alt="How to Design an iMessage-like Chat Bubble in React Native">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Whether you're an Apple fan or not, you'll likely agree that Apple sure does have a groundbreaking UI. And iMessage is definitely an important part of that design. </p>
<p>The curved arrow is something that I have always really liked and have wanted to replicate for a long time.</p>
<p>After a lot of trial and error, I was finally able to find a workaround to build a similar version of iMessage's chat bubble. In this article, I'll take you through the steps required to build a chat bubble that looks like Apple's iMessage.</p>
<p>If you're building a chat application or intending to display information in the form of a message, I'd definitely recommend that you try out this style as it makes your app look cool and professional.</p>
<h3 id="prerequisites">Prerequisites</h3>
<p>This article assumes that you know the basics of:</p>
<ul>
<li>JSX </li>
<li>React Native </li>
<li>HTML &amp; CSS</li>
</ul>
<h2 id="what-is-a-chat-bubble">What is a Chat Bubble?</h2>
<p>A chat bubble is basically a container that holds text. Chat bubbles are mostly used in Instant Messaging apps to display chat logs effectively. </p>
<p>The conventional method is that sent messages are displayed on the right side of the screen and received messages are shown on the left, with different colors used to differentiate between sent and received message(s).</p>
<p>Most messaging apps have a basic chat bubble which is a regular container with rounded corners. The main differentiating factor between other apps and iMessage is the presence of a small curved-like arrow anchoring the text container, which looks like this:</p>
<h2 id="how-to-build-a-chat-bubble-that-looks-like-imessage">How to Build a Chat Bubble that Looks like iMessage</h2>
<p>If we look at the above image carefully, we can see that the iMessage chat bubble is a combination of a regular chat bubble with an added arrow in the corner.</p>
<p>The main challenge lies in tying the arrow to the text container.</p>
<p>Before directly hopping into the code, I'd want you to know how this arrow-like element is created and added.</p>
<p>First, check out <a href="https://codepen.io/samuelkraft/pen/Farhl">this</a> code, which shows how to implementation this arrow using HTML &amp; CSS. Below is its code snippet.</p><pre><code class="language-CSS">p {
max-width: 255px;
word-wrap: break-word;
margin-bottom: 12px;
line-height: 24px;
position: relative;
padding: 10px 20px;
border-radius: 25px;
&amp;:before, &amp;:after {
content: "";
position: absolute;
bottom: 0;
height: 25px;
}
}
.from-me {
color: white;
background: #0B93F6;
align-self: flex-end;
&amp;:before {
right: -7px;
width: 20px;
background-color: #0B93F6;
border-bottom-left-radius: 16px 14px;
}
&amp;:after {
right: -26px;
width: 26px;
background-color: white;
border-bottom-left-radius: 10px;
}
}
.from-them {
background: #E5E5EA;
color: black;
align-self: flex-start;
&amp;:before {
left: -7px;
width: 20px;
background-color: #E5E5EA;
border-bottom-right-radius: 16px;
}
&amp;:after {
left: -26px;
width: 26px;
background-color: white;
border-bottom-right-radius: 10px;
}
}</code></pre>
<p>If you just browse straight through the code it might seem quite awful. So let's break it down at an atomic level and later glue it all back together.</p>
<p>The <code>&lt;<strong>p&gt;</strong></code> tag includes style constraints such as margin-bottom, position, padding and so on. Note that the max-width used here is 255px, which is a static value. But we'll be using a dynamic approach, as the chat bubbles need to be responsive across various screen sizes.</p>
<p>The <code>&amp;:before</code> and <code>&amp;:after</code> within the <strong><code>&lt;p&gt;</code></strong> style defines two elements with no content in it. They're positioned absolute with respect to the <strong><code>&lt;p&gt;</code></strong> tag (text container), and are placed at the bottom. They have a height of 25px (the height of the arrow).</p>
<p>Going further, the <code>.from-me</code> (sent messages) style defines that the text be white, background blue (#0b936f), and that it's placed at the right side of the screen (align-self: flex-end). </p>
<p>Now comes the important part – extending the <strong><code>&amp;:before</code></strong> and <strong><code>&amp;:after</code>, </strong>which is the actual implementation of the arrow.</p>
<p>The <strong><code>&amp;:before</code></strong> has a width of 20px and is placed at 7 pixels negative to the right. It has a border-bottom-left radius of 16px, which is what gives the curved look to the arrow.</p>
<p>Similarly, the <strong><code>&amp;:after</code></strong> has a width of 26px and is placed at 26 pixels negative to the right. Since -7px &gt; -26px, <code>&amp;:after</code> is placed right side of the <code>&amp;:before</code> element and partially overlaps it.</p>
<p>If you still feel confused, don't worry – just refer to the images below to gain a clearer insight into what I've been talking about.</p>
<figcaption>&amp;:before with black background and bottom-left-radius</figcaption>
</figure>
<figcaption>&amp;:after overlapping &amp;:before with green background</figcaption>
</figure>
<figcaption>&amp;:after background changed to white to match the background of the chat screen.</figcaption>
</figure>
<figcaption>&amp;:before background updated to #0b93f6 to match chat bubble color.</figcaption>
</figure>
<p>So basically the arrowhead is created by overlapping two elements at the bottom corner of the chat bubble and adjusting the background colors to match those of the chat bubble and chat screen.</p>
<p>Further ahead, the translation of CSS and HTML into JSX is fairly simple, as most of the things are quite straightforward.</p>
<h2 id="how-to-build-the-react-native-version">How to Build the React Native Version</h2>
<p>Before starting, I want to note that this works best with FlatList, and I recommend that you use it, and not other components or functions such as map (which lacked consistency across different screens and devices). </p>
<p>The three steps we're going to follow here are:</p>
<ol>
<li>Create chat bubble with arrow head</li>
<li>Add styles to chat bubble and arrow head</li>
<li>Embed chat bubble in FlatList</li>
</ol>
<p>So let's get started.</p>
<p>First, we'll create the chat bubble with the arrow head, like this:</p><pre><code>&lt;View style={{
backgroundColor: "#0078fe",
padding:10,
marginLeft: '45%',
borderRadius: 5,
//marginBottom: 15,
marginTop: 5,
marginRight: "5%",
maxWidth: '50%',
alignSelf: 'flex-end',
//maxWidth: 500,
borderRadius: 20,
}} key={index}&gt;
&lt;Text style={{ fontSize: 16, color: "#fff", }} key={index}&gt;{item.text}&lt;/Text&gt;
&lt;View style={styles.rightArrow}&gt;&lt;/View&gt;
&lt;View style={styles.rightArrowOverlap}&gt;&lt;/View&gt;
&lt;/View&gt;
//Recevied Message
&lt;View style={{
backgroundColor: "#dedede",
padding:10,
borderRadius: 5,
marginTop: 5,
marginLeft: "5%",
maxWidth: '50%',
alignSelf: 'flex-start',
//maxWidth: 500,
//padding: 14,
//alignItems:"center",
borderRadius: 20,
}} key={index}&gt;
&lt;Text style={{ fontSize: 16, color: "#000",justifyContent:"center" }} key={index}&gt; {item.text}&lt;/Text&gt;
&lt;View style={styles.leftArrow}&gt;
&lt;/View&gt;
&lt;View style={styles.leftArrowOverlap}&gt;&lt;/View&gt;
&lt;/View&gt;
</code></pre>
<p>The Outermost <strong><code>&lt;View&gt;</code></strong> tag acts as the 'p' tag in comparison with the HTML version. The remaining two <strong><code>&lt;View&gt;</code></strong> tags act as <code>&amp;:before</code> and <code>&amp;:after</code>.</p>
<p>Next, we'll add styles to the chat bubble and arrow head like this:</p><pre><code>const styles = StyleSheet.create({
rightArrow: {
position: "absolute",
backgroundColor: "#0078fe",
//backgroundColor:"red",
width: 20,
height: 25,
bottom: 0,
borderBottomLeftRadius: 25,
right: -10
},
rightArrowOverlap: {
position: "absolute",
backgroundColor: "#eeeeee",
//backgroundColor:"green",
width: 20,
height: 35,
bottom: -6,
borderBottomLeftRadius: 18,
right: -20
},
/*Arrow head for recevied messages*/
leftArrow: {
position: "absolute",
backgroundColor: "#dedede",
//backgroundColor:"red",
width: 20,
height: 25,
bottom: 0,
borderBottomRightRadius: 25,
left: -10
},
leftArrowOverlap: {
position: "absolute",
backgroundColor: "#eeeeee",
//backgroundColor:"green",
width: 20,
height: 35,
bottom: -6,
borderBottomRightRadius: 18,
left: -20
},
})</code></pre>
<p>Then we'll embed it into FlatList:</p><pre><code>&lt;FlatList
//inverted
style={{backgroundColor:"#eeeeee"}}
data={this.state.chat_log}
ref={ref =&gt; (this.FlatListRef = ref)} // assign the flatlist's ref to your component's FlatListRef...
renderItem = {({item,index})=&gt;{
rowId={index}
if (SENT_MESSAGE) { //change as per your code logic
return (
&lt;View style={{
backgroundColor: "#0078fe",
padding:10,
marginLeft: '45%',
borderRadius: 5,
marginTop: 5,
marginRight: "5%",
maxWidth: '50%',
alignSelf: 'flex-end',
borderRadius: 20,
}} key={index}&gt;
&lt;Text style={{ fontSize: 16, color: "#fff", }} key={index}&gt; {item.text}&lt;/Text&gt;
&lt;View style={styles.rightArrow}&gt;
&lt;/View&gt;
&lt;View style={styles.rightArrowOverlap}&gt;&lt;/View&gt;
&lt;/View&gt;
)
} else {
return (
&lt;View style={{
backgroundColor: "#dedede",
padding:10,
borderRadius: 5,
marginTop: 5,
marginLeft: "5%",
maxWidth: '50%',
alignSelf: 'flex-start',
//maxWidth: 500,
//padding: 14,
//alignItems:"center",
borderRadius: 20,
}} key={index}&gt;
&lt;Text style={{ fontSize: 16, color: "#000",justifyContent:"center" }} key={index}&gt; {item.text}&lt;/Text&gt;
&lt;View style={styles.leftArrow}&gt;
&lt;/View&gt;
&lt;View style={styles.leftArrowOverlap}&gt;&lt;/View&gt;
&lt;/View&gt;
)
}
}
keyExtractor={(item,index)=&gt;index.toString()}
/&gt;
</code></pre>
<p>Values such as <strong>borderRadius, padding, margin, </strong>and <strong>backgroundColor</strong> are arbitrary values and can be changed if you wish. So feel free to play around and make those changes to best fit your requirements.</p>
<p>The result of the above code looks like this:</p>
<figcaption>Chat bubble appearance, as tested on several devices(Android).</figcaption>
</figure>
<p>Looks cool, doesn't it ? ;)</p>
<h2 id="conclusion">Conclusion</h2>
<p>Congratulations! You've built a chat bubble that looks just like the one iMessage uses.</p>
<p>I hope you found this article helpful. If so, do share it with your friends and colleagues.</p>
<p>Still have questions? Don't hesitate to get in touch with me, and I'll respond to you as soon as possible.</p>
<p>You could also connect with me on <a href="https://in.linkedin.com/in/prajwal-kulkarni">LinkedIn</a> / <a href="https://instagram.com/prajwalkulkarni_">Instagram</a>.</p>
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
