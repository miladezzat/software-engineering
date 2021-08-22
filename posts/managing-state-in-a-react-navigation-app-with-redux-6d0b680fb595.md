---
card: "https://cdn-media-1.freecodecamp.org/images/1*nSgapkNUSJdrpAVj9AJswg.jpeg"
tags: [React]
description: by Andrea Bizzotto
author: "Milad E. Fahmy"
title: "Managing State in a React Navigation App with Redux"
created: "2021-08-15T19:48:53+02:00"
modified: "2021-08-15T19:48:53+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-react tag-javascript tag-redux tag-tech tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">Managing State in a React Navigation App with Redux</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*nSgapkNUSJdrpAVj9AJswg.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*nSgapkNUSJdrpAVj9AJswg.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*nSgapkNUSJdrpAVj9AJswg.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*nSgapkNUSJdrpAVj9AJswg.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*nSgapkNUSJdrpAVj9AJswg.jpeg" alt="Managing State in a React Navigation App with Redux">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Andrea Bizzotto</p>
<h1 id="managing-state-in-a-react-navigation-app-with-redux">Managing State in a React Navigation App with Redux</h1>
<figcaption>Image Credit: <a href="https://unsplash.com/@petkovski" rel="noopener" target="_blank" title="">Petar Petkovski</a></figcaption>
</figure>
<p>In this tutorial, I will show how to manage <strong>navigation</strong> and <strong>application state</strong> by building a simple app with <a href="https://github.com/react-navigation/react-navigation" rel="noopener">React Navigation</a> and <a href="https://github.com/reactjs/redux" rel="noopener">Redux</a>.</p>
<p><strong>Prerequisite</strong>: you should already be familiar with React Native, React Navigation, and Redux. If you’re just getting started with React Native, I highly recommend this course:</p>
<ul>
<li><a href="https://www.udemy.com/the-complete-react-native-and-redux-course/learn/v4/overview" rel="noopener">The Complete React Native and Redux Course</a></li>
</ul>
<h3 id="application-overview">Application Overview</h3>
<p>We’re going to build an app made of two pages:</p>
<ul>
<li><strong>Main Page</strong>: This shows a container view with a specific background color, and a button. When the button is pressed, the second page is presented.</li>
<li><strong>Choose Color Page</strong>: This shows RED, GREEN and BLUE buttons. When a color is selected, the app returns to the main page and shows the updated background color.</li>
</ul>
<p>By building this app, you will learn:</p>
<ul>
<li>How to navigate between different screens with <a href="https://github.com/react-navigation/react-navigation" rel="noopener">React Navigation</a></li>
<li>How to use reducers and actions to update application state, so that <strong>actions on one screen drive UI changes on another</strong></li>
</ul>
<p>With this knowledge, you’ll be able to build more complex apps.</p>
<p><strong>Note: </strong>For the remainder of this tutorial, I will use the terms “page” and “screen” to mean the same thing.</p>
<h3 id="project-setup-expo-">Project Setup (Expo)</h3>
<p>We’re going to build this app with the <a href="https://expo.io/" rel="noopener">Expo XDE</a>.</p>
<p>You can download Expo for your OS from the <a href="https://github.com/expo/xde" rel="noopener">Expo XDE GitHub page</a>.</p>
<p>Then head over to the <a href="https://docs.expo.io/versions/latest/introduction/installation.html" rel="noopener">installation instructions</a> on the Expo Docs. These will show you how to install the XDE on your desktop, and run apps within Expo on simulator/device.</p>
<p>As we’ll be running the app on the simulator, you’ll also need to download <a href="https://developer.apple.com/download/" rel="noopener">Xcode</a> or <a href="https://developer.android.com/studio/index.html" rel="noopener">Android Studio</a>.</p>
<p>Upon launching Expo, this page is presented:</p>
<ul>
<li>Select “Create new project…”</li>
<li>Choose the blank template, and name the project <code><strong>redux-navigation</strong></code></li>
</ul>
<p>The project will be created, then the React Native packager will start.</p>
<p>To run the app in the simulator, select <strong>Device -&gt; Open in iOS Simula</strong>tor.</p>
<p>Once the simulator is booted up, the following screen appears:</p>
<p>As the project is now created, it can be opened with your editor of choice. I use <a href="https://code.visualstudio.com/Download" rel="noopener">Visual Studio Code</a> with the <a href="https://marketplace.visualstudio.com/items?itemName=vsmobile.vscode-react-native" rel="noopener">React Native Tools extension</a>.</p>
<h3 id="building-the-app">Building the app</h3>
<p>Before we can code our app, we need to install all the dependencies it needs.</p>
<p>Open a terminal, move to the project folder you created in Expo, and type:</p><pre><code>npm install --save react-navigation redux react-reduxnpm install</code></pre>
<p>Then, <strong>make sure to hit the Restart button in Expo</strong>. If you don’t do this, the new dependencies won’t be recognized and the simulator will throw a red error screen if you try to use them.</p>
<p>Time to build our app. I organized my project folders like this:</p><pre><code>/src  /actions    ColorChangedAction.js  /components    AppNavigator.js    ChooseColorPage.js    MainPage.js  /reducers    AppReducer.js    ColorReducer.js    NavReducer.js  /state    Colors.js</code></pre>
<p>You can replicate this same structure from your terminal:</p><pre><code>cd redux-navigationmkdir src &amp;&amp; cd srcmkdir actions &amp;&amp; cd actions &amp;&amp; touch ColorChangedAction.js &amp;&amp; cd ..mkdir components &amp;&amp; cd components &amp;&amp; touch AppNavigator.js ChooseColorPage.js MainPage.js &amp;&amp; cd ..mkdir reducers &amp;&amp; cd reducers &amp;&amp; touch AppReducer.js ColorReducer.js NavReducer.js &amp;&amp; cd ..mkdir state &amp;&amp; cd state &amp;&amp; touch Colors.js &amp;&amp; cd ..</code></pre>
<p>Copy-paste the following code into the <code><strong>Colors.js</strong></code> file:</p>
<p>Next, create the <code><strong>MainPage</strong></code> with a default background color and a button:</p>
<p>A few notes:</p>
<ul>
<li><code><strong>MainPage</strong></code> is a React component rather than a <a href="https://hackernoon.com/react-stateless-functional-components-nine-wins-you-might-have-overlooked-997b0d933dbc" rel="noopener">stateless functional component</a>, because it will need to access application state</li>
<li>I use <code>flex: 1, alignSelf: 'stretch'</code> to make the container view extend to the whole screen</li>
<li>The color of the container view is defined in the <code>selectedColor()</code> method, which samples <code><strong>RED</strong></code> from our <code><strong>COLORS</strong></code> table, and returns the corresponding hex code</li>
<li>I have added an empty <code>onChooseColor()</code> handler for the button press event. We will add the body of this method later.</li>
</ul>
<p>Time to hook up our <code><strong>MainPage</strong></code> into our root <code><strong>App.js</strong></code> file. Replace the old contents with this:</p>
<p>Refreshing the simulator yields this:</p>
<p>Not pretty, but it shows the background color and our button as intended.</p>
<p>Here is a snapshot of what we’ve built so far: <a href="https://github.com/bizz84/redux-navigation-color-picker/releases/tag/01-main-page" rel="noopener">GitHub Code Snapshot 1</a>.</p>
<h3 id="adding-navigation">Adding Navigation</h3>
<p>We are now ready to add some navigation to our app.</p>
<p>To do this, open the <code><strong>AppNavigator.js</strong></code> file and add these contents:</p>
<p>This code is borrowed from the <a href="https://github.com/react-navigation/react-navigation/tree/master/examples/ReduxExample" rel="noopener">Redux Example</a> in the <a href="https://github.com/react-navigation/react-navigation" rel="noopener">react-navigation</a> project.</p>
<p>It defines a <code>StackNavigator</code>, using our <code><strong>MainPage</strong></code> as its main screen.</p>
<p>It also sets up <code>AppWithNavigationState</code>, a top-level container holding the navigation state. If this seems unclear, don’t worry. This is standard boilerplate code in React Navigation and we’ll just use it for now to get things going.</p>
<p>Time to write the navigation reducer, which will hold the navigation state inside the Redux store. Open the <code><strong>NavReducer.js</strong></code> file and add the following:</p>
<p>This reducer defines the initial navigation state of our app. Again, boilerplate code.</p>
<p>Now, let’s open the <code><strong>AppReducer.js</strong></code> file and add this:</p>
<p>As our application grows, we may need other reducers alongside our <code>NavReducer</code>. So we can combine them all together inside <code>AppReducer</code>.</p>
<p>Finally, we’re able to update our <code><strong>App.js</strong></code> to use all these new goodies:</p>
<p>The render method returns a provider with the created redux store, and holds our top-level component. Again, this is just boilerplate code needed to hook things up with Redux.</p>
<p>If we refresh the simulator, we now see a navigation bar appearing on top:</p>
<p>After all this code, you may get some errors on your simulator if anything is missing. If so, use this code snapshot to get back on track: <a href="https://github.com/bizz84/redux-navigation-color-picker/releases/tag/02-add-navigation" rel="noopener">GitHub Code Snapshot 2</a>.</p>
<h3 id="show-the-choose-color-page">Show the Choose Color Page</h3>
<p>Now that we have a <code><strong>MainPage</strong></code> inside a <code>StackNavigator</code>, we’re ready to add the <code><strong>ChooseColorPage</strong></code> so we can navigate to it.</p>
<p>Open the <code><strong>ChooseColorPage.js</strong></code> file and add the following code:</p>
<p>A few notes:</p>
<ul>
<li>The code in the <code><strong>render()</strong></code> method iterates through each color, and maps it into a <code>Button</code>. The <code>title</code> and <code>color</code> properties are set.</li>
<li>When the button is tapped, the <code>onSelectColor()</code> handler is called with the appropriate color key.</li>
<li>The <code>navigation</code> object is accessible via <code>props</code>. In fact, it is injected into all the screens in our <code><strong>AppNavigator</strong></code>.</li>
<li>Calling <code>this.props.navigation.goBack()</code> takes us back to the previous screen in the <code><strong>AppNavigator</strong></code>.</li>
<li>At this stage, <code>colorName</code> is not yet used to set any state.</li>
</ul>
<p>Next, we have to make our <code><strong>AppNavigator</strong></code> aware of the new <code><strong>ChooseColorPage</strong></code> screen. Let’s update it in the <code><strong>AppNavigator.js</strong></code> file:</p>
<p>Finally, add the code to navigate to the <code>ChooseColorPage</code> when the <code><strong>Choose Color</strong></code> button is tapped on the <code><strong>MainPage</strong></code>.</p>
<p>If we refresh the simulator now and tap on <code><strong>Choose Color</strong></code>, the app navigates to the new screen, which shows three buttons:</p>
<p><strong>Note: </strong>Calling <code>navigation.navigate('ChooseColor')</code> works because we have named <code><strong>ChooseColor</strong></code> as one of the routes in our <code><strong>AppNavigator</strong></code>.</p>
<p>Tapping on the back button or on any of the color buttons brings us back to the main page, but the background color doesn’t change according to our selection.</p>
<p>Let’s fix that in the next section.</p>
<p>Again, if something is not working, you can get my saved code snapshot to this point: <a href="https://github.com/bizz84/redux-navigation-color-picker/releases/tag/03-add-choose-color-page" rel="noopener">GitHub Code Snapshot 3</a>.</p>
<h3 id="managing-application-state">Managing application state</h3>
<p>We’ll use Redux to set the background color of our <code><strong>MainPage</strong></code> as our application state.</p>
<p>To do this, we need to define a Color Changed action, and a Color Reducer.</p>
<p>Open the <code><strong>ColorChangedAction.js</strong></code> file and add the following:</p>
<p>Then, open <code><strong>ColorReducer.js</strong></code> add add this:</p>
<p>In order for this reducer to be used, we need to add it to the <code><strong>AppReducer.js</strong></code> like so:</p>
<p>Now, we’re ready to call our <code>colorChanged</code> action when the user selects a color in the <code><strong>ChooseColorPage</strong></code>. This is the updated <code><strong>ChooseColorPage.js</strong></code> file:</p>
<p>Note that we have made three changes:</p>
<ul>
<li>Imported the <code><strong>colorChanged</strong></code> action at the top</li>
<li>Connected it with <code>connect()</code> and <code><strong>mapStateToProps</strong></code></li>
<li>Used it inside <code>onSelectColor(colorName)</code></li>
</ul>
<p>At this stage, we can refresh the simulator and run. If we choose a different color, the background color of the <code><strong>MainPage</strong></code> still doesn’t change.</p>
<p>This is because we haven’t told <code><strong>MainPage</strong></code> to use the new state.</p>
<p>Easy to fix. Open <code><strong>MainPage.js</strong></code> and add the required code:</p>
<p>A few notes:</p>
<ul>
<li><code><strong>mapStateToProps</strong> </code>now sets the <code>colorName</code> from the state in the <code><strong>ColorReducer</strong></code></li>
<li>This is then accessible via the <code>props</code> object and can be used inside <code>selectedColor()</code></li>
<li>Don’t forget to <code>import { connect } from 'react-redux';</code> at the top</li>
</ul>
<p>If we try the app again in the simulator, we are now able to change the background color. ?</p>
<p>Updated snapshot: <a href="https://github.com/bizz84/redux-navigation-color-picker/releases/tag/04-color-application-state" rel="noopener">GitHub Code Snapshot 4</a>.</p>
<h3 id="bonus-presenting-the-color-selection-page-modally">Bonus: Presenting the Color Selection Page Modally</h3>
<p>When we tap the <code><strong>Choose Color</strong> </code>button in the <code><strong>MainPage</strong></code>, the <code><strong>ChooseColorPage</strong></code> slides in from the right. This is the default navigation animation inside <code><strong>StackNavigator</strong></code>.</p>
<p>What if we wanted to present the <code><strong>ChooseColorPage</strong></code> modally instead?</p>
<p>This is easily done by changing the configuration of our <code><strong>AppNavigator</strong></code> like so:</p>
<p>Note the addition of <code><strong>navigationOptions</strong></code> with a <code><strong>headerLeft: null </strong></code>property inside <code><strong>ChooseColor</strong></code>, and the <code><strong>mode: ‘modal’</strong></code> parameter.</p>
<p>If we try this on the simulator, the <code><strong>ChooseColorPage</strong></code> now slides in from the bottom.</p>
<p>React Navigation is very customizable. I recommend spending some time reading the documentation <a href="https://github.com/react-navigation/react-navigation" rel="noopener">for the project</a>, to learn all the things you can do with it.</p>
<h3 id="wrap-up">Wrap Up</h3>
<p>We have learned how to:</p>
<ul>
<li>Setup and use Expo to run a mobile app on the simulator</li>
<li>Build an app with two different pages and navigate between them with React Navigation</li>
<li>Use actions and reducers to modify state from a screen, and use it to update the UI on another</li>
</ul>
<p>You can find the complete source code <a href="https://github.com/bizz84/redux-navigation-color-picker" rel="noopener">on GitHub here</a>.</p>
<p>I also shared the project publicly <a href="https://expo.io/@bizz84/redux-navigation" rel="noopener">on Expo here</a>.</p>
<p>I hope you enjoyed this tutorial. A good next step from here is to look at the official <a href="https://github.com/react-navigation/react-navigation/tree/master/examples" rel="noopener">React Navigation Examples</a>, as well as the other <a href="https://github.com/react-navigation/react-navigation#community-contributions" rel="noopener">tutorials from the community</a>.</p>
<p>Comments and feedback are appreciated. ?</p>
<p>And if you ???, I may even do a step-by-step video tutorial. ?</p>
<p><strong>About me:</strong> I’m a freelance iOS developer, juggling between contract work, open source, side projects and blogging.</p>
<p>I’m <a href="https://twitter.com/biz84" rel="noopener">@biz84</a> on Twitter. You can also see my <a href="https://github.com/bizz84" rel="noopener">GitHub</a> page. Feedback, tweets, funny gifs, all welcome! My favourite? Lots of ???. Oh, and chocolate cookies.</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
