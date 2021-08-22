---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9ca3b5740569d1a4ca5d65.jpg"
tags: [React Native]
description: "Fritz is a platform that’s intended to make it easy for devel"
author: "Milad E. Fahmy"
title: "How to use the Style Transfer API in React Native with Fritz"
created: "2021-08-16T11:30:59+02:00"
modified: "2021-08-16T11:30:59+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-react-native tag-machine-learning tag-mobile-app-development tag-technology tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">How to use the Style Transfer API in React Native with Fritz</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9ca3b5740569d1a4ca5d65.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9ca3b5740569d1a4ca5d65.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9ca3b5740569d1a4ca5d65.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9ca3b5740569d1a4ca5d65.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9ca3b5740569d1a4ca5d65.jpg" alt="How to use the Style Transfer API in React Native with Fritz">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p><a href="https://www.fritz.ai/" rel="noopener">Fritz</a> is a platform that’s intended to make it easy for developers to power their mobile apps with machine learning features. Currently, it has an SDK for both Android and iOS. The SDK contains ready-to-use APIs for the following features:</p><ol><li><a href="https://www.fritz.ai/features/object-detection.html" rel="noopener">Object Detection</a></li><li><a href="https://www.fritz.ai/features/image-labeling.html" rel="noopener">Image Labeling</a></li><li><a href="https://www.fritz.ai/features/style-transfer.html" rel="noopener">Style Transfer</a></li><li><a href="https://www.fritz.ai/features/image-segmentation.html" rel="noopener">Image Segmentation</a></li><li><a href="https://www.fritz.ai/features/pose-estimation.html" rel="noopener">Pose Estimation</a></li></ol><p>Today, we’ll explore how to use the Style Transfer API in React Native.</p><p>I was only able to develop and test in Android (no Macs here!) and got a working application.</p><p>The Style Transfer API styles images or video according to real art masterpieces. There are 11 pre-trained artwork styles, including Van Gogh’s Starry Night and Munch’s Scream, among others.</p><p>The app we’ll be developing allows the user to take a picture and convert it into a styled image. It will also allow the user to pick the artwork style they wish to use on the image.</p><p>The app will contain a Home page, where the user can pick the art style. It will also include a separate Camera View, where the user captures the image.</p><blockquote>Note: The following tutorial is for the Android platform only.</blockquote><h4 id="prerequisites">Prerequisites</h4><ol><li>React Native CLI: run <code>npm i -g react-native-cli</code> to globally install the CLI</li></ol><p>Since there is no default React Native module for Fritz, we’ll need to write our own. Writing a native module means writing real native code to use on one or both platforms.</p><h3 id="step-1-creating-the-rn-app-and-install-modules">Step 1 — Creating the RN app and install modules</h3><p>To create the app, run the following command in the terminal:</p><pre><code>react-native init &lt;appname&gt;</code></pre><p>Move into the root of the folder to begin configuration.</p><p>For navigation, we’ll be using <a href="https://reactnavigation.org/" rel="noopener">React Navigation</a> and <a href="https://github.com/react-native-community/react-native-camera" rel="noopener">React Native Camera</a> for the Camera View.</p><p>To install both dependencies, run the following command in the terminal:</p><pre><code>npm i --save react-navigation react-native-camera</code></pre><p>Follow the instructions <a href="https://reactnavigation.org/docs/en/getting-started.html#installation" rel="noopener">here</a> to configure React Navigation for the app. We’ll need to install <code>react-native-gesture-handler</code> as well, as it’s a dependency of React Navigation.</p><p>Follow the instructions <a href="https://github.com/react-native-community/react-native-camera#android" rel="noopener">here</a> to configure the React Native Camera for the app. We can stop at step 6, as for this example we will not be using text, face, or barcode recognition.</p><h3 id="step-2-including-fritz-sdk-in-the-app">Step 2 — Including Fritz SDK in the app</h3><p>First, we need to create a Fritz account and a new project.</p><p>From the Project overview, click on Add to Android to include the SDK for the Android platform. We’ll need to include an App Name and the Application ID. The Application ID can be found in <code>android/app/build.gradle</code>, inside the tag <code>defaultConfig</code>.</p><p>Upon registering the app, we need to add the following lines in <code>android/build.gradle</code>:</p><pre><code>allprojects {
.....
repositories {
.....
maven { url "https://raw.github.com/fritzlabs/fritz-repository/master" } //add this line
}
}</code></pre><p>Afterward, include the dependency in the <code>android/app/build.gradle</code>:</p><pre><code>dependencies {
implementation 'ai.fritz:core:3.0.2'
}</code></pre><p>We’ll need to update the <code>AndroidManifest.xml</code> file to give the app permission to use the Internet and register the Fritz service:</p><pre><code class="language-xml">&lt;manifest xmlns:android="http://schemas.android.com/apk/res/android"&gt;
.....
&lt;uses-permission android:name="android.permission.INTERNET" /&gt;
&lt;application&gt;
.....
&lt;service
android:name="ai.fritz.core.FritzCustomModelService"
android:exported="true"
android:permission="android.permission.BIND_JOB_SERVICE" /&gt;
&lt;/application&gt;
&lt;/manifest&gt;</code></pre><p>We then need to include the following method within the <code>MainActivity.java</code>:</p><pre><code class="language-java">import ai.fritz.core.Fritz;
import android.os.Bundle; //import these two as well
public class MainActivity extends ReactActivity {
.....
@Override
protected void onCreate(Bundle savedInstanceState) {
// Initialize Fritz
Fritz.configure(this, "&lt;api-key&gt;");
}
}</code></pre><h3 id="step-3-create-the-native-module">Step 3 — Create the Native Module</h3><p>Since the SDK only supports iOS and Android, we’ll need to make the native module. To get a better understanding of this, refer to the docs here:</p><p><a href="https://facebook.github.io/react-native/docs/native-modules-android" rel="noopener"><strong>Native Modules · React Native</strong></a><br><a href="https://facebook.github.io/react-native/docs/native-modules-android" rel="noopener"><em>Sometimes an app needs access to a platform API that React Native doesn't have a corresponding module for yet. Maybe…</em>facebook.github.io</a></p><p>To make an Android Native module, we’ll need to make two new files. They will be within the root package of the Android source folder.</p><ol><li><code>FritzStyleModule</code>: This contains the code that will return the styled image</li><li><code>FritzStylePackage</code>: This registers the module so that it can be used by the JavaScript side of the app.</li></ol><h4 id="fritzstylemodule">FritzStyleModule</h4><pre><code class="language-java">package com.fritzexample;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import java.util.*;
import java.io.*;
import android.graphics.*;
import ai.fritz.fritzvisionstylepaintings.PaintingStyles;
import ai.fritz.vision.styletransfer.*;
import ai.fritz.core.FritzOnDeviceModel;
import ai.fritz.vision.*;
public class FritzStyleModule extends ReactContextBaseJavaModule {
private final ReactApplicationContext reactContext;
public FritzStyleModule(ReactApplicationContext reactContext) {
super(reactContext);
this.reactContext = reactContext;
}
@Override
public String getName() {
return "FritzStyle";
}
@ReactMethod
public void getNewImage(String image, String filter, Callback errorCallback, Callback successCallback) {
try {
// Get the style of painting the user wishes to convert the image into.
FritzOnDeviceModel styleOnDeviceModel;
switch (filter) {
case "STARRY_NIGHT":
styleOnDeviceModel = PaintingStyles.STARRY_NIGHT;
break;
case "BICENTENNIAL_PRINT":
styleOnDeviceModel = PaintingStyles.BICENTENNIAL_PRINT;
break;
case "FEMMES":
styleOnDeviceModel = PaintingStyles.FEMMES;
break;
case "HEAD_OF_CLOWN":
styleOnDeviceModel = PaintingStyles.HEAD_OF_CLOWN;
break;
case "HORSES_ON_SEASHORE":
styleOnDeviceModel = PaintingStyles.HORSES_ON_SEASHORE;
break;
case "KALEIDOSCOPE":
styleOnDeviceModel = PaintingStyles.KALEIDOSCOPE;
break;
case "PINK_BLUE_RHOMBUS":
styleOnDeviceModel = PaintingStyles.PINK_BLUE_RHOMBUS;
break;
case "POPPY_FIELD":
styleOnDeviceModel = PaintingStyles.POPPY_FIELD;
break;
case "RITMO_PLASTICO":
styleOnDeviceModel = PaintingStyles.RITMO_PLASTICO;
break;
case "THE_SCREAM":
styleOnDeviceModel = PaintingStyles.THE_SCREAM;
break;
case "THE_TRAIL":
styleOnDeviceModel = PaintingStyles.THE_TRAIL;
break;
default:
styleOnDeviceModel = PaintingStyles.THE_TRAIL;
break;
}
// Initialize the style Predictor with the selected artwork style.
FritzVisionStylePredictor stylePredictor = FritzVision.StyleTransfer.getPredictor(styleOnDeviceModel);
// Get the Base 64 encoder and decoder.
Base64.Decoder decoder = Base64.getDecoder();
Base64.Encoder encoder = Base64.getEncoder();
// Decode the base 64 image into an array of bytes.
byte[] decodedString = decoder.decode(image);
// Convert the byte array into an Bitmap image from the beginning (0) to the end
// (decodedString.length) of the array.
Bitmap bitmap = BitmapFactory.decodeByteArray(decodedString, 0, decodedString.length);
// A standard input class for the style Predictor.
FritzVisionImage visionImage = FritzVisionImage.fromBitmap(bitmap);
// Convert the normal image into a styled image according to the selected
// artwork style.
FritzVisionStyleResult styleResult = stylePredictor.predict(visionImage);
// Get a Bitmap image from the styled Result.
Bitmap styledBitmap = styleResult.getResultBitmap();
ByteArrayOutputStream baos = new ByteArrayOutputStream();
// Compress the Bitmap image into a .png image and add it to the output stream
// baos.
styledBitmap.compress(Bitmap.CompressFormat.PNG, 0, baos);
// Convert the output stream into a byte array.
byte[] b = baos.toByteArray();
// Encode the byte array into a base 64 image.
String newImage = encoder.encodeToString(b);
// Send the styled images' base 64 string through the success callback to the
// Javascript side.
successCallback.invoke(newImage);
} catch (Exception e) {
errorCallback.invoke(e.getMessage());
}
}
}</code></pre><p>The React method being used has a success and error callback. The chosen artwork style and a base64 of the original image are sent to the method. The error callback is invoked when an <code>Exception</code> is thrown and returns the error. The success callback returns a base64 encoded string of the converted image. On a high-level, the above code does the following:</p><ol><li>Initializes the style predictor with the user’s choice of artwork.</li><li>Converts the original base64 image into a <code>Bitmap</code>.</li><li>Creates a <code>FritzVisionImage</code>, which is the input of the style predictor.</li><li>Converts the <code>FritzVisionImage</code> into a styled <code>FritzVisionStyleResult</code>, which is the converted image.</li><li>Gets a <code>Bitmap</code> out of the <code>FritzVisionStyleResult</code>.</li><li>Converts the <code>Bitmap</code> into a base64 to be sent back to the JavaScript side of the app.</li></ol><h4 id="fritzstylepackage">FritzStylePackage</h4><pre><code class="language-java">package com.fritzexample;
import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
public class FritzStylePackage implements ReactPackage {
@Override
public List&lt;NativeModule&gt; createNativeModules(ReactApplicationContext reactContext) {
List&lt;NativeModule&gt; modules = new ArrayList&lt;&gt;();
// Append the DataUsage Module to the list of Native module list, that is
// reffered by the React-Native code
modules.add(new FritzStyleModule(reactContext));
return modules;
}
@Override
public List&lt;ViewManager&gt; createViewManagers(ReactApplicationContext reactContext) {
return Collections.emptyList();
}
}</code></pre><p>This class is used to register the package so it can be called in the JavaScript side of the app.</p><p>This class is also initialized in the <code>getPackages()</code> of <code>MainApplication.java</code>:</p><pre><code class="language-java">@Override
protected List&lt;ReactPackage&gt; getPackages() {
return Arrays.&lt;ReactPackage&gt;asList(
new MainReactPackage(),
......,
new FritzStylePackage() //Add this line and import it on top
);
}</code></pre><p>Now on to the JavaScript side of the application.</p><h3 id="step-4-creating-the-ui">Step 4 — Creating the UI</h3><p>To do this, we’ll be creating/updating the following pages:</p><ol><li>Home.js — Display the picker of artwork styles and the final result.</li><li>CameraContainer.js — Display the camera view to capture an image.</li><li>FritzModule.js — Export the above-created Native module to the JavaScript side.</li><li>App.js — Root of the app which includes the navigation stack.</li></ol><h4 id="home-js">Home.js</h4><pre><code class="language-js">import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Image, Picker } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
export default class Home extends Component {
// Hide the header
static navigationOptions = {
header: null,
}
constructor(props) {
super(props);
// initialize the picker with the first value
this.state = {
filter: "BICENTENNIAL_PRINT"
}
}
render() {
// Get the following parameters from navigation props, if they have a value.
const { navigation } = this.props;
const oldImage = navigation.getParam('oldImage');
const newImage = navigation.getParam('newImage');
return (
&lt;View style={styles.container}&gt;
&lt;ScrollView&gt;
&lt;View style={styles.innerContainer}&gt;
&lt;Text style={styles.welcome}&gt;React Native Fritz Example!&lt;/Text&gt;
&lt;Text style={{ fontSize: 18 }}&gt;Style Transfer&lt;/Text&gt;
&lt;Picker style={{ width: "100%" }} selectedValue={this.state.filter} mode="dropdown" onValueChange={(value) =&gt; this.setState({ filter: value })}&gt;
&lt;Picker.Item value="BICENTENNIAL_PRINT" label="Bicentennial Print" /&gt;
&lt;Picker.Item value="FEMMES" label="Femmes" /&gt;
&lt;Picker.Item value="HEAD_OF_CLOWN" label="Head of Clown" /&gt;
&lt;Picker.Item value="HORSES_ON_SEASHORE" label="Horses on Seashore" /&gt;
&lt;Picker.Item value="KALEIDOSCOPE" label="Kaleidoscope" /&gt;
&lt;Picker.Item value="PINK_BLUE_RHOMBUS" label="Pink Blue Rhombus" /&gt;
&lt;Picker.Item value="POPPY_FIELD" label="Poppy Field" /&gt;
&lt;Picker.Item value="RITMO_PLASTICO" label="Ritmo Plastico" /&gt;
&lt;Picker.Item value="STARRY_NIGHT" label="Starry Night" /&gt;
&lt;Picker.Item value="THE_SCREAM" label="The Scream" /&gt;
&lt;Picker.Item value="THE_TRAIL" label="The Trail" /&gt;
&lt;/Picker&gt;
&lt;Button title="Take Picture" onPress={() =&gt; this.props.navigation.navigate('Camera', { filter: this.state.filter })} /&gt;
{/* Display the images, only if the values are not undefined or empty strings */}
{oldImage &amp;&amp; &lt;Image style={styles.imageStyle} source={{ uri: 'data:image/png;base64,' + oldImage }} /&gt;}
{newImage &amp;&amp; &lt;Image style={styles.imageStyle} source={{ uri: 'data:image/png;base64,' + newImage }} /&gt;}
&lt;/View&gt;
&lt;/ScrollView&gt;
&lt;/View&gt;
);
}
}
const styles = StyleSheet.create({
container: {
flex: 1,
flexDirection: 'column',
backgroundColor: '#F5FCFF',
},
innerContainer: {
flex: 1,
flexDirection: 'column',
justifyContent: "center",
alignItems: "center",
padding: 20
},
welcome: {
fontSize: 20,
textAlign: 'center',
margin: 10,
},
imageStyle: {
width: 250,
height: 250,
marginVertical: 5
}
});
import { RNCamera } from 'react-native-camera';
import { View, StyleSheet, Button, Alert, ActivityIndicator } from 'react-native';
import FritzStyle from "./FritzModule";
const styles = StyleSheet.create({
container: {
flex: 1,
flexDirection: 'column',
backgroundColor: "#000",
position: 'absolute',
height: '100%',
width: '100%'
},
preview: {
flex: 1,
justifyContent: 'flex-end',
alignItems: 'center',
},
cameraButton: {
position: "absolute",
bottom: 0,
width: "100%",
backgroundColor: "#000",
alignItems: "center",
justifyContent: "center",
paddingVertical: 10
},
});
class CameraContainer extends Component {
// Hide the header
static navigationOptions = {
header: null,
}
constructor(props) {
super(props);
// Initialize below properties
this.state = {
oldImage: '',
newImage: '',
loading: false
};
}
render() {
return (
&lt;View style={styles.container}&gt;
&lt;RNCamera
ref={ref =&gt; {
this.camera = ref;
}}
style={styles.preview}
type={RNCamera.Constants.Type.back}
captureAudio={false}
&gt;
{/* Display the button to take picture only if camera permission is given */}
{({ camera, status }) =&gt; {
if ((status !== 'NOT_AUTHORIZED')) {
return (
&lt;View style={styles.cameraButton}&gt;
{/* Display spinner if loading, if not display button */}
{this.state.loading ? &lt;ActivityIndicator size="large" color="#FFF" /&gt; : &lt;Button onPress={this.takePicture.bind(this)} title={"Take Pic"} /&gt;}
&lt;/View&gt;
);
}
}}
&lt;/RNCamera&gt;
&lt;/View&gt;
);
}
takePicture = async function () {
// set loading to true on button click, to show user and action is taking place.
this.setState({ loading: true });
// Get the chosen artwork filter picked byt user.
const { navigation } = this.props;
const filter = navigation.getParam('filter');
// If the reference to the camera exists.
if (this.camera) {
// Take a base64 image with the following options.
const options = { quality: 0.75, base64: true, maxWidth: 500, maxHeight: 500, fixOrientation: true };
const data = await this.camera.takePictureAsync(options);
// Set the old image as the one captured above.
this.setState({
oldImage: data.base64
},
() =&gt; {
// Call the native module method and pass the base64 of the original image and name of selected artwork style.
FritzStyle.getNewImage(data.base64, filter,
// Error Callback
(error) =&gt; {
// Display an alert to tell user an Arror was encountered.
console.log(error);
Alert.alert("Alert", "An Error has occured.");
},
//Success Callback
(newData) =&gt; {
// Set the new image as the one sent from the success callback.
this.setState({
newImage: newData
},
() =&gt; {
// Navigate to the Home page, while passing the old and converted image.
this.props.navigation.navigate("Home", {
oldImage: this.state.oldImage,
newImage: this.state.newImage
});
});
});
}
);
}
}
}
export default NativeModules.FritzStyle;</code></pre><p>This page exposes the Native module, <code>FritzStyle</code>. This allows the JavaScript side to make calls to the method <code>getNewImage</code>.</p><h4 id="app-js">App.js</h4><pre><code class="language-js">import React, { Component } from 'react';
import Home from './src/Home';
import CameraContainer from './src/CameraContainer';
import { createStackNavigator, createAppContainer } from 'react-navigation';
const AppNavigator = createStackNavigator({
Home: { screen: Home },
Camera: { screen: CameraContainer }
});
const AppContainer = createAppContainer(AppNavigator);
export default class App extends Component {
render() {
return (
&lt;AppContainer /&gt;
);
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
