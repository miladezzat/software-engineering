---
card: "https://cdn-media-1.freecodecamp.org/images/0*Y-yUIvkbgkWU7Tlm"
tags: [React Native]
description: "In this post, we are going to create a backgroundVideo in Rea"
author: "Milad E. Fahmy"
title: "How to use video as a background in React Native"
created: "2021-08-16T11:30:09+02:00"
modified: "2021-08-16T11:30:09+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-react-native tag-ios tag-mobile-app-development tag-programming tag-javascript tag-reactjs tag-user-interface tag-user-experience tag-technology tag-coding tag-100days100projects ">
<header class="post-full-header">
<h1 class="post-full-title">How to use video as a background in React Native</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/0*Y-yUIvkbgkWU7Tlm 300w,
https://cdn-media-1.freecodecamp.org/images/0*Y-yUIvkbgkWU7Tlm 600w,
https://cdn-media-1.freecodecamp.org/images/0*Y-yUIvkbgkWU7Tlm 1000w,
https://cdn-media-1.freecodecamp.org/images/0*Y-yUIvkbgkWU7Tlm 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/0*Y-yUIvkbgkWU7Tlm" alt="How to use video as a background in React Native">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
&lt;Video
source={require("./../assets/video1.mp4")}
style={styles.backgroundVideo}
muted={true}
repeat={true}
resizeMode={"cover"}
rate={1.0}
ignoreSilentSwitch={"obey"}
/&gt;</code></pre><p>Let’s break it down:</p><ul><li><strong>source</strong>: the path to the source video. You can use the URL instead:</li></ul><pre><code>source={{uri:"https://youronlineVideo.mp4"}}</code></pre><ul><li><strong>style: </strong>the costume style we want to give to the video, and the key to making the background video</li><li>resizeMode: in our case it is <code>cover</code>; you can try also <code>contain or stretch</code> but this won’t give us what we want</li></ul><p>And other props are optional.</p><p>Let’s move to the important part: placing the video in the background position. Let’s define the styles.</p><pre><code class="language-hs ">// We use StyleSheet from react-native so don't forget to import it
//import {StyleSheet} from "react-native";
const { height } = Dimensions.get("window");
const styles = StyleSheet.create({
backgroundVideo: {
height: height,
position: "absolute",
top: 0,
left: 0,
alignItems: "stretch",
bottom: 0,
right: 0
}
});</code></pre><p>What did we do here?</p><p>We gave the video a <code>position :absolute</code> and we give it the window <code>height</code> of the device. We used the <code>Dimensions</code> from React Native to ensure that the video is taking up the whole hight — <code>top:0, left:0,bottom:0,right:0</code> — so that the video takes up all the space!</p><p>The entire code:</p><pre><code class="language-js">import React, { Component, Fragment } from "react";
import {
Text,
View,
StyleSheet,
Dimensions,
TouchableHighlight
} from "react-native";
import styled from "styled-components/native";
import Video from "react-native-video";
const { width, height } = Dimensions.get("window");
export default class BackgroundVideo extends Component {
render() {
return (
&lt;View&gt;
&lt;Video
source={require("./../assets/video1.mp4")}
style={styles.backgroundVideo}
muted={true}
repeat={true}
resizeMode={"cover"}
rate={1.0}
ignoreSilentSwitch={"obey"}
/&gt;
&lt;Wrapper&gt;
&lt;Logo
source={require("./../assets/cadence-logo.png")}
width={50}
height={50}
resizeMode="contain"
/&gt;
&lt;Title&gt;Join Live And on-demand classes&lt;/Title&gt;
&lt;TextDescription&gt;
With world-class instructions right here, right now
&lt;/TextDescription&gt;
&lt;ButtonWrapper&gt;
&lt;Fragment&gt;
&lt;Button title="Create Account" /&gt;
&lt;Button transparent title="Login" /&gt;
&lt;/Fragment&gt;
&lt;/ButtonWrapper&gt;
&lt;/Wrapper&gt;
&lt;/View&gt;
);
}
}
const styles = StyleSheet.create({
backgroundVideo: {
height: height,
position: "absolute",
top: 0,
left: 0,
alignItems: "stretch",
bottom: 0,
right: 0
}
});
// styled-component
export const Wrapper = styled.View`
justify-content: space-between;
padding: 20px;
align-items: center;
flex-direction: column;
`;
export const Logo = styled.Image`
max-width: 100px;
width: 100px;
height: 100px;
`;
export const TextDescription = styled.Text`
letter-spacing: 3;
color: #f4f4f4;
text-align: center;
text-transform: uppercase;
`;
export const ButtonWrapper = styled.View`
justify-content: center;
flex-direction: column;
align-items: center;
margin-top: 100px;
`;
export const Title = styled.Text`
color: #f4f4f4;
margin: 50% 0px 20px;
font-size: 30;
text-align: center;
font-weight: bold;
text-transform: uppercase;
letter-spacing: 3;
`;
const StyledButton = styled.TouchableHighlight`
width:250px;
background-color:${props =&gt; (props.transparent ? "transparent" : "#f3f8ff")};
padding:15px;
border:${props =&gt; (props.transparent ? "1px solid #f3f8ff " : 0)}
justify-content:center;
margin-bottom:20px;
border-radius:24px
`;
StyledTitle = styled.Text`
text-transform: uppercase;
text-align: center;
font-weight: bold;
letter-spacing: 3;
color: ${props =&gt; (props.transparent ? "#f3f8ff " : "#666")};
`;
export const Button = ({ onPress, color, ...props }) =&gt; {
return (
&lt;StyledButton {...props}&gt;
&lt;StyledTitle {...props}&gt;{props.title}&lt;/StyledTitle&gt;
&lt;/StyledButton&gt;
);
&lt;Video
source={require("./../assets/video1.mp4")}
style={styles.backgroundVideo}
muted={true}
repeat={true}
resizeMode={"cover"}
rate={1.0}
ignoreSilentSwitch={"obey"}
/&gt;
{this.props.children}
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
