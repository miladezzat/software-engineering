---
card: "https://cdn-media-1.freecodecamp.org/images/1*ZtaDNgOvw4DsdUPHmF9uDA.png"
tags: [React Native]
description: Nothing is better than building apps with JavaScript. Unless
author: "Milad E. Fahmy"
title: "What you need to know to start building mobile apps in React Native"
created: "2021-08-15T19:40:17+02:00"
modified: "2021-08-15T19:40:17+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-react-native tag-javascript tag-programming tag-ios tag-android ">
<header class="post-full-header">
<h1 class="post-full-title">What you need to know to start building mobile apps in React Native</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*ZtaDNgOvw4DsdUPHmF9uDA.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*ZtaDNgOvw4DsdUPHmF9uDA.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*ZtaDNgOvw4DsdUPHmF9uDA.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*ZtaDNgOvw4DsdUPHmF9uDA.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*ZtaDNgOvw4DsdUPHmF9uDA.png" alt="What you need to know to start building mobile apps in React Native">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Nothing is better than building apps with JavaScript. Unless you are building mobile apps. JavaScript is for building web apps, and using it to build native mobile app used to not be possible. It was hard for any web developer to dive into building native mobile apps. They have to learn Java, or Objective-C …or any programming language that was used for this purpose.</p>
<p>That is, until Facebook’s <a href="https://facebook.github.io/react-native/" rel="noopener">React Native</a> broke this barrier. React Native comes with great advantages like building cross-platform apps for both Android and IOS. Before React Native, you had to write your code twice — one for Android and one for IOS. That’s no longer the case.</p>
<p>This article is an intro to the world of React Native, so get ready ?.</p>
<h3 id="why-react-native">Why React Native?</h3>
<p>Right, so why React native and not any other technology?</p>
<p>It gives us many solutions that other technologies can not afford. Here is what you can do with React Native:</p>
<h4 id="building-native-mobile-apps">Building native mobile apps</h4>
<p>React Native allows us to write native apps in JavaScript for both iOS and Android. It gives us the ability to use all the native components like gestures, push notifications, camera, and location. There are some other JavaScript libraries for building mobile apps like ionic or PhoneGap. But those libraries use Webview, and the apps built with those technologies are not native.</p>
<h4 id="building-cross-platform-mobile-apps-ios-and-android-">Building cross platform mobile apps (iOS and Android)</h4>
<p>Yeah, with React Native you can build mobile apps that can run on iOS and Android. This is one of the great benefits of React Native. Before Facebook created it, you had to build your app twice and with different code: one for iOS using Swift or Objective-C and one for Android using Java or Kotlin. React Native solved this problem so you can build your React Native app and it will work in iOS and Android. Awesome! ?</p>
<h4 id="write-your-code-all-in-javascript-and-react">Write your code all in JavaScript and React</h4>
<p>While you are building React Native apps, you will actually write JavaScript. <a href="https://reactjs.org/" rel="noopener">Reactjs</a> code allows us to build great UI and user experience components.</p>
<h3 id="getting-started-with-react-native">Getting started with react-native</h3>
<p>Starting with react-native can be exciting, but at the same can be a bit confusing. The first step is to install it, and there are several ways to do it:</p>
<h4 id="using-expo-cli-">Using expo-cli:</h4>
<p>expo-cli is a command line tool. It downloads and installs the React Native boilerplate for you, integrated with <a href="http://expo.io/" rel="noopener">expo</a> API (<a href="https://github.com/react-community/create-react-native-app" rel="noopener">check here for installation guide</a>). It’s an easy way to build a React Native app, and it’s the recommended way if you’ve just started with React Native.</p>
<p>expo-cli gives you many options. You can run and test your application on a mobile device without any configuration. Scan a QR code and your app will open up with expo mobile app. You can explore other mobile applications built with React Native on the browser over a web interface called <a href="https://appetize.io/" rel="noopener">appertize</a>!</p>
<h4 id="using-react-native-cli">Using react-native-cli</h4>
<p>The r<a href="https://facebook.github.io/react-native/docs/understanding-cli" rel="noopener">eact-native-cli</a> does the same job as expo-cli, but with a different approach and extra advantages. The apps that are installed with react-native-cli provide us the option and the ability to create our own native modules in our app. You don’t need to eject your application to be able to make native modules. Ejecting makes you able to use native modules and write you own (<em>we will explore how to write native modules in another part</em>).</p>
<p>Developing React Native apps on different platforms is a different process. Some times we need some specific configuration for a specific platform. For example to build for Android, you need to use the Android SDK, so let’s explore how this works!</p>
<h3 id="building-mobile-apps-for-android">Building mobile apps for Android</h3>
<p>There are some requirements you need to install to start developing for Android. First, you have to download and configure both Android SDK and Android Studio. You can download them with this link <a href="https://developer.android.com/studio/" rel="noopener">here</a>.</p>
<p>After downloading Android Studio you need to install some APIs as well. To do that open Android Studio, then click settings tab this window will open up:</p>
<p>First, check ✔️the platform you want your react-native to support in the SDK Platforms tab (for example Android 6.0 Marshmallow). Then switch to SDK tools.</p>
<figcaption>click on the image to see it clearly</figcaption>
</figure>
<p>And check <code>Android SDK Build-Tools</code>, <code>Android SDK tools</code>, and <code>google play service</code>. Under Android SDK Build-Tools select all the platforms:</p>
<ul>
<li>Starting from 19.0.0 to 20.0.0</li>
<li>From 22.0.0 to 24.0.0</li>
<li>And 25.0.2 , 26.0.1 to 26.0.3</li>
<li>27.0.3 and 28.0.1 to 28.02</li>
</ul>
<p>Now we are done with SDK and Android Studio. The next step is the emulator. The emulator (or the simulator) is where we have to run and test our app. There are many different choices.</p>
<p>You can use Android Studio emulators. You check here how to create an <a href="https://developer.android.com/studio/run/managing-avds" rel="noopener">emulator to use on Android Studio</a>. Honestly I never used them. I prefer <a href="https://www.genymotion.com/" rel="noopener">Genymotion</a> or a real device instead.</p>
<h4 id="genymotion"><strong>Genymotion</strong></h4>
<p><a href="https://www.genymotion.com/" rel="noopener">Genymotion</a> is a desktop application that provides a virtual emulator to test your application. I like to use it a lot because it’s fast. ? It gives you options to create a customized phone with the features that you can find in any real device. For example enable Wifi, Location, and Camera. I highly recommend you use G<a href="https://www.genymotion.com/" rel="noopener">enymotion </a>over Android Studio emulators or any other emulator.</p>
<h4 id="using-real-devices"><strong>Using real devices</strong></h4>
<p>Nothing is better that using real devices to run and test your app. This is because it lets you knows how you application looks like on a real device. It makes you feel the reality of your work in a way the virtual device doesn’t give. So if you have the ability to use a device, don’t hesitate.</p>
<p><strong>Up to this point, we’re ok with Android — but what about iOS?</strong></p>
<h3 id="building-react-native-apps-for-ios">Building react-native apps for IOS</h3>
<p>Running React Native for iOS doesn’t look much different from Android. The same React Native app that runs in Android can run on iOS as well, with some exceptions.</p>
<p>For example if you want to run on an iOS device, you need to have a MacOS. Talking about MacOS and iOS, you don’t need to download any extra dependencies such as the SDK for Android to run React Native on iOS.</p>
<p>Regarding Emulators, Xcode has nice emulators that you can use to test your React Native app. You can check this post that shows <a href="https://www.appcoda.com/ios-simulator-tips-tricks/" rel="noopener">some tricks to use</a> with Emulators.</p>
<figcaption>appcoda <a href="https://www.appcoda.com/ios-simulator-tips-tricks/" rel="noopener" target="_blank" title="">image credit</a></figcaption>
</figure>
<p>In MacOS you can run both iOS and Android. You can definitely install Android Studio and Genymotion on MacOS. This possibility doesn’t exist on a PC where you can only run the Android emulator but not an iOS emulator. So you are lucky ?if you have a MacOS — enjoy ?.</p>
<p>So now we have the environment to build a React Native app and we’ve installed everything, but how is the React Native code written? It’s so simple: you will actually write <a href="https://reactjs.org/" rel="noopener">Reactjs</a> code.</p>
<p>You can check <a href="https://facebook.github.io/react-native/docs/" rel="noopener">the official guide</a> to get some practice with React Native. I recommend this great article to start “<a href="https://medium.com/react-native-training/react-native-youtube-replica-f378200d91f0" rel="noopener">React Native YouTube Replica.</a>” It will guide you step by step to create your first React Native app.</p>
<p>Wow! Up until now you are fine and you are coding with react-native. ? But you need to check and debug your errors and see the logs of your code. Y<em>eah the logs!! So we need a </em>d<em>ebugger!</em> How do you debug with React Native?</p>
<h3 id="debugging-react-native">Debugging react-native</h3>
<p>Debugging your code is very important, not just with React Native but with any other programming language. So in your React Native code, you need to know what’s going on. There are many different ways to debug a React Native app like:</p>
<h4 id="debug-with-chrome-devtools">Debug with Chrome devtools</h4>
<p>React Native gives you the option to use Chrome devtools to see the logs of your app. To debug with Chrome and enable debugging mode in your emulator, on the keyboard just click <code>Ctrl+ m</code>.</p>
<p>This screen will pop-up:</p>
<p>And then choose <code>Debug Js Remotely</code>. This will open a tab in Google Chrome with this address <code>http://localhost:8081/debugger-ui/</code>. That’s for using Chrome devtools, what about other options?</p>
<h4 id="using-react-native-debugger">Using React-native-debugger</h4>
<figcaption><a href="https://github.com/jhen0409/react-native-debugger" rel="noopener" target="_blank" title="">credit react-native-debugger</a></figcaption>
</figure>
<p><a href="https://github.com/jhen0409/react-native-debugger" rel="noopener">React-native-debugger</a> is a great tool to debug React Native code. It’s a desktop application that gives you many advantages. It comes with Redux devtools and React-devtools integration. You can debug the style as well. It’s actually the best debugger for React Native and it’s the one that I use. Usually it’s available on MacOS, Windows, and Linux. Check out <a href="https://github.com/jhen0409/react-native-debugger" rel="noopener">the installation and integration guide</a>.</p>
<p>I think it’s enough at this point. This is the first part of the absolute guide for building mobile apps with React Native. In the next part we are going to dive into more technical tips and issues like how we can use native components, the React native API, integration with other libraries, Redux , GraphQL and stuff like that. So subscribe to this <a href="http://eepurl.com/dk9OJL" rel="noopener">mail-list</a> to stay tuned when the next part comes out. Thank you for your time. ?</p>
<p>You can always find me on <a href="https://twitter.com/@saidHYN" rel="noopener">Twitter</a> ?</p>
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
