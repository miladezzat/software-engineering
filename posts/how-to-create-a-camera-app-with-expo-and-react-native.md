---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c9825740569d1a4ca186e.jpg"
tags: [React Native]
description: If you are not familiar with expo, it's a client that helps y
author: "Milad E. Fahmy"
title: "How to Create a Camera App with Expo and React Native"
created: "2021-08-15T19:28:13+02:00"
modified: "2021-08-15T19:28:13+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-react-native tag-react tag-photography tag-javascript ">
<header class="post-full-header">
<h1 class="post-full-title">How to Create a Camera App with Expo and React Native</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c9825740569d1a4ca186e.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9825740569d1a4ca186e.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9825740569d1a4ca186e.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9825740569d1a4ca186e.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c9825740569d1a4ca186e.jpg" alt="How to Create a Camera App with Expo and React Native">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>If you are not familiar with <a href="https://expo.io/">expo</a>, it's a client that helps you build React Native apps with less build complexity. It also helps you deal with the stress of installing and setting up your environment to run React Native.</p>
<p>In this tutorial, we will be building a simple camera app in which the user can take pictures, see previews of their pictures, use flash mode, and switch between the front and the back cameras.</p>
<h2 id="prerequisites">Prerequisites</h2>
<p>Expo doesn't require much to start building your first React Native app. You can learn more about installing <a href="https://docs.expo.io/get-started/installation/">expo and the expo-cli here in the docs</a>.</p>
<p>Note: in this tutorial, I will be using macOS and iOS. You can use Android as well, there is not much difference when using expo at this point.</p>
<p>You can install expo and expo-cli globally by running the following command:</p><pre><code class="language-shell">npm install --global expo-cli</code></pre>
<p>Expo requires <a href="https://nodejs.org/en/">Nodejs</a> in order to run. You can run the latest version on the official website <a href="https://nodejs.org/en/">here</a>.</p>
<h2 id="getting-started">Getting Started</h2>
<p>After you've installed Expo and Nodejs, you can start bootstrapping a new Expo project with the command below:</p><pre><code class="language-shell">expo init expo-camera-app</code></pre>
<h3 id="how-to-install-the-packages-and-run-the-app">How to install the packages and run the app </h3>
<p>Expo provides us with a client app where we can run and see the preview of the app we are building. It's available on both the <a href="https://apps.apple.com/us/app/expo-client/id982107779">App Store</a> and <a href="https://play.google.com/store/apps/details?id=host.exp.exponent">Google Play</a> to download.</p>
<p>This is the interface of the app.</p>
<h3 id="how-to-init-an-expo-project">How to init an expo project</h3>
<p>Go the app directory and run the app.</p><pre><code class="language-shell">cd expo-camera-app
</code></pre>
<p>You will be asked a few questions to select the default template for the app. In this tutorial we simply select a blank (TypeScript) option, but again you are free to choose what is right for you.</p>
<h3 id="run-the-app">Run the app</h3>
<p>After bootstrapping the project, we can run the app with <code>expo run</code></p>
<p>This will open a window in your browser where you can see the logs. It will also generate a QR code that you can scan to run the app on your device.</p>
<p>The good thing about expo is that you don't need to install and configure the simulators to run the app. It still gives you the option to run expo on the simulator, but you have to install and configure the simulator by yourself.</p>
<p>Back to our app. Assuming you've successfully run the app on the device, this will be the default screen:</p>
<p>Open the app directory in your favorite code editor. I'm using <a href="https://code.visualstudio.com/">VS Code</a>.</p>
<p>The <code>App.tsx</code> will look like this:</p><pre><code class="language-jsx">import {StatusBar} from 'expo-status-bar'
import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
export default function App() {
return (
&lt;View style={styles.container}&gt;
&lt;Text&gt;Open up App.tsx to start working on your app!&lt;/Text&gt;
&lt;StatusBar style="auto" /&gt;
&lt;/View&gt;
)
}
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#fff',
alignItems: 'center',
justifyContent: 'center'
}
})
</code></pre>
<h2 id="how-to-create-the-ui">How to create the UI</h2>
<p>After having the project running, now it's time to start creating some UI.</p>
<h3 id="install-expo-camera">Install expo-camera</h3>
<p>The next step is to install <a href="https://docs.expo.io/versions/latest/sdk/camera/">expo-camera</a>, like this:</p><pre><code class="language-shell">expo install expo-camera</code></pre>
<p>We will create a simple UI that will allow the user to start the process of using the camera.</p>
import React from 'react'
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native'
export default function App() {
return (
&lt;View style={styles.container}&gt;
&lt;View
style={{
flex: 1,
backgroundColor: '#fff',
justifyContent: 'center',
alignItems: 'center'
}}
&gt;
&lt;TouchableOpacity
style={{
width: 130,
borderRadius: 4,
backgroundColor: '#14274e',
flexDirection: 'row',
justifyContent: 'center',
alignItems: 'center',
height: 40
}}
&gt;
&lt;Text
style={{
color: '#fff',
fontWeight: 'bold',
textAlign: 'center'
}}
&gt;
Take picture
&lt;/Text&gt;
&lt;/TouchableOpacity&gt;
&lt;/View&gt;
&lt;StatusBar style="auto" /&gt;
&lt;/View&gt;
)
}
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#fff',
alignItems: 'center',
justifyContent: 'center'
}
})
</code></pre>
<p>It's a simple UI: we import <code>TouchableOpacity</code> for the button and do some simple styling. If you are wondering how styling works in React Native, you can check out my two articles here:</p>
<ul>
<li><a href="https://blog.bitsrc.io/styling-in-react-native-c48caddfbe47">Styling in React Native</a></li>
<li><a href="https://blog.bitsrc.io/demystifying-flexbox-in-react-native-4b62979fa9ea"> Demystifying Flexbox in React Native</a></li>
</ul>
<p>Now we have to use a <code>useState</code> hook to manage the state and display the camera view when the user press the <strong>take picture</strong> button.</p><pre><code class="language-jsx">  &lt;TouchableOpacity
onPress={__startCamera}
style={{
width: 130,
borderRadius: 4,
backgroundColor: '#14274e',
flexDirection: 'row',
justifyContent: 'center',
alignItems: 'center',
height: 40
}}
&gt;
&lt;Text
style={{
color: '#fff',
fontWeight: 'bold',
textAlign: 'center'
}}
&gt;
Take picture
&lt;/Text&gt;
&lt;/TouchableOpacity&gt;</code></pre><pre><code class="language-jsx">  const [startCamera,setStartCamera] = React.useState(false)
const __startCamera = ()=&gt;{
}</code></pre>
<p>There are two important things we have to do when the user presses the button:</p>
<ul>
<li>Ask permission to access the camera. In mobile development, accessing many native APIs and mobile features is often restricted by the user's permissions and the privacy. It's just something that you have to get used to when developing mobile apps.</li>
<li>Change the state and present the camera.</li>
</ul>
<p>Let's import the camera module from <code>expo-camera</code> with this command:</p><pre><code class="language-jsx">import {Camera} from 'expo-camera'</code></pre>
<p>And add the camera view, like this:</p><pre><code class="language-jsx">    &lt;Camera
style={{flex: 1,width:"100%"}}
ref={(r) =&gt; {
camera = r
}}
&gt;&lt;/Camera&gt;</code></pre>
<p>We can use <code>ref</code> to access the camera's methods:</p><pre><code class="language-jsx">let camera: Camera</code></pre>
<p>When the <code>take picture</code> button is pressed the <code>__startCamera</code> function will be called:</p><pre><code class="language-jsx">  const __startCamera = async () =&gt; {
const {status} = await Camera.requestPermissionsAsync()
if(status === 'granted'){
// do something
}else{
Alert.alert("Access denied")
}</code></pre>
<p>The function will ask for permission first. If the user grant access to the camera, we can proceed and open the camera. If not, we show a simple alert. </p>
<h3 id="add-the-camera-component">Add the camera component</h3>
<p>Let's display the camera when the user grants access to the device's camera.</p><pre><code class="language-jsx">  const __startCamera = async () =&gt; {
const {status} = await Camera.requestPermissionsAsync()
if (status === 'granted') {
// start the camera
setStartCamera(true)
} else {
Alert.alert('Access denied')
}
}</code></pre>
<p>We have to make some changes to the UI and add a conditional rendering. We display the camera only when the user requests it, otherwise we display the default screen.</p><pre><code>  {startCamera ? (
&lt;Camera
style={{flex: 1,width:"100%"}}
ref={(r) =&gt; {
camera = r
}}
&gt;&lt;/Camera&gt;
) : (
&lt;View
style={{
flex: 1,
backgroundColor: '#fff',
justifyContent: 'center',
alignItems: 'center'
}}
&gt;
&lt;TouchableOpacity
onPress={__startCamera}
style={{
width: 130,
borderRadius: 4,
backgroundColor: '#14274e',
flexDirection: 'row',
justifyContent: 'center',
alignItems: 'center',
height: 40
}}
&gt;
&lt;Text
style={{
color: '#fff',
fontWeight: 'bold',
textAlign: 'center'
}}
&gt;
Take picture
&lt;/Text&gt;
&lt;/TouchableOpacity&gt;
&lt;/View&gt;
)}</code></pre>
<p></p>
<p>Cool, now we need to add a button so we can take the actual picture.</p>
<h3 id="add-the-capture-button">Add the capture button</h3>
<p>This is a simple <code>View</code> inside the camera view that has an absolute position. So we make sure that it is always on the top of the camera.</p><pre><code class="language-jsx">    &lt;View
style={{
position: 'absolute',
bottom: 0,
flexDirection: 'row',
flex: 1,
width: '100%',
padding: 20,
justifyContent: 'space-between'
}}
&gt;
&lt;View
style={{
alignSelf: 'center',
flex: 1,
alignItems: 'center'
}}
&gt;
&lt;TouchableOpacity
onPress={__takePicture}
style={{
width: 70,
height: 70,
bottom: 0,
borderRadius: 50,
backgroundColor: '#fff'
}}
/&gt;
&lt;/View&gt;
&lt;/View&gt;</code></pre>
<h3 id="how-to-take-a-picture">How to take a picture</h3>
<p>The app should take a picture when capture button is pressed. That function will look like the below:</p><pre><code class="language-jsx">  const __takePicture = async () =&gt; {
if (!camera) return
const photo = await camera.takePictureAsync()
}</code></pre>
<p>First, we check that we have access to the <code>Camera</code> component using <code>ref</code>:</p><pre><code class="language-jsx">  if (!camera) return
// if the camera is undefined or null, we stop the function execution</code></pre>
<p>Then we take the picture by calling the <code>takePictureAsync</code> method. It returns a promise and an object that contains the picture's details. The result will look like this:</p><pre><code class="language-js">Object {
"height": 4224,
"uri": "file:///var/mobile/Containers/Data/Application/E6740A15-93AF-4120-BF11-6E8B74AFBF93/Library/Caches/ExponentExperienceData/%2540anonymous%252Fcamera-app-ee0fa3c8-1bb1-4d62-9863-33bf26341c55/Camera/19F0C5DD-7CA6-4043-8D89-AF65A1055C7E.jpg",
"width": 1952,
}</code></pre>
<p>We are only interested in the Picture URL <code>uri</code>. After we take a picture, we have to show the photo preview and hide the camera view. To do that we will use two hooks to change the state:</p><pre><code class="language-jsx">  const [previewVisible, setPreviewVisible] = useState(false)
const [capturedImage, setCapturedImage] = useState&lt;any&gt;(null)</code></pre><pre><code>  const __takePicture = async () =&gt; {
if (!camera) return
const photo = await camera.takePictureAsync()
console.log(photo)
setPreviewVisible(true)
setCapturedImage(photo)
}</code></pre>
<ul>
<li> <code>setPreviewVisible</code> to show the preview</li>
<li><code>setCapturedImage(photo)</code> to store the object result</li>
</ul>
<p>Then we display the preview like this:</p><pre><code class="language-jsx">  {previewVisible &amp;&amp; capturedImage ? (
&lt;CameraPreview photo={capturedImage} /&gt;
) : (
&lt;Camera
style={{flex: 1}}
ref={(r) =&gt; {
camera = r
}}
&gt;
&lt;View
style={{
flex: 1,
width: '100%',
backgroundColor: 'transparent',
flexDirection: 'row'
}}
&gt;
&lt;View
style={{
position: 'absolute',
bottom: 0,
flexDirection: 'row',
flex: 1,
width: '100%',
padding: 20,
justifyContent: 'space-between'
}}
&gt;
&lt;View
style={{
alignSelf: 'center',
flex: 1,
alignItems: 'center'
}}
&gt;
&lt;TouchableOpacity
onPress={__takePicture}
style={{
width: 70,
height: 70,
bottom: 0,
borderRadius: 50,
backgroundColor: '#fff'
}}
/&gt;
&lt;/View&gt;
&lt;/View&gt;
&lt;/View&gt;
&lt;/Camera&gt;
)}</code></pre>
<p>The <code>CameraPreview</code> component looks like this:</p><pre><code class="language-jsx">const CameraPreview = ({photo}: any) =&gt; {
console.log('sdsfds', photo)
return (
&lt;View
style={{
backgroundColor: 'transparent',
flex: 1,
width: '100%',
height: '100%'
}}
&gt;
&lt;ImageBackground
source={{uri: photo &amp;&amp; photo.uri}}
style={{
flex: 1
}}
/&gt;
&lt;/View&gt;
)
}</code></pre>
<p>And the result looks like this:</p>
<h3 id="how-to-re-take-a-picture">How to re-take a picture </h3>
<p>We can add some buttons to the preview that will allow the user to perform more actions. For example, they could re-take the photo or save it.</p>
<p>Add the <code>savePhoto</code> and <code>retakePicture</code> props to the <code>CameraPreview</code> component like this:</p><pre><code>&lt;CameraPreview photo={capturedImage} savePhoto={__savePhoto} retakePicture={__retakePicture} /&gt;</code></pre>
<p>When the <code>Re-take</code> button is pressed, we will have to hide the preview, remove the current picture, and show the camera again. Do that with the following code:</p><pre><code class="language-jsx">  const __retakePicture = () =&gt; {
setCapturedImage(null)
setPreviewVisible(false)
__startCamera()
}</code></pre>
<h2 id="how-to-add-other-options-back-camera-flash-and-more">How to add other options – back camera, flash, and more</h2>
<p><strong>expo-camra</strong> offers many options for customizing the camera, like FlashMode, setting the Camera type (front/back), zooming, and so on.</p>
<h3 id="how-to-add-flashmode">How to add FlashMode</h3>
<p>Let's add an option so the user can turn FlashMode on and off:</p>
<p>We simply create a small button to switch off/on the flash, like this:</p><pre><code class="language-jsx">        &lt;TouchableOpacity
onPress={__handleFlashMode}
style={{
position: 'absolute',
left: '5%',
top: '10%',
backgroundColor: flashMode === 'off' ? '#000' : '#fff',
borderRadius: '50%',
height: 25,
width: 25
}}
&gt;
&lt;Text
style={{
fontSize: 20
}}
&gt;
⚡️
&lt;/Text&gt;
&lt;/TouchableOpacity&gt;</code></pre>
<p>And we just change the state when the button is pressed:</p><pre><code class="language-js">  const [flashMode, setFlashMode] = React.useState('off')
const __handleFlashMode = () =&gt; {
if (flashMode === 'on') {
setFlashMode('off')
} else if (flashMode === 'off') {
setFlashMode('on')
} else {
setFlashMode('auto')
}
}</code></pre>
<p>And then we add FlashMode props:</p><pre><code class="language-jsx">    &lt;Camera
flashMode={flashMode}
style={{flex: 1}}
ref={(r) =&gt; {
camera = r
}}
&gt;&lt;/Camera&gt;</code></pre>
<h3 id="how-to-access-the-front-and-the-back-camera">How to access the front and the back camera</h3>
<p>We will add a button that switches between the back and front camera.</p>
<p>We can get the default camera type directly from the camera module like below:</p><pre><code>  const [cameraType, setCameraType] = React.useState(Camera.Constants.Type.back)</code></pre>
<p>Add <code>type</code> props like this:</p><pre><code class="language-jsx">    &lt;Camera
type={cameraType}
flashMode={flashMode}
style={{flex: 1}}
ref={(r) =&gt; {
camera = r
}}
&gt;&lt;/Camera&gt;</code></pre>
<p>And add the switch button:</p><pre><code class="language-jsx">&lt;TouchableOpacity
onPress={__switchCamera}
style={{
marginTop: 20,
borderRadius: '50%',
height: 25,
width: 25
}}
&gt;
&lt;Text
style={{
fontSize: 20
}}
&gt;
{cameraType === 'front' ? '?' : '?'}
&lt;/Text&gt;
&lt;/TouchableOpacity&gt;</code></pre>
<p>And switch function:</p><pre><code class="language-jsx">  const __switchCamera = () =&gt; {
if (cameraType === 'back') {
setCameraType('front')
} else {
setCameraType('back')
}
}</code></pre>
<p>Here is the result:</p>
<p>You can find the full source code on <a href="https://github.com/hayanisaid/expo-camera-tutorial/tree/master">GitHub</a>.</p>
<h2 id="wrapping-up">Wrapping up</h2>
<p>In general, Expo is an amazing tool that can save you a lot of time. It helps you start building directly and saves you the pain of environment setup. </p>
<p>Sometimes you may want to build a native extension and handle using native features in your own way. In this case I'd recommend using the <a href="https://github.com/react-native-community/cli">react-native</a> CLI so you can modify and play with native code easily.</p>
<blockquote>Hi, my name is Said Hayani. I created <a href="https://subscribi.io/">subscribi.io</a> to help creators, bloggers and influencers grow their audience through the newsletter.</blockquote>
<p>Join my <a href="https://subscribi.io/subscribe/5f63b2b306cb71c069272c47">Mailing list</a> if you are interested in reading more about React Native.</p>
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
